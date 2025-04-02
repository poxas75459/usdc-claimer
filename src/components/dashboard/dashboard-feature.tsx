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
    "3Dh8BczJpuru4Msd79A6DkKyHhPqHqSbeVuokt28K6SWsLYbpa3rA3rgeWniZXq8kHpDv1NRnpcM4Ff7Xo6GkSuk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gB2mZomS3wvvbGWn1CbdLmbU6nhDeNBjVVQgoD1Qn4QjweGyXhz5rgGUCgtBqTnTeiQSmqFLMMSheVT5WCW7uLF",
  "key1": "4TZEkxv1mQEUjModyGauSbGvjH4jeJrcUxDrrgah4PkLz2j5qwV9zg8NDDDjVmJFWoGjFg9Eo9TEvZn4FBBnbj4R",
  "key2": "35AWV5eHHZgZPqdCwCvJ6ddm6X6g8yF2PMJpBMMdG4Yo13JzzCiKbevCW45Pa9N82GfTEdCMDK45PEmLA3uLRaEU",
  "key3": "35qGmZmKqcLvUs1HhTzE9nyHLrymTQobK7Aec6bjb6oythWzk8CpaXCxmMP1eXCPmWz6XDFqsnaSFR76eJ9vhhDo",
  "key4": "5YBGRiRqoJ4kcXszwofrs1oiaDwZrTzXYDuEWdR2w1nWZ9bcxprbeyjcgD3NjXgFV4sC9oPPCV37rSQXZNXnwWAH",
  "key5": "55WADLNBnsRZkzkNNJMzGYJtp2LDRtpwWthXPVoHGWuBYu4GETwQvZkGctcvwjL3EVYo7WkC8u17yaT2eVT781sK",
  "key6": "2f19PBpPyLzEGpYemAf8uGWgfFrfQE3ZwbrpAyKnaGAERWfmCHgo1CiRtme8qkPunHeqMHDGWAxLtFYRJKe3GbYB",
  "key7": "52ApfVcyNzBFgSt1gfaAdUbGPV3yqsjwd2vNhnYdtjjcsthjiuczxYmwTP6c5rdzvBqdjA6iW2jfcipd96ipruQg",
  "key8": "4Zi5MWew2qS4UFEqkVwDaM46iVzBjTG7Bhe5uUzyx74qdrvVoGpmGsjtYDDJqcEj8Rkt5DSZufCbJ5nBR3yhmuZp",
  "key9": "zsfhq5y5z968p8fGzajPSRMHUSypCvGExkYgXZvx47fhZZudbqvYFoV5N7AhycBmvZq35Jx4MbhUz9YVoresqDV",
  "key10": "2rRxM3PRh4Px75a4RbarMgTfaTiASAeVajntj5wpRv6WaqouiqvhEKegzuAikXxmbg6ZTSXrWn5Qr39NEMt1Ach",
  "key11": "38umnLhYKBD7UkvnMoD5bJnwVHRjogHvwAXLtTstoRYyr8ik3TEjPXTvzRGzj37T3TMDB1Ekza8y7BW8zJQD8p4Y",
  "key12": "3UPZJWXGVicAZH692desCxo6JRT6MgiwhpuGery4HoquUa8hr1Xfp1fgjX9YAuTXM6hk57qGSqwkLkuEVLiBRsyK",
  "key13": "4bTSwEXuyyBDj4iCKsbbvrgvaiDPWgJw3N3wRV2WkgNoZ9Gm23EjiRe4bEfj2w5mt9MS48V8DmeD3qhvWCKHCqW3",
  "key14": "5ZCXS3bJpvPxtPaM1aBw1fh3HbxkC5vbK3AQ2nnk9mbBfyUL9DisbZgvZoyUH9JPaWAH33nuT51g5RiTTx28QZF2",
  "key15": "3pZBjg1e1hgRLaGfjF4innCf9UWknCv4shNj4s3zDyMchs52K281Y3AfmLw5UQMLfiDDWnPdrfWB8PaMCcbyqjNi",
  "key16": "vx44B5K1ATJ1gZUci4npa2K1rkERZRr8dAbAFzGP9Ycno8YmkaxBdPVmBJBs6wVGEXoxPkvpY6tVuGejiRBXEqi",
  "key17": "4JdCSkNZBUx7ssNy82vg2EpdvDQdmDNhj3M72KX6KGEhiUmpRjgSv3bui6ZrTMdTiUZCkxVs7LwX1mf9Wy5HjTvJ",
  "key18": "Z76DmMWgXFJ43zsGwUtRYim9R3f7g2JMAHGzXbgHunN39pWDdHXL1P5f4zDAMVHWJrv4o8fiLRTrpYSc56jMEaz",
  "key19": "3nncXusvDcUDXzUCtBpJxuXdg38cYqenZuVmQDvumLb3nGPUGaMipZiSh3wHnByts4mfwdMkN4kyt78tX6MSFbYp",
  "key20": "sPLHvNVqtofbxuGsPenav1tnDdzCxgoMFGWEpaRGyaSN6Y5ZbCDK2MdKoHseV5JpBGEEzaj5akndXThQQtAuahM",
  "key21": "6FAKPi56cpMCUk8wt5z2Lhz9JVB19xNmbgaUNLKR3erK5g2ux9cCf5QHDDsTNefvLXKnkermSKjZWbBDv7gXSqo",
  "key22": "67gGBrt4yBKLrBG4omKaGKJSLLAz9ifQtPVyH9wqafUPGsy8xtQTgqdoJGSMkbXARFFizEgwihEHoPgnzCLWaA2y",
  "key23": "5nnLYZ16CbPoPCGRv28eNnKSwFXTBMuK6nMTc2JkkYfHX4xX9wcGpUyaZxg6PQkaVEr75m7E1RQn7azSSaWWvxxZ",
  "key24": "3gqqVuukc2FS2HHJuEHKNFEb9hyugkwuTAwoypnkgtM5oPAeHcRzhAhd4FCrPgqiNGAwQ2NMU9vR83EsTzndXZUy",
  "key25": "2sRy5hmJS86GBiUpUvUYeG2tb54ruGT3vfvakgbeCGFAMPnJN3jHVeVjV1W5mGvtzRqFQ4HYU3tnrh5Gp2PacD6p",
  "key26": "3eE6Be6ZqG2kDCnE6eDtKhdzT4d7qTEvqEB5xGcbZu6wvcnPhBjbDA8H88D4nzZRvj1F1ZssaC7b1Ns5m8XuJYcn",
  "key27": "ydQPgL6ZvcsJgWQs54ruvv3qdBSeR5H7DD1aazkCE3ympTcrxWFp1AncXj1teQUAwxfT7bEbmFZMiM1VgMzwewU",
  "key28": "5pwoVCcGhZaEwVUqB1nAM81h8P7R65MevsWAhyraNGjjKkm5UYnXXCC7AXiPqLjENrWgMXiSUKMQxr2kv6W81Kxc",
  "key29": "3piUaVZGv4p9BmZEeicy7vKMfRCx7VL1CFwBKYFqTD9yzCeCbiUNFVxZ7mnYEB4f8Y4FrUbG9C29zhLsvHvK6bew",
  "key30": "5s2BFsH8R8SfY2GLN1CfKXFJEzPrEveEzDVMV6amUqyMFTkb9Fssxo16sr41wPmTgxnwnBTm6ptbhUSKNQGPKJdw",
  "key31": "4UoHpzEfyp3XFoBG12tDGwdjdqXAeMAbv4bPMmjH2KJ4RnZD9X9BqXvk88ofCaEHg739djxsfBR9C6ZiCViyidCN",
  "key32": "5GhbCQsAXbfzHDu7tAYWtiAtnhs6A3rXoTKy4TeweESNBPXdTVTY34MVKn1wkTTSbwroUKe6TrDxSBvA47pBcHx9",
  "key33": "w5FsSheLq1hgQYtJDz6ikbwaiFyzmLd5MKf2BoveUHCxdpAFKo7ZBzUuP2cR89nAwCNuk28H39vaQGzauYhKxrF",
  "key34": "41GdujMDrNd9wfhH2qVgKUjToBoSJBHVJfAxbkb6PNYrKdh49Mv3HZS6jm7bm8UKVBffjrfUCiUdKUoANSTnPuUB",
  "key35": "3SBmo4tS4afq3J7L8xrHyRRWGdsXXW3vvRKJ3WupDG9W3UFfMPGLaiKZwvnKvTABbYWVok6se7yk9Q89wY4Cho3p",
  "key36": "sgc1kAQbFhcFgaLZsJrjcT62umk2thx2tpZuLyNpWDffsoaCMefZkYRUrWwYBBLPeyPkkgHNjr9RjJsga1GF8Cj",
  "key37": "5JGCezYXK1eE1Mgre3zaqz6XX9KwFpk8n4BZouD12RVoHdySa5duuXot6R3jNpqcxEE1uNWj3GZmvMNBpEmXxS9r",
  "key38": "32rSXqqGoexvAhRsyP1eGAsCHxboWruYB5smw18zwMroUq6UunLdFUWFf4dnS8B9rh4LBRS6CfNXmXXKHaBNCi7U",
  "key39": "NYktHei23ZU7aCKQaLvmKUyQRiXbeCoAUkGqfdTwiuaXdPbhBz3drfLZc8NSb5zHez31q2V7Tjc5ox6mXT6cknv",
  "key40": "2LUWRzxti2WPvcRCyCutFZHVaqdjUv23nKJg3cGMGgGkEtcSXRGHGKhqVf3pWgXjHWSCVY6tzxCWBbZQakT7xTPs",
  "key41": "2CaYRQ38pJnQ2kELd7qv8jcUCPk9KFaVVH2mxTCChU9iAGPhKypPb5gPJzihtYDiKePJHm2pVwNQaBkbApw3scmx",
  "key42": "5dYaLD3RxbtbVKZq1gnVjA7BAH5UJ5krVD6p6Lm6nQoeGMfzXSVUCtekbhpWqUzcdLt9UPL6iHfpWA3PLCxvs77E",
  "key43": "2gb1k5exwjU6qbvsA2GvFCuBdPqE6Hgk995Tzj1FLcYRMsTzFDtnosXY9zSNbCFfX7bJ4fkKCb7t8LNQLDhxbGoX",
  "key44": "5GbDHhCCg6U8VgJmwPhd4zeNNcvkPVTn3QcKV2DhZUqYnqR7RvmqxDvn4jDKfx7RJaKJrjZpuStGRXFSaYJgx8Jh",
  "key45": "Wy9U983qwunSNVsB7Hcmon7kDATKXFPYjoprVgCfHg1XERLiguyEMY5rGnGDFBbcWsYrN76yxRbzByaw6X9et81",
  "key46": "4fW63d4scQ8eLnA9NHWwPRaZRXY7MJB1NW8qnkqgt946sL7S9LqLC42kFctgyLvnTYtSqXf54sCUrpEFek3vf8cr",
  "key47": "4BCSbfHqZVqiuAAAdZ3y5zSvfzPNGMQXjh3sMX5Y4s3LhJWhnSZT5ghLSEadQnSca6tXg6XThxLk65b42KELyQuz"
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
