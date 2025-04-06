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
    "2E5qwDJhd785XgpgjNmbyK51FNixPJcKFGpd3TyzQWKzUs2MpALGtYcHW3gxrBAy3qhuF3Bvaaq5P8oyrJLb8i7D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iAY5B7MG4fHas2ztsbYRPkmy6q8QzGMBcfVNR3CXvhLQLXyZwRkwmepqyRiz8EXtfTDLMTgvHArazYnCQDVTtbA",
  "key1": "5ZtAcexen5kt2dRP5LK1jecMJafW6SxnKMkjMbce4hy2BKp5gCpzFGn7pMKfYimqBrf8W9QvEjyNHMLYGsCB16vW",
  "key2": "2B4XED6wENi8o6onv8GL5B69i7gmWbLMgBEFQrmDkRN94iJKNtM67Pr5YFuNjnwSrYCJAL2ZiAhGNVs8BTFBpWor",
  "key3": "5E3BzF8YQMEVRVxbafxDRFBpXkGoXoXkaSBzKvvzcQjddTxrFNzkfY1zmiYMBJBsaADeXBa1M4zfbdpNbXStgkiY",
  "key4": "3gxntq57eWSQBYPaqyb7LhpZPssLN1WVLyfj8LHNt21RxHGNxmDtxJzZu4eHWR1mZoWN5TY2G4XoKWaLbkQyp7si",
  "key5": "nq5eqesmXbCwDJrYGD6evh1iT6yWaLRYgAR3vuPDfWY8nQv4evghRcWbVnp8z3ozwBsnsXQMtgh1KXHn6ZjQCnn",
  "key6": "FaB4mHw7cQMJwjnLDdeefaqKNQi4bGcTjsmL4YNxAiNdQZ15tu57DtgzZwDUHhuYKonwj9Vfm3jneW2QbJ2NiHn",
  "key7": "2kNNdRktC6AxpswERRCzFxTatiHUJtGcuD5Xsr6j5F9qWmrsntNXs4uYPjeyKa9Px9oEiYs2wLodxtbFmSCjMsiu",
  "key8": "5qiZ3gHTktUkwDCWWgu3Q11fqJESmECsPx9t9A5eRN1CYspacoZYMcr8zUN2MdaxbYC9y1r8h9ntsav6Z1NxpPQ9",
  "key9": "PLv4mrsv6MmPgTFTiBfs9V5n2mc2bEUtMTGSiCjL39efV3GMgYmP8d7mbu7LsViLDM3DEHPFhAP2FJiW2B6RdEs",
  "key10": "RkJL2YPsMup7z4A1aUBr5hi3CFgTF3soLjZzAiBSV2rKpBcxMm2KDpg3KtWJjuDXh31gCHbtg4Dn2HWvJAMmLYZ",
  "key11": "2Tq6dN2JFFdP8wFCHW5EBQi1eeGLupE7mGX6DnG1VFcsydd6y6i2ZjscKPHqMuvkLnLS3jbAB9KKfMHupDCFNYtv",
  "key12": "3CzwgvkkvbaA7jhkZSLbvBLscsTnJNswQnPTFZGJKY9YQZQeRCL6heaR5q4JgWAUPZkX56c3Fs6THfXVa3scTQKz",
  "key13": "2LvpWR6UhtaMSA5NZJ9awhMSguafqaMByUnvDGs9SrNUv15p76yK59HcuLwhFqEhmavRKcwJwzLP19ZKPRBXaTCw",
  "key14": "vWEXifBcQYoFyYgQBs67X1SfHnT5ExHYnwcv2KDTGbmfKoW6nFMFyhnWoTEJqJyVkgKDr4VN4kmJQJM4dtC6Q63",
  "key15": "3bdCAStdDp2C4gp1bNTM9oQRsaD9BULzraeV14F3BsY4NUtQLQ7879Vzf6eyStKr35XnT5e4QzyHw4hcT6aQPmuN",
  "key16": "5Wn8KnTtRwf6iNh6p48pHgPt1Rr7mUNrjmHZFGW1sTuLLeP1VshmYMuhK3H8jzKAg6NoQxq7GEAohXHq6NrrcAUg",
  "key17": "4YCeSWsu3ek4eGwmbh5ums1n1LSW2nehFLrPEZnJriyNMHXEzxJ4Asgsh8MmdsmZgwyNwEuvkh67nGd6mACABvmA",
  "key18": "2NABThK3GtUieor4DbbikL5g3gofcB7Ltk5QtcBjMbQX4Jhyf5UKrBF9Y8BHBRqKT43YosC4putwo6YztgW9rvXN",
  "key19": "3MrSXPuU8dAYevrn47K2Jz53TqcUsTPdeaiSCFudEfb644378SwYZU7reHvcPueHn3BLKfQ8m8efcVukBBSgUCMK",
  "key20": "5sxdmQM6Ly2jHnu6wSkh1oU6PScgcTBThtpAPdaJ8gfdjxeyd2xm3KzKSoZQXv9zFQQmWxXpATca3LpSTXBWru5f",
  "key21": "2dv8gruoZea5nBqGPacbuTVvdF77GXRsUdqQyyZHAn5QNmRsocKXceqUH391quMjkZJb1MqvoYCfrKSgTNvk9g6X",
  "key22": "3bAQAcxnscH3Lef5Air8vK48ymrTNEHL5YpyAHUs6was2ueh8zWjhMbrXDzEzy5xg8tQq5CDv5ZB6Yto48XFQEGn",
  "key23": "4qcjca3TGyXqXBr45HMb97WLA91XThfVFf6NjM5yBWYty8EBk4dDc9kHxVnNCaAY13sKzwWezFkaiQGkkNipYZyh",
  "key24": "4hjbtYXziMVZKv33SsXK1qq21xLg68JV3xswWhZqxCcFAG2GVtZavQD3SoNKBHKEPDJ7Bhs1wwvDLYp4Mnd5aLuq",
  "key25": "3A4vpBXRAeg2A3Wu4JCxCBQY1DAoWrjTUqYpSV8gNAGcfK96zh2RQM2fG6kp5gHmeCQprmdwQxpDSX7VFhHZHLYx",
  "key26": "5eTWNrN6a44UzHHN9yDg5do7Wwd9y4AWKnksXdskL62jnwNur2u5z6Lei3Y8dnKfoeP51h8pk8NZyvBJJ5SRpTjQ",
  "key27": "4gQ3YQoJKarDNXpvXoZJzbvrG76QAaiLeZrUzX5RUV6bhRdUdmTzrnnBKY1nLpjZb8ZEsbJwriXoYUomBUfPs8Tt",
  "key28": "khRQz4NryHZVb5NdZJjPje32rBxPKFtj6f7MeNVjeHpSPvyhrQqYRyRD11FErTNEhcCU2g5M54ri1ERiEJkgxfL",
  "key29": "fUuCCarBQQ24MUNTeyKstUtVqPN4S8WwsxujeFqjobpESRhtn6dpdUmBUfFc13SUgFDuPbnoaDJF4vz1appMXtC",
  "key30": "3yPoSnMYPLFmJFW2BTVjSnE596qEhZ54nZg189DW8sBSmdyt6wB3f3LSZyo5EAyhnSVEUWj2XNC3ZXQJS1gbMHeg",
  "key31": "51EB9vv4Q6enp1NQfJNaDTJyLqp2NjK2i11rRBtDb6b9hfcZSmqKhGTUdvJ1Q9H4dwdH5hcvrEBGKUonhanZQaJt",
  "key32": "52Axof9tw8jusL59NhsGygMijoc2F9Bndj3rqFq2TaWG38qPXwLYKo9wef3TCjuP82kXvUrtrKhozAFhVoG6dsWR",
  "key33": "4uN6npHa8Pub4FQEHiaQW9XG6cGRMoep78svCyenyrPPEyGbaEzuStazGo7NoNZLcrJZn2nY1nx4YgexkXMwCswL",
  "key34": "4KQQgMpnwxiK8k5DhpGBaCkMPo76SvjzDM84NepPu9fHrF2742D8GDjYMy1dRmyEz3GaZ9vfNrif73GiAmL2Emei",
  "key35": "32FW9NdZxpofiKrotNTPWzEGqXN2h9UuHxzHESVPQwU1z58JkCFU9WgunviY9SG79hpgwWfwAMxvKA7UVtU1gjNZ",
  "key36": "4TtsaJ7jKZRV3XVKAx2Y8Y5Q6Hk8N2Up7kuHM8xNmhss9sKidQrkMMe9ZgFt9iV1UA69Nwa1Eo5CWrcgVpabMc3x",
  "key37": "4z9qJdts4JRcCeYWzvHWXVNY2dXZ1EypWRExZN6w16R5KtMmbbUff9Qq1kMM6djhoHBhCYguuLbjbpVnnh7y3EUw",
  "key38": "5bYRQrQsoNkiQe7fHQhVuVSRLBv95rq9qBzTTDdSkcvFr9NHiUtdwCXjyDaS7QmfomenphRGeZezrGczrmKDXm4M",
  "key39": "5yNfZUytaFv3HVtcgqGC5i7atyH11ddvqcGhphtwypmYewtVJfGzBTTaPHRfw4Q6BCNADhUZ7gCgxurjLjoGGSmm",
  "key40": "3mG8VuG6y48zkttbGapAqdmpA4D7vz8rAdymPcU1fVxtVB7in175bqtVH2mPAqzsg6RK2hWnkUqmUTJcEr25ouw7",
  "key41": "66ULZFzLVzPQY6KfdR3F7VS8AKgQ2HW4yepXbkybmi4y4jyzenvYV4SaM8MvxCqPHzv5sAFDmoRy9qBXFpgTftyb",
  "key42": "3Lu68u5Y6uCWCzBunqNkJsGqzrrhtNBLr1BTmZeNWiddXRYnr7aYPEQaq5tvhZk99kDmnvwhGJCEwYBduZs7YEwU",
  "key43": "LHrJUXEnpr7FHwhwxwci82XnPxezv14c2Zw5qB77h9Wn6frpWpevzp2LvMGQJmqu4zqSY5MkfAr61HT3S6MtwbD",
  "key44": "3sgzE8Y4ko4gjpxaQv8EtW2Fkp8S2RwyLxptU1vYapvR5aqXgRuxmYt6Tyefh2mYBPBBDHcTDErCSqkHHoByhErf",
  "key45": "4XcrCAfkQ3x87NeNgVFGbZfms3z5DqHm1triYGi7mJoNWieMBfvoZ6iokp1XYfddFz8sPbc1sJibHTveiV93atF",
  "key46": "3dwmGiE1FPUJ59QkxP5YJFCdozeoajiBrjRYX5EpACMLBqRd3mw7jr68NZXqovgnMJeHqwKo5Qm8LjXtTpwniZTj",
  "key47": "2ufur7wGXMFCuBhWwEdJ7fGVisswovpDLD5AncLL1NM6EHwWYuAVeieBBWbj1XXPoJPjs7dXtGkmS9Gs1zqcksZf",
  "key48": "5mNduEA5FZDuLS5duLrRD4XN7kqB5coSinPteMH2gAfC49GJ3FDsYStqNBYvcJbR9D3XuckivMD6AezMLz5GLSCy"
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
