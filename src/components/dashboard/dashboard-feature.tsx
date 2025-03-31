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
    "4ZAYBG9dJHBccSageE8FhKLWJEWQE99pakszDQ2ivGKYaLVTKHQHfrJijkZySTk5i6ZthuYP14pCdjp31iB6XLJr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D6UoL2tZemZwjHJBmskNEMJQ8qr6HuLnAPbX52VHmwpyHjUF14PWN15PXULpL5za7SXw55wEfatTPbvfXAjaZAs",
  "key1": "sNDUcWxLXUb8vRkNT2FBrDPRGEumzsqzcqtc6eWcHxhk1dgNSg4hDFhuXA33K7UzRZnLFHeWCHVX8mUGFp8mfmu",
  "key2": "24bSGJbMiFEtGhrigLpHLKrPH4dbpEK2VdGjcZ7uXgwFdLfxuAwSNDA5UQNtYRPVA1WnLiViJ4JfQKFApSnumWK1",
  "key3": "3oj45xJuvHHnh8F3pg5oSs82VEDoNsv85PmuqzKPq9kk76wWz7jdeByff94Xh5Gp8AjDQdgJqLq2rPFBhtXMjM6Y",
  "key4": "5kZyBxvEm54e4zSV4bRY8AU6jfLbmyA9CwCqnUwSfmdk5K4AAVkTqu37AL2ztYeS1MziR6gjzP74E39Rr8L8rj8G",
  "key5": "26BGxkwRQUbfyMLqMTJQkpT2NEX8JTgCt5YSigfDdHMKs66aGT2sACLmPbzXc8xLjmNSKeRW8KKr7gQdox8M7Pg7",
  "key6": "3ywro3LCDsxWR8F4uH5UjiFa12jAP1SR3WidBatncgDc7Bsaqs3seq7XRZTcA6HKvoQ46bVhwTAmEvGKJ92cW7rs",
  "key7": "5MCiKe4NpwR1oEekZiZRzaT4BZPsxgrWuynjLao9Y3A29gksEZg4ZPRp9Pfa5UTSe5FxU5axWPt5Tr3Wb28g6Cxw",
  "key8": "24ivRGj68kc45QGzxBsD9asEs2WzEaDvRgtXDPFcxSfiCyZJjgTzkv9f1cHGa4MiBZv6g7HVcwYPHY1iTRu7wJYn",
  "key9": "2AwGF6gavq9wQkaueBEBfeaPjQwS2FyykcWovzWw48LwqD37cZHUVFJVZJMqdogdaxj7zDR6mveRgCBVJi4BwYY2",
  "key10": "65XGfexMEf61yDDpuxDnFXdcnf3Wi8WQpGVHK98KrE7jHZPFXwR2oEVJNwpUb5MWjtVWGedNqJUSYYSY46YFwQ7S",
  "key11": "4gvo81j6WJHUtr8uS8b5zCumajscRf6jkETFeNe97dmDg2YcxKLZCgQEv18XKqQy5qKM94QMKZG5ajwD1nEFSe3U",
  "key12": "2soBeJ4J3awQRacr31irsi52B5oxPeZAKD52zYaRu9u8WKKxsitqAqTXkiQwkJatUwEew2X5ZAExDn4hsweh9zoW",
  "key13": "2pTaQK2PSBUzrD2oUCuQ1A9eb5XaFvvoXi1cxLudnxTgFt8b3TUZvEopLeB8CbsqstqLnTikwd1Yg75fYKqCmyaA",
  "key14": "4pBqSaskc2HLPHbbFAQa2NZo8cYich16MD5ccARcMHQCwnz8yCU8tHitKTfC2gi8jVUkZP5qFWTTyQ9T9PcYSe2s",
  "key15": "37WTLXUYeYYosUk1nttnxupEDaegBTs8vBSWEMv6EUq4N4siW1zho74yASsgnA6pGKSWSgVYvTJA29SWNQsSk5v7",
  "key16": "2RCDNgtdvzMUiNMpLD71e4vkYiNbkAxfCVepSBBrBzBAqSUSsJtnFBstMSPcbgJ5qXXQMcKNs128qr3WBZ5SpuLL",
  "key17": "WdbQdTP4wCf78VCkNoeNmNpFBubmS8CPtMgiKaj1WAxKNi9Yz5uffgK8xarTGY6wX7XZGJmvGZtmb4YHxbNyg5W",
  "key18": "2Hho8K1AGJjvNLRDXL2dQpTNB7uZmE8iWXN3c5eRt9p3bEhGtjFMh8icW1MDBG3fJZpyUdcoJerMXT7CkeMNhrLW",
  "key19": "tQJppKW3j76NPPFu63UwZ85EvqD7nxXgbzbJ2cZP6SksFdhmrsyQ54xuJJ9wiSoJTXZDJGqtpZpATYejbMkF1Uo",
  "key20": "5xjAwaqBN3TiYT5v1B14kszeByzhfvJmpyve8ptZd3vCi9w2XxM51jgqZGZNqzBmjY5DsnznbzNQj8KWBz12x1rs",
  "key21": "3VWRHtXp2Bu2iFwN1kJDrRsV3RMHJ2ty3KvXvc4KkW3t3ZgXab1nWo6o9NQjLVDqzU7iEL6qGxhG2h9y3W51jr4L",
  "key22": "4NwQTUpBAQM7kHw5vHWpQkKrdrU9nGQ85GcWHbRAyeQ3PeM3bBn1br4165vP6JZRrXbue5k95worwnjxmDZsWAWx",
  "key23": "3y2FGm1ns6pZy1pYsGmLH7GyrM2QnSdSukc2FBvpCpDoi8KQoqQHTjUCW2do8rdP58KrdrxsCeZBooLjZja164KM",
  "key24": "65auNZ12prphdpqhBf5EPkgZHtDzgBNQBfipmh3xABNShn1xkiZJ5M5DP9k7K6UthLCHv1kMJDebbPvEY9es82tC",
  "key25": "5htPJYUYYgcQLw2J7q9ReGXBqWbkArJCQgXaWF2RvTYfAL9hRAhiKUaseYuFdwL1ACo2XkecwhZHHePuek5dUKKX",
  "key26": "5eyFWsELjDqrpSLXnSivAN4wsfhZqNinAYSKDT21VAF34mLbrjFxhuHEepPgTVtXVsq4dzL5cEDVC4smy4ov2eaR",
  "key27": "5YQibLXoQnUywdmqyKAcwmrA9sPKAD6prkT7uLS4To66tsWTHagoU6oPeZUJsDfeNTwV3T6LBL2Zz1ECKGfnFgUB",
  "key28": "5eFU35PL8Qa5rzpS3ViPbEY658nFtA9QqNgsZtU17ocHn2zB8pUSEjd2iDEziM8ouBZ76RRmvTx1ztxUm2GhWbv4",
  "key29": "3szfS48UQ7KkK57nWrbstdf2ymRTZzFHAC9Q5ekedehDB4RvwiwALBXHTFB1YvMcLpvQH5geLZdfW5XkpcazXvrQ",
  "key30": "uh5F4SZLneNhBBVL8GfYyLBHgrinDcaZLWw8E1co9MFgytRujtYEqvQoCaMimYEN5aTTt4xr8uFD4AyhJd3AYui",
  "key31": "5zBB1wcgS35eeM8nvR6GsN9N1AwxzZtq55dWkZ6tGEPBpMgR1eY6YPff7ECbTxQSnEqNtL7VXJT3qn1RrkFjioTJ",
  "key32": "4Fixu1Up1tHLBVNsV9dsvEnwSsucLB846E7vTPNw3PWYrSrJc4RpmepWBL7sjFLKQNnmWgSgAsqA8Zmb5z7YyRpS",
  "key33": "44ggp17aNUx7DsaE9QhPKHT8RmT8dXj64m8VRASu34nSvXiAABVXdXrKvVoZAkggUGxuodhP7g6Mir6ZydKihiYi",
  "key34": "3XLK3wrsgJ7T9XNtpV3qwB13yzfBYVV52XKP2HqnVoaS1m1GjJKBvnFSWvG2muh3zMS2es8dou3XgLowLKDHs2V9",
  "key35": "3qy7NkstJdsJUUgKmg5uPGQFApzNJ1fF7w46FKtazTRtTGhM9psA7eLYmUzJttc662dXy4ZeiimJ6Ug2C3qbcx6R",
  "key36": "3aAmCfMgace235Wxbt3RYtTbqVebYos1otp4y8agvL9RVxt1iRwej11Du3X7Z96pT3veycQ9EwJHZW9peHGgNTcV",
  "key37": "4fnne8wDpYKLpEEYhci7MsMwGhjxhANGQ3GUs3s4gytc3bSmcW2oyKXFoMETmzZJx7MaepTGcknLNGaS4ZaW8Yhe",
  "key38": "RQamoErAAdUSXfhY91EuyB9WGXPeuiVcJdiEPef1B3DBwSSPNc7PYFiVgNDfq687WiQRyV4fZC5jKK518jq7rc5"
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
