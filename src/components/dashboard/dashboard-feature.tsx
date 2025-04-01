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
    "5DaNTtETam3qGLohhV8JA8CZbW2vDZAvTDb9j8EkYJkAhmCdApAZi8oefK24FXgvGBf7BcBWgbvsGBvRfsCEJVq2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Zq5NcVnn3pzby9jJuNhQYgTSGNuZLyfFTk2RGhUDZxoeXucZodByYpvUqr53XPmuoeniu11c2RDhnxPjqshovy5",
  "key1": "4nMPTGGPG6LJQpkGPKENyHrybMdgJvuk4uG4JBgu2g1EW7F3KvHTy1Wo2QDJsRxSVKrmycqWyCf3xPHw2FaY96uk",
  "key2": "4HTdTxHEepexRDUZrPUHV8zq13q4i3aJk7HHf86h1hQqNSfmtHcSfUtDuQwHdPSoFdxUWvECkwb4buHUGQcY8Sk2",
  "key3": "3RCFajogNbWVBexYNVj2EfM8h46nxp1XG5iKbxXsxrk22c4gfd81JAhhKmoSEkju1JnDTDmMLeT37VdxJqkDemSk",
  "key4": "4de55nYpZEw3E5ppuez7WGBDkt23Yn1Huv2ns73pM1u36pMnyJ9pCrRY2ne2fUAyLbiA6LeESr9b742N9GegxZ8h",
  "key5": "3i4iMDQojQR7eDRv81PnqvaK3B6xNPWXR4iSwaFRUQNePg8VtyGj958tvkVRxEC8SLXStFB62x8YcxeSetijC3na",
  "key6": "2PoLq5ys5bDPCLBu8LWVn6BHowMZ2Cq8tpN1bhDXteesHdTFLD9YkAGpn7UPGEvyV4FUfK9hLhKUVhLpWehCpVQ5",
  "key7": "5UnV5KZsciHWQ5BKgJZRrhJNPEKUyXLmYdPTzAK29FZeF6in1PwP4ipGwbQToQEiahiQCJHy5DoQsDJ7ZxdiK1PA",
  "key8": "2wCYXXcFBnLgA6dNQLN5R46ptrg9QZ8SuVQexBJPuRSN6Gyz9JC4FTEkoVAJFs7EX3Dv6jfbj4pfP4UuwhjycoMk",
  "key9": "2TMfPEjDFu91b73wGWMYotSudWLomVLUWTxc9JVnjwnzHT9RbSn9mVaLPsdSabbsZz4oUVBEjLzWTTY31KFGGqSy",
  "key10": "2XrHLPgaoPiFP63muzut98vn2NAhHDPWzeKmK4UuiMraAX6ZxATo3H6pJ2yL9DEDeEhzUzwwGxu1PcZZw1KS1oi5",
  "key11": "mHDVsjE2zMqMGwQokvywju2H4oDSq5D7hHrb1VH4pPuH6LzUC48SfJqjhAFwmQt9uYqoBBizP7JdQbBFbeqRnPt",
  "key12": "3GvMq2NSBuATTMqXRgmwrifjXvaLxMoFZ2JXPQCURbBJJpysZktdczFqZEYRmavkJ7vXsCgxLbVFMgU5H5eEwYWF",
  "key13": "ZfSxo2ypCeKkHTC3grFcpdbaJH74J8Z8SZwn36ocaeeymSyxJvTsEaF2Ujb8eoPS8RB86WvuzsPVwweeo17Xrn4",
  "key14": "2rWnynB7hSsTWYqRn9ju1wDMLugEfp82RDeXWyHLHSLqcmZE2duddGhbscYHqu9BvmLgamjwbg4L1ciareEtxBpV",
  "key15": "Krw6W9Ff5rPX74hAVgFAnWo6k2ctpWvpY4dZWH8Eity7oixWdxfCxpBZoGHatPuQk1R7RGQbYMmpE7rNModh1pG",
  "key16": "h6iMFYo3KVF1pHaoBgMMF5N4DHd4CNvVdSHNQtCsDF1ss2ycQr1BNkceHxk8KEeaPsyiYdZwzEaTEQG42bCCmdP",
  "key17": "5aeb8PEVqaz9vUqkJ57Y2x4XmM7nKwNg7zdFha2o79H2qiaJM7MP7UYq86DgfR5vS1vDUN4LD8KjKrEEyi6JNuCG",
  "key18": "3wNv1FS7YPm6yrJ1XcqBkcVXEZrgaf4BRsJ9LsixAMgh3wb3mkfaABuYrN8GV9UyiFXhVgZFiKqisfguPNxN4jDS",
  "key19": "24dZy6mECwbvqnAXVEZXJd8tYJAdd1AL79L5fSfn8MnQMDwwNhHgHm9BLayThFuG6pUgU7oxKjxFTAEQjC4ZvGZn",
  "key20": "5BDhzhn8GUnPAFu8tgmEEG7nNFQFX1XoGJFjCEFgQvyM3WmgYYh1yHFN4ZdLHf2EMdYvMWC65dC3aGfWicupYETP",
  "key21": "4MyDKj8Lupu755PWFfGQAHfjJm2CYcW3KNzSettLV6ESM3qif6PZHc6NgKnwjySyetLTpgNpWoCU8shbopvG2N2P",
  "key22": "4rRxzFfkCLhqQJK1FWtv4dfG87YwqvCaBLsarTYuNYUHUMDD8cU4GxvRmaAUhja4eWv1usC3hPVCpXsYLJKwBCCz",
  "key23": "2g6cBaDHj1ksYQbQ15zoBSrLfFwMXkXEYwvcjggiBniVVcr2p3hUp4Ya68tUdcMSiLxMSsxVyhV5eBUqC46B4c1H",
  "key24": "2stotCe5FjdKDTiAySmUAnyMQjBpBQQqkJPjzdegaNzENjTgMQ7pLxaEAtMLiYJkNhTpUkznKiYokf8bjyhv3Q38",
  "key25": "htz1C6qk6fbmaDqnRrpyaw3E2KCFepLasv8zCR8MR3cYqwZTp2zgNwjfnJepvsAoVSfD7hatT7n5BzNVuFatk3g",
  "key26": "3V5wp32EqWxUEytgUGJw3LjmGxwMSnhfL1PPJXEfy7WJEbBFdTLeHywqBLBxfBDUi4qzz29re6ZQh7eKEmjhvtTU"
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
