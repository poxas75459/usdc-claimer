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
    "4T18dfeUqWmMf9TqKy4JBGEe5MtQy3Y1L67qeP9fzD9PRZMxSF1UN4p7UsUkEuKbckA6mAgBqNjiKiDLuvVPRbii"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63H7EPxbEJtxWZFQmNqVxXWJUac8FrRMy6PcahBhoQNrbZXNDbSQbDbP6Adgu343Khae14qRsxk3uaXgDNDm3NeX",
  "key1": "4mswbfeKzgaTfrtXLGkgAdS1YGZuL3T8arPizZKpJtCGjRmS5vhi7WA3baVCmW327c2oTQa68auMDT2PPdXQGX7X",
  "key2": "26Zf5eAgA9BHGzC9qno3kbu1zWB3RZbP659uLGRAyrDrYugW2GS6gddHTPTJ6pvEuY1ZfNKWzPJ8URbYw4Kb2YLp",
  "key3": "2sNxfDohWEYk3Jq6S2BKunqBmuSDxfBqZFH5Vh6HDycv9qfKgoekLXNHiKWuhsHiB576XeaVwXABFb5VY4dEchbP",
  "key4": "5FQYeKSH9izXv7nbbz3Pw3GoqUkfMDN6RqPyZ1TJYXrVb9jPCVSNowhe1qYGu96BgFzxVq8mQkLBccKKKgTxGrJw",
  "key5": "2riVFM6W4gwFQJwvbMFUttMZ1KTUKFxQZKCxLXRco9mHi2RCx9dTRz63JbUAW5ojpN7mLTHVJvPXGqqUvdKaj97",
  "key6": "2vQfhZXP5etwnouD4eGzewzwwuddfLkLMoWJzoyopxstUf4oJNBqFrdvGfo5ZGLwU7PMbskdeAa9VherGB17iCaD",
  "key7": "2woYoyKXuxJTnqbsgm2rfq5iL2vv7L2rG7inQyMUgHE2xzn7kkZzBnRvCFUucmae1hPitfqRTxDtRcNj8YSgSccx",
  "key8": "4XAvTM3TT3j4m8yu8uPQjzvE9JB6zHvVr4ozmR4qqNuNA6NW3mGTwa9d8g9ujnSqKBRwfmgWG5cSaJdNxP7FmRkt",
  "key9": "3BLTR5YHufPsoZ5Dq4AXsCvrvV1p6RPP7sx2R18Hh7pcbSFBikahsoVYvEQsmwwFpo9TZk66DxmFdCVVkYEEStAX",
  "key10": "3seCNF6yJ6jhbyKycaNPNTAwFqxhrqUKv2gcFSZotdeV43LpVXEcX7pM5LT2cLZWzLHEvRQYHSHQPonMP8VFdNvX",
  "key11": "2tH5zutSniPXJ3nFx9CSWLw3U4j5rWE5ddK82nbsKTBaE5ih8MCC1ooGnvUmYEvFsunSSc6CNBM5666Yd1ts62rt",
  "key12": "2NbUg77xFUCdRCATFf5psk8dzrUQd8C3Pvwma5or3QWmTBApKzdStTRcU3ZETPvqWfKUejZZi6fprgSNiwo6VncL",
  "key13": "2EmK5AP24HMDhcFBtisvpsVZd7ZGZLQNpEfJEkBQspckA1UPqgb6UhnCS7619AzcxkBDL7bRMZDFcgv5r21gW73v",
  "key14": "bpkiNspR1TZKywbT5vzXva8otPCtS76bdsuAWKkMsdYZXyrxKkZDXxiAMB3syjdWhdgxpfkMFWEzwpGieCPw7Yp",
  "key15": "2regL7Qm14wRSWBGHQ9LSeMxUfRJVcBNvZj1WxMRoiAGR9iDSczpz9Ci9hZ5xBtEpXC1h2Pukz94S5rgLirq52PL",
  "key16": "4SDDfkU6H2LnKBgb93SrMx5MJEFkw1E5oEXFxQ5NvEdN51bvrBgs7YuUxLsnUTeGcci2X8XxnaQWpszBSciM659i",
  "key17": "5hLbhP4hHb2F1ARKPyCMNbYGVSo6NS4tydX8TKp9cW3fJV2Dmb7jNFqHJNa92xe5nffaKNdv8TX9FeVnWxCqXXdQ",
  "key18": "3XfqkFEy2SGzda3dbcX4FS7kEefFdrLvNNnXwg39Ts6uGLpmjGhv6ZC3X6a8fdCpam8tUxfSc2ogE1PAWzSjTpep",
  "key19": "2TMSQ86Mky8Db6f8tRjhi1njXp1tAYreztmotEW2b33ZMkRdRDtbmFwgLHf1ESgnWb3ywN7U7iBdpBdgtoHs3Rz2",
  "key20": "5U9uJYbuKkigEyaWEXksPfsPXM38gSjrzUujnAvFHGwhPPo4xsJWB9pmbPqgyhsBEwSnt1k31gVnXo77qgLkvpPf",
  "key21": "2FaGqq572qvXofSYsnq1QdE4mCHXh94Ngf2gK2b78hGLpBSQw1rg7sns4csjvMpvED2gvhBE8WAR71cgkgrvu6f6",
  "key22": "zfKPyNVPEfqo5CA4yBQEJBjhPWruWrGEr1w5qcMyMEKMiunVuj4pAVfZ2QPzEd9tAQEr6YtE49bWnNvezYQwyrN",
  "key23": "4qNMrRi4roHqd9FYSsoedbFB5CxwoRYi1sF3oYSeojQDqnbV1rcdK2rFSXqUs4ux6rR79DHXdQ1YYZ7m6uomuakx",
  "key24": "3CpFQRq2bdpzHYAf75qLwdab3aA4e7yGN4uLeUZ9rMhojqze4wCkvmwZHQD6qxkCUCJGDBGpocRJFwhGSdczJGky",
  "key25": "5cjhK4KPKyjWyLkVAghvfFbd5NAxbdczaZFfQn2y87PYJaFJTKayypcF4jdy7vTtqVgF3uh46xmuQDM4NsZYykkF",
  "key26": "62nhB8YVk7fkyizJbXvkcaLcjJ5HpinsPDj12m2vFUnMhs54mc6AM5Hc3MKgqWZMcDZ5vJbsK6CYMZSo5VbqdCwk",
  "key27": "5swrjyr1grUK5j1vPZxLNBiUeB4vZ4S7Evrm78MU2vp4SA6bPbZUT8Ez52FeRZ84314eepyDJ7JMaouCx72P99B1",
  "key28": "3AGJV6kvvk1cqqDriJtb1ysM2ndAXs87KfSsagyup1aq3MkZgQwZ5RFY2ZTnLJyVTsVdkRrPf8AwtpSstwNsq3dK",
  "key29": "tdrbcHiy2zxLrZffkJNwFTURmuo2iS6xyW4KosV6qjwFb6cHbLV8fL4YxyfLDy8BNWH1kqcDead6eb5Ag1ZJWsp",
  "key30": "5QVcdfqHDdRr6SC5VSFXxBq97zLPhsfaSvWNd9wrdaq1pfTZHDuiDeP7fucQeyW9LE69mpW3ucZhcPL2E87puiTT",
  "key31": "2bssgQzU71r6jycptvf1HUP34L1mtyBLcJm4sqcMPRB3SgmYpHH429bqyaQfaWBzZtGgPzJnvS11KPHBU6twZDzZ",
  "key32": "2fyyNsWRr8UuFUP43nmM2UC86E6mSBZrU7t1JEZBWSHtEHxuS3i1UzSs3RwiZBKCjkXmwNVyXnYJLwPK1hs2R8d5",
  "key33": "4awx7MCqjb8xKNxqQEn8aUXizfCtL89KHb32kXin16r5BDct5ezTqNAAo8SyVu7jSU4J1JEppH5bNJgqpRfaTmjj",
  "key34": "J42vsbXzmCbKDu61xguq9vKCN3Pqmgd7CBU9j1sRpkiqK9xPBDLByS97NGivySuDkcwwwSce4TnMZHE4wKY9LR1",
  "key35": "3ErFpbHYfRVCJBoY2beLiFM3nJYnEYGio5bWr4hCFTbqenyApKA6utnpM5Vdkq7EHKkKU1kzApXq6ZuyDToJA7vY",
  "key36": "36QERMPTwtuuobAysS2F3eXiphhmQpBFCdnStMTnxJhrqVXjJZnjWfW1XWHrU7QmzmwxnaUi1SCbgyrTouTJEkjx",
  "key37": "2jFHZGWP4czrUDWkhpVhN3UmF7JS99NNV3rV8q6HDkNCoxQKAnLNb7tyd3dSBAj9twey1qkDrPsabSTWn7g1RGb7",
  "key38": "2A9vQDHGWoqFt4v65qpF3T9DhghTPgyxbaJbCyeJGNFmLahJpJdrwYKqHpCvFH1i4ankPvrARQcAejJbjR6L7Y1c",
  "key39": "2bGUATcM5mtrpkCHVcSdEjJ1u9bfahcJeSJ68QY7ezz9VWGsuJAQg6ucRpqwev3s45GbJ4kd7PbZqhBNtB9GBpLA",
  "key40": "3WKNgfaYr3Nt2f9AZsScUYymKw6KPGn9Vk9amL6chiW38sB5qvT8PkvwbPR5vxrYkyrcPbVyXRERR5uKgBSm5yh5",
  "key41": "5M6GLadoas3iQgkKCnjjJp6UbmGAGWqyNfQr89eXZLD1A1U4qJxXPpGve61AELXfxwyDW7PfEa3Txo8xXqUZaUdJ",
  "key42": "2sFbwXex3YR1AKaMPLwiB3tPHirYYbtuLfkMHGnKnyLWC3htxqUQieBDEVcjB7YD7AyUoGdFT4rA5Gv2hn691jcv",
  "key43": "67Q43yr6JKWkDgHokAi3n65FHenM9tUH1Yi3LZKikXEXy35PqpCjdaZNvAcfa8RZzmvZh9qFnfD7FovCCWjANPpF",
  "key44": "5koUfWN6d7N1rdSnoRoRHZsnsRahWjCCKf4zoDLna8tbiNdRqbxNnj9SajdCe3b84J1tV7jfmSSDBwh1c1bPQefg",
  "key45": "5NVan1PTtodJF8bNsc91ezvicmY6tCSEWdTw5wQuivvNq5fcnn9WHnYhUrHHRkybe959bDPkhuSkRp3z3PAtTkVV",
  "key46": "224ZaoE9q5HD2w5PmMANkdU3cRpCNCPfbdVYWJnTg45qBG9sMptgaFNunzNcAnpdSgkwDk6tkfUzYvdeTQcK73t2",
  "key47": "3zHohdTvuK9HbDCjQrijv4je5c7FpF3DCVj3m9qUT4cTB1N8yLNV7x6RiagMQSCkBj2M1CW1DAWEw9KY24k29H7P",
  "key48": "5bZ6LoVkcXqDwKB6tB8JACWi3JZfiRujqVqGtAkQTtRKXYhLr6qbAowsYtbLUrXuvzSe1K591Mbh75pqHUASA7Hb",
  "key49": "3a8BkVDKVvikaxRBsKmPrqKR9P18J3eFhT5fEadm91Tgp5GcgwaqBA7ZQgNdBboriFQFtUUEYDV5WCcefFb4fprf"
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
