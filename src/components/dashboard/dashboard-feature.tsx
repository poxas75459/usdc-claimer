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
    "32vpU11xuji3vZGwpg9xcSsz8KrWuXgLigW9p87aYpVVZjHXb1hbxKnywYUZtrxpK8AkatEMvcMUR32XjQuFS6Qq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xnhN82PKaPfD8HD23u5uvEanejqeyjbvm6gXs8thmAfZYngwsH74euAWb2T5NeTMM8ebgtYwJ6sU61unn2MRtn7",
  "key1": "53hgcPoErF1SJLVM4kXDUfDjfamdp8UrKWg7MPMYbQGSN7mgcBNuuf1vVj185vtmBx1zP1GGY4Y5oVubjUf2Es1x",
  "key2": "3ScGTJACv5R3LTfVSw91pLMAZ1udNr8iXGREm5jPT8T1Hu6o9SkvXL6tbHxZAVeJ4iPi4LQLGfTsWvGjxK4ZoXhs",
  "key3": "45P8RJiTsqxmi3ADKufmptRA5fyuhFApCZypFqJ1yQd3e96wo11RMcJtg4K46FpsKVjfiCGY4eATmdz2LNe2TMxK",
  "key4": "4bxZdJGHSAcvLTzxe4bciMUpcxGMaLoM6L2p24CvJSdCGb2Q1m9GgJtjy2oh1txyveChsxEnoKtKezMqKzpSZ645",
  "key5": "4LNiVoxLijfvhAobsCrUjDgszimeruzQewKc8FiDEc1WVzwVuGhDvsa5jhKxTVhMFjVa4Po92UavAhk6jC2DEasB",
  "key6": "3BH3CnpHyzgi2dEWRZswQ6Zd9nv97YRuEgK1JRSur2Zbb5Y3guRqmBhrFRwUtTv4uBu1KMsUZk5de62BtRC5SC9G",
  "key7": "3WpKHTHBApk9mQBij3hjmkHZ9DC2S36hqGpNo8dkkxxXygCFuVd5D118zb7aaDvuu6hvecMy2M8mE1UJMCUsLddE",
  "key8": "51PYhkCTuwhiVZiFsfB12DQzDEpKb9fW6T5nsjkLdntLVaNAYLkT9bZGYUe8hTxPiLCEyWu3ZbsRSeCcjvnnwer8",
  "key9": "jWeX8XCu8RnKorq7vX8v8YJMWFyF1Sf7DVYPCWAKVrpsgx5ivC6sqWjkm8Z4deujzRhRoSDSZcEAm3kdspLwEWC",
  "key10": "2RxuDBktLTipmXVTPS7eWoPRN1Y2kBT4bmELMcfpmQ8uWDSFN2RKhQAeKC6dXGW2mpRVdH4WArUbLvT7y7HsxqtF",
  "key11": "ZDKg5ixo2RKsGeaP94vz1kTmZ3crxVHxmW4DFodWiCeKiHgRwMTDTnSgbAGPdHLGdj2MLqCKSiprQ4f1TLgSUYL",
  "key12": "2NXfEscBHK2CsxMhkQ6Nij8aHxdPQfdyXADXgWQoZ84gWoGKRWwV667eUBB4w38M7AYfaU6qp6PSEtyNWeNE5FEm",
  "key13": "45EKDNLBMmQx5snJCyJC5nok12wwdwEEYCztTeHKkyyM9RBAyn8GfrAsCKBvaiBhdeFqwit2MCyZ6TVDuRgQ1cEA",
  "key14": "34NhT5oWbG8NZMD4cn1CSVpgzfnZciuUxAHiN8XK42Up4mhDTh51xLcSWXfqGgDMFSpcYieoD6gJUEVmDRXbyHKi",
  "key15": "2wwUWLGTZk4P4CSgi8wVmVHZ9K7LNoJ3vfg8YxHjCATzzX6YZuY3MH1mJLRTDEzU4JEYZVMoTE7DdB9ub2nLsZGs",
  "key16": "EBJ81HQNtcwfT7UZ1uWB8oKfrRYULNZovzsvFKqRcHGA9fbuDeYaNC1YB1ueNTKo4Z38AqnDv94EuaiS443iU9a",
  "key17": "2Xxm8TZw9BhRRQfZnGixShPJXpSKUTXHsYFGGZx1eJ2rVw9zPPnQwkWwSFhz5ThWa8uu2uwos7VRfd5zUjbJAHVs",
  "key18": "3WzRhx5U9jyHsPxZNpj3qaPQCMqyFaMpNDQgN58jvakbHLmUkhTnWaZSHVoLHuC5xb15MTaxauFfDW8HweX77jz8",
  "key19": "53LgCRcYHFH2XkccZp3f1wrS5KypajUGmFnk2LuY625UBvQRREbWD93ehZ1JWTi8N275eXWKUXPa6f6DffGziRs1",
  "key20": "4vnoEpnN9adWuTdQFmrQZzuHmxqTdQ5ijtkKyzWim4GWSFPTJnY8KbvSeatmSuTTewRATSU2wYrWNMghgHjffkJr",
  "key21": "3LPJUdMo7Nt8Ld8aNuDRSLwrneukrZxAbRuVBPVsyU2SysVih8FHorwbtod6UaFjJmeEkHiisRHhjb7LoQm38EyF",
  "key22": "3yFWBMqgSaKsewNjtZk8k5uruQmYhWm7nTTsF8rbnPh9NAvdqdMb4fq8RzvzxLeR94z53y8QuNYxF5eQrje2MmcJ",
  "key23": "2QeZ3MGKgW6ovTjeLHo6V1AmGQHYnDGYZNz94Gu5ujNQKTvhFm5bKNsc1tJ9jNS7Y5Sk5F24amhgbLRrhtgGajrs",
  "key24": "3gxGAVHDB9Va6QAx6BRKtbVvQBR7bnvbkzqrdA7QWqnbgDhEDUmG7XnH2MSNw7XBHkQXkc7X7yENRuVpwRPjphPk",
  "key25": "3oLTzBDd9YXENcgJZt4fz9C68wMu68Uk4qVezoVammwkxe8oSR4hBMHE8bFQxSmjCW9DhNyDgPCZ4GL9Xq8Ba6vD",
  "key26": "4ECWGoGi5kPmkyxhTBrPLfvxFWFcVS2tS4GXVtudDFGNVpfsmSG89MELjsjHvXjjyptB4qMqBVbVA1aUWpgkFE7Y",
  "key27": "2ggARdPDNDLrcztA7H2NP8gFyrE5CHCiibtssxXHYUyo7JejaLrpm1hjhPkfFNQ9xqtoABLXH8ComfGZ231q46Vc",
  "key28": "5E9WbnjiGTTxRLiV3WGmXxdvkGSZsdkYbTMC7qgZSRGmQy39sQWEgKYiChBVAPvXqfD9jfSVwvzDQ6VHXwpohhrY",
  "key29": "5EX3ZdaJBXudVTWB3vYonFMJ7YmjLRKVL6QokL9CRTVGp8ar9kCtTqirL3cBtaABYRWRcA5Mo3uwXhaXGvtvZFJJ",
  "key30": "xTKhQrL7dRidas6YvoY9pWueyQ59CULnb6eFQqtnuHAzbLqwkJ4hvRcwGeTapP64GhPd4tF9pACxDa5HTdod68c",
  "key31": "35CKp5qTMc9VDRmeafYWp7QBx2BSHBv1oD3orj8fjBvTdzSaov48Vvq761HiCZBvbcHWBwvLVrNVGGAwUGzj5G7B",
  "key32": "486VkdQo4WKrCmHtfqEBzoTK1M9ApBYUkVQiV9ZsFyQ5APVRMUAFUuftBA2HMy8VFDtcradows4myE9NU5gUEqDL",
  "key33": "6VPCBGoBve1hQqqD6U99twQ63ymmTAHAt3eR5HLSMNfvaJANRXLEgDGzwdmf5qyjg9gp2cfwrD5tiyrU86RXr62",
  "key34": "4wXmn29GYZVN9f57mWfPZwzuvV5uW7G97RAbAZuChVdL95EmN4kiUCE9kmT9dst8nu2j1LyN8JNz2ezNgKTLkGe8",
  "key35": "2CJABwf4o3q2hxg83CjQgfEWaVytbtwUbMWA83fcdawjPvWqaerH9o7hc3BBHiPYKKoektH1k26a5amxT3jF8KSi",
  "key36": "3DSqEPWKtxEzREtXiktHq9PHdxhvHL83CXHqDMSZMXXTBDS8jgYu8pMoVMtHkYZjGwQPLe88UXbWEWXghmpDcFx7",
  "key37": "tq8c1dM7ZbBvuPFM9bF4ALrjuaE6tYWsCTVjXNNSTU6dQVhmyMyPeVmWKnL7cfL7czVmSwE6LfqHsb3UxRyAvXh"
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
