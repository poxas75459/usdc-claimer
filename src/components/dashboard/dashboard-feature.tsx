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
    "7p5Sgc56f7p4ULCVhmYFZs1eQeyXZHsBNJDiUiTnUaiZyESWMGVrYzkjEzWJty3D9XGUWoq6AukvviH3A3b9LMP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BCfZeKuAsjgNDV1cRV4UPFtYVK8NjwjKwxpWMgcJ1skGJeV85XC2FiwrS31URwWRkbLW39oXTHgn8mpF61wDFex",
  "key1": "cB41wf2cpmpiHPh4XQjh4R8iKRkC3V8fCoAnRFxfnyxmEkfpR7jEDTFY56ddjx3whq538udXJDhisw7MVLEhmeN",
  "key2": "wSBena36BxT9LyRuJFdXjbFZBBkDo6ExJnXQKxvZfJKyNCTvaqM5jvibeXedn7HAFwkT6DHWRZ4yaXyF3SEhPGm",
  "key3": "58MjmckLBA7a3DxNQTuJzpMMG4eMFUqMM8Fcmw2wF7d2WNqKFdeSdLy99E5NQLERa6tZ6pY7gjwctkhaUze6Eos3",
  "key4": "qWgAqeczYT6UTUpCWN4Jnq4aagkzxryBnckCZp64iQKSod4HNzA8sXF8m8YamZygi6MydTTd2qfq9bnsiBLPP3b",
  "key5": "2QWygLnEf5uDRrYkebUMeG2cgzD1pYyrhuSrLuwFtM9fthuPFCAzU1dMDmP1mJN2jsuzqbPFuA1VvHFGBQiCYwW8",
  "key6": "2e5pmmfhuuhrvsy8FMoD8R3iGDAXhfAr3ex9FmdqnrXRRtDCcUdgGhESvaSMLZeXrNJt7tB4goPNXBr4Wt1V68Z8",
  "key7": "3i9neG1ZMou2DvAAVsJ7GD3eWSUuUt8rqbHHvB33Nadv3w1LmHACXEYv45K8eyFWgCboLazjsZxrwFpuabiVDZ3m",
  "key8": "2oMErz2uhTox5zpZBHoQhrBWSDZUGVb3JVSPZQQCmc5N33XcLPk3oqkj9wfTxFeyof911c7azbN5gJMoFmhCa914",
  "key9": "4PUpgdDLdDZizXE7XmcpaTp5W7BHNnnW3XHvcHvdJiaFpqPfzNXwpcSm4h6qAxU57oK78hXzmFbvhGjUjhKdYXqD",
  "key10": "3uv7ujUupgK3hxiWmUUx24vNvUZtsvBoyPScL88cRBCknEoBJBt6CZGBq99PVL5oXs5nzA6GE7hwVYDXyKtJDK8F",
  "key11": "2hmY7A4fm5N8ZbUjE9LdS4gjmXYQQi9AK29qzob8e1VKhzLWBVnPLLDWukJD6o5vuVBxkrYXkcFUVojbiUSdTWSk",
  "key12": "2Y5NWLKRsKeXhTDsnDrTT1VUyp9VXZ5cx6JBcrDhw52cXhXoCo2eYokT8gnjavsAAACgJw3AfkR9dHUk7CyGA1GS",
  "key13": "j5YszjsuZHRH7Z5gBJic6YrFteUAPpYwVXcMMjpTpqPJVSP1JaZfMWbxwg8Wm7xDNyCyezpWT22w3ErhdoifaLK",
  "key14": "2nztRdxUf2sPBZAASC2zusquuBUjgPsE2Lt41qpiUHUCvHV7y1kgoRdF1y6BCWqr4Pwq6GdHB6J2hezrbWYZ4Ucp",
  "key15": "5ornMDqhhvZGBHZ7B4fEXdLiGfQb7kFJzCDmNppVkjjTzFJ3bUwRCnnKDsB5NZCoMkyBxJjYSHZyUBLbRQauyHoB",
  "key16": "37KjkPD4pQ2jsYiGw36aXngJrWDScQb991DVcV71kvbemeM8EBgQjepFHNXo4EuuwEFtQ8X3WZqHKfLSGirTiYVX",
  "key17": "3fvjpsCszXX7Z43c9ziCbLifDx5khUDgoiZio3BxRBFw9k3Thfgs78GhTad6tpe8xYkWUkLjE2GhMpdEhD2f9bY9",
  "key18": "4EuQrycvFKtdKXWXam66WJ7mSYZwYeqFV9ig8FvZejHyGFEu3aXNCYApwsCLCZ2hZT8QVmaw8XFNU4W8VxjMEUvk",
  "key19": "5qpvuP84RFCruchecF23tdfGzCBCH8jgU4EetCikqit7iPwXDdhLGNBfEhrJML4Jq72W6EaJkrW7dN7dTSR68iV9",
  "key20": "mh1fYGmTYWtN3DugsA9cHRWfRCeW29M1ab4NLd8LZj6w1bGwBUgMtYJVTPRqqmKkBieaahGzUGBdN9WYjsP52S2",
  "key21": "2RUoZzqhx9xbGx6Z2yDxyip5fEcSnPMUcEYK3SPq5TB7VgiLWrkBCATugWtboLocBmYTu3AyQ2hSzsxBJipS5maH",
  "key22": "3nEKg1x4DhMw57UHayye59CBMuH52yiNGC3KnrRyJ4KhRiVacnDYEyeKswNXLXUbGh3QYbvNgMwWeG5x3ZAtvwgL",
  "key23": "42ZruFCEEjkfLwoGfuu8CF2MS25KcQS15Zt4HcTgqAmMPSDjWyNtsjt8uWiNsHsrXGFjiJs5jRZrLjTvAeLppyDR",
  "key24": "3HzNov3fsQk6qTAhhLQixNSpWKtUVrwmzPfVJYwn5aKvNpk7jLdkZ1ddVF5cGb3uSaaD1nHCQwmM5W3SxnrZeTiC",
  "key25": "yJmCAwRorweCnNCiS4U7EAdxqkuKopCdNywW6PoLadtoRcV6YwqVs6jkbi5CByRm4EhPQK3SYWKcSgzSYaz56kv",
  "key26": "nuVtrCBAZjWjjGp7zAHCzaRbyETjPRZtB8c8Freofa2BRaYzrhiTXqkxhAKz983ZhychVEomxj2NpseFcTqDJKK",
  "key27": "2zxJiwxRZpiuQwf2qvmiMDL43LK1bruWavEyFZp8Sjvh1Ayj7KPg8CQAG3YCz3ggQDMQyUfQUDCw7jXZbc82AMVQ",
  "key28": "285VkXV41HESQpTA9WmEuAFTwiRpBiXsFz6uJCVupsvpq6BE69ok11Qh51Z1rFWJzXuPfdQuZ19FvpvGgMmNZn63",
  "key29": "aTuHoGs6bSKq7uchQ2hfAGm1wurxpzGJLCh2s3NgQn5NMERFVAS51xuHRzo2utvbBc7V5JsTMjTCZzLFArbfzh6",
  "key30": "4rvGnZvc1Ejt273a2LXvYKYUSgHcJB3tpfspxPEx5us628DTynRp4yHUqVx1Sy1k5tFmCVjw2h2iVrdJtC6371HK",
  "key31": "X2DeYX52e3mTRX7SD9t3fiJsnp6E9Aw6PHib1FSpJrbpyXCfWmAKCitZi1N3x26G2wmvWcRcfw66m1d6Ug6p9p6",
  "key32": "3unFtPsH5S8Kz43ALZ4ZAmFetyo4tv1i8zXLdrsWWvkMbyPAaes2gfSniwPw1JrZZVUfEpjMLBXp4yitMW7B1mtg",
  "key33": "4FJZXCrcwHqyyYyD4Uda1XBDjQVHdCRxpUbaRpHXGvhCr5ZnfsHmbnw2mGD5xUnpz388bSse2GP1TMogwTFmwdgL",
  "key34": "39cMtY2g52WyQccyEpsek9JXSc2mAGrjqd9UXo4oz1vtaAJYPPrhSeKmhmQGbNVuGq9HLD19pEMj6HFFyE9P9aXi",
  "key35": "5GrhBQ3zCdYzbBhxveYd2h3aaxhtghBzsUcKjjG8ib4cPdXs5eWh1jKjDJQ1DcLbzTUHLcyww8nBLhLU8tegv9Hr",
  "key36": "bNaL28F37nwRnrSDQLdoycqRQzNas57TDDPqcTqkeMPkKQAx4omzDdZqv6M2cp56kPCBdH2PrDhHtMyfnUpnhyr",
  "key37": "57DCRaiqECKCWEEXu6Qg3e4wihsja6czF19ERsPVyvmszVbhHJf9XzULz7fAoazUW3fm2ZHeUqzYK9D9ReJJjcpB",
  "key38": "GwDNEK91tWhWUUjviSLLbFvGkKyEYRGxqMkPgE2YjnaaKbQZrfcUTTx9fUC5117CooXgAGnns1MszXLfsLZCEtv",
  "key39": "27hdtr2znxaz4LwBScbn9Jxxfg5PhTHYmxQLWUrSDxsxkaURKddWBowbH4H7BrDpN59wMLuJDPhq4smPx3RdFdFb",
  "key40": "43nsaoLwxGSNgoQVSLkaCJbo4jakwbQuMQDMZQJpDxnvxcsedgcohJTM2Lvg44gZhGFSSnfkTDapAqwiBcVuKgwL",
  "key41": "62qWhS2Q6fPm7k6mULLGkXGKwbZ8bCj6FRSY8iKXCTP72mRXTwAwBTmV1ejMrDNPucTPo3Y4UidhARTR2LYH1ieq",
  "key42": "4hcadAqW371NeqsVuHUEfiFbtxRx5E5x3x5DGgapZeDbntRyzpZYU6DFjqGkhYP7eU3WsYHfze8LRXiLRiGQwYM7",
  "key43": "QjKAVQjbvQ3r2fPFuqr5pxhD37289NRjwpK5UgzH4B5by6ypvvBGMPEFczRDmw5S6Ao531SWhZH4Vax3MBeupAU",
  "key44": "3DdPTks85fZQX3hDxZf2BsJJ93QwqDnDtSwvbKHuGjsrN8xnUsMLfLoa6wvwTkYFMBm6sv6P1sCihB4marx7MjWZ",
  "key45": "58GRea6zYum2mZEHS2MHU47M5hq76HMeg3AKANTCNrnC7UaUt9SWCdp7qgzDfmJ7ra6bwQazMehPhEwwx2hvdgVj",
  "key46": "YPzxD41uB8JybV4DrzGkDyb1u5Z8u86KK9UXVfHqPRUPLZ4A694bpB8KhHt6cFa75sPabkX1mvcNeuUAaywSdM9",
  "key47": "3DcNNCmSRE7rHaz9X74GKbWYkcyewArki9A2hJMZnwTxrm3P2RWqBzs9QD6VxUmKewemp7FWKPs72x8yxCdFuzi",
  "key48": "3ovaQ86qEefmFjPyAAjoxGp8KsVhMdYsWUEqPKdokNysVxKWafRYENAUKZ5ANfDe9wgBVRHw9yw8CuoHNGYWUryX"
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
