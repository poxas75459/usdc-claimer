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
    "5wYKgybizVTCnLctweoLpJJfxxZx69AKJnRuNmdVw2jqvbdo354WeQtTgCc4t2gAKNfV7S4nVUUX7yVKfJvSnssf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53MiYoiA1oMjhLdBYVHwd1EHTjjc2BZJXYsWXEK6SRuBcgtLNMdRLoSerd5c57t7Rgz3AixBLGPCa5wN2Am78Xgg",
  "key1": "4eMUC3b4J8fLpt6VfYvor53b1ZjEtdZc8rJx4CLt8nd3KkPsamKrQJdmMyTZmJkRjwhmtphAAYdFNMjtdChfd24h",
  "key2": "5rUhkJE2LPuqXtmTTLD3rcjqj3VC1WugVYRT3R7QWc79CcSxVE8H3dZN8urVxZfLqfqEEc9CgvbYdvwwxzeBcGD1",
  "key3": "3QCbs5qN69cfsQNpF8cc8n7AeShqfpBVFpS6hTgFDvjouxxyA7DpQZE5RQhPRfPvs7BuFnJZowZmpug3zpJNPdWz",
  "key4": "37TqQpdLJEQGyWoj6BRnFXV39G1p2DG4JZ8BJtRGvas25TeBPzYUis3ykAEGCq8Y8yzzeMKgPKvYKTGJ6XDiGehi",
  "key5": "2Er52zvq44qz9hK94zTdHXno9KH9QrpYbv3V2ukyHNncpoMML3cPTqkNcMN8dp5ijxg9z7YAiF2abGmNz92HVxuD",
  "key6": "zcDBYFFEyQyhsTg8AzbJsW48MmSac2eWQ6buuU4EB8KjW8o2gMWi9L5vEmgZzpHMwnMfaUu3BmjGnBVMxRcnRco",
  "key7": "3Lr3zsCFNNgXVceFwtbaLFyYvZfH7pYfFjhEDB2csvRkdav4xdDVJZtrJ28ziiuZRZ1V4KRTcgP7GPifPwBjHhe6",
  "key8": "3THZZMeUmK4dkYveQGirXVH5U4VTNK2c7RTix1uZ6TvWPaZTAWWMickq9phqbtP1u72y2jVGbSQasfqk55na8DJi",
  "key9": "5To63dDxE8LSYwVXugv2qz94Wraosb979fFNL4ve7djJVkznkePULdxjP4fg6E57uKxks5Wb6DtCgyYiePEaiN3i",
  "key10": "4QPnncK7vW7TiQBTSeiKLynDVXpBD7S3NQqgMQUgdtkrTnkDJ3PYWmxunVXrQcsfWFEJnyjWsJEoBrhzGjEy5Qf",
  "key11": "3QJEo8rFuaEbsscRMCgAAor8xvvPvJ9Ctd1aSdLLjxHVyQMAFwmTo91zbynANZcVaTkzzPEVaPri2krDqgBos4Mt",
  "key12": "4EccS8Z28RScMhy86LGobCZ9QmRyQBUtUyZ2BUaTFN88UWsg224EEAEXDteupxqHQCPLXEXFmp8BT4jtZYxBHtFU",
  "key13": "2ExqhZKhEWuegbsQ225DkaNKCv5zVgmwEdReALLZhdZ63GATVYaHLN1tSRyxaYcNhS1xQM2S8d8FBPrp1sZtfgJ9",
  "key14": "JQ7NWfXB6iqyChFs1P2WiE7eqSQt7cQNRAhLeVpPEoR642SsYzKn73Sd5WZGdhKuzDT4myHJfiSVidSEgfxgWdW",
  "key15": "5pscZ5QB8xL2NKp3yiT3G8VTChuB2gYdcazZSP9C8NFsfVaQ38v7Zr4d6LsjNYbkgj2YbarEibcVmzrr1J32fsXt",
  "key16": "2WRLauH3TfAKBpf47DHp8w26Bbi4iWWTTgUyaQo3RLj5rD3mpvp13tCz3pWgKMeouYrC9JKGKLHzL3kGGXyPAfNb",
  "key17": "5gQCzRBaKHUEmpp9VV5ZQUxcDmZMDaG2so5bKJYZAJAwyQnHt87BfHAcV9AhoCs1m6nYQSoWbKiEvhB97LDZbqqg",
  "key18": "4pVzY8zHp2vYfqKVCFYMR3a88VCWbUsFQACXSKFsH5BGxVjfyvGvPvtSdf9zEnoEAZajxuUJeuovMXWi6DbJ7G7E",
  "key19": "2ryzasfghqCqonBvCB2Y7FUQ63EB6uV4GrvvGYyrhdwK1SrRiGj8WjjR1s1S5cinMVpy2EhCfLJaDaxj1Xp77bxx",
  "key20": "5yqE5NptjUjSooL49MbEk5SFjdQwPHBRsdBK7KKrQBxTDQYSKNab5qRz8iTwGmweomH41EfYFk8DNUMPWtUi4qDT",
  "key21": "4kVbzi8wZpcDUsiQ8rpQFhpJpW7BEEuwzYWQXbXykriFbao9XBZ8zBq6JsetpQgmEhr3z1TZt1necP4WaUNKhzjv",
  "key22": "PtwFTVcimcThQUm6g5HZWUDctfV59AjqGBShxo3eybBtQMbfFajsZNDnHTHMgQ3qXA6VNoA4fnwqXh4PvgzHChM",
  "key23": "28HeAkARanyCL9Mi9j6HmkSZ5QtKBZoYNxuu62VpJ1FhcjbFTHv15G1jPqrGGZMrYyb7uV4XctxSfWZ6LKgdBKyt",
  "key24": "5Cf7uKqAVpDVfDUm5Ln2TrLwMnJzsnwN2b8TwFByKHsgQyXbaaoSpusywK7fyj7Z6uHQajkvpWvGiduKZjh4bFPJ",
  "key25": "4xobhuw4ujewJ7qBAqTpzcqdwxofxRTaWJ8sbtDHoPkjQo5EDKhFQJEevpLWKs58ZhbfGTDi4BzSdK5G4fSh2XRC",
  "key26": "625gWVidWJM3c1BEAJ8SvZmnGnB1iSwhPgxGbjJusJPSFpaDLTJF7JGeuvKx19MgfMq8dMrE8PyfVc8GJYTn2Fxj",
  "key27": "5pb31E8Tsg4xVDqBCaLYcVqrfsqPTyCUTihZqZ6tT38ioby2kFN9DVztj7hC9TifgQoKGNncGDht1BeEoRqBBe4V",
  "key28": "2ud9fWzEcX7cGmZviXjPfiku2jUiA5yrmxcp2keGR3MywUoechNkLX8kzgUP5vgcu5GGTyWoFs2jmxboxUbWbjKX",
  "key29": "2Q9BmMwx7pYX8e15jRYiEgbbRzgBZk9yixampf3aGzMtBp9medqhPVnrWK33ST49TgnirwokDEPHZNrftRDLGBG2",
  "key30": "FsLFcSTdVR3Nf6XQsZkmguD8CEEE719PQGJdUY1KWWLNaSYwYkXQouMGniGjY5PPxvzXBNBHDx1pkUenLfzgEEi",
  "key31": "2nV8VpHjtKKK71mW4rrSZEA1jNeLZQd1nKkQ88jvipuVvPePMHneGicM61F9caLxLLSVsgigBw8UKxq8jhKNjyUm"
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
