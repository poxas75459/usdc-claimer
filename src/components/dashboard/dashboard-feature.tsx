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
    "3NXZEKYQzpz5sjNDjhBzafhNiHLRiuHd19oJ2sncMMxJobAEiPt3DqDfdp3z1w6NjEk3CbUy8hRHsPLqxBzrHXWu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PqWFuaKm2uLNKnq3BeEusmjRSS9PnKmWdApsEig5Rnqhvgh7UtHzh6V5H9gGUKwWPmnuuyp2m5rpSWWmTfFjmPu",
  "key1": "5t7WH5a7D9w3LxVHU1BBAsJ8SsPbLDw8hnPXgyVNoiWQPZBDE1m3a5T8aXiExm7RFD1PcPR5wgBhumcBgYKZKQ3c",
  "key2": "2FDj1zAoShmzdH4y6eXWxSBWBZxKphZBf6nmdPCQSQBZfssHzCH4aTc2nsb6AJdtKAfWfmEiQguHLdt3aKhYXaCQ",
  "key3": "2DtfHihTZHY1NiXpQmBFAcbDEBdTn6ZaS92ST62r58izqGiC6fb6jebZ2KJUwoA9YyKf1Pk8kFjFmhw7uhYDS1CU",
  "key4": "5m7qAd2VyPgG4Addo98rxSB6EpRQS1gK2kmWRJek3PK3gFfifKPdsKTZBFQtHiYNtY5CxySLVYMqrZvrP9MFarfx",
  "key5": "3M38Q1D2PJSwCNCPHJ3tCbUoc7XzXCfJwpbYR72WX6xSib7CiPedrykTjhiwyT43SvpWyx6T8pMFPtfp3vN29gDN",
  "key6": "3yCMX6PAW7fs9RYjM3zU7kssupW1LtsUmeS69ffwu3H6ih2YAo2S2JdPgT4y3jkDDUN9xtLACkCnN7BvemzwidaM",
  "key7": "3vjfN5bwdQggWahTY8hEkvoQodgSXCYfYm5JRaHhP3seedewKyvK2SYRm9AWUSMDawfbhbu1gMZDQdvUMAtmvwXg",
  "key8": "4qseTmSHtLiotWDNuQujAJ72hMzNFR3xUFXZXEfrj4VjKLtQcp2gm68UHUVidgGydayhCdzJmjQB7mE9P6yxwM3v",
  "key9": "3HRbdVht4zsFD31bmNcJpW6F4uWoMC3GQ5iyakw6jhBN81Eo3CMScTGEMNLVyRTo1uXyQySY8U9MKoArTW6mLJTc",
  "key10": "6PJyz96XqanaoYrjeEfhq6ciiHFLRk4owNzhHnFFV85WCxSNXKVDAiHtCFwA3Q1XKxj399Rfui8AHdYjmVj7t9R",
  "key11": "35QBNZ3xgSCRukPa7UaAcoSsuu4x5qnnNqs4L1ntGVcYXN57FPocLtQBi59E47xRXbEnx7w6PaNsvRqBRr8dhXve",
  "key12": "3Zk7yQfKsMXfLVF2VEGjkYEdnVsAhyrTBz3mPPuYv38hKKoVkx8KiwyqbJ9Ssj4VYcFJAXJ9bjoRmX8AGB8hxEs",
  "key13": "2VGuxBwH6JeVvQZpbcc5Abp5NAyEv6KACYVYva4WpJg9gxvziBZpv6Ea4Jg1tFGxL7gakRvwpY2uG16mXW9xbMJs",
  "key14": "3oqyVn6XjsJbTudQqtEhmBWuAiadPG2ERuzT9GUJYGjThVFUT9ZGk3AqkJBgLnT4tWL45e59ifzqEANo1BeCrfy",
  "key15": "5p8v3qzCc9JwJE9LEJea82AetXtCvRLb5o6dLZpmLLYkSBzU4auSUv9xUn4uDJAWC8uH47s1e1xKvHBzh7VfTaCD",
  "key16": "5NGaV7yTurWYaegdTc7r9TnvhDu976m4aNWfZe1muueMkhWNJEEUibeHYzf6QKJmeCavuJaiXL3vsThAXYEbQBHC",
  "key17": "5fthftegJYezxnyf8Dr1crJ87PVFhzW8FMft5tqqJjQBw4pvLEcmtbzDYJ5MwXWFBG7YNqnBExBYcGJkEk1QxQN3",
  "key18": "2MEL9jjmz8ePBGzhQCW3k6qbTTzJvqM8L9HESqsK9ZgPzf3HCWT1mNKZq14q19TGSUbzU1tKTqrnKkNAnnNQKkP1",
  "key19": "4op5kncemFSxLvp54Di2959EdecCTEdhrdV2ZDZD1HcsjBxBE8r2TuBHcYb8V2yGhyrKcRZiMDLwRGt9pEw1XuJr",
  "key20": "4P8caugm45xjLdWY7SwnxvAAMDURZ7EL5TwGuvjctnAcjnP7JHrRGuaXWMhpvuoFfbW2qkhDWo7ArHNYBhEwoARZ",
  "key21": "4tp9re1Yu7GsgeChJKrtqTY8Fq2nMASCEUxmdHswmc1v3Nahnho1s4StKgyZ86QvMA3rEjEanMWCfAsUtKVRLq3u",
  "key22": "3zikB4fgXfeV7tk2BL1XvwZoKSiDNAuqcRbpqM4MjgpLaCCojVzU8VqbYKhyjZnrajST6sti38kLdxdCNCni6K55",
  "key23": "NFeNsfieCxEizUqjbQwynu96SgJ2scHNmBjX4HJYbn4zuFRoq8Cb3UKu6Hp6XrB1pSyEo4x46A3yBcVKwH8PbP3",
  "key24": "DNd2rTNK4ZmCXBFX5VigmEaFfPuMpW8oLskRQnw4RJQmyNfpoyadrApjJ3cDz2iXgwt2Gj9dZWU5xtBwxiNDQ1N",
  "key25": "21hz3Mcc89y9hVbAjouQWUfdV3gDpKAHpThYUp5oRfDamwBrN2T6EF2NvLhemg4SuW2ZYJS3PbaAzRj48MPXxYzJ",
  "key26": "qfQcy8UFCkjVUEWBhxf1Dkm22H8KU8V2RRgafSpNmcwW6GUDawZqA4eMT2JmnUTgfpx6tHBT9TFMhfuwpwbUw4U",
  "key27": "2z171o1rh6QdXUpq5PccaLYTKHznaoTjZCF63aLTNiLi47DFADnMiNbQodZjbYTYRt59e8z2E4mrGZG1PCP2hHNH",
  "key28": "56Ky1GLH1i5TTzodpzNFrqCe5Xagx3fWMdbzucnpRgvBDxXx13HskQVsR5yHkCQjtmnLQViEWs5wuWd52eWVHZ6X",
  "key29": "41J7Dsc87SatV4paFtprtq4eMpMg1aFsifkvAutx1q72DqsczsYNSdeEgZ6zJE2J5XcAiMoRDmw7czmSohuUJ98S",
  "key30": "5ZqwEyQTC7m9aLFTakJFJDE9pycpdJvWhEqbGt8Xw1xqGFY55yXhjqjRVwT3UkjYKXT3MuQJLptK2Eo2D1mRKmAY",
  "key31": "BdDcMHPAWCs8w8qsj9H9XZX48jmzSrBpMc325AP2fQZEHbhNjhbpKocXhLnM8nR8hJHhjfAtHK9HVLYZLi1E6xm",
  "key32": "e6sErGfnHfdKYiiR2YR9mNNF9AgUuzfgSNDeWmTQi25GAZmJ2rvDJpuTmMVTKo1piY8skEu7ATWRz3fYTK8xBzQ",
  "key33": "3BicTDXvfZypP44gRVfSZWNSQhGLE2Me4UNLHbX6JssdsR29km3GsXxS1jQ5jvKoYkBeYTPVyAGE1ohukgN1hSS3",
  "key34": "5C5RjBDfXi8NzyLrckqReuUJGnQ3Cqagr1SxzZJYyGqicMvW7PD4t2QR9yxi6GVW5iVdkMEuy7JbUezKadP2pwkV",
  "key35": "2kyBBj3RWHLj88zMNH85Th7xCgLif5brCtds9PBdhQMRKgMmPFvKVmtRtFYsj6PsYyVt8rukPDMaBSZjEpoQkzVV",
  "key36": "4t7NcCEBEG3uWaBXkh9ZeDQWW2nTLVt5CBVJfPfrgx6gksPgztHJDdKdttpikeGooXhz4hYspdJetQ6Modt5xGiK",
  "key37": "3BvZS3NGHFD4c8vMKgSrK3CJukpVgeArnWMF6NbsiXTXtXqoCVthbLsNqByiT1RTiUczqZwkMPaZqVne2upnkEU5",
  "key38": "4S91ydp8yjy8oaW43X5KdmKyjBnrpZczL8iT3spxAVVJ9nvPLPhN5gkTkL45JnfjKcQn5rbxHsFA2n5poTbteVvY",
  "key39": "4teqxEtrWe34uv6DN8bgtFJv5SR3LBXu6AELwhmAubUqefHJW5w2BZZELdPUNqWG1nfEpecHYNit7WE4ViX46EdD",
  "key40": "4Z92DKNAD4qfzR1Z8ZqXNBDVbMfHqtC3R5XPBKdnqYxTmsrMahZJawC2xSJMmEsrM5tSJpjfgPLetL3YzTBRsjbd",
  "key41": "Jv6YguvUnitc4LPUkqdJSfTkGs7Kw3afhs9RAppx7GQYTpU1C6hFrXCjMRxqNy1hFAgGEMbWRHLUMW2HWyAiV3z",
  "key42": "5Nvyzk2hU5NtFwkEVPPSHUwKr78DfvPvvTxpTRgUfmwunzdyjib2BauMAvG3j99DxAoqFVpquKi5ZW5bvA1hpLPG",
  "key43": "4DUC3xRdLTJu2WhSWjK7CqNhj6xabtfEMLWVEXAer4KGcYRT25aKYWtuzBBbKj2gef1KfmD4D9Hw5ED46QSYJmif"
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
