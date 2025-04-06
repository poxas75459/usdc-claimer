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
    "fJZ14xAbTNkDLvW3MMZkiwmTRxoQgAMPkCKRTUiVwKsTzNNxZtV4dPgm1TG8AKwou7BX88v9Y8AaAW5PRaNci3b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZMWnPwg26BwiR5aJPqnhZ6YPrYmtb7PeF22ouB5AL1b7F9dHjWyShGmuh1pFAj5gD6RbUwykLgNdRq333McaLUy",
  "key1": "3ZF8C4j3GnXq4JkqWqCModQhNUn1jfNsR1P4qua5Y2qY2PEG3TPquWNH5DyGm3siVkWwaNTYoxUfweF9c6wyEsyw",
  "key2": "4xKcxVrbSxNWz3wNb6BYxNg7cLVh8a5aEQt52curj13XSXjMiiiyjqc7LQKoHkJFC33TJtBPx1QEeNYAd7USqyC6",
  "key3": "5ncv8CEp2R6R8CbSFUwWwVY7enFp8k2N2BBHxjb937t13DH3LGcieaWkBJhYxBcvGmdtfTpf2h2RfHP9DGvExESH",
  "key4": "4cVT6DPHWywPs2ox28i9SD59HTP1htCucV4fessZQeNYxCvATNZoKDSMwJby7y2amzDX9uhAhkMhvsCtjK21tNSB",
  "key5": "3K4v5FG8QHAFrPiDcA5cd1jQS2zMKwvDScwUuunbdUWQ5anU9ytWdvV21LDa69Fc2WQ2AP8m2uXhzZxUgUeLumHY",
  "key6": "2MPxoDernJzdsj2hXh1Sd3cLpicCKL7G6a3XPMuWrW7gQG3MfK7WNPNqf6GTeFvrxuEYf2qUjufGUjRk3VykAz6h",
  "key7": "61gwpW2BL5v4xb8uqzHRBiMRnzYkzoG24AnVBdnP2jB2c423hghS5u3aVojXNo5GMf3bt5GZSjP5CyyE9NzpYWKs",
  "key8": "2MXxe56vSGxcFw3wAUYrjR97TBm1Ay9Vg26SZvydC1BRh7G6VFUidqvZ3gsdwyg7wQrsuPiZGj89B4cvkHtBY2gy",
  "key9": "3tp1zvS8NDm1wxwGXCsMkAeFQg2854pxvMhnp3CWiqpLReEFuG3X7CdkbZCAkS8dQkxwBF1Wi3sU1tVJFh5thb2r",
  "key10": "63K3W5KzpuRRkThJceT3MsnTVtazLxU5D5Q4eepp94CNFoYmzT4ngz9E3ELLZRKbNHVoDYZWDN8DQyhDcFNASWNk",
  "key11": "25aheERhE2sjGNZeFxpYqfcFQfqzpKuQETgWDeotiWoZgaqrW8UEjQXVhUHoydMGt4Q8LBQRvKd2P6gpttkXiS1o",
  "key12": "2hbkAPwPaf1DuazBXj2x1Gemx7r4dexgUdRbmFAQ3ybfAcrxCsg1Qu1jddjSjyk8DvAeCuPn2JVkQNP7mbgjDEXX",
  "key13": "2kTbxY6uAzwHpbA1joGMoMnQhcu6aTro2rR9vok3gsmGBQyJjTGFNmbRdkFP9xiJ8HcS1P68pPdCYkAJH7VyVNpy",
  "key14": "TqFdcg8Kpm4cj8Zxd9EinpP6b54HvVY2kW8Rvxg86tBdKFBiFpFu2jCzDNDm81nXhAzQ3V1SiccHcFRDMphZoP7",
  "key15": "4T3V8rcjKro15XdU31xH8nNbqG7CWsWSVU6wzt5wK42sJvweppsibA4zsQ9CE7sFDCDHPzZpi5THyvfs267HtP9i",
  "key16": "5ZgmS3JkzVDj1hLjjNrMFsog4SqVE475g6ZXEL5u1ojHDJJWBqw7hkeW5WY9EretKhNR7ZU3Fu7oEgDWVs4rAZEB",
  "key17": "4Ve3RE9uCMStg8avznSqxXk6HwwmMzhjw7RXVo7711iP8SjDakzFrab8YeLPXx1MffN3em5y7ub2FpmD8pv23xpo",
  "key18": "5oJWy5gW4LKaQtdgfBrARsqaEDvyTvnWgBJBZJ76rNoxQzcYVA7oXjwt54b48NxwEemNzbut5B13o2AEwqVUhKuE",
  "key19": "xjdARY44mhbYDGJXnQFev274L9b6oaBiten6UR5872Thc7yHLYZ6XGQr4GHtoXVSD3b57LsJoUfVWbjxFqDUpH1",
  "key20": "3HGK3uDGmLtXyR1SVDTTVpzzG4qEdYAkd4jpwjGKf9kEnn6jdHXZZDCEpRA7yous8cmrARSy7jMZEjSv2VEvRwWe",
  "key21": "4YwppWZ5aPyqVBr19zgCRqAQzvWCvtmPZQ9kzdrmNCtAQBRHPtrYVP27ExPDHK81SGxkTkKVxu24Sy6c9pqFJimi",
  "key22": "iyd6g6ZorMJ13dMuWjHuAXMjNBrfMazJkYqSzxNLtLoX7Uj3fe8fXMnDxUZVG7rHjNz7ekB9uxfnX1YEbJwHL8S",
  "key23": "2QwnqkTKKL89SM9sPGNMDqnj36RkE8zDLiV5kUKE3gtYWzwPGWLGYevJxzYEAukmSsRoCDNxgcXJKcC3r3gbo739",
  "key24": "TxXaBMPoUorokFyRcsozs9Ena2hMGufMZpfThfrm8a5KCMBXbFVzUrzZ7ZDhJuxTApvCNs7EytkVehNsFqAaE7V",
  "key25": "3kUZcLazc8YhXjhCphiiD9Bmba5qV8zgBhMdMVqGu3BdYDzcbZBfDMncrYWRC8pdPzPWq9daPe39y8ojtH8NKXjk",
  "key26": "PJvwV5jXfMRu5f87qWwy2MfBZwuTv3fKfW7ghYc4pY2okegAV81WW5ZB7tsHPp4r9NrKZaKLaogGBatPsvmfz2H",
  "key27": "2AwE8jcBTB4J5LJ1NsVu5kZf1WBzAyHmSwJBuh6HyCMYT1KrHaGFqHNjHWkj6zuNc5MmaQiLEe2CsyKutyuKLNn1",
  "key28": "33eSVUcubHSkTrX2neJpZLYuMpvRgY5uwhuD5n5uNrnCvkVmNvFJpTkKuP81vqsvGho3fKjWmmgKiKzk1c1ZsoRM",
  "key29": "53LoPyrZpiBAyCYewBmu5bhaa713en1W7ChKZQGUcboyhfZAZs1Di49rJQijepCe77eqgbMyjgnPSMxmctSYZa7"
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
