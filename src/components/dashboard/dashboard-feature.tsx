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
    "5F48Gyqwz1kY9cAZeppoRx45Qr7B5XwHHCs9RMoL4G4DY9yuiVozrBrkmfk6zhvkjSo4adHCf6ewjucamLWS9EJW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rkHQ3WhUaj13Gs6KGmmvBF9GTvNR4cRLkMZPcHAMcBGVnNc89qRJRfnNmMP3m3iyYwoPfF749htrbmrm765yd6H",
  "key1": "5Dxe9ariUpLQs58nQT5ZsKgoBFEmDdvaqGLD3qHxnqA57kW42pdc64Nf2errfYf9hA3UCnQo741mDmcGsW5yzYug",
  "key2": "2Nor9VrYgu1KWxthFtnV4aSr1V57G7SZux7TGwjiNxF9PbtpJ1mEvjU2i3gCfj7tSYiQvJWCLvmmbwbiD96Nu8pD",
  "key3": "3GS9fWEJyF4atw5tZcQhc2A47BNqSLvK483zRPwGo7kNQFd1DyND35z4NgBty8DHaxUD9vETpVAdtRtgubnG92cG",
  "key4": "4SQyq5opCUFgnTRgYQjJDJnPHK8QXNV9fqNKE3Lbf9fXMHX1osCRc97BQB7gDi7QjxCE1opwYLb9hVg992eHuWug",
  "key5": "4z2c8vH9t2DSEnqMYWg5uebPzxjxY3X66HFfaVqzKyH5LsJ7MNKatsFaqSfFMWZu1MpZkLzCpwnqQQUjyLf86GfQ",
  "key6": "5bvvLJN9JWbuCTQ7m77kTvqvpGvZ4p2UkxQSeLxwUwWXghu4MzLRrzyQKJzh4bnBKYPBHqaSbEMLsfZYfexoeWCE",
  "key7": "3Rs1kH8fZzT6yT26yDXTVxsuEFarq3DDLnDqzgFp7L3Kb7P4vGENc3diHofLrN8ieipf2aqw3sPrxK6mzHhvvjxH",
  "key8": "25igQvfCjfCtZp9qKGUjUtT4fh6Z9x8vF2o3c7PXZxf9pUi7ffUN6N7P8wvn3Le5vDsY8SKZwvRBmgb7gLtr9aD3",
  "key9": "i3soYXmrhSAc8hEqPuK51XzDJdbCZsLxnEUbrY93jfTRmiPZyDBHx8UMtnP6wbhgdjUCRsbKUvJZKygxMMY3qrx",
  "key10": "2XDYNNhf2NftBQBYHcqYSUJgfnAKE7fxHLnUpxsQmRZpRgtSDo8kC69c2BUYKYUTwi7aKbDWsxe9eT9qBDx1GmH8",
  "key11": "2g4FB9uz1FhEGAhAdW4ZZ6rB8Kk5JfkcS2CpLvBJXviFZUUXFzvJaXUMmMgT5sPdLdcFAmTsyEvnHt4Qof9KswJi",
  "key12": "51XaMMNVP5zWK3mhyAvmmp5V7WRmgGffRAqffGuovUT6e7uiGUFjYW8rBbhDsAugpCbfmZu2VRWPJPreCPw5KqAA",
  "key13": "4ANK7zRQuzRrw5kEroSGFnG6FC352kZuK5eoY42vrbDs5rRDDZFNuZ4FuLU4J7ChwAujCvvdWdfZoxpfyyaw4J42",
  "key14": "2ouj3xDZwhGVjtGMKjazSaf13hRno3KfteoqrmvCKkdSArrPR6PJmaoogGxhQvYveUMe2oBVxSg2Zr6xyCAXq464",
  "key15": "2KbyEdRu9FfMmUAWVnoac8C5JPST5RPH7U8fetBHSo57kvnBrqHhMpxUxPovLDRfPG7RuxdMvvnS5HLx6bobQhDC",
  "key16": "63V9ZinphKq4NVnrHg2yMfcAUECtM23gYYm5W4FotvkG2KtGyhF97CsksGQKVjRZuojg8ZPWLycP8M5K3iAyQV7G",
  "key17": "229D9qgEaD6EoPRbKC9aJeZvbbFQacZDKzRJMxHD7z49eZQPmhFSoFt4pixSNJjtCZbtd2fvTmenXjs7QXMVdz86",
  "key18": "WeEz6t9yfofA2wHsrYk44fem2qcWVcjpxB23oPPAyE651fQrN7VPtHbE8woJ2tJLhx84DPgvAv16Gu8j6CA2k7o",
  "key19": "3ehA8xK9h4u748u1HEwgxyx5thoQ5xKjaKZx2ShwmbvjA6yYSW239uEXagKQL7sQ2DN3ifZPK1KWMmW79tDKed92",
  "key20": "2EYHTxtrWPTNamumZGj4L5zrgtNBEQJpyFcqyA1U7r45hSye7yZYLxF4dbiMTVmVdyySVfZMuxh1mqWYEZqjQrFb",
  "key21": "2Fgppdb8BxV1u31YcsWJLCBFSui5gxjkiwaaX5V3B5BBNVL4HnviJQD3EvPmbhojQUkZZedakEYpr8ewfvqFFssZ",
  "key22": "4EYeXFzS9Wm8CpRXTDCT45B8GrioZCKbPqhzybJHaxyzBaNu9RW31t9R8ctcmn5pwYv3wWbSAXnjb6kG7EVSHNPb",
  "key23": "5gVWBRLW3thigE5h5HhjqLSEHD629xWorsisrT1TgAkkaTwdp8tzYQ3sY8f3zGnSkSJFct1SWMgAYPZbRgqCcSt",
  "key24": "3HPZetQLJ3aaHaE2wWGx2vzX7wE2C5vwaaVDTHjcdp6wGngjH1PmAuX8jzoX41m4bP2EsjzeC5jCe6x1nv9hLgBx",
  "key25": "5uemQmpvhejQMETeus46Z5NBpkjf5CkQfHfxNtHzq9W9NhvREuTKBZwFmJae5jeKS9XLQMK65iRX8n2BfHpcCWpG",
  "key26": "5Prasi2Fxp6DsdeBr5wU8Xa4zPZptK8rckgziNbFU7CuSrpPBictdfrwyTEvL86Q7QHFS1N17FqVZAnFmDJ9C8BX",
  "key27": "7tYvz6ZHzKgsHwuPeqK5RaL7eqv25wjSr4wFDjkLvMpDhHBTHwDTJQZ7QrxSP7qSUQFRBUxLyd8eeLmEr36Fr8X",
  "key28": "4zmuHS9rPwxsasERAvksqBaB6oXmLWPhSQpySEahDKFXkTk3B6wcWTmBTC3H5nbdTJnnYrpXdC3o5qx9i6gUZEpA",
  "key29": "4dSVLF6ezzABw7oLANooDdnKtkHYwW7bq6bqQfConPUEAowtnMMsyGyLg4pLwRWjagCf3ApifxXfi3aFzCXWsEfn",
  "key30": "4upvkgbMApDR8wuccgnPBG3vgX8Pu32Vn7Fy6M4NcD1qzeaHuaWKbw7WiQKFv7dkC5rPwDo2YtN4xA3W3fqt1gNX",
  "key31": "2irzZMSnuqVWdZnPD6TL68TeSPWzggF4i3KDeWEkT71CRQpdUFxfs6ibZAk1XEY46YsChXvtEsXUpGUEaiPSsDjN",
  "key32": "3ceen9oTyPmxKct23YsvRZ7xAFXFW628K1Xh4SedUZfBn5vsbPWb1m6xGd9msm3phthv9vj9NSk1ypf7iCx55hGc",
  "key33": "3XFzx2FwyeqEUyD1ZjA9yaLaE8PncaHAZn1imnLB3F9BHVKhEGg5ypkrJjSy8mHjvBvKAXCAbcy8jKYaRkVHPqpM",
  "key34": "46egvcFaVtJVNaFzCbjLDBcBC4uSeVhgSoMahQJqJMDWZaYVRZef9FrFi6UFtFMDs8n6TYFoEB6o9tvsg3EB5tyq",
  "key35": "2RrVD89d4ztz9BXv6G5nyzh4RTpd9fc1JoHowdvAroEmqH7vE3E9DvQabstELDHsH83CVfDhVSCuxUEc8UAtp7ax",
  "key36": "TZXbAJQG7nzKCv3EzY9py3CN2QtFGs25Luqpbneo4SegNNQ72hq49UaZYuN6kDa12DR3yDcNYevBwRsKNBdmgJf",
  "key37": "45kHYNEvyzp8xKYFyGmhqMjXu57onyehZwsAyfE5cZhsvMzEJqjgE68Fc5QihxbJpinF2t11ioYvd7XCiVUsN28P",
  "key38": "2DyZoVpaE4mzAxWJhg5no2onutinnn4C7yWvPThLi1SFe65D3upJxe3uQmj9qsJBWgUmkvESUNbEApMfZyfksmU7",
  "key39": "TZLkN6wsRfTenSGbA518DNb1JLRUX63qJUGEhad4wK8EgWjsegKYMydeYdziFbSqLkvtQDiYnFsUcCv7HqLwBaB",
  "key40": "4ZK28AaVURswzkaj1DReL5C27331983DZcx3S7G24tMtY3S39y4c3o9TeYA6ZBJ4sGRiCu3xdicJp1YJKD68d4kg",
  "key41": "5eTnnnZKc3h4qYukWScjCdxijAGvZpCLmLDhEarKRFjYAARBK1Fy6DSVG8mPJ3MQtSkoaRtnfeghpiRAvob73uiu",
  "key42": "4nUzfvPHfhHRsNft8goLcJqZsoToxqiwoT3gWPL3UjfhVJhDyqVWUZSLehtLdN41hs9edyBczJWti9gcfZrtrcRj"
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
