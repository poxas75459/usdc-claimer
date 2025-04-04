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
    "4xPFnLnzewV4y1Jz8zdRLim2abvye7QTSqaee4iUF4kfip3ipmEBhhQX3QETGnCrqdbCEXFj1sBWrcUxg6eKXCMS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27HffAcVRVLuZPo9aCmGtCv8dhZzXpuBi4hEpS7PrRmZvsqP6HhPWdpetSjrW7qh9gnvRRcd1pSG8yuXtR1bno3p",
  "key1": "HfcbWXdAxK1iQMXDYh91gcCKbBximYi74uWqm6P526EsUUQd4XJP5N3bjyvF8bLybipAMMUcfe4445Q6qjE96Bv",
  "key2": "624oXXDNqxSLqSeE4bguBgdnMdjJQ3Um6Rxgp3UNk8SCAw2b1qXLi4cAjNG2nMSxo3r9FyJDtvJGvu8zYsyf4KdT",
  "key3": "2Rybqy6tqqf4dH7tPrgxdnVM4RZFWzaCC4hkxayPQ7JiyXAJjU2nxM4TH4UA4nRdybh4mBdcWmMhaBNmFG61AGQ2",
  "key4": "4Z45FPFx4cm3pDezmqLYhaKZNtnqCiPNMhdcqGG7AJNJ3NE1JpBCtCni1i8hyHLCyhuoqjm1RbJ4NksBiNYbjtGf",
  "key5": "4KpgKrCyzesJbdWN5jUHeyPYMEnqed54hEPZx1E5jwaqwAPf8b1AXZqc7o5r2EEbYgMmFDJEvN8yYfm5AkeDUng3",
  "key6": "nks88Zdb1ct9VXuFjgBnFq8BpuSibX4Qi9jFAhVmR1gzfkqim5KxcxKxJqFMRiUJSfV3gtdZM5Tmva2NG8NW69i",
  "key7": "3ywkHpUojoq6MM2doRBSLwKGAifNbiNErsJgP5Z3dbebLZvkNcvGw8WJJDU1FznLRYEbn4gnNpJfsJ16Qy1Nnz71",
  "key8": "3fVAWTn8jBhFCJzH6dFE5rTtbhowtaZVkBDPjeFfwEgUS7Rpe5dZEqL83JCp6HkimugZfKv59FKQ3Sqpu4xv7xwZ",
  "key9": "yDrHG5ScgL3HXgWZDb8tHtKKkug6wP3fzBtHxKMfyCFJxLr1kkoVFGxrfNjKUG822vCpCRiyAh4YmJioGvAFezw",
  "key10": "4shxrLph52Pn6xXHQpghysvhMe8axDtsV7gPK2vPGW9MnKAP1SF3HCfhWQJ5LWC5wTAmRzx9pipMtrbDCkpiq4jV",
  "key11": "2MMaM9nBJcfZhyW9JhxAw9vyxw5rVP8nX987j3erxKXAqwC37teyWnPjqnpg9U2vkTuLvdABSvSNCRjoRa7m51zr",
  "key12": "TJ3aiWJzh3wzhrGahCXzhWVbPTLdn4QnRNg948zrkziqzPXEVszHtfDqJzLqJrEtFLeqk5WJ9ZqvwwTwV28irpN",
  "key13": "4fhNpsSpJ3542vEDLvPk1zS4ZcLf1HyfLZwjF6Zry6dyWPB13Lyc77xrz4XCd6w79xW5dVCgPa8HQyXkiwcUEH7n",
  "key14": "3tH9b6K5RQJJyK3pwUP7cnVbPDkzUadrnt5AioGVA1QjnQGtVvhENU6uxXx9WGQXLV3YvmHLqgA6qJE1YfJPgRvV",
  "key15": "2duozfriqbATjdDFeSmBBoweDMuoNnDxKZpP2xVcbnVWNqWBe3A4aXvYtVdmcYADkwr2MFhrJMeYfYy8rkQ3TJkK",
  "key16": "G1wvLmf3e2HnKYm19m5f1RfUNvza2BhCWG7UyEA6xRUbqLUVCshfeRj6GWEi2X8tKwiiFyyRc4JJVG3cgWeeTkG",
  "key17": "2HvoKcpa7rDUpDLYpiLVnfMzuR792gDCkU2fJEmaZmdnw2fWjKddGLiGet7SQyhmphSb5dHeEnGQguLFo6xpocSo",
  "key18": "3KkmgohBd6rUf9WPa5UrHkVHV6VknQF3se6biuELr1LTB2NheQ6qZQNtPom8FK2Yd1EEPixHgEaqfGYhhYMe79GN",
  "key19": "4Q1W3dEBRpMoSysKSJo8XcotJVRsktrPAo3H2wRH1ZJ5wSdSiJLrkWk3HRBkJXzXvi9Sy3dhDUTeAmCsjffPNdZG",
  "key20": "4yrZLNu7CgwEuapQeTE5brnpsvLAj5oksPwzvGzqhtwieEeXf9jHyeVKx1Sq3taDydZiAk66ExwCftvFDccP99ww",
  "key21": "5zScrtSqTzTeqaPkQoGuM3VHy5hDMmXKbJR9ajhd2yZxZPmub8mTaPyCanx8kGxdTgcQrNxPRNwhStiV68rJFYU3",
  "key22": "aJPWimHiT5Yr98SDqaVS1eZ6evAeQRfUKzWrGVxEek1mJBdYQGJac1ZohGf3mxeMmnyBY8xsfKG9XuzARrUVyGB",
  "key23": "4XWaCgkgQe1R2GxXik4xB7L9xn8AR3V4idAmpmMc39LRnGZWZVgPD12tgmgvifzi6VJELUdH5igUqTNH6WtviJ38",
  "key24": "CzaVHFDXBAbZK2ALacBTVmjsaGiogV1etdJdkkpWbLdJk4QKPpM5uDjnQxfneh36i9hifxfq69TnR6QbWtgWsSh",
  "key25": "2HyUUoGTYdTfDmMJq4yoB8QtDn1QPqnzM22vGsnTpX236S4DLrWe5AigbEw3qJrsAoXW28KUwXCoBUNsknT8Acir",
  "key26": "uXSzwzR3kz2bGDQivTZkj4VkHWwaBq5Aj39abFz6L5zQqRAGBXfGVmRjSXuACbYTuzt5m8FZgwfY81t5gC9oybL",
  "key27": "3suNKmboNVd8DcnTuXFCXNAxuwzJGy9bnQz3sWoQuHEj2mvp6tzGR2vMywFWFBUKq2oFmnt6v2ijCL3B7cwwmPoE",
  "key28": "3wxHQzvqaeEaLd2GfdVPo922boEoWG5jtt59VwTR8hPi2DyCtViaAUU8Aix7AKQ3cKYqyDto7NTGSTN8iWjcN4ZT",
  "key29": "2jzoKei8sLC6cKwdJWF1yhBvjipPkCwze8dLJRviBzk3BVq8mt5Bpie9UdtY862iLXWGHyxFB5PiqGbcrnd1UDGy",
  "key30": "24xCep6nKFg3uwuDRi7Nn1Wnehq5PUXeN3T4KthFxSVLGaMN1MuBP8yuqTUf9qJuUHWtjMTZErtD8Yu83r8GCDWK",
  "key31": "2G95v7PycSWAByJRMocN9LhPB5nKWrvXYUYLeL4xk7zQSkKF9Z1xzdcHp4iJav8Pch4GppbXrsW9hUw9WmgVybL4",
  "key32": "4zN7K9d3HhzxkK3qp8fC1QKfxTkz4JhS25ZWimDo4QqNTAPE83reHVCpc54VWnam1yPxwv6GJFwuvazdXhU5D2e7",
  "key33": "2g9gmkqsNtYCz4r3TDErbSjy1yhYZnV18hqrzSKpfobHFTPU26nRnPenqH86TFJgyw3Mz8G1QuaSF5WyDuU1gCDY",
  "key34": "5Fy4vP4s1FGWFKXCBG4ob3dWjvyNAdqfLQtAPVwBmauPyALcqXJyahasjHngLsk5aq2Kfa3ytQRH3xhEhBTL99vN",
  "key35": "cFDjQur8rtgo2zKtHkWH9gnJciGza1cgDzQHXx2BGQcdF9hMcXQ7R25TDFRyKCJtFgHzhPjrfvuXYmvkXSXmUgk",
  "key36": "JaqYB3QSuFe7LXJgukBDZ2w4GdMD7gs4NSueTPWHHBFCu6widJbFi8LwkHMRXrU5H8enAb233LXiK8JTTSE7okZ",
  "key37": "5Ganzx3R3qyWihTUQ9pN5tpuBfy2pGGHNVDqn7JfovKtpuGjBNJFdv42uw1XtRGSvZSwB5imA2pxtHYwoqQD8wXD",
  "key38": "5Uj4bR7snwx3iYj6unUV5LhNijVE8jXGZ1tTX8Z4GXi24S6HAT9PMFhsrJLBFeniKub15B6MuzcrdXeREXHyTd9f",
  "key39": "5kXxf6c6Xpb6JftkxcMpJnZPepFbCVyxFFxCua5BxZtq73am2echK3H9jUDLY3uDweitDmGb2zRA1kUWbLyWSEC3",
  "key40": "2VSqG12UGjSi8UcpZRsZnAGZjg7ScWUQ4w4mDjsn8Vcsnn5w7rTUD8sH1PRuzEr2CkTuywZVtzPjfFdYH7aRzkeK",
  "key41": "sV7zrUGfZQmwJEDYAY446DwSLxNCmDpkaonecry9hxWbhjjRaX42QwYSiYhqTHPrinvcsUgVuFRApB2dMqwmtrR",
  "key42": "21BhXAuUpqKbygBC6Uxum6AFSbRNrhutWe1ss4zErVndhsdjXvLz1NExj6qGbjg38oj4VT8P7TTBrtL17UziTA7c",
  "key43": "2a94nRrojKVBKzZMrFYyXyhC9vuEpTfp6nMHwkRqmxvgb8WfiNsashSiLSEabKpq9x1jXp7HDordbGNKM7uesULu",
  "key44": "3pSRbLFrXHxLa45AWbQUJArVrv57WvWSk7Yahc1JPEEhfX7CW5BukxZaEDPLV312ctkVVBkJfPFD8srH1Eky65Ka",
  "key45": "48kJN3gYKQuhrU9YuT6jbCW6Mx7JkUfpxJByvtQdqdNy5FyurzAzrd6J63KLAkLh5iCGWpicjrf6UpisQVhVwqx9",
  "key46": "5vHhMGkmDbMzcRPJt7TUYLRZGorEV5GQZfoV8xzLcCP9FUcUZsaAnVDhcavPAKNrEwDvKMQWnUugTCTASkGUF8X4",
  "key47": "Weu6awKERH3mG4rKeg9ahZXVWPMkPmJvEgV14BLUuPZ5MqjxpYJnWvaB1kdHhMBjD2BWauhqG5zWFjQbdgjXP11"
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
