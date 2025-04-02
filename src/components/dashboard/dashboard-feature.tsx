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
    "5q8fgjfduRqtttzBSBk9wttWdFxRmHtt4bUbVESX7L7h8Nh4nSz8vZEQSofRW4AfzFP3JJWjTsVztbhwCAEFBF2U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sGMF8Sk776cgAvmK1wMpKtKmkD5ws7Z5KJb8U1LpkP3bMBaDgswtkF7vvsSgqMYR84eADTkuqaMCxq45Cpi1p2f",
  "key1": "4GXvwnAAgvNxrSkbHbWyW8D6mRKV4KxJsdeqmUG5qC6E5K4nzpxEX5HSMa9FPWi3y13WZMBQHBe6PTE9iEjambBS",
  "key2": "25mNQcPJyaeKVeiReStrD4xyhPf47QR1BALzXnYazDYhLrqQBG4cJ2itfo1FAw89YeknGRcjQbofC3k6cWB53Qfk",
  "key3": "2XxTD8dk9CoT1J2K1mCt4pjEAE8p7fmGii8USZJebkqLksivLgvKvvSFoF2vJ2fANPWohzYC8TYMKhwzNGovLXK4",
  "key4": "2BwFb6no1aaUTTyvPmsA7PNEYX9HCDTpVn5Egud6j6vtzGLv8gAskYzZ1abnTyo7JApXvemYRkQyXCsY57dQ7QUh",
  "key5": "CKmApBzD72rNZG6Q9KEa3DCubDZbWCWWqw4Khnoux1JuskqfJrW8vyqgFes9F3ZSptBcyMJDMRbyicowUcqFfhs",
  "key6": "5iH7quECJevYnEwxGG6bysL1SgXTDLWx144w4jBiWhSRMtM6MyMyhH4aB2Fsvqgqjtg83jR3oJab3RqzjzuhwhxV",
  "key7": "2PiUF4G3ffKgvJGg6Qbj6Fqh9Yrz96jAXzinvMYNEEwFapCbqphAv1P3vdSWz12pyefxvCpxqTshUPJCrFK2KDGw",
  "key8": "2WL3uRvCmZs68ZfwpSh43tALKQ3VNZtUizFAAexNRSBduP8nSX9WfjHhiTkzTvAYpe5C6NDqNzxsUPwvr5gvXdP2",
  "key9": "xkvtPzP7HkEifph6mJAjNiypusy9zT59bUbP9XujewVxyjLMVq2MjDfCSCV5uB31Uo4Senq4JS29ZFixw1c7pGp",
  "key10": "q6b8fxz8aWdKCK1bRqeVD6VenQqGQei5kTbwZNxzyaZq1hAwqFKgCVmv9oihMxGs9UcwAMYR72uX5u2MKy5gJNm",
  "key11": "GvgHbZBA8NS2P3uvkRjLacXAcAq8hcdNumbi4r86WyyQQ8TBYjTbq6LCoGmVEhjHhCWWxWVW5Hd7byWHrymsaWW",
  "key12": "5EZGDNRii92rTGbJ4xr7ehz2cuhXj3LDYRqbZ8V3EhNwwry3ue51GDq1AjUnN9abwrnLxGVEeB2WWzcqm8fwBL8p",
  "key13": "39V8abScZcgxwCCB3w6L7fQaq6dkCe98HWV6mnjQJgHz8bNgSa5W11P2NqaKJDKDY8Mshvd1FLx5LLSuzFnmv4kn",
  "key14": "2F8AZymk2vxVtN48WtRHuUHajf9MHoL26xWXNeutoBdg5foVJtbGoZEpfhKGgj7Edu3GtobHV4d5a1QG1gEkpa6o",
  "key15": "5CC7yE3aBMjDCEDwYRfiyFAt7H3SUDuDnuVkQhvshrViDqEpS14mosmhkXED2cVtHwDgQJveGnRMZNignXrbdJuM",
  "key16": "3Ek6iGrXNiui2hApgVYNSq5DgyLmpDAmNB33cmEqmDQN9JyjUcYw8TAF3Z3oXzxLukPb3AcyguaTVEumD8feFySz",
  "key17": "5auRz9kx14CK1WeyUcKXHchkfujywAG9qv1F7d4Rgge4zzjYH8iPFMS7chxEKRXcsoRvnaJQDbdSZhQyiBCqrBAM",
  "key18": "2fpa9DuPLdYR66eaJqaWgPCG1sUSu1FQdoS53bcLA6EWk9R3NsZkdtB7d1PKC6tWTZ84GdhxiSHVRLsi7a3SuDyD",
  "key19": "3mi6UbSJfPRg22b5SxL5tnQHMxhpDw9RJLPzmAjoejUNAgzxGPts8d6hzuv7ZMktSUMZghsg42W5pdRBhq7ENyTu",
  "key20": "62oir51gZu7vqcCBeB3u5HkpQLk5vNCEiKK5MWNDtTzYM36Ki9jWko27U7m9vC9yzdgPBCjan5bTQmKDKpi5rMzv",
  "key21": "5xNobk4Hsh7kVzkjhitVUqSUQgdryGYNTonmWfg976jCQTVYHrNrFdzDyBQX9ETqVR8MW5Sf33RSJ8meWNVZyJ52",
  "key22": "oaio5tM2utm9KLXchmhKZ94gKaPWpqeGAwNmXtRssCzP1e4PC35RbpptE6942RcSkARBdKhq7bvw3XsQAnq2Siv",
  "key23": "5hsCv7pge6mcTUtmpLsaVLCAC4CQpQSg8aSt3Qm4xZfyQzvyXiYxpsmePxaLpWf5BhRG7UHv6tJU5qH4EtyPKiGY",
  "key24": "2biaB576j6QjD1nXLDDsji3PF86ZogTfQS4qJhPrGrSwQXzZ6dQyS4qvsPLZp13xYW8butuHMyGEVe1WhJLEvA5g",
  "key25": "655e7LHv56NXUJ2WtGHiTBncVbDrNbiDE9njLeUV4tN1DDCZ1jdRQdRv4MURgzP9TC4xtCyuEExAGUitX7JqDxvz",
  "key26": "4q18zAZ3CnoLetc6edfkF8f1KJRse1p6csFFk2AZzTyGFAPEhMuxpXoqYRajsPBkTiTTYpe7uToymurbnR32vkD",
  "key27": "3n3Ess5P62GM9RWQk8EaQHd2YQ5VYBkwwuch5G1EY77TEHsLw899HV9RYygrwjatz7HyBU1kzuZBPE5CCNnPW7er",
  "key28": "bcg2qVFzDwq5v9G7eBmcL5qVZmnEQDpPJ7Y65NfKsUGutx8CoCeEK3M3qugh6U2kMUnxSeeXmcBrBEzh5PUbyNw",
  "key29": "g7Rn2X2YqmmeTt39g9fPLKF8SG3CM7FqzPvC92JEPAQpEjWcA5hqfyeDcVG1nWmuUszdNLSGjvHFdECJ7yBgE1a",
  "key30": "2BoGb2mXNEq46q4LXqradBXYjegaFwLMVBgvK2dm5fL8JDDXkiq9Sie8qUWfAATW5Cw5YCj63FQkZxxMnyJGXA3x",
  "key31": "65R4foBTwfzekr7taxUWFSPt7Mhinnnhgavuib1Xzn3VowF9S89bWFHLtmTiv8r3JEc9KpTyraJoDtkgyeHKPn7d",
  "key32": "4sAE5tPujLeQpjdZbgyCsCLAtF8YKS8Nkc57DKV9igThuheWt3j6po74Xc45DT4ubdemZZeFiX886xCEjTjN1sCL",
  "key33": "37gGwJYooHEd6jDVFsUZsgraMivDoZpc5MfqgHrCq9bCwU8rsnq5oVebEbLdkmXD3zHgQY1v1RqpqdyFr4js8wmJ",
  "key34": "36bG8A5yoR4UBjbAErEHNpJxU2wfEYaR1rBH6ybceSxq8D46s4axA7XGwViNR9CjK3Z54Ga4a8BQiBwssRxbW6bP",
  "key35": "3edJMFoWgVhRgHamTGv3UoZV9LMTzy9BvX3yLExYBeWKXQkPW2ra9mE2aQ5T9y41dbLrviNvbwd5aA2DoaN3dakd",
  "key36": "4z28UDUJwHaLako8Cd5N8CqKG4thf2CDtYpvfy1Zr6UAxNEuqoVNYqk9aZgrYtXZ575HyH5WxqsXeLXsaTWNYWqk",
  "key37": "3DAw2RaSMHH6MkHAPUV589mn5HDgDFdUxS2HB6mrPBE7t57dQKWYn2qmEhc62Gg4g884v7GJANTvU92xNDGaqSjY"
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
