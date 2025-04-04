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
    "4D7ttdYrUzinSPqDCq83V2kRJHjtsxodFrdcFwrrSqVGcgNnWFMEkdCm5vxWRVRr2bVpUVKYfkdY5Pihs2wNnJdF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pu44c4jdzHHqC13GKsyNo4ocDXtxbKn52PQeET1h22om6PQ2HvXkzj85y5PVKT5QqdNM3Us5Z5Wj1J5W3gAQbps",
  "key1": "4E4BzSFBqz58gBwUU4EtJnFDwESsKKRsmgRjnh8ToNBjKnVqYcVi9QDkWFh8BGHKbN35FbRWKWJvs5MByZGMRwRR",
  "key2": "5CJVHvx6RdzX7ydNokKtwK71Yc8ccBZsCQNe5hcD75X4FzzsByvkD4LjYfPSPZVzgEos8GsBD99mnYAsHZQnk5AD",
  "key3": "5NeZ8n2fM7HTBWxNKPsFECDVW8Caf7HCCXdVsAm3AJpAHX476oEQpFuZQXKszCV4SF7YK1HvzgjakPfbyu4pA4hD",
  "key4": "5jcjvjbCk4CMucFWmvsLZR3uV7eF2rQtvQ6iFdux93hXZt7aLLAPVUzFTJBvP2kMbFEvZdKDfoumGvzHDstQutRz",
  "key5": "4rP8LqMRfECS84nFjEgEbd9eDDwEKTzsFpZWUswZidecur75TCjyq9VgBcHVj9rVYQ9hyXNuXxTP9zE3r2ZFy7bK",
  "key6": "3J7LPqdasLQe5tGNQmV7rZTctz4zCUh7K4vE9SHkE1eUCcPjjSTLFJyLuyk5zzG1XMFPDCbHme6uaaCAkbBXLwY2",
  "key7": "4zBPkWSjkXhyuvqzJfYoyZANvdh8RuHq7rbHMNSfjhJPkG4HC5VZ5wfQJtty7NwUZZeFMX4XWToDTGW9W1QdgdBq",
  "key8": "beEm7XG4VaV6pKqbTdCnMnDdutfC9yUCYSEmYJra4JUNiWqQfx9ca5fXHq27jw2AiUvS3zJUdcwTqsCAaenCb3v",
  "key9": "hAFt2RWWVbKRRw82NgSHJWSrNR5aZujxS9aVP2eurJc6zRYZW5ZAmEuz81xQiGSS6HQMbGj87pChkQa6jUMvjDe",
  "key10": "3m8SxqjgouYNMQrPLW81mWUjPMGGEbxVDG2Ji6hvKJEZj6FypcKr5fMfsfkFWuDAeZ4n2CyDLrgHtK89YkDzxJH6",
  "key11": "2g3HVG6QPkEZfiQbt2BbZ4hzFVyPp7heEdX1c16ttVnnmwc1ZjxTfSA6xbpWvdosYfVbFEDj8LTkWV9Lrg7zjRkf",
  "key12": "4W7caXyQnmPHB7vrgjvTu9wvqJ9XEmsSPrQFM7DeDT7fsYUDNNEKiciedVPNpyw5H3hq7AHTpSVEo7dYvVRYPJfR",
  "key13": "3134Gk5riBQyQNPxNjPAC5YpsddmzfGA79gAtMqiemD7WVhsxn7d7BZNxhfstT6SVh3NYbQ8EPHhStsfc8ouiXhC",
  "key14": "5VpLwuJfGDAX9rvSoyA4etn8znecekinFAT3Ey3dxUXYWKPmcco3BaxCUuYr65fsGChVrpBM5rtaHnjBTUNJhism",
  "key15": "2sP87ogeVxp8dbNL8yDhZw4gyrGtbU3Gs2bxvnGskJ18zh14mvLxQjrCdsWBbYHnTiAaCErGcKS3rHyMMMPtW3dM",
  "key16": "25EFnns1V9yWupebuN3EBhVjgx2edLhdzwxLsMzs6PqsCHvu3t6GTdEL4YGsqYEj7RSU3oieZiSkfbjwBBKH5HDS",
  "key17": "59XC4ucHTcwDqyUBpuPsL1U53nUsvCairQo5ywWzL267NLudBUHThDsvWd5TzxQQGLhQxFmEPpXfc1t1nrvzsS74",
  "key18": "3NGojadXVa5sxunWEenmEyrVVBv7PNNrCSrTJWDwXjdbFGxs4FbVbkVkbAR35gY8hkfJc6eoPFEk7opfdzVBnAoz",
  "key19": "48YLbxjEFUKPwh9SXcEkftN2coecgb2SEtXaMYNB5PYDwZb5GLSLppYmN8K5LN3XeghnEYfFsNpsyS697nJVRDER",
  "key20": "2Jk9hxFrCNdnQcTH4zwn9DRbSCBk6ViDz3BGjav52vpsaawjRpfBdEcdqqLVX3oxaeR75ZSGuHoNYc2JuWFFPM2g",
  "key21": "2RSnQeVndhDwJdQPabqwkgpQ9PLjUwfsVq5FPXCW6JoLpgjms8CKFwo44ZDZPhVjmtKHLnbTswSnQSJBLNFPQGLn",
  "key22": "2beu79Vmt3sc9GtWLJ7vRiTXmWt8ABVa4FaYi6qp21tBrci7KsybWFTbz9og3d5KaXsY3X2ed3CJiP9Yv1mWfo9F",
  "key23": "37MkERzLffgSx1B3F4PYy1YmSVH7ZvywgFdPauTTq41Hbxa1JdK1GkDkNVk1nouuuHuKcjf9s1QY3V4tLdL6N3Fg",
  "key24": "5DWgFYQweXF6ugUTYrXagEsb5idYPHBVt6ScA9DUsTwqwDMJy43ni6GeJGcjbgMxNcobk8kLQBJWxutB15ioAvZf",
  "key25": "4nTVb9Hac8hEbRcdTyzr42f1Zq58zjA8gZLqAsWUZJ1kseXHqHuTcPv5ZHJkkCdkayLhsEe9FBsNj1Pa3t7J2bdP",
  "key26": "48JooTs1GRmoXYz2KGGnUghxDbApG2apkjEk1eaPxSZ7K1PmwBDCo9Pas3CyKWbB6P4BFTPRW8Lb7YMSSintsLDk",
  "key27": "aQ8n8bS7MhnXKYSfZHX62jVMJaJZcdqPJXVQY6io7hmqaFLuJVu1uDuGQgW5j3f7VTftFLEEdxCGTFAdNiyLvmt",
  "key28": "4Udtj99YQA6bRgR9r6MirVxEomLtGeWDoT6jtUPFSqoLpvaGyzzRuS5ZD6Pg7C6aTBGxpPTUWUyxHpNyjK5tnSDH",
  "key29": "42wD1fRnFz8RJkYV1VWvcF9mH7a75hPfTGSRfRGZfoTwJvNuZAQ5N1tBvaSQ2EHuv5XiL1m2iAeXsSs4umxXe1Jd",
  "key30": "5JyxsGQBCJwqjEDLAMLvMN4evmz7Mc3KX2N9zX75asfZyv3fN5t8YQnX9tqD3vw9FjLQVRUmWeTQhgZZWNuYmBky",
  "key31": "3yqqHf5jHuhbC1wJuAgtCb3eZa6w9Rfauzf8BZ8KUfwhbutwr6ZFQy7Kwd8sqVFmRw7kPecQ4ZLZBS2VP6vcJRvZ",
  "key32": "5J6aQXEZgg4ix4AauwNmTDQUgAb8kM2NyJdAuxDFhawMSNxSShsLN8VhTd4L8QEisQr1SwgTDTHAoCg5NKGj6RS5",
  "key33": "2LTrJ5L5HWwNp19BzSUPNqxWi7ehmvwgJ77onXVHmqwVNbXKiPEQq9dMDzmfPN8uh1ERZuA4TCpaj3SZfrtFm9qY",
  "key34": "5wKWHtPMKGTYftiABRdcXV7zqW4gNkdrnUJvG5SD5ZRYxsWcEjKAYbTtivKV3Kkn6S3kYBey3ztzQPZ8GHZq3H9i",
  "key35": "4vQDkjd3QxbWCnBV7SKkk62TdREYn4Aq3WkzJwuzAG7vBYM8Eev7SXTXhnZ7py5iXXnWAmhC67e9W5NBwNoA1GLk",
  "key36": "5fNYDvNe7jMV8n3mNX4aWexkRewXquRkWBpDMmbyG2JBD8iwk5aiucddcsFuQHUkrNdnQwQBCCbRwJH24QeA4bwA",
  "key37": "3MvApcPP2Laqs1XYL8oEfdCgssbkkMaQx8JXzb9JY8nZbTaCCvA1YGuZFqUcRt7wLVyQfBFYTcz2wPk4XYLaz7ec",
  "key38": "538rYvK3h2X7zNF4tZqQ9itVwRBfQqKVoGMGWBmJSBCS8SJVe2sDm2rpfgVqPXykc4DHG3HjnENVLWacxruFHLQc",
  "key39": "3ZtjWPBia6bKqVGxC5gviegsNevxvESE9Pg3N7JRwSc5pQvS8kXVko7UKNbWUbik4cv6XHmWJiBdWYNZLSRVJurL",
  "key40": "FApgFBDc2SneVWvZiSZajWmwJdwv2PGjhFVox3jpMhkTLHRcERkwYd535ta516saFzmtAH8jCHoDNci5vm7iBtT",
  "key41": "TXuBx2jCJGPzPXRfgpEc8wJaCxSQMubeZHTjLqkPAeXz5eRB1NL5XP69QxHCFusH7LgRnXSkXKXc4rWGcBUJ9SD",
  "key42": "xSQweVch3sqV9dW9LhZEpu7FvT7DSaZBLteKT1Cpr9G5sZTdT2ZSCez2nph8L2WqHwmAHgq4x9EfcVKPtz1GNdf",
  "key43": "4SzK8aFdy8mFiY7CJMGjTbiMzu6UKsEn9PyzsKqMKxx9jFdahLGW8p6WYUkLXDQc9HzEVWEoRDv45WmsGU5yCLoS",
  "key44": "3Ffxa75Vr6DP186yFwTA9WJkYhFs68jMg5ZwpbpBsUeJBQrGVw79mKtsx2JK73CaMx6prmNQEwdfyrakk2kex3SB",
  "key45": "5822LEkFtNcoPR5WvnW8Jspef3v5CXyRWptRyEKQprbLLRYih16w3fE6NeyYXfg4EPzJgs5cctkCPxadSXx2tW5H",
  "key46": "5YrSZmq1iL2En6X2LiZGPn8h941NX7QZ6X9YZo6DouSqiiXHRnWuABHKrCgsLAQgskEXs9GDU8usJdQjfvWwzPSV",
  "key47": "5ocNNMG7DZK8sGxWXPHiZE94q74eBgftJXDBz16dhSXA7Lhxm9BqAbvxvrGJ7Zvjug7cPJbpSrQPp33YZRvhYseq"
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
