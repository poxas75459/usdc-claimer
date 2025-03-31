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
    "44RTQB7fbfixQzGgLRNtUJDDKcBMkHhJ9hmFoYKqhK4iE7eUDbMaxbfK567XeuGjhTLDaNFMHAnfSED2kVANKDYu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LwfGQzN3S85qYPgvXRnMMVnUeRnNosH84xzzXELh57wxJQc3VX4MAvvXmUqoRBMvuzcg2MgCVLPh7EC8B6msgn8",
  "key1": "2Pk5xj2h8gxmWmHpB7anqWKeq5ifQGQ8zn1yXw6sfhi2hH4UxR1ySzij6UZw5WAUJxfx1K5PimvSQ5zNmD96yxAF",
  "key2": "5QJZ1UNpA7UkfVd1zNGzTVoBHGx3kwSZjBinvrd9tRZSQm5JVaH6SqxVafxuQTtCDLwg2qdhpDU2yphoGZcvkujz",
  "key3": "21CbJuKnUB7a4LdsTxb6DgWJ5ewFeBxm7LtzmiRfK9u8zocCpnpNnb7TGZnxDnjWT9C4HfCTjSYMxszmK6imNwFH",
  "key4": "3z9tuHRJAU68SDEr1rhtQqt5LbXzTPnKnMdKyAtLvNx7G5T52dcXx2TwmEp26jGQZo2zx6c7tt4HxkNHukEnK24U",
  "key5": "4waqeqnFzZsL1srrSjyoetbWN9Bnv6ScAyEff62FnUrtTiLS8CQ2M8e3W6mhHqS3gGAtkoVAnL9CYXCxCPSR2EwU",
  "key6": "5vESd99kRhePeDia7ivzSjpFpkFSu9YL7EjfP8CGydkET8zLfXHw2zkTF7pR3QqGioHugg1piMGKgqXipmVp73ph",
  "key7": "5N7Tjq16rZ42u8FBj7pN63WKyGFWm8GqtYnTY2RRze8xhChiLfEEdD4dCiW8XaifpzQ9FBzPBWfb2wxq44B4kgjR",
  "key8": "2BFy1tBWopQWabLY3pieYNYPWZzujWZpNom7YUxQUyKC93nDyCFvr4Dge5RKw8wR6BchvG5g8WxnEdzWyoBGVFZH",
  "key9": "57HR5G9rGLY1JXTPRovKSNkLZFYi8reXmGvhr7f73b2CySToLXoRxc38Y87TXpNpB1GMBXgobFxWStx2G817FVUk",
  "key10": "CN2CqKiHks3SBNQrWtyv6B4Ziv7dHsmbWg88NJhzExkhLTmfMzmnaxVAWowgxiHFiXEwDnfjCJ5zXZz2k8ThDVM",
  "key11": "Z8FRwNcwCzxEKmDmSd2DSKMDs5DAwTASMMRvG1zcz2pJydxsjLpJsKBwxVRyNYaZaEWakg3kqPnxyffRqDwn3c9",
  "key12": "9t5T8J8RDCq6wVAhZFsVZpTD1eoKEGbGpjCsVyChFCMHj5LEMQzrGwJHNwCKa5864APjVsBRRm34ursXJGNTM4S",
  "key13": "JkMQuRuWzsxWkmqm9AVDkzF3AtR15aUMtA4MR544BbsFAiJwf2ZgoScJ6khP4XQeLBtZch4zwQ2ypNGUYyw11nL",
  "key14": "5henypvuUzpWR5G4wXfBdWuDNnCBdw48BMCuSx9CdkR8RFbHVNWwLNQZcwuSgur4e3VGUvC2ycgPRatq8ffkTw96",
  "key15": "3ZkKDzYXv2YKELuauxavVi6cVEeRdiRaLLytwu2jg2V7Zk1FoXZoDWJwNHEVLEGum2DE8RozjYKn6dzJq8zMxCEp",
  "key16": "4gwdbRoCbfUBEams6mHYUxzzqUQRHuHV55c39z91BHZLph3FMgwKbVPnZUA9j7pZqHivGHNQa9SqazV8JVTd37mQ",
  "key17": "3tiZxDhNsX3NaJUcW9GYnfpw21Czo9Zd5zbxytEEtdCR2sH5bJNgBiZzRPCWLrpmkbmPq9AGFuXpG8wnDTLN5GkH",
  "key18": "5yuPdY53ddznoa8bbHZZXm5aXUJupAg1CFHh2LYHHthE9oJxr6afGJsdGZngVwVbFFduvUvxBsH3j81HD73tAZ1B",
  "key19": "3FwaddmFHKuizz87MH9Ef3C5cnyz7HB5jAsAh9pHoNH2Pyz5bHEaPUojdf5aC8a9sHzPQyLzdEyc6UxmUHL27WPD",
  "key20": "4TuTuYTovBGFc7FkA4TygrD1ho2iM93hnnxFKv4qmYoMGdmjuqzqxPwRWMRkZBRzErZt9Ncd6G7vbDSqsn1D1Kn1",
  "key21": "4Xi2BELPgvrcy1gjpNdHEjRsBK44PyTvk59VPXD9pNW7vS844kWUcn5SLRs1kPy9DfNxqCuLXBjdToZQ7SKKkqNx",
  "key22": "Wo7SDE5Afsd76giJ9WSkhTNmm1ab9HK7Tv6A7BmwgRi86WW6jXwEYiNU4W66pRTnFfwrB6w8f4Q3SkYHU8VCYRv",
  "key23": "5VXL6PtBg7Cyr6MRPCQvu7LKk8GteuodhMGqnFzY43xTnBo6cLdbBecxyYXXVff3UwKE9MYgacrgyF3xJRZibdyT",
  "key24": "YKQ2uQ4Djt1CK7VQpcQrM9i4EgVig81jYMBY45rJx9AqZ8mfHCqu9bScgEkduciTgKHjE2vJ6km9vsCJU9sKZzs",
  "key25": "3PPzEGS7vqqKujs4Kt1GKiNP9rWMX4C1SGndtJvUengGz7z8mhF2bK3TzXFYskg6KGTFQ6u8dUkxcxRxsVFyB4sK",
  "key26": "2zsBK95fcqNRBjtc1dkhh5yk6cJMzYvmUGSUhU34Jdz9eEePAkfZMgG9ZjyVawoG3R9RZKQi3Wn6fdvzw5BWcHLY",
  "key27": "32VRvy5dmhr7LpTeTZAF87fce5a3GKEGEFgmqcjJaFK8KHCcKQrsobePXWzkvKiRXCUVFf1pHweQjwgXNdjTCjjc",
  "key28": "4v1zPQRcmhffA2QP89w5etKdZdFHpehHBCdhj67L8vWSX3NfCiGu7Ny68TbzQynY3zh3vRzZFbSwF2xPMbawmFD",
  "key29": "4hEm7ZNVjCziwFGLb3tZwRTJd3mbHr5eZML5er2PauDTymncqRXSrQr4EfpNtEMv1Qc1jqP96bZnk2UbbGJmTcwG",
  "key30": "2k5TvZhgiSs5mj55w3o63tTdD3cytoqWBbVVvmbSH3MW3m5rXgZT2VVJa4kqJc6EuykYDLXdmRWa6xN6PUP3TmZo",
  "key31": "52y19KC7b2fqdd4266asaRjwjTPAGRxSFX9zUzJZAaq8PmzwXmWzmMXH6anQ3s7NWSTiByRmAwF49sKgpbSvzZKN",
  "key32": "3bbkgs1db5k5HSB2zRfF3mzZakBvRcX5j9KyQCUGnf6W6suv9e3csUu3kCnxXxE9DkyqRMQCjnz4NXSUs5jBiJQJ",
  "key33": "zoppyi8K1tBiaxSmCcMbgVyhV5g3QJirUTJUHtehoRsLEdNcREge8bQrNL8BWxrZwjgHoASdvcZTsdBF1oLHpGN",
  "key34": "2eTFW99mFQfgPpTnFaiJD3Q3oHznJtXaciLZ8Qt6MkrkugY2h41XxdYZui4DuBZNKxVRNwDgtqiwMtkRjWR3WrWW",
  "key35": "KwU8H2ukbRFBWR1jjR5kd5V39SH95RjA9eCTGofaWkS7VdxayMico475o7cj2ucLHvNjVsF64w56odTFZCQohEb",
  "key36": "42hT6FMC4qPP1QVji3zs4GREogVKwgziAbHxaijLh2LHMpYtB1m7N61V2d23fCK96CkGntvMAARiEssT2xxXtjrt",
  "key37": "5AWhpcA7UKKDyUGEgHrEKnRwsAFDXQ8r6jfaQYr2nbcLmvY2Nw1o3Ywff9G59pWXCrkheqUXF3j6xtGUa6a3PdSV",
  "key38": "47RYLcKjJqGUrhZsrKx3ni7dPsTx7kCZz8HVCx4EA1ob2Va1k92s49KWZAGmco4bHbL8HVwkbdwR2MgkoWx8sXFn",
  "key39": "5jyqfZiMBdTnUT9vAmxBLq1idKMrKiTidyNLGU54UdE1BWnwmasuZx5wASRq8SVZyy83TCWgFJWj7bD81v964rj4",
  "key40": "5KkpyfFhL3DpmU72veiZgJpcP2YYWmuqkZqALoroQ3gECYMmDQ5Kjt3g8obJ895YCuzKQEnU2nHPEVxe2tApJnFo",
  "key41": "38wfWrJK1dNZq6Bp3MY9voDLUbpyuGcmDAUHa5ooS2TXzsL4pwfGqVTsuNUvccw3LDy2BJ6i1kG9Uwik4bv9wTBi",
  "key42": "2cFypAkLWX9UK8DKKCMHKvDzn2QMn5YDSQ3a6hXCnX5L2A9QE2DvZKYa2MqdsC3ZSefK2sawy7xqP2zcBnY5eyH8",
  "key43": "2PGr5LY3wKN4p83HnixtpEtAptVC1JsscmWp7m7SDAyvdn6K3RkAHPhwMxWFuukHujPryuFQoXHGFnfFqsk4YjMN",
  "key44": "2EiYK3vSKB6WEDv8ncz9sbomS7moLXVWgyMBkBwMKHDfubzAHioyMy7T1tJGGfys4569GgS2zKqCiGCcg7Fc79TP",
  "key45": "UWxfbaHU22aGGqDr8sskxUVoj5njG2vSHszwwpWEaiURMpMSnBnsZ86WpZsSuSY6ezHGFF1LrCTVTDAazSUTTuL",
  "key46": "2PudF7r5sX8syRz131jV7fPnQBY7R48K8tkMqbASzFkNtgtG99SDUPqHeNXP5HkHAaWcSKiE96751mfRbmcUR8rb",
  "key47": "5Ahx3FDbzf8hSHdHPUE4H8d9SDXnbRx6HeXGQRKJhFCT3vLrxzYe9r4oHVgxws3NiNKjZNdTJwZbj6PLG8uY6me2",
  "key48": "3Vxb2aknybQyHXrg98vwzAS7enxMCCybV7m1YwXqiMk1LTebNt2SyCj45e3A5dj8MUMkV1ng6sgPmaqJ1GNHYFNW"
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
