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
    "32pKmCCsqe8kBmcMHtsp5Gr4TWtMEAYVqJbwTd7j7fJ4vkToGYt4rEPW5245k16wVaAgU4QuMu26RNz6mRUPFZtV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3asAEmdTww87VkrM9Mtm6MkKjXnhNcYN2wGv9mzdtcPp7uMVBQ291fmP7Bp92cuj87DCn8QvkQS9YH4ATqCT1znD",
  "key1": "Na5yGRbNFGdW6qbA3ySBFRXBVxe7aoCHn8JZLeZ15XQ9RewbzvegbXT1ZWzCNtkgb8tHYtjj3oTevYvTBer9LyF",
  "key2": "tGKst9vWZX2PZNzfLYPfbnmQKRKYZi6DUvs8hBTngDKKdXyumHpzBvWrJ5KtxCPEkhc5fqUTXhDVhjgjEWgsrrB",
  "key3": "21NAtUkUkwJzTKiRHwwBSRmp1y4EQxPc87Bo92DbSs3fJ9B5YgtAXJPc3vP7FfkBUQanpEBisTz3Dahwv9GP1TaK",
  "key4": "25nLSbX98c5ZxVSrsPTZErUF99VC1iCiwHFvqp6drQsDEeRBNyGDEt5RuXGdUb9WaRCQSwzDHpUo6VF4KdQcWQPz",
  "key5": "662rYYPgx4iVsgGash1cYo8RpGK1aoLpxkEuuRXNCHxucf9cfhSqwAHDMq7oo2mRzFEJSVwhZSfdmMtJfTP66aGG",
  "key6": "3MGNAryLjBDsLHT84x6w4N4F5inj629Ysem4k5N7xte3jWmnxvsNki7xuD8hKAsX2hnH1VQALiAYtuJQ6s58n3BY",
  "key7": "45xmnNpD6HjvnphGKKy8fagHE22dvDQAZ9upqCuCU4UuCvP49nmxLP2V2UBhD51ibAjEqJsENA8qxCVXXTTGeEXj",
  "key8": "52NJ7QnujiwuDTEdHZDnBA11oiJPKPpvngzfEHGgPrGmoSS8yNT9HB74L3BQQ5e9hWcUvVhCoZhUNzjYahatYV1g",
  "key9": "2TXajfLzwtcVMEDGxyzLRbGD9MLA9FcGQqwp1YMctCMTWbD4VdFAQqPujC36xvPj6ezFkdfVgRWGmEexCiRKbYxo",
  "key10": "66A6H3CRNkQvWJjhmkFAWLSDnpJ8nfhzoHGvjZ5euqWrzjCijaYx6rzsUcaMRudAbLWraRFHDBq6pQRPaNMRUSpw",
  "key11": "57zjhVFQBw8vQXYMRsHahVr94W2gN1WvW98xtF3AsCXq9BXYboqh6cLvCDM3ufK5zCrdogATHp4RXDxgdcycKHZM",
  "key12": "57Uosa1d69TJwvHM5dpN8qDFnbndbpNaZgjNBBPWawGtZAioY54BLqen3MWAG5CtdQxWg188X4uT4CATuonmozjT",
  "key13": "ZXXmdpASQj73TrzMsNk2BoFYcuBNtNk5wojjZCPo4Exq9cQK441zbfpsSrSCXL7sAY57VLFjJXZQwkvNuoymytZ",
  "key14": "dEbavvqyLCL8XULDkAkpiWEMnoWGPnMZjnxjM6v5BRUM3fA1B2wELzd4WckvBaQ7PgvAyG5qN4nx5BH2MfNeHM6",
  "key15": "2aQFy7jSCFnjzZT9Yn7nSnba9yg7yxyarZHLqnUywcquqKvXycGF3zF9tgpZwmW1XoT5D3Y1ucoKBEwvou3CJyGT",
  "key16": "5QRD7CicD1neiq6oSX8P4L5iAHFxG9tFtHetXuwLQUcCwE7aJNKvmS5rUnGDtb1wa5VuC23hhDppabouJjshUH75",
  "key17": "2kVUYJM4qaFRawZNecPoCqQYZL4LPN5PRdgaaS9DfWs9E6Du4cyrJRJdLZbPNzXhrHWpWQZXzdDcUyJPnxDyEUyq",
  "key18": "5rbkCoAEB2pLPtqTokbqYj2kEf6DEdFdAkcdnDyPkkQ358ewDNqhcvgQtDwT7m52ughBFsfPWuRhX3LdGHHcJy1u",
  "key19": "3eqUL9WPjyMYRoSrWPnASui9KSLfV8cE3z3yLGnYWYXUkSV2yENddMpmtcfLZjsX21s7tXdzbEH66r7TDUWvkiG5",
  "key20": "51PwnMkWuQ6ZKiYYbjzeDshbNW8dsjjXGPnEKDN3Xw1WoFnE3BpQeXXgkBBpQMudvrxP4yLbotkU2efx8xX3RWZL",
  "key21": "3bNnygoB5YLCLNsaMA79Xzqr3ZBfW8FEe6sykSKsxmatbGNMsnEiNrTqykArM5Lfu38K22YkyRFSDxhZ8i3o5YRu",
  "key22": "q294uxAW9GGKUvQ6tG3M6ah5CDmoaLMJoHujh5QSbCrs7UAUngyvC1c4HXRkavHZXcRRABqNVQCemmDFp1FmvP8",
  "key23": "2rXPdwHHUc7x9GSnXBjfKpRQBmNCdM4VfS5tj1jb5rwDbMkkTnS6aYZMRhYyXsyMfG6tsKww8NzztC7Tqu9X37DP",
  "key24": "2WKYZqt1JURozkeD7piM93Vzy38yFY2rnHqco8w9VxQ9yNZ8aaEroFNfjEJiDF2M8R1c8ZRMXjfiboq8H8HWfYSE",
  "key25": "4w3y1KqaNUnCNftdCoh9jTZKK9aKevEoiQ7gG24tK1Yojs9uApux1CAKVqfdPTzEPL67RpkjTLWNvoahJH5NYieS",
  "key26": "3NgEiVrhRpeBNLDkjgz4QDaYRRozB7MEeDTjB9jqfS8cpGRL1BN515RUhTBj7kydXuT67HVdQ2HoAVjv82HMVt5F",
  "key27": "3Xn7etqMMNn1R2oTewp7maqbcA35svMjTj3ZAk97fPu78VqpQXBT51TDMhJ5gR78Q2XUJgEt6jxEowBPXULRjS2p",
  "key28": "3dpP7WWhGr7QsaXBt7qNVfY1vwEKZcbUd4i555HHDTwnT7BTD1k3vG8ynVxiyeHVSFaRZeYjGWWcQiMPHGCQtuqW",
  "key29": "3GHyhhbhCPxH1pe6fEJHPAx45YgWNDoVNE72UZMCTFerJ4z5ih7jCpGvNSKmG2wF96x1dyNE24zyQpJBfJjMeTo6",
  "key30": "33bfXDvHXTbt84xnFEq4gzfEekxha9fidAmabdW14KEpeC57pdjGA9gfgZdLAqPvGpfUdKiibtxx8jHZkhBop58X",
  "key31": "5r9qC3s6H3bpZpK5Pv6aSkJnb4CrFQkk72FY6rVmfZ9uRXBrJZmsXiK872gtU153XL7fSGmyZhx2We1vYmp13GPD",
  "key32": "4fgk3BRcQbsPELmEEZP58hrkrRugeWsCKW6XMaMPtNztypqDKiPU59YJvX9k7zeGhL994nXaefj6McahsWRSKcRx",
  "key33": "35TS4HiJVbsyTHqUaVyN6zK5vVjZK3PgMskGWErdd2BFWBB7wVtLr64pftayPe2qteVZ1pxFXcKms6VqhJAa355v",
  "key34": "t3rLn3ehahRd6T6HrVKswB6o1KFWjtRAjmfPkkZBZqgxy6EPS4tJWtVJzU9HHSEgVMB4AY1tLYaeeoTz3S6JCHb",
  "key35": "45cidKgAv5TgBqEKXd5iHM9rdDcRw5LSXvh63iBjnuZAoFdGVm3iMLYNC648xvLHtbqTr4GYRwjhCq3khnAp5crU",
  "key36": "5cXy27kEJC3qipZr9pU9UwAZumr7MxuRsgxsBvWJDswKgde93vtPjpTzvQUHnkytfmARwaefnhdP3YdGCtz9tfbb",
  "key37": "57y9UaBU7ENZQiKA4e3ZYCpwhDtXnUu2mB67wGrJwcFcpWHoHhU3fRX1zXT12c6PUvjjU9s87dcqheTEiLEdMRf5",
  "key38": "3txRgASh852b6MUSdnjVMixES6Lab1QNqBb95gjYeGVMkwemUwXuo4AdweyZuXJh2JwePAJZX682LPMRr9PDvzh9",
  "key39": "AtHPCS8Vm2UuoctdzpATPmE42AdprgFHwJq1FtdPcNFicjT6ZHheQAeUBT193ok1M3MxC5knTfbGZdjWS8gz7JQ",
  "key40": "3T1R4UUd8CVMeDMteM4gQMvnWBP9gTaCCcmzzRy3afChFxSGyz4ZcQnHDrhUPHWBvr2G4BRqc4boZfREv8yfX9Mz",
  "key41": "3aDj2oZKeq35mo4Mjfrh66Bzj7QDAN4Vyzfvrwgzchx7qNzEpUkBQYPhT7ZDNhRsCxASZw4eEf95bJruqja7VhTZ"
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
