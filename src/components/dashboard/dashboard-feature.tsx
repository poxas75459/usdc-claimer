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
    "4iyswxsqQWUAzjTY3HXFj7xWkiw9NFjxMu8sKYdncvQ3nK9pdur9oEkTETeKGeDgyVxFdCS7WwCSSGg7noRVH3FM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wFXppHdhTdggVkMWimZyZHQ7Wz2zqEmdrE1qCWHNUHj9weCFUJxSwisTX1DTMY5MtyFBCXqvJYUDonzJGRPgyjY",
  "key1": "329adKQ1mbqgf11d65mo9onDvJCE4NUyu9PFoP8JdEpEGUM776qzAzdGXVVxjdNvb5zSPo4xGvDk1YmC9Q8wAJgh",
  "key2": "2jWSw9JwAC4FGZMggtfbSdLHAXt8Pz8ryiTQzjn8b99DEyYk7kfSvAEp9YRjS47UEzdxD9nFhbY5ZfssoCsLEYzu",
  "key3": "pS4hbQhDPV4tiMC7xxcp9YbavHTFrocE7Wxa1CHfarCJC9EtvfS597JqoBGqJArf1R1UfkKL4c5PKXssz3MdhA1",
  "key4": "62vMwiceUBPe46A635dc4NwQTyyqy4oHTQNJtoR2k5JY2mP3ykGASaCfTW9stJcXQz6jhyAvkWPmSCA8QunCWwVi",
  "key5": "3x9a8ZyrQApPdCNG3JCRXvpxnES96uQKgRvEX7X6sxPoHJe9BBSTXcUvEA7TFGJxiCEMdE84Mk5QidYKHpFNBUZo",
  "key6": "5T8v2L1bNzK9NjwzyLnscKoR2oa48MaGaphPaLjMgdhN5A5inT3tjKwTdtNBh7WuU8rFf9Es2488Uvdyh9SPXUZE",
  "key7": "65YgVxKSk6mFnkZRQYreFLCJHHMZCoUZXyjQxEzGazL5ZMGisP5XqUaXNDLccmy4C8qNVQV8N943Ek18Xz8Y1wGd",
  "key8": "2gSZpqWXLqroTznfbxrm7TxCpYmA9LfaUzBt9CESofpAcB3ymG9UssTs3Au6hbyWgzrFETvt7DhcfGRP4GAjZ6sZ",
  "key9": "4NdjXaFwezZ3MjhHizPtB5TkyqGVXTwHuKGSAhrboL5dvH5gsPiwsfiH82LJANMwDbKUjQE5QVSdHwLvYtmFr2Zh",
  "key10": "4GhbffCiAV3WB4zcSatN9ScW3Q8JNS9k1rppJwbU6Lg5qbSygpTQ2DexvZvXeUAmUWbph6BoeTP2PPjGw21rcE4K",
  "key11": "24vATbPAz6TJyiW9fByU4xNSik1C5HWtgb7L6Uz7a7EWtKNXCE41cfW4dueX4cJdz9iffNVgja2sq4KsT3TPseZ7",
  "key12": "5pD1GeH8UVayDCfEK19bizqMnxoynGV6Q2Pc7yUfauJWSPbpgGpBjQtEqfnobRe7wuLhqM47Rc4N5hAYFynvLL4m",
  "key13": "2r5JsxPwo4cVSVCdtzdpSpPqnDQEyRQQBmqD5XN5RyLopAHecn4HxNdgfXiv5wTmDbbWrH5iNxi3RgGBtu7fcwYP",
  "key14": "jCcStkR2YSjNZv6DWFA4PMQDagRxUDXRFkd9QXjHUCMxUq6fc3YxjLGYLbnfjXFw2fH3RAC2ZZf9XAtzWQ3fwVP",
  "key15": "2wWfY2wZ3ZyebVZQu7Q1GMbGZYdzya2z3JXESvotooXMxi9Abhb3dvpHEru3vKikeDPEAAZaEMgVVwE5Szpx75zH",
  "key16": "5EnTAHakxbx4eLzQbkvLXgAV4F34KgKGYKfB1RKoSZwMFVnfrtqeYmhC8wmsGjKjQ8xYVoi9UEzsn28zEcHbnUAZ",
  "key17": "4DS4Butr8ubS6wkD17TXegSPTyV4ZkGVf3zk9UrRZD77BuSEtjNCHSxxxnnzDn5AgGLri74iRst3tzr4TsXPC6Bu",
  "key18": "5ecupdS7DSp8Myb2AKkUaYZetwU9vZRdxMGqdv63QFDCJc6iAfgqBRnxTK7QDsxKXSvJChMmgTFSEf9C173GLvAk",
  "key19": "2xZ6GRiEKS7V1ssEbjt8Ew2JdxZAGRe98qNWGjEgKWeT139x881CLag85CgsHJ5mK2EM1Xi7XtURJqNoVqfTCcRv",
  "key20": "5evmJLk8QqK2QvoBUzFhXLeXWLFS2bxC7u3698SQdB1EaYgBGGRgCpWovpedBjadrGsWNR2919f61gMnGf1VmWj6",
  "key21": "4MdPr7yRnJzL5sLYobgeVdEGryYaiCBkT5YFYtKggqpZVbrfokthTVpeo8iF38r9VevsPcb2CrLH8gN7QrDfDTXu",
  "key22": "XVCAuHA3DhT5hY14z4SxUBNDPRBmfaegVsvgHLcHrCAh7kwLfpMTEmg6wv2MVmvndSbnZprFquU4r6UDpihDFgt",
  "key23": "5ANm4FnGKKjZg3q2TmM1umgPpJUNs2bxus1MDmkPCJWtreKAmMm9QKSL2kS4GNn1nTcAbz2jNVwRrWZmTb7THMFn",
  "key24": "2tkmv62WXaVyEcJhZ4W7f7Fe3wCm54NktjZwjTq8rfi5ofdNS5YM9crKrPGigrxWZozXJLxxHqW7M8eJMNcjXbFL",
  "key25": "4Ay4r2S7Ae1Z4hLWhL9xXNd41iw1j5HPUVwPWav3mczK66NRkyMJsf2cU39Xrwj3ngMGNFRDLysTye2BmVcwDjKs",
  "key26": "45sqeEGjroCiWgcoj66zTn7FaGJHPkYsYi8SS2aNcAUMstcSC9kwwiVo75ecoKPZJ5j1re45rgX6z4DzFJJQ8wsq",
  "key27": "3gZt4zrjYB8fMDbxWzkDFXkjNfyWoc5UtzJXjn9K7MyYaZBc6q43XRMAz3u6rCsMnU5Zmq3JT7djS924nyG6haqY",
  "key28": "5SS84eaqs16DdQr5haiaCfjiVGenkXxf7WzSH9kuUZPxa85QE49ycXUaDxf5ixFPAjSSoaY8oeoZq1Mft7a8WrRH",
  "key29": "52dEq4mM8MA7R7iEJs3YpSGcyRDnCEQhArMNPNetRvMLnrwsYCMJJcqBwAmjTvPouCSR28qyJGU84uEjpHBEQVpU",
  "key30": "2YeDXifCXYE96uYm9Cetv9FLEMwEqvgWsB3aVa4CyRkJ6ngTKHGUy153rJwqUVTNc7A6J1V2pdDBUuc5X5WXy1rm",
  "key31": "2KiJrmjrqJLZxiKrN9iZfUTrPFv26wHy18N2vST55erZEowbZM9uVXgqn2mcmDhXrqMU3yL46fc6HCkuGLochYJ",
  "key32": "3jiNW2m9b33Pe2hSvvymRex44PcMMWqBqdCvR5dv81ijTezGTcG9hnEnb2BT3LWuig5VRkWGEwf8911GcqqAJAsk",
  "key33": "BSuQ7iZkpezxNMyW7XWvNsKBtmRt464jNNweJQfC2q6BuzkxT2Ccgxw7ygpgZYFVRoes3GUS9nuG5UrVighem9o",
  "key34": "4cSJh3fYtBC9u4c6N6DjmzCsYzFy3JFDgEc16fyrsr5ngeHNBPbw8nuhNF9hwhuAb2LSqSpRcEvJDevKesCbjuLT",
  "key35": "5aakn9J3aUXb4yXMjQNVgkrXi1kCBf1mw7hxQrFy4PSkq5LedEhKwYmNyDFjw5mCB5VwUeQeaxfEek3SAey2TTxu",
  "key36": "2DnrWru6LLuAzLipJhovU4mucMemhkuKCrU161593FRZ6T9fx4tm2n2qCs6BFBA58ULqd9MCDYuYwqiN3GNHcQgr",
  "key37": "2XQT97kLwmcjSkW1Q1WDi7CF4gU9ZYaxS6aL7iczhoVzChfQwNynhedZgo4sLyHUqPKucnHj7QjpM2JZeJzbGcbs",
  "key38": "23rSF6N2VPjZdmtVxjavuHuVEq5VeStbE19T5Gg6i8fZu3MYFN7pPDehWhLdfpDvgNT8XNy5BUGrBeat5KezoMS3",
  "key39": "2yFEbR1XVdwdyhgoU4huYfvQuVZuhtRiCbjugu8tC2SCVKnnrabnoQPKLGEYsKTZ3w6hRzcvkZqApWJ5o4VVGZJ8",
  "key40": "3BkL1CPMko81Lqan5VuFx8whRwZ13q4i9B1Sc6yXQimSyzK7Vz1Cfr2GaRrWGjja78358DpPCLLvYaNgkcQYCg52",
  "key41": "5xw4H55KxngCZEUujC239HMeFfcbT7GBF5WK3oZR572KdGWWBjfpaCvYzQU5v8fxDLMwxnLXwGDT3S3i86WyjTjB",
  "key42": "4b4G1TQLmvBCo9oA6XBwm4NY3eRntuQ3Q1kgjBnbptUjm3XRs2GXrx8MJw6EfRRdE8ncPyJpWdg93beoUMYa3QmT",
  "key43": "59YEeZDteH9RnRBQ2vRuxvGSC2XavEtGp3RF7qurrvq2NnLSb826jKY9YkYAoknznkw7YJ1hdAJbkv9FStaH6fUT"
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
