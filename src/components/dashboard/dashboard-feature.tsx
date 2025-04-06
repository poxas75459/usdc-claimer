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
    "4KVPfwvftxBWiaxsZSniGj1bRDE2tN2X1pT5HdMwfRC1ydoT7LtdiiLcj36XyJa3FSjK4YkjA4sNCUX5euBikoCg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YkwQf2xi5YtV51LKvCjmRV5PoV7Bm8x54aHHCXANZamSaEgy7bPpoTZjb1eo6Lo1nZbvjc2631SVCjLWVKLzAQu",
  "key1": "61fU8fpnS34rc8PY88rEpP5PnAsNpPFZRM6s8dh1SS1YWRHT48Wmu4FdFcBu9hZdBPwh5mkbuisPBCj3LJ3Z3SqP",
  "key2": "d4RixTfJffAAQsmvT23y7yAnZRDHBtv7tAy5bGWa4Sk4RomnxzJBN4j9gNFca2EKHN8f7RjfEzqVKBJz21mUABE",
  "key3": "5ZbAHeut4ZEf85s6mhB8LSTya91K2oMvdaDDNhs356SaiZBrDT3SG78AwVFNDqys7VWABfEpSikpRFmjUEy5NjUs",
  "key4": "3hs2QVNkfCk4nWg9UnRvfzwAYcARU19KLEfhJtjvHfg4sJjDp81CDXxijdLRaW9kmHEYvbfjnfsc4XhjiyJofdK5",
  "key5": "2y2MggdD2nUmorKLdyDvcGwRbxPuwXu99iNZS1JC7CaRGkRUkLSzPfkKVPZiYgxZx9RT3fvEDewb35WCTjXo916H",
  "key6": "5NZj5RaxZsFMPpwk919bkDKiTCqbDbFSf2LwnZpeqXuGKREQdCNwydp7iAifu5TBwe5NueF6XfUCAEoiD6R49aYG",
  "key7": "2KC3HWX6RsvfPRMrMMNWtJwqtvfeVb6TH8PuBeEB1kEFxbBAorgyPXD3EhGbZeowk8NDfLwBb4Bz6nwxX8wz2dvu",
  "key8": "aUA2UKE4E1qvAoNMMRHvx9JwQqi8DZ89ZZZjMBZqQQt2p7zwSscuh8VV8CwJrqs4TsdG225M5QwkonWGedm9KAp",
  "key9": "5Ac6dbs9hgGNeNVe4cdeBRts7KEUzHwT3xi1EibUxBeiYdHhe1gLiiSjzm6oxPq8Q8pVtHfXNpkhNzy8n6prjABE",
  "key10": "7Zayn8gJ5q5u2YhohFp3MUpTGZqHmBiMojnrAzTrTiFfXuLrQQumHB36gZ7ViRYeuYS37o7gv67JLzLC6Y2pvap",
  "key11": "4hD3zMAyRVxXHC3xvUZp1qNRNcX13EGvG5PGVrqZ6dRYznGQ5hWtvUzuXSie338m1pqbio9PQUGLFNnjgLBS7A9N",
  "key12": "2XjAyUxJohh2oWopKhqfunVwGgk7gvntvsnaLGeNw1Sw9NcqHcnSmBRFNhM6FZC74XBvpdfrwVJupSLrgPfCVanJ",
  "key13": "5eAMZUP3w526Fvhfgn9pPSm22FqEc5TrA8DdcsZUwT5wMgtMytfA2wqbUVyqc821878UNpvhBtvtP2qqooBGekhF",
  "key14": "4rtAGFDPQWTRRzbWtkzaJraQmPC8bZkarnVbwrocbSTB7bhvHLa5JUDQRUMndGwgtLDE9wsr6jhBBeKaZMVSB8JQ",
  "key15": "3YSVczhvcs6CaJX4PqijREj8vKMfV9AgySWc64bL5ivQ99GKuENLL76krbd9PCsZYBT3TCVryfTkzoESrmTTb7DZ",
  "key16": "5k7vr5XRwocBeZYvUFH9j61ZphZjwysijGJ6nZtgxaHLuyy2fKZ1ZmkyDo5EpHKnmNmgBng6AMbNFLbo4DsgUt8q",
  "key17": "minRmzzu8HzVDPWUjyBKVPPPgzZYu1qHarE9JoErhuMZFFnN34sy22XdSaoStVumcvNdiuztrS4SAiUGADwazCJ",
  "key18": "3cNk8w2LXqBz4y7qEYQa76wz6yv9L9KvzMuGjWQ7pw22KxgY9uCNmn6pYtwxE5HPGSEZfEF4WnhFRaP7fRMU9hKs",
  "key19": "2Z6PLMZ8ZwhKejcX9iPZy4yyj2pUtDnxQBqsFL5o1JuwVghqyDQiALhUWKnkPpC1oP1Fcp9U4S48LnfVzHnYor5E",
  "key20": "4vPYdKz6WZEDhfnnfw3kRAyYcJjGgjFR7tXnytQ7KPFUZvoMgRgrmZ2yKPPux362WANZuBzmxn5imFdg2FPwiDRe",
  "key21": "2hifhbtQQRry3t8qUQ2E5XZc8dR2BRAavyz2c8NrphodAcEwqpKugxqM6PfChkNL4pQxvcijKHJkJeH4T478Htg",
  "key22": "5j7m2rAYEaqf32z8ij5oGpzMKuBRnu4W4P44fcMJ4LhKoRgxL4oGXpnLibBvLeqq4cTPYQLFG85NUZhay4KWoi2J",
  "key23": "Yr36tRtHPxfw57YM2X4ooYhL2L3uC3A75hMEKfNbQV4hyVwb5HHQAoARdEQkxkCjPx5WJz66srRpov2oM4H9GbS",
  "key24": "2iqCkNhLGT5A4ZQkdBwU64UXxdaYWXJeJhbFbjeTFAFpUchFqh4ikBjTFZDmuDTPjqDpjdGWVPBGqHjefu5gRWMW",
  "key25": "5ehqv6tcW7rc1nQhhRfkzbdd1tFPLxESNMYJGydY2DvGT5ZVw6R2VcnDyFgJ8ConnFacks31vbjnE9fzTfP1deR9",
  "key26": "8j8yUspvQ8QoEe1Lfbg1JndQgas4jUQaauoYT2MtuNXU5tZJ1CGjaGTH7zH86Vxfv2hXz24c1gBzGYkVJ3fzHqX",
  "key27": "5MmEWjx7hFUwZs9Vt6KrMsh4V1RYQLYGMkAkvtWw4QN5cKmipS86P5yuxy9fSJB3dfVPFnuBN1jBZw3y3ShXPSbE",
  "key28": "5ppc3Dn8dSwsJJyrabeuFTQ9U5dcSLysXxPJSqxawR8t56n52gt6NmRCaaZt5gw8r5wRffP8SjxxNURqDBwuU4aW",
  "key29": "3XWCVt5Dhk2AQvxZDSgMgY3BpnFg6koeq1onAffKasVFfPWTcdRQ1Z1YLMC26h9MdsNVP4urELsLztdCetY516Xn",
  "key30": "yTue6KuQCDS5jfNhrpBst1Y34K4uMnAinqYSf4tFXu2jYexUFgoVZkDQUm11EQRu4mVzf7MeNhQwBjzLypjCz76",
  "key31": "3bb4tyuu5b2xX7zNCTLCMVDfVxzZ1N7iMBc4pEQQYz1jf2u6d2FrtB6koCTbbxjinqRL7PuTJndQrfBVzpByUsz",
  "key32": "2dQbpMr3aDh71DPuFfDMyR2w9CRsTXADj1cncbsGq4C3tuoFFHb8xWnSsANrPK2Q6AVF8ioeWkHuY1YtJLb7MgH9",
  "key33": "48bsxSUyibz18uZrhmer8ZYhGMECt9ByVgWXpRs21WNhhVEUk87c96s3jbrckqpRPk6yh8UGNbwxouNDjR4tqAeF"
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
