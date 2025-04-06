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
    "3efoUr4ok2gnyfbGGWaownPb3U19qHPWMCCpkpq1ijFFQhXA5nRg67oiQYE8R9q3GLpB2PUPGC7TH9LdWovGJcwR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jdBBTmTaCuGuuqbAzZkufdSMWpJTiVWZCewVc9bv7ucQGWNmB7e3ofwKtbSKrnjsEXXPXdv1fS7sHHr86VyGBck",
  "key1": "4UEuhH26mbNNq3o7CpEkauBpnoz6AFCZGkizrg5oYhZHgRGNrLSPyQazR8ULztm3GGWpQ2LN1Y64Vjb4j1yDksBG",
  "key2": "3sMUskLtGtusSrfTLugCvo4q6EZat9N3TEqzv3YZewjey4Fwd2t8TwkjmyYmdP6wwDDrZBbmkjfBGeNPGzD1stZx",
  "key3": "4MUM2BCMaCPXBhg4rfoWqdmJky1FqpNHk9B2iQ7WXneuhyYkawzKaD177Noh6icXoSZxecwuQBJRuif6y9LtNdPA",
  "key4": "2CE11Jbsf4yUHC19b8SdSTYBbZQWD6vwkQ5Q6P4iU8mWgBZL66MaCx83NSdicqUKrzJvC7Eo6HbdQn6gVv342fzu",
  "key5": "2Adasr1RopUDTLdG4SigQYhV3WADvUVz5ofLxxAHaw13AVE5jkRpVEsMJ1BBsNfXAQphZrEuJPvYhLxNxWVEBZcr",
  "key6": "CjjVhNeKjMioe8EAqPerhmrTYFrYWXtmwocfdez71UjQVVgo51oJZvDjHgXvXJh9Y1sfZYxed6VmUtxevuQYgGu",
  "key7": "3JX7AtDoxdFk3uZUB8feH5cyFfKX7MhsY9igrWhsJ5b19KhrKkbDCqF2T2b9bhwfTAfosBwEabbDvXr4ZAWPuNjf",
  "key8": "w1V8x1HT272BF3LbQZBZU9KmENedeVoaDVUW6Nf3XiDqeHo54yguBTZCU8X8myhmCPtv6eshb9jePZYK32BqxZP",
  "key9": "3H1n4VrZiinTksaQgnSProL49prH7enpMLvLqj5Sr34z7qPoDSVvoAkJAeTY6ia6mESN2vUmzZ6hGB8meksuu4Q8",
  "key10": "2vgpctzFkEsByCUdYbUv1AgBVFxQTJ5jkWhSJeJUBZvXkKvzH3Z4acexP4koRELqPH1ma1yWALsyvoqcigVtPPSN",
  "key11": "3voHtDVAVKp5EHTwKKWdhYe9YpQr7F2u2HhBmE529hLgTG2sGYLrwKmivLkML8A1YFkR7uJ4ffaeQQ63EdvLgLFH",
  "key12": "5ZS6mNxuAy5fmGhBq2fDJz7qVn9CWDqfSqzAsH3FHLz4SbgpGo6hQu2ubVBmbwMseWD1BBxtXY7dLMf2nq9iwnLr",
  "key13": "5hVwJDPmKExEceDaUuxPS5sNeRYQFaeNv6e9EZFEbczJrChA7PTZhZjsGDC3bbChcnV55gGMsdUgoaDUL3Qh3Hk8",
  "key14": "2dhM1dG3Tuk1QnbZwQTUyAqDiQEjnywZf6dwS8MhvYCSEw32EMRwf4bC3bSrswcxDLaZEKeWx6TjBxKXaTt5DR6i",
  "key15": "2Uun29NdJhiodzZ5N6sEs6RXKk25QGJ1GSLDGEpxj1wAhYr8yy2Eymiw7HfRdRwVo3YksWv6dYiZZf5d8YEjV4pM",
  "key16": "3PKngggJVDdL7KBigrBG5ELKLSRadNs6VR27JANXqSYfHhpNcCqUaCedTJR4h5xPumW52iNNrUZfECuE6dKkyapc",
  "key17": "45pr6kBfbtYdG2c2z1q8rBu4UaWFtK2Ui77BLUsvdJeaRokgbTznVrSzyCXyL3NXQ64ffcGG25mAsi3cgTJ9mXgP",
  "key18": "3Z5F3EesQDzENXFReTcc3G33aJjLiZVnwj5At7Y935JWkZ1wEVRNaroXgGtSouMY9fYHhQbExg3hvUChdamaH272",
  "key19": "D1Kp8FB7hpb1yzkdtiX139EQb9rf4zi1kg3SZNXohxDp4nCsRvTa2oxygTiM9uva9jgFcVyaEftrF1GmUcZ54is",
  "key20": "5bTmr1JthdRTuWFjsq9u6apV8H6PPVYwHUvffrF5LaY87u9Az5HLPdaX7MzsSVVeETD5VSpMuU51QTKPVcDmRCwK",
  "key21": "3uE8RaMa9pmdnzs8ttxrZ9pMGr3UTyWxxWRcj5Uo5qR4142SvQZJuNeRnSh9HJBdSDwx8CCVLFV5wVaFNLx6674p",
  "key22": "QoLqKWywFJR2nwkhetCwQ3RLW5BigxzVD4eWyJ4nTBFEMTM397h5P5PrNMPoHvpjwW9vM1mxPXKNwQiTejTMA7t",
  "key23": "5czgun8qJ9BjChWV8vCxMhAjtzRmczL75fjZbtdR84Y6R91oyQ9KCzxnbDJzrfeeQt1zmSqpCpzV4qGWZDLeZXhg",
  "key24": "2FTYsCXDs6GP1KTpDWyeir1jV456U3AgVqTAa3cW87fXPnRvU2PeCuEvS9uCA6FHxVH8knkK4es1tPgP4DQyS8xy",
  "key25": "46voUbniTunqt4Ny6QhkhXh2fa6qjfWWo8c94kAba9VnG5rVGhpgE8kdFZpGB2VysfE64tNrwy59EoCMsXdD468A",
  "key26": "3st8BtjEKnywgaGGfWt74o7aS4J837CsBdUUi1ZjXkoHyBeKZQWnjj9yXwssqjWEubLPiMRTcr6bQryKmMXfKu4g",
  "key27": "3kK1htpyn1fZPMbN9xNDbubRN5YjSNpE54dRgiz6dUYxc95CcPuEt4rhMbEyBckwL26DbQ8cZtpAGAkArK28JWvw",
  "key28": "5VWjBJPTvgFV5DUJfJxHYLYo4Mw3kKY8FpLsZAKKwZCseBuL8k3aLyhVxvoTHwqrNvP4qV6zRqwsV1Wvcv9UXMKE",
  "key29": "2j33qgaXDW1pVj5WVSk5UGxMTd5fPMuZKTx752qij7wQWiMjuHi11VpKZZhFx4tWGhV5GREYKBi98nrkTdh3bF6Y",
  "key30": "4iURYCjX9FgyVyGtohdzrp8tKqn6b4zcHB5gkb6spY1mwoypXh6ZML19acgxUgiQLHXqfmsQEP1r5oswQybfvYq",
  "key31": "51QkdTp4Uu72jLDwLugNnvfANXUbJmZ9zZe68c3cfnz7XWnkRbhhfmXnNVbSQQfEbE2Z8ror9eRRJQidKa3diCBz",
  "key32": "AMR83jWApkyPQE8P5qHzGXjHX871NrSXMV4z8vUr5yPZ8RtAahQpWTXneQkzBTz5SHWGyZFrtywgKX8HGxDo7qp"
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
