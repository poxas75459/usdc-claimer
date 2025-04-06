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
    "383YQy1J1okiieTNBzeULfYkLL2CtDwGXTgAshTqhX2wG4cUp1sub6m2UDYeteH7NBcLXV3fScDJB8CDiyip4uL9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44innX7KsbRJkFMEAK3hKFA2Z45WnXvtYD6oLDq3ACwYMDGLySTv7akufYiEWBBX8M1SqNKGHutKUnFrNfiQr7DK",
  "key1": "2qcMbtvugpjGQUetfzqQZqTDP1yFAEN565EpiSt61iVKEBiZac86cQ35zEEP62RGm7eTbF6aW3AZM672WF3JPpvn",
  "key2": "2JDS2qYbHei1q53cmvLuDUyFwNynYAuYBJMFHWymYwf8AUxRiDDZjNCU7Qf2Dj6JbtxixVbQ7GW36KCNULtn4Vqk",
  "key3": "2yZaBdccaTpWAwXaYjhD7WrEDyFWgroTbWk1djQofWHtg6aMJjjcfvV5C4HGJNZNpTiZUnJXmDwupHYk5Eo5NSwf",
  "key4": "2XaSkCdZduQ5ocKUntn42koWP43dDLfJaAvAqkqTa8rVkfkYeHk8TuntxtMGYgfinsx6CPXj4AJQgwterzS1MQLk",
  "key5": "2pH4icxWS4FUqpxbpyf8ZmMBu7hfW89KYjxmUXZdoFs39eCHhrFpX9Lc7hBbbgZLShsRtXc5PQpuW7mJC7GvstJ8",
  "key6": "9PwENPrewgrezkjRoWbasYou9DyNzkiGZMc9yfKdja2JpV1ht2vWoH4GoX5H9EuzdYZ6cnn85EGT7EfjVYnQJvH",
  "key7": "yszoxYLXfuSGdfS8kNx9JfFMwi22d5Aw8tJbAaGQkKpLdG4m6QVw52QodE93z8BVCJrG7i5mMMskPedtY6aum4P",
  "key8": "3948F7tXuVW43xHeeAGkz7J1JDxtiN3kpKBTVGMt7pdX6YK443EMLoST1Z1AuJM5LnFqmtsBXPhd48qWpnhLDY7q",
  "key9": "4k2nUYT31jZKtmHhQ6ABVxBTU6VPEy94ywZxSrR4h7QttDqHmQhcqT9YMG2UNLgjH8Hp9DPgSb1zwB1SAqDGzBai",
  "key10": "25R8M4NMyACA5sxdSAj49SW7YSvsC4bDS3FRB3RH8VvL21FtCDkZGBeWstj9SoSK5o9a8QJ7pd8u7JBhYmuXBST9",
  "key11": "4gzxRpmxfvzjYgMTgUxXep8vtzBbAEZfDZsuo1yhqSkxvXb9MvPjUxyJUCSSp6pvhL3hAdP2jcDZPdUao7fSUweK",
  "key12": "4gaVZ87HKgPXzmSaZrL78G1iVgjkwWzadG4eRbq2RAnF6s2G5EKGKH7ADnwhgNT41mhEnMdnkKDTWXnwyT7CEGDB",
  "key13": "2N5gc2ex2qrk1V7W4UwD2BenLbdJYiUbREuWkiJHgWFMksmT3cbCuvXEiVCRSYvxEo5TWFS689gu2mzsQvPLzzgF",
  "key14": "3Mk7t78gkwbvRG4TdQ8K9tm8ANt1GybJJtwnDprygmpAn57MmYLrhUjfkHdhDu3Zo24L8phK25ofv2mdcQiLuqA6",
  "key15": "4MQP9aK12sm9a6LkpyvaHp7Fq3SGiZgL9LAHFzHL3ssUbothStwfrLYSAsFUWW9Y9DtG7hH3nQkpDWBcYu8mhZLv",
  "key16": "4pGhSbCZqWHuy1cf1f2PtCjsvUjFeWcMw6F8khMogjbFAoKY8o15vRRUse8vGhysPWjLpAyo18dhXjMDHAfR6rnF",
  "key17": "3WzRJmN7PenLYZLmSTnBgBvtugjy5cwtbHvwtqUnTR53wUYMeLweDBbrBEzWpruoWaoyjZTzLutpdv66RmD8wiqD",
  "key18": "58mip9ZP8imyTBdeRjwqF8Pe9pGPBYgs3oVT2JEMyEZfKG5pnfvkpGZe14fbWXDgcJbuCBQpM5ByqH1w72nxAcU2",
  "key19": "Lwryqr4LYPCbPnArmgJoNjQaN5X1vsEG9aYdf4xSi18PdW8qzgWV3YRdJq4GdfGut5nyZ7wp6S8nqonyGVkxJYJ",
  "key20": "34NLpCiNSsuX7yHhkqj7Txt2GWvhqPY9gxj1fNN4My46hQB1oqaZEyd97yFYDVCFLxJd7ASniZgWZ3QaQQTNXgWV",
  "key21": "3NdYYRDYgoLKYWUd7YMfdXJdwaPB5kRHb9wooUEwPcRVmcdGYK25KjU8raEZUi5VxUNWwMpGDVdUbDmDFsxLM91C",
  "key22": "2EkeuSn2AkfLh84crbcfsNcRuddTVKqheQ3DN3AeLKtDyRkaKaB9LPzG2cW2H1rrpoZVPyGX3EoMou4KYKeBLux1",
  "key23": "2AcVqEbwN4pns8tz5dnoK68VekuwdUQsqxS5cgKc5G2mPVyjm1X94cs18WB22qLFXQdmAMaQsZG7YcvBkRERiasR",
  "key24": "51oy58CkcZMWp4RByqD7DrvuRktNipK6KKsnkzkfgozesz7uxRpZ3f81n3CTkHwJo4bkauMrVrfaUak6N3eobPsT",
  "key25": "2yKYkadSW9c7mrFnrxX8HhceHgvqqQ3o5pmbNCQ88djRms5xbBYYqLB3eqyBqm7S7Zgjc6mayybUV7oGAaFNoecd",
  "key26": "3s45y7EYrJXyrZBnkDc371b7f74WcpQpzd52frMfaUc3CjtuG2uQ35o1PwgJkc4iJd9z3THcBh1wN4a9AkTCWmXj"
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
