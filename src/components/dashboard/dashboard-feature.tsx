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
    "54gmzTJeii7GMZSRxodKqQwVQRpZ9rMahXkqZidN6CnAgb69zsu6CQJgYJsk3KvwncSAsW8eeyfyaoEiUVWUiJr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MW5LN3ifHbCpKUgeD2usFLLLjTNY1PJe1qX1kuTJNoYht83TjrTWK6W9ytBhSVEFKbVnyWk1VaVM6GXYXMSEZV9",
  "key1": "4zuHfRMmYMPoMzjjAyUT6GfYsvi2YPRDF3NTFGfj18xzWWHt1HT62y2Q8DVoKraY2tWxEgDm3uLoFCBNuFf68cK2",
  "key2": "548w4NbBg2JjsiP7t77mrkHN5ZPFWiq6s1f8nnmU1iK9Vva8XxTK8jQUeMsp3mUq9X5MekTj3Ha45sz7YrrkjCrN",
  "key3": "4wqCEQoQR1X7TLonzWVnHtSoa6JaMhYNjdQ5HffEVZzhH2QeNZSVHXpj3V6uoPEDTHuxKpENN2qzfuHuEXcGsY5x",
  "key4": "2jac4DJHmwmamBLKLoXpNKWaw7JiMSmhK9dhNLs1UYyaN8AgRd8HKTdznsjx7x7dAW6RHcuEYCLpA6Ya4hozcYam",
  "key5": "4Je3zgf1xGEkcwWyiHU9g1fyNU6Aehm3iaW5FLU67E8xL9QKc4UbKBVTEru8KRXqm7pckPdzgp2oaK4f5joSBfRT",
  "key6": "3QkvmVfh6Hdh9B3VXq1BeEmSsvTurjVR6AJsw3JA5SKbYjPjFqkWJr73edXZS7HNyVkEu319kh2SpwrTEyHtc39k",
  "key7": "5XXDSAgGWyrxR97oRZVNLT7WiN935umS9WRweJy8XTK8spLgSpb51mxwmYUui4RcYpTuxq1Wk2y4kE9WQR1GyDLA",
  "key8": "6zXXqfYgUNHnPqUDmukRW71chjtSNNSuWt7iE9uxdRcvoDfvoTrFGZFPAxu8YqQtRQegk71h26EtJqR2iTVmGkb",
  "key9": "5Z3aiWz198DBvyZ8jyvW1jYHQcbzu28eP5ByZcdaUYKtdR2r8SEWY79NoCUZ9Ubd44VLnTGZbMKEXctBU7Nitbd4",
  "key10": "2R5eiK47FxjPTCPj6YxoE1evt5RLJfLuowB4xHi3rsvM1VYJmFmkaW2zUztE3hX453J9kheE851BEaV8JzkSaGGG",
  "key11": "5nQW1vzcinbhzoECJkTek9VqDkzoVBsHuPY5syywhq8kooRh1eLjScW27FCexYpWJpHVKNJ72CkN24Jjn1S7Hu9M",
  "key12": "2xuTTCdDFqxUBzz7aM2PCmDBPCm2rBXiHsjbj4rM73VE7U8qkECnJcRgcHqqqZYRamxFFFvtaHg2cpN19DHzsiX5",
  "key13": "31V8oSeKGWmkPXG8UoqmRnCZKX6696Lac2xFcXWb29HZeb7PpxydBYCvL1EVVa5NycW5VDKGCFqcjhrYS2ZnogiT",
  "key14": "2Jq15KxF5bV4WHyguGHK6kdpu3H8L8ay9oR1oigfZRo2m7WeUpxHrz59Npcxvp5JKsAgvxA71dMujhVZ8axZ1aMp",
  "key15": "4y4amjJSb9bTd3EG36T33P4bWtHqpSVqBq89dwuDZKQzhkgKhG4z2Dxr8SbquXWFKmY8tJwnyDzbK7yfqTp3WcCF",
  "key16": "4Q3bTsRDmXfivirXXPi57NvvyfiiPc51L1xAmUqb7kr7koB8LKAGZvg5SmnnkhqgZenoDds8ZULVW5L3hWDiAk2s",
  "key17": "45dUBmSfSz41z17woT4jzSUmTEZLVjsgoJUbMmDnbUweUzjeHnqN2LaMPzfTn2hDcTytZtnkoTHp9aQ2jUXrmiLg",
  "key18": "cxpXmZXXxFf7RVCie813PR6R7tfU6DXB5ZfdSp15UXk1kW9qVGkDVPEJgow59DZXDyMLXxSasYLeDciwfBZpjde",
  "key19": "5shhiTuhJmUPTPBX8VW2JWMBPKqeQjwRdmHT6PHWFuVRsFhQD7mbjRvqRf1UpuyTTjam672p97wNGW6nRZBybj7R",
  "key20": "2k6CCP4xXejSKjNFQ23qpicW48Btg9SsC5SCcmtDVZC5k9j7xhrzToDUKzLPWdCRQpx3mWQtu4hVQQJiFWX27nE7",
  "key21": "2xJ9Xe3mau1Jc1spfc1sKJ8BDTHVEwWX1CjFU4iRX5rPNuZvzL65o7vd6qao918FTW8f65J1KqZph9LDWcPFdXb4",
  "key22": "3DGejdyU5rGGfVpySqcGg7uG2G7AoNUaS88TGTjSVkxPLbEPbvCDxPKwxbyNagzgYQ1bhKyvigLLsxCSbosSva1P",
  "key23": "5AXEy5ecbizYHTzZsRooKNRHWMdpSgrMVwcUk4rdwziJuJcHbuFKvqh1g6cv14m79jKcfvdQo8VeMxSeJhDiSRjU",
  "key24": "4MLUVTBEtmAAPbiucbr5Ma3LSwwsB1Cxuz5DXMArB7qDC5WiJQfwNUUesC9g2ZhDgaMYkXVJb9tYoCd4ms3Lxojw",
  "key25": "oTdwRoMZwQWEaUvvv39jXzuCP8nG9rpKvufVyH3FG21SiJQndwQiqPdgRSuCJpw9vNoQM3NKLxERKNpwXyiAncq",
  "key26": "638caeNsgLvBp67Q89cUwiqc9z5eA3gVjnUQLd1pSeUTvqJpkwcaGAR9NVUmbnfhqaC2UqfJvS2aUKxtH6QUoRBR",
  "key27": "3gwFMfWehoLk1XTJ29gtkcZZZjEpvb4CgnXJrWoTSJwbonFRXbae4PQTwkQT6SUcMvNoynGYJYXVBc3Z3mPQyWBC",
  "key28": "3gKGph5X3TxdYzQXwURt9wZ2U694nWbz5aFjiHU24dwYgoarxJ7MX1VpmsbMPURuB737LzKn59BizmnEoBFWuwNB",
  "key29": "2fgR2KvRK4BNwx5uEieaWGF35oRXfLDSCa2itMWy6F4gPyghcQXAiTtN47mdn9E8dePCqfNDoHVbEJd5mkAoVnrq",
  "key30": "5tmsic5KAWAniHpNt3XoWzDkJcjdqJB3RT8ydUi6LnrqYsqr7MQMvqPa2vs8fGZS2JoTn7C8sZ1UK3cfGuiTqQH4",
  "key31": "4fesQKiPP1KQfkagut6TNfv5sj1T6AKSpfrsNRn8E9tuqEnQLyyvTu8mWggr3RXLEFMqBr964zN8Pav64Y5k6DsD",
  "key32": "avmCaiudJMTc99Q46noTW5zemfFocnSmsag3U1UP64oVNKXq61uEhzBKL7ANjHnzNjShasAW8aL69iGaArpBQRW",
  "key33": "4A38wiEtRxFxQG7uFDmYJ8ppQsLXkpuCTM1qjNU3KG6u6Luo9zTszt6gUnmfRQAfh6SSda6tLda7BFA7GrASpZDk"
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
