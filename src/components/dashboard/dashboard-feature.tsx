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
    "2JUNd16QRsyDMkCWH1VE4u7V2LuA2tL8qX2w61pWwcQUci4RF5TPYwsRrREtQUZUdYgQFNJV736XqS5yp6rreZbD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65XKBNmEjsvCRWbMhMtj2ndjiafDPg3VA1CN9UVkrBUGAFsKPeXZ6y6v2P2EfUoi3Rw98dBPoWfLT7XSGC8sKZZv",
  "key1": "2Nwrgyahfcr9D8RPc1SpDUw9JWvhFweyThmEJJ1M4Wp2P9yg9Z3JyZseY9PHLtKSbbAm4FDYdUdGE75U29i9DTnz",
  "key2": "5anEQe7pi6PEvqcMrHqpWxH212dbNQQUbjrjVpothA4CuFtjHnuN49BVZzh7PHv5fQeHyCSby7wsGtox97uxUh1o",
  "key3": "52pGM4HpY9gRYqGbjLAusbphYStRXXD6eTwTs1dAqsFW3L43eS1CFiywP3QVj18AMQtxS2xQ6EXkK1ZPZhjDJfUK",
  "key4": "3HimszvRzmrVeXm1D3Zg38W6baQbeoL22Dv3XbN3pn8uUPVvP2aKwH6xDQh9ni43WTbmpHJwUR9nkBGxRzpYGp2r",
  "key5": "3wJGdHGtSdWomLPWJxtRnS9PeZcdp9P4otkFQhypEpQr9dznv8cnV4FXDTnef8Hs5L2e7VgdwdWMbXMq8d2Duw5u",
  "key6": "wcodUqhiL4pdoXWQ2bANhcdkmUhLzxZymUYpjX4U3gDYSGUdfFjrU3Q9MjukCKqMh7zPezQC36z5JoHw36ykZbG",
  "key7": "3V2umNkaLzs8iSzRYtnPd2tTH8yxWtvbgivVfXLJDsHqyqj7hPSTxRoUiQNM6eWiHx5dJCF3YwvSKD7nkg2UpDzs",
  "key8": "5irJEuk24kwAYLoYvpLMoKrJkAatuWVk3msHmycmLmEUBaKPz7iC4AYZmDKwjQbnoQo2nP36U6Bxdt8X39KrvsgG",
  "key9": "wbx5a5dBzkXN4tL8L6LFYURCQPRkSh1kb1eP126UbGT4D9a9wfun9ZujdYX9PeXi3YibF6Mirvj4zQ3vwkjRLZp",
  "key10": "nL9c89tgapyKUXaPgBQGViCgQSvKvLR1ndReG6oNnWdwGLjvyMVJeLh1RgSLfEJ7sopAGCXhqGz2gTYeeYfosMG",
  "key11": "5SCY7qUrWkwYhVwjuKKxtqd3H1ZjBGiBE76138KT6AaQBzoztmDpkmfGDnDpmvM3GdoaxgK3bjNWZPnPu7eRsgPu",
  "key12": "mhDE6RjsUZWNwT4EANj8tVmF3evpwT7PWhypR8qqi8JivjmQc5Ne1XWMvHma5kF4UsdUqKWPHSTQAtaXNFXC36c",
  "key13": "3QNeDtGgKd6BeDwcuXQwoArZPXke58WtDVQziYTcDFAJFEbCKFqpbTJzPU2u7jjHHDKXLPC7eCMUMX2EhnHFjWz6",
  "key14": "4aggFuFuuX2BV1XB9yE9sAsFWqmNtbtWqoYwrB84SbGTeRJU9jX5MxAufFbhrZmKeB599pAwoQyvY2w2HHNuB2es",
  "key15": "soMSa4c9o7ittrtVA83F8czzurRQi88NFh9LAUaEcZ5Qq2UdMyznGn36PNLPG53z18zvyaFG7EsmwVm6h2j2zHs",
  "key16": "3R9qXvHDeR1eYQnkSoWoBu8r6oMeMguKTHTzQH4XWwES2TKgDZQMQYtNb7J3io1iHmETKPhyeGmixwnkCzAmHrxA",
  "key17": "a7AdabFzrWTqoz7DZUMxgC3y5VZatyYXbzGA9VpbBJPq7cgx8MNMcrLaqnv85kwb334NX6xaSTLkW3i8g4PZLKZ",
  "key18": "2hGXLyNB1kKd2Qqiv1eM9HbfFvtTnLiKjQHsDmVMQUaxAHTqSiqsp3mFuPzithoZdXFMxr1ftU4qGuAsDABdkEph",
  "key19": "2CDRZTe7QhWjzQu4vr1dJeT9CAJ4UgwceBvG1oVEHGJAAKNMKaDwQc6qx6kw3DzBtnJ7SRj12x513dSRLUjrgEvP",
  "key20": "3GmsdxGcwspz67CYnKfk1daywiVBgqJuNLpQ4s4Z4WaikRioN3Dh4BRfhKmACDGDpS5jFEY2ZKZder7p7Pwy4T6F",
  "key21": "38duZKXCAs2uSvKARXf3hftjvqmZsxmtHYpx5b8Kykd47ijFK4oMLm2j7JG4mZc2vBQoRRSpB11myohpEmFoNU44",
  "key22": "goCCCegYNeZHu4e5giQixEr2RbxLwv1o2RxMRD3xsTxx6twrwHjUW3WwfFNeJZjWJPk3PrHNUfTJBd9EhkZpcFw",
  "key23": "2MKiqBV3jb9cEWJqCPm9BqtJfjix2QY4mHTi1XtALyvwiEW5RHfawq7kNLyXKCmvm22sx9J2dD4xq7Prp3frbiiW",
  "key24": "2RPLj9Co4yPVACeJXLHTTVvK2VHBySY4fQHs4PGGZ1Uuvxfma2wSZSRXtNQckuenbBKDxpW4bchvG1LCLTUyFX3a",
  "key25": "4pRoAzwoCLFMrS6Wt2L4v2VuctAQM2gEuLLVFYXCPdFPF38kWhyVqD2zy3UcbmNUjLfUjVAADsXNFWrD3GFCL9By",
  "key26": "3ki9V8cpTjvKx4dMxE8pBs97SGQVBCEPPcAykboh5opDHG4YMSR8ybs9WxfGmP6GBR2YyEcmxo65GK2YSFZW9XJ4",
  "key27": "4P6Aa18hMwbrwVUZ8QgeQUBGbnaMKBbeVjHBHzEZ8LjF4yUvUx5uaWwMgExUYPny24Nu9AWvkR3sxX4L1kEw7rRx",
  "key28": "2pdTxEpFY7B3rnCiKPsqCxhBMMV2LFyXjQQ6ageVg8Xx6z6of7Af5oh4QzrenqViiX8Bzu47SXzCf9NPcHDx24io",
  "key29": "3CeFKXHsibx41Y5ub7xLE5RCifuGcqCi1BxPDxjTYtcF2EjJQ39coVA4uNiwFrhna1W46GFNWudo8Vk44Tvz8azv",
  "key30": "39ZFys3bjdVjNAAAtxJqt5f2Zm9sL2F213wGSwRdBeEbanyUBRe2ZFVQp2V9Ca8FDsi7PvqH7trzSmTwmgv3kgYa",
  "key31": "RUhxTRb6eFHejVCHii1SxQpZWX4EhApBDmfQ7y2GpQGZYHEvX1azeS8s1BXYeC8tjfSvPLXTDpQtzXdWGw5z1B2",
  "key32": "5RWL8sRCwTEznFMsuwEFgLK2kEnS8pAbzgeSsib4uRJqgUfBjFivhPsLjFKe5gin4GH1Hn8abyrAn7V37fTfGgvD",
  "key33": "ovxbCL571FjvCpdcRQRoDLNef7o7wGLgSsFi7HSgwx8vmdBwCPbWHziAo1VtLc6un5ZZRoW2AJWre6gg6VvzEUs",
  "key34": "4dJh2BKJQScPB6YMKBWrB8qPKjo71akkWcz1jvnQVsjmfqzbZ3qDcbcXJH2tyDCpKBjRMHrJheo58ft6crLxpUeC",
  "key35": "5v24L5j5UgHDxTG54gy5dDsVpHro5oNvDpg4TrRrXidBh46PR9135fCFsQa3WwEDN9HzdxKWjbyFmkGLYXvUTH73",
  "key36": "36MYib8pPEKfqPG6RNgyMiPFYiSLxWCruYzerxSKB7B2SWxeYKzGhBL8kjZLD3TKpC4coYGSWNSVyecHSJtBCQyg",
  "key37": "3FpLXu21iL9VwVUsKWdjRbgtx8sYC9tSWduG1c424y6zpCBAcRnP3WFdFfVxYTocuvpgKUZEGo8gU1ZQQk3yvixZ",
  "key38": "2gQqvieX9zLYgHMW1gRaqDgRpqSYmMX8RVsRENAnQ6t1hnviJ6Kqr7oSrtBPckfZL1ehqypuZWhadz7FJp3vXvWd",
  "key39": "8bVYGCqiZCktr2xHXAGA1nTFevEGqPKTMjkCHRDeAtxGktvyE5GyfeWHAfXzwx8ecSkqVnJn2e2FyMJXNmDDWdJ",
  "key40": "55LA5QhYkcQ2Q5MVT35aLg7Z9t3tCfaE5S3aKqfqFNm4cJGLQs4K4hSoqgkhLjdC97r3GH1SfoYtcbkT6MHvyNPo"
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
