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
    "wnHbAKwNBpuFTXoKS5LsbpLHAR5u8yg65umu5PXgoN99ir34e3AvyEYq7EDdteV3hUYjRdMR3veuD4tKrfktPE7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H7v7PcgjvBwuP5v19nnN7fxj1vmhmva6rxDBPzuryVr7tVK1k91XxrFBdpo8NN4HuAJRnpsz56C9oW7rhzUNFP2",
  "key1": "3sRRpmLpmCgcFpwgX7fJAHsrFWGb8NdqJGiC2PWrbr3ERSdPFtn8tHARyos1NcPAEaeNN8izKGG8c7xYAkLfa6b4",
  "key2": "2LkgZuN18hekTaz2GMbtrAvW8ipD9E3PeeTqfTWFdr3QgUpbucdbmm1DGYZD58XiUPMyyYkp7vgGHWuAZJSXaPeU",
  "key3": "Js9oPyivE6CJTUrB8yBg61TA2UJYP3h7hf8Qw7ic1mdTczyg7LoRpNoZCQUVTSDYVsCu6LmaqQWHPnUKFf7gWFh",
  "key4": "4SKErj7omsJyFGrSdK8KKXxFd4DB8UAahDcVY3TGnrjcZXE7VRmcwTPxBPZ8TkXStUc32PFihRCBVWGXdNgE8hb3",
  "key5": "3SUkaMqXK5M93ciKtiaUcbyV5AxVihdrdSbqFAaBsszyHsY1TMLM4xVGjec1uoy6Qs6NhUQfDHzxcsSp9YnTXhG6",
  "key6": "2Am8AKjaWs9egULuBRhhzUtg7YM898AuReycj9a2kka2H8V3UzxBHGKpyRrusJ11c8n1Q57TcWtM4swT6jcLtKzT",
  "key7": "49mEAsrnJoVT2d5GGm9GEYxuW88GbGY4KjF65RYAzQcNAUuepdw9dLNJ2UeLUDwf6auSsoXprihv1E7gxyU8hNFU",
  "key8": "63UEdEw7fNYPwdi4S9gM1dY2u5R5k1LQ2A3yZj42J2pEgnoi4XzdrigLzYdxmyw4BaFQtNS9x29U2rnUvoNc5yYw",
  "key9": "4jFDxaigJAVqwK6M8MFNUHEgcZwoC2DCTrgNAPbCh3FYdBCyc7YT3vEPnFcvGcCNgtzAYpL6sSNqevfLCGGikeo7",
  "key10": "5CV1HJYjSemsmkXVw7FRbBFDruEvY578woR4mfSJFmcC257JdYNNaXpY8iGajABD9wrsP2AhwqXcpjveXzBKj16w",
  "key11": "4JA7LqGuAtHvD6xd9U8TiTtbVHccshUYg2rWPLgR6N1fZfYsomTUvCtersTDh9goqeE6cNCbRRzZ76JkmMvjv3dJ",
  "key12": "3UDX7M8WiXcRrFSvDGXZji82o5KHqRvddLfVdJkSgNJfmdM4fKp4by1eVThtuLnXcmikq3b26pjAUQJvXzNk3LTw",
  "key13": "2XnsiKDNuyMxo9HScGzy2EcKbQnPQpToSDqq9SPJ8tJBE5ovCPwchYfBQN9VcKLUvi8NjH7CiK6w8pwwTJgiCAPt",
  "key14": "5FDDuxZVhbBLTDCsyuZjtSrZU8R4PpMbhA3yNpsoNf64JyLJprTR9DhBPy8bDRzfQ37qzkVxu274v3xJQeuTgkBh",
  "key15": "4AEegsBuzoEaDrbeHBAa3Q9yNdHXUN78U7GtSYJ2KwvbsPRFMBtqLDyDkcM6MqAu4by4imDbjBrGkNkVggroc2vP",
  "key16": "3FAeTSeyUPFpDGS5mUM52snyJhYLMd2i7rdbhWnKnvwnDDXp6KkceVuGZxNSivDGvmDqdQgUpks9ph9jvtYtoQYS",
  "key17": "5YJxLxs5wFK1FXpwq1N7QSLheCYEqh8LmQP27uBP3GwR5XYh5RujXSWNJ5AxZAppSGhYefaZ3g1mzZPv38k2fhMv",
  "key18": "51BEbfn19oFUvdgE2PLdGft9WBZUymRNSSGsnUYbFczNX9xHf4otxR8GKUESqmdEJYKFnKRFFEeoQFmYexfWfAU5",
  "key19": "5SSPgTG3eH8tKZbsUQhK6oSM94vxN92FYAy24cnPxs1WkPfWscmbPhsAPBidfJqEdQTvx5yVDEhiHa53TRNf97NT",
  "key20": "2shKoXrh5h1w12QHzo3ikmX6JzzGuJeq6xj3sAN8LtBNBfFhDrECXvJnsyEvQ3UXBigsQLtFbwFcPjuQ8NzKf76",
  "key21": "5oTdh5pJ9Xr9HXryVysKQMnvje8DbfAhTLLQZu5zdtipa3UxAoX1hVj41Y7Y4X4HrUr8Yu5k7J8xRAkeBxJsghbE",
  "key22": "AkoRGukq1FwByHJhvr3o4Kjq6mbmeuQW7diFbtYSjbs5oqeBD3sRMZLac8dc9TAqCV6dNiuxMweKYqhQbPpeh8w",
  "key23": "7hYnhSaF8yZdu6Yi8qJdkofpiNtSTUNmmGejuxjio1fSyEEuKPfBbcu23SBS9Y8cqGVhCn21N7JUSmjBqLBas6U",
  "key24": "o9hhtu6dx5SkqhU5jVvjauUgmRPQDZir77hKTNgyiDJhee8RUHRsTwD77AZMBstVNJkZHMoF71QrMARFwSjX55n",
  "key25": "qRUH3TTKruYLoFdax27Y2PUFHMakwJnz46skKmtaEwsdGsCbuaYZpoDLPyuL9HdZfnT7c4RJiXjp3BrdfuDzPHq",
  "key26": "63H5gaQBF8GVJRWc78rZpba791PiCEJfp2dEGk4utCuTJco3PzKbhE6KXvgpGsQs34c41MbMPdxnaSnDJgrL6SyA",
  "key27": "5htffNCYKEDVJaKW8M4T8oQPeYmnwBSzos5QKKjvywN7jkfKnCNW3CXd8HtPgv43gDntV2pKTLigiwmPrbuZtEst",
  "key28": "66neo8fppgn4bcU5poe5SGVRZhYW7uiJZvRqvHdkf1bwtFghpT8tkLeyM3CWG9WiyY2fcwWrgPDo9A6YbdDh8Jz3",
  "key29": "yFVLSduPH3mD6DHLLwPbFYdymFxWwws3ys8USdXqozMVaxAKCHV9GgGv8xHGE6mY9Vg6L24C2GhWHYHtQckYXej",
  "key30": "41ypT3HVoEwPBJmgr5f8XFanZXvV8ZRt2VCQVjkUVRuLevY5LTPm81U68sjGDvhNLjfSrXXeuwzaecNQspvUh7Hq",
  "key31": "5gHc4oX2kdNwdPDGHGtSyZm5g45fP7xKY4MRd3knEmbwnPWw2ddr3aZ71kXrhpWdCy4hCtrfYc9nxt3qv5VcoLeE",
  "key32": "5cFkRqxgvxkTU4HMNmvie2ekjy2KWPwu1kGRSeTUQJaVEqUDy2AfZKkZurGnGygsDuxzrqLcHk7U7R1JiQ6G1JNr",
  "key33": "27BbPHouXrwMLPZ7pdUYRqkQBaRoZn7bC7YQK2nFj9gyzqf3h7Yi4pcFCQ7RzevfgX1gb9DgtVWaxErzyGT6GRA8",
  "key34": "2kGhzDeLz1ZfMvM8fYkAYv7xKkyKmeZdfE9G2YmZn8BoVsYSiu8E2ARKPgpfPtKMfrzGU5x9naA57pyu62UTq2E",
  "key35": "37449LAAFfrPAVAu9ySi4SiMWroHWS7NQaWksSz9eeVdZ5hkQLqqtPk5cxyA3gXW2HTXjSiB9pSL72vtnhbuHqcR",
  "key36": "5dWyV89nJG35p9FNg3paj5JRWU9HKffCx2sexkuTGBCFPsV19D9suqLnNMWxw7CmTMqkvzzYVKg5R1Lj1WCFGTAF"
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
