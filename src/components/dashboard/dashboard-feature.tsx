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
    "5prsJg5iJQdNUbxDdbV8Hf7Mz697mUke6bi567FU86pS6D2oXJQLAxEqwi26uYxKELCFWsJyZDnevS4KJ7Zb9WV6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nbAPSP3rbfULmJ8fdvC9APMDwE8APvRkwRwihsUBqTyrCsQsBDNyStsymCgWYfseTXYEQa3dZxTRxWrpFaxJHXN",
  "key1": "kFS4WvhoDT5PYH9d6Ys1n9HFoS3uDAbQLdtQA5Gw1BPX1dAyoRR3NQvLx87FDtozk7nyRaLpiLYchBnydDzM8KQ",
  "key2": "5BfqrhwuX8a2XRK6sLrAk97Yv8dGV81Q66hKYAEtGWkfxtT6UscZnh6gAv5C9F2w17ogGFSBgpD6hAW62youWAvc",
  "key3": "5MQ73gNjGUrxhxP689vtdXtpTcPCLs3xCeBubzJwqri62fKfUQTmZEnRTopjmzhhagWxCLK1edqkS2kL9JM8Crfk",
  "key4": "BJKzSqgdRQ7uoDVpfeEeFEoVvkFcosaGP1xcNuue5TNFb7e2rikMCf23oDwBEnYvFmYve8yAG5RoHSQK1NGCLvF",
  "key5": "KrokaDtYTYanLVBpBVkeSTFGtoMPbzbphqjzn9FCo4xsLS8iU6PucK8cyo7DVgFu9zoJLqxLLWehn7hkkjrcgBW",
  "key6": "5jMCRjtWFKijbsQYvQy6aaYwHfeJZw2eCKsi7FEDKw5RRCLEDfy7oXUwBTUNJig7n5qwJf6cKLmsZREquascKZL7",
  "key7": "5p9Q6w7G6vc2pNJL94mZu4oRXEknyhu2mYjACwPAPCPxJd8MN5xb9fgJSb6YAX68sJeEEBCTodCkVALsCdZCReuG",
  "key8": "UZH5ZQEL2wSvGUWcemh2DCZWsCXBcCyPGSsnT3jf4DuT2sKjNWajF7xNhETwByMJLsdbjvHnbvWbRA8FPsVUyUT",
  "key9": "4Yzx8NpbzWBWUptJ6s3QXDCe1Wxjj6VWzWvUCzHUyhQ6QBGb7RXECshfp48g25mBS1gsWB31mjSfS4h3f2D8pyAL",
  "key10": "54ZmyGqNBuJJcQRemNZcErsk1s7bjnrd9zaEUf2D1MvoaAdUAoq3UfSFsTWiLVnkM6XE6MHcCjnmRaVKTZ3ds77T",
  "key11": "4sa4bdig9cJu3aP9gCndNwHpepnu7urD2MNUCMpAQ35P8RUAJt5oqUUjUUdYDWBPEt1kP84eDuknsseQtftS9cZT",
  "key12": "2fuYBsuuHL1qdQq3BYvXAyMHsh2KRGe1Y3ADJL4m3vkRot83sWBKHhE3zkag295avkMLhy3y5KY1Y8i1TYEDYJuU",
  "key13": "5Le3vjhWdsaAuyvm3KQwK1HVmyVshPwEc8E2eeyCcHjjYb1NGHxXyMtoQzsxz8CiPA9Pit5UHYMjx5QjibkSBaoK",
  "key14": "5wcVDx2ZjFxd3ykwUWVkJ92CusgysKFAJ7J21KqXoTuoZmd8VCKnkCtUt4o5UxXpQYryTXqqVTfUyVrdEfnktrY9",
  "key15": "49n3TeHH9nUjWqmzc1hsDbLqLPc87FCayaU6PjvDczLTicgYCZCYo2zpUe9zPjMYdbnhnjAyR1wpjTi78KLAMcsW",
  "key16": "4MkeHZQ3xmZAYcGsGKLrqepq9njWpL2zQiUDaYForRTU2cMfaj6LgWKZGPue1jvsup1phnt9TYMdHwCHDfnA2zFN",
  "key17": "5NnWbi86dcoeT5tKP2oJ6HVVEzMYffVPrHe1gs9R4j1zNGwL4tJKiBKMYJjYddtaVVdk97cxENqkBFXDCLaVKz4F",
  "key18": "3Vo26tkQVxwXnuGJB998CU1RZACVWgJg2qs3EKyJQF9uS6QKdgQ6K7oQjiREXe6TSj4QpZH8DSFyUaRXDN9GgGiC",
  "key19": "4kaAULQ6oVbcBDWPSvUyhK3xhtdmeJVK9kt2y7njDfTKJJe5DHahiPAXDZote5WCkhUM2mQzftSFPT1ZHfJDy7JJ",
  "key20": "63wbkxUdBp2n1bNiSo29pmdEHQi3PY5LoYkAxUPmZkPm5qeo15KcvhwXS4U8qUKh7SgP4BGtRYgbwAWswTezcZ5k",
  "key21": "21Ybekx8Vcs2oUE96kaRcm3hvrxPSc977Nw9BqiCsxcDAwxPc64bsuSzzB2SkGYjuwJWHHEeP4Q77De4wQgqjfSE",
  "key22": "2Ct2MbbKeRbUGnD6w8pw5C6MnM4Nd6dyeqGZkUU3eK1vNrEvk8wQH6dVtmtnSo4hJJAqWMwhQSA4ZpidnWx4hymH",
  "key23": "2j2JinDBJe5NUnJDMJ6Fkb8oGSWM2RHa3UEkUrhnFVMVFaRAQRs8xiJk8UozzusViRxZ9JY4buawtxPgEfP6oxPm",
  "key24": "4WvLz3n2nj8HN5mkU7ginjecDVmkbLXZJ3HrsppdpZ8NtxuzpGuDTaxuqjDp4ZdyCNzszMZGM2McAXrX1oyknT33",
  "key25": "5qe35bxtNZbhUJerSXha1CR7DyqGgFC1tmqGy2JVPRCU3o1C4B6g5kRDqcEw5dBWy8xzpTLa6T8qJPyEh4xjRNYC",
  "key26": "2o3cPLFBy7T4tdamHnJ7DRTMopYt4LWTVamYeCXXgk7v7DQ6EKDNbp9B7nA8byZezjCXKG4scVhJgMeArvVHhgPa",
  "key27": "4UQTynkJJn8zgSP71v4rqPkMwnZaq3T6G47v5rtYrrSXvThSHJurKtPFVqdCeM7U3x8zmpLNmGyDtJVsGeSSbRVB"
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
