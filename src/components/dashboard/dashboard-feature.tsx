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
    "5xU6VqVb7yZbKL3FKowHS8MR7aMEpijgRnT83dD7ktjjiFRBND84VQHZ5tuTqbAmHx59GSQbeFn69sM2tM1x9bmV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EDsvPEkpJ4arj6CzEfnbyReqU2GBNJBxsQLAkYCAwjESMEicbBWhNEV9SiKixm5E9riur4xb4FM2JZSUoEGubhk",
  "key1": "26AnU6GfHnPFU6TEkW3tVjw1JjiQGZhNRutptyU8V85HJjznwUNe63iJaJv479ZM2PXtLpymcFU9k2nHbFN9JhRD",
  "key2": "61p5P8tFbjM1z4Q5WyfBbKZZ36Hf8q6toLUBguqza4sP1ceCECQFJk9Hs5Amt6vC8UHwi1YxtDPPtrJVZpUxgZfc",
  "key3": "22wmJTcUUTJM5PHMMrzSFwPGDaZao4MjEU7Jc79vYC1EB5HW8BxTtHERvRTfXGeEr5sP3ZQN6xDaWhmNT4Tvewgv",
  "key4": "3eWiJmkirbhRGqzvDb8QTyYeGXvTHnuR3TCFot3i83w9kUg3A5AJNagrLuxSo75yWJSyVTSRtBjWpj2natQURvsc",
  "key5": "5D9eivPB9bmHKag57g62rW5ZdK944C5ueyThkBGAwS3UeFSQJWesEqoVm9EoamdQoBRdbJnwgFnFMcEkVHW76Tzg",
  "key6": "5aKKjX4TNErMBJ5nzB64ZboiiajgCehq41pZ1BdG3KyKLy5N2H2T7cpmEXcRpbwU3GxSZpr5XDRcvSyNTqLgMVXz",
  "key7": "vv1pkGYe1BsyGD8fhdwJ25HRrrKRw5cq2LcsZ8w2qLCKsMfpgwdKgQCwaw45eEYvezp3fZ872YcnbnVKS2JATAC",
  "key8": "B5knk58CjU7A7ZgKr3Ka62CvSZY4JBnekb9RJP681sq6pSrDdp236T5uPrmzMduP3pdygVednHVoJtaSsojC8kc",
  "key9": "nvfe2Vjx9RXqEJwAcGzmpybMUkQMTeoergtbxDpfFvfPQWk25L5uM6M4pVF6evcREoaKkwJE8inHZkVXmjkPtrk",
  "key10": "5F8XLS3ZACxf8tfqfMycuXUjzCVyPrNn8tBKvYF6TJdRHf5gWECsofoNz1uL6Us84k415AAbhsoWKwgtXW9ax23X",
  "key11": "3cGGuwKjBrEPF674X7mDsSqDSaS4RtF1Lurm2hRG9GZqBi62zF1rib8YQejsFoib6TNkhAgZfq9Pttx8DsVsScp6",
  "key12": "5pjsXdArdpYfBU2qVU3SF8UX2ZVomw7sWBfGF9ajHomzVmncvTbw8o4eBKwU5FRjjYdyikQgVUjadGWxBD8cDv6f",
  "key13": "o82e27uDThVTjcR8bzASmLt4phkwmXsxkPposyJoNMhHd5ySCxz6czuNYx2kEKbgtR4LujAQZPzz4T1NiGVoDXA",
  "key14": "4KFUJrU87ifWATqMpeoAEfgSXN9d3BoZBaDTyMxTqr6xMJSHRTeHqKEtuXsqubx1h18tBoPv4w4bekkSbiVmuZp5",
  "key15": "2mkhhs39uZqWtS6kD8mCUgMKa4bL1dLBXeBMLFsmChvqzajWZvwKhb1oGomXLGDyHU1t75VvYZGXasrf5xSy8hjP",
  "key16": "3tDgtFAsfgT3zotGJaoMbVSPg6iVXHTtARLH7smWpX67PkTDJmuqfx5RpDfupCk6YBXnG5ZxksVyWekfzxJJKU4f",
  "key17": "516u2crfoAH69oM6pLpoS1p6iDHnSqVzyoFAk3Vz2VPeRRKSXE1p1iEYVWNS2EVgRZShJTgLgoWPRZExTX6BoHZP",
  "key18": "5CexH8QuBMtukJEZSdWWP7H5fokRkSS7JxYJrpqW46aTGfsXS8rH9dHZrXrhgYtw7GHKDpYJnqTYMAm3bq7Epr8D",
  "key19": "3SJPYHQiNeSr82M9xvqrCoRrfVndvpjfTJmkuQqNnTUzkzEWWD6yVJtPfhC4v86wb98gwQx6vnh2R8MxPhAMsymY",
  "key20": "2Az9QGKvfWxt7cZw7qFJDdkWe5LCCapLsCTezsaTwz8WfWN9MKmPokjHyc7ZpqvRchqGDyErfRqCp4vpShDSbZyA",
  "key21": "3EHzgqKgRp9qHWYHV2ZGAhtUMd1pkenzdHCwCebmqmdarR6E9mWGFw7B7VnjG4eyT2q7J1HuNmt7nPJcomaRSjnD",
  "key22": "5J6JvARXBaxQobWA3DxB485kPnuUGpC6NygB4a3ZVT7cJKSmt2iXNSBLKdPwiLLVStRueLDY7coGpNuPWr4KVY4E",
  "key23": "2wvSDTJQqiZMdsRU3ZjprVrNsFB2Yp9DL72hCRtgPcu2j86sQV9kGUPiiazeX3a3JyrgxE7otzdqYqLugbLEPUiw",
  "key24": "3K6CJo41GvCNYvYH2BXVkkxyoBmTpdRvKqVLZqTwrQp2qTRmjdJiW7GBqDdi6J3PJtp9PhokgGjw7VYPcSgqASHm",
  "key25": "DcbiKBVTbiLwG4HZBCm2kEsTEmH23rc5tCi51RzGWLzdUVBZDVEJUHtSDPMNywnQCXhLaospkpv2fDWpwrU52f7",
  "key26": "3GFdMsTenW2kHbYxTSbbpHkNpBwcivMcofSjfPCZZ93LWcTwprovsfdPydofGySLPaBgKgihRdDurNsRrXqHjNYz",
  "key27": "5sSSyr2sT2gAyr3PWDq5mCFpHbJcu8mrYDNrKSPznF22mEGVzqDT9BU9PyEvsUT1PZHte4232vBtdGC2MviqdQDm",
  "key28": "KWP1pCaqhW1qkiGj8jWvP3ChpV6FY7ukqvmG2u1rr1fv7g5Evpr7aWztfax4ena5sShgR5yjx9vUY97qDW62e1n",
  "key29": "2P5J1rDQ78gmdeMMN2aeV2vN9fCJPaEvBTj62ga4fzNNVqtoWcLMGhu6bupnThCzSgFJ5tY8vPi7ve35G8rN8ppT",
  "key30": "2ew1uKBMdHgjFQBwHszEXVj9g5qBpHkbtuca5KmAtd2QUXpzPUBvRh8LHtMbbxtNEuBXxsgTvMeYhd2kfKBuHUEb",
  "key31": "2zB5bthYddekEMNwEgufC45D5C9McwB7K8rKKrpQuWnRRdXwaKTpZ51jgPAbn7CXtVeLhPgLVxGhd3gwtaXDxLkN",
  "key32": "4UrfmE3DH91FXbXnbDs64VtiL19gb6NBBAJEQFpAnBbdK19QSD9S5x88EjYSqKm1FhChajNFqjKcAaJLzEddQ7eS",
  "key33": "yeiKqD4PYYPTu2BAFrvQD4ZNEiJFkH6cYzXyWCqvtP9cCcxBAPxSam2UusUZq6R9fE9ZwXniC4ScSGcLkCfeq1K",
  "key34": "EWyk5RJ3zLwEp8KpSpPp7mvdCXtJwx5mMfjDugunSudTqwkdj96kxM2LjHy89EtKvTgx9TiWgwZ68jetsZzQAa2",
  "key35": "2V8HCYCULnkqhREt1HWfnSCy376jsEcgbvTrVFyKJgb4H735K1jHjauiy3CR4JrzUc8JEuTdbtrWG6W1ENrBiXbQ",
  "key36": "2YiLxhULeGG1duabLiPfE76A25jjL9UeAxncHAaKZWK1icfZFzRS7kMuz4jyePhNwYELjKkMckRDouTxRMCsRS1g"
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
