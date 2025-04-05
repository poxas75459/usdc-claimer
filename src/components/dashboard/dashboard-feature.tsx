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
    "5q71zSP3xN46FhyWWaL7zCempL8h7CLV6kxsWFuTZQtZcY4La2DHKKqemRBmJoHZg3DweQoKRQVXBdVMo3Tx3ftg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32GNUwcnmtJgpusZUGr639aePRt7ef143z2SFdny5Gpm7jTb7pj37asTE4YDYYGiCLKZFrrYop9G6mnXkaQVRo9F",
  "key1": "66xhHc5JmDpFeP7saRz1LS9wSuZxda4V8vFgFJSBS99g4Vg6ptd7XyGD2RWaXk3KDxNKME8q5kyZbMb5QhU9Z5QX",
  "key2": "3iumtNnmz7ypCdNAM2qMxy1pEuDrSdnBacopS3CbBZRkERzjg6gPigwWJdHxFbEpFyCBLeSuDA5jTmc3sDjscCd9",
  "key3": "5hbyxgBsCQ5yjfvLNs4ryNqYgPmdHyZbNtLukuXzVCuSYg5aDas4JX7jTXSXfNMt6R5JvMQuXsdHdgL2nEBnFgtR",
  "key4": "3No4oTwwkNZhFUyYqEnAMzNEDwfGxqymJrFWsFVTLDvQ8wGXaFVyzSFb4aV6DkkFSD1KvNnaBeuiHZkHaGbsvXLH",
  "key5": "3jDCiLCfufnegWr2SkegL8Rp4YBaivANeyEwiwuJ9UXB5NuSFdrppDcCoLpZ96DbXa4Fn9ZBGjykvVRvvhK1tnME",
  "key6": "3BKPCLaEw2wkJvZfZqL4jpzAbn8pV6dnfW23yfmf3qkWUYU59A59HQsg5zTUzKeGB4bbnG3EoKgUXLagNYe11V8K",
  "key7": "286iH8rUnLrso2s7X99cqw5qAA1KkNSB7copjhkm1eQdPJe2YgwWUpGY2NKD63wTvPtD2wp1ykxZ5eTc9r3z4Mio",
  "key8": "3U9e9queTSgbZYTwD77XWnYkqJhkpoPpkugYgkEpexvqHN1ztWQPXsxoYqzfeYEJQct27M99NPh8BiV94heK41v",
  "key9": "3i4NNuH4o46mzrKfSwbou9YCCjJq9eEpDafKSeRb4nSdm6tbL9RLAas5xnp5G3Ko5pYbqktPvWRFWMsZB1Cy22qA",
  "key10": "2F31GgFDaYX8zomXaH7DEiGqFFQ9huhcGWR7tqojZ2aikBuXHK55YrHkTRYC9LQY4M8bdttTZuGaYPNa7Q4iGtTi",
  "key11": "4mL8yGLrkw4Swdw37F2m3Dib8Rp5v1VRXXYXCnKvpZHbaFPkQXTVuWofjUQtoLbTMXP6fQuKpb4x1nt8QXHTJ2Js",
  "key12": "3dCMxvvFJUseen53K7U17a8JFAXFNeQtHYQWNGou6ZQck4Ec3L7nnxXMzdFoVrEJLaoa1TcbfrFZKvNG4N8ukyVj",
  "key13": "3pWifcJUZqNUp7KcNGmnZUPPDgZat9epWEnx87cvG2D3FjUPTMn2gjWACVuQ2P5r7Cn1my5wTxzCVWoVm2M2pHAa",
  "key14": "67ejYcQBFfcK4qjuEMkwo1XLFdkebk37j7asEsh53jXMc3Vj7cKEvUHKwm9FUSwFNmCadRwKNW9rMg1GtdD4pddm",
  "key15": "4dVSfqcVkLSSAxiRAfApTxV4cgKcfpwsHoDR1LsRjuj4Z6Lh2wi7yGnBC4LLsErbQ5u7VaPwZ4qHZQYCJruEcTQ5",
  "key16": "2ozSoRVKVcnpomeHgbDbp22MhvXVFSfzmWVtiHmW67msf2FNV87fP27pFCyBoH4KzTQCjb1d2xMPkUULyJDVmFtz",
  "key17": "3HXXrjeuVyC6BZpvdLUsJwDMiCUjJHqTcfCw4hfuUBTzYR75W8CWWMEc7LeEQDy5m3GZwp7uiNNce5yHVamMx2NM",
  "key18": "2DFKHG4NCuhP7s6jxEax82LYC7HpeHnFA2RCHUQ8Bg4aH3XwSQBQEvuAfUHv8W4ieZFBCwNRX2YwpvnQ1aE6b5BG",
  "key19": "SQUbG1GgoRtoSfEtH2kEktuxJ3xNQaw9w92bJJrtw1wfXaREWW7oC9FqCwFGCZDNGPJbTh4mAMduspUSbFxVxCZ",
  "key20": "4YdjK3pvp4sQkPVX5B6AE5YqiFVzBChfcpXBGCqyvA5uc45DADEVW9se2XyjvZHCteqsGGNRDTAfmm2xpAhJYB4M",
  "key21": "5FFhwZBGcAvBDziZ3yok33uGFNB8VxCbewtumcEcenNPXdF7342UhN2stAW1kW2t4W2AW8Bs8ewUkeXKTozNwYdn",
  "key22": "2o3h7jfQ6nZM25VBSf3orMPkZEEhFN3xSiXbLXptLihhG4D66aa73PomU4asYVRCLxuHbZoyXMozEdRjVvZmH6Qs",
  "key23": "fxdATMcqFMEwQntStb1qVS4xsJnjM6adyCbpCKJZ6fw3B6ZmfTE9BZmfuXXrDK8vUS9KupKjF6kj5KkbmsPrbDE",
  "key24": "4XZ1H1o6ZTRDmV1955wGLiH629HpL934WvtZKsDbYQ7WqibGpqrp1y8CncX8goxkqEef4gr3X2Km3VoGBVE2DAGU",
  "key25": "23LKkFsd7haLVJHGtq9qN6ABp4u9nstZRR4EXSoyQ3uszvW2PiJ4fYvzxDXK5GjQJZNT9fUfBhGKQtbutfY3Uzn4",
  "key26": "3hc5AcxdQd3EN2KXHgZ7Eaaxb4g342tES4Lb97uebCw3wwab6H8ueePWNHYbQEM4SpwE4vNnX8tKzQFb7auNis2b",
  "key27": "2eAEDYF2vNA54UJUhBmUm4d1SdEZeceRFqsWE8UEbu1mJgpgdARr3N7xjfkMUw6eJMmf79WLUwFe3LoKfJ82cSt"
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
