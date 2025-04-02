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
    "oBHvzX5DvEydL2vP8pZvspohGQ5MpHEU1V45iC6SNbvhrhjS1j5B1LLrMsaAijPvhrj3MdKet4fGaq21Uj6nxUY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t4k9ugBpdJbgQ3xEkaBvGr5u2MiQaJ353j9D5UdxpuX5Wiqu7AYMQfCLR9TP4iv987yPwELYyLjx2n2RNciDNgP",
  "key1": "445B9Yoj8jRAhSAwVRXiacu8wnxbYQjsziomoXTzeF9igp4iJE1kziVngVzPfLidAqKmzs4CZJ3eiipZwt8revmZ",
  "key2": "4gc9Gnb9DiywWk656L6NQp6wjk8L748diX7PQn7aVKUqp4wMuQ3jTYAFU1epKYu8xtDDrkSMZpDgbhNLqGf4mY2x",
  "key3": "61t3VStpYFm2mEvbDdDFWEhGK1SJCtLzReNYXVBzVT5NtQFxDTXTJ27ChnkZnSFPfMni6zq9tt2oqh3SyjCp9z6i",
  "key4": "4mDQQ3uz3x2SNKHYyqMWh9QX1gNh4D2wbu8m1RsPxjpn2jCSKeWoEDzL24QgfsFQaZXXNWp9oEpisjSrdeySjiFn",
  "key5": "i8gFw9wpZfmVU6xRbjVCLqG8aqCidEavUBMGrsRjFdeHJkSzM17Yaf4RDvQT1EDvv4Nb6pZr8JKny2hRamjY1Lv",
  "key6": "qjLjcqGmz5EXpWaF7KToX7we7LmLc5sPHrHp5gFH6RR1ukov2QsjZoThdXM7NbGUEHL47n8H8hLL95teNNfAHjH",
  "key7": "2Lw18L1oUX1SjHdRS4PboCcGVD4zyWmznNKsd6LtK3cBw1cfxXgiBTgdA6uJtCK67sdLuRtrp2S1ShguMLLUxgPr",
  "key8": "5RZDuVSskGKTfi47UWnNSpVHyERVKJPU41xP5vLVaUXhw47mckQ9FQEa4NDpSSqiULa6ThYVjTp6Rppuasp1XSRP",
  "key9": "4XjyuMcWMFmipfUrtgjWRyRX6LRMt7zBFJbvWNLRRrVqhrVSZtNbbD5hyk4VfvPKEg8uhNtxhWhrCU6T4eG8PJtM",
  "key10": "5ETpQCYKbN2nfHk6tu9sZzz1tszzaEF41Hegz2JXuXXRLhgvq83CddrKsGiHiHd73WLtscjEvPByob7noPBpoD8w",
  "key11": "47NLx2pUxzzs1obPzDKz8MoDyhEQxu4TZxc44dNTnetNvSUs84j3TaLixys2MLhTuthmyfXBrKwRE83SGxNhXidf",
  "key12": "28F1d75NZmcj7jbEnmpw8ZdawUYX1tnuHwzbXaCgYP4ybYKd28Wys9mu1GfbwrUExLerL8zirVNbwB7ohYLgya3i",
  "key13": "3jBCgBUaw1r7SW8RFbQ7Ggzej6Vfgo5kpxoDwUqqvjZSR9uFTRMm9meYTz7DebTzZc8hRYf71W5nCdKBhdVjerY2",
  "key14": "3LLTHZhezhdH2nFrwYDKSexBEyyhccACtc5aurRG6PAR9xghyP61SZUSfkGsurhvzYsT6gb293jW1J95inqGLRqP",
  "key15": "4RShBzcdfaQzAR26kNkjLFsGQo7m1eWYSdJ9k5VPmdxhZWKc5nGru3zUKeACEj385zYvsXz4UC5kK2U5AWen2ujH",
  "key16": "6H9n79GfrBrRaVPPiWFXpr1jGgyP6oTmEXjuMH6qooQNMERePj4uh5eCS7Ndj21SR6XiDRpdPbjBJ5kQJkgUi3e",
  "key17": "NWf9CGf6edKb7PBFcoKeY8wD6t7t4LVKQ1RzPdQDf7bqrY6WstJbRNm6CWzXbEcYdmDXHSAzcx9CFUQF4U3sbNs",
  "key18": "4JmUqW32spoD2FMBoNmJwYMBtLcmeQCsDsMXvDCx6USemypna1A4zdbyxpDXpq6UFDUdUfaqfXc95Uqdo5M9PYHu",
  "key19": "44PL7ogrop2kjVs41f36JYjeNfPmpbJExQFkEeprbMSSXG2wsymjVxZLwMkd5qFMYjqi4hyn2XHGFBH6NrvrGzQR",
  "key20": "43TqFMXBu3f9XUAV6H8mJrZmkbmDh5xXhHMVkjVNuDxvxXQMbPdLSnDiJbxfZRT6HEadCnGzpmSAjkKCaMB7Fjnt",
  "key21": "5RXKFUSm4v8MA4be7Zxn3cnpgiAax43whSRns4ctcTLefDvNAJhKTHWCcUqn8mVKYSxFjAcsQPFkZbSYCLN91n5w",
  "key22": "52kH6vySU8q9xiZinsbseRogwDsCVB15bMGaPBGs2jw9XkQZcyu3GfKVVfBiRA2zp9jppvpXnqWBkhJEHyXJvas8",
  "key23": "JHQTqukdqbgPBja7NfgwJKxa3H8isFruNQFNtKLybCNEbgYyqTyVPNgM1bGYj3mANxn9HpEobyZLhsrKas37hUp",
  "key24": "4cUtvWhZyUfxLWMFED1Y5oMvobGg9stYzSakyu3zaeQhseBnoMcZNayWXbkjBDfRtBhnPP9hMQQtBsS5L6srXGre",
  "key25": "3gkKYAmRB8hnmqntBVmHEYCoL1XTBVKMQSxdfXij5BeEJuup62tmpdrPck5pn3wrpVHyJq3dhbxG3GaYdytDiwc9",
  "key26": "564LxoocMFGMeNgkokKiye3iCHV1eTB2FfsirgVNdYxqpSQawgDxJwfH7s3WKjuyFvx1eyWRPugqNQqZoBuYVGmo",
  "key27": "iYhCrgoFJ8BnS2NyRFts5xpkUNjACgwPJUjpAswNS5UPuvTGCSzoMVZRMcwHNrNcCS7qVdzNrDiYBK6vFYFWUMi",
  "key28": "2evPx1M9tXMevDV9xbGJcrnooJQtq4DrezxenhPaa6cZiHcj6wZfLkXgoKAj2ZB1FMFAJ4geL4fa7rD4bH2AA8Bj"
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
