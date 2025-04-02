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
    "3tr8ZLCDfapGx54Gwx7f1sHPrGU46V5AB8xpQikjEmXvZSBkvM7zebyG8mUBoYc5WDcqzimiNAMNgrjCoCczN63X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "96X5YJeCAF3qVHLxyxJyDt8WhRitPs5HTM3ez68KD7TSpDSt8KBYPQxQaqBGHnssGUStrcDmqJ6LxrqSjiF1Njh",
  "key1": "yo7vBQCHTBGJqV45o37VuX5E8nGaSTC4g1zjey5RPoU8PfBbi9rENVukcj1XUoa4hwM83Qkf49Cv2N9JEMXq2MB",
  "key2": "4T3RLjrhzQ6sS4ZkytRQwDuK4VQGNsvHcLK5d7RXhhxZ35zXgkSBk434UqJhpzzjDqyo2FBkTxypPkDjAgqQHhTP",
  "key3": "EBznbFfsLNWckkL8iuo6fzXUA7aKXKkyQgmAWbeL2KTxrbmFghkcHkPuzSUoEdbgU6NHTWXQpL7AESCn4cLPwKA",
  "key4": "5rsygegPcwcYczhaJn9eZ7Gh3eCp6XXf6iJSmMBKj3nTH4Xvz8a6DjKozU4M6f2K2Uv9qnijAJFi1VvCamSruDAB",
  "key5": "39Kjh7MH6fgWWPrEgehnnx97fnCMnc82uwrvnnBqQ5WVEnpFfUpCVn85eMAv9os3DCn2yYJ9DipMk5m6m62Dgg6k",
  "key6": "2tcCSttpBeAwZ1VAwxdqaQ8Y5zoPUr9NvgiP86GwMXUSaRUqXLNr4b4bF8E5mmxcswxUR7ng8o1kEgZtc73FwVko",
  "key7": "5RSYF5JDTQrdtEpcZiUYa5ABqUMCDgtUZYaSb3rrmFgbFdLy7LaFQsL3ZpAjwRE5GLz9ukaqD8jFv9pyLKGcxR2U",
  "key8": "eEWgorty6Dfg1QSe8ULo1giWXWNwUUPbKvf5tkeHziXP6oBRF1ss4yaayQEBnaW99NbBYqazVN8sfmBavhpVmsD",
  "key9": "4gKiaLuLEBpyEPru2QnpKxWiadGpKXHKcEbUsyjKmmSyff1XG6rEywoRqyo6giGWFGBBtoU2ufBNU2PCyPSGNHCx",
  "key10": "63sCFuFnSm9jtHKzBP9zXeZwZcsSBYc3mcC3wAFhyWzSZpHH4uRZCSCPph12uAE6tZzEEbqQgKvvwNKNpiaWYhvM",
  "key11": "2mqkUAE2eSM6xuFLNVXfCEfdQRwAhTJVs3bMRFRDG62my65WrVBckuE6J7GE3EurZXpUB62x2dWLauembbjxHVgq",
  "key12": "WRV3R2zejokLVoR9DCnZ9TkeY2LTnsojEKayzs9GGxBGELULTPALFHP5JgUsToJXZRnbLtSi6b8QU7w6TocsX15",
  "key13": "EbTx8BQXc8mBnwbWYwahC8mF1a6r5HPLxtQKYYRrfnSJqbrxrE3ZsDkTE2xhSipuHhTcWS64h2eqWE6DHsdwcAd",
  "key14": "2wtwqjtvus1jEecqSUYpSJ5nwFwniwB7F5KUgq62BWeyxKbEwX967VyY5fvyVHvJJ28ysMi8MiPYLFM8PBhsnXZU",
  "key15": "2fZDxuy4Q39pWYgGns9XaWSHSuZLacEMZ3aRbvwz7Wo1hNebd89ec8wgzmALK3hSHBVJTbqJ4b2BGx4VsYRJZiNH",
  "key16": "5jbQBF6cQCp7kwD32qL9uBzocGhEfPWgE1JtncAaeLApZCoseEqoRCE9NLgrXrKGtCAQ8kEi23WX157gA7JtFfNr",
  "key17": "62ntAcj5owWPEuyLuL2LnnYQJXsJbw4efoxCoGqxbEEtqXUwQf23cyfq3w7cfmdf3oiRx6FmV3V3qvU2vfKwhDyn",
  "key18": "x69HwLn5pssKmTS6Gg6DEnS78pnmw17GpwHzRsNQsa6d6q2xJqDveVeixjiCX4na4Gy8j6EXHwrAo6aRQNdZKBd",
  "key19": "4wyPQJ68MvxnRK6vupnphAotP6XsZWvsV9HzjeUB5WLvMRjA6sghw1AT1sGrZ48vQgTnXk6cy9gSpdDPQPrD5qtS",
  "key20": "2GBWiF5kpxcPyXzHiWPxeMvT6tZ7wyQ2zZAf1wtTqkpqxD5t7XA5ogtNZLimBZnWYYVD6B2sDGv6WT5fm4VfPntc",
  "key21": "hpG8rrBfUmed7U4hjZZSoGeZ4aeDp9x3sZZY6bxRHZzbhC3qcj2MB8VQyJLBhUHsENxxN85Bce6FrkvaCtDkVrY",
  "key22": "2Fajf4yvwCLxAmwybodPAt2z69SLtpGzAEwjtoM62azjTpWHLFvp9BFRrPM5LD7urqDJ9chbiVQDcY3DNX9V3HL2",
  "key23": "128ozFWmpPJmJUGLbToQdz1CAbiKwfREntS82q7rA7Qtzi9Anqc178YG5x5FTADD2Qe88ZiLD5RjuiYhvjvnGUr9",
  "key24": "4ZHU63EsKLUXgrrVJwSHXvEgfbGZgvV9Tv6oDwWWvGFsCSQCJoDBo8iCopcxNx2ZyWx2L96kfBYsUj4RoZ6oSw9v",
  "key25": "2cygPWMDNN7vH3r3zcdzKsdtkWPK3ry21Az4auKZ3vejdr6KSnVCeLPbV5Hm8D96FDSd1Akj92feb779EdV67LKc",
  "key26": "3pvTNV3swZnZkc77qddgzq4dC4vAWtuASBem5EmUYiCLcCfBNrhQ78Nvu3DRJaGEke8SDdKs5ec9rMt6Q3j7rrPD",
  "key27": "KQb6zEoMV9Jdufh7UF6JF4RjbaJ5a5vf5Wj6fd8NUmj1NE6XAnsKgMRs3LS4e8Bh9DPmpJ5uWukkXnr4ehBsy4Q",
  "key28": "3Cp7HBbMKnAicwpUeGzBfCQSTChZPpz6zpHRFr6yzyDvkZTA8UrggXwcthGtaTYkk1WRJbR6utwu2B76yTZdf4Ux",
  "key29": "2MSPb1WXnsx4yYWvXVHEUrFg3u2R5hbvA6nm2qqafPkw8KijMBxE8xKahHFFqSzVDboGkWwoWnkxQa31NHZYQAXX",
  "key30": "34FBztLQrRmfKF5zizqkwpWBuHqU1UJhH4vCSyyr81jrpJkQNeeN3GeVFLKomgs2s9h39jihXARVhBXcj6fjBgwX"
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
