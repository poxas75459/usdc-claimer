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
    "HGWhQZLR6aJoRJn7SGMvPxKmVBTB57JwwES4NJYmztQPk3EJgVRRh7X24jnkcVZgQ62k8BsMipzKue9HgFJR39j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dqmTccDhD5WgK5Xn8DQGaTf3UXtf3c9BFfwCVy3RR8ja5PSTHKa2F7kF3hBojW7eNGX2EW87MxVBkVFNPrHVw2h",
  "key1": "2exdv2WWFLZmGNC2TQXs7VLsiayAGeeuHmMtxMwk834r7wj4H4wMJkPLf9XF1pKBuu7fLMMqAYuroGCGEAc4qWqA",
  "key2": "ddDDvGqYLwsqeSzYUf18icuPi2iWys99PwJ3vMaYkJEFacNhkNzmRRYfxDLvdQiG6K7oKDpzTSa4tBP5sCJiYti",
  "key3": "4vZa6mWDbLyEbqWetj8CDADgAmuHGXTDHd3CjBwDYSXsD3JWjrRpe6McFkqrnFoHKWE2z5fstJwWsnAJscWaCHPD",
  "key4": "VoZu5Ly9nHHAJM7mmu15s96wjK9dnBRJ2aangfwaFJo3bun5oyum87CPrjD7C4Lh42UPyCHenEG63jh2goAsQp1",
  "key5": "54DWFGpdES2SwjaRtuMHE4A7eN1oFnHAGLaRQiSqNzWRSxA5fWohiGgZ1RWzEmpVAoM1nRmYwBqRJopayhPjEdF5",
  "key6": "2FYap6rLQrsxtvCMWomTSEwEyCagauNjKDL7oQNPt4F4rUWfsCDYx2A6E2YF1NY2vkzUGBqwEXxuQxrDyuX8m9to",
  "key7": "5gWksGWdWRHJqsMi4VUpJafhvaPPLkDrMFpFScmTzWffqKNDHJMHwKzToCMFuyeaPH2vCCrhmDPs3bP6ddSf6hkB",
  "key8": "2FxL8UQFvzv81eEymvF7wToneBNW4yWFqfYDQ85zWXbyeSdSXyAXe1wm3on5N2fnbRtQN7Rsq1EtGJoXLQ63fen4",
  "key9": "3zBobnb56kZpTPrhKUd4ozxDKVHcL5Goi2Nmo22QAXhfs3ou5XiW6jepN3MzTaCEmkZq7GBaEFj8HoLcdxkge5y6",
  "key10": "3JuTeSHPC81nSf7J3oYHdHeuNWSWnEcvFnYCg8gVjnTiucgVYcXW8GQHQ18CmngiFyC6vwRqZiopgM3Uoq1ZVYf2",
  "key11": "3chJ5uxZ9RVJHHajSWTjwipHWVzkGW2Bcxm58uNoNstpCHX6As8YiDnNFDCEqoyfrNarfpSWvy4e9omrkAYy4euN",
  "key12": "5q8BasXQTjBmDuhqFKbPLZMmKd2V66VcZ7zmXJkA93B86xUt7k7QgTSTBUfE4Co8sogx221BSZnPgWzqhYJ88q4z",
  "key13": "5UpnWXW5rdqHndRZ3uRyweNse4JP2SX3RBtdQUtuqFfozaRyeJh3V8nEgEmmWtTXP2Qa6hZoMfkEWGNDkTFwZ13i",
  "key14": "3T6GbSZsapGjK5qToSVJSLpE5mL2DfVVFWiypZXypcLGWaz9QxNVq9ZRpjooLcQLMUFfuGqiKAXEWL4vcMhqYyY6",
  "key15": "4aQu2aYRSDkYDUEUwonZBjjUYipRrovku538odcd9T4mYqfve8nmbGuZD6ahgJxDEmCMfajW3GiFqXmh5XHfSu7Z",
  "key16": "ac6E5g7JKG4GBhDc2d7ZgeLCCUb3LeUKBsNKX1ABpAsVqVfKWyNVLzZDZpo25qXjS4yeK7aWUQtypoYRoY4Uc2K",
  "key17": "5TEM7URUarA55NGtGCjSFRDGYxe8SWWK4dDKuSqDbaVaMANxPxhWZpoZLvBttwPadRGpWJ73HpftFFeb1fCTo2GB",
  "key18": "4L5UCDcP1GaEFdsfVTeE5Wwd7k3ofXBS5svTFuy1HYtDxHRC3qgqoff2SeCcxgHy3DmuRBwGbkJLdxubXPX8e6yk",
  "key19": "2Lo4SiJPUS5Atsvr93xCztBwicxndSZfqvGQADqMb46yLhzMFwjqMTBGHxvcoGmukEysvMTHdt1csKZJFCGJGyVi",
  "key20": "28zg23Zd5PZoxM9tmPMUHoC5AFuUcb7VnWiaf5KiYHo8njhLUJfstfPmZmSUE3cvUUzoPAdDZSDLEMAAPu4EgBvc",
  "key21": "5vfE1VVDsN6FoauxmMTAaiFRe65EDnPyd9VCKit2QxetTAvceSDgwsKbEqxV34AxacziQL2XjWm3Skii85WJnt2v",
  "key22": "4f2sXmaPwzyyHRYRLmAB1UQB3wQEfCUPibpvznY88r6Bpq4rQ3YzadshpfZEn6oabqijZymifTTdhAbhwsnmxiMn",
  "key23": "4r5fZPMUPNnRPFLhmyv1oQoEgaFSVEw6jJYFAbAxvwdkhYWfeZkNC2GNum1wbFg5XjjC9V6DxawzfTvDjPLc5dzs",
  "key24": "5q5TVV8EEdXMBvbiat1hsP5pchR68QcZ6xap129xD3MD1ae6WV1itm7raR2AaB2TCz8UHFVb4AzCsA3mbvmQG85Q",
  "key25": "57Nhzx8GoYMVem8bjL8Vq7NJxqjyyAvZMigThE8uAR4LhYUfwFzEzeLSe9b2ZvAREv3CAGtH5fawM4TUtNDExshp",
  "key26": "3guEsWLKNTEBHJbPs2jnVYnvEW2m7a1W1iC6Q9J8rzVU6TUNjKwYqRyDTzB8iicoe4rXQvXCAjp36w7LfLiwNMhQ",
  "key27": "64NG4xZQXhnTvDn22wiZUcz7BXXGzPP6Rq88Z12U1ctbxBAYDRdG9S1LUJJeauKtLTbpRoQeSrL2ZsvLJVgAgs5u",
  "key28": "3WndUqRhKUXdjp7ZCgwZuPnpt7eZC1skC8Z7LYfeeVok8E7uz8NqGiyku9Qq6zKhKq3VbSqoiP3jdMy3aiZEdsWW",
  "key29": "DPGrMkRdN9nGGLnE6MpTqPwFT7JziguDX8bA2VQ5vsrGKyjUP38zY8CoqYWDkpuk915mmdL4guwZ1aMw4Fae6Ys",
  "key30": "58KwQgjfcuHH1txCuZvMu9Rrt6jj8Kg97eV51GReHToqR67c4gxhtCBoG7oaiZRKLukaCt56z9fzsmVEUgWarNJx",
  "key31": "3ThgU7VQz9PcKUFtSTJTNYSxbePgi9fuxARBRSmCXN6LYvhogKQRx2s71bQbJXiaAMEvAF4D2SUezqSLX3BPMhp6",
  "key32": "5t8pxAzgqGpxj19K47BhKMVWYMzfbKYApA6Qde1yv4HKdDoKcCEeZVDTajYpurfHnMA6cm9PAzGsdvMLnh9mNruj",
  "key33": "5q6YCthk6ykXh71MnTHqhH1bdAyqwhqL3pzr24AD5uQjGXQexMuHDBxLV99vMeWw1xop2cSVPxrvco2atxLME1D6",
  "key34": "5oMMjNTUt9w7eX37psfGho3DdXaKWRnYPJeLgdRA1MryEALTYsxU3tNF56ksLttrzk63SrbtMfnc3Ct5GHA8CZPf",
  "key35": "3invfxjjsBgTUGk552fiEC56UMWCjf8JPupxZ2vnVznNoLM9ipX1N4W8jHU1ysPiSLcxQTyTp5UdB9twgBFPh7hd"
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
