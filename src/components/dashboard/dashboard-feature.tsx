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
    "5ifzXyKCiMxBea4zqgY3CFwnErKBaMeGRRoWQTawx88kqpMMQL2peWtjz39UzH2o13rEBjCqQY1DnNDmRCJ7Xz9r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NH8uzdqW7weWjn1F656QhfKhJPvRLnxE1eSaNa9CFANoBQEEYqc4GLUo4DNHmTTxgTiTzNuFM8Rt1BuFgWjXcmY",
  "key1": "2eyfWYayhCVdkFjNw1DjGnHfWLWQvvwahcf4hNsBq1HjPv4vGJP5EGiF9NcL72D6bYVD2r6VpwmkWFLFnRgnzq8e",
  "key2": "3LxqB8h4DHPDNvaNbdfeZrpGm5NJANjMhEwwPZuW4bLUxmMVz9nggz5WWbYnm6qYCens9rT38w4Ug7TtfGJCYcRD",
  "key3": "2MyPcKiDjs6YeeGpk8VrgzBnvwPezmhUyTeKUmqmqLZyfL6NACBcxMg7a4h6GVyPpNqJhu2dksVpjyQbjdiX7TNX",
  "key4": "4CfT5yWdskK7ntkhQiEiNqoHERByu7Tj5CHdMgq8HNmNhKHPHqruimYQph7V2GEP2PRGtU6VNjiVnYM9RYEZMSey",
  "key5": "32dWrK8CVdtcUtpoDF5j7BwzjrRUcBmEv2tULvja1tQnMq8W6XADzjkgWZXvd7yhc9uzpJ7cjXbXe7A1gisxPMCE",
  "key6": "3jYu6fd47o1PiCJeaFHjZHV1EDCSRdcyMqyCYP5frUZz5W37qyvadc4r7y1AbKZBtT31WJYMnTpuGJtUmecpr9uZ",
  "key7": "4buKbae42YxRmi4iR3c2R8WF6i3KreTdz6S2brxkkvzc1K1QXjDfwgHLaqW2KkcckLEoCMWY2Ft9JiC2Npv172LH",
  "key8": "4SRwj7HXg8nWk1QxGjKvTf9Si13pLoNnHfEPo12zyov3wku3MZBAjur21phVViqXoxQhLzxi5KSKncxFTjUL8RTs",
  "key9": "YbPWrzP3Js66NchoRmyNmcTELqMKCj2W7e8LcZyrV9DjmLdyWp3CUt8Z7deaAKVGDT6FoTVSCU6pV442SrQYcyy",
  "key10": "zvbJzT8jY34gwoPnmEtDstH9EUfkHgcUAqWDCE4QmzcGje94Nqg5ZUTbDzrn9ibjmpFgjYJdKzM4RyBK41Ha3WN",
  "key11": "5wyasRKQb3Hcsa6pcUHXH3D965twD3YkhE8xbgvG7CN2QVEhUGYimf4kxvngUN8rgo2nNjm9vTZgE6ihph7gS9XP",
  "key12": "4LfsDCA5RF4BK8KYibZakxkJsuJYgyHFq3CeVcipNfLAhEjUAdF29aWFkpUBBCQD5WXB5GJDNC8CUs1vink7qPsT",
  "key13": "Wxah7KbZZeNcoEEAoRvUaZqbB2yrJ6sBz49VmneEinF3z6khxRA5ZKne6DUNdLgwvUqD446PrWxiQFPSJLwVpcs",
  "key14": "25gCAdMZVigJhdLPBEozBWRN1bhNC8WhufWPR6WMGaaE2BDmUY4CfPn2ttuXmyb9K7em8WBkLcNTttf9ryn4YidA",
  "key15": "4T1Ma4fiuuqggB6EZv9yWJxoiAwRsDjDttLWnTosTXvtbz3xPKM9Wc17y65dFLLcB4da3DjbMFpuYmfKZyr24Cqy",
  "key16": "dU2gU42Hgw4enBjx8LD1otXy1dJtcLNPSZYXELc6BnJp282A1AQVBPcq5JLdRK4yvZoJjsmQUymtTLh6gWAEA2j",
  "key17": "44iY72DethZYmiuW7H5LEMZg8f1tGFaddKkzJRNdTCowPb4XG4UqB4DZRSfy8BRuSQ3N7dhVDhSW7K45xCPXxvS3",
  "key18": "3vYQEvb2cwQoQPJoUoPZBYfUR8aRgJeNUNn24TADo6hbvR6vKNBA7AvM5UADgn7Ang78hTtw1cKddp9wzQgqRk3k",
  "key19": "36VyN1LTQm5mvXJEsJYcuUi8wQwM4CyHDBSQEHoHaiVeXn2Fr9UQi9NLY7JZzkUgZX2a8Q4wi63rUQnkbPWpm9Ca",
  "key20": "26vFdKi9ifERVD3wzM6p1brQyauZyuV37jawZpqNP3mwBtQXSC63iWoD8d54P9g3jJXJyW7gBZuNxoH8SueXjrTM",
  "key21": "5u5FYFEZLX9Uj7E7MQT94ynX8UKfFZeHbZU62DsBTgZRaxXsKN7jZkaFL7JBrCNSmi9JT7LkrbNFksNEjcnMwzRk",
  "key22": "5DvgDYeYTm5z5W3W8LksKDnVj377CxYYFXdUhfG8eAk8d64HFYA1r6j6QMS98gdoGagVAdRaLuwRudnGphnDt5bb",
  "key23": "AuAuTY5vdY67ee7d2Rqe6fAREKafaGUTvhKnWjnsBk91cHsz3vqaasNMnJa5j14Eyrunhd1YWzSRjVJNYwGjAEC",
  "key24": "4sgiMogwugA1LCmXGEkA9RQws2xD8s2zye69hWDF1ycetsajR5Fx7pdJGp891WiaKoRM5DSFUuJVVz2uBimuqNot",
  "key25": "2he3rTywWMAzzRHHjgjjRLukEsdkJSXmtJX9TbMbW5gr2kuxY5Y1UtYwBkbVmPpvUb5kbQuEoGEKBrRsUP8trk6q",
  "key26": "5U4soY4Lo4hpS31rn6FHdTg7HHyLaSjwKg1GnSCLzbzyvFEu5GyUHcYDfjJwBQDmjsppoLrwRJjzTDJbCfdHrjNo",
  "key27": "5nnDLzjQZ6UYmejqLMCyJXNTGfYQ93u85KK27wEH4hn4yBfy6MNidUrPRbyCTY6Y5dwcjzddUxgwVXAmFG1JZFPT",
  "key28": "66ZfnFVkK4JYmxepgyHw8rt7idfcogk3Y3nfK2gAwERQhve95r4fQ1e647BoqyUsU1pCehRn9assMRvvJpwuYoXZ",
  "key29": "3maqA2f5ikYa2LDHxfuZPzDfyLEN7ywEEtgggZNpRnF6sAvPBAfsMC6CYVhg5kDtA5r6AHA1tswR7vsso3zZuKNe"
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
