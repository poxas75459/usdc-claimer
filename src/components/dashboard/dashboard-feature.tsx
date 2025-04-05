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
    "2Xknh1QqLHvaUx8SjBc4MdUYfTQtSUvWhLzyKaJkAcdXBcS1fFSAVtL294otRdkPm9jnktVBkKzKkQnqFFnEkmfi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qCooZT5VEY7zofpopohW9EDDeLpEK4rz8AeVdN7Ca5BoDtY9D7yPtz1QmepJLLhgqumxNvMThhF2VAQBqge5FpX",
  "key1": "GPZCreA9Mr9iX8ZgNxoCDWQZayZ3rxbCnjX6HskqyquNdcN8ynZjnuNazZt5cRRQqcDApdyCprrU5Um3o8qjipS",
  "key2": "2Mze8nAdNfgwvVgU2NDf4P9bzM1fAvb1KXQb8RempA6iNRqbBfHp14DEnrFQPE5aKjN46yVPkih6bELXXyCCNMuE",
  "key3": "5ZL5ET22kWZTgyPdf1A6Tu6dSDcZhBwKyXghtC3DhQ5LfeVsBxttK5i85yoJg37FmEMxwLz5x3KTTKpKKKhfz7Gu",
  "key4": "WAUmiA1pZt1RcTosdFdwEXzFFJ29R9S3sYVLbXkW9xWNvE8kXKQ829byTadt2VK6hfSKfLkhAyN5RzSCnyJWSHZ",
  "key5": "3dSnz9gsgSJTYuNcdD78rGd8zbePeip5KYgfTcxkyRtJ7mCuQDjk8AqjqdaqdwjJ6C2ughgScEhQY6PkqG7dFPzT",
  "key6": "4U3kYdMyMshgM4cQTmPMqmravFuHbxgBYCTxE3eHTQZRrJRB3RXJNiSXGQ5n4iv6z43z9sUrh3EW6V4MZ5Qw8biQ",
  "key7": "4G6uo3eG7JFiTcXK7iG6HXm6TMgcnfDScfUDhH9G4yk7bcf33kjpGxrJ9Gf2Ek5yWGMLtGsFjeJrWmXui5mFPH7x",
  "key8": "jxQB7rsEG4NXjXi5z8yqHYj56eZsxZDsUx79VxyhrUPEauwUkh3EHJWzqA7LumQdGbuRLUoft8396WJiLxWA9Rq",
  "key9": "2cDgFRHScwCDat4woAfWNxv1VbEGnRH1bcYTmyovBKHBZ2PUT24Nn1ChyqF6RGKvvJYHJHsqzpZKW6MJ8oNWeJw5",
  "key10": "5baAz34ftbuwmUBKeqDAia9VhaReqNib55adJqjmQQ7MyKnK1Ybkr8FABLK7VyDq61rWj4qaptzspJwwNsXyEqjj",
  "key11": "39qoLuFty2nykLYEoos1gnUXQJsxhYbTx66kaL7vKvjA6cBxCtfemBAWNFNdXdYPUts7ZmypuHRAz9ExuE8hXviU",
  "key12": "361yLqUC2o9QM34DS3yLiysXurCMe2mC6aPu6fpGvPmENsLXzowCx4yeN63ywVf6W6XMkrXSF55HFTbJRn9XyRoC",
  "key13": "33iZpRU8AsRHrw7poYqo1jZLmS4zeyXrX1nAXjrvqaL5NxBuUoGjkiBaA8f72g7WojvuhgFiYEqiFJ8cXnk7bNJF",
  "key14": "5cMPBApKFxwG6ZUcYdLu6shhkuZxkwYwymkYK2zM9G6KuyxqfQCEyw3cQP6r8aXhZDvoSjHg2JqnT8T6cHsHPvBc",
  "key15": "4LrUuAecq5vmaDgU35hsRaKd94Pf7oHZ4HcEZmcuFgCtU3xHj97A7mjmNX4WHwx9Knp4mT9k32EWGfw6iWrF5Uyr",
  "key16": "3dv7c9F4xLCn5dcGpMG5qxr1T7k1vDgHJVd2TTzUcpNxEM4WF2N1YyzBNz6Uw2Q7958WGhn9Uk9X2xV36GzHwFc6",
  "key17": "3FpvPS1N7yCuz4bFGbViNvnAN3AEykgEVYqpsKJfFxZxgRSrpW6Mwds4WswHgadv4Uwvu25SdX73YKfaYdPKHUxU",
  "key18": "5WNY2JPSfpNEJKF52dNdC9L56Dym5KuGHEZui2MQCXzxQDj8mvyBUVDf34jN8hc5JrxagZ5vsSP4WpFuFcyJvcA4",
  "key19": "f4JhwGQHKVSrTfwFhb2QJYveTjxH9ZpP1onqjP8mcmhao9dEt5Fcqq8sZ8b5stjGmqsJyctC3YaTZLh5D4gxHWY",
  "key20": "5j3hV27qi6XveX4AxJ6RiFu9PFdvk758ST1NiEn2hRqWPHN4RNMdQFq4CjmJZq3ytmUV8cYS6fPN5r18wYD8SjeQ",
  "key21": "59vBTXvcHnDA2xZqMqVeUwPDicAQYiFgYHKVAx2ZsR6uNJGdpaUaJzmtK7H951g1hNLyXnjXeqme4mvCrhzRnypd",
  "key22": "BnGis4RUXiZXXPVef5bfE3LHxyojTuN7XAjus95BRUsVwEnNb4R7og5EBMDxL1SzjtmbbWbR4FPG5UfH8yf39Ey",
  "key23": "2abhTbVqvDNEEyHKm1U6FuKnjqRwuxbxpdVYCbeeCML9SFtzq7mtMjXy3gnC3dbQomJgk8j3mk6ampyaDkoWRrhN",
  "key24": "45cambx9zFGwm1D5TPMHaYPx6oHeYkwdT6HvVDe1Qu39S5URw6QxJ9Em14gpFxTuomvFdtn5NBiZunPtQn7TyrMA",
  "key25": "4pr2swVfWXJBnf4SNWfWSj6VqWvoG73YhSQSw93Bj8doJpaFZ4jnCV1Dn2GnhrRiv1eNTdwihaRpJreEqCc1i1LC",
  "key26": "34Ddf28WwLR3wXTpUwgu5Karwk3ypeuJHx6yoCBw4xtcsjdacJzj9Hi1YkSZnL3jAwCq2D2dFZJ6G8W8AfD4Mi2E",
  "key27": "5zhPc2eu9JQam78s5jWag6SkZC5Z3F6UcVgpufnyCEV45NkMfLNvgnEQVbxJS86y2LeRN1AhWgfQaTsryTJDgPYe",
  "key28": "2KhFLCJzE2UogPNmRtNcWhPDLnEbrXa3f98YR4vPe2eZmeJohaJxixeL4D24eM9yXnL5KFdPhfmLLSvYpFKo1bb4"
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
