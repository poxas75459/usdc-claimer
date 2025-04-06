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
    "b3Uo5XBn8tzZk6JvLbxJzEtimDZfHje9zzQtKPvAW3H9wfw1x3RoZZC7Azy36qYaKgnysEBaBMtV7gAtgVxyNJB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57coKtyUbgUcit3truWfkqjcGtxrFrL8Mkxv9vVJCwLv9dJ63GVKWB8Cph6Qk2Jc7zu7B9K3eMRFw8cgAv6nHmr6",
  "key1": "43xXjfjSSag495pMjan6sBXcL9Nx5ZV5s5LVrJ2CoTJAyojyA1tSLV6qmfPJWgcUHL3nFCLgrQkKggSAa1Gdhwp",
  "key2": "44vRW1VJQz7JcqjysnWYifHZiTBMoHchAxZLQSbPZJREGiJnd3vkTk95zpCKnKa3Fjdn1PycCFYGEB7rsdz2532j",
  "key3": "65A1GdbVVMqvFUsMkjEeUfXQUboaZQRiEHx6pJwf89qfoALwj5UaJo9MHErY2t49F7q2Khe77SmYeQh7LocNGUhD",
  "key4": "4CdFMrrfY6EJTE7DMhk4NyaSE73NgsBBD2za9KVyrNW4Dm6SwkNBL5tWdvAJcByvn24dXdcKXm4BSwDjQMpkM6z",
  "key5": "2eNKVZERXLpxneVYKmzeEZ1zqAeMLagyDoU3pNafjZ8pWx87paGq7WkaAUjeuvjHEyiLtci61pngUCLhRema3pAQ",
  "key6": "4ATD9XGzna9HB8dxyJFPj4LQM9w2cWFAvZ8M1Ss3en9acKY2UGVkjrbg9K6rvXKcVrKLg54CbnZXMXazbjTQiGTW",
  "key7": "5fwCF1YnX3tbxPzgh9DnFE7xsBhmeRKgQV4Lmb2yVbXjxAdQsrRapCZVgfUmsu5VT9siJwtPPNXD528oLZtKoRe5",
  "key8": "63KHvGigvXNqUzrGSqCB8SgdFb9u18c4oqeYsrZnMtCCsRTcdBVFuUZ2BgmWNYgfXnBqeWzdF3LhyeaEzonhcVaX",
  "key9": "32ofUnmFZ9iMATrvh2kiLuYJusug1CckV4rJTR58fde9jGMD5GhW91JBxShByTsRR4WNPJ4D8ZiGNKqfBF3A7qhD",
  "key10": "5HVGAScWiQzkFDj1hShu1Cn7Ppq3CMvdARjFYPsHEwrXX1ukMuRGpMVhXjxDh6rouMBHnyHQcBStcdVtZmxp46by",
  "key11": "3EVgJaHCogq24TysuirWD7NU8mBoBfdfp7U9EgAmiDrUPHp1E6vNCZ9yUQj4DHZhbDV4Rfy3QZoL3ZiobDEUEV5x",
  "key12": "4RvAW3WmHia42v4oHgEwor18n8Yid5RveNtFddZvCePwMURfQqSyUXb8ZL1hRtjVc6W97wTzmiPBS2DZ1KZirZa8",
  "key13": "2bZiwmNfii81j6aoj7kmjQqE49Smc72m4n45aBypQKZhktorphBV5hYrhgbge6XMvBpsktf37qTao1vbJKQfkfn3",
  "key14": "2LUCYWwvpjhJAmP1z2vPLpctzixeRMDw2bGCUFgrq61GgxqhQmDUfvy4znS8hqnUtCSvW4ovuQpJJV8Z7NgG36qb",
  "key15": "4hp3ebJhfmydFfDToFcfjhijxPshXs8bMQaVuUhUJ4rrXDD1AdbmDaZaTxmrKCdHobyCSiCk4guCsGGfggw4iE6y",
  "key16": "5yeRoGWLvPcdVsCBpcAcKukwETetGMVKfsXwa2kodRgRUVtz66ZjzRuQYz8Ui3ALxY5hMgtryiof1TE2FkVs7VeE",
  "key17": "29uMFe1XLQUVQ2X4P9zRkr1SptS1CHcpDWj7fFsEKkUMgpEZDe1KfbR3A8rXdivMbYnBjV6xW5YJNFgheaS9rRLh",
  "key18": "6fpBLKYmUqSpvWRpWbUp3aW66wVz6RjGD7ywDDnATPeecmUqY2BmQGGWdSVG455BRWLM1VGWwM3aj4VTyDh3P79",
  "key19": "2M2nqEjSnkmPn4S1jFydB8E5sfiMF7iD7kTnZs992rTiHK8e3L9EPtupsAcTddPhfhCEcQ3ksd6WqjJpTKQB1pN3",
  "key20": "5qxqRbTb3z3nRRd7Dkm3cb29kGen4whjzzx5Vwjf7N7bnTk6tFLw4DBLQBwSK7sE3vyNQswN9rBc8WhHMdxeTXJo",
  "key21": "5L5Vj93Y6ECLP5hwkDuaPd7DBZMVXmNP6Jc89C1neSEX14q7o8xgeU1JMyPrgb3Dydo6Pr6nafPUuL9kwu3nM697",
  "key22": "5jgAQUJHsLBqSxTk6SKyt4X721VkKhDVKfJSc229N4cLCWuUnefbRM7xi9GVFKZM27ykVMPqFx8aVfoCkyx4nuqL",
  "key23": "oeKdyaJSFdLpAU1GSaswSiTecyz2c2yjpKc5wvm6P9XSnAYxuf9S5YZdLXVZnhhfZcHEGng68WLJ45HnGmx24tv",
  "key24": "594xLhjksiCJB8HoHqA1PzEJRihtzhqRMNgqm1DQZrUhTjZzUtrckJwTHvj3NQKmqogg94VJAVUhkQAQv75rfu6H",
  "key25": "5hMNXigrwspNDCjNARo6DiyDe2psWpQVEB7pMCryjtfsM3enctceZS4WHTUEVDRyX3bcWRq5MLzwM5VfGfkgmnM",
  "key26": "4MSYwwLwQAGTDbYvX1xfyjAKEvUtGoWXAmA5rqdfQDbQ3veASvfc2kTxocDFVKiCdnWS6kxCrh1m4Eaghiq6YrkN",
  "key27": "3L2Lkd25iBnEtgM2oMniWCNZgDBL6jdYyWUmgMNQ4nNRDamaxWDF3PPJ6wyZwMvrXQaMaBb5qFpVhvXH5ksQkrce",
  "key28": "2h8FVcjs8J8XpFYFKGQciECTne8QkBE6EBrDPV3JVjPJYczH4nncXJidTFKBArbpBLDZ8oQ9KpUi4bngGfMMsxz7",
  "key29": "2Kkb3gbX8Qt3972Hh1VQMmuNPc6jzzR15unzeFWVPC2JTEpv4PsVDigSGiz4BbrxjkwL5wZ27nwhuU87B5xTUudJ",
  "key30": "4arLbHQwuCQR9wWzmtzHsMdgogEN49w7Xik5cnvSB5em4JhEt9d9XquASc2uAfgqFntK5r5qFzNDzwUvJ8EF64Si",
  "key31": "67dFWnRxYU6bw1HYsTVSQKRZ7C8KVmcNrj1wE319oDwAFPjVAdMbQeFLqhrRcW8BxDdRY62Y9nd9xyxwAsJ7e1i3",
  "key32": "4qtTwoNyjuFbz74JjxBpsWdk2WFRGpqzFUsH1cFmrWbg7SBkf34PWu5MAVfun92Mu6wfFKKD7QkDtMkhZ6gLXvnp"
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
