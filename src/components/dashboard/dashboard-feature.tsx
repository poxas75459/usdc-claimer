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
    "3iTig6v2Yh42GVxGB8zS2CmELrYc4D1RHZqsbQuY7jAi2BCSwuQNn18pEFaMfqmWAVAxcAdG1v2TbHMybT6FRRJP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MZFhDkzhEXyirszijTsfd395TXzWXBqapHgPdbBZxWrRi49NjqnzJSjh5xYHPwQQUnbZ3bZfsZHB4JmgbBxEK2k",
  "key1": "5rumGZeZsq7ivsgPS6hSbBmv1dxVi6fGc4VTGTmNnVakm4iFVmWAwLF2HNdg8z2H7wbkVeo11Xwx4TmNiMUb6biQ",
  "key2": "24bMdXGEPxGvWHHmou1LeW1V8dKeM1EGbmDgd7D7HcBqX92vUSSVykM1uw4etCJtCAiYZWZcwsrg3K1JZsqakr7T",
  "key3": "49pEcHVavraDYsD57GKNet3KEj8fjSM51bs2kzkjxq3w8nfRdPzR7w77PeJuPYbmkA6JJdZNJDGZhSodXyd7s1Dh",
  "key4": "FwcPK5R8pt6GxVuGGybdWBAmfPycgB4g7zAbfHzrGKD9xHkEBrDHwJ3FMSsiuEt9kj7WarPAK9wmT6RM2qgWkGL",
  "key5": "5FvpAsL6JjQURw7MPBK8om8QavbAvJTRfNNxs4XveuHJpAZRkygUWnX7cpGPDwSo7ykQtuuyfy6QdNWwwBRbKSf7",
  "key6": "3Nyph11XFCKpAFjALTxiumi8RJo4GRHLCuR8wjxnn8BPHhqSDXqgzAqfSgouxvPLuYucSNgVj8tj7uqHMiW6tBpn",
  "key7": "o6vWWQdXt9Ey7oKYvMrFMy2RQjTWPYJg2pScbBzUBDFWkfT5qSCkFSuN1Jy82TQmxyFeLVW7z1BstN1f74GAHww",
  "key8": "3aEpHfFE6AW91Ed3BKS291CKF5QBN9VGrd9vFkJEkYxFFcbdPmnVhy23pAdK7Qr7jBDsQ2Qt6KeAwiUmijaCnLfV",
  "key9": "v7vB7Go2LMAnnuvNnyoTyVx8FsmHYs74a6FfPgtTnGufGTN3Qnb7GDLb39Mx8csRkrCwghqskubATBgL4sZ26KK",
  "key10": "FiijVn8ga3an9FN8e8X7FNHYXUPuBpABGaNq55cWLMRPTEc6FW3ZFKJvm3FpAAqP6XRutibVHCL4K92mK5dcRtT",
  "key11": "2CeiZANrcGadj1hW5dhKeT1J232TosfrgXnxi63TekNjDD4e6ocot7bt93KaYKTMN45427q7j34xAnz2NjerwDzZ",
  "key12": "dsQkaF2dhXtLpaNKkyLQ3Cbv8BdbHzPpxAXVCngUd9zTB35cRXNiMViwZKP8Pj8sZt13apbPza2SoFfULqN4am1",
  "key13": "3PEvKqsz3uaRPsbCf44LTu7RHW4yLbeRqaFBqviEDM3uSengXr4NGskpaMJYTrwgxHPo7Vi8UTT7Y5yobTeMHRad",
  "key14": "5zDXcLiJXu2JcuWNrvASrozY9VhwYaabjhVRvt7hSyUJHp1Lrwjw6FQDCpvJfks48xYf6RyptoRHQAe4RRFyvWNz",
  "key15": "4KwFuKxytLaXyt6TirzAj44JLCrdcnzeF18VeQMdqeYe51117pycwAjxhRXSkSCGbC3pwRdNh7KXYCuEo8cTamrY",
  "key16": "4PMNKVURCTX2xhGAYi1zhHSQ4aXdrbDv7KbEhhh3iS6Kx7haV34dGkErxK7dUed6yHUQTyiCjRkJiH8Aroxroz4t",
  "key17": "5vmhn4f7Ezp5Q8jwvkWk2aUJXENGgxoAAA1AcwZU7r1b94ergCi4ZQCuPCZzqKn66wRnwDmh1xJ2oUCxZC2Qumgq",
  "key18": "4gh8GhHn8TXwJgiMxz2WjBYvGwweyuMvwzotVy6cVKN7exWRf9z9RUDguYUiZsqxcqqnqsbQDDSUWTvzdq6u6LtY",
  "key19": "33nuapSVm7jzaHpTvhxeDuBFxJ2oVHFejV8pY6ALqJiaL8jL36TMo1u7Ni34Sp9bhCzndztYhzo7aevcq5qfqZXW",
  "key20": "2UeDFiVUKqMjP7bTL7sxRtrMXmJtWyGjjPiStiPSz25DFYKBGkRbBs8MyEctMMpDS2U1JtKCgj1SwXW1sLw1zZjr",
  "key21": "2HHv9r8rc9bEqJij2hQrFSEhHDs3tmoaGfyszQJPAFz2VgXbTbFXZQSp48FxnrHaieza6dsmXk8kZQkm977YUaow",
  "key22": "8EcbGMFr5BYNZdDBxug91yvwiakGF1vEpWwsaRggbzpwW3uepZUHYjd7cyeX41McBsb37aaYXuwh5rYxCQrDhk4",
  "key23": "599maWui4qwKD7CD2gqudf2vQafevydPCA8pTH1LsvUue8YSmz6fZvTuiSHZ1hqThqTjixxEEES9Qq1thBcenLi3",
  "key24": "wjRf8AHYkN5ShE1KWXG7fc6uhtfDbgUhXkXjBvvBXJ6LHvkvPECRNws5tZgz46rkymvA83XeRwnJkxzZ3mHhX3C",
  "key25": "66bgE87BdMdiauhPJrX4JmVsfzHmKXoBcxBuZmaJdp3JrR3LJfQkNW8bQEWo8vECcmeP6zkhQ5e1jCpGpqcd5Bv",
  "key26": "42NhkSvUfDLJXwNJHNJyRHSxCjmoLEMeuCpRjkHGdAQynzuLBHio3WzXKkPa4UH82EMiqfNp5ymba3v4rwjDfWVM",
  "key27": "CNtCmbkTsQAtRjYJUowm6czhP9ARvwrUq4jSbRC5kAgBj1bwmTiXVVxkDBQMxEHmEutTqA7sWhE2Y3qqVoXH7pZ",
  "key28": "4m4uAnPnjJkJSPPiWteZz6A86nMUeyUYHq9PDVfP2SsEurSYgzCuhfq6gLQvBVQHstbqnsd9j1yA6SWGp81vyjyQ",
  "key29": "3jwQUjY61Dg3FJJQ6onU1w2bboSvgT9MEEcC58E6zd4gdem8DkN4ZAPGRTjF4QULDpP9h8r2oC25Hc2WcSK3dbfY",
  "key30": "3DxCohXvg5bBphXV4idbcD22pL55FjjiB5dYY6YwDUkq9UetdDcKXyuR9dQbMp29opJKtynjhUVL3GRGhqJZeuj5",
  "key31": "4kRxAymtyzPvbnmtcCW4e53aXDpnszVcXXoA3mNMXC5n95DdjbVqpzxk6257SYhU2ixDgcSXLK6Scze871nxHMR3",
  "key32": "4caNeEnKSvVv1DV2MprPQB1ZyTc8xV7nKWZ2BBGUNFeLEgE2GDPHFZR1aK2ZQR8vFnvZTCNPqRUS64aJeTCpKyUS",
  "key33": "5mffAB4FyrcEWyLCRzhPWNqXk4H6X13CBK5VZf437caiZxVLMzFEh7wY3bPTXjeAxVco55LrSowmWUCD8ncVUjKK",
  "key34": "3P6E7KzVb7dL6z6gjQe9w1cmSqCd1QjwSYcDr2666BxbCCjdwTnT25BDWkubjbucJe7KapQgWf4Y3Fwnx3i26wrk",
  "key35": "4ezjxq4RPTQ1qBorS67bmeTSPKsgmbFsCpgVdReeKjzEDp4WL5jhFqUNUUqKcWdbUXTupgAy46Yf2RhwJKa9TEq",
  "key36": "Cxot6bJtZrqKqz5DwUJMjeSHj1GJaeg9ihz1XMR7TbxodCgWkJac1WPEwjR4GjHdxd8PcR6qvQjhiztjPqTYQDf",
  "key37": "5hRGPFcwd7fiBEmh5RWFXH2Zk6qfHKTsrvMEN4GbzdV7oDRffdzJ5PiMCo47GgdV8i5F2YiSnrmy6BXsPXbvuSLb",
  "key38": "4ymdBahneVgmvfTLi5QVMLBbPwtdQCfa5gyA5fgspCgFGfvF4xdhfragrpXbV5DmrajYzM9UG4WS7MNRBtBtYJYn",
  "key39": "5ocfiUrqi5kfsEzG65CEABsjw3bWyPViThWQtDQ8AF3EvRuDNqsbDRisAA2AeermK73JuLXAEUbC1DTJY8sN8LFD",
  "key40": "2BkwTFfm6SA7mGtkFJjTuHVLRdk6QYwuLcRrLEJmKT6hPjp6UPv6Pq7Q2WQCKokKGFoiya9ndRpjPZD5eRpLGTSK",
  "key41": "YVXpcdtHuF6L22JGu2h8UonzcFXnAsLgPnnnmbYjavd8kDfiRKPYiTTx6smxEaHuTwAshRvyAT1QnLxUpxdq4YL"
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
