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
    "5PUNRizPfLToE6qGNb2mY6pwr8nxkLvheTSbKRhBMA7M4UrYsjhDmp1drHVQih2KzhYU7AzeqmAaL8DZyyeQ6Eei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iRdpPDpQFnG6LhRQyuh9fQSxfkvK4wiYP9CBGTK59omxDyGzLKgocM9Mut4Gw3QeBqpY8P8dtNiqvXogHC1kyvK",
  "key1": "PcQwo9kJFovqPsLU5Ptxm25yg91P4GSmETdMYDY2qi2ucMv99tAesJcABuBr38PzT7RzF6LhzMZ8y3UJQTh2sf4",
  "key2": "4XncgfhhYnzR3d3NkaZSD3RThyNUJ6ETJWGTS98zV9dfUc6ahJdUytZx93D7XK9rV6uXZSoAP6eMjndTsVn7UCfj",
  "key3": "2B7XMhYYqb5NvkGhJQX8iNyfZFNNxP4u7GZViWthxrUM5vrRNpLMzzN2dKCpMsDFf3mAxnhx2UCBjgNcPp5rAsUV",
  "key4": "34zpXbCzHoYD9553iRYb4R8Ao4RTsfAKF8NFKWpxS5J2CgQVHLVDALCPJuLcHVjYLXQPDTSRP9AmAhSPUwj9Kof7",
  "key5": "4RCMxB5Y7vdVh1mpqhNVDHJAHFgwTj6StB53egYi2PngsLNkxqER8CoGGSLtW5rz1HN5KEBiKM2ZjNDwP4tjFdxc",
  "key6": "5m46ZqtuJJ7SsAkbZNsshSUJ6Vpe55NL3bR44wxvnKSzbzM3TVnNgDMvx5rPGB6qR63W1gaJuVRPxQfG6uTLchYq",
  "key7": "5otaTrnHyWo3mhC1jhfN2eTyYqNTSR29qMZ7PCsxPkfREXpFCG6NTJcg68QWgiozkzveTZgMpVaT68CJgQqFaUjR",
  "key8": "31U7dGW24eTya3cD93gZekjb9rtSFoXzWe8gfxUoX5Wk87bMaAXxUAMuNzXfJLh1M37qCmjZhXkeWe2hj4S4d2BM",
  "key9": "3iumuxiia2R2H1QLy5XgLwSaD5qh5T6GT1zsePUVqNVTx9bXP7mRLkaP6uTLVPXRrEFXC8QmpZQGkVENf4p38kgr",
  "key10": "QtUeKij3A6SSvFFRYjPhKZeMMmDGY5YaLUBecHqitCLFFqRZjnYAyjPtx2nrB39uTAxJhGFUxWPEaaCAJJvXB71",
  "key11": "3f6KGKmpNysZUJhaQ9cHRKcdcg7y7ZUaCzQ3Q7HQG7ZfwYSyzGs9oy2AcZU71o2ro2xZWh9h8de3eLNXUWRQ1DNg",
  "key12": "42knzsMdWvMxrJE8rURUN4xaPrXD2PEnj8W7fpp6zGDYhoGMpnwEUukiH3jzyc9VPn7ktmXfCTNAkgGosMRte2hu",
  "key13": "2DTcX3ZcAs3J3JB3x3XTp4RwpEVwsggA3MrpBrPeRq3umL41PJy9ZYndw22SGSREJRR2fRHQ99muJrocg14yKJkg",
  "key14": "5bTwwwqJxyAWLpRzVxfz5NP69HzzQLNdSNeQSSo4b7Avayqib4cFtVGKfSPuf4BZaTzPJxAM93PKYnAvUaKENZb",
  "key15": "3RgM84x9DW5ykXoq6vhCtHsdX91Mh9jUsdg73rhpZAXxGEnd2BnJb9Gh3HEEQfGugCdeUDhKiGqJeACP7XPF7FLE",
  "key16": "5fBMnm18R31eBK6SQZErL2BPwZUnZduSm6LmNPP5Vzs8qBUPknZtY2L5rsT6qa7exDDFDbw4QKz8ZY4p7VCaSN3m",
  "key17": "49h7Dd2BPMqLjC57am5sZXBHtHttbLTRcYXzSgxPAsRb5eJe2L45VigpDBc5bhqjgJ6nGWTesoD2qLwuGBcRAMFq",
  "key18": "3eQ6y6ebuJ9JXxugf5APwJLFr3vuMoAjc57qAW2RfHJrCQcFMxcLm511oXnJCdmxysYEQaDX58DwWYVY9jkMFXND",
  "key19": "2f9mC9aoLukBKBiU1ZxPWZDGrcgdQBvVQHFtQbZnU7rDnKLQhcseZjcQyQtA2HaDw57RbtWzHEzDsctvZcfDTU9Y",
  "key20": "4nm18hmYY3n1Th3TBamF1nWefT7M23cxWRP5c9xitPLCkon8DQ59fnhXw8vdgGezoxoJ7chPyP1CZo8SD8SFjt98",
  "key21": "5wmAhBWpevgkmi6GK2bgQ8uWiTkTHKMB1tL6qc57GTmyuCr6hbDkHiJmxf1jt3BE1aAU5kNJWkdSm7kdqVL2x9Mx",
  "key22": "2ju2HNegsLwzgSmjCRm9LpTxhc26xbFKKwWo6GbR7UifrZUdhp8SiZew7k5fEmKj5MjUeMYKvLWMPFv7x8xU2rGo",
  "key23": "44keowZ9AzMKcM7drtyY1m9F5kmiLRBtPdhNGuehi38Ce2d7mKoMkMGCb5mYcDmyKD6gQz2d3gVL75hwUEsXUfXU",
  "key24": "4SNe3yRB3ge2cWX2hB87XBXQUUUGbShBF6eHU3dGsi6S5FwUhESJoZM1CxPrfVNVLjawGcEe8aWxTpW4tTn1Y8pr",
  "key25": "2SyfzS3iBST4p9eQEswqxEJRBuRpGYqaDg8Pn1A5cdaXhZTvQvP7mMnXpizmF33nPQE2bF6b5Kx2Xduk1JuDQbiX",
  "key26": "4c2TdvzTx5uSsok8ZwFJW3fSFd9MQi82KoxiZtUvoWqrhhLw7LoBoMvjogJLCqwVEuCjvcgCxyK92cBbjv2SAZzq",
  "key27": "4zjcdnEMKi5CQLuoBmbGBfv6Wddfah2rQYfMtSh5f5n83RyeAP8htznSo1VHDpFgXSfv8tdcAB1EAc7Wb7FceznT",
  "key28": "4x4Ghev5T77wmT1qAxPgUWde6F6RyNVtZnMRVGLgRy1wCjGUMrUWN83NHJ6Yzc82PqFZ26aXxipbbmBRxii3T2yf",
  "key29": "3HGtfp1m2fK5eS852NRsDRtfHNJrHgQAS89xYjggz5QDydpipNCaN1JtcrjCw6cZQ7SJHYWXDSvgTJP2YDhdSv3F",
  "key30": "4iGTbAzhgr8AkbBwwVg8PGxHpFN2NzMo5gNKmWAwQBwG6ymfod2uEDbRqQrdMwa7u78DWv6vecGhjTtBpVjk1HDx",
  "key31": "4sas7RSn7N6qBWpypCAZGZdBnfv8kBmL6eMmXcBNWYubYcbXfJWtFtcBXyJpvEwACWSLsYThHEUH6vTwmATx3MK6",
  "key32": "2uY5bnziVPPp5DZJ8nG46dehuowtVvNyUJpxxSfoLvhxXr8HsZcC7TZ4VFQaoatp3rnzETGqsw7AMfdjtaHThgnp",
  "key33": "2QkT59oqrfUkr3umgzCLR6Hn2nR7gRHfPQWJJ6r6o9m84ghLAyuS4ZJ31dXQkvVSWqr8tuDJ7omcAKRQSLqtVKMw",
  "key34": "4qGjNG8G7Z3ZM54yFrat6mtTpPaQJMorbz3mNQx7ZCpEYoBFx7K2jV2nuox3YReSYWwoRbEMWDDwtbM7dfASrye2",
  "key35": "5EDA1LU2YSo7gFarenEQ5SS9FUq24s8fuscQgJQsMH4EBcCCqjmkdC3n5VhPFpM7V8tWQ8wfL8GXAKrgGwTPGznj"
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
