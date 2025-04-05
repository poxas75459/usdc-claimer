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
    "pw1dAGH1kwc4rbHf5CPCLc8kiMeVEXHNGcrGYpFw1d6dFUP7aCUMToDNaZauxnevcirxZzzXeajyyH4BHiimqxr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z17yxoCfcQUVV4Yu8YBCfnmofWKDQhsU5UyTfZ7pS16yGnG9KGG41dk7Jomawe5N1zZ8G1gwRNEqacVrBf2XYZd",
  "key1": "3s3YLp3nFZ73fXyqoX5baHyGmjtB1e7rmu4zCLRWhAh7MkETrCozcVgqeUB42yr1PCUcKBTCWWMQvYRsgyH9puRw",
  "key2": "31MFQ97mzS53yd8Y6Qr3iQYge4xuxfkv1PryEhN2i9jGMAC686ZJ4meeDGsjRRyhCTPMFpgiDt2RMCRm6joW44be",
  "key3": "2VDSMX17AtsSrE6zG3DmufT7nyP1fSarMeHnHXseAM17LBLPZm4NqAzFWrArqZ4m98tqdy8LY6WEutjtRaRqPu7z",
  "key4": "53NzRxdcUwFda43VxANrRuaFpTBLSrMsvuJBGP2cXKsAAYq9keC37qyd5EccwFv32GVtAzzcmbLd952VWRdFCR5N",
  "key5": "HTKgd1tWQ9pn3e6FcZr1HwXuHYKLa9BWaGjzvmGekhMFTsWejQo4XJsGqiz5CUCsG4BVpJ8ApD8gPcJZtBCx2HX",
  "key6": "5aWwCrKRfUuHo9JjCopNbD6CGEFb6JC46VviJQpCHx5i3wVhdrK8iM6mVLVmnNVsVbiMMQAgux7AtrKh5Smnt3rR",
  "key7": "5UeUEKqhBx5ov95SGgF1QjhB5JU3bYBwaGXEwqHkcSQTU6oQpXbM2ZLUKT6jLmecxZppkfkP4a8UVfo7ETgef9tq",
  "key8": "2tsfyb24GtMPDa2FD5G2TkYhVRsAZjNx53Kp7MAroYXNfXkC5N7FfKdyrZQtyupr3syYHSzzkGD5HS381Jh1xcu3",
  "key9": "3dFekoFXBoVgTCNCvJE23K6r1BSHsoMjVUQ19Zwhk7xNQgBydGYPrD2jAZVqPoSkrEgzQ47QEUTPs3BbtWAwrjZu",
  "key10": "4ZjGkVcKnAYtG11rws9gP2R4kZfjqWCvU3Y7SgvWzRBQXUQY1fHPC88XFp5X8Fyfz7QQepeiGaxPmHoE1Kzx8NhD",
  "key11": "yg6EjoASREQHZeBPmnzPivNoUxa8cJq6yEciVJVe3k5hhJNSLkizQDQoC4dRfWWXAtRwkYAnYU17z17WDugpfYy",
  "key12": "4YWdsQ4VTyf4A6Gh86TLo5CdHh7ZJ2DW8qJ2ChdR7WRYXukK5Hx2LgZxMFpwF8WJZHZBNHduTkCX1faeVbMxJ7vv",
  "key13": "5pwNaouFZVjHkz5y8mmEosC3g7RXheV4yfrhYs21wcKuwFXhUeVsF26NJgr8B34t5cm9SSFYLM5JhYpGyKN48stB",
  "key14": "3t2EyC3wuWGAVXTHDVatWANe1vqXsbkGxcnsUTE7MmYBCVwp1jRSMFkFizF8fdXjcoqwhEha5axErdQtUv1DQRsg",
  "key15": "4QdiMUEsh5UWPimndkW4k3MARQK9WCUbNpo6e25iyzHRsJfywRTot46EAkyd8LzYR4ua7XrtFnsLUnrzBfc41gi2",
  "key16": "2Ft337VBAHQjTs6LYQZt69iYJAQfrM4ZPowm5N1iHw88cPb2JqfKFivwTYGruM3ugjmtyLx7qRbtAnNG96nLDRoJ",
  "key17": "4nZZyzNUN6aWxYYt1nGZb7GEfhoNvnd4n2CSQ1ersT5442HqVNGiZDkFZeNKGyVFb8iGgAu6Tkz87nKV5SiFsvk8",
  "key18": "4ayaU15uz9vbwyZowfvnnWnwG4GUhJHAJngmZfmDYo3sQ1WTREEQxLVWpHVY8X8QZc95JJRw7cAuPQXbHErJCVUD",
  "key19": "67qindFCeUmBiYnwjwVUJY7LFgwsTUwLh9jN191kyiRJZC43qsoxLHzmjNxSJh7aT2PEayL62r9JETvA4FBCirMU",
  "key20": "3oiuCwY7T3fXBZbMRRvenVDDBttzYWzZCybSdhBchJvam9eYrym86Z2PWADxUrkfechG12YBNg2LFajAxsPJUQEy",
  "key21": "LH7SzbvDgLibnqkuzUCXKRWhqnxaGDoivATu2CKEwBd6eu5izKc6hQZaEVUva6t6do3efLCbYJ4PLUbv5WisdFE",
  "key22": "3rGXRFfKT9qBQshYBeYCHXNvPWyDU32sTjfF64JNtWDeVufu9AqNjqrAwPQ26uzr1ZEs17gHfuKqTqEqKoLV8Qm5",
  "key23": "TiSGQE6QzK2XuQSv1Zgef5dVEf8aStpFGEuatrgADovRL8MT9ABX12JA8Ffoo4a6476KvmGtdHar6zUErPoQo92",
  "key24": "47TJFvRDtJBfpFAxsURS6SRRGeDuhtZ3Up3GxLxGMGLkr91eiPfdHzNoDnTkJbyWYVyBoDoW8XNnkPFvG9G2azpo",
  "key25": "LV7v2Hdvderdb1j1zRCwWwXGaZE8Dr2BT5NJFJuRQ5WKmr32WwPnJktwqas48avpcZPwQbf8RnGwyhixuYDCYM1",
  "key26": "4WFTzMiF5dADRHAsZfnfkCgzpvQ1Tis62jiiBUXQPkiMXzYRntCZzscZkusPTvCu4dW8PL2e8bZZZjHbUathNmeH",
  "key27": "3tNGo5og7AJWFKdF25J9N62uPNH3HtJwngwHdRaCUdfCkYqVKd7pcYEFgFLNjGnzoeDBwgQ7xWtRMfyagFpwPaxR",
  "key28": "2zigcJEv6Y1s8KbNrHjhSUw5GpZ6aLKBZpZKPAoCxZYaABvbAvmFfnNUC4E6zGd1hRRZ7br132gEzpKM7DN5vA78",
  "key29": "56hBozZgo8M9obWp4U1SUm6ziuz7yvbR2rrybEAArTo9fk2qkwbXxYC2sEwVxQ2i2mzHuhovVHEXRaS3Mx9PqRw1",
  "key30": "56qpuMS8pHm2gr2ajnVptaxuAigqT8s9Ad3NbHSCScw5wXmQ7c36m3esHyCYnpcfMDZZBNqRo7Dn1WhiLeU7npjn",
  "key31": "32c8zcusyeMdRT3e2d5mXFB5biT6BuRsPvVfYNV8aXENkfvhPjCzkTuiceDZm1LwU7VKyK8SgUAmeGDFcLqJ11h6",
  "key32": "2zqxFu34Ry1NZoyufmpaikuTnYLXKooByMqWW8BnvbFUpbHdGGoYtALrmUTir723JT8teiPMaTCVDYuY5Updkuub",
  "key33": "5s7SHp6cwwc6eeEygHdgCwdCempizX7KNPUmK6dPoHU1no4dfTtSudai8fXWjY2wQmHLN6BttzA4xnhM15QcSNgT",
  "key34": "3UjT1kaPq2bypNgxyA227uupjoDzrvcwbuhYRijnp6HWQTGwoxLVzeCmUU3X5cGRJyk2yetui9Tp4XnSKmt5no26",
  "key35": "hyuoiCjDPvwQ1TRr23EjYSQmanqNWkXz6YXygpKA4xzYZzKg1WuA5YSMt4dKYznnbTkHwjep4CWTAqkb5iXNVHb",
  "key36": "5vM35r7y2ogygGVRJT9gMaoTxBamApycXVQuXZrCKzoCeGDx2WrCV173dGBtgxsxMvczxV7aU9eFpYgmkf6Jtpdb",
  "key37": "4rttaEhqwNNRnYbaTdmZv67LkUffKyfDfwRrcgqdeftGcQfUEmnyPg3QzmzdKwJ8sQDhMK5L2zxXmDBPkrh6Ep1q",
  "key38": "3JSpfFT5TRQxJjGFst5FeRzpqiToUVXoiLLKY3NfGzyqaniNHFo6psi2LmwsLRTjsXyT4d5J3NfWgYi5msDCNos3",
  "key39": "2s9p9KMQq6VYD5tEoHYxRdAMuojFuj9FpjbGVAYu9vkeT7rsS61Ndg5YneXfHBkC1Jim7M56ZKZTmEFMtu5bzY1K",
  "key40": "3LHGRy8x2TGKb1wsHLFL5o2HzLJxTYyRCNJ7jZ8ZAHqP1HHBZ5ieHoKPzQLtyuTLSmeDcHSTuDkaS8LnutMMedMV",
  "key41": "5BYBYhtiqRuQSDSMsUeC734TgupSTyuM1EgPtcjy1zZToNPUeKcSj5GvGCy1DqH21RuJwkJPp9gkZqPntSH4Gxo8"
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
