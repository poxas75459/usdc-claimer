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
    "28fgUnQATifFufKFbHHC8dss71fSrWhRNzveZMv2tQYWsGXNFX5a6aAQLr3RL6SYCkuCbzRF5Lo28nWuF7FN5PB4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8Ga9KdNcsbKG9a4nmiKSEaDqSRADTstgUwRBdS8nEfghQtGJZjwKX7vyd6TGNWLLxPzvf35Tw2SnprY4Z5ht6kc",
  "key1": "2E5JCaCxqWTBQRK524d1v36oRxRkSm5h3PHzKpDRXkuz7TodJ2D5xPobyT8Jx13snpYHZTkrJVG3Gtg7Pmg2ctxj",
  "key2": "3z6nw87Qrtsba8VhauCW2y75EFW48p2NkYEX4ZpXAgyg6co8JR3LZEGk4bd3sMt7nQxGPfRWN8B2xPCaDD53Hknm",
  "key3": "4LhTmMG2Ufdsjky7QA5fyXEXi3bWbQFcS4ScQaGoN1odYK616r3rcAMpeRU9VkY1oGii84m7HYTj1gVGFB9JrBh1",
  "key4": "3Tshm2xbofkz2Mseg2ApWMjoJqa9ZG6F2xfaXQAxzBQD57EHJoq1aPPkJ1ALfMgGnpD94XVgLN8H4YqFoFs9LKj5",
  "key5": "2hxKwhivdWDGsRSJ5oht2USnaYVgvdzpZ1cYPtzupSMWnJZMSrS3qwQ7eC2cc5GeC9bKxKKgNXUcUsJNPFxAaQHm",
  "key6": "3ixp7Ep1s8BgnHggeCcvJGYre13fYQjt7oxhMNnRwM9nRRx48eWreoQjqRvzmdn9ZKqvccYYH5ZjDEWjUXoPzRcF",
  "key7": "NL14kMrPKwnuCQeoFDyQfdx5Sx8qbbX72K6X5qq1fRnxppV4Wp1Y789XBX9hxb1GC3AGAHv6sZoSVgaMc2jqKBZ",
  "key8": "2UzvmMSWJdWWLoAjzrHGJtcDU3FTZDowQS1vVezwVNWL2ayyshiKoxZLVNgPX2mBqRDZ6132JXjyb2mxzJzJB6k7",
  "key9": "56x9sqSHPBCkYxfLJsEF2iHQ73Mta1opbj42Xsumt6kzZevy8XFd7cZHU3nw3PpDKicjHz4GRsiHSjzJzeZfLDFn",
  "key10": "3oKgS8rQjooVYKtBHn5eDKbMHFoT7r9vDdEPvs63MSKZvKnDTHwJtP5NbcZdrrWPpG6eHcZS9QVice9WjJHqptuJ",
  "key11": "5VXW56LWP1TyvqNystteyEFaZ1u9Kan5Yf2GdEHQcXicL1BU8QKEDHdEs3kTNF8wcFCJN5UvQ1xYXKkSyp35S8Uy",
  "key12": "4jpDRMp3JqekpiStQQVcKtoVYhunoha1eWotosw423otZ8hmMhRgS8YwsNnXfxWC2B2p9ANUosxZn8iDfb3HqaCs",
  "key13": "3GJ39jisFqNBEaCm6SAtdpuULepJj3Dyw1nknazJatnWzDMnpGJoQSgugqbe1oeZfZeko4NHXM2vwYGu1f8BqKCQ",
  "key14": "3BneKFB1WccrtnF7MMsPUcMnyLBDgUUWkpp67H5zixMiuxicvVbMf5pjyFRtgsZdUm6HaW5DLP9XhvehsLqupd96",
  "key15": "3LW5vhh8Z6HWZupWuU976zEMAqCMx7BQfCgmgnhwbCd8byrcTTyXQf3ksJ9128xFS8sLqu1cNLH5WJMezFPkxeHV",
  "key16": "4unj3zcocZ8RAF7wmRchrHjy9FYVRivYBKTovxyCCKQdSEp6L65nVuMSw88FMKEMWDHccnMXbzjh3KZoBzcV5AXU",
  "key17": "4h5C5etA5WFzSFx1pTNvqXPAEw7RPWM72Z9TKu5psk9sWDcK8DYfbtkhT6G9UkuFjAEn5VMMtTwuTwZtofDzL9Mz",
  "key18": "q3fJzWKfL2JqWnbksN1EicYZxwKnaAr3PhSJw1kdtnP2p3pvUB2MFYo9LS85L5567H3AbM5482dsa1wWtG3Lz4e",
  "key19": "2eoePAkMaGjGeQq7LvF8MSZtk3dVSjohy1CnT4XjCu8SnDDRgbGkLyCxfGCbA9MGtGmSA7T6qxGD55LidiV6ubNA",
  "key20": "5TrYKNppVvc7dQVUYJASB1A1pZASQcibcJRppJLGhKj4gHr7Uh9NqxvuFGh5WztkeEdRhg8dSMdJVVFf5dUueksP",
  "key21": "2zk2ZfdPiJkGmKX3PKAgyCUa3DK8NZ7qx2ZpzK9ASMTumuFebfxn9NCa5aJpBYF84WxykUKms8TS1pTFdhEokaBj",
  "key22": "4Q4tzpdfM3tqSbzc8DEw5qcx6zqQQdJY8BD52Zh6vAsMkvt7pzQMB1vr2zH7xFGWeuufpyC8Qh3Z4H8EfaHQ98K2",
  "key23": "646Ym1QgqhmLt6M4HSkQPJNEeLUWVneoXQrbqSnNefq1jbaapPB8SNWuCtvD58tyX7zsxxgxbkd5suGbTyUKDNpw",
  "key24": "5pPRMbqVLqVkTLdXJNVSqvPfUN4MuD3L25pkkKSxE1KBkbpajs84QapkAfhJqW9o7bfd6ai5WZq96Mkuc7iVK7tF",
  "key25": "3iX6bmwmYSwfQWu4ohCaJur5XqQr4BSRcu9GvL1GXUrFmQYhU4bGooD2yKxLfiSWEVvDF93K4rkY9QcwXs4CvR9V",
  "key26": "4GYZW3UVpxcTaqDALxWpvZZKzq9CH8AJLd37Jyvj9yBA8kc2vDw7Z7UJqhYtho2xu9Zk5hzPfxXFtcU37mCQDXSK",
  "key27": "nvmW1FjWbedtMGVm9UjWgYm5SU8mCMFxwEHQvbU2zrBqDqNvXFyCMaFZYdQBHVbVpzirpEDGpKYEQFF8yWy9fLT",
  "key28": "4s4JkrGu4YsbrPaZxra3uCn5q1FTcwxRWj7w9zqJvrC4VHGVURNjKjvDo5NAfV68Tdtezsjq72mSXbDv8VbDxY6f",
  "key29": "47jGZfHSpSqSwWanwBRwuwtoMF7baqJPvjvFSYh514J8FrHz4FiN7zHoXByBcFbNgcAaDfrGYbAkBtAMEjnN2bsk",
  "key30": "KYBCsNBEkQT9yoCY9TonRb1vVnqicFXSbvjLLZFQqBZ4mxZw2QFsbHYqZkVyFHD6s2dnj1L9vsFsK8mSeV6HDJF",
  "key31": "5n5rxZ3dWbHnWKSXc3wKajzecE6YreodbFGpr7fMLKuvDiqGSWLhmhSFxMfvbQqo6AmQyCs5m5wPukVWfGP9smMh",
  "key32": "8zWytuKrzXbkhU6eoXL368N3B1UTHuBnWD3C8vxSP7D9n79z4BctSVzCH8x6Aq5zm3Gh5apWPkNeWNTFZfnwKab",
  "key33": "3TyLwDEHM5Vq1oxbLnxBeW4PijoUUQhxNEjhBg2B6ecADT96ryrjaNGM3hiYMpPcWuVkzirY1bTDySPrscVpBb7h",
  "key34": "Pp4fiT73fSeZmCTDTMW5uxUyyaXZVeitAo1ZrDvTH6k7YA8bMn4wnNkiw7pviDAuCK3u9pejC9CYDy9K6VHw3Vw",
  "key35": "5Y55pbS2rZtQznhKH6EcnNf5pmxHJsy4CE8rWChgzfoeeMaQHyhmqXzvzoYCVsUVzDUuUv7f1W7x9DXU1boeJytb",
  "key36": "3AN2ZEUSzpwjQ5L138rQm9eCHrpJjhxgGYm9d2tFLdE9wpmqBFKuwJ9jRSwYLg1t9epyFypj3vNHc4HXMLb9M2v8",
  "key37": "5754siQjRupup7DykgnAU9ALWsCrxwKmfTuaL83R8D5CqVw8kwqPPVaWQkQkMabCsBn4kPDzfjK31SK8PyVjCEnU",
  "key38": "5zZNDSPfX4a4acmabn83Si6uGckikXdi9iwwrQ2qyvWXvrKoWv9vZ2dPkYgD8x11Nznzh9aJaZQ86vMMC2M91rPA",
  "key39": "5iBSpv3Fv4UrvZ6zYqKG5TzzmEG8DY83A64RnuLbEh68caVUPPuvGeKRvKAXNi2YL53AJEHZnT9x3zcY23exucTV"
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
