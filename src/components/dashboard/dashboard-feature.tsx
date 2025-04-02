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
    "3Bzbq6fTQo3k8KkMo2DaVhsyJUfiZMQWVZMFirhDsdgTZiHjeariYajZq9epwYb794gzktGnWsBKH6y2NWNjWVZq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uSXkbhCt5qmyUvMsiSGeGReD2MeYq1p8ayKAw8Khyr4sxxpgfQg5DFrpNTxkTTWJPQ5WPmm4wxPGMmTyt5nWSJP",
  "key1": "CaLccbZPtLtGdYNhGWaQDntKKVUcHkKmDutAQMULLuNkpeGhSW6P4p37CzveQ4LiY49pqABHjXC91ChTfrJbCvL",
  "key2": "7mxFAc34DvLcBPsaACcUWiYQotzMs3EgkyEKjyvvZAEUwLvQXq2uEFDZUYnnpA4zv9dp4wi4Gqzd7LtQJH2MgF3",
  "key3": "z44tAEK8intKJ4ByeG7kMYWDNS3mUchpbZXqcr6NfSdTeMerKk2Vk4bLm6RbDvYojMXjMBSQDfber5D1fmfCscG",
  "key4": "4JvipLuPWWwaRS8MqN9rHRLtYzhYwV2Y29h77qecgx8nHUVzfMzukZsApQ3T8Y7bg8mJCZyLWdHeg7H6yUJB2CTK",
  "key5": "31thwRdtv2wyB89DbtKbEGQNsHaCbEcLdPKWYv7kxCb2vD9Jey95uXFrWKs32vKBc1P26CLyh7uEQAMWdYxtsRWs",
  "key6": "aZ3g2wPdAuwQWqjiPAP5q4sPEymdBMdT8YmtVqWaW8UZiJJXjtCpNgUZ5VBYBjBjmm5aFu8S4N9hWSjwjSys8pz",
  "key7": "8HfGFJKAaW2AqQj7Bqgcfj1PDsNnZxEfr64mWuMquVhX95bLepjQ7eyLtsyjHe4BA1V9YkppCxEYjSDG1b6mcMY",
  "key8": "5hYmxvo4qsaXbJ8Jsf9sGQYA9y9zj7Mev5uMNHyV9YQK36wPdTPwF2G5RWgYM4QSUcKyp3EzRndQATvBNfc4SWiQ",
  "key9": "3AN3dGFLbZjihC8vtm8YMRJyEhLaRx46AxX9JsH5zyu6xScRjSUyJL8xpmvi27i9SAguHj8pC3EEhWUxjQVc6Res",
  "key10": "3gHMXs3bBfCqQygGLduiNBqCjGQo66EB41otFDosnPcjMuhpki35YAVFXA6k9gMXJ84fiPEhj21TM7K1ZPG2HDoa",
  "key11": "22uzXw1eyxLk4Z4buGzEmtHCwaw9c98KAc61wimoN9xJNpx5KbXYPxUKTJdWUoXsEhPTe91uxh3EyFGkD3GPP4G2",
  "key12": "3v4zJRNUrM3qzYKz3YJN9KpGtFzfG8DZKGrL4HUYydt1wkcK8egdX51pmNhkYyM1gzrUcou7u67idnFjCmHG4Y36",
  "key13": "2nY3gWZAdBPMinfuvPgCWyAGyiHDUnPq41kME1UJdGvZx9d92PZVDHb85DLForyodNBuGxZPA6NX2osi4WdbADPe",
  "key14": "5KWB4KBnoPuWLmxAV241Rce5aT1799roTeCz6H4vG9ftmuiujwpQWVyGwmUaDk6PXReXJrB4p5tHRVyHPVJuGtY6",
  "key15": "5LUNTTL22N7bCv3TfjjdSLViPvNpCtQhXTpSzPmXT7GGUmyn5PcnLxAWXf2jm7uRxZ7gzaM1SpaLWnaJq8URmhHN",
  "key16": "RdthVTnMceKQ3jSYhx2SeZVVfgTndBMmYwiSptWZWxCzM8iQzFNjAGyWoe6ZNSui9HCMiLEWaAEWpbwvJrjxHFf",
  "key17": "hGJD4mtWuQp5gcWHUxtwRU3mNKAGX9zFgv1VU4XLBPR2XRairBra45nNggWSg182h5L2FoMh2PbBGwk6FZ4FD26",
  "key18": "3Bp3Fy1JkbwxqUxX9tNxdsqZWET4ECX9J2D39y87qvd8zpuVDwdePxZDvZ9E8GpLcy4n4F7N6KupHroQeLeaKVFu",
  "key19": "5dfvoSeG8wgRBgTQ1M8HKm7m98Nr8dkRCr7ViSfgrPrQhpTkJNcnft7mr8wZ67Nd9U5gk9cSscKzq23XqW8c7HMh",
  "key20": "2nLnYeW1op5jhk6aVzBk8ufLzTKKRXeiwif8SwBMSs6E4qAH2zBajqe6qTaTFGGDR4tantEgywmJWTe4yL4etiRE",
  "key21": "37V7EkgB9heXmcodYCBsbXn1CeMt4n2PK5R3r8NyCgfzTWRt6cr5u5vPzAZMpFp4CwRFwUt9z51yiop6oD8GdkE9",
  "key22": "46VGApHveVxV3SAwRrhSAes5yeBTJ1jpBkwUPYf4Xj4GsvCEE6NDnDa8ms7vswwTm7j3nZKav6rSXnUoAhsr9WD2",
  "key23": "S3Bz1oXZgJ7PfHQqzKcidnNsn2jSys1meMRQu9WDjFMVfmNLh3gD4rm1NLo4LgJt5axK7pxeCrWh1xB78ACB4T7",
  "key24": "5uneu7QjUCTG5au17PQiPQwgGKNmBopBeYZQLK8a4poc5ikkq7A7j9rSzB2sr5fXqZe6g9213uc3Au9BDToPty99",
  "key25": "Uxre6rZrhzF1nvt5XK9jMzVomRkEvEVcixoE5PmqzhJbdHn3E5S6aMypqvUFQ5tpcJspNSBWocfFLf2N2yz5Tx1",
  "key26": "3Ffd77N9RUGKnBvyvdLrp2NAoP4GbqAzNdK545n4XSeFxouxfrVvsfKKETtFsEVupp41U3jCgmdaC69WoXxzfKhY"
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
