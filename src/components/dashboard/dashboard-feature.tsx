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
    "4BCq2wg7TCUVZULVzNsRMg8EXTuffWUmQWABut4JuKzMD3CmY5i5htTeUvU1cjt5DaLLFTYZFMGU74WwqeEJVToj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g1fy84oxkVvhHEPKLEFQkoQXBf5Nqe3PF8nJKFCmnQWRBAc952bTNE39Kyvvya5k2RwxPkLKuN4BkosWQkfASG9",
  "key1": "61jsD8PQNfkaBSsmnGqMWwvyALPzVKweo2VPjbwq1eFF1jqvpPvKrknZy7JvYwMMEziCp2hmjX4S2f6p6Qyawq6G",
  "key2": "4rn2PUBR3oMB7d482HtsDEBao2ucNoQK7bSVT5gAyDYTcdUijeeABGvKGGPo7ezx7ENTFfbrrpRa3UvwTVLRWjjy",
  "key3": "2dHCy3P1TLKbeL5MU33qVAjjfhibSvqVKZ8eJXqde4jtYGA2QXRmJMtdkDqc6CvAYtHDrFPiJY3uv6KeVoutQKja",
  "key4": "2tN62mexmYmbrrsWb1cfbSc6bwJW66GHxFYdvJPxsAr19YXKnGrMKeBCgyrsax5tm1vxnBFSzLwBHCoz99wjUxSr",
  "key5": "3W2E455Yhx94YJudxpryVYAjbXFFLeKUQ6oyj1iZXaYzXDWFvbqUUw1RX31vekyuni1zQAbwMLENrNyEuJBAXQS2",
  "key6": "3fPyEJjY6kAxqqoyckqVg7PPDoQ1mmBSASWo615SfxyB6t1W9JZsfEAdCZY7vTHSN8L4WhqMaeWx94K6zPSTeq1A",
  "key7": "KcC6sxD9BDX7xx4jojsJvyEMiE843LDFh9XM9vtAE3QCQkb9PJkQtEqNmbr8h3HkKnwzydPn386XnyzUPaJtKM8",
  "key8": "3vMg5ki6hywiX422idP297We7DYChBdpLXW5NgzMnHK2YKZRUfPXGWt6HyGSwm5f4tnHT4x3vXpXLEZR7eJQ741Q",
  "key9": "2mjhDM13aUbRTpLBYujXCwJ7ZMgKfon7WUfboUZVXF4QHoKcaErg22DwnbwLZmgN9yvJaNcr9TvAjjB2CkV69u4U",
  "key10": "5iPqvPSGobGs3sWHiF6mtbLivBBJcP17v7THCxJGmuZQ8GbfgYPcfSzDieBpcYzH2ZsQdSQWodR9wQ8ZDwysKU3H",
  "key11": "b3zifWty1L6JY9DgNe5gfgJbUHvCm7CvsdFNK9J6A9NzjnipzEZzWNRfzP2FCBbHZNHfFux61hETXmPXupGYThV",
  "key12": "nuhXygJGfsAHSeBqs56XrgmvpkskDW76ct7k12pxoMzqSQBWodU2YP4pbwnzzeWiDxgiZA16nWfQQUPuUFk82tS",
  "key13": "5Cdq4YfiWdBhpyAaM8GRBFvgkGKbLMJhUc2p5s6NwtikRtuPCW9pcwoiZhBDu1crhGf3338RsNzEnbfVVfAebCDG",
  "key14": "3aDg8LcuTNjSCzE4teBvhMjbL2GBWE9qPh9shMzuLeud2nWpwT8dT9c7kH4ek18kZnnT2w5q85BXdaZN8FhYukZC",
  "key15": "vkNwnj9yC75d1qoGrrMXbEGm4R8rXHercBazWxA2H9mxD1L7iYH4k3BcURVrXiEunAQ8muEFBMrPCNc8yw8ouL9",
  "key16": "5cRZRbhj68yMBD8mcRfDHsSttdRTP7YD1viKh99NpdJ6TbmqqF4ptWR4MWJvnosFyD1raKbvye9g9xoMBe7H4eQa",
  "key17": "4tm3dFarDXnu2ikNCcbFmFUZWvvS2SZXiFc17ZWj9QV2T4jTixaHktPqvGxWB235WSJZowEaywzxqK7gsCZcW7QZ",
  "key18": "3sCJ1tuAtta89xuZsJcnaLh7vp5rxotDk5mApuo88L7zmE7HVChoX8x6gfGywhrUMPefKYArqtyzk5Mv5qATueso",
  "key19": "jtFpbiXdpFSaW2jcrtNUwyLsceAidCopUUREqFUXqQibZ2jsTu9EERbCJzsDQMCSabGimvLzPEnCpqpFqMfydPx",
  "key20": "4bQgvrnpu4Jsg1hd1Ed7a6MqU9TnzDd5HZGsRpEivqdpqKAJRP94Y9cnGppK2Z1aRL6r9mM4yN6x4GiKQ66DBbGR",
  "key21": "5qbFWUkKmQ3CSKPJ3F1hAJps8EfRPrWjQEBkHbBCLsHdMVqTEkVnePwjAQWNM4sWkdSrFDBhyv4EjrGrgmBWzR99",
  "key22": "5VgP9FmS83M1WkDPoyGECF3jQpRj6W1ahR2Pu8eAFGBwMeHxgnWu2mPbm9jhwrEJSvb98ymfJsGxjT9uxkpgRrMM",
  "key23": "WwFyJJcRSDWWUnq2FA9bBF2d779Ecg8xjbXvYpLDRGVucbF9HMJDwpzPnJKC1UfcWYpbWU6ikf3ZRpKhh6APBJG",
  "key24": "PzE1JZ9pT8UktCmz48Uv7hZFG2hjDmZ8qBQn334ocgB3wJkDWjLtxBeeQsP3eKvtcEtGhPyF18yHyMGxkYc1AFs",
  "key25": "ok1B4Gfe1Cbs6GM1Pm4wruLBvBzD82GoEkC9EEwkJaE7moWDY6XikCvpmMhdy8e1SiGEnxjLGi5APbEEuHL515e",
  "key26": "59iM4yD3dN8toqjZfDL1HdT4MKFaZbkLgoSMCnjcK8UKW9SMroeRtd8eo2Lw2NB9psNT9Qw1naq49KC7cE3Vbb7U",
  "key27": "4hrdczpfK5rd25qnmazEvFeztiraftM1BpdWgxXnDaQtsiDLY9dT5fgt6nAikQbGqhuhqxJscJ8mJqCbnxnLFudd",
  "key28": "2LGzesFQ6reo3Z1jeKYSvaRLu2KRiGVGsjF87WCp7e2iSd7FRE6cXk7fE3owC2YauNx59VgQzg1S8w8sXZBMgS3C",
  "key29": "37VYFbXZSCMhCqrytecENZUZC5ueHqR55E35idaAYCdUWYKi269GREUhfxt45cDtntP46uWDt6x5rncudoTxnqQz",
  "key30": "3KhpxJW6qZ15uabkLV7Lpe4D8HoiCq9zBr77VNaFWNP5YtbzYjrdZZByS9DYz5cJ37cyDQC68mb8MZDmEi111uHz",
  "key31": "3ZucSzZuVThsAQSJBvF1ewfP65BoHbPjJc6tnEwkR1iZGwLNh7UjDurRFX4PeK9Ve9zYtd8dmesubZm965U8q7aa",
  "key32": "JdhctmfZisWGb1i6SSdYqAqnrzRXAoVPt7g8y9bcibTp5t4eUjd1iNPjas7nFM4nyyttL8kB25vwVrjGYXSckxo",
  "key33": "65ty7dF5DzrJzeDkj2GP3FyhiZkfyRkNJJ75fUced5pMHcYA9BWKNixBVUMEdgFkR4UMzZ6s7QfF453DTgnAF1jy",
  "key34": "h48RMn3WYtFpraXnBXQfCP52zwZobAPPpiLE8w8edV1Ym1tuL24Yjtbzkt6LcQa1Bkkiz76DDT6z7EUFVjiFJFD",
  "key35": "5mucbPAQpxe3UFAvJYGU7srAEFfGw3uRJvahRdWHZ2Sxu9KY41wxo8spR4vkSz3NH4BdYC774mBMJGWroVjjw7gs",
  "key36": "5u3SKWXuAi8YhDsxPFni98RDYxd4vWTWbV4hRfoCY5NYBQjPrJZvxLzh1xyGdC9gtuTZfMjRNFkk9m4SX8eT4cUa",
  "key37": "2iV2itxiGAS9hwwto49gMgyxgYcYAfwRh2t6PqZ1bqMnFd7u4DpkCHuNFgtwVcwrRN7pXwKLtKxtmFuE49qaTFQJ",
  "key38": "3bRJRCaBS4HQoVQUCUKsuH9fhxyv7iTD2BLBs7gbrEniuTJ8pJcS8N5jyhpvwSKqdbBhC3rvkrqZkRUoX9jkXFeF",
  "key39": "nCmFxxpP9JmYsvDtDGJhiac1ivzF2evNrNWyJ61MfRgWMX9PfV1WgRRXxHJ2JE87M2Mc3NK9eyD5KJDqhLzvFKT",
  "key40": "4ZLDBKtpJHcHWLagVR7t7fdNRNvxNBZMxGQCLMhGobCEAfK6GNeULxFjDJHxzTvbSbSmKYggVnqkpmcq2s73UJbh"
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
