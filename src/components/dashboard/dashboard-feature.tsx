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
    "4wTm3dAmTKGR79RfGsU7AuqnvyZ6ZYiLKj8gE3MZGtoT4QEb85bgbx2ifX4QNrsrFzE26RNaNW1ynvDEiBNn5YNy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f6gg8mRSzfVKhtMEvdHxLK59nwcjbiE7KS7z2w6LpqiL4QUSsVyHGLRazmhMumqQNR3aY5KMVxb65qXfQgY2c48",
  "key1": "39c8HaYvvmVazegKAUk87zqnRAwPyeuzMzx76Ycg7BPbWX7DJiAb5GLiCyssVYkNN8p6q1BRvbTi4ybFqqwJgFVr",
  "key2": "3qr6DcE2fj2C8qfgRYCUpBsHPKs87sdwEnmYLt5mKkdvz5Z47mHhp5i858F42a9yT3J7EUEcorhMouoruCRLQPrZ",
  "key3": "4XJvbs74xikGMR7rimk7yjKyZ7AmiRyFgMEN8WbMXSsrFefmh4nsArkKM31kzQhXqYB2a9DbhM2yBM3W6VGyQJVh",
  "key4": "66sqyhvp9e588NU7LNMM58Hvdp6KJRBaKw9BtpKGK42wAWdbGQusc1cbiWqmM3pGLA8Vn5cGsFcW78EmYhyG6UkW",
  "key5": "hFPs2xV19ReoxkErs3miS9TiRErNXvmUW3fx2Wzowezscv1wgQj1xdJ1upAgMTUZXGGT9ygmn55Ki1kXkbnk4a9",
  "key6": "5Thfa769s47Bz31SaZ1je6PVLA68Am79TpR2c5NwnrUQDjnUE4wze8HPDGMcyDkc5cn5tjhfBzcLW1aQdCbyHLG8",
  "key7": "3EhC36vMFv8yzYoftKbXZg3dsuJkB91MVrxkoEnTjXbRK9Db6SNsWaZf4eAhgnw3T9YPDABiwdRWNwgM2XHuU2Ge",
  "key8": "3PyZ6uwvjNPANQnbFbXpGSnXqtbBYwPayvCUWWpkNk723VUJjdWYL7qzFxBPasFzFPoiXaT1qEnqA8FVf9bUzWBp",
  "key9": "pwR2w7wzN5diM2nQaD9HnbaZFgEDbu1UjRSBeVp9WDmQ4mnXiCRfg27MYXwJqss5HsQH24uiai9qyjsJave4co1",
  "key10": "MCTHHcbcb1mZZXRocHCWAirTGS3Jmbdk6wjvdosx9eheUrrTacaFXt2gsTD3BVfiKuQaRbmAyJhwvhLicKJwrmd",
  "key11": "4GkY7HhDt1teDC3GciZMU8v5TmkZYV2EVsV5RdKMFSPSz392fzx2B3YgkqSKq2vRDYz2w1XyRf919yoUWnpB5YcN",
  "key12": "4MxNC2utYGMLWgtEmC6NqWoDCNeL51GD33ja6Bbeimbp1ej1hKv5ADC3GBUKb6wqYVKjcmkntaZqjgd2SddiyEXQ",
  "key13": "Zv5MqLcJAuRJMMsHyxsqg6SL1tcABuKaePbpFbCkyDtka9z6x5VLs7qx9e98DDpM7AsgiJTeorC3Mh7MmqNXLNA",
  "key14": "59nMp2dttsYL5mVQrQfAECJv3rjBDYyqgrMzv7YwdQ4zb9AyphE84LE3hi3egySE2Umvh3WSqbchurmmJqvJ26nj",
  "key15": "23DrBDZi899LmDg2b9gHHwhyDZM45Kb5yBNvnUJq73rex4aPkttvSs6gKsbdu4cRVbf2VeahStRYwFmCCtJ4rC8m",
  "key16": "2oDostrd3ES3GQeSACeTawNCUi1d4avDFyz2EimPuR9wQ22GChHyhd4EinZf1Q5ujQBoidNunkr3HnQAG6PiBkw4",
  "key17": "5ig3wFVVF9EDBZyzp3E4CAKJPxUwYX1gd47pfaSRxmp2kfeedzdFxWbfTqQqkeE3weNfqcgseky9syxJMWu6wCNV",
  "key18": "4868TTaeN8HcH7CTAcXcYRXnre3KVzNdQcyooBM2UUTguiut1H3ymYx7DN61J9vaXSFDDaY2xcjewTjomqifyXfG",
  "key19": "66WSp42BLJNwrAYUVqwj25HLP26YcS1cbgv1mGLDJaBoqURE2r8NZSaeGj6yYJqrFpyY5QqXuBQZmuCAKJRimYH6",
  "key20": "2URDPZKq5v4G5B7om3SQ45K4Ma1PoeMU5CjniVbDM4Yvj4fkMXnUjrPCr5W8CFtpb8miQ3L4WFWhCPR8PPstJjc3",
  "key21": "4xhCaHCs7DsZL5nmex6ix9TR2qntSSrZoPYLKY6xwAMniGYuUWHwxqiYnFUgAW5Fu2rxHdHDxFPwcbYGsmHp6yGU",
  "key22": "32aFbw4eQ9NoudRUwWMDksA5ZAMLuFRvcK5C8RPKUSBgMd3je6rBjQTo77hHkxZaFFWz1RZm8MXf9WubNuNYw1PW",
  "key23": "2JkMxVc5ZjhRynNXAiyp9JgNiE5bmv2ZYEfCYg29x6xYqLy3nUviQ6HDwWgZWKTmgePs8GUQSKJLA7iAirgoKn55",
  "key24": "2vsZHVgumPPtCPTxKYujf8bDfgzE6YojKWMKYkqpoDdi8kqHzpQgRKYygKT8YxhPUcmmsLbBthA4xsgSustvu4xX",
  "key25": "5yyybv9dHkG5E3SZzVEJtudNCpFzt3it4JdVr733SHggr8aTz8xTRYEX6WwBZpGyEbfBDiixFGaXAkB5XYdeaPqu",
  "key26": "32tvN5AqZ75ZCK1ap1th4Svcj9dRi7ZDDGMN1fcSoPWmsLvs5A1aiJWvVbb886mqssLuNABAxV5b87goaRoYubrg",
  "key27": "42q2anHug5aAbPdrDFdjYqU8ZkBJddvVe37WUsGn3GtGnSfwqMgK3WfoYE1HsybYJZA5u1AVgRnyfPiVU1RVZb5v"
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
