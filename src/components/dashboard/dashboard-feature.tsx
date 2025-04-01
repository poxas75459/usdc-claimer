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
    "2renmyvuiaQ7KyD37LYTntWoUrLNvoPq1sbBEsqsJwzeNAbfT3dukR4FB5U9tPZPvxxtzA1WaE2g3n43ypAKL574"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zVggVwePKrksyoUpLnhwCkdRBXZuLy91ajLr1Sc8aENiMEPiok3XAtoFMPaBTDszJ8PeFRYTeJEZn9optNuYx6i",
  "key1": "3FcrJgGqAYc7ThCqszphnwyH6SNwMf5ajZ7xsMxqABvqucvcczYnV5hihAdh8ukMJxTF9FGRAS4BwwJidY2UsbML",
  "key2": "5jAjWmUtbuzJFum93jCRTvUHYAR4i4hH9ixdjpRzBmNPKEJ6wu13ALY9UzTisinSBDjiduE5FzhQ9GqMzE6JfXQQ",
  "key3": "3uKXEMSgDYUNhtAMoqnJvxWm49d6d2LbuTANi7hSCmWRBBWDTRzGRBCPo9rPunegFLAYSez9kvyVMFhCTjpVqALR",
  "key4": "3a2WQrLARrwrfqdTB3nNCbyvn5PEXzwPx6j74bKjMbfhpkY39B9gDyJRHXj4J4Ap5MNAqbZ4DehCwSk9EXFWXcoG",
  "key5": "5mWGGEmQwkiT6i87D5ZFUP3CxmqAx1PhYGF54D4BbbnoZxjre34Fnu6yqedzLdbdnatqMEnNWeYWC8uzmM2zbvj",
  "key6": "5CttczzQmMNN2ED7pd89PuQMuKyUg7UE82nRvJQhEPkXVVwuMRmiM8X1d7YQFMMtVRPyeVTpquL47q7GX5aT7zvV",
  "key7": "2E6snnjYiZaHcTXMxkiH9RPuVNArW3z3XcLYvJGRA2cLb7yDyn4uuXADL3bDpkUuZGUdtjR5iWfWCGBU9zfkHAn3",
  "key8": "2dWJN7RtTtFMuaXDZWPe56RmMFJtjh7mzpW4Cxwa4nG2NkWx84xfoNsrc6PUa4YDy33wEQAuamvfRfTM7nzNXJBV",
  "key9": "3Z2TEm3Hy2szEdZBQozETUxBMnDCjPHr23pD9nVzzhya847Dr6vDVV3mgf5AvkXNiDisd3iBv7YaR8MpwWZUHqa5",
  "key10": "26bniBvxY2rFigfVWQPdEv4E8ZMgEnusxMYps2vmLiW6EaztkruH7oYdPVLYqrdY4D3jTUdwJmmXHUCzD4TLZ2W8",
  "key11": "tELpH1BBxQQFx7UjZsV1uta2zdwkh7QRbX686E8V7Wdc3p3ZujDNwXtLJcvva8FA6kYHyLNnohtCkZfuWSzHoT4",
  "key12": "5pV2ySjypzwPY2S3NGAmcijDpBsUVLefginQwZjamydodMoiKKe3LxEiV7H9psfWroGwVvvFuoDt6N6s9kVqb11x",
  "key13": "3gVaurWz2zcRAoFMdEzNDUYkMT3QSCMqkC6c7n5aTPCLVaCntd5XxxNg7iqrEktZLV6PQtjUssqHs5hHSjQPZWYd",
  "key14": "4C1XhQJPnWQV9MEKFwwzBf5qxA2DVViNWPDJPGaxn5iiB1ZQ3CQ7HpMLTkRsC5CGPhECdPPaZQvwXHvzSwz5we8Z",
  "key15": "4jPB1mCX5svBZBPRzf5XEVgu3uKe5s2MZfXTySQedvBZBA44UBcvG6ZGS6zWymn6N6TFrpNDyKBh82aof7w5tw4G",
  "key16": "5EtWJ37gStmYE2wmnuGtY7gE25PiB76ujA8h7nBvWk1PmUaXKoTQvkGNQu1uAyEpLaniNAiRMxQerA8xTuUD2EWr",
  "key17": "5A166kVR8BgYGGMW45LjXo6591qpfjhnSCpoCJR6ZP4w51DSrMQg7ANY8Tr2b7RZrHjUCsrZdLeM2AM6oyzfMzyF",
  "key18": "5TBUT6e4Uj7fqUPCw7XAsf2LV17KmeoymjK9CkryDBa4KkjxT1RRvU4ritxGU2xeKGh34knFAEAmyGdk9so4xLtn",
  "key19": "5Jiw8svfKAxqBQTiRiLZhxT2mEdx2X4Co4KAfN2LUMd96Kog3Q9qCTB24q7EnUWfvfjy1KTfhBbszuSLLKcpYT4r",
  "key20": "3GX17k4LCYGqxSnmZRVEwgPPMCkuK59RTvuM2AfUQduhZSBE1KgqLBcbYnoQMWMQmaykcYCqRnU8qo2stzbXuw1u",
  "key21": "mipPg5uQ1sCTwCt6tsZV4iwQokh7kMPjNRhzAxUHvZENtheDNx2pwPmNt5swtVrHWJmEN5PzEDXF2cPYyq9ztMe",
  "key22": "2oxfQ78b6sXQYmmQNPvEt9RyWUVufBGD79Zb14DjJpvNAf5LvKRcuFSrrZ8HpAjTAWjJDZVz9QvFHBV1pC5ZrJzi",
  "key23": "3ifVZb2SvZRxuvPBJE13P1ksz1XJpohjZZqgHUiut8NdwadscdrKRub4p3g5UnbfkY3m5K7BFQxY6i6AayrVg6n7",
  "key24": "8jPXtoszeviuGPnSE9XSVQLXRSb2cdv8BzYETboGhobL4Y4YSCsvW9t8az9ENnmYe6PKYpArptnYTatT4x6wxww",
  "key25": "47KuiKyKXznm3R8EjZPhbmaD78GCJbwFHQAMxWkrWbDWyBakn1MmcSfRtB6xeLBuVm6JfAFNxXrRz7yyPMfZAwLf",
  "key26": "5MEMA3ZeTNzp8PKiW2DPmhbB4buZxyxgNuHwzD75aXt47bAZ544a5mNRTg2mnTfYwbg3L19NHfkZCH7RRVTCB9w7",
  "key27": "2sayj1sSXCps5DARkd6QMbweQKwuUq1suKybTuLC5N4A1BB3XxT4YNrSfhtzAYw326uoQb8JgDcgMrifFQrLELGi",
  "key28": "2bUhU6UdE2GhARVUQc6f8Fmg5SmmmfBckThJfHhiav15p5UNcSUiySdmYig9mZCNTWGsCeY4MBJKXX4ybDhZP13H",
  "key29": "2RBbKFKoVf5WxnRSET9UcvPCizM6NMv2arsfeVHAXBTy3EYLXKeXK3jmdQNhX1NkytGYJ5zhDwimHrXXMUWk32Yv",
  "key30": "5YwhfcimSNcfwMK3SrPx9J99izCd9kW8HtfaVrkmXEwQPEXr2cD1FzqzLhW3NUVV4MdRheaV78L2uYgKrtSzo6A",
  "key31": "5YMG2cPCDCj3PEcWEsbLG5zMUEzV3jWW3qCyQhi2RYPXjbuJbBV8vSH1k9RoLsufheqGhdG98SJ1VQCJgBBN3ikA",
  "key32": "3vAtbM8HCQBbY5AqsTasp333zXDqs581qS5ViA24UV7okrtqotscdgah846DnQzaYccxoh6xzLosoBghzmac5GtZ",
  "key33": "53uc2MkVP2XJd6eJt9nxgwzbLR59eg9d9xjjd2L2rDzPfNKyUPz4G3ZXi44NSNnb78pPuogLxj2AyHg1g1hZgBmz",
  "key34": "enZqFbhUoanAge4cyVroyfnmpWU5VgaUKsDdnjfdbubG1em3dosamZKRZRS1vjA1uMRcEawzgjgHT3NN1jL4dnG",
  "key35": "3hWWzC9Nu3LwCBZDMqFYjzooUqV5wfNAkseFcqdL16CQfK8GhEpBNYUPrfWSrM1bm5Zpf9JHt3JLgbVKCycefjsd",
  "key36": "5gkLsA4fcGd4TQ8wvMLJz2AqkX5CjPpsAfviREfYMCYJh5yrgrUEP7M1yo6VRsNSdUWLar8wiy4djBPTUk6j3osQ",
  "key37": "5q3eAxR6t4FmMUea9j8ABshRSK5G3zw4pqPUYmabBTVeHeXiBcanBVdVyPyDAU4eS3GWKGocg9rmvbVKtV7qMiDr",
  "key38": "3L1sKtLLFd6573FoXXe9c8SUycv3STrR1YxRLmLF81Fik2ZcuRNDtgWXdHjxUC14TEKdoaDLAfCwNeiDYsfBx3Rd",
  "key39": "5xQP9izhzyixszRBfZhbvxp69a69n6GHva8tb8hwdpvRbsetHaDVz1Tk9ogBMrBtpgvMwGqMGxjVsBbGvbpCS2z5",
  "key40": "26VrvrTPk8sk52smDpmmVQZ8KHoJyGP4BhqcoP2B6qqp3mTcbv53wH5Pk9ABsmFXMPEu5wf7h2k6kzLaLQH86WeE",
  "key41": "kgz6Ao6H73aDWVUHJHjxp2xtzMackxGJtFHVYcXpsP3v912PhBmJk8FinNVEguBwQLK668t3pGRa5c3kJKs7LMD",
  "key42": "CZDXuqVjUNXr96MQ4PhcJvo2h2KXuDoqWrUQxvcZ76hQS73k8Y8DXXHYxtR2pkbDH9MvuRCFrVNWFNqjkAZMUbu",
  "key43": "3a3mCRWG5ycf3daZB8vm5xe93SD2ndLaE2grN1dFWu6JMYjH8beuV8kAEhLd6ajRqiAMq5WQijjFihkGT285pUW4",
  "key44": "63pqN85eexQfsA9z6tFet8UDvPaGi6GjWwQr1vRtdmwthwCQ3MQX4xepVU9umYAWFzb8hZY65fvuLfCkic8tWzAg",
  "key45": "5idT5D6sEmsVjqS6F3cY8n4Sks678t8aWG7GoYsHnKtGsALBywNf49vxbn3u1XvcD4mTtdB13YKwWApfvfj5HVJk"
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
