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
    "5XLcw4SnTK8up4Cec3Pi1m9d7stonembMyMwsQVVy1drba5HNweUmT9LUJGyAdpFrpVK54DFwSrUffUDu4p9Qzte"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8VQgwFjDokUmWLtmGLX8X6jJu31yoaRdwxy3X1DjmM5AGbhHxCt6kCYzK3G1toDjgGGvSmhU7jSDCSUDNWAbVdH",
  "key1": "5sT1CTdF7GGme26c3iKTUem3KVPreRLqoV3oVSbq2tkKTSKZ8Mnz5d283qkQr16sLNXn89JoLMyB31rMFgskrYRw",
  "key2": "eBgQyYPc3kQybJtAshfFGeSqqgV8jBBQE5LhZ7CB1G6H9TojTq5KTQWjrcW8Kxs1aPhuUXktaaGyYzb2pY9nd8P",
  "key3": "46M2Ne9uDV7AL2cNtBqvoiokJKRuRrsg8RacPLm8en3TFNxyMF8KA73D6BacQEEy6W6YphRyRFXkK9A3rKKSt4z3",
  "key4": "ZTWjyTE5N1oNqSuW8nwh26L5R6MRyeCHEmjJRXhU7CdMgxpsoVUQnrEeMdiPxhbauvmew1Xn64dPfuG3Y9wfXrn",
  "key5": "2g3L12TE7U74zN58bxpXYwQxrUY5Lxr2ucKiU9Jod3qdrZNA2JN1C7nBfD3LgNnMmG7VeJyDtRPNKC2mcM6nWyWj",
  "key6": "3xf6rPpHvVUVsyLvkWLrjg1E6Zn2M5dwnZyyWni7cjYmrCfhPbXHNvGSuCSnuo4eNPZsXs6JQMwD92MQzh1Fbyza",
  "key7": "5wECA2iKoi7LQSjqETVCxD9anE2FnuZihSgCppxpEp3YkkdjtybKMxoYXgKmQ4PYuV84hkxRxSuCX9Lc5g2UfAb5",
  "key8": "4QXZgqVxqspCLKXV33gFD3sJXDnJTTTVxUHHh3n1feDRNkZFGcpapyg5pfLLpJ2QqHRkpoNvkcpSCcUpNjPJih5K",
  "key9": "3fnPrSoTEpMsjEiuuSJ4UzVJFdsS91BEoV6HAbpSmTPhM7KXjgr64fq9LY8bUhaJ8XFaaKWPFT2qaHHDBTgVRC1D",
  "key10": "2BzRLDuhP9J3nCJfe54wBoSaAp6wmMJcVJYeNdBMeg3qdDhj3w5vHJVcnGMuGZRM6wLnpLmVmvJUsAg1Rs2TuUuj",
  "key11": "BbP3nFZa8772xZQkf1iGeukmnf3SwZDAzRyDdsnZpKWsMZGX61QyFAHGacvcS8pzj2RCfTAETs72dLvz8E6WUbk",
  "key12": "Lmqiy9dQ32MicsUnacwE7LTRzxVdLQ4PWywBKUhV3PgqQhc7JZwT8Gf6faxpCQhKcboxzdtiLstgUy8jY5wSSe5",
  "key13": "64EPGaLDw4GzvcQDC7T8wr7UZ8yokUECh2MgfndyndpVv1hjMGbwykMhvncAD1ziaUbaqXttYdxkgQaigBXtHX5x",
  "key14": "5zYeZVGBwP5KUo3Awbp1biBft8NGFUuFsVzBJ2o4PR8BwNXsgowqSrxTqboj3eQxVY5sXBpTutbPH2gb5EJ5ScGd",
  "key15": "eGcNmTswKeR9MP6M8NaSWyw3yJFs693fyrH71VNg3mcjFiJLdE63TZuvZDffnmK2XLCVxkiqSvuNFkg9FhyJBwX",
  "key16": "JjoRgmvKedVsc5hJA9YupNtPU2B26vEe1ShzfiYsXLeoAd9S31tVFbgvGWhxjJMLnn8iBQBhc696WEWTDZhykz8",
  "key17": "4twQ12rxV9rTnZTCiex856kwmknnLFKWduq6yxJxkdHn1nDHCEHF7crEChAJPPFUgjPCY9qTeFSdu2U3ovyZ69NY",
  "key18": "41Gn8Y9A4dpUNEsH88tmm5LzmxnrKSPyjGnJD3LHpwMqLq6d7tCFFePfgG3KaamUQ352WnC8D1NhXzYc22169Wv8",
  "key19": "5S14sLKdb9Tg3GDAfDwXhTj4ct6R2bNCYf1hfjg6RufxysPoZHJsrL8QVpGRgLhobYTen86GYJWLB9WqiyPzMMdm",
  "key20": "2B8m33ib8dYAokL63vF2CDqBwCkx98AVHsixST1MeEr8svKcKc8XhJwCEP5P6ogUYYzqeisRAymsTD971Lo7v9WJ",
  "key21": "4UhmJdZimm365bzq2x78j7K3N4h5ji3rwGAKAuGsXdfXEaKgnNwPRdFMKngHyNWZndQQNdXegTD1WYipbJY8Y8iE",
  "key22": "61w5BX9KmibCt7FBD5bpa3sbbBrwgnhvEquYrwa68qabr4TwxoZxWVteHES5EqsBcfszajWNeUjEt4sy8ULuKLr4",
  "key23": "3tej7otKUQAmLgfFWM2hUVt9rJDdmnDhz3NRvfA1cwaG9bLrR7szQyMt51Cbq1wgxmUKB9PNEjtdAhb5iTKovncE",
  "key24": "2gDyoGD5kSDvbSzW2hdtyrf6CE42jgfzwYZQesDE3MQyQmDVxtzRwNSqANpmcuRmzxCq3Tx7dWySMykKWgGj8ZEU",
  "key25": "2QgeupTf8YYD8oxis6TNNNFP28edhLxuBpWUmGiY9hYM9XvrHDm9fnkXGgWyUbK7oBY5Vsf6uVFAq9pM1Eg1XfVF",
  "key26": "2YaA3KMUJ8tHjJnoHZ3Stb8VW2tqqBXKJYWLEava4nU6phS5GL1xXuVMJXm6oMSJmo7CtGq5oqQm8FjsikhAeF9a",
  "key27": "Qg5mTFVEgThXbYZ3SFxrTU9yzx9AiAuWfaVDuFBfQEst5rn8uznfs3Qsy141Qcs7rjw8ehup82MJiqTnAdWXCNW"
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
