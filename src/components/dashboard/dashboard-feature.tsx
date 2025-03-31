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
    "x7zd7xjLLD66wwZuCkjMotr24dAAdNmZZzjjrbawatpRHZVNeqdD5GforFMHKLvqmt3PH8kQeoNPNhnVq3xe69s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45smA6HhCPbPqm1n3MdbRJG8b5Km8TT3rhqtoxZjTRcPLEud3bDBsk2qtThfXRMmBmdGQ2Tbw6FwZMY3ypy3h7NY",
  "key1": "4Pue7MMPw4LhystdpA2FsaSt54Z1n6979Dy4NfwEyUAUpGwss8qEUhTGtbu8uDjUvowA99FDi3dymfueMT9D6YZ1",
  "key2": "3Q7F2ukbabvH4LA4PXd8fbBWDq82C4C1WjfFQ5E4pRnmyRDQRNySax2QANyE7DjEba6nSE6c4evGYPx7ZgoqhhBQ",
  "key3": "4Dzmk5B8UAURsNgXtV9bGertnZUh7sAVVtQxKoiZ1riCirEbAANAazhBoxnSTzuNnCZtEcvQAYvAZU5PF2jtwzkp",
  "key4": "3zkUbL3uDsrTGfXgpQRkSBkbh8RAKcjUUadRsD1eYiBhtVMuXMEJVZi2ri2xoKWzno7bvww86Rixezk9y3ZNKgmS",
  "key5": "2BobT7ZTffoZjdFjhNdNqVQnPPSSWZSgWE2Qs4Vqm2taPKQDLVm4dAEY13Uog7tpuhGF9L8BXbo4W3fKEA2BgdFQ",
  "key6": "2ArRJmmJWzmYZHA8Qvdk1bNoRYjBmgjDmvQBzikPzfeQ2vETgStH9FcxAjbGdz48UcEat7c7181pvmcWUGMCnoZL",
  "key7": "37SbRZW5xGJ48tvUM9QxZpYXA4FWG5gsRwykxNBNXQxNwzLYfcuSumLtFUoU7L9vzVkaB9rhgscVJmmwQsG7C6c9",
  "key8": "2TAegh4kY1tmoUUh6xyjqnBtQQdoUQ7Xz1pAxqfy3i1CVe9gvTQrnVYWCDZfM7gDt4QqamzEfLoaVjuJGCYu3afL",
  "key9": "2sZvWW32jHnbcUTuiFsBkXwfjLQwKtXMNBPW9W2TY5BVjdGwQkAXK9XvqbwQ6x91Dx94HyBmKWhL4ZxmCApMy9C2",
  "key10": "32p6hwqR16heLKqh1h8rwkzPNY4TJLdTxKpc8hMSmDFt3KohbKnerajK1rdtiWPNvMYn3FWiTtHfgxxHe1DvUjgw",
  "key11": "4dj6mu76LaFm98aD8dUbaRaPwYj45eB7jwx1K3mQiTgbAxQom8HdXMU1p6JveDF9cQWNK3PHkcxig4wkAewJn24E",
  "key12": "4mxv9ArpCnrbmZLTkQG8dGTEEXiUBHJRi7Bh6NAkBj5ggwaufWzLUmsZAxx2TPGPqyAiGDuM8zkgQaUaZ54BcHXF",
  "key13": "5fL21dKBRBKv83C6mBt1ueNiX3u9cw8qBt9hBVDRH4URE7KNXXBcEsFhJRZqGHJCzzp6r4zatYsjEfPq7Gft3g3e",
  "key14": "3aDyNN5vL8wFFiDTbsob8ZXigYd1BLYhjK7ctVvz29G933b7yUfRgKyKgtD4THHmsVwLVNVgfyfWZbDvXfvGQ4Ep",
  "key15": "2a5szypio66UE5o8DxVBQ3nBjRWETyB2Hmd1ZNTxbHBqnhATuAco74VQV8AbVLaT2p3ADgZJ7z7pgY3Phk5Wiek5",
  "key16": "3meQiRzJB48kkKoNoLcRGK7Sn1RaAR1iafBZM6X4JnvLLmzE4eRe17Wba5evvyajVbrkq1Pg9NGSJS2MLNbMziWG",
  "key17": "2bFY9W4e6GhoZbpeY3nTM1GTiNqtE37iog1vua52yS1PbPvVn8wRPTBNp2sE94as2xdpgC6CARAsWzjpkbrMWXPK",
  "key18": "EyDnvEKrdgGtQZZXcjNk8FmMqWoR4KfQRnq2SHPXwANSHNNkSYEJEvua4iFy7DxxJAG8Rq9oasN9Ft8Aazo88kP",
  "key19": "62sydiqAwx9AZfTLg7i4H7gpfWdxrZgKcn4HE4cS6Exa1frLySvD21JPQuF7ZxgyrtwuAPoSbiK7prNBhRwwVE2h",
  "key20": "36nPpy5AFyBrSQP3uoZat58HSaf8qUjeeoWCTrHL7MnN46nc5Lc3oCLGmyfDYbaFcbDvr5sXE5FneCjpQJCSxS2P",
  "key21": "5Bca8EFDfsC4u8y8n8St5ectRsPneGJdY3GYRywdKQL27MAtkbVy4yHU6vKuQrH35q6EM8JHeFzNN4BNf3uc6T7f",
  "key22": "2RnjeFr8ftcjTgDer6YwMzZXnHj3AVZuwEdGxUijz6xAXeiWwdiBxdCswqKRNJTqdo6DEMLGQSAyV2aAvLTuL3iA",
  "key23": "32GDTbZBR5EKEpfk2yUDTCuPtQNPSF6C6MBxvNfEhhG3CLQqjvEafviGgYpbLHMTQcuRnjWTHLLaXBunkATAJwiY",
  "key24": "3y43R7ZQiyyrfPFA9ryZEUPJb8Cv87kX5QhTxNkk44BV238wqm7WV7gJt71WWhqcCkCyFhBmgW9y8inDxUBrPfNM"
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
