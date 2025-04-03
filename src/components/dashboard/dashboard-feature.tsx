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
    "5XthnuwnipBp7VGFR8Haw2DB1SUDohxuYSnDNHRuxkz9WsZhGGJnxBvWiguGGn8N6iR6ZpiWPUEDPrHHY1j1GNx1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RWUUk2YKqKurUPpGijXE6u5FvKsLtihiDgksCBDwrJwJgXpbkAN3SPf1Q9qZmuSRmKh7TJoLsi62AWhuvi3dSnR",
  "key1": "iJ2AkYzLgrQZtti55netAZXT2iJVEVemHZHmHsW622gH78CpzzZu4SW3L5pVyKXSQQhb1798ebE7xny9z683hwt",
  "key2": "36oaB4pAwwsrPV7w9xVXWH2AHMtncm3oofHzMhbNv414TMpWNKjEVrS7Vwvi5AwsYaq2Vkusot22B2R53excNutn",
  "key3": "vWSpS8oiu58DQ5q7di1ocZkr9WYZoSsKVCdzu3SccbPgb8Q8rqaCTvkM5LNUj2JpU4RUr9wKugbMiW7JkJsQC28",
  "key4": "3KRf9NUbtQn9WcbVQgKQXxvqBJ9rpPwSqB8fvYYiH94TUeG8TuPedhywzUPmEHvsNHZnrjwp6kpxPJy7ZEVF7vp8",
  "key5": "R8DK1j64GeQi6sGA5he3J6Y8XCY2yiubbNccNxBVnNCqchhwKHCZ2BcthJwB4ujEvf1gQY2SzPAmBD6Gumu3pU1",
  "key6": "2GDwjsSSXuvo13pEE6geJCnQ4LvHWJmbQzXf5boFCjeFMEBYsfKeq77duiUphdaVNmSMrz71hTnqRWVm7keek2jd",
  "key7": "sN1NB3p2fc35NdvXSqE9xEHEYAdYDXb9rYrhdjR7MeNdxvNKVd3rVucvGREzMv9tgGBKsP1Cfp5n8SqUEXpYS8W",
  "key8": "5EmgJTD8eFwqQ8HXK6qUh8Y16nCa69BEEjr7xcewesfKBQcxb7MjQb2BTU7qNVJ8yuuE2A1UWpQjpLXUH3DM8fA5",
  "key9": "35oG5oAQf2nnqxdiiCWJT9eH2QkcfeDeSbiyFG5oEngvjVLu97wpA4F1eXzdRvSndFR2ZLARPYhzKrgdi4Fhk3Dd",
  "key10": "5KYcc3KZzac2t4bwNjeK5eF4xVKTd3WaafUMCAFRNt3C9FfDeFBJ22aAo8yTx69S8HJ3MYGSDqjFs56ApSPR8bvc",
  "key11": "53i2y6hyiMMU1tuvVsJfwWDc2dLMLM8n7WwuvL8GyAYMeP4vgpion3NTfBcS1pJ1neMVcEWdqyHY5UJFuQ7wcF6P",
  "key12": "4moV14rREycwUMauv4vpkb1orfAPtenfCYSzbHcV1uN6d8TTNiEojAjLa4N7HndE7LCMCJHx7VAgT6bFVVVzMcyg",
  "key13": "3XPe6CkuZM3sEFgAcWn2ZHA2Fq8KM9xvEhfyRRqYh8RZuNpEKX9SZHhyF55FH41gvhFm9V3V8wnh7LzZSu8LNV6D",
  "key14": "3jXjVLoYjqgR4MiThp42A2a3huicnyQZGic5s7KNs6ryvMbXYFpQckntV4Wbu1u2eyEgLdRz2K7pRByVsGRaPoKg",
  "key15": "55CMRBLqq6DjohFfpY2F2N18myZsRH5um7ubBdqhu9VirRCKgcbykeXngk6vNQM5t9SVbgKaKd1sAhpmh9qM71gc",
  "key16": "5gWCFxy9h9REgLW2XT6f2HSg9NVHXP8DCAysejkPXhkfirGvaw6251t7gM8ijoRvaB38x2yj555Qd8A3ZfwEpRzZ",
  "key17": "4hwqDFQfkduVk3Cg82tLLPi9W93zUimPSDf6JvMnGrp1PFNQcWyXvAbbUQZP4YMwstbkTnpkBzYyKjfRUbXC6q1s",
  "key18": "4aRLzo9P1qrDCzDmjbuFKLYo85Ygbex8J3NoNKi5BzokspEs5bgM7r3KDapYTRYbqiZ8y8qTVjodAQ6acV5YHvdc",
  "key19": "3Dg4EMjvNfg3yfN4Aoov5PpiFzC76nJtgAsyCFANWEdRSQar3579UhoPmouGrYubx35bfA2Jvqz4isbagKr9Fxsk",
  "key20": "5FYQnSLV71PA6Jhe1ETVShbbKWtyNzuH8T1LwYozzgBXorWkkK1C4kPHXbEr4aWVtr9XMFQRovoNo2xGmsa5tbiJ",
  "key21": "4CUnmTf3UL7KhFZFU1aDDKxgkzeBfu6jN2tyz4kFVJyM3U5aLV2KR5KZZ9Yr2n1xLUzkE1rzpE672DbHwFmaWMSH",
  "key22": "LZjwARoMEgxL4T7CQPkt3AqWB7KEVWzkV37kSV7T1QjVnK3WUjXnx1zLovvB7cYobFozEEv3ZJ3BD88MdXw47ey",
  "key23": "2P5Ltn878ySpFL68ZgJkiMVt881eNepwmtvfLWnizCDe7wew294t3MLv2TJwPHs8CEJveFoms9rhTUQGvR4NSzsM",
  "key24": "3FoL4oyAYV1MEKGUxeLrhZ8k6kq58HsSn5C1vdfCDPC9wC5dBH5ZDPDZvgWtQHz6vYrSX2bGeNeQDfPcZJU69CHm",
  "key25": "4tVEmVXzQqaHUrPU2TGpWd9scx3n9qjL4zB6XW2euhHYEBetXoqUW7udEdALffNDKotozFcGJtnC8ZfASqL8G4cg",
  "key26": "5rRMSHQLCUSMcvJ1Ekh2eEe2maWTBWEZ5ZQSL8gZBpJp2DzN133kCgBCUrU66VArZGyCmBqVKg1KWtpr44etuWP5",
  "key27": "W3eavYQfaaeL7KdrHYCvHYeVPQqWVMwfPUQNqHd4o56yx9LiL1zwxsd28aCZE94s1DpygCZnNPDkiaJdshB2PHz",
  "key28": "KSJQsifFGPNXTXc4Wi92A84xMjF3fkPZWPur3i3HqAqCZL34dr9R95DCfcWeiiVwuK13aGyankjkboUMyvAJaZr",
  "key29": "5iMiiE511R5QB1wveaXqcs7DgZ5UYJ4Xa4gvwJrZ1w9NrsUJ5NT7sggufP1Yiv5bekDqsnJKymFX2e6fsDZh2iz9",
  "key30": "3z69oPyYjtJJtBRkeZqJiFHVUGEiXLmePuwbZaPP6cj2cdSTzQkVwVsxUCxzzEBKRT2BVZqNwxZJkgCsUU39xivV",
  "key31": "5m26DD8MYRFsWxHT6czwHpARwsDJ25D4hDfF3ewDVc9eYhd4JLZhJ6wViKoj8BbWgJ9ehTMwERdt46MxNqmADuMv",
  "key32": "5mhnxTsBa7SwXuRKvbNDqCAPmctaAmUo3GaVTCxfYYVHxKTb7Db9CLHMSxeLu9RUDRuVvcMz2En7n52PmxjD5scn"
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
