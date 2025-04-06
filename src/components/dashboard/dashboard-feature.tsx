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
    "ctYCMDYeXVtKY695X9YsoBZsmzt345H51WsCgva2CgKr2Rh7ZiC7R1MvuNgsSxVC5vWJ3jktq9DkqE4napxrsz3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "234nQCSNAV65cBJv98H2wcWMH6wCbtEevrwMEw8ujoKewzxACjMSoDc5VJ4v1jR5RPhDGgautfqMckmwZNYfH7AY",
  "key1": "4NhDcHZvddWECXC9CXJ5iCjXChomWMMe1GPag1RUhuLU6i4KqBHn5hEMRX3xBejsWY6fu6BCnLzBHkyDeoGABPx1",
  "key2": "B83Ur3hPdqqn1Ej7oN1yu46vqQ1C3gdYWoZ3Di9sH5LWubKpeBmRASGBDCLJQnjf33927N7V94AeXu9DokTr9Ci",
  "key3": "3ErJhiu76zXhveXX4v1QqirS8odUbst35LUSnaGb87XWEbfacmd45hJb2jSywBgchFCiutYPY4pwhwhoB2jqfBNe",
  "key4": "2xbFectmCoMMQn5kP6x8AAnK5XzzXaHzt5Ysd4oVu5yASZAevqWo67kWHgvsGkQi4z3MNyavH7d6EtVSVfkspuev",
  "key5": "4Zg1cSbmeUh4asgEj2XtSEszhMyC1gjG9zm5QNTRr8Cp392z6WxBkNaHWPA6qscCFcrhruHxX6D2m62tNzX8V9s7",
  "key6": "3mh3MELRZA4hDYf7XPLLKkeWEGC1jofVwkKecDCU4XytUZustYEH6nyc3BvuXt8WSPQp47DgNi45XFxmxHW7JStX",
  "key7": "58rDzdrUri7QHfa3ho8MKqFsN6Ug8iqZTzjPcd17fFJL94orAQUeVKqbsr6vD9syawsEa6onYHJEuqVnfM11FAPP",
  "key8": "4Ugha9Z13sKcfBCNn5aVs1miq5zxkikPjjxxN4kg6thrkv2APB8d3YCV5i3UwnS5tu8wgRZQTXKUqn4EUUuFUTMG",
  "key9": "4bGwA6j4ciRt2cm8k9iMium331HcjwdRFGhkpZu232DcVwtkenoJWtxmzBDgN2FTBUa8ASAMVai3rgk3ja5xoiiw",
  "key10": "fXnTuV2h86NKGrX3jFMeWu5nY6kbmHgeXzYHC4uxyP2f8oSKoHn6N3KWanJdBCVB3SsY6TR4YUbXc2i7TBwYEmu",
  "key11": "3sbXS5WXaVYPKVGfDtNb42oF2pDHqKe47DkRA9vnWoaZsFdcNxGA2MdMKoqperY4uXdBAx8apaRuis9tYecQW85M",
  "key12": "3AEMZ5qohonrd4Zq4umF8BjygRixzQTtEAe2ZYwggTvNvLrNYJgehQ864oAm7hNGCEXUou3kHhKPmzsYyjpToimC",
  "key13": "2qH5j5Hq2AqjAZ3N5WpfoE2Dprx6xNPS7boEPjRKCWM45s4NXwtJ7U9dLrWiKb3g3s9uNqK5pWf9xsQhdS5vn3E1",
  "key14": "5hxQUuyWVYYUBzFBCeGfK4Fw9LKJL1c8rWhivuwotUoNd9YmjAWVwEu9AS72gSC1ysejxspdxkJBtB3teHBS7w8A",
  "key15": "63h3BQPXcVXHThMkG8T75294nkcQswcWacgcVXjxugkNJUYX76nuUvFV8wSHNXQXVNu49nSiCHRyiZLdjyjh6Xrk",
  "key16": "2tRMSz8sd3LwMhbM6WXLScuQSTf7JcMPxQG5AEnu79gNwBy3oUqcPGrbfxs5ef5PkiDhaMrTwcfhKZdupT7HEYCc",
  "key17": "2F4mkzwru8KN6TyTXJT3n4SbVU5ezEKjSHKT9kTqWnYHx4oeU3dguqWYAm2fkhDFPShqoRB2EuVSFoaCJpvTbPM2",
  "key18": "5j8i5McLBNYHz6RNBp4uCJLabpsrbinca5nRKBDeHMiQNnwvvYnv6cwxJGgaR5akFF3qazvbZJpgxcfDCeRQmnEH",
  "key19": "36Wqvee9YvPARKYF9YKY9VncgTynaKjJUYsJ1Cqy9TXmiQ4sfd4LHDNRXz9abWY9jj4xuSL66YCbpqAffBFJZ14S",
  "key20": "4fAtp75JZjpmrEHV21UuKC3peLR4rgvPD6Gco3pBfh4DKYX2KvBhUEjXBkdZKaUnY5NMa6FZJ7KqqNUw8geWSuiZ",
  "key21": "24bbG2shNVSF1QrCewWVGPtCUpFC9xjLvyGJhru54zx8EXX8m3Yoxoymyug1QAdVTA239TFrRxHWpkowKGgZjQ1u",
  "key22": "2upqHdez6zXvhq3PxRJDN1qUdQspDFnJjAzxDgx5rJZgFdQSYDL9bruWLMXXxZnXchVT5C32tpdrPKFbWHs3vApu",
  "key23": "4da1J4JT1ic5qYbYr4p12q6r3B3fbKhbWF6BPExbxBjEUFA5UzkubxFZs7NtMLK3YgM8ymLvx8ft6ccHkj8rCBC",
  "key24": "39od4RDQSxTMEXQFtQMNEFx96VtfrkCGN4gndWrTPbdQegG8sQrPzFvsD6fLoy3AFfNMftSdJo267bGVw6ytHirW",
  "key25": "b7C6EQFWkQbn7QSRF6tDQ99rmmtv58BjLqHKcuzhDnbcG2dwt9PzoK9NGbHpmc5su3RepvorJEPTviXitoGHBS7"
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
