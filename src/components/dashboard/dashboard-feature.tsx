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
    "42TYMh9gFHhiZkYL1uPn4hvFQvyKrvHWqjoMcduS5aq6kiTXBZUjLBnmiMi7L6E4UPQzy8DyyfsH2wLPpqPhS43o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28G7muPA7PMoygYFRyRcE5a1s9kKZz8Avc5mD3KLtytzT4Kza72RNj3tJsGMJckPeMMWhVGbwqyUu2yfxr7fFCvS",
  "key1": "2NWkSoCE4qq6VLCYJ4mP3WvSJFEfRryzvbDtAaEXU2QuPYjhRTV9pB4jPVBunvCgZF1afR97norg4hqRQdvDyuHu",
  "key2": "2VpMcfLBS22XmP86x11KrSDYomYcqmBaoVEfuYwRS8E4871sxetHJt8tTCpGzvGGW5TLWQsZmRPptwkopgPKM4A9",
  "key3": "4f46cHQDrDQqMBH9JjPXRx2DZYyGRGakk9Sz1mBj4Hw3cRzHRJ1jAem9da1paHb26PB2ejra7JD5fJEP1yvuTaqx",
  "key4": "4ZTjYmWqmELSnLMVErHS8Bw3t7udQcJu7axty29wDxSatrp3oqnNA3eXuCXmrgKUqkEgXgMG3wNoLfRxRSzS7eEG",
  "key5": "2AJhzR1iZrgsL7VRT9BWcGnwmcV3WdodzgCQJ4pZKtewt4JQqWqWgg78L8vkWWPQvUavG8Es1PUEuqjTWwvbUiDv",
  "key6": "3YbBNhGkmMsTcLvijD66npBsFPrTFSq7fq3MdexLdCk9MKkVtkTpv2Fffg95hf7wCp2p22hfjmop1cgQasKV8M3J",
  "key7": "3xdGA3wydnkt3azvKjqaTGhPRWCnKY7Pg7gtTXggAXM2K6E7tSJKrnuoZFPU6TaWLYaGonUE3q9EzBdftz4rnyQa",
  "key8": "A4A7yysfz1MDz3nfQ2Wifium1RdgawY7aN2a2M6uTmQjSGkNRp9fFRdoa3cRuMGg8Ni62Sjs723pkShDMbofwp1",
  "key9": "33iNngBjYvEeeUosAiACJZRz1L45uQXLgTBf3sKiiVEDQt5be2vWZM4JkBmDj3tEqJRqQtsaXMKfB47NDuSPv5BJ",
  "key10": "4yhsnfqyNcHDAD6XSUY1wwguRzvuFUsQMEBsbzKeBG8hj4yZuc9ty4JL2cNjEPV8sXL5dNCHjYZAcZTAR4Nbp3rL",
  "key11": "msShBFTc5ZjnbJdPQwr2jmS3fJFR5Roy5Er25PVWxNfD5i4YgTBw99JRc835hWg9yRPrw2uhezyRwouryE7oLy3",
  "key12": "3fYitxfY4QUetrcrufttHgk7AaAo39xwvzaZqkZtGbEbSmTpAXvzAFE2hfrXwSoJkwR3rbi6M88kvjs6m6niYKVa",
  "key13": "3XWMvZyPwrzkGX6ynFmPjoaLGWGBtRQWs3k2UfaSfjia4MJRDxXPcq2tnA21BUNuNMCKL4SHE2DP97D7bHwADcM7",
  "key14": "3HxGyqe3h7uX7ScFD5gokAMG1dKEnyNcqeChVp4GP2Em17hhpnv7ybC5sKDPjxbdrDcr5mtgUZ8zcHtbAMxX2nyY",
  "key15": "4fv27qD9ktxNAQDnAbGEWoz2PWz75zg5LtjdMFJfPgZFWXAVfQrq9SG3bXxVChDNArNncM8qk4PH4KBTBm8GRELE",
  "key16": "3VqKZ28WQX2Ertp3Qr7TpcVnZYMXcnsYS8KkcjFTGN6y9vfhtNKKs6AYie8opx6T7rZtVtmUQoYCNFxVejkhyFL6",
  "key17": "6sYNhDPs8V8TMafKAnT8YxGcPQefwebCVBNkHDQcrLaXJ5Hh4darExRvUnvUt8rx7t1gLBfq4SaKwKk2GDQeHAi",
  "key18": "3xZCHUss7xvbmmr77LFtGn8i4sYUgjcVghUgKAqnrYK4Q86GUzMVkExBeroDJUAv7uLHcj3VqfDaV54tUZm73yZw",
  "key19": "229GzDNT7Kzrv87NSaNfKe4Ar7MxAnVdUkTzpkhmG8qiya4mWTh3wg2yHSg3bHzwdQGdhPXz3qW5tAL8uFRKH82P",
  "key20": "3FC2hUNNeDxRMqRmJsLPtiAXS7YdUuBC7EDTCx6kxSqQCuHpixkVrfHdLD86xKp4PfBYziEMVQPHVK3HXpLkHqfQ",
  "key21": "5ERxd1mDgveNkDDTutYJUYZbVnxNoq8RqSZciz3SnJeBAg64Pv7NAf7h6JEpMkEUP841LDLY18YxZrA7DaPHtWCD",
  "key22": "52wixnhQNJkQ4zisKuaCCDuKmN9WUpFhSb4R9mo1wpyrwc2J1pVVgvrHHFKwNsRKkJshMKWVV2bv5dDJWSFhqMqN",
  "key23": "4fzWYxhUwuMj6q9eEkbhrsJ7PtzDpVSMdwAwx5H9bj4S1iTY953dueCjDriBKpbRAAfLu9yDBxWp2GCzKRDw6TmP",
  "key24": "3QXDbtMtzhcy2EWw5G4UaAHXNKtEau6Xxjbg1UrZ8KCfAqRcwL43LBAQz3yVEPrMcVjTdqjXeKBSK3KSk6vpoQx3",
  "key25": "3s84AcrjMZgSacXWJ1SraqNdjnNvFhLCEpkRnbJDQfLNgay8Adb37PkFkx8rfahbJVCFqB58dxv2MPJJZySi7aro",
  "key26": "5x4bUeUh6ukXAXrihtTDhsQYuwfHN8jhFV9zyyeYwio8hsjYGh15aC24dPdDLewHRr3pYUtf2HozNyBng5bG9JQ4",
  "key27": "34KrCnqU5BbhJBoMsJXtsDD856i8c15HqEjR7HcGf8d3Z1FfB26ZX4ChizA9pTPd2qwrUVagmPyXMPNKVqysUDNp"
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
