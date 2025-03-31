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
    "2noBQJH7Ys8FoeH1t1Mb1q98HheiAKRCWAaGV5Mz8G8p4xogDMe6CTAPB2uJB7MDh3MmCzoWqHUnd6NK1a9vUu39"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tQdeFNSBYaZ2iHSdFWvChpQHXFKvqF829adswaQC2zs4KHWfaeovujwnEfthmaJoftNue3xxoGtPdGMxPwM9Z9V",
  "key1": "3dL6cYkxTenj9wn1bjf9G6b9zHaN6F1JksEre8uzvSrYu7WwH5coFNxTfTtUf8yaWRZHazHAd72ds4dtGZtDtSrQ",
  "key2": "3BVeC2PUb9de3DUVvZBVpihQ17Pj5vTCA9pPn8q9rhqZwkB3CTLsxLd6gFXmzron4gsdrb8nSRBf3pHpxCfcMSXT",
  "key3": "2dmrJzYmqTcw3psrGUQ7ND5zdSnjf4o1jYhwLAc9mGPPoEwvHEw117woLPirDCr6DTzU58QVWkY4QQF6G3sLnYgE",
  "key4": "4hM2C1EYbqmDpfkMri6PyKoo8SQ3x26xbpyYDLTecFS8sEVUFFuWf1Dt4GpsKGjkR5fQe3jcjUZDbMnNeKwDoJZN",
  "key5": "5Co45t6LPbJwJM3GgFz25jW9x8yxK48aKDbckJ2YcgMh7tcaCAwNPeq4qFnJpM2QorFEthMgeeNqw8aNWW5hYfbo",
  "key6": "3BWsC7AbtrrHn2SywfUdxRxBc9oYvnYC94iA2etepmdg7u9pNpWYouuLqiAewQP7LiCQAvKuobE8ahYjkXPPWBpf",
  "key7": "i3kqD5U3PBYRMFGzY2eWGqwkcf8pXnbQvq82CZJn56Tw5ghZm3Y4agjmkSAvUwU4uuFWBuHGL16Abz1ivQRaiA1",
  "key8": "54faS4uUHuqQfwmNafoCPyj3eYERvdvJ3DiEDCpWAEfEAjFumo9EcZ1aiuihv6rP3fVby8JktmpKazfvHstZJ8KR",
  "key9": "3tXiA95V9gtP95j36Z96ozdaxZp3oT77wMJh7jdNq8VHi2qzBV8aTpDcjEsKP4diP3u8QpzEuBjWLnBwMR2hJtVf",
  "key10": "46xd2DCLEDDkpXSjnDGqN9aUqYhj65dwrmfhXvqFdiW7jtgtKHFJFyqjg4zfhM5jMx2XgT3GW876eg1GxP36GFa4",
  "key11": "56SHPbs99Sgkoo2jEfj6YfoDd5iHgj7cxuhL8FYTmzSLnK9JkEcb1Upnvz9PZMBodU7HSx5Frgcgvq5iwnaWBzEL",
  "key12": "5dmHp6FaCfh4z2xN9ugCubQXozWq8URsmeRycFaf5Gt9NHhNPG43QmKC7EfvDEZi9jS8awj2rNTtq3nsxtET3Rux",
  "key13": "3qUqtbAyxM3EdJ9UqKvtr6aPZ876eH3RKGoZB9qPX383oweFNC5AUPfRbZCCQLBdese91vQSMXeHjuhYw2nyLn1H",
  "key14": "3E3oepAkVp7pbWoPXYNhQKNr2PvFF9TmKLuytufPRZXSNBfGZ8XXs1DcyeJ7ByGFbcBRTSoFQKwXKvvNNsnUYESD",
  "key15": "4p43qGYk47fe5VH3nUnNSRJLvjqNovTrnEyGEdkrXhgbnaysLcN6CfkLL1zpaGxo2dwoBhNNrVWDcCNLvMVHECxw",
  "key16": "SSnfbkDtvLn8KF2kyWcj8GmNGJN92t19p5QfhM8oGi9WodTJbWEmVNAqXMeB4iwjEjkpi6cqgiDDAR6GZfo6kcf",
  "key17": "2LGmv8WwEj5cDL8FTUS19jjZajVHuoCYynxV2fg6aoL5khc86igaS9ZzmhYX6BdtN3kU5mMp22p8nPLrZjjHyKth",
  "key18": "3aXAn1MsRbpRMcTv5HkNgXhGgZrpCPemKVpz2Pe4gvYE6u6SaNruf7jobYHPtah4G7UxHwbVxrZDVhoCWuGZGy7C",
  "key19": "66VNFbcxiZMpnyMqpFp2vGbzNKjz9kLCaFNFvMARGr1sgLsDyjh92amAPTAbYRsWF5y6ABk7BfGf9B2dSMS76Hj3",
  "key20": "2JNNXJT9CjP4cx4AfaXRGMo2HbZkpdWxJosr8jbvnVUK2Db7g3Vs8YvrPbaqpFYquTW4S6CszeeHZydaw6fBL1aQ",
  "key21": "5Ghr9WKE6S9t6eM5CW8ewMjxR31UXDCzUuiCySTapcWtzb1SEDVeyn6Ss7K3bZcu682bJ9pW7S36uNSTGWd93fbE",
  "key22": "jSJ2THozDN2QQKsVEmxGitoY2z9JEJ98SqDVi9txRGAMLSjFouhW4TCYQfCCHAqZQGcMoNd2hp5WGFKJ9Z1DnEP",
  "key23": "5Wfn88vtLx6HmRGey2WpSzH3G34EghQ1zDoyCRf32CvQJezCijRUfgULbfTpaMTfpbfViD2eE6XPkz3b8NiG5zPh",
  "key24": "2K9PnR28axU1Lf6YfMrj3p2fbD37V9Mq1qxe7fPzrKbawsruPj22ajKAQumBeeUuYRWDZyt5F8sLQTCxNpUHAGhg",
  "key25": "66Ret5KsBdYmULzZvFsfMnacJPVxuiJYtFZhY3W12MhyZEvSP3iFaDkiGWUeYdFC4g81ip3daZ3GjFLqhBH13M3u",
  "key26": "tRq8LyVNhRsTAYeeAmYbUNBLqgteHMxGUmBPo2uTszfs243BJjSi5GYXhpgTdpmWHsmKgYfPKfCxtkVGKdvqyzU",
  "key27": "3nQMFSZxbhnoGMPZfQRmGdu3AZxNgh4F3NhLUaxxXx4FjoyGhipKGPFzNqgyzR2anoekUjNhjRaSvQ9E2e1M9hRf",
  "key28": "3ueTTwYmkWJaW6JuqjE4jyv3piycZ5xKf2CppCwS26VrgmjNtceB5apX6BZvvBQBDBpgWHzPnG1rPPmVxsiiFo8r",
  "key29": "LQA6R7fpQDjSithNizFxGyAHq74s23h3BLesiZWJLvAwbAbbDNqC1d9D175cwtJA1Cnkrdc3LbF4Lbyk32BZtYN",
  "key30": "3d2RWf6shZWQ5W6KhdUQRF4SPJYJJzHBJMG51Z5A9bYQr6RFmeNtsARuBwL5Sp3r9MrLzgNqx8e2mFeCtc3nMQit",
  "key31": "49dEwAnLHevbs757ZmS5ozEPw3S9iuq8FLRW7wQVErLs7vvPeFAw9E411UEEAtuPPYRgaNdaxGbh8xKjztLi7htE",
  "key32": "ERq4wPgt4CToFgKRyRNvVh8ZGvZdCfwHVwVmQFQoj93iEo7MspikFKAwFNFBBwQ6Wt6vDX7sqpuCr1mxQeb5xyG",
  "key33": "2BVQxYQCY6QMgFGKwZzTZuKbrxzVNMqsUYs7L2Cc5fmtmTcEazGtmUHxVfpPbBexd1oX9d7W3MPN7E26fzBiDnyR",
  "key34": "2ajGMNo37ft7HbTN7NqG2TZbjJRcQTcjQ2wpJ1oAPXcxcrPJjZ6Amavq4QvoXNuZfPzQjwB6EwA41ZTa5s4fFF9Z",
  "key35": "64YBrp533ToP6oNezQhUYsB4padHUPFmGSwC1B7Mi4nz61hjTf7T2rwTGAEmmTrPZwCDEXjUKms1szQdPmm4dkej",
  "key36": "3zouRR8SK85crRN4JJu8y7yamD7fDBc4NRs8GdPXbKPugnFEjSzPza9obA5ePWw9hZvcpaR6UgfF92riVC3gwgcu",
  "key37": "3yyqcopbPEZmjZPcAME1gXv82P3xj5mEG9xwyqLmGBMrND89jJqGsnekiY66m44BNEf69VDMD3H6mgY5Bg6JafbM",
  "key38": "37K9NfEFJYNVnFqJ65HB9B8sFYqnmBZ9v3dGJk4xq7uiqqJJwa6EcUQxwn1kDvYHpnJ9j1sPv6vrSzpVsKwzd7KZ",
  "key39": "22HkcoUar26g7A4QPNc92dK3Kfq4xtMxWVYyp33iEvtsYJmMSPaLsAW4rM4Zb1iwKCGwNAk7z7zt8zDRhDeooSww",
  "key40": "2KKZwMp44GaSgibB65aaMfXA1ZhLWDm6L8caJCbsyJAfdYMxrnM2qX34vhWgxQ6LabSzoXgbEBUqinA7Jik6s4Zk",
  "key41": "qJ28gNMoGZtfnRgLXQzPAsRJU5CbLW6nF2jqiiTU9A9UZFuw7yKeSvSJBfAeKY4juDPrJvFouseSA2tbNBmiQFT",
  "key42": "2sMAmQwrjS89D3qzZezAb1K9fK3Z5AoJ3ADJJ8aorgvbndsL7p1rewKpw8H21v5CqgAVkEFMjbQRK9QReaTTzFCe",
  "key43": "4LTkayugVy5F6MUNyCv4Wv2Tef1zQC3B4WahCHHYUHdjh4TVNQS3DHNNu3y1ULad3NzJGS96PPxKBEqU5iC3tgF5",
  "key44": "5q5iuWYUh2KPbGSjJoTbv7ju98ArTtsEMzu7t7hVhF57MnpHrayTnKoVGgFnP9wCSxDoev3U5gtL14YfTRf5u8ce",
  "key45": "65VAtymLK2f7mTh3RkEZNV6z7ERSXBKCkwFLFig297L2q21UGj4JDrBykFqwbzasGLtQZsu8XpaTfbV7io3k2kmS",
  "key46": "2LpS2xc8G9zZ8iuzmRuP5VDr7EvMgcwrLVTiKgjjFzvgBg9CqeUjrUNcy8cNtdKMGamGUhCTHwHMAkJePjS6xT2E"
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
