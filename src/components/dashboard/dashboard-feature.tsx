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
    "2fbMDxWU7Y76pQ8mBtwWRkhPoZoJGVMhh1ewTVSfeFhfVinSRqQaUd99SR96JVsv32rNFdxWRgHrJkbgjpNu3hHu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZAcq9TrmjPUhUYfYzp1nhABkcv2J9FVS3PWMXjnsAKJ5iGPYbsKGnAhQPVU3KAWgSpmwwbqpgNeXZA4XiizwRh2",
  "key1": "5me36xUk7xSEeiqkPEAqiDqeJRD93voS4hGfMpRTPs7C5u9GxcET3KTRC2Xa36C2p8jrjn29SunPQe8pAPL63FEF",
  "key2": "3gJAB5NyDvJWtPYZjh5u51Sv16y9TPA4XP45vGsLBdHpzkhocFGv16fLgkDd1mAD1uPzp1VrPRHikswbApuVy9jD",
  "key3": "piABM5MDdcwTNcy9Ua214j3HWxn9AS3m51HPzKiPjP4kdUXeAij2a6zJpjQsZNrzDG2FG6GQ4Tsi7fhVwhUy2aq",
  "key4": "4t23oTEbhrUTYLPij7PMwoLVVgStewaQd1sWqf5mgNT5KEwAgPPNNkg35Mi7vi34JAfYtUnsWAZXEFLD6u1yYd6k",
  "key5": "4SttVJVrTVG5DGuM7A8rfnEAu9bqHW1dFweY5cactTMjBoNvBk7fUufaQbedVwT3EGqHoKL5RUzZmqLiGBUtnBmN",
  "key6": "3qygieQcAm7ztfwgcRiiaSKsb5G7868sVSaJ71sDJgprhWhouHQVqiGe8fijfTggbbCvWjSwcuc3Co7bXBRsyUkY",
  "key7": "96CecvnzYmZjMQN4Wd4RsKFMxmcs7bSnzKSHThFbGAaC9BqiCioGDrdxWaz4xomr4XTkjddZWbjMSXsUsUWZ9ys",
  "key8": "5bRokgdTj4cUabERwntorLFiMPy9jUDtjQiY2FzACrCXE6FfnGJ8Hg3iGzmoMPPBXhdi2wNihMaJc9c4ywQiFYvT",
  "key9": "3bsUnfk5i1URXjs9nrNLYMfsA3E8NLnscU9fFyqaR5zQ2kHv7FQxQ73g6xFvPhMKUGb8JhymEaD5w9V8t5jJAHzw",
  "key10": "bfsdBbw3LtACNEyeYbF9EMCRBxF2H9Gn3vTGgd3YQygAjhwrpVVi6vGSDeYv2s775pCXhXZPT14YNhNGxoPJfTH",
  "key11": "2QnJ66oDpPJ4bRe12ERKBpi5fimsZXsdEuTX86cJbmSps2H3vvffc7G6TA5oASEB6FJLGkNpkiWTeTTBuU8eErAZ",
  "key12": "5vANBiVpd6gqqKZNXXJQaZj8zv8YYPk74KQ9ek5oWCkXzYAes48wU433ZqZp1SgS4iqRJ77iqHx4xPfDzimb1hVA",
  "key13": "3YoogULw3dSq8AKVVopeNDGnXb27jrBSe2UL4o4LryLyWujJcHA7zhXnpJQWN3VrzuDHeZnxC3QpYKdWiTwPMRZ8",
  "key14": "4s2vsvfugHz8YQXqfZyhquxmRUf43UFggfb721zYACmb67SRGgorHWghMdiRZL1LGkJWkAeAmga9959Z4Vd4Jwav",
  "key15": "5FPwEAhPifko2Ch8t41AfQB4UAck34pr2ZsE9qW9HEtByCi99A1cgemWDq8sjhUmSUw1oSfHtrjrY3Jrymd3qKHQ",
  "key16": "3DEGH1nK5M9TFHf1YrMFmPWhrh2VMnARxSFWiGMamgQJkZkdDyuHMaiuEGn9ZhW4cnwbqcWQPVoCa8B1MraXGeWP",
  "key17": "37CMrPCW8DUmdNvA9rdhavD3gkEUMCZagUkoaJmGzBXH8XKGdBykXg2ctuMtnR8FZuGZesnVdkkym4AKLt1SrNhm",
  "key18": "igeKJMpUDvypY1YfTyaugpgJeURprHArmZ1aqWRStbimTg85bjRkGkMmCN8EJ64a2nnVYPsuD65vdAU7atFfPZo",
  "key19": "2Xzp7e5zRV7SS2H7htESknD2ZQ88gqSuhUDwNd6PCbeszgmF2ZxCamjZbkZqAcLAQtU3A7TACggUm6xsi2vhZShM",
  "key20": "2cWBMmkdWhvXLx6Nt5trTmT7JJvRHCChJsMXb3r7FpWStqE5rJYJj8bXm8AMu1wzao36o1kucg33QBWA3eUe8Pgj",
  "key21": "3LFEy4c9SLyKrnFPrGW1L9U4LC1QSnQeMQ8XgkxbFe6oS1M9F896BdVCoP93ic6mJ67LwN5mpBy7xjMJ8kVFH1wa",
  "key22": "4tUmCnWXVeBZBzKyqxHYiQAMEkk8CrL2RJryCiVsQT7FsfJTqGun51XXQAr8NEDV6uMz5c5FppNqNsqA6kPrSGn5",
  "key23": "4hkA9ecxjTBGxbwcABy5GUVwfofQGKZpcmt5AYfnfEZYaStXFfAcryyakKtijCEqDLKSgJ8nzu2nKVFajnRzazgE",
  "key24": "JeiF564TDj1C1oyvJpiXtRfbBLge6yjJngWCXS8tFYNiGzMQpUEvErHisfwZH45DbzttDMSQ9ciwDzphPDmP4nR",
  "key25": "3SKVCFK3PLy1mp2ZENs7RcUHm1H1iRKa7oY5Z41rrryVLxSU16H51j7hDrJ8LgY9AsUNmEE6oPXUcB1X4PJ3W64m",
  "key26": "hF8LBGxZWs8g2xAhjmx3rNzUZfdY3PrVo9ZKRczayYT8wuZS65HsNGr1QeXUFjKTNswW29uhfaPWh4TuNYKpr5L",
  "key27": "3BJ5XZPxnqczAufEABmWJHHa2dChnB8hmdAeiNadS5oj7AvFxRK6go2T7RkcURog1kGAGhuk9bd5a5UCZwr5xBNQ",
  "key28": "b3HnhzGERCFkXoEgaAeWkAqTHCryCYFbha3U6Qq8SnrkARXfXwdbze5axvVa4W66a2ufkax2KcgSA2pBAPuQvdM",
  "key29": "55SADnDbGckdN9wWaviB8nZNE3ms7Trsf1oCqmyhusSb7fxREgxJs7BxJFNqnP5AofvnkHihsN4phFXz63gDpANv",
  "key30": "48QUBzLU2gxGAxqBBf944ZjcgnoFJbbxfRTpzgYyo4CMGtMsKcwwTj6dv7TCicLQE6rEHxWfMvW88taeM1u3WyrD",
  "key31": "2tytehqM3PCyJ1k1xxM8GdwGWH5yYc9WYhQxchDLJbop3aoxrF6Go24GJyDE3L6yPy9mEpkY34of12s4y9TTfAmm",
  "key32": "y8eRn3ftAJRdbRQqjcSCG4a6tAYRthFVo856CkV25sk5RxwuMUHZ4bunqmF6vKJiedsCmHwfDXfmrQNNChXWGYN",
  "key33": "5DJnqcCJsB2pxfZw3LTDVoAWNcDrDfTAzn1Cr5bUjuEK8UCbRodMZWBZipKWgAX6f2Ca6x1CrjBB7uJ8Yu6uaLLW",
  "key34": "3phPb6TbyHUDfMwVxnCrH7Lt3fogQ5MNKFHPuoW2ZsMv1atiV6h66eiR8wEAHid3yGRCo2KQhDkxWxDRfhjvQ1Jr",
  "key35": "22Afa8joBfKBun6ZVfiyJeNqatAL7R9CPY52mAp2wNfvdaJcgGM3zUYbfjitGJa5t38HbTs3pR371DoyUYk1FeFt",
  "key36": "4WSY2K5MgfTjwZg72jwMJm6q7A47sSzoTahJv1DWm31T3wMTz1PAD5RrLLyTVibJ6Dztmwz2bf4TneAA6ngPRjNL",
  "key37": "hPPcfmQYSVzzrPhTo1BpfVteHqh9783aLtu3szfzbpoPkhMHVjwAYzNE1gtARturJgUdF59RZ1MDNwiPbswPRa2",
  "key38": "3wcbAgFgeH2AwbgD2xjmyDdfWS3mFiCufyZ5vfJNoXyoNMZniMSMaB3GQFcpAsfUYcJoXq1pnpUZJvQuNp2AazkY",
  "key39": "59Nf8TJXyhwfML3u8A3vGvNRFeTXXmnnczWjRiZyzXdk74TsDTbmKk6azx7ntgWidEkF3WJE2keGUeEcAAoMDk2N",
  "key40": "dQhFadEoKKCnCniPPD3wNcavV2vBmn84uNTmUN7wxnhp9YG1aLW5J11TFTDhg6tGv547SbwZtANNqpSc2wZU655",
  "key41": "2CNTbZSg8NUZNADugG4rSU5czouyBZhybJ74Qr29F24LjnbxwiB8ko8WBe8cgSF1DGH38SVY7jKHLB85oyHMtRYY",
  "key42": "29tSewC5ffnaMrD2GPPJdAzvTUrf4mxPReCYAePV5txpNos1dRGfTyjEyGUfmiTYb8CGqZRnj542Un7EzTd8BQfZ",
  "key43": "3ifYWMSQTZKYxFATHVSR4ufr64PzhdauTfBAVWVEKZ3egiHty7VPh5XmLhoPWg9SsA514QzKyS9MfmrU9Pj4Rw5o",
  "key44": "2e2UxivzWM5LJJ2AvEEyXeUshHnon5A6cPioeM6ZcYo4VVdNupeWbRxwovEhLTneS7SmTYohsM9de8TyHCujZ1NJ",
  "key45": "4JTYp86oNWHcaXLN6ZhDnpSvdRgUo5LbcVvVKmNLj3oAf4njM3uPj6Pm3iDxHVmhgaShpw5nqssgR6NJ5GeHg3GN",
  "key46": "2s3VsJBS3DyXmeBkp9S86ufAe6ATWrAwmKHHLTFLJkRryrMeGfcdtywUHdn7MWxJuhUspv9YKxkeLjRSPihNNgDN",
  "key47": "4mqLs9DVz3jQXpVbbAn22Hhj9KfkeSH9AiqL1jGpTLpRQtRP1cQBRqq9skeyYb1D9Ubpe6ALF4weZm9ztzKP36qb"
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
