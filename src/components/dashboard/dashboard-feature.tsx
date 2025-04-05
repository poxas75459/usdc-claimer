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
    "4nkspL1sFp6H4iZsDZ2wVtD869sYXUDQgeAT9U5rKhJMSdvX9Y6EEz6vtDnmwo6vYMMcnp8BiTQf6uaAZWNWSeBJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56Nvzynvsca72DQCbuQa2jKiSD1ZAWdyKXQkDy5ruTbZXb1xqagMvXA9W87esAoLJsSVk9cHZbSX9hjkW5vu5H2k",
  "key1": "54AaHwfDRt4e25E8MBh9TUibPAoVazdpYZ6YSCHyosNRBUjgPWwmycLNPXzRKKgoQrAWuiteTZ8rX6pWG9o4PbSs",
  "key2": "yk3iV9k4qSs8Xf5xYUSLtrvajHCkRkkkCRHdYj5Cdcfq85w3KWr8pNBBAoFXRZetDcs2DtoLV69HKLUpY9Cfxwt",
  "key3": "5snL2upyHgT5dczYpnpFGTzvWrcJG8ib5stHdpDrempjDJ97wHeyMvcLAU7tCGHQSfPvtSCLUurnEYovBPAdXR7d",
  "key4": "3d9pmCsM6QcJjT7QWQXtCPfZHJ6sZDFEnMq9SZzRCm21NZULur2Sb1aLzWDRuXTFTQxh7BRH6y9SrrUMj5aoMFRT",
  "key5": "xdnv9ss1zEbi8r5BUUBYYeqJ2XKRdo3XHQWadDgCdFSavZ2wUZTHYjxEMNcV2prny31MoRevuiT34EFJZBw1SBa",
  "key6": "5YP591L2xpbBX2pPpzKXb67dSxGodi3rxGK8WDQdLuzWSMFrd8sb78UbKM9dSvTmNwLLvnjUUv3cL3MyaGjMiFS9",
  "key7": "5xBq34kJcTLJPxrh9inEicj94FWKNTXTG4ffaFx9d4joCzSkht2JkDdEoiuE5HzujKKs3Szo9bk9zKknZpBS9px8",
  "key8": "eawDLcRFfKDyaqD3ArLgniAjo2LU9H2RppTrXnGEqJouG1vubB6CGazrQVmb2t1RYxjPcRyfEbBQ2GvAJe4v4CG",
  "key9": "5B6uCt5qW7QB1U1BZ4LHstm21c3XettW5vZkoXC4VHs9AfgPWP4sYvku3ivL9aF1QXzwYrXTLUPtkCumQRvGV5QN",
  "key10": "aNErqkzJijcZiBRgY4auBHeKPdwsnV6EcHHJRkQKMEb479vhxyAxs5F63KyG1cRZ1aBNkKAGmpUejeUkFBcjibt",
  "key11": "hF7eYDQDZ8mkXcZTpC9ZyRhifUZnjA2KHVSLr5pEMKn5JnPvj8ntkURWgohojNsDJbVKLWtVN6DMqxjCfemw91V",
  "key12": "2utZ8CufVSzQ6bWoVwc7dDm7VCsZd9HyXDr3M6V8jEEMWxdo4mrJAnYDsmMffeL1rZisN39uQL66PwNbQyjNseSK",
  "key13": "65KEZNNgZYiD5qsBWbFNrSgX2HwhkyiArHQuFPgLgQbyYaCqPS7m81ErrKAasiN1VajkVmXKUzHdRiNBM8cyfDCC",
  "key14": "5yrD8FMx1G9h92c1RWxZL2qt6hnKRYvy5W57c9CsdcBCav15nKPFSevmCc4VTzas6wVhZyVMWWnRaHZWeZQVdJ8t",
  "key15": "5pb4JNmQztniaGbhgmbFdLoCjGSf4jnkhxAJP8hgivdnvhAPWFR5bbk4v7Ap74gSikyZHw3YZQvxEJN7MG71dKtS",
  "key16": "5zEYYXgNAmnrNjLyn2Qucvce3atSePS2XMw1SK3LFsER3mKT9HGZJYi6smCsbpWqTJheobNBuk8ffYaMz4G1cHYu",
  "key17": "4ZqoTH3wayzatAG3hs15J55ZBNYREBVS9aHAdAupA2mTvATCeb8EtRMdZ2QswaupdScVPqXBiTBqMXgSvsrdj162",
  "key18": "5amncmhLaPdo7RcNsSXZvNnajFpQaiBjJ7CynNHuq6t5fsefv5acvF49LJrCgq9k18TkG9bBBVCScqrBuJd5McG7",
  "key19": "235MRp8ohMg8Gzc249fZBTMpvNukYRPPcKJqA9H1ShkAh9fiCZeMV1rWM7Ls7sfyi5ZZtypKpXL5niYE8bCVmMgK",
  "key20": "2hnrEmkLmm5xqpkbjcnqPD5bBwDGxv3V7VHQRa9mSaY8c9nxmw17V4gx5tHCVqYH8PHjqaW7nzzSqya2q5mFpRrA",
  "key21": "21uYB4NkdeZJxefipVgh1U8U8HgsMrq86msh1kNkYaS5hWEDa3jQQ2cLBP6qqGNwiFaBAd31fkNYzkd2WCkvqDgi",
  "key22": "5W3kbdyUvcTu4wricgdAjVybC8WTtb13HN3nm4bLBbacqinHqKCWLpfadhu4ekHbAdNVLyseQ8ex1SMsQ3w54Jvo",
  "key23": "4WoicKB4qD9qYL9t6hCqUNxqntmBFUbJkhKk7VnjKvXs8egEjs9WBQAo2Q2XBT3ogXxQZnYz3RPGSBgttHKCHP6w",
  "key24": "5e8SfhEe6cEXUi3ww9AiByQnpPLVkzNzjRGnmG6bgqFTHP4WUByhTqbSbgykcuLpk3QbDxvDUkijXDRkBeWyXLwH",
  "key25": "54JD5x5U7uFhhN6C3v7gDEA9FV68praH4PMMosW6CFgophyDrVEY9MitGN1v89GHgDDRCGupRZQKmQ6NSkLEL5oE",
  "key26": "5fp8F4BqEUusBBEJfVUDDaHRiu3AaQeBR8PHerX8WnHaZp72EH31eLtzd1a6vyZ9MfWDPDYBosxFsHhHq9Us4hi4",
  "key27": "3qfwHC7hK4zyh1pmdYGL8dRAHxxJXQcL2aBmjpMX1K6VeqAvHLwKoU376jnpbhXhrCAPJ4SQJsxQEqW2VDWCouBv",
  "key28": "XyUXNu3bzovBAVLcDf9CrkbmdxafXjStth8krMZGWBgtaukq73oEfNJ9GA1moEzzhWWEh9XNmwwN1xQVbBTaf1a",
  "key29": "3T8CegFAo7gDmQ8DiaXU74Sx9Gc6b3P14DSfCHFT3AMsSGRTRtzz5TDZGCZWbM2erkt1bYJoGS8HYSuGxwsJzhbN",
  "key30": "3ANSa1PoQFGG4Yum9atj5cuiJ98DAu9B94iEXEmAoqqwSWhxFCqbKHcrUri61ihVPioBJ3eGt5GupVVKz5VzDfRo",
  "key31": "3bqzH5mUd86CWggQWbb6MXTiGYKYuayhvWft4sxrgURVBbGcLcBVPaTJbnRxqRaD7o4g7HKDjP6LMLjTB5Zid7iM",
  "key32": "23cuZM3M2viNE2GowLo8thTPU5dtSvyrvKUSXPcQHErNworGsc5wg3eNf59gZbVJ2tET5L66ZyXC8YaDJvGFMC4S",
  "key33": "5DkjvTzn7jyhG9JaxpptvNaKWfd7yvoo458Agr8yALyQGR7fQvHrPkehw3q7XC5vpXpXnDgU5U1tbC9BLVurZZwk",
  "key34": "23GmsvnpbVEsoA5UGDxVTfQwAVSvgwRmrYc89kuCdPu5pBQgVo88QBnSVrNL4UkxV9aaagGQjSooKmfCcER3yp68",
  "key35": "22nQjT69LCuxxHwwrvLacRtEAmL7275amqbRbDhaNRwvU8gF8ei2QBZVq9bipuEKmAS93Jvuf6VThhXFZaktzstC",
  "key36": "3P8LVpg3wS71eCkCA4hA7gPvTG7eJ8SSUGRMp8KnsH14wqgMbJqmDopreyWjYNDXKvVUFKkvHqKTYAhPLmiPUjJX",
  "key37": "4HTjgbfD1ueke6xLWSbrBnvGwkvkFryr5bXkFbBukgT3yTiWMNVjdvVLGLEnPCxzyxuTpWTswr74HXH4jMCEzW7a",
  "key38": "4vQdEugyBeTpGDeYzxUsu6Zmjf8dFJLmEWtSdvN46mQEMebTNhc4Bcg61YfGePREwSRHbvZDXdezXjNLFF3QCfDv",
  "key39": "49AGx6rsyDRJnJB8B4BFeMS9jNRasat1w1DzVGsRye4kLhZHZsFJoaPfnPbmHkYSi9zkGrY8zHTfJ3pN31tz7xVY",
  "key40": "5q78u1Zf5YwUtcPopBFNQ5RZD2eymY9SakY2VJEXNKph6SiCV8srzq1wxEEhGH2ZxoYYeMAiqFumNhDn2EmQv5wH",
  "key41": "2GMZyj2nfXBc83nX646PDxYg4nhQhe5KqnPm5aHsHzDyqsPJT2PBY4Dht5vzgPhWEru8784yk7hau3iQcc8F8XZv",
  "key42": "LBfAA3ZQ4QS4LwwsZgNoMRkbfWkzFmBXVcCaqarkh5TC7fB8KWtGM29ZdgEAwgmFKnrmXb8SCBF6DqfRsYiUb8W",
  "key43": "2Kh9JYDYKpJMCwKuGsaGj6atcM7SnDZY5uCttYiMiTHSFZcDcvRfYVvkMtyDmWzoSmBVu6ST9Swdkz1C61zPbkNc"
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
