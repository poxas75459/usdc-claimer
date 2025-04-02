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
    "3LoZjd5r9yNgKtwfGCwqdAxiwzBnh9FhWTDVAWboMCtpEg3iBHdNi3cP2L56GbsK3sq8enrPgTLgrp5PtRXrKrkz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bFaG2BJiPY22H6f8nzDTUfmPPk3scUZz9s3B1yXgioCW1C7LstuNSnvqUmXQFbcQrpQH5mmQAnpEoQhkYgmWatp",
  "key1": "4h7biiCCBB4yfcHs5YKkjivtAvf1v6iR9yX1xDJ5nevnrTayzsvYhhoUdKM3uqhNd8gvKVPbEStC383fPojHA7po",
  "key2": "3pqaWNpgRVSfhYb9bcvwQdYFFXfo2RZUYtkqSvfZHvPjRN6DqusMZdMxDXTZF27oRYFYSf6xDLTxbJeD5JFBn9iD",
  "key3": "cJf7xpFLWZAHd6gs56aAELUGa6vqX2gnbLjx279Pu4aVtiu3vrTpUSeEgUkhxwUk58tJz4pkTAnfBchiPcm4Rv5",
  "key4": "5fjs5qbbeZuvRVzsbegtniCw45BehVANLFgFRtWADAACejvFeyyyDS3vXXkRzymySKDNgQCXfipeJ4txZuQPhF4u",
  "key5": "3Z1EuW4r2y1eBiySQ5Epfmtwe5sX1mtbU7LkEe4GEwhzv6BNST3YCJeFFK9AvcaWMub3efKhVYSFiitdAwCY8fkd",
  "key6": "3YGNJsFY5yWgpxtGjCfVM7K9GcbZg4vzKXfLvE3nd3m4CZqzefmbDhQem6mBLi3euUKGkz6T2udMWMBsyMM3DTSz",
  "key7": "5hJLDxZQycazkbbm7w5EZ22vZiqy9YYLGwgX6eZyUsADj2wK8wJWFKRQnST4UwhFA6QmY5WcJxZD3or2jESvJVf9",
  "key8": "3tjLcVTB1Mqc5aWb6qSsJCfQskgaSvJcntjXaZWirLBrAE476q5M2Dq3oXWCP3TZuhnyQjr8EJHU9zSfRUdwFR1",
  "key9": "4QxSEsS2Dtk9Jyasq1G5ndTCii9rYVvonqr3mw6hDcPH6rXRDXwaceuzdH9fAm8aXEgKAwrRWEJtmc5kkApKqMqm",
  "key10": "4MCG4KKYgA6BBwrFrqtx9BaYpVXZad8oXuiQLC8VrhJqKb7etHAd5wKWjCRTUa5DTKgSXnG57GMhqcLC5WRPVfZA",
  "key11": "3ehKCdBMTDQt1cNoBKwJasPiom8fspcqgZ74mpCjSsQryVaLpK41nUiQQov83oMgkMCxMLhALQUFLha3yfCVBpPR",
  "key12": "5J3prhXhUuN7EaJ9VkZsd7GZe6Evo9XB3K35spdVWeMVuSZiXPetAbaVC22FsrrstErWgfPC7iJaLowK3DqdgC9r",
  "key13": "5YEXmP3qWNTBJrgx8EtPTpn66ZR8sWUCg8gvBnSH4RKiLp1Khb9zrjxFWB8FWJhTja5sXug4tQShfdtg7kA6Rcy8",
  "key14": "3hR4SSthiMS1SsE5GmjXzvySd6eUfJfabFhunMbDuKqs1TA34DUrUdiMCGSiTyLh1KmvuCz3nzZnke2pxUTMh2gP",
  "key15": "4EeiZo5zFFDiCScPTCQxxvdGFkztUhEXJaLaCBpUBNuESTXoJChjhQzx7ok2vzvrGi23v26cpyrJgpLkt5QymG93",
  "key16": "3gMDWT5XmbktAMQarebMg5fPDgbHHStWd1NJk7v6Bp2M2PcnrwVA5YxZH3f6qvpKYBi29GqvdSb4mxftVqJiRQbL",
  "key17": "3Qdo4A5iTQmq2EfKsD4Tsn7wcZVQ643MhNRDQcKmJx6ibBVY5sKfYU5Y2ywG2wNydT3Umty3D5Ue4Zt891LnKtAo",
  "key18": "2Asa9JjFjdsVSvraAL4oT46LdJ9dUovmqEQFAaMkyjsCFxVkH7a6D2gy4bk9dY4dCWiiEeVCAPmeqFxVj5ADggM1",
  "key19": "2U15mW5x5FRHMmU14zSmotHAqyNQn45xCJMFq7nRhyipHVMDJKSGyqqvF8k7rrf3Km2ugco61GxJtBGY6jHyyr2p",
  "key20": "61U97M268JBgAv73HTEyv1Xf2qqiHwKCUdTvxeQgqRZ1tWzzC3Ggcc4tEJpcb8i9ZXEkSD42xYV5FpH3J1MyzmfZ",
  "key21": "4Hk6QHun2DmLgDBar9CMwJsRsoFZL6tJ2qHadphMhFxZc81Nho1NV6zpwh2MZuRF2AL4mR6qPqhRaD2XTyur86HU",
  "key22": "2sWHL3ShoQ5tta6XRYuXrAq6sEAqn6JdoSX7acKACzsywWCnahvsasNDR7Kf3xp4eMPHcmpBc4MKx2gXZKkzQirN",
  "key23": "2WXvTHkJB5oLzZR361w5WZY2ZVgtw2v16cYJtyFE7BAvDTUUUsxC27ZccKFz9w3YqkdLbSVBc4x3o4B32dDEhXNp",
  "key24": "3Pi5ikaKLn2sa51xLxxn6XAb3ewT4TqRE77djWQmjspbxYePC6EcJbStgiJkCF7c4mZUkKkGcMZJDU4Ht1AivfrT",
  "key25": "2hF7pGjqKyKxTZ7Mz6W2VnsWVWRGw8WXUmRdmrxgbvwh8t4vECEkA9cvXHia8jPZLaC8x7qc9H99xW6jzZfLow4M"
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
