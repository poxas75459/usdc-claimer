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
    "pBPnx8FD4YYxvVHGejFGYgp8JoFq9TtmPX9rk5hEkq2ne4roaBqcysM649Z9hmgV6YHv3Pc8AK1RofvpEPoPtUa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yw97rHSr4skfWpfeK6yRaSfjEJqEkr7HmeHVwRssYj1oAyZdzTPQ7gQnrUH62dMNzaoyhPe5G5CaycB7xV1uQFU",
  "key1": "3MyB2cNkmPyebmwrGHZPzZ91MJwKUAT5Djh6c7Tqc6ZKgkqa37jPL4Sa1eABx2WEgTKQbpkfaCZRgrtdBT7U9bdh",
  "key2": "4jngyv6vNnVVoiUU4p31haaCjJCCJu9nkNrDzrb2oMD5Zn2aafD18vC82cBBsjwaQYbzkBZvSDtjt37t6nVQvhx9",
  "key3": "2ELWgKQNbu42nydTCsk4jwUH7dy3BYptYw5aBBpcdQBCwh7C5rzbhjW9juMcbMh769U2sTHoxugsrH57q2NHPQDd",
  "key4": "zM7UwNEePLgzeuKzp2b7fwof6KVHjSs8bfxh5JoPcQkAy4nQZHeA1R3YFFEyAtXC5pVsZNTvtmykaBJ5rzzcCmp",
  "key5": "3GCaNnPkqgkyBFpAm3H5GiUXNvSuq4pufXPtoEtDxNDXXah8ndYM28zBdTWAsCuD6AJuoc5VEx7VbpHzAvruVWcH",
  "key6": "3J14faUP5kQnVYiY8yU1jAW8dboUbjFu8DxezBmKWgsqBoGWngzZxFKGPDkeFHyDX9MGBXwpCyDSgxqfd6uUHkfn",
  "key7": "WapBuzXVgrarDAJvK5j5VCKUpoL2gpqiYV9EsACfvTeUsZrqjRghkQLxNugLrUgwU4R1t9vLu6eiWg1LXaSsDHa",
  "key8": "5Vp44ZCBeqt7LtV39jZHQGYH8jh3PihMxpZYbFkWFMk2RBnaAwMze8MAyDxGMeL9GbHuPKvXToY9BHbEYfSQECoW",
  "key9": "3GVGMBzLGnNZKPFhHLtSaZnknBAeZ3B7Z75KcgSJyGcx1dmvHWvLKPVsk1eBZDYHEnVdNp6eYAo6hSXXzu3QHKyU",
  "key10": "62RUGfw9g6XCEgxmnMFuv7u8uR4kA9iEGntDh2mMXPHUKHuvpTDe6Y6sSZ6cubxApoJwFpYeRQR6atUWirwsFKaA",
  "key11": "3auMpLfxrrQkCeAD5okEVveNqHsN68WwdaSgZzNBcdipbaQQnLusykKTgxeLLnEcbDZuPsHoaEoFkwxBZyawyqve",
  "key12": "MLkLbgdHAUbsqRrwuZjxUCasDsoP5S8yU6z9Ut57xDyA742PmLTQ1DUTYr5VbFt4fggApuDUHgVwZcPR6NN1c5R",
  "key13": "M2Dccbm8SM4ur9AASzA7fwjkSbuPxwuA8ZqL9oMHXJdA9YRXLspVBKjv7M278mZfUJDC5eZSWQbes6EkCMtEcVh",
  "key14": "kJ3hxJdgKty8LEMS8yP2NDpyh76qxWdF5GWbN7gULd158E25CL2qKBjQB6r4RfdNr1w9vLZdxi7eUBRuAurwuTL",
  "key15": "4tpteoC8H1VLTd2qrGX3AhwCrCe9oavZngjx4Q4mvgZhmA2oNW6sbdVLZbnqdUKkwvv9LSAcY2a8uF6WBKxgu3QU",
  "key16": "myE6NcepJVCVmmW2cgbDA6z3dNWadEUpsBNBasbtjG3kMrS8TMnbvvPJF3LJMSaHkkMHChbxB62dbk9HNrpocjU",
  "key17": "rxft6y4PiesuXsgpBXXkfyNTcr2mntmoueTtohjKiqEQpD8vcJrio6hHteK7ozsuN1YWPW1AGs6AQZEMV1gv1kF",
  "key18": "3zzH1imQ1NTXNQPu92nGJXzrAyRsnmovyEbBMFa6eSQczPdHBAV8y46S6t7g4TWPQyL9vwQQuGbaeovm1YNMAZvS",
  "key19": "42cUhAJ4AjfDjTUmn19rXqTSWb3Zh2YGCd9nthRLYQ5bCAAYgy4Jtmh654aJegE6L9AwpMNVjtL4eyyKT3g4QKkb",
  "key20": "kdi3M4RGyuQBQuBFwesrYmLt864oZvvF1FYnjrXmXP5Ci2u5Z9vFcQmqqSCxfKTpz47b5Y8zgVYKLEX3d7DyqHe",
  "key21": "5tSC6ZJHfsadxgeJuCPrcfWFubidmd8i4hx7tfppsGQdqc7zMLcrp1xURVnasAosomNAqnswVov8cf9VPKscqzUW",
  "key22": "346GF3MrY87Yscaes8cRr9cnyipuvavYh1Xz4yJMckkA8my4DtgtCG6H3iQZQfrexJ1J3fv6vtDHsdhTZG1F91Bm",
  "key23": "4f2w4WW2EgBcm4GL39ZNYowzBGQPYakkWwrWEstQ4c6kfo8VGsQxAAW8QmUtgCzWjAJcxDeEah2vdJxukgoE248y",
  "key24": "2g46imMSFR1c6dVfN4DnsMbfXY2xYAjggsXCxjKkG984PNpWBTAjD3QaFmcmPP3Lf7YRdTAaogamrhhhYQhbkX1G",
  "key25": "3qJtBX3pxsbhQnEk694TWThCp5ZuMvqWZPz1CvdyXnwyyZShYmah3tKzmqF6Hkww5eoY7HTF7qnmgpd8gmFpCGeb",
  "key26": "XeHjGEGSCbfZQ76AR54SFuQzkE7NWdTt1takWeAVzjzoRck26ZasFA5T3cMuqWZDGQCyjVkkqf8GdbSvrdp3Yyq",
  "key27": "2p5dsTupFrGfmb43Mr8gS4FwwnfTcvQ5FVpKXhXXfpUhg693cDEzNZMok7Dcq9JxGz9ik9SAMnJabTJ8Q5cUqJbZ"
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
