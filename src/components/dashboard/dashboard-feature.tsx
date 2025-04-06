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
    "54fVtSNwhRbHHaSiaNUYH2HLj1hDnAcRHfjudED1xj6oLvBzB7K9gYUiygPzzwK3i5LPXKbHZP5uGfgbJRnmZEkc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zrb4L9bY8s9XPuMnzG6nj4VPFBGzoEijTKqBq6W7GfHFwLV91V818Zv32qr5x96BDDbpgLqPJjjaruz7NQL4qEJ",
  "key1": "2YFfP4iSZVUyciJZsrBks9JqQ7nciLVoRqcAihkQYK4T7cg172DAjGjMTtcNX1QujXdAuUXd4fWLXrD41LQ146qY",
  "key2": "3dejFeKoC1uFV341CCsCxG6SGuvxoU6fzbRrWoFpJYitF5k1WqrbfJd1Z5LfjATcqLuBCVAGfLCtN7GwFy7YwkPG",
  "key3": "3bw9FnWQqKCDrRwZEUYksnth3uU5qff1m1t56BPM6FPVZMyweJBUoGsMqm12jP4372F2hasorzywkbSGk7dwHvs6",
  "key4": "58sUywYvd55EvRUJRt2DiYR4pJvFuSaEBRsZkPMRAUHozAGNTHPjdYTLb9KB38PoqjyTAyq1BtLGhaDj7B5k4g91",
  "key5": "31cTdKPQ8QvbewM77EkjxmLfQdc2HCwvhKQWNkbJyArJBb7Xy74zJDR35vAGVNieAubB5n2GySpwWWgp95utvgoG",
  "key6": "YMmyE3euW7QUqXeVagysepUWwTf4Zq56mxT3iojtCpbLBpp5QKASc31Ve1ywuKGBkGzg5Xbp3udgwkyBXViEpqJ",
  "key7": "4URfYLuGpDm3eeX1zATv5zuhodxpT5NwetTcX1Np8PoartkiVv7sUTf7Yz5wmBHC3QMgg9cNBNLMAoXgREfbQHMF",
  "key8": "4QPZhwPoz32qUwHp8mQvZHwP6XE3UmVf9HnLmwDwDossCwXYb1ie3aMeURsBL4VjQuNnccoJRhgz4ntqAsQtQbTW",
  "key9": "61QjUWukyh1jQfYzbchDg6S9j9jXsNpRPgozSM581bFAQPtHLicYZHKaCwCBJVL7qcjxSiuS6ueGsJ7XNCWbYhth",
  "key10": "2vsTeJWhAhwgepPi89967GcKT9zmh7LMNd8fUiSb4fZZgF49JK8CjPwvGggovE95NZVnE9oWjBAiUnkUGgLLtsQ6",
  "key11": "2PgEWorqNVfJ8zAQaVCL3scBL6Jh1nmggYhCWaH89usNHiYbcGExxZL3nujJbmWAkKDwgwKoUWPwThh25wVKak3z",
  "key12": "25a9V9etJsBRxY5x48W26J4giuimabBNiiLcDTPPRhLsADjMCTEfhax8ERmtN5QTQB74STPbuwT12zpcevuax9w8",
  "key13": "4nqAAGhm8vaSLeihsHvU4FBcF5GXGi5bRFG6u51sAbYWaDZzkJ6DkGUkn3ziZAFEwY5bZVbeT7ZTX1vpXca7a1Y9",
  "key14": "3QTt23Ugw11rSawQH6oyHiR2vfGBcQhNKsnsqPjEvEaNpM9SCVpZ1LZc8hJ94vShzPfy1aAemXKVRSLw1NePNHk3",
  "key15": "2gugYsksv5PGMkw8Lqu97iLfwoXm64THWnuX95PgYyNq3WucKryqbsm3xKwCf8aYRGjS77yytz3RAdfQ7dNvy5DC",
  "key16": "jmGEWwY8u6RxWkdb8CKQ8d456792yeTGRf84H38s5QeZKePz3E9SxGJyWoJyZ9tiSn2NZVk91DS7frsYearBEWZ",
  "key17": "2afck8ec4KDgrmF9egZEyYvtBHiiGcpFinmNPsznHugz9jJedh8r8Jh1x9VNJxDoE89BXa3WsKsktbUVL3nvYr2X",
  "key18": "5WL3VURUSAeZuH1zakJHHKPcmx8bwi3b8fmoy9fKFg4HRoHtm2zpkc6HMcR8Xwnkc8ZS1jhj6dCQUMjLeGR72SE2",
  "key19": "388s9nCBpmD3csfDppdRBbQNtav3cir452e2N8g23YMCgmSKynFqDQtvoHWewWT8EscvL31upesewjKwNk7wUhNW",
  "key20": "4Mnt1q5oSuJiSKQfp2uf1m7tzM9kkadfX5ES2v2D7k2H2EMyWrF5Vgt4T9TtA5oMDsTb5BLH6UbSAy4QjFzq3yce",
  "key21": "3maVVK92Yx2uVDWKYwkXZw5Pg85QQvmGup2W8x819A7DpuJhZhjkYGGrVqcu9sNMh55hWGFHZ9eetUPisLNVs2XH",
  "key22": "3FsD6m2RQ1b2hr1K6f6iJDMjpQ57PvXq4HqPLto6j2nUdfBUkkkYtZ2p99waCfFLWzXD25234B1DyGB1joKeJbPW",
  "key23": "4RH5GmbbeDZF8tiAU93DwaxE7UrAUumNV8hKsNDgsUn4Nu5rA56Lap84pjY22Am7ttV9XZhgnpoYDyWkviC2895Y",
  "key24": "dwJB6wcY2CweoLkwmcX9K2RsrhR54gMotCjQKLKDgdg6poXP8dsxE4zVS7gEyY5pMmEAwz27SxZzwHMiSx5e5QV",
  "key25": "5KQpokN3RQf71vrxDutFQJtWAPD3Gtbekd3pBgfvdGJWM4uHt2j43kXg8yLWtSrgh6A1ojBiSeJeVJgzjoMbY1TL",
  "key26": "5cSKCgzqU4CRjdeM7aPecb3MhJJg9wFxXLJtVZ2wdUWoLz9LR6EQDgVkJvKMbQGdUY17UJe3j8FvFGDHxHJHwpeF",
  "key27": "2YVgTubtjJcXpRE6GHGXfh9Fiaj5RVYBo5ESE6xRh7gPEmd781h25KPoYA2m5hSJEezQHghfpTiYLt3KbTN88smp",
  "key28": "4bSbA87jBTa2V7jjwndaAiBERsPPPxGPkT51QJpka3z3nywzwpLJpt47x7dVAvGYaHWzpPTGJ6nGot62XyHPXhL6",
  "key29": "5CmGSoizpFbfhwKrRxwnTHtN2FNZ4S95vxk58grFn3ajG9mLCWNLVRy9sK3TCW38XmnttmupT1eeW388MSXHLHJB",
  "key30": "xG2kczxm1k5V443c4zVQkQfa3fmneyrq3UDtGZTaW4y2oTXDcg1WKhANkgXuShqaQykJMEMxgrthWarcB2JedPt",
  "key31": "5qMNPgJUA3RLQSsixk63dtX9LDzMcJPY2jKAQKu2Pw2GvqTcgpDGPjxbZMEvu6Y4xwPLNX4bsE1MWmMrpJnssMc5",
  "key32": "3JykQJaQQr9y7vMbEZMVfnA12rWBpo3KPHi9sF3WyTRdkvn4RwdGU8MgnKmYfGBGW1gE4cDfnynvQyvdQhsoc76D",
  "key33": "61eMciHPn2QBuT53JU2Fw2PJSAax5hBNYkxvjtajrrS8GFUXY1BQ3YCHzK8z5yyeUMcHYgptfBBYjEfoDaV6g1n8",
  "key34": "2XRxyAWJGL68v7GyTpyeTQncQdnkriJ2dgBotaDHntCRJbvRyno1K6nCg9xkT3wQc9cbCAYgUEyt8hWP5GNmBroT",
  "key35": "4Aig3uSPXM3eDcSZGPAj3PaEsZW6nzpQMhH9DC4s8PonExBZFvPuSkkBC2FYnQGLZzHriZdcFtsjz3q48tJfgvBg",
  "key36": "43sidFLjL8GVhWQkT3JvCM29dLt9P7WhBDrYNGqzveZymuKCVvKLrnykD9uUxmky8UyvB6tBzatYrRxvypmsqRd8",
  "key37": "5JH6rENU24XFY3dMDk58QKPbWca7yuKGfXpum99qw9EhqVUdDnzE44ZS7AjCnsmPr8Kj1yRkA9gcfKMKK8NYbg7S",
  "key38": "48QPkpjDNBWRng8cX1xaGTcdCgR9Xmuf1VrvSYtAJMvAMLodR5TMryfS1buUvb1x9UwmCzBtbPb8QfDJsT9qMPxG",
  "key39": "35mSeQgr8L1JG6pEnzWjaCeBzS4gdZsL9CvCG7vFYLf3QQusnXXqVnWHKS25RC6i2fNhXrNpBSVL2wBRwuJqZ7Ru",
  "key40": "5uywefbb9z9d6PE6M8NZodf54EDX93uto7f1wpBvTL582AQCP6ozVrkiWsTYceQScV9hKaK2FRmEbMaUXFsVYmin",
  "key41": "2HVVVRYSgFrXCCUU7m6N4jjQ955MNfUVBmUmYFZNK7h13pp7VpTqDaRzJ3hrt5hW8pFf6eKtqvv6mN7iD2Ldxpkx",
  "key42": "3UKg2iAEtMNKHmJj2tWu2a4DJXQ6upYoFST8VHqwbbo8vceiBpiy6WSbu9SyxxZpMK2YJ1Lqw4xo8bB5ydvXJkLA",
  "key43": "5YRoEKau38rg6bXtCh3fTPW8mY3A9KmrJnmSbwSFLjsg67RtNyTqerRRpRToDMUR4ZCkMNe2P9VDWci7F6nAQWBq",
  "key44": "53Q9JzChAk87PJAWEbWNyZ8C41tSNGazydL4jXtvDusXKcG79ViRruNmVoEVk8e2NC9MkNJtsGcx9nqubZ5tSxfZ",
  "key45": "3GzK2KpzfQaspj4KBy4ZQHHeagF1q8TZ1MKWL3xztQ8uj1fQ1D4sp3ujZ1Wq7pRZADnwM15GjfBihEfa4X64ZL1o",
  "key46": "4A1AtC5KRCUW4DMCRzH5YhnjmzHhNHRAu2ZuwF8Qa36SEKaSHuoWmmE75yRU77qs5aAfw9NEivkY2UaFMAicNcPh",
  "key47": "5iKRsKgiRs1PR1kjJKXw8tHaitDex5jdymemo7htUEyLye8MHkkLEVV6SLSw4NQNGBMu2gBBRkcDntZEc4S7veyj",
  "key48": "23Ktd7kF85KvytvWne1wpThoqjNnmteifofU7FKbzEapiQgowXyXnA9RUYpNddwtAweL8jjBiYe5B7j6hWs6rV3i"
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
