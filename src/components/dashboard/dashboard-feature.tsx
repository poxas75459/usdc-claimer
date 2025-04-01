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
    "4XYStbiyFAyj3wumqPFvXcowv2Mrs5tKDaVofPjPsfHNd517kjaCBAFoLKCu79Y2iFiYrZvzagT8V39EfmjSVnHX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ALCsu4agjtjL7MTHoiGsBWVqQSbvKS2NgwSSZpFJgzkMwUcuoeBzpiaiKp9s4AP5w6KjgwhLu84begCBvrvqhxu",
  "key1": "2cSrgp1W6osCpEFiKQt3Vhq6wAssQ5CsSJCcJuubDJH7TkkQdEjfdbq3tT4fcjvNCd3ntjyWTRjMv2Vc5cvc5JH2",
  "key2": "8kFmNG5YNc9jLqHSGLXtYXG3KmpA3nVeWiCSuEfVBgVfc4G6QQ4fNSnaF3HA4UM3McBq4oAkAG6x581MRzHALeB",
  "key3": "3roup8TNELNL9TocJndJwrgo24QovM4Dmc5bBTWwZ1Y6Rc4oLs9orZjuYnfWdiir4wJUPejQiPacF384n6LyKN27",
  "key4": "1HSzxYrUrBcyo7yhsQkjztfpYWpqs7BKoHo3HPj4qaKRAzu7VxXJ2XBEUjzmgw2CAi9cxqypWithosFRFeFzwQp",
  "key5": "4PT9bMsvsgMynfAvDM5E4oJd7sFgQ4AurtV47cAepHKHpL69a7xBsD9thjhydAoY4B7CSZ2NQZA1EBCgyHDAsy1X",
  "key6": "4f37etmYz6BqnakHzuudQqB6c6yiCtmZxYJzUvf6y2hzgeHkTvdw1cVHm2yVirWp8hiajZLaKAJC9yTXmuprvZ3b",
  "key7": "3PTG4T3vF4JMeDY3FWn42xR6coc9yyqUGVNGzBVAWujw2Si61qE2Lm28TNAgNWqRi2NxHVxqJVKpbfxEv5SF758K",
  "key8": "4NKQMW7EejXDkquBdHyHrZ33nmxcM77C5wz9jCuXiBgm8x4yeZPXK8j14p46ZswB5fjKLsvG3csM9qUg4FmmY8mo",
  "key9": "2DakJ4qoFeGFWtd2dvSby69dkwYGQVoYQiseBSVcDnMaP91X1FHX9Qr8qLSe3CvKK5R8cjzm9jNJwW2Fiwhxj5YR",
  "key10": "3wj3D5Qfo1iwGcXU6GdJYLFWG8Shv7C5kUb3UaArc3M4qyjBvDUQTB6EafiLx48gdQSwRxccB8YeXVRQqKgjMY34",
  "key11": "3T4zivqJY8oqBFHR2Xw4oamKLn5tS5w5fCaLLPP1PAE1pTySxpoxuhsHdrUTiPGx4XNF8SA1y6TQc6W8Lg2qXBVM",
  "key12": "2uqcMv5c6mL1rMBPatJKXofZZfxj41sx6sLRmgTJEEW54yucv2x3zgi8y5x1k9RXXQR3bpgXZQQR5qdFdfqMAn2T",
  "key13": "2mC4A7tQ3c8ptS816bM7sgdnbqKm1JLkCX2huLpbdVjozck8oXjbQFEfQq73332a9xfYRSCwnso1jExR9r8bjyQD",
  "key14": "4jztcQhMmtHoKRHG7GwjnXokHm247SqaaiJGzGxgsLHHBgA35GyCxrSfsFhBaky2pSHg1gtshYLubW1PwnSMVfRK",
  "key15": "JZYz7f5qD2dYE3vJS6sq8mBShQTrK4QZVfwF2fFEdzDFNcDbbmCd1gTqiqzaMcgLure4aZUKjwVKCDznVeGWGou",
  "key16": "ZyjgFrWhUqDvQAeEEsV9X9Y9oe1g5wvZRAfG4SKYWGLuNGtVf4mUhqax4QUkRztwoE7hyggyP19gLsiMtFVLVTQ",
  "key17": "bUpbgdor4TBHKZGMgCr8EoKFYqmttTL98VQGbDYUo5vJdNm8GFCa2WXXcNNxD41XFNVGcHYoZvvmMGArekwBgkH",
  "key18": "4pcWvnNYzK64uwhSnLgKxoHT46N7Z3BzJNMnJGXTc1ZtsRbcAUVwxzidTLHBMMgduppqiWw2EaATLz286wiWaE2X",
  "key19": "e8qc5b6yAgpqFKGze92n67joSSdG4mVdbjfQjSgWkCP3FLK4jPv8ueH8p3ECnjyPKUvznYe5Z3XXv3MbaeBLV7q",
  "key20": "5DAGcngStypTYWnxXPnNMpwaVFJDJJuFjSWddJTSegef9kUJWm2ZZNeFr8jVaE3436oYYZmwKoiTiYBrmdmhz5GC",
  "key21": "3wxcBQDRSS4Sip18KNXPD9BEoYF3QLVjnShCrDkEzguDqDwVYxZD4mjjUdM28Kuk1J5H4SnJztiQmj9Yocc3GsFF",
  "key22": "4sALGEq5aTAA2XDEE5UAfi1yZyRjtckcAezB8U9h13FTfUjdFhQKFBw2Zfn6Fe78t9BPPz38EhUeJBNKM3ab3BdV",
  "key23": "28yPrJKvd4gF7omdHJMAFSHcj9F1mbx4Sa92wMVWECDNBUjeWvdMHvJ21sDxKZAknNniCzmEZ9MCVoDo6q4pWUVS",
  "key24": "2EbJoCqqGCFVT3FFMiBzRmh8SHBfVtPoZ8B4VEFf7oeYufeXJtwWGrhuWsoqBn7MtwroKXTJqxRF7nafugxaZYKR",
  "key25": "3gJtgu9fFtQyzN9UeXY1QkZQb1CVceDVHMjQDevi3NMrR7uP8rP2xgE7LP8T4rPHriVfmxgydp9N7hfj61eefYMy",
  "key26": "5wcFpwTibjV7oer4sHrMQt9SMefx8uLc3EFiJxuRvGgsq11xu27Evf5GtfERpRuVWhn7fxBnXshepeoHo2nvfR4g",
  "key27": "4of1XrGPXunBZWsm2dccEc9GPzYCVfyVXzbmxSymf4v5e8JEwXgvKF9ede6kgWQesszb73dspBhPq4b3RauyTK6P",
  "key28": "59dxKrUS6BGt5sTqH6KjibhpfAFJjHyzBxG8e14xTFonxzYv7uMLEBGuXwn5KR7hX3QUun9bNgDWoA4wb3GzBjug",
  "key29": "4GCU1a3q5K7AmsbmtVkWRWWE2rDvCXdYZumxHLzSNLpqGcMHdiGa5GEq74ugo82t5VK7pimgu47FLFe9mfo4ePXZ",
  "key30": "3ZKdBJRX8dkNoeYsLB22cvishCuZGFj6T12FD1Kck9ddwR4Jmgh6zrhyV6G4zBs45zPj4ZvRYv5JKuvKAahEmyAs",
  "key31": "4fg4viyjGf1d3UjcFU2SbxekV55GYWMZ47srdiwjUjiWbS2h1zLHVmQJjLfw3Mc8YRVjchkvQD9EBTPKu8XSohAj",
  "key32": "4n4Dir4tNAVAEfP1QZw3RuF1cb2Ap4gUFtBu1fhYyg6eY2jViTUehFLjn6yLLG7ATvdkic6qG1gLvPD6L7T2hJFN",
  "key33": "3HfQnSb2tMYoTnj43n6mgaziPXz43QouTqtnGavGBAhVSXz4feScGaQQdZD5kUbiQWCeVNXK8uVicXCVtPbjR22y",
  "key34": "3KNkadKR7cHP1HvPMgSrGRa4RHd6ECt7iBZnDSGJd2mubabe9qhqS8jwq4N13h5pndYEBiDH4zPLqRFLa4D4Cb3p",
  "key35": "2hqUQiJAwgjvh95ojjJdrBfWhtg85dJkuGuRR8o7kwuAHiyPqRc2xgNbqEYnK2hSfHAFuqUpEcZAKpPLeEZ7yMzV",
  "key36": "5jDSAYG62t9yK3SRn1kqqzbqtAmjNTbooA8piZbJMDqk3UpJYxq6VGryANPLgpenR9cfVXGQro66xqgHyafPnDMA",
  "key37": "4kxumQoNV2818JekQqdfVf7Yqjy2oBMAUouuaPQCQUjX7DqpeKrAtynfrLBD9frQtUf7bmradqdwxcoA78x2vrBP",
  "key38": "4MKcVfjwMorGTxCD98Ep6yFYdBUCjjXCzMRzdnuQaXT1MvvnytRciiNdseJztsw4afT8ah3Xr497saNE3PoWJ6ih",
  "key39": "5skYuC9NYh1bXM5nqTmX2vYepWQDHXgCfuhGT8zQL31wNVmuKiiJfKEFJtdo8XuS8uoH5PPnXeT5mpStoyE5hPyS",
  "key40": "4mJRq6hopwxfFNzDFisrPzwXmY1JubnPTRtKxVmjjNc8QKA4kqWDa6xfjZ3SEtQm3baiqhnK1pHwYbrVV53VDkhW",
  "key41": "3dBrXm84EqEy6vyCvUimFVqTLqbb9GJPLugQozw7TsPD3JsuLTwW5ouJSJJhKAreNtxaFgrxsP4fGQ1SkoVinyWy",
  "key42": "2FdCDWemmNFC32CvVzZtg8chz486QUnv9SXXxwzFxYtG2wmQ9jvkNCtTT3vxpzTpJ8g79MTtmnWmRyb6TV4FhtKv"
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
