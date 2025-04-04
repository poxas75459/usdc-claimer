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
    "XdVVu6zuiQfq2xt2zRXezJnUhZRbxpMX2h2ZhCMobuEr8VFgWEja9GDhg5m4EvN7yBoN7nhsHV1AzaTT8Ummhrq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LL5oijZKG3UGwgp7u2MP6j8aPoKTMncwobqa4P1KmGRBybQ4STJiB1jMGCo6Q4e4XDtAepKXM7cDhAv1f4b6aHh",
  "key1": "5QeK4tLpZPvF1UrAxrPEC4Q8Sx9Mv1NE5ubwySAW3BvJ2L8DreWni5swb66yXDrVM6X64kWfvesN8fH4Y2UVXvca",
  "key2": "54ETmGKbBedx6fuR6di2iHCmBk7hVG4q5kWJue1fkFsYZKYndwjS4u9BMYfVpXsqUqJNg98mXdyQz9kfDpStjg7B",
  "key3": "5LGS724pbfT9kQWdD8jcxmybwvc8Cfa8VtEbKm5bYoMgjyg7tt9gPheRMsqEp5xjY39wpbWFiKN68qikmjddy7Ah",
  "key4": "3inXa2uwjMhforho5RDmNdVvcCzXGiBrpjou8NJ8hJWX7dGprn27J3CLwozbQoYK4M2quAoU84Bi5veLUK1cvKPX",
  "key5": "4ftYd1Q5ApFPpAadnxvoLrhRazh1U6eonpzhTrT67GYLyHzdJjsjKyGbxxmwVSmERJpbN4eUFgPtbiw3NWWVBLJx",
  "key6": "46nZXe8eS2VMf7JzxL9twJH8aKcgxsxAK8HWfedS6X9GvtsRWNAw9QrXUCMvXnSwv3bCk7UT1ED3ufATkHefDczz",
  "key7": "25b48nrtetSxiMTgtgzgVaCCZxiBc5F6D5bSDBgyHvJtceNmeauHfGtNbmz8iqakYf5FvxCZEJedob68eoYshWHY",
  "key8": "2DVdhKjmV5zdWFMTCJytw8X9gPLKDHoH8Kx717jX8xQHPLPAXmV9YnDSrpnNhm5cbVQn6uaePeTWXmpweR9DQN4E",
  "key9": "4MwGwhiDJZq1jLaVkShr7fRxKgp6CnaMuYikKfxb1u4QA9PTG6WavfVEPW1Q7wZEJ4NPSS3AhcSC5LQW4xmQRTsX",
  "key10": "3xy4gaVAu5RYGUwJGrTpwC7XpPKgXWL4xNhb8EqQnQZqqTsp8u18ukn2k9Ss9ryP8axkXqFY6mERc325n7WH7c7j",
  "key11": "5qxBDcjHDCeeMFHSw583jZKCHRbn3DG4KAziWf5CGTLL2kBQyMBSJzUA6HjhwPBxmugPYeYNpYUdxNi2uEF3Hj2L",
  "key12": "5gegQNamb4mA9HEyEUgCu3WT1c5KddZPJTa3huANjA8ZxYxGVXroNQAx3wPEyuPyRYUUMC1H4xi3UnnSxSb7ym2D",
  "key13": "2ySmSQJZDWWBsdL1nY6rsT8MMGnEpqFroufeWcNALsgEFP5XXLto7n3yyypdNyYm1XE61GYU9WqaQ7sd8GbTb4kJ",
  "key14": "5PeYDZzNsSxE5Ub3BdAZFALxjdw3mrFUrPY7AyS7hLFcaetbT3UV2Zhc3E4kUzTjf4BeAod231VYqKhhNrXqf3pv",
  "key15": "4Wtna76Haw2aogrPQs5WVvn7T5j9f3DoH8bkzcGHtFps9BGYbwKdyMLZz2frt8deA2LgcNM9oADyeQxApzmvrMip",
  "key16": "44NLDmhrPcFg9JkkYWNDRZ6FsuL3T1ShanhSg1Hji4CHERneLFd4oT3UVHgRLw6eowxCXNvacgQ4uvR9uhssnkJ4",
  "key17": "62uyTaJA31HMMEDin2JtVBpDQQ5CcJEhrWM88xdPMQVVQjLofQ6ysxAqmQeSQj45w9GWoSY6skZzVMp6WRsEMkXx",
  "key18": "4PW6qopdAYELsTf23UXvvUV791pkFwnwCbzYF5BCTaDf3Wmjt6HPpuDQYVdkzw8me31Md4zzmgJgFiaCmSVhJAMD",
  "key19": "2VCKL1c5T8Fqcw6SzoVwEDAfTE67fdtQu8ps26DEsxvjVJm3EdbePiSvtq4ZdWMtcCY7zYsodgDHe5GKEfZjwZnN",
  "key20": "42z5Z2cvYWZFLkNHoS84Dxkup3FcsHr9FsLXP63e5Xh9WUShquL7EUH1XhjUpsEewGnUkq4xAZAAuPpgXS6DjpnH",
  "key21": "9MXB1xh5pZraVh4YA6zaYavNgco5XZPDkN23n7f6aKXkrr61BwzZTr5RbEWvj2qa5TPbJHC2MJojfAQc9dqeMpF",
  "key22": "FXGhEoNGeS6p1BdCmVwZSi8wLojVoMoRBXzsUjA5LUbrf9gP5wGsukwGFZgq2gaDjxQDsz6aT9uUepGSuRCgoJK",
  "key23": "5dnKkuu2JJ3Z4EHfrwSEXvh5UPD3p1Mnc5kATqPMmBFoGoyjLSYboEPEMie5FM7HPqZWwUuWb62ct9y9Rdn4wPW7",
  "key24": "2t9LkbUiP2EA4YCLn362D6f3kdLaMTmiUV424Z49hwWTFuUZ3PzwiFWYUURSA33PXVFi1yqygWWbvJbrwUQKXV9h",
  "key25": "5Qd5bdZy1jLzRwTbk9kD7hVkVMDBADc28jkckurYEo5YwPQ9p4j56QEeXagbVS2GKESQuqWLsPFGak2aQ1cHJh3n",
  "key26": "vxjos8vPoFoaAQ6U1dgFZqjfxkhs1oAUqRsgqMePn9p42Fv9T366Nqr85ZE2aeR81yUJJ9BiFy3u3zgbDXJgcSD",
  "key27": "2YJEMXPcvHnXnUHnyDDStg6M5nKhgoW6TUXFMoC4RDcwDpfutk6FsGgam1UXPxmQXcUBrH6JpAiYHMUUsmFbSgCM",
  "key28": "5QuBUPLkQaPY2oMFTtqtSfyx999RkQ1MsxSXL3rZkzU3FBiT7c1XHJ7XYmsnf2p84rm1TuvZNatWCMZw4aPEfzMM",
  "key29": "48RBUcu7HJ8Q4FsaPrnXkPgnxokPj7d9DXcedEZCZ4KY9RPmLWNaofX8ipcBa2SsCvPmHUzPQq2JfRbDkr2sEcKG",
  "key30": "2DqiNCCx4dY5urS7AQSpJCLzNtE55C2du3hdAZCsbEeXCNGMHR2NLkg1vjB74X5xKueMSj2cQn4vs25BgMBMrKo9",
  "key31": "3bSEKt6yFmzhUZGDNtwjA4GeQmF9iUnsN6AjDZbWretTQPzAs5i1mUeTFXpvqA37ssxN6SmEPHLwCVUEfdQQ6PsT",
  "key32": "5sZfRz9YosSti32zS5QN24xEit1Qsv9miRczCHJeMP8Ve8wfFAm1MB6i3eMxG9ZhfVDAVcP7RGwtEoayH9wfR5rJ",
  "key33": "2Ne2gkP27g2UBsiqoyiryo5DMHZr9cTfWTnYwvWUCF8sSbZ7egmTQAHqVLyWsSS7hboe1cuJXCxzu1uQo2QZowaQ",
  "key34": "2X6DAc81vc5xfjxpg7Ur8ZuJHeg1t2GDHu52JjmQCuNpYCareLHzYdGe4NRAxc8m16jqWzCB3WUvs6THkRz5uxZK",
  "key35": "3Q9XJdEPzTUJzvsZhu8NvmiTGwe2tMdAFdELiszkrV6t8rvKpFYKYNBRG9UhcVv7KpMVWAFEXoCGiNNP1oVLLnpM",
  "key36": "3dSNc2GpgPiuLBHcH35wvwJU9iR75SMbgmSvriUCeG1G99LmWQZNt2yujMn8ppmBivwP1s3aFx4SfQZEUb6vdZnL",
  "key37": "y5HK9NC7jx89VSkWHu5BbcJXA9oXVqLpXmKN6TEbVXTdvtctLkDmf69Vnr4CR7bgiP5n7GVV7sPVx62VZSkSXan",
  "key38": "2bGr1nPRWQ8R283ZuzyBtGyRsEb5no4z57DGygS6iQem2eTnyroGD9AdFWi39uAkpHmNBeYYAz42foXtu9FgaZxs"
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
