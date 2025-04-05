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
    "3NSHPt2Kxe9u9WzKHdZw5GQEEDBpWW5SArdeUqpCHVTUQDHyJrbAV2x1UaT22pMhcbqy6H5ikRXn8W2xyPFNmXx9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NSkxC66xfPNdd1iFgg83noQR3LvuAyT3XNyGtfYYWdTUmr3j8BbVkcJyLdPRTtgf9BdooJ6S3CdQY1QWUvBFe9a",
  "key1": "5N1f6wWw7SGMngPfuJxq1iYbmMnB6BYxjPhL4ftLy3E1BoaeXjN21s2gxeSAvaXGrRhxE1cdjGE4NY5v1ndP1w2r",
  "key2": "B1YaPqn6zs1sBxssJscJgW7BQc1W7MWEca9ueaw3nPjpxsAKnjpbPENAwmuHAemeLoxfFvtBwqGxCfN8vdwt3Xf",
  "key3": "573Ni4hwShZueUJaNy8fQcNcRsoGp8T1dHZprNXaFWrvSNqWrEVmfV2iiNwwaYgjE3YJXDkQvvX6DohJDxbix9fE",
  "key4": "T6aiZTNjWgM8uTAnKQGKYZPAgEeS2bqqUC7YKDhzD6Eyr4iJUpKLakBYs67u7ZnW275Uqw6BEyKGaE7GRJX2axK",
  "key5": "66BCPR7uCd8YPKhsoFJXUXTtFkoZY9ttr9DLdYomhhsZbTdv1adaraPUjTDQfnJFo3XKjz5tzmhLQD5AYDFAfPi8",
  "key6": "3hFcZ1JvS2grvautpVi8W8RPJLFdngca681EXGgxu4wzxo8Z2Shaz3nkASNXsh7fGcwqFcc5S7DswCkq42PkhSAQ",
  "key7": "2nHqKVdBAcWVHNETnYa3ZkVpWVASWzanci3ZxdDPboxdjuG45csqjxzUu6KZ6Qw9UHzbbpHLdtAbNvGKAdUyX991",
  "key8": "3QaymmmrqMQZv8UaxJ1hxPvNPJ1Jtw7K5fusBsUW291ySJsAWLpi59BZNppzrdw43HGk34zmuvaafr56ozvxkhaH",
  "key9": "2iuExc7x2nynzme3zYXVappATWEvV9ix4JrmJuXi21zx2zFsvcF9LfuWcFcKMR2PST1j43ZrEWB9sy87WgbiWthM",
  "key10": "5dq1THpDiFtU1NXWoJns3udL51nh7fcKV2b8ypADkQ9JPsc8P2SzGjLgXfGxda9eG4LvCksniJGcqiVeLbz1eLvA",
  "key11": "5hrhkEFjkT8aHamowuqgNVLkJ3oBdmwdcymCVx8dGqwthRKP9cHgmLvumuSd6FhKsXPgUqjJaggDTecRqjih77Rd",
  "key12": "21WQ1ERmdmkk7TRU1XuVvYennF5WgCz7VKJuLxaG4fTHb5xZ91QG55iXYGnJBs5rxfnau3XH6ggNCAcMu4VY1V5k",
  "key13": "2KZDgxDFKsvxa4YSsEe6f4WFz3vhDG2XEtZZg5jQ5ftDPgJhnaKjSqztVka7wgW92UYWBsFS413gfNN7QzPwPhoM",
  "key14": "3hdB7EbQfgwdbwnEChkGuBnUi3eS8tJYR52wy1H2AbfJW9EreDteDxzvGnXXYujS9gCt4G5CbR8Jvx65p6Xucpgh",
  "key15": "26ahKxyFaQ5g1CiSbCesDtQZZ3zFfdME7nPnWiB8rE8mjS9fB772ETuXr9RE8hLXagtKHeZFHG1aCDKKrHkZBy5G",
  "key16": "4bvFRQmLh4q19oGgfd9sRYhE3pn1w9foEpumKkWwyeh83G1rF5s3jgh7ZNtbn7EKunXa8Eg1YGNvAcrnmrHtvijg",
  "key17": "2jFEpuFZ7yUj5uDcKpjHhrPMgDyuYeSLsuh8RiGj5SRsRe1V2Yr7sdJPJJfUj2mNTM9LvbH2XZupAGXSyUiZgUur",
  "key18": "4HWq36vsP9AiGxkHNSDHVWS4AMfCkQ9UzNyTG3sK6JAvgTxPAGUQ5dfVWkLMZvTPthiCEUUcaVZ5GVR4pMP4fJnr",
  "key19": "2iXkZK83KawtPZf5RBYY8LFuWRbKF1fErBPFvYywG65KHBkd5F8oGWgiw5t4MRmbxGFTQ69BKbZuWJzaF4UuF9ix",
  "key20": "48rFbWVvdZQoBZhRZ8hBNZGSkzWbog8SE6jLf1MxiVkJSXvMeSnTri8NmthD2u8cRZPeMUFCuzbvhuWyBJTogGcB",
  "key21": "4KfVNfFJNakvFgZ15TVMtg6XC8BTMAZJrWSpCXjUheqcZQkd4mLn7Qz4jxTqukpo2w7YMYNcBEeaHdpXv8zEhXHp",
  "key22": "nkVEQwPjqH3ucY5PJmYCjK2HU2M5u4wBmzVrPFL66tBMqkvZDTLQkL29sBc1LPxBd38AJjr98zBmxXFBgYR6u6i",
  "key23": "5FesmdhHHSqUDGByssroysK1E41M3jzN88csrFhZF3ek4b3oHcWB8Yyr3ji2qf9hCinEiLYddGGAsdK5NjM2LQgs",
  "key24": "2iuzZK1bRDyaBBTsGaFJVT27MKc76paHpsoHhbFajtdxYWFhfTrraw4TPxvwrjSuS15kzQ3u3qx9Pvm8u1z4zEuP",
  "key25": "59thUFe1cacXBfCUkeouqxmeUUC8Cjm4rqHJmm1V91PxDKCheZvjT9jXTpRU98TQ6gNNpVFKLHSUcmh83fUuNg9x",
  "key26": "4Kwv5ZaDq3FoJtskgRRuRQAqaD9A73pGd9DfQkN2UpNPpuQBSVbbHzappjMLq92AYi2A7FJebnc2tnymzX8XUKeF",
  "key27": "3PueKiVpydw7Fw8KPVHeDbkMpt4wwbKcXAFCxmqgdZtkChYHLYQZNuQfhyMEyXrEyoLDXbYiGtwhw6Zq5ZYAZBEF",
  "key28": "4np7czJ3s5u36udMb63WjPEvz3RjdQnG3u7kZqXrh1HiqfAmeJSHF3Wy1x7hMMoZ1ry94NTknFnH1o1RGh3dpY5",
  "key29": "5f1a4qaxU9FkEB9KVZKBHFXX3otGLmJ1u4oNVGGn3ayQw3D8EXqWwe6xrRVk7e5KLoWeMu4QHibEF3UdeVmNVybL",
  "key30": "xTjKcDq2rrdBqqJu9BeBcauXmbzDrRM8YLNSiM694YHEbPLjwpxGGdhna4WMQuFXphigrNe34Te6FdZX3iBziCn",
  "key31": "2Erc8uEZsyYzMfrdRxLKWRXmzPHy52Hkdkjm2Meo4jfZkCRKPAcSPi5KdKF6yVwqrPJftedxBCVimommmR4vZSkT",
  "key32": "66s9v4p6KjtMVwc43ZkY8BwWq1Uw9DH5PpLCqWmcreMABarvqJ5mpcWwE9XHkYryrSMytCiG44qp8UvKaEXqt1KN",
  "key33": "5d4c8vAMMcaYVshrGfnwC2fhtEQXmDpby21PYrfF8VyWiQT47pEEzrZaKNBLjUHEoXgjzpvm2eCi6y1nL5X5Jbhm",
  "key34": "4DkX5FaATuJKK4LoaeeHojXqixYY9kQ6kRbU1xNE5DE2irNbCRF452P12sZBJA64omCdao78i2ZfJhmEyzcKy8N7",
  "key35": "5wnHqfBKv1x82Y6SWxsVuLUdPiJu1HENyJZ5oS5XKv16B44o62k3uN38WfFUvPvpKAbuarVKHznAbCxafV6DJTzM",
  "key36": "3LgQdriD3u1YfGMvqM3ycWGJXJQ18mTmV1uht55NJiKQXhZ1yd6xju8BbywDKnqc3CVXsacMu2AF6tyD3gmjXESf",
  "key37": "5BdrVyLzA73P5SnpSgs6Sg2ca6ftrfjdGE2rWR9k4z7wzdvKF8P8xPtdgCEHFwB2S67aAzwcs3N9LnWFsA7iuxxy",
  "key38": "3PqZh8KNgUyVk946KNSsnYH4bRr2zj7P7GKEBqrSWu3PovGAT5KD2mscmUGsJx8jpCKMYC8zEN1n626uf63iDFHt",
  "key39": "2vg8bwSwH2QrS3TDSB64uS7qqeq7FgUC7yeKwcwz8dZkNmTdiUu9qwgYU6PnsZ3oSAeC77D2miyYxemWsVrRay3t",
  "key40": "4tSSy5qj6EcnWm3tmV5Xua1c6joTjdtigGsKHQ4D9AtZL4ZPQKDwi52vYoSVKiiYwXbgqyhXfANFzgnb8fr3NDMN",
  "key41": "4poTvRyEpc4219ASn12nwRvoKh8tKVeqvnupivQBK5NC55Vu8EkRDWGjKnnPiCpLeuJZoZuT1aJTsHEuYR5wwwW7",
  "key42": "2NPXGDTroF2dvCnmQK9DZLcheJD2wvr7tkHeJLUHn4Kkps2iCvGVWSEKDBVcgewyk8nc2MUwGHSqRovGtDYeNDRU"
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
