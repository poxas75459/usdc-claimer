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
    "42MQWyYYtWz8ceA7Lz57LXAu9JXCf27ZupjnXLV5QDxr9NDYtM8qvnnD2TRDh19qawDf3hv8GhrdB2mH9Bxgi1Er"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XSD9SRT7E7ge6Zvw7FwbHLdm6Y86dDr1x33tFi72yCWrcNd9tGeFRZnhaP4CGYbkW7beBR7zBoDQapzRszioDPc",
  "key1": "5qhmHzqvcdcy6Ed8dkr2j6UMjXKVy7APKf4TCzZvdsvcbVtcdrAkFzAxz4cawi1Ekz2ne8rNVjNW1nE295zt8N2Y",
  "key2": "2HhX6X27ZLGQACPHJuESb2DAxL7DPikzdpPxMnpVjKPKHf7gmUyKuFvfydLrwW4HKqrMEdMT4xFLamBDfSfwXX9M",
  "key3": "3JT61KfmVNDe1g6YkjiZXird7TZztGdeJjMNTgbWJBCYeGUEQYrETgRmBzmZFgDe1h4wqjkpMXmeGRVM4tsXkjnC",
  "key4": "3tdGcFMBjz3a96JfvnDZcBHnyAXiXEngHDE23oApZrYkqPLwv3iZvhcbmt6G2WoZYe3vTNwr4Wbe6uLAPhNAscCN",
  "key5": "2aaHZ9s1B539N48po2pWzDFckdZcMn2WugoCG6k5m3bMGgoS7QA51J215dvemB5FthY1tRZBYgQcXsWw4iVpmXVb",
  "key6": "5Gjk7w5qhKnGAd3EC1PttqehLFyxtirgp8irNsDRTqXwuYyCM27NH7rv9zBVb1LQvKCALh2H7wgM9HGy8AfTHzr8",
  "key7": "PKB9r9MZDJoF5LBy8ZTVNaLihpDSpivrMitVjCFvdEgipJhVEgVNbSAg468eajxqrkb262WSLRnap32UQnzSdhE",
  "key8": "4bK2TGYnyFpkedQu4KhAi53wZDcz6XYyJFQMcgqkWdUzKbg1Cndsz4YCzuHzwL2MGX3caoRUvyxeFtgw6TPCb6wR",
  "key9": "3H7mBxP1t96E64vsG5fKHtFZzhzsrUv83zNhnN2CcyN1JMS6dYXsiiuid9wKRze3CNNribDV33m1XbtEFmEM7wWc",
  "key10": "5amKKdUjEtLFgNGy1rmK4EqnPzkPxE3378Ru9uhvDp3TExP41akaReyh9aEaegJGZm7N86ojm5zFLSQ2kgERDUjD",
  "key11": "3LTsfNserVJeJSvUWyEXccmxgKiYu3k1K5tKx3TLA37GrPL3zMeFD2TTDtoLnSt3uqNwA2gzeNivdYDWSP4BoyQz",
  "key12": "4FxmXwcz4YW6T2iTDdjPPxpnK9WSViLkuyhbc6dR6Gntsb2fCxd8kyAdYQcueBrFTDVFdCJcDtQFALuDa1ZW3pn5",
  "key13": "2xdbgzeL3rYuEnzBR73XkvQ8mavibm2WUAkJ2TbntZD4WcokHLmWRJura9BdYi6orufgkMSztV6QzjtdUdfYvKgz",
  "key14": "4Y9WgG7ZNegGHDSfnnLvKt1qyenAaLu9xYVLtxSqqGkPZ2rRo3C2vn64fYpd672X6eMVf2P7VSbnQzsH4BwmALrS",
  "key15": "3rmnVbb6FESwMf7F8wUyBnYFrXu921iaDyVUHmRoEPQiNhCYRrAZYu229hAXt9S51T26nLraMeamhFLhbxLh92pM",
  "key16": "3U7FqkEWDU1MszttyemiY2hTcnmKfdVumgrduLaXf1BmGVM3BQrf1VACqX7aLoVacLkR7snLSv2a2t2xQQRxEuMJ",
  "key17": "64GosmYT2BtFnBrKwShdDtfgZwgiYuCrj5TxbnzpdKC7QeexuUhjcA7BhBfdtTmWk8qXyE2xVc1WQ6YKWxKSPA84",
  "key18": "5bfd7nnks3Lhwjobie2Sc3nv74c6ahDLk9gAaGmqcFzzYGWbX3k4shrAngSfHh4g7AZuFaDhvbDRefqiuoV9K1rj",
  "key19": "3RRqMwnPwpX5tnr8QW5VcEsj6YdegJs8Tkk3ksLyPmPkpdzwCLpUVHHPVzpmYmqEYihmQtAwk49kZRgj7HWrY58n",
  "key20": "41vFU7WAqAcWFirBM55wid5AsKq2hNAfsG4MWwCGqfQchGv3CcH4x3XKZSB5AgSLLw16BL1Zb4hULRdrJnF5orE1",
  "key21": "A8S5XA5oYq2V5L9MCRPWBjBe8EjieB1rMcNydKyU8mM5yRaXWkTae2QLmk7VUnhF61WcMqPcaiGbsFo7W9rXTxH",
  "key22": "3egRPb13Ct4yYb26WDFwEHXckRFKd6D73mFDNtYbqjYbRLMqSfXeuZFapdBJmq574jXpJLrruj78eLBA5oZ1eVwu",
  "key23": "5zeE36rRD38A3X7BG2PYEXEomccMUQcJXC1EWr3MHkFBfizvvPTjoLHnmCqLzQyRfRcDYu4TtLRBgY9yTwMbvkhr",
  "key24": "aCZrtn3oAXXeWFZRYvdZjhYmL2aRAg7PBTJi9dGgFPp6ktFtxzjsrCT7PuCRd2ufh2dUmrqeZ5MpVWaNkGTwASH",
  "key25": "39sBWMSkyWYRLAnRYn9Y3G5W54thZBsZKqCPnHFVW8M66YahgnWKqfEqW4A1BfCQjUmu1DHWnjSXJtL8oNZxtYrj",
  "key26": "WpyP8B3mmJeQtJzTpzP8tvUXMsU3pYARbongGGHgJfb7N18H5h9RAyxAFN3ommEGjeyTbdKMAHyPdpaVUertacf",
  "key27": "bY8UJMHduRb2UY1DpAxX6MTe57hoorrKUUoP6ix8K49zDPMdnXv2BxHyUtNuGQQcjvAJ8as6X6SQsP4NJ6HPnbQ",
  "key28": "j54DA5yphx9kKsJWQacvf8VRnQdC1X43yj4NpuFgkmftPnqtjubQpH1iVJFjVdfpgkETbyxcbZS54U9htAQwZP8",
  "key29": "56xBN2dZ7WWJFHkP3vbnPsiBEeavWqfn6dSTi94SgZj3hHxmRHMmnXRTe3geHwKQtdjBCJLrUw6eQQGWmShX6qrh",
  "key30": "2A2ps1iq6fh5XHqquinGeAar8uPQQJxSYWPpWJLSdnLQyPQQWfRwZi7ZWLZU12Sn8LDmCw48dUXaxX4kb8KfXQbf",
  "key31": "4dg71axDKa2Vx79VcB8o1LRX9cyso5XT36H1dcSxt1z8tLohg8pqyEpGdtoF8Ko7V7axMby72bWc1fX9TcfoJWVj",
  "key32": "oSyZPownkA1dFZ9LEN8M2St3bY7Reo58ZetJpWg51Q9GtxWVbCMH1GxNYGscbjatnadpSnQTkE8zMMHLtd3CX4t",
  "key33": "SD5abAqvTj3MFW4PfhbLWJEUVYRRqBevdgyJdnxzcH3ddsvVyZGduRgoXA17fKN7aD7UeGs4ojWgMv8QqbFqCPN",
  "key34": "46WGnjs5fRdKBrdsuxjCGCr8Dz6EsJHw4jCoCA294CmitFfDLMctguSZyTC92ij8jHu8HecGzRR1Ef2fSCVMs4Ea",
  "key35": "K3oEqaevmKXZLi7bnysM9ybcVCaqWFLpnRV5WRSXWAySZBY9kXGsgqHURdZbetFK4fcwyVNdKfjEYGevnpH6tGV",
  "key36": "3bCPbPKudDQFsRQoua9zE1BmH2Gpr21Gckqk91fn4mJs5hfbmvqF7qcGwEnc3Rusp6wXr5A5GSeui2vvx5g2pbZv",
  "key37": "4gRw7zATCcmMXQSVKNHpMDN1cpRnXPjrYa25pMNj3bTWBCSWTczjgNVb2RkjM45tdmrZ8ph8MqgPmn7Mw9B21A8M",
  "key38": "2uQT4vW5nj8ASbawsnBotLrGoBtsWvDNWhn4rJFTF8WqWbV2ouWCWjhzhbbTYQntNx2GwPwxpUvdvQNAeJrdR6cy",
  "key39": "5skMeiCKT39pVP2LWDi5H8QjJ2km7g9wbe5VpLwGQgWKDX4ZBgM3pKGZ7dY77Unp7UME3woFAiWvZ3fXh6f2qyYz",
  "key40": "X4dW4havCC5yZGQYP6xL9Y43pvvimQsRwjKkahpdVSMGRanajqYGnyZpLWFiic5wxXpy3Ud1GB3kppfvxaxRv1p",
  "key41": "49aMu4sRLBJmmvwMYh7CMD9SnTYBGpez5hj6fVvNakiTwB6soEXA6ucqcdtQ7fKejXMkFRxh1UXmh5MotD7i73fF",
  "key42": "N7d9ST2Sso1H7fVnUSw7eMHhvu21kUsHcNdJxeAiQS5KTne4SEBo4bTNRZGAcDmJByvpca81wpwe77VCDfjBByE",
  "key43": "5EkLrobkhmkU1vFidkYbPhKZfc8ygd1HqpqLsNNFaXf1SjQtdgseGZmXz8mStXRdRE83frfWYa1sCrTzUGhC858V",
  "key44": "3TFyqKPVBdZ3M69sHZpm5xuZreLruf28TCY3vc5WXmd84fTRmkMMnh7vpfdp6nzkvnSH4BGZydwyWTC5zjVKU5Zg"
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
