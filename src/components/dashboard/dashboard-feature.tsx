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
    "4QJ3woHSvrjiSBdW69rqZwkTP12VDYVqABh1MUNwTVsTvJFsWBkmtQrWnfqwdBFHmWoBDaFugbbbFFSqBZ5LRn6u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MFQRhBM1Agr9TnixJ2Ux5LKbMXvD1ZbPArTx6GfDHdiUB4fTAsdMhGEgdcqNJFC4iR1mqoeTpDd4PnGUEEXCJ4F",
  "key1": "55AgJSUquA2itsBbV3Ha5Gykrtkb7hgzXXXuDVAtBUWDuxQFuERApmLjoypG9co3Z6BgzXBXUcZrdb6Z1kLQkwsv",
  "key2": "3tsimRdrULDxBjcEAmE3oJyutvwbHSXSAmDan8xpnKkZZAFjDhwCq6u3qFBt7pKUZrjq3xRTTnUnVrrbdMoxzZwb",
  "key3": "3f7jBDwLxMpN8S7nhKiGm3k7giHc2Q5N2wRPkQ2iWCMWdjwLmf4ao4W39ia2cUoHb8fTd4MJea8TcsCSKvXpPMNN",
  "key4": "3Cg1hnHPMCUAXnZiuNVJn6AwAa97w4nxLvayxBNa9dc32WkzgzwXpVmAeJzhDXzD5vwjpxWnguX2ES353axVtui4",
  "key5": "4Rb5t3ubw4uhD1ogxCwSMZNk5CYZ8K67nM4e6VS4dRqCW3MyfxaHx2HvMg3M2e14ef89bBDTcWccNwmqBf3oGV6o",
  "key6": "5LSHveF3SzYJwHtrjeHTrZqxNnrCiBnhycJzS9CWC85fcpis61MXrw66mDTEXvbjKC6SSXxuDUzqkzQwSF1NCRF2",
  "key7": "2dvfqgavjuKNBcTb6BqSWJ7hNDcVSWLy5asjT8oidfpja4eEdsah7hcEqnESAcEZeSGd7USmBfCyT7a6vhvGR8Kw",
  "key8": "3myZcKKB8StzTohm9iwb1MFJViX9wyCrtF5B5pqbxRTNWziL2s26uUMYRexE3Uw97xxrzVXbCmfjf8FVmVh1f7m2",
  "key9": "3G5ovvBgZhHFchgC6aJrXJoCAvzAERLJfnEDHd6zhpX5P4byCAL4L7eNHFv1EhEyJoYJdArGSCXa1aLD8oJvoQjE",
  "key10": "5xVphXrtEvCTXvF2ErN1R7hr3HD3qijkG2zfEMfUeHzof2ffJUL7MAnhtVhUtnoFEEJAJ5yT9PRZMAE852AHNpwT",
  "key11": "2tpTMELbyw9BR2r8HHPH3189FpmVmSk9rvw4LegPbmLLf5tMT1KhqjigXSBAc7GP6wQwMnMX7mjMku88kgNPaZUR",
  "key12": "UmBH4fLds6zbUs82P3pg8rWTLe4tLGvM6u3soW7XehvAYi1ieCPEsRA52YwVjT8tWXutiKb9qbmvDgWEddmMAsy",
  "key13": "3HiB8tPASYCJRj26qsbr49nbVT7H4ihdvBj8Hu3eNPV93cqXdwC5QAgYAKETKg4CVf6eAbPB46BFKnLBN7Crp34U",
  "key14": "67beLWhpR5ZQh79unSrucXTPLYzfsLceqjHq8WqwUKVz4vv2wpL6G9RnTGo1yEurtNDqxrjpAc5T4LVUK2s8KYn5",
  "key15": "CZ3EKb31Zqgk6ydokjp8CyHgPh1DF9h4PHsof2HRE1B3uPawzr1nyuZX72Mhaq5Ns4BEK9tGz79F8zDzW9EzgfY",
  "key16": "35njGN6TXptSBhNkMzKS2zQNa2c9K29LHpzMHxRaeJXnxtzpfzRWTx9uZZsFLdHc4VPRpW7eGCfmF78FDyFjPW3o",
  "key17": "48ijMwqYRXpHAwA5RubYG1fnkVYzj9skorvuHdn6xQ9HZnitLkzmiJtnVLDv2haSdiGbjm9P5ghRS7vtRRbBwUyM",
  "key18": "5kjkQrsa18yqfZabyjWyT7bZb3aNUtsxFhKDWPte7iQJ7A1Q52ikvjHmtemRSp8D64HgVRzJf8CrczFi8KD5pgRh",
  "key19": "2KLerKwWz5z27zNJdVrYanL4XZhBFviPPu2VLjkfQhZqowEw3gn6mWQk9xVAfH4PRmP3d3975a6gScrApWDNuRau",
  "key20": "5GzYsdg4P4WMtmweWMxZYnEwfmFjYzvpfA5YC6TDDM4FbrDrGns8TwJQseqRexJwi6eoskY7VB6UHgzmJqyaEzp5",
  "key21": "2LYGfviyW9z7ykGaEZTSV73BWCxv2xagn7XY721x9cWBpp2sPbFF9H8LmPwb78WnW7v3Q564Pc57mDaAzwvrpy7C",
  "key22": "3xzRMFJdwxGRWjCEaGxnhu3cxDyduDNCETd7aJVWAHyELW8y7tEJpWBK3zmgUU6pcvC88n2AUaGRajAAw3nospwc",
  "key23": "3foxXfi6nCzcrwsXjFA5oMoNecHppQhYpZcYKtrnjEuRrpGjyNQopvpFHscEkDByhndiiQ95gbunnFVkndDoddij",
  "key24": "5EE6MKxK9NGqXFRB4YKp3mcwe3fN2APGoLwxWvLWrnGdjDwp72LaDpc8m92hU56U5iaPnCymjXcCAbtNRkAZyCGP",
  "key25": "5RFegjxRgpXHE4QKcqZdqPtGPjPh39ya1uVC6QPo6iPdroBbksAjqziaevMXqxymbGm5mTLMsHyCwDM2xRm3fg5R",
  "key26": "2ZjpK7eWP46mbRuKuWsLEqLuFmK7q9BG4ZBPdDjyUrepqsMrEfQpbtEazUmwXgm4f8DJELoutuEH1C4QBECehATM",
  "key27": "3Jq2RCgshrrWFHrL7X9jjNJcV4k3QB76P2pQTEUsBRSQ43UA9aJDmAHqNVwwUZkpEF5ceVq56NaajgZM3964xD85",
  "key28": "5b2bWN81GCZU5nnHDGRAgBnxKWb9PwcqbkLhCCs7g1afw9ai3Xmbfyw2DGEXfav8fr9FHnRwyP6F8ghiRYSA6U8i",
  "key29": "DiTXTemn7MsNzriqpVVKX6hMYHES15rmUrrTengVApWRHYgsjKobJDDQ884MTB5vqaogBMAnpaN6UYe14yC4aeE",
  "key30": "4ryTFburPwU3caGm2KYQkN8x3QqQC1WaV9XwMpog8dTbh6tqtfArKeKtojUNWLyUAZpAUnTotFqnBrppiwDSaV5r"
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
