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
    "kPuXpoR1d5dPHkhARuRGpYssk3zCbaPGdNEXn2jEh6iKF72zn5XK1jeGokps3TCZ9M7yWemWNTHkYfS7pFxQDP8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44MpkQSYRH8wTyPeLiQSi2N32mgvZrNkSh8KCQm4wSKSio4JpPGV6H9uGcp3ZmrKTXT3dqjRKug7EXwTpfAyC4Wx",
  "key1": "3XBtdvxfH2HmaFNtNk3F4gBEauvZK6By6F53BfdJbKXEG1W8Bxj2ZhfUW36fGdoF6vXg7B5xvAwCiMtaYaSEwDJE",
  "key2": "Nz1rFqnYGdqk96pRZCTVBTDgake22gDWMm9xmNYiuo511iKDX6n115VVA7FFkn8XAxmbEEghQdfAhftB6nUezP3",
  "key3": "VRn29t9JzkTwHEbN68dqz6mGXVipzvCAY4NxPuyq5w6QtiVqUcegnyY7WPgrsYhFUwUsKa7FdaeXVzBqbFqwZyx",
  "key4": "2BkC9SsHCGk7uxtNbHoC1XBjM1vb3zQgsiGp7fBftB1er7tbRP8G1kDc7DxQwNicf6AQYUDybAXur8UFQ66awpjH",
  "key5": "RXNTt9o2g89V2pXJSyyiYWn4WrrkZUeADWsuzVvvdQSmJtQUevotntrbuZ36tX8wDGWnyhusi6Pe3ZLue1Ks9tj",
  "key6": "2eia65UYc3LziYuqpqCN6dBBDZQfZF3K1936Rr4BgYUVMUyZ6VwepT5sCqvNXdus3QwYD3w1JH95NkwB2Lyg3yUX",
  "key7": "Lz1YKvU9Cv3oqcBvLS8qqj9PF6G8J4V37XgSPm4LPSzA1Ncg6eqXSQ5WpLa1uosDSfMKdfpjiExEYKMTpHJ3C3v",
  "key8": "2Y1wv4UGSjmNCiEoQLM2PQK6UVh4g2S7sBwChkd29NCyoNzYiQzF8rAuaLPtYZ2YpsMtCCb1hBFMUkGoQmBdp1qT",
  "key9": "2t5Quox51xpG8WZoEDkcJVgJS4VFGWZFkmcxHPGvKnbLzYhwEC7GewABmxkT3tpKNeoXMozArQZAKRTbxriaVHTV",
  "key10": "3HtAoApLUzgCRkpn6Ji939RWAi5gG78E5d9FGxU7gHTbjV1aNj2nLiFypPu1W5e7aZnW5BHVtursHzJNkn1wGLdp",
  "key11": "j2JXVV1d31oEsEiCo8k7Mc33kQY4iLhaXpKn64jvw8iNYMqCPy4UV3rXcjmWZW5aEU81TNvB1qSRxx4sKZyw5gm",
  "key12": "5DEHoXLV6gVfaP9MKwiNKeAJjxuq1h8sx3eSgxjhfQ4wyXG6BhSTiC3XBJnwki96RwEGkJLMPQg7MkqKm9jAAWik",
  "key13": "2WUL2BTXLytXKtvks2vnjYyyr8fGxvk99hyQeH5vSj2KA6MPrzsZPUdPsDdQ2YATCHoo9Le5FSH1kWLfTCwRdxFA",
  "key14": "3xdVtnCpMwkogQztFmhqArQSc8MYZvNJQgcCyrnfgCy1pkRvQpcaqrpDKunMtpTJPetUkL3Ta3Z2f3XBhsAGnZEm",
  "key15": "4QbkoxzKzekH4UbYjxYF9j2Bv1sE2ERx1uK1gt9u5Bjcwu16ohAqddYtiT9D6FfmYo2T3i46e4ay83qhBsAmMPSg",
  "key16": "GeYNGmwWMTvtAzkwQJjjaPstgQquEUZahbjZFy1RF6F62oAdePW7KwuDb2cmFV1kowH5kFDATXgebuSfMW3KnWn",
  "key17": "66dj2Qowmq5UkcV2TjMn31gPhUXXWQkyGf6m46wEkLStp44Gz9FXyDCSSY9u2GowqVtXZCmLhBTJxEmXh2rdaod",
  "key18": "5oEgucUnTQS52RW1fVUG1enxm9crpZzhmV4LttZMkmbifGvWoR8RoFXatwMU8kRxvReZA8mNGELiPTGxNgwXeLi8",
  "key19": "ktttdXmif5RgPaYwGRuYn2Svb2Cjo1Zf3GfqS8u844u3Q6FtuBdoHaAgiP8Ce8J9q8CaUuaaagTgiKcewst7wie",
  "key20": "ck9eF9tiz2ffjdz6djFHPnQByU9HA4BrbuYiiXoJYUG2ZW775E6RyT9CN9sTgKVdidd6iqAm4NircyJ2M5rf9Xj",
  "key21": "2mvzmLn1QVGhzRqnsY5zJD1bEDSoHqoSsrcbAP32cJTdx3fbTweH16pNoeVpFBeyxqV1ZHgPwKxNDYrunnSMRhXE",
  "key22": "5ib64UdEpUuWMP3tkq9rHoQCVj1C6tTtJJ57vTyBjDTwCKgLhfA8EvyEA4wqDNFxijFaEQUNmpXdV3ohfrrxZ9RR",
  "key23": "2cy8vXoSmpSzQqn3dk5sNdt4A26e4zLRWnXbgsWjQU89hcvnv1m4jyvtUzYvKX2BMxN6E1E6mjurRc9PFDmEnse2",
  "key24": "36MbujmGGt4J2WFBw18RkPeJL7UhazotZkGG2EastAtuv84nBGYgzPHMLummGvWN8rsmeVHUng3gBcxRyN5vKmbb",
  "key25": "3Uvv59brtCCfHdGx48q2LAqi8eku3wn1U2iGAAw2GtzM75GWTbtmV6EqMkKdh7gjVQrredCW9nnBaVHzq9sQmwbx",
  "key26": "5BMTMPrqHRdAtNpPu9geniwXFBgjpkL9Zwk2uphNXHefVQS3qWt8kbNVuRqzuQTyV2QH8S8aWw5SdC4ZZMyanHGi",
  "key27": "4JA1oDtNEMBgpeYVDrJYqqytdE8CgWmJJcabwBJ6sQ3VXjuX6zgcTdZrKPNbQjtyy1Rb89ViUqrCapxPE3JJPkRk",
  "key28": "tJZkQE9AzdcPG22bu7tLFUyXNQ3rHLgz7qA2UKjcszPHjVTN1kLa6jhszNBkfpbKVLy6HJNp7wQCWGCUEZQDanT",
  "key29": "2BCV7Crhq4i43cXAq9U9QgJBBVgwtr117nQNfm7BZDAfsHbe53PtKdWd7niPdMwecQu6sTS73dzar5GEkhEe8dy1",
  "key30": "4DwbFoJRcPDtYBzwGgP9SBfRkQoQNQPpQqZjVFcernU5Y6wSGYZXaqa2oh6FZY3CPxLfACSQcZfBwiTZMPjJFZPE",
  "key31": "oqbwPhJSgxaTcenpe7iGKF5MahpiA7wht55fxYqoewUfGTd41F5zkNa8wqaerVeP82s2Q3Lgzhw9htiwXgk34Tw",
  "key32": "3TqvfTsrqvToWR3gfedR66mQyBFUaJfjh9GS2aUkkt1tr6RXJi9YcEVmnu52EfHV1Z11F1Qa5AKEyRVxApjQEtn9",
  "key33": "3iGL2qt1hF8Epj6KW5Qi89LQZE8ECP8pEePZ55BeJU2hKxAjQPnLfLFTGqAkarnee1RYjwU7vcE8D9UF4WZpgzNC",
  "key34": "2zQUpwq7oikMwpvA2KgpXi1kxzpTpjKmEXTodiJyc32m6btxajizwpek6hL2DuZPiGt8bEDdTExRCWjYY72MZmKn"
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
