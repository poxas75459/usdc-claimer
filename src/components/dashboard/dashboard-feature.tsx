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
    "s2xpYL7jGAu7PXA6eri8QahBnK3X3AMyPsS8224Nw4SRGLkdNGUCXSyDkn12zhv5VvC53CbCkHvLBfHnfBggKNd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BabwD2ZQ9gEj6MHsg7AgBGEZZYMacbS7Uv3CnDw1N6DnTihgdcXVHCJiQaRonSYqsuX3tYZydbcm98buzqDoNNX",
  "key1": "56DiLf8WcHpNS7mhK7FsCYU8GaxWXwf5yJbkQA4gTeDGQGeshaW2N75z287jDZs14cwXNehqUUB6jadYNBiJBW8B",
  "key2": "cMwnRbn7jHCBGF7gFcaRUY5JP4BpkzBE6ejHVC6hiWCeZTr6nrwTS7kKB3rEh9Ji9Gj9jhRvxsBzq5MRRTHwiw8",
  "key3": "66sCuEW8CsqXzdZr34gEwji1RgY55356rdV3PSGcF24ENoiSeCx2nAPwHbfzzCWyQFRmnqUHTXLcCvzF9wSxs7Wc",
  "key4": "4A3N867xmSpk9yCxbnR8VXwcRYXUtTCpF9pi66JxFQqMy26zLYAAofBg7nAmTt6v48gKGY5zRqMP9yBVJSDZyUpc",
  "key5": "5cHLWdYTApdpT81RQSHnMp9hfpMBjBxoG6qSzhWUMU36z9AvkLTBY3gah9xdi2TGDpNM7Wgc1c3FV9j4f4jKTCsr",
  "key6": "5KFPQr3PVefSZeTpjwXQfpqrNQ13Nqq71YpBqXfDd6ToZkM82o1ERHtXo6BmrzKnGBEBT1v7D2F8HMSXMEfogNvg",
  "key7": "2QBaq9Gg2b6aejxH4ikopZLBnHJ5KQnMF8exypQMbgJWdDarYzYrFDBNksxQBcjByTG8JzxgEGm3aKZBLKFFNmn7",
  "key8": "n6WzHWYJDdgYAijLaZdh2cksT6Kto8QiM38tacnPj7xQkxmSgWVbYJs7C2Xfvx9G4NuabgoHPLMhGqgNvWF2qFw",
  "key9": "yESdRaWETShUgRQcihUkXxaNseooz7EmpD1hCGaxhwLCrC4myXsKjULTgei1Es68SKUwqfKfabP33TKWDYhS2jL",
  "key10": "3zDRdgUis6zKuDs9B9ch7x2gSBoshDPS2Ybkqa3N1cNENRwhcPc9cUkWNdrNhLWSbVDgmxraHBYYEVEMyvGdm6C2",
  "key11": "59Dvp37Y5Wi5qTp1t8GqxDqhgwZ1aFzcbnANejiiK7Zn4BBFcdsBfQGFjBtA3wGq7R7rXF7Qt5iXaUGyCmBxkyMA",
  "key12": "5fj1yumUFixyfr8jxsQViuJmxKdoCnpLXHVQsgWZQDtB4gWhZ8HwrYMXwnj1ntHcpcvSLccThnBeUh7BFvFqmVkY",
  "key13": "4L7ERYG6aNhQNnj9WiJTG6d5zgmapL3PjYEhfDUKWnLaw9DWnxY7ektkdJ1rXXhKHfvF3bWdvpABLN94tDVHiiHn",
  "key14": "5Bjq1JUVc9aYP7j1K6atBLeQxBdW77H7cfVi6ZSqHAuekdakK8iVpbJdnBpHCGU4TT2rLv54JCHwLTaiDrx2yUah",
  "key15": "2F5UeBySxRNCk9VYucV7eQo4hUZ3NRqUo68PFQydqSQQxgxRJxq2oVRj58WdBGCEN1AEFpQ7n6WqdSpzLyCcuQPS",
  "key16": "4b8CpnLkNkf5r3wo2VzCQN3EiGHhfemVjtA1wjJ815N1vLLaWb9Ph97oesNwTppJcXvvTN7Nkv9kYGFP8NZpvNjd",
  "key17": "66e1EstUJjeDDZgSRT4qQJrh4FgqCc5KhokDNzR6MPMU4Sib5g7uM431ZN9zExTiZTR264SVuQqubGLkni5qnMCb",
  "key18": "55H5bH3sXDERFPw5ruXZ1HJzYyi29v6ma6Nktp11C3koKj33TUx9tgjkAV27eyAho6JMR7pJeXQDaziufTUD2V35",
  "key19": "4w5MB5XEMEM1ygzoXSUPy7pqA7zf6angagDraabxHpEVdVD7ncCq13XrHFMrCFUEtL7LUxZW3zFtyAGGXoKa4iCR",
  "key20": "56VcADktFLAwSJtv8yZmJmsL3DZypR1a9BB5h5BPAMF84BUPK6MzDvYyFj1VhqmA9LivGxFAJZMuRdY5MNBdhyeQ",
  "key21": "2aN1qduXZFn1ytjRUkijh37hXp74wrKspauHrSPSxcvHfDtpF91MsWNpxeyoSbfTCgzJ8fVxRJj2AXGYpFV4mDuM",
  "key22": "3D3Nt5tBAqH8WFa8L7E2SMgmQp9xFCR1SFKRnvDWqhxjSTuwGfPE8mTCRtnG928MVHev8inXhRNgX9WdURYRv1wZ",
  "key23": "3nS6cthbJFTwiofaV2cdAs41QN8imnfjUBpSDxdHmVSytT1r6Zxhtxdi2YUCBag8PtziA7GWvAyjXznqMtA53PqM",
  "key24": "2Siw5uEsGdTw9wvHbTxQyedtnS9p71DkRs8nCbxUAoRcuScNiXDgrop9FcHFC6CvFhGPH9Re1WnsyppVnYCbhqrD",
  "key25": "4Y7thGDtvUgmBfAvR75jWrEkTf6Q9YbRG86HfU43TSGtogifQw69zbL9CCRa7uCWDXUhiMSszmhJvvnJEUrHeiCJ",
  "key26": "5Rkfe7eoxeWokbNsHtxGCsMXbcwpe7ViKsttFNC6ow1fGAQUTD9UprhG88GguQ2k9YhXqz5Sjay3Qqxx8P7nvxR5",
  "key27": "5D9iZ2sJdyEXTbvgev6ZwRULc29psSdFKF65dnCpktSRyGbv6hYTefTB8Dpu21trUpnp3Afam7KAtANk8FnMz4CG",
  "key28": "4Sn4XEwpJBs8JiXFxnnGdTxpDBRVDnh29uGhz6Ap8MjSK5R4JC2AEuxGWwScAF1Z1dvLZUqzdCNYvbTibr2Q2WGD",
  "key29": "23SnkMeAxcw6vjBdiwWLVY7zFBU1yQzDENrdSLXdgEpyZtvx44tW2u3zDyieuy8M1BAiwwvr5ZG75euWF7ykJhkd",
  "key30": "2EcKBM6dTDcbAZ9fh8ddfXWbtQYNF81msixq7vqd459ZRnSVpcQEwVWHy6Zhrok433Yup9oNWEimuez928ATFV2Z",
  "key31": "2TpgU46hyCEuTKJAWYgQ3sHDTMAqNeLC7ZD5Z6DqpdWoso2iSP91AZ3VaNNVVmJQQcnfwgc9SrVo6d6oVBbex7e6",
  "key32": "P1HQYy8RBG5UFqWN6ZMUh8Qtpo9wSdQygkRbLXxXhfWaxDkRUhN8GgtnLthQD64eH1d6zkicf791jwzD9MTSXdR",
  "key33": "5M2aoWGE6g2yVWKaCY3QX9coJpPsgfzMpXcbAsqQ3iqKJmiJ9S6Yfk5PdGPzcMeoUGKBQKjh61bCiZvmFhsyk3Rx",
  "key34": "21wimdHXFjMsRfa6P68Ags2FkYTWvmcMhTPzWiQRgDCHe9mZiY29SWJDgGM5yXxXAnjkwg7HUpuKiFzgJSriHsQS",
  "key35": "2V8wS39BRVZyZmp8L6FgcRkWsX4qevHzCPSRjq5xMUCy2r3TKn1G3pDGjYJqeopVyAh5uc8AFS7wgKoSddfKe59J",
  "key36": "4QAVQbXaZzpH1hT4ViAD6cvFLKQyvrrqbhRpaGwn13uA87BbUKeKWeMZEaC2hx5evDU8qviZHoJ7MGxFwQLfZYXN",
  "key37": "2L9sNMdVDqtC7yo25wDdFXNqvwEaig9AFM61UbtH2mkLb932vZu8cZVpT26kNkgApKs5cfw45mXr6KUPGUnHDU3G",
  "key38": "4ipGLBxg8LXDVjXJYZjq7ckhAe3SHV74DJTBxRp5cnexU5jYPoAcvRjUfyRSAvvVjLA6JawNjbPJwXdDaHUsJoqQ",
  "key39": "4geNB2TdF4nfQa513wmh7j1u67U585e3BgGAEJkta9Ubs3Udqp5GuZzNxGVTviGaVRcNDfK2tmMZ2gn4diYeYDSA"
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
