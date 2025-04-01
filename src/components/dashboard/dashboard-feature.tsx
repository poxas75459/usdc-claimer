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
    "5LYUswvK28ozxhKPpycpT9bTQ92oDchdWrZAeCpLfE1cE2ECr9Fr9DTeqszJVwvhkvBtSASNWcPJTCDowtaiiBmF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uSXy8mWmdHvpB9qH9a7uHpLEkhorjZ5m3KvDzejpW6FLhtwevcKwNDeN9AqpP79YgJCJpx8nJspzRJAwcRkANbW",
  "key1": "63Rb4WksEg7jNEEjCbkMXf3fB7Tx7bnnYPU1gVbkjtmFLWyc9C2m4PVMPhw8cf6p2eFTBpfEhiLwPoVsKB9cCC6A",
  "key2": "5hkkXcNsqLes9vRFAXpf7dsuF5DSFpkbAfPZuFRJsuwMTiXxfza2s3FB5Rp37q6RkLNjHNkDRHDtocF3GpBsLQc8",
  "key3": "5dzCS3dGZh5GEkydZ1B1h1V5g3bfJSFxiudaa4xBsLnXQur2Kd8KcEyyfVPsD1s9Pao1AZeeV4Tpci9wfdr3YyzC",
  "key4": "4gGL9PE5AiZmFLRe8pH6ZEx7iJk36oABggMuBhNvU5ZYRrtPDG44b9BpW558KopEFUYKm2QsMQPsUjCdfDiD4EXK",
  "key5": "4uQMBDdo8pcYWFqpxNBcr3RWDdd2rAwgozHnsAwQSz5FYdqa3JSxhkJJWcoEwz1h76pFLLvfwVteX7LqQugusNhq",
  "key6": "5LxRiy26NgcvNFVswYiD1uoaDwukGJJKezwsRmZydAWcyDB3kbi5kGyZrb2T7HtNdXcNxKU7YTS3qc3W5QUgUThY",
  "key7": "2ihDtSpeyZzW1ACdf4FM3arziHjaWkBqo4jd1pHaeUzbXiiddgtMWbaKcaUdmaQFnmgmG2Gs6je71k5dJQM2bhGR",
  "key8": "28j6G7rLArX7Nw4UWrDR2ZF5aTwZbdUdfTLB1GjLuaDH57YuDQokTdQVB3K3SvLL9d53TrVHQgs7XSaMbsukSJnL",
  "key9": "AJDgMi26y8f2asWQYDcRYar1MFG7bFrEV9ngvAuuraNrC1zjANSAUq5cBuTNg7APuSoJg24it6Ns6Dsq9iaBMWm",
  "key10": "2VNDucft9PB2HJw7UqYmcXEkJnpzfJBuaMCcNX3kHtKrBocrcctXm1QGiUJ8oEL7roPTL6RfL8gVVsTYXhHohTH8",
  "key11": "4PknWFqUQvappRdPVq8q1nJWDdL5uQ2HfySgP1kWyUrdh33Y3kyGNdf2hVkT238WZ6nzti2JaDTN4AWgn9jy2kbg",
  "key12": "3NudQfc6c1SG2SYW9mD6D5j9ASaNuhXyWT5WEgziFYDn5mVT71ybFsZfepYjomK37A96DnNmZypg7YUpZCPCHv8j",
  "key13": "4BYakVqo8twQRgzHsxkzSDseu1JUy6Y6W6DmUFQeUdi9xAiPLcenmNNJQaK3xJ7qXTRe8jz4MaCfatrNgh59BAuD",
  "key14": "5P5tzaLT4CaU9btLL81fJcuptJhBAE1G8VC6zxHeWKE53Cp2HCAcMxxhCvE7Bp7UJg6PFxGzgQP1cZNtWqDQ1L9",
  "key15": "5gSmY7wunFEPPdhcMiWGjN7dwtCYTANGcShG5zBCNT9J58iEARMosiR1SFX6kG5EurNbqBFXKzdLC5mATDkmwXuk",
  "key16": "4bQbaCCw5tJTK6CyUJhj117Kedbbe4n7RYg3AwZJahyDmsTaVwaqyW3D4EgLLQww7rDoeowytxc1FqSpWzG7UmPT",
  "key17": "5F168oicqMAYJ8uN7JyNC8d6kSr7orXQka1HiLYCwfNRFt1UdTHmMXDrJx6cqy7S5cg11pTeKa6QaMSKeM3Jj6gZ",
  "key18": "uPRrZXerggyWGCszip71X6kzN2wMtRTz8RKL1tv6KnvvrjggUfxnn2zhy6AfNWmvQATPs1eGN3c5SVZbHwjnJBr",
  "key19": "4MJ9iUniZRKaKZu9vysxQ5rU6VDkdyHCibTJigi5N1GKoQWxMAuHB4ypkUu7hvF6Afg7SDTkdGmBh4fsa5HWBfq2",
  "key20": "4hq3FqHfS3Ah1XSnKRhPLAafYEZT925djYwVYrAtdquGXfwDSyPsVxD6NoFE5dkPTqaYvV9kmB1QtsZBkjhRb2fB",
  "key21": "4RFi8wQVuh7U2coR3uKd4tYgQ1SDTt5bD6ydarDHKhsF5GRKmvpWmCmXJYrnQiPNQuqrqgSLfke3XFscP4Cmt8K",
  "key22": "dxPfbmjjQNAPsHjZcWRDpszELURQggooFrybfSs8qZyvn5G6QHUpLT9D15abidz1twqQXJN36H6b2hGjNsR3XvU",
  "key23": "3JGZuRMSj5mCxvMxbe6mnDhi2Cf89hU1QYNXZzndLGDEWCzwdsN3MdZ1HaA6dHMkATpwBRQ32kTbKY9FDejxfkAU",
  "key24": "3hMkTbgQC32iWUj7hDSveLkT9eJ262jcCXnGo8e77CYVgTWFXwiamuLaE998JVBVCAPVHTDWZbf8zN7u3Lc6SMMQ",
  "key25": "47JvUprGv9tbGzFSgD7WrBCVWJxyAYicDdWVSLfdmYgMJRDtTTRYeNVy4kQQVMp9AGE4LwsGHdez4TEje2qM1KQN",
  "key26": "3fBiJHHLp4WoZVSeDRsgQaSvhkgWf3Cn1Am5eiwMLDFUG6RjftNtfg9wRqSC71tAEKDK7kmAr78wf4WfLcQKusKA",
  "key27": "UGQN2ZQdgV7Q47K79gq1LULVURWFJA3hGtTBxSY9eS1fp4Ni5ZaPCPsngwoPugH7VwEiv64XHcoSYGgKzsqSNPM",
  "key28": "Csim7AEgr3S9bzPcRnEv6HoGm1sbsc7jiS7NrHxk3mezXMQFaLKcE5pWijn4HyvErsAaWC6uMPfk1pHLD2BHCti",
  "key29": "2oFj8iG1t94jSFM5JN91j68dZMDU7W7q3DBxXUZeXNhd6Uysc523RoZXkcQzQAWjU4iREU63hQo8PyBA6aGUXbyL",
  "key30": "QzMNRY98njgtb6Fy5SyALNwhmAj1nad8P4YKQbvSmzYFDrUTn9NadKekQXHdAo1BJ5zR1pr5R96yuGimaSDLoKd",
  "key31": "63RMVAZMozfS5KPZpwEsoDsHA4MBXRUJCvAg1XDaGP1fooALzA4HRGEfxwyFL8d4pUemvtCzEkZB6zLc5xjUjTyS",
  "key32": "3utB6z9FVKzLgHhGRDH2X7gi3Um6xuQvHhUuAAZChCjnPxze74hoaGvXhtm8oJMTgd83478QnBUKZhrcxtKUKGRB",
  "key33": "4mBt1KJHDhitz7vbiA3hmJ7YL5GNQSXM8wAHZQxajt6jpEJi15Wtw6tX2m1B2vob79bVjLStp6a8UHERByxW31qR",
  "key34": "32RKGuTgifv5aGQUheFwLCMtx7TwNcJwpmguwN9hvjR97PaU8Ec5tDJk5aZwvUwcUY6tEbYkyfNicLQhVj1ufQFJ",
  "key35": "2g5AtAMZ48CyTiw4SCraUgMLJTy6Ecb6tq3LtZNtWzCqr5qJv13XXFiMeBvihgjTrWSoCoiwAHP6SDh5PP1ULun5",
  "key36": "3jvyZTFNYydCEkFDUihgtL6yJHsCKBN6qvzpnvd6pFA3PfPqjW6QLKHkkrbF8dKDAMBAAMn6U3y2rTjX2BUMt3oL",
  "key37": "2ZmQhCbG4cXS8WNtXQXPeVe3sSfRKrEZJVdbKWceAxQv95Z9ayEh9t74NVyYe4Poq4XL1BoGWZmze5aKpPDkLkHX",
  "key38": "58QRPjZxKLWCsrxzvkJdAdh5UcW8Sp6wb5MxFbdXdCi5xvhhVA8x4V6yZhQMe5rYXWY99PHW31eEZrLmcqSB4hEa",
  "key39": "igBRmp4JpbKBJQkRuykPLuZb3wJLaY1Tm4B3zuRdasajcX3ohDZ4drhaBkCxj1oiiWjK9zv53RukqiMuPaadLJ4",
  "key40": "3ZZZaMPziPFGrxyDkin2AnuHPFioBbRkjiZp96V7o2zPwLvoanJtusFr2W1NnfBf93XGi8D9Cb8R2sEdjEz3JGec",
  "key41": "4oe3HkWbNTugJKodzqqPcgENZARF4cmLtZb3sAWGnyaQUVGkJLn1aUqNFF6rTAN3vrZP8bKr69pGJ5PyPY1vodqt",
  "key42": "4cE92giJSANYEq9gD8RNeBYehdZPxNbLiRLspjzrQhZSsHTjaYvVqHQviGTep78HdLp75BrLoByqaCPGt9B79irE",
  "key43": "2A5y1v4rWv2TkZjqkWvfjxi6JrUKHYfSMBJNeaT6b4dmhA1Z9xgAuxVJkUsz8hYVh2MNBi1fyGVbkvPya5gSEqtd"
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
