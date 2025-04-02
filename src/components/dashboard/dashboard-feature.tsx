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
    "HhTBANK27VUWXxZ5TsrVfKAMA3L9BCnZWqDJ8MmrQDYYkVb2cMuUvVbMoPF4Pw4zg47rw67PmfWPt2YDBpm5zbp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SBEWcECs2K3NAFoioXmzaPUmDrUrMKnveuh6FoyTDhBCRYD9BPHqrhhS5ww3tfDyuZtmJnGSVdp5gY5Uk96owE1",
  "key1": "3HPdupLhEi5oQPRBJQJ2TWrpSNF75vm6eH7xPzw3q3yYJrNJRYmvyiUYAdXDisRvzqrh1bb6n9Zv4MFhkgYQfd6x",
  "key2": "y68ULYP4XMACyXRzN9yNVBxTNKPc2wcdspiLmj2EfeLfMNB2VeWu9vcNMEFan38bSabRCeFGYH4dzsbwgUqEV6m",
  "key3": "2R8WxGHwgVXMpJreDor1aXpEmf8Zrd7E6GzdQkcCfh3cXL6NruAyBrpn8pJs52cLbsoaYDn7aJEHPKCvqmZHj38E",
  "key4": "2Ae5ocFXEEg1rejjRWhftBfJN7nQTpuQLkhWB3SwKy9fceidxFuKohXaEGH3GkaCHLuPHsuJf18b96vroPoucwFP",
  "key5": "4QXmuK32LeNjtb4sKTRrVdFpVgjBvxdTfbD23P9aZLZxqvW4j8EqEtVC934duFMadeMsHH2a1UfyKCxBWFJvRR3v",
  "key6": "4WgKmbi2DCJnei18KMGGrA2KZgYtqY1tKe6GrrmL4LHswYmLfHs2gZNWMYhX3N54RJ6VT5kRKZvf1s92Y5fdW2YY",
  "key7": "XFYEkxvSsMURpP3dAvdqdq4CGvjXu2A4kM8YbC8bHX8nQtkcFoPmTQAdoMAWoeeW6wWa1KPksK7fXPU7btyzHWa",
  "key8": "23AMsbYsGF2ccr5iSNKgngzT71WqX2yU9ovDAR9yJXEjNUS2JypUEhaP6hQGxHhFs4hJ17BhAaYciV5vDV88S63i",
  "key9": "bdfoWUNEE6knyDAQrouzeuB8wusHwboSZAaVwiaHiQ5oCBqwtNmgYT8K6DNDznKgWJWLwccf5nmy9qtEPJxZ9id",
  "key10": "HWLRwWC5BZDF8bubJpa6HPXdvYhYMCiqNaNgjxhqDdc5AHuXBNivxGsXzX8EoQVUNFUhSLmAMmAHZryW11MiTZ8",
  "key11": "4D2fSFwr4skATqYZGggCw3195iZmgQ4S2SxBAr5qikGdsHgDGnZ4PKH6YqjYgW2vfeyDdNSxJQJPxQWd7GbYsj8i",
  "key12": "44FR2sdADx4Scq97r8D6q29kDenABi37v3ik8VMsyMivgsYy2Rgg2ewj6hRQKU2hW3awMvHtxugZGiTbdTkFZ6D9",
  "key13": "2bxZhB7f2HjGkUGmRQCvVmEL9uQfbYBPfjAWdbvhBgFgJ3TsMyCi1VUb42AAw86DmD1DEYmWAj4EyjgXHnmo8T4k",
  "key14": "4frEw9EgKKEk6tgvsLxX4uJcpkZZRvHDMcCYGsaPMf2tEAuZwbiRdTDYNrtFueeD5Fgca9Em7Ydamns6uBgy23pn",
  "key15": "DCYMGzDzwSAG84vLs9BQyhLJRXCsmHW4qNuErHZPeeVLoY3j3ihcrCKoRwfJq7XniL4BTR45udcDFwJuWEBD4SY",
  "key16": "4KSpVyY5j6DoymrEzrs8rjiEcoVA57QYkYxMFSiMtSbRTFNievF3hb831DZ5JQBeYWjfrHNLABK8zuZNJRUWx3ya",
  "key17": "4DVDyM7cbEpPnfNnnZwjhFzR9cBefCgPM7iaHhPY68Bz3YhgfUyc8mbUkHXws9WK4JARuCEgyZ2Vi1G2AeEqDQTK",
  "key18": "DofDikz3YyvPMhoiXZWhR8ZR3ME1v1pXcqAB2ELjRFrU76SuWQ3RCQxFREgEfaYwTM3BXA5AkjidpaCn2GXzEMB",
  "key19": "3NoWz2KBRmzpXBV77LqYo37T68BufyfGUBc82wpdgcUr8GSjg6HutVwYUGNvCE5w36FP54fFGbSSpyzdt6jcMVWY",
  "key20": "22SheM94MVgKDRyhT4Jqq742wP7HKvkJP2ec5Y8SK6AptnwPpyJa7JoLLxEXR14rykgkVQQvtzLyeUAXpMc4gfCd",
  "key21": "4HiTEWy6TvzybbGvcCAb9MBsQ8zhCJnkyAKFNj7QL6jaMvfeHYVhpJYcDKbdFYmutV6vxugxGPStWfYVqfLt7fcY",
  "key22": "4iDCGzDTy9WjsAkUoRuKCzXQXAtwWh2HPdjZq8NPVuSmJpN3X95pBUN5cGYpW3mGvcGpBGffhiqd6NS26M1VPXJg",
  "key23": "5XRCPsxTNX2FfmKk3zhHywnoC5x96fqgC4yYPdAE7YcB4mYWmTHwG7EwsnAqRYxAHLREDpL2eFyuV3MRq1sTbsj1",
  "key24": "3dTG75aqf4DUq8mpitkWLKQY2BfoiohPuT2xg5QAewQLkt4FkBDNUAP3JBCVo1pAQkSLaRytEJGQA3nE5fzSBb34",
  "key25": "2bTA3zArR6C83eoqKe7Yd65MCqpJ5x1PJi7iZER2szaJQaNnDwFL48N1erf6kMaWg3ZAPQabygx962RXESbyp7Ns",
  "key26": "eFsvtorYvKLuhnXKH5SaGLzEXwgFngbverzxFtqbCnmNzbQ2mb5eSycEz5tf2dADj3EDobCV1Zjm2gB3TsQFPRL",
  "key27": "5wfXnDPBMGxh7pRTapVjFoyXmQnKYLqRuee78ggRjcshFYbnafqwjx9XGFhgPXWcE84z7BLuxwFyzkJpYpWaqinJ",
  "key28": "4V7rxPM57q1xrVH6eL4F5kyPxSkKj5NEqBZWdg8oowaEi89tYEGzpunnL3qQX51Ut8sqVqtZUXmHkpPQtTLUZ6ME",
  "key29": "3EkoBpinHKy1pGJtdEWcZ8Zsb1Cddj2tPT2tJdqEd2maRf8QcHfEwUBVE4XB2WokT5fxVuc63bGfXPfeL3uwBYqr"
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
