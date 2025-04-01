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
    "4PJ72u9b3vDJQm1MHYgo5au7jfy52kcvDhH4yT9p2PsqUDKGxYu6ccBHo9LvSfBzv35thkZp2FPVN2Z9Det3HZYt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39Jdso2Zf3QcKwnLgW2UKz4naW1cTCHKYHdFngurYZGKKj6mWAsL6kie4bwjHVErJReg6BfS5UH51e9Zb13VgebS",
  "key1": "2yiwNN6P1PC5QBXrRCJfKvS34nYn2rz4t6RUYZYPwX1AFWNMFK48Fj6Ky1pQvFKs6xWcYb7osXBkP8C8E5N8PMqt",
  "key2": "2Xf2Ny46zTzRCKCFZ48CriD11sUr5rtz1EgGRMXYTK7YrqgdrEV2jmbBym7FEhTgi5nA4YQ8kKYfdpzbVvMdbRf7",
  "key3": "aWFW4cn4dRuo9vhc2YRSJVCsJSk4JRjNHpRHfE29rAboaF41CLMfyyrmYtSsMgDotej4gkeVkarSy8uMx3iCb8M",
  "key4": "3PzCA3jPXEV3D6ax2Y3fuBAS67v8jYDhLy3XiEynZpC8vycxFbXJD6b7twFEGxpnt2u3qQYKyK3kRMs5LrRFxZaS",
  "key5": "27ycu4CKtD17NkqgZKPuUhYeEfEK3dgKjYn2UkcrDxwJ5DdpHVHH1hVC5zzaP1AbdQ4f2uJN2PfxjNDwEyZR13yX",
  "key6": "3JQUvPpKVjzcFUJLxSGwpXau1Cbq3gX9jhHSXSXcUCvuaXJqgQaYWujnp4c1bXjy2PwxdD7e3iuksEPCANCzegBH",
  "key7": "5gQqEDFpDDcaWYT6qnSi48VTTY5WP9TbjFygPsmWdKBMKFAh8mJXcsTDrknMAQiXpiGPtj9xwdP1AkkxBApWkJ5d",
  "key8": "5X3QYUH9MRurK1bhYejKt9PTShaN5pDjGWg6dzFpMnZHPyrisjxD1ZjqoCMcfnK7M1qePABSb2D53JPDxneULMdJ",
  "key9": "3xWbq7A2MkpsNpWLsnZihXw4V5Vou48W1yCw15tZwm3eZo9w9RXtAnSUXrAjsBZaoJSHw16BwpVno4aNS4fxCVA",
  "key10": "5twMsg6LoJbPhMGXPdvgC2RKfmG4f9rqoBH75rX4v9EoGp6SS9MWm52bNaikRdG1Lk4U7RPXeW3nqNFR3UvcwZ7T",
  "key11": "4xzVKjcA7exJuLKwhqcdhKhdWezjvHYsMPRRBiEyyCeVtZoQ56kZ4Wg7BQBWnqPuTvwNRwP6sEbaAxyzTtbLp2Jb",
  "key12": "hZP5nHY1jHWMdAJi328jHyWoLsufCwJT11CMvEydRTy9p3UJpoDBSZidK2J5aakYA4zo8BYRE7pYsJ7WKXQkruj",
  "key13": "58pPsYcpTb4mvQ7NWfsm629aNNx4kuwggLPZSmmqBk73xuMZrVKCXw6ZneqPMG6FY2TDfbfGyScwAdHaBAWZFVYM",
  "key14": "unJ666V3GgFBunqNjHCBjyDXtfSDkSQEGutUWsPFY4r8t8g3m9d65Ks43y6wcAY6YRq8rUYBq4GpHCKYherr2qK",
  "key15": "4nAGFxRwmUCwhrLbZe4qKf4W9JJ1Fr86WCH14UKPjbq4KS1DgBVgbueuDxrPhkMTnqovqi6EdEMw1kz23Ld8WRhH",
  "key16": "5A3eg92oP2CiNa8U98FKyU1L8WuCvS1Gh1aZufb5ns1UHX2JCMbv7MU929DnYeDvnLMtwhHnMrAkQaiJ9yaECinB",
  "key17": "2XZdro8vKzo6UqmB1eY4XKhiDCYrNDqnafsfX6P9zMCXeh8NMRpx1vANbYvbUpcfDYN2429nWWgqt1V9v52MsHfv",
  "key18": "4TBf81x7nzTpMf7s921E49sZSxhQr86VbA1Z3xp7ugw7Mk2NQao23JrT1D6uPnGN2HcsWSUgMFRcnk44RJvmAiqx",
  "key19": "5CbLn7X21zciieHbPB8H1HfLYHjwHkTEeBYz6zUYqTKqrThqwcmBe1keTxhkfZtf4ueNL6Pr199HQ3mJ3w8FVY2",
  "key20": "374wssq8esTNmLcHkduSRKvdEmfpXLaDvZgYwDcqTQ1F6S9txifLoP7hxKPbft1PAD79vXJvj2Vww5sMDFrkU3jP",
  "key21": "5qvXjvj3dGxk4DirqhSiBSXjEE8JFfwsu2cY6T5XWqgrxVtG6rYb81YdtW46SNa2BwMShHoXe5dyYPLh8T7BbC7z",
  "key22": "2SX84jkC8g73wjrXGberRDW8ZvcRoj7YzLeWi5Jxv2HyajCGiVGVc7NkGm6U7Lr1u2tBTyft515xwZ6ydrDfBCwB",
  "key23": "4CfgHTSHc6BJeH4TTUW1JD2GCL3FsibxKMFAs25X5tK88ieofaMFFoDLopEt1CVjYhh1VUqLUEUgMWES66dYiKkq",
  "key24": "5APCs7XDpkuCXGJQNKymuu4d8R2tUExEJ7uqugYEYUHsadszCrxsmRS41y18fk33rv8hWPoWYiQSzM4UtsY41oQj",
  "key25": "4Pj7S14zSd7tYzuk3oxUmZqu87Gmrm3rBdqx2LvKvTzo9ngoxMa3RKQAroqQUPVJ31WmiuiXsh8jXjwMNTnBk6Sy",
  "key26": "5n7Tgtk8vZ5vRQ27FV1BpiP8QvtFg4rDWDKUD6Tsi8Zvt7EQ5S5VKPipsaAo4VPYbcs6gkTADKmS6f8wK3CiRH25",
  "key27": "D4JXugEWj7rsrnimGDcT156GL3T1x9x2EPs187iHVLyz8aJhL7eEEvQWMvpy469QmKj31X9RUA28bd7MDDnb1BU",
  "key28": "3mBEy5Y8g7WJQevNhnD71eMtMuMYAgWkd6rhd4nEgJw1ZSuJMRGYgGMPm9GEMz1fzW8NErSkTfMWhosD2cfTsTkf",
  "key29": "3GB8KgXLYMdEQTB91JrDcWqtZKvTTkXdfSc6yZVEp8DtyGFUN9iTQHL1MNRtJuUtWnbmU792VGKSepzBu8UYddXf",
  "key30": "3hdPpywYXQhYh1VFFnUhA8EvRqAuJxbELHoruoFmhXYdzMghpznP5WgX9UDwQbxZoTNHMbYHFLjGrtCe9ZcSmFbG",
  "key31": "5Q2t4t9FxoKrDwi7dCsAYL2wAKfMM6AYUZzFAxmJvKrBMbvLDCK6kawpwEi6iiQkkNamit67m4f8cCSoG7Pg4QPV",
  "key32": "27MxnMRe9NaoTJJnDVw8xuwyE3iV8KLnsD4BmCCoNa6tUP1sbFMzkL9dmbqJbSWHPt4zh8ZMHAbc63nCz64fpdG3",
  "key33": "5ugA8Lt2AtR5eoKhAvESEaC8GMmWWNNheXzJpeoJF3zSjTcAng2mcPiZKDvgTwDLfZn1RRm1hKS1qN8veNyU9MJQ",
  "key34": "3XapXPMnG3TFRZpeY3NJf8MYQjTk79LxTuP4FSLTBJCayLnnzPrJp2LKQN6Y1USMa8yH2jrz92fwbKg7eGSPXipP",
  "key35": "3AU3t4HC4X3kMKvv6SbF5b6HkqFgQRfAmHfUDy2eiGdk8SemHzu3bBB3XGrVW9FiMJ96qenY49J4UJAZ7cgx16pJ",
  "key36": "o7S8JaeCzatthSCqsWFsK6i3xZc4mDb2Sx5wn7feVRbjgNgVu5X2ySiHERfvTLwzvoyXJKYHKCHE7reTaSg9SPL",
  "key37": "JER1ZN3yh2ZfdLJ7g7gKXG7U3axD6H7682TYFFZfFPEkhMydzy1jj5biKfDyKKuh3EgGTunyCKB9qgxFsrupPnh"
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
