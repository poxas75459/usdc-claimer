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
    "3P8nrH1szRKSVViNiVVnD5EZaoNrN91Dfh5fL8NbTFdCNcfY98WkmYVgz5AqeaLHeiTtxpCGp5ta381AmWJNNUzP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2njtkanPd37fFuYrqMPFhkMw91umzaFgZuGTrw81FcgnSxiyYiaaFMiiUPAxwV3e9SsrH1vZCHkRsG9PGSELfD3X",
  "key1": "4yX4noATprMdjcWbL4PMj9PDCDvuWZVE97cAX29MfmzdREM6kNTt9yy5dV5C7fRgBHGeNMDqu6cWEMieVSUy28ZF",
  "key2": "5ps5bQsQBuRZ9uVS5JWi7rEWkd1o6QPHSwTqCZw6jrPiyqBbC4ayKfLYWeBBGegZzScgwhmyQdLKSGtFnVP8Ee45",
  "key3": "5t2yPKMTr9xBYLWeW463TQykf83uvSxBH8R3DoCQNJ97D7j2GLzfzNjjsKr19fctvnu5H15vEDaa8u1P4BRnGDzL",
  "key4": "3H8NToA9ZzMzwhBQyqbX8hF2aC7PgUSFii63C1fHixKUrXMoqM1p26UV1VeEnpAHKa9mJRg6soJ9qsejVYYoqrR2",
  "key5": "4EkBgFsEFvRMrY9tVocD9NWTD5CpzQ5cvf5rPV7rU9wmBxKx5c3Qxmb7dcV1AyRGSg7g4JQFPigGzuL5zCQ5iuzw",
  "key6": "51zZV64AUrsvWUiYMYezXyJvzLFNaSkyqPP7yomDYKB2dg7aXE5Zkv71CrpyM6rb3GrSRpFnNbD1TCFassk1mYSx",
  "key7": "3Vp4HfbWJyXPZvbgFLUhhXc9YHUf48WnFJYJDJgrZhDPCft3MKrh1iR4ocSKHS7i4Atr5ByzqaeHTjhnnzbQvGLv",
  "key8": "4h6ttFudj2Ld4ZxSMCnr8aRUpBCfh3Jsf7h5xaauq6xknsciJsWYNXf3ioZk9yt5e66PrZarJdwTxvQ6gKdoYKHx",
  "key9": "ingNzHGTG4FLSV2Hw19qdzEmUzY1nE9kXVu48nRnhuF7vyuoobkFHik8Vv6pn9GauRmRvz93BFtkN2wUvjKFCt5",
  "key10": "n8UjARKtmLPSv4JaASggK3G6qna6agYqhaznsNgj4xpHJGvgurMhkPTC5nLWvKx6ufCbodAoQwUtMkYRJDaJrti",
  "key11": "2xc7KHv7KNg3c2xA3FyxL3mm72bRMN7js9VQgK78Jm4ShNrJj7HKW3Xn14TimrhBbACSF4R7YQx5CY6Yr4hjRpLH",
  "key12": "5qYLix2jsayfEU2EuNm8qPfr88QXxJRoCfiprwzUCZFq68QB6cUWdT281b165CdBb4L3pBLJgtPiKmn2zfBRGt7j",
  "key13": "4vWe2j4QuMBQKQ7qGrFWmZXj43DTPchBTdgdrGz5rmjJAWBmMQ1t5ruZFj5JAfeytpRUp3Gxj3SUySJBTJ8xo6bb",
  "key14": "4WS4y353btnFgZ59LcyZkRX4Ubr8BZiiZ21UqDaG5GHw75ad9Y2tqsKT9yi2ryyn5LA1KNCLe6RsPZNsihSMCDR1",
  "key15": "5HsNt5fCi6Sgp5SfpfdjExLh7XQAScb6t5Sfgu7voPZMrhemCUcejuTm568Q4echzmnvqWWmxCf6yH8NUYVDviH",
  "key16": "rYwF2226pmaC3cYxfL3D6Zh2f81gaBkikxDY7uMtgpgC25xHk6S38559JHwBriLBCqCzHZWVVpqPskX9kPzjjm3",
  "key17": "5hNy6VUqCLdjeYJrQAYYhpwAf8XhcsoUoFfHugq52f2fcmBGmnMMhTKL4ztf87PvdrAvGmXhjDo4x7ZXdPoAsgCP",
  "key18": "4cTsJZavy3ssmHMeK3KQyKvQG9t88SzouFLs4K7X7RuGMyv52pFhfQxskCKhDKkQg6NMij75gKYb4jL8eT1xS6US",
  "key19": "3ukXfks2xkAfjcRBKRRSpWyxhaKrUeAVTy2cBiYatYxjHR5LabMHYJiLmgzVp3WVGJVrV8pHTPCK84KqCS4dZoWx",
  "key20": "4SGYu4jU3bj91EpixFH4RX2hujSFepxmLxsjuquZvUiU6YYVcEjiWhiParWSEwJPtxkTWUMSZdn6K9EJbMyaScmy",
  "key21": "3QWfKguXhr6FFnFZLgecXbYD6bHSQt79bxbK6PDkrrZpmmtpx5mgSochjsCxJRt92BbQtPUhqxEMsNBwtB8cmJ89",
  "key22": "3TnVX7ebQ3JBUN9qXojgHirF7AgBLHNNt7RqQ69yeSUUAqDVzHNniu8xDaDrs5vqwLQ2nzvDtcctpCd3D9BRrJHz",
  "key23": "5y4FkZAtHGJyaByV3wifY3UziFboPv82gCnmd3z3SXgmS9ofifVVhvF97bcH1rkU1KToZmfzzYB9REX9Mr867bZ3",
  "key24": "3nutM9nenhmCAhVQ1kotS1Kjh3NtQznw8nBqrGckEyVmgi3xn8vsZcPbfKmGgKbRzjQnreVEtrqCHepPSerDWz4z",
  "key25": "WFqbGiT262vL6sMjShYrDYn9uGoo6kCiuV2oYxnYH5r7CwHgJibfXiStGNaNnGzwS5n6tuQ93yYhRMckTrhUwzS",
  "key26": "654BB6rUGPBjpvCyDGHmsKst9KMTNK87ssh11gyxar4nLFtfEg1XdHijvemm2NdZ2FeciqhU5Rd5Ebn15VHtya1u",
  "key27": "2ZysJ1n3VU2H6xa9ogDA4wCDXap2PBo6rQViatKjweZEMzGX95k7ArqQTZq3AY5j5HXQE8De5D39C4g7FXkUq6KJ",
  "key28": "2ytSYDKsqbDsXGTSt76fjav9AUGnnRgBTQDyi1Fz33MGYsY6p9NTyzk7F2hCpnGseaYgNgZquumKLoo7GKbA4LCu",
  "key29": "i3PGsZprG4TAzAr2gaC9mkMGGwSNKGKTmhozJureHfNFQMDLbbtjV2Qn8By599Xdr9k4sv643nwjyFXNvBTT1cP",
  "key30": "3KARLcz45GseSiaK4ir4ocoDrjRYH4ugMM7SotBsKvRAqFbvBq6RYM4oGzDwWJdZDdshecJu1K8JQeeziWt94Kmr"
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
