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
    "2avn9uvvjxR6TBu8AK7HG7FTY6DqCxtG5QRtWis5iFTetLfwW3wVhdTemet6xrHWVuVLrJJrNRce8WHNsPNVKzBj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63Ci8iQ8NfGVEdFvQq4tQBeP6VdvXTtpS4YFiwqq7kcDUXb5SPSoFGfWircrEsAPXzAd3PycUEt7w9LH8qBisKEY",
  "key1": "269MoEucTWuHBTgNmfaUmVcHwYJd1bf7anEKUSCzabbd8MHJ4Hn55bqSduLeTHXqxQoAP4XHcn13qc8YG1HhrsAT",
  "key2": "2rtQ2321St9J1WQihif6eJMv8WeA1sEEjzBzHcUxHwxcFNfhPJDL7ZeBrMnx2PWV2yEX7UkvG1mUHHTb6XNdpGmQ",
  "key3": "2qTXkVLmi3cqKNhMSHFKWgKpHeG1cnjfdHSU25YydGsQvaFwPYs1f61SPcxxUn7pfpGJT7T29gnpv6baFBn66GEd",
  "key4": "4dqT5GKyoqDyEw9XKNoQarPxCWhNYG1irzGCnD8K3tpNyJ6HbRzYSZkv43UFTtQbjJHiqDyHSsc96DmxvLPTJh4Q",
  "key5": "obhc5HfLFh8jPPuy1UpVyqnFgzVd9jdLsxwFpSjX7d9UwF2a82upsrvt57GvGzdL8HgiBGiJWo6KXbv5FXFCc3p",
  "key6": "CuvYUqwSo3Z4Rr8Rj7YCMw1nFWuNHXNuu2ePDueh8t9ayUbckYAkmT7BW2PbRmgRjaticPNxi5TLBdwbZGFuaW4",
  "key7": "bS7JwBpXyHeAhUY93E5fq7qFsPZ1dumnX16CzvctobsrJamXpKFimZTY4HZfEM3YiEVNip7GD7LpL5xo8rcUfwa",
  "key8": "3Ys6Usz6Vh2maKx5dZPtGifDVBkbRwb6kQ89zpFCessSnDAgqup2knGAVarexq6JDJKs7PqtrkN7sBBazkWuhzPU",
  "key9": "5qXM2FN4WJqVMhsbE1uAQb9Ye5BHWii7dZd7DFnmsujkYgPEkkrAEKcy5UgyTW4aZc2aYFdtkTcZPpofXnw4EiZT",
  "key10": "4kyt69uzRowHwVAS3v4738QLrrjE8WUYM4qYJkLf9YgUp7BPBvj6pde7bRJNi4kH73Afo78LTEzGe1EHn5P89M5J",
  "key11": "5SeTeXEsm7a9Drp1s7tF8krUMkpk6UwPencJkGZwB4b4HzMLnDW9768ATxurPuBaa2zQfzERiAzxrwh44ch9j1AJ",
  "key12": "nJXmkC8p4JMfuNs9h6BoaYf3CiGhfAkDEEKZHFDMdncs4WsjB8DiL565snMRmRgGAoSVBvncD98ZEByGgkQKwbi",
  "key13": "5zJBNBsc1qavqDrqQx3y4Ak1GiGH9mXkc3XqjHRbGnn7gYHLUZWz99SRbnZKgJdMBC3PUtqBKsqCYgAGXa7wX6pU",
  "key14": "4y2tLNZHebDq3UVhrsprcUYVQ28V3wGYcrP5paKr9UAE55wm6uv1SZEtzFCUtE9DkEEsnS6qW4c9yRUnTpSZATgn",
  "key15": "4w7suED2w4erDFypyJ3krug37a8wm1XVbyjEawHXmPN3aVnpzVFWeNpUG7eiEcGBaFsr3WPYToKPB3miST9rakim",
  "key16": "4VRZWhQPmQdXineYTLchTLqQ9rbUgepUeHERGeEEaA77UmAXVChSpRifdKB2HesRzzKyaxBYDgcjatJWwz2qHZh4",
  "key17": "5KZ8ubocrNiW1PFujJCKfW3rV2cHkzZXMAHfGsHzbS61zFpQdYXog8E2fnfwwf7Bb3QTzu3MPZRp9hRBDqi81yeA",
  "key18": "oDbGUFZzXhPwr5MifqGEVRU7jK7XvSqCM1j3ZV1imq9s6JwkBHQCgQQQDmGD8pyCVEfjqHjBY4LN7sijjt4Wtjx",
  "key19": "4PULZf8EtiV1ddYzwiUnR4vbiaPp4XbYCRonuGMEpQir11xDRVWP5adzr7YjnLCVdDh4znTgcD1X5DyQyendQTdn",
  "key20": "2gWttpkZajNX9PTP5TBn1GDaFLepJnxc9T3TgocSk83QCuLSeFBd79qvxx6pgAqoedJYobLHin52bfPLimf6ykJw",
  "key21": "4zCHaeQG8YBAkKZmhp8Lhy5HPqYV4Je5diXsfNAdwh57w6pNLeHwt9pzPnph84ayChpuSp9qZW9LeoV92xnAxom2",
  "key22": "2ywYokRM7b325VUnedpXSqjMU6LmSJ4t9uR58JJKyqra342Yvkf4kv7X7KYMkkQ1dgYwW5Nv7TJMFqB2aVBwSTk5",
  "key23": "35WYgVTVPd9RGwxPxbKwj5CYhFwLF5FNBM9uyKFfRPV2aL2VqhW1poAYoe8HkihF94V1st5dtrSqfq9vLS2JurqX",
  "key24": "2uM9a4HnAfYxx7gTYmX3yPP3oXCsB8PPC7Q5yWcH9vnSyuM42rYdt9jMwt98nGgJuYWYmGVLwLu485zNQeH84K76",
  "key25": "3UsUniUXo56DmsMbHoYY5N68qK6aFErYxEVvrjJ4ghQhggrm3hgsvq6NrSu2aMRv65NmzFh2VazYJbjMDQBzUdD",
  "key26": "5cuENRTPYvJUqsyshQC84UAtLFvtJ3PjtVRWupZRPUxcHWdKjNJKGypzWpbtWQpa4PEhLtBEzgy5eZCW9EDDMAXB",
  "key27": "5Q3sqrahLbZAhnDqVippBnrjs1Jhs85m62zfE8ukW2qx6AnjT1UaeVjdfjc3UPH4Zk6re7SdJB386YH7dBsGpcD1",
  "key28": "3qAJhq9FhJFNHv1D199NwmeAWPJsytoxif1cRXgkTjXUtGGctusQsAa7wbtK71oMWEqAsAPppq3L7xmkCfvkjkgN",
  "key29": "2B6ixHpy3gwuztz431w8rYKFQ6G9zKKcQynxVxcRofqk8SEGiwGZGzp8gvBsJoE1wi68zA8bFrEBBmY6NEn13UAm",
  "key30": "5maBDhyhVC6EEpcT2hH79gE3P16KqqasuqoYXr7JYiUtV7VZuHSsweEmpQacbvcTBtNjubSM8f3oR7mdgJ3FFeaR",
  "key31": "4pWQ7taktS35RJrsaHAQzfwCyQmtffdRoyERQgACDPTpwWXPZczr5eM8Z1f4k4CMDgoqBtFVHnv1jz5Pz7Fuo8ue",
  "key32": "33UjChGKw1h8rabXwZmGsY7bf6qqVfuf8JWENH6QwrcB9545gJLTK5SqfSvZ2hy7Hz6Zp66JnuoiN9LasXCHpJVg",
  "key33": "2E222dVzShDYyMuT9ZzTKFxbjpoHirHavLNUiUSL64W5CuGKV1wJNYCMF6hZufrwsGzXogWNasWaf8mFD6gQjJMv",
  "key34": "U1UpvpHRypmmnBosFaar3ghrt6t8dAodvahHngDWtMdMhsRDowbNbVqqPEavGEfmccX8nUkLjKwqgjpgdCqz7Mv",
  "key35": "5KENSzUfMuda7DgQT1BZLsqZ4gqGkBZgs225vQfp6x6hz2xeAVsxqPQzx6EoEmJvKXbxgB3EbpUVd8gNobgaGMcp",
  "key36": "4zhd4yXLHKvCrw3vgEi1xNmywpkFwikiJmEXy1GHbuXRdmUGNWqfkFBY61JnVchpFiskMS28heVQ4rqieZ9ZN3ep",
  "key37": "2xHUzY3BvrFoaP8F84Mr1c9tetF2aKKYXZtSgT8rbbUuongnNuUrPoJjG9PhfyDhQ8Boemyu54B8KVtLMRaCWw2v",
  "key38": "4Mrer92pmag54yhHJqHtxo6vx3nbsAqdXn73KWFZeKJcYPbiGcP2qn9J5JGWo9LvVGJnvwx6NzVY7YFTKuw58uEQ",
  "key39": "3NZBMeVyZ87g8FJcNUQ69svxSniEZRAiZTjRmtsnSYcW4UbkR7MapLyJShunVMah7qHabHJb6U6a7UxX5aqskJWG",
  "key40": "5TkG6fGwcRnYKK5SnMmkxUvrqX4rATC6smZQin2Vuite2Q9PQy5p9WFnQq87QgafoCrSUUoMRuHgc4Pwv6KbCHT4"
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
