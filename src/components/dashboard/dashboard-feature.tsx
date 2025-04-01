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
    "27tPqKByx6X3JDH5EGWFPzk3GWESpZ95VK5E6NS4c2CXi4g9DS6ghrkUJ37zNKSRNjaadPDPuR23LRtpNK7yWBmG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MUhoqVA622RmpuG4vP3FBL73GfN4tyrcfJZy2MghCRbN2LzbGmnjKQiBcxgTtVGhJAFnQJn3wURbR8Zd9bBBvHM",
  "key1": "4aYJBnAjhJRWASuUYQSBnPuJbyDeywhNVZXEfL7KwkEQz21vCq5LZVd3zwTzHPZjPNtQPfsw7ZnUpC3RtvRjYmJm",
  "key2": "4H7ntcBpTWzvAcdoCuGvKsgQXwrUwxd5NoUoQYnAqw6mYQkKyQ8GVNxMXzubQ54mRYC8YXJEy21fDkKUtR2HZXQB",
  "key3": "eEF1kwsKK1J8UrRNihRnb79GgGuQDVu7jwDrM7ntnmdMwwk5w6uTyMLnkA7LgQE2g2iifPEWxnp1M8wnjxZNLW6",
  "key4": "49Ngo76ZAf1P7cjAvAoohiKbnUdSBnZ1cKw4RLxB1SnckFT62VjmayAQEYciGRYHeaK68jinJuusYsWgnHCMXdKy",
  "key5": "2ZkRU1Sw1hGpWsXxSgcqe5GSjvTS3zJrXndRPJ1y9HHcqLa3dJ3e47MG4pXZTXAAvv6Ptzax5QZo31oJW7PMA69p",
  "key6": "5KBUBe2XcSibwKPPzYA7zKrCcwJuuJo7otKifuzSgi4yAfJhWNR9thPnQo5bqEv7QkHMWxKZZN3rLu8y5sybRkM6",
  "key7": "31DQ6f9Dp8pwhtyeKfpvPAKC2Y7jxMfTf96cjyb7NSovtvMJGnptxQVoEkz6gHJ9mJycZT4f7m8iZk6DzgCu19am",
  "key8": "2jfg75RhM25CCxise5jTCZ6B7rsx7jVZ5FSoFRUZxwwfmGY4FxEFqTgsFxJhH43GmJjzhVRr52xp5QjYMAgf7RW",
  "key9": "5EWfNUsMiQ5PDoR3NU2rkpXU8U419hYsUSm6JLN9CgaUUEfRXMgD9Fyf4zZrqhChe2LVwkgGTaMPHS82QWopZMgA",
  "key10": "2R4egYQeqrpD2ECLxv5KrkGGKorvGyFG7HjrmQ8GeNYoNJjUDK7g6zhRsWAcAXbWubXXm79yCCKKyt1NEygKPN5r",
  "key11": "eMUJZZszH6G1nMcApjFyQsbqMRaWivHBRPvzqU3wCs7irEupJgePdsi1Cwsa6RMp2xEXv1uh6GyEdpKqbH7zk5p",
  "key12": "56nboD5JB3bVkBUiMhPmVgMzjz5gw5uS1MTvupgrqR7Dt1o1kwrMsCV37j3CarTutka2Tsb7RwY5cLRAYz9uBDX7",
  "key13": "5zwnqdxrNSxPtdBUYveRfVn9iY77eVumPH5A3mMqsbsudBxBswodE1Dj51mKtyME1RPjfE7yBQ5BQt67aEW6k9Qn",
  "key14": "3FkXx9cRZ2WD6WHrgddYWcZBv6C8TxTXqfj6gR5JeK8ZGKkbRVFaMer9jQbeywPxVSbfemmXytGQMPQbkCAWvVPh",
  "key15": "5Myse91K2Wy2HsLuX5kAZEJcKPwvxR97A7jb3guZNbtWHAvbqhkrwDXpNHBKrD64xX6jNLwizns7WByiDCcVbZTt",
  "key16": "2FNFsYKxDKqMwAFosrjFa7vJNifLtQYVg9xpTRnnBFMozHPmYKAyNPuz8Fga4VTWUm3QkXCHrKwrTMvAwe4WmESP",
  "key17": "5DQmHk58SD7ztqgvmx9n6dK53bm8rubWF36rcm5u1WUJ1sCGeNPe9kkapNTiCNTGdBUh8Sqf9oQvcPgCMAD7W8u",
  "key18": "3fosGmWaRBgE7taUymX9nsatmrvrUHMxRec7dBQc5EXPk9ZCataFbAvCxX49BvpW3z9jm8JTpMGugExarBokFW74",
  "key19": "5VJ33b9GipFb1VKyvRAwvUHuyFByvGQtB7q8ghGTCoL6vqUy9MM9KMpNDsuwBxFB8RcCLJRUtLfReFoGQ5HnxDSh",
  "key20": "9zMqNieGFm59QfXFvwCFhxxcprpCLYae2Ry335gK6ZTa7WGbcHzyFH2r9WQVp5ZpBLmhtvoNeFyST2SPXyFsbTm",
  "key21": "5jmTrXhaybSM3YkycQ4RaeQXf3bKEnx3Rg3azzRZGpZsYkb9uFQsUZWS5uEdsSYP8CWxEieL5XEpxvsGbjvhDdGe",
  "key22": "46NMYzaTz14wxKLc2mCrobuoJHrFoaK7WN7ezHgM74MaEdNUAUrRJH1wmSRQmPFu2wDoMF8qg6QCYHmgADeCPyb9",
  "key23": "5J3LhQseyU72BEkEJREtn5dR59pLFrDWFLxquPNTUnrHg4XCBFFzZuxLwWhV1rPLeTD3TSXzGHvHuQbULMKYDvrQ",
  "key24": "5KfzvW2wAwJ7fH62jV3gK62HKbeU8KrXwDreQtw3M52HPGo2UAAWxPYaWoCkAYFpmRqTcidMH5G66mrFVo9CzDqF",
  "key25": "3kfUGVyWvbEE8ebAcwAGC8WvncV2b7y5vBbzGF9Y5pmEZ6Dht3MaskRqfJKVnZNCvzYpYyiFp232Ufsquv6N1Jtb",
  "key26": "2kbSmy42vUPrMCrqHR3YzRELcDyAQ4AZ23soz7pRdjfLfjPMcWSkFdvDKqLMqV5R1RQ5KC5ujNDqfH6fCr8hHa5W",
  "key27": "PPGSMNrxbrv6t5YDX9ydkey7fqBv96Q1deihd3oqZu5Ecwz7B3jumqmvBCPTmQUSLrYBvgW3ugypdi2G5vmvDuo",
  "key28": "jT1jmeWEvPSwpHbqo1Si6tE51LRikNU9KjVGMXavhpENrvvuDfpJP93rjM83fUWQwqncSgYToNdiv2QhRWchpRB",
  "key29": "KBefg6MkT3DcF2DkcP2q1ic9FiaacGYWaMgjp8Gw8H2JE9gDyEPyWtuGXHZh8irHHEeDW3nVrSqU35Aitc1GvEw",
  "key30": "2HxtqkFktEFCrGj1rnz5wh5tEikzwHvRTzJWFkGi5L1wvyTa9tC8MTPnC6Lpw8qMXnSK8EkFZ32zcbB2eaLhyGri",
  "key31": "4ehJbewrpiGLonBG8CrcEx5jw2WV5M2uMLUqxDDoEXsstNQ4DunyUWXhBpd4CvT3q6LZwJsrXF9J5UBNGKYNtTrJ",
  "key32": "2SGE221dFKxHwVB3kL1a6uJdhxREArddGnH6NgnpjeKHHaCKDqTb8wiv9MXgpNNg9mbT7Ywg9FKkefXpk3Ycs9uS",
  "key33": "3aZapdFgWWxmKdfcU1KdPvVEqzmPun2txUGykc2u3VLp61ah8dudL7raDiw99cpMfdcvG3aPxoi8TCsfPbght12",
  "key34": "48iS7FDALvPYiRPVTp39FN67yL6HALSjSaWYsDGkf5rL8wCTut3JE8WCwyc2xPEkdCimFvQvb9rdpLZVMTFc7ku6",
  "key35": "2N4aGKduYB49EWhsay52nB2rsXAbVJGjF5vzz67gBKcp6hE4ezfty1iqxQNMfxBFt1zVi4fkP6usy925q4vFMx9t",
  "key36": "64hmPSCnoRVvSDwh9Lj5AZBtFRD6rveWwvAnpYjLR5hxvsvAAbaPvsWA8MED4ANqsVvBEyp6Ko5vND4VA6iFumKs",
  "key37": "4zoNjMq8gz8c4iWACYMqY38RpqPgaLwmmtnz47C5yXjajYroFZPoiBjpjPs4B3zQBWibVCS8jk3DcsP8vjEWeTDm",
  "key38": "5aWM8zkhDJ11HkfFXEGrLrM7YY2vm7D2nnpFkdsmU7ig3DUtMdb59jhhKBZmEkLAfr6eqR9HmxMja8DBGZLtcSxo",
  "key39": "4tbjz7exVsehHSUrhDzWfvCe6FGT6B4gmNxrNzs1MTWCRi9DVFbSFZ6HRpzgLM6RNtuMt3x2pMbfUJXnBGVqx9uz",
  "key40": "2oN7muaAag6a4ryxacY7BJZtEiTJGQY8u2cqMmg1aLS5pjKwaRvxCPRcDFCLSEF23YWsFFH4jUVuLYFavz7GXbBp",
  "key41": "4ALPNRv8vh7MjGsMHRLcGpjqZfAFRuV6YnVLDyaUB1rno99RUNQcmj2Gp8Zrsoci24tEa7LgVDUgC17TzkT3zDfJ",
  "key42": "5CR5eHrtz5bBjNgZMgZdXLn7ppYdVbCqsHENioENbCRexKsYSUUj6DvkTgrfLgXdm6FjAqLRiVqsumfiMG1mNN4u",
  "key43": "3qKiw5r4ueYmjLbW6t8k86K8kEu8Gzg54qr5gitTwbX32KHPr3gxugeF7abfwSHSyuKiryYH6d5GP2k9BWLAM4zm",
  "key44": "5EwAqcxJ1G6PpjGfGMa4HALqQveERMjXEsHCwSoJSpeCpPRBHqqYcsnqcikh9UwfD2oPF469fGm6e9YGPHnzBhhc"
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
