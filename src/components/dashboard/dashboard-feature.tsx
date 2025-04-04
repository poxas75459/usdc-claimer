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
    "sdkA3Cs3o1C4QJYPA9bevYzhsA6FmgNp5pWJQHVcafF3QykgxRmBivq4kMybdwWUgjV9DFaLRekf1x6oVx1CcWA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kHZQuvaFLPHwYS39z3gz65abhPb6555cyLNtrYLpbmpriq1J4iTUo6zTskYCwz9zxA6LUzNfH4N2tttqs9BAM8K",
  "key1": "4seHYbeRYoyR9xVhCsxf3wKHmorSZBRk3SAW12ncVJVoGQTxWotcaS2BqnF7Dhk8wWfiA93THjsM4uGCC1b2cUdk",
  "key2": "5SBYguEXBCavumyxz8J4ZLpyiPkymSrdrdfB8SmrqGKQ4xQXYcTTvRAcRaCnMCwTiMvwcZpW41WNRYmn1FZzqSpX",
  "key3": "2SVSnp11HKWTGM24kW4Dvz7tTMYYW5BUwzsxeHVX4pt5w6nriboA5GqVTwkdRdBsTGkJoVLN63XSnGWh3xczzMgu",
  "key4": "2xgtwXcG2SHZ1JM4Voc1JgsfjBLezu8oga9jpxVmx6U3trz9nhY8yYkPxsvZEG9W1tm3C99S2oYjF6h4Wp8eqEZN",
  "key5": "4CD6izr5vjxEWBRirSHR9c7ZMdQWxKmRxpxVfMPFfTc7dkwmKtaEWFwGK7mB6ywX4rCURUKpsYbYPdpwSMJAbcmh",
  "key6": "4nhnXwZS1certCoyCRDb7MEUS1uDDKv8AcC9Cz3RNj1tFAqykqkuEVNgfph5NWL3gAYxfGU6jhsrAGc1oynwtcQK",
  "key7": "2z6TTL2pFAaKo4EatjKFgTg9Dg95ekApDmgrYtwsYukfKsr7rAxddYYAnqt9tgbBqCGusumV9EjYjgZfxN3B7Tgc",
  "key8": "35f83aePVCy67sVjfo8dyyqD54ucc6PfZGksDEmjqpuznMH45NMLSHK2TM718bK8WYHPuDYSHWuA9ZCWgRXEbqb3",
  "key9": "5EeWBfVLPqqjGFfEdViko7UYzn23bvJLLkNc6coWzoUytVka1iaCmuHQavdCg3LesstjkMs7Svw8pAXUykJHwAtX",
  "key10": "5FrYRf39Ly4FHq8mnVa9xPvKZHPCgHFUP5htwweds7dZZdn47mYbBE7Z74o3tS2PsAvdYKNKSJygn7KRGwMiV2kE",
  "key11": "4zdUhKyfAycw4VqufAWxLcRPJQpTA4FSDNHqeScBuQ5NQsEexD1BRB5UCfM3zThMR2hisazQkobHncewW57Qwc4M",
  "key12": "4bcRZLxXB5R92ACKTB9qSs36YYKMY5BnFffiHd2JWVZYY6njfdhVjpTiPnGL4FdHk8Mkqc19dj3XSsReakKL3LzN",
  "key13": "3zEELsKY7C1MHP9ytNPpqYA3mGtXG2rJwwvt4kxDx25nG3mbaExodrwho9RK8Ub51iPzV2fqBsKPuF4h178yNvBN",
  "key14": "5Zic91tVdRTWAyAMGrb5pGmiG7CozJsfXx7VMip6wUY8gzkNi3fFHWhrafHxXaBUVZZrs88CHSg48tivhdz8GXQC",
  "key15": "2xcPnPMrWgEmSv5oto7KChmWUjNv2y8ZyTmBGfXCmVy4wgXsQwtjf78VfLDaoEgjy62j9C8JmtpuftutMUApB2tF",
  "key16": "3rXmAEYsqmw2vubkWJxWNPYCLkcVELXVXom7hsD9fsbL9i6tMwaiNF6SHKCyZuD1RkywqLcrL3BZw55VhQMbrxtx",
  "key17": "5c2mWTAmXcDpcDbKWGvPUuXgEFqSqdhJ92wcUKyicsb6CyY7gU3tAjcregAwxfF4t3PFTGCpJT4RwsQKwpAQHU7",
  "key18": "52oA7Tqi2T9AqzCvDd8CyLijtDoyoqTBDrWARKoxtssfbMCXHNztNMn9NQkhPRxi2WzdkK3sqaJwEzyQGpYWq6Dt",
  "key19": "ZSiKKdL9L9SVSimwup8sQqDUgdbGShVbnMcSenUzHoRUr733yS6pBUnphaLQkQ5RV2U7dNB1URnKVbgUnpgaKPc",
  "key20": "5uKBMxE2aWEBp6j5p44miB3N9DDumnnVrAoKLpibFYn6AibFEUxemnF8Ho16XGWSSSR3vncHCcF52HuS4ZcwWdvU",
  "key21": "5W58BGrHrA1k4MUny7VZLM4fAXwia8XWS7pGJUiQJYc4LePfAkz8pCqYgbrRGRJkLunCpKuRj5Ux5Vd47HfTuSKq",
  "key22": "43w5yH7dhHizLTTcV4eoLL7yWfPwJvPK1xMqr9Fkco7ivswYkRF9jpEcgrNFBfzR7xkrxPVvpunKEbGbbJ9C3nKn",
  "key23": "4NmbFBArp3hx5SEh6Mnf5fYbH7hTiKoqSux8C4Dpt5puwWprjVzARQDS6t1CEnKUy7JCsCaZEfMtGsrQK26bseJB",
  "key24": "4ywrFpre8sugh7He8ZMeLQGic9mLoAEHhdyoJutJBH9a5p9M6QbLdLaf2XEWP6gu5PEXGLvcBAQc6zptMVuz1e9U",
  "key25": "4NRJgFLZKuM8EYaAqDDv8ST81F82xwHTGenFe7RUZbM2A6V8s1vB8mx9pwFiS5STvpWbnLEUuQfTUQ7TfkQPMLN8",
  "key26": "wwQtRapdnLakiVTcbwrMU6KVK66oiroXUFHVP2gWaQC8smLzxghQdzaawrpFcikNtHYgBmgt3TzPQ7T69d13VJQ",
  "key27": "4rX3RwsJQR2VzzAR4ZAR72LceaXMRMXFLTBibvFyov7rDXN8SGSUPh4wiS2Z7YyjKqVV2gxhY9sdG2QCjgJJfceF"
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
