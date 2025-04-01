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
    "jN7HnD9yuW3yqBhzNSP5hL5m5DebUfSB7zWsvvEUsCDarNNvURH7cN63SWtaHN2h5fDvkePCs8Yj4PHio19LVcD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JX3wBHQG9Y9cy5F44qBjPPjrf5XCoTUGwcZQEsz3jrxWtaFadkLAD2o7XEQEVj37z9HFYbtH34EZBKwH15uN1YW",
  "key1": "munAiHvgQQVzCAoZrKMEh1jsMSNa3DrZegnqmxskcNsGAMiVDQiH8mWi385RC9sC9LgZyAYbvScFZmRxpMQq4Cd",
  "key2": "3dwVGE2zyPGj7MHnWaYJdVHdT6Z75ALQpQVxmZwUhsrxBnbNJHqV37jscKvYcLJU8NpGUjPf5km4dgnaLBrVv922",
  "key3": "4uhJu4u8vyCTLKcS4mnh7GmYkwnCF6RZNne8aMsuWXRSoMcmvk5raY9JdzHKgPRR3A4dyMkagZWSX19SDP17sKHd",
  "key4": "VxEoFK6j46Lj8AmPGmzgQVx4E7HAhgy74enQNKR4rXA8MqTvjS6Kjd1e5wF5DejJsJqj4ue5E3gfy9AFs9ThVb9",
  "key5": "4TyV2qqwKCaqFmNxLKRsPMBbXUgUJBqSyAJ83W8zmYqNgemu9ET8P4DYAh4ykTJZVWZwSqr6aYtgFbGSYhS9kiix",
  "key6": "2aP1nvusAjk6dy5uvWJeof91pLfNY9eL3DufM1gXDLC1PaVNY3avvcoc4Copp9gHjEtLEcJQya8irrpLtAMf4puz",
  "key7": "Hq8QnAGm7qBBuhSvrWJuvcKGiD6rXbvZWoEnqYdqfCyDV5L9rQSn4pRcWhYLMEduL6P1Ea5LcBBzHAsHmdNyhTR",
  "key8": "4qYVFDmaeGjUXPwV86m5Y11qkugPxqkysw26gbgQLZKteqQWCkn4Knz61KgVLnLzWAy8XQdRUGxGv1FRF3bk4wFy",
  "key9": "WQnyiNR85XgUAHVZLsScuyFJTt5bzXHTLQMXEJ68BqPsnWYWngo5sk2CvcqDL8vQbTHtXfs6bakMS2E5Y75fxZa",
  "key10": "5ofV7dtJcYLTW8mbVj3mFCzGSMQnWoJfVJYGG3HCgGFV3TtbLqPR7gbWMEKM4U89ByY1s65sabsPGW6K7v9CmfZD",
  "key11": "Fp5UP749UQpTo5m5hRgMk4GwuJpdrTbGNUUVVBpVmQZvBENHxUBdBeYoBb76b7ADnD8x5iY7uGVXW8pCbZXumUi",
  "key12": "1re8Mp7CAcJyg6CwzmEx8Ejvw63QydfUNq3vTwm6iub6r5WgoxsTWc3JXxCiYbL1hJQvfEqMfhQjmd1WCkLf4tm",
  "key13": "47gmKWVjeb7BFBPgsT87vgax8V1T2FKAWH7TPnWLWyApykTj56PhRH7m9Uqq4PojoD9TAJ5zLYavnChFGKE267p1",
  "key14": "2snpJm5NkQLdxCwjJvxex73BX45CyyxM6VR2sHiaTqxdmC37sCn3semtFWjLGR5pnTc8sx4NyjZFrLUdUDhrSdan",
  "key15": "umrfJLDfNFBNR7QKRc3Zpho92usJVwJYiYjvUHBM8RvztiCGiSjNNdxUndyuZzMyaUACvjHN7vEm11jTiL9SCkj",
  "key16": "3e7cCvPEkiLhcrf25LcbZESWTGQ8U392V6ZTdifVQ5ZC4gWuqiVtPWEg8DTS6WjSJ5zD96wg3qoSHXbLUeEiM4mN",
  "key17": "4Jd7JKEZa7XHj41fvtoRHNrQ2ZWKVnspUp23JnUbMUsZi1LD5wawG2UgU9noA2JgcwQngyyeWuYJenAAsFY51LLU",
  "key18": "4ueW8h8qxtcAZP4XEsSUYnVNXYonzFmiJUKDYdV9my81mbriw8jWs4J7DWNnxp9sbpz2c2SiNvHq2p3Ct2aMRtEm",
  "key19": "5Rt7i1Fm25zZd5Y56jCNpjxwxLygEah8Zsdnv27hGonKd9HESc3oTRz44XgQRmvDMaktr7UzKfdzhgwAmmWuUv8h",
  "key20": "4TKcmmhg57NVyyinKGHEu4V3auZPvUXAPE3HtPBGTro5SqXn2MoGZPfh8gdPyRiAsQ1QdKBKnUrPPyTMbPmWhk6P",
  "key21": "KF3y6ifgQwNZ9LfP8EfTN9GL8V7sqdLSg1YoGManXoUR1QsxZWFG5hmuuwiWRvDwvj4EWicXr5u8D4xciRvYV7u",
  "key22": "3RCo97YkKfgtVKVGwnTjG8a1gbgXKLs4VwZHRU28SNFTQjzk9kwQaExhKqquMMMS21S6R8t9oBXEM14VPusvPr7D",
  "key23": "2SXgTwBHam21irVWaAbsPMBTUiaUHRyPxpCguz8zjXvPMyGsgKbHgZBH3kzSKYugfx3TvB7ShE6q8zrPG4G2pSLs",
  "key24": "2K3dpxfUWhCY6nzDS68Nbg1zLs9vybzyvrv8t85S1nZrDjRzmpwMzMGDoYBTYrp8DUPESB6WnSgAAL4ERv7mfpo8",
  "key25": "5rGQBBjpyaDM6iLnZPAoaygTtASsGsK2qadfd8q5YdAxbzo4U8XeMr5pXotnz7R6NHtJuk7rkagPqYegbDNacsvj",
  "key26": "T1Nbu64euTaJzHU6GC84J2TWufjXVTEdZWSZJbhPrNf8QfP43riG2m4C1WhbCertV3hpkgM9ebDyYdahMT4DGgx",
  "key27": "2QURu7RQrKYEyV7aZrsyBwtpfU5WRDfdy1KPSoY5Uy3pfCXT85Nnp9kTTPchdgQf1BfqMpLGrtibQRYTNAMyf6TY",
  "key28": "2gCSGEzBrEa1cLzjuFWUaA8hUGceZM5fe1nygu7u1gSkeMLbMBpbkRCPBbbY3B3k3SjGQSUyAVhES3f6dcXmGtHY",
  "key29": "29Gjw128Rp1Ktt49jJyqkonmxWHYySdKqdeGXRJZUBs1zdU8vkuxFmSuAwxQFLK3NN2CcCMfWiwHbaVcDdkxvKJe",
  "key30": "56hFwEvyRKzxaMgrEqVBSbR4tQbdPH5hgBqoeQU9VDA5YvFPi44dGL4mPwPJqE386LTP7QaAHPb7PYwzMmzRY32C",
  "key31": "4iGpKY63YaDV9ebUnBcWS43rnvgAwHL8jLpcASL54UTtcgCTVLFfzPPF22VRjSo5CdLtDSvhYs4GdyysqWkC2xzz",
  "key32": "3Cza7soFUQyz242rENLLYJQsVpKrK129iYvxmKpeSk9ogvEK2BR5v1K4ZScZCXCndWxoqeeTWUsH4h1pHUhbkkDZ",
  "key33": "w7wJH3pLAuGMKW23y9F3Pa1WF6gekm4bnFeoXUmpVahipJTcUPvMkJr7F2hsyDe8SZceKVVJ7XqBkpbwYd9gYTi",
  "key34": "2pB9eSoQhq1DpbMYZoPtyEDNbrN3BgMKvwgUstwGRCxmsvRbyxFyPrJPghwPnDyYjYiz7h7qUSrtfxnZX1VNg2X6",
  "key35": "59tRiPuoTitAZAf8zvh7iNttJNxG51UsDq6PgobwEdzgKnuMg6PUf3FnJEZFFEhCvumwove86Bsir8sQQJseSpg2"
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
