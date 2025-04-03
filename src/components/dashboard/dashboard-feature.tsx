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
    "3urcCRofVEFwXunpQAYrzFADi3uvbM8m11ZKR4LCpYaW9wFyGLZ3qKUFzdiARX2izeBnLUZnmuGLWae2GzsBXZcp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZXF8wb4AEJvvitdXbcC4JR1TpL2P6c5jwk1ePptq7NhYTzxPPbLNXZzgjBGNZDZK5Nq2vkLZ6D8QCcbZasKPmgt",
  "key1": "3z6ToLbiteMsvSvoKZyYsK35RNEi1oPDisba3n8WZwNreaF2rtgvR5cFxeRWwgwNuHdAp6Jv82xPsyDoWrtWgsXd",
  "key2": "4JJG7pUgtBMYn3SMK7HmvvPxzbxdHPZhPWAAns4wWecdHdSw4nC6UesVZPWTUkP4rEzD64TFzstYkfkMjoHRCAmM",
  "key3": "jidoCMiRTb6MhdpHVsRN6o61cEe5CMCdw7J8gfkcWzGmiFpEfWGjtLRxXzShwNCBpMkcM1Vmro4rXgaxZjopaZk",
  "key4": "edsJ8NcdG2udNLS5dHzKbAaJ6EEXkdgD5HipQLRwPurFwG71mFGQQQfkN9uFAV2CVABm433zboMpLUHBJFRsTC7",
  "key5": "SXeEzPXfNkhZCnTwcQ9GJ8t39caidMChX7DLqS2WRXkSENVM2pQqF3zU4vUxehAqWsVWsqCf4kU8FpKyTWXp9kj",
  "key6": "2vkSstdMkWYmqXShdu1nqaaoMp8TNMaQcgLJ1Betu2UYpA2AFZkLYTzf7qTUpr5eyV6FZwxwU4QYbFZLfgN1e44P",
  "key7": "42zLFt32ahGufTmToywdLpvrmb4kgWcELtVMRx3BMseGrDGwhsPYixY5F2RMspsov8vmAsC26xqwDxBBLibKEHNv",
  "key8": "2SF9Wd91pGKj1yzjtZmLbUCAp39AxwWXEXmv5wnLT9RUafomHWwSTqYfMJVwBCEDx1TfxsGjtEg3Ja1MkRtiXxgA",
  "key9": "3WDzXwtetaKhfX4QCY9C89Swa4Bvexio99748i8f9FSZPzZQhK8FSdJFGUzjfNPVsYG7ysdCQoA6eWGaZPjvf6E5",
  "key10": "zu2H9g81psk23ZejLhh4jMgdiaFfJwGAJAK5acvaMggkbc5gAzXSuDeRHEiUg9odR1eUoDynY7VUMXugcbnE8zU",
  "key11": "4RxTGYJT3jkXmroF2r3qzKmsG2c2axbHZoYdLZsLQEb2BinxSV1vj6Sa76VCPuDiRbmX6BzSmwJpzj8HgAiiH5Px",
  "key12": "5LuBs3xsnmzbvQahqEabvdCT94q2xuoDjSxdpNuHWvGdo5FvF44y3NdH95BdZZqFyumL6a4qqzunhcAbyvt6vpRe",
  "key13": "59pqQcTpShi1KnxUsDmiHRVPYC3ogCw4Ym1iqZLMYFD9Lgd9Tq3a9SZKvDXfxTrHPEk4HJN4zzUC9YGPxUjeK6zh",
  "key14": "5PQ6Lx7CWRnvgWNgnEcbx69bVP6NwUrDYPDyi1hpKRpU8LpFWSCRv72VdDgDrvuREzQ2PAVmw5Hk4JAiNp4kkcrQ",
  "key15": "s4yQsDFw7X5rL9995GasCBUE5gCSTUYE9ZBSkgC3ZUDdzwB46kPDZT2gSq1z9VaVmNGuq3CEMnRDTd5by8SMrjo",
  "key16": "4s6D7X9dm3KXtfbZa7wuqoipHVSVgfV45n2g8moB9uy5KFCQQ9HdQa9Vmt9uinxKQybqnPtHHEojks7n2dbq6iTd",
  "key17": "zMoNow5Y8LaNGwiZK7oJNaz75vggdqJcHhQFiKaXjE5oVDT3fnitE1UVM4YZLEitxs16ycHeyAP1LGQMEfcwPhg",
  "key18": "3i6qbGVnxyDkji6drigM2gGcLvUTUDwV7To9ssQxoP1FpaJhFPFnk841EviLcWA9wT3yEo8cSDgRXRRiVqermXpM",
  "key19": "3kLg4vQ6oMagumgbteeLvCZed7mP5Q3SSpx72MeBnN9zGk7SY6HXrTe1JL53J9EBYpTzoo9NcBuNCidYzZC8M6RT",
  "key20": "36XTJkbE17C5Fj1cxgUKwUEvLLEMrk9ebr9TxP1E7sJpViVeUUJ9K9jgCsgEH8Lf2RBFrhK1LubLjLYJi8qqVady",
  "key21": "5YBi6fGLCBdobLtvKyxzUNRTdNHNmbLH4GfYveh7r5LUoY4xe3xiYTmKh4YP1EvY62NsXZFBBWgzcTsmbyDqQNa",
  "key22": "4XHf7qzCprecTFiHxeA7xXKzicgHdMsPXwHejhS1v5MjdsUkCUmcdwoAqDHekY8PBn9jXHagsGvYGuDx6CLC9TUg",
  "key23": "2s7Qyk61E9x2qJetjofzMTneGPpcAxytRZy2K52ckk45vCribbR4S6j779u4MvWRRUQzqfexjeqom41zwGLzfRqi",
  "key24": "2u7hEDFrrvJX8tchXshqgRY1Nr5h4ccx4TyFw7uH8uk9S1CAdmGUWtPTM8GeCmPQyWVfRCGA1NVCi4yJfKyaFR5U",
  "key25": "3kCMCDoMcwdHdbissCmPn22SeBYe78vPJBGSYxraQ6k1D3YEHkWVPiXWt8RNn1sWARJShGhwhDXyXaKGYh4TzmT2",
  "key26": "5hzTF4uwk41ig8unMbx3PPUh62YsBCHDBqTMgLCkR6njvCCezTvbodkh3hU3huVobiQSoKKXXVTzWtdtVuiM3YLV",
  "key27": "3qdnDkm3Z6mJtNnCyw1GiWNc9z8u9u8NBHcUDZUeHNV6NHR28hweFwMK28SFVSBDcQfpjqRTU46TkMRa6rQ8tKEX",
  "key28": "M38JvU4CddDs4KwX8fJhf8XfYudMuvoTWPXjA2B5TsHc7wKbXbHd38rsgbrewdxZbY1p6g9SF2Mbd9RcBUYgjNd",
  "key29": "5PfENQnsXJYkxbCLaku8yDahP7P3yg1JarWk1bymfBxZjyRhmWCiWCpbz2EBqZKf3g52ZjyKsntLcCy8Hi8yvBCY",
  "key30": "5QJ59DFtWbWZ5HEFT2w6aoezzkHbezmxjWu72V4fFx2iBh95nkNzE96PeP4MRBfW7BYHuNBo6NhZULdWwykDoBxU",
  "key31": "5TiCfbxFXgKv38dezCcwiaAS5pZbWKhJWjBbprS4gwhppwYZdUWW1PfZAS6ByanVVLiv2b1ZTaPEVmkUMAcb7atp",
  "key32": "4sjbrHuW39ftESYqfjQ8oCHAjpdgaK83KoG6mmJRUSrZFNsX3z9mCtXr2L6gZ67codSKrKcEPmjufw2vaZzK5e8W",
  "key33": "3nWb7bHuFwK9pcUhnJe4Umcmi1GsBUUe51C3yZFQ47RR7MWnWwYz7KXsGYmTzgbWfLsNUibeAd8Hr7LqU1vP3rUg",
  "key34": "2e46SnBygn4MAWzu3WDA9afURXFyqLFV8k43WPYC3rJy54J6VAuHuoGypviP5gkKAvkEnC3kVUbwDGE8Jeprvr67",
  "key35": "4HvsCHvNUNwpVLGhrRGJ9Te6mCqcj5TvmpE5xvxRK9F92RRAvfMg9YmbTLFYd5PXJDojtXDmpUoPSGKhRfkh4gGC",
  "key36": "5CVRvoU6Um9QtRPC3ghzvpzRp5KDCKsySQ7zTQqxPJ5Y95gLexqS8p5VYhFyCgLHw5sqYpdU567x7nadCgdwtMwK"
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
