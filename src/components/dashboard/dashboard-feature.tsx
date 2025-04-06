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
    "5Cv8ZpJnph3mYMaotqbaFf6iJtCKJGmEJXpZFjdPJKp9hwRksR1vDtRi8obzgE7ivGBXcAgVuwQmq3aAD7YKBha5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qQz2yGnKrHUTTdXYbbZdEVvNeMYpsciJKr5ZBi8yDb1Xnh7nzVxu6VQmmDsJ9Uu3YTaBcFmq3LUMR3pxk6KD3GN",
  "key1": "5PnmEwXUXSVyvR1Bfyzw2gYPQjDHa2pdxff6BesG1T4DgHYX5iBKpv2C7J4TbJvK9jL3V9fL8XQ4HXx6uq4BxBmo",
  "key2": "j8mhcVMBDJB5qR3fzCLC4eMBXrTqB8nKTED3YjqUoz8o2ZwWB37SsF8xDyzrZNX1wFdK9w8Zyi7hAuJDdEm7Tru",
  "key3": "5S9ZGSL9NmtZy7vXMcrhSsjhmspMHpV2MrCGusFDTisGm1prRcM35oUeEnyVQEdo94QRQZyHtq8QSc5rZLat2n6w",
  "key4": "5RyUJmdCbyDRhK1R9saLXirWKpsqXFC5iotYRiGL9eykWTcnqjvCTgeNBp5883J9JaMPdTZ6B8JCG8aU9bRTSqBw",
  "key5": "2FLRriW3L75Hq23oMaQoZfz162HpU743UyqiQrApzVgkD6GiWDaB3ewBiPPcifqPy3ogTkxgCRaqLwnpBF27Vreq",
  "key6": "4uHt6cqdhXfmjzc7AAHtirQMPPpfnNoxk7WAuyjurCku7atYiMpn2odAx6P5KXSno1amuC91axxwjbPy2LGbookG",
  "key7": "59WfsQVEFHNAmc1RJD2KVmKDsCNEpJusth1AQSQ3MDmf2fF3PVn3ik2BcDENKkXynJDcrtNiAzBgxZBoUGPSNxQG",
  "key8": "3JWyzFHWtjP2APjTwTDkbNGGosx8v9t79QoSjm4s3hFwbL5qdvbRwNiK9VVhqfKcHw46qk9rpAFygCryrRQDR1g1",
  "key9": "3ofvmoVHi44TwSiXa1p3uEbepm175MsSCNvxobFgGgbi8vLfDqKQ3UBaqYrKrQ6BaMugDV1WMFsHPUZhh6PLuE8R",
  "key10": "4yDiEqdSfjy8rontBYnrtmL6PSZihG3F3JY44nQEZYxNAwVfBGh7iNdBLf4BjhKn9Kfw1hZUV7pjAh5Kjkyg2umo",
  "key11": "2swJm6CBxKpyPuZHZ58rks6rRD42FdtoAv3nEVU5BEs3akrZbngLggVqkoveMCYrAkVbWxmo4tBCpnafxev87GdJ",
  "key12": "aB7UUnhf1i6LEGbpmpxusK586ewvuoJPbther76bN8bRNHthbSi85PsHoquD7JHSBidKL5GJCAUX8Db4oSdqPPJ",
  "key13": "3UbL7kEcN9hx4HecCDFrrnNJTogKJ9rp5FBwhmakM2G4VqZrdT5BBaSbzYZFgnTcoiCVRsfCLdmbZ31EiBUHjeCH",
  "key14": "4fzEZYmjomktvAZJ2f8cNWKfFXgEmLiidRYJaMu8zp9khBG7uFAFAa46RzkTgJnWDg2V2d9t4JmC5MSRoSXAcnsh",
  "key15": "4SpsKrN19Mx9UNGqg74CAf9sPw7aMY1uFcMzUgJxFuBr56nwUGoocewbZ7BNhfRWZVGWtrEBueLb7exfM9uNJB2a",
  "key16": "1hU3M3PFFdDapr199gYnEJDqaiyTtiN5vqi9GzGyT1dgk8R1i4hNoEybr2WaZjVsQSGcTas6GLzLVdCcCze75aT",
  "key17": "4qX7YUbw8Ch6Bz2ZEctagDMngAULJhBbTfusH81H5QEgFbruUs6sr77Y7aPPSpMpbobuK72jzpkwWyVi4fYTioHr",
  "key18": "4d59qrrdgqLcG5Ap4tWhAPxWu18GSjCkSmwaRUcanoK1RdgtEo2niwA4fFKKuggDmZiXaA28o19SdBFXv2LfDdSP",
  "key19": "66aUUVSUgZ8vYiCKKhAHznfm3VX9Hx9YUQeDC2dJ9GFc3SMjDKaotTpYNBEEeLoKpWuDeXpZ8WvGK5iL6oKAWm7y",
  "key20": "3zvQBnAw7ZK3Gs8mjoqC6GDbGxLLu6ZgaG4B1PowWeBpbkGJpyWneaboAifzsB35H7VnmMyHKeWhJQjxfKuWxFxh",
  "key21": "3ydcVjSc9KE3FZyKjD8KentkMRMaq295WoKSw6pCRAcbWHHMiiUoEASgLLDztxBoNNrZBZV3neqqUEo7Ly1MYHsj",
  "key22": "434j5GqyNJ63YStBqyM9B5WYCbQnheUNy5LRexqA5GhMbBNMy59t4H2YufmjE3KXj5UEnMCtfHzdFZNTZ2tyqUFE",
  "key23": "5ndD6geX2sXrZWrVgM9DnJHtUmNkjWP5DvPmCUFzhvKUEkdCgBykbtoSX7i7MDDLNGUZUtUqL1LsjakpBEYViVVS",
  "key24": "2qUD39Gi6RdzXhwDHL1gx7Vmvug5PeN6Z8YCo9d3nY8k4i9kj23VU1undVZYgzp7asQexQFJCkf325r8qPYrEXT8",
  "key25": "667NM5PVuTk5C5BqV5wBiAnui7ZGzKKzg3FF2jZ2Nobd7yX4NZrijSv9xZ49W7CfpC37URF8DHLEX8v5GY4UDSbZ",
  "key26": "3Jb5x9BEuHWAMUfuwNEwnxoJPLouq3HAEgjS4NBQP4voBviupX87PHN2BUcGGZsDgq49QBKjcYbkR3neXtTaNwHr",
  "key27": "29jV2DfrVyup2RbxgxHjvQ89c9y1aEdBRfiYnQbewspX95UPqpUPMToeGSydW4EMyxJzKNKrRtwq3KDkDVjpPyjg",
  "key28": "4iCbL1KCQVvFEodAQkiw3UTY5oZeHtdCGHP8k4N1kX5gvdYKEcjYY8UaV4tKHqLJCwtezr5ep1nWF486sUJeuELD",
  "key29": "4bzaQb8ctRRqVLbXRbRJuxM6vjBQWsiavU2gvnhP14GgPpbVH9aUkvvSiW473AuKHZtYvcHnPJmKh6AWB8zovDaC",
  "key30": "m2p7J5ybAWijcujZAMDShfFnGaNxGPen1et6DuYyMzCafNnNBeubqXnRZZQ6ggyKemC9o1M7CHumqryYu7Wfmod",
  "key31": "3CrrQLWL5Xka3RcmUzgaaFH5r5qLCyAf35gebHreq5XqPP1kPTHZAmaxwKhKfm6cCjf6VFdxkuJiAZi2RaXtJKYM",
  "key32": "3FooiCSMMcGGpWHnPyLQGgarTGhGX5oDEney26NsLK8TtmFiMhoFpVG4aAaCbQSXr4KC71wKVtCMspB5rkL2eqqv",
  "key33": "3YkzSQAijPnrbvZHMvWAFxkUvJu8bm3JvmAnZBaSDN4jHT3mjnkb949hthwFa4pDW6mgs5mXiuT2PXJjGTjXNpx1",
  "key34": "XgaUi6L66GXeMeJpbiT2cP7aXKe8B9MPDBViNMusTV3UjxTu2smbkWZvTMU4aYPM9nJgW2d2y6Qtc64JmUXRqFF"
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
