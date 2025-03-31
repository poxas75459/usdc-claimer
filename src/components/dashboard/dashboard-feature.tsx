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
    "3zdZ4YUEzwdb4U2nimLgs9aWZoPciGf9VQkAfzudyDrhqeTkP51GAaL1BKgUDMeKR4wM11sCWQ9p7HmJdf2Cuocf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bqWv3besC6fJnEDDn4hvn1oxwEzn6JJk6AAWuscdPugV5wDhChGvJ6h71yDuoRvudzjPuwgJNUoYZc4iboTNKdx",
  "key1": "39jD8TiR47rgXJGm7diXhyNUjPuNPYVittTQnf7LvsYryV8QXw6gD5d4SWGEWuVLULbzzQCHk2ZVvTWMEdQ42HUd",
  "key2": "2D2fhgjEqjLiCRVXywjbxK2P2biznzNuCATQuXZSgk3PwZ9YQTLokAGreYS4pqsaLfohryeW855yNjChJxRcoJpw",
  "key3": "2sJpZNYmWwDhcVSFcDVGbVnFmhCopKwUMN6o5yDNBgmUQePBBp6bcvsoz2S1NEKa5Jec5J7qfFauHWc79hJfrwyZ",
  "key4": "htfeG7jV4i8GcvYdJv65X2e6ctV3cSd19nQNtfCCkAJSEr9JAsjuDwABLfiUePHkRJXSqLefC6KTE3xTb8boXHi",
  "key5": "k5RiPUJS8RJ59w8CRAQ9n4rsL5uPLSXUZXPREAsCD1ZmAhiTy3sEtJfhHctKFhPjszVSTKYJQ7oXKMypQ1n5rfk",
  "key6": "2pZi2Sovt5F3ok1VAyergjw9ckRf5sSdJ9woHxAAFFzNfLJKYSCpeBUpoFPrChZ5fPgix2fateBWrtzEDzTF3hAg",
  "key7": "23eYQuckmc2i2WV3qoPPLTUYZJr2BFYXWPciCj2PvJhTpysqm8SKKrz94HvLiJBWwaK5REUAtH44sud9Fovg5pnA",
  "key8": "2iuZwkUWFDmWjWWt5R25Mx65hbGGSztE8E5Zu6CL4axhw8JBkfZs3NodmgddMQmVSbof8yRC5u4WsDAsLZtWY2XP",
  "key9": "3Vj6VXJy1te9Jkw95LWcJN4cqN7MpbkXzFsMECu8SiaUGV6brVNB3G1ydSozb4sr87xei2whv3wHDzwStv6dp6U",
  "key10": "5DeUiL5DvUmu51SGU35V4Me4dg2JKe3ye3GHAq5jfPU8oXKSy15A7YhbkZP6HZ4gisZjWKYo5WprLbo7MmJkxZzo",
  "key11": "2nWkSTLfsSPUCjKEPPJe5tNypmL894zLATLaTYDr7SLoHuB7RaRcfK8P8SobU75Qrhxe4rWE2XCmUEKCbiF7GNPF",
  "key12": "21acDS27eTdbnvPzgCKFVR8pgRQFezVt7BbYJZrdestumF8nYpnSjoNyDcD8s2zc6tNRV5HvHvsaF5mzu7kx9W8f",
  "key13": "3pcMDFDzsQjJWedhNXKFkvDB1hgWqoD2Nn5U9NkMLFqrYuZ4YK8zFiC9MqhH4pCG9SGfbtB5XnwwV6j6oSosf997",
  "key14": "3LxxCXCaQJii4jzcxREd3d9xoUG9dqKYCGUW9eG6iPb7VYkuwY9gdHvBo6AhACJAdTKif6eSDC51cERhZB122WAs",
  "key15": "8mohePDwvLXQaE3DVqoP7fhZVxxXwagNqMZ9mU2ZEE4r1N8NdapEgSnwDSvAyr7bY6c11Gp2BXYUtBU8A9kwS2p",
  "key16": "5Pm98p4thjtAHVyqiTGeNYdXcbtNa7MNhZQASt3wK3vnUpj2aLiWPu2kVxPUCrifqTSTig5StNjT7zEZnawDWyqU",
  "key17": "4qj3amtEJs58PPPMRje4fXnNJuxPuSxMkQakBgPmduoZtSyz5y3DjMENpj3GCn1ti2r3qudQj3VQvbr4qWdRJqhK",
  "key18": "5oyUW4E9HfSJV4R6qeeVHAG1XYdtpQAQ2gVBvN3RuAtpqUcC7MZHwDbETaALMVxT2c6kpuG7eZSAnAmLiERAfkZ1",
  "key19": "4aPczuSHwt4TQzuvFYSnRd8wwBLHh9fF2SAr15ngaakyoZnri62DS5Xrye5PBqNFHtEXyatCfDGUwfn9uq2aC3QC",
  "key20": "4c61a4UD2rhRUK5zzJtDnC9bVn8bQVu8tGb2fZMPn9ixZoBRsN924nThMawPHm7dtyt2oVPxkd2pMKSUbeQ4xrEm",
  "key21": "3fJok6i6TRncgmsDYYPibW4HMz7ZAuWQ5fuBf55zos5pXkcgoi4EQPUf9QGhiniGmWxLVueHSTysZmqpX5TUJyuT",
  "key22": "3SkZgVvWPwVwghHZFYpSNtPTEHNABdmssJfnNrJ7VdtJwZEe7ytEtaJGGUvPTQbCuBaLiHyqj5pgXe5DPUuihDHk",
  "key23": "536AgPknuVc6oeq9q2DuxiY2RmCd5xVAqiS5JApDB7QLqTf1nDnFzmuSujdLhAGPSLmYurDbK5rAtbrDi8nJzY1C",
  "key24": "3v1f8oc4Jqtrd7VAgqHiU4N6ZvwMT9EGQHumkGPP5pPNWZXuNaCPr9b1FuUYbkKP7oazbwx7CaoyaqqNgZac6y62",
  "key25": "4u6gzvKnGYFgErtEz3vKBDhW6M86y4UVGmcwsfnbbvjMHjW1okBAwFHB2d2kve8ioWD47mFu1dau31npFVQPssST",
  "key26": "7u5APcfQ2HvVwuh3CcSsVEZF92Jbd3TRyE4bLFn2kcpgE5Exr4SkfTzvkFKqqS6mQ347MMKwpW1RSbMqsV9XSAp",
  "key27": "2bDQ3HuSD1zfDfbc44GwTArpd7qM2vfcQrQuy6y84pSSTvBFsBMuNdJQLXLYFuVkV6sF6axqv7TpZpbXCLdnZR3g",
  "key28": "3VNEagppn6Qii1V44Gbohwve6ohi6TZ48ApCnAQGZL8Uj1P94fEFw58XqvQ9StpaDQgVWpPsYBxtgS5rMGgkDcJL",
  "key29": "5UpUzvJgp7uP1X46GBzMFJaoXvN1N4u6gjEgHaNCKzBRoYLMgmwwdUSoNcYQa5RhN8x89QiGQUSTkqaAK8vcuyao",
  "key30": "2rkoBAyE9FB3UNF5aAkBsQvZKySN5K3ftRnEFCJtanBXfRHy7aqQfGSihQsDdAGH8u5PTqo12JzeUZF4msxpf3aj",
  "key31": "3JoNxGzdbqv97BfQPiZxDbQa8K2jrwRDYdi5sotgZit9qYxGHAsB9KfzvrHP9TdS24KNoeRZRxfmxM33wdwQw3CW",
  "key32": "4N4Xpt6RmSehewUZXzawgAyBvuMsqQuKnx9s1xvjX4qnDmtV74L1BGLDMgAMvKwMAVj1euyeqvHqd3mmcusGygHv",
  "key33": "2PQunvmncir2So4qieq5dUebzzWL7Rwu4XGxToxvz5WbFLxbiztzGTsWanwKumHzGaZoauawcFvu9f8BQ9pXi1Q3",
  "key34": "QwwkSJBZ2ou8gEWk2DffvKzhG2DgLSj5kRCm5R2EDqqoXyDHiyw8mNypVy5pGtrtRt9DD1xpn356zLhBAzDTDW3",
  "key35": "3EK25h8dPc5WwgUyvJMhPnvZRyMW1s83NYbk3EG22hGhpMftUnopc7eeddnMa9vBRH59kvEiQjLnjmtndiiwtGiK"
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
