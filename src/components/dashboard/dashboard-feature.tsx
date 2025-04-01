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
    "5QPdEUh9CHpBCjeYDMfHZCHdRH9LrbBUxwFufUjGNoVB1HDNj3EzCZF9Gwc5LKgZ5eK5CECGD5B9PTwHiyHpyxrz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ywQVZ4t6rqwNb1DALX9jvYYivfnAZKvcTUpTwmoAH5MYkhezqWmMU2BRhhfCMykVWdeg1iNb6yyDnC2vqzYxrA8",
  "key1": "7jvAsgmAWrsm8mkuFrZiaSHCmxr7h6Csawqty5FBd1YcuA9ukCoJ3ff6bWUeHus4tK7PFrjgWdhoWCbpx3SWGey",
  "key2": "2RYEVMUo6PDchRf5g8rgHZLmQHxPnTPWz6ZZ7doXHMRLkfdnKnYg9sCVryqRdCiQTWkyniE597AvCPbi5V2GiyQ",
  "key3": "2yWFj6vRBWtChBCdDB58aDbzL5nBfHa4Z1ScYkC6Zw5wGFBdbxFw5ACJdr24hjTMNeeXHL5Mu1XQ6kGg3R5Hbm4i",
  "key4": "5qQFT2dEp34m7Ccvk7Kgi2yybGpYaCNS7E9wCwvoc8nwNgQgYJ5uYHYoKzeeGDQXB63vcYpj8ff9CbAG3cu1Btan",
  "key5": "CUEr9KQppf4E221JzxN7GJCwtjKs72JKRBM5GqLadeVRAnmVuBNRCNvz1Vq2C18WMem2Xu3EpHxruh71oT233Ur",
  "key6": "4r79Kpu87xKV122dUAWbnvuMYUMFBHdZh8g9DY9BnB2T4MN8easjbn8hTteu8ZgLeqhSaqzArFQHDfSkStioZ4fC",
  "key7": "3MpCyr4CkF8KvcQnvTPFQWeghp5b3ZLjHrrPYUFJZbaqDoUwb7LJLick4UgoZPAtu2QFfinHXvU34PaDa4CcwnQL",
  "key8": "5Ss1t1XPRqDEZcFb9kZEowRPz64D3XNxnmMZjJSBEkgwWsXjkRSbmWPw7Xn7BU79ujd9jJ2BSjkKVicfskbWU4e3",
  "key9": "37yPuHWtCY5sVrruG3n9ewpsEy3WvPi8MUNndW9A9Jm6eycALAAUb1RaNM9yxgbrHfwTVCtG848SAqrU8mPdo49r",
  "key10": "4vHvbyFtzpnf8Rni7iiuTndKf8KaRgJvW2vC2Cf13g6brG3iXzp7bkNwVTpUrgKEehBWBPjUTZUUuLu5X3gyhTRA",
  "key11": "3AYxwRpzFoQfXtoc584QmMs4SbxUoqnWNkwVexJ2VLyd55bocJ7edXiUbZMbpqMaEhvmboJ9VpRKZTLo2EqSfuzr",
  "key12": "HbW3RxR3oXK8NHjAm3GQk9XTByPqqPhirFLF2sGFYBfWHZFdEGmL5dUzJ8n2RkqZ7ZFTdPHqFxudHKc7YWdzADo",
  "key13": "64Cz8gProkMcRrKJZjez1TUJPJUQV7BbkbTmQEZmJYeytg1pR3zBsNos6CChYVHczSdH8UPzh1kfPcAKKCdeo4CT",
  "key14": "3VBHRdX5vk4EKTYNYVJDaLtMVs7oXQwUecw7dFFAxxE5rLzN4TeT1eAa1XFXx5ejdXcxSG2Q9dnQUdiGonhVCBYj",
  "key15": "4LhJfGxbzCQ39HojRjsj7VjENbtaMax9qeVGkV9W1oJRTW7kY5V9vQjVsMBFNaMiJeaXAKLbYPvnwXkub3hXsGLJ",
  "key16": "Rikpc8ykrrgepzr4WmTwWdZzBNhhuH4TnuFNNErWiDKjJhRTTCUkeBZasTkev7TzdyvLKEhB1YCsvHS34XtiXxb",
  "key17": "62KZeDP9fBbQdpRwDKHWX3gBa8yxFnKC2KTr8UCuyNj8mceag6yQNrsWYubni3BpJVfrvSMaz1YbAn8g6MeLd4qn",
  "key18": "51qnPJkUqJqkaLmCub4WWyuXE3ZayrKNATGqoKKQXhSB6ZNBWWdZz8b6iw28NPwzfVomeGCd1rcSg6dExsfYp5mu",
  "key19": "niEMLeFdXwL6GZ9bocKoMDDiupHNB9k5mkMWdBEH3293ZQjzsP6Hx4UPCpvnE5sw7wvrtRoduYS7EXVvDTr4DGM",
  "key20": "3SGa4zkHidnfxvD65vi9pD2TVjfp9fR235XjsRe1TEpEvTG7wTr4KhDsGKqBEkv1BbgpoF81ifHCVzHkKxj7bK76",
  "key21": "42KafEdcB7oVSbhFFREFE7aVBieCAmhvixog2J7MaD8hukLJHRSJmRUMexuhzBGNqWn47gSoXuBuvhUjbQcHgAMj",
  "key22": "2rp4rNWFpFq4E4hEycJywuHRsbUr7ip5jvtWEHg2XJt4gex2QJBbiTgx9VUgAS1iaq9tf78QnTcSqiCLKR7SXZ4i",
  "key23": "4XyGFm6sehWfFGkAchr7sv3uKHnqDfthefCX6Vu4J4KZJLHYTffFALNBEfBXVdQWY35VRPJNyq7wFnRJH38Wjmfp",
  "key24": "4Gf6FLo829Wj629mnyud8RERQ5ktxkoaUFFTYQvNn5gktaaaPpbPiEcF2TuX14hjE5oUD3XHee7W5NToEfB5rNv",
  "key25": "k4sT5SWdPYHpnnuyAXXBcdvZbpbecQu3tdc53UyFfUCJCbXZGMoWt9WW5qL2yaC2FoKgGUkSqndLwBwq2aGfYsG",
  "key26": "2yirLgBYiPdVNZuZcLrNs9R3hKJdWd4y8ZsiMQqRh9nrj9wgKaShmuTVww6HYE7sBSunHNAq2zZeMpp8aLK6tvdc",
  "key27": "4RuzwLYcwQQLPTfZbFE5k6GeZuNPb49q5nV4UKNLpNAiYZ5vWJGrXdPDixaBaGZQMV7MLgg15xE6W38osbRYsCh3",
  "key28": "3iM1DcggKoJ8uEiiTGK9LvhzscjzGpG7Dq3Jb3tNnCV6kMj2tcjSx1xQ43MJ9FqUiHBwYCJpExD1e1sNE7XyyJ2D",
  "key29": "3TotkNXk26v53GgLrviGWWUSD9Qe2527DGZJExUpEYjZbee3ggTaEuUCEDbZGJDTLqRwW27ho5E8ffUdWjiZrxV6",
  "key30": "5gSN5HyVukb3QdtpDm6JRZUEDHWoDhWzzj3r7Rfoy6AP96GBjbkKvjRMbxyzjkJSwumBhSZKmMv9v7UwB9VVmWBz",
  "key31": "4GFLorrYuvLqb5ifTzE5am7x6HAPUCHrm7dBdSHpBU4ktdUyE2cRGv5jMSA21ZKSYpeVttmi59o2d7GqyoMSnhkb",
  "key32": "XYYuuCebo8ExYJdhqMMbCCU2ueLNx8GkNMSjNwhQBAnrQYTpgyXSKacTC2B84R4pBSKTvPjwryKUoU7RSiHhYqD",
  "key33": "5WfdB9Q5RTaUxTEpzv3gLCmba8ybCCtUa149w7zaaEwLtMbZ6unj4imrGNGBKM9jFhihwsHD3fEYcbMZ5EbtQSFs",
  "key34": "4M7dCyu21LTeXS1MBAeXhh3zuqX4aDUaGC9crTfLPcsdMX77pngLX6oLjnUCyJQmJdSyz34zjrtaqcV89QRZ2jss",
  "key35": "5ZrToCX9fVkuKbGNht3r15XXyxsecgc242yK6AJfpt48FfRrD9U7ci4Gs1Xa3sxhBxuyjpYrHGbpZMTN9rbj1uZY",
  "key36": "31e1wuSn575T2xgHTJHG5htpgJajRnUJ4Z7CSfj6hebEDfm7d1CiYQQAo477bnwAUxgw35BzutNVAmhj1Y7MLmto",
  "key37": "5yWAGm2wnyCnRcRrE3z2piE6tX73TAMBaERUChnh3bCTjf1eCaW92PgZbKANo4f8VDnEb8RhLUnS2jHQ9QHzebpL",
  "key38": "4HTDksMzmiVPvrgDqBdTwokwoQ9u78p2TUKVzA9UpiyMAWtoL2FtzRbA5vDgEgmBaiFTuMDXhSz5W2gBm7Gk7ytV",
  "key39": "w5Rr7sEmWwevNoWLqRU6ctFJWzZgFsr6vA3XNUAUv4oRdDpoY7qBbRhsKFX5HC2Y6Br3xtHdNGLWqCqn4vDwVdV",
  "key40": "5CLBnnBUngc7hZ6WXZxbmvnjW2UzN8XqZee6Ttqshgb3xpiCxkALwdvomKsZMy2ym11RGUnu4JXQeA3vRKFgmHE3",
  "key41": "4LUKBB5btMGCWynucYLRvSohpdcUK1rovNnvJgcGBBCjUeNfCvg3erqXW3xEt2H8pWgwfgWAWJ4RNGg7hTVeJhQt",
  "key42": "5ReafhCH9znAVeVhThzLEs2qR22fAdVieWjFbtAcPxeSZrT7CQjr5WZ7KdGt24FQRJpdJjbffc8f6opzaFqhByJu",
  "key43": "4zQ6zADEsGGg7GrwWMCz5eTzw6UB5j6MdgQB8WTuUSikKsEeLgUw3FepV9pKYgE6k4UTNUvXXZy5E8yTySwgqwFR",
  "key44": "3qn8yrYGPe8SGPdcheiSctYdnoK1VovvUtTtG3v5ANc7kXEzqUugfu5fgDuZ6DZzp9UPmMeXW9W2qBGrw8BEfzaM",
  "key45": "3XLAkZC8eroSjbJTHJNJoKzQhNKw1UEKsybyPoqH9wtf9Q2qwFEvLzMKXRN8A1qMVtd2KXPAuiws9CjSph1RLeHS"
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
