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
    "2cBqkwcGs5fuAFehzv8Xi48BVuwUDJyfarMRee419G3HcNntRvQ5q3GB4gjnq7jfVq25xydtVSU2rwq1H9UH6ECZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PwfvbC3zKfr2dSiVetMdiHANXGN2HNWRHbk53uX6zo6GHp2mGrE88piHNpvTg99MvyJV51xmZ48HrS7RTusyGvx",
  "key1": "2fH7ejizuxkqxaMeGMuNq4AdeyaLeeduAJVqtsTBpB5GBTRftmkeWm5cAGPMUNrPGLnFzLQskg3jKC39pSTD8DzS",
  "key2": "4RkANNbdx4VPrhmhGNrjdG2upRbm4QqQQ8tZ8g5ru6sL7D8KENXJQeQqodjyg6yhY4exdtfap6ktW663LNC8y93q",
  "key3": "4KC8u6Kp6wWwQRjCSjUYFm5DyY9SMt2ngwW47k5HJfMKZQ25KePV8dcrUD4G3zZpxkVZNScSg5h8nwzypRWUEM7t",
  "key4": "4gXgVmN5ZrTETfmzidKKraZeuR9RFVnvRjfAPgzGcCLuHKHUB2FLnUbNHvPiM4b46kkcy7jdzr9AVGAkERNEqxHU",
  "key5": "4mCFjFSz1pLJNnkC1KV5NpcwfzN3kBVFQbAHkH2PwaX5j8gd7opSGBEPFGjAufF4kcm2WaTU1Xv5yViJpDxQyBHj",
  "key6": "56aRAxuEmPMRRZmK7KEQoVZL3Upg7oayyfkhT66v8yxGsfAh9K4a2jCuDPzbPVe8orUBLJziZoLfwkG7PcKAPLRD",
  "key7": "5fv9WVgM4UYx8MGjqTyqhCJWwNv6ciMjg3LeXNJcxbggVUL9Zxj4qVkPUTZAMu2KNy4SAGih2b4AF7KJRiDJoR6q",
  "key8": "CbQsXwoS99AJUMmi6LyA2UvkVuyicJZKNpGpmu6jgXeZW2V1GCCa6wxVYTs72cEpUiRnYuzbQLHJoXKSTwf72Gj",
  "key9": "3uBGPk9Bkumo6t6QEAbS8cfsrZehXVM2pqdBwZcLMhv35zTpzyL7JHPvGbxTtUu3vwaqCsqYoMC4GRWXwdVrraav",
  "key10": "5gg1QimfTj7yfjqsujaFk9CjB4zKXzxh2E8QnwkuAN5jDebqiQpZxhvRacMzVaCXYJxdCdEiSefW2pq8kWY9mivn",
  "key11": "3KEAKYL5YeX2B2ZwhKdR85Sm59J37hx6mgNshAegJUuDBkcUxSpr8YmxNVPwW6ZscejTysHMVBQw5eVE8ss6TfXY",
  "key12": "4oD65D3nu1kgXaWzX6soMiF6s97objwTE7MNFQmBkzNe5ut4mjQAmCVTQ7V79s6HMZK16ub5EhbhXfUzg2CWBovR",
  "key13": "5F4qwGnkXmmqVzvxvPqYXL84vVf23gN6NJymGrqFBpoqjTrfR29oQaxqkCDszMwGqsXk5PM4o4n3uXg1SkKqnXtq",
  "key14": "hivQqaDyDsEVL9k2g5gyi13xwUYvmaM3q1ud7ygfqfsshvyaRoW4Wx6WgGpu3egevgFJcJ1EDrkTUQmBqr7MNVr",
  "key15": "x81Mxzpw7ViM7qBQfG28afrQybs6npFDKadbCeRLNzUBqJND6HPte6a8j6PqnVY7VDyX9fkJ5B57c7Q1Rk9cKBV",
  "key16": "4MbvYM4Cg2qkp6KauNbvqwrfbYViKmm2vgCKdphZe7rXy4sMmcCLFHaVYGLmUriCxv92GkxAMwGoaddQvE942LiR",
  "key17": "5xumbHhbTUW1ZSi48aFsqhbmFxiwS1Qc9nCPgVbTdpfFVpuLCUNuTEcSkCL6pF8B8agjXGG3Aj8qBinUa7XFd5wH",
  "key18": "VLPwBcGz9ttHY2JZfcuvPFoyUMZ689KzpC3yAghr3DU35RgNS1pFqieVozFUXUCTvCpzwXpLERFZksd95NZgXMa",
  "key19": "2qJaFQsm4gMzLnor5YDQpXRwvKPsDsrhhKTrgA1G46r2vAmVmZbfdG9py8HcF5Zdb2YjLWS1eHjprXfnEKLyvKjZ",
  "key20": "4SHDmvLpD6BJSHxdMFZ8XpN3c665B4cHBqXHLGMSMWFM7uLpMZyAEqsCLaUMnNZ9RA7rbZiFiDBd9fGgVUXkVuc7",
  "key21": "2saguCkvr6tvi5nKPXhGvHLcRE1WCWzZ425DY7FPUguwkbHBDqLEqwi9PkitdHH2nDMgVgGzAueue6r2EBBz9fi9",
  "key22": "rGQC5QXDpUr3D41TaoMpurjZnBQxpUTW7Lu62uwRucuEZ2xBt8wRtgFjaq9CoqcbP4uY4n8swgsL2tJCwTP7oK1",
  "key23": "33YXHbvmwrK4ngPNiLEZyB5T8KcDJ2aU6XoGb5g8688rJmr6Cq8aE6g91ie7t49TJTccr1ZuaqKxNHN4VSZvEiGs",
  "key24": "2Eh7CwifN35PX1yGLhjyRCEcJQE77ooLYDwWZpypVxWPMjGtxodSc2xAkX8RppY6GEj1j17eNyjNNQvtitmZqtpD",
  "key25": "3LPtQ4Hxj5QgWRkNwK9JhknBTMLZiG8jkqqp8eErKdvCk6ymqa94Wtqsr6R1VXkbCAW5wHxcDk4W5kfuNnU22XP6",
  "key26": "T7aTR7hWcLrqV2hwyXDV41r3wHyU15UrWUAJZZCHCfHwgn9y9YoyfHHqMjcjWvVBzAxJa7uVeijKRtxrFNvJGTn",
  "key27": "zJQ9UU1ZaYpuM8Ady8sBZNDNE9dpRxndjmFQWcgi5cZJEuSJViwfKg5FVU5eW7ScSnmHnmuWpXrGWfJJcKHtxit",
  "key28": "38vpAsqHFXK3NN1bs5neYd6coX6r3eCHf6kACo8ZcuqKPyaLdbWYxCCeuMkTQpVumG7XSCbozJdCz1bJ4tCAodbM",
  "key29": "4tXQr57BkmR9qFAhABM8o3N77NeZGPe73ou2s94xAc38aetNevDJoWMZ4YSq1XB5Kk3taT3FrRJFXNsn8H6fGbCu",
  "key30": "4qBr2ft1JtRL94bs7mrYtAYJPRdD72DRBcPC3zuDxkWeb3BoVWmFRtNJjyEKogDYpatWCVcVYtEaJYufjXbUR5b9",
  "key31": "5XYuRD7AH4sspesSdubxM9LXGymhAMAFbHBp4876ZJn8y45gJ18hz5NRk8rN6yxw6Y5g68pba6Lw24HUg12US5yS",
  "key32": "4ApmX8STwRR61rN7z7ntiMeBTxc4nVyjSkMiNpU1zBjLWc1n1JYodEPyaoAwn2Kc1idRZ2KGT4Ts31TFJbZ8GXy8",
  "key33": "3Jp7fP8pVJnnLHNvGB78ZWSvF23Tq1cQVaLh58a1Fu6ds6z1oa2t95eCXeS1kYk1DEiZumuMaAh9CiiJgqDG6RCY",
  "key34": "3TghfxJEEwgcbfE13nNURkr1kFGykHcZPXwjbQcWq3nrDbWb5nqQhcjLCsZzbEG6JafeYy7Cnwew1x7cwngAp4GF",
  "key35": "5yT2rxTD8WceoWmCsc8CxKWEkXh9aQjv8Hajqbp1NNHeshoARKJyjJprgmwAqucaR6XYRF5PjEsAuZuTgGRpFVMG",
  "key36": "kCcT2BPzm37Lfn7Y42Xk8XB7Qqw8PWicAjDmviZj9ffUw47RRmUYjmzRpUbBy8xHe1XHfpsaz4XGQ2xYEEUARnu",
  "key37": "5zqd7g3vzLysavz2Yg3aXL6rFzz1TNKdEGuxL98umzdK76JWzPri1RKqaVju38TASsMDA33EYzzvMq6AYSs5NXZB",
  "key38": "3AtYa3xteTRSPnGz2XNWg6GNdVFMFxboNkBbExGWXuF6zcBPQTLHgJz2oa2BndnAz2fN1vJxS6EB5Mi4CsrSgeSf",
  "key39": "VYNSsJ5gmNUnaQ5q8KyVh3ruAv43cxNeVFSCMzG3su5Q6guVNYWTykveWH1RARrQTReLELTD8Gkx1ncEhRnsrDE",
  "key40": "652QTarCchnjsDJRZbQDnXWpKmqp8nSADFfcYoc6ZFj2eTUXUYT5damvXGxjC2Ar8aaVzjF1WtvPHDJ4LhWPK6KJ"
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
