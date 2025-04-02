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
    "53X62TJ3NMtWqF9LRb2D8FpXH1zCaJk924Cf7S2cwB9veAjEf4ZtwGjWtDxSDuA1zJtz1QyXeqbDpvUS5r5hfGhG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zmeD448zB8seeU87pA9b85vbb94QSq1HkhpZZKmJ34VXZgMas6BCQqqybKrCfWx8kjK1rBqfiD2JZhLub5JA7uf",
  "key1": "2s2MfQGfbrryzJRrdNq5WNPt82nsvyv4nQ4F6gjigvn94U7FbUBxh52UvEu5rjTPbYEGyYiff6Jj3zMvhGDxxuLY",
  "key2": "2N3DdhfNP9N92VVqwseCaZah9BLQuytbEwz1gnj7CcaHhh1e6pWT6PFq7EK2D4kBU5VwhN7xgvcz8P4UNv97nx3Q",
  "key3": "4iibbC9eouQU3o6ADqQ8DotizMaRngk2MTQLNHfvLvw6Yz66bDNEwcwJ5QFeM4D3VDEuRBRdoTqUEMTzj4qbvJEw",
  "key4": "3uoAJffRJ8aqkrc4r54eRvTKLuokFhsLWSv9xuhb1wEPCHNNdHcjWJNkigjFDNob99H2BYGvYLRRYiTSmkfBy4H6",
  "key5": "vqrp8MwZUedBTeifqNWaNWyP9tobJVntRvDaZyFZXq4PaJgwdrZof1HbMD12EnEb5RXaLirRbG9HicmCi8MUNDJ",
  "key6": "4XGv5HeRWPeitbX7mNdvE6DJ16YAGR9caQAzBhV4neEosrinC8XoX8TqTBYeN7R4o1cLJhYm6DsZLN7X6Cxoapwf",
  "key7": "4VtGS5yu4tJBv9dRz88eY1cA1QcELXtRRqHaYbeLfXW9QxXfNhxRgG1uJNrtyuKxMKdnbka2MqLnjN8aGa6F7FVB",
  "key8": "2KSwkmv3AD676qMhN4ioY6pxHRucch7Y7KzcSMuCw8wwr27NpFrjH4oa5gn2kChg4edjt32oHZM6XK1DXrAHcStR",
  "key9": "5eEaL8Ri5d58vjFNsjTX5b3sYGsNnHcp4mwqSS694AuXR748UQ4qoDxZwB2RRZW6Gf5DegdybkxpeeZ7UDRyFnjf",
  "key10": "neM51eqnTELmS11W7V5CZUpVyXZV574TQbMM8iJGzciSuD5eQjHyhLuCpJBoNWhMhnjL7HafLHgmq16HUaJnRaY",
  "key11": "3pFgZnG7PrNmeBUJPkHAAoyNVPT6Xy96W22Rz9AHpRBg1Pw43hj9LkGBqVyWAD1D84wc8o6yyFFDsb7DgZ41K1Aj",
  "key12": "4ikD5tuH6y5BzwoBRQzzA1uKE1NwWSdeNFxWuRSL3DchTq56BFg5L8fVsx56z4XhgJH6fG1DHXCSkrUA78b4mQsj",
  "key13": "61Fnw7wm7KQMGnHUBieeaZuKVuU8rDNxxzxTZ1W5zb1amqXX1SpK5rGLDiGSeFjpjNAw9wUftbk7Zr25gocLkFnW",
  "key14": "2n5Rj7nSBzrrfKiphGJjKW1x2waHyMtvqmVjiJAuUh7reAQjCvHt3kmEZFm2iKNLJnZFPhAAj7ZNRpZRQ4qUsHSD",
  "key15": "4szrwM4aHimbkJcj17Dz5DwTeTgHSNo4RsVZXd8kFx3znrfnfuEnXRZwEA2LWWQVCN8JwURqPZ2CTx3A5yuxZi8j",
  "key16": "243Yt4iFd9onV8XxJtiZHq8M9ypjxJdk7DuqJjiHPbYVmS13eKD5tbWJYTRr2jEXqaVXRtuWPEQHBmtoC5ktrfL1",
  "key17": "6VcqMAwUjPceVynvbSfN5nLuXMxNpbcf9cG16d6AU9WzDkn7z8acbDQHpDKTnbCrBmi2yvjD6Dwv1PDMA1hnzW4",
  "key18": "5ZtjmhUrLFHVcbwuJBEY6qTMn66cF9jn8WiH2epBTLqXYk2LErfqAWMDq615kqpyFhJEPK3yCHmjk4hpcgvJH9BE",
  "key19": "6y6RN8QTbTCAx9izaP1MX5Jnt4gT6AvCLV26hdvbCs5QfEK3n3o2tJybXFMAJx3W6Vn8NbPr2XLr8RHo1jie1TK",
  "key20": "3ypySKA1nbsz3MB8UsAgLGUi6JhNYqHGDnT2GRzSxEK5WAtYHXL3fLu4x4UqVy9jv7uwzQhxvQrayNjHsZUA6EJ5",
  "key21": "5iRbGSxyhPez41eY2gev8ia2eb4kteJYEHe5r6aDMzJag55Jbj6AG3J4LMfwkQ5fLDCTEgyd724ZvENDCz3hMFVn",
  "key22": "21cyfuac8hnZ73iJRbk2gNS2vTuxEYv3GtKHWwwKppmfREp72XcXSHc6YD6teDqcLUV4VQ9ihAqcmkdtyRQr65cC",
  "key23": "3ePpTUzS6D8bLrU2tp27ByaX1ENB3xMiRRHUwPoDnXG4fFcD1VuiLzwgsbszfQbSDq2nEmdESY5DBVWMQC6BTvpC",
  "key24": "4VuQZ9yx9B2raSPCYspfz2bLzmF7QvR1NqDxhZHx2Ky7KZRmz6xYSiFswDSx1SJPEqzsECU7HjGYr6H9rUKcvd8j",
  "key25": "4eanym6SF2kiep1jdEAihrADnj6d8kUqKet1Uv5cDZt5Pkx4YeLaDnUk8jejsavZLswwbcbQLBsTCWEqTLRsrRMe",
  "key26": "2bF36MPo5ZRha6VtvXGyVbRod2LcgqPT8zLoC9fsEYLjqaQefD8CK6VDgiwzc9tgp9LLwRBKQtDP1yjegL1xQD4Z",
  "key27": "3uBMQG17nPQtAyVXWeyAmL4TVmLELBRmiNdvCyvvwUqWzjSXqszRrGFUdM34Rkhdoi2Y3Ep75x9v1i4RJBXiUjUG",
  "key28": "4XkeZoiBKd1by8KmbD7i18k9HEXXfwrFH6ka4VfVw1JbnS66sj5hhPVcMw91F2BEDj8FsJfcQMZvNsaJpZuvoTPa",
  "key29": "4LbZw6do13dbwHd2caw3kcaJKr8jEBTh93QQtBq2aXpTSv2C1cbThbbaj621FpcYuxGDxHt2Fk7dYLYZg2McUsMK",
  "key30": "hxmPjKdmKBBAbnNfaf9CRvqycYYwEY784b6xc9aEkpU2cfpuwBUVGybTEchpAZss5NYZYxNzsCjCeEAbY3s4fh2",
  "key31": "2s3QVziArioVoxobVdz3SsZxgVh22bBoW8Q2uGAtWtZgTVorYqDTht5FhYLBWmhZ36usDXfZqhz6frjGsu5jgjP6",
  "key32": "47Pp1GUpyMYDDUpDAhKmkpoq3HQd6Kgy3dubtw3neMLdQCjnv4bv13Pv3aGiMBtX1z3K5sEqMkTDar72L7mmG2Rb",
  "key33": "5kKgnwLKqp5FwXwK7VyNyjkV3mJyDDQoLYx6cfUkMFEEGAxSszxCWH3ZBo9iUaH9iMGrE3omVHL6EZUt9kYG1F69",
  "key34": "2tU4yJXHZUWaDa7emgNP2cXnboiJ1EefBF3UnAoCuWzThKyJXUJv5Mwwwoy49nUqc5eX71aAqNFGLYrPZDCqkb9o",
  "key35": "WQ8HHS5x2qMNNUv1dRWF5akWqrx3rYbpPKH6MNFydcex9kARpjoCi6A1uzV1yr2KynEpEQtZHx3fRDWvVhA5k2z",
  "key36": "4psze2j9QUWpWWmjv3HjYSYKXjekq5Wwwq4qD8wwwPYszhQePidbjaqamYvq2cPd3ZdWeX5DcjTSKJwH2Do8dKJL",
  "key37": "2UJb6NsuznVyL7NcW5V6AMbjv1S27cvy7woKrAXzeeFtQ9YDesYzU32gDxcpUZPvK7swLQNV84cEPPB1QrzdxWt4",
  "key38": "ZyzB7qcTmNK6yz2sRiiu7fF8Z3ip2xWkcq8nRWZkASE4XeUnTpRFftyFao7fL4yL8DMsq1e9bqW9qgSuPsuRGqB",
  "key39": "5Vn4Gx2HQBdSk1GJZswNyTZHKBnVG9fkF3Tn1VpYGG8mDr1gJbxPE35N6V9NnACxgJMYahYzc8K9EnKDdwhvifFP"
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
