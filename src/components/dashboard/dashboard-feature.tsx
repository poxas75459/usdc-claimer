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
    "p2jm1TctvYuaisP6fEhBSZ68GDr4zBPaVNQMXvjrtcZ61jq2wbMoHmje3rHpXgdXkwH3dB7a9REWhSxQaAWHsaZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tz7u39fz5VSXhwQhVVvTE5BdtiBe3Q45uRgdZBHBj6Gw57qCaQcRfw8spWKaXGwXYQt5FvUreBDcnrWzqVwZdx1",
  "key1": "5LGZ5sPANbs6iEsjogXK7vaaeVsiKqWkZAHGmv6pdMZcV7LpkwEdzwDif7u12ioqydSez8vTLgGoVSjbGYFZtSnW",
  "key2": "5jFvSdG3uASxowxRmDsUAtdjmNPD93Xiux5QSpAMnu7ovqQKG65n1vDyVW7vtohTkBfxjCiYVZR9SoniFSsPKHyC",
  "key3": "vyXYESh5P381HPEoL8HDEk9cz17AQWbZ7ymiWvUArELERQtEnPBVCoRuAYGgs9DyUetCifRMVWkRzCw5ZMmiTb8",
  "key4": "5XLpBGcnzHRzQQwD9w4h5ToQ3K6e4wRMSsDBkj4HWc18e3TF4iCTVbH8XoPxUf9LzBf3UMQ2sv6fEyUnmft6FebR",
  "key5": "5xyTAdmqLsqzvYqapG63qTxsAHvAysuv68LApoUb7Lc5fweEsaLXZkQFc4eyvSkj2VDs3My49FFxcAXczWadB3xX",
  "key6": "4JSdj984XPAa6gps3EH9hNm1MvBFfJ1epZPi8x8JnBh4h97fsaUF6waDCbmBRnLUguAc5eXxzjDyqGXRXZad8XTT",
  "key7": "5Jp6X9q96H8LUPqk9LyLePe6smRqXm66iNgZnriBcpdjdnxU7y88mggfkPy7kuU7ab7UJhMeuisQhDd1ERngdrg5",
  "key8": "2orwXun7dGc7X75RbeM56uGipJFzfy9568MHNPQAyeiNDPh4iZ8o9mHo2xdS66DGpLAKemEUER5Wg7BBBdriJXjZ",
  "key9": "feB7NNsYGDt2ABwbwMixe2AieE811RVX7C9FX6f91BLF1BpMowvb9YCp4WtLekG9nHzNYTb13rAuaicwzYXzaW2",
  "key10": "iCCCBawvnJvtpoEkM3kED7p4N25PsTafBspm3aaSanTsM43nWaYMLV9L1pC34A7TtSotDYQvg8ToMCAZp3FnYjP",
  "key11": "2GwDnhoyGCk6DoX99ecUFH2SgFBvK4bwBsN8TeZoULRBWdNzJ1Ge3suiRfPFywENPHxmRiHFCyhsrRLqHgkshH9S",
  "key12": "P1XqpwHpVGjRKfGdyYYRCP2QtwJSDH9kE6xqNcizLnwDR4DWF9VhW2fao9fRn2FPByUsEVMfqR73rB9VwoxsSWV",
  "key13": "37Vgf8Ne73R4iXZ5dsZANJkiBzCYDfcQwhd8zy6zYaU19xhY7GsSwWDL4rHDZyXNc2sj3DZ7f8Az5et9pD7Bsiri",
  "key14": "4vMGeSiwg9Rf2tztF641sJWqLoMDFoGgHHSvkcqdRoeDeVoWZgCbmsWtxu3bAZBR5bo9scMB3onsuM6QYTFcu9ZU",
  "key15": "4b9nL9vKNhVz8GNs9MkC7vWaCkje3pMZTz1fhunpKS8JpnGpaVk2C5U3PNkWm7WVxYmkij4K3A1QooQ9Ng3iBCXR",
  "key16": "3A3HuAjSRe6BdkABimBVaH4M8xphizJZyuYsoEy3w3FXN8dxothdUwrYgrrTrGH3KhswpQ4FQ6AqVxHtenE6iYSR",
  "key17": "39zhWGHujgX1AhPK5V44mpZG7LFM8AEW7mjssN4Fi3zRe7GGG3fedWKVSVqBd7PMd67tDiBKCMD7twpTTLiJTkqS",
  "key18": "2M4Fcu1DCxew6JKfD8crpwE3H9uzhpRehicQtvYxTPNtE4iZv1pLzygM6vin3sc9icvsnnGhwLg1hR3ncgFgoq8d",
  "key19": "2DxEM4VhTx8f7MMKajvGmNKXBLUGbHzSTUXm83UxyRUKcuPfj2sdnTDpXPH68FChfrFWhvquS69m5stmcnDXYaM3",
  "key20": "jAdrnqtw5XdU8HtDfDkKd1MaU7AccFwHkNTVTFfnxP1VbgEn1fEax1YAzs2RUafFgEpUzk6joMvpoAcMNRcjQN7",
  "key21": "5Hg4nXuqN866z91K2ZRn4iNy3LS2euQtY3kDGMjwxKX7AkNqaSBHNwsLFfF3KPiQqkSP3UNjAxbt2iaKZrmVFXyM",
  "key22": "4eYwrrjj2AStbJqbh1yxXuJuCdGPmvBhV78xZjHM3zakoZZZa2JvaqmtP7GXsghrcFtpjYv4mPGUso9z4uy9cvaz",
  "key23": "65wdGNrbESj1SNmGtDXq2LgAwaCPBqgnRxCP7YMUoY4jDh7bJV4qup1Xj9AG3pWXXqhxMwhYhvuGH8wD2CzjEaba",
  "key24": "5mALeMYd3Hp3M3gy4wYVJ6pwzRNrHhf1EQ5xe9a3cSeEAVvpWo4cX87TdohTkJhyVxLvVmDCoQT17kdAntrfCw44",
  "key25": "VGN5r3MaEkgbgB62Tir8eeS8qWTNbfU9Mqqr8EFathAEJ21MdBCNVsRdykNvi1oomjENDpoizoEzkrDDKefxSEA",
  "key26": "5CkRXDUuVvHcbW4Z1D7eRxJktD5ik5T44BaDFoqN32C1f8vzTL4nawVbtW28toXXQhUQdegaMLyqqEN5jDBBgXJH",
  "key27": "3tp3G1pPms8StYPcQ92zBCyjetazBsTeC3V8D78Y4LTD7i3tR4Mcp4S6ZwHECXcerekUFPvzNyst6uQ6GQLc3oQC",
  "key28": "4Gq68xKdp3rE3KJsVFCq3kVvir1Q6qTjtt9JgR8kCtZutbxjfwQNV6RWmRRqhE2Rx8zNsS9geXuvKGeK4zD3w5tv",
  "key29": "33AJ5t4VEuESZCsGUCyj5oeThyrM9ZkSGkcAvThQsQcSKyyVtVUXVHaUBBUv1wudEWBGWWvvqjLdN3Qofa4WvYZm"
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
