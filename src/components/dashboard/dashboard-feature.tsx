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
    "6h8gb9TC2ECjUXjKxpLiaVgUHnGhphnPowhvShHJqo4qJFhPAgN2mJGDDvck6XqAbEzMCCMmFViFtW2iKz3eG6r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M8NMaZ2L7cDwmEZ9Sp2tYUY8GPSXzmKSUAAPpgr3TqekYbaqEvwbQWbrtgyvXdnaE6upxpwjg8EUUNdTwsksS5C",
  "key1": "Xm3Y1yacjXrzdtvkGzxYVVQG1TzPSDo9gArVEUyZW7YySKVEFyFtEapoLhpyVTkCwoiCsJcXb8HnDPwoGNJcjoz",
  "key2": "4uiF6UtfBC1v9MdAMKE72YJitYspAXoarU6uVfaCRp2YyutRTFF3VRHuaBWQX7qZoSXkDv4Cc1ajGC6YsJCN5Rdp",
  "key3": "3yazD4djNz43rv2ev99YLKdgRXGvQ6EjU9pEdqtbwCAPweKfYHcMEwp4fHPbAWogUWZTfLAepoF4JbAE2vjq1BYG",
  "key4": "YvpBAydMbD1dKgTCJXXhoupZCrLZWt8wnfR7yeee9ugis3HLobcRR3FBBmAXcyF8pT7Vve3XHJd1gjCT4BHvAqs",
  "key5": "4SU1LZe3GcAMoKUnqJCqcqvP49bERmz6EUf7NsPAquTNrxaMTqAL5TrdrVbHoHMxCkeoihA2uhABiwmL4oCYPeVf",
  "key6": "6488jhGzxXuNskjkXyanE8cFB3RouvnpyDkkX8DGV5uCwnqdKd59ufhgUt2myfoshE9GZVtqvEszrgdtZZNMjzd6",
  "key7": "4SjicAXictSCkpdtA9GHbcu7mpoPs9qLMpGFn2irEEoJNJHyeVpfd24FiyduuKAkZ6Ud4ezBhCyRjFPw4HYyd5fX",
  "key8": "5fZVFyasU2TsYvkERPpkHsqnrkgw5nn5RPAuQFhYhnSesRFQK2qxwLDmaiZJt1yEdw7VXwyKugHRc9fKcs4hZik1",
  "key9": "4dFUNAcj4KCkDZLA1NRS5pE7HB5GfsjnfC7aZs9EcW6EjEncz9x5tBT58t58TY4oVu797mADF3Fck7V6ynMJ6gyF",
  "key10": "f2PE7Q6QpG6jktaQRd9r25ETrV874mDdiPzt7G767oyRtQYZpXTMu7BTqxkqksUAuQp7dZQvugi9xnNDUhSmgHo",
  "key11": "4DehRWiRbvQeWiv2DWJkLHR1XngX3rq9RF2XupLQWNc7NAi639GUqYdN59gYNNgBwgnHPQf5P8rim6BJPLuRXCQq",
  "key12": "34qdhbWBUTLN6epHNS8kNLAm2QcAmk95HseQ1nfcWqHYkPEDyQtCqHje9BDKFZrEcgoZyuup88bB4Lk75LcaV1NA",
  "key13": "5RWFZ4kbPd5X9qNByxLbgFUbgFFXmhQSnvuCudk8kyYrsoMJEkf3pRkWWME6FwASQEiZfEPT6m8iCTv6Tdv4jzz8",
  "key14": "3D1r8chV8oP8MBjysfNEKABhEdjz1ZQVXkWgCdLmJUiWhkDKVqWDfFSsGR4jZrru6AU5ypbMwNnWmzJ8kSqvCw5n",
  "key15": "618Z9dBuJqaL6Ue4A6tDuukAHvpp5am9rPoPM1kmc3LiApjbJ5n9oqwVGR8JdNet2SLcTUb6CyAPvMn3uRWgrhry",
  "key16": "3ZJuwvsY4QSWXzjJ7KoW9AEtMzN2cXbaz8uL2yHG9DdxKxNMKZpDwLGV2HZHzmdQAoNp36noqSTLWcvKZdTbspGq",
  "key17": "3YZjbe2cmLytYkkwNwLpEnNRG4BdoyuZ5jhHQZZ22XmL5YTdEMegbN6s4eDt8hJrPuNUWCuECSfceBXamXZ5BEtv",
  "key18": "2uxwErFBf8nnaZmfjj2EqtvW2PWVj3gedEq76gxM6sLD8e5pdgmeHFAH9EikHtK7HCN2Sdfgt4zx2aQy8UqC2NHS",
  "key19": "48hsu8e3wSvW6KyzWvqBkfdmRQYaQuw5tvbQA4KQpTtsiPmMHrodDsmjrJQvpAGv7ojq5f1DaDzX66bLU4Jsy6Ny",
  "key20": "HpuRkPzvvigPSdBAA8fd4Q85RxUvunjxmrM2BwzJa9cvesZcYt3xb9J5gEU7Y7Sq1XcnTcm62ZAAppD3ZUqDq8e",
  "key21": "2NT8rTnoYzrumKnKirQoQXWjrTndELcYK87dPWBEKwxNBFuLji12TJWbJdn9NZDUEL6hETHfAzgfAJdwNvzLhtM2",
  "key22": "tJskaz3DNSXLw7MgabUQnHRZbVoHyQY4edevR2GzTB1B97FCRYdF81MeRWS8TJkxFwyGRo7zFaD6b2sxecgv6H6",
  "key23": "5V4kaGXNRvu36tsY6gcXzTYWAnW22G7BtuXL6QSFiGnoTFKzjrx4HB83yCZQzaFzfQgVNPX1W7ZtwaRi72tHgJA9",
  "key24": "UescXM9t9L28Pe259jopG7ZCzH6LhBYxMFELusLy9F3MVdanHGBhdbYEFECSWteyKsYoJGwBkcHXrFbWutBzi3L",
  "key25": "n4ZcaCCBv6suoixCsgzRbbpX6m2uU4o5FVMzFqqwVgv1gDvBzpzd71QRDRwyZatykuRSCnQfLnDdU3H758pg6AZ",
  "key26": "4KpjeLWhDmoEwNBQBSMVG3PRQbN4cFH4F1myMvL6MVQ51NgD79NqWTQGuq2XMvXVMMVHm9QoFXcras8VotpMzKuA",
  "key27": "ox2L4zK5afKsSCfQT6rhF4nQEuyNqJqf26jKjEtdPEkz1v2YNBoB85TsHZSXiPL87scCGi6cAvL9Jh7eQ61kEon",
  "key28": "4xp11bukY19iu6RviN5so3z5HKuEsxbpdn8wKfAKZnjLb8uSakLJ2Q73TLW47HP8UzstqvbKcg7JpcnqCg6w48Hz",
  "key29": "43m6DuBxMG6tr2WTFXKEPSkk2NgrYDVWrL959nb9agfkMytUUKviVxxnv1nn7qav6gNn6b5VmKUYh4GnDV7iVfdh",
  "key30": "4Q3KMXhqbFYpPU3MAJPigDMqMVQjckvLCciTzPWu6rK6dCP3n9LbqdR9DMZ6g4TUjrL8EYby48e3Ld8KHviJUNbo",
  "key31": "2TQx6zjsosveSyZNE3pSLXnmKF31hB9gUPQHDLf7ErrQoRhGYHDn2sVsyzCACTSgZayVUDivXFs941HgVzf8uWs8",
  "key32": "396fAfgLmPp8hWT1S8Vbyp51wSJ1gcAnYBXesESpVVTVmBC1z3ggFav34kg3G3PKX5QvdJu171F9r41GfwtzE8Yd",
  "key33": "4BfDR8hdDnefjFPGM9sGs8QWvwuGZy5tKNWND4bSGD6Bf2kYjFv7dBAb1RDmdVpiUEayocyiPQ8zAbw86dNr2yhM",
  "key34": "4pTpycWZGGGsY1ZyqjqyqhhD5mfyTGXBRbxfbaUmB4L4rvSHGBbDXCNB8XPLiQUFBghdKbAPqvxCuoaMTYMxJa2W",
  "key35": "3Z39QvGBX6Xjm26JR56toWfpc77kquRDGtjsdBdUNA8twNVLgBqcXF15Zj5z6vUpvRTYArk87ZfZBKGMCXWZAB9X",
  "key36": "tE6sdBvrFfxiebb6KDF8LwKMquRZrsgGSW1Q28JVv7dy71cmNFg5PUkR2Ppqbun3ccnqxwrqcGHBXKeL7nf8Eqc"
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
