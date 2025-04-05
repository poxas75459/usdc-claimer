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
    "4hcDCZBxc5gys19AVQobL2dtiaVy9Y2VyzkXPyVsXuMTj4e1xicFk8aMZpKvtZeYmNSgnrSkY7pYoZ4EiWAswrLn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32orJAzLYHTQzsSoCSMpnbqEvLDRYWXHNhSJTf5yr3HTDYqgzEdCcjYEoR9BxMBotP5L7M1xRe6DA8NUWKtGmtEi",
  "key1": "spszkwHDD8FZbPWQRow9sNjNEtmgCzTMViN6HzLpKzqtkHVo9YHxr7Eq7U9TPcSw1cv445UsSPokkQZyxEwSF7m",
  "key2": "5w3zuTKTYDkCY3RFsymCpkEiG1CKSuEvCLQyB8bhk1MfH3ioscsQLB3vho3MPXiQknNQRpMgDv7Y4a6Utj4FAbdz",
  "key3": "ird3WerFWNo3i4onFfXUvkzTa1yoYUSEdRDAAwvHXTXmFS88Ed2kaQjJMY5xwnKfkHfYV1HVStydb6f7guq2HMw",
  "key4": "4UCHomLfro6C8p1eCSaoZZ9rqqQTjiLARUdV7ZMHWHSXGdwLYCyZXiCEsATfNkxdwvoPnyBujHPyiWrvsTQ46eKY",
  "key5": "4i72GVvRYcMwHTCFvyvDvM4EM7mxJDKFMVzKNbN8nEfYEq8nPdkv9gp4ALVqVrG1icdgGq2GTp6AC82njn2X2rLT",
  "key6": "35F4V8422vi9iNj1tDbJh4Vo9qpakkX6a5xeo6vYRhuQDNUfzib6ixNNBBjQcVntBgpjSC5rVY5YtjBYm1T8HNtZ",
  "key7": "5pbgHZ6cPmTohveh2Fhf3HHUomd5d3Bt5EHMic9FJ9799WwPC6HTgpMBvvNMFLUR6Q1CNaweFVDvg2eLkaDosv9r",
  "key8": "2TbLpBvYFgqSUHQDA9wXjMeJc5SqUJhQ8zZMzDTLNbYLRca1dKqt7Bh5ViQdBy8vYQ4NVaR52dVAaCqanPHwR85A",
  "key9": "2qNpjtwfvPy1GKATupXup7FGFULwPeKisdoYTfJc6EzYZb4G4CUibxyEtnWJ1Pdhk3fhEEYJbxRfVydNbjD3sAzZ",
  "key10": "4NmAnMbPioR3tRdyUCsYoT4joUwEJFWUMHLCzuPpDMqzRC1w4KJpzazZGXfF8sdPthifS9MQuyFqCZ4NpZ5HoSwC",
  "key11": "72cL8d3f6kPhE4vF1YQzoob3rXvnXvsYKZRwPPi2G9cSAfkBAniHbx9HN4XaB4n8bW4qUUuV4gyKka5QX4E1aMg",
  "key12": "4Tn9qzTi2jV2B2bFjynddY9YESTDuQNLG7m9sdmwVw9mM1T2A4wZAvXPLwZxy8xr4Uy2TFMcthU4NpXmF5TcgY19",
  "key13": "43E9gv2JmrpNWU79TkAYTwSfubLV7E1rp3utXzkDrWbr2B6UxBEkPszbdWiL2m1jbPmoS8i6ETfXJgeDGq7cittQ",
  "key14": "2xkg6zZxfquykU6njQ6b1SC1DV79FVsw5x3hnMvUeDATTTQd3brfVvYFyy5VumbvbRsYgbEdAjQE3HrF7uuL1pzw",
  "key15": "2hy4XpwGsnGXvCRk3K7DqH2p1Zfagu3ay3DnJ2nQBxqpggn1V2aZX7KNXEyiqwPnzAr4fg2U85ByfYxtdZVrr3eY",
  "key16": "CfkTypu5jg3avKz5U8kZRjPumfx4YtHSiyFErrd513RHYCBU1a9f2PFkXw9o9sf8biEECn8hrz79R9HEKgRUU9b",
  "key17": "5N9kjsaQ7mGRQqoD6HkDqYkTvjSL94w8ynoqn8irsuv3cHqNNzqBRgUdNWEyiV757aWv8pnr4KNJ45DJxjeEYi6B",
  "key18": "32jGuEhJC4tMVAkLcKNc8eKCMxibSbihAz1Da6k7bemNVbruKLFjZxXsVgEHPzMFXeQEkeSCUoBQ7eMVNHo2mx7",
  "key19": "53StEeQsXfxpxRTATm1iXSrAj1EPLvaAvfHSassqa6sQQrF6ZB5sMSCyhTqRMxUqn55Q5ccpywndcAsqtM7sffuE",
  "key20": "566AzTKBBZrUAu6D7Y8CTVxbGvh54gPZqByHhtj9qy3eCPKevNyDex5XbmHSk2wEVgDsu8sBXXo8LF51vDXDYb24",
  "key21": "2PHKZMyFPn5aF1h6nkpvYZUvE4cyhds2PZMVC5MZPanyntP5Xp18TwQZ1mJjrvSmvVDaRn9dxLzXLzFiya2WgwLe",
  "key22": "67PBRdra5Y1KUo7Pze44Bu7rRg33dzj8cxmD2wY59PM7WXFuCCKqSZCk95MjNVAcR4VkMKTmSbtCaAXD1Vsbkf9z",
  "key23": "R8KMakZqStcpgRiP2uGUBwKqH3gXkwbgqY8haToSobGAbSvHH3KTS5Y3eAzCCjdmHUcdgcqpTYWxjL8u5LeFWjJ",
  "key24": "3WYXsrhE8C4HdqZ7r1D3m5H7U8frzncBGgTLsYo2k9CPiPd7HP5YE498Q1f79EnHjAu4o4wFB6s41WCEP9qJS613",
  "key25": "5Q8xT3ZUYmN6SKqfvntDen5FT6pRSnJiz6En3UfHfKWryQQtEjwjtJnLN6dJ4nMAvZANiuMSCnqft9Em3BsUuvB5"
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
