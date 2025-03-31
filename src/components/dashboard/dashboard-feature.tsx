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
    "62ybrSPuLbqbFwRxngFvGNRxX2KBBbksiEQg18HG6gPUNYamfAh4L9vV4BgzWRa6muJRADKX9X7vtJtboJdqugCH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KKN61xvrQCMddRbq8msLqMjGzAigZr5hwvrwDpiyGhKRyqReSDkqSPjYMafjwVxEYKuTH2tg9JDVkjUL7yAXdJp",
  "key1": "31poJsbiusGsyD7SerPHTyNB8MjsNVGU9CosXx4ha5Kph7q3pmGuM5fYkvEBkH8d3XYvNtdQ4QYs2cshqFkdH9GQ",
  "key2": "3JFxExtR9vsStsDM6eBmDpegGdyLwUe2JjNrMcVkTiLJcgTD4XqkRuD7ixZG7PNbydVp99JABR7T7kUXR2TNEK2e",
  "key3": "2Fn6poP8RSWZJUwP1wEgNWemAkf9EqtefTqapm4YHgximejCeYZ5NYUsCRHWW6yiVb5YNswJPTZ5bKzieDP3kHZz",
  "key4": "2tvAfDQDK9X8x4XgsQqUaHYjCJvSwENws6hzX5S1gPnwV8sYUdidy6Y57XboRTeAPbf8RTnHr1q2ThNem4veTD2B",
  "key5": "3YhbCk4AgNB3pbUxDm1gpZGyskTgnsvCkgkQqeSpQnQuQXzfLqb6hMQqU2v6mbbhmgrYwAH5pWcshgTpmmKw6hia",
  "key6": "5vN1ChF1EsmGmUmPDVDj8f7yrLMsHmwX3GXYcgLidPuD7NbkL9JL2k22LNjwwcTfRvSiH8JUcZ8BmtqfVqzWeiZf",
  "key7": "wASJduHUaiFyfNRMwY4vkLp6eQNKJjVowtVqrvF1WR89UjZH2G1GJ1v8Zqyk8LgJj8jJsZ6pgeBpFRqFJK6CQWz",
  "key8": "3i1DhQ2NUotA4Cx4MGLjoaDpiqCv7rLsZcfNJke3DWMXdRfrHcu6KcdmHjtjKTNm7ymRQSjkRMr5VLULX8f5yq4d",
  "key9": "ZDPPnBQoXLYrZX2CCJJEm3EajrnDpdvRMAqEBmx99EPJebNXYUwSwU2CnFfeH3m7UXoNfWChraozY2gHQLmgnXZ",
  "key10": "qPtzM4V6LidZSHmfA3PFcTfJjgpzcvgidEPu7cVHtqLfToC5c6vucvgzcb9Sm6FdY7dBWSX68uGYvAfjiT4yNH5",
  "key11": "5zu2H7uFha2HZsxvH4nPR7vkE1VQ9pJZVtAg33FdWxirdbSdXHNTyreykvc2sR9YzTX5Ba7SiGVMSo8mxeJ77Zxt",
  "key12": "ZWwTDAtyiu2D2yzzRYdTS8yFvGXTtQF9VbYq1ETyr22bUZtzMQseb2m8Uqz8xR9Vu6nvWkBS2X54uWDrXueWF1n",
  "key13": "3v21pxYnJAvZ6LpgD2QcizLbveuuCLMoEb8ZKHfTnNR3Tw227RuVuqVNnWGpyR2BU7m8fnoCsCxRcJU4rfaQgGGR",
  "key14": "23EtSZ5q5gY9LotAb7tQjSZYjde7Vnem5pgZwVZxwaYRu8xtXWK6vr2Ve8KMynfTdidChasLPDBTGQFUHtGMNjEq",
  "key15": "5u2qt7UnqFCyCv3sfroPVFRwczyNAdVqVwf8fkGD2LEcAEnh3rTJVUGmFRzabeayrBnwsYMbGTXQWxbG6yjAs8fS",
  "key16": "4ngZmVcQsK4SHXby3amb1aLbAz1P7QBvVC6uZcgPiHccbfFTFpM5QVzqsXQaCKu6z6BDLbUB16emi1E4VmhaXChm",
  "key17": "RBaiv7qaYh1uYE23fgVnFk7jEPynmt6HSB4vdesgfX1UTDMLTyHj7DaZ6JiYaj3wqbjz85uLdvm2o8pgDENpCQQ",
  "key18": "2nCvVYtw594ThBfRhyhNvWBz7JC2p8Mv7ZEPxfgPmBF3wdb39P6xa4MJcfy8v7LjkBneuE5Yv1TyvaWrnpQuF9qb",
  "key19": "5VpqmGzrJ3zbUV4Cqh3keVdsZ6DiGSzMRrTURUBfTXzcqtCmsdy2JSP8F88knhsrF4LmYyAV4JBgAF9zSASzoSWP",
  "key20": "4r75EWpV9mQXEeJtpz8oVy7V1kY3EEXvcrSYDvtPCSg7gByWjgNc3xxFF3DFAJWk4TMdFrYnrpcWd8cE1Ga7ecDY",
  "key21": "4DtCe5HeC8mUU6poPtLWARzB1r3GVupge22TgUic5DCwo8DQWL6DRn6c2yoXSA7oYFz3g6P7D4DBjVo9x7BpqFBC",
  "key22": "48kasYmqoQzbQbyi9Xr2mGq7DDew1VxKTehrjBXm6Y3NKgD9g6J9JDTsrsBc9UAqLqiefDHcbQ7GsJNYEeYMPB63",
  "key23": "4UMQeT4izvZvJwsruieCt6fS811gAamVD719fqXaW9b2ccWqydnBe36r7hbdWpHoPo2sVMXbvdU4QcffMYw8V2Jn",
  "key24": "57vhGipL7CZGEC2J7neYXUk4vYmq1P8ePEUY4sV4qEeRjirnP1T5Hq2J4T9WUF4FMUo2bjo6goLaL2d9H3iSp4n7",
  "key25": "3UfqENp35sPeZCi6K9MdkM5SHPgdJHxhcaTX2uZ8siTwQMNCAUwZAmgfEM6hP2miRddi1DGiat7qyCWdXyy6peE8",
  "key26": "5rJLYWBjhRaqS3v9ZqujUqsDMksj15mNKU5B8MgTbJKCB2Jyk5vBze8UZK1PEu6prcKscky8CxjfsJmJM6oE4LkF",
  "key27": "3WBY836KLMgLvJhGoinf5h5e5LMix1T1o8DCyjRnbkS4eitc9SXYWSUGPdbSj2i9i9yjkPmT1WpLS6nADa1sjGr9",
  "key28": "5jwH6JwBDbkuNy46WGtPd4Hj1fjWHQSC23aX5imWyEiWZ8KHFBNs4ZNoE3my6UFjQjNW1k3Z9F4sjBDRDq2RvSiw"
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
