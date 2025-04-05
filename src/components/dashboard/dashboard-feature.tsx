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
    "5HiYpNYnhXMqgFEvsHN5ALQUQcr94oidYMMUL3oQeG2rFFCm514muYKPHh643uP8zCAzCpkF6BhkrYLsc9xjHR73"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P3e5hL2Hz7Ni78w9dM2ryxujd1io8cgYVNJ8j4eNoA341wsrB7BxrgeYUoSu2EM7ZTjDuGHGoY7tvDBk4hgDis2",
  "key1": "56PPdS81DHKebtyX5pBNb7a17NAJD21eKSsYAvMqNwYJngccZKB8tSYCDsJvpAFH19UevytyJRR18v8PJ6rrdJh8",
  "key2": "2EtjcXLeW4A58FYyD6StZgwuKkH25PkzvUe4xV19s6kNPvP8FoNYn8BTDnUWCjarPDvaAHPtTVyy5qzWdLTt46QY",
  "key3": "4B73wWEwsDnYy9DZTZY5Qynv5muzh3EKQtpoMR4NC4sFoYE7x5pbWotwo2sGRSMcKhbdMPG6Wt2qsNLEF3rQRMTw",
  "key4": "3MbSc2jBqTBsi2YQPak3HyJUKRbHS2Uj1xLDaayoaMU48dwppUX7mzM6koiduiwggsTXjtw4NW4zeziMvfKXQVtq",
  "key5": "2q88ebPH6hjarh1UVgsZuWCMTCWBhoDMXJEdaEfTUFkJJGHVs1g7XtJwfrtRyGkkzR86b1Ck5rcyXCTEaoeZqiFc",
  "key6": "3wGxCtoFstWi8gPkDCtkRY1gctYMhNsWqEgP1hCJREhc4dNYxchJEN92jnHjMr7StSdDHgNrHAQgrrhrfJvecxG8",
  "key7": "47j9ZYhpVhBscSsHQ1VEqfzVzKTwmXAbNXikjFgRyh9bje6A9a9k3p6CCsZQ97NTVURL5LpgXYvqx9yhuxjyhjNa",
  "key8": "2aeKLUZFiM5RmshEovcUdBqUR8ppjtfKgsW25zsVekFKejSnSL2esuzkrpuH7C9uUCcNJRZfCKFjBLvg3vuWttvB",
  "key9": "63c1ZxuJNCxhfqrJzeza1Ci9BBXU1PkfMLdhgxvEbzTbLPMym2vY2mnTtVc64UML1Atq8KAVzQw6NrFTyHPaiQ31",
  "key10": "kqn2XaixL7C9AzYYh89hLN37w5hBSaZk3L6GJuSGUiEBqKpA6ZJEzXubmNVVHhDmnMjMtKKHmCTMTQ9tw3ucnjR",
  "key11": "nqTJP8v6QiqhV6jrBbResToL88D4UpNUTygFynndijNpusZbcZEJgb2zh9EW6EAPd42E8mJwwqAhLrYRss2G1CP",
  "key12": "3wnMUVKwj4XNPAyV2SchofQmKvwbqn9jdYvwpjKyyRWsM2FxLs3kFuoU3epGiSnY9F1Q4HFX5VbqwFaqjzDwSAF4",
  "key13": "5xzh9ZZ4A2ZsDkLzs2RKYXbCinmRUdysBvMTH5vN697WDwZ3KeHu3F9FcspX8HGhUnhL3xPmhVw2PokyjjAd5gV2",
  "key14": "61oRygw3TzriJmPbFEvWmuELZd53mHrKUWdb3bwVipvBpkm99Anu8j4iQfpX4gJF6E4yXpuzxny3Vmcf5m9gKb8y",
  "key15": "4RwcAiWCV2rikusPSfPPLeUABtYTFkT6AMkPdcMvzaVD5oiER1k3jgAfWhzRxz21sedGX1bW12Ua1ADLZy3tukx9",
  "key16": "2qLJRkPTx77aiYyiwLsW9sKGHvRGxd7aGUjC6R4AB8xn3MCACm12e7QAfDtiaaQcjDfQ3mvZsRVxDVgjpQA6FWW3",
  "key17": "3ehKy19nuYmue3jAWjHbQXH2KfduvRhAgypNvqyP4npjUf2nCtp6P1327WJT4ynw13ZfBJP6KNZjYgeKrPKDc3NW",
  "key18": "3QePHuYLUHeXbKC6Wend3M63Wpc4WWKnJ4e7QLg3MMFjwdkuBaRDWGVwsRJm6vgHDaNbS8N17YPVYRQmG4sCKQxq",
  "key19": "5ArGCoACraGC2uEAdeYTPL4ZFsbRDwpNcbQXbBEWgWQjGVxPY6Wy1srnjdsRuGJoHMhQF8QmeJYakeDMBCi5TBTz",
  "key20": "4Ye3y3REmyzm5xvpVHMMGadrjyLaHWxnHKNcqaZV2CsYYjjPg1MaZDbpnNuC9vid561gnNynxhNNP42utDHhbFQk",
  "key21": "2N1ue9nRp9BFZK5dapCoGDMNdiarnfwvQAp9Ga1NxwrcFSK9f85TS1L2uJLXyH4obZ16uDw6yqGnPHALFUe2WHx9",
  "key22": "WamKj527rfeT8auDqEKpUk9MjtYmjeEj1C8eqQdcyoRQpWxedV53rCBqv3STV5t5or3D8R4B6s6iu59wGXixMg4",
  "key23": "5GYXXSqzSpJcp8dXv3aLojzSjcV4HTvZc5vpxAJg15dF9CFHgfaxPThP9QTK9gXcYNtNQpenVLUkuvzmboXucRwq",
  "key24": "65NBdSAq3WGJUTg7ro9gSL5pGr3fTwymg9F9v2ft9Ui88ubPk5h8kUR9gEoc9becFcKwM7jtG2WJWnVFYEZacEQH",
  "key25": "3pqNnwZW8ui6HVxzcPzFKVz1XEhyzSukzqC9giCxYJEzAPvZNqGpjAeCnyvtdNAoGnQF7omWqwrU6kaT5NQRTj3Z",
  "key26": "3jwWRHhWJKCfWR3ac1JuXepFZPecCc4fxoRPZpy3HZwmpPjDARyBjV7SuPWBRhaXyUrEsewJzeTp1fWudco7eJhP",
  "key27": "261c4YYVhd6p7Vrayum4vXGQeqX2D4RrFiCnHh7mgjgNXMGNPF2CZLjU6DNwG9xdTY1Ws3XKVXHZ7MvodPUynUsP"
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
