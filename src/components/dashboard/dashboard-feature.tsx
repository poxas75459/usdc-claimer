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
    "rwS4Wi6o8D6BMBu6jMw2RaanXyJczx7M2wN1ArmKTj6T9Zv1nT6kTa269ie25vFnZNaJx43q4LrN3AKoXytUzn9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iuptG6UzCKuwpPGhFEMopHjzjkDhZPSQrfrN7qF556kEK3zAJuF7nxLDLGeY1KECa9XDdfFJE6BMvNkT4r7zAkM",
  "key1": "GFWSnQdVp5o8JuAVMZ7mKWm1C8n2kV1mE8Gexo6PJaSu8HNLP3Ro3Y56qga4dUuTyanqRNLdENn3CmtFjBnZhvc",
  "key2": "2YZG1LmakZ4BveNiaxKkSHtVnRuAqjwC4Whzy4UTtKVqQzx8UC8aT5k9wKgzxbvvA2tLfzQcuoDFNuYB8QKBMxm1",
  "key3": "a8FnJ5jTvzcPaVn2XuE5wUzQayvktw4HBE5o1TTi1aJSDaAcwPPnHzdu6w8CceXv4xHHrMfFQuezr8dr3XyiHpU",
  "key4": "2teyva2WvRxuFZnubf9VmokYH31UzHFx7btSjohXZ38FpNayb61FzThjni5kL4GRZiaGiLszYsNuGSVBf2arz6br",
  "key5": "3qWfiZQ35Wnmeo292x4xdSgivHrL8F8UL8dK9NLU73mAobKmEFD6tFxEskVuLytayLnecRBXJ1QUUGVhA2dA44au",
  "key6": "25crRWTHvCgsZ2GdPHVuEZXyB2U355mqgGwGX7aSwtjPHmDKyiZ5r24iKJeKvntE7cAo9zyUrgof4UjQ6VyGmeX3",
  "key7": "izCkxfP8A4Jqa52cEoXc7FdBnVDUhctoZWUGatBzarziKEt8n9Nxs3Yy1wmBcp4QBNbU8CLV9GdgYrnkbbsBoSd",
  "key8": "4qnrcDzjqjXqnqkKWtdTwn52FxiJ5evo5NyBNcz56j2ym8TinyVoGD89JDtGPaGDVrYT3zzWydvgqds4qBfheQFW",
  "key9": "4p47LfYmhAG8WMcGfYCAh3rs6tL9NV3BFptLG665S4sSLbhPWS9X6HDvHbbLJBiwPqwVSHJge5g7vvtyGitUv96p",
  "key10": "53WYY8d9ZGZLAMaS4q2FLuaEqFUo5QGZjHrqE7phXAHGmTaQzAYMLWvDy54SPjAowMZbKkNdyVUdke9Lf8fAKQxH",
  "key11": "4c1bFJ353Xrd756JKVME6DUbeL2vbLNzsMHPkY6c953nMzoZkcRAnduQJLQ7VEG4uGQhbTGHsuX3V6bqgdtjJRe5",
  "key12": "fXxVBbwjjf1a6x4ZXbL88anbWJzPi3mA3qzmSSn6RWk3MXW5iDyejUNXEHtJXKHSBrgD2hXTmCV9PjBzyBMs1sC",
  "key13": "tTmXbWhGUW9sBVVC8X8bUx2vja3ZVFzpAVzZDMrWfqhERZRi5euhmiCdBwum2hsXvK2d65xSPzc5qgt67RNCFdu",
  "key14": "3h8zXRmtmfoNvg64NpTJsmV5LPthL4vSK61Kmcctvk4C6rwRo1xjsmLUG84Mc41g3f23WCsSvFCqCKM1omZKA1LZ",
  "key15": "2kswjujvLW62hciGiDVysKEkJ3nT2DE1jbudb7ccMMukhouSVfnpW6rNanjgN3sJngKzdp1jEQsjwJU54admGYAN",
  "key16": "2Krmf1Unab7QH9MJaAeTWncpHQFPFZiQfrDtW62aEqTMZ3hTHqzz4T8USdk9uqbfJoWE7MNUUyG39HoLe2x2h6VZ",
  "key17": "5BeKZt3KHRz5GrNf3r19kp9ni14GhuGn26Htq1oBkj5qTsgmUi8n524azJw7JPHF6pTgXNsH7LDycDHT1X8GAKhN",
  "key18": "VuZeZ5htZaWp69hsP2tCCVq2opNLFpjhhJZickQi3zBACREsmV9tvPMVQkm38XAmMW9XXByx2wBMCQV256ENfWL",
  "key19": "55yGkozPx9QmtuxZ8vLCuzKsX3NFN3P73C2ekUp3RYAqxQQK4KgEqVVXHRZZXXBDQGoTkkjNC4K72s84kv1o5mhv",
  "key20": "3Rw54ibdeoBzqo7L3EPc5rK7zvXNFWUpDLzMUbJt2twSBRovPfFT9Ff92wXCtiJQb9mmvefgg8KyERCECGNFMFAD",
  "key21": "a21Kyf8Tnzc9R76vtewxjhTe5pYKFgdpzvDxjxxrGw377RNBFciqExKwmhrWGBrbiva7yx8fibg7x6QP9uAkEDo",
  "key22": "3HsZSabiXVqeUZxZRaqxby27wWKGz4XFLUZ3rD7rG21qez1wATwacz4gkvGb1qXufzkHKkYsPaf6aY7tasTH5Lq4",
  "key23": "2maGtLNdFP4C6Nf5uhJhE1AWubBANDBVoNShdaMRyug4yHPmcTbz5gRg5qJewnSiCcqNrMuhbqiHSt4PCPEZ1Vag",
  "key24": "2SwDWvVybx1msTtHZ7hzVgPWMiLJLCpe71wmd3LM48k2tedKkTxYinARkSTNf8bYsoQyS2aWg1gyzw7NcHiHXPev",
  "key25": "5atB51mojnGUNWSxGcjXdgK3rQV2SzBMcckyuNoH1BgaQmPnbsHCCp4uZ3sDpe8Z5bxgHZCE4TWpxidEq3qwfz75",
  "key26": "52LzakhKo5HUaVXxRpUHBhbSf4KJKv5AXM4Xbackukp8coko5AzoozMUphCPcpYA4n3BUu9UbtgxhpGyyoqmSnur",
  "key27": "5fJ8sV3gqyS3yuYnJu37UAZPssR8BktuAhwbksXsXYRQh2qaoo6HwovBZo47rB9xyAXvwHiQnkjkyCTxm94hXZcx",
  "key28": "3mSxnA3yeHJomiaoGHV9qtxw4X9e7hjYjhp4qbtQhocg1mXtV7e9LX4q8sdM6WUegVTt7yuyqNiySrzx6gpAR524"
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
