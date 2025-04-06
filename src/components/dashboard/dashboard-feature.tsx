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
    "5Gu7rASGdX4a2zfdHEUPQ71tVZVd5F4e62XyBEsdfGroDmL7FVWkLz51xzEHUs1neStD2ZsAT1jaYmA7J4Mr1jax"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b8PSAybsqGkpcPKvefkhU4D17kG8v8LLwA6NaC9C8XLHJQ7VN5TdWLPXL9no2VDRH9Vdo4fRGXoJYGTCUav6vzA",
  "key1": "3qrRZWdjFmrgjYxMn2RByG5SZYGwbwReFkPHmxkA9D3P3SE4pN1bAsjovBviPviKC2rRR1TUYZ4NmXmjWe6PpSmq",
  "key2": "23mJpsihNTBFR6MGES21wDjHEV3NffwUx1YnWJQyrPjWVxp2P32j3mp26ucdJVKgAfqSbzFrahsyt6G2TRH4aQy2",
  "key3": "48ZuQMkshF4VgyVmQCPp3XQ1wK11g7wQzGNB69CsUoc2B19MLbWQTZcWWtYGRp3i9D39ce2vR92uY6EGtPZFTvCL",
  "key4": "tESRNpCW6TSAjTiTEzu8dCRErw8ZrkSiAzishXAsDHxbq2rjfJGEi4FN37p7CZ3ePEupMJT8FTD5dkgmYMQ1BiW",
  "key5": "4qrcddEVnTMZKw5vmxg2hGqqkd2N1RCW4qocxZacHRp7kWsuK4KJwBxKvzHxNZtN98g5zNtd4T673ykC8wQByTTk",
  "key6": "2adSaNfSyHrvdMC6MSgDFQzHFQi4Ss9sfhq6g1xPcZqXAjKaEeX6B9fLrjYCFXA6NDqv9mdn6A9BFKGkKp3UfXyr",
  "key7": "3aytEP6bRgM9xEyzaAaBFugFrBi5DheVDk2RCUNfeQbCRV5U73kXrknHkGv5wLnnJcZJUkZAKHyVRr64H5tRTwLd",
  "key8": "3JG3UxD7YBVEoQU3u22DKEAszNiGUM3ibPqsj4tLrpXoJRCYDAMmd5kLqj7zacHwNeZ4PYeGpmu7G82cQMoLkFjE",
  "key9": "2vaNdZfTu6qm85Vy6W94Cvty3NWWZ7YMExdYcD6SA7dhNGz63WY4KnYbe314MjRNaRAEyoed8WziLFmsC3mjf2ut",
  "key10": "2oxN3rTW3vdqC4whFF6xL1JADQdCujB5s7Sy9VW9DCE3BshNYoAZs5fFpcqc2WMDG44FSSEk1Sh6yb8W4TUkBkyV",
  "key11": "452xAJ4AVHDMSrkkA3HpJgdJTBAxRkU5EAzvPYpfLW9jfhjpnfCn8fW4wRkkaWpaySQ8hc2Pnikkun12RiwA6cq1",
  "key12": "e3mQRxY3kv7Znh5NZZvBHJqANni4BsSaqT5HwpvN5rEHYy6pB1WHfeWFP54LBYUsNbnQtrr6ueFSoRfDdH8zNpb",
  "key13": "5CrcPZSzgCZasnpeow6gAC4h1JZ2c2QgvBoE1QHiWNds5xamFRAFQsfRbcSZ6vaHoxtBRotPHSWU1HzcMr1AyaPc",
  "key14": "5txmSEiac9PEVewSk2L42fr886FNY6qFhxwyrozGre3NdVjX75fgHxdzfNpxEJhecx4HTaPMevza4nV1JLx4z8mU",
  "key15": "4hQcH1SsQjDp3SNZSUUEBAvtuoX6QMaCke9cD2HdsmYJGCiHWPeDeHkmKMkh3bKX7YPdUv1trEQ8C9qR2QBR9LXY",
  "key16": "3oDuaFrBZJaubqxAzjq7nwb5veUDqQ527EJgHfWxhL9yYexZAUv45CcH1fFydkHDW9opKHyoLahMC9LeNjVumLEy",
  "key17": "29ENhnwNfEH84j65HYF6ScUuwZxBpcMCGMkX7zbKyZX223Zc1amx5Euk3HM8y6swQjhtfxKQKttPN7CTpnXZDNY3",
  "key18": "5KYRGvyCiTKg9EjE2zoFsc96fqWk8YDWYQNP1b4VSYRknJ6XHN82SMoBC8fhEaBjN9fXULzthHA5sdqyWqReXVEw",
  "key19": "2FcV3JW1FJmDv6NcFbEwwvCKK2cSohx2NEGvo5XQsBJZTEpKCjsUKUxKcUcGNFMGVRgE71abrESvXj272kviVqGe",
  "key20": "3cQovuUqx2jKRa4bNbxMCvBQEoniWKuCHHJpAmiNY2EUDACahH998txSV8yMf1yPY3A8q28mqHaB5nQ9NoXhmJZ3",
  "key21": "4VbPZugfeFrR1uDVGU962aEGdeG98nRwAHWueYGAaoefYiYmcK6XDsh7KrHgK5o5NsMrLQBX5m5E1bkpHvLNg91a",
  "key22": "3Lk81kAg8TqBspcJW85fR1LNpweihPL7WF63sZaudwwUxQ8oVH1yL16XQ189agwkUsBcVzN8GuzMq3riD1pQ2hkn",
  "key23": "JSPCTVPTuYKjvDb4bgxQUtX5icXY19XxAYXMADom2L8SZ3DjAAarQdqPjP2ZuAMDxMuJcREvKR5ddcQEsmh3KWv",
  "key24": "2CizGreW3xn71DjQS7ot1sq5XWooBqE9p6VvWHQc1rvy5unR2kfoCoUvPYQrGazbDL7dzstTwXe7oykgykb3vU4a"
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
