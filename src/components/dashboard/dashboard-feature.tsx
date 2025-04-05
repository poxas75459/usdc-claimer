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
    "jQc6ZTSBQPkws3ecTc8Tnyhn1rTrzNJgHriNoGY2y2sj4vzaqvxp8THb9vEttvuV7pr7AZQf5vzJHu5UbQTmrB5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ym5adZx4WxzeoqhaUzqGFbpk2WYwD8PLSayZ2fZApDrwt6ytqLdHgkaD13ViDDae7Dgy6XdTuPQYSKPKKbKLbuv",
  "key1": "4pehQHxV2VLTMD9WbrPkqWST123Tiyc3DeEcGmwM673PrYUD6fKbsSnmNUHL5XfvPee3zDS2U5SzHzkZxtSnEXLn",
  "key2": "2GV3c1Zfynqdx84g3YBbbSXG9MGgWK7NqQkmeaboe8o5Fu542ZmZYBYor1Rb3iaRRhNWBizVY33XgT29J9nNH2ZB",
  "key3": "5xEJQZGYhMWk2eDSXCAJtx1dBbk6wb8Q3ck71tUyU7AcGiHKcv1qh6YfZx1ZRgQxrFns3o9uzBMD8PgZrXWe96Ei",
  "key4": "56fxwCoFoZv98opSkxeBJsjX4JbXNaphWUW65mUrcDBF9knZEtLJMQHq4Ratja765NgSEYhPKtRMYpysyBn8CyoF",
  "key5": "2nadHPxcYgsf8qrefgztAXg3JcsA8R1QjV1CnBYS841bCmtsqnAUVT1jeAAUqrNejBdX8inHWRraahSyiYAwQ3uy",
  "key6": "4GSUEnTrpXNQ8ioiNhq1no6BEDSaYAnu23NGJ9ZgkbteUXVJxEQV3TVvy2eH3LqrSxffwZYqEVrXYPG9pcnAyD1w",
  "key7": "5WnknGn4m1iqNd6mkwJsjw3XFy1bszwHHq9EWcBh3e1P1DZmmzwJaRco2jRtqoAtw91UE5o5e4EBcTVf2ySynC1r",
  "key8": "12A51mW2MDNLtbNXx7ZxN5zrVETGAUM7vpdhNRA4ifu6ACatsahaVkd5QaazwZNrDcAsFnXGAV5e6ZibvXTHvSXt",
  "key9": "3N4NFV9xen4tXYdVa6ciJ15toWSJhASksuW8UqPVq9NMzxfCbMNocSyEsgokrhMqkMq79gj41vh25rDBHDj6BYcG",
  "key10": "2KbGoHqCptAudeNLvijSUmQbGbtUZw8rHi42bAG44S7yKeP5TPHfmy1A6wtMEoiBNHRz2M5LAVPEdUqsX1P711wT",
  "key11": "4mgGKEzp1BW5Mdaj8iKVqLj6QB8rLm2gznd2ZkMUFiQk3A5KV7ybfbiMKnERVWPawvnb5U5HtTXP7rzmsLTtp5A6",
  "key12": "2hFSTdhbCmqzUdQkguQ4d2mqEGDj5bg2uJMM1Dg2hAoUX96rgtvE6jpQKx3GxH6W11g7cXCCu5nvHpt9oTVd93A9",
  "key13": "4LvekWLqFRLWXatQUdZWC5NnaxL7YNEwgGn7taaEwnzPDm4qdqtpTh9f7T53XdncXbc9w6ZGJ49z3yQoHFG9oby9",
  "key14": "2LezgiVCNQ2hDHR2iYZeWpGCDAPCNcGZVai9wz9Vdz1aX6v1vegGkai6KQjAdQqpjSNkkj9eumSCxWYdMv97sGcM",
  "key15": "324CtaudYE1jSXTPEXbcrhhcWbSgQ7dQ8rKHb4DVZcp5tw3TSqX1r7KwWyrLk7GNXk2E6zrCXCy3LdY2NNW4e8jr",
  "key16": "4qM2JF8hAHFD7Z7MzCdSwtJPWRWobw7rx88ZbRB1GQrEo74cBj94sSba7e1gvqRGyP7Vd1u2vNGnVoD521bbcL8v",
  "key17": "2RRGmLiJeh7VzJt7BH1Fpi8KTGszaFhJLUyoiW4HNEhL3F9scQg4d65Cc8JJm31iU4CrkgVESYw55yBJq5eQhxDj",
  "key18": "61DbBRLLV6ThyrzTiDLBay56MWQaDHEMhFhTkPEjk6BxTn2t2T6Hfzc9aBaa7JLxgMavFuHMFf1unwhpo8bU49y5",
  "key19": "5jmkConqBQjvePPnL1XjGtQdoHGLg36i98vEXdbNViJP9rKijcEb14ipFjcSXqBTPGkLxUKMziSicAxagVoF52uB",
  "key20": "mxTmoQHLavnpVSK9v2Hd2MKjQnHuckrHrkKBVXAF9goDDTpb4bJkBHatT6fDNvKom8tLCWfeg89MSwm5PTJFQf1",
  "key21": "C2AyNnvKJEEcdCoeTYkYKngW5XE8Rvn6d1LowQbb5Poy8azh7hrMSmgXrFgE7U5VWG1pnfF1i8jtoq7ebWRZ1aq",
  "key22": "5ErTV9ChEhct3XpfpHFJ5swmggpsNoc5PAD32GmoykgAEgwedcMWicRSSC6MFznuGFZvvWgGv2Vb1s1mBgsLEXPn",
  "key23": "5sHv2zxh5cQR9UF84pmbNurs3UBqp9xXYGaMehqf46MrZPaamnLxnP7jnEKAeDDXYAYr2rMH1J6EbCSAVXBvQDjN",
  "key24": "55XLA6FgAgumGPBJNVoGLPVFFBj9EQoxKoZUczLFunkLKuSrSg4Da8R4xTAkNMDQCgQsBHfLfAhQ73uPRbLUuKa6",
  "key25": "5ACdgwDFyPGaQdi5fyEdbAzGTYfGzsRk1AVtp9pymjt2a632gggKsAjR2eGhkdHRSgh1KpudC3Ljq7L5VYVXHWVT",
  "key26": "2hz2A7oTsmDpMngPub7KRgmkA5Wooy3KtDGeYUjoSvWtdCL4xFfknwv71NmfMNEnRj3yABZCBwpnK978DEcok1v9",
  "key27": "3iJbzjCtmB1ZiWBVyixJexc8EXPNkbJXp35y4Ho393mvtKq27VihPDJTFKPmD7xsAyBpBBxpALKRtsbQP8CYBB4U",
  "key28": "2RWWP8e8DBgzCRgUBkBr7UhqnHfDwK6buCQZNctH5jhRKa6aZJ7EExEeghJGUXcrJqbfwgcYycbgLyFibhAWrGhL"
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
