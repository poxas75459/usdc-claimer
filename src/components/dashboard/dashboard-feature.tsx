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
    "2CzzmpLcRGBKup3Z7d4JK9suxMb1gboXaRr4qNR3yp4Xq7Y17hTaypTbEQ91ZaUgZKYwP22ykmQM2VPrEA9soKGz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PEYWyLQrAKWdzBEN31R6JbuHwHYsggfyM1gCsNnT3FFQwTjXBQ9zrz67mcoAk5Bbgh8NQNrzuvTcfpPv2RpCkos",
  "key1": "45wPELLiLwzt6SNByDNKANx3b1zWc9T9YPEBmnwjPk8dT4P4CE1w4zHPwqKiySykMLLd31gKEnaYpcLF58Nh1WSp",
  "key2": "5TPh7TWh8D1VHJiybjbbyDCzmFT9udEuFjBNaa1cgY63mJEkUqgTPmm23cZvv5RnAomnjYEq5B8XnxGv5AcFt9oA",
  "key3": "8WZ4Z3dqEo31RYoDGhkkj7GbaBkLM582eQb1BthvTGBXtF7aMTy9SufD8DSJRFUzcQgD3ALkNU15GAf6T9iBJSk",
  "key4": "2asJTGtNqw5PTfATj3bAUj7oo3qBWJ3iH59XY6DT4FwZgW7cubq35Ty2eP99MqPDaVqtRU2nRfwaAr4qfHVH6FhF",
  "key5": "2uwo9Tm6bSTDBL17siGYayRYZT3ARxU6z6vjGsUhrH2yaEGCfUMrLBjGdr9Y5iEaxLGUxnH6oLpEExJFU9pLbbty",
  "key6": "2ZsZ5Ai5FcknF9hDQ8dUGqjNwZK81ZkDn4FF13wxdRK897sV4sPMjBsL1MCovEBLXPi1K4FQPdZ2GRYbHHvpgHpL",
  "key7": "5gJ7xUBLXSSLDCQR7FzjtDtBQrESXGDBWDjxa1PGKvRYozXgqn33Zq6uLDQbRxi9zTorT4dP4f4ZG1HFujoJBppH",
  "key8": "2Pvtjz4RTGghEic57zYZxNZBpBFRHByL69VkdtQtYxYsGHHPXPQpitPsEGPpGZcK2n5rMWm9xBRp6hLxPn43FMt",
  "key9": "59b7PE9wLkYoKDHAoM5SZoXGV2zT7wnFvP33HzV2K6As1wFavT6szZyhJxxkRjPu1mUuN1XyhZU2LaTVi5uetieN",
  "key10": "5cUcvu3JbpH1YGk3UQGTe1TEhL4BuGN6AyNWAE2AmUxPKhhiUueiRqsXXSoyiXCdU3ujDPKgeZ6ZTzoB4q7ppmjJ",
  "key11": "NPF9T8W6fCrR8LRm9dU3Y4cC7pp2V6AygnxUwZnVMYGnuusBDp2cyigcNugjMTB4WqyGcLLBpt4cbwgyoaqfTMr",
  "key12": "3fB8SoQoQmj39PQSPTrXZmW21YbCNb55sfPVBZejiaCSiwukjiJNh5JkBV9ZRSMTyjXKL6LxD3ALygHFQgHFdoGN",
  "key13": "2S8Sg4TSr9ayiJKzvbKfTWc5RkPLm5MdhFN1rt1jL48CJY7wCp4Ehnob4hpuZ2MSknw1v1x7152AjzdTyz8h9AmV",
  "key14": "3s2qrq6nRBzyRaMzn5xtBZvLNSczKceX45bxZgwL257gKWJyMRuSq6UakibaXWzHuYWfsjdAGmpejZVG3YYcVfgi",
  "key15": "3W7F35wLbTyp9N8a5edqZwBKdjTtocCC2to6ujU8ML7K1qH7271tt9xKNFjUqBvrkpNs3yDS8rjBKDAMTWw3W67C",
  "key16": "3r1qZEoAaefW4HqevCNFBX5BR6nqnLPpKV3PTkxcA7q8oNkMGUP9aB7wTEoKBo9f4eKHTRftBCCV5w9De1SSPPpe",
  "key17": "2dQRy7HSPZ6bmAoMmE9jWX4pSo3kr385a4GUtEMK3CH2CwKBk4pVRoxmGPhfq4TfGi2TBcapwG4dMno1cPvPBsGt",
  "key18": "4TUDH2Pt3MUbR8uh7p6ZGHqsfAmyrLspzj1btqiMJ4sFQvyXxpKLeArNYuhrEnTwc5FnQNnynKs7TcKqbsdvpDZr",
  "key19": "3tfqgaDiBo8Puz8PULyaSJPUT1XnmgmiTbCJ67WqpwuLxR5vEhw5T8k7usdRQrXdqzL13SvExf1dfKMZYiDK1ZhR",
  "key20": "5UPGUPrDDFaB7YHsFNkSHZ8b4t1gPNKKs9ovGYPCfR6ck8Jr2NusWUSof4uqqJPsC9Y9eHagoyLNqbjrD986jPTn",
  "key21": "3dkVZPyZGkNYC9wfti8i71Uohn357ME3sEX4pzmyRFExpVcce1R4d7upxVjdE9yhtqiPZJs7v3ELnetkFr1mrWPJ",
  "key22": "3WXQkoZNhW5iEbKTgNaAQTTzH22PWUAiFjLaKskE446zwKV9ezNjUW5d7UVq9Cf9hyNvdnRZCnW6CgsPQqT3sirZ",
  "key23": "61NELoDzvcxYMkWPHHipDF98DTYjVDNQiX2S7SNGG2dDSEDwsWEEyvkWYJERG113MVdmB2hakAQzXfhaMykvqa7W",
  "key24": "4A5yKMJqjK8JTGScMXJ5f7FmMjMMWSTC4nyu8iTwdvA18sN3w1i3W6dvt16f5W6iddLzdeZ9cwem2MvA6RhGUJp8",
  "key25": "58Nit6rZzW486mkcgUNjhji6mj1RR54rNTfabgxrYoFF76jERA6tDcM99ELzUYV8YeZhJjr8rKfWVW2sn4btfTeL",
  "key26": "2yaYet4LvvrMeosvw3dLWJ6pabKH2q3oJd21jMXr3XK6nUQYi2mY9kvWF9uH6da3E7QEo8wpEkTWjYhMwf7o71F6",
  "key27": "3EF2TxXNjYe23ro5VZhran9NVR3zWzEirHbiMHUEQqyz8qjkPN4PzYG1dr52HKSTdt2hmTqGqSL89E9acWfcZXQm",
  "key28": "tWL92w8wHaitwwG484KXJcHYAgqpwkngDTjqeBGjXVwz7UhXe9YRyivb5gaVyrZYah2ShjMGSUs1zKZawWMTJGQ",
  "key29": "r27ZPpXybV6kaP4Rx5zhgUnGM82H8TuLBh2dVhPipM6sj6dry6vNri89M5F4ABJQ4jQTBxNFMmSc3tJq3aNy5fF",
  "key30": "4oRFtQEMbCdhv1XTn1SZuHHkMfkctCRpNoaX325Mu2epoX3K4Fiu1b9gMVqfMA7Em1bz5L54kC7gR7KpYWMFcqDB",
  "key31": "4v7LtKYjkcvmEziu6asEpkgPiWncNJiLt3pdZnToLPz1Q5a6fzYA9gu7Jtb4u6TCchzEFdbjYj96vXAsdfxoi5bm",
  "key32": "ciXg5KvZQUpPTEvVeQHqqLoJPqWmqxjz5L9T3WzMhRgrW3cnu4UnpGX2YNVbpGTWoQFvjMrKU5VggjjdxqA769B",
  "key33": "ZcUwhCkzmU2cWsJrtC7jQGJgqHwEWDAgAwaWSiLvbkp4ACMKNFWBZNra2C8QTwmzPkCBXySnbWVdjjftRwvSWu8",
  "key34": "64fFp3iL1kcSbFeBxJ4KgBB5fFTVm2bU5Vufm7GaVtqKKZEKkS2a9kLM5AVbi9AQGqi5mi1T9YY5dmPAkUtMfRFc",
  "key35": "4i4x759sUA7aKpyMNGpf6dYQ9MyfBAdno2zyoW37ZLCrJrrwSJhydEjPxkQ9UJMap5bcnUdJKSc7dX3ksvrAENim",
  "key36": "3bgApXLRzci1xgWWKrWWCg7FhLTaetMrJFjXrbFSuANBufubH399mQfrtHqqg9wEzCVZaNXRWwcTPZFdX1C7oGNQ",
  "key37": "2brnY82RpKZBhRSeMJL7DxdrysMFw5tdws82JDMYHe7T787pNQKbE9aCSjFrNJBfY88HjBzXm1Q2SKtEDC4YUE9G",
  "key38": "5Xxa6765AyMoj5NWRak5VSShNZvna6bRxriihMpWD6oqrnsjfaQmU3Mgu1tMLWg6C6jXzarViZAYZTGT8XHVAx2b",
  "key39": "2UB5Fyeduo9zpQEjb7PwmjduZk9itBH7jkvfGocYrVN3fe9W5ztdLvS4FjJwFX39R2Yc4HPyRFrXHpXGtLoyEHmF",
  "key40": "4FZGWBFSgVrCcrZpFmioB74nhxWs3sQ5Wr6VsSwmiwsR4gYqCcEsc7BgjfCaURi4LuCUxY6ESArJ43uzi6SSdYj3"
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
