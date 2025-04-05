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
    "3ygyTQu1B2xp2Z1eCTm7zqVxiZrExmWceYBRfNxdtzBdUEXLV3zHrayKbbYbbmrqrucdjDTmJNdTuKgNiHjSuPob"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21RQ8vGGDwx6R53Pd8PE3eaYhkTAnVLg3zbVNygu4MUgLMThXkvxwfkKdPMLfBiWp99q54CSayCnv14eKcuMnKwv",
  "key1": "314gaTgzrcvHut2xJen4jrPH8TDN2WRxGJrgGo78paRTuvJZ1BvnR8j1iEbvkS8jnRVRi25tCeLAC51C1zbWXATb",
  "key2": "21TMNfRvy5hBWDEDDcy9DbRh572qy8bZUu4PT13k9ZYTgdhrCgMpbLUZZLho2VpMtRibsZRqhd58KadwgZ3MYLJj",
  "key3": "2nhCXwD1oq1siFs7ne4nrVK2BmcgLzMSkfQgJZVDsrxCZJnEqHnHN6dBqCfSZJF8mcangwCaJXH5JUv1LPLc2jso",
  "key4": "57QJhbPaqFFTuHomvaw1DREP59Msuc4W2Z9FHptkWkyYYbdzWigjDwjy9cfv17hvojG8rx4R1hLC3u5u1y994s7S",
  "key5": "3zAB7DaVQumm3wmEa1TJwb1pyuC1B3MDtXVpDHED6Tktx7XKsHzzTSzxg38fpWJ5YQ59t6TbYAygaFfSPLj8718B",
  "key6": "5GWLFcH3iVBHZRLwQ8uGrvTX8WZZ1b755WT9cbuMT7LmVQWprMp7yuuqBGfJ65yQRhV7Y1321r4Kj6DbZtiTJ1t6",
  "key7": "4Y8PEPdCJ3CL7a31VGqdf6Gm5mxaJ8ZG7sym84JrUYcmV76hqej3uEt25yNWMggWfTQJZbo6r364tejQaKGemLDj",
  "key8": "3XKMBC8XUbkxf3qf6iMbNCZ61dXmuAWmHRXmaHJ12JEzPb46XXqSRRFuVzzu34Kg9ZiRCpYrtKV7hiEHHK8CR4rf",
  "key9": "3mUJEGT2aoGjvdetDzEY68fe3o4YL65iQmTcihXSwti7HdzgSHhwVAxGXGasetnqGDVLPozDUzz4bBJLqP1xL9fX",
  "key10": "5HoYD351Pi5DEjH5mQuP3yz6gS5rdeLPvNXNrwFw5HycH4gzV4hCamFWQpYwT4TDuuBgHLCbQ7T5yxBgxrCDqQ4j",
  "key11": "58iBp3eVund5Zk6egvk3Rm4s1ZiRoZ1yzaFmjHpodANzz437pxhv2xQhxoPNvt6YuPmZQ7DiGcRRyagSfK3rEpnD",
  "key12": "3CYNLsAt6CBRehrv6QH4AVCYhJhBAZvKcbHtMT1NabXHRYyNxdbJrp3KryK6Sb3bFBv6fWvWyM2rZdMi6PX52LF2",
  "key13": "5KYYthsJierddpErAmfNbSDKvifRrHKveNYusJHvBoqoh3feD2nNvHCUsRMTX27YGXSu7DokRTJ2neuFzwaPW2Qq",
  "key14": "ZrwopSezpNJhphY7vqRSHPDRfYYWU7ZNg3BEbdBtA8agG48kKoPePLr3y22kw4CLw5HVeDb4t4c27UMHXWgRqg7",
  "key15": "2Nzqfa5knFDdAZE2PJ9qdWmsffAxmrW4pfVuBA73TvJcbw4XtBPx82fyBQgBZ1BAJsM8XM1eac1BRhDAkGiYwP4W",
  "key16": "HbYmWnu8ucWW6RFmCRtjYUhbJNMxbnxestzfAUYqDMnE7tPB54oJSu6xuugWnpuQLJiv7qkL9oWoQ9cmL6SHzg7",
  "key17": "we6zRRHhqQ34c4DJXAhVgeayzB4wntptvwjgabDhNmzcwapSt32ypmqCdYV5njrTkmV847Dwcq8hCuNdJoCvyx6",
  "key18": "3gA3MooY59kxvHHsnjJSNLBCwVCPov5dHgRAHi5o6LP9r9Wr17yr4cDwhPEaCrteScuVYV1FKb9Rjhih1fi5yCBF",
  "key19": "iGvpQyCCHum3bj5Xw7FFYBs3UhDqj5MiVkAW8Zah1z7jBu6Ff8fxdvcWBaMios4gd7fn1ihQUvihnN2F2njEs8f",
  "key20": "2ynGVtwEhHsjvWcQDN5H53DufLGfqi5JogF4y4i4kjNZrkj1cEPUuEDeDDcTJC6Jg9dYkt8gPZGK1VzB4odJsb5w",
  "key21": "51Xp4gZWv4YFEmjwHbqM8cqycMKWEMtwxtd8G9f6NQMpnEAV9MGLxTzBGfjUzZZ2GaWJjVgrVXZ9yKNQZZwuH4ty",
  "key22": "2duFCfdNz7J7oU4k6QbwcbKvK3uGb4mLiDCoUDhXpyX7pJWX9MX9CVsCwgKEuVwDWUCvJUwfdaLUj11JMGzpb4VA",
  "key23": "5tDP4KjvS9GUXJ4fm9gJNZSoiHxGH5W6CfWudKjRzdsboURt9uc5pGdZ3iri4Um7uFGt89Y1osmQctDSBGG3odP6",
  "key24": "44LR11KFFiZdENqfGyGti1pzo9R4MQaidX5LQMzvhksfMfVsKwX2aUbYzpYmL97uBQDvnTGSGbcjSDtxTQEw2poY"
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
