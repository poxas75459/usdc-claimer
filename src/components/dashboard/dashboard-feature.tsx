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
    "58AeuWN6GpF32Z9bsTapZ3PT8TuQ2N7n9iadagFTCWqXzMR57Xtaqs3qApeZ26nD5kzfzohmL9ZbLF3tSS7fqhjB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g1qcqH2quA2GpvWWF9FxzmPyLPitDc5n5JPwbFxpBGJCMZbuZnPHJSnGtojRpnviM4DJLKef1jst6rCTZcH7yw4",
  "key1": "Vcb4PT8RfsHmbEHamHXfgzy8CncCfCkoRTbg7XBSUG5qX1u3TdaJccpvCjVq8ndV4AYNzrfJhAFEY6zkrJhXL4W",
  "key2": "3usosgNuVbGGPhLNNT8qEFkwV2HmwueGfA2kuciko4zitMiMkaa4dHSFHYK47h2o3KcSbDzMsvkySkCpDirEv8AL",
  "key3": "4nWZkhUq2T7eck9mX7pTJ8KDEP2CnvKYmvzSQZXqVsnevKko7gVC8rhwJzgWRmPC3w6wAKtQ4wxi6uYchign2hpJ",
  "key4": "3qn4XBPExKpQ52qDrdW8FHeP4tT9DN2PRaUTUgiuudakJGWFahurbasMRvREjCFcfg2b5gmHErbcegi8rLQaBBoA",
  "key5": "tEZRzgVQ8KuzpMfPku4A5zjMoqDAR5NMi6uDSfD824cmH3vrzMXXzZG76zr26oVGy6pHzT6KVno9H2ZPaphtU5x",
  "key6": "WhyENXgfcVSGAKyfTbh8apNm1R8Tv2aFvEMPEoWGAZHQBbnuhRyqFYwe6rNJvumfJdM8sZhTVWPcRrqDcQMimke",
  "key7": "48RFS7evDuwCQKoS1MCuTLjdKBkY8f1zM8SiVUjeUheNigLfsxQsEevjRgnd75Q5tjRcHrt9UfWFuiwgNmKV6w1G",
  "key8": "3XeTHc4tPkLDLpqM8zvg9rUuQkSsMuabChBECEk2ArycVrg7NQrEY4PrpTKrbRhiQqSaohLk4x2QZUQCBhbTqmfT",
  "key9": "Hx37KX8AEc5qGztDMpLr86wstxZhXcBunu8ZLnqcGYqVEaM6dwnvR8FgvcS1sBp7TsLvWpraR11fEvVQxYBAJzL",
  "key10": "3x5yhMrJ8aXEQuN3EqeD7TRHv6r7vVDAUTPWYwKvwjWzYjb2u71aqCaJDQMweNRwCqKTDxEQ9LcpXEnuxXkGgTq2",
  "key11": "z18DihxXgouWkGxmiA6uNrL6ir2P8RVYimDJ19BTSbiz4tPi7cUVCH2hL1N7Xrg92MMkEbxxBgiUTuuKE5u1HJh",
  "key12": "63d2u7weetJ3QZRAyH1mJ5SJWwiEB9ou6ZyTjQhqc4gVDsFaW3dFgP3BVPbi6cNooobUCNmUVso3PqDkB18MhyXA",
  "key13": "24hF3vW35eA2uheoghwP8u3CSD3kTcxNeGBgXBX5RaRykxB7JdHYJDGLAb3QyiwWPSWfgnyktWNiZDLVBu4FKvq2",
  "key14": "633kxWDMnuTDJySTtQFH6Wa7xBFyywmvVt1zFGvH3HxaCxcf3ydPa8arHgVAKCk6o5xy92wsZMCTXn5AswNTUdD6",
  "key15": "RFHMpEfT8ftx1mv5aUw7chkRN2VMvjSS7msNWKsdhydufyNnqwQ3UFmYRUpErm5k4gMFngWT7yVHUgGQMb2j2FD",
  "key16": "2vwYN4j58infeyzEocrAkDw632tpRoNi9c6YePGRiWi62BRY2Awxf57LsSsYexG6wtqhvTBrT23zQfRocX1bwmZ5",
  "key17": "3BETwFShmfMkASKcAiELiav9FwTGyaoHnJNjitSdcMkAahs9uRjHpdfFicKCb8GXjBKGEYThKPw9bXDc1JJwzBV5",
  "key18": "3uxpf46k2LhVbSNrLiJvjMxQ1aPBQhTs9g3J4kJcLnD5gHoGpU26fa4BnbCRRPMdoLMUxkvsCsP7UocPMN4Y84zQ",
  "key19": "3bZeeVs3WsbuE1C6Udr6kjdVtXpd3EWEDAG2Zs5cethckUz87gGFNevkhDCf92MrBnhpEQrkXNXq6CeinT8LhMgr",
  "key20": "2ThReT62pmSoBbibUp7BQjjPF9ZhHwpx113Ad7LapxdBM5FjAhhiVdEbDzWtEq2SUgE6gMU5m85jwAwB9rZsE2Le",
  "key21": "YnWhsK6fvPbvpq2z4o1vfJvL3DnAib56VfwLC8X4zbso1ZgjPNMpuQSdQk1MD1BfrNYKB3jD22aYdmfE5nkEjbo",
  "key22": "32VyHnfKCiArGBdNzhEa1EGEdBHz76uMZwR88uwQRxzQ3DdaB5j38LPV2Qynk8sLT1tQN5xWztVup2VeGT8qivwQ",
  "key23": "36s5fmQiuAg4kHx1vC9CUVCGNGksvzvLgAbTXCXpuXBhDw5JY3ujWcraSDBNq8C7T6hjH8c5rTwxkqS6nie9chJ",
  "key24": "2A4CTof5mKyhjWguCSd2aSkWn7UBZLXzx2RuEebhKTxwgnqH4QEnNbmW5S1miy6PjAYKnXt8owURmQK5PSza7CXN",
  "key25": "T87WJyLVZzQJ8pY1ozzKPeHxKLnrNHF4K3TwikF21ygiBTRRm6cbBufdzhGfLFvuCxcnxWAQ479DADiUq8Qv2cC",
  "key26": "4LZURxREn7QSnFMfJxsPEQar72YihskERWkJFhYXGx8r6qZRgeB8r54cLTNqxcm25zuJjwjosvMyNMYfpksPBQhj",
  "key27": "2LKP8qALKSZEKvtL4ektqG7jWcnJLcJ56DxZ7JEEB5qnpgt9EWdpPWdT6BcnTqYQoPdqQ11WWQaCaaAJRnVCm5pT",
  "key28": "5v1A85KZqeXtogHRxhGwg9TRbQ7peNFBw6rFJQCTHrobxztRB6zZWHnA1TGwQkyZ1bk56nscaYtkyR2K8ESBJXAq",
  "key29": "V5C1fh5nsLS5K6XVeZ95sS9RAebZBk1NVNR8MjU5ynGrma9WMKqCEX73fyDvbmZjNVxb8q63gpbuegVh7JBx28C",
  "key30": "3F5hJrwc7wAApDpAKkUd3JGJ2G4rJv9bHsMzGAwZmEY8zDPk2aJKk5Kq5DacqPgw4HZnQW6GytD9obueUVNkvrxG",
  "key31": "2GYdY1HLACXhLwaErJ63VAkunQ26WCg7HxJFwAC3CWJCPspHsDcNkVDjgnKzPUrK1DiviRyET335LBJRbfrSCpN9",
  "key32": "2Ta3kNBGgUnx2zW3rmswr74SBH2kw8WWdWxxaDSp8nySrckidRxKKecXM7poypyYZYGQ7gvyTfj3AbAZM3bSBwta",
  "key33": "2a6sPTNgJXNsgEggm2DpeY91kPvXdWT2PAyF34HbNmfv6kTm43L9xG47v73WUqzfGzLnnqeNsLJoC1zsK6CqGPgf",
  "key34": "3M63bufFmeEtmZo75inTr33ky6EyYktPokdmq8QU5gay8LyTRAzEV32nEkjHkLz582AdmtLao8pQe6pdKgPXdQGx",
  "key35": "5rcPwHXMeSeT14pBk1D5UtS2wDDGSBgDnCPuitQNJY5aFsovvjto7QW6mKMZYcsxeE8ffnk4jePMi4MhMWXTXe9m",
  "key36": "4vBj6LJNRTadsk4qeqikQmqrMTBWVkSnFb64F9U3z7UyGobRQ8cY3hJ6RFBXz7DKgsmFdWtM2x2d1xSrRr6jCEXL",
  "key37": "4kvWPrSmz4UL7Ug6QyDEajKcEp51A4AzR5ax5u2MT9qRwf4F6WiSzcPG97LGXxCLijUH6tgtBG7k8sDiGzCihZKq",
  "key38": "B5727rg5fjAV1t6vE1h4c8fUWtA9nH4iiYAzdM99EvaEizpySiB8TCNSkYpe3qYoNMRfTihCeQMa94uEMeXnVMa",
  "key39": "3ipAt6yWctrHCDgiAhCjTLLWH46oBBxPMCt3uHZfinBpe2WdEhRy831v4qVEcnD3fMCusWyXTg7PUBmP5Gu6JgfC",
  "key40": "4oCQRrbfTFf4uwnCGB27u6PXLMDaiskdCkLJUmwjHV2UWv7zT2Sdn5ZFyfuCJ51dVibvvqYLPDo2dqUanHggtjRP",
  "key41": "cwxgoSzAanhWaVMrtJbmQ16dPfCBoysnjkanQGEQ7kPuMsub3AYVDcAwdzg3HJCqSDBNnr4RuALEJW5BXmdCFwQ",
  "key42": "4pYXECSSw43Nq6VHFDHLLKXx9NsW2aGsxqYku2JpPe2CqCU9Gy4ngKMoXkNWqvXgc2RSDPjJKbjKUFQC6UMb6Xgu",
  "key43": "ZAv5R217ueDNsaUvVLrNS2t6UThDHzqEUnSassBT1wy62ibWtNBsZATNtSKNzZLTuAKFSHWNfkMq2fpA2dTrk7X",
  "key44": "2oEZ1ZYVMc9oEAEzaQpgDgJUdf2ipnz8KUQsn3ED9sDZn7rGzazq45WbWnNgU9faUesTXNZtrby29PRDHhyrxNqZ",
  "key45": "4LCAytnUZGSSBoidYdvBCG2DHaZc8tdb7zjoJSQPBV6ker97FZNoiNWXT5QK4Yq4BUrgiXAUBD5r8WkWN1txrGiK",
  "key46": "486tvGDcVtKi4sf2tXusC6rwkq3KuDN6RbLx5XLKTrgxAvnKeRTTDzaEcuZwiZANxzhNHvx9gdjtQLNho39FDoL4",
  "key47": "38boDU6geTEcjhsg5GWNzE2hFd5V8Nu3aJC3gUnwmFhasu1cCKfPe8HunY4exKpHN9MKeTmeGAvbp8um3HqdpNWX",
  "key48": "4oc6LnLb2w1quUANaB8sWHfE2tf4oXZE2wv8Eyc9KxuN6pL5wrFoTyFhuJYJF4QiD7D4xSpeaWYbM5WCEUwrhxsd",
  "key49": "37AzzfKLAkWJqoZNorq7Ygg5a65NiMoQWwVbtThCKLbUnRVMB3mJb9FN8ydGckSAXRLW3a6DTXDPXC7FrRq8BoY"
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
