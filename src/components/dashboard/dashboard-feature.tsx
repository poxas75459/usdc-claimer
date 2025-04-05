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
    "24JujE54aD2EDRbQ7LF3hUBRkd1jLYL7YuFvoNQKuQYShriAGRkvDapQo7zW8YjwJSMp1Y9aPHTDXPrcbceZBmH3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43EiGPbvuEVhBsHm51PMgN8xp6BFwDTZj7Uhh1C6mEjSL2MfG1s62DNiGLJHxSF5tNXBkJLpn6rv78WFwhZrPDF",
  "key1": "5EYpTKLwjkQTPJFPJmehpsKz2shfAS4DEmgnPrbBuZVF6YZju1bRqGLFW4ZkC8BMaXYP3fr3J2wyDwHr4EmrZXGW",
  "key2": "3XxXveYcW17MWXyiyBaWiQjHwGLKmHCS8zLNmKsrUT6YrryKtTajGUQ3avzKVdHWqzdDw9R2umPg4BbcTp8fDHrj",
  "key3": "2kG755e64obchvb71RNAapt9gBAWwGnDJJVQKpK5nQCwoCixHxZYBVSDzfKg5Ujz4ZDuGfy8pyLanhfAhFNqjJpC",
  "key4": "5KUUJoMLq6KSFifNxmQCKedCqcaZsPaTS9JqNiv9dAxmmHQNFazbGXbnQ3Pq17oQbfLjhtViKqb2muz5sdsf1aUU",
  "key5": "UGmy6WwLxUeaEDvosQSmskU2ZLMrYzCrBLjDzwJ8LjcHKoLxSyqzjyynPq5TVzZkmVPk9t2wJW3vpLTjirJ8h3s",
  "key6": "4ui9dQ1GRHhgeKpHNmQVwb32j34ayemhBMMWRo1KhvZz1ULQ97uJEHrtxEbxMuNMowGVYTcwZPn1i1WvucdatX8W",
  "key7": "32xWTVeS9kj3tEEnQSy2scr2W6punMyoWYk5LyN3NKNYun3rY2h3wwdS9TQyqnZv6B1xF8CpTDJt9pzmSyzXy939",
  "key8": "5shDsnm77LKt6dL7Mf3pMfKXjJ8ADrBcyckXEqyB1oWjnRY1H6RpXStyciGGgYQrLRduVmweEitr5nKkXqs553eh",
  "key9": "32N4NJ14fgFSpEVppRjnbQCXhah4ApyJNJ8dJqb3GF4Fvgn5F8QohYAFiGoab1g2zbuAf7CG1rMVxPGQdaR3RKJy",
  "key10": "3RNm5pnehWL7bszwMfZG7hgwgP8ucKewEcxM5S1VHGYQJyK6xFtkZCJDjBcMeEgUyq9Gn6daWoV7UTDfYjWFAp3H",
  "key11": "2s5DR3kd7ZA5QYu8ahiiZmnTQQibmqrLjskkaSKstLLbmunc9pnRXjdqDGQtV8wcnafQrq2skupogYB2VeGxGZ8s",
  "key12": "mryL9AUC7jR4T5u2AfSdZTmdtK3DH16PWWTH2hZz4Z4cmf2uWrYdWBkEg87zJ5vQLh88S1o7ixX7LfPee5FiayW",
  "key13": "5jjjD84biR9ytftrRpacEhDZgMdV3QeMZ16iWNGdTj1FrN77B1o1o4kuxT8zpiugtwUqJ4xaXSyfLStzXgRV9aas",
  "key14": "4udrXVqSaJ23meZH3vUSKbHRgW5hixBEsghUyrxLqnBkWXdccRfPubqwciXzKcp33XHZ1NcT89UhE6vc9HZtvocz",
  "key15": "4LxbrmsFnX2aPW2PgktWNmmmXQJuRE5rp6hki1c4b3hh4yi3TNtM5AyrZAverC92Xhi4AUYuBJeH2c2ddX3Vg9M8",
  "key16": "5gpHanqHb4nYUariYW14FJcSPvN3er8YcAD1dkcaxToKGzfLRg6nE42enYmEEwadaZ5dnW9VJ5aGn2Az9cXQExzL",
  "key17": "37sE5WWTaLmiqzQCy7xsoH6Q8SMmivZd6PTHdYzoqxqmKdgGfk9kEzKPgdJ7LYioToGLUGi5jdyszPmsTkFfckoa",
  "key18": "2dHosi681zcnBa25PGTDJ9kTdYNpQRvBjgW7iAyqKrfcLpaqejLvoVB1h78pHiGyEsapcM3guKo9EJwHi4fLzyGC",
  "key19": "4H5sMMwY4S4CZVUzZacJZ2S4PmUqrDU2MaWjfjANvYcEaPtRvjWD5yjzhctWzcW9SEMZKe65ni8oS9Z3jEsrDmKM",
  "key20": "2MNdU5SCpsP2hgWtc6XxrZYnVS9ewvqjHoFQhyzPpay9Ws7c1n4iqGmV3aQpTRgGQfgU4ZXY5NgwohnNvK8Zsd4g",
  "key21": "84s2NJ7tEhrsWjsVSTRrHDkaa2wwaCnYvmHzWKpTjz6Nh6mhJSJtmumjrFxq97xZwA4oswpcYm6Mn337P4GWqRw",
  "key22": "4S4ptykWYbECmExrLp9TERt8XrkwvH4pfN9ssv5XhM4GM3gWvCWyRxonkKxbhCR1UEa9dPZPTfEyxgeuEos29y8U",
  "key23": "2x7Lhvb6RXj6oS5cCRupNRnyxYhHF4U56pHm9uSzn243eKbHvXSEeae6U5GoDdAwSdFsFtCJFXaf9GRteEUXpUjF",
  "key24": "4oLuWcYYBFNSDNJqcro2BCyXW3oQoQEnKVfPhqe1DcQzrsMfauuqWeuPhFA8qQ7GwKKCU4SvxWccuSo4gxw4AT5B",
  "key25": "3gyGwTsMDdakAQe5YB4mDFmFt6GwJBd6P4eN2RvfByaiXZuGrXcPmQFKwSkXditpLVrrxmScXJ3e1hzGegpSRcSi",
  "key26": "4gLDYvcKJ4eBJuBEEeTq6GVSySaxENhHE9tVHnNoz37h2Haip3Xg55CRCvowzwL8s4HLg5wFjPZqkrcRTiiCQpfe",
  "key27": "4hpTtMHEJYKndj7PXEJjtveKfV8s9VTgsnyqm553SQPwk22vLHEL71peeQMy7BbYPpYHu4sax7NrBnmHBe1PjRB6",
  "key28": "fTw1qYp29rrXBsadk9weg7LfhnFd7ire36yo5gVia1LuRVEReFzkwEPQkR9zPJf924p4RotxbA6MEFQirg69ivf",
  "key29": "2vo6Dfbv7kFGWRGEBipXuhGehuQWjt1zQwxTgNXv4Nted4r2aKSsQbf6rqHCWcKUikfvG2J1u2rFm2Jfxy8Ke6ED",
  "key30": "2XM85LmvFmbcTzUe5nxGAZa4utQ7TRUpKKgZCbTSXQccH5ZNvMUFy7Qax2Zoqow9Fpa2JZKCEhsCeEkFTkpmxbTw"
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
