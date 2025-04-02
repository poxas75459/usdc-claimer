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
    "2xo157V25b2p55tyLi4uTRVcUhLQpXxbJZtGV8sPt5459T9JRna3NNJe8ixiZjtJeoAJt1tjwJWDATttV8yTJCcB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c2cA7L8R7MirQmetZPz7t4gCrkNe85QTULPuUiJZ1HeoBtFfDsdY6CMCNFjkgaLKgSvRF4QvbViJ8FkcSNSHmzU",
  "key1": "2ui5ECFXvWCaaY5zd16rak8z1tKwVnF3CDj6qztywukd33t3JwKm7KJwPZrssHREFLNUx9pzRsGUXLaCuzMJ5oaX",
  "key2": "3uQr1h5qYsCt2XdHFUFDRN5yBUytYsgkxoEjbgBRPHxfxZQ5UXVc2hsxhqmFAExuU3Qv4GnEKmZqipBjxWRYcGon",
  "key3": "55gQ3qv9jYRLiMqYhGKGk5S6mVFWiWeLquZbgNgdhyQArPVyXSyGVxoJkuVzvDL4UqGw9Xamh8dam5xxpiZz4wiY",
  "key4": "22KPXTSZ5bbrrT8j5UdGK5U2ai2d8oikmdUyEqZADmYBrobw5cuXUNffqhojeccrhewm3sttFquGEJfHjqyB1Kc4",
  "key5": "4NMpG9uaFN4Qwbm1kWXsF4YMervrx1aVdZeh2ePwuVktfwV4U6td5gXe68hnUNmV8YFnk9qWFWAEWKpVqkpSUuLp",
  "key6": "4gMX37E9eSevoTLeDbe8KMrcJKRMVxc8JY7sULkUUimCCrhjcC2P1JPeZRXCBsAt6A3gkT3gESAM4MMKwbojNdd2",
  "key7": "3uMVypaeWKbca6DbPP6TYoTyJA22Lo3XHaXkwkDtw1PeLk3mv6RKeRrLSAGmcthVLnAG3CEV6nB6JixyKbeDEv94",
  "key8": "3QTErnYLWe6y2fPNe1tREniz5cnxJzCha9WDoKcFA1F8R2DEXj77pcrp2cvy27QXfHjVcp7bweMmcvzH7TugmPFC",
  "key9": "2vgMW6pZKePr4LDo9zGzFHfuoX2dkwtqyVvfnb4hvzGdduNLfP49zRDydahK55xB2TAcwmMiRLNbgKTxv9s6aRTK",
  "key10": "2Ld6zuxv9oXH3U8QBeqSMRbCUg5C6EnZ9CM3ueDHXcDJ4T5HeSTVzpy1QTzV8NR2RuGVmmWVaGBr6VC2eYALhSfd",
  "key11": "22CrUKXGaxfC1vB2chdcax1Nvt8pScpnYhUzHRsjTXCNNgn54792hEfVJeeE3UjkUcFYLZAM8kVWzumrgEduJX1i",
  "key12": "5ycn8WXDmxHwLbv5jCFFoFz8wtW9bZ2h858tgoT2B1BC7rGp61iAPgAMcYtSfckddWvE2CqgQLmKKXHhQXPEkmNh",
  "key13": "34faSCpwhkHeEjvResB8cX2Yjr5KNsech9ERb3MMTSGcHWsCKHt6r3rjMXaPmfsqmTW41KPFGQAmyii34eDr3C6V",
  "key14": "3T5DyH26ShTgjGUMVRTFV7Jm2Hu7Se5LwYSvP4hmPFK3TS8SA41HAmtzookpxGU4m13Rsoo9TrhdHttjjarUBbYh",
  "key15": "LAwzsPDu4XwsrRHAx8P9X8EecatJEc6YJnv8ZN3iMh7kwvudDFiLd89LkG7LvoxmkfYyL8ACoVm36Qhz3geSUNG",
  "key16": "5dD5W9TLRv22YpE3mt3fPQ7QqJGBmHuCFWSj27hLzPJgSu9YtTrkf7pTUGUthyfM4JMG7wsrsUQqH6MKsrr3LQju",
  "key17": "4g6voc5xdD9UQ4L78on9oBPcXtYsfnXHXvA3fF75SWy2e1c9EYRWdp9mvhWuBvdDmyrnd7kctLupn85kYEFr6z7C",
  "key18": "5KAuJ9ieSUGkePNqPN8fcRqSmXSWCiBsBDxVRo9gr3aUMv1o3LRNsu356un1ZUxPHFF6oBrA17GnUshqsJYvhubP",
  "key19": "CybiWzgeRUhiXbWNjGronF3ZXG9coegV3uBtx97pHH1bSRZtJmZXoY659N3yUhBBnTMXDUhLc4oGXu3Ht9WFN6B",
  "key20": "3M7HDZiyKyWc1feeN11bcWDBGQh1rLTo7rjEEDAtBjKGeQp7KzpMA3QLeWkAzPVLjqeP3eSkU9T3drYG69syfoTs",
  "key21": "4Ze41e6BMdcgMFe2K3za82cSfKirzfe14Y9NN4Cpmd4HtajSXzQ9DULv2NHStRwjJudhCXXm2rdVbsncfyp2Twv6",
  "key22": "56GMajoxgnb36kdxS9ZeYao2BkLDJNbb56VRv2HJtF6YPdw6qwPfAgH1nFHiY91ZgCYYXypPnry4deuYiVj3V66",
  "key23": "2xTQe3QioZ1omjPZhha7udxz4kUrRjSndpiCbPALvGnx8uCJ5zWA9sMtwrQZZYmJ6TTstGq9X4FaPg93yoiUkbqq",
  "key24": "5oMEhy8rSFEH2sPvViBNcUQPtipkdbrkKHqpULdaGw8fsWSwoAzBafq4ySbNFxnYEVT4v237sJp7fgbRm7EUCEh4",
  "key25": "4dbZkCDSW5KUThCCycAxhFqXqPNLQkxV4EBMqNrs3pnPsN5A66T1CWbrBq8zbdmNaPyze7MRavMMzcsSTjrNuXQe",
  "key26": "DUR8yqpeVceadhFhGtcbwj8RZd3AFaxDmjSpnDZVFaxbQDPPh8vLHCvqwgZ8wC97ZwYqMeML8iTNCTghZUb2oRY",
  "key27": "4MPBsaMtdUerzdCzj2JQAzf5LE69pStjbRjwdc2zqyqxfiQFUU6iYHoYXwTT5RRD6d4LQKGH4oiw6TGtPBLKa28a",
  "key28": "3uuZG3LSne3RZVXPPvnaXEQyRLYofnxHokK9FhTezedf5BFkkpLdExnf76WsPCCHJzU9Leripc5aEebcNfVxjWpM",
  "key29": "35tT9VZfaTDUDKE1BwU9jet2jruyv8aXsdWJU8MHN1EDVY9UsxHmYgp9jthncNKtEfzQqjiaeAUz59489RA5bsgN",
  "key30": "236abhpiRav5X92AT9z1P6yy7GJsRBLppVYdP9EDX25yDuyuf2oE3mbYKRjXBztQ4aU3L7AnY6FsT6PCNtdKjJpS"
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
