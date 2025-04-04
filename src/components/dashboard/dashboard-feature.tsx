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
    "5hnR21yuuXgWeSdQ8DQJftuTUbm6WF9yHRW7HASvrUZ1p6NkqHeaVwj5Sdyi5jPucrbihZVcYDiZBQ9Yb2AmAVmi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67KdFRQ4dbZ3RLPSCCBnd1WCExnfqgh1WPKmoz7v5EpyJurMnhw2qPVxfWji36XCsnXECoHhrSqQos8GtSootBA5",
  "key1": "ziehKQTqykL7iwnYwxqiVncN58HyDsWJ5XaUjXF81SdSpJP2NcjfTWRPRdCQQWzcu5KFbFFiTk9NmFpBoeV9f9r",
  "key2": "35sc6ZW77NVGF6dmcTKhGq6tazHNxZYJbLguzoHBv4UsXSzVGzuBMznQY32u9zNHRzNepoMfoZo42N8zFF8zagXn",
  "key3": "2TgQjddDjncaN1SnxoXLN41KRKZpScHL8353rUdALqMuPK6d9M8PxJX3JMmRboDkS6EhokucsLriq7GCSRCUYW6i",
  "key4": "st9j5FNRA1hW9MEaXw5KEHAnBHRNRbEKeZeG7skUe9NUBQ5TJuzjWKGYTPahY7PediiviE27MQ8AS3g39NTS816",
  "key5": "3Lq2oW2vNXJwVm7g5boD8X7er1NLZRaM8gJccjJtzFnF9CqnoMsGLc9YhwbA1eJKqPZPw5h2thQJ9Hgm9tsPPibr",
  "key6": "4ZBM8Ep3eSBWaLXAWKrXxDKuKvxt36tcricjzstp7wodntch7Y4cW4TDHWFRUXNZHJtLxpG83KJfF8CaWT3kUA15",
  "key7": "352qkEfyxo5XzMezgbiTQumj49gpXdjEGi68FcAbajFK4e5zx74fLwm7141JP34HNHUC33NsZquPn6E1sBMgVBbk",
  "key8": "48YfrPVBWngxzGVqqbQ3NTBzzn6U85TsgMX68iw7c3z4k8LVKtxpgnJF7iCXUwvU9ifGQtb9ocXqQQNknMj11VaV",
  "key9": "5fjj3rBBgLFtM9VmfQqUh3uidofneei3vPsTghDuwxuCR27h1WmpHF5oAFGLv7rvvVewNPNxZNe3RPbFSfTZh3uy",
  "key10": "4g6BjPrx2V1fGbKiaC3PNBaxLSme7LCNVrakqRvkR5Sv2jSkU1ehJ7veifC4TCaSpdM1So1ydEt8SjUPpKZz9ieg",
  "key11": "46ynPeBT9XoAFshSJghSGTPa9ZXma73wMCY1mmyXUVfJF5PDMjT572RHgUoigifdtHczCMC8KtteiPtwLTrcfcor",
  "key12": "4ocgjFaD8yBvVGSWtH98QAtSadncXHHLCWNjhfb5g3vA4rvuoPEgtm49Xir8Jxux98NWkBUxZkMnRh9R3D5ZN19v",
  "key13": "S5fGMS4oeZgx5ftAU3jzepWqNwmyxYJJTCriWxmqoFZY5W9fj2QjSSpaehsta1AXZUP1tTNU3Cjeuv7UBGokSSL",
  "key14": "3HQ5KDVe7NZGGjBsZn1JZMYjMnoerDZnmpQW8x2qq7yjMFyAmETUbrGGKnLmZ4C7ydzZcbRHGAAqe3Yn74tfnukL",
  "key15": "3XpB1HDD8QjPT8XbSwKn3HhgzFNio2GjGeicMu9JSKm2qJ2svZ4hk2XHYV3Rmfe4Z3LtDwb7uECB556QJbcLWmMt",
  "key16": "21K1gAxQscayxAb3H4u2z1ZsoWnMwDMfKHjNUkYMd4nV7jMc21wYPaEN9N6YbP1KbK4whF9kvYvXSALqcFbwLo8a",
  "key17": "5ggFWnG1AnjoZkYAG43k438kHjf9DzHwKzKcghzXhhhnuv5p2PNr6T4g1bh1Ecusu6ZCXJfGR6meDWxDtz2o9TH1",
  "key18": "5TEMrGsnUpuVdVyPsWobooc5gucTaWdS4eYT4M4BoafYcPyRvPsYcdnKRxiPFLUccwwaZPgMNqRAGBT9rs3DSdFp",
  "key19": "2KbxpBiZycHxa6o8gCZEMvLytV12DnuCpJ76jcVU3MYLdj7GR61zHihMFXdyK7obikA9MGkAAb19y3mxz97JKAoe",
  "key20": "5L9usLibg2ezumKAFQoBCvTiEkudJdyY9wFAJaTCTBFHrXwq7FC7Z4zR1vJeyJLMcNofAXWpSCU45CTSzwxxmk5S",
  "key21": "3fC195QokHLZhvTaWVvbGmMrq4Dgvtk5Sy5mquxCcd7T5t8KUoKrWdV7Ns9phZvye5H4dQ1r2vicWUBVGVvHJLmN",
  "key22": "4CmTyrzPmCV1J7ZPsiM3ed7U1nLbvFfftkDHhV5iDcpwF6ne3GpJeRzJbh9WvH3UtxSYB163wFgP2x2RwNLebRZf",
  "key23": "4BRVeDYsF5jDfvZbScb7bVJYjnifLf7PTzgJSfZtrdfEFUn4Vq9h9Fk4SDCcErMTKLEg4P5XRpNUrNFdRqEwj8Rj",
  "key24": "2bgpawBtLHqCEvNaRVtcFXAYBR8JuC9Fkq6BWUGWJmz1a4VgARYGMoFu4uEEb1cedhWBAJrDVUr8pDrBzinLEyun",
  "key25": "4aoC7ZbYDz3gHYNecRxgKJyuRYqVFr57Y5bwqiBBqvWb9TWoR9XSEYGwa3mo9UdrAS3PQ6zmSpVfBQuvFTiGyC87",
  "key26": "4dBrjUjqqfymddbFKMusqLJ8hxq4TnpgaZLdpMLXBSZgC7DjtHxndA6WpZ71iz6gHocKtuVMo4dKD5EKMq8B1Jyv",
  "key27": "2eRx2KsX79hVd6ici1psTbH8vN9cpSjYXRTuyVRo6DzoJQcT1fdHv1Y2t4YHvU64wHsjWPbcHX9DwrHrqq3zqdpj",
  "key28": "2iy8qgQuRwFAJBCkyPfJfbJYsLEhxMqLR3znNUwmfBdkyRKwLtgEynUC7j7gzFNY5ve7y9WiQRW4e1tTfXsVxtdw",
  "key29": "23P1qKraXTjqKyGdexAWQoUEWBpHyowTaWgrh5mXYTzmPECiwZEAv74so56QzwEbWZEi9M2zVwr6TDREaoEMogeA",
  "key30": "HWFKXodeocscAMJjGEyzrdCaikjdAZC6rowjEmn5jeNQ9YmvoUAzg36TtvdRuskHthTRqV3dE8uJhvaXF1mYH5J",
  "key31": "3cUFFzhpAtVVvadW6EeGQP3d99RWZiDnZG3hvKHCAe5MXHadsQGroXDexdLuLNHXYheHfVpVyXe9jCMLF25xPQXe",
  "key32": "3cKZ4L7PwTVqQSDXTKe6kJ1CZRwd8JXCyTchLp3WQTTyGfiYSX3ngBbvdBimjRSjnQTXJ1gUDxHmqnpuooYHwU7p",
  "key33": "5KoFExnzZSB4Hvx1sV57scZjCxqakaA86b9i1wC6DGnvEotoWPoPxC9C4vfLN5AZKC71jmotNjUd55ksXXguw3zZ",
  "key34": "5aZEzwojfRpeXmA7TyEs8VMVypgdWc94GkPKjX9MvM3PU7bcmxwNUrpBJyh5Gka7X1wgKsLirHhHHPsk6usYBBhB",
  "key35": "52MYdHR38FVhqivLasJi8wQgVGKqeafodAcr4RYhgpseBkKRMtnzptpW8ThcmKvLTe7TvWn6cbLGrbjtPJhi6nKo",
  "key36": "3ofxUH3ji2TdEfRVWqZjLvY4oj7cDosBTwW4K7JswhraiVDNKNra2TCiFnDC9WFUP83M35wkGsD3wh24AmKYiPeH",
  "key37": "2HT5CTGAqihx58ztQXmJoXjKRZc6vWoRRumSmXWVu3Epzbbr8LTbmrjZDPpUDJv3CJC76uoTfZ5C9dHJqfWM4PU3",
  "key38": "5Ro1rjJB48fgoNvfuwwDYDcDREDbto9LVbsaRA9ZHsH3FsZokz4uEaqufpwqGuVkMHC2q5NSSf3GamD7doNcBsUZ"
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
