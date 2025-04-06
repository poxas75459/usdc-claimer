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
    "2u74UVLKXyGSNdRATFDq4ANnbeqqzeFh7ZBMmaRYMMtfpg9sDPooEqtkkJA2MJ7jax6CGKGkhaBew7UaPsR4iSRz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VNzsZE9sMD2ZytnGZvKc6iFZBoioKjs2NBYDxZ2hJif5v2WhZPYM7U197BKHnbGCZshP59G7fMpEoGxfK2FFKxv",
  "key1": "65SktmMWaco3sLTsLEAn6NdbU44q4PDjuj6AFbLpAHP1i77cuuLPV66ft6P66rhwNcH3zuWBa4EnnMy5FxiqvHsh",
  "key2": "4voS4j7gd7oeYLJnVgA6NtEkqoxbF3tj5MrLLHYMXsUDbhSWuaEYSrTSW2JmNcRmi2ThWsWJ7fMKJd4bAmscXzqT",
  "key3": "v3zeYYPe7StoFfcVF3Fq7WBcehYzqyYXri5szmaPKmRuihMD6aCdiST9rxMvXwK8w2F4Ui55QaqPUsAmRFJJ5Gp",
  "key4": "5UQBsgsFLZZQtNwwCezSxjJ9XsxE7mEB1wmVEzVoraGjSLKzxexKACdyBw549FVRHX2Su2NCGGoXCa9tURfUQctk",
  "key5": "3TDTUahfsAbbqgvGVPgpWHGEwgnYwybJKAaGCKEBRX43nfn5SQheTvzcH4RqSNGDsqeeimg6A75vRzoVzscLyw6d",
  "key6": "2Rj3kXkffHudRctgUSTXCLyCKbTLegCee1pHC3CKwCF3qoiQGViL4tkkkKWWnpRCLZg1MxiFne8E6g1DAc9q82Hi",
  "key7": "4v7DJ57TfCEjgMdSAzVCEHW9bF3dfDy2qwFiHiAmgHzmk6ZdweuAPpPVt61jXj6iJa7cenYnS11qFuqFzfSeCUfL",
  "key8": "aE95jmNyJaDAvqE6RyY1xSUkARDFYmi51iaxrj9d6dQbnbAJaWxfGstTx27XAGyx8Q9FrV1NtUhTU7nsnVg1qt9",
  "key9": "7HXdbQDWrV3Am2UFimJd35MbszyugonbrbQmTCte5RiYueUuHj3UMoMk9dqwNTcx4vAfHPjtp6NyuqsxUbvAzNR",
  "key10": "5gZpyD7xpemiH6DQJrVyroPgLNzKF7aMXEzsn7UR4AktEua1bvCCAKtnsU8qpHJeaq9QHCf9kGmb1Nz7xnqxCs2H",
  "key11": "2WWQgvJyRzt2EirJuk5oTuzHMtuJ2BAh3NZcfCyjEojyjaMPYx5kTybaSuwwSB9yDq3LzzorWp1YrWBoPG4k7oD6",
  "key12": "5c9SmQUpLjmiHnn2bbAQFCq5114LVCyJevBF5xpYT4DyyqyStcdoKUvAnZ5L958wJKQzzpM4RYcKuZ7EGoJa5tZ3",
  "key13": "8swGft38TGMWc6xMtypdCSG2D2XTxFixXpo3pRph1mMdJ6r54VJhdPqASeYEfRnNn5Ti4kK7v2xL2yfmufHciYJ",
  "key14": "8tpNrneRUbhGktVA1DB54ZYfonPC1kvoWn8wq2wYGW6kGZf8F7XAtSFYhA5QuqShAo4ozqTnAQYdkmYCbVTebML",
  "key15": "XPqZZWhLYUwqfsmjtMeCAE5vtKwePZhd6T4NY8CDcq9ivnq1RyEmj7XNAvfhEodo6gMe11Pgkd6Nx6L468qqsLN",
  "key16": "5rXw4yfFnFTTRJzWKon91jho8DqPC5EorrhH4f9eB4oj9Z2eQe1RDkHqpybiC47bCdhGb7h8ujeXNnar8c4AhquC",
  "key17": "cChXnqfeUZiEajXVV8BwS42EeUEPsar1jjz5DiMCzp7K5evBEZ6scuPU1qi9yH8hnbSvaWCxufWFKnU9csDEVH6",
  "key18": "47CnVz4daiLgx7NaNN7XYKtRR72ToeHA1wvSfPRBEFcmPEVXTtSKB5183RaDcZeZhWBJ8cUrebZL5ShkoDPCWQBV",
  "key19": "3msdzvM8tqntfmNhnSWXyghhLvea8dKedXF2UTFwpvFmsVfFso3ooG9PTrFVXiYBCsFyFX1HrvFB9znREpfcvTLm",
  "key20": "5mM57t5afhuJSgMpxedaCTu4J8FbtkRkcScfa83kSMvjB1zqKHJGUR5NXABPnRNT2xLHwPQ2uGxnVTH5JprQSzVd",
  "key21": "2B4qQzA3Z1YBdYkEbGyVNYXLNWB13grpTTYqzK6Hs17rXctdu5xrHxGkdavCs2NzVZKRdFvRWSPDFfAQCUTHEELW",
  "key22": "31WhW1PZ4hta9CgdGT69wPBsWSqMAs17bJw4VcmrTKV8EZLvCvzjZE7tBKCdDZ61oBAFTHh9gWsNjtWwmctmk7LF",
  "key23": "58np6yh7NNFxrKaEqYrLUtCShGXuvB6t7E8sjPzTRRqdR1ysGoF3Cro6bjzmYxhix5qSyWWd8jEqTycxhEXimCAd",
  "key24": "5vyyNWEWb9CkjtcQZEB6opY5nU5NirydW4MnnNWsX1NFFTih6EAdX1cZ3CcQg52orwxuqniTRTLDwta5vCJvrXW4",
  "key25": "5u3GHK8z1ooPVgpUq82c7nC66RYkBHQuyURWhas9VCVu5DGxT4gB3TKK8aDHBk6qYDLbPDdHhEEkpr333KXJCSkU",
  "key26": "4sqwAszwDDCvdC5jf2iUJvaKHnNFQMkNYEr33upC7mEP9dCYzrNoc23K7YfCXHz3rJMtQGRuVPrMTS9iwghx6TgH",
  "key27": "2Kh4H44H6hCewzzZNTDfiXPJabeXRCVsTB2Hp6X4KBdrgsEiHUxgkWHcEJsUKTrWrcVYUW9bXdtBpfTHmULyGFAU",
  "key28": "2EYsuuFfJkSKHNPMBJ3ej5hAKTUquHnwtWtGjHp7ebCD6jyw7eFwVwNbCLf3zmD9SW4wbAaFDpLJXYesmaUtMaQo",
  "key29": "3LaGr9YX6V1DCvyjqCybNJMYCy4mLJSLKfq5hejjsqG58k3Wx2vwKKdBCnRnCLMNa6PcY5EP4LGouDT42GMX4PPo",
  "key30": "34Ds3nxCAfPkKcrY4RnWkNwZEzrMH66LYo34JXqut6QX8AGgrSV6yaBGFSxtD2yvdhCB7Pu4ZnPKgeiZxm6yg76n",
  "key31": "2yGQ78J3kLJNTTo9d5dr8f1XmrZ8pwtrF2sAMn1YXwwWrST2J7CoE1AnKL7ncwLRmPrRXoXUgogv1NkuqK5mum1b",
  "key32": "5jymnbotJN3Y6P4STsY5wgXr6UqJYWZETKQtDWGo81nW9k7Ph6Cvq1az6MQKYhkScB46pPes7w2U5sGrcvFRCMxb",
  "key33": "2cVnv4YeyjwW8QSSWh1L1iKYgcmUX17BcishuhUAMf6JHXRdwLgn5vKYpu3qxchawwAyfRK2gvFDpC7Uy6sbLNcB",
  "key34": "3yXZ3hZmNfZSUkBifrexMat6xuyUnhxf5fAwtx7mMpDWaPX1qZ8yvEmykrnUmcLXp1uU4wPrBJo71RpqDQT1ak8N",
  "key35": "Ycx5hk9zYPpX3ggQ7VxWapj8U1xR1yGAjuipvjrk4nmukuDM1ei6bruMio2biyPs4EiNn7NwB5ohnGd3xQ7dmF5",
  "key36": "qzbpEPgZZ97L4ThYjDWWdvyeZppGFZ7UXF8rQSTbQvrGLCgRe8HxaKHWPXKePtKXEAbFoMNdVYwVnAMdRz3a2FF",
  "key37": "65GGVbRdvNJ9Kumgc2djExE6LG6abk4yEeNFbnqxuGENP1Z6a9q5VaUWsz5pMkL4FKyv48THdcBw3Y2TqJ1CB99q"
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
