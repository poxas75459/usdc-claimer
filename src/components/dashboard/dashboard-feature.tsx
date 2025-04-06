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
    "2JH57duSymAqTvuKbtSx5CAwDRv8yhdorFtfPf95msFrzPnPUCAPsf47JTzNn7gTRE2g6DMFSikUhBrca5E5E7R6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AAbpygAGhqHKPyiqeXrhcftHtoJY5kMsGEzxKD26432TSqvXjhNdNNGgzcuLwdAb2S91bmrTkfpLCMs7SJt688p",
  "key1": "Ne5H5s57CT3v47teFEc5ihdrM6eXQivVcJ2TseJZPgXvqGiDfDDyZyfzUrjutnoUKG9DfisMAMGyuCTTRTkFyxh",
  "key2": "4NP6HKGPu4VY4coxQFgoVHRovCVqrkTGc3KrFaMVz1sbB1GKS4wcKA6sVsH9BNsMwpPf37ouxDSrkJfUisuGHUzn",
  "key3": "3rCm71R2uqCpoNLVg42PifFeDi4rrcJvivoPTvChcryyd2Wp8H9CbF4QitWW1KSguieyhHSzXtRYrsoHvB6VzyNK",
  "key4": "5wdESQUSxzLooDo1ZqAGWz9gFDLGPy4bR9ioY3xjjW9g2pi4UBP9bGWU9mxvcY85ZCgkVQijm1apkgwDxVpuqnwK",
  "key5": "2UdsufZUAZcfLjUbTBdS6jkZshQ3QxujgUUnDPUWt9kTcN4M5kRnBg9SfDRGGMCwcXkhH1z8pCUGeDc3AbKXuby1",
  "key6": "Qnp41RVLsvQcpF7yUddQ1LCwyAhvGbt5bqyxScPrhcHabKpKuLRw7rcSwoKykFx3YgJx5xUy3W1aWDSVxvf3xS9",
  "key7": "5iD68Ta3BkXangKHSf4osZzzwjRDdyJsuHRveMYAkirTkPF7Y5LUqRsCYX18zdeMfEdwCLrADAaQs6PjD3LYMHDX",
  "key8": "mFNKMCKv6o2oznnz3p3MxjbA1Z5KQuFNa8Y6RzsgDzwBLt4DjMqsu4y9ew22fGtFTQnhz7d1kA1JzzuzhsMmHRT",
  "key9": "2huDgkbdyjYhv2U2YERzURUzeCsCsquGEtSCnLXzUcexNfEbd1ZetzFHUqCHPaWi9Xz8mngtXFUAQDQw14JLLBHZ",
  "key10": "56x3aenDG9WhnjB3j2DfRKWeBHGU2ErYgc4Fu58fevcQXsBSHN6vfUE1XaJy5GYJWKJiCGN9WVdJuW71yQo9acfF",
  "key11": "22LXpYmZto9YbeKdySeq2E6SMtYKiD1rNGTevsWztBJmVnMnDfhPNzdDZG4LcWMCae7fyeAS1tKCzoLNVnM3doc6",
  "key12": "5FVe1tJ3X581h4KpA5KL5aYypVoxJMasUs2s8kekyzJEpFygADLhi4NyJTpLFMa8TtHVu8NsvVhmSjWyc9GAcPdi",
  "key13": "488v7J6z7fQboHcvQZHpQXFdFoiCA9YbdF5vCRm4RWzHmnvoWXb3aEiXMsLZ1y9Ma3XZ5E2LrV2Vh6R12rbKCBzQ",
  "key14": "5xDS1wgEE9NFk8KrCnBaftYfydJypLKmVdSWEiZRuMQb9DPcwoEgM2ngA9kQiSY4SocRhixRkfSF7NuUgGTQ1u33",
  "key15": "51osyrqkt3oDQWRpzEyDoaXNFXt2wJfeXHm3Yaah6Jx4zDxBVBhwg4QqvvUFUGZJxzm7LmcSA2DKfiybSVcujGbj",
  "key16": "3nrZU2JGJz9D33YBHFWEJAaSUVn7AwhoXuc6E7145KPhZHghFuSVE7oRbeGggyP2FJqcozGF6WZ7KXhauftBahDP",
  "key17": "4Uov7h3ivgNfAr97bydSGp1RwL57SSwzXEMpM8UxMgaFCo5LBytnnzqxH2dGcd71JEURBVTMXfygCQCv2tzJHjev",
  "key18": "2jxowdeEXeFZ7oXzUtNBocwVqZoMV6ERgRTb3L5FvkzNbNphfQppfAN6p8JVASsnZQuVHscf4VPUKNACV9oSFxCo",
  "key19": "3v9ZamQvcYvquGhqtgDnJw2YBQApwKqtKXtWMdHDMir4h8UHt56xwMFrh4S171ipgrjasXMP7FzEbMbJdVr2peqp",
  "key20": "3XdhpMGLLBmMNoLBeeKncMiFM9GR5po1JQHoPMrxSmT7dSZGEL5DCBSpJ1nHbthcX3ZGd6pa2BpKXUVpnnXsBb13",
  "key21": "2p1wjaKdNQuuiX3zgaBGLx3h8xJzQj9Cu2jvca7jMTJWBM1hEeWBBnvkys3cBoKci6r2JsGPJ73MVSQkR9oQ3Zme",
  "key22": "4e5Rz6M2eMJ7ViFyrUhRCB6utNq4Pu9zbFKNqAmJNYNst9Nf3Gjyj2PY1t999cJYAGu5hkxyMkk8kXu7qHN8V1YU",
  "key23": "66FmQqy7qaXn3MZGo5d4rT6JNf8BReoLTmJHb8DxTwMzDLZVbD5W4kJoDqrnkFAs6MkakwsfjUAz4BYprCbRLHjE",
  "key24": "4vPGG9pnKJaW82iJE89enDTxpARB8sRN9bhvGgZzL2aH16EMGJfeo8DtyzvyDHfnXMa7PNAEzTsNq1BmaFESv6vx",
  "key25": "32GEgnCqmYPbYLvXAdRK9tZJAechZ64QCa4bJi63w7MxJ2BkRRPSYDWZyF9WQfeqkWeyiGHheTR4885yYbX1tcuA",
  "key26": "4bicSvnqoMKUEdKNiTuCK2jHvSFqAwprggnPyGL9Q7aEoDvhTWYKWPP3bNP5kjEff1GS1P9geKetuUWFu4qLmmLP",
  "key27": "313C7zcDZ6UTSRSwciL7nwyKaD8kKGjPfHyfSg4PCwLh8GLptf4KWySMa8PEW7vwGiAEkd6Er8wNM67BquBS6VL6",
  "key28": "5HZgavwRbX9vVU5AsxS1wkugxBMB7nhWkE9UcxcMPhi4pxaMSidsPT3gq118vPF7UYw5AQKHx5C4t7TXudW4ZvcT",
  "key29": "U1bJUZmFPFSrJ5xfniXFUFjmtyo4deP3Vv9AUgyvDXt6BzmeT5h6XaCq7S87d283vrGMPMbWuE7QaMQyvwuJKRN",
  "key30": "f56mWi2QgcXhYRULer4Z82dJcWTtNKHxy6qwn9Qkfxs6Py6BG89wUGwD2FBxV3KuT7maKkvmjPH4dj2wCss67J7",
  "key31": "r2BNyubvaPD58yRzzEG8LUrR8Y6A85GTjSAywaFipXW8v9ZdD6AEikKjRqf12anjgEr9Qdh1VUBifXW9WkjhRMw",
  "key32": "4DqzHDDce1x3tCappLBsKxe7zgg63LcsLW8vU8RrpULuCFye1B7Sdctp5stGiRPJkpZiAG9aF37wfxx2vowAu8D5",
  "key33": "2UTsjhUSTRmqN6dh4U8qETfhfq5R9kcqHukMPBM2iDBwpwvnK4c69k13oJzRxH2ViXowxsA9ZyUZf3hd4pjp4SYR",
  "key34": "3GPACXYcZriB3qKa77ut1faMPvB7cFbwB7Hrz4BDzVaB6Hkowurkm7sdmT4ozDXBdEd4ChizkhTDajA8Rb61idAC",
  "key35": "54oTQJBMkx1PkEttMMyTXFY4AbLZwXYaTEdwhAN9ijETwsj4kU3TQDfybjmP7phv2eYtdT7cCEG1BVNLAb17pRDT",
  "key36": "4DhVYNqMHcQRtZkBECXahxgQEg8sLJEN3mFy9bBy3xp3jhebobutSqHYKjiuK4mt1Kj9z4LwxGJFadCKSuVPATtE",
  "key37": "25fxmqeWmR3ZQstTieQ5pmTRVY2ZBDmmWAim2es9m3yNtkDqtd6yT4PZ2wB7wwdDde3vXcZ96kxcaaKDrZ6LurTf",
  "key38": "3DfUxsswZ2GsYb5RsPVsGw3izSvt8XTVVMx8dxkpSRE7fcSAuRaSqXc7Hk8myjGJSGomNFkpdFUi8DrsYSSYgNye",
  "key39": "5sMe8YkJNJUhat4MEgkyUx8Bgfx2JwN4fVW53kZyeny12V12wnszHtz1yhtYXXfk9ww34iHoxus7RW8epVMdVqqT",
  "key40": "26vJjU2mxX69UXThi9xK3Q7R5JdPoZbynMHtCQWnwCw4tubktXcz1F5ZtvfVxsyWnPWEGiJzEk1ahoU4wdcm3wDD",
  "key41": "jPNMmFYqxhbuQR9E3je9NS5UzXhNkQoKEbDp7QMRaTahokrgRzopNaBGE8MMNRVzcDvnJLnPykv4DZBkyUAQ8ha",
  "key42": "p5PTmVwNLRnp1Xag2N6KDVeefemo67dFpv8qhHy4HJtpG93AVgB2vzbL4TeLCqtXdcWZBmUGopATiysJ4ssdCN8",
  "key43": "akuVqiuA1AYX5wiNdBWxbSsaMb4KhffARe7qahGe8Ud4uGXQFr7SUxFMA8c42VND68vjV66S7NV8oh8YEyvUfGj"
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
