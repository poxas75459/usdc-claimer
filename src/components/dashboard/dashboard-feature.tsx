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
    "4qudoHEKUeqqoMZoevZDGwdtFnVBZeP3LuXXeeCNqEuDwqeD9hU2g184P9CwNu53Rou1X7KmaLs2UYG2d8yioJj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NXxRhcSEZPa9apYfvbPXjJr9i5PnWRDr18U7BELRABJjw1N4orcEGMNA1Xa3HDrFvESSHCy6ohqTKYfpnfcRZUc",
  "key1": "2zQQS25XyhpuUHUW22Jg1uNovaqXKgb191YqzgfPB4WrN4C8ZN91M9EWUT3jBk41tYV5KQgkrSFNhxaiTs8aroKi",
  "key2": "4kFYUPCoQVZfPb7emfbF9YmFaTZUDbdymB8phsidFaKicKbg2rqShnMsRSV5qzwn4iAMvmFFw4Z8fxbsvS2nKK3X",
  "key3": "5b2QK6b2uaBrHAHDPJetCnHcA3MFzv5kpa86nsC13K4av8UDkfC4xEhDXQmywvjFe6TvZNHqqdUUs6z88x1KFrwK",
  "key4": "8ycdJ9QEKEhHBeSNrHuWRdCtGTotNQ7VtqzqC3WBPtBWipZNCVLLVWwRmvA38dwNk8YGVCjpiwxaqeg3pT3vZrJ",
  "key5": "2R7a1AfU8VeksG5tULw75zcQxxcuHikKno4xV3Hr5Ws7XQUt8LhJ52MkniYwBPcEEE7PP31QiB5WYB1k2Kuv9nPw",
  "key6": "5sthWZ6whADSWZcEtoFdQ9adBGmxoCyaWrFYHq7hN5G2JtYuGGxsUeJx9ey1Nc4ZJ56DcLF481kmVyyKu98a3TEG",
  "key7": "3EYmB1P9UERBFfZVfycVZmQe1AFRDJHQb2PzY228WiSHMM33qVNFj87XfeS3azynRmcvovXmgGw9gQt6eAqqpG3k",
  "key8": "5mFSv5ZDmAiurpSt5GGa69j4WbeoLuuF7cfiUrBpfrmz23v1vESnCGyukmPnJAju9yvtexunqXVNHqm87LpgENs7",
  "key9": "38gGcEqM7H38LsjpfNo95NW5dujhqhjWsZ3yoem6rKGUf7MyjTJVgd7aqvs8Y7jkxghk3qQNVK2m54gu3ubzg5Fm",
  "key10": "5AMpMj4TGwQKgUB4vUzaJ9NtUi3Eu1jZx2Hxb9UzhTJzFshztF7r7J5SHVmaojZTup867qVjvzJApsLyZRnXsET8",
  "key11": "2XfXLQtd5dhV1MGyKTTb7PdYWWCJwmow8p5BsuCnaTm8z7ZV75rpLhWLgSoEtKgfXcnmQeQgAniy5VjssqGLiA4d",
  "key12": "2upMuQJkNwKh7E22Ki5JjULPHhEiHcDgm884m1AYfwVMAsQ9oki3LgNMvjyZzFKU9aKRo7FQuB1po389eH7vGEDR",
  "key13": "4AtvWahP7ftHp31dDK7u8XbrAsib7gCJy94jV45UxAwpQy3e7xKMWupKDbksUKoJRpycwENGxomLVQomzPzGRf7F",
  "key14": "3VJZmvYJN7zcWveeZ2Dp8WxkSCLLfNfyDfugvMgrg9JgxuuvHvTMEJv75WqCHWZ3THsYeJkmzFY7o9fpPihbXVKT",
  "key15": "2h4E96KqpYXroe3hxKs4YogBLccoGZzxRy49qLFXfZFavBi4pUtD8UGe38e6MnnpA1Bp2tkbxPQ9p9dgFdHgYBBK",
  "key16": "2RsQN5c2MBryzjLh7c6fcrBKHGYY1bZqJ4NRRH1ZFsc7uwQ4aV8DJMwqUk7fqAfHZn9J1MBjbvL8QkAibXc7Xrtg",
  "key17": "4AjoieCbgSApNnF5WLUMFsT3wfiHGeKkCygfrXnb9vjYtGEvqZZXqSrAdXVH784PrHsBGBgCXn83TNVhqFF7mjxJ",
  "key18": "3fX4wdYj7uUzrkBCTJvwjgivd6DShe6aZyKsUbU4pMq9Mu4EL9PjMsiAYdg6e6sDvmzLDQ6YrSE9reyZ9TevzbRg",
  "key19": "rj6wH3NKiBFhpfzp99YCLe7NhTVk5CP5UAMatMkkybgAcapmC7tR74TPRX1dtkwfJXaTBM6b2HJnKzQSK1JNkGM",
  "key20": "Vy7rd7YB5UcZKKqHY4BNsXcFihpniFAsUHUGQVEzqWtJiTYVQNHMVAJXQdgYGxaM4aeoF5bcEEx5kYiNJ4PfQSC",
  "key21": "2wXr3Dn5mNsVR6HL2WzEG9PKGAKaTqCGVH7rFtgBEL1bqU4xRQ7yqsnxZLvW8kakb6LG61MZJ2Jimc71aUBietG4",
  "key22": "4GgrpYbQGQBZM4w3JEnpx6Ld1ftB26FRkCjf6jjNv6SCCCTuwderz7dE6frPfRLpRw9cycg8qyhRK3EWMbd4ze5E",
  "key23": "3An3ZxUtHv9orwgUbPEbzcaYr5AZpUCdsE5eyuQjqD1mqWRSMkHJMFZtxCx28yvygKk3Lv5HuqA28W6qmpu9JUz6",
  "key24": "xGECoCb9aaZGSua46fBgPKQnMdJ6hnqpHRNdBgBc3LVPyp5cyRj8dyye2Zg6PYf6oirZMTEEs1e7QpdHSt7kXNz",
  "key25": "5f3qgWem8obEoMnrZjVVnj6WczutE581Jfg4EzpowZnKHk9eiGDC4xDQH5jkeJf3hFC3TwHhnCJXvthuAPWWKouU",
  "key26": "2ZHCmatur88fwp3yFpWfpLfPUYFGw2quHaV6UQRjzvTgbSYPhW9eFVtLLNZ5RetL7aJJo4AYxWLbzqr5wBWLZa1S",
  "key27": "2xpiTpYoPJKQeW5AA5q76YsueWzXfsHju98pXgKrz2a8wo8GuVLPN23rNenDx3mBPzu3okRhvUznnwmJNFz1gUve",
  "key28": "ufCSDxGgRwKtyN11zw6TZSCv5DGEkxq3gNgakqBUuYoiHRvJujkd8CWhnrNVcoqeNY68BUbDP8eKTg5hrqhSwQz",
  "key29": "q2ADmRPddFbiETi3aivH8xoX5QcKVZoCW4MCqPWRUav1eVPN1kXcDbsvoCuvDqUFFJs43S4zomMg8c2hdJYdVw3",
  "key30": "4AuwAtUDtSwjpZBzB8pkwr7K3cjMp2iHosNcDkV55iXiHoRPHXmf1SZcFtXCtbJRcYXcCQMwriEn3U6Xt2R3KqBq",
  "key31": "yjFB3tp6vxLzU6U8ho8PG2JyWSab1p1JuYXM9jroopCBeWm9T6i7XgLtjzHEAri6AXK5Fh4Y7nDqp8C1Lo8wo4t",
  "key32": "4eXcXtEPwvKkLmkuXoGG9wWAbTLbr66CxZayTNCkGmQZYXFKFqZpPbGETu4R1hfVLr5UvyTwNDaCrysR6ABjxG92",
  "key33": "2HMtVCUbfo6EALPUkevzFv24RUVWmLS1BHhuarp3kPxsYDnpFxzP28F4ipS85eYjBSK2LdWhH82YbTwArQKQsJo2",
  "key34": "66hRBUHC8EGzfPVQXMoyGjqv36KEt2HAbk7vqXcd3LUq8jc2q56pm8BJA5q32UXW1KWKey48MzGPa3FfKz3tC8zW",
  "key35": "4FRyEqpLUmH5somZNZmJkqkfrujNwWzaQ4Uwdsktnzrs979Cp2ARbVJHaBP8guptAQTSmjHKyEcjUZmUpiAjyig3",
  "key36": "5GVp1hb7WQ6tN6ALQhUWAc3y5HXYXVpy18a6q2omwXZtNXiKnsYWkFjCeyEGvV3oV5pbhdFY9JxQazkpioW5T68K"
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
