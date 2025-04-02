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
    "2wPr8kfmnTxES1UpmG8yfDLc3osucDr5Ln9W1GECF7a37RgWeVA7K4yRRRUQjvmdVQS2aB1rp4LTh9PbEdjzWtqM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UYu6sND4ZvroP8dLRghi3CJawgwk6261ApiEu7LM5hNH91Tkn2evXqcc9RYVsRCSw2uhci2SHreTV3W32QeiY4Z",
  "key1": "3MJLoxZNeiQ8Gm5GNQy7LHwoUdE2bHVmbr4qxBET566EUnDKdvH4NPe5h11QMXZ35H4ynasKBegz5JoyTYrVsjop",
  "key2": "1QnkBDanKGshTq9zHdWkKxrVVyx7RGVbFoq15g72uAa7ki3G8WNiYTGqgcczARpVnRG936ksVaos4XSURWhgLtj",
  "key3": "4bHAccaZ6Xb2SDfvFuYGd6ckN3Pf85yYXcdUzo4mJxGBikjDoBpSRr3wHZj8UEDCVisQVLNKVSyFWYqcZbA5ucTS",
  "key4": "3RTgJuZW19uhuZRWhaC1dxqwbnMmHC3eiRixHAA2eCZV4P64kphNoS9mk67nzTvgovCrenXpuS33eEypXqPrwnxR",
  "key5": "BZpf78T9nzFWBopv2EoVGhb8ELmDLgxuwd5ex2PQVUwQrFg74eathYoBdwfr8jcyBCtcDNF1moGnuvSwySZCoJ3",
  "key6": "zAfnjXB46TRUj3bfAAJWULEdfjaL3TLD9pPDc45qrorrpLye8yrxzeCYfHFd7abYV7NFmPNk7Dz3XwCZNdAkP4D",
  "key7": "4xJLZNxocNyt3riwAGyJm8RqoRakrwJ4Q7BBbWRYFimmzuq2WUuLiWwKkPXRmZuecWrqaBaUZom12Xf48Zrdk9yC",
  "key8": "4BQx4zSEBZqteC6seKbZHL5KHxPPbHRxAyh7YqH4iJ43yQHTVzrTyrEKCNuAUgE8kbADdZL8UppnXD13rW89EoJ",
  "key9": "5r6SRZZGBqSrjr7Qpnvv3hscdwGnsE7HmuA7ANnsfMhSKWMw2CKSfR2WqPsU93uKcDJZaTHNZP2FftfEGQkCTXUx",
  "key10": "vL6rgAfcnSyuBTHYqSg6Fcro9yU4tWNm32JYziCinw2cHW2DmFmU25HNqD9kG8pCzeNmgi32sxY9WUkpY8kCJt5",
  "key11": "5NWo188QhoGBxdaPDYouh2iKRCy4Cg8D1z76DZKQ1pRARYUPUzw2RCmV1Cvn7ph9hA7CzS6hKXxojJoZTEvuRnjQ",
  "key12": "5wUXmAP2reHupiF1hhkXGqToCujFA9fDwGVxXzFbHPMardzwH9Vo3XpvAr4FMd8QRNFmLvKFHni3bhQ9PdFfnYAg",
  "key13": "5TMTF4UCzhCakabR1Dw8Ec5RiopwwHDQvhogtiem25i9AgZmu5MQ2AYyvm2mFThe75mwupPie8Uc9dUeUg1UrUZ",
  "key14": "2dyAGwzYSudFN5t5zXWGtacijanB8tVVL6dPHYT13wtY2zuDvDZWSmxaesT7rVCtK3LrvLckMtRX3wD3Vciuu3P2",
  "key15": "38ou9hLKqfr2ij1ZASkgKksogR6PsjiMg5VLmPZkZwWfkraZiPTpZZNS46syxfuu5hKXshexc95q87KVUYyX6jnT",
  "key16": "2TVQyHAHKtvuLfHaLpaiRTSHQHrAZcGktqtaq4j9VcTZYZ66DrTwigK3s6BNYv4K5vqPUcaxB7N6StyWLW5Nk5DN",
  "key17": "2X5MsX7N8kwpFC7Ht9LCpL9o6WFMmnCrgMoociBVL5TyuS31rZcd9W63dCz2vmwGXutBMwwDoWd3qxMwKxNbtkEe",
  "key18": "4xWZYFh3LgxLBBbPAktf2yEmrPTe3h2WKbb3KSEYEbKjccGEyxj5aDKNnZQKfL5bF2XPmZH7KbWgCBsihezoJJye",
  "key19": "zhaEoZhTB48Mmtwaonrui4dYwQxqpXfFLLjNZzxWfYsMUAP62gDPSWJDZeBvoDVrodbLQBW7cLepgroNzRQLeyH",
  "key20": "4YetMUvzkzR7uv3fNjgrELVCiD8WxGHg65aLij4VXEyxSVuXAHEEBg2kA9Sox6GbYAVXtvx6495NYxqifcYLxNYb",
  "key21": "3STyQareMe6N2nFgM8KjSjCysx1JQVzCDsshSoWBejszfFG5veN2qADNoYGJLKCcatK5b4xHCGfH4Pxf3TpvcotP",
  "key22": "4zviBwjv5pp8B6Bw56RDjcr5m5nrbhPowmR7PaorRbVZREsgR1XcE9MqUHPt2y8eVBLpocR3oCvsnjRa3Wt4S5mm",
  "key23": "2Ga7mqWvNVtdDeH2dPoC6y8bCExb1PJtFayt1BFjBvjX5mtMQJb6JaFgnEBusuoTqm933EwybKRY9F5khe69jiDa",
  "key24": "5F12fU1MmN7BqR4HiLv4Pvepr7MrEKxssrAUSAxrsq3c1ipwcNPb3NHvTkjbRZj2h2vUPQesZuC4eCsTEEbGeJzQ",
  "key25": "4ZA1cGATJN1sFnM3jSdG5fEvwY15XMnNikhwQJ7aAXCAj5w46xfFopBVYg3bHWuBChNkP9PS51YcLYaEvkSckKpi",
  "key26": "2cFfpHnR2yr5qXk72AMrJ9mp5Pm4rikvvdVxZv8pKCrsKnYyC3GLtR9fTY225tXV8NFvWSWhP4Mw4R8UijipgbSC",
  "key27": "ECiPGewcin9vokzYwFPjjZexFgcrJrp6WRvbnCK7RndCQvkA7et7vysp1c47kiS4oQjxPoveGsoYgatLMMZjuwG",
  "key28": "dXHTBmSzQLVg5zfitoomaZdtApyQE9HmvDxUBZDqjzZW3FV9PGTZAWkbAaTckZsoS4BMbW5TFkgftuGG5rs4zs9",
  "key29": "ybSLAyXw5f3uoW8drhpk6GraSQCXXqUH9BdzWiiUGLCGJRyjCMpnsqVxQEy9Q8wyeDiG62cv3ziq8dHGPXrQ5iH",
  "key30": "2ynPvLU8pcxakPMq8kSDd9E67JYu4U8oLmYiUb8jdWjamTc3RnG4LXwvrf1khavDDgJUTcpMpWGAbrdLxpdYm7ys",
  "key31": "FjKfFbh6RNCb4iW4Cn3YMokcvZvNP5oagvxTwv1NGAE7DqzQVqYpp3KwTKbs6j5Rii5JgUWn8oLC2dzYrQQHTQi"
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
