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
    "5zGPyxDjCnmbp9ccCEUMMhmwNxPeFJRUXtK7Sqn7QDhGXT4XF1ehmmDN8FiddxaheAnWQuky36G79XqUWae3oSpG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XfRixHMtKmSZNfHHnABPpjcsHCBGha8n3wbZ7oMKKfEVsJ2xWVPwpZ1vgb26V7xa7UrnPnJ73SKwR42UtEmRYdu",
  "key1": "614erd6SYDKaixaoxa5eYdNTemYXkTQLUV5aCumYJBtwhG7M2iMNAFmqkeYSWQffek4pE6WAUSZV3awAP4qy5UTn",
  "key2": "2CrKatTbBQvwDRym73yfXd5mF9Z1Hdb6DyXCUFHs9EEyvCHftTHBSvRev95dgyRxWpLkCyVXjzSciYFTrBVyTTR2",
  "key3": "ADiAnMxeXhcdonRKdZbyrvhzgw2Cyr96q8EWoctUpgU7zFi3C4Vnu8qM5gpMY8cbVfRwts9gMtmconcpM9QCdDM",
  "key4": "2earn6BwTqZZH4VVbh6G5hn4q7MFtW8nj3gxVULC12RhM9RX4XiMLVVuuFfVg75pzAbHQfCMCNevKr8fKi1AK31o",
  "key5": "5M2Uw87Lyth3xKUpugfhBswCMFCrMiCUxHarP9mnby5DhRQaNYzp2oQUte2c5ZR8YpiHefdPohrynmMP2umezqAk",
  "key6": "4y14k13EPLMo1Nvyv2HzDrHesBaeTDMH3kfDNpXeDoar8drBJZBky7pqk7LhedxkEn2VgGVVz9pRMkZak43xYjsF",
  "key7": "4yX5XE4yhdaEokjZSbM8BpUFaQ8Po3UwCyWrHqedhksUqrZapBPacNQHyGKjuC4159yPJQovXBakkxcMQHCp5nsg",
  "key8": "3GjPt8NpXFn8wX3EMBMBMWgnZiyRCqqmyZL3VtzRNk35idpMYpGsSowqguDu2tDdHwMzFHW8nSXBKkWVAmMDQSPu",
  "key9": "64z9k18tLCZi8WGC8WHJemPNciCSpSPVGrTAkwjuhN4wozfW48YCnTkohXguRCQEuT15XcK5d6u3JWV5jZhkfA7A",
  "key10": "4SAbLu2aCQhXkx2hirdndkdAJieXWnUmdmg3ddm3qVxyA6fR74ckRfcQUgh92xezBRFr3k6buxAfBwAnyjdiV7Y9",
  "key11": "CwvGe7W4qqdcatLSqbw2CTVK81FLCwreEDHCCmkb7iDsQHbQB7ofJ6NQEbtmDL6XMCJBe84gcaiajc3Mt8oxfDa",
  "key12": "4DQX5v7QqpbfndFpnXrVzNrrEwcrBeZhKr8LDC7ebS3tcot48nkzE6b6DXQLnWvAAbfkiWKvv4RhCgMsmTrcbT82",
  "key13": "37kLcVkkfLUJx5Z35vtpMEgf6qTv1TVxGpxTNHHAdPhWRm28mkryq6ksXs6nKUgqQtKHF6vBKMttEKBmpiRyw6hG",
  "key14": "2vbiDNZnnyX5KiH41dSCesauQhTfH7m17AanpfEUmh17JVbfdoJ39nYCmjdjbAwb41G2wdor2XRJRuV3oEYt21kH",
  "key15": "3bh5C7LCsYXwwgHW1y3Y8hTLDQv6nbow5HK5eVT5nLervrKP7PQQitSBJ9RVKSB67JQpddYZYa1mLWBJC3zhzeSy",
  "key16": "2pw2u1hjVy5AjJ6VWewbzkfDGsQDkXBVyn53mkcMhQWqviud31fGwBPeZULZqTZ5QhQ9EZ1UbXwiQ2yXRVs89G1f",
  "key17": "2v9EahcucPvboQ8WkzaE8b73drf23bjk5HscbysMp9Vh3XqsCNvgwMUGDw8Uwp3Vv1qeubeB2VSvkfNHW3ZQ5Cw1",
  "key18": "5xCQmFQLVNta6AiFQLE1ewCGiRZ2fXRhGxKuaw2RSgJHEjH9gkjadNu8hLHedx6oYx454taSJqtbBRJC2L8YfqoD",
  "key19": "3S1a4WJaF3wSGVuF728QwjRU2eHFyzDJR7VeKEXeDAWRorZ15aSYyDJWhMA5snvcbTg7uPAMFcG1KKsBg8cebJdv",
  "key20": "3RcsqhqVkBFmdTw1NsXMurEp8E2WcNbrgePgCBYa8ds6JAZqttD1daYSzMefLRH49zKRZQD2DfbmQynZ7KDaTkkm",
  "key21": "2bY2a8MHjGSxggTQDQoN77RrfbpcDWpLfxTpsY5ZkzDvGfFAZA5beweTNJjTXy4QgmeuNmyK3EiZ3TWmWrBiho47",
  "key22": "B4F7vsg9DsQnLhxJQzzyFtgopjufyAWiLX291jpewZU88NdY52XFeB8XyfD3JxnGTD3rmCHZhyQcnd9nq4NwM65",
  "key23": "3kcgvLB2jZVBD6feBH8c1MGabMna3qgdXJtHaA9wp3zM6ExjqaVhN7w2atYZCru5Xs58xEdY57h4gwuzsPYmA3vu",
  "key24": "2wUAEUhiV2wpqE2BbYdqKyGAPp5nsggA2wBPh4BdS2A4gdWMz6ogZSJg3gt68AsSJdjUfgz57xyGw48FcSs1ALPV",
  "key25": "5ZHcXiLAuUd6XyVJbjN337YDdmjqW6ppKWrRjpNTWuSb5c8q5uDAv1Cm4y52RVWZ8fJZBMRH8EeHJjChYYVtXYYf",
  "key26": "2d9PAnymXPW4bCmTeJLY1SY2qYhoQUvjD1rjEDhTHVVFtDegexReWKZTDK1wu24dXpZzH6DoDMZDUDAGpaTcxnhk",
  "key27": "3XtYXSoSXVut5oaSSTcocL9iHhExDC3w5kLc1JWi76T2wwJ9FTtgvbiUBe4GSVcSrJFhuWvb3AH8khL7cgNZdg8U",
  "key28": "5BpiJUQCeLWahDKdpHYEFrdDziEEVqPTevcCn8agL812Mp6yu5FytM26G9TNqr9fG7MCKdQmZA8EE5sUzxqqtk8c",
  "key29": "2EwN1VfC7uiwPsguxKeFUqg1dRWgDnreVEozEZBeFsXEr4ErEXhQ3GJPXGXVKNsKM5EYLvjuNGYQg6dGZsMsQfFv",
  "key30": "5C1rG9HuHQVseknmfkQBHddAzhRtDCsiwYE1uKvUJRaUkvdAAidEQes6mkALYeT7g66YdjfoB1Aozek9Ua6NW4JJ",
  "key31": "3NGwx9JpVntMgzHnkSxrP2mZMfDEBDGJTiMy9s7HUETGsV59gV65YgKAri6tYsVEwbkwd5gyR47KE76tcx1DJFfc",
  "key32": "5mARhpKEUjC4YYJayA2toCj2Q5EtD4dVS8SowKpcdjHdK1PEeAadgtGsvpXUXsBfjRF6jxoFdet5X3pVR1Y8oYgG",
  "key33": "67neZBEZGz4ffackKE9EfnM3mNAK7eEooishGtah67sm7LQsJj6BnY7oAWWctUdPSmP3HCW9hTcX7qkfZ8QSREaT",
  "key34": "5fkxqbortY94FJoXhQNMYBgLaSYVPtYDPXVAfGuGr18FbAKnFZhfBg5ezqyxt5CyVjw7GCnqWcZT83pSEcEXEjhq"
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
