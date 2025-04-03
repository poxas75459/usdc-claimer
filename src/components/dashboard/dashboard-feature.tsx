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
    "WgtUGWxTnPWp9tM9FUUY19EDQURyiAeZh6cGExFCU6GRw1wsVYz1sUCdxutqpti3wqw8VLFhEtw3r7yqHXHNsAC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ExJzqExn4QLoMSYwBgR85aSwcw2kcs8Zb6ccofvp4ByMcvjCDCrLsNrFhQpKPJNTsMGsbpEHcbfTj7C1ftGbr6E",
  "key1": "63kCrKH3TBho6jVYsGpjCMYxg5RAxVeTGzzc2PgSbCPxGT7Ef4xusM6KVMd7Sa4F98TJYY1jw4ZMAw7V1u166p6o",
  "key2": "2m28UWvoRSZwSXGTUKrb5WTVm2NPKEv4JaGoiBWEcjVm8HqP48wzJr7nitA8F6Jws7NN8wCb69gZrHFDmc1z4LgE",
  "key3": "4arohu34BMY5SA7SMs9rBg84dSw86v34n9c4h4WxKh6sR2Cw7NQ98wKP3z6Wk4yt3GWKc69WiQcQHSNAo8L34Bth",
  "key4": "33rDyqBStL3FwQJG87A6E3CkgMmzHPLgvt4VuYXCpSr9tz2orAuSXQF1BAiu3Em6ffs22SPexo58yuYmNzVrigSQ",
  "key5": "5PsJ59BrByivFN5wTRWEqKzoc2bA2rgJZh2CKwHZrypqwCMfxnEmkGQykPuabZbz5voZoysSwui9EYtjxhLQJHeq",
  "key6": "3rB3eJvQCRbnCpnTHkbdyHX3j8DkdYeK2aiqAFotoGZTQMF6avD9Xc4ANzSSgsddrQxMNeJCjAV9W3w3vzhsSynp",
  "key7": "4Qy5WyXC2gfqCUHdqCB1LSqRZBXyenfqTrG8EyxYCkFpNbJTWxEiobHhexnKxAE3snMGdhy5BQqwuXSxQTMfwxDE",
  "key8": "4QgmUz2DGyZt4UWBFZrj7V1ADxUL9FMwsqeVMH3gnfRxPqcBgiuJA7MfikNJGuThRm4MbTf1BTzcHEBJ5Mjr9CZM",
  "key9": "28DENMexG5ZMcHedr2y8hD2wWCFUHZhJBCV11QnBeGfCGyJ1vaiKkaikgmtoo7tA7V5oKM5HRm4MWSGCkzBXhvPz",
  "key10": "5TiachrCT3PCfAxYduBfZYQL4thaCT2ZcpeTZefCwFsq6ugSMSpR6N4y2iuzgkC2eXN9bFrCFfjApi6XK3ccVKCZ",
  "key11": "4wn9JSmRpavFKKaWjQp6z26FArYhyEkg7udcpnxAj3mNJSRVYV6zRkhZVfEWgTHF4jRwRKaabvvLv59UyhtRYyFK",
  "key12": "59JRHExvR5TZgfr3V8ZDXd98kefi9XWDsnyhwJZ5BWsznFgSaoxW3m17i4QmXNcrUZNzyj8nGTiZ5jCUSwZRGDjS",
  "key13": "5vtnX28u4GZHFHVJWL8R1F4pBr7LnX8nE5xFgzBnuMksJv4qPQgDmic9zUZikz6BLU9z3V4s8DVRFaYiZsHixxx8",
  "key14": "4ojQ3jagvRfEASNaDKUSsA3CVGrVvPA5ivAWB1buxm8JMtPEizNnX8GmNgwGxjEkZQotCGbPWXtnuMAs7o2eySDj",
  "key15": "3b8rxyH4my4yf8L4jKDW7RUfmHc65o8ieejJNYRaPCx4S5Heqf5H31fN3NiVAoN98ePBKLg59NF19KArb922AK5t",
  "key16": "2qce9TvgtVfVvog64GQZSxQt9cGsvCcpXgBpfwMaT7xFUr8dzZr4VJfRdFeLEgAmxbSSB9fuEaigfQeanXa8LYmD",
  "key17": "5Mn4CA8skKNwtp6o44TRQVBZmniQbBsPFfq8b3QVUFT75ZETd4iv3ufvmtL3wcNEmwKmvhATY9rsQuZ8sqHLiV4t",
  "key18": "4mkSHbpg3jsV1nnVJqVgFqKPus6RNYE4vMx8sFxsCGdkwP7NVzuuvg7xZwHjsViY2gDgDjc3ECCnBrxNKje9tGdV",
  "key19": "3Gw1TfouGP98HB2JzvD6wFNGAcKhSmfj7xPayzfqpYVPDRH6Hde7Bs6Es1b2PDnPRHpwWNx3Y7g4pfDyPgRHuoMZ",
  "key20": "5hA4HF8BC94AmENFpoAyM99yEb5MLAjk3U8LX4y7CKpk5AjJxEQJneRaCRYzvTZZBjBsEF4qFD6dGgVHy5zkHHnZ",
  "key21": "2E6nqbsyZrB5RAEg5PDMCJdSwY9KiY7FpLnPgaPPr65ZYYU4Y2CcYBPsfvdskzvBZMrEVfvFPh7bqRjmcRjPyepn",
  "key22": "3JNvj1F5oqY7R7X6izbrDrQoaqxFz4KQECaupRcJgRVuCK3ZK6DyGwNF5RTXDfXUasZJ7YtzUvVqQU2Ct6GyrGsM",
  "key23": "3MUuze4DHprqoFcrwZK6X9FtyH4PdsNtrQGsWP4Qtm7cMRggMNRrHvhRYiyGzSHYxaocVjkS4vEc6w3wRoFYftXS",
  "key24": "2q2Xw3PYQVsoXwuHW9qmKfYzMqvPbeWh78t4kNJGYiQhraU124UBmLjrL5Zr7dXsd51NhYzJiLNnUZiws6Dn76XJ",
  "key25": "2YJTL2tjrvQRFDykFHyEG8Zxs4DMc9hVQSenPfUwN8R6Bsvk9zDcUc5kvYRVmoWXfsByn1PfZfQbHvo86dqbuxaF",
  "key26": "55EvaLHZtgvMMFQYb6U3RyfWnSSvRTpNtoRA2onVgth4QFsrwdETv2rms7VLuVmWLP4bTFyf9aae5eveVfXSK68L",
  "key27": "4kxKrNd8qXU4QgTcD7KWqdCUe2nP2aBt7yBUo8aYQhnasqZBw3x8WK2XhXEAG6yFAutfcvJQaLJMqBhKLvjPXBA6",
  "key28": "2xqFo2CCVVdp73YD3nyWAfvv4p48AF2k86VjWSwvkTLVd2Cap9R1aR3Mzg9Lqnbx2HZWgKb9Q7AUmRy5bebYH7is",
  "key29": "4n5uqkrkfhTGu61ZdzDhuDbMoec4WP4RUG9PNhpGzyyPQt8yzv14Kr1oPCy85GsM6tLNmCFHx7D5FxHDPBEstFnj",
  "key30": "24gUpUALKKbQLDJsara3vDsRkJ7i6ea1TH1mszTje3Jy4qSvcf17VvKBge57Vh2a9DxuiBnsbDk2u447wdfk67G7",
  "key31": "5AoKacG3jvkUpyNkN8KGDu4KVRpViCDjQKYwJpF7DJEx3UG8x5zHGu5mPx1675qedDFYv5Q5GnJ99HV6EfLZXude",
  "key32": "wiyL2CRFRLj9tmbYTe8gviSsPtGNquYej4qVUjzFEGVY7CdWcR5DZbMGHhbWd7TwHtByaNxHVHq1vz6We95WRqd",
  "key33": "3QPZ1ViVJa7dZbdbcvteH5cfz2bDeFLJLLRbAernkE6KeikvGBZYBmcUjoyC854xcuKHjRtLdi4EaSqLWF91nA6v",
  "key34": "5NjC3BRtYJmpspknVnbUd2wPnfiNzpVVYdoUennrpZjVGjxXP5iFpCWEFjf7n9b5ZdGDmcxeezkq7h2sjVB2eAmk",
  "key35": "Xw3TUfhp9J5FBL37zP74FgEXBt5qH3xCC6PvztLyARxRrQZd9yaFpJYWQmjHxekKDAXLfGjBbYrwo14fA1jSAUo",
  "key36": "4cDKR7ZPvwBkN4Gh1r3rzv9z31E9VYcr9DFt3bYkGxpoSMFgReNc6k9gwJA4H4SN2SmWJ9xgjbP8f7UaXbcZAt15",
  "key37": "3kvvkoavCBYpM7xpNfFxUafP8ZgxBnNL18g9JD5FXgp6Mao5fCgMPaVqWZSfPQmUFzWw6vF5tUp3HHQCUBYqs1St",
  "key38": "4xme4ALZKjh393WH6mGb3Lngg8ibXhBekJAzXrMQYzwBX3ca39Aabi7cdU3AJ8kuvAofXDPLsB1zUiGP5wL6uagt",
  "key39": "CvYqLB8xuVy15jTNgfMwcVAnf8p15wXEE6dG7zfCQHftdbzoH9y3jV38ukxnwBX6Q9hb2q5CqLkh3HKtqFWUB9b",
  "key40": "4zuzuxdwQFuzS9hmqQh1pwXyZR4xPqnpaagwA9MohTrc3tzGjpmU5oYP3sxrKeFeuuEqGXtcpvtBEGFYznVfEEvT",
  "key41": "2iAVijoYwASMj8LSpwyDnFdNPvMWs1Mvp7p98YaAZxcWRZB5XsW4arwZZtb3w2i8K4ZyWKJV8vetvKbq4kYUXe8u"
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
