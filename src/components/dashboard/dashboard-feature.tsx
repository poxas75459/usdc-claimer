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
    "5674MEVFLx7uytYR2qW73w1MmxFHqnRc81Xd4kYVNYeZRtjdYTxeWUArCu6bXKas3G12Jv49Ejz94sbE23HJVRq6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KEW3jZJE3inFDRrS4QLhBpvpCm7dZLZVC1mvbmEGUkU6Sj9hQkJBeLhjWXn3aFpztHrZjzuSUxBiK3S4w5rGbAD",
  "key1": "2EKP2weWLrKPMDzgUbpgqJ4mbx5vkB5nmkCx7HWPe62a4rV2d2i9zKFofuUDtEGrvW2oiytpoxnFaDJE1vYR25XD",
  "key2": "2wA6kAAt4p1mXaFnbkJ4rwBN3FwxKkDqwas7cYqJDWgXnFZg9HrFyGeCdWLgc24CeEUz3TxFNLED8jJ8TKk1axr7",
  "key3": "t9w4HbBvtXWBjhT7bGJLUMSKizA1Fy2DYiL3y2MDX2UeHykAa3zJMiX7y2w9JyuRRcE2kWCh9ez1WY5qfYJunPc",
  "key4": "4LuBVCwCcv9CP2MKcyi1RdQGAx5EHmeDdz68PxjJb82GeEoaZLrh3owwPrvBK9BWiyoGGxpiUBRyUJqZUT89vaqv",
  "key5": "4VWTKV86Dm16dEJ9MJqr77PHnisXrhZ4D2dDKmeGPFWKJVPYv998ksrtGUeGubJaZH9F3jQPm8j1yugpJDexkwRG",
  "key6": "3pPZrm9A4YSjEtjP5b3VEvMCMZ1eJocXMDXyUdAMbZ2SssCNvsjxMWbFe2fu7ng3UstAMuGexvvx8KXdL6YTrr4o",
  "key7": "5T8zk3CWiY3YTVSRZq5jAqcDHHaYR8oA459fyBCd3os5NoiAR9xBVZnop3XBevcWXdik9Pt2Dv9HtPnn1fbXYf84",
  "key8": "2HyAfSbMHs1pxsGJRxVjogmyR1YvRN2rJjMzJkLAuoPWUcrtTpvqzvrxUFJj8cn1GTFLn14hZyyoFFMKiQjojehC",
  "key9": "4W79LEMPmcmJXJ6qjPJJXFtUGuQ4nDd4uvuXjs3oxCBnJTYfygh5C25mUruYa6zJ4jVjwaZzC5fNEjDgSrzPHwQZ",
  "key10": "63NU5sspTncV573sdYSe4XbVKMQdBAZ1vdbrQxipdAd32EdgsKjxdLJZuEniAzGmX1MoesnawSJqKrRt2Q32Yufw",
  "key11": "3dnEce4pNQHoEr7vfiLpWz9zBiRAcKWMLgrZSxgg7axwLHxuAD2sa7FJmr4YGGQRPomcdzLsGrpquQHcbyenAorG",
  "key12": "Cv8Fzci9PpN9Ziaxg7gmcVdAscpLu6sZD7L9Ew5qXFomXmEYz1KgVhKcWBqXsodx6Hd83jQtx1w31CNf7Ww7Sdn",
  "key13": "4BDtgcbaPgaA2b8gXdPcVzikpB8Xi84GAPo6HTBnvovZ5JzS6aKvBtdHTXL4dohJ9DL5Wds7hagVWBB91hEVF2pN",
  "key14": "9fFGerW3nbtio6GEdWn16QUwgVBvp2uKKWBkiYBTHD94SbQFkFJ6MjwrJbe7VyAa2KGuvzEokhEEyjqH9ztURAv",
  "key15": "3kbFffZqs5ueoM3DBvVFcfkSoWsFy8k7aCZ2kD5cG7JHKMQov1YfzZfWEYaaaQUad11zkacVn6qzJ88KrJ51pvSF",
  "key16": "2zqDrEEf6r8jj3AZuk1ZAXdFMLvBr1kfbEWG86iCC615CbzB4HDBe1iL6ncUv66GesVn1BS6hvPyk9HGH9ch23X",
  "key17": "3MJE4CLsXyfQPdyheWvp7YNwBA7844FUutHMqVva5MLBHkUda92UW87RPWsE9Zgx8WGLrqq1Ls511q63WYhuS3Fh",
  "key18": "5FKMT4NNqUrPmU6JSWXVC85Rxkk8QzEy8o2MF5C7sbCPZGjsX9tbDWSW4mruDTkRmMcHEhb6PRbU1zxVLhRUMqwK",
  "key19": "4iQKnJUiNyqNc1Ha4tcmKXhaDGL8DJWcWbFXgEfsaZaoBpf2jMboFF8xeZVykY2jh8VhTAvNobiBscHHJ1yXhsQm",
  "key20": "4fmTxVYN1iCd17yTWiSE7h698t6fDaCTLdqyadN48MakVnkL66gqvJe3pBrkdyjF9m9niUJEFzaAYaE6qRjpzSxd",
  "key21": "F6VogqZnf1p1q63UCtCr3w8fCTubQvoFn5bnC65ruB8sZbYTzfAvXjesazGcTxsS6qUCagzWLC8hoaRVXxjouvm",
  "key22": "46u57Dhv28Z5cCiakWzDzTy2reXruG8Yz6wUZmh9bSx368nwiA4Lt9NZBDsh76xsHd2P3cz6r21ZfpZgnoYfamrU",
  "key23": "3xoFDoAda3NLbHv6ddCTQJuyAcRYRnqWWpQzukgYQ3ACP2zzUAaGRnz6LVHJYTNn6KDxfJyA5ViWhuVnk7sH8gh8",
  "key24": "3zQHUjTZxwgnRQ4Hi2yo7UfZSt5voKsTMFB5aJzQU7j7hMBhVbYKAg81eZBW9ysHtq9HqJaRyCgJQVXHKx5BS98n",
  "key25": "4vd6wtYLnzt5GHifqeYViSqy55jXd7x3iYMKvZi7b9NRipr3YTdn5LT2qzaJaY7Dswg1KE5E4pFPs2iNPiE4yx6g",
  "key26": "2SyxsrvTZxTrSQY9BLxEFdAD61fYXyBBndZZfLZoZsjo1axM9oUPJiGogakHyF88VsxLEpUNAWYPa2XN33uagbuH",
  "key27": "5KuTpZvXtxCat3Jyu5uCMsFvPEqKo9Snfqsr41aWgn8qd3T8JZ7pkXukeBQasF67BRRDZGYABqHpwCVEnFMMFaDc",
  "key28": "2jSp39fQowizmGHgzsZKwd3RoxJoqvGR4VtTjRWqAqPnoJ4bfuUMtDQpgA9W9PydDM6pYBHgk8Mt5UsaxynZztm9",
  "key29": "4wTL4cQ53ZgP2bvsPXaeofYDUcdxsKQZSwsPLGqLzuLRDsiw1E2yGnweUtVJ4ajRKvzkieqCdgzQLs6ykrC1CDCd",
  "key30": "23MHNVFEVvn9YDpBzZMkJAdph3CequUcqKe6AxMegsCB9xrd8aEDk27PSGzUxTaCNvzLGDYkxGCqkMFvZqGWxL7p",
  "key31": "2shHfBk1mbPQAwUgYnRh7Hr1qgcDGtLJJ2d4jD4Wq6NXYupkqBNddoXQYZAtNM6hfrzSrnAkYvbN1HbRc7NpSDJn",
  "key32": "2kaAXeCnguc7LyXU2ek6pVqWKuiLgAUJE8Dmfuc64boTV2oUoWLZxxpUnznf5BWnR1SEzzX1hQGKMnUoqkGmihMB",
  "key33": "3f6xftkFsCzybkzWdB9y6bq9TXvQwkdC5iisou2xVpMCPfpnb66qa6yacxSY1GrTdWKK1w5vW1yXuEXYJnxcxJ5q",
  "key34": "2kcUWLmxbzdHD9S47GSEAPuDZahyKQngBEUwa1npJtRkr9A4KgnWtCdu72DCy4287x8GyC4S9BecMWAAsKEAuA8M",
  "key35": "2o3WFFt5UmWFEN5qTQm85oL7ZLsmdebtjgYUWwqdRJcQmtrvmWJcv11Xf73pWXtmEJgtQTuSGE8kcdSh1ob3NwFd",
  "key36": "2yJwH6ZUbV6QWP1kogkLPNXeWA9f87YbP7wmRsZBRjEsenGyMvuet2GunsUJSB66rrzrXbTNCDcVwZHoknJdYLfw",
  "key37": "4gkTHRbs5HdnGRowar2ri1uwydSuK4FtZwWbyZrjoL4HWbeXqec17Hfi3jHDz3oau5hVpv9C29mGrf2zDjxfZbQT",
  "key38": "5LsFXrn3e7thMZb9AXYDuUoDqzXsZbBk6dGNLadUfLRhR1UE6QrAnzH5KdZLZYztf4HUHcZygvcq5k8nR4zDjdoN",
  "key39": "qcpZKuRLF1uWyK1NFNoAKUMvvn73by6L2mGuFHpmT9XrKwRvGE8iQPHADY4iSE6fw3z2Y3T15P3EYnkJMBEogF4",
  "key40": "5yEcRDQchka9XJLVURX9Dd2zwNGHBTCCXdNw1DTS7sXYhuQsjcHdro7Uxibr4hpw8TCbTUsxuULcUkZ152c4FjiX",
  "key41": "4N8V2423bx9yUHNbAXCw2MxqJfszipAzBhsvB3aYZsUCV418b4MrNuDN2snhgN3wugGMkn7pCStvnTJdBMRugVQN",
  "key42": "47WUJ4Zv2CkWbWQjDMuYVjFMfp5ZLWJEBgAQgdDWMtY2jkBKhoBQqGqjrwfwwZN4BNnqKGi65oXXNCxJ9p8A2APg",
  "key43": "R6PhgUyVEUhty6s5x7vpaui5r6NdFKznNterNTcaWdGt4zPhwMVAMb3bhQb385KgyYF668WCrsVx7B1QvyG9dWq",
  "key44": "5iK2iH11kMK6BJQt4AAWZk1qJVeMy479QiRZWP6YALoUR4KcAPdyQcN61dcFRf6uTLGiEqD1kLfE24JCR5bAT1Sx"
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
