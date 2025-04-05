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
    "67VRVPCBcTbyt4dPRoZcd8EmZ35KQBV2px2TdboSuUuU4iGsd7p1BPGD4esTcj4E9kcVE4xr7dwNgQeBxfsPVqzy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EorXM9F1UjVWnZodJipyF69XYYjrB4TnbR4P6a8T4Nq131nfH5EBdWkyW5M2CaGVJtQ1xBxxFigNCXk2SwhCFaj",
  "key1": "5DJNtnNPR8fJj3hPDtBV5foqNyZSwLEVUMq3TCQy52iyTj1ugNm3iXhg9XJhyKigsESV2XJoF4wcXh2wiSe3ddm3",
  "key2": "2tV3eG13cYAieha23qpomQTXVgngZ98LF1R8mbmAgyTRk8KHBHvc1NZ2wGCBFp99A3HTQ1s8a9r1SAgH49rtUCpM",
  "key3": "225uRqExSwnoivR3oMeK6dDRsjWpy32V93Hm8YP8nWbCdxsaugReimEosq2VFZdHJpxwxP5ZjvGSn8pCV8XHP15F",
  "key4": "2MS6bqJz8azJM3p3PuHot2QyhfXhe7J1VuFJ3BbNXW2ghbjwgLtApGQwEX5kfSB2JPxU8WpPBwwKre8WWM2vvDm4",
  "key5": "4AdXm3w8KYjoGjMioRY7cMf2NuKSkeNNhDR8xc2narTvbH3utwJvX25KpWch7zTjC8yWaj2aEH9jBAfdNqrY8aGf",
  "key6": "2q45oun5cBnU8myx6xZ9LfcrdesgvErni8Npbvqmwc8SBJ7s9vJRwSoauyJaRL3Q2rve6E9722zBAu1FNEzvPeym",
  "key7": "2CQj1wWaWeVeXqVytmPua5Q8McWF1HhkUTNDYwWHUfU2vsAzjuXGeyAJ1ZwYbgDuFqkddK3awqzpEegi3HY7VQkQ",
  "key8": "T9derpDUPmYzq5UPnDR8VHHmQLZHN9tPhbiWAJ5vLAryXykZXSRLcEbVZRLjrpUS8ib54oVPYvASUmZtvBsnubr",
  "key9": "2jc2WzRHmyvjWnyJywEuSfccvhU1cywej8Zxsp7uAfYC6vpAiDfVHYTCnb2mLp2ydP6eehvEDYYt8crrWTawMS8B",
  "key10": "27qPaGfY5z87YAuD9T3WPcGhEJdjvihgURjtcAMdVy32jCTgVYvK69eqMTpvfzCFPt5d4iqz8YkinHWnYPzARtqo",
  "key11": "dmtMVnZMrWuULvJ8dRX6NoPNQ91qTsRRPhAJZcQ27bkMRKRta5Xa9RLSuFUUvBqwhWBZ8Xd4aK4QcbK5pus14Td",
  "key12": "2aZwf7Uda8vDjMd9rJCoA7cC2ytAeDE9377goNbiN814qysaRsjoUoguWdUDbkK9yFoLmJFGTFEhvogu3188767L",
  "key13": "4GJaBgaFWBc9ZMRrnHGjr8TbNMcVxoJc8vsJcR6dzDH5e9KSM5MwEJvtif89HNgEL1i3GTWZVfkaca65gLmJHcai",
  "key14": "dnsyYicvkH6tbGaEHfEaHM6VajBzAUXeBcwL4vDojYxt3Un933Qji9G5ASMMzFpmM8QXv5NeDaLw2jcVEQBHGDo",
  "key15": "5Ebvv3uqCvfcEgSsWDfG4fjmjZc3cJ6sCgJuZi7ZvL84NtdFuukGNBmnebifVFhL8QkuxzowJAaHGERt2pYGCG9m",
  "key16": "9Vq6px7qZWsSJq8pVAX2tq9wHMpaPm3ztge7dWKdt5cmLCKUQYMZzZZQ8wXQqm7X9tj3iNBNFyUkpHg1PWhR2iX",
  "key17": "5tyYKZuXjFFh1gNsfiRsXAFKh9kZV6HzKwaToCsxKfKj4rHcGmoxvK1FkUd1uLULz7A5dVg39AuCLBoGqsvqrvWA",
  "key18": "3eG7PVP13s8LuHySBF2oGynaNFBB4Vzv2LT1kLMeNzKwoiiohZdx3eg4qD13cPqZLwmkDgLQUSbW2y8UcxEXHEAg",
  "key19": "4mntjmkLdtmngScc8ugEuwEGnB9WCAXZP5iNxB8MARkzGfbedN2iBtohb1hkLo2vb7qJzVzXtBfrC4oXRXian2Z6",
  "key20": "4VLEAha8Y5cj3UaYA8F9khq9kuJF5owqf8qTBqhqEsx5MLgg3f8HPGb4GgPirjCpdhHXRtSjWwjPf9MmB7sc7f94",
  "key21": "4AJRmc11EpyV3P7nAyUgFhN4x4e8Wm2H3zAbg7fEy5WpfnadWwc7B1Jfx79xB95eCw6KVKKqHPpLcjfXxpjNTDym",
  "key22": "siNACZEoCbYgbiAWxTBTW84P8JEJsTrDbnBxj4T2Q1VijBjCaS8C9jpq8VArbXmq7ZxZruPnzvQ32wnBASm2muY",
  "key23": "4P2HGHawxktbsJ61wRg2LXz25JpfXZwB5Qg7DHnKAHutGPJRAT7euG99BBjbs3bTiXuj5FR4ivchaGrazQFhyMMq",
  "key24": "2aywfQio3KowbE2c1zbfFMf7JPfvA11uXrTPLxve383PQCGp65xT7QbbZ2QNkBo3XTRZfkpDmBcvpCoXqXNCfgXe",
  "key25": "2KYzQGb12hR7kr6Rc5bBLtqGTfqnCrJ6fH7JedAxXHvAfXAGnnhHZwKHs1Jdcu3MWxZ247BqyLSufAzjwjbtV6Ev"
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
