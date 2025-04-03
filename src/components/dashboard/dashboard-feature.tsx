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
    "5KFZbJqx4mvTX7eXPuE5VGnGiAGa6KMywfFMn3fDrJLVJUtmg1vscfb3rVgu83ZVbxzEH1By2vAL59fkGnQGLhSX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HSyFhYeX4bBH1BMo2uhNj13A8eAkwxYRpEqPRjoTxhCknj2pXZXJ5eWdPFfSh24D1LwuiQPpFku1hdu2S46Rufg",
  "key1": "4faWW922uobXg6HPFAmNMd8BsS86X4o3k36cFgfqHXpTzwtKdwNYDbDkXa8WqVj9buXSJfJxpqCM2tV9iAYGae4R",
  "key2": "5d3YyYKQhUkNGNiNFzmynwg9rN8v9EdYUN9tR69Non8KBKaYSnfQpbGWg9Wd3gTfuMt7qUTfyhF9wbPYVhht3EdM",
  "key3": "5hvGEbcRAncBQWvsp1jcyY6uC9C8zgRrQ8Du13AMN4WiZrz7GjmvYkCKk5tFs1bUVA1MDrh9w11TuKr8mDkffkyM",
  "key4": "5aF4jSaV6JNxmAjCWgq6iNdMUp3cnB4mRDFFzne4nC76ffxafmi4a7j4W9uk2QcBFbq3hnji5CLDKYJYoGqbPGVe",
  "key5": "3eerX6i3u78SHQS1n7SbTttkfWCmhoDPscxy6d1ujxxLUEcYcJTCAWTpkUWghCRyzf9STXUjRLKWWedirZTxE36i",
  "key6": "aiq71AxmVpEep8XUGdBAPbSC2MHkzLtLM7nKxfxLBneDW743xxnwrxW6B9zVEP9qMN3ogkRjg8H2Ys6QF6zYeD9",
  "key7": "35Nd6mCzcwqXntmYZnjevK5GgzBiXMvG4YKd9UD65jsrHbxz9yG9XrpBJE5cMpRCsKaBAh8zyooy7a7eyS7e4Zck",
  "key8": "dHfqj6JurNJovFu2prjGpy8XLvXb8n9LqC4rNhWyiC6Z3bKkN8S5kFnZjFUTk7KTQpiuX9VJztRJJ94996RtkLd",
  "key9": "2AAxxHEL6Zbmb9NiKCXLUNmcQkRNf4HBuhgkMzzobgHK9a5tKUMHUZehsTAVi8DPBRcjNym43NkaZwa7KxubVpuX",
  "key10": "2fVneNu2yekxLGGj894pNFturT1WxoDwBEaZbcVj5r1tQWoRXXttM2jCyWecUkvTXTVadwgMgFVXNu38zvHGfK2N",
  "key11": "3ftRLKSPPUXC26G953MvCUX4HzNyBCGgeWnEiJfJuE28jADFcNva5Q6tMG4dw5fjqKsSwkstqqdCFU9U4e3vBKR9",
  "key12": "2RQf3fz225hPeEbsVqLKhddSzZvT9GEUVNJqeK5NqUCb25kqJd1ABDivFc1Xo6yAGjCX1LvfcnK68tYoNZGwvhBi",
  "key13": "2Mf9C6CsJTDktmM3VxEVXTHDFqtNdoCsXdkxid6du9g9CJf7HyoBGNrPNwwVjxhoRxMgaCPZsW7GPizkC7AyNwCD",
  "key14": "HTJPyx6n1evDVysJy3v4c2zr3xuvc4DMna5uHKmTPUFCBycNuFK3ybmfmoSX8vKv6D61FugB3kru8DoDnZTySSF",
  "key15": "3BALC7rkTVR48g2B1EMjbCAd3FZoWLGCiekFf2ebVwtja7aR9KK3ZytYFNY3uy4Y8Uye13CpYdjD4rM5BJEo587w",
  "key16": "2jg8hXuznsqnsVfSPVEJzmBwawKZW5ZmYx9bdS3M6zCxCUcreZ5FgbSwAovcTKmzdQpFMVZMHUEWpAH16jD7YyHN",
  "key17": "1rJcp8PT8AM1Ya28NMkNR3tduzEB6bDCWFeS39LWEXG1FH8PDruDH2UK7guTQNDwHvv6SmXpZPUdxrgpFchPMKV",
  "key18": "4zm4XdZZSxnfaTjs7E9tn1JLBe2WMnX7N6ZSX4GEzqxZMVtEC2DEyVg4rZrabNvdZhAgqWmRUHRHbEULRxczgb3V",
  "key19": "5ie7MqaHHJ2yBJCQjEqjhDHd9PdSe1gA4FVWNRHL7YDpPXBRZqa7waR735RbmoFPAh3rNokWVZiax4PRik1Dte3b",
  "key20": "H7sBTVc9hJHsL97z6jbayndY3mVEufrQqdd1XKno9FVCmnVDQqTQGgFcQwo1diaLgyJxSusvXJYd6WhA2Wiow4i",
  "key21": "278yTNbCAYR5gSa1BNyaKeeV5ieocD4MZfsbpphveBAfzAWZc9DzpFVALR824wh7fecDER3G2mSXfobo3HfBoVTs",
  "key22": "4vBvtPJqEriEoD432FLxA8MgHwAbJxcu4M7cF8qM8EszydWZKNMkFqhBun1pEAAKmSAWtBDsnBS5FUpooAYg9ZkK",
  "key23": "383GdyvxhVjqhL1oTpmF4kuvSRoQUCzgmJUXZuGhUXDjUYqcx8k6em3vAMgMCvP8K1iuCJTKqkFtQ4h6VsFJ6g9P",
  "key24": "2xBowLcts8fGW8GEuq2vHaAjzQQSuzU1hshJSyjwVHaqjogg9twaQHxJ4JS7Lk5PxuAoL3JzxDwpvTX1Xf4Mzozq",
  "key25": "4RAyiLfcUXrgawGN6ZFBrmzsAyghcLrpp5hDo7eDtbbSdZvmz3Jqx4JK7TCjhRWh4AxZG5qTyP5RnfBJv2eg6RE9",
  "key26": "5fsXmfnnjMShEqFYQDAiJaraN5oTWhwBneX96pWT94bnyMzJt7dQwyYCeGSZUyjoXhEKoqoiKT1dFYE16q7ApjjZ",
  "key27": "4ahFXPT5XJMDn1NTMPMRBaSap5pvMfZrWE1aSm9TNfa4iCVLtbF7KmPsSH666bd2Yhx3h2VZg6AheHU9xRpCbC3Q",
  "key28": "5nhBgW3Sc4qXgxBBEeuwAmgEDEKGAgC5jtuj8yVSjukyc4tSepupbAvKfbUZjfwUmEmPxJh6MEUZjcJ47npdr99b",
  "key29": "47KQ7WSb1dGBNg8AJYG77oL6cMHmAXRniTAXRKDbxfGx4tJhUorCnNMiiDHdAt6J11HJE9Xx4DUySxRNuAi1s2DY"
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
