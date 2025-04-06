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
    "2jMBNm77hGVeGRVBJd2TLtvyFDpJLto2XC7cmx1TJGuYTQnhq8JFUJZ6DYAhD3eDFG1fQPSiHskVH6179NG65oVu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YDrYk5mxbmVzVPnumgcnxTMsje2tbGppNe2odJdvmfz3w1oURmWp2hUpoAoHQJfeaqFmJEEzxwqih6J4raA6CQA",
  "key1": "2QxS9gNNKoqXCSvXRrcF1zFBQfV9UibVU5RuJGZdk7TMAyQjcJi6LSa8Zb4dbhY8t7JaSQD9oNSASg3Nr9epJC21",
  "key2": "5CHQ2RLAS4qHWiUMnFEr9P9Gz1gcdUp5T61XXsspD4efiRPRkB455bFiccpUaXpXH674obS1MfTdF8uH4FCer7LL",
  "key3": "9HDNJqgb8w2B72qp4tMjxpSopDc6bFSZZaekDuvDawinRK2yNoEn7CF6MLCa846LE7HcdervgFPRm4VTRqjgUMC",
  "key4": "5QRxCaeEQWrVedDZzBReYqT32FbMXFphfLcS2WHxXwLgicjonKHyokRwETEdWNiFr8b3QikF8Tv7Wops7RbEYVJx",
  "key5": "67S66g7YcKVSWm1BVB27DJ4bQ9d8DFUCUfSGum5BwdjxokdkNfVxYngJ6wuG5BSLVNDHmYTbMALY6d7x3ZkSX51e",
  "key6": "2ppLW26KyD9h4uWx2RJh6Ksr2tGtoqWa85iyLSM4Po2auHVE1JRpgDRh9iYLKwDG1TkVodySnKb8hF2Mg9whmciE",
  "key7": "Vp1w1MXc8Y3cNXxtB1JH61VNHELc19tZrXyKZw4SMtEQU3gLHv6HXYw7Pyow1aW6iQnEENa3PArxE2aEsrgAv1L",
  "key8": "2gojKhYw5KW1uHKkKM66sQwJ51Kqik1wwstVHq7V2UcjrJJAtoaXms6n6u1zdBcAujRrGuimGVuuWxHFjVHZyGmg",
  "key9": "5HfjY34t2xxCUjGrUMEtujjdEkELdPGch5r3CjjiA9BE25LbfZxpPRkhNekUeXBEpY1Hkpv8KX1XtQSYjzZ2Dzkn",
  "key10": "2WbKXssTqfbQG69dPk5Mb6XjV7My9eT7XvTgjdvncpMP3FcGdvVA4DY5e3FmYgZXbJBKi3c8KpebFEYMALZCv2Mw",
  "key11": "621ajCAUPvmhPGqWxYBRJC5reu67vaApYVzAV9pXzYRrwvv6T8Qz1g7T6SrdVzCno8C7sStsEGUDXKdY6YuQvrM4",
  "key12": "3F4DmgXj7HbkvEYwF9w7zcCJPCrb4bYeFJN5SwRd38DwX1LGuDZJc3Rxny5sjzZ75F7EBPW9s5MsxCBys3LdUw8N",
  "key13": "42iJGv1gjEnVPk5Rk7oGEt5Rhrvk26yiYbdKFs4EzPw6iNyh673Zb5inBia1ZKy4wrxHjvodyZKNjSy9YSSoPCVW",
  "key14": "2JNpU3AZ1WtSHg57FtPat75AE7nv1TcvHspiYqC8BqfKaSMpCrZTskzwLRevTHNR9YdwmCoMYTvUNVJvpDBtQahS",
  "key15": "51dbyjB3WE6LiZngijS7eQgv4CVmnbSH74YBfn2kqJEoEKUDSxdVNEzjvU8RoNW6169AdMyNuGYeqEZqkK1sFcvA",
  "key16": "2Qgw8mBzwPTpNYPQDFXCKTAMftLpoRpDaczvHj8GPs369GmrE9S66M9241BYPU9Eth2Er8LPr8CFN1Jbhzc4g4tM",
  "key17": "RcGARVXiJFsggHGwhL86hZU2QPUe236FNbp7VdU5mZXr8m3ENagReqeVem4Bvc4BoXhNdP8oWURG4DX6qc7donh",
  "key18": "4tjPz71RFMHkMe8iP3SGmSUhsqsZLFKaEn7s7SnJ9G2Z2XvLwsmcK7NCs3j98jJUMtovuWYEMKx3PJ5z2Gwy4vyX",
  "key19": "39LBC27qnKkDkct59EpVgbRUnWZVe5ooNVS7onjx8YGTRaHzqLW2sRL523VVR6ZPbgTh2pyajQb5BtXExVRFWTwh",
  "key20": "z7Qd67hpLDrVEL8BnzjDqonntnGWCwDHLddDzPHQBetC7eMdPpXJVdHJJ1Qv3N4PjEPbpQPf94ER8NcxBgHrAVi",
  "key21": "4xrgc5U8xvf6drzHeaJ9RH5bU7hdaFVUf9tYfYQR1m9J334fyPZEi4CVn1bekH6sSdPZF99vM5WDVf4fQ8vSLUH6",
  "key22": "e4ZW3asaW7ukMP5zu3HEQqM448D2b8EV7QwnCv4CsfyrMCKn4SxUiGALJEo2wxJNQxHyHC3EVEXtr529YJxG6rx",
  "key23": "B3eNPZ4xB9TBkcnLXJTF31zg59UoHDdvHM9uvm1kgTjxZpiWABrMK5X9iFvGLhGWxSmkrJgLon7aCVdAAVwvJPS",
  "key24": "2Ttg6gAPQhFyzMssee7yHaogsJKpbP1TrUPw7BeBM3qyaabPDnqNkMMDDTFmtFpZd659TMzhRAg1cnWdSGS3Bjxj",
  "key25": "2UMYUcNx168nw8kYvh7sFFYGb1bEgq7oLUNjPLqHVan2ShweEjBkApx8rUHBLF4KKFUEmBSQmbSKLxyfiiiuQiFt",
  "key26": "3Pz5qirb5c8zf5cDewsu8NmUn4XaWkS7W3nGoBL9VrALjTSMfyURYJaR99dizVkYC83nkesEr4NYRZopkM3ssMAQ",
  "key27": "2euza12E8HeBCE3fNSKXCepZU5axiiipNZJ74zizo1BmAVFgNSLgajAuipkDFfbvfTC5oDLTmZzzCvpkjJVFWTXj",
  "key28": "27EChDFTRBzFiGarvQHZyECfapVU1iQ6Y7iEsZu345V38cDmckiNUMrty5T4TSDt992iYysLbKQx22WWQgA1aFcq",
  "key29": "32s9UxFnGX7ghp7CsdJSZ7QvnvSXXHApRx4g6aRZkEkckCAntvH1ijMeYY29mpefLVH7qfePWpcnRDVEjakGxFNG",
  "key30": "2yjkxasg3bt5QsmHXSqQS5z2For5Y5dWhEXrZXtyXkZc8tkgAR2KEw92WtNy2ELWzG2CpHizQCvivYPv5kAxDYKS",
  "key31": "4nHTBgGZAiSLt4cUCudRq5t77wMswWek9xfKFcDZzx2V1giXwp6suCDGCJ6Er7zQHME3HybQMwzBALPPzk3pF4o1",
  "key32": "2bbvJvU8pQznUtnnM8vThcSCJ4XrFgfZMc7hTKwvPvtSaDqxwG89ppiiCkD4LngcK8TtKCmkPKzGpC1SDwBsGKcF",
  "key33": "4yqZd9yKByjGcQxZfPZjFfKAKeaJZfDcSkkWqpsF9XckxBVczEBmzdeSWPM4LLhJFps1zByEnqC3UYa9nv6r4pLU",
  "key34": "2U2R7ZvHqLKMCXAE2g2ZgYyJFmftr9AowYUY6KRNdiaJzzG4PyKACKSE4pCJNSxeJA353nHaUfUmmbe13eZX4muB",
  "key35": "5i62yuUbFBQ5aBbmtarNYzTrv5YjLupKHM4p9N1ryfXHdjLQ77q4jTHBcxzc94CMNMgDARsNWB9LNXMyH4pYHkrN",
  "key36": "4QsYisnUF1uNfXcaknB2wo4HG31pjhfTqi6W6udKHeqqc2gpWxJVhE7M7MJUmNVhBnCMA6qWVgmLgS8k2PoXLCXj",
  "key37": "2pUWHLc3rnyxVMhCNQdnYfdTxdangwQ3QqrkVeoxKxfibde3gJMhgzYW24ws7uVz6eJQnut4339WvV6gRdZepy61"
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
