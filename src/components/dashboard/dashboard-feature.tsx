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
    "21YwKjPHneEfwLVkkQNTgbxEMncJqJNKz34Fv9j6WfqCTfnwYSgf7YemUrKFT4SDHBTM44JqaQKGh9q8hDaM2Pd1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Kz9MXTyy9eBrbhqFdTmBiGkXfaARge8o2agLz9Sa17uek6XjgzDF2yXWt3S76nRhRdAR8fatawuDMhPhbxJRJTB",
  "key1": "57e8hXFRd67wXV7DsNa7YzNkHg2a2uWPwdUrimJb7YnfmJzhRDWzmvqWo287CYN5vCe1BNkZH63akbhnfpXuzupM",
  "key2": "61K6qQGrLzFVsW8vaz6NUzF3wqYjKtPDqMRyV2BSBgGkhLzR3p5kkFVEwboFkMwxTe4AXdoStmittfqp2A4JZn4c",
  "key3": "FnHBDvfJLCSkrzioY3EUQGdFgwk7dZ37eukXQXQeJku1E6Axi6EEbyAyL6xGT5nJwxb6gR74EuRgBYsE4s8yjkT",
  "key4": "4FRqoQKrY5Jqm1Qt7c7BZbCCqE2qZubebSVNF3Bu47eosp8pcqqZkp1AxDbihYFD6sMG8fMYLA1W3G3WZTTAkdKM",
  "key5": "4BFnNy5qMJ734Hdhmj5cZTF7gnSrZnmpHb83b4giE4cDk7FaW8YVXB1qn6TSHrDhhDiMZev3ixqAefz8AVhFAiER",
  "key6": "4VdCtQ8zd8PfSN4nCRdXwUHH5qvoCJdaezvr2tmu4zYEDXgQXYC5KKMmhtvmNnY4QBaqgoTjUyGZxW1UdHw8Y7Sj",
  "key7": "3pMehoEYBM4gedcfmndz2zoXzQWgGwHwDnxjn3V6EeYK71ZpuTNjAxjX9MneEBPh1RS6t6wGrtzdAJNcCLcgcp4M",
  "key8": "54DXUVrpXrDVbKvpB1ePUvVuqbe5SiqCY1mgiSovdFgpR1GBRY7hdqEX7MsDzbBFT4T1FAXaX3oRgtnZkQdZzaSD",
  "key9": "55XqL2v3XinaC5NnHbVi35Br2yKRAzmpS2R79jxv5CsefoZA8tEVUa9ZMChG6yrzye9hwKxyzmJDpydyJkCtPWo3",
  "key10": "2hqVzVe7CYxBUetcA84rE2bMDFU6vEhJT195QYTN7TW91MAe1eL4hsriEqMxnRycYKE4TEfuUvsCSDqeebeEtJKH",
  "key11": "VBz3Y5Phzwbuq5eto3h3wmUFf8QCRYpeD6YEeUmdwaGBj6yB6ukZAmmEH197PfkpAfdyg6ubZ9wB5d9n16hgcR1",
  "key12": "63cogF75cEJ7QTHir2HWRCNLdqNExY6K5gWjusvjTssigs5yKS3hwshUaSsEcgQmsVdPMgZaRSEiUmPTmyYVVuNH",
  "key13": "2chwrKB7s2s3XfHEo3oWPKDpjQQhdfhyaGpiXohLdu3qgciU4KwKmG1A1d9rYqG1eiFvbrKknkHoD4NDM7w3P9Nz",
  "key14": "3a273oZSJE2Sk3bYWNhzcv5UzG7c12K8y3BtcPwgonrLss1vRuEi4H7spxBCd5vnczG5PT6drdQvpRwBaH6NtF9S",
  "key15": "32nX34GRBS7j2k7ujUqzv7dudHN1XNosB59xUYwZWEQ2hgXrr8AdJFCASEEY7jXzxuK1VLsipP1cHo2UqRmjbnq4",
  "key16": "5UrasfFvoAdhNGJzTjDkevVWDR97YjjVxpWrtTUUfydMwPqTKmdeKG6oAiahUjXPR6S2ErsXUb2b6wM1Wja3yjk8",
  "key17": "3gWPAvktNjhTL1vBwHe8XLu27y6K4q8kWMFXNXMhyndTdtQRnamvFGdrafCVkvyHraUMeDF2eMBUARaRgYN3WHiB",
  "key18": "28vbFJsHxYiSNdwhtkBkXeDVh1CLniWxpa8MU3z2ic4NDWZUdTd6n2zKJdGCbdjaFAbaVdpf3u1HwzQf233PQcwb",
  "key19": "3bWDVh4SqvCuKAT2HtsHCrT8qmTwfyPALhbXCF2ECUZcutpFGUqZYnxrLD2J1vEtdZBb2et2jPfXPDDzYDQd6x8p",
  "key20": "2ZfgvRb8rAdSCcdby1pnDLRAAaQqbU6rswj3AekYYnyanZF4YK3cDRJW1woSkjwpGY3UmVDcGzpN3nEbKisGCXnA",
  "key21": "3PnvHSHw5rF1c9gqpXrpZu1DaMQuLRjNhZvPPC9h86KnXbD5arre4hwrJH58nYmVKcEF4HZgw7f1ChRKhhjVfjg5",
  "key22": "4cKDba4ZDejv6xTAPchha2JMHKSVo62LyHvSHcg73e57kZZu7MdcD9psvygErr54Akm1TC2rTU94K1JdqZNp7459",
  "key23": "4yf3kmNn9Fkq65nxhfDnyNeqXFHexpzgZqNj9xjcWzZujmQSERk5hym2a4cyW6xQNFjEsFSSt2eJ6omtLdTEp8sH",
  "key24": "5hEurgPPJXcBB8CiFFUXxYn3QKsBo8cKSbwbgoQsxVqH8Xpmf5njPah26hjMipJeuRn1eEkNAf9KHBo6Q6jgnCfN",
  "key25": "hDkHriFXpwa49YwWfhvFCcsbHepxj2MieaxK9q587pyApguwhLBjFR2TagLjkt29juT9PYBYGwj1j79GspocFar",
  "key26": "5EUxCcyH2f7WoRRvDdgZV5Fxb6JeE2z7jFoeKA4paGy1n2L3DukTFHb7YQcrZfzLsXeBdmaococ6Vty46GsvZzzu",
  "key27": "bRTvuGX9hdZPmmnh3KWG9tx7VRnrz3CTJB76MLafkC7pwGHD6r1GDWQCBcHtm8DXXgY7mAq7T4x1Fs2CamGZ13D",
  "key28": "4chJ48ksK18WmkukX1Jnzt1dQYchyywjtLJCtGifqwgtAfjyNcrzdoF9jiZcz7P923SJppFye7EiJEQ947A9nFyY",
  "key29": "tQMhAGjBALrQuWQi71NA7iK3dvx4Qm55qWXWPYYmXK5vGe1QgoKyvxREt7SFxoxHH4wy8DQJnpupW64PLCYFADo",
  "key30": "LjpKGJzCo1fVC3yQhTJ1b3ntcHGrhd1FKFgn74scnSqrzNQy7mrgUux1fkyJVhQcbGXUaLWGeCph6Rt9ZAKW9Fu",
  "key31": "39it3ezD1rj7FeXkhV93D96JRMmVC8qMEMHhtDhik2G52GeEUdJZxPsTsbVUxgQsShTmxxB5XLrb37dFimsbAiPG",
  "key32": "51gorLnQ1NAJddNiE8cUtdEP7RNqgoHAi448K73jHdyx5HVRgjpDketVhzp6UZMsidsUk1et7BwoFstxDKPgqMuB",
  "key33": "2fxsgqEyCgmip6zkcc5JTQA4KiA5fG4a5R891UqWeW9CnGGUe7Ta2kdMFDBa5Hi1dv1b2KvfmBcEbgHYDi4g5wPR",
  "key34": "SsZCgpVbrmvUnCEM5XEoNqoVnnJnaS154DkwGvrWiDYaL8ngRKMLSmMtZwmbJGbPvh7nwSBMTrk89HP2uZcJyzX",
  "key35": "4CEE8RBCCFmZbtjj72PDRV6AVfxoaYFpJ5xARqTiRNBmg9RR7sgCwiSFTLDo63v9c5B744udxJoFM6Vp5vjkJdn2",
  "key36": "4FuyyqrrAK9B27vaeTxWAyzTwiCPvZQHY9mmjMY6GA4vyqWDoLnYQw7xYPwaqTGRASJdpEc2XrXYrKiEx2PADQbZ",
  "key37": "3zMtKnyG9Lz2haAtQc3y37ZXSLUVe2pCLt7yEDGvA8hqCXTo8vXNvF3pxB4ZaKLgUWKfYLDDzRLjo39w9gCnuKZV",
  "key38": "e6C9ubp16vvbnfYWtpAZCdmU15kDmxLjZGWizhoSf6jRHXFuQaFXCgqScRSEyi1QuM2XzJc5i9tRpBdMsjBYpEG",
  "key39": "4G9gUkNhgr2YYZJ8if8333ByWACYSBVAt2zJoGvD29sViZXFjFSxspTuTMPSXFQuYBWBAEbKWjbFSYi4z6Pd5YSQ",
  "key40": "4CWaZaPX4wbtKsiQPJEY8tMLj5HKDk5QJBbKBFrJ8aiiKupACfy3WkdbnZmhPFYzg1TWvH3KJYS79A8G4ZUW2VTh",
  "key41": "48fttbmgwhD7qHodE4ZbZaAxzhWwPMJxD61uymZzVnCdrWR7nQGi9kWFMGtzWGRQxtpG2Qtx66ZwDqVopqXaYr6U",
  "key42": "5QTRd5tGNu169qSheXKByqTne9LGE4JZTwjQ5uWP7Hdj1d6WnDvFLidUdtQL3kwM6DSzdmSjiLrkqLeHjexnGmpF",
  "key43": "32FEPJShCae9Q9SWC8QCpi1wk8XiGaawxjvUT7AQD1WRcjC394q2C8yRU299rvY2rWXP3Mkf3BoRUStVu9QwwhKQ"
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
