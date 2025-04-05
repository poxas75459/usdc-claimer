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
    "2VXKm3eJ9yABRKaELRksYtrJZSLK2GCgeaMF5okbh5aFKeN5ErjAaRn44s8Qfv8GNF7arXsA4CJFp2vuW1VEipAs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ihF7oiqRbwFrct3Rc5UPCiE9XJWYuU3ReRwThBUSYp4sKdR74yQ125Cb83hGvN22xvpSLjBs1Gn5TMGpgdP6CA7",
  "key1": "3NpsEt1UUvMdN83zLMVcowS87QxYyZsYsZbEuxUVfHqok1jWqDmnAQ5XV3rSwtB6vcR7BhcUgQABkWLKcaE1DsKM",
  "key2": "3JAo7bhiDFv1myHs85BeX5Gxw16RYouM8gzToPB32QHdniTpFzYXuEN5hCp7CNMx1HeFzcG2WBwkohvY7BbExYSC",
  "key3": "62RP3JtbdiZJzM1k5PBSk7G2zsjHug7KLyQLbsEnCENfuRMFSSwKib9kbvE3SWRc6nv3QajF2WV1W4gbMuGrwQxQ",
  "key4": "3MXShBUNMN4X4hv6rtP2JL4GXboArhHpaELKv7cME9F16uvrTWwxfDnpzqmaF2hNcmaVwDq38zeXNdRckR8YuKb9",
  "key5": "3vqesCarhpPKinyVT9BMaf7CZ7xYvH59wzmW78Ru6TPErwRyPYFLrqnE5eimtDYCXRThXwCnEzfksS222E7m3LiN",
  "key6": "2T6Wxi1T6Vto5rEQdofKSsjH6YD5rDVhgvrQZcsMTFLnYjqD95cPX6x3aVuciWKMDVs3rL2BSafJ5ZnQ7cVA1D8K",
  "key7": "nzUWaohzSxnBWqAmxYHfAEiMuvWzyBJKMQMtxw3AGkQkqpsLWMMvZGpyDE37oUxcDAMhzcCMCgBMKC3NX3xiCsU",
  "key8": "BnT21bD1VV3D7n5fb4C6K3FKABczh3PzBX9mZDHwZUoqvCF1JhPskig7CMJiGci6N2aJD43ntkMGvcqW6eBzChS",
  "key9": "67DkuCuJbAjaU3Nx8rnyJf4E3BF59WmWDvcTahU9Zq2maakjifPNz2qFMQ6HcABJDT83rcCY2MFVn8nwLzJGMDgg",
  "key10": "53r5ucrW48Np2xxRCQR8wZ3VAU9Fsz5oRnjGjUm8BrLhEZF69H8KmPa4bcZDievqPhJZW2KCrdPXC7UV3QNzGYFR",
  "key11": "2aiv745gxgpdKiXHL4gk8YAzyh6FeNwwRkWEBgtt4pqhF6CWxv7WrzNpStojEPqsdhfDbhwrS8ZremeqHgk42aJS",
  "key12": "249xjfoUDrVUkvARMrru8KEN4CXiwrnB74VAiHkYxQTSqqpH4VC7iQA7VhFX97b2NDyUtHgAhABCrGK7rGEGZkYF",
  "key13": "31RavtTG71ay7niRarNihuZ9M3ngjma7PRkSypuJeqKKh4V2mWxiSdqrRtMcoSnSo3xy2rcvkWvFrhTZJ9cfoyY8",
  "key14": "3wVhoFJ5Q23MtPyBxbwEvCzmyCwDJ1ydMp2vDAYgLQhTWNhREHRL2otsxmCeCqZcjX1FbTAwKkEVpukQNXmVV3j4",
  "key15": "55ZbeTjYZ483ayK5xPaxRFXEUrasRbH2DfV12afs5sxAf5QJdXtoXtDzByp9CbdMSdPCVgVohyvyedzBQaTCHLfS",
  "key16": "xxyTesXdqpQrK66Z9zGbR4HrbRYDinFx65wk8ZNbWKx3Gh9Wg1tmm9P4Vk8qAzKkjrgAYUDuEJ5PDaZ5c4XMh57",
  "key17": "2KdfYibGi1M4HESRDYNQUdzpHEUMV4QxvPki6QHwdzgc73PpDrK71KGbesSxEq8ToVxys23ToyJdRJt2BnR3G2rM",
  "key18": "4qnsw6wPKyMedTqktig6nB1zzAmk4AWVWoUuJTC9gDkZgKnNkmaFu3YRTkeV2zkNCv9PDqmjgjnSBkdkZDPzQ2qJ",
  "key19": "44bojtAnjAwxYi2XLAHTgh6BzvEkJJxfRWiV6iREgn1BDYhx8d6o6h25JGGy3St5X2934VqSBqeFVKYBPEL3KJJg",
  "key20": "qYAGgk9fv8i2ubQV2cGVjU9SB3t92CjcqATLd6oPxsxEddRDAAjMF3tkRCEqwxuDiVvTcVBwx97F4AQqMk1kvCr",
  "key21": "5CtZzS5vvb9aJ8oAr34TbQNGrPo3BipPNjSnosPRAigWnf98iYBp3Y49S3ZAkkm6EkhADwCuPuPdQMUxQGJxQtYE",
  "key22": "2nGD8SoW98DPMpiK43oG4kptoPaFhiqDwajoNy6LMSucGLpdikBjFfaeWHCj8XzsK7Y6bZjDtPLXMEM7dPPLeuW5",
  "key23": "VCd4itxdDa296Aei12po9wVEGhB9Du8q6ZEfVM3EYXbDdp2trCQiyu7sXKKsbN6P5nTxK3SdMNbnLyna6hPANTX",
  "key24": "3yjKvWvhkYbH47hYJ2RCs3auA1LfVaswy4N4ZNDtRxKnTChYy2ofuyajTbXvw4PkZz5xA1h4THia1xUtCx6xLQJT",
  "key25": "5GoxkFKZp6E6fQtoMXDqT1tV58MaQAGFe8XcSGRgcCErDAhyCoAf3yUoXqqKyw9gJNTJkEVv68FLwbvjovxxXm12",
  "key26": "2zoZrgdJFzsJ14cjmEByJqBBfYzNyjUQe8sHbg5K8tminadxH5UACyp5kw39shP56DWr97vHsaiLjDmRfY2AeHs4",
  "key27": "4HckJTkn17BXhAoqx4QvWsYmatGXGKGygZ9JAoTPEoFf6kPeQUgWdWUJ9D6zDaGzMtPiphM5vCtKLfbcvVcuHg7u",
  "key28": "NmNXhsPQCsWujuTreuCe48ahCHiCnPokKo5UEP2n9dkmpBbAcz87pE6VLqkBwKZh7XXYGtt8r9wuU49VsJKYMHx",
  "key29": "2EG8q82CMYpuQmZxxdAjLxn6pudayUVH7YgKnV1NeFjiCFceo7W9TZKB5XCZ8xp7THnvg2Q5foSEw2medckpECTm",
  "key30": "59qdsZ7BsmNnB267jY9xNWGhKL6BDZ28Tsux5G1ZHRPt8zz2rVC6YcJUpDL15KWHGEARTSWyB443rQfk5f1HNKoh",
  "key31": "FVd1aiAXSWQ4pC4PAvede32kVVD83Gi8VHuyZM7pJJkce3ZrQDZZhx32xtYc1KdFY7tk2Y337wJwkX9VYELXvGQ",
  "key32": "4cFqPXWm29YpftJfKsnFcaxMnxjpdXmo7Fz41KGBT7VcRo9jy8pbERNYxHiqdXuT1YqpwGv6G3v1MRuhBEBjkb6f",
  "key33": "2J2Qi9KETjPio7pfU3iHpVYMNXcyNfz8nQqFSp2f9uLSDnTiGtcU6j2zrAgbHZuMS3ihoCNVjuiuMeR2dC2pkPRV",
  "key34": "383UGianatU81EaLQnj87hnaMmdP2ER7doKTBZXJsDApHK84vFeUrtQCE4WWzQQbWMXwmpYrHJfZzSCPDfxTfcuG",
  "key35": "4dZXHAKxcmvfdk4qg8Q8MF5eWH3RipUNyboALvRmnoovbabFNvhuk6dnmq6fGygxvpkTxvQHxJ42U3rKkEjntpbW",
  "key36": "idAFGgbdonkESem3RiNc3tL8PLqUg8wamFcgJccMDbJDU1ZLbvneCLwWm9rKY5qnPeYhkAnqhcMtBVbNNoNUeL8",
  "key37": "5FKuben3ejh8m9UsCaCM44tnc3gkjjqiyAqDkcN8MALkPM9tdUbqFBzviaFRpN7m655BFQcEsBngQ7bVLdyUAT6Z",
  "key38": "3o9bnbQ7qiroGp1Lj5moKPUV9pHVgE7ehpLPcs18k4FsMEdw7bPpuWVacn5Lo1pPa9DqFmDBoPu2ZvBL4fZTMZKC"
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
