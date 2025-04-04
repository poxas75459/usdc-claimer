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
    "RdppNjRW6BW2hk4d9vfPcsChJWC8M13798FHxqNECbcSSaWiXTjSDDYtaiFJToP7Wk93kCgeksdDVR7P1q8xQfr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rB3tYbq3owH637BnWqLUB6cexswJXiWnMG8qHHi9NPoURc3xGcEVhbFsyvYZnxjkK12888VKJJ1CxKSkVQF1yj1",
  "key1": "3ZFvwpVnM32B8NuDeuD4GNNgYHrGFAn6aU7SWs42eecWmza1PzRWGH2AqtHAqrASBMS22Kara165ahTAA51UmWF7",
  "key2": "5sjWwmvWP3wm2fzCjopcpiRZQSKkyAunv1UrT6TzCpARUQpbF3wHUHMyCBAwNUttSTW7jtqfsyv2TkPVCBQrXLWq",
  "key3": "zUzCmq2FW2xmMYCRNebEGT5qyJwEKKeotNviMaks81XbzyCwj6KKfbdrEu2kQw5PeaV2G7YuWqkY7Pm4NEiNJfg",
  "key4": "edU6F1vY7Cy7CcfDiktURvhT8aWsPNmxQaqUPtQTQ65nRiQLMjUQcictMGCh7eKrsECMZDuxGHHwDchLTMi9xpy",
  "key5": "27RjybfHUFkusvhWpZzUUjigagxWEGuCx8pW8VZxLpthhfrznR5Qcp27fiCtzonK9oATeupctnZ7DiLbKm6e1oZX",
  "key6": "4WWjKh1ALyWtbLwepfMdoL8Be2NeQYDjtJrVb9Ppnmhvc1zdCTWcfQSqNS3p1x9cmNPemPCYTKgmDiyHmer9LHgG",
  "key7": "5XjT6vkkNZaEpoQzhuhMUjPP3f6bzn7dk9hStSR44C7QPZoaBSPY4BULRFMjj6q4bfEjgAj7cftDrcNaTXt2UztB",
  "key8": "4b5xyh6Hgxvdir7fdf5aZSnuqzwhq7dnSnFy8BE9P79iEVwDNq2JL4TwYJ4mYvGKCg5dmhmzFDkyBHMUc42GSisA",
  "key9": "3gQuSYDNPQ1DhUnhvPMBgHF1GGhHo54GowQ1zeLuA17iwuyz3WFMxc6gjxxQ6UtG2RS9Qmy2ZXr4fqmjyHYSKAuL",
  "key10": "3xx3SUKLRt6fggoskUrcJzPBQJapP1LXVkFzuYoRZt4cfq4TT8N9Tg5om5dwGEj8485q6p81666rKxXfBkKYCcL",
  "key11": "4QPBkAr5FhefJjBNjf9RYknkCR6UZ9uRG1MqcB8iNUda4U34upBJ7G5D2rRj6YVpJCrjTJX9WMFAhNqbDgRWsmhF",
  "key12": "5xQsZRxmET1AUuz8dEaiCsRvJo8DNT1uFAJZqxhvUQPKM15y1sziAWivLH3UBrzDdjFWNkGZ2qGr4r426WWk7WNq",
  "key13": "33wf5SUo4yCxWCTiyVWba11fJLSKdofknv1fDJJr3WFmUS5kgn95yvHWuSQDKSgXKkJCe3XCtTjmEsP4As468y5z",
  "key14": "5cAVscywipZe1rVPsj6opnmcYEQq3jjwBfnRD9YSZenvU91uHvWSRSMRtv3aByj3jx7M28j5vBLvb6XJbyJwX5fz",
  "key15": "4nEhDH7ZbTkEH94dssCz6ofGeyaLNCCGZSjivsJf6NPdH3BzF1aLsvmiN28fZQte1wdhm2XdfkENah5tyUEG9cpz",
  "key16": "3z959eEtj72CC1DoPAZsRgnXux5gPQdYhDKZwLgYsnZqp1ukGRr9iA2Xrg4CHrPQEfgBo5LGHcsJ8wCYiAusC91E",
  "key17": "4UtaJkJqHcMxouUpu3eYW37UmGyk4TReJHQRHzZspKFJXeGhKH5ZTXVYC7DN3BzihE9vhQkGNXaG5NuLSSD2rTMu",
  "key18": "2pMAVdbC479KEwo5eHceTb8EdqmhZvGPT3GB3DhwJXRcRqjrpn5fnGk73ikesTKimWoF22NN9we1s4fy8bPy9qHk",
  "key19": "2WpPZrpdBrwKPUxH7Z3Rte2FuB1n3Ws7U1p5WRKnTqRQpTdU6E21C6bQxMfYH3ScYYZuuv1B93jP5xvAvps7gK3w",
  "key20": "4ZM9xvmKfK3TwUuWTuQUuTDkV3GgtMPkkMakQ6xbnQr343WErvbtJUiZ7npFhRX6m6if6rDQicfBCAyN1PSKBc9Z",
  "key21": "2ykqGofLk68XCxtT6CAebRWPmyA7ccacjvnzQbXmMbit8eUn83ygFk4ANz3B7bJtGMae7hdZ2gBsiGgUuw2MSTf3",
  "key22": "5HRMa5sweE4JjDJ7mEe6LAmUeVbFPpNd9s6cKcBhxHZ8m8E2s5ajLy9bheU4iNgkqvSDX5ff9616PBMuj6pB946s",
  "key23": "3mtF48f47Hkdg5BNuXpDGMzgtNHagMUmuxye9bPDCM371n2aNQWxaA6p87Yp21Pm4XRRjBqLgx6i2dUVzuFc1K1S",
  "key24": "5beHSnk2b4quZ9iNiRpwChi7tDe2qKrdSfuSTQgzZxsk5btzpcGDwsy57oJChiycZxSQbkchMAnAwJUcprirvpMf",
  "key25": "4eZnAPF2yby5G2nNby96zqcNqjsuvXzMA9nc9QVAYQyLMMwdFCpft9gSZLzrKPFRK4zFxQbRmF2DMBpj3WShEStn",
  "key26": "2XaL535pBjb7uLqzVNGT2g5u5iRU3RnZLczU6uKDuKi7TQ7JSUiZ19ksfrhYZVbphMTRDS7h3Xak8NrvFP6Q9g7T"
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
