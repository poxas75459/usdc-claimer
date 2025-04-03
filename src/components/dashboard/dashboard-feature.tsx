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
    "38xDNiaJapdsb7vYNGB9GfycAJ2BJS2Vzf5Sy5F42SdRJSMXumeRiKTpARHXEpeBrYKmS8zRur68uEGAXJ1sGuc5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jUsjuDac8Z5ZWQcUzyQiTG4E5nYjo7ypGViacFfSQ5k2bAHmp8mNcycELfabSC4J5e6VdrKkXi8RSkxg12zSGP2",
  "key1": "5Up6xrAz6mbNQq8b18mWEyctAgw6znVYrYYgray6ZjQ1qPg9Z6tPu8qa7xyULkdYkXU9ANrLwdiyZkJYPopBebqK",
  "key2": "2ESDZ3LgKurak18aEgHKmwGMNu1N2Gv3N6bwES22MgWPY6zCL8dDgdzZpXUVTEC5Ew7AN455Vr3pHVGSB9JBCvvW",
  "key3": "4zSrjAsbnNoUEcdmk4RHm9JzSWU2biGJmaLbjH5zf3ErR32NS8NFnWKh9kFSt4RNUvgyH9p8GEb4gKb5iDGN7kEp",
  "key4": "2Hu2B4WEYDCAK5aEPMCQopU89DBybjwFZhxaa4UTbu7YjMsLgAJntGhdqqLfAEXtr4eHC8jyFd6gWMGCGsAqSGFi",
  "key5": "3aGvWcTNHVzFz4ib5ffHEUJ7j73r8PVakCJYzQSGehCZeH7vg1zTgDZXk1UbEsPbLbwZkywnN8qTfaxvqbi7diqk",
  "key6": "2k1Dj2SmFfxX7Y5ZestPRjx2Bz6w1X4cm812ks4zTATBv86ZSJmHx7RHvkMnT1KCnES9oNhM1sU9fUagyiFPQ61C",
  "key7": "23kDyFPaG43yvahJ63rAJQgdVLYPQSPmRhHCqRy1GRsFxFDgmda7MFui18VJmRfkzn8Ls7VJRKsaHCCUUCjTs4Hs",
  "key8": "3HQ7AZZ3ArP8s92UDEJqq8p7RAS4XqzVwQ6uVtJRCUbBQNWTfca9vCrBbS4CBbaT9Vdf2WH6JEMJLr9fxTeQ6R4P",
  "key9": "4D37L8bJLPTTTJy8jpCqgcbrzr26bgPbbdhPXJmGKLCMdrwya5AaxgC6QbiyBFMKyfQRWYPG9wnBYZq3xTbfcHyy",
  "key10": "47ArU8MQDFZdbMZpWCz8vuinJDjoxdCBMJkvP7TFyyBygYxpmV4PftbG59P5QQ149eKdaMq1eXMn9ncr1R5PL7dW",
  "key11": "4vne1Vvpr74L4PBPcavBhQun8hKj2W8VTKQyH4VCgkVopZ21ya3zg8UqeCwJsdYJGvhuT4Lgnh5brDgqvWivA2mL",
  "key12": "67G3KMxtsm9h6UzA4a9nZXjznfLd2W6EB2X9EkVzvNug26b6KjEjRXhRNtULk9oAqpTEL5H7ubAKDLmqyPgrne6o",
  "key13": "2GTVhZeNiYsHeHKBdhaVGmQAgeC9z8KsfjauQ9LAjE31zXPYtp4rRuugQLpMBcEWAGJCracGVygSk6iuXSof34os",
  "key14": "ZvQQbxUQf7dc5ehvcu59XBMJYb5hHGFpGJ6hJ2NzRo6H4JFtk2x5HJSHbFSRtfSyV9niLkKN8v5vxBRkQ2hmSE4",
  "key15": "5AupkR2E6EBnUv9SYRPvSgrfqvpfotgfBojHPydnJdrp1LeyJ4sMEbw8GLLjZrwsCiMyy6jTcn4MZXs4C6692DT9",
  "key16": "4GxxVtRofEek7bCTu2QCoihqyVPPiTUshQycvCAWqB3PDGQg23sAhUoJjCHGSoM9jvdNX3NwtgWBnuz6NpK8CJBX",
  "key17": "BN1Fxuxv3SSLpYZUEUM9oFBopiV1HBLwvh2Kqv9Z8Zbu82NNms5yFnMrK8Z2tPdnCcEWdD111dPcEdXXEgW2guY",
  "key18": "4SRSD5nskHKMQeDpttHr3954wSYHPXVcd8Bx5AFUoWsojoNp19Kv6EMVhG4MHbARDRciL7Lv3Q9ing3uLP3ouHx2",
  "key19": "2cBuGjSAVHk7NqeWeZ4LQYtPJV8nUKNMBQHASv596EfkWMG3tPyHhWvYpgaNdUPdoAibNhFC4W4BMxPDfU6gmCtw",
  "key20": "22vs1jFUKD8X2cV95gZKEZ1f5EUbUnzKESxQnQ6t5hwj64cCmH3gjXSxy5iDAVekeb43NauDEvMQFfLNkSPVs7mm",
  "key21": "5mVUiGSLjoNgBePxCF6KQWMrJ7Hz6fhXz8gtyD3Qna5TUdg1aT78TbgRwpmwbEzJtvJGz54X68hEiNyMLU5RYPre",
  "key22": "32zXnoj9BK9hR72TQutixCXnxrkUkd8raVFRFVutHK86uyF7ESzwEdoNZKpfR67qkB5hhFHhbopP4RNZKfmzMa7y",
  "key23": "2rRQwE8rS8kpFUboTewfVCmwGVDtVoqFtyECcoLV9i6koW7LnYFJP3xqaBYmFUFR74iyFtGDa7uLs91bTa8o16Fw",
  "key24": "3d1tryiwWqinrCAqL8Aue9FMZruVrshNFSrNT9YNQRvQqnxSXbT5VnzM2x4KGEz4fGyRUzRshBLNCTSshfdrJRbf",
  "key25": "5qmaL6LqBNTWJAS7ugvUbrXZSZtJy5N8z6QtfMkv9Dp4mdAZZeGsVMkUVStH5rPhFboUSGZBAjqcVyDPW7Eqsz41",
  "key26": "5iqWX7g1pmanN5kCwQCLkKNdAUWAngtLooQaejUVMvL61bZ7qruYqK9YSv3gF8EFtwm4pFYjA8qm4HdvJ3vuGCDT",
  "key27": "5sGQxGsZdaWTsmFs61TNUjECs2EgpRAEWqH74gQoTnnxSyU8fhXGAGw1x9ppN7mmMJv1XiH59sXgBn4fJU2MmJQB",
  "key28": "3EBEG38EACDv2kDSk4o3aK382rpHMmchNxyynoW6VKBXotp9NdstdSk7Wu9wo9X28xxdRFHpsFLTyyApnbPTphDW",
  "key29": "FqBXVDD4PYMvvLn7zcqrqwtM2biq6jzw7nqRCK1KqLcvF2TvAWCC4GhqKs7GjuqgmYPjWWyeJVJjZytpxn2q3s1",
  "key30": "3oZes8fwvTa2y3P9bnCPudLdXB9YH31tti4RvtJQuuBvX9rSyswY2nhSNz9e1pGf5frGZEVLBQ4iSP4MC43xS5yy",
  "key31": "5vC5AKFxtvscZP3hsJTNYYj6N5oRKp7UwQZEbdMjXUduJQoJTC853hpQGRm9sJGNBnKF1gQZTZa1TfP8HyxynDTD",
  "key32": "2fUviZSBTUVLzWjKSadouGCzB874pq2Tmb3J96HZorcnadZEw1wsWC6QgVAcsgeCeT8bgbKATHyoAUkfCkeagSEw",
  "key33": "2azCEaHiegLisVZ5UZbtc5r65CpZrcyxJcrMDWepijAS716c1RVEBrgrvMsmQYzTL6jc89o3Q33kNkcDhT91AgHf",
  "key34": "3jEcHV4QbcBR1zMJiVhoPVjX7VAupBTcunzZs7KccZz4tXCM3RfqfvHemSfLb4KZmQ1cZs3Ugf8KesXd2CqX9LVL",
  "key35": "2S2Du8j8TPdBfpzrrBz7hFf4tTaBEQJ1GhvcYpDGgjnDnEcXQUU5r4pRQxw8uzzAiADk6SpWDT4A9wXfKd9V71ra",
  "key36": "NvPEGjpVFfyk5YmfbtZuMhQuSCD4KBo2QbAcRV1mEioBwue23emsgTGWnWrf9r5nnrcBiqUGEv26nmLD6H6wDKb",
  "key37": "YfgeoR6ifqvLAFGRqg5uFYnx5TfGos1i5qsohWcdKzSnN6aTJz88hHsZk3QgqLMPAxjAMvpJBDREeqXx598fsvP",
  "key38": "2BVdqneuPFbLSX3wdbNijZVyXze6Y94pCHQWTkFdTtXXKKxCE7qYhPfu9A2rmA3gnyBmz8AE4tKhJQ48d8vxHQrR"
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
