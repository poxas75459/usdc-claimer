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
    "3TWmwxBQj4ovSKPQnk6vnpR5JJEvqXJe3EYQcqg9KCpfjCrrP66uDWnZSS7XtzfUy4zNrg9geCnedtCM6EsXL48T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JS95tvFP2XchFhRGYS7qZncRnVt45iCE94Ype8gw4YHCEm2hFTLE2aGJjB2ejCToP1qzLpRwBRJxmdxyLntEYPz",
  "key1": "2GKkEAk16xrZXHZsrPf4KMb8YieRcBgxJ7uRSxLLpj2Nb5zgHX4XKkBxHT4xdG2pJxaCRPqzanHBJjcoBiihhJ78",
  "key2": "4CL2zEZ3qgns5CZZFzBFJzne7qq2m8TWEs6mgcMiN2g5p4uay2CHVHGGHAiNCQRL7fDWTYBSqRtjkq4qG5iCbp2k",
  "key3": "3PfLbMErf6MKU3Pp4mLZVuzGkQwrbV97h6nyGXmpM3QRnyoynnD8b9bVyo2hyEJfxH9spfNADBdQc1nXsbFTEXnK",
  "key4": "4Lqc1fi9uHjEdJcrXgTvCfzHQJFLWtqHkd836k3hB6cjA8Ghyx47zJZDp56aBSEDP8zjn4UqnmuqTLGDUgE1E8Y",
  "key5": "uyDEBWakaXty7T16ZKxm3LeLxrtJzf1MKvLL4FcwKHLFwkckqkQVV54bgpFvaKPhqNgvBDMUZSLTiSeW6YpEVK4",
  "key6": "5Wmt5rcy4ge5UWsEGvtfU26LBGyia8uHYXhshnULuRpUzYZi6NmA7Xke32Sb1ucHqpAN91kNfBr1LvDe7XK8d6sh",
  "key7": "34Zac2wL8BBnXa3JuTmq2CxSuxMva7x3P49E5Y4bCmeSroQmuNywaXD5NTRiVBacd8AhTVRDg3ddBmwgrFBJih4D",
  "key8": "3bzFHrc5SLfKwprabpauD8VcgTpH64quECBkwTYghh8qJPaeP4CtZUdn8acW3Cs9QXGQRvL5QoDNUdBVS2fV1Zgv",
  "key9": "2rVe2vvoWSpeVk6zeeGSqsfvysbGuyN644jsrYQaZV6wGV7E42GNwSZCNRj8LRvNk4d6NYwjKhYtvhoLWFb77uNH",
  "key10": "4bwATgLQTFKvsNbJWjmNCaEQKiKKJnFMv6vWEjTgthdZbz3iPH1gAMeTyUacXYabEAZiBdkgvpox8NnWJgnWra97",
  "key11": "5fuvWDCfAUfqB9wUrKrBGTCarZ7fenJWoSkv79JVWkXwoKgnHg9Df7hwyc7wXMndyfHhcrRxdJQpXbQgDt6bPfHh",
  "key12": "4G47VvWA4SC1zSVVmUkn9aqxvwqj1cJMMpN3q9KhEYbrrS4qppyc9QRC3YdKtsAXFxLa8msTZS8uRFqPtJWFV1Gx",
  "key13": "Ewb9hrqS2yPhoaC6oVNbPRuTwKBmk7QkT3xMLBGeE6FzLRBUH5EqcdjybfX2efMgJCvJobX2ypQiiEW8Pw973Nt",
  "key14": "3vLChuevVzngCwAcnwM6Be3iRA9or8zm9bvtvYsKfnMPCCQnTn44mucZD4BYk2KzF3CBpF68tWCtLeC7WrvCViNF",
  "key15": "4SvinPWtFncykGsnz3rHeq3rCFzhTh4oKCV6qN5ksH5emXn3e2cNECfhaiLvRMJtEBAhCgEw2EU1Lzqj7Qo3NeT",
  "key16": "4adnKWnh8dD7josjChacyNcAxYmpeBoom58Aor3FzQud7V2Fuq4Z97Kc6UyBbwzZRw7KTvH2oKFR2YiTBA4D1zEB",
  "key17": "yZPha34vVukNcoGizBvSbnur42doA68NeuPKJZHktybqDRjrHDxWSxoUJKjkKQXy1S3smB5oqZKUUAhJWsFVi87",
  "key18": "63ozJ5eK6JHQLtEdi7xq3VwkttAGhiScc4nLmDQEhM1B3vad5sQ8X1XUw3y1V26A6nHGv6tokrFXvWKJYHGkAvPC",
  "key19": "3s6ZR2CPupJFoGpoTTgcS24bmX7jwQSYimozLsHXDYdMjou4cAM76K42KKxaxMuqT9PNy2zkYoSPL1Tm6oAdkEsF",
  "key20": "3kHHCnWLhzRzVHU44hbWvv74JZ9h6vccN7fC7eM6f9v4nJXQsHE4okEh7koTQEkRZ3nm4WezenhhbQSKSCJXmE13",
  "key21": "5zgfR7SuH6PV55Sy99ZfSPfCCAPkncM2tFMSqDUTZ4Xu7mqjZHQKNAvheLNQq7kcUwgaT3zHciecHQUfHjE8ivjC",
  "key22": "3dnQndYnq44ikpfrrhY3HKvGLThNZ4weGMjhNh7jV49uxKEhzL5CNJxt7SHvH6oBXf7DCY4VfcTbdR94WbXbrVde",
  "key23": "36u9Gw1fB2jDKgdrWctD5aKH4DYtauBRUNcNP8xB5Kp4uFeBCPQBj59hzRJPPBdJLssbqgF12sfuEbMCzS3Roc1G",
  "key24": "4DPNokSUwLrFV37GftPnqi1yfsPcAzmQecqm83PDuJNBYR9vD79bUE4BghFNTwvgPkb5Go3oi8VVoKvSpins13C3",
  "key25": "4aXzwjuDHsw2gsFpp812EYPjjEuN6H5JLuhpYuyXC9Hyb1ogHRBjxy8a5WCZV1btmiD6WdDfwvNzNLYTCd17rg3h",
  "key26": "4Tg4h8bhQeEddr6X5MYg7TPaCWoLNbT6hYq7pXnXoC2a1BouSsuhZVosiFpVbcVKmTLgQSScGTgg7o8gfSokisRC",
  "key27": "h3S2bPVcrpi6d57sBu9cYfC3hCQoYX9aATP5r2Y2x7dQ9Romy6Lky5NLtiRQx8de2FYNrAf9uogxDCbfCKyMmH1",
  "key28": "5pD3GCuHqBRgytsWkoDD6jYNH3KA2T3xRcFkvxfKWDzQ7hKA5zpxUcwdwAYDLjPibQrXk28Ye3hVHTreNEyZ9Suo",
  "key29": "3YJsuV3bxqimotDgDdG8isLwrUXC2SsoNEYza8ZPPcQCC8AjCzshTGExRkLxBXLUVqMe6B4D7NiMQFX4XnBspxnH",
  "key30": "3n1vGnoW514Ax8maTegF61PL3Bh9CKU2swwJYkNVqLJ5RwL6DifPrY5aia7vJqsEYMHbBVavKtQLKeNud3sLbcoX",
  "key31": "4WM2UXqYyY9m87u3uQP5LzjGBdZuVFmtjdkp7aYXCdKHiaBydJ2YnZf6iUUHnC6bjxZicewKs1ZLhmVgngSiebHw",
  "key32": "3ySTsoZJc7P6HoWS1b6khqPK5hKbDRupWGcof8uUUyh3aY2sUA9gvmQxR9hQLqm5MyPxN4HZshkJwUHuHnEmwDf9",
  "key33": "5WjJSGPHx7quv1zh86H4zHNZaT95cDJQNjrLSxZjJcfEpEFNku4s3cKs26j7qdiAH1tHgAaz5N6fkfWiGejheuWz",
  "key34": "62V4KqY5tWgAEYpaRstxMicu7Zn3RYHNimiCgJtS4uuBnsnCdhVQKHRNjMT7RKWnBjPxbwVMfj8vTE4q6ErFwFFd",
  "key35": "5kHRDdx3HNGVkpzJ5oCEhwgdThsHdGhQw17CDAkn1UfbJehTYVtUoKvFTisT6XKPr7v9F9cdxQmSawFmkPWVizta",
  "key36": "3vnFbbH8mUBsqJf3WhTnhR7M5dFMR8TNWUSxxYAcRLpLX5gsBiYQ1smY7xno38U2pB7S7pc7nQDfUvDfeiUMk3Q8",
  "key37": "34qvLFrQjy1kR95wruqBuV8zP5bonFcmHmgaATi3M9YXTasdkeoZFhDvWgGuzT9azBfFUsjF2tzV8LbtWKQwbREe",
  "key38": "DqJ5wMu9MEYXvQdUsKjHZsJm9scHjyLLSkdCrghWDPTDSyUvSxPQ8nFob5GXS4Z1fmDmjBLfZG9oTn1PtnWaJe3",
  "key39": "rC9ghjC7HQ8v74vGrgW8qe5PoJLSBMksWLpLAWTdrDTbr7MaxhS7XgwxeLdsAo7qZDtx4grZcz8aHECrUURuqPs",
  "key40": "4xEK2uNR4dWYPFMkcd4uzyHteH8Nza5ntv7hH7uAJHWpRYAucB8LUi9BSjhdgE4jjE9HNSTJnbFUyQiEhaS1Jjyi",
  "key41": "617Ao91tgWHffNhXqHqFMeJLnvqHTAmGfKvwcy8ZFNAXzwqUxxPc9YLFLQKGrSe8ijLGVAn6q6VC17tKvfnFBgns",
  "key42": "2BoWeLqMivWx4o1FVeEKJ67g5EH9frgVF4wFcS1raamxDWqo8Q8t1Ff79pJX5SsXXkH6t3H5mu2rsVjTZnP2iosP",
  "key43": "4XmCFUq24Ld7LmuFkAUSPLr6jW4ntuDX5KRdtQUkJjwRHeskuncUKuZbCt9pMgtasih6HNhShm6rSHX1CiM1FxC5"
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
