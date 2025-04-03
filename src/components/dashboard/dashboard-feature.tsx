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
    "4pQHjjkosscF79aVuVeRT5ZbwnwTZW3pMb6mvfdpqREWPVVt1yDGzaywTmbreSM18PpfARLoojVtrxH8vcw8ySdQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KFPtpmVEesJQosdU3DXfeLiFkJYYptP2cpCwtdSEw3U8FbrWt5gRM1hYKcD2SXfDpraUuZFp1TLjdMHn7vGLrgz",
  "key1": "WU2UXzzMtbdJvD5WQotmAjNznoiSXyP2T3Fj75YNwzricmBNWhasTLy1BccKV6puQipregUUxEpL99B7MmUJ3zb",
  "key2": "43mrAzBvRkqVswvMWJdeHU6eNDmKdjXaGwhB7smRxXd87GnTkngHBHpjw6D3v137LhtT9Wupdcme2NVXXBTzCUT",
  "key3": "2QV3VAyqeimJcGjoSc7es14sGip371jjE14pLF26oCVpyH29EnTzZe4KhnDtNTQ1LoWorLrSSLiBvhDZ5b4TiNdP",
  "key4": "M2hfRiL2QCcAn5xMhtPgzu2NLnpTtVuorVKAJobtaqj4BW3n7TBncazEi6ZeCY2o9Pe4QQH3JEL4RhiPwF5fTNv",
  "key5": "3zCpndn2rq1rvV743G2cpdu71qaAcmppkHWnzzcY8DmnGWTnYHGLh1FWCAexvhMPLJiZWcZaGeiheAz3whsznvvZ",
  "key6": "4375feMjGM7RWwogNXY8nb5oB1igGKGZywCdJEX2VUJoBaEmsgXRfRCrjMxFhhNwdUc1TMojDSKqFocTTMpAJ6iP",
  "key7": "4T1pq3NMk6ZMPGS4uMSnV7RZiFmHn2sJnowHQnnaeqNV82rxFcXqBbasxhdWj4z8yD98Eox8zMrdFRVNJmuRJsyU",
  "key8": "9vxxjFYtfhGSmyFx36ZKbiQVC8mXmakvJwm9kpmHECzz1uadWgqQ7qugcs2PGoFLZPkLnnTQG51ZEjATbS9iCGf",
  "key9": "pLzn6Ca78s5uhxb2uEWWskoBtJQziMrL9JCqkZXd8htKJ9YSiY5FZxzQQY9yhoVWKq7dpUMxdppA5Q9XjACFAai",
  "key10": "58ed4pKm5ToaJ37JhHKZKaSYtq9ZphmVsJnh5erKpoUagbf1nrNkUd5hjniTdsS1JxaTbHfxMDxJsst81Vg6dfYG",
  "key11": "5h44Ck6vJJdiLb5jLqUx5fsUWnCitFDS4Ym9JBLUJtacpWRi37vxyjwGud9Lfxccs3nVqwmz16tYTryTdyDMCjAo",
  "key12": "29MU34oB9BC6ZryfY7D2MJSaQJdAB58fiaY2jgws3DRstTt7fQe9jUaAugerE3wXnZkE2HsEw9B4pk8B7La7jbS6",
  "key13": "5LQfx8s5tKwNijkfpwdbDMhRsGrMSzYVqjMwUYJn75iAbmQLkZiY98UFYffZzER4e9FmRfWoKhsuBHYtesDcbAAs",
  "key14": "5xtYfE8at32XY4MohEAoE46ffGKG754cSkPyV4URsbV2iCdN1piCKLWvBiEArM7mEC1BkLvBSLBorvZ3tuU4vBCL",
  "key15": "3mwmVsiACDDaknHz2tLv8ej6z5d6Hsf8e8iwtocQn6LLVvVoZ1gZSBMnUpTx95JMfs9f6JdQyk5PXD26rC4HtMrR",
  "key16": "5VguR5BKZsSFMXKtDiARdcHtbsATDLw6T3MuQJ5t9SvZTGyyz6r1ABMsRoYjTTWCjjLW2XqehXfrkUjKBjRb7m5q",
  "key17": "3q8eLCNCRWxnepPpmHgh8uTEtDS6QsiV6ZccaFHTZnHaNSwyG2DEotMe1ux2vG6kcXV6Uw1co8YN3L74tvBpU83f",
  "key18": "2Qsa5U5bCrL9dEb48ntcfWXbevK8zbTM3N2qDLQD8Np9AMqoV1NVDSxrSTQjsGvgJsvjE6dGPfcbjzSPYFDJqkg9",
  "key19": "baQK8Hq2QXptVo2FoJQQnYzxcLMgPJssaJiBWo38vUYGUR5qBb6wijiFyss2pK1XmCorh57eV2STpjDmiTnaLsw",
  "key20": "4GMN7zNHteuJ4XXg2iFopbMhaDmHFzYyUWFxdcpLJyubm6i2SD495XmW2oWMKpSaMHykTkvGQcNASzRDuVDnbyye",
  "key21": "5evp2DGH1rPrApAwwQBpvasfq9hZFfw4FPZYBsYY5Dgu83mzr9epK7LhwsVpYUmzVGALBysheoewr8XGCqh8rNyz",
  "key22": "5Cw5EW1G8hgk6nWj3SiKynToXMDgVBu52kiygJgj2wy2wrEuCp6itdy92RNc5A4GDNduN9RMHAfd86Y1Ww1kii4M",
  "key23": "tUdYq6EnNM8zuTNMSWN6VKgkhF3sGsoKs4h8xVPBjaEFCHjskPRTpFqtK9tnaeERGmK7zcCWpBF6mgR8zscvfqF",
  "key24": "5GX2Lnwm2ntyMa9XLDotAB3pzztdkL61FYS6iGad1NZmoiSXYjwc6yhaQdMszu99w5ME8doNjU8UmmTh3iexeNNM",
  "key25": "5Z9ewcEgYVkRjUDXyrk451YMRoJ8BDUqqkNLf2kJEaPQZP6jyfGrXaQobcPMpzhHjxrWZH35S8h4v5H3pVZkZv7b",
  "key26": "3n8Je46K9PwGTt92sJgqFeEfoibGtQ1L5zxhoy8VNgD6Y46DvcggrRq5NGUnS2DuwTBt2T5uLCgG1RUoJMX5YQYM",
  "key27": "4U3Zpc6drEecjon4Sx2fA99hcohF2rbR38qJ4jeMNA9YZvWJaFdUYwTbJwVGgSxCVBh25NLDBDTBQFhfPWtzCG5e",
  "key28": "4r1X5zdPSjLWvZMKJs5FLfZayCFjm7wptA7Hhnj7s8miWmGM8dEfcrQifi3GiHMqWEmmBxMTZpfPr7i4DjJ3fvKq",
  "key29": "4sPPffMk7MwjPcqmCn2cAFzRFpexa8hvJpvSU7F3nNk6FtmCTD6dPdY4axMiPtYaNteDsWcYNUbUy3cRREQhhBLi",
  "key30": "4LpwhtkqDzRPMPsd9qhpQKkoE8cNatmH85XYcU73rBDnvMWCQXQt3u49ADq5exjopLboWYFg8BnsGTkP1y3ZNgYj",
  "key31": "4FzmYM5b6hnMeogPvDcH7WgrHA4iSW6gSM8hogH5P3A9mhcuk33Atw9TuH9T3HT5LpaH3au4TQBGuMC7jUKwgkag",
  "key32": "39wVqBiCm88p7mZSzyxtDfRTAAtiZTnTonAFaX1B3JnVFwYT4EzRBdmXezys5vDbp9oesAAyTYEbu1KQVVMHihBf",
  "key33": "2E5DPDi61D1NfCzF2buUWhwXHH8HukPbQetfXZeXgKE5d9oMd4WPFyWES8TzLwKBg6VfGG97TX6rHysLXEamcWm5",
  "key34": "5tMzCiaUyMWGsLPkgVFQnEwjYz4SAmgb1zuZGVfcPgSXnSbnEAHsBCtVc8eYmMCp8DaqQsreDEp1HwYZtZ3oQar"
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
