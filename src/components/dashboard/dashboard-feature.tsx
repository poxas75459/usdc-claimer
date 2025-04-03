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
    "41NHcLjUduUXU6U6bghCSTeDC1R9gCb8GXWP3fr7Fydb2mDdPqMVbuNBv53HqY2kQmF8upq9q2w7eBgSoad8m6ds"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gTP66YBqrX91EqkJu6ZRkNg78yXFE847DRxD32PPC3bnPgj3dsSFFm2RrWVQL1skbU2sHSYu5MJMvbTNaQiA7pu",
  "key1": "62KgGxrZoM2kAwSfP9YkvZswuYck3UaGB9pdb1J92MQMgZv4ATdJmrM9CosGBGcnJ8VDJtgFmsA9UbycPNCKXH15",
  "key2": "S38yKpJSb8g4J7XgahnEoihWD3AupZtuLadMBc3dFa3gU3ef3snTG8bF6LFFSE5TPmtfMJEoj6a59KZDUdBJSet",
  "key3": "5s9pYAoDZoBotDC7bFSZuQBB4ZzGYxtx84MbkUuf9thA17YG6JR4sSr2YdGitdYAyUhV5j1wUHGpNTYGNC5Ad4FQ",
  "key4": "3wHdNExYTkSgJwMPkAjiYBBSSGsHdxjqonKfRmN3RfgaJkWcfMfmqcZVVZaoF2qPVTXrjggabZeU18vri1iDUV7q",
  "key5": "3tgJwuo2XBJDtPSzSz34K2eSMYeQahcbCHYX1nxdSTKPV4bKSDmWA6s4v6WkbxB65BpapJXzFjBnreG83vJZnxAr",
  "key6": "631gSeBYYBXENUYmYJELEnBedB3PGvVBDc6H2R777JafYFbC3WtGQaiQBrwRseFeaPfg1TsiQGYK4epbDrUC4WcU",
  "key7": "2pNmjQAEkR2pCBrBZt36mcRLRbLHKa9vg9JP5oGz325fdNVTFRX1MwYPEQQQgi9wG7eSEM7tC5V31YN3AXD4SjhZ",
  "key8": "4Gom9W2ubhBSNERtU3os1PWnZXbo2NXYbT5qnoEdCGrBXmQtnkenqQoLvhsXLh9DBRwtFHnJVQud3HLdm6mTgjKi",
  "key9": "5NfsME9snTzT65Wi8iVFXJAQHSQMizpEYeXZUQzX4bYbAq7EimfBKDrpYQTe8sku7GNP8BdQa2ijfMrW1KaU9k7d",
  "key10": "4tFuiGKhDZFJgpKMyLTQqWyYqK8p7D73ttYCYadhPANNw8e8RGBFMZKDjNV7X4AgJDPZrAz1Tw2ez6LTSmLxd3KV",
  "key11": "22D2t8iAedyuowWPqmn52g4nb2NgsLDqbqNM3PNN39yM3V6BaGc9Q6ie4bu8LouaqdRSNNBBhFJig4SdXYFXURjh",
  "key12": "8QYrYVtNVjF8KyRQ7JgeD23tW4oVre8eCNMuhxSAXSqrvcVH7ctg75vr9jK3mHpDxX6qP62YDXSuAK7wz5qaGfh",
  "key13": "5vqFjERAPaPDeCD9vrc8QwzjGuFCuHrxgypLtFEWy12QmQ4Qzns9nSBj5hhffxWQ7J4NNrCLvQpvHF8feycCNTeV",
  "key14": "41GPRzU2ZGTnAokwqWXs5ytRXZFzS4sPTEH1wyGjTVdf8xcWSNywPKt1VqjjS44gVhdv4FzrycBBE3QTGkUkKuTv",
  "key15": "2NSSEjk183AsJ1cmzjR1yPk5pwRPkQTwwb9mngAfiBe8t6q4cxkdbWm35h8Sz7phEcEmPLvtKHruQQQaaRLRGdFE",
  "key16": "2X9aSsv3F5dVmgKYu4WqEh5mMP51X9SqqzghaegCVjqaaFUpnFLUYR46apSNR4rWbLEPRmzHsPDF6Ae3PwTocjiq",
  "key17": "2zXijd2qfMcHdjVPEp198Gb6XJuYCMmgs46h7eEoikdZdN9d3BjFH7NmHZX3XCth2ZKtfoFdWTETrWGHEEacGawT",
  "key18": "xHVKhVqfGYyuMMn36t8s4vcSynAJJARhgPZTffTSmiSDPkaz4jeSoKsJBPZ6oWZQYFVAkm4KjFAVQqqo3VbAKqT",
  "key19": "53qa9EymQtpNFfSZV6u26EhyZRBNEu4LoBfzEqxpZdwbFSPHAKgvtwCmv7xBCubxzJWYZicYBrcfEPt88MDDMukG",
  "key20": "i9QsagC6k5NinTMwmroH1PiA1N67HLz2DHZxjh3KB25u814CNdRzinBfLJwumQkVu4boi27cMgY4pPkaYCKzTAd",
  "key21": "4DEj1aXxxW1bV8U7xBtDripwTTw7UoGmFAk2pEaVxGQXakWpneNEeEau9hPaiw1peUh5WYwVkZxBXcFNgSMwiPNj",
  "key22": "224XyFNyyomoLCt1wCj52RadrsuBGc5mHvmS1wJr41VLvbPe2wNpzvCRANSX6rajWKUoqMSg3GztwryiVznSfks4",
  "key23": "3hjVUgY5PepThFbQS939SHX4QRSz146zQMrhZVatMRXsy9vuAwCgxr6PEKv4UUFn2sRM2qywz5Jh5RxkkbG5CVFT",
  "key24": "3hi78iGCcfxVVnq1aNTmuFtLLa5dSwQ7c83Eh9CwLkEXFHSVS7pho2VAwkVkGPQbG1EHig4RUYJd8oBB8jhUH84",
  "key25": "2uPcZLyzY2tcgWmzRmAbtkzBK2CPXNCWdVqhMZQnJRBqbLcXbJ2XKMYWhW1QN2WU8rfN5tQEG4ikzScLTKW9h6aG",
  "key26": "2rgCxFRCZM5q49aBWhG18dwRcvM2je8LB7MtypbssZidj3h2zMjdbvs6EXRT3NGZvwSDkV4PweWAk5tRn8L8rvNs",
  "key27": "2qqiSuy4SYvpaprUeQNZrhrCAP6ugyY1ycKKhxft33oK3kHPE1dQGcATDou5Esr4GBKpLwne9RBE9eTpgqwAw7e1",
  "key28": "2BmQ58en7k6xMHogXj64b6GiRsMaeSFx6cFWjECzfckzsTVDEKDhzTDc4QKPczMP39vkHkY2QKX2ue7PzzDQVBCE",
  "key29": "3jzGwUyYxSXfqVB6xKFj3TbfLyFTHmpU1qKyRw7kcstYmgHEhjY4RNdSWPt9cXprowvmsaQ83cKLhKVQkDtHsmUZ",
  "key30": "on5R7KCTUWNv6GPED6SPCQp7sQKv2ztqNgsyRTcExjdtabQ58aqB3QGyNGxDJkLbBeWgLjk5cpHUUyquuVQ9o1C",
  "key31": "2nCeu7JkKwYVXNDrWAwJwadwLtyRdnWwGc2PiZbQgNK5BT6SjVMiEuDbGYVSBvN79c1oDfi1nsn42QpZRr1g2hYF",
  "key32": "3tbEuo71hYz8tBXnQD6AAQt458edjFRtwJ2E41q5RqqMBrzanpV8XEWvmFwggUQEVuKvcGSABHjrcCTJFzDt4Zpc",
  "key33": "9x56NtvukabzSWegHKTkRPcc8QciPfb7JXvHwNkjAwQmBzZefauzUvULszBZvUgKCHTrTP3RxKB5tKXZHbcAF2A",
  "key34": "2RA5RYvG1ezGNmxaX943DZisVDXzL5ngQvUde2etCMit9JHhjrtox1fQAWxR9LbUZAcueDXEG3skpvPpBybCP4Xz"
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
