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
    "34XbDek8R3UGCReztYnEBJ7EcoUExaZZQuDa5AyXQW8pi8ZoNGYwkNgueKZ49sKbEba5RjszhE7CusypZ7x2Fwgb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QV5rak1Y36kQSbRETSdfhtL2cwjzaJPadCHyueAj2VuncVkFAibcxVxk6GgYa2crWNpWKRHiAiupmoRx9aL7fYJ",
  "key1": "5xC4NepcxqdXnL77WpNTiBvPSf6QYKNHNdQQ9NaTyE8UoE6LLGPZSiAdt3ZeN3UEXZD5PRXS18iDHYXJi1whMUvj",
  "key2": "3qsUTEMrpw8pVPeJsRZVEvgs4py6CiiGguamnfdEit2ps8HjiB8WHNLYKx7rqfjHBHd8C63fSxHeoAxsMBj9q2QH",
  "key3": "3fyLeYJxFDvP2pH8QPNnJYEnc95SRUaoGhbwMb1DCzWeWBuJ8ZskB1fjpvHWwtCyirDUpk9CN4VwRTampTES6f8y",
  "key4": "2B28eiQh1FdDXa9Ssv53rdp5C94JUAtMwV17T9VKfdZsg7YbopTZkxYDJzE5kt97GC1cZu3sM5eEdPFeUXBqEzA5",
  "key5": "4jFcRCScJfzehuP3eh8JjrCJo2rwYH1urkwnMbu7i4bchHB9zD5YSxtMC4mYxZCR6uf4EofKCEkJWaVh99w6Dyza",
  "key6": "3KBDDqBMYrqCMq2cGzpikgq2fYoT8YWvfARwQzJWxMe4gAMvSJtntN5QXR5W5WcmymCNVw5LY2fb7AUQEnqdEap2",
  "key7": "4CNDFEMWwaghFUJXyP5LS4QS2GVoqyV6DgHL1bsJSp8Zef5qxPqvEyayg9pJexh8sEL4CvMJYgtwkSVAXYY1DB9a",
  "key8": "4QTe4esxTmY3EAXLgwicy9LWNjNCRza3WSvA6LXnXqFgAYYWcMS7AmDfYGFZD5RU6gHdnAwGwFamasSdJg9UVuZd",
  "key9": "VxZoej196XFrtDHZVtahq3rZez8Tk9vxdwBn2h42ctsYnqhMmzkA3TLdAyNYEaMUbvTGK3hRMAP5GkfReNvFyd9",
  "key10": "3TzKPEBGL6w16kzk4ugzdqEefVQE6ikZFLFsEKpQLTg23CGkvFeBrM6J7vhPL4roDSwC1TTdNBu324vW4UQCWLXS",
  "key11": "2ByHKNKpo6UezRKGh2uunymPc58DbM1mh1ZKWvSdt2PiYKB8i18TXDdo6Av5FKgKxDotMJrnenJrWAcv7Ri9MAKv",
  "key12": "3oQ2b12h5Ybgh5JopiHLXF7TY7EH9GEsbQyfzvkr2qq4jyhPnmqP5Bt4q7yQobJySZxoEF65zUNo7QfEbVLspL9E",
  "key13": "RuXMsuoZ1zt5GqrPqsqoG7yPVfhHGuy4uKsB7eUz8ZPJqyRfqta6k6fgqjmTu2xYFdMH2ZPgfmz6F54htoyWGMk",
  "key14": "2TKaDYsXEtWewzvUfbCUf9EwSgKsPfbEzSEwbZrbQenjP9kGMyF2aT1ScHbchDhuzwDcH8U1RiRfQ9KNhYLH3kc9",
  "key15": "5LTLoXd4M7vgttPCnBDtU9Qo7mfLsaMCTXDB6AC5tBiATj5pGg7a9zKrxVUoTyxJhWga6BYNppiCmyLuAcazjFce",
  "key16": "2Qognvygtu8Fwwq81ierSrtJWccEFL4JMdjhPrvgvhMr6vtR4by6y37byVd3PQYe51vLEwLyyBt93w8pANXSozsG",
  "key17": "W9HKVKqwH9paXyoiVaA8dJBCzNm85pBjLiN84mQxwqK6Sah25D4K3Nj8P2wr67nyF2DCxxkW7y9Z2V6J3qNN6af",
  "key18": "5HqYkYaHvfkMjgs7vmTSETJymoaP5xfCs799sJkUdAcWdYf9CFurnGk8uVDy2GxMm8dkxGf7qUWVSkCZ9BhyDqyC",
  "key19": "3psFHcTqhkYaNBzRPHmn7Z5C459wDe1ccxVy8rjtd5NyEPwUCzMnk4McRYmyjyUQ92dMVhoEPYzbGZb6Lq7FCZfH",
  "key20": "4NcvyFxoJeQddpn8W2zhXjmFiomMZ5cC7HxvK7KYanrk1Xw4A45dD27T19v5gh9L8mj5wMEN4dCB5Q7vYFnSLAeV",
  "key21": "5PEC5HEQB67EexvR8wb6A1WcCExDnnxCDp5PKmzM2VswAgUWYAdVTncUQiSdjWB6RuJppPoakMd9R9M8suYwUHGH",
  "key22": "34LeegedMLmP5jwvqsovVQU9HnHyYn3uKJADfQXbooUgpyVyTfUjzqkc2FbWZKGufnbpJvbNinMbPYTEuYsj5xab",
  "key23": "2zdK8z53jogkMsaNJdSDqmbRPZNq9xj9J7YYkEmGzCNwR6rGn2q8CEfNMG6YicyaWrg5oBh4rXcKpr5etdFrMJNt",
  "key24": "3ByRbLbt9DNedg4UkRB2C1mJXtUz7YW9rFNBsr8A8kEAX3JvfbquTe5TLsabUc3LaNWvPDYgQK7MpJ895cYuioLh",
  "key25": "2UCGxJDkB8KNZVSe4RcAkExr4DakjNnCXcXAKWxE2c7Xume1Qy2UmDnC1JqNsXi78MEMN7a4j1DVjH82UhuoawSu",
  "key26": "4UDvXTSJaNnKTJzLpnuAHjLGGgdbT8nEdRibwYBbWYxNzLSoQU5BSi8hwBE8VPAGEqN8f5441DLWjoKQW79D7xi6",
  "key27": "3cWipy1QUhVoqNLCEwr2cz1TCY6c3gqbHZ8ZJi6VRTqDJvKcSKTbv8JBYUJuLnj4aUgsHuH3tiU3V4AXRtCFFEDb",
  "key28": "4iTT94CMUtKXq5KrBPjgn2p53QQBmga6JwQ78cZa55ezNKXBLZxcxq752jbAfd7W4dM1zaPV7GifyhhFXhDupwUk",
  "key29": "2syUEezisb6QPRGnYFyc7TGdzcerisvo22YeAm2fGEBFJW6T4on9UmH5GS2wsQSbDqJRGXCcJ7WZ9fpknqgSJumd",
  "key30": "245F7sPkJ1QS1YS7qPCcc4oa9jKVbr5je7t9RH8122gtYU9HhXwHvzcXDj2YVZS7jLiStjihPT9sVHeAtdACWFDa",
  "key31": "4qoJmGHCDFhgugKZ8U6uFqMJovZPE2LuqjNwYaya9GW41nfNu7EoXyDpdaqctRX4yL5Uzd8BxT32Po7tdndVKgzp",
  "key32": "32iR4SZDk28D9yk9cwZKVzKoztcBsvzKY84wyLAkuVrTLyroG45qarDrjvGLK3VCZHWhyTW1HaxZbTdohK6PYcsH",
  "key33": "5nsAcbLxk89L4biHWcEKQteG1mjLQqPzj88S9zYA5pFijDNmx46PAAPiLVSbW2PazURez7Np8sPKQVSQKUKt8Aei",
  "key34": "21qvf48BfRuDaPAugAfbceJjVqRbgo7FekWmmdNNC6JXTRKbtqfTMQoHe4h4RgkVbPYw38BxxUTBmMqd5LiFKSK8",
  "key35": "5gv5HzqdtqgRzVSfxGPdN4rqygGJz2MM42Lx7137dAS1FZu34LSsh49BrcRXQ55WsYC6gqHy3P1MedHhuop57gRD",
  "key36": "4uBg48xo5x7yxvuZorSb95cEw5fKks1pDPKxJwyB5BNiBc1cZ2PBLo9LJ2bDMydQRADo4LZmmWQ6SrdC1cPeQG4t",
  "key37": "4R8JtWb3zBz9XHZGPiUGUdLtyzQisFpq7Hxj1vEa7ore45wY94F3FGHnsRwY8dtD6uZ3Qucjv46FwDSbhXMmfWM",
  "key38": "2W4VtjWy351jDS3dyk24HiGh5qjDPrtPscvfrmG5ckvboGfmDGVYDQb8yVpQk6TxZZGLvmdCkx5HfsFugNRqa5XM",
  "key39": "2fewYftPVmhd18mzyJdDi8JDfEKsexUbu4Rp5frza6G4jfZxejxU64QSGA2z1WKSGcYKoPeEQsYuDUZAhagavibT",
  "key40": "3b5Bi9LMhJVAkK6XKeH8DVBe5oofVz2uJvTnm7dnBj3qsbB8DJQJGn9ZS1TXKx3J1g44c965c2bp1ZbVyf3EZt1N",
  "key41": "TaTwBNqJq9AoHpEifJQXVkLXWw5VQgMai89qNDmdQq59HHrdW7Q28pQzcj3WyQWJnhnQgNQWXg1T3GAGpwvptgQ",
  "key42": "5AF6jyX1pgGjkScPKv5RDhm5L1zyQ5mLw6rA3TF2k1e2GHafXGN7dJHUhPH23VGqko7T7NquCtehB56SEaN4tpS",
  "key43": "5KJtJbTBNNvR1ZVFWhKxDvehtXDCv52tPDrJWh77ELNhZ1rwgNJvutRtGLRjbd1NMEJqgGx9s9Rqob9YxXc35smB",
  "key44": "5MZfARy21rxKtq5tMjXPEQC4sQdHaDRYVgAYbMXZaLUq6VHfQoiKZkY9bWZjCLv5HgXByJbPwzEwgf3GKnazSUa6",
  "key45": "5C8LPk39KuHykBiejHVsRMoVp9fgdLKnJta4ENXcj6Q5bmDgJ3RzmqKhgoKxWj6Hz8CgkDirwBZ2bCA4aVZBSCkF",
  "key46": "5zg7yyrKEi7y9mB58egkhTxQD9cVSnYodiThNnKN6y8MowVaULptoG2dHPoWePiZ7frEvQZmJU8SB48bhsQzqUBW",
  "key47": "2uP6zKoR4s8PqwXqzJr8kAwcipXJoLZ7EyeaXYMftqDXta1kcwVoRZx14KJHCciotmhzJJJ7UdYgSTNJkiBPHe3F"
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
