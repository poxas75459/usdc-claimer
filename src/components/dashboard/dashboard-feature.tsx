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
    "4Zg1TQeB2YdHF2LcLbjicCysQxUqJf3idJyAVGyfji7q55pza3fKwTt2jcZwekoMFzkvmBzpsEovm9wmC9F52N6c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d3m6HSdX6oeiaNC2d8AjKkzaz177kjWVLrZZrLvTktgNBm9YTFChLTnLt2ejjYSPDFhJohHWRCxfSyA8b5G3smK",
  "key1": "2mW31oFptebWUbT97FUv6QhwwHStqWT2gnLDiAuaeoutZ5gfNbon73TFkV1jGMb8fRgdpX6ypxgL4Ya2iySonWru",
  "key2": "2Js2gpuRrGCA5vT17bsBDwFc3UG6xz9FNnsBRtq52mh5KSNfA8dCgpEqAfLGsyNoGf6QjpoivQYdLHB8uTUUHcW6",
  "key3": "3VKW4nhnUyC3ALAMTJr1Uzxj8xar5CtfDu5GgiFGhrKp996o9LRnPqDN6pZPGD6wKFkxSVMuuZMz2K4fBRU1QCaw",
  "key4": "2aX4ybbqhDmqVCKTHewyuPQr1gzLGMK6TsoVByyAibYdUeWu9T34B8PwJ91g446DHHdmzgRdcgeAfpHbMJ8LjJKY",
  "key5": "445Jp7cf5kiwZNd8NYrtYETkXV2CUQ4Lr2TUGKTJimrYjBstDh2zvKkxAgPEsAWmr7uE9nmEe6TfknVPqLRuJdor",
  "key6": "43qY7k8n5bHVREY8uTWbpVo2ZfdjTBsrjvjSJZodTMQ5XDXrSJBUrek1Xogvywb761ZiviKFWMRMCMkQsSaycHvm",
  "key7": "2SzuMqkFu8oBJnniTfEDgw24mYRHCB5c2x3MkBJMzyGGtU1NKAz33feQXqgqVCjPCPnKm9PK5ewj2k9qqs79xtkm",
  "key8": "4Fz9z59vCSC6fjz3ES1dfeUDatGjgqKjzzDnVsGNk9HjH6yrYMNNkaBP4WLzdnN4KUcTZAaPtFgqD4meU3rguG7a",
  "key9": "4yUW2qCa4v7HZb2XZY4xezbqVcNeHsDVNVBgbSdiJ3VipijDxtWtvsXXPGoJ4qiyWAZ65yTMGfEXveGeNfe83FBN",
  "key10": "5HehsyaXRNPdYrKkv6ecSgzMbeV2crY31XsFCqimbnDQBfWMT9NVK8722Fw6rHeubu7epeHyttor93tYzZLpcSGz",
  "key11": "nYVSUZ9WZqB25xShesoqp8bxgqKERKCXXJzqjgmG2GjiErvAPrqL3e58Ar7pFnbDmQZ7t2DSFDENYnTzS2Umtnx",
  "key12": "5NsEZh1FixdrhHkqYeNh7CcSviAP7nBNNSoX91ck32UqZSBNpTPzkXgL37FhqPaDPpUejvatNvEmKZ6ZFzqC5ss1",
  "key13": "98FZC7A6bDDYKH5ByAw5hiFgKAB2jWnrrZDaP8VfV2cPG4t1hsBN9WDJ8BiFmd7hT84yrJH4YkuP1byXTq26Wiy",
  "key14": "44b5T8CAVgK6wWvU88wihvh7HC1GLdXo1Jtk4c8VPoKYpVqamqD2n7FGnndFrsxT49vA9AAvxNakUnYW6fHa7vd2",
  "key15": "Vp6Bo1QKhzcEr9rwSpmbEHNZ4AWE7fpuhLLs6v2JFF555KNneJS4nmqxrmG53HqXb59y5KzqXDLb1wUGVehTXSr",
  "key16": "2D8ue3uvxb3btHRJB2Eh3zp8vH8LYWZ7NxHv1BEt1YXMeZaYrcvDzrfZhAcWTNLMPZpYbPN1xJk53e9abHwyXRkb",
  "key17": "5qg7UzWNKR787u4AeqJke6E2bSjkdyE4ucdwdVvtDSQRFv9yCv6LrFPZ63Av1VNgvgiHKtj7MqnnCppfkUdMCfk7",
  "key18": "61CRoSncTsBi4sd9oK5ZmghFj5kjq56ytEC2mrJnoP3AxCaSQ69mtPsM4cMePpuaYZDZTPQkg7FQenpVsMWx3mZB",
  "key19": "4oHKiDNoUgLxLHcghGWakbY88Px52wGJKA9D5AsHa6c4nahnub5cmZ9zQKGw3zrRo4Pv73KkfY6aceEQzBWBPjE9",
  "key20": "2wtGv1LxmvRHtbJFQfXJmDD6RyqsNjUsueNutcCEsomjCRppCNw6JBGjeW6n4tdafeFTnQodC93MMQKQKgT81gVj",
  "key21": "gYnjMUrdnmskN9CN5PVu5ypEe9saeALY72675DzttQXtvS4XDBM9qNs34rRRfHGKUDLzc1vjpNtkGuwx1gCC77R",
  "key22": "2d7HHd2FhtryZN1T3ybkFrwjijpjRcw5D4mpFczH47mWUr4RW2Vrom4BJvaWo9WbHmGr7DLyXPqze65oxeL5z2h",
  "key23": "QXdUPeC6ab4LSPkNv8wAKKHkH4K4eVDMV2FRXP84MDkzsZPRusayWyeHLcoQW2sboJTxFLDCAcKBBDwX4uv2JZ2",
  "key24": "2EstH1W1qUih6KFxnqfdw8LVLRfZiH6kxYnhVBaPGpR79VQwdM5vfMCLczWrdDBPX5TBMcKvAqvSrjzgj48qvj6u",
  "key25": "4TpP4xVXqztyxGZeS5Kmoc8JBEst7WGr69t7tXTF8mhNksH8Uk3wjoSDNxscxBBffvLrj4ajW17RrUSfzYfS1Q45",
  "key26": "4U48BSUUVPNjhJFc2DnGHcSYQK9ZF71ziyP83CVEB8UPBX7j4hgiL7nMQBTcZydDSWB1iJaAqm7EBAcfXQzVx8ag",
  "key27": "3LnN3xS2C3ReQHwWbzHtWwifzsZPuUUjScbBWBfUnBdqsYKTQBunGyE4VETV47unNsStERazcWP3v2Mms3BCJMCF",
  "key28": "2LgSafawYTDUgwB3FYBhZgpyMWMtiADGNdi7NhFThW9BmNRzis5J7QtAPm2FZw17Nrg7H7zTqohBYncc3HwhA31z",
  "key29": "4KfyYes6cGfrgvBYDomRYahhfYrHsGvY2SD866zetaqZkmSQddPZF1BFYWaA3QjSnJupjSX6Pb61k5ANkUqCYaYT",
  "key30": "RcsviRawUm3FhuKps58vUqrJ96nzJB2iKXxoWvjYJxznz78CudfENsF25YL5EoM2jhrB4EYSBHyjU6HR7UhH6AA",
  "key31": "1x3cEhfSWJJfn1TDYENvMi9zJZSvFu9z4S5iY6383UF1jXYzrQWPAP3XNiL5t3FXHb6LJ9E8ZZWPp7qxbdjz5jp",
  "key32": "55XbucXANcT8uYty2Ejpgmtq366DGjcJrSDJRKCpZk9sSYVQZpb9jxe4V5bB59VacNPBmF4uNLp5Z23nSRxqKtkF",
  "key33": "4VtdcNHPZD3J7ZM7KoNUcnjDbYXo1uj1ch9vPHoWQbwVDpLzvpiQfKrRMsdPRLmBPrGN3JRWyNNvkEsBsVyCi4DK",
  "key34": "2a3D4Kn4kcAhPTJbU2P23BeSN3zUGhXK9dNAN9AJgrq54qMGkEMHs5eG6Dct69ehAdW19UDBzneKwUAqpidFMqt7",
  "key35": "4oqZsfMkH6Q6GtdbGKoea664gdLaUXpP5mu2XV4uBY6sEDb3YBnk3XrCykFecqwzLC5MK3bLyGu558YJBq5NFABe",
  "key36": "3FTs31f8h1jmR9fyfMkpDdYhmGEoeAdSubrnwqxPQxoz4pqsKSsY4HuLxdK5Ab4nit5yejQKKUXFvcQ71vf5p6Rz",
  "key37": "2CXEKguiBkoewMAGBp74kz6PXwtNdyPbp8bj2kxcdcgGzECDB4LCcsomp6PwuciWBHh1G4wBm2LEVsMH79j3pWtY"
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
