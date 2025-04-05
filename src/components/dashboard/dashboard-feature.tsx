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
    "2iXyFXLit7w7ssZF2ntnR7bmoDKqPYHRaz3L9cqJTvfSziGnWm9pqCtCKDwfZ5cMs9adNX9vJtQStzi1Yn8rjNkx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39cnJU3JhqM91wKwBHcW3JY6SRB5QFzHuETfMeJgrizVcE1sYEziPTnMt5S7R6H7s4YyjWQTrTKvTqpq2b2VUS8U",
  "key1": "4uf9ucirbrniWwZjcSiz3m8zMqm3BdeCdiHd6zqPx6MeXuJqjUE5Sc51j6syRa4UPVBEg3CZ1CHo68y6dpqxJd2G",
  "key2": "4sXirZxnrgVuwKEuB2fZe2Pb3aFUkqgj3caaVvpEjgnk1DjGC66GV1M7SkRgXtn9RrFofNn4zAv4npsXP9pSRaVS",
  "key3": "2h8LsFxZ1CZzTRVf5EsCh83YCxAvbpRKvWeA6HVUNNywjWY2BqzT71bmj7QbhVNmnKxbGfkz8WWGy544bRAnVbF",
  "key4": "4wHArE7gJhjd8vnJ8gyCwraNGDLNgASSDC6vaqxHoWy28YhYfqh8KexKx3pyw2oW4dyw3ZrhofNc9MCJCeLkXpyr",
  "key5": "29QYpi8JPe6BMeFqxnBEmeFkHi5SNtdzyynUuJUfSff6j4aPL1YGoS21MGW7HJ3LyYwyt7t4b3wZLpj3ffu3qsBu",
  "key6": "5qe844cXdcM7kCXqr9zUQ4DyAvc3bUsQtATvrGapEEQmfodyswXm7Rad9vAWYqY7yLDzwmhQkDVgTLdKrmJQyAop",
  "key7": "ErmYex2zA6RbbbPv6zNhx3VKpdNbijirqRcxxMEYG5CHEW5MSKMcSKg4sLpQLyk3WRKeRGGuLaVKAfbkmy3Wztg",
  "key8": "5DCtRKMaLNhgqZMnz6CcbsqDJrjETDaz4wpuH71k9GZiMtycQcnNu37i3GhdwcrgufRXfAJm3Aatj8yeg4VRHRhX",
  "key9": "FsjCTmmJRgLSxjzVCgsXSbJMjiFMYpxNbXx9HAjLHJRu4H7bFqBXCNjD6CnzFuP5Jg1J2ucrEL3TxK51k7LLoJc",
  "key10": "2AUhydJKXFRgtq3dLkLttfmZzyDtCAWpz2khrDKfSy8MaURkMMEV8denRanuHVa8Z4mW2mWGzhjbFpLMPZghUGbh",
  "key11": "3PLezzpNwL1535bTju2V2BwcSjCpDQG8kG59wawEnnarLTq7MpiLazFAkutt4rfNTPKZ9YkqFXCEnSK8Ai7JAgAY",
  "key12": "2mSZ4ZfzgihWkgAm9AhLTgZSWyLx82SHL7u5pCBGsY6XVn7MvFxjdZg35pf31MaG4LgbmBXdq7d1rkepxiandTgE",
  "key13": "49hCbzLs11rBPjqK5cdiZNtyg1au4Cz17rkQQf72L58qT82z5VSphkT7PtC5CCYipS6qo2KpoR9tNGDYM9miYwSG",
  "key14": "4EZND6ZiLH78ZjjWuLnU4aXUABAd5iAdWpHHx3ThJLPo4dKjF6MCPgxMAtoWgL9DNsscA41CdD5CnEzBCH5Q6gSP",
  "key15": "3i8zjpASFEM38ntNLgdS7HPsrcAnsg7BZJmm5sZtize7uFrr7eALEkqYbFSmzb3dfDMq9R3qsgejHZgi3SqCfi7k",
  "key16": "KP4wW84xxnmRNPzcDgLBwrfkhGgwuhYbszPK5JG2YCGR1R1xoi3H1id16TDeZWmXvRPHymNYiDBCq1aN39MajWx",
  "key17": "4bvyNaBehi5C7n2ppnh1BBV1FmhWtkjnsi6XRiU8pCz2Ng3uP2RbvcGPox1PZfVDvnsWMehqBXxsvT5z5Wh595ic",
  "key18": "Ev279zCqS3JbHjjzbKBcSEedmA81FKdxFT6HagALVtRt5NsopasDbt8JkiyYbu7jB68pMQazmu3Cw1XmDSJMWFk",
  "key19": "2uhpXZ5eH1LxkfunFsfv6VsfBhjneprJZmC8232eWPjF5KNXy7pKFbNG96e7xYhWNMKNsjatqt4HkByaUtkwiNJY",
  "key20": "2fy3rrSLKvWAusZis52HVQTwMtJWbkHenEFX69KVU1bHmfSstruatHQxddFeije2QZztAUhrZdxa1yVAAuu9HxjZ",
  "key21": "34qV7mC9TdgbWcgmE6zTxCnQkA8hP3xiWNPZT3779gQ9Gry3aoKs1wJ5CDjfuUYaiZzQJYkEx5xs6gVyNdA6om3F",
  "key22": "HbPkrmjChbJ2N1sF9byKBYKHXtXRa8BuT8tCn2cgHJKtvTJrUrU9zs1YpgWDL62jWv6VsKdBnsJwDgWG8XnFi2E",
  "key23": "N9gjtMoCnNVCHdqtFYK1xErngY7PKDCWovuSmqWkjecFa65uEEy6wCqm1J88cGPXcybpzJ6TS4CMLk58vHMmNYa",
  "key24": "58V4U1e4LpeUffHQhZKYVP7EZN7zqhWTUcCD2mq6PU7cMvFNMe4nhYeiBcAuSMYhvzim9iU6jZ8V33hEUnCrXyqz",
  "key25": "2QWfZLe1khkunKCAwTzGnGt6qXtHL1GBs9aHQqEJ2shnB99xV66EjwZG4jZukVQFhYCatpZe6MMGcwMB9wUe6PGh",
  "key26": "5cymRcX6n6Qt2pdDgm4E9c6qX96z2Lcf9JbNwcwFLiqVzrwG41QLCkoWp3sudmyn9NXBq9A2ULAwwN5Uneq2oePL",
  "key27": "4qS9JmXvrzRDKGsiNxWEnQrG1Lap4gYoVZ6i6roJ8WD9fKEkdg2DVzb5Xy4aNCrUVHxc8eZWFCrbmvyfdC297qA2",
  "key28": "3Z77KMA3zZsLfPJE3da1vkEdiGG5dXCj3J4cM5hXVR2F9b17f3QmPN5Tr8q6GPeJ7UcfYiV8pYmw45DVeSMtENG"
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
