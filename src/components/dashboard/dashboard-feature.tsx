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
    "4NVoGxKWPFqkJ8xEp9MjG9i5gmENuMv1RfCh79NmbkQMDqkcSCrv6ZFyPrfK262NhgaH3WuiQExNMYeaSQzPdKwe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w2En45gYAnWVWooQwhdr7rD3dT2xX3VK2NEo9DrUEztqAwj26vX62e3tZH33Vg3AmPj1shxedeF22Ar4bxb8AGN",
  "key1": "4YU9APmCWMZVrwa3sPHXGp4rYaszi6gnwNSM55oDSrD5qBMyTGX1MB19niMf7FMGMS55frwtXFLymHCsvvZsTKrp",
  "key2": "WfUoqB7udEQYmXkfkvttCRxFjQMFVTsrPZA3b9Bqb2RkBmBzQmX4MUaATsAo3hcaGRvq1VwfZT8tVmbp8rT7YP8",
  "key3": "3WLX2aGNsBshV6Vkj1KyKijmRsTeo2mZrMM6Wbx5JaWdRnjyWGfVkT4nFvAznCeeWu1nWsnSF66hNdHa6xxMxi1y",
  "key4": "3yauyBnXL99jff3ANdG4N2STx7sJkaqZydfbaVuDqiDQMVXpyvMpu9W7tLgCQTB4AAJ4yCiAzDfmfdw3thMT7dWg",
  "key5": "5QkqYvnSCbq2LrksLNGXoBjm6HbCWxfxnSBoH4CDUr9CC24q4taVddtMh8jEwikBSGZXfWV9s456QMKN9SPXLrJi",
  "key6": "3iDgxTQ8RiNL3XSUumsE1H9jwSp9iXLb1ixfkJhn6pJ7RCHTnRxponoeYzuabeZeQtHFAURtgmPUUvmqBMuKSJSk",
  "key7": "2C35CPd99hbECQKeDgimYhDGA2k9H8wDbQkRL6w3us4gctQoXSJ67YnxozsqgJgu1NoG331Waw8RY6LNzSM5vkX8",
  "key8": "4h1B7wmVmHFsc8JVCaUFthLTWRtCUJy9BWEsdP5pQHH4Cqjpvix52s7WB89vvUnC123XUN4QUPSvxmzMtV2dda8H",
  "key9": "3ZKgGDChq2FRk83zdgtTnhKYV1RDXD91NGTBYiqsV3xSFUTzPq1AUXhdz46c8NZGh8nP5svp6xnmDdk5XrqM69BF",
  "key10": "22zPcHbkPgfx2eVNCseKGsDeMejZGVPYDZHTQBHTJRFrH2CYkQrj7LG2FAkyKqfMGaq4j3yLWXHaMAXgfTjDjqpS",
  "key11": "2ytAqmqsVzWv7GUAhWNFardpPN8sBTYeq8w3Jx3epDHay2nk2jMbqkLg79s1hkBBHVCCf8jmAqNSYAeaBwyT6if6",
  "key12": "4Qi93tw5khLxSXG1hab576ikQ5PiDCY7gx17jda4wP5ReBGEccVMxPyMiaAqK6uNHSBVohLodeRw4HrNvzoyEKZS",
  "key13": "2GkUGZSBb6RrskWQ7vNTBm42mELtF3AmKXwyuResJDxcXua4XowLEEzpygdt15KS4t5KBaRDmE1pYqgWnVRezqJr",
  "key14": "4S5ppT4aJWLBLa5th9EmskonsS2YZg6SqCXCA8QzPHWJreEkBQn25VT6Jhf1f69F2nq2s1nQYuEZGKnEHTLJwtiQ",
  "key15": "2sjDCcuS9RVutCdz3BGZKi1vJeUjLehc1ZDRqqfKXuRSWPUT6Fnwa8cU2GbtcQS8szYihS75iYntZaLGfc36nxHt",
  "key16": "41tR925jBgpmqS4dSacBrvmmqT2wstEFednzGRVQ7PvF2wsCqnHPwb9zXT4SnWNQymFyCk5Daqy3h6Vt7HkKdpLP",
  "key17": "4PRMacGubdX9crkUxbW2zUmuxTcuCqT7G6NSmUDeCjaS9s9aVSWA7ukDz9qXiWX9FkWK7DMK1ZXvmo9DkHKLaPN5",
  "key18": "4FCzf949JEJ2AcoQmFVudqL253mKq59bxn8RkBbtWdbuFx4HUQGV5f9sSJ9CrqcSv9LQJPozbXzm3r6buweARktn",
  "key19": "5MGunnetGwLE9NLTAMC4bk1BNSnBNVQNaMZ19K5sYZayHnXXo8CQ4HxU9vTXmpfqTBSD1znjczpN9couGaFLFTt4",
  "key20": "2XHTjjD9xFUenNDZUqaXsDDwX3eisvWLJAUcvmcsgAbcGSBmjubs7oHMgUKHstpuLjXbAjRYYC2mksMB6E26N3vg",
  "key21": "63MLgzbGQBVh15X5jg4Q6wQWqFYQiXmvMpWbf6vWcYJBpANRDoAU2kzHvyAuPJtihxgFnLqdy2h1Emv8Ek1jPsZM",
  "key22": "4HFsxkwKokepPiLfeCobCuC2xY8ymbKWiKfBQBLoe93vhi1JRxwJbwSp4mZWuk5xtxBuqfCNUvwh7yY5jEnY4DjQ",
  "key23": "5JQ7RCgnk3jtSGRAod2z1nMyRewvq4t5JGJhxydHgxtgzyYkjydrYAv6pH3DwQ8Y5DAL1UAkVfkhsWu3TdHYnoiQ",
  "key24": "61SVT7Kg6Q44JBBvLbMoj32NzSyd2geAQkezndXcbreG9rxe2ryMWwwuKoSbgJyGZ1X62updKLERPnnkb68i56s",
  "key25": "5cvbmFLeBGSHDgYnmJXUtiPRDVo6UeC3p8Qz7otkNQDicjKtMrEAnB6TNNMB83aQY7rXXU42QR1mbS6XuFjEDK82",
  "key26": "2WzJ4gy457jNuzk7kdRttFEi9u7XvJBrxE6GfnDaSo1bJPbsKNh237AzoW7segbGiJ5D1vQoE6x9p8YLvaYnQzRQ",
  "key27": "2cXZDHrhM6g9Xg7aEGcQmTRcJe9X1Xotznf6SScfoqADgLZ45mdWdiRmC6PpPE1SauoXeENLtFSAG6LS2UFDgeJx",
  "key28": "2snpWwjWaf4c8Gwd1ZoRwyM6dahTHaJgwUxyKCmp3tnaCjv5eh6k8kqVsQ4mhR2eFjBRVVzK4iq1hPzicBjbBSDX",
  "key29": "2cBa7wpUXJXV1uhaBFaxtnxCRoWaJnnMvvQKkqgZQvGdrSLasaoWcL9NjsYK8VyKUV9VnUe2im24Fd3UQS8K8rCH",
  "key30": "3TYpDDNffQ4QHJmJ4GwZ2jGDi2PFrp66RQiUEa8E9k1kwFhPZSibiFRM3uCmnLRx52ZPDtyXJkQgURhVtgHtm97T",
  "key31": "562QYU9NejPnK9E5KoqNHoZp1LvhVBCagZGMbByvTM5RhWGsuYCH7zsY4KnWpu7guUq14mDNArKSbEuZ88PkipVh",
  "key32": "3hXRj99tgAeZojaKFCH3whggHmb4pUyBwn8AWU5SyicAfUbEkKkNU33h2nv7z3sXQnUwR4rdg11Bk6KFmWCfEJKi",
  "key33": "UTdYrxqDe1hLYyZTP6oYF6zFg3YJ6Dyjaoa4ofE4a71whjxh5ddRfMZRRC8nLAtn2BCa1aQPw99CyY9tyAq4SHy",
  "key34": "4sVQeGERRp1Bv37Ypnr1vGwiwte4XAL34STDAMpx7iZi9a1V6Nyw8q3tKDvRAPEHbWLkWWwNniZxXc1ybxx3pg8c",
  "key35": "4ass3eoughbN1FgEvRATvGF3yoaamGA5sx2JRP9jjPT85p29goja6ryNR2EkS8wTWL3nNKr19nCgX7j3CRLMqKtb",
  "key36": "NyS4ChbLLg7rRFyNh3nqy5ngg9AK3DiC1hRBdribdGB4ketcBHV9qCeBRVx9uAAydzKm6Twbs4yBtRoxNkUdipa",
  "key37": "5xo6VmMXJ1DkKtV2nPPi5QHQiaC1ufpjha4htdwR8xJcwBqYNq3K1tqxDrxJTZacUmmeQTqJWiVVBrG2EDTd6iYn",
  "key38": "51L1QStbxkQEJfCupGf1PCdPtDmv958CfsoQMpKPddUEPKqY19GvbmA92hfeiYC4yxunzL7omkvKMTcY8cm6AxP8"
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
