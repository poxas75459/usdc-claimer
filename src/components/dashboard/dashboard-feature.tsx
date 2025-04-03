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
    "48rrzej4t8vM8xQ81rV3QgHun9BsT6FmkGRLZMXqktMzdwQJ7N3aRyQ7YPnni5fKYCm7chqjhKdHbdkq63opzoTe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MDVe78TVusKudhETgiJSMqMhJjPPDFxWWUeGJeANoEuTKRsjZQsi3AGfmFXhKc83XRNynq1cMkf94e9hRKEuVoo",
  "key1": "harx6CmS88m7newQvkVAMgtccUNKCWuHCPB9ANyKVkZs4XDprXjjSQLsvkgLoCnRSPy92Fwg84tabcg6honCv34",
  "key2": "5FkBVUEtEP9s6ebECsFghsvSSci7EyXJtXbjMK6txLFFwgW15v2JFcWeY9SWJkgbJq9516f6MMWZcw22dNopNpu2",
  "key3": "d562neHtgpA3ygWqZntfS14SVFHzrDSnTvfpSt52wPT8m8K6Z3SiCviZ41xRfZmktnaHkVhH6yPmMYwwPbasgva",
  "key4": "2gM3FFKAKiPHggfDCecAJHTkAyuwcU2jwwXCrYNo6UckpqAnFwzKh898GBMRauWU29QUoBExQkDnbFrMTvvyixuP",
  "key5": "3xv7c9pxxda4wPrFHYN6oiiWjWrPHdaR4j1Acx5H7CL7jtPrdKoyGjrK3iTGNbqfM98SNHau9KgaQu6ChdbLcyru",
  "key6": "63EfyZ84KCVzym1xdrx5RYkgM9gTbMySTka4zr8hBKdgEK8VGFac5puq38Y9hoNZFX8dPeY6jhRqaLBkxcJtnAJi",
  "key7": "566izoDZCMmfK2PphP2eSMtbsB48E9z4YLFvY3FU1mzcnsvdEGM4uBu5SVXSpfx7s6BVkJJkB6LeL6tCyUwBpGrg",
  "key8": "TaF4WCuKRChs4JTsteLeeEpqYJhoadEH3AG8Zpkdbp6gCajgXYtn5xLUsYE2vCZiiQ6wcmXSwruEjJpnFZEFkqz",
  "key9": "2ZmBP4YR7DxgTrB3hfLaoNq3f9VZqbbxSTNHenaZFCdVbJ5kJJNB2FefN2oKjY5br35mrpykHRGa7B4iwV25GNTy",
  "key10": "Hmsd8BaGAMYfP8Rr7oJWkF2iPTwb8L4hzmF1aiS5eehSka6jdH6i6HH9rC3W98nF9WsF3U4Ygr7kwFaiqLUimti",
  "key11": "5oAbyXwLMtt2mDxGoZMAMXZM16At9Gd2nTBh6G7Np14kTvpHK4CKoaP6uNi9AHX2sf13hPHi9yixxFpt8Fuvm3W1",
  "key12": "5KMQ3Jum6JwV44xUxT9CQaasFEng7gz7SWYwgoazrSq3mRZ8vH2cWojZuAtP4T1zJPEGrbQduyVtFaaJb1qsCu5v",
  "key13": "3Lfr28tWBxD5VubFKjQQ2UPrgmEe3V8Com9JzA5paWRvkhfJZarETbCp6a1nWsD2T1614k5mXCSaa4ZXiREjj4jw",
  "key14": "dHNMvSbH7R32Mu5obzHRHGv3mazWvNmCttArXU8JMDUBbGLDaMxFsxqEPtDeuoitpVjvzxPmjVSewnvAFnPdW9G",
  "key15": "2zdDHhGKB2kipoRPo56NuERzngfbWkJhD2uMYqrVFBFiTg2E6Yx7K7qTacQShd1m6Z5vva1zc1DA9ppssqxVDEpb",
  "key16": "3aZn1PupShoNZzvhQm7JXtuFKineRCHRsRknSyp4WMggdMRm9QvUcHkYstA3seeqYzb8cFPGHxRfa54HwyXZbLzc",
  "key17": "5PZaCWu5jvZXFqmYRv2aJaKp975DEV7Ykf7QtcC9S2CXnqBWMpzJxgFzgaVQya83RhC2entqF55eVxiu1jLRndwT",
  "key18": "5avUKWQrh76kwR1qszqz6uGNTCgPk5vDdNxbqfwkCQ2wFHgqmsHkkWKXS51wUjZkphpfHF8mYntjbqmN9EAUC5Yd",
  "key19": "3ZDPpgz4Y4iogvBk14LAhpVN3JgvDJC81ZxHopbHAkxqLmZmDwA99RdEokfBmuwBUhWG2V154xEZu6uWMyk9KyHv",
  "key20": "2o45iykVNYLayqasTTGxcLAXTTjwkZekGNwpQciJ2WJhFdob3qNcM5PmfQVpti5hXXdAGsVgDi9kKSzVsvdNWg3F",
  "key21": "4sSVmxdSBmNn11uSwdNciAkJxmToCs67H6YgxsGbyy76z4kELQBfJrFEjwhemcuRRbkUvDBRkVUKQTtejiA3AcXo",
  "key22": "ru9ErMw1CybbStk7dXMc8Z5Je2b3v7vMBdKquBuMbaozrHWSjJktdmALBk5ByN4MYrGvfLFrDcxSG7PJiKZRtjR",
  "key23": "6qCeDwgPHysaGNohprpQyya8ejve7Vj6DNwB9Su6DiEoV9TSXKXcYGHBYmGLibjjegpoG2oVPY5GZBh2Uw5atHx",
  "key24": "3TbdTop9ggzjACkACWiLeZ2W5cm2L2hoWB2FcJNnddjg95mtjtXpqPr3xcZs7fzbxRGpq3eEH3scfohoMYPVtbce",
  "key25": "2BKVneeLtUmcTUwCdgnbTXGsnCh2Ff7VRo2D58KcJDEm4hCdfUe3maijAwBVdpwSRcnWwZv99oaTauY3ErUBqNNm",
  "key26": "3GpTSmYxkiMWHQU52bqWedFaXQYJHQRxVGEU1F1yxAWgBEvAaHEK9tncFZ3D3qWMfpwXNTupydouDchdgokix8Xc",
  "key27": "6K6upoDejcxxEhZxMnycceSqcxyN3Q8MxyVTZb2n2pg4dfc6sVnFpqcorPHR6kostxafjTeNS8u9qzdhK9F9nyG",
  "key28": "5XURnqZyKtLuzKDdhB8rgR974Qs1VNjhpya84kaXkQ37pDSp56xisHV8M7KrbzcxtfHVrrYofahe6hTYS29x7Xs1",
  "key29": "3cy1nABfjwuS6b4z6E3cUrhKdTyebaetvsWwM9J9vYgHh1njrYZPGA1XCSXCM1oB14Syqv6huCHWK1WrCATbqA3Q",
  "key30": "2mG9DX85kjWDa4gb1fJBTUx7foth3oCdmENosTzm63Nn2gKNi9uKsK1dtFSqReaKK7otUTLCg56BaHNWocGzjpGY",
  "key31": "572RDfP5TPanKFJA4F1ZFcFftzSLA9RJsCy2CcQgS9Ryb2UCrCVUEP9w7UkR8pEs9bqtewvAYHngDReBdetBQCi",
  "key32": "kD5iMMSnAA3m5X22VKKkbz1pzXqiPR8t9yx6jNAcFD9QYjh4C2Qn6ZfPrfoQ5yx94cKuZjGkK6KWq3gHh4VgJgN",
  "key33": "34v7Wgn18HpVNWT49wtg5t56CHAJKrB42DcdnMiGg9jv5BxUwcoJax1k9adQfkMF3BA56BrAg4R7s1fQ1EmaXZZ9",
  "key34": "2moTp165yaFX11n35bPQJ3oGZERT4JYQPecuxsk5ofJEt96R2kiEGnt99LJQGSWc7C2KLQh11pn7Gftk5XZ42fr5",
  "key35": "3cDKDwsvNxWM28RhsM9Caqr23cqgUibRvW4xZUWVENJdnB9W6PcUeeSx7AaRw3w9Thfd172tJ7dahHUpykKJKYXh",
  "key36": "gpxfeHSfku1qjYHk3ftNSKidknoSzAWRCLJyGW4jKaQVcgVayhXGo5vbB9hxFmzALzgL3rbF1NXup4Q3bsok6zh",
  "key37": "3SDxW2A6RruNgNXsX1iCrkC13anq1mvUvgKByWPdKxq6Fti5zWVLd2WaQDjCovX5rNPFK5KktF4HuGYshb4oYMkr",
  "key38": "3Yt6cBzMi7mGeZLyFhRebrqdVLHJXrtWYTyjCdwJUDQbtaZufoaviuHVC7DF21nwtLbH6fnT1ncYYbmCy1JdMPje",
  "key39": "3tm9xH8DUMNAWR9YWVd5BdYjLefhAEwQRkRh1RLBmo5gDjJQdWMYTjEVsCtcPYBKZ18oLiMH3TijuCguNeehyd5s"
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
