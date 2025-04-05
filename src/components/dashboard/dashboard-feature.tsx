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
    "3HRugcXDNwN4UDSHVnF6Aoa1iHmKXHSmVTGUyCfFW3icFAv8zP5AFsXXwWWfz7eMkXXsyoANcjKoviYdiumgBEva"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z81oS6744LdEHWztGx6fBAHocPvW9J6S6LdTPUjRUH6he37XrV2WE4pwHGZUyd9nWgWiG4bXzm7xLTtXNXKsohN",
  "key1": "3f1aKgYqRLbYR3v6sH66fToKnZF6GQGAQzCu8Rbns1fnTdg1zUGWe3PLzwUaZC71GCPhWRv5LSrGYn7f3jzFK1X7",
  "key2": "2RAzwXVnRvAek8u3V2FDsqHpTR6KLe5w2eK5DMKPwXDkg5hvCvEAGSRN31d1F2DQTQssEyaeUBDk5MEuEfgJXAds",
  "key3": "5hgcruxVd29FbdaDkvMnoTdqbvVeWBS3QiWpyJqqTaFw4AoLF9ey5QhZjbQ84dAvwy3dC6QJDZtFgKatN8fF4qGp",
  "key4": "6BMfdgeSDnonw5hSWhx8grmdXYxmWNYDzfZWXZxoJSw5WWUTj8LJVBXjB8e5su8bPwYBpUkYXvKbdvCr1QPaW1G",
  "key5": "4iZK1PX8avGpJ421hBsXn1X7D8wfYXc8Swgz1kiu1gzBCfzPu5QJxZcVTsgwb4gKFT34W5FhadXJjzNnAG1pFNL3",
  "key6": "5tzAobyZMwa4kKiLGK1zeDxZz8nQELeyRaGJQHGzgvrh49ouyxqWBL5DPMvaZdusFFJLcStjqvEjFUwYuta4X9zv",
  "key7": "3s4rW7rhFQGUn8NjTevZsGTJPeiJmByxcUavW1c5uC9SvUDvoD7tsbUgPCXQQVzKf5mURUYFUGXnvQPbcdQye3An",
  "key8": "5Ms6fV6tcTY3Rd6FUZyUfhkgH1voTQfnb3htzeDQkjCN7XqSjAguwGyUzoYsKvxgkBxyy4grGDVEG37UVNwE89F3",
  "key9": "4oDL4TrDFUZuAttJLmX7kB3wrnwSWf3Vh8WXSvKECDoEhaUdJAFXHn3GoPxw9DaRyEWPK5uVS2BYJJ5NPB6oLq1B",
  "key10": "28XqCnZ1LitkfCon3vXriAWgzTLuHC413zSK8qY6pnfyVpwAuHitifYkZfrfhzenzaimFH3JUqG88XHqbmh7VdFy",
  "key11": "59QztiKupyC6m8N6JYksxau2peExc9m3ZqT8u5XcyLUc9mewNQbuU788vqUVBHCJszwu2MgxtdSYXDSyPzDSqLob",
  "key12": "2CdM7t6PDQRRtsfESP5PfdZWBvZFqkCer57hHUxMqWS4UWMKGeNaaNvQwJfMq8Cs76QtQ6jtToWiq9dVcRwQWb9V",
  "key13": "3s9Sxa3rW1kVn85uNPeWouzFvYknEMNGApQtvQH9EzbwMF94QzJTyQ6kAvfj2b8dXwScvn9xvcx24CWe8w1QKSKi",
  "key14": "5o1EevWiiDJS4KgVUf4h1AtUQHg12Kqm9EfdZKFtFZhaHwPy2bRUPLfs3rrx5BBegSE7uQWCV8SJfuLzZ31R4r3H",
  "key15": "AEKTkHp7P61ahFoN9jb1PrHDGPG8pTEhhyS1vHiHDbJBWY4sRkxFRaUoKNT675M6MogmXNuB52ZxeTyPE4D64GB",
  "key16": "5qBJK8EvQmtazBUGcHBQXj8pqT3N8MkT5nyxYm8V4GSbzfKVk5WariioWiCBQ16xvG39Yo4KFKqybFZjo28jiGYo",
  "key17": "4wpLdMARgD9ww7Rcu5MnGbXMfqAJJfy2x6oYi2EEeKPFzQHwMSbDZUfv6LcqsmV5Ux984xPHFkVjK5TgaqE2VpiZ",
  "key18": "2UYM2o1xu7mPpbGUC4HN565W4drUEqmcJ524EXmYE2XT9FNFncXNBV8SiamF87SDjyCA8h2hHUupHXBZJpz3nQ2q",
  "key19": "2q2uShX5ywu4k8puGqBvketfrTEsAWCeVvMjCyRYThJ6K8MewwY2TDpXuz7stQBU4JLGBHfEzJtCKQ1YiLu4JJwa",
  "key20": "3tWbtBY2xr3QVsxFm5YrE8rWEN4CqL1u3LT8S9WeXj8FDg5UJzRSJWQFZapt4UKF9iYXQk2W43PGAx9kGtsnJNdf",
  "key21": "BQJf4Q6sfFtsnTe95hZnJZC7bhEEABJbhg8XsoMz5LfVMnCjwoPJjLoPuKVr1TB5E6MZUWf2oyQRWRxxHzUwKUd",
  "key22": "3X2rRSWDiy6sE2KRUV9fs8W3N2nXms4gP85LrCdNtYhRdyg4v5YhQLj52xYJQkSCM41AfRyvtWUGh1GtvmyYo1Ni",
  "key23": "2QfbyVBhmpQZVn97BvV9y6PrSDjyweTQKe4ngoytEj4SNaMDcKUbEJmJgWhTBew3bW2rVPSsimsJ6A7tzsk8Xxww",
  "key24": "4zG2FCZQij7SUq68wEtUSDaCJ3x6ooowtKLBortUBV5iaxy1d3MMw9YvYnDtP3YWyvW4SUe3jTRPyCmKEYM1GoBu",
  "key25": "2C48pRmyqR7unKmnSpkxQ2cM53z7r4h3a9D3tQuhVLZcziJdpgwaeGStxTbcSQK3AD1NjKbomLyhjGbZRiPEv9ze",
  "key26": "2CDK6HeRG4mCzq4an12QCAX2eKKdsFWGCyB5GLgBQDD3u16aF5RmCbb7jqQUyJRUC98bNajuT2iRhryADNfq6guz",
  "key27": "4ZCfxT4kAFyj1B9Rpo1nFrQbp9L1QHZ1D3K3dMjehZ1VHYirS6xvZBQwB35c7zF65Z5xgfZMHJALPdBmxBJ4kZQF",
  "key28": "3FfXnKM3YyQYsMYPmBDcnmRbA2vrJ96H4aP67V9bgjuDxZpG39JbQ3r8aKjoZ1QL7x3iv25XLXs3NqpkYwW8sP8w",
  "key29": "2WZcMH2R1zp2AyGBWMjPtxxo27zusdZjcKwsZBbj2QRXf5qUUh1ed16qc3zDnZLQNS7Kof3WtvTc7zCsQtCxMWKK",
  "key30": "67r9dP7YVzR6siUhdoEVMdfSTDj2vZPJHhKqftYMVo7xa88z6ThPWmTqsPw6CNKkojkXHgGEk5YSBvPpso3Dijuu",
  "key31": "2kMobGt1Je2t1tGFqV4wBE79v7MuM72kuT92aEobXa6c7NgvaKA4exh81ZZnAEP7AnwPci9e61fkoTj7tBmSz8Gm",
  "key32": "4xdVbLqm4nReuotGwKVJ9rx8CXJCZaD1WJCYuRGLDBNhftMBj7ZWK8o6MtDkyRcPViSuuT7Eo7CRJG7KV7z2uQtK",
  "key33": "4S1DfdXuW8PYQQyHfuTyz8BtEL2cnq44M2d8CuG3hrnUQxthyuXnFnrwwhzuLWKfgWXgdgKeWUQs1AD6ggLmWu7F",
  "key34": "2n3PChGdvhj15cURpL2u5p7yoRXY3D3U18VXf5LPyoQjmtVBfAimcGK2jriPhoGUyyBmfjmCayiRJ8FdMsaw4Hwj",
  "key35": "226exMLNt15eVr6yjvqmz1fLVGMcpvAbLgs6BvxZWd6NB67vvsK34vLQb6WRSkmaVAn6mqEuzpBLbMGsxfwCXdLY",
  "key36": "62xXwPoJdgKVFBwJVitgmjcnq3QWkP8aWRicAuHaXa6FszdUwbWgsavQCXvcaBZGrbVGLv96xkfEsXnHbfDCo2N2",
  "key37": "2ujgu4dkTfTJ73TUf9SMGSy9XkjhWdU71LiPSuZMK6GZ6umvPkKSaJw7c6ABdMKD3GJFx55sAvNrk5Dt5bPiq4TN",
  "key38": "buxU6ov5rXspf4vjSg9qvym5MNcwcknkm6CPA6FZC1rEmMaKxUmZy9XpuCyx2WVyd2fuSspeTns1Z8oRegvsMTE",
  "key39": "2a11va3jdyshqUKZoxuCfkpDXuXwP7LBAp2qCXPWFHECLWa5pvHeMaFxCd1tKgzRUPFT2MaVwkMz2X5Gysz3p2XF",
  "key40": "3T2yxHhm6eQgo91MeLyqvaD4TgUaewBsrvRFS23U8u4SkFrMNJvrBLyBKwffLyoYcr9jbmNUqzVvrFDNAn1a1atz",
  "key41": "27gdYVefcxLu9axGEDVkF5By9TZnNhxEfwoejWUDaaHheezLchJeEpz6eNZ3MxE8HnrSBD5tgr7Z87CFSDKxcFwR",
  "key42": "DNasU2YNTseZLV5CPxWHkN4q4uGeLtmDWXdX5FvxC7yjdty88TbSLLbkFJMTjK6bzWeASpDGpgNeVhiSaQmVa24"
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
