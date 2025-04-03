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
    "3Sp7XWwJMC7g3xngrps62qth8yhpwVwXtQZJQ4xo5T8VAi87uAMgXg8yPXrspPnom3ouR1LWQWgw8SHNnHkbFNDJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TviiHYfGoNjhS7qMfmcBbsBKvM8bkv5gb9kMJUSik8hziwMcCBvto9k1UJ8aMxY7mRCo4mLTNf3jcYMRVQhDNpZ",
  "key1": "5FKRsnaXuimM1Lu3X1Fo4KowuHwHivgrAYicGPJSaMTxtrQ1t4YvFtrCkukHW9EfEkzKFqPscTZV1rr21YnZuS2Z",
  "key2": "39bF6Tbg1yt7K1UXDgYnteFXLCMfAQs5y49cdsMDELu5jkQpSgrGUuDiEABkmsr4T2GM23Usj8qhwGWQTZHe1v3V",
  "key3": "4yWgdCiVcjEU2tL5HHnZynvVhZmfhk4epmPb3gMpWj5SeJQURFteU7SgRk1S1kAt6mRvSHA8yCr2imbbTsvGe3sr",
  "key4": "59yhWE9MGVJRC6N9J2icnXxsE8SKrwrcJhy6rkQs8DgodugiAaCXWBzTbcxhwVhHQHBxkxcDc9eQvjLVBCMrVVsr",
  "key5": "2uF16WzzJYxDgVSgbzisBNqoUHcU7WQ2zzoXQtZ7ikXuQGqix1WQaoGvfCLq1v3o1hcZfJ9ej95N9Y3QvBBTnPFx",
  "key6": "pNzbLGE9uaBAPM8tGFUirEFBsY38Mk9HsbVCLfxhPsaTKz4CsekQusgtLu4TZHxCH15yb2zUAXTdv3eJHwiC3ei",
  "key7": "3KL2r1bb5unnnLwpPeaBiQx9iEQ8KvS6dUghVwJkNYJE7MU8CNHZCcJfvf1jr8CQoyJMrnsdRoMj8yUoQCrKhwPb",
  "key8": "5GkAfdNkyLf5qvgTKESDst2KS1WYkrLaeXPUrUda15i3k8CpMLfGe6NhPcaQBprgUwTaY3f5iUTLkinhgqLnEWMF",
  "key9": "RyoKeRpQ3xhgCucqgKao4LgmhqLke7dZ9NWhN71v98xULVrBeyHEtTuXPkhoCpE6ggrxntK24ALrFUzPLJURNxs",
  "key10": "3h4gijLjwBAmSeUEuMR8i3WtjbsfZmAqqGDKs7GhaP5YsFCQux2EchFgkgiWRfqw5JFCNjjG75EJ8UCG7V49maMa",
  "key11": "2Ly3cNMZUcXAVedFrFVk3BYGWuZjxChwe4wGKjJZsgTnSp62RQQXvC92HZaNuwrtF1ECM4g2LEETJbTaesJMnQ51",
  "key12": "EBfU4zVAhwBhLjS3WJD1mDG6pzGea9xrHMxKZU4bD8P9QvZiJRezZT8kZqetmGKD4oSVnadRnCbqgNQEHBFL86m",
  "key13": "53p9h3hjbVJ8456Q2KFoD1KCeTuxARAsJF83K3qe2gLH5ZA6V1ygXZTQoPXLuMqSWLtAUBH2zG3LxTCLEdKr15Hu",
  "key14": "5DWGzrA11UDz6w4UyUcExvjS2fsvvR9cb5V66PGZdAPyqdq3XgsXCkomAcgST9AGpzZgAJfEAGrytHbzJjADkLNN",
  "key15": "53kpoFmPVY9ZoC6QNKLUZRUJcfebbzZn7AATmdqfSgXq127KFT76Xy3KTv1iuBAjzmwV3ca2aGX8uDnA6qWWYDYv",
  "key16": "379qHBdEkBw1jEV2KMt9CksVHZpFw3Z3Hm4Forehw6k4DosEKVNP6BPVg3ASuMHxkH7N1YqEK4yGDjKSqAHo8QAJ",
  "key17": "453Nnn8e7or8mD3ZDjWLyESBVwtZBZnvVfp2q4ucbaRZjhd5pyGok5BbtoYCBJzaXWx9GxnJkbvHufKLHa919CS6",
  "key18": "6d2tMeVhsxgi7gHDFC3JqGB2vL851KBKJgipqAfJyQBz4LzdJjCF6wHdp1TDtuf7pXVbmZz9FadRSN9HQbvG2qi",
  "key19": "E7i64uH1m82ZgEgFvDi5ZGmjzs4Vbgmf1Jy49SfWVZ1p5Dpdy8m3khDXCgtT6eDwjnq3kW6AsMcXWmYChLQmQMc",
  "key20": "4LkWFDy33QxQk28t3tuVutkiPEYvz4uaQG4BLbEyGSnFXXHhSfAaoT8CQtzxUyW3WZAW7n4MvmyfhCLKtow32nF5",
  "key21": "4xYh1yYeBteYuBmAhCdFqTkuV4yGRVAnYerVUZZFo5vVTwTsp5UUMxEws9ZcVQMbCSD5BDN3DaPHhWWTnNzrPkPu",
  "key22": "L9FWxuCnDbns7wtgfi5iEjHZnZ6jNkEkQiVFNxvA28jn35Z36weVputoJTDThce5nWEbL4xWh6jKyCd6mqSx3gW",
  "key23": "56NQL2g3LAVsmUyBsgCwhKm3KtUHDLHa6tMV8YBVmf1pCAiWqMtGYHVEz4riPDDJmT3NX1ETHBwAehb5rawfn9DR",
  "key24": "2vi2SuinigKEkfSBhS8ergPHTLb6A3CcbJvzumVQhfVp99Fnd8o5GNnvKdLyo2DCDNa3RXW3iLU5Bxv8xWDTdsb8",
  "key25": "61x8UAMwcfbnPZk7onvPWfoTn5wrMmoFGxpUV5uPrR6y713NJtGFFfuvMe5FUZBzUs7Uvk5s6fz5dBjn11QrK9q7",
  "key26": "5Z6oESgSr9VUxZWW1QVcLdZSmtyWarpYT2gkMaDxA7gmQ1P323TD4n4nPEmXQk2Pw9mKvkmL66UEHMBei3GnkkN9",
  "key27": "d1GgtDLXyo3t9dgdVuZUMcpEYtsaAwVrGzpdfHBwzzK3G1xfDBQrJPFMNPRrBTjkDqJB5ALASB4796W5ESaQDeT",
  "key28": "2ujTCkv1pCSgBiZ8uxihsERpssE8r5Pa7ajSPxZWA68UgHQp8vcBWHXm1XGn7aVzpA3ZevXL3Hhw55QzuoTaXcfd",
  "key29": "2o27eWtenJGzheWduQX9FUJ9uSGV3HoMyBjXqfS7Q3QaMv4RX82NrGHukpo78yLWj37XPsqTFZ9uHMMNuDZrLV4r",
  "key30": "5mjmcQpQH7yJCZQvZtHT1w2KAf3NZ9c7gV3kKeM4BJLFSmfDTocgbo7E24rcjL7CHrDadUnNAzVT4Zp1JWZpmPP6",
  "key31": "5ceKoZS1BkMMLT27bcPP3mco5UzDmtPitwrCVzjmPbnzSHWx2PVQENvNSyLCPxDDhkbs9RKFP3dSkAqCPYrQigt9",
  "key32": "5nva5fCDqudkroRqzCUUVkEeLWejB9VEpWNpao6btXGLhw6cRQJmHAWKSuY3gMxZfGzNVvf2Wbnkxb341CNQqRiC",
  "key33": "3vPe38Td2aet87zzFSEmbPKeyECwGKCT9C6Rk9R84i26DezegLpiNHpEUL6EgZkPcd45QFbxJ6RdU12jhHJdaJix",
  "key34": "5SJMAfWp6vx34931sqfipyQdiWtqEo29wyBphZtQdjF6qBB9aykrzHmZYhaALZhdswpMWtbt2LFs3py694GtMpvW"
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
