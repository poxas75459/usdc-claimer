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
    "2vH5NaXGTxSi9m22cFQPfJoui6vhL17u8euTdT8CAoi8gEgQXokQMsdsBdxYLgndMvMkZya9reW7sPFJbhU1VWaM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u8NbEgBvoJb89pBmvfFDcndCKhTZa5QytSCoX2jDWErauEfiYNGVf1dPy3yhuadL6BHrVXu2Vq4hpiccwq1Zqzg",
  "key1": "3MzeLCLknoZT3CmABCSviHysGyfyxw357G4CG4kdjyeeCMMww6otyv6Z6fW5AVg7utjAgxNqEhspg3dXAntEyBsq",
  "key2": "2C8XirmPoiophfqbt64cskhNxYoGpoZwubXJzVi8yAbFiT3F4oieH879odUUvmXiuwtM8w8zBxEZoCPCiy8ERqYP",
  "key3": "3sNbdXmDQUBRxMfBLB23nM9bEtnwd7h4nxdwbwcpPJGdodn7bynHGvKyzb8bgzokgn6CWyZWAqEEouuwxeTYQzDa",
  "key4": "24tVRT4CQdWEsA47AfcqMRZUsLJ9UJpDyCQk9d1KrXgqBJqBcd4e2hULWTxnBqNdajNUhJR9PJRikghp8wtW1qoF",
  "key5": "2ebLhyPjEKbE5SEXx8R4ML4Vgvu5ossct1VijEM3FWRmXcen5n8WJg8KmW7sYihExmxowuKtgsdCibkEsUp7BacR",
  "key6": "5jVP3uTYj4yi5Dg22oHtTjVHMmegrWRVLMuH6i4ajUX4KKKH3aEruJzkN6BVcS5QG2PbqPVgJV92VAUfz9FSKfne",
  "key7": "3493uBz8Feq28jG2RmiFj7LJZssvDPLWMvYR2UkeSe3hkqaUyEXa1A5cFVYobWLJtPtHvBfWv8hjpSMaC3JqcTU",
  "key8": "2vQd2TLSr7sgSUinGALo6jRmJUapsQ1nXn3BHAkZH5Ui1FEuUhbF8H6fVHDPQSfumrD345jshDXVYRjNPyUfpHf5",
  "key9": "4PX4hyFyaVna5m5PDmGfJbZkcHc1xR3Ez26CpqPkoMX23828bm1Fk4nnxG6eTc2D3hJrV1oDV7Tct1Ls5eKsg16K",
  "key10": "2d7Cu7KLGyPWEaZtZ4hQEyoCj7LUMLsXgDTJukmDa88upxrwFsGcLnG2yu8oRokjpvV2LitoHcmyD4FqmTFvw4Bc",
  "key11": "2NFDDC7KBK86vYfkP2TcFbRVkMiXRVPtUqC8HCN44fymLcvRhfZNwzYaEUdsZQxaaNQqkk23J8itLtzqBK79p5Tk",
  "key12": "tm6wyFSCb8AjWtRTTNTd7c89FasUjFeYfbj2V36H4ZrBXJFyPcYkysF4bok5ZLfgDMP8aqYrtjXT3YECDRA2Ldy",
  "key13": "57UtmBeQAPc7df7N1Vvx9484BL3oUKLUNN4DNJPMDmivSSz4tuDpz7F26mLLY1TjPxAWdnv24xYpcoJTZXU4L4ku",
  "key14": "32L7j4QYaMqFTNSZiqacyvNn6zvX3GoxrKZixZYbkmBtN1XUX9V4ciFCxWaBwSuXtxkowmSpjU7uKoDWejteGzb1",
  "key15": "2Ex9Q2gUkhfxgUa5im4VutrNPY6mFn3HbDaYknh8M5ghmb5DJmjnoa3Vwd6SefSyakdyiVojL3KW7K1FbFyxKrLV",
  "key16": "gpUz5AfrCTymkTxPJF1jbPQDnUsUHrem9koiNDthJiUKAwtCZBLrCGSGNoqURx48gu1LiyLyRapamNVLwZqhCqb",
  "key17": "3zpV1txxHKPSjuG4YmmswmamiBbw5wrZ9irnxdYcCsrsu17Ccu46hZqXcZ42VnJfTK4Y6TKtbKGc3rbMZDYbMydK",
  "key18": "2UgjoLHwCxuGQx9qL7cvGXsXpk2ooAgQ2AcVm5hZyADTr8kv9nmE1tSjsZ5BaR5mkxXRcqVGWHwMJJsQryF4DUWP",
  "key19": "5w2sgUxvCABLcBqko5VhApYHKAh3snQTRqPbopypWY61BbnEdthYckY3NQdRkwta5h7NF1Jbh3s82pVKjjyfg28R",
  "key20": "64XSizJpMguv6VCEGVNTWviJFzDds2xiH1treT2rEssrcjstvp3GMRuRMvdZ6EdTEMjVfzCPvXx7iL3WDkFjeUe7",
  "key21": "2EDCDH6NKy2PtMSm2Qoqd1QtD29cBqsB856fD6GNsdYhWymPcqk7NCWZxwWdtbbxpoqZTGF9JtZRRHPGfAG9Nxv3",
  "key22": "2H9LFiNbdYmzw5op9UF6GXHHQqqpRD773mJXNprmZaErDFora8YDHXLnxBvviv9ZnAnSgtGg2vxv15v9QDAT5UF9",
  "key23": "64AZhwEJDqUZr4wmrkgUPopVNUVhPWWem9wE1yFykvw4o4kTVhaEQovTtpNcXkzKFLoN8Rr6SsAm5KL5ym13RZJB",
  "key24": "5FgvWvHK1aDFDdr74XCPCtYXfxQgkHpHCYvh1EePUi3HeapU67uxvGDMhEgvrjGpZKaUcsKec8Scut1xhKRpUPCY",
  "key25": "4wZhiP3H4oXQF6v7mzSuP8CBTq6kvwEjdM83cUA48M5m65LXZ3Z31KybNksWsihsgpd8h79Qi5ycfFCB9vTmg1Nw",
  "key26": "4psVU1dx1hSDRD4VSYCT4iBDMjRYJKMekU8Gh59B6JBmfBJWULs7ZWWoEdL7zPAHXViQpiJ55QbVfnWBgP1fhGty",
  "key27": "4gbWMtFEjUxFaRiyGv1bBZ1danJCzbnXjdGV81AebThn3EXbwyi1L6T15ijHQ782yS3KSEpnJHXBRpYrF8swvMo4",
  "key28": "3jcCQSwJfyq3NDxe65Yv2rARfUgAbJr5LARgYPemQPEQEGyPmSLYCCczniwJkkCNip94D4r3cFDLt1CxcC61QMwc",
  "key29": "57h2vp8CDoC9K19jhUZ6KFr1UyDT6pzQzGDkhfEbmsZBy48mBfT4vxxc8LWWVjJ7t6L9FfhDU9UjNv8ogQGLbbgy",
  "key30": "5Jg5n6zTkx2ayeaxA9c63gunHQdaZhFPS26ZBauon7urvjqDHMn72njqMFm8fRHxPrVrwAx28zSEq4pQ1xeXpDgk"
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
