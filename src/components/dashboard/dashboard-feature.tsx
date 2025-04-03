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
    "4rTFV9kAUf9nNVLDL89ZcxDEJy8YujqCahct4i1JKAsZcZna1f1AQHH9qXRx7KRkWCEnr3g6TWSzukpeDAVzjudp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BzWcWZqqNStSxz47k2YhTygWry9FehcRLCotnaR8Pe51u9pDL6Ztq6nqaZ1RyQ1nr1wkYSdt36GkYt2LvZfGW3R",
  "key1": "59jjDFJCMFYpF281BY6RtJp7HTVmm5FaCU1stB9tSn3W3zTgYAydAw5MjNrwbRna3K2QzyZWKppNEG9Eq4bkvirJ",
  "key2": "42qN9UGrQuxNgBfFHifZxuozXUR7t1WSKnaqDia3WHKe8eEVZ8rzddmrjs5mKuNXRjVxNayfotN8XAzZpSRrcarY",
  "key3": "53cvjWEfM5p7VPqefHUBd5DSKr3staUvaqWmehnwfwJXm1moDoiwjERm6UbgfFWz2ETeX27iKNUCpo6GW2rEXR4J",
  "key4": "SBoh1u1R9LZxjgo16nwxWW565E5gK5CKJKdUcRp8DGnjieh3HLQfL9EmmYnPZ6ri7rALFHwY3fTruCttD959krn",
  "key5": "5oz25i21hu2eUcYueXc6sjRXn8xGZVgqFNcusHwUCiTg8JibaepYQSwQLREFpPx37YK4BchgvZPJ7qKFRqvCSseS",
  "key6": "5zJ25S2tT4U483P971nXCBxeXXqEC2T5DpfTjbmh1T3q5PiiNRaA4LJj7vxind8XMZaNNqAoUQnrsUBn1rfZUCvx",
  "key7": "5bdAFmojA6hUpnob15SfFivGASsXHDn6vDUYKMRGMwGotegYxtSmKsahMkZa5uaUDpBVsemmyohapbuzJdfSyTfa",
  "key8": "4brfVxuGsjCZmW3gnbyDNoKgFjYW3WS3MXtqU2SPgJ5uvF6PBXFPZ2pEDdUeaM6k1CKxRYywRck7ngxFE3gz3nDq",
  "key9": "24oHorGkvh92NVeB6Lo8cDNDHQ84tQWEjMJxYbnLrB4CLaezsciH7DkBgSu7FL6aNJuH7M3eukWm5sZKRQgoYfuw",
  "key10": "v1ieJPztZxKmuFEKwL145k6FJpe9VairgBAvfJKx3NCLLgtBvU7AZVFZ3FzEU6FWZFJ18XeTBJT6nvZ2JDTdtzk",
  "key11": "bU2PyRDkK52Ezo6SPjdUidC1aXyokH7asMS8K7jXy3mWcaXZoA3ACJGiEWgEEscELeVhwpVtyeTgGMrF4C95R1b",
  "key12": "2v5aTjdsUfbuKBiVNJMMdN65nwytZ6qsnbFapMgjQ6K4QAe76wxKNoguTS4dQPVH9MkLADQ4AEYuKR5Hu6J93G9T",
  "key13": "25BzNvqe9ZP9F91TxpmfEjHYK2sWbWiG1PxjJG6UpvT6wcMCubh2h6ri9J5AVVQHnz8fzsfaGjiNFEyAQHTtYFDE",
  "key14": "3RHFVEPKEMoWy5ZGaub4mGxynKzaiCSCe7VRyX6bjCAY6X8w31ZfxnrqK7uCGp4GVZ1iTXsmj7Mc7p5MdWbh1eQN",
  "key15": "3wYVCrDZd24h35c1SKe5R9HtdJMW8A3H2PQvqsZzAH1YjC7YjyQcK8fEVAjq6Dyiyou91ynFLcQPgay3SySw2zQH",
  "key16": "53KtskXjn9c7ku2EbCJ4iwyLfTDrK3jW1ta4sFS31ehGQsCNMawZhdvvCjPwQ5Uzo7Betfd3YExJt952j13PYHyp",
  "key17": "dv4CwALSdsSscuS8i22VsVFmziEWftJygxrMimH7CLXCSPCC2WsCNg3sSa3afhJuYt4SyNnw35tURaUDTTdsVU7",
  "key18": "skmFPUe9QtGE8X1AgMShMRxmaA95TPbqxBTQm1HzC5XWfkmWeji3cqLqZM2Catz5MWmppDLtsqRQ5pAQxeFSdNp",
  "key19": "3MUzUbrjxfh4xFGXoQzjaEiYmths4hfNeqMWi9R2DpXtjCYiHpR4jPe6vRtL4HNAigzcAfmoq8FW56YAg2WHER3k",
  "key20": "2tkHomsU5SDwNXS9cEMTkjdiETmwJGV3KAda3VZnMsWzL5wiNJuVSokJSSVypDzG8LSjuj3PZNPxckfUcPYDCD9X",
  "key21": "3u912c6qpEf38pxYRcWAXgcH63cyC6GoSRiBBoW813M1uGeyJc3fKb8KXMgH6BQXfit3n8CyyjhtBTFHX5gJExEy",
  "key22": "2SNZ3YgqPy4hmBNiehvVKgbwAYyczkD8RTCaA8XXnALH1dh2xpcUmj6tXD1nKTArmarmWiQtFetTKLFdu1o2GLDg",
  "key23": "52qXMheE4jLnbENkriSZYW24HUinrrZKYvLMScyaWoWu7miVC5ehrHm1pdr59gyLpdoPub1k8WpvC5sw8a9LGCb5",
  "key24": "5JUWG9ZvexeLWxhrSQpbJmB2uT5hR767FEj5nWC45VqMG5FmVvLahnVEwUuDDHmzpZKJwpdZDEKX1oiYGaVhKpx4"
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
