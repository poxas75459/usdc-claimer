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
    "4BpsYEntirDPtao9LhDaG5JQGuskHtHtSagPrWQVNyG6Hb4GzhzZ6c9wUCp9CmCvEvTzktzCqp5EpPr7FSrs1YGv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xHNt2cqSnTJNVSSxkTYQ1J6XJefjdJdYxC3Jvaq2446F9gEw1NmzDgRTwdrfXDgVv9kv8s9VFNDEraNQFPuP9No",
  "key1": "3UYtSPsQZUeefYfCLustejCBGxzFM6wjhWzBNak3xeZF7jWEUU5Mdo8zUzXn94duMkKit89Bnm4ievRaqGgC3GfP",
  "key2": "kVU7Ut8LRvbyukxSYsH4x3D6m2XQHpZHQ2PAiSuS4pv5ARrhTeKATsFP725TAjE22o6y6QvtgeE6sBJYzNKKPgc",
  "key3": "27uX6jX4L81GJYpGzfHXJ9u69s5jnutzXBbADzEJfmBsNphhWpYFL8iGqgQjjwwhR4USPsXXyzCrwrYdY4QrZcyu",
  "key4": "5oaoqPfBnsUuFgJ9CSEse2d22qiv9UH2LGpkRnNoWSsx5pUJXDAHazBmjfQfh1tujixZt2LqaEqh8LtAa6f7ErAU",
  "key5": "2gWTHkgyrvkasiMgKP7AYvzRb72F73TQLcmbAcz6C3AvWreYBW278pVwimrojwN9CFF2Vy4b85n7KUwmKVDxvpe",
  "key6": "DEwjNSKrauPqoKXfe1K3a8dNqjuzDiWznh9kXRhjLA2Chbfc2XRYW954R7dDna1qn2nSyxpENqDZN9PHYyq97Gt",
  "key7": "64aR5wQJrDQWFLgwAJmmENYPntVRhuHkmcAfydekzZbFZUriq63FKc13A2aZo93BLSpH8kKgdkHjHtqBAF7SMbEf",
  "key8": "3nRSPcK9nfojD3N8jsCVQUbt8wvn5bZCkuv3mBspxPhqmNkPqbPJQ3xQ1jvLPftvgiYXiimXVMRbrjYKU8PQP65A",
  "key9": "4zhZHRMeDCRUgQLFQujz3AdL86sCooypmBHAkXGkPEtWa3oWdru8KCtRnZh496xmjJ8Nwad9nSKVvP4pFcPVDhdZ",
  "key10": "5ebbvRhRUR7DcUV3imRxuc449cHmxXp4MowvXGYi41HyGFLr2u3J7Cqv6j5b27JbfdeiPFCFTWjWyZP2R8qzoUWG",
  "key11": "JJqBbH5UfHPpeSvNPtF8oeKMKhgzzaM9YByt4iFZU92HnYSCEWFXBWNUkPM8LmdW2CA9Gdk1AVUFfDJ99qnXyEM",
  "key12": "27BqoLaxY549tp7Whr3Ux92J3QuKP3E2oqEBKjeCmEpxrX7jU2VaSaM2ibfg5oMGLj3qASdWybnxLBubZLmk47xM",
  "key13": "3kqpkwyUawHwxgAQJq5VkLyt3T5JApwJ293FS5ygh9E4p1xtmnWeS5SV8CiMRFQWnRB6kECUsQVSN11qYbCjg1C",
  "key14": "9GXkmp48zrXCYpbYoctnUKwyHmr2rkJxUMcjfgXTXqu2tHibh2JpMFdcwztU1oBrPZydmQCb7opjvmnt9W64BXS",
  "key15": "MXjzo78sQqNkxhkbwoV7GBi94thFAYk1qENND2iUSH3btpHsgK38TsQW5gFbENghnXN5DDy3GwCTJ42ujnLLaRQ",
  "key16": "4oPWRMazQGWCji4XaL22oXuWqC5LwVNgUtTK1Xzk63xZ5K7URkDEZVM74yNHRujn2SEVAfD593rm9Rvz5BddcknT",
  "key17": "259CJunhQU4RoxY5252mDHCFxFYrsRsxsj8nEL4Grp18qqU6b8WC6fvJMFz6RpSrMKv5hEmm5S7FgRHvcJYxtBeM",
  "key18": "67pjQo519sfJc2ro4SWNMbMqJeHtZp5eaXL2p9nGJbcGGG1RzNtnL5ixmJN9vkoJFWbNrq21L1DEepPUaUzeodj3",
  "key19": "2q8APb4RH2y38wk558qmXc5pACiWxwxDZi9R2Pau7EhpZtvfAC1ihamzh8UhecbeUPq7PJ3JowTg5mXsNo5F3keE",
  "key20": "2z5eyYdLbkqAWGK7m4fpF3ehu5P3NYRtxjhVoyMmRM733e3APkm1VCZLzW41muYuRqeJzmMX8ufcqN4qRDiNCJyb",
  "key21": "26zN7HhqC2CBEjFJcPyGbZeeMZ5hb8zpNQLHiRE434UwMgWXPz7Xgrzn6mZAp8k4DsakoKBpf8J8UEph8edc7gQ5",
  "key22": "5aVbURsd3pnCdTmbZn38awNYFfyzf1C1fodsz7e37td4TU36QF7tMyrcA9Am6wG4C92BCcRofJoBcfD8BXK4hqCe",
  "key23": "3GCv9QXGUkbFYzqdMvifucUzm5KKABfSu5TkiHBB241uoP14tbTiiCtn2Q45CgvUt3m52B2q7kPDwSpHeQ916N3L",
  "key24": "qipEoevbV71nm7Sp3ccjTPksP8k8yHQcGDo6fFGWrPxZor4hMubKivZyAa9J6w6DEazQ24q46BC3AG3wgMq6TJK",
  "key25": "5NRFgQqeZRNA79KynKyTg9shbhrLyfsRNfKaheMgBqJETcPPQpfVEpdr1drm8yccSGw5sMENTTFCDqmy5xQSzinQ",
  "key26": "2ny4DMP6TLP39cRiEYxeYERWDYoxNikZa6TRzqSsx6jmfC525UuxnY25QH9rsaHwNxC4GbhBrAHCUNwXvTYbUEbu",
  "key27": "iMFFxwp3iSP95BtdMvAdbsSoSJ8Dsv1yK2hGjMCyL1DQenkvBhJJf4has6BoaqpATPEtyuUGVHCsUPoiVmcYytG",
  "key28": "EG7FXmUbydKfXtMPpCLX2YJTHC8qCTtV1jkJgBvPMJNCvuYsGsbQRkhLZWgdm8w6znkEjftRWRmgQopFYBfa46g",
  "key29": "528SgeihixHdBdpWxovNMgCBUZ51VeaNVD5WS3DqssDkrg6AMAyQG7UaDxtRG1ydgMApCm4M1fJMbhSUAo3TtfEw",
  "key30": "2y3W6t9EYK94zDxgjTkrmMkQ5nJqXLta6oyWaZFiDFwUGhPCsjJ1a8AJfHLGjxbGE8Bzfn7j94CVnr6yRF1cUUs6",
  "key31": "3XsPjjjxFsvPJSKUTZyzsn2d2wVFSPVzgcq8WWsrm3g1Fy9YrTFXVcjFE4Dp3HvvXPnEmJDnKFNYJWLaP3CwUR3s",
  "key32": "42aq7WzfSfw9AMXUAuLqoDVyCAZeZtCbVGYeH3aKkDfBGtYA86YMuBttk6qpsdCMCooR1FX8vhuAGENXTooNMsZH",
  "key33": "TKe1Y3Kk2fDgBoC1atoELi6nZK4HbDBntM1HZBi8oaCjrWMo5PUVmiTQwFWT4EosP8VcVQoBnvNBxUza6hHDHTP",
  "key34": "39s45RypfFfanDxtWvvKXoXpRjcYFjksWCMavBexCg6xrmbxrXTkq77KTUwLuyoaFsyUkutV1Ua6D1qEwUenorFs",
  "key35": "2ksYmjodVXfrM3wixdrzbDauKbfY71XBTGzS4Y2Yr6ieMdmo4xmYdA56Qa6S4BXheXd6VDHoF6K3Ds1xR7Gic9XN"
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
