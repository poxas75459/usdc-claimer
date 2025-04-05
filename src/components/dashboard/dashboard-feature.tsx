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
    "2JfCK1W3G7ENKYKe4uwvv7Uqy2tTETmscRegVBNr9cv7poh9MGaVbrFMUiEJAP4yw5rqkqCsfP3dkVAcXBS52Hmd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XCo2U2PkbLe6MNBSJFocsoCohTiruLtHqNyAja2yknfxK9r8oGrvDYQXTxQtXYiAFPiGVZ4Gr9oVfEV8upJbZ1f",
  "key1": "5CL3o88AxHn7gLhy2Qhg7PVxzbxu2XJMLea2xSznHH7T1iQzdX4nTLSBLZfu4GLiDnKH9mLy2QboyBhvvjGnMf8M",
  "key2": "3JH37iWFcLoWGRxWtfpA9Z9jHZek8Bc1TkA76xeDXwTUQ8Fc7yR9sovKEPLCWQz7esDQrZioki6p1mzmSPs2fJyu",
  "key3": "5QaoAbGU1xbBhwEK1kkKfY2gnbjz9srzQEEGnwodBu2vHToxdMv7SPXnWvff7UxMp9xm8hQ5eyisegVxLftaGwaQ",
  "key4": "TLMmxFYbmfdXApdebzvwDTNrHSjoqvaLphFD8gfTR1qYB1jypjmAKFDvbkdtgK9pkrfs56wtDdk3bYrsCq56Dxz",
  "key5": "Ais1UadmKjcHnfVzBbM9sCyVo3PFxiHrESwpSzaXJnxbKqHmABmGwhKRYqwS9zHXuFmZKFEfU32A44XTT6bgFH6",
  "key6": "4BihQ7QPcMaoA7zqgL9qR4ae3vV6jkY9QsghrA59F5jqXVjuSWzQ1Z6sRVYGThnYyW5ieEX6NQm9mX4CQn2CtY62",
  "key7": "2wtmJGVESRq3eBKHMoCNcjagfiRMZDNzfsQ76smqjW72etMAvQ5FphJJPU3FR9dkVpWMuQCBvRdS3CsFUmCSBcLk",
  "key8": "2PjD5EmEDBRpYaWmR26cpoq4wFySWv8Ex61h4AVosLWPhVckBwbHSTqAaJn6xeCxR66i4GkRU5bm4byePhuHT4Kd",
  "key9": "4KV6eCeYJPsreJ1VFLGmkLBhj9VgtJ1UoxTQ4s1MpJh6p59SSh2z8JHQcZ5yAV4xoCpNsvzf4jqCH8267tnF6TKM",
  "key10": "37DVXmGnZwV6yhMKB5B9w71rzWfwuvKj9PfjZeCxabFqRwKjA1sZjHN4mh1Wgg35eDa7SjQxDNSt1ZFim6TprYMS",
  "key11": "sjj7eECMkp77Zp8rL6BuBzitTyRwiPQUaHQsSDK1Y3ZMakCSYJeTUYZPUt4jE3XfTJMhqdeyvw6S1NNbB9ZeJ89",
  "key12": "2kzvrPYBZPehzfgCeMnmZYjSQPsbZmTGXWeVkmU3zJsDy67Kn77yCZWNiJ16D5wbaBWVYpfjCmUb5Cu6qifKeN36",
  "key13": "3cfRbPiD9aiRX51uMnotNVGqBiBgC7r6Hi9rUdHVeReBWmcREmWmQA7LxkR7TaT3oMZ46yhhBei8BzMXiWxLLcSH",
  "key14": "32Kz8vTTR1ovoMSMqwEMPQuPWMFDL983KrbPjeF4ScjXDJAcQcrxhtNa46D1i1efkkp6YmPDxUcHDf5iRcanXo6p",
  "key15": "5K4Lhopwx14PPTA5tpzFPTSFA8mgPXVWRc4deitcYQq3S96FTn8YdpoLnjRKY47YZzVQTBQgbfhpv95AZ2yiAPpy",
  "key16": "27mignkJA3XKAxTPz3SY9xPdJ5RLNLFW2DbqSgcRsySaDRiRayMiUej52hYNcqr71f3nYbVaXtAVmBQ6VmYMDQgH",
  "key17": "4WeWgtTX8hhPNPzpDPMCCVJfrXAsGKsw9Fv9bXY1iDUjsr4qeLmET9tPzb7EpPgHxNWEQaaebrGgyFN3CAyrkL9N",
  "key18": "4cUuNDH63yXsLJPAK1UZT8BERaq7iPX1Mb1V7fcSYmmUFJLVGVDm1gNMEn7uJycVKhbA8cmVp9gPtu7wS5ahCHcv",
  "key19": "3tgLcsHPKMTickeFgDsT9dFqXuXzN64iu9yPLBUr12ugkXtGioBecNjgB8ST5yXVULz6pZ5xmuf73s1THgwhD7tG",
  "key20": "5LXwxZZi5XTTrKxdBrKSka6hbeJy4nF1NwBFrk4QwfRB2ZUgrGFsGBug4zp1ZQLwsMjnkTePouDvtYS5R52ZQCp4",
  "key21": "41GRCyvxoF1rXY6mVWW7GbDFSVLUktsQgTVETMtcC4xwEcvqkAA2rm7NmeojcvEy6AQgb7yN5yP8DpJAfeE3v2w1",
  "key22": "Y1iMAYwZzkUqEray3Tge7zUi1SHCfaVSVBrJYBoqBch27HJEcRcoSM2E2cAxfNWdkKhQGZ8rZSkvtryDU4KiNZa",
  "key23": "5eVUsdYR5aEZqj3FWKhRhKpzyS5gjPpcDRL2JsqbzdKbR7JRC8hNnoDuRHwGpjbFog3RhFKeHRkrtvfZWZoGebyB",
  "key24": "3fhGQChGTGXQWac2jCzWp5BaTEPc1TC3yanB8ZQ1E5dUz21o2rPxLZtHu3imyJVxHzfaqy37Kws1nMUp5esewSmK",
  "key25": "5PC3HDoSubULmxKwbUk55GgcNuHXrpNJhTZp7ci9KEB8isCxX8fMVSXLFLY9vXZuk86kUDJqMKn4C4CD5vgwXgeR",
  "key26": "61jwHmjwyJxqATe54QDauJWQs9XGWceqBpt1p8edsozSxhR4vCdvpiYHY71XCvZgBtXB8Vnw4tPSJhojJvrSeWMh"
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
