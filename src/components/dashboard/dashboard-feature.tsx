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
    "2ULH7W6N3rUVsWJA9wzqKfLPC2ADRkSQhU5W2nyryPRyMDz9bxDnY7sD7TqXfN5t5AietN2eWoKwmxowu2SVpzvo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GRLfFDW2Xw18AzWRiJtvDP4dc1LQFUnmDLDQx9A1TtvgWpdeAYx9oxTeDAP4Q5yYuyr38tbScEcKTKyini9Kxhy",
  "key1": "3yGTnYjhHSoHjmTzPqHPRDUMdcB5K4BwkrJTinAx7vUur6xgmDUzogBnzfbUuiGA6F6RoteXYaK4JkR3hhUTyUTa",
  "key2": "46G1oeaH26xrTHkPq925mHatUvXx2JMb9HXMTTtnt9DE4Bs9Gb8p6m9X5FE3xo8BBEHCWsoAi4YFrtWLHkvkkSW4",
  "key3": "3RT3RT9wfD4A5a3PrfQjwoVjSNjKoGM6pqwHjn68NLM8topP2BwHR7Bn2gCoA3EtmySr5EF6nV5jkWkbCCGW4Fuc",
  "key4": "3xG9na4m9qpebZVmWy4MmCFhKWcAZF5t4RZ1Q2wFEtCcXca31J9fjdKp8GfBzPNpESSKeJ8XFZsvRt96Dw9GTTgz",
  "key5": "b3UWb15AHbaqdPBjwNJudBCH4nwGRhPmBrpUJw1S6ZFKRvRBrd3Z1UJXXQFmxvYyMqvs7BNEeFuHqkmmnRF6ZCi",
  "key6": "29yN8Brf4BVqtyqtu6usPX9wb8zkhtQz52fPD1KEb86kyr2kMi1t7hatHQdAqEh4HcxqspmwYFevBQ2AJKueqWnv",
  "key7": "3dBBktmhhMXu2EPgQWfeDmzNzSuZ1kTzVir8BkV8YnetagYemaKDURvE6ouZNgjTfx2X81ftyzFGz9KRhfrGuYft",
  "key8": "2vniutU6ArYXFcY78dXhCpTV38nCDzPxSUk1koVXoMbTjWiGfhNBad1mVM1R3BpA5tETnh3x4EKcVpzPgpx9PFLC",
  "key9": "4m4dDD6STzyNVsfPysc6iHfwX2aspVFFsZtPPPWnDqEcZaorD3pEWDBUn9HoAEGyNTakBfuDbxiKWHPR8D4VjQc2",
  "key10": "2sJceYcjHNc5L9MozSVvX5mBNS8CSaNUy5n8VcWuNVBCjdJpzBkAzVX2FKYoK8xbX1hWK3e4yj2cuNct6rTUGFSE",
  "key11": "iW3omK15BAoRLtvpKYb58UXsJPePgHieQ9pyQNRCc57NqNBCNvWDRpzNc8yTrYiL4414SbJh1hpgMoHHP8bG77T",
  "key12": "38iRBi4txzB7mqcf65eyj831GR2jJsqLsQyBHv55EBx9TnvnRnQJRs7WJz3gy1uxo3hC3CnTyC6iWAgXuTRBa6bW",
  "key13": "2fE5NBdtPoBUwDXTeoJ21VJthWUEf6DHtxG3bW8EkPYLGjxRVGbpHyGFmfQWVCFrzyuMq3RVh31RPy4cqsgW8Lc4",
  "key14": "2WKk143oPHwSE3aP8cfRGsemsE47vADPvSYFDpkzcfJQwsxhgvyup8CaHa2Hy6fXN3Cr9hQG3TKSBALhdcCZLVKW",
  "key15": "4u3aW4NCNJVJcQqWn163LyDNC4gHF3aPcxN9rG8WiPZU2uJ8K51STao4YcpuDHdvNLj7HgDUrBZxcfcKEu6RH5Ui",
  "key16": "5hcziTJdhZDFg3SCSW3qZkSSDDuHZ9CwiCJJgPZsnY3DmeUspt84crKCk9DcMqnagQTW7vKXUSeyK8PBZ85rtY4t",
  "key17": "21njF73nMmTPjmYxRhnb3QAtNBXTJH7evwnUoiMF5K8MX3ntUuVv3Jmrj9JLWJBq9ogDZMfRHLhRLmkXGMxHYiu9",
  "key18": "5ZRPBwdkFJf8ZnA8D1cWnhKEbuPp2p1SLvMzMpqXTpzydE5WzAegNpxXrG5yzKWkucjFRJ8E4bqgceESmykooGSC",
  "key19": "623k27fDwVz89R35MaGCKFKW6w2PBEYMYshtQo2XeHQV1wvCHmKPu5ysPkMo1T4WSkTjWSbwMPmR3KBej6iPm1Bv",
  "key20": "2hr6FrsSnsigoNs1qvovdLBhEm935nu7oFCSRFYdZVXGUPnfndHnVYXzFSEsHB3UpUgmMsfh1VvuWUJc4JFT8df3",
  "key21": "3pzqjDYV6ZZdkVeECe6VJcU4rgrbV1cUies4FEKbsxKBi6kTxpUnf4MQXwEe28WJynPkAWg8ZLadrXZ5miYpZ1CE",
  "key22": "49P9fRNeNmVHDoKifJs3NUV1NEse6txkdxZuwS39DVKYK1DP75CQSn23t73wj7vBHodz1NXoottDbTABEGGK6GXJ",
  "key23": "9YFh1t9dZ8rAimovtn4j4Xe2RMW6Z75FYLFtcmGW1JPQHqm9YBGkXJQMGFs28yCAKJXLB27dX3DGTkLDtULrmsF",
  "key24": "5V18LxKmTJQ8DrNc7mUqbr2rx48Ct4joe19vLsR1LTPDbx6YYEp4MosvyoNK9KAsUgPMx241SU5h3EJN79kTQMeZ",
  "key25": "2pVYqaztMTvEWZTJCkuh7WWY3iUqzcNqLdYcStGzd7p5SYfnY6TUc5KNxiqKSnRRD4j3KV9jQ6AjrXS73vHFU4zj",
  "key26": "4nFwxWqgeuXxBZy4adQbp6mJHQUxuwQTNh9BcvLzsQqirpjYfaHxB29RC9CmHJG3tRZ2wVLyvaUZVXFFWNwhiLGx",
  "key27": "3hgd7z3oKj2mPsgM5foVbnTjV95D129v7kepD23NcpBFxPpY6c9v6nts3uRj9mr1Xfc1sFeKpucVeS7AqapxYxLu"
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
