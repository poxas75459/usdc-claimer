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
    "tVRJyzuuq6EzW4PhhTTAKyPGxzQCgfyDei4xxhcK64WBqRnjugBsUVc3Ms5zqvKd9ww51492TwCZLVADa1kLo9Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AftWdA5YyZT3Er2JhmA8UffE89vKQhBc66pL2hpXdPJJkwn3XfFFHhGWkTcCA7jCGSE47LLrAW9VwsJjy8Td2jt",
  "key1": "sjugmWmnLmz3f8umaPUMyKAdYptRvKvBxRYMQnoFHJxWY2CuCtiTFe73HJyaFQ3uXz6uwsRMvTSM2RpE27LQVBT",
  "key2": "2TGnrRtAdyRm4wuxFcRXtGnu8Gca6VmiEbxgiNscEgyghUEbsiwKbujbrj55rmRGiy9X7W4azDFYmsEcDgGzm9aq",
  "key3": "PpXgTNpyjSRq7MwBS82ucnvbV7DLb6qtmCqdot7ENjeuMKERAqonfz9ohWeaeqwEZexoXck8dXebzNQjrz1s8Zj",
  "key4": "4gwa1ZEZM1yDP3KTdA5EVFJ3nVmdPm8mSm8MEhX1nefuHxTSkK7P1LgBnmZ2Ww757nDpxf4VBKgpGsfhqpgjrWW1",
  "key5": "5NhJA41T8199dMyzdFcYFcG89wGBgH4FR3woxzsYrvDyWW43mAXxd6UZhYbHcgS5qSzhFYnYhuUM6VibLgXweAjc",
  "key6": "5yWZBx5yJejphLH6B7Kd93CjgnzL8SBdDPcWV5gda7th7W125STjuhLFN1Bgmwokumzed52fKHCpzHoE3yUhwzgo",
  "key7": "6APiSnya5vhb14aw6cjSijvBo2RD28Brc6qVieeibHV8FmBgscL64FkNYQWmBHBpgPW4LCbVukRrkf8QzqkP9xy",
  "key8": "2U5ibr6X28d6vR94ZDswXXgmsKhTsCLehFZJ4nk55sDQZdmAraVwHAmdyAZXReGNEtddhGNux16QvR6SbBfFn6t3",
  "key9": "34e8pjt1ry7gRgyVepfUEpQ9F6ARpMYQ6jVwFpbWNU2HK8u3UwcVFUgySxUnW4EP1Ascnr6LJR8ZbQUfEuPcPiZB",
  "key10": "4mxmc9LXUk7YYjt54qDGuLHFtB2xpPivHJ368fTk6Xn1EkhUDAUdithQorG74DdLEQsQsEksNCk5UjzNSL1GKkvW",
  "key11": "LLCWAiCMt7WUAFBf1wiF6gTUN2r7qUUooamRoAsZG6yCm4ky13fZPXYMofc4EGxcqPfCb7pMhoJZRqAAygC2WJM",
  "key12": "2yP6vHyb9N5sNhw1VgrknJKGpsCbWh2nYzVMEdaWXtdD7CWGw7nCUqrkFjycR7Ti2HZHk6smp1Jh6ac3w5WbRuLh",
  "key13": "KY7antnf5NM6Rnb3ShxrpGbFHr7d31JaDf235ddqtUr7iBX7b7VwwP6exdDkX9UWpooB5ms3NaymLYYZo7gCXFK",
  "key14": "5D7NfuTNSYugscHKrYicsAY7UHv3noN5BwboeKNN38up1VLNkXznGqF867uKqh3CYNGYDAbTB9i1T2Vrk13DfJ7o",
  "key15": "3jaqotsH72T17tUfQZFvD6G7sJjM7ihDX3wmu8PrAxM9GF6VbnyHaNcRaZ3zZ5hvzzL6h1BHTzSd1GdhpaiM5rRa",
  "key16": "bs5suEdciNFWC4NyyDp1LLNLSLKCWhXAXfqihAzJfrUFZVhJGnUS2xH7FnT49MKZVsP3Zsusfncz8uYvXxLgBaH",
  "key17": "qHDbTNsPNyLB6SEXpK6ZrkFtBNLc2EPHdNAA9Dcq7pocRAKFHRsPqAhNHzL8LbnPQLChKHYY4Gh1uHi8fSEPfML",
  "key18": "2SUU6aYnR1RGtQ54uq9QLD9Xca586FQv8ZePuujDepQar1VHUJJ9Mkc9bNwfvUqBk3hvZTYAWFeRopLf3wXYhgYs",
  "key19": "3Vdot4tckXKxLLLkUhejSb1cZmAEWunM2d2XzcoQcRHLPGiZEuc7p8vmbAvxaYYtYi6ssBqUrFtxNTg9gn29Kfwc",
  "key20": "3RRasX2Eoo7ZPtTTbiVuknfTxWiqCvLhWjC7muojvPrEhNWiXhYch2igD193JnaUK4xQz7RvJuu2tX7vknBgV57",
  "key21": "5sWWtLdpaW4fK8tognJVDZUeGZvzf2NMNvRKqWFpBzBnsc1HjxBkPu1edWREbnjDbhk6A3kbu7WcPXfqMaA65n4b",
  "key22": "3859CUWJQpjHeZJYXjGu2fi7BKZsykUYKFkXPRY7cV2d2iV3Zgn7MLzavmnqoXQHtyCNPSuxHWzYcPXUtUcJeqAM",
  "key23": "2Lnr7AL8rBq1tcFjqxYxBu5B1ApjAH2UyRMHCzspbzW3DJzaZCKKLKsexA5DAnSh4aq2nKN3yoeZsKeXuR3EDPjN",
  "key24": "4MiabtpCZYtYhzshnenzCXEHUErbbi16tpSG9xz67sNu5skqFwiUvaCKBNfGR7q43M8An6S33wVhKwGCpqA4qWH",
  "key25": "54gdznomSpP4U7EKxcsvF6Dvssm9Jb4DBHGGnxYPKpwF1Z79xApGueo4tTCcX16iRzccM4wfmgPLS3onvUgwA7cK",
  "key26": "66ZZrFykSXmaep8wKhxtDZPVXCBkKJNS56XkK5HyyauGgdaibg8xq2UxyUian88hsn9dJ1APdQvbtaJuWpr1Dt7N",
  "key27": "43iX6rKvi8anYWbLyoC5qQuwb14XSDxWFA1umYqBQgmMzDH3p1nMkRq2hTK7RuqpHDVrbTjpWqs1wbrGUfj55AEd",
  "key28": "4xKQ8QzSG8PpdcBWxEzbG3XoGTF3ygw3NiRDDa8Bb5PxQwqaX7DJB5YXqCjvPbYL4wKtAKKbszzPdfubWMy2vsek",
  "key29": "2bqDt9jdDqCTi58ZwhNamdsLKynsKed7SwZkAHPDqRa1cUhN2GXcEWV9rWMnkNhGcZELANgKXpWy2mjCiphE7mAk",
  "key30": "5uTbEMJPrXuhLVTsoqkATceLuk8hMPX2y8T2YM2GYa6XCqjjDMhV8mbrJq9odFoKHAHyVdGS7vX7BnxMCM1EsTv7",
  "key31": "3yaGWJeoYYBJoQ6GMa7wKDVMjmmqXeMyhKfQuJDNtZcH8LThbxji1q8x6czkScRZ9LFr4HUxwxDJ87VsBqZ5HNGD",
  "key32": "UhwWkUQjbRwVtXPZNthb7p3sayT9y3H6YCHTeCNo4raoa7Q9566uUW7AE3pUaFe41YYnMVdDQFQf7WEQQrNCk8m",
  "key33": "2Crcj1BkAZJhN5WgVk2GAu93Lxx3j5f728H96tbUm5iA3jsFkQRw8K4bDksETCmFJf2EtNdqgQB5nHVHDFhuYysD",
  "key34": "prNgTnExCWutHjhnbA3QmjUUc1x53N7herZDpsozYkhPHuNPpwHfv239jYTvZigCWpty3HgNQXmBHourFiJHjYm"
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
