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
    "pN8aq85149DTHc6Cym3gxNAfnKSx29fwnE8dSiZVu5RtRGqKTj4w3NBN6e6FMzLwyrmh9E6X7y8mZWjbJrMc4qr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BSmag5yhD3a3t6cLRyPDhFUzGqhj8RzbhzxHkYhAcoiu5JMWzxY15Vah1MM529XPk2s62FffCz8befexZk9pt13",
  "key1": "3sjhQC3sxXjS7xGYBFEGA1d4k4S9G7GSBZ3qYNUSHRdBuFQh3u1MT1fhAc6nwYVsfNzSgm2L8oCMyQQSqCnR1X1x",
  "key2": "5C3k5A5bopCeAnyfgSxq3wdkudZkyMvjte4WjDYcsvEg1Mg9prJhVbtKRkmnmswf8UEPHSn17q7SrqASuaMm3Bbj",
  "key3": "HkUbJyHeiTuo7hRVsaMC2GP4SE5E5BhW9uX6punhfytmYd3qi3H4xbTL8D3CbzeUHyYh3gCC5fb6Befwr9JE7go",
  "key4": "2FNJsR33gqqrgj73jQKUffxaM41GhezRkhvhvUdR72pNKCEMSwjYnrXKiUTHCkheSYon8s8ZyjBAyEu3rMEtLADJ",
  "key5": "yzzmNzpg2LaHgYpRewVqeTGtrXXvi3W2pvqNRdK7ZTtgTnN8wEQC2pQvkHj77guD9rLo9JvwBuDERoe7RxQ31dD",
  "key6": "2tC3SP7hiVv6etwTnHzs6PpB4aBRbCgXhTdGR8dFWbqxHnAActAv1hyiYyebochdp9ZYhpMLRSPpgqbdM5HzhXV2",
  "key7": "1yxyeCPNxqpnLFzMqBAxEraziwziGk8ytHEuDHNmdXY7b6nJeZUQUNcUjdsEnCGXwiBhA8bodQuctaLZvEDdxa9",
  "key8": "WHuU3UwJ2drPdF4WwfxUdkLKKVCfXUSUKprMiSGKSVFCPG9wQXUVBH1pySxKNrwgmV4pbPthV2QYGDwvD2tjbX3",
  "key9": "2GfW2NhPis4N7H1racahZiqUTWQBGEE6Fv4euJMCey2XrNYRKYfzqLXnhjNDx8JwH2mnDeCWBA3MXi2vEzLzqDaR",
  "key10": "66eG6ey7gSfuwduKALzWPGVYP1iR2N3UR2sNXa4ukFKVhfnM7KB27m8R4BhpRA8WDdK9N8kSkznEzW7U5Qp8s57U",
  "key11": "vyNZcmmkvfW49J4SzbbK5STf1Y6W225aPuUxygqpgtarp1zTShBs5v4RgrUahhzfAAiruGk8pwwQ77vgnQ7Paye",
  "key12": "4fHuFjkXjJoARsUV5kPi3z17KegSaNput2eXo3YRUkTZHzAjXs8GHvsC9zaK7UupVi8x6jyPUoUJ7jqsmDt4xE2K",
  "key13": "4oHBtkwmHtuEufX2zDSeqSubC9eajgRNRpuYFraWw55cr9BJDoYT6L1WNBT13BreDxkz253PvFETmukfBHymBnAc",
  "key14": "33RVVFVowFkcF7C83QkS5SSWYReh6mRv7FbAJXpffaQ6RVR2kKvw1rboTXRcErgeSdnntn33sQVqrpvXPRErSCv9",
  "key15": "34sX3dsuWaw8sHenxhTAEdVmyijRnkw4oAQcuqXf3E6ErDoWnFyHFEqDHVBNfj5j89mNwtRc1sZWjvgk36pv8A6Y",
  "key16": "5mMhf7M1bBKoVvNSqsAPK2DnUybVMwXo6DFm7HG2zd8ARHPisfSx2xET25xHtR9sGe24YrLJmU6Bn1wRTAThyLWM",
  "key17": "1KKf9Jio8umJvUQDeeE2AFTttyQDxLogaaWqxnCsjRBUtY43pS7fgk2sUjWy2vNCGYjXiwBptJzwPBL4Ct83pbh",
  "key18": "2CtkmgPXNuAWxB69vqhxzyB5RYu2n4bqm9oVJP1ovjdZXE7SGzzZXPLZwzNo5San1VTfVjDJBExeC68ndXZXEGTY",
  "key19": "4bQSEdNtChSwk6CYZ632fnx353ZsmLaxGw5dfy89HVfGoPR5jZejfnYjGNkfEovKffuxgvENqQV1cfpAXSm6AyFm",
  "key20": "5uhDUz2h4otvQnm99KmZ3ppGzP6SYAoNmQvpaucEM8RhhKcU16JTL3SUjEzXVzmqsV91sRwzNoYn94K4qfLa4LFe",
  "key21": "3GEqY7Lffeh3xFdzdZFsK6jcQtj4DpckSvrGUwHMsxXEax6p3kaVDpxy3QVWbcgkDXXDkUjK1tEVKWLe4LBeUiKn",
  "key22": "5cLKFDXiYKxth1bi6EtSgcpbMivsj6pgbMyRpsar35X4nvXWNMwvj9efTZcCZ69cKQL6BC7CQJVvV769wy2MXwHL",
  "key23": "84RUSEgWLYFTjEW3tks6VMMeyvBSeEeVb5Ug2wUxpKWri5t942YsXNUKj3HfrS2P7hUXdTt4GCSKaAnUiXUoppn",
  "key24": "5ivskrAh92ai9o7EJCxEe6bKcMosMmeSRDyoinSxoQ5LzGgGqF5kA648CegBnrYYeYap5YBX33TGE3qz252LuDmb",
  "key25": "23LkNz1eJdrhsLV7Gv9d9DvcH8qwD6dzVnxdPQAqZ6t7EJQwV6WxBDABNbM6AWJY2j7AAmRyc3QWQhwnaHyguJQ2",
  "key26": "3t3pZBApoPqrYLND6QxPDDQEgujNecc7fTmTVUewGpoQ7b1z7fGy2mR53JBHmHo4kmwBNnBTm3ZaP8WjE2MTtMem",
  "key27": "45i4DoaGF6VRct4wkwZmLQwvkaNysmHDKHb4M2JfPtT9ZMjBHfh5WsxniE9NzG3kj4JaKwLqU1Az15ZSciZHW1GG",
  "key28": "Crwq3Nz8BuEZHhxbuCPQ2rBWZ9iSeP78BbxXXT8ZSggZ8n2YBP434UYKzMbM1Zyzp8TScteiNvxh7Yyz1ZfvQgM",
  "key29": "3P75vyzLsh4bu9Rp2qJFQ2usKr49c1ZAM1Euf3zTCNN7yT7M33wCQUZ39aXmZ3uHboeqkv8uUNGf9ynbuatt6NsL",
  "key30": "23UD3uqEt5MMEbhqXWUML6k61AvAekia411fjtpKMUG3tktycuzrXTVUoufVkXVdF3Zby1dvu3Xb7ds6Et4CCPT5",
  "key31": "4uGck2x7awUshE2rQsT6kXBEvZEYygzn8kJBRT33UKNkZjxwXWh6PAJczpLSiurXcnjHWkAvreHyboJLogzbyEB5",
  "key32": "5ihXAq9qAns8HzMQGygFXk3MgRk5wCNKHV4pjVzXczGfKbQWqfGC2YchhzFBdtFZvyowi6zZULDbi1a4a5R9dHb9",
  "key33": "2VzQV25fMrH2koNRGTkS9QZmLokr2yrDWPMWnt8LGFEZDqJZZQjZcbTWLv9YiV2cJvQUi6VwR2WJsFf1XmK5weLp",
  "key34": "2LF3AJJjpKhmQnQ2cccd7SS4fnbfXGDMNeXDxYVBwHxGu8isitjFHUyx4sKwS82Y4zjaXDechgVk5nfnPN7WkjCu",
  "key35": "5ejmmfdMTGF9bYeMG5Ce7aGL2kqHGRSrj5vQsh3LuJ5FJRThgXQ45SKf2wX83QjUsZK4rNHqRWCdSTFPRTimUTZT",
  "key36": "toFS8Y964LuumdC6pLXP2hUxh83rT2YB3aPeoUJi9hUz1CRphzewDmW1empphxPq1vhC8HXqvwvR4XvNJ8vFUVU",
  "key37": "4hPuFW5MhzMd71EBPJp849pyb4rzsc3CeBZooPaxRWhqUmbLUkqR4kdMugDSmZfZBvzyCbpTPD6ijRJEv8zJgjN7",
  "key38": "2niNLp47G2YiyhiwMrU8dRxsMJQ4R4jFJRWJo6g4Gt3LV5cmJS3C2xjeqDYpspdpJgNGHs26zhntfHPJLrXNuLVS",
  "key39": "56b9sRd21X2ZtSeE5Gr3QzDdfDxiWpJg3qDFDq96U6VGTmeMm1okEpD54g6yJUyGCSgV4hmK9SzgE72qoPBpW7d9",
  "key40": "4ei9U4BNMYe7EX9euh9kt61zpdyXAUks8n1gs5CcAy9khbcQbSKj5Zd1Ny5qqfPXWRmPseRAzvFX1Ayi2gWPijVo",
  "key41": "4Zq1VEfofXyqM7jGg5GxhuMJARmmke9nQmzsfM8cSuzNceRzZxagnKxn84biVdFRzb6WmidJoeu62m2B42uS1HT2",
  "key42": "3BcBd5K2LHYT4z8du8iXXE2AbhWhJxoSwBxi4rsPXcNfbyzBZjaBiuXx8oQrVFD1hufbEebiP78DhLKvfKPLZzLN",
  "key43": "VfrJNn4nyUGMox4zHuj4RTQfXaAtGJXpy6cvKnAaZx7r58V8XEZybsVcRPfsRvUeLxfVXZFGmj9gSPKVdP5TKfC",
  "key44": "496pG9DpJhcHzhQKaJnMTize4xydFgTKcaqbfqpJ5HqZ3HAvsty55SRFKcAgUrTWq3f9FAUaCVpp9fE4YhpNUsGo",
  "key45": "4poKZBApoTHSTCd7tEov1Kf24NHppV4X9ZikMabWhE2VScCJFeE72rJtmvis3329WW9TsnJ3D62eoUE33XXPm2WV"
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
