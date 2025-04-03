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
    "5KMyCmypnnR7KWbDgchUhPWv1KG5qcMFCXB3gRAyqLJmSN99jbhgNnfVUSDE9MM3yqNo4zDABw5ZdkUXMvAUQEQ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JCH4kPoxgYpzie979m5h35s4FK4zzuPrmHTJjehGjmYkSUmJXExTgA7hT3VeLtacR6eyzpmo2G4wNW4TNkpXP7D",
  "key1": "429FBtemAnMMbzABbnQckhEjx9o7HaDmUdMGHKfLeyYddLNcuWuMHCyCwV82wcENR5LoofmmVqk9mtPDb4vubeiP",
  "key2": "2uCLAWUXVHZbtqrDB2k74iSZvkGmVBHSbAJDauygF6XvP67bzjrihYGUF2KxAntLnqbPk8wQacQp1upW15d29K1D",
  "key3": "3njrWYVeZVEHotia2V1py2K7MTAZanu588aeixFeDe2Um4FbLHkMidspVYsR3ekTWHwzJBAFf7zNELCxXwLoEpKU",
  "key4": "41TmCyPGwsSyNFJiyTTq2BhzvEdvEqsFvqHoCHp48H9GDgLgFQJcYTBzTwuZ474vH5Gv68jX45oxj436Myf31NtP",
  "key5": "21Z6WoKcwqfU3hGem3Kvasv24PDhSCratGMDeK3NKgxNeh9hGiq7agzFFCgW6qcK7LUA53vcVWaWA2mNmUyd1sFf",
  "key6": "2tgv6SXch2wbVVd4aTD615uJtTeaC9jB6motv6vrkFcGaz1w7fgcbropLQ1mEaoGrMH2KZd8QjSGnrj745n24j4B",
  "key7": "2jFsWC2vpr6QgeQqNMKRHq27VBRgm2PRNyvADYzMDriv3Cdu7TgR7ZmPuRGUdKmPBCjNgmpnhvQc1swdsKiU6zwz",
  "key8": "45MNfPotF12kj1CZxrX8Z741YGzq1wfvNCJuyRYkvDefpbnqQDu7mHnzAfkXTZdCvRjsPhacjnToR7JeR14u5hT1",
  "key9": "2stxzCnrbYqQVZGqFBSYiSzpDfKAVjjPLa3cyQb2bMd47vmqt8LLt5ZANTMPAb9QArXUTbqzBSrZ7b4a7Lu6dssV",
  "key10": "65XmsMYB8bQJcJUuYCGMB9X8BPMrXNsmAD6sSGM9UMghs4oqbQSV2jHvVaD55r2cuhLURdu4zHg4KMUUVMZ4jXre",
  "key11": "2vLdWc5FP1uteZanv6Abfkd775dgnb8bv4EgarvEZWTqBx8Qn6UxeDecxxYdYXo2myJy5ypH9ew9CYrduCt5bqoY",
  "key12": "56K8fmhJEsGooiyvryjJziZxL6eYN5BBn2n7tjEGZ1HgEck7y1pg3hU35NNPi3VnLM6sFKbSLg2xF2fFayEpXV65",
  "key13": "5bocy4GBG2TBpftQBhaVo3BJRvNSAienoqFNMWDy5qmKaMZvg2hwRhgpM7oZFcuZxRKoRJcuEKuvtL9RGFe9kgja",
  "key14": "5VgVNEMWkxBKDbzMN8892CaKXu4PM6P1ykzjnUgjrBpMr1G57beGi1jvVjYxgXYpkcXnKHaGyg9abMnR3foT8oon",
  "key15": "2UPgmTbjF6f4KfzTnx5J5xDjZ9owyWzGdQwA7WbxSfhNSmKmysnqYwyJnmZVvtdW253RktMXc1Nmof4xwTbUWPTb",
  "key16": "2Y5Q8yN7CmyWECYpPpkHN5VjQ9fu9ZCkKfKSjsHMAYMMdFa2gtEuPLtjbBm5BJPVuHi81kTbCkuy77qSy32eqtwW",
  "key17": "46882PvDfk7DZT8rXhCN64DHpiLJuT85XGTWEoXVXSKYJzZbgitT2nivyCHtyYd1yxRq32g1p3kcUf5cRB9TwiJ5",
  "key18": "5utLakrEbeLWYxMPFS5ZArfzZKE21PMSL36wEkD2wzAnZvpduxq1w65atr93XmJ4oeEGTQZRf4SpvTbjWPeuN4S4",
  "key19": "27Z7T9jxz7Xxq9R8JdhPfMktJpTDANUiWC78Bf798S6RmTNu2EQxsDhxKvb7wVry1B54eQFcKYM1x2ju6w2dhqMa",
  "key20": "2xCM81ZGay3wLSbQF1UquoyA3k1xdqzwVdgYaHWsXv8JJwbK9GxWWr7o64ogA49sRe2wVPhNV5rTNJBMPH3xAtFs",
  "key21": "4GS1Feuz2zapM7MEcydRFnSXHZByPRxyiXAZh1JLHS35H5Dztegrm8bvRGeujqhi2jeTkMFPkdMAep1vaYjo17aX",
  "key22": "4MqKCCjb1LoxhuWdP9Y7nzJdzbSAX8ReMFNrubGAvrmpQA8FjSMPtcscKRq9fetbeS416HZAYSxBUANuZfnL9pWn",
  "key23": "2uphi4rBnmBrRcUBXBi36sDsmEJr3WTSQxgGWFNCjHjNWsMWreU9ZegCov8474NVhxUrGEjCSuvgBchwa7ctSRWi",
  "key24": "5WSfxSEfUhFUaFrWZf6xGz97s96YEEdMkiM34VEbmtgQtm1xQHReQkXCZMfaUWektmWysKmc4sA9ChFm2YMJFJGt",
  "key25": "391GMAHrdp6ScNGLbBVj84YheWAi2jRK5ffDs1Czw2RmCbQVGaRifucYg1un3PycC9KmhAKMDVU1jtWkFHo4pKBd",
  "key26": "3McLBEaj5Wutukvvwwg2KMaC9F829qjqjGk7dG9UpZfgZFwgzF93BphEnU2AqQBQC5vYyNtMMcmd87r2C6wWr38L",
  "key27": "52WpeGNkNJYptXmD4BrCgvzm7bJ29hfufiQL2JUueibAaw1XVoS8UHjutkWF5BCUsW8GBAvx4LCuH8Q7osjyXKyH",
  "key28": "4USyQ4t8q8aHZvqUsihSneX4JMuKaF9T5j9DbzjJ7yXVr3QpEpe3vkecXBpSjYn1C878SXER1cy4MeECyJdFRLSz",
  "key29": "2mqxNNXkRBTC5JKNJAdoyGDPF2ojwEMkiQmvX1QVTpLwUR12sjJcmQUfbtArXjCHU9Kb9LrVNhHAEheK8eFPSgDp",
  "key30": "zEfC469VQCHd8sbb8sPnMwrdfUVnEu2NcpS4CQkUnvJJ9ZUd7Lt3CFkX9L6sc2FVPo8UFWaBWdLXdicmNKDnXUK",
  "key31": "4E7KHkZLdFM57MqjZiNiGZkRyxRg8LUk9D1gMvrxiuQbPrYYKDacSMtTLUHvCsgL1mu1ccFGQcULq9u9Z5A5tc2i",
  "key32": "3zE3tSWH53BKX8aX8xzqbXwcs8tq1Fu78F3EB5F9GNwNCZFprDzMqWbMyxioBZEAw3SPcBPoizcLSV3zdTHBpECy",
  "key33": "5hWboCGcWKnJCKrMqwmmRdGtyzK81N6MyjrYXv8wQ3hgp2HdhbGzAokhmDNQd9QZeccZ7LTZroY78ReX8H8wQ9Ta"
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
