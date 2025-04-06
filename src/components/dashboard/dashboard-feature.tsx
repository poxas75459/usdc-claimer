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
    "2tv3chPyy2UVZzyQ1teJEA8J8JdfQfepF1RvaxKMz5b7MWer2nzQp6K5XUw6FPFBm6wujXx78X4DymHmZr6mPe3P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vRFh2LnvdcX8Sndh3bJi2Z2G8SV5M32gY76XDxq1DrT918HboUdujXrbYafiq5FR55sFj63WyehLB1ZEvnivyGS",
  "key1": "4DG3B3QVNWc4TozRoZKer73wDsoZD8gW1vmPkQhwUaJSc5eGLmuBpSzhymfhv9qjDaoeQ7QFjY9iX1SfgfnrDw6w",
  "key2": "27FR5vwHmb4Kf5bRyWNb4VffWdP646qx4wrVp5ZqKBiY6eq8qLtFGJi2Yh6VZpyxZVGF1pEcehB5YssjemGvXDtN",
  "key3": "5DydVRsRX3wtSsL4TwtTkce96unjxtEBkHgpmSQ1Xz73MvFVDtTSL7R3NDRgtGsmxVxb31j36LKAXgU1MSyp16xV",
  "key4": "3cZgz59LV1Bw5ksHdUPhgxDTan7CyrSVBboadymCRvDkXuDypK1wDvFwzf8fkhAvgtipHZXxTHMKaqJG2T7WymQt",
  "key5": "eZK1VccrzkQ9UinDLLNSCDmfnvsaVJhZ4Lg6D1bm2rmcsvrPT4taH2ugENUa62pcBurLJNRi31cdHgBw9M23zGo",
  "key6": "ZEW9TXvkJtxVc5578umbpHRN22xnwCz5DNFKZ9MEMna9VDCuksoyBE8ZRcEYuo3Cjyiy2ddfARywxpQQ2b4sNkp",
  "key7": "xvKpR9n5F65h4GTMSnYYC81nzythdvcxrPQ5pQyCxo3DNmhqCQf4kZpHXm1puyizH5THyh2FuRY77ubaTAsxXn6",
  "key8": "24RGuJmPMdSioWn1n2trX9xT63CU7hRnYdrA9z3qzFFSb4bWhuHwvr4nYNQCyYhQYW6pHzMBi8yY8sS5z4PhEK8h",
  "key9": "4pm9fVff2x7KtLrhVkXNpFZB3HaiHQuXQ1QWzKUqAwxDsEMkZxHGHtJX6KKYmeRrBT5ws8BeuwLj44xnQZJ4tsaT",
  "key10": "3UcJkqFj93cXyDcNJb9Fpvres576E36Gqr8QGyG6YDHkXGSZLTgGDd7m9BXhSJK865DN5ZjHYuUAGokBmQ8eue1U",
  "key11": "3129HcpeSoDWuyoNmZfCf52VdZLXq3HJux6eMs931f3SvV3y3ATgaYVr9ADQQ6GPrRMzLvij5H85o6NXbEFQRvgw",
  "key12": "XcuEQKuNP1S5eXFsSwCyym4gK2e7USrsTeweKPtkD4tsZ2hWyqjyiuTgcRWMw5ZR1QLHAFCi7oPpY6EVsrg5E7f",
  "key13": "2i4KwzCQhgeTMnsjnWFWZ6go63NHBBDQPJn4iBmyuLB4MnetXeqc3TSmPAPs9kHZz4jhWGixMQ8DqqTU7RqQLwxF",
  "key14": "5yNPhRHNyMVrhP6eQAh4yvU2brYTad5KMhBsHMNPiaL8eeS2Ajzp7dqkNMzE3tBVSJwEYGijhutBYBK8EnnFqJyD",
  "key15": "64AKT7MnRy1JhK3FrGPggAGrXJra1scEtMbTUoYQ2Fyhyg8Ghi6VdkVv5e6JCo6stmYt4S1qRxNDvb6MwAsmN92A",
  "key16": "3jaywHvn1pNmC2qgLQQY71ZNVYAvg22NrpX1V9opE3yCsdz9hq1JvQ2XrYtnioztDnTX4CfXjQ7kMT6y8U8BETNj",
  "key17": "3kpFx9bELronMQjNfMsS7aAggiTcU2nodvwq6nQxJLiX9CH6MBfqwwrVCJCJu4WA5Gi9Q71Y8HeqTr9B43A7ZZsz",
  "key18": "3DRzEPjwWMxLM6svf1fNYe2gvu8mbaHYLAVWPbgUQNBpNi6Es66GQSWxTrNTLcYZH2tiWqLFTim3pvBTKQ3dmHbc",
  "key19": "tX6FBJNWWmoEX5xDvJxuCodNazkbgQgv5dHDiR5QQmsDHCu8LTvAxRDpmWec4YvBwhPpz3SrCZL1qV99i1t4hqi",
  "key20": "faJPVqtuLSdHvcCzoNSm5heRh4c799webbeqm2jCLC2aZABm3WsnjWTbULxRgVpz639SakwHS1aq9fBjanYbuvY",
  "key21": "3tzK6kC32nZC6pediPP9NzpST9zAhmVPf7YGBu4CXsJeAEj1rzkZTSreV76c1a2amY9hMxwyYfn3VtmpmF4sKM4o",
  "key22": "4o6NjorTCYXwjMST6h2epKHX29Yjbn5dohZKqiz2o6Ny3ZwAZ62Mw2zWewKhoYpwHXSkbRzXXRcVezW67xK8Vdir",
  "key23": "Yjp3TE7rtqXfaqJL6uugnkug4T2sXhPv9U7ndGfjFRvRBEgQS8ScxayaKe6NmWneQi2FwZjAA3sBH3z9c9pywma",
  "key24": "55T1M38qomZVXhDy22Af6NLnTB49QfusAxfSxQ4JzCyadfQTwMwVRZaYF7prfruQmPdihXBHAhGmWUMQRNoSoAbk",
  "key25": "37iwj3VkoHgHAEdCgRUGWw4GSYrRC87VzimeDtUYP1ugnobxk7ZYw41SU4x7AxWytix4ef3UPkZohkCwSJfWntx3",
  "key26": "6QT8rF9ieB9q64TBxqtnjHc3febeQfxEj9gUTvNBhWUCS1Tuc9mYbZ34PrQxU9EmeE3yDn9udEoJZF5FVzjkEDb",
  "key27": "puccNdenge8SKCidC93mPYa7ssDjMUFXvE3fnwBdr4Muv4F2PPDZiQHHET4qx6nv6J8fDWecWPAVtjxNE4WLzUM",
  "key28": "2ay8oa4W4DSTg82cKbkJPWBZAB6JVDtfaw4PnG7JWzP5os5gZVKLnNy1gSdcH9txwvC76Rv61VwTmpsuxXbPd4QY",
  "key29": "2S5V6U5NzDvoMx5Uojd5SoA6SAbz5ngDDY5YEXUp4QhZqfjoAiafPo5eeyJhwCMypuaTobQMvU726c4XwLW4j35e",
  "key30": "419G24T9WVHAGmiDLkeqj65aDSnZGFEzjTuQ8Pb7c4aeAyeMk2EUKJ2Rqcreh9xq87YANTu9DEPHHhCYvTyWvs43",
  "key31": "3e5Fe8RoEX3xBYY1fqUAJfBYgbaEdkNKpioeHKcssU3RJmN4ZsabD5ZQtPejUkWLHzjXKVzqkhQZBahJeyi2s4vG",
  "key32": "4ntDMRuY8ZsaZKrMQg6oTjTwAgGdQ1VezBp1xbZUytQFZCchNNmzAZSpTXYKiGHTHP98a5xSQDxtnf88mzoDcJbn",
  "key33": "W5iCdf3GrSDZ4G6yzTU6D8U2f7VBVsqQekpYD1XLYiXV3HSKAFyhyxpjhNhgTwkEyQQbehtCkozJ9pQQrtUkSib",
  "key34": "5Ry34aMsNddBWNNDnxEkSKzh2VLsEd9uUcKuZ9tHGDMJ7fWYCqfKWZyxsxqS38KWWK3A7KeVXpavFxMxP1DR19WZ",
  "key35": "3CeiviGXJBX49rPtGmBAEDj543edkobJuiReRxrV1aGUCeBW2vvj8x7R6TDVtRxJTCRvyeKpvtws2BrVQf3LiHeY",
  "key36": "4VqTbD16ky8ThKzJiZzfny1e35zTAtEMXV8EA6ZJZh4efeWVMnTZU4mACgq55NSAQY1FT81A5BdGjfX1VhMFPqto",
  "key37": "4hZ2Lafjh1ejHZvStreBbythS2QXnDApCrWchGKYE8zKpg1m22RvTVKMftb8fMLR7nJK9Mu1yYuGPcMS5hQDDEEa",
  "key38": "5RVPdWV3k6NM1yd1zRKAaAaF6gtYxzuU7Bga8bVxLgPJAei2FNcTpzvNhArCWirg4cxT6tEjmQBmEn62nrW9KMqB",
  "key39": "3hQsw4Y4LHswyWMQZef3dhHb9jsNqhyCXkurrf1xPyTrLSzSruwjP9FHpdkNm1t3vZqnZZhGQ1ySUr5CNc6f5PiQ",
  "key40": "2fCeKeFv31F1X3CiLoMutRZWPcwCcDaP2br8PKjkfRED7NZbaFvF3juM6sMxefftqfDqemvvqmM4antcgJTFfHKc",
  "key41": "2spMD7jfgiLHw6YQNSsE1LhC2GqdiudY2mSXgvDHC4tUZyNLe8SogJ6DKLQd99PjfjxxvnNCh7Gc97m9vCCwd3E6"
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
