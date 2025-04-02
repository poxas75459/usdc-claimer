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
    "3N5UgWbTNruim1BirYCZ9LqcxPrNE9UJAo95UqZiEpgMoPGGEi3LMACHFkKXWnN8CjJ6SBfBMTqo7fgYTyNYxidS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tz2M5Mgn6ve85nPHnUvwYtvuWx9y4ZjfKte8bbrXwAs3qgjFHP472Lj2xc93PsUoXK7e8CmtCNtRDMAxTL1Cxyn",
  "key1": "5u1et8wvDNusRr6QBn38qPt7LrWmWtC9yZGnhJocCHdVDXYwb9koZCoPsaXhytsUAWLuRhZo4jdvqc1z6nGWJUta",
  "key2": "5C6gSE9BjYZrMYptAFpoQKMPhri65WdUbzGruCFBNEMoJe1ejQDXkVj1Th51o7XacChacZDeUFHRkabYtnM5cYkX",
  "key3": "67NuiGstWYT3m8cNnV78PHHBZPhzhkS2Vmk5KTUhd4FfAdyW4cLnQzdZRVE2vvSMT4jWmmJqbF6o6EtNaj7AFYPN",
  "key4": "2HgcZKKGaDSo6i8MKzff41cgxDpd3t3aXPL2wxxLj8uMVhYLbHpmmzdMPWRsYvPp8ADPpxgenTNuVyEZZbehUJUd",
  "key5": "2x5BoGiSgekCFWufFL2pzr9btrjmjVujMWXbmHVs1hAM7Shnu7uadj6zHQU21wwetgWoSp884yhXDWzWwaKsJx5a",
  "key6": "45EL1h5W8hwWRo7akccP8uHMh9YyyrQNqpkiXtn4eC64Mg594hk9mQdDrPa3YXGQt3jivvpcWsrFPznR4b2mvMEQ",
  "key7": "AYwk4NPYVsgN9po274MFuqq6rBVSSid2rFf6j69NPW9UjbLCv9dEa1LVV2cvSAN38UJQvHH3usDXprydJnzELWn",
  "key8": "2D4neu89pk6wiD9bpD9aQU2SzcKbMjt8xVfXrJGjHqgaPSNFh4HTMzwS1mtVARga5wR53MpCLqfRSHuyhnPRSX9k",
  "key9": "TuqZhFFzkmK145etehTcyAyCxm6qR8ccm3VjaQJ233r6NZHKoLWhN1TQkxjX5Lp29t4M1CNfJxgioSyCrm6iMdU",
  "key10": "uoTCCPgeffJ8ssJy6nD9JUsFGChV1DzyamGdhw2hsDkQChSXQqdspBMMLHaGBbZv2VQ87qGFFQAs2X95GCJHcPJ",
  "key11": "5STq67GZGKbQdnwrxeiQFuimXDQQ3FF5nx4yL77t5ghmudhwV6FNaHVbRt6NyeXBGy1tSKgzUEfnkxWvTpJjty8U",
  "key12": "2rcN4m3zs3D5oBnSW5gkzfNDtt4krzye159PCxpGk9QnsquCMLyNrAybQoisCnRfWFGEh9WiDPFoMPrEz7MSkHsR",
  "key13": "5a4mGwtCYbZMNAcdkWs9A7vAhgcWdwkb8HvLsynMd9NfaSdhVvzcH4apz3Dv97xHMgm28Kq38mTUNjZi811K4bhx",
  "key14": "eonMtW4NB8fs3TNPynwoaYBFcuotCZCMMnLa2XEN57w26EVBNmX17TFec16K3h2p4RkkGYzQ78QUmnNDKmqVtv9",
  "key15": "MFHM5sD4nkhPGXsUTL4mPnVNpdiuu2g8bjzJEwEi4Myo3Sh8bh5tQrCn3mLAzeatCq2z5YsH8v8s4rMTNnKWFX6",
  "key16": "61ApDqJhGGR7PiNKZGoVUXiXFFnq4WCdD6X9sqLTru1a5Adi8AKLvT9qcw7b98hJSLZxn9YdRrvzPqrZEw3FfaHQ",
  "key17": "5wuhMeTvdGhTsZJYLs21krrFcUx7SJeDWXeYCEvXRHDzAJn6NijokFUfsWEdSMq9etz9fjUeodLznkcHZyK4MJZk",
  "key18": "2NUoHycx8KWjCgpEAwEeJ4U3LGjhr1Za9VRx2iV9Y4ysYktWftrfj51wCYyjfGMeBBRGyCVbTivtafRT16ESSUJK",
  "key19": "5SXe2mtVLAiZ8eKtexgGKozDQi1uGMrkmimi5eJWKhPEj8Ua23JtnmXTniAYHaF5J49YbvrKwdcCYmG6JsgQmzYo",
  "key20": "2bLpHYD5QQvx1DdsxwXxT3ZaqsseLP1owxA6RCHV7RPZZM6RQJxaQsvAa1HJaNcjDD3WgUxk4a7QinL7XVHsSw7p",
  "key21": "5yWj1mJmJSEhGesgQpMTJedvckqNmV8aKLY77dLxdpkPyJJ1KBHaUUNgnvHXd41cgNFSVJzCdj1vnn7bKCFhcRuA",
  "key22": "2NAwgC4gehmEAnJZkhnZzHy9T8YS9QN8nZxtJogyQqpSkJtwdHzsEn5cJ6xzuGg7n6uRBsWkEA1r52mP2ShrTjQw",
  "key23": "3PsdeD1hxr3XLe2QAgS5emtJivcSxgEV7BCDCywLedfGmwkS8W5shuz47YuLpDE5N9k35BNQDMvdqP2RYtyuEd5u",
  "key24": "MwJr9QzFb7erzybxkXR2NyLvVCQd3YY4WUS418diWCm9MWsLGY2n7no1eMWHoFzkD8KMmNLGpUCMMy19ZRzR4Yu",
  "key25": "4k1nT7kYhTDCRMZEctTFMgE61ZFBpTnfQJvCjmyLma8RJcWETMHo7svcqzokoPLMkweypdFaKJxUr8ctfMwWrzFU",
  "key26": "4HU3V8W2oxVFqUpA7NRPnMpWRN65oyf6uaayaB5kEuGe8dVe4tC6b7eWfqPMZTJnfTiPW5xik22kUSLtbzjZApbh",
  "key27": "2rVEDTifFAyQEC9vvKEzjS9s7duDfeGgtHbSzDeBiS8DrprBhADqVT1cmWF4MDTaAwHwwKJFXkndq5QKpzNd6yS9",
  "key28": "25T2jRyJJ2DGtKLqe1xbjvd2mXyRbxtX5DcCChS7W4VBG4VpypXcSxz1qB1jna7iJW4Ys1tSG74D4L1wGjNRk3Hc",
  "key29": "4DAfK5nS4ZUvy6bm25t8cmEqLB8kQwPBX8rxD5cRuc8bUBdSmLfYYvLCMiW35nq61ZTmrYw6SamUZ31gYeAznin7",
  "key30": "3NoqGqbXQc15FuFJ5z1P6mujq541RDhHnEZSH3weRWcjWiRVZKi8SUcNG2cEEv8Qgbp14P9kzj5R8JoRBW2vDGPn",
  "key31": "4DDzqGNYB1oh8cHcigRBYZZVxjypraYMA2EkZ3ZnjygwCdGd89bB2XKUaWe4iLMVqUJPeSANyKnMa6MD4XCVZDsQ",
  "key32": "28ijyfTmFiTfAm5Pak9dTYnCCwpunhp1SzHTTwdESbBzfNQinr1PgV6tNhdqKX85vWHAuswq8YEcWmgMs5Fk1QzU",
  "key33": "56HJ8wRwup4ZiSkVoW5bm5ApLnZfF6ZFmS9VzZK9G9B8iC9P3F4ViAthJkEKJ5mTxFGXhCyNKKVPHURJCAJdEaon",
  "key34": "22iM1HfURBBS9M8uGi9aVTCwQMwDyruE3ow2rhPExMRJa9GCvVQHTFoS2Y5VuuXs2xQDEW6w1yDBz4qoMkxLXpVb",
  "key35": "5VcuLe7rUqcJqr24emMCVDxHi2GtNyUZSCf6UiwVmm8E6mZeHWxa19qgMPR5iT1iP8kQMxmF6KTN5B3DCnsKNQrF",
  "key36": "5L548Eu41tT2MZTk91iBxBGJshU9vYpPrSSwfgUD5JQasBPV9uWD3gETgTXb4X9dRTT82WkDybX5FZ88xBogdKeJ",
  "key37": "63UzdpxmBtDhkscUD2WuzAJ8afKRb4AEfcLLuL88UqqTosr978G64czwpisRrF2XS6qDcLAGw56ksRJm6WnnZqW5",
  "key38": "zg6xteoRNWUrDixhhdGvYp4b1capEqPeCzC2M3Q8rbmtfe2UCzfp2vpa4wPyj6C9yFDfvFZJLNMBcrioRqN3QDS",
  "key39": "3DYS2vQL1Fb5Yp2ivJz9qC9NG8TqU61rptbEhgVvYmooWkJptnrUVpezptodaHDdBuwxyFwEmHQ4AgBsLAJgzzcw"
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
