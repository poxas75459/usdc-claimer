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
    "FnErkvWSZJnFi2U5CuKuG7G7TehRxr12eByQiLHjVjHNNZ1HZQLrjDD74d3cdoePZ6AYZg61X7ESTQTZgbeaoqD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6478tTLJUwDzFsfzkFVfcrbrJVgjTt1ogK3DNtL3QHuxFxb2yLYodsVSvDjCNbM9girTp8sGp2osoeb5oy6SJAaQ",
  "key1": "4S2XKFLgGwS7yr8qD1pp5gG2YRLnZ8HoLYJ5HwGs8jWs85KZUV8YNDEQRMHH5v5Z228cHQNmhfdv5VXFZMen7XFW",
  "key2": "4hGsGBVaW2xHuSkiJuNdgY5FRJ8iS5XsdASn4YMgHmk3kQsJAjoZZuM11pMBZvp1FrhESW71LvweU6t1YvKye93n",
  "key3": "Z35sg2397HtNWhxVTwgjLjXEduwnwMMABMcZQvv798j4UkQf6vi8sB7MnmG5GbSoFXyCmxiHaTo3iha48rrQuYJ",
  "key4": "2wRzWcWgRQ8gBMtjbQpckxpfurnqxP5WwpZCjZzkY6v3VUQetw16SwQsmrhgm3MZm2aN6wdeYo9CaoMJqtWr23iu",
  "key5": "5GVim7uTwHLYYy8RRVxUPzPLbDiDny8wb529ChdACYL1rZbkkPjdCVBh1dJVxJ5HxpSkRD4f39fcsB7hGjLBfW8E",
  "key6": "EsV75rpxZAuQcmc3dtZjRcC59Yaz6jAFPwovuQ8ero28Gg2Rw12GPdcj49ZaJtQhK6uUNGAGwyXa2Nm7Dqsm5iZ",
  "key7": "49ArznpCAxUij7y4UTjEwkm89gFwMGRBDjKk3w65uZ2a1HjzThRrKHwg6y868HMxdSG7Rb1rstG7vgJJNrUvaiaZ",
  "key8": "3NHJQm425ZigBSywpUAAJchK21v8HPg3JBGXWKX3mrVLER5yT85uJ1DBespHqpxpApBuVZYEr8Lcgop13pbfSABJ",
  "key9": "3Af1PKJCLFN1PvPZkrjjWh7HeMuGEs3LqYQQzGm9yMbU18fayukwKng9cAqcBxfnm38z6VqoD8EPty6Ug3hY9B1v",
  "key10": "3cQTQGPAGqPiUr5MLVpzBB6DpJcdCR1thfNDJmaxdYMJcK3aSNA1KJK27YKzzUzLXHJjxkCvDL9Jwvsv3LmhxfJ2",
  "key11": "5vhNrCQpKFMqbesmev1Hru58eWmkGC1bb4xAZzRCaxU99E7XfrVRYiyeAdv9atTX1h1GLcfsNaxT6KW1aAHTQBCi",
  "key12": "25HdpAit11q2cdJFg7QnMd36AaSdyKMYjLv2sxLQa4zEaVx4mSauxhtM3eEbZ223Gj4o5REcmwoMzTEE8PtfsyKb",
  "key13": "5bSBJdPAkT6ToPx8wqWkqWJxm1GHg16pRGYvHMJMjURwehrjj1Vz4NDJidhYa6n7X31xU4XUrhvY3BndqGQLKZ9p",
  "key14": "3D9XVxNAs1d3ASa33u6vAy4HxRhBGD4yJEKSc1MJmgLhZhf2qJwRwWDr7ZVZrQ3716Jxe5w3nQhSywc94HzLqW4G",
  "key15": "3Yn4kVcTph91Y26ZQSrtbigntjNrVxGeubHL9eLDgkt2wBz39tduJRV8d48NB73BPevdF9NNYNcT8vmkvoCBwVff",
  "key16": "VpKDy88T4xRiFLBRi1wXH4m5h6GyadHq8SmQpMECGdqPwjKj28fFu26byLoadouNF1PC9YYouXw3JvHXrgddC3S",
  "key17": "25U9tH2djqvHoKQa43EqFjM8R7V8S6s66aj9DB8FDKi7ZpPxtKi2BiGTeKUDs7aj3jX9qo9eU9cj6bdtKPhGxBkA",
  "key18": "3s4qSS83j6SWhEzeQ5HuceLhyRKoKjD1BsSBPumCdiFkjoWZXk5qievrnQwa4Z1kXbp6L4jaFsGd9An2w847PCzF",
  "key19": "5DgM6XboebWmvJeLRSGWWJKW8decu3sE1cnArfSWaZc1A3AGP1gMKnMG26NdmbrMXAi6HC1boMRKGHzt7vYnZrqx",
  "key20": "BixaPwT5RxnAEfFVSNxhperPm62BCp9hQYtDSKdkAdSewTLoMByrfghnHL4tHUxP92R4HvZfyaCUNGzWghnC8mp",
  "key21": "5rsh6sWchEuuaD5uBmZyQRRngFBJ7U7EaxJ8SQybkMCryTHTVDtXcZCya2AKL9aJurhJRLVHRrVFQXAcK8PWcfp9",
  "key22": "2kCzoM61Kgn6HnRwt7bEat1Ge9nMJtxWPzn6MYgT6Zi6EfjhMmTbU9Bh5NULvhzyPPUaABBSxRSx1t1qGwFDLT1A",
  "key23": "yKWasbJTPkVd7PEZmU175ToiyMZ3GLTowsvAW9o6ewcHzrcGy2cu9zTUBJwBHtzUmvhjqrxfKvSHYXx19ZsFeLB",
  "key24": "3MBC2g854pT4hqip7ipqm8LvwetrZkUaPiE2cpJrFLAn8vkyKnhBMMxNYdx1Ct7SK8muYZvorH5ddh62Zw1Un73s",
  "key25": "4MXBM1vMr8QHMprRbxxGowZKBNTtX85c59RC1oWzV1EtCb1YcUVGmQsptoojsy5D1wWUb1T7h1jUDefYw3QZLkP7",
  "key26": "4NZ4M1uz79fcxPip8WAmcQjSg8LhdRCRCdWufGnqUjVdB4tynkRri1MJrra6wTGUFWiqqzw4yxfA6Vwe4xPQpSB4",
  "key27": "R2S9zkjPui9jdzg6DxErFsehC4AyBFsjHLDqVEWKTXLrr9cm9K2AFZcWUK1uwRc3fbV1L1zoVZ3ChPZHeiaEf2d",
  "key28": "2TTbSJPqfH7d3VmNzgLccZBAhocdduN5GV4xr8g2uABomsr1m1tbNs28z2H4JqKZQD9jUC8HEGpGJgpfMiZVQrrB",
  "key29": "3asf9Jn7XSud7hR88FcKzc21oG7iLMCKpKqK1WjNYNPsUK1c15cVeF6P9g85DaeD4911HEFe3fqQj1HhaJ2ZdGSj",
  "key30": "5njtYzRFwjrA1vc844K65yg1KZiq9z4E7wQKF9jTK5aB77mU9y1hM7FGQqYLbAX2BzbxJHjkFNg7EJFdRHQa4a3o",
  "key31": "2ceMnJtnTxbvrR5sekACjMmvt7iM5iqRm6QKLPRBDu1c3ciphgUavNPgDxB7Rwyf8FnFano3ZH1dLrxpmaCcEuSj",
  "key32": "2YutogFxU6mfuFSgoa7XQ38YpMdoM8DidU7rrXpEu9FTR9dFLHnxNAKwWPs7wh96kFsDrguR7rdRPKx9Y8VYZRMY",
  "key33": "449fLFXCELBgJUhzy7aLaDMmcYf4pQhjC8HdT2dbYob9bjos3rM9JyKbYMuzw2tnLiGUV9t88oRtSZLkQ2jbjJpq",
  "key34": "3XHpeCbE9nKjxgSYRWZ2W8oXZn3WMtbcoVgPAU4d4XGh7gRLRk3KmcZyeTMZtbzFJ4Eexvjh562rpPFV7i1t92Fi",
  "key35": "4KFWXEEJ9xW4WcwGUHb9cwYjDGRuXQs4p8EepLod7MtXaTGEMwgs3zNMRMhKfkEgaz5CZBtoNTheG6miJ4fgckYg",
  "key36": "65FHyYG5PTUQf4srTpK1Jqg48GvygRZXezuoH42PnfC2AHXPExqTv6ggp43fhHRtDdzTgvnPeZGWccxjP5Y9cHRv",
  "key37": "3MWG1BcgAHh9x7WYexNYq4WCzYpsEvfQaiSWV5482Rmg9mgWhSPPYLdjWgvdmw9BRbKbYTvd8yCjUfvmNxc5T9gL",
  "key38": "64HbZiRxPL97qpRphiPGoS4F9TxhaLqjrSyfkwsmxkQ6HymhjxiWR9ekV6vBqrKABtPAk3BCeUrn4HccggGsjoJ4",
  "key39": "4PnS5prPfZ73ccwhregowthtQXL7wQqRJ6co5EouroEKtQYcwtos789NJVHg5oFUKnSwuhEk1fuFGGqWwEWpdxuf",
  "key40": "zPKcd6PA3KZNoCg2c33Z4jpWx2344ixm6pRuMXf84jfMk6qSyAkmhfe6pNGEptgeNcqYEYVa5uiGpJhF2hbnAwf",
  "key41": "3uYH5MjjZ1TdTyTDfqUVd9T5a3Hm8jon7SRpTHYobQ1hENGKGGukQiY7A6cGXFSPUFxv6JBajmShaAnxJJSDq6Se",
  "key42": "4fyToq8KP2q2w2psXNmd49GKpcn9w8LTQCrsXtxVZUbsjdYP9Kr6qfPoqtB9nsmhaBAY8sX7FA6adVjGZqqQJX1c"
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
