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
    "2VHZ5UNZpS8pM5DZAt5odysHvEdfXAegjzQzQQEiFhNf2zbkXMGRxfDfuYVzJXSwkkzCxfGvXP3nrQaHE1idKvGR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mRiUqhJ4UiukMDx7t9eTm15ifyX2gSvwXWmmVeyrBof2x8sBPy8JGSBNebxF44VU7KwjPVAx78RD6C1bYHaWFXz",
  "key1": "2Qjk8PLYU8KYLuix1BrF2LvZUWnoT1dyN9Sqrivsjwx7PCwpbJhgMYQr555MUBZ2C4ZRsFRCFPTjMKwQRqfcLb3o",
  "key2": "54sCc5QcUkrWoadxPUE9fegUNraPhtQDNHAR6CBBC3GvuHKhqFCAVoLd3eoLveHwUD1yi2CtQ7WXHi4SuSsjj5fK",
  "key3": "5XQoM6kKJPtYuUStD8qgoS2CCE7M55y8oHrYn48tasi2KZyXF25yMvZNEE87T8pzgBkVYHrExeDwPeu57yFsaUGV",
  "key4": "LtRxyeLsK3ZEQNJhcbxpeF7KVNNiQSJBeqFg2MrGvbjR719eZAeGcHa3GL9Xh6rcYxQVV5Z8fFQgTobJ4iLQQT7",
  "key5": "35CATfEjmLNM1tzXg1qEKMw9G64S82ceg3zZ6xtzgWNidQRrtimh9gPLgW63x6pYefwqUuVNWfpgVZAxC2JJVBKD",
  "key6": "5EcsC2wtorogg9wQBSPEYLRkzb5vXJw7b9ds8T9Xb7zFrduWd5B2hkKhB3z5Bvsvx6JuNeUzRHhnEyTqwLUEcH5E",
  "key7": "2LBubHEmMD2rfUCrhfPH2CmgXMxbD16ajdpaPcN5mSyjSayFXV2vTKDWvYrNjhqmEXuWPewDaANihQQNJaBickZ",
  "key8": "2BpG5uDWeFaANJct6NhPRmAbEUhGqK6cauU6JP8MBsWGHRwJbuoq9bYVa6YVTrJAinwPGsLYn1gm5QqX7WrQr4iA",
  "key9": "vsd7R5HEL9ofUmB2qCgqjacGMxK5MLxpsC2R6Xghg8vRTujiXAoQ2mCqth5WNTiTXa5JkxJK3jQEcEfNKZDkdnX",
  "key10": "3w58wyuqyZKPBYnsAABN9tCwbqF9JFSVM76khU7KJ5ihZwQ8RQFoNUWXwicfcsMWPCAERyYw2oyDLGzBstzRwg78",
  "key11": "2V3bFSMbpgypMSKZbN3BDes5z3PUKoC9eP14y5XZtfdVvsbFY8K9y2p3TjYbLGwDU5NtDoKHC2hLSSTJw9ihzTj",
  "key12": "2i3EdijaYQ6o6a9PqSCRCHR6ishgFP2gKUBKKj4gudaznhnqGTeK5HVgNePuoEBRxzrMb9MFrbeg9LC2xFp1u278",
  "key13": "45tTJQ1q2yjh19hPTiSZpHcuALUjJjSuFf49kw6mvgGDeSZZoHr3GJK6q4rmeuJc3qbCz4ZXf86ndjwQdVx1nALq",
  "key14": "YqVCovZxERBUUULGXkhryE8VhxbozLqzfMsRvehJjWTKYnxFfdht8LjnFjnzFqW13t7X1Gqgx9KbnGT151kJj48",
  "key15": "23DG13X81U3GNJpjjMNAWphFmkLU433S9WYwvyPmszfyXcGMps1pTyp2ioTtFxxiJGonN9CoGKj24xN7iwczuJ7n",
  "key16": "27jtgVxkVqaMAww7Ukt1hYRbVzZ7G2x1TBdbJxs8z6KvrFAZVC3CmwSuNd3zSYDgTWBnd66Zj4npQ6ZK3hJQSWD9",
  "key17": "4nGogaHQiL1vkVPCzJgLmxrBXVpNzXCAJ5NRZgQnwVS8hQQFVc5CCFN7ToUhpoEurNfAM4WCfZ9XrLr8MkE7ER5f",
  "key18": "4D9TgYpPmm2KSNmQJyFgJMoJdRe1Db9HitfvVcTtmD6tKW49T1nXFGdM5mRf4Ja1soStSAgKSsoaU3z9aw38nv2p",
  "key19": "3KAYWr4GnfgC2GPFUxffW7cgDWkKCa3KyCvGrkmH9uyWutYjo2suNXKSHb4n88bdxNmrDokMWdBBXrMs9DVPDDQT",
  "key20": "ALdfgq1dUaj9TMQL9YzVDJMVz4rwmHjjiDx8Ztz1VyxwQvqB8xFwtq8TpnHRy8K3exsqWFU5BRWdGSxkyqsdmU9",
  "key21": "Enpq56MemRg4VG81LhZM73HxdsN572jf1pqgqkJHUWDGHHCqdUXNp9WdxmwfUFbUPVSvwLtQCByCnygtFnjDetM",
  "key22": "3GNwcesoaQX3nP2yzhPTxdjS7R3kP3dRaki4KfjUNkCkaTqdpWiiomEw5YBS1aXpEfkxM3QHw3RDENvgvy7EzFNJ",
  "key23": "3hJJofJakjnvSGuX7EuT5UeqY5u8SLVPeBxmPgEavCjdt9HfjMJZarZpRqp3wZHUQHiNUoBgXFyEBC1ZRQ7w2msM",
  "key24": "xYbMUK6bcWgEfghxsDFm3H1HBhtFokBZ1v3DrnBANkiahUZ5hAwxdwT7bztxkvR7WxbZtqLMX83cSnoJp4RHv5x",
  "key25": "2cKwd6knqD8VjpyqLanpk6Ruoqzgx2EvLLs49Y9aALMVG9smJrm6jrCnr1MrenLiNcYGWbY8hahU1zJ9gp6FF7U3",
  "key26": "4QDwnF56PAbbHMTkex2qu2WrJN7jkisHQTb7zNVLD7mZ9V6LzJXgofwDQh2BNCfPC7WBkQmdLx9e1F13dLi4htMg",
  "key27": "21TmZoWzTu73mxkUCYVuDZwVh2y4xSgrzH1JnYH3ruyXgE2LeokY4NnajDLYwLb6jbBqh3uaKCEQopAfW41jgJfa",
  "key28": "2xhEYc8fDtPNuBNzc1YQRTcfR4S5nKutRGSULRtpuUSu6XTWYqmMVAivyZVQ58tKq8iDpXitkHknrTNYFFMVbSVP",
  "key29": "5Pk94PRurjQXXxWRg4EdYyNkXM24EK6bEL4HJAwqFMnaQbtqm9MnTj2xLwcqa685QuoU8DW2iCL7e37JvsdeuG56",
  "key30": "2Tihg1h9xAe4iY9Rip6vbsMDeUapacCS9Mw8D1izPhQMdEvt6EDmPtXEFcLPSDrWHmAWWVKRg4xXE1zDfwBkdA9C",
  "key31": "2jcZcgwvfvpRixwVvxAZKYPjxecma8sQByZUvNABqG2joAoVYeneSN1ZoBt6anKQ6RpZ83GuwAGwk3VVxQ3oU9gs",
  "key32": "5trRthQfa1MUTrwuA8K2T1PpTd3YAbo1UmZoW4tuvKxnAUra4z1VWxZGZdT7jgYnSMDV5svmTfzt7BbyKL4Rhsui",
  "key33": "2jR9rWLRPGHbRSGVg7qcf7vUVXbxWpzPNdmAdtoC9HunqeKEh3KfFt4YswmePTRVN3wPZndDmWMCynJBkjob7CqK",
  "key34": "7MNqwwMvWXnFCFeuq8vPqz6Eoixt7aEQUuiyRjJBVy8FBua5Bq1ucCyBr6Q7oiPLkAsMjj4GxJjVNooSYZoyTPs",
  "key35": "3xxCdhedpJGRVXLkwdfSDTzNQpkfukJmxmifs9bhqiYPB6oTJUhFJQYDo3Y3ksWgx3nSPqk7bCg5KfyXkPb1gq8T",
  "key36": "DTttadJrnXYNkgPMThqqAtYj8jNWD3LfSpHTVSjbeF53WVLpXuYpHSBsBa9Q96NCcDdg95PNajvxtz53i9HV2uv",
  "key37": "ikoL8WAiZEdPWgkS7FjHNZ2pYcv7jm5HLrybheWgyeUGGL2EjssdUkNjNxyRHYLz71eoQmGLKkA9bwifo56UJXt",
  "key38": "5hwR8z1hj4Z13LGzaQgvz7D35UCtFbhNKRSdS3zQ56tGPTnWASQzsLY4G84kqZPiZfJVsni1KhK2jSGqomN99at4",
  "key39": "3vG1BGarZoDG5ydE3Ef6cLge3E6oEpmmKahCmVvnj9ET8AwoTTuKkTX9feQMVv9yRH8wKH7UFHHRKyERjmrdrKDJ",
  "key40": "2jyLM6CDibgAexQcqLWSH8UTcEzrUzvLMeDGcd5hEuJ8SijJBjF1DtJ1KJZQCJ2zwW7eJXiKBG1QwK3zQD7zv5wi",
  "key41": "4FqYjV2dsgkCHA1xzkeE4Qjdn3EQgJQGbfYbu3v4dCWV8L8epvWdhy3qbxZrTkSXZzDxgJSRL2ZU8tWqTui9nMp2",
  "key42": "4q1f5K7anphjQ4a8kjccw7cUsA2JXqqox94Ti4hcf4CMSyB4vYYFz17CSkbQeB9PERUFFUdmRJu1uEjWcstri8df",
  "key43": "3ZqC7rfcbR1rSXVZMV69KQm7vZK9NEYngsxqMVRibaWMCD244VgmfSzLKSF86vfqLoWMLnaoo5BqNnP5cB7wkCc3",
  "key44": "2cxr7ZNxCReW88xT6kiqJLQG2MF9vTt47kyN33reRX3wn4DS4aGRGwxJrvQJJG9NCvJwAdHsWGgWMTHx95gdBLbF",
  "key45": "4sG9kGJMskbF2rza9eremsFtQFs4jbFyiYKYBF5fLeGgnQxBDYmCJpQrZ1nGNes8cvsJKEDEN8PLS5DSvKaZqLHv",
  "key46": "Q1JWq8cp3gJRQYfqobrZTXmoSoPoMjy6AvMiAnqM8g61VsdBkPmJgx6YUtYxVQpTCgnUmHHnNrDSu3bConAq4Bd",
  "key47": "TGycAHWToyM28hjmNDcqnuvUTujtNVTRejfd6WFQ5XFz6xDjY4DGHMtYxn6w8HeB7z886hqYyME6z2VBT5dSHqB"
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
