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
    "2bpA5D4H1ZzJNkWtAHhtF5bzJGb2EGcFYhfRv3qdbi8edL8xohas2AqztTrjfRnipuSVuA12msE4GFJgxw4HpiMA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NpgkL43pJhU5qpwm5w26QSRRyrk9yyiKa2gTxfzMxEciBrTfpQxKqff12GkPKnH7umvVFcwLaFgqmb1Apfdnmxi",
  "key1": "2W1ZTuYrtLRYxYbhi2dFhqs9KZTHYzLNPCAar5L7oBNSGVJNhyE9HWcAmUTfRUtSDbNT7FRdCRgRRqMfi6e1iqyd",
  "key2": "59iqfQyib4dQkqUDqaQPvk6KEqWdUdVuFySEj2coMHRpBXo5Sin2Fez4jKzqNhFvhJebxa5o1oSWfxv6A9mxeyKJ",
  "key3": "4XwJsNXt6Zy4vmGN2ntvgKdoxWVfwpPD8qRBNKFDV2ryEeyDnzSAt3WDgvPV8mvk68bvnGK1VzUB3bNPe69gbwJp",
  "key4": "4RpbfXiXLDrXmJShuZhhEYPBrhQWCvgDX3LbdjCj34wadyuNtyzyRJfGYUFjvyBB2kiYP3JyMncxDHmFBGyJkBNg",
  "key5": "29JJNQmGRcniDgWcbaSJXCQqhvBzJomBTbRHtrJv8tyrvgf2mDdGK1E4Tt9pHR2YCTLCdpNwZmSxciG1y5AK76xR",
  "key6": "mmosoAF6ZqNAMBQXukADLKPcbJ4ZxAXDYpZRjU6aGn5WZrEy9s9PzNvsfAotn2JMZyeZerzTfr3UQeqV75vc4mG",
  "key7": "2hVM7uv484aVCTXz8YJFDvvS2pivXJAjaG2PZu1t5A83XWGAau4Tnr7fHCkB8Uqo1abHKKDontcpopEg8EmsSfsd",
  "key8": "5SwiRnGUBkSMbaTs3at6qnWk1Asb2fi8f2EhNt7eRzVYwaHiQFvu3tqqqbrUeLXjm679gRiEyZr4fw8Ck5LmacqY",
  "key9": "3gUJJpyUMqXXC2mPJAqBBDyt7XdmstXWBKZR6zxQYH7fLLSjighvy7rFgBBFLDeKtAxfEpdAjJQpGQ7WuurBHKvT",
  "key10": "3XHEAEtbj5ievitkAM3mpp23t8LtgQHDtQeuYabUrtnE6XJYyC7ewLwoDwAmLc14qSTN5C5dqZBj79uYmKxQoiat",
  "key11": "3s9rGeMeK5iQZXghH9cSptUh8JkD1yQLAvD1PR835fpptKinCYT2Y81XtCDcQ5JT8tDUnyxNM3eWkeeg34jem4AP",
  "key12": "62SeaLmbn2WyhikzhZcavztgwUqekARpTo4bCwxBAso9gPHpEDcXDPkVQ77VgyaLJz7dSdCJxxGE6htBKs98xBe5",
  "key13": "58zh9b4fu4N6s8KgK6fx3BaWEVmSco8Ni33grUokejLhq3eAs7qBDFTJcguimhd59ToxX6RpwKqJ7EUStmvG4eym",
  "key14": "46SxuNHCzBzdJhyjjurETSaXy4vRTtd674cMfELd1iwobPXQ2SBcCg4fCr8DHpEWoZwNz4SVFq5znhr3cAFDzGjL",
  "key15": "5f9uyCppwJEaudoX3HyyFhZM8Raf95AuJXNgd6M5aFs6m4nrtBZFr2WJa352dGhwcjfyRfw6Rhb5BYB7Qc4hbPZV",
  "key16": "3ERZb1A9cnzg7RhAfhHewdEgkYjqQ9WLVSgvCpjWAWftAsJeVeJrWKc1f34b997iC5uu392ydSwdzZ3wkpJuKAcp",
  "key17": "2ph6m3EJWvZM6YrMWnRfkA9KXwuVfqwPbhvdaH881uK62n3WURkkzL4LuHDFf5ViUaDbPzKWR9Nb3CSsaZ5yp23u",
  "key18": "5JDPuitEHURneuFRRRyQ21QraA9cfCRRKiAdPq6XnfnenqR3rMJzhjaJTrqtdDtCofU83mPMstofHHGPbFgE39VX",
  "key19": "2CgPAf7BpLmfEzKJ8MGmf2rusc4JEWAKKGwEFTuysN2YMzvTUeJCsL2fzEAkxSp6vz9X24KMUB59BQw3DEQyF7hU",
  "key20": "2qoWcEqZqD41TN2rh7bNJZ3tvVmk14ffiKU4nvq6zzYd16BtQ3sZkCJ1icYh83rynjMsC7wYw27r13mx5KbuR11r",
  "key21": "4jA5eLfDWwxPUQwjLK5t1uS31PCDRsFUW2ddbZj25nW61fSKvLXSAmTAQTsVVyeyjHh1VEytP7tBtF9Z8ULhmqdW",
  "key22": "3f2mGGE1FjeJLGhVoU1oX9vK6bFB3imTp7KrwZwhnte5kHT9v79xshEXHnYvbtci3tVaricxn8q5uKMmMVcxXW5z",
  "key23": "2oi1hoJVZ6nvyKRV65QrGAtpgh8GjDWz44ZRufxupndzruJNfTkUnkhhrTTcSwdUXT9LWrubXqjM3azNhUv1wkAD",
  "key24": "4fGTrjAGqGMiAVBrTPrT9Rz1T7Ax3LpRsUdvwxfexTtBeeMN67XmdGN4XZJnHnyuMrNh8EwVQhjXN1WsQrWAX3nQ",
  "key25": "5eqngfgM3yRBftmBUJY7xCCLSMWcggjmkrn3UTxwYA6F9E4LkNtQEsuvgHwWboNCVB4yGi6h898UKRBedCxh13Wx",
  "key26": "3hdQ5SBCfrp7ADGffjgoF46aCx1TjZeorULEJmKznw5Z7FF8QwDWnbDtqw7TKVVJC66t8sKAhTPCA6nsys1yTXBC",
  "key27": "5p2Z4Wf1vLJccThyE3gy2hJM5xyuBatgQeE8Ko9tFqbD4DRkqQ7b2boSZ1syYcasgzrFGHgMci1RszNDy7h72CE8",
  "key28": "2JQoUJ41eywpB17XDxCiEjRPHXQyFW3WopQ6gNM33kvcdXT12zdVJLuvPZEaFUYshX9dLWqZ4u7DS3cmkXzUWB8u",
  "key29": "2J6sRqUVGzTseFPMcGaHFvD8D1dZQBS9neF9Rt6xHQmy1gGEzE3uKEE7eskx6N1T6kcfMWyvQsTGowfmSrTWTMoT",
  "key30": "41JqVWtuDxskDDfX1YkmJiHbHjrdG7RUhm9qTfATo6RxUoTXUbkDhCdNQZyNYbXFEoyh21EkgPiU16xvNzcmUXRq",
  "key31": "4gRGwudTU6itozHGM2ufKaNsxH7q9xThm1UcLPndAy5Y7BwR6JEVrQqmuGSX2gtVFPnpCU1JqbSLVfCVnGSCtEBM",
  "key32": "2XfAWYy1ATYz3ABkj1JDZFmWXVZ351xArbswMRZK7Tr7Eeq51YFwvpptUzdLefPkHFF9ATC7jEJq3KxAq2ELnZRZ",
  "key33": "4ZnWppf6do26Z8QZUoUuqs18pyNU9PcuEqNUYDJNL4TyEzQigKF8YLK6PF1yyYU5qhb8os2Kj6syPcGfbneGhVec",
  "key34": "3nyw4eAGaKLyEquNBy7gV2MWpFpzaQ8zWEHYJJDfk4pUZtFcTupeq5K174aKFbeoGN72XAh2X4JEVUwjM8UnrFQ6",
  "key35": "5X19MjuAR2o4a7Ftqd93nukCHTyxwjCz3ZDzPW8QkqxRn7rFyo5boxbXZQ4x2U21QY9fihhZeKgv1gKzyUNRFS3x",
  "key36": "5deHKo5L2Qn3H1nL6VYJCHGER7MRzV5qgiAxfVh5aqtaDSAsxDJZUMyhTRKs7VhJvPtT3KJEq2b52WmnXUWosok",
  "key37": "2CAZ7rpzuPtHuNCno19NEHs6Rddd2pGKZnvaiufUkxc1As9TiC4BoTjsxStsSQsbKwCUkMVekAbtDH9w7R2Bit7R",
  "key38": "51jMykuxKzkHKfKAsEuBQgX9QwLMwtDC1fnQPpGieJLmXKdcrm3PyzeoyEsFcb3MzmsmqvLbwdC57VChsgnJuiZc",
  "key39": "27sJTngbvfvhuQtFonMPUfepBQz3h37amW8jFsDyTHXao528W8VvAPzrtC8SjM6LaGTFgsGw92FYzSNtCJ2Kx6WB",
  "key40": "3UiU1oMx9ajqvSagLRhmi7m4ZUb3qnXbhzmUCogYBmWENDkzeJWUyG9zHB21kdNEyrtvquGEinx94ebNzJuTFeA5",
  "key41": "3SzTZLNrnN4b696KGsJSPL5K5oiUyLMpAZh3sCf8E4LWvhTzmhBSzLkfFfUnwue5bjDfuP1FH9Q3EeFK1dn26u5n",
  "key42": "3uyQnA2j97KzL48tbXz4qybtDKiG3gevufknkeTPG45C6jtQuwqVgDCYptwhC5sTpHtc2wQteRij5nmUQDByXUeh"
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
