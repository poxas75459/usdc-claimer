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
    "23uW12mrXxfNdNo89vot8WUXdoyqFK8Q4VVayqTi5jsa9CrwjD31d7j9VGM2qVimPBDzBTvnvxWXP9RZXZC2ZYHP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TaxeUP5C49ks45caS3MQn7Y6b29J4JH8RkbdL2hmahM1fjesRCvR9S8KC34ouCWXjTjZ1f2kh8uLpM4v58tTMHn",
  "key1": "5CuQKgX8s9MJnRDXwPHi6WTSbSmSA6VTWcVJHybzWmrZDScrmTxhjDmr48i6JKn415g5oiYo33aXn6tg7XbYLLJ4",
  "key2": "4TENzZLznRofPFE4epdzKTZqmYL9yF4tHpevFygQ8MWdcFFJFojHxvfBpyibdBGZoC1CX6iSu1MB7gyN8VU82k4f",
  "key3": "AoFvJ3dWfM4ubi2SM4FvktW4GnddgLs56gJPX3v9fRao75gnCTxmh1vMRb6rZK8cz6KAbkP166wdfsnH8XTJV4q",
  "key4": "3zE4zpmdTXVjNos1cQCx9PadTEJswVc4uBvMtqQJWQVSwapeUpLD4hDF1PDre8MgA7dWFpBU63ecKFMvqzcEPJ1R",
  "key5": "2U3QxdpDD9XnWfKEEfxJTe6MYtTXck6wXiCcVhQf8eDdF6sSKaQEFFwvndgUaAvewg4nU3eRzJaeF5Six7cHvpky",
  "key6": "2uCbDzebr2JwD9Tu6biMm5jYxCT1wCzLpVbejVqcu8Di7CV63bdxXnPbYeV3NzYGDcmz6BcHgZatnRbgeX1dkymV",
  "key7": "5Cyg1WwVg49qubWjRu4R19hVnJbRdRnuL2HydrbacWpUdvtJzfatb5DmK7qgufsR7Pu2PZWas8fsQGonkCYE5YX3",
  "key8": "5gAS1PJjPigxsQFDCW1yNhBfJmYHf4hgrBhdFqBotQ2ZRczdgs79xRy7qxP7Fricdjq5iPRFukxe6SxdZPX7LysD",
  "key9": "4RhAkQp1WizqrvE9dHtuwuZbUmUtTwYZjwR8XGusndikDLuLixmj98CP42WcSupWyZqbfiZb5cmtVqQGSUFhb876",
  "key10": "25nKPHn2BBuWLgBF6GMyQxqnyj33CFJKK7GYq7uu1L4eijqvAYGoePoECqW2zSGemHSf71Y1JVWWBKRAPgstg3JD",
  "key11": "5F9NedjmupmSrHMnD716FuGQ5PJrg8pWVs7NfNrcWhEdfDpNfZLSkfoEFqGHxbK97hQurLBXjjLvwHvZtMaDn8vR",
  "key12": "5HcZmJ7dezQtQiyR9RtHrr5PLAC45cMAHeRpiDUkLtWkZK8vqiLsnVeaRZUbALEDTkDHruEyvNEPk7YWPye5cs1R",
  "key13": "5ACbj6RYarqBLTEku4twF7yuARE2Q5D7WoXSXaSMAvHvfdxd7k1yCxNx7C4McBRKE8aeBUaNvBaB1nYshQKQgML4",
  "key14": "3uyLqDi9oXCZf8RvdgY3yyR1T18oah4eNL1CiKBkzgUK5zxJAdsCPwEmPRc7orZHB4MNmMWsCbtp28JkrSjqSsBD",
  "key15": "5fRLp9DFkdPPYBnje8hAsb5V3VutbwGP1pdtF6YitHFUfRDhHhWCyPvTcyei7j7nEvr1YU2LCcP6HsS4znsaD4yo",
  "key16": "RkjYeAHsg9f9K12c8k41Eetp2JMpt4ebU97FrCdt7bA6TCQvs2FKXwFix53VPpJgbv5yUApuTRd5CdfEBV1aNfW",
  "key17": "5XvxqemkxN7J5nfpoZsRX8G3wbc89sbQUXWU9iNT99zffNFMoprh1tu6R6ButbG19V57TEQC4TiGtn9xBJo2gggw",
  "key18": "Gmv3tsDvQYZCrVUfqk765Ac4FbUoxSQptqLdBwB6FXkb2SeiAuZGif4VNx7ZhRFAD12m1Ea5jFeHp82ctCmM22J",
  "key19": "YQWqVLyBUNaAEU2hFrQpF8YGgmhe3AHCu5T8oNWvbJkoZdqKSebMukC2M5HisxA59hHQbFjgr1j88tj4D5wdbkm",
  "key20": "4vv13x8r48WqR89kBh1CwEZUeet73cuJrebWz2M31CwdebfrSJqTm1J737XyT3yQDUG21vfbpVehry6eLzbBSqA6",
  "key21": "wvqW8Z5XTAHkRyrTVWr34y8UFjYxn2NXpBCP3NaMFnwFCCrwD1VyGvfd93pHGtxE9tEtcu3PZRKprmCBXjx7wT9",
  "key22": "4GjyPJK9J16mCbRP1mvV1MtH7HZMLrvrWuvcvQmxMgzj27tdJxg2cFVDYTLM8GLykEEL5DSuZhU4z39toyMbcuee",
  "key23": "3Yyr7NATK43NdBFoGy7C5Po4Rkt9SMLBPB4XtcyC4wHawwMCAMQCw997q5RTas2jFjYRXV7MChS5DKM9f8bBxgWf",
  "key24": "vpf7wG7kZ9Uwu2DK4CKcaBU3Pk9W41mvJ2zL4pCdKkBQPWDwA8WLgmdF3VxgQMkoJiRZV7G8xiP1DqbvGCshjdE",
  "key25": "3XzkAn3M9sj88DtqcjyL2MNBCb4FSf6Z1rD4yDcyvHvTzSkay3kN4PFfpD4fZNNyNWWpD8DWLjuiMPUc7TAXQSa7",
  "key26": "4N5EXjK1bYRCpcaueCPr11apwtJdLu183QNVn9dX7LHMDFoUtFn1ePDnGQ4yicn2ywvRizLj7EtYFcxdaTqRg4gB",
  "key27": "grHuuvyjyDuVgC88jczqZhtH1gt3V6YoPFx6xTc1iWQS7x8rKCZeHVELREWNACD3DeK462PkySdBsFXcbGreL7z",
  "key28": "5BmAXpC32wshp4t2vRJ3yHW3oPpeGkn9AMyVRqoaw3aYQbp8M6wWALNnWkLniHKfxxEnVGzbE9fhRsna7JMAC9Wf",
  "key29": "gsyXgjt1zatQPkXAZ289UH4KAcAk345YHyeEgpZjCCYR5jPscTcpKfFov8noFpmDQgJa7fNsQ5773EsW79uZefg",
  "key30": "4HwPjAtXxJfrcwdWy2awURAu32BY6rmHNzEyZKdU3tCRRjQtQY9Y5NVnwDsvjN9mk5vwXpGTXMjUfqg3tyMvBKdz"
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
