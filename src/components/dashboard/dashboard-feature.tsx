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
    "3AECysQQh8mhJFFEyVfXctQhkSjfFRazeKSdffvJ1VChgSaWJSwCeG6dKu4aBdiaQYxtHbvgDfgXR2he4o815P1s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4usCnPo7At8REQUBvKkkzqvZcq5GC9nCvVKAfSFr3USqy7AHhWGMdGXuSMjCe2X74bpjudLLNZjtsurz2yBN7TRB",
  "key1": "34ZAvMC6ABNJr5qBYxUuRdwLFW24ACLycphv8HrqMHVhvHXx2WMG7ZgqkVodWzkbntYAG9LTqGysHjtQ481ufGbX",
  "key2": "2tNM3BHYo2LfhraL3Fvojk5rJvGgKYVKFY8WkWMtUMRuga8s9M7UqqMhaK36ae3VggcwDbTnuDFwkR6SUR6VdPA4",
  "key3": "4LVYVT8TPxBo1eLoMbgPjJyfSj57735itKh37ZPtgoEdX1uP6bkizxef4zNVyJg6d1Rwu2WeKzVJteje6z6xYtPm",
  "key4": "JChbshnhtgruu8zmPZpun3AsFRu5ss6QhDpno43VQeQsxKNFrJ1RDiBTd1BbiZ2nzLhE1shzaJ5ACLrrXkZTo1C",
  "key5": "5JThiH1aUCWXDyubkoft8iAj6ELXwHBY2H4sEQnsM82gDMnt2XrGJu5UfBDQRX7mafJda5pzExx7JurafBJPbdVW",
  "key6": "4HuJhhYamBh1QPwgdsYXuQXGmC3aRPFwC83Bcq9iNUeCBQy1TQgpAC8smdH4ai4FG7vvV9zUi77d47PkDu6hnYk7",
  "key7": "4YYr5LmbLZxXATRzrRAtwpANcs9WXwt8aY4ykU3Mpxm59B7JrPygY6xGvj2zWpvz5Nurm4yHxdVZdT6nEKoRCg3Z",
  "key8": "59qU2CW7xM9SNtf3fSc8ou4Mppvz5Ybsq9umtjbM3yivBiSSTpTaXHcNYeQyNvpiA2z5XLkVEkxNWx6iPZJtuJgw",
  "key9": "5jqeaPPc13jyokfswiXQMwnpQi2Re5V4kS7e9oFoJk67HM9u7ioKdfeiecuDUffztEhj1i88tJFfK7ssnTrszYzb",
  "key10": "4ifZw3zER3i9KTM6iqgfYzgN25LwU8dgeeUXZ17CF3wbchTt24QgnnAzwpGo3Uvy8mW2LietrJiAZtRK4nE4R728",
  "key11": "3JxGRx74TN6Xun9A3Q6a8KsBBpequXqsbFzm4HnQX99QyFkWKRG7j9eHGCVKETTEK1W1a6FWHrjtY442PVvTLCzM",
  "key12": "UGjBXPQE8hHPRPKQsGjNxas9wUkGHkSvptrPK4KLV66HCnPibAAeAcdmr2wANJwQeRuPAn9JSKGHFBvfJxkPjKQ",
  "key13": "3pPqZ1jwmUDUCahdK5XaCLHTW4xsq1VorLe5prgu9GthquZELJ1Uych8jbMATweym34rAuwu2MEWc7b8567WBPxe",
  "key14": "3xDYw5ogMj1krozB8HtRqs4ugoyyH9G64gc3sHJqJ4MWBU82VsT57WbEhYyuLxXGVFBSFw6VMnxEQ6DKWtLyZNCb",
  "key15": "2rGYxgH3TiKiwPa52ajfoAm1KA9PWUbZ4fjt5td3TNcM4SbL9ttm4CPSZJNAgccZJSGUCDRSAQyevk381VcoUe6H",
  "key16": "61YdBQ4qa7pFydpBawM5zEVM8zVEb7sgqes9yDnWwoznn24W4BBk1EYNm1fWXubkWrWBkhktKBxSFZkPCT2bMLjq",
  "key17": "3XiynuNZpChUNjVBryU6SovtmmAhs7p786soc94ChFbt7axCrzHowtBjHHDYHYfwwac2DULgwN26TnzbHATnK8hs",
  "key18": "Mi6tDVwrxsn3tLdGFtpWLN7V4eiQSzZQziZC45rBy8j9A6dr4AkrTLZrJ28zhTvF4hMUvCmf7ufr4coxNALQS1k",
  "key19": "48f9udaKekhphfD1nEGZ7qowHqNsUn91rfLaaC6cvvGjruiXedPWXHKxTbtwFTB5zQobQ5SvUsb2iMEej6aAHV35",
  "key20": "3GoFByPGzrF6N7gZ8fugiTm7QBU5nbfv1ahxtQAHmyfngHjdRM6mRnhmHiQ5ZjwPpU5oGHD79KwS8pezFsYZeSaa",
  "key21": "4jaHXeWCzGE1PmJ7tmbwzUGVgtJnELjdGfdYgyZoQZeVBwwNE1r8yMKSmYa9kKbMnqu9yGzvBwGVQ5ZSLsdgWvnr",
  "key22": "53xWXSYpGichbHW1cYCRXU7NTpxkYMtmUHCST476NHJxJgfyZhs7ksCij7QXYZgbdUyyWPsARSB8grkx4hSV6gnJ",
  "key23": "4CC9PZr6cJ9CiKz5Es2Vh1rv2tT1S8XrkH7KDKjWkVSUaPxYs4ntyBZLiop8otqDKDEt1tjy774YR14aPnQYaUPA",
  "key24": "388pYUJeDGk96csZoZJviSH17k95oSKPTqBhj3MWtZTaeJaoT8HbAL2bUcfJVm5nZVxV9vJdyNFmtFJ4FqaxcEnd",
  "key25": "3rAvyxPfQ3oUe2TAQKSbhKQNTLJbSfHZYcuNPypt2C5tFzLp8wyYsPhaFpugPtEEaQejse3eLD9D4U1YvH6TWCnb",
  "key26": "JkBdpWGLXwG65QJZ8otWVaW7CY2xYcS9ijsT8xZa73gQ93HxAtAUuotg3VgpujSeHwNCv1kiRzMfhV7axCCUj5u",
  "key27": "2AFrc6BWD3HeTPFaVN3KiLs4aKubUzC4zwvcnGpQFvJgdLuBVTVqUKdqANsuMhaKX5WFefvhQ8Bi2Y5iFkoWkbR2",
  "key28": "3C4kShLEtcdY1ymiKUMAR5GpT3Ro4mmTbGjWw37F2nCsUoTUak8oZeC3MyYW8gtMTUgKw4V58esusrTAZtZFG4My",
  "key29": "3pt9gsbREFtq9NRdYtgMpjd6Hwknen8TPbWUPGJHK2PZ3Q16QGcM3HAtypRUXxDmw6Fo76V4qfSSfCgGYgNv2CT7",
  "key30": "3v4VPiUwiwnZKCMeZaatWjCRcqtj48nHUtU5o6NkTzQnTMrbadZYZcaLnLF3i9GQacfTATDZKUe67YT92Et6573Q",
  "key31": "5u5zKMk9gHHJGxBJAHn8bT3deh3AQG596Ub4RY5CioL1Yhz6rxQZ6fJcrV2hdh6eyaj81tUpA9uwnYUAQnXuisVB",
  "key32": "32cu317She7Ryk2vN7hrtEcq4Ah1DDf3CUjFBaKCxjmEpeXTAGm6mHy3zfHQysgkfwd3A5AAocuzFfytjnz61yXM",
  "key33": "5aCN5kCDNmXYkGgkNxTenajTwFtN3aMfp8f2iRH3FYY8RWd4XGNWe7xDKhMHsX6ZGaXJ6dyjfyDSLWtCmMa2FXmS",
  "key34": "3dApgjgdXVV2siZfcPLzeLfsFFLYtcceE5rfADMJq9Fc9reNzQo3a1n8r3LtWQ3Wz2isXHxZbeSau2tWfujDmipR",
  "key35": "26BiS1pgUYCALBgmjok6PNFa1zxRb4oCueMhcFrJcm1eH9Ro8SeMwzEhvypKB2eVSZKPsF737B57BKk7728nW732",
  "key36": "3VjcrgtF5p4p9HKAwXXtKQQqsq5UZ1SxZh5ygpvr5ETxGYFxq73moXkyvq1oEAEhNFJhAMhJLZ6zsuGB3gC6FsrV",
  "key37": "2L1DgQatisjbg9j4WGSjwKh44UF9y5g8kWr6pQDCxoE9W6iiu3U8YryLWEZvqDb1da2ZzLCr7neCXdUUbtk8Rnhg",
  "key38": "43R2TJ4iDYkYBXXV3RRiqzxugnNDkjuiLYgfE6L8HEYcLPSZbyE1ysVNfq9ftVtNyAZyq2RYWTeEcVr4dpswDJSM",
  "key39": "2JSGFbs2cWS6SiTN8g8BeFeNvXufnUdLTzJM7MvXeFhHadDBnLPgvCnZq2cs8ypzaLL6ocwfuT5SiBnZ28XVfmNf",
  "key40": "mEWrPCJGWuQPLcs8HC9pWbSdVsF2RXKfwWVuQmGMLgoYu9SwWWmZmMZQ86CHb93ptpL4F6RPHu4VgPYivKa4zDd",
  "key41": "4UVbUS8qskSoJXDb6KdRW9KL85ZTFiE15985kHzRf35aHqoqwV6XhuMxXKeWB6zrd3pTmbzdrYACNSnujYgBn1vE",
  "key42": "35PcpD24YaFhmdFTiXgi8Fc5G5Vydqd9bMmsM9YACkCcfU9Cfm1xz4BDfpeWokaWBQbZ7Wc3h6PWEfeEtQKjxb9F",
  "key43": "uWxakX9TC4iUP87K6TsbnXk27zhb7wELpsUoD4PULzGPhN332Kpf6LZA5ypWL4y3qHU9fujqEL7Kk8cdPL4yJES"
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
