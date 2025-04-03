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
    "gQW4rFw9YxvXfR54S6GLq9BXvzbQWf5mqonkkic7F6asU1NoHRv4HbhVsZ4T9Q5Z2M7L2bxTg8nyMhSDZNdRFip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47Er2SpiUCWPuQDrLQXaoHjxQq7VV1iJ4oACkRqcMzJzAj33S3ZkZMfCkHRgkAwjFN7DSsxZ4UV1fZgwK88oG7Bx",
  "key1": "UB1nAmFTf6kLqhXQzJNNEMUL7k4TLQAYXZrkJTsLyk7L2H8YcDspCKeBXrMwkhu1pGKffpgPBPfHeapWqhNaW9j",
  "key2": "3hdgiPNXxp91iHzBCKc8bDrKmk5sAPMJB67AnqvugVQTtbHUGPfn76hryEPFGtAaFDAhAwX5R7A84HFKmGQVCJ5g",
  "key3": "5ofpDkfMMrrCUNDVW127UiYmo9wXXnucSjHW2hk7w71kBjJ7E1b29dHWqz4sRzYRA7a1X7vMWhrgULrxuby4qREN",
  "key4": "2Df5YFGNC4jnE6rgxijo5t6GXVoc3H5uHXMJuc7BgGxLHbawHtoJuHt92bUB9TAPUHHb9FQumZ4Q531b34M9ZdvJ",
  "key5": "5hscw2eSuUQ2aZEQZQXmqqgA5RLoDJpNq8Pj5DsGZUsSrALfy8kKGwSi36tKWuMPkQ8qDHtF3UFCYZ8hGaNUWzas",
  "key6": "3a9C4jDq2n7P7NQ6zFuEnMRMXNjg1Pxm9BdxbhPt1dkVMo5MTbrGzrKU2Dt3PXUPcP4Boi9yWsro5krufxE3YNc2",
  "key7": "2853LbaWmGaPRygfVA7WUNQmfiTYaH8PSUBaiPeehZERvxtRfRNfdyAfodruh5w4ofSSTu2verasuFE7auY3hzcK",
  "key8": "4erLipXm6K7ZNuswSTb43Am3dWjNfQk9qw8wEpJzg667327HFVV7eYhLZQsYGNhinNigXNjF2X1oVNEmJaSJvXRj",
  "key9": "FAsVTXFfLG4BTmNm9QaBqVTyTk4hesMngnaTaikquuodientRP5ZGr52xger4FuiHcG9GU74gbYBXkNCTfZbKkz",
  "key10": "4EvoUD9LmPuhD8tzY2PLFrKugt4QKeDat8gaNz9UU41ujTikDFHPqiXD2jJ7c3vQbKQrNjGeQdApmRW6QGZVM8pZ",
  "key11": "2ZCFJe7ji1kfU6AM5NCC6Y7kJEs1HKjZSUPgoA91zCoyxCk634e7uspXDNqEUM9oV51wz5Nys3pbZ2DXNgBkYDQz",
  "key12": "qgogvnP5ZFjqpox8JFoUHfk2eTDJVecA5diyAbzRmXZwwYEPAnmgCbEp6r3n5piV25t9YTDsdcKWeyr3ZuwQXGq",
  "key13": "3kA1tV8RhgKsEA4Fcvdfb2ZKhD6GRkSrewx5Tm2M16k2zPvy9RGooSvEYqrnt8rt2tTGa9EQpGXMPxAk84Xyu9cD",
  "key14": "jRuydxdEr14UhkPaE2j4sdRform93dtT5BEGMEzMjMswkSFRMQLfqJu3KDgMrbTC8o6TCi5DgMGz445owoGSok2",
  "key15": "64Chthx17HRKFnimzWG8uk5gYVitcdjjncNqaYmNGjgdn7QtikVGzoA3CjRTKumNiiVZL6G1ZPvJmVFtSENwVF5d",
  "key16": "PxDuYUEygXbMTkuFoBeSuz63qRUvczMHxxCCCGiaHu6ZPpjkTBiPoAnk6xdfGossGYUxGJVVsHBEzz9wdGBRkEF",
  "key17": "5dQ5qRkPYTpdQ8kUoKbQRs7aNVVPxuKtSNDrkWz8NAAGjUb2hiCMoSJKNmwMEz7ijdQeBx8dAUc6oGkjehGLRBKX",
  "key18": "angGGxEbt1zGFUPwuA2bpxxALntvqAtrWMw6raFcb5cK84ThQ96wDUpzQbw4RceXPgMoksRQjPBueaqHnany9Md",
  "key19": "3XfxckkiJqYTaVQsvG62x79DenEqQNJEzHSU5HXYkHRrWLpm2SUtviMP8Vma7YKA3NHHRxgHj2H214WyxFunyqMb",
  "key20": "fjsXQbvyuAVogrH38CQJ8rcpimv2hrbzpqwDmUi2dbV3jonqVVnjYvQ1AYiAoatbKQpgaWi7oSpEUJ2LTLXuWNr",
  "key21": "Rifzr3iasdmJ2qK4rzr3Q5XQQzt8SPi4RnoqyzbpqQ5Xcfo2DTyRTDNV7vUuFs1GmY6c5qxscvrqpZunumRJP1A",
  "key22": "rdkg8JEAsdcQKqzpaLzfRsX5EEQkgVhXfybWf2fXV64XzXmQkNXPBsEd3cvX6J6NkuYSUNYaS1HA6qVdieV4A7Y",
  "key23": "4oMxEYNUmyKxgzsCzqK2TPyTXT1Juf727hRyMJm5BRakAzVtvwYBvinbKHUeJGDHZaS6NjFJqxU5n1nft9jKYcSV",
  "key24": "2XDsCSi4SbFThWUP3zCEBxQTih1ZY17m464g57bak6Lpsn9izAnHhqdjQ9XXoubM4HaBCNu2SGhezRcGVLzyNF1L",
  "key25": "4NcNPoB9U1G12qJJ5uLBks81DyG1P6EYRxQHJVidBovDb1qdGAddzKQHoj1tiLmLj87SAzLukTnAXWLNW48orc2",
  "key26": "4paF9mFaL8SS1pjheY2JyXgq5QysauXET1nFzef2Q3omXWnQDy7L9NMh1UhaMkbZUfTWYyrppPUpahiaf2Hp15oP",
  "key27": "2zfDhuYw7SscvN6t64oG9jA6g3LSLmn8UsHLaitSv97XVsv13Gs2SmstD2twmgMu38aLyxi1LRPMGBNCveav37bZ"
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
