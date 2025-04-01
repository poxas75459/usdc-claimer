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
    "5K2pxuLftMTku7gVJmzd2TyRVSUbqdMfLQLxwTV6nPYd6rLDQrdhdJHSrj5SGnDaGNydGh1Cbaa86dLUJUAFosCC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ey5kT7dxdkdyZzZwQDejSKczkDQieJsrTsmH2xzoeeeyn55Nzif8TB1WUGZnSuEgmWeRFtXt6DgEPc58DusWcNq",
  "key1": "4J9Qnv2khGJoGtaQiz2kcVRqDTXEvNHDdF2Fyrptn6fvFWpKQKwGSAxDNtUwsKgbRNLvj831SmWycQ2pcRLwRAX6",
  "key2": "4KVCtdbtbQ1R9PbCpa1fUXMqR4AQUzwChK7iNZu72RNprpB6khznL7nk1JPjNxtzXCnK8ABsqiqyPusNxTPLmjEj",
  "key3": "5JdDp7xcEFPnhkZM9ZyP2emsk2hBWxkXLwNB1SsFSoZZYm8eUT5xCmgHpdUYbUNzdqCEjQYXKKofgwoYhqR9ASCT",
  "key4": "3mEb2HN4JmsV4Fxe3nw5qXwbxmXATVxeCJbiagZ6ZDCjZxVmGzQaxi9fdiPKazsXjKm9pMMZVn8vA3mTTs6uGbEE",
  "key5": "2v6Wa5k3gyDqxsAVLc2QsPW6BPEzNu8UeKWjLirZUGtuhgVchmSpGfMi9SC7YWpqmHc7GvD679GZWugD7s3Yd2Bm",
  "key6": "5QtoCm1SnfLPv7hkF9MUC1grHbNYHpMZimxaf2PDa8XYrk7Qopx29uoLHauou2bJoxdj4KwvaGckJh6bCQLZNBmE",
  "key7": "4M9J92eEyPJGiNxQLt9DzAP2SHTeH2VJDyLs7mPETnjkwQVKB5MRu2FxPcPnjHdXTvpEcKFDjrbbVNCWsUYh4rhz",
  "key8": "3jnrnvHE8fzwWckssw63VeV1C9Ad9E7wDSuvzWZGPHkJsEz3gTvvhVLFdwsLuxXCtmPyoYRpDoEDe8Bsdxr6uRhY",
  "key9": "4LWmCjc6vqj1wntr5hcLJfK8bDPsbGL9iw9G99nho87Fq3xM15m8Zv81uK7N6bZ1ckYE2vGejJFYr9F4AiT8u6Cw",
  "key10": "44Mq7vub3PmXp3H8xVPpMsz4th59P1VkVPrTLPRnhvyBBvUtY2ADrxywJne6yafvEDbTZtqZuq8k3ygBtrsTg3N4",
  "key11": "46uMjqrx73NKEoV2SU3sPWbpkUhrdYm5LWV6uQkvpWscYkeqeLX75Z3QKXksCu3rddJA9nh6LLgNB83Az5UMC39R",
  "key12": "4tpo1W5qxhvs74CJKtXa3UfqMniQ6ntrpQ2ye69YccF46MfXoY2u6tJAQo1E2LsUykB3D3y1sr27RG7cn39UnkSw",
  "key13": "2qoFcdRXzczMknbuGEJcdpo6XyyY5sBVueDM7ZLPQnKUC4BM3TguauaPBGEgdGtz7UgGCa9GE596ywzEnBNk3jMQ",
  "key14": "mVre9cdURbJF1HP2ky8Bmmtnwfw58hBR83L5Qmevu5LVw5hYboHHtwhwxQ1yvbmq8uefvkFNB8QcEoSeoGGnwMT",
  "key15": "FdmU7B2p7fNjt9xD84qwHZ1ngXErZGS8Az5hQDzrkC4Ztwzqoco2tTn4YeHweaMWvUupBWNjTc9JFkpwWmPSTGR",
  "key16": "5Fctu4ybGmma9pbBmxZSC1SMnrd7XYNB2j16jb6JwKzCXSQJN3coHYrsgf4P4SPqQquZ61NHXadA25H2uRzirKiz",
  "key17": "5CypfGyvCcvZEiG9ejEmgTh8zHkb5u5yrsHnxGQAvNSQnF6NnPbhfsdQxksBZew6RjuDN9WqUkNhp4ugbrmyTdZ7",
  "key18": "3HYYZDFeqfyHQ982Cv4q58pP6Dyh4YG2hNBxvTyHPeo4MYQSwakjDXXRbgfp1zXMY2U6tLGZ1SA4ZH1k28pSTF9g",
  "key19": "4WpqaYbq61dEBCQ7mS7xfuSKSNctBQmZpB94zgNcscXRwmYqG46qzDpZNMzHzzyBYczzAyqv9m3qXv4JapkpuKph",
  "key20": "3f3jGaRiemK9m9NLJaWS35s5yufEs3PkN2ke82F4t1BJ7KB8Fh9LkdygxPAMq3D9JeRudRBefFimVLFL6xafodXL",
  "key21": "5nMC4DUbTHkP6t8atdu8Gk3bYubRRXme9rbppZ1Twb6KgZyomSGAN7CV61c9trjiVxQaj5kCByKz7BL5wtkxL9cj",
  "key22": "4b8Kf1eWjnUxi8AVtXaywcE5mCa1BVvB2bVoVK1TDh9wFr4jF2oPhcfLduVaeUwhEs6PUH1mUgWZpgnD8wdza8kW",
  "key23": "5c3g4BQZEHL6WnMGmZ2X3j8Lr65BDuBgTVYFYkkwnmkPaHKhBXSU3ZJK6oQs8fEG5Zo7LYE7Q2QYnxhs7y2SLigx",
  "key24": "5JvHBG7HQpcWPCd5qgBRmGU9A1KFA3u4fH9X5NxTcveX1rc5zbU79TDef2WWRPke1e2Jxkjc8QgcxmNnvgonvGFM",
  "key25": "25aegbHJ3tLe2J8pEXveLkfmaCoWvRvwRgbSL2SgWcrvfZnrh6vivZNTX8Fz85yhGdCjVXtBscdRzqucNVekKavu",
  "key26": "47BFMC8wGP2Q31gBQWDV5HJYoVpYtLfYxzaZ6rD2KKGbMS1HhufdyLpU429mSYsFDXcurBYgyoyR1meziYBu4gPu",
  "key27": "3KXG5JJm1d8M6zSjADh9DCN9L5e4cop4zqeFsGhJG1AhxTSis2U9MTBpps7PY2wnUZQYaCBCbEnvVehpWJVZvDhj",
  "key28": "3mRyqnru6yDff71NEXiDLjLeHcspvcmAhwbbFZ34uedes7JFm5QPyyZkXNX7zcEcQ4TiR8QSqC53juJPJ5qkU3F3",
  "key29": "4NzbPxfMaF6e9SD1UCrm4wCfodcatgFAtroxzcGTVo7tuXWMmnZAPLqXNViQfY2xpJXs93QoA79Mh2wRUR6XHxZ1",
  "key30": "2w4DC7RcjpVqg6opAZv9Ek5vA39c9dkZeQ9iCTffMBevbo6LHWGogxGfT7JkctS7NCR3ozsB9oudD3qa7dvV1Mqg",
  "key31": "om46wqDLcp2FHWvvce63FisLCVSPEkDMr1k66rYVRE4e82QYDbFGkxn1iiLA9H3TZeAdYAq2JCeRs8P8jskuQ9u",
  "key32": "waJKeHtPijLUiEn9MVkchYmWPMSmMDdkLpU4Xr3qx3vGSbY9hZNR1XwSXQs2NmtbcgfxKdbUShLoEYA2Q3nkTN4",
  "key33": "4cYye5zRbuJusUosdjmUtgd3fiikVVzUfcopM1akrMdDPQ9MAhaT8fBMexsFsUivUSXaqXsm4pDn7EDQRmZNvkE4",
  "key34": "3kSDskSVGDUEHCr4tV5aFTGUVfcaDbBBRgvG9oAhsBDwa4uKiEmPC7hzM9WaVi39vsKQvRqGbC9nph8tzxhywkgC",
  "key35": "3Sku6oTVzkKgL2chnBEvVwrXPXvQYoWzzptE33MTzFboBYkqHQ7jzUx9vJPqC6uENCWYS4XVXPqCgJR9HzCgNeo4",
  "key36": "KEUJhbSQWM6QjTutn6SVBG5epdd8seVd1L3qUU6qWodycwyPGAG4F2LatahLUHQ2QzrcKmAViSJPAtkDBRyDNxM",
  "key37": "3P3bDJmw3zCAh6i3DK6p821AzQAyphR4PaTKutZbLobsjxzmWBtVe6vMRDtpsUnMSQYtG44kwUEQkfuyFnRdiJiw",
  "key38": "5icybwKH3EhDxVyJ5JLrzYqQAJRgX5od2B3AcamNwvCorCyFW451ciBmgLcLGoVsPGCE14P9LebkDdJuBZMHXF3S",
  "key39": "2ZRfMjGwfZssYLaAjvHaqpVStRZ8fV3mxyskLPintXBu5xTNf5tFPbLFuUedZXV4Bp86jTEPw5Qm7PPo1G7Bm73w",
  "key40": "4qgmUQW8CFnwZJ3zirZFawh1DNpkbU1HEFNtMeLQHMFPiB7oYy4RTerCbkW1e9FtKYvWoZH7V45WFwdxMvrC9AR6",
  "key41": "4waCNfpXDsJJacy3XPmHYqmMj2fHyfqYjuTVhJdd6m87W3jAR9BUtdr3LgWxykb2Mvi6fHVT9qdPt6V64sT55MTw",
  "key42": "3Rqpkmz5S264qzgZxPmePo897CeVYxsVZPeCTRo82aAkBSeKWTp4VjM3Sdm8h3A2SevYFJ3tsV96snc1qRBrGy1W",
  "key43": "of6cbyHjPo5H6fUQ2HGZeKDKrSvsL5Hxv6vwkaJEZUC4dEM5gUuxYbahbuphS3g8pVgfVJD4H2CQeZGHbSc8Y6g",
  "key44": "2Gk561HfMu9JzEzFcyHrDa9BFRNBArym9BPhrXrLDAfxGMDfMFN4CdPSTHXJ9nguUNvqhksgsfpkYNjef2RCVDDu",
  "key45": "257GPJL37LyUVZniVGfoF9WUtAq9rQns6yyCYJDXWD8x8v6dXCdDHWysm882c65K1Wmkc5DedTbTBx5qepdd5Ekz"
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
