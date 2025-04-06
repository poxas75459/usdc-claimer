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
    "4YShwis7KR39LU1JZjTfTpL13HkENkUwAqHq2QrRt9Aks62j6RJUcGrU93NcQepbsoSXLXEb2ByZBjofhW4YcB6r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PiViAW4BkcUggxjFoPBfGB3mmrr42tkth4bAuf7trVTLCfKJavUzvtzHEnHjRoZmVTFrRssvBp9CKB5pb1rBXZ2",
  "key1": "3gLrtf72T9XtkJmJywYvCuUMjXBbXmTAQm1McZ8A6vnLFBd5WHUkzCFCG6dLK9EDH6NLUfNss6ycHveUYAbTT5q7",
  "key2": "254yChCj9msLGaZbauJvDTfKcX5m5hPbKdeXz6ZmThZyXfE2QWijKyPcwVFUky3yjtiKCx8g4cKbXFphH6mAMUmF",
  "key3": "2BE1z2ntoJLt4J24vC32zSU6x2cF5rJQqyDXPMBw3cffRn5nV63SbNXz1Ck33wSE93hH4dP46VgARZgQy2DHSXoB",
  "key4": "2ypFrivcpnhdUqHhekWNx15q5AeTsREbAZDRPWdZrfFWJkfsm8vJfC82rVpRVpKWkKkNz2ALDGreybrHmVgjkrob",
  "key5": "4dmhw6E6zaocY7VNVHsnTMBPrBHsbfXc3jrkRf59986T2vMRYHgyck8gDLeDjCukMxtr3hJSRad7d9PmG532prh4",
  "key6": "4Junh4MxFvWpUyaSJzZAnoqqgCDsPgSZBMtTNSDojnRhAaVLSjYsm7tXrb85sTt6sjHeZeucxi2JEjRsLGKKbDk",
  "key7": "2AUkE9RnxXDeweQx1Zr9Ykc3P5iKKEBxZNfPtyzLyF4eM9CwrPrYgJHTDD87AJPMCvuiFpHtDPrnyw8EEtwB5r7F",
  "key8": "2f2HGBNzW3YhRyPpSSRn6xCH7PqRZi2ECwpB588pLgf5Wvf3LUwvu99NwxWwbdgicRmoc6gA96mABeRrPugA9wwx",
  "key9": "3Y68xXCwMsavvr5FbT4ybW4hDKVoMJT8TS7F8SVZi24DCNmQWDKikx3bkdPzaZ8ofgrABFRP4QZzfYBYaRwr1Wo5",
  "key10": "5kNKPzuxU5cFFxxQbV3uoz3f4t1k3iPbqdTTU39HQfTJTosqcdpT3BqaoNJ9nN2HtW7fd79ohGpXo288NPzXxmhg",
  "key11": "2DptzU6kKPW9vLRnbj5UZGJiwYRSNgvWsiYQmYCPRtiTychcQavuPHKA36CZUUha1wMKHYaRWYnasM8oSLLKNeUK",
  "key12": "Cqr67jRZXfoTXEVKF4BhWv5wbYG4VLF9KxnBaXVcTh9EGtMLqU91hsDXKPhoyGBSt7Ex8FuknHhLuU3D9uzW3oz",
  "key13": "5E34NLWJ6aaSjfc4BhnRihMNU86SNUQU7YsxbW4h1sKyGfEn8BzfgqKW5zB8LZmgxA5XbWJtAzNVe67z1ak62o3f",
  "key14": "4A4Ypgj5WM5ayHf8nQYqMetwJGT9DD9v83wUPQzFoApJt59rMHqvW7tTCtgvfYm2sFyeccz7dmTy5mQtVaHUwSZu",
  "key15": "2xvvjKCtfeC1VVZXRiZ2Us5gZqrTXSy4R6XS8Pre4ujTcdCUM7HPvLjMYYDTkpRjMaDpominESFapDYjXJi5zvKJ",
  "key16": "2r4P7mNBhAJRKJXA3dmGfxRNpSZL45Sh85hjDsPo6FwzWfgFdiMoqkRXWiTTHE7PJyAvPzwNdgSahhDhSFUXmweT",
  "key17": "4KFnFJRE7wpspkdmMt57bTXXFry7LRQD3XMns9CX69ExJSEcYmfskuazgzyosfF7Y4ApTQ4kMoGRGSs8wm7QrAtp",
  "key18": "4LjAXWbf5e3zyMtCHZ3FxjHMB1yoBzzQjGb9HPvZ9wae6ySSexL4imQkfzQq6DRAWnCWyP8UNc3xGhRj99qwhpxm",
  "key19": "7KVFYrw9N39JchNcByHMKaei4g21BPaKLvMHci26J7zPr794kbREVfsknq8gN1PdUtdWuNdB8fKNgWK5YkZxY4a",
  "key20": "4p696JpP8FSVjy1e3vqyioX59G7GSMnp2Y6jdV63e3Y7jvtT2GWkDB6yewwb83qmYTimB5s35YHDpEZAHNr5DNMw",
  "key21": "5nFztCf2FFurmNUQGPWP4YibPqNUt7vWG8FavYTmiAXi4m2LMgFw4gjDCubjF7BQwgvAgHNQUybAReYHiU5Xp7sK",
  "key22": "K4aHjaBbxvGEGuUkd6Hc1uRYxUiGCBpDaDHuLuYbJbq5JAm6Tc1vhcu6a3koMjNFuLFYBo2X1YE2VEHV3ebDpqv",
  "key23": "24TaScduftYzh3HzZGnJrby8T4N3pny1diRTSFdsnfr4kRsiExqffpfGANmjT54jC45osz5XMcH5rna7hdpkeBQw",
  "key24": "RWnZpEJksqVduJm5VTHrcaWokwZeWmvvr9u6ZQqsFRY5inGeDKXK41FPdS7dH4BdnwmuPgairijgiJqrLt5k1Pt",
  "key25": "5GkGEN2EgXcEfnL7kbFiEcdJYghaQeVBZLnXSwtyMUvC3ZtkU3dff2Po3PNrSFcj7HxwXWvGjRe47AYJYPHRewTQ",
  "key26": "54iwAJqr4JrXLdDwiJWVK1UjDKpi9s7XYYYELVfhqxkckfSivfmjfdwTP6EPwhAoCwHjWfiBpq4gjpwxTjhQJ6x5",
  "key27": "3MsVK69HgdagnQ8HcWuLXrECB9bKRqt7CDP7pSyeGPPrnTqb6fCq4cLJVM3oowoy3qXxNZxxXVVi3g8rjph6iFFn",
  "key28": "3xjVg1xER2NBAUgCw59pQuJEqnUAKQ9dUu8dXmzH3cFDkGNG1VDB2WgcN6r1LbLduQgnDeradjftWFRuzYMdhdsG",
  "key29": "2Suhy1D69uts2jLMDBj6mbfufwYaLeS4Mknq5LXJg6DBLghDDF7qGf9bx8w5DJepxigeAVwnUy4KVmni32BcxFxD",
  "key30": "2QZeuco5HTiFbbBTGVeL5G6gj5xzx6pBA56Lkz3DB24UqPHEzcjuUwcm3FSwZzcZ983tyVpsdbHzm6EmVux589Eb",
  "key31": "Z5s1W3fTbDEJRQc7MQygYNE6kTcn9qa5gYSijwMeipfWCYbEfWs9EHar6kGPk2qVVSoyhWq3N4AQJDW2ePCLuMV",
  "key32": "4wn2mpueyW35eAkkM1U9jFkrb3G3cZPK3SS97Mm8Mfw5B5DmaXuQ1KuDyAS3RLzBpASHED4pKueyZvSYSjNY4HX4",
  "key33": "3pwz11ghKufBUcStNSRiXsQoh5hrq7qHJvmNTf51U6ZZbaB74TBJ6vCXNHWBgnGFYME9myeyDunGRCgmyR53vqEF",
  "key34": "56Vrpu1TSHCCodAeoJXN3ntWWV3JEzYQmt6T6LKZQjWixHddgkNK9eqCrUX6gMrQPPSF3ygUdk3pvLSWrZTnj6Z6",
  "key35": "4HmhNsGRCjaLaF54umeZpLPfWcdvcJ9vqhhfLa33qp9an1tCNPicXMJKmQNVFGrdMNFMrXJPyPCjkLr4SozYohx",
  "key36": "5VUwz63JPoWjuhn4vNAU7BN86KkuC5QrS9LwUJHYBZWWx6ANx9xz29Ei82fzHfxN8gSwZUACiWdLjwxygug3nbC6",
  "key37": "32VnNtmxbVy8dMivzBbVkGrnocNeUQJUmtwRBJkAzB8cpTaVmLN3SwyUh8yDjM15HfvzccYrUrQdAsXc7Qu98PmV",
  "key38": "5DH1GEh3SCCrgvzxDeVtKGMcRjKPcm8XUf6MEx3nehUprUe7TfMX92Qp2BwzbHwUjCYt5AvCeNRabqmwrPcbSe3P"
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
