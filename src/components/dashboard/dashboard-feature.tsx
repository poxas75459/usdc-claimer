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
    "FNRD315drFpS33bkxz4ZWCECvsF7pEMJWSZxqCQZVm5uTNysEa4ArkpE1ZrqRxoCJRXAMQSuMJpsWnkZVV36Wjm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MJv4yGbQ2cfC7trLwujxBQf2wBdibvrremMqE5A5QrV7rSKhUhNrxAtQu4rN3ZR24yBSSKTM4GwXugXsu9kNMf4",
  "key1": "3ooHeVyMZqRQWPNiNsmBDMDkZxnvMhPdsGQBWnLaPgJwHTNWMx7HH8dBi9Sg2AbToXPfZWbodg4FmjqkUDc2Kwrt",
  "key2": "31s3BviWQ89E4DKixjnyUFVvdUwPNhsCEqspDoUAtFMX9sN1pVBArFeCW1sv33umLbFqMry19Xz5d3pfuCuxrYrY",
  "key3": "5yQvnVZniGS63jCWSYweWaUqkp7iW5UDsiTVDjNztdXWFMy2UySiuXPHYymNcsjn1Dk3AdZDWYrBVtfn5NHKJUJX",
  "key4": "3PhBXNEhJU2BmNLmYCK6w3jM6pA5LJiGisZoeXBCSMnrkbwEJGP9VBZR5C2NXAPEzAQZgaXHmh9uSk7QMCAj5gnn",
  "key5": "agrszK7tnW4ApLNYXCCe4oMPC9W7v7eCBXPKYRv3WX6LFVrrV5Bfnvvi2wmovaRgR9iJGKiAedAnjZQSqPt5mkG",
  "key6": "3GasbVPnGK8cHYwrbF2ruJAwj1uey2tUjfySof2ELmeRgPrsjRy22dRy4jDvMKaDMxEJDMEyCg7HKtL5RqbUF2qv",
  "key7": "38nQq4QJyPWrLrdCyHhjCRfaUFpMYSKLFNShcdAQqMFHcehF9G77R73gUdTS1hoZiSC5JnyE1tY5iCHE8zuf7EDH",
  "key8": "5XvjzpjuieJ43hdxXtjh7ngN9ytJkZugwC3UrSQAhGqRPf1iKsWkMgep2NMeXEJE8k7Xwvt5BrrEcKBzZV1sfJnK",
  "key9": "3rqwbU6igmmJ29sZ76tPvdn9AS8nTyHtobcC95LM7r9wp1wjE3S5wzGuug66KikDiMmuFMNrmfsYmJx9pvaPX3vF",
  "key10": "4A8XM7qfJ5atciJKTGe2fG2tmk2n3sR4SRNSGL7oiH3eVpjTPwUBbuCS1E1X6e7ZWgb1VrA67wE3wzLtJRMh2Wn2",
  "key11": "3hz1vq2JSNBg4ydRxyQVUjS9y6nAKR9mVPurai6MycW7H78UM2XKN7rgbR9sgpFwJYXer2UQMqqHzn66LCbLokUj",
  "key12": "3pi1tcgHLsx2omJQU7gtQqaM5t9y5QTQcTkn5MFTdWTqGBUy5VdCNFi8XEzhod65p3cHR9uE5tjPT56qkdsXGdkb",
  "key13": "5GZtA75U7ENFm9rc3eAxSazS8BvN7nHy4Stibkh37QZKvF55oG18MrbkM3gP8BtqBqBA2cWhsjyRNg5eroroY6U3",
  "key14": "5y4g2KHVMjGDAWiG7ENkJvR5ngHWh5xXpNPDZsySYovFvZGwebQNU4rLbHrZV4nJL1c4TzTc5tEN6Rte4rfYuNqB",
  "key15": "5g6Zr9q8B5to2PrnxsQDUDMe37Rr8fC2mQ7tPFvJa6htESf5kD9qZNydpnswUE6KBRJHKdkrUsdmRGTxhDdSiGNi",
  "key16": "vzrFU2pmavYYmW25tva8Vpt8GEQet3YfyW5wgqVei6Vhhwge2PDf5R86GYrco6NJthKzrDyyhFDKmVP1FvFocEu",
  "key17": "35afFier4Tk4nn5uRPyUva3YkR9tZyyd6TdnbQ9gSo1soxverJCvRtPjR5VP6LvJCmbm1wpzMuPuzJ1RPgahpQ4r",
  "key18": "4CYCq4rESFjXyA4ykxDRKMDhC4N4eB3kpeG1VWvQXWvExWoBjXfzfbkftHHB5CxuL4tcYQx8S3abbZWXSLNhLcu7",
  "key19": "5SUMkLDQSNcnND8hMPKKc7VMsvHGFUggNUNgaeAUGWzf6ndtRS2xJVL2jS9zJ71hkHfuerfq4V4Re3nSjrAXi4Sf",
  "key20": "RxJjmu8zFnNYnxgVKTj1DT82sjxUJ1SCg8qsxfbxhfwjVKBDti1vaYqGozVGV5v9rgz7T7iBXY9z58w9qgaMz57",
  "key21": "PfKqDs9uUs4pbDrqmbcKcJ32by4XjbkDqx1gvwrRZtAyb4J4TUhhrSQZkJMsfssB6JEECGubFnDcG2Wfc95kytE",
  "key22": "2ToYYgLi4BbCCPrtkMo6p2prWefPb37ASCzHLa8rGaMwN6U2ydrPemEGi6BrA5Sj1QzQhVndoRoeVq4ry22FGThX",
  "key23": "5pb2Nw6eWRXbzyw3P9UpZ9ZvfDPj3jGjg4LMXL5xACxLgUF6Sc7hFsbhXcvBDn3QVhqBSwsozBRNY4MSV6u8QxiM",
  "key24": "5WGeP6AT9PXyX8Fn3o1Qxohr1EpDXLPXwMcGRTyqxCjZJBYZCinJvW2nfHrfhPpNwDcZNi8QZotZjbXMsCkKMtux"
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
