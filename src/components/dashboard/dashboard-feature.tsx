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
    "3wVBopxmUdvmJZjB7a7pw3RuAHT4XtjCZSaSohnzAZeaexNbuW41LbVYwFZZwnoZDJoJHxYRbHQSiqPHRYvXSSRt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b4aUZ2DXKdSXWQDzcAAThGZRQDyb1XoxxcM28iNB6NHTgMsWHKieXBJmNbaipHuVZwDs8vWNMcp6hKyy3ZVB3eb",
  "key1": "oV5XFBgQpsenVGxvQ3Z2RU4gURQD2QS5mTYMutX1uYQqM3Cc5Pc24GCveg51kc6Fra71iT63hb5yM7BJsAJE9X7",
  "key2": "qH7UxdCrtz8PwDZmEPCwwaY8QDXn9JaQgEav5QYXJtVBMG3RvgvqQc2KYSjYx1wBxuGdaw6DaNqSEKZDhGAR9Hg",
  "key3": "3GW9LNdjX1TghiaZvGAxNh3kwGEAYYbqR9RpCiBUbG15yJbAz1bG4jPUzoSkVJDmUrhyXMb2nzYoFn5KPGMJKfqQ",
  "key4": "59RBbxFNpgC5DF7rxHARK26dffXEWfR61qHuXaeqxqf2DSAPMC21vrixAGonpQhWNiS7kKHj4UALxXjaYxMaKXHA",
  "key5": "2h423ArHgmt89mdptJ4mvH8srgvLV9sf3oqCQrKJZhMDFzEXZroQMbLp38XRd7CGQ32hU2uFwvVSo25pZakHRDUv",
  "key6": "4AB3ttYg4kcCHu1omsi4rQuZnCSgyzCSqAjUdNzo9DEKsVRNcLtHDsGahjtmP18CpzcboAZLhtgFLsN8NdzuwKiu",
  "key7": "4btDgcDod9ebumDHk3RoRWK2uMDPB98om5dEaRbcjTugjbDURvwg5L2qaG4CxCAPciTauYXn9WnYqKn3XrK4UFiV",
  "key8": "4SJbrAkTyax56rdkZm6ogTy2L7as6sSecmAjC9Xb3Rt9WvM4sHtQpsHSv8DDBeEkWvqwrcenchobp78NTjhvPcwj",
  "key9": "3LsPHhr5sWdrDHAzoJqbdLVWrnwmMqVuVQ34CvyuCEVotsdregrFMFTrfM5TDd3rqA8NMdQDXHUFeHr66tsyutRF",
  "key10": "4PdPsDV9af7XPwHgPxJ1EeMygZ8JtiXC9GTDntXwzAfMtzJb5F8bBhH3Q9X84MeKqM662FMveBxEahcS4sNoT7NV",
  "key11": "2Teg2bYzC6GkpMHhykUUXy6o4HPgERP8s1HePheNGw8TnsqBz2bEiB4c8XkE5kv5VQXBSxhP1NVJNY7gmiiwZXX6",
  "key12": "3anTzCif6VpStnzrKTVTUoYMcP7jHfCwcdoxEaRj1rcwVp9t9Dw75YbfP2WUyES1x6fcFtGkUXBaW6r3D5mh1pMn",
  "key13": "62jPk64wAcTBgX2titjNcGF1u8ZmFyDULKVyEXDiSjKaKDMSRcNjtEmZrPoBVfuWeSCWa5rdY2MiVjwaJemMXYS5",
  "key14": "ue2wzy6KR2W2gMsyMtVAs5isuykGEpzCoKcBMoGGDY1RU6bBcAsXpF4obZPmRScZWSH4cpJJMKtyP47A9BkKGbT",
  "key15": "4YE4Sa4VEeNpwVTEp9C4hwvQNrHCDBCCqBASED5JyiCLgE5tMeyYemycYVYZGrzdfQUWXNGAtagZbTXfYQUqGnU",
  "key16": "FegVUPjhiit5nieQeBY8zE5iRdAPxF6WtqAasZLkYmYH8UhwVeNnxg9rdhGgYi4ZQgY2mMntikLh2oZ8svtfUzo",
  "key17": "bjPQXe3V7GLuq9Ty6kiBGGfEX38HPPoMZARtjjpUkD7cEmxfnukMi1ai6kr3iVRjJRpEsGeU1AugeU1ttM1yBgy",
  "key18": "2yprwrMLFK785RR81JefsB9Uc9w9eFs6Jv7PKPT3LVchTBx1wKUu2eQrJx7RKbsgH5Y2B2tDnWuS1W7LNK6VoFXj",
  "key19": "GNLE4jvVhArXZANwBdGpZFjFem5KtwGgQJ4GtaDkt6sPKgLAp91VEHKihNSXUdpwaYKAgL3wgAMP3sU1UqxkpPW",
  "key20": "2VaAHA25k2zFroqegt5fvngcc6BZUVyiRBiGLtfD4L567JqydgjxDQEe5vUXHKZJ1XGfJomtMvd8hHDKRWMgmUKo",
  "key21": "4jSBCEKycRTGpcxuDKaxBJVXKBxpabim2vSKNhg2aNyw2w2R8et62KmTTBnpFNpV2zf3kYF5QB2EgfwJpmscSZMr",
  "key22": "2vrDjvfVCHogseTM5pSgvLe1azBeQYYREsNcpKoxuBWZUuaSxBkZgW7mjkwS5vX4W4axyrgMFW8qr7nFykCGb9aW",
  "key23": "2ehjHX9N7svhyFAaGNmQF7xU3QJvK3b89r8UUjbSRVctpAhpndapYdYFNcQbRm8NPZnvXhQYMBb7zMgEwGDyVAuv",
  "key24": "4DMvhPGBMokaitmuP5Z9bBXCt2Uph3m8gXEshy48uwKTmM7nMWNdV3jKC2uutQo2dACsLi3x5uqxnZwzwXbmmryY",
  "key25": "vMedtb73bwQcyTqLyXPeTfA9LbeegDrLVzXEzViXxPbLnofKY5RVVCKpBFE8qpK6kTB38NiiKg7Wgtqbt4ZNj2Y",
  "key26": "5piwK8muyXKrKcoSZQzJ1JEiTWEmvaqsU3GXPBTzNt9Nj1jrwzayePZDc4us7ThSMULkwMtcQAvJvCzoiKEAeQnQ",
  "key27": "3jXw9GtGByPMBCSzQ3YjZwtWTLREXQXSMBWVXCjc7jSqG8DNtsNXuyh5X69scLSUXhG1wJ9PsUTowoK955ZCd7Sk",
  "key28": "3KhHVAKa8NVYamKUK1PMsFyok5JtQi7nqGmNTAqpTCuNVYNnNt9n7p5FC4oxcveWSQfanKZ7Lwc4VqgziJSh75VS",
  "key29": "9opnTMQiyST3uX3LhKzvSdMBwSu57qhe9pizS2qT1J8Fw7Sgs3xZ7JQtS79LgR4ph8KH6XoE2QWMxFV8tDB87A5",
  "key30": "4zu1eFjtEKmcgYU653yMQBGz6X5Mkj3E86GWYi2oPsrryJkYoep7v6YnSXUky4uow5NNBiFqgG6w4xfJkSmo3L9M",
  "key31": "2uT7X1DeJkE3o8mXBFcxVeYAnZoDcF572gnX6n2pkuSci3A2bMNeVxSn6Dfn1KLkByZXYZC88REYyfs1EsJK2VNs",
  "key32": "2QD6v4Stnkeum9Y69nW12ck75nZxvhF9cEwycA18xnduUanr2uVaj91KYiWYGjGREs64feDyJZSCkf2hoXbneQGf",
  "key33": "5nYwEjGuXnDwuvVonhmmVaYpXJuxoTKz954VVWUZuFbrre1jA2kMZAbcHiTW85AVLZnuqhGwpjyzt8AcTrzws6cF",
  "key34": "5DqwWFW6FMwR49yfpb1JLRKC2wGEansGAUE2qSw4MojQq9r9mmcArJW9pRsjUD1QNpsofA2qMG6wQKGMsbPt18C7"
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
