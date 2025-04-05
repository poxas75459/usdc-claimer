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
    "4K3ihRgKoi8zH1izi7UEV5njQRJNif39B2vCnQURf6YsN63T3ZKfyebmiwZw6j7rbPvS1brG6HPqEqTdiNTtm7QQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LvJns9t2DRnEs586rvuqFdPTfFBqL8jEDgm85FqcQrX99gUUwABbQxMAgELhhjk7usc266WjFa9gBkKseDM7ZzX",
  "key1": "2gtcPDZH1nQfVmGW1bPz5g92WB1JJidELqLThYjKYhbBw3oXy9R46KcnYNUPH9Cdc9jiWJ8oWdzadhk6QWHpEYSp",
  "key2": "5unUcQM2DNWsnXkeiXYH2GLQEicko4xGF1SQZsZMmcwoPQdy1RnxVoRGuk6H2SDtfEpcMLVAbqDuzQnmaidMpRd",
  "key3": "5PcLUmLPfazVtmpn4Tt27Q2h62Nb9QsdN9oXYMjyGTBNKys5koRVinUCFfApwfVmPrLUA6ZpB19Ywwz92cHi6X5m",
  "key4": "V3xxab1iDWCdrmoofJG8VGbKVvDuLKeYmCRsMTXawM2m9mQd3Mut26Xk7M23FM6yLAKBddfjJ5s3TzFvsoKyA95",
  "key5": "ReGBojpcTY2pFFuMeRVSqwhcREj8jJnRDFkx3Ud5Xg6T9nn6e1p3fMpsC2QUN672fsPqh2zCHWuoqKwJgkphqXX",
  "key6": "5dsC5RDQcG2ufrC8ojAtcanDeGD7smysjeGzQxhDsj2yZ5fs1BEVd8FtzMuS8XiUbFnotzR276VakCed9NrnUeUQ",
  "key7": "3kexKfvY4cPBVhcWruntzzNoaEnupuwVhoBDTbDPeKG4VJcpEHUH5mpeSVyEUyLDQMADxCY7RWHtCSHdxM8onXDg",
  "key8": "5uJade3B9BcV693UrVjbF5CgmF94u24UxUYoPLMvxCjCYGy7DSiQuP6jt13SDc5KYR9y8DiAyHx4NjnbW675YzwZ",
  "key9": "5uzxEJMpnnfsQbaVPend5juvBcQTrS26b6LNLFctpdsbjjok8ayCokLgDzFjzmtf1Tw6CLfJJ2GRFkYiYoV8cEfu",
  "key10": "5jxJyrhGxp4RT5iuhksSmjVZXt7cr2uFSmUrAthYoQkJPe8BdPfeXgN9GCkgqxT88AJEettcsYqpycnZssUwPFn9",
  "key11": "2vibPpSaV3KBSqKj1rj6f2LiWZQudHNdv7a1FcFRs2zmTB7SpPE6BVvDowUC2DFgHjF9juh3TxwMHbNtUQP4vRy9",
  "key12": "2PbdS6sCd7hQ2Xg1c6AnRQGs3dZeDLd6HGPVHGjBk7cNht6jjrn9VYnDFCQm8u5v6n9BSQ6GgG7BeSR1DxoaH9GW",
  "key13": "3CaKpk9rojh83RtXmEQFXwtzAqoeuafD6qaUfVERkDmeo3caQJJEET9rdBnD5a4Fr1h1qL36NwWP1jaLGYC9nZUD",
  "key14": "77aBqUuLrMrZwj3UE3dGwtS8Wgz9YMdGKJPwYbmwcqSiGQHcFnXwEKUKiZkaaN2Gd8xUq7WwmVi9FzP8SrPVqKZ",
  "key15": "5JuAgueXangBQySMaqh1iE6f3RrcdLWSMwfnj8Njt9QHfRbQFzdVqAsdHM8N6mcH7cVnW6WXHYLAX2yjG1wiSVRd",
  "key16": "37tdubhveduc9AfworTmbTEcHYTtv9DLFSmWi5zBUB8xWwCqQ8o5jPMyoU3tYfM7kVpgUT1h2utSxNZTk7mHcihf",
  "key17": "5TrGK81HrifrXi2BaYomVxLSVEefR9BwMSaeQZFibNgMvobpzWwxmAfrKN3NpnGAccJSWczxpJVEeC96hUuEWHVg",
  "key18": "35HG3UznXt4oRDEis4vELu2RPnwfVLC8QD35FZa8S9i4iM38B6DqMnuJCwK92mPaFkQ6EiZ58suGa6uF5TedtdgM",
  "key19": "5o5uFPw93EHK99q3N1dk21mjRM6nFsu69bhHifXuaDmtWrbsZVScuGzPwZb52BSJCYMrA4dAzU6K5xUjoEmoT8MV",
  "key20": "2N5P8PTEJs5bfDcrvjGwepR2cbwSxzLF6wrB9j9FT5x8mdbPcohjnzJmcNJRwkYoHBX5sh7ZxASjnfeFVWdgXPyN",
  "key21": "5Pe6uG3JrQqCpAz6Zm5mhALpChAysoAQ8DDG4hPcAcz5gyTKskjSetoKRVVyzef6bD1QvZQBDVxiFKcBW4DJLErS",
  "key22": "66vdQrvXM5Mg7mNrE88cx9E6rgrtrVNwwCnZgzBSZ9G5TZJUmXc3UusnY63jmgph2b9feXVAtFdnnwNPviMyQW8g",
  "key23": "5QvbHNRhU9VquPKTd2iG4y531G5mJAc5RzU43vrt27xN4UAYeYbaNLGY7ayNUwz4Dh13gJXczpcPVLhDd8mN41JM",
  "key24": "5qJTexThoV7F3wgvSFV5RUWgWVdf4a8NbJAwRqPopetipB89TejYo8pBGhngppAwESMbedVUyB1FhK6jq9LRpkf4",
  "key25": "5eR74Y8Vcrmz29Kq5h5iSytS6QxKRT7yGBy9BfEzqdbFFLDcwYVxxXwYVMu1QBrxy5WQvYp95EvF2HtNWpww2Gt3",
  "key26": "3ejLosPPvu2TPQUQrLnAeYx4GxDgxLMKB36bnfTsiMRHTPFZmSox4C1DHg8yoh49WtiUKoXm4yNgG8ny7vBkwBBk",
  "key27": "4tNd7zkrN6LQpQbzf1mS5XrjcdnrGeWuZc75GfDM8KsTmq4Y2TqUGnZBq9wjWd9mJgxrWe62FQJo5BJeahE3ivC6",
  "key28": "1HWL4ATqYngb8MzGdbMmyp57pVDpf6P12XgXQbtuocB1LbxxwHNjEU89xK3XBaKu5sNyVQsoZyGFjKqojztrRYY",
  "key29": "4nnXj6TQ5GPZvkRMWcwvWxVrtmwN5pT1iaZAop3f1mgUcyEzzCnfaZ6MUNzpkJBD3aBzFcNZdB9by3QiorWKRhkf"
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
