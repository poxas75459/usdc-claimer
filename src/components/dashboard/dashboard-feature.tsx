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
    "5YpNuuRFnwByUPNwTLndfdZLNWTJqd9mkjWDMx5XfV8GoinbELtPw1r1a45h4nrDgYhn8mwvgutgbViSEPE5BQ66"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y2aDK8v1r2FqwzXzVcK8jazMNpx3wmeQ727mBLpyjthTAYGv9xzK91QrdSwRQRbodGBD5bysYziemc6dXo5pJbv",
  "key1": "3jmsrXXmdJWcKX2LhBswmLrMRv7bhJk44fmZn1sqcKkFXVPJ1fikVYCF2EkmvqbfVr1qdk38yEeEhEMYLpUFzUQo",
  "key2": "F9DZPucqquCe4DGnkcdLLoEx8zHVVcW5NDicpvYzGoD453z7PYbhL2PyafJZcdmuGBvWRLdJzUXz8Yv9obJZNPN",
  "key3": "RK4FMMWarWZYPfXEfrfFSj93aDLJCtAC2Gngnk8iPVitPgLn9zizngocU29ufSPNvPaHBsGZW1EREvsiwvvHR1g",
  "key4": "4U5auoV9Mu3pfrPogXg4ntSUVg2kD6fxqyKjrMLKEHfnUxddoVNKTgAt5FefiWPg2cFHaD4zfPNVWPEk5kZZHtWL",
  "key5": "3Do15Wro33NaKAGCZe7ZD9MbhUGY56g3PpMNwE4unFUm53vvW6Nyf4w5vbyU2TzeSS7xxgiBd92FfLFdqhBbiuxv",
  "key6": "2KGdk1JKXBENJcXcsaVca615viwNauPqzSJQfhVwCQx9WHuaVSPFY4JAzZXp2qnCUqxTFq74P8GVCgFcz4xhDVfm",
  "key7": "5UwD2R78UXCocQGHdfKRndj2xzwxkEoDq3aYzs5DVurSu1Lwfz3tcZFvWDWgdzgNDGAKSGkw3Ate2tmUh7XN7Vdk",
  "key8": "3dc3beMExBvf2DAP1gC1n9U8E9YonpgTyX36SaRTk2cDJSBH2KrMNda5H3JYcvgEggcnqRg3UUTiTSZyy2yJdBM3",
  "key9": "2jsEJLLMYgZCBzSj2BCtoSpiKCyy9yAGVFqTmHWTUypdBqdzHgWTwJwuxNqxP2ZrySDAXMa3tJSib1jiDBoUVBFF",
  "key10": "2ZahYAGSDtJhgQrbQBHhnNEu4fKzrozFhh5b6dwAYQfExw1N1PMKrzyj3H8TPAMsfErjr4fpZEFAetgmkPuvSXnf",
  "key11": "3jrCJzVr81upScB3QDFNgTvefuChj3MBhkEsiL8pRrE2PfGah6THLCXJpe9ms4gVQLS1qhy9LRRV8wgSMoMXj739",
  "key12": "4ywgd7kEg9f1qUz5hTDzAEyREzeUxoPrnQMhMwUbmzE1ic6ysUFwZ7d5HvNFxjEZGyzE4rF2rhty5VgR8HQ2Fq1k",
  "key13": "3Vvf97gWMHzsGRB4nooFD2YnEF2w2DJXyhu8M7WkpCpAD37wkw1W4ZCNKxdxtALAPWgPt9F47LKxXaxipNd5g1QD",
  "key14": "2UbZMHG22KmHCisLapUChf1KbP8X7LeJqzze3gbVCyeWMAjC33DWzsx751umWqS3ZUyh1EG95QbTj14rWkNi2njP",
  "key15": "2Y5ChCvsPqagf8fyd7cMSLp52oLzWejEU2M5ZBWiG37cVZ8nMx5QKT4YoKjWYwq9h5DfUkGHNDQ5J4xjg9RFN3ru",
  "key16": "48GmdPJCwHoAHM1qGjvJs444f79FAWhiArwHHVF3dR9jVVKP5EwhCgAEnnCfaRcxTPJSkFHW5JNfx3ZXeUk67RX8",
  "key17": "2aC7hR6fkkBVwJW54v1mP7wb3RcCByCVpXtjRaUnr94U3UApbW1vzBskmy5dxH9QfSkwmoVcpU2BgyTR1bqqSQ47",
  "key18": "4jGa5CSnUh9upWHHsjLL8jKLhKNGDN22jmjVhCgmCRYJ3mLME4uZ65sGcxHGnEzHm2Tsmrw85BQe9SeNv4rU64ZG",
  "key19": "3UNrhK8eNuxCAzxWhuYYg6YPoreaPoh8qYV76xLZxkCw9VrWfh3zyP7me5p7DzqNkAr1G2cd1n58YLRg4Zo2N7KR",
  "key20": "4nRPxPL49JY327rjbNqKbWLBAFte5jRZLVakH7GgNTmZ9bNYMje5dsfN45oouUiaa2MQSMznTmhBg2siDWNE38hp",
  "key21": "5iRsWrkWp8vgNTKYwvP5Z4PPBwu6kxc1w4GackwHUWDHHEY4MS2q9eMs87pQtXmLrPk9PcVJEVxkKWZbMcHEPSkj",
  "key22": "4RboLozYoLAd3RBYyNcdc1jUKjqtDsyi6rYNCnsR5FspbdjQSaNhVNBvuP3wsmxZSZws5o5FhzWEawDZtgCofpfX",
  "key23": "5DMVtTTdP5UbWyW2iWJ238dyJt34nBjXHb5Bmps8NUk15e5hDVYV3ur5jBcYD6UWKc7UpK8mom9sAQXNNV7aV5YQ",
  "key24": "4VYXqhapcK7j2ThqzWFeU7fP2692oLBdTaV1psuR65BsDWoMPVE91bqNXfwE9z8vgYagpE9efVsV2Gn9eiqNtUCE",
  "key25": "5wA13ywtmjn79bTbwdBY3VXHei47kkoY6z3XF8ZwGAkTKpdXtMPDyVRsJbafUJEZXUXqiKLW6novcgeaFfTsDxHV",
  "key26": "3yLBvYq8a1MDp7M4pKWPizumRPLd21Kyb18mEk5LwUQ2cEtRtzerQyHe93vc5cavGoFV9TSoRRpX3Jz1Q5nsWn3S",
  "key27": "2PtxuQdCBVgnfDcJr6ozsZxdEmYu8nDGnJbjSywMm5r3tuUTtVS9RdCMuHRqVBGZ9V2s4tkpEb8Pobm962E8Wzpx",
  "key28": "55YL5p4e11JSfqv7xJzpqHSEhJypTUbLFNf84BShaQ1dMerTP5a65vVjMQufFncA27BbVNsPDiyaHA1ufA89KzoB",
  "key29": "UwjV1XmgUegKD3ytHhRJcLrzPcmJTnq1yfSQFuk5c6ssGSJYGiSR1pzgzke2z3FuMhcEFXLxsjfV5GwWyK9RjEC",
  "key30": "5kBKuAwMVGaY5ewF6rxP5EHSvYu6SAYb7SNbiWZy5uQ1njbCyzUCCEhrGVw711eAjyyGskdVZurxnfc6fikG8tYZ",
  "key31": "2JpkiL1vkBthFVg7czoNXYEDuecMXqvmcXnZPqyD9Wrx7jiP3BbyVkj7YkX36kEqpeanaVcju5HFpgiFVNbJ6fDK",
  "key32": "2oS7GykUquWkS8tDeLmEX9gfvt9M17ftF4AKL6r7QD7ry29C2Co9BsfUo4kuwCmBfymD7rkGVzqGwybcM6nnTcfn",
  "key33": "5gDEV12iosX43Mc5LuhR74VpPu8KXX44RkYJbYV5n4HC5nniv3iJ7pEUBCvaHuozb6TxT85qvyAymVRtmSu9kiZQ",
  "key34": "3Ky1VbPmLZDCVMq6LLK5jumUpkpsvgCuzN5uXFdxQhpSyz9WkANMfpiZ1u2Sm31B7TP8sGbCjaxgeUBNMjohuAV4",
  "key35": "4ZV4oL92f9d6iBN1dzw5YBiUVQaXnMSNGKvxu7Pjk9Y1H4SbogRMVx63CiLBWP5TGdXQftWVJEAS378n3yknEZ5d",
  "key36": "5qkQvhBW39NY1wN65MiGvCzBc5paQgq1eXafoDZ8F4j9fyLXYtGewniWW1ZHRSTjY1ZssXqp4a35EAwtjojcCHbP",
  "key37": "5nrcrQxEGvetPS6qkzcdHyywVmbWKb7ztGm5nkzDauqqnWxLXQQoCtP9XwSd13a3Puqj7WywkBNoZ5JgYkZsDUhH",
  "key38": "2HQB2d1ug5tqWDmARz8A5koGMdJvB6tFzXw9eSYLn7paCGi851caPbea589MvKxJ41yvZYn3iRU3v9vn5hM5ob6W"
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
