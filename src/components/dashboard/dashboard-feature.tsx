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
    "Tkbrevd7orBo4HdSGTffJoPZb1E2Va44xJiFwWGNft6ZWAjMZZWBzbgDCn93ATJnEPo8jrPT9Bnxb67jHHQFFpw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jyDwVGMMk7gGq5b9tZrSD36qjnBpCTGtqtos7nji5pvyQZesDxnpfb1AVs8gGduAedFBtz3Eoz4fwwjSiwHy4LF",
  "key1": "4q9F8DrufvzdnqZfVTz2XTJP28Vn8aSP7w8dJmBxy9NJpx4JNWDC17WcZ38RRvZLFs7NraM2xvuFpbvdV8okzYiM",
  "key2": "3ABdkjzmvPmrLJQ3BNWwNZRDMdLzsHom7Ve4VUNf5NHgc6zqJxRxdy6s1FG9AqE6tXVoVVfgxFRV7tvZpmdiv2yB",
  "key3": "3f4in4Gq6QKjRvxZgGNiBQgLiSMVmpEzc2YpKWSkSSpm9DzYJnLZ9pm8RF3WKPgRSMZhEEEJhPJNe9h6vMNK82Df",
  "key4": "VqGoNAfMneJYdttLCkQtzuy4gNUAZr7HNFuirNr3vTaXHtqvYCjaHmuCBe9D44Ks3raJ6tN5AmUnqTJ1h9nTtmd",
  "key5": "64BmcoLgFfdzKwVDuk9sJVo3S4rWgeYGnrT4NKeTyckv3kPqJfkwp2BvPiDaSs8EPpvr35VuaWoCDscHMB2rMeDX",
  "key6": "2mopgEu6L5YKsWXKkk1BwvjYmSkfRcj8Pa2xa3TbujC6naEY3bT4XhsPx8ZkeD8x47NxJBDdJPhtoC58Fi15pngf",
  "key7": "35VqCXJTYPs28KG38ms2Wo1qsaGzXmF1qWKnWo7X5zrytyLgRRD2zcyd7KAHiDEh2jTVgkWJUMUBeeTz5hVQk6BR",
  "key8": "3sUWqHKf5rJHV5bPE5SPj6ockMPswAk2y2xZ98o5i5yqaDAgwTL5BWCPBxCMV5pej6pLkEobUFFuj6foT4N4wLNX",
  "key9": "3K9gaTMEg4sWWngS7vbAm8zK63xKhbNYcv2ztJQGs7k4fax5zXgoVdtTRdXHcf2zaxWEDXiDpUhbBZZDoYy9XyTP",
  "key10": "3gpAZwK5fGvPTUxj15q6fLDfMQgdoNpE239wruLf1RTxazaQaW4eVk8nKPPUYKfAS8if3SWCgoQMGSV3kQsbuY1H",
  "key11": "4K9rfHXp1wQRgnM8TLr2uhgBJRJKU9ug268RbcREtA9XtqP6ZU3i83Q2QcF1mRqXiQ4YmwGAV7BT9nXpYJKbRiGN",
  "key12": "yqNijYcaAr3mqTh5CjXm3rs6wVTbQQRG3xVJvrLTsQnmjsA3vuP9WWFY6x2ZJujwh8bVDCvyShrVHFrfbtN4w7x",
  "key13": "4cCMMyjfgeEkZVAfFTNbs3RjFH8TC75MKep4yXzYRbeijqfadyXYwgKZRwvdyefUiDqDyzAsysNjgJrkbCHwZyt5",
  "key14": "3PK3yrNAvT6Hh9q19csnbNZPVghxXbXMBCksachf9ch3L48yDodDgR1VLHvBfmtJg3yePKAhCeb1v3C869TARw47",
  "key15": "X8BiitFRoHKrTdkkBybNrVdsptxtQL7wkFmrTWwrB6HchGYvXpcKWLDGrcGJMGkPE5wookC1SaS4P4tt7tBLkXZ",
  "key16": "4sFB2pkPivYmoGqLQnF2Wyf85n9oLx77vTyZUR8GVJPFQkCcXwVoienwmnqMLdA5MhhuPvsGztVjzywGQVb43Uxy",
  "key17": "5YTqg55DVWaMA5uv3ygGTYn8SG7qPHcH8eqvGbTnCH9RbUpmE38oapBJUUt7q3HmfFqZoEQwkMuUe5aD9Fwh7qyd",
  "key18": "N2i1h5GAv6JcPfJwxKLvz571ABVDSVkcYu7uvkKSX4kmdXmgE7T5J1Yct3kamBMqE6CQhsAgrduq72a46Te4SUo",
  "key19": "46gNBLCfBgELvBWknmsEEH2M8DZQxDoAu6cK9gfFi9MqxZBMfXKHyDgww4Ziyr2t34cr7pcH1Y38ZBX9gexwfSDS",
  "key20": "2VUpg5qe4VHY9scdbzLoP688poRisepMZmifqFsTn9yYJg7QDgW7m2dz3CzEhEMb7SyAK44B11t2F2RTSWDo9Zaj",
  "key21": "33eaGnFvWKvkaz7yBHyrkEx2PrvzHitAmoGEa79enVhBNUDatxAqzi4mtXktocCkrnKb7TXQ3kgUKDNxHT4fao5v",
  "key22": "5xFNU4ybrjmXSsPiKURfqV3tQcVmea7q2MhuxcyxGrsqsY1KnAr3nTX5TXP7YwopeTbXLyvubJBZ5DDPviRacgyT",
  "key23": "5UKF4wExtaE1Eyiu8yv9xR3LPRf3A5juGrZNjaNiWXkndkF8NNWeYm61S3WUy2uvymopgWLGLYK27egQbocZ1iS",
  "key24": "4WKsgadVAqnUoRP76DLVxUfYsZHyD5XrAtiEeQFwxT7YUtDr35duM6gT4XXoSgwGvTn1RDvWie2LgmUU9m6cMPgF",
  "key25": "CwQf6sM1krHDCnd6pCnAwekQuW2dF8DarrSy3NVF5bEm6fLLHQ1bBu8tmmXuyHbAHPu5Nx15LC6gSQL7NWvMs8j",
  "key26": "64SvNyb9iDjsNMETmbca1MrRY5Uj1eTLPMpQpCHswpWuYsmuahDa4Q5rj5scfMiEjchZukUJ1tZyv5Q22tJzXq1H",
  "key27": "2fHe8mgbwpcwLQK95Z9cmkiyEtq3cJZCSeSKVTebW3iLoCQF2oUMcjjk4JiBmD8at6v4mGcmfHk6QGvjdusfFaA5",
  "key28": "2CkvzZpSbLmGSL5xoJgE9wY4nq9MuVQ8npkhbY5nyt9eXzzbzcvFfLhNHRBpzNr7VthpqKAFWgVKzn9YLxg2fDBC",
  "key29": "2UXKdwWzTezdQ8JfXTLhodTyxi8B5JA1TxjTsh4XPisYC1sdUX3hNxtTLtSJ2kCTGKy9aBjbSzvbnGUzTskiQ1rf"
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
