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
    "4bNLFS3ca2BL79oFevTXwbDtNRkiAmc3wj6TAgBT24BTB7doUiLoYAqHQqjtiwCFeLqTnAbh4cBZX87XBPiioTER"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6vB1ZTwyXhkmGHdj7jKgHeThXWLybZq5bm7nEUGaiYjpQJRM8reFgT5drPHWFUqki1VzDpasRnfRY1CWAANDu7u",
  "key1": "35fSXnYkuLUA6dinFTAcvfFbKnjsNrHh1TTixBCKJWijnfEXwC3xT5NJBMPKF71dGWkFmPPUTuh5UKgrZvk3JTkX",
  "key2": "5Ns3JHZwqxuSPE5HuL5wqsQmTphNfp9v9k5R6eRQzmMEe1hz41J9WVC779351TKzvJ1ohghBhjt98XRqGyEmAKSd",
  "key3": "41NBSgPKJhjK27PsJkMk1gSsj7nRa4hcjoUk3nnarcXQxYYD68f6TSFm7GgMMvSFKfwGfpxGUwJf2VrTwbSk1u3M",
  "key4": "aYrFFhrUve8xUEvJ4yBEBZGGASuiSXcHAfLsemhpDBpqjfQpC85foVgEPzYz1X1QpdmQ68rU4Ma9fu6qgxnwh1g",
  "key5": "3nebaQktACqd2S3mzz3gfGsv6VV7hR4dtmZgRf1Wfk5YJGT4MxbydDLxDkimvDTgESDDMFyg4Sc7CJwsbg6JxndQ",
  "key6": "5FesWbwTSy3xmuy5ABhqagJNK27u4yQ8i1oJT6FtJBZhKAztkXyYhcKDth4gjLBEiAqtnmsEmewbB1hmRUkxyzpK",
  "key7": "4UUQFsTNQG9qUtDR4EtzxWUztbXtHP7KYgPhAj49sUx95bHMVJW81A45RjmT1UEhETnHrwADicFc1mt1BeMsdXoQ",
  "key8": "3DM3cmyRtiDj1ge7cra2W2m5vSPgQJLshEsuxXuAVvYpqmvWg8a4VkNfZ9v3DNNS9ttbQc4rKaPkKHuYPAPwZa8J",
  "key9": "67jzPLTATzj5GFS1A6KEe6RnZ7ZbhSuxcSDzDwLZJN2KGgW4AiZ6sQxCmTaWYVZhNyGBdQK3y3EeBfekYnwZZpT9",
  "key10": "GUR6Yp4HhHdxAJYUrYQGGnWJhVWRZ6enkHT36ffGde2vqyx9vJhXvuFraAKawuWEv4edTtFJoytuZKfob3GG87q",
  "key11": "KSDxGgGyUs8YxvPt8LmvvZtCkzqGUCxtpXkYPvzoCvHwHbF45Zb2qhnY3Y58a4go21gmhpLNAmZykn5qYuWRyQU",
  "key12": "2NraM9V4msH4dX1L9ZSuCbdRvECpketXrcFL8N5atB3TMjnQYVp1eeqXntGreTtjNyzS7xk9e43qsfn91iUpTrT3",
  "key13": "5goxJpheSShamrRWTcoQi93gD7FvTgmXpzidBx79wGH2h8GkrWCBHbxgKXb5ZZQ1dEWfrHxLz9CGcsokMRuzVnqm",
  "key14": "5JhHACBy6My8KJG1tr6JYYSb3T7erzygBigHoBDzh9BQQpqQgoDZVc9sHK3CGvdMxxGrvg4vKnDj65jEDfqwDVCL",
  "key15": "3XnnoJ1zUrQVsJhUwuY4LTBWpyi99QKAEarfe3StgrTLMyH9cmP7RFFofE1uTzSreGBfqvwWvXHWudxztwhfwFXb",
  "key16": "52HhfAu7e1m3TudHgmtNDTGmF9eR9AMCfoB2Tdg8f51WiTyRBHhhyh3Sy8duStR4cyWBoMK9DcajYAGiCkZ1iEQb",
  "key17": "4vf7Lp1MJVCqphXauz4Dd6vkn9WBzYo2uVe6JSyatm6za7ME14hoJPy4anVcHspgv2qh3ZEBNuL6DUzxYX1bP3Lm",
  "key18": "47VKy7LHaEYcFXk2wdBjFomM2CJdQuWtqgX1B1QPDDEBURP11Yxqorgz6F6xyywUzsCVL4n31Eir4JH2BXeNpFr8",
  "key19": "2dEpf1zgG5qMbFGG1ChZkyXz3zEWukjtSRuqPCZbcbKj9JRTpaSkPLs1sMMR7HrEqMLi7wHcCZTNbdKyZsjyhdZf",
  "key20": "5Xm58EcbjR17HMb6bddhZ5mkcFGA1gHUXBfCeewoo6D3BqFQrAkNKkLjtGvTJK7nfpaDNKnFdERyUjFYCrmWDP4h",
  "key21": "5Gfhb51WfA49TkA5TbDWDWMtCTWnRWSXgUK9b2BP2Lzu7n7eKLvZzN8ZNwPowShwCXG5Mwji9bCKToPUuvrboQj",
  "key22": "39vz5oJmm3RruXaNAZdkcKyyRYG5PzPpnnhRPwNrmY5VfMu11TRT79kBaCGjnBQpez2xBxaPDwL6Haut2q6tpqc2",
  "key23": "2ujoBvhAYyELTxSyzpbynoPyjEaHVJuNv2NK1aXwUoNoD7u2wuac9yf5ujbbQH4xRSxGdEBU4krA2Z1a2mY9VbZx",
  "key24": "3V8bQYSgRFMctZ9yRvhwatR883F2ynP7nJhx7AQQXkWJeNQPvsZNVEmkzqrrvFgQhh138YbkBSePE6xxjXcAhicm",
  "key25": "5eNF6UmHbTMVcnagzdgCppR3sztkGthiRo7JL41FzLnchzumCHZhSVesBTR4V4sKLFW4CSpBhtqxysJybDcyvCdn",
  "key26": "3tRg3ZB1wJg8sRjBJj6epMn8XLu4EdSYqwV6GCj5KTPBg6daSyogFmoK5SHjebDsKd7xjMDAGzjmVL6aA7BWJkTN"
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
