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
    "21YDMjLqdNSfhvc7FnEu9yDtMJFriQpXShf53fFSPn5j9u2aAjJRiacHdDByxMqCtYDPBfd8Ygr5hfVsJd8zArAJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FH1oa5S7dQQBp5gyRzp2wtcHwrrErGGNa4aMw5XJZaF6FdB3EB6FjLeJHUvEt5bWEqRuRMEXvDvfVXGyTprjVoi",
  "key1": "2wp9WEPJ1VWeZrdKcg7ANH2v9fygZ4sGzr5DweA1pUqdUHSr5hMb94DLY8jdouJU949MCVSNWHeDTtvhyQvaJDeb",
  "key2": "5yj9vwe3uKpYMsX6WFoR5VpSH9WQ5x8iZyMFMumwbShK1UqpxDAXEQUrXBwvKrnWWoZ2nBVf2UP5G2tGE9U3D4VM",
  "key3": "SSMzKVLYzvXXQuYADmthHUs6EbRG1xmqSb6j5jRVeq47FKuuQo3dALt5NCH71mTEjrtgopHwU4JpLrzseKHzi45",
  "key4": "2M4LH9X5KT1A5Mupa8a46qXGpCAJ72eMdbYaNnwRQe2dutuWjABuicTfW5VRNWx3GbyCtJZjA5GbyL5xEtt1kWsn",
  "key5": "5jCvK6NYCnPBnYwq6tJSnLovfxvK4JZcRzAQFakNUbFRmt73mgXHvsH1HCqYWDAtQHpbwshyeoRGKprRbh78MAGJ",
  "key6": "5aseguzShr1JuawKTaxKgKi1Wb6hCdQHonbFLL4WFDzEV7y1n3DMKpMVqMFrSSzvVSAvwzmAsGR7CSDFunHQzg83",
  "key7": "En312Td1qBCYshwc9yu2yMG2iUFg2yKT81YfJSoygU4mBE2PLqiaWBGTS1KBmgwTEhMEomjFKix5cirnv7uD5ov",
  "key8": "3aiaPVq3QTsfmNrfhoLuy8mL862FQJynY5GuArWZJYyMSKcVHMAkJn9yRe2QNE8JDBMztN2vzcrcmyQh7nDViddo",
  "key9": "5JpbiuheAcihKo6erWo7gkVknpBpW36QLQAKLGVgoKwqkfNTqPBhNYAsjdLRysMAFtCHNYVxyWTL9bELa44TzttY",
  "key10": "2dvhshdoNisac49oS3SAdhDtrDqyiL3UiF9CSgW1yEkEXATLiiY36xgvVoLBA3LqTBrkXnqU5L5n89NhF15Tgteq",
  "key11": "45SGJ5Daf9bcPi2MFii96b9ktn1VjsAZa5UeYKr9qkGijHfFMi1vrjeWJWtb53qBBW9zNHMBED931TSVD8r7LWrx",
  "key12": "5KxqQdhDo3hzPMpCugmVsp11mwPWXw46WqkozoJQvhEiDArFJ9v8q8Fqi63U3dWmoByAkamJbq2WXakLQ78zDMMQ",
  "key13": "2zRajK12H2B4JpZF7VYc3WwRR9SGUMP6662stC8PZAVzeQx9bQoBfCfbbbPGgfY9R4PdBfbAaSTgZDf2B8QbTg49",
  "key14": "4btNd67dwUGcofcKBKC74MEVbqft1fSgrGHEoxa44Qt2jb4x1b78UpSbzfp463iREC8LigFwn5XLfWT9jWivNAou",
  "key15": "33dPN6S1C3oD7eKdci8rWpRWx5vbxZ5t4HrwgCTxbgjrpse6i7GusnL5Lgy8BEr1tiFVPPeKn16BWU6RQwM7M9SD",
  "key16": "5h5aSCuu3TzTDGCvLgtjYEZSRMZHoF6fXD15PgKgR1KzKgCafmErRGMgNgfQ6rryXVsn4H5T9F7fx7zGJ5Hh9cVY",
  "key17": "4RDARu7k5FxcbcNffvU2fWnZiNHGRRmG6NBNEPPNLf8iS7HPBQ1zzxDHEA9PeVvPonAdnh2qQmguWVhhzELbdorJ",
  "key18": "5NZhBbVsaKrqAqKTRjQd9NcdMvYrYjGi5ejWNHWwVmRKWDM5yAZaCKRyibduhaCGmnjmTe83obM6Z7TiVNWNHNVQ",
  "key19": "ZinqS1NE69fp4wjRs4rZV2YFVHAEgaPowAJWVVmnywD9uWkpZufVYH6pXTohWwWUVxrA7369n9F2o5PEDUDStq9",
  "key20": "3LaLxGQuQcya3NsjkBwhSUN6AYouBkuQxcxGSwi9WCmt8cLE8zwFRJL3h6QCukknY1o3We6awttVzVZ4776BRRdV",
  "key21": "63bL5ULqcbgeyCuLp9NYpBNSQwRuGLDpPSSe2CfHwgsR9fPtisDanwmF9smVttpbkwRRsdzdNgFqfAZV5RzwB3TS",
  "key22": "4ypufGAmrjutGkZAZGm9PqG5YzYmmzSppXeYqhVM7aJkn3N6hQfLsmkQxC6BADZd695zWTEtmjdKPEKWiH45P32b",
  "key23": "2JF4HKrEnoRWESHoeYfCb1XAuxMRjyifJWvMMbW4i5TZ2ciFvFip4E6gMwoSbw6WVSYHoUPbKWcpz9YXqnFwYrUE",
  "key24": "2qVEYUnsNSpaLTT8x78KqSgyvfcP7n2EFQcUhQcQNcBCCwNQAqf5He3s6ctTAe5sEvUcU9UaY1fCyHAmtr5vXbyS",
  "key25": "21Un8nCJx5y4TczvAmuStHnoKfqa3fHDKsdUNDNpub4F8JgKes4acDveqkudiW7mrbThuM4EbzdptxKsxNnCJKJM",
  "key26": "38T2v7MXKTwhgwifMoypkMoPNo5LU6sSMgzEAYFPRmrFLHNxhs1nUVTWdamLLYWjYxYg1EcbsfNbGdU96oX7W7R",
  "key27": "2tyKt1vjNUXYx9iioTME1B1VazBAJhJPidn3as1fFcWTvYzhFdLN4YfXbcrHBAmaEA1wzG2yYoKGsTThufNh6TWJ",
  "key28": "2emx2uy9Nn6U2pAM6DHb4iRdfw7YesWMpUNmzrHVNTAJg8xCzJgihbPkbn5oFTHDX66Y8br3XbBeWPkUSmd5EpXw",
  "key29": "5fwHNz1kUHwZ9P9UCSmLhAzPrCN7iLPcgUh6FUyWvU971z643TwJtvBDknsEvzpXvdTdj4nuQjYuvEWKTHmxNuB7",
  "key30": "4ggSEUjFPUDFYbFAALUYQgiaYJvJforqvyJQ9T1hj97owkbKZFCpVcf95nJ9pYpHwjcshpSgrpPXkqBh7Zrjpi21",
  "key31": "5HmKLrCXh4BnD4o9LL7ukdiDYet6hT2VEPBSpGnn9TLfo8gr7v8fNqQbCGf33DxYJEZx389tkt4eTAtiFm4BdKza",
  "key32": "Lhy8zQrLnvfmerdcivwvqMdfZGzGQpzUeJQdgmKja4jaVYiwmYqy1HKTNd2JnnAnr3zqoNSVaA2d9qFDawHrpTP",
  "key33": "vzLP5E59yXLRFfY9Qp8hA2tSgUGirFvpffwh8aZTMSEjVXvdg8QR7UTXMqtw5Qhg3GuUZByH6JxVfTSo3Ra4UWx",
  "key34": "4K8JBWYSjgeZTZvxiYvR3JzQw4sS4Q9ubV4NfWhJwJqFyC9DJUJG3rc4aGHZvknGHct7BGnaCAxA7jET9Aia2f77",
  "key35": "QN2AbjmEkRB4LoUZxsmUwuAjjr4mvuKab93gDynbYS9Ay589A2DEtQ4rSuL1Ak5QRAs7DqXgYLAHvxApaZruX7E",
  "key36": "4CpjXmNd4zq7bVeZEVe8XUtg5jDKA3pvtWfHy6734SUpVkhN7NGfei1matVd2VQSz2KMJGnGqvDpCoB5z47vRSf9",
  "key37": "2GDBist9Jj46DAkeFJRpDk5s6vgyvnUSzeBbbqsY8FhUykJ8PdEqZghy2ptTpz9789dZC21NpEw1biCnBzQgy9Ej",
  "key38": "2ry2495VsKsWhvau95xs1u4J1idqPoMG1BC1bXYPgTBV3U7wmwaXJmHyTmBfiuJnSSNHKf3PAPuagewXuFyCGcX6",
  "key39": "54HfU6UmfhDqkycwsK6xxaXfteA5m65eLmak9ANXQTtXcU6c8wqgmK4w9PUJB7KLmVd9yDRnqDVUqnNJyGgTteYb",
  "key40": "4HpXj3rNDcL6RaVMP1jpkNwMwgieK6Cixx1q5JMYw8K8nFeYp7GW5YdcsEyYcSvap7UrgWeJDNTYSLvGxH9m6X5b",
  "key41": "22hFeRYGFdKD5PDCLa9LRZqh89HeqwJXXY8ssFXbpfN6Jiu7muVrAwQ77EshBGm9y36oj46G8N3JmNKoDryLdWQw",
  "key42": "bjpXJy1zHawtTiKNc17852cfvGWmMcU4xqKZBMGaoQiYzs2s5JMndvVXNjs2HgvyFa1EyaG1dfcR8ppqNb494iu"
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
