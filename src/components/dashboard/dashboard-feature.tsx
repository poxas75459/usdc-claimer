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
    "35qfBXtPF6njw39sn9TLUHoRcsyuzqXcZM1zsLvNRzd6Cv4rbRLdmoQGrpBc3cnMfLQ2csnYno2uxdPaoisiuQip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61VL6SZ2T4VNw3JEj5QUGTJw8BNbsSStdS3xPqeUP6moG8fZiVZ1JLdcx2m2RDwoGVB8aUbJHbL8nALa9R2q49Ui",
  "key1": "5wUivfnURf5ChyqBfvQLHFDruBXV74AnPCBnJAiAtw3CQEURGWdm4ZacioJzFTQDqS7uR8p4vgfzQiJpm8TtHH9u",
  "key2": "4hPECmzrfWHCfoju9iLRnMDL7JqXvv6RmCZmJYAHikchRgPj7aJ4qzyNfwtpTJtXesR6ek9vC54upXXe5rrwPk1b",
  "key3": "oZTmHie8yJfvJBsjBJyG1NKgV9Q1rHbuCsfa9AqxD9LH5qm2XvWbYEJDDZgRguHer1sPUMHu6CAuQeTeMCWQbr8",
  "key4": "5pNRXdPeD1Ym2bu1gdMv6hSSVhQLTsn3LwKN61Vd8tsj1kXn13ejf3bSriRwu51CLQpcqNQEfPQGrxxVFiqnXHiS",
  "key5": "YfzpUv1Dyp3tJH2gE8qKBDkVziL9tMu21FvftM2Fp4sAdcaj67PmBJLRkA3tZD1vtPRXwGd1Uc3fH89qBkiojDp",
  "key6": "4CXmiGEY26nMDQ7YG2zekMmMYqAZiup5KcFuirkuGt7ftT1MjASkKDYnQennfKd4hjTQfZRT8sdD2gTYmcokzK7Z",
  "key7": "4FXdbXarZ2HmNwZivxHLx63cZX2DjxPe4m7DWSZQT7YCKruNwMriA79m9exaE4KDBqKcTy4uUjmW2XtGHx8DFtju",
  "key8": "2igyo1Ff7ZHDdeWPZ1A3rWaFziZBMqCbE635vAM1v3iDL57gznCD4v2zVjKYwCULeTzfo485rovHhKiY3SzrgiCJ",
  "key9": "66GscDQcWsHyuBpbGnAexYMyFhfXCnGMtvVN7P3cM4nCTZDmkm7FyyujUDhfKRnPoBzMimSC42qiYodmnkmv5Kha",
  "key10": "3ChS2TiAvAqBHSBZDoNABLeUv7emqnKXckMZCyzZvYYsMxkPiYDPLVX6u6Ty1cbqcJHjCoWwYTPaDw9oDHdVpUCX",
  "key11": "2UUQCrG1SKzmQHMRgdBN7wF5LcHRo1ToxKkEHoXAQeEFd9JxpP9uxGd6WcARDNGgMCJfr8VSQEzgDhdAQeKydyNn",
  "key12": "nZ67iVGUVP5ExQqnG6rgoYQoZoAsqaisB1EtZkFUXZxYrHgeJrvmn8K9ZVWardwwiKXHgetby7J27PEXQCenz4A",
  "key13": "3M4JZ3kRTAtpvA64X9FoaziqySEL8gw6ta8VjcJkGBxEdfZY9TPNJBttQPdeLRa3TFMP4RvQouH1SKEcQWpuZaNe",
  "key14": "27QWwejd9EVgZGxBaacejCvjnaRZ3W6VkUNQTH7y89bzXErD56Hm2KAMyFhyVghZft1UitjqUmkSPSmPmeea9B6S",
  "key15": "3Y5M9ciS5RWyXYxJpMUMo867HEhtTgThAse34saFNJcrbCjM58rDRknuz7j4bjzecCHsEYZrRMtrcsTtSTVT65ZY",
  "key16": "5vza2C4sKu9gavRWfPpwwetqSu68n79nvhfhvASfqTWgFLM1b5u71uvFzNGrPA5QQSTLRDXtJfAfcoLRnzPBYpkD",
  "key17": "4VYpFo46zDj4fw878PfthyRwZvsYmNjX8E2FAogixWRD36kYAca1Stf3iP8dij3cFSRw3MdeD8zPArqB1fodoSY5",
  "key18": "tX6ZZbCn8uKp1zTY34PaRhPLXWG6wCgyTFXQHLwHhxuVYMZUt66WCv7PAToCBVux1SKynMH9Cpn6hPxRAUHpiET",
  "key19": "5q7kwuXBCa3bJ3P3ip8bwCW1k7agR77TZujzKepjRCnevwW4Zcu2W9bNMN38oN5CXx91AbPcQXpR3cL6daXfm868",
  "key20": "25gf2boB6rzQjG7yQsAR8iDwKn2t9v4xV4qbuVteEsCKx157TKaJJ6Nu8AV7mzNoMDgQfkyQcF7i8D7tArD3cUHf",
  "key21": "3BVNGeA7z4b6XkhbmQiJUSsjjshVbKMgC94KhLQvQRygLfpU3X5cgcwBeJC4uSQ4KUESy92GXxYsMZr2VsnHQp73",
  "key22": "2PiMpVakPeFs77ipDeJ5w95zTPkNd6sn2LnsMqRLh6tiTNdT6osdWPy1BBQAS6TznZX4KpMAssHmLJcRzTATmoSH",
  "key23": "2KtPc6zR8BCu5ws2iaVZKKQPoizKb2nNxiXKxxa6AUjmihxBqV8UARAgsTAKgaNLeWJZ7qEnGKKhu4FwWRGHFz9B",
  "key24": "3mS7An5uxoAhkUhyYfQLehFDrNvEGHj5RoRzuKtYaTht4CwvxRaXC84fX2dGwDECUzNmnJXimkfykNH5PokaPcNY",
  "key25": "MAMKSjzzo7CoSuHBFLLxH5v2D7g2yermNoSWPKeiJfG9r2h91D8itSUF39hrcUuDm3yg7oMqoPpTAA1gTdjBv6M",
  "key26": "4SGfZ3yevqQgDp9qGKS5JVjpdeHYYvUjrS8xuffzTdHQMfBbWauaTmMVrXmccgpMdRfQ4GaqbMBnvZ4ASLDeamJ6",
  "key27": "5ynxBeGGnCE23EoLAi65UiG1KEEbJWcLHN76AVKw8K7XjX2j55QhscCnDGpbAhH3gvqQKvMrcuPfr9nD43A8dqgq",
  "key28": "4xT2Q8CfLAR9n7TFX14hDjTQKrEGoWU5zYZxnqFRPUSNDhShZiihrTU6gtL6WBH2YE3zLNe5BTxE3T1x1ajQUCXn",
  "key29": "5rXE226N52ZWDuwjPqWWncptenPgvjj2jnJUuzRZ8LTRE4667xEjqZCThypJevwgC6P5ex22aKS7gpmXcE8hUpE7",
  "key30": "5kypSjHLJRg9YyMWYK86KEP92FgZnGf22SyDSwdDAZsxAsgxcrgiP6dRiJSYA5GHJ6sgFEuDNvEwbQKuSTtoYoDg",
  "key31": "5PyNtHm1TkjEVRnoU4e1JY5PUYGiafSxizjuRq8AL3NjJMdz11dEsvKRNTqEtE1DxJ9F4551ayLPDtUMWB6wEpFi",
  "key32": "3ZKFSwfYZFauG9wYPGSCvBb28oHWrTm2uwLyzDtmv7aFd4Hk7jkvgXJB3BNXeWBFJDNuotbiwoUPUqhJEhNc2FDu",
  "key33": "5xnCaGKMdLmwZYygqP1SD7iEUxCEbKvMc9yDNDCpqareGY6v3wvuBK6TMWtXugPQKpcxtLt1oHq4FoMAw22HV3LC",
  "key34": "3YJ3AWhxfNB6qBykDbpSdFcpabSsR7fB36KFycz79Xke1H3pSrHobZQi3kALfxWqxMWTLieUfxvWwZM34SRFS1za",
  "key35": "5RaUNYVRAYBuGTHMyBZRkgqC9e9AJwS8Ss3bJ78pAF9A5fDgxj355R49cDambmnAj5QqxB6oZEkY26fdzxmo36ES",
  "key36": "3GsBza1vs3kDk1MGxfdmokhRHEvj2Gn7U6W6BzXNE92xTZZkSkZDmADo6j6ZARQZKoejdUATPxs6ATNDfzL3w5at",
  "key37": "5w1TqcjcUYXSddZ4EnWX4YMHigVBx7aXC6cEjH7qoYbXDGAAqhCqAqyoSEVpv3mHzMjZn9sQ76oN7KnDgMNaCVm1",
  "key38": "4JachbLjuFU34RwXN7NiAwAW7feVWeVVgEoc8WhypGktbwgX38rrFhprt4ycyAMnGxHqztKSVWKbYdycF2ED9MiW",
  "key39": "36TBuMJv1u1mfi5HCwsmXm7W5DZTfD2pghZyTd13sz556XewNKFiFzpoVGb7Pmd1fhmtouwQHU7GPcs9MM6zNrwM",
  "key40": "5NevHVj85gFG9K7nXv2A7vkRNkVMJnWoy6Vqk76SFAszjGuSebT2kYEdQ8k4u8treoBTT9PjqHPMvHCNttiQCuYG",
  "key41": "3askrVgtTZnVArChS9JJGQcWRXFHGGaL7KX8Uh6RoUpM4FWNzYnw7oZxU7XFCjY8urSdbniyjqzrHUZR8X1XcXNB",
  "key42": "2V3JgD9fdJ8kJjj48ZwMsaDv7WoXE574iE9xCxgAXyGqsTw51ShrELXb72f3Rg7LqrkHSMGsevHcVnVfdV4d528b",
  "key43": "LmkhZXekpJeXuYUDjnNH383fo3XUf7DJprQhxRPvzdSSbqaLyQjPZ6MsiwZHmbogpbdZeTxNVnYMo8vTx6TaBmr",
  "key44": "4iTVNjB7uiWfyioGvBuhZV8A4jRdGPZqt1WF95NtRNEMJRntCXr8thXPCDiE7wHKmUQYmaPtQS8ussWD9zKRGeSN",
  "key45": "4HWUXLx86GpCv6UPNpJpuWMV15Wd3eY7AK8VpMX3uHRFA5LMBa5CMdTTHC2v14Kpv7VjVY98jo8ZdNnMCojWmpnh",
  "key46": "5nDJJY1CGKpps9Ky9hpqZp6jPecB4BdN3Ur4xdDx4VCp13P8zs3HmumwCrsN7pPfdgreqMremdzVWBm53k4LzWHA",
  "key47": "3p1zY9qbhPbJ2YqEJVmbh6KKrfNTMZ2fQmEDygihfUF9e4Coa1r9uBD28wYeEHMtnRGvu99iKHBVeoQC1MTP5GBM",
  "key48": "4VWn9Y19hCzyWuXad2uAQvp9xaScxzR8C3ko2dWM3Uw9UFwPRsQ3cAimrRQb2EpMASy67wqMCBoh8mKr2EfvoyEc",
  "key49": "5nYsXK2FVkXDBcHExt7UFwUFJpv6TdwesqZktWEG61MU6bknqXPYvaqK7yXxirTpysAbZamRZwj1y2BVznUsRkgd"
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
