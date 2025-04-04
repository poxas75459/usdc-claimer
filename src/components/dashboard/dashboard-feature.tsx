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
    "4Lbq3wf39evztJ8eZPCfeNRB67EmKmcechLFohBnNDtvsNczLpmbdbip8UnzjMUCEufi5ZGSQppU4VysBs5FQM7e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EL4gqMrUqhzddxneCpLwA5MWXAtCAxhjSswdPkgWYkverYGcWKLpM9nqcsC4Yqj6jBM6ZYZXeeFFhyc6N36Zzf2",
  "key1": "5i16ipki5UXQtWZkFKWizVoPEiimEiM77DwDUrAKJou6pTUuWcRVuSsSb2aDVhUk35JWsmAYFmxjqQ6MiQXZbaTe",
  "key2": "4n1Mbb2Buz3g8Zcv5JvMbsiuFfwxQC6CRUr1H1LYcpbBJBMY7vD51mVGuZogiDBvkKWGeCjvDLfpZ5FjfLVBZcK8",
  "key3": "4cJBEhdRhUcx4xx59ZKsDpAvcT2jL1eny5vdiVEPHfqCGrRj7pFuuNqkRXNDCHThj3MPs24Zoz9Jyby9nkqAc5Ew",
  "key4": "2hX9vDNdjZmPrFAoY86GL2ERNMkhbGmKBJ6JKGWdHyoLGz4ixevgAb4Ln9R1tKYDXxDJCdv1Gxewa11vfVHVLC5j",
  "key5": "38NyV5N6zA6TvXLgibbVkrSbfrMRTXuGVfmnnbGNaHqn6iCdxjzd3XuFdrxbfbBVrrMbMFsTUGD154iszE8mDBh1",
  "key6": "2fBKutAMctPcNbmk65Tou26rsqdwRYDZnEHoF2LFmA1jpdtN6kYdCksTYKnFuZkMuMARXqpzZrTSdcxp1Mv92ycq",
  "key7": "nWcZjcDJEcL7h1XmtmVaccnzeoQYqmhmjtpDNq1CRUtCvyG8itC5g6aNp8Y5Y75ekWz8tCvcboHHYAqG8sNgXK4",
  "key8": "2XcrrZTJQXZEPpDpYAyJuEPsGG24BmRrhrk2EhvLEDELopkuEmdZAtkTrHtFiBFDFWsbtN4FjmrtUy6J9NmkxMvu",
  "key9": "2P2pz5DkUpPaPu37NWFbaxLN42ohFPmyWknxBWborraMx1fZ6BH84BqFvv1z76jZZAQiTPDkFKYCsTNRhQ623516",
  "key10": "62oKf2cAt1ETYU2PamPaWhXZS8AGs27yRtq8TEWUAsXiQYVw9BJRhJ16tqV32jTzuL4mrrTXwWCBQrh7VVpTtFJq",
  "key11": "5vJEZnc2W5bGY9JE9SvCuZtBuMVBXgiBR4PnewKQFaYDHdyLCFoy1DPKyGHPKpv9yVK1j9DgdefCwLbPRMkEL6pW",
  "key12": "WPBJ4CKpirnk1uqq8DWigsMcikoT3gJmirbV53zQXAeiYfTMyW3x7ikYKpPi2jweFEtWeULgMiLnKPUztkyKPmo",
  "key13": "3XQQwn2ZQu8VtarXBmAYxToe8MQVR9VZ9m5kqrVixyTCuT6gwwnXZ1jKE2KFYqev8MGmPUSTQDqP3bqBSVPmLjjw",
  "key14": "5G4vHa6L1VrQPWBuBSn4hqJkuNrLPd1V7H6wkFWbJrPFzPBaxtiVPoWGUNweZZGumYg9Qi6VEv5TBaNKTwkrK81z",
  "key15": "4oJVygMsurFWAvEewBqSTCo5EbaGAHzhyGQ8fnuPZmqtfWK2Qbo2Ft45r6KxDoJRnsoj2tmSjDGt6gsbsYpY5Fck",
  "key16": "2xc6CiZ12BBUh1urNWur9RqedkLdxbkMy4saVUFCJPHwymHqzDyQUTUDZudf6KiR6K3FH6JPQQKKXXnu1CyCo4jY",
  "key17": "3XHdnQG1TKnf79sPUDXLMbRQq6CWFAK48XKmDizSJkUM7PtnL95Aescn7WkPE5tv5cgTbaWjGC5hg5HLxpGNaBpz",
  "key18": "nVfwaxLx8W7ihZC2ACqP2XEmdA77RB56WKUKzwNRXBbeBBCyGhEQV8iksm47f543eoKEBBgV9iDuJe8vdLTxJD9",
  "key19": "2MSZUCwfqiJr7rKdTGCuvfy9LNuuCwkjYgL13xPFyVesxND3gj43RhDDxQkPGXromzEK9NG6L5JapsNTG6tiCg3i",
  "key20": "52SaXornecNWyrpYhkkiTvktFB3gM8ZTHNNUvmWmKDp4gSWXByNrFEH1AYcT66h8xKUrgnkXHCQt5S7z8j6Tc663",
  "key21": "3aY4D2qHR8QVFKTaxeiSCeBf6NhKiDsZ7imEYirJhCcc8iikCXuAyxQ1peWe83NDGxvhtCVST4MKPuMjtjraFiCX",
  "key22": "4tVe277FttEqoeT3XxXkuEV7nEqEk7twTBgGjCyZLaxXfpNJ4Ri94MFpVhyTjH9cbaDj5YnBRXmGmzyhkH8gwhX4",
  "key23": "4m2zYp7g11ASUZ3jwTdNoPdfYNCL9QiYpSkEzkvhViFM5PZ96tajYf79rTAqxr9jAfFHhYUGCC2LKp7JFRgPLLwy",
  "key24": "3dTPHL9qokaVEYrTXuAWiTLrRfhwWvKnX4BfRNoFvju58DLUcD8Bvphf6vHgicJTjTixhxCNNnCrP6tpb6T4qRRt",
  "key25": "4fUzPRvbbiLnEMaetbq9nXyXxVVjhh9JMsNKvgLopY5aRmxge3AZH3z7TqaH52BaEtetjjaTs1wy18nw8sCwmEhV",
  "key26": "2RxpLZMBBKqMbLdBZBVvB3XcDfZAAi8cJNM67UZ8xNjGnqELv6kLtaj78LgqeBf9wosq7TWodjAAr2iAfiiEQFeB",
  "key27": "nTiruHaZEanMJm31Cag83u5zhEStwwFpfmXR3K622Sv9wxR1uraWXPCmCtBqSQixhx69gjrGZec9WSe8YTQsJxK",
  "key28": "66X7E2TrvVksk2joPqbcyQfx7n3dFqbN7iSsqtBVoUJwqhmNrHy4Ksvc1QRiRRgMkHLF9eBg9th86hhWSB43Kvmb",
  "key29": "gQNhwXyU8LUz7xT3YjdGGcQG7EPzmaomFzxMsKS6vLrchvhbHFx5QM9ZuQKAqScGniLkR4VmMy9UjzM719BtBPm"
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
