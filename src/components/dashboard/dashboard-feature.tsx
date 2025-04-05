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
    "4gk8JHjARm7wSUoWL6Bd2AmbxkVzG6CpamjJTunSrc1ZoeGAynEfvERFFDB3c5FMVim7GoLvES5s6kVvEcb3qcqS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WaD6sVdv8kWxuTkS7rvLoBdaKubCwyGjTDoJzXvXeEKQT5TU8xVvtKKk7D1sBUQg4YzhUSrshMSwGXWScWiKBBH",
  "key1": "5uEEDfouFLmjnG1GYQje67zMPHinUWAbSg3Y8jHJouPugFd6YDr4F5SpgoYDgiaRWhhnnHqf7dkjnBuXHc3rPWJY",
  "key2": "62AHvvskxEHuVXiBPc2rUPbNSbMbbYbGq4acAXf4KkYBctweVJaannXYoPKUjk6jx57qbtaQbqfU36b3JZmiRVAs",
  "key3": "4qFs9bpbLmMrcTVMX3vwhErw2JLvfYx39XN12c7z8M3PHSnXhzbUWHF9wjAzLB6oaZuhyy9763JrQL1D3u49BZ47",
  "key4": "67FtAeEn9kzjnCqVDZwhUSK1ZdZkZM1r1QuHW7bkgsVfFwnxXvQyihiLNCUhSHFdAUroe5DbNdVfbzbmEfJGTkgB",
  "key5": "4bUiS4bkJMJKxVEhiBkusuwm1LLf6ugwqYh9DAXLGtfNvBbyogSw4x853puorPoxFWxKzf7vwh3Ka4USHyxfu11b",
  "key6": "JQqZEyZ4AzgCQqid3Q3BukeWZQ9Z5Cx8UPMnAN8ABhFu5gkfmDaFSjsGtEuxxN9S9gsXhuM2SFgtqfgTmmtjjdA",
  "key7": "32F929vaZ2QJKLWZPZn9f4gVh76iPjDeGXQFNFmcTKZwy5UwWVZTEDAGtPiw4Fb1gtPhVwtRJpdUWMgvTsdzzuF",
  "key8": "3EGr1HzJ9n5yXzzk9Pnxbeak9Wzn6CrSybdKqLjpcafsT4Az9TgFGyn3psxCHZEU3HbYGeYUTYJvcmemt6NcKnWu",
  "key9": "5D4XighC8UCaWKJKmr4Wa3eg5gX4cwP6mEMbQCiA9ShibwuFFAHfTh4u2zpsdXK9tdSpGpd4rJ73m9V72jeB1xrD",
  "key10": "44mRDLdx5s7Vh9iVoTVtQfzu98J5kcw1ybjF5DtfpjLFag7yCuqNbe6eisZSRPkM5dzcdquvYeivBzZLydLzRmm6",
  "key11": "4C533A2L58w3wE8Qw9Xxxr2xbYAEPcxrmuw75GB94uDQ5fRvjnPXdYvg6xAKgCUyCyah1j8N9f1cChES64SafBNn",
  "key12": "5WPfQQrArmotQZPYy6F3PFMhFLoRJfjWzoB1vfpce5cgnqVTDwfVJM2v21av3wXFRCCrZhBYNa5g7W761KG3TYG4",
  "key13": "2aVXQeSFBuTjTwxA8ey2gucvRcfwevcV6CcQj6ziwRjnHVb2ALrpchL88pRYrgmCzfQDiE169HFXVyE9yCb4azhf",
  "key14": "5oPbLjUt28XSCABArjWR7XBhcE6d5ntvYmqL7u9EKLNNZ6dvzoAmhejup8x6hR3WEiMBRz5ZrAAo3pYnMdyTxD8t",
  "key15": "3KGHCLYotNPqrsPvvkTjXDhRAZeEmr3ecXLbaFy9SA2Sup5V8ofWQAzm2i7zDpFBosiyvpagwxjvcMXSA46txGVB",
  "key16": "5kNf5S3wHrRKQH6d1beh9xcQw8M9x4ejujdLBRxSQhCUVUy9dfJJeK7ntfHDdznTJEi2zFamhCZQf1RnyXE7kGeG",
  "key17": "3LSJWKgeCimHrvToFv5JuGn1iJXiFNyiuF8U3fEvthKd4sF9MeZJ6xHnggTBKKrc8UPkHPioEHDivFF4yuQ4f65z",
  "key18": "3yHFw2QRSW5tCLfFq6LXpxXcAUrEHQqF5ubCnyDMb9iH5MyBnAWU6WQPv7K6rjnokWatpFpdY6sBcrvR6JUWxvKx",
  "key19": "2Z6Qg8dzJGUVVLQfev11cfunp1uqy362paei8QwiaDs5K53gTZFF9QfAUMXR8AdJGxVrzuHUwi1JCzRfFkPs2eXf",
  "key20": "3phVYhoYq5krdmqwK4prm35C8tacphLJkyNWRDpomZNdBM8DtAoMcqRiAgCFCSviG5rfytJU8z9ahzd7NGLjGk75",
  "key21": "5ynMXo36doFXaYaXvJMQYTfVy3DFRGM9pPL7oCpm7R2u4TAu4Ttu5yMRNyPrkXYHhi8JrDy2dVn3YkzhPBbEoBx7",
  "key22": "5mSWteLDngXek6j56wvqJydACCcjRP2xBhErBNJVxL3wsWSV86Vb76p3Rb3ByrF6DwsFppgdfkQCiSh4bTZiEvCK",
  "key23": "59BLEm1AjqtwYLUTjfgpEDwCyxeRcYKSTkAcGiy8eAz4MBsnxFogurcod9FGGyZczTkDhuZqCJFC9tASw387SR8N",
  "key24": "22hqWfhYjgDotAMYWzrw98NRbsMrf4omNC7o2PchZXbYDH7AUSSDxx7k85QwH2gR8VRBko3PNG7DDdd7NE6jSyUv",
  "key25": "3T7GGADGGd1ATLGYQhy1dsUYGQ8U8kydjQkeUJEqQv8hNo3WsRPGsDAcHs77X3Hj3GrUNLLyWix5u9UL35rPSzMQ",
  "key26": "5SghLyHYWnqeJZEc35skrs1SLWUrUunVwmiic1Ej42ewXqeyJSCFnWuqXgEfKyzYNDjfX1V6jqK7o5pfyGB4eZsF",
  "key27": "4AutzeEMxQLk6Y9WyPijSVABJ7E1uCsQf8BYUifWQ6iAFpmA8X8ApgrrGcVt7VJZ6KqVMn3PZicoBosU6DZrnTbz",
  "key28": "4vwQZyv11BTmMRhooKta7CHQTMhYikuswJfF17A9sMPUwchk1bM8zLBatkDvqVhmUZHni5WMGYSNSBtnTsocMwT6",
  "key29": "5RC3G84fq4VvePyVFQ8Hc3ND2vGuwtS6opuCtXEyQ7vYJ5SPq6NhSJjHrVzLehAtjvQBnshFDQ2BefgX6kLgp76U",
  "key30": "mGroiogkM5GGEk7dSvNaQok4pLAxzdrxkrDHCprtrhYQvtKGQzWJWeKeZvFiERMvgS9rjcbPTVDfjgWaifDbF9t",
  "key31": "3ghJNz4hRg2Bvn6oFocoBHyPoSuTANprh2EBSh1bWKUcZKbCsd5YeLZ6zTbMirQ5Yr12tg4sAygFGXoSVfU4s4jn",
  "key32": "5fpewbhRqh2ASmqD4XS3Yz1aSh3TjWTwu9RMWAxt2PW2WGyQJfX6S8rYFJ6W29WW8V9MWb2X31cTYkgwhfu3Uzqn",
  "key33": "4Xshevj8JBjJPVae22vCEJZXXWc1DSwajHSAM6hL7LpZmVgRh656gbpaVnvh84NN13RPWaJVZ8NTYSD9Zmw7oP6j",
  "key34": "4uU8siyhaTbNeA6zAK3cqgaPiEReg8tqDMZ1aAtbz3Y2BCBqRCF5ficN92dxcux3P6L25XLVT2H5uqSJLicxX1rA",
  "key35": "3vnHC6xCNgNPUwyJrzAKFFBcFJfH5uBMFnLd5e6PG4Emxj6Jzy21rUCZRaqT2wqLvNwXhrKMSyn8bVTsQ4Tnp3k3",
  "key36": "3g6LEx5aesBywKWfAiMTuk13ZC7mJfbm8mu4kWf1WFrSs7njpyjKNwXFBGhpMGUt9xp47Atccyi71bSBkqgarmGd",
  "key37": "5hFrd9gZYuTApb71SjNiWotUfhGLyFXZNoto7X6FkVSHbZ3jGUcAmqrTQYgdr2kLUAeVdy8MPskHT2e1G6VLAoM7",
  "key38": "3uZgR6E37wz7aPmwR3tzJb7XZNnJmQuDgbtsu97EX6P8mquhcsUhExg5D7RkKBmUZtL99XoyMyAVVxH9ppyPWtN8",
  "key39": "uPGJg8NPDCofkRyhqUriMAVeVQvn69BFNYegzwuGAmHsS9CbeJnuPTfH2qFsFMze3nqcVZNK9YWUZgToZ5gLtSh",
  "key40": "42GrvFSjbVM6mVWiVhv7K8ANfP3frJf3v6yYcxPT2bpqaXZfZ6jBCFv1T5GAZUZgFRFDWXVmGzyg8vSQGAK33Xmt",
  "key41": "wRrxBwirNKCPXsLaRJ59ic1VwWmF6HnacC4sfMz7U321pRKgu9x9szUn78imSMpx2c4pZqpiGeQU66y5mcuWqfz",
  "key42": "4dZ76Lur4KW6cSWyBDd9tFuLpQ6PZpurzpP7CWnzQ1oSfndoR8PD3kaHMP6ng4A4M6wgr86CCsc2hFw9hiWjzvSy",
  "key43": "5fzsEf2yc87zHgFouhcybsPrgn7X48gedkm5p3xcu9D5Qa8JvZZQUEotQJqkt7tL8jcWSFB9aX83Z4wxHmEtCwjh",
  "key44": "sUQpaZnpL2BoKFMMEvXakdKyWinsk8sEDxyo97M4ixkFAEX2rcyMCvGUNi7GAziFtrhiyHXbXQga9FxYoxhN8dV"
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
