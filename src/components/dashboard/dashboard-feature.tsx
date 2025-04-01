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
    "2BZgaiNvNwYaezeqvMVg491aL4B4s3sUvUAjJj7P6M3gHqdQRJ7azBqELYikoTEc3i73HsQhiwq5UxNSDvH1TP63"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E3sMZi6v2QAtqpTaki1E7NtQdHSejv3fM9CFrwo4ibExGsERUXE4dCfud6amP4gfxJTFWMe2mpaEfB6SNS6ZMxf",
  "key1": "4NggHB1KKm4EXCeTRMVWoYrUGHNrKd8MYxiFQPBtuzyshnRbSM9gMhSA4B1dMVsH7T1DBCNVQBecLt3PdjCTMV6C",
  "key2": "5YGxy1nRw9bT1qi1TAhoKuHBRsA1a3pjMuNLqLtxxkt1jfFFx3HPRoNHLh8MXM2Lv3rhoCguPVhTL2YfjxkXk2Vi",
  "key3": "2BUtMXDdQGpq8cDG37tmUL9ntWL4EYii1JsW3tCk58caXJDXUJZKsJnHqzDpteHUR4iuonU1R3KVXzwJNC26Umha",
  "key4": "2kzce6ZPHtdRRBeRUwfF4TMrUzj2bHjx639uJG2FMu7dQMmtZxvheASFBadkGKbdpVH6a595vwocu5rApiGcpQJo",
  "key5": "BNCQk2RD95g8CA5766ftMWBjBRr5QFzK3YWBZZSZ2x8jykgGx9hMZtqRxBtWBzxiSwU53SEvJM3dRgeoBCEB364",
  "key6": "5yeVnym1AgkkkZqLpewtpqEwV8a5aA53Fno7TJkqVU7i8TUcS3PmNqo2VJRcSjur2uHPJDRvD9Ukh1Wm52aNTBLF",
  "key7": "3ETcHJgsNPSVsDM8PgkmdiJt188rS5UUEJYoDuwxKPgARG3KQdUrfetCcnk2VX5ujADC5Csy3B7v4ECT3myBKNv1",
  "key8": "2tKsmiT2XQbhUbPDp1ZdgUFsbh7Yi5GmHxNzLu1cnxGu6gwVoc9ohc7xZ4X91pmAVv7A2CuxB8Y1xF9gWhhUMJ5F",
  "key9": "3ZbekQiqZFWqysdnwrMdmPv8YUENHpzYcE65Ka5hgqjLVjpzSS3TsCMisysK6GzXdrUAmoY3P73wdAYZxtHTGtW1",
  "key10": "3odwWf1UyZWrrte8w23L99P3ossR6z8kiJgkzmBfjx6Nij982JP4pedoY6y5ZFSqQPz468Q3UuVgSzPkYBxU7iF8",
  "key11": "3QWaHRskpZLN7rKcG9S3rZxmeYd71Yiyu6cVgec7fee1fzXH5FMz3Cw3aCvHkuCBS9tfNwLqS8qDnqFqAJvaT7N6",
  "key12": "3ao7HertabHmuVSJWcABN6djh43K4icybQL2J8nfTH4yXJLkeW8dHhfP1yvgw1erzQc3VRPUa3Hxvts8QbSktyc9",
  "key13": "3uC6kArbknttyi4g2nMtjuaNkJynHwkKqnMHx9Zm8WeeixtRJaW4vxG5r6CaXT2fUWiezsPa3eEeYNGXLHGHtsqz",
  "key14": "2ozGJsVLLjQHutVAdMe9P4XNFX4wh6CAGnyzLBoW7L2wes8aaP7zUqi79PXsAxkSUHwbc8XJvC1KDCg27EAbQ12U",
  "key15": "3DZcSoL5rVKRGfmK2cbgz6bKAGueucfn4hjoZhicHFQ61B3ysKZhAY9QGriTKbMuS8nA2X8GhUnhYETMXphgEwmM",
  "key16": "3hXgqxGfh7f7WgSCAKDNASf7Lri3kvJVZVGSeo1fjsf43ZWyHeZqTbLxtkU4cMVji24GagQcZvxfec97A5eaMC7H",
  "key17": "5SbVq3sHknbeZe7R9B7FMKvbmUqNoDsdNiVCow3Me1AAq71b6gUjQZBXefzcL3z3eE7VVoUhEAX9qhAMYfSDJFdz",
  "key18": "3MpgLFZSTWUtfSHZeARytaGHYGfiCs68w1WQWpusDWdiVqyQrnudHWF8XrzZZopsWk6d1chpDRYHxdc6moKCCD5i",
  "key19": "tdjAEzN6MDtqxBQYc6XB7KtPLVLG98X3TRZiqjHagtGsP3Zmuo3SwCRtfbFTGdmdHpapvMdEiRRKC8rnb6DuGui",
  "key20": "2qK22Lx8HK6CXibDzzzoHCPStpZv6b1XQAPjmFBbvdip27HgxnzPkwsNuxPaeCsuFGX47Wjg1eh3Szvy19JhUVYs",
  "key21": "3Yvdo1Ux2MEYUB3rWhfPd5jTwE5d6mYLEd8W9GGqaWdspM84ghpzqjGND4kBshkH7qVGt1RTesjdRw8RXdcqRCnV",
  "key22": "4yVUfHm8PdZBGn9iXp7nZw3fwxnGvdjsnFojZvVzf7La3iwvHn4v1Yum3TdvdskzJFMCnnxTdv1zvTquwW6Czqip",
  "key23": "2mgDqzNmmTLN44yDbPBgiZ5Ha1CCGdG91DARM5nSdtZvW9h7HCGmcMEYhG8WBS8VHFPWdsgbuyH4ZT1wxFLdVLBi",
  "key24": "5iCNB5j2vdEmaaaGJwXbFkU7EsGa68fdD4nDzZ5tXP7w5jvCUDCqHqd8Q9egGnetkefx8npukAdUeKF7s7dzy4r8",
  "key25": "4SQhfPkPk82pz5E7tjrZ3TRGoSEvD2Ckrm2nyFC6tbMvopDdscU2Rfn4XNCpNzYpym8Zrga33yfUU4paDaRZbnyZ",
  "key26": "4fCxaBE4TyyDTVeSjfamLsmFzGsEdPRWsjcvC8zv2pKGkhuoM2fndJeKM1kAXKnRzNC7tbvWtH8UEqukdj36APyW",
  "key27": "46vWZNu46DqMfounk52XEUY7ag7Sr2n5ifeucvVJjbpvZN89SVXeBkwaQxx4bb7C7GivSRSoEfuR5aJC1UqeYZ5q",
  "key28": "349SN1xs2EEivJknd4PjUd2n6u7ct8CBiFFxeXDvtT8ULVypVqo6ncX5Sq5UFmuhcLTEuPi72dVUW9X1MnAWZnU9",
  "key29": "tk4cwLSBACnN6KQoQsrNGUmahL9A3bTHEEC6HS8MNcSdLQjdoDDjU3PUPKP5UJQBE3E4MzbciyFHMcUu2XMEufs",
  "key30": "66cvNDNhynWbHBVcNzFTULzg41pHqxjfEafYEnNteByV8SmUux48DJXnnP8uFz8uVZVeQZazGV6uuWVHkwwjvyXb"
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
