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
    "2HfxWJRUgwNEgjqZv8bue6LM5XHYsvar9d4ZYuDZ3H8K7BamPYGe9bmhfdzeh8a4UwuP2VgpA3PJWV6wEdohDcpF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rig7Ma8rFkZJ8nnRfnU3vMKTEGbhfaRA98rkrNs2x6DmrYPyMMmdDUVaSLAeq7KtGRB9mqDqRbLuWMzRc2Wp4dm",
  "key1": "3JVfRySw53UbYjJRPnqZ1EX6rumy49DBLYwBALbt6TCo266asbazyE2F1r6eFq7aWUNFKXLr5y54u5idzwso938s",
  "key2": "4FbB4Wq3mneifi8xFiwtqhhZz5t6V3grP88uKq24tdPdWkFyRREJuz4yYbJ53ighu2DX2AYsJkrTFY4HibR43wyS",
  "key3": "2P9A5cPt55BzqBjXs7ErUALo37ddFfjmeFHYQfojgJq8Sfd8Qpfqm4yDK1sQf3eU17LXe7bDN7z4hDcqGYcVtgY7",
  "key4": "AdGKn8tZUHunkG1Y6M1R6yA3LDS3A2LjCcVSjznGnEGE73Ga5WzEAAMxg5yfNLs7BAYMhk7aGgptWUj81jDyE7D",
  "key5": "4ZS8T7iCsMJMjuJrY6LdQoYsUuZucjgTWuByPoUegQKnWwp7XgKHrzQewQULQUEX4VuHtai2iSX4YzKFQ6BQrzqh",
  "key6": "4R6N3BdJk5nfzeS6sWTXP3AcG7vbpKTvmDswhVyTyZ96A3Bat2iwuwYpqwwtgLtkWcW4BvL9vPLUMinm14TxF2jm",
  "key7": "4JKtETD2KT9hW8MGUHvwMDRSr3uDTWTNMMqBDhRgHCH1eyJaQ1yG4moRtvJTVgwHPqTrbjUn8eqZHRDxe1FLDMtE",
  "key8": "YRLSnmDu1EbJhiiJNofDYYSAmFJ4SAQFpPmbVYUuyCBL4Xk8RJP9qbN34dt9b7qwok6Zux5NAkhqo9bvgZv7fSa",
  "key9": "5MmaRj9fCQJuFqCQWdB5UXE78Xr1mVeWAL3bwiHsvPpEDPStv2p1AtHAaeUHJH1bYZAjxjG2FUnH9XVB2pFVSpUg",
  "key10": "5gp9H98nmN1s456vBpKCRiaJiCb3FejVpwAAcZryrom6ohX8dNKrbYD842rWcDHAsi9BZCyJfubdhjsbACePegaU",
  "key11": "5J5Jexu6KiteWSLJSGYyPUhS1U8M4kg5v3rvz882PcGj6JndCJrM7JpQ7i65Ui4KEG46Kr7C1fkWG7GRzUYx9XG6",
  "key12": "64kUJ12NQGee75TDcs2natXH9BFftN3Y9jBSQMze31wSCqnTU2FesjXnBipEHssXSLbagtcaXjPXiFDKcV4y4G9E",
  "key13": "3ByfiFk459syuUestaGbtu3HabRrRsxdt4Cc5xfc5Cwv9vmomaby5S3Bt2Y8i1uhXGozNMzsXdsZNYeK38wyusrx",
  "key14": "3XSHLuouySPqVRP7hv8XHyMjkZfVkiH81qjq3JMGpC1eytX2jjWeR2bmqfhbmWXsrEcAsaxkPV8akA8dig6HT8w",
  "key15": "2SD7GU1RUaWaaRubuLQnZyjDzLVuLso9YLCyEMvo1ouuTiEDcXwxB9VybdA28UMXbVHqApfjEd71L4BqypK7RTzC",
  "key16": "531FdFZweGTJGS3CbcjQxV54UuXnJFyQY8p8UUDLrSnUe5uF7qWLkaR5FuZFDnjH5ocXELWFf2wkoveSq2dn2SuE",
  "key17": "4w4FhHdbKEM6KD96hJqibEKbX85vtkLdDq5wvQgGqCCa71wgg5K3N5YZB1vMMGLr3W8wpTJ6BWdMEHdmZWu23xWh",
  "key18": "32otWPTE6uVW1PShSn4GGhfyCFBNrYjweoun9hCLFpPDaeSWkou9LoZLWdgpN5ePQ4NogARotUmnDRrvDHkfYern",
  "key19": "xjugL4QL6GZiKVPhDPGYpzsZj8L4q3LeDrU9xkmGsgzPWJz6TKHNuBWiYXeWQwt59VHeJGieezGKg7und6VGX5X",
  "key20": "5q13UjzpfHeq6j8AY6FQAmHaCSA5RMvhxUbME8DHbsckwZLhUzamYosa6wbT77EsKrerwbGczUyibqqhJrR5vPDW",
  "key21": "525P7EEEDBRRhaeuVu5xV1CPNHYHLJszKYaYJhbxsn9T2GJW6UjvVj3PvVdmKBpguQ9coQFGGaXKb4t6Vqbgwf9X",
  "key22": "DeoTs1LfXyeiaW6dFMNWeip2ZTrmY9iZxyzH4omShTWuuPaaBUTU2qkC2ksTExof7sb1BLvNeXD4JPzVMVtHAzT",
  "key23": "3mn9z5PbyV1nLnS6GvsdjErG4ACYUavQhPgz1wao4chGCD6mKhieso1fGdPupWSEfoWbWPZHcuPzqEMvf6A81aT7",
  "key24": "58sKPpHD7Wj1o4XaDuvKTDbZu5LDJ1QYRMWQWQMbnGkF6BoVWMnf24MeGhqP5aX2E4XQUVY5MHWoBC2nYD81rQBo",
  "key25": "3ZgF8N7zux39vsvvm5njjRKAV42azUrXMLeoK3MC8nkn2ZpWPN3sgtteLAZMWbVgU7obn7ha95e2csvw82c5sJZg",
  "key26": "5Qeb6tK9taj7fbWFicy4x7mTiNPckuBCyVJ29P1xwa9pABvUgbPrXzgQyET5P49nW5dJP3nKZMKVPjod6bH1U615",
  "key27": "5ya53z2U1XjmBJwr7Dw7qey9c8SFv1aDhSYs6qZzyGcXvZ4bRt81wKF7vRLu9EJEViLG5ABMzZqRx8iR8q3akLNs",
  "key28": "2BSQDvWSdLf7y25x96MVJsD4BLJnVijrVmf3MJYX3BseY8SaDKRwiojvdbRmcY5Dv5t6HsuyFDKcwYCsE3cvHzVq",
  "key29": "3myXvfMnEJ4srrdRmgUquX2Y279aT4ETDSx4ZvomMxGUhnYoy8DJmAL65h4HjPevu9YMXyoDETy79gK1CqCrFjvN",
  "key30": "2S9hwy65pWuhMLN98JiHiobdM5hxn9CVfcVAg5WuUx1PJBpgU4pfhHs4FCuQ1BStd2qE9viRZAMy4kYL9s6TcSHB",
  "key31": "2168oxDPuArZYEbGpvxWfDwKfKr5jSYmgE7txQgVvvoVNm5MSqw1HZXKZksKWDFBrq8Z4ryhWWSon4Eo5nXaGJJZ",
  "key32": "5jaByHaed5mvw6FyK3pkxZcLAccbGWm4GWgEAtnPwDud9fNAcBJywJMmSvSuaCjFmNWh5ciVpaAxh6J8bzMa7Qns",
  "key33": "22DBzCLYQ3pGk2UAiFvkaN3KBquUretZCFxn7AcfTArtBcQNPo7vuXCbGzLnRrxsnZJgxBXg4Hobuwevst48B5nu",
  "key34": "5ee7JPuMcDg36AsvaY6gCxyrF9bMKvrJ2v39HZ3AauZsihNxPngb5bNQoBF9vKYr2Jw5bhk4ecsrWujDsypTMJP6"
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
