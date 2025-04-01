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
    "48461mwisAbPL3j3pvAKiq592ELWfNT5V4koCV9nXUC9pKkQD28CzwYH4vzY53ys4dXS1eSZ4dgGCPF7J35kziBM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zQfgu2mcVumMWT1C2HyPHPZJgFU2h7zgY9PWhqZuBMRou1pFm31h3RDAtTubf4uZZjj1keSd6eXrKhoemFTmXGM",
  "key1": "5JCYv3y5bXUU7Rfnky2pdZxuLTE9eL4gB2dkZhGKmyNZDgwV2CzZ2VCBKUkLiP2pNsuYwrzT19JTYKoy3K85d8Ut",
  "key2": "2PnLoGPCRFXueJm2KtsEzZWzhdnazydh7zMDKUThii2YQp1tq4wyADa18Fj1wWwLjjRJxmWNs114Du2Ds1uwY3Zu",
  "key3": "39XQNCEmRGtnmugq2xcUvKgyjK228sXxbVmLMH9h7kXBc9enjc7K9mcczk7vf3p7wE41tXFGCzNAdVwf5o5m89KJ",
  "key4": "3a5ojhZ8UbwKPnTwNjFz1N6VDn79x7aLhvgXM4Uk6pHuFbrjQyXyY54NtJbNccHvbisk9q8RYqq3ymkBFQBFCgQi",
  "key5": "2E8wBdNbkts4AJpxfXQbi4m1bvqJxRrsAb9pnUGqXYjeLTTK6BW2Yz7T3JSQW7FUMibec9UF2tBuBdAfzHNny6zR",
  "key6": "3nvmz567Z8aYjHf7LdEo3mCMkw8sKX81zrKC2nUjfmShY5yqXxAEMRg7Cpqmasjzezf49E32JHXKFzAe1jxSc4W8",
  "key7": "3WnKQcAHqB4sxAxmQTJ7yAcWDtf4cGDxHyySJmVxdZxMAwckmQp82DwMs73mB7n5eTwHG7v5mmsERqxJdWN3vtHy",
  "key8": "3aZQtU4AwJeBiRVicKh5m4a4VAD8pYMoWocYPg15Q6t2e8BNcYNz63EAuq3srZkSRJibggxccDbVMVFf2tNfTCEz",
  "key9": "3QtEpEkTmrPDrNBwgqPdmKoZBFT5uh7jTtVMsBHJuGnefhqTRGBAmbFVm2NHkUuDPGquFctHCX948NMKQpeUoMDw",
  "key10": "3nUS9zMJjmDvGUCVF46jzUiT9Jkw54xKfFBa9Ujbcr7hvTkBg4GVoiV2fr72Y2eSLu8TTXptpE5Nxf6uKHxBBQZP",
  "key11": "xyZ73AGRD36BGCq7G13BSbddLPvi6vinyjpc2uNWwZjQs3uRyqcT5gAyrqgsXAgMf9W3o4CZ6sWpPGxdstydFU5",
  "key12": "2HMMVgoAnm9HTsxFD3miMCspZhkfuvFwtstRWgfNW2rLiLd5MHhSA2AV3wFnn1WMWPJnE5kb2inVHn24MvfjYuKm",
  "key13": "2JB4UxKtY8FGruayzhxTQ48gWhWA1r8JPQjAq9SgRnXsfecBgRDgvbUfmiMV81fmrPdUraK9DHtUqW3HHGREzTqB",
  "key14": "53PCVmcms9kDc56u6AvmDpVTFo5aPBEwMdNqCKLyYCpBKzuQbsnboegBWibFpv2oDEgaMWco9tePJWpmAA2jMeg8",
  "key15": "2qCVTQwL4DaTdr8q6oxbbkKGCwg3Cg8UsGp55qM76A9HCQWrmU7Ce5nBQeLLH2jVwhqEJT3ta39LdGYb8aGHjatk",
  "key16": "4c8rFoYP2zXCF5MwTrY3x2pJ3rBYUwYvU8EwLkHFaNyy4ujXaNa9zYvS3z33SyAb5PCdson6Z3oCbLghvH9RDNuh",
  "key17": "4shQ6WEN9JTKZbuPbAoZABG8SP5qLBYFTUJNYDofkdwXo8EwEv5JRUG5DV4qGXEB8i8f3Kr2pe5KyKpx3GAzLY9W",
  "key18": "4ah7dsauk229d4vaietVxg9P1ftiqEvNMoLtgBf5xK6z4zVLQwA2PUAPcEvffZpEuSZVG5ttbrEUxCkiPV2sZHmT",
  "key19": "537m9rbS2EYvigxTJMGtoX6UKWwTAqU1W3qNr1KjdfVR94mHh2QWvKS9xo8NQqH37iiUsw57JRcARNDwYZ6dR8K4",
  "key20": "3staJBUe6HADmGqnuUHRbHHkZhKJrrs5TgrE9BQK8kG6xVNTQXwkiUU9W9ECBHXV46mraeR7GZ4Gh2HpnpGD4yEw",
  "key21": "3X2tq8eP665Gfn5Jg5va978qb4QAmYJkMaZYT9io17vx6jahmsNnt3WWGbH6Ui2ynpaPhKVrwxSXpCFmCbXzdvK4",
  "key22": "bD16vLa1GBwHYSJ4XUBjFDLVYxVUi9LQdC9vifGpjF5UANXJncGiHEsin935RVGvMnFfrrGnTw4zpt61E3ExBc6",
  "key23": "3nWysXVGwEdtpEVLbatC5P7thuSdZwUYM1kTdSA5JGhuc4jjyTYsrZQN3h8MrLRoohc2pPcUMZJy1mFp9v7RSGuH",
  "key24": "5HcWpkDu9mxVpaMiRQbfFm5MpYMYsWLEdf41VpvWHiU8T8md4PXBU7PfHmrHYkMow6bWjTUuqWYAm4XSsqTdae4D",
  "key25": "2MyccPGVZXJMrLykah7tpASDzEf7eposQ8JjYdRHcXvZJbZ3mAj9UbSYRj9fXNQouVjHc3ZrdKrywqU6FtUoMUSs",
  "key26": "5f4mnKd6nDdwcDHsd2WuAWCb4bnDm3C1tYgQhvcSs33jd64neCM8jv8a8cQC8ARASLNZAaEHTfHHwBjwS4Tah95L",
  "key27": "2RNd6ahyzpuhCrfKkYEZ9HGUmxuQ3icAsYod5ZpaqAS5DGJxFq2HvPoe4PifL98uD6AVzxRG6WmAtguVPSzisYnq",
  "key28": "4wJbugXdFJEKLwYTQrhA3xQixUPCiyL5fgC56pFFkFbp37vy4scA5zzjLU8rJN6Q7uPizcANkNfgd8QjXt4eYebd",
  "key29": "5xuqAjPZwnYdwKpeoRQBwu1jxbjzANRQAhd4EasEAocwhV3QYgbrTneRKBbLG3MibogFXtqX1pPdQSyvS5qdry1c"
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
