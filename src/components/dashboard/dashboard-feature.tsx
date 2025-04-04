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
    "3vJNw9P3yHJN9jAHEmAZvnqXMUvh1KSajP5Uiq8AHZNVRcQEuX4Cmjr6hbWLBjkCJxpeEv75MK9W16mkuNkSGEDu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33LVK2aURTSFVqAarmbWJpZnYo3YPLacXEYb34FSsB84pJVF39Dg2N2bigxUFYbWkFL7RCf7MNphBrSBLFDKwxo3",
  "key1": "4peJSFnVcVLWbQAu7ThMRaRFsXBvRcgKwYVr4WNpouwNdvYxEgyfgnWXVVYbJvGakzzQoSgvmWwFNaLCkhhqm8B3",
  "key2": "5Hnp1p7DCohdAoun2SpuxzieAJtgrN9iMyKAmc6QtP8uRga6jZPVYqSugxa8P8eM4SsEmqSZvzKLCKZSKUDjqBkT",
  "key3": "3mMGs24wa2KubNNX6giEkRgH97vVjTzC98314GuCKxxinxpWc6NPTfVM52bfreZfQ3YzTKin3U1rGMESo6finqLL",
  "key4": "3MERqhTfGUNxofouSqqFfDr4RcEXXAvQuvpeAnQE9TdUM3EoC6d8xeminBbDRfBeNwekxKtcdCLjVnDK397GViFB",
  "key5": "36jWuPHW8gBTdeDcDN9Qog9NkdqgQMVSwfcAn4DG5Yvmop8jBYbq4nd2mirC1BQcyJsjkrz3MLPHwY4dXp67dN8s",
  "key6": "5eXix5bYZcvs3zXtm2qjoiFGEaSnMTaevtpZELyGu9ekyRy3a7XXSCL9gHFM9WEfTrKB6r7rGjHWqFVfroMZ416t",
  "key7": "5kZutNftQKuY39ULQb8DXyxan1sdpVwXQboAudHfWdE4g2jrjteff9QhVMckDFhKNaXhSWsgLSFJt9XXqJonnjMH",
  "key8": "41BHUzu7gALgDfbXV6Q9ktVSY8S6AZDYb2NXHy8FUVpQp1eP8spktXKsFSND793cC1rZvpTHxYuYLiF1eirMQHSq",
  "key9": "37t8BQdHG7RSLs1XixdXwU1JKT5akFWrVzA8CArUqnq88GWczSqSz2h8zH9SkWBK6V7fDP18foxtJ6mKVCMv5234",
  "key10": "ChAxxcJEGq3Af3Tsq4TicL7zrPp9jJZizd7bofa4vgqzcVuxE75e85ZyNss265eJ3MpktqWyz1azGGgYnNckk8W",
  "key11": "5YHERgsXc1x35XsX5y9Esnto96Wfc6h43aqjK2bC61f8jQ4jq9JWwkP9BfsH1h4bSg5jwiFdTWicm2xfmDrFx15w",
  "key12": "3gubtn5iJXbHJkZ5kkfHS1RPnPFLTa8BzzG7Z6D8svbwakbz7fEj5FCqsPM1go5mzVjzgEAeWq4BiWNncB5TNUtZ",
  "key13": "56AgZgqHFxqpa1pkteTLzkR94gR2CEQzAdHZEMZeqycDzikLXR9ZVKDMwN848kLM8HgnqQR1cwRvsR6VoXbEX3E9",
  "key14": "Sp7avhCHkSRZ5RvBtSCxi2Gx98YBsoc2uLuvNtF8TzzjHyBWaY1xW3grVhByQt5g9FcPcngn9VcCxt8uU1oALi4",
  "key15": "3gASZaXgmqaEwksNbCk42HwodUB3DRvkpxp9v2J1DB3ppjSeeNCSiYYUWHiKqurg6yhQauwb74vC3b7YDeDeKGfk",
  "key16": "rPYJdE3FGfeqHX9dfuCERMGBGPryuDhmaWwCV28ZbMx5r4VCvivq9h1yxTD28QbMi7w5o8nmQonzPAHytkA3oES",
  "key17": "PHU2gq8eg93GJswG7NC7k1WEGNsbD4rDD4meJAWsETw6b4KcbTaNGWsaoZkw4Tczj3H7xMW6b2zaCeVbdpRCocY",
  "key18": "2tjLpDMJdbGStAyPwytKZK48GbEUfXtNPVtP7dPmehAknG3bUtqHXrRjdaGo7TsfdW1LQh3NDyvtqe1hgUzQ1cM8",
  "key19": "4zB3rBhkpqGVn7PQDMjzNqvHwZhXCtU2SdvmyRuiWyZxQPbpKC2kyuKgDoPb19uSGK24A6jvhGoCf6YEpgiaYpGF",
  "key20": "f1YaQiCSwyU4CHr9BSzxPVWn2Tiku4sRwAC8ndzFzGADv8RC68gBChr2n52wHkw9timTWk2KNRaGodu4fpcFksr",
  "key21": "4azZnr5EDJ7DMpcFgCCHbK4RqurWDhDMbxEAd9ae5FbLYsNakgMsgoTo4NfYLkU2gxLBEQLrvj3c1vVmoTN5qsEn",
  "key22": "3MAheHojB4FunNkL8AqCJ6iABPARhGKoDqYbYGn9VtkuE9vewybApFRkBU2ZTyD8TprRjzm5gYVBYERDYRJfw6wY",
  "key23": "4BJempnR4CiMKPZPYjZ5pKj4kbsbLLh1KQ9nK3vzzypit1oGA2D3DsNPHtX6LT8S9G4ZgVEPzBbnbjxJfRGc8VNY",
  "key24": "28R4T64QQmvRgG1NQZjtnKX9q98phu9nTqWJcZGrqntQqXKGWBqtYi2koR871HjSERbFUFN3LDN6X93XzJy1AM5L",
  "key25": "4G9RS7GaqoKAR98rBEDQXxYwacKkUVF6Eae1WEfzkGdynLNeY9478AWbqbSpJEsrbRkkUcEu9hsrfiakAkKeZt3g",
  "key26": "3xMmBHUR55ci2HbjueBp4i3hg3mH42YdW7822LNify8A8ZVPSRWksBeWK5mofCuBYzqERA9SNs8VwwXCwQN7usFP",
  "key27": "2jGSR6SXoqw6qkCUfWcfGnBu5EWWfbUj7QPacvoFJ34y7gDjp4ut5t8Vhsz7wtD6pPye5BB1dScX3s5GztyMHcvC",
  "key28": "E1bHPi2mmoGgRr5tfjfLMSrQrE5ABhTnHnX64fZivaf6gZzHeuYkUXHPajWTi4AUCqXwHD7jzhzcWUCXCLubvQ9",
  "key29": "z25WDKQiJSXTmLmQ2z8cvq6cqfy7EUW93cmDWMCNavki5NHs8Lv9qq6Ksy342Fm6CTiaE2Ghc9w1g6ZLJT5FeUs",
  "key30": "NS8r4cW3ytUNqoxw3vz6LNuVujw2zQuWFcthE14CFnP7opopTP1BGdWA45b4QpDYYjEjcKc7Zi41iXmUSnGEGVe",
  "key31": "2Jm6U1BzDxEWgq29nYnzoSM6Puyj7f48Np8pACMtGwyf72yRe5Jpu3DYYERCdbeFhXG5KaVu35n2cNKHe4eStEyV",
  "key32": "c11zqJiZ1RjF59fgCsGiB9fSd1Dn6iLP8UwC6qKFhLyp6dY62bcrbbjCLMSR18ETTmzVQ3UC5aaCnNWfiYgU85b",
  "key33": "2Prqu3PNCyH8W3vLxgUVQGwujf7Wm8hTrqbUPYQ8Jwi34wYVPQYFzkdXpqFkvxce2GQ8hsWsXibwG2XVVDkPjV7i"
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
