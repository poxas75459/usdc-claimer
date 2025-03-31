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
    "UVNZDEhcTuVKooGDyQ3osmyKePsKbLpsqvr6sB6KfhiGnednG7Py35Fe39jLVSP1LamRJzXMRMuYUra42o6S6oq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57ZuYTiF9psL5inhWsvKBdumNhDnvsbNG8ZxKyUwzFd5WYUEh1zu48fn3WA7LxGDrzzMaVeuSYsRN33w5w2JUweS",
  "key1": "32MMn6UwfWnr645mxgUVJkhdHmUeZhFizeyRK5oJWNR45k5RwQqfPYFHEZrPx77358UFdd65x9MEfKr6oeU8kz2",
  "key2": "vXY3cH9TNeU29D1QmZHZzohGdpHDW2iRvvfstuGDVgCWNCUXLVgAvf14RRdTKg26WtzjGnuPeG127NACSMG1H57",
  "key3": "4wekEv436RhSR9jdBim8ZqARryk7kvV6VtpR5ocnbCpiw3AKrBXajS97aUdFzQcyuiCnzYpRFaKPsiUeBq4LANPg",
  "key4": "3n3B8Hxf9JieYyy3pxbDsPZiRrLFk9PHcsjcVyfiW14yfLetfPH3GvwYjnKTfYdqfNA279PMVaUc83GnPVDv4YGq",
  "key5": "4hGuBcGt9vqxnJXS7qe8nX4ymuvK5iYtyE81BNwy8dVzVNFXPPxxZYsWsBc2dkAifB7FwvirGaPicrSTSD62W6e4",
  "key6": "3nCzKzveMyBW1fYaKDwgAjy8WYoAvdCcA8kfHiUpkNSmyCXE3BojXiuKEjwesSfAECUDJuNBLnEvBS5dm4Sku6Mc",
  "key7": "21S2Nno836ycbjxHxKsvJ65BcYLAGJ5JkQ6nY3CAQ2qiDA81BE9512B1NrCX3ZyEMhXNzoFmUh7z69U5TCqaF2B7",
  "key8": "2HBXwyUZAD6zVxmga1hZYjqBwRN52pZLsADtsVUbCksBrrF5ymWVbNWdBYMH65NDucXLqpSY9gMTRhT41ZSTdECm",
  "key9": "2LnvU1hueubM4LktpakV4aEV7vzWYuoC7Urbq8b2fZt7mepuH2HBzu7JS3G31fbdLXtVi8ijMaC6JPrvd3quFN4e",
  "key10": "2sK1d1DTQRGXUEjMGtEPKqNYJsuzZxzkWKXDLm12JQLMhc5revSnBMttNk73nvAUAUn3X2dUZvkR2isfu2ar1uou",
  "key11": "5fgPAoXeu5wQTj8fGk9cembQRQowAL14tbpdfxxJsXP6sFTFJhV1PZE29vzAznE5f6LphGcPi2dg9NbLJVYzQJ3",
  "key12": "2ftW7pP4tGeoWyLEFtdE55VjDUn5Ez8HNR7tndpZNcfbG83wvgKJDVAPPm7TFX48MBEGANxxaoALB67JTs6pCYoD",
  "key13": "Vmfzzud9HYGEr8ywFCNdtDNbbAZuRKAeZPUBCCC4Zn3738vFSKR7N9zru66qqg17yCvHVJwY3bG1jbXt4tA5BzQ",
  "key14": "3mw7dmqKMV6qgQKpPJZHYRhPfFByeYrbaCSRgT4VmCaWmp3juZH24YipREMaDXps4BrPMPdo7U3Xy9cMQtWF9gzJ",
  "key15": "4Q3dsTHTKJoZqFDPNkxfaRNjbCSNonoSdyN3yNN6EBLtnpsFmPFLLtqEzQbFRHR2QHHZFHoY7vYvQE6oZ4X4emGV",
  "key16": "49cDycJKnMEN6NCTi8oCXtGmhCSBCAVA7Gfz2YyGHwgexVcXWGC2iL9o7M6ehqtyqpBR2cCAKXBBFnhs5d8TNcF",
  "key17": "4nYZU63cp94LKaTHEXoHfbmo3oqEntenGAoQKe8Ut9C7EFiKzQHrG4JTSr3TFsyJJeHeoMKRpAWHiQeNhzwtTvfP",
  "key18": "27vFo27tc6bc5t5fXaeiPQuRRk9JskqDfuzaEx6C9j2GhutiWcdDiFYs1CyvzFqH4EoPgJRjGfAu91kAVT55qTZW",
  "key19": "4WdFdixSY1HY9BKH61ycX1kd42jgW7GzLeEGk7cBnWsroBGJjSSTWDRxknoPu3yj2e51cAEd8C6s3QsDvdjPnQWB",
  "key20": "sKTFMNKzscHUe9B3g4UnBzjXAngBFHcGBSTNX2p4DyAurV2dLgZAGVfVpytbNc6Y5oePv7vn5Rn65TxazjDE6xs",
  "key21": "3AfVWx4XVHFVcBsrNUqFUF2DwXWq29JUBoDBN7zwr8nwrjbYLmQZ9sEGqZo7EbxWRrfwxkLTDVhCaZHH9BCUjQhh",
  "key22": "5UCnMxyBQ3Jf68dKXJdmz4VdfV5tBcM7MeNg5Sgqk51aDVkbHBVvSBPTz5KLYyLtLxhVHkb1DnPmqcKksEeTtT6j",
  "key23": "CqXx6VNMYXjLaC1YYDGaZwMbNEt1XvqT2zLFjMa1s72t8mNZdQahueR27qFDLQ527tMPbhifgsaWpky3yeiLe93",
  "key24": "4TonvynzT8cK9bLFLhuxeqiLuqW6ubM6s2U9fjhqYMDmLV72sHB9NNKAuTVftPQ2PYeb2RquDoiU9eN8YsDxCaiU",
  "key25": "53PfbigPAJUrvGqgQL3wdzyUja1DZGyGPsH2XBLZ4VXBvf2xG8iPFVYtieXDuGny7s9Z9Zvvm5jsAywFTtXgbdyQ",
  "key26": "K3y3hSkUwHYHDp81zaUjmpgoUnMtXrPTFpcji2Cd1meEJCxP2mXycwXokqmcrpBhqrp9ffs5qauvEEnVjRSZy7U",
  "key27": "3UuCWza4fsfnNrWWjidgE7wnXyNQdrQpkM7BVLpgeyDhAmZS4WXNEKve5QF4gBsKdAfQP9FyF5Fs162Pb8DpSEGB",
  "key28": "2dERuX3AWnxnYraTqPgg1L3UQ9fxXLuoPD8wvEgK1aYt3KFBPxxcuzVb65Vt8fHBadzzp5or6Fp78gyct9YDP1zH",
  "key29": "uJJeb9UFL93BsmnLePSf5nB94Q7HNvJywj6pkSSHRQE5d3E54WcFoSZGAkWRVj2mVmVrJ5vieQuyhrzKdNDtJgK",
  "key30": "NhbXP13srEQ9kWUwuGkMm1TCKEfAsrLbVuUkNADNGTBnb8wKiR3JUVXsBCKvAK1JT16y4tHn2Km94uLikgXaHns",
  "key31": "5eCTumhL2t6bDkEFLcAgTySgwotkT4AeGDVVEPyEMse9nzpjqy53QDZ4RpcHaS5cPjC7PKvaGEWdHUxJutuf4ah",
  "key32": "5KZnGPXw1oKkmkQdqCYUjGsEfokzVburZq5pdHaJ1caQrExnyXi7w1HGKXJGfrKDPqJjCxMM1DzCLAJ6rrMC65nQ",
  "key33": "2An83Q1VHAw7bmJtq3XGF2qjSbXj5aKS2c9JbsyopdJLBe9fM6ddAdYXEF9M9K28RSPnhXZ8MNN9anvD5M35W8RF",
  "key34": "4JqzWyKU9Xa3LKYHseeqVw5aGKgSEQrRLk2pPP4qf13F687hYT2Qazk6pmmMM5tywa2ewYAQXyvjJatK1G82tjwE",
  "key35": "4sWw5zK5rVbVQUX9LQs3LDMVjc6Sy2nNciGQSvxGZ1FAYQ4JdCGysdF2ENjTwik1XZESAWwKuzBTZSfwsZa34R8T",
  "key36": "3EqJCwNVFfNhpQjpKSiw9NaAyj85Kwhn9dA4vgwDuuTBC2CZgPr5GL4Xu1LtictY7K5eV1vvqFCFXTAbpJfB5QMz"
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
