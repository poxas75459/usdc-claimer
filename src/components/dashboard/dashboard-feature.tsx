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
    "3GLuS2Be7P9e1BD7FBankadhW4JLVsQK7ewWpCLfkiCTDSTYtngLxt4Xe77m4qCmD7SaDfNMMQFcbULbCfYVwQtJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s7Y2MQSua6LVghq8qvPasJ9eksonNPypXZArE74mq7dUzm7nUFkXHMYqYvr4D3czehZkRTrt7HoYU2nhUyNYaYK",
  "key1": "ZHc2UqDXS3A9wmTPxz8n6BjHs9nzDzmWVYWecFq6XiPcnLcjFZrzJrJHnaaRy5LZPXjKvf3TVGute1owYBFFVc8",
  "key2": "R63QNQw9uqAewbJJrxVehw1cbdVBNbhmuxib2h1SGGSHbmq8b8puJod4nk9YtXYDSrEJrZBLHAWyEMPKg5aVwQx",
  "key3": "45GKAY3XHSgthxVcr5J2TiEeqHYKuqh1RwKS4u3xTAbceG6wKKjjVi2aTXLXJxVuUvNUkaHwGcDFhvrZWsKccFJa",
  "key4": "3qgfuhP1BNUG1iDY2EqYLSvH4SEUzgQLQCe3UvYCDyiYLzUKRJKCapzBZ89zmQupjHQFVpVoopYScc3u2tRG2MeV",
  "key5": "566nw5hSPC6o5cqxiGKgim41dDyMxWgMS9Q21Jtbfckif98uu1KZd1CZYoMxwY3wEn2PNUiQf3ojhZx5HJcqaV9G",
  "key6": "rurLmsyqS2Pm5v9TF7L7iciuwGq4pngfrMWMr2fcCEMmtEZFzQcQVV5bemmjsGvUZKW3o71HX56V9rfFATu3FPc",
  "key7": "3pLMm6fjCAqEvisEkzgvcS4smuiDmz5YfxLazVhR2XZGURicMaEdNQYEzE617oXnDBYGfvdUsJaNJoi5FPHfNf5i",
  "key8": "4x5WpVfe9R9E9BEZXBZZgjcNSgZqZV21upNgEXySCryZT4PnMhUzcRDcnmyErDnMkzQ7Mi8yMZAvKoyEmhV1HjMc",
  "key9": "3MPMng8tRwhSiXqViX6RfZjHnwkgek4suFypiTpx6Z97DA2mhXof39ZEXfRBFAozcULgh8shf4YQjGbBybGwD4G",
  "key10": "44tsEGBTfxd5ajugAMwccDqsHVRpMfKhxQoANSnVuYfpa9Hsqt2xYG65vFHRN7GD6mWVoaZZwKLYq5V8imSmJFcD",
  "key11": "XsRy9wWUjiE8fcKXXJznVmp1mqSvpVGFr5wzLXPCfknY8tLztvLaN6mqfzRXCk9FLrdXMySAsL6tKLZ6XpEGn1z",
  "key12": "2JvE2MGBscwg7YqvGpx7NAqPhnAd3cBr9oTBP5be2pm8UQR7kWTK2HfkBotQnv8aJZq59d7PvCH8fysau43gjA6z",
  "key13": "3XN4F4Nu2xWXZ9fdBZCiwX8DUJh3sxhR9LA7s3c9wZANnSpiepxHNr43wL41tZeENR855of52mwjud6HWTQ9A59C",
  "key14": "4H1L2bpFKoXh65YqxGuQ6jnC8PszsKk2dypKcbVX3pR4mQfp1v6E4yQ26MGsf8PMWLZ8C3pwWz4FBGjk9FLNwsgr",
  "key15": "47ESMdyotBk9h81NCvAXXXRaKVQMjZCW8qJuWUR48z3wgZreqZKMv5daWq5fMgcnALhGzsaKNjvsn2XYJMjF3hMF",
  "key16": "5W3855xULzxuWmvtSS7p4SUr9UY75pda334jLvYN24UUYaHRmm7kHCYR17FJiUdYdzFqmoCswQqxzQRQhG5HWHzx",
  "key17": "2WpDFUFYk679iH2GfMqZYeoQttRohfoqzsQq3gW2bbxcRQH6UwaBhvuKqXNKFdqHscQmdf7N2kXeEQ5j6PpSJk6x",
  "key18": "3Jigecqm7Mq59zWB29NVA42DMwfNZihgtX4ufGEeBjr1sfNERMJuPx3tvhoAajeQAqGCpF8icVR1EKo3Y1Xuo9KN",
  "key19": "4P1gkwcnE9n7pvnHvDPhbTJLa8iwAFELy22sgh1xVFEGnHbwcNGprdHiTUbbR2sc653rqf9q6PMdsyRdr8PzMqee",
  "key20": "m7Bu2WXaFoH71sqfXdKCM7AL7kr49XUtCyx4MNGaZyuqMokSahRQ4EdUMJ82AqPthvrKTVC7XCyXagtBfpo6VaK",
  "key21": "2WhyAmyHMFoxLWMLGU4ESSmpXNAJx4sqFKVatq1hqVuGZj8zQWrEWyZwAPFEEe4BqWSiHfFX8XZe9YJwdDTG5TYr",
  "key22": "5C9fabjVka2kNZ1ntcJs7TazQLzYSgZZhKSxMz2hBPK53aCWK38iFsggZMFyYHEzRNFUyyMNZyxcjnvZFg9YVAdg",
  "key23": "2tw5ME9PUwAbw8ajtuxdKB5NAvssYtBS4R6ka1rU3txGiNpxKWM85kz7TCZrpnfxRHmW3pdPR9cgtS2Xk1HMQBEA",
  "key24": "31rjyCqVG1yEbt1k3ssUskWLSRCbtxMWEz3J8A3DDr3EfE6kG8aqDF3K4ucDRn24WjWvz1qMvPsR97xLHf5ovMCL",
  "key25": "3cTHJF5sa6hAKgWiYqMaiCGzxaCh5qo6YBmLuNXhJc97U7Ayfyj1jyuqVG4yzok9NnSqZRnDhPyRty5X9odewr7D",
  "key26": "qsdKtP689b7jrPG1gbEFNTjGyL3A5oB93avSgXqBywjY7x4oLGz8EZ1wymATjiu58QLdgprUypgvJTYcd5wM44A",
  "key27": "5kZsStvYjDKB56uPL6J4HNtdYrxocyUf8TeBgBMRe96cgZR1oQC413RvbJEqRp7FL5rti33iPgVSYbiDSh367HEN",
  "key28": "3S96gjEY8zqcvf1P9DDooVnLLPRpqBkFXRs4uaFC8p8xTHaZQUnWjzigUvC3GgReLDS9SUJGE4ksHTWvpyEMECta",
  "key29": "5s1kf6DJAaf6fcdP842b7gbMatyKDxMMMnxHhcUeAEy4uUYyBHm3y5eskGcCo53MR7i62uj54ACt3zinDoFxNyYF"
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
