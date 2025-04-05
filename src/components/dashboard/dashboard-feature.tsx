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
    "5y8ALvCqyauf89TCzmehkP8UULn7PmETp6vg2ZTcCFX6eeW4jsnMBfgaHsMbkuKHkzGwSNGJS34zPPnkrkodvWmF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "523c4rMyaq4g1Nfw1JFPwRwd97JbZ7toDaG8fgEfphwJYeJ6fZd3skYu6D4Z2u17KLKYB6cvEAxbimJzqn7fytZN",
  "key1": "3qekWDJa5LnS4CmA8VgR1oWNhBixon2nTK8GTZg9efHwNS8QdTF5P2SjH74dE3wiav6qchMdFHtTDcryYiUF3JE9",
  "key2": "4GXAmBQ3WQJQYGoxXhFBSiV6Cyj9eHszU4tHkc218q1ZYUVvAUe3zV9kVp9L7FYYhiat3DpThijHTzjhp5eyGcKH",
  "key3": "a72pe9uqmNedjcbqoZS2GzoTPhBbyik1Fd8vvJhEbNxw1kMhfuUzJBEWecEVJRVsyDLi44De4Ad1zDwY6vXt311",
  "key4": "3NYVkm6SmAYMDox3xYoQEPhJcUsWXjCxHzu2Q34LWvhhZycPbA4Ps3kKUf6efWy4BkrLcXUnwcfZxiirBRuiM9L1",
  "key5": "66bqVyqTGYQ4uvWJxt8wYBXjtKCdZwvppGFd99tK9vpzGjJysJXLqg8RXgrsJ48vZ17NdQMX1ALtpafCiQ9Jv23m",
  "key6": "2VqXhVm1MreSisW1YUwtxYsBuWQ2g6xgUEjRCHkSnqrAsyz97DKaujJuSV1BJBL5tjqZdTKYHycRruDxnFwE5rt6",
  "key7": "37uUM3hVkoQJq8h29Z6mnvYcgUM5fop1s4zc3w9FvKJcuQwqQEnAuJ4SHN1dXY3Z4h8VQASMzhVzMMDcmMjhniXY",
  "key8": "35kYWcZSrWXzBT4zrqYDzVLefSWuJ6LvBSK2xfwwBo5KxUCJZAGzTj8UoKry71qBA3LaRyb7aM3DaEYgMz93bbhf",
  "key9": "4k2Nkf44z93VQMZStXL2uxsgzozZeG6BU3T8Qc68mTMtAg8BEJjnd4i9vxxSJAdGNNa4JetnNvhzamSEvvmX44Rk",
  "key10": "Ni7SzgVnfeqE5Uq8K7LSQdavixtNW327RrQycoenuVsX8PWP4zvUsvYVRB5g2sdyh3BezpSEoe47yCSi9RtS8W3",
  "key11": "35mkNer5zjCPNL2Ze54UaxiBfdBuaoEz36fKfa4sNDfyD32zYQ2HzuLWooJuamkiKMyDbvUTQBSk6P5yWh94ryTc",
  "key12": "5jGaDELfL7N85orECAiMbaBhJjfrLyR3hDWawiYpQtMy3YF3vvHuV4AHpwFPrFiDqgtp87dK5Sa2bMJNQHFjLLhS",
  "key13": "5pjiL4DjMXSRktbNjCFKU4deDsLi1HuqeP3Zkz64ttSQ616cAXR2JpK1oXYdH9gWonpUeXFVktakbS2xSmg3Awh4",
  "key14": "rGVtcz8peQoQ5NQ2wezKtskbk1WAJLUMdrGmwyKwLoGaD7cJwTqPt3xs97i7V31uyNk9aP5KcPGsxLunjmWVL3e",
  "key15": "4Fp4Up82yf2vLgXWmVpeSUUcRRYL2XmVMLKk8R2sVyjsDnqKFgPgXVgXgtJYPTyEcHfbvCAKDw9iwrMZKEpNxSWg",
  "key16": "63hmxsFdWBxVWHPg5K43K3n9KT7ESyb1ZpsL6W6tDQfN39cmP5PTPmukNY5gjbVaz6P1TLbr2gmoVzhxEpicBno6",
  "key17": "34WRwnzqvd7aXaMaGv5wwuLLzZBJDTRRCCQpCzBSbZDGCSyH29p7NEVS7qe3uyQbDX6EhTXAnfQVbdnKw3sBMZuC",
  "key18": "vjCVSHon2cC5fcAUQDtaQD4b1Hyi4x2MHSTaRBt2xoxZRyuC6zsQ7hBf33n1cqTwgo8WXgarwYfbSjx3vH9EECC",
  "key19": "3ZdHxVMqAL8GSNhiLWLnEEVcS335i99CAUvYfVnxRP5dVGDLcxPnfxhmQkaq2wqLsY6K7g7ThXJz5LjKUuaNLggJ",
  "key20": "2QVmZoMbHBsC2vaexAeaDJLCoN6t7oEJEUSNu19DmRWis9rePeZXdcSPsB9pNi88VZyAihy9ckvoy2VigznVRAvc",
  "key21": "5bfjs3pTr4UekAfzMNZvfuEW9pZ5s5fygRNEMsVUtZTPFqmTW99FFAh13j7hQC9VKMpvfD4N3bCj1i2QJoSKwTES",
  "key22": "2Bee9B9445CXqoQsQWf1qwdfcMiymbjKSQjirfV53UsbJwtF24kWnC17um4S9WDxTjaqgD2551dYU8DvZ2j1pScJ",
  "key23": "5pmbroSd4CUciPzqHTetdBeFCbH5XQmSptnQU5PrhdVpDk824ZEbtsXGjVEKmeafHAmVG62i1LgR9Dc2rAdnryoW",
  "key24": "3BypqtmFFxXQRY6kZYj3DPCM8mwQjg5DwvptDMiDwnwKvi2qQE1B6V1VFLj2rcjgDPYkjD5FTzD5Tmgy2KySQ9TF",
  "key25": "4eRA1jhAYwU3vRGrXRvkbKhZLqrRk4TARiveYyuDvZAMVWNEnCctdtkRDQNFga8thekWA6JhQBstzReWC7od1YCt",
  "key26": "3dVthhG8DDmMUGkhRStxscayXX3TGmi8oAbbWmgf4WWsNb5TpeEcKv6r2pjFHwpaHHSqUPgMVsGREFYCkkJGGmGK",
  "key27": "4ikU9xGYvFs8VXZ96XqotEkuQ9VLeDYk8qxApw86oVonvjymKHo6TpGi841wiosrzA9n1kqy7X9NWthxsfyCovdK",
  "key28": "5ahxxhCBe5TFY8zs9g62KhMkorwEHb518kybcyvR8nKmhGkqFMDcDpxcibrWc2EWyWvTh6jcjBPz5Um5zFBGQmDZ",
  "key29": "2r8csWKGcB9b7rDWpekzP7YQUJEkHmFGvbio7k2ZZChckh35pH8WsNRi2HjjmDC3X5qYb7cGueWqSdeHNQMMwL8a",
  "key30": "ZmNf1uKFWXLQfePtimKeKScPcR1ssDTpsBLe7kxg4iRHTTh59BS5a1hD5XReEfKeKkwHjonFeLtX5rdgQaoepwN",
  "key31": "3pbbKAHr52A17Lx6XLNFthqPYMNBRMMWVctdAoUZhbvYBnY3k9oquBC7PzZ9Su3Y3paoR5a5iW1cguwW8uG6eya7",
  "key32": "4Y4GpgpQDXYC5n8zX8vRRFyYeieCA75zB6wcbzbir5fHo6Eo1wWg4set2p3pQYGBeDtpsMjqjJHWwnMZXLbg1nTj",
  "key33": "2sWLEGhCSvVCHp4sMxwC3qwzYMMCKg2DADLrB8vH2tnuM9wKKtmS6m9KnnQivM2LgcKipWwmTY3QwYu8MmFA5uQP",
  "key34": "KcMmYiWuCeHmpyvnSQDDitGkueMHSVMJyf6ntpgoHNTs7njFzkRXEtFPXKXXLjuW6eEaQoYnJhSEspTqHAfEW7k",
  "key35": "Jrt7HGmExUtZcHqmjKGykkHuy58ygpezs7m3gpEKFqGo1PdHiAUtefkJ6wKw89bnnRRYnDgc7JbZr6hd29Y9rEF",
  "key36": "3CFhadyJ998yGcKr6iGJ8UQVByQnLiWcNLsqSxDwmHShWVqiZfqHEVACozx7WY4iYtoyssbia1VzmQ6eVm6NUWSN",
  "key37": "5mSysJotVdq5iYsXTkjR6EEwy6YxZTHDrhEGB2kYg5d5Ct9PeaEACjodReSYBW3PJyfXVwf3NsdgxDKpfgtoQqSb",
  "key38": "L3StMUFNXb5N3qmcDVutp6XinKz8qAQqvib2v67vSSPvzEXf83FAYxpPDUHDZT8VEjgHxxfFo1jHFGcCqFRfG5b",
  "key39": "fVxTEAm7wdX5n6vwtVRLhhznNnLcj9QJuyeSbbQVPqwW96RsdBPnC3LqoV8b3XuiLrqwZ3aqLmqgcB7dyfvbfj4",
  "key40": "5fQUSGq1kaPwamnykSPrsPSUJuS5wsJPipYob2AeW5kthczVPQtvrDp2dPFWgcRy38NqCzGBM42bQfeXmjqoH8qq",
  "key41": "5uBy4Hh9NX17ZmtnXDDmpUQztJYMs7ZtFRXAdzopUNDAd1CXiY7KbLqoH38AP7ee7htABg7cPjBpsAtpAUEw8Sos",
  "key42": "4j6Kfv74cUeBiuk46Td7wdr9nYKt7Xh2YvTxVKaatiUdR1WnKNuPztTP9ZuuXCNpJSkrAVX113GqHeY5Ev2AjQKm",
  "key43": "4p1noZFa6ffQBz9tx9UXSKqNEtJkUnfYhsba3F1yYJz3PGXRv6cR7WHxrvegVEBBLm2PYRhvtNfNWeQGFJeUi2vf",
  "key44": "3kHWdYEFvU9cwv37fGkGpMV6YW9hkks52yYiRmHWyUpv1FeLiuzinPxz6Rxv9H5GzXDn7vphLTx2bJUtRTxpJw43",
  "key45": "X5QXg3eEhjeW8BT7GA4GCekZGeXMCm5u2Y5Jg3QvNrWDeHjPimwq5AfnKt26cNvVkXCsq6bTgGpNodtW3RWQuzN",
  "key46": "5yUirPM8vY7rjkmx4qfEfSqc39UWgGUz9zfVvcfgfgAGs7Mvnf872pC5fC3XE3zDDy7qkPuxBLCW43KztwsVK3wP"
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
