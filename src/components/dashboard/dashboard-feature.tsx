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
    "hNVe4pvbM3m4KUvZLxv6dYwohh3wYWrnTMDPCUfZ1mGuHDyJXrZ5vHmDbDEsTKchbRqgXVSSqmowsiHFX6Rb2aJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ct4u63QywXy1wAbwfRfvkRHpoFLu2uza6UetjifspuhUbS3po43DvzcVhYZUYoNWfHWaP62cMB4P97EXwzSB1p8",
  "key1": "3yd2a87HK2vvYRATKJ36XpabFE72AyNgzdhUJmiPhYkd5pZMxsSoJNSj7kftiqPhxBhjF1mPwSswhfmJCN3r1wak",
  "key2": "22pKFyxHviYkuRMa5ZVburkx44tRrbVpbyokXJTuWNn2ZdpiNR3S2Ee1eeAXpDjVi9REeRsLAe7f5xDSN182MsdV",
  "key3": "3Z1PWcQfwszTeB71RztKHsfx9rBuKMaMm3ugMR4Dsr5cjNtuG4poxCxrymuwBwZ8sD7NwneGaiZkfysnx1dC2Q22",
  "key4": "3e7nF1CAQnTz6XEdsocBvGgRCJnoLzWnPReB4JMqRvZvqf31mTgg3b4m7isUe8jFLp77fveEqAD32s64Ss1Q2mx3",
  "key5": "5GTXxzTAYHCKadwFuY59aBYnGsx1e2hbAQbDuEernGJ5zFdHC7qLcktxv4vybJKb244kLvhuHZKaozcK91Xw9TUs",
  "key6": "5rx1sQwrN9i5S5gtkP1yuwPeVkkUWNGWSGU4QRVG43rpvCehtgR2Cmigs853qfYJXFFUNJMZZJkc553HNkkZRQVZ",
  "key7": "48o8QP8V1q2uqEaF6xLADQ6Enr83abdfEW59wDdW7NwjBiMkVAs4DcASuFwjvT32jpYcmQgthzfb4b3cqcyoUML6",
  "key8": "5H48S4T8D2voLGJ4pgdYXKiFQeZt77WtxF4isRejFaAJYbpgbNK4kQcPaUcTWN16nsFaJsDeAvuPszVGAcwgRPXM",
  "key9": "5yGBbf76uxN34ciHHFUEPHD6imNpjQypzt3dW27jAx5KSLWSxjPGeyRbcDHJoUyyw7NbTfEWGdf2L1DAWz2MoSqi",
  "key10": "mURRoyaaFFXBJTWq9kXRwMJ1zzpaE41zeQbeCeJRvr8DTUQ62KTZYvw2yiSXg6QEPAFEPSiJYEtYEB4h4yVoVPz",
  "key11": "2qQiTdECu6gYUEfBwdy1ZHfjeZA3N485tPbxvPjYiGxfCD4EmDUpYCM7Ar4cc6ayYTgYZvLTb6X2nbmzZFWxQPZN",
  "key12": "2NBYV5GykpjrcZovC7sntd8NH8VPiTMLeCiK2pG41xewnY2o9YWBfetQTtAHJ4hDgrMkEdQd69vPhDQcf1ZNsWit",
  "key13": "5vHx8ZBSdcuLSkrb5TEh6EAXbLUqWRhYnzM66dn3HoeJwnVTLvEKXkqLNPnSYabfHjXJwbFqWaoMDpYxLCrESnfi",
  "key14": "4YDeep6yunZC8boekFCB6NnpDXNiRXMqFF1r52R6VuFyR3oM5o9sh3eHGJiT7jdeZ2cu6bvBbssCVaycrj9nWPbj",
  "key15": "5AMCe2LPNwrFDDyx4AWHQjjkkVFJ1nZTe1UKEKsGNAHGHLKJ4RyXdBGHjajHiQmCxVfbuycyJNYjpTKEgF34ph3Z",
  "key16": "5udEFQrwYogt7KTXS5kgeV6yGfW4ybaDm8tfvjH9dKJWtBeRsAWMFrWSng81VtYye8dZkGVfdjHUAj1mYMzLjx2g",
  "key17": "44QHLEfh3rGzHBdskPLdY6hUQaoMZVuCyiYq7Vp7tGJRatciDPXcfqTMpk3LFiAmvK3rwQv24AB3HQEYKX1qWeHj",
  "key18": "ukyMApoe2bSu3xw4bY2H21tX5tqsxSrMHdsRdNTCCCZvGTT1vHY3eCzk6QAKnGmtvQiqCtmyk4BxU3UDgeNqT6w",
  "key19": "4pUHWeJq45CAaobjbnm3SwrhnJJ4fiiQ7JSnGeb8bmSForGon9WY9ZNfoNfAdwfCjEbEFub9ZCfYUm2pnNHnig4k",
  "key20": "2Rr4AdAJHu79PqbcFpZHVkvBE8JAMCuiUgCXSeAuBy34Bbtgz2H6h3GMqQoYFB2vdmtWdiauPnXxtC3a8STLW4pu",
  "key21": "4npm5beXCp1xTEAzRhmVVLWHMSpCwYepo3p43PYzsc4QZ1bRBpRY2VB8vWBwRfXdFXDC1YKQQL4bvVrMApi6PJiF",
  "key22": "yYYbjJ5JGhQFUk2a9TwVgmiBdkaG3motAWFQfHxoiXgXLnRHPxSpTmiQeWnkT7yy6zVg7AbwSbzVR3zkmSftrwQ",
  "key23": "2ERsA7m1bJTemnGW34YXyZJaYvkXJ3HTyz7aejjZyd4e5SQJks1TSGk75nyMUrhaisj8pjEpCrahwJWwXDhLPCrr",
  "key24": "J7V2DpFEHsbVTLHgQNiG11scjt9E5EBGZ77SKpS6uu4qwWcd3RbK6M9AmEZFvxTdtJjyB84Tm5ZEdnsX2HibZ9t",
  "key25": "2iM42VNxzMu17rLMXvdpvuNqJLQgRDN4xZnvUhpNiUT6uBL8avhghd1whoUaN8cNcNucRr2Rwy1fSoAMaG29v7TF",
  "key26": "4hdSrWEm257LsnCdJci2Z2QqzXxtuSnpJAiTVZgNt7Fiy1d4qoVXXKJxNHBrELnQxThGLvb4UoLFme8cWAwUwzVT",
  "key27": "5pRUCXrx2aY7jNMshK3Ey4GBy77keS8xtQXNjLJ8xupidFpFDdmVuG1b1Wg3zHt16TARMQzRm99DrHiKWAeD68Vp",
  "key28": "5WYxzuPG6siP6BVXVT28odDQTECdN2A7ow1RCbB1nMLaXGr7QhsU51pRKPinWJG2bbUKmvLRsVPMRf9xnDPSCgSa",
  "key29": "5p9aFX9Lzx3iLYAsKpRXKVBF875ReC53z9PoS4Sq9VVqmFHe2dBhAAhuNoLqdtZsNwycCdWb7Ez63kBwFMrqCBnZ",
  "key30": "2FksGMpTQjgvE1M5tjNXD2zvGXvxpTn5D7zTKMJnsPR3JDaPaxS7hhL8hFr7K9EHsD96ua6LKs3Gz3GcMdvNf7wY",
  "key31": "2yb1PZuFRXhzJ7FbGmDXSYKwSPmmod2TfuJLH91LxqLtCgdtFT7EmeZrNhVLa9w4iecuaRv8PZtRQv4sjFmfDX1H",
  "key32": "2fvtiej4EBFnjir2dhdTt5t36pHNJ9fYVW39BYpSQAqX3FHZbwS9D82FGfptnLd6ENs4k9mTBzDPkHztJcrUDtjn",
  "key33": "2DobjN58QuD8njJvNu5Qk8L1oHp4Eh617BNgUwGMQcHwYscW7r9VnuNw5nSUxR5pQhVtkHC3mHzF7ZwjSF5iGzJ2",
  "key34": "2gxkDQagM9vBnBM5HRVhnnXCobKDHpbyNs9TNc7Ni7Wp7WoAQaNYw26oBvpoByDD7fH9nqJHoEc8xczh2Zj7Nc1P",
  "key35": "ZaMVZCgdbzHseWKk4XBhe9svSgqjywPVfuEmgkfsWzMx3AEFm5VVQxjN3AjcVBENxSoTdH3Egzvc8m9chBxGC5k"
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
