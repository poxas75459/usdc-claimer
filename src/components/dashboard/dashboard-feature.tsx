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
    "3M9vXE7Fi6TGKufsrWbTU5vVEVXdq4pGNPyfbtcPX8dsx25uPb712GBfmighYEgxu25qDsQeqQHfKJNbJF863AKw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Cq6m47bWbnG1NBJtwb6PKL6MSNqRRedmbwnWxHzBgtmNghaNinSbxgMH74nXmd7S2EcehA2jKTTUw3db42KCLxx",
  "key1": "9fqFuGZmpQfKYeCk5EojbherCYiEsN2Ccam8Lfm3kSkyS9i4Cku61eE6E8FngXiJ2wEeXoCAfGUQKXF6XmMkbG5",
  "key2": "6QEWuZbbKz9RdTtRiRUgSp8NSLzARR7FrtChoN6QKCxuFDdLdoQf9SP1Z3FwVeZgRBRpjGBgRmZpyrMz7bvsPFB",
  "key3": "5yS1DzBg1GaD1Kv3ZqZTdpixiH3TZoKWnd7XKQv9NwPf5gM3EXHPb6pSrqGTkzDGxo2rBorrZhb4MHobRJjSmNpY",
  "key4": "VHA932AWTeN7FLzjjzANHAGMkRtLHc3qNe2ABXHhDmkXfoyQNzPT2HvkZ4D4nXor75Y263M34psncEDWYyqoa6o",
  "key5": "25p5SwhtStFdndyKNfuhtuyqgf4C2YJ5sNQoKHjiJcaSv7psJC4Q96ACo8iJc8ZsXjaCFn9FKr6dzPSPr1PLXB29",
  "key6": "5or6pnpbjm2fcW25cgTy8YryYMgcXjgozMDKHwRs3WoTuy6VmHmdPAu7YLD22pk7ijTWPiNc2f1DWU1ka9XWQEXY",
  "key7": "5nwuWoh1Gdg3dgwXj1ER4vKV1vSevqw52NLwkMqucHyhstYiXM8GRCV7F5pBdX4NpaMB922kfhWHzwfCQo96aKnK",
  "key8": "4BxhpiFTBkXpKt4JTrzn2WhniuowdBqqKN2BQ9MaP4dXEvDwmKEeCmbDJGJRoMuHw7ZjtM9cgSiQVPy9fxZSa6ZJ",
  "key9": "awDvb4rQryFQ4Zp1PCG8vKVNDTGvGvqEJsGsnj1KnsNAn7ofUsWXTQ6Qra2tC7waoeXjbKz4zyGka2cHQbApNX1",
  "key10": "5ejEdLuspbBfGHNtCTtCiem6P7Gz7zecLWLueWRBcBbMP2gs73nZnD2EnsUKq1paKwSUJDusgxipo383p1kiihAu",
  "key11": "2T3dn2pWg5zbCQTRKVTEsk7Lg5E1oLL7aaxqcg2HK84ot7z4z5EULdNRW8hV9RynsXjgnYr6vAH7nBij4FT8n7fe",
  "key12": "Dii1hLopij3YjpmwASRToYBAM3ig9ZAbHYepRd4zRwWuFkzQMGpZnwNcqRsvw4RSShqNyTFsHeS9qVVwvGXDJJC",
  "key13": "2fKWAhexp2Qhy7VCW2wvNHcGxvrWPRbRoBnkJGmCgaxkhV3U7xU3UobJpntfSuMLM1s8AxYDE6VNCvaoHL8d3Bwu",
  "key14": "3SmEa5cMAKGBJh2BBYmafB6o7a7SVkrAAP19PyBfKB87wQfEf1s8qPTMt6NaMpbagJe6Kpvr57qGoLqpyuyr6D3X",
  "key15": "3foGbZfQH3aLERtLFCk5g1UijhifEdFrFnkNUza81czkFpcxS1HcbMGzDwtBNm7XQcfbKRBZPN8nV5PcK7qcw7UD",
  "key16": "XdR6L3JxVgUwBhzYFoCRUkNQDQspXRKvg5v5X5iEMZa25xyjEuKbLKyEh7SG14J4XvRBtDLQKmvFcGT53CAKHA7",
  "key17": "23Y86s62D2xZdmuokubCM8pzdJC7ciqG5Y36gPjghHMi8wuP5bhzxUGpHTKXAiPQ5S8ZsYBP2mqfM6vAzLD8az8j",
  "key18": "2b4j3QbWjbcMTs43G7siAMyK7VhyLFAQN2N2M41t1ktaJnVcR1JkGcgeqfez4u1H4zdGR5Gn4CUWZonZQKApgyK9",
  "key19": "feh8NRJJNmDixSBkJPNe2zC7aFzknv1rKRTaX8YgBrnPQYhAX15jNYbpFZGkYxaYdG1a4KpUtikmRVSSVYiz7Di",
  "key20": "5DZw5pEHSmRGMUXowSYVagjFsaZZYBTGC9d1Jyc4FNqBNJYFJTsNeKL6XazEGTnSPhjyshRhSKsyBuKnL8yTBjYD",
  "key21": "3YCgSZBMsDA3aAAas4Sq6cZT1L9Ke7cGP6Mdr9ExJh3E5M9GXVBWnUFkZ2btJ6beN5Z5TNVxVV4bBZPoqs5bJbTS",
  "key22": "4BZ7RudWWEYuAnNPX766sUWsEqheLr6ckAu94YxHJ3yGHrzjeXkw2XnwiqY35RszwL66NvqGqbbLo2BCZfMTFs2C",
  "key23": "5V3JdcwwnSMsdJGgZq74XzX4ZkbiHrXnVybhB7SdpveRYBfqq73boWgaxz5k1bNAHBCS44izQoXxKtBi64aSJuww",
  "key24": "3MsiwhNn5QjM9AXSssDj83YJXS8AK8Ls1hzjeodNdUqPqp89ooibShY6UXJ23Ae5q1jVQ89wzqu4HSxzbVvTYR9Z",
  "key25": "5zttBsPNRggQy9ufGp87QQQjqphknfaSeMXbnLaDTmRXuUtkNwYM7HvrzYXPkRu3D5j7ryq3Mxajs8KrkZGP8RD1",
  "key26": "3xTPs7U9s2HFiDuJAyaQZ7ZsnD6p5GTvmZwZKYwgt9TTrfhfLSxFcuRnDKhBhTdt4Psqj3Z9Yvbe7RteCrNLWVC3",
  "key27": "5wqXiia5DyiQbRhTAfCePzGimAKP9YqAvFPt6aF1y9SYd3LfdMswXtD9acbF6tg119JWNN7o3ZMZ5No7dZ7pF9Gi",
  "key28": "3VLmiH69r8t7yywcZTSBZSjvcEPUSP5tcSEMpwh9fqQqEotc7R2VJqSPSigMoB2GYyxB6TXH3M46XTnWhGBBFTBX",
  "key29": "5AWxM7frQVjdXtU1yfkcMEdSo4kTePNcxXMvcnXo3YbtG3TFNSRv3ewL37YY5jL51KXCWutQB1dT3gmrSP2CEEqS",
  "key30": "tmX2f51nXjcNxA75cYFf3NBbYz5rpGwikmvEwZLpipKM8TwtzWYkL3A8bcNWhRCyPMB5HLPZzr8SobvbPSgKnbC",
  "key31": "4VvXgQinpNvGYwQYCZzs7LQR6a9v83AQKboigHxHvoBBFGXbxqgcS2gzUcXMPR4FyC2igBjUgJvQfFroaKJzYCCN",
  "key32": "5u59W9dyJTTFCR5dYdDiL5EQG61X8NQbqeAkFpDx5H42BLQMUbMEtF28FKo1qajHhbHp1saonzoMiVNV2kdvT84e",
  "key33": "3QiBC1ZP3zdLMT6j16VA92pdKzjm8jv4LANSsjbT1SzbMxgmhjY79G5K2d82Dd6pkmVVKGYzUdkSLrtuv47VTNMo",
  "key34": "aK68crNr5qXRBbmtvWfE6qEzF4CDBbZi679ctuvbTCNRSowxp54bk2T75dUVbUidX8CVtZm2iyBaqjGmBKWqwJ2",
  "key35": "4XamHNpkXbXihrKdDBdXn8hY4RaWuvhktyXTDjFHyW774caFpiDAVZi6eNwp41BvfQyCwcFS2FJM233jTi1oZQJM",
  "key36": "YJxxxBpBre7L5iQNEF3JoGzhQcE6sraMKapSdkocfWBYNm7PmQ2nffaKTzDrBsGXAhaxUrRWczPFQDnvFQbNEx6",
  "key37": "5rLrKB1b6KWpNp4JQG7d2L97LF46vq4LwvhKKSef4DSxQQyr63ukEUdiRmRL5fZWtHHKJpBFGYR9Pckg8grccGhY",
  "key38": "22z6XJg5rMTVa98PRCnEgWZs81RDSrqFA9m2kt98zmXahAkAp8oXssmqGhkNkef22uhgB2nAgiwTwuf56vGE4bzq",
  "key39": "JcnMpQmnmPonX35BCYa6NYZF23mXQ3xrEwERUjxQKApNeYhm4pzJf2QUKmHkq6rtJ36S94z383SNT6GimycEb5H",
  "key40": "5iASDupC7UH7Q48jMPsjHTbXZ8D9qCR6WfEoBEb1y3AcpsmMpbsr19aaqkz7aoeHK6H9yYgVzYBZjabyMFBD4Vru",
  "key41": "LPLs7BBjm45MBfMHXbj4eNBskfiwCNmJXEHFcE54NtonEGaAw6cLHEsxbfkvu42wv9YN1RhWcqrmKg1GUxL9EPg",
  "key42": "4DEYacg1AgwEQ4T8W5Q3oxYZWikKbc6s2x7bAyx7ATfb7VvKYaaPUUGjAS4BZqck23iX5tZHXqB6qga7ZqjWYF8W",
  "key43": "cR2ETiwGWCcisRCkRbpYW7pwBGUoLuTbbQiyKdmqRUh8H5nVEUUYj62fUzKnpfUwUpM6xK7bAnzCba87SnVnjjx"
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
