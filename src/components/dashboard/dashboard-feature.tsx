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
    "9uV1zqALd54pHaU57nS3zJjps3jf2azccMao6ivyMfQQ2MbnN1AknFzLVYqANrjjJUy7Zta8Nyq5TBoUbiu5zD3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xgF78Uv1EwTy6jECc7wtvWtxsAgzsjGxJsCwfE4LmWdEm49WgBrMeUd2oBBJZgLfwhN4FtVirXpJn8mBt6va6uo",
  "key1": "5tSbVBDWt3xW3GfZVfPZwBFtWzwzqfvEZRSWm6gR2oq7QcXMNcbvcPfauYoM3kUU6WJyPxwPaw9cpNFZFsq9BALP",
  "key2": "5tohUNEUJMJRDTT9nxEF2CJ25hhHg23mFpSzn1zfxfyzrT3C3EQhtBQ1ryrm4XPPL6d36y9iKPK7yooBwZP4s6Nw",
  "key3": "67bJSi3MhkC5wRWja48UNEKceCxDxyacxidMvBqPXtBamUF5Vk3DUYz762aY3PvaGeDY6TzeNRc3Ny9eFPkGa3P8",
  "key4": "5wfyTEzVHk99T1qBmqmrkmfTSNC52G7LEqJARDVLwN6h8tncfJ5Uu4ygTTZ8ygoyD3UAfFnmUNTMpZu5LHEJtjUy",
  "key5": "2RB7v9Hitxc1Gh1SA7enBCqmoi2dFFSxibMfHaMtGBSAszE8QuXZfyDFg5JTA8v4ozPC33ZsBkcijPdMxVkdtzMT",
  "key6": "53eAfgk5pRdnhMioVWGVtJ4UA864a3T4xq6zydWrrux7BCKUVTaLpqwaKs6XNyUx7N5E94g4T97tWpdYzFgyoNro",
  "key7": "4zmq1WJNuuhvmdUY6aPdKBoSRgbKiNpy6vD47DHQus6U48jTX9qJ1YNfmAYzY8d57uEiGkfezArSFhUYhDJEeu2s",
  "key8": "5waTVvw2GbhE1mYg4TTZAypXM3EBj3CdmsfcFernZzm7YqNFSpR3P72RmLinxDMCvMUfYT8BYVpTEDucehQj3ojh",
  "key9": "7Nf4v5nDzJDESFV7um3ypdGT3CJC2yn3dvnBk9XmiejKUhsrPUVU7wLQxTsywhDdY5SNZNF46DoWHjUHmiu1NLw",
  "key10": "4CjGRJPZcW1KRjRmpraRyDZatH5dyw2egNbtMiicbnXnXQU8iGjeME9MgoGnu559CrNQuuQgQFSBK5QKNweocpEf",
  "key11": "3vFy99D3o9jGUXACemR8t7gfebo6KyLQNpEJ89yx8DpFsSaHTCJim3r4ibzPVuKBa8USAx7wzcasQwzD6LioDpie",
  "key12": "2pE9ToKkNgpUfqQ82sJY2dGUPhJYCnorJNULPNxGXmQBLSYGhp6vx6bTWzVL5TWH4RtNdLdvPaZsMCykTHZFAyca",
  "key13": "456WhXJGyutDA6UKWNWeyuam9Nthq7jDdJiLNrat5oZYAaQpgXR4KRQvoe4GkfohZqgENYWFYaf5Bd2zqNQRSFxK",
  "key14": "46pRacycBWVDWENkdCTJMbSV2xKACfiAhwmDjfQCuvSkxETd7esWgQQbhwD82oBYk3AEwe9aoC7RdoJhZPgBnHiK",
  "key15": "2H4mbdpq2XBKFSX5YhuSDET7jcMfBR2pLWxotsFBGoaBiHSz6G3Qn3RtSgbAn8TwPk1YmfVfYt3a7v16SxmE1p3t",
  "key16": "3h792SU1TSb2a5Yt2inFT5dpV7pQ5KSfEFKfkLznY1UTxm2A7B5AcGMnGsnvPNcAfjwqc9ijZjUzGiQeNYfabLfq",
  "key17": "2Z8cWFEiTzVRXHGwd434SyGHMvnZ9JxZpt9ahBmbA6MSZogYEPqyTEUHp4YqTyWXPyA4vsc9iweHP3wFq6NtZ7pK",
  "key18": "UcruV9CAc7xg752UPjXAQRgttsUKyt6g9hLqw4twLBUuZwwsDUYbaxoSgakLdAyNTuzGaGURFsrsviZrAn7UyZV",
  "key19": "2esJ2YZy1kkicZRcnVbNFaEG3JTrhKsQFqiP1htXGbu3Y7CuGNfH7C7nmJVaxfSBAGDDURSyon6c91AAqTq8qB8V",
  "key20": "5ai4wDcgb6HKy1nG4mK63HuZK5nzJRrAQmxA8L3Dn1hJrsfQdDGPc8qrQrpFGNAb3HKQ8E5dp4vEm3Nx1W3gTVgB",
  "key21": "25LGKShX3q9UTs6qVnCrWM1TCr7v4B3ZwsEXAVHMpTsUAxogDE7THJrWHPr9cDCc8DdR3KJsZPvD5CZPk2DBEhjs",
  "key22": "212N2FUhNmLfvAX3hg5kLQ3LESCYju2ecymVBEr59UsVu14i8x7L3vEqKakKVBqkzTF5VR54sQJ37Y4Yi2APjTcn",
  "key23": "3wgUwdnUEydhKmwYs2eaXXo4WPZmxxAdjshPd1N3sRnWmQXHQNYj6u1iGLvp1uQGSY3fbupwFxu4oq4oBp48AbSu",
  "key24": "3hu9YV91dpjo7dGDxYF6uxgrtLTJsvGMB4HNTr3TcYQsbfVGxtQuAkddxReLxY4rEhyA4iys4K1mg2G4pQCyTJRh"
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
