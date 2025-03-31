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
    "3KJ2gerprji5VJ3NYyQyzsENi8swJhKXdDKY8kmezhMSoBDqwk9pww7juaqmxsyzT8sTkiNT1ZRXUzGWbLy4xVo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NEKw3DqamCvk1Yv9xCgrmU8tkGypE6V21Apn8uEC8U3qjyr44eogwyHKktfCwBPozxytjwXmdBSoKeQNEMigfSW",
  "key1": "4h9HMePcpWRNknZFK6Je1HjSUTdK2f9wFfagMoCKSVsh8iXAgRgwWrSqiBuqh66rvF4Jjtqx5TSeVBXyY6WBnEyT",
  "key2": "2QwDSg1dDkLee3EVDhWXUzzNS3PJ4FrE5UsnvERgpbZEy6VSbbb2A9pxwHe3MuVYTqjnHdf2zkAaSX3mU9ow2acL",
  "key3": "58VVHgDQSpGRZFdbRpPbuQANA9c5yUzPhiEowNv5CVrCpeMWabXJe2C9EkNqYwXcHN8VEaWqaH3cVv3AgGWGCwyq",
  "key4": "2VcW71vykMoixQVHu8iCVdmiohTY9jRk6TnEtFNDJd2QPq9PAqtfoL2QqQ7BuDVvUc33Pq9MWneTdoUw55kApvBc",
  "key5": "2XmWsktCqyzbHiJoi9dc5qnGjQmeE9edrgRaswFhJC3iTV3EuJCYx5kFFbwgJxmszfK3RN2YYLj9iH23M58bJ3jQ",
  "key6": "gGTeBoEmBk1God12PckRSk5zhvMxNtxjroeRGBVTkR7fxvHFZkixBoxgMRc6BeQguXxmGXBT7cmg9NTm5eFnQQg",
  "key7": "4D9VmN8CJ6tSnSEYKRKKWxTkcV9nXkyGT4CouZnboj84MvAw7R93q8ndzdxLTYaCJuheygrvpm3KuDnDc5Pvtq3b",
  "key8": "5h2ANKeiEuRJU2d2TcLeWpCpcSEUqLQ9exMS6SuQTffAK2NXNa9hPdMDZbBPzcv1UneJ9it4wfyUNKvVaYyQeGzg",
  "key9": "2eyeDx5PyNabzna6LLu2y2VjFUBKMFPBcvnYncHogd9vome9FJkNoCKLFapiEMnK5B55hLFeoxATrss3YRR69Tz",
  "key10": "5gVdHSajej6x6sKaDKXm721uLidJpzf9XpUfSvCGKcuu7f5hNK2aXtmRCLaVJmojKJckXbV8LD6EpyuDUrWo6TUJ",
  "key11": "p2aiwLdFVkiuydKY1AxjM67GVa2fR45n2qUdwC53an68b5AmbxLYfmm1MkwpoEGRF4wf9AbCK1GB4wschi48hJi",
  "key12": "2sy93WnAsCFvCGKJ5yexYkyfch6jw4yyMVD7LeXn3rYqwJj3xAvG77rBCDjrGwzE4jQiV8TUtwib6J7mdSPpQKQn",
  "key13": "3Q3zCk1vAMZQLtMpWscYMfwUFtaDLug1BxLtP6DngKyS3yxJGkFUfjcy194rexKhGnGQUavnJxBQyvc1Pgn6AjCV",
  "key14": "2kP4H1y8BFeYP1or67Giir3TrBuRYiJpnkfPNmjqX4WYBAVnCfjDAdee8XrGk6yctvqNA4gweSAYvRFyWvZCu1X4",
  "key15": "3XGMammaQ4mv7rNaGi5rhPoofGZ7NyBLk4meAAf7jNeGwH6xosz7mhEPEMMEyBHRdH3Doh7ZWnDaJJw29QeWz7bB",
  "key16": "3DhSoJq1TmZTsN9XgHtjQKE4grT7jPNjchwR2EpjGVKnCsxCXndCTz2uWTtxbFZrnHTMoN4xmCtV7uhnPemUTmh6",
  "key17": "43KFFXn3PHvCz48erJ1uM7T4WqXswSywL2xy4XRe26UeCf4oXLCprLHMuUniEEXfywN9kKEn5X9ScAc7i73WhvAG",
  "key18": "26swgi23t7qXPWSDMRjPyxxW4p5AuWLwA1PdLPnSZHTEyvMu6sDJGMTTBimqztjGRK1GPKgi6mw56iSHitpftGRu",
  "key19": "2pempDg1cnrMipazTSxgusH7HMapcrRcbVPqEATdxbezfazpKiooMLJ9uGWSE9Uhp2CUkxqGoN74Ck8SikY8Kq95",
  "key20": "5asstqD67vNMYvjfGLoPfUAkB1969XLDoSwj56wue7cYrfmgFSmZs3Gk6NTVBfSMZd3eJXHNkF3kWSYuKZc3WpqF",
  "key21": "28ZYEF1RrDoG6ynw93Nq2bEbSbaAwgaAXfhbN8VmkrJzBW2MGiVXTdqDuaNdhydA77EXT4RQd5S1PK7hpyi5iaWg",
  "key22": "3yRwe6UToHy7A9XSH9q5EHnAVwhTpdt6JwKQWyjv8rn5aNn11JmixhcSC6H3KsVCHP66xPmX94cPK9gd3SLETPdm",
  "key23": "E5BpRLtN8J4MwJX1jwx2ZGHmwaheuECgewjo2AoDBoyEhE8PDwcjnxU5i4gw4otwerNi2u49wJg1tiuN53yEpPk",
  "key24": "57jSoYKdQdnGUXFgYKtAddtWEj49hguHLXFgHKnjXZLN6zoRZjmPTeqfP68xYJeF5m3vDSWR9WQyMax8WBJZ2JEU",
  "key25": "3dcXPJwN2PDctAuqq6Tau9mmqeQzBRS3XAoNEBRM288qtNtKhFDR2S8VhFxUr9hnVPW9TY4P9UJSy8aQRSfPSzGf"
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
