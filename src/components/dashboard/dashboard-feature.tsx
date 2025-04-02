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
    "LcfZ5A9D18WyLj8ssefz8qpDh1G8xhV8u6YRpywSMrLsVjvuECp3eEvDnxRPC4U8PC9gDvgiUJsAqG4VAqEJfde"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LZw8yYzYAzMf8JNa8YBGmxytzAu1bwrtyLtpNRRsQw6L6NZdCoyJtKaC7ceo8KLXuRbLH1SEsvV9m265Wk9o3Ew",
  "key1": "2SRCaXGg2cszDgdkfQW3XV1v88neYLExRq13hdhCBGZtsPGffkDSfopLozJ2Rpnr4ELKKMxcYdJmGgyFoZwJ1V2i",
  "key2": "2EJjRDu145z8NsXfzHkQeswsuyxdDzX5bR8sKv5EzcJzUFoxKQTLZNprTqixUGYYdYAMxu47QodfJdrgdVadxr6v",
  "key3": "2rY3DURPvGL2eMgcnXtHH9j43PxXy4JnbcP9s55dFUAK5Zsmrv2DR5HTkLXSBzpgRNDqz5XNKLiYAdvmPJ1sKsG7",
  "key4": "2QzTnm9LutciuZBXXkiUVQCnZajAQFNRbbdu3jkWC2gQPBAqvJLtSAWp1sZpJ3pKED9BxfST6EQxitq9JkHiQzBB",
  "key5": "46Xwjiog1or9cFF1yTqwQfh58dJNZf387MqmkgVwE847YPuG5Ro2KJJNHN2D1fJaEecBScgmXh434HdBiuUB7a9Q",
  "key6": "5xcjVhx2aSqJEAYydMrqwgyxK9k17JcsNacwprpkrWbAxJFyTDtXQsR83QGTZ7wqYwNyEZSZicq9H764Fj5mZrQy",
  "key7": "21hsxzi2TMjEnx3ypqKMkW5wCaCBaQ3r4aeikCoRwHAW6Wf2ppNsDtHBRAFxvF7po2L7YGFG2hCy7DzFKkzeZNvd",
  "key8": "2zmsXZTjGVvBvh5AvooSZSHbt3yhEGWY9ggT9PN4LATnu4vfG44BcgSx69diRhyJaabVjFtBtqugZiZxrzStTHkA",
  "key9": "4ME1aq3QUVLBHELjQaJdLrYbKdrnKjXC9aJECn71b5ZLiGpJf3nqe6d1y74gscGevAiHDA33GgtJW4sCVo9Q16YH",
  "key10": "3UnPzoHSNXDGRyYdAMjuCYf4xLjQjcMzQbsrCD2eM4WBhpDtAWHNLknkwba3iM3KG76C1ccMf7ZsMGFKRyYwhYqy",
  "key11": "5znvg7rvYe3Yh7XPcBfQ5YuiuRm8QYqnsTAYHVxEJf9abnjJsFAZoFEViyb6YrYgAk3n5C2HfgAJj4Mcq8PXj4i2",
  "key12": "5BQNuQXtV9LtQWkNTcPEHDqNaPQRwrhG5G1Cn34iePs5T2ryoCpxnUJPUz4BgwaMtMP5aRyQiQjaLdk8e3XeGhKP",
  "key13": "5ko3MRivUu3kbYb8NYvNZghLEDUqCB9Xdv8Y3sM9HHbVpwaae9HSq6acH491Q3NYRa7a9EZmwSgUgjhwkDEkPY1D",
  "key14": "3upyrFgEdMHWUDai1mhEEHBy9RzsfsBfzzKjNKgkXxJn3pn11RyHTSmLKtzZ4f7bii8813ZHcH4FoW8vv368pkr5",
  "key15": "xZ79s6esNjNWrXs4eLMnijTFzHRG6zNPywm266BsmnL8m5btkSjs3Ss7hQaBhvc4iis7qheMSy3oJ644RvH2NbC",
  "key16": "2e5PYPepQJXZ7Uv5ZvVEWURSsPS8KhkgPeSCWYqXLJPJwjRAS8GtQTYojfW9sF1ka46hCi2ESUT3w2j5rwPg5i2X",
  "key17": "4Tn5pLHEJ76ak2u86dnfLGRbw2p4PsYrNj6TebdLR4EBkze9W7WW6xQCvVBfvRfqNZk7PajmmFganEaRVZpz2bHS",
  "key18": "47JoHhLNwqs9VMdkDQFkyVW1p23pupf74QTezH6WPN39ht2SMsbXGUT3SohJtA7toMfaB7gGjKMAKf6xfVrW8MCr",
  "key19": "5h1hx9kLPnZMvW2KAn5ji1qQzexehDzdEFzmpQtYpWzBX27ZsPAx1YfjRBrQUEbxZM5ZwYgnHQAfZzUR41bgMjXW",
  "key20": "5kFWuyDSfFHtMq7fkG1wdQT1KjBfPsfPntLRoUfLa8qe2eg9VBwbbdjtvL9nVSUkAL2MdZTAL4R2rFXu5GHHFjoq",
  "key21": "CzcrQbcBSSh1Hpe5HJzvpRr7Gnzh8J9Z7aZdP2hoAQ48rPi9FFPsPzGAe1bLd5cxgkbaU54wnL8JV9m4H8bmKrV",
  "key22": "5EmXoZWxMVmD1VuVwPrsiPsZJhLnchFAJ6LwGeemQfsQDrNR9S3EAzY97V2vbmHZkfwwJmfpD2NZUoB1t9r8hLsr",
  "key23": "2DmikF8YFutWL43DHLoenPXKcuKWp7cF3wLV64S25j9MDxcUtLTrwcJz4mqiT3xFVcs3MDWrT2z6FhzM2gUxCRkR",
  "key24": "JrHdyCS2BNzsZueYLm3bjcENtnp8r2J4SQxEEQMY4NBcUU7v14opqWYrFHYbyWat2H9fYMXCEeToh5zJPyBYMs2",
  "key25": "5Y8P3g8yqGzyPK5DQ8fhJJ93Vmm1hSybTsTwpY8j63wK2d4S2v3yM4WJxXKJLgVRNxkXR3RnXWgZGQ3gYieBkfN1",
  "key26": "5NERB3D9tzngZ6iewGv7pUrUwxrJ4Ej6wmuvYqh2T1vhSr69FcZu41dEsSVuBgiMRE9kMX3HcnKRZWiMFxS9JvxL",
  "key27": "49evXrMfnkmv9iCuBqZBFFjtGeFFY4wkv1Ha4KXFKcyHUWDdQLYdGhUj2tjF6rrXyWgxcWhxShZgEcw12Jb6F9TN",
  "key28": "bHC22cvdXqtdrwp2Dv3oqUDgPuLe9kBg2xig8qMiT8sVogAjmhzeTPCLSqf1VWfmBbPowwvzmvCqPhyigqrcqnF",
  "key29": "xR5CPsBpbPP43v1xK7f4hzV11YuwNCEwpBCQioaUwe1hfUyPd4tqa3jsRiMtLZjoamoMwTdxVpU9bBPmsZDjoyg",
  "key30": "38sS8DTQ8iWKtLAZhiPLrYSaJWwhC3QsSG7Pm47JTHRQYLtfdtqH1g3gwi3L3pkEFv43GgM5hx4YzfQEYu1GCuBD",
  "key31": "5Hk8u8JZadkm6egHT6M2pfuVLAaiXij392sQtRf84U2JVZGJ663A1x4432HwS6Sc2ndNYBdFRA4Wa3rNcz4A9xXN",
  "key32": "5NZdhemRTs2Vvd9tFsDfFLen556QKRrL2rAs6KEHxpuf4k6XEvd3HoocoTttxvdx4LBA9GJjVfYRG65agqKiJBbe",
  "key33": "2VFPxSibgUk23HUqYsn3LPzfQp4wrHAViCdNz68XuwUSYbXi5FjaqPvXCMXnBqDAhEfEcraEo8JkveWGGkxeiq8s",
  "key34": "4wrvrpeyKU7Jmv8eU8hx3Nr5GPDMngFP3jE5U9uD6GXirKaYaFZAzFowdh59okZWTSg5RhUDiAyp7FsiR4fwkASR",
  "key35": "4q1kT315iDxhvQ5ZVtfxgzMkF61RmFsJysbzCTBGYuYei5DtpSy3p6uhUV9wmRYUoqSxmttpYxSHBJEKvvh1Uyny",
  "key36": "4pH6yMH6pWf1dpS3ABjKXqgBkMWjYAAotZ4PMJTK4FUMsZ1ourEppkm9ArouYhiDFFMQFKNWJXaGxKBcfwhTfaCn",
  "key37": "3SLv4qBE53tPLddiHMswBpgj6buGy48wTu9B4osXzQCjGXmwrw3ZRsoC5ZkqPc3HHCRyvA7UNU3gceisfDn6fZm6",
  "key38": "2KhbFvRjumFMNWzyXFzBWs4vKJCZVfQoahYLNS6WEHNqkxaHER3UWgvzxkDxtEEWfbS5AVCUT7qxiYPi4mExCbLr",
  "key39": "2nmJg7DSWwHstWKPbB5gjMN9AnmRaU93iGtsvA44JkZDeEvX6iqcYvBigPXneMwb5fvMHWKYcpwnT9bQUxwGXTpk",
  "key40": "2e3RaxF9y1y6HPqdoUXxzaG49QKHzuHcdGQq535kLMXrQjd29b2L6yN15hWkY5ZSvRS27KtfgekbqdgQH11KWj93",
  "key41": "4EmYJ8Ps1Kayw24RYhACcpNiS4mB7gTvngqtuFwPVPUUsFh6DSzRiPRcayEqkLwp1XLLwFBaBfbAVQEoKxkggbc9",
  "key42": "hV3Yr3k4iut9aa8XSpdufou6uTvGA74nJR3okGnyfvoxmTuzhfX7DnoJSoGi6jvrefUyFurRwpaHFYW56CHHSiV",
  "key43": "32VjvdwFXfaX8LY5ChJKjeVdAzRyoEobegtJMdWtbXRPvnuwbTdqcP9u6mVpnFWL8p5tFyqLpFUU2bsgr1Q5TMh8",
  "key44": "3PYCiNrEQMdPymiqQRKrj3TuGb9NsVWBGCbCS7wZ9H3WVnLfsF77f1RE5gjjMtp87BMMwVMY2E2cMAoj7igiGCh2"
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
