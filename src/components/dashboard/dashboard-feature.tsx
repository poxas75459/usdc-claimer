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
    "484iAZuRiDbaBGMsxnMnuAuo3scFXpnGc9aKbwSD3G45z5SRsDLPjfp7CdkCCTBZhBmyKZFP14q8i5532ifCuRx1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XavV82ixBpBFsG6c7gtMEpJywh5VG8mDKLmKLHCKwixdwAGJGgTEJTUotqSGnHEPMaFHJ3tHQ6SE3ZQnAacp7NE",
  "key1": "dAMUur9fmzvRrv3tJWWPTjJNKbqf7BRbYEayy5pVPaTov7gHVML6s4RpPS7azf67Qdhbz3bdwEaQvAdvPnhcHPw",
  "key2": "5y6AKLxkkyPhD9ZmVZVycWU6Ja7sm1M75zdCs3WrSpyQrGTrpTHv2z4yZyJZJHkuAM6dTRCJjoUQjE8G3rGiWFaa",
  "key3": "3xCxNa4Hgyz6A3wGWaMF5vRBuJFWNzGPdjipt96prT1ULzFbpdWiUi6DMuduRnjU7FNBZmMQ4YwytgmMyCsa3Mh7",
  "key4": "3UXPcee5of37jmPNGkPa5XdHrnCJJV3ji3mTM8XMV3towjfVhDRCdzXPuUDbUz95Zpi9CJ38kaMwnMTt7tiQFndu",
  "key5": "4nvQY3YjkiuXuuPMVN7wiiffExQLwTXJhTUBNfpAs12t266LQpJyt1iPfc1Z2vc1XBtuqGdSw6NNVLvhyyAX895P",
  "key6": "63S7evhUxuewDvoxBYXYURseJMmzkYh3BkRVjvfijubRuKpyST7F2oVqPXd5AqvGt228dgvfkTR8kSUu5U4eB4d1",
  "key7": "21V6uPGFkwfrVHLqjm61JiUBdjaCdC29ukvjUpZuTGf79YoZDpnfbMd4CZbq3P4gRWhpNfJ1yxt18dFK2ukdkWsR",
  "key8": "5G2eGhWGaCxrkQU9dnQjfw3aE3EXXfwPYoe9xMgwPVBCk3RCA2M9HmR9nqDzJJ34fgpuYCkcafnbD29XMKf8QEoo",
  "key9": "2JL7yhf7wVKm85t3mzUazrJsPucp8q4HRf7gLowWvYAk7Yc1V59qoAD1MTHbJRWD92KxKV7ZfEDj2iTKhSaBya2s",
  "key10": "5bgKF4WecRfAJvWQThhgyY4A2ExAPeC8PPTbjWP2ZPGnnxKBsLcvikxJyTRuwhmyU7LvRqk6YqvAaHW42uGyCfXE",
  "key11": "NeadrxjNqV6JVrk1MhPYbuEHKfMAZJT1YVNnx3eB3f3kTrfnT4MgDmiUqyEy1nQP1cjQghxnWKsUFwgCYJkKWVk",
  "key12": "3XtGRuoGkuGP6FvJ6zWm5iac5oFH8VyK2CTKq1DokdgNLf8RJyVhwejh7a2pxUym5DFm57xRC3958ri6YU6qc14r",
  "key13": "5xFpyv4Ez531s6mtaDS6dPHZjcxLgckPqc8SxD5DbnjH3oobNTFjDgo3YVjpzzTRJ5mrzEQ7TK3qRfh4gjaJvJaX",
  "key14": "4y9NubEdLPFENcKDmxghh8hQpHhoKhcJWGPMZ3oLEWoFR1EYSwpCBeospnHAcKt74WKWBw18FrhaSgjDdViBp9QB",
  "key15": "62ntUwgLSdFoNjDEmaiv3HDxzSFUBZDijyMdAycjH6pgXcc3YBz8BsgGE6yX8bjUcxLjwtxq13bjtdD6wqZbaVBq",
  "key16": "2fW8SqPLDMj8GiYeQk4XjhjGr7b1b8ThL2LLUZF9SKAK4LH6mSu3pLen7VVCnGVnT5zupE7us84cNu6iMx95CAYS",
  "key17": "3mnjme12rzshdQfzoxWFSdmkfxe34eiDJ1breawq46aGnr7bqPPE2dAHPEVysi6SFn3WQNSBPMrdSWCd4WUjLHgL",
  "key18": "2bSR9PSg8VBgYhJ6W3jaMmANabWKrHpEC8FmEvKbgz6BhgW8GFknqwX3qm9w19SQEpaGMtGBWTuh5pBubpTnop3T",
  "key19": "Hirfshv2fa3jX9cofkMHPKNQxi7tnDejFpSGSQmhhuqn15TWBbD6NXM7aSMes7tXFqMVZMta3KLkGz9NheJmfMp",
  "key20": "4gqif8Wq1MhJiGPGZsvwcT47sWwZdZhGetexHYbwC7Bn716GvKhVC3JN51gC8hPTxe4uyfiSvq6pYE28WBxKdr7X",
  "key21": "4hKsNj3oEpYnCimRXw9oJcDTffA6ufJhPt722T3RiheTBTzKjm97oD1bUtKYFxcqtZ6icg5NBtGKMbnUh2z2Co9i",
  "key22": "37EdWWE9cnFbtwvTjcUXVQRuMMVYnkKeWByGheMChg6VGpuwP4V2MKRg2H6FGYN585BVmDH1iDeorxDho9X8dPeS",
  "key23": "UeJHcp57o9BgUfvpGjsEPFt147aarmUhw38kJALqNWKz2e6c2rVVMjCWx9uv1Dezh6iUuwnnZWMsa9L9AfH3oac",
  "key24": "3qpATtdTyU6czQoKsS3rxf2L7Hfqt2EwRE7imsGE2cHr8ixieqzWm5HZB4B8MXzRmk1tjyCs2NEVdc9JxG2zuy5Q",
  "key25": "3qEG4XDijR5FHGVq1ANDApZ1h1RFPNuqaMSzq22KRntnaM6rCtxNWvkXYxejeYN1Wh1RBiyffQkYBFA3h1M7DyVj",
  "key26": "3eenu2VCfCDmKtv8uvFLrMDk17FJKVMqFqFm3PTNfZ86Hw3touQjkU84ndkiVsiFBqruxFDxYbQxuGGNaZeGxJ79",
  "key27": "3im7SMvSLD3hZQFR2NvdBcWroHHAp9Gk39xwDmobFzWskaw28TYRqFXTKhvHgWrGJSYf9NDu3i9qyxVxcj2J9DEJ",
  "key28": "4bdUvThdFhTUKZzj8Rssrdtf2JNuD5cZuEABVuQfXUE4KoPofdNtJ9pbRsJ9LW6L4J42mhP5ZzdMzQPCEeZeukiu",
  "key29": "4V291A9CwsoUZVnrJoZ38BLhd5a5BSzP2QmwqdwrtgFnkbXUfD3z26C18e5baEHH7YrU5583JwefJQtdqH7b8FxQ",
  "key30": "aPBqGSFfWhJSde659ciMswpkpoVJHLCcJyeSUs69cmWUUi4uvSCtxnodp5GM3xCJZLGrJhqCw8umZTvErd8xhZq",
  "key31": "3PphUVLdULucPfavt7WT1yxKMLrzqwaWhAr7y5hjVn9CDTr7C581eobyEHv6xc7H6xhvjGd196uCUULCnuweahGL",
  "key32": "55jUqC9rUni7H6ZBqqfXboxVTYEci3iaSgKVR1UVjNvmsZtWwNjxBjkEYvuV2QPYVZTmJBVdX1WAQ5MY85NMb33y",
  "key33": "kdMWtKWwya96wo6vx6U5CxC4hRTwQtvRaKvmY6FDz5EpQqwLrVLwgsxMx5T5aRqXth9mhs79sYGMidXTe3u2ywc",
  "key34": "4Adz379EF1cSXaw4nw3dVXtELJBw3YkdmbaydddFZfE6nrVsrdDeE32bXJaVpygW9US2c831RthTQMnXnEgiWoix"
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
