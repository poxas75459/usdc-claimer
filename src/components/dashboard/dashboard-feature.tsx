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
    "3hGGj4uK9vJ9giKYS7D9PkFfa6FHCK1FgzbJZSwZkpmhT2rt6aimqT4GHesEYRysngXxJRZNVNNEm3nbBQxxor1u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gP8iqF9RntmGhU3pxWNRQr1gLL7YsQoqpZMuKVBCDosmxVpRxeQRjtVkGQuJRqPAtcHzY7PL4etLr1myG2fQ6wf",
  "key1": "4RaR8o9HCpPHcnx1UjHK2XxQ92h8x4jHhmiLfSn9Gbmn4aDWjXFyCSrAZxdXooLQRK3Wmem4cJpg2QrBUNH5LUgb",
  "key2": "QsCdqneFFeZT7TcZrrQQXpHwBo2FTMtabxaQCBHxWXFoZZ3DeC3vLdmee7n73DNhVDRvtzWAh2T1kbbVZpRjB2V",
  "key3": "HgcMTg5HHoUScq9AMRAaSak4QKqvnSp3oBuyBXAFgNj9pz2X1B7gZUqo9sWwk9ug1YVLpDyKK7xAEseHKWFBjL8",
  "key4": "P2RVscU4nkRNJdNzaHQigr342fnT26seZ2UNGVeGHvS3MMs2q9TW4EHYaGvxs9MrfpTLZQc6zPg8Upf6gyPe8r6",
  "key5": "2K18HuNj7a92ywabWWfzfhQB5fMpYVuEzbqQVCcwvjhQKFCyr7imYpq1S8Z5zUPhSvLbtZzVydMg892Mc3nQLDNE",
  "key6": "2YGTvnFTMM3EPmLL3BN2C1HxRRjCuAuiktiA4dGZZen4gwWTdGMrVtWfRaBS4ppnEXiB8HxJskkLWKBFSD9fWv2F",
  "key7": "3a5LXtzyLZrqB9643sEwgTTkrKPkDgTEkr6uSrJwDn4tvcTxowpituMM8xxLxRT5un5S15VJtShidfVzY9XPb8z6",
  "key8": "2bGaJCHWtsHpXPvPxZpZ5Y7XGS8PzieREsK1E3zHdLpoM3CpZqPUbRk5J18tz6FaYPtT8DFtzGQo6Lx4ub6kHxMg",
  "key9": "3CDkDw3eXKnXU64uPSENB4vV8FVr425BZ14JCCXL23frwTVs3gef8DqzV6mEp24eLaC8rTHu7XiPxXuBXsXDhrPD",
  "key10": "64zErQyDbQAKQnHoTiPu5w7BnhxSq1LgsBu87VCykEThrTovUZE8zYtXM5pRyTHExUMMuaBDGsCQBbztuPTcr2b2",
  "key11": "3bvnzFLMucTwsTgyTH9wdkspjgRBxPVAaKm8RYeV7gux6otuRz6EZQg7NRg98Nr7TZA1wt475RtVQi4Jcc7366vc",
  "key12": "4Tu6z1ZMtS8JDQzEmmLuxbVMa2CEoNm1mwWT4Gy5EY5EB7N4fgEfKWAGU4ivQiXRxDWhpdWzAwX9BvncFJ5YXb1d",
  "key13": "2ZfH4havz87aJJyd2dRgHkHHYVhWjJbx9RJWe876D2ZE8RhuvTT8Q6dWbnUVd6XiQmhMLj3Hxvg4JYQsaqdu1DPb",
  "key14": "3G1zqhD5dj78gvswugFa3rm8bt73xGA8uXdMUeTKUu9tYtKAGsiT7HnqdVZAH4dDL3zfZBQbjKT7iAhciFPZtRg7",
  "key15": "2oRFtd1iQrVmadHwvs7ryQ3WcnMAhC3zv6ks2pSG6scwmUC5ADNTmSnRqpMNzEspsr3YU2gHd3Rzp5sK1pgyfsNC",
  "key16": "2eZ9Ws7DjfVE1evYoqpGTK3qPSidiTo9umWmqLgcJkG1iG8W29vKdJ3wFv8xadJrdVVTE5FhTgUwogfnhZ7XNmbo",
  "key17": "vzqoiFNoADgm4zpNn27zU2oXEfFCgvvh3CbHgW3xoEpzFF2TY7EFuZTUydFPC1y5a1TwNwN91Yv6DErNpvg8xAL",
  "key18": "4Qo9a6BcdBZXEbAAwqhL3E4cuYutwA5z2oxhWtKxcwCB9HYck4wuh3WKsZq9xtU4SZBKyPofr8JtHLr3LE4Pg3gA",
  "key19": "4MULBkiXeDhtA1BqsUeTu1iS5hmxmvgtvQvT3ph2gbRJi4kYEx3r7LGNLLPRyFXD3uyUwkxyMXmAzYv5CkD4KGvY",
  "key20": "2QiBvfvLMiG4sXZkEAPDug7bcMkqwxBmNAz24wqVt1BGGTJP1Rig3Tb116f6jPWQCDD9Sb2NLmvwxXpqZrM7ZM7",
  "key21": "2ueJmd5LREw8UAzNGqFB7HCdWFivwdcXAgNBTHyBWmTtYNAxWLM1S9PsM53CTsNC7grtkpcpxZ2LruUyTWyPd3Di",
  "key22": "5Jo49sPMayb3BupYmVYgcjaP4CjAioBRPwdSP2SMakaTMym1hFzfm2QXpGU3iX4i9uT18sxUTUBEEgxdeKey8UQ6",
  "key23": "NcDrmLzK2EiE5zmuakTm5FGjaLvb6pCrog2RXX3iBYAuFkuTPxfFGdWf1hBzoSMCWuKH9Nff6M6aVC2skp8UgmU",
  "key24": "5wXidi8YQkCdz842VaDXVXpwMc1pY78oVpPBNpFxrchqNH71v87m9STC6DMPNBWKwoBryLBXGnmHURibuZeKJt1C",
  "key25": "2ZEeTsUsEKQYY7sXSBg7PGJKnxBuir4vVyhKgf26LXrwzQsp62tyEiyY3MVA3WbXb7kL92KRQQynVeeWSBqn7jSt",
  "key26": "4PahhBD5ymPq5JSFY9WhoMjH49bmGzxCbFjT3qugp3767AgruXiH21F5XkhTVZKJDsRnpX3bZZV8gpahfqEP4fwX",
  "key27": "3quJfzg7xmGaxtcCwCz5imZtiB5xaReuk3Ktq9FyjaP97ZaaboogEvc2hz2s7vevkVF2S4MDkFNUSq47D7fzDA6x",
  "key28": "46WY5KTRtay8cWQRmM9KW2CKLv6ChPMLHeqKQ3M471SoT56AxiXKsD7NatXtGRnmC3u8mLy182uDTy38A2aeGGxL",
  "key29": "3QBmBLW5SP7qeuwru5KNS7GC1WwKWJtZpb8rD86aQyFP5rx21cL1Z61UbzC7DgpPDpFuXkVe6xEc8b5GwYkxMvFD",
  "key30": "3KenqkAMoShLJjveVjuZPMfmTwr7aK7ZbtcuKLHegqEKM4asMLw3XkpSizrsa5FoSDYdobRnLUYGs16ZxGuCz6AM",
  "key31": "4WCo22NMwYBWTkUMAGo7RYvHjgrwQvGkSxbYQvGHiytAx3WdQKNdKb3N3kCjXENpa24E78Ubhhd1v2UagWQ6nTuf"
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
