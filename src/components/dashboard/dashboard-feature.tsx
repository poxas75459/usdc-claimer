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
    "5NE2qYiv3dQ4v5PdEJhcFpfHH6mNd5cBmzd92N6hjiJpMGK7gU42rDsdVX5Ky8sPpGbggEEjPSff5hoeako2kuYH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28wcqhJsfQ5QBitT91CADnmSqrQnt4qDmqwopDFF2umc9hFM2tSnyM44uPNsP47TcXm6qM8k1h3si8ku5pAgDgie",
  "key1": "AYibKfdF4Er7Mds3xtrRL5ej5oPXbc5Ucb8uYRXQb3yWBXhDV6c8H36SLgjnb5sDAojxBJvT25JkEhauSt78knx",
  "key2": "JuxiTU4marJwXAmCitxBbed6hYegi1eYLk2awRpyUDUM9T7yhMSDk8DoGZtYCJcfWaVqWm8xt51YwAxiVn3bu9v",
  "key3": "4LrUZ2VRqbJPts6AYT39XYsDv8uNKbgy4qB9cdjaE5BUaoYeqo2k3impTBxew8fNytypJiR8U5TV8U8oqqL17HLU",
  "key4": "oPiUuu3FiE5GQpoY9mykWQxgVPu4KCmeHQyx27EhB34XfsJFBYHKketMEtY662tsZS3DV95hcukqJmyXQEWADgi",
  "key5": "3PAB79dtkaM85Vik2U7j9sx4qmpfeZE5fEraN2WZtomuS9tcuYcqPY3iP7MYTbyhSpn8FG9U4YTFtwehid7gDNWw",
  "key6": "4ToZu12YDvwT64QYomuixWVPGqQZdT9dy11dopsriF1FHZRnB43BaajieiS9j67ynbNBiW7KHuVGUm3SaJa5W5WV",
  "key7": "3dxqK3QEEhbj3DfWJKn54kH9pYCcTHtWnqQbJrA4RVzsioU29BcMqYFdoyhbtj84g1fPySyHs4YjKcDaGfQzL43C",
  "key8": "4Ymut5LLLuZR5L4mN45yoqEbhVut7ewi9qw5mKCqBVR5WmqNPaX1uTaMUtFGQyrTM947uER5nVgknCaWdmEN3dt5",
  "key9": "3EEgfxcQQHWPBUYjWk8kn4f6uMRYiBCQn7gq4PLb1K9VAyynZBFLMk41aK1zEeyZS6aQCVNqJmchmFVTJxa9th86",
  "key10": "2EUf2TZ2KparxU91wqEj5DEjJYDZ8RtJbRi7hssKgxYauP49geEmK2kjZgAuHv7Tmmkwy8dssAPLLPGpDsZkxcFs",
  "key11": "FzVpFs5gY6sb6AmhP3VcjPM97zerUfJeL1fQudLzZDrJue8SoGbv7Y9fEeLaDfxxDzz6JHK6aGrjUDumxVhkhfC",
  "key12": "3XNgNprNJ4D62QMGNoP78w5zi8bmaCHbNnqwcoFRB1uPinHyG3msEnr3fvtJM2frL3SK5LvTKPj9mwfkMszMp1JG",
  "key13": "3981QXr3G7TzyRaiQc9u8VouXQUWUoxDXJsJcLcJXQN66KL15DAHPSjUQcXvgtLdA3APBVyMawFBnn4eLradAwVa",
  "key14": "4B7aiLp42VNF81yzyrBMc2SWB2mA81qmEFDP8Zgxa862ty8dd4iAjJdZtyvQ8RGkzDWi8xFPr4k2ZzyoUtQTGbwC",
  "key15": "7rRLoAi7YJiNUpFWwtVuNaSQT6i3Gnb5M5ejC3EJf9v2HXzHVxJFWarDWCFT4WFmgzZhtomwNCgGFWeEnAMZgZW",
  "key16": "467nEoUc5fnJ2ZeePVtD1MnbR8wQZfSPu44tEjy5cSGHv8yLvJ5rfX1YbsX1hroqvBUGQzZj4xpNSiLNCoVkHKZk",
  "key17": "5nM6DWMUpe5iwLmmWvbwVuKEZWPdrwGjb3X9X3yfonUvJxGzRyCLFJS6VkJ6X22SyfapGWKSSdqbE6y3KpHPDZAv",
  "key18": "dVo9t2EGx6BVWeiisN3YHXjN6q9CC44iwC41KdPjCEkDuV7Ky9nSNxZ1WyX3DQoHrzxexUNbSASwngWemhx7U8y",
  "key19": "2uwJJ6tPSg5t5VYzJK5s2xCujSbDtjUfLGrV981ZG9kGsQ9443yFU2doUGZaHhhVwtmywTxot4Cr4NEkbg691AEY",
  "key20": "5pvf1Lk3vMXw63shb16oSfcwjSJGjo86cXWvH7i6wFAmgix2WZBvBKKPiEqL8LK16S7qAdPeW2YqreCWubFAFrod",
  "key21": "2iYFB4wXr5aVXudKq6VsknDRCmvPLAEjPsxyftZnqFTTu4cAtCfbasJKpYiNTmPMXF3s57o5cqvJi7xcFbXXW5ji",
  "key22": "4EFM7WquyUTRGSNXtz4Pa6tKkm6KZfxp1ZAeKX4DPwQf9Acvf3pFH8131SPXEHWfVfeBjK8hhf55UWdR1wUuoo3C",
  "key23": "35wxsy9bAd8q6s96mZRoFfujpEJu24dofJhKc15Ua7qf9ykX8rweNWrgnLAja9hvSRAYwayeAcNs9Lgz2GoPVb6Q",
  "key24": "4E54C2jGT7s3YM35SXV6vp3KACLWTF4GSatk6AXQV8dcGcJDBnPJTRMWSu6tq5GfZD7onTf1SxEAdhrmCtQbQHm3",
  "key25": "2MydAbcRf7UfJ5w9wApXWQpNBEFimYx6MxaALQuVxj3wAojafyQ1FUbAkt2eRQ4sZU8LZPuv7EvQDruhRNwAqvkY",
  "key26": "2YA7TTG6bGpZ6ipyKQtZR5obFxwTtbhsP34K63uJuhcNP7NWLJymzzggEkR6WExZMz5wpBwTUERcCXavtAUJ6VHk",
  "key27": "4AtxfDmc4T5Fc5a291dLEmAvBH2mSHvrpZQh4Yy6gfiBjUAeYV8LSgRxKuokEY3dcvUbXP9XJqycJQ36GAw5V2cR",
  "key28": "2MsoHvCsN9H44BNJHFSQZir3ACCDeQpfed83cwxswHFSGEQUAxkrRM33M61WeV8CXfviWvmaMiYGkGNRz1Ej1Far",
  "key29": "HyAi8EidU16D3CiE9tuZRgFZ75BNyBaQdNt1z7HoB6u7rYPfahnTj7MMNVgaRE48QuHE1KKeM5PcmfrR4LK56bn",
  "key30": "2somxyMCVjLV5NwtdUvYegg795tYrQKjRTftVBj5rsqUBUYPc16TbbZVyGHN3f98xwnzTU2qauj74U3mp29unSxx",
  "key31": "6ysZa4PBWbZfyA1TUx6rUXULEQRwWxdyp6cyXd9hEX5tX6hCfRf57ADAAHLSxVfAaKpNnPdumKcHkofGonxAmfi",
  "key32": "tRSo4Sq8S3XS2XqLyMuWC4NCMzCA1o1dEA6SAo67wuwqKvCxiKqtCGKFAaRjgs6JTpmxPJCcncxTGdiqbHXLWFY",
  "key33": "3HHJ4TMpoGHKFZEvxdyQZhAbawfBFFS8RYpdahMUMBVyHbDPJVpzgk3XDKwGBoazs7hoTMNBvVyZC5mNJiLRmiHt"
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
