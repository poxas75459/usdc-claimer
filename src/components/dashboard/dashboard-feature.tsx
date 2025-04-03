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
    "QGvwNRXjgevsnFN2MoresMdc5UJrjuxLcfLpMQkQLdJrmevro8kv4kp4DmLR2dp8YsRti9h2pAPRuifYhZ44nnP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bAbyGAV96qwXi5z4nqRz2wPTdR6FXuJEbcFYxd4ZtTNA2jnLpLobUBzPSkqWwqUTFEt9DUU45G6nrcRrhkokD9k",
  "key1": "EKu4GDLHbXcbDBKuvmf37iCNd4SHXYWG3oYpfmriAF6w543FtXhc4VUqh5WzrFjfGZvW2AisGUoU7W32zhdCcBs",
  "key2": "4jhaPy53ZtJ9vL3umAcUL5Ldg49ThdMx5MQNwK8XqmL63iXcJqSCE1kfnBvggsGBpvG2D6jGF9Sq81KzyA31nd2K",
  "key3": "4VgNcuM9fiLgomRrbrMkLLt8iSrcEwgM6P6qM5QoB3Z9YgN2fD5u8qgjP83XMzUN1rR8DfRuG8H6yzNZeTvtotfD",
  "key4": "5M7jDfhXtthcZapGuDxZts7U1cF3QgbqHqtyMoosM57PkuspBevB9dCv9AEmdR55TwP6K3iB43UQ4UM3smZPxFj",
  "key5": "3vf2hejg2tKYzht5UggWpYU67zjqRgNiepvN5349GMVS13LbnUmVDshgibNYa83bY8tuKXQGWtXqw53sy9RqtSnB",
  "key6": "xitKVGcXowEp7a8nptL4jzRdD9wxdLkSZ5ghFDLj17ZzrNFEmv2moW8XCFA1aFDNWTUiMmWnWJdX4hmEAzKRVVm",
  "key7": "41P6xmHLTNz19PfaYizG2qeBXLUAkixHvkwwx4LAtFCs3hGiJQwNhFXRP8ipkXNgENyoZcMQfwGw27vbqctmyjBf",
  "key8": "3X6S5RgHBopmn71H7YyUurJ6LHBSRcUqRzQ5iy7oQTYNpj6vbzzjQZaPJN8AqjZhHf9J4it1pVfjEzGeAsLSmscu",
  "key9": "59hAnXkzLwo7nx6aJsTT5EchtL9KSaq4Kkx2vUHjECAz133UK4ontx7xvh7q98fik8VS2xcZRWGiU4jtT8PDRVPy",
  "key10": "3EBXUcpVXy7gGWW1DYc27zRRmfxrVtbj9fJD2BA7fWMM6uPgEJfx2VynyMZZuKEqkaTZHFtfGMa2Z5Ao5Zdx827B",
  "key11": "4kHeF6KTn2LMat6u43NMVB8CcssgizrG8G53bh56eM1wj7K9bn5YBWyqotXGrEAdYdT8L8ftggNhBZ3MQXFZBRFA",
  "key12": "4DUVRbKV7vMWVeFwGas58EQWzCQkThw8sS9uYswJM5JHe3CRa9jCGZD6wED8nD9zgn9BuJ1nQC11kzUMFKSZDXBU",
  "key13": "a3QxGNvNTK6ka5rdN1ZsyRT51S1pjduURPMLBT7Dhac3MjF5jzvC1UqtmnTG4vn4KhrJgYqLWpqRACRm7LJcF96",
  "key14": "61AUMf32dkuTHTTDAjiBpEKZykKLPiwoTwzRm6R7eqKpttcSLUvCgsCqF7jM5VHAASq5ASAZns4rwevnhNSTV8mJ",
  "key15": "4Nx33bvg3rMUKv1TJKyNKHw5rxEnuoJBbLmTt3vm97jkDS3fcu8FHTSz93vvZSAEZchR3UGN2UkP7pa5fcP6VhDM",
  "key16": "3jfL9gJncDwfWNcPWPqpUrYVjSyue7a6GVeyLvegYLMXU4xR2AAEwf56iqCgePAovhESJJ3djFWPmBxx8pBuQAHe",
  "key17": "2EGi9wbJCLogYDycU81uu4Lcaaz2tzqLXQCwsVM8vcDb5CccQDWdHGtHtHPvg1u3giiovLTgebVKSnJvAkXgzAJP",
  "key18": "2tH5LS765F5yHhhDdbjDPFLG6ZfiXH7YxNWcuiPB3Wug4qeniLCUbyJC9tTKvSaSfiUVGaqHVE8CW5tTiJ8znEUe",
  "key19": "539BFE8bqrwkydv2wMKXTVH8NZEj7Gknn42pmkhPt1Y6UFpe8ELs3a3xtJdV2tpyccMgYfYCerG4Frt1QaKDdTMG",
  "key20": "5yvt6we89bSJvzah2GDQbns5c6rj8hFQFHWNLfoB2M9N6H1JN4D65dx4wpN6Wfq7tTrduQnnRxFMqF8aVaUYiuLv",
  "key21": "2TG3oUSvLBPryKeQWYzXX71ikTrxnAxXMjQDApNkuYa1eDAAfCHdcA34kVVzchzb5ZqACvyBgTF4oEBwu429K7mq",
  "key22": "4KuHyLgXdGXSedPHjjjtmK7U2T13ZZqqL39ic7Akg5hyfAvL9Tscq96EXq72CgmqSi9GBaeG8tQR7nQMuJSnThUQ",
  "key23": "4cGbvYupE8UECY11wEhukUdCMntrmncXtz9BBtM3SsPNW3GY6n8DDtkSUiVFascz7k6PvG7tY31pxcPmJhgebE7E",
  "key24": "3MJdg2TmSXTtaPdtniQVowgu8EiVHhNdn2eHiuNqibWhzfmG4qSye7GWAqoRaAjUK18fxWndaLoxoXXQDJrY1iDE",
  "key25": "5M2AhhBNWqP99c1otGz74bo5XnDdMWWAQEtKP6tuxKiZwTkM7MT79p4b29nxEPjpEpB8MSmrj6eUjAwX2rAuxdkM",
  "key26": "3JM3WpuRYgXwHJ3MnUMWsLJr2JeCESdSCBaDKwRo2nQWBNm1MFZbZNa5WZU1dxr8qh8fhuuTn5fkYwtMTNUo7Dq2"
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
