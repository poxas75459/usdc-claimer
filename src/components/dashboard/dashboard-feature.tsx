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
    "ws3tN9E7UJqbaD3PPZs3pPwFKBD2wtFUfsdAMLQo1fBnJmusminH1eznTjtDkZ5DZsRvPiLCUmupWQ9N4mD3Mvn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vbALCbjGn6kh22WSWV8b6qJptVbe9YwQpf8Ypbbx2d558UCEL9LPtk3TpLxZmm1Uc5725wRzB8zzb2yDvt6Fvbt",
  "key1": "5XNqemBcWM7LiyB2ed7r3vZhTjT1xe4TFMe7keambvGTiUXqX6doUnfYw8HLXQEs5oyPUtxYH6SoHAaussGe9Wye",
  "key2": "5hQgxZpKTF14mA8MqFHMH72zggRRuXEYEtcB3f2TjfVzxu7YVwDw8PA3NXdxSDhPjwgxZF4JRfiP5Kah8mYY4iK3",
  "key3": "4jyCFAC6cGVWjXd4R75zMX9siQgoaTiQYGn4d93eSQ8L56wHjUph66zZ1jQsEW1uUdkHnjwkd1whXPAqNgy4ZCg3",
  "key4": "Cp9JAwgYWVsjY8YSGzSP6WMPGKgkM8Q2S4DvdWSHgdnh9Ed8Nrv5mFCHZwzBayFwGED6ZJvtBhKkZ1MaSqbwLs3",
  "key5": "4KnBPevWLHZ3d6FcoMGa1UHB4RsAbUGjD1q9vVRBZwnjCaXUHm9k1goBPrcFEWUtkSJ48QDH6MYzuPdncvDQmh8k",
  "key6": "3GPfT7qzAvSbab7tE3vj6nZbkKEx6s5oDueKh7kyeRkET55H9yzeSLFvctD73KxmP9xcR2duP583DoyAD7GFbdMJ",
  "key7": "3MMa5AhwUPQ373tEBAsM3T6Ux45tV2Za9QiY5GS5tYKzMG96RjiTCi7yD5UE4iTjvHeGe8EoQSLbarMhRdpDL3Dv",
  "key8": "1aP65cgxyRDNgRJSJtT9VgxT7nTLpa3kc44U1cNqehSP9FtRdMbpCB6XwgaR5ESte1yjhKu6JeRgmmHTzWWBWQD",
  "key9": "8g5q33TdMXckhNVVNQvfu2xYd8bLWq2cRFnicqEEsVe7AwBQssyf4ZypWn7uYmPq4KQXUwiKatT8Y4pbUsRTN6E",
  "key10": "5WukPkKR5rfew55Ccf1LGoEF7KC6MciiNxo3UrkqwzPBkFDjVPK9nS8wXBr1TFYYACLpMtcbLND1xATPsCJ9kkDN",
  "key11": "2DSVXrqV46znykR87zmGzbeXotRRKe3YpcF9jWR1PT3R31ixyWyQkN1aMKq8ntb8wq26ar9FuYinea8DmiNv95DF",
  "key12": "5khRMj2btcejuHM7NYs34ojakGii27PUhDornHYQ5ED7aD5pXgQcK1aKhJ4JgVvCtkX4AHwWJ7V9HJZWRq1YPaqe",
  "key13": "2oXKD626w4UEtAf8NSNtzAccToQSqRmSZKBrWoHaNEvgxpKpG8T4g6MrPnDBicC9MmfbhqyCyPa7Nq3MMJVVmya1",
  "key14": "2KXMT9ZvJFZuPSLEo2qVE98v93gPhY9C4xcuv29n38tdYX7ummECLWZurMXGayKCArCKjrsjyTL7xhziExs1m94y",
  "key15": "3smprCt1ryX6GuUPC62bmVtz6JKWTG7AjwxM1pfczXTgNrnbhBwgiunuHdPaCbgi6Eson2a1sXmTaK6ja1woyPHz",
  "key16": "4AjV6mv9zaNjWdreFZ62vp2PA21E3azvSSH4vhjtcTgMSsFszfmonrmDajNuravxGVFHTAtARvgk5EswuWjfvFiK",
  "key17": "3PmxdmLnAFjpc5wczUZa4tW1WphVGoD4NfgmaaZ4RW697LgL1PVzJdYdqKu5spSZU8K3GTf65Rb8bQJ67mxMHrtd",
  "key18": "5a14PxMPQ3DigFFN5oJqFKfEqyirU5B6pokRmt3TTNm71bn4cnqHhdRumHhFMSusx22ZLNS1ykueHWYjMo4uRh8e",
  "key19": "3xUWKGqtZKn16VZqwsWCai3sGzovxweQ1iXTvpVropvbQpnVy5nu8hEuwmnd6nbu6XNHdvewiiJnzYUczSxq2mXV",
  "key20": "4aHCVRNj9EUmEoVex2Cn2Fb2gdbyTGDHzeSJLDgZuNbYemZQarJ6e6TNLLgTA3oJp2smfPktSptkn95aCPdsZoBu",
  "key21": "2sqcLkXdiMUUsQua6tgNXgaAWojzPMMsS2ounyGK5kZcocGDU5Ymfz1ihLfck2MfWPyY4kpMoJHKMsvaXQQgG7oV",
  "key22": "345pNetWg1iHwemp2VhFVrCvA1cbqYh93XuV3cyPd8DCDYppuSD6iEpSzDiJUfWqR2s5aKwBUnt1x5WWtA4gQSFq",
  "key23": "5y8rgZP6GBqoiurxRwBX7xH19uKaCguKbWqDU4LbuADGrnYr34v2jdhu7jaP8BxrF8C8hmG5FLtbcySD1dwDmQUJ",
  "key24": "4vW9gzjuH1t8LEUH756n3to7DmForassqo77HDm2xCwnfwU3fsaeCZpcWv9HCh74AVaz1hQkSBc9Ci1VyGzeZRGD",
  "key25": "aCdpDQZAUZt4i2myUPE1VaV7VNTqHhtRmd31PmZ43TkQ7rSMSXp3W9rLEp7yQEbP8tSYDKjCn2RVeHVshtZk7du",
  "key26": "595uZ7hkhRrSB1Qf9mwjPg8BgGjptGEvzRS2JT4pTKGGcvTWa8yXcGo75Dc2sGwfpRMrSDvhX4ze45ripYviaL52",
  "key27": "34Gn4fKa4t7s889WYXECN2oAAiD8pDKpoGuJQrttDpZy3xAtok2SLrarAATGp8wN26Xj2pqmr3G1EYr4gQ536GHA"
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
