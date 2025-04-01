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
    "22VsWRFNrCWqWAN84mPbNtrxp8Z9ymrafHho8oLrHAi3USNvoCDhihoPMBTwQnnoTtMS6KyN3VbjjegqTtiHmus3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YUug2etG3fX7uV9MuXDPzmkfyTkB4JrSRDmLqBUXcbWdGykeGkdiXS8t7Dj763XmjRPAFQvU8g6H9MurF3wAhch",
  "key1": "xr4g8o6GX2iAZ9ZK72uZe4npZGPCBDPSiHjmASSoEXgvgeo9iQS81Gw5Pp21FYmNfNRWrfyRoQeCa5HTqQt9Byt",
  "key2": "4GXaobEbqBxzxsJzj7B6c7aUs5WvU1pGiV7tRtToaPosH1cEFr3K7Lsg499MGqi9nQspmWzefjk9ebYErCPvbe6f",
  "key3": "4gUrdmTGEa2Uzyb5fiXnG1u7khrVwsT8wGHu1pXKq4mQMMyXwNpryZn5te3gvJ1hFqhFhnD5Rwk6ULfau6CSQ8gK",
  "key4": "59qyvWhLR1SWcHj6TCVKnFUDgn4PemKyomgPLV5ZR69BbaN1Sgwfi7szh4n1anpxdMcUbHsz9LfpikTtBbkMCTau",
  "key5": "5XDPgkT9JLV2vPcVarsyGqqFUHD5bwVVqW2rzdsLe37uFBPRa7MiyLbzyFHmfjFfUwQQneqQBxrvW1NmXjKv29am",
  "key6": "25Pf8HgHbvhXeGRM4dRD2gwXdTKVfpQVmPhywwsLaFrFSsopBDk8tadiEGFjbHtGetQvv5WUmqErv7c7nepsAxjx",
  "key7": "3xJe7RAJdJtCWG61u1NXuXAEnEt94EHEj6biSsnntzCrbytMzVKSnriMr5CCD4X4ampad6sp42mvXRe2dgYJ1FSy",
  "key8": "41qLSCFGwcMvJUdL8GpNj77NzeRarPVnUzmBdNvZ1UvfEDqFCEUMPG4Ump9z5EYAeuFdB7nMDQAAyntHbo95qx15",
  "key9": "539yzA1QSoQxD8MWcMswtg7A1Snj3gE5d9CUAY5ePsizP5iArs3VW5ym9TxQtgqrgdQDHLVqWsEu8wpkLhvkn6KK",
  "key10": "PVrRn5inyBc868TW3Q6xj4oyRheWkN7xXp9VXpgxjqoPWxyxtoqK6mVDK3PHw54z4ZvTUwoKwTt63Nwe58vgYMq",
  "key11": "RkLXTf6mmk9upVeMUmHY2mhQokQjLy61Hb4b6Hk4zf2827e77yBpkjiuPdiciZV6CBEp3UcrjBZ389W1789mBVX",
  "key12": "3drefPmMoV65hXvKDDq5y3RjWyfpQRgagFYr83UKMgBFTCd9sUtugXwfbkhjCSC3ts2DJChWivBcnSC5naTR76pq",
  "key13": "2KvrFHJvK2kHWABXrtFUcu7NPGEfTM2r6qYy9tBVmffWrZtPDhybpm74PJu9gBacJZVZz99MF6ywcTbaCHr9ZcUm",
  "key14": "2XiuW1noTSF5u6YEvmoJLirqjAwM2t2LcbsqSdaELSY7WRUrX2avDpYrzXo6CdZSK64Fig5BJDdQ3edPfPYcDv55",
  "key15": "5Coc73GPCnRy9RyWpFfZ8VLXthEyngL2DHqZQ6ihwfUt2E5LuE2xRfLxQyxYe5ep4bjzFFzdBue5XuMrUQyxtsC",
  "key16": "VGCeKySDUfL8o9PPZArsVGxSxtYJP5b76fe1iARusgMwZgD7GEQfecw3DAAZfe6z6EmUeau85ecv5o1R9vS8kMW",
  "key17": "kuaAKiweaZMCJaGAS48EwNGxX91wKqCtECiRcdEyrU8mJ6jTPBXBtzTiiTBKzaXV9yUHw6ryAhMyrhCBqp2UnwW",
  "key18": "4YwvG1kPivJJ1KD7YMU6tNu3fcBfpdzoF1i8W5dw9shtSQfJFJVJTieLnDNfub4mtBbKQndgBsvQhCvmSYKMNRH8",
  "key19": "2VpUXZtVXH9HCVhiGPjZftMjhyQMo9HRZFyingxCtNVrCT7Z9kHFvMZnoJCbmSgcdeVEUSJ1j5HwwabPYJJpdke7",
  "key20": "2cKp1bDdQPQTBQDqua9J1JvnGUHqpm7smHwrqmdCXuJ5vzq64SZxXoazrM9FLdnPKwpq6hPt5DTUNRMn5Yb8LkVZ",
  "key21": "XHxkKQuSPguYJoPtdNtgUWD8jSxZnBw1MDXaDQUZNxXHpnbPdnGZKJFK411yhAtnZFrRx2fPViKsdttaX6To8h5",
  "key22": "ch8z7htypL8QZaFsMa44bHTJAsRrgaG6eSFX24MWGC5EDRYj9kaYaNmWBLkdZtfMFg1xUEHpE6Tm4tJwRdsLCnw",
  "key23": "XRMAgV53UtJbypfFLUuNzdUWiiWW1ashpWyZBsETEZ3XH8Qq2ZfQxganYzpiYPDCMgAMLcLLwnZMWSSYUQKw1kj",
  "key24": "4vfzdyHYaC72kTLFbqRjaVhx4gDj8KyyMitWyUdSVFhNyciJh5GULMjHT2GLa26pvjn6ARsDPPNxJb2UPGiaEnGC",
  "key25": "5Z5PgqojfSyVpCSRZ5XksfKjifgqxoTff7QuBSFWLTLRZFBuUCjzaFkGjeiu1dRv4AhcibQ5zKoAWX1M4jHLHvWB",
  "key26": "3i8UHryiExXsL378tRZ749RhFHTQ9zNKN1rNFzXwsXF45XnjNQ9mQpYASDBskLtMsenCXfgN2RjE2vXCk4hBsv7J",
  "key27": "4GcxAMz97abHwYn4L8MF4KAyhCwAvNQcGry5FT5ATvCbay8ru5Xjta4ccNm6ZCkmWqRB2zykuGdwiupCc2KsE5HJ",
  "key28": "5UhHLZ3F4YNrtbE8CxG3NjpmtBsRo7QnejzVoUx1gZU3vfAfocRxJmiQ4JeXoi5gWHQAyknZYkdJEFuV7gjkzpgT",
  "key29": "3DTvwdYbNMKuhYuFWZwRJaptAMouRdcGns3hf1cKZhmom9ZJcFzzsf4s6Jh9xZbFseHHS4yD1wRZvtTAzzD314hZ",
  "key30": "apEWrHagVVcFP2Qa4w92ZrAtVo3dVpPjUipCpsbNEtjd4tR8iLDWy71h3wU8NL3JGMLQmSCtkbgMXD9RpAXwWKi",
  "key31": "4h2J39vG2CftymQJu9zGYCdZLZRVkmTcoPFXGxnXFQSqaMybJNStA286UFTexD7a7fuUjosWwCSmTrTjnvCqqe5p",
  "key32": "rTtDhi6swHN2rq2dFChCsqMnJCcFW1fZv36rs1mc46EXJcJaS2ADK8grvoAcXQWHZ6vvWiWqmsj9CxqUPJAYjgb",
  "key33": "35z2LHrijHunL6a1rYYZ4RWri17ca8swWs3fxY4YAgtSwVp2dSwewo3xD3xoUv72tmYhtSom7EkK3nhkuMvDdrpp",
  "key34": "2xzU3zixhJj6dRVUzzdfby51mS5yKXFXsUaCpttnkBwPZffmvdhuKmhTDo1rgQKavG53j57TYt5LsV8CyeXq4w3J",
  "key35": "2wQRYhXrueGv6cmnrvZB2QtR5uHEZ5PhXaYBYceMNS1cMYHcPAi6FDJ5biorpGAgkDpASDvWF5hQm2mwUzDc3wxt",
  "key36": "2nktMP3HzHzWoDyFqS7U9v1oN6MeHxVTJ3HbYHsfY1LHsLzy5ZgW41NwGSzEjDDssTRynQtBFc9f76qEeuET5KxG",
  "key37": "5hokANN8tcSnyxFXWd2cv6mvBEkL3WZ3xNxeF5gXibcyYaTg1T8SuRsVkpSK8VMJzwdLgvX9xkLbeiGiZUp2Ucu9",
  "key38": "5hnjPZCC5YXJEfFgqPUK2pKUuB94jVeWg4c3K8v2gG6okFWZtFYp7j9dDYKXwXGK1vaMNMKXT3iWPjeoFxp4YHW3",
  "key39": "3BFCNNmczj1oEEnANpMtaX92rPZfpdvMoyctCmn9WC4bCA4UPsBmvXo8a4jg1GTrdajbqQ1TVwf3HXN6fwGasKLF",
  "key40": "49ELsgqbJK17ZEXU11jAnjsG3sR349AiMAAtB2DQKzdq1rEcDCW2v2QJc6YWFf3b6asAcvcXvu1iuQiaidooEkGG",
  "key41": "3ag3aJMM92egvoUphoNVtKFLQxauS4MbawQSKoYbFwLmykH5u3dw5EcVjoscvQnXLEz9NjBtbq2agdx695Li8rUh",
  "key42": "5u5CczKyzPWLXGrX6G5ATABBnuwxXkF9tyMYoj45bJAmcJxBk2QcVoy3R3frsjCBo151QmCmYFwfiZ68cdT4Buf2",
  "key43": "5K3tDecAnxQ8vRHzAN5L3ykkqPpVtPTk87GTLdDYyf72SdUahEayrQWpPguhUmLdgWEFCgPs6uPwFh3983LKbuhr",
  "key44": "ZifV4p6a5BMq5dnWDuaAGTdN9B1ryHZH4FtNWUrGbXSYiCccrNz49QfHDPpXxfMccdQoEZaMY2L4TQ6LNRPkeq3"
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
