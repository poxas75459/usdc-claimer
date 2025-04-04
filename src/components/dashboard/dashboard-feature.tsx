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
    "5CaXkEvuRGXrM1NdLEdkvWRxLGfghu1aqWHgJHYR8L5mEU1R3z3g8FAJnpC8MbdtqALDqpEecFQdym3KtmzAtkMZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U8i2sJG1Qngcae8Edt2FdPNrditzbDcr9KDXHjwKknWkqfbBHJ2kpAGsyvFZHb6ropFLCUKEn52Qihdi4eSEAbK",
  "key1": "3Xa12c3i2mbJ19q12W14Y5tuGvASChC6ibisKvxhVycrff5neSaViSq7ZRmqvFtxfcDuDULrDp9rhR1st8MfFNLH",
  "key2": "244Lw4AayKuDa8N8LnZjzc3PVrmrcazJvs3oFeBXYJn5rSayRVk3LsXPdihSRqqkTatHbuG6TeucRHT9mapSLkMs",
  "key3": "3X2SvPYeK9wRfwTDDcvffutGpgtknVVTvyRW1xp89cAbyv8P1yYnvsi91hiZKk9UCA5moKTVZLmCEGtGEQA2tjGs",
  "key4": "2BqMD4u8KUph9o6mKwSSG4jSJYhKhxLU2Bksx76F8Lrbcx7qMf15C9cAseGuSg4YHZsgMHKsMdbLco8nrNLJgqhc",
  "key5": "3nsqjG8ouWfhquEn8U6GwegdRXHNFre9zB5Ve2ECKGkhsaQKNcSkavkM3kofj8U6WXtdnWZHBGP4ous7E2vEvWtq",
  "key6": "5D9oURNjA2448QxM7Ad3qXJfvyiwg9XcFf69MzdtNGKFY5syeHqAzMZhtgVXcM81iMR5Srh3yJFR8dnVxDhQrR6V",
  "key7": "3r8mRGjjeVTU1LgGhJeEDRszrzkRh5EHABu9CfQjmpMAQpuAeNDmPEjDCbGoq92U83NQUeBPbS1GxwPntY6uCTNw",
  "key8": "62k7Vym2iidNpudbmBF8M6xAjh91W4ArJs6FgJVMGNPnRBHZCZ52XKGsF15d8LFDwFimLZXtNGmDye3vUWTgRAmx",
  "key9": "Pz5hGn33AYftSaDAEM46SMHDFz5Pe2N7yTC4knASiJgZFFrf12xt26R3N7yiT5cLsxFRS2gsJjc5oULsiMG5ruY",
  "key10": "4QrMpTAUbDv2H3B5JiaKCqugCUhoH8nWQzzvtG9ieowCdnp5E1rBMUVPE6e3aUYaPknuiRAazoU8ZNJaEuH3FiRU",
  "key11": "5jss7NdqRbhHhUoPoDVoXeZ4tQHruhU9s2pSkHDvAiFKPcxbiQQZTcvGM7WvefkAYArQwNf1tjQQgQ3Wh983u7FE",
  "key12": "3HvYbeSr5h6dNo2uXEgpvCbuTBZwH9kdAoaYpxdu9Gukq6dcig5pCjhDWkdyfhjvsbJwWUhx9Hs1zKtzCHh1Eihm",
  "key13": "3fhb1GQvyEq29DAmfKdApQ6imgYFveRv35vrhYLJ5xFkNFVK9UumU5fRzZGpF9f8pB7cXBa1idieeW7gtxhudJCy",
  "key14": "5rdWU7eMbRVftJHpZ6gurrxXvxknKewG3SHTrnU33PpgCpiLCZAnT5ETtsjHu8iuVszP8iSa7g9QFBz9ApFfBbSn",
  "key15": "5hGnw3vCMADgyqdYSMxfU35sPpGiEoS7qL9zAyxQfQ5HYQk9DUAyPYtrmRA6ayDCewh1A3hkM5ciY92gv2xyceH5",
  "key16": "BniLyiLym2ybBFnHrTxk5i1DTKdKXqNPtCAFWXNsLtA9e4KTMqQCHXcci2iYsy2ygcTrMgrVmvMV34M4FGVzKmh",
  "key17": "5ddNcEo5mmGSSGPr4Uw2DARwRY1dzr4cPPmzth5mE1sgUnx9E1e8LuVwDTwbehrXmAfc8dHjJ4kih5ERfFbvhLh",
  "key18": "3MXnuPztHf19g6mXPRRtUfvDBZERzHUsnCQdk9sgryTu3q5pRGXY6vHyVcrwXVoLMvbZpbSZtE3XPXom4MDgMvsu",
  "key19": "26hMBHa3NkR4J8y3Ug2hxMjKajn4rpPa4bD4xTkSjUrawcnTJeFXEgncVqVABQ5AnTwRzpPhArVU9jjfgWpHrJrh",
  "key20": "5gcfGJ8MWdV2byjr5iwet4MSGPGMAJ2pbHyC5z1Dxc1U3tMtAPsrERb8TaAr2EhL4WkbBZUNcYfFw5uXNJR48Z6t",
  "key21": "39XYfGBisQQxtRmdCDv2Prs24HVqgaHMEnbA1NPkjxk5fSXAfgd6TPRBvsjLi3BNo34LNUxqonZnxqyLBh1AJ7vi",
  "key22": "5577J1AjDx6SNteE9uFUV4eDvCnyxVgrZ4CMSHWcBVJ1bPkWfrgSgR9ZkBL8QYD4b8RWvHxoGx1A6BMuJZPBYBqX",
  "key23": "5m3RehZMeWEmpxFzCKzvcmcfxzHVRazhr3BSzpZiNzYoXG8RyxARyiFmnuKYKzks7KB245xHgunjvpa2XuLEu5FX",
  "key24": "DmifhNGLSL4jjNhxogYe2LddDv7JUhQQyL59twkMDR27qkoSaY5w2PNqyTcFB2vhf1SzD5jxagmcn5uNkubsyp1",
  "key25": "36df5H6F7c1LzkXikGTn5RKbohge8iWgEXGkv8o5Tr5DK8eFDrMTs1P7Zh6qu4eVkrzJT2rhbD2DM5kTbPo2moMM",
  "key26": "CRaz3ewX3pw94CAx9fWRHBQJJrUXBMf69QVBJQgEZUAqRYn2Uj5BwuMxmiV589ovfZZ93eAFcL7Gu2XXqVToTp6",
  "key27": "2atNvKmqpCYTbm5cNSMEWMgkp9Qjjxk6xfrqmP2AcxVageMgSA2S3yiBFqbQLsfXcESLLWQFdbvwGcpVj3Min9aJ",
  "key28": "46ovjaficGqKdNfpS6PMf8LNpBF6bjtMns4t8h1kdwy5V5F4Kn2YW71iJjwxv4mccbEXQbiExYeBJzx3rJkZ3Gw1",
  "key29": "28km38cytY1yj3U4UYAnerp5wySr9ZyX8Tt1WmPfujmZ7FEHdUXmaB9cAFuSPgcTmebDbGFWnxFvtDENxjfBHdB4",
  "key30": "2oZgJufDcHcToDcbmVrDo1hzSDucuNZBGtkaV99WzQzasZmhLkhWT45onXsLKJLU4Kmaw25Lxg6BggNX4Fk7FNNr",
  "key31": "N8MPjmYFp6rNHeaWRcUaJkV2uKyMfuSQBCdoNnY5oZHjNUWsQaRuR7tygv8Swujm94LazqWumCnBg1FeY3BXT28",
  "key32": "4xPCjsgeh2Kwoq6jGVZMrQMzXhGC1DjWvHSFbJMMQVYGiNv2ezaR1k1aEZ2sHvb9DhcBt8yVbxNEekLgXjKKeVD6",
  "key33": "4dfTs85LFacCSUhfHz6yVgxZmC6ZBYJFAr2B49gZwAPG33MQVFCYucjcnedAi6QbvZrPiJ1j1eBg2Z5AuQde7cEk",
  "key34": "rpVscgnzMoqhCmeXi3HYpBQKpNVor3uX56obK7YENExJ1RCopScGnkWVawFd8D8556fgJh8JYPyfA6yabtjGuxN",
  "key35": "5jVdGJCBXUsiQBXpQS1JiDJZ9zixqbHAoyKjBpZfy8zQCcUkbJVTWDJp8EWgycvq3w9BurbaDgV7UjjbA5ifThwy",
  "key36": "BxEMQk1agLAqt8sDv9AT1E1g89gFqBgBKPk5eeF4sBGszMyPEc1YqCcZKneua3rUKiUhob7RUws9ywwxeFks7GA",
  "key37": "3y99jJfq8axLCwEE4jYzMYDe7i1fcQZtYSpwGKU6pvD1Ew6xRtmhkWpgc4DEyDAGewmRg1UnWNVcgu3NwousHiXb",
  "key38": "4p35U4EXJM9w2Tuxbf8PiPxywPw9Xe9zhDUC9kG172TxSa7sH41TWid1fHgtw5YeF1L9R3dEnefuWrjnyyMFgGD9",
  "key39": "4PqV5kPfnAFYea5755bWY9YYhraiWAZcsvn8zCAXNqueSoscBN4oRKSLnu7Lr2q6GZsj9cRk2vwzGfMcm4FS864k",
  "key40": "2sYLho8KEtoFJBdp84j1QuqWQUpDMsEpfywHETJUopMh9DP13U1JwAFbSGQVoLNLjy9cPkMoCc5D8X8JhQDtZ56p",
  "key41": "3tP9tajtwaQdbhsyZ1LXzboa8MSQzb8C9ZQmSnwCrMsMJVu7cFJwEhfMXvU3QEabiR8PJ397eavTAT2DQcJcpBzT",
  "key42": "2rFacLLjMeDaZhUDAh4AfBBo8SMMZYknQ7nY56N8P4YXf4vJ2YGrrQzgjbAtebMYzoPmPh2Tp68WrZw7Uk3fBjDE",
  "key43": "4M6oXJHQi961Sgk2hE7NZBa6qnUovuaBPibfV4Cf8RQiDTui6Jydi1YikZpgzCNYNi7QtMvnuvWaezBajNZX3WqQ",
  "key44": "3pb47SBTavmQwM3APjW41FMeUDqwDC2V1Jv1PttfAZYA1e54dwvQDL3n87Kued1uYZR9XKJmGahXCTzoad2CR1us",
  "key45": "56KvgFqZK8YVbmg4ctn9EPFn7HyzwW67FLduAYfqmuypwJKaopqETe2CLM8fBak8hJtQ8o3MDAnsVJpXRy957Qp7",
  "key46": "Q3iDPLxHj6nF2R1FPT9sT5QbcnVjZ22Pmf6Tndf39J1eCigCsWvEd9DoqwREB6whLUHEy15ktG4npt4NigUa6th",
  "key47": "4ECYS6e7NshyNhx1YGehZTeNAYQFePZ2NToFHAUUyen2PzcmUAMErKNrbkppx6nT8pqFf6sDtsCSx8NZFzs9hYNm"
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
