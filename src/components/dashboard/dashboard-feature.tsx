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
    "2LgNeEX62FauYGTUm584VEBmHNAjdiD8465DaY94su8zpQyHvJbi4i2mrTXYipTskWMQb2VPPuuKVG4wyQMaeRsz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wYyPLhdfBBsUKu1JWtdwTssd7vxi2QKEiwAFNsSDD1ZJXTm8ias7N3obSeR67RDovvycm7Qjjs1Pbsf7WiB8Gr3",
  "key1": "26RZCdTocsnMsMXU9bRrjyUnT4WznnytK55kE9Lx9MkAfGCxjCtwAN916SqnHVDgbekkgNzrWKUk5HLosxFcGZ68",
  "key2": "5oNjvXEUH4aiPYsEj82vz5dQDWNpkF256YNcD9Uot831vNtrJ9bniFHwz7AwnxDyeuiBXfVxNo5y25dc3yvXGwsP",
  "key3": "3WtTWDyMaC8X92p3E1gwCCauJMNa3DTSWbNQkND4A9iUFXNQB3LXyThQtFFRVCQdDsmky5GAcrnUGRqNZ7Eb6hVw",
  "key4": "2TpvvS3527rLn5ycRfEESGBJkLiciSxsw7k1uqnjcBZFj8W6WUVjLKbEnHR3x1HCwDvihPoSWwnTUwrMbJb1b8xY",
  "key5": "kn8bNzK58CKVF4cpqDsUoAsvcYMJahfp8xZhXvLtht7SwiCTcFg6GLx4aaobGZJvyctPtBVgqjurmCKJmFELfT1",
  "key6": "2R1QsV1ZpFtvKSR1cE95RADpxGNUmzVLdvB2JAmBHko6GRX6qB6weKJoVr7HVYuF5TkZBxHXsugvPibt6RJKxo5L",
  "key7": "3rHni9fm9mJMeWnmrLnj7UnPjHKwETixawmmNZvmuJmNx75wq6p1oChDwUmCtUYLS3Huo6NT4v7VHKfTEP2upn5a",
  "key8": "ugWAmUQuBgiHyU7MxEqYCWyDfHxVqmwMXZpdcRiM83PPyxKpoxwrNi3ihJkbpMPh7oQ7jWj2kYNPaSoM1fdtKzK",
  "key9": "5dhzZxfX2EpfaAWZvmqsegZujYfeUJpiRomk5UXHGjgrT7MScwbnN4415voKVnS18tTdX2EpYVXfpcarTm13sAJs",
  "key10": "3wBvUChQwQM4LYvKKhXycNhn2kYxguKnNcBqUTxkmeqr8pPnLVkbU2iyDM88ucWAXFAGPvfY11Tgr7V6YPakD5vK",
  "key11": "47Y2tScEHQjYjyKgEC5hbceAzDUpTKVQ91ujn6C4jpptgR8my7b8vCA8tV3GBqBhEXCdRTGzZ8CRsbZzg4t1mr1A",
  "key12": "yyh8YfSbwzP8bonkdGcHtRa2PY5uNAe83X4yrvEUoRZKBpNnP3CeqHbqutK39p8PyJALieoBpJavacP1eLLVZfD",
  "key13": "2n8zghPTAV92LB1XUaHLL8ZQx2MXmZA3QmPv41vZ32xgkefWbggVHa6ftRJETN82incSoPHSDik2ewkzi3KJHq2D",
  "key14": "3hviaVN27WPGMBTC6J3DMMszw9h7AYfi9sjJTmqDoHwWdKsAJHy885gZ4eNGFyKsX1e2xVUcUUDwtkxPzKN26ePL",
  "key15": "3h8Ya3PotYrJEtxk9fcgnaepaxCQFLXBvtWLCp9NPwMs7dFQzY7BMEVddonM9FLbesH5LXoCEcr5WhMXDTQHmfn5",
  "key16": "5jNKUCGpTwuwWdEcR8uqQHz2VMo9HjkdSwmRbTga29sbupr5SMUbnXnKskmvQ6dTPragCMhsxtN5PpkfiMAFG3aP",
  "key17": "27QddDdyWLBjHoznzbgsHyAFs92n6iYTAT7tHbfx6DUanH9E5cvxsNGXbLZ4LUhMQ416kdVNr4oNmnXzHCcQUNWC",
  "key18": "3PfZ7BTgGDxycm1m6kMcNkLeu8s2rUzQibYaEY9JtTgu9m4xs6vASk22KNhbYDfcQpn6fjNLh6YT45HxZacdTbUh",
  "key19": "5YcS8gs6cvBHDSosTM5vJ5xt5HwUCyMsTufGxFm3P54PaFq4xHrFTpwJQ5V96YJinokB2mrQK9iSM2Zwj9KJuRPi",
  "key20": "2z9LDGrk2Bq6y63HfCEydxwP5Qe3PytzYhvEQdTf5NbuH9bcvzutMhd1fxB7AsocwBR9oKvEVyZgxjTv2MeGvhBB",
  "key21": "3o6mkX2jnkUab6tNgWU2oWSFLVSjdJXVPU9ustPWuW3q1k92iHLtTrUzDbzYa7faJRJ588VcaBbmcwPoG6kxoJpQ",
  "key22": "2CdH3Pe75knxRdrB4fPvQ1fnKrWF9kT6ZjikoNdDmPsGcDwRSXeqpCMA5gLMX9GVmPm8ySbqLpf4tcPp48KnKygN",
  "key23": "3yRAp7Hda2fUJ4zrFRaYaXWw1Bbmzb7qSkYPajB9Q3Jo7NEMVT3VwLA5zYLibjGrnDVXNPGGd2nAhX41W3n8YqTn",
  "key24": "2A89xXdyLqnQnJN2tgWAj35DAMbwTuZ9tBBK8X499YwvxXUbhtVfAHRTR71JDtBR58bQiAtKAF8FuRmNxRdQFppm",
  "key25": "41tD1rbUGLo7gvHUkWAtqJhcyYT2izdWCSeTEZ66CzjN6NqjP84jqjg5AuHGiATt49RsDHRg6JXKV9EYvp5w7jRj",
  "key26": "jLtDXws3h5v66Fn9dEMRszGhoPz6SBQNSA417Y8m2XvX1vqrZoSiZsYYcANDGoFH8WkKye1XvYhqTMm8uzYfmuz",
  "key27": "5UM46RHcsXPc93Y1oqoAMwnjhNrqFbnGQrWC6mCaSrR3SHd5PwqbacSTgoQDiossKTpfwWDituGyiwDSJTXtiJg5",
  "key28": "515PBDEtzk1V7gP35EdkBFpTvyPKXciofGkA8mHUScKk3Dom3HagDpDCKffxGSjYgRSTxyYTUpLPU1g8DeyWdx1G",
  "key29": "546JH1bahUzTja2BAHrKbA11mUgb4dFnsUFMDwBsSYPMHgZV4mky4KPxL2DimTG9zMSHkoNZcRbCNuR9GrtRLKTD",
  "key30": "2ZX8ppxrKtkhX9ZzP2edSHRTnMfrT12J42R8XXysvpVYkzMadjGhWXqsesYffLPceixzJ9WkHDgaLEthGfYijAKz",
  "key31": "3CpgsFGGLDjDXofFBLeDFfjHU81bH3Vx7d9K6suG9ZKVZh9Cf9hmkDwDBw5gCaUactiePD4eubSacrVikcFtj5hy",
  "key32": "55awmSZ4zfgcnwWYxi6CgrF1PHqm72JcYcsvg9Cb9thpY7rvAYUcDvQayzMPKSMs8Aam8rDnhwrLZoL32KfhuKNJ",
  "key33": "326SZdcEreNd7juoctkdhQjyaEj473wwGRa9KmE4FMED8dnDfy1SPJ3GcjCb332njnk817So5PJCnvv5KuL5kedM",
  "key34": "2XigKbNdZ8sUBfQa9hB9BZDxd7wo8ZXru3VqgK6AwuF9MRLmXfUK8FLDS9DXLA2GP4Jqy79eH8QNnjzpr79H2rUR",
  "key35": "3izGJtsBJKo4e44vkNKWKhbB2hWduMPyseau9sSxAa4x2t188hjJwyvvtDdCqUWrsR3v383QiQ7DhwjUTQYpswcG",
  "key36": "2rPUMk4AfXAJfFCECwUtHAqXAsRAa6HjPJs3spdmEptiarMvTVMMrXtxKwURxokgSTGvCFJcWYWStUVfbC1CxHYV",
  "key37": "5b1Anv8hcfLVJ64cD3YYfHmEVVes3KCzuaBCifco7nYkzFnH7mtLxaRzeuuUy47TFePstf6rMUZvQrdcPePoxkzR",
  "key38": "3z8H5GSKgdUcZThex2ciiD61g4ZewkuZqyemVnSCSbEJ7i9u1TBGn8w2GpGEHNDXmPp3jAzY56v2Cq2QJpyri5ua",
  "key39": "5VWLyxBHck9cxcbpt1Br4xEHWVL9jk3BSJXL1gWwpPh6NgnQ92Agx7cGdTTTe9waZo5wiWYnzWPE5xLnb9d5wdXi",
  "key40": "54cMeJMC3mPbQgKE3ZJ6ppMCXBkbTrSfNRDyRnZdy9YBzakwjxkoPPri5fFw7EfjAbGftkyxns6hnxjqBRFAvwJu",
  "key41": "61eKEgrirzLXBaZbVKz6r7Z6ktAVnaNz3HdMLNDgHLEbgvCAzhiUt73ufx9obMBW9qfVzTiuN84m6MHfhq7Vw5wF",
  "key42": "uTDsjEDaHyF7hE7qQSK8MfAy3wSpM5TRzRbDLxY4ikgxWQUhjAasgWmUixmiNmMmpnunukKaJFRMgFgPD73jRVd",
  "key43": "3ZdfrcM1t8yhwgPqeU8dCpZ2ddztuBQPrqBhCQ3iUTpfUnZNkx3MBCbA4v95ZcAfurpBZtLEGKLjaaaUJUAgJeTM",
  "key44": "4gKMHjVwbisZht8EqrQUDUoFHPUrZFXiTuHrqsVS9Z8w7b6U1gbfC8wywbgDhfoLPTLfcvTKRa9h5fgXhvfAmeyA",
  "key45": "4dSAgWEKDkSC22qE3PtFCh9jVk8APdiUSBrHrDeBBTJpKHuo6WBmBgaBmoY7bmVm9Uzf7S2xfEtf4WEm3ewqCN6a",
  "key46": "5CkxWrhjHqQjvBenbLocmDY7JayRwNzwPfVxVL5RX9UiEWE2uurFJbmzGuyz6WgQtNqkuXsC4Jk9t3qCpX1r8CxT"
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
