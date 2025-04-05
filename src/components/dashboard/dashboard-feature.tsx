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
    "28Zgoga1eFVSy5v289KdPR3ukRi58f1ELQEvZ14QAu9J5jz9if3hYgrKZ8aZVd1Jx5m2sjy28SJSHuTHc4FWrjp1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nD5KKLcHzSFYNXAAetP1XiLApu6Q5EX8u6i2Ki2hthwbSuppLYCbpSn4r9rTU8RdCJZprBwQA6vNavBHx1EpFbm",
  "key1": "4ZNFcLnfh6Jve2xrRxpqs5SRtGTMh4nfBLdHYa2cg37NpfCLcgwmbrpGjiWCTBgbfQkYSC7eEBjLCYyziZAJFYDb",
  "key2": "4UYYapLbE7Y3knGQ9a8aV1vgZes1qTTfF4JrfCCyiC9e9WQZ3D2pvMFMGdqnLHqj4L64ZdL8qZDusoAuAydUsvPD",
  "key3": "53sUDW4axGhZNy4aeGzjZp3MAgKmwcGr5WevDMMjVvo9znvsc3z6QjNctu9MmkjjLBPHyccAUBhrhzUZmZPT4bex",
  "key4": "39FC7QzHHbX4pvboQJWiydKvFNUeFYN1yo4nzWSZJzyFKSRW9qiusRRZvWrBirGR9LNJXvaLnYTgCJAPxh6r5CDH",
  "key5": "FMieSzJtpo3s3vqVCntYxJdYjedar5JDfNokPh7uVUBfKek8YGQbcWg3fnHcpYGB6N8xNvNmJRjXSs2PZZZRwir",
  "key6": "4NboEp2rL3gGu85wTdvkxfX3Jgq2kRe6gEUtDqZWYqboNQuyzuXShGnmAkMZtBgWMYPhJtM53XBBxfEfdU3zLWoe",
  "key7": "3GSMjWHHWjubDcaciUqZ5on8bujiTS8uCHr8B2AeoYz6XKZ847J1tgxGFmgzJzaqQGvZBPF8oiCG6Kacph7ypgVz",
  "key8": "51HZ2hdSguMUDi1wtqZBJFEtaUgBKRTXsQ4rrpr7CPn7wQiGfVY8iGhCEu4MhRDFmwRDmcvNBXiPy9JxyagzMLYu",
  "key9": "5fJZVFemagEQ9QF9jrWcXLuM1gURb91j5Jn6hc7HG93tzpWox8Fvb6y7XYUBksjLJSeAm53ddzbKsL5eBXhoPUsJ",
  "key10": "3G25CrQGCT4EBwRNronkqCaHeAo6cU81izsELjy74zXKKTjTKD2evmEyDJDheLw22cBedKAq84QsdZRxJXDoce9w",
  "key11": "uAkHJFbKkZ4RyzDqcJq9g3xLCPdSZjAuppu1vHV6CxmdEFxJTKY7sA8V1EruZQLhcWwTLdog63S2GQqEUXMJzNf",
  "key12": "5rUWSMZ3BUsZ9V1a3nmd7XgQdEBCkBXEe9eLXQEisNtmdpSNEjHmGRRHfXvuThZJtmDdH7gXt3VqF8xVfEMWrwAv",
  "key13": "3doKUavzLrDA8XiDUtZaYHLoVGuZa7WbnAoeeo5rZrKAMjnbuc9LDF2Xn3fvGAjGZHNdfnrBjU9HQWWTZQwjRMpv",
  "key14": "bZ7AVZiiChk4bEgWMExXWw5fW8JE9dg6hBoGWhCCmf13WVMcyxq26uyTgUd5C7HU4EtsCLFuW7ZMWNmPeUGqzVG",
  "key15": "NBCykhoM8UNAWC811sQVvYVPGe5f8GU6jHEMRKhmiBhZ39ZVVFh179Av1weoV8EZgQu4j2qasbXFzd3oYuFFZFW",
  "key16": "5gdRk54QLShZ1N16mmDRb1AZt5tUotaXP4JfYrfnW4Sn6QzVCke7Mbvoy5PTLGT1yg2b4UfUhJu3p63sdX21msA4",
  "key17": "4CgJnc7hTeRiGgfTYHHVvcqGYnodoYnMtjTQcX6eZzrZg3mpUDnnpqhMjcKoGuQHMmvoMSvLXm9mWC5tratsWZsK",
  "key18": "2bQMQF4MtGpge1Ec7HiUf8dBRnaArXRkitioSrYqx1RChxWRTDRhKaZUbpyzUiFRXHftWgusx59Y3EwCRLSG9P7U",
  "key19": "4stc67e1dU3w2fRiE9veNGPFwc2t7QYvatTm2JpEurrZ8QL4humdPyHBdoq1Sfvt9GVUqgYUmRRFG4mfbDBRfaRM",
  "key20": "4xiiKdd65rgmVDj1Qcr2RfCg4vZyV5ziBYyGiNDgTc9eXZPuR32HkFGUZqnNtKzYNAVPwTVHpzUe8sXAtELvTKKf",
  "key21": "v1yqgGfSd95kSjp6aoMpxzwqRnHxC8ZL7eokp3jxKCf5eUWSzRpp349VR1J3aCHNj6RncqMQ6SJdDtaRxkGHdqQ",
  "key22": "5kKt4p787NjoWDgMbmwys1C9pUU7r7Z8o2QPv8rinrmBoWkMo3NgGn4qcgQN4e19BxS3uwcqLbdrPFrWsmdQMS5g",
  "key23": "2eEdNu8vGyRJkDc56ujD61EwYWK3XNueQ4NVamE9dS6cQP4yiUMfeiiTYm9bFWZc3PnhKS2NrVWyTs1r77xEx3Pt",
  "key24": "bMiFKQEGCB1hUDJH3wAQxTMfz9tj7dQBbpBXEXeCmAqJkYGSzXJRbfYG9kttrDb3yXdGkGQaZnTW7suGKZFhTCB",
  "key25": "2UH8SvzgzopN7TYZx5eSQ5dgFoTc6PTfYfDDrVoLMrZuYncAgrsCWWDpYh46cc5gvnbdwso9USRwzE59z5zLLARA",
  "key26": "4Fgd7SJCtRF6RetXXFPjx28UXE7j2D1XHMbam8rMNYh1d6DT15NPgd3SdMnuBpkMUAHwAjS3RbD73zUTXS9gMGiH",
  "key27": "3LWiAoUrY8UFd7YCpRxE5g8b8qmCcR2qesQkq3tJmB4hCuezTSy7gwyaxnWcxjVEWgTT19PFdp2G6TwBB8kCgfYJ",
  "key28": "MjbMQtX1yeouxUT2B9i7TXZNoF64EWP562BuPsUy5htAb3D9kPSB42qWgjWW92ib7T874Doc9CyU5yRqiPBKueN",
  "key29": "5pQJH7Yi8HvgVKMR4SkcD582pU6YPCwFcMSAvibYyvipCMN2nz2CjP9qz9BuSAfiTUyLEQgGoT5Lc4TDnxd9EKxM",
  "key30": "34FZPsKaDzhekefTn3irQ2edphgbYvatGDxKCmvs5vZKYdiNew61B5TsNm3nQ2Ww4obafewpQLYps7n5wPRwfwMm",
  "key31": "pTUwELWZdxi1gcFnYSe2XCbdgZbVDZLWzGqtra745nrSRUxpajV13brUAbQetrDurXP7QvWUb4VTYp8FNb2oNoS",
  "key32": "5gupxKYdYGQBH8KrCs91CBZjCA5bfHA2pqwDRDkAAeAjfSk6dDdiGYTQY8x7UpCj2Brz9ULidguDgAfbfyWGBmda",
  "key33": "24PWDfcM4A4bakYi4qrix3LV6pNYYaAsJ7VR2927RkmPAxuRCBvFQ5hPQuwgYMXGKjf23Jt9QHueEfegzFxbgn4X"
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
