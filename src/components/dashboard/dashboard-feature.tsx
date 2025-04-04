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
    "2k7JaU2x8sy1cW1JKdGfV4CqikGKmeaG35fhg8WVUdTT2WdRfJm7eLUhquXroRdzsNykxXV1JKTgCTqTHtd3nVXK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5racHF2kxJGoVLjqATWBYc9y4ZqXQ5Lvn5PDbjvS1CXJrXeHTrV2u5L4scqT5k4hScDC3Sat8BNCekECA3aA1zCT",
  "key1": "4yE4kL3VXTD6A523mJk9oyJqGvWM6YVR8ByEgNoLdU4w92Wkd6A7714gsMbpJv11vZo7e1D3kmkT6aEU3pv6J6td",
  "key2": "3ubspVVsYbCiK6ksmrzbWVU3fb9L6TfvGkep7CVnQx7XGer6gxPfh75Vhud1U3XEAKCu23s5tinAmRMUzEbVSaA1",
  "key3": "2r1PGmaH5cGk9mtUGveqUc91v5DRjpNbAzdTi3tbTYxocy4oxdSzcLa6S3MUa7Dkp14y1JUabVSYwZZRMmmGjZns",
  "key4": "5xWaxupzPz2V1jWWszhzVTWAoZPzLYSvLNG9sHCnmxSsaRUEqnjmUpFDKyf6MY2N2r8H4Du74zpSedEdNAaipWyd",
  "key5": "5VhBJv1qsnUYM2N91Acs2iCToZoR2jT16xDDgxBczVYPj4NLJd45mbuqRkcgnRa4x2ftqVGDrVwNLdpVhCYjMfn5",
  "key6": "5rfwizLKBNSaLiWu3qmLCSijrj8iFBCvdLn3J4iDkazM2tk4SKD32qvXZXemg4DiVjj9kWeKxKgui1BaW6V3zzxZ",
  "key7": "j1AFmAsFirKyhzgy2gSzbuBVbfMFUdKtubmzVqqL3fV2cCqDBwSvThUmN3zJQQawA4KpsXzJAAuQJNihzS51A76",
  "key8": "NXSF4M3jRNJYcmc2y3UvYCuUEMqjG1QG8dv9GYR15xD1YxeSfty8qL5ckASzNrZ2NYjfDrxkVf5fKHfMJAvR7ya",
  "key9": "5yf5tCzfKZFhQrpGML4f3JwJpi8DtbQWC63jm8cUry4VdSDdBW3aDDXqY7jPWTLKowiiqobhx1toVUxY51wgyfmh",
  "key10": "ZJu7SUEG2o9RMAB2UVRGd951LHFLjKaZMLB7LdjZa6jqMnBUpso8xdjTepxK8B3aDwzvZeD7drwbsfj3UgTABRD",
  "key11": "59odZ838wg3Kw2xuyV77LCo1XCmG8V5YSrxzFMBhiufZapAMCji25GVCzVxFNiQatJwwSysMHaRqPSu3noYHUosP",
  "key12": "5xcK7afqPPZRvDPAQYTpBrHCUNZLSZVAKeqVQi316rd9hZxrKhbktzmNGs5iaKPwneAU1AnkUZzr2KA8V9bqJ7AW",
  "key13": "ZFrKQ1gFS6SfjnxZB9jp2HVzdhxg6s6v4XvJNBy5sQSCUbVNoZGScV4WjRqvgVe4QvVue1HjSLnzLLsXMp76CVy",
  "key14": "2tHP2a77t8xWrwmxXYbimRb16CdUeew15edqSFzK84qYjzKhh7BJDov5TN3ias9x7byfKNX8dFf1xNCqURojtWeL",
  "key15": "wRFSdX4w3y7XQB21g3CPmoGbs3gegspoeKaJ2QgCkJc7cmDQiebZ5oeE6NZV2HGmA2hpAoVB9fWpXV8H22HGpyn",
  "key16": "5C3eEDh6FebazaKMNQC6k86uJHamzA5y9yGbcasfuXATfZ3Y9u6Drf2s8geSDSGVda4RG3vWD714nbqvRFhbEj2Y",
  "key17": "4Zo1dixf9r12TnNDgdKqP2yxc5JESH2HE1iNwba4oLETq2MzEmVwbeUzwqXF1sXNTpsaNCsJfK6hphN3QPcAn8jy",
  "key18": "49sQKLcTs6R9tGEUZvp5bBex44XvEbee6cQkUkSP6jEHP4FZmr5zbwF6bfdf647n6dPLQVHiTvBQJkdvjuahrftG",
  "key19": "2h3aoE2tzysLk2tveoQB2Sh4dwQLiGc4EBLKZnoRqm4nk2Cw1vzxWhTXDmR74iuT9ADQ2Z6YSyyDBGFmK2XCRwre",
  "key20": "3cLYzjqbM4nCyAALpGjRVAUYwMEfz7KNCGBJzi8pBzPcHyLef1Bdgwb3xZjj4L7qotDm3WV6Uhm5rnGNdfMHApHL",
  "key21": "asN237ZNe4JxufKKZmX4n6anTifboPbh5u5wbUR9yacXckACZpSpmnQr3FcTLR8f76VRuvWiZa3JrF8JeiSGzCb",
  "key22": "2fhYE7hjGUef7qhJefBFhoZCxWuHyE8gwA2EXdTVRtZXKNoMDnrYTNs8p97goGHHCJeocKT53oGSn3Mzky9XoVTr",
  "key23": "2h55Fqrz7sz5kR334dxrquJyBf2FsfLZGwEJ5dxj6vL6yJJwq3aFP8Zgf7zYQUYUwt5nmAtAB2HQc4TCdHHrcMsk",
  "key24": "2HAaUPZX8Tu4PBCXaMXEJVQ7kWnEDett7D3FjSeE7aC6T4PYYH5PLHCc3msHVgf3bWzh1bG5xV5e3PY3Ty2PFL2X",
  "key25": "BMSCx8zhrbZPup2fCq3TJbpKVQFb19AveMd7JDAQ6jsjS4nJUyqjLGRWedcYzbQB3pbA9t2REah1cyxtjFToYG1",
  "key26": "2BwhKF4Q7zhEezs6VgzjXw7ihGj8v7Z7XHUfSCzqSqZnBq3Sd3TafSH7LhtKZxe6zRqQM8MrMUPi4Fp5ovQD78wk",
  "key27": "5jezRM2e6W5reXayHcbuPcDmkMvfniasGHpYZ1bB7U8TYXvPAjHGDtRKGQ6aAsPjmVvwBi4fbTRQYYr2DGsBTVEM",
  "key28": "5SDfKz29vrwn15sUTmMU4FiNjLtN8u934rKvE8rqK1npHKCJ1nffiK3ZB4tKJysjJhqRyNJWEcVooF93hsLTNzW6",
  "key29": "4brVRzTfbeQQHRAY3tzphawqD77mf7oaSt5gvKsAaMvyC5wZsEEXCeSXqjBS5VNmBKF7CeCwjcKDwzr7Nbu3zLNd",
  "key30": "2ZUHRL1MpVdTZb4SDDxTAxETSq5UEBTvdMEVgPtuyUYhryyx3M9SQDMzHimRCmP8Xpa82ngLh6u25RpUPVohJ7HY",
  "key31": "3ieBTqmVyT76MJCgZhVZ1ULjdd57qp2kxJc6X5vum8nzzmf8Fvx8PEVzbZq8qed4JwjVRsLxLhG7JccEZvyv48tF",
  "key32": "42hsScJfuVHR5ncPTgGBVM7XD1iWqdV7swNRTkoLEH8eLSHey4pYYibJTXRUDv84Sm5BqwsgFY6HfCWdWAFgMe2V",
  "key33": "46vTTTNVG5jPPf7rJE7pQ1YhEnBxuy32kR5zNEK8x36HpESVqLN9tnf372r1nMRrDbhebBjYwiBq3uXpkAtGLSd6",
  "key34": "4swmbSQGDaQutrBkLorrNjTRr62B5Z6EQpy6jNKsVhVRLKVFpXk4BvjnzcE7drsYqp2uZjzAMy3qu39hkxD9hAH1",
  "key35": "5ZS8Z61zTiNfowESo1L84ihyywEsQHb6oYX3izzt6X2fit4wwv2xYmnTLMxak1P5k9JP2nDy4mfmcUJwnxXyHpgb",
  "key36": "QbUh2ETxaPpZ9vUieyS1a1d8YUzpokJkS4FZDVJrkNhmRJwpJuxB4DgtT9d7JpKXMghUhtEBm3nKKsreyWL23Fp",
  "key37": "5qrRVRKe4jyxyKun6djCEuu4sn1hct1ZKNE9SaMDNBkSdLkoxYHopNdS4aYtFaxXoT1wttVPYnSGyrDDrWvzSFoS",
  "key38": "8YZ296Ha8gnzCQZo3tnuUVbk4aVhKm8zvRHA9TD9nbwpWjGamadF2boAug6qR6oh8Hp1L8jdKQ5wbZvgdMWGvbq",
  "key39": "4TVPrg4mHv7o3Yb3PCcgdaEneKWYjbaNUDKL43cz7XdLw5y9xpr57AVoY1Lt5DA7QRnX6ntigQuQKFvbuL4imQoc",
  "key40": "45Qu8CrAEHUJq5enbi9ixKsrtVa4LqkPz1UyH5MXunqxT2GN1SWEJFrwA8YULERs3vLude5LU8JdPNbfwccShD8G",
  "key41": "4xnmYbVhuSVZDQZjigzg6SBQT7uQpZTVWWyh77kMhzhbMkvK3pPJ5X6syFWjod8Dvn6x5SndqqVHy9XB5gFbC77Y",
  "key42": "4jRzuk9UBHU9JoPu39ZArHG8wWm1VfZx4s4UTJB4ztvBw5imvmqTwmNGLHryFGYo83jopN9NNVLM7BY4HWcPAgDa",
  "key43": "5RVKMfywSvacUALM2esC2FyCs8tgL1nnxcHWzqPTiKpWBTEQLkfLtANdQSzWybuf7hBgn3uHLVhH4K3VrfM2Ahpa",
  "key44": "39CmQrX2t66WMQFChrDsjE8BTFoGjicb37S72QQvCHpi9D1FF4PNSs94R2cjULuqkc58iUdGP1iKAhMi85MwydDi"
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
