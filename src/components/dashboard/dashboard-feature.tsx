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
    "2bTnM4r4jb5F5SF3SxNVSPbyaZMhpUmFFoFHNk4iy8MQDaDYHgYisPsxUwH1GLDRASD9cGzu6MTjWfg9GGVnGbSY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pXXjeUhxz2Q5KY7hGmLo1jFc3ooyUmTQoWKhNamMMEAFNNvNLHnM5Rjb8T6popMJzah3VzcNedg94arfTPq5fRj",
  "key1": "5EDgnDj5FqMMFoKuTGnfp49R5yrrd56m6PeLGKNXG4zKoQBSmGW9jtezqcfD3DaKZHC3xSUXuqvpXmJp4KvprPTo",
  "key2": "4JPmatLjaeL6buooHF7F8jQNHLraHzEsz9kU6Dn7BJXNgmVhoto5xv7iZoTWt6KDoDenTCoCLGSTn7H3NWEhL2VT",
  "key3": "Udqq5Y3QJWLVwXgwvUN8jeDzP28FFYM9ZoFLDSAPoqQEnB616hEwTjUCumgLYBFn9vXixxsKCWMJmWUmCgGqJxn",
  "key4": "4wSRqRJLDLQeryfJcKV4Me2kAeQeSg1sreSa3N14JYw95tgsVuXqGgszCxHCyUdd3DVfZ6AgC6P4YJJRA2Tv9xk8",
  "key5": "5uivdHcJzWhUQu4eBkExfjVxBDEaCtwiCKx8XTrFWZBRvZGbNk9DMx7v4L9ceCgZTk3R66fymhkwM78tTiBDQJfw",
  "key6": "2zgw5A745djpUpXjtoahaYExqgkEoKkyE7BKh48ArZDU3cCxBTsUzxb1bEQHkoxrUKVfZ8gbEHFfcunPpB3YfHv6",
  "key7": "4yvvpFVDFYyRpe3PofpEPyfzG1aHXmdyAGj31oGWCwadXK13VrCdSsad2cB9HmvWFhaenbahqbCs6B9QiDFhiZRK",
  "key8": "Q1UhsZunX3BrCLumkoBWwVumMnbdNquJmYrBg6zjWsYHA1q6DmeMTwdC7KX2FsQEDhpNCFha6QWrovZmSScujK9",
  "key9": "5U4mk9i8RhKkszMUKvWCasnjWtQnfSrFJtEK5sbxPAtnLW4DtDSAeU7WKBmqAXgYx87P3prnCJa5CBTf9GfTgdpH",
  "key10": "3KwT3ecXEJc6duivCbXPyqdB59rSz2Vbh46T5gpZKBoCZ25LYWwmuhad7rGrTqNqZ3Xgt3Z2aVeyS5URvj9P7ziA",
  "key11": "36nHR6wEprzo67xMKbPNZZ9pmjBAFu82SJJf2wYCWqh2EZkjYKNJfrTPFt75DmRLVAPyCT8TPMBbQUm2pjVE2ccr",
  "key12": "LCxcCySDdSVHHAfCDNFQxZqxDqNXmSWzvsJw3cCnu5ZZmXECnbMNgpoz339DWniSSWYR7P35y9C1kb1PmkTAzjN",
  "key13": "AGKxA8AtUHgDFD4sAe9DfUd2SxPKLypYYCPKmGBw49gMeHdEs926qhrNZ1xyCY2NkGVCb8aueYHnaGgRLGyqF59",
  "key14": "2rUgVukLd7qXvLgUDHNht72BUyAKp18ArE4B9ovwPR6oYa11VrR4PuE7BxhJNUx8N7UPTvL2YKeZTmkwzNyVUPSS",
  "key15": "3ezZHQWtQjdnHEteDpEd2A25GoSKp9mpLXcCP79BMpYMPHs39isyJdzVhzcxsBdPhrJVRA7MFRMn46c1Y95EARbR",
  "key16": "CDPxZ37yKSU6CzWwcjxx4bpAk6TVThZin1Z4EbEs6McdsabPS56duPuvwgpr1UphsmidXKXK4AtBv1obSSi112S",
  "key17": "2cxc2XuEC5CNrPeMZgZzThvp6ccDjQ4Vmhe1Fx2WfgQCSbEhn5rRDouc2v3LWuQsCEDiEyCcvqbZXZw576XseKYH",
  "key18": "5CejsrvdzsMV7wdhKzsNzTtxWHgFTvT9dPhTu163hBYwq75VYEoAbYz22C964iG1GXjxpaTUiincdu9pyUVEqq3L",
  "key19": "RUFRXpLS6gHS9D3yQ92JYiivkwh6wDqybTfvyPbzzr6pwRjvcnwr4U62vwPrWYWt1BJU1xsvgZBLkYdEKA5Aot3",
  "key20": "3ZRfdp7oKQ1EqaMms3q9GJvZ4DdZEeo5SDeqC3xPez55YztHJBy55JSohVLMksC6DPXqhtFzfakTRruF7tPUyRm2",
  "key21": "26VDYesA6vXjKsQttJoX6oWMLge9y5Pg4Thf4ixiSZFr9tML4k9KESd5UJRiBFcq61hC9u1o88kqMTaHGtAaGDe9",
  "key22": "5AG72H2q22eNzzZ7BTYbQE9E51SkSK2QYs3uKnedHpGutkHRLeyPH2jaJJjnFggsXAaafkvw187VMRy444pRN4ZH",
  "key23": "5NeM1Ed6TUmoaAHDY968LcwjsGCH2nKunp34HhjZBboFZEaDvtGPGqt7VVj1yQcJwBWuwTvwy6AckPH3dVgEPWyx",
  "key24": "5UyXymP4eMisL14Txj5Bc4WoaBQrdBndVnDnuL4dzZDTNJVCRSze6EkAU3Dt39RyVGqJoHMfFfwPf6ZszRYw21Pg",
  "key25": "4WQLUTowro52MXLU4FeBTBnvgxGXam9f2hAgw2YV4bFyZjC69Xx8DaMKt7Tu3ALsHHKAwc9f8SXcNai8VVUKTMgn",
  "key26": "3FyNwT9QsYvZANnweUzXMYbqaB5j6KkP5bhPanETdmGQEHgosWeZrh4apN61YpgLKNGaqhpgWfWvsibQgMLMjhrP",
  "key27": "4e7BYap5RnmXjTYieHKzrN4GBbp4AEzmaprCNp42Se9V8zNjekSmVQCgDoV62m4tSxmLTxab8ZYfFyTuc6QRgDWy",
  "key28": "3WmrcvjsJQcELJxYwC6YhT4dGfzMgrMoeH5MomZkgYBuNzEQtLSknamJyZntPph2Qu43eBF8iNWVzgf8qb7jSbFE",
  "key29": "2ZLFRRinb1Dp833QFVDu3vFtEhVe1ZC8qLUrbQqPX3NRwU8F4eeXQbakkJ4HutKGwEerEMr23nJcj1aokGjZHJdP",
  "key30": "4KQ82KmZSqp2bXM4g1rhSBweuFJ2uG9GS7hTBzTvb6ZjYsrQpoMGZvBUVeA7LEhuC5YbAJf92uQ2zoq4MMqjaZ9G",
  "key31": "5hUPnb8xwvzRTGuvvzGmjxZjbL3wY21siSDHy8HzX2XUbfPfvBwdwJVgjvhmudf6aFN9ReWxqqpHdVhqzhSH9BXA",
  "key32": "2RjbiRrnksDfqpuiEZRHhMAjdiiE2ZaXezFqSq1AyX14wtSXpKFzbXciJCbguvZVXmGUsWAQADgrHopMh9wfgeAT"
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
