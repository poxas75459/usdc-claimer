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
    "4UV7ntyxHru3A3G4GYVJRCVhrMEzUY4CYWuh1hRqtnb527gKk7Rna8DbyxJuMxQ8JeBG77LDx2fHioA4kq1Pj4Em"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ddzVyKaMCHrPF48F9eumqxhHnt3Bb4jxjkBPVTtszszcXaQhrseYpoPXkKQNY6XcqoZzDzawuN8qHeABG3fzq8G",
  "key1": "2x7fXvJNz9tKeRt5Bo9yBrtpfdWfbmiWk6UxqjQQj2SQFFeCCY4UUsVPPVAznNjd1SaQkGaaM4oSGLj1nsqjSX3B",
  "key2": "KSJFiqoJKcc8atFqwZ6BzvxMm5o8pG2fSBXAKzzbXjzWWkT6s2PpuYFg4rkGM1okWj2ztkMyRKpkaa7vRGXWGn4",
  "key3": "5UCWDsvabPiTnZAVkWtwZk9WuRCHkNspoRYWeitmYg2NfoYbqdhiBCx4G7QFSK623BjRK2b8XJM6qMkoGQrrRujC",
  "key4": "3NxGkAJzFxzkzTExvtQNQxzBZNn8t23TXqdQ5EYYB8D1he66W5zWDJfJt9DMS8S3da9vCuPnAHXA8bjFcqfN3TH1",
  "key5": "4Fwc5wVjM5pJB4ktYueZWtWLqPGsMdgvBtAwaQELy1wLJkbGxyLUM1hsGL1Ryn8XeYSgEkEb6vxyvmFKTAPcQtDQ",
  "key6": "4dsocRDLWtHqgw5baAFhKRdT719h4kMQmRdNcMApupkMsdrr4nF2EcRp8oY5wGSiZHYis4BuQPVykKrgM1SwAuKS",
  "key7": "3Taw19uk24JRWS7H8TKriKqjTUMMN5MBnFMfzWhmCTK8YizrRrFfwT8NGWmZAviDDtUok7Wqfu7qUZLgExEpv9X8",
  "key8": "41QGvtEyWiano9qcryYtnJRRGBdZcSvcA63UzanPUcy8wW6CT2Am4aFCxeFRnzxR2nVXTaXzq2uAGtsT9pEmpnAi",
  "key9": "4iLo8s1dwPoVjeYFvkr7fd8K6GXo1UAX3FTSo2WnahctnzxPgtHpuTrNGZ7J2AJG8FqaLhNufHwjn926kkk9MCx8",
  "key10": "5NAQ1YVocmhokFBxZyv3ACCDwfhh71bkhVFUKfbHogbP2YDjUNj5eXbFsjki7DYLFT55EdAJdRZU8twDUXLMbDpj",
  "key11": "4H6N2aaTYKwXWKD7z7FFGpdsoj52Gn9PupqeytX3gr68gTnLFZYTBukRjjjb9vmxXv1K3axE3hmW8cZc9xKfiyAW",
  "key12": "ArTUqA3qkBrcfMsmwv2vE6UA6tB9pxGvm7F8gXZe2N5BbCX9yLQE7PiwMKhNd9z8hE6HuNKTZVK9fAPUCfEq6Gd",
  "key13": "4Z9FJsY4U9iaMraqjfvn9EKPZjxBTRaoJRPFXPxEWGM3qUmb2qXJea1PxoapnLKGKj93XXriJT1QMsEceUCHjESU",
  "key14": "4HHur9MMFnkqmdewcyf64Q7mwDEnHZPQGmdg5bH5sDfRz1RwbmAZo6Eih8xzdJPs6qgyWi2aiJ8fuca5FoSUVKLG",
  "key15": "2P78PzHZKuvzfcAxKFXAbJfpMWwUKQQTs1iGNtceKf8aKu7nHB5KBZHMDRnpxbUwocAtH4f8jXNBm5jEkxtShvAF",
  "key16": "2CVbp6VMsL3UQ91W66N3JRpaLEDX7uYc1y9rgzKwcJcpGR5cGGMxnjmZoVYrN7jMkYxDBRfm8bziS9FefYvYpmr1",
  "key17": "CoiNMgU4vBwzeBrQrbtoGvef3usocTZERwdFequXcjHpzZfjVQ4MJn6ARUSr1ywc4PPPXbxBxc9xSj9Yo3xHzvA",
  "key18": "62KYQWmUWLdEp3Vvgpy2ckRARNoazdusTLAhpEVQh7drapzYvZjo9wH2FLDV9bBHGapwF5JfY2Zt4EpdvN7e1F6S",
  "key19": "3jnhvJaRNPM9qR2KiGVYmjxXn7jHCuncS7AvcPfcgvKm8RugFhieywYBXDtT2fJvdbrwS6XBhok9kintLxsngYeY",
  "key20": "3fWDxBgi8Z9Gdzp3UXRyzwhpz7pMW4bMzmnueNMcQ9M4vBhKZP9hxvqFTshq7KwyR13HvZCR4T1j856hhcQXhVGY",
  "key21": "4urKbcEfAwipwARkaB6Ae62Wfm6ZmHDHyKAykpiVCx8L74rm87SiGKy1L8mzgX2AKgJjtDmPKoehzH4QzBRpJqTr",
  "key22": "4pjD7hhzMBFD3m7i5AxKZx9GNCR2q2SQseRftmSQQ31LvyKDdLq3m1JRN7SeXSVshhFwW16GsVHSJ5ycvpTyC5LA",
  "key23": "3SHkMPpZHxfQqJBE444Etve1nztZ4juqDxGYVnF95wa9598X8TesuskiRYGFB9Wrb8ccNXQZQ3boAP2T7X2x8wxo",
  "key24": "2vH4N5jYpceNMrhmRwbgjxWuTm653ucUBmG4juMknBDRAgWpYbNmunaKHGaYzWsdX75eyp3zLWXnJAQG2hCA5nZU",
  "key25": "2DomsZ8RAhV28xJ6FHCRdZt7QRWR9SpvdCkmu8xdjNjS4w3g6cLDFj1QgKtzbs4Dnv1VmZCc8dvudeLTuv67PnyP",
  "key26": "3YyjBjRM65osrbQSk4SvXtNBWAmGdYDkdB6BQxyt9kY6vvBaSV3EYKSiCwhiVtWV4ojtpW7NVFMgTyqVZMGyUd6X",
  "key27": "4eAV7rSPFexJEGJwnjoUGSr715ZyHSwtjWfNFRsR57L4uU6maXR7WH62tgKiL1zw7sd2vA5Dz7kCDKuWMVec8Nnu",
  "key28": "4N8J9CQGKeDsYCpCHxquVf4yTqsXoksLNJRawSrMDPZXCFfkZ5r6tS9Wzcyct56pNTcctcaoQnY858NqX4BwkSna",
  "key29": "HxFaf2dFSaVmFNBYpxwYUqjdyVvdUarzKBQfMMxDtrh1SqofbT7qnvuJDEbnCmTjEts77DjqAb1k4EfzyMEbM5E",
  "key30": "25chSiPxRpSuG9eu5TsuUrHeWBqNrSpA9NKm4i5kYNchauFj8YCfrmaxdjQ6y3w1PSCAMURfAdDH2n2qG5h2HpSo",
  "key31": "3vzzhaT1jeFrJBvxMh7wZiW7FBhsJSSZdJxX2Zgiikdirejf47BbssuE3uvYwYhymR46YzeJhvKEXo97KyoPpDoy",
  "key32": "4zKocbECsDr7eZn5oGX7geTznYy3or8XKvRQUx5BGtY59zV5SEwDsPTeasybdegAy2wByL2BDCXUCGWzddvHn5Zp",
  "key33": "3AVjcCsGmwELPu9WHTqGFgsmcrUnT8xT7XozP8PK6nAbLnjn6kBQDCyRzRzRTZbvMpQ5mD6XivxVcqtfrUxnSj42",
  "key34": "4q2hxdozRtkPZz5nVzthWWUMC4yRoUDnRG6dLUKtczPBKFm9Lswf2HajNC7b7esTRUbA7K6eoZfo3KYZ2rx9pH3V",
  "key35": "3oRorRLaqh1DxDZ7wq9DoT5avLPSVd2Di8pK6fV19tdjHaBr1HCKexxZ9qbqsC1SpxWF3yPU8jkiQVJpMqWG2vqt",
  "key36": "2LPvEYiHDFytjUnQpkZayR6uVfvQpeEYVPFXXAmTFJ3ndHFK9CbN4RY84mwuVhtvLnd3N22bgron9U2RroHNw7Cw",
  "key37": "2X3qEkbcgKLVih9PQCBZ3GubsTvtj4iRngSNfAZ22jL2AFat4eMTkMFQUDGrcrK2iyTdNus2PbPdbXrZ6R5ARH9D",
  "key38": "cF9KXBSqJvgDQxc3z2v9b6o3VKWcZzVZqvp1e8w6JL7V3t3m7DJjMs8TxV5XmwGmAMKdREWoc2Pt8AN4ELiCrsp",
  "key39": "3iRngJHw9hAMN8VAyia641R1DiEcZsW2dsQ8dzX3HZc4LVFDERqF9bfdU9nFv8GnapnM7ATDP1cM212XVAWKz8v6",
  "key40": "63yn2EsQSh39QvhcBAfGCL1Ba84wToUnyPZHyZTzmZPG9xSP2tGQsaeDo73VfPCfDEUWNh7gNV83rdK3zFL8aqea",
  "key41": "61L4werjXTtNQBnUAEQgAtGF78oS412TqdQMDvdNG4tv7gryLC4shAKJpu36hvD2ETYBRBNxXmBe4VwSshLTgJTQ",
  "key42": "4UUKoSeMEWkR7CcPSasmBTdLbDXkpTd2tBCqE9JPshDGfscmQ24Twod36g5427d3kE4XVvbjyrGoRG9hfPaEhtoC",
  "key43": "Emw13bE83JHQv8ZmEMQRr5V8ucaUitr4zoMmht9pM2gF1H28Ewo6mD68XR3FLgMBZHFuNg1AerYhvKctkPWLvex",
  "key44": "24f5DLpdkF4aiJGDRLXvR8Jt9tFywy2ue4aCsNmTr1LTy1PvZ27eXjR8en62bBPknokBLz6c7yK2eUazWZLBaTVw",
  "key45": "2UsGssVqGDWHyiLZNs8srLVYTxrezjPGxgu4NbK5BpimrQYBhvYnjesX1saKxQVuh7RpuMJjodf7gdzsrnF88LE4",
  "key46": "5SeePqGDAbLxRDzUcFZkzut36S8tLcnpenSyuuxWsR6N4ugyexaqgCZvQPDHXZUDvtHo27fqCR1kFNwqJBGFCxg6",
  "key47": "46t6tP2CeRdQ54WpdAPJjojDbSgJ7PKLYv5HcfJ4otgm1k4Hr8N4DzezDFzmDA3d7gafoo5ZDGoyUcZF4PFtpr3H"
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
