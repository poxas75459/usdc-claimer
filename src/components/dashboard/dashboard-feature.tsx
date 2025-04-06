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
    "5F1oNsh9UcF9DoxMyoD6yDap1NBjHUkd7J6M9EhZK6H7M72JsqWQ3PnFEofNZhc5EjFM62YnzbxFYMULDeLPv2eg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5igeg8jAr4JTyZUggqwfiyJhFsgeAENiYCnUtmwLKZDKjQYhDtvQ8SYxKNSqHKQoskFnZwvnjzMXLAVeiVNEVXTY",
  "key1": "KaBe8j68VDTTGSDSdcvVXppoprHgeyD7VvXMdVayuw7vpAijntYbTtQpNGFBCNtaKSfWceSYu7x9FRpeRwRKWzg",
  "key2": "2a4kWGaRartw7GDfiA6Tyb9oquqvXYVPti4D3v1K95vSjuX6MPB4HhaRwmQkpQB2x7hgPXJz3L2ZkkkM3Z4Z3jqB",
  "key3": "3JN7paTiH7UedutFnZG2DNVGWTRFS7sc2wbtzpA6LV1Fgo25QsZUq5SfX9SAukfTgAGynQFGbjXUsfCJC8vF8k5k",
  "key4": "2geismx4Cjuoo1DYPMQ7BmjzpgRQYPvSCHFaC79MSZd4QLx4brRgcVfUwF3UnFqaTAFECdMu9JvGXjBeWDYqfrxX",
  "key5": "6KF7RqC5Gs7RPt6Eff5SRRCv6hHsPVUMme9hSf8jujyCEsQ1aqEyr8Rg9qYFrCD2YCosvqyVH1FUq3qNBYJDven",
  "key6": "5mZJ7EsdgKvzj9LpG28Yx8BRQ24mKJsM8UKRZns6G76RZc6FNx1AjcioF87oaUK8BSoER7zUQSsCeonhQfKDDJM3",
  "key7": "4W4CY8Q8s1rTneMcZ9ihFjPREdXygbFbKTKu5DhCwMEBkcoQ25ciQx3UgzZf4tedDniTHAmLnewW9CeyHfrFcoyS",
  "key8": "4jus1Vtq6EqzoFjgJgGRnNwRrL5rnntJWEQ4gKAhKCXNRcejjdMdZVkyskLeen8pZt9nELdfzwScsmQSqjix1GCb",
  "key9": "4nTiQSLGz6GGhoNpvVyBcNEzSPWtDCHqmoo16bW4MDrdVFTRjyvzNsVEnEEzNrkwybQ4S7Uf86tXBs2mTh5TkhjM",
  "key10": "4ugbaGZx4rX7G3A3wdmUZ1EF3j465o9rVYHY8LRUGqyFYhcZEZPtNmGNKWrtvf2REw3jqPwbjVQQiAARPmZMcxym",
  "key11": "4yFcuFNidXvZCtkkhb9zcE5SJZb4nuWb7gUfgAV3bTNANH2m36LnaSXXjxWSTHvbZeAxSvEkyyR2fwYbDychFDfT",
  "key12": "xJkiP1FkRPRWs2gmtRpNn4QN8kA8gYDjJLnwGrauHf9NuU9G9J76FTLiMPMdhjZE1knavp6bEcDYqv5TJmMFHRe",
  "key13": "4z78tpCPFm8tP6hq9uH6askJXf9MGsrP927fgwuJGszhDY1uLaSfsiCPtDfv2EGWxqPC7eizoW8uMjUUqjM14AGc",
  "key14": "2KvLBBWYFU8v9uR8bvTJnCpshrtewz2Rmyd7kBE6gcRcJ8VmevNYYNp9reDRx9yo68AomdSi4iKT8p9ZAEhBzKHm",
  "key15": "4gsfuop69NJ9yTfLZQ5PTSggvgWX3J5cm6KMEsr6TcrjQEvL1yUywaAZjp5zE6agSm71b8Uz2zd4xrEtnsrGv2vM",
  "key16": "5JtqSTNL8K6AaRHPeqQFJoqg56JAgQnmq93zdSvnkq3dxw119CmtxtvrEew35i8ZNVwgrH6ejKhGqhvmXyJij7ku",
  "key17": "2AbmcFHvcoXPN9g5GSbZkVsruvxmBbGHZQviHWEhE9AurrjnPgJhDTCygUWV7xgD6Yey7ChFzNhz9ifRwBv9MXc7",
  "key18": "3NfhAaR7PKsbLV8W9pjQ6nvfrJLXtwVpzbwJcqMwegtDPgsK9bpKxhC1r4XAh9bHQHWKTvKBusRu63RvMmdtme1b",
  "key19": "3mdmuJHSYUoEMCLV4PMDrF4vRAi66Te3MPzGLxaaiRKcsk1ABzUEmkzVmPMS4ZNX6itSzJW1moatPTEf3B5z7zMA",
  "key20": "64RfSUk2W51MtbaJJFq4RgREEV7vmVor7SvMytK7pejJgJU6SbrdUbC8JUpSRQv5FZcr3Rd6Cx28dZZjqTwZhSwq",
  "key21": "aXVWFZ72Xc3oWpt93xjrkXQnpf4pkpcPZ7hZGbWJ8fFdDSQmgmm7qFqQAAVfCYKi2dsqYWLB4ckgBw6i7ahzivE",
  "key22": "2xpYRKUfYdJZzNkUN3Gn3rUtd8TovAy1PE2ETMiS5F8cMZM8JFa2pfpCPeQg3jnVJiKHGNNkDQMMW2Mf434bvoa",
  "key23": "56XDHWdfjrroLQFpzyWA1JUF7H1ArwwAa5UTfpRYzMPKrsipTuBBcSmRmUwprxAUbWGuj1SSY9qVeJ8R15qw4RAE",
  "key24": "47hipuVo3CPP3BogFFLnM6Q2edaoHXDJSjjhaGp2y5weBvvm42WACYebbQkdmrX9xWjNf3e4GHpES9qnYjewVson",
  "key25": "2LCi7EDvqyjFSqJ6trG2qNV9ee5Z2WRs4axZwS72apa8M1cTaHKPoBtwfR8qWxQGu2iAZeUV6LEmTqUi1Sc1YbXN",
  "key26": "5V1rk78Z78igvtwTfs4JbXKTBLUiPWqemQd6LxTtUXuyHXYWNEdnb9vNXsv5Vd6pnbdCD3FJ37SwjpGPhD82oyGB",
  "key27": "ogkKoLTzFJF2M38SrCQNHPGTUB85J5o9Msmm6gejnfUCDf23n6GdyvHVkyBDN2TnKQLoYWxH5BYctHABw9zUVtM",
  "key28": "61eELzz8pvjvSqeHuBpLgZDwkR8dVak5joewQNrU7oGcc9wNiUeRj74sbbTWUqYpbumoz5CGjeVnBuanFKUHfSLW",
  "key29": "5S9L4gdQKeHUgFVtmCS8yHPTnTnKhsvZpDo9TGteUGx5pRQ699o5hYLuJrxhNSdXdxYhNor8d7NoqLcQjhnGtnCV",
  "key30": "3LR9QYENczfpgXn22rRb7UiQBshagkS988x7Y8URnXE4ANyazShia279MFB7cLa2NckmDMgcN915jSKCA9wrXgPB",
  "key31": "2DynKQQGmi6mJPjyAjXMjUf3T9HzBjUakAmHWMh9Tn3Rs8Sh4Pw6wgdp9e75dqj8eX2T2PSwkGxPDAnEaPszkh8x",
  "key32": "5uYqdRoEs752YNeeuVNRyhGTYaqxGSwaYh7JY55j5Z4sc1SYjxPvgfAZEkHCZUogrxPAf9mwajRcAt3wEQouguEA",
  "key33": "2vzbaRRkgojgrjFLx9zoyTrcSrHrjhCWnXZTkEfFV3Mwb6oh6VhRMQF7xxsKSAYCy39479xFa4fkUWMzSNhhdPRS",
  "key34": "5jKiPv1oULrzTjbYqSHb5QXcLYdFukPchmKs6KvyjBLr4rP9XrMB9KVSnH9AxYcV1a2RNbtKkqvhUXuHDzzS7k7r",
  "key35": "4PWGxwk3j8UspSJ8rFVBY3tKunY1CbDkVNCMhrTXY7nEiaMwN1jRBsQYw3tnBF77S3Cx3JrvPco3hicrFaiNXJE1"
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
