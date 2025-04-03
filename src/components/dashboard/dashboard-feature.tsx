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
    "sHhx5ttYB8UUFmTqFoeHT73jnAn6hi8HQzsCHhzyu2tD3ajJY5K7Snyfx9p3y6UZVscALbt94YTtJ5Dm5RK7R5W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CpPMZUoLY8BAb9huFCQ6t7h1QN93svXhjSMCfYvLZVbUQeJUmDZJ9fBwMbFAA9j3fcYtKgFtD8aykyV6CxYTFFD",
  "key1": "2nSUZVvSCW12HW2VUGtXz1Wp4FbU9AyQxR5PCHE6BKHjp9CJ5dUHcBNjnsjxJZSRACXaLKbB8LhCjHokPtvPiXN8",
  "key2": "5wWSp1gCV61SVrnyNWxap6vs2hGoEFZHcn2DikRwA3HUHvvvXwMb4hU5WQUA1AbccoKXR9bHJPzhxujN9osCiwBx",
  "key3": "4AwP95cD9ybHTCmLTjxQe5HaqHjJ3eWCn6E5NFEbcAkSzwS63jj93P2YWJzFpjv2jjZoRmRaRodjzqfapqiPeAzt",
  "key4": "qdbRFuEJgwKKrnaoZoScfmvGdrBMWnwMmMjDrQFCjTYRgFrWaA5hBSdZR2djRbjTy4YKbVtpUwnYaD4hzystCR3",
  "key5": "5yA1KVeWfwyFeGYYQ6s3w5WA3wqfuy3ofjL8wNpyE3fYFwaFdDaRF5AwZvn7XzfarxYWnQ5UgHB4Thvxur2pxpbu",
  "key6": "3TyDq47Wa9MibeSTncPgarxVWB4FZKCPXfWpffKcMhrbbzcXEgn8cnxmbcismg18niAM8v32Y5ZPBDCkRvt82VUs",
  "key7": "2VANot2sS6gdMgXH1s9PwbJfmWHhT4XW4bFDAuHd9uELKXEZpk9cAzvm6SsC4oCqD6hKaxJzpzMXSBRzkus1gpdg",
  "key8": "5rWpSnnix9d9J7mFeZNiF87vkagwE83jhPCMvxA2g8LnnaA96ecw7JrmNxujekMEv2dapMHUhai1JP8tFXdtUK8W",
  "key9": "22QYXCGwvLGf578FzhHeELpn5Csqxja5JwAm5omg1Nj8DXF5ypv6ZuCHjGZU5GcS4XcmMxxpVktw98hdjFP5XbPU",
  "key10": "bXAM7R4GqvmpXzBFgw6DbFagR3uCW1C4ia2apHxHpNJa1vShYeLyhgCtYoZUVj2ZUBYJYmeoRMPXonvPLbL2rE6",
  "key11": "4WMM3fZkCA7c6BpeXhVQPNbFBdoPKgZn2GyM9119BYxJeWdDtw6xkPNBfnRjhbKdmkbN8assZHZkceNzZEk4FSEK",
  "key12": "4TVUARNYSAZrZset79y65gaxz5kbUYadFtfVpqbjjSXnjLtrM7UJYnb3Kot3cdX8X2dB4zWZexABb6APGKrMfrBW",
  "key13": "3aGGD5QRAy7QQKTM64faoiPccjCRoAkmQSWc9BvXfzBQQyNw64dfF3sFeYNAk3AvwuTP4yb19VrRfNLAjfxrA7pg",
  "key14": "3p8LEhDCZqW1PD9pwXtrn8FTLxiLNDrp43xxhudcG2UK2oFniH9Ca3hawkjFcpMiexhmUF5xyxZnyQMMuNpmvrHu",
  "key15": "vK1s23CaAVZn49XcY2NNR54SGkExCdnWh1Y2Qm5T4qucgvHEDBBdv3nrVcsF6YfWkZWNw8nAmJxzzmpyBXByXdT",
  "key16": "2GWbKrDPPs4cJJRPb7zCnh7wWZyi7axop97MDfGbD4W8kY6xtcEpRot3kBbj1YK3BZMT9n6zyyN7ni7mDvT1giLY",
  "key17": "Wgb4gEgxy9hYbrGncm4g86x9WCkMfMiFqQc2j9QpfQhR1cvELmGGavJv2gScqMQ8MKaKGj4Go3chFfrFfhuE48q",
  "key18": "1nBHf26UG5yRWFeASQCDaruwArok7iDECbG1WKtqNmM1AF6w969dY7akJQqtSBHMg3wF4Ri8yJZjHxMjhSLP9Bp",
  "key19": "5GNGFk1dbF7sFEB3CKow6cky24VuXYC2QF4oZvzQo7gcy2nGZbU15GtVTpFXNccFuRgswLdrAawXputf7YiC1fKx",
  "key20": "5QwAzwJ5jkwAGwG4PdeAEM1EmwTj4Kk3NGmfiJQET8Yk4nNtbNBLagQQ7pWLeiciNmAFwUzCoYZGJLFLA4JC49tg",
  "key21": "8eoYkUXDraQ7UjEfVySd6jZuGC6UbNN6XDA1jiZSNhHkMmy2r4vjpndaM9S5mzuBhhv9aUXruSuMYsYB7uocGmQ",
  "key22": "4wT3Upn7Js6XN9wGcULg1WsnDtCPRs2jfGkEvd1n4u1nR1YCC8sSkFDNVxVVySUsNXZdSqNcpG8ifUu3SxxCcZvG",
  "key23": "4iHn4T2TYsDCbg5xRrWpY5pXWwcCc7WEmLrajuvMkVcM6TPu1hFbKrDkRKQYYcVzr2pnevmKcE36W6hktNehnQJt",
  "key24": "5vKoVVS1fUrSrhUkoZ3jKJaubspRnLNzRgkRB8rTYVqou7fv6FJuG4EeL6nbbn2DkEDme5mwA74xFkWSCCBWg7fU",
  "key25": "5Tkm3yhRXtijfrSxDd2yt5hPHmMT8Xf4HdeLVDYzuz2q3WuxpvRs224zVvq2Vyu28HBQj1bNZ5e4FkLFppR9Qk5X",
  "key26": "3TH7SjWA5yeTvm4BVsGN4X7S9kpP9N3vG4o5uh57YjQzbdT8bSyWb1MwmEPepxFxzFCVwNGoRfjpkhqoFL9PHzqJ",
  "key27": "3gsuay5H6vFzAvWFiTSGzo2pyw57HkTyuATBfmzGJpSUMKhBxrB94eRzXEXnyX1PhvTRqZsze5wvCWafdZb8hQH4",
  "key28": "2yxem16G7WEzFBz5Y3c83g5DqWauaFroQcgvtBgEx6yLp4nWd68iQmdn8n816GMQeKpvYMAXzA6TLY99B2ncyMcu"
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
