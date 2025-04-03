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
    "65UDEBQTnj4wcJtN2u8rgQAccZhKvgFHYN3FRqQtaVUCEX3nGD6zGTybWJMd2uC73UPDCgASkWhCHztNkqZLZxUg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pVALEuSPPfk5YLZzoH4eS19XH4ugHYm38tXbirVLKNPAEh6h19NGeR1n7VDsLcEHnx6wyQDgSAyAc6jeM3paQun",
  "key1": "3rWYS36iQW9Lhk3FkhebKEU7iyzuZJEHKSMR89S1Ju19eY2kfdfSH6HZSGRxYFGfQCyhWGmJa5YNDWceSacgwd2X",
  "key2": "2ZaMg86XfJCau75kSvTbpF7PG7UPRqaA7FKYyDiMj28Pi38fatzUzVczUSik1w3PZFQH2bSooeqqAD8NJnhNwAc5",
  "key3": "boaXwduv5Fv4YWgBQ9Ls6CCdF5L3tAebYGcRznp5WBwH7aEHi94HmYBnz6VutiaaceYh18QWtvUBMD9jo5GSJTy",
  "key4": "5cz9WcbhkvpNXJfCaBSbSFavppNDXnkG5xxwkjvvE79fiMLpH5fc1psEG17EELmXkhWTFeeRC2CSLNNVLqzYzygv",
  "key5": "5XziajGqfphEZCBVw1GKShGZugrXHVpatDB57oLmYDygnWG1SYRg2TuKsRU5zChKFzJFn6gRUYwMRUVZYY4UsAG5",
  "key6": "3QDtCmVQUP9wFtS7Wig7nyxBmrnfXumN8nLCggQT5rPm3vCXTNJbZkhTxrMQMeUxSmindi1GZZLEePWZKn3kRuid",
  "key7": "3tghau6nMB8YLor4oab2F1fLEvC8YKyjELgx9NVtz3ysF1gneWh6zKXC3vu8EzbFhZf8Apwg4og3WnwqpCDnqu2b",
  "key8": "5uYMPJBVusnkoP3EwysiWtHLwx7gEWfs7dLTG8D6X93jcLTbPA1onZEDshvwVF22Q1MdTe1bXGH6BLsfju6TcB9n",
  "key9": "pzYmDrHnWt1uXZFuPTHNKgSe6oFobvQTg2m5mkQJnmSPcDLEJq9qfE7mF3xHh4gHUF4gFGcTFHK3DebxMkyim1G",
  "key10": "c9Qs66ALGJuJCDiF3q4hRvw5JUb7phFoTKd6AX2haCUo3BHHsZBAriA1EWB7VPkwiooyazVkA8vvPLD6aFXb8kr",
  "key11": "4JXH9zQzkzxZcvL6seQN6QpurpghxSRrAjtJeZ8YnPfKqQjdMTdLc8pqEUQMCAVAVBdM1b94LDA3avHbjhzGG2Zv",
  "key12": "23K7XvMK1bSy4JMHrH2GyDMQzWNRwm5K8JDmk7QUNffVZAQMmUXAPTFMwtULa62bi2YXEQz6ndevAVhS2MMJKEuS",
  "key13": "4juGWLdqhAuJftNnzWC5LfLLjWP1Sik4v5YbBjyJeqWxSr13KPGuUttWDSGFhrB4YTMrCQYzJF5QivcHQZuNUqYo",
  "key14": "3E49ESV9Gv5unKwYFZPPcJSocsR9fzJKj6b5oJnMCGGBtwqdNuHX5DmekaZ417XMsN7KF9pDBv4V8Pz6f2akw5v9",
  "key15": "4QSmfMXvWipArr1Xd7MXBf4hUKEuuceFUhKMXYZhvKfyHm9LgEVym5sQY6bicaYuaQw78Ry6R65VnY3g946Q42LU",
  "key16": "QnNzXTRCggcVvjDHKLdeWcKZ9Dm5efvEhA9Ee5u6wc3d5UWFrZ5HnAUPmNBbhTbJ8hSfaeMTE7CdLpQ7QYisXpm",
  "key17": "2LxM857Ghh2mRXsgFm7BRQtWiuYbYD5wFH3Dnd72TJ7P3zyfkefKnFbwx4fmTyyhhQ2RPeY1n5d5Gz4tfxcZGZg",
  "key18": "2JHpBKmL8m7z6Z1BDhLcFPfCKs8pqGzzgtT4ji2vsQfuHiZDSQBWqCqqx5XmPXS3jzuj7p5a3Xrh4x7Nh98bMqoS",
  "key19": "3JX68w3U8AqSFm7dBaqdYDcu2s3RVzCFzMjT47Bck25NLP6V4KWNaZTnog3Gu8VmmRkJCV1zPsQGXx7mXW6MPq4e",
  "key20": "34tfaxbaCDcsdHHykho7sQgDpG4x6cPrafHMzbnHcKD1UuDnUTWBgiWvAH1WWPqtmfwdRGxpqVC6jumRAFFfUbq7",
  "key21": "5XtWpm2mD4aiRiMTewQ9NghPq7rkipPXQ7KZQ31GVY15x18KLC4bekCXtFFbtRpXAuYtVShnAXbsbGtqNdSJNKps",
  "key22": "9utKauNBCfE415oioLoVdRm79ys2FTdvrzAqRZ2VgxowdL4sH9w8XpFSYgaRBd3FrSB9kRPcpnTYmMPkS9yBcv9",
  "key23": "3vBWnU12grTt1Jpf76CcGyGPmSF8z65TUrnqGZvkFVhGBVP9Kk4aNqeKYqjD6EvnZ39HZwSLFoG6ppCj57dGEM6H",
  "key24": "3Uj7ZxMfzwcQRJTLZgS7aQqrbUMb2THfMfJxePE4Q63MHszarVJ5n4kzrSVPnWk3oGcK2nodSDW8dDzw7vf9q773",
  "key25": "3a7PsWVfbibGdwA2XiEwmQDGvstxjbZ2D5jH5phvN7k3siaUPLcheAgYChCY7GnddjqcUjvKDPCUPCjMjXjB5aaQ",
  "key26": "3871YvV1iKWKHqdWqtU6c8xN8Fcu2yb6PJiVrLh6VcPszero4ZakwfQkPd2LCS3PwKssuT2smZBbnk3mFzxUzA7o",
  "key27": "4FLsofVB2P5ssmwopsTTNBT7pL8fjMgRDdj3fxn53tq5caSNvai7s1WYa4ERMPLbxMkeA8sZ2NiRzj9SFaUFVDcM"
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
