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
    "5tDK53Gx6JJ9fv6Mim1F2TADswf77AJpVrfeaDKM6Me4fvqMV8UqacmXSmKkYsKaoqseDn58aFtRyoGNomQ79qdf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SXCVJLSoqM1ys1CuWsTZPLY85fwkzyXN1WHSJJuxYK86uCiMU2Yc1TdQaGAon68MN2r1eX922wabGHdNVvtfoR3",
  "key1": "J6eC1fEeuMCjCKLwT56AnVmU2pxY9C9QSryoSe7FsWpRaVxGuTECnfmoveKwGXnQLn4jvTks783Vjdb7ghvdiNH",
  "key2": "413kiMK7QGKZnFn1qqP47gThp2grun1pHXcjtaoJYMiQQkJJAmvPg6GFBDvo6AThB4xJ8yMdAwxdzYQAmfyNvMFd",
  "key3": "FFZzCandQLfn7dtjJzhipmtaMC22Tygzng9GZ7s13Lz2azdhJMLwkGee1dsqGp7MDMWrhJr1JukMPcbW2voCFRT",
  "key4": "4esLj12f5y8sVWFprsskz2Ky4PcZD5HnMUWkykyGVYsMc7rYCPYmLN8NEQyg6PeerQ5cMGQtCrjdHXhd2bW61zEf",
  "key5": "2jQ9EjdyM5LJ1Y31cgA9uRV8Uvc2TntG9BVmZFrtmzwFqCcWraAzpTixWBgW6icAjESEZ683ceBEGfPqkQ9U4DUr",
  "key6": "5QSfM2iMyCwcL6Ftgmsfdb8o1zCi9Tr2ouspTgJYGRqWiTBF7FSuNDGP5kDBTdGA9D4a3Bo2B3WwGbkF9mFFk97K",
  "key7": "2VBhzzffswxGcdpWnC1bHNe1cUR7Dpw3QDF2Dw7o3cZgfPZUgFgFbvP6ud2E4tkWRMmqUq4gCaF2JWU6sxdBeQF6",
  "key8": "1fvHotMYjxdtoDm6oCUuxme5fW1T5rfDyKFrbtChy2rM8TZfRPoVbMkYdxVaeEz7NnBCGYGFWuGCg4SnpCEBoLn",
  "key9": "4UCUXPHDBP4z2DDL82NB12Qv3CMWJW5HtRAybFmucAxLP6D2x4pADpkr5kCRCduHLQF1HgXBzEkreQBSP83fVUH4",
  "key10": "353HHPbrqogceSVaUi8o3mcTJmvHtukcG3usY9GbGMiXgSjsYBa8mCMX1mduqkUPBCMGARjjRPeTXcAZy16EVYFJ",
  "key11": "xTyybS1huiNvety7uhgAxLBmUjW8keK6xXBGkQjGq58vQQTaTjn3vK9ZtoNwJebp2n3RXWGZQYuztmhdrDuVzTY",
  "key12": "2t6hjVJSghwUofARmvsb6SdEAHDoRHEZW4A4uYzjfFfeuscCDzJCX8JyhX59DCipR6ro8RZvQQmtzPL8VVJSS8Vq",
  "key13": "5WjWnQoXu6pG6g3gSnSMWhe99rVaadTMhu7TZbWiudAGEQFUN1ga1eCbQ2JutRkN57tgkrK3sMnoqDGwHpwTd2h3",
  "key14": "3jWNyw3Sqh2LXLDrbqQQzzdqaxxxgRp2jtVGfFaH8rkNbARHLiqVeZJCs2GkLuhRWhdsJEyRzaDkjVv835LkvGx5",
  "key15": "4TMq6dbuKVbxfQHYGhnvtrVvFP22o4th4j5qA52jLx2v7UB5cRPRGnJA3RhxK6yhiNubviZiWLK6kK9ACJpthGEY",
  "key16": "5n7QDhfA9xtcz7BAaxCz8fRLJGXC51yyuSbz436gBraTV9zpp5diXnk4yjWy8V9JhYB1mZi5RFYwTzZYTfjM6oTP",
  "key17": "4h17d7euQuEbgqm91ksLspfss455keifrFHKnLfr3Vyhbx4cMpnh6mfXqG5AXY3dhAiabcaQzwxKUur6c4Cgwu4q",
  "key18": "243xP1Dr9552vnrJrniP3b2vgeyE7P157w2iGHERxwXUVQvDNcY13sX4q92XMbDng8KRL7ZgcEUzNHfNezeR9RES",
  "key19": "2TV6LTxza8ACZoY1Nyyue46fWZJFL3KZE139NAt3oad4aFtNqvMQyCD1qJBopDWa4evWpC5MHTAgvr38Aq2BhQaB",
  "key20": "i8zzn3z4KH8ZKmmuLjKi2Y8FFTeCPS1vAxz8AtSEZhBcDZDB2jZB5sRViBC8B9Xx6N1EbW6Aja3Ngzxsys2khJs",
  "key21": "67NYwuiffVpnHYQSVsecKjn9vReCGQDENSJFNSTPorscDmXqGbbA4bLzxANSGP7VLikYgV4w8yviRCog7BmVc28f",
  "key22": "2pPtLzNwnNkuHSHgcS1htWLG9WKHvByZkCvPSHok5R3aZrzpmSuEZr4s5josMosfDM9vuQtxSjbhUCssdUjhxFny",
  "key23": "2HcFboWEEZWwUmhUnQiFdoUonb71xwn5nNqN5mvkfaKm2b2PUZCiXsFH9JVquakz7reNueTD685QmPauuGwCfnAW",
  "key24": "2WqPVeoZRHAYFtF6BB5WHgC8W7xJyhiXbkz6J5mR18BsE66VBazuBmJDTTQFRj5CC8b5bzamiCHw88Uzj1Kg3mgH",
  "key25": "2DbYWBBGLNANn1WZxstPdyG8AQp1vQjHKEMyXTdixjLSbD2pKU4mxH7LHs6SM7Jvc1mYV6C4Xgh9ZQw6u37VV4Vz",
  "key26": "2HeDqE8YEVRxYur4n7UDcsRR3HMaj9vAKJCZRysHxREMsrsnkCS3bgCxGQiQpFCnU7PRy1sARDpGbWNFQNdfJss7",
  "key27": "W6PXMdihD9s7Xiz5Rugev1MKsnXJsr21Y9i9xGpzFetGHyVZzd8sLt9n6pnAcyBz5mZG7vHd68CeZeYhgZj4zxT",
  "key28": "3jaNyuBzafXdZyfkXfJaTb3vsmZx1YmrBPFwkyQtQEci7Le1Qy3VJVMXPLL5CPH6PozcSs8shygHxQCJtucMdnhX",
  "key29": "52Gf8atLEtxkCxLn2bMHDtzYjSmwpLsc3WnsLmzrwjXztHVbSemrLgCqjX4ho8tGetkygN29aopohth5hsB4Q6R6",
  "key30": "5evDG44SD6Qydrf1SuU7uNeDpQoWiuesZGFXZ5wj6MeSxyAYVAfUpcP2LYeQmDBfePH2uJo3B3RWxvViTmBhSEAq",
  "key31": "3KBZ68ZrLW8ud9DdbCb2VsRBikBKhheLaXbhx2ued5yQnY6jiWgpNSS9wqEXMe4UmqiYNBUXcRgRMpq4dsBQ4Y1U",
  "key32": "34yESxmKayvwivWKkyfiW271PSBC6dgjuHYKUv9wAyJpU5c42zsrhNngbwK1hQLcydEX4mdspLaCiLpfcDtU82yN",
  "key33": "21jPysxZKursvSw5rQv52o9Fg9xRdphnmtTmqgkTLeFiVdt2NMN1hu4sHnBXSJSXrDDVqCxTbuPCdQrPdfj53oVR",
  "key34": "5qo86pCurj1tSb4F5cNFCwxE6puGA6P37jZZDoGdoP45ENvBPJgQaWcMaFpitHK6o3ZvL5rFAfYt7zU8AHVzQfZq",
  "key35": "2p3CdEqKWUEJZYoCwpnTPQn87EEnA2hfZkYQr4Fh2VsxxqeNVEhx664y8yor11tQwYUYrLfeyKckb28Zm6GHmD5A",
  "key36": "37Ku95c1wE34F4Wfkj9n6sgZ1rS8KTFq2sCrpJaTFGxtU2eT5jQPnMyo5YwbV1UXMjo6c5HeRrnasKcgXvEziR39",
  "key37": "3H1enoEDpHPj81eWxMT3hmGqqC23qtBvCJdGn3S3x7sJ6UsF7ddjXcFqqxYpnebVRiuc7kaEVBcpwVuCL9sm3hXj",
  "key38": "55foKxetQDWdxcUg2VPswsbu2P3hB31A4tAtSwt97xKFjxhF7Xh5GDksAz8NoPwn4ScV3uTG5AvteXHLw1Z5MooS",
  "key39": "4nMBFtBe1cjZ4oBrWgA8BiLPx464TcPo1UsjB59TFzUDBuWVaZRWXKJgiqApcueyFFhHKJQk5SurfakiqHTgWgGH",
  "key40": "3pPpNQ5DJEASdq8mK6WMX17h15r6jdrn1qJEqiU9Vs2YoqQ9biGgzTGuf2WDtoT4mkw7vVEnVBGKP7UxLH4sgpAy",
  "key41": "5ZmJsjoaM43rzV1qvfssGhVAByoBMVA3AVF79ekZu5SuurFusQoLux8izgbkHCski89RwRpAdjJZd4YPH4Nz7Afo",
  "key42": "5px2SsCwmzRTWCKTEC2YnkkNxkhh8LpgsuMMJNuhu9tQGHPbY54Yyo1AGe43SEewCgzEZDiVARn2uxUsKrAg5XJ5",
  "key43": "648f7KcogprGuGhjthz4UWi58djvCCvkzNfducMQAFxuq1FeKj3tDWxjFvYf1tUzW4AqqPXTiz77YXFKuDFTrgkW",
  "key44": "5uZBQnjC4WZhPzJZURh4DaVK5Bw3AHq4BxwBBCrPuBxeQtWrpy3CMU6QFWwcWZvrTaHghpZSDASPYuzx7TWLGwsV",
  "key45": "5WJcZhoYkYdaT4idwHZ88wyVYPVCdJAnB54KzJU9You2j6hw1t7PeD5DPAC3ZxQZYUnDxE9rU7tQa3iHJmNZw3NB",
  "key46": "5HQAHEEx1jTWdx86Ud64EncUAhSmGxxMXobwmTN43AEHYKPmsfTL2N6UxTz5ajGMZNjEKYSgnxA8ZfkF6aui291p"
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
