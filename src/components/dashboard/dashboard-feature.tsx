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
    "3zd7yLWkifFFZFk8sSHbiBz2UUB9QeULSe11ouoPGHvHF49xa4xQng3gKPayvktViQ21C4aVM2iJgyfCLfguRv1c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36nfi5BAJqP3Cyy2FdpuUCxTeb2Npnx5A6YuUh4FXDomxPFkXBT9jp7n9uM1NVkdyBTgLkqiEqqgt87He3TkNtKf",
  "key1": "LCzcdHbxerxSsrW9S6XbQVzD2YTSgm8kFMt4CK4AtKxhWCRQkZha7zFLsbrDzZABFBVv5VHFYTLASoBBL2tAEQ6",
  "key2": "4GkFw4qBrSXihYgyqzSQowYLxgUBhs8TQMphZLokYVwrEeBHsRX147BgKphJFf6dgensG4uRUTLQyzKHqjtyToMb",
  "key3": "2kK48BoLwJ3XRkTBJHvJR7hjEGDEbJg72j6eqX6yCBTMjTV3A2bQpM8uVRgf2sW9nWMs5yycBzxLv6JRzpMWc3qy",
  "key4": "2xohgT38sGSL92tryEH5DmDzrDM1wyZjJLA7H4oFpi3JGzN7YDUxbo1UCsKCyhZxi9NsZpuZUU6Yo5TVZQDQ6tsA",
  "key5": "a7q8YCcD4ribse7akpjPut2JQa7VEtKDZnN7sJfnFejM42drUR65kyH3oyhhpvQnKXE6U9vzZmuG3rdt8kmg7CY",
  "key6": "299nLfQ9j5F9rHg6dPGDGcwnawao4tcKAhPrGywpDSyJK7hh4S9T6riuFBt7A299LvyGgxP6Wh3SgfwaTVpe1oNG",
  "key7": "48uxcsZ62MgKXaZfg3h2wbzgKTZ64tbXeBFMdjVTFeCyai488ERz9knGPFh2dKeJp3axyoSV413MeW4vSFoNY22S",
  "key8": "5tpSw3yjUvXVoGcp22w9QQZqbDWcAchtiL2cfv6pPrG7pTbhnuDW54hcZ6WLE7yqDi3RQkRHe1wJ1mxe7ewgYFP4",
  "key9": "22ZzpsRARoiJczmfAoqRAQBevccK4nBXrN1DFiWNdguw189ZTocNcQdas4Swchq9bhwFaTeCV3SiZLJQNW8MRzq9",
  "key10": "48xeSHfaqFrwqPsUYJDSvQUph4rzAjjFcqUKUEQhMYAbwMf262QkZxppPnjMaeNJ5rg4bkjjHUYWyfqqkRmjFCtG",
  "key11": "45ggyMkQzfJZkMVTQdYGUje62HMA7avMuNgyH9oCzjFULLPQcrdy2XBDmFEQyc8884rBdZdvQ9ZjbAvqacgz2mzv",
  "key12": "5Mibwq4KCJiyaV76zVEredtynvRZW4dB3Uzob6eyXPHQYFvHCnPLH5WCviotXUKsBfK4FnJ39aqKCqVAf7pjmJup",
  "key13": "AAoWBekNQPrJPGWignLBJysNK5uLPg7sPp7Qitp6wWZfNupeZVpPHTynxrbeKnJ8JTSqvRkuYhGubXdDmPZdpAe",
  "key14": "Q5bmpxdW6FKzwo1Y82tWogCUhUE3jEpQe5QMQt6kAEHQXCrttN4XHtn4YPoEuGZbfQcznkd8a4HiAKf9qf1tq6x",
  "key15": "4SM8HeMkrtifEUQYnC65JBujPj9xqjWPajPHbkshkNQF8VFWAq6rYDXdQMvR13nyYUwDVm6zQPDxaMWvW28mtS5z",
  "key16": "3dgPAv153yATrH3JiPSd1RwbpmJxH3REf2mdj7JzJLASkk9m65SHzK3qegEdWxrNQizmJY1wuZQwEh1NNMVppkht",
  "key17": "3ks4UK3Buga8UeTLoooVyeHip3jxqhzHoBcFpU97xg5g9qdYJ6HSbjVKomTHCfBJD5cNKDxtThbLGapjon8oKsJP",
  "key18": "372rS72MGhuvdMZUNxjCY2bQxYTR7cMZeWK6TgjNAcamMqFg6RvMzqgmo2QtiUTyxEbsfVuwmSRxqWcwLhtLHtT7",
  "key19": "5hESxwuw13MrEPFiKo8xifzqivFJqL5wfz6vqwN5vATCMo1REpd8mHTs6QaRnCp6nSevAJpD2jWcikW39QGYMozZ",
  "key20": "2XPcqiX7N2XQNtqJdazPk7KwXuwLrQtKNga8RbKifD7RkujmUDCjQEUHxetwPXe4JVVKPr2eST1qvvbfSzHvs3ry",
  "key21": "4UXCQyKMibfUjk1tHivvaH8YbZuNX93TTfTxWsY8Ne7H5MZBP8z9VCYifrcnsjMy1PmYcqCAZuVe8EMYM3ZuYErJ",
  "key22": "5FoehBQkPGCvPouFqDBwSQoyoKuH1NURbMHGWinfhPBhe9YWQNFzveBwX3z4vLUAodatLN1fc1JxgwSrEnhM4RtK",
  "key23": "3nncCmvzMdeaRyEsS8agZ4zjw7ixb8Hp2zdwnt3yZ2dVqjV8kqAbHcuUYZ5HHBDvjecfMfUhTpiF7GN83PTdVqEy",
  "key24": "5Hf54KYvLMF39GSWLE1rQWEsE5g7AgKeLZrNxkXYyNE8Zu9m2rtqxK1t75nq3K4FfZ5UkwiaKpFUEnZoREq1PxM4",
  "key25": "5JXqKg3PhVA3eozZpsr3AbYhQDzAFSd1mVyhdQwQhp3SuZNci3vRh28FMGamQtauvFprHcoFNnMuRrgn7N9EiVb5",
  "key26": "3y4u2yr2PTJRCucM6SJQdT3RvaQNLt8R2rtDtYMQ489gmNbL9G62LM3wemigamxASNk3rQ7GjRJiZ461q4um1VNn",
  "key27": "3zFyjZr87tLNQbz67ceeFL39tvMYqQ4GB4X3hC2bTTLEEG4axobQzuFX1C2avB6dsaLhSVdBfUeydeBuoDNMinZd",
  "key28": "3EFQvjAPCHFsjZ7QH7D8Ts3FamaC3jkp8g99ZXpuMTFGukcKB6xTJgEVPdWc7ZUNev4r6AXbbD7Wvo3LjtUxpsFX",
  "key29": "39i9CuGe4crN1FkX9dY9zycRot2LRVpi95h2yKa5avt7jbMkyydj454hiuothKepqbqG8gWrYGuLr6wVDx8HSHV9",
  "key30": "4SRUcA9ttpTnboEYf9N2ma3pmDFtTUij7Uv36Rr9sG54gCpSB3eD6Mp5AxsWrgwbGNzsiMJxRWR8zEtFHEpgWn8o",
  "key31": "3nwWVqM5zJVTxDBRxTWHx53WzLdeVnrHBhaN87v7nrP7YxppAppuwicor3uFR85BNTFehAQRUv9toC1BAQL7ifBd",
  "key32": "3FjFDXVg8f9WoPctY7QiEzGxAFBPzmRc7Xv2F2MV8dKSN4VHCJz72FoDeBPSt2iC5fBzoogTPYpm5ShwMChq9rit",
  "key33": "yBC7f9YeaNTUgtRySoy9BwW6ix79zjpRVA3rCw2XUmJYVYD3av6CbjVdozcGbHzknVwC2TADnhcJLWRT7PDHdnx"
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
