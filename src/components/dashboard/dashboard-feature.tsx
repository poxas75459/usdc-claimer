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
    "3FjK398krFFPrBHnNAwGNJeHX8nYbmfVygs1LadXXU8beZecA2MaafSEVDcKxJyahN8yMRHS56G4zNaUceQXGTCR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ijXbizb8hUR2MQ2vcs9jjMkP6YRHzqrFeh8gVkgzRTqFZUwt2sVdrqoRCzCDZRg7jfKnKoEUfqFhCAYf9Hk8wH3",
  "key1": "5aW9LBwLFTyKwzbQiz34aUz3Jy3U3edck5P2UaRVZhvRzuDN9FSNM49ithtsdaJzXkPfajZ7mWFzQ6Kk6t4D9ogp",
  "key2": "4cQc9AmrfzH33LB2b3uw4RhdxFZ2uFaVMcYqwFK1zwNbfU6Qf4LiMksVi53ruvnJdVeuejwAssf5ATnwhvpenjBR",
  "key3": "2nG8DZZBpPo222QDM8LHm6JVALs1c8RvzV2bJ5EhfZun1bpnDYbm8cEscnGNzJyQqFk3v53S7E22pcQyC9jcnsLY",
  "key4": "3dFSFZ7iLT8BAttSsD9TNcPvs9YjTR6RYMouoiX2ct5Fy5aRavi59HUKcfrf16wXa72grdkxfBY1Z9DNkWcqoW2g",
  "key5": "A37o43HAZdCaKhLZD8kB7GsnFV3r1KaCLdiKnbEGdSB85GCK8kDqU4z6V77mem9jU1xa6rg5h9rwMgxiNGrd1BD",
  "key6": "5C8YwrXBi6qfaJrQUpa9ZJmASqAr4HVXd3MngxPwWRwHY8m2aBvYjAhnncRRFxp6Ek16cJtCyaYHFnX1VfosH4Ju",
  "key7": "4jrQMP741Gu3p2QtkccCwd4bZ8GiGW2EzZkrVxuMUBqtVDRWfpmQEMi3yMyMnDWCdsUC6an6GSXQSxHdAJtkzwHZ",
  "key8": "KwVx6ooHbdCEk8ZdWjMkwr8Ptqsp7BEK2SZ7nUtcXV3RuTikWPymk5AfQgAK62EA4nm2zVYAGxaPMEfkKwuzqU3",
  "key9": "3ToMQQaopsKJdWtX2B3i5NjZLMAvXDmn7WE7Hc6FreSevXeHPwWfcmLETHhjLkcn9XtBUjVABQphu4ZXDH3w7P1K",
  "key10": "2bEtku1UKCUhv8baVDSNtNrsh9Byg71kpW9LpnbzQxFMhWArKMBy7crvyeTFfSfg4etDtNonsLFZvA2z23dvJx3x",
  "key11": "4g7oUS9NZ5UrQkFN4WKMojNimuEq1nNEHQRLYnZCtAnDXat6QiPMdTKSSyymwi9ML8TRYvZiS1qoy6xYYFJts3XK",
  "key12": "4ipyrMDtXHBp1pCBL1vD5QDUugD3QSXLizChU89FqDQg5sYBCFeUXV5M626UtEk6jynPe15PJjeHw3oN7oNHk1yZ",
  "key13": "tNFhKtx9f3vRCKRKiCzX3sXCPjUo9WMwBSaDezkZVff8p4QB1WfDN5tU8gf9KWLGRAF8ov5UKAXkrb4HEN29voJ",
  "key14": "5zVCR77oTFpET6wZ2TW7mFrDteLHPotDEGt3JNKmrFzUJq8R4uvwj3PYVJi2sc5MLUZtEBcv2ER1vmiz6UVUCN1i",
  "key15": "3TCveYyKocGtuX5iqtfBKzS6RFG6WYj6SBsQNY2bbL7a6jqXEb4Mkwegwmn415KmxkzqXLJXRi2TKXDjZUGLjHRy",
  "key16": "4cfR6fY96CRzucFXzXchXANY53tJfok9LWwEx3V3NZoVanb2zuoqmHySvCucVBHgjLiuBVVtrPDTRC2vYjCqUhBA",
  "key17": "5GfRn3zC5MjnuTU3xsrkci73LKBodNcm5g6QsW5gBbgWFx3trKzyG9VoRHYTR4wjWwtkdERWbfLSqXw3XJr9bqh2",
  "key18": "4b5GF8MbqtEmgrgzP11oL181P7MYriXCNRY3dnCxeofpjhSRWSJTDCU2ygaUFH9RuopsMpz2RTvirh8VusGRzicE",
  "key19": "5PTNzUWvqNSD5yiVVz5tsPZjdD7Nwva2HDDZmNPonBBcz9HyHLr5ZXk84HCaeqZgzShSHzNYHtiR3qAafL6GsLdx",
  "key20": "3aX89uyt2Go3g4CUwUeGCHD61CZa14QjvpzaswbB1hrqr2AN2gw8626sDJEiyoHu3KTfPiTZv5Ks2k9i6HPkfQRm",
  "key21": "3iqdTnLLdEdiygBaoB9xBT5mesoCTsTLJEspQuwohwgBwmgVXZ9u3bZWGnDSMeDh1UsnrdZKXyR2RWWzB4x8GbUp",
  "key22": "29YW4JnHgpoKjTrW7dW6Ssi7vR4yg89mcrT4oFTwi6ibt3NRg3o6GLhfwE7T4116x2uaqnR2uHnNSrMATg9qbFWF",
  "key23": "2gqyk97kkwEx6fM3TpC9VyQV7YixATC1y17GigUKWvZ3S6XWi4rbyaALtYkZ8a6hCBkyJXBn3YT31JqXXYc3E8HG",
  "key24": "5tYWfPvDAUiLT3rJxZJTJYc7tKnF8ZVe6caWKEofRvydg5iQ1hzoYQA74kvpYPaxBWrTtcvSLp1aMAKJoNZYwh6Y"
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
