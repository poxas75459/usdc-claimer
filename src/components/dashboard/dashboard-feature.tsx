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
    "4VmaXJ1CLZadbhxCjwQ4xSzDVjSenPXzv97zEFB1xuipJyCfDveyWnTVFcb7TXpR1DB5mXMVz2YFsoLPPmRKYi4W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dho6p6AH5AbvmBtvk7xFbJFnK4LpFKQdSFrKKHDKLzpD9DpJDviiReauU1vukBhsAsU6AVznvZWksc7aQiZoi6j",
  "key1": "45niXPKARnkC6BqHuQC4zdQLUJpZXVPfUJMRT6vWTsx1Wu9B2UoZNmigsuWUb2hpnZGsxkFQWG3xXXCVVsVN4JDV",
  "key2": "2Rf1jVA2sbT1MCRo2LbrcZjC9VmYTYknADP7zBbEsA2xazgmfkMc4bmv5oUus5R5MfgEU7w2e3H8aghz87EgW1N9",
  "key3": "5Zugutq1Ds332ahqWpBq69cTTVNdxG6pVHkbUQYpjHPFXVYWnUjQTmi3CG5bkTcWSXJCCgsZpi8zhN3eJeH77CnG",
  "key4": "2weTu85hi2y5gkqQMRDvQJojjV7GMrTYL79L3L3bY2ZXebAGAzMKrKG2XRj4wx3uteaxwhqoMR7G3b13tPnqaXu1",
  "key5": "33DpC7K1BcfLB3yEQjvHiPu2jjwpaBNVmfQTbXUMr1R6U5aBi6EgEATFjDex8KncdcAuPbB2LqkEzqwgkNsx1jny",
  "key6": "43FD1y23CjcerZL59k1Xbqktcw2bsrV9rS7Hvj5V3q8FpNMFGLHE4wkmqiyLsPYQob75MMPD4LvBVgwuj1vXeShE",
  "key7": "3kAXJ4hKwijLd6p5ugasWmkCnQU7EnZL4x73PQ38WqXZhSjRQMmhVwvdsTkFgt9MYhMSsCjye341hxiRPW8dNwQJ",
  "key8": "K4zbDcoKKYYC2n5dxoj8b7nuXGAHVE7rVZ8CH3KwnsCXi2DCzgp49jqNW3FFCZVEkxkGgnVz6PDjA8WsLuPF4yq",
  "key9": "UCmQai1xpzG72CYHrpT3pULFU354G9FycxW3wasypyPERT1TXnKzZ4AVMVLfSvYWc669mJtdbSaWpV6G4ELuadP",
  "key10": "23HxwnMq2bnDQVGbXFGegmLMkwSHc34XQLAvvqYmt2X1S1JJ5sZCyPrMdQt6HbPUHTHTzo5gNSWMWn7naHACxakS",
  "key11": "Vt6t9Fv6shSewzTesxGz1xukPiU1Uw7Q7ZsoHMkeXLyhMtU6Tu4mzcLP1HbVi1wP3GJ6JnsmcpwKvPTDSJ6CEEW",
  "key12": "4RhodHe4Tk6guk1oteG9tvD4cuU9w3Ya4RtAQCBMdCcohi4RE9SoCZ3t3ofzc5563BFPhADrezo45u4cWyRkchfH",
  "key13": "541rtNaPepJrSHcvNWpWPg1gbLcoqZStzjfSRrSRMc7L3LQ5FG3nEmS2qrfvRiByZtvNBKXsRxo4tgqsQfegbsoX",
  "key14": "5pY7WSx1vmSsC4kUP288f2CGANyvpuQ8UrNKEXhBfDPeY7PBXVmm3sezmVbUAoZ4qH3fiy9EJkEBAc7T8vhbsNrN",
  "key15": "FeijRggL9Xfe8KHqXFG9CM9DamiijYY6VbyB1FxPFDUkFvE6tsAK24bUzKVyAfkhj1nHLqprfL4gR4ijXCRgQgi",
  "key16": "Liake6nqYKUN8sFqwgnqmo6WEfFgTnZUsxtoZvXTbvREnr6SP65ZauZ5YasAjecPMJtboSGPBugaXzzqBbSDZJ8",
  "key17": "3HHQVQvX6yXaRaNzfot7T9Q6Eyjjc5oHTj1SZmGgZHpU8jp36AVbbvW98zEFMTrX4vfWyM1Dhu9tvDTYJeuv4j56",
  "key18": "26Nb3r8pbn1vqGC3uWEVCQJrWHchxEGHYcKriUd6ARyL3J5TK99FSeJcq3ygXEiABGMu9ebYsz47QXRyhZQH3ozU",
  "key19": "21rcgLHWP2DBomp9a2XDfHYnQe3RckBbFhLbWRbqHwSdiVyXJ8kCnd1S2qDy7QKP21vbpGTxaMQ8b8upYhQbus5U",
  "key20": "3rvh9G6a6DmEMctDN2Jtqgh5FEQwYzKfcKrMAH4HLtFycZEJW7SjLMNB5WVFP8KGwUEzT7H9YSjr62RVTDo1gKQj",
  "key21": "jHJpXHCbfVzk972L77ZVYEiKhvTpeBdguj6a7qNhLCTaTWDS6m8qe7qnBZj9ZVJqMYrUCDQbuPG3ink6BcMfX4H",
  "key22": "4geLvJP2qA6AFZnYiTnYCpeHFfhkbBfL62KpDbWnNGQGCWdfidpFcxUho2kEiNm9ym9KGQGnFkkruiBE7NHDYta9",
  "key23": "3fxxcVsT8W2DzxobTYbS6UKVmmr2mrqueg2yFVpcKhPEpz8DsNbfRzdEkwmHViiDmb79C3Cn9XdoTpVCCw7zVP51",
  "key24": "wDNCZ7ejWkcR8MRshUwZzPDNjzffataGQhfhy1JL1BxxReaXppeQqxPM4YPyA9wpJfumgiZEYjuvj88sPCC3RSo",
  "key25": "4PyV4veDq6arYwJHFPb7aHpLKgXq7qEbskCJd614rXm7c3v64bKfUXoQP8XKgM2KqgeA3ehXbG1AQdpz4ge8hVXf",
  "key26": "msW9WsUgHSDhqwotXpSLLqMoKShzk7ozs5FKnPP8tBuenNiR7to6KZutzewYs7GiH6dCJWTd4WkMkjvidooK63o",
  "key27": "yeBABc9ngQ5fVtQ1RPD7QY1ykypGEahufjKjPCHe5k6TP7Ta7uv3dx7YrEzrw3Wx6hwi9S5NZJX2oKyjfE99Jgj",
  "key28": "2yUB2dcgDxSeV71wjizgGYX5iSDdCxzEHX69AhRhXEJM1VUASt5oVqyswARxFSekr45saZMU4SuvNNDt5pBtv3Bs",
  "key29": "47UwZ1tiM71px6MQy1K7JgqRsRGFWS3ufdZ8jDStU5XZC1FRxHVLJqbirwdUZcjeQxcjAsZXaBEdFNWBRcHdWURE",
  "key30": "2Ki33oPfnYnH62Pc3mp8iBL2V9VaebUZYWYcx9pmB7h6JNbR8bGmPmS5z11QCpDetSnVASKvXpYkQFaUBa1gCPjN",
  "key31": "3vT3UuWW1B6UwoSccocGvezNAjBaPzLWNFj8WY8mHr7gVJuCBWn7Th9XAVasPG2crLfkZ3fe7f8b9VKMMTu8HrTr"
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
