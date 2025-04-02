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
    "2AeQvdKt8DjTBrznS6LxS8iYpgs1kJWNjtzGqiVc3sRXf6aQRkYXbBuaR91Z41yzEYG6bkwX6bPycHuy823W3Wgw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xWfyJF35VWm1HQzYwWUobsYhDyu7AY2dUrqDFF2nGbztxQpyhyNTRaonyFjXUi6raooU3DhUgogc28Jkd5A4Jbv",
  "key1": "61a6dgTtkomHDLnqxyjmfHXwr8u6kuvFoqBTw2bVjiUZzNWTEBCibqG24sYxNyKyEziP24d3EJZyUAR2xEEEesPH",
  "key2": "2Dgd9kcY2s4fttcoC2cfTWbTSPmrfLV2oNrxUtnUAZXWJKf2iCxaJ8R5p9jx4Z7tCSpsnmVVVJhNmrQL2UAhsH94",
  "key3": "4pA1Hr6qvGud9yNdVT5PZsqNVi1JXiHUGHBeX6Kwb76Anokb6eDVfdiFp7RptF3YYU6xserhh2LUecVcYRLf517v",
  "key4": "4RBrCNXsg41xqD1Fh5veLceDYvzQea64VgoRk36d4HKnCX7yoskoEDE4iS4mRzBHupSye1So4KmTHx9dFNLxGMYg",
  "key5": "5HGwLLNF6dLbXEKKB73PoMaFEzcff5wumpXEzBjWmXshbn21F1xQm818gm7spLuASBWgQybsdH6m3hnd1nhxJq2V",
  "key6": "2bUFGGkCTckAB2gAxc6euwF9A9S7kaUVFtoDLfmxQ7nQ1UAhxdLaepRU6Jm6PaFmmcRbsPvBLE6d5q6dxR1VsJav",
  "key7": "5PrWcUxMEjSbRMo3rtjBRWYXtozKfBB8mzroeJ6oDT2XJmE3DPoDhZSkVQLpnf85whE1XVBD9ZUCjiAdRBrGE3rb",
  "key8": "Q3JvfeUFfF6NhVbvq3GQCezYXw8gF1qYJnjsUARiyvYSmcR8aW7EfiiUn9K5wdCi77pkQiuZDm66dSDwVtsXJ6J",
  "key9": "5YsPMNAeh6mJtsLgXDSaYJxVZ6JZbcbGS3rG1Rof5RHheSgyqNfnjFMQP1ZYNh3Lsfaq2WxBzoGkzqREnDiz64L4",
  "key10": "2rP5MzfyfsE6BCjBaLrsPZwFHTyYhdwmE9y3udssvdEqUzYBeBx3uH9aLqEUsoHsJ86FUSaZTs7Vi1fjgT4WyRzT",
  "key11": "58hE7mYUjxmWmxDVXzuNVGbFvgAS2QEKZBpa2AkPhC8sJ4BrcpUuVx2hKBgE48FiSnJ3cWYjpR1M7yEy8vLc4nDp",
  "key12": "3WPCEamAgVjZpX7m31F2TeHVypiiP4m4sjvs6w3gccABX97C8DLhBcLKvg4miW2mL6ViUX27FN74jCXJGs5JHmMN",
  "key13": "2Ux2LJvvxRHzNwfe6UEJHo1HV6jApPnDf6W1h4sjsuaELrW1uaTFucrN5EHwqmsaJM3JVCwVYYdGuGMHJjQLkrvn",
  "key14": "mTqh81DsS6C4v7KRHghBgY7vxJBnVBx4dLSdePH2tEgB1j5Dvkssxg5fsPDHM4eWyrk1o2thNRMsxWAtoEfDHNn",
  "key15": "5bNcojobJYhRPozF9Brv8e7z4gwjUgiuCNm7oYvWpMHa4NYAMLZ8W37VWLQVkBx8cdYJGmbd7SFVAadXThTsD7cS",
  "key16": "2ZLeoB6DcPCGtMNKCmFJTZQuWsCTZqJxk9LEDVWh95AkEKLnULxr4QJm6VfXAPzUy5n5WxXJSmEYkZKccQ6SX4qH",
  "key17": "inKvrcPengvq5jah5A57iM1XhavLweMKiU1H4tVdDUaLRxghdEYp79n9sV4Pdawx6My5NhTUjXtGEvpDtuTGXXR",
  "key18": "65rGJEbFJanUKsrMEXz2tm3Mio3GSQtKSzp4Peb6oBRLPcnRE97kr4tT2i1sofutMZH4wpDfi9XT49N3dmBhSTm4",
  "key19": "4LmpSYqcsCGXaBVNGEmKxhFLCUVdXgRn25irgkvnhMbgpu9ZL9yHjjKbwh6HC4WPfNyiHCLTjWpW6iHrRDrRkRsg",
  "key20": "4f5mHkdbDcsGX6zfVCUbvmp9BE5kNR9XoAd4fWrhjEHDY4Q9d9hyaZuqJdaUcULLSpQAoUWtZJSXkhNs7N8msKEC",
  "key21": "4jB8eUiNkyKbHd4yN5peJsR5sVkPomjhzwerakrWejrS8rLa8dcm4ENUjBa1d6bweo3wbu9xB8HPfSVWUcQwGFar",
  "key22": "44iAsfNn5U12uhXhEUfWH9wuQZrG8Yf1idarE2Y61nLVbZZBh4QETBcsvqcrPAWyJNHtcJFnJfvWH1veyUumEaqQ",
  "key23": "3kb2bLbmeoaQM678aGmJ863ieP357fKzj2Wxj3Zg82KX8XKaRb6ExWSBnz2Q6fuQJQE1WXnLgVcKfYoidueStN3v",
  "key24": "2kUJ8h32dmYEG8kZfjuNkemvEnPvvmQRUgJoqWSTsTVnH9kYaXctzLh6UtnxENNqEmLbnobGSfEwHHscKRkJ7J2P",
  "key25": "2F7BBBcBdWv7rM4CsKQign8G5YrSYCxJN22EbZDvQJDusAQfN9xQMdXZbr8pJB9Y6Mdp2bFv8nwjqd6akJZfB7Eb",
  "key26": "3joy9V1zZfwn1zihsfb5wDA1fEHZ1hjVSbGUNhp29LTq77rBTKS5THNQK5pSQSijX4uQkDTjGgoXudL6m4uUjKWT",
  "key27": "3WPuQCNrpPk8CEHocbqVL3uDzqtnovwVugiUrFSuGrhwS3XjmP4k47vaQRxfKYuTe9q7JNy74nhqMVjpshSGupap",
  "key28": "4qm8BjACqiVQ3fYHb9zt8qtZFNKfxTV5FGWhZEMFkKFTGz1AqwstCYCQJ1tbvyw6bmAL82jJ29LQsLUSv4nJGBCA",
  "key29": "5jcxhiGZ5uZ9LFc1aWMk3YZeXCY4jrK5xSdAcYzfuughEW24HtZYu6vKNnu2u4sR4EDSfRVwYQJ2SP2HTmrcpcLf",
  "key30": "3gzCGWK31QbuY2q4a16KH1ujSFFQUQtWAAE9qSUo8eDZ4eUs1khEMTLVXMPhJWUrrhqaNrioCApoj27zdNgAEbDB",
  "key31": "25CHNkH9oDcJBhrHkXwXoiXDZgdDSG8JQo1v7P4nmiT2SsfwZB4f82L5Fbqb56TMY8Yfjcd9NESpZeu6Rr41nsVa",
  "key32": "4Ajyfp8Le3zg97gbPMw7Dyow9tR3etUhXwVyNtwYvtdiAuQntcUgoWh1qMxXRTW9nQEUsRfvZ6LtYnMFZDgooKJm",
  "key33": "21sJHzXXxEDzhQeh2bRs59S5oUTXBVQ2PqbCFhHhL98kKUSeYjjpyV7GNe52BWJHFwmxm8VVJ5XXuqxXEqXDythd",
  "key34": "23axxt54XznaZgxfT4joedzkrbv1VfzCXtxB5NufP5rE8SwJAqS19rsVCiQgwn8oTWpg4KhCz3JomUe9A8mZJNw5",
  "key35": "5KcekfSTG893qq6TH9xvHVPacitjc4MPnpNXxXx1EEoVT46ronsdcjAykC21PYoMh1y1EdkhBEriLFYNo67Fcgu7",
  "key36": "2YmxofJYzYJ4kygocssBN2SiFxhZ3jKbXci4Y6tor46gduFh1nanimMaJ4228z9Hup8PLjGcSqSpbCkkSJ1xBj7K",
  "key37": "5TpcWakVkS32GvTfJ5j6xs4sFJ9sjKvuWzFg4HYxjt4cdL2Sqkvb39LatgWtZDXQDMcwGukxJZxcxKVsdz5EigMN"
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
