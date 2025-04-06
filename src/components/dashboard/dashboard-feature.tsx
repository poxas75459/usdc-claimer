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
    "3qCN81YZFJ3hSbDoQu5SFGrE6HoD2DcvTgFAWBySLeiPQUqf8eEfUTcYDVinduqrA8mMC67Tgn2JMP3Ch2jaEvU3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N9jcJB5wedCWpn8rEFTiM9LZUoMuL44LhjQMAw3SR6hboXbqcZPhsHShHqgjC4yEuokQiawN6Y3uFtUKcjEF5W9",
  "key1": "oksptU9QXGiuMpy2bfSinybA33UB6nubEhsaTZpDfZeAqyopjA3FsxVysug9jEYvDqJmbXe1uaDtbanRbVEw4k3",
  "key2": "2r1ukUEFZ3KuhxZ7qGXc7KUfddUNFkjkB9U7G7oXtztTiD3Hnj1rPTUrBheznsGp1xqceBsjn3SK5TVEbsEk1q7Q",
  "key3": "3BuVNX2pLTajWkKxjDnTmdEdSFiWtZLuLXgv2YHoYvxZckWXFFzDdnT6oefrj5LpMkdTeoW3oyCSSZTRdWa9RPBp",
  "key4": "2oaoN4PtWm5LKLzJzPaBZwU7Z7rvigpyc4TPTxPB6zfusfme68kfYoUWwAaYEYGLEcW9yeoYV9Z4ggZuppCyNDK1",
  "key5": "2yS9JpFU8G7QsUze6MJEsA8wNwRsnrNbA87xEScSn1qqMCMAAwBy89Sdjs8mK2r35GJYUrVJPLb6i5kiKs7puk6Z",
  "key6": "3A2DJX6ssCqR9LUBUr7tNcgcdfdQzvHuRisT4Hnh44DheJqxBArbXNpqMjoMyEpT4u756KdcQrEocbFNhqRfh71g",
  "key7": "5XTYNexHcyqVC8qZoNbzYN3e8VpQXt61GBpsbTjYdBAHUAo7N7KuRH6ig4daUHx5LTT1BjJcfj3YoikbYpSRG59x",
  "key8": "45ySgL3YcdFzCUvzXjHPjHbgbub5Gj6FUtThEDzVunSLWg9vvWFkktdNY3vyPKyVx7V2esM8QTHH4wzqHfh7PEzH",
  "key9": "44mkzeXVLUSpzKhsPNPrnTfVzmCkLKQhiMQLnJ2LyasG2gdtqXfK4L5oJ62cBt6EDR6FgMH8Ma4rH6mU2hc9fd5S",
  "key10": "45EsHnuMaeEjcri1G3xeDqLDPTvFGZEJmZ8HKyAMir4pfZYHQvUf8jXM3vLEKupStv9cxZ4QZ9QSCkXHc4yFqLrj",
  "key11": "3aEtWVFTRpDcFW4CJ1nDQt57wW6LM14611ZRQNiSxjycsQGzyhhueDsTxzme2PcHh9sf5HB8gdPwy2KLzyfgThJB",
  "key12": "vVdmiKWMpZZse6EYP5PUdZnXXaNL5GvBUXJQzMEQRiPJPxzxFQ6RfPE99iuQYNF7xiP5savTyQKJr7fYvak72DJ",
  "key13": "5iYrqFGvaH52SAqKR3JM8dVEELsa62czGEPHvKmcbFC97fp96a595GUuUuB5pvNzHNafBsaLkskbTYZPo9r4yvc1",
  "key14": "ft7p8P1i35gz8hhE4arpTBS2XqT2RZtXx1FyhqJKPp4AxAK8pRxk5rB5QmQ1tCsrqAxewDTsyNKPMSh4YYZXdd6",
  "key15": "4ofZ9QnjYWHhUrf5kmTBYQ1ibXBdNjKTaCMii7aCwCpTNgqZ8YggNadBiLU5Jnh3T5weZZQQd6Pt3Hw4MTP7qT51",
  "key16": "5MSKKGDua5EReVDPHdzpT3vegKD8wJun6kH5maZEFihPVY5mcQoLXs8X1xS3KFNuAE5gyiWLsehg8z2pvrbUvr7r",
  "key17": "56gqHukNdRxRAiZKM7DJsFNeb5wUr2Rw4TW2GsJSQRXwQnjmLsiWPc5jMKH7dJ5n2fTvbaDLBAG3XUWvhyBYByPU",
  "key18": "3mHAm8i28bX17ookW8xyekTcywWo883rme6prEErQFwffA8QQUWFVL1KsLR87LKeB456fHAtQ6GmTYa95H8WY6Yi",
  "key19": "4WeK1aykXKj7wChYgbHH8zqGKnbrV7CaZNzBMsNxc8eTZ81zVLmdn8eWBPiaFcXrDtThHmQTqCJeEJA1M58PNwgD",
  "key20": "3tR7BumpkBYF9SdVxPeoTHV7xe4XABpoyEAgLyL62okzr7PcJdPcYMWTLVr5B3j4FAeBdYipsxDF4MDjKR79hcDV",
  "key21": "5YgmR9UQ7b9PinVvQMhe5dEfRCJfB4N14w511oE6wDjM3mokLiVfwQm8CeJg2yapNwAFaPvP5sRLtYyqo7ADPKNC",
  "key22": "21NMMFKV5mGEYtAyoy55h5zz1dytWnwafsJEemMpSLaeiVto7o7o1eatqAcpRxq2M5DQLF1Q3tweesDxLFJRimcf",
  "key23": "61sDKZthMNjnmMpWvis53FN9L2HYd4jEK8knreXCpv4qy9k6sAKGecW3yfp2ZgBDFkCVVdXzYVaT7A4J9up52Xg5",
  "key24": "2GEKe7iwWMhu7GHwPXZXVyRdsatYybYzceGRE89kbgycSE6Ba2t31JxJkk1chLWPCb3TvVj1o9hsiaBycYCJdT3h",
  "key25": "5G65izKGurPjUqYUq7XrFyC3mnJ4Xtgz88ko6mnnDRrXYf6nhXFmiaQ68rTrbs9QFo44EESNtC91MHVp134NVv4d",
  "key26": "5GwL6M32RKzyioAXiRjYLwZEHLJCe4c3k2FEmj7NVdoRECoZoQvxthztuXLAtEDib1HGzbckxoMDmungh5BwktR8",
  "key27": "2KRZaAH7wvX48Rj8gt6CWJx82Hh4YnMznY9S5AP5P88kpaagEtAGpuNZCKUGN4rbDwpDnRvSMoHYeAM4jDTKCY1U",
  "key28": "3DM65LJek7DGNWsx6qw6E9fBrPTxsEZR1gthpjy4DKXQrmNjsEaCEUF1oiThYEwMqJRCuvQusHECuvma2La7mLeE",
  "key29": "5xKrerLQRudPLEM6LXoET8YHsjffB1JD9pgQNLNDdk4oVU5oxCfLuBGbGashK8DuQVP9a4ARZgVoyfFtvCp7yrXB",
  "key30": "1cpg3PWGMfhv84x2fkSwxA8ch71gpe6NW19AkM9GaAdWb8crK3ek9HmDGLbhvU7qqrv5zP5khccSbtHw4KJ5KdP",
  "key31": "5SBivxg89sF88TqY7erqWbQy7DiheBQZRdopS8XuwTCNgMF4D4GexEdwWjGGnxfLfaR7HNJ9hdSjUZo54jBMrYZE",
  "key32": "3nY6VWGmG2Vqoi3KSX1nsyD5iELZa4jMqKY4JvzYxrKNcYLuP6mNjfoH3ExEUNqEvGx7zUqj9DmEF3cz37xxtojT",
  "key33": "kEi2RdERkWYz5DxtFSdT6qTxwfKvoBdQmFy5xtrf2AUUfw8NBRv58shC1N1CW5G4Lw1MKUvxaALFZRV9gmcfL6A",
  "key34": "YJq7c6vu4axKXpU8HuhJHJFABhtJacBwFjQ6Uhb5idnJedur6UCc3omwHQvGeH4LLBzSXgVMCf47TmTC5aMy2KB",
  "key35": "2MQUxWfcQ7dPG9TTrQK24vhqoCoEjj2k5mkss71mZrbGauZLsG8DYWK8if3KZRFKoRrSrRNWnrPWXg3ESaSb8gRW",
  "key36": "4YYF6jQCSfNLnjsyQ2zbRFsNZicyAm7mgE833DmREsVBtM3ztwzZHyMnTSbkTVM3GWoGy8euEzB7VY5BnLHoZoJh",
  "key37": "54BF66smR57BMwhABKKQh5wovwX1kx6U4oUnGXpRAVLbi8Gzr2SdpaxjPbsfEUdYZG5BrTjCXEbms82yeGod5PDa",
  "key38": "54x45FpNW1CFzrQUdChY9p6DJHPBCVpGHiL3gLnaabQG9QjxpLQ7ZQvranjbH6MmkfoeecXS6YPdwJ4AUHwp77UN",
  "key39": "5JAxhHeTthS8Au5bJDkAMn3CYrfxo4pvbS6TybgXTn2eV19dFt8qdF1drWcninr5ghCDAG87fwUjdaf6Hw6F3fb6",
  "key40": "37HXyi6vDpnjwKDCzeDTyj3vK3rAhLKE1Xq1gedBd2cyouMNcEuY24o2UdRbpkJZzA9ZNwviVLVMmV3w5ecXkzsu",
  "key41": "fS8j2v3uRQRkmpFfZ6EsfPaChCeFpV4pAmaas75QUeN2TWZkpjm7KzCvkqX5XqTxZfLutWJqmSduzeGTrFceX9q",
  "key42": "3NiQ9vaK2Jci3auFCoec9pAWmxffdzpEHxLfb4B3KxKFigLBpWFkGaJdDZkvdkG8DFurHivPeYy6a6FGJsoZkiSX"
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
