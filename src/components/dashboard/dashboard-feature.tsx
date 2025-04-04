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
    "4SrMLKk5zhUUDNqqZmPz2Mrx2x7DU4iQzFcReuh5pGb3pYfHeazCR3gKMCFxxPFHK9oVpw9uvh1Zwaek7z1fyUtq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QTFMczb3nHAJDpRneECYWzcK83fSGMT7QMU391w9D3dJexYEDyiQ8eqwEtMKaMh6RnqQ78uvbM1dyUT4r23kiAt",
  "key1": "4Q8nYvuLD62soCVhvCD9zp9Ceh7RSztzkaMJojDn2iWkKKJDqGVxrxGYXpGSygn4PWYb6cy9BC2zTdukT6eDvR3N",
  "key2": "4XhqhrSQekrd84BQpcEu6Do6d7UVZM2Rw7LpCTkmGcSzDtC2hAErkUHE2T6if3cGAtBgkMxaRUrDFz2vYtPgEGwR",
  "key3": "4rTfPs3HboJUuCx6nie64gPZnBBP2Aboy9t1k6EH1uLpZkBCju1anbBxV5BGbwbyJgq7AwuonKzrsmSAy4GFPPYg",
  "key4": "uQLtbboZ6rF5RcDnVwU81iKEF1ZwvWca6nwrBgBzcYUTnzS5gt7sQjKMSwNJtxJ6ujQTjNqBBHpxiafQ9JZW8HZ",
  "key5": "5RY6xHdABC4gtnkpFso16AhVsRe8AJjy3kmYnxzzUrQZdeAedy9gyheyf7khpgfGzWxJKsGnAwGHghRGQhEVJznv",
  "key6": "2iSp28rtWqCBLp7HBJYCdCMXNnTohoqNKMKUoR37JfgtAk7zdPY5CphAJ4A9CWjbRuaiJThwz5VrwoWQjjSRtSJS",
  "key7": "54ized8zEfT9VK2hLZo2zNqmjNjHjk8HAhkbTLRGpCChPiRRdK8UzUeGdsUm75RmUmVUN33YsEktKoS3yhJRUnnS",
  "key8": "3VacGNNHbwfPT1otHM4aELkEFWyBAnAU2JwZN9eu35uP18jsVAtPjzCcgDLWhFa1hcRtQzc8mso6wUGyHuW8JZEX",
  "key9": "5N1B8Gm11xQeuDXUeowFqaQmaRKFbmuxTGAuie16V5XcXpXkVL5HxqhPud7gJ64k64d6UKW83KHynGQ8ESAfWWYV",
  "key10": "2BV6BPJtGmGvhVcTE875DJAyboXx4JxqnYuTerkNpjoEgC6bayGXyEsyCJzyDF99DHhKQbetRYb7Af2a1qrYP6Jy",
  "key11": "5qpUMiYEkLvZtebmdJJ4WAg7pCCebPkBTPD1gZ29gLuTtrPPi1gRVKTMKGXRFZtcR1sUvpsTAhdpCi28HLC4wzu3",
  "key12": "XRsEvvjnKFDFRjL4iqMqo6Qi668XnmoRorRLVTFufTYGX8CjoNZT5cLNqrNZu2oDnzJbZ8ixhQGtLs5MhrEz37X",
  "key13": "UbJ7boRkmReh14YjzYduCfGTTJamLdj79K3anuzHAxRAJBHNcvh1ogDVBV917fboMxscnWqn8FCyczjAwoFvWSv",
  "key14": "38Mw6xKne1g5YygLYBS4hJxXnKANTfdbGuYeNRyR3ppZUnpLxp1UZXUE1bZAMXnABUVFXNinb8h7rPXqeYb5u3d5",
  "key15": "3tD3fZrXvNTkDe6qSrdhkkasu6bCmHHdqhy9WJnJ8k2oqwKR1qZ2LJaX8aCN3NuN4F3bMRArS4BSugmJ9ESpBAJG",
  "key16": "2AKd9Sh3ApEx5Qa8WroYJwLhzYajji5m5YbY8RNPGcaGT9pz8w3UbFz3zPkgVfQ2gjBuXxztnVkBFfC9hWP85UgL",
  "key17": "4LmYwjqY8pZPx61rDAw9FVkNmThgtnohFrowfMpXZdZ2QspDo8t44zrZCZEwv3mUEB1DCgMQjPWCGLG3R6bXky6a",
  "key18": "4ZaE5WNGVRJAHQR4T3a9Ag9na3ShUT1J6bg8haZccPSF6hatu2PgiJ1CpN1xK7LdAztrdMf8o2JzNq8BD5TcWSsK",
  "key19": "4r2befzwGAQL7PHHQnfTPtCBG2DUbcrGh2xfVjFNQNxxQdqmFWfenbmN8Z2p6QGu2T2nViyqFLceJgkWWFkfx1Fw",
  "key20": "5XdZi1r3RX44TZQt2fYPpzXW9joF6eVdjrcusvmBw7W2ic56AU5JQcNWDfcL3khmK64BgEU3Bdvo1Yzb1uc5VyHj",
  "key21": "5tz66Kcn5TZK4Dr4psVCXiWtPReAFc1sLu1RWpojJDv4K23fWJshkVfg5iE2zYEAz79km3Cx4AmEe2bd4a6neJqr",
  "key22": "4MgpCoor4jfZEEhcZqfA4CCAnVuTz61BtUdpE89PKh2ZQMpTXMRDsDhLuts4vHsuSGgyZH2YKAZyJEd5GJju3evi",
  "key23": "2wmz74bKW8ryo8Ek7a6s4cJkMyjoEhfb1FPs2in5cqt1TYoHJW7zDcVYzMa1SY6GPJsMmmD9uh7T3oDPFpSUtjg",
  "key24": "7UL5d5jidar8Bpk32yFHjyCh7tpHeYUXpAwLR7UdcdHrcgBb3UZgbfJgW6bUwJHQeXmpZumeaAxMAuxHjsqmTSk",
  "key25": "2zi1xe68BbnXrQYYkBSVoKf3LiCvDgnXwNHPwhU7sABv7s8RM4N2APwbGzTaVncJDg1VgTvPWoRYmR3FgJ1YJFqt",
  "key26": "39EP4rTDnGAb39xzCgBkhQN2cp5qZQ3iidR1AaXcTdp87Xy9c8iE4hdrxb7BH7UPcfiATCCtxPb5K6diLqNae4xM",
  "key27": "3KXHFYPBukfryG22WFJh1rmJKe5D6Z5Wtk27gEj2qLkh18yuVYHY1Taon7hF2hBrpcmQUuRhqTfYxokAtQWgFBab",
  "key28": "5exmSsrMWm6cHcNiVYQsLNLy8vrX8HYhDRh5vhAvTTW4ydLsQP7hGnAPT9B4tkGAaLkDhNm1PAirnSyP2YeX4Ns4",
  "key29": "5k1eWA6Z2wBVbrVP8kkwko1UzbUgCe4eSzf7wFZfvGw7yJJA5XX85giwQ7sgaUpe8X9Hj87WjAT3Fj7Xyd4aEojd",
  "key30": "4YkSTeSNNLG8CXn5P3GxAVQWJNhLhB1k883LmHVAvECXzsUV1JrHohTmr4DWAJdmNrCCyzDwSrfhKFBJhZye91GL",
  "key31": "BFEyvnPvxHHUMqHtoVx7wkzA636BA1qPJtSMwBqSmLtqWezZ5rf9me3ctw85eaoMPV8v7dLKmfWdqKKdYn7mZRk",
  "key32": "67Fi4in5RwTTMBKmP4X3UGtqnqBfSvmza4zwc9KkC6bZnJKUbwJSpUMtMDHGfFatM3Dg63XKD6qYpdTTaV5KprR1",
  "key33": "2iVJqme5t8319eXLbXNaXds7HqvXt53ZLZvvuUKh2XUK7L3kD1kA9p8Y9A1gomTZfJKPGyXmLoYErm3U9rn5se7X",
  "key34": "23r52v6EvSLENCStLiWniCer4u1NrMMcJwTYzLUio9Uo1PwuFr25bhQUT6EtbmLfbVNrSom1UrjY9i3o7YA4f5em",
  "key35": "53Sop6oFbLHknDG4zr81jaQpmFwMWDjRugPvKuwX55CL5kuQjZR3KnPYLb2fHtgMux98fL8DcJ7DtTGDDQd4UZ7d",
  "key36": "2oRwU1q6gidw29MaZk4kFBLaCcFU2KUwkZz5s42x6fesoRM2Fp5DDC5bCWsS4XPWXsK2fJ8sWu8LGbTuVkccJiok",
  "key37": "352JaBsHbJHFvZJtszeN7159GahsgLjPLj5SBF23ZAUSMJSHesDbmcqiCWU6ufjfrfLu56zzzndoHfC6JQr4zdf6",
  "key38": "3XvYCdaZf9bFjsKYeZXFVz6uDB1kjczqx7vfu6zCTaRw6HQtmA8JgECUGwcZxL8FkRKWZqC34mpm9a3XgGgqJU6j",
  "key39": "4W1THPuTjUdVNYKA7Ky1PN6NrbKffyiHwkv579t91CMycKQqJ3zCptS5SgUvimZbzrk3UHmhrq1ZipTLmMmfS9h6"
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
