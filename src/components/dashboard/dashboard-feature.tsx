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
    "5vCx9NiGAAzpapCJXFsZJVuadZ2JXFLp7hRb2jLueCH1B8j1NzrSyGjcJp2xGbFpQMZoYnwuq3HuEadrd17umdmz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gj8pt5MbVQGkMJDVKjPZTM4yJoiDVQZ9DW3gRnfDT6jhzdUs9v94xjKYNAY8vf6LSkutFjBzEGy2QjThfdLxebd",
  "key1": "8kutjZDtR5zxXRz3oL2Zbb4PP6uzUvJGFaGC34qNTaGmyo4qS4v5hQVC19bREuCbPW7CsJYyoRGpF4Xyvwoc223",
  "key2": "47pRMM8588LAPeMbf4WcxM6futFnr4vvwMHZaK5AkEnFgVqa8XdHEVeAFR9tv4Ldz72PQzSQqeC2zQYZoahzushh",
  "key3": "5bSSeJrb5U3XSAWW2p9o2cjoUnBVhMx6zxZqCh2oh4HwN2beqViQKMR7qkQrzuBeeNJo6jEBW57qpXSzoiE4wNMb",
  "key4": "3v48iG4h5SJWRm2Cybys5qkwdHpH9qYuAwdLFaJoZaobnUxYXQUZ3hbGJhRpFtr7XX3aKcYhLPYuQ8vorw6mxJ9L",
  "key5": "52dxCjyKr81pHUisdiRxMhV1HZYopPjwahxVmhQZagHBJ69Nz6MSRxpVUDyURw5BQQZYPANwF18Xgo5KVEjMAVPw",
  "key6": "5ESwrNTbyGJAhxhQZbxCmzBXHZwCPomLEu91Z5mFYGY2imYE5Z267kTBwxNgMteua911k7zAaq2vaygbw4mSe5PY",
  "key7": "5A3sMV3Y5xmyajvyBqY9FbJsavHSLowPMHmJjdszs1YXtPQzaWAWNrsFr6Ua3wMZ8KHN3o6si3NS6FPBJy3jxdsd",
  "key8": "2ckYybVc9v1TmAAbjzDAwtUvqwRL5ft7s6k6QQuSK7ECrKwgeazKbB88hDUWxmxLn5njn18xRPZ8tjBuRD5DsKKg",
  "key9": "43QZoXfoBBSV28A5LhmL2Q182GxRtj6ySXPfPSXkKf25CsPtGMADek1qfR4CaKBydTnVdMj7w6LZW3QtExCJrqg4",
  "key10": "3u7TYHNZd3agMb4MYht3jTf39nnLmaXd7M37hd5k3cHja4Tr4xU6vFgRzXUzLH87mugsv8abxXXmf84z8omgNHJe",
  "key11": "xVWtES41tEmhPSYyaaPPh6F2KTqr1RTCDJRym3x1Jpw4f83ierE83JyJoBHrFvJ71qWYj2MvXVNGSY7puz1zZwz",
  "key12": "2JoRyxxnYUuk3zvufqjpYmMs39Mbdn1gZ4T9H1n382Z3E2qKNi11uBFATG7LYsf1UvxPnRJC8rLoiKMNcbfQ8qv2",
  "key13": "2cX4njPUk4hZk9EY9qCnhc8LSM4h7Ezn834V52xRP3zxNqRgW3KiXXe6seFTHG8Q2AGhchLPtU6jashsJPQBsVqU",
  "key14": "5Nc1QrA6JE3CnLaE9Gbprv9ACMZ1VoBUE2KqHKwr6c92hWZgAYxEUhMhQ1hANgVcKdPoaQWd5iRP7v25x3ZtQhDa",
  "key15": "qHXGUu6E7hcTUvri5P7TpG4t6mMwGXnh9g8vbvsbTQzvDmdahH6vF1Sjr9CsaVyXnThPHSpGoVRZM8jwbpzkcmi",
  "key16": "4mvLomHh5p24kmpY3Sy9qnhtwSvEWcdAVSW2FFcXudZvjKu8xHc7Mdv9BEj1vpMN4utDfoEghU3uLp3K2AhCJtma",
  "key17": "PCt6tAdBs6bPZMvrek2xnAYdZxu5tSeQRjr2yA2iyWCrmfBQBbrKLKPbjgt3FuooKgDcpoH3yJbpEnqDUGrBp1E",
  "key18": "5aeS1GW1chbbgLUEo6LurH1JpzoWrypXiW7HKGRbCap2MWfmniXHGWZJUJtRRZTpaexTWdUbQi7H5n3jcndQWxeH",
  "key19": "5DomVc8JCTtnog5fr6uDjT5qjJEYBuVTegE8zeabmvwsZcR1Ek6N3bBJYs8HUnd73C5yLBM2psPRHfaiupPSutfu",
  "key20": "2FaK4365twsYcdgM4YxBAdVNESwed3eCqEpsLnyB7PY531gnziQBx1X3NEkxMWeXMDJ4CcmJRGoEyjXQY5RW7V3Q",
  "key21": "2P4BNBoXQGCjixxixnsiyvkQsij2wENXTtFX7nJyEoPrrZ4LVptfy6VqiEh9c2awBHHg3YENbahAvd3TvrBwgLyD",
  "key22": "3FJ7iWLJZJTvJUG1MrTwqPgVKptN3jHP2G8h3mGpfqSifGJxNZ8CaB1Farp6YK9tJyM9AzA5X14LtKxza11c9RfN",
  "key23": "4dJR2nVufL8xQb835tjsf83ZkpXZKU92p2fRPgpznNCp8o9xa4AqLjMMATnNhuthYy5GPzhmRXGTb62Hpv88iR3",
  "key24": "25VBRSUaWSxUXQpZmRMFJSasui5nMVXVTmXsbCjgdFfhmg3CWGq4qNehWiGs8bdmiXaoN5J5q7KUfqdKz5LKnoNb",
  "key25": "ifnoW2eijZNyuGJeQ6umqCXSXjKpBEpJCVipDStNJdrLf93BBJDDR9tJcmwaiv2rEydpBdPeY2iEM5C8no5GASP",
  "key26": "sBCsadohqcosipAEj8xnGtjyWMzTMNNrkFrDfg2ZgXSzPZtVFzkeSx1TMAFe6UYbE4Uzykq7xAccPXLpQnuw8HL",
  "key27": "QeyoubamMAJdS4aWZyFGmHVhCugJzfLqEr4uvRmSL3wexkupN1TM6yvL6AutdDBp3oQ7MTAN61vcwCMz9zw93Fk",
  "key28": "2frq2MTS2fZ4BXGe8CUADf58rvvQLJHZVuWTFSiwWiABR9EPRLHFgatkFv1UejU84HosLGKusdKE1E31wQTwmQR4",
  "key29": "HBo9y2g3sHe68F3c5EMaG7rz2PQXks1V1hRZzaBUV5MJkHWcairiv4kBXiVFtwamt6a3Bgm3jghewNpmh5e4xm4",
  "key30": "kaPPijDnfCAWcJakP7yxPufV5jqk9Sg3uG3YcfZ8rxLbMhNhjV8RyB2gMKgYkS5gwTxnZUm5n5bSjZzzHWLPWgv"
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
