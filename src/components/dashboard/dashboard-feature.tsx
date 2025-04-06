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
    "4V743gP1rbxfb3dkMeQeuMvyK8HHb62UGQn2xDrf9DQqVk6vWRt12sJ3b6nBLfSd3vznU3a3i7N7SHuoaqajnuwm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QBg6QvmRQGkoz6THbjyGr5Gbk8umgGrpZwrxy9f8p7yGmv2rCvZgdehCVt4E3ff7sasaJxQ3dCuJbWiTQosDWr1",
  "key1": "5PQoUM55cpwtE2g5zV3gS5Le2xuKCtoA7NiS2aF4JFNevwNmYBvWnVPqtD4ykMnGbpRCpZRCjhbNrzuzDUR65Zj3",
  "key2": "ch26NDwB2L1cEJX6MEUJjDcJzaNHuwY4G6Sao8vSkTq7JRSYBb1MEt1svwGvsYdxETAKRRBrF9BR7fZhM1vzF6x",
  "key3": "46gAnTYoZuVvmvrhasVpVQDzX1sgCr8AUvn5KVc2BCYZ9JDibdHoUeXENz6UVF8gesbRVrNJH88VuJdxderew58v",
  "key4": "3Ee6Z8HJjNx6GMp3NpxQWvjw9vHNqPJNCFMmef751FAgTVTq2Ntmq5T2oCxWE3iasq9Yp2ismRL5MQe1b3WxMBi1",
  "key5": "3uicKgAbcaYKo5UR1JATrkk4Znkb8JuKYm2irCfocFwv6H5PD35vbveKxSsDE2uYveWMUiLJBFXD7KgPCpnjS4dg",
  "key6": "28eGg8EVYDkDdnYEEdDiG6SkZenYfBUvp9Ejb872npg86iHTWqPD2jxDcvinbXsvFo1eiNGJpQEHNU3LfBucVTz9",
  "key7": "2MwGpb4rcDgHu9giSrhk3QbrZe2biVTma4vqGScyrQtV54Whk7mGYPddcwVHEeERdqPABDSBBDVs6Gfyx3PKdzWB",
  "key8": "4uwvHizXpdwWML2m9g47khrW44w9aUe4eE5hubSydZ97gmWuv7EZP8ScWJND1qzSv3oWWEWt427jGBAYv4BkrTiN",
  "key9": "49wSFhgPJLhXSnm9oNg6Uryu31FmVdXA7WpoDhPmywv1pu6ezEZ8zBBKDDf7bEYfFirFeAERv9DEJVcuccvsa6Ed",
  "key10": "2CWD1v9Yh6Zx5iGBW2MjQdNSYmwm7RKePqbA2usp7MwfoWRCbD3RS1fjsLHwfVMeYrnF11asx5EUpwWgcxkPLoBB",
  "key11": "4pvKVCMixpbizFTCF7ycisRbAXaLNKsSVgQqzkWvamxEcBXqaKdWShQTRg3PtM3k1YhRPsH3UvFTPFQWY3VGVNdo",
  "key12": "5ChwUg2uqYeZpGd6EAVoV6mwNoFi7G7ZKTxeqC9a6briJ91FCKb8rfrhVVv21GSgexakfMQgjy28y2LLTAhn6KBV",
  "key13": "591Tb1hSm5dbgjh9tUiY46yVzJnmqxkcYcuKQkzU4mbUazFC9QZTKCvJpVoDXRfhHC7oyUGwiFJMHvtRJqNuFknF",
  "key14": "F8kJvGdNVtgLEwGCzmgLnevw2d8d4vVJpS7LHr8MQShHoJg1vuuffrHo6tkN1vbTnJvikMAJPRQfHbeQxhjeKA5",
  "key15": "5zDqJqCNNZkN73UyLLQjPH6DFNWDcfekYncnSCpZY4iQrnzqMiCrMuprXNPQu43sB6QqUGQDYdGSdKrwAhFK95vY",
  "key16": "4GyaL2bZRSuvvV323SYwkigDW4v8ZP4rJCydMxRs8CtYde1YDh79Cb3cZrQMRniowwp6C2Q1auEV2af7R4gaPkRr",
  "key17": "5Ss4eik9pSvrc9VqKUc4CAKrt4Zcf88EBSsxzGkGcACqYfBqNdfTEpaCLkTG3yUTm3BZPCCeyU2wxVFMEHYfzXfz",
  "key18": "3J19NRJ61BXnxeoneZtmMaQW6fPGhbB8ntbJ62sjZwaCSGSWqpvWr1b8tC9p33L9wd4ixGaBSSBsMVWc7CrUikzy",
  "key19": "JsjPqw6QrzEuvoNx3eicPZztyo3QGWFzeaN5NSWu8gMT46KGUZfYmEJMX3K4wY2qZyw4rZ9T9FnVw5oyssJgtZF",
  "key20": "2e2JkmeMssMWr9XihyFepr4Hspqj87NYvCvVvvdJeY9TgGxJVp8CTYfXtYVCpL6wUswDCyYTFE4735xVS6rf1aLi",
  "key21": "55BmFT2xtmXT7kASgNYasvoewqoQr3adoK9dji9ZdBDGr3h8jvkwtHo794ShSwFwx31BP2N9srQayE348cDycwYT",
  "key22": "2c1RQv7sTdXxYuXh1gdgDXYxkWcSJSyZgJnwxoCsAvUVfTCCTHVi1pQeAcmUkz2T9gatJ57VfyL5E9J4n4BSHQUw",
  "key23": "3tTXfPGAEJP5gm49nPGXRewjJhfGeLjMDUnTP5xNYZynHv715XspDegw9VQQRbR4z6jGJPctFjHbL9TA6tMfgn79",
  "key24": "4h7TFhNaRq3HjPY9E4JMNpoyM4x6Y4LVVLe4S1bTDMPR8SPRinezR33MetPveH2w2bWnhuPgxC5aqBZw6qCRsHY2",
  "key25": "2uuuQTB2aQspq5R8zzFeEBEKvTZJ56CZXhME4D7TZjU3wwbiV7LfvZQhfEyeSTqsFruCosz7ij37Smedzrg1Kjku",
  "key26": "2pVqwmFbBfQvZ31XpHTGjwq1LqJGW3pop2Ly4ddDzpdEVnutH4V6ioFihhUzaNGeaBXL3RkDzvTE1ZHGS6NiB9bv",
  "key27": "2wwccyn6idhSAQwoVGL3Gd3a33gGqaq4wWqMwXY2a8XzkNYnY5gTDHGQxe822eQMJqTWSpM8dxv1f119TVkyQDdT",
  "key28": "4y32rT9MnY9WNtaVPPhJT1t8oqfYgyEWSCFYkRjjTyWkswhEfBvxpPGtLM5FubWk5XpFX2evDBBQnPdkC7gRdKxC",
  "key29": "5WkkeQzrTLWXkyKELDhm7wEf67mhjZ2G1WChx6mSMXoxNYkoER7uecHC5azz9fgiQRRzuqAuehZwBxnSnxR7yy6V",
  "key30": "vMgALKsUcVv39izSi5JCtnngLgXKFNmjgNoENyErW4qMHTpiG9BGm7SK1cjLAVHz3tzdPFu3fPoG7cprpgrDeG1",
  "key31": "3x22Asrdzy3EThbeE7rh6HUWCRwDzmnbdfPr1ujuFiKxHv2z37s1kBSqMkgJdZEtSJqJaZysBwpq932t6gYEJeDX",
  "key32": "nV56Xff45TbGPZXgupJyRbJhgfZqomvqD8yQVqVyKAB2gayhS9zfWVNbPMXG5cBiBME8e6mtxA3qYVHhVR8wVzu",
  "key33": "3sUNtaAXa6ngGmqZiwvPqmBxLKyqSQET2K95LG1LaN4nbxsQNrLXcVwgAhbaGwym2mRcRgE1nkccc8DPQa1ZCwaB",
  "key34": "4jWmfQwpTezi8fPXAgyoDBnGZoFyzmWRkq7gk2oUsg4ni6Gg5bSgiDtaeYbhPs9BEDKK35ZCxd4zcZdC17SFTWaq",
  "key35": "5NqiQVKE4Zmfv3md7otUsTd1FDKEgmdvHyqaCidiVyZ14ufPyhSyCDy4NQRY7xMcxYN9aFukLMCv2HejxN1BShqu",
  "key36": "2YEgVfURrnVD8bgCDZxZCrpPCz74xBz8HZW1jy32UmDFE4RoqnxZuwcQL6hvhZbJPVjQuphoy2oHN8ZanJd6LPDh",
  "key37": "5mUwLFzpmNSAi2WayWPgrotpiEToK4vvcQCpr3ydt82KdbbpDKNgaTMHcn2cDeYrcK1rW315M4MfTmPiN81Mr4QC"
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
