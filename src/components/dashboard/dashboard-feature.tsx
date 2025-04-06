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
    "3Mf7hs4EXaXfEgKHRBR45Qp1JPMmiF9M32LfDohvyCsdnMPsPmfHnTU3P9UHowKgBDTZQnEe8KktafkuJdzEH8X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zKq3qVKLcCDp2nnsKGq4LfQGFe8QX94CsYssX4xeTNB6wsdz8Q7uQdL8Eey455nsE4KwnKiCp3s4mPHAEsPk2YA",
  "key1": "55uYhjRUgynHxYQAEKeXgEe4gvV5n3nQukq2BvAAr61C7szcQT9WqAS1GAGQiXJaSMNzR7bLKC28pmLWz9fYzPaC",
  "key2": "5oqsktSsiBqWb3PRudCMGMuy9uFc3rN3VRpPMSKA42pApfL7AmjHdWtTX1YziWyAPVtWzBoKF4Rgqm6JcGEmjs6i",
  "key3": "WNjrzEXvu3coYezYrL7BfnMHDy6UaxzfTBrNssrFTGzLSsbyNhgx1JnfXSHkkSrYrP4xF41U9GbEqrYuqTMgGvx",
  "key4": "31StBfKmypUNwdoAs586WjobsNahz4U7SpUfiRwLcciH8yUj7nzJof17TmYKMpgpr9oo3MCXEQL6USug1pNoiHZw",
  "key5": "5TsLidRCRKfXKHHdtK8AxLmj41vaw2ET2DJ2WAW6X7iEc44saZ9WFzSk7d1G2Dopzc3AW7JEHtfshxQEzmtaxhfp",
  "key6": "3Xjto2nrsFuDiRgBBAvMbWaRM6RGCaeYMuWr7DoeX81z9HAa4FK1hmfhUWmGs6iFm6TjbCjySLLNUZSqDvEidQ43",
  "key7": "4P8QaxVG2R1qepUcLRxFuW3AW8ifocSZghWsZkL79jP3Z7fA2kFgfCm79B8k5JmZgGxSyp2Z3sfNExZVG7F4vgU8",
  "key8": "Un6qivDy1zXJmZKhkgmebZn8mUmyffjmUMTTP1WwGgdd3o8qPJDioSci3BZMJ8vPCeZDU6ny2AVWLTN7hR7ze3c",
  "key9": "34yWtrqhcj7xbbyeo7J1S6wETU7hrEbzyofB9zahx5r863nFzfiaJv45kfs8eWvcGS8dGAWnsyZ7ymuj2abja3n7",
  "key10": "62g5j1qH18X2M7v8bz1eQotjHN3Tc6F4FRZ4xf6JLCtCy2UaifV4WAxap2XQaQQsEzHXHRKHB9tNx85LUS9iysAM",
  "key11": "2Wz7dC2qpbSr5BSYTvZmnzQGBh9uzt25W3oT4bJGMAJBGatL82mdM9T5s8qnUkYzTsuuVVXVtnGGqXGaf3HXC58X",
  "key12": "3HAkpHLdWVYVzdkuwwG29DUdYaEWui6owZQHRqapDH2LEPtzzmwDaX4KJbF5z75uPAVuwBWmC2GQjP4WdNYTMmS",
  "key13": "2kFxLX8wRxBFJkV6KFJQzYivngbbm9WX5Y2YZz52qAmZgTKf1xvkyT6aZfVPQY93rpCcGknVQ24sBpV97S75ZZQj",
  "key14": "4BC8DBPCrUnHp3ftDFXZZbZHiFys38XUK4hg4gXbsTjipRTTyWMEBqh9oRjjFpYbowUF2pwMcr2AmfxNRVo5MLz9",
  "key15": "23hZG44VEb6FqMxkiwxvAvT11VNWoYcUmATpeNwvxSwNnxgaK4kjMthfZVeHuYBE1NCct5UXaMPghkJ9C5EnDZ4N",
  "key16": "63mt9JsSbLPHEuUCg2b721pRFMGqx2BaBZPUSxijj3eMiZDub3BoBCvDWVDWtSrYikdeQvUGMYtmTARJsrikEsY2",
  "key17": "3hYuDT5R8wvxAHTJwXhyARGYAtRio3pLLZtUZCsrhftyJhyYegwYs542SxUGhEhjZjKB7GZCaZo3ERPpWNVAzEwZ",
  "key18": "unZreNaiia8quxYuiwXjsSP1miBVnprqsSC6Yv7EZRnWxtp349xvhQwvCqEyhSHVTiyKS4gS4x4GEBP4HDgArkx",
  "key19": "5NpyXXXwxGQ2FnTA8dxGGCoGwBVCMghaBTz3zxgsYUAcnNQZoG6LU56fjtqFBMKAYrzEB4z17356pijWSYeQ2pvJ",
  "key20": "5we8VhBoLAWcdxGhLwbcCK52tqWtsNnYmicv5fDAuJ5pCLKbKwtavcnMeswbchoUL74JrwC7bYeBS3sKkuzXNKyF",
  "key21": "3FpRQ4zjHJemZooYHx7CuQkiKWvvH7W5ePU5eeDfcrkmPwd3pqMS9Ry9ZVu1rHEsJMpSfKDyCbd2nEUjfLKtuXFw",
  "key22": "5jw7f6uefbdMd72BnWLPkDhpcvRuPKR5raeE36K2eKkpNohbvd1yw5BsZQCtCVfzBKrdaouuPA9w3a3XJ2g9DQfd",
  "key23": "4SzYwUkDydv5vKXDNCAucQRR6x6A5efAQViLufZad3vbiJG5xkLHq2UZP7Cpa8sJgBkEtdUtztQMP3kfTM4z5AMr",
  "key24": "5DQv8JuQEisad9LpNR5eoeyLEiAvB6ZZmbbdxv4fv9tVTRWA9ZcwT5YBestZYdPZB2a3KvE3Nr9EBEQHCExCKJAi",
  "key25": "umy5uYCA6o7EoNmPriVGVtYGYG3Q5fd1vnpS3n92XotgrPipjnE5kzsZC8YMQdQeJyVgABcPBMWF2AxLPyG6xBr",
  "key26": "3Xfp9dH8JnDyUWdXVekYCzyU41RjGUcd4KfW3g1Uu65yTenMMqSY9QtCEvDDTQ1NoPjoTgF8AuBYYRTCqNGbe3SC",
  "key27": "eQ8PihiCbFgfJCXT9KjtBfgRvibyoBv74tUae5Dh1uXaax3ggxY4XiXRS1v7QBVYwyQtXJX1qRu5QgkrYs1eY7G",
  "key28": "6PS7EmCo5QXUXR4tJRBrNwBUXbY4V668jA3Nk38BU8A98E3oJFiNt2MXw34YNy7gGQZrBtCkoB5MWgiLvp9wacD",
  "key29": "2ExayAYTrXUSY1gnuSvvhgGD84U8ZNwri9mnuScEU7KxkpGgCGiLj1BWPJ9EhMKPZHRVfaWLYvds6KGjD67nZCnN",
  "key30": "4rk9Pn4JqSmRUrkjX9D5KUiLoa3QGSaEvbSJPE3bwvd4E85G2Ju4dHX3o9Mj7mF8EVZdNYMsbKEy29EVtijjWk7y",
  "key31": "42PQqCs2xnZDb2vCg3YQMXBQr6AEfuUwgWVhfjvSZoy2uDfaxNeHqen2ZjQsmyYMGnGqP7mf62z7VwJXhLWaA461",
  "key32": "48pXYBEkPgkXRsULEaQSDJ5WaZmeuLMmXaZDjDxbWZMqgxD6BAfeksZXJ1gLK5b6VBG8XAdEq1WL12FagzKFsz8j",
  "key33": "UxKHJvVqizaVSDndT4Go2zhSRTkrEgFr7btAaQUWudvtZXYmvXuzVo72YVWF9HpXweRGFKQgnviUag3KmxoWq1e",
  "key34": "3bnrF89B1Qr3P48nNkG24KnqzhbtfdTsNiAL6xLpDxxVon6axoUfL2J77VqfUChb2cRJ89XnCPkTpGbHFurvSBxe",
  "key35": "3ib6pFC6SpFxfe2o6H1rPNimestMgRgSMZT7za3mYrYH54NrusSyXVT2kSjGVQ2fkNbc9fzmGss2UbuQg2PcZGQ7",
  "key36": "ZFyrb37KA6miQpu9PankpgjxXjftG79vF4Mcs6nNT17kyPqL94odNxRNid6qDRMU34fNAZ2KewwvjLAXCf9gS76",
  "key37": "4iThwp24boYZUEWA9torrcKrpptnDVPefUkzo8r6P4Uzvf9LfhS5bh7He3V11FLs47qicPFq9esqrGCi8CbwB9f",
  "key38": "3eBe5JZoLh2dMAXU8MHZYY2wAfyjgjiiVHY4kn2bBjRmcFspVN3cKVXdqATf2aiPcgi8VJbBSvV1Gv9JcMjnvX1r",
  "key39": "2maqpbKZodWrWJfGxet7HRFLGoBPNTTjoEgNx2h2CmTSRtRWeQ4AZS5dW3jVeqPLkRDBJqY87L8nM3VGr3KCL1YV",
  "key40": "5gyF7Wi2hS12Lz6HGeELxGULJgSBUzipnvYLk3BHmEkcYDjg7q5d3aVkfnoSzUTxZ6rQdmzZcxgwThYVCYaNP5gA",
  "key41": "5nXrCWGrvmnH1Fs6VHn5NAdML2aQSCza4psL4a1sVCQwGpDvivzfiKCC1cs7Cs7J6HcrJcgDMpx6vswCwvzHaUeg",
  "key42": "Cwsg7qyo6sWXHuHzDQG4yxEMwzDMqzDNhPqy6CmaCvRTeH1nqBEC8izcXBPtkuihFFRiiHqMf3qUZBB7pnDf4kh",
  "key43": "3RYQEzRCc27c5vUGZofovhUVnvrNBQkaN74L4NdkWwiaHLJCpTEGzfyHWtyeRJ6Fuk4nrvQZutPntEFtknQrgGPA",
  "key44": "2RytmWfLipgabgTrgUwSiip1eS5TNPD81CCzmbX6CrtYsbZesi786Dm9ifT3NS73pQyh5XnYPoraN5gRGyjhRN7W",
  "key45": "2GMbAcN3wqKt2rvp9zffbCuYrAVjSQQsDafVSHmnFSqQWsDac6ubgW1KsmwJGRzMbRnxLGomfP8XZNbDQPe8orrb"
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
