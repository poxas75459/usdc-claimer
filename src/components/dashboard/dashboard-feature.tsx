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
    "kc7haN6dy9ZtSc5afhdSujCaihMihRGJsPbiAys5MUy9TujT9vo8od9z1x6UDxR6kyGc3pidfKYVNZGJgmTiXdR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "611pz7fdGNGLNwS1EWpexFmrgoj6nd43R77d5RJKWvjatwxPUM4aAFyxQnbT74rUjfGkBvz8TvKKYBR5L7BHNFek",
  "key1": "5tewnGGBxuo7FEyiMrppJE8S16tngBr1RwnmNMbHAVomCwCa8N7dV2e1RLXLc5LwVnCwVuEg8eWCU5rRghxV8Koq",
  "key2": "5bKucMDrSVmvBfERkMMdghnLouwayy1JvRh78WFTWShLV13wA6bnMy9twJLXB2cCByHgRrXc9f5MPeu9xTNGjxEt",
  "key3": "VPEhTJLKWZqTQsjMZsai9kd7Tbn7aecjnVtK3VCemmSDrsHiVH9dwS4hekFF9MkrPQbAERoQBnbEg7jEDunoBuA",
  "key4": "43pmdvysruFnPo2cP1uBsHVpivpMyG4BEUXUrG1qLSuMhCrgsTMCFNK8WwSYR4boxNfc677YXG74AUG3PQtNvjrw",
  "key5": "AgRJj8G9zkVddYJJwJYXL6iWo3KHufb7u3Rx2CSoiG4prCJDruheLhxXrUQxVRJfXQmA8Bg3GQTWNRcQGZGDAUz",
  "key6": "4auT8A2DDE6iDFGGZtZPdkGmHLBM6W7m9fieZuSLoZ6q2noHU9r9LTkNbGqrnHaQXoKwMdpUHBvafRfEPPVCPKP2",
  "key7": "34eZxRgsHuXN6hWsyB9o555Uizjg8uw9xo1Lv9YDHAS1F9x7ZWKkzauGfATrg6SHJ2tVWEBjcGwB4Q646Y9zG2U6",
  "key8": "57PKsoCZ23Niu8Z5LBXngeTMzR87de4e3dkWbsTJrWiVCCcEDV6xaDKxgRn8BFxaDjvjWrERQwHh8nyyW6uFv4NH",
  "key9": "4D1NLXa33CCdznjEFoEiAmXS3eDeUcbs1cHuy8XK3E1N1U5VwuyJVZqYaM6VAFPWFokb4GPmibRodGmv9PDGPRHZ",
  "key10": "5Ck9bBUTa6msT6qDPXQuQP5mcQT2gAsdgAUcrncVz5FLrJwBE5PnhV7JMxQP175EiyaGwJYY1Wxu8bNeyoZJvWHt",
  "key11": "4UWUYhL11yND9H2szMJe6HqN32HqVaCryERz9rwKx3Y58R3yn7bbzgYUvaABEm4fKSXmrRU9eCUNSgeu2WkKWkFg",
  "key12": "5HTyngVF2E2kyRKa8oALWmKA753sALg7xn3pHP8eoesyuyPMypZn4KvQtWt8d7UnHSn3CUnabtq6ueYTT9A7DptL",
  "key13": "5WUYkfJtSKpFKQriH8zgRNLZ9LaUFJd7uLwmxt8n3wZZVBL7qPdwxbjupBvWTYUmstNSVkQdXm8ZCoSPc8Zooknt",
  "key14": "4kx83op1dr8KB2aydey1bAEVQCCQ2N91XEHTM5o5aS9T81ypcq1oJ1qu4yTeaXVvmyz7ZFk8ts474jorhnpTaSVK",
  "key15": "K5jeZgjQgqn4jC6WLAcZQjGFgnxvkAzkbaeqCCTuUUTri4JiuwTAc6ujc2xD75nbmdXqz7qRQYnpXrtn8CsNitu",
  "key16": "4X5xJbdeQqJkvQpxTWZ9saReu6Z4EKwRgsFjjkKDiV5aGkw25Vh5NE8xyKBZk4UPZeAryZ3G5Y4fPkMBmLYW3rr8",
  "key17": "eCPvuxyNyVzDaDCmtQLVNnpQZgagm6FXZWtWjZ7cnVMfSojNQ1UYKf78SNFfA3WTiYvgS8WsXshjwCeYHa4eVzz",
  "key18": "67dNYLzqNDcbUe98mSJT8Z4xJwZKEN4tLFpAbADhztwXQSNGJNDgoaL7nEEojAkDL9sN6RyecwYGUy9sXacStjRG",
  "key19": "4L5QDyD6aKUw6EUHaQDEuSUMnMX2WKHyhdnkHUiqQFQkrn5vNSAFkdUDpRs7ZEYdFvdwNThrqbYEjzJJFC8FMDVT",
  "key20": "5CNWho7cHZWctxspK2pyvh9MbnE8Wi3TosJVkwySr3Bte1PzJCWUwxb5Jy2hk4swUaqGsYgAnwZaXb6npfFxRRTZ",
  "key21": "5bRDhj16cXgd7RhNGLUR1p8CH25NjwvpThrCYij8UnwpRitq6Ymo5kJ26Kdvot9jsLv2qe21rXnDCfwQq5yqspE3",
  "key22": "35Aq94zFWoPvjpMe9A9NW8aNszp5R4RRGgYYoF4LuBc2Zj8LqvfYVL8K3r3wAuL89JEiskCb8GHxxu8h32VkZ8XL",
  "key23": "2v8SZTSCTWCv4MmVpV38iy23juuTJ114L7Ua5pyTBggLPSvyLRbJr2ScjCxWJzNTv3bdn2AdSzig9zfQ5eyNnMv",
  "key24": "aRhqGhJZF3558FijYhaenGPrZd1rCmjkPnxKUuNw2XdkE3pNz7GKc3XbBA1E9x4dUTtVVuEEVYSwJnE5aWPQPxX",
  "key25": "4jmzDBV3Lo37h1wUpcsnMykNYfYdR2Bw3C4buMBWK13DvonMX9zQbPYvVj7dGynjb2yAPtQeCsQcYmCZbFaDjoRa",
  "key26": "3KV2QVipmFVbytBgAqtYskVdrVjKZ6csukg5n8FDsiQScSh5H5QajJPoaBJeW79rbTsQfozmE4souNXYfSJR8pzE",
  "key27": "3nwihPPEDE9FWJawwUMiSG3yj3NtLtrqsKTeEYWXibeZxwpxCzxv4T1F4arBXErXxwKjtUnfP4aeMuc8G8Gz8r5N",
  "key28": "5Nt4u8JZToCAhDeax7AF982WaXwnaiUj96sBXNXV6cpZmxEqBqLVkEUtGvYdZvGnLXj9V2sFtsjVS3AhkEMY4HN5"
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
