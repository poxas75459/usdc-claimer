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
    "4SHyiTkiQCrYF9gwbvCFTS4cxZrBo1B9ArssQ68TZQYemEioXszr6qFUBAPRbbGhipMMNK6ND6k275Lm3crh3HLG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fjp12eAjJwUFQMWrPmNQdqKvKdMtswtjSyCDyVDa8rxAcdCZYwSsdWgZhjFEL2JwVaTgf9VJroLXj8z2NK4GXUG",
  "key1": "yjJcJLjGXGWFgxu49ZQkC6guFFTY7TKcLPrDBRqkqvY7TyiWsR9MqwSx3hjm8EE6KHbjV5KNpGshC1tGa55dAvg",
  "key2": "2qVdmqZiznyvmkYtfokJxdXSwKVTyJEF8vo3g9vP5KLv8zeiA6jgTJodhNFUjBrrFjruqUaDMudozEaxocVHLN8A",
  "key3": "FmhPS4uPt5q2BS5eF1EkjyErFz6AoaDKEMa2wPY9TQCqoQ69zKqwDz9wfcdf7vNQV49dTxeNdmehg8Kkr5WpGsE",
  "key4": "5ghnC26QwvecP6j4eGdiBUCYXse38iCuAc8nFc5hYdbessVfjZdj2nwb3APUD2YRtw2RoeRWzw7wBJwNKog1dAS5",
  "key5": "3jt4ssxcobjsPpZKbcaZRTeZZ2RWzgg6W2PMJN1DeFHdt7V6qjxCgqLfX1i19sTRxpeKNumtpAR6rK1LD3wGrxEr",
  "key6": "vDvHHAj2bn71UHBTU1YuXyc5u1PAuSpdPuCLGjrq17EXsHrDRSQhMbNsniL9nqW1sAPPyQbAJPfDwwRZ7Yr7QYM",
  "key7": "2gkLEyPwuEKLiXYhGNiy1WZeRsjK1htqrrYrzmm89ZWL8NDmsmWGGahz7K5xv5gEdt6xZ6Y84WWXfwJqqByRjySL",
  "key8": "5KC4fpJbiK4HcAyvfq7wBLBKST5tXpEmDMcHasG4WPBJ43pBcY8gNXyajDVXMUCoScNe4JCmpCd1LeBKVkmbo3gx",
  "key9": "N3WNRwJ9JY79JRdvjMbuz3ZdSxKcR6ie7pb6sP1ov71V5JQEipGhkTjmUudDik6BnvrHzXbY6aGscP2MXJ9oa2w",
  "key10": "5zJJghVXcX1hEe1uVqPf1HYGhFt3bBsQpYgiiNt2hUNR3DEG1TNCUkCwedvJU2CM8gzubMJd8WQBesWR2mXptsZv",
  "key11": "a8xn688WkMyz6ZSyotmE5gnciBJUXwoQNn1DyhiHAMjjJgpaQqmCCJp3PPQ79UK1ZFDaMhoRa2v55eXARiZ8TaS",
  "key12": "59KUZLrVm98TGp37ZXHGrmYYAF8pqwnK2hbAQenonsPfA9aG9KVgxpQSTzdt7eotT7xV6hKCLZxsnxQdrLo3ghdV",
  "key13": "3dKCGu6hj1AJ89oM6FS5iPW6ySDbYTWPU4nNnVXwCSwZRmEMtga9j4w6HiqAjDwA9GSgciYJdv3WevQwKAEd8FMf",
  "key14": "4RHC4bT3R9V9rK4i5iAoSnzosNc13nMGgBNVLuLeqiJY3KEFq3H1DETHfVXMarZ5qqjJrv2PMWhG8ZMAtQZa5kaY",
  "key15": "34Y3mAna2JeThWUF6VJu9tVopGMPAHuWoi6BEADhi4UZ3zoMLfEmtARbfYxpHdU9oUwdhGYrEhEhZcG1ttHHXja",
  "key16": "GQGT1Q5jGmdp7ZREsGibGBFRi3cdS3sdW2BgQacgsmhNJPXKLsk3da8JzQmdfgRHp3q4Wx6hkprD1c6VX5tfn6a",
  "key17": "4nesRnDAQN8Nf73Nq7AxUQeNFpeQEexUY3716ELHT1ZGHiohsNfYaKEYXPo6c6J5HW1UDDxa6ApN6bKwbBrGM9Tt",
  "key18": "UUkd8TSJbZqjUDCLuNzbtrbNRBteWa6dHwU6jC3FKC9GnYCpANF9PmnZQc6mYjxE9NgnoN1EJGeRCtzp9VVesLN",
  "key19": "3bDVCXETWXHBCeLa5Ncj47LgjSzzudepyKsEJuXi75BoQF3pzcxmZ9YonGTU3WcrNsdboCXN3mn51hcDxxiMvfXK",
  "key20": "34N5iPmL7Gj6JB1yeLmQHycZdP5revQpPcVs8TTuyUvCN25tfBiwEVDv6axBgqb2cqxNfrdxjFwhqhi1kKGkcUHj",
  "key21": "5uHPV2Fdja4AqFvu8mTDJKYMcov5nC8GgEXM5JfsE6MfJ9ic5BBZoUC4zV67nUUnn8pZ1hEMz51iTn61EWh1Zr8c",
  "key22": "5aZRhZzbiF5RqikcEaZtpfzSL59DcBB1HA4A7xjv6mupbVhm1tE3NwBzXLH6BBuhwomucpCrGwtrWVc8ebpiRGRE",
  "key23": "3maBoU2K5jbtvrkNw1szBAmQKMUkJRgfDhCB77eWGTDAVH7hWDKUZaSGxMjSt47gafyNsFT4FeqgzNvMorTRMwWQ",
  "key24": "642Nd49so6mjFUuPvfNLpaVePfN7L4qebfAD8XVH1dv6rLfhf3tpcQhSgAVVP371C1vf43CAHwY64gyoR3u7NQmm",
  "key25": "2c1sV9mEy6xJadEoxsBzpKXSjDBqyw5267QetP8riFeMHTsQrSnmTutJWNcPV9EwWBHUGBPSJZy5Yw3bqreibQeM",
  "key26": "3hWPrReaS2SQPktbxFkWqfkA3y9b3bfKwUCMatoZLEVug3U7s2E7tWpKkpH5khPr81RSB2T7sT4XEoVwseQaEnJ5",
  "key27": "5gMsF6tZNce5ZCptneF4syUZDqQYehfSnnugx8GaMppBqW9YTeQ1oktKG8SKnn7DvA13RuoqpvVXCHfNzfQCWcxu",
  "key28": "2PXeeNcfmZmbNiLqrSK8fvMsy862akWvRCR7tUYKMAuPzKiGfq9rrjYd2U7BCenEF3bUqN3LJCRMWbuku9pPvFRp",
  "key29": "4TzXo6Fkaq4KWUm8jJu2RZvJRF8yPPoz2kHRet48wTwq8EcDEAcjLCCdy5B61iBXPy2Cvn676ZJRaC6ZQagp9wXC",
  "key30": "3PmKNA8iR1izgGiBNgVe5gcLENuLkT9Yss5KCM8Ah9zAKVGFWU3K5Zc9qC7auAjB8jfrMR6rsn8BjTi5w7AqHzmk",
  "key31": "3pA9rdaMpUAvsJpoDkedSma8KaWz7LBwg2S6r59VeZomipPkZhqZgXAkNgaRLZ32C7EWcU5hhx48VvCgujBA5bZR",
  "key32": "9oLG9fEGXDMfvaFyZGkuCyikE3Lb9aEvEdrow4wFbgLdouYMcLJm4pLptTduuRy2JqFKCZTmhhcBFEtCZXEfQyv",
  "key33": "4q6CQ7nJxE9grDCjCsMdygn2SyiixnUxMXqBE7SDAV4LKRv6Fpwpaxuh8hREFMkL3tahWRsnSKrBZaZt7xijqBAj",
  "key34": "5eM63yCuQRuNU8ykcH21XYuANwyVmX3kdVEeoMc4cKz4xjZjbmNgiHzBxpYccu7X5pkkSQAoZF9esNF5Wx1VpQTc",
  "key35": "4z3BoXBFnhc18v2F2XbV6jvbjB22emcax8kbDA9cSR1iNY68Xbv7npPsPkXw7L3wo4XnL9FATkyGqFGTa3jnge5R",
  "key36": "rKHEW3mgYWp9eUm3bUfVwr9x8JQwVFVprp5Ba2V79LuNpSEXMjjfDRg6vJTNQt4L3SUXyhy3ooJDM3yWKRQYZGc",
  "key37": "5ZLC2TBgAhi8UHpEacK28S2vXQ3Jf3Gys5CCPiSvXQYdSEVFxavUY1SzLHG126M8L1bFoajHjeZuuUuv3E8LhKWn",
  "key38": "2agM6L1wrrTWGBYPLnYVLvuRJdYDCVbrY4WB85TYGWTXvCGEEDFUeUmKVp5WBKsjGKmjbNewNMjSARUuXbd8ZY59",
  "key39": "N41xHCDxdx6F1U4yfrs8drMgHH2oLEfJErF1ihUMznsqmTuix8JvvkRMpniyABhS3fF43mmVbg6rSUmQwJTtaFp",
  "key40": "BdcWaJfMeVZqN8goe3awjCAxkmuXuiLr7QCY6XYk8d4JTjaUDuGSZdTR4F3DWX7xNRyQHLgygJNvo33Ea4MuzR7",
  "key41": "4N7XBNQW1rX1fE3ZFUT9oEvJbfoJvocitPWD5ERpCFtj51QdVc5ZPCNVp1sx2mL9sTACjgBRcg4hSmNfSbxWvgHZ"
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
