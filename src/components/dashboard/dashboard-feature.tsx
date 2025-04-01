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
    "627DAERbxPzr8EttTGCphERZFu3L9Wfz15K3LvhqfJJpJLkhF7Q9pMahpWDjRkndZhQ9BaKue7aJ8Vf1m1DdpF9c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34YEX99FP1d74FSZVPTpQ4AnJyaWUyfXcSGB5MWVzxGL2jJ7SJGjhYqv43XoC2jJqEUXBRq9Mbpm36L7Rcj3dmZh",
  "key1": "2MswoWAN25PSZbQ4moLczQSB2n42iAW2h1JfnckBPKZrVZ9ZeWzTiRbeYuwo1BfJYopQdomoAHf2Renkjz76czm8",
  "key2": "CS1jb2EyToddoZjTai2ttBKmgM12j28qFwAKcmqZs8Ti5jqnmuuPRxGxzvgdZ7BsK6xNg4Sz6g3WekogmWb3Dxx",
  "key3": "VgxxLspHoPA1zFxq1nyyTFpa57Y14bdaY2ZaUTK1K8JzSE1ntCMWQNeX3Tb23nMeXECTC1JwurLLXUwkkmKdCPS",
  "key4": "BjzxNfqUN6cozsFa1zWewuvvn5SGEbbfrCnHZKQBTTTuikHMEzqCcJtdwUHCyKkmbM3cSpoTkgsWsgt33NUCwZp",
  "key5": "42NkJds6WsLRwhiKzSs4KoffsvwoDGkaRvAFhoAZv8iNBGc9hyPUDMPMobf5mbqfgYXsiFNFKjwXngdtWfUbgMxL",
  "key6": "2FHKQNDxKP5GGnScR515Aaf92c5sjCU8weuEa5ZEAo23ur3ehJo6nTMsprbuaEBmgzCjPYffY2LxuiqoGKiP6vnf",
  "key7": "25fD4ZeRBsVrvqWNGCP9uk5GGsQdM1wb8MW3vkCa3Tvf9ipmomRPxXjNb61GJGqFBvN5Fvf8c9PExUWHs4Leuxmk",
  "key8": "645jCdBZ2yYiBcdFJRYfNSgxXPvxLdUarqCRiPnY8uG9p8RLpHeJaVTBCFzK6utjcNg5aUTevnU471sz3F4jJaHC",
  "key9": "4yZ5Bj1w8cjND2mJymvvjbmrub2NvXQTd177hpWbQnvhadNLfyrkorJFjnd9BLfGQpNuAUnT88SnwRDZuKwmMW5L",
  "key10": "53wQ6ZNAFcHB4HAy8P6AXcEDfnSf5Fqt3rZiWeQLMh9AzTLmGvnmQJrJtrhdErjjafeZiAZU4VyNsjGKthEujq4V",
  "key11": "5aTPq8nkCupnTU5Nfpz4V8fm8Z1M8Gfu1FVmZsxqSrrm4UH6yPpZ3CnckDCsddpMesiLSTtazCw9FZCyzpRrSanb",
  "key12": "53uoufRmk1zzUAtBtswRKBGMWz52yrBxuhEkcbtKuMPuEGWiV3HYJKuVt3jx6U16XAMCSjywgo7cp3DYau8LGQnd",
  "key13": "PfSHwNK3x6dNL9QdBwFAGz6ryfcUGAD11UZnNbfp1akRe5yNZ2ATkQFQrKP3EEYoq3H2ke5mReTiKncYqrdcdB3",
  "key14": "39ThFSQNkHn9DfehNAWZFE9LYWxjnSLkU5noCVr16skXHoXz3ygPLU56XuXr8E4jqsMuKwWY8LYoVtdeY5Tu9syT",
  "key15": "49vsKKKHnceEtJnietfx3gHMf3wHDomsWMvBFwAncMvBR7Vw7j7VJK9iuVNkkc9aLHP4a2EqLAG5hEv1RGD8XGrP",
  "key16": "Uuw6zKot13SXwHFuru5YBfATKmdEn3XbdWJMH39mMSCCoCAruoSJsvwuMEU9La6bRY4ioype2GBPzuWc1j14Svd",
  "key17": "4cmTqnfYoBrYW1wSBuuGb7cceR5CTSJsL43ucaJUFHg7Yjdp4nfJYoSfacXDiEitCMwkJJPuvsCwJfHHxiisRZtV",
  "key18": "brUVuyNy8K67dmmW7YUQw6m91RdYAVHu9cfqW8umLeKyXoh81K65gSaz67kM7bXntcvMAbHrvtoWntTYeRFZKSZ",
  "key19": "4G2pL4fHQUGyzdGcxzBxF2d5tjGX6qLNmcobavqQJo2fpyPFt6FJWZa9eVWN26fEeGksAqA4BSpVvJmkVK7J4Lvs",
  "key20": "5s4GmaSZuY1pXck6Uok4fHHy8uUTSrWWMedD5E7SgtC8W6btxHW6aWt2kgCoMFdFtWiKGVqNFpKdBokXjWYU4APQ",
  "key21": "5y4XJ1JhRvyqzHHmtLqwnwpVRYeV8DZp2fHNp6b3oyd3G8rEZMuhmft8Q9kH7NuNYgEqfBi83hT2iicdpv2ASHj7",
  "key22": "55u6LsLywh1m2N9oUwHoV4eQDaMQJQxoBymZGDPVm9D9fy7zqVS6sxDnWKgqzNDcr2XVEb5Vmv9rb8dTWMTqnh5D",
  "key23": "Ac78S2E9cXWvVUbWvs5y3weHkE6L7Qh6WQdbsmgpT1USpqEirjFmw4JC3VrA6FFV7s2hV4HXUd83nEPEHPTeMYf",
  "key24": "2k9tdyyirv6NZ6CezvsEBzxNKRT7Lm1UmgtMo2gjxc7dk8rT3igHb4a97CvpY2VKTN9PSG1hMDGaDRUF8NxDz18m",
  "key25": "2bks1bUvd8LDjabDafZybSNAwtnWEEmUtXQk73udnb2PeEW6MP8PK3nEAX86xYvL1eBFLmVAWunTDqXUpc1bUeEv",
  "key26": "687aNryffL83iLY4SZJ4zMgScpRmJmRSsWjf96EQVkBqGnGcW573zFE1bLtX1RcPnf5r4jc6MhLsH1qwxdnbzf7",
  "key27": "avFyqZjHLrCXFpsedECXN2eoJyeF97NcrBYKngfWrZ1HcVdbrMp232h9fbSdDpAyFbvD8vpBUCzN4mpK7zF9gfv",
  "key28": "4WKFR9W4X7BSpHAH8REGPHTf5UMNZ3ULeu5Nak6QR2fapNwpxJuB5NxoKfVE6qGkKj7PqeQh1rFp1E5vLzaryote",
  "key29": "5vcTUEZMc6HsTTpeCDNupzdbiXZyegUPLAVCteTFpBjmqYsvRTnF1g1DiVNr8mNrb6kTqtim77uLKzDEjdQY8FSM",
  "key30": "S7SruPsyTFkzmgxcqAEMmKBaxrXPyB9CqSdW29BRPF2aRkqiD3r3EiVJQDGdNMFPLwN3CfoxqYumr6ckaeNv7gR",
  "key31": "3D77cC6V8CF3g8ocAiUMUyregY7KyeACr9n3hs1rZGb3EaqApTbeSknA2rCMypJKb1jvaEq3jw4EJxqbrpjxdfyi",
  "key32": "3SBMoPid4CUUn8CNyrDeiy5gCMSb4mza1G41261sVYstYoUA4z7m5FyUB8idnj37x4gdFmToYzhYJKNo2ibe4vHw",
  "key33": "41Am6HNBDtiVa56uC61oURX2dYrcV6NnsFvkwoLaunP6TETinqG2YARbsNdTRfvPELjffUvmscbbY68ZQqc9rcKZ",
  "key34": "5SkKXKhdquUu3972omBg94eGmeQJRxnqwXnqBZnfXgUvzfUfSW23enTaUcirkvXMHhP8JGscVJnPnxJ53xorfLvm",
  "key35": "4gqscRULdmyRSUsBbWa9F5TKVipha2yA1BNXKSgoVUFDeoADHg72QqkhkU7FvZvuKX2YswHuDq8neFEXeNCc6dXk",
  "key36": "5XbSmNXziYNeoGh5fTTHivcfcFTuoTAParTv49naWykUL52bisAvoaumcNd1QBd9wQPgnoVD7KJvPSR7dzGicv31",
  "key37": "39CvdvGCiFhQccQq1RJnDA52ajrEWeEBTPGNLkiaCd1SSPuV6rWnZyKdzLZgUWupsqbsy9EGHJwWxsqYehHDg99b"
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
