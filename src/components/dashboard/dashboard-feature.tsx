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
    "5sVvARB1bBk1magibaiMrkFe2NsGAQuXzuARD8AK6xJ8M7rnfySkmdnu5C96vtQ7LJTfXWtKNwyUJ5b7ySDkfwre"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z5mu9eisLkccdVRQhkaFyqZahMLwjWiZt139hk2LeArpnjpS48oUAJ1zW6izM8qRkDaXkggWUApcDkHLud6Tyei",
  "key1": "3Jdin3SdpjqdkPHDPVWDHEHZy3LLDczKmuc2C4rQ4g4yhxsXrT2eCNCoGg1St2KZrGMDwTrdPSKn6vQUrYuSQKXs",
  "key2": "3uZgZ3WzrEKg3aSEZup2AXbsqZakHc94vTvXnCLLNjyXtdMPM1nJV9hjgeqttU6rK34Nxi218KpTnC2yrTbwrzjz",
  "key3": "5mByMgzftjCv98RKxqduyTQ9mEWXUkxhcyt2sK66xf7M61njaXZk8bumPCkSV6GsrubrGQDKvx1YnjUneFd5b4QH",
  "key4": "pjEW2y6HS4BWcTs4BLc3PYyyWG3i11hBwptkXKmbeCHeetQyVYkCrdjQDUAf1Esr8v3Hg3UFh1c4wgpFXV4MCZX",
  "key5": "5ukD8D4Ts7oABWxiY5hSiY8ccMghBCtcxHXdDiamWpyfd2XjMifYCnHKcyBJ6v3846aYfDe1tPquDymjyJbUDw7v",
  "key6": "2KQ2bL2UkZik4VL1iSCwMskXJ3f3pUCnnmXmcmhtaTUJSVZ4aLgN2imqaiDk5vh4uPytAJTSVtZBhu7enABZQ2yx",
  "key7": "5ZB2AXKoAdU1hSmrJctWNfY5Df16HxWXbPbLMy2mzrD3AfjvfwGo9deU7esBd68qspnpj73TPJ7JNRmLmTPEhWR6",
  "key8": "uArZZuKRwdqmdePUKDqQN2SXpNiAKmPm7XAQCc9A1vJzRhxiZgnHaCGReSmGnrpKZR7Rk5ChET2QkGriPB79Hfx",
  "key9": "57Z2KbABy5scbfwjMrPbENrXGwXUHSedAAK9RMmRstSgtgnRjP1hy9Ape1ScvrDq9TjSkXT5kR7ZcMFMYDcnpdHd",
  "key10": "2euxJbwpJxjhFXS1qfUE16rCg3SKQQPGv8Thb7PqyABT7fdxAvkvbUgm4MJ9rQMjdGzWUiuuT9JLJSmrjXBojWnP",
  "key11": "eEYAqfMD1G7bJ1k7CLGcsuhc6eYVvff1XC7H9nFhS1ApKkYdpT11vB4RGjDBbFU1LBoy6Mb73x2goe3s8H1vL2p",
  "key12": "4hBvBRje9yJ8GjCvZP2JX3dKMLgMdc2XWcTh5mXHcsWoFJAGoFVYnihGRxHbWijr5JMz3G3yHP1Mr4MB6Qxz2HJd",
  "key13": "5psPyckRfB6WkaBJ24tXew8spUQprBUu48VWsFoLnBUGqyJz9cY46kVeNpQdu39D8j8SLez4BkrRGXqTUcBD97Y4",
  "key14": "CiUgEGJSor616ZLy2ghkZHjhC3p118dqi8PYLYj7UZB2SD2SiGZXh3HAqy1FFBk4g83T8yiVk2PsG1wuXoTSnND",
  "key15": "5pRpJChaxznWKzdpUhke2QkvQdkeNMcN7GtQ3s6uMY4zbdSStmbiimv6iZk1bvi1BBs1CbH6Ptd8X23kSA7Y9feM",
  "key16": "fdD9AQ4B2thSpeDAdFqVfGaEWwe6dwuj4kc6VrJ9yRCTj4yrTAiTQj9hpNMKqVV5LydxEKwpsryFg5Q3ZPom78o",
  "key17": "D7oH9Sj48WGFoNywhGrvQu31NqUcFNibwbckcgPThmPR4wKxd2WJUu7HDVpqmQPh6DrZkDQjeTP2ZUaiUWW8RA5",
  "key18": "65LN7WgEm8BRdMWpETDSFPsGZfxmyvjvtEUKoosUR5G85vMwksLLRnke4ue1W97kMQrdmxVCpef8HQMHQm191w13",
  "key19": "4FY9VLEdowawRxJVou2QaoQ2fh46f2TGCky9MKFRaRWBrRkU9n1ryRjnC6upGFYoVxnv7yFaLQ8UmjKxEvLaRmzu",
  "key20": "xHn3Vf4eEbD5kR7Gq1QrzYxRgHkmWXBvi9ZQ9iUTsd7n3DnFngEmZ1h5wjQmdUL8Jy4SAQ8s9b7uHGQHxpAQuFk",
  "key21": "2EuVh8ovSo7s7F89Ndisrp2ZGBC2rd6HSPjcVg9Ki6PGe5iYk1pF1CKKQzHNigCWh9kWDRJ5gMeC8X1cX9fFWrrG",
  "key22": "3AVU2EAB3136rLiWuKVaBbgZhXa5LaAU1zWbRSqUgDCfkYDdhC7TAH8DfbAvg9KQZQEy6GMcY3ih282F6MFaEjB5",
  "key23": "H2unKm5aLSr2WwBF99pAFfWDq3vhYT8KVF9kK4iX8x53q3khhZoSXxJsuubgE1CEKhbyMLCHRh5wPqD52gmntyo",
  "key24": "28GX8VWEkBwtvut8q4ivtLHxaVR5uovnPj2UMfv2SakTEqFp4jSc6sHHdgxJggetqBvimsufAvGh9dWRTbcaEHAx",
  "key25": "4m6ufQYH15QTR1dqSLX7F5G5tJqFi1yDPg5vfggMv5s2LFV13G2zGNYCHd11VMktfQWkXWyCxr696dEEsdqshFi2"
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
