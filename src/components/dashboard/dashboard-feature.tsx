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
    "LvfUYLm5rHe6aroDJ3yVszoexGHCff1ivgMewhSXXR7voKGGgq9aLz6Lq4GQsCpCpZvCL3b9ohp94yPZ7Mn6Fmn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22aNLFQvgXBirpJ4VJcKM8LtFziidUws2guKhDX1LtMfiRStohmXsHdfXLmNufvK68WRLaBTAbzNfJbK11ujUjx9",
  "key1": "ttqXEmaFLjniJaW922otZutdXeMfPGQFA43Carr4a1RncHJL1jceu4KNwsatKHF3HL3Pkuc9WatNnCo2dTbfQHb",
  "key2": "3br4pKhJrD3UM2SpzqZ98Qt82TPZSxbHt1xx2sjkVC4hbZRNpro12ZNVdg9y2wf4KEWCvSKzjCCSmhmcRgHk1p5",
  "key3": "3Eb6byRd5MKkHUiudKzGJMJX1rFTVMp3g5wn7Fv1TNvWfuAYX4ZMtrMxP5gz3wBrv2WaBbYGHwGzN3UwUEMWj42z",
  "key4": "5bDQPYL16k6HXc6U2x86xDGmjzM2jc5y8QTNCRqaNVhNMauwN4USQ2mu6gNk8XSoCX7ggKVdch3uKuSFiT5VLz4s",
  "key5": "4KaWDB4uEWVeE2zDihWkCUbp1cuGua8T5tf19ngAmq8NvFHFoEkEL3SvTPEXiqhuytd3LaPM24TBJERZ7HVpLoEh",
  "key6": "tDUwmdTSXFgxBd4SpkER5KfwuRAuvahLbVKVbuAARPfWuNRW3k4NtUrgK8fdvwFi4oXf7W5dob9JQUQ6oHDnwsd",
  "key7": "34CXZamYjgHmmJhPSAaUSGonTBiBS28KjvoUwMpSbs6zb362qUVgj2d6utMDRJeFZmX3hKcdskHzkvQ36R1SfYSH",
  "key8": "4AwZU9ZgTMeUJtVGRk693LUr5TRjm21hDUcRJqsE5p5Dq1oWHQfhW2mH2WudMLyS4U2cfoaMAudDEnZRnL2VrVUt",
  "key9": "4VQDKjQ5WYAA8WWRf1Ns6nvzfGo79A62sBWydJm5TZmcXezNz5YScAGmmr3S8EcfNB7DfbuQH7dQmPUWGETcufBU",
  "key10": "58BswSSPAXfEtV8mK5rFARcrqTB39M7kEuJ4H5StggjioaAQ9UX1fNMCgLG7aUVPCTuiUv1hFpq318K6qgSVTZuv",
  "key11": "21NbWz2zphoAuJBHozpM7HBWsRjc7LBzMj56x2qURuuxHbU38vDYuTiRwJyFqS2LWhLMxNCFUrfdycatL7gJ74f9",
  "key12": "du9cSTMQmdWd8KWszioRYA9FxYr4uPqoD25ra5gxdxqCe6LqPoH9wQyx6BKDoMUgxudhync89tJ14sGyLhnpjSX",
  "key13": "2qno8FQC9pxKC999aibyyYAaT42te3VPqfr8jV29xB6tQtXvHHE99ogdVRDhNrNpJ4VSkNrgGcfxh9KUMnhcrtTD",
  "key14": "soqg62PEzFaCMeUjQrYu432qFP2SpCo4BbLxEryDt8MrX9KNY8EGxbHBxhBURSF46sW7Y9WY2RUtJorJqRg9unb",
  "key15": "3DCj2xJxvM42nYyEVkh3Ntb6KJ6vn2V4i5eVmnWRsXB4ZUDNZLiXjSk1wU2pb9xUobK5rvpvoSKKmpZVEYZtToNJ",
  "key16": "X4wYscZHDN3R7wtPLd6AV8ZnXoRggLFgpCcN4SeyRuFt3VmgteChSB8zApbAbfpX7x9xa7YEzKNyoFM7ewCK5eX",
  "key17": "mGEBpER9Uxxi1u6YejwTBPTPP37gJfEUSqbFHpNFhEBDtZCrgdY1NDRe8bi6WwLWTM6DEDsryemL7t6L7Jmf8h9",
  "key18": "2WGXwia4imN3GrBj4SiYQNzQgnzQVEcqEG8fb8dEgPHeS4WTGFmVyJkJKgPULbXxxMGGxrPmgNxqTKZo5xe2HBtM",
  "key19": "2A1Ejxf5pCT1BwrXEWo1Wftzya4xM82LBxt9GuEERGgMivaQFGdTiFvzjK9eMaPSnYPoKdJYivSWfSNcLjL5Q9TB",
  "key20": "73LWrYJHoHGy1VpHxmbYkG4DDq4HywMEK1hjGZgkaJ9RUYwefkHiSer1Mr4bR9tGNQSnAd8Kx4f43Sh8WK3Cdoc",
  "key21": "2tKYX6CtXsY6y8tbCLLnEjt94EyZRE3BGVwqNqjwBm338Z1MgE2Zvv9vgUixnaSF9sdN253aPwKeeGu3ivDyabv9",
  "key22": "4nggZQm6xTccrH1gJszQCcEcbvsgHi4v1mreA13foy2MwX7tMPpnezgGaQNencefJYjQCXsP3E2nXuKEj4oVh533",
  "key23": "mzRcW7rQSoaWjxgENE3QBQDko5gNGjVQmmgXte9sDDQv4WJLwKBZobTEDa4WF1bpESkfbhGEZL3XgtdbnW1oK4M",
  "key24": "4xwo3oQv5RQoroTexth6Fd2vkPDKsfQnYdYTjjRwXr8ZTdB9Jkyoy8CHubnF8TfwcDJFdJ9nx8wtoVEFj78GX3dk",
  "key25": "5PX9XjjZ3KCLkeY9tGYmR7QaFjdDTmSeYfyDwyiE7LqTLEhRnrqBwQbvqL4bhtcigAiayvXCtFYSfMR3Ejb1w357",
  "key26": "fzdKhDTbetdkLqgXcEC9ForG4pTBDnwSt3kxM1ZexfmdDxczvD1G9W7M9Ms8QTvp51orC5B1jaSCXDy2QA8XN4M",
  "key27": "28vGvaCAGwQvZi6xPV5bb6XCoVZZ8dvNHZZV1wMUEypSKS7CiPAodPVFhYskNsAqK1UNnZT5dHY1B8ChEy1AKgZp",
  "key28": "5H2EabbceX9jw1PLHCXQVvMvDqKZXffN5heSWWckgMQSzRbANU8Hs176nsG6zEZ2kiyXXTUR6EQV7X1TzkVyW7QD",
  "key29": "3TW82qaN3Yu9dsyaFW3Hpaexe9dhRddBX6msmhKwudgWCJgJJnx4cao353xDHzEvbjrZ4vxP4hBQrZviPDBgtFEN",
  "key30": "2cqJkC2c4xNuAfThpr8ZYyayntygRoEXpx1oyEw2BxtPtaN7hyUfL21HRHpM659BfUW54ccqp9oXe4u561uaLn3x",
  "key31": "5hqgeoii8uAANYPdRAaQd2JUxC8RFHCt8M6mBZQcG3DRef4uBvDF9b8VSXZvJJhR5qqDUHPpYut39z1J4rpZfzRd",
  "key32": "iB5VQMtqJQkzhwPRXCip9JtsmdxV5cVs3YQnBUnawCUKsWvm2j3jnb43PMdrhDUFXyqFtryyL2x4N2Y9mhNitMJ",
  "key33": "8PVYtzEU7jEzZfMgof8M8eSKpg492Dt8LmsjM17QFUm3whoqpG6BQN54F4CSgKuCm9Tsi9ZTUbyk7vDKadXUTkk",
  "key34": "5cKXoQ6sX4Mw7ma3cZs9V9sg77K4fRKcizbDWTJ7CDe5dvnZd3xRrtYKue2FDSCKYvuppGNHNyGzmuXpstW9f98x",
  "key35": "4mXvJB1mhjCSztqRDsLo7SNctKxvXrUcXvqmffcZU7g37cbn6B7EY57ZepFo4FYo761geFZcjMjoDCTHpLuFQbn2",
  "key36": "28annYgY2i8oe4mp3tStaBC1GHgSpzUcKkfTSXF9kWQ9jFq1frX1p4F6zp1CGDP7K8ockT16msGu8d9GAZTVQg4u"
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
