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
    "fvvLcQNTmJHdsjFYueA7X7WwN5rXSCRPn2NXRUYrD3VwjE2UBANSCQkm1JnH3oGD1GFnj4x6oEakcPFMgYgZwr7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37jXHkQaqcuiNNUkzLTNgSLGP9PV4m2kjZFKYBrqB6FsozG2ueg58ZnDzAzf93Gs6X7gWE9Ce76W7rwmnz67fPDL",
  "key1": "3w85myuVpKpCkNCekebBmRtG4r8NngCHzise87zZaYkfK3yqNxY6BCh43HufadYc5hsDGpwhcKwAw8isUbBu8cDQ",
  "key2": "5zPn1ByU9bKkYnE4jk1pRGJ9Zo3cR72un5PsAJfjLkVYy8HjUrTDWqvMfPXysdjJRqLrKkxrLAN57e4H26qwNo7x",
  "key3": "4xc5YbSMcvj8oEaAB9Q1M7SAhJfQ3noCuQZBXRYvpByhawFoocjByL8eXXnAB7PwRsDRQHp9Hcs2m6xTzDsiaRtm",
  "key4": "5dZkSYEz8zdcQ3SqJixqPY8HxLBMS9biCT3iPtSJjvxhBrRz3Qx3BKztBXdnxouBhEUT1MQxNc5dZ9nXoJ2HVjgX",
  "key5": "5tG9m3UecPbyENkoAnZBvGcMXoxSv2WK34XGBFJ7tzRdaWTmYURMGt9rCXXcB9sC86CfxwNvedcRJmdUpTQgRvkj",
  "key6": "5bgQukdQftkfFaktqtBNi5gSCj1YD3GEKMuA2eEGoMUeb9jWN5YHd7XvnM9Akn18SSAJEtp9eVpQCAgCvwo63NQF",
  "key7": "3xWD5zctKoMsNhHoWJirWgEcXwdDySz17muikBuRV9afGrFBnMex3Z8ar9ud2ur98Y4AaixaG71KBshYNyhsb14b",
  "key8": "4hHMYZjFurEGfZBBAtCpzp1P93HLdnNKi4ck4XXHhZvb3HTNDcYZiEZnm6hHmpniCkwLUtDTvKSBZbkULnpz7Vni",
  "key9": "2K6aoSwhFh9t5pm52syUq3UW76yGa1oBQ4Vz5aVa3EKfh2S7UPqQJYn2Dr14hMRZvRTmYNNoSkVfeq6bCUYtYEP",
  "key10": "64ihUgigC2jBq9zE1Kjm5jDoD7QCAwCVgVyUkMnbmgPjKBeycaA3g3DKhPtkWJ9mKxPpkeBs6pcYAAirzzMw3kwr",
  "key11": "3ybvJ2Qee5QhQ3FPdQGBqWcCzS4Q95J9Ba62rkYvDqqXPzdXpVQsQFXqVXrJJYAZYyFRAsYhhCYWv76WgVdYWrXh",
  "key12": "5hu9auw1xfUwAgS1ZiswnDogzTRJcEpTEzMikPh4vy4Hv66b1P7768NWqagxmeo1D5yp4239XWu1ho7MTuA1ATZM",
  "key13": "4fjs4ggYmSE34jmHSzScgqNaXPPo7tyWExSFKrGXjHG6ChyqB5CLRZ2QDNRmCx37zjWj5EuxmbWF9o9KHeuMQS7g",
  "key14": "356FUJJZKivj8SJnAqj6xE5tAKhVyp2emLDjAHu5pULQzbxjhxGFs7ecBpQkSJ2oyGUXW1gFq7sC5FZQAmi5mBwo",
  "key15": "4h1GvxBhnDPxmJMQwA8dJFwwpyZMTBwNvNqPTkL9uyXR6scyHdGoHGnvR1WUcG1vz4ebpKisuedQ4DKwPHVcG4yB",
  "key16": "2wvMzw6T5KQJ9URtdXFSLK626BjQJ4V91edy8jY4rwt8afvYAVM9eBGmraRYnDSUuHadXwPutFEbo55NyZSqKF4c",
  "key17": "2njcVB5aecnDiCRMGUyYzpUbvocSB3VkPXC53DCrYcLkCsuSihj54dpqooyjyeHGyphvAESZHX3CAbLVut4ct2Vg",
  "key18": "y2zm2Xo95zEynwLxqkUsPibF8z8nXhU5tbyMnM7LaQFR9SNgQiBYdyBzAw6AkL8SUs6WMyxKhjATEBCJF8k8F9k",
  "key19": "3V6qKC2KiDt5ziLpaBguAmaytSX3DfStHcXpFa51Cq3bHEMznHfYJGSGykwRoRrr2xLmJBDjXy5D8x56N3rdNjkd",
  "key20": "cgx6AbApQ2xWwUBrmZWvSJdk8AxWQyJ5zhjtoqnZMJssep2Mz63Hnnc9hRCs2zzZiuLYXHkuyopQc8giK8sN3Lx",
  "key21": "45aigkRwYULoSQ1GNTaB4w2qkUMhc5i2THCoXBN5i46P8X7cJZNoVKtbtoyMkJQ9uBcgCxX5fdVjGCdCqGKSR3Ba",
  "key22": "ubdgVRuQgNsEVZ5vVGfBour7dHDy4ciKbWkUjgHuBVMq6gpCodWqkTLE7PNLKLzcQrqyqtyfwGFLrEK8zjtNTsR",
  "key23": "4KjHxo4tdJzU4mxsbUkWLwY4DemHeyVpfALvLr48oUrWeGAhPA2KZN7XH9Z7EDVMMp8ua5xTyekQ6whjJ1qvy2pi",
  "key24": "2soPWSGVDK38eV3A6tvEtXcV2dSwRsKhg7ychuswgoQsdgvm7Pqjg1KzeazPh25g3vTUwJEbpozGZ6UHfkoMCTpf",
  "key25": "3neCHVnzDBNJWQbndXdaczjmGC3GJUSQNcYDVBWfJuF3yUPGXr3Z8eS7tDhNAkYUHKGN1Eo7jrrAErrVvhKd2nv5",
  "key26": "5o1G1KLvceFMz2NcMXpbC2QiuSKvqWWJSqFKBZWdHvZVZFpY6NRr4VNqY5UdHrHuLwCaZyYWNvtKxD9poJzfh5Yu",
  "key27": "2LGABMkYcz6YEzQCJApzmH338Dp6eLUmsXiE8LHu96NjzjoHXsoJWeTBNbLKTPL2GPggAxeqVjqzPFjSmrpyiBXA",
  "key28": "375oYuGE4rcdfg1ibanXFCGhfxWTuMsjUukLU2mM1LdVuXn7UscAWW1KxSAqPeyarjfXw5PmZa7L4p71e6aoPM4Q",
  "key29": "4cvYeYqkPiBaaWy5zdR985yiQEVL7bS5nbsSdzqodAFMqVE2Pcpc7NeZQfT38qCwVB6kewxFFNCbR7qWazGGcrKX",
  "key30": "4SLKMyTHBmzUWB29e3rSSs2R4XLtLSHPyxxHkj4EXi1fohzAkeRBcAar6RSz7wS7nSUje6My7tKtB8VEgu7spj3L",
  "key31": "4VtNAQsyc48BhzccUKLcUm21FqNzGcWjXXaTYSBQxMqH7wA6Ets52vo9XC2h2bp9LBRJocLqHYzpAyJcNspGr7ng",
  "key32": "5MRzcsJ2rpwmyyQ99h29zPZTs1y1Q5Yuc5JUyhN6L7mT751mCyAK6C5CLcDjy1a59DFWsWLKwUNkKXxH9R1G6Bub",
  "key33": "3pMpjVwTsLckV7R8z7A6LbCHEnpqjrWPaQ7fhAHdRRxRUaAPrCiphoRUzPHM1wVLEZMfTeMBnPGKqRXVmZAcQHVQ",
  "key34": "4LN8fh6zieY9DY5d7u9cS9rZQB9NHevnzT3LeXWuwJvjDZC1uW6MEyyD6ZqHEXkpzkATuwk5hFfJQKmhcnbkpAJQ",
  "key35": "vd82bMNiLhzpUodsdkzWnKh3bzVxiKx3P2EqCxTD8rBtR5JnppSQEQeEcVAcj7ecvSeKoD3PBcKFbMjGiSTGeiL",
  "key36": "4EZFZD5sN5R5MVAVWEEKpqhMHzzNC1fz3rTjfh7dxEfwtEYvz54TWtZB1yA2SsDjj3j8Ugmdc3rTGXU5Evv9sC3k",
  "key37": "26JnkdJx6ffYUHZpdQpK5tJ4eFc8JWvE2qr2TW4mtCb3S4pLgpgPhv9Zxc1vzJh3whKTc8i7jHUZi7LEmju88Lba"
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
