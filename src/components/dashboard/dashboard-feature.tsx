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
    "2ERBrZYkPjanJk7yaEnh5kwvVwQrGiTn2XD4dECy8PwpbDwXuQzXkPE4qoMiKMcH2AD6UGUCiancyKXCKDWuDFMm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qAXT6RqKo8qcDCuANa87MsmCJfd4cxeTgM48cn7pYDZuXvDmVFQZ6hncBXzoEWxmucNaoApA22qa1cgrMkVSwb8",
  "key1": "2pvDr9AbcyEL4eRvVn7fDpndqvU1s57jgVwxCvuSvcHUNLB7LyFsjyN3p1HTGpAAYBsxRqKEQsYuheypyRj8xDMZ",
  "key2": "5UbzNEZtaMYZiSpMVTt1Zp2xeHD7pGdcS13UmvSGkAx8pnsfDvxi8PATJkDXDGtT6VUERf8oPPfDQaNZHZ2xu4ur",
  "key3": "2YLMBjEUw8YYCxVokxcyDmmjVEXvwDeUpnnL8oCc1nTAsw34CZTtUFuGNARqfQdraq5THkopZJULndi6BTKHzHy2",
  "key4": "4G8nr7TsBRLXCnc3ksFpiypGbaNcy22r5bQNdWCtVr7UVA2Qw8SeMHR1gPPu9Yt2QhAwnmXwewJyJmAMDtymNxFM",
  "key5": "5ta2RhNv6VTVAsEvty6t33PxjpWbtVDuFDJddj3d3vRqEsnZs5qMC294qKbvArLdwS3urynuxqX1BU7qTAtDnY9j",
  "key6": "5ezhqicEePzxJvBFbRcDYiEpx61teYx9xL3WkzAg8dnW8YWf6CHjjML2Z68d275hmxaStcmHBoiZjd4D4qNTSm6G",
  "key7": "4vYNv7PayrgLPe4JkWBAc3M5wJAbJ1BjWK8o4D3m1MF767f5w2n42Yh9DJPCydx8BeEwdxtmDXffnBPQLQJgQhLC",
  "key8": "5Qp9yGqagSG2MTweEqBZqAHYJc7E8Gt8JdcaTY5AV2ZRyWVDJpsHrtWDZ5EDKwFS5mbNaFJmHQZjfwaPeQYHMFHD",
  "key9": "3tz6ZZQF47C3aUQg7K4QGSRFaCzzAEpvbjuVmNNRToKr4vy9Rz3MRdjkaLgdCkbe9H9ytgd56iThgRheJMSGkvxy",
  "key10": "hJxVVNZRtvg4KfjmJ3gbrPxVj9b9Aw8Xc6doiGM8wgDCALRt8U3VTyEinMB69SrU3H6ti8sEQGJoTnSgMxetKN9",
  "key11": "5VYUQNVRLUym67Girc2x5yKufTqVDBTbCJQqYVJiCvsoRc1WKqkdD6PS69R3vbSxiQxKvzo46JPoEPZmKHVExN1W",
  "key12": "2foaTsqMkZsL34j3XhC2hiKajw75RUcpLzCN6AuQJQ3ziQXH4JEgNgpbqn6KXTrdEd1DTkj1pyzgHH2Gr3V5BgKg",
  "key13": "4oJqsQcTC4v156fQbmWRBDLFqqTRJwMVeesrQGU1yJhU2XQqPMc4h3Up4pBDeLYtTyBetUSmfxKf2JWSaXPoa2Hq",
  "key14": "5Rre2aPFc4G1Mner4ofrqqDPtKzmi6gcBiTYhdQe68MxLyE3sgsqCcScpnfdrhkuARrnsK6hqD6WmTGXfSQT6Nip",
  "key15": "5m9gCcMiWMdqxUg1qsE98H4QXKk8XtjJMSbKHco76m5gNeixmsXzCSF4cJwZjHvbBt5hDe9JugTEcMJZ4n6EtT45",
  "key16": "r1GjjtzW9R8e6azcxFtYUXKqMJFia54oXBHxkyMFJ74pEfXKioyiRSVPKuQyCcuhFe4h7F7pm8e8eAbXDzKJ8b1",
  "key17": "3A9TLJhMaYWNBH7rZSV3fDitPa1x2cd1gpufty3zsNBpWS7MJ3aLdZThySqoJCob533Kv4p2wABaFhGr7n2SNSBn",
  "key18": "jvB9B5KbwU3NaeM46jsxMHM93RL5c9E1CAQQgddgkn4jTazW72U588wgTmXKf52NECzCr7SHH3E5PpSXCKfDwup",
  "key19": "3UX98qTa2mBpY9MHLjSAwJWc9P8RMWgx56fo3F6qzsNtFysxGPhuUUqp4PLktSQP33yfbGbiMGyvq9xKAXKWoZYF",
  "key20": "mkoiTqTZDotHzUDjjdSb62Eyuf3jF9L4SQpSmaxmc72JWXLG2rurAJRLBJBLw3TZjNgB74BcN19n4KKbBwiCQkR",
  "key21": "4drGd3gfWqxxPRjN44UD6kBnqV5ykowZtmh5kmtDy2Mt6exwMjW72NsspENudrwJef4L38e6gDFQGKkrX432Uopp",
  "key22": "2WxAz9zbsNRT52PCswvgMk4JM7WqJ5HwwYVwSTNQvYWuppRxFEMd7a54oDf4t73JJ5mqQ2em9E6B5J161qk7nUYv",
  "key23": "xeHpdSVSbPbBomKRwNMbmoHh9auMimhmhS53oRzTyoD5uh7KXDj1KNFiPtH8Ag5EnQZRB9RMMpxfMoyrN7KX8Mo",
  "key24": "5DyJnTtH4FKiHcR7LfH2DWEdktdhFnT6bvJEE31x5rWfshQvhfC6aaV3QMoSPMrU1GGYvFLwb9Tenmbqw9Eiwzts",
  "key25": "QsefhQGGqC19sMyKpPy3WYGdR9i1pTHtATDktKhuV9CdqduJTzh8h5Kw8nZxqHYFcvjxn1HKap5nybaXGvjjJkM",
  "key26": "ejRDCN45bSghmQiuRHg9j5Ntwb82BGoEdqY54LXCcGvBCGmg5HrjF2kpkRscNLgK3fhkoaFUPjgBwfbEjWbUHUZ",
  "key27": "5JrGjKVK55NWY4VdLii9Mzk91X58AFeD71KETT5TTcyLZ7EJgXvTd6qynZ2HHqoSYuWWkFh2Fbbx17XzqykxWpk6",
  "key28": "38YMFCng9e8c2H23HtuWXtodq55EU2ciuuhLWAVkGQSrtScUPTGqWxzppi1q4ZiwSPQWdVodNezgJ6LJN5oHbWNv",
  "key29": "E2wcMsCAVxSjxqmcbMHAydEvvDonjaNPEYtWGmgGucKjP5ZSEoM2k7eYq515axRj6E3ED7cSobkTmVxarxTgHXa",
  "key30": "5JYKAG55Xqzpha8szpQRJSGpmVYu1FNDwmSMDKLzJfVacv7Fu3LtBsC7k7VpyGyF5HtDZcw9eeg8WVsAopK18Ks8"
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
