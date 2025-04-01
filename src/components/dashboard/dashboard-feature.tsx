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
    "4Wpo2GzYybmmwwHTw12DsYCfgSis66tKv47ue4x6z2Fpn3JbLMqXiukdqY9AnVGiXgQ4xUDZJgnqeR4FZpw9h9rb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MuotJPaey73VSMpbcVQ7HBiyb2CyzBayWbN4Tx3nJrtRgYEjsCAVeSx4PTiPU7f7msAh7h48xvK1KQ1484QWQmM",
  "key1": "26dWqPGcwAHhydP1z8YvRTEQ9ZqkTRn5YDSGo7vje6gjnV1vrDrM3ug36TNMytrYrVSH5Y8EHNrWcXDrtHQLg3uN",
  "key2": "5HCwzs9k656FP5TMuR4Sgvd2TrXFEFW7iaEX3HApgp9ey11Kwmq3GpuRykShgb7KfEoBoWrLjuZ8MczCeYFABXcJ",
  "key3": "4zNtseVvEH4TM2r137DSeKuqdKvTNtUsfCaCEaThUjTYwJUBBaQvLbfDqJG18qHiBNCRmFk4ffbTByjQoaC2ET1V",
  "key4": "5JWd2CzS4YjT7GTSdePUYAk5HrR5y4xp9NGejxkrtrCk7LRxNr3hqiJ6D6LGYpLySXsLpRngJnSxhpJKerVc2Q1R",
  "key5": "EGtwYqUhG5fJ1phryXf8jattHBe4qaTmR45JQz5nj64k8yjaUFSWYSYCAf9fe4qpjYgyiyF7MFQDmztSyjZJbSj",
  "key6": "4VyUui1oa6v9s9cduCA3EquiXE5g5WTdMrb3W2RtybNPYLQtSJoarMWMoQh5TcPLtWxqo9Vk8Wb2UEB1z3r69jHK",
  "key7": "2dva95fFdubYTeqeCzsVuHsBoM7qzYCifBn7Yre2M7DpDRHWDjTEz1pZ9n3eKAMwnAsby53qvorD3SAPhqhow8Kw",
  "key8": "kosnQ7yLf25HfMtoinoZJkQtJyuwt7UqvxX5RnMV96b6BZ4CGDmtn6o9ipGx9n1ozycUbLPoUYNt1FjMW7MiVbR",
  "key9": "5UDqhH9NcNuVani1jGSdfsdeYaSLFw8m46ieswQ1Zte6wkWSMs1accN1ZZHivJkfXMeCcN79YbynwBwrc9ZxPBAV",
  "key10": "22EkfbptnHTm5PCcC2cxe482ZKBSLQZ6c7CHRQACsWy6aQCetDdx75a8iNbx8nVMvDobD1z1y6v4ugNcH7TPYn58",
  "key11": "53ejwwNcwgARqutQLQFscCgNpzk96qusmXcv3DaU4CJGG26j9J7yPZkuk9aTYDHr81nK9mxTSFNYPtWgGcyhxukq",
  "key12": "5VaEPuuizyfcJSVQwzSxLN2r7oHJddQR1B2tD6sMZ8W4MzANimMKbQz5vSK1d15VcHRxG49YYCxsHgwUJgtyqKdo",
  "key13": "3PQaKjmKVkSySsW79cLCjRpnowrHAfnGpopi7mBQQ24sfCeqnp19TSfofDkEmT645eUeiC772zYXB8sW5Ub3JRKD",
  "key14": "4PR7z94fK8nuYjhVjKQ3A1go4mnwzt4dDRgneGuzSYz69pmDvqULxjSQrRc3seNRvQRtmVCL5JHAhP7rsu6czgC1",
  "key15": "5Q6EJ5MhqbnCjaqVf71iy8AQEsoE6yCDMhrbDGmLYCzgnKrA4UNGTWd8nZdN83Y6p4RG76QXqjTsR7kShHAuQKNY",
  "key16": "jQtob8Mhapvdxj33AFqNPjLZ7j86zg3Dkj42nzWrs64CE1mQjzqhFVPFNL3XfnnvkEEbCE131MMAg9fh3kBLneT",
  "key17": "4go68gPNopHduyZmqNuzqeiWHuhGESGomR4H6PXuiLezK8cYgDqx8cEcsNPU5w2dV194LVHHCVvYKiktaF8hU8ru",
  "key18": "dqJCe1gCZDmzSzA5xo5rpX9ueZEhAToaocwTgHCEVWY2R9vE4TSbHj4PGZZ1EeDLBu8zXCa4R4k5H6pgWWFWkHR",
  "key19": "3ZWKQgxHnQp8mQcUux8yboHTDWdEUM2UToED1SKmjNRCZge5Dc9qQFpqEXR2wjoiKe8HqCRJGtBwAGNcC48yzdJV",
  "key20": "Puhp3fr3cf6Uuz7Vb41Vbwmr7hAF39F3Fa1nEJqr7jQaqKw7wBQ8kUzvEnbA6neF71fhE4vUGFCgsyCyPbjJAHT",
  "key21": "5tArew6MexN5B5wjH5uyfdeHzHDRMWkfY8YdF2MVmcfmBckkhvPmiznAJBHYmEXGL9bnb3jCqCKfapnwXtwcfixK",
  "key22": "5hHmmCPfy8inqV8g4MZfjiFtidxsibGVG4ULBBPAHGTmUG2cTsPaprgLUTedmqCQ4eHhd8sFpe5WQJ46gLFo5vuT",
  "key23": "5DhpcBu6fQmToRW2NJbr3vcd5ZVrpWWS91w6P5dY2Ed6czqLH1PD8p3cCcsgcyYGiYxxDUNcCPdV1DWaKTpiaMUG",
  "key24": "5m1WQyBTPGcfqxHNx4XeL84zRLuVN2u16ETZqPa9QDMiNDAaRtfR1Z1rhYfmPAsweZR5UmzPvpumAKYE2QGJWWR7",
  "key25": "5mvg3JSbDWFKrzZMi8hFRsH4DyTyT1bu6DPAzDkD24MA57UuPNTGqJdJoSGJDPsGwPCQTwr5QWWZWQs9azMyrWgv",
  "key26": "4pHBYbahXgxTwXERuGHzEaBkpz8UbULR7oCrdvkE7j1uJsG1A1DMouv2AhFA7uKQf7mhBu3hFcZCnYXsCuD5GXTk",
  "key27": "6VTYJ3vkKVJpC8CiXNTCWFhdVVizzQBxCyFkxtkCXWT2y9bqt1vfickEre3kMFnmtba2p5vXfpyD46erpjVGnNW",
  "key28": "JzX3sPsfkQWccKS1eBa62Gn31RDyoSi54PqQCHT7LQ5EwiL37zko2Vjzacm1PGSjvib8wiVjgseURrajwAxJkgW",
  "key29": "2FGbHVg5a5Xt8DioFCQr46rUU11ZWQFYFz8fXn5EaEkKKKsGQnGK229A378oEG4U6fAEcA3YjiESRP21GJDGGuLe",
  "key30": "PBkiM4TuLTv5KqEzXj2KNYqPzMt6FiYrJse2kGVmRsFtoGQ3vEmzjvs2VZkdTBp9tSTiA18JCXLWhtbDuq9cLcz",
  "key31": "4VJR3aGV1qwCbkTKtNmh7pyxmdVFSSZiJGYfKsB6atsJ8A1eSYR6eKVBXN6yZe7CkNStnKSSuYK5n48Tbvk743V4",
  "key32": "49LRvDMChyWDmDw6Dyw3mvvQGFgogcTgYNDHUGJq18pstqHS2x5qb4iamBLd8rvPfa5kQGuygWRznyVSHGJPxmDv",
  "key33": "J9ciM2fkvgpmFocVQXYfCUGwaf4jFHFn9LMXZ1WQHEDSCc5DfxjasPwTJTt2e9d9eVzFBB8QDvwyD9GuZYaduCD",
  "key34": "3ePyBdnWLYmx4unmz1Hb1kFsFeVJnaqRijmbTPVcr5gyJpGZEysLuw34y9dBkVr5q7gZkuHNhipa3EDFs3pEnSPS"
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
