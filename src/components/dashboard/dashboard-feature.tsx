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
    "5eKhpd78cuD4vDp3HqEKcsWScD2UxRnvurDGF8xNHAhGSomAj5ZzPwNuFHjb3CnSkGKCbnpECcv9GSZY9N7iCtHs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TSc6cLLjV3YK6Ai4V6pyR7S8xbmjfhzMqQSoz2Vmix7kgb5956eH3k1dqzXoWkeVFdPDshNexVSDHHbTndUedun",
  "key1": "2dsY5PVjw2eSxR5u73xRBry4hJQXnfZtAho3Wm4866tWQuoW4oHFdo15KDbqpD4Ub2LFKk54y2XMNgWWaEYAaW7C",
  "key2": "fE88Q6SyCFZamRNW4PQUfdUTebi5QQqZQBSfVgFjYiHdSwUh7LQtmcN3Z5KV6KQWyLnbzC88YsEwAnYkgT6xZ7c",
  "key3": "3BQDArzLu7FBmgJzYTCGVWX5pavn7rEjLYh1drW8Kz4iUKQmT5jQHiLdiuKuVgQLUXfLkDvXNt1cR4apiFe5h3rX",
  "key4": "pQW3tmsy1vwqt4b6f2L7uMWJpv41mqamrkhjcdUyxquf5whotKpTzPDqonRcH3Hs9SjmPh83er9ukU5dRf2BKVs",
  "key5": "5wjCG2NcQnqf8fMixV5hpmdJonBBuzGzvjnFrqv9C3x16bV65k5PsxnXEwKrUu9yaEMQgXrtVm4j9bSoHsTfKCVk",
  "key6": "2R1fL3US2Ugjx34U1nfyakWZJrc4DJKTF4ZUVVoSZZ38MYwKFruX9XV2pmf5ZQsRuQdDxb363M7AbE3VVtqmYJFZ",
  "key7": "25J1qpNFYJvpAuSm2HbU6jy6MnaRoYBHNtjnBXr5mPAgApMQYwk3hqTYNeVDqGMXFNm3gNnkj55rSGf1Tu8dB9Jk",
  "key8": "3Bqztk6fQ5iKEe8TjjPFAGsbK6g3P2oLed8bfPYptu7L7Q6KUf8bXLLTBprb6jjqUp9WiHr4Wa89YCd9S1ogX6XP",
  "key9": "2xmT5G8JowhzQ8j2TL58FjGTyhQFCQThGS7V6xfFSWkRPG4zGjt1oVuBbfCGFBQVam2VamvdD7r9HysXEtGpnvT3",
  "key10": "5Zy5gdvNa52sLjnF94RjpZDUxkp4XTjaa8GEihxdDaZXsHJuvzrzfBM8Zd4u6VSPWBzotvBnhDQkvX7SDRNNQqfn",
  "key11": "4sNN7BoAASFfge59FhXdkrSUUPbuLBB1jNzXDgNDSdUDiCvsVAieW9hDeGKL6CThHtfF3NCNyyBfZbApyUQZgceE",
  "key12": "57fzevv2g4xb794ynn5u5BL2e34rfWFsyX48NUE52oBcsKQZnZdTDuV43L72qDwxd5zgnhptkATXauGQt58SwVi1",
  "key13": "3HeeNGCrcu5buLWAyaR4B6QdTwjPPshcxxyXiCThwd7j3rwNW4MtRAqdRjo82vFmbBWHTLma9pe6btYH26q5PmVH",
  "key14": "4zsQ5NQZsmRPCUGaXdV5wdmyzu6KTV27bQWCB4wPz7MAGK4SS5Fu8epesr1JFD3hw896qfzyuEMef3aHC3Z95Z3Z",
  "key15": "PmWbbPQUYV9mtLrncj3eki1sizFCoU7MiUGP8xVvpDCtRx6fKBjdvC81tPCq6VYaSKdjUgouZKXtBGPbbfF5j8G",
  "key16": "57CqkqVS7xivY2gkLKZmHz2w2nz8DRXde97n5jkT41ixNy7izGNGXjMAq74tsUr1o4ATYEbhcFnBxMVccHFArGSS",
  "key17": "5aNhTrsijdLC6cXfQmhYibhAxvTddpC85A12VjR5R8L8ZXw71Ta7oA1DfBeWfX1eZAd8e8zqJPzfr9kA1aYSZQJr",
  "key18": "eVyD6xrnV95AKUQd2ErjJ8F5zQM5NhHMZpUjQ4xGsSFqwPYN97vsB8Vz7wbsGWxsGJym2UqrYwRSGDVMnCcd4GT",
  "key19": "4SrZfgDFVhbXF2MQ8rehVoEaNTZeX9uqvdp2aBsrKuzpgXYDXw7pt9dqgVi6vR2A8Z7NnkHMhLnddjwNnDVvR2K3",
  "key20": "28KVD72YLDW5d5tY7jtzhLBc9DB9Wf4w5PEpW9GQBhMrHUwfegnWEzuRsyAZ9nVgZ7JqiRkfJXwBgQ8GeWE3CURV",
  "key21": "4xccvmQkAcVwJaSoLkwWzpG3LzVoV93ozusr49o5FZXFQRAW8tmDfyaevVPRtT6RaPUffV7bzBVb5g6zKu36c6Yw",
  "key22": "AXAEfzz8KQj1etCV7uu4VjzhcHgeW4R4AxqFiEumX71kZWAzSFwU6hGjNFnL5uBYmNkk9F7EtQ9G5pwC2u6ULH1",
  "key23": "2irzYW3g983iRUeJRne9xdecsGh6rWzJExQPFJiKyNiFyB1BxDGYa2fWiFLfu7t5Tg1D7MPYeBnn61yin6J321Gx",
  "key24": "5W16smiaYcZTkvATntnAoYkDmkm6Nt2QjqjeqhZFQXLQ3jnhjZPHizJzGvynJBbUPBtciUGkabVZVnvFtRs7orzN",
  "key25": "56BcQ4UA5nnXBephs8hWJihzPwxWZqhZCsNfLjUKhFmYmdc4jdAbaCkD4GpRZuCXFTxiDTsN1ZziKM6xkgBBDD7C",
  "key26": "4z1XADeUdRm8EiHv4Hpspviqh6EfNvpfBqYqkuM3qDJW6Hv89qWnd1DFuCKz6Mg9jGSyGaZwWwZ8xYwLUDXioPGH",
  "key27": "5H9LCD5qXY3KRCgazB4JRh8An6GbUQKtjVsB7bRReWkBUeLsz3TxVmE9TBNgJqmYjGgPsPbYs6GNnA8i2PqSxtNV",
  "key28": "3R2wwZGaPa7fGrebp7LJPDyBpq1uQLXrP5bWp9aqX9bp6LTTUpVtHmtURup2nuEUxrLXWvnwBo3i5QWf8StheJM1",
  "key29": "2ai6dVHwbowsjUjccvDnyv6KGRNFcTd8HSCyA8gvARGYXy94xkfRvhPVH3C2WmyxSCmeijuWxAJzo6sRWBkGChqb",
  "key30": "2sRihxvGhbwhXRT8SAfrTkmpKgokGVzV1AhiGr7De9Vo3n3SvV1GJ1WDAx2GWjiyABTg7dmYq3FVmDiD5o4nnNjP",
  "key31": "45GCDriDVEp4tEWziRfZ5qGJFUNsnFGK5bPaWM6YRLNDQR4zxi2eUeeNWbPGgwHFQ4sicNXiAVpA7H4MCwCvTLUw",
  "key32": "TSsnvE71VisSzXfoB4c6jbCm7VLnbbNahWGjAf3jaDUbMoYDnDP97pb1mWiS1k2DrabR5YwsRcJvA22sY9Q85EP",
  "key33": "2mTzEUZ49QzK4rm2BQyi4itkpLDuqGkQyXsPfyNzZxBjhXTZreAYoaCMuSUpVniQAFAUNnbSfs3G4s1Kh7KY49eo",
  "key34": "5R6FUoS8MTQQengBVyYrKvCZ9W2TLeKMEy6aMYvoUSNoHsB85nLrqas9PdZuPpug2VyuqabrkF2riHUtwoDBn6Fj",
  "key35": "653ZWdX32YCyXehCUccsM3Y9cNAgWwpT7iWf4YSVcoSmd91m1cPNhkJfJfsmjL9YFCV7oC2ezKreUXHyoDc73dBv",
  "key36": "XhAZLDyJxj9yacjtZjpT13CFs5LZzyf39FWJ6FGCqKPTZUaAtkfNyirBatkkY7Eh3SdcigSLtzhEfbVDhZpMb7W",
  "key37": "4Da5pDQCGGFudRxE1aTdMLNThZx2MAnQPfPEYN3CaQFM8fXGdjrvdGaBCHzKYGX9av1FnddBz63wCKYJb7x12jKu"
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
