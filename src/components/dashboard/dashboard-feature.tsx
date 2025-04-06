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
    "3ZVuRZVdDSiUDm5B7Gvsvxur44ZwWhVRskxdbweVsr8tHjYMk4nQZfFgCrzfGc9gR8Gv1dTVdguJMa7MwQNdBt2r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cZAWJwx2jaBFVzy1TRyNZJMXwRLAckHqCbkkYv6zuzbyBvoz42dnAr8DXuP55MwmRwXkWAxSGGTqEuAXsChjSYY",
  "key1": "7kKtwNKMeyffDvsoaRM4yJ9YH1HvL8Qd6t7fhjWRY6m1FP2sUDD5aKm2zRvEEwLu4wiqMRCxkbTCVAzcemppt3Y",
  "key2": "66NQxTvQJfYobV66pDamhTnxF5dF8tVGV29EFkSXvngsw52EJHAaD7akqJLZJUUwqfH5fbJAE3gBfp1ALJkhx8m6",
  "key3": "5t2een9iioFofV5cpgmKs5rAUCb7R9cYEsCdzJzzbXe6WoiphPBdVRS1aeR5Qm4Wf7N2BfXBK7sUbdcxQHPcAKUw",
  "key4": "5UmHRo7K6QMzXAEwEeYGpVqwmrZe4JfgxNs9jpQpk6M2XGSodqRxFECvUTLhdwDEbUap4hgJ4ZN8PqbxQy82Y9EE",
  "key5": "23Fj5UNPhukruFj2GD6iNnKENfJ84B7jjdxpUnx58tyg2ixdaWrqhQn7qrRXFTvhNoXVahHdhniyRtEW8G8XQogb",
  "key6": "4ec7YngfxRHS5tWuankHJGWrqEKA59dLP4wSLswyXqK5ieVs4hqKRoXggrQuZYJgfiCBFE1yfdErVJi9dBiMyp3g",
  "key7": "4Pa1i2nANDXmDSyMokuhz7yoLuTSo6762rwkCkcZfMhxZQ7udmtMfv1RTHVFgcqoc1kSehunkGgtnHrs3dH6Nakf",
  "key8": "5aLDxzRHbHMyuvMnvwYTpEUorUcx3o7MuC3HuqjGsWMLP7ZTS8nmMHtEZsBbNsWwhZZM8YGr4RDj1vt7a1HQarFg",
  "key9": "oiSPyN3BV7BmnYt2Bo6e6ss963MKcw2ium3cvgF1vUY9BwEYbPMGGP7KnSnSSxwZGNaUA2UvGahQhHcUUPvSSJU",
  "key10": "5HcQ1Ux7LmJgm58cwpjZYLNRQUFA6LNBiB49BaHEzsjufd4oqH17CTxRZMpacszf3GpAXTbki1PXzwc5LN7qTsUp",
  "key11": "2f3antR1RUJyRoWr8GM191T5wkCmnMAZopkktBMwvVeTqX6cWUWdSKSzQinjMgUAwCHd8u5b3JJeUN2n9SzojmH2",
  "key12": "q5jc9HKZQuy1cLzvQyLbKoArmnKFqaLqKDiuDJ1erD8jSVLMJvFSTPhYAKogSpUxaB2weCbENMWueBJRTzByWEP",
  "key13": "128MDWpQnsuSpyeRYBxMof4fZYveXTBwMJqrxCi5b9jkyWYCGJSu43ZaVcdv9P5pMurdPFNJNqcCNNyKTLFCwRiA",
  "key14": "4uMaLXdW3AdSi3mUDCJNjJxsf7jd3Ta1WiYr3sj65V2TS26xrJtAsCqkR7QM3uHk4yMdP2ruLHnYJprgdmN7Gmif",
  "key15": "MwTXEPef3C53Y8QzjNwhfCmFKMesBaV3TmhG55vTiqYZof8MEWkxT7TBiQtA6CXPAV7tFkNBXtwiRqoEUqPmyKe",
  "key16": "XeGyp7igjj83kYCyffwpahEBfsRvjtcoAYnrA5d7fwALVFfdbB7vanKtKEg5Yv2nM1M77ySD5ahcXyEK7ckQ91j",
  "key17": "k2Mm6fCcQj5jzjBiix1L83azjV13GoUvtiFqqSmb7Zsoeph7TnvRzQdeh3ssiAtzDgAHb61gL3poD8vgVonwehn",
  "key18": "iC2ZXmVVxhPD4ede6VAagKnS3tB4DoLXxbFX9MjG6TdC3HfKwkpqP2YdFvdX6RGWLmKCDeQNFSfkfMHaxruM1fg",
  "key19": "2KbNcdd5RBTh914iXbbGnusXQemHYQaWDhCD44kVz19B72F9RevNwUE4Xuwn928pvNjKkC6FMVJJ8pJie1MkkL54",
  "key20": "34zAibgaQ9B6hSrixXTPytU7L7EcsPW6qB4M54fgVXdegcve8bVi8uSHFTUjKzbSSvfHUNax3KHaeTdM55qjJo8X",
  "key21": "TSxzNCP5YPjVKmYXdGpX8otxbz8Vn5Lwq4Y4es6tgJ84frbMBSZihjsdM2tvWZgeCVnh1ndSpLb4hLiN8DDd2EU",
  "key22": "jYWUq1PHC9ytVBbBm7sydTF6QKm1HR54xoMXXWLwZq55N4qQjLQgC48KNQBVV1UM2m9MQ9aFYe3W46xyHjAQYqs",
  "key23": "5zCbNPwjcguYWmF824qkYqhF8mstuJQ7FqAzmUzhUq6TTpqPWLqxV5X96quYqW4T6dRCh24dTazSfet8mA9LfipN",
  "key24": "5XNJsvhsdejgxLxn1bGmKsamcw29Vtwm1Zp9vEB24msd8ZvuG9iNjo6e6FAnN1i2xaZ8zEejSERSU1ahP84G7CsN",
  "key25": "Pzbkwaw1SE4NNyk2nYEnuvPF1ogue2UV5XmU8tasGvNJyaKdmkvZrNu61Sms7jhcfVj6tv3xqVzkMfouJmFwuks",
  "key26": "UwrAZ4aixmVuMb5bM3sdujFQnAZ6yM6fDVmQSXXy5L9WWcBM9cEsjAA8px449UqdoQyyG7GNwXHbJD4pdZxy2SF",
  "key27": "3sJ5myZQh3X8grBFKG8LzSoa1Qu11obmjxSEAuTXsgV4PkWhSHsYLuYNafBK9JU1rgRtVRqQkK1s6aAjk2oAZMB8",
  "key28": "2Fx9E4X1hzAdNUK2PTZh8ues7FeYvTZrgGqdvceVGdGFusNjcrLT8WjNVY1QxTXj4vNBmzJRPGUacy2yJVArBuLQ",
  "key29": "22ALDf7YwHR7QDzeEzHVVyg3ymAgsN1uWMcq5rfrYPg6XekeGGW5DMrV8bxjpTxmHGwG8Sf2HK2hVaiorkhWb4Tg",
  "key30": "4opLxakiatqCSddfUYqYDa2sEV8NijJDshrSKzwrxVVsofRpAQ5MrJ9T4PqQxFYuVvUJNBcKPUfh4eD67Be1xYoW",
  "key31": "24Gv2gmuD4RzG5BQJWYjK5BjJ1oA3kEuEiQh51toZ6Hxc1wVdnNnrk3zd9LQ9wnTe1zc4EPzqJHzy2XjisoewTMK",
  "key32": "26Eaa9YWLS9vaAVwvSaUt8LMg2N4FdNTwmjrAUm3Q1ijgW7qweTEgrnGiSmUbPB9UdXRMkP3f9dp6HFNAtsW5Luy",
  "key33": "2PzdfP6tD4nPC32arcUCXTgYShqNhyfseNCKSMgpR2Wb4ktVDu7Q54yichT93z93xaHgruXovMZKAVN47pyVg5YZ",
  "key34": "5iESot26bmREDfBVBjfBpB1Q7kmE1dnSfmLFRzgrtg3eLykoXtua9cZPmwDrKKTSz66GzsACgpHw22HGybVfuxrq",
  "key35": "3tuD9rrjxjBFgS27XV9smMSdtZT9KZ6rxydwDHzfGR4HXKwbWmuUU9RK67kcw691TrMjvfmUh98xdsXXPPeMPvt9",
  "key36": "nbvKU9VRSrdUyoAAGLDwW4bxcfCkVpbTxXqq6qD6343u8V9DxzCLUhMwe6Lz1aJPwzb1VquSbUVeHzk6Z4cDDDC",
  "key37": "5kbS6x3Wicq9afLmsBg2KBTzgeVifHCnEAMEtJzVvpecUD1MQG8u3S2h87H2A7iJqN4jB7xo8N3GTBkFuicbv9Ys",
  "key38": "3uhkjde7ENxLbDVsD5JmdizTFxUZFkxKFhx2tmU52mqSzTmbQEs7xvb1yqdPAn6exgKdA8P3SE8thd58m5cHKLqQ"
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
