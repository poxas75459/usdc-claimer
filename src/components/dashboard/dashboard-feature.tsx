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
    "64PG6u4KfXnJ2qyJAL5nNX8EywGq326qzGP9vhvGxoiY2BKV284D7RJj2pmerFhGybDkLSdGwFofk2xdDKkgJQ4P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VTzLSd4sfgey7G7uQmAfGsg3yQPDZYHDXq8Br3Y6G6znihxn4KVNbguvw258xMnW8VrKVM7FwCnVhDTzrfdhZa3",
  "key1": "2tNHfjZrRBzizK1y3xhPVnvkxhuSss4zTnaThzUZcbLB3W4osmdha62p3MrJ9djochGNSWvX7WDPShJwSK3asMqN",
  "key2": "31pBZpLRyCEvv2aGhEbNLshTHBLPuKE7ntCQ9GiWX8nuN3MHKQJ1VF4jBEzs5ggNgxZ12QRzaUyPU2nsFFxcjhYF",
  "key3": "3hgYpgWCGQ8wx4C7RsesMXf3uGYa9XNXTREEj6JWCYD1wAiuabkfSw1WPADM8dWnBLtKMiSHGt6DYjHuQvbWtm4u",
  "key4": "66WDZr8qs1HMoZZjUNUeSW6E7SxhBvykEgiJRpUwH5KNrmzZ5S3iBudLMayDGkebY1CFWNbBifVBiTm16wpeDqUV",
  "key5": "wEnMXk1eGq8SzFQxF1pHdoihWcuNX4SexTCKpMQSmLnM7mKuKjrJoahGzWAnYpnehPshDtLJzVs8FFrzU9WUqBq",
  "key6": "5rKuty8iXDAkYi46RSoUtTuRnrWNY8TAfMKfCvx9yPR7jzgmDLDKhkZojKaFehV6UJci3wBTB7aDJ9dPPBy7o4SM",
  "key7": "2HFntSCTNMe4MT8zZQTEiGvkdv3Pt5tjoX8erEhn8zh68uNg4bpPkNyx454aJK7tQtnJqzt6yLPfbN98bQFRkFAd",
  "key8": "2KeRExbDKkKM3AfMXYGQAn8U7bfk7voekFsRB1o99HCJe6zR2bzGcEuU7U6NG2Xd2FL5gG7dm1T6x2i7rjTVXYCt",
  "key9": "5DUsLDy6NFiHBZcHWj4iSHk9WLNPBH9dEiEm9hW85oQ3S9x2qhkgpmnriqQJjZAYspDiHLPJDzDLSVu5nGMWWK87",
  "key10": "59WK5jqyA5eQVMjdjbq5rERrskf8GipJU8GwQFxVgVSmLrreybpWJwJBQZ1e63YPLPqghzMhBHFLvNSyA493AsMM",
  "key11": "42FygRhwvWxw6AAfSxbhXmCbHtFMqN2AwdYAdqYwjWb6AKUmYZQgoNrEwkjwvUxzrM64o7CncE4i3gmVmSwpoGj8",
  "key12": "5JDg848YeFFy8mF8LCk1w931FTiN4PH1E1nYqsaDzDKNrrCDaZVV5wFzaWqTn2BkHumUsfpBJDrhr59V5pWEoNLX",
  "key13": "3AcgQjnWvSXnR26fZeVCBwkPpoiTgc8vtp2RwkDSmPeNaToq6S4VmjChMg2J9mCcfjq7etBzMzSeATBjXYodSM5D",
  "key14": "PXjNu59vmStrFv29ZR88Tpr11xhh3B8P92qDgV2X89sqPDb6G4LAHnrxXksw9JVdpKw5hF5rwVzpFhPqV1Bqw5G",
  "key15": "5YFKd65s3hdb1GrcnQ8JRLZ7mBuTdvMwt6bcEgn9McS1oK6Wh6dBv5xDHJU9FuZPsBTqdvq6pfGLJAD5Q2Yoe8G2",
  "key16": "V7rSE4E2AHpMsrT2j6dcx9JLgU3doajz9FzJ9EYMEU7mzsPH5DexsgUFsD1ohY2TXTPqQ2GqK8xeq2GY98ULTwJ",
  "key17": "2fgR9Uzd4Pjr5uvKiDB7nc3kSb6Nk7fd84BxpyPqHVjCHEY3ddshAxDbmUpVGpW8RjRnYiYKRbQnPMFccQ62tD6E",
  "key18": "3zsNbkdyMzkByd7wtU8fr99JgqfmVxYqSvFCUq7qfgUBv4ko68gx4EB6VajoAeqTFZqbcn3DtVQgTwcTcEDW6DU6",
  "key19": "5D9RccZTefQR58SNKPY9eRBgyzou8B1ZqZFwtmuMiw2XM9sHZ3iLWybHuwD4pgLVbex4yVxfpsQRmcvQKpv5ARfp",
  "key20": "4AZnELCBkjQBzjjsqeWjV4rUEQ2ZTXaWypxqbWx76G2jD8T3xVdQqfxLv8wpzy4EmfMBk8FdyJ3vPtMah22iU1h9",
  "key21": "NKrchJJRQLs7v7mSun8rgAt6f6bw82hBwKPgMTMrgAyzbSqJndgHLbH4j1oFfjEd9yu5ncodqmN1JQS3LHETtgj",
  "key22": "W5HRZnMA1DbUMowJJqFbqG4KbEYPdX8KFMg5Bx85FRA8FAbdDMGF4NkmrBYvzBZbwmMA9nHr7q1NrNhUBWW96jo",
  "key23": "mY3w5xa7J2AfHPouavBCW934Lj5eEg3HDbecCEJYG1CqcvQF3ESALcWoyVAVgLCvRw9F9FgbjiybUjmEWa2rV5b",
  "key24": "XsjKuiTsfnxLLiMH2koMALJw4VTVxu6LDDHuYd5Jw4dahjrRPKKHEVdpt6aaZ6RsAcRuwfg4Nb4wYCGPjkoNAuZ",
  "key25": "53LVWien3KhedkPZou9QZ7StKNmSVpm18kiq8jaMBXykw5JoYxdsp3wVa7sBShdruoAJMje1eUEBRYF6dySj8vj6",
  "key26": "4VR4eBJmXYqZjGseY6Jrs38WDnEVU8itpNgZgCJ7wXMJAGMiW82abdZUtoyBh3tMvZ7G3ejoFT2gXn49iaxXyBNL",
  "key27": "5JEHywoCmFmqBsdyW2h6uMePWSYS4LAgFCbwjoygQDNJiQ3J5pWHbtG86HNwgTSEXA16qoDqLhofh4HhyYeqkZTE",
  "key28": "2KAz28zNs9KbeiWYpJ6FtWVisF7GUYRueNM6EAPy74urBqbAzBSbhrfmWTuCxkK9Vy1x6jWRwobumixqkHQUVsR6",
  "key29": "4wdaYLJ65JkjtH7GTgukegHex2h14DahRkmtex8VM3QmNQuanmmDmSfNeP1V1NEecu2YWE7bBjuh4CHUudZ18PLz",
  "key30": "48FjJXdBnGBdmx3dePfEG6jDdMR1NuYbxA22d6FhVqTeiBfjxoyZxeeqz1mtoegPYdc2oQLUhZVXrVz7gKVj8Vyq",
  "key31": "2cWpaZBBbMUMzuqG1ZiV7RhySL4mbbVZu9LjZbQNq2xmnWNudTCERzHSGF24xdDNhR5rQ8vyYnzFLRRyteJpqrGD",
  "key32": "yLk1iYjSiUistSBkfkZP75WuhZHCpFGDQkWXKGnJWrzp29ZFEjQyvn9LRNRuWbWrip9m2gDdke8FWyZJi8vsBxc",
  "key33": "2WvtsKrgkZvtMZoP6kVg1KE1xmjWLsCSaiQTxUfYkWE6EwXFgXPdYD7WfEum6pVJw8jkc3SuJz2SykLihq59tMeR",
  "key34": "5WWdLseGQCmpRBBMsex6MZXyZt3TE8VcEx1JWWCWyAM11q2E4fzWtxBa62mnipUTGGZJGfY3942CRX3KwYRLRJR8",
  "key35": "3DN6Kr87PZpHXnQR5eQ3df7V8SFvdjbXZtikB9UM5pbiJPPtcLaJ5ZKMjFVrJS3nwS9kSngcP8hEMUSsyca3JvoG",
  "key36": "5kXHYdDhqrC5Ed6mw6eBX2mbmcz439zXf8SjcyNiacZStQD59pgMnFwvjPdV8Wa6sdaQD2WejaF8RxSdSKG5vP5W",
  "key37": "LN6FMMCPsmhucRVbPJERLkYQE2oyPD9cbGiasZCDXE6FYCpGHbCtKK4NBFZboEU8HCEyCDm9GaWdVS9ZJkSGppi",
  "key38": "vzSiXhwTbmJRZL3YwuhV14Px4u24sE16BWT26VwhgpT6eBbA4cftdWXTakywr5jxKA9aXrJU1nb4MSwgXdkYhwm",
  "key39": "4MpufngxZVXwDts3vwPYnuD7177tTSK4TQdph8T63oELYEBh2bNBpyKK7tphdzKchypcPSptV5z63MQHnAC2e8pr",
  "key40": "gRMfMdYMBTdKZf2bCRBfquoCwoBQWJHi46HctMwudyUKmQjYaMZRZmeUVysnLuF827mDDBUCqx4yZQj5Sp3tXwW",
  "key41": "DBbrW8DdiDT9bBQGbRYSAWciGGrki5ti2KTNdfD37wc2ss9yW6xjEe9KkWaggCHWyg5YWV6Yt9f8zxnSwpRZ3TL",
  "key42": "XnJUQGm5xs9ufmyu5ftRNkNY7nenaw4iXYukNwz6Hs9vHLkYDEdhZsxFXEVPoa3CScqs3CPAsU59PofE4bw5iYS",
  "key43": "jVdidfYhTtU4BvF5h23E2gGapyUE34NHF96gA1rWwpXNKwwAvxateTQ71cMbrf2rGfwBn1GQdcs7d1FipqCj4Qd"
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
