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
    "4KCscHPuysWMAiWkDfWKf3E4QgNYt9unK1sckfsAo5fcjWyst8zFd3BQFwbtSXuZD3f6fLcJF7dPmxrJGSMtDAwA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gg3FQ6FVRXJU2uqSNtG8YXA3NyFjssf8Z3xVHowmR87nfzQBzJGUsbcVFycziHpsFSv1AS84AnEgSbPGAMDU6G4",
  "key1": "2QN5K7mDVjeqbYSZSGJAr38Ts8xDRW1iqZhV6DtiBYLGmj6wKeUM4njs9XbomrsjD57tq8V27gSCpxgzptAjLESG",
  "key2": "5KKo4u7jcmncnAcsLa3mDAT6N5U7hDeH4pP9e8BU5kZLNqFe1XB5SvxnpHRVanDskiiA9tnF7Fvcb5oxWUNEtSfc",
  "key3": "4MfdxZfywTVUD35qmh9TDASbVpAF9YTtHG2B1CQ6FLWdSXqAUHwyBW2ue8YBnYwiddUfjLmGLQibc4aShjPY4hyR",
  "key4": "3ued9SvUjP9PyYoPVaM1CssdKzTrPnCVdBNLz3GNUUf792UnwYhMqjHJaCPuPaBdx4ssg6nZX2pYWjxXVx6NF7An",
  "key5": "2F3EmT2JhF5NiDcKFnM3aD91FqSxeUiWBj6QMfP32NtyY98zTwzwEjvmhSFuyVMjzrqN46yMXvt6aePCBcxHZ3fQ",
  "key6": "4CgVWa3VZ4e5PWF3DDFGfiRJzRhFKuhvzhAuML58Ccah7r1jeDgc2jZhtC1SsMZ73puDA5CmkxBXQV5eU23QbfyM",
  "key7": "pNc649qTKqbw5KMCfhbL7un4fteCKYEoMifVpwTinZGKmWfNxYjA2EiDKc7EYE4wGVnkXpECdsj8y2UCG9nP3pQ",
  "key8": "3sBjTmGW6LfkJNyob2WytTLqbTawUKrma62ZgPab3fygT2aHNgyTwoTwvvBqCnLaULKhz1NiHAtBmSdx9QV8FnCk",
  "key9": "3FKPr8M9LK3Winh8q3s225r5rLuDmPcmb4W1nUafY5XRR7T3SqSVevQKUi2LmYKWSeS7WWQvrmGR2M9ySjFpENoe",
  "key10": "592QiU9aigZ9MUFJxaV7VgMpN31q3sS9BRoQJsBVyWU3PzPq6oD9faZT1nD6n7Nuwq1oRtWro3dSZKEBKLyWzoWP",
  "key11": "2mup18aEimdDy52g382N2u7Mv1KFSmDyNNhJgep74bSkWDVVkQNgiHHezYiJrJK5fMmHdZEZJpEyoYfhDhv98fh7",
  "key12": "4i5WujxaG5JQ1Pudfz3zmB9nt5KMUGzEKEDt4JCpkixnKtTyUEdC8dttS99NajRXDPnoyMhDeZj5AMxD5DjFsh5T",
  "key13": "44EmRv6eb7mjiqQgYFphGGKKz4MGCPvzSg3xLdJrwT1zi4VteSbMMqk5k5VbotvymrSrJonyAUiSTM1KGWbYgw6m",
  "key14": "2aE2mBZLN9mqCStBu62RUSer5EVSAkpbR2RVWW7j9sn81m61oA95YPRhtsg25dEcaXtPeT5mztF2rVWhk1STAiDP",
  "key15": "4qfYoXLpkwDwAF7kB9sh7LU2LXtSj9gSsbaAer3ikXLkr3eQhWmXpSnTvi22i9ac9A6stEYCgTCxoUhWGCVfmrkB",
  "key16": "3Qnej5ozmcViopynWhuu4w1maeGkr7aNAFbeEfviCdfidhFS9hWNzKWLN8RrmCvhRJzSAqbmccWkJWmkXxNZY2bB",
  "key17": "Ec126bAXKNAnDk72UXFRYaUDj2jaonHAuCuL4W97jre9Mnvie7rp56LxfTU4LXbvyjnAT2nVt9y2BoGdtaXMML6",
  "key18": "2bkZXfqi9y4ZVfceXpu3FUTS1TtkKa1jN6kZucuiW7BfR2GMwNAvPjXZdUAvwCBcitVVR5ucN3pkCkwsuv7o1BqU",
  "key19": "jxG3HCPWZexi7U1pkhA2ZKzUo86E4bYViu9E6zpTPgP1SG8vYkY9yc4FPAz8nnf4garYCwngvyx4xr7JkWWUdM7",
  "key20": "2tGQompi3nLHjHhp2QEPiYecWxwFjiJUdeNWYnpyoruZhh84Y3SL2qXgrnAcoHDoaNUKoPcz5eqmmo3Y1YDj12Ch",
  "key21": "ByjQJWnLM9qqbHxQ7yGrKsVekcbUiAURRfTsptbQ37jrYPMtbGaKWrj9zQVA2LUmJNFcHMFZEmrkHqt661JeEMD",
  "key22": "2jStN12Fg8TqHxsvSZMHhTHqAt429UoQMgpKFjLgnumpi6RaYsgQdFLEJsbdZgtHpizyAT3UQsDbPco5Zx7V3ZYj",
  "key23": "z5xqG452LiumNnGabjgKcWVXgZSmw5e4ybUsWVWiwegTem1uCZekrhtr2ABKeSZaRhegUK6YQUMaxqGqNDTs62B",
  "key24": "NGVRaJygvaGEwPgEvsUUBF7SkJxc6dBfy8qo3KVac43JYzXH7Rqxjz7oK3i4c7uR9L78UAy4SKvJ9VMdcPKyayu",
  "key25": "ATv9jZ5XetejNFTqc6f3tu6T7qhRQVx4qyzukuBWvVX7qVFk7srXLEEXHqnWsgW66oephvaWmpeS3om3ZgRTo5s",
  "key26": "5w6ZutsW1EctXC2qMKHkQGyCzca2DRcVw2Kk2CWrTuNBqPJdNpMX9VG2zJaQWGg2dJsLLDPb5T9HMjfQp61JKk5e",
  "key27": "4uCpiFD3ddQY6dKcZ3AsLpr3AQM1ATHktsijnD2Y8nKWf4ViNGBpJNnRTYFHsAHtp2fSfqAKYu51bsX7MHRSoW6g",
  "key28": "26fJCjY7g9RgRti1yDGV4DnhFXytCc4k4kBu2bcJtMxGeQMwnVDbspU1FDJWtVNRHsQcV89p8XbstRveDmzNW7Jp",
  "key29": "wvQhCTdgQhwDhmRb1fvDFLjBwoszdyZXh1wABgR9nXZk1QF38TNkiLdic2ZCfPEW1gjSS7vMcL2MaRiabA75TUt",
  "key30": "4vj3PFo7M3tidrJdX2SJ6s7gM8Cg3XZQNiTf8Yquas1awZNiXd1dVyANRKFLMAcpjycNGmjuBm2QrovtXLQbvKGS",
  "key31": "5ycddLkCNe4gyN44552hsxH5xvJUvJAVuu1gsxiR6RQzVczEDAKi9RTUae5giYB3AcUdMDhrtk7nrDaDBBnbLWoJ",
  "key32": "3UzVpUAkpLLtSM9eLZdDwCaG3SRb7sbaJbsfFBv7XdxETb7SozFL6ZpAnaXcPPQt7j9P6JiyGMS7mscubwUhzV9H",
  "key33": "4xq1UDYegSxthpM2B9GqN7vTURRdMYXNgDDv8wvc4TXmipks8uPPVpqSwwHewa78AQFbnogUGwRLbtTqwWJZLwCc",
  "key34": "5bgrGVUmfoTJ9i4GEmbAer2evo2EbEFQ6Uv7i2zg2i79Vm8xHeZGKjUsrARJKnU8GZFDqdWuozFWpLJ3skxg2Qzt",
  "key35": "36SeLy1NgUBocFMejUYsKXRdCXaFvhkpQDB12cBix7rFtTn9WwUuWzNAGGc7jvuv5f1T5xQhTTpiWWVUA63sdiR4",
  "key36": "hJHywxS7Nxs6bLGb8hFKM8gwsDEZaNNSj9fhKHc9L4x8DnXBpu84KVyFL5ATbop5H4vRiu4yZaKsxJXYR8crHCx",
  "key37": "4BcjoBrnyNmJESqdnWCsAYCN7RpjwuEJmpDqNpykiuLd77anQxcbb68uCXkP168k3SzbnQs4EJdonKxugJPGXLr4"
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
