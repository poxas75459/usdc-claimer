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
    "5MQsE5EjxpJcgaHEaiWowcNu88rfYVyZDryLovpGVfhxxYg2TiKbAHxNqo98mC8qPfrmxMBVJP3vNDYUHWsBtmnc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37Nhy3SuvHoTQQ1iR9cMwa47TvcZt2GWBNcG39d4CDiKse9ZkMpc4PgWintjdyn84vejGx4Pi3dttXAZBrMtTa38",
  "key1": "3qK29m6QVoba8m6fYZTMU2bepaYchBLiy3TH4Bjori3VUQ5k9sorD4wZSP5cdbpmZD7Dk4eKvYdrkP1byR4ZRqHG",
  "key2": "NDP1AsWhExSfHYRrSxvcV3yUbRbxVNAbXD9HRHL5oMX4fXYQW8hQigc4M3sU2XJY9kN3RXarA8YyAdx1rTdRRUx",
  "key3": "GJu3hLbRpWsfRRh4DncPeUWX1ASUvd7iyrvt29h4bespLdKQBTEmqY7hfMoatzBzezk11pZH8EERk5Jw9qiBh9Y",
  "key4": "5DySh4R2VnMhF4cKwZr4N9Yb5FFLqVh3KaTg1mRrcTPsqE53cgUpGpGnjnV393c5XD78wxoe5qeUEGaTiBMzcs8X",
  "key5": "5K8R4BLbdmvSg7JFJgnbxJWFpDDwDAi6UjQdJef85nHRHVVj6KNkeQ7KuwBVntMjNR2ocxr3zoe3LBSyVGaYnTWo",
  "key6": "59GzBo9tTfiw5y1dAaUpSoSdWjpdiMtN38hGJNn3kcW7FFnnV7gtDXNfQ38tPfKgpntigmd7RZYyWWNw9rH3D1mZ",
  "key7": "3c8CDgXpYC85hhzNbfPSTzJ39pLRdQ6JVqQY6Q78Rzp8MS8ErE5NxFkfomicsAKtR8PMe7rD9ijkeFb2TbX9WGDa",
  "key8": "2CZpTVNMf7B4fkpNCmvXyJjUSwsKmvY1dQua6Uk32sU2HzHHazgL7e56YXsAPMPMYKeEfPfmVYVDHQdgtwQFCwDh",
  "key9": "3vb1VycssJM4ud92kEimUhryhFP2Wi32twgCg5ze3antN4r5ywMLRqh8M6qcazif3tkbUSpYiqt6MUUyAJvnZt6X",
  "key10": "2E48PpcNgdu25R5ini9V4N8zqZszFtw8TciXLJQB2ZvoZo1VfSzNyzaQ7M8GLmmTfZTU7ioZTi7GBPQNUnd2kJLQ",
  "key11": "4MVtH7F4Zyj9x2iiyJmVLdraNwsubHq2sAyUWiD64dui56s1EPxVNidABauTnjpVDapn3U8SKWuFBVqHoQeV3jVz",
  "key12": "cRptq7XgpAjX6dfEV8h5FWhMcGHfntueHgmhit4AgQSwLy8iXrbCmeWHnxxFSx4a6B2VGMbKcAiQ4VEyooPaADt",
  "key13": "v9W4KxbnBv3xLaZWmmrkpykCgvpEG4LiL5JnsiACuc4cf387z95Lkku4mMXYrw9Bi279oTpjYGYFi9pNLQwVbA6",
  "key14": "5cG3asQzV2AoC6xGZkxQjNLaL6EPHSAwvmSRPjou3Qv1RoCdEWreidY6Ec2Su2SvJpdPk1jftUQqZun1eew6EVX8",
  "key15": "3URda3oYLtUQpHjyzQ7LNMAHiEd9LgtJ6krdLGWKyfXBnGiMpftexxH5fGX2EAhEeeFtyMocjRPVggQCvKpZBpTc",
  "key16": "3StmuLU6EYG7k7Weuux8NEcfizPFY7fRwLnni1L5h4t4QDCX7oFqNrW1gEvqUokCAA7a9fnssS2H9crGimqrfQnX",
  "key17": "63Wzx6bGrm26LsJNPZYH39GMCXC2WAd5ZFFssb6zxm9KgVQumzkgv1xrHy5bzLMtHMccKusXdPR7sVsqnndp2htH",
  "key18": "432AdLu4YmqzpvuLDzK1NE4eYxiJYUKaHEc2JoR8xj4r6XHopziCtJvYymXZXZvLMnhkgB6PeEM71RgJtfyPsZA7",
  "key19": "5BMeNYmiTyaqpbpVPL56nA3DsvGRobRmtcz6WGCkAUpzsXhW4dup3HQAF9WXEMVfFgsWWpKTeTx5nTYHZ2NZMubU",
  "key20": "2txuFAfZazkr6dnugxSoM3na8UE9N6cuYK4SELoxDCCuZ6FBfMHeDXK6duX9uZssZMAcdHWjdBGzzZwdasNAWZw4",
  "key21": "5u45vWKgDn3dva9rHfe93XbdFzK32WNkEWzmhNe8TCHQTpLs2ucCGHnLQZFqEoecoFEYrGKZg6qXeYWHHRS5p8rD",
  "key22": "4YuZU34gr3X6VqDA1ajYuUKW25KU34vgxZWWWoorZ2H3WP39rFAyPgqK8iWG32DTYCAJkTGZNxy8UAehEHhVxHm4",
  "key23": "2zFoAGB6gqG62RxoE7bY23iNJACkXvR6rR647GyEjeT2ygadp2udA1zZGRqh6qjnF1dbNg46Zmwp3CYEhkmLyGU",
  "key24": "2Wek4sT3kAocnq3UDKiV5Lkpf73zHt5mxF9F5gta7P8FZzBDdu33UKbjx4NotHpcFqndkNCADCEXk2wHv1EKwCKm",
  "key25": "55mqkm5xeJMCTDgJ99qdKGT8kW76XxXcr7AEMfFHYJ7MR9uu3WGTekQJ3TUoyeevpFkKKqB6LxU8VP7NSyRkXPU4",
  "key26": "641AeCP6YjuhoGMLvvUTQ1bArJYup7SaSuLpjkxWsSWURi56ptrP4YRBY7LSPVhiRfnwPiiycUniDkJrCgPqQ6HG",
  "key27": "47PtraFPbUBa9Jzz7zMDHJJ9AE4WRoEjhMov2wfrNfEYNXi6gFJsgsawfcfY7QbvXkqgCGjJwDtb5XWjYMXoRieV",
  "key28": "23DMChaArSvQY46A61pWGxGQKGZKnkz89eytqeEvvmSXFwRvmCGgeHwbNdyhCrp7i2scpYWcyJjfCLaTR7BDyKtB",
  "key29": "3d4aL9iVrxcc5TDnd5uWzxWwMCxSKHQ84jWVTHbZT15WXfdVYvL2iSqQ3GxWSARsTgqbZtNPUmJEjdB14QMx6CNz",
  "key30": "32nt8Fnd6QNKpa2VJpyr7NzPW6ufiSzWj6tyCkvocrhK5ET8c5gQCynbEdaUfdGxvgbbHJGbq3yiFpApC7SujDuY",
  "key31": "2TQXLCJ1ZC5wEEiV2GymSPYYTNJ5GA3XXf7oUuA6Tojvojg9pRatSQUXm5NsH9V8B2UfUH2sX73zEyGycAaChTwS",
  "key32": "4fv7kyGdzDPjc6nKvQdvnFJCyBNxWQnVUzgSoXWpUTGqQJKN6K7r6SqPFE23PtdiwEX6SrbVPwSnkWjHGSdyFaSF",
  "key33": "xQwPXAgVmdbJwjKgzdMoZmRMkMEAkDMrtf6DSp6mbY9AY6GQKF3MiWx51kNEfCwai4MBcShUFHjJmKJRiTxzGH8",
  "key34": "66KXUcq3BgWxGMTb8msELGKimYvccQQXNvzYSAkGg6no9iG9zhvua3jFekMZqoH4CoJZRTbTbcXppQ7XjoMRvN7h",
  "key35": "2nAzbuputaUAghJB7SjabokGKyrwdmdMAX3QKL23xWdUEasuaeYJ9zcc6zUhRWnkqKf6AbEC5m348NakgdJB8Lpr",
  "key36": "Sy8r22dwAXcWu5eAvjC6cqouuCqYAwaJSdbkf5tsrWGJnEhT3Yz2WW7HtAQD5gemnFrirBQy97bCzAcisWVxBEs",
  "key37": "pbUgJtuNJMi3opRoyfHaDMDdUwU8ceWeTv5dQN28obp41jVDbMXpfB88RhYxwQ5bYCHWtWvpbNy5DK9dzCyNwDp",
  "key38": "3Vt6WpD64ZKkyuYaRJjWTsWqgefR6NPTPs2aT7SohkTW93hbyWaDgzKFg5CjRzb85si4mGHFt8kpPxGH8rkPjh2k",
  "key39": "2tsiPnseowokkAiWQDNktpFicgDjy3uuSzcNpL1rGiMRTKVpHsWf2ucNi9hzYZLPe5aGz2ZmdGG1kzk39DPdt3xw",
  "key40": "57KXKhFFKZJxJuwFjLjqxQcTZp5J1h9iYkwLw3NXPvQnsSaer3nxsJV3Jp1zsXMMoRWMhrhycfT19B7CYfvCrDCv",
  "key41": "ULHEwKXCqxNUmt9RuCQ7EkaLXS1XUhQZ4iHg8z7P2MbLLAnDWATKiC5UxZUpAM4bd6pm387B133bfH8G3KzTEq9",
  "key42": "2jyps8vCvcfRjECoPLWVrqFWX5aUsypfF2c1k8uw5weB5X8cSxVjnJSaxkp5Pzt1fofvkumW18LNwnhZuwhWgsdc",
  "key43": "NshjsviYHr2FPh1dohVTVd6mZaSzbKwy1C42eVyadurxC6qtqcDDbcPpXFzvJRtMxpMtHKc2RBV5zNP1Jy9hKuZ",
  "key44": "3X9uVYLC4SSYGKaZvPCLaBn3xVXSwzxuuSaMZVzdJQmVYv5azhViQ6yefPnQ1g717sWVFtCxC99pR7rpV6FYSmvV",
  "key45": "5UBRujFZxVvASz5CMBGAStY5BohfpGKYFvcm5f6aN8smbF83eKkftwocKSbfhx4wcjGJ4YDYo8twkjnTnyUiyjFQ",
  "key46": "4ibM87XNDja53PiwVGKxiDFF7obWZmfYt7kXonjpxX5dBURJyPKEqibQkGsTmYrb57Cc7fUuYA4P1yhss48Gwxp4",
  "key47": "5pm2gNHd96uHA3xrwLxJRWSoY5q5H7NNV8kbC4NUDdbrK7sjVqk7hYvPKygRNT7v6pwiERXuvALBoDn63DRYab6p"
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
