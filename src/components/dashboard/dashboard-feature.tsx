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
    "K7832BP7x2f3DEcb2TkC6S2jbTdcsZes6a5TR4k57UpHQqj91V6yjA16sg2khxDYswfEmhgWJCsPrrPWJ8VfXke"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Uj463hATs8oVi7JXbmFdUGSh2TycNLj8h1cxKzVSYCjMvcezXTE7d19n7VKLQr24tFdtDmQUb9nLCxf5Be7S9si",
  "key1": "5Gwr7UveWLunAqSbVQnfaED6cjLH1SrptFToJwF4oggEiqyJq3dobhpRUgfyfyeKAM2khJ7aVZdcRPzdcsvYGwUu",
  "key2": "iC96peB3HqAhgpqv84SWD7uDvxv7ZQ9sdB4vrgXExnBi5APE8vhtgaydgBqHFsVPXTMANd4uztYJANGSH3FFxmF",
  "key3": "35FHdKPJTC6xChx8FnqhZBApDrGawmV3r8a3vCAomTJQygyWmyvzZo1Wq577ReAh6Q3F2y4jpgjkK5kC14JM8JtV",
  "key4": "3XaJijrorBjdebYTHF1hK4tSucuz3Jrjstx943VTorZCPGd9t9dnSQtXeYGph56eCHgJXjJHVxb8cHyPbnFiJVcN",
  "key5": "4UTP3zvmXdW2xkjGSHpPFdMEmusUUHTvrCCFxYJTSxT4chNfRmGKzV6ZT3bbuw5hjG1tPm2aKgzC8eKjCyUvjcwv",
  "key6": "2SbVHSjxM1rccHK9td5nKw8WSs9MoDgMhwEhS2kwYD6Btc1cQznE7ZWQF8yjH6CUBMhLFTSkvnuWfDkefJHYedZh",
  "key7": "42FuZx6tapjY4g74ZA6MQ2kNTN3ELqaCRBtj6NjGgRQATAhbU8nqMfshhKgNS7KPTUN2nmQov7FYZPfibR8SxSCq",
  "key8": "3mXPS3oymWdPL3zLXDREsc2UHEVgSFJ3Nx87LTMfxiXYZfcMRgnDfWsMCC6yDFCifsVBbToGVLhYGAwB7NBqsbVT",
  "key9": "oesrd9a6bftEeE6i51R9PzLX2eRfgs5MVXTQxQ65tVXBZkMvv7wHkNu7bjsp7NoCJ4cwhf6n4dzwss6LgbvtnN1",
  "key10": "5155NtvkQaRfFEyoQczHASWmpzsG3qKcoVF1BfhQUPEVxn54sYyggCtbYGqM9F67tWSizozfbnYnQ5ey1qzSixh4",
  "key11": "2eTSZrBbTttf4A4iUJYSnhe4kJRYM8U31ytusar2fd4ergbtziKcmcBsvxvEF6S7xbjeWkvx8zhWZzLryhdverQG",
  "key12": "372ems1GZ6xWe8CAJi3G6YfxPdcJChqCuX2vxz6zZb1GWG8SWVWSKjTNU4aASk6g6J9AcRPc6iKF5WFGkTL3pEhN",
  "key13": "45zmCvBPAcTiPb6fy2EKs7S16gfh1Jc6LM4WLWhuiiW5bZZzk7XByZjwPttGaBTpsyVTNXRHdBxs8fZt3zM4HixG",
  "key14": "63of9aJHehxkQhY5nBkydb5ghvEWEWJEEZcywtECTe8CKGzT7bqWsk5ZVSMUb6Ws7gZwbVk3MNnA4F484U3q9wNe",
  "key15": "3bXcMPhYGQp24U25CWepvGpgRvZVirDM9xGUuMbMkWofJ9EkJKLFGWUZkkbAu5ytpW6SzRiYN7AWQnwuPSLmZJMk",
  "key16": "2uu6r1zA849BEeJBr8XjufXnhAtLV1JQJ3x2FZpf2fAKAoqJ27Dk1uwvjSUSeQVgYNpBJpaHw25VagkbNEHDLRgx",
  "key17": "5DVWPZ4WEqcpaPw6ZhdyhCCZphKsbKhahdsnSnnxzpM3uj6TJBid5Ugn9XnxLwTwTeeyAo5tRJWpp9fME6Jtg6Y7",
  "key18": "5n7moxFHJ5vrhgBHyGafCzHJootvKu7ZrSVgPLbGjchS7z9LdQsBxxPAbGKyJE421bxmfQyuc8cqaAMTzvHfPd1r",
  "key19": "nuxrjbQsQwbSVDbbQHThqBiUxRTdg2qW5E5WZRXkZ66WrUJs7Z4X5vhReXbf1G7NNKwCmhzkWPTYMTyt7Tsn8cg",
  "key20": "42gqUGmfSimrN4ghMTXGRAsBJ4dYxWJFvUT1rgxSgToQcTB7BFA5UcUHENDVztiBHbc5UiQy8VHkksBrLcXFBkKV",
  "key21": "54Ta4j5Jtg2JzLdjvg3bTzWmCBBMnT15pAk4zLvAWPrJNZZ1gJtaA6Sob9M4Rfj2CiQtfCbAwc11xqEG73gnKi2T",
  "key22": "4tvayWnV7P4GcNsKN8oCgyhCLcRswQVeWF49HVmsHJmfiNafTNkbrG85P3zGeP3H1AmNNmyxzXauGTHCt6oBMJD8",
  "key23": "4mikJqFjMdkaUsn4CrnFbchwEwbQqVNtT9nttKfaNVRBu4J8Lhvr8c8gDRkq5rG8ZonAmCLc9aEk5bfiJzBftKZu",
  "key24": "M7sZejToCeQNEe51Luuos9N1AC8M5cAs4gh1AMCnZGDf7nQJG3oYd1dpL7u6Fy4JDVufiN6di24ZaJJGBfXyzdk",
  "key25": "5hZz4Xb3GMSAnh7pxoaWgn1PiGPHyzqjtXLjJcNFbKjD4W81aqxyJaLwRpTsct6UcCjYsYbPtpECKPHkygthVYux",
  "key26": "3Y1FZfcoyp3RwmTVP4kKYRznBHMGS9WPqf9LqSLvTMqBoEU91ieBnPCzFaTu1ywdMJKpez6Z1Po3iZWDtf5vU314",
  "key27": "4DXNYXAFrkVxpioiruFyDWnGfxot6VUvxhTi63iV8GuHZveENEXpC66sDBTHAsEaxDDTs1ovf9PFzk5Dkmf4fSr2",
  "key28": "5aoui2uKPDKLmFJwBDMRLxkri8TFJuLJz9dchzhEaHzW7v6ANsmxDvZziQNKopcrHfSZxF43DsthGqq4bjBP3wmy",
  "key29": "XwKP72XZLpYf4vb9cYmFs3hrdd4oyfhh8vcdJ5p6iw37x8i2pQKbTZkZAmM8HuA5SKQxMdbBoFxShRe4PSY32U1",
  "key30": "5eQhBzzpzBCrRWgm5ken6oSdxKzfHdwA1dzab1Kh6x8AnXP4Mtoifisx3UeLyk1geWfS9qkLU9FHLSStrUWixnqy",
  "key31": "4hR1rpPjcDoHPaFLoJqbkbTsPm3RWR2mCrS3eaAnUnQ2kNuzNB3wxVQc2G3phcaTuKaadvqSCnabwLSGFrivypRQ",
  "key32": "5aUWDLbovdzDiP74PLyhiLPvJHnzovGyVL3DVsELWr7o1S7ytPFKe4JFmxycQWrayTdEAxe3FgevD3UWAYzRe5s1",
  "key33": "4Dx5tnnNQq8F6o6A4k4Xc7KAuNPYcCL76u51PeU377FkHFN58U3WhkS5uemzXLbFZ4RkwiQ1MNfwgJCVk5p2wCHC",
  "key34": "2D7T8g7QMFm7G6kzFq727f9PQ8kcyTbq287NWZyF8jbaYcTfoqwuDXjRVUAUkFPmQLeZoSBuw48Qp4m1bEwvQfmh",
  "key35": "2XYbVVqkBd2eEidG3D2ar55eY5hmCK6H41vJNVCWvcN2aB1aAHGHjFKt9AM5DHNgsgUTPsQ8a66vyGwD6iEhkhBF",
  "key36": "4jThExtNSgWvJPeE2fpAkRkvQ7269SATAwuVx9HUx2hpuhvckpza22faQ5KaHLuYmrP8MZzEbpPgVrLAvXdvfiZS",
  "key37": "4NPTobPhrEjg3sK7a5ai5831WRo2WqWi9ngWMw9TfoALSAmLDsS9BuRLXBWJ6fJp6JbpMCgzfMNhxHnSabCnXhkS",
  "key38": "2wvak3DKPhJrKxuTRiCULRZxFZhPoNYPQpd6Xv5WwMdFZAqiGHvZXSAiPWQbQSzmfKkZqGv8paQmPW2jtUtatP5K",
  "key39": "42QMsYjnpaCPm4LpC57h8wsfwGroxjTyzmbHYrWHC4AcmJduE6dfyJgXdNub7urgNdyiboJFSQ9MWEtArx7qmkqT",
  "key40": "3bm3fZt59bD5ProacJwK97XBoDJvXSWtmBLXMC2RNB5knjFUxiBupFgykpYA2xJMjFc9uXEPRNJX1XKis3cjrmii",
  "key41": "25aocPavH3Fs982tEhth7VE62xeSHfycKwmZRrwj4dFa5pcYqVRoS9A6FhZLQFXe6TQqpcSNpd9F716K9KUzZfRZ",
  "key42": "3rvzcCGdRs8YTZwhFaAawE7beVawSw69ff5S7Hnb7wiAiGk2bBwb2uMZXkm2Qo9p4YbDp8ZXPow9hdxaKgm6kqMA",
  "key43": "2ZxeseaLc53XpTx5bqfJJ7QkxvdPhpZas1izJAsvZhRKrLBAs4J67HZUwpWpAksnMTunjCsecWoDepoadUzXKWbe",
  "key44": "3ng3Lpn3LWiP1JSpvYxCkPnNUmxncTfAWirf7aB8LY3rMouMpQYMWh88ZLnzYTnZ4RUwJ3trmv5iwHNXAaX719NQ",
  "key45": "53hVASLT8nuxyhQUM8T7uzpTN295ToFtuBtfGJKqhbJ23XYJCXuEhGtMVPwAR6safKVUKFwurqY1xtLpTaV8Xhvm",
  "key46": "3qeB6ywWq8dH2o8E8cEP2WCeizw37hrXsjFCijdk6J3xCTiUps9vrPtVjbA3z7ub8odQumizPQdtyZ3spRpFEC19",
  "key47": "hk9ixw8K1zNdzfhPEikYc8gWA2KJ68TPuTrt3gZUSGRhrb3Jo7eKBaYPWFcLVa611hGptMpK1ekk68K2epVo5ZU"
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
