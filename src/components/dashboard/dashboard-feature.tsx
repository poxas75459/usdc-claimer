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
    "3nuhfF7983jUTLVWaXnuzVfXSxXPJgJs3TxNFk2PoVuYQxcGABJ95wxCkAoZX1cgQxhG79SPFiV5K7i5HGgZw7pc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r6WRNqKQH9AxSKYBqDVQumahHwQFpGEeACUQ4rndYMsD6a1KEMh7291dd1AL3JgBeoGzyHqti23fLbGq2XWEZqi",
  "key1": "4gtjxqEmxG1mR9MbNWmR76GkkuJjoE6P1hMyJkMucxLr4LkaehH3UbJ8MjgSJ5YwEiPUF8k9Dg1yEeYw9fdKu4fS",
  "key2": "2j6yx1p6ARSHKmKTEAfWaCCf3JN6nA7SirmR2mAoV1u4AbxnmcjNNTi8y6nrUepXrvcUWxVLtj3qAH337a8xpGLB",
  "key3": "sLrGyw5E6gmDH7BY4ERzygDw4hPkXWjmWzZdpq7YFYyEzKGzXy3JVZmsaBbMAKAqjzgKBYqLghNsi1YgLGBPzXM",
  "key4": "5ZtW9pXbneuMZY7ttcH9Z36qoayi9KYcNw73TzAqqsGSMSGW3NFjmRQp5beZsjceufiaTwBNcebZjTTjvjLGBdPA",
  "key5": "2VdvPzacSEBpcgybCwDLVQ4wmqsaew2fTBDpWhhfDsNyJqEwYC7vCKC1MMnsz3Vo74DHA5no7QX7yutHV41Eomq",
  "key6": "3RgyjYvFjnbCmKP66b26MWggKSd6f3RRo5vivoWFKhJKgFLxW1M5iy8gWQPqfatJq1gj8ZuE2NhmFs3QDCZPH9zT",
  "key7": "5Cg8Ho9g4PjTLPGpemHEqBQKYaGiS9ayNx9WrinaNCZhhimFJH5S6Fo8r49YRKDqB8pxD8pcoVhasdLDzHkX7k88",
  "key8": "2HriDPfJVSvyzydgDWRfrjUdsbHR7J2ney1jEZ8RvzYbHVZXJR9tpNCwMZq9gnA5jczDzag3qAmmZ2ZUty2z3asX",
  "key9": "2bjvvN7AN3g9PDsekDjcJJEZA4NhzMeesgm7sF45Ve9rnxWpvWvy6qef8ZtYfrGM9z1Ms97BiHBAaDvZhHfCBfB",
  "key10": "5p6gsErqT4yvZDih9cL7PNPH7Jxb9hAxQAxYYKg7fviAWMugzfCP1HDe5AX8EEAbmDqs29XQ89coVngG5MYddfJz",
  "key11": "oXjbAMmm4RxxYWCS8DECmbivRuGxbuxPaAVsd5NPB4JReHKat2Tn5MJFc9HTVDUw7ScRY534y9eZZFyg5q8s9eX",
  "key12": "GeWjnjvQP8WxT8vXe3sLfR99TjkoTVq7xPLS9wAxm4M7PzfaW2DqoKr6ZkUJzBfP8Ghs36Pmc8v3WX1dBwfXD8B",
  "key13": "VeHVgfBixtDFfeheyFhMJGnsSoC9op8DcPUoZ9swPEPHvL8Aaif43mfexktDXNSdkSXEnrJf3gp9enjYXZs9SaA",
  "key14": "j82nrJ9koAagB4tdwEZRUq5Ph95vmKFWZF6Qg9iKAUdmX8Kez3XVo2UGwgDnHBFSusAfbGEBWamazVNGdmUfxtc",
  "key15": "4TbZSWJRkU2Qw6NM4ER5kNohNU3NhfSWdXAMyqa2vBcvYsUmKdhwWStfAwMvfUPPm15EWAE4BZxDFnWMEvov2ais",
  "key16": "662BZ8eSJkLNy1fCMmbjQrC2sNhWuaMhqPyTRMuScQ4zQMeAouWU4oKB15Qjok4E4rZkSsRGNtGJieH5EDX1TEwX",
  "key17": "5sMaVFZKxxEtTMxNy6anfjiYYoPjvu6NbyN5ANCFrXyBtDf7GEBMLv9g3yLhnvdeU8qZGZVKkE2gkyN2TKx14saB",
  "key18": "66L5WuUeoyUHYfu3YFFhYWGP23WChnKbPmX296nosaNHKTWD6yUcWdJDN5Yfs4XV2NDpnceehZhwm7E43NnT6j7U",
  "key19": "47ZfAABFn4FJwVUMZB2ATPjuSNUZQYXbdGj3Cw9mfCjo949CCj23oYtMYeJefpV5JZhr9revPbztJTeFrvsL6udK",
  "key20": "2tiAR5yqVV263rfH2eqocw7scfzUCK723EsmPCBfCf1ngZeTxwKFmtt3Ffhp8fV3tgXCGvw87qehXFqrXdqhfz7H",
  "key21": "16wD3BDYRQPy6AjxJgMHocZQ8B27uLpi6UBJnEYXzQGjy1z9jHABMVU2NX3GHH3g6QcUo7VYnwFnSpe2pgn1L7i",
  "key22": "2goa8dQVaM1b2khtucTki7Jxg8KnWRC36gYuUxPUknmLBdrcMLRDt9iM1AiC28sHRMSVthFLtigPzVdSZx8qtUoU",
  "key23": "31XoBQrW791LS6vsmUqFFKpwHSHaZjihxNHasSyU7oGqD8mbmRCZpDXg8d71j8KcwMNcXC8VicMBabtNEzUrYaBL",
  "key24": "4WC98agFYrBjfroPBNqvmj1waC1EyA7KCcKLkZb7f5pyCG4DpTwe5xfkcgCnhM1BPtwkNgCeD4x8dbRqdTHa79J7",
  "key25": "2DDGC8MTd1qDL4tEKWNbS1U5jBRQwhjxcYsTQeBKjUfNgyePTD1236NYhzwtdzgx2T3QuXq8811VAYeKDgyV6oF6",
  "key26": "3uzrbRYRqh1HCoBkjtr2KqTxwm7uaCvfUvRjZe5ovyWCGxdSv8HwP5dsy6B2StRKoP9bUizkzfshvAq7zsVL748f",
  "key27": "22a8DdVwWszQ4wSKTF56ugWdB1Y1LrCNKSpWYmZUAy43nYvomaA7MKCWdS34b4V2XfdAvVp3L1CU7kbNTVw6Bhor",
  "key28": "2uQnM6uVXvWDBYTxWgcV4wtfTHn3JzmdTPcuzqM7Y1fsS6zGbFJbfHDWS7LiZ1iki2gxokjLaFWsVsfowT2nFHd3",
  "key29": "tUHQ7BEEXhFKkLMzjEH5oB2J45diut1ovuDfXKat1cZaY64saf2CnfLzzuXZL99BjJSANN2DBCrb1ZnJTmrHTaE",
  "key30": "5wRL1onyhJnqgiKAmjyRFmoFEfCe8dYGPyHQY4ZHx2Hix4t8Qhb1p9SKaN4Y1Nk5yvR7nvSESne1eKXnQoDp4zej",
  "key31": "3ziUtYf2PdQrdcEFnMiLjcu3SbsbSn5MDYWBPaLBdnDNbpx2FZzi4GL86WgbxjKbHmbxfxhiiF1rajd5yoDax7dm",
  "key32": "2dWztCo5kGcZWNJHobvLtcWR3vA5hRk11z9J5mk7cCx9RGzDNnp3HuY3azg6qb3Tgbauxc6KDGZYSoTznAXXpx5d",
  "key33": "2PUaBdM6HVqqVB58bSCxVJW4N2aiusaDJHWmCUyZy62NFBrUUXj1G5fw1ECs2wK6UA4YYstwNyHFTf5D2GQkHbDc",
  "key34": "oD2bw5Lx2LoDAMAvZYHFVMwHpHvCr2wKzasGTYiofoBgM6VJjasPEZG7UA8CVo99iuoyt6i26KGTrmkSAo2Kajy",
  "key35": "5j5bqahALPDDfLbbvoyeCZrzhPxcV3u24sBobwhU1XdZPCbjKhiwYYEXXcypmu2Gy1ww36b3FxJb8ZrP2eEi4QZb",
  "key36": "6jJ3DGR9nAyhJK4A3ffaQKY5pCSJCsDBYpyG4nzufgvZV7XzcrMs6eF8STZYxZhnPP8Ed577pRSoEEqPCKyNeKs",
  "key37": "2cWAjZwnuKpR8adNtuXeQn1bUzQFmGvSW2tf6PCm7VHryJwBiQ7ieYJqmjXBERiapsjfrBRXUJrnf6XYo1m6JE2E",
  "key38": "2dkGVav15dB39tNnLmkdbZPAM3Uzaj82RDWnideJ9caA1ZUGjRazn9L3WRuBDbNZztpzzhuJjq4iRFzPcP3tC6dH",
  "key39": "HrfNY7pLTKfyQ2MggdsGs2bGc5czGYwcKoCqdcJuBqwuMCSS376BhLbKHyxwfAQKtZzmHMpMZp5jq1nJNLv3x3e",
  "key40": "4RLhWbJT18b5x8NnPq7rcL9vkaTAj5GjrjwNfq7XCa611aYEazUmjNX51S3TeVuXsd6HgTE6ZHRfcTvGmRo5T9EG",
  "key41": "52k2GKxoqidkJdsqfdfRGguJ7EeCPEgzqtzqGq64SMUgog1SFsvSyu2Fb3fp8qPUhZQpjWxFTtEau1K8eDVdJiMw",
  "key42": "5QB8cumuaWYWsav79fUaztt67vuaUFQfQb1WxDPiGUAGuFrWGY35mptCqAoHxgaxcqiCKe4LsBnT4cRcvfpvirrr",
  "key43": "4X5oEksMi4cRqKHbsxLADfnwHSvF65i6TDbhj3c5wv4XxK7rRkw9LdyjyD1sx7AHjLQjTVC5ZffrfeRGoSPSnwcq",
  "key44": "5NB7f2kV7AQnXwhAhv1hvDJD9Gk8WJWp3hDtXAUP6FT9jUuiGnh4qQokPuCwtzobgmSPzU5XASXwBzgvyP4bWwnr",
  "key45": "4PetqX5vRnvtbwavikLdKFvjAjNJtuaraU97o2EDKdDfrGTQJ3cUHUpS8bur5FWPwwDaHvqNnCpAKpmSRASxUXFH",
  "key46": "2BTRi3QbLs6XgLi7tyCByNDA1JaH4bUKiYRWb8DYRm2agB5WTZS7xGXVEZiVYA33eLrdVgfUXLBMsFWoSNYF5K1K",
  "key47": "25THbuHiRc1yF5zAFEbaU2Ps4PdvSgVSuAtZsEJW7bc9HE9MW9BgtiRm4U3EC6i5qE9ipkMKUvGLHUpD3Tu77c6y"
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
