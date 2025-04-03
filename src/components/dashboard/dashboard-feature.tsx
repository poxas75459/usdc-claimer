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
    "3BteLh9uBuzpFYhtk168tNshRkT9bytBqW2pc4JG9gt7EQhrJHtbmdfFWM9D8KzpTksZxgCgaPpmSFLBMMK3rxwL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D2knNZxiJZf8X4M73FADWNUH5ftNYareU5vqkreghAvkJE9xr1Es1bXyxew89gWvDuFgxj5uqKRiGQmbanz4uQX",
  "key1": "5wNv5RvE517hYDysw6X2aTF7XFFAoyEdyy1w5MWVwFTUDRCYX23FXBX1yfyi3c2ARAoGb5vUkkWpj8gRFwUc9MxC",
  "key2": "64Mfik1WsK1FHUwJpGaAmkcvpfJxJfyvMQ3FHKS2z7FkUUcyqFWHZVqsYpAVR6J9yow9QmfJ3YxHqAvY97HqZ5Wd",
  "key3": "22yfM4dbuVRcBEyfjJJehkmcNpqU7ynY7DNHhw7nqphHb4VzSk51TSbXPKNo6LhhByYTFVgEudKzMHB1QYaGudVz",
  "key4": "MsoTfLsQdNhrEjrCwab2hNArhfE5iYioawE462DjMZijPF7R84ccsFTjoZYBvz7gDxPn6zfAkKz1UQtbwpQ4vuz",
  "key5": "TTQ6wzCexcVnnmatNkLLvyC8JBFBT1ygijUcK9FxNc8bSLWHJ3w4QDTG5n3CfabnqSx1SjVyiEAoM1eMJCSMY45",
  "key6": "49mqoQkVRK5T4BAa1e7WCRnG8mQYP9kgk6NrQuQbno9bmzNhJoZwdzzkmW1iceauvjRzt1c1Cg1oss9cHmDmEJPY",
  "key7": "4TvLCfAJVXydYsQ3eHAheKFqvNqgsWL3BoBAw76w6vZWRCNh36WeBXqhDfiCoSQCETegixQMEdX2uGcoJ3B1LUR7",
  "key8": "4XuDYbh2tStAim8va1rKXjkfod8vQBoqXJwASEa5SjvAgyimGE5BdcfCt1mYFDM9jKJamVpmyyS2pK2CR8oFkZZM",
  "key9": "4tMumzMkRSahGfDxHX5RA36woqZNb5A7Z2edWYVPaisEvAYoJcjgNDz88BkagiRY4wmbVoCLBxzMmvq5HBGuUWb4",
  "key10": "22QsaJC5s2vMNGMnSfkYeyBkHMRcY25VLsX1cieLjz8Xoxowa5Kmso7KXg1WbofSdDHKrWq1Fhn8kPZh9fhKe7eC",
  "key11": "48fAztKZSZyGJqQ3kGJJTZ76PaZPNC1dQqtF9SmKfQnPMDmm5ERFHfymPbqjt6vVNARoMrjnWBjQsMiLz9i1Z8Sj",
  "key12": "4g55vaAgyu1CaZUyFrDk3sbYh9mQvc5vbXpPZJLM49rqiKahHvE3TKApPYdfJvCd9zdFhJfY4dmqjfx9CEX1cGHA",
  "key13": "3LzuDQKVYNoUgUTgXKtGsZ3Y8ZodoWsawUNLHGrCkZqwsRWkw3cKScopV9UAPirSzBkTUyeB45CZzuynANzfLe8c",
  "key14": "4ZaKnUK2Um3qwRL3BARvPGh3ycxp9ejTzLVKC6mpbhgtXRAUaN7dV4t5Cby3T82gxTRLUDhKsbSTQdWv6Wya4DGx",
  "key15": "5JUBrrctkmSCdzLXFfAjDef6MWgWdXA5WS9dq4Pda5fyoow7HJ2LuXkwXXgbHTbD2nvsH6PMPhvx1QZtEtAuEiR4",
  "key16": "4UTxGdtK8gcn58ZJNQo7N8zbpZsqPMBc4Xciko6QfDthAcJvta18HZWtrdDoe9az1XBrm2N9iWGHRanyBeTGGxzS",
  "key17": "4djeoMh9yrLzCEFqSWvnAFMHbKZh2cBzjyB2A9xSQZ2Htz2mEaXD4cGHxqRwmvEVQ9wUdxbfxvr8PZth8JKnJSkv",
  "key18": "477UQMNTiRiYLXHwTN3NwzpRAVa9zF9XZcsegy3nyrMAUoRUSdTytKG7HWB5SCCbfneiFxL4SiFr8AL7GixB9ybv",
  "key19": "2ys4nNkY3PVeQVXsNmq5HoYYFioKaTVKBEXTs1JGcPenp4MBUyaJtfF29YwcWtotPTW5YBgDpyHLzEK8YaoVf2oL",
  "key20": "5kdpLzW1xiDdC2hHgkhBHcVcsBWTjpzAJ8zRXtg3jh3XAQD3pw1SuepxcDWKzNoos98PAxhfsimHjoUKjoGJ7Ync",
  "key21": "qkHLgvy8U9vVdHm7z7ZrFgnwpzH1cRP5CcaYLbDiEpozd4HQeDc7NGrcw1iJAiQrCbBzBHCiZKDv7MiHwfTZPwK",
  "key22": "5xzNs4b3GQR2ui9M9prFTMbjDecWJSKVA7wF6D9kv5ZioXWkXuejMZHjNx6KoN9m1Jr2kbfPiriSpJmsEahZ1ybw",
  "key23": "47FUKYDQMiT1yrKoxgyqDqk1vbS2C4JwtmHNFHJ4nYjKhfC1mRNDYsgc16LkqQqypeZnH5Eo8HtUjGYCSZoFbAmo",
  "key24": "28Ytt8toaaFvqqBU3WUEUmXcAGL4uhJwA1LqyondSjQciGdqE6rwpq9U36gam7dnNzJRjFUyQL48Qp2MYuD4LZWV",
  "key25": "5oxqS7Xc42kpbga5zDRLzPmHas9sjiGirJw37EoE2iSQU5ukmDHdi12NpYTwKqr2pCW7L4JU1jz9WAtaMyTy3t3p",
  "key26": "49zuV2b1Un415GHgfvQGV8SrdVrMKCEmsASAe61TAoa8w7w7aLrEVPNxk8y4LKi7HL9K5tP75rGwgc3BBjAbkpan",
  "key27": "5SNnyeZ67c3b1o4ui5w9qbFMyjq5pnot92MgZiFy1v5DDPzg498JgR6xkCFz6gBuNbpx8RVzbar18zGnz9eXck8f",
  "key28": "2dHHaPwDASo8FDcc3KMubJSmtEt5FUMN4ys2Lf6vvgArp1gSSShJXm3XTUuQiFhpA4m35PDjXqNqfTHsuG2ucKqs"
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
