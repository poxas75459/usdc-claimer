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
    "2S3knvNapDApMQt1Vvr9ypS2tXk7joDsyeDtcDjQKxNwFpVRrysTxkSjkQ9KT6XQwJjqni3Wuq9steMw5z89H45d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47sGpjuZigMUYRK4fFNrt12zbPBqpTk7w6uhqv7w8vyYdEC6SUb1CcXmS79kGa4JcJUf9RawCLEYPPtmbwN8bVfv",
  "key1": "1Q334YdTsTygGsCUn3SWjkzzd9NGp9QXNX1BrhKzDA9CPc9V6wdfeuDVZiUMGE2F9gtA4XANpHrCQ3XjUUZtDwF",
  "key2": "5yKp9nWU7pBDrR17CfQ7CiXNXqREQ8DBBTxF5hCQi8JBgircJuczggUcCqQAfDCrRczCAgE5ZSojZWegf3UjeKAY",
  "key3": "2ebxeueEuv7K1DqwQjzrbF2nkWUZqaRYDvxk67GWH9QVTJpDKFuy2FyrfSkynFuqRDYJrSceRPoS9zb1cL7hjAw4",
  "key4": "54m3Fab2ZU16LFQXYvf2jybY6oEzXbEBXYEoaGsFmrYGiJKxdTNzKoSTprKvXnHEiziDxvr8BXoP1P4dWyiXE1KM",
  "key5": "KCVYZ67AuxGmzDo65y2WFf2RCGvrmL2ktbaXFavLB2STp4kARg7vjqKwumJC8wEKUSRnV51gmCyuEf1xEd5deyJ",
  "key6": "FPvAfGyZkJivwxRhv7jSpPjP59wxvcXBCcfUh1q4tij5mtF43Gs4crSP1njvbvoQtGJycSK3RbCgnB7pkvgGXtM",
  "key7": "5NCv1YFhkXveRjeWbyAaUZvkyABNZzDNa5652uyXwLnjr9M9hQvyGpkxzdpttfR3Kb6XihcvhmqryDt2fkBiDCR",
  "key8": "APbuFSzFSDgyXxE82RSFFygQKMrCG3CpQSkiiaPyPimXDmJnwRNDXBhu91faa9AU9TUCkJNGkvnsCnpvmbpp1tb",
  "key9": "37eiA94o6Gbi3zC3A7qvCiRpNpiZ9JWE4TLerfr7kev1ftQaorsZpkLufkk4tT69XUTN2Wyqz57TqQCazZAFHryP",
  "key10": "3bmcbX9wnp81vmQSW69Tu4hERvbyGJ8tpkhVPhBohTomLiFkm1hvCD2dZN72h4N9tLUH5MCuD1Tiz3LarbjMq5v9",
  "key11": "5xaMTx9bnmKwsmvmRj1krynPHEBoGWCKs4iLsYuAHdhjwn5baZ49G68RwqzbPLutqqEbgXegxn8wx5Cub6AhCfjt",
  "key12": "5QbMnYAXDcwydRAY8S5xZFdM2fWR76C8Pksxfug8EmZEpfWnfWoGfq4ov6T2HLhpcSQ88v4yeFJT1WxbWL6a7HPW",
  "key13": "4M2QWW5ays3XVPgoRtSEkfWAMjmEzFw3mXXLQPphofXhCzELgsGEYjh8wUwAY678Aaby77v9AsrzrTfSTHHUCXKP",
  "key14": "3riioAKJpPuTaJpBD8s2WHNioWctGcRMRYqL9f8tJT55MD7UXGMhHawpLapmZbFGwtERRTdJDJzYxvF1c4gPujEC",
  "key15": "52wpkS6irkE9U7jKNhwiPzbPDsvBFFcHXvobczDUJ9MwyMgxARVGADvFapeuyssaVnobxaYPHEJTNTBgW3DGVZKb",
  "key16": "ra8qi4PpgcQCQo7SidivAUxWWX3Uioous7LgzjZw1rm1bzX1CijxGrqtWYBfmZkxAmvCEPKXfv9MfpWzkNNg6pS",
  "key17": "i3BuQByzmYdsQt5xnWJ23WetnJwaxBLcoY47eAwULupibDiVaCpnwtDzymjLrhRSWfb7Uzwr4Zrws7fAPmaKMDm",
  "key18": "4UvwXDHNC9iy2doM5m4dRyWya5Z3pY9xsfjaQGRQD8L8tLNCXGcVk52bHzEUrNoCs9A16eMRsByH3h3oizWLqLtp",
  "key19": "4ohjak1vk6qurxxLWK8jEva7N6yWS7iNxmgX85s19vy2xG9dFgLVu1GiNR3pGHUk8M3tBDY6Ff2693E4NtfaS5ZT",
  "key20": "5WXeBuGBrQafjQztbVxAXwooJZwJvMr9RaC1XHU61bh5DXB7DbHeqrg9v39Msap1koXzShSVhrC1sXfkbHPUfRSC",
  "key21": "2AkyiQDti1zwmEyH4pGoWZ522mqVTpjqKA9p22nyCi1DyUQLEv6ranMzgYAhf5zbuBpgJSPEdtwnAndLdCJNKHZ8",
  "key22": "4rNe8EMQJxaHzskjqxstk7PWxoXZ8QsEjzsmKKKTSSKB9F8jYqHtCQPQMbCp41ETKyAn9gSQQpXhZ8iTBZYC9qDj",
  "key23": "91GjjxQPjNc5UQvjDPe6JSyLrE6Yx5FKXy2FHEVpPNQhsdmWXcjGvxDx5VWnDUJD7Rm1TkpsGVFQGJEnEzVhYDT",
  "key24": "5yppDn4sVcj5TDmCqRWv3yAjRovBJQ7UvK3knsk5ztn7Jp6LxqEnQKQnbzEf9YHbWnNon7ofRnQajCwtUDFcGQtR",
  "key25": "4MvP2xFGhx21ZJQpB8q7NCZKohRuXUaBrvANukjWusX5NJiNZnxZL1dug4zhMWQ7ZgV3hiaY3cmAM9tUg2svnRwk",
  "key26": "tjFhGo798u6n5ysdH3PvJXBsET9mQqNiZZsHb7onn29X3Y2HsAtYC6jhodvwDejJ2LZcPXQ6GWcV43LUZWsej8f",
  "key27": "4oM7TWStYjSEs7PJGJyWkMzfY6wsHtQ7wMZ5y9ixdfURxFSNTwZNPVwXgn8XfCbpVBSRBv8E1r62vxcbTgzpPnC2",
  "key28": "313Y6W3sueJiYZ99q9w5qU8GktJE5YCZatAjsaa4rTZAQufLirnSGK5crS4F99WUpeFqTRkR8ThvLqjdZhNNhfeL",
  "key29": "2M1xgiNasiqJA2rdJxSRASZPhBTVXxXJztSXeqTML4sxgUsj9nzxq5RXgRy3NnptvAkR7zytWSsyL312SFheVivV",
  "key30": "2PMqh7WezpiFh9JxtLptgHj5SdM4WsxY48QoyS8BwJnN89BjJayhBw8ytRE8sLMuhpencmwDvmztD16xygqHkmcC"
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
