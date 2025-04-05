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
    "2WhibXaENPVgngfCJKvYDhfAQC7aVjyabBmYN4uV3wh9pVkBNsVyLY4Z7FVvULje5zyMf6qhEchournh3peNuas5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RXbazGWgCJAtmfpvjSXHDN68PrGcyFNAHyYsh1YmyH1kkmf3R98xVEBWzoZbdstqAoKJuLMSTqZnHp3cCfHYSiE",
  "key1": "237kgnTbsziAuSovtVeTzizkEWjHj5RXmgmazXpVemhdmAKyhezifuZrPSUbpJ9LEbygrobZQZ2uLroc7HVWeo2u",
  "key2": "pDCuCVXSLzskwjE3JguRbo1kz4GvmhC24ZVz8EYxQEddZG3PZkyY3NdTbMbgTpPdbx9Y5Wso7r3WbjKXHahtoFH",
  "key3": "4AkEm6agpcULAQWBoEnCx35mf4aXmW5DQdViGmw3u2mZsgoFaJET5kbDioBfvprZnn1p2D3ax4nZ1fMo8oU8EJBC",
  "key4": "32mmtF4NwThk96Rd4V7Xn8YvkUF1xp2nFTimAXsAb22u3EDHqbpG99pPgW1if9PZjVNqUKz324tJwRnC9UeRN6EJ",
  "key5": "okQEhZ32dH6ojmkCg3JQqNSw9bJRqTs2uw7qmpo1Tv1p7awXdR2KaFK9cpaogRraT2v1u4SHLfJesd8wE84cdsF",
  "key6": "48h5yrPobYph4oiEdeqZPTUKxhe2RUhvb8fndnPH5E1z9f1yxXjiHsf5cCZ6C96gYgMTQ9XaQBZGJtoC8qy3axuT",
  "key7": "c8iVRc18A8k9VMvFAbVpRUPvBttCy9p3CNTLb3KWfeGSs6GQQrM8Mj82jL31mX4Kc3N4eLrQCxCrvoJWTQsUw37",
  "key8": "4B5b4m12BbHXDfXgPb9n5bL3oqyMfz13QBCSFEXnSgpQ6ZFqXyD1E4LersrqnKWZPRhJpVe6r9rWEGiB5EgnUGaF",
  "key9": "4bhwp96hkPNuJEA1mXGM8bRjyu41f5ZEC6CLCXzaQUvU5EggjPJhZKNNfS4pAojsxgUK4QAXrWmjJeEkbwn3LBxr",
  "key10": "5DHjbrLvNLZAgNW9xYHHnbhePjFc6hK6PxBH89oHW5rnhBVyjrrqVZSbyYt7FruSqbpyQftZFU8htoph6ZVqQaMc",
  "key11": "3p51iZdJeYuA6XTQj9zReshdaXPSAb1FN372ADZo85qcHe1sYgQR1ntoTb3FXGuRmuBBmNtVxTugpfTw1erybcaH",
  "key12": "3qMS4rLDdx3qCDgH6zRPmJhDN24rWK3W2Jnrc5AMNbJQyRfmjaRgeBxoh7fzYXaKRdPrNF1iXsQ1vwo7yYhLUdoZ",
  "key13": "4mbNLQxCmHwyXEUk8Mo542SvBFWWtP8D2WK6fduhTfkc6VpFjx2yrhBy5ifxp7JT71yFxj7SMWpsvv4G9neoNh94",
  "key14": "5J29hCDCEAD47gyG292CdccaBF49ELwysNDZBeGYXaUwR8FHSULpRqAoo6JxPyTjuuUJfPLQqaxC1waCySrjRxLz",
  "key15": "4V9iDvnNnj1gN6GfWkGiXPDtvHf5BqxeMyou67cSSCkDcSi5s8WEt9EcvoFkw4cW8M64tjKLTdmQEMsTYB14JWCZ",
  "key16": "5EFWnJUy94Q3GEtmVNUnNPzi57MPYmQ8nsQVowJp1T5SaDgLWZRNnfX8BtQnL8uJdd864VxykGYnJVJA3hSw4ip6",
  "key17": "nQXP3sir12GprgjQAC2btF4pNQzVDGMkDCsXZSwYGsYVEppfaie8c4Xknk4Tn9D8bnQSfYUJKKPq22jEX4Ashis",
  "key18": "4cAgwcEAuVWfFdSxz2vpL2wUuNafELtyUcctwRK5ZLecsovrkSaS4qLEuLXtVL8QuTeuaYu8a6Lf4cbGECifurKK",
  "key19": "2m3VgExqciuHjcmD5MNaL6Xua8aa9LSozuUhphDdcGNM7ZikVpnrhuZKNkuvbu1zXmNGbu6fpwkUT1V76x9U5LMX",
  "key20": "2URXWFrFuQKgTSzsZwJN5UgkRF8PpRho8p9jaBD8vs71PPaJ684ycHhSQCeV1MWUWbZzfXDVgNWr5wnrX12mNxM",
  "key21": "3PKoSVvi2wAAqXmqs9EWr71c5GHzM7BEfPYU8GiDVh7ZjpZ1puaP2xrf4JMHZpmyJcWEu9f34em7oPuDRYDrQmi1",
  "key22": "a888UupFhMFNux5oAXhcFvYMimbiU5KTx2MU1okGuq3fQjtYKXt5WFVuqPR3jKoVZxH4YkR46MiQsirdmiMEVGF",
  "key23": "GJpU5qQ3Arrvshc5CdL6vat12qnaNo7yXBRr2pe4psxiHsMUeYn8wMTZEj8qxtBP8beKB1WePHKMMGrMRaGo43t",
  "key24": "3Tz9NYe7tUsThDkqcjJnXmQncB4fXP9dKFJ2rfithhVnDK9etRwqX22wYweKazVDyyKTFhrqmebdm7Jpq7pVYfRu",
  "key25": "4svQkKYV4wp4kT8fKNUSEuKHDQoKH8RQXv863N4uANa11YqKjwVfdiXNHPW6sQ2sM8o8XME4yGmAjFWTpXNJXqB4",
  "key26": "5CPduFsMmrDdBZMSHHrWpqUe9Buc5PKSictNALAgonGnr49gkQD7zK2Yfu73dGMDMK4Qm5YVWKZ2pd3c6Ks7pA2E",
  "key27": "35k5zyAPd2NnTiUAAWaAYNFCSk4sw4BTnqimBvC7hKs7nuMf2VqvP2A7dwCCUtZ8kLkoZtUq5Jhne2gUcvWYkQg1",
  "key28": "5RhApZsx4nS8UBYgYPrfQHKEHrg38LgWzNZEVWTMtNq45NW4BGY5iQXp7hbuQQSvDLSz8XccGYb2ULMbt7Sgvmh2",
  "key29": "5xCNFAxZ3HH3ADcVqQg7sA32jQeTezaRQQGkuYNfQMvui6EpcxzQSsce9NZuHJRDpQBQTiBZbn4PmGvn5XapNiJr",
  "key30": "3KR6niRmz1V5NK8b6hWcQr71cbKb3QoU7o1zquL9Hm8ZhcFJWVJh9BiZQDtYLkMmryJ1o68bDejbZU7KoR6kc76h",
  "key31": "4D6FhAJg3Wuj5toLUWvVyBbSjpUSn9Su3wo8hWWnJSLpXkDLDdFJq3CywbAhRim4SpQzzynj4Vr2V81oVrsJC2VD",
  "key32": "2N2TCUNpM7b2hVaYuFrY7A5tMaadfnkDmoF6pr6TFoxDMQGwdoCkE72uVdPU8t9enchKt6guoiu5UdBoS9F67tWw",
  "key33": "DTYu5jVxygfQUz8qBESG3FxzFSKzjHQxZ81RyWcYzUQtauRTPR9JDpRJyAmk7ByyLTQGHGVcY8zDSrkbf6Hb2ZN",
  "key34": "4Z84dJpVMCDn1UFu4fKzZdnPuWn1f4BhQ4CaEWHDogVysK5j76WAWfK8coLZosjLzzSj8zu2BQcd9FnHDr27bGmh"
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
