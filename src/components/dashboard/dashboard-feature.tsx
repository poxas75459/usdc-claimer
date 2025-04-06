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
    "31j2MjTdzcTckcac8pDMz7t8dctseKJvKM524KanwgxbAuSgE2bosfPTqVbKpEuzSTt2tbSwVFD1H1DEkwuLqaN2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eJAyG3TBAgdwHxXW3xxpRkTMYmq4zLxPKCvJnT1roRQrn1TF8RFPhWiYmp5x6GCUNM3ap9dNXWJfcYaCnuiL4kW",
  "key1": "3D5ajMQi2ETUw98PypgxAT8TVmztUwraPhAFSPhTKjcSozWhdb6J8m3SZPRcoa4MMf1xfnFUGfXskM9xcupeRykX",
  "key2": "2qRQxX7QLvt8Z96CUgzmqwTUW9vQUkairBW2EApdkMvD3oewaxqJvzm347cdycsBq5HyBJTsxMcdK9932Q54tkt9",
  "key3": "3mDdVJ1GWFC46QabZ6UicFJGMeNN8vmAmumxqdMyixHJaNbkkfRg3mSRhF1x7ob5f2hiLoeBYNnaWStpAziD9nf5",
  "key4": "2w9YibUFidv6naBe7LVuh1eEUAMozTgSe5tzVDfDd65Q2KR5emNoHs2MjCc8xtx17xQpGCtL4LVagkyYAJ6osQ8a",
  "key5": "328PTwYLKzJFKqJwcABeCd2F2MYgT4vM5zHMVaySQYKELB7Zg3rTzUkFAMPZBW12DS3PJQNBS6S72Fs83nVcxwBv",
  "key6": "2BGCof7Q89DgHx4VB7QitoXAm54neVC5oKVmeNcg589kKju6tSkHp6H1m75HtstWpRa1cMyJgRvvUywrsESuFLZK",
  "key7": "2cxvFtWt5MPQkQuoi3CtFzsaEW269KrxgYYtHpmBhbhuVQ1kqPbANPuoQxiqxuNaDsDKFrxXuTZajMX2AvwZ3kpD",
  "key8": "2jqACroRjKWSQMpbVuYjQz9dpKiwHPZ4m9vDV2kzGDzDRqgvzWD13eZoZAiVcFgkDK7rmmUDpTbbncEpMFVnmA64",
  "key9": "5xqnBAbXXjcVxPG13vxYCmisdwYPbuYNHyfE8j3Y2EZeWqCxQGyRPrYAiakLRHz4MRsBNJKjoXJvoFFyMekFk7cd",
  "key10": "22YNPG46gftzA6YJksEyMCJERKbstAe9wDXmLD18xnpSQJYELWUkPcHXbZ7VvmqwXGQNGej76MfRWohP5LS7kK44",
  "key11": "4vKiEcNfbrQyGfVoaoL3iEBG3ppFMqkfrYxDxpaLexE8RfAcj7tLXzKwWxM5XYBbtMj6mQsng48gQ13FM2YmP5ti",
  "key12": "5ZgZUpibX3dLfXhK611dJNbFo69xSR1DyrTX6ccQKw7g9oEDpmhXMpWREUfK8K8D3RHSg6pj7wBQFbghnmV11oZ8",
  "key13": "4X9Xw72N3WtZnjGxwN34JLe4ARok4t6WddS9mGWAxcZG9DrhD5Nkz7KGJY1mft1zMs71eAPN2mbwxCQgMLNvihGA",
  "key14": "5HwKyAMuwNcH1LvZzi3Xwda2sV27JSA6xFCTGQ5WzTyhijLsb9f9SXiR5Eg8Jtrok6nPkK1Kn26eogZs4iVzoudB",
  "key15": "23MuVYxMwaySuH7gfLw7r4r335hdd55RCAfmsh7UQnidmPnpGMZD7G7uZjuHFtCbX7HeFwwPsN7dUE6UPuEr8vHi",
  "key16": "55hUGs4oBoCLoZkhoh6wFpqBircfvivxjoZSUXWdybN1KxJMiPzTf6cmSUgcrvbso71NmhNbuapfWhmrAEtHFUAJ",
  "key17": "3zWzTaJmRznu5VyCp32s5oTyPMcZ8vyVmhpedA8CLLA49wjW2zTSwazf4ApMPvRbJUdM82LUycsEExJ16aCD9wnm",
  "key18": "3sGmZVP4bNCQF8a553q1RXHYkHhZ1wR5PyXbrdyoEJBgTgYGAimPWNVKjFxTqcBtveyog6MYsfeqqZQd4AQbTmiR",
  "key19": "64716AFFwDy6fVsmea9QMbUkJGVd7zoE9YfYC7NgXB8JST6381isqnUnDosATfYMvwPcKyXvsBhrfw5FRniyFt2J",
  "key20": "gLSM8hUrmnzyAGduGoyzWXMJJG88ZSaV5QBAToiizLxsGHF2aGHPK6ViaZYC3foLAPXQipmR1nGk1SavvGweAGH",
  "key21": "3M23FAPg6oMAZhx5MY793jJ4XH2BCh3pAPwADzFNAD42opzs2NLTBMkL48RFz2xTrQ4eBrXLb3VprascBtZezLgv",
  "key22": "3HT9yE7rTDHFiQnEXbzHggcmrwipgpu9LtttGpvWn1qg1e4vNikHXrrfBuLXDuV4EBK1mtUgLTJFe4TMkopfiA6p",
  "key23": "5bNM5Dgm19YktT7Xt6wV3gFe8sE634Rfk9we8VktVpy83ubMzHWyGkyTXnMzSVKYeqa7R64KwDy5DYy5emDSKsty",
  "key24": "3Sm4XCW7iPn221kkNjRNvT1QLAQoKhHmXF9bcTB6gqbaFCaNveiJyXoUW8shRBBPnyDBKU19rNWvRudSg35P1QMj",
  "key25": "2BUsR5qfKrKXnotLEmutenqVugMyBNV8uHKTnum3Usx9K9bHaghsxPMB8pTwEzN1Uodqx82tZGjM5PHMGeaqUuAx",
  "key26": "3Yk7WBoJm9Vsnok28xGWFwjqiMbqvbmticS2n8Z81mvUXXa2M1SoUFJUtCVPAHVRKT6Ywm34vyPAvEYN4EpD3eaM",
  "key27": "56w4D6MDXyjLKRaWptuvt1woKjxTyGdKTdbEKSCvDQcdgv8VD1XNn3aGYmnEEFfArPX4NvPV4HJMptZApjKiM2vL",
  "key28": "4JXnkoq83JCBEKt9gaV3CxNv3etCAV7KFwtjqsdyeA8Uz1ZmBkpY2LmSj3Eq7k7na2p6q1oDrqYjBAkmPRZJmtTx",
  "key29": "2U6kHvyEUKgBx7rzmF7NL1CTnKbo2jvg3pWBhu7t5JwEDGXRCq5f5aFkCxNykTLfquDmxp8RmryMn9QLUnmcnQUy",
  "key30": "3hyxRQ1JNqQbb7pMFWaTCEScJgQPyjqemnyYztrfKVSNyX5kySpukxU7RRdFsUuHWZqB1utRN15rVFryHyPSZ53N",
  "key31": "3qFqc1oZ9VoKrMemQ2RUuRMhGfe417YLkNgfwcosn4PALb3gDYRUUXDNjZcY2jp2C7ZBJxyceMjER1qaruxWATx4",
  "key32": "529ikJUbStyeMKsFNLf4P2yuCR2q7D9txTeKm8wiTNWnzzHiWcNGDXMZdLjQbYeoNGQ7mw26QDvK1ZNMakC7E9u1",
  "key33": "3AqG2TVNDTMN32UVRyqfemLCKTFurZPhG4Q7yJGG4jXngZKzT8LLnSYWJ8i7jfdAgYkDHrgoeMfaQwGZHXs6XeB2",
  "key34": "4CkX9b9HfmA5Mqyu17Pzoazw4Whjx3txEGtH9yT8c48VyL8oQB1cwj39Qq6cgWwt4vWjRNmjsAZGysUCpCvunG12"
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
