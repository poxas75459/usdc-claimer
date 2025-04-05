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
    "2QR15pRFLvXNthYfSZoFjpQeu24YwgGWUFWzc3hkY7oWDkKCuvhLmBGX7hGM6CP7whpZ1VeLJhAcqAoAmAJrDcGv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q18Se9VqFEvG96rKCKGPym4bbWBoAg2yWVHZz394hBJb4sJ7TyXkvEYGMEUdVMT5Vv116zfXT5DAvc2Y4NkwGq4",
  "key1": "291oniJWCXYn4m5j74VGpcniaks5UxhsqaMHv1mmQwzrojkV6MDdEnyz4Av6BAhTic1wxCovLZmjftXBZZkjDYWC",
  "key2": "3AiJScS86qS1cb9ogeZUWZp4Ydd35J1vyGJYHxpXrpgUCNwNwy7mqvyiJgQZQ87LzeoX8WyEXdWcP3fFwLgwtuvr",
  "key3": "2cGZP4UVghPf8dfc5iisRHADuQM7mTczPikezd9pCdghpbGBWTbnMVxUon4cyszNEBcoYHCCrrsgUq7MvK1fPH7q",
  "key4": "21A6Hmt9ph38CZBi5LC6jbfzMaQvNbCdoj9KTj5uRVoHZyrhnGGZP6cAt5EpSMTKFes8EcuMASJRge7uAFE13yFw",
  "key5": "sUUe54M7fZyGLx5jBnT4CfZNjaHH7wGUE8XKNvWk21PFS9MV53H8daMnYQpkX58Sq7sAbdsqh5QxppCotQLhyLh",
  "key6": "T5LUbiPx5HSfnJucGQUr3Nyy2aV1ngHF3kyLCE9K9Yb66wfSCRzuieKNhWxNsANSdNxp8tZG6hs562xcUijMEQN",
  "key7": "2nLGs6sv4S5X8MnEn12UdzmZ2v5kex1cgLANT4dtzdXskjMaFE7QT1ZSsyznLaqnx8guU3EKS1GTrkzrph7HgJcP",
  "key8": "4DB52Kb6syqLrTobBWMAd7YoURqLkiWvWGbpKQVSYJPFgCUDtPvby5cUX8xX1tRD3hfr6np6qGKG5Kchw6mTivUE",
  "key9": "hAkbBWDEVt4iCHZHCBPg5omwWjUdLQnLaNiLykEyCcbMqeQWLnUWg18szRo1nBpEKVpCjduAh3poB7sfEXHevWL",
  "key10": "gqjFuZhFagY9pmRVFN6K6aBM9kLXSS3dcDz7WdfEi6HWq1wHENMaCNT3TUeg4aSnXutcM4to9pE1n8hCieJDBhq",
  "key11": "5vr4tpkSs5nyxC4WDb75hEKCDdLYSQRYHeVS5nFgVZjFamBrWD37TPkhHpPseXuNccrvvjabVJgmFR93syg2dXDm",
  "key12": "3rAE7EkUhdadbcjYMQxBzL991bANG8QD2bG8YXrHWCv68A4qSgZmq8VtLtGkFnfdfBeuEoqUpeaVEccjzcZmrnFn",
  "key13": "29wY1gXMZAVEwjsqptfXgJfFgHLrqQfbfUWRdJMtqdfpkmopg4VHWLzhbX694FvymwnEXiTwJ1oidhAy2yHxXnGv",
  "key14": "5Md5YgAEBeBuWooE8wwUGXzYVvsoYg2ntuJY1FfNWTYegQZCwkrZkvhREFS7cKUWA5qZnFq7tcYffEGtqqm6wXEj",
  "key15": "2Y2S2DSJ2nG9njAw1Rzu44UQVEoa73RnHPQLJhSLQzRyZhE49nnzDHfLhPdSbeHpoddiW48FLDEFjjLeEFitFqCi",
  "key16": "67bzTyc8fQjDkWevZuqrVQSBndA6Hkw18suguVVE4UE5B6JNeBDBUrQ5fkTxDiLVGQXiNBQqisBqtRw1dhSPGhZM",
  "key17": "j5m1vh5gbghnUsT3G6xLSB3NJ2r6wtCJWt6TdHvy1KiZEBFYBHGiD3sdyVmTpfnhX649oq9vApwnHH8gU2ubgtn",
  "key18": "5JDArsSG8wZA6pZX2mEQN11HxhqeFpFqSmd585EU8u5jEzahqi8QLufTThQdVYcG5oAYcQrz5Bs1JXjNVtE8UKcM",
  "key19": "3BjwvM3usDqAJeQTco4Ppn8kwusGfZVQHcJAHTTFKYLm7Bu28CozUZxvkrPdEGLKoBsXkjanfsyZYiNj2WTtHDu",
  "key20": "5UwKZzYLq7XqsnKxJ8GyvQLQ6NJfonwpkgr13upHSWFT2BTiqYZK253heJPCr8UKNAB8r1GrQekSNwLweWngN3ri",
  "key21": "3tpPQThryRfGcqs1tEUZo51uW9TaRTYb3fxdmbdNEea7KdBq2WdvAcazKu4NScZvipiayboNUHmSQvAghNdXDcPf",
  "key22": "Kco9m78iR7GWmQPjQNNRzjaCNzMZM8p3PRiimiyWhHtwTRAotanVEph9hY2B4EzwedS7Da4nWgBawxWwWUhroZX",
  "key23": "5RtFa1MUgaxdb41mYbzaXzjJAPB3nmQwEkUqGuZcM748P9QrdM8xYKrRSegNqkYcxwaCU8hCCBnSpZtEqbhLXEpb",
  "key24": "3rRj9YKDNCggh4s5obD6R3SSNQpJxUpFiSxKHsKXKFz48rcTp9YXMZzHgMw13iMJyNin4yToNoid8P4PpBBBwVpy",
  "key25": "3W7JiDGzbHhTmVuq7AUaBGUCyWWwJbCzGUiYVLXtcvyoQCfuJZTyeTgMpv7sAWgiiLX3tWZXKrJ5rcJKqiq7owug",
  "key26": "2svnWt87X7M26SNRFqTp15ZSLt9Wy6kxatuAY5pkek3oq2wxj8GXqrStkSaNuHCXTfRpyAhkzjK4C7bFMk572aHm",
  "key27": "5GSHUziQHkCoV6SKcGYwnULmuV4LDn6782d7KsJGon55dyXKrYS6MvBPwxXEzshicPQVEMp9CrrNUyaYDUUQ4JQ8",
  "key28": "5DKEeAVjiEy1nV8Q5NxeK5QgqBrw8XVFvkfsemARqG3KPp3d3XuoLWpKJSvVPVUVqEfisfMMQ354rvkTLPzcfW59",
  "key29": "2J71ywgJFoR5cRW5EuMQ8rTR3kaP2Htm6HbgpyhymryMeJSfp6hJHTFcY4AmZFyqJckWBah6wGDCGvbQySHBZFAS",
  "key30": "2T2YyoAB1u16QVcuw863hibt5sRXwwaFz7FYLuFezWk5yGyCJHemh4UACM8pq8tGAn1F5xSh9EsccCR1dSU4zpQz",
  "key31": "556B6bRVsNEJtBi6bGLwxmmEEhykCQRMurW3tqKhvz7JJwyRCYHcTNneUBbBrUYRqnDHjcrXVoicvteKwqugwuf3",
  "key32": "mFJMCZXcNqV5sizdFdMk48sANKE6YH4zsbVjiFaB8EUYuM8CjG7fFADYGzN6yTYMfpkb4sNxpzNNWAFQy1mQbyi",
  "key33": "2Esqk15hzRHxdHvyxynaQc6To4FrFjVfeckgNdvNhRaJMd7syCi2uGczwuAhqTronXtpEgqdiq9HXj725E8NtNKi",
  "key34": "5J3LTF1YW4wtxUTT2NLsm5YX2CdWEEyZcW6ctC4DjjNMYJQFDyEKcKavfAPwF1GGmVhVs4ke9kFsrZc2fpeyjhg1",
  "key35": "4jFG9M6Fr7MHVuH4U3GSTWbUGJJwDunHapuatnkAw6RuJofMeZGrmY98FHZjHNDZnqfWmG7urYnTQpKQ3YaX6yzn",
  "key36": "2X3AZZtCQ6ywjZtGW4h9TagsB6uyVMZWXzzheyoEPxG6ws17BCSZUAmtwHucDky7DaJ5btUxRdipFswTQ5T6BtBU",
  "key37": "SwYUnoxDZThKyRbfcD3usDDvvxr3nyKw2eHGprV6PVuT1kY96Fd35DcB7QFFkyd2XEiWmpCcetSjFScQ4x1EkwY",
  "key38": "dnAdnVDqEnUXGM7moKZLd4YdhPigpi3NjfnnzRVRNDdpcwcMjUkB11iyYMumJgmNwgTgxhangd5Bgi8GpkV9bWN",
  "key39": "3JEho6qtBbCkNCk72WigN3raZoeHP39UBGgg7cJcV82HsS8ebUzNNY3E76iDPzTLx995zwHLsS8dTbtRSzhyQD7E",
  "key40": "3GB3XdxfCyRDe8uxavKo8g2Gvtjv4ebZWickwPwAphR6AnQgEFJQxkA79CoWJqFN5pvpRuQuMhiHadggJtrf9tsP",
  "key41": "4qGfME7f96Ma1aT1Wup5YQdCDs55pfnTrSAwXLcH7qwcDbw8VcWLYkq2cGK1JX1P56AeFCRuonYb1hKTvB3TMLRJ",
  "key42": "2rTuPdMpscydcSy3amTHXjM7mV8vRUhRNnB33wscmb1HMG2FWk5HgJYcfD2ExPmmgk2Tx2MVksRMnNvDc7KTqfvn",
  "key43": "35X1Bu76UWpCBtto96F8FZEUKef5mtTBaUzZNusxzEvNQ9EdPU56jYj2Me6Dp2ZedDKrCQxYm411qp8CWfcfHwzm",
  "key44": "52LXXpLhN2tCmtHZDebAgaK1fX19A7KS1MbwD1xzdB9LEK1GhtXsLWcSWAVhy9cCEkYbdNnpVHXbkXTnGDyoZtpa",
  "key45": "4HHVkHCexK5po7aoMdg1yxWgudDMib15zHoUcdoXsJDpZR7Q6wwQgEgRabPswF3HkKaiygbnSvMtnv7zqazahZfP"
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
