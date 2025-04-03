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
    "45oZcvSjrSaXVNpcoV3cQsEBBnxbuRHS6tmuwrkTPydDwbQdWcsnintAwuEEGT6mK1PCD2zha8HLjPAzWFV9QvZu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rrmWx7amTtoRJM2YDZiLQGXPdbBHsaYrE8eRXupqr8uv7Chm1m68fbZnAfhTE1vWD8yi2ZMN3q4gCK8U5CA15zt",
  "key1": "2QwrCMCUUq9TeERM8HTxx4byyYciWgWkd8cifpYqHrx6P2K1vGLvRqerpPGuTuzYQZKkqD3qH48NUxCunV2UEBPT",
  "key2": "5JXqhsZ5wvDp7KB6LutHdpuKuFfXZpdDPCo3ZuVNNPWdNqhuDsUm18v1XeCPz8bRqgkjg46tTHCXo1NwYz6PLTjn",
  "key3": "2KWg8TwyDJWhmBxvN3ri4PxSsu7rTRqhXLsftE7zLRpxowJozQNVfondhzPzUHNHGCtBKesv87Z9AYcEhEwssP2A",
  "key4": "dhfM21fPfHfu6T2sPsfM3KcbrKhRGZKEPyxnhXuKtkYQGmYhxNUJc8RUPCpdhAVFhYnkRwomFDGC5Yhhz6pembu",
  "key5": "54sUE4rmv92ra7Co75tvNtq5k635CG6opuDnRSb1ybZpmiiyYHu4WR8J2SZ6XYZ47WmZbtu6StYWd5JRHsTkatG8",
  "key6": "C76ejtCfxLmLTFzorUD1vPAANRFbWaEd1s957QGmmXw6tB8svDh76vCrg3r6NkpML57ikT5XzFgux6GuXjLEchq",
  "key7": "2Hr2YAV89TvZQYqPtoVsJmUrkyL6vCxYyQcazLMvGKxg7Pir6BTprGeBpC8j55TEWtnTYSKZYrAearmYPVk1FVHe",
  "key8": "93DYKz76mQGcR4GkQcFCjZUcyxdTg6frMQYYVZw4Bz6zyoBb38QMcMiruupGcMHfjDFr4Qg81465ECeQtwdEGwM",
  "key9": "mddat8by183GgKaptrGDSmbQYEwAa4AeaxBkxGKRWiSmbaek8a3tiR1FzyiPJRafZSyYEUM82ZPFpVpCyYEKxN2",
  "key10": "4MDfLiY4Qw54LV3zG69AgrptdrVVxEbR49Vg1oSybJmQXsfRScrfP5mFjkw6S8dsoXAfYjCcMdKoTS3iCnHW1wyK",
  "key11": "W5H8ZkTq7jMjKRL5BoUMWcHzfxMHFHXxebeMnNU7R3qd1ajEU1eYjcRC781guxQShsZqtJK9cJAyR1s1tGtkUrk",
  "key12": "cx96Xz4eFyGsi27ukgHLtNpZabPuBxXGDwpUCsyvzrPCuATJP13hSzur8vvtyAxhWHFSQCM2kYZiXcxCieHbD9c",
  "key13": "4wbnELEPe9QeGGk92hphdALYPyXoK7wfvJpcAEyS5KLWMK1AFoQxCnk7BpjYt3aLWfg9itWVH6XpVD7FXcKvBmK8",
  "key14": "Mt2QYxKc6DyeUaDNpCeBX8jdaa3NBBRBoUhcSwfHiDB9rxd6sQAfTS7HnmxZyWqhd1q4hiN4CHEQMa84P7cXw2f",
  "key15": "2gqT75azLNGRPXBZgTd4AMHLvoujeTDV6jfb9vZXjdWdX3ezxwH33FrtZXymB1cUfbeFxspjz4FdRMLq6fiEyg2v",
  "key16": "2eKYi7qdVWNhZK3Y3dwHAYeueifpSFCZEkrkGrvWwGrxBJWEzk78gJr9U8Rg6hSqq26yUgHyW3yJEHfT4RW7jX69",
  "key17": "aMdh1X1exh9J2iJb6Ukn1qmKiL3Evz4XJYpkZsiZSWWt8pvRPCcxZK3hRT7ExYfN9bQHpvVPFZUJybnzQYrc5kH",
  "key18": "5iSCf6cBBvTXGvwfvpf5Nu8M2nzjS4oPazZDfDZBcHjsrG2twRQPMyGSrtnqVF44L9kPHEiT74pfsNGbxu3zsNc7",
  "key19": "3iprbTAYYoMgWVv91LWePATda72CNJ3uWvDuETTkZpSxYGidj7kH5QHAQfeykFqQYm7hTuqjoC5nndRB1oB4jNA1",
  "key20": "MDcBEtnWQwdE6kyPeVMMucPXju6FSHNfn7q8yuLB5C8V5u2mXxUchpMHZKT24CMBNF6CU5iRFTEZTFHdoo2oWc9",
  "key21": "uwUG4bCH89UhyANUD9aMKH86nXXqzvhwbwpYFEr6BtDxLMA8uLrDmuDuT2qZCAz5QGqBe974tCL7YEDDiSj8Q7b",
  "key22": "eW2P534fXhnhBT6dHsLCun8vyDV7zALHoUQHhwCS9UUzNKvGe4gE96gjDUnjTzFgaKj4UhrLHca6zNjCbfmCT6F",
  "key23": "3ZjNAMZpoa5PH5uyH8tCiCfVUXAn2HyJm5qDPdA5u9i6noSKW8sRnr542ceWZjN8qtHi3S84Rcq7kNeFhJ9CXj7S",
  "key24": "2VWJV43JTt7sK8iWWD8YNaEYHB85yiLeJ6ni5xr3kHjCDfHTgmFn3DDCw5BQ9htCYXXPFsAFhRvDfyDuPPNDtBfT",
  "key25": "DD63QNQKM4R8qTSwkMJL5JBkaJxE5SA8zRSvPG4MDNtpn1rCSheQFohz6h297gCSBgTvRUww92bHqRqfkWUUkKd",
  "key26": "4JeiKK2QfCYcVzZegdpc2rsRtGXFiUNDoWZDe4YYUpakRf8eSAQV4bDZamZwbXk8AHVti3jwuTF9wb1ZNtyU7Ppf",
  "key27": "4Z2XU2YdDM2bVvxsNZDWNjdQw9YsKJvhpXb4UvdZs2JaNfDsBfbv4AR1xDcYywe7538fg2i2aTeVBEboT74erppp",
  "key28": "4pv6mH5tJMAXFd4L1jE7g6i5eHzrkyuQXSnnNaZRmLwNnR3EUTT4s1d3LYXDBi6yRLRSVWv8rvRUvGZq1WQ1sEGY",
  "key29": "mJVvHLNB56yCdqrp1uoap8vtzdqkfZmHgrfeTDBUN4fEmxDedf6HWZ9UgrAnQVf1nw8gzJt5rGquhgAt9ka2e6f",
  "key30": "31hwPMvfKhq3D8WG5P4KUPDyhe2HtLQJC4S5MTFsBaZvqDYxFVrjJkeDkJ5yCPCLygCtG9XCJcYZP7kB29c9PTxo",
  "key31": "5CB6wj7r9dH5pEPogHqfAGKQ2czPndyPJh2hmkgZzmoPbuPM3ffCL9kDFXvvkEFL233iYVwR3dPFweY113BYPKLP",
  "key32": "4j4xM3McqSvx6XRvnu2aTusiyXi3NUcxsyU1Jmy2HADmfqLWmNGNUkKztZeWZLHic4bFuac8fTqs1dzikZgEsNDR",
  "key33": "3UbRpZkeSf29PzRqPmFGBjjGiYp9pG1bR364NGYi8zUviSvrmqNnFCNvwTzrj4hPCXPC6BKgs583kaLSmk8zS6YA",
  "key34": "5TQsAsnNeqhJGDdtnj8HBLBdbfhJKCnVYy9VZDJCk7hEkpwJyaS8XRhDEhGxCceqcStkwTi8x1d2MZwXB7BHRaXw",
  "key35": "4MZWwKJ2VJsTQKX9uiLXc3LrKSDHGvXAqgPcJuoUEnkov6cms6cv2oL1UpRb2Hv244ZgvPgTuPztSWbda4KHe6pb",
  "key36": "2S45sARofkrRUPJdV52Qygix6r2o4dbvm28PYtNixsK6YSPoii52cJHcH64nNZBbNBNgvy75gbDdiHpNJZXoFSGV",
  "key37": "mHKj3maxKymtxTiZVaGMF2RtpH9GsbX2APVnzN8hFsp5ZHsNdgNG7pehrChqMi4qdsPBii4htEehGdDy1t1QiWx",
  "key38": "5VmZgxTgktXYTsQjuazFumcCiB2YudznpMRxkxANzHhrSvRaQdyMBjQAdNam3kPU44NfiwL7Cw2xr4ewm3dy25ep",
  "key39": "5q7Xi8DvDkSDADNSkLHaJtS4RgwRoWo2XkM5xT9HVg5iespMgjLtpsJCLGuTi9auExeuKdk7Ps5PTYRUTnkxWFZu",
  "key40": "28R2Fa2DixPzkFX3Sjp7ZsQus6qbFAk1PQ56X1NC5cauqgd21ccJcNhmkEEsRcWmGiAbW7GXB2WUUf1GmpA2EWnP",
  "key41": "4zmPN4CiPALSgryoddZaNRdbKhciCszScit3pHUepjWQJfd2zHabbWqnZtok86s3qwPDsxxPirYf2FmQwWZrMyLd",
  "key42": "5k2MbMw7W4uG16oUsqiBtwbVLrbwFyB1cxjwH1xW6LDw2cJTbDoVyJpvgwe9TzYRXuxanJNXbWe2c4merz4W44wu",
  "key43": "2UzTPQ919NPy5W2b4bozitgycUVhyJZUxDRQxK77jgBfR4ghYq2qv998fzWNM4M91nC6KyPCQAHTJFNT2BibtEP5",
  "key44": "2utG2AtqYYaR34eqenrex3By8DtfW2PHycfqQhZEfdxU5u6LiAWm9PpF9QjwAr7qZnn4T5bQVQJgvJJf7NV42dY6"
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
