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
    "2JSGyC3jzJr5mHz7XDr6FNLs9bNdaB1vXECMKugWEBH3eKo2dssDfxKTKsk5eCkzKp7asz5vK1K6a9VNAR5nQiSu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ubmXCMudKbJ3arcA9p88dyHQdp7vS6M271TwNu3fJznUkiHqd7u1F1SSAvXJrtuLVFtGMh95N58T6tn7NzDvbiu",
  "key1": "45SVaCqfqzqj2iTTamjPQNpYsCCRFVMBEwByKBLCmJq5sQHHTEipRqcTozCwNCCDwWHnezAuaHzAfxuwiQ1VvMyw",
  "key2": "4JQBL5qAuFpjiAacP8q9Z5EdYnWZLEd181aMuG233G5NsQ8RUtEYTjGfR3rn1GWb7AmV2zCUvpWxszxRuWUafhEY",
  "key3": "2388oEEdcBbgUohTt4TGLoBdmZ4NMzLfsM5EBqmJK12dByTFkujXP6f6arZJ8KPyEZ8waTGwE857jxv6h8sEsG9s",
  "key4": "4cJV5TMqsP7neqU8FYBtNXZPpBowTxot84J8Z3gePE5cQXg3RSpnpcP3T9K6k7ftpvSywpm65Yyt8vydN8er9jCi",
  "key5": "4w4LvNE8vnbCyyJaxNVN5UfDt6wkvSNuFwNoJehfsNh6VLzeHdRwTd3Evt5FTfWERTFsjyTqDwYDY3ECqAWMmJaH",
  "key6": "D3TgE5kRUKTtHVKNxNehEXoumddruFtYfEQbVbrupTiJ7MCNkmsYVEUVJ6ThkMQbDC3tA7N7rNFYuhesY1pMVfM",
  "key7": "qmMPadGxKw73mZWj7LUxWwM9qy8o8w8E7YCYQ9vbbPyx7pM1XT3qMY7G56esa83hNHyQcUNt7WVnMBz2XBYTZCV",
  "key8": "64xhsm4K7pVfTMoFg1SQgJR1eA2PFh2n8jzdA3AZ2ysCuwdE5LFiLRBeyVhNmtkqcG4b6ACSDFBkxbyBL1vuxcUz",
  "key9": "5jwTsMvTWd831CLWQ6JVSMjGcDvDR3SAkmUH5UASHcR281a6r1i6mqmArRB3uzViyczJCFncCifdFer9TKbC4sTQ",
  "key10": "irkSbN9FoHVwj4WyBmHA5fpED9nLmVFcevCjb8qAqd67qj55VLcb82KicXkcj5Yvi9BLNTktVeTUztYvioQE41J",
  "key11": "3z5YRogByJ3qCFeqMUZTDQ4uymDKAMUPPpxzPub9Hht6xAF9QaKWdetGXsMhLsVtbENC4oFCuQUQjKHj88RZAYWB",
  "key12": "54piY4pFUPqqdJb1pdYTM25nCZ5REAdteBmhBtTi33oc4R1mGAzoaZwiQNaVmjaaCkSRMkNYsv21fJSt67eDyVK6",
  "key13": "2y1VLHEdb6RBEyGVXE6s8eRqLKXrNr9jKRNg4cj3SyPreGWNjkVrnNzkKbfrhrym8t3i46TFuJpGpztiAgF76hjD",
  "key14": "5yxF2XFGMPRndbs1MQomJ8iFGmy8PdpSppKiCPqHBH5BaFnqYpUypEzW9REnKH2UwLDF1C7aQJTbGyxy7DmJiR4W",
  "key15": "5NdfX9b9USHvAsZHZuW6V6rczmBQ3F9FKJX7BrW3rYmrDavRkyFwViG9AhZW6rAxtQcjUgjE7npHKX1cj89JKNVP",
  "key16": "5qvmfjiksHwvfjZrF1M54hRy5Divic7qL3yQGJXT4nP44n52k1WGcnTx4Jo7E3AauJY3giwyFaBoKTCGr3pZKwf1",
  "key17": "5MDNCSLGgSzRRhdmW8XqauxgVQoVnTCEf45V43ziHJJ2qw2i8U4nPQTi5N1MouXbgyPpCS65RxQbzAEv1ZPtbdP4",
  "key18": "2d3kdBku9tSQcLsST8M2mkE4fWWzndvE1nyNjAmB1rhvbmvgQhHYyKeT7xuMDurM1VWTcLYTBeg7qPk7puwNzErJ",
  "key19": "616PfpvJqNHPJQ1VDFpvogFdC4VUC7up3GkPLnCCxr5V5MZNb9nhHVzDaqjbY2FHacp4YuTWwXXTvHvKrmwujWS2",
  "key20": "3stFhY87nuJ6mT7PQnb63Jkpg7KU5xH8FaJwdDS2srTH9MMiu18E5PkGkvJQTRrxq92bd8XFnnsrCsgrrHPXDWAi",
  "key21": "3baBii5DpChbYJtTCFB4yCBWCa3UXjV1RiXCwdXdEgsa76TjPVv3LmxYkJBBHoVfS9pHXfVKutttDu3dYv8cSN3a",
  "key22": "3Pgx312zHAVXsRjipEggDKqXVFufwn3nDnDBgRsFuFtBmK2aB9mEG7tsYYSwFm7jb6DnHYVFykmaDC9F3SLqZLYH",
  "key23": "3vGewGwpqTc6CAPRtRGgJdLXhHom7QJHQH8Mw5MKQQmmYq7c1jcKX3ZXjyGLyFedrJMaRzn4LjHy94qwH9tJWX6g",
  "key24": "x9G8eG1XuqaKAvas3uDGGC3XvW94Bqm18TeYC2ihSRW31aNoiZBNz4T13cVXs1gKRxuYYcERwXEnuj59AyQDgn2",
  "key25": "3U7M3jHTzktAXb8WxnF98AdSbQ64wMfhxKMgTEKJig5s6ytX2BgmtsiTPRMz2c15RW9udgt63ezuU1VAbFkrm722"
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
