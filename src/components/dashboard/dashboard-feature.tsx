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
    "35xsJyLpD4CkKkQfyay6XtjbggbBBco4dxprRpRxQCk7t1xYTxYRwWjsieopU7KGjXfTtb1nUSWvQiwQphkWiv81"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wrtPeMibpBPdDib7AWczMU756fHJA8wdRXWgxbJiXbXztaRJtpVohrzSfLjuBFVPhrUwwGncAXQpWE8qVEdjhfd",
  "key1": "3AobdDqVd1riNFXeqSHaLxgKBvstEMEHHTvHUwUwnyHaPBusQrR3u8jQVJj4iP9zNxZk5fBGifgh677hTDBH8fcx",
  "key2": "3uth8pQSzLi97bx6gVBybpEBMsJ12PTAUDWaxmbWRvKM29BTdoqfLAviGbc7jhYJLMN7xKmLfcwqDRYBcdy8aNPZ",
  "key3": "2R5PjwUHRy8JSAc2xaKFX4GMUPbSnVT3DfWpb32VhtYqafWLZ6XGp1SvpXUP7i41XuriwL4ab4mqKZGJ3QzLnXkk",
  "key4": "5sZfrvmmbsoTWNea1UATqDjCES7Tx8dor9nNLkzHw4fco4peMriiGRzusSkrHX1WvGcEJgTehbFJjdnbUhQQttB2",
  "key5": "3T9SXhB4dU1Xh4Ms7jHfMT4pn5NhDKXS2Xr8uxGRERUwPU3p6k1SbqmdxVfEcopYnKpywhqeCDHAMGD6Ctb4gTGe",
  "key6": "ruurRTHRkm51DHnERt1QBjrgZjo3Sxoj9acQKwxFYZ22wFdiD6syNyv6uNGDKmVyiwdNSXF9EsGLfPtpsNnog92",
  "key7": "54Q44SFR33S9hG51VsP2bpDLJGU8zPT1AuSXJ7rSVoNvmWByQDtw8wcLiXa13thuuZMBgLNE6vX6wJjY2v9JkBZe",
  "key8": "5LopoBd6wc3rZRK2TZY4tDadvWY9jV9935U4DN6xiQ55CiJraxYv5JVMiNHqgHLxYP2Znwus9SZMqcn6ZpV7dmS1",
  "key9": "j9Jqb64yYuBxoxzpu5TUG8BhPwFavFLWNRiqZ1kMiNENWWPjBvbm88hShKHpYgay4TPzbN8ajet3HTQFZarhrwh",
  "key10": "4m6VW1w3yehpAAifaNPsWB1tpnH6xuEi1rZNe9rQdAU7muspoDiWRfJ1d5McwTyEun8J2iJdj2t3inY132TVwhFt",
  "key11": "5x6XohVZZr8JhcQXvwocfJXrnyRFc9y9gkWMkvQDVv9afFJvhb9vVaQKAsBdMkDqbYKF9vZrECxXngDZcLQAKsEM",
  "key12": "Pju9CqA2dV3NRWrJHzqJo1QbKowSFkhGEcrmCbu7anyDX7fq2jtymr8aqWQJy4v7mC5AzfYTNemVVBYZVreLq65",
  "key13": "hZkJ87m2hxbCmip7BS7KD24i125pMscCfFnwKdbjQVaqJuva66mpR46dfSnZPCXenN1xsiGhud9kFsNtqAPSJSw",
  "key14": "4vzqd9K1B24LF7B4qgcZ4c9jj3syfwCBJuLZpFYV3aVq5g9RLvgi28rJfimX2shEocQfnPTkG8CccaH2JqUPyP16",
  "key15": "39A3YyLrQxAaG6ixEtCSdoiT7nQoHFrEvxuq77qbrmDHb1W99Qbbhss1hnyhsodaVxSU5YvugXMwnFepHbTSNKN8",
  "key16": "2C7gjvLTZ4ktvgrfhypP1BAar1UKvHpiFwejwHDZafEMpakfDmvbqZGQTCbdUb1eSzkZ71TBd68BmahixcKoNJzi",
  "key17": "5jw6vSKBHiZELAK6rkffXs9HRak3KR72Q3DH1mj11puKx17ndB8ASj3nWWQdwJoopnVXvEyXD2wFcgrrjsmPHXPu",
  "key18": "5RCFApQCFDeiU5mEpz6fggr6AfFST9ft3dLLyrmoQQMqk4tF49h3sQLai2NTfFXCTj4y6VmddanD5aTKPyYc5dHN",
  "key19": "2aQzJjj5nQrFpdxQTucnyit3keQg3yNgHDkeie7aY9PKZqv2hwGsZrmiKxLevxy47EsvJnhrBEJExu1VZfweTazi",
  "key20": "5LgdHnzgvHPUMcyYkahzo4LFCNRs2ViYVE9XYfUy2myvU9FpfbnovRpnfo4Stk7qbdntAw2fcWZmMEcZX5vZ5Xnr",
  "key21": "5ahfNEByu5PtqVn3deQBkVyE2x3XKSVVz9kKCZnZEKRLXdCkh8afRXdZfBLb3TBn7yEGBTNdJegF28vs5Z9hBwUX",
  "key22": "5n97KvHCgv3MSh4xzkCfzjnd1nqYeRyrbhHc5s8nNio6DDG7bFTgbSiuqh5fuhdt1WaeUe5cMMkn35VbmcacRENe",
  "key23": "4RvkPJrANTPSrBurH8HbgBDq1pLsUdDVRnhebmWHhYTPaUWXj7oNzgZ9PJdA6zd5GQSPKmkrKPhqH7h1Btq6MMHH",
  "key24": "2HJfkrfCV3KxPbZaZrCsHupCUzxJZTotWtBqf4ttpPQZdcYekCeJGSag2e7cva5ypR8XV3tTE6cqc3fxPwG4U55w",
  "key25": "gctSSuWsR69qhc3nPus7TMeHG57HDuQUwFNmkUTZ2RMBjBjHhRcLGNNRf9v3yZdyZaj72ZJtBKYL2jkrdENpGdF",
  "key26": "3QdBsTonNpLb923f32vXAapGGNYMPgVdrkLfqfwR3TX5Z2Z6renM7F8NaTxF9BQssBSYExorMmM6momg9jq6zpea",
  "key27": "FF5ydVpipV8vnQmyvmeAEMWNcccATuQSSTmwf4F9Vv8Zkttse4m6gApA96KmrnsVvF8XKsPDToZzHRTqX5zwGrq",
  "key28": "5LTtdbFSAXLf5fWz4X5isVneAJksUzJNbMk87x3jvcXFbjUWt2bjQR1aCN6JK26js1Rfu97Z8BEkuPJwo66GppGr",
  "key29": "4kaENbz9HT9aT1wLjnC3qyLJnqrN1MzgybLQSjohJLzhjFTpYVaeyngvjKBWorGnvbB3uKWSztWon86Rjub5Q3oq",
  "key30": "2mPq4vdKWRZfpQ1HHtnAMj46jG4Jp2udAHfVJA278cawg3dVrhyGip27NevSaafBm7QzYUx4vUdBEKMpDJY3RZZY",
  "key31": "3LemRZZeBUqyvAa29tEXm1Nktrh6za4cDAYyQtbJrPLXkg2zSM3anqcSpmEsyPv2UV3gNvxReTQ9n2ryhfQLgW6f",
  "key32": "q2KbVkT7bBj97bEEytCbmxkLkcw27AW2DZefaakerh8eRg73F92LJYWey1fxEX6RZ3fsR76Hitvzo2mVMjnSb6Z",
  "key33": "528ZLdMCnZqZdZYKzfWep2aL1UYR7aYRmYV36RsMacrLD2xRW8QDrm4qHwfXwGnzc4KfcPtqD366xkz41HNQqyXq"
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
