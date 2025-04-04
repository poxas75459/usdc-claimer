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
    "614CatCsofZWRPRR4Hqd64Ynq9xaB5DPKoM8uvrVS5gBFBU5gkDFipZHAXFgo86Vp5ckhHpgyJttoJLmGKXTA6Wh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rwnuksbyet3gPQCxPmHkTQotjS2SZq1v85sbCNDkXPW2uCvdTt4LiJ77hHT6s9YgBbwqRP1nuQrZznbECiDEHjK",
  "key1": "3qRwydz8a423VE17mYA38bSpbLjCQyEkzS7A2i3puKUm5XyExmJY2khXKrvZYhrbyPdzQ29jqNjjf5gCNXW599rL",
  "key2": "67EsHKGEdZogSJMewfchkUNGWC1QYkRnhBcTucDzynyVVwW51TcBbdy6nj9SXV1uyZcX6EFSev1T8JXgVvcdSNkx",
  "key3": "rZezcjCx8QbQDEM94BFdzNDyDAGvDyrcNXNya7zNtynEDUiC3ibRYsryKDfuSJZf6N3EpwyzqN7hD7Rw5dtKcw6",
  "key4": "4dKNFT68mReF7RXuGzB5j9XGE4HzpxqxDBd5zDtPjJmBVrdDiJKp3LL7PV5JuVwqoyNEotiJYuGonJnP7BYrS1X2",
  "key5": "52E9G9Qgqpan3ADFwxLQ2AUZMUDh2CfxnbTbWtF4h3Qb7tve1PC6m6hChKLJ3DtayEoGPvYBkRvzJDhSU2TtbHxF",
  "key6": "56fNkFAw5mf8CgkdRKCxwocYHXc8Nvu8kitsrwMnzkWWr3C4UZmSUxuY81piMXrpn5j8Jr2L1Uzs5GTUuWuTPb96",
  "key7": "4pFwws6tsDcnFrHQjyrhxQ5ahpfb1TYueMMbd2ncMT4dLrjSmVHdBe9F8BBEZe5aNgh3uyrp88oMnkJVkvChdDrz",
  "key8": "3QhGec5YWUdBfKh8Q9xKn4AYntsxD1agGfaaWmdW8tx8fxYiER2FwR8KbWnx7oKj4RiL6WHufVfmvYX8zMhtg6Ac",
  "key9": "6KLYb5gA184g2UY9FkxUEnjQgQHWueuHMP2p8TTmxtpPtM5eeSDKj69U6j8Q1oUkNsYDoVBKkqCRwQZtt36Q64b",
  "key10": "3xrPPM5TwApqwwarxrVGZDEvnHHHReVM9wxk35zQNRqCaK6bWfuLJ7ihwLwSbSn6B3qYSzp6zdsKZ6pVr23auwqj",
  "key11": "3nkeGLHUuncKMymrqK7NrJxXRHx9D3AoKnDMfzC2k6vRdVoZ3AxVbe7hUYrQqWpvmrKFbvUTrpF4Kx7SfHXFExVr",
  "key12": "5HcB3d2p8343DyXgMB9mPDpypzumqRjdn4SPL3QNaozcjPpPgES1dQqNhtDvCS3Lma8wAUrghEx9sMfDKjk1yjZT",
  "key13": "2NdqFfPKoiiLrumAE1mi6hndiXYGGi4HFJvucj9Kfj75ksM8bA94TTNzrQxAWQkGsRCpXfEZK3ufPSEZGn1rQwX3",
  "key14": "8D1BghyRTTca6mqeqY35DEezHWhqGNguw3hDTuJoQAoBgZuY6vdxNsxyTnRUWmXLZySsvAmZSQ2BDwcWk5GhpZz",
  "key15": "2fxLcCxRJMrAcRx6hLexhetWiqGfZ2QwUz7WVxvYLXCX1mAAKBREJvtZ65V8zcbQjJX64i18HM1qtxBBh1aWo58L",
  "key16": "35kYU52HVYWP9gGXSFS9yoooCGuEeP2F1dE2xrgZigy9n7PZM5QsEXvk99mRJ43oC1xsBPnpYsA2Aa7GuDL7dtzW",
  "key17": "3ZNvjRHBBFm7jt7koVQVXaYCLhkMfcpXYwYd3W8UQ77J2bFcYoUJjM6xQttNEoVdGP916Bu572xDtmZKewYAZ2pd",
  "key18": "25aYRntbz5aBW1vgH4ZL8Jkf8qCbJvsGRSxn32y1APuATXWZh3dizYpGXvhKcLZJuUtETahvZJsv2rLxv1zu7D4r",
  "key19": "53ehoSUciaNb8wTucYD9QYemBcSvUYTuRv7W4g7py1uMQVMJAWrr53Ea4Ajtwrs4VcWRaQy5Qfzw2tos9xX8Xt7r",
  "key20": "4n6VLyFNYDutCNsXSta4U56MVe4vabMV9EAaJYG2JMQW3Yiz6tWHpUhE4H7MFFbDs9nfo6zMLFzfxsHUutk2W5E7",
  "key21": "jbrtK9tAx5EiB4GCZRcGmLSnRCXNRNkCQG8rhNdr5Czh5RUkY8VNkxuJ5JKXzbfBfQzeG44YtSf8pCm3d4iBgit",
  "key22": "4wVnGATJVgThHow5Z2XNrorsKcaeTJkEYpyaKKKSRCot214gvFo8ZmZJhUiXAE3xHGjJcnesBZ8Q7aXfnBCqB7r7",
  "key23": "2kMXPfTxMtLLf6Qezybw2iYhqQ6zUpgKUhE3fh71AEUNY5dVvykxj8h3US3BvE4pBSq8ziWUWA68cJiFek3tiDaR",
  "key24": "5RDiap3PpxQLzT8au1kwVmjS3BYhu6erwJp2xNhrNLNJ3Gx7mdybegGUyuzhjQpoPukARN6KvvAxapix6p1xxet",
  "key25": "24m16VjWcFwB68y8Fw6wfq2DQZV4LMuN3E83uDs3MqweWBibscCEZKk53FZ9FhKaY2YQHWdu1v5EHsPa9CHTeQ9X",
  "key26": "2VRZqBgAVBLbV8Ys38k8LWZ4SRe4tojBdCcdUjFqFKuoDewd77i6rKFc4CL1kimonecBwjiZ8z7PfwDEmuBeWCJP",
  "key27": "8YMey9huHcZHL9D8FRtn8uu68m1iiuLnBZwc7JM91tL1MKfJW7jwo9owuwWEnSKJ96gyjhLvrFPtGBkUXGFkv2G",
  "key28": "2RafWLkuLjHXJarxLXec2Sn4k5vVU45p5h3Yh1pu721EgdXoQvD75DztScFdeMasAgaxwSN72F3YchiE7hB6bVd8",
  "key29": "5waqxunmDHqkJkD9meBVg8kEJMgp7NW6isy32omTLkAtWPr3S4vdT81zhZqYU5p66u2ZzcN3RJYKgkaAcqLofaR8",
  "key30": "5giiEjqY27BsbTwsizVGdGw3y24tp9PUUkA4596XHddNE3z7SpTRJc1apa4a8WRHgigXRywYYasMgA1rH4X5NefU"
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
