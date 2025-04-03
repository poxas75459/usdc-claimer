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
    "4GTNjb34XAv1qDsvuS3XXUe45bFFu2cqtLdBvy38nhhCn3xdwDxjHyLaV8h3mUTtRKfBmV7gPnp8hx255tG8KtEG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zR4NE5UCaxMfVQg7T4AJkrGvR2ACZZUJCgrUKNCXzTTDwA8sG6xy8LqKmA1FzXcTwky1PtShf9hpEeuVHmy8NMn",
  "key1": "5nQC5fodkwN5opn9aguX7u74hypTEkxnWLxKJK3jjjuDRXvsezr1qVLDJkYR8vtcbDerL34TGU49cFxsCH6gW5JR",
  "key2": "5HWnnBGpRUEctjFSjZiHLv1Ks7sHNfnwTvAfNEZgtVGpKVaWZQHA8PgQ51wDrAbEpmuV74eszXhUZ53ppjBXdMEj",
  "key3": "5GAGNsggFaWjgQMutyDXc8UPhK1vyMWdkwSURjvJobHEFfAY2vKbxsSBneTqa6J1NtFAtde4dWdM1EQyCEe8RRFL",
  "key4": "5oEWQyRrgkc213SrhWDqWbxvL4hTuDxAF4vRmW2zTwV11dp57ropvmFRC3u7Qwuk5FwAsxXHjDUt8YX9eDAb7cWb",
  "key5": "2TrnXkPP7Wy9fVD28KNjc1bfDSYfqnjqXWadBmM9dN6BC7gk2cXNtZbWNLqzW3pfvGnj9k885QbEuVAJAign6ron",
  "key6": "4psJb1thKYxEo1aumSg4Gao4FCYyDjj3PCT8M69VuGjWBG7CKkLNUHepGtEFWpAKGjkikNJAEzKUycMEodBHAU2d",
  "key7": "67dPnXTo4qto7Nif36LFPiC38xastTaVuDzGphJKfWnnzd4c2EAgB2Bu2a7HSjigw6ffXqV5BkApnCaJMm9DhNSQ",
  "key8": "36k3wPEZtMViupzygFeJhrQKiMA9CNQEFH3LtccRCbbowae7Kgy2rqKoH2khKDVp6xCMvLWUK5AFruWVrKEfTWjX",
  "key9": "5iBziRCEc1QLG78gGqy2HDNb2T3X8Ft29vkpFfrDarn3e3B5EBDrUgHdx2FD8dGUWDDHKM662Mj91hkmfVQDnMWB",
  "key10": "2LfhXdZcXhxShz2Wt3S5BFLRgWMSftF2HgAPLJeQsggXz9KSbCjbmxRW6YJvvsehfWNcDHwFVwofqcerzoognFcc",
  "key11": "rVsH5GXyTRqjBZazZDpuhTJ1i2LArUjHfoDTAyvmxtiRiAYH2sbcaJ3pqosxRsW6JSPcprgzNETtpzyy13aptRM",
  "key12": "3fhQYDppjMi9eLkQios2jhK4pidqSJJhZRn8fiD4ng4mMBchahqutvLZpqpydbUd6UYqmYrj87sWZH6wJw6bgmLx",
  "key13": "2yZofMTUwZogoQmrLSCyL5MdXHnLaVzN1wuMbDkP6YGvrUQVVVKSeTTueyc46k2uPFYL5V7yVscbHx3CTEFtLtF4",
  "key14": "5QRrHbjnGjZmqT8Bca3mpgznVuiMZNj38G6yne4ziq4jVSNmDToB8fdAHFJaGV1pzfQ8Kod24zPtsxtFLpCfeSPU",
  "key15": "257csxNPrYRc7oFiS44qNW1eLMWbErT1JZdGn8miHLiaFiedp7fSeJJg1GmWwE9ArCLn8dQHJ754zkSg2RFcK4ox",
  "key16": "5sgTxhxsycgAy9ku7EhdFCFAFUBpNBZhCqB6mxXivSd25jtX9eCtUrD8XZ5ikiDMy5HQ8FHgZHdVzZuSzbEbR3ct",
  "key17": "4kJVh8W6xtvVHgfFAnTkCttiCER3WSz3N4KKfFL8UNcYopXyMiUhVVmN4mCSBGE6bjJ8RpKaXboaKGMrPGBAcLyb",
  "key18": "5bLJftsgRcqbSEziVLYbavzCZQMtp9DQRUugWLZLcLu4GC5oKBbXXLR958azc6e9h6ssrQaaCRDGLqFk3ajMtBr5",
  "key19": "CV875gkM1sfjNauquSxr1Dzd9dKtdb8WyhMctVghHKa7MUYGqGbHZf5Mh5qiCQ8ySx454LWD77NQCpa1Ly9L9r4",
  "key20": "4DbkhJt5G4RoC8cRwqwtByN7BgxVEpHBfh64YZfwp65n6u86qP3uBmwHA18epz9jF8C68yLezUbiDByaVz3aGfFn",
  "key21": "1bi8ctfeXPEvzbviCH2J7WBUzmEqYgFUJVhCgZ8H3Yie38Jd7nnaRskZkhrSyB6zVc32BDbubaSiseBmdoYswJS",
  "key22": "3u2w2qm1ckKAGqcm75p7z9UpV1JgfwLf4FJZWQZ9KDLVYKh9gETSrRGr1naGAD6zXEavCpwwTwtpKQ7tRFwxw1Nq",
  "key23": "2n7enekKLPuzUL4UiXDgCTJnDeM6UxEo13AEaRxAspB4W2dY1NE5cUCuYomSbDjEGnBPLpQfs9Wkbcf68s9aZw9a",
  "key24": "4VMbHymgyyqBpYaR5KqSDh4A72pvnD3xe3UhrezdXieLL9yUi7UyscyjjvsXunPLuTDZNaQk5Yu6moDbTuXm1EvH",
  "key25": "4R4xwftcyM5MZN7o1GmVxG2p9cXHt1vbVkPYXTtVFMvXLggffeoDN4y1HhkUF2i25BkmvwNRmfbtofzjbMuzgxsL",
  "key26": "DfoPPx5qPHPwRNqnCD2rpee96STazwrGPSBSRxFY7NFgu5B5vXyh3BF2TjcjQ9FpiVC6m7v4fVJZXzbLywzWtYW",
  "key27": "574zpvUo6R6hDmwVizwBVUjBY3xAv6PPnsqJzU121sPGP4pPnB2EFFAvqH9deN9HUGsSzZZAJSb6BnnCHGKr7ysK",
  "key28": "ktKwGdQnBPYvEhy3H8biLE7ME4kx9QfF9VXS3vLCKhHiNSBAhkUR6jyRJA5ux573tcZNxZ1QzF6sWg2tjVRV7wn",
  "key29": "4Qsv7NHP9BgewAq5ZAZo5Fxuv6mVv27wz1YZDwJDq1am5xRALbShTTtnA9yUFLy3gytNCW4ySJMjVviwkeHUNGUh",
  "key30": "66XNuEjds4mcgepR18VJt3mmduCNhMRU8xx3zkpbWVYLa49uvXyZVxxXLEp1ME7RY3GERXhCoa6zDfrNHxXt6NPg",
  "key31": "59C9xRuvuJywntxkKd4G7zdrRSnWDBz4qTD88dHqRYo4A7vXJ4SRTm4TQ5dTsW359uQVJsoRCmbV5xtZvfWXkfuQ",
  "key32": "5i3CHtRs6XEuMA7MsZeHSRVeFsRd2UJXeMkFGgx69Q8h5SvLZ9c5uV24TwSi6b6TT9pnRUS5nivDiMZpbYb7wnWH",
  "key33": "3vRrvmch2sSWH3wpLyC1KxPEfkqwizzSHLTrDuYQQshPSVX7KZ9eXzFTB6FSehvRmUj42LJqk1QDsf1hng7YcbuD"
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
