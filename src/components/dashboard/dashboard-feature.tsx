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
    "2fURQwR7AFTHszVEns1Wv7TdA4tpyQtSsNKpSmCcySNJDVQJz492qmWwMVmJ5bK7WpoVePhJnytmcrywCm41bJBK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EPvqbqtbPA2VkWXS9VxfJ4f479eoTRsJxoKycJCJU8GaDRxz4R5ani8bg5Wc3hMn8fG2NkkF59WdEf4bQ7NX7ak",
  "key1": "2GCPFperyYWX3hNx9wBwDz7Yg8vAJFx2GdUJoJeMSQ8JaRRMyxF8PvkqxoiT68GqsC2hHRCzxPrDKnm8LzfuXvPb",
  "key2": "28mmXzouXea6nXhftUZuTWKGKygad2v7xxkoJLLJ1v3ACYN9wAtG2cDE1rVnebSy8ALNdLBku7JFeh57eJgqKq5F",
  "key3": "EmsyKaTsUrh4dpWE7BpBYX2Wa98fAQs3LkRCv7X83AhTmMVEaGc7KX2ybWtkZKJfMCBg38XT7FwaRgnT7eJDvDj",
  "key4": "5EBxLszNeNfARHtBG9KeCihmz8LyXMqz2GyjACZXCt4sbDG8ZLXtpvtQLY8dFPhEsodYh6M2dKKb5ng5DVKGqc5V",
  "key5": "bcChYozsPMyGraBJPFmmPPwNb2cdmn3LXv2ax5wi8FQBkbWsxX7HGze5deox5ZQF8nM7H4sK4sCMUkMoBuwMinK",
  "key6": "4T6ECgU78s5KXxMCPMsiRQQd2Km8D2vzMtJMvcAD5z4QE3BrP1N38ygdVt3DgimzqzQzRztGZ9ywoF3LLpzD9Nfv",
  "key7": "42VbARnZgcus2vW3fUxgctsPuJ5JHndTk3e4FxBrQXeCRogurXWizuStUURb2BcTxemnn2NFmeL42MjcsfyjkEtL",
  "key8": "3tK1XDDxg6ExH2nnKjPYaXqEiAxLehtkci5xzKBu6nwm2XzpqTU79StWtyae2DmrajL66SGJLUJg2YywQHhYaQwK",
  "key9": "59nz88k7LSZc18kgMAVnkQt3QkpLy1W6hfyGgBL1zbmDVqXLMytr84ZSN7ZwDg6Gy1gsspfbBPtXqGNUikyWT3Zr",
  "key10": "2xT71cP7FYbRzjRxNDEYhytpKuNagYmWdAWjnmQhBYsJboHFDTv1WWtZbXJdgsJzrh9dnt5YCN5sgs2xUGf9QyrK",
  "key11": "41QuuZYo1GLbg5iDGJ8JUkvEtoVbojVV1cU2KaQwjgiWsqf6NgRtG5yt5P6ZmJTvhSqiv9fWqpm4Nm54fqGsxuqn",
  "key12": "3ZBF2r7W4xvXvncBKxLHS36VyydazrcujjX6VKJ8bv6V1C6Spwq7BfpbTDpsruhtQWRYAu5jr4vC3VPbmZRXXTEB",
  "key13": "512B5canyrRKYDSakgY3LjKoK57KNU6LzB6mj4vmLVGt2jXCVqygrVrDgpjwbVF3V87ZFXnBJCY3B9gAZZb8KEQf",
  "key14": "3T2EjzsFh2FdDMLo6SwYYzPLymABhJfPf7aoyrr7yRe5NrynvvgcZjzMN6MUsnptQePMHpCrA4uGD59ZG9HGjhLH",
  "key15": "5bYLuKaD7EGdPvkp3Sz7aMtaPvDh4nKeEjxhe3TFRYTM4Y4hPEtPNuG7PeaCyyBPGdXBNmBovUB4CGHC4v848bnw",
  "key16": "52o8dNG2isLLpoF3fMBkPMbzFeRZZBq8HiohNzpA1csqBEtnNSGH2dAKpr1G2FG6TXQRdHzTMytEQswgV4AE5PcP",
  "key17": "4FwT5p1AE16wUdkxwjkrQh1d3sPcat5ZSVFbHhzNveT9FcgKG7NCJDWcGajC6SKwdVENHwDqLum9wMeuEd5ePKSL",
  "key18": "3Z7VhArHqfjbZh81xS9p5MtigXJkDUN8y389EQB92ttyGWWKqCWjpdQUgotUiftZ4sp62CJUieqF2AmRCykJcPUV",
  "key19": "38MjP9eijpwJr8caBVXSYyb21Esu9h1r9My9FR25w4t7gvwXxBs7dYFBmdfpA1BjsXaLgQUUY8b359Qr1mUWmvJD",
  "key20": "3MJ7tr41NdLivd9hqyyTSttqRnQeVdRZ8NQRh6xNaFC1nddsjcnkxRVqV1BW6g4XPJfLZu9CnHwkPxCByMwekxjx",
  "key21": "33hH5KtV3tF9W3iNeRXQtjdLW4gW5mRMNoDh8t4rEF4Qef28Cj91rWrm1rJFBsi3DTGZADhxdkhZYT4fP7oZP8KS",
  "key22": "4DXB7pnFzMzrKERU5jEwWKpr6fgxHG86WtFfBskePTvLcaBJz7RyXWhJA8fiRyr57MXqviqk9Y9x9RB1Vb18eD6D",
  "key23": "G1YEQ7AwhZRkQbjhRTFCDUxjPpgxTBvphqm5ATocJyHdmQxsxPTBjDECBu2hwan13Pz9s9mT29ySZdfBPMdu9MS",
  "key24": "TytQQtEjFetLNew5CFfyQgiUU4XVsZ4DU7Nhqw4qS2nw67oMj1KcdZixp4JQeQ727rM3y6WNVFz4vQgMs3Wx5b6",
  "key25": "36Jbbip6sMsmixQydnRJ8w5uHnpARVQztdzsvu3H2sm9cvboJ2vAk32EQ7E9MZBjeTnCURxumaGFoJ1Ya5Xv5hwr",
  "key26": "4YZfAetXMWSiNq2n695r24i4dCNvemPjV8FHvYNwrzkNkJ32nXyxgyhsCEsxV3FnPTzUrBtREd2aizDsLWWuPdzo",
  "key27": "2h7q9oC3rRujKNL34fdf9hjEveVDFpqWTVFyEDjfaWAymbbUNiPX7R7Hqb9Fh49redpderMbfKmZuasSNMixoNFt",
  "key28": "33AqGG6edQYBkrXyCzr4phwJPtbqsZcxix1mPV3CFoSAaDsQpEbpkAKdoQHJahfYa4WJXNouds8fHpoCp563Lmwb",
  "key29": "5sN96vsCiPsaMH8cF2YMZ9dL7H9GLKpqe9hSECfWmYLL3JGfjjN5CwjwAcx42ciQ83ahYk7k89SdYcrxB25NrWJH",
  "key30": "5LiyCTCxmtzS4okDZidnx4YS8BbD4bYn9mLq13MSvfZDXQpR6TrZsMsCvNPS7ezd8WwLXKBAWHJZzdeZhmQCwKV3",
  "key31": "4bWfuLREyDLTYM6aLfYB62J77MUQZwyAwaNnJZrx7Hw3fpeZ59cZz58zCDufxza8WgNn2jhm2GFJr9NhTbPkHzcp",
  "key32": "57wFGZGUc746j2GezwGRRUr1E4B4W8h5Kg1nJC8ygd7kSanXfYZ3N7ZMwGjDtTYxAjkmMfEtPubSB9jZVWZtctPV",
  "key33": "2U3THVfhfzNw9zJiYMWhTvvcXHwzifC7w6fPqfz9koeTAaVyUkFW4BXWsprrHPPQjsLK7DJbxPWmB9J5YzVAhDFu",
  "key34": "5cEjcSzdBDe9ciMoQW8LALoanwr1hq4V7FV17QcWb8AsNuHNYKxw1RQNjN3deQqr8FCk4LoVgQJwRAri8Kvr8Ji1",
  "key35": "3vwjEzXpGq4yQ3tTsBWCRgu5wrw8gYDmw9xTqK4EytA7QpPhSJHRsNFsMYQ1VyaHaipVadBbbVJGEwkm4STLhXHH",
  "key36": "2dYSranwc7rA8Ryuxv88LdWAbVTyxafXYiAUUP4F1WSRSm4UAwAuU7d3wQJsyf8cEiSpKCrxLGugyk6LeZvQeYR2",
  "key37": "3JNEmhS84pVYTkBpt5ZtooUE8qkY9JkW9rYoUtWRNpuWqW1nqfZEkkkqQEn6U7mg8ApMM9YzzhVpZ351SqcYPYpR",
  "key38": "9spe5xuKRUrfk6rSGB1EzZwJSDUitedcWm7Y8aG2MjWv5DXMqQTWmJkir6G3P9EatKyTiS8oDDvmXXzZvNWqEwk",
  "key39": "2BLwUm6t3rS5JF3gPVxtJA6LUKTUM8EtWGQxBw4PiXqrbbzdHDCnhLtVYasvJV9Hi48WDtW6CfqbaMXiz4NDYMDw",
  "key40": "4hhSRCpE2W4WwKKuGumTBhAXHJWdF391Xjo1bL7EKiaXYqrDfhWaWLqQHoty6JF5dH6Bp2CmaeoDpAygj2cYexrL",
  "key41": "fjb2JiRHuqZEMppVpYH4Z7sdpEAb2Ymy34JDHZCQYneE3hh9n1VfgGQMopRFyV6qiXgStJEzwBUz3ZHYXTinGK9",
  "key42": "8CVTe9qNxthu2KWgmZEbRbSChFh5PQJKiAWo4DA3hjwuCVjygmKXEiv7JLWrm5ZzWNiD6vjyZNRjwQaUCtw4LYT",
  "key43": "4xwCcxRyAvJQnM5zeKxBa1X6PuEK1sjjjXBCju4i1NTzQDkRojBxyn8JvyEqTyuaAG1oPq65eZEkZsSMHpYFajVK",
  "key44": "2rrT4mTSHxfL9F748FgTM4rBALVwGryCJBFEgAq6Apbk3sN4ewusVTZK8VVGmmS83CUd1HZALSSDw8xxsxo24oY4",
  "key45": "2umJCXK6KgRZv3PatBW28aqTs1RJ2GGywiyuxPRJUvgTtcLW3cfKxB1NbsC8M8RkNTmLJAVd7KdJ3PfLb9TfPjwd"
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
