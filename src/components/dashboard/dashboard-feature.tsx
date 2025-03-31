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
    "2ysNqhaagDfvZbZNsL2LnZVvQteTd53sC6Jmsme3sUQdjfE9ZA74pwAttxCmDGKzKuWgdVRue2Row8DU4fPLwSNP"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "5DRTVyGuWgF5SPckj27r2H5VqAZwCRfamiZdS24DNVFVQDSNS6ctdWsrD7UHDtcbH5ubQLvwDfzivUSBAPxZVCne",
  "decoyKey1": "4LpGxutptnnjhynMEZh8fLMUGGmJzJoSp4VCDYQEaN2cErcueF8Ywc3KLqMmX5iPWUTCaiPxQqYR8CDSTZ7N9XHi",
  "decoyKey2": "PDnrkxtTzvP42PkzsAsxRexDW8BbivqytyELJuPphvxTG5rJ6L8jhkxvAthhhzBu38fa34Jk47w7Gdgfim1pP5j",
  "decoyKey3": "5CX4sASUaxWPgLKbUm6pSAUDH2hq5UFHxyMSThtoRc57wLYhnq2HjXT3cFEgXHRGDo8Pr4xNd4NmCggQbpqeSGzZ",
  "decoyKey4": "47moNqsRbmpYwesGu6BGAhKn7vBAEWKiiDbxGYqUAuVGfF6YJoRRzPDSLmzFim6nUtaDjinnH3fRQKdt5qc7ey8b",
  "decoyKey5": "3Xm41DZzwbWZwMHPzEC6xnUMJsqGztozbiWes7mVwdCZFXLR4UDTTQqTQeceqWQfedyXSWsReKsJHWc7RMNhJqWW",
  "decoyKey6": "2TVVBhunVVAKkbJFM5huzhJur3yn1vinC9kbQERttMurQk8nYh7m3C2bT1EusNBUh1sSkQrprtEz7eEygdK7P8wB",
  "decoyKey7": "2CuabJJ2owFoHWeU1JiWm86S9kvGGJ3qshj7auxVpA2P66r1EZE8CUaypfJKvwb4AQhbE6mBZCMyysVwPMfmAMmA",
  "decoyKey8": "eSbWEHwCg7HqVYQM7SgnHvbhvDAGVy563SxY3fZYYQECbTaLDWLpdbsoskJrNbEsFmeF643oVNWBNrss3cDf3VS",
  "decoyKey9": "2UcP2BB2qPxphVAji7bhAjup1TNyVA99XesXcrgfkqZ4UiHBJAUxPqAAPyNepoa6Kh7JM7GWaaBBhHyxF5LXzXXV",
  "decoyKey10": "4ynRUkSaic4NK88gFF7FKkoqKHRKJc562fuaRWu7sSr4Ro45L3KVXMj67Uy3c2anB14xvkvMnM9945MfLXnKJSBn",
  "decoyKey11": "5P4M4c2dRkYuiiAXwTDfcytegdQNBhhEHmjXVBFcjaQYb9Zy1bDWnFak7RjFH522hYdvD1Kz2wvLJF4wZdBYYm9A",
  "decoyKey12": "2Pt6T2nQdXjs71y8xdmPZcmpegr2gCqW1yyp45VbL5bbnmuadFo6599msNeoptfwjcpvGVtxJ1EhjzF7sniDuKJS",
  "decoyKey13": "22DwAV3dWTDLCHiRsdeG3dkV2juLBGTC9qEndfzgzbsC2CZK98ykVuYeWTcSWAGg3nJQadmbqnCETc56qgkjK71u",
  "decoyKey14": "4ysr3D5XRttVR2XtMudxUANPQYd1Wx9sU1D9THmoCYwVeAteXUzVP4BM8EP49YvLCrkQhsbLuiAxFNn1JYvcvT5i",
  "decoyKey15": "2GKmyEKX4LNTHbtQUGz9pAVkhbzZ4nXtX2b9Z7RWoEx1YtfBwh1XHAcUTF4yLHhZEdUn55mvjdmBGaCz1MjkSb4j",
  "decoyKey16": "2FykDH2AbJXBR6ub3gcfhTxE8H7VZ5FRKWdNM6TDjFNeykDoSp8PN3ghUeTzhjDpyKY9ktcdCNq9Mvktxf5HoyWr",
  "decoyKey17": "3wx3PWryWKX8j1Z2xA7iXbsS8r8SronRgcAG3SCbMeq5p7b8oJMEqivPHyyESSLjXaoBjQkd6owNStpMm5dMBjdx",
  "decoyKey18": "2f4uvmr65c9YyL3zonLVQA9G9i49mmugFw2JmqK3m3YciQf5tVtr36GrBCtxHAAzpMjBf7StzddFfjySvCMKHMbw",
  "decoyKey19": "241rv49k6myH3RTtVsqDx5G2bBzGkZAH75xVTdeJNjg1EvbkXiqDMdgjLFeS7tpACwenQKNmSH7R94TD5gtc35qq",
  "decoyKey20": "49eijTExx1YpUbaCL7fzixE2bRhYb2wcNDrLcHCa8JF2JmayzCumHMsXq8NuKQFyMmTpR5iTQ6g6pq2gf3e9JMMu",
  "decoyKey21": "2UuzgWmEVPrAhf2ogZiph7GzkCZwBCC1KjMz3SNy2CHiEFziMcJkh2PkrJRWF9uS6PdZMsDcyScUQVWXb66cmRuv",
  "decoyKey22": "L5hmhcfVDee3WbwbxRzAxyFVUczqNSi1cLkVNQ5vQKr8wJBHjbFec4o4LwiqHEDkQcgh9T7H4MZ39yhNCjcFTU4",
  "decoyKey23": "htPmUBE1aUDaDo7vUN55ZSJjumyxsErKWrRbXsNxF2QiaHoEikfdEa1kjtn1xy1pMjcXxXQ8hwR68uYFpUFBRvQ",
  "decoyKey24": "2JtNnL7rByPCxha98kVPWpocfckwT5Zf5GZtKv6YmPrxLL8u6aseyayj7ZnZfWx5g88A2azdxjdR9vXRbNF4PHCf",
  "decoyKey25": "2dgbF7TM3pzqhi2vjFwt2yERihhqAKXeMzpjiSkrS4mTjLou1CW5Gg58WNwvrUcFkS6Dio5tjryccHU3x6JuCT6m",
  "decoyKey26": "Gi49dKsgDPQAGXeqxEusBbJ1Tuq2ZkFppDhYHL6BY3SWpvBbLZeaUNhzA6yBogK7hXEmFceoxeH8fTfSQ1uu7Dn",
  "decoyKey27": "5SzeGAKJqUB3GqrvvroJrL1y9Ut1f3WRjAj83tnbkbmh8StK5W4s2i1r8tbUBipVzbGbBe5XmggHLekdnEgrGNzq",
  "decoyKey28": "3vpThRL1KF32h8FrV5s5n8N3uFDQN6jX5jmkcNTYF6WsCxFEasLnQgcjvVtTu3GNqngDc9Hak5pqPnbrzw95Ayee",
  "decoyKey29": "5uEUT8Hc6Ej2BSvj6ALB5S1SL9YyFs16ifVo2aLVn9mE9wgfr6A8vu4VAi3uXSdJ9miUb1vYZuGm83istow3ta1m",
  "decoyKey30": "634y5cn4FdAW6gZD9YxFFwXX7w9z6fkZu5E3Vjt6fwAvpW8huHBVXrfLR5o8C8DZmqqiLqBShypq32ny27MSxka",
  "decoyKey31": "iNzLJYNMKuDQvWfXwzqqGxzn7mgLHVM97zNMMq35iNKmFfTtb5N8ckRvgqkJCfH4SmHfb3kQstP6gz7FhaUEwLv"
};
// DECOY_KEYS_END
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