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
    "5RSSf3uEGXby8kk6cJBp8r3x8uXcDZKfjyeQLiv7SoNtXTJLXjcSTviDj7uP3jdWN5knx7bRt3mqHLQrvGUNUGgA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mRUX76mQ9xU6DSn5QFLJQySyA8XytPErSTLwp8dE1N21w11xJSUurde7bJgRBb6th8pn27gRmAkqdPJXqAaYrzd",
  "key1": "2DVrKnoPA3rHLm6N3A6QPvqtroAwQuUEqjbesAPCJWXwoYgWpt9qT6XTjtVRM5R2GxWsBZQnoNN2fq9q8ij4bRN4",
  "key2": "4UPE4M9bofQKnoqpPLvK1Bj9QV8PHAr4MCggH6prm1CCVgQQnX9VDZ4VRtfvPksauj5QXgo4F77XS4snDsKyd9fd",
  "key3": "5mFqVTSAtbztBWcZMGc7YXCV8YJRHL5ELznKs7e7qyjo91Y1KM7Gyf6cnjUHckL5BvcRKdkE3gV4BkMQYBhPAeYT",
  "key4": "cgUkyTaNxyX8XT4rJvwNnadrBmkig84sZaghYsoWRoPz8JsuWWkzU85zLfk4kogzcGXVdYvRLgpQvBNjxvVaEUW",
  "key5": "5dz23xuQ5dsPVL7iptc5QsuTs8ZBZy1r4i8qDtzKmZnaq8UqvR3PuAP9kewvcKJsDdgnrvqFysxZpURemHBpbYzJ",
  "key6": "22zja8He4gYB5qnBtUAsaSx21kU5vpU3mSCBQi33S6jwTHu2zdtkr4K3633kGz4erxo4T3yzEEALo243esRSQUYk",
  "key7": "4gkSSs9eha1RSJaS66zs5rJfxTb3b5GEHtrzkaSkHPdm93mFo2f2StF2upskD176VfwZ4NR3yRcewGu4h81UN8Bt",
  "key8": "SX55LoRM3qhoBPJUAzQVt8C4VKZXn4zbqg4iKY7SvxfeTJbm35uDndQTJmHKLvV1U87tPEMEe667RojHey2nier",
  "key9": "23dG6HPqrHbAoNVAGsKmDXAvzjdgmDemsRUkgu8xCfn4Wj42ykBYQyX6SJoLhxadKNmjzbfT1QGP6tg5ngChYuiF",
  "key10": "4nVoeTtuw2kKHvibi7xK5Ts7dJrTFSR1gPWfomagygidecZ97fSZwZCcscEXh2csa2KiA4xskQLd9wEPgd7ZzwjE",
  "key11": "3Cm5MfvYVnEvgT8tcoitgpHRRmBoggy6W9KcM29EAypnqvKUJvb9tB1bENzH3oTNmqUpQtzuy77Szta5XAMTpB8j",
  "key12": "4dtB8ZmFApo5imkYTScpmeYgQHD1JuDmhz7LjaPrcVcKVeUNWuqhVogcTENefmbbEFH8wWfLKQRoRqckz526PTr5",
  "key13": "qyhJZd7PQRXPunx8DVGw8LgpwTKes9wnW9FS7hnMad9pawj7tajm69KXN9Um1axLtSqUXgvKXU5pUGTWY98DzeB",
  "key14": "ij9gimbySz68aCZCkK7Eoa68HbALv5e8iKhgSw9uob2EQA9SkdWE2LVL8BbhtJWXLS6yE1DHsh7vyRcg98b7kv5",
  "key15": "2mhh3WSkQAVjpzvpsgdCHrHDxNCeGZiKBfnazDpddeqeDgvFLN99fqGZj5cu36yvHzWr3BZEVDu891z83CjESNBb",
  "key16": "3cC6qr1VtzUjW3GwtaSWk4cTHTwpfQqzXkQkY2xUgGG7EgHpxLMfVHCSk7vdhdWYWULLRhKG2cUBGF73jnrLa36y",
  "key17": "3kwhpT2K44b4r4E7D8RtCZNixP6M3ye4Df9czEuEJX1AoaSdzsZivn7byinUDe5qjqXESyC2Xbs47kJW5BjWNfeU",
  "key18": "kqzV3KxnQAKacTTCASgvvdMRbqPmTzTAS2mndqdLt5y7wZXi24GEg5AAu2cSZVH4p53FYSo9AZR8wijTTfGuMMy",
  "key19": "CEqHCmUukJbYhumnurJ6nR43qJFER4r4Rw8WcngsEfr71CH6DaBRPxCnGLKa1Fp9ed8kwSssU4oLqPozY6UcNTF",
  "key20": "5STokqo4A3LQgRxqXiqnUmYu1eV9U4nFCMjxhvPTMtiAnQ6UZXX86F3YGURJQdUkQe8S6GnLoz5n4Bk3EAb9LHSK",
  "key21": "37q86PuD9XocqZa9Q5T4tzEsdbkYY9PcEi2CvvbEqxYEP5D3GvYYuVTYWibU9MUALxbeGcZprbVY1RY4uJmygDiK",
  "key22": "3P176btqAmQhuvUt6EyoTBL7EpL22BVRsCbjpnGdiSYpEMfMFGM4BMRi4VAVZuENpyBzTNjNTJpcanGTJSW1Vph5",
  "key23": "2Q8Tso9gwSSMp8pUTcZLia6v3Srmoa5oTt21YGQ8fbq2zVc5vcFmrEMhzdQQngjDUawVmkbEyCGSX92S2Wg6tQeT",
  "key24": "4AMsexwzajV6y43vTNPHMoEnRAaBss6rpshZci2js83myk9qyQCQqyTUjn4s3Lo2nY2srSS1oyeybqd9FFrSvS8m",
  "key25": "2BgNAJKYcoZWE7rbFHZ9jMGjjD4AXqDMikQ3Jwgk5ySdLvXca9WZuCsxnuG7Chr4HoHH9jQ5e2BaMNFQpAhiw4Am",
  "key26": "4NSJuvukbkZkvs2gZnumWBifGvqXJVtf6PtNU7egNfoTnCdNBsEp2YjM6iNsdh8AcFXKUyHNN1mr1YgwL7QDX5Z",
  "key27": "5f755pLozhLQhaaH63AEBkEpwyrj6jBwRu9Rw9Ryyo73hQqsRsac7uN14F24k9cSo7LVTZfRJnJnPZ99es17k3TC",
  "key28": "5ooQ8yu4KvS3gLSGnb4YaZTvpV8C11iyevijdRC2Gp9J3z7K5Lf9kFpNiGhjoa68mFJivNiQxGXFqzYHjxnZJt3V",
  "key29": "3PzTfTiNRG9tekzBN77yFeiBGS1G89pksdoaM43Pt2Yu9nk62Fuj1pcKMVgmydEdCXyy74obkUmSQJJFoYp9JNAS",
  "key30": "3YESHseQGWYu2wPDXZ4BRg4Xbz4gHwh7Y6X82G3AYYm6pvw4LDCiE25MmGDoF27BS6Q6RZ9L2uUF1hn9DbRAoUAT",
  "key31": "4Wt3UmCjcc9Z5QbodFxLpNekSwWoCvEmhBgVB5A5G4o55KD4uDFsDw69VqQZmpw4e7k6DYJ2JaGoNotMS9WUV7GX",
  "key32": "2cLQw1GdKk3urFhNWd44Q1wjhA6DgB9CqbQaiDy4ptmUEPvHuUvi6k7ChgkP7Rmjakxt95E4kowGZn3b3QxhxNVc",
  "key33": "sddRpkenyPGBPt4842ZgUN6gztFCjWvqTwrA97BjQbtFTjzyJbb8xrPVUHutNUsdZGRFXsEoPmWCkM8jEiry8SS",
  "key34": "58oxJiZzAzpdWjnHCckvs3PUNPUoowr26FNQzLLrMuDTJkFkRrHhBKThJKGLDRk3YhiL7oRpsjTK1YVwxFz3Gt5k",
  "key35": "2zKSNQpW9q7rchhW2QGexLAnZFvtKNtUrKfMzuoSaRAMow8sxB5Y1aD2FyfgE7BkiQC2gTSYuxS6ppsYEwUVMYpm",
  "key36": "5BRGeYmQmk7oaUav1hjyvbdjyDQF8oG2iDtP5Yxq9CF9M9ttByXmmJP3NJNaNEgF8kt31W2Fpr84nNkh2qfHFf2P",
  "key37": "CJGhM5Vgq6hxH7eShk7FSJ31z8yFyyUU2vNzSZQ448wXfoH16Y9fq8fJycyoKHBGuXUMnVr2gNs8dWkp1tXSvWp",
  "key38": "27vjfKGQuWB8gegvzPTbgk36HbUXbC6P5Mgfuzv4xsiVbKVgfC6dTgoSF8ZHDN75n7v6Dz3aU6mN8sRwUtR2m9zj"
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
