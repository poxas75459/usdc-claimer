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
    "4CcU2MCnycvbsfRm9eARCQtqinKDb6j1RpYQqnX9B342Ww16FqXASCfzYnPVfomtc6TUFejMmvL6GCkUQAk1zq5y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jCxuGq99tBLpYtzz3d1vGk6HoozNAP1fz6SqSkr1Efm47dBKwjYsHQ1zg2EFdQDax62b1Gw8NNWbRkMyRcdg4e9",
  "key1": "24T6YcF4hJjshwEACzwtreH4BW7FPeeEsnfSQ7vsDjiFZvdU6ZrHfFrWXMNEdPDVE81ne5V9Js388vq18S6bVZon",
  "key2": "npwY4V55vz2LHHkYsfQNid5ugs4iqUm4QcoqLTdfXPE5vRAEodCZ4BBENVvfJRFiJHXkRm9UErFjeRr28LZ41bT",
  "key3": "32HznL2tdesgt7C3xzyknAUeTkY2EsLihHZeEe7Gv3Fi9mySnnBk13MxiisQL21RNVAxPTJ1bYHdA7CQkfAiHw4M",
  "key4": "3dysvmwqGTPtNat7HgXiNaKo1Wxw7WvEK9FhMf8TAQVzLaQrpqY4XNHDXSdX6ka8gbVW5Wf4gD4jwPtN8YiWLkwv",
  "key5": "3pgNyrV9BELfVcMtYNZqQRUEZtBQ6zN9TTFyCQuJDhQSo6dHbnVwagBgYhgiasmiNU72NR5HepZ2NbJWfssvXp8W",
  "key6": "5BrX2xEbogbxSGXuNtR6g3jewLxiDcWJvpSYc3wzR88pemJ6w8R7Tc5BLmH8TNBbkmr7eaRPK6MiCnxYrwRoYuwx",
  "key7": "5eRqvfR9ULBtsvQUnKpMLgEnWDToMfv2Q68vDazwcab6uEZYXcoRyAXrCiWRofYKsk3Zabfp28yCShX8KPmbupud",
  "key8": "EpwwxSxp5MX31KzrgF7wX9JNcpfHiTJY6sztRg3jZ9npTarSbAbNAWCXD7XeNh8kBJ4YY8aHNhDDTjwqqiERwYa",
  "key9": "2F3UdfErdwPvzkkcAEPJgozX8EYJoJjMfwjEQ7C49bikqXtGipkbPhv2t3FJqe4pXdBD1S1F8UMf3beJfPigg1cE",
  "key10": "MGfqyURxDPEDHU1wAhKztuoFEtKTvfen7A2h8Qy9yYnyQzNCuf6u2oNzJzQqoCNcdcpcFQSEmo5YKynxLCQjXda",
  "key11": "3MDsuscmSSbCrByYc9fS1mxZBQfD1EGpoXjPKEqzVibDkEXgArtwXJTuPzgXFgXqgt9dEZ2ZXYjehz8A32XfEnoT",
  "key12": "qZmV5hCgA4P5aG8GXaLw16gtbcnefxJrHLuQwvdoDHMN5ycyxk4oEqWvkZhv5Txm83gDwVpP3SHDyYgsvVRS8Cy",
  "key13": "Xcyziw2tqbq4ftaz9Tqg1szPUexpwaa1rhQDQo48FCnK8po9uz2SjwJ4oY1yQkVoXEgU8t4PGYrnaAms9sUhfnv",
  "key14": "3yxcjRXjo8MDLhdST1wDJdxKZq6tPqF1Nt9skqiso2E3ZecpdVqgzTeaLvjjEwvungMvPnDMm64c7MQLmG6iUFRM",
  "key15": "3nciiwsFEvPRksNVxNyKMdQyxMfMfgn4nxnt2EozRyRDnNtawMcQNMHo3ZywWFPsEa8hJJHxXu48YozKHKVkLvs5",
  "key16": "2CGB9sYQGeQm9NBEBh29gNL9u2Ppi9y5N5bWuJ3ZBhnxeV1dtzPNStd6F4EaCNZtts28dvpFgDxj7BQRgxVADqum",
  "key17": "5YtZSWJjs91RymukqjJKygNycwZaB1d685sW6UHuSpx127y7GErJ5eX15JxdZXf79iKQ8ByVsWgcgUf5AD5v92Pb",
  "key18": "2J3nf1NBUKQuQ8QFFnFd5KEGvrhQuj1f9hGmNE6UdiXa3SXh4fgjnfoLuAEzPzRHnBzXbVpH5YRHzfvdeYVmMsZH",
  "key19": "2UhQUZ2DpefGu9mJ7sf1pt22vfhBoAx7tGGQu1YmJvcLHjAbfKTUwzZbuP6GZDi5kKNUBAQBKDRcezKQ9uWZgMRu",
  "key20": "2T5GCjnpMFT6Fxjc1rZUWnV2wZzzX5ak89HmxcZksePYCP1UTBYUCN2mLKJ5a4CFbgWpfMuMAjxgCL9Q92Rti3Jf",
  "key21": "38Q4yYXK5wFrKr4xJgbsfhAs7HWvKUBmhkvhPQ2VP8bY9KsWFcfopcEZS4YR27zCrCsYHb5Fn45Yh6suECZkp4Xn",
  "key22": "65sviAu3ARkzGiyS8K1NZMWB6Zvp2RWoi71qrCvRW6XtxBi29f6iHPKJP9mTfomnmkzGvT5MBxjH9Yos7S9HMgxQ",
  "key23": "3ACnrSe9ch8Mxnbq29kCs58fFj15cWNdkzXoo56Ua6qrswJgStHGpVgQcNUDhoANazKfFx4q6WXNJ1gFuFt7KvzD",
  "key24": "66Uv4TXQZCsBY7r6hNMR3EeEf1kRhHW4BXo3eTF2YBtJbzWau8Jn8wtxJ798xMHor196HtwDunALuMwz27TpTd4n",
  "key25": "HCUoiq9uqdL35Twmm1stoyK8sMh8oLg7G4gBUDF2qTLrJodRZ5C8QQ5qTUXafBPmXUgTieHvrumUKrs1NemopnA",
  "key26": "65Lj9ymjmNuAkvxApytRodvMSrwBsr7FmwYVy4wc6ekvQpq85VfqRXRtVkiggDXsn5VepML9drHDxzBp1kUQk2SH",
  "key27": "2knn4x32wfvFLKmFYHWLopsJwQDL1Jhz8K8YXWswqYFx5Ach8VAziYVE3iC5Mh4fqEyHqMCAj75jsTyZm5fBPKdp",
  "key28": "366AYWGE3XpihtWZDmxiXv6C1y2oBJQDs1dyZUs8VMwYruxwkakuS6qQyNLCJ7au1ehbizMtJS6uKonijZuh76aN",
  "key29": "R59VCuPFEAbh7DWo8m1fceTUSRDc7Fo71jHZ2kKWpKVezZQiYSA1nSzRc8WDVGym6aBZBsmaTGQmwn7krPJwyHH",
  "key30": "4jtSMRd62YhAubFX6XaHAQTWP4R68TUMf6TaYNzTCNadcRwnPLGrt33NVkJgZPMw5EcavssPckD8Pt9RLN1Veq8w",
  "key31": "5hLAVTDGv3GVoT6RQ1bASCdgmq7Mxy5jWTWbHX1vomNpPd6U9yzo9wh1LgPxe6wWKkSwpyhjCehJnt3GWBvK5Mhu",
  "key32": "8fzpTA24CQvyVTwkkkHdL6LeXErqFHothyqqCT5ApZ6moJfT8k8iXMGEdfCuT1VKS1vDvPMZBVBt4JM277QTcCQ",
  "key33": "5aQNbCAEDSAoF8SYeyDziQY2TDHPve6vHxAVRqQyWPsGDAC4aJBL32iu7FjR2satjDNdecdzTQ7pKKmrESPukar3",
  "key34": "3Rz6JGu9zVMPaXH7G6k1u2JNmdwXA28pgRnyGd91nQnCCKKwCnBHinFBq5XPXDvWbaNDc6wFYNbYEo94KEgb4PA4",
  "key35": "4Uisd2azyzyzPtGUwbQJ9L9uapBtHoNWSv5gw8X5DKpJQF6aa6FrgNyu5x9rDbjfoKYpWVYWq6bYKUuFbww1UUyM",
  "key36": "55xxgjHz6NR4gxQVqcS8jxGS2x3duu8Gpfx8yL84cFp4ghG4E3AV4tGpVcdYb14ahTSBeAVgyUStq9Zmv23sjVft",
  "key37": "35HyJYdr51eZjezHESzSECdzd7ifiCUXXDi477fBXAyf5nytnhLWsbmLBjVXSWJSopn6EjiAUDyKehbByJGpBnwV",
  "key38": "VjUcyF62KwvgGkLUTTMWvW6j9rok7tBUrbs5NkmrTPZ2juEjAnk6HhwUoRH8A5Hh2W1aZBEkmwWZDuETJma2q83",
  "key39": "hN5mFhYjpAnJFbBJdhjgfo9x6JibJMJR2DGGCGvC8Kh7kZreoKForZxtjrX39MiMG7U7R8XtcRz6NPynNvSP9qs",
  "key40": "4naR3z7jNwGLjqUjqFvX7Nc9C31bY7Kkfrj45NM5H2G2LsmA6PKHtEkDcXnRgtoR5AmcWYfHxhGiCxu3q3oKL3pb",
  "key41": "5S7Gmk9pj4Y4PN4rSbCdTvZBLYkvBNeJv9AbfqF47kHKhLYE6FYSWSXXeVVudGi8b12yMFvFEpgxuKDEqTy3Es1C",
  "key42": "ZKk9nC8KRNYnKQQf75RYrJyNMjFBSHB1stMYHty8fx9AKbbG8eGe22djz4Pv6brRFL4NrenxkCqxXaC789j8txg",
  "key43": "5vJzimRa97jtrhorbvsdZatUq6bmYTxYVeYyXqd4RJgnixficCA3wkZGqpPWZFzJNXCd6w3AXHA9qkPFya1jb7tq"
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
