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
    "4VqhUWuxWCXwBm8rgZg6fWxGsu4zLxFNvTB5r2Fki3wt3nhfCJ19UmifYUq1QS7oFnmeQqx1rfNuDmA1wEgPXJk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T5q9Pj7CqxA26MZQi3kjwooWBcNUBUPVkpJA6wvAPCbNxX6j9g1FqNUQ2UfcEXbeQUocJfMMSnArathhxAVYyHF",
  "key1": "3T429ixzvjsii244ZGGmaGBSp1EMaEzFAokmiCrGrQkci1JTeDfqwEXF7YnXDNWrCjDtMAmpdGFhTNmZVBdobGB",
  "key2": "3RTTkVQoauwroxLh6x69umYbfVNkBi4DHMbjmNHGPSvSec5K4wpPDU8QNBwx16STz4uumaA3U7UcHhWb4yeaQTXj",
  "key3": "4Cyv6Yz6eTLRaT2RhVDC6NW5fDMy6i5hqYdvuiTW16nvj63o8sLzDXVLiUzxytY1C8yz2n2RhY1Lz44DPB8bZ9W9",
  "key4": "3WxqqpQusP9v89Y7in9PTXPBkZtV3aftwyDqJ1ES3tcbqHgxuYwc5veZVerkFFJ4t75aAnnM184jT8xfMFZKBttX",
  "key5": "33nm7DT4Cs78gbqrUtBDFQS1yLYCg8g2WJiXmmLVegVaUiatdJ8EdsaxpUTn8SNpUGFX29xqBEd9Sj66hyniV2jW",
  "key6": "3edhhP7wQrgowKXrWq1hEvd2yGqaHxGE4k3DpKeePj5ftMbfRM4cwqTbkqQu3WdQw5KYF5rAbEpugDLamgWovzeR",
  "key7": "tmfVoKZmkXgf2GmNt3oGHnH1ic9cKY1Ke2b5oqGqVJC5rq1UL6oPoK5rsfvNSXsUaP4gw6rPp7DFTWZCEyCS37o",
  "key8": "3KN383HBdphKiHXAinxaCJD5EFoCje1ZUkiwH3miVqtd6UaxpuuSDy1p723Pv45fLRgKhGKPMG6dVSpxPeauxbyj",
  "key9": "4zHnny8EKN122TCG4wjUcJshVaUGcapGiMK7Y4nVyjonNC8LZCr6fQX5P17QpBRHMG4RtwDNtJoWrE68iuqwJFEm",
  "key10": "2iVjiokF9PP5MBGzGxoi7UmDCaMDKdwMgjyR8scs1TLhcHqoMKHdcrqP8gEr8me9zs7D3H5M9SdrnJjGdrqnzbpL",
  "key11": "4azV9z96YiPWdkoaCmJSUL5h9KxB7VjYDUthGkN1Hr1xJu7SSkoHAUDcQonZGUK5Nftg2WdLbduf2zCayxcwMZS",
  "key12": "5Hy4m7zQbByFgJVhsLjrtU9iovqdYkpWsafz6vZe3nkWT66gHXGbv6gNx6EwQf1N2ms1sKvMh9VjMDbuC8wnrti3",
  "key13": "3APeC1MahGr1KnUAyR1Es83Caz9SbXjV62R7Tn6neoRZ6arXSpj48QLPDrgzPdjfboLESZgHZiemJvbF6gehT2qh",
  "key14": "3W51oHskHyfwf3oWqfediFbRcoyVP4DEaSEpfXAdJJhFawyQVgQkou9qtuUScpueCexwE5eSfutGSjXb4tR2C1eF",
  "key15": "2zxZNXeNXJypRJSSkBzCt88XHHMeDUJvcP4ouSizoSYqkZEmasAH9sFvJnHx1B6Hf94mTknCVim5Z4QCiF3sMkjX",
  "key16": "3n7XiuqDJnwXPcpS4jMLVyUzds7LZLaTkFA3RwgUtGLe8TN39UfQSrYtQYYnAwp4yUHj1DWeJLLEKPPVcq1XjpVz",
  "key17": "5o9LBxTC77eE5PYt75WVbVGwREbFwbGKfm9Xm46ypS4rpsoFixdpyrNt5j9TovPVvuYCPacnUQHsZZV2JDG4zgBh",
  "key18": "3uNgjpNvMhhNpQrLMCpgDztqZbEy34fNiSUiMcR3DUGfi3YZnWq4HK4zpVqUVeayk1SHoxrkgUU7AjmsogqCB6qR",
  "key19": "679ZYU3p3W5V3ko5DPyFU7xCMcEg5JPEp5CEuDkjrjTzwBzX8x4W6CTAhywbXFqqH6SevhQ8yEebsL5bD5zHUcFC",
  "key20": "2jLbU6voPhzpn8RqakunrhHjGhDV1rYez9ubyLt9RVuGjd4Voa2YoZFoV4q5Hr9zZR8MpZZgnyxBRgZpJxPKHHZy",
  "key21": "6o3G8ebisJHCfjE527kQAMU7vK1EYaHxmcgAK4UeZT4zyrMUSg6LxGHkMZLqtZPDe5SM2C6hzhEsBeEWAkEMuFR",
  "key22": "3gpHiB2mVeaMQsSpMzxrZBh5pVwFknPmRPvUWKLSuvLpShoLZjRfALgncZJCsKtFbCgG3M7TxZzWrXmCA8Ao67p3",
  "key23": "3LrHsEgrY1ZKRrp2u9gZWQECmSSqbHhKUJ4AUhBx7YEKaSvzW7umWCkWdKhiapGUTKeULZmDcGVVyZEmmD6gPhC5",
  "key24": "4x3pKq9m6XJMJmUsJxNaczCPtEaXdVVVcnkjRpyFv61g37uCGzBXBXLDpfhBwEw7GLQnGFjd8dRJTXevwxUxmXNz",
  "key25": "2abe1LViCRMAKHsxF7VEHz2dW7oqeag3USb8KVPiUb21waQnFHC3hq8MD4U5ZQBF9bRuPCrTdLrnNgQYwnvc9myC",
  "key26": "5qQjXBQrv1Ren7pw7g8i7bK7GTBThVURG2eh1tfzMASK2YmC3HbYhRZvAFsx1ZWhcvG8YzihV32ABfK91sWmRa1B",
  "key27": "5HDyaPBPNo45ctXCTNJ1cS1kRXPGjapZQgFGMKSWKHDPgYMh1L6N6PktoYL4hcEydZU3BQzoffPE4XnUGpkr9G2J",
  "key28": "57GBdwApqhMmsv71qaaPg82D8TmxCAEDk1rz4K8uvXUhw9bwnHKRFbnQvCZCfrUyUKRBUx3jyWdVTB7n2DN8D69c",
  "key29": "z9s3w9ZwSpgKxNQHTA7cyMMZU59hLEcKsxWP9r1iTqrNQM43Jw2puWqYnsYU3e1x2PS9Be5QzTFMko265p22Knm",
  "key30": "5BcU1QueEConB3MbHZaXgUUBTWkeXDfyNsHuRScwScxGK1WEQufG7Xv5MWDZeiJioenfTKX77JyzMj3cqbJNwa9i",
  "key31": "Jgv5U1xXp9BE3gdJz4V28RGqy682Z3C7zy8NLmJ9VkCt3s5XsLj4hJh1nM9hopWEBtQBrvz9oW6ugS9xdG8yUvP",
  "key32": "2EniYwdfHzSGjDKMz3oSQi4odZkHFYBB1Qf2Bzxu9EyLSiS2x3PiEYpMfqLDkKwZhkGRtCNUw8N4p4f9xR5ZrsbZ",
  "key33": "2ryGMfGQkoniedHFGNiYxGKhZMKbmSW8AXWb5LKe95DXW3DqnMNL6bomf5eSAzUQ12By3vQHdgbR1uTqaXzrq4vL",
  "key34": "52E3jiqn5R16suSLyzbEdSMNNjYT7WSxpMUu3xkipd2uZeUWJSPxx6L45rFXe9pJ1WvC3NyNnfuevs8WiNHcWZzy",
  "key35": "3B7yBZ7t5mcwyEQvt4GG8TDWpRTEgYNT5NQfWxzELmN6769cRFizP3WohEqAk7kwRPZbJHu7x2aMH6BGF3Sssew3",
  "key36": "2vBuHAzkYJQpcAs6kWiZM1Nsqbkf5WBcwrjNmMApgG7do21R3zojCaubT7VhaqyLDeuSeZgiDBWyNsUHShnNozE5",
  "key37": "23qwCmwDYSXZ8TPm75825c2foWZDXm1edMnT3JyVXdqCNrc9EGzQGDBLYkLZYuMJEBhz8gUDrHXf9PnrgugKibPy",
  "key38": "5hYuuFspt6dqNK6cxU4kQ7rf5SMorvBpLH4ShNub5W6W2QRPAfhkCwYffRkewujTmfjNqmDuEq5sDWbBSPACwjUo",
  "key39": "5rEMYFhVd4vcZ4c4fpBNCX4o49YJzSZVYjE2SfnZM2xerJdRjCaiQJ4d5hh8cT3cu833etNgrHkfAywvJBo2MtPE",
  "key40": "4z7CqqzD5JKJX7J9UpBWUM2ymMTbsPKgcuVxRJt7QgqNYVBt6MdFZmQzB69xVZGNc3M4DaCzmp7uyMwDdTiSucDZ",
  "key41": "2jXQPnR72Bc1F2uSFJXcsqaxTv6jPAHijaRCvLf8WxQxTnENhKUpzN2rcCdMBk8983nY64u31zPZyWtvKSCJrMLd",
  "key42": "3f1Er3Q1K3j5Nn65XhiTzvNeDPmKg2Ymv42EQ6gBfLxvSLdVSXifoFEvqQu6Xchk1Rzpd9y9qYHrw5WazU6VXdH",
  "key43": "4ZVmJYKt6JR8xare2FRsuguzVd4GXrjDFi8Ehwv1rWr7vNQ5X8ki97Mt3dG7esfQTiaFue22cktJt7rdKVaQwQSP",
  "key44": "4T1N3Up7f847gcSD4iKRUkAFf1aewgzAiqRX4SRPonaWBsZyDsoxgpBgzAgdZfX8V48U12MqY2VmYAwHYPegSPxQ",
  "key45": "5iFUsyRtWLxkGipHDFGX2vMzCLbRAnxveKMr4N4SmXp1B4B1rv5BkhzBo5Y4Kxdy12XAPPYXTMg9ABkoEJZsWEcs",
  "key46": "2kwv9YmFTH2j1TUKo8K718MafPzZ7skr1rKyfQAW6XJHNBtfwvbmRcXWvWfvUFuWV4qy6C6dVT3Rx1tyc3bLxiGR",
  "key47": "482Ru2mbpSvGRPk6VjAjcHzy2MvVgeYhUvBA19NNYSC7JoT8yTFmoQrQhouVvVxzki2fnGcenUGH2NDB5q5D4JjQ"
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
