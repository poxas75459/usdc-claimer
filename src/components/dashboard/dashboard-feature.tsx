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
    "kXb3FzWXGM1FjSYoPacUJv9n4Bjh8EC9FZcg3oTrKait5G4N62ZRf8f4VUdNaH8a6hWfP6dBEATYm4a8sPKCTAR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XGdx8uqRm1phh86f4cModLbHfjJRxkhgEpVesoVK3bbmJxgtPqGmwyv5sChT8rJXgUg3KxM9FYdEnizMKqTDw9J",
  "key1": "5oswpLzzghbe16rdvpUEuGoaebujEkPpkKm94oWzYeVkMxVkjy8kEpk4NWFH7pzU17SpuopgBaGYgoVzgQkny46Q",
  "key2": "5vfdCSUvytZPmxaC8Fk38hxrPHR5dmnnqLUrL9JHmBk3FaqZDjKBGT86sJzHwqJhhW41xAg1qRZRr3xVQGgfh71N",
  "key3": "M99Ge4hn7zfAGEwA34WBbFtM17KgHgYR2u9ukfWQyS1c8xkU8sc5KyNtT9z9BgfJqQUhGKZVdDGLEcjhHZvMkc3",
  "key4": "4Jtt8d9sKLt7R1YJNAo3XwxZahDPaw99cR8N8KvuwPW2MdC7oM2Vi9yM5WQwGAAjoRAuh5JZqk8NZYYh3ZxraW4x",
  "key5": "2xwBXT1fGVzkLzQdccrASLAzUkucTkRFSSGN4ExgEp17TBo65JkZUwwfsDSFdBZAUTmUqV8Sw3md3oHg23vz93eR",
  "key6": "2J3uMb3xmnwjpopEYCtc69fqkYi5wuF2fuPj5VoXtvQYc5Gmygg8mFpUxcC22LP2aupsm2EPeqxKRJKPMBGKJxvS",
  "key7": "36EGUhsjNXCvaxCYYK9B1XutxnVKeWPJv3ToyuBrkeiRD9KGxDoUahD3GLnpd68Ns6Ec4rFzgrsBxL4Qw74YCTE9",
  "key8": "56m4yvkvZ2hQeMRwYqnBYSKNCENobV3RhQHy394iYs12PQ4SMYELNinMdE3rSENDAdKy7NHFCCsmHDg4GagWuAYB",
  "key9": "4JYmBFN9tE1vMP3WtTkgnfvBiiCWQLTdeZppj4jrLrb4kVCEyp5A4EKPSJZJ7DMnerYkeisZn8tBJgDyRfJzQ9Gp",
  "key10": "p8bvTCUTTbAPoEMdzTGsgwNVWUiHK4YGC9fD9Vt6LGe9rJeMh3WPCyyZzF4YLdYKF6yzr6JNyenUevBeVmAFAi6",
  "key11": "2CsuBzXXWkVWmvkUVknW5CEVFmWPsXcaxYuesCExK5nQmj8zqboCy7bBUdrhoaRspVxd1nt9fLE1UpQysQBLponN",
  "key12": "3PkeA9PsVYZqpZSUF4k14AiunRj3gRzKvnEWz7UN1ctmmiPRqcTjhkRP1BbMQHYjGAQbxtzdfTSTSyivxUZ7i65P",
  "key13": "9Ui5GEjKGJfZEJ8KvuJofsMxDm8jq7EdQivjdC4EiAw98epToceCoypgnrNdga2CcUL3TnoS8Z8riLNAqd2w5da",
  "key14": "4KtguiPF1jtkUBw4aiLJSYVqXoSAskMz8hJwuooFD9n7TTwLdzkkYgvjvzbQA82taHzL5MuE2aDUpTomWLF9Q6dP",
  "key15": "WA394N2JygFgoFnRcw6TvoPLpjJnVzh9BY8i9uFL4ykcdm46s69jHCKoAyBJet1JiZJP6tzXC1UW9JEUDGWwQvo",
  "key16": "5E4veSjhz4UEEkP158zft9f8ZKwHZquiqYYfuae5sTws75uRUShsAsvBhy3c3KwsE62qYUBVtVrvU8DSEQ6EjL8c",
  "key17": "KNXTWS5koknHdroUYsff8aGTiSe3YwdMWkuD8HyTGY9AdzCkwfRuFFCKLUYJsACYX4GgGPN6L72PB8kJBHPsu7b",
  "key18": "2rB2vNxyJNQx1Ypv8oABq1m8gfKCJkjEbDeLoSriEp5g7fhxKQLeQxnPD2sQewvDKQtvfPWAdAN8rU6TVGtQRMWC",
  "key19": "5BSgRVdNCLoPgmk7oppip2WMGB6fNkLqCNg252R2xSi4GTBzKhUSzZ1UpCDjUgHUoCufyown5FpUcVnwtgvyZKzT",
  "key20": "5suP8TAUdpfbsU7KZ7An89imtLqcrVZdKFjkpTH99Wf9FBWZt4doyPKuv65BRdr4fmxGNubnSB52EU5fj9hvwTod",
  "key21": "An2HYBK4MsdKJ8GDUoATuGCsydmJSYLoy5mqdMCpFaRpuyRGMuBVNv425bJ2bMPURvB5EDwgs9TMSKgB2WEL7Ln",
  "key22": "2FFqdwV9X59mbYjdimfXHL2pboSZUmYwQp4LWxRTNHQ1WYJyL17P5NHf3GnuHQCC4RP8eYkaL7jS8ByTwrUe4rtS",
  "key23": "4ggpgYmoDQiNVR4QMLx6ZPGgDHLGM3f9ap7BNsXEdfNnXvBeDeqzuzucvFNZT6GSqEjPTvpwgbaXUz9m2bWYzdiG",
  "key24": "L4bKFixPB3GPrMCNu67XXvAgB4FD8cjYYVXvwWtDywTTexY1oPiEndY9d6Hze48wLBhbQkE7pYbQfW8bt43biHZ",
  "key25": "3sTF1X8ZBxDQKr6nQDdMHtS4247Uc2vZc8jByD7F9Fkn72SCxMjxr5pBVmQmxXQwXvo6VDTjZCxTDinpg1fhAS5y",
  "key26": "3xdGng2rBRcR4xErxawFfterV3j6XQtvxGyJ9swjMatcKG8Ty2AnARttsgbF8xaZpNhyCLjSheoDED5EcZddDMAU",
  "key27": "5bmvBa7en5xgL8WxGgJfwJeEdjG9EaciETdJxADFJUAHtNvczyCdPaRWeBnxrqjt1hrfkCAj9cEn6943sG3HhcvW",
  "key28": "kGiaYWyrHVh7HGU4jJzoRpUz6rsU381aE4AjwxnDSVVwTYQARafTB5GpkDd8tnt1cHe8Lp2XPqLLh69gqzVKJUD",
  "key29": "48km2EgeGAH6VAJ8HUEfyX8RaoqSK3FCpktuaJb1ANn6r11EHtwU8rALQpgDBaDAfivrpESjxRpPWJzfKHtdGegw",
  "key30": "2TLbX4LvYbYPUwyDMNAARqkimpm4zei19ZsSCgeFchsWtAL9rfeaBU7MAiH34kcojpoiquiCthDwQZ99Frr6GDPv",
  "key31": "3WGDVVreVADUjN5AhvRd6fg79mDhbMcpzGMLnHMkt8HyJeG2gP6KtBRGkFwd1XtNgAVNuGAq9a7Kvhckzeab28GQ",
  "key32": "5guEHhSZSqnZUzu5AGU1CMtDMJToRaPffUm294deGbuzpEticjhjXYYp8UZ7HFPaiUNnSVfMCiGi5b5C7eMseKK6",
  "key33": "pePmGQZLigf3to5oLnZMtf3oxp7LaAQuocqDa9Ur53FLDZTcRbRwr75V7WoeC9a24MGumizSd9H4rVaAE1hsQau",
  "key34": "3YmMcbQBLoxcFp4B1ajd8ge2hR1sAbcU3YCSAmaUjWXbieH3PpdZdRRdT73uyQiVdDpyeMVxTKzEQtk3b52YxZBE",
  "key35": "3XwgYGE2T3TsoxfyuNHr2gMAbZLQUt5cpciTvKLy6WSSmL7rrW9eCzyH8BWx1382UfBgaiKPhumtJCheMUpS4iQQ",
  "key36": "4ME7Eod5vXNtgTJNY3cXy6Cc7S8u1pkwMadtjeEkuBqg7KEChhjs8gDxRCt2L8SYLbX1mNuPTKNceyVn1NsprqBi"
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
