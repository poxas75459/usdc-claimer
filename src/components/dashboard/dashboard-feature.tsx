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
    "3qN8chPRVjy9tqF3sXPST1zchbob9HrueYt25ZKjGqEnJBGUUTAXn8tifvCFG4UvaAeinZvb5SJZPTx4FQTcb2Wd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6goPDqJiSenjq8Q6nyV5TgTQ6bDcY1D4yC8qu1csMpVNKqMJHTp1KxYBUzkbSwcev9Qm8YRtNxijoVjNLsAzW7o",
  "key1": "32Ey3jsihi8dtQGX91P4fueKK1jdTP2CzSKo2TpPBaa1DkYaqWSALYKV7ff92DnzPHFAWq8VJqLNyVtwTVR64CJQ",
  "key2": "39CSNMDjaJSA7ac7xvZQhw5DmPg4cWdWjNYu2euKks5VtriYtgVjN4RM8TQ95rqDAzkZE371LLKBkdG6wVN51tqA",
  "key3": "2fsAzozon4yKPbfYZAVaZSh7qC8UQkwwHtwgyCgzZeLfLUCySHJNbuLJkGvVH3bbHn3H24BbpMTdJ1QUHyNzQT3",
  "key4": "2Lo2B7UdT6zQJn82MBxSnKfD6TQUWcshy5nGDFuZyHuNQex6zNmkc9oLNnWWzN9YhAm9BvmFaTCbdXrs9pWtnYGb",
  "key5": "3ax2pPBeKRWPiBztsvKZgbuca2QNuF4iy47szWxKvZoQP3k2K3vB9vDnf3cMrzWMumY2E1fUsoELoPDodHFA628g",
  "key6": "4SgKATbwiMd9YX5kQat54afr9V9wsraMkA9uQ28WUpuVjFN3KpVAiavXQLPeqwPf6BqtffakvMp82YfAzRMWNDSJ",
  "key7": "4Z7XLQpY5cfwsyK3RnjxRMT8m9fPmp9puaBjtvUUbdkJfk8b5FsRtRkDBxrEqXSs9qrCKqdHHGhhVWa4LjgEwqSH",
  "key8": "4AeSbEoWLxw6vFAAhP8qNYzBPVWYuKFM11gVqiUZywv6eJM5XrXxL63w7U31NuKSCXywvvsSSYZqtiu2HZUqJrHn",
  "key9": "2ciP3wvTcbbRuPqdcd4APunz73dGv3v4zNc3ckiN3iMdqerfexmLqo7LhdyxQJXv1VXJtiL5Viy8W66YThhjTBSD",
  "key10": "2gUC3isJBDpDX3bMMjiqKj7Ui9arK9hmtysdLheegezn6aL5b3FuS7Bb8EA9iSfd19RiRFAkvoPDwBWaj5ob6koG",
  "key11": "3DPixkdjcDD6ntJP1DUaGsupfEamJs3bN5KpPJNkukWAnoaqLWmRwNvq1c8PxVB4YRSFAPJMkDswM66V16XSyUcK",
  "key12": "2pmymdyUp6Za7ptXw4wsRUSsBzRbLJ1NNG3GTFYpVf9qgk55YNYkRknbowrGXZJttbULRiui2oJmQxhCkjCBT4hf",
  "key13": "5ZLXutdPu9J9VStHEfir1khaCLSb3xs8MQ4eBNADJfv2iLAPugN23azM915DriNZr2XtawhDfTbzVBNcQC8NdXHo",
  "key14": "33iHzwJqpqQqDgPhwsEZDcRSMG9h2oAgfYfRitb3EZJf2ub1qHdeChLvuDC6byB26aE2wCqzT1ak8xTWtUL9txhX",
  "key15": "5emuqFn9b2vRi7H98CLEa44Yy5mziW8Pyn5qmkDKQArfrayJVVnX9J1LS9foGVbqPRdHSfzcSHTN3D6spMoTpmks",
  "key16": "586ouj66zsXknnAJ5DsanyxJw5ube2Dh6dnzUAdf6codhXDduSFxriRZEgdrrVXb5CSAxrf7aDSLck5e4pWvaTSq",
  "key17": "3tYbnZuasczd5UhRMLDXdt2uKeKLbdHRw8tr8C8b7knFNigaeR1wecCSDaSqpvCVVPrxXrj7TWwrWW8cpKcUHcSJ",
  "key18": "5MUfAVoMu3hYb2EXEcZ69NYFztzmiqbhjEqoXhpvEVKnqGg6cbpesrQKwTW2tL14ZchSWxUGuFnkaKtpeYpJT7B5",
  "key19": "2RLmaCfUvtEEhD7JntKQgwYBXdcJgd6AwrZPVMhrmVZG2xtQSHAX4uyHTgfAZNNC22PzdMT2MU5JxqSXU1LU26wK",
  "key20": "ryGMveG4eiJ9GARX6niA3QmtWTZEy6M5CEfVrDaL2tBC2nzUAuXrdM2ybbka6NyW5XJCoNTCoTwNTRRzzAjFe8R",
  "key21": "3y68Az6U6g5WwjPEpVjgxkRGsoWV2G38oXy7osHt9k3dkREpigy3HWrhD7TLzTxgpLvnkiJqsr1qsvYqGhnfENgi",
  "key22": "2z3dkiJ1VipUEixoxHvcPx3VX2hRjjZNFdmLvAZkcpy6r7p26k971Lf98hAADEPTeBEchYA47uQbS691nUdtic1J",
  "key23": "2aVXnJJQE5ZbyVzzujyn7tchEuuS8ecWCbYXnzHaTCCULqo74YkzT8iRKG3BzxRuBEVEB4nP3KHyZSFKbeUNPTL5",
  "key24": "3h1Lq9H1eTAcQ2CkFsvvr9H2usQTKHJsa6NFhsyMt3hZYnDo73oXTCNWDsBi192sfTik7NAXkd1Aw61oFJaK3Pf4",
  "key25": "2QZ515GkU1PPskmj9hb8ce7tdPxPMk4VryN757BLbPan1vJv8Bp2fMjtv6a6cFUqQaoDnxX7TGxJerAR6inB8Vug",
  "key26": "CqXAMhk7Xrody6rhXm2vbcjiqqWQVR3WLrxgSWYTnPNuVEBC7K2RGnTQ9PJNMX6J4xJ9bjXvkReUc2RaTuxDxQ2",
  "key27": "44NYck9jz5tDsbB3CQkRH55SKysU6iAGhEBc2L9ThuWZo8irMWYYBYmFmyrR9yzhFsX2bXX2MXxT7aRVmR7BtnRb",
  "key28": "R4PanjkUkAad4wZDLXoWqUAPG1kruMKy27WgLjx8EMtP9ReqKA6FpwzDngHpKMfQTXYmKMdkeBd6GLreYCtBAbn",
  "key29": "54Ep23VoEdaXgc8xcWBoNc73bdEgETxNvozyQyzwiDn4Yg9nf5seQ8CTkDM8XUrw3zg8CkZMbcXsPNhcvyDszf6e",
  "key30": "2xZqieMH1GHinYV7JotgREV4xPjB2vLkr76ZaJ71c8cA1kdkc96zmy9kgz2LzeMDXg9NfFrLdo2jqCMggFLidMFA",
  "key31": "32fHNhWs1kTJoKet6rChGPUxsf1qteX36pppgn4t1po4GZGTm9enredNLJd3Sdztgrcw4ydLkWUG16ttS5n2Utwn",
  "key32": "4ViNbZCMAZngXC7iGzxeGgARhJQFHGwXgg6oNX6oXunc8emYTfyGVrpLqg1b7urrdKz8UhDVruNT8VmXgfM8AGsg",
  "key33": "66PA6nZ9foxs8ikLEuFfPoEpBumuqTfYXkehWvfWjVfb4wAXWgdoCbrviSUyvAZa6q2w8xxFvsRVAq85HwzKzYBx",
  "key34": "5x89tpDVAsgem1vD1fpshrMMWUNDGG92T26NGVNVxJAAUScUQJaCMEv9NsyLPTzy58LEPVJo6iuThSL55aUycxis",
  "key35": "4ZJ34XGPDvNm77xYApFhUnXWcSjAzC5n1X1kvwAuUfpmiA3xTKwepXzr2uAq2218qJzkWkFddHAACLM1CcRWFSH2",
  "key36": "53BMkB1YkpZMoVeoNZWFc7EoNraVsA2Su9C5kbbi5FJxSnu6qgEnrqVGNHuDpScRaXxc73HJK6ZGLBxdK9gNiUHK",
  "key37": "uee22ZgmTx9HfXyjYcgNTyAmbz2MCjpiDJAmGvNcD5eoNZHTugH9itL6SMTdSnbTVvVjC1bRKYGux2Dt7Cnsg9x",
  "key38": "67r3Gc1F77bWYcJRNUtvFBa2CuXHCaCLqfL4yPPcCEN4iQXcpp9MG4yd4YgGk56RwmBxnX77VzBuGsJyyNnUerG8",
  "key39": "3WAUrdANbXWRMSopA7LhJHCZekEFqtRCqHaVVajZtpiLrYGESc2Smk3sAJ3De5tyXLRFqYrgKuJYrWZfcPWqWkbc"
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
