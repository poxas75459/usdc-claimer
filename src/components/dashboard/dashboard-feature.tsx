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
    "55kacDN3PeDtaqhoMGWQuca4XmUyn9iUNaxkxEVZFCpfSdfxf9sSMkWhQLLan8CDDCFpCJrw44cowXSYzot3LEbU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QG4x5P4Qvrbm9eSXV4UXEXdmkcrKApEbexTYWhrE2WF1xWDRWZ9tufFKW8yAg1TjfBLDcmoPvMJDTn4yT6w1byx",
  "key1": "67qJvQqaoWNWgoQsri7CAXrYZqxTzqcEZUFQaTUmuE3ExHuyA9MwAXvN1MnUnEPfpenZA4qm56XDWgbaMteVyUiY",
  "key2": "2Jxnyi2zUGudmRmn5sPYvTUYxekqL7HyCjPsG4tjx3fT69RMGpaL6TXebiaidqLZgF7tCm7dQK5WZBTd9F48GrCH",
  "key3": "fWdkykCoS1oTSdxTjdJtQwj9Sj3AghmKLL2tKjXFKvsFZa7uuH2YBMSyNTw9TZUXfsKtWSNEgVEz1hW4i5JEesm",
  "key4": "5j5JHf2RQYUR5RPB7iWCsFJd1xsd7s3xWftwHdaz5wYjJu4D4rQ658CXMJ5qRLNpAHX6vTRZya5HFcHtAiSFUmjf",
  "key5": "4v9kd5fLEMv2hyPQ5iSDwE3QHL1ArPpWejX39KuyaSrDPLSdxEeLkjAE9C53qxqXZSddDRWsAFrw5Pbkgnvw3wtA",
  "key6": "3k1nsxU2Tb4Wd39qNHKybq1KhjLqjtxjViTmTqaehtmrXXsimURkdY6EHf77dPsvU29h9rAWWD4UJVZisxZTxMd5",
  "key7": "2WCveSRx4Bnq1QUjP8hiGLzjBFBmGi5Nf7kBXZ5rUeJWaho7hCZmRXQm4TqFy6TzCG8z3a6Mi5fbn3TFuW6bN7so",
  "key8": "4autKaXJiff4bncqrQK16KKbBWTnDLe1L4KxTaWxPSAXYDqjULY5dLQcDjzVYJm3j7CuTvF2WbmyUEv3End95eNK",
  "key9": "3fhCYwpTFsPjdxSj8nBjnJcjmdAgnQVqwD2ETgjR7UNbonZUWaG6fZSdXnZLmGmYEfmuFXTu9AiP51JB4yXsuPn7",
  "key10": "4EVhgGNEzRVERUPwzkXiGbf7cx6fpyecDYmSx3aFxxa2rC8aPorDNDFTr3UzQov2ztkwZabVPkL6RTXWEL2VR3U6",
  "key11": "4AjtfAGmMi21Co7MDL1aacrBiqv4Uebzt8Jjqc2mzQrzJ5ZArDSxX32Ly3BZ4gBhhgjZDiF9iYQQtvRZyBVRMiPv",
  "key12": "2oUSQNJvm3rcnq9xkKCjZkW1KEMW35gS8wuBjSu9uEsmQmhtEC7HChiVDVi7RNwNCqDAzNXRaumdTAjuUPNGLUXs",
  "key13": "3CnbvtJmjbE6EAyLn1hY75cj2zxQY4hPWWmyQMLXAa7zpYXD662L2jcb7Mg9sKyg7cav5ZS6jsekgks9f3upWoVQ",
  "key14": "g1bz9CwwmUFishu1PKXDvNzAeaYjf9CLVauMpBhuFTSxz9fKT13nFauYHNLLQQ2anX2gAbpGLD8MomgMFmjJzx1",
  "key15": "267qqixz45dSKyFboPjDcPD5r3o12XQLS3iqjXPnXhNrL5F4KvN2wyWyAZmeDksoFpk6m7nmpWW8Yqd81JeyPV9q",
  "key16": "5DsmfK4Awx2pLcjZrfMrFPkG21uL1k7rsn2SiPFuUTLWG1Jr8AYBXHwSt1hVkzRcutUiHYnzAfVKooekcat3uFb5",
  "key17": "3LF42XaEc93XyCEFHXTGsT28Zom7nTBUcxaH2EAN1vNEiMwmuSn2yzMYvEKdo69JBQJfZGWiT7mYVAS4BKwrFDMJ",
  "key18": "2ENWZ8sxE2RWnJHNWrwhsoaohP33Z7dzSykuoyD4nNYTqdn33KQP3rUG9LHASjuDaDZ9z9NmKyeNM86ynrPgFWcm",
  "key19": "5VsR19EQhSsfvmMoK9AU6NBRRZZundccDLvjrHwXVo6Kn8LU1cmVbMpqBuYJwN37SXstgkU6iLuxDCD4NBzNpwR8",
  "key20": "4QAtwrR1Q9z1S4sLFKLujDiiz5H8hZn7cxFYpTHiWXmTwT9RzawnwbJAWhjoYWAa4WvH1W9No9GuWZSRsZVSZDXj",
  "key21": "51oNmY488kuBBJsqrbZF9FENWg7aNfvCxHNtveDhkdTafLXW2ywT4M5pb6XrFdEzPyFfYe38pzzkj61Pcrgk2mMp",
  "key22": "5q3MhuLQ5T1jaVws2punEBXAPrSAnBMQ8FmjmDMsLJve3e6Fw6nkBzxpv7FqabWQ7a5xTAjwgsRM2tVLBZF2kbmx",
  "key23": "5qhW3Hyzykh12JcCQ4v15JyaMJ2vAKoEnmADE1va7k9oVGbtDmnXR3tmnK9oSxQ5cwX4kGbiPuJWy3pQbSwaZKUC",
  "key24": "2pBPLfC4cfr7oCdWimG2jK6Cvj3Eq89jYbhWqbd2q3cXJbN9h78QbBB1yuozWbh4d5ShsDhNsb7BpeMo2DM8qRR7",
  "key25": "5m7MokgRXaVCVwLtpGU8RLGikWguaruLaphLYRwi7G4EMH5zKZFXzJUymUvJ7FzonMPoFaT7Zkjwq5AEJSV68LtT",
  "key26": "BQHD7ABnuFfrSm6xJSx6CMAUtKzhnTY46zvbnjW9Qn3ZFs3LNF8jaYSmVteaCvG29pqftwtpgrCJuc5fPbu7YFn",
  "key27": "4iGNChT5cZETAK1cMjKayDK8UgtEn3q6nS58pnPndTYVC2zUp9PBpmrMCLnuxPfyQ6kgZEPABtejXVH5E6PcDiUb",
  "key28": "GyuWECMVYtEuDJpvVFqsvMU4uGT2q2tkuv2xJW1SVRsfWAmKhrS1foAJS7bMqkphL2v2bFzZGLf5LKSDaLgDxhh",
  "key29": "5ZujMEd5PgSiGaCX1EgHakJoBZ9yNCijXXmCgbh4NWUFAXMQZXemTBkdrXwXfsRzBQwQusXndaLTAcfw7KXgE393",
  "key30": "2WopZqUhXDsmqMx39GVav9VfC6YCUGnoDdPKoRR4juguMBd91FDA41KtDdYWCA5paLNXJzuyA8Ch94THh8qHS7SB",
  "key31": "4xVVohTDPQGWVa5RVaSERoqd8t97AZPcjamLujLnzUVUPMgYnbEptCdV3jBqR8vYMnNUfRfX8n5svpJWLv5VoCSK",
  "key32": "34G3Sz9b8aTUnY7aBomsEaQa6zQrmLU3erJPX2xJfDSBAYd5cTxhDLRoxpaS1xtrkogPsv8UV4sVGJrskmahXcZb",
  "key33": "2DV62AP4XskjEns1qKBS42fmtsLeJ4U55yGMWN3PPyB5BMbAEVv5EFUMmQ3YLMXFdm1zSc4ZcErKaaBirpwAL7it",
  "key34": "3FEqHJAwCGfj1RpLDRJvDFAPjyiDv1xBYCL3nKECqfiFdeiiQGs6BwGFYkf8BzBeVSSfCpTzWugHDtzmvAD9gmPx",
  "key35": "5NLghBo6FcCnNd1BZ3636Y8fsVPsSwgaS987QNnh5V24Lp7C3FuYJY9WRLP5yyuUoTwhRwwk5JESbcbt4KB4V4B2",
  "key36": "4LnHuo8kXKbay3ESfr5sx9HSbn7xJVobTF67qkhfcaFt4VjKiGSkHbG5XxkTRxZ3a4RDf6VhZyAd3dgoZdkXZ6tB",
  "key37": "236CfyaBC8jZLQLNf1TZz98FoLZ528qJM4h14Qw1btcTKp7d5jejKWRLfHKq8ChDaEp4f7bq9CrRgo4jwDHR6e2d",
  "key38": "M5xPvRadkyHJNnwUoUCLCT23AMQ98xQjZvrzbt3h83Wiqb6TfAYVVS5JTXVEAUVPQx5cDDDNXuYzZuQjfZBiZ7e",
  "key39": "2617an6T6MTLXcfiX4dh8ieegxX3JUhshhSv6mVrr1X8BxxAbg1JhcioYSj1LVg1dpyZVJgfvrAGttcVCMVbQyDb",
  "key40": "37c9PW3otnHop8ZbUg1WCd1BKL33MwQ1uyuaZn3LqqtJdNKWikd31yzwyx4v2CoRz5948weMdChz34eiVPJ6JfbT",
  "key41": "24MPeDqnZD6JaK1n44fShcmsz18LQnHdvVF2K9PaquA8Txb2Rf9KouL9ZbAW3t8xn5BaKV7e7tm5FFdWrXTaeUpc",
  "key42": "5azhZtvqW7mPazyfYruMkBFckR8jgPGKD1BPntD7zMd2Yw6ykvFfg8zgU9bd1zZZpHfE1uLTPFmo3Ki7T663w6ky"
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
