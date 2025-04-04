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
    "9uZqXRZoc2VPJ7StfgfCyPboUoJyLffMhFyxcAauW91NHurQeuVX6iwQBzPZ25sQHCKxPY6Affwz9HMc56aUdj9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64sVvJexf8Fyd1iJgzwhpkQvwRxdMHhyk79Eu9qTbKiQEiPFaUezhrdrvvAGyxXm4NeBvfuMSUb2vCa6MtzN7YRk",
  "key1": "47vJRzTTQ6z7TzxaBZj1nrssJMpnk3L9TKxaoG8kdRjshkcXPqXUWKJeafXjdxLuhwkHgEFjTahvpsTJbhjZgF8x",
  "key2": "4EW7EN6FbFfauFEeHQmjmSSTERncL3YaqvXuRnFZnPbg1iy3sbGSTyWXKz7mZSkVU5CTsvE1NF2sff6zQcLEbwLW",
  "key3": "4977rAKqy65xnWndGoXNtz8gZAXkVMRbiJCapfhusMStjGkSffwf4sLfR8jBAuug92wqLLhTDNeeAe9eZomkDxN2",
  "key4": "5XdH1GKeKR79r6MDHTWHzjpSLeYh51pdQuKiNHXvfNHfH3bXC9iqUnWE4wvgHaHsqVuaLxFXywYq9a1kVrC5n3D9",
  "key5": "3LQ6mSoGPFn7cCJfQWMNhcGo4TVaY7VUkUwjf8YbWvfFumy5xWS7L3vtBpogKFR7LaagqRELP7ny7DmrhdNAGfXt",
  "key6": "54HqkokmqG8EFXJSrZ4EXe7ntJM3oEHAKKKwuWf7dzbsoF61pbjXBspvLVDXCcG2cmXYsFuGYEoqDR7vroZd52AG",
  "key7": "5srPbpwijLVDqERinbNgdnghBcad1WYbTPjK8ZQEpq9gnmJWzu39oMXDxakw6tpx6kuVobQfaZgwMudNvVHxD1Wk",
  "key8": "4dV48cGXBCiWAzgEKX8t8CCVi9yWhktSb3RiE9spD8YLGyqQ8iXRsybWqQ3E551gNymQmzN1koSq5goqSPPxsUCg",
  "key9": "9aX7StooEbuMhNBY4fVo1anLLDURemUKMVPWUhRxdWr2RXM9GU177K29CcPKntm8JeT4GpXMPCWT63c3vmRkukv",
  "key10": "53QSvYmtVAr6PkJWXsnbfwCaUKg915CCb5tMhxTrb56oFZGYxxKDwGeqVZFNUHmV29Mtq9iS1nrxah9UriSimkKF",
  "key11": "4crKeoWRmfEXGVQt5zKbDKBeHN3bkkSramFWgzVi8jwgWzkPjfgSgdJT8oDUyehAbX4Y5BcBVCzwrNVzQQrkCkdV",
  "key12": "4hNJRvLfWUnUMsZeSfPuimC98BwwDwHxF86fFAapRm6opYfTFXwhabPucLggo9JBWHNM8aP8Bt4BvaoTqthjTcbJ",
  "key13": "5v6Yo2KrPBcDmw2PL2RZHGoxTpn378J15CF3eBHPXhSNqym4YYYEXkPCB9CiDmHMAnLXQzV61GJExFXyNCZmJmwj",
  "key14": "KXUuqhYpaLrCik3Lou8mdmU4YkcxpUXvPuwK2i8wqTAqkd37tcGwF1iHDapgd3sCNeEhoC3NMZZXUSrYHGcTLjS",
  "key15": "65ND1NhwMd6AB5f29rjawm2q1Q7iQBXahEzt3M2gvqVhzhe7StP9DTkTS4Bb8VuXbNyoh28GNmEfM4BWtaQbzeuL",
  "key16": "2f139JjmheKbmfw3bV4DPxewYUh3t7ewv8zUo9xPQcJfMeBkykxWMSrhn63NoHsJTVK1hdaQPoe6NcuHapH7BSXy",
  "key17": "5tof93A5mfhCh45yWRzPd3VjrSVc2i2seyXLvUy2H4A2EWYPXLHx2xDVtRQXN1gr9byrqmarJskyBZfkNGSwP5xg",
  "key18": "2FamNUjYKqfBqhs56jJHgEBanhZTsz61Y37jzETQcJc6XScvWsN97ksLDTEzrcQSfa4U2nj9e5LtaXiQfN354YgJ",
  "key19": "4oAvg8zbs98wVJVr62uddBtmzy2txvj4EAH8kpSx5t6maphRHoRz65s6qULXarjHBjbj3qyBNaEDfchWPJn6TmUS",
  "key20": "5MjifwjRiU4kScDm9xqCfoauSyFRmHAfijnSQaRdRQqyJv8rWZBqLvyXZDCG8TCMMmUk5sz2EJWHWoBk5cmYQvjB",
  "key21": "5k3cTCCYJ2ThnVhESyTxed1XF1oFxEmfMWEqgUumCj4GbLskvSM5ue3zNUyP4WobGbwJz7yH2BbK2HWyap9TNpqJ",
  "key22": "3BuqmFiKdYWSMZGbWaWvyrqzUykdpZHJDRJmfHrN6KSDMgrypStoogewUQkWnsC78B2HHqPKiuZdgWkKwaTJjJcB",
  "key23": "3yS3sm559RSfirrrXH1usB9t3i5LJdZLVzbfc3a6SHzFqeK9W1W9dohdv6GG7XPbLZDJLT5Ea2V7K77qJoWQAPHf",
  "key24": "2entNduzjvMwwdMogbyatSLsmVxy6hhDhmXnw5tf8c1nwxx38r3WiZyaWVvSyoDoEVJ1GYB69DPos91AAQ2qmcxx",
  "key25": "5F2stKt2boykvpbinA7SZ2YsXMbiB9VmwVEbC3cE4jw1ia7CV8SejWW3vkDSQSr9ag2RQgCYNXoXHP7NRG6U7Sbc",
  "key26": "TZ2SNGCEt7ThsRN7nujeATrAZomGqGFUBfSYMDwDDuT829Arjtsd4NoysgHFEmY7qvtbsD2ZALU2WLbYWSYyTmx",
  "key27": "51bycqwbr6HT6963FpcRoW6B2KBFHsCXHTFuskQXVW6JhMTM3QWtYKoAoaV8is47AdoTLFcNA9UkwXPZcwQpXNmU",
  "key28": "4RXXcAfF5ykqNQ8GLrjV1UXbFbzaDBQvcnwKFzGDu9yY9NrvenSNVPCHQPwUyf8sGHhYGN1xViCBeMdEcuS6fMoj",
  "key29": "4FUkcSytTNmiKZpyGNG3KV2kjtJ2PhMX4kGaTehbozEMzkjfKDS2p8SR59caLmDUw4tTeD7QoUAAKhw1nhJGvDUf",
  "key30": "22aQ2CtrxzgiBoH1dQjZsq3z6om23FrVS3JRtyXh4bWBK8ZxZoBXCqKhrH1j28Vqm2xzpa1c7JNThB2W4LUNKPQU",
  "key31": "3Mn53R9V9tBU2xuwT8x8oxKjwppyVosik14jVoxHfVJJMY3XLGEMyAFa2k11vymcS2v6rvdYAo8mu6kr5Rtyc7oL",
  "key32": "5ptESQaipJer6GVLqrcRoWyMVi4PwrVZjdtfQyuHLkADpGfNgRFFjobCDTxG6D1iCff2Lbrx8kriRMs3keQJ3Lrs",
  "key33": "5iLAx7fx1FLDngtAdPHnqyHPqx6NTrQ9F8f2vDvyMYFv6jgoWQnq8dL7r7Q3x9T5F2xPCVN3dxSMe8RdspJ6mkuE",
  "key34": "4py8cr2YWZ9qt6BokJVDjPK8evDRRHWbEtjdxXVS2mRMFyJEAcMM3rhsd6vjvcDY2Qiw4tk7JMxAar9F2PE1Rd3q",
  "key35": "3hTKddQxJE4x7Quexxiw3fTUsedrcKoq8DRKEPx4onskkMifTResvkAYXLXbBLsg3EDHcwkTNsLSTPeG2GpJFnkK",
  "key36": "2wTQP5ETLgGkLipH4E8b1G7g8MWWEND9ygoNLoSkT6zqMF962NMJeSyS3qXoFjMQFgmCUBTV4zW8fkN71jpwoXq9",
  "key37": "517oAW9D2xwACsNcT4jVq9kfKEKTYAjDDadHm2Zi6tL9Zp37Vv24fsqLec6Ydamw3Z1yEhNfHzXUWkD2JwcRXFqh",
  "key38": "FE1zexGMGzEpVC3WKyqFQ9Qp6MSpLvX9HAvHEMSVKEBRGUDLE22hHYSrKiBAc1ugLtaqPbi2MiLghzbMcpwpUt8",
  "key39": "5g8EmMesCjKEc41fRv6sBZ3qceHHHBX6LF4PqqTYr9M7bhkGbctEeyLAfVkdQKiB1Xz34YZcyPxKNRYRQzkCa4Z8",
  "key40": "5kta3mZJXQcA7S7BRZHjumkcYsJoKtSXxyVc6cAaU9DXxuTK6XSSkfVmfJPaLRg2rGbZKqnrPvd99d1noobv9yvg",
  "key41": "5an6L9YwT86tcmb9jb4z2rrE3e4jZJ22ZkMCQ1T3ymhgiK3BJZezgBXsQDo1Rdx9HujeWLaffpNtE9SJmNDFQWbb"
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
