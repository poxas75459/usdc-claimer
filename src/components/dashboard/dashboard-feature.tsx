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
    "5efZngegoy5q9XkTR3bwdMdyaG1Nyognq2FQeD7vz84EFioAVQ6xAKer8WBE4q5HH1SMSJVeYQTZ5i5oD9Ft2GDa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D2ck6wFzdQkNNbv9z1rPVS44zwetP9mh1w3FzTkCoT2j4ENA1KVEEtGYnLgQ7c19mLCKvYSK8ReVtJ9hcjmA1BY",
  "key1": "44ggkHnCdzqeRNa3h3zT9FdGeSCUZCemZstoerQdsBJtURN4nPeYqHwNSwpfFvE3yZaySMUMLiEfp5BEoiufQAD2",
  "key2": "3WvVJwhEWMZPCt2CFKMQ6KDmrMWef3ws6pAbcEyuHyCSY76tdA2x9cvx35pt6EMcwtxKfJRVHLKRgWvsThdMuqqc",
  "key3": "2M4WstsDMqFwibgMNP8FFZfhCpiFb2SmwZJ2sJSR1amXhpdegQnj6bx7YpG6EM646VzWqK9kgnC4FTSrZ3qKYbs3",
  "key4": "5WT6wUaT3tHGXYHfwGNtcRXmb58eWe26CfQ5yzVcQD71BXCUkPBbyN7MUJguxyyvL1ZumVcUUmt6BdywUCaPs7bG",
  "key5": "4eUW5CLjuhKWfChN9jwdRZHpdFWuhaB8VpBfK2rt9Y7oew8RbdMB4pqiX1kz9jXzVHVCfHzCaVja9fXkYfxrBqdF",
  "key6": "5BUgMhoT5vy96gzD9gUXzwuiqbrRyZ5Mwutpbep2WvWv3QX5kL4vxETV89AxfsAeDGRG8pfKr37cksHWmqBrvbgt",
  "key7": "61dGjXnZ91rforY338aVgyNM1qZoFXXrdNaAQDJnTWwY9S86RhKFETeHQPQrTreFBjjgqYKJ7RrVqbU8NS6349XC",
  "key8": "5uBgFkWQaKScEqGYFZ8c8s5TpuF7WhbY1d6TUf5Huc2nkhXouvsa4D2bDDNRMXZZQczp3sTpt45Vc8suNsQx5E6V",
  "key9": "3YyuwaHvnM2LTidw2xphzurLV2NtCLqJcCDoNZHLPJufBkayZNLTVm5JBMr7ZrRNh3RQwE9JoiTwMomZmfeZ8Ghh",
  "key10": "4rPugE4rmov54CxrfPndMEWwrcn1Lz2o1X77aafBvRHa7grn9EYEsCBE7m555kTMQy9pMewKS3xERC85deCB6qyw",
  "key11": "2bMWL5VbkUKPBfNACKJfoPGXrsU2hEoY1GGj3kvUw4DTx1dq5K3k3np2VxudwYjED1szZxcwhKq8U8rCuX4ioKr",
  "key12": "4rsK1DWUmhuTP1AGWXpy4W7oFRq9DtFdZUsWkhfSGvGjqWEtWom171RqsKmTzVmJjMHuhtRLEaocAZvmfYRoZTdF",
  "key13": "3KyitAj616yM7pCGt8mnxB3fP2KVJcs7WbQDVGVxami2k11n8GaCGQRaQXnRe2hSuTmRkHqKy2jWtV2jB5gNxmG8",
  "key14": "52w1yJudQHtMHoCsisUtijoRYtjjyvJyL2DaF9tVruKTcnUa6WifUF7ZLPV4pk1Ls3uG5cGdUt8vSbwkgDVoLuzi",
  "key15": "2WfS8u5TayfNHRVakj5FQ4FLksD8fThPp6FqrLXcxY3DdvHdxUCJewYytPsFwygUq8XVUqgUbnZqTCpK3p3Vwo1m",
  "key16": "3spkN1moSnu5kthPMYYipHk31KWSuz6HQvGteSPKvbZvJHGtwMaXX4w81pA9AEx6QwtEbt5s82D5mPSonJcFEqcm",
  "key17": "4zmoomvCx1MH3zUb4MsJ19cFgc4z1JK58edkFkgyfHmM5PDJMfq7PeAZioznjL1hVixTaRawMoFUiFdVJUiBdDK2",
  "key18": "2fAwm67JH95EszMRCE6axmYXza4gKRipKygPMYxNC9VNFPcaJF2Jv9hCusU8DsTbwBQe75678iS7hRZVw795gNmr",
  "key19": "36mp6gq5ymdYB4ckbjtbufYtX1EUniYvn9WDdTq78aaZ8v4gzZXmfDDvwfBL5JoK3T6DuuoR3w22K4f2WtQgHAEc",
  "key20": "4qbmfbthScFRA9D4h6LFkioTN1Gf7coFvGPav7C7NT8Wen5BheNWBJWELqwGsMMH1VrbFZ1ePRJMxDKLzbHHhEqM",
  "key21": "5vYQ5w8MmvUhGS9A5pGBRuuqqp3esoU3YArEF5PVacX7vQiZKMkrZZNUihz1ZaxyfJCfyVfGtEnQffY38SEsJHwD",
  "key22": "4bJzQwduTFkJsQNhXCAUK8YqJ1BQVin3QnKjjv8bJ3DhrKdT7LpsqrDmoWi9BaAbk99p5pj78i8VNED1W5KgGe97",
  "key23": "2CPwUyQwxzrmRHiEXUoyerz2MhDFPYfJuRc3uLiJykAMMwsobpjypqqSP38eFJ7aVCb5JXQGGpe1pJxRguC7igUv",
  "key24": "5iVvN2PBEWcdvabeXxYRPSsQf5dAQJQ9ZVN2htsrY82bVmbaNSpVnCaRb5XesZeJt293oPXqBDAfK2E4HErpQMwm"
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
