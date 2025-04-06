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
    "3x4Q1XHkRwkSUYZT1vvSL7RqBGQ6AtnTDnptM3gYJ6ZZuQ4hu5LKdL2VFLG5sciaS5kmJyexD516YJP6rSxJk76B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46fMJptc6WLM9mhb3Uj8bsjNY322RwVhuTkuhFXiEW34PHdGvpn7Dhe8MNZBj9aM7BNBfFzY8yh1rNzFVK16ABZT",
  "key1": "4JCSVYYt4AGKbGXFxmEeQz3cYJ2hkWmzbBe4GKq7VemZdXRsEdqaiiEBFfoW8z7iKd5zxxbjpV4maFopnt2j4T6z",
  "key2": "598edk1FAGpjG3LmKA1SxWErgiHGAFPmLo2Aw5hKtpSDQ1jNwEESGFCPdmsxxWMbXGhYciZhWAu8FUM3XR5E8YDx",
  "key3": "3oPML29vFWK5oB21jptna7r1CGYsiCRvLr2jbStPaxYZ9NdXAYHJjiUeFav6BjmJv9yXvBb9pebCkEuXgd6ykQtS",
  "key4": "4K6KtMNA7QpZFkUhbJXMo4UD15dA67FW7cM2HA6tVXiqrufEPGwgqpe7r3QTrkULwBffD4AqCsR1oSZ8zvRQJQTC",
  "key5": "2aDPUFrcJv5Vykg2DhN2uMCbysDiHoHDnYziYw5PZMycuaVKMoaAzTvJcMzrQUrBXBiMDKceXYppdPWnefCpmDGh",
  "key6": "JayJXrUVyzqHYB9goKNioS82jxRHj1hbgp3SQGG1W6AYqqwoN4XjHmUbGBg8HtXVw5VDpPdXm7DP4zN48SW6jze",
  "key7": "3umCyyxmmhko325dTPALUkWZkzqeyFFfhNM7FZYYy7C89iNHFgdyU535tncwnb4yZHpYCHBcs5wMDXLX68K3nYwB",
  "key8": "4YPEUW6SBvQRTGTtVdorVa4KpfkpRAfoPtA819U7GGzGazyq6LRCQFopq4YaTcXwvReMJVT25cAvvtRbaY3vFYpf",
  "key9": "zpo6zv6FLFZEsaEZadDJKjMaLciYSeS5RMLaLHCqJUyS96ciBVEf8hSoNz8WuuSz8rPe7dq3sVe5cwu2F9K4bZM",
  "key10": "ZowpvFuazXWoJZrBByTSQ5pxDaXJLFyuk7GvZrfTYnVvKcEnrgs3JqYgCv6GB4zVvyqTN8ehyd924zAAjeU5mxS",
  "key11": "37EbzhXJgxX4Bn5AxmA4x2tSAg76oixJsQhQMHdDpNCXEZsgYfPno6pLHJmYWTAqru1hzHa2mChgHD37KV5e4ZNU",
  "key12": "2pvR7gSkqi6QzRQxD9jwtbrSQ4PsKXb7KEyXz21AkmkAtrAhQ7PUjerQ5AH4XfFYfisaiy8LFfmuJErhVwAKCBQY",
  "key13": "315EZARPrZ9KdMuAUCLEfRiPph4SFbzi4dFE5DtyHV9bWZ8onyw8oGDsDqEwamMA2ztbtnuWVG3BUaMXPr4zUVyT",
  "key14": "3voiqU7kcGscRDbsP2d2tDhnr2sCRrcq5fkqELK3jG36gRLfxnLJquhgbQMmD9DuKySmYyvH6qCRSum9haUCksCi",
  "key15": "kePSf4isCADbtqZVwwKfygPE8CCUZg3Vt99KgVZxxXi7zKeVbDHhbscw7PNFnipH6aZSFJaNR25qSSpfGd6oNBW",
  "key16": "fJNQAZ4nd7A9gpHsgmLXAfXsmGJZqbTvvDaBJ88mD2UwkJBuirPHM5ScJGAhMBgoqYhJBacUyHE3cSuAjevdKBx",
  "key17": "53TjmYXx2hYLuKnF4BhAJHE3pW9csBASCjXaW6Juk7ZJ4ZEYhhAkZ3aDiVHNTGvKjKSXfJVF2djSu4Tw9F7fHnfi",
  "key18": "2mbUaaKvgNu8kf1h15RrY52VkMxxJodSMykTQgVMJWr6LbKUbQtvHZRz9fZcyD2RBscNv5Ema84KaWvbXyBKTFNT",
  "key19": "2MVTHSAsFu9Sa77ktUPrZgvY9mYuusbmkoyApaDpAi48XkT969jWoT55UJApFovHT2XSLcxXqkcmsaN61VTYG4Yu",
  "key20": "4rPtZTeTQNjBMd1hNXZSz1zzZ4TMr7oHzQpYsXvXKvJyXhkiBEC6Nwvkffqp6PRguPY6cxzPJuK9pW67DPGV4x6m",
  "key21": "29ikPsompoNGDzUEzwSYXNg71a9jHtC4p5DQcpKB5eFryV5kVX2C1wed17XAdqQxwFZKEjHqKL5FazBe1ZjhK9qQ",
  "key22": "5QrF4mhkS9384GMWu5wvCQ9jJ2PQcqVFah2yckqQ2PuShCkm5zwsL8wnRnCmjHtrheU9Pm3tVepcWwdZGxvMRSCu",
  "key23": "zQG6i9q3kHob9V57MbtzisUGwJbxmfQTfFHpr3ozWcCX89nJtp2zimtt5w1Gc26ZgPkNiXgV7GxCcKzzpicLEDZ",
  "key24": "4UsVQ94dQKdXxqXufL8Z69JhKRzRFMXXjKtvjihGwhKdiQanjSpExfYcWK3WV8bhU4hwLSvTBonZjTs4jrB4yD6K",
  "key25": "bySez8eSCTyuSxMMsazCFjPG8WZBy3FjweTUU69ePJeSrGt7SEXDPBTxMTFfwqaDY7MUrSS7AA4vGR4kQYqBq6Y",
  "key26": "5ggAHdgH226ZQrsMWzeoAQH6dRyJtwrBYEa6CrMCiYCmMFWTG91TfkQMvgGiPUW1KZcUmWELRAHzNpT6pWWWjpBg",
  "key27": "3Lu48fSXobkkcKgBPVH5b3nJh95Kugt2bh4gydbxFp1c8wV5SZJgaTPWjhNxkBjYuQYxh15cQKat6jhJKrQJGerQ",
  "key28": "5DEn3zKUhymmMiMeMt7opqZwy135VfnyaQtQzLAkEWdUdYw4585ARNATNNLjGJPW3qiFXTQ6ujGGcwypCpW29ZMG",
  "key29": "cazXu1rrW22hk8JZdHYuX3Z98ExWAbDZb6AWgXwkCpjY7HJbTCgBQajqndNmmSQnxdFiqcgbo1nE2RvR9XxWh9c",
  "key30": "42aPcXgHd9NHS5K1k5XPJByBCqApPT7nARTzbkv5NhNNfg3bqGebaRzTUdKZRmRmdn5VVJz6RmzqTwgs9TJaRKkM",
  "key31": "4KDc6poBprbNk7kWdg9ody1s3uzaXWfoUQ3NZLL9CToLjTVRvxSZTcpP1PEkA6AxCRJFQ28biTXKmm7SiyZx7KGX",
  "key32": "4NFAgHHBAXMXkdTZjNzaEXDaXffk2M4odXrHAVUgssTKQ6jkrGyxB2fUM1PaUdHttZEj8hWG6QHDESMVkPUyWhT6",
  "key33": "5Vomg14fi2TsQkgFSaicQtu8QaHzjNv3Uc9pMoFZsHh3GFHvmo3Vfjj27dcejfoHX9B9ppiCb5yz13Hd37DyG4F7",
  "key34": "5G62QGrMLdzK2TjVZ1s51cLeZCVBaAqDkgJCEZT2Py29dthAhCtqSjQuAR4MXnCPbEMjw49Yf7utSY4eswiYKh6X",
  "key35": "4h8rTCKiCDp2KWjGFpM8JbmU1NEcUk8bi7q8eVfVjCyWpPyotYpXCS8XYhrhpzX8cLq8LmeFEvyz7EFkXGZFqYXX",
  "key36": "43eDqydJpvm23TtVgP3TzMmaQscwd66bf45Us5o2p2nzqa3qpTHSGSpuSbizB42Va4v4RJBHeZdjxQC9nkvKH4cv",
  "key37": "GLa7DuYJck78Ui32g7jjDHPwusRb4c55K4x5mAWTd6F74h9H7hKiFd3BCf5V6i1h91Hdi1iLxa7Sp39PaCYjYN2",
  "key38": "2di9vrNDYTZooyZY6JT9axdaKvgc53Fz1nN3v71Wht53TxZhaoZcVB1UoHyh5qThnaKQqJiwGJEdzF9GZnBvTpKk"
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
