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
    "5FJEQpTAaE9Nh4GAjwUbLdEQhjzg9dQunwqZnBnuvu9oTNPD6sVB7qvjfUKmcEtNyBZtpTTvbbqrJrWrkHiviYKe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VoLAjh2QZrdqPBd3RXxVSPXjYoJba7c8kR6y7yWUHUuuPBwb29PrUbefZMdDGPyUtJ14sdLBuDBav4FEwLMJWHb",
  "key1": "52UQeJ2BAZAsCXdxye8VDhTC9pWc3egDTXnas3sAxtvWVRrJAm9GoDGeyPq5cAVBEmzZuoAfgoxWdDpXq7mvTt9Q",
  "key2": "6d7qbtJayswrAtmzB8p3UjS7hLP4fSoMmK4EjteLdFZbUy3i1tzxxqLcxn2Kn3BsRzCBVxZm3cAqGAxijjscSxY",
  "key3": "4edrBx5UMHzTkRS1cpRzhN2nhYJFGTLfCe65xgYgAS4K7jkgbFkq4LDjXHqXfwCvFWwyALrWbfcSuAAyry9gVnga",
  "key4": "4EC1QXF8C9efv2XhTMUHnQKjXXJr7tMKvArGwhZ2YHP2QoGLAnzEfbvzxGoGhaDrcipyL8wJXGUAfiXCo2BGMcQe",
  "key5": "2EwVtePS7omkyV41QWhoKsout2Kj9vgZYWgQ8rPCgymE8RJYLexF1VSMeC7oJJqjGUB4Qc5UtfT1LB4YGEFN6VTS",
  "key6": "4BSPVVEqPMYpvNmKxZCWyWndpqwqmU3EsX5EuUzs5BqEBwCCLtGatzAZZaJoHJMfJHXLjNCShTy5kJt6zEjPsXc4",
  "key7": "bN4X9AxaEkPQCY5hJyLU6dHdYzGXrEAuJLzAbkSkA3P1yoYMsaU3PhGBrxffaW5i8QAkq9cxxV7B76VULsU8iyc",
  "key8": "2JWZsBrpPYpEhDFNtmwZX9Z2QENNwrLiCM7Hk3wzaD7jeKjQP8zcDfmLU4xZUcext7iVCAbPc7rmdtR1nfPEo1UE",
  "key9": "3nwaXrGMNKJBwkGKF7YmYhiNaLaKD2q4KfPkUFvYT859DDhYbH6QnfUUDu6DgccxPqCCZD8qQo5Ksat153koA17g",
  "key10": "FHSBJiRobeN36w28yuQ9e7xocX2iLe4HvvfshaDgQRbKTNaoHWTYvHgFBhkydvbqoAHF2yYA5iDTt1CjwAUvBJV",
  "key11": "2TKWTaHHQ7bn1VLhX6VPsngt5kvZZ24oVdSCPgtTqxn3gAPqPLCAMiBieTxTLpbGuN1jPuwydnRpMaY4aQJssvjs",
  "key12": "5sRSiot9vxSE98S15gMTq9kuHokhYB4tg4Uqmdens7D1zbLePjHkqeNJsYwkCN56ssAS8uHvokpGAVffk7nimCWB",
  "key13": "3SeUPXVMFKvZdFiuZ43FG12cGebRemScxFeLf4dE1TLg9hBbnoqsd6PkZLzJbsAma6kKtzCztdvpQnhyLyErDHPB",
  "key14": "KpzAzpQX857MM7AaaaqTStaf3BHLP3rQ5vsuwN1fcPBmY8p4e1v8iwLqrespzDZboS561iqiwSx9yNhfpMwb8BG",
  "key15": "2c8A5R5ryd66Kdqm9e9s2uhFaSGAiA3ymrmT4BwgBKrxXJVYbuJ2tnjUwEwWn8QNg2i4EP7SiSBa1PkZNR5EGpou",
  "key16": "27daj6LUQGX7BZNFxkpvzucDf3jN7Cosgw5NEDgE5bJ9u84kdRTVzKvEnW8CHY5uSmbhUCR9aTrWJbxK8kAyc1eY",
  "key17": "3wWAfuTuqcrTps9DJTRxfbCKzLtPsLfCZ69AdoRoqQTPhfcXJ5Yx1BeA5SH8vuMiFP8MyDPhK2Ko5ikfpX6GirA9",
  "key18": "5wdvE2VMQjVMfiWjjJCKjgqyx84BqzdLL3SmReHEzknPJuC2nLFm2zSYE4n7nPCF61J5R4trijEbUAhzBssxs58Y",
  "key19": "ZHwsoqo34XM1CcDBPvEzMjUMcrh4Bxt8rpvmwPb4cwT5Px2ziWaCE5isnSVCYDzGezWuHbeh2W2HKGergFXx5TR",
  "key20": "2FkZHKGzQapBmUM7wbq2zecN1bynXVzx6vnKAehr7hcdisPxXk9HDK9Rc3xk115txQcuE89pxasuLtHfvVpzL9Ji",
  "key21": "2WWPifRpQiAC3xHZ9aPJDpkM26ah8giu3FJLRznqc9PDKEaHSpMAcKhycM5yCbmakgmK56oE1pow8ZdzQf8zjaLv",
  "key22": "62KCs2n3jjeev4dWRjWyHTgvw2CyAwHRgvg8KwmWNbUTUYx6RwdeAPzbjShpVpAYriWDAY9FJHt8R4kAoV6vCKyk",
  "key23": "5QdrGuywwngj4zZqFyAjQmyV2dwMzbryPnXEgq43fByLRtbujsw7AAL7utNCZLWLtjVpfWT2TXBmXk3joG673rQe",
  "key24": "RDJfJjGejGsy4ndV1oh2g2fgU7SNT63gxnqTsG4yo17PCQhXtYuXKNQfDGJscVmmfp2pMtSydUtexFFo75qQwJj",
  "key25": "5WrZyNBgfTQdiYeKU9cA16eMHCyfy9QuUyMUGuyqdnhREQt67yJe4ZGQzQPax3vGhUsXmEVcaJiWM1k631xUqmnD",
  "key26": "59yVAmwUpU732QK4dq9WbjcBSBU2fGJvkCuS7josHFYJkaQQ2LnhJajSjyP6wnLsxT8E88guix6RZzKvrKTvE6SZ",
  "key27": "3jH7W5dNSSWkEMTDFDLSndC6o72gnGS9yuaSiKbXvVrXDfqoRFJyvC7GJWrEDfnC64rxMABHqKy2Vd1rHZSK16tN",
  "key28": "39pMJ1NLbHHUz81wpq4CmndXFRUCQyrRqFdVXaMepzcCJnCoUaw4PRTLjEg4JSkCwy9imnW1mKxyYxXqUbSs3urK",
  "key29": "63TPBAbCrwEjWTptmCWi5jn7tq6qw71Ggmi6tRjNm6oTGepLrADW9Aartaeu2MtXfKjTkrhrYfvwbfqBSP6P117T",
  "key30": "ngcLWzXhNipQ7e6CKR5dNXk93NfvjAGBc9kktPANSTD6dXqm2xKLDsxGBgy3LeteCP1CwKytbVEVHXJpKVXHbmJ",
  "key31": "3atzLGoesQKvznw56Nq5aMrS9xqqKEFWGFkgkf3JLT58JZDmBcbMi2gfPaX6pTBPMw4838h5TYXLmqpsTr26E5Wg",
  "key32": "3pJCerDVuuw2y2iT68MiPv6bFoFbLnY5VgAsYkNFveX3TYs9DE8nfz8HfvaNisiXRgL427zQ6QyH4CAwtGKYVw8T",
  "key33": "24ehDKBajCbfmyhTEFZBYaXGHpjBC1ArTk8PkaK98BVa3SHhqSgbjmiMaWkPwWDLYnDDwFJWub1FA3Ckb1sqwkUf",
  "key34": "6qjP3S7rhvrnDNioHKYpcwaGBUc5fmMmArtVtszU47SK7iBX5EJNYo5rBFuMNLefPf3woWnfnYtyAHy1pQPvLuK",
  "key35": "PB9cMk2rxGgzzxatDGQmA6FRe5kbJz67PtfP9aHdUxBdXL2mZwEoWRp9BWnub68X8Z3B4roCQuG478DFJL5YZNN"
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
