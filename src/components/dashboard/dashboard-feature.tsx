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
    "4ye8oEFjGDt4X7Jn2mib6BVj3c41yufjSDyFaxhQdMkx7JM5aDT9Gz4Mr1astd2bpKXo4uSb2ePbbvqhcwTpgyor"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oCHmBiGSPcEbEfoQpHJfd39JTrH4nbBbKXvuXKU8VLm3EBYrTrXLrwxAhNYErfCQMHVjEBzBdMyMVXZ3hkwz8jh",
  "key1": "5EESa9NF3Rs6xWXZ5ffehVQo1FCeMvNixJZmP1dop1HpYpzRLAvLhLcradM3MCjg6HnCkUK76QoXZ9CLnnEJ9LHk",
  "key2": "2dR5FqnV3C9mXRwAZ5UuLi82axGFxVybpGfGAFiFGhjXZvRJDcpfr1FFzSz6UZSUdiyXgihQDY4BcEitTvjiMKv3",
  "key3": "2EPbNfchf855TPwwLLxUb6Rfn7U3BssEhkG4TJoFX6RUeJaVxbipX9rTa7uSNkfsLAbb14euZRREG1BgsQeWfSe7",
  "key4": "3DbuXbehBWaaAPyaJ44kv1n51gjS17rFsE6drfNm2ss3kkycBowbxagqcMiyGLBLvhfzFoXcSPuFBh6rnZnMkEoA",
  "key5": "5iMAXBVyBPAdCN3FcTVZEwoKX2FswKZH7zMZkLziY3BsfRwCQYunmNxvcxr2ZUchXRQt4HG3ZBi1CALrsxL1nSQp",
  "key6": "5BNPu7iMddkYc1Lx4AeN9YN5aSF2WUCUdWpjBUjXZykSz34WreaUAtuFy1UPJLSp1sEpb5NswLWfASJ52Vd8EWkb",
  "key7": "52phnwBBme3EvGYoGa6YfQUY96ff2ht97Sq4vyRtyjvyzm96EE1rM75bphb65JCV5y6TgmLf7pX8bRD8KRGbjHUC",
  "key8": "2FqvxKk9MMKF7v7HUmJ4pZDXo1uni4oNsEZ5t8FvFh1m6tX24Fyxn6UHuQYLG97xW3D6TNy6LmY8fGFTpqehBNvd",
  "key9": "5JQbYFXGBWwVswt53XcTPQaeW2oxVfT3x1N5DsE4q51qyHjjyz6LP4T7bUFWu6JirNn3P51pa7dYzKdpw1EK8Poy",
  "key10": "5qwjhaxaK744eeEbB2pcYHzbnCensNvVQ2pGyw4GcgAPmyHzQnYLAurTccdm6uPDUyc7JDFF1pVY8M1yuYXxYLAM",
  "key11": "61yvXFsS6RHYQKSvSaLSD7uDhkAdCe6ZvfrzSVBhWGhcMiCVdeQj349PCMMsLbYyHnzHUBYBeszD9QvxvdsevrX2",
  "key12": "2rGN27CYmhzTsW3g1XoEVRaDEhDu4bTtW8bzBEG9Re2pZ2zFNmQj2HSXMbb5vF1GVmUNm2Q574zBTc9vZpcgs6pm",
  "key13": "45yMGDt5FjVnVxUJ85JNxf7qDfen59maXXx2BKPQvykFcCLdXwMqM88V4L78zjMqdXWpwuN4XPGLeKfBcYdzdBKf",
  "key14": "4FhE161xPUUJ4HvTjoY6ssDhxmsqL8vzW5ynpiXexCaYhVNrR5LS1KS4g2YUhdmEC2qtQeCinukfhzzTqmEKKYUa",
  "key15": "5tHcNZQh6fcgF6xBW2sAkuDmKawEPb7i53L38cJVge4KY5XnBWbhrbZWsbxq3rw8YCuTKThrkzysrKS2hfWLgw1X",
  "key16": "29FVctsTEVnkpibnoCJccXdo7fqLcmpBPTNxp8vGToFDQUBDnyfhttMBMBAs6G7aitYaF7ME4MEYNaLtCyzmuZtG",
  "key17": "5cnrHsUFi1PcE4yCZupgcwWWFW6PLwffn4Sy4xvrTps1UdD7rk958NJE8kprf1cFDWoot7XRjX4Y7reEtXbMuq5z",
  "key18": "4gANxYrmxsUpptaY4ETw57zi1pGSfdBkZPKKzVPqL1ZDSJ6VeGwN7bHR2R956tKgr488ScijuCLo8dM5jqVdvgG1",
  "key19": "51hJdM9Pbz8YQPQEMJ4wKz8GT6jtu7tmPRjiUJ8XMyQzbHyAD2cJWpGbFsnYSpgu5ZxWdNMBb7VfCZgBsQt71pnj",
  "key20": "2Bb5CYFdVjrJxcsETXzsUQ4pju1kqrqVw3zANMaZG2gt7opWabGD93WXb6tTaVAR6WSJGKUCuzgET3HaCEA1ZPvR",
  "key21": "3Di9HoKbFV7vQwPJqXVrk2fw3u9Xn4YXBSw2g3jbdRXr7n1JGoKncDktRgYRoPyjRGJqARNjsX4EcwB3rnWsebUt",
  "key22": "52vdM3CQjDyv5Hh94f1bkgZuE3YAcPyVucXTY2T6YUYsdVgk4wxaW1sAK1cYA93JRbDEMA6X8eZQrkcZRfG3M3Uy",
  "key23": "5BCPpza1pvdKH6ygMsVZFLKf2RDk4b7r9toPY8E3v854YNj1nmKyQnvbkBwFNSNRWpPs3kyjBGuRQnWw1dVREdEf",
  "key24": "58o4W7ia1D6HcryWuDTKubUuNRTFGtDavXtFxn1MDsFyQG4G4TGvamAmrqLCZSgTrWSRWVcmLeJYm91EqRCuw1JY",
  "key25": "3TWKLjhKyCfMKTZhzk3S6PyXbn96RwAyRZJ8pqZ4PHdzn5bz5WWp1xWVpC4LxGzyEoY6BWPVuwuXzojkvhGXdqPK",
  "key26": "3N2bpfHLc4tvyXyLYtmWwDYynKJZXRzFgWeoxuQCyX97fVqk9LkgLf9xeZmRAmWPAZ3rLrTjruxcdp5gvqSiw9ab",
  "key27": "3RSXS45axRoAaEXAXZJgTs6YKZQVya8nJZdr7kcWtyRoLgGUQGfxMRkriwRogyCD2s2PPqZ1M1id2StD35ko5vNb",
  "key28": "5R8g2B2JMevBA1DeA8TeJU34FCzNHL1jwgZgq3Sgja5jJz8DuNnFfMieptyhXvudFgf9rZX35bW3UUSPhbyGoGQF",
  "key29": "2UFejNQ4zXD1tDJsnDuv1wku8UPGaUH857mdXe2oyiUfNftn64nAyvebTm1r1AZqgUYqB2keFGLUTXwGyEFo3DWq",
  "key30": "ntYJPcwvigWhPPNxX11oRqjt66b65SpNM7M2Z1moFmUD1UW8vWa9RV9VTeqPMm3XekMUSk37zaTuCAvQ3Kt3hPF",
  "key31": "3uuGNNrr31pKK7yDeHZVMbEExps2Nimmbt5xdtxn3BhMSkjMAN5FQp3TniHE75h2XS7pYRVKbVXvViq2Q2i1Py12",
  "key32": "4bzPuSi4b3Hb7Zyca3ntdWEM6d5vpx3cU7rCZjYAd6rF3Bzw3e3zSnHeLBWANpZAxjaWvmWQX3vhY2c5xouHfM35",
  "key33": "3pdVM5e1EuDHhbVDh4KHY6qCZpaPomiCHt7n9DiimTEFCEUuoRF41BZKFuxaSdAPWAKXFyU84RfS88oAGJEK6stR",
  "key34": "4paEjs3Bv35X2wgdQt6YhRDbGfKo8KmqngWZ5T2WTE16EGmJpbNLowvvcghz26UcHCRKj7TdABP3Hr9iLe2n6SG",
  "key35": "dcEKbJTSn6sqjk5VYUoUxDaZws4HpizJSdMTtVPYtiAXxyMbiJVvrjwGDRvwYDccG9e1zLmUpAF6yQByxUdbocA",
  "key36": "3QhAKp5NHqEACihhsT4KAfmaUkZZan5ZXAc5k3J8MfSeVaDmPa4scfR1FkKyQj1do4x9in2BsCP6ZHYRDTvnjwL4",
  "key37": "2SbKaWBRpzbEtXx8ecWgTN5Ti2SGw3YoJJygodDCHJizr3sSsXXvoAYo16U163c4SDkeXAkSqfWYFHkdwGWwYY1w",
  "key38": "3cnHzN1Mc7bWzZy4MxDuuQfk8UrU3sZ9Fw5onU3jCXBg8YwmuR5YXazMWfB68Bhgt8db456F48dPpq2GD4VmErVW",
  "key39": "2pcz74dzZW6kUURFiY426vnnYP7qCXWu9bb3wsWQfw8ePNzbmpStHzvMRkdgxxoUxyCi4CXRhG1hs2HCecz7p9LT",
  "key40": "2qkoKKSoNbNoq1bBjuLBX3bjS9wabmDVU6A91rc3tdJrAcmbVEPPKq4rCAYCZxccgyFgGo4soieoh3Dmtw36jGAx",
  "key41": "2pvRZVFzVLNbZsiJvfaMLm9Afx5M74oPA2J6CeT3jiETzAQeqTix1Hm4Epjb3jECpytTZWbT5YDHktDMvoggWunb",
  "key42": "5H3mdWQLCxpnteq8hDnVfwprfbo6EYnD5nFmguvPZ5FB18pZgcaEh2Yfue95GQsbReLuPn5pDu658cYPfHYTZzY8",
  "key43": "3RpYPfSLbFQoqt41aQ8oMKWgHDusr9y1r2EEZxytXAMEtZcNX1xktipS5uhpHLt6eMKwxSpv3Hg7jMak2WRjBNpm",
  "key44": "4BqrUBqyKVJA4PqhX6xt4JjE4S65rZ9NjMheyazmmcfVY7QgWQRpsHw2fPBfn6Rs1s9kqSLD5N69aHtmCCye9dYc",
  "key45": "58wknP8dnJhx3ZTYQrneGMLRcyeUnjYzHcmDe6d9NudEWpPLVbFUjVEsERMVbvnHfVMuAy2vbAjBGrNe6eVes9Cg",
  "key46": "54gYP5NSDtRru31YStXyjfFXB9PEV3CNrU394o4yFLKhaFYV45N9S37U9tbnNEQ3CcNVVnyJMyuNP1sJcsHvtyr9",
  "key47": "5nQSPPc4YcmuLTjcDbsrz65vB2MTFJqAFrcfGznFrg9paV1jyc3MRvMTahrmbjuraea5uPxHtMVoR9ysK16AJvuy",
  "key48": "4XaqtSm7UQXKBpvaFt86G7ZfQi52KuNiaGo4dxF8jNpXHm5P7K5cqs7wjfJa2dnwNAnLoua3s7cqvpahv2dJAURA"
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
