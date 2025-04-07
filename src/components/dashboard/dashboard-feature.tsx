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
    "4E7ZqqfyGN3guFukAjJnxz69BZ2GyijfsWSNU3Yqa6quNT4oMbHHZtdLc4eeFhirWq9QbHrCXCpR44xC77p613JM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5guphfu6xPxbPdnLE72bmWDusV9aqooETNAUfmmmKVKJ2UmNGoqq8MoGoWo2t3pceeBCkeMLV9ZJUnu8TQR1tp9K",
  "key1": "4sXy4GX8XjgYL71ZRrVfe9QS9JDjCCHtN1HQYrtuuRHcMVhGsPdSRNkvMiiCXJAxUYK1pGr17wEKQCqSAEUpHPjr",
  "key2": "5uTT8CCUgPs2PmvPKFMsCB58aHhC2inYhypkqz8FXJDJCo44tWv5dwt9DsAGfojojpewSWSCGAYTijzENZfFpm5a",
  "key3": "2Ld19X7sGZyPsCRuTDgnKNi6Ugqh93bgVvkDKXghyn7VGVT8ub4TUhoNr1jg9tszpxA5ck6q6Ehf7e9TPK8BTuDw",
  "key4": "5HRPZJnFgLjmpUPoo2xgw2kG5a5zW2XcwCar2hhpF7yaViqdWeaExbH1NoN7LoFMoLnViiJUMaU3hFjRYHP3Vxcg",
  "key5": "51GVXXo5LzD8n3vVNhKHgGbJVEzYvMZtaWA7N1u4HfreQT6xPz19raRJ5paVpF9RtBF8VTWGsJqoHS4GsBqTNwaC",
  "key6": "4DSxqbepskhEjWPz8g5y8yFrssaExstBSXxP1qhuKHA1SspojeCbL66w1HwDf12KySsC4CDp4cTUrXXqJwLJ27sb",
  "key7": "3FHk1RjLf3zff9VUpm493H7RpKDD21bg231V7PXrBGsRcPhfcNyXc71h3ZVHkUpt1YtTStSPK3Yyb5CRFxLCTS8E",
  "key8": "2U4VfMAcx9VBGF7wg11irjGwYEKuPweUoHYdZyeDAZAdRNs2bBez8ohrEKXfEGP4Hm5Mrdn1U2cX7WirntPNNxB7",
  "key9": "4y81t6d4kaZeRmTUeiEqwHiRdK1KhZmibHJiCfhqoCaqtF3a42YNXi15Jz7LhyiKWpY65LU4DpirD9C7XqhWatTM",
  "key10": "4xwZqYACbBRtv2EAPDoHhkPexp2qxqKQenorKUA4Dc9sjMfc2RmB3VvL4cWbZXSRTCNK3iVUjyM8GPfJqfqdW33n",
  "key11": "2UeZ2V9tuTSRfhJDUPviYioWxpqwB7dvKAHxGm7A7oA7uAm32DrWiz9Tfyjp4uEZj29pfm9RXyAwq5j3grqYfQTP",
  "key12": "Lmjraq5SHTTEGyKuM66eLuknH8qDDrgdUuNHnw9H5931zRwhsCt6m5BPtJdPFxBuXifT8D2QCsokKBUmudL4GbF",
  "key13": "4WmRzeDLccd6HaEK8BDLLpF5ssiaDCN2dZisqjL8J7adupT5qKDDFFHDA9sc5nvLpnHYeHUbLK3tZFtvJx5cvees",
  "key14": "2tKfy3RsBzJ7ZehfiM5Xq6mGTDeso2YY7gqS3jT78Q6f7QD3a8LfakSCi9VgADZAPv9EU4rNoXWtWA5Hjbg8q5pq",
  "key15": "3wHaDQSeE6pZy7Bas5cCy9PgvUL3E5DKdwThKPAcEcVVH5fVCE66Nn5Dn7HrKAUwubB4TE7pnu1e3cGJD1kGNRKi",
  "key16": "4xzHUKp6U5stj6g3Qvx7GUyEaFjYp9APgv4qF7f7fTkagXBKsNBuQafAqpoFjg2CszngsfUcSbNoZcQrFw62va7v",
  "key17": "3RtmipHkX3JdjMapjkqAHJKNHW582QAZvy4VaBFUErzbxW5HEWZJDHXc8UnChFmkVLbERkm2hDzz24pLxLpfw5pV",
  "key18": "5Fd5nfJnCAQMTshBQsp919zy1z2WRVA4fWgtwmTFPjMJyU33YThvozqu123MGcaRJyEi2uq1ZHTjrTNdi3oSaTzz",
  "key19": "RiZmYTrzeuZHxtzxaJexSV4pDC43fEfKwwsvPPzhSScZuS4d2XVddfdbiJN86GL3oz7kfj3JELtU9YZus8PpQLt",
  "key20": "3ghp2Zro3w4Lf3HuY53KWftM3Wi3oVgwnaUYfXi3vg6B9xWYTMt2yvM1Md1MekjaypMQjzfdzVwvPdfXkuVRSLUN",
  "key21": "4E285bttYkFnefd1rAE7JGPnriaYrfsVVNCv7Lqdygn9UnUH3d6rH1kAK6kNAML4wRN3xsQMmhR5zY62Y2M7HQUb",
  "key22": "THdYpRrCxBLoZW95wGnUGhzMDqxRcbEwMWnBdZuwZ14wNNeQ8h5HV4BGMdaWHJ23x9JjGBAwCYnnhfzpP9ZPRvR",
  "key23": "ANwdWmMurmBmNozMsfEDoapKRJHXFRDLtYHpAoB9qoh6TKSrFqAdjnonNRNZsZ7JhgTsx8xsrFfqiGFbZTEWYzE",
  "key24": "48wuR6fF6cy3HpPQmemUwhfzAZhJWAcCv3HmngpHFvqkCuW8dxVk1BxthZZFQKDf7g3p4Sn7Xh2Vbuo41hpPMAAo",
  "key25": "bQ93dGnBxYbWRNWHksWGfxmvi5Td6tDX7uUMnoQEfPYdBzCSBxrqYbQtzCcGrHdcdCKNcunYUopM95TpsE4Aiz3",
  "key26": "2pHfYfkAdfB9oQCbRWrTgWhLPu8mizT4oFzdcVBrw9beguzW4iX6AzmoZ4CMKFmZxYSwNRYRDpjqGnyQLsUVvEse",
  "key27": "G9W7C5oGm2BAwhb8ykSFhJ2t5a6HTRisUiCFvASQN9xZtMQZQUZcQRvTNnaJJCtpx3bU1FdfmGuFgi9dGQ3s3Cd",
  "key28": "6mW7f79BKhtTJMpTkUaL6rq2u7R1nAzcJFNhscVUxDT4mrehuCvaxjzuTzpH1BCX3SsFoDXtgNfCTg26Kw6bznY",
  "key29": "554ya2y4v8sD1FMWdPg7TawuKBmuQhYP7xKGCKxyWXqDcHYWHTQZZXXS53RqsBtHgncSUG6akvXN2UPRFw3nofsL",
  "key30": "4NpUvn8JuShNeKCbSvx2NVMhVHYRjwt6jV56T1mdWmqL2EysmtJ6xefW9Ro1Cee2DBNLqCHCA5xrtCBSwUpj6zfK",
  "key31": "3iV2ffy2wBUY6Gxuade9FaQokJb3XRz6UcEftcAZsyMVNkGcMn6oKYUKBeonSGrYVdPyrXQyjkFQtM8xHVHxnETR",
  "key32": "MBGMNAGD6CrmNFGB8EtvbY6zWDit2q2xAMjVUByhBnNB8b3rBhvpxcgFAgxBH84Laayz8k2XS5FdEQ7u2hGnZ6f"
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
