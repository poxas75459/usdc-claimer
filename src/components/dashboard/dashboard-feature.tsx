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
    "2VktfmZbXiAmH9gEASdTqj8gpMLF43buX1bdNUYMWNoJ8Rthar2AEnKFoAZkYvfw75L3bCexR12Beq741Ui4Hivt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pUqGjNxxNMhh9kaR7gMSYSZgckKYS117mFNUrbAxebSA4mB7rXiaFqQBMActUwozLx1TyB8hQj1M7Bjp5eESdax",
  "key1": "5kDW7LKAJeTEdZjfB1bfPi7yUFPMHQCDVrASH5KvEMNjKGrMCFWSctP7FxX3MYk9DceYeEBeTAyd9KjzyFVnvUgm",
  "key2": "3V4jg3PrqQVU21rP8TNks9F6H5GMbW41EgX67iK8DvUpi5Lb7umtDnk3QmfTS6aKGFRgdGTW9hZsWRYLTR6CtRg5",
  "key3": "4y545PCAz2XjnjYkpLqunaeP3wa7rosKKr3k4HD8eJvmqob9a2ZJkugPJXNvwnPmk81EiXtwYmkKLwjjH4ew5FKQ",
  "key4": "545tyv7DhRe4PtjEYELB2bN1j9CohQHamr4xhnmcJhreabrpzfZ3A5etQC7e7fF8msJ3SCyN7vp5yCTREH1YRicW",
  "key5": "5iaiXNVP2abRM8RinekBTdQR1zTLEiXVpwvxQj9soCyA2ZvKg5WwfyYbsrjb3NfivyQfYGbFhbwgaJzXec7ESSFn",
  "key6": "4Mn6xRqpgkuPKZpPXBUoPtExtgLwqUUxXBCzXsHie6zko95LYckqfFeJx8vpLwNsefrd5oVqma1bb7mDd9z3Qfmu",
  "key7": "2rBv4foqrqJL6jETni4k9y7nTDvbnJiEFbfqMCkKGBRmTjGZQpx6v3cv9iEvCZdBdfxpHDJqv5XQZNqbb4Mp8adk",
  "key8": "4h93cqk4ng8X9vsb8kgmLaPEP8hSeRQRhjj6PxJuts6EUhaquua3VskJpY8PhwdadAduXihCNtmS1Av26pLAPsnR",
  "key9": "2XpnPMuz6D61qJ1FD4Jp6mnvUNJkdmaGU4yYLELfCemTEukFBx1asrc7n7uWynRs7EH1CzyXDxZSB71XZnZ5EVUE",
  "key10": "2ppH5urvbwb6vkFxHeBFtujXMb9ePiyg25e1cHGQPrdrxm6MkAwFEN4wqRZmg9KWwCsNjJDhNWzAsCej9NNYWKnv",
  "key11": "2WSu7kQuD68TmX1pv2bWTWCVXexGiWQwbM82oF6DEsDfuXrjXNcGd2PbhkbwDe9Gqqp9CnRoBKwgy2bhQqvvhRk3",
  "key12": "5Fnsv2z9DUbmVupM2pCYoRXFDZSQYXVDcWJdkd6siqBnDFzrKc6EjjbsEwKa4T4eSntb8r3aLnhgvMiuL3v8n9ka",
  "key13": "5PLdD7zTjf4mQdbba9GREMVZYG9YyFbRnGm5Qr4xr4DtRtEoNCjxPuRUuLT89vp3SecSdH75H5BmREe3p4XkL6iv",
  "key14": "4UKLM4hSxKSDJZtcT8EVS2eyDhfzFxhRMapmNgFaYw9enqD2aBD98FZr413WitSTouEcQa6xqwbNcdNajzVn1pND",
  "key15": "bvrfm1KXKoVetygRQJEssKTL6VzogtutV4XXmqvuoeUTg7cxrcuXzTfV8i6C4pwRSrTEbq7THWcnYPHaxwVrkDT",
  "key16": "3h6LQEZBydvox5s2CnvaN7xc7PUn4A6mUDSvNPfzqtVfP5mDkwSZ2Zm6ZFrDL7xepgn5yet73r3K2QeuiaNRzyNq",
  "key17": "5Mjfzty9svddwa8cCrArDFtZh2LF2VEWswjQqoGormhkxap731o7yrNH44KYWyzqhBU4Rgd6MNcbS1GVypJbBDFA",
  "key18": "3K9bSgjbokdReRHVCnA3MZqbFEnMRTjUkDUqNUcX33Hbhd2pd2RzRRVm3cQ6TPp37V3gU98krBmYW8HnH9c2UsCe",
  "key19": "MEG57cPxz5fxC2KwDUGCgibW3r5yRL2hXdTrssB63Ezpz64L9d3rnosmTnFrgZRrC6JaiPceRFvLKjQdjAEnBcq",
  "key20": "7e4YVmEmUyss1ELQNqd4z6wewrmMjS8fPmaECqubofnvyUcNAoU3Nwj79XUcsTf2XKawnbhDaMNUUUF6x6LyfVi",
  "key21": "qHkUsKrssnMgyJmFMvpTBGXnnY2rJQwLoMTCzScDLbbo1nWNDwjVws9CFQETtq6yC2T4g68Pmhe1rVdwLULgw9i",
  "key22": "5bSgi2BTojQ6aaPDqCiRnYbkx3fW1pzp5oDcd9qDaFZr84qMakbQx1Uacu6agScf6TjcJg3UU5QUuawdAc69SgFi",
  "key23": "TK1gRbTBf2cSyYmBqTEkhu5QAWcuWnSmf2zVMChYfPtq8aDmau1jbNteVVzSgFjAos9tyDew8nLBwhBtoiWHvxk",
  "key24": "51Hn28WfToq828qzo1kTiU7nACM2AKF1b5nwBfWjc7MjSk1df6EuzLMH1Wgobn871xKZ8jTPwSepCS8XfD1ntHCr",
  "key25": "4tMDA4Xj9jxM4TWWM5Tm9oA75JX2CPWbhwWHXr48NsUKKT6N7birYePr51jRASQ9nEUqTWiGf6kE3LbXVM3t35ZQ",
  "key26": "2Jomyafa6wEQSCd98et5jhApUotFpDtXEExw67hQn6SQu7RHkamHH1CWCsy8mbXJD2YuzyVJ9W56rbWqs5hoTbdV",
  "key27": "5nZzMFRv9sThG8119qGWR8Bz9xmh3n74Mqe8ZAvqmkZgsaZitnqxvSc6UhC8LbdusEAArNCvxuBnpdciP1ezLmN2",
  "key28": "3sXkzyrTxRhLkM28fd4LGChtULTRu3deuWAvNzRe8CUusoY9sr9BaGtjuPBxP9h9wKn9t7vJZGDgbnZZTdiiYwXW",
  "key29": "3r2hP7VpZumM5PnsFvKRvrqY76za6zy5SmDzemCXJBUwjcWqEsimg2Gws7HP2rBWdGKTYaqU2XztxTQJ758Z8pSH",
  "key30": "58EcUfMx8VYpT2JMHzBUL8etKQDFMsqe4Cs9g6NZ4vrS2dzqoNe81rQ3TuVJ2ht1UJa7yR2PY5PQDSymuiGjaaa9",
  "key31": "4NkCv7UR8qMhTVGJxi97rLXRywJ8MYkubT2zQNfwnRsfUrJzG1fD39dUUhf5SpmaP4GgcmhRzWZG33GPtQywVUMm",
  "key32": "2B6QBVzW7X1EcHN8NJrWEhZRTLq9HeqoVdFQsG3FYrWkxcUX1WMQPuYUzqisVGJV4XdUBZXXr4r9VKG1157gMMdN"
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
