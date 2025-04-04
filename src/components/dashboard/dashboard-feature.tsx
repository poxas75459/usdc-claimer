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
    "2mTgX4vSX5NMbqFTMNrLNtrKgQhd1uxX1tomBQ8HJAVP6aLK76pyGZwBtUskZNha8i6tVHqgWfU6QYpws23RCDqE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bnvxsTopQKEYURvZRzGfwNQ1CfVNvh9fUYhMDUmMdmXrfeJDa39EqCbj3gyM3nTBBjnJ7whqHAGBakMXpfJpRNj",
  "key1": "4EKgyzU21BF5nHwwHk2Mqy29EsJuAMM34J18JKAia179D4uTFd43HyGGr5psRrdNqAuTsVuah4mYsEiJ1e1cciPJ",
  "key2": "3TYnW2hEeaF8shNrfEum47crwF3qLV11MfkvThxN6rqXs4pr54PusSzAsJohmggnAwTM1W3Ltyt8Vm2mczmHATpu",
  "key3": "2kxGcX3KFeozNCmJLYz4Pfo8cD3c8qkJDQw5iPgcLdjLSbUmD2XPpVyn1gLmxqLzVixVEfA4hVyLdwo2Fsnffj1v",
  "key4": "4gCfMBKxaRGfvQ9QVngNzxYtm2opLNxGcMGtVWHnyzc71t2BWxG211NdpV652vvaueg1fHoteye7kqxLUFfV8oZt",
  "key5": "5ES5DTAu4ioAeCogQMcFZbfaj7ZyrVrSfWGxzTwwaX9Cip2iHoRrcXi6zafrxsm54SDDKV7Xn3T22AVpC45mt5ht",
  "key6": "2xubMcEGGVztdDazXhrZBzPG84TZzqMP4VmhtjHjpzZJxuMhWvpc7cnHN7bRrhc45rBeMW8NbsncZRfih21Sf28z",
  "key7": "3tVnwPdFSBAUy44vasuiqcHJBKM2sJx7SPoeBGLDD3QK4U4k9x2qYSGFzSWmo2uKumAzHMZqGAsw7oHuwuspFNN4",
  "key8": "22HWTsWMcMCJgfpTXwaq1hrNGPVbukzKhFgccxp9ivW7aFAPPApKcMUTv6iyzrc9r812pLpRqffD57s941vE6PgS",
  "key9": "2Tg54Md8uovAGNFgWEB2e1TLgQ8dgY8HJhY2P1aFiP26YvfrhT488Mgetk8xZyo3ZfrvfpzLLV1gvGAA1g5UWwyg",
  "key10": "2kiLecB31eEs4y2fGPkbvyonKnoadPwD8ZN1RzsJvuELJCCWpu2oXj6fGmTZsKizMUDBGSKLNaNxDynKb5KzX13P",
  "key11": "2h6gqgQ2XYVZq3TFm6sahyMxNU7oRi1EqYBM3uWpbKAryHz4Y7XCGLLVyiMrXU6vQV6jezfeY5jrtQs1kWDSp763",
  "key12": "3igRt44uayUXasFReCpKsnaAvFKV7Kix2qgZGjfTkapm8xjr5uNVAB7zdzHoFDyNXBk7gh1YTtRjkh1mzEJB1zBt",
  "key13": "3RVVwxmsKPRwQZkXdwER4TtRJuwfyaoxSN2BJEjAjk7zQQtMdQMD3fLH1WkkWoCHaDDHSiVkhNuD7UdS3sT59xV3",
  "key14": "5RRbc2ZC5VNFo7tYUQ5oAhj9ypSzwoPtKpc3cWhnY9HEaa2ygWXSg3ZBJp7xMwYY4BJuu4xmQoMWdLmtuz1szXzb",
  "key15": "5LUwRhJ5o8FRYYnuWwUM6R3rYCtsRf6uaNgp2oF9mswFniQw9hvT8YCPuSD7D8eUr595e8He3u2S91BNYufvgCxn",
  "key16": "2j97RHmXYBbZkXa5VaRaNUnTW543aBokjuGJt7jyaCEH61tg1Nsyr8W894h6bmuw3wUz9iqHqP28SjLqg5rrpyvv",
  "key17": "qWcLZ8bSc4KjUzNtuGwKYiq9gunYb2kbu7GoBjz6ASBXmNYKSo6j8GTNdvDmxEPuUm6F3p3c3NzQSFQi4P1vXzN",
  "key18": "4zpdQbDYD5iQ61u4XqwWXvo6QX5CK8KJEjQuio1W5LQ5gREp9ersvQYByMpVaDSBv6V9NBNnZxWKdrp216mDPQaJ",
  "key19": "cwBxSo8z2Mxtza1Nnr1zLpLdUjt2K4kZNXHGTcDNAtzXiwsChT6HL4Wat6yN5hAQjymqHPBD2UPeSUWpXjkHp7s",
  "key20": "43Au85ah85VVcLEHduNBym2BqdPhyex7nCTQsFr1zszz88GqqUp65Ncupwsgsd99RdeKzr3bU1NC8E74L87U9NA1",
  "key21": "24e3yjCNkyAJKb8eM1bpZqWWbYsMSCSQVveRHDhoXtanZjT6aR87CG4G1erqk7zD68ZjL56atQgLyiiasdTpq6Fw",
  "key22": "3YEw1t6CXSoiaacQvc5vFG1rJLefer5BT4DMc6JrqF9TAnRc7YHuwDQ1FY62gLg25bQuEvX14E7y6MJpuTX6be29",
  "key23": "2vXyujS4Ehze8oUQrsz3sBiYmq1N6HmFqvGfzo7mzwFqFDZdu1vYm6GXRvh7VAm4GCjP2PysbvP5kVPHSZCVC8Js",
  "key24": "67YrmX5suv3AbriU8XZwDUQFYsgpcShy6Az7obefxFVv7sxHrJCyA4VyuEJ3KWXKJs4oMxJQpU6Au8L2BmXhrKJQ",
  "key25": "3o8E32nZ96AjMvg33NhqtMnUduiUMyQziSjcwCtHhQtve1DT5JDrmiTKAvDRfArCq5irEUQBUcezK9NC9xEyQR9r",
  "key26": "2mM7Zj4xuEhqDFPFQ1NtTmuUtjnZxqawaBnfGAyJUfDcdHkZqNDmAFZZMREYMom9MN3EJdXUaJdHCmQiZsdXBeMF",
  "key27": "vD5tg2ovWuCSNvkxtVLcoci9973ktQWhqnpDRSykAjHPL5XoDsE6xh2oT9UkbHouEgfjo3Ehn5ZojYdyKw6gKPm",
  "key28": "8MN44KwUouiCuNscC1UFgCQpXmbdn7LeNMcY9RqeVf3oGYrxj1fZUFcGpk8abnxKEpqd4fFBnKx4Vw9eUvY2Jhw",
  "key29": "5gpaHsewwUn4XeCi8dz988tKVXrDNbzDaktXCKjVJeFEMPP7LMknUwjjcyP1jihjAHRdkvqVnLyQv3SyJoyWnLnk",
  "key30": "4776Sujq7VU3nJBbp3xfMkw6HQvRKTJWDNieWW7oYkZXTsTw3gULJ5eXKdyhxVLacGYqZJZ3NpQGjmEnGfp7WbrW",
  "key31": "5ZRWktu9FYChoDRG1UnsqqU8iCCnPmJWgf75NfCQdURhgfJPaU3mfCNNtT6c1TwHv5skkemmBse77vv5Ctc3dFUU",
  "key32": "3b9VhYxqaPKfyo5PL6jq4H54QWTSoL2hcuiFfTwUA3FGq9YM9UyW6mvrouSPY22PKq2qp1vd3xiX73As4raEkARC",
  "key33": "5cTAUyLXrRLFz4osACFvDyJb5UsYjZ17EC52yu7QH6ta7Z1JfdybatBFzeuA4RzZrAXtUKHQ3wRGJCeXmryjUZJE",
  "key34": "42gxje8UcZYBCozpokhFtGLxUezoGjN1enzX7B9YcNVhsrGh61S2GLqHPosnZAu9SAyftUVG98tSf1s3asDSpHXv",
  "key35": "ycMh2ABtEK6LVRiozhBNzLBsQCQYgaYGX8bYE5tkWohXqa66hdSJg7a3HzyvdJPanSru5s5AZdYu16aEczzcL2N",
  "key36": "2iSFeYh94VvQ2vVwueLF4H9h2oiCxQXXVXWnfM3t2YiXYk2RjHuu9jnbCAYgWfhL9WJk68A4NYshkQNYFUXKKush",
  "key37": "56BEEQT6437YBhr3z1izpEYYFwvMmJsTqaCGtVVFCNTPGGzoahBZXW9xUkjYstJetAFHZyuDtSwHKNhHsiRjUpDA",
  "key38": "4xM9V71ijRgVyMwNp6rADUzUEM15pXNkoojsYuqmuZFnSYgZs2Gz4Ba3u1dqs97Vr3tLAq6QbxfZG8YCZZuHLUN",
  "key39": "5etrvhSMYUoEDDhsegRzGL66AhiBVyLZq5qgkhunH64NbnFNU6Yjxn5tQa2rZ8yxTZkTwv2LDQR37XhbQdbHbvuh",
  "key40": "3fXVhbos5naYgLUEzsk7YC37euMwvBvdydmqaNEH8Dqw5NzQaUPiGq9kiv9qQ68rqkVAZcHyBcY4sZ8QAkjRARgq"
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
