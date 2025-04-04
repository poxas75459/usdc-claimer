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
    "3srZ9cQrpjMtDFpXSzbi4L8s6DKX9LpbSiRW9c2zHU3ZECLENmUaYrzpBBzEFnu9FPCvrJdyNPBU2yWjrqj59YB9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ANnLSZLWk6Nip89z3LjUG7B3XmbhoBLLLFktooqZFhmG4XangJu5D5NsKAeSt8Gzdp1eF8VHagTFVhyHQhpNix2",
  "key1": "4K3AheuHgvU8pNU814ibjMJWmRhhdnZQX3T2VH3XQjC2j9DVu9ru7rdZqAYveHA2UhSuaAZ19AimrMxD7HEY4TAJ",
  "key2": "4fBG5z9NoHsb1K5bQQoDw7G8ryZR44sV5gfV4Hy5hrsxWuRx3sHriDtRsPMhbZvSjdTef5zfMV9jtppiT3nKjyyJ",
  "key3": "5Fszpb1MLcDB9gEiaoTmzWW5t9TksSxq8QmL6YZgQpbyXjd7ovTojwk1qGS5SmyuuBqUJys4GenD9sM5ewTxezfr",
  "key4": "2tegp7Wpq5MJUkWRjaK9bShN7XPrTM8KFbTrPgpxbjGkVKWG7t8yXLtfSEBrV79tiVMeoVZrfVCiCydA3C9F7pag",
  "key5": "5pXiCyddcSNdfRXZNLrqyaTqfC4nr3ThgeUr9eMaGNPBSUCErgCrp8AntpRu7W1XNRtFEVd4TFfoWiDs6i4Ard2E",
  "key6": "4FfwrAGbVaoTHFx1RmqcSRt8phWTJwzrc9JwuD8zBeuwvvhB5qHbGT1onkJ5KH9Gbcsx7eFY9ryCMVTzr5umGyfP",
  "key7": "3nMZejCc1NocHbAaipC5fYMeVQi9F1BXHpzNWZwnwaudjrhLTeqqwecvH4eaCFJkA51buFPxw1z2FDyj58ru9dC6",
  "key8": "4HHVQQPLDXFNrGjYh6SjPdifbt3hpwMKuBQtfuw71iHEKr92fQeNFkVJEMQoQr5amwtG7Ta9X8D9Xys9CoR4XGqP",
  "key9": "3fs7THH2ZPh7M6N3R2LGj6Fe4TGtRAr58gr3kz7k2XBvu94MMnM5RnZBsRxmtG7QvGdpBZPjAqEMcPdxNcWxRQT9",
  "key10": "3MTYx37H7t2mRBaEZtiRU56fDAxMfn1twFq5uFqsJZ6zB7StqyB8sT1YjGZTvts6vK49pzK1JXy3pfPjWtHBobXc",
  "key11": "3yyWeXCYCJ5qJNhDJRnsVwekQqAK9epreWQ3aUiawSeogdPuZYXYVm11XGLk3CCsDdFJMbhiDZGfcFmemKjttbd8",
  "key12": "shJBEJGTiVL5WB4dWv5J3edwdAjNfGUh1TDVexvowdTJ6C5DfLFNZjj9YJqdZ7Z8K8iY8FJ28eXMFxaz76255qM",
  "key13": "42pxSJtkVKuoGrPe7GhzTybfpif6ppuNYNUuAHi3ENajXsMu8zPZRDv3ZWW3dhrHaMmyDteEsCPSjpQYf69PUHz2",
  "key14": "36iGetJJANRGzsLXjQoseJ5zC6TNToJi2Xq54s6nnwqWcgp27Ddk5FVzD5YCxrtDyaCrMQVvVna7xArb5zbm6c39",
  "key15": "5MYkbjbbRLePb4jUXoRq1TYmyucUW1rrmjKjiv3NYXwJdgYtuNYXoxbR9UjABGGjihqCea6Qpc5vNWcuC17hWD6",
  "key16": "5BVek1jAU5mVHcX3sPG4u5JA48WB3PMaXXCRecuDU2K9HnS1dhXfeyfdVhbnaffYF167AP1GBckogjCX7AXWemVE",
  "key17": "2KqF6NFZBrrfKqkEEHxfjpwUDe8SQ1CaDwCPrL9wPKGkdMVLf93grCZmkoV7FHp2pGETbN8Q6UTwtLHWRBHX1HQ7",
  "key18": "55YReoiHC7ud16BGUFmRRC1GBEFU1UBKJsbg5W6iBnEzwFVdkuo7kmhCyTSVuWeYyFr8L1iRruagB97A3cGHa8LK",
  "key19": "56YbuGSSfeUiHjGZ3tWej1gayDdptueHtcZ3LvybSS5fNQXe3PCuSuZYNwztAaA3GPUn86J6nMZeA4G92jvf4LQP",
  "key20": "2vV2dYNSBrjcfxEhxUPi1qp25fkqCTr9DCZnxnN2jUxt3sZYr3eQX18qJurVDn2QDARpYx9pH97xw1KBWTnFcYRG",
  "key21": "2g5uZN8NEeFLrstPeKVrtDbw2zLwFS5bNTVZX6shW2iGGPY3efGJ5NZMQYWLt6FwXXTWGh4rBqTmZhLEefBDcDzi",
  "key22": "5BxP2zJhGzFRVH5jN1PEagBYnQnQnFa4Qq8YcTXgPafwGkK39iZ6XrAk6sjKkJqDKDYXzc6WEURqGGcGXivtdWxh",
  "key23": "4EUwr1PMekCwTSbNSwAmB2xcifCk8HS4ecL7vaDQJvXaMDebWp36bkJZZT4AoiKUwLmtvsvF7mi5U7TRWDpXvLaW",
  "key24": "38LCnw5mXRwKV5yanbdUQx78HmbcL4bWMiAfXcCF6A1gprzuzvheW8ECwTCbWhC2W1KwzA2628k5M9QhUHZZg25w"
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
