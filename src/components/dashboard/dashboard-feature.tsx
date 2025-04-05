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
    "ihub7oQQjQm5XQBMPW2aYBS2H9gf54WcPiMSohMvyDEBYXnS8TrWX2mcYkShNWxAQptoZjuUQgrRHMN29n9aR3b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ik5JT9Yju3KGLUPZy3Va1pLqKNNCPjGuxgDHwMgYYPUyVrdT2daNh5gmq38mPrN5Z8Bn1KJjcMD5FDfFxwFLRhX",
  "key1": "3z8BCUS4xPFk6azruzZX4b1Gh7AFSNRFj9Dz44CeHtj86NwKqouBynzt6sR1cdwB58dtBCPaXDDtjZVKUf76CWXg",
  "key2": "wdRquUzPUCZtfmXSGESTf1W8BkVNs7DbxTXV9wxshsr45SpKdMWCRU17AXho8Yfqw914W8za5pS9CK3h7NouxZo",
  "key3": "5a7QWNFU2jA4KhEwBWxk84xwqBdtm2trLypFg7mJfEHba9kHSKR6JMcQZhzxNgCUTMN6BwpfRhw8qFcNwDnmaanB",
  "key4": "2NkJWMrWogTjE9Ey2272SA7UDzx5KJLJtSW6rcyiCeBcUuhV2Jjv4u39DoArcZPKwyZw4eLKwdeXjAVvrLWebi5R",
  "key5": "cWPzVMNxD4RxtFqrgE17z474g5iJHvFGi22fA2cJvxD98Arb9UEaZUKCd86WLf63AcR7NxMhPAX8DNq9GJB4dEx",
  "key6": "5bPzF3vrhhJHXnDY89fRJtsjSjuBcudSuBQ3wkRZdubkDZdTDTEHM6nVCjtH11hq25ZGFW7FBqh3gTMrFrT7YkdJ",
  "key7": "21G7LA3oqFdSMJbdd1Dzm6KK4VCYSxhNevtHSZnSxgqGEZeeBTB18Dq4gXzF7qY4Fdb8icz4HPCJBKi9rXUfHffv",
  "key8": "3AyR2bXuQB1NPp1KtefRMbqYR1WvoN8CTJF2iNfKytKmzq2TeiQf3j3xY8TWYfaMbwVofXjoXdmvWEAKqqtepvt2",
  "key9": "2iEnsQs5d6iSaUb279DsSuvQi69zKBDT4fsWdXvdg3A1FouS4v526mVDez4VUyzdRnEN3aDhbZDNaE7wDWzqK7ZD",
  "key10": "3s5LULBnHoHA2YvgheF7Kio5h8f4fXfcPKcsoLeuKAGbXHRYf4CYBX3iCpu35W1FPAeTpYGJY9zRrn8Ewnm3XbnU",
  "key11": "ibT3L7hmQqXCzgAFTEgXvNHPq1Pt3J1h7aytFYYQyAbvJTxu7cBRGTexQLeHcjkWKUXdUBm8kFpfVJe1gbQKuLY",
  "key12": "ymrMVFMY25HhUFypNYA1pcnuMeX3rCAWyyWj9e6fk7vsAwdTW9XYCXTpmDThZdYMUdeFxvy8ncoqKhegBHsrSGw",
  "key13": "2dekGZzX3FDQf7GQUJpBArAcqCDtjqaNMJMQeouVeM2EGp5mGmktzRQJEpcJJo9ZTCX3wrmUAsVPNkzQmwSTiTcS",
  "key14": "46E3f4JCX19DRfUsXp9qqztWwDqBSRntu2DCmTpxhVyFGbUpcc4ZVaX91s5ePDtZPwYsBMfNBSeDA3p69YEG2et4",
  "key15": "5pBL54fJXahQwJBraewNv2QBYbnEkt22VwtqevugKcTtp4nvD3EkwdVKFutdwQT8zJR8AmjFfgVcVkTikPwNTxf2",
  "key16": "4RGR4CRCQL4wonso71rTR6Z4y4EFwG8K625Q7NtctktRW1E16zFvuZvRg1zue8fppstGFddJNiwHQ1CLrvxeQade",
  "key17": "3LzPm6YjQzWfrZu3Nn793vAAaFwM1B3f1mBQf1HkCXBgGUQmtMmm55GsaEciDrrc354tgA4BwZWWiGb86mtD6eur",
  "key18": "2CH8BdFgqTUkofL5x665pvgyQAcw1MkcrRGjYmwotoUeQpfwpRJVDvnFJnmytxFwVYxnMw5JrrtGNYvnXFVJ7RNY",
  "key19": "2aoGgbGu6r1ZYAWKTkmddUziyfCGVz2vz5kFfXPLo8jiMvboGY89MjQ5cBrK5PSwiuntBwJfhcc1diLZRXdTbjAK",
  "key20": "3HEcaHNDQr6vZ3JrB7MDrw3NSpFPV86yPbZoKSAnhitssx2chBuzEDvPNwMxGRxzPER632j1QtgoycfxEfY1Kq3Q",
  "key21": "5999AJvoHLWsacetuH4NZxLXMxa7QgKP6NPtvgdQU8j1Lv5oJ1m8Nw7bzcJako5ahWZyPtQKqtLZiePtZBiqXawv",
  "key22": "5jC1WYpzuXrXpKyYRuZq1vNdBdgcU9xpS8f9iSbWQ822DqiFiLSpMsqoteFpumnvyxxfRcdHNgBa7cQuU3ADxa1d",
  "key23": "46NL6fT2KwXes4hB9VAuSi34vrDb8YNFEPzDEkRTPKsXFNgMN5DXJDuiVe2RLuvT5uccmiWhsL2M4rpY8nRtVa1a",
  "key24": "2h89dpUSJpjpmnb7gyLQNZwkqBWKEFPKhepUeKw8HQYvTrYykLoWFdXem3Zjtyv81SYEdEXYozCHUfUgoc2z66R5",
  "key25": "63Rhk6QxCM7ikf96g5iXfxR4wzsfsbqx36WbpCXSff3JeAU7iFCHgGubkunqTyY35Cc8mE3x5EFA2w8p1mXD54z1",
  "key26": "Vy6aGecqaGPehjiXWdfMJQxDJjfp6WChz3E3PxhGe23Aec9jvgfNS4FWbYiRpZc56Z7uu3R9xqSBP3WekgjAYGe",
  "key27": "5x9zFxKMjJpnTBkbPxpw1ztFtiv36DKqeQKQYNhxdEbcyxsHbVVExj67v5TbxtDubff2E4edQ5wCCsjM1bYfhtb1",
  "key28": "aVVeRTWYbEpHuGKp4RL4VuXVXnKpLz4wN9tpXmy1LvekaK4GTPNH3h95wwgVH7RqRcTfpdPh7uX4B3i9wxxndw3",
  "key29": "2fJ43xZe7b3NLdS4EPKLV9TLvgzZRvwuaBVuKH33BmJNCoTdeEhUhR8PFduwFRia6R5qVQ1FKewNNqpkwGTqj6WU"
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
