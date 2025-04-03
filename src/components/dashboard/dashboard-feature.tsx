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
    "2VhGF9Jxr35x7fg8v2V6BFsgXJJiC7HrZ4AeF2BDkHfV7mtc4uLygkmVf8uZqAoZiJaqBdLuz9k7b9X4gv9HPCej"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XnQft7sCh7m2LnAEiLCPUbuuU4VZMAXqCrFzLKKr697io15a2Yzv6UTG4La5wWowd72D5tjTzqgBKVhxM7uw3ir",
  "key1": "491YxiWSvhn2NALMeVZSUV12rNkCBVtLXWMAg9bGLo7uDQiA7JrAFUPW3KZs2zKGZ6hyGK9b2EGLA3RxgeQfutSe",
  "key2": "57FmVy5XnNXN6M7YLNSw1JfKommiEkLWuqZkSARC5e6QNVDTC7LN9LUwLhP5sZELstAtxfij6e5bqkJA5eRXF772",
  "key3": "3bbG9nocetxZjuqXbb298a8MkDxwWacdRuZqKAEVP5p4onEjVGV4iHTwf8mHj38cqxVFrEJgajaNCi5C2u5wifvo",
  "key4": "5LvKn7H2QL2EDi9ZjWwoYEpAq9uxA16dDu7AeCM6EmpHivFFbTZnXeU9VmJCBpwHt695u3ZqQP8LPbVvT1nLiKvW",
  "key5": "3DXg5rTkgE2sBExPbDmHqbBAtNxuAbg9WFncNTydpH7t7RjJm2FspLeS5n5ppJixn6twccH8U5VKtSpBAKtVF8AX",
  "key6": "3Wz8uSbDxN2MdKhWhmMoWhZ1eBkNnNjJMuXUifcuMPbUFfoPbLDTTk6ke6NyZs5MHeshUScV5eXe6ZFwmhtguEPR",
  "key7": "58RpNGwHMpC3tjVg4wbrr2uWyfQxAwdoi2xQtTbsbu8JmkXqH136yE48CmvxCBBUmQbz9mpkUii1Jqeq5dPYN9tU",
  "key8": "3SrTRg2QxrpjTQWKSrZVaJtNJanyoc1NRNmwo3WieW4kf4MJLTYnLn4k7rWft6sEKbFPYyuePGZYUSWNmjxi2Gsm",
  "key9": "1Fi642nb1hQgbHvGFGgZBn1bxQDjG91Kbyp9vdFEASnp2exUfa4HSvofGDrBRMhN42GwG6exUsgbfjY1WvLpF4T",
  "key10": "5bFUnsTxK9wB49P2eSre7yq9MB817pepNkKhMhesxAp3Z8M1gPcwHKJbhkwk4pu9wpiD9CQhp5CRRe33tAx3NTQo",
  "key11": "4T6gCqfmSBfTWGBMvgpcgYrxnvbSqF4PT9EMzERxdkqK12kY7eZfwBug84YVgj1fyLUobxJnEqshimLg1dbn8wzN",
  "key12": "2uBUE1BY89PPrmpAj25CDcsVGFZrLApKprNVMoKZcheFhh7EVduv1scXRbBGk1fDNcpGaLNnKdNydpGv5jxJFAaJ",
  "key13": "3mR5qQPE5Fi2tqBPBuNow9KSo8Yu1P9YAMQcwZanVadvBUtY5R3EPDqcgmP3SWpJ7fi4fTUyt5kdcp3gQLidXhSH",
  "key14": "5c7caB1QAnFV2YkzCsXPj4pg7QPGNaLuckZZgoHRgbYNynVqo1SAm9QkQGXo7zjjbK9tBwhokkRr9cb3vkWUJyyE",
  "key15": "2wWnRfszpTazrpwTRtYn8M54Hn6zsosbRQaynUv29aRVpdmTzhMivkz7w44j7MtiHaf5pRjJLcXbF9w3BkHoURS4",
  "key16": "44Xewtbf8ezJpsi6xasU56FuUGkY8JwxTWPWRvDnmoeqkKTnFKtbQHZXdAED4iGfzpEmj2SzDkTUEj5VEzxfkozU",
  "key17": "4cmXPZUSNh5sJoJsJqzfGfwZrGaVjNwce8dPNdLkd1AEjdUo3TVgtjCorn3kuVQN94dAm5G5p5FtQ8x9vEwAuyjf",
  "key18": "4pMAGiNx5f91DmFxFUWvY8dYBijxcGBct8cMXqUqPQ66REv5re18EMn1Se2RLFZ6SuTgzKc6AUnGSqqii3KkQTeN",
  "key19": "2saYKuckywhjKHQ2RBeVU3sXQaPMDmcEmooKinL3CX8YLAs1BRt7VG8CGh5c41Sk9ar56jqq7cvgeRL6hF931TnE",
  "key20": "5JmEzdxx1Utak6a3nRyzKyTyzE8VFZGeedgkdCjRSAB5hScuFU2KLihhriTSL1iCR7ZYZop2cErzS56U51gS12PZ",
  "key21": "4haPByumRcS6vqFihVSeMbBsYbPphS3yL7cJsNb4CqnKrRey5UtjeFU5W3hs8vtujDZZVhJoATgytD1XYNd7wKsp",
  "key22": "4q6PKJLje1cJfHhcVZ8xhyvT8P8jdUmFuzjjGhJ8gboKBFdbyixnRokGwEWGgzGPvdftUV5JcJ1ir37X7HX5PTyi",
  "key23": "4A4xhUHYvw2vnXHEnT8xXeHBBQ8dLXDdJyoNr6csgovh5SuyY6YQd3VdRQZqx4joubjHWBiyxG94yij9HeNUFqsj",
  "key24": "B9BGb1LA9uFVeekmoCK4CV6Z6dTEk6wF3pvY8GwJAQas6USsyvzeunYA9bbir3mQzgT3kjSRzdhQqMgBozKQo4p",
  "key25": "MHyCdhnPcmqkJcHr49Asq6wybZ16GxLMaGn1hnP9DRKqgkiBeA8zov6HfmbMZ6UeJukGsTL5S8Fki7QWCtEH2fM"
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
