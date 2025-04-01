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
    "zU8XaYoyBrYziK3Sow3ELeL3mYjaYpYkfvZKVAiTM8x8ALmzAycQoYFQMCwyByKaCi7VKETmNFGbF3tiRRRR3UL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VsreWGHjYhbnmR4nP6qfDfkqzcfRKjTqeL3SjKQM71djNzwMpzoaqk6XtHmgmE2vh7UrXXsYvVVGbRbQ86DLXwG",
  "key1": "31F8TD3xpTYBm8zhrtfBGnC6jydn36xuSd1rC8yZCGbdPox2K3u5RnzgpEEXRQjX3MkwjT1GCmoEgfSwq6MkMx6q",
  "key2": "2r12Kj66AvN3LSnoZnTT6jSedEjLPLEz4BrwyVXhBVmsa3WKRJVTxhGQwb72SFJqswoXzab9S1xwLJk6YD4HZwQ9",
  "key3": "24r6uqPbPN974pKEtGX9sfiBXKJ8PaYrxRKVg5eE97M56nWCmZEaHbGF4FLVx9VJwyxb1AUe3u2qMUK1cBbYK1vu",
  "key4": "43TzyoDoNWpY1yb3SZTFuF4azmCMr5GefKzaZHkg2ebazd7UVcVqAyv4dQEnoZq4kwmMjaY4utR8KYoRaDZ8GU48",
  "key5": "3YB3D5ebLkFLYLs2ogkmRsiSUSTqkumdYKqSPYbA4rbrDRqmr2QnRzB7Lda1panGdezL9xJsVXRM834g98LXZeBD",
  "key6": "42u36dwHsqn6c1dpYwBoVhxz1tczFhsXYznLnnHqMnUBArZSB1xgHBL6NUyWM4i8WePmXPabMFb2vUe786St7ZhK",
  "key7": "7APxBFtETt3qoc8nhLAExLc7SSEL8FMr9qUqqr4GvohW5QGSBjRKMbgjW9F9FFEYPgxtWGQT1TCP3dmFprfKeCd",
  "key8": "5sby8XtZWY19Tpo7vAbnkWJvg8S6pJW1EvZJFbUaCpgeJEamW5RNdpJowKJVbv976HkFMbA9QfvWc7HuYNgQdGEo",
  "key9": "4hB8twYtLvETHsEo5duH5YfuMusS2PYzK2HMzSo9eViU4DFTkCCrtTPGhG7ZVoo6borgLCAAPyDWuuyitkrd1QW",
  "key10": "24uB1hw7eFKGJ7e6yTZWfEPVzZoVC2zH5YcXp1pMG5a1fjRLegybBA7NyAKG6mfyGQwDvu3eDEUoaDZUScUKj2CR",
  "key11": "4suJfaohCdi7kARHTF75LncLFKLfsXua5bvRexjevfCtQFw4Df8boyMUdVkgMB16QgZkTXgyeXh49a9CRvcJSane",
  "key12": "zQSH2gC1fTgGwRmX4JRYsabdRQ9evb5tTHv6ZtnQtNbJJiLzj1RNwn8D7MDuixvR8zH3b6wtSVBY6o5Zk4mLc5Z",
  "key13": "2nqmHsiJ9ALmjER9aAgau7Rvs3oMc9CeG58RJcnXoK62e6X8hffNCR29JajvziikykxUvfQEyoPKBVH1CeXuagiz",
  "key14": "2yBKf1v3SBWKLkqUAnnqrpscZpvstFioQ5QXeq397zT8h6Sj5TaUXVmh7PZmKbz4EZPReRPD3fCEJ8MRzyqMHk7H",
  "key15": "3V6Z2dmaBQtq4tQ4wNGp1ZtGdLD2g4Ug8Anh6qSqAGW7AR3y4gQVrsQTHTRV9JPSzgJYP7iLfZGuv2462kPUgUrd",
  "key16": "3MxCKLqPEHAfPc1qpgaJMm5zBVrKvswbD1GqL6zcMezVAwEJhRiZ3LVMcgtz8tUng318WnMp7BNHw1411wPCVkSv",
  "key17": "4HxWN356Mh3xSprp8NMiKy717zXbNFCbkhUgs4cnN4BniB7ca211MNjSea4h2D7AeP7mPC2AHTJbjssSDXK4zWzV",
  "key18": "4rGNV3TLmKiStE7jJQfpkuF6443BgQbDYYeZBYnSGphtqbrXZpiXrptUMfpN86LoyQPe24s7ResdWzBT1kxvGWfW",
  "key19": "3vDLA1PnCH6SEsJdjQihnTUpg9Lvfi2fhmSR5XNMhpaGBsBoMR682U5q9U6JdLFHVgw3bHa3cVy13B7yR6czMDrc",
  "key20": "rJExkar1JhAvDDAQudoRoWrqsMju9xraVeJB8o3UkWouGrGo6NmmomBn1xrDpsmYrarb8cWTCLhi98CBn8NMpHk",
  "key21": "3869VWR8km7BFkQgCKT6nH5JfuxfdGSv9Xu7ypYTrWrqWi3yADUCUFGmk8jBTdjF5DK9mtcnyejhWMHWEcXvi1db",
  "key22": "5Q41eMZJ7RWcxYDGJfATxyZrxy5ke84w5vg6Nt6LmwGoQ3NRcG8rnAuvZn4LFgGm5UKVL8FkJ8Y9pHPSud32fv1A",
  "key23": "4knQDFCsq9Kko9ezWtJRXpf7WkGTCyDLPAspng2kmnuhEDp7mJ1Pn6TwkwVSS3QvCEmDyHFL5y5n3ai5uVVLCa43",
  "key24": "34CRvbWmqienhCmvTkYZ9HsC17tJ2WoDq85sLRwqWA93aoktfwkb58eaZpWTf8qtAFS7DTmUxqbnSkeSg1aDYDzk",
  "key25": "3Wt2nyu6E7L6obmEFdAVqjiejNdrJRjrpQnB1HS6JD2TpYdyMaLfi8EzoaGqHFUXxD5qoRWBqz6MW8wJHjofzEVf",
  "key26": "4fzZLryGFrafgYi2MV7noh4ZRtcoo9EM4CH26YbE7KDEd2h53GgrYwcvRk9h6NXgDHGixg1PshUwCzXeXsANR9Yi",
  "key27": "5qtMhjWa18jL7EiAgKRETNHiJ44BU3z5acy2MKKq2yvvcLbo21EomTRwpYj6dJ2cRDubXTXdmmK5UHEAeofsSLPf",
  "key28": "45rPXF3rrg69kvQ5ATbL5a3HgvXmasVunHUUF6k3qfJrUe5PvSCr56GeGbDt1Ba9nPyzhRPFQJt4Pd7ytYnHp9Qh",
  "key29": "4a5XRhw27agQwitBwJqRPCGDwXUkoMeqJQnAeVcmZz9fRvN5QSazzhCxDBMRmJfYC3Jc4rJDgM39QYJWPhoR7NSq",
  "key30": "5Tp7xXszGjCaqGHXArCTDWvToQVxGRKFSsWD23jhZJNB4MHZosdYegz5iWQQ1NmCxCKs6HQuzD87bHQBxxyupVFY",
  "key31": "3bQscj7wD9BhoJFsiB9UbqBhkXgY8ETo66Nct2mTmecNKCWh4vADvPcNLgaegsjQFvehgcb7pmVHe6HNF7Z5Jc2A",
  "key32": "2JbZnvqC1bCACyQP48hJYysJG2HjxcdRbHX3153f1iDGcNE3GaXRA3HSKFak4NP2W5RLmnFhxbq48x87zcNxV8Uk",
  "key33": "5c6RiXK9LGPFJYqnxFFj7B3QRGCsJCz5LA5dNCHWARbe9TnDYGUjxqmR1na5eiSoGFYKuorMjKyC4qr7tA8ieQxD",
  "key34": "59W88daZJ56WiMHsCaaJti6Lf94K7vp9BVBzQZfkF7KCppz7sZbqDf2D4dotc1ttxU3Ypm4ArgzqPX4Arq9ANseM",
  "key35": "4DrM5XjqTumDYT925eYPk1GQp619jaCAR5feWZNaCEqkGsqjFxSmUwCDYJsTBkxSRKUa9hun363fCpGba9pF4kPB",
  "key36": "3taZg268NhG1VamWKgb9vS4rsfzkVmpzMopjYJQdzCERSifUrjeCmnwEqn5N1iMmRzFxvqVQmKQcKKKvVbFtdpeY",
  "key37": "M2Yv49uFWc8X9dAPAAkqc2Abhtz4MueeFr7R8WxoAaZ4iMhGDGmAUfphQS8wQt7GrNkAkoaJQx7o5vjkeQFs4NF",
  "key38": "5NPPK9YoLxLwobB97KJih38nd8gr399WBH3k8pamsBTY73Tvuiw6EPyM56hjZNqtnoEhZ9LgcDhBcsafLPNRNvyk",
  "key39": "35TDVTL7suS7V9k68fb26H5nnUot7Hc68Nru7MeAE9G4wJAQx9jVAcYbDwBc7QL8XCwwDNGHvxBB9XXucYiG13gk",
  "key40": "4McZt9nd3Sh6L7VussVsg9Nta8ShnktCAha696xKNVUf63ueLYzU3bqqcxinQnbG1gXJmgY4ccY7tWoJasrv6fXM",
  "key41": "3rG22sdHxKrjJpSF9XKde6giW19L91nThHAFV1wGTX7MJJZcpVfzCrYYswBftSPsfVEP2gipf564YZG1FEGEqzBy",
  "key42": "2n7zdPsmsVGQD9sbu5puVcGJeYY3vmNvydiaPAZRAcCjg6UZvX17GJczr89ZsgGQdARMmSmXgPbHqdAMKNBX84wa",
  "key43": "5CEuR9PuGPNDUDvkuTR4uGf6Q2ABGj24HhRaqJ6ufEvrax87UP2emthrbx5S9AtiSCTNcqkiQpbZveyueNsfG7hb",
  "key44": "BD4vHNJrXPwrqYdFiJtaqGBLsdvhKkT6FYeD3vLT3BSvinAnL7bpwbGaVphiphxPw8EAu9CFtrb8z3wC6DgozyA",
  "key45": "22Sc6jcaUEqCVMvC251YdFHYCZkDcettM8JKjNAQxa3uRTyUfzAGKms1UDRur7Q9ueSeWU1PQaghKZ1LgTJN2v6o"
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
