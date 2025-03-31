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
    "5p5su3VjC74ahWyZUbz6w8jHX8FaHYDjoFuThb2Xkx1oWTowwGqpgaeQZYL51CRVo5qHNaUxrGFLztKCTCYjV68P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nAhNTVDu3ka8tJyrU9zcoi9ruk6mKzTqYGbD4KMEJFq1yjJHmBgA9bnwPbxk8XpXeeNbNZu6ZhkYebPkH1SxJPn",
  "key1": "3uZxh6b3qyUEcfVeZqwSi7BfzFs5Jno2F771y2iXRg96qFKYZRmejFYjbfUWRUQUwoAUqM9Kg32VN9HoPZxGghkg",
  "key2": "53R7Ri4Uh9FVSraBfHnyxZU7DHePkf4ERBGSCWbMmUttF2GW56NTnpqTDsTyXitUkCkg4hszmxs5tqwpvgfkB7P2",
  "key3": "dP5Ec1JDmSGdwx9Nao3Thbjw6UqoTVnGJTSxgGkJ5NX6EevS5XLtmvXK4mfbFyUWCXJs51ndLWJYdt8PNLN2FYH",
  "key4": "2EPBzMjj5sxGu9YWSncwjS74NpCJw4ND3hM275tbynkbqDF4TPr4LX6TS8uw7r254qDb6MpQryvRefyx6cSczDpc",
  "key5": "4uxbbmnFRUds1VPKENp8rErT13HuWEX6yEH9q792NDPP3o2TVkeVcuSqFX4e2pigSgfb2LdECj7mBE3Ugvhs7Jvg",
  "key6": "3XQks7nZ9wgHjgwNkrTQpHZa4QsoDmtc7JQ5wMSw2Mw8jvRVKodA9hNaugWhg1CQvLKnLfNqhv1usVWh1BYAEeor",
  "key7": "2MQHYqKNtoLYWFhwqwnjCQtcxNAv2KaqX6fr3j6jRbTV5WWwrjecfHksVkwa6qVWDCwtpnaiWY6KtcBG9GHojk1f",
  "key8": "xtJo2i7yBEWs3seAm9bkpT8fapSAis4HDj2eX4WH8o3bfSsDqtrunVWjrX8nbJ7DR9kPea5SnPqH9G46Fe8QqHR",
  "key9": "4G8Xc7mR4AXPQ6HAQuLjxBLZpacHeDHETnSULmcfgwnrZChh2Wci5yEeNxAAV86u2LNmjfCegbJa9mBzkivxHfvH",
  "key10": "4KjooS7XdEc9PFhoJkRmiGjbRz2Qky5mKnuqYFjSHsdnbgxuNNwbFRFnm3Nh7hFk2s6tjfLtd23Lw3NdUVoNP2zK",
  "key11": "5bsYbKBUn2iUAjAtDCEcajWhZTM6FxR9JAyYLtifc7gnEdQXQK1GQ1qrfGeqEk8adVQATeeBfeb735Z2uZ5mYWa3",
  "key12": "4B6FvrhvFUzHBB2fYxrx3wYHhCinyMv3Epq99uARGYbzWh5XLQX8fukrokJjDJTQ4QUy3uWrjKjtmhMhSo5zWczS",
  "key13": "2f74b9oDHHQNQe63ncXDBmF7T3rRteXyDsP4CKHvy5CkABtss96m8MNMEjKuxgQ3eVAvtcLRfWPGJNorv6EV433B",
  "key14": "5LJXk3LyjrhTn6ohPKRrHyPQrja2hN5pHqjXngaZh79x2YKk88DxRTLCvCJfbX116c1B3TGXReBnm2jDExPwnH75",
  "key15": "3MEBbV3j2Dm9ue5V4HuyP6oRPW6VdZ7WjyUaK2FWUa2SeCmBTuC9gwe4YNUVe5WzGpZCvYzVtuTks36ksoCfofXy",
  "key16": "2F4hJbZUgYAz3MojWxPqns3jWca5C72HEkHZajqbaq9VFjPPGBXpFHfHEhWE67aUdTfZDDoYqpn8ZbVSJfuhW4WD",
  "key17": "5kn73SUetoMpdJPhbWBUZ2kbHn3eWAQZMnge3TCnYXq7rAYkKLzuZgfZykKRcHxHHEieLvLUmpaafPyhMJQMQufM",
  "key18": "3uhhgat4NNx12jApJWswSgbo8EgiEg3NXD5neqQqsewCUGEksrB9p9WG6YtrwfBEWmQb9v3ZFEd549VKGizUUeF5",
  "key19": "4PSbDWYG9jiMh4mjLipPt3cyN5r2TUYZYTUh3fh6ftPD1YgKLmbtbeU48BWntKBCb7RVqgnz4Nb2hdWqFNuJFuC1",
  "key20": "5MyFuvE7LNGg3eSZd7e1Q8tvvNX62JYJ4YsFQ23XFLWT9MMDKuRGzk7cnEefxPPQiewfhEH9rTgLRDYo3a3fN9nb",
  "key21": "ozLZKofrHGVZ9r5D6zWYNiFNMtE59Vw5mXe1FKhqgTbWCbHNmVs4CuEJuzsUd3UCFWkja3oawKmztua8dNhHKHm",
  "key22": "3BbZQz92hAcgVXoQEaj86vyb9f69NaXmrvd7CHYayFfg5Z54YfCBwrMHc5SwTATaJ7NEngBbSedbik6WveG8nVTq",
  "key23": "3Z8U2wKKY5nPE1UaXayqawCxW3vhu2fBNVz8q7q592Wi4VNcGfUcVy6CMMqxSu9SivjpZd2TKheuQum4cS3MMgmL",
  "key24": "5nqvbpe8a8xzQqYowDrigNLTfQqiZ5fEsB8LvNyfMEzqaUqrnWpd29KZYBvbeHe7vQVdrChrpQXYZvBm3TopQj6N",
  "key25": "JTg19LpmqbKFAedUEvRUyxWnNobk34XLuZaLWooKjczXsDdKpTQqYriBpCVyUiGUZ8RttvVREYpd8Dfn4VLW3Vz",
  "key26": "3CMwaJ5dKXzDkxoqdLwKLKaiDhh9tTiiqTqYxdAcbmiLPhEfRNvsM292YykgWY7YweAeEQC7V9JNLm2G9PdC2VKP"
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
