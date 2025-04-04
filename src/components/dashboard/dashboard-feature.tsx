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
    "4nZukiAzERTUzDuXGjgLRb7hf1FCbtCe2xMfi3obyzyhzE5TKMkrWTe6rPRwChf72TYiAN8FVL7BzQmWA5H1aZe7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rRRRRrycmsbmoBynLXzinjZAc93TFcjfTctm78MN3oNK4FG94NuR9yxoUissqUxyg3VFeQKPrayaaCDK3bns9Ng",
  "key1": "4YgEyRQBBtPhFANFmNjtb5oqGKWcFC25sp7564uM48LQMvTLazcTd1wPP5uocpvMeaY73Syh4WqG9KqkwEQsNjDs",
  "key2": "idK1SRkHaMaCu1e7qoMW7z4UFDLtzYV9vNGiJ7bZcaXr4naEMFuomB2Rbiu1Lj7rB3ZKNMCkvVrsCnWn1TBoCs4",
  "key3": "56BjjyMUu55xAz7MnadNV9ztUZnNVRfeyqy7zDtjKeEdRPjvCT4AAZfhNfMXFzghDvsp4d5WTNz5ymcMgtztRrdv",
  "key4": "kkWaabLkvrG53gpGjBQqy9fhCwxTm4os8zfZKa4hyPeD1ENBRhU8uZozD9KpbsZ66HxEHBnU1ysFnYgbTJQwbzf",
  "key5": "3Smv1ALoWojpFdLzPx9zVLk6BL9EQM5mpGCkFsuQiTSszyzpW17XMGE2PEzE2zr8wZB2zkPBQii8r2iwJH1sxsxU",
  "key6": "5nv4xaSxCXqig4sE4jTZGgR8jpMCXE3EH6TJyVnqqy2u4PNzkvAd5GDoGCLNRD7ZMihjCZeeFr71jm2K5iiJYUKt",
  "key7": "2Goj5ubGWsHjMjJEKfCiuTFSeGd9rnCuKz9Yzi27ws1ddJ62TVWHekhRv4hRucSG5g9rjKhAZDv5BjxEcpEV8meA",
  "key8": "2fVV3X48DUKGdKvp8tDyzEERwS8vSE6tyLrfEJQRyvevtmMghErYYXyuUoLoumqJbQPDUxJCtxjf4VGwPNsAzA8y",
  "key9": "4X7NAJMAzzVViAYVMasPd7uXp3v2KJFz7nv6wmXSgwnGzLf3TVwJdPaWNETc2LMqXutxw2VLtcxapvKQRMZuJ83U",
  "key10": "2DhXEJJWzY3pfeEfcD4SryXmDBJvLg2NqHxQzE8RebDtt47BakcUskt83z4qYWgRPfjmuP9ERpdutpZpmmGSd5HQ",
  "key11": "3bsTuQFCqq1X7tJNJzejF1rbFm8MjCpnThx1YETMDFg2yMKPo1iPFDTnzmghqmN4RpLA2TLhunDcBdVutinirVGj",
  "key12": "2huHFwsMffMbg4Pv9cmD4UuFpUuqF7XeAm6QfwX5avQUrrzXzbAFkBhRWYHHwVgXJ51Hekjtf72tgXpabzi4dhDb",
  "key13": "2VYth81uRRWm11oAcUPmbUGKoPLWAbnhb7boyj1ySs5XYvQZRd1K1ZHgZPpirwTt1CGW8BLate21Wn52xFXJZgdP",
  "key14": "NinNuzm5F88wgUM2fiszinK7jusorvHJewkDPwYtBr85pbz8cSt3GHJiH5jrmSfeXdkKNKQ6jDRYV7iBGzYp3LL",
  "key15": "3nc2tbU4Nm6YzniaPppfUAdzrDLAWZwH5eCJKrA3DBbdHDFW1MmYnBTaYTzNKD8jCPnhJsrkDbGdkuGTmppxHbEG",
  "key16": "4DoYoAVSajtCJJT95zariQRgevcNGEj3A5oN7cgPzyqLAUcbGDUtB5hX98LESBGh1oMLfAZzcw4p9bFcGpcBCpfe",
  "key17": "2zaMDK5G2GcupzGHty2vHAGgXz7iPtzBGb9qjFkW5gG95S2oUSx822TN9eqF198UpWgWzNe6V5LR7ekdraSe2Dt1",
  "key18": "55YJhZyfQ5m3sNFVJTEz8gPkVdKFdVfybJ4wVqMUMDRcrW2daFEsXoLMySUPa6WYk6KVo7kQm3Lv6PSTFmm4Vt2G",
  "key19": "AmcHRSDHcYS8AHgGhf9FxfYpX2WHC168evey9Nj7PpGE9XPSQeFFJbWZcbxcnKYTpiXT5gJe6VS2QnKS6iJx3Y6",
  "key20": "3YKUrsR7jr2vQedwrU7r7Bkam8B88bjVHNWVrgqH3ypjN7Rj3FKsQAXj5EnAxotkWVzkhgURfkT4D87za7rvB54x",
  "key21": "2J3WP3DgQCMXQg17PDkmBef6nhRUXeqmKScJAQ96aSSZZnubez2tohjnmHiThsTRJdh7gweH5D5YdfrKtDaioLh8",
  "key22": "3RZ9E5MUuzCpgPspKPEJ4CRz4VtEwA56TCNKWCpi8yS1pf3mdS5nBZvdon9bQeGUZL8iUSQc6xKAxzNSj8z1xAJe",
  "key23": "5ZqWGhY5EGHgU6gHidELjZBS6QYcHpK4jbXCnPXcuWfsEYLgj77nEig2Bshw95Ga6czWnQkLWU4tCisi1o5uxjVf",
  "key24": "5KpERQRK936LPSC9LZgCVvkLojS4upjcBrGFit9Gqg26cw2ciNgxtGT6BEBDLigqT8DNtzXWUieHFo6CZvtG1E8x",
  "key25": "5ChW5J1aiFRVVxmdJMDEDAmBQXEVdKnnxiCmNhz9giJiwH62z5FD4aati33Q4xeiPudXfrnhUsFQZSTpzqV7NZ5b",
  "key26": "4Jyg7xPrj41NwcbNAL2Gn2vq7mKmdM7zzU6aVDimsGQ8oRgZBTyBegifAV85ZgyRLtk3jvPRuqgFhkaw5NPY3o32",
  "key27": "5i5M8A8gvMgSzdXtc88c24nUbGZCSnaFJSj5FgKBNSvhFRbP9JYpX5jVoQmE3Adx44boTUWqeEEQvCJd9hMfH6CL",
  "key28": "4Low5AARYVzxWrMtaAgkcP4fk1WLsacgPtexh3GvBjeha9JQ6zJ637oXQMwQpJLrwDiwSC4wjXL44PsZXp7CT4Wi",
  "key29": "rN9ZeqcpbiJKDeBJKCQBkugzrso96u47x27Rgy8cqQhmpg8qrCzDg7bKt66XC91VTbLicqvjmVNrmX8R55CaAMr",
  "key30": "67JC174aVkQg3jPusyBMxQ27DcKqV4UZkewaiqX4iAEkpLFvBtuQmbCNsyAN1yxMfwEU6LwGrZzreybEx84DCHXF",
  "key31": "5oySpfUF1m95qeM1deABZfQ54nhCrgTNzxV2XzqjfHXURaS1GEhZMZqVhp9ZgvZ5fCQC2dJti9roiV4EsVm7sEPh",
  "key32": "5cgVpiLY4nyXeCdaHfMEp1cRbU9avz7Wn5eSXSJPSEQ6zFCwrGvC5c8jY3SGkzyoCxkuZ77rDo4idwQt9m8rYEML",
  "key33": "4AvGFr9xfodqjQyWBrJCwXEF8aL3geU5F9ZWNrKJoDibwh1iarmPi4dRYyyGwoSAHJLyzJnb2xNMbAdiYWcSN8Ff",
  "key34": "4BukkxLfd3dq9X9BP1YaUfV6CyWZkxYoh4D9nW6Qw6VsqTJePADLXPcVq3Mb1pBJmbyMun8A7bPUYRwh1d8BwGQr",
  "key35": "2ba6ZRYRWn1x15gUQ7V6V4h67s3g9cpx1Dxzw2rAN5JadRyG5YRS3uURrYpVyjNVMtE3EBMkhahHx5cLidomNuHD",
  "key36": "2v2DB5v2nAYJYpwFF5EzwYyj5nUXnUThQQ21RjRAEo5rGTLL29XtusXphUM8AxBLjMrZJ5WwgN9EbXxDrY1rrSXk",
  "key37": "2ePPKRBJSTcdgT3J8ZnoPy2sPVZr9uBmz2tNMzJ2yzAjWVJrQGWVkXAhZDfrtsFi5XHwyQCmFGJvYS77WoC5rgVB",
  "key38": "3vcbF6s3oS7W28e3tRLqqd4bNozQnRLHHHL634cuZmZEtMs7qogZSmrBpoGoEcerwLphsFXt1SbqNFXJwWgbfjwp",
  "key39": "2jNHA3vPG2eCMUZESowGtE8H4ry4aAHoVAjDb6LcBHPk9RL7HLNoGZaJY1yMioh1yMh2ZVcHwTvnza26RcvbT5SB",
  "key40": "5kaTTDDTqtkxPmxJyvCLXnCppuSDMMGPTZTgH7XrpsAUe1yyG8N7NQCN2NMPG8S9eGDExXEStLf8NxtjAcRabRgr",
  "key41": "2rwaquFZG5E196ikUpV6ZDP2UxreiQSGiz3vTd7BCABvjqAPoK31YZpuR68kdjdgk4kQnaGcENp8wDGKh2MppAN6"
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
