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
    "2afe7NcVSCvYPZ5EqZJt1DWgcVS8su4meZJpNDuoDhwcpwR5udTfxViwPQeCkzf2RMh6KuuoNSpihn2GS121FG8E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28XRXPXhyKNoTHwc2XHoTvCEsrri9oYJT3Qbvwnvpy4SRALdiCs5o8Mskjz78t1D9BZwfHYB1HwMRGz8MtpuDVtC",
  "key1": "4U4ZZWVmKqmpZtqUQhngMreR7oizHKnj47cTzCUwzXWWb56CZest1r7rSp9VZpJAR4WRwM19k8Q6RUC4kTNm5H9m",
  "key2": "5NpEUU9gceDX3H4RS17tMUfKTnkGz5PiAnn3BF2ySiexZVsBRDytj2dDAVkCHW7MVNnaepLnK8E86wwPSLZHr3fq",
  "key3": "4aBuW4Vm6zLpMrpq4MaTgnH95FLCdVx5tJDaBf1MUqwK3Eofu5y3sA2qHPPQsPiwXKNiEi1woQrzPhh8XXif9oop",
  "key4": "3qV1vHWew7n1rDtxi9mQL6nDGSakKj5h3NwbshZjLYtZtSRkFPimyWN4SsF6EbsVbLfNdBLk5afZcmcgd4DJmnTK",
  "key5": "C4N1oddKL1uYXToAmE7Yn1byS9W1ayagcvjyMNBA2F5gax3QMkxGbPjKc5pQSrGnvE8nP1nfx8RCiQWiCsDPCVK",
  "key6": "DgtMEuXyigSXVnzF8KuKuynMn5GWi6dN33sCwNBDQ2RTSJB9k9hsWXUQZR2SibAkZNDZF9JzdJEtR2YkjpTwUSE",
  "key7": "3pb6kYao9s4ickDUJWFmMyJPmRfn6HbXbbg9Ate4JfViThNdrC5iZPQNJbfiyQK8kJmwFeQLMpabsCbEn5xhkTLj",
  "key8": "2LbWNXxZfE3LhHmi2cTfzvf5EAvb6zya7TXZ3vZLMDL9zuKMYJJnkHKLJEr4tSpoxM2UyCRHB84qaEQ7fXBwC1Fk",
  "key9": "2s4voSYyfoFsYEapxJwBT1945ruqD6Xv9diQ8VChddKbFtJMU82qCv9DyuRHZcZgHKNaFSfZLNgEgC2LKgFgQLVY",
  "key10": "4m6fScMFLgZ7n3m5EbStfYthULb8jAxhxCv8cVDwcad4BdriynnquznSQKCEpSJ969XzhcbaSUbv7gMLgJepc71P",
  "key11": "F6Y2CMry7XQLZu7TLAMMG79BBTR16XJ7zPF9uzTGWcsivp3Lw2NaGNCeWJESFKUT8ZgCksSe3zTWwXxFSqNZerb",
  "key12": "5WtgZCsKnm2AXETuRE9H3Gb2rrsZS59o97FNsW4nhW9pKLMsAuxbtRDd31EhiNJJLKX2S226Ff9HrpNpoTY42jVU",
  "key13": "4uNAU3X9wqdUJEBni4CgtW52dBMoXPUadQPANKHiuNaywLTYEhHQ938h7n3q8UFuyLLeb3gNtHkCix5hBcE9ZYbo",
  "key14": "6Lzi3sWkBfTJLBuPBETEz281co8mPy7PGSCCLA1EaQFwoSSnvybSoY3dxb1f7mXY4uCvwKj2RtYsge8HRSrEJGY",
  "key15": "3c7xE7rKqayjUWtkrkePfsxwrvEommSwqepzCfud1oxj3mk9ajXsR4Mw27squqwcu3UJr2oXrX5ShPnM2skKuMft",
  "key16": "5GZoTCW2iPZZt4YfiS2v5dptKtCvahucgauGpt5cWsGL6U7MQkwZBMVYRnfNN4kTcucm5MfSZckKZe5gWdKR91tp",
  "key17": "4AyUWjE8MGWTQJcApMxm29vSgZp4HACgNpRu1hdguPWHMuchf9hzKwQLiDPnSk5uwLaArSwdyx1kmiNDVjgcJGRQ",
  "key18": "3DyuNg4dp9wACCgnicP2Edm6VW6VE5mpAp41n7YiyfSQZWnJnmbMPi3bBL9JSzZpecGp7xcjcpwFF1zntEtaS4qx",
  "key19": "5JG7SNYLwEWFuSyBbuWC9SHUZ7A9B3naVYQ8QveccgeoMNoYjswrrZVCf9areXso2NpTYu5HRSkMxKSh6tzaobtB",
  "key20": "4WUfunWT8Zfu77q3dhPCFsXAUqJpwK2A3mFSPqQ5HMG5kvSrsEbeddzxL3Us3CD2bS7JoqvnMRPAgj74gGavpb9q",
  "key21": "46ZzwYvuzNQ21yjZNLUAsToHM1eZtLYURznnAsasTKNfsKGjFPn8B49xfATJCberVBEtAWeVJDyNTuYu5V2SsJ9P",
  "key22": "3zK76LdBb85wvowTVkn6woC8kuHce6WNffmBbbVXMDjSTeWraMZXwuh9nc871LXV7oFBnYvSqsLtHJv9g5fVkqDw",
  "key23": "2YEsoFaZ282wP9LrRCqLF87rceb3f8SCvKm2Jvf9o3tg7Azn5VpTG1SwDuKKt9s2TAnMDcdgNjH5JFziva7su7SR",
  "key24": "2Uuyx2kT8nqDF345ciQMghmwysqRqVCy8HFt6UVFkeCEZCM8J6Fekzbu6VQXNthYZCDYtkCtirQMdF51o9L1WxhV",
  "key25": "5f2X2r9uBMwQyfAa6j4JroHPzJ3bwXRghPb8T3vM2VMgdR4ZLbc3y1UPn6MNJkixajvdXcjZFNBVprYT3TiCzLMf",
  "key26": "28XFnuPi6HUiGMs4dhMtkF42rbykVbvVW9b1rHXskKeajNpQrbLucRfHQQ2nJdXMfAs7wzYAn8a5YvgKVuGYge1G",
  "key27": "3JP9y4UwQsfnx58bCRaP8HQziXJj2cPxgTLMsgvS5oerznzGM4a1T6bZzeNNEQjjWfCkMgkK5Z3i59byTUFCR5LP",
  "key28": "5D63TWwEZ4RjLsLY1uGqm1zGs5Z6GXqh3WRGDEojr29CGqANM3UzEwUaGK61zddV1vcSVRqfwSA7qxgHbdKrTjJA",
  "key29": "2fBC2tSsumdR3mXsc5x58kfbJ8XER2T3TEwFXKBHCiDdC5FU7xURzPdvhDqK7XzzNzEWUqsgf3MisCvZkjQJxB7b",
  "key30": "5gS5WAw6MHvvgeEAQu6PCqwFrrwe1Gc5GHbbvTYU68WHBkxNUJ2Q17iVqofhjA9EmoYmsbzrwBYnMwbQVwyY5xGJ",
  "key31": "58mQV86Q6RaWj8MVc6jwsfAw85GKMUpNRcYpRMNzfu8qTGckDX4yizRBT7bBRdkr9sT9em84gCMbokyXCMRfU1t5",
  "key32": "jqZphPjmwnVjuZCRWKVzDrP4ESU6gDAMjgv1hAMKbisCpkdtEDA7mXEo3cSMiNwBKJ7SUmsARXoALX8tEpvzMeP",
  "key33": "3yGrS4XT9JpxWBihVgCu4b6LoX1dJCd24MB87zuFEhjmpvizgsMwMZKFKn6fshDvMBuNTfVZSbQX9Tqz2uMAeyjh",
  "key34": "WfgarWBafcAwzzqo2yCXEXUFtjRHjuMfQh59S7CKprkXCLb9psnvmaCR3c4LebsYbLx1N2eBWhdfeDjauUnGnJp",
  "key35": "PRSto1N2ruk542CZepJZgekdxvDjcnkCxfXQ31d6CP6owdhGQzsyTd35jFU2HRBCtrpca3F9CUvxX3DGTMREZfM",
  "key36": "395nUSiT2YwKVHeCAvnJEXesSkyZQ1ZbvpPTTmDmUHxzDDXBZ89Bv9gGAshQMV4sf8N3dvX6XvmRs3jDmGMgX2Nk",
  "key37": "4LLnoZmd2k9h3Haigz74bfdTRAEicnKNYsmeLdaaQ7v7fRFeFtGuqRJCojDNhjv8ZNZRXnCtkdtRAfA2XrsDeMMf",
  "key38": "2ud1XXrD7kFLfDHyeykCNNbwR59hSvyDfEfVnaSqHMG728WCEJsE8r9v5cb7uP9Gad4q9FJWJmY5xfiBzuwDrSrq",
  "key39": "Cf8APiA1VPVBuGdnKnUUAC6HsCHsaaQAH1eG1PexbFkDrMjrbdFW1gvPjwidTdd36moe5whrDvUVLRXTJjLRUz1",
  "key40": "3fLrks8iwqSsJPWvM3VWGWcenZ19j6fMPV8zSPFeQcJe5giAKFGhRozKKZsq48WTUFcziPfP62vheSWozBbpwCNH",
  "key41": "3HkSKWNHSFyXP35QgQLvn15xVJijyANNzEihtghDcBxHezqRaFPXABZ5P5R6EQSPYjHvsE8op41dkC4MycXrCePr",
  "key42": "64CJDt61c5aoD3cej5nTaaXU5nivkeWesbDcCFf5FE5M7YDFU2q8tNpj3igJurCczQS8Dgq8cLTQ7ck1LL45qMr9",
  "key43": "Z3ZzDEymMtnv5mLwXCN5LRP1VPoF2mRfniuPvAMPrW19TRL9nYwd5ehLUnNbBRfbqYrAh87bBuJvcpYVXUKJSqw",
  "key44": "44C6q2fJmPKgzDsVrMXenPtwpcTMQCj7QETT2uMPf4kNmJJDKiuyYMbawNvesHwBYQ18PYY9gUHPmddkAGGtV2ha",
  "key45": "2WHtJZCp2okXs8oLQQntPsn4BPARVBQgYqDaUiccqB2NcHebUDwu1rF2zjW81MANpp8E4BeyrvKKamfEcpaXtBPT"
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
