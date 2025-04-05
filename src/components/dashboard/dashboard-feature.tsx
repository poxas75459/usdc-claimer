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
    "5LdSCSQMw46ARXD1n9BGzd7nrX2h8YkFJxT3dJf2ogacRaRv4SsmqjB7WxLzBLoZqeatsja9RLZzv4dE7eGKrJjL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jahfQ3YM652R95hDaTPVzkpAuQEPYFjQZhMW1U9VD82k4j9WCq5y4J6YR7AL3UEhK9ivtkj85dKp89oY4untS4T",
  "key1": "27ULHXpcyFNc621MSyz9XbTpnzC9En2F4p2ENbH7HtnQyE7RZDiYDyojt7RoP2gjCDZWg6JgnKyiC8P4RRSUkYLn",
  "key2": "63qtWAm4dBgRvgwa1TmbmdMm1t6kzU4Mx5FhcrVt9DYLgVVH2qxqsdppxuns95nTgMFonSH33jY4yQyWyhymgnfz",
  "key3": "5VGNdkxTNG9Xah8Du4EVwbtsidjHPTktrWJFiPEdroa2MaLX6ChCdpALSkscERUNW9bFu6hTGoFN5ejN7hpCZaXF",
  "key4": "4nQispn6cXhtiQkYn87f7ES3z9UnDrsGh16feNvAanWe6yEENQ2G8zXs1TeTPjkG5hErhpfZZgb3uvCRBs2GpKWV",
  "key5": "3M859x3fv7czMe8bQKFG43R84ajUtf4YwnqnttqaXuvG8gKULKL5avELzbUUpMkeR5GzoGdHbgAqV6K59H925abH",
  "key6": "3RVPTaPPGSRD583tYfDhNURJ9C643X3FC7hJ2KaAcaxgSxJxi88pr5MytWNGB6UPvUQATF456ez9oHWcHGLWugbV",
  "key7": "8gujzasbPajc1FLAcr4B4XgqRDwo56yWnTKiGVyj6YmQg5qo7XNJFMicE6L68YrvSVYsVw8M5Z7Wraraa4WTn8D",
  "key8": "4Vuc7H4SWfuEx79iqsRBBk36X3Wi47QVeUsqYuZvFV6JobCNgrsk3AsKA57BdHoC74KnFnDxPHcq6gcyCJnz7kRp",
  "key9": "2cHtaXwADV5h33eH6sgoeLFaKZkELvEjrmiXvXnV2YKviXeQn6QCq7agLLPUv77aGz3fWfNB64WaGSufbEe65KSy",
  "key10": "uFsF8Kr2hr4GTUgSZxUAxnviGAieCCDpYJdjwQnUhwQXxHyL4pVw9UWGGLCK1NL3JVZ6hVF5VwfjsLr78QS3c72",
  "key11": "tACW2zWR8ToyqY4Fd1mwymV787bVxzhn4P5nJiJp77ErtJuEJ9UJAuarrzYfUsPrVkoaVV5M9e319pDRVAFcaSM",
  "key12": "CoogNYNZ2vne11eJkpBBBGwATqCj6qaMzspySLRLJpvyaKZfRyxpNauMWA5ANeyWsaqGgtTpx49brBw8qist6LP",
  "key13": "4XYYyYA3NvFbBvNTu9pbASexrKhJezL3p2txMdqd8Toq5faBfQZAu5fcdAqKCdv97ra6fPYYgxy5M4zJRW4S4npV",
  "key14": "5LgfPeNcMKVuswNFZXoCuEposAs4hEu2vRb2Hwm4QNLzMC7BLWa8m3wv3a9XtmnrfagLEm8Ayhv1mgrZi3Hyi28Q",
  "key15": "3Afvs8qwPtonhsdcmaoqeeZEL5CFAq4viqyRv5GV38yVxi6agNbHumzDPwmZjRYmRd6Pebc14pe7NQwB9ui66wBK",
  "key16": "23TtZHnCMVjPb4cvNbDmxabSTxXsjkvTLi5w9XzTgbKWfsgxpKfZ5XsxhCmyjjcX8pjdwK6LEaui515SNysBn1pi",
  "key17": "5a4UFL8bqavwuoJPvqZhCPbHEchkiDSETCA8HEBF5bRELEJE1Aazoat9NRoh3SHbRPwYDCRcz83yBW5tMkyjHDcq",
  "key18": "5DZyhB3E3cgoSNXiN1CPWa55WycmenAGzefsuru3t6yFrAEh19yobq1AAsLttm9ZTmjStpernau94dYuNm9U1bJP",
  "key19": "4JrpzFBHWJgAcxnvWff9kC1HdqPqPM9h33RvhVY14bcDwyaVQnAMuHmH127fPJhdH58FaXx4DWLmk4ych1iLusot",
  "key20": "4FW3MGgB8E9YmqzWCX9eGxF5cWyJXxWDcDH6s2VUVGdpCpfXGU6yteMGDX3DpPKjx94sJerSvmzDoQy3v9uvPAak",
  "key21": "2Wj15YenrscG3HBs3LHfQwYhJGuHJiYiQKjkCKinJyPLiyFFHdrwGJQmmLWjvhMbAWykToGDMBx7bXHjKwnqSijc",
  "key22": "AN6VfbE43KKNYgKXUvjsmCi4mJJNyx9qe8qaL5vBpKrxoht8VbiwzEM3XTgj2LeCvS5ByNS9dKb9Y7Anm8eshyv",
  "key23": "3PUMrgNJYw8MRnznWuZM3v7cTSc7mQ8iaSMkGtu3qMNnQEfLcbe7z3WDczALmDUSfSiNFdEf6KZ8DQiA8p2VKxU7",
  "key24": "3DtP1A91rXtdArrti7seiCMNFZ1TF7CatduVgSbJCJkrDHUTnjcu9M5KidNBfnMpuBZF5zr76eRpBs4bjZ8BUWD8",
  "key25": "3Kv2NqNQpt8oyPEuZLgJ8DteJAt21ywhMc9ac5Pt317eMvSsNWuwiEB3KtM4kWR8SRnpm4Rh7EVznkxQJnx6MCy",
  "key26": "2AKb2moeokSxmxrCsD1bw4eucCamUWWwSX7hYyxfFdmAcee5dXQNWtTRPJ3tVVswdcshXktWoVDDvqnGHALhjXV8",
  "key27": "5BEo6GsbwuFGLjQqgQUnRNdSTeMFFf2Ay614W6WNDbvzN6KdYEK9eLH5x1iVowQXM3xsomJyamTQD7EF6VFu6UnQ",
  "key28": "2z6W26aDxLBRcsuvjRL2NYXYcibCj8tGpwaqTvWVKc2vo1Zz5sjwHCgyzcm56KYZoqnsj5FygMFTUQSofkGjyDEf",
  "key29": "5wwfZ21weg6CQHG1nKUsxnkiYUkAtGZLX67U5StjCtt5VBTc6FbWdZPKp4agBnwsDU2GT9MgzvtrsG2tjJbfhzac",
  "key30": "4wVg1hnMJmjbCoueTmVgNQqMAzDGW2nj1Kvu7sgnny362CbLQYQKnrep79gFWTR2RH4ybLiiyG3xAS5KvcyBhQKB",
  "key31": "5BfgqWzpWBxbEWezoq6tCkskMq1KACXA7vkkGHUdpVSe5PLijZESfVdNVsUFLnQTGtNJMYBdWQzCMaPuZNGBbjb2",
  "key32": "4dvGRBV6mLJYwpqUunET5mqeRdS48GFeZQA4VMfXrbqH87xe1Me3iZS6PQBnc7x8g5uU4vBs4GnXp9jTbZpPnBgf",
  "key33": "3SpTcgVS2yYZftwEj6EmHWoL8P2xEzvpMd1ZK9vz9zMFoL8KuwEA6egYJVWABG3XcWg2i66YEzRmyTQTQ7K2qPv",
  "key34": "4ECTJHUTSJHdVATtvG5vA2NVxGjCRZUMXeVLaihVngi3CCFF38QucPbo2Es4Ua1h1nyjiLx1za3e7sqvnYNajnej",
  "key35": "sZeGD6WNNGJKNqjMRypVGJiXzktcBwsb29gQz8Mf644Yo3YSCm58iFrbruqMyUW27wt4QpmDENogWbefrogqS5f",
  "key36": "3AwEqMKhU5yrowQ1dg7PNYsbJUi7UgoSFqmhe3bt9DYSEkCGX3yd4ZzgxdQzKs1SeCjN63EJuT4iRfPM6iEnxt4t",
  "key37": "Q4bbKJdGcFU8Y5efnJHYAViZU3GcNLRYastpuXDW7CNXDtFmspvusSHoGbMx7ZaWVGEax4i3ag6TY7hYtkvtTVV",
  "key38": "5uGZ1vy3fzzizJa825YzFb1vNuJXumu2a7JWG2AdZGnLs56nH523VbVM9bfoL6L7XWUUKoDaE81PxX7KBH2CeXHk",
  "key39": "4XX2rxHNw82PGfCZed56bNJfMhv3AM4TM113nGFEKvRVtw7Hdr1HJi1ZfRvDaWuZ5LqbykGcCbpynjxRP2LfVgo",
  "key40": "5WRJSupg17kAxzeQHbWX4JuXSv3fq1hZ94TQxN6dEMBfWM51q6stjcPDgjuawvuYXVKAnjU9HdSjTaKHAuVtZz1B",
  "key41": "3Mhanb6935bmzyTLquFcCC91bGKtqHGK3bjog4433rfbMCVbL3vwTXmQpcj6xioccyifivtGafFeNPu3mWpLJYtf",
  "key42": "63dzJZxoJ7B83wshvCRktcMVN9sp5oEA8n9txWBsDpmWivELKQxB8RUxsbAfmxkAQZeywwaFnkvbswxuGCMpEz4e",
  "key43": "Kfq8PWSyeacUXpL2BFt9rBWX6KhudUAFq3uP9bfxdqS4pADcFathSw1bsrPBsS5ey7khQ4GeMVdQ5NY3ppCwcgF"
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
