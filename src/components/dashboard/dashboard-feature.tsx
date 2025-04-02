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
    "TqXGMHwxo9ifB7wHzfudtTgnP1J4EDesuRc9D5ABkQnRTY4LuKeZazC7FQjd15bQEDYSGdah1Xym7dv41vphVrV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WT1WLa9GANSojtz1QfJSpMBEoFKubZbjQC9u24oWcA1mFoFmZLwfwtw9HNafBvwqvrTJrbnABu1qPuKucTPLSoZ",
  "key1": "3iwtmagKFZo1FgQcys51FLm4Ai9Xt9Ek3JRjMdYLZrg5RboJhQAt3s9tbKA2mFMsSYeJSZyjmaEPMTsL58e54mJc",
  "key2": "1VNMhzseHA72krrWY3KYGRkjEKixa5Bn68EpGfQYFtKzbjTzWSxZSrkNcC6PDyhiyDfGbKWaJ2XB66jR9nxse4v",
  "key3": "VSrxGMJ6v6wJLGBRGgiw4rRx3CMg46D2dpFjkQ5s5gNXR1P1ev6DHRhgbpEQvyVMYMjLh6yasvDGeDby9hjsgit",
  "key4": "4cRpDYg61uVn3WXVfiE1wLZayEd5eiYoyEVVssPQkDhaWaXAcmdGDvoUFg198rEUD35UnitzvjsoCrLAsjE8US7s",
  "key5": "5t77cqhH7opv3pqQiTrY85T4pEho3WRbedCPQ9riGRmF3YtJqjguzWkHPJxpy27E7PSrdeqKCuw1HLAfaiNv894u",
  "key6": "2f6X3v29bgbcBguaLijYbpM8LmjiYuS4VQWxtdedJjwAu8J6YPESEF8FjTwUpJD4M3d8UMyiSSqSmyV4Z2dgQnJT",
  "key7": "2UDTvNWFPVVCKJ5Xu4DsQi9bH3rJ4Dv3d3o1jcHGjJyQD6Suy98r7rSzCJyrxL2mWej3c7PFzRST6xnhJQbBpTLs",
  "key8": "44nNAXcjgyUYukTxuUiwC2QiLmw5KpjbG6wtye6Y4UHx4iWz69S8Y3ApAu88jHMFLCoj41i5yTYdm5pH6xrXacnh",
  "key9": "5XZZXZgU3TS82JPLKzW18Z7KkmSPyrguuXwpx3dBZGgcqFonfYdt23fHmpnsbeZ4jK46SLJ2nwCqPTxYgSVUXSRG",
  "key10": "4E1ENjiZJFdBG7zaPW5PiyWSBNn9XB75AGPQNU5TAxrYNwoyCqQX5xf2zBBTrxAxSBkeE7WsvzmtiF3hAUZKXQh",
  "key11": "25oaNP8FCciFUNzugpHkvH7fq1ijXi2r8MwMmbqAAoULeWxW1nGB6sqCe7jG44gH8SLVmZ958UjMcC6p88o6ouoy",
  "key12": "5utk8sBMxU8dKy6xS847TrhrBgTBw2djtGuhKr8dY2GdFjsaV57pfWktyoJaM7bcKwne2Z26dtt7LiLK27mqwr8A",
  "key13": "23JAYopQ5cKFWyveghU3gx264sFofrf4Ec9ifT1rBAg7jCx6FhxZ9CucwF26VKL2ampHymCVygVr2j41PUpGZ3ZE",
  "key14": "4SBtFnXJ5hAk52aR57rcsqwzHFxezUUYHNsu3H7HJZSRcS2d1o3qvhjvCUjJ5RDRt29FJX2NT6kDi4Zmdn2Qkbc2",
  "key15": "3vVbJuB49yi8DCx4LnNppzhaMGAe4rKbX7VjrsYkjFKydacfLBNZ4tEs7sY5gLKHk9145swVJrExUZZZiiXw6JDx",
  "key16": "3EpRKfnRRe7nLfd12edqLqkojaQEVLQbhpyXv5teRoRD3Zp3yw2qh7A72fTMfoUgdrH9nYDwnY8mE1hdQdBMNg5u",
  "key17": "3DuL9Sy8GRHQmpMGrvSNUo75b3eoxgk7nBfZuQBaxUG4noxcihUjLzb6kiKV35Mm3cdSUkMjWyv1SYAseHgdn96R",
  "key18": "47toeztYV6bgxtVhy4MVNoq9Rtxa5anCdqrMJEfTSbz9C4LeiWX7tmF1xeuGMLxSHdunX6Ro6BnCCXb1TPEVN7c5",
  "key19": "b53xXApuXeG8iVVcD6EVWKpbarkHeQV2bFF8oD5REkF36ecqMdMAdJ59GGENzafpwdZiVifdhB2A6MNgx8zJkAH",
  "key20": "Akxombuk2mSeJtLh2uxJhzt9ngeXA3fQCcwkqRJ7oSpQV6VUbMZroWpzXNrTu7DG9ZoMb5seW5GsJShmRBur6ej",
  "key21": "4ynsU4orZhPcbcUMjERtfRB4D7BPcWCfMA8pNfNQKnP6Hpzwdk2ucZTGCnRZiedaDy4BcmXhZmkUwQeVB5SN8D9N",
  "key22": "27pwY5Af7xGSygTjYV3QwwfJz3zTY2co7WpBno7h5jRHXdBp4vKb324t55tARf7XrdTG4h6MtgTmyuZQJtephfmP",
  "key23": "vVXd2zTM36sowDN3RvHt9hB3RPCYvPmV398zT57srsnmMRD6WC4a8Puirxod94Jp3HBxszrRFLHNG6UUaE6ek4e",
  "key24": "2uEPJTcV5ahohtpqcATbwXyu73wgEjPaJ1zYA7chGtKXgwsh1VKbw8wqfsDPPyEM6gbNZqYsm45xyrTA3aXCjPMt",
  "key25": "3cVjdpnHUaipxz6zWLD8citRUcpynVHdMwoNNyHx3BSbQHtVJoc8TjYjWMFScEibzLbyNsye3CdJybLxWXR2JPtv",
  "key26": "2mQPp6q4sBkDSNkkvmRRLR7zDEKkbDJEWsFUf4GmZ2uM89JqHRx9wy3NXV6rqw7EGYYphfhZEdsEyMYceRnCPPgE",
  "key27": "4WhMqVSor4h77TSj4hTEwbo3HqwrM2EbRaZwx2jMczxcHakPxjdistDznCND9YarjbVmGb4iAWyzt3BvJxLfw3ww"
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
