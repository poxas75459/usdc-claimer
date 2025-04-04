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
    "2mHawxy5hX8W1vXx4LSbcnuzkxnCMTBLawQxCJr2V8C1TnRwm2B9MDDfJzUNnMWN5Tu34eyhwjZnF3vtoPLp9LWK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N9vVeFb4Fu6kFRGD1qW7j38kF5srQ7fMNPENVwvr7AP3p2isZeqpTGrCXP9xAqPwvX8Lm4ExZSyN8cHExPiPoeM",
  "key1": "53thjVgwSF82igZqyDFpvbMDQ9GTktiVmuA1Vyu5VECGyHzzwtyJ5eSwMdVoTrrYhwKkPDaH9MsHwTE4dibQqkY3",
  "key2": "8DtzgwJMqtfXAzwiGMpBGzov2NiopvGQ8jzxy1oXEBxhM9rB29e38FsQQUaXpV11jySSx9bka2H8py4vMQnB3ty",
  "key3": "3Lp91nLZnANLqEV612wgkcNwcthEf5xrkCZiKYTes7wMrpnUXPf1d2id4BcF4VWvMV2JE5Rh8eFkMojRL12Y6nZ7",
  "key4": "5dsQN2hQJJ48FAC4cUk368HCytiMFsVpBtP68acS1eeSfK9d7wCCdM5FrXeTBhJg8UJnjjnQ6W9DLqnMhYY2Ypnz",
  "key5": "43noFvmbfSwYrUJuEV6FoLMVEsiZwxcWTca38ra4SyAePY9dNfTSmMgjzxskue7j7WcLisf3MRVZps3fHuyoqPui",
  "key6": "3BKxXNNNhJJWSrxWHDo1z7Hgnc1BsWmyEHjX4kRVP6Ge9Rjp3fuyQ6SGGUdLJTh1hWdLt2Dr2RTHrD3BgeMB3J4M",
  "key7": "5VtZA7pZ94JaZMJzM369aF2WoU4j5q5sUPS4FNLXuHwfUM9BNwXvS7TWBGxBfqLBgWndtbznrP6S5j7SDcqkeDKA",
  "key8": "2MwYcjnPqe9PWqg2WbRTduHW74ofQGA3JMTjKYsEcKfTNsJXU7UpkNYATxp1hFM88Ehf1jTZwGsdp1RBj12KzkC",
  "key9": "jSFtPCnhFg3tTDordXAFXt4s22DkduT8jBrVrCX6iV2oeSXkMbw79XiFKXNtfXmqLuwgQFKzXCkLyKaFugHib7T",
  "key10": "4PsubGEVDQDcMBMgNpxsVUp2LCSPFXrPYbJhAQQcxXbRK58SNCKDr2DZuqxGDfQvC5XzA6YSEPFwv6HTkL5dD2wF",
  "key11": "5zNXAmhs8cFTowSHRHQKWDBKrR1pgsSrCZ2Jjw5ZMGyc6HEr4jqfSDFN7SwGueVZ44nERP7wccR3jpanK3N6SizG",
  "key12": "5kxMR2gJfQ5JeWzqNavKv3wzzyJ47Vw3psfGEjtsL6DAEfXYaZ8ANZz24nJdgSB5jtyafc3vpHxyp9egCD1wFUku",
  "key13": "4WDkN6B2r8EbeCANoGgc1vXgcrkTx7GKAV7UtwJAPndG4EUMHVsHnpPtQTKWTHZXoDrM3msnE8B4YMWPUHcwbAS9",
  "key14": "YwTnSYoNiVGuwvDiFSPvVyxNtSrMpZzMmEBRZaRbX9paBex2HKqTGL6CdCunx22jzAL9ER9JyBSfFG8sZvua7B6",
  "key15": "2uoD9ksW23itWR5mef1cFFamcxWegwjrdMrCAYM3nGszbCFnzAhwrU6vWxUcL9ujhxPhYF8vxGzfzVsvkEZyXSmA",
  "key16": "mMtsHuTeRWjB5R51Y7yzLvtD1haRCp6L9yosgLRgknvz1EpcYZgfgnzCFKBAK37EN6rkACnTxtDoQQd3xGfPDpp",
  "key17": "2q9Kirmv8TRK3LUmoazNEa1Z8izjyFRBGCXmHy3tjcJMNmmpmeXkcbt2sG257zBrvXVMvbjvPELfqUhJE4poECEJ",
  "key18": "2LqwZGjznTukxVpNCSLBArQBvtzDubH4Pitp5ywtmYgbBQWhQ3nx4DaT535ieFUXWbgJ8qiXw89n6HzLpXrFenqk",
  "key19": "4JSaPruKEj81XNoK9qo2qYqBhaRgGnj1ey5hGcCQRAQArmJMx6L1W1YbAG8piHQ8YMAdCkXDemFDxffVCh83r1Kw",
  "key20": "4zF5oFSJduJTp9NHuLMPvEftNzbm2PaK3jdHRPoCDhmjgMaxu8CdnA9omFsSyQHRweZSWfJz8p9xhsyoWiofWond",
  "key21": "iDbWVUzthupyMoH9SKrkQhq9hwuAgZFNyzk2nAM3oXwu1CGJyBMT5F9uJtuKMuJj4WBMSGp2Cj22KgQab4Ds4B9",
  "key22": "3cK1EAYcTu5246gfcP4uFuEUhBEi4z8XMYrjSmiGnDQGf1h1GzYv4mpFh4YCHLUT51ooWJ1tjiPKcE1eyFxNaG1q",
  "key23": "5y8Gq6qzWUDZPmx9pcxX41dUDAh8JHqRU1vBci25WrECUyJuU3Uy7gwpJvvT8M632QxtEEgr6y5MakmSiFYbxbYi",
  "key24": "23w1zfRg3pCKmSy7T2VbugfxLUzYoLkCTKVLG5W7xeiCchtaaXow5hAzvDrzNG4PfhebPhZUCMoyW4ua9RrF42ep",
  "key25": "4yY5swJEE5YveUAaA6mFbtnvfWmBFeqTaSHz7YNxCaYkewPSpN9SKjKpdVcjqqJBKFpsuCcQ9vam2PoS3KQsT5SM"
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
