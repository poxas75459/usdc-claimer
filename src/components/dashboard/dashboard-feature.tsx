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
    "kkb8pfM8d1HyuyFkHx16uS1GcbXoWxpnTZPXF9TsDiSRiwhiaSv9aRgHeLc3qMSwpyb4hrnRE4S3RxZe36Luyaq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UHqPbMtDpj5ECPAfuR9AM854KoTx86LbSNryPpMCYFdqb7u7NwYFhrgZcPFkUjyyPe5GtLCwgseytCXaCsqdFLi",
  "key1": "5xMRcDpFDWyKpmDC9tKs6X6YuYu67WCKjoLWbrMwHtnxySe3grJyPZBAwBhLaoWSmu8Kh7f9J2T9aSQCZa3L3GYB",
  "key2": "5xKMtt2Xob9Y9wqeaxKfopawXvt8PEZZJeDWuQAVNAyEvQVDBKiCEPLHs4BMHSDZ6J4otv3kYt6U8Pv1Xy5Phjrr",
  "key3": "2F8qFVFcBTyR9puh98CupCQd3npVaxmkwQ2EFpFm4vfNt4cTw9iFWx8rFrz9y4uKnzB49HMY7pufumRGxB5ZTG4U",
  "key4": "5Bva4dEWUHfD8zTzLde4MdueEV7JhPwgMh7GcRJxmwmh3FRARfPpZYFCwjo2wsxuDnBk9NvmByfnKi19YC4KCsoi",
  "key5": "2dGE6fb56y6V4M6SetXBwCMGq1R2Qugy1X8oczshiuwhTxgxuQ367Jkyv82Xr9AoU8AGxqRkrJTEFYJfY3XZnxjm",
  "key6": "4T9btPhF7BgEq9JiJ3YDHQztDH7h7byYzGoDgqMeF3721kPqp2ySGrCZxaFjUKPpDTZa93gZ1KAuSvKjWbM6fvna",
  "key7": "2H7xNa8RCaVa7nH8sVcvZbPkUka4N3ZgZ84paNv4KoEVbXB1Ni4szQ4fpHvtnmfRMSvXffw3xkAkGSLEWqfjTQcH",
  "key8": "2oLV4gz8n56vtZbAZWK4wEb52iJ9mwDL3qabStaVybWqYbEUwfWqWGvUM58CSM8bHeVQnpZTirwzN2CksxZdfYPm",
  "key9": "Gv7QKsVWWB6sYMv3EDk8jR39eh6WM8bXmPGsAXoz2abLsTXsRSshwGthWPbNKu1V95gZbPmRdFqH4wuT21HA2Xb",
  "key10": "o1LcsQeb1rnNuwetjdcKKZo1fqLhz1X2hSicuG6zTExECB1YGUEP3D6mLfpkgj4NU6YPf78a4EspqPqLN9GHGJj",
  "key11": "3xEKguRfcL66mdtc4Cq4qyuwgZAU9SfwSydPYHa7fGo3VQpbM4pvqcMXwYnjazvhnQoJyevCr9JXcGCDMF7KhYvc",
  "key12": "5tRE5fby9Dn4fM4fSxcYAdqCKEmvnXwwMYAQ7xnC3AB843MycKDKyEbLYwP8w2VdwGrREi5S54MToLGp24aMdJFx",
  "key13": "2vnLgik5AKJRa8pmfNpo5zbkZNuPJfEQLTMa6JrQEhZw2fkU5JkyT2u6Pc9NizgPjC9xVLRJNC7ShBJYejZduYze",
  "key14": "1tbSTCufAiXQ5iRtZTj5Ft2bRv7MnsxVzgwkVCGhXt4jAHCThagoCF2bo7xF1kR95SUukt5aK67jTG29fMtA9oj",
  "key15": "5phD1BeYS7NyGEKrbY8PsfiQ4BD1zzf4CC3qagmp6gAmEdAJgEBmb8mfRGJrwqThpGQGkXMFR8TDuTKSNm6SrqN4",
  "key16": "33TENZMWM5QLvihHcWV5jeDxXdUG8BKSrwcUwha9R3Y2gX8bVETB4Aw2P5vpeEWgUcTg4miQ5uA2Z5G6uZ6wfwfn",
  "key17": "3ZbRF553aUTtinixfr5uYYG2dTRmKHDHxp2h6wUhmnWKnonJ92UsR8uzbg8ycxeGB48jjnorAZ9Ti6mZ5zNL7oC6",
  "key18": "38dPN6p8Gf6MCuvYSwK52eWKCFwHSkHwk3UWN3N6pw3cuiUGfBqXNxoEf7aFHpab7xLRbF9d8c4ZQzZ4yvuyRB28",
  "key19": "28mQ3PGqxnPmWQRXXRHxgUTuZsWBewLeFv9sdDMNTKrCboGgX2Ts46sjGK9XPMeFCHDwTfUm9Bn4isgw48fd6G91",
  "key20": "4yGrnBMLXUrdnYR6CTXBy6MDACTkJjSy8HoWK2UPTkjVERNkF9VURU5dFYAWtPnzXxED5stwNopZV5VnUGoUxCek",
  "key21": "2Bifu5nooXm6nPGgUcH1MWf3z5wDbRwDZge4B3Wp6G7zYXm8Z3cpbVBZpt3a4dyqVymZ4Z4n71gNcK9e7A3ksBF7",
  "key22": "3SSM2c2q6fpwrPukYMk9dyWn6tHMYTtrrf39eDjCaJgtLFAavrtEgen9HjW2pin7ptHk5qPsfS8Aw3W1NoSyLSEq",
  "key23": "5gj6g6CL5kx1vHoTwGkKAadveMbZ9mgqWNsSRU6FFfVvNAV7SvLPHX4urQoHzJ3X4ZS2cweFy3H4PUBDrH4zZgMU",
  "key24": "3wAvRUEJjzkyVoXknSaTT1UNvEy5LQgSUkywGRLiZMMhBVWZx5zLHrH3CACev1mPncYt5DDKDZCCXD5mvxSg26tF",
  "key25": "NftbCvUtUJhxeoHhH3f8KkGNaWPb43Tsdwk8uZuE3hfx2kaakthd9zLFbxNAq9oeWqqtX4aPnV7JL4WcARLhCX4",
  "key26": "4KaoNjAFX6tauqNHoJAJWHRF8MuwogQvJBszZGXBtxCmT7npEwYuUYs3xBUfSTTZPewPuDAd3XNVxpvQmc3RWvHg",
  "key27": "3u6LZhQLF4mFh6mgiMEmX1ejRoxJVxoPS8xtNxoK47ytw53Q7j4nq25iA1kFj6oSHdTjWdgJfuETJ1sdcM6mvUEH",
  "key28": "KEU8TLTNnL37BF1vAUFKegrfS7iG4E2MLMVDuUY8iwwgaN6hFVhsK1TXARCkYhyF7Jj6y5Ba73RRd2aWC5X3kWH",
  "key29": "2ksF3LcksVWjbDUqMJFAv7jFVPeNxdKuFJiRt3pmtHr1VVuZv8xVnwuT3sFz63XiyDoW3BVbiaR39uBjjACyzb3j",
  "key30": "3Sv9FXHTCd5z7RaUuFmHHvbgT89fZt7oyrHdTQfcoexHBW8sU1y1vodhw5n2nDeja37cSNyejphNXqhFaCoze5of",
  "key31": "JhqokaCUc5NLF3LQm5M6bFNkA2nT3s1zYotFcidJcpugY28rCbs515YWbKohwKX7dJFznETBLyhGfz799kjTjrn",
  "key32": "4keE2N4AfR3rehu786uYde2PdP7mLRBL1jWbcv5NtRmK1RXCJxyW8Xa97zgvZ733ecw8MrAnTKhZEGQTMxwEg9yP",
  "key33": "3mQ85RSfPvWvfgUTrJtKvA5ReMGXuK12BPSKGXBsUk6WH8mCGd56toGDm3jJTXDiqC3eD1DwowpWoDfQFNgZcwdU",
  "key34": "c5ZYZbjacqhnpbTzebWScwLLHaAmRW9b4SHN8fpUoqpVQmUAT89aEE87TAE1vDFg2BzJjh6LMwGQferjqsVpgpC",
  "key35": "4do8oronLsfA5iAH6mGDRSehecQ5UCbspg8LStwsSD9FhAte1zELVHbVtsdiGq7EQrYgs6njspBQkkFDfrEUKVKB",
  "key36": "2ZRjEkcQV6uJXVe5LrPUygZxgEbzAdY92CWNv3hFH8NyF5kKuUcH6sCibf6Gs6ytgjL2JwaZVzUNRwwUUswmhGUo",
  "key37": "3ufyjUYCHyQC7RdLPbboQxxgbsu4KYBKRjZpbgnyezoxFXArijKTsv19KeKpCQx6p1YmbY88oYhfMfAaAgwr1ZUB",
  "key38": "4kmwtB78vbgNCWxNQA61hN6AqnVcxwLRn997NKpwpnXsD6yTTNkvaoyHWdgCmqBHgbQ8xU5myBir9VYcRKkBuK7R",
  "key39": "4CpGPtUR7exn5GsKkw4thwxsuHZTFGmyRs3PReGvThyqCdbc6r7LnhTG9tLzHwfka7bTwCeJxaVPnHXv8LewN4Jh",
  "key40": "5o2GNxr3woBczTDxoJ8GXVb4q5gcuVjLCGWiL2MUQxEdbLKXH55y3du13vmwnqJcfcgAUMDehbhNNb5utdWGREnU",
  "key41": "E93jTfDqp7r98XJZeBAdQnUukWifqPPqbTCvdQxAkYv5o4jh7yLLxsjomJeSaBuDYHYkuw9AxKXjVJv94q3pJDg",
  "key42": "agwxFBXA7W5wzmfKc94PhtZbDUsKcrFjSc5irs8ZeLye8gq7Fn4G7CcPsKfrUJUNnXYVmHunwba2evPkq4uVMkE",
  "key43": "5xGQpynh5TCgC5Z6kBYE8pN466Cj6BDA2QZD57ucRLx3SEANCij1vKdYRj3mBPni1FguRoC7r3AS5zE1VnjUzgBd",
  "key44": "2rusBsp5GfybFGnVJq3Qp9avusPFx93veV17QY9KWVoqqNjNwXuYgQ8ypxPFRwtRGbgtDeaqaf5hQjuoEj6KA2kY",
  "key45": "28zkLSMySiEDr5KjGgYKAtipUcJBSpEZr3G9octCF5u18fAo9k8tPXx1nqY8mKLjxFdNSjHGLMw2Kf1VC9iNXakP",
  "key46": "5Xmj2umcNjVqDF2UjHiHPDnDFu1SgvvZmbgHPHQGFwDT1X58idPKdPWgDNAswPXHrHc4SbwyEif4gJKTVNcMMdMy",
  "key47": "2225otRzab6axRViSrmeWQA7b1TsUFxQdhDtAeYivDrPHVbAmp5sZEn85tTkjskxa27sBcrEPCXi8trBqfzXmJ4H"
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
