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
    "f4mvgoije7XX5nzDTb1VvYBaRLmn6nLAGkVN3jfCx2GwofKxi4UoEPiowN8hMVauhZTjRXhnUm6j7i4iN4ezdMX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vsDrWr6MemTtzXcJa2vuSUppWwbRNNLGqRqYZP43NaEYPPBcUVDmwvVuAZqcbibkHBDCQv66vi7onWoaBPBVz9w",
  "key1": "5dRVNcpcC5X4nsE4rs9ukmQD8c4JQmnaLWyyPipQiotMqfweRXyTnPEAkb1RxLyp3K2yzqHeHeG5hGBNGUfBTWJ3",
  "key2": "4s83baVvNFJQZY3oYdCSKRaJqz9ASCTwXkAyFikhKk48MYzgb9hYC33rvXKVBXupZn819faLd4ZUW7fRkKa3utZG",
  "key3": "2JQGgvwvXqkJ8UPircqBVEphdSDKZ98XCN14gq9S2ZzdMcXnuQdzfUGet6hvC9ZWA5b8mr4F5kK8argHBY1AKvb3",
  "key4": "2DMV29XcEGWxBD4LnAFN1uhgmuq3SF7qSdHLzqSertPDFRV4Xh21Pr3QF99tQdbvksLKcveS6vPvcX2XsyBJSCWg",
  "key5": "4j8eW2w8rU8eUiMq5MaXqPtVz2pYNkD9MV9mGT1nHfvTYMXKZGrSazhNmUdm5nZm9eABQyvexxB3jHNjaJfvHqkm",
  "key6": "44YWN4Wy3SwKd6a33njrV6V9BJ6q2LzHECU91XyLdwDog325rZZAL4MjFZp2AwqmWD3t2tXiSBU5MzZDsFDpy99K",
  "key7": "4fh1aW2QdCEZk3XQhpteac5w2CJU3u6hMk8pxUjWvZ614KVediy3vdxBV6hxcFqz8kK5MWvRuXLX1em6iNpPQcob",
  "key8": "34hAWP8AZZJ9hK9TLpoiPSk9cvdJdFSabN6ccbfou4ME65qS4S7vgvTLBoZYYWxRa22LmaD3y1vmuS877Edck9Ua",
  "key9": "L6t9WuQnrNtxqm98bRqeef3J5QwKj6vPju8YPuzMDMazcAMnDBYujC9CwW4XbgKEAnngsZFAMuLTWERtfdHMaqw",
  "key10": "3aRn39UF597BcrFTDuAHa5Jk8oGZmgCAPXZWY9mTvQCChLLHWevMdNDJWs7xUyzJ7LYVJWrpsGSurxU3zKJcumhZ",
  "key11": "2Ffe4CKhFJEPMAwi3sLDV1r9qQrn7UfKSbstct89D4JnZaEZWPF36QtnKiHxpnFqWYFCkKmdQ9QyQH6sCbyi8KGv",
  "key12": "644JmnRjMgvNbZ2rs19iYQBdZB9cwxQpAjG1yE3ePSLbjbTbQbJxHxW8L6aJj2BZUnNLfYexmhgCVJN3exwF8qwJ",
  "key13": "42NSbEiAqGowLEPLuAYhuPEJboNAHuEUnipeCdmCnLYbEyPf183WAdYBpaRoLwvmqiktwiLUYW9Bf7fTezb4F6Da",
  "key14": "2R1ftVTHBoS9NyTyR35JHDiBSdXmHagWLu9pcDCTuucbWLvtEoA6DnMB2pskZEkGkBkcbwicpiQthe7zZDrfGwTu",
  "key15": "2sdWFPYoEB1XqG86TqD89AQUeA3sPzbR6nncuddCT4tiQyo9fvP8n2X6xBHzDbAcHCiMuwk15RyXofzDgeQbvALS",
  "key16": "5CLs3R9psbjGd7DXNev7v2CrLqndexv8oRK6KhWcENEWDAXLNtmYDj8yZ3j83bnkBPrKNdM97coswxZRVM7tBbWb",
  "key17": "46rDxwjVbhUjNznY8ZGtK9yoTuVGPN6sKDjGxJvvuFnCYiGQZ8BZPZhtz1Uo8iS4ZfKKpqpfrWSemDCyUkmKWDFo",
  "key18": "3GRz9VhKqCnDBrz2BKvidGFGq7dUXBsUaZiKXekSvxKPGdtjYzaLu8Kr4EUmoubkuzUK16o6uvQZNWQKdAUohyU3",
  "key19": "3nc6aWXpTWgcHCFU7ikWsqYMF6DTQUud6J3KUQym3QVUQNozUA3QNoHruvkeieH82YbxpnRNZMhoE8vBJHUSzGk2",
  "key20": "56pFF7v1ahYheR1nupABn9f4A9xnt6JmC4p2jUeQBTXxBvT4SinGSzdsReEtKrF1eR5EHBdnp1jhbF4jqXfr3kZj",
  "key21": "4VPZH2nANHPdvoH9q8WXwu3jnLXCGZDE4dY4jvnDA9wvSvK9nXwrHzir1G3mUFgRBAf7u8sBrGnmULzJacm4VDuM",
  "key22": "2jUotyr6Zz8FJgsxLoNePgs8Epu89A78irGrPmEaJm1R7gDDMKnAgZf3qDs7cqPCzvbxExRVkSnRRRPPCgsUgyfy",
  "key23": "2418goNRmzFJFXMUxvxbd6HVmYmJ6Za68z4meLXiEG3PSX9qWAACSCzV5Q3n3CCgBtRN7yLuxBzaX1oeBevDze6w",
  "key24": "2VBz8n7ybNPXJsH3tQLc5MZ2f4WPCWNGDYTt2HjaWvhT7NpSmTDxCDbSieFMs5fFUbqALfBFfAPKYLbmE679Ntnc",
  "key25": "qksaTAKjCu6VkgDF3n6WgU5zkE5CkHDnhr8RVpShZWGFgEHjuEz9BmjZ6R9L96vi37NF9daLA4bdzZ2zMzjyN9r",
  "key26": "wvvAcwDFUURNYcfoHp61SVprH1VQx52zTRZQZgADPSMLBnhoqNwm7PNs3Mi2nusVsYjddJbAZh1WCSdhhWTwc2L",
  "key27": "oQhcYLUbfigYyWP56AA4GPpjrbfuKLN5k8YgaZdFVcDqWUcuBQEN856WMcBBhjnAdXKKJsR31eE4VTLB1fnLeCG",
  "key28": "3LhNMnv1kPR6cTvTwpfrUVgGbAny9uRXkFT4hv7u9rr9i5JGXEr9KttMnh13UYvZKTCJ2psTEYv8xCKm76qRRUUB",
  "key29": "4orGnGmTCN4AYTZmgV8cmHstnxbMbtJsPpyrG5TvtuDs7PRoK7rtG6NBVKrhwzxNPZ4oSR5TnSE69AxUVyxEfuqc",
  "key30": "56bM7yAGjWF9dn5DGinG8aJbKpFpzsqneYZCAy9LMpXFBQkCEPk2JsuCYU4Pd23TfE9CAPdzHzWaGfjsVEAi4JHt",
  "key31": "4nfnuXZC3Q4oH6ceBndAyv4DLpzAWYTwfv2ochAzZXMkTaXUT13CdKZUKDa9PSpgnUSqRBdx1ysM33d7JZxBFoFe",
  "key32": "65KpRPmajiLKb94Dv3CLeoFh7y7FZ6sLZEJgzSnh9Acy6RAhzrvTjBxFWFKfw1KKdEqLwdQRbW2sskkkCSHkhqy4",
  "key33": "3EGmMuJFAnah6Z5z7gA1BgxZtZ4BxGPg3XQFPbNQs7wE32aFcbXqqcydNbkvsEVitqmfh5wexP4Gzr4WNqoGf7HN",
  "key34": "2gpa5zWzDEK4J6BYywqr8WvHXCRpieQUCr3iUDUgEMbvBkTT3R67Rc21bTf7JJyrPyRfwHKCjEr9J1KV5LfUwmuw",
  "key35": "5Nm8NECv5MXqV419ygoBhFes3QCu8NV87xzgTtvcpKhdYtaVvaRyrSetqxzM7ATDQkNph2iZ59SEWfD6J2Xh1ZpB",
  "key36": "2BqnBaoQqyGCdCxDHtoUc6DuWpqLqt5ruU6u8wFJHgkJD4syiN5Tu3DBSux9qt5ZSnL1bbT2UL8jVs1YdgJEExvk"
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
