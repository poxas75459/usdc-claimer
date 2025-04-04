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
    "28RQnddBBNCC59SaGKzjqp8TmfCJVbeZdCHQRUA7M8wGygpCyDg3pdNUY4nckgHA4db3NNC3s7rbpXKNaThSZCWr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CNS1yYtuvhWPFVkXgz163SUo4zBeCYboDgE6xnPucFidbGyZTmvHJy7qovMvhN9wViuGBfo7wfM7k9Cfr5bZFr3",
  "key1": "51nKtuRCAeoZfDr4PNnRkahktnAcCdQm4i3uramz8fAbnAfhyya2Mya5g5t6LoGMJD4Kgmgso161WNTqb4RdZrmF",
  "key2": "5bLRQvzPK98YtfBijuB4TnzyZcsK2eqwZ4QMCxA68CHVD6JjgUP8hWyaFyAVMWnQ94uBPq4BQxch21XPGZit9w9Q",
  "key3": "4sCr9iZ1UZ2zxVs85jNhPa5PpE7ewUCoSENzo9JTCsPkzKZcGntKebkM1rGtCCA84B2oy81N2JEsPHwxNuqvv9pS",
  "key4": "56p8VcPGy7HpzQdgxYCnuJtjhpEWJ3H8nACGb1XuDCsUHCgKCcz52mVR8vUR73bDRBGt57oSa5cwE2qD2SX1LnKo",
  "key5": "5siSBZ73inkMhvym5LtkG3Zu7NcicRULzwuzXjKni8Qz7W8w2XRyZYMWVaTQPKnetA65k4hzDGpVYoAYqfc43Qoq",
  "key6": "TPoMenhuJdxtpbjuUfj2Do73rAPUZYRJNQDba7w2S1FQ8Xs3heq34NfqfsHJdp1tjmJovtbTbDLHpgwrwhFaRrk",
  "key7": "5i5NpBNMk5myJ6hL1RuKJu9zsJsaNqEcLRcJkjBytNjn7zYnyhtksAiVca9kNXEHpjbJ3TUrDrcxRjcAiorytRaC",
  "key8": "5XfKEmkx6LFq5LQR2oUb5rkUqszBTj5AkPqbXZ1QtCFvdzhPPYSgVjgaFcbeMC8Ab9Xr5sm3EgF6ovEa2jdSPam8",
  "key9": "4w2QQRsDD7qJKTkuA2TCZVwLjv1hi4sKQ14cr3kNdTiAu5uzUUjCkYBCbn62FSvW8wpnRLaVbKhqWuWWJQPmMKuR",
  "key10": "58sLF49Kok1V3jNK8rurj6JomZztFkAL5XCEam6AsKo1ShLnABHg8HB1evcRC9E5wZymb2zaKAcnPmgLVnGT7KhJ",
  "key11": "3qaxy1PnzyF6b8aykgZ9fC8DSD5PyuCCQUDYKTzrT5Uq5AgWJzqnHhZXVMLabxGVS63UM2t1rPWokVB6P2kgCeLf",
  "key12": "4VDB3fX4miU8cKwRHAybA5cQdrnFy1GCzR48ud1ip89bjeHbAJGtB5R5aZB1anpbuf81bDSRweJxpxVRitLq2Lpc",
  "key13": "4G898RhG3zLyTK9HcMvegnxELn1RkspEfKGDkade18A3SvdCMZgemRpa3Xbx8ZkTC3KELQdzTdoBmH8hwDThJmDt",
  "key14": "mTEBYSvj4JuVw24QYGpa1t3dDSTkjTGwGR7V2vr3VKHFPHtfL1CRiyLndWkJLn4vuCKNHin592KmNiTEUq3kZnX",
  "key15": "UmjrJCtW8uYt6QTDdcX3p2ihs8rXWVbHc42UaDH11S3xsJXpckEY9kAarpNEvP78rpHPxLGmd8DUZtcD6uMfby1",
  "key16": "FkR9jwJLkMZvho2oqA8v7JCWWmxDWZrWBbpt1GeDZNob9Mn6X6R8q2rWqqybnsR4DCpuxBmnZHApZDjQ7Nwiqtb",
  "key17": "2oamQJKwbKG58EZVKVc65n1tdwudiQeUP61dBL7XzBZ5bD4t5L8d54n4tVAgM8XeAgqh2q84aNC8nmyZ7w31iZfC",
  "key18": "5YRjSHKKzfxMES8M9xEzUiFMRP21QQm146kxXSrfM9AFYdkDzStPPnwgydisBKW57dNzLh2tkf7pZnR3HLRbNKD8",
  "key19": "3jRQM4Hz9SZioRcPHbvXaoiDRxVLw7kLxFbaSC4QX5pHbUnEStEn9NFM4T6XfitKmoGgdiUJpwHXsvp5jgoEAgWJ",
  "key20": "4irm6cvmRfM9BX3GKJC7hfsYoZXu9CDPU3P6GfTW73QPNrKYa6HukpHw1xU6dt3k6sWjvpo7HKM2EofdDrjCZQcb",
  "key21": "4vGbDADXySPwgAUKEby7WHPoFJbEcJwzQX9bgEinKdkzYKysquohWL9RS9MNG4wUwSuusuHQiwKi3ujkBkfzpADS",
  "key22": "63YAisQEfBJgLzVLb2Gwrk1xeanxmZrnCRm3DeFuan4wap5x2hibHtcRrdvVozyC3x4prWoqctRNf2BfQswbysXc",
  "key23": "4Gj6un1UnEqx4GtZPeZ9Em2DYB2HDnmXjvPjbw4i4k5bZ3ZvBeYe6cT7g1s571HgwSrSo7dgxtesVitiWrsTs96w",
  "key24": "67C4cu3bxdUm5uREQo3Stoz2eaMGTBxD8onU12Nhw6HqVX9Z69XTFuZPTZmatMznpc3YxDu5noe7DBtQ3aDVmVHf",
  "key25": "212oYzV1miHMzYQFmsHYPS7izJ63WQD1kVbyXfePK5SWfYGVAMnLeUEc15zv42Aus6FXjWJBjnVTmtqZ6dFcihk1",
  "key26": "nggUT3DxydoWyd86ArpBqUXtP3QVixapG3gMTQXSXFiKNmk1SY4tgGTXa9GTV4oDarmTo1ZiKRfTSDJJjrwxGw7",
  "key27": "4WfWXEm4fq4WGac8N6nqN8LZta2PWECZ71BtfsjgHY86YA3kPQ2GGTyCzgHCgfneqgqF6XZB66GRmLuJiAdAYUSa",
  "key28": "3F2vr6Pgz5BT6NEFRdsxqoHwfZf5JW1yBtyDYNSnkmNKKK3McGCpknjQZjA47RK8EK1gceQFvyayko2XzKfrn9PU",
  "key29": "f8md5aYqUX9Syb6rpxU1afGpANhmLB7fDf36EDFjzUJPtbHxxYeCSQcn1iFHqwLDZvdisLNQPSP7w8b5HNt6qdE",
  "key30": "4bfbkZbD7hcKBxPuABHivxssnNdnSTC2AToAbybyDADmCBY1uhAa9CPaQ6UqbALL9umUaLDyC5Pd1JYFBW3wUe3N",
  "key31": "Nxq8BndoeuvHMpxyKNAe4GsHnVg1viJ9FhkkNisXtZGFZuU8thpzkEQXsYpjMcAvFf7uSyTFVrhobcxDqJMKwHX",
  "key32": "mLRLBiCrxRStZVRTHdkbm19qathXzgxFKnMtQFSzipmySVX9ftfBnPkADWce9beJCTHiVC481hvp7ohArGf94RD",
  "key33": "5wHHq91YrbjDCuMzkVygdchpSX7cEBtZyaXakLGNXaMVNcKseYVKysmLVQZWxGwG6xJRsMsnrvbukj1bfGZXPyo7",
  "key34": "5Rn7hDCcLURBkVCfwBEw1PWXrNCpNbL2UcPtWLycvvepJ19rUf7nGB73fXxV3x8NS9qHUGj2Srwy3SByMMoCHC5s",
  "key35": "4pf5246AuXMFzSsW8TGKWcfxK7v4HBmiDpf9qP3mt6AjunzRJbVgMT13HwgCe15qX4dUN5tB58fQtUgyF6dE6EVm",
  "key36": "ekbKaoNeU8URrwLYb8ZWUxk42nN48qn4uoBGuEW3zQDxV7cQzbEgJHhFHUzhmkti3465sUQ5DJRB8dPeLWH9SPZ",
  "key37": "38MbkeYhG6BsXj7ayj4xpYajUHBtyXTHm2orPUYqHvr3Mz6B5LCa5AVwcbRZHBRdptVVnf66Mx3j8dDUhrccCAuY",
  "key38": "2c75DGRxdkcyqCxtCohpiCR2QVgnt8WAaD5ZNuyXM8MesED8ScoT9Z44Z4UdBgKpbagR51i2E3as1Zmxr57nRXB5",
  "key39": "4VV7CoKi65NAcQ6Hk18ipWqbpdjaBiDfonHP749e9iLVtB1hmTuPZHwhtsnW5GLHjgsAyymidTuoNj5MwcHJUWGq",
  "key40": "2zY8RSa5MBYSxrn2JG4yQiFWzGTSWgLwu2m6p8ZUcnoATgjkMN75hbL4mftit5c2Q8QbqqbKcknVLuc8ohgbXS5q",
  "key41": "VVhctW8Q98Sh5YjfNZgpX81rSrSCZtE7rvh6i2whmV3tZWsiacecSiPBnnFk2m6Fxcx6SaZ4NHT935L6jbhSDa1",
  "key42": "4XnUdCdBEiooMZynQVhCyi7xAoYGNr8fSwPfkNMVuA428zWZ8DykftdqxT8WyMGbLHTEJpkgD6iNy9vftPmuVUGj",
  "key43": "2MpUyuzEFPaKd2dyqg2UquSASyXPGiKDreTQwW65RDYBKW1GszGv69rWs1n1eVf4GRTnu13qiozSMCragTeX31Tj",
  "key44": "2Wch8zpoPt9qvET9NguxzuZtAxjiS2LfrzpDp8kGpcyRV5PDcaD6AggKraEE7cJFbeAS9hJVs6RkrXZfY4A1wPWm"
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
