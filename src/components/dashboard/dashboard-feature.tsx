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
    "3L1N4k6Tme4ma7UfkRH6wXnnjfgGFxEimY5eRdT9eQP74HeauB4gFJUnU6jE33jBktU6dFArSk4n8iAbVQ4RvbXz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TzZ5BaUZM8G6dpyXMCwbXVvcNNnDfpg36GoWx6hv96vSMSwAzPZYQ2UBmeRyAkkdschk6cEr3wQAadbRj3zxvR",
  "key1": "4qYj2qeLo1Wb23X64sxXNm9ePbC45eHb9L34RCoXPsnnBapqSJctx6uGJpGTmBdPFWU6DGABLuLyFKUdKyK8u7JH",
  "key2": "5r6JuHQuvJ8J4X48VFsAwyUJRVYoMEp2dgwb2jq2jgapafxqNNKHvFW6oCFZzP3Nh4btcumWmu5FdMcReG45bcjr",
  "key3": "5smsVNwr3MuxF3tUPG17M9xCW1R2ubBKWUtZDCKjr7NWwTRbFsErvj351szEfohafJZ3nkVKEzmzphyqJmCYYpvn",
  "key4": "3f5QiYyWQvUaSYrdZtSEaZYB5fXnuhQz41WzHut2ZvvnMSRN6EzFNmkjaFyp1DuJ9EnekAEKVHcBTmo38DxU5BMZ",
  "key5": "31iE4kqkyH3R2LkmpDB5WnJv4eiyxAWpHEUwLeFE4GL7Uf1ECf2KD5Q8Mmi2xGW3E28oNVqN7RwaSBuzSVydbez9",
  "key6": "2wF2GPNj5v7RjCkony4qsJgp2LXX4xbxHgEv7e6wqauc128bfzN4ebmVAXWLengEevVME7WNr1G8v5h29Y7QW3st",
  "key7": "294ZCS6gmQTn2zgJ6DVH8TvAwzHF6jG2JDGWBLMYYrJstMXtEX96mHp5T2Eg1NTgVdR5oA6jfkoaNEz43z8GyBKX",
  "key8": "3HQqR2P5QFPLhLjLPgvRGtbRA5s6auFpTN7zLkdoWpydhfqmCEdT3MTBgQ4xVewFGZC9xUmhfXDKoYmHHoydFZeY",
  "key9": "2NHYHPPNw4rR9CCiuVFNMv12mw92MxTBoDXiuKNn9VpTBzMaFukPoynSj17c7vbyGcSSp6Yw6QHvuu9nuHL6Uzey",
  "key10": "tGKLCUMd7nxoq5Y28HBJknS3AKSGW6SstCKnaoyupDWVTyxjfghcWBoJvCM6B3jufgH15FFCUWuVmwfRhFHTxgB",
  "key11": "5eUBGynzQ79hT1ssXk5DppzFbZVUBiWExXiPbLRpAsiq1btmcRJjCSgCLUNFqhbgErto35CRjKDWEfgPP1PbVmkJ",
  "key12": "2Zj4ejH7WfchY5XVgoDG4mbkA2UzsCVYddCDQ3rVJN8vnWxAPYNaKU5C2HyGFbhMetXCpgaW9GwHjXsrkXzJYJAx",
  "key13": "3Lo6UGyQZ5fUH7MGVxgjnRk5dtxN7Zp7FhDPehqiaZTCaJQrFkvkxBUkw46YEMTHgsN88LDweLg3WKTbprzeBFgR",
  "key14": "G2yQ75mVisv8wtoyaoYeJtGGbmEf6A5RzNBqHo5To9F3GiHRgud9TeHzNwVwmc5pb12MyadtWbzTwZw7ffcEu2g",
  "key15": "4tTpGp7cyHAbs9Cy43yDVQuhrC5dCD5nJ8x9quFQ8qwDvNAsQ2JRaYRMGPF2p4YpqQ9eVAHfyUzWcWEcqY7bsYjF",
  "key16": "3Cgu3iRYCZwv5QWQDJqAy77G7t7kBFny4gkLvu9nLZSoXyc5JiAbezSbs4PvMVSHzxsF8u7AyXdUfxnrirDJ4vau",
  "key17": "sPEDauxDzt3Pu8t3sthL1dQzstGAuE2SSbQV9QDimMw9mn7kf7qUYbi8yGvqu8RMd3VoCWeMcznDzosmWrkSRN8",
  "key18": "52hpryb1X9NdagAGtR4oN7ezyLPiVd2d7QDJfay53EnNX14mvZLiB8ghq3aeKkvzakGbeFYoG2EwvvcfaWF1vNiJ",
  "key19": "5WCW4int8TTfYDL4uqVjxQhebAVV8KL4pXPjqzLEeA5kRnroJzmiGNqTv4HEEGM4vh825YCuFMu4rGyZ6wdmsduk",
  "key20": "2B91w4pdSYzaBYuH3iwtbru1KBi4cUs4PK5YXrtSySmaX2pXMXMo3wwqDjZbDbHpUxuzt4dQ7SSAD6ffTgTj8eho",
  "key21": "m4jSJH7WeQZKEjGw9VUrTC8w8ZrLjXXP7qqHHYkMUzkvZpr1cw8YnicPwyZe8bCi4zQPizNccaGpL8A3SrEJuod",
  "key22": "3MBCPAAHPdubqUqr2P78Uqtb9j5Vv7TuTgzFBsx5TCZrx7d576ZfkwTAzsQFUYvbXXrMpB9a5bDAfYfwttdSPW6i",
  "key23": "3hCz2HAmqtc2qhWihRbC5ctCEEgBpNMkCf9PHPviiDUKr7ssrP4eSBoYoCm3dwejVLAHPXVYARKk4LoWZZHk3LR1",
  "key24": "5Q9beNF6ZYeqhnc6p5ttPVLQ7DyPYTLTdd8AX1CHPNm4hLLCLf4rTNswHUCKpNZxtHmKzPAEDGrfd15DCVJWSTzm",
  "key25": "4DuBU85kyyfg3qDZxTbSyi1t9JL47cSrPAp18m8yidUwVtu7xC1LTRuQnXAotb7VfTRdybUeSzyko9sprTZL3ry3",
  "key26": "2avtMKuvAUYFBL8esrqtJfxV19CZjVK5VECVXLTDD48M78sWkwvsfZQpcphsFXW6dPLj5Hrb5nQoTheN7iq85aXF",
  "key27": "5ta9E3xQWG3x6sTtUo2cf3FxPvp4QZefD9V8FPy5aoFA8Z2c9M3rYFoFckTgjtRbT5t1f6QVL6f2TQYPaZYpeimR",
  "key28": "2mh2LRUQVR5rK9U2chmqsedwrvPWEhzQwXqvuQj1UpmkstsktQFzRYJ18592nNkutCugRtzsm3vTo4J5xEewY8Qz",
  "key29": "5GmRB2LuKtJxQdrq3Du9WT6iTrbeTLm7c8oirV1zJBiHGkcVjEWKntzKk22MZecy9dL1uNXfHmAZaYAaqf5SgqPW",
  "key30": "4br5cye2SYhiucFD3ssyDyAv73cB6xih3nBh39XP8hVs3mwLX7Tn3Jo2BUaAiiXTYT47f9BWkJykGg7Vgsr8WSvo",
  "key31": "25pwaXgj6vSGfqh3Mkz38bYWKVXJw2xsrWr8p2FkzfB4ByrppckdoQ4Utg8MY2wRhWBDEqvLmN12W4NSkiMxF363",
  "key32": "5q3MpG9FJgHrupAduxuAvPXsHibdpf4xz5Pok2prwuS7Vq9kwWZexY2sHwPqbSAxEpDe2t4NPvb3e7jqLuwHboxo",
  "key33": "d72DohosWZWnXrHppM3JC3Nies8EWKPyrZAH6BjCe5mW6UHxMvL6KMcW42hJD2gEd5hToUSnzG1g1LR1qPn4FbA",
  "key34": "3UK1z3udrhYSs4wN4SRqmLnEVDdbzWtFJhpzFhSQPbKTX9V9GADzm2wGPw3SgdMUiAmii3UGxwq6m6fm6LRj4dJB",
  "key35": "WJBWWiXMij3zYdsDse8XExK7iq6cUESQzjEPvTuFLEjgtnFPiVsgvufBiENHHiChwwCChZihQdZqMMowKYp9jzB",
  "key36": "4HvmGNPi6zAMvGVSPLK3p8Un28izbc46RJi9sWZwRkVnfDREbcZgMA8QAPhL857P7irKsemJZyNXRv4ZTpMioJrU",
  "key37": "2Qm5wj1Q2gkbrAxXu5V72j4AjJNsKi9mQrjWRJSrikF6jFHoDbvQgJubkrv76uEYJQiHX1mUsC6sS7Q6MaK3gVCt",
  "key38": "57ixHkgBD4CVtcyWp2o4nyDgm4g4VXKZgHFANcvj3bo7qAWwtxHkbiXEau8RKrT4wJTAkjNg6QKY47xJaTQ3d8Xy",
  "key39": "31ofpknxxLY81gvm4A8HpmfWNgaTLYz551woNpVUEMmEq8HamagpujA1eyiQe1gSkD2EMyywT3KcjQyDPe5YE1wp",
  "key40": "3kYCD5qCXuNHZRDj2UrU4BHn6HT7tuKvZHhXcV38v5FTfRLa5Ubeg1FAfa6JDUTuaaAuB4tkeVqZWLLugTScf476"
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
