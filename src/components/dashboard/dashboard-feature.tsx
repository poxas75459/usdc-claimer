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
    "4eoKzdTArjdku6gwnkAFCdWFckhfeiKh4GuzVyu41VohmGK2JVaPMnoUXFQpHcUg2K2VyG5eoZD5Kjm9Wm3sccc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mSKS8cJhDmTb9oZdUyRTJfVFDYMRoR9NtGp9MMNuLGdHhvLNF1dGyz6a8AvGXA4LjbuouesZx6V3yj92Ls8g2L",
  "key1": "3iSTU2FJ6yy6Cy1waa4JGziprjvwqZsuQF9osMTs3LcXZdio4LF5Y3w7zCTyAPNSUMoAj117q8mWY1Qr1EvPbJJy",
  "key2": "3S4tJJq1RavnypVYmYz49k8teSpXWXGDmA14YhBdJ4ZjGduqiTygX1QU7gWuL7D9rvdyGXVJ8fKni2NDJCeSkoqk",
  "key3": "5ZPhyAjxo8P6bDKv1w4vgqP53KoLDQh9smb3CxqD2bCpymXRK5vSd6qph7rX6HYX3tm6hLs1grcR8jrMShrJScnh",
  "key4": "3MaASQR16gtQZbbCNeyBD1pTS6nXu8z5LxJC34Pkbq6mQAfB1WJik3y9kGEP9JRk2E6kZ4oHRsCmsvFywsjNcN1H",
  "key5": "bdymVao2DW2Djy1gtoW8gd42CEJqswYoLkm6oTLCvKoQWor8SsK6vZZYZJGEYFffKm15G8xesneoMtTqiDrdSCc",
  "key6": "5nUAqgzoBrtg3wjtrSC1yQsu4ffVhjA44E3g2PGK4Pd3ynxunogMi7D5SUSahGb4kFyHbvygfJ4EvdJh1GiXL72K",
  "key7": "3R9Rt6mWZS7rYDprBff9iZcPLB96botbDCvt2hJR9M61ETmQhsZxJCBiiSMnLn7ksiJA4kgc8hWn47jaityu8yC7",
  "key8": "5XooBYnJLHQjwCqN8xyMHhiFtDJbNkKxnzPgaGjaZXE11Qv8b5r1hyHR1X14p92DBM9wUoZgV41MZVufaTRZqYJp",
  "key9": "4Euw1o75et7AfBS4bkhGqXP5kp8T7sD1kC3op8w3gRqMLNcZ3yMDNBbTDox6QZocc1YSYbG9uawQ2R8CVChy8SLu",
  "key10": "3mKSwjEBmqiPd1qTxbo9tPEGEp8yo9wEek1nboHhZQqeTYsKWG2o8jWHNNS7NzN5izJsBstH3AkQzBdjLcjM7ASq",
  "key11": "4ktwiLxq8XuccX8bNKgCzsfwH1sn7YEUVwMkSdHryDCwzVK8r4Sdg6PfVbGhBqSNBGN5xzcByCYrwSA4poj9RgBK",
  "key12": "351JSAjqVvebWdQGMdP9WNxzQLDVvWh2wYENSY9Wr8GFiqHWgMzr8GasRADnpnVY2P5HV1tcAtYiva7DriYGB7EL",
  "key13": "34p54b3vyetiiALU21MDYkk5Jgw1ji9JpXPsvruwQuebQKj3o6qi5oqYeA2R8gxuZ3gJnXcR7399PW4AGcPFRYVu",
  "key14": "q8TRzXAub795933EDUex6eVNouyDL28KykNYWB7qEG7ZdLK79upyTi3F9AY9qgGC111aR3XEaRir6eiVoL9HZ3L",
  "key15": "4VHwmX6WUzTFitcqoRPuXVXmuwW5inTkY6pjiq1sgMcNMs3vfGJejKWgTcWkPYq44zGrXLTrCXt9WgJzfaLCTjNg",
  "key16": "2kK5CrUBryaK3C6aQ1GjdSYZUZT3x5fGBxasRj6QHHaVFieuLjbQxNHZwTy25zy67JeT1RWVcuyy7EkxNjhBG3Cx",
  "key17": "5hD1HPVMbwHueUup4NHGXPvJktuSxAy1h5oastgPCLJ5HfeVDWmiCLNPR1YFZ55PzSj7uvWc1bjJzq4cEex8PK1t",
  "key18": "56C7a2RgcYeuwNYuHWVP5cTZ794DCB9QQmc6hqYJvo7bc1m894hmmHBvQxvoV9muC4Bi116VHTBh8GWpsRYE5STM",
  "key19": "TJaf3qNhFwEtuzusWGoUTxeo6qt38sM8DFWue5q7fh3MNGnh9VjMVxjXTfUDhHru3B1AtF6xhRGWiYhBQb5jMmF",
  "key20": "4mb3g16mnrp5jYyNarKK288RabPzB2dMEZskSJ2KEpT2XENHLbCd2r1NGh1cQp8evH8hwURDVso42vVCcyCoKAb",
  "key21": "vDeoBg8L8EdJ1G3MVJZ89y5WSkajrDW3jTSCbYa4aWuLWbXdcybvTAnEApwft2KEbePmuejYMfhwmZKbYSz95Vs",
  "key22": "3Ree4tTKeavyEcgcpLkXSyrV4ee5QcaEDsfKS6zRXpKV7K1cjsu976aBgtcXoaJYFXuNhvzXx1Q5eiZDQ1exqQCM",
  "key23": "4pUJUTn1R7wY6AkMHJMkt9FYw75XX1Evid6iXtWVoGMYFThJzpHTh48BfzF13RoAE84pdFxgphp7DnY3HuJchSWB",
  "key24": "4g2SzNr53obgLVuupUYm9yAYasnowcUe4c5L1uUtUeaStoo3UE9E2zyxPEeVimEm3piy1qbKVAyskA6AXVRYe21c",
  "key25": "SRh2MChNy49DQ8S5gRCAQ9pwaLuD3QVfrJvBASrM7NihRdjFiMvRw9tMGiqRPZpWokXA7X1B2a2tw1dx7BUkhwo",
  "key26": "3LanKKXZKgs4puRkYqasEYvoG6cnqWrJUoQNg8w2kuLiDwG9Q5GrzcGj2LuiNuwGw5cJJtWVceKuv6mB4wVyhM2X",
  "key27": "2LuTUEFyVsx38SRJYtvqNbP5SDoe3m9hrGoKAgvLukAAa3PoHCERw6NF7hR6ZEpEw3ox8XF6s8EYkpFvF25JFmud",
  "key28": "bMwU53teiQRYUEGpGXPLxhmD26HRW4doc13Gj8N7XSiydnLTTpdspNWmYZdkgSuLGE6pHyJ18bryNdNyMvVX3Rj",
  "key29": "2tCCArpkC7JKZNiaQu6z3y2JkLzyNMqZdx4ZGoyxBX3zT1BwjvSzTRnJnUs3FGK4SNd1pjxsDBk89jxWyQgjSDU5",
  "key30": "4A1tRHGkEDX9w4EyPvujVePMUYrsZkCrMnasbcjFTQeeADMtqcWFa5AN6BDvCQocjStYnAQ8HbgippttDyHJnA2c",
  "key31": "57xmX4YJqEWL2NAXA9NmfDHNC3CyrEjwpNH9YQzbVmYUNxS73ZmYnG9sF4ejZvMHbmkszsidGZnUxtau6WNFbrbA",
  "key32": "582Gi5bNKQ19oQDRwyAnL13J13boM9B5vKd7ksgKRzcKN2fszUPdnHhHQfALWXsBkudBx1wm1vpmuEGGAaSdTGkB",
  "key33": "4TwtvpjodDLYie9EWYo2mL1vLX4XZ5TLbNZTX97ZLM7Nxa21mpucUKYgnt3AwrRbujP1iikXJZuWemsJYJmjZpeU",
  "key34": "4jmNDKajbzzM4fSpFdoryd3LVJPeqenerZRc5wJ6Wgnu2nb4vEn16ov5iHxdUvY1hgctCE8h7LYGKzG7kLrz6oq1",
  "key35": "3k6Pw5dADEUaQFrhxLvQ1TBd8DrGJJBrBHenA3ZpopM5B84hShUddG71mWAL1BYVufG5oWwZkaLZZMcMsTzVeyqi",
  "key36": "619xQikBoqjqYwwTKx1Bm6h6yRL9yCkkyJaMKDzNs16cUTEwnHjXtTRRCDv6Gtc4EmTjkHCLepj3AuPpz5XSmeRJ"
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
