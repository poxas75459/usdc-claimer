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
    "2RkPPeQgD7HzqvJt3HHFpqpXHNfHprxkWD65E2Kphez7DhbSJ5HzMfcBsZ5hDfN82KvLU7C7E7fiz61qgxwb4HZ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sYN3U7KBXmRasvxUrKDcdLTZKjg6RTGfLJHyKMdr29eUUZkDfGWTGQ6QVEdJPUJtmNjSEF1topusnRVL8qt3Up7",
  "key1": "2Awk9169niWkkRCwfMHd7cjuAvhqRTmnXtiE1xWP9ePKznkpaV5tNtHeey6jky5g3gHcomUGQjvN8jgTrXASmMrM",
  "key2": "4fGxPpmk2CndUQQCd56N5AFrYCTArws98ULCk5VrjAR75uDeTWyH7bqnPHNhezLM8cJe8seNQTv2Jea5pGobbrkj",
  "key3": "3YusdUpUF5UC2H2AnHBAxLUccekHG1Av3KArDdhY7Ek857o7oRVYhsK2XFU9dzADc5couyRo6k9RGx3pcatTjzZs",
  "key4": "3ccoej2Mjn3xZZ9L5XFK6gcHdXhuGTUqiossAGB5sNTiMfajjCxkwTd5bHBwRkwhwFR7NQ9Quq3ehcxMNLRhrqLn",
  "key5": "2U5JNKi3BqqDgSkuHj2tKMXNRR4us9USPRurkKVJpB2GTCrtAGrbNBBCwicccAtsRzMfeSGL4rpqeS3SEe5718DV",
  "key6": "4QF9XEyUAfxJZ16vkDGReBw4pA2y3usSbxv1BdSn4kUVCXvALCcBtjNBYSBPAHUisdD5ubaehdyibG8bLDrz9FnL",
  "key7": "2hNmkrTretAixXVGfypKUSrLueswrm4kaymjZvCM92vzqDxJAsTHKx5zixNC3qR7b8aMvYBHVoSA8fbUs5TNkZeE",
  "key8": "3RsDmMh9i8qghH7nTfDe5xp1EPykXc19of9FcpovwqELPxMEaRy8DR6J7xXUn5vQYDspFghw4TYTmA7h3VYWr7Th",
  "key9": "4kVj9QewTK5mn4FsJSiqwnkc4R4N6SWGgHGZWfj9uwtbk3aKgTLmNU83PSqqMA1AS6uuSER8d82Jh7TaSK9EbDiB",
  "key10": "5mAQAms5GJH54Zp9TpGgsh8QP2KXPexQAxLQ56cDs6W1zegpkDtTvw3whi73MwX5wk9ZfoM58WHzSiiFvSL43tWP",
  "key11": "3rJag4chxSuUaNwL92a6ffFYKnG1fQK3TDrpcFUg8TQiXTs39gzrWiGoUT5Zh6fxkXsfpoSd7MH8PEoVgh1qcZ53",
  "key12": "3JFu7wZRyqwVd5K5L2dnegdX6PqQK1kG5tdpbrHoJVatpvSuTS65jGBSHnf43qss6xNh4wUNKBUSx9zuu7oa5X1L",
  "key13": "2JEGskRt5BYJwSCzeKaA5BaEREKC8yYzwYx6uDvjHbiSt6kgRuzbJFqgeUaqJQsU4PpLopMhvTknzsMRjgLFBBf",
  "key14": "493P91CmkK9v5kyKXjhVjXiTfuE9SQyThmEwASJK8j4FLdHKMdaCkBoK2PmKXabgfY3rmQ5gu9FRevZGG5czci51",
  "key15": "2VuuDFjReQq5YzdRq1zHpEprsNh982aetzEZTwABStHBMvzDezKwXd11MBcNm7cMJgnTRCV5VBNL7pMukisJatZD",
  "key16": "3hzAUSq71wzXJ8U9iW5soCyRewvPhvtF3ubHXCaUBgqpuyEkJexLWWdsYJtLinUK9umEnoEtKza24Lka2dK2joJm",
  "key17": "uyrGFEfHkRxBChDvHpzALwhFD7phkgEXQfJ6WNv4FpR9HHdjkVweGJ6fg4vrCScEiccPAu6RQUEvu1yLaaneBqG",
  "key18": "4QWgsJy6gxCLH3RyRTWMQN6HsKTZXhiSaJmApFAozx9W1MtGcekJxbdZBmCVV7qK4pnm1bXMTmjfoRJ2LN41E5ai",
  "key19": "Us3Vd7V6aZ3wFpgxgs22KjZxtzPnbMspcB2F5UnF6LiNMiyBenGGSciFQ8JcdA9GhUu2xySegwmjHWFn1jPNAC5",
  "key20": "5wGpgHT95Ko1cxxFgKvyaejEBpcYLKiqvQ7nry2yA34HwXhXpv21AgZHaBshKxTA7xxHMqyBthyQQNXx1WNyAfBf",
  "key21": "3AbuvK9w7w9DYyYUxpq8bnbKWD8KZJJHHQtemBJaLG2VJyHGHmnsTQUbCh3haHx6QF2cCpMMXUriFzp7Wmjho5LV",
  "key22": "2rNEA8Uk36mpy6d9dMeXQXhqJEKAwKMZkcvXB5KWuevkhAnENo46oAx1Zsg4TBv4wHQVcdajR3jwKmLduHNDitFj",
  "key23": "2qriN9pMpJEnzGrNnhBjVkx1jhaTD8wjw9eHUCYVELdG4x3ZjSvWJs9c72ouQZGhKExYj97UmHv3oe9tXDLmvmLR",
  "key24": "4ATYFLy4JyPRdHzsgekRTaQEy6ix2F8dn6qSv6RQcKhmXr24pJ551GjLuizeaT8Wjr4uSQjAgqjkt5QuigybiV5B",
  "key25": "3bDMhuiZTvpEvA8u4fvc6n9WyUWbzryS6FddojLk57Rg8L8vNsraNqNZVqzwF4G3YCitH68bLB9j8FEPEum7MPNF",
  "key26": "4woy7RQoAL2qETs1NGLWDbvEmuScrTUVMD6b9KhyphG9QcK7tSg9GmB1R9bH6ihq43o9PtzcBPxbfiQwA3pKTCQE",
  "key27": "3gSsxLA7GUwYrsSYQQaMagp8ZSApLXoT3vPJ4GBSz2v2xCG3Bi5JzgQqDCJpEb22BgmWURK8TKs1r8RoAqr15HGC",
  "key28": "26gTcvSmzKgCEY9DKbAiLNYdiS9gAUESkco3A3xFRwLASQ4Yx2AFR5Dmvb9LPCKi5TCXtGYZan8YPQVsZZ1e1msX",
  "key29": "2n97LTNoDpDL7Gxc2ZjvYu2ARNGij5ViK8XBXa5FcxNhvoZST5kXKb94WmuSUAehSSJbkFpyty3g6wi3P8QZ8P7i",
  "key30": "5D7Hb4HwqWidiwrwJEJFAq8ttBV2ChAnPKGqSGsJW4khGjjmYb8A62h15orEa9UKk1YPwjyt7QQsG8awDSEHQU78",
  "key31": "2gByAANYiXAkjwSu8d9jGWE9wFbwHGcZGQ4Qfy8uovk8D4X9Mxm8qENQvDTzCZf3ztYDWUD98jf3EzFVMyiqxEfZ",
  "key32": "2vj22REwGkgpVauPUjHXG2UTWHN8zURd7yo1bds5QbbSBT5e1y43w3uUgmYyGercmf6JKY9kFrGcYQ8Pbh2ta22J",
  "key33": "5gX9sxUnSkuc4dR92UtYyHyWoHKqiW3cK8dZXMGGxU3E2e1r3AELZDu2JGWWmE4T6gVSYoff1gQAUkkpNAeAAngM",
  "key34": "4owq8kLcEy9HqvJH3REa16RMHviL8mUNzE3ZTEknCpx2fdK2bPb1aG3QCUst5DC2RngjVYLgk2SjTB69NfgCfkuR",
  "key35": "352NjwxSHc6da1zaHxzUNi6X3oV4krArXWnmTUGaBcxtjZYhTitooNvdZLKrVaPQvM2USCarEM5p7AWysABvznE4",
  "key36": "3gyqDnsgPyqNZWTsSrGWzqfNZQQ1BLWdoov3xWtLZLHCjmQVNFT6uXrroKoLeN1ywusjeG3cHwCGebxs6vhULLGt",
  "key37": "66NHEPKtf3L9R9aMgt64j6tCyfNyoJu1yTgA3FpdirCb59Lht5pFfevytt2viw1TQL9vV2uneb5DpgJKXiovjTkA",
  "key38": "2F39kVJG7CWsXD9onkyQJRkEgguGxSe3rxEtVTdDaYD4Qe6SVgv9VmQ9mG5CfhcwCVcmhv8T5hbxJqqp9JU7GqSq",
  "key39": "2d5SCnmaCF6hRBxvDoPqeLLD8kSRN2pPQq1LDfnnmJbSeagHd1RHLzfhyoJc8zVLJtYbyekqBCgbiodHE1xSRpjp",
  "key40": "5JzA9iUVCEZnAA6FF51Txs4G3bKVJ4PxxRYVfTXbtL4BZMRbx7vcrQnyAtfZK78cCda9o4MPx47XdVrrUpVyxehX",
  "key41": "2uXqTBcb9cXKLdxwoTmKrv6m9bM2TcmCuefgyvqULp84zLqBQMgTsjVe37Nd2G8zmh45RrJgj8kHvQfmpATAXZko"
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
