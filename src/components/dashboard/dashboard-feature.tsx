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
    "2rpHhWygcfTGPKG39Rh8gE2NmeuRppUdEPCcB88vUSUfg8J1f5KDaZGSDsXFtokzaLyMVGZzhgG9LkvGNXWyUrXJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67K75esKcN5PLsnFKeQYqEpz2Fd3y5wqoq52SQ26ng7eHTNvXCascTjFcYSyuDJeKZ7bULdiNL2h7G6NkXXn8uqs",
  "key1": "346RYciU4DQYtVgAr1gCpJaMWwo4eUeijUN1e8XYAXhVgymdeJ9WAdMxeTBZ72WUeeXvk1ZMP3K4Nhp8ReYPLTCk",
  "key2": "3hzfmBZrroFY4GYvgwPtoZKo977YmKoZLBMHnzDReatwdavH6yqwyy3dMzhdW82L9omFhAaGRv2aWT89rX9gV3CJ",
  "key3": "3n28Wy3Et8HTGK17WiQ48kbwYkzC6nMk3pHUE663U6bZCex6KYzpfj4CWd8sfPiMH4cuViQaMVWYdwD2exoyQn8i",
  "key4": "2TkgHQj9RdEXaMbihLLE1BeiCEsEXWzfb5ZhHCxuUWJw1ZeZ9RtCTCzr3xgjFRg5KqeZATwzHoFLsAZhzRnMHJqZ",
  "key5": "2pMcZJdgdEiQ9UM49Xr8oJwtsrL4g57xY5ugtKvvU4eRG34nvrrtZKG1BBwC42eqdkWENBrWbzqjzw24PrkXbEn2",
  "key6": "45C4P9giTb3qyrEkZCfsMpzhnKHZtjZwyWDi9ESN2HxxfTk4bsoBHRhq5c4qhHvB8qui1aKitLK1NBQ9JwBCsWe7",
  "key7": "54GiL83C7m42azyoUCtrr2q8gXNq4B76Y57hS796JLD8Jbk2maSV44G763Kc2fTnJ6sVd3pfSQBbBGZAM6akAJXx",
  "key8": "5uGGfRQQzpLwwC8giPGYvDe9vk5KBuQQAD9BfgM7ujGtWYaxn25aSXJtL71zwRpGMbXALvvj55XwJENijvi4XVwn",
  "key9": "4zwTotPPZjkHMs6NvJ1im5ZocD6XuWSUv4E3pj5RHaL1uu9qG9ed2RGASuuxuwNwcEt5aroaPQG8SYxcXBGyB5Zo",
  "key10": "X5icVJ4u13ajDzKUHyQ8opiW337Mmy9fEkx45qH2xKJJNetDB2WGNkRQNPzZ51W6kGZ6v4ui6N8hFC8M6LvnqsL",
  "key11": "27pbcJTbA77BJDYfC6upuuQSB1L9dinDgd58oRZMT3t8D197AgWinwotBpdBP5fV9tUk3ije66aasTZ1Aeou4Lvp",
  "key12": "2HVmUZzVU7m7cwpZKQTpY1nQNAzi8Gko3BdRjkrKwK16VYGbdJgfFiagFsjMa4mhhepdb7HvPZHGpymXqmHhwzrY",
  "key13": "4ovvsBLUw9vRGp8yqQx63wctXJhZMRhKEBHxZkZ2oK5WPhcgKeSkvyX1BCLgjsCZ5w874niAB4W4RMCFiQEufo1J",
  "key14": "JTanmchoJCddGSF3wM8BJkDg49eNEYkamFU5LSq1LZrvXecz9pGkGqjxE2eWQ9teZxJmxtcScSPMP99HcXj1CQ5",
  "key15": "ANUmiM64sPqe7WFHfu7DFuyHJ4hRSvtSGjbofWNNd3omBwRprSoJTFZQXTMB7y9L4Y5PNtAHJ41u5NSdfwDN5bW",
  "key16": "2DGEY6Fc3FnQJDy9DDsGr7KJf6u9CS2p4T6j8aeGfsLdn5MtmTafSMZuSxewYsyemncFQdDRXzsV7dLHj3esmJgL",
  "key17": "LzLn5doCerhNtDYa1kxgkkvFF98DgtL5AHCGucGD6iVQ9GVm9UQn7GXFzUshS36KoAAf1XYS43YHU9YCTjCTFmC",
  "key18": "67VWKwQrPTeyDnoGueD3fcL4Be9uHpuNafioZB8F1r16nN5xVbXkfyYp8Lyg8hvK7wmSDBnjkPVW1r5541Bm1GxK",
  "key19": "5Vf6zWZ1JvMyPDepzRo1wUv14dQktt58NazCofhagxe4oUQpSUw4at2K2NcoorsAeszLFKxcdYsnkceebWWouH84",
  "key20": "63e89dAf9QfxwXmxWH63KKd5uog1PDpRLTTaeNKXFc87ajgiapB2HYW1k4SgdbPxPLwMk5DKeK77d2hgNE3qSCmF",
  "key21": "5TsNCZ9FtCzGK7fB7L1VMTGw5BvA8KirTDVxzRoBgb6atWViK1eE1pjqqPCzpYBF7pBoesnTXSrh5VtbHTB1gU9W",
  "key22": "26oXj1izDUCxzCEksg5VppgntvXMG443ydnTaHiweBtBUsytNu9pFaATh6a2yK2Vairi7RKotCZ74AKYrbwEftxW",
  "key23": "hR6HnaVWsDQ5idwMySVbBNmpMEPph7cDDtCjqvRtrWtg7YAjaY87G5TsUabHAHY9z8BdfLYyC6VHFw7U2LJiZsL",
  "key24": "3Y3SjGWMZ5SWqzCdxqPD6vK9mzdqJeBAR9rGd4ZGFTGrz3hq7n4hWk8WFZUMR5ZtVNKVceqg79hFcANJRYQWJ55A",
  "key25": "4WJckFiLaBzenDpyYqdNZ9v2r7t1vDDKv9TDFGmQzQR2N2R6CVXffKqEvFYPnLJcKr6augXS1MY5ogefrWTLfAom",
  "key26": "62EFy2o2VMBgvw8duPQ4f7h4oZ9vL2eSp2Z7cNXGV5PYibtvurERR9F2anzpUy3ZkUkFP4J6ucu3tHwBj7hTGEvL",
  "key27": "3nQiusee84n26fKNrgZpitg4HjLdL7mgANn5BNdJTykuVgmEYNoijhMyD951kaMBfNkfGaZCkJucYy1w1SJN3FNE",
  "key28": "4hGRzgS1iem7tMzGGcfXjdApfUKF4fagorMELEFtCMstat4TSWGAzdQdWyc7P8fiTtUYi4sCaSvokr7hB5rtEx53",
  "key29": "3QzjgVTRH96vWTJ5f3nEFVEfzyHH1RS9Qr6MaiSyHxT91wUTHz2dE9APcoGQ29N33UpCD1TaxzE2vPgn9beGg4Y2",
  "key30": "4HK9cxDaZKu7KQMeX6pJg5Ghv4DFFGdE7QrNjWgw3KvboPFC16xrK9BCdgCCaQZ15TYB5RfVRmY916ZCZfttBDny",
  "key31": "5Rfvw9rzmAGeyY2wENRrpAGWjAUCEHEgrJZg7LxMvasqNkPNdSfD4nLZvfN2XyhLxxDxHT4236T9fkVu8TX1dnsz"
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
