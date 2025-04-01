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
    "3NbhTqFR9gdWMizWQHQMhCQsrPKBNu3yUhbJSkAuhr1CpqFaFftAkfoir8HPzcEX6yk4aG8baAMZcookCwCkQ6Pd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24QY3yBdWwPiNX1nYiiW5JGgaDqSKYdaTcPXkoimXm5pfnnGrM9VeRBofA6toUS3uAmA97oV7b57wbKuqf8Yuy9t",
  "key1": "3hJttGB7JpCt5H5GyQzUrLob4B5wDvYhiKW4FXhMTTQwLfA2aVarvFPWQwTDMqTupcnh5VmB3emgfMoAZbL8z5a",
  "key2": "65NrxJiistUENbt6KukEiP2MGfZV6VracNhpGC37d1a9rJtv52eDiQKYtNr2Lm5ikKGftFDvwmSMWK4JNgE3V13W",
  "key3": "3W4wA9Dz15tWt9cGVja7YYJYEG14smBUr6sskwTdJJY4raE2T3LV9q7Teycdvyftkm1yHaGMk1n75u7vhcNCRULx",
  "key4": "34qV1TLpW6jbEqHPzDd8QZGfY9quYvXggzcvhiEB5fDhqVbwRhuUcShGtMMs3yrtibdF4PHBToSrTRe1N67vSU58",
  "key5": "bGjpP95FeeC1qfVQp7Vfj2LgpM3wa97XqCAwLdGWjLPBkadezrCiHHapdAgNnfDnuHmTqNyKtYEKKtemkCYhy6y",
  "key6": "3kPYQDsABKQ2aTrz1KqzB9YyvHLQLMS1ZAjeG9CK7TSePLfxj3VjcHgEvnEhzfhJgKs5NmdMXMt2akty1if31Czk",
  "key7": "Exx9tVcTErSh8gufmTEsH62WaJbq3zscVkrbLjBdATNBAUJezu3bGmDg2s7GX7VdnS58A735eD7VRZuSNyQbb2g",
  "key8": "5NjbPEwC1WszwKiMEAVfnSB5wrdD8dfdya3RBhfHCWgAFwWv2T4o2hAAL7dkPmsUEKocEAy4vSYMdZFTWJZ7bRZP",
  "key9": "4FoKxo4ZCgmREGa1vzVTPw1XiUrCQGD3agqXBGMdMD93wtXYBXTb2vYogRwiymHtZMRsXff7FskJahoYL557n9DB",
  "key10": "5PANcjguPgpXKexuDyU9PYhEQDEEeKL5SnqCQ5C4RRz8vZqjzikq1D6F8A6xfX45YdcyDLVYV7fhjtAruWQemxDs",
  "key11": "3h1QxCxanMoPR8R6FEAUGJSv6jWVF8uSSqRBQ2bsvoFzV6FDqYYbUUHyh5ioZJV1JEyzDnkfNBVsGSYEGD7dsLv5",
  "key12": "2Q87u9gUB5Vvt7yc3FxUGQvw36JmqzJzek51R9Pj1GiRz7btHLJh4kvtBivFyQPwMeu6QwRQCQv6JKXgfChbKSeS",
  "key13": "5uu5gHqBGB4TPYLvxiMPDvhFf1SptpATqQtUXwJP4urmYpxYMnUNEFvnrkuB38vvZcta6MneqXuGfXTVphiHYDTB",
  "key14": "bxPRirAioArqGFiuB4tSQJ4cLK5XmE6Ck37xcY2DiNN2bba4SN6cPKLdWFEgexsuti3JjqFDw67wYM6dVn9Sueb",
  "key15": "VXwKvEd4bDwEiHmB5k1RFfKMBe2e9Z4GW5zRYAEWXaYrg83MyEfLr5XnRjegEvYeFveDEvrEvpCgKd2EBP45k9E",
  "key16": "3HHTR7nDpu1yww91G6CXkjmgsRBB158qDegE8xuEQiBQAjnkS66mZ5pe4cT9cZ4TjDDN4WneTKcmPm4J9FABQG6m",
  "key17": "66UfWRGSjQ4RHzFgwm1ovcFZoapBLDNkhRRvaDnjDM2M2fkdbq1YXYNJfBSjoRkJoHC3vaT241uLFyj8hxmfRyGG",
  "key18": "3ypQ6PY1LFi9HsJYayjjSZQ7JXUT4TSm2AGZm7CneN5y9VsjTx23kmVJ4S2LyDsxjPjfxwmLwx7YMCwYQHeBDWjs",
  "key19": "3BwMCD4XajGWkm1N1cjCTdSCbBe3R9U6iXbHMuMJeNZenSn8uyS6KXNtxuqCi7TeroPL77svD2iNHK76aFmxZ8ij",
  "key20": "2LUBJ7wP6D4sciZ35QgaRWEHStviENwsRTX69YTrEdWEwY1tun9YP1QrV93YwCPUMyHCzgr5ewZjCTJX1nwGwKdq",
  "key21": "JGyoc8NsJzZL9YYXKZVfxcD1yjjQ2d82aym9EX22htoRXPP3qLz9wb1c3hKf3T6XhPsHcx7EUZys3uoYebh13Yu",
  "key22": "5ZpxpF6C8YBSTcCzQTHUsdY9T7Ub3LtrUztVV9b1Seq12mR3QDRzkx4QUN19mE85CnV9xLbhXsUdpsppECuNvZP8",
  "key23": "23Nao8nNXnAqWe8oKWzHA9GMViwJ9Y3T1rqXonQmXgVkNwHSKg4nV5trGkyV6nJe4qwXDhW6Ep3Z9TgvtaDuC1Z3",
  "key24": "NhJNg3Lm65ripgQZwP2e4WstAwRDwQhxUpMtCit8w9nQjHv4M9ACmyaJgVS9WqpNdv6ts4Xsvasyhyc2T2sW2hr",
  "key25": "4R1ptjXPxZbncHF1t4bAeJ9B1YqVG1fVPnB1PgNf2ZMASRWgFhjwJf6reZyFie6vxqBW4ju8pUAAMqrzzJbPviF8",
  "key26": "587vxWczZrCnEA4WuCij5u28GD1WDQEfjtnRv1UsaasL6QUV5kLR7JauwhFP2sFKbGnaJgnFtuqyxmSyo7rjMLi6",
  "key27": "437iLFNnmwmzvaCy7yK7Qc8E6UfhWXdQG1LuufUWFyyGb1QaCBFQxmceWRGNp9DGaBBtVLxj8KQH2KW3RFBmccBG",
  "key28": "zYwm8FUpqpcqy1u8JA4n3oDgJFzF7Qqes6sDFBAhjfqs6hig4e6XL6UG3D4tZbf6xZtogTEWCCK1djXSPVJkLNq",
  "key29": "xpsdFmyk4ZGbTH2vrRxSHzCAAvsA7LRWkR91sEkLqw6QJcwo5hc2wHEdXGu5AJx9FWSAseaMoES9G4uE9yy2q2r",
  "key30": "5HZ614HCXBL5oLxSuD4zxi2L3HXsor8XmBLYn8H9PiXhEune3butE5mjnTpEkbcJiy2WAY35Rptm1NFaQ4VXwaHy"
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
