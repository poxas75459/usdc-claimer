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
    "4VuJJ5eHoKE44TYq73vToDBhUWYkMmMwNiD3kZwVKNxFGGYxFqQjHfj1jdtgMJpER7WW4W2pdJoZ36ye5222t5u6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cDZc5MNzj6fJ5gz5f4uWNC5o8F33DuCZJSVtgre2KamA7Sc9VVsKm1BXsZuXwQyTUVJbpnv2V1gBH4jwomreN7L",
  "key1": "38gFnMrxgCKndZP61WogfyTmrxkPAk5ptJTmKWJLLWDX4atf1QmAQTrMCejfBWtDqhqFqNXETuXLiToLr1NwS1ZT",
  "key2": "nzacWjKDc12KggbBkEj9XD4HYgbBfPGU9nA34xwSbC1Cmzc5EEeEPrm575RsPEk6QHRwoM9NURP6txDSeRr4RGU",
  "key3": "FxHN4qnaiTbh8gK9LCVaAtr93Y87dEc6ZmHpREHcbJtSRxEB8vxnZtgojgFu2H3svGtPwCykcxUnmTXfoxdNkrv",
  "key4": "3syxBwQJ4dJQPJe2smwD2wtCy3FotS8SuUXCtFiuqLn2awwHUfb5oi3hBK4bbYrhuXhAsqxDTghfwDzGNWSgbY9f",
  "key5": "38bjhtLXezEk9z8w6zawo7gtf2Cu5aPfd3x2QvzsbzJPGzYTTXVBi46m6NkLviDZ5mDXpioPjh2kY9ogDZVqvYbP",
  "key6": "3P56Fib2rcw66NavAkYNwGEAKwS4rtYNAhRf91AqiyjLCqPA7Pt368C2F4SAe62KJPBVpJNtaAdPC76LCxzL6NrC",
  "key7": "3VQKqDPJ5DAXeu2hX7AX722wxRDfQgfs25N42iUWn2AQ4SencRoDtDZ3Jfp5i4jhNKM7YXATC6XxXcVqqms5D8Je",
  "key8": "3bZzzpCKQnVNEpmYMEtVSnmxTbR42pNAJ4fhWNPRyRqTq1nc6uzJyPuMs3e52hJ9tbdc2VUicYHWHf8umWoiZcsp",
  "key9": "e2a75kP3hoWwERNCK6KByERqHhG5p5nyohrwFCvp5SUACprPvgsyxATNbopuS6kiYnVKbivfyVaGcGw9PAjgwpb",
  "key10": "2bPzsBrWEt2Mwm4c98wRL6e9aMjnQYf4YKVy978ES5iTtiCGcnHPBw31mXRakJBMPqbL77Y8ww4kPcCo2hK7xrMt",
  "key11": "3VzZ9YQX7sSgnVLPYyFAGdMrqaghPF27VMyN3XoGu81zeWFpWMsqSeEVqLQctHxYeZPxJEX6sjxGtcRWCz64aRns",
  "key12": "kbqRFoNK3KrH7Fhq1REb66FDzAXuEB9EQRwFFnooUpp5v2J7Ekf6RhMnr4AMDmM7ehLxZDozzmVdvwRaMqxXP14",
  "key13": "36PHaGNnPoWi3rrmd6YSSM7z3EGWU2tohvQdU1bC7zBxJ1JEdVUxp9QcStGEgdpbeg8gksiGdwAsxwFMmoSrfmQx",
  "key14": "47nrtvJ51hUMTMCjuzWfTJMbWBsRSYBqQNmfSR64La3DY3v9cNVuKUA3Y9rSKyxKocKPFGxvmpTYZUPpbqP8rNBu",
  "key15": "2apFdmBQePXcyxVNHGKLCXEwziswGhLtvWAHpfJX9RSHk3BkCnHix93s9j4YZ8ZQESmpjTBgkXLjg1D9gTyMEbba",
  "key16": "3PjWUkT1QhGQECyPUBkrNDQtKxspRp8a6YR7pc9NWpEUsqM7gASaBAQpPgatAQBfjfX51XmyqWuPGb29GQgdasbD",
  "key17": "2vps7xKvnmCpGL7aspGCmnsTKnuTqssonMfjHAi4xVqEoERux3bM1w9X79WCbbTmkNqqVhaH5h71o3pV8aF6jqAG",
  "key18": "52yPMus4as3rJevjWNvvpofQKACPrtDLknYV1sfBk8bNue232hARiBCVcUkcHQpBYNw6BFdgHxhWKNNPzgUPV5MT",
  "key19": "3DB2xCzSrJTd3yTBgoprG3KaTqQLJT7Nb8FPAJgsQW9WCkNetKHk9SJ9XfUMQqVYBL4qLKpEptBcBPJGMuZNB6DB",
  "key20": "5vyUCH8VaqRai7GD1YMeJD7uZbotwodKtqAZRXTrbZuypQjTTBxdYCNo3SYbuwphxoRuMrMwW7ckZS7QAm58VwsP",
  "key21": "gU2nCjHwbtAsRNRMC3UmQnkYPAj8d8QNBd3NuT2ynHcrHqbvrQ95ANLyLcsCHoaKdt9xY9dnXoM6nHsZKuuHxPM",
  "key22": "5kBTDQBM13SpJwZdhZKDayMoWvs1ctgptvwQMBaURF4Fsf4Ag5REmCsBoMxzmn4nzRM55wNuXEAYs3er5NcCWf9k",
  "key23": "5CpsjkJEZy3kNQfFazQiEJuzGLfsxcoKh12Xui2QKyx1Di1hcVL3gFizHZxpkMRgoLdtMLJxQoeTk6EAva8Y9una",
  "key24": "5LdV89VNzW56dgZjr4jBh88asDyC27fVJ5sL3JSkGF6gfqKPvcNw64r1k2vetfA9yngSycv3PMMuxvUdGTC5CbyN",
  "key25": "48qXke11HBrh3qzKQKBbUxaUVnumR2sHataHiEN1Uz6JjPYb77Jo1DroLyR1jU3ottB9GqL5TnUksYgsn8c3nZDQ",
  "key26": "5rW4MEDBL5djUQjzzfdhgGQMy36sS4YPAxpaSkgqfqVF8Gv7KE2BDfY4JukUyf5aqX4pe8y5q9j4nVg6pDG7DapY",
  "key27": "2NzSb9efotqJgXPvRjQjhhxbTyzMGSfTJ9J19e3K9AoARtVFnVJnjQq7p3cpCRFSqicfQk2bGqYYhpJ3nPXhVc8m",
  "key28": "3tXQKN7ugD98k7X93STA7nDaTwsxjnKACmXbxCshSNUEScVPdScfuLR8CenXpNnSeEqk6ZB4AMhmNZctRS8gbre1",
  "key29": "2Maun9L3S5rZqT6sSMCJXVG1zXC4HX6h6ZeDogS8cBvDuPf5zKrintGQR5z1qFiW7qQMJFGX4NmLp2Jnjw13AXp6",
  "key30": "47xkyKgfvGnV9tsaPD5K2JDfoYRjZARsKPJrWHfhLjYVTw3arjdyoGB9GRVkK3x3CszFvsfaBStQPJob6UcrSqhv",
  "key31": "3xYsepe5JCzmPNve9WC7aDJenyRDufUXKHTpcnpvMY4ywnWpzUhfUXLcwjEZkbyW4Nkm1SYMjNPrQtKEQGAcamun",
  "key32": "4aWyKcxKE6KynA9D3EJq2GUNNLz2qaUjX6CLR9643QpqVEtF1kdiVYATTdpEWuCFjWtAPyMxADygxe8RM9QveCDt",
  "key33": "5YNqJsCChedhLHHfWeTMkGwVk2erMtjk1QEodsPdJTFpSYZnAcJ4Yn4iynvZih4vK99XWvp4osMsgWXeonrfbTZw",
  "key34": "2Rd5hvijod2ybEi3RN3aFqgt3LR4iwx2SCe12YtdcGYuEUN5qw1HfBLZQzA6JEc7hiKgzuaN9DYFpZuQAeNRnUet",
  "key35": "4D7QUjcdjNrYcuiUdFbyFp9z417Nxn2W6FdorHkhnp4sHxpw3UUP7Ms6mXb5XkmVo951XK5WCam4kGWkCotRVxTN",
  "key36": "5cCGCjf2QvhhdBbkvEGRgNxq37Q3qvcfDf2bhnupUgffssHVmJi2Zov3ekWa1jPyggRVZQcEDSVfjC92A7gnx7vP",
  "key37": "2etbJUsgYUiFBLVGeNPvxjfCeY3FREfY4Vu84p4CePN3YcV5o88o3UENxkei2834ro8VjhgrVDt9X2czm41waGkX",
  "key38": "2q5X5ckZBEWmgY4HNkGVYbUeBQYmCAsFWPMMpWEWrGo6tPGG2qvB88SBP6bzfpfEwKQvzjDMUg8XiHD6shZNXSVZ",
  "key39": "2bWtvyPBKiGijQynKzaAucjL49uTATgtQW1A2Axd6Gnqp4FYFoe3Kv6jk8heJJ5MjFAVt87ZkB5bP7qgZYqgeiJf",
  "key40": "59ruaGMcg7QgovVcCn6jDqrxdwq3rVaAt9oCHn5rDqYv9AiXYvCoS6KSUAPoGLPMcU45tWvDkXVQcdNvFtwm9ELS",
  "key41": "2CSGiwKC5xoBF9UxnxvrcQGYXEa5NcMWuA6k9jbFkAGD28GgY16B4uweUVSX97MEzTDGnUMVZ2Hrq86XAwuFZ1wS",
  "key42": "3KeSB9iMNBkpQMiT5ZJDdbuqJLHksUkCDcmb38r4gegtNM9LH8HfVJ9MJfvC4Yh1iARoNgzhjfNWsGCBc7ZK11sX",
  "key43": "2dXKEg56FxcpY7TpNXWBFPDoqJcZ8ub3qRPp41QVwLudYbaGynG6fowxm3xVNCe3rKcTM4CvWpYeg67HPBR3pC4T",
  "key44": "4SHxkJXpuAFxmJEWzeUhnSDaqXkSPatxDDtVxiVtkvGz8kiUof735LziWz1mu3SZaMghRgNzC1R4sVxHChgAktB",
  "key45": "4SLsZ442KDMx25Vv5U7SZkmuXU5CotcK8Wa9aHTHcfkdugWMzeUbBzLJkfcRexvG6qT9dfyCKhWTGua94dcQ4Ee4",
  "key46": "Nafy8L42fCuco1Ycob3ryK6PqucqcCMYZXdwMVC2o943JDpnvA1btFP7aDE7dMEaJwiKABSJTgP91ZdsVeBFWKy"
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
