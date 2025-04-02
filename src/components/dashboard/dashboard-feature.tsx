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
    "2u71ihrhzDBMuHgY41QubtnxvLHB1BDSkpcbFDrCQEnJgxvfUQe8izrgEmwgXYDQLQwUn1a88ooa2LzpBgcrJVAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pYb6AqrniEdXtcskiwCU3bhnWVeKWt5dKpdArCosjuM3YoJuH8MLe6ExHG3BHnfS4ergf523rep6yGpBum3gDBn",
  "key1": "5h3QqqgsZhu9fj5ANkFgK7vmJQy92sJyyReBP9U1iEGG5x435WZDNkPJb66NaCMSc5rNjBSioSJgkvpGQ6MdxtrZ",
  "key2": "5a7fhjjPWjM6rC5gCCiNYrutEfQgTmeCpxWUHPudQbfskymGhmKi86xDZCLfVFZK2WGNf32GYVHDTPofW8QbXM9C",
  "key3": "4LNLU1skzCY2eVGAD9sRM6WrDca5Mo8W8ghq2YHMbyABGvXJrLkinNHqr1tspM9zSbyoSqMsnMgsWdEGdUJV3Lb2",
  "key4": "3CJbZHmx8gUeUiCuzFfTN6rctAhbFhKJP7K6wBJh8NhwKrKbouexp4q4VsxLmG12XuhbCCXgNY5jqf7G5iLkjuKz",
  "key5": "CWb1huWkqzqffHM5EA7g4xmmoFm4jypTTYASq9BFwH3priWLvubdzPcGmthPP4YFcXJD27Rrp5NTZkVALxS3SCu",
  "key6": "3mhjezirwRBgyekqAXk1eei4SfbvJXjE7Yf885JpQwzQWcaQwrRWyTknyn7a24e2XisQiXGXTsJpxacuBRnVSCh1",
  "key7": "3KjV9kSJBA2BSfvqRSH25CtZte9sRdiq1ndGZkm6mgzTqS4FdMiDBMj3VJv8mKtAF54c2Hfe1zrVEfc7AencH8dq",
  "key8": "3Hu9eprSi4R6TFWUGLTb4UTBL8W53MqLtccBaN8q1CEe29Xs5cTDEkAZ2LfXh7mY8K3582ZVF1RriiRmUQqC8g4N",
  "key9": "5WjSSA4zf8oVVTPczfPyLRzMVSnC6k8QgxqLf4qcbysoZH5jD1jWaU4k4L7Y7tAo3wkSL77QDg7FbV9aMJoyCoQN",
  "key10": "RftiGaAH3FbMG2zBY4J5j82GDfehjGKTN4jRgoWUiZFdHRzszW11YR11CWNAtq2SeiqK9pQqyHSy7Lvn4qYoiVS",
  "key11": "3cgydkF6DukJW32tX3B4UKoMEvheCzW9UXJrh3JABN2ETVbGRhX38ChnjDhHanYMMb5dn5LWpMK2JZfMGoycknYM",
  "key12": "3RKsTkbjSqafhAeR8AJg3AvWSv2noiXheJUFqwCz9riUYRdXqvSK9W3gSkUwLp9nuaEGeHfr3oLrqYVQdHv2h8dY",
  "key13": "4WWWwzG8CBmijsZAxrDQFxH1stbfsFizzazMSo8RvP6ky4Gk4RdFAmyBmFrZKvtu7TbugSj7qca5gcxwP1fBTJcU",
  "key14": "2P7AYyhcYRW76RW2ZCFeEZs11kPA19Co7XiWUUDQVyZcz6feZLBNYAUkBzZyhzcB4P7fKz6Umb8xj2VdfWFepwFX",
  "key15": "5xfUB2jnDrL21BhKyJKXQx9edeKPJ9wftLzBLjgSGBZBQ7FUpprcdYEMVk4LQZeQot1iJfdcxEs9MJxa3N3GgtWT",
  "key16": "4qUP3z9u4o1tiozAuCZ3MNE5g3WkB6ZQmEZu2uosuFymKjau48rPxwn9KGKTWRGCS2NANu79tNASYz1s4j7o2Kg",
  "key17": "LVsN1nzUj8UBWgfx2uk2u2MXwzSYtom6AoQas5AeonCeRzhsdS6a3CTxan9CQi5yynM2qxU3hfhhyNCBpNL1rFG",
  "key18": "go4pFHb7qbt7vVvNp5zFbvbXHM2XibMZvCAdXBhECShDjPSCk6K91t3LW6o8WoUTCsWCAaE1quLvHv8qvtsmDEW",
  "key19": "5DSgNUkYd1nEYR5Conqx1aWZopEEGBCsA6qs9zc83nbKQvWbm9v762izRpGchw9CrZ4PrFGBDSswH2kqSrSQqNci",
  "key20": "4T63BT5qTQQgARAYsMFYQ6moHv7bW8bAenAJJ9pvD4TaJ7R2pkM3ZpbeR9JMGJMPAjEuSgrQcaq43n2zqiQ4XFsE",
  "key21": "2Gj53aMS4ATkS4Qd4NLqN7U8tihKVoNSNBrxmcJAWM7V9bbKcRL6YSqJPtzTPg8D3Um7rQ2iKmTX6imDRt7ETAx3",
  "key22": "r9b6HrYhVipc9pDxqccrW9c5AmX3B5623RbNi8qajSouzZNM2eMerWcfSuSiwNpruqjmUwNPEto8yxXMcHk8LMX",
  "key23": "5UgTniE9yH9MBDWK1QDXeD4k87wXdcpAd2hu1zmpGffnYmV8QmUUiJmtqWCU7WggNubK5Mw5xxp8eSF6njXd4tt8",
  "key24": "FhfvoEmTYD1anjDg3UrZ7KfgEEedUnqjchw5NJizhNws2GJwR42riHs4Z6bU9dW66TZZBS8p2tR3GdYgiWMHiFy",
  "key25": "571s36vVA4o3z8xKYRgVdRQYWzAyWfeqVW2aC7ys4zdxhQbZJmE7vqpp8LXjbzZUop5RYbfLHKhVDM23vbNVuyMZ",
  "key26": "5kSVFyTsswiQnuAfifVuNunsvcAUKZVM3MCPX8aq4He8ay245x4K29Spy16H1VCKHN3iQHneHMP9djfvQB7NKDGw",
  "key27": "3hjmAJi6c8gRdvgRVbsZU9h9pQohAKYs4xTZaeWN98r41ZyCN8CXucpXR5Qh7MJRBK2Uzw5qVyPGURsM5c3iCyUY",
  "key28": "3fuoPdjEBthdASvnKJGcqfAMw4gdRt5binAEsyLBKZd4DrQKPR5yoXPHKbjF5U6FxFUUKkYGoHgxRcNrmkwvwpvE",
  "key29": "4pSnTHtR62hx4GvjsSwciybQxk739bYxzzUVJ4Ztn8qtwFZUjySz5KpEw1TyjRPD4gZDj4BAi6CgrDsc7iQ9LZpV",
  "key30": "faMTWFypTHiZRqCki5mY1kfuxqfX2eEp6uMaGekNSBrHKUQJAsQpdTTpyyeys7EJ8Vj1PuhCaBo1dtJZtNVyc1M",
  "key31": "5BnajXQLTFwkGHgwqqdYaWH89RbyTZzDfGdWvWQwNntVHFEodTRuhc712TGdf7JZj58bv7agw5MDMkX8Y5jZCBmt",
  "key32": "2PpzpRzC5swHvs2bqimPxG36kUPoMUnaqsdodJgWCNrr85HJz7HDGJYbszo8sgXxj3H7sdxZKdzJG6WfjTraUchp",
  "key33": "34vqGKGnRatmJJi1xeSb4EbGdrJZcNywYPPENvRPudBUjmvEKwbuZHubkN22iHhd6zy2vEW43Lc6i7y9h9sdWmh3",
  "key34": "4SVaMwofMYuFFD3c5eqWwfjeioji5vFUL5RM47B4fvCYMTYzJJEiUq4srLKUxVqBLA1ighPaSDnspq9V89jyHw88",
  "key35": "3GYqN7SZtwSGfCMSJafWvpzge6r8zJzKmmEVA3HDU8uw3wemPmxKNzSJ2tZsbXFfKLCBCdY7LJ9b2S1J9jh7KFpr",
  "key36": "2cvKCycignbyGrd2pm1dw6dH5MRpU3zuaVsapxqNPgoTLCKT4yGwwenZqLyQ2iA3Wnso5wK2m31exgS6E4K8GApk",
  "key37": "3skG6xeU3snEFWM8aomEu8RwXaBMkHAVxzBjvnzQyUDpuBwvQrH1LFVdw4gZWBrwWrQbPmHmE54A27fuoJFU3Yp8",
  "key38": "33oEUVyu1Vph5bF944v3w6SXTMTPA1sR9XpFu1QzrGGTq17nH71V1KCokv5H9wCADsDigHL2vd16ApaUt5Lr4Ay2",
  "key39": "2J6aYiKpHqNWkZNSAa3xKaSL2PAxs5WGm8E2brRUcabMREaKqk5xeBcspnCNsT94dgZBnaz2itouj8QW1Jbu7rrU",
  "key40": "2bmCpH1kmtnU8PMKRgCG5oxBxxTyi7YQaEzzquszedUH5zyuWGANBj3JJ4AsDF5fPTYnmLUnnN54eWQWLCUjoiJ6",
  "key41": "KX52cggGfj782HMPTuNv2upm7WR8wDxbZEEWFHAYMP4g52FVD5Lj6W97vH9T624MeVUQcHwy6723sP4wwyKokR6",
  "key42": "vCB5Q1M3vwNxehehcoPpEEGzwciMayTStvdbhJqQVqb75bd8Wpf2uioVAmZ2DGWvCVGRh2gV2D4iDQUTYcMSSZq",
  "key43": "3KMQBrMm3wtjmw6KEfcV7HDfSfZz1Qi86jLHogbfpHYW7QQYDD5dKaNnn3h8JGoLWjQ4YDTGVg1p7UsPd8aKYGGB",
  "key44": "2GT5FAs9p7e8LTsnmj3H9WH9JAa7tsQqKjruQmgGm7MC7NViheZKigicv8aH7PPt3Q3tPAXDSwxEiZY5UKtQM8qB",
  "key45": "5efvdgXpCQzZKBtTDoRPmZ9THgsCJLTgEC5ybNTBcAF9NexUy3UpSmAeRT6UufBqC1ziQLxFTweRFZE1kN7PTUBs",
  "key46": "5NtCK2EwZWwMSRu5V1u9QjEEguRQsyiH5QH9yeaf4e2ye1eNEcBav4Gd7jjsskph1aXELqACtbXcHR6hR7sRD5sg",
  "key47": "3F42ZyjNf4C6mBZAByarHqd3fv5EWVgtFHSP8n1d2HVG4NtSCd4AUhqbx2sNcgSk4ALKa7yGQ4W9g94bedsGcJJx",
  "key48": "4dhLhwv1xNofF1YbSfLyvzZyYestzFjwfdvqag2BKwNdtxXnusygwKkgbExYJ4QUXvNnnQHPddMGrsVLVdHSXmgU"
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
