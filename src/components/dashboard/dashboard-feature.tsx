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
    "3sPijCHMD5mKDdNFvqTeVRcdFri9GzFQCYKrFau9LRYt9DcZ3T4j2chwZmf8eAFSnQyWC3KnS67RCdNBAtQU2WqA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62jUmR5uMPuoDa6fMC7BPWix8THaC9zpjH1yNZrxbMAe5AADAxrvUmSWgJv3XrG4ZD5tQuEcZXonGreqCg9MPQ8u",
  "key1": "4Fd4uPjrvacLKmfteS3XKYqki8apa6HzURESpDaWbFGfQKw6F4pU8k5fFUHeNzvPYDBAHEpYBFKevtTP7gM5bwP2",
  "key2": "3vnxsc6HNMFE8yWN9KZ4TTzqFXn3q2DTg1a3UGjx5eDBWMr3jePyUiLr2DdBkTwMCsUXpQLUPv1dHXfTu1R66yTe",
  "key3": "4PDco3Yga5siF9czCHSnwfWma6itBWDs4grhqKSxJ4rFXthVzwar4hKSjbeUwv7oP9kgPnrkwrq4cw6c47xYjGxo",
  "key4": "3Z7hoShfZ9uNj8hijB2DEz2YCACq4ukv6wQAAuG2jMdUgvgrfc3q3MKXNjhGUKC7ZmpUf9iRW2xUGSF1F3m7bXTw",
  "key5": "n8L9uYxwKTQYnQoaSRarG7rrDVpGdHU6yjyzVECHh4DfAWVBx2zVtquYKEpD8J27VoRYoiFTViLgWRXvJBNPA4d",
  "key6": "3yLGrEzvX5ceBgYvRzm3JDvh9jzmEtaLNzYAdUDrdSFrytretRYdahk2jkXi7TBTAzk1stN6LRV76zxtLjar5Exu",
  "key7": "kARqdM41NJxphoN51cYpe6SkHAGf2sLMQcBidujmTK1GKmgrd3ofXFvPmQ9cTbj6Dk5Qks2dtF5d2zX2DZYHHzs",
  "key8": "5F19ayvkU3Ch5J4PQZLUdejiMc8MweBqHJgvfAcW6yTDFr2D9SuaMD97KMC2kzuJHd2m1EhCsZ3sMTJPdJG4eWJk",
  "key9": "5uqMEXadSZXfW4o5F6omFi9PUokqbDNVE53ecPULtMXCGWR9RTQBUeDynx6CHNzKAymQoyPGoniKgNYdJ9qQqXHP",
  "key10": "33egS5wVUcJqYmr9BL54pLXViV21gfWEJSEBAGdsGXDp2UKXzevLb9uASAmqhhzQnBMGHrNVj3ffgS9AgaDLL39x",
  "key11": "7KQbuAJLXJ6AmxhsXnwvCm4moK26vgLpqEMjALeaTQXW6zSDy34qcnuFNkARjkUqfhXRXBpsxcdW8cCBJqYskqV",
  "key12": "4cdRx2SyX6eppL1HTBfvywwepLK2CLCzRJhgnFYYFaqwZo8997TJpUzRahTuZWtVtaX52GSbDFjvPPvxkMZ6GR4m",
  "key13": "32FUi7SQtCFp9wYQVAG1ZcEmRCrpftixGWRbfHjKBabDe3j9U7D5sVMPdEjzrfFLa9nFpBtKjRwE6yjjtEqu555e",
  "key14": "4yZKxRRL1cDB9CkHQPtrsAwQTZ9PsjBUs8WddVzgccRQ8XQomnkB63uaM8VZLr6idhXGBUP8m4nUVSLVUGkq5HXi",
  "key15": "3dBqvdAEzhYGkgvGGNLFWiwF2nyzx5T99zoAQbuzbS1jyteRCpypcsF3hnoyVyY3NMkLxyuSwatsZfA3DU1frg8N",
  "key16": "4KeyUYgjrrDYJtVFZZKi8vGf7qkPNmnrrwZ65RkSdvMqVJignhe1nb3TdTFCrTAoG7at1PoTugrFGVebN68ZaWoA",
  "key17": "27EMQxpzSNWo2WXgqYUGjGijq3PvLaeoV1Du1DW6TpAXv5pMGWERqv2doz2o8ax6Pbk7m1Dw8C1Jf2jKpqZxdPQ3",
  "key18": "67dAkEzEZ5Kba4bVFKTrnKfaZc4zJ4Rvpr3ChwbgSCc5PSasYwr2Vv9ZAo5JdXDHpckZ1XQpAVResf2Lrc4eHErB",
  "key19": "4ts18MDRHW59PnhQ2gZhHf7it6461EKbDjmGJaFMm236kZGrrhLUAfYuBvX9Zb3BNEzEcXhkuNUGQFVYmnwE5znw",
  "key20": "3vUb5Av8jzhiXAg4ezjjnNWzMXjuPatUCPmHQSdjtvDHcWob5QVnbUR2BGvmFeFXqmkHMpBkEKEAuWTEwgze7gNd",
  "key21": "3aeNJE8d4VhgCiovhvh5KRnr9SWW3Yf6oV59kwFakuxNBGkuEb3HkCaA9NM7J7GKKjJPwyhPgLytfHWfWJhXxk5e",
  "key22": "3sdHCcsiuX3Hj7uN4bvDSjjwrh5fTztMag1JP4Xe8khoBndyc9GxLdddFTyuZbrxoXd7L6mKnSEjZYiWRFDHCurj",
  "key23": "2E2ahSVvJdC3W2S8HhjRYbxtdS7ouD3iQVy3DM8q5P7siTcbmUytwFYSiYUzHxBMFpXG4yWWf8hYXRtsiiqH8iRr",
  "key24": "3LTj4NmGWD1N9QfLcA7DVCBfbHSgUW1yTndD78Nof1AMSxWkDtQkPFuAa68VYeH1qBAG22AwMbio15kosg9mpyPr",
  "key25": "5Y6wEHaKa5739W39YbdXt2XF7zFkJeZ1ZZkQzfddsrYArwSGC377RbGDGPHG4smJRDoSJY7JXA92tMFB6MAVeqAK",
  "key26": "2Sgji95992B5VTRaDjMPWXPn528ajmtknMoHq7zeViVRmpdKx8jf3Ao7CLGfF98ugczVdBeK3U8NSbH2Y9m9vzAn",
  "key27": "3RWMuJJDHvvKWeSMUx8xCkxtpY85jfRN7i3KuCgZqpXzdTV21aLKN5856jQLFbnb4b1BYN6nphy2mLnv62kpCypK",
  "key28": "2cLeWUDAbyBmghHFFHbTQDHYrdpwiMoRQPBM8WiB92bWEvPGe1cecjYwT76WBELBvX4zX68meG1PmXCrCKivyvjB",
  "key29": "55BVJqMbKmnqDsgEadZ7EtNKXihTfofCMaqBmAcEMv4JbMhVSsg4p6mj3q2ALqpj9SagCEZAgRtg8dfgFTSVn63C",
  "key30": "3SbfRyGtXEHCEi4kdTA6TRD5Sw8opBqPGAUx69nUkQSLkTT7G7dPeC8bJmKdsvyygzdKN9kkdjxpofE6zi335H53",
  "key31": "tvUzquosJigF8UEqN5agv5qXzPJuVc582yctrfwMSuaxGeWgnoP6nfGLgTrSp2rCXwhwBvPPjAYsoZULYrYbbPy",
  "key32": "453JhsGT7umk1wX35hPhFac2twGxKXDHXnyLBCjb47uRCoPdmJXWJCz4FdSXpB9th46zdHxGJ9paXDk5KmBHtbvh",
  "key33": "reMAAQ5QVgh59eRYbVSNF48mdJa9UTAZ5LnF4w1ShFGXHAiqQN3hrFt8CFAQn1vGavJxBYr7wqXmWVnPpuZaGNL"
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
