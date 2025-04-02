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
    "4GSAbPNpPezvFSPLj4f5Y29ikaJYvrcgzKtucbJLjD2HJFCzBY6wLhYX5SwKBZJCYFMdmHHK22DPZrrsVCq55Ncq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27uD28sgaX4G3aa2d8ohZLkYSPzRza3HKffbDYkfDUeuLKMn1t2PWS7kACnVPiDKAxfxQGMLr7771f2Xayb9Nd72",
  "key1": "63exV9Z9Y8Bwtao9XgoDQMpU5uRjRLyRHU23DeeVBQiBFTJ8hVwSPSC6d8LyHr9Pkm2ACAuJyuh3Ri1oKZWegCR8",
  "key2": "8Zcvg1WjFKmbCURh31NJqSnHKg4vmC7wz9TRaEffWYnFwoCrusKQuWfiRtMige8GJFKhfkEAqxPFJSsoS7bC6gb",
  "key3": "27gHoooSFPseRaZio8JzAm7EszTtoPTmMKBFStDxQMYXRUXmuTzgeRcrp8RU1RWEy1RgiVSecAFeoQPNbSxC7V5t",
  "key4": "z8WnjpDWWoxiEJDuJJz8NxH4wYpnDtAUWpdfwXfrsX4jgUYVDS2XLjxxD5fTH4r2xxUtCAVMoD8pCbReryeDhh3",
  "key5": "USbCkDmAuXSY4JWD3XwZ1crKtPt7uEPrbSAwbxZGFNBw8pfwQEimA7v9QxHKMx272UPTrUavUQNRFAK1jwK2Koy",
  "key6": "2iPg75Y1wQ35MKhhiwqpPQNjbYLRDq3A7nS2h4nwsPtManJ7s7sdhW9YsuTwoyNpLRggZV6KEj9PLkAsJWehaJ8E",
  "key7": "2eeFUAxp36GVVvYk25GhnGU3qmiQh75JqjbTEqciCRVU72CvHhi3Zp4F7eYdiz9AwF7VURMGNSjoAvc273i4QkHY",
  "key8": "5zvXr4RLE3iAwpcdKebyGqQHCV6zjnNTVvQPheVZLP992ekNUR1qfMvY7gZLREG36ARMdYGFUXRfGzeytpsmJpUQ",
  "key9": "5qHBFsoFrBBVoKLzMygwVMstb7wU8gHGbXfLvp1yWwBDRhjX9NttHkLshoo8GVMT1DfAghFva3JLkZRwhhxL2oNe",
  "key10": "5cY4BaqoDgXG9yXMsd81eRA3oQYhPgkYVk46sqzdex5xc3buRtgAvpr5FCCij4dEgkKcFECBL5RDmynRF7Psa41G",
  "key11": "3pqaCAzraKFqYpkVNuNDtDsny3kJdrTtwadC7X5LP9B7UUmmJriFsNsChMT4f3U5LRSQckvpogk8Kp9MgbqmgyKn",
  "key12": "539Xyz9GdkQhmWi8Gd4GAALPByJKAAUptrFCiVXTDaTWUQRdXpB7bqwR8unFsrNh1Ro1sp3P12krJ2bgf4tBL4de",
  "key13": "oh7Cec7XNp339h4bsGtn3VouP49E38dddbbzmqEBuuAnYEfEnoEgEAwLo9Tcy4fDu7yHK6Qcc795cUcgBvdem3p",
  "key14": "qNo6rLGctSdbCrHF4C11xZEsAC74f8EvJ883iviVsrBMH5niJHNMsKKRbTTR9z2FV2PEnrPiHwiou1k878dtDx5",
  "key15": "4215rqEZcudnMDFkAQgTBV2F1ip67Pxrf8MFGzFRC5psv6HmmfmeFCHMpE9C446aZmtQDkyPL1o5tVug8bSEeEoQ",
  "key16": "43oaFs663dur6Gh1ednFVnTqX5hTvkH5WJygcvmhQpAUmtGnpv4EhDu94YwZQnGx4Beec96vaSL4opXvFPNo4Fpb",
  "key17": "4JR4MZdY8jDe1R3cNKAeUGPUCGmx9LwW4tvBDn9p7frgNGU6uh8N9m3JoPbiWecWh8LkpTSP5PBsRQ2XzzeBD24E",
  "key18": "3Wy9qK9HKmFkypGc7W5gN28zWut3Wik5tQ2q7vwXvu91KeqP5GYiuikWwrNuFMiWFM1mBLEzfLdcsLpdunGF69VM",
  "key19": "3c6hcN6idrUDYrefvF3Z5KKSrhFbDiUFcry897wqstWdLzyjih2amGpXeq4nKHShxs7HKoVnRZ2MugWqhJgVf4hU",
  "key20": "4MaDQdJ4mgsT8TMD5PaqRHX6Hd874JLXrcTp6ouKBox9C5wAdFsVo2mMdWyhSk2KPAwM1dnBmmAKwS6TisojSspB",
  "key21": "4v4fi7xhkAbNzEkwtWyMrrBy6naLJbMnQkejHUoYTRbNDoLewVobKsd9TKpPv5HdAZcnavJsq6nG7tpVzwjg9TX",
  "key22": "25LUQkMeYPvuwPobGSSZX3pnBK5kADhV9NbU8Us7ibLQYu6aiLFUmxesTBo3F5Y8Wa4d6HQTtCsVyFpNtnvaC6eJ",
  "key23": "5NZHRkLXC97NyUY7PzuxPckfPayUh9U8Sr83TR65zWQT6AzmST5uNPffcRfGwWGyrAmAoo3fzYhYuN4e7m6NZBev",
  "key24": "5KG41g5gVLiTyPvKLgReJbUHAXKpZ6ph1kPqEn4nncFYsEe5XMvU9WJZ2oZ5hCnDe8c6bANURgLfZxvso9oasW6J",
  "key25": "5z2BbbciEQVXzDzwKHohdd2JGG4Ptgo1FzwkihrJEePLMHPGmYFzWugCQT19bh2bAaLVrDWy3E4QippfZTEvDyzg",
  "key26": "4BM5K7Z9e8FmiQhW9GPoMFt6yeWbau3xqDJorQ6iTGgmRqoVyiioamSgmH7EPFPDK9XvLWNSnGUeYTALaueM1o8V",
  "key27": "39Ktp4rDTc4vwACnauvmX7YwXMFMkGuvkUREMZRtjyjGbHAmxKq7dhUmGneNGka4WX8xS8iTcJhw7jJkyDGr3KK3",
  "key28": "2oEeUMS23pMKMg4w23J5qb33Qg3vEHVa7TFJ6L19mFzM4iUM9YTWibbWSFsap95etU8XzGaGkcFVnYjJ6JxEjGGT"
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
