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
    "26XakW7h64r9iuGkrrpiP9jPzF6kEfXC6QCv8qvsdqWviPXATfvRfCCkdn69Kr1S7rkghnvActAQy18vet4izAkS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59bs7xsUpepo8p7QDbfhhFKVDeKc6cdgiCuhBzcq7wMFvap69cYBH6CuVivedbXDpxGDrLPQ1qSZ2a57qQ8KsCsK",
  "key1": "4CfUYYyEc45HDp4S6WhSLQZyMemg45S3LUZ3F3o53ko4BZp97MdFvamXGH9q6cD6FwSRTKXW5a5TtpwLSuKuHa4U",
  "key2": "Rh55kevq4yJQtJKPV5KicDHL9PNL3cy9rsZw9A399FogayN74HBsWDaognCQvSMDxVcrgWFaca96RaqruzwPz2x",
  "key3": "4mqgRkrHh71gdieGe9MjvL5rGtEimKPJoCiYsSXWnJcMsCxLdJKrpQrKFyyubPX5jzTTssxx3chaNmJ2RX8TK2mJ",
  "key4": "34DwwwAC9VskzbTpBoVJr86vMtRZ3vohn6u6NQEPKkgk8AATdLtwDpYcXcaqiR9VVkJS5xd1NTzimxhNYQfvn68U",
  "key5": "35tb6Axph6dtyerSLYnTacZwW9xkFWPoTGGwXdUAHfAdsARjsGqHWU8ZUVfQWxaSVGgvAbAGyJyStVF5y7DUZnat",
  "key6": "5XsJrnVnBJNd6P3QCv9mRzgdgyHRwVpqMwtY2uvetiR8dnXaktm5bwxyqD2kY4Tej1yedq3eWnoQSBLn2JGv4Apj",
  "key7": "4xDSpvZy5Ynu4N6wtdxxnW4sqcjVPCt9mfG2eMkgdCeJ86y82o7EtwU6fTKAWP1kUffbQbzqRqrXbmvG9312ovD2",
  "key8": "44HS3EUhWCNgEc3F1uE6xy39qD3f43DvXmjjjBsUzpFmL4EukwJrq9Q8jL792fuzpTaSxtypqF8vrUQKZPKRUYRU",
  "key9": "61RV4AV1qNaLMUJdoAoTKFNtuWmM7XhKoHf72KC2SKnvJSm2MRrBtcua7fPjPb4BoWhcVj7DEibdBbUwznGpp4Xp",
  "key10": "aY7x9KzNpXeWszGF9fnAoDzNv6Tr8ahuZkydbkhYHVHAvHPNErMMTLfjrQLkjbEX5S592Xg8mAh9Eu8JGoY9adX",
  "key11": "LCjc8TmiMdm69Tped5MjRg8HgTtrn9aP9PosTPa4h2zmTNAKGHmRzSgYjNEDceuDTGMqMtpV3mz1TsN52UiTyGg",
  "key12": "3kWCDCA7qaEzMA9FQUna75tV4JwFs7GbbtUURhTJSV6ordnUQsA9wVzEqXb6KdLD7nNPTDm2dYYTPngEsKZGa98t",
  "key13": "2hitREdc3WqkhNDfomsB5HcMm9ystHQ11iSiB7Hy7JTkRj17dzj7iN9dADCayUH8xjNjF7wjYV8tj9SLUU9oYW9N",
  "key14": "5WhpTunEXuMqqbzwDDcLRYvMoQk7gUMZ8sHLfvLZcTfufjYNkfxkJ4pz175zvU6GbMy7unYS3R8k3LZAhomo3RcL",
  "key15": "ZYgpCcvUSRSTucSdma5gd3NmVT89EqVVfttKm9d8WC38cxRXnyvkTXcuxN9GriEcwnfT7KwosNscBUq4sb4oZMM",
  "key16": "T6LGBoqKZ73nTy6uHegFQgdrTXCuqas9mTEk2UPo3gnpeudsbZZRjjQrusYRzaj5LDvWdavDWiUpQWQb5mvXCNq",
  "key17": "2Ec8murLXR9JqpJ6UEQwVpL5PqHEkLQUFHtevdqrg4HE3EC7uRucohyuPPHYUUEUyRTMjd1TCfv6CaEYNzxtiYyH",
  "key18": "2yGoxBQMjEJDGBDmRRadaKawo9EatDtuHCoNm5NMhfMgAVbk9wHiiTucwYJPCtLnYemw4hSSvGerKQCoEJjEJMJw",
  "key19": "3jyYz8S3goLjq8dBV2XDrJ4hGmCiqvknVgjBvFmywioeFFbbSVf2iemx8ThFNpzFKB8hYV6xf63b8H5FymGZUm2N",
  "key20": "5zYstjpdHfqNPq6R39XcT9UD1eWfk1uj1Hzvdt3Hg5hWjMyrq5dkRR3qSGNoUrmc2G3EUT7a1Moeje4MuUjDgcDh",
  "key21": "2K9KSP2qjGXu4BB4AM6f5vrtyb7nsKhGRHwJa7KnVAfFPKX4izVPKoXfX81mfNutU1fgUMVdHgsAW7yQ2z117Vkn",
  "key22": "3HWL2VWw1C8fWu6CJf5beN3XZsQDXx7mSx2aXB5ZzikftTBfCxBhrfdL8NirSLCUN6qA3ifUf4m4igJzd2wczCUY",
  "key23": "3BsCEJANLvTHT1axbX8jZ8AHAk9gANYM4DBT5JUs1frLKnsW1SiQYdDwUnaHAmPi3mvzxFYhnpc3P1tYsMbvE7xU",
  "key24": "2ak3cMR64Nie85KSbyhmUePsoxMVV6gYLXZQ2GJqrDPjCNj89J6GwxHMoxrxduWHR5JthktZfDdenqcRqHv5GtiZ",
  "key25": "5unP34LW3RfjfN3hPXpuVkvXmveS5hXahfpPkVi2aq8EnBhs6rcvKiqdX3Fk4p4WqkQFsDHs2uje82R58CA9aP6L",
  "key26": "4VjnmBBwccofZrJSR1K2eaNhgdrHk7zaMqU4pJNBLoCpuzKmYE5f3mCbrjVrDPLwM8UtUCFUgpQSsehivxHKTzYT",
  "key27": "36Wy75w62Ju46KBjYdVwQYJ4jKTsZjeJJNJ7uNV4K9rJf38G87SwDWVJ3xfaAw8CLyHB9bDURKUzTN3T6tMTboy2",
  "key28": "ndiCeXEe6KiSo3Dcpu9N63dKQ6yNppmqvFGqiWbiSXpRrZgUorRkEN9iSBb7NNngUUpX51JRkcx6XFyjuZSxCB3"
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
