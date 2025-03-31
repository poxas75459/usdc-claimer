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
    "wrdtK9g491eFSjW8dAQ6NwLhnUTZeRjAPao7YaikNgpBc7hHdeZeQkCvHwvQWjsK5h9VGcb7RCRoa22y8waj1Hy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZDLSpx55VgZEgKaXK628hkhpNJtvcjxQeYTEWPxiJx52BQVYkDnivVyYWCeBSJpspYzrL4tm8NKXEWqvUEiZykF",
  "key1": "r3cjPFWSDh5iJruFeKCcCMHrzfR9rL1fH3RDFR8AqTnTUxtaS9vXRdpqB9WR4eqotUms4519b2A2Dx46o5ycR32",
  "key2": "4WptVk3UBepwcKCpUF75k6NzDj7DfNhRDT7YbLMT92BgA26ba6w7G5wfFb4CQAsW5LaWHfB7H1Gz4tp1VX1y6BUo",
  "key3": "5er1a4kNZ5tcAVBdnfL7yDqkBBzeEmoBVtE5rYp9k1Lu3mWXevV5vedw1NcAvMdatyvnwsuE2tNfEhoDGaUhh3bc",
  "key4": "45NY6PKny688VRhMk54tRGCffGzZsBQw4Z6mXKYbaCcJHCz2rbqtDcg2y5u1dgEEzpx6abqQ79z1m4L9jpXnqTwQ",
  "key5": "3yCR1VDtXyhCWboWEvou2q5mJmo4K3iw7uiLbs2raU8WSMgYWRdzUwunyefMYp1ppKMeXcsU4KqxjUWTv81mhoxQ",
  "key6": "3wtgu2cXwGVxDvcu2gDKutP3RpKqhEcBMNWVoGLabesj6ZwfsqG16QNEG5EF5yRP3JQ2VTx32Svt99caaFzpBheW",
  "key7": "35KJurV16SQXSL4N5qKyRpVPbT4t3Wc4ssCaHJeaszorfQKrFJQsHCXSKVXEY3aAuNsjc3rGo326fxd7HC8RY3JV",
  "key8": "3dj83BEHjZ5ZPpxZj925J1CVfCgoUc1nrXjRCzsZpKGn67jtAKMazcJBoAxf6tYUhfL97GXFKRKSnyFFH6d9TLCQ",
  "key9": "4Wvc5tHzXi6AXGXHe9hh9x7Zzyj6H5DnpturFAxSEpev6A4FQgxeguCwBY5EjPUnmJTeE9r44Ya1u3idGDQmfWAn",
  "key10": "2ttgWTD4bKC1F6mMkmCzaYksHjrzo23M5DDLP3RzoY8HvJGaZDMZK1nwzDX1uFDWNFtbxr5Gi4xgyHFi5nc2EntC",
  "key11": "4fHxqBFD4GHU2hpQ47UcUFiZWibB7KYuQJR4GoQKsF3VJfwZqdsYKLJCYofrzF8XCXeEYZ6ig5SyRvWBGyoufpxc",
  "key12": "2tcF77bKaQPgFGquAxejoK16oZWg9AnbDKbj1t4W5oK2BXX5m3rRAzqwFXDKY17Lj77KZG4ocP4jBnGMe7PupZWP",
  "key13": "2WeL2eGdJq6V5Hadm2gGWKdfmXy8sejn4FLy9anRdEMgnmAFa5vbtjgr69LMVrmmY49XbAxDcHiemXi5AxyKUAgk",
  "key14": "3FP2TBf6Lwfiuv9HX9KsUmpS7EcWTmcRuiwEq2ctvZMvLdWT73qSTNgDVthBJexgfAupaAhFEfdMoqevFxctaD5V",
  "key15": "2mbZ6ScBPmVjVQoTo1amk6eexqucvwAkdhfGurtKxAkp1sAF7mqrpbCfStCH3VZDLeDH7G5SUNRcEXXXZiv1LzF",
  "key16": "5qi39rF3k7UDY6g4zooYPAzDvXAvYkpdBXGeN2u6bzvohoizvg93eXAgcFuoPpR6gL3Wa5bTiFGHWPEQffMBpnEf",
  "key17": "iucnVMGG9xchThhNV84egYGebj7Z2ZjcHMP4k7bNvPBm6WuXcZYbUEi55URa5kUyYJo1C3df1md93HvAyN26UTj",
  "key18": "3M9gsBAUwmv5nVmwfnP1ykZ5XNmEG3SrnaNjRXq4mE2Q2So8k18dknJXYfSvZ9h8tc71iKb1jRSmBvspEJ5hTv83",
  "key19": "5yEEi7THL2vjKz4X95U85vfVKy4gDwawR9tt8yG8GeuCsmgjoh8Bwz2CX2Tr2Jc13j7sAhThaF28EkFPpE73ayow",
  "key20": "2PkpCE4WUTERg5nhTrsE7HboruX4mRfeoKcmgK5M5p8nzhDLvdA8VUATdGM36jx8LXiWDdBgLEa1hLRTVNAyr7Ew",
  "key21": "sH489pPLeDbkRjsAoqqe5HEaevTwY5AqgUUD6F7uFEkf2DsFSEcMgJ1AjPXYpT73n3vZYYGMcPx1FVhrM7Y7XzB",
  "key22": "3ufvX1FAn78PWW9hB973NR4SaMLQQa7Gn6GtYakXnSBNZ2qkgDvN3FRHcasQ8dAWBKJNr5nn5n4qjHPUvzoyT3F7",
  "key23": "ZP2BCpPuDcmKbJaYZWvbP2k9rGh8S7Pek8RmPaJgZ5xwDsQsv5HuZQAcDDxrSzw6w6FcDxH8QosNsQYWh9kjUSS",
  "key24": "2KJEnnCFzRsu14L1NC5ak3TGVG6buLYroxeMdwd2B3atfx6YhG6BPZRdgYVkNuxJ94zPurg8zHUtBvXAJqcnmawU"
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
