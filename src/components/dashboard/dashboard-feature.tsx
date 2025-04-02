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
    "4mV1LPcD38VeJzuLGwUgYdCjk5SLEtLSzBKwp59gFpK4EEhhL1f6ph3YgqGFoEMQVDFq498ZricizdsdBTgupkHv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rxoKeLAZQkdWdaegPRRiiq5wBSKCWz7iowHgmuMg2m9rJMoFYyJcpo1uxZmXXXFrh9iRkRCia5zxZg6kzWdCqPi",
  "key1": "5zCh3VEvDz864zQQfGuaNQhUaJX6KgRLHcUTxr7yjiLAnpgUKXiaojfrDodJrNJ33HhhnmNJcFvFEDPKjaNwFkcg",
  "key2": "2vKK3B5GNhmZaULMGKeNY3opqTYgynnpvMTuCKJt9VYCZWmw4ppXek64bvTruyU2Xu5Xg75ducjshFRxmaPRD5ZV",
  "key3": "31xk4qZ8nuLge93AT2VGUURonbwmnsjaPdbuMTtmkbThQuxGuziiBetFD1xBgiwgcPxAzk4QWM5ieYS4wPUjW28i",
  "key4": "5x85catKL2H4XLkJ6PFHUcJ47em6dd8msNP8vhksLy8pzmMN94XpFKQ63xJ1BVpnxMJX8zb1YuBm5kgzvLQ3TBYk",
  "key5": "3i7rvm3Mw9MdHxPxre4AMW9NsuVd7AsQihDRH22sWrym2jXTw3XmToqvYkcJrwmZMAEEyho9jUqd4QczPDd4A2zn",
  "key6": "csJpbvw8dXCyzCd5Qhu13Ln8FBSPGHKUVNhEaLnUKbL7BdqkE4yU1wa1UaYP1SAQ4tRugDK7iT9NvGbmGowJQhp",
  "key7": "5SDnnbjA11DjLuf56GBWrk7WkZF8CvQZAnwdbC7fe6hQ7DnHLZW7J1zvEp8fBFMcn9WXWYhp2VS44JSLXZPdADRy",
  "key8": "3wtQBBt9snBeZQBsQe5SqV5mD2WDSCqHygwfodfnfWbHNixNEiwXXoH4K5YrzUXVCbpyGxjDkM7fqBAA7LXArUTw",
  "key9": "2sP6yknNBzRo1JgBbKMCGAmcHHSMczZgXcGwjJJKzVUi71nguA5X5Ce2UGY6hRYNtwxDVKHzXes63fvhiebkfD3L",
  "key10": "2ttgfTDHDYrGwZUBzFS5oFWMxuj8Eou4g4zz2b65ssPw5CVyChJNovRJtTMkBBw3g1Z9hdNzxZvQBPWSC8bE8NCh",
  "key11": "3DNZu9foh8dnwcwu9Jsdev8PTAQE7Q7v3Yv1ha3sFRrnixM7FR1C2NEf6uTAtoiQnk1zDVxypx5TW3EgMZLxGhyf",
  "key12": "4GvLnar9kG3widB8rV7qh4uzFnGrcfNhhVtysGbqqjt1D7LR65SopqwR9C7JCJxCQyHdaRgN1V4aa7jbLmKhJdiw",
  "key13": "4efbpyixt9vGfssmVMyB6FEa9ncRkeBBwyfSHgyhwiPgpJqYRPk5a5BWUFdqA97UeP2Pm8FBP7Hu52HARJJtk7wv",
  "key14": "5VxX3YkasYY1fDtKqXcwUXmJatG3s3hPHpi5aucQurB2QHLVVTaGNWFQYqTEVRNqwdQywiR3Xs8QJVSJoSnVgoR2",
  "key15": "24pYAhiJSmJaBMq9dHd4zBm4pVhJMtkpDcdL2hV5XtwoSPsefhE3yv8KWJUHdRY44JWD7EJVsNp2dWSdrBr8hDfm",
  "key16": "5vtfgVen9cfgdocK3XBp8KbT8MjmHwaGKC8F49GmXEyPSFc5LPqGmhbFwsA5BRZAHyxRB2fwDwH7CTuDWXsQSDXU",
  "key17": "3nhyE2oRkFxaJrxYMCb5yhEnQ8ZU28oGY256Yg42rnGxm8CA3aD9acLySZ7GzhyMdBtFq4go29dZhkJ4TyPK44gQ",
  "key18": "4ndWoYQ6ZgNVjCXHhSsKcmnm69vXebSHC9vhLuhvm3AnFNNPAE1J2W2QSGoKf2s719o1LazC8NoTuh5hcCDGparL",
  "key19": "47rYqvA5MLk4NJro1Yf8N7rig8E4J4GGZsxBPSvfCsfTdGy7EvFd37vkmWHS2phv6cvNxenQSv156UNTV9MP25X3",
  "key20": "2FqTUuHHAbDqZQQnCzkiDzsisYCQxzkNkXRSQdX19ibW9UWtHj6CFjepDiRfPbXiNxoppEqB1BcQ2t4BvZGupCGc",
  "key21": "iswmEkxwUhNod39smuHJVRXEDiYK39LBhHi1TgKuMUMXupdQ9n6sTWRZTSSrc1vxeF1sj37ghAh83nBdV6P6Hc3",
  "key22": "46RqxXdvAMbe5ETJZa1ZBo8bKsGrX4jVKFC5iF59ZvQDhboZjmGtaPYRBnGyg4e427to85Rp2fHDvtFiWuCGWKkg",
  "key23": "61nBdHw4Cpj81CVynoRy9WBoNBjey3aNqw8CUzRv5DoUkhBFHSQaqytGVZS79wF7KsEGc4Y4CeYYZM1vX5GGUVwt",
  "key24": "3HmTpbYG4Jn29ama7RFcZPxyCFaxvtoC2S6kbSLVX5fVmywN9hiPpaodpkErsUWRYgdYYu54SqLGpxw2sBV5dSwR",
  "key25": "3bCvwfymah8pgo5LrTg9fjZz1xocnv99iFiG19CrvnezU1mo9EfRMEQzFiJPvXESA6boXLTYBoNCrQVWq9kswKqN",
  "key26": "3agYfytjsoC5sDiaCGredSj5CxWkhEWbzBGqdWNmqtBn7niyGmFA6JHYz7R5Hc88pZQdxp4NNXaPjLuLLA887BPc",
  "key27": "57tFgxKrC8jtzCbZDMdMhXhgTPWR7PELcSjFJgvDoiBgbutQfdo5YyuWuFsgEktGWMikwDaFb1XYMzi9AZd1kqFV",
  "key28": "2fSEXDwE4D4kmyfjEv9B7RYj84UttBGyn9ZXko7vtsEZAWyhUwAeN49rphWP6mPzGADZiJENxhfhDT495Tqg4nRq",
  "key29": "3x3PX4sLSm5u7cMjjrvqL2CLKcw5T2dMsU3JkyKaFpS1DR1DRpVijHXoTBHc8uzsoXeYxTm5YdXpzwDTiqnYzV6F",
  "key30": "DXd3qptfUXrmdWe57fEJfpY6UEJfwXtsR4PnZczqXqwoYdSnWRK8yq34fqwCr7RcH6Ny11UDzMQ8yWPEQvDXF46",
  "key31": "2krME15S98CX3tfPH75xoqkAEQx13NnhYWvFkrHnzZng2VWabyHXnr7GLF6phj1VmZJ2nbD3nZz7B8anF2hVxSd5",
  "key32": "1hXgmS7nJh8ZKw37es21CLk18XXDy45KzevadFuGwpEmLZCeA2eCj3KDLk2okvW1Vj8ohqtkNg4BZyqbc8Lvvuy",
  "key33": "3rGnintxJ6DbentPR7DQr1HUMy3WKaHS6HJndDpEy3NJi338g31PbNUAZ4qUTrxpPfJ9x66V4oQJigjSftrg8Luu",
  "key34": "3BWTqPnj4Uufve51WJejESh16tJuiMV6xjq7RnrEVpwK3cTUrUpjoHr9Bzg4xkP3Ugfy4bTR9GcUYp1o4M6cTbVK",
  "key35": "32cNxi2PiP4ZdoUXbFGZTZmKwkgJtw6zUesdCaHdskcLPezwmTeKrkCenLWLHaM6nVGgfmfiD7sHXzCMKjW6k1Uc",
  "key36": "2s2HYRpycDD58G9MKByEUYPYphkmARAEBgbwgWFG3J4e24Jzv6RetCuZYotEiNjzyHQbPd6HgjpnnwpniTqZGpmM"
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
