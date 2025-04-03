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
    "38y2DSwSxyAnBBUonsVN9YVGDRoRc4xkWDrv4EQ1gqgHhrJJ2mf3zW2kGAV13FZ8nuYEFc59n3XVAxGVXYuBdoRu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gkQxaST9Kt8s3TDp5YeBDtZKn9TEg5mC7eZW5iGAzF9hW2TVsnEp21TEWEgRiFfboUcfa1huJwRcuVfzuhc4CnT",
  "key1": "3fxW6Pqqi3DcV2guQb3rswR9NXUV9t8RFCbst5tiodYzDhGNCpj1avJTpXnkCwRruLmkt9368ScraqWDZwcZvzCy",
  "key2": "5KHeVkm6RNqRVgrGsHWGwJcPyqtmyKV97cqjBhJhYVVSLpowXwgvHEkFngnDVJySpDqP5VZMSrmZos5YmD5i1EL9",
  "key3": "2VoiUhevx3dfGEJm3s2sn7qF635gsQkmhLAFDASxUi7CsgZ9xfRCB64HnvnXXwcZg9yM85hKASSFJ7H7wUgkCsNv",
  "key4": "4baZXNpcQHJvfJMpxhCLMzb8LVRjAsKzbZmHZN9vJh21QihjaUtYDpt8U8CRCFaRHzmfEw8P9pSfB2rrueXUc1zL",
  "key5": "3zGhY4MebQXbJVvTDMisiFEQKhVseT2fGF7ZVdW6kUJ3MCg2ZEweSDLUhpGrZmriyHPoepEjqmwN52xQ4qS2XRFC",
  "key6": "3nDmkEcGQb3JYhPU58TwWfsBj3F2SnTCKTKnkbeYpBgMsnqFgrwZzexAbMkWquGBJYvFJANWK7r6a9wnRUisSbBC",
  "key7": "2BHo581HP3BDTJw8gpzgpRPnHMQoeUfubMf4AJ8gtn7RVt21vwrtwqHH6uat2xmUfYNRRygubE72A5NCLGywsQqu",
  "key8": "zziB83JWdwJz3siiyond5YcwCSUU1MnuWKNx9jak7zFQG8zGKL46dRPMVFuHkfAZG89TG6VEpWbvB649RQ4AxHx",
  "key9": "5qdaFVvwkdMg2T39UqgpCis5G942JZw28gFY9E1gbsMBPwXAq5eqZmkJ1Tr1CqyRC6dQVL7a7uQzjqVDJpy13Axi",
  "key10": "41qgV9h4nCX34tF1fgk2AjiS9YQDBvxCQXxe1MXVtCWQQVMZyUPHM6LaLTS2F4kF1YRuNss8oBGMnzskfVtpdms",
  "key11": "uPdKrXGfMERZ8WvspZkWVz2orqYt6vv83Jc85YUAAANSYFB7TgPdofgR4wiHALhEQ9vTwiwSu3c7A84pCzpWbXg",
  "key12": "nfzCMcu82yeB4Y5uNw8u6AwJkefgWbWuXwrhAnP6DdKeqejsXNtFAei8zpd8EX4pb7tQDi1yJ5jwhKgTKttDrBD",
  "key13": "T7xMR24XcKJToWVe755Z8w9UxrmvpuvqvXFecxRFyos6bnYUeVwM3pcHLCJ2MG2c5VjNi2cMCd6MPfEBz5xquPF",
  "key14": "2UjzW6RggxZQXoEYgQttj96GBmb2EdTDWJETygtPFj63wmzjrRR2dMaAWREaDKAoFjGMUm6yE61zVgYd1KBQB5e",
  "key15": "3jp49ZkYT6fhkKMY8WaryrdQo4uGM7PR1EyQDAGnwf5kHDv1rZ8pVDsEajraR8zsRDV9cfb5cpTbc25ZmfEtFWnU",
  "key16": "AxqENBahnpWqqBCRyYbLpR9Zzz4X18VE5i3YiQZY24CacXfpyh44EyAKJ9PKh6rVVLEjMiVRFx87uVztMEpDknG",
  "key17": "3pVUWJzRXngrnvU9LENK65777gha3Bbvg7vfr7qxsDDjwvdHaEtxmZFKBBY2jddvxJSUPHU49of2TXcm7FvKbqzt",
  "key18": "4SV46cRPTnCQAvDWXp9NK2P1R8dXM18h2B3HmMhFJGJxvjEur9zpbGv38wTni2cWZDNnksdysamoKrHaWhySM45K",
  "key19": "3wv94EoXJQhZMP1jSBa1eoR8bv5CdYWnjtJBX7AQgaDceCVA5aqehcxDc8rKPKwMoGsN6Nv7XDew1kJQtDR3iBtP",
  "key20": "4zUHKvv3cyuXabLPaKbcYThDXyFjnSBsr5U3fwwV1s4Y8u3KpE4xHFM1XxDWTnMwWzV1XuM9xHgDb4QukhHJk1PA",
  "key21": "63gZrr1mt96myjfVWTWeVH5Av14WfEemSKJ847J2dwh1VxP2NTgXsfVnGWkWuC2KZNTVrWBrC3YtDzDyLZVKn5jd",
  "key22": "E7K3q8unPPzWaXyF4zXUGTVDdXK2TGPtNjAj5mfz8v9qAaeyEJixjCkTXAfidnuaRyAZzMRC5WucaSE3tr2WWNq",
  "key23": "xht3adwKaRPcXyWPLBSfsXdotrSXonDKquodvpNbRt9LojFsCrQhj4R9Jc5kj2pEzpaBor4Pty4LRfpC3szocKt",
  "key24": "4SRdtukp8DRwBDehqbXFJ9gMdaK3FvmzFc1EMTC1odu4mfU7jepBbFYYAcduQTXg7HTEpRjxArWw2HThsCZ79M7A",
  "key25": "2u7J61oN35MV9pEW3YCCDDrkzkwffpUjwqgC3YNdWZBU7cYxp8pKgNqS4SPDehAfoC2eFiErudTgEAJjmMDtZBJj",
  "key26": "4onuc8vBZMokFae8tTdoGnUqPjDAdmoezWB9eY6t8kSSA7okZcFzNuTco5LdzQ6LZJBtjzmJ11UuXDD6qohcqiVj",
  "key27": "5aDF8MkeYAbcMvfGhFgBqxw8hNSagnpz3TCVCnKEzbge9uQidPKMyQqyU5CsXAevom5h9KxQqAYPQ25ax29TWkBV",
  "key28": "3uzh2iP6L5HzTvtWDdp5mCSiFF2tVkf1nkjBtyaEzwPmAijbBYRtjKNWVEPUWQwiSx8T8Br4JnFYsnDmuebB1Lyp",
  "key29": "3gXBQAhwHKidnzKgLiV5FKuQTuKyqFoLXpQdhtpTVsDG321kKhif4V6VSYdrD1v5y1vS6Gi7TczVzT4TEBQdifym",
  "key30": "4LEWu8ocLvtvYuXS39qzHjDeDNvFg7g1DyBKyN7qxXw2fMVwdrTRjNLGorwZhSFwZTxN33ftVJMb7A6U5GqhADZn",
  "key31": "4P411EarFxqVmpmkUD13jZs8X3fhUTm9TKcenotxtxQbzthbheuD3fBLMParLS8LmRkwi9ZcnW88AEP8rf274i29",
  "key32": "2BM5cSu6SVi6DxuqaRDK3KKk9YAtwekBHpw9wP8jHzGhRE6zSbk9QQWWbVrbSV2hEuNNH5VLo3ANfJn8LRv5hqDS",
  "key33": "48at2ACHEyfHgcAg2XjSKjrgL67uikXpYwTPmYqYkpCpLX27P6YcdpKXMbM2K5b4E7b7BuE9BULfDJi2xToEQeYH",
  "key34": "5VLtcA1jCmxLJyAqfG7nMNjuxKR1MLM8FHo2MYLbtq6SsY2t9kreTQWpFakvjJYBopFjt5aL3NC4Gi8sNn4QFh8t",
  "key35": "65LDFi9XEe78WnRBv6SMwTWUSBj2uwxxsYj7uYuajTHTVbSMcH5XjuxixXDyFyjdM3Et9qJ6VUCoaeFr26wSGVSn"
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
