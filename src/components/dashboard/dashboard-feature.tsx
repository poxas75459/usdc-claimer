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
    "2LoooH5YTRHLDvfZ7JPSTdrg4jFZRteMdSNoLsjCdJJxXW4Vbr1xiGfQfJuCPfYNvAXWFaHWq4J46SZDkzs3jt3f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jD45WwP7Ad4sjJ7Xm46Bi8BtYoPbZK71uZ291KpFLKZd4JpqDjujqKgCzor1GfGBrnyBwjjBKribcudZ2isz3Wa",
  "key1": "4fLxXj9rLWKstwzjMSdg3hb5M9EbsQWDSsdqLPMcKSRmWMupdXLuJWWUYLPNFUTEKUC31WLGE28ks4GRozqYq2sQ",
  "key2": "38bRg1DfJDcad3zsHwM42mnXyowcSGLqMXDnaWZDGqhotwbe25u6Ea288fhxL3P2xiZjQ58YftqFZvDzbDCVjJrT",
  "key3": "4ewbYs8qpcTrNT3Udp5A66MmhkcjW45HZZmbzTNLvirQvt3jKcvv4GxPuymnt8yECVsWq5J3ZiP6Ss3Q3MpxMdp7",
  "key4": "2GbCSEhxFNhgdMequDsUu95wE8tj4iT2yNsgmg7MUUHe4eCpLtCZwNKaCD2x19NpycQD28VUHuWMQKrp89Jc27eV",
  "key5": "35NCBSuNAZdphfqrsVDrtmJPQEUpnobDtkTfZsAhHChGkfGFR34UajVmKjwSV6EM7ddoP2Hgz9iX7kEKUkXLqVMY",
  "key6": "ZQvWFaxTv2z46CSCRALjNrAZzr1gRiZZQkUmhicWRrqTceW3F2yYqWAWEcknh3hKQqi4hBjC5y4ydqLJ731h8QB",
  "key7": "F9eoP9xw36tqCvMeKhDJXJTsDDy75N765hCkk2ZiZkSoHQVC6D3QthSQgXYxsFDetuft3seDhZFteVaAWFLz6a4",
  "key8": "fvMkayDW1rCV1j8Bfrk8xoyUZRjZbwSJZKnVGRzRmiJBgtuKAkaTxxyWs5SkqJyEcDK9CGTQQjNPjYDdcjbqGpF",
  "key9": "5XLN5hGA1TJAd7tH7DwSthDyLkYW7hNHimKqzurWgXtkyNciWgzL5oHrMUMZ7DvbjrRM8wQCFtHLEZMnTeNMvfif",
  "key10": "x8pbcq4DefFp2NjYahj66iVU7cx6bWqD5oLpC4uKgmJ8YYpxTeq5XDPyzU1Xt8ZMmHiH59LTito16KENbgoLW9i",
  "key11": "3j5pJssUPK8K2R9pL7nAorFo2eJUbLtnhGRBADWUeChLZ6oVQ85C2xteUKVBco2QLSBCfKaK6p6nAmDhd45HjQej",
  "key12": "52zvV5AHGHKWY3bgUk6D4GnytTqscfea5TusbVg85vxFsmsSprD4vfbK4Cumyv9ZDEoL1FDD2X4eMCsmPfHw8oFw",
  "key13": "3SXRvoaMsR1P1oEc2Etf3xtPhD7Qc7c8rJ2wGV5XBonUEid6xLXyogm2bcu32eZTyAnGpgr2W1ViyBViCMaXDsK1",
  "key14": "5qsczvHY4CsdMkqmFNUuoUkj8t4UaCwz6uHGtaQyUk9AB7CKkWWeLymooNcnemd1MKZP5UyhPGCGEpJhCAbp6pw8",
  "key15": "47eeKaXPVX8SJPrKo8Zk1aswkZTjTLrQ9vcLvD9Hc35dsLddKGKXTd5gEopCVuJW4R8rcERwV2oy3poTsrPGFwaq",
  "key16": "4GgWnREFKDE8WjAokwqrpJTaXV6nNpQMv7ayxuB3bS7okn5HHS6JF8CpFGYoYge87heYu3GRef6TdomQXmkTExhJ",
  "key17": "2stMQk58jvgqYMhZMJ3muPgGB24dbpVVRKNeWFnGiv1GQqoZP15dqseVqENahwnx6RKami8PsSdTWaiFAdzUgU1h",
  "key18": "2GuB5T3vpcUVZ8GRgW2mvZMc35EDeutvohUftvjwQ7R9qbWEFtjLJoD7zWsBEQdWHWK6p3WPiq4tnkxaQd82Dtei",
  "key19": "kVXhLtTwCY1kMHcNVn3bwwuHJUZWpq2htfC1L9qRS4Xv6qzGTMJUEq4tnxwPJ7uxM3HuFH1iCwm6bSeb3mX3uRw",
  "key20": "5qEKETeHLdXidTbaP6qyvVeoiwf2GUApS5Z74x6ym42UkDrjBg7mTCXydZNkkXKfY7pPbrytks7wV6yY1Hut3eRz",
  "key21": "2yicmJQ58txng3v5UczYmBPT6i2E5YYQZCnA96ZVehr4dV9i1NwbrdRqQJVzNJwxvHC3VDMciuZQzsVw92seaLgK",
  "key22": "2ygmqKAoWvReLaQ5kcyYbUP5DsLjzdwNMLRpyszpkrkjXzt6nhax82RJeyaY5vngDmQe6nUiTFxZZMpn2K4ibzfW",
  "key23": "5Kqc6MAYx1wNFubqn2pwXB6aWsaFdRDhdNomPMzNmGKn8a3LTQ2VD2kBDnxYgcJfJSkG3c9NBHeN7fvpmcxvCKU2",
  "key24": "3aH6sJyijhYRabLFxvXzZ9H4YT46NJJ4rd3WFugxASd7GeW6ZBmhrg7G17Yvhz2BPp7rwPWYftysJcuzQEjb4wRx"
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
