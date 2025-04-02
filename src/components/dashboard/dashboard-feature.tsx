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
    "3gpHsQEgXibsmNxEAMbhn5yvRMYyKpLQZApdBqqxdqPR3wPTEKvquTaVpTd5Dn1yQysPHrzUVctANoevad6gXNrZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gsreJVrTUQa1mfxD57Fq5wY4fFReuUUEMJQxfzvwsDXWhAGs2DHdFxc5PozZUK9uj92FhxEVyjYvzbQ7QSzS49z",
  "key1": "2RvZf66wY7fRc1ndPXFwKX28HJ5i6gpXGRWPkZcLBSno2eijcHjgZgAh1hhMXEzHfUP4sWdCq2AZ3JMqucZYvqBN",
  "key2": "2LLcR2R2Q3eA8Z75yTASWhjftVpEYdyrKzMqESdmJGzafbukUY623jucwXSbQzqrCJy9r3E2mNP9m7M3fbKKi89A",
  "key3": "BWfWTSWdNgwPTXRrsJ6Vbf9HV3eU4G6WsVAevrDwDExmXxy9Y9zXR9wvb9ytdLfoRbYzCTD8P5zp5TFohxSPqaF",
  "key4": "25rTiNnPZZEt93NPikhr4UMExuaa4FMu6Xogn8hc1QP3NRPhMEy58Wt1DTqaYfgerp5KyCWRB4ZMAKGV5moKXi7q",
  "key5": "4B6N5o7kBHtXX7fyB2m461HNE837ezjXEzk1Ga7P8hfUc2MiJw1M3K6WRaQBsvvcA7zwqteyuWmMaTb2S5xDexcH",
  "key6": "5p6Bq6xtvLPRW65gbAvSViLGSfB7mboZsBFmx9nqpayaFt2WZQ3f4KUdTvjrcJ9iXhev5uw5LpFmHMTWu1LMJh4r",
  "key7": "38Qah8YVvv5wm9WCoWgM4VPUo366bBTxVBGG3kG5DVDxJQBQhe5Qhd4tMFDHmrKeFcnrM5QFh8S7yBy9QFbFGPXb",
  "key8": "3y1d9RN6GHs32Ro9RZSL3KVdLHJD4ExawLQ8gpib2UmfmgTFtqpBgr5DwYus438VRqEiEoTaTRMyX7h3xMTyQBi5",
  "key9": "5TSyvab9G1SDx69R55pamayRLsLmeywWN54AgnrPHhiwmhAyUdUtpQGzNYTJRQygDPetWQxqdVdW9CAHRft9vceo",
  "key10": "2SxwDL5MkEzSTHjcnszuzctybfGYgNfpSCaBfgTFW18vSYNddLq4KeFYH549PCawDeN1yCwNx8EoQBg4aUxftR58",
  "key11": "2vZhUCembBCyFvM9byazagJmNeArCXq6t82hVbcpDkk3wMoYHJiHF33cJkduAhpkT5Ep4eHPBxhnDiahLyhYAZ3E",
  "key12": "LfWuDykhUAotrJddeJdyDNPpT9jwvkfS3n9J3NPxA1L1BnTEHHNWBRgB7S1WQVhqYNa8QGAcDrAhYMDRekekaQ8",
  "key13": "XmJmFVJwtNZp4iGA6wdh7x5SSMvm9nJ8CuTWvq7dpQBrkYSHNhC9nhzqyqL8VZxPCHUvcvriTc4Ke3kyr1dDKUn",
  "key14": "49zFYkc9fyzPxTijLP5nHhQEq4jssx44oRHAzJmWc5Jb1iyzB3pk2mvDfbeyVLKF67oQJnN6FJfZa9MS38LQVpL9",
  "key15": "4i9GM5ovKXmNQTqJKTNCvrBvpZkoKxCcHnfDe5mnxypYYUqTwUzWC6FjV3Aw86SF38Q6hVRMqhxn94q9Ry41Dr5K",
  "key16": "42yrYg5vbpaR5tVB9qEcxGyoMo2mzx5WH7xTrX8cVyK4j4dJWKpoSqzAj1yzC7QgYzwnbZWWWJgEszFKy6kmwd39",
  "key17": "Z6e53JNehhLDv3xxpPiVKQbBEdXNx2EbdvMwohFM4SxhY54tzPVhmdmVT1GNK1GbU7nBFRyHXLM3FGhfuqJMSMp",
  "key18": "5qxgt5hg8J2R42V72M5VtDJKUnBgXWwCuQkSVCx3nzuwGftkHhQftH9Rgug6mHbrdW6Df2VMSiENejByPbsyx3er",
  "key19": "4rJbJUK2KQC4WociFb8X9F74zcCnSRbC3W2ye9UQN3Nzihi7ar47oTErzkbSMDyX43i9QnpFEELnLJoTCbncKyWC",
  "key20": "4qtRiRqkK4a4aTgm3C3ytGyJfoTD5n4kFG2PEAVYgYxdGizxjB4NHT6r2TJ9KyWFHRb2jBR3k7YovvpQ9tjFoBwy",
  "key21": "37zPK2pwbYKP2d2FjGZ2ctF2LsGHA1nG1LqN8NMZs14RDaAzRhTzL9sZjfHSNqNTKPLX7c4HmKgioJmLSatm2oEY",
  "key22": "29ewLE57PwyE6SeScWDfndycJMWy9c2f4iHsFcNFvnpk5gfKT1ETTGdtUEwHkDm7vGECqfUvsQLtkfJ3hNp5xEek",
  "key23": "5oKEHyCgWRNm4fpEQr1ZjFe6nyoFKtE5fv5Y7zYMTWAsXin5zDdDiqxpZXT2sbVxvMyhAuodRXW9DkVCZ74tqHB2",
  "key24": "4ob7f9PnG1ed5Vsj84FvnPtEwcEDKayTSXAkwAbxhCrqpoLia3HrmbNwnVobTNejZABTGAvAhmMghtWrB97NTxbi",
  "key25": "2mvf2nXK1K2MSqKq3UKqoJp3VV5n5nojpKHZ9bq51r3nJWaG3VydrUv9JzRWpEN7jB5aVu2Yuo7ZSXqB1rhiykHz",
  "key26": "4xAcxoc8oUBDtsrcKmZQf2dCETFMj2uBE3VdX8MsY8qqJnQ5uMZWVnPamqeNdRAcXBfNE3qQGVgxdWstXLtaoAm7",
  "key27": "4cn1oWusCPyVndyGWqoFc3CGuNBYGRHNvmarzHpqwjLmiHio1S65T9cAqTtBMZbq7GZztZypWcjKXj6e8f1Mnk8L",
  "key28": "ynmkgCSfmt1wAuENpL3hdueMdHgHvxfWk7k85Hi9AzgCQBQcdU8k5NNXiADtcKBCXeBGaLxeMpNEALvhPyKoVjn",
  "key29": "4Q9ix4EJLurqbzP8BRyn19wifRVHdSCRgTaVwpi87XfvdxrZ1Gcn3JeeRiWieRmgNWxkPWEi2rWN3GNBroNV9bV",
  "key30": "2PFcVjofNoJHXKNogWP3MW1VqMFtcHcJ1QiDd8kWrwJfjaz5iGV8kA6hqcJu92wyQfK3yykqgSJopm1oJJjfpeKd",
  "key31": "4Vw3BPKiF58qLmEUKwN197ZaQ3ip8nR4waqLmuebHFvAw1GuYAVMRXSxuo3VB5kcfcUnJXXxv3dSCfyhJWBuHHqG",
  "key32": "334Ns1vcm9fHNXRotckdTsNYNYpGUDGiTeW1cJhPSngEgS5qzBXNoEtgutPVvduV11P4cT4BuSkUkUTsfsp9jF1C",
  "key33": "67AoaYcZ55JsuxUXjNiG8rfVTgyKcgmbHh8sBuXdJfsXuqvMq8eJPp9dD7mFz2ADx3Pa2V1tuEKLD1dHxbnm5twc",
  "key34": "2yQ6MjUYZbf7KJ8KHunG4ovW3pmus7wJHrkQtCmAPLo8neVcM9BJvHoLu2DjcB1X7yLH2sPvvL9D9AJYnuqmyHnr",
  "key35": "3xR6KrBK2GPvr4cyCHERBGZLFJd2JkmVBBrGsVss2uL1SuMjVdi4PGDBr2zEEQ5gz1hbtMZ4fzHZt1hfHNDJdFdQ",
  "key36": "3CEj4iYM1xMtEgppiihE4FkQ713SXyMYtbf4VdfvCca6LdpcRKFPMmdYWTqwuf9E4CBnpdY5cgr5feemoakMLvmF",
  "key37": "5QUBTSdaPFmv2zdaQ1fjUihEgZ3gKWiQ7b4xjd6nLAaFsEUUFbFP8vC8rRbNu9762cZgT29P3ZCpShXqWbNSqMrH",
  "key38": "44Mawdsc8cxcZDyEVVuAeBxots8fCKWBCBchpYgNw1ay13ygEz5v2KkcLDKrYuE2YnQZNfkJGpNStAHRSyiLokNK",
  "key39": "2JGwj39RC7RzWESJTdHe1NGBMQ2ghiZQsg5N8SS35AAq9QBmRXUZGbP72aVqRgLEBD8Lpna9ESD1Vm1amGcpFj9q",
  "key40": "XXNYBnkMxjJNNjEnm3UWXuP2qUzebUJ9VA25bqcY7XLQxZutVGMPidghqDPu2qx6nmLDBvaXEsDeqsVsdvSfnKH",
  "key41": "3oxKG4rhk5PLYtsSi8HxQNBXaC5T2fE5t1KeK4xJwP4xxT4EidE4g1t6Xmkqj3BrZrngQd3nTkVFakBaS1Qhh6ws",
  "key42": "5F37DZeKL4gcToWjfPJRXivEApVFJq5GKTDcMCsLxdCTTRJHEgZGfc8scsF2xicpdNaDX4AcPCAPqFMfysTSdDPT",
  "key43": "5FCrPsD6qJo8BvNYHpbG2VxC3TgZUQiuLYQmTzqtsKdBb9oWSy8Rfy7dyP5c1RzFNDwb42fhvcdrsRuKvJkMoSGD",
  "key44": "3BmrMBTLNPABsBqoCfF6o3PWXQExoXVxvpTyjGw8mgHWr4HMJjggqYtndLxhqoShnLxtg93a4icuda3SegZ9kYAg",
  "key45": "mHaskRJPL1sr9xBqwkRjYASvNg15c6B3NMguNRLsZqb1WrX1ksAcGFvihCu53wNAGhm68vo54araEzXQs1Cp5Nx",
  "key46": "2wjDPGypvkauGDDjqQbmtdzA9Xpk8nzhDBpFj4SnRV9rMg99NMuTBd3wtkms9N76VhNjuorg1t2XhUVb1KKh7jej",
  "key47": "4viVwv6YZmJAtK563BphoN1eQD1mNp9VUteoqFeVs7sWpCogCC3VyL2HMnzsXXX4wP6uZid1uu83tEmxVra6KfNM",
  "key48": "QigSseYHyvks9pgTvFrCTykDgVHgbq4DH9Kr33E8UAii3cu3CvVXRxiBGYmaCSSgYG8DR38tFHsiPsPfuEP2m95",
  "key49": "2n6CX8PAUhnmTManer1eNyRkcTRHhjkVLcMsyqMReb771XoEgmSHt45woTkX6Ada4h4GZT3bRHy69YkvHm93C4Q7"
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
