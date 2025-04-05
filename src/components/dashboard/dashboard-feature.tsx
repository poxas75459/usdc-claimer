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
    "3NgPk1Brnaq8CVmE5KQ3vPc3utKyagbk257BRvPs2tagMbuWHTo9SumaCkvF9zSMHauLKQkMwuumMek9GvALgUqY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6Z9pq1iccJdSTRgWsuEDWpM82sXbuTZcjA9e9xawK3p6te8rKki9auc5HwXoNzxJFqCcD7QH3aDNWJpWXsDWxce",
  "key1": "2tcNwHgys1HzYYg5xom2HN39jGymBZ5gqE9AzziEDjs9md2SxJAFYBN8q2GjnC5rkPaqpYQWXJYFkDYEp85iCQK9",
  "key2": "DtYzLZNsXxATL2jJkXKSsDMidkvD5xNA8SikPq7XXMbGX4GLJHrfQhZvtvprYJAcwTDYWwxTkUHGE9k88sVy5Ki",
  "key3": "5cUJX4SZpPfYmgEv5uNngJP2RNrwQv6KmpdW6hVnxboKPc5HZt68YK5qKwMfoHNGjNvLki85EBG1LBxPAaQf9KDX",
  "key4": "33DSYACe7kx2L3WAKdTc6MoMZ8tuQ38LzWbooLWnuxuCAs5PaC5yJX1aLw61xhfYUnuB4vRJCYiUJ1wXe2SdkASc",
  "key5": "47zUA5pHCbFJGQUPp6LwsEr4t6jZ8yuE1EUcCbhTLvw8n7UJD8FiDpTsLdzHZsc7YU3DW4pXfLb6KKVSiT1kfcYg",
  "key6": "28mFLS8jwWeZQexgbjBmVLBozayNCazWoKZMVVZ7Axy8BKEvJsQ2jLh4BXkTEJ7s18j989S4HKdmuT1yksE9Ws2h",
  "key7": "2jYWmoo56YwhrqXwvhZiUhmQECfuZ5vhpzf9w4Q3thAYbWzFRP1mQ2b1sJwzxcgvReFFPx1rWCuiApGVvHHFtA1Z",
  "key8": "mZfbCBheWkw1dfSqH7F6j5WQtzbmV3H2fuKGBb55dAU329svFGT5mvZZ1kjDLKKqbgtyyjMCWqBJ9NZtgFrvoYj",
  "key9": "2AowTsEXaged1KtDzVwHDJvfF4jzv6cmB2PAP1bJjnjR32XBNx7bspkFi1bHKa6j9FdTsxKLA3akTZuh36Uz9bkm",
  "key10": "3SimWWpkZyhvLkrRR3k6P8wRFSXx5bJqE26dwdx8tVZX7WWWoXNsygQ59RQbBXxBcVFf4Vdg3nwV5SzQVzavjUHe",
  "key11": "4BNxFYqTipoKceSqQjT6m61AEXZRYe1syrQABNW3bTkgiTGYrtAQPfGQahnV1ypXNbgYnQ6T6G7W2jJyTdvksaku",
  "key12": "Xnopd8mK2QHKSmVDTbh4PMWqxp8WYtDCVEbTFQiHHbUGWdwQaaK5aRxgEVcBKAPf8hVLHDBFiskteDpsuMKZtqH",
  "key13": "52D9FrmFRcGPbVoqZ9eejCpZp2zmq1Rmkmwrp3A3SeFcFscGy3wBxRXWtizsGuMeqCkDKVkR5KxGAjKXNTFyDjZ1",
  "key14": "R8mggkF4RzQj3pEbuVoow1HwuepH8bByivBai8fhUmZxY47fe9P1HsA1qUiJL1ca4NMfQokfYC9a9HUT4R8wsdR",
  "key15": "3pgmqkHLbWt4SZ4vAjFc7UV1M51h7rtWD5dpd3pLdgRFqtbUe4DqKc54Dvgu5zjxHUkamwtKF5GcVsR6WpcBTjYT",
  "key16": "2sDk7hMfjNxjcb3oNvQ3BsJv85HxrUT9ndLg9Bzx642pzLSQpCZxVkm58w4KxE1zn6ZjXb3BAjnzHFnwFDxNRQ5o",
  "key17": "xXuwT5r6yVb39ZLHgf36Nn4H2CRZReMN3b4QZHa1PBSrLvoLdHALxwXc3DMtpPKD1oKsidJFjtSLF1HS4pprZgu",
  "key18": "391T6JFwxPMak7psN3XYHkCRW9Typb4akr14ny5otPzzA9mXZSN2xDHpwDe9Co4CuXsqiA6BfCPq3hpm1KBCrcSD",
  "key19": "5U3UWe6RSE1bWiByjAaZdaTs4TLU2xtLcdLfUhHA9RG5f6dyCEQyUhkHKb2zh3m4XFjx4Yz45dvdc3tcQJ6HrymT",
  "key20": "aTEVtz3QLbMkqSj5pYjfAszwFqf7zNXr9u8Ec6JRXVSHPNw6WzkxJT2qGqu7LYr26NjKdyUru23qZhi3turZgPy",
  "key21": "63zNYiEQuiT9VNQkKNUKA1JqAN8c3xXSnyb229HevhC9QownkxJLLht6YLhcBxHRUY5YJPvWMHa5ekbcx5zP6Zoq",
  "key22": "58ADGujL5zMosjAXy2ydwBQwkj1uiaxYXn66EmjrrVhEYVrJQdt6oBkE5hGuWPMJMEbNRrvb6eohCn5JhFxcwu78",
  "key23": "5PJbeTGj4wEvx31WqzX53ZJvQAwW28eYocrpNRzpmZqC9qZDwEdXVDwo6aqQoCaFdX9VRpTrpYSmTrWyjhxiwzEc",
  "key24": "2DvwnRZMgZbMSifkx6N3Bcik4BwPvMhSHTuraUDZrzgDnwZHqeYfSojwfbZSi3AWtxGvh9j5yyyNUkcgqcgUCcTF",
  "key25": "5qKAEATNmvs75DeVT4AUqesW3YkBwRjwGfYZLqCP8EqBzUmi6f8V1JbWkFP8GL5uA3U89o5nvE7QCjUPTadRAafe",
  "key26": "1CvCM3mtudPj7uq93yE88WmASvq5x9kkNQ2gUgCpRukZoPmwWivSshaDD97jhUi4gynSDCUJJNYacfc95AsKqvU",
  "key27": "3chUmWjPXfN2AJn3xAqPCAaaTyaTc2octhncNhJRB3rnV1pzAsZKXcjrcEiVLm8vw1bt59B2omVyHaRj8DHyqHAv",
  "key28": "5GXbjtXNHeKYYTWmJeYCjnKDbuUjvndd3ZorQTKM3dxS7zL8a9ru7nDk8H8iRftzkwZoHqGZYVuj5S9okL6xSrak",
  "key29": "2TzzcMaBKCW65LYGPZ91oDTzT1Zwj14NFVrHVDJ7EqqbMFvqorRHtW7MD2pDBV8suRPpaPJN2pA7kpGxAqjXYHft",
  "key30": "2WD8jKT3HjZBWUanVzjPuz9htfLef4yFFJZZZRuYYncx6DogiqoWTQLRu8wSdvt7W6Bht7E5ThkrtXRdWiruvAcY",
  "key31": "2iEmDGYE1JUqkPPg1NPh6Ksqu7aqRzTdp417SDfGByHms3kfEzXTTw2gSix8Q1BnrMhiT85bpH33uKc7CBoTyjnz",
  "key32": "61tuvkKgpTE1XVtNYd8mtaVNNaiFneURajdJHD1e8uqfaXJdD6d5ZFC8LgAbPJhqbsHcqC3Ta6tjSKhhXd4fBJ6x",
  "key33": "3ke5NkYaEN9y7SNATEXsnnXziwa4jhS2qJP4a8Zao1xmQ81xKVDBr3uBJ7xyiCPt89BBGnoXgTapgwYpefxv127F",
  "key34": "3nfAEoJY16uSXYmx7kvNG71PVvrf6P9Zj9AzyQhoJjAiqNLK7sJjSoqHRN15rCVqketcaLSBXJEFJJapRN6ybyac",
  "key35": "4SkG21kwSXHS8zadsYquS7Ue8WZkgjAiq3j6beAQtYK3zmvhMiuoq2SjzS2DV28JSKhyPg1ouCovMAStrv8NiqXp",
  "key36": "3LqPLsYt8xdkRDword5mhZSzTRui7XcTmqZtaLUkTp76kGUsajwGEmCHGpKEseeLzMRwgXPfwbATqietTsG2qf1e",
  "key37": "5t2XpSXseUbnBiLtJ6yLZSMLHEVrDR3UNcfkn7gyJSp21FmpyDfDYubfduimrnwNFtehguXby5Wvs8aMtPVHDwYL",
  "key38": "5w9H7YyFY7ieLjEJWeDr3VqgXM5J2PBPfrhZQQ91M5wpcAy69NuZDGui1G5idEaqisKJPi49Q1c3oQY6vuoVAzPk",
  "key39": "2TR8A8nEg98fx7HzaL6QaQZeZkjkLFiaP7Eo8hgugvb9yVrBQWwegQbMsz9QBHZt4Jx7hYrZsVCu6UFP5nexKPfQ",
  "key40": "51Awq1aGbC99Q5qmpAY6xUJ2WzvzPWLjyPtSJBkB3uwqcG59SHamG76Arj8FS1RcnCCkf47swZdkq5gbHwmzVtND"
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
