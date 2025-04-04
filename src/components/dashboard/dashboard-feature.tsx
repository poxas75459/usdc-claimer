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
    "56puir1WrVA3Zik58MPGKPeQte9FW4Mp6GR5edcitv8UajEpdWu4ix987RZt1znViNZizjszzZyda9jetobbXdM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zFqGk5287v5ARFtbwgUtbRZkovXxK3ALyJsjzeDEt6UYkUMURyg7c8Nyn7QfPH3DeErq7nzwhiMCpDHLkuK3oJ3",
  "key1": "JcQRVmM48TMk9W83tHEwULicbN3xnsaHE9AiV9tFAkstkf4GErYpnphh4S5TWprVYLDsPbHnY8odMCdCdkBPUGT",
  "key2": "3URnUrhHXrNtnkCaF7FajRuNqHYNz1dJuNV432CvVMou3eaSi4vJ4ULx23syBcEBiuC3WsGdPjNm1n7HNLzbCg7s",
  "key3": "5fZBLG7QKJJ8pRuDyLygiRbUFQoQaCKa94N6avBuxBZywebGGPvV8az3TcV8oe5CbsgPx1Sy6fvBUhGGP2mWPfQD",
  "key4": "2bgYxYK5NJZ5bwdtQxGWG5osUZ82Mt1WkPjzJh8MG1aCEcmwQkuQo14dRJv4EHkLtkmNFZtgcA4UneVpYDn2ewy5",
  "key5": "rZJ2vhHYCDX9M2DbBJ4SyyGdao2onfLTumKwBehxjhHxJh2UK9Lf1jgkT6mpDfNwYWNjrobwJShwJvgC6amxUXK",
  "key6": "4JyTcskkrmQD9c78cEbLELg35ijjXsEVMJDy7J31cM53Y8QFHb2WN1pUoXz66ssVKcRMR42XSUqFsV8ZKaZLCkk",
  "key7": "4MyAR5Yr38bg3ZScAU9nqNH6zPoaaxnzMsfzLdRwJkssJdteDAg27xm5DXW8aKkGZJhaSvzDir7ysHmaqtRUPM5r",
  "key8": "32Zq3LpbjNUxz47UBwWRMYftHaaHzaKojvCsxyzHtRBB4XoeGrHZALAJNYPA2SSPYqrs14gWMeVKDbVJhPgqMKYN",
  "key9": "3gLxLHFFngwgJYZACUN6Ar24vNLVH3Xa2yPn7Naxx8TDsPuoedvuYGduRzLTCoL5KUx5GjbbSBEVhEQzLFnGxwWA",
  "key10": "5Z7QLnAnowXggZqUeL1C5v8s6hKH1sjqWJXrHvZP577Wz48fqyKbaTHFttxsLf4j3KA9CvVyp9tmdWW3KnyufRdB",
  "key11": "3eVtBkaXQjvwVfJvzB4PCpkqZfrBTH7SYRfgG6MyQ2ncQCDght7guqi1Z6JiCpjShXs2Wxg6CKdp3uvkBi8CWy36",
  "key12": "eEnB6Tr4tWvJ8Nu3vQvFEi3vwW4zGiBmaRtTsU6mSnUMmiTMtbZjmPN6ndyHWX7ACJfAivhfagCGMdQTC6PXP2G",
  "key13": "2a21UqRNeYmK99FhutrYQXEBozmn1dbivqmTLEbxC7AXX8Ta5e3LQ6KUXqnStCRbLPo6KNTmYxVFbvrErM9Xhvc",
  "key14": "5NXBbmWC5URF56vo9GfVpufzVFLjDPMEm4xEymNKQL2VoHCk2y9QDf2HfCZfhfb528hBCGVdRJSmmnadfpqnfR93",
  "key15": "2XCH7PsZjHqQqFcbyuHU6fKXjcpn1DtDT6EuWQwm4wrzdA5jGyhE1zJAuvciEptsFroyxip4C1vfrwAqL1dL65UY",
  "key16": "36KhArjMWbabAkKezcVPDehtndQ6vCBTuCg3NUTCx85QFFKoH8t6KUGnVYaeM6dzvhACELnfEGVeJED3bsD7zUXv",
  "key17": "4HPCQmdrwcSAQqpKFk9GnNAVGspvNNXXJu1ovxKTNjYS2VVwFs7ZGzX7HPrweJdKUrkjVfEMjMLshFqUzKQsNjP2",
  "key18": "3cWL6FP2RW9Y6Vc5RVyg5iMJHphG1gViJK8PkqrPHYgeskckFRvLrNeobHaSZH7dEjr8QmzgE2g4SZyiToQZ525T",
  "key19": "5aykojbAzvD3UVP6iL9t7Vp3Q6MCZZMRPkoddV9b67BXxQmMM6p4ZMujYEQLPoJVv5tPtPL5SFRboPw7xAJuQqG2",
  "key20": "4G5SdCYLFDoNk9Kdo5HNmvnPRM7g9GJxbQ3JBsarfoYoKJszriwTD2Exmi9eDv16WkDiHC8FcaacfnAPsjQrLswi",
  "key21": "3uQRRCeJQQQ31tK8f4sTiFrfMF97igMpwruvBGKw7km2EgLNSvTDqfRQCoxMcn4r28bQ5dRKKdD4pmENNzthv8Aq",
  "key22": "2zL4wBwM8gHEonWp1myP3PoeWwsffYbJNJpcHE1gxoNw2R4ssdMf9kdY5Kbj568gfmSM7kkMzTvV2ULFwjN9LSw5",
  "key23": "ucPFWdAAfAdB3Mv4XYHy1UBACSFcgPYevYJKEx949S4oaCrFDnUFmgFTgRpaVjZKPxtjZTdBUXE9kLKdktrbqKa",
  "key24": "mBdK5YcWLwWhRkCugbeWGtEdxDutPvmaTiUbJZZGPcGL8iwyZf5WmrB7MitMXM7KbQdDCkGHX6pK4CjohqqCmoT",
  "key25": "3QbR3bzcBfo9suFhfdvtMPrhzEFtjsqM5aHsELiCQ7qJyGv2qCZcvFcfGBMXs7xMDfsq1v81pbNwoSCjNkBRbxjX",
  "key26": "3WnRKLoauya7nM8vLbQh7Dw93mMt5XWwK4M6hZUuKcXGDBm3iffYC1sKJ7iSoPAGd5ovvUHbtCWWo8vFiTk6vKKt",
  "key27": "2h8a2c8upsohZZ5Fwdhmt9dD4TrTVDptPiRBHbyRfpJfbi7j1mFtRy8uJJvVgbsXnaWyjZxJLMTXAYuuVRJgi9Sa",
  "key28": "4bgRczYuM7dAJsJrdjTEwZ5q3zMM4XHTCrTVcq7Nk1t7s5BZM4X1t1TJW1JV5ZoBCGoFSTR1kC2uZbojKvwEz24q",
  "key29": "5d8C7BRHQbQ3URnFRuKqTTZHLwStTtodDpo2GDBPkEr9TF4j9DpDd4LkTaSDmujJvj1msjxHypgLAfKksohFUppt",
  "key30": "28xWMMnguJL9hUfh7epRheymjWBvNPonqtdwVH6TPZFv9v7bpZHcVrBSAppCfyBz1s6z4GAmD7YLJdLv7rUwaReU",
  "key31": "afY3J9Fk4b9EqaHpCr5D3eKU1ho17y8Q4VmbbJacwZ6RSFeZ9Nbb5xAdZMKebo1Gw11Xe9qBt52zWBdFWXMFTbh",
  "key32": "4YNq6394HiJep1VuqPAZSiLrFsecGGzVuocnKP2GwNitiT4Tx2RtAw8Tnh6eH3P69M3mj7hTkwFMQ4HUqSa7ohRy",
  "key33": "2QoacJeQxz9bzLfeu8jSuc13e3QmKvfAZq7ySfqbDe6G161aDSoRemHLJp6uxjDvxDKGs49K4Bs3p8ZsRR5DijCh",
  "key34": "e9hRJWzCLXmTNfq6z5bjUdJs3aETc5pkaWoLTgFZPBUv2rhWPsPF4brtqKfcqnTLA8i3jcXyrihJN5YZqXKRerT",
  "key35": "2Vj5NMVVjNu2r1EqYm281yp8wpp9qePFTcG6RvRTfPYLPEjFy7uqzTMLSHnJv2nXr2Rda81p1x4EimxfD6FNoL5K"
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
