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
    "3MZR3ytUf6SHW9XX9ct6vTuo5jL17qwcXf77Yna84ZibBd3WQadvKTByY2yAY4aMnzuzDeCjeYhHddZDdouaifmo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BuaxqzdJr78fa2rfATQ3JivcuB38irN6oaoqawYrssZTiJo3bQYe4Vuhp7kkZGcUakcjgJgAuac7KZGYkCkFncP",
  "key1": "3YN1Br7yoA8opG6eMDUU4jQDj5PfHbNfYDwTBnH99P7Ym9q3mo1nw3aUdqfmxARWEvuzPmP3SUn1yvqFJxRPoKhJ",
  "key2": "NBJD31LQX1Mdz1ibmbW7uU1BSic4rFyvjJpsuvhUrT5G9SGoSvFJhWzWar3XWcRXJVgnLq5t9oXvufgS3DDdt9e",
  "key3": "3b1f81qRGfBqT8qD5JCNm2fPWAX1KFP7eN7GKAm5Jn2VJaCKDbeSrG18Rgr1NUCqwBtgUxTvPEKhSZ7SCc68Z9ME",
  "key4": "5syoUJs2PcFhVXxSGfAtBpW5o7zrnmMa46L2XZyAgxXigcbx4ex2gKYM25umyQq2QTjKpP3EZUJ5Vc9hBM9GJBvu",
  "key5": "5yWifj1sD9yDNnPTw8YANJJP8gqT7FpGqG4ntZR7qUU6S1PrYLszu5uqC1Reoqjmy9sbrebPQzfq4DF7JcJmrBPs",
  "key6": "JcR1aYTdgzjMPMgoSDHRnUZLaPzMDNdmUprNTCfbyoNxAkENnNAGLqm5eDegFn2ZjBhrurZuTB6RXr84JQQrkSf",
  "key7": "39HwMBJBXa4KSVqg2ad5Biuu1FDHjqqH5Dm1d4NUk6F3KQAyCvLDL629oLAmGo5rAWN44QkxsLUD49UuTEBJV6h1",
  "key8": "2pPiSqb4Mz6UruvxckG2Cz1FCDeVe1GGk2C11LVqqXKGJbqV3vn3T6kRsFE1J4ukTP4ACsbTkRmsngGnBUntqdnU",
  "key9": "31ZAa1VVSiPxQmgRY7wjpyXZVyGm7DcDcbHwc79LGc7gHMA7L7zgVs89YG47tekoYedk1MjKHvbjt3c33oD7zoXT",
  "key10": "3WWdjCYu56ttKuxQpWcUSjcntJnqLjb5VV1SnYWkyg8VLerz3rs5MuxcKfBaBCAkS98map1C3mqEER7tcXiVGcku",
  "key11": "4eNHfFxTVVwV8CAr9kULdheEe6sAqqnnvrmjEUNX9tX3Y6KmrY1FcrxJzDqQwWoTu1m7qRXkGgpPWmNWPhHibREE",
  "key12": "21iJj1w6rYsBwYbnnpU9j6F61KxMoUnzLa1uyLfgyKDzpkZt7gGzXbNXfadLDfrQxYUubFkHae9YiRM9czX3366z",
  "key13": "hf7cQmhCBUY9HUtqgpmGVgFmq5RxDHL5J9jk5MdKYH9Cw97W2BBLi5YJCLWF8eFVyLiKbaZcVn3pHcmrCGtGpek",
  "key14": "5CwpQqjM5FomU7QKsqicnUwx9bEdCtDJFBvn6Jt7MWWWb2ijTwgtJK3scJXeFBxR7sJbx9XvLqz82sX3drjhPt41",
  "key15": "4JRgPfmspd2xbkbkidyfCK7G7SbYgGMvnwGtfGLn1ZXDuVbLcypUtbtgkDCbUAZcShvCu9QL3XjDKTVGhFmScX5L",
  "key16": "3KBbJBUMdTp25jmKryZVbZTyhQZKEcBXgUT3pTvNnjK2BfYwkomSco1NxB7dshzdnvURcMNCKP72XaN5QZGpvNkj",
  "key17": "3BSe9DZciKk6dpgdfQRQVzaXVFZdY8UXTNEEgLKeH1kPWL6jPyq4imypDyQg4xomxYYYUVBdbaayHfKCe25FvCGJ",
  "key18": "5nfAsWcZSDC64oqU59BjH27Xka6ptjHDtDwP9qm8Z4hSH6dRgfYQjU3Z3AuqMy4rAdsCC2ZXLMaPRrEVPYSzmEbm",
  "key19": "3F5JiXoBz5KHwHaNrMyLSYcpEbLoFwrB1P9QHay3NM7mU9iZkbXUT1NzTU51zJf9xBVjSnFUCQtSdzR7j46U249K",
  "key20": "7pE2Cy4h8Hb12jHDvm7bRgx3RzsLghqnHygzkFHz6K8SifSKEMLWpq3JG65wbZnCL8ypubGFDKYxye31KojbKPm",
  "key21": "1mKA9mw5wSNb9r6nLtPdFNGnPLBWw23hTFG9i55EhpLpvpAopKP2sAFj6ZFST7X1RjmdyTpKCnM8BCUpX82hGtU",
  "key22": "3yJPzcLMeLzvLopTNGtUbSevveFn2PJ8BwPb9AySHNbsZFji5sXJJjt8xwfGk84BzGp87fJnYJQQsW2uxCUe5D2k",
  "key23": "2e1ejGakLSwjpxW65gojn1TrzMArtPM2uP92xQ3fQjoiahnhphUAgMovdS6CdwkMEqEHSgunYATPRzm3wWoKJ4Gb",
  "key24": "4S5tbH7CvGFL3DRqSQ6UY3PTY3141cVSBCufpXhUdvS4Ltzu5A1CU6P4wSvYNNRRkkVfsytd56vN3MU5e9sCUBWf",
  "key25": "2fLEj7wcgJa8jHQcFzZ24nLKtRW8waGtaFUMBydy7Gmsmv1dzDbP2WHQ2gPvHcvJqtcxtvTegzU2HbhXkfARb3a2",
  "key26": "4sNWc3mzJhP7NCbqQgpESQ673EzqTubavqzs67wDzuAtxcZLLvjL8zFK9KFT6AT4tyUVkRnuweSBWkFgRbWnakVh",
  "key27": "4SGW9PMBbEZyaXvKpgLkpKE6ChYp2a98RoNrPbn83hgx68WAM2cAescJ1tkqybyq3pPM9w8PwyH8ag7dCa8pimGB",
  "key28": "4zkkma4SkqZVgriwt5aVkhC34C4XmcV437d18XtBXPNooLLGUzSDC9xFqzcFRge7UQzBcZwgDU7SGnNw47t2whgx"
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
