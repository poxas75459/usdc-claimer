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
    "21z2M2Zwacrv2tY5mFkxag62xKDKN9isNDb5m4u6pvywtGVNBZ4yRKLr1dHCoJvSqmAHfMCs3VRiuQVB12gKw8PU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cxyu277u9EC3VJLUSovqpd4Lg3HbNWNcKJcpH3NM7ao35BwA319YDjTboxYXk7dDPXuudkJFtWFvNMoz1nva3uE",
  "key1": "5ioNL633RGyNduHuQjzJ9DNSUQgdpoEWAoDm6FAH6oSY627phy2XGWARyWxR3oRRTZgeGZBcEkWLEAzHULG7KUXU",
  "key2": "2N4AMixTxh2nYBVi5iSXAhDTR1bTuAQMusUdsKWuyWaoRiRujXycu3kE7opHoGwN3StDfQDXQijyoKUQKV9QQzLN",
  "key3": "ALnnB14azbbMwRnZP1e42N88X65twUywLSQWuaFCZ2xN5eQ1siwsR2vpFPSh6qGWJC5HmJmKhuE9xytRvqEQJWj",
  "key4": "2CLyh3vhfv1FrLfBj7L3Ca41Bwy9tzoq73gbkz5DZF2yGx8PN9j9ePpaAv67DWjVJ9FX1hNU2QYqXh3E58PeUCTv",
  "key5": "3mnQQFkASi3STDUdF1FCueNLporNQfkcv9y4UyFFw9gQjHemwQKxGcrmSGR1bt3kLX2dnsmHbnR2ByKkbzDaG7mT",
  "key6": "4qKHJTPCm8auCk1hhAM2WKzwd5yftnvGjEF9GoJ2RuPDttWbCiVhLGDhk4Gua2YqbPz7kZ9yzMB3EPdDqSZyTsyu",
  "key7": "3ci1GAC4W6eZBg8azzZVwXqgbu7M1pp6KuhbSCsLTGNF4cQM6XmQCPKhuGJAwFyyKbfhWn6qLTDSwUaLrthFtdei",
  "key8": "4xkKSHzJW3LUsgQFBe2mEhachtRbYogn8yojKeLuM1U3dExPSx8xQj6mTN4huK6TmxWWuVFgBmooSvZUZ78QPdoR",
  "key9": "5jM5KQCnp8KyQ3d5nkeHDoAG4kVPQ7yptojyciB429hznrerN6Ze5eMa6L7MtLBbuqCGc2fjUhApieUTBP4DRhVL",
  "key10": "5eiBrVvjsHck2cFWHqBSdxotRxyYUgM6jizRRheFHsM9TdrCmSEN7gsaqYVH9DhzdNqLaqzLx7Lx4fbK6eHH3Egk",
  "key11": "2bGusZSSHaGH2eLvJeAPVzoKkXFJDf4h5AWQCVy7WLNEznkA59cU3JVPj2gQzhSX4odYy671y2o6fZaFrnzscZkT",
  "key12": "5NcBHSVgoB76Mmffh8X61t7g7t19AfKEgaksYV7TXJBe5jUFx9zLtgZMoMD3caEF9d6y6k1TxFrgqwEWiHGQPS9X",
  "key13": "4x52eHWVpptmBSVerLyZi8fqQDpwCoMUuB11WPky5pU8bhqunVjf4Z9WBe1zZ5nxuhytcF6VxsREnWgw4iQHDyCp",
  "key14": "4gHMJjS4oSmL5GDfN8jcJxzgSACGiXKHfpKtrMaNwZHXnNzUCWnpKibMgV7yHVmszRi3TLFTkayinDV4pZhq5io",
  "key15": "Ez57jQduZ35zN5smzqtKrzoJf7WJBGSTbJZvAtsSGZnTGU7UPxefCsNYgWc1y63sMkPtJhCiwRjTJ4LzHaUw8ws",
  "key16": "EUqceb6AeVuocmqUDQkbfrEodwmCnjmdUMUJupnEpeEEjQaS1Ene6WU35oxPf6537ivqePAocgfXppWACCnoUtn",
  "key17": "2XfGNFJNQGNzJMZwKrGQUVonYjLHAZb3fHyiTZhddAGNwA3HBXfUkQ83zG4HB5kWZWxz9QFWScT5RHNMtCurgXV9",
  "key18": "4rLnbzS947s5aphYGwcKuAWRnmEu8U3AEYKhL7N8MtNtj1M1Wnx4nmLWHB7jcSENYuTqL7FvpTfWhH3eFS7VstZf",
  "key19": "r36HVpK3GcqwnkKL7uv3QMtMhzDggdkwLcyiGajN7CF23oNK9jXcbZRavYBjBN8gRXvZi4rYtC5Gjs3PYgzJGEp",
  "key20": "3dswsLTVDdc8QF7Yyyhq5DSEW4Tp6UvkrEotG2qD2S2A79mijQjLvgwtWTimf6eh8Y2FAb4eRXffybhUmU92bJ2u",
  "key21": "2FU9HMFD2XhAZRd8QSpASGPpMUWVSAHGqmPFv77H5HMbkYh9ZqMnxEn2kztnt3umGtxd22L7UtSyURcKFnF5m9x5",
  "key22": "41bRvu44sePmYuzpWmE1uKSs89hpLtTMxTUEXromEpb9capJbJxeE2icCK8pEdgpPE3QMhqvA96KDFSos2sWis8",
  "key23": "2XLBtQt1ANV1PL5FmjmELRGG8uYDeNHJ8wat4c4hbRd7Yx6c7GRj2DVthJdpATJcpy5BFpUNcQxhZLrG8C3hqnCH",
  "key24": "4qbdCtWFipysTWxV1uCfKHMsGdJcCpmWF6rsEivZKddmUcvucqB8QyNXu5iEbnd1RhzeXna5w9ngpKJXJmzBgVkg",
  "key25": "5vyVNd2BWfJhDjyPsYrQQZk7ZgxvDhRyk6HkJxwfFsXF8oEVKFc1YYSt1iThrqT1Hdv5tm3rsyyzrXyzki48UagN",
  "key26": "5GDxUNFgCkvKqpuASAYQDUfARRpZ48ubpxtJzAxQ3xk19DU8DYCAvhRpSFGEupTTaLZofm8ChywUUzgctcfNZBB2",
  "key27": "2au89AoCK3cwfUKaVacyXdvsRbpRfXrmXfirxqP4VkCgos2TeQqQr9QzWa7s1NoAEbnsoo8vvCdJb284DT1rZvV8",
  "key28": "4C7XWGb4wwQnEzMoRkQ6qmnZB6Uuao3tsdguN3Awi2Bw8GoUNq6ViLDQaji7DbQ45JeGNkiNU6crMSphyUfAbGjT",
  "key29": "2cn4RwrSuK2NuBV6kQxQGPAN475puCgWyfqTKVgf2P19GP5oi8sFTPHeLVmds7v4kxxbqCLjYoi2YRFScdEUxwJ6",
  "key30": "2Nf8Lz6Y8bKV9s4R3jMrNwPpziSqSHZD6xGEizqchfvJRZBG74xMtrBZZfL7ZA8hUkuGXd3VbzHXisVeeMu9gpX",
  "key31": "63HqimKocXTQgc24yjjDSDXSRtTCF5Z7ipUP8VbR4o9ydMx3NXfHzFc4whwSFcjGjPRWA3jxsY97RHDNTUe3VsJB",
  "key32": "3RiWokUjuYTWYgSCDVz2P3tJwEdQYVZSaZ7nMGogMiESF5WLK8U9NCnfEGbLvh2Lovu5eGJMkhNMU9vVphv1h9Sq",
  "key33": "o8W1mKYHf6i1ZyKtkmCAWmbYZzHxgZNvJ3RSfE5NJwMRrdGHU9mhfgM3Pxc8XSWTgiWBbBWZQwP4L1BC5UVDerX",
  "key34": "4bVaZGfVkR2fx4Sbk1UaTyu2TQtJ65JHcuwQRFCsQr6RudruojFNFHWWXQ9VXAvVoDWf73voswAcUcRwFzYaNPZW",
  "key35": "5N5abi4Yd4TVRzbLmXRk325rp3YkJkxk7M3Nc5PWyAMEkUExFQrRmdb8kssjNVU23g3ozAK38hLjPN5r9Tziz1j8",
  "key36": "38vbQAdL31xz4wtv3jwz7NiSACJRimG76ygVPavDQKw1k98KdEdE6WjB2htyKQgCNaeAnBmp742X4sjBq1Qz6kzW",
  "key37": "26UTiQXZUQLM4VyMGJ6V8cUaQfdczM6um1VM62UfhtaEPMCTNocAaKABDZ5DBJ6QTAziAHfduspUDv4nDJv4Qjs6",
  "key38": "wdq6ayZgDDJ5CrkwVZVz6rPVoTvmgUU2H6YvCvqixcZ5giva48fNhcRDbSV1ULhftWYoyBkLcvXeWVMibAKkFyN",
  "key39": "5rN883Nc8ZiznHdyZSxqar9seve4n3sALH8y3sHMc4R3EFDCuM2fjJJEicMCNR3gxN57jtb4yXoj82fMJUxqNMza",
  "key40": "3WjFq84NZuN7Yvt5oEqZEzTGi66sCtnBviGHi14UaBiAnLWVcix3uAhqA1Qm6f3KhpzTMT8gnKLoGvDvx9wGvmvt",
  "key41": "35UbDXXA6iFF8dnHCWtv3ghcehbBxvtkSte2j2hwQe6Hnquc3YqYi4kLnHmqo1op8HA7stQfYeDg2YkReJLpJ5o7"
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
