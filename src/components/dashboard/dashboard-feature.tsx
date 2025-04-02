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
    "F3F39SAY1JbAspGw7BtGEQtCkhkYmnUxmQ1YGE4zE2Pg3Ka9boB6fas3EUZ1VPABQEKdAbYyLCf1yLFJKuuZwKH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L2uUEVQGxrFXtw27Ueow8kwEFaSRMMFoQz63irTh6KDmj7ngbNMiC1Pz45oMXgY1GYrytpVfbNoeLoRtGZVSLH3",
  "key1": "4poQqLngYHGPUrDyaUr7ckCvWYdREQHZb6vQqAi8q7q2JH2FXvCHdbKja7s1AEefNGAuWnG2gfMThrD4h1VzPogq",
  "key2": "5Fb81yguvfW9L8stfvFM19w1DpgynWsptkJdTZyRUjx3CjRUhDgpgUpA2dMLwAGRxQTkkQU2Yy6wTY35YAqfNe1Q",
  "key3": "54PoTYgopugJAQZTn9z34LNRnmca5i6N3e5KNxqBrygYJj7P8CAuvnrgLDQfQzZ2ZcSAtNUvM9gW4ofmrT28o5rJ",
  "key4": "2UxD37BR7pSykboW5u7FfnxQnsF8erUX3zyZ49XioGqRyfjMU3Wi3owCtSDbgAyHPqojJSN2MaJHnRHGSC359Jcn",
  "key5": "661cCpedpBPWYsai3voSCB8oihucA9Dj5ChnDSXqF6mFcLivmaBz3XLpZWkaRrpE5tmpTSEUV3nqanaw8VUXhvAc",
  "key6": "4DCcgy9LcWx4DdZsyE6EedYYLPU82SNFSSVAknJak84UyihVoJKVy3wz3eXuxPhq3Rxxq6cFaktMAXRBxCc6QPsm",
  "key7": "3QbYmEdCWA5GqLkhRyxQg48DvQvSM7dAXE6zXDQeapxnd8x2FcivzYw7rhdwac7KR2upeAPabGgoRdkK17TvVffD",
  "key8": "3FfUL3vzrwvruBFXz6EKuRVo9aGnEfi3LuLidLXw7dTkbCxtF43trre9r5SZHn4A55p62NsjkKABnayAZq2Uib5w",
  "key9": "3RsrXeuabVwrzn6T7Sq867QSbmpMPthn1RTEJRWqcQEVieNs4mN9evQ7MPZXM2QEY6sp6B5tfrRK9d3ffTyCCnN8",
  "key10": "kPyKNPst61dz2GkiAeyXhMdbWfLd4BhkJPtL8yCdp2kKMNFcbNXsavbA1oFmxFSqWkZtwRCoRvEzvmqSxCdaNYa",
  "key11": "5i5sTpmK5kUY9TKVzHaX4GDmhpKcCUb4pkkFpfmsjBE6qoVbQMuSwSC4E95qt1c1GgK6riEDSkMbrxidhVuRbgYk",
  "key12": "2iuiZDq6biPJcUNPQAVxcHegrLNwvY1ZJzmWpEEJCLgxsSDpwob2Ykyg4KhyLrCNCuwRzX1HG6eqLaRaYhdFiso3",
  "key13": "3ZxGnC4WhrpsgoR1EsmH6mM8SuJb4McffV6hjyYv6f24W35Yf9np5V7DZ3c4BXfht3sGPqqcH1B7Ta4mjBEYHCJ9",
  "key14": "47YiSHqgPGi3dPCMRQKn65e1esJTVv7XFW5A527KFPbofWbnHmTdsV7L5yzNVGMQeZwhpqNSkNBx7ccTGHiSioBG",
  "key15": "4aoyWhVs4dDfwjDh7oEZyD8BsBsr17iXHmypEwvhBR1s9yJ2UHhFPVbuUcZ7SfQayVwmZcnYx7b7NttHqu8Jro3c",
  "key16": "5gb3Amfwbg9AWWbkJLnHctpd161NkLre1MaTgRLoDmL59ZqxPsAqXjdaEBmtRjNPjqpmNHxXYTotVPfYq9A4Bq2g",
  "key17": "nepKKsQygjoDBpsE6BqE6vdTckLAArD9ZZe8KRhXVKyUKze4d8G1PJrqtzKoLX3rJwRtQg84UQAKo9X7ys9ufzW",
  "key18": "5i1wCTzwZqHuXGk4TJSeA2UPNasAsmvLndoJfGGyEat664HbU4KZybUaLXWjpjAiRj5qzhKWoaqbXAuz4VLkxLni",
  "key19": "3XhabHfD5XWFpFyuVjkzXSGEHiPT9jX4pz1vguG2C2TZuwpNozPNhyhj73GEvLawhAyEhzBXxkNUvj19iKzF9KU3",
  "key20": "5GxKTRUcFw7Hdx6zhqpzdiVDkTrZjrvD9mopvbQM6E1enZztycmoWxTrrwwFnaedRZjULZK23P7x4EuFhcyiF5hZ",
  "key21": "5qZYx2SVeHgZdJH9PAY2AbdJNThksKYSK2NQ61QFxNL8vn8h8fAJeXUT1vdkPywxzs27vpNsRt6nPK6rhGp72BMH",
  "key22": "4pkFHUowya3HuCKe8jNRr5yKxYDQZvJpNRQtBXkPdXULb19RSpRZq6AzPP7rn6qwww3MiUGefTGBbCzXxsmTDr5L",
  "key23": "55qNm7u1pPLv32gEKCYXCsisdeTrWxL6oqM4qJCvtJHxnLpEQeB8NekV1uvfstmXvd7C4FrXT9KWKJekfVwhkDdX",
  "key24": "ijqtdM7Kn3gqYFFk6DPqNUdGjmpNfdbYEK93A1QPETR4sfGQbhqfvt9hFLkmoXMv74k3sESQaZpTCDmn7Rhhp5p"
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
