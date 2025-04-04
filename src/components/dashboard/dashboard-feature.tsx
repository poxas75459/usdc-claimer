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
    "4HsNWXchaw2WonQJMjeXWqCwijcEbwPpwGkWCsyvLPzWzMqhgEjfwma558fLf91iAvFbyT846ucNcsh1qE4ab5af"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D7vAhwdV3eQekN1eeiGfWogr5NhoLhfXp1PXmUWDT9jUNVd7juiwmoJyipSaNAVurcQu5xq67ZJQ3Utf4n1GC1",
  "key1": "3E566CZthg4KjWacghT2e4juVwmYMVJL2eeAJ1RZzscx18AFDnNqbwehN6cN7fmKPG5mRjPgi6ajkyF8juqz2XJu",
  "key2": "28cHDMCDFNbVJFwZpsTJcQPrHwPoi4jLRvvWoNUbjsnSwmyuHtgtRq2BmntnQ6gvXiALaK4WKuYQW4QvvXjPLLAX",
  "key3": "4uNRz5MLG5eG32xXoXDs27we2i3hMXksBSkgZkhXtMv5TTzrF7vUCG3Wt4umsAD36FE6tRtjZdoDRQv6We4c9MVv",
  "key4": "5VfJ71PovJa9kbbuepct5DiFUvStL34FmCjqev6t1eaFpZc3W3JLTcRiKfu5qEpWpeKsUXfpuQU9m1DSMeApo7Sh",
  "key5": "2GF9xcrgjZaB9yZWaDGBgxDqPUjBBnKz8JsaKoruCJoXfzKdBuco9AmAgKxeSYFTXEyEtTnkaB8k4eViGckTjB2f",
  "key6": "64rkDUVBGuuP7KkGsoB1ZKE8CdkFspLuqxMWgg39NLitmsVTFbhqJXp3vj1jPyyM631yjPXoeoE1kqQaiTZq4WtP",
  "key7": "4nz2vtJ9iAnN5PPmko2VbLALvQCNzpLMe74knMhNaZgtNugEHVSoTZAT9pXbGYYgcAFjMtFyNHxQH4xwV2Wnfx5D",
  "key8": "62CABHfmrkq591wdqPfJc3ELg3PCRwgmPM5JkYCEeGao32a8ja8yXRhhS5eEA1TzQRfzGB4Zbps8GpvpkSeurPyx",
  "key9": "5qrguLSoJqcZUnPsG6nt8EMT9ZESY5Mq4c4Jxkt3REtjAhBGUmAbVyDf4ciZicnn1er3kV3iWheJmMEtQHVLStVa",
  "key10": "39qsecGuDJHrKHEFs5paWJ3JQVGzvufyPwQ2WN2YkaDpcmk8pimbXQi5HFsDyrejPGitj8q2vFV3xamhYk8pWoLe",
  "key11": "5tGMxC7P4pkQipYmB1zqLvucTcmrbdMiQ9WChowMbHZdNCWsUQHDyhjmCAQyXD5BUGEyVtqSJiHsCgVtTwV75NoA",
  "key12": "3hnPVsXa3NJBtCrc16SjJETWGKcf4Z8PJZg9D3UamkVNQ1hWw7oPbXAdgiBUuY9Mt6vKgahZXUfZnhatkXqBV4BH",
  "key13": "37E7sEYa1CXypChwcZs6q2dZWCuD7WKZCDCNpZD6LA6a7GLPr5pWAi2GZUdDA7awFQtrvL34Vpj7w7N67P54rA2x",
  "key14": "4fAPR4CwF7ZTEQPRAwVPdmHKEAFmDTcwToTejDUcaknpmR7KgWNVdm7jqPvwWPSLgEvJ5mai8xmKjWLfUPrgFDry",
  "key15": "2ruzz1UkY8pnen94oPL7u5Q7WuB3wjfu7nnM6wexDBL4uebE8gzFytBdSoM2keAn6XNcfFx13cn8ScmTzJYVGZvG",
  "key16": "2CTTJsXMLd81wj3MtwhAMVfZbpF7g5kXXPTjWwF8UVpZuvrCyG2FWkqQkwtH29CEPZbb4fs5L7dNPGiEmqrWKPbf",
  "key17": "ZCG8euzU7TLDmxs3wVWfj6am1UdiV5evkJmHGjPwVbtNpaXwNGKfcKZgCNzxYk6GTbc9txouKixrtYMCrdvsvji",
  "key18": "3kkiDiCHbUPnx8JEHrVCKawg3VDd9xQfTYvg4FEw5qHTmBbxcf36fp7R6hqFcQYcq3KtwqekM3sXM79XWX7YuGcr",
  "key19": "4e8QMVeSaxsTN4o4dEDnsKRq444ejAGV761szYYUAmfjazfNxsdpWbf7h4tVcn5mr8Jqo3rR2nnYsyQjqWMocLgn",
  "key20": "44wUVQzTKfEQ4hYmVLd69cJ5RXquuqkiPeHGGdnPbNAXAHoRsTJKGvxekZ7qKfLYRtzUf7Z9M6Pc6cmrmUNDzkWf",
  "key21": "3CYj5ZK4GUNRU3BF3iY1FVmrwxrUMT9qQ1ebypPMB2dtqhC5LFbiRxfkC4ajfaExyhFPrtAK1B1bsBnYBPtforeK",
  "key22": "5nBhnN6EzbXnDfzDUGxHVPd4c6xTG4sw4HMKgj8b6fc42Cr27KaQLfLKzDD1EkyZ4xeryhyckEbeAB9sRqfYvKLd",
  "key23": "619tuJBvANUp5oRMEFvcPQbNK4iDYQKUgWTxaF6wvpd8mqKWYAT3PdbCqpGpHXeKacqMhie9ihYMqDETHWMjCr8E",
  "key24": "2QCpnAVZP3inNzBt87V4qfN3TjQ4qGX2ZTpa4hsXYFm7jcF4pyjKM8vFssugPzGDoaBBTxuVXejzVR8Abs98Pjpg",
  "key25": "29vSQRGoccqXBWG7AWJboY6LEDhu2V3zJTXq1YadEx4rVVBYcHbSBKdmn3JBWX4XQ7u7eEeMNBYNkXZWsCdSs2VK",
  "key26": "4a2DXogZEK7rYUhYUPm1iCekcCLkAc6QAJjqn1wQYkxBrigEMzEc2Rver2LwmR6p8VTLaW2fvDdbNEQiCysBmm1F",
  "key27": "5MaigzNZj7aXyVkswor3xCpMMsNC1Pkghgh9XjQ82RoCC8pTrWnEV3C2kNisb7wxg8tVWyyHR3Lk7wCFiUvrqCcM",
  "key28": "4WbAkk1Af6tAMMwWKsMqbx5NMorqrCRfiB6PxTLrxEEXEc6FTBuyaFhuNF4WBqvWNGDW3PLs3ypXLHi1iQG6LDdk",
  "key29": "4B49A4whosu52QRASQDGSLp4y53P531jStwmSm4khcUrw34Eo4Q5HgQgCbK1h6D5bnSdjPkApuvEH9wWcwzCMzm2",
  "key30": "38PZwcDyKH8mytmdKkhEvLNhbrDaAoCwjjYE5XK9WKE8nNfEgGnqZWpSdb7DX7UrDZgFugZ2f69MxQeTpPJLi5Fs",
  "key31": "5SpmLZBS2jUvyT6USvDWb1QSFogyKfYFXgb2VK75tXDLE9NrfW6msEC1jv4ooE3MQxW87aCqrNH5tYtF4EbVdmW4",
  "key32": "4uvQ1bEUU6FR9YDHRV5xBRRMN8DrqDWfDdvb72XAD9FQxqpgBnay6YPM5hucBwqMA3DrchgVRVxtzURTXX1Rz3j5",
  "key33": "2wm7iqrvS9Lrouf1iEx4ne7cSTnUjhc5J17fC7g7cDj9JxyuQJt5s2a95yoQ3YRa8vVbxfmNpvW6i1LZByTWvPL2",
  "key34": "KJVSGrmEbRuo8jnWqMxRx1XzGcCf9AyKD1CjQ8dd4AnuwWLGZkzcwcSjHgALJCYGm6nqPdtpLPtnuWpeELXJMDb",
  "key35": "4Nwhh1iSrukmMC9QpS7CT2i9cfxmkdSAPwfVUuBDLEcWWa4qCWHThh74BFJybU8SamPtijDspAADoNTimKWhzQmQ",
  "key36": "2FYkN8tTTAoZvZ8sQMX7Tf91SLG69sYTHEPyKPWTYZpmnkyo9bzR2bM88JNcwqmzXGp2yGMktMfiVoxap98zr5oy",
  "key37": "4AWeAmrs5ZLEeaEqtZmrc4yG1gP8nwNn31LCka485kmY5AtzCZTQHntApnrKYhAgbt5yXMUQozPosXScn1MBY4sk",
  "key38": "3xY8yj6eL1T1gd5rZd27J9W46Nza2K2a9oJukA6crtuHrNUd2ermiAnY6jWXuEzpKn95L5zzZ7ZAikoSobYamLzJ",
  "key39": "5mPLoKJv9scwam6vrL8ZTZ4i9NMHCLq9j2vCQ9eA2buWnZpDpQJhtRh8FpNioDiB2du995dBZYVK8DX6Ua5Hgfp4",
  "key40": "4uZfLRER2Fp6aRagNJKxR7GFhvC6eUCjRkMreMVikRSZqosZ3PVcfLG8bWphHU7KaF76vBukhv8kLUR1HdwqD8mi"
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
