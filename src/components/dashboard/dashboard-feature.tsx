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
    "k8cHaV9NQ3LSBtt4aXFpXGgkTK5VvLBwsWKkUiKroRxwoLTk5poCzUhwsz5Y4ShtCN3didLQcwwzW9PHueW2ZXv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p7QFPpuR6i69B55Vh3TPUVyWnjV9ieqXwf1W2EDRfLQ9FXH6pDGtUXQA78kzLmNDKYRzGkCBCi2me43L4KtYsrD",
  "key1": "5ShFPuFivFPYH8DnvSQX7ps8wf2rVwMjgXspPyiXs9uZ8tgsgALL1TBjsmVzUZKqzH1spqUqKhdnjD1PwE2LMAHK",
  "key2": "5c6AxLaQe68xQAQxwuNAHhBpwqmJeMh297qE9ibUM8atiaHLPZ1CYuXK1v3ZyFjwjjT9AnGv6aYto9ByL39hoDvc",
  "key3": "571j4d5xPVcTu2upnoQkYTKhUArKCf9MQebvnAiqtnQxgA7zoeWonV56McVka8WaH8NfTtV8kymYY374P6VNu2x1",
  "key4": "3FkQdWd5VAbxp5UBQh8oAitWXzhwrdbeNpQEv7WWt2ePSaZkHzKrZmELYonYy2BvYeUi9a5ScSdfnmVirPrhf4Rb",
  "key5": "4G4nsCtFAReQrboSXSB1izebkG1ogCY1xXEe12GRgnPptoMxaWQgeuhQKUA83QoN25rRW8S9gvbVtGNpDH6mEcUt",
  "key6": "31rxt4ExYGHnoeT5zTBmiRh1dwTKRRcN9x1gsidPBCctV8ovh3v4tkp4XhuryK1AwUT8C1YJeGDSDiJKMNbvMS6e",
  "key7": "4x1h4qeD1ViuUMQ9z6xPpKKXtFCWb9i1uvYy9EmCSgyXpLum1RCXkS1VpABTfsE5hXoxS42hJHtY8wGHqmhWvYHp",
  "key8": "521eRn3m6bpGoZE9yuLgD27w1BHReHArgfLL7qUAH3v27z9Fkhs6SfAav7Xo81b6ByKN9wVdK8eyR5XPMzknZEcg",
  "key9": "2ovTuiFGDnvdN5MVit8dHsLmDzy69EdUU1pkyBaZ1ypqpxFEq19vZUb3cnVzjFkZ7ryx5hiug9kWFrezxHyg574U",
  "key10": "5wTVPxPxiAkEJkHmH4T3sinB4vP6aDoC2niztpiRkcWQokSP8dGQeUx5ZCbuRXHNVD3PRt1CtvM1tRMyd341YoWy",
  "key11": "4cviVtSvepPzdo4h173TiWUasVRK7ubv51higeyzb1YxcgyFuycd19BxyyWVTZ1heAc4AVoa6eMxEkLB8A7QEbS9",
  "key12": "5BKJwFuUJXYcYQT4zVcxwXhTW71NtkhG8WrtMJ81HULaU3Z1dcpx8ZpraepSMaykrARkiL2BhgJ62pjHsP6VEGBG",
  "key13": "44atQfArnQJyWH5KSDQZc4zFFvDQ25iij53QhScQcyUFqn3s7EBx7tcEgpCsRjzrrMBY9m1yhuQ9b6At32kJnqgy",
  "key14": "4pGBwFFVV1oQJZJjSFr2G14oNtCshcxgEkjZwDYT7kr5HnQ1W3tZB6Uooit4PTK1u8q7wD753qpeHajqYAKzsPAU",
  "key15": "2fQu8sFdDFR4Ztb21VNBGZCngwHUao5tmiVBwgRG731APDyqBCCkBhKi3Xp25swrTviraXFf5ET9T7SeErefVmCA",
  "key16": "3x1jNhFWLq7hAitTQ8RAuzxu8vGYe5x25L9ZG6SvS25YNntUtaeLwGQhUh4gMFLUZGaHD2aj2PEgdgqzNUJ2fEsC",
  "key17": "eMmfx8sS1MYGqe7Ef3YaGaHFCGSBTRtkGreC8jRkeFH25ZeN1iVKqkKrSC4sTvLTKHWNPBbk5YF1CrJzuiG1KkT",
  "key18": "bJfR4n3KsQNak9vhXx3qyUnsf8zpULzmFpNBnMoPmuDGCXRFyYGpZ2kotZSHZPgB3AAH29DU9Mr8rwQ9yz3fGrR",
  "key19": "2GP2zVCr7kqGZmUMcqGWTrMHUy2b4qAGrRpFSXTA7Et348drEmi7woHFJa5mpJXGKGFZXvSrrXX9WMgENMunngzp",
  "key20": "3ysPXc83fDp45XGK3yf7MV3zfaFA1eug3vBA8ob7zLWgn7PisnMqPCEs66nCtLkyVaRiXwESQdhQHYk9wJ7Xp6oJ",
  "key21": "4Do5xKkJ6dUfHoUQx2tb5PpxGHdLSMfrDngWjTyrBENK6dJs5JJ7AxbgucZa47cpgKrtjgtExG2kNkEJGBhdjHdQ",
  "key22": "W6dHZJ1d86agPvYj8AFQEEL11QMrsxBET5UWpawwRX6bR6FLRPDpFkm5N8H9Hr8nCXuPmvHy8SX2ykMLHmEyPrT",
  "key23": "3ac27szu1dpRLnbrwBiY8uyRet69R16YQGt1yBi4Uj989iqSFaEdznWKiyCHnmKkvJfj1pwzhAgXdc1UqUTcwdHP",
  "key24": "4hiDvNF1oUdLLLQfXz1LRLixyFQFqLYbPTwb6sWjouAGuj625MVnnDxQ56BbqjmAoczJnpto7BfcZMRZArca9ahv",
  "key25": "3Ba84yCiV591S3bq81hjG9vF992nyovieZPsHHpumJcq7M4kPrPcCDDVgRZ9GDqBm8FKvSRd33MWxxU8sGy9nPRx",
  "key26": "5mXEdBjiKK665T9L2JBGKu7NtZjSxPkGLcyZoPWCn4YKLvCFb2JZd3RBAmZETqvWevgf4cmKdhLwLPLUeVWvUGCM",
  "key27": "2FcrwmrpwNfif53sX9YjZmzVo57sjDGRrcv5Cbkhq58oJSuLV6JXpC3q9AapRWQi25aBPKTPHGoE4mZR5CWqkf6",
  "key28": "26RmGMhqqjjfJMuBg6HufypVJKr63iCpU8B3jiavW6kvQcH2uPNTHCNsCtrFDE2fbCMpsTyuDSHEesGDCNnHBG8b",
  "key29": "67r6m1hffv8gGvxGnW4KSX5tFLsKM9gyysogpdYv9CoS86eq9m6sJnxEVnofpfdxND5KPiMTkcqAQkrQwzs3zyLi",
  "key30": "32itCnsWqZE5SXfiFkaUP7hqWKEfzimGuuj21jnkhgChCxfXdBfkyvsdEvqsv4UX49rMuTQBKfXVtvJyfhHq6g4W",
  "key31": "3XoDJBwYN5LVi9mZAPdbbPARg79CFutTm5ggqRBB6VTMMx41QNAkW84jZwPdPtAYjo6FUndFaju8o7UfW6DiBQU6",
  "key32": "5Zt1tJuxpX8jFxo6QCkaxA5mUQqdEhpKxpoEZQZ5z9QfSD8EMoKCQJP7UHSpzuPfpSLSri7B3uu6ghadgzVfXZHG",
  "key33": "4XGYFSUnQREyNuvif64YB9c12ech5mGkRErLd55ARU6FwHsnYqXKGxzLvVR4FcXxciwDENY31cK3cPoffi4f1GUT",
  "key34": "2QzbDNFgZf6F1bDB4WFPeAy9qekQWjrQERWkhPxdTNH7YretF9HbK1RTdHf6iazuQzqJYhVRNjqiPu5Fpoep5yqK"
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
