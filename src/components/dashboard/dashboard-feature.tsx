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
    "4qZgVVCF5JFB3VUaxDpNSa7DcqvQFPY9aeamKNm2dhJYGiiYuTmeJNfVGbWiBg7Yu87VV43DPhJzAewcNLzxHLKU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65o8HiMrLcW53vSSiVoxRt3Et4zfeYZVNfuxXr1G6BSYixw5mvg7Jzf4ttftCDTRFXDPCrJq6HydnNqbkzKfK2Rk",
  "key1": "1hVuX6pkmZ3GBsFVpfSDBgpzQxmAg7zCuwmQ4KSmFN7aPGye2MtR1wCBTRSy8MGzpAZxnNFPYySpTK6ZkpicxMd",
  "key2": "2837YoWiHPJgjYZpVkMb3icoi72F5uneRdG6FhPxDhUjdqwi5fe8n1WsPY4ar89MEkiX3wpuDYogqAQX44U9af5M",
  "key3": "3x89xiwB8ZJtJjn698g5Wkd5Tis9Z444pmEc5YKCZKwGmQAJ4xEQdjHkd6AYzKZzpPfXA93wLqS1DMiJMsDyjwGa",
  "key4": "4wqFjoDWoTFt7GCk4JtqfSY33REfFvbShHt3pJPvmvnkVQtrToUmsXWdWij1runQbRTFpceKEF9MKdzRrvWUiEju",
  "key5": "3T3qEKphZdtjVNBct3NfYfiWcL3Fa1HpYHdDhEpiWx5AkpqXEVF8izVXSqJQR2dkqu2rL5CjrHN55nN8REnCY9FA",
  "key6": "2HGjrJDWCEavz8J6UdJcb7CJMRK9GtSWwfDCY1aSuzR8ND7FgYkBijFDP92RSXVYC6YW9u711h3UDAPyTEK5RRkT",
  "key7": "2kDnv37Eek1P3QpfQsHndLQJKCoU8F9WbHmxmeAtUtDSiYNiVBTGMxmpBBwswhea27iSpUh6RguBZDQWqL4Pz6fj",
  "key8": "2kZQxHjcCiLfC5AV7MfTy8pcSVMENh813L8HTdqmjTYY8q7MSpEpNp7pmJyEyNxAjrZtJBP7QawoDieZdw6KKjAf",
  "key9": "2yHYEHmWNnMepF3fUAG21Xe1t3fLwgTZ5GMsUVLyGnEMgjbD54eAE5a3BeCJ1vtuJfNdARm2HL1gerBZE7oiC1Ca",
  "key10": "4NihLhgJ9QpZtcSGM5NkRcvVRg1gkQcaHeip2p2uNLtKPRtcNLzcRSDSaGm8jsvqx8xt4vGLTvhu5UhDDLQRyX5m",
  "key11": "26nqhcg1pdHXF8HvNWzDXiZAfHd5F95TWgw7tGcyuJSMMCXtbyDwNLx8gvrGnLxwB6a1JperRaTG5SSEJPtEWpro",
  "key12": "5daaGHpAR4gMz8RCN3Ur3X7Rpg5bNDFLaG5unRe5YjpHtKRcyG5Xsz7iCvfM5azTUWV4zZxg26Ec8R8tMQaJa44S",
  "key13": "4APPhG4LLWo1xa7iMuYvsSzej4vi9CmjcFq8XH4SBh6NxZyG9a7mT8dcEBqr5pVvE6X6Li4z1fdKRZUAY3Ga6jLF",
  "key14": "5eErHmZfashGuWtcgH6q6Zo3gzcdshotN66Ywvk82ec1JokwJ8kCVgGmcbYRaFv8jrt89zw26Qkyib1LQe5hiBM4",
  "key15": "3BUXs4JG75jJMR7iYaPinW6cygxMpkUVZyRV2bVDMJn2btG3LSxC3ErjBpaY7fP7xHvFzfTbvoPBSU1dfkr3bzSE",
  "key16": "CsGWkQTyHQFUKp5Y15AGwwvaDTVqU576Q9uhJp8iD8JwGT4yHadcQifrnFAxaHDzXgYUco2jTjUQF2YLnt3n6KZ",
  "key17": "5ScZWPq5qYs7AiyNKzLiSdam33HArjtWoszsFhKif4cJ9KTfg41Rf28bxcksjUAyc8kzj7LDRoEYz4JZVxwUXbHC",
  "key18": "2jRgKbsWHkEPPCM2bHogB8g1Mn3sHT664RfpFQhx9xWKARBqdXaddjcWwq297owzQ7Z2seGUs4nKoBpKFyyYv3zx",
  "key19": "3K8id9HYV5ueDGzU1FhUQQU3SnqsTsVS81DW3nqFixM4wJ9Hbt4fkZsiThVrg47bShB3GhXwKA9Vm4QwbjbvkEKK",
  "key20": "34Q5cmfBDWTUxVgBzPCW8ZpAnET1366V7pq2mVwhDydwPfRapkQX9cr6ZvFbGJDaM7qrxQJiGhCgBFJtpf2ML7AU",
  "key21": "3u5xeXVTsWLWexJPkuNf5FazoVg2BJXTzzwthxQej2Ybzw8nnuJ7epucT5WDuQJYnHWPXd5MTD65xtdG2pXxzqMs",
  "key22": "5HSAUApaXNfw6PhXHpiL2cqznw1V6s3eX5J64voyEtsN6T8uPSK947q4eqZzfcerYiJF4fT542EjoNasuyfeKQL1",
  "key23": "4uW8j7vJXUwwgQR5gXZFoTPsAwomawwxCHVDPXbL2hXrcwejnEioGRGDriNKg2ZSWW6SpGQWdBKpmexHwJhsaoGU",
  "key24": "4rJcQevJnWXAFWnnW7bjx4ACswxJL2stuGuJ7k6KuFKv7M8JKDKeecvYuWhZ5Q14RYGcgZN3TuJNexogUTgH5rvg",
  "key25": "5SFLpt9tzMHZmW1n71z6p3GwHrh9GjtwRqLU1RFR7dYCbryn91gsX85kbKaJbjAwNgsudy3Htg25gyjQ7C3uuwSR",
  "key26": "4NBjewXZhcexgqSrcabxEWPvxpsSP5DiJp7fDzgL8Y37gQL77RqSTxsKBnr4afswB62CURvsY1c4CCbHVDmjdvx9",
  "key27": "4HxEUdohveaVSs13HAocHqY97EC4MQrRGpAxavqJhoo4hcu1uKeqAAAkyYMJHrx1A8Wj8FcUXF7AefsabQyU5M6G",
  "key28": "5YBzmsR2kExf2ZKfws48tLayq3Xx1yqpnz6HC7i5Fmv6JL5xvVFinDboULZ98VCKntwPLEWZJbTtxvSNxcNr1nQN",
  "key29": "2mbnJ9q394493hJWoZpbgzrpGLxWfxfEgCg9MGT2eXV5A4rpsSAV1rBWRBBZTjN9HNbWMGtSVjqfX4om49c6p3rp",
  "key30": "1nWCoccfUq6S2UzenrbKy1vDq3bPbvAEoTZap4FHVaoWKonjvCVhNRpfGSeD7SkBY4Dh2g41iNYwzXC7hUFEXXv",
  "key31": "3xjZ6XWftR9UvvYHh7KhBN8YYKCYqSgFf13h19dVznd9Cn7nsUckRexAqPw5WERRkk3mUVhQqZiVSK2h8kQd4RVw",
  "key32": "5KeASQf4xodrmxBrSk1qQkwni4CszgEhDbhFnekyYvFL3vwSTLZPC7RE7svkF17DqViwVXRrmEVmhUXpfbtPBt85",
  "key33": "3d9BZptwC48XP43yvkv4VocjaCsjEwk77oeTkELo2bRLKgP9em6kG1nCJC4UYXQV14yA1kG52UbBFtS2vDZhsrBY",
  "key34": "5uiGLANkv8DGNBTbFno6WeXsSPuzrVT5Fs7N678S7D9aArTeV7h3uxwLGnF4o2SDLU7hwPPtqHVG4iED95Xtdgjb",
  "key35": "2JCPFB28dFMgCmRy7UoctPWBHxLwKnnpKx4UHJZNbJQkZhs3dnqukTAsuRCuvCB3XWkVj1rM6pP7iq4MB5hCYoq8",
  "key36": "bjKboqqydtSXvxrKF2QzGNbxixFxCpDqr8q8HpP4Zk2JfAHb5y8JZkEwuYvVjpgNAbFXQx8HM7nvQpXRNqocSgC",
  "key37": "49RMvqUMEiaYBqfrcVmG5aVxEq81mSbBSvuxBs7uajeFCGQmKeAJPhfKBUcKJb4Cei5nMxsz2qNgiUpEkMUXQbvf"
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
