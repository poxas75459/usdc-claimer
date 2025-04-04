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
    "3o78z3ycCFz9cSgWRTMdGbuM5HcoXzPxPc9i5DVTFRACCsDg7im4tyvDYPrKAWvumBMWwk5YsNJidXurFmHgWwxB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fqoXib5f9c943Pp2xqY7cPRCHQTtVy1F6gCSKTbKy6WJGKRVkV46FdNDjCXniyPaMZu5kiZBtKDrCsV4EdGhxDL",
  "key1": "5WPTAXqzJYeG552SJQT8EMDmiKyDW8Dwf2M43kWpC8Pk2CsjY6gKPCpB7UJvtdLDeEbHBUWRMA4ZujbaX9Fzgdn",
  "key2": "2GStEgJkt9pr3W8uTFRTLFJ3775pNVwv7aqyGFxm5U6ZPp8aVzMvSvywPs8Rb5WMNoYQpxWiNiTbbpREuNijoUqU",
  "key3": "4gTtch84NnzxV93GY2w4g73o1Fs3u6De3LopYriZUJ9doWwoqUgMmnVUJwdEJsZp8bypHL4anG1RaTJuu83X1wcy",
  "key4": "4Lqkkhz8bvfvmxjJRhMDYjTJEPWiCJef6C8ZQYHASbon4wqXP8hheD1GoXZM9BDpojBGqk1DHacHy1LAFCu8FTUi",
  "key5": "eJAC2VEfEXQDWGc3RiJd1N763Mc8aqDUymnfkT9LepHAEuyvqVFBDKPxyiuvB7d6pN44f8tBmYFHt4F6KTFvuRQ",
  "key6": "4EfSwx7dTjeqjaMQnNdi2KKaTrHud1GVPyrSdzZBKncHFSLG58fJKHbAxBjP17n2KfyewsMYEJ5pPZ6VnuLMXWfV",
  "key7": "4t5LTcgAcBpW3tUs1f2pmMy5NwkEXb47gDzvixG7J5svn4BGFJA2UWysLj4sg2JSV3dwPuGYhJ3kCib6rAwcLLLm",
  "key8": "GmXgGGtpC6rL7V5EshKaGFDPwWPCPkv9r2u44iBRxCUWYDfBXPYkbg4hQC8PYEsUk4zqgUXPvurh7EuTvsakGx8",
  "key9": "5wZNKuHiUabCRdzofguSoJBw4hQPKZ1R2K1GXGTVbQ7Z5PgFNQqfMjqGLqQs1Nzq5p3sZ7KjQCmLAmQAW9Lt5vNL",
  "key10": "2PrTjhEokqTSztpLKeZB5CjxHKovHG6XUYsg5aZSX8DXTX74C7cgwUvMgLjpTR29wYPcjk9v5stt5phT36XWRUNm",
  "key11": "QPN4b8w6SjmBQFwQkq6KaGtfGy2tV65gdRkLCzhj6ajMhvAonA2EUyn7mg1UwaZcGQ9wWAdefyPyTfDxmMXRzaw",
  "key12": "2aM518yijjEBvF6cqXgNduN58Px2tPkJwCv83iATR8pv3ppLRF8XZVNFDb1LgvA9UkeDbxWT2cPYViikeadrWiqK",
  "key13": "2zr4Wysqq3gYpCywd2bNzoKcY4dfnGvwFiXycQjMwkBHdFLjG775UnCVpS5z951GL4Je641ujyQcN6eP54tpSLL2",
  "key14": "HLWvg8AcnjhySmUmPHJgK5THd9giRRE4NBNtou3N7egYdk1FV3gr2RVdiJdkaJCbcErLxjvVtwcfUChNFANV6Uq",
  "key15": "3jMLc2nsvm6cwA5BabVyyXw4EtV35gS2c1dV3PbBQmdyWrEZF2swVb8A4gmSWqPn9CVDF5gAW4u3VQZHyGv9NQzu",
  "key16": "4NmN3dHwe2F87PFLFhRqmxfUNKntKaRWJFNazEb4dUxBAcXr4nmGB84HbPXMUFcg8i2FuRrbHmMUcvwfFkDonHdH",
  "key17": "5ap6MeZr3zHcKeS464yjNUuvuTHZpbeRiED3QHLoaKwFEDHibj3D6Z1ygGCzSaSHmprMZmnGmNS8UQQ5TaYrVzeF",
  "key18": "3wrdcigXaKjH1Rg1pPaLSQbX4sCDfi8NzcHaq7MLK5ruY3QDT7vEKauFQgS167UseXiPWzXz3LKhgHDTLx3mo94D",
  "key19": "e5NNgQtSq7o65iMqpo28CyP8VoAE9AWxuQWvnJJTyhLDTmZJqp2jPZz7ebxB6mdhHNB1quMZU4czEMH7nqKuJxt",
  "key20": "2qwBq5HPu5Yw6RVcX631i28ykhVfEJzaW8LbSjZ9fuK4pi2p9fGG5gy261fdyQnJER1Ry9aq7dmGEH6BoLxyFDYh",
  "key21": "5VmKPsxqMi497UoPUBSnAtfYb23ss4Jn2WsJMc9pAkAgHBM5w9ySa48EyVd3Gu1YWkZKag4t7YHcHcFzs9riSDEV",
  "key22": "3NL6EXNCzfz37iv8BP9AoJ7Wg9qncWJ3nM8y1JVHeeRW5Tms2PsHB7gdcPuVWyj4gpiVYCGv9vgZkP7JiEV8NUPA",
  "key23": "4JYohuPgn8Fx9Ek7rXugK6HyyDFbNYUGKxSS6SGDbatQ8bgMGyDqBWS9K14NrZg6mm9REpZoq74JdpFQkR2u3XP4",
  "key24": "5WwGQCsFXRumMoLac7tQDnMM1WYhQ6vhy34RUuaPZhMrbob4NC2ArZRu7W4DuzEGwCYoG2iNPzFGB97ZUt5bcigA",
  "key25": "5BQT5LixELRoKzPgwm5MXRNTgwnMSjxnSBHzRDcRsFxYhTuYDruHMkhKULTywTTSoSB5kXiP18kGNS662xrpoic4",
  "key26": "3AxopQFGWM4cDUo4VETeA8P98XxWQX3v8y9vyAxVHX1X7pg5dag1CorUfNBy7wWFa3AVfgaDph5PcWuhTvYV1W3R",
  "key27": "37tRZsms8AsqkujyP1t4MAkpUWA62TnKW3mFD1yx5poBkq9Fks33e5vRErv4imfJcJ6eQN8dgcaam39EvJAzSBn3",
  "key28": "2UWgSLoWute3GcfnZzLLhNSLmZQX9pwk318ttvdLdA4MR29fKcQFfsmKvgfmBn1DSaAwa7B7jVswRZDovbe4Edp6",
  "key29": "vr1orPcRki1K16bMXhFkkxzsJMxGMxwZNHBqnsLTdH5aJjRwhSzJeiPL6qN1o7pUPQgSFiV2U8cJ7ChDQZKqUAu",
  "key30": "3bczkPggnUtT7M2DUTDdcid7sWPUUW1rEJKPnuru49SjDinD6D6bxJVWoRPn1G6YGTsse9oTZU2buG5JfD8G5ERf",
  "key31": "yoQPGe6nemogaY7AtWa5XXZMuH1gPJW1QP4r8A2a1Nw4tTnnecvBFEhZC9fyiTPn9GoqyjcxRGGS4knT4SQfgA2",
  "key32": "3bPmTMYE9jPCTeZGTiW7NFrxJy4JqgAVB6WxJbRPb5u9xssHXrYsooeLN1S4BkUsLQXMmDCFva5pQEChRGJe5mSZ",
  "key33": "5SpRQKWmEjNMdixSmaUQztTitxtt7BSkTeGS6iiL8KneFQDMYn6n1K9kisEHr3jR5asoHcpxiCc1PfWkyE99dHFU",
  "key34": "5k2GYKcK6HpV9G7YZJF5pXjLVtBzYF3TpECijJ3YvnBXfxS6bsmk6dRSpam4x8HemvMFQNFfDrNts2nPxQZhsYvo",
  "key35": "2KXTaPPxitvHxwMuU5vjQWw5zU91fVmLfozZCcDA4dn3J7A3BgxYdnuBDbx4MEAN6Xufnrn3RYqiZfkPYux3yC7E",
  "key36": "bSmX682BeiKD7PJwRn13XJpkzQd7AJY967Wu5vdtz2yabvYAU7XU9y84aiTA7zpJn5tzu8LpiUakHCXuAkE9LvK",
  "key37": "5Z1LhhS4AubKw6p23h1b3cx9vHZtyXHUhagiK7FjyQAYedTkqhKviwZ556KH1ECDJYABmCtsVH6CKWSW3W1eW8dY",
  "key38": "e1YNiatWhd6CULj5W2BQ5tkzG4j6NRmsbTf5pEZ6mBXTjFCDgVJro1bXLGV51L63QsjYKpDsSC5Y8CZ84FjKpY4",
  "key39": "5TmgCx7fuk57vqyJGUDp1AhoCmym6AY7puEp6TiacQWQC8Bp9YrhZaZ2sMbry2e7otu4ECJc76eZFJqSVXHq2mme"
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
