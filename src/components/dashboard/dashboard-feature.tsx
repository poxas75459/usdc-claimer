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
    "5u33q19TkGm3q1jr6v7hTvjaczJevdUs4F6d3gwGWqPYiyCv16crifLDgUCDiTtyWd819HXj48eNBagx2VMookjW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pY2u8bV9Eyre7c8pEGhkJVvaKEhW6oX9mtVNnER3jvysqnGoUowEVnUCvWu6VhWJKx92t5UA9Aon9JQsR4PPZzC",
  "key1": "9n9cXVUhN6h7Mqe9wk8HytZHXvY3FywcHnYmPtSbP1SEpjv5WJDGiLHygF3nREnzZ2tiHpAXt83zKpyeLAZCUvD",
  "key2": "TkEdQnZpC2kcsrH7FPZxUYHP23DFFEY8eXiRXvxbkez5NNQqmdNCZLvVcJJUhGFcB5sc2eBQWrVUcAsmxGzTe5h",
  "key3": "4DpP7ew5VByfEo89NgFQhUWfEDskZckpPuoUK1cj5vcfbzfMqVRTrWYUsTmhDr4qjJ29JSNVdnoat33UT3is4vCj",
  "key4": "33KugjJhhXn6AjafzuuuQypajGRvTMX2iaeqrrR7PT5NAbXPaBRKQ3BeBFE9KHzfCwEh2g9aNNLSPEquHxivjNTc",
  "key5": "39zCgizpKNvthbhH7USEFCH81W2quvqTcsngvhqCyYadu2FgwJZeYtPKJSYhtuJtwMWPxZXRSMDwWxCbJV8cX6vx",
  "key6": "2598tjzAxx6JcUHfhaHFRuBPmX8NwsXoUNEApqkmnNaMDZ1XUMbtQsJU9UNTfRDf6yyT7UmCmw4Lu6P7msyqfQ7W",
  "key7": "3cmyFA3uEaeQXghLLv5k9QpkNvtzGxtcHhbCdoDXtbXrPhd5NwSPtAJx34d6XtuC6tPwEJn9F339ZeNou9gPxQ49",
  "key8": "3Wfq3kTZTpGXyUso1o8xytNTEfyyVxwAMFdeBd1kqVsHT9ZEtahQtytkTVeGLMNESTNhxHHvoKLBjE5LwK8ma4ko",
  "key9": "eFKMUKuovnftUDzFgw26QWygVu6w5yqqx7F6UqpnCpe5EJ5uXz1K9Ufmkca62ZuUCaELYBjFTVhKo3kMyvMDvup",
  "key10": "3jGgJ43c4LL7fSkCQQFyCbtaWB5RYyMkrLo2F6S58ZKhVHNaiWTLhxVcRsw8fwMjHkEzNmLmyoewQEcGciEqbK4H",
  "key11": "5xDZy2aucoNVDmwmANtgbLTgfkGdHAVbgZPuk8a8MQ16BJPvNmgERDMgUVXaYvncnRi6DBw2ZPNLF2Wi4iEKcd97",
  "key12": "usLxkxy1QMJLjx9eT389wimNVdgsx89acNpnG7zSRRufVfV8hWXK3mLhbLCAMUwNh3vAGkC8iKcBbTC7k66qRwh",
  "key13": "44BKykADSnA9PRGfBoFncy52MvpDHZK4srrkyZgpxeELjY1eaCDbSyThkwZbgFCYfucW5UBRjS85QnQpDkVqCcNf",
  "key14": "5idcuXnFR8sx5z9bZB5EpLQT4ao3zGgN8JcAviuu1zbApBgCbZH3hsVw8SujXViVgvriXjfdKjiCVpkwLH4Lkma3",
  "key15": "3PkEYfigBLoRCJS4PfmYuBwBs7nLYJrrudTCwTwgNYxdm6WK67XsEdj1tx1ZnS1mFTVRC7HM3aNRiAgz2cuA2QgB",
  "key16": "4ybaKW5TqtdYPAMoEtNjbEQSC7qms78iWwKDF3JThskhkGq2vhtumt4Rc9UyTSzHZiGRP7bi1dVbhgHK2m63KCrq",
  "key17": "246spNV6BgZrrSMWKvCxc9pFiDwiv8cJ9Hb5jQqkReBrPU1eiCCERuS9NCgG4CpG6jLA27RKSYGxKKrjjA8eMszG",
  "key18": "3FsDyetuAsKdbY2q4W5uo9MnEDeVfjsaG4WBCdNLgmKnos2vD6LFyErBjpPLTPVC9Aox3KZa89rHtV56UAkRifHN",
  "key19": "cu9wXXQMjnYTcr1k1rcPdSZF3EF8t4Ls76GVQL2WcACkHKYyC4cNH41bLrzJ1GkFif1UPZWn5FN3hMqpfq3D9ts",
  "key20": "4hX5WiX3FtBy2bVfqfwHxLcXgLHx7E6NQTASegPfY7jrKWXeTvrpkofgRMTrx7ktVb1o53qcFyDF3fGqkBhcURRA",
  "key21": "3RcDXVndzhAqvQLAhKyNT1bSYqJsCwNkZdHjevt6hsqFh1n3kt7eeW8iYtfPEiNnQmhqdk2NdessekDcYSqm5Egu",
  "key22": "5Hab6eQBJB7mNyD5n6MtMAjnFZ1gs8QegAv84YKar3zRzwyeFHXQrz73MBLzi2EypFB8WJHoLUL4oiy89aypF1nJ",
  "key23": "LjBbzxGd5GCbdV1KqFTXJcVtW7dwEHz2T9CzeLnC16aK23SLFnvB9ip8kMJX9mcwdPQc5P4jSkju3dEy48Gb1AF",
  "key24": "dqJtRJocKxndf6auGe7S3VJ9uDQra4iaYU7JA9J2SXQnRixNvVuNsNamMguKFLG9d2QZJk9VG1tr9G5EWmmLRuw",
  "key25": "Y4CYCt6M6bzrCwqqtGTa77m9fK3AFmX4n1koByeDtBngigkGHNnhWtqZyNKcLb83ck4wCH4tXBCSzA1jYbcGNvn",
  "key26": "2kzAA7iYk82999e8avUSEALBdAibaKQYeZB5pjA5XUnj5sdDoPWCJb3XDo1zCqxHXxZ8gtHtSb96j5VZ7eiC56mJ",
  "key27": "3PFfVXYEeLQ1nXs7Rkmk8j3Y3ZNv7UJJiJyURjrvbb1Y1XEVP67xngPVzULRqXS9VM3PVb11AyQ4ttmcLKCGKmti",
  "key28": "5ZoJeJMduavCE21Kn9mg5N5rA9EuhB73rAtovZXSSp24GCYbnGSxU8qFYy2zoCHkjRwavHak25YtisjADwxV7DgP",
  "key29": "3d36RnjYh1gvuNQWnhXczsG6ooywaY6He9WZMv5XctWZX71Rv9fdFetbec37RsGs37FR8ZirTzXAwQSzMPMwxcU6",
  "key30": "3TkD8mrmrxPprSb18jRJRRvLVY2kcrddcec8TygXfQsuFBuyrDSrzkRzqczsafvV7K1SV2hmjZ7ga6j5fq88fhBB",
  "key31": "2V1XZsy8zSmQxm5VAK5YzrYGUtTuVzqtNTUWLDySurMaTQxPCp7nAmC6tugjNgudbCKF98HPfcLdW5VyoRuei7GN",
  "key32": "4MHEuWucjxo7DDshVczkj4Dt8mBpaVRrW3JkTnYGC67U1VgbXyLY7JS8zEiRe7fkMV5fXDpkXTgWHDLWMzM2k3Gi",
  "key33": "iTkTYwPB2mT4nRuH7V4UPc6EdzVTqRSyquNT1H6Hqzchf8MWZnmvS1y7cBKwde9rfh7ZdR7mfRFV5tJd89cExYM",
  "key34": "2YTrPQkKCRy9EKm1cWywQYvojhdMjhL8WCetL1YZA4QKeeVENh82MiLoRadRtcpMLX6nYNmt3hbf97ktMnMvAvw6",
  "key35": "47S4owwoujhcvG5GD6wsD9FJDCgz93EBfk4YVvmNZgd5rfLwDSxs3t5pkjWZFSuCzS2MFTn24k62ZMpS2ABSuBLg",
  "key36": "4jsQjhY4wFhteXYSJS2Lwzt6s8mrQindV68AbfXCYzmL9PCfkcsjyScSpSCSjCLW2NuEQig67Ru2c4tsCTiCrySR",
  "key37": "27x1hZTJYsVSXVRzb9bUVhdvC29RJgfW84EppfQeZYmZmKAGnTwrFrF9Rj4B18fjdpYUp4ziiaFhQ5REEYpihdQ4",
  "key38": "3ahNhUAqvK9xqsHxdsrGxQn99u6ZZt7NvzFEEyQGkrrFhF4MLwfJxpKUe8CgLexU2LR1wx5k6W9qrf4fMaGWbiKZ",
  "key39": "5F9DSSVxnCWin4B9xxv8P8gVRzCAjcQ2NCAroEyz4aJb2ETq6E9UFouA3nRE6mmjnwAQf8TWemqXUWsdRMcyeqpE",
  "key40": "HMmx5TadDMbadHxV3Sbe4GAToFTeWGYyjCVSaj8Z1PLkbqw4F5VGeNaiJTM4JHKnPGHqi93i2qDgxMKSbJQxBey",
  "key41": "fLW49znyEe93QYXoiuybQjoAxpsZjykPGvJkQFyux5nYrA3TQ5rdszzuWhLTpEi6j6KGrzUNZvAKAMWeFcUnjmJ",
  "key42": "wVgkuJBZFCKg33npynuZsTLarmonTsTdZCy4bQhJ5n8tZU2Y1axEUfdn43NGDnVC3qYKaE6cgmbyh4uKXkjJPAw",
  "key43": "opsm7dMaknYgzrBP98bsDjGyStEoEzauvy3B2WuVJMHxJaE1pt2T8Ss83zQJBWq4sPpZa1xDA4CSQR8wWHM8Nr4",
  "key44": "5gfdPMXqZdfCcPak5rJmFPFL3oyX4G8TZEqeXTiLqmz2mPoJt2q822tsXvCM7PC4SBVFiq7f3JAuytas8xd5TnkA",
  "key45": "7sEwhyJGkzXwb94x9vkUHBezWo63iesym7eb2vgQ5pmwz3spXFc3pxnPaxupiZvqPfS9MNs3x8znQFJNZCro3cv",
  "key46": "3ARAj39MfcQH7vvPehPD6WtBduY632bsPkxGc1W7Cgb5QbiLgZ7VERPve6iaLL4nPR9qMLv53UyVBd4chaqEgpNL",
  "key47": "39MjVkh9mUVqmcXCijChqnSh8iHLn2srrYrPUCQ7aocoUioNdywEhZHdsPiCyoJNqWT735ctAhdCh6Rr7Dpk4FSb",
  "key48": "wPqX5R2RR8zUyxqNRQoE8xTT8QG25kedSbbYLtc4bmcKLRoar7j8xy1rPeSnDvN5vUETrDxvqA7SB6uyd12qr6h",
  "key49": "25ckNYBfBTW7atiJpBHtKA9eGzeSm2fJp252FQDDG6CAiX5hirQc9JFbqo2CsYBpUxkhUubUGr2E1tvV1zLrG7TG"
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
