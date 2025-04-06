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
    "5Xjoo5XpQu9LvYMRnS9PTSQ8TdQJpWUZ3kWWByADybtwhn3Wr7ZTjyTWoWPECrxyrsrcP4vHAz5iMpy1qdZVxvmH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GW6YaWdyUhS3ydSdN7a2zebqbK8u31w5AaCqZXwT7uwgcs54mXD3JUBgQNnXcfUbs83yZVhFztjAxb6oLDR11qX",
  "key1": "5NR1X9T9u7awc19qrFjJELHEqmNu6vXmUNeV8KMGW9FKZ1d2493qwz1GW14eQ7sCxDtVR5qDxy1nSPrqSCaA1b39",
  "key2": "3xzbpt5qQsafHZzpe3aei8mfrwy9dgwTbbFG3SnhMJQzgXNSHQeNoGA57XmXpge9Np7Xj3JSaBASBiRgwNxadgD1",
  "key3": "2QW8o2dCQuYDnJefixDygjhQk16uAtsBNkRB1J9YU4qoHTYiMf36s647dGxDQYMRx89YNpM3Kov6yTBFM7tZvSQ6",
  "key4": "4CGJqtd7wDy9cjw5YT2NTNeg1L9PrwssK8g64oWFQJLc3jGkVBELxivUz1qVKuwwv81iB4mhodjygxDMsizq9GXw",
  "key5": "2e6z8rr14yj5btmVFSNLfno956qW6xQeEPqkgu2DXLUgnnLVi6HtsEHTSiX1mKtjmnFF7x7HrJPYseMTbJ1LQ5VY",
  "key6": "2QgiYoKwzjtvdkMDkeHVjf6r8kqmXYFVWWWXGc29dWXBanFsobP1KE4pjeBpopmDH3m7z3ofss6TdxkjhLr5QYGh",
  "key7": "5NqFEWxggXGPMcd4RJwSKhDxyBuvZ4n5pgvoG9NVQFjGUH7EwyKYuPMixtakojjRVS3YpX7eeCvFE8L1WKqVsLLr",
  "key8": "aD6p56Y2ti4gNcrRkV1W2raeVpUnNmg9Ed379kV2Fe32PxDxr2DYQouwN6jDJ32oyNHeADRkQWvVXnSYDPdRc96",
  "key9": "3cgFDoXHjpmZ5StNJgZF4mcU7aVFy4fWQvPN9kVAVjMasJ3gj96fe7rVjJtHrc63y7gjbYYm3YLZPuHt5t3gdy15",
  "key10": "4VsoZjNYo6UJ6k8emRjGh87WsoDQJ6dDEcDnBFVqD3NNayzRHzC1uvaiAGMYnejW5Jb1gwxH7U7fwNxYrp84rjuT",
  "key11": "2FUJfibwWzjTCuZp1vZAsuqZPCptxQcDx6tWC16gHD8LBxSZV8iM8HSa461X61TXarG57T4WCAPfYSM3ARQBv87b",
  "key12": "a6U93ryPYpw7YCuSM5zQ4toEgwhFesKiuSWHyR8VkVXM9GHdQaSRLakeRfu55DufQ4SXLUPni85HYQ8uZhrM8jS",
  "key13": "26z97bPkK6KmdPVV39pyFhhNeNqwthiDhEKEwHDUR6m6ks1c64jBQfwYZZjUFMq2AzJWFaqvty9b92KzWNVyG7W2",
  "key14": "3onBafjyRgcs1RWQprqj6Mj93zWa9jtu13Roac3fF5riUpYPSRBdyMUSX9FtVsEG35BB49L2KmgJuJdpEX4NVkcT",
  "key15": "36oBcX8VC6oCgDRhWzNtSYePaSrbdpDAtDZoEVsEPRed49JDuWyvk7x59ztSukC2AZrWYGgtLcwT9qGTxUs6Dmou",
  "key16": "1jw3LWePMUPoh6b6NPkksJ4EQKzUaiH4vhe9ToVjiPrjnm4gTwoKpqMQFGttPc7RKvhTLLg1HHfHKwC339PUr24",
  "key17": "MbhxvaY3oh3T7MeCAtGf9SYcCxf9h5v4ftZ52hUp76EhyuF6AtPuMbuLvzwngATfaYvMmNGKjd2rt6k9RDDmkym",
  "key18": "3cGv2WMM9NfSnnkYBJxxJ9gaaf33RgYP2QFJHW4hzjxiNRFPgwDMEVEiBuMjzAHzEwarGrvSK9VBujfKJrBneXEt",
  "key19": "5PE4BHnkg6LGbcYASALZowfbnQdruTx5YBnLHnAKycCfiV69sqtEMi6Ut2nBhyHPPAYSCj1Vk5gyYW1hhLxagDr9",
  "key20": "45RiKqnh6NBDxoomfWecEVkye2m3GZH3ZuDaqacuzaUy3Pkr13KZSvDs13HombpgqrrnXjENigt8T75pi6zuSE1M",
  "key21": "3pSdnzUHT6BbWPkmowchr6CvXTtvqVyCT33ropawcnJwGT7GhpiAMXYPrnapYYUjMzw4Gk3PCc43ov5G13GhKbKo",
  "key22": "5F2JrU1BUPjtLJiztEq6Ps4WPQR5WTr8mFt6pXha3EZ3UdrUfUXdAnDHvVmDtkm8aM8G4bAbdKQsCpbkdvuTDPuw",
  "key23": "8eqiJgNgag7u49VRfkZ9azovjnjbL3kPWRHM62k47k1PtdcWRjcEypzwQwgHW4GM7xAPv1oB2EZw7o6qXEPHAPe",
  "key24": "2HPYGHx8fCfpFQovZpa98YA89GWFR68nLW9rWwePUkahzmT8NC3ARvAUZ127r8FmW1mQ1F7gUUwtxeDuz472nPNJ"
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
