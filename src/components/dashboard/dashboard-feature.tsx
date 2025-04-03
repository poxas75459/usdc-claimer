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
    "2KNy4aDMV1t9Bib3jTbb3m1E6a8eDDrCFVAbmaZwRPt3V2BwTtfBp2gus5tUfHa9F2UwLWiuBZfgjCErGVuLQywD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PzGWberbUBj4y4xE1rZK68dV9J9iDiS2MHebGwKP9Agv3FXQfZpoMbVVRoaFFYsxAE2qnFDARSdKzzzZTrh35gh",
  "key1": "3faMcaNPUxu5ZuYNmiydq4P1tQ2166HeYW3LcNgSEqZcR79GRSXjh7RubTqbgj387ZgxNq92rPnGHEF32Rr6GazQ",
  "key2": "5NCKDhVUtqcn1dmgqx2244XQ7JUPPZYS5eq8CYTvGL3mSdSYMQKdk6kLe26pyqVpFSg3QMadWhhxyPAx6GSQidsR",
  "key3": "3GZnavBWvqPea56hsqqow1QadyMYqJKDRwAYDqTdVe6MGyxtMJ278KabJCK9C8XQqZMz9mQzSeuiryAzSEnZp3P5",
  "key4": "3uZaWn7mbwbnA2CD6nJegm9aNQKDqaDQExn6TJ2sAB4vXt3voJHRUkk32wXBVtvGuUFJkpborEkktjWLSE2DHSUN",
  "key5": "3HXnW53pdjS33CcBELaGoGYPXvYF8uyWV7XK5yJj5sDsG5GraHH17mkXt9ppLEcBF3MBuQAE5MsKtmcbogPzbAD8",
  "key6": "4egN4CAfHoPDEXPF4vnfyW22sMwi4cxKtqSigECp9fkr4QrK3KVjQSBGarsF2E6cubJMaDs2v4cLZ4kxn4a9GH7P",
  "key7": "415TeQhaSHewUga7baRSAxm13x8xjkbKoRkCAaTYR6BckACKRBcDLx64Kr7uoyNCV27G89RoGEZntV81Nuf7VufG",
  "key8": "5E53P3H1N4ZsJYqfriWKc3Z56AHbvapHyzZF7sArWbZgBB4N8yiGQBsALRAD7tdGUXw2qq8ZkVP3f7LjC1Xws77K",
  "key9": "2Gj7dfcbSgho4GRavyABDViP5XfEUHyeSWLaokHuJZgjMGWMbyemjHSzWkHmtKPn5VY7jBns85bbfz95hziXigr7",
  "key10": "2EXYFAqP4546E5e1Fmj6ka48UZN77RaKb6za36zWqXKJXmLsQVeqch1e6WqoFkLsXTcY9pj5d6vebKJy7EfVh26S",
  "key11": "XioYY1rjpeYDPQUwfwKqUB3zSf9yXSoiMTrv56t4JhJkYXjCZ7d145KZonxSpX35CsT9v4d6YFjp1or5qQ5zybn",
  "key12": "65SwUFPakmUpkMbxA4NahNZbqtjusHX3MkD7AwACQdXuxodEJAAkhF9MssajVf7r6kgLJuSyrY7aqyhhhJ4RkdeL",
  "key13": "RMvyyWYKjcVJaoRzx1dewAk6FQ6Z1kgvL7F5GU5D3JbgxFMEnb4PLGXA6cxtxGWMNSAGE6tip3CP7tsgAm3k1wc",
  "key14": "oHyX1NBRW5NzfPKxR7qPWZiwTnBNndGMyK9JaANp4juub6fyT4cjzuApPte5jBSmeH9FLzZyNSka3V8jnXTFnNj",
  "key15": "64dB42kmeoKMidYivNQK6wimqG1CGs4ijyZPkRzFd9kCx8yyq82rKVEW1oFrrXSq46LprjysmJDyN8uGzEatJHu4",
  "key16": "5aEiWnMNPTv7TSFnuEqtyASoZhwz7PbeyS6c6RyKxkdbdphNKW1PMPuxTQW7JxdBbei9S5t9dJv7CLXso8Uybep5",
  "key17": "4YieEK9oVXPdBUSbjrkZu4L4HRdDmhjQfZwpRvZFXyjC15DEjQmPzBaqceaWEuzrmWm7hmYDKoucSWiwdhANyNCU",
  "key18": "4dcqjHDgPnur6fG2b6kuikaF8txNiDJ8i93o2zMZS7na3qHFPo2ccMguZwSHdmqWTaap2afVWEFApSuwTbFtTu6Q",
  "key19": "pXp4zfDX3wprkHaBgKZvME9dXQBotUj7P8yLnHtRFF7b5F68DoVcDNFJG77iCn9jGQqaDoNqipYHRtZyvoy5ejA",
  "key20": "4sgFW4gGFpzPEoHZxxXd9T8JbkFDZ5dKhKfiB3zNJptx244xS58iJmmBLW8KjaWRwafqexxQmUUSHJ1vtYBMd4Y9",
  "key21": "5mmejKwtnUjCnbBCYy7at4djM51gnZK9CyhQfEQYFiaDJZMG4R9goytQ1Dx63JA3J3YPsxBiW5cevBdVrGXLQbvH",
  "key22": "3AzfNCYBTYX6mrMsRFigsvRm5mGc4yKRjJ42yf3efDpKsRuiczdwx1NQLMp5kRxRW37bEKcbgnUCXGky3r7ZYN4m",
  "key23": "i7ZcM9NyGCkWDCrURxKar7YKwaHv9HqkaiMZCrPa3xPPYkuHYU1w6PVAsUzUSa7vqVN3QSxywiSoNoMHAe7FCbB",
  "key24": "4cQoL2oxRfQq5XmufYE4uMVAYWYATVnBQ4X4dQt6KG4bqzTsQQGV6QY4D9nsSVziA8vpyxzX64cuY93hDp6sZioi",
  "key25": "3PZqT2ovRs5XQx9EcVecLQcWroXutcQz2CsfQf7f5cukwJjqsVDHFKGkBdPUgrg8SVb5k98gZDTFTdHabr31Z2nf",
  "key26": "24EsXQf8jUyunq1STpYW8pK3zS8oJTyy9R6HmNrBMsoe8xjzc6AzpvBWiCjckJMr9V8UbsobVgFJaZsgF9JYVsTg",
  "key27": "5R5DG23cMeeyUcV71vu1ozqbFaizXaGzU8gH2eHxJpBwTZJrdq7qWpHwTXo3FqWzVnDu3uiyaid9pSRCLk11V69X",
  "key28": "3zUB4S5zU5qz57fKB6K361tfpVSED5UkRT5AKo9XExKkqa8iDACCN3M8SwytLp518hapAo9ifQ1StAoFq9ZNXhp6",
  "key29": "5Wq5PtLix8qhUtisvHsyy2Yq3ucjNNk7BiU9mhtdei1gL3c72rB5WQVjB2cAkCsm7ZcNuJZwRQnSiTsy5Xyxxf8f",
  "key30": "hT4VE6Mv8awhRkotdsnTmvQGNF3Rdjf4CjXqkevcxevSKVdZgJWf3YcZ7DfRw64sqH2QmJJbmRyxBUgHEupwv5f",
  "key31": "isW2boz2NU3biZG4zWNZVC99iAMmnTMun2wBZpjrn6mQHoeyUf5AASjJstbA9rroFPGXBrsknkDd2xtz2sa91xZ",
  "key32": "3hMk6WAWAn1pMggqB8HXPbTVxjLE9DesfmTDmqGgKvWMBvSWypSFr6C9Nrct5xcgusrzHMpMpMUpYPVbPej37NsT"
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
