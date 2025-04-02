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
    "3d7eghhNJh3rwgCiwXRbaC1ocv15EzPGJTo3PQgoej69BwbgfuRUDEXk2Qg9o2BZCHoW8Ch9BgAJtiyqUWXBxsdZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KYfRwG8abMxBaZERa2FnyxWyGtyGT33xD6fuuiNMYYLdHwk8QUe88j3HjzXdbkXnv4H2tRo1pWAiAsV1UQ4WNS4",
  "key1": "5Yc1rPgb9tr47eRG3A37xeRhFz9meVsmUkkzyGGH8fzekfShGxW9haEZraZV7NQGFEwozuHMTdsLqDruLWJvNycE",
  "key2": "35R8ihtr4x1L8RgdoD7NB4SNpu1WZmE3ugKrnQJY6AzKhMqDcTdftB8nKKUF7H92M3wv6oAFDDJX83m5qmADiiYa",
  "key3": "3YCyPfNG9rsDZ3cBw6y4MfYFRdQLdz3is4rp2D8VFkfbdf1kdDBW7e4rQ9iTezyTyYEMXCfLLs7B1zx425vEiXD6",
  "key4": "UNKdGx1vNYL1icemTu1B8AzkKpuPedPztvdn6qDyjKYW4UoxMgnXV7NPz3aGQonEhwTa7np44neXA1scyjp7are",
  "key5": "2fx8WFum64sHo7jizAw5Ut4W2LMusk5U8A8V116ADKpTtjK21vtvQu1d37cSxaRtN47ekBaGV52xwViqHEMBE9gH",
  "key6": "5Pd2Tr9FKqo4M8JonJ4DWFqtFVaBy8qYAjP4Z5bD4NapTfC3TbDacDiBtKs8LUK5CQ86BvXeu9q6QhrmPNMpiNRY",
  "key7": "34gMJdiMn2LJGHbqoRScywfU91vapi1kvToBb9mgZqBCK1J9NGH2aScyv7eRSpXpEULHgqP2m3sWosuEBKpDYMCK",
  "key8": "vqaUmazJPQQJ1WuBUHUktEiC2mSxMWdpTvtj2LF6LTb4khKtREGDA4KguzMPoaHs79wfUTj1Suu4onjhPSHqH8r",
  "key9": "5Fe48zUgHWs7h6BCRrjmgNhfocPYZcgBCo1DTjwFjDgb6qv4JHUtkxQCFQ783wrzqNB8w6sDubLTptJ1hn4NScvW",
  "key10": "3GpcRbFrwwWDKuraJErUS7eGpKexgwqMxkaG81v6HNDLSo8TUeFqUpbUjG54cS6peJQo67nozF3xCGH9NahYFc7n",
  "key11": "5q4qh4rKAkJhtrNZjKybG6zoupwHVrbzYHwCC99om2GKmLzVKYEGe1X5sA5Zo859jdWynSbyspYNxmWCbJkKuC67",
  "key12": "4R6tpck1Eg8CxnrC43z38FwgLF6Di1S6h9iYeCHcXWmP4WUuAe8EUz6k7przHpKRTRYJkf8m6e2xaRPFU3WNtwqk",
  "key13": "3yacJjad8SEp46j8Zmpm3kEQvKEMF5MgLCJvaeWSGbLFWqdK9swUCoDVkk1Wbs9LfpHXoBiSc4M4BrxypNx2VqB4",
  "key14": "2Qa54u47XMgUeXgPtiStVrsZU6zWbKXwo2y7Lx23BViCSqtq6N6jPWtJByNX5wa4Mrgabzo7osbmm1gJYVbQMiiQ",
  "key15": "21STopJmeaX4YY8dHPVnUsvHEbkBsLkTihXp49iB83poXiiT1m6pnukZ4pjsX48xnK9VY9Dq53xLcJhGzddxsWRY",
  "key16": "28cmDZ1CJBf6FYSHzXXTBED3f4UHSVM9QMiGAtf5J3WURHUdeAHCt9FqD7QpAPqskxmmkJtAnFxBNhb9CJf8ME3u",
  "key17": "Pzh9sXFeiNDoF5gVxpbvkQb9kCuapRTDTFStzzyQXMZKaSDiKMPeB6vGxmq1mcHhxdHswiNEn7hgErm7R6rpaPH",
  "key18": "5E3AqyrfWjiv9GTB534fohj1LRPRUNhEWDnEhCxS26h3DCdtk5d1KMoeuA3xbSWyi4zkF7tjS8rM6XKLS6VoUC1F",
  "key19": "2W8Mhd42NLj29mopfcamAh9PxWq6bvwaFRped1RJr4sCJ3s9yHyXCeCZbULkpGMUjR2Zfxy2hcwfqUBe4AJAs9Pc",
  "key20": "AmDEyH4dfBKYCLo8aeyCvNYFDHW9yanCK22EWsUkkQ8hHtpAo3Z3bY1dcQMpsHVB9vNtY2MZdKrv8rmXTKrgpVZ",
  "key21": "2Cm91ECtAFJGXTrjP1DNgkshTYvvVh5uMz5nemRHeNGWsx3PvJKsawMD6SGDEg4vYJD3jA33s7YG2oGHgULqC2Mq",
  "key22": "4wHoHcsdpAiwB7XEnkh3wGG7r7hGRNaQGf4iVk2QFD4bSL9pHBoVzPBDL1srLB1HpUA7EToAHp38CfJEhJPTXzsG",
  "key23": "39N1ae1RgtEbHPSW6yHSNYFHpmATjqSKXMcbKfx9enZeXombN3pTJamYxDsv9s3HA4tfP3UibpXkEivqYNRaRDDr",
  "key24": "415wDibFPQeUU3hihHf3BCTdvHEccE65G7awkzuwDACVDdCn2Y2UYuiegXte5VqsvqfYbHTVeZfaDQTeXYknUtm4",
  "key25": "2mwu1mma7qYdKJhEFnUgbXVAvKMKA2pnLVoVzoZrpjc2T3VG1Ri7DatGdREu5WCJt8bNGo5HXWhPd6pPSNNAFZYJ",
  "key26": "5ujGoe58XaT29s9Ddw7MMoyqaf42zCbKUFpw8iW4cPvuRLZqAZTsFhpDFauaArDKLrUmbHR4GqLeoABFZZTBuPKC",
  "key27": "4k1NpfQxnisM7xvF1w7KcbDzW3sNk9GBxXMUpg9vDgKdQhJKoy8fGS2mhsKwqTBqACHAGJk86fauPxMFDP71XrH7",
  "key28": "aWK1STL8vvcfvKBX2ANvJbQr7krCUcdzSLKU7aQEYrvRcAyRyciKpqF6jDvWgzLcJ52n7TnUSEoam6fNVu4aFZ2",
  "key29": "2jyXc54ioTMGVNFtQGMRcZCBvzRdUXMxEpehpg63DPYdGowFU8ZMeUTGamtiwYs7wfM9oMiVcXKDTyXLggSggX7M",
  "key30": "Byi7aW4PR63TPf6yiPPYxhMXgZjfK3LX8pKni7kisCbgVGHTSBqddNmnsS9e17nm7rZktphS1Cp4NDcCCzZJHsJ",
  "key31": "RxCVDCXmUbJy9LqXaM4n63zFMV47MV1frU15MdquFv9xC1FRNhfyHbgYmv8GBKUM7UKr9QhoxuhNjAJ8Nc8N5uP",
  "key32": "46B2J485ahMCHnTHL1ZkDgVo2XeRyj1js5YeN4YuHTyF8xEBfN41wQXpCpNRLSM9pSjs19zfNMncUrJ3ki9dJnAX",
  "key33": "BC2XJ5vij5DBuXXJVGqGQaKkb7dwqAFQuBnMgGC1KZrwfqZo1oqBxXKpzPTQuNehiGgwZTj1nU9JLCMoCk3mooB",
  "key34": "65T6UNDNmYEK2XJLA772rNowQpLkAyk5K2hEQTYSksvYHsSHxLXpfosTVY8T8gp8gVj3y82VpjVL62bWJLeYAzNr",
  "key35": "5J5Sy4ozyhtiDWWsVCvrtm4Cki5w6FRPe6QZ2LcdXtCErbnFvEYBj9Rhhr9DoczyNNUz99x4WKgqXrQWsiRoYDNE",
  "key36": "3XhBDcVrCv5ZzJ5aKDUdg6FdiEu8cg1wYgvyqYgRkgDmHnS9idnNZhkAid8RpVvXcYnaFXCK9TkUjJkFmQpwxJMP",
  "key37": "4PDVhZffYdGHpUAptvBn7myqLrv51fUsSafkAJ1odU71i6jigohNw7E8oP3Hs5R7Zs5NdmfMxwyyVQ7ZYKyrJV9J",
  "key38": "3kDy3WZqGSVdMqSsva8Vp18Z1xtkEq1Yp2VsmfKXBsNtaJSkWHPUWf5TMKZdgGezyujC9H3onFzKZmC3deVj8vbU",
  "key39": "ZpM2gKFKUZ3cY2qE8EQ8zgkz5XpyqoBNitE9FXVTGJ2FYgPTqHTbiWu5vmGYHRq88cg6r16ExJFLUck9rFuZTZp",
  "key40": "9juRtVLgZhy7cYyReaaaBoECponkG7qfocs9g2BDzXQkEFwjRnfzhJYNobLqxk1PDpbV4Tb1PWhppHm4xoQ5saD",
  "key41": "2aMbFmFs5TWLzfs4U8gqUHs7KMAYpvL3JMU51TfUqDFqfyhK7kAoz75wQ7D5pDB1qdGtyYHFTK4ys8QZFtKP5v18",
  "key42": "3rnyNVhRAVgbUYKGpierdFa6jgvut8bLTUhwGzTtYcRwvu6a6HKEg9ZnukzjZGCSP7Dnt6YTGZd5j4S6sN2MTtp1",
  "key43": "4qa5EgdGghMy2a8CtRN5e6pbD3VpwDeQaEPtMnyLomjVMCPhfJPRo6qU37ViEyi1RtKrN4xziH9nmRph363F2Vgx",
  "key44": "2fuwY9RugZNuSUcsXCmjS3sRiDGfV3NRhyQrJKbqcJnCvgF3GJPxvkiShnCqBikqsp3PqBVyaq1q2vscyvJwspwK",
  "key45": "4fBAirVYAg1SqBeu8JSwWiERAKJ23ocPMWAKa3HUdPoe72LtxEvW2oSjo9RJTa9qwWnHt4PKUZfNsWZ8UXoUcHEZ",
  "key46": "WZ8awF35p9KoUMCmf9c4NsxQ1UdiErgFsPRH66WJPFRDZX43nJ4bUpDQmdno7zpPfdT4spymSTZ7CQPnGECqQBR",
  "key47": "55sfU69XtbeLc4xQU9pqqQ8xQ5waS28drR5fMuzmxqFBbFpoCeWPxAfWujwGRnT8JjnduqWT1M8cojzbTH1r7K2D",
  "key48": "3CPLsGSBuXtP8vpo1ADENj5cj2PXT8vguaqx6vcf4pye9XKtoeWSqjJzrb236kLfSzVVrRjdSChP37uEEJkfPR5j",
  "key49": "4q5jd8LqJrV7i9dCtUv91uhtkBjcGJAemAEoAYoAJVLyvhtGxSxSgc4D8mCUX5W9MQhnZfFKBqbTwmn3HN4m8q6r"
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
