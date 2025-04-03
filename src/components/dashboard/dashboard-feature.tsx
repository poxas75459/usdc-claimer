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
    "4upEhpdeEM9u5NsSSVEkcdSh8BLvRCXih9zCBwjrxK9tJWh6J9meBHmnhQWQrRJXWtJFPvsxxe9tCBgn7p84yV5x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Po9nn9j5NBDMByEcx3kgokFoaygystbmX4wyvS5rMfs6q1EAYQk2hLW8LyagWsb5FdhaRtbLbSs7Rqd9qR8DmRm",
  "key1": "2xSu5QaBA3PAYtLrHorxu8kdCrWy62yCoqd1LTf6w59wRLERgpMxWMd9Pd5tfZjW7FRj4pohP8C8P6p2cPvRhrLS",
  "key2": "4xJZn9gMYDxjZEqTerwg88Z5fsLDBbfreYbwE94oChzRZoFopsbSa3URAxWj6ZBRAhv9ezprEKbzSEXmYdn6SJBn",
  "key3": "5x9hWzyH6cK63Pu8ZrrsEcTc4RdJzcVn3WKm7zj4FE1BFzr2vZvFTr4p6y8zoXGiefkc6EEbguet7mx2T528AnLf",
  "key4": "4FCasPFgWN9TCQprByTLcD9YvTS5Z3aenNUdDa3r2Z1SatXaoqir4WUgiF7723EKJv9Eke4S4GVvfpfojfGwqGvu",
  "key5": "2QGBw19vRJRRBQbjMJsT5AQvcEdh855nydrcKV9oq13mFbJRqND94a4BZ5PPtT2yp8vcAkbmZNXJb6HaDWM8P9XF",
  "key6": "3RGyYcNeKcStrGde4JwXhVLVbBjD4ETimVbBWzVUKfYcfUUbgYtwB9PgeZygmGyhJcrzf58JH3U2k5kLc3JoWQkT",
  "key7": "548GUAUgjytixCHVjZTjt7GuS4eGS1k8D6vEtvgRkcdUGKVGbKMx9nYBRqAvFiBmyEycN1bsNUdjWtA7nJbXGELZ",
  "key8": "f9Hz8wZwSULsVLjrrY5MJsbbkfBTe5nMsVQbxnwoVqzQPRHjXD9Ts3yrezYusuJppFPYGMKDWaJAnALpzvbTd4n",
  "key9": "5NyLHGfyJz5cMHQTiceVxLymLPXxEGnaPayceKALZ64ioqv5o8KKVyLmZ5c3zU3Qzy3z68LGv6P5Je5sQaonScZz",
  "key10": "9M46eZmvs9p9yZTN4tyuR9vLNP7RFYsMVT5gPNnKG1USYKvkHgLvtoqDptztohRtXT5sqL3WYugtPtWwqxwBoJx",
  "key11": "5z4sB2vmdQFZNZy4z8NoMDAsGcTnRBAPUaAf423qFtZan2JMtCMHTitGxV1CLMqnPiYarnM1VQ6Da6sedrW3pf1",
  "key12": "3vCfZiQcMLWQcNSAbeWdWWh3V3ZbzPPJaHvTigQBSdXZ26XgCisb3mptgszDZRJLs1bR1K9sff1HdmgFC8DtrYbs",
  "key13": "SyqHwQ9Xcpx5wkuQwpr24a2AMHpq6BC4XnJ8LUrssMQfqHqwFjb4AmiKrLX7heRMyC3wvqmkd2BDFsp5sVQXEDt",
  "key14": "3nSxuJqV8UJ4zqdYNYrRLnfFPUUp4UvEEu8yhiNncLo6vNggFciT5T58k2n6ooQar2c1pU2U2qt6vgFAgh2KEsQF",
  "key15": "5DHbLGjbVXxhFiVi1xWdy434cRrx8DUuj3LVBKZr62cC1kHxHmjtwuXyMXY1FxMaCpphCPuXtpqwLjhxmdNasjv5",
  "key16": "2PYU9psatnATEThRhpjoRzLD27DnmpN5MWHifKE12uK4n9DKTK6NoRiMsvnMDUJjoAnYKva4XNivgtdDE4KcMsSw",
  "key17": "2tX9DxcJM1owU8HsKRxFmL1pNw7WyBxYpXwfhVap8smEDwjJHu4fZAHEjqoyzJUJAkMC1oNm1CFx4a7kg8ipZX12",
  "key18": "Nv7ZZuPc2V8BACRkk28xpwPAwVyB7idaRWucjjkFmpeusv1WR7xSXYPjiDU7WGtL7oz3AwJMFvuFZjZK2x7H2Rq",
  "key19": "2bB8VJC5SkmsxwB4DRvCopvx3SW2oRaJc54BU3qLSwEevNz7xMxK5AJ1xrJoL71wx5c8Tp4Uy4yHAbohBgrVSEy4",
  "key20": "4GiFAaXV7wd9pcgGM2mSgR5hUqDc2hA8UZH2GkN3s1uT92gL3MRr1spbHCepUbHMhHa5G5VmmnkiEA6vTo9ogxZc",
  "key21": "4A8yUUHHB2QNBmb1kEv5qQhoMeqNwvUzQ9ktCwGcssSE5b9zA9F2WYBQXRu576x8T1GwtsGwQsroTGV1NpDWKV6o",
  "key22": "e17NNKBivd276SAfq27pNGHqbStjTMYPFGZaxvBpa2XpQ1vi1JfQKcRK6dmaY1JbLmGDYtYtsWLnzW5CQCum1dS",
  "key23": "28yy52P7P9NjeSyauYHfKrcvMiXW3zV56D1J1cBzNYMsynGYUdqX3NDr8UJKPgirqrXZACUdHssCubACrrtG8wmE",
  "key24": "4V7Kh4ikj19iVepW5By69cnkCewqoynaKN8Z6k4P6VHi2zbSbzgPMH2i73CExG4QL7N2cLsLwrjwDmyUniFsZeJY",
  "key25": "PJGKtrWTVLxyS5qQ148SbhKzujb7qhhMGvT8VwXfKSJWx7v7zsD8k15PX7it5JqtgnpMBpBkpnU5uwPBYN1rCo6",
  "key26": "3KSfgbTRDMv51CDCDbpbn4pGZYhRHf1oUtkpprrPadogLRKM6YLCaqmX3xDaLRCmbV78da4nN7ZnhHMJcwKRuDKZ",
  "key27": "4g5J2UBmDVKbfR69rhg7o11rQmJvN4budP3ezFc6N5Ph6ergxDRdUjdM9yDjzpYBsBYw8eGDBSeSs2UJS9gQn3EJ",
  "key28": "1Zy7VcTHeHtWyEvWiDsqn4A9WRbyg2yTRwvzqNZLA2RW7uijWxL7R4XeZfMPbftHqZKhtuxLz53su5NYGmFtDQR",
  "key29": "5grWzEY24tbk72pahMvwhWhSdaGGHrP1HFV1wgZn2txmgbmG9kjdBE7FRuMuFhJPXd6TrGDuLAW6ASF4jz7afUju",
  "key30": "23uVmJEqxxHdDzcELhwGNTWzimWk7V2rEpS4xYzBAVQjwQ3mTApZrT7azHDWNiizXzsN6iacqNCs7iASUVMZX21W",
  "key31": "5YjB2odF9wcqxjsRNz5rAreaeUzzYGdGEXKktbULodQwamKxkZAW5ssistjheTusuwKQ8PTdfZw2JADAiG5ppENz",
  "key32": "evmgPBesakPv3KjnwnzCAu5Gp17r5kZcRgtggW8bPGoTkRA1ofJv8SpH8A3tXGtSA2qxf8gB9oxsC1y284Aeo7T",
  "key33": "74nL5jhmja7v4fcKLevAeeAVqunn7Wn2JbeQjEK1o948rYJhsmrkM18hnvUUFpE9F9hToyCkfcZKP2Ym4QHq46g",
  "key34": "4mwjqmV1AFJkCsEWnQ1t9qNWXxrjJNdXmtkvPNwH5Sqe3mvwmyjRpwKDS8EpdLCf2dDNQ7nMPe44km58EaC1W96V",
  "key35": "5imsuzcZgbxYNDFa1hGPFKo6ppB1kMV2nhc32BaVEDbHXpp7Tx9BBsMPCHPKFYfEN15RJrswpPouAm1EPnBaoXpg",
  "key36": "QaQdPHQ854xuEZzkTmxDX7SxAp9PrMop7gFvTekrKvmWMHMZoF53bhZfabdtGDXMqddG4Jt3Uat5sMBP6QUgYAc",
  "key37": "4f2fXoxbXWVyRQqc2q2MpsL9sXGSNgGoGUXFHXUU36ZcGR2TD7WgtpscmmUt4UUELq61T2JEY9xEuZsr8QQMLK7D",
  "key38": "5yoQjzXAM5hBWTK8sZQCBBfFoQ2mDmN5c5QW6fDDeQWpmUAVzkmPVqpPSSMCf7LHDmbAatgwXy1GhYJYzF7jLHcN",
  "key39": "4beeKq5DuQW9Gz1UvLNZr31joCJz3hMxFcd6oKa67VT2oMiW1W7bak9Vg2b9HYPeV9aC5Q5F8RPCBMXy54HDUMA9",
  "key40": "54H9VNGqkT1XFuBr8KE6Gngi74RL6JiJVWDq2AEajadSgKPQswHzEoFhNj6oU173DGfRypEyjmms2cTqmYdhE6Sh",
  "key41": "496VFTeNMpP6gt5RRmzhJgS8aMuWc88XyRQ1eFTUwHix7bAV5Pg4Kyd28FP4xSktfd55KR4oq1kBMQxecsioMLnF",
  "key42": "4Rp2LyEjwvFFDmEVuKY95xF1FLE7JSE1yvt3qntgjMeNNUCW7CiphR9sZBbdW8gQbMpp5WbeHBps14K2KdVn1hoe"
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
