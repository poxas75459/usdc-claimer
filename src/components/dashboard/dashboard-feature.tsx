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
    "2Rk4k2pCCVxd1Rak6SaqgJ9qeDBbveWitcwkzARDKJqP7KZewBXMZYDrZrZpnaP8x2yAinPwrSEEANMAg2MQpFyb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3up8AXxmnviLGivSaBHZqgXsvKrrT9nNjkoE8NU9s76B5J1Dh5TJ42192LAgQRkbuB9YCW7hYYZM6hibfJoFvp8d",
  "key1": "xF3VGuWNPsPreGNh8cttXtSEPSNCRknsnWivKMfvojVge8LrqjpKZ3SrQbkXy6PaHU6RDZu3uwY5U9tssMbgVPh",
  "key2": "4fdfSNjzxFhNEqHFQmahQB4bvKdXEcWk2tQeNjitAAjH49VtqYD4z5m3Pn8KpxSPdtVSCxP6y9utd5DRVjJF7eDq",
  "key3": "5Fkq5SgS9u35JPU8esscznwG8fFEZ6mNuQpERZjoWzwzRowVbYjsqDoYkdwqicMjdFDevhVTgWSoL3MRsUnuHPz2",
  "key4": "37QsMUTeati8VjUuM1wWqMCMckKBHMuzSDXnRLDFjpH3BNcTtjc8kdZTHbVkU3c15yr75i6yL7tZn8khhnNzDzhK",
  "key5": "3iHyjKa1XytAq9TH8fibBSyJaZYEyfuphu88pwXGWu8Ai1GYoyTzZLz4ZucXhxsGP3QsjyTWUxNnMCQcJwPTTfAm",
  "key6": "5Bg54GErfVmGVUKrj59rWTZ1K5vt1jdC1VeYg3ZU5BCz5LhUbJw1XPLPremkt8p9Pvifgamwvv3ZW7QG1bkXDLxZ",
  "key7": "4fpHLT7rkffgv1CHi1mkprhwpiSie3rgfjrKrfMRMjNzrkXaqvnzSqud166mQS4hGnCDjhC35ExTwCBsavLuzmeC",
  "key8": "6tYYSwJxahyTtYupTSaEQiGUmoJ7YLfMsPTHYvfDMcVpFa7p3FfnbU1kbmgx6tzorW8yxQm9NEQiogqJsHj7qrT",
  "key9": "54gmK1URmKRxjrDfW3iCQ5J8KpprzPE5xtoreyxy1HDdv9ses6CQGYzM3ypMLjLYGFFQYp3PD9kjs3TuSQZYWg7G",
  "key10": "2jehhPp5qgqkN1JyzYokAkSb2w5D5Ae6G7jUPFeQrLBBi4WcgHMSELbLfq3TSZThjxa5XGYnPKANv2VEKycToe7s",
  "key11": "7HwJMKNtxh1C6Wy7hepevThVcCEBCAHbb3NgPvZKxv6tN3a4AnFmULGAjxt58mU9f6ytd4bLwunvNS6ZSNyNVjF",
  "key12": "49EYiUVUeLPTRfJxqenwmKmtWTHdSFcZgnrZtn5HwhkUpypjBmWRBvFY9p3tusRdSHUQMznpCRSHPav6AwHTzzFQ",
  "key13": "3ccfdttqAb9MSwy3CoPRR4ZYwA7u63c5Sk9Ek8Sxwpp79tiuapLLyfYk4Pp7Zggo3QrCZ3ZNAiVQs9kbgnhKWQLC",
  "key14": "3mMj3dCF7ueoBcnKF9T3acEcjpjxmimwKMnYrdZonkjy5eGXbDnrwNxK8hyM6qgCP3shBht2WfjCnNdJUMvbkn9P",
  "key15": "5hN2sn9YfxnnJ85bhW7SBbn1Qd3hqcfPVRF9muvo7kPDDsvEiFUMx2RiCzhvQxsLLM7mgPLhSa3Sy5ErQ2Z8sJjv",
  "key16": "2UVSGEVQSTyMjhUBhT2N1UmFAj82Vsu2LGnb2pMVMBRZKFSjnUQ1kZQXTcn9LvvydTaZGqDSk2SVA5esbFvDntZR",
  "key17": "rw46FxyjpDPBUoa4S9BHmyVuLdcvqev42qEdV4qxBsFZpuxHeQ7yBH9NDCgwUTZQBumFoHFqQxHuAW3sYEW8w1B",
  "key18": "5dW3BvuUyfEcKomYedEtiX5TPFabKg9xZfZty3iP579zKentbA3xvF2EPs6cwegLp4oMVDGrwwH3ysQG6htc6T7F",
  "key19": "84Cn7WuUtTkTsggmXEqxmUxQABPFRHWkVUpFirdv3T6tRyaypBbAPMNbp5F3tL4SFysk6FmYn4fHcrmr6Sm1qp2",
  "key20": "5dx7dNtpuuXQFCjYwETAHmFEuviKDqLBc2eDkKRu6HEfq72VCUH5AXCw5PRukbP2Cm7g6TY3DjdXc1qDbeCKa7Ai",
  "key21": "5PaKD9j1G9EiRczXj4rvnYNsyKesGm5kTAQ8v1coXP6HfR8DqHbvpMT6Br3PVAQpJMGtLhWowMbnMWsnVqUR8KEt",
  "key22": "48V5wmhAk2sAadDGUsGh5T2zvsgTPGRV972GzKmAojKWL6fxBHEGYsmK3caeUyBVDqFUBM15PiGkFPzHojQxzLa7",
  "key23": "HVjYEmhMDyLxUW7ktRa18Et4znmnxLmNVmGwStdH7RuHripfkoKTv4NtcWREWZQHoVHWCrrw7EwNErjd1ZQYAdL",
  "key24": "4CuiQZGkCbAGS1Z343hT3ybxJKk6EzVCYd1TqpmqAfBFm4nRH7dcPZZzTL9AMou5xdJXww8oYVeXT8TZNbtwiLr6",
  "key25": "5FZ1yWS4EwxZUsCKmZ3iEeZ3UxkGT7GNBdPuedcjZqetuUbcMVFNswx1wvW8m8AvqvJtHzzZ26yBiyeDTihNUUxJ",
  "key26": "SWCCc77stvBU9BgZVAxMNoqKzhvX4iV43fmZaXouj9DScXU7jq1eDvPL2VQPgD8b8XfszkNFuoPiWyMh86m6ACy",
  "key27": "2u8aXVJNv1h6B7KHU13uxqBKXj2WpmKbfDLK3coEmeUSsv8G94QGT9toBacsUeYj9BGZFQk6atbd5kQKRMWLJZsP",
  "key28": "zeYHHhRzbbftJhX1uJ2YH517DuvJq4XKe6fXiiJfEa3Yy15NP4PzXLpkcx2awbtDNDn3VMAr7bXyhiTqFtnwY5Y",
  "key29": "umGuPW2oisw11qdM36SP759i9GBUQWotepkxmHnL2CrvPj1nhqc2EzriuzYEzCbYs4iiGXN4gpFKKyyToh65uK9",
  "key30": "3yvmfJynj9w6LixUTmsFfw838DmusZPtgMDYeGE2zRgJ94mxUNkjNSQpfgP5eTBsyaqGmXXBrqQk5PE93FQmaD2K",
  "key31": "4hK4c5Qrgd9cPsEQ1ggBwumbaUaqcLH3Ww8BCtR1Ck5DX2j1UYeMgxGfnfShR1sAjP16AtkLyVjtwVYenn299Xgv",
  "key32": "5ApABAT1ZisV1yxkedX4z2dTGwawkw4Gw9ryYm688UzM91pynu4tud5HVMpvniQbr6qK7nteUGRNFhuxwmL5MjdB",
  "key33": "4xGQMyD6LsobFj5c5imDy9Ja49ZDG2aZ3Wv5VRaP6kVZ2b7gM6DkqJ6CzcEUX2X9V3889EDJLkjENEw3tKntvzpw",
  "key34": "3XhiaYqYbjf2dQ5fEuizimoWHaWqysGrtXyeGYqnmCPQ1TUtJkVmZeHzSiuozfyTqcbBa5esZW2shSqLM6J6Vr3u",
  "key35": "5VuarMDLmMy4p8Gk8KMtk1FwikKWtvPejyJpkQ71zTmhnEaHrZbKDMEYrEen6Ta4NLAYjfszNwok15k8ezuAVPgT",
  "key36": "22SrqgMxxhzdk49NZq5yak1eBJw5jFG5RLD2fWEMTkUVoasRvgPU61bTgyjYD9oc4CYMTk5zFmrTV2GBLcWpVfvS",
  "key37": "2jgpoWbMgwVJzpBbBSBwgnPchF2EpGeS1NXZi5WgdpWbAqNAugyRsg39dVccSBPJxQhTYRqVRjtugeqBkGixg2gq",
  "key38": "41QBeG3Jp7JnEt9zf7Zf5Be64eS6Mvfn65yFGoo2aR48foAkKg7oYcCWWVneKmwEErSZNv8Q8qB8aHsTLw4i7wMR",
  "key39": "5ho8fWvaRmEoXvfpr2L6w5912UAAfi8zvXqpN2N8c8RyFNhEDDzw7Wa7u4uWzLXDKL1qTHpuLwbis6iZyWW7CXFX",
  "key40": "t9S11zweAk8zznuhpRh4Zpe87qJ5hQd5j3y5sQ2hPiboUU8YB9XMqeQTnqyFbQeGKs6LEsyL2unJ9pAqxm9E4aH"
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
