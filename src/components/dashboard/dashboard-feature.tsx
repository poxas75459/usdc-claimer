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
    "2wFFDgUowU131xB7rQsXbrpdW262VacGqiQ5Nz6bBAGuPMUjKR3Lpf1fZ3w6wkZAQZkpJFFnR37RgG7Rd1Nx7sVV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65MTU7BRwBUBAnr5dAMACxSJApRcF7xZQcoGtaXCcXqqNQFmaeaHKgRf91DJcM8PoikvFoRP5JHnLTk22jJKMypF",
  "key1": "2CbJgVWsifcat81fPyorQ1GNF13ooiJu1eseT7gCjsu1dfscDbyKRVyR6vYBPJpbhBzkAG5qPtnGfEWfumCrt9S4",
  "key2": "22PVq81i57QsXSVri1nNewTnJ6Dqg16wUzC4ag6euWBHDG12HqhPcHH77ML6okFXrb54KjvznhnKnwysDSYU3qeS",
  "key3": "5FtFKhTQHsBDsZF18LtzmXuNErwEUdsUBVTWUBd4bZ29rd56LMncMAU4SF4mDrWwuU21z8wQJ1XyRMvcFLuDF5Te",
  "key4": "49BCUxMqTDUkY6B7R8oqGHsakbHpKh7F2jqF4LxsGQNMUT7erAVARkH4u4dLKZFhydkGkdZxyKbRsa7QcG2sx4WY",
  "key5": "56grbuLbzNLvPAHLUvgnjyaHHeXWufHTrn5J6UCj7yMNdmx4o75xP57Gb8EASDQQBCBypEy9biSB8ASXjg1BV1rs",
  "key6": "48gYnHJi8fbqxSE6PEzH8ER5G1DaTwxUn5ni7543sn9f5FMzv37nSUN1pQ4pcLN4pZP1szy1ydTRRHAeAF1KaHs6",
  "key7": "3mvNZX8uzQVJBvQq1WwgqCQgeq3QT9ipV44Wffv8hAHe4MeKfuadSJy1UVEEzxnTPr9a5qFaDXoAZjJ2yNw8Nfkk",
  "key8": "V1bWHQXpqHa2KFuiavSPBN2V5GGciEUfvkzo7Vv8FbkXKf14VDUpvfRGgYiFnT9XoEoTyvtXKcNaYf9K2FqBMgT",
  "key9": "4qe5FbSduLByNqTqyki4nmBx9Ww7S8FpcEVDek4dQeKJkxMgLoqTts4zDJGfzWZcLRX8CjMpZpNWgrLpjAGUpLgd",
  "key10": "fzRtNx5ptkpgqnYv1WhVEKGFnwRx4gA1Y3dyGGshN5qDoHnbReuK2qKLR2JKrC8wqChaVzCLeK2gTSDL3VpF3wo",
  "key11": "27T1v6FDc3DfzN5fXgyEPcsqagSzHGcHke7QgTFwMc3zz852fYhLQJazs18iwwYSwhdUrKbCyTRQAQGRbKQbHnCd",
  "key12": "stE5tFjEPPaKgaY3XUHQU6YiBBFWdsBmC1bvTQUy9BbjXxnPzJzBLwx6yFHHSCFW5PXqpsMXGzrKFDLWqBHYG2Y",
  "key13": "3SU5azij3D7iarVBAbKdKrt6PuDCLS1jkxyF74qV8n95C9XAkXtMqLD6pt5jEWvdrD1F5jMojD4fhki5E3hGEt2n",
  "key14": "33a1FLDRQhPZt5bqpkuZHNbaooxiVfJcXrECzSkvt2tVr58q72CvTPLaQwjwCJAo4HBaXi2QNqzYLQJpzw9Df8iT",
  "key15": "mQeUkotcGFiY5irmXX3UEdAvgfGxAGWZonuFg26QDwBUnrWj72kyABbAeTToCASmYF1RmEHvGgAsRP5St2rpNnk",
  "key16": "wTZi5eMyNSMX9DE9Ddy2XSGnpmAbF5BZ2wbvRUcmK2wcCTpSgwkxEeUSaQqV66VoNP6opCkyPoyKf2JxYL45yPB",
  "key17": "3Vyf3X2moRD8AgPbLB4NZKdddkdwXtd7x7RW4gxWaGdk7ukdL6edZ3jWPN4venfeiYWqMSgxtV6FzxUoXEX4Ji9G",
  "key18": "51SzfYxu8yu3ws5J6DidLjxYXFcVE8zGZzposd6445yjbqdxwL6M6ixRcWdBDsKxwJHtV4Z5EYaB7TJij1Y6tEzV",
  "key19": "2Wc5Wenoivwfawh8pqzDXESSG2KhBmdvazVhnAmYJN11a9U2UYDNA4Ek3NiAZUMT17WT4eBRYAqLuzXgXmmFeKnA",
  "key20": "3H4VVMr2RbDdDNZxV8yUimfTe6jYyfTkTdHtkVDnmhzjAvSVquWsxBoTD5qR3BmrhmSwmdupJf58BShds78ittrn",
  "key21": "2ygg9R6g56kgqHaTDVDZvSYfdMVey53Yn8eP6gx4C8y1W5GwHXk8GikHmc3dYx7gi46aUREBaykwek17iEWRgX91",
  "key22": "5Y9UyXnhwpYaA44AwuCX6XCqa46QMXsUCA61HBWpFJvhbaY2FAEbknDEgtzzfySTQheCG76YUsshyhwJdWDCpKXy",
  "key23": "2Wxcr2E5H6PNCtPvTex7DcH5TnUDWGRviY6BevcMHsDSonfqJfiu6UzmFVoNkdGtzRrwbV5CCSTdMdqCHTmnkxc1",
  "key24": "3rhTMK2tcextpNhiv1k6ZzrQEEjv6NiUEowjYtmkMpSraE723Q4SisnvLJTfqZEDn6GLTdXKVMjVNUVznjRKXMUx",
  "key25": "2zmZ44BQEh91ebsYAke9ykR7KhWoUDafcR7NCWCiqeCBr6f6xVdsvfS5i1qAa3CnQZZUucmrtaNiE2PJ3tfpbkre",
  "key26": "5uGXuGQQmz4aJTWYtrG52SvtDU34R5nTu6eJxbGE7LxHReYPEiBfXbRGWeRvLTk3daPPrSs12CBit2vW3N83a1py"
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
