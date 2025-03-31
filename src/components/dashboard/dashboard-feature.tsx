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
    "2ZtLMgoyd7bi6zaaRzXYfLAbErc8minT5eDiwosLctA216NdeEYESz5EkRpAJY1Pcz7DLYpxeGsQJv6naRyZxEpz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VGF697QMuoCtzg2ayq5t54YievXsZ5pGjUZUUCVhdjF4RMkMeigmmNMkR1euYJcf8Hr5Ra8ELZsst3h5zQK5pcz",
  "key1": "3iwcZZJS4tbRgceeDzsTHpmpSUvvdwixKKfBCJX7dLM1z2bJmPasuM9ux8M7NSxgSn4wH7QZ4SfFdUb475iSKd4u",
  "key2": "65MgcEvh9dSAAvuiDLgovFAtW7RSbRanooazTPTEtp4kgd46e3ChFyd7LndodxN2TYhk4wGGB7W6KTA9HAHMhzuk",
  "key3": "4fE6e9PbEXmcYBPyHucucMAhgh59varTsoN1YaHLBPkPPU1QQ6JgKTvBtbA3ddqG1He9SZUvEwyWJz9vXLarBXFF",
  "key4": "5a11k8RQhADoTehbPXKRbBfigLQEjo15PEC8r9GkJSbWNEEtWLvweSzUQXpQ4eeANWibGp3BXmeoCADNYNCNWe9A",
  "key5": "uao8yxGVJvH1zGCBNZS1N2PPa4edsBnA4TwaDNTKS3ykn44tUutj7fRKuJahDVSqPLJNe1BpZNY9uvVthddgVvh",
  "key6": "5656aBBJWZsyymYNP962gegPZC6poS1wF8U8C1hYT7jBVnNewN7CAyVQjc9uZ9HhytffxRQHMr7tVZarsMCddqwy",
  "key7": "5qhoC7BwS36DNJEJwwPwWH8vi6ybb1RsgvE5B1KCFAnrdBiEGgJ4sB7H53cK1FVaDCgSu8CVPdGzzppmXCzX1mf7",
  "key8": "5SqwVjg7kYJD7VRzaxVToJcV6eAykTCmxUV32ch5Zdk1GWzrCakcdGrkf2iCL3JFKaQkVMvG9M9Kp1g9d1BSsQcr",
  "key9": "2L9dEhehbtv4LV1XDrUW6qqMCL18yKwrU5UCaLbHx4KkmjgLjsJpLb2cCUwvQFuEb7Ei8p77ASovyfWfoNXxdkTo",
  "key10": "3L4gtgayRaiz4uPebbCvLkUqDnXeDcb66qe9uKrLk84iz9L5HQDNUuw68bsMHodSK8v8L4eAYwXDqnH167tNSVeu",
  "key11": "PtkxEAKogAdm3Nk6msuRnFh3K4WzRDzeFNxn4hsJE6kadvoLcgkhcfXcEz5uteyrUVWDXCTtdPhXuCRb6n74sj7",
  "key12": "4YyP9zbS2r36MDRPesZnuvpe3VDM3PRbKWL8DqfJRHSCS3XwV6pcBJ5snq6qbu5eViMBjYUPYgFnjRDBZjUrh3U7",
  "key13": "LrXErwUUHZHRDrgwYvzqH4G3DYGm1uBUUtoky8ArmNrfuaUyBcDWZuCkxhg7jqCR7Ji4Uy72rqFJmwoGFDcVgXQ",
  "key14": "5ZvRqedo8Yz9VjCCRGtYPp5nfd99VXnUBRGri88MXYoeDv8jVS9heMuc9ZQdypFRBVhZhPuYpfgmcVvmmAr9NHyR",
  "key15": "3hr6ccbdoCr51LYY2imdkatHBnqKGST748TJGjqioCghjgDXeZzF3h3WYRAZhjtHNDKEqvpC1oq1uobT8DXcyJMu",
  "key16": "4Pj8weu2sP2TB8ee6kwJ3kfrWmowVS3Jk2sDNDyq9WJ4Fz2qRU72jfmbUYmxkyEzUVnb6jT8PN7LVU3xa8DmzcmB",
  "key17": "5XPsge5WpUrrtHBDjxytKHDd2rv2cbE3fMDPAKkzbRQ8ddeq85t8xVoCrTwfVZs9XvEaHY8DKTbqQ2ow68tJUZbh",
  "key18": "278ud3AGdR9Txoq4ZZotKLSb5Q3sjSdyuyV5TGKRTDtFqnPtzad7V8i1cxhh9AgQ51tKR2ipuWNJRuBDdMiUqf2A",
  "key19": "5qLSSbPUNrDX67W8euV5TR4UbxrZP87KXG7AVoHL4rb2yXgMPHGsGJnT9uBvfyAD1hehTC9UkUwqUNnEnuLUfaeh",
  "key20": "27NpWoofU5jpm9rwcM65wiFoK5MkSKCCgES1SusBANfUo3ACTE8agKzzxipm4Sv9fCnNjpKKGmRNFDEk8ptXDC1q",
  "key21": "3vWkEkR2esD2atHmBsC3YgPvGYnT4YK94ri5mwjvcVc4ZzTLyqjHfEFVJYTsQmsHSzqxehUXC9ntfqNtgRqUnRKV",
  "key22": "2MhaT4SGkpmFJKDWAqCaKFWYTn1SbagK5kisYrR2Hwfnos8Mu3ozaAhkcBkVcN6UGDj7gLcBVBA8hCQ2DVJ5B1V7",
  "key23": "5wVZdNXrLYzS13CpoE6j1y27GtmLh7Y1CgRpv2ZaBLKLxWYruiUNbN5NQDwpxHbtAr6rgvLo8FaJpRnjNNdZbkiE",
  "key24": "2i1ehWJtpJo8d4Qkr1tFLGQe7psUgod8uVJCbbMCT2yFMYD6omBqJMyXGCYKM9WEDpUFLEhWTtkXZrJ4yZvqEQRa",
  "key25": "5xST5JEuuo6QMnYV8P3FqXsj3ir7m95tQ58Yujsrem7LSYSfzRrWrvEC4G895AkobKrWfCRf6LDaYv2WpyFPTbH6",
  "key26": "3gdmYFjZq9EVrcYAXwGFBUrNxPfuBfmVfHuxTMcNv3SHHCUfLTFY4d4Nb6p9H3skZaYTrYbm1DK7eJ6NNdivGaVP",
  "key27": "3gVYdrMb4nPJYGhUzAgYRboL4NzsiPa66whiAwin1uQriGeLz3aFdQkUx7QpsX9m156fxTwF9kjPEZ4P7QVxrs4v",
  "key28": "4xZphNiphiFeaAe9vqMhxnSTmLPfgZFsiDNgJFtCbXXgWvuEScFBSj3gF486bcsWBS3hsZES5EJen1H73R44W7Eg"
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
