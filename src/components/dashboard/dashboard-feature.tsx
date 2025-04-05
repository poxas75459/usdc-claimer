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
    "4cHoyAKtgvPj8SUiKPk1L2Q4Y9ehAHr9Quuz4LXYWLjqtoWHkT8fuYZNTwC1MMf7AEopHDbqUGj53RNcS26KZMgL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h4L9CyedPHShe7D2c91BmpoorAzj89A9XhtxHCULVLCVhafx5KVVjv4wRf4X6pQTBG1M6BFoKBbdbTpopBKFnG8",
  "key1": "2Yn2zB1qvA7Pw8zKhmbGEAdhktFjNvYWMcAMWWZ5d85ezTYZzn7e2n3VWaBfnwFVAb9rkWmPGjWYUwVxf2Fy2uzj",
  "key2": "5q3dBFBdGKN8mgwAhDxaUPogLEivL8TY1QqHXVrUSobKpfbsUgGY1s63KkTmeeFxBxFktkJTckWpe8Bz2ccnSP5W",
  "key3": "fkVZx2g92yygZDpFqYJzc8qFJZTV9RjCBpD8TqMkckvWHVA44kL7Gd62qrB4hd3tm9GGn1CC5vhM7gBqE1Uefx4",
  "key4": "UjSBXZwMySzAptkrP31BVeGtcy8EoAo5tySkMY9AB6fpYjazBE5G8p6pWfnQGLP1RmoJraX1y1f5MdDLsAiekMy",
  "key5": "4LxWA9BNdSKpPR8PVPqhHoxmvfebm63WZ6RZmcNLrPk53HNbRsihSuZPKcSbSdNhUA6QFTuB9oRFeq6QJsYLv4Dd",
  "key6": "F2ohbzQRe2faJ9nHtwg4KGPzrKMFskrFBiE4TwcEKExFJrtvB6fDw9jgM65VVVRPnSAbjc1avL7HY6kGjJddKtQ",
  "key7": "3i1z94XnAKrnSPAYXzxGxijLFQN1Ef4ekXBTwhjQkSReguShEtycrWdMeryjwnznKpddnBq6Uep95aBgYfAwm4AC",
  "key8": "3jA4jnbwHmcBrnzyKaFtcwGYpRDUR6RpvqwjDGhRDZ2RehKDcgidspFPsUyPeC9S7uSzShXZiJEo4fjpZMwQoPzp",
  "key9": "4TsssaW5GQ3PWHFg5qBVieLyyEJCb7zs18exGoTSbP6iYedbWeJoMT3rq5DNVdC11PoZ8ckrgqXX9VPCZkU43PHZ",
  "key10": "65aqsMCCyBd6e34khsFW1RFaDBusdM8QQKA45snK5joKXdWZDvNheGkUXH3QETS4GtMJ1C6rQHbPhFJn72AzEK3b",
  "key11": "2TQAJdd2mgNAuWQXG7uSW9JiGBGVZupNakwUC33n7bvKEujaRaUJ1kPddrsvoyEJXfXeDRE5gnHwtNoZK21DQzic",
  "key12": "26xS3srA5wFp1bS1yo52LR5csnp4R3yoX8iWXqhKc2T27B7ArZqtcpwXJrW438EPsbHEQ7u86wPoQdLumnSxpJ5d",
  "key13": "4HB93WevCU6KUCRWgmGMdbkuY8NYcfKJ8N7KPRCvMoSSFseuaA8VAkxjm9vC7xm35ix75No97qLush7tJuv6i7pU",
  "key14": "4hbauqmFFGX8iZQp7cqiHY2keeTqgPRogT1dWDNsRT9gXtJKdwYF9QwNuiM4PVMXXNF5tgoQQ2JMSUzHyAzgxXSa",
  "key15": "67G7aefXupmSY8ip7ecGGzsZZwtrLTz6fRCLRQphyrLH6oJ8LA4jULHPN8LdwAVEc5Z8Q17zKJeMFNQtHCRitRvS",
  "key16": "eGYb49WNzeqNcZqJDkXz7FJEX6pGNyNkTXwdL2JpqHK3LRQ2NKkbQWBQrCajxgdCTUf4VfN1k6oSDwUHbeiktrF",
  "key17": "BCRd7gBmHgEhyuCKmmi9yA5rApBGmcaFKNCuxsPNCYA5fFmsgYecQ2vfjJKruTfEWa644qr4EgGCWjABwt4HB4Y",
  "key18": "3P9N1nedSEFp71MuBmMvR3Q2WQqoupfHhzr86szFN5VFVswWUW2wZ75YoKay1sguaWK5k37euGc3T8bGnK8SZk6q",
  "key19": "2XctYHw6reC2tgndcH3RczDhBvUitYKYzpqYK2pmpt3vR3LEgtR2zJYiiHEdwdMpiVaDKsnNaVDdTB21v7VfYrnS",
  "key20": "56yamTDAwhpke6mMQ5oznG6yQnYRC9b3J7oCXkDYiXJYLfmzurfWuKXj2mZJEsRMiBwAMdHv8pXzmRJf1NNnWGRJ",
  "key21": "4JyEY9MgwpEYiEfq53FF96VRswr1JD64csuJE8PB29gBvFqoGquWeNqfp8PXAxXd4w8WKjBVEytBRRwT2EzjrNt7",
  "key22": "3mc3myCUovjQYgSH8sxqih2RU57dd71QFp9oW8qoub7JzymvRzbUMvMuonHjTREuEmHmWkepzSqx4bUUsgLsLWQr",
  "key23": "66QzVrqKMrDhVtUo5np4siy8tdbcXgQ4j5oxR5YiJ5GPCoNd4sqi62Q6QVijWZ5azB95e8Ftu8R89pVjJ9dKq3un",
  "key24": "2fJrKFqiWMFsWtmgVKL7UEnZ5yctKap5SiN6Kd2cS97uTKZMoqrziyPkQVdRoJXD79TS7PKxiLVoA8VccbzP5EZt",
  "key25": "2PmMpYKsBfp6yxUSgLpV1bxAGnG12c28tK9YZkCWbuGG6WYZyU8wqX2cQ3SPcTB4r9D6ACVVSMk3gMuNeJFszyqr",
  "key26": "5BYXeS3PJZRoy78sYaeuzKRqC47bKNdurkZvyRJxAUkVaJzbdWLihkroxd84mF497V2qG9qWhpNmVdoBAWYW1Jjp",
  "key27": "5mwC7ZfsAZ1ztmsgakkjhQ2LsU4hGcLdUafAQvPcAHR5pLjGsVo33LvZN59o7xWbZaR5CGa27rtk31mFFmivhQ5p",
  "key28": "2USvfAkYsiZKDxGWHpKf2SKeNXbF7surY9wi6Zb3vd8BvCSknADHzmvs8soKBfHfjy8u2Mv7PwCHVWXmbJMAsRZV",
  "key29": "3pjXXy7DDMoLAth5MpvkAjBJTZYPxdKbkXvnbBmatJHwTzoYmm6BitSKs6bAXoiiwJpL6MJRb2iKKeeDCVvXFNNr",
  "key30": "2viY3gQopoUhWkB5F4BUsfCd6rtb9rJACjzgPtwLz244j1CsdtKVSQg71RL8fbsQ9Zn43gpf1nxFChU29jTAakr8",
  "key31": "5zna15g1QE1LAEeKd1e5JAtU5HPub8YxnrwzYViguyTmFYBGpXJk3MTquGhqYh92so1CXeQqjFjAzfK2hAPN8Xoc",
  "key32": "YFnBPFNt3o13FB3UtYdhvhZD2AJuE5PWU2e93Rf9yet2vXkebvpMJDxu1bPs3Km2h5T3Br61B98SU87JthX1Yov",
  "key33": "dW32WLWtTQcBBczMeFNJ4LXtF3Vv7Jh4ZHPTmDnSiU8rZ2GnkRz1R15qNQRyeEQH1hesbrYvtS1H1NA6zkDuhvy",
  "key34": "2A9MK5cc8Qn7xrYdL4FF4kqP9NcZe9i3F8xpNrfLAKjc54EZKHD96RVRuJj2Pf9vaXptUx8pYZhWMaxaWyUNju7C",
  "key35": "aW7K7T8fDHnxvvprZpNNR9VsmnTxoJdcxxstYmp9fwWUsbvfNMxh6if7vT5JUsxsNNRgWMvwnehYEzWbJgycFts",
  "key36": "5t85eQPtfEXsnqzkTKYeSKpCmD4giwuQoGa3QgcjRcRCqjE2AHXPF2XWBxrx29Y9uijk21RwDed5hgMRu3bQ5fJX",
  "key37": "5SxEM4AahL9J2bhNMJjJLxscksMrH8zVGuuc2Dp6XqLaUNU2hwiAA9zxRp6np4MHkHFKps31jHwqRaCoS3TxK7Az",
  "key38": "4J96zgt9BgGKay4vjBvJT5bMvSvgSwbYNSJkcxBxz3GruKhLCczx7n6E7j12wEZ9JYPpMEz5uDRaf3thoinhrPen",
  "key39": "3tDo7zuKDwCK5H95TGhcNj9Ui1MU3HhRmriraJvxGNpc5tqZUDqMyzvqgNQqs5fGwp4J3S16y3JkTThearvhDa17",
  "key40": "itESPQTPqh4tSQsL99SpRGMVEKLABZ4yUvAQK4t96Jh8WLPpwMJXYBEWTPAYG1nuYrYhw73avqaMoVim7qSR3ZJ",
  "key41": "2eePwihkEztGszk9A3NGUWoRefPDZEWvKBtqYBiV6Zeq3xCp2iheG6FTsnTfBdgQFd1hCkLrKmFNTx4yWjQisQMB",
  "key42": "2DRBChq62wWFmQ6zWmR8e6sXq3cS6EPGPGuya35m4fKdmTQy3n4zT9VWLcTSv8P8JPu14ARJKtq9b2JorJGn5oWe",
  "key43": "55LdvMHcTvXM5sh9emidrfN4gVuNrfdwJaxPWfwHxXHMriCEyVnG8niWJYiqydVz7CVdAgEvbap93dRdfDACy62H",
  "key44": "3h2KVYH3vqn92Bxn3WiZrDMKFV3pPFCjLYUPcjoc6CU5CoRXEr9FvHs9P5UosKsxhpRLAXdx8rVBjjKEWmqhrME6",
  "key45": "2EtSv2em618pC3WZg79ZVKHBrnmGv9KwyaEvB4ZnyozP8KdSsG1QZZh4JFWXagAL9VT93jgt31xuvkBz9EMtjEgE",
  "key46": "591CAUjgD2S7KfYtVsywRzDStciiXeCpCU2S2rDHJbgR9Vf3TyUJs6YgmV2WcneYSPhVmoSJacqqWNViwt3EGUxL"
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
