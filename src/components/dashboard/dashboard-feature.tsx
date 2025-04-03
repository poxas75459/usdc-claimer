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
    "56xBXsB6kRmJBs8fJGh81HR8HtmpDijUL7MjhyB73obEYkaLP1ZrX6iRoVTBuYmEK6M5kT2XSusN4rbB7LDxwfaZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hz4BZKMQRJrwmedrMQzvkwa9ZFEobMBvxbvARXj77EiC6Q9oHR5fEoENBH9Q4Bz8jNoju6vqnkYDUjELdXzn7Kg",
  "key1": "4DgP2v9MXTzoXGjhttpEmSHAQByv6uEAURYhxd9i4ycyQpFePgaNhnVK6yHPQCCfwutGih3VmSKPDBjF9Cp6EU8m",
  "key2": "31Y8bdHtPEdFjZhF4igWveLyWhL2cma1kj13GtGYBztgc8oMywptK6pmvv3f3qJZvbS874Q91nzU6T7S6QUTz6d7",
  "key3": "5pakrvt7En9u3QjpFzRAUAbEGHVBffPg839qg2GGKqAjXBG4JwbnbfmxAoychhKf9UGFzF4sPBCibaiRa2RbEKri",
  "key4": "2znjyFK43vh1TWY1QeuDazo5Y4HBRinejTg27oohBNyDHtAcfGtk2EZHCJ7JLB9iBR23TtK8KFhJqCL6fYqcq7mZ",
  "key5": "64fMUoL3CFACndU6DMNbMoMg9uSKxGBLRqH9mGR4NcfehGcY7SZJiGMtAhAKi1NJSU9WbbU8AAamNGQKfT45UsFV",
  "key6": "39fJLJJi2UGgovN3xenx65ff1YZGjMPwn1ymsqz7afMUQsZhKZA9Emvf5LKFVzmgU66qWg7FvvXWFmfMUoNF5tVD",
  "key7": "5rXebKt2BxhPQkWNzVyHWpFTuWcMjKsba1zpYeHKcyxkZwtWAXQmYmxgh7crV3EwZadEGiKARBLKm3dQnQUtanZA",
  "key8": "4DaMYngKWF6KDj2Lh36g8qV6w9pLvqtv2Sn91aCT7KWDMNnrHwyhKFiCMZ2aVaqmufudFaDohFLubYmC6TiPG6fZ",
  "key9": "3NQGjc7anMGNjq9oAALWt2mbRWuehRiZuJfpcpxrCe86gnZmJmHPFTasU6r4ZaxE3PKWnAutYpVbVRDqytqu3ikS",
  "key10": "3nbFBMHgRAt6S9RZq3JdXWhSwe1LbnLR6p6cDtFN3fnWCXEGNk4Eh2GCiPxQaB5Ef4aeKan6duiVnsF4aHx4QhwL",
  "key11": "3EKWRBpp3thhRZR1VApADW9dqWHVSaCrw9eRhQvP46b9yChM1tHiqQbSXkRn7g3LkEXD9Pa6UKs2kg2TKnukVwpo",
  "key12": "55Bu3i3m4UL5Hb7Fe6hMVw1Ef44V8aRCKfMD5CHiK3Q4vr2zcZDPDgmJcBddCPMtot716V34KmEzioorZ6zNf9M2",
  "key13": "dVzgrWLn6ujpLHqsEXsVGLK52RkugoWZVKBM8tewu3Coa6LsmkfYu3YKFxQ7oyG3r22DurfX1rfdg9i51i1swxN",
  "key14": "5VHWQVJFDEx42dEPfV7Dv6fm8z1ppVC1Xc4AGcC8wTZXN2jste28YHce3itDV3vA3eRowErYg9fJZEMNKA2A6cp6",
  "key15": "2cvKJpoPSP8J2Xp5TFNft6UGms1PLwpGavGdpAyvmGRmsXP8wnqweGwUeTsw1vFu6iNZ2Ac4ZDnhLPavrDJBz4Lt",
  "key16": "2eggzH1cif9xXqg7CAc29LRkeke1272vvU7bfnnLTW5ED4S41gZd4eku142mu1FKhApnCeL1SnbLCauhoxFEe9Am",
  "key17": "4HEgDrYCEepg9pdXY32opjY84tbndGZ2c6eA4ySKGj7RXKiaqVycWNmFg8T4JAcjeEDPhxYWwxcSn4pP94xUH9cV",
  "key18": "2iMLcWDcmRQQrXafdS8zq3uNhLFVx6H1Pn9pMYHTfRuTk3C68KegR45U97apUQNe4GKbunc8gwLd5tRFeu1NetSe",
  "key19": "2r4YQrJr7EtU7wSh65gzp3Kzx7HjuuA8gV9YL9N9uQg7K2jPYMPcyCiyRwoSDRdyNZTumog44mMA54oPY8GUqKf2",
  "key20": "3jwvCaS93xx819UZa6jVD3FjFpX4PHADggdy2tUytnwu8xMdS9jfiJfqKfQV4CFCGjRBcTdpgs1UYAqTqwUSVb94",
  "key21": "3t6N3Wt6QRatprGckrcKnWF2U7ikef3hRp8iCGDUPkQpm2cVejrJNU7rVkGgLPjBivg9nhGTGCAvW7D5ptjcHLQF",
  "key22": "1VkuLMqi67o6wxr8gdxdCys4e3s68hX1k2W8TRCNM9RdeydXm82tAx4JaUm2jy5HK4eCNLBdS8Sp2XUXTwgfjLY",
  "key23": "4pWddvKu66XgkF29wZKEG35ZWCayfzcXCsRiVhQLgrZ4fHJ5RG8cS2Rz1J4R1pEGd9CWgQ9ncsZ9pgRQh2iEek4d",
  "key24": "5meaiXukcBQkqrMaHCtpKLT89YmdiDmyNcg3WDMKERsJSvyHUujfkXnV2NscTMNi4pLhfjXeepjkAHFSyW4yTBBg"
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
