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
    "22ksTXfAkJXsysyGhL8kPFdKUYBxYTspXAyYb5qfeoF9i8mobfxS5S1SvyL1smhfGLWt6p95bQaWh516NLRrD5Sq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Cve2VYZThRZPX6qnepYGyu8B4ZSfDRypiTivMYuLZGGiZ8RJK1KS2W4jDbMiXxvnvaC8ThmRYQyNQiMTfT2U8C3",
  "key1": "3X7q6ePfTrpN2Cwk7pN28qrCfJ6VL1TeM1XJB7iZrH3ejDrtYqtCrdTFW68Lb4BtUsFM6s9tPrhq3vwjAaEQgMhT",
  "key2": "44tLpdwy2jyu3SdeFqT49iCXiofYAKEgfgGvv6Uj1BSU6ZcgiU3prx7qrwNAPeY2jzTEqrzMwEUT54ovE8hJm54H",
  "key3": "5nUY7LxYLt1uUo7US69akEa81BtdwuiuZQqMekQGzqfTaP4ZT5M1G2n3CHemnhiJo9D2g2cro5z1wXtsuf5L4Yxz",
  "key4": "kN6Yzw3nVGfNx7LDLU7Va4RHgRpf5QXvSH2p8JramZzfyMc9hpZREMb8eLnqSYG8mWVcomwdNbFFBXvoYHe11N9",
  "key5": "5g6Hv5mYgYFE1uY3QViJFLtbT2Uv6JafG8zs2Cx9PjDR1LxpJXY8LQMZBvSaSM7YDzv88uvpEdiQX5vowyeFkK8m",
  "key6": "2HqUzN95SdYcHjC7WCW4vajMoVYfX5qAWm7gdiYBuXkUVTZw5eFN3aFY7wvmfGMPGM99AfUkHPEMkg3oSnK2cBng",
  "key7": "2tG4gjPnKXfSBBCcBihSyP8UHa5WEDzSUaUWTsKjWqH2YbWtk4HLJaUd6U3WbWn5YCivKo8srYKuUpoW21iEXs8Z",
  "key8": "5c22VyYiererRyEFeyJu3VHAACpRj5H5zpa14kQx5U8u3VmMcdkU3dE24SucUVomJAnfxfLwzoAnTrvswxWr4Vzs",
  "key9": "5xA2JqxAjrQ9TDavRhSgtsTpubus1eiKpTxxo8ZbnhHGaC53FbQemsJeYdh73t3GczP2FRfDYFNFjw8GzKfQ72xd",
  "key10": "L8P7KCMMtbE6BZe4P7AXW6AeKwQdmgVVRV23Dhvh8sGbVXLnLrXjTZw8aJJRUGB47rwW3LD91DAJ5qwfL56Xp5B",
  "key11": "3xke8J8wZxn2JXkfKX3J17HbcJPRrsf9wWcy7NXctZvZ2M3HyvfmZuHeaV12be6stqb6BSfWndV8P5br4nqQVL2E",
  "key12": "2K4coDhB92UHBMAJUUVwCXhFBGrUBqGgaq1vW1pLssk4SJdRhjckJW7sgk32c4Ag6D8WMW6N9CAKPtN9HNPvwiuG",
  "key13": "9gXuoGCBJBSL3dTtbuRdNPSQU6wy8NGkVczNfrZ5i76pLxScG7qYyscPdZfc49xPffncYKSauYHeo8EjnsKkNc9",
  "key14": "2sLRxcgJT4rZaAUC4CVUifGEuGbLJJFWUqciVVsGVpz3iGQoi9ZFCvKKdY8smVXRF9WG6ptneaMDmW7ZcUtsaYRp",
  "key15": "46qv6H67FFiSomyH4pXqirCpaMAP7YUJAG63d1u2FwXPGZbdPiD8AQZv7Z5YyurYG6pSGg4JLcLDatu8N8JYm68D",
  "key16": "nivQkMVyKdSX3xa4ToC7PFYJNJsXVBsYS4H35z9tdZbYbLQwT4kCh5v5atemJdvtfhBKNkQymAQGRwYfHXyUFVy",
  "key17": "3AM3cDMQyG5iHBbiQ5wbrtr7nKpYSB1f9fecXwtUSErBL75uwbDqZ2sk79DqS45v4NAEqAVDBVAPnEyWUC1xgb2G",
  "key18": "2w139WdXeg5zEK9o3ECvCTRsuFCwNDZtzYVv7EnUbDpegiLJjoaMTQKYRkjqdtiNZzFA64pr5yueq3oXWWM82rVW",
  "key19": "QoWekJz4BRYSFtJDzbJwP6xMdCvM8yTgcxMAVwacL7C2Zsiepo64mq4Gv6GHb7dEU1CjWWGpfZ2krWWpiucAp9s",
  "key20": "cAb3m4BdgFZJDkZFSunDZECfvFRsK8sjytLhCSNFJoFzk2YP218wiW9swUq6NwPwvXQxzndLzHVqjZvoFkbrTYP",
  "key21": "5Uxaj7fQFgfSfQ7wpVdFHPyqr21NUekm1HgWey5yubDWVWCG9eHE5dRBdzhF3dBcxSxdkxRGtcQsZNgjuBrb1tsQ",
  "key22": "sUziAi6Z9sxDgTXXeyN8dAZswAvChHUoMcrAvNHQrzcYRDFAe8WGFkb7rLFQHUX6bFAS1osJmv8NkM1CvbrsgWK",
  "key23": "65wwGvrqj3KXYoS2j1kkKNdAx2W9BhhVpqK7zkx1tLzZbVmSNohNDFUqpybVQ1g9WzsY9t7T2C5M2Puxh545KiXp",
  "key24": "PkW8YLbredUu3mz5h6YGcWPGboSAGKS9dubTPL6Lxd364QpngZeDzHkzyj6g2Zct9d5hGEZ7VxigcGiqyYYA1VH",
  "key25": "2AqcqrxogQDBV9V6tsGznSX7NNEQwrB6gn22nByhyC1hkLeKqNULrnaM8YffnB7KJ7mW7Lq3wR4Hhn4qdu9oE8A5",
  "key26": "3W7Z5bSX1AkyNiaUTVBioqGcyDDpji6wCDx1qdSRvFfDVY44LMWc6mGBX5av7qSyYcpyg6Jk6NjmuBhMnETk9nag",
  "key27": "2wmaZwLRiUbKqj8joCjfLfgxWeoxhQkEP9uhns3Wu4zyJq6xtmK5t4m2qgH8FSyMRQZBsjX8ydPj52vNjaaST4SV",
  "key28": "5Q7s9haJjxjVXp33j97MZD61iV55k77hUK51CGNKmFJVBYR4WK2v42kRZWdRgq8n3cc8P7BdrFt7Sc8fJkhdDMXq",
  "key29": "mmadJQTd9qRnpYLnvWUpuWgHZHtBRn2EHSkocA8oVWZCdtoX9kng4xFSBhEiriCLG67PfpWQELnMVewS8gimAYt",
  "key30": "4ERycJaRiNbEsEBkh8syn9NpRJTPUNFBnxxDNTRvGW8kD6cVsZEMBpEB5sQ3xTnKCgNKFurJGjW3sjyftD9VrQGF",
  "key31": "7NBnHchpk72YUjWEvhg4ud3qo1MzNwNZMd24X3p1ESRJFMFUpfyYQWrYxR6D9A6wQsmzTFV4dqY2eYW6fyYieY6",
  "key32": "4tdVTY9fpksxtQhqiWnG4EkuQby8ZfUZdcssZUdUqtfTEdcurXS1SKsa369CkB86GoF2bPmq5Gy2Y9kZ2upagMk2",
  "key33": "57tupdsyHCzfJuMN7tmC9ABHjRZNSmghkYeiVDpdJkHuJEZjmj7hESwkzb4WWdGQuVknN2ziAVNYoYpBXDK8bWNx",
  "key34": "63a5UZQ1AwUGjkSyu3dZ5AuiVAYLvyyG74dmw13Q5PxBaYvHY8UG5rgcj9tX1N5xZrLu629MAWWfsUBsubHUtYE2",
  "key35": "knsSJP89PfjSCrdviwmtFADPdVxvphH39rs6EeaD7KEHutw7RVt7dV5PGTaCbAFveR1HCDTbWbfkEp6VhUKRkMd"
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
