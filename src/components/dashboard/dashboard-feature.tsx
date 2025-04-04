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
    "3a6goNZEjayoBMwcuvmst3ifPcuSwNUQhKKDZyuFnZiZQWNbf62C5XZdgxEJmjXbq8aCdnq3aJYBBuai8PD6q47q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qaksJViwAroHSmS44nWn8EyMRLV6kSZdnV9yvJisAbnzKBw2nBtTBMkWNQ4aMYhPecvxjijKK9Rp9iij7rE7eos",
  "key1": "2wHptzZYKGndsGggEuTnv6uZLp81uSQcKGMko5mz93JDoJvRoGpuAFaEThbigqDrH2aYkeCoPTYmybs67artqbMm",
  "key2": "4iZVvNWc9wtbDsJBGAAWvsVa1xJPtaao84nNk2Qczvgy1ecApLE9sySdDHCgi4PRetPCrAWdfkbTHQ86rezPgB6p",
  "key3": "3isimSFU3nFRsJb9vuUNNgcABAcCXfnZ94NVcd6MvBJF1iuNmPD8dmTUuHMAq2x3uVTAtjpU1FEtVEsim9egCDLU",
  "key4": "3u6kwnEhJuAHeHFU8G14TCnBK1Yn3oZobQ5r6hwAsnHMRJyx8wvwQQTz1vShpvZ7k3vi2dgaQQJ68S5teTMuvhc3",
  "key5": "QpKziYQfQ8AY1wbbZkR5SBhZdVieYKedo53BW1AQgUt4uJyS7JgRUsLGFohn3x9Gcj6XNecNWmQGuCUu2HFBkpM",
  "key6": "3obt7mEmaDdarR3gjDs1fXbktJxQ2bvA1iLyG5s681jvuEeEKTHz2DhGhEvrFPywUkGu4KaxBnWvXwZtsZh8AQt1",
  "key7": "2AYJvZZqr3J2nqnPVvMvuEnspVBx4385y37mzDNAPB8DhGgrgURuxNLxmDBwgtg5AUandUEWTwTyZ1k9gt38962r",
  "key8": "5miikYNK1SJody7YnTzqmfUWPq41qvfLaSh5abZyWFTzGW7cHqQQPjaFoNgni7PfmCnUKx4Pj7Tp4iMBuqMuaXSJ",
  "key9": "3UTcKAcBmwEQdDwnGc3WmDR9K3iN3zKdmTnTM4TRYkRohL66iZ9TFZt6PNwajBAbjvvfGCZuTqdHotFcRc1BC3bo",
  "key10": "5i4pMrLoevHJZ2e41e1mUwuqNWKgJWSMWQsQvKZYSQTsMWVvPQCQdXEc35Vu2Nzctv8ZQAwBMWH3QzMvRMBWQpUk",
  "key11": "3m2mscTE3RpPDLuvbW4xQbSxSk3e5N5HWY9xss7N6LVrPk1RNgvogB4SJugyVxo1iuj96JoCxtqCSKQG7bzVFhBF",
  "key12": "XCxAWz6u3qYc6xPC2DwPkPvJ7rrEXQB59ijSiNpLbkE1epZvizyHk8CDs78z45mEnyPKjMgr9vaPTZ4VCkTmxF9",
  "key13": "7asV1smf7D9nAxQc4rPYMY4jwBZvePRWPo46qUYoj3KG3bcKFc2KLZDVDdPrNi3pBoDS1dZKwfJ5eiyY1TgDHD7",
  "key14": "5LczCp13QSp8hL9FkdvSZR8UuUigkCkm1Y5UXwxNn8zyP5i8qgkKdhHEHJdguy2xDgWPWZQbd5EFhJcVnTjETx5M",
  "key15": "53foMaaS6qkMFBtwsQeujdnqJ8n3XSEB3FZw2QJzpWRb38D53NGYw1ffQn64xBwmcaHKg7ernNrJMeYJQz1VYGUu",
  "key16": "2iY8NMSmpdZp6K6uL865J4LetSR2FCRbxo8QLoRND9xeYJeuN5qJBhjRFEnErbEShxMQbx5VxcexHCuYazpQQuxC",
  "key17": "3f2u3kY6AsNCN6Rt3sm2HwjpT8GeAcV91sroRgQojc4kBhjBCj2NbKrnKJBp3MoPMKv24CyaD875BBv1nDwUNKbs",
  "key18": "3A9N9eNWCtVw5otwqyyFVF1ejgLiiHMwfLU8N5bUo7BRTtp6ecgZ5gyikTzkFtjgsK62x3Ng9AdgbbrjGmHWdXqk",
  "key19": "2XAnE7nRe4aEUD5kQ7gMxdTEw4Syqna7iD7i3JFGY6P2tFfJVSxuzzWwtsEUPKsYUbaiAkA9dB7dLsY9oAbMZDZT",
  "key20": "5vtd6dqyWFiAGYWhedjATqTdNAtPJoezTVnaYTXscqaTHRzfsUEsRPwZTsjmTXTZdmdFLcfxPFUFhMeYrk794oDN",
  "key21": "2B4UH2Bze1PuXV31kNHP1VCvkNBHibStW2LkeSrhzL81aq7Ak7nAqMSMkCa19TCEMSCiiE7EjDuNpsN4cWYms5yf",
  "key22": "5mLo8KmvCKKUU2awtVyNE81y57VA4PuT88NyhjnrXd44455ocKJscAsuP8vNDtfY75mm1EUE8pzhAieTYx3fvtKw",
  "key23": "cmTLHm3XML1iothzSr3RfHPVNyEukk2hNoozStD15Hv2DcW4UyZiv9U5nB7tfAsumET7hPXvNtJgQvJEj5ts8K3",
  "key24": "4nhggd6NRweCG6q5voibymJFtTBtXqmFWR8g7qeuFwX8WX9sXBgKQoaWrJfEFZkJrWos6mTnRfmoiMY1QvqoDcVY",
  "key25": "5narMdX6Q9FeKnAoJmoBhY7s693neGktbrrtXVK1s4XMQqQbQLYp8refeKaM34YmtrzgqqgxoqeCe5Gy9aNCM3bx",
  "key26": "c6MWz1C6nNoxU4mow35AMN2P9R2qCYeF7uwyatsGkxWtQid9ymPMBmsXTK6zazNTBjBnouRtgbmwWwUEGbGB37d",
  "key27": "2hon5iREY3JuqvrXdQRSpYTT1Z9GP1FKuXti24xi4eXxPskrwNNxYFmHqLr2FdL61ke3F7fQ438yVa5jsS7ubjCR",
  "key28": "6CUpCTXGJBbn3fXSSq5oMXhoJ6VxkTTNfDyG4rLNeDfPssX9StySz6be2ev6Fou6F5dCmuQV6cMk8xSisdPsRZm",
  "key29": "55sYQQfuhfz2m54MGKcjhTbXKyK4cHnpZEf2CPKjDdXutTCSHLhu14TVoHENR17DgboDxwJhN45auTesmGJvFt28",
  "key30": "3U61yYff9CkVwtTMrWs7Wh5wmUoCGSseBEPSgBnFoE5hcttfHFvHM19Q9X78ACQ72o4XbnW5ZKwWqQcpprCzhWT1",
  "key31": "3mGG1m2vmY9uY2nCvefXT3drwAkLH1i51b3X3NQoHv9kivpfDamK1QddkZtTPpftVWmHtN4VVd2ehEb9CT3uXdo1",
  "key32": "3Vpe8Cwr9VcwUoACUB2Yvzso9PEg5NqsJNc1H2SzpzfvPCy5Jg2UUvo28QSFAUUx3NuMQmeGsjiCJBXFnahcwFjw",
  "key33": "fVqD5G6rrw3oLkt6oRnJm96fkUF6ZwPTJbKSnpKqeXBoPWLwcV4SVQzjTt8EvkduHqxtd8QigLseEitPSAoZbTD",
  "key34": "2m86qkTGyMapZKQUvKNjj3ifsDxpZ644vWuAKTzrJGCt5dDFBSHpiVAcmkTJC9HY6Z5zF8uyELqeBRSGCiF9Vr64",
  "key35": "5RL9jvFWNLYDdzXfYaCZo1KuRqQkm1jkcRyaorDZMPnHi2D2obiyvXndEDf4PAhNHCK8fBLwSiXrVxZtVNxb5mV8",
  "key36": "dBjXbZjbgaMvmWubnw7YG1yctsSEDy9AKUCikX3swUhpg3DYSeE8zcJSZN2LBQKsHqrtfyQxhmrjEYYKnXsDQ9v",
  "key37": "2aqdshWoxpADSt4AteL8g2ZWw7dVYD4xHU5RcFLpJmbJGWKHLycFyXD2gUf45nBXB5eq8W5HgZBePV6BuBGHGQPN",
  "key38": "2McpGnRZDEmHmp2BcaEWB5XKbc5XBJ2i4tRwhthVgoUo8V5NT8ePgRSPxeFZFFZEuLAPDqGh4u6LGeYcZdveNTTy",
  "key39": "4rbd4FRb9rEXvbrmCE5gLr9idPxXXoySNFpNSghAEKdHjW7vxQsrwo7cyxftFhxXML2Lez2kqqzBQVEUWz9r6Nd7",
  "key40": "5ZNBeZ4HBnvuWSdRbCjwdnNxk6RdmJ8YyxxkQYWJZwxcEhqTHGTjrVa5pjGG5yuj28EfW2jX8DJ6pspDVyYqiYDK",
  "key41": "5KQ4aEM8RYhUrwqsi5a73hyuprN97QhinGCL3deVUTXYXeo1adM2NZamG1PVKj1GRi6ULqJrwpfg32fdhpWrbypw",
  "key42": "3VcrDTNHB6m9rZnxdHZttayXpahtvChUXFCkGCcxkg6evwNPQggsmsA5ygusHvky5VDquXqvm51DP8Zg8MtZvVdv"
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
