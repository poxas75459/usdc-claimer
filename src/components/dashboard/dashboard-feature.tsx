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
    "3tHBRW25QTDk9nQFtmWMmbWdZgFBFmtyfBy5ZUcVFgkwjpCsRd1XHm22sipsopancQRWVdsKJZhfjsH1KvJr2Qrv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LjGajJzBqkfWUQeoRShj38z8TgoYrtyjE1pC7uhZHMWtgrJpw3KyfUvbfWyewMFdfMuVFEHrPof2QccondQgowb",
  "key1": "i7ZRHBtEALh5xb9zR5MYM2udJjZkiqtANMDAbpArEQ6jTq8vQAMaUuedstFceHocYqe2Sj4a3d8x8Z1dy59z5my",
  "key2": "63YvD29YsitnKXfKLvbgjbresFHcpq6FyJhqk8Y4JEQT3EBtVXS3wG66jEkoGAnveue14eqxbe7NGC8o6qEGWrGA",
  "key3": "2C1w8cdYAQcJ5HuiJ5nDbqmZgNwmwCEW6sg7fE2m1M9GZPxXePXwBixqaNAwsuZjq8vqQ8m8DF7ax6tw93Bwdszo",
  "key4": "2TQTFmMcU7NLx7ZYR4L4Wze3b5yjjhsupuRbvr6Zd4cpb8caJvjfjr6yVTVxMMfERLAGR6Y9LKEw79JMeYKk2HBP",
  "key5": "56tRGFBWToRMaXt364JxbhCWbnbGqvAQbEtCoKXjXURNsF7bQLt3zrv6YkfnQuMjW7CK5iyBQ3pAtpnY3L1CTVdd",
  "key6": "2Dnze8G5Dn42C5wMG6MvLF3q5WzUmkvLjVG4UdbqbokmRMWNXKc6Ajecsg57M9t5TfUU4yvqi5xdyan6jEKAPep3",
  "key7": "2bPttJyjW1Juxu8joe28GHymNfWwZjuQDd29JVCyVqD16WfMRZZtPwpQktULbCeDDbwkkwSr7rCpDBv2ZDByWZ3v",
  "key8": "2ch1a3CLKBUgn7sxMCmhZYWaQZQV3QGUCY6kMjV2VxKtDwfn9uxnut88h5uTHp4TBwxfWMX33yx2g18PUj5hFmuk",
  "key9": "3fvk4FokgFD13KEpt6AE9Wc8tkk5uuQUoBbWHMRy2miD8Xik2mq7Xh8FgmLmE8NDXf74zTXpmgv5AB4kD9p9f7Eq",
  "key10": "4hGEjH8AL9EWkYXDqDXYCNZEh7GuyedJvk77N7bRRNSq2qcUqoLeABfJaX2aDsBoC7CNg79UV6adhBiGW5eMBnLB",
  "key11": "4uEvhFVmfTzEJawnEqUmyzUczirZ3bj6adStN8j3MuvyWBEfF3WJ19hg53jE3Y1JCztT5TBYvRY9m4uzZoywHmrB",
  "key12": "3NFPcSPpfjx7HUYxRFyAYCpFUntrZ44RH1ohMknPFPaWg8xsfKbRbxy37RSmUApwyAyZW9BhS8zyHN91t4m1CXqn",
  "key13": "2whc2ZBsa7S22pDwDncKGAVdbHg5pyKXwn1ZgsBd3biTxrNSLRZuW7qj8RpHDnbTaubwdV3aTiwvev1VzUcbmZWE",
  "key14": "5aH6uvvrETNnaCvME7CJwgKS62fLTorudjj4EbcY983FzwPBtDFWJEVagACvQMVFhJXcLqo3Xpesh3WzM6wbRXY5",
  "key15": "5sSaFwPtXCnmrMYZbMfw2wu2s6JhkesuMb8a9i6JR9XGDo9AFuFsS32hwZUEckjsgYogTqQ2mRRqMxaaRVtrbdLF",
  "key16": "4yjYCuCCYV6hymzw3PRBY42vZaLPiDUWv7Bq23VoP5pY8gN9cXKvVgLJkgBpckqmqB2VJ5kFyrxFcVWX8y5mpcbU",
  "key17": "5hjQSinPufifMScEh4bkQ2CA1jqhyPZBpbwmMV5fmuKdajWNVRUy9xfLZ8Q3G6uDL7P97YbPYjcwPkjGNUhQd7rT",
  "key18": "v9E6gzujnRKfwAxzAgjAeoxFjBgpCcWKcuCrxq8kAgP8rMHXaYitakqzt3b8aYqNjhjyAp9TEEaG8X7ukxfuQwJ",
  "key19": "3yELK9xSuj8UXA9hEm5Sa2aSy18Ebqa8ENbNWZcqKa5xponS73mxqg9Sx9CWPGNGwtUL2BTRtoVoMFQtv7CfFZDg",
  "key20": "xESkXw4zVsYXBg4CGWtjdq9NHUxoHZ5zjskfAdcA6DEoednw6mGGHppoiEDN47DPaTPeP2z6fJ4tFy7y9XW4AiN",
  "key21": "4BdH25f9ejipjh4DgXECtRL4dRHxn5t7AUmS5ZpcKGbcVbha5iAHUZEM9nQ4U3rmjaFdZTaVJe6EhgX1UxePMTvj",
  "key22": "v3PfR95h8nfYn3LzQWVDyqYq4Nit3c3ckkPnGU4shWapd4CbpEP9Y8QRiRssn9tiHq6q1fhkq485bCmsYw4gikf",
  "key23": "5LuGeF3Ue4NyqyVDu9bGyiq1LyfwSwQnJb3ikJwWDk7TyxCUZD1iACcJnUcS1fiKNSPKcGg5sH5JSSLaAKq7x9aW",
  "key24": "uZVBqE6k3ZHj3p64c8JRHThTBT2tLijwqiKFSwHFBTrgkmNNEg957sbWR6axX2eECewM3rAju5PXmHUEKmdTpTF",
  "key25": "2WvkmB8RDV8W5xZ9RGNuqHJt29J3mGoqWehaUC791t3LGG9asN3RBUGcJytNhdqauiLKtuj6Xn2YjredJKqFDuYt",
  "key26": "2WAwmhQ6RsJjgD2v4a4xZCu8TVh6Ck8JhGs74tC9CVDwm2r2c2oFQp6QcdDznBnS4F4nDL2c1cjFYRvK9B5HawPy",
  "key27": "4w9wP2eEBFvQwab9cYB4jX3LECDUyXvUfbn6JKEFHuQLT6KCNet2nKMdR1s9kAwjW4G4cSrbHKgy2PwG1o7zYnnW",
  "key28": "3zWQYrAdb4CXUHiMYrYXAxH6JocVQF1XPiAwGPfKYibS3iaFA7G3QrNannKTQUkDs2KEQQrVGM69BinVrWbvMubS",
  "key29": "j9bBSWTRwVah5ZiV1wAzYPWybjoAJ55mgBkKS8zESkcsTDKg8jEEava34bPN4u3DuASQunVfxe3fBgZVYPAyxWB",
  "key30": "3RRoN3cyw4ivYCVT1k2motbLJWDsze2186GQbSK6NtvxrxXLWX8hEitExXV8wPgwqbe8zLpUDCrHQn2PeAZggUqB",
  "key31": "3znb2FZgCohjupgva2yJCHHnAWAk3g4LD5ftLBw4e5p9WMdVFSU3rxjq82SP2vdTZW1a8gVniKi9Z7ryqE53ptFG",
  "key32": "3MGA3KGUr2XTGAEQwVzPjdwSaxHpCjkMdS8d3hwHNJiJdewjKchXvXDbtP9QpkvMRek151XLvGbVaNhnzgaNyi1h"
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
