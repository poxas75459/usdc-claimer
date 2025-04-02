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
    "5v6SjzhNS5ebJpWQpjz3BvQYdhVXrRa18r3jZTThZVuTiCLRwZ2S75KRWYU5tSWMKLt5Agw5x43vn3EHxTP46yAr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hynpW7G85s9Zbhk7ChDEPMHYvsFE9fkQ7TS7cgrLBn8LLpm1cXkWdYnUNaqdsRGXcHigENzb2GkU4gJFQcYVRn1",
  "key1": "2uirVk9Aj2Y1AwEwVrpfBi51fHeaAGSG6wgxpHAbNeNR9gWRTSthppTcEj5uvt4yTC79AMK2ErW1NMazxvT1U16M",
  "key2": "3uzguTsF4byPXoaLpQq4u9YDGgp3YpfeCMPh81owWkZCZ6xHf3HrutFENnU1chN5smdyZFhEAzQrnffyqxiAi5dU",
  "key3": "2BKGCQuKNL6aebBrbAACpGbfqTsqEgrDPtrpM27zJmo6Hyz5JtJqgFjMVdygsg5gLgWpMyhhbY754wgQhupSPK86",
  "key4": "5VzVYRMV43x3E1Xy1W13GLCmgNoCY5Hu4aGMLwNowfp8d9dispfvT3oJ9YaBPNg8KDnDWw2Y5LvRPYqRGkmFGHMy",
  "key5": "36Tj2R1tCmZuNW7rhzChgztm3zRk9sMinjfMtYNeCNpvzCyq5TZzWq6P3F6hSXnHC6AvsxeuC4Brh7i1qdEEU62X",
  "key6": "MJwuGUF2iByZbpJcYoGDHqC5zf1zYirPqGaPdvtWy2Ftjy8Ct674y7oQKJjX5UREGhyKQ9wxx2dvvdVGghysdPK",
  "key7": "48vXx6WVwpYVaLPXgdgDoWvdda98squHwJPk2ctxv75yj639deK1dCnRNbJ3P6hirpEjDaR2iyNpMyTRsNRDgd2F",
  "key8": "5LycUAEQ38L5fQZYBWcqdhLtvcLJp8AdyahzsSfDEycqgpg7PUVUCBibkFyfbNwg5xSNxq1CDBiAuKoPXu81z46",
  "key9": "28gERmPkdRYg46CwzWHCrsc5mSSovUY7xTF6PkcxBRuBo8rxmztQuXKRTjJsx2jKBrbJvyZuDaVeHhCiYuVtn22H",
  "key10": "4n8jRPUwRavPRaCvv18oszRStBgxaKzkzN2r4AUpX7GmQSsUonDxZ2QyM4456ucdUC9qF4nDh1d86dLHGnC4P6iL",
  "key11": "um69bd6u7dRYTcSm2TQxNiQ7P4ZjuwNgqw98hVoUzbJsFhu8ZiefRQTs76gATXvgPjsxZTptfe2ZwpWWBiEeLJQ",
  "key12": "3Z6a4VmZyuYrK3jJYSrZ8UrtNmQHcF5R4dv8tYeYe2sm1CBZ2vrhynh4U2BMMt6nDyE3cBt7eExJSfxouVTu7APe",
  "key13": "qnD244dtyB72iW3rxaDLu8QXSPkxDMzYSWLzb7eRVrV39A3TpRpH1ifs8aZXd9SEhmaD45bcmKrNPg5arvFwrTL",
  "key14": "2qwBAsMjf5mJdEqnvMRGzPwH9Z5Wunw1arzT6wMo5pR1fK7271b7JTNcLmPtNBDZrEJvokD3gWVyNo8iEYb2Pda1",
  "key15": "4kUJE9fDTf9rMNaRAh2rypPGCShFKxktrHrgBiaWC3SkPNYPuMirMSx8sGmFvPzKNosiKaWybGtL4nber65FTXWT",
  "key16": "4H3bwryWiEZwznc7oagqDMYcgTqHfLdYU7Jpbtdkg1Kvb4NQep3TgDyCVcpWofPjuDJvzimum4Y7KnuLFE61pKEW",
  "key17": "5LkdPrrC2fiVkpjW1ENaTWsh3BixPzg6vhWJcswBrkYa1HGumwWmkbdSFTdNbaXPLVoFZHXWStqiPWXfSYTekRV9",
  "key18": "XRzDKmS9vNpfA49EhFjNNvdsHmpm3ePXuCy25V5EnqdpkcZHSW7r28pwpb2afsaYxRGv3d9fEEG3SZKTEB98Mdy",
  "key19": "LLgGE1nB545Ux5zC6dGGeAPeD9jdHUZoppya6YE8wfnskF9fVS2xU9qgf6zLh2sGXMTMyyXbfqx9tnPrsHJB46u",
  "key20": "XXiBVLdVBb6LWJjWvjELetbjxjrvZqb1rnkw8XZLAShQbBwNErYRrimLdisBhSCgpRqePbh2inRMfSYSWnmSdSb",
  "key21": "3a8zqgBTenPgJEi3WTXvSeehBN8aup8Y9iH5DfocbnK46grXUhkKMazChde1oh9Mt5Ayug32wAcskjt2NFBcrdZ3",
  "key22": "3NNTt5HGopYS333foBorpRLDVhM7JzQW4NBoXzgThydqhzNULueiKTLkLQUQAgfTrnDGqPRdASaDeadGH9c2JD5V",
  "key23": "MPUTjhkdDwUZ9SWNqnLUCXFU3LAJCPJJ4PvHkojk7vG3cC5377kA6d23zBpL2Ed1Ny9RaoeHvLPTCMuNvZCCoVL",
  "key24": "3aW1b4LDLV2gVvnMRrdHSUZYy2wuyPFuMBRYkrfKQc7QzkgpbwgjJnwBZeemuTssKrEp3HiLyMCUHYLXi6YRCLCG",
  "key25": "RuZ7M8fMCo5V9gVBe7hhPV7u5ycrkDyFSV9caRp4ndocNiQZWT171T9x9GNjSmZFg8sFTBvQbVScezRnJ5hSKeh",
  "key26": "5iMsfNAqZ3s2yWPG9Bk5eZvKTFPcm5fgPRgz4YYKB3yN2VxgtFWqvASPjLB8S238haj3ZYbH1mcnt7BzBQumWJKP",
  "key27": "bRLTkqm59WMLnYgSdLyKRsn1V6Wsdx2utgR8C5EdBo8qxiAg6mrEeaSMz2foZ6mnPSQdGBsbrrLscBs1GmZiNQg",
  "key28": "2tQHz5vxTaCcMj5hgCRrQbpvdmxVz5JbhuuhhaHe1kD5an3gzrbEkKdDZTPn7bi9s887tjyUY2ZdHTqDKUEzqSgm",
  "key29": "wAz89VmoEePgNZkYW3TkeM48gxwdgh7n77gZGTL8zFBwHLpvpQWUxK9r2i6qxky48yzXBvtY78mZyHHNLEVyw5R",
  "key30": "hKWKgv11NsGXSkxEY3kAj8oyo5uMyPMCBJgzXCpdardNv7Z5ibCQQ7cNDo4PapgwG6ijUTxVDQBen89GMNUA1TS",
  "key31": "mDCRqwb541tD2GpyMGCzZczuGHHCcqeYp5DKLs9e7kukwP451YENQsAyFHLpSRPmWynY6JW4UGyjGareCtS4gay",
  "key32": "2hRQRo6itv4NjgdaACQdbREpwDohekLHd3qXdJAqvPHWE5ib95PXqxWxwWHDwaknxN8VWEB9PPVGYmGtqbHqZuHv",
  "key33": "2ricbc8wpXdDhrPasfzt9S2YiUW2Vfpeg1iSHgFGx3XF6CDQnFVEEgL3hVj6s7vE7k3AFjuf9QE3FfeY1bVQhV8B",
  "key34": "5TzfWpPM2YsLHGVyR8GgxZn7NaPDHoQjmH13Sc5qKkBiSaaW5yYZrt3W7BCxXJJYbdQAUfmHSW9Lt4n33fDjEz8E",
  "key35": "ZMoqpU3wu7GZq97QWnJFv62w8iEcpw23JW14pqsjYd5RZrR2eCtMZAXyRrQeBKm2Vz7wEN8a15advBopT5QAb1d",
  "key36": "2fuX7HrsyyXTBfVKegzvC72DJZCzRAReNTusVgxdr1SNEbEKJ4gWFvGk7y7Zev9xsfb2UNpM8aMrnGTyc2sEbuDF",
  "key37": "54NmMBZaSGFHNGvw825oCPrWoZbnEHKwx2yVxKTUvsqqHZjGo27goCpBtwLb4LJxSs1hMCbf5GdBKb9TD3vnzvcm",
  "key38": "5szMUqt6ttYuNJ6e8ayjqRxpMHXUzDuHGep5sE8WYFzc1XqiU8L4V52QbbVq6Mf8N3D6AgEqrbgWzdKetuY5mvdg",
  "key39": "ixHGsZe4ADeytRv5pK7JGMFT6dCuJwVkD1M1qbev9tcSUC4CvW7zX79DqdszfFgBFmJ2QoiPR6jJ1Giso3becrq",
  "key40": "5abq14DEEShwkxfZV8rZK9QqRrpfH4dxsk3MwgEVrNsviM9mn4UPpW3FX9yhwdLSa3JwZSESaWeaz3u58qKcxLZx",
  "key41": "2fR9zBnkJia6spdEJ5nNNSdPTx9RKBUHjPwLQvd33Jqtvr8a9gGLRkDt5T9Enhu3myQAV2Bo1mf485j4fL1bdkoy"
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
