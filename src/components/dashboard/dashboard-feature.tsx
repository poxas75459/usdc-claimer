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
    "2e6XiZAL2GY94wvGAiMhmDnZa1fTLwVX7jX7U1FsLPCSYW2YFkyiX1EZR5P9426QCRwpRiWThAVtJQpMoNb8RH4C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xuybQLaBeERhKXt6jaqS7dBE7Rr36jHcoVRTMW8rdZvWnK4VWukha4RKK5UVkPXcHDWL9dHv8Gk1RFkmdS4cavv",
  "key1": "HJ2bszCqkPvdyArSUMD4YhRYF7434ZwDhdEfnpfPh7wjvNRPfdX9XxzQHyVxGNk76j2dV1rAyHdrWakQJfZ8DAE",
  "key2": "5g4sDekfrP8kzqxXUavn9gxX46AR7UCa9kb4Aep81TVd7EbGu6QixLprundGYPmrYCpWpie67UGC9ScWJzhaXLCS",
  "key3": "5c3mYgLpUq419eMyn7K9E6qfV47R3o9ALFNQJYShGT7McvgP4FoaTuzWj5uE5ppThzhrb7gs6wbJPEWAv2d5g7wP",
  "key4": "4J2k7txGwqhFjDtW3mmCT3NstUeQWJmvS1pWt7QXupFTF18XUHCoPQk3iDHJFd5tiWaeNMAPqcQiKwnPEwhcUMGh",
  "key5": "2nWz1RCdfx4avR8KkVNnm6qfCezWuNJRJRjngYKSyEYmvwVS3QRNmC1vhkW8q1Aod3umigrpSxFPK7AgFzLBx6VD",
  "key6": "dJF7nHYFpXYKVetPKdeLrVibmkiuR7kK6JG4baCu2tUzfjrVQDFao4TnWqmWTd3Ap1inTEX2iSfVAa91Z1HnCvC",
  "key7": "3Dy8XfryHAsuxg3HET7eyzbdC2bQBV8LeVBpF9SDHeV61enSvk453MeJNkJFwx24aPqAaU52soDTj6x1w9kbRxzM",
  "key8": "228WFTGSLimXWuz3njH4eu6vKzvzVSTYVgFZP2kUxJEPtSqkxmuGU2xNBc2Zg8iv2wYxUY7F2MABzWA3UPY7zSGR",
  "key9": "2JN5v8EoYeNumisz71Ba4ux6SdqbYcofVmKNAwEvfyZDYAmWRZGiuBocL8TtZahQKwjiZ5LXPx7sqUdsr3ArYh1Q",
  "key10": "4wEX94vXT6squhaXSz82XfmenfTiN24KskBWADcsnvCkqSMbebm5w6Tig5PZd9SvLaMUGGu3wNnqHcJLorcGvXR9",
  "key11": "3TeR5FoKaffa2oZqriK6UwXfpmvoicRhXqeJE1tB6U84qQVcwLoniRUp4qBd2RwgfKzn2CtqV48fZQcLiSpTHRWM",
  "key12": "2Y5cbTCemiS9w8iMF5uWesAfALyRqckzbZabq8vYB7oF1hd1R1C6i7wz7cBP83boNY7rSAUKnnKEv8jL3MoHHCKp",
  "key13": "2mf5yFQYQnp9wtLVQwjUBd44kxiEhkbaGxcZvirCvfCLFBK1DjfLS4rseTcMwXoFuzriMMpiGyiBN6Zwj4GCzzQk",
  "key14": "55BoGs9s1B8gsLULzwtkGYETYjiH9t9QnRJtipo7vTnFsAS6nUBPbLLAYRDhCbdyYBJTy26WQo9cNXJ8iKZsc5ix",
  "key15": "5fpAThwCXE7Ewxqdkq7oZHNDSoMemL5CPj5c5XRKwF9mNJ8yjQAKWPtyVmozRC74tzVBakL29rf65UyKm77n4tBU",
  "key16": "28LkP5xKqhjQmF6wab2HS33RMhxEH958uWNcVREEaNqmdPxC3ZbrFYxgdR77sPGByvcca1eB3DPP84pwXt4kHbYd",
  "key17": "49mK4SjVnh5WwkHrkxjW7D48g8gajdzxiD4SmjWkaYxXSHBt4oCQEqhdcHNpYM9oQGx62Zo54C57VpC9rxXqEG7c",
  "key18": "62dUGmhAJnPKyNP39t4vrPUQ43SUW9Mt6893YUERDhzbQDWbNHKa5d6jCkNUpHVJAtAxJQ27Ry2YpWVkya8GUY4",
  "key19": "3HMTvJctJARFb9WwzCNzDfjkJyCKmzAfKrX5DbZ6ySJyGMX39Av2iG8NXtzmCuJfxYnVQa81Do9o4UdpcaGC3Ws9",
  "key20": "2KSoHhg57UrJnyX12ziX1Utu1uiADCVV2y94T1t9vgkDpEV5Qps6wP9ygEL2KcqqcvJ5LyrzvAjoSreoyrfVDrg3",
  "key21": "x6YACEn8JVYLo6UQ6zjmZdcokzWZMjMmuifBjgCigdKmCyFU3C5NfAj9pAkMwzWXSzyxdaYD9JW2dz8DAVnMhoG",
  "key22": "38xcZ3pNWVtfJ6aqsqGv36D6iysEjVZYxcRcdGQXtvV5gzAq4C7HN3wM1APSxkSFELRJQwHf3ia9E31TkfkWTXZE",
  "key23": "2hJHc89ycCY1Z1uwi8nnGDRfhEUMdTppJYofuF7FeuhZcRWW2YKYx7uAQ6pYXSwsgZ4hF8p29uffHHRn94qN34f",
  "key24": "4nJADWFdHGsYEYqptoX4Bn4z2YK63s3dL3HurUpwUYk9RXQF6jDYsfDSzyhABmwGnRaH1wpgwLFLkWcv2xpJMLUo",
  "key25": "3hieXCM7694C1ZRvkkLgmYYkPd7eBCriz2GFZLiVupGv9vaJqA1cNzTvmg1kZaaYcdBos2mo5LLjyChkDhkvdVqy",
  "key26": "4F2N4u5HMEqodkcAW59FGzQg9W7L6C1JSNEL49Ve9mYyhVzqsKosUdbPmnjc9AJJ1BgsxpjV8vbTNtaKYmyzdgPM",
  "key27": "o8PbtmmYRnrBgW3JPcgF15Ctx1C9WLFVb16n4JuR4gqqbBC753DDagrR6rEir2b3p2gVmTykZmAUkCCkaSyKhhd"
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
