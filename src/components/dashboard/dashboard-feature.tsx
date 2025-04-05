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
    "5hW3BdTPpWAuS2BbVmdgidWBuUPxoiFYCy6D2zK5yZG38hFozACb246GszNgTyBdS61wV6dKEjopQNkEkTXyXhw2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TbCmwRVMDNKq1ybNuqS3AFp9z7KcsqjnJhCqnVVrXNe2GqD7LgCgiLDyEcnM1s1et5v34ZAYMMWEDRAgs8h2Uyw",
  "key1": "3Ze7ggr5t4LraX1zUviJ1RzU1fX1Gm9BFP9k9KAKcJ5mjBGgEWoudPvdw5sF6pEdsR2wTjrkFBKMUJ3Qzf9S425",
  "key2": "QfyKGE1Q1Ri7FBK4xPNUQyJezJhyqa7KZ6gjQcDMCSwmk7LXhCa62hx4rhSRRXbgBu8QLToNTHTqsZc8spvVTbL",
  "key3": "5TZHEeAQ71cnZ75RiWX6BQWQ42FiUymbhrSaE5AKzgW1MzVSxqfHBpQyXfBCxZwmrLwxTJuANGDGHQ6sX6PbJW5V",
  "key4": "4zC3pDJaGAGvju8sD7pyzgRMGvZMUr8FgSPdKTFWKAtr2xjLupWGDy3K2C63rgU71jt3nDxY4wtSChUz7WZyPie5",
  "key5": "3rU6B2DLa4xBN1d2N6CXvRY1YwfDJPUJmcKD63rv5pnY1NovUoRqiK8CCrCWhFPjNybhJ8LmX4aHqF4rTuo5RALK",
  "key6": "41JfuGxkWBL2YCDq3Y3dCyuoZYLk5p2Y4cSxiSAPVZZdQPFRWrAzFYfFGeAzQcDNedqbbmptZdARi3zk1fb7g4A4",
  "key7": "65Myw8TuE8TBpvGPVZVHctEXzB4fxgK3NoZx7u6MjEqb2yid9pKB5pL6pE4aDoPxuCAWFtosAKEeDdgF445xQ6SK",
  "key8": "2rJ4DuN7rCLWi5jixt583HLywcMcUTMR1gBVNJPmMYGiW99W2Snwmug9n3VC5jqsBbjsbsMCxF961NmaS6MHAAWE",
  "key9": "z1mk6wrXDJDPF3s9m2BaiYJpCdghU1E7SMgE3d1uZtqNKG1dUD5XnkygVQ9jMbYiietv5X7hQhDa8jCGVEZ5R1c",
  "key10": "59ZK6xqLU3JZru4AJtSUCjwSyYngU9YvRsAsmvCJm5sCfDnRNY3oUibZi16ZyzuSrhaXjjGqBegKgMioLQYBsGn2",
  "key11": "6NuoHkomAHCkxudYU45K5GfWKtaP79X1amqtiMw6nxZVQenQbVgqQZGsanGBkzG1L9UEdDDpxxD1W4tzimeqZ4g",
  "key12": "4rZmSuiU8ZLkspSbRRqtUYp51JL2MJj34qHCmYYX5qJmBhVCVh9UTgqX2rqeKdeUvkGeBHHxS5LFj7kN63z62NmV",
  "key13": "3KoMbBN85dRy3ezypu63iqnQuLrs2fkXt52d2Szk59vX5H959fdswaqKbAGJkEGjgMHepPa5DABoHhomNrbjvv8J",
  "key14": "5Hi8qpbsFGe3utU7GZZZFQQsaMJxSr74sPG7bXLYEBy8CehajqXuAqSMNvfumdbFTLG3XS8NJU7ayxUnRxpnfE29",
  "key15": "ZTW1tmuGW8ukuBDM5wmFj5VnjpBccGqNTKsefE76VP2Lm6T5qea9pgQJECvqt53KwxxoG2pyyqaaRE7zVF821Rv",
  "key16": "619VpK7Ycx3VW5gdpAG8Ak4ajpujanyiyjfiN5P5pdrKspWjm7FEAv2kNMG37p1fNAjn9yEKpF2hwSspGicLQfrb",
  "key17": "2ksbyWK5fvDbxuNKHp88PkZ5i5XGSk2695XCQ5ydm2LXWmDLr4kAgw7GtaPz7i59oNiT3MrTyvBwGTP7sBo4MZg4",
  "key18": "37KBHP1ZU8nsqsdP7ctCDNvPwXQrXgZBNtK2w6oDiUEnddYrWnRRxNcvDsHCERdcYigBbmgUEETmVtLtNrLm78LX",
  "key19": "mwt9RBm42D2dtW5kA4Ss4AENzr9Q9Aq1QPDZ8swvPDdLcLBJpoXLrtvLXgPBkvCdT1GdDpdibw5cL9rHrKVh23v",
  "key20": "28mkrwbz1GrcA8DQw4EVoNVgqN76BXJgibuBf4SkoyYAXBv8XT8mKtaa4aLTu42KvpfGjthJX4ku5NW4CAHJrj84",
  "key21": "28q4wYcbBvFxrm2K9G66iWYNTodX72yMGsX2ngTRQdeyM1ouEuHhEYDGTvzCTVRdtKPUaEzPbcuFyd1qFgaqS5NX",
  "key22": "66rkyUA1p4VnT5BTKaTG93CcD2tR98TVye6FnA3Ko3qJXn8mUWLMJuNWPtEZbs3CXEyQ4QRTkcGM99BDXtfUmfZS",
  "key23": "3Xz4GxfqGxvs934NZpKNgeJ288EbhC86k8n73qVHXMjdbzGvX59ZWdBvktPxUTE1a3YKU43XsqVjHQsVzEJ7nqVZ",
  "key24": "5S6h843yemkTPoa5MTze6RtiP3DzSqS8N4poJQTvrxb4vG3xA19i2N1bxWHTfPs1Jg83GPVK53Gjo1oMKviVsCjN",
  "key25": "3J2t9HseZujmAcNeHR6t2FpbMbVtujEs8xftKbkMoMXgUE3na7nr9aVasMRSaFJTkRutGiCrXXFT1Ldw3z5tsive",
  "key26": "4ZC7DymzYcnvGWh6QaABHCwtGPwLP6RkPH4TAXwygNyL6dLqEBJHFQR5V9xHLw9gKxUpYqMEJLhJuVtvu2jpCcV2",
  "key27": "ysGByTBLL4SfZUdZCkZJM2JE6Lt9KTLNfPZovQxc9yarSKXEwL4SyJdBbBeTYs2KMGNJF3avWtBCUR66CF369cv",
  "key28": "3JdiEvxPLSX3Tay6jrFPMygTY6J5qkkRyQUDm6ZiCGXkbc1jsRSTEJuMLjRqQ9VmHTjaG6AzvkzYdYAF81MTTo6Q",
  "key29": "2tbLwAhpTsWmWFwcfdKphG9EB3AfyhvCccQzQK8DZUs2UfHmGFDaYUUcvUVqL1NJ6XoYBXt6EqTx9FcSsJtUygpp",
  "key30": "KNd22dJPStFJVRcspXRufrYRkTrRFBg5FSYUE4bG25K1zxuWpeuMvncVkHfnAzkRe4ec2gU1sSC1TjstMBrELeH",
  "key31": "3KxXzut3gJ4CZacLFQWFapJko7ZhnWmnqNF4KcmJ1jKmWQdtgYyqg5f3VGDXJTj4tkL3XGCuSmVpixaJT3AASsAS",
  "key32": "2um3BzGf75CXTp9qiS9oGoYBQevVqXyyYW8RF6w9HtFaYNwyfX7ketqGicWEt6TJunUtSDW158YpveeZwSvr9G3t",
  "key33": "37xhDxBCAPwxiKHgMqyZeWYohsBYE336wwJFUAkHM77NCvdRCGiXgwdg6fm5VUGqHbQEbUto5q3kzrhsZiqGJ1cf",
  "key34": "5YJUMwBaKj4QYEe1FAwDjWEtWm4GFsfHxuFZ1pDtCwRY4NGTVffEbw3S2uGVKQunwwrZ7y6s2P1BYscfwusxteR7"
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
