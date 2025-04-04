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
    "9VDymXVVtHSPWcaZpLgBytBAwEYrjWjm696GEWNAr1E9Vv2ioWAD41tG1TQoasyG2WFZvdkNFn3e4c6rFZy3tuG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QEwy8XVVWq695Ye52Ck5TK8usru2A1nzNsTc66gkL9nby1HmbpE5hUXgdCtMxBhqvCe8P6VAbioMUNhw6H3M17Q",
  "key1": "4yvR7hJsFLMviZM3ZrdscsS1MNUZT2asjLACWXCfzdFqkM32pp5LgxXt1YysgSkdinaNmYs5dkXxgyrcmRWkYumr",
  "key2": "4tigWvS1Nea8mjpM32Fa1byPypnhydZWq4Q39zfiiSPjWXwG8Zd9Jznup7Q2e167H997M43WSr2ZC2MBbhBGEjcK",
  "key3": "4HHxe9nmcoEdwnLGxcM5zQpsKtf1qxr5TtxLaXseb6xeH5cMGMbrMELtk9ttwmdafw4sJ9sSkeaMeSZr6Aq6wD9e",
  "key4": "2fuCsM4C2Vf4f2JWYroerVrfJxJajtJkXfgNx3QZo6Me4USvnYBgZcmYcALbkxnU1eaw5g1mFtoKhh4hvVc4QeXv",
  "key5": "XQfdwcvzedQk2HyxQPEXNp5BjLd3cJSkfaFN4k9doHrF6k7CeyMQdRCimuFwuT4TYUzqeXRZWrJpLZE8YjYMuv6",
  "key6": "615fD6uDcmMkWNhV8QyibqPD444eZ7u3RwGCkmU1xtLJv1CpZmSg8ksfSvDwqjTkMCBRH73YtAEedLqjA4rdpytr",
  "key7": "3xt8Qu9LJooZ5VsBgbg5efH69EurTAhTEksxW9AghCqDESHigcdRknwEmMy957KCxoTpnczsdsVnDNC5F3YDwyDL",
  "key8": "2HCRx5aQMXTD8FnU25rFcWVdRmKeC95mCoNqrVXLBPqsQinksePPTYDqYViQKSdLh4HaNewMQzfZjQt4wsruPihg",
  "key9": "4Jsvqhcudia94tYremQAAUbMMS8QP1kFJZUPrCYTmwa1uKiQrqaVaP3JCT4LjDGMEhJ9h1vfjo6VNW5E2AwxZVVv",
  "key10": "3GUVBuMxMT9myNFz52PDouGwQHtQNfgr2ndreE3oWwF5hiUVrgYehLNDQS6D82NxJedGdft5rsohGP93AjxijDTP",
  "key11": "4dCE7DvJA6Wnvxe3Po5uHjXEbe16e5LPtNk8nCQJB5uSu8zXUKRAcvh7cYXJwiYCNgonQ2VQJ7oa8YMCqch286Yo",
  "key12": "293hedP9Gc1fwfehxK9WUJMACqC5dFRSSq8PDVXYoSG2W1p2TtsgpmrVQANsYTUNL8JcPFr3jW5NYbbxS6bM9DwG",
  "key13": "3R5eAekZmLqGd4ZqhrFJQGxpCprtsjWfUETyg8S6d8GxyGCrEnDAERH8mmFAXmQgoYjjNoGGwJLNg2j8PC7hYxGq",
  "key14": "48k64rDV1RftWep4g6rmAPrHwhQTheoUWknhBdZog2tdPr2TKs21c3uasxatAaY834iEEzRHqkk28oyxHf7VNg5t",
  "key15": "31aUX1gbEHuNURmVkjKaswYqH3jEuv5gKoJQzAqrvHPy9AhAVanc3eZ63q5KDUqeki1kzusHb5LBpmCtwMYQiBYs",
  "key16": "4sYf2hYMdo5wcqCiXU9oBREsf3zw5jCKCseNAFYsNaN2jQuwAGU5wWdYYnxCL6CH3RQ9NjSmtYuT3Wjh47qFMneR",
  "key17": "2igxiAAgqdyxs3UaoNywmxvkPhcuUZLXasyKmAyTnwHkfNwVLY4bapADaEH8tNdYCm9FedBsdGb8YM5mDNWZoXfr",
  "key18": "32ih9vkEZ4tkXVZVuhDKo75iZH1YLVzZ74XVVV2qizgDeEkWJXDApTuVE9kvU9WmZW5ozwtMoxu2W4UP6g65XFUS",
  "key19": "57jbyTwMkAr9NKGoXwBjN6FSEn4ZdmCdqovwyrauShqKa1MMzbnBZa4xaszgck1ZJDUJwTN7sKVLCaPG6jt2javQ",
  "key20": "kdo1vsFXSqTkjoVvvu7YXnoNu1MBCCfHHJar3ZvrBSwnmacdAXqLsWka3bcuEywydXz9SPM65eQYoeBR38xs2p5",
  "key21": "95JccpXxbYWJ5YqBG1D1RsLBVzVQEYrAqBCJK6itLqQLKVyUr7XnK91CiBvRtPT1p5AxzabFfPL6cyEuHUMKE7J",
  "key22": "5LJUXQwnMmo3HAz18ABKznZ4EnKzNWrXXbVkqiUpTv2cvhT68ZBdHU85TSKFHGnfL9wfXsiftsTvMnjwTq7oeyVD",
  "key23": "krCsr5XX3uDqBGitpaKFV3htoS1p3MQoVy4NGojFYbmdFfXEixihHn7dqAgQedrwgEdosRHmBEekF8AuDVADLYH",
  "key24": "jixhGn8ddDdNBSEjxxBupmhL8UYZdtKoGFN9kQKUBctbbxrb2szejSJXHVPMesieiu4doFHgVsBdu4atC2n77Yo",
  "key25": "XrtWzA7vcWkXvrjRajLiA9qXorjz3csQP4G1VS9AEad8hCWLZUWiFDxrRGxEcSkwnxKVije4nu6x13MQ71x9qwv",
  "key26": "5668eW9cNwG7R3cPNu45DewLxUm7PuY3MQ6pDjHotxaBYid4BvqunkAArXdTVuGdNiJzMTDQ1EfSawMHoAThGgnw",
  "key27": "5xDZtgkjrud7TwxPkcX31B3DGQ12tLwfiL8T5WzzWcpFcsQn23o6HEGt2dWxssbj5nhkGfCbJN4TyT3i1VR4QnVj",
  "key28": "2KbsbZqc6anoLHCEF3SmnCejGAFqVfgZr8fgfEVN5AfM1kppPGRQZHhp7qYiJPd5vhzxyAxMLXFoUmVXc3Zq6PmK",
  "key29": "51GAorQvrg2Bv8FG15bVTTCPL1AL2WASaKWKYAZLxMyM4MMJTCxXnx94L9Wk1jXFM8NJKY9oNJ5b1gfNWixyG73P",
  "key30": "5VkkNCyiKbpYYP9SLzkfE6zWWDcigiy3KQqJYCTNHFs31Dt1gZHbstWcjAoQdnxSwBadxNW3pMW7zm3wz9hEjA9s",
  "key31": "5GMY9F4xNQY3FK5M3CuRY8kK1mr3u7KtNEvmR7uo5UsWwXhhBZn3HudLbXnmCDSwcbgtzuvVVkdSBKCR8VBFEs5d",
  "key32": "d6T6JKA8n9SxNmDBwwyzCvKqMRfX265JmKy4dUn6994MfD9c8APsXkvA1ZGJFrPnjasPc7ZyXh1UxNaktZ1Yegf",
  "key33": "pTQnNRWEKuCpiXgqAjvCsookHq1gM4A9a4oCgWX2Gzp6RcsTGQmqunH1evwAvix7RKb8Pz9EQtH3Y5aNQf2xsGw",
  "key34": "5Aw1ExVrMyKGJAusqtLKtonFhoMEe7yuwQdwC2aG9iEpLVWGQMJDwZFdbRAYLEcGKyBTXoW9K4PH9cHUVmeFK6FC",
  "key35": "2spNge27MDciGXJvCQbAuz1DqZevaoo1dUSJcnAmDEnLqtai3aZMjoe982qJaTfkLYqkN3rY5AAhN5h5LubXDHPq",
  "key36": "rLPjYhwaJSNRJ8JCRvzGUdetQiLKoxCcyu1sYY1yxuJrkvwER8HCorJBsSHWmDoRvNDLoNZ3gmkNo3aDscmqUyK",
  "key37": "pjkzDJvP3RgTKd83Coqw9FUj1nV7bPuvV6Bn8FneBnQYNfe817qXC5BELcA9P3KJw2GgTFWL9bKdx8CZLDRYF69",
  "key38": "8YsAVUx6JA17fxCxuBmyf4fzVNb1mtAMHkjckFnTWgpwBpQJ7kvUPYdNcUEFCHKbNtsiNqG6RUopUmtKtAeGeyk",
  "key39": "5fnEZ2cCJ1RSUDWoYVYxsNdbi7U4dnP81sErJx5SNxUwkCF6iH1kiq9QZ5pYoAHgEBqVSXezfvmQ83HkUAyuxLrD",
  "key40": "4zNp99RFUhWkNWyFDa9MCwhaxBoz5LhXYcAZ6Xob7NZohwyPdysAa8kr52VVrhrrV8JmXv2eK1fiid4p7WVSjKDC",
  "key41": "524xCpc2uN6sks6Pv4amHBosPqH6PiXucLc5JPMtun2QKmTBjmPR7ECq3AqoHU9rrf1L6WCk7ZGwYM6MDG9QQhGp"
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
