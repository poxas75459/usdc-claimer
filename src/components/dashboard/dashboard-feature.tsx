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
    "5m12NJ8gudP85csYwEYcR3RMpWSeqDDv9Z3e8hhwq34x6WgSgAWNgXcR5Vkedu4UYggWW4pkGt1ZUqmkA8mtyfNp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58TbLDGzYRnhaEQf9ED97uWHyMYnBpUtcuip9CZGDgSMCrDwNzC9TzmtMa1sSzfHn4uFLVVaSJ7cR3Ac5nXdLYtj",
  "key1": "uCK2aF36fF1tg6RmvebaFXXLA6TvTj1Yf9jPcQ8Jhq6oj4drPjR46bLVMFo4GZerWsCT9XZhFAQ4mDRmFEyjGSR",
  "key2": "4fRFu3WKMBokFsVR9nETsA3bx1baQvd8JsvXmYBLKeggAg7jkW1Jtkg2sbkVAeiX3XiqaZxx2ACpfY8T4j7oxRCq",
  "key3": "oh7MFuWxyoEjkaQhaWFVtxX9VeZN1Eu3eEp2QwbMUeFCm8unuCXs78sgKMGaU8WYzAjGvQbYCeAJat5iP5eg8aq",
  "key4": "54ts9pWV8fg3PVHwoqctcpQd3zpKcw9yGXaRHCejJEfDkxnGUXsqcaPuPEoSMfCCBHkPJTNN9j82bs69tKqyT3Rq",
  "key5": "4cZ3jJpc82tJkMxECsqxhiAQkcNvmLgL1PUPp7uHR22tyX3N9mAe5spdBUJ41yewVfUZVjxd8m62CeekzBeBdpTa",
  "key6": "4o3DQUrzfASH6p8ktK1XaJQ6yPfmXGr9E5DMsVWhQKkkW1wNT2mJDappV22Rhkk6MxRyHUn3qdfe4M5V3vWVBhgk",
  "key7": "uQaGtkHNtp8a3Ddm7rXDt5HvSoDWsx1mG4hYT37bccf8g4dRBA2CinDqF6ZejWt5b2JFb2rVJ5zozECzatiex2b",
  "key8": "58rG1DUFRDysWQ7qNTLDRhaBFqCqYXX2poMsGU6uSeNnCkNSBc5EHF8dWXfCForj92ySwSmh98vpobobHL2dUcTu",
  "key9": "56j6JemUeKHWGEzLPCqgAMUuz5Teop4t3Ni9GkaPo4wDBy1vAyNxmupBsnVVdnjCTiK6PCaYkbARnseNG55g1oMv",
  "key10": "4Pr1JAXUXU56exQibPCzwj6PUVw5ouAAj5YYVjtMb4EaWKBD9BadnGaf8UdXotCCspaQdxahAFHKFfnJdPvJ4tMt",
  "key11": "3nkvE59YZ4YcPUqXveYCafbjJg23gr8ZfBgqfj5GGdjkYu21XkLLQhTWd5WiGkyJc2NgGDV4WpJqYiszMBZDT3r6",
  "key12": "28Q6HUvB6j6Y9Ng99MTkzoP9zCB1V5EmkK43Pu2etoMFM4FubsgnhUiaYbDCm2e2GMMnsxhcjmXfYqukxqiQN8Mb",
  "key13": "51PgDJhaZjrFWgpNr7GhWP2femVBoDFgGYnk2UGj4AV694veM1aNJpXckkGfGLcQhKm1jJQjuKQ3K7rfLmDoXdxh",
  "key14": "3jUSiDiqjiUZkG3csK4fmmAKyNssfuAqFkLRfXUdXVv8mZ5B9zYtTanwshKJnrL36GrU5nYwTHLmxjH1WKNzfiFj",
  "key15": "yEfzQYYZxH2aTbcsyXBMCXLACrPrkZ8nrcKZRhy6at55EdfFYEiBWWufFd15cfuPGgnzaKaGvjxvyiZNjb278q8",
  "key16": "5a2rGpHMs1gKquJ3PyDES5CBjsUqrCaFhJEdVj4FNFsyvC4Q7ZwN23X9PVWuDwbizaHzm3DnZDw1KkPv51MA8vPF",
  "key17": "6tF9iMspXfNdHryBj9w7sNqQYxPiqKq6L6dY2K9GLThfHk572a42FFXP9nB1tETXz2ZBdNdTTLw5kT2ngadh7zo",
  "key18": "twNaorBBtyKBmX9B87NZeNVEdwgiPeqTMuDWoMKFx6DVub56Tw4MBdBuAFomBLT5CGuoRuWfCo3ViofHfqSCPCF",
  "key19": "5Yx565uMChKJJjzNtzgVxGbCAnPBP3atf1owbDz81vQFJu3CyTDdbu5qS3h2KsFNF6bYG89o3e5Hj6nW4vAfGVn5",
  "key20": "3Z3yonW71WRgEn5iFeCHX9AzZSAWLDfTNE6t1ZPbVtC12Bi9VB3NEWzvdSMXohDBSR34ngnKwVnXPXpX9CSaQgm2",
  "key21": "5mcmRznydHSUFYgnVCnPUHGiebJQdBEJW1Knic7kBjQ5tcihjihAskh8E5jBziscfZWhrme9Aj7vFfEhuk13AoZb",
  "key22": "2g7KwnnujL8aiZyZ4tPPxukqvfehR2xJoXKwja8DzLNA87tdY2KNWxqUdmZeY5zsNbaZhVpXrxZqAwGtMB5huuNJ",
  "key23": "4iVbV1eqAJF2B9Cd7c26RK2uTcYdKnt99ntGhXbfqbWMrATXMnkMa62c1PFdb43CPHAr3NXCVot3yvTRAWMuZoGp",
  "key24": "4hM9asXnT1LwxaSpT3yXpVYt2c6KNWAe24LX8Qd5ndeaaD83ThfeHtrnR1kNVGC4AKv7UoH2dHLJ5rdSVb7miiyd",
  "key25": "5pB5JcCNyXXE9WnJYu2zoQKAAWEBTvCDdFd5CC4ouL3SAmbqz8PAPbeZwPwYXsbPtrwL4vGxdHCXfcDmvhVizifh",
  "key26": "2HXuzanh2i6XK6hRKjCGYTaksztDFoA9gWhdLmZdnXd6w12RpWngcfPsJ7CigqQCbWmgY34PYouAFRNBJfYGVjtA",
  "key27": "53orBEK4QEsJsprMFQ3o6TdEf7FBeG4fK6u5hWeHE1ZbXWjt344w5VV5sZtLGFo2sm7AfHyraog8xhDFatpGyYYV",
  "key28": "33hwA1ENZ6yWPog5hJGGfN6c1dZ31qZb5i4MFbu4ZVgWHbAykMswLmeDrNMnztrTWHCpsKBqcRCZnwSporChWvCm",
  "key29": "4oqtrzPrtboPwCxHJhcGy8aVRCBeY3kwKjxLGHfqhmtAMv42qc5ppTsCu4FH9a5ceMWPL8aKmrLcVQJ244aA8Zwj",
  "key30": "2z7y8B7BSRSLTDVaWXyrBzfGMPJsXrwxppEH8uXKEDtupKSjG12PLbwqXLDDDQQb512JUn67v1UzLwELRuHm814e",
  "key31": "42EKPNhb91N3Eo8XeJawqbuJFU9C5dovS7oHpP7ibbnFt6n9wK9nFmvbzmdS1tCEfxAEuALhcu2aoSkru5sAk2fH",
  "key32": "3VAy1PAwxf4BJsjwVPMxpUt1x1tmjhRuNTzikAipKSWZeDPZgxQQ73oJ46Evf6ZFMJx6v4Be6WCZ4LAnFyJjPWYE",
  "key33": "5XddsVTHLxKNs63EEFhkrGmnFc5ZCZG35wYRTdUvrGfEoqCT3ke6PjPnrGLo9wQ3JMoTKqg6X5CZjZBxQjkTf9x4",
  "key34": "4F4uT7GnCemvbhf1h6ghLp2frDfB4PVdhGbV8Yr9qoqX23iA9E7qZYNSc3S7L95HD7QKo4Gsu1kFqWyBHptEhCe2"
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
