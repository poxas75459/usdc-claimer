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
    "29AdQoJhAcY9xh3zjgA7tafKvw6o5oP8o3fFREaYtFygk1xZythsSqJYPe2GkGUwcY2VfZLCvHJQzESHJ6s4a5dZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d8vVTcr4kRRcf9hxjSEhn6GJqW9rbWFgtdqCEKJEUMrQ7nyFyPVhyfUfGH8Ljp9RKh7aL8DQePBE4hrfmJMYC74",
  "key1": "459oeC5UG85aUrP7t6t4NqhjxzCFT2vzAwDxTnrpkDmRtGEZJSAgDgpxKCBmnconEkYjfQaHQEFXomaE6AokNtea",
  "key2": "3pbCLLKgfSzfS4oC6GRCh682p3kQuJWjfAjWbSirUUpyRc6pbtSjc1BWB8EUbkkxh94LJAoeFwee9o1jb1bngcy9",
  "key3": "FmVQmKyXZWZj8QGB7EQ4vJCpnLAMhXsokg1NT3gZRo65SyLu2o75eBQ3jBBbYtJmXAZDE4V9JWCwjDLJZ1zHPvu",
  "key4": "XLvYf3oC6vNG6S7ZWoGfd2arhv3q72Frxo8RQm5xDyQhPq9Bdvr8uweigD9aozH1yH2ZW5z988bR8EEUXr975HX",
  "key5": "21yp4yAzbo9WQak6LcVRPCaAnwXHQS5mSvVz7MWRqE7eNGaGVWMjJXNsZsJs4XfPbdnf52Y5AZnCnfAAKiBraEGP",
  "key6": "4KRhqSUcmzYMLtkDJvuescRpLmHDAoPxvt4rczyxZaXykAAKatzKdVqApRq1HS43tAm16LA6PyH75ks5VhMGxrd",
  "key7": "NkbsdvnBfHtecgeswG72417mptky1uWqyZYcZUGrkyz2hJNuaL9oWz2eGAUCeQaYaJPoWEf46JxSZYRvGe7mNBB",
  "key8": "48wjZHA9VtQvAk8EmsF1BFfYv9C2VYwFf6yGxqpeAxpg2FwqZ3NUrK5abZgAfJaLgKWWQDHF3JjbUXMKE2V83phq",
  "key9": "DjFvJKjRFNv3W2MnaS69ay7HSpj9q4cV3Uaa1c3rzBwwyJFdwgtwBV8GXdQy9QUCFAURJ9JgDkGWVFVTSwhnvdw",
  "key10": "5ipikaaKCcuCcs4S2Av54v3GHn4KZ2Xs6dwkXCu3hrXBo4ajWk3twXjDHNR1buiGP1o7kXTzSnEr7gBq12bLQQuJ",
  "key11": "3uQwnmM7zHz82NgLkYv4JMgKwk3xyoRAPZX3Z8wzG6T3fdgra3o56HQrCyHyJMHEK2ftaaBf7azkX6T2siN5noai",
  "key12": "55drhCqVFia6Kk7PU73m3CgegoQLEwfGBpA2J4wDvvqcLwGMsjckPTTMYNBWVnX9D7XEYP5as93CqBqtRTg5vamT",
  "key13": "3cHw3e3mqfAPvH8nsKE8HPi6gEn1QQaQVBjRwF8Vo9EVhXo7nxgUGzgtAwXEWs8aeaNd1wKKgAyxVQMp5VEDdKgE",
  "key14": "4LiUcugV4YobejFjD3G1qT7LBKhJ4Ga9uc59rcYJs2CBEMcMQYfSGvuyW4WsuqnsX96mMErvpyD2qHZaRXgGNSX2",
  "key15": "39kFxfU67HvYZRn3pxTjC9k1wKj2pimfBZAvTf3MJaeoUDFdWLCp4S26zYayhPHyk1CtXKU5orzJBigJS8B5c83m",
  "key16": "3dsk9naE6LUFt8bH6KuuVqhwve722SFLUyBFXDCPDYhBmGpQo7BYMhieN3qAzwVtmFfrYT2Uyj1XovKTEH5CJCPJ",
  "key17": "4EpQdZ5xqrTCYaozUAYYBbUe7M4NiiCJHEmNH9o7yg6aVHncCPMbLYmmZrQKf6sfPgG8Gp7RP9gJSxat5cSrUhtK",
  "key18": "4Fxs76tmWS2YVwcBtJVHycgyUYdumwNL3BpNNB9f5orBJXiPPoxv5uLRAr2XkWYrEVuu9Gvn7fXt9ifZA9SJkgqT",
  "key19": "HCFW5e3EZybLQqHD86UggkqZYMhtzZ8PBTsHgRnV3Tj5ikDkZHKREX5ewwnaFaBdciwvYqVohpsdi6eKbYodd4b",
  "key20": "5CvtZ9h1CJzak2WguPfBgSoFX7SCGurxMeVAo5ffqBXmcrurDoihbCAsX8tCyRA1tgdDDZiCrkfFoMB8Dz6ffYuE",
  "key21": "2ubCsgAhuU3qmra4gDb7vT73WAVcNJ5JJcSGHj6mC9C83AYbBV4dTEzXQoPyABMNRGFQQaYw6jwy1EGtwxLFVtKV",
  "key22": "5AQL3P37zrwZ1wThfojtBC4phGutnYHDTwiGG2nkRyjcZoaHuqF9to7ShpgL33JzmfCyghiKcLb7RiNbuWSXR586",
  "key23": "3HsTyPtGGpjnjTFHyJe2DRWapxA8JC4eDcwegCGKmhhPtCaDCcXSCUyrm6ZCSbZRijYR8okK2DnoBMyj9xGtTqkt",
  "key24": "nQdGaM8YhuFXp8zjbDu4hgWM6aFPZnpqW2kgzHu1wa1eobiwSu4Pbi7odrNMU1epT4DdFdNVS8ixdZKaAvy8afQ",
  "key25": "SJqFu44bmiLASbc34dJLrboyE147NsVwu2dp2i3s8A2VtAQFvzvkZwiFbhgJbZosrLZjL3NSTKvQzX756mHPj3j",
  "key26": "3bTgdcvFrsH1AthRuRX3QfcHEhshDBob5ar6ax42DkHu7tQwr1eX2cGApj31Y2unckGadE1NzLP6R2zZPYhzxBje",
  "key27": "5nySPb1aDFcyLRvYBSGJEtaGanrEcDRTo5Fc8VGVYpATX7gTGXg1Fq6QLyov8vhb1BXXRRszEC1v8be7g4VsqGcE",
  "key28": "3S1X1nyF5wqzmsw9Lh4Lms6EzfLKP2kzfoJkx5vDVkNpNTkRjDFdWHtQuGHyrJeEeZJ9g563FmDg8M5NpLqa1tnc",
  "key29": "hMwhQqnafZbfBRwVYLgnvWvJVo214evfEePqBR7B2UpgHxPov2kUM4CsxyHVwoSSUu25XbGtm1x9yanJN5cgviy",
  "key30": "2WV2h6dGRt4dUbLVkWRGmeAcYA2aVnuKL3uRyqwnNc7HSSVAwTFdRYQW4oC1YKKHKPdNgm9PDykHgsmykgZ5ohyF",
  "key31": "4Lakf2ZNALcAeRPdYNXFiEauh2qydzSxSoaTTPZK849AogYgq4hJMU7nMpi4MuaFiRNAjVmshs9TNuCE3c6VN5Qm"
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
