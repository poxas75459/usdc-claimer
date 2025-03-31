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
    "2X2Yfm75WeofheTDKKQShTkN7xGXe6EFFWahuvCZgFSCDC1EuHHx2kRuvZmY6yRVbwyVdDmpc8VJzWTFy7WXw9fv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53nMAGKxnDZc9PAsi7CX1dzQ1ZBxPH92xpttjv4Wvb2jKVy2A4BFrqp8MXufu14HKEmnQPPkfMFjvQi3yrj9tMTb",
  "key1": "41nPMGieRQxKd91mR1QVieTxJcJdoswxmbKnxddanKy5zQNzVkZKabCsL5T95DobcrD92P1y4m4dWp6UViRPvw5x",
  "key2": "5bPs7GjimX1wYUkvrHTn4s21vf5a4ux1XkE3wxX7v9tABpo5tXC3gzttoBxXhpyU61pF5B5HYuu4hJPVD3NKr3Sd",
  "key3": "5afx8Vzqo2DEdUrj7hNXTpNHpHq44EiG4Sbex4uzVkjp27LoLosNzW2Rnp5HxGA5PW6aH8dsRnbwbDEFyN26igMP",
  "key4": "4HpXJ5ojsDbnRrsxS6tFsNBDwtdqQpWxSZfKL5y2RzNyp1oL2shyEyeeEctGVgBSkDhrs2E9UBkfQFDrL56Hzyf8",
  "key5": "2PadXzD9Zd3N5yc8X7q8TbapaLAuEZ1aBtaJSDAKKxLXv48Bhfja8WrgDwLCCvKVXmuMmKgVn9dtTht5wjXpU7Zh",
  "key6": "4bWeWGA73VZ3U3fmCb2JtMLxtAZXaYhgzsEg9Go5YDJZduPHLeQpyiMnakkA2r9sEzJ6EV9EQJNWdkoA37Xi2a8S",
  "key7": "5cFCSrUb2DCkzmj3ivoiugniqNMjS3Wv3pBEyvqZ6BF9H22GKg8gLNtbMm3TJkgVXuBF2bthLN76MXQnJG5QyorF",
  "key8": "47iBu1tRY4F8hcDPDgJz43tYuc452dmwMokuDG34yjcQ5PgnMoTgM7iQ32wji6p1RPcSGXxbDCNKZiyHz5DYQm3j",
  "key9": "4HbWL5d8z56GTV7jFNcMNpqKV4hvXpRmD4aHoX5NirWV9yuRguGarZyCfjxqLapfWajBwq9fwiSSqBEcfBWJXyZv",
  "key10": "dJuRZS7C9KzH6WSeyxaGBLigfxi1xSTcv5KnEus6EdC6NfNQ889pgcdiBo87cB14MAx9oLsdzWAjNFNMeUNtCSU",
  "key11": "4fvH5hBdtaGSBKSNp51qEZ1aPYEisMZZ7eEqR7TefTM1hjzBzoQajAoztZebjd7xguxFvPsRVVSUv9qwVF8oMByF",
  "key12": "41GeP5w9PNfverc4vZHgzCMQAF2FkUZQcPvkceKz1ePitY2Acdp9bcbnHcXBiwZRW9oQitAqEL3mmeQtvboTGFJG",
  "key13": "62H5ASPMW1BqSMunnL79k3tZEzjEKbRMkTQtZTr3LTYJ7MPd6Rmg6mx4VRVH4NLkkNVVpQi5V1pAfEnNA5VrK26p",
  "key14": "4jS3MjJ2RTstCtEWTk9xvW7yo9ifqU3YYz8K4LJRY4D2eRyJ2r9H2teYmJrpVcxjXsdZFqTHF9qpvNh22RbSJcX7",
  "key15": "5dBbh1aPzkEwCoJCQkn28x9JQZ65ozYThQraDVh9Aj9t1tWurK4gjpxkE2EaUaHYJuHLKvf8cT5iP7w7pJ6Q2ADE",
  "key16": "9JuFZTvYF88k79TGj5EE5L6sbMxT8z1pPQEN1N2fjnL4XQKgJV3sdTSRWQrwVgbnuV3KuAGdM3y8D8puwJ8ApJw",
  "key17": "2HjU3PV4FYd8aEsxNbkd6QU2apkSrXvTAr3stVruqfrBSwpcZSPDiMKb4CiEULfXuH1VbK5g1ws9BcgMu5MFeEjV",
  "key18": "5YAyQEW4dBvyCymAW3GjZatv2pmf54taChLMF2WDauWmhvM5Tvm18VkMAUa34bmq2Ds57YZyugCa2hMZibd6qomt",
  "key19": "5LpFSEQaUDPF5P3SS8b9WxojLttcZLsbdaG84zkwag1PvXtgptcUGHz4He8d4RCbiP7bUCVqWiPrP5KqiBE7LZVy",
  "key20": "dQ6q71iXDVNs5B8qVqXuyv7ghhoeDbcD8XBgRJRWnqLPFxcCYn6ngrk1Kb3ykzTfQfcKarqFYbJegt9v2uXU2cU",
  "key21": "3NzSsqKC889YoGfPLdYmZa44qBnrehp3J8tirxuEhJefR1rKZtp97oYttfRBiVJCLR3jKiDR7HLTAbd9Xd4ZWFxg",
  "key22": "5B3RxxGWsqnPRP86q94CuqSHEcwUCUgrjNqdes5FAHH7LCzcU3Vq8VKhUCWb52uLMm1gFg4FbQ99d9KyaotraRuJ",
  "key23": "5rs7ZjkVk5EcgTNJWszMJERGuQVDh8SHF25vZUwrfRE7xR4xQ7XLZpggNcDWRvn1wpjJVknqv3cbvQ77g4HoFXG9",
  "key24": "DnxPPpab9tPeBe2EPMFg4LHvn5uZf3v2Y7VGocyovCFZtCh38kvssnxp5NYabfDBaXLCM4FgcAzvYY57hPwo2pp",
  "key25": "4r78smwT94wPHnewYoh1caZRGUUqRaYo67MDLhM4U4MPqgWfaTvDKHkYU7C4QuDokR3Je1cvAqJgEdZMFa9jTNHE",
  "key26": "hyJcgW8eszzN4BACBi4y4oSfGJdx9rqKYWgxjYVpWtwsDDwVMG879Zp47DNvFzMFrZC51x8GVmmZCuj6uVHDY5o",
  "key27": "4jxBTLd5yWjgi2bKRzcLqfeyDTRCusVSmQwn7BeGnm2p2bdRG42PD3Msuix3W1bU8XVDP2NzAZiFFiWGyjcsx97h",
  "key28": "3PvNZAREuwri2GYBkvjA2GF3Er1YjEw2swaNN7AGyN68QRmyeNUxYyivS3BkZ4Zaf4PKxnsms9rEYsxJpkqxfNQX",
  "key29": "3RULVxqdShH8XkFJ36QdrdKM28QxSN1oXTHnwZMTDBz7xHp1vsv97fvtLKGmrPE9YtpKdrTzQGC9waAmmN5o9FgT",
  "key30": "7PR9EzpVpZAB1UH6P6Thwcasb7TPkuKFb5Dy4x8ktvSVb8r9fV9xjbqpDYu1QBYYFR4XFY6MLg5BcRJxeZx2FSQ",
  "key31": "rdDbB3ao1ihhrqJ3MCa2zVG7AzbjAfQVC5suBvMDL9CkUzaE4R3PLLqozez86amddSvEiUdVFDTTBXRaqb1kfAE",
  "key32": "3XRAzKWgFtgQx1hSTopsCx4v15maTvrPzg1yqcVsDuPgqjxn1ZJsPHVZvBMzCaYUTJ7RJ5r22Av17E49hNPCkXcQ"
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
