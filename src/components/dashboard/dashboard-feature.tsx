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
    "Ct7ZMrKfZUwuQe1aT1BcVTL1MZLYyLUhEeVQaiv7hUU3qjGsdhwwULkpZV3rD2z45tg3afocekYubeT4RV1h2ZX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yJxtLuKg6rGUfRGv3LcjUBDURscEPaCLVjW7mpiJdMTQJRctoyUYp1ZaKLSrkJouhQwYHvF25EpYSpTsz5KJWV6",
  "key1": "3EqMtRWCYdxoa6nav5QNvVWY6UYuUGNTv9gK6vF8ZqvU5wzcDzyJ5uq9BXk1ychtUiiEQyq7geQKVkRJMWe4WyBo",
  "key2": "2JC3zPN5DYJdTSiohU8Y3tN15tmdsubQoW8SsBKzqnP5roEcwKuyDZw8adbfRXFqRaT1CkneVz4ZUnS5xCAhpGbs",
  "key3": "2viHNEYp313HhWHVr4JbCnKuvYPd1YFbXB7rohzhP5E5WiQjxWySPhijmZ1bhQ6xwrF81jRQNwoTPdrP3gWoQB3d",
  "key4": "64qR7bazHKGi18HkmQZaJ4JLqLG77QQde1dVwLA2b14tdcKfuS3KqNmb76nX4CwgTTY2qQRjxTPRzTAeFfd6epAL",
  "key5": "5qpKXoh3XDeZKUPzb2GW2jMr17y7fZ13wSrEwUrbwyPvwd11g1Xt1AWfJdc2YM828Kk84yzgmMeeBVzKRE5ik7RE",
  "key6": "5g7xijrG75uvqEuXWP9T3cUaj6Qxa44GPEr6NBJzh5myspnGJCccr9cd4WNVTmYfBkWUeikJA7tNthKvCfdAPSGa",
  "key7": "wpMgG9Xp4XGcyNwvgHHphYLfexhrhQ1WNMt3EM1PxXdEVpbwLQvec48LzZyYJW4DCmfC276rRg3wjUxwpVrPrWK",
  "key8": "4Rht4dEJAoiFteWDTsbobqEUd5XzsKt9XiutUww2bPNrW9udy3iTKNe2oMCqyFZSZGbrzCGPzkV8yvo4z8RFqTLt",
  "key9": "3jXvRrXMJSbWe6MxzKn98bfDvbgfCnw4MLvwq6K2p3B8oaZ9sehefX7L2uZFdyiH222cXNKhVxoEP58ys2iRaQHN",
  "key10": "2MMzGXgw4mfSrEEFrxF4dUqRTDac5K78RHMg3Wp31ecDcaRec5tHSdavACdHNf55zyJbnjqCCXSWJsUYn1LpL4Uy",
  "key11": "2S1WFXKW82FjWTNgwc5tXk5rT6sVJhxf41Qb8gmSFX9AKMsHWBGv3gjTnDKJYRR9w25F6jxNoyEdqJfBP5N3PmDa",
  "key12": "4UHeTSYpUjLkhC37MUEYUy8EJK21iUXwxCDpkzk8aujPjkAtFPQ4Ba9N6iKPCmBYHPXnhJ4xruyFvCQURtApuJU",
  "key13": "22q8jNQsY4xKNNiTZjVYjCsGm5WuGLedgzDq5HPkQYbdGN8cKbbKzHuX2c7N5XfhPdzBmdDpeiRV8sFrKCaqA8rA",
  "key14": "3MqrHuETgLoaa2sbotRwQpbgc1WuWpxee9VkvHintf1ptpCLjZ117oR2UVsD8YTLgCjurHDm8wJXEaaY3XZB1LLd",
  "key15": "3YmXGiVgPyP7BHavqTe4TcDaBCXHbb5foaoA6MaWTvria1QaHziMSPoSEA69mQp1XYsQzvsiyeJ6aBeikPid2r7C",
  "key16": "4J5s93Uuy1xDWHqoMVHQDP5RuYP3CQoR4Z5LF9szis8eEW2f35LMTkBdUDm5GtSuKoZJhVeKLjJ64t7ncM683uuA",
  "key17": "4cuLYyHis9EDB6MDUXE8xfWweahiadyLJmMxWyJxkC4vaoLKNGjZjfZ6PmqcMDRsYYRTjjd9RAgXmnX9knLRHcox",
  "key18": "4uH5da9H3RUXgZuX3sS4FqRfZ4GWUqrP9hawyteXjooZv1Ri3D9V39DKLVza9bFfH3JX681SrzqSXaiLY1LbA9UA",
  "key19": "3BEYMBiuy5zVxC3dm1hrgtYEewnymZJoz83DdEDxDRYRrReVmT7focnDotaPhQyjJpxnv1RbXunPdU1vLw1egohX",
  "key20": "3UuX6VRR6nypVoYyrGSaaEcpPFvsKMvp1HRDuGnwsMGmyQauSfmePYgUpXnSse9eYLm3jHwzTozWRxnonnudkPc9",
  "key21": "55uNK4RtJB1xZA8Vw7dmCcqmLMaRwyftoiww19j8txWyNooymJRXikwGDCBHedGHian5MU3zo7QbZokAcaMod1vq",
  "key22": "BfMPT4E9K8cjrTDxsS23SPa2uwz3NqF1LLvJisp2k2khaYazJQGD1sznq1mbDaAU1S4GsixFHaotBKbdRrjsxkt",
  "key23": "5wjUncDiNEpZuyLvLAKSdSPmYamnTZKq9euq88C8kXpzfqu4qTievBjADRGCGP2p8Qn15oZAEBJeyXBW5z2K5BaN",
  "key24": "3Wi7eQTU5UfF1u8RqkwHDSDtrrFxPckg1oAFPHg4o4TNHVFTcTpqzv3M9giVSkTkfpehnW7mYAsgDkieacE49KB8",
  "key25": "5S9zjcSy13mtLLfbL7U64yc7Na4Na283gSALog7q2ycvUzHmuAkoDyVuAg66VTr6zFBEDvyxgAiu8nip3TzJZPWV"
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
