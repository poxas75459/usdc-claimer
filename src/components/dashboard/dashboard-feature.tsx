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
    "3XhZojPU4VQDFMz9695Z6cb8d9aRhwT3gzqvmm2s6M4qa3MrnDSgf5GZeAP6FUstgVz49pqg9uMeUxRd5vA2BgNh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jinJY3zmD7MTs39KyavQDJwV5WigX53vCqq4DvQhgmUj6bEfA3qbLQdPm4bZdbcgieW1SAomdwmoJjN6Nw4gdsz",
  "key1": "5bwaQFs6JR469kYC8ZPfFXMmbeVv1gNmKhbYXnZXEGvJS1PGjGQvzAj2JrMR2j52NVDsYHN9f2UwwAGCMLcnGszn",
  "key2": "4JHcU3GRjfyYMtka21GtLKuh2dDRa7mxZSXS6vcKyiP1RdGAuWsmwkye1BECSL5XUbB9Cri6j8HQtN82jMTWJ366",
  "key3": "xyVUpkzt3aXDthW9XdVANUKknWwqh9r2hcMMqGGoaeFK1TQEzcHNuLeVjFC945JekbwwWiTMDFDWP4b1rzV7XSH",
  "key4": "n6gjAdmvozx8em1WZRXhBjTC375vrx8Fh9XcLsUxCTiGMsVH3zY7ivB26y6QmZFEfjANqU7gxGVsXQgL1fyF7y3",
  "key5": "4HM79Lo3rDYeBezZ3XsCRcc4zMc5LwQRmUTkTAwfGDZFN2VLxarErKMe7Y5TUhCJAuWBQqHdmYot5YgbWnQZzEmX",
  "key6": "4VEkyM5FRpzPXVfgM1FQispjyowKx8rwtfyEzh3X4THbRqvi87aCzwLu2qT8xpkRnXdukJvXFH9ZHAJLfL3qN1FJ",
  "key7": "b9caq5ESAr1M7xDuVyKRzUuqqC1SqYu4uPLKCUetvZw5yxyutxJhpLVNUz1tys8sQCedVmQmmAQ8Yib4ZJoXG9p",
  "key8": "3wH3hHRbKwhKuU58aeC8EckxrevpZxaBRwqBRQr7ovfRKXXLsXj7MiY9hTVa3CnKjUSpFqzCMSEMLAkTMQ53unwA",
  "key9": "4nGLdH7YkqF3SyWrY1u8hJhb9UD2o2T2Hc7crnr6qFgyXK5V9u33hJP5MG1szTWneL11RkB7qYJmkTXKrb18vT7G",
  "key10": "5Y1DQup3S4mQpGZfujAGutKq67Ecjd6W9GQWNJnUvtYeDGLzjqVt2dDV6D5xXNmqYdCW5ZS7qxzB8dwJqpDG8oi1",
  "key11": "UoEJTSY3KRTLY4V6oRMkhRScDYsx5NoWaErEXEMkdy9VeiVB9L3gCjwsY4YbZcbDmBRQ7juTacQtkRaGKyahmB7",
  "key12": "2ywoqM4J2jB4gj7SrUVLpKvQBjFhdLuccbBn6bRLuEpj2oehnRayk7AbDT8wkMjM34NiEdC7KBSHrFBzW9Bmx9Aj",
  "key13": "27AUz6TgJimCzqUWJ5bcr5EYxvMm3mgY56R8DKxpw5jhyBnxufvnKJeYe6y4xya5vCm1WvLHj6tXMAzn9VDvZbTX",
  "key14": "2CJg14ctRBHcQKXofHP3ZFBMgdhTyCX8dfQNnW7KWKVUkwVxcxpQySJsaiT74yGBSNtuh4BDJ7eFcejCm7RdVY1g",
  "key15": "4LrU2RPxSHojrNpGsPZKu8hSDjYsNpbUsRZ5MnudEAMfWEDzVsSdJV5XmSP5fSisQnFUoSUGvdGsYe8fW9nX7Gm3",
  "key16": "22ScC42UrazK4fA8TVtb97rCLgXfRRqCgaBDy2P7phchSobJi9UECENzG4rePKPyKVSMY1wLMy4sVgc41UEG72qJ",
  "key17": "2uYW6xPwnB4R3thfcz8JQqZpYvTxLRr9jbrM6PnuiTNb2buDX7sxoNsHYTF1rYi6R6A1PiwfmpEnuMjmUfL1G68W",
  "key18": "5pTFVeSwd2WGNxP6UTKyjuZqDbHeBj24ZW8e3kHA4ejBN9Ve96gadZ5jZy78VgUVn4pbyvecyLPW5fg1QCV5hjNa",
  "key19": "5sNg6kzndv4zLXhCYJeZfM9biAAMYYSAQGt9BMt6cWQXspAypUVFHcDN4H3cs4Kh5ssEgrQdaagAFS6jJhCLCpLC",
  "key20": "2DcwykxFEz6aboz1Gf7a8DzSqEe91X8kdRA6tQ3VBaG4PMErjQSZtocvHSYhEc8EdaSjkTHYDH2kgFTEqCB2CwT2",
  "key21": "65n9mT8ZF2Z8LG1qsKbo8WLmefnXtB5wDPW5DGznLTXiQQg7VwrSvrYtDboBGFcZiiYS5qt1pFyM6sjwcRznLNQJ",
  "key22": "47DX1nNnW5siTnDKn8z15WJBJRN8iKKJf7SUVhDWZuGRRz6aQv4cgoMU9YLsnzpQBwTr6zc1DPFSTSDPDy37FQyh",
  "key23": "3JNutpwewLtPF4Ztzd3w8kBsviBcgevRqkMmnrajYXRK2cGeAhPD3oKEURASvnJbm8hwBGjppQs7hBiNwqAp7DfC",
  "key24": "3VCBeRds9LP1GLxkejro12M8reBriP8P3q8yhGiUFK29BkXX37eiXqoaiSZzpf6cRXABvXWCaXWYZZfpoBbeBq9G",
  "key25": "5o6wP4sQ9jv9ua9Y8uGDya7SsbRPfRCJ3vZDLe5WvwxqmTEPaL9VWkos6AaA1L5uimChmNCQHArpFhxWWtVCpjHN",
  "key26": "3etYVzHULoVZaHcCALtAXzuVacCkDPseobcU37nKPKp5ipBfKLkp54S1fPvJWwUgAkbd4UUCZMmP4sVZTUvNXYWu",
  "key27": "3FYrYMkWbHbV4oGR3wLs6HvzvmMxTzRdh3gKBzDKoXmzEK5Cs5zpNG9abKuJoJsF2DJ2PtE5r9SGNpr4CfB8NYoU",
  "key28": "5i5xsBFHbQugu65UHDqViGMLM8arHsDJZvMzbE6oL7MAxDVQE2GDWDSRTVvut2UPBczWxxp2it3W5Nzv37Sc5VRr",
  "key29": "2xjvHiC5m8udbPs6FNZjWB3eNRv8qHRd8VQ6oviognpQMvNMTAMygSNJTsgqfjLw6i7o2sBPxp6KUR3jYfzU8Zy3",
  "key30": "5K1wfzrJUJq7YSwoyCyBcoDEX7iEpmkErQ6Kxt251EVbjE2KkmtBU2CWXufUxe8osu98iZvGdrpF4RWjdgoB6XBq",
  "key31": "5rVCLEh5kv2nscVL2uLoiMDHhk7gdVgDKHPvzLoSeiJCbbwAywJ4CLkT8BPtDoXHdvhqM5C7MduN9zQjJZKiChAk",
  "key32": "2czu4iipMbWGdiMY8g91Lzc4ZH8pYbbXzJ8GHFxSeSw9uaa82KXa3SGLg2JjEqRbqUipWiv86nvUbE4MunBsPeah",
  "key33": "5u1GsEMyLXXw8jsSX4JCGuS2eeHp5rKgtpirrXUB3JST8azy3KZa7TYQTMV2CZ1wiCbBJJf13d2AVZuJKu4TxRdg"
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
