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
    "5XfKwfy5NV54GGbjkyEV9V5UQ4hL1TT8DHNYjqZA6gto6AwQHxqUQYfKATiWgw8iCLT2qc3niiXzTZZ1bjKrtaKo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WUjFF6B5pDRxVS1AyTDZaYSP1jw9zhvMiwQpWJyiMKLq1uccie7ewq4qRY9goix4B6UXGXhrCry4ZQGtwp55hCr",
  "key1": "36cmxALtVyySDsAtPxY1FZwTRYaVSPfU7A7YR2RAq2tHsa9eLTPmXVwo2ki4uahyr6MFDxQiPYnJUzwrr34nnq6Q",
  "key2": "4iV7w1sYGbqkCQmcxyt2ZqwyBhmAAYfd1p4LtfqJFhBQVQSzwGGpWVdbEJnX8qZ6zuJKvuM89JVe15Bcprp16Dfw",
  "key3": "U2FJyzLfuAap9tMC1CB4y53j8tgoC7F7AUH3RCoNxXjDG7AYdxkE1F2yzs3MS9Vcz5qCAPrfmmpbnPx3jHhkiD4",
  "key4": "5aCvQnE57sd5EXfkqKzskX41GJKiNo6Dy2qqdkfTb3RKaqrcooZyxUzvRg8sDDwgNb4WGnosveem4eQnZvbQEu5Y",
  "key5": "3oKNknoX8ic8vSEyBCH8sKUimXD8nchXMiFQUdBFYWvtMHqqNqYMc397iyVpx3Ze418fjrnKrYpJHZHE3N7knyqi",
  "key6": "51UPyuZHaYdx2pAFuNozQ1ev26qvEJcWTtf2ogVgXtv3dqymwQQz27FsP5xseyxVMrw73jTtjwr5kehGu3ChJzpc",
  "key7": "5v4roMCzp5CBCibravSfK2dY7x7frC7NPznY4FFAcPdUUedwhUBWP274KHN83bAL9XQVpbyzoVMJtw6oTH2B53GA",
  "key8": "UTG7xL698g22UhAdNix6SrqfTnaYXUuN3gGze5C2WftoqJDQshBmVVCdkoWGiMrGyUGSxgB3ZgitBAAjWRkdw2k",
  "key9": "2UA5xxiNMb3HoLUkw9EtDWmuYoL7qEjpcQGdDsSjf5KopdeQ2gj76fPhphCRWE9fpoxVm7iqjHF7iVx4MDmLW6Z8",
  "key10": "2z39oC3RmHxX67gqFd9cNzj2o4vBBGDoM2osj5Td27bVEDepYziH1AVV7eTLGV82h47usma6oFvSJGShRNqWfPsK",
  "key11": "5g21ogRhgNhSsmpkEGL76Ng6yd5tPUYNRMSq6HaipyfinQ5acpGbU191r5wHwPMHUymE16QkZPnVzAuj7Qkmdteo",
  "key12": "XzjVwYtuTGVs8ypjisQRBF7711J9XBNjEQuYk4AJ8UZ5WbDgMsUM1WqFHMueSXSs83J1N6ga296fibZVjDzu89e",
  "key13": "4Pmna7sNntXSiy6P4K8xmftenukZPekFQpYLSV5AksbG2RQUxDJ2pf9yWuihy4xmpVSEvWZqMCC4WSiAsBwHva8L",
  "key14": "5f92c6RyPBMLfWDKztKb3gSASWtSeNahuCdNyYTnm1dT7fGCUkoG8cxDC5d6ZcyoDEamCniSbfYzShyr5MdNZZSp",
  "key15": "5cY7mfseshZqRoCFWsDtMeR2b41P4aJP7SjqEAuYiSMWducqeingH8LFct9VzARurBy2CKYazVm9Be7QwEbeSbCc",
  "key16": "Q4qcXR2Apsi5BHDR2X2iYf4EtxYChpqwSaPS3PGzCRV5DXkEYzE9df8hAiAxoGwxXc2fUyMCii1UTF1mQpwQrcc",
  "key17": "4uWh5MjZeVPfDs2DfSacpQYXP3a7iww1QhHJdXQCdasniDbFdD55dmAJ8ZBpRVdS25Y5JWd8Beah48Ttg2PADSnd",
  "key18": "4yn7oFTxuTTYKiELwyxYQNFpYYry1P4BfnrhbN9QyUATiJXX7GbdbrE6DN7PpKE1PWWg6Co1ErgPDR1ZUVkep2xk",
  "key19": "4AyiNuZ4r662iNhm6uD5VhZuxPtao6ruZALzy62RvsnYP5YQQba7z2WqPCwrV9v87vQJJYBf3Kv16Aztn6d1ayxD",
  "key20": "D6t6tLNEBPLnpJzKX9GNKDU1BrX3qcqBrdMEozsyKSkZKzNq85L8e8L6DNJjmZKgBDXyBZyjy5Uzs1u2kWGj1eq",
  "key21": "4VihGuhuyuERs8yWAN94awXjASPAgRNcWZ1WDSH3pRG2qkkvtmVycKswQrgbjZVCxuFpbuBiu7eGsme5bfzJKcJ",
  "key22": "UBE8gd8kciG4z9wRsni5qXTwrS4kEeTAEc3Mg7e1SMCQVHRgyLzH1RVwWycar6rkiqgeqiQ31b9ZujR3SqfdY3v",
  "key23": "KjqaS3YShkbQ3rU9TCS2X5tBMPkU9VAj7rP47uEfo2heexkSEvBFxgY5LJwRtVeJ4jfy6SYzbboJQ2RwK24SLk7",
  "key24": "5sGzPrDutBRjZBP2QhN1ei7kPm1xGTn4camVtSaYtkdjj4k1hEtwGzxJy7Zf2HChkYPECq4TUVbFwyPPRYLAgGh",
  "key25": "5vEXqE4pgurCnvEt6HWFg4idQhWY8ooXJZpffyd3cY2hELWRs3Zy4hJV8GbeqdYdLKSgJeWkXh7XryKVnq5NA1k3",
  "key26": "2fC1BjdpjFFePpVbz8z4m1H5GcHhgdmiCgLPGcacqNE4zL6Y8gxtstLdEVbQUJZmM2mVxewo2SH9bRETxaMCzL3i",
  "key27": "3D5KpJEtwZV1J1pwyT1ZmpiiuHUrmWeym5qDEAvsFoeSsrgz1P9Hwp85VJkBDo7mAXBjS9JJP3Ur9tFKogDcoFF4",
  "key28": "3grMvwwL1AAp8LitZvVh6cx49Ps1hgY6KeNb9h1ytfxb3ThUNAP5fHTLyooN5G4vC6TNrAZPXCJXYW77gxLo2Kdz",
  "key29": "4M956hJxZUrgMsdvcwHgJfgyXZ8uhgWVeafXGPq5F9CwFeDnJZt6D9sXb2i9V41kGEU9JyCuwxW1fveD5XfW4qJY",
  "key30": "2zAdbMsFqMSxHYpv1m3odVJhcMJJdAR71EDQcBuUgx2TdubqQqAxftnq9BtbWPmdJGSHnUyMAYEE3suUDSYsf3Kb",
  "key31": "3zE2TikgfYRjeMADNwMqYmzai9TKZu5HLf48XYxbNDEK23D7QdvJDA32dshPc9TDu4PWsVTpx29AvNXXwHV1w6fD",
  "key32": "2i1d23b7g6jPwSjiwGGDMe7y86gXeWKdN5YPdewuF5PDzATBPMtnvPp4n8xUPMsMW31qXMJNKZPb7VTXqWHk4UoA",
  "key33": "5kBCEd9EeWntDRYAwUdp74d9jLkajXbjaUhsxZnXQKp6BMemNmFNxjYX4KQY1gyrGbCfsHp31ffS39tKVskgQfX9",
  "key34": "ooQzErrPsCq76uXWL5EbH19bEaFFRW3PxJZPGjuDUgpkvx9eH2FPncUGLq9CaM2MeTZqeSq8ix4f7x5JMktH1su",
  "key35": "4Gvk6j6bnYdE1bEci551GWyf7GhRr5hYqCTfiYGF85uZ8yRe69ihqB64NA8quaD7qLEwaPevob9TRZUT7xrAubqR",
  "key36": "4KYQooVonKbMNrwFu6z9k59TCpLgo2BDSXM69J4U5an2aYPQP2NHnLa988NE78zBAcXwnDr6KumUT5NZfTLAX2rw",
  "key37": "vkNzR4mBVVYUFdspQ3BRo8TYnyCyeD21U8fyhhcZfHrDfYshYhGKP5U6gBPHx15925noRvrzd5WuHTRqGeYtQaP",
  "key38": "64cWZWHUGqKFX7rf1RiqesQ2zz6Kwkg7PtZU3zWgguU1j3skBJsfk2xrwMJymng5PK9W24Vr6tfx6MS41bCwNbYe",
  "key39": "3LdbuJjRuyZ9gn41a7xHHtFtnEqHYuWUDU7rZtHt3Et6MLDV6XQVLvSDmkdZS2ZZ2aFeghfbkaJBuK2WnxLMc2Fn",
  "key40": "48G5EMh5MEJ3qsT9FAMkqNjqFRgfhHjMBf3ywcCKDAm2D1GgHKJJmzTPEbztQY9ddcE9QLd6zaCUkTf72u28sqyo",
  "key41": "4b9WPashNHEVqM2QdVmBcGW2ZHgLBUHSkUqD3sHNdpzW4VJKf3JCT2NVtgxxtdLFZUCuLG6UXatqTTMTV92H5uAQ",
  "key42": "5SW4B5v53LFQJyegLrevHTjzC3kjEDxi2kCMQqrFsBKeT3XN1aJdakfnQDsRmqwuYd5MbVzQ2DzsdbCFXxbtrt7y",
  "key43": "5cxHo6VGLDPhPNCG6cu9JzaWjTkee1cfvYWeJns1swgzPWQTfNnsrbTxpDpNj2VqcXSsMorcn2cEoKGvb8vpWWuM",
  "key44": "2ajb6f2eWs2WqBLQJut3x6BHq3PE6x8GXHTwS8pyt1HHhVUE7fgMgktNP3CX4HDtaoHKdGySgPuvPo1jdQwvvo3K",
  "key45": "2k39c6vZ2smWTUYQydTq8qfV3jbHYUmp2wad37WXmuePYPhsaneSd8G4uMuQM4tneoyv7r3hehia1iBmbcUUjarc"
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
