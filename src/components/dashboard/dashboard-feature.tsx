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
    "5KGoEPHiJrqFSMheZKKKzG9rDxakkjmKZEC3wqrJamzQeHUQW6cJiijPL5V2Qr1SnSy5xzaFce27qLgLt1XbQCYo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XpeuwqgPD84AGXcmUeKzg8biBxnq3Xo7ELyYpgTKuqwLKsArEVBEDs1YBG14jHB5gCeRqKBEux6wMzVwBi2Po5p",
  "key1": "22R8w5fw4fkpPTfh9TGxgfq53Y1rGdAviwmSGVnEF5nruELx8TryCLvEwBkAaq5hRz7WT9eDkoTVhFZhevMRqp5L",
  "key2": "dELK9MnN74EQqGNhtmR2fqZgbLfKExXYMb4cAfjeJ1vTXzsBzhfuwnYQVdxcbWbZVp4Gx1BcuJTwcby8Hazgovp",
  "key3": "UQuBDdQgpxdqL5U1sfStFBekmM5GWj4m7osNrf3HYNEaNHVnF7hQmpTKTKcKnrNniQS1tFe9Z3A4mqjmzi1x1vo",
  "key4": "2rPEbi4sUidqtNHWruMuQurDC69HMGcSrrgHinwoS3PArDdf3R6cLCJKj7XhGixJ9ozk3p6nsfz16Kdw6iXJnmNU",
  "key5": "4NvbPNkTmVWJdy99thfX5Vbdacuz3MtfJYkotxJDn6myyTVsD3dKaHdYAcGTnUQNdxvd6SUCsY13i2k558R5yCr4",
  "key6": "3cVSBMDW2VjQeij2npzPfUi84V9Z53buL9XMHMkVMxn4k8BCmJcUAVDYYb3zShvFBA8LG4aPpxfV5nD8drZrYoXh",
  "key7": "4reGfY6V67kbG4j5rrMxMjnMHTK5hyXF5GpMQrTUJD3XJSMpzYHSTqdmGYGv9vhHy8r9z7uwzmyk6d84p8Wrqp9y",
  "key8": "JQZjy9H1pTjrhFyvdD7v41rSYh8oYggbL1L4uxgWvxqwYWsrsnC9nWr3oNEhUnXhXQ32AUYPVNkQTHxQHDHZEQp",
  "key9": "35p1nk34PSwNzCR3DZDsMDn8mLPLfAwtNRAV5v1nwodVovu3FGkocVJ1sWjvtesexcgkxVZ2Sq3Z4rnpxvTbSGjq",
  "key10": "58VAG92E9CPpD2sbuHnR4Xo3wUJUo9Dv6NzFXNhM1Umeq3BReFTdBMGUidendr9cvdVrWw919xr62mkJh4dAGw8C",
  "key11": "53h8Y5dhKxaC9Qmg1BeapMAX1KjnpVUuUpha1FmKrK3GA11oEry8vaZ4s3TWrMgPp5Aza9n4UPRaoKtW4VpdQjfK",
  "key12": "3CoFozythqt8ruLZzv75jknRasZYXrsQPiLTUmAEzDNLjFGygreqc6GheqZ3zBWakwymwSbgtJyvuXstwhrzbnj8",
  "key13": "LqquBmFUA6rXA2wGV2Jx2ZdynAHoMHbPsdXmFUPnEqqQHnCXPUxYpdLWmcdJ7WQPet2u6dAALvtbuTHnyE9BNeh",
  "key14": "23RvHDFjrtmDkWoMaVFbLp17o2wbT3ygwSU3F65jgrHh2e7Gg6HR1p4nmLC1USvvY25dC5ZkwLCDJkghemUV6gcZ",
  "key15": "4KAoLF9Ptrt1FywBn3SMPctxXa8aEAVUipKxnfBci5TBCkRkrU17tN7LYJViaCKrxWWkoKSGcXTvVHYsr69YY9eN",
  "key16": "3PTHy7UPEbkyrhBVNX819wGickJ8AX6Yv7SdHBA2P4b3BjxZYSwXcNUo1bVxMcQTrZtuBoRMKajHZSGyYvMa3286",
  "key17": "3B3mJdLWzLbDDmwGfhDRkGw5WDJBybhH6Zs5pbzJVZ7pMrGcJojiyUmP97pUaqBSSYs6iVjZmUeqQF4AhED3RQJK",
  "key18": "LD2915utQ9a6yfSPJF2eGeAzfwh4bmJWP5Ru9vaaMyCEjanbwJiQAXgjvqgveXniztKgVjg6qY6wjynNYsiJiWE",
  "key19": "koVAAtMRcdVfM2jthRwuSYreH21CRhNbW85UgnLmnSsErv5vqV2GqiB97sRE4sayCvbbMBehorB3nbYjDiZueJC",
  "key20": "4tRmd7tUvGf3NDA1h9QrBtPdLJ4K4KthZhL4UpDYqKBE8QvEUKjZAHMhBA6qoxzpbTffMntSay5emAx84Abk6G7L",
  "key21": "dD77snCrhsGzeVqCVvrdD3AcUvgnxMad4PNGkArAs2REQecEEX4vpF74awZWjo7oHtL1PWYthnTMympAs6q8JZE",
  "key22": "486kjpZFf8LYVbvx2JT2sNVtezSFXzuA58BqE5AiReu8bWbk1eL1yoHTsnhsVnjWrxWpYaeLuYmc4CrmGrifEonj",
  "key23": "2FJ4Cf1hzUDHJjhWNpuLkpQuEUs5NwV4Wuw25VWpAc6LpqRk6465coZVREZSq2PtLqXjQBZEwgxF4WWGfiR4sCmB",
  "key24": "33sZU7r77kWmdthniF5JdmFJtgdsx4pHfE1ugxaMqHChS3RhABzQmuTTbVoPTxVuENVptQyM5psxqmksySwrFcFW",
  "key25": "5EWLxpWAswvRn6oovXY7YqK6Gq9dRkn4Hbv7KWPDWpq1JYJ1xyx6wD3EZhNQfBmh8SKhodQpV1AkENa2o7k8ccLx",
  "key26": "4tjfkVRStkiVEfrMWymSghQMLkqKYkKE5vXvm63RZgm342T6vL6G968urvDoWmYpC4zKFBMMRnj7oEx3eVkgst2Z",
  "key27": "5tkCFerAvdU522Nwm132Bhh9n4rEvis34JdtuZDZAu4WavRsVchNvnds9eKj3RhH7tP8ZnvgohKuMVqTLWgAT6Fv",
  "key28": "SvTkpqLGL6Tw64gY94oCJUJGKcVLU3SWxY39SZDcaUsDKRzTZCz81zvtUtPmJ7kYmL36MxCjtJh8YWmHJJRm1cw",
  "key29": "426yFvr94vnMG4qxV9SfHngJL7JgJY8VU5sZpnP6LWbeiYgeV9Z2ruztCA1H93asKWsJTWsanMtw7CCaN2Mz1bQJ",
  "key30": "37ZoW996XiSWJUws6W3oMrgksfXUhc3Toxf36ufhTTrYh2u5bmm4G8T1SGvDkZZCCv5LqcfLap3bZwwmuRKhKR2p",
  "key31": "4kv7CgJYgTfCfsHFEdyWvk3S34NnfnUCfu7QJ61WVRWBP4QLH7UzVzS3s8DxVq9WbgmSL8izAFyqEgWHBSk8cXcM",
  "key32": "4yZc8wfn8neA6xwEUg2tKjCNBo1UtNF8HCRJmSXYsj1xvacWwk9jjDqAn8vJ5eyvvK6xcBLMnARA6ep4Cx2N9sWA",
  "key33": "4NtFSmfyKKFG5aLjE4YD22DpYAWjsBCKtVAQZuecHqhTeRRSnGLxUfUQcidzE4XCosfSh8AeUdVMb5BHjZWKgD5L",
  "key34": "3ynZiinGXmxvmra6aTFj2AWgcTcnGDHuCxhW3AJvHzL1FihMxVxqtPyCZVrchvkRTQiJWmxdNMqV3Y9N8cUGEdJc",
  "key35": "9tZX2XMjGWoibtXTmnvNgdZqzm6qD6GsYhacppfzNtQHZaeSJo4bYXrdzytcKLa2krrN9hrLrPsd6BFANohh24r",
  "key36": "5rgd7MnSCx6JNxD3waSkKPiWvDGDHSzZSANuqoC1cx1bMErVu6mfq87maNLgyRBg6LQXqD7MfkrGZPTVrs3qcfr1",
  "key37": "4Pgjhfn9WF3WgmWM8JW2u6gcb1sB6rkARjfVAWuAGSuAmPqLTJRHjBaQVGEPpJBwfnSKH1c2CynsNpWFUty7zEPD",
  "key38": "mp7CNp9Ys8Edg2RmSBNFKotPeC7TdKZKD6rxR5X9pdQcydpAN74ZkjT8ZcVtgqhAX1drjfWLrGd1c6ef44rRdSi",
  "key39": "3R5nfkBQVKRv7cWdtwGaYPmddK5aokBEgy5BbqJBBCTsPnou64SUyC93raKL3rvbd7UfVdyDTYV3xYzckHkMjZJ1",
  "key40": "5imcFsGTQWNeEGcivmFua59jYjGnetGNjPkkvqCKhysMmL7x9br1RR32kpmxjDiXtHp6XVpvor8pww53MJNSo7xU",
  "key41": "35NBmyFr8pYwUJsz33RK9FTp3aNruLvuA5ZkTvMvmKUJVYcrbHxaJvU7edsEYz9Cgj53f4heLrM9NT3QpcLccBqg",
  "key42": "3z82kyEbSzKgr1uN9NRfdccS8VtfZzzEA5SXw1VoryvCgzpepg1WHE9n4aE4mrAU17guWsL7RFNNKjRgimZKnQnf",
  "key43": "LqSpdV8TsdT6MBJvFqrZiLx21oprLksVynaDfn3myfogdh6Xzn5Re1LHkCpKnR2GxEfSqDbSSzeddmrqLQFf1Db"
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
