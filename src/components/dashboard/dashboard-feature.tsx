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
    "2FopC68Habn6GhuKkX56MYffFv46ge56S3LofYDnm7zV8j3Pza8rNTbr1roQjDhSQBKQFVBE2CS4ReADoKgyM6g9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27enxt3cEvhZtWGbnuCv3gGfYU7M828pupmosNjxTVC3JZ5bc8sHcbsbZiTdsoZF4vnjQxz2TU7yciNi4vAxQ35f",
  "key1": "67LttNQf1GYswr6uwpsygTBAB3s7H26W7pNG3BZCFyfyNxxQ2x5xngeZWR1fZKYwaZuAtVawCyGSohrUof557Zwi",
  "key2": "2gcuN3VqTjzVemwKabbq4c8Y5nyypvou3ETyvYZa6yNA8ST7zvyFUa5iubdGkRLkSTwsd6jdoQ2D2Mv8iCgp5A8o",
  "key3": "47ousSaPv6nk97K3ARnZJw1GqkXf3xevdtsErbXgqDBm2gLqFKsd6g5HQnVwrk923KGpryY7Es5Rn93gWaBipzhg",
  "key4": "3C82SEGy3Ab4TeHgZDdHz5KfxLjQ95XFa6RwAAd77d3CR8vJzJbY1CZmBdMnFin1yVR3oTyU283vncU4aYizuqKu",
  "key5": "wxUPQC7snyHvLqmHQcw97g562abBM1Cbs9dk6AewaPByYTWaiHkCJeHTMBpYHLnFSijms9NtF9vitbBdT8we7X4",
  "key6": "65cY8QYoMfrtUWd5azFT1FeDkL6JEgSvoH2zjuURYbG1aP7cQan9nFRVtV4uNGKubzswoZpVFiBG1fFjLw28fwZJ",
  "key7": "324FCFCBpHUziU9Q6nJzaK3Ep8Cxyoaw62zXqS772PdG3ffcb6ouyFwrKt4Kc9j4rXqSEcVruE5J5YuZLBKBs6sW",
  "key8": "dLu23h62y326WqckLkVWAjKdjtdjfA5Q6mETnxSnkS9xpSQDCahEhX9cV4MxRpJomAZknVZEgQRkKXQDQW7UB2f",
  "key9": "365NYLVPfYphrnXWyLT9u3bPBJmHXjoHpUVCWhPnWodf2LvxU57khREPQxV61WwiiQk6d2xNZU16sCjiV6HBrbzA",
  "key10": "57F5BD5WaA9kkbi2mNvhfrKeUW9DSPi5ayidfFYksGHtXpRNwukjkFwUq8PBtprHovaSNmLyNX1hvDYjoJ87xzpT",
  "key11": "xbW611TLDu98v9EMA6H3bK6Yt8fjQGrPiVyShWZQWtdWTEVzqy9ro7c9DWepdRfDS7toXZRxHvA8xKPj3ML2huv",
  "key12": "4NnhJvSwQKncYXU5aB8cynN4Cm55zm8kmjpiZ1rHt1AsP5vfBBBpYhq8kWKvdqULnDqHr6AcbkPossuHp5PhgEMv",
  "key13": "35YNWHDyPDvjkhPk5aMmdvw2ZFZdfejQagtjSC6f9qeuMNMMJyqvMpijergqBprv6Tx7E7DHjexd8Por6WxLgxkj",
  "key14": "2SkgPwpMG6qrw9B7Gm9Fhua9TGcXLkJ6Dobv9LXGVPKx6DPAjTxewJYDNLTfVgC2Rc5fPFPy3Guc1jMo7Ujk57DA",
  "key15": "3GKkfZegoo5ppnffL4jEMt52LcT5LGS9DTTH6Hse7SZprYidugazKicWENhRSXWwTvcZmt241akp9VUgzfP7VQKY",
  "key16": "2y2Y5VR3CpmZyRDLRnrWiiz64XmDBkqr9h1fDSLb7cG2YHXxVed4CpefLw1EDsobd3rzh49Y7jrBNUiG6cbeEJpx",
  "key17": "4uPVJVMC1ZujN3YjJJSpnfkhMfDNYd5VpWjsXRmDUD2VhfdD3HyGNhyxSe2fW2PvtqgJxKj4jgPVFiHAH5QtL2YR",
  "key18": "3ZxVuR5ATgzb37Av1rRh7cJLuXRL4bNhLj4zUiRPvD44DMVBSTkx4sPfrxxYdf85VVVsGvQwr6mVutVu1DJ7VSJu",
  "key19": "vFY3wSEVxfPdGRGYAQs1SNxTx4mfkTMhQcdHZKQ9YbyU9VReHc1ESrpASS5nKrVjMfrCDjoPAEQoeAaWhkjgqjD",
  "key20": "3Cx8u6UbTALuS3BVWcoSGFR2NqWyQYnvM5sQojZ1NmPBy5ojPVqchu1zj27JGjYJmkbSqdxRVqX7DHmeFZmv8c3G",
  "key21": "4vowPR66eA3weETZByG4J7ngHdqVeCn3WG5T2LArqqAvREFsh4rmBSykYbw4KT9WFWFUBAueEFdEiDzH6rG2nLqR",
  "key22": "3VXMHGLFQNXWKTJrWvgN1WgRYgXr9iLThy8xynnmRomxetjxJrEDxYi4EYYt7mkrZTAYCYH1df44DaucFBsMxyzS",
  "key23": "2z4FU3p7ZRhtCQZxaiyDiVDFHADgJqdRTFwDAj5kGtg9EJqLUo59wqM7ns6WRLDzyj4oAz6ENaK6EMKuw3P1PPEH",
  "key24": "5dH3u6kQJPyHBWbTPkoVKj3exSJ2uqSx6mZ7ZnrVqBj2yB8xSQF3wAHcii4Mj83Y6k4MSwt8vntKjFjTEu6HNqjT",
  "key25": "4vgcW2ERfttiBgQt8gsFFLPUhJe25RJ1EESNU4e5SLagqdT6g7i1iGQJcFJZYX4CwVwEgEqhMMgZrDzSbZUzQbig",
  "key26": "4F5GdSjsieJuJ6QTbrEcMoUNiUpRF1g6t22kkTVZDrTsKBSaG4drJNLwkBLFSz4xsb6NGnC4BdS9Zuw82qeTQkoE",
  "key27": "4MCFewjT99bQHe6CzTYVszjLe17QYjKm1nrpidmfQoGQEgVQFT2cDHnVorEvWu14eq5YBnWmECg9PUAdYMSbyTbc",
  "key28": "5FBpkMT7oWxzY7EEzNqDW7oHc682vn4kDHDTSdNZaSkCRQmHneNnfk41HrdLpsECgpqYVYGMSXdYmaVPep9jPiP3",
  "key29": "4QaEzupECTpFo9M25AVtSXLuKDDUjEtrxe1LZmpwLFCL443PNX5UNnbRQrge3WBsYFzDfLjARQrLeGwhj82Sj1y8",
  "key30": "4uS4y1bqnAXEST9HGhhLhdw1R2ugexdiM6YfC2DynNp7RuYE5wtPKNSTY3SfqPP1fa7MNymGmFCNMz84eHqh9Yh2",
  "key31": "52ogv86dR6X54BEWe7WSjiNAfuDQVLG2oDJtj4FeCbDAzipMtqLaumJSYYQCMMeTWSvHihapCU1PohiZxee2zxyM",
  "key32": "22mQkWHN1XJ2xdKwv19sF5JG9BFJXV2io23Gs4Ngtb67yiakVpnuj7Ez5fDmvse5AW7dWmi1dCfrUMTCpDTFGA1d",
  "key33": "Cng2rgzfJdmHX3ervv2U457tXozACVJfkcNw6mi5aEgi5gRd9PnU5DSGDVBLqbuQw15NixWAEtjVViTRfsQzFNH",
  "key34": "3g2KncwxSqFhp6xmmdRhXYZVuX5yt7oD4iDyJB4DqWSV5V5gMeokrEoXUFrXMYX34nd5hvV9kZKm3VyKD251PYMA",
  "key35": "27g4ztKbGMDjfaTS43RXp4Ep375vKsiyHPSJjQVxVq4LTs4bsFKFYGzPd2p3zfxiAk6G5aZcwJ21584tEuK9viFF",
  "key36": "kh4mTbqQ25FwcejaTakbfUySpggTddR1PxYPA4XQgPC2pS8Xjzi6F43Jj631WHFU6n84UDsadBoSUBhs1VHu5wm",
  "key37": "62YaYUHJB7zC6rQqxmptYbSRtzbNwnWN5VHRqC4bqDTX5RrJHrHuasYCP2s61hTiuqbi74yeJj5uh9SRZ6cgKZLP",
  "key38": "b86JimZayEqCqw87NiYmD6EWeNT7N5HpKgrdn4x8b5SvsCqNcb98U5DhR3643UEL9q5RWaBoF72TD8gvsvrCSgp",
  "key39": "2iHmHUNDXve9GvMSAvp96cxLLaumQmPbCqQ1utJhpHES4kHEhGU66xeiCFST2SJYgnTKexqnvFABA8ZManGFu5PV",
  "key40": "492nEeRwa6gk3xuexD5pnfm2nHcaJLurBRrDexgSE9WyBEQqNkycmRZGQaNw9bumAjKb4zv88uzTF3zCZVLSjbKh",
  "key41": "5vZwkrN9MgtsYhd6EA37awVZ5GqePvVBw3xCSARmKVnnpEu6P49rD17DAdchoDE952TzopNNMDzqwqEtkk96AWvD",
  "key42": "2x8K8VqbeMy1MFzwrNNLZmwR1v95xJQivShwu2oTYGkAcEs7E5oGWLPPW8uuQrMYAfqK2wE8iddCGSoYvaSpKDV6",
  "key43": "5vqcv1u67TBKxejD29pm5eb1s6jwjBqpHA6zYqsqGgLCmiA95nA94MQKEcbVzntLCUHGv6c4AJCmxcwR6vASUDzN",
  "key44": "xX482PPUysTf1yPwAqxdVXqpxYHD6oWgR2MLEnssQRjRxwRfQ4nvqtCcscFp9Cw8WectJL6MoRcz1H3jC634PEh",
  "key45": "xyEoW3c8z6Y9C2aAAdAnBC2EnPaRFqBMhzDBxHhXJdjkfeTWmYwdan7uuhDccswng2ZzzYbs2WBysnmR2KTg6N5",
  "key46": "51aAnz3WYTVmjrepLBmbYhcCSbkXBxU7DS8qDHNbVQzLiiYKpYzM98NVUFQvcwvaQfPQWAZjbHsGegq42Kt877WX",
  "key47": "BsVBNTJJoFZ6m6z444dLQcGr7VBa4i7JANUdX5nWQXrsztPBXbtduNPX8wPbjBpixrzYt9Xm7XSRPrYoKwcC8fW",
  "key48": "2JVt2hpUGYobgtfkZebLTZ8MVD2JH7EnCBX7ZRPeN8KJuo7zLEhUsRBRVdLisXCQAbdJu8vrKhubF8AUrUbGGHkR"
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
