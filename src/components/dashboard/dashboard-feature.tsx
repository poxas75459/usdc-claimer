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
    "5exqHdZHNbgNf5DjihNtKb7bhD8ruCh2H8y3teMMQMGHC6WaoWhEga7dwn6cKQuR8fQGuhDMNkr2cBMycHYcpTFo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4874ZvpVakpTgfMqknzQKXgfw5xiogTw4nfMgqw3HGqo8Vb1cWh9k73aSLBxhRkHMBRt1jSbSL4RwtPr5kGTMfBf",
  "key1": "6LpRqfaXKayKAsyc18dSscVxXeWzLztCLVy8GysENkZiwP2CF8X1axFGFqdiDZDhpV8Z8vaXNhffKtAuy3TzXve",
  "key2": "2HG4VvN5xkTNXXxMg7fbMsHuviKhppgrECfa2nzoWDzNxy3mZY2JywiYwLWvQ3sBRFSYjTuYVogSDbo6FfeQzNzw",
  "key3": "4yMgzhK9n7aVBn7SwKpUhuTX7dJZuKqrcMX5oaNS3DfNmdLZ9qcmjw3y19e2UeKiCTrXERZefCv9tKWdmMpP5htn",
  "key4": "2oZ61nRgoEfRVM1JKPVWuwSxZLcAo6Arxx6JWncboCtmVP1ujYE3vfNe3NyfwRfLSmTxQ5WZcfNwcNs3uwtvyDLR",
  "key5": "4nBuc9V6pU3RinjWFn1RZBnDMrrTnqnCcJb5gfZP2gex7h1kRu9iMKZdEo3qM51yqx4marRDadU1rLecKhXE5gkL",
  "key6": "4PQuYfc4KpgvoT4v62un2QJEMWNafjeLDz982G1WzgAW4TTLpUVjPmj8FPvVxVcrtmJoRxCgBN8j1UoEFBCbj6qk",
  "key7": "52fVwv4dFuwx8Pbcu79XNiWqdLqjC8ZPU8mvMUsrNjW7wAKaWDZ69zsTLjNucgxaDFFQSm8YHjNmcbAScQJZwM3w",
  "key8": "2XxViwdRHV5fdYz4hP9Q1Bjq3Eax2EzH6c5NwnkhyzjhHYH127JxkwewdU1b2XpsDKsxfmHeDP1EpHExCSzGMRdb",
  "key9": "6edpcCECTcPfEkGbSQxsYM3cH9AFghrLaTzGDVjS6Au5bzY2ZoprNvtLVnXSibtYMaCrJ3MAF9rD2H9539QftDo",
  "key10": "2DxRhoKXdnnhAQweBcjNoStQvYh2TspSo92tP1Uog1s5ptd6FnPnGttHqLycGnqo6PgEX4RTJgGVowQmMhsngPrx",
  "key11": "53BfjV5SJNX2UrqQ5NAJst3fHPajXvpCbLwfb4pa71TrjDqLkrti444tW11UaVzp55SoxCv2JPQ3HzgrU8sTq32U",
  "key12": "5DkYmHUQaU5Py9saPqnL315Xa1xsGErPDAcwm9pfezeQPpewW1kg3fi47qpVr2aScUnSZ6h1CNnUhK4wTuCJSrgc",
  "key13": "4B6HpcxKEcLfNF81Luid6VBZQpXBpG9Adme6cfpYn9435yPXfcUS9iVt9wcjn5JsFNQcvgdHfFaidMbGYCHbsjZN",
  "key14": "S11oJP57aeRWT13DUCKMCWb5uTB7mxesyjEeMK8kB945eMrtzBHpemWDT7w81xDFoPRrpADkrMoBr288e2FsvpL",
  "key15": "3Ej3tv7zfLwgAB7oDcHm3k6ptDJCZbn8YQERg8cAxbKRZ7PBWkSdQ3kLLK6ewfyXgygb6xGAiT1giUARKsuBrmp7",
  "key16": "4wS5RmuAWsDit5WwjGjhMiiMW4wbNr6BK2FHMXMuCh4dWuTKXe96vBJFvqUAg4o7VnkMrbcBmqNwGTrNWSZoVaji",
  "key17": "2CscyGGMTekjJLYWnpaDazHgzSAVRex54qRoKye8xdrmxEsCjQgh94U4vmXv3tdhCpU9EksMvQsZBraXvo4etWr3",
  "key18": "7a7YRng5sG5qGfbSCyZHyJXXssEs1prpWtMhkBV2sqKzEoD9gVgGA5MqqHgJNk4LfufVeBRN7oAoWLjxjAvVoJh",
  "key19": "5V9RaNVtrpWKhqzQ1mowaibb5q39Rwgh1UqCAT1rS6airHFbwipZMxB51H5ayGnm4nFddLtTBqv4SFFCpxnnmuVo",
  "key20": "5smgo4FsjDecMatPBpRoMiq2Y21FiaUWFE7by6We43YrHJt4DzshMq6Yur8snKamVMHWdV97bgEj3HEndqjvPRs9",
  "key21": "4nCD4KTcsy3X3j4pGQ3HTAdzGtP4gub6apevH3RuoFg1xYpKsnra55Lcp6fWNZPfCwL7ADP1ZsWPindVkjYEA6mA",
  "key22": "57c82uNPmBEUCNGszV6TgbiYfcoJKxdhB3taGeRGarrRr5Lz4namgrV5B8mVswMWraeaosaGYPcNMLkhuFMLpuQP",
  "key23": "2M8g8XnPBzRDcLBC6J1aHeJP2BRL72vEx5ztwwvvVxgahxdZnso9bjxwaCtyEjJRu3RPkRhzFoWT9pyySzhF2Amv",
  "key24": "5hrFsiXh23pPNXnxMHBgxELinzz6KL2EaWuof952RJm17yhCGzedxeRU8RXYz8z1aHDS2AtQPUWkGF6ECv8fpurV",
  "key25": "2Jx7xGN36jbCKBe4DFkTqq3Xf2koocDqR7iqUfSsBhSTE5SBtBMsr7UCv3UW2R4uSjGAD7iEHtpuPokFw4doA3gd",
  "key26": "3cMNK9AVqhVrJvsBRB6t34LCVatQ9TFNsRPYyhJQ1ds72iC76c7WFqPSoB9smPEchs4TgBUj299i9a834y1FQDdf",
  "key27": "3TtbW5eswXmSX2MwjZTfPfMkZun6fntaC3qpxYFrM4GmLGs3s6VTdNMhqGBpPBiXKCRmo2gZtBKqNEwdvDjSeaJU",
  "key28": "2AJVf6LFYNQYB9MAYTupwZmCPh5sCSgqn8Tg1NkSwGtw81LhVfoaDarvUMMHbfDNcoWJ9JmSswGRULErT9MudGiK",
  "key29": "2twcqWD6Z6UoDsvfvncXPmbSM4ANgMXGmYUBTB2qKphTidkJN65sTjbjowo6xgHde5GCWeVQ7fqStzckSam8UCtT",
  "key30": "4HsNFc4GbrNhUc3uxickAC6UHpGPxNSrUneC5MQf5eE2LMj9u6GNiDboHPnAinsfBJ3NRbk3q7yUo9RmWaTkHLfh",
  "key31": "2KBa8Nn66o9LY1Fo4yJNVkPV3FT4RoLPsY2VpdKMkoaseGo8ZZojuCCZzzp4PDdrEEvV3Tcjq9eeMUEMpo6U4ZX",
  "key32": "RmzzEJa2cZDZ7pSdes5m1UMsCBx2dLSEJBfXAcGK78bhDBJDaaZmgc8QoyoueJ3RJGm442AE5PYs4HieMy3DNtm",
  "key33": "AsPcbRvmGtt7FMARxbJCkkepDoydiYST8Z2LXsKugJQRc5T6HAhX2N3wkrTagZsNRbDj36o7VFCEFJV81LCrZzQ",
  "key34": "34uRBrDgqnNaNzuhnR3f1s1Bb9vjhBJmCQU2bcqVDES4JVJNT6wqnV9wRzWwbtFncoMSTUJGY3EcUNq441BppiFM",
  "key35": "2wAe2F6VQrbAnP5k5LQVvsZAbrF24QwHJWqJ8ZuSS5mdFTb4KYd5ASrzNoih6C6nQJKDYYESvzWMCGhEd456dRPh"
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
