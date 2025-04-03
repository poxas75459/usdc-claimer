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
    "5Gt3MpXLGi4huzrhYDB6Q15JYrwHEbxT6vh84YWFrLFQPfopwxrRrpC4BFPNUYpRuaKqe73wdr99PB4GkrormcMu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s2wyP6ZrLDE3gxmSaXFpxmpVSvmcYNWbzqvwkK5bFq87QhXDxj99wX8853ZRUhfZ4Wy67W6NrXVt8KUKLcfXt8W",
  "key1": "2YZ62W9c9Bvbb4FbuLZHcbXfHU3QAsLAgErzPVh8Wixzksq1egn6mrQHH6wSBEuKqfVGePQn6Ygk58E4amN9UuN1",
  "key2": "4mDNo2XBBCHpTN45Ryf8713hVwxygn5Yt8cCHTApesiaG63vURQbmPozofUask9a47GzdHzrx4D3eJLC4U67aV2M",
  "key3": "3wVr4Liibg3ecZkPViF5FsZ58fURDniLCtD9YMrYgvr4a6hJtq3HJHwix4zi1p4fmaTKX1zXj47Kk39X76TUaN5",
  "key4": "2wLfpLJ7YypVjThv2S3UCex2r52yXCBTxaKQiY15n13aSGnes8a1zEMSrUakgWNHCnFPWH8XWdP6oDZL81k3ZD4A",
  "key5": "SNHPbQT42yXEumpqrM3CJN6aDBH78FQzXjDyNBNhe3ip3FP5sXSECAHWRJhaYVUCWpyHPvDUgsKh1rSYtFgT1Md",
  "key6": "4fdWt7txx3BmX9SxZsr7R6ew5R5k8VJ3sEJm5J8ubpHdW84Ygh7QcS2LaSxYwY9NSFxaQownnzFH7k8gt3RCzamr",
  "key7": "2PVEW7HiAnj1ui8J5tKjJ687d74Nm4nJ8BoVoBwuStF7QWzEfQ1aLqQYWeRn8sD7ea49Aad16Jg3d4h8J367EsBK",
  "key8": "4QMWQKD9keRrfUS8G1X7vGFp2aPDKv8LEWsJKXQAmX5BPMb22iDNKhiwznvb8hEf96p3tnyrfTdtw7TxPkKUgbsH",
  "key9": "5FyL4A5M19BUXdQ13BNiu6eLDk8VNehN6Bcyn9yo4QQoQbUu6UoJpJZgUwY9BdG8siSmBQTTxFiMYVL2Vrnu8LwL",
  "key10": "3tQST5Jdyeh2QHRjTy7t71DxsnLUjdmEy7ozvMpT25NBuXm8sc2b678wnyzasaYaZXEDh4bA4quaA8rMN8eribKb",
  "key11": "4vXD9tCyFPGydfFKw8XQijSRSkaxNtFhhTrhGESttKWUQdA7QgYJiCL76VdEXvF6VCfqTuz8stAfmnesz8TsqJgw",
  "key12": "4gAiLb89DuYW4a5WG8xX1zrhJRe3eYau6HG4M64jRXSAdp71fG9RhSn5S54Amp8FByvDs2EYFXCvfPYv5G9hrx4r",
  "key13": "3KbuPSZjrvE5kaMPqiMryGHnA7sdozBEoCVpQsMhLUFbErazMBmRt2sCqoxGJd4a1mwSTiQ4jA3ZH8r7Pi5omMdh",
  "key14": "4rbXJbYJqQWrU6AfnoQQknX49HKHTMWfYPS55uT1FecjvoGC7ZRTMPNkXuVYnLpq4gzojccGoXkz99jJEo1mko65",
  "key15": "zvzTu1uU4LFHxnnDH5boH7BCmstUWkGQRHxcdmGZnhLe8J87HgxZQfXr726Sv3hzcXnMSyeeFXRaU4GFJzTskhE",
  "key16": "3Uebcki3qx6ZagbED91tfHyr3KDzQ7Y7w6jgkuwxe1qTJftfJfaxX79h1VjBbAfXumA5gjnX7PZgHfiWzjHV9eaf",
  "key17": "4TYS5yH7uUxutr4UbG9EXe9i1sDe9QpiFEkCq3W6iPfjQ5zdzzxD3iZRCYQadoT9wiZbU6h7qAZTaSMY7xZe3mKt",
  "key18": "rtXX3P174eKfQ2U2jGTRs14jT6gXDEBCBbSjS1nVwQUWLBYyV9j9o7eogedc4np4DEeNksj22qF25Mp5RKc7T1Z",
  "key19": "42wDAmsS4SKb77fgLBXFZWCUKfe3ykrb6UcwjtT1jEigmcuj6zRcxn2dEDvgHhKi2AvEVmjwL9z6vVa6qwKoGh7z",
  "key20": "2LXvisC9fX5mMS4i8Xf85X31FiVskaVG5AkzdzRBdhAQw1U2K6X6otcwugpKrdUwHnxAZUxXdeVEwcyawtfyeFzm",
  "key21": "4dGfyyFCntPX5VmmrGawm3EbvVqg7xu9BeKbc4Rc35aY28djC3p8h2ZDDaMv41KpbhDXCcCENXu63Zw6zHLLWCh8",
  "key22": "3QqwwTaYtYRAh7UMKstx52MyMbcwKytRVi3JhkqMBtLYkQNE3bupYvhTmzRZSzq88LVzti4usLBMcaTBHzwbX9Vj",
  "key23": "35ZEZsz697nhmDyNrNjoHBnC31nGXeatcchHg3TtQmTckwZwjoMANaMPdtD16cjEDRgYxGrUcaLKedb3jadfZswp",
  "key24": "4qA1HRASYCumAvFyrTc6g3PtBs56FX62UPn8XNP4AAmqaGUqaaDJqKXXRMZBVWGihR2AKizU1DwPrpwERwS139tK",
  "key25": "4ygQmXFsgrrR6prHfQfPB3ADvHyDXaV8DYbHrkHkRx7jLCikyda1pzicvncNMAdkdB271Sg333RDCQSNXJdcAXpB",
  "key26": "4kcbpDxFv9hgcsPXaTUnZciuCsbqNbB7gZsZrZDDyQmGDaWjHk2pt5hWUQEicYb6QKGaXqTaKsLifhTfBHNHdcsy",
  "key27": "2wXkQphteyNyRrBomUg3ExpQtxMNi3FTQbPHbjadVn2mXQTz63EdMMZsGbKCbDtWitb83rA5VaDJdiR2huEqzRmM",
  "key28": "4vMkhauM48hJ98ry4dCHQK8qzhfDjkTYWAHE3v5nYnbxQ6pYi6EBhxCKgJsQPDwqT1uQdjAY1A4XBHJgRchrMmpd",
  "key29": "4PUVwcP9vmEU3h3H7G1xRQ9qrBf7ZXsXE1NmpNLZDLqz7etmcPRgyPyKPTuXJF3LxfeXcexhBsUC8d3Q22bd3tFa",
  "key30": "2vD1CuxFsQQbuiw3me4pf71HT34pyMmoxnS9ZmAUX3Y5ui2T8AqhJoeM5tYurS5B6o6ygXYK6jUJjtcBfGumkMvx",
  "key31": "2jnpibnj1J1qMEDpDCxxdSkiTh5GPCa91Ho8D4h9fcPe3Lwoe8vNqWbfxgMniJKbS39fTC66bmCDvWUD2jsL8hyw",
  "key32": "7JbJAHxwJ1xN7ahaWe1ZJQ6HAwH4hAjqq74xUhFmuz9waMv9nVnvpSG7fmPWz2pt6n3mw4eYnafFb7DDgT8WuHS",
  "key33": "3uymu8xuvJPa46UgQtutuky8Vw8dMmBxYeWJJoAxkVY7NEC1c94fuc8nyMT7ZK8smf4zG8hhXoXLyaibinFfM2wk",
  "key34": "5vofzobdQG3QqmSvCA8q5EHZfA39FnwZtzHtn1mGNXzzZGSPX4EhyzRUK4beY4rg6MBzrnKAoeUaqXF884NxZujP",
  "key35": "5hirfZo91xt6szg5M1JC2saGVUXK9Qyt8csqqQwvArEf3g14BvsgHEgRWv5JSTws1xVYTo7RiQNfLFPCyPaiDQ3M",
  "key36": "4k8sRMPt4hq8RkHLAdJ38ZbKoLnKmmz6eQXyHwG5EZek9bHLfpYB8396S8DXTVaLhCCY5zDeJzc4tpMAi4mTEMu2",
  "key37": "4NXbCGyCboTQpLqyxyXwRPshuesigTxPhyCTt7PbKGEBZ6j9vRF6PUHS8nRtZjH74b5yvte6T6PYm4KkheiDRnwA",
  "key38": "3tDyYpEy1HvGMgXgskwyYHtEdwGGjhQnEEF52zeXpd9dyJGZWcdBf2grZ3v1SbVHnvJGS14ZpRmxPYrvV2gkSB7D",
  "key39": "44P5umAcEcdv7LFjYr6wZifcpEChFBSKJjN5dcvXZiYEJX5LScrqN9ZGkdRi9FUq5aNwvFKfVWmxSMPugdqWhaRS",
  "key40": "3AFs3nxYRLtEmb8ASrRMreo9Xfz9x7MALVQyme75g4JxF1uaX6kbP3ckxFx93XUfz54qA4v4AHF1RMD9as1AYQJN",
  "key41": "4MakwVnEyeAoCJrzm6jB5RuagNhxciADoDUAFD5RcSLteVCxnJBL4WUygHDrFUhet18CjTCfR92i1EadVPpmb3Xr",
  "key42": "2YFdVBf7PNMvdZcsApUw66v1RYg5Bu5gwhCvgGPogX84QspojcH4nLtiusiMe6MvfUGPi9FgjFXfim5WvScbojyb",
  "key43": "4hg4VcrxsUBjSQoWPAAe15p6M4YgkjtudUavEQDeE5Cy7n3Q3h8xSFvLEjTwu1sNv3ueooyNYKDYowm6nxoXSpwg",
  "key44": "4JL84xaJV3W2SurzcpPo3z2etEtcPKM1nrfb6poCKt7sQenbVZRQHsuDPcbTLcXQ1nsbDQhnbh6jAAQ8eDcfPYAw",
  "key45": "5fcmMgVoi67GR6z9RwmtqS9so6gvVxtMCpCmFCsgGppT2jfBNE5rGrDpZwm1iuRNzySB4uYWjr7t92ZPzQdpi8hu",
  "key46": "4rjEZnawqJLGa7HeBe5XBkRyruWeeGm1cs3i7ST1HZvEWsAxTMjTzdAGRrcJ3rJy9FDFeL1ZeeCZFMJ9T2NMMag3",
  "key47": "3i8NXBAkLAaPuibojnY49FZRoJEx7er89DgS7EpTdQoyi7bcfhtCVXUvaNkCyzvpD9W2ZqiPp8o8bB5rUprzHEXF",
  "key48": "n56LS6ZjPkaWpuTVHhsGo8EGCNwi2xJmEMrXFp9ynvmw74X5jyvMHg6AHCe4TYyKWjzw8M4FDhbY1TPWc8pP7cg"
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
