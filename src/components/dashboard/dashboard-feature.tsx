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
    "3oFZmNL9S8tTBA1qNEX4x7beiVYGqbHKGAR5MFsG5WhobTfqPwvSrpBZWLcRMXzc8da1qbwUZfkjwJECJy2AcDzP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yHGrrSq7DtkgP3918sFxtHMk4EMCDGYPXaA9RZZ2GhGLgT7Dq7Zwxd3qJtVbTkWiUQfbQ3D7DtZiCRaRJGZrPxb",
  "key1": "5rYhmyXFS17czmhD97wrioRzcgc3gHvXY6kwgxYNfRpSoPVLPNE6msEinviAj8n3TWuSzoC8L3z7uDruBseVvya7",
  "key2": "2MNsXYYG4jxnJYc63vVH567BA4Mi2KT17T6RBJZecPe2xYWg8EFHmgRxYxj5DaDwuaZS3DriyRpYV5VbRPLVPjR1",
  "key3": "5MH3YE7G5S5BvVvTprz3o8YJ3iNCwWkZxxuZFXHwC1Herio8cQsogvt2KeG2VjWse2ebrQJdwTVYWCdJZ8WPQUP2",
  "key4": "4kYNweda5muqsfBK7VbgtMNP3nPMTs6uZ3rf4fYoEFf1K6Kx3SAefAsnA4JSrv6kcdJkSEwZ4jwGoFHks4uuw5AT",
  "key5": "2DN5R8GNCYQfPWnm5ajzuEK77WvPvS1Ve3VFP7T85KDcyXsjfFWWDXDekWSiC4J8iiGV2CBEp9Cck7hzwzokPQWe",
  "key6": "5V6pXith5hKYpNkQUx1BjWnNwZakQMR7j4syPgoKjfm55wVhBhvaZ83YU3JHYHXdNeSxvZpQCwHWc9NaX3MivzkA",
  "key7": "3ANG9oV5d8nRvydT1d5S2zcqNXSzc1C9zZNZg6jmGwNKPUE2wc1NR9A2uJY9jPFUMpLp76uuxv7XUqTCqx1YZRWe",
  "key8": "54UEjpoUqN56yRuoxGpxStNrDdUToNCgS2ewvoNfDtVZcLeAzr9CTLLnLSfNQJKBK8czv5hJNXjJVgTk77FSGVwF",
  "key9": "3H98fQ8uPG21KNaVFDXFbsUXyn4P5geEWoRYdQpFMYbwCEt69WA5Fo7joji6MDnWRryvzow7Gnj9V1tg7EPSRkGq",
  "key10": "25g1Fe6nPMjL7hJ8ZKHuVDD597SPajPig2Gusvr2Wn18VrRXig2796ZU2kHRuATXh2z3sAoWntnFPhkBz5DT5UkE",
  "key11": "3axwJcZuNkeKyNv49bhrX2agFLQ2j4A7ndaUhNSHFe3msSZsBNqLqqtCvaNjyErtWQbCVN3yBZmKHygjsPxMSeUt",
  "key12": "2tKHRW67eUYzovv41Sn4z1KuKEzedQvQwcDZhYvbUY2BkkaXP1jt5GGLuyGKZZknt3RiqXBDydgXTbAUC3BSeoCW",
  "key13": "84HNXZ2FHTjbJVhhqgQ34x88agShYwuxrmUpaXJNoWzaJdovFfvfC12VyqHYtT4yReqZoeDzdfP8rBx3xVtkS1q",
  "key14": "5zFHzKnbWn6K41sbYakBpMVhnJyZHLPa9nj2VUzaD5Ck58ZCKcJiMT6BqoJKiaj9LcN5PLr99dC9Vuowvvr3aKSW",
  "key15": "4PiWVHBP1TwyCtwhbg3apwKxZwwpvG6iyxzeeERMUyKh8gDA6ipLJp5DHX4vDaMpFZJzr8uUpS9dNmAn2mLGbYF7",
  "key16": "3LdhLraWKZ3xhRxtUGq8DXaVQXvKXaEXecw4DyCXxU7x9ag44RZJ6piDvubiEXEoPuHNgsTkYFVxtU8RuKvrcsn6",
  "key17": "58EjyGoXoVf4S4QF1Gve2qW1JuUoSxSEjVG2mCoU5mEi1dLHs57y5P4JaofdPs25NdndqDayq7ivP2N6rLBEHmof",
  "key18": "4K1DjvpN1jCfUJVDyeAFmxZJbYvNBZBK4aAsKQ1rEbwG6ZgPrXsHVX6iMNRVsrUrFGLr7uwZd3S98iSouHqCLJTs",
  "key19": "38jEEcynBU3nQhDdH8GEEoVQY2LpLk57zcMugG73QDVWMndSNazFh6Bqi79ujFfFD3yNpB7tF64Tah9y9yMxZRn2",
  "key20": "67C5ukT55hywbei6n3tHL6dYXKBLPB7DX7hHUSUsLSYc6rVYLHPyLiaUT7AcsbXuvMgTZt2Euuneckmf1FtxjRhj",
  "key21": "3mpZXGujBDwsEMLdNLszU5iK3eSg6T3g48jhMquVPzHSFeSETuTooVZvB2jREALnxzMa87LkV9QiXEjPwKhQgTZx",
  "key22": "3Embf8REFAbC4zR3ftwLDCmyNcbULB2JozdV1y621fF5Tvwjdr2gXEKZaGWfKdzzp3L85EBBzdjk4TBPkfHi4WNe",
  "key23": "5t9S66GCkS9BsssywnyyRrrHDHNgesBnZAVEuw2omoLyov1HoKzM8Z1BEczdgrD9gkUtQgxRKiiDz7YM8g4KZiUG",
  "key24": "3TFwbPxRXpGiFMemUvk5KwmxmbvKsYmxwhRAScKc8mu7zkXi9vejTvgSXNBTcwyL6prAdZtz52xc1C9Lx8s7nKR4",
  "key25": "4w7cmdjBDAAjBWx72htxFsU7w9A31qmhLNjNbgt24oGoQ3A6uW9Zrb6LHMR7HLqhfQiTirHoNUAq7XbFMD5rywq2",
  "key26": "3seAkLaV1fvKrpkSp3Y1PNWZW7aMf6NMQHmpfSZysbzzn6pGPRJMH33tmwDZiQhEmCn35o64uxZQtibYRQk7DWeU",
  "key27": "2ZYePN9Yr5Kp9RkkjiXL2RJXfKTHE2qWwvKV3y164CRsuoFSctDgihHVaUGJvqmwx1NrURjLw9tttLFetPGjCym1",
  "key28": "GT1MnHa9Wrnuc96ybBRtPKrJqAiSWeor42crWjXBsvF3Qj21tsM6cEr7hrHTCWSY1JCrUHC8vk9QfswfHKCLcHa",
  "key29": "3UnwvUdex6w9tvVMbm8yn6WAMUbfpdskKoHVGapvZusRyUpW5zHV4GaDXc8UWPqA7MdVirPKFNcaKwuR64GhdHoZ"
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
