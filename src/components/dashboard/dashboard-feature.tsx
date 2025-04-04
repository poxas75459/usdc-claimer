/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "28roQbw4DvuMyn55qGpVB645pgVZo2yAfYjzhKxhFi2CBci3493Qk3LaHJEESBLkwJtPKHSH3w9HzVEefuk3uCor"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aGVbK7zSkUYMwnwdYxBr3MytYRqZKGr6CtF5jW4txosPDwhTQmzh6TULMX9Swsqk1FJsskDPRvXf599gbd2QLek",
  "key1": "3nZXkWVciPXUCAb26DyMD1kJwZkLMuundf7zK9HK1fbjPYz5vLg3u2JGWVcmXqmnvYAN2MQDCQ9VPjTZB8XnKtMY",
  "key2": "3SGZo6gTWfxMfpgfxfCjW3pAkHXDZse1n8NATdi3faHuHKoYEViKfBtYmUrBUP8dk3cRezQBJ34qkSMqkierFV5k",
  "key3": "2XC5oWn7UZAt2etoWnW7Au2BVXNhTRYeTKQs4ZR2f3D2oky9sgTjWjWSqbBeW8rxdMvXFQrBkQBzdpb6nrS9WPnP",
  "key4": "5TeAqx4NaqnosGwMN9FhYkbmD1yCBsnvaJ7CCUcP2KangpjCcSnMKLJ6vGNHiakm9mon8TUNfJmTwDU5WW3jiYCS",
  "key5": "54Rn4AKD8NEsuWyG3P8pKiBBjubPdVoomb3jxesKdrCXTF5VgfEc9kPY7yVeGAsNi84t8nMarcnJFhg6WCu6f9jD",
  "key6": "35gBCNEFUioAwUA5MjVsGrgMHoBSiwVbssE3EPWFnpC9DKXtJQUmVcFST5mmhgRDGA5NFnKQwxsLsso8AHbvcisu",
  "key7": "4Q1ioSPLQAs3sVQrSsDAPmPEGoTPxbAYAA5LzwBnyQpGjBiRaq2cuv4n8T5z6JqMA1u4N7yCQmbBe4mTyU1m4RJK",
  "key8": "5HzZQ8ECPZZSnt3vcarKjMXfJ47HwZkPwsAEbf5Gq4UoS4bq16W9pW853Rx4vV3aU2aEjFa6x35LKVCuJzxJANE8",
  "key9": "2U965r8zrdXDRVv5enaTJfB8dX314n1e9dnXF3XCUi381MAD1rcr15koox8BbEKsiwS3c1kXYSRBT55Y5wYWacE9",
  "key10": "2WEWzD9goZHcdVrUn2FvUerkAtWFVrBFoirtcBvUnuvZJnXN9e4c8yH6V2qjQ7UBWHJJfnPN9mkYD3An4tiejsJN",
  "key11": "Bmi8ymZeimQrCzUQH63bcT4sTwFnf4kdMAsbZuuaHejrNmSdy9QeacZHVAjywTWH5wromd5xwz5PPa4yVFCSrvj",
  "key12": "623Bz2bwNnizXBdeTUprSQ9vMWNJ7c3mez96B7E2M9w7xuWDdCneotQ6BzA5F2w6EWAVTEGTGx73Q5tkyf8ScgBs",
  "key13": "41sg8NSEYpoHQnaCK92KJBk3LFCN9U7G2PjDYJmk8qn3X3EwcJVpjGRGg5pa7rhrtPfyf1SnSqtENj5GW9rKRv1R",
  "key14": "35HYyqDbKZ2jXJeHUV68ve5YGnqNtfbu6BPxPU49DzNXxWXAAquge1uWsseuKbPYdmH1CXDJCMeoTNYwgw6nd2Q7",
  "key15": "5bkzGyuSqtNsU2KWCerfj3cKa271NdignF2Z8QzuUncC2UHhLNtHonxPvsMqvFiSFjfAxF8ciFf547oeWbuztNie",
  "key16": "36ubYdsBGxronvUrRTtrE2P95igVb9DoMgxZq9jWvpCCYN6bmynMN4ax5Qb1SnvGXNrkYrfmiUCQNomFcuPczmsE",
  "key17": "WS7qePos19PU6bKMFUc68HuvpgoLzR7533Ep729E4mJZ1HVz7ujjFriRUwF7qpxb9ExhJNVvB66MJdC93AKhRHs",
  "key18": "JuTiAreiKdXeu9JjAy4m2xcZpPkAoxNuKVvRKWoCvgyc3KRpcu8ZStroCWkjeChTBQdqovXzN6Z2ReCL5shg8Ci",
  "key19": "2ebjo6ARAWFLEU8ysCUkassaqr3rxMpZWN1RWZHf27Cwwrtha2HCEZ3Y8pn2RzZsTEnnbHpVsdppGaQdFJkAsad9",
  "key20": "4uTELKdVPvxpqEQs3gydr9c9tpqDyAD2FuUcHUPzo6jah7paFk7ra1tjG1qvU8QRqBdwM1MszDpgXMShRomfjAJZ",
  "key21": "2iZ6CPharfs7hsLPpcs8kh5XcPFLWpg1Kd3r8LC2tU4WT3t1GSMg5xnGVPSYrzzJdeMXQp1cRCT1K3XFYzZkEhpH",
  "key22": "4G9T5kW12VagGR9v6ekBR5oTJqgu1hGofEsNYfmh1DyxWCqr72UC9XkgzvFCceiZaFY2sBCsSz22KTabCuCWAnXJ",
  "key23": "5cZXikYqPm1sD14coHaUqH87fnqMykwJVu8dHPhv4GEF36anZzuKgx4LRAxrZQdk4A8b4SGjdzTScJCCjNtseEB4",
  "key24": "4tG8k1dCNqWPLwDBe84beYYzNuvWoaZfjggymz6ty12HPYm3R6GcT1C6jVDhXkk2sZHoKKzgJJgP13x2fdC834k3",
  "key25": "5Fk4xFrorqdzfbbqpp8cjEUV5Ltr64A9iAjGTqkFKi5SrLgnKANt7AT8A1havFwid6oLtM7MEN7LHNtumidCPssx",
  "key26": "4oB9PzwvYLVJLFi2xYEQzeAmjGfZu5v49cMvYbtcRmYTrjdzpfD8eDxF5NwFBTmBYTJo8zFo4db2Xe8qLT2pc6gR",
  "key27": "5Y88MEFxHQzEUGypj6ijDJg8N67cRdtLpAXjc8a1afocM4vcWe22bRGDYa5AkcdL1nFRLNGGefAwXmUyeV2zfA1a",
  "key28": "2QdigmcH7fPo47ug85WmBeMvtbgVvNZhPBqAW1W5iLtyGqFh9YEZUabXg3x97sNVGWbq9M41RwuJWxFTp5gNSXNZ",
  "key29": "4h6Kkyw9fwXyK6rMcjiWGoFCQrzZk9VjshiCyNQ6JHY3hY7Mjedf8Xx7ibvNN9uGyitDdF1QXcWSaPCRcriJuLWY",
  "key30": "3fEJTFVUTLjpDXeTMuWo5e3oo8hucWNbWWszmauw1zAuRWTxBrwDMw6yf1Qsof4xqdYeye9yzorjjKbKeUBNTLYg",
  "key31": "4XPpjJVeW9Gq8UnoXVN1Wsc4NP4jnAMxYk3znHTbTZAchedmLqQYid4RjR12CFnBS4WmkRUw7D6nR8uamryrGcer",
  "key32": "4dus4SVoLrHmzcLVLmUXF76h7VSzGkmS5sGzc8LQuVFMiZdMdRVGGh9KpgKXHH3udGkEFnn5BQ59E7k9rMVyQdQp",
  "key33": "3WeprSiHwhWCaBt9FZzfe24UqcBhsxDEvbKPZpXPdDVDfYNxqC5EMURXCksVamKGVUNccXnJ8uQUjL6NRnURcsXm",
  "key34": "2LmZxTN64q4pu3YSgk2C7iHuN52BNWfaTf67cbdUbTBTwufjVgCev7hXq67h9jQPRL3Ui7uSgW72YPbk7REPsvjw",
  "key35": "2nQtSaG84cMScFLvdPZCUp7PcqrxgDKfyDDRjPWuCEibVBLy87jYPkVkvSDSwgqrBVCZc6GnSaHCyaVkrQfiMRRs"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
