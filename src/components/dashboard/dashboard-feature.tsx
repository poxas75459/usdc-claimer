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
    "4D6iJ9fxd8X9EPgXjEsjQx45y9pwLyHNaSUxNSLbYrraKmMgZ9CfcFsXiYCqJuyHNWhVWjJ3JKsoW6zYmtfY5urZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45VMCSECP8h9yNurfrc8qDASXZ6HWHeMgfiqpkRAF3keMKSxosPmqtSq1NhxYHXZLp8xffv4GZ4223GcVdGnG5Wg",
  "key1": "5mNmzQtzqqFcRFUXdePi98GUg6JKGji8fG4cYZu7vNMXiAGAekpsaUQHHzjXcLTpTHE4iWdAc17XYpAe2yNuSGRw",
  "key2": "2iirH4GztwVzss2dUDsKwzJQXKmU5L788rfUApvuGmHaM5ED5G39WJpxYLF22yDdN1xN9JLyQRVNkdRL4got4x5U",
  "key3": "4BndySYgAT8xZ3125yEVuqnfFSf9pAnN1ociijx8qSjTEfjtF5Cc3wU4nomhUFgTAWEZDB4asQhrnPx7iv9hLPr7",
  "key4": "3iCLhtaUV6efKDy3bNsspzVNsYmKqHRBYQ5aVdZ3zYvjy2Lj1vSy16YbUtQmXFKVuwMVxiTxjAQJxfNqvrxMU1Mu",
  "key5": "3PHY9EsWfAEVxcyBvWiS6LVrEU65k5Y11a8VtCcTTnit129rCZAnmfufM3dNiHxf7rdA7tr15e2feV7RoKTB7FnN",
  "key6": "293vCkcWpQxa9Zjyk4DUpktMSAUuAXQg1YepyqioauWdLW9UdJhSRLwXGd3CCi3BY24DSkwZ1gR3xuuZyZFPEgDn",
  "key7": "2WHdWzdzddpjYycBBKwUAvAmm8EbJ3GsgHDmP5ksNCgXwck41HGwr4jEYv6T7ktynu5xSN2eCycQQquSWzkVu647",
  "key8": "4BAUXNhjCkoRo9n1GLgEpx5aCa492P2b4R8FmJQWibJfe1jcuGh8iQYBjWb6cuY1LCoWCnn81iBVXXiMcTD6Hnfq",
  "key9": "5grMeWQc3CFkGsmye8rKENNEYt5pZ7YdUepTRWAcQiZeJeAfoAAqPjpBJRGaBdoiVr1MoUR6t8RTGkHt9zhPFyd4",
  "key10": "2mVzDHS59pjbM9rF9SnazHrZX9HuNRstq9mcVtuwekLLGAeBZT567cdwrqjEgjVZ7qZku8ekJnePQdddQugAE3dc",
  "key11": "4WSo2uMou4hw8GC12dM2GmSwVP7jTgo1sPqVYDBDDZC78qGMp8mkmKvqsb6o24UUmSQ1qW2SF2nJB5tiS1dCTCxn",
  "key12": "ZydrPJLmvwgYTwg5TC3xsakJVtfAiheCRYKGH9YnsDreenL9DxERxPX9xyJ42meXnEUswprHDHBPL4qjxB7c6Ek",
  "key13": "2xwgaAsrWkju5KJVg7GcohFnSChvouUmsyy4u9bShzppaiJVAjH8RHZs2jts3m7P3HBF8KD9urw2cRAtWSxSbuPA",
  "key14": "5785pixCt238cRQQK2QHnjQFDtYHNhqSQ8d617feVV6QSD9AZjJPkB9zw6k9VBNaJyvtwBN4NsRVvuYGPqKzFBrR",
  "key15": "62PdMVZ17dPkcqWZddpe7B4B1XR3M8s1p8cFYN1S8D5Nk6foqMqm5zUBGAabPvh2v4fBh2y7jgvcUG6YrVLG5eg4",
  "key16": "3BasNog1czo9mguMD6PFwcsoDfVbeQZBr3j8zRDxtXiHe6HPyXYiPS6CZVUtdWKooerDrJRaLXPyzP2dBhtLLU2k",
  "key17": "59pXyArWCfrnaLMfGvpmjqdm32533B6nspTxTWLVeBpnTrU3ZFoF2ier7agkc1JHwirinSSgkqftkC276uQbC9UD",
  "key18": "3qehxM5CTdW9fEJr1dDXAJGYRRnfMjZde6FQjNwmPBwEaxgYo8LgshgWznaPGsMSsW2HX8BtwA8w6kvLdipmyc3T",
  "key19": "255MszcR1D9ofmmpigCcmg4xMnY81LZyUSbu1Sav8rgSnicBcS196J2Mi2HPDNKM7qiDViTxfRbHXnhPS1LCg7JD",
  "key20": "QdxSdUR3jDNsj7kKkinG9J7fKQWKEUr8nDBguFCUXj1gro3Ym8Whq2MH6NELNbmCKx4yq4j2bj4cN9RdrYCPqpH",
  "key21": "4JtWNWuMkViYgy8gbp5uhpGiMiRsFzQdaeKphHut1nXHSnrM9Rk2pYhjoHa2UjM3FE6aygEVAFvDXPustTrhZzt5",
  "key22": "6ovzZ9EZdSkpbe6Niv2dzwjRJciWfpZHPbkmmmTNf9LT8L86VzgHYqKieiVB1BCRoS9u5JJ3vShgP1idbrEY7of",
  "key23": "2exa8584v2JSioeBvxxBvg26oTexzFEtQUa8cAip2hkNEWzhzw6sgbfVX3eRcCDYAznxNfNveaKdw5Ywy2dse6Gy",
  "key24": "NQkVgm91knwV4iCLaKU1SDLDGxUgkRNpPKbvAwyhJr5xnywwswbUWP3Qdxv78RzQkyWBrRmrNF9yyLV9ASKEurE",
  "key25": "1295hBpZ9bJUtxQCmL3asENLEEQizj23LZrHWvFgnn4ksKeQAeaw3jSzxeFiggtzBjCukXGMrTcMmQENtKZVEiRc",
  "key26": "3oFm82NmnnYA4gaKaQomqJM8kjj9nGEHGEczBaW56wUFGnH7BtcRd3YeBxTcwMj1PTzfxw4sETPww1SE3bSVEY4X",
  "key27": "3zYT8Uk6iK2qhSRJydVfRAYfkxnQGJyyLAhUeZVwuG3ybJZ7QDQ1uZCUyCmxhgb52eTWq1BmfqY7PnxXn96XhsJf",
  "key28": "3m5ABEe9WhiLQGWXJivbf5TxwGEuHEKrni53euPGf2q32HTANdsVGTku1mY4xQucjpRnV37DakyXNZK7nxmdrqMB",
  "key29": "2ocmpUi7gsVJgcs3suqY9aFTDSxnTJhLNoXupEa39xsEbwmmRnEgKRimDdHzePTHAduRepHXPNnxKXiSgyGa9hU8",
  "key30": "497gSGQva6xb1ZiyjByfaHkJazKQakDjsPgWBVJEbUexNwDLXuUbNuEbVzTEM2Sx5C8aDAxpBMewEwe6nwYTeZpt",
  "key31": "65MrMnQN3LV6YdRcDANtHBudGPnCNXgTTNSUZRFpm4LijG8N15s7kCCoYkpLt8sw7gphqCK7vnF8zQKjQMQB9Xyf"
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
