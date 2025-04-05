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
    "4UhhzGucb1xVknNmoSGpBgHAUJbTP9YkH3Gpbj29DBLa513eabqie9YzMdw5P8YpcvEv7Zg9vTbUwuPkwcnQWjy6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vBGcB3ipcYjDQV46yT1sU7yhYnguMAfjhEgCfzhsUjpcsiR1eP76w11iJMT769SZ7Wz7mb4RDpDQEghTnV4tANT",
  "key1": "4j5TtpJpikPcwqAz12By5xji5xinijP6ZBrmYANwVKPNwieCNALNEDez6v87tqA1NpxvoVJTWQ3tRb2NkDYSdT2A",
  "key2": "5MP6jrWMQV8eLYD2iygSxoZB1xghsvD2TNtCukTxvkZ5rgVYbKgiRTpoqFT5udSSTxa3UWRXwNA2GsucV9DRRwKq",
  "key3": "4fVEPoptEmwTfCcxoq19xVcD776MabDrdTHjKiHakrrtR3v74tZc6gF4e5anNe8ZzVgNKrXJC1kh6X9qSmVCM7zw",
  "key4": "4zi8pUiFAcpCMr3XY5CogZ5uBxbSYum3B3sTrq7UG9Q61bGEqxXNgU1YgTkfRSTzzxhnp7Aj8s6EWqZBasmj3MHi",
  "key5": "34CdJEZkJHYK58feoaWZKq9dQMiTwuHmvV7ELnbex3sWkttJL1b3g7CzxbFBNgjX2B5zZHVtUD4YLkFWDC7drRRi",
  "key6": "23rXvaMzSzVopkWj1iMemYfVMvQbQPoiD58ihSBv2tEnymCJc2g9RNiGniBbWD6v5yb4rWSKNiZokPWFPPY8A3EC",
  "key7": "59Xj6vtKYtnVmGQrLwvc4Hwr8HHYQmJ9WcKixbxYA5mWGGkStUCuZ2Ruw13KGoohxPmRVeLQjno8LAS8L34Sf8be",
  "key8": "fd2xLxShiBhswCE38iJgVuEapsR9XNyVBCRxcqyBayvQwKqFcWtHhKJUsmc1W7mEtRYsrAetH8XWChN6AbbZpuP",
  "key9": "3yoNuYk7888Csp88GE82S6cri61xiNWU87cEuRmj5VnQDAY9Efiom1CNeoptw6T3gA56xo1tDQbpeqDnpu5DSAwn",
  "key10": "4VKDPz4bqN8tedPdzYLWHobvuhjRY1FAbreFanfMhCF6eC6LrUBHPWq634kgZ4XVoYePkApHpPz91sSDHy4ebXz8",
  "key11": "2BStjQ9MU9kHp96u3VYSjW42yxbaVeVTeCZuLksuE2v2Yu7UabuUJh7FropkHEid5EZ3JEvdNwFyv5DKfAFxchwY",
  "key12": "2Poeu4pCB9SWqbCzzQeyNN8X11PG9wyZJwtkPnk9vvj178BVq4vvtbecjrhi1qrnzrb493nLgS1mkFMdU1txwXud",
  "key13": "P25MwuZG2Yh9WAzqjEADMWWYpVW8mZR1rYVh6g6QAXknBsbFPLNetZcaTU4fqYyX8z6mW7VwDVL8GcR6bx1XkRx",
  "key14": "5Xs9ed5D2MjyYPo8UNCXyz96sHbNVr16YoDcLkDsuh5Mw89fQCAgh1FkTUJmP6BLHmKBwM1AHpeaBZMFBhR5GBYz",
  "key15": "2uxgPRVGgx6oo72YWaUEyoLn1KJoHVkB1WFv4KpatPUgLjKdeUcqhQ942AzN26ot5SBxfS6MNN9YzecZAenRVNgf",
  "key16": "4twCixL7a45jxLRrVZQwPLxib5gsotCTMDFD8RRbAEBWuFouboMBJnEP8u2DkiMxgTPmjtF9BJBW6U27DoBMrECf",
  "key17": "2YZkPAjmYGZueYJBRiijCYv6ThSZwa6c7muVxH6XzoBRr9abKG9pVfDt8JMTMet2kTnZ7PoiJwvY9P74saDdUzgu",
  "key18": "2dwVHcZsqa9y3Saa5uQuHPPqDeN5zpC9KCq6DfRL7X7DNHmSg6sbKcTLdjQdc6eHDU3Ct4ttBePZu96wQdGfiqak",
  "key19": "52ijd8FHPDs13j2nJ43K8ZGZni5Hb3sKzi6CfxEEV4Nzzp8Y4GGYHW6VS81i4zoJUQmvbaAnSS2hTHMui4nB9k4y",
  "key20": "4D47Lg1ttkWGf8EgL8gcYqkWZ1tkoTiQopiWkzrWxaa5hR1xmFuK6ECsxAXg89ehPJSrnmqZJoyxff3jcayGaLig",
  "key21": "PjGW1vdmEUxLz6QjRJ4B7KVwR1Z9ALmDy9udUw13Z6MsZg8t33xmYq6RpvaVRWbGCZCanj3nhmiq9TzaLw7gRnk",
  "key22": "3NQQTpEcH1LB3vfFPvpqKkGLUXFEBd6MW7Epvnb9sUk9wycKpCt6B25c4GEEsigi1p45azKYLuuBXQ99b8RrTNET",
  "key23": "3XrH9EwrQvriAHkBvW8VRHsntHwNfGmTWadEMnwZotSqTPaUqhYw1kbbzc1WTmg9hmaMt9RftRoQQwg2xCHNTXKh",
  "key24": "344p1kzeVhV3emQjJc8DX9Mb5h3bYmpCMKD3PwxEozTWKoJrLZy8eV7wGpYmHHLiPxKVyrncEUM2exwHDgAtuDVw",
  "key25": "3LisSK1qCbHngE2bmcV34R3CiSY1xcm7rns8fZ3NUpafPkNovBbzwjAeQ9TXo4WrPrgGab2kKnEop9v5AHm9DKPP",
  "key26": "gVvUvxJxT2oYYh3zMryxARKwaoaRHzoJocGYHgLSahT3zPARqqo9Wm6U2rxzmiBx69KEr2ZQhFMKhsKKjK9Ptp3",
  "key27": "4ZewxAXXps73WULSuPzq1F2Eof61NHumuUGJuq9b2w9n3rYJcFAwJyL1PoZ5chBuzD9VLEy7AunjCCyYHsp8z1ki",
  "key28": "3Lvd7DjaGAGcvMBL4U4ezJyXHdNz6VPH9crFFLQU4NmBGEwWqMfHTUoQRkSWvrp7LPCGKLoAU3s3TXW5QQTL14HD",
  "key29": "NzSvAR4kq3x2k8ZSH5ShZrfKGBive7zEGWWs1RP7z5bT7KZshaqrFneDBo35cvzYqLazPrdVDQzHhd3QrbkUpNn",
  "key30": "45m9g1pxUJjPTZ1mAZXtfS7VofmsCprh2398oVmJhxWz5YHDNvryP3Lob351htYNxWXtKxp9GLwQqFVtTACLgS3K",
  "key31": "3srQMAoNdwEZZYpC4jEmLZXheY98d4QYUcddtGrfpEY9pfEVitLLxAZ3NgnSmA6UXiNHvHdEzD3UfmFvfX1HY1G9",
  "key32": "5gqCqbCMjNSHPefVM61m3Tb46W6j7gZDZfDaQBtaukSZPeCbaHdxivMz4sDB7RFBofP4wvoQwnQ58D3HwPg8pPG1",
  "key33": "5LkXLWSXF4GNbSvq3DKvm5JXXoqWdzUpbibW2fvXNaCBFhJc2ip7aHGAGVVXJzmNHAuKmY5LiAPCcZNtahB2u1jc",
  "key34": "FQGZcT2Knwa5rERV3yk3ZTSu5DZmYuAVYW67JW4RmGRy7P41UcUU9G6ZcsCgtctpxnmgMz8cEJDscvVwrd9d1PZ",
  "key35": "SfxkTbt7DNr4TmhzPEdUQyMdxDWqUwuCz7HVhRSMdSVoh6KZPmyXhXJ6ybFJFnGpWGeUc1cR9dKR2n4S6dEsvbC",
  "key36": "2vTgtwCQ1Cg373AnYGL6UKzPVNzhswRTcHyJ87yc3WtqKjsndN5bch61wxzkT1KfUNGWaAXXtfNCsnSPXoa9U2g5",
  "key37": "5Sx6u6omoqxXiqCQc6gnLgFbKsG8W7xjwAG6vgBKGA72QMhSbRjbmpHw2uDD48Cv5gaLjhXX6KVy5PkdXE9WSAx2",
  "key38": "9rTC13rJk8x1x1KfXYoH9Au1pzbzJ3Re6zgWNr2HKkxBoKEXwXT4UpPuKxsw4LMd52ADbp4C58gsytZNUfMM7J4",
  "key39": "3annwqgDQqhdpUkCzEwFGg69oFz2j5j7Bu2LUn26qcbBJEhBtWFqE2SLA7v6YtEkJ3GzkPexsUrFPKwNfchHy2Tp"
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
