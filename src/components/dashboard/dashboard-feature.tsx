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
    "49iF8CjmfN1KjeseouExN3hot4m2ApSiWp1UbCFETewq1r8KyYYweyReoSbbnsSvLon5bgUpWazAEzft4dxnxqNw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cCVnT1PZwYa7jHugSkRA1zZbzwp6Q3LG1MVxmEbjJHN34SDyk3XGomJ2BpfELcTSz1vbZfLse3C6rwvFBFtnSwV",
  "key1": "3maBGmUCLybgbKN9R8tgXiq6fXAN2PtZogMrLziVTAW3dwKk37L5XrpMW39mE3DVDbLjauHJfo2bg6ZRMwfUrnLi",
  "key2": "3XKJPraKXXPr2kM9JpdvabSShRy3PVyjuDqyXSoQp2syRv3dbcS83PThzzFVFyrCPYePQs8KdSvnVeqVKCrRDsVk",
  "key3": "3tfGsdf2uvu45c7nhvDAx4rJecbrtF8X7j3ZXbtEQTkz451jYb8EB6Au5427WBmWTMDumGj4MNBUUrcJxbe4xtUq",
  "key4": "78jgbPgtAkGenHMRLfBUrSYsTLRobMQg7ajHXyKWYrVDyh98jMYWesb7rAjKo3sbevBMqdvDC3T4Rdf5D6deQuL",
  "key5": "3uqEc17kzbVbufwNdT6qhKGu8oWMVhTuJKWsW9CdHNWiJ2XP58Ggh8AEnRHkEJH1aZ5wHRZ9QsQ2o1hW8bYkuDuV",
  "key6": "3aYQVKWLyw9UdqYehyfFjWopgRNHu9Jto8wJ971wP4hgDHsu25txcQzA4rUdq1dypLEjZ9x7cvbjmd7BuVac7fga",
  "key7": "9sHoTjkA7NQS8VBN3LP4rAG2FFjryaNQ4PAt8d3ztbEwajQuHqh8Zy7jTuSdvBwyi71xXDUD9Wf5YqEu7P1Jjzi",
  "key8": "z9YSRo46G4dwkTJuvLXsBSPUL9X55hLW5WstBKQ6XioibdHjC3dyUNeGe7nWGuFDMSUDsSrSEL6czLnrxcMzXBm",
  "key9": "3n3o5iiXFbZPvMsCujVKh3mg8xVgGJ97dMLJLSMwQ8d3Ft2PvNiwGqSdVnJtwoHyBHwnZjrR1aG9oXNcsyBFNB3p",
  "key10": "5tz9AstracLhEfBEYd9ZmvQV672cQyeSDsGyjPArNgVrS62MzTKLHmj6kG84SLCyptMwAqyVZP5yyAWmtH5q9HPN",
  "key11": "3fsfbafkqSUCkcuEPjDrQCZoDutcnktmiPREPuuEXj49PDMUvKtzo8CBpFuWQCQ1d45gvxuXT1RVQkfn3WmEV2F",
  "key12": "71ZfXWgahQu1YJnzvMeZag2ro2xpyUUdobcmapropnaoir1EXVAqZcKEwhd3qRfsRZx8ZfpC4sU19B9xd4s8NoD",
  "key13": "16qvsfGSrC8L1ibiBeZePxriZGpxSE1pGEHofnD63brkUQUqC4A4Ubiaba7bb4vvcGo7aKAFLF961aPXEbUFZ5h",
  "key14": "5DFiwGJkHREe83sDRpwd7kFJRX7GAAYqaDV5dVw6uM9d1NhRRfoYZpLKC4QUyRpfreR7CTxRzLusPRKWRvCXp6BU",
  "key15": "zxbCnshLe2EcPK1ZcN1T9sgaJq7kyfNNUPRAn5xQeJMGowdxQ1JEMjmc5qEUE7GL3DpUjDsJr1wcyPAh5THJfp3",
  "key16": "4H82nbN7dUd4AGFFWt1Qje3EHURCJFs2oDG38YAHmBS7ZHmn3NgoerDQMSCCzZNwayCgtHvWdWpRQiSR9xDp2Zau",
  "key17": "5Z1rLPnRj3tfS2WzDdFafe4bYMdCgHrVNH5Zd5WeELbnNgY2jC2vkDau5Xu8KZ4Gk8v9xuEGcUY3FUapZB72WE8s",
  "key18": "63fdHGyJCHP1gLF4mhmrBLqqBdKxeRKCSHUQ2yHWSyP4tEMMH4d3CESSBbSRqfhaANYxtAPFKc2Bs3BroVQwRx1J",
  "key19": "nFJQkqXUy4SxtaH2kFqYuLMMJSisPVCqMiTRZW3nwzgkcX8WCwTggPXJwXNX47FvCrju9fDqYUsBFWbzMu7YQeW",
  "key20": "4uawnVTg7R3MWox3a5QtdAyePY2v8f2speuCD1U5Q5Z69a4yUJUi8wmZvcL1ykfrqGnApmq4XK4wMJCQtcVmxwPn",
  "key21": "5431mKmqfkf5ZLG75tPux5knhdtNUHcUBfHFf3ixrQ25ii5TCSvSh73vPbg1VvE7arNfh2QdRr3PRmjBcwDCFMWZ",
  "key22": "5SDqoDyLKHabYpY1gFwdc7KS4ue2mLgEztpXS126TupPZj3onYuQoZLvSStdpe4cekTaHgVhHDT8cN2xLVWizFZN",
  "key23": "662Hhtx7aJWLTtUzGdgj3qjAVbPETLnBtPqRnPNAY9wHviTYTXGxtmXEF6KKL7L8JYDnEHxRwXU4NC61jbySGdtT",
  "key24": "2E9RfSaqayXcx2pJ4GEF9kej7ZyaHKvY5MGPhep7ovtmRih3StxKqxbFwNVvE8dTvUys67HVHap3m9rhV5u3GjSg",
  "key25": "5gKv4iZLYTkrsSVDcWNZgXtSDMmsdFZno1RjUSM9fZTthX5EBtDQSfFzSVkp5H13d8Gz9GQHAna5CVxy2AK47oJk",
  "key26": "CPhUFH1gGNjndMp18sCd81Vdnh34Ta3DSh6K3KrvqE5vH8j22JHn9Sqgv5KxurZMefK4XsBADw7T75jz8GC6777",
  "key27": "4pWMBmyDMs8pws6EeZquL3Jk1SZb45nuCZqj7LDzZcc7E7Uuwj7Rkzxba84kQ5ynXTYCHL96gvhC1EJdjFBpGva8",
  "key28": "Y2HEWGvnEFe9cdzwNayakGPxbgjV8sPp73KqpnRY5MAzF8XYEnYKb6uzoD7DPRNP9TiT2d9EWBUq7tkLQkpgbRk",
  "key29": "5HexcgZ4Dng6MwMwKwwBuR1tzzqyn6tUc1X4h9ec3kAdAAZXVqLLxNfnBdBkG7HEFyyVsk7dK33drD6hd46PHwgD",
  "key30": "4yTT5XvFW68kdw9n6MzJrsp3fZsBzmtwxdtRqcYHGkFGnhtf7kcULYaXUskFhtjmzixaumKgfebZrAs6XDsHxf6S",
  "key31": "5GUV7ykAVQicpBFrziENJxWwBDZncqu9kQg41sWG1bFZKryfj8coxYmmmBZFTjwRJxjg5dGecAnxXaZkh4yPTxJp",
  "key32": "23XGvDN4c6H6XxY18kHu71oJsxCcfvgb6jnQ9CiQyjC5gQcP7GdccWHmhTJtCuhSzfTvM9mGVYhsg9QEjcpAcwuL"
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
