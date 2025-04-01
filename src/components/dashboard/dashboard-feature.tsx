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
    "51keyqqSHxbGJinKmDPNpmNjD28JNb2NykhK9RybajvbwzZfd84furH6q46dQ95bHMSb4EW5crQy6kYDhX49oTrZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NuPbMVB8LXyYuqSgXfzW7k8LuHQF7Sptg9wRnukgH6Ku8RohrbrqbgAknnizHFAZm1RkRxVfRXkRXsWHuWqjHAP",
  "key1": "3gEp3shysQuwHtnEko53jdbZJMLGT9te9ZcqZANoTQwt5D3bT2yaxz1gxAPSHJrfWi9Ao48viJShzKmMzEt2GCMn",
  "key2": "2XvpvSVcvG7V6YU5zeqnHbWXV5vXcQBwywRo5xStSwvU4gNmXtXW8Y2KqE7oxfatVAD9HFzpdxTLmUbBa1tFUmFn",
  "key3": "3y8UtYC7d8d52afgM8bMStbQo7FmgzCx1e9VMJPD5NZpsXJMMZtpjaqf8ACH4sXM9326d8bu2KBNLrQ6YQRSAvZz",
  "key4": "3DX2bTBPqv1TDg8TNRKSURkp521FVBPEAwuUZNbTuGkq34fk4osGaepZLbqjXAtCoQ5CkguLpQQ62Gi42d3FSjbC",
  "key5": "4k9874VLi9Nfu557nN3YJCgG1V4TrBXpvQ2CMRQuHP2EwZN8UhvZaiaiTyus33WDd5T677WDSXKMtfzHw1VXkv4M",
  "key6": "5APEYHvCNLV1yxxDWKEgeYDQ5mRk3Cg7vDRseJ4SrEwNMFpuHJVN3w1XGee6BFp5Becx8Knv43dAWLLjnJG4hpLP",
  "key7": "1QTDSabaG1VFH5YAyCScGEUxDshiWMeGPJXTyviY5onc45zTWfCnnPGyQG7oztPGBBJ7JhqtXZt6n1tK4zqBtB8",
  "key8": "2zoGYrApq4P96webYwnyBYV6gYH9HpSbx1THBczQQuijromuCBZn2vQqBe5wX753GLLpMn6rTNCRtYjg1PCtWZNp",
  "key9": "64zytRarAuM7wjRQbf7cRwWR485NNQ3uerzpqg4f7DXEW4Rdn99rbf4rFaZ6E5z1qVzqCktFXYhf85DZFn9tGKbt",
  "key10": "23XeHG7vmrFHRJMV6dc2DqYgrFyCweY8brAhceAJ7NxDib6YedGo4qW2RzjvWPUAZXxVqjuwwHJsgtcjck4zFRzV",
  "key11": "S6oi7Me2fWPHyFWmCisJE1gkmk3TU4ewwbSgB55mPCnz5MtckyGWUfpJoML2LyZ4SZUS6qQUPKyF4KHGeHUCwDc",
  "key12": "4nxtPfvcgok5yU1U5iRnYWcY8DV9Uduu3MbdBe1XSszTwMESFUXHyTh1ADUczfqKdjS2J34YBtwGeMeCJyqE3FXw",
  "key13": "46dfFtK2tPz3HsXLcd43FuKe1vLBZZk47d3nM9fCrr7gWPPo46XEvF5ttz6Ea8iCGNMNpxsgHdK13YxTdv48jaZ",
  "key14": "3qLA6Es1XN63CmCy1s4D1qCZGzgarRu7CfX7WPDbX8QwjuNaGi6EJfAPv5W1ZFar32gXHXZeb3Kky4p1RWkcihbB",
  "key15": "21RthiYyziYhGeuxoxmayg8QvZ8pUgFXcdG7gEhrnGF6WcXcNTDmmWJ93fPzp7ZNHfpBaJSxRBjeHB7mia5Rv7pQ",
  "key16": "BvY5NBbfgm8iG7bfkiPfpSgQD1GSWYJogzpV5o8JsmKyb5Wfe6fywoTDE2STRCy52Kg1CdtpcvvDk2RwzQJhjQ9",
  "key17": "62eormKwm7uXvRcbP3KgsCcoj4yEMLckpzbcizRnfikMnLem438VJm3ATJ7zoK88sbQYjEHjGejtPaLFbCh7osAR",
  "key18": "5bkV15xREiW6LzRULSuFYjdKQtqQtGbp18jBzfDGnSzNMBqRzsaccXzA7XicbayvQ5eEtPpPWubumAvdjD4kxk3M",
  "key19": "4fDRPkD7unULjNPDDCRTNpvHQ7BF4N9jM1ev4rWQs8ziQicMoUdR22TtTwAGrsinpA8L1xcpvdPwPL5eVkbfnF5Q",
  "key20": "3ZXyAxnmcM5xopUvKQgv67pUegSGEAKE6E9HrVqKCyDem4ur9xFroeCK9oN7r9JEhFL17L9A5ZCheJSkPaqC5kSQ",
  "key21": "4KHV1YtbyW4rF4FMCHov9EZL6GGZGhHJ8T6gKoBDmUESNpm4wQEnAuoibWNgjXJYyjsJfciaCBA1LonhQQHXyKGT",
  "key22": "4zp49yvEmcrgVMAoJASgHeca5KXRF299VBaTmkqFXJSw9WVMXFbWNp38NAaEBhi5FfthG3Ju1UxWvQqDzx2iTC6E",
  "key23": "2Yys14Y8cDdvNEBa1ajihevtuS5D5bthbgZksbkTC1LPxHM38vFBkRc4bqKSrZ5smb7mdvpNGpuXfdogkkzUAcS5",
  "key24": "5tNb7R9xbanb4JvPxYq1QJvws3o39x4sWyXfdnvghYyDKNTDgPf26i3qYoHGLq2r6ZUhnBnYwwZ6mNCu18S63VFa",
  "key25": "ac42MKsUD2Td5nXu75NiTNAjjutZFJ4ZbiqYK1LT8SCwXPJucHJiLHqQJTTChBpTw8vsj2vrEhJxcHGNNeyJn7y",
  "key26": "5SfQSeVUEzZCQypwimZPdnou2bRr6FFPPhReJD3ZLGjyyCTmwQnJ2QVxNgZdchrtFvgNhzhxFwEoLEpRasoSpWNd",
  "key27": "5pGEZU1FdMY3fysTDRpmXyhUsS7TXor7Pkxceg4DrTs69AU1t467cMbP3fM3KJBJ5E3ZXAtuR9TQdmaYhs3WvAEQ",
  "key28": "5DVK7zHhHBxxDT7hJPw8LNMPUPx2hB7GRoeNuPdg9N9bHkBjsNBdZJxHQYyP3pDvHZisMVTDLjueSd8b32MYR19m",
  "key29": "57PEARJyNtNYsyaHsJJEcRHsEyEcLUmbhcbbweKXxvb19SAUCszYZ6JjU9t2eJJRpjoYEq2rLJRaBD4NMRB83jnV",
  "key30": "2fm5NE1gmdsy5VTh8RRi1kiiX5AXhr4nLVfZevrtjBJmyaYbmhi2SVU2JwVympmg6q4oHYPpwCX6jf2nwGDp3cFZ",
  "key31": "2R4f2iY1mimiiwXxRAa1BAzPHSWmTgjaXwfiKU5FbVAY4njmgAYF21ehqkxePFkTTUBKn1sSvWjSHE3xvgSFFahm",
  "key32": "52V2FhJC9f8PiRVGxEDmcRh9EvJ75va8vXXSoyVdaiguA3E8FrNMNzCN8J8F6oFwRqrkGDPf4qLn9imVo563DxPv",
  "key33": "4enMbxehP1ov8CUajRMbEuGVtj5habefDeXZebNSJ4nvP4KF4Hw4zDAu9dVCPT7Sw99VbriR2tB7b3PcKy75Xi7m",
  "key34": "3RtBeZBFNuHQHytnHCr1ydg8UwrsyBNXMKAu3mCj4J2BAo4xzj5BbhCM24Er5YVazAmoTJR3Yw2MdkxpWJFWit2x",
  "key35": "jphKF7siX1AyFkHpeMYpDZRDP8atQYceXxy38kAE5nVtdVxX7giAaeEiGu65ozJD5hUNMmdaYh93izpUu1bAruo",
  "key36": "2Qh7hSQKMX8mB4ewsF6hhvh5woBhGCLq7PwuwD74mHTrLQevEtwVoaXvJJhpjybpVL7F7mhXsYSgMbJbkZv2PGcd",
  "key37": "3KWEWSxpmZuydXDue9bEtWwkdhBBfNjHM8YWzefo3DVHMaM2i8PfHUACLu1knaW6bbkDVEJxNCU1BXf5R2KLPJAA",
  "key38": "5ahf7UjwfVGdr11Mjg9LrJNqM9CeJjdSGKtoBRHLDTkZyeBEiNFbx6yhnhjTb3yF4kPXY5b4ZvgF16kGhsUbcMVB"
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
