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
    "4ZDdXrqypGQbQh5pmANMoLTwAUewmx8rREq93nq2VHHuxZ3Qd2eqdh7i4D9WoHrsDwoGLz2AuB9xKe5upYLgEeP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tKf24YUTNB3Fn5DChRA4ERGo6N9hHkT3wgGeFiYm2M8xWYznF8a9Kfa3A4RTXaUbNy9VPMM2bPkuEqxHR3HnZ1i",
  "key1": "59CdwRyBo3F9FrEFtC4q2zn9hXEzcTsCvGFoUHVRTXzsg1nzC3zuGaMmvPdNaeXTPKoseFrJ9phDRyVQ1pQo5NBz",
  "key2": "3KraCU658EBGdMrZCxjrwxscN3QFupFyZLdjvNCxnfqP68irbpXQzjMNzhQywmxNX4m4zoPDg969xW3SjCrxqmqj",
  "key3": "55efmobFxPeNiPZ1t4BYG66DmMtHquewuzku6hVdDA9yFVc7r4FzUVTqZk3DMvz7MGSabnxrQ6X6VHJfSP1Jy6Nd",
  "key4": "AVLvpjjGfdSgS6sB9vKUpQagn6CJeRhowzEh74UjeiP7qTCaQhJN7sh7uWPwKZGxHwcuCMx28o439PvUiofZrs5",
  "key5": "c6T2evG4XaYPNwhH34yv1ktKwv76Htm5eJ43rAWW3Rs72Mr8gKWz33JaJyiuxFcFksPqK3EJguky9EPmcQaNwpB",
  "key6": "XrYyDLioc37h7S3cMwc8j9pQGJLNDy7vSCWhen84pfD7sGBjBjQJp5NyY9sbYRw1DWBFgWvkCpcvFcmnJY3sccm",
  "key7": "5Q9sdGJHQTrJu3192Hu8j4erUAfSrQfnRoA9LtihVm4BVAGrWPegmUgtjYrwUbXgoyUtzJsaX12HK43cLTsBPdQo",
  "key8": "4SYWajS2HYFAFyjJypt29XK1Uxz8rH7nTDg7AQhjY7WkWyJdTbgBsUrqXMYLnGdzLzEB1gsddLoBjNSynH7fEAgU",
  "key9": "3fRgyBKWyJ3AHXxs6Dj42p2yXnHwBhYeCsFiBoUyoFWttcihPRbZtRNPBUJAZ3dYp2Ey3kzvcBeSoXpvWXkimr8Y",
  "key10": "5gGWV89nWJqkPmYXrdWQ781mMj1URoHMdXTngyEYfhRWLLQkXZHc575RgZXY73MaoUKnHf9QkDGF5TrstMHjMPMT",
  "key11": "66rxGXZ72HmxuNjcvonyPnHvCsewZCJrt5jdr2eW1zvPeCGdDWs3GnPeRSRarzYoYA5mrJWmAwFmoEVMxatNvtFf",
  "key12": "5KTgcnbxeDVLFuwp4tZ2A9QypvkMiqG1vaqTBJ9gc9QDBkQrTQuLk6yXjMFsf9xBmrDLfzpwnQ9tMfRd4Z7GRuU5",
  "key13": "5GmL1F36PvP3qAAabkMi69iQY6uYitHXomZ2tmU5v8uKJWtF2EBB5jnoo9nycU9ksZDtTUTT6fQ1YGb5yxQmpMkz",
  "key14": "4U1anbedYitkRzGrHzKBzhYuozzAghRbftAsW4XWDVifQwbeSGwtTezca6Tnh5emVxfhLy1nygcfMPANzcZPMXZg",
  "key15": "4bdgxs31VBjYMipWQ4x3LEUDf37LG3wd8CGx7JSCHrnuMKSYkxSEERMKfhrdUgvHyyiAGxqve1DxkDja6jAz4MYk",
  "key16": "5Q3XbNtNyNPjLdNRjcWDrSu7699pkmWngbEmF4d6i9fqHxoQL8uC5TC3bpV18RAWdPsHo22ByDvkpggaDDa28qsY",
  "key17": "2DMxJhi2rNP5DnzkADS8jeF16y3yFiNJAyRevP4Jsru1xHLkAg1CAK9mfWBMyNmXZAsohHd3ZoknzHHRCJNpoMvn",
  "key18": "P1M3g7iKtjZDFcsLUeVGnoz1r24c6FZH8XDH73E1KifipHpiLj5pR7EGiLSFdwtZpBxGFNYndXEm1EGK3Xtjteb",
  "key19": "4ZKJ1mS6Es6MFmayYKaCv9mTScuTrpJyb4NCZi3oiHMu4Z4ZsGFyZpnXaKYnYHu3eqGz9k4MubMTPTtnyiz5DXsp",
  "key20": "3qMZ4mzNC9aMFnNfn9sorpGtjk5RfnZ26PXBFXkWwDJRkH6bucaRDFmdqRjuHwiXDmQPADGDZJdrGWeaQvhyxDQ6",
  "key21": "3YCPyzvVFggwvof8qcJ9nLyGPxHHwtisZK4indGpVYMEVqm7iZoYAzPR8jgS9snEScWQvNJZu8TH8Dep5L9F9N91",
  "key22": "EEgBJmVs4WfR332FNK6fpEy7jmJYWGAEnTrbzrw6SmXjdSciVjgFXKhDmMrjEMpS94QsFXtpTTWZAnxJLWJfsVr",
  "key23": "5fvGSzQWUdbesUYxb6UHdv2QUuvfwkdBBcdCtkvrYhKkw5DuNFNVUGGgnLKraQuNeGPtNazU5t2SXbURwftYsRjQ",
  "key24": "2A9F2XHKwAfpBq3RLmo4CBMxwBYAFstNiMQK6ppdEPaZ4vSustuhsy8wiDuL6EFZsXdz5EwXip993dHAm8pbv5iL",
  "key25": "5t4uxEYAy7pbTbiveu8TTYTetuXhNqVBT6vqWCehUQkCv1iHpd11NW6XJPY1aErjyf6rqmUENSnVB7YeMNLUeN9K",
  "key26": "3BZeNgALgaYwb4qKgdF7wZ4xqNzbG2mEgNbFLmSVJm6mv7bAi21rXBrnLDdNphsG9ADEEYwSYuNvQCBkn1Sjdd2V",
  "key27": "3t8E6fYwa3M2L1LiBPqRVX8YQUzQ3qSTptrApGwaGN5kAqQrF43eQ29GXN2SisqLy4vJ1EooFUzADYSJvE7Am8Z4",
  "key28": "2JmT1tpTt5jDbDAQuefWaS3WayCWSxEH2q8cYubEEj1LxuNiDEPoJzL4qPBy8zBqoJW2zju8ciP3o3JrYRzgzbZ2",
  "key29": "3xzHs7h42c4JAgZmTaey2feoH1syfAkF8gAjRFaXQqPjcmVxbdqaQjmmR5KCQnWLDf3JynKEUkHG3yEYmjkpBpMG",
  "key30": "5WUKrGUnrkB6o8nFsCKdhny2RqbMLnLvphUvuxZEE1tuj6fhZT9QUViXvqaQKwTmxxtoB3fSMZKPi8c3YarwhECy",
  "key31": "3YGTmWUrJG6FeXiGnd6EVUBZcKYAxpurixr3Bgn9GX4FrcsmPFByPkC2SGxvxbEKWQk1PFYW4PynrVKtNE9n6qAw",
  "key32": "Q466YXKi1Q64eR1AVCyfDCaLP23oDaAENYqtdXCb1CqxAMR5emrMuTsQiorkLrcBZLghfx6sBDKN72PDAZDzNjG",
  "key33": "5ELpWQPq5tXpfhxb5Vqekxm5vjnb5c95sddiwXdFL3Z4jfdwG3uLEmkAuCdJRf26PJkYib16EqQbRznSu3oypeZC",
  "key34": "eNszUVepxcvgrJh36rJtR9yFd8d3aes8Xf3YXqKE2DGMuCH4xHAZRcQfZn5cttaQnY4w2aowMv1NZMCsicRWi2U",
  "key35": "96m3aW4XHKQSFcSSJKvBMWsHS2tX6nRsWGBBZSGDAoi2MRbwht6HNERj88TzVthVWT3Lahh9zBSCAfwRxRAeMfs",
  "key36": "4PRsiLoyakWvNm4MoyfuMRLs65xGE1gL1ra4CVmN5Ry3qcFP6q9bn8iLXHTNXq6WVeq5owZnmSjujDw1PKQkVjcc",
  "key37": "2zkZTAB5tmc61XUJ962bSdVUfT661MsXWrKdNwUwEfx2Sptqy8wGRfPR7XiUUrMMsxwCPAA1RXwDaLSysbL2wdNg",
  "key38": "2PcXFVHMxkLcXa1huuMbCikqkv3WF43fhj6AAwcPv9w1abDJJHcDMpdqP32YjSepmP2N7fkU7qTcJvwokPcNanbA",
  "key39": "43Lzs7Y5y4qEk3PpH5qdvD79pbbYxtEpbuhaJdFYmBQwzim4voW8MKArSwNzxKHGy9oQLdXZhCRL6fJ5LMLfFVze"
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
