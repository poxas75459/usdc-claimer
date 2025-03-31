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
    "34z7kAvFZWPSD61bgwY9u1cYXiUKMQbBpZ31AVLiGqtLaALV7AWhdDnUY5xjvB7NKDLedsk3mj9VuLmf6Y1KPaVZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ebb4mUNwKqygH3kSMVrCnfn56txo3BziktUkR7YoeZxvW2VWVx4bAjDwdKrRrudHHdYQTVUpgNUJ8VuCWshiFxe",
  "key1": "5Rh46atYfX3vQtxV6BP37ZkS9XFH1T9vuMHj1rXPyznzCeVZS5wDpvSZWEjfRMedJC4SxdfRzr8uh8gSMrgVf2qp",
  "key2": "273aris2mphWJh2q27HGMDMy3NKEzY65W2gCbtx4G3yozRKK2tj19yBivy3gtWW2erEwiVVAay8wc5hpmMjjcF4Z",
  "key3": "36id9Rej8rAhMiGGpCagMW1MNF4oaqJvDdfkpaFiYLmQ3Po4bWnWGfdo7mu3ZGaQtPtaA5nbb5PJvywhTY1H3wrV",
  "key4": "3hoU6GbWcCoE87cHni75yFEmoap7e1RSiyarVFhKVwEaFA6z7ULMZMAmkZ9sAUrTEse7XZ6L7s1PdJcbnDVtjXw6",
  "key5": "3BG2rgb5bDvbJvjpV8eNjvi3ejeCLVuCmz2T7Swat8a5wicC8gU51UUuip1kgWszHvsGDWNMod4Yzz8DkB7onSUh",
  "key6": "huVrYqKLx7PrCh3zySiQEhUBJnYJeARA9q5J8YzD5za5uQkYMiSWkqoatjzxinJBNWNPRQYBH5Tqq8nWnVhSSYR",
  "key7": "5yqks3eRAskQ2QseEo2ZxD9sbHn8dpnQXfSFJMhQwQeM8bNRdjNExmRB5mkbxfzAJyxJg9dcZcjvc5XJzGULLgi2",
  "key8": "3bTDhBDoFTF5zspG43hJqGKNL7gRemF5p1ndwQywuW79Sspq6sH1AtAi4MKRG6cQ72Dk3Qo3kTZx2yt9jdLDEXCJ",
  "key9": "24zv4FLHQfWkRqjjKaztbv7dKjd7K1cbe2G38NkECXA9TMXhM6G4oQ8F2G8ULP4vKRi9V18cEhK3kkEYmvTHC15T",
  "key10": "4DH1X3pVHGUrTHvyu3sd62DWWSbXQh97CpsHiSXEDrWRKwJNmPNXxnYzA6b3QQmC266TJG6qWCefVT92XK16Fz64",
  "key11": "5qETsTGirNVHdE6WbDjMVkgXaM9UbmfSLbZ7WxA72YGujQM4ozzcHd5SNHyzwC2f2LZ7uDMkwrrZCTi2YWqbz8T1",
  "key12": "5DcejWeLCdS4gP9iTe3MPEHgrPFnrQ1VDvA7EbWV7GtcGMb6iTaTWC13hvh5Xee5G1PTad2qZXRJLjnxfkbuip9c",
  "key13": "h5MnKABwx3PTEuo9wgBUwbv5vffTyh62qdkVbfC42GUF231ASRzH5XkS5uZUsWbctyQxErALg3w9NuXyjzme5FE",
  "key14": "4dHXoFAdkS8iEaapCegGX2PR6tSVFPugLTb4FunpxBFGTt2CoW2ZhTHbprFKrUVHGiAiWRkuzJnS7nXuggqHya8p",
  "key15": "25azStE7jUDNSkxAByt36rA6LJiiPcw8ofsHnumxoovXGGottWSc5wMqAFmxRLZqwKwBHwMPrstTqdgXTnPg3eBk",
  "key16": "3N1ywUp8brS2vEhuY4KNf8opNnFFgdPmkLhag7amLXhvb4JG7wE6JKEmp7iH6Jb6pLywDTmnh94J2zRbuhvdMLBD",
  "key17": "3jnRt59Fam4SpxauQuNv7NPGkmbZDKqvvmTi2tPELaSD3vBDmQpsdjvBQx2MXy5P1CydBqHepocpuxDAnXq4ywps",
  "key18": "22xBQwVhoctu5He5LnPKBWwKRP8rkQjf3NJkifw9LF8WaFVDNoxUmKJzFY7kxSsLic1ugrQgvQn5WmCUACyBiH2k",
  "key19": "61DNJwiroKKJN1oygsR2BdQKkemcwh39yJono7VBuhYNRpLa9s61cySqcmkoMPqA1o1pHouQbM6BqniXpQJQQZfF",
  "key20": "2n58Uozmg9kCGYkRvq97wjMUqDFpwAcwUFEmf1rBRxfKtwuG9nnz42mrhRtAHXPRmP6ncwVNZJa9cmkdekE2z69K",
  "key21": "Vvahy7VJEw2k8FKShhgCRv8ZrTdRdk4kfARne4LQfF98JLaz4T94PfCQFpWTVcnWa6pHEWB9EZKnyMmxUJa6HvG",
  "key22": "3d6HX6Fwco88MVL7Q2Mgzxjx8XXLX1DXknS3nLx4kYbbnJEKTFuKwz7yP4dDfD3PKSTtkhgo64SisxCREZktQRq7",
  "key23": "4R3r3zFxsh5Eb4EtvVLXyXdtembZeR3GmJ6i4iGcziAcqeAMKH8PJKxh1BQZn5RXtVmmKpGtLRa4GvivNsmDZBAH",
  "key24": "nGr3Ap8ntYnMkeg84WA3hxHaaTTPiyhgbw6EcYaVu1KzwdzaYPokrefGgMwfNm97QXLBwH9Fbf9RcuyRfjYrsCU",
  "key25": "65wdrEJ43VRmx6jdSA7oueJVhFvyKCwbPzvAbfQCtoAat9nrJi2aY5iDD2ZSdZ4TwLMd82zB1t6KMUGkPXmqk4PD",
  "key26": "5yP5fHRUUvQfHdFotEYSCQ2MTLMcZSKF9BMw8sML8czD54tKdQuowwM2hC2jLNCYpFwGhj2Qvs45EvAH6QMYgjRv",
  "key27": "3ai2getMMBbkCCZRQMoy5Mzj7ot67Rq1UnBRcyCjgJUkeMB6pvcQFpURFu9G83RancN2NofGTK6N65W94KwX8Zpo"
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
