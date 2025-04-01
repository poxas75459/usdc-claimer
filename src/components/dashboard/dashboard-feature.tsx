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
    "4vBQ7DzB4wATvPjXnKESNeXTW1ACHTEbS9uuzftxsWdpunYF4ekCZ2cewuUAwhQ4z8ELEj6Vfh2ULYtqvnrkmjds"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iz7z9dgdk1Cift8RW4L5zpJq96pZuPDXZemXRury3BLTWUwPVYjWAj4yg7eWBYmpcjcFbaJaChqSF92ERrEaPBR",
  "key1": "3CxC4NcwpdHMtMaWbakpTTU8jXrq8AxThNNH6Smh8RJyvBrEE5zhL6fiV9Wg2Jpvi4uwZWSgowzXiGDiLHs9XHbf",
  "key2": "5gekreBtygGQ5pyfX2dCCDsacu9P1ZWzvbpesjUk66bQ3oyQ44MMBgDWmcsjLgT3VWZaKaBLzCXmRqpuJb6A8Ebr",
  "key3": "3iVRhahQTUS5swEayJBArF5iLRARH4TJykm1BLazN7YdAtA87vJrpAEy7aypngknTYoVHkGsZ82PJSDuBjF8PHiD",
  "key4": "29NEFPqAXGEB6sv6eXee9h5jbLvpZJ8MEX54fbNfzm9W1WWKSSfnn9291arm5juARR2JHK5RbN43kYjsKWRxigti",
  "key5": "57c8HFVhHiEx8ymDShpUx8AKsXqy96QRkjzpbQseGFXiV4qfwHbJxfqG3fV2GaUyvXWBivGKC9LrDLDSJvYRBMes",
  "key6": "53KiM7mM7W1M5a4Fhj2GTCL6ZiS3Sv76ULnMWuqJxjVGHSgTSnbNFHZPQTnm95yueMjWUgWuj9NUWCjtwJYutY1T",
  "key7": "5pzvW98JPdtkrLtAzfheEobBAWz4W8TaaEweU4ikfhdLmYhgrAVUWkjg8QC1P6GmXiTs5iLi3qvYUidNZ1D9RMVN",
  "key8": "5LW7sSmMYRTJt5WtYbVfwA5Gi87NsRRAep9tUSYaLSU8szioKkfVtrw9kEGJrFqW37NokcCsyY7cSWjHPrtwzpP",
  "key9": "3hzBmNA3uYavodwk2hNuvrbbUy1uw1ae7RhcKc2TNhFqDCzET5FhbtAbTdXaa5QuUBcgsyZMNWrhhxcVWgR4dBFv",
  "key10": "336RnLB7jKQHekjb6tN6zqjs5yPn3GKVYQQ7Y88Yxept6grtEPegwXSjPkoDtN53My851upPig99PsbcPxcDzAHt",
  "key11": "4eSbFXuzky7kJr3cXw9BLVnPU8sMATU9pqtH7LV9WeVwCi7fR66YAp1raYQvYqg5puBXf7gBcUe7uTDZrFcetR7Q",
  "key12": "3KFmMka3CSZsZt89qvDKuQf3CWBqMyKiRwyz9fn7QcVqa1YbkLnPEWavGUz3yRi8gU6aJo3rpjuNUhfDFVnhsjkv",
  "key13": "4LuMbJEz9rZSfrLujY7wHqhWrZQVtbrE9gZujv49BnxNjVGbsPWp9BxDc3cgDQPzkmkJbe9VP9Ad4XqdE67Hs156",
  "key14": "ktAjQAnJPQk7GYSPeLiqaKfdfii11QDVSf18aYpy1E811ZMSK44Rv2tJSJt6bYCpLtg88x273vQCHhUzzwQrRgP",
  "key15": "2K7h85nbdswxUcyDWNdpEDFPQN1nvRN8CHk24K58RPtNP2yibm3sZXfmY5uuXvumAHs6GerKpKLVjztZHicFpiQx",
  "key16": "5ZGoqXdt375wCWQMjCJKYSi7Z2vPYAYVbUyHKcxD9jBUZosrsx5criCTp1v2KC5PbLfyyA4YDoYBZY4BoyuRx7AA",
  "key17": "22dcR6yrJHTG4pNX9UNAjbrHZ7pxtvAHh94MuHeHkxGCpraW4VnUP8QeVUT5zWiZxfU3K1wzu75z3fvy8dCrAWjq",
  "key18": "5TWUJMKuuGyxZrNS6XoWqKSrTQKBnH4XubW2Cas2LFiRQKvGeKm8NwcYa7F2bof4w1i7voMB1KPMSrGMhEBNieKp",
  "key19": "3XraDtx6gQExKNYSXuXjpcndvMGNdF17vnHskieQmmcanuPb8SnmMsJBEshe8mHvgQk2pcjMJgaqZkMZ13b2z534",
  "key20": "47wngTSim3WYbWfwDtCmV4kY2ryWZnkHiuA2vbsK3pnqXQ53LwrwC7CFmDfvHktE2sKXq4TnEp1iMYCX1PXyiT88",
  "key21": "5HTVYkjdGRV9dWJRVQtbYBBuQxR6ZNvdbSPMBFPGW2ZgEJPP1mJe78s3qquppFo54d129pURLEamPZwyDWjxrp6p",
  "key22": "5NZqnPdxzPdNJEvBzdSxDMneJfyHqt6bZf2omwfnp1JRriDyawzCjTKQ6cchpcSbMPDboLRFYpQGNMCw4ZsSgLRX",
  "key23": "3Cci8vqBXEiLtHNQuTbatSBB7NxUoRo7tkYBjA7RitzfTYYqRFBahReGrAYVaDZd9B5paDAetXhHWquZWk5AMA4m",
  "key24": "QSvXfJjTFLgDhy3iFX5bXfDK2S5gypCjGUG34FzDAzfzPQRQptVgFgAezXUGmkDyUnAXPX7v5SYwJpKFZ6gLDPn",
  "key25": "WTKs1YKsophSewrPgCQpy8d3ibophsZAVKphGEbZPkyXuk8Y35xRwv8v3qwPWWJhodcmCvvw25EP2KTMdgd1bAr",
  "key26": "4aHCAU1VyS2RT6pAzPZv5rPcdx3KfxdEcAtqNzDimt8wPToVDRNvRjTfJNU25QmVjexrLUsvP1Eof6ENU4WCaThr",
  "key27": "4VrPsGudVJS2qLr8Pv3vQ3JrSwwqDxg96Jh1V15JCDSxCopR4N99NMXeMzAhv4RVRy8Z6mgpgUGndDYHv2ku4Foe",
  "key28": "55inSKuN6Ekr3sPDXs3tR51f3wWqgh3L1dUgUA74JzKmgoTDnntcGnaZ4PMNN9jZsQsTKte3i7PPs9YHsMg9QwNF",
  "key29": "32JaSUBLCLCB29MpPPCVbFNJn9uMucXDpvzt3szRr3rBBwHiZt68HMR7NvC8apsh6fHMVD6tfHoXciESyPtkYhFQ",
  "key30": "2DN8aGVyyN7qDJxpLR9hkEN4uLog1dPoVm5quPYdCt881sxq8pPASUi5E9Xu8F56265SZk7Af8BELJjQUUEnH6GN",
  "key31": "riKQm4Ld78q4itoswwRbqW1QRL2yFhRUgieZPAVURnkQakYfakAHnep36qt6N2CFymiCsdeE45auQsMZcTrZkn9",
  "key32": "4yabL8cz7fdLvZisxnH6wFXZ3B7ghEoP8pmEWC5CLS3vjizwp5SdKcYd1r7Yvw6tCxGztDS8CgGm7VY6YwF8wRo3",
  "key33": "3j3xR4Hb8y5F1KVVMax78xg1HBjqAsa5Y1F4BK4G57AQ3Ewr35kb7CPydTzA1dPEFypftrS7u7janjSCAuyKYpSF",
  "key34": "5nxoUUQuGPYp18TpPwr1Yq2U9TZSA7RgxnJ3y2RHyBYVWRX2MwJEydZUYFGAaQv4UQUn8xpUNVummK9mfYrYph77",
  "key35": "3QLn5oLdmY8H9RTMshFmN7Bzggr9PWeQWj9TSvp7958Uqe6mwg7pV3GnRFa3TT8Q8D9F4gZPzvfBAAsqpBk2MwXq",
  "key36": "4YiB8TMs6Zf73xLsxj6vL9hM6GYu5WSJ3X8DsNYFDgQqmjiwpeeYGyp5CVDPezDX7EeEgryoBn8PNdZVigL2B7Zg",
  "key37": "2mTaXbyjxB1kSNRECTDvK2o7KTB6DA6HDLzDZ82NsgLiL85UqG63njATU7b3qqmx7A37ZKxcuH73D6T9vFZouSsZ",
  "key38": "CodUFsogpvtbisicCgiNX3naKQUFihVeRyQBS6J1kBxSgHG1n8acXb96VudeCwSspM58F47uiGpNQGmJquXiCBS",
  "key39": "319w2HJ39TNGbCRT1kXMmsEWiNDXwBxDWRjfKxLkgdLpCvJjdNyn6KBdMoswBCL4YmJhaTUvvtqM8LHomJjRLDPt",
  "key40": "6JLMmKd5anpiKpH3JxXiHDcAUwmWqgBv69tdw32TeQayjK8jKC1yb2ryc5RGsiwZoMPzesm7vUHH4oB7Tyijkay",
  "key41": "4E77acL6fPZwbYhTvKvFstuZLb5gFNKzhmTv9MQrxrS2BbT2JUJMKH574J9VYrgi8EB8qJo8YLdXHERpSLmoLhzM",
  "key42": "3j63MH7rCXeVYhGgSfGq9J8oFaMjU5edmJ48TDFvVQjfF4FtJTJhxrN6SQcVUJdNiqPWDHw6ZuirxUzqNJpC6aVr",
  "key43": "fHRJhiyVjW9cVVhFd9zcYcjb8vwu9Y7m4VvLvWHrQL6snPRdPBzdsf3RtN8jeh8VmuMTnwDDG5jnfERhz6wdVfK",
  "key44": "3X1q22EG43vwwhBeTQT9ayaL2eAWRCLxu7nbEcRGnZ5JEF7usTUBQKDjgMuoJyWgdLGeCfFnHrQxKeYrmGHFnEmx",
  "key45": "2BBnSnjiohfxe9ngwPWLnLwx6eNxtXAkDCLX6WqmQDKZZfAiMC6L66FCpB48vpc3cb9ZUF8KKuaCrjwwS1FUxyPk",
  "key46": "4WE8MkW62GgBgZVsqnyMWVXtt9VRN9UFMRLp77N44gL8e9UN9qdvbETwBKaDqpGVkdcz4xtQyHsUvsQdd8Q1P9b5",
  "key47": "2DaHey47j93j4xuohKjt8suvgSfNxx9JTPwBDWEUyDW8h3jxEPWXbAc2iqNT9tGfrPfkyN9uf9U2YzCW93WKMAqj"
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
