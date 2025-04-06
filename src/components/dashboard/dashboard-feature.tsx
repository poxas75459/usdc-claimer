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
    "2LLH5ZcHqauJ5eSkVb3HhSPCFi4MCxbKykCaTMEjvwGjwfSENu3hCbEi9eBhdHnzoiCoMt4LH9Vo8J58riPyaynH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g1VgNAoFYwJnvGYkz3QyS1yuFfwyDf14Vn3JrXH8ZrhQad362F3CcrVVivaozRwoQ8MUEhSUibXidPyoJHgg32B",
  "key1": "2Cd3JsZEepo54KdFak2XMa5Hp38RDmgajiVz4MgJCb7Y5N1b5FXdhZRZrHgXDHmmEoSWd3MKzFqviuY73CKX3k1w",
  "key2": "3D9gnztNQfPPqUWxxHWeSVz1qmsGzpS4pCSS2ngGUMCfsUXaWqoEoLtEzSKfRvPKcWgWtA13SGaHDokeqZPU7WcJ",
  "key3": "5A2DfsX7JLsohnS6kTDrD5jbh7SDtGnRj2Z418iktPAXZmQbsSxL14UwuRmUYwzhUYTxTgASDRCRVFyUcSoWvTxC",
  "key4": "4vtBUuSi7GKrAwUfGFouuNz9Zoc8eYggXFNT5pRpCGWbu9wM2k7CW2Mid8Jhp5Zo4PmMsra753MU1MTENv9mefB4",
  "key5": "5wDKkjUDVpGGhp4kN324PRjSS1k7Hi6UWmURHfYDkB5JUgvKvk1rNFDeWRt3AzSWTz5oq1H17Ln6Ph8rizxDynyY",
  "key6": "2GMNaySxP7C17s8tLJMH9Xwy6QhJY8CkNg9J5Jr4Mo8UA7L8m3jxik73vDjh34C5GaapTM5WofNUUjdbmep9A726",
  "key7": "3YiATsMz5Q5ifetJKMKWqzVwuwXZNzMbh5yDk3g1JswbFq2KTxEhjVGCWJagewVZsx5SZVFRfsTZN4CgpGhyALi2",
  "key8": "2p4hjHXVLetR2q8r3jV7DtbWem35aKN8eyBQ95Pwuyvx3WG3hrc5inMSQKWDBmLW2nJ3XvGMYWCyjg6CaraFn1vt",
  "key9": "61wSYBvWkBzAQ28PYxkmHQTtZNxkTS8UXX38wsY1ns8C8reS6S5PuX9cdQgW8xbkHpCe4A4xDcVp2xtWNrb3UFAp",
  "key10": "34kRqHrgbE7iYL9WDcGYcD3fA9qReTJjrxKhbhz2WPEpfqVnZ3T6MWQLBGyiBz4fCsEUQJpEnXWy8YiNEKDKnPhv",
  "key11": "cxWwHsYecnLFr85qzua6uLRs7HrsBWA5Cj9Z9uUPKpnQbL5FnxXu3wPpXFhtZnh1RA925NwWAg946kHbtue8z7u",
  "key12": "q3Hgi4yibNuBiwnorXdw4Ff8585fdTvQEq7AL8CNfGiroX2Nyy9iRuy1m9DcadufFcm7ASMYzSFwegbBdVNKNBE",
  "key13": "5fyGffobiH82qqUEaMiKApovPG9rWALDZ5PntTAnUZtRViDvkzQCDvv6jtcuApgt3VTtFmeJpa6b4xrPfA5QtG4D",
  "key14": "5FAPFvZeknn897PDUvVHR9rVanjxhCMxeR4jnQBCBAWKfrFxSjN8qQwyXv4wecSsWxd6SCNouNVJEyaJu3Qk9KQc",
  "key15": "4a8Rgg2Fgmsc2AKRAHhShu8WHG7LF2bzVMsNgANB5c3ocevdz3tHVKqevuXYZ3jGf799oCBwWe1DxyqJSeKz74y2",
  "key16": "5FGtnEj4Lw8ExH1qvjzCd5mTkTKpi8oLL5bhv3Kyjj2uiRTDWCWJGamJaCZsDEVxxDypjnDMgdBrCweSZJJwgj46",
  "key17": "31WEY69X6e5f28ExGiVZ86jjVJUsj7eYEETU7i8n4oicLPQXkg5nRUpZdYaoSpTUdVkADsSX5bBWETPEFDUbN4sn",
  "key18": "474dKNeUfu8owEnuZScRVSANXpjQCHhwagWnUyC3tTC6M4rHdKQnKok6221jM7ES6A54JcYg9j9eCBQkQ5xd24V6",
  "key19": "4NTs5Ec46K7Cgb3rkf3b4c1Mt2sJMRkmFLjxs4LZT1p4Fsk4voz4oJ5vDapybYTWHzR5DjRy3HWmS8QczFbc19Le",
  "key20": "5tzDaCwvaySUF2KbQNZK3xmscNR8oFLdkZQmP4SJRC8yr6jnfBLgaDZuRNc1ZnS2r9kDmhJ9N965PfpZRScGtj15",
  "key21": "3voLsbTcVtqexD9T3FZazFeCECLYNwB77aXa9NY9SRweFvqMSXnV91hrLTwuiU6s8QUCUGxrbic1oTztq51ZL2K3",
  "key22": "2rMSnsQKi65mUeDSBSJK2apknPfTgD93euPQPG1uXezeJFoCDtv7Uu3XsbaGDMh5EEyEpdyaLt3YT47ygDkHcrd1",
  "key23": "3M2YwcSvTVS263piZzDbnkGEvXvmFi1328SpFHLMG7Qn3giEwD28DKf8R6gFCBHZRMUynrG9TkoUUGFLWB2zWSLg",
  "key24": "3piAM7dC6AgUYaxRuYs436FuZziS49ziei9rSb2ys1gfmpSp5PdDUDMfn7ptTaK129XrXRGvnvQghoECzu11VFAP",
  "key25": "5g9MpErqdQtLGYAg5oRjxW5dV95xTuAvogJnvASu5tUXAw55SfixPxsWZEqkiYzeokTyuR6k8GLor9Cda1gSCjAu",
  "key26": "QHfe7TeXKYZDEmMoYbdazrzmix8KtpNbWjAeWf1j2PosUVhcg4qgtsMhij6pLvYX34dRUhb11VUsjSSSZDMP2Nm",
  "key27": "4CdBuX1eSg1LSRU7uDchrn6Xk8nuWYmUhWQyTc9dF97azroAN9KPviT5KL5UVbTYeWH96SzPpwKGVz9cbxnge1jt",
  "key28": "3qZ5V6ukNbsYFgCapkwQAvkDiEYqiur84pzxhJ3KBnM2ruLZXDGGQARVNRXQTWg7ZGwNJvq2dwSVY6yhdh2FJoDi"
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
