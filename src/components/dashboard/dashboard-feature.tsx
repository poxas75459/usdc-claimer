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
    "5xpsNvop2P7xDnnbuWSosNipyG33yCLhRU36umpxDpJEn7p1fenyZRbe2ibBZxuCKvB7eTfBrvLDYX7TmeNDStj8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bnxCFra31ZGJsLGvXZnUPAqVDX6XMzUd8MRissoxNLuRGtN2eQZieUDvq6Qyq54MwYLk8hvLFYpJb3FdZ7YKth8",
  "key1": "2fWn9GjJDFi1vDEFX3k9TBpA78v7be1RBq8qozcS8oFy4UmENzGom8EM7JjiWbTLmCMjEH5fDBD24sNZxYHKeJmc",
  "key2": "QSDCYoa7vrsYDZtjMZ9pJDBbF6Bmbw7Q95UpPP8BnySsKAMXBjYHnKSGgYMsVBwKcsnDKjgFAXHXQADQDpuLvSc",
  "key3": "3oVTm67cA5JMPQQ4Qwr8aXu59eACPNq2snfPh9YvbFvAdxLkY9wjWyXj5AAeT6zD5mgvoZqEYfoeviYt1z7enZkb",
  "key4": "2sFySrKK1nTbRMs9G4bhet7Lu5MmT7GSxQBfoTmvPGxqTuCy1foD4V5xciNA3tB7H2bhz5ng2uWe59GnGgFqaPUd",
  "key5": "2fVDZQb2Lj3Ngyc1QAEUawyWzZVDr83dKV7V7zgeVQ6jmuM3FCu6KoGba4QiLjECunxewe1GYUVXUZMtnDxDNRzz",
  "key6": "2YvNYwZmzmyJWfNfkJFGC7kQTreHkzwWWBnBL7Ektz15QuWKy38MHW6M7emazJBDMso6hzyj4GQ7q5hVBeUqqtL2",
  "key7": "2J2USefRz2JM8y8facPCG19zTrTzYSstQEt5MukAKqL11P5BeeLEeHvCkpfYrEn3imNWFrKkEzZbrb3ZVG3yp5vJ",
  "key8": "2pDtYsWJZJEoENJAnzfphdTPzcRbhMimCBbMjtZXu3eRNnDavNzAvd6nKSRsrorvPoxjvrsz9j6K3dZGnMzib2Gw",
  "key9": "52CpP9aBMod7R2XwqszenT4Sr5hoscrnHLVwgjPLQ39p52N1ePLhgbCvdwj6wntNhLK6VeGapzeGYx2mzE4GwYPn",
  "key10": "3vZXtabY8f7aqRCuA1dEAJTWvhNJoXU8F1DgjP2ivg7nAS1XnhzZnRLALyYWLUpN4LgJvbMSmMCXh3z4DQo6jWE9",
  "key11": "4et6DyGah9v6bP47cjzL6BEd23snzRQN9KfasNVAsVub8HBiXyXqJRZDrgwLiGvvBK2DYnPR9c6pJ1ojQsRBFr7V",
  "key12": "3AZqhX4A5WExcF6pUjsXgpffK7q1Zk58wYoixTQ5iwuqLAP2Xh6zHdVaw3LfvQuzP3HKkKoQx82USWxJ443EhGJJ",
  "key13": "4zThoKq2kCCf21tjbn6Dz4nxMMvyKPCbUHfNtGxpj3gnn3hPV8N7UDF94PAdvQohZpZBTqmKK7JdCkccqirrjfut",
  "key14": "mqnnQcp6N8TZbznXV7myEJJ7koUutaH8WUVyo1hEx9wzs66iKh4iJKb1X5CG47abtYyww4iEFkQYQdPtrudiNrp",
  "key15": "DGBJ13uBDnvYfFe1nb5GHvWjvp8rU9SNbRS1hHXESVyaDjg8i2TW86sBxpUSuumKkjFz2b2N8E76xvu4KMUVvN9",
  "key16": "2wzzePGKhzVUd8RrWBf7UJPAEy6TMtiFYQ1xAbvXRby2TVDAs8BrFLVtKXUK2HsAbRjFn24JiZPGhhXLucNpX9Hj",
  "key17": "AgR4HcJXafXwsYvNMbgpvEZL9G33QDdh4CRaAivrSKKnWFQgobb8JLTnwX6zX3aeMh2TE1pGsgUS96JpgMM5jAT",
  "key18": "4bGSniXwsyaART1Z8PZXfm6xmsdmUVEDL5MHK9pz53xvSa3sWQgh4oNLxaHEBi9LRLzdhkZJYM4oXYspoNhzt2ZV",
  "key19": "4E4PXEih8fka5jWo9HPPeCwDTU2JSPQdES6egzT6rU9FjuM1WmULuadD715jJUFh4mHMi6CWzoQdTona6GLyAhvE",
  "key20": "Q6VkCWEYopCvy3PE7hBPM29wQph4YwQEd3Vs1LCQ3yRpdrirJzywfiuFrWV7ytk8Ss344TRsAnmdjZAU21zBCbY",
  "key21": "Qb5Gt547pFsrzjDJ22xLcapiBXEYWuuBzh7adFnqrgiPR5rJvAVcxUuzwkj84DnTRuhSf5ZP9h9FcSgJMGbREXY",
  "key22": "3EgJqoLALLj6NJbAXiQq5SSmGNxA16jLz6dNcNu4PLHkM3bJWz1fyHQQNDwGYWxxwwFiorF4C7ZwM4hHkbbDGd38",
  "key23": "3thHgTgUHPEttLs1qnWEDTVxng59zHF7G8Yo5JCuJJtLyqPgWDkeQCAa4gYde72AYoofzdmFmYkKp6eDtb8ucVkq",
  "key24": "5m18p8gKb7LqakTf8hcsZH6ZTp3yG6dTYdDmQNZKLSkjdDPjQczjWeFW4Em9ewk2ZbAjqtJNdgKf55eBjpVvXFAM",
  "key25": "35pKfRgwYzhbE4STyXPs2E9Mnx76YNtdx8zkGyWMAuvxsqSiqZu15Tfz87pEKFVBQ5m8Ugd6YYoyNnG8rbtKjgXC",
  "key26": "3PJ3JDWyKoqHxwN1nJvr6ftcFiEcuHXP6b48pB4TKm73YShH6CvdfXRSDVgB6fkFz1hcADcuV99NGSN9ktsycC16",
  "key27": "58oBvdeQgPzy7zC1aMmRauzurywz9qXvpteMRac7P51Hx36L75UirDLQvKj68nXfz6kDnXQPCJNLT9e93R3GRNur",
  "key28": "r6G74WfYdeNR7u2BwDT3CW8wz7upn9qCR8KUCrYE59DZHJhLoZbjHyyn3Pn35xKN8EbvKYgyAz4nwwwjwUpQwmn",
  "key29": "347amFNSX7j4fkiP8rYPtmw8oqCevZxKXZfNREW4EdDg6LypqTqRPhFCrkWMTvzwiKwgoRxkajvbzyUuzLax9FHw",
  "key30": "2Z6fPNNZ3f57PxTUbQEo7kfxijT5UgJmuytAjJdXxrGd5uEbGcWssTtujMBQ8xUBFTSGK5EixosxWXzSi2JazuXq",
  "key31": "k6PdLJxVnikFw16tpbHg9zpjfUzif5HZ8JkjV9TVm6zRiZZjnR6rrRmzZXpzNthpLJLctFJvvWcrEcbvKo2pjXs",
  "key32": "4Aydi1jZXjiTrtHpEdZ8fjBBUQxAtU1ZMFd5AF2igC2Yod8KjBEvjqcWpZZH4HAztXajcMLAecK1MryynY2nmqU7",
  "key33": "38NfhUpcoqkCbvvLCVKvsxeLLqDB63RZXC93ZbcSVx67YYjqngeeHPEdxjS7TbPvDBnJkYLoMGPa9KNX4wv3739s",
  "key34": "3BCKwAjyELb5zihjFo2A2dvdyM1iN22V8g1ck4EhPf6M3yDEj82zMDuYqEARBrAvhcTHyD6yCJFJWK823rXHGndg",
  "key35": "3BtZqgJQPyCYTSZuocgXaG6q1wkeHWYJWajefRMnnJAGDMNvevdzQVqh2UkTiA4V1omvgRpZVQCmTRS1fSKokTFi"
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
