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
    "y9iyWQJY4A4nhDkxawPfAKDz71Zt3yuNJeZKNDb7s8Szg2grtX63SkL5j8heh2yNkoKgYPt8Tf28qJjT1XWwsZ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E9f45ZTA33n6af342rdLdY6YHSWZiihseADWdh6joBB7xmVj3fPMQDk4GXw18vDxxKSS2ahnNGW98upKGYDKNjD",
  "key1": "3ECZSHK97vVwL4WkJKFT6xgxKfnWWjuyoJ7ju59mXSBrbCU7fncGq9fMXJgPz5jvaDzAnH6Huwb2rVLcCuHHPat1",
  "key2": "5k5QKpsWzDPZxymjEpb2eBBfn9LDuKgXbYAT3VcZ3aQtPGMP3nwmn4AZKcxcFz6WNKXU5XoYdMEHs6MH6mY5rra2",
  "key3": "2zJ5rynh8n4kJ39oEifGcBf9HRigcueKE8HTUF1Zbp7s5fAqZQ2o9cGReGshRujSrsSZD2CYmBXYeaSaz9sL6RXz",
  "key4": "51UCQ8u1TFp8TPPuzjMyTC8gZ6mY64ooDbiVSd75wHDYDMTnmUaUeVBhpvoyfKZnshfPfo3pYJFGPgY6HB2xJeEn",
  "key5": "39NYZ2VjT6dYhEA7ejZPSYtn5VHBxb9CK2xZKQv8HZZk3iMZkNhsFN58jWSgzPYiXDMDDNhhF63RaCmDCdCFEAB3",
  "key6": "5ctkUJcyArv8x6wMVuWgv5Fr3sqBNEaUYNjgbc2WdDUADnVZ4u9U5roSBiU43DVSgovZXzVcWGAKCaF5NV4fgciW",
  "key7": "34R1zbqrsjFHuEBVz4JpEXkFfkSY1fuoEiFgT7iZW8xs3AhGX86mLp4QZhJXzpyN31mjpTLJCKpep2QWFjbZGed6",
  "key8": "3qjqkJBXfzA5Kajqqov8ZrJ3WkFgVw6ShSXm57Pve42m5xqgN16qdzfSZXJTcmYxkyPQHsNa6huQ2F9TRxjrY5Ak",
  "key9": "27o5A76Jh1XdEFcxJW7212HrRqtB6LZBsXrJwH3safCSxRaFnLSXXkQRWJjd4HiG7LHou5LrjbeqMLjHv8qD2YCm",
  "key10": "LjeWLEgWv55aUS7RnawiCNWQmVkpT8UaX925NwGSBJasgVSpW6s44fWkUaSE1ra8BfQqH3pebZQawnyao4hXYc3",
  "key11": "2vK4ade4aBDDeLRidbTn5CPrcbsBnBm3Znx44NwvDcDDS6GSt8a4T39NggbCMM1VTwZeaaXJKvJ5bXDt6TBmKugG",
  "key12": "4YQibNMDwfFugU5fRhV2aEkykaSQFAHZh8VbBHMGe4x2XTpKC5d6KGFnHhYU7KuUPyja2B8nQqsJEZ98GQLgKS12",
  "key13": "3nKuiCN9CfTuNf7TsvqeJqicA4chohFvw5dF3ttm1xwMM2wRnqFdD7C6hMaQdD37rVeko32zpueUYnMzMgmy6zZT",
  "key14": "MJRtmgo6PDsazpuMNC6R25Rc7WmGNs6W7EyfbKpbp7HXE8bRSKN5Hqx3KgnLiqE9tyeQknzjfxW4V4pK3Ra91vH",
  "key15": "4rGPwnFobDWXeNBSqCgWo8e4AM8epK5wAnuDuzG3Gpm2H1LgfVQZ2svPLwT9ArwRQY4jKmmDsXDWxo1TQMWadjVW",
  "key16": "5sSFmZEF8RzNdVEGvLFLcBi8LRUuRCG6N7omFZCJFPCf7f9YKWvYw5ChwCzi9PLsXAzJoRdgMPLBwjXn474iNbs",
  "key17": "5b9MfVGmFHQhUCmsJtwk339VnAL49XDnGd5QaMXHAEtumPASjzNgLKTohfUpBBhxFHJgTh1yk1DTeYYLtoLXz9tS",
  "key18": "2NTEpm71Mesh3TxX4kbkcKjJa53r9c8RWXDpbfMPxSUmpTT5CjNAAmrTqRQXBiFTMsQbYVCbdbnPXdUiqXPTZgEA",
  "key19": "3mBMREaPL6VMEp6BYNhDi73vxvPCzdfUX9NnPtjwP98katq1f8M9E6hQcFeBt8tkUwGNYwemR5C9rVHnJT4zivPA",
  "key20": "praNavQago6dQiXK29mQ4ei1u28AAC4tmDKjmy9iz1Wuewo6st9JNzWwF8YgtSG819XLovf6mgVyZXGA8hrAxyT",
  "key21": "2B6EqMsq4KvQvvGtaQgvQqUGP6PyYMbdr9Rps5yrS2GxfSvsY3Dzp97dWYHgkbt9DUsSt6pF2HF28SXmaXoLYfgH",
  "key22": "4LP2awkJhxZn9R54eqr8mK7fBBHUUDPZuAYwrWqRvTZwhyqj2t2niNwDM31EurDY77HVwuqEJmbPaBZfRzGPgaF9",
  "key23": "XnHkTzLcWfTtneiaxmkW7dC3nK5ygHEXwHzmfCTwKsTAfqc3JBV2EuSH3zgCERvqPTn4sewCrReCrA5FWjgURty",
  "key24": "2e4kLSP8t38fGgDb7hdb6MS8pQ2nbbo22X7sbRqGuVcke8ZRXAit8WtDS6Q7MNzBGMGzCA9EfU3hAoL8deAw4hp",
  "key25": "4bEMJaNGyiVZGjb6EqpU1SeQh6Q32qeDAwzg7SNPPVdN4nBNGtbSYxpY6qnFNZ2GZ6hgZmoN2kdHxyfGhZUD1wYT",
  "key26": "3N39GPUNFNjULPDtGA1rcvG685z26hk9FTvRqVCmnAaHm5HozjVd6eHtXYBAeMXicdxaU8aTCWrypDGWstyrsTVq",
  "key27": "5fczpirPzs2LgdJDS5pmgsQhDheWrNtXQNVowg5S7yi8PmFK16QtJepdfAgFK6tfowvkqNMAoNJt25if9KQy9k5k",
  "key28": "2krauFkjqwrLo7Y2mK3VRxd7CSrZV3AiqehrDvUPorFrDTjZbb9unHxYTExdB7U2MAatsr5Z1TkGgKpZ5HPzMcvx",
  "key29": "53x5NDdXmZ6rTt7CsQv7jGy2BsT3e1iLmv4hJzQuXTqmd85UnLKdvD6o3k5gPANpzsWFoMeocx8Mc3XXrFoLn7iw",
  "key30": "4zdvKLHz1NdJituUBteapcWLwoCTz7xfCbwgDGHW3APh3wtVqFCc6o2WMHZZYvpVf9eyC5sE1dNVDY31NEDxPBiq",
  "key31": "4suhCfYFWp6RJYFPmkC2AXDQKiT5BZ29NxoxiRzTakxjYPs3x8BgKe8mGwKUaGqzqNic4T3sWpMpYyN8yQegMtRs",
  "key32": "RL3ntcjTjFqWtAY52d5N8LNbdqTJ9aXwcRCbLchtTyZXpEczQ8QSEGHJfUzMDLngzDrHTADxJopQzixE52TrMR2",
  "key33": "3bsnewpAAdUbdija93iy7WBzkrFf6eLP1GSofkkSBPVKE4UUVyQeQNWcrerQmMkZw7f4n9o3c3c6ehiLTs6kxz1N",
  "key34": "2MjA6RRU7ujjfJVbXs96eQn7p7FGg7f5cC5XRTAcYB6u65MGgHv5MYZ8TiCX9tVWEVSsESQWWXJyj1rHok1YX9b1",
  "key35": "i2DdgovP65uFzRXqGdj9dyPeCEeLagPQt3Ddcs7MCEnrXd8Wbu3n6SRZAdaWU14fDtPMyKJDkr7URKaaBQovN6L",
  "key36": "42x97iEe8fbapHz51J3MBw5fnU1eJmPPMG7Qw6PwuwKZFsG7eY7HPwHggQ6rNYcUA7RrKu1WyDC3vWWpWnJoAeKJ",
  "key37": "3w26oP1HMYvaLcDCgeYVRCPGvhkUrEyavsPvd4tyZk6oH2uKvuaxyCep1XZZeHgpmoMGojR1K7TT1yKQwvhMXMxf",
  "key38": "5yKXLQNoSkM9GgAQdp5ZnW9v1ikGUg9Q4nz1Mi5Z8VnGVRVeNsZysoWt2K5GEbSLK9EWfeQVFP65jWugXZCeuU6P",
  "key39": "56GDK4JgC3tiyMsn8mciEfJzvRDs55Ub2eHiZSJTZvDvSxekF8hiu8T6wGVYzCCz7y4zRzEhR7XoSJ4m1GvMYmBg",
  "key40": "3ch1UaPo65H1aVscs87jARGG7pTWQjXee6SY3r3U8wR6z91jMoGQ6zJVw6UGgM9LvEKVpikNoGngEeNpJbbQ99G5",
  "key41": "3LBEWkD1TSXy1oRnEiQYdtZgekr7UhQWXgx7cP3ZetMFXfm1AGzDSoyxGyegoxUcX5dat8UHFZVJ7HxBjDKgtFjf",
  "key42": "4d6Tsj3rFtExYr7gcYCZNhMsWga8DM4tmoym8xK5GkAQXbMibAe11n9bgVa3cJMLysWXn4ru3eguGebGDdJ2XLqk",
  "key43": "4zMbTUoeuKBk1FzLGe2GNAuWjeW2JEsjY7UKt1hUpk7umfYtWgxSi6eFJuBCZGSqQoWQbobWzyLWfNA6pLxn4xyH",
  "key44": "5dZ1VXWmCeUnKNqLYjysdHpUWkuZ2sCTfHwzBWoFJhDxfV4GEVEyKsMcwjngbLgEcMj4ffjiWPkyQgieyEGfDK8u",
  "key45": "4vsfgBEEmxpfbBy7G9Mu42t3EvEE8ZTYuBhupdTTCqpcCF7BJie1V8jhWaJBgwiyBdZ73LMM21KY9PQWenmSwvbv",
  "key46": "2WB8X8sNNHixtAAHJ6gh4yHd4LttmVifP8XaJyAs8wY9bU6cNZLpFQWWeNfWUGuWtuscBtgba1w2ZEafBdJoM3pM",
  "key47": "2FUei14DgFjySMiBrNDEziAFcLKwgipwWr3onCZNhAAUUTR5Lo1KzAXCHpm2tN98xRJ3udP4rHFgoKvVdTvNyfXQ",
  "key48": "4YMvLogcrLTSySuUejtaQD5zLLiBiEDs8SYMMPG2HEpYsSEtEiW3F1vvZCu3zErEPFf91Z45hTGnMxRpYV8uzR7x",
  "key49": "5T6ijAyZ18LDTUC9WfyZwvvvgZQerd7WP1E4YxXxzJMFco1bSGD7gbUm9DQxA3EEafyBvMEEgzJBVNWw8aCBgu3A"
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
