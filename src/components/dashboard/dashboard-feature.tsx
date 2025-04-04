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
    "5G4W4j8hfQ9D5CYgULLb4uXg4DC7fgWcMFXiGdSUVkqEhwUGgMLMaXyBbyoEc6cLx7eNCovk3Wc1GhHuq9TUTJnu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YhiN2oqUuGiAvc8HnBqMNpe7k83ZsWyL5yS2N8tnEpmv2KEjC8ET58xYWiW4US44H4yxDFBvY34tytcKHLQQF7",
  "key1": "2eLkd3pv8LpSzQHwWcDQ6jaEarSBeoFf7BMFfNMkALn165sgQs1jVpGek8CBzG6Y3ebfrQqgTAbGvneQph1qTG1e",
  "key2": "4NUpRCyuar8jgqAzijfeVw2MWAzSRzy8CYZrFHeA2WDn71h1tBKepbyZ9DeYGkTeKqLMgeT7H2xLca32WbevLJni",
  "key3": "5rZPsP1f59oAM7wVkXpRLeszUJQckBgftjFFzFDwkDt3Y6ww6uaKex8ZpiJ9SpjMngrtR1nduSS4hBtX64nGnP3j",
  "key4": "3sHzWVZSbVxUQPpxSzNBz47FN4gHH6TSFwpVNNHbbAPraW63kKHjNDMLtP6nYx2LoB6RhzC5PRWutyKDGTipVCcy",
  "key5": "3dChg7NeZTmJDFoYDtvX2cdct4Whq2rR4NK3EA49cEDUTVdK5BKyMHCCSNVGUzqdUTfrpYxvXLALptLkVQpsU7Ac",
  "key6": "4EzZZnwzasSRCJCYa6UdxWQDfvu9XW6txSXh71wRN48cFnYvatWJhyzRb4ZvaggWAixStgZuUjjszbtWbEHNnJNc",
  "key7": "4M24CJaQwqhwkNjLGUj6AwkuVczCcLVD6Wktynzb1p2De7W6o1NEucFa3UxtDs73P6fD5Sutg6VJkrh9rbYAQwZg",
  "key8": "njpDGHtmZVjBeFVce7fqm1FYC4q4hdCNBg6PPDCnmgSAkxYp7jcAksZT9HjSQaE2pbBfgz9GV1F4wygGn7HZSPG",
  "key9": "234MXCuvRG6Sohkr3NCgWf9itjeYy9TibAqHYZptDLSR8kCbYHmghX9Vve2iEVKtaTB7v1D3mN1YcHBn6GVGWriK",
  "key10": "3ZDqrFz6f3k7busEPymF8ZRVvFa2dCtNqbCdyNsetpSALQ9qRt3LcF5pqLmgMRtGZUn24ofXrqcLe3ytciobTa9d",
  "key11": "2aB7kwypZwchUM1KtW9gupFJDpWu9sdV4PQwVkmfw3VZ9LbzbMwwpR6NjGerC3wELT57nkDJhkWn6fHxuheyeimg",
  "key12": "3E3ShPAdsUKQr3GtCK9zsLvR38jowpFstqCHeL1wuLDJnNmrjhZFhMUGYQZFVGk6ipBqkUcLpBTp8PgoRYa6keEu",
  "key13": "4UuDhKogctHWTe55iMtkHaDLCPdn5iLya1zo3HtM3Pm2GEHFz2qXvYLSNYApfBoL3JNKhvGiTwJC6fK6LTMQovqV",
  "key14": "55n3Jgakw383KN38kfKNqchtYHcqPrpvZvfpQm6EeossySHWG7TsYZwKMDRS3RWuPpboSh1ZBXNGkX28SyqDBgca",
  "key15": "4pDfN4LXAsrTnfXPfQiGe14Kx6ax9t9eYW8ZkTmMtmZyNuJ8uXWzSwyUgk5v15hX1Fyd39k3MZzai74ZWcfdADdi",
  "key16": "5GoDB7sWcLNCPixsUe9azHLhoQHMv7xz4b7jnjPk8o9ZBRc7PAT1tTEeShrSb1TaE2Sgw7V2Z2SxvMscg6FJt9WN",
  "key17": "31iv23BYLmBFJHua8UtVKJoiEWt2Y21ka2d2fB3phfJEXTQ3gzFrV9JmzwGrnE6zaxeVXe2xns5xznE3syu7zFXe",
  "key18": "Gn57tnE8SyzT7BKY1d4BuvzUtKmd1bN825J9x1oQQrVchYzRKdgSMuENC3iVWYxmA4vjm4Sp8e7yeW3kWNESPD8",
  "key19": "4orTMMDs28Mhpki87unck2VZce4Qv58MBhhb6wVvtPchGF9cqygNER6Xn5ebH4ei1yCfoU9okEVZdiTWJzht3BMt",
  "key20": "2LEsBEdLPXtSdDKf9vYCyvC1BuBVL9WnrhSHRv8F7EUXVGGNmYhuMnEnDqwiefUaYs799me6DrDsmhsYqpv8DiqF",
  "key21": "5MBtN4xW9gXSDbgvU6fAAaVQcPUYBnfn9Xz1fRU47YBytVYxZaVLQArWv9EG8bAqv2vgFYEqeZmQn39fPBZXyc4e",
  "key22": "2GEG3hR7MhRTxwSmBUMvi8mitez64LBNuWN4QCxqFHtXzvQBWWoU8hV2iN16godKSrMe1xxzGcQn5JozJZu3cSKR",
  "key23": "32mhbW1xbmj7w9uJhnTr5Qy3QCg1tG8ekLWpKWzErJYNNPteharYwtcvE3DzDYCyhbqSt8wFfCUeGnAut2gxF6uM",
  "key24": "ZPjLVjDBvf4SbyexFoLfZaTvpTkXoQEpYYQ56qaqo1vKswSqaBaPBV4Mk18gzMhUov53d1CHU6VDgxtm7J8pX4G",
  "key25": "2FcvBLKQ62woLadNuTfm3EJ246zQ2J7xgNyT26qZf89hGfJBeEk2uMneuy79LnXqbcdD1AtQesNSXamUAUi5noKo"
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
