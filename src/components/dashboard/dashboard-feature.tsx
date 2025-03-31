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
    "2LeeenpVkLmzt3z2kbyhYxsehs17ou6tiTGmzVwnJ6Z9qLtmbZnLhoDxd9d5KHvGLLaZAwAdb3PnSAWEKJm2o36y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "359a85NuxhhpyUQWULPpyv8HKoYgM2fR2LMQKH7mq5Jz4ij8p4iXnwPtMvNbeKf8VdHMpLy285aeqLK3ZwKaqrSq",
  "key1": "zhse1fArcy7w1NbBBHe2Ap9Ni7iGDNPkf4jssfAsXMuNJvBhMpxn3JRakakgkqiLZPCLYTvUqfmDCvr2Cztd9Fb",
  "key2": "92zuT8v5xgk5Q3ApSFjxNcPjzeZcMVqccpyfeZ7duP5NyDMbCsvnr7TVjcCnCipuy75YieCybMXxEZfbfd1XBme",
  "key3": "2e4beUFXkT6WfA6pzGadUJRCDPjB1LHGFEAnbY74q3Zys5RM8YFJ1jHT21ivQbaGkXfwr3wdYLjy8JcAm6U6kHjG",
  "key4": "3w19uPKn6QJgtwj2MKqeT65SRGtM99yoKA4G91eLCkGEWWQWwRVhTt3ctiHefVoQ8pvhwTub4Y56ui1xSwBSzTeq",
  "key5": "3Q1Jadts2MFUxqpM9Hnd2HnShLKxMv8skPoRTsTKGotBxDEAYbvVjRviXDLP2nEfuckbZYVXGhBPo9nEcYU3SvE8",
  "key6": "4GT3GETGBAoN6pw2BFQWoovtkHcrYnsFDanzf4vhGcm7R24UULeLHBRurmjx78YBiB1d3hJ3JK4M1vHWGU5GxPrC",
  "key7": "5vBUGrBQ57rt7xKGF4uuJGrizEhUnRmHuBqGja2iBp4Uf17yf2YpNi95ZrkoZnZ5yd2JkqjkmqnpYCpFoV7pNS9v",
  "key8": "4fvpysky5PTkAHdwYJoYKTXS2zUJgEN8rSpJfEKjSwjgfo81iLw78gc1iVWWtkKSyQwQj8UvASGKS37hwhEgDKvK",
  "key9": "pTHjsdP9m4VwhHjnkz6UN7NxzRTQPtnXhXN91Z4Bh7dVwThiVQrnjsJAMZbnkj7C7LrEYB8yDLo26vQuyo69PLi",
  "key10": "432fW64DCNjsThvcArzwjkiBBbBzdmotSrYYXoCKAhiRjRsiqZaAUkKL2RiwsiChDLwX3djuTCvzjrhUWrz2xfZN",
  "key11": "2MBbAvogFTa9pSGdPLH5SdyKfFoZiEXpgGYfGbWfogvqxP5Eiuf4mfwXGN9FLUJPpJrfgkpCiCeFYARsNPEpNaiS",
  "key12": "a2DnJgdfoptBR9P7UDvavri7kzaJhmZnsq4Vzy1a3tEv9Yp5LHBfJye2Ziie7LFRYUQ2tx5UszbNkhBaVv4BRyC",
  "key13": "3xqpXB4hdco87GARydfVyFZduqDLtcP72jTnvDmepBp2tXRaBiZkCTtR4NMcSpcMFgaSYaR54Lwacu7k9WUQS756",
  "key14": "4GoeRMVzYTL3XaftvZ9q9DTyCaLCniKYVZSxPhnawG2tdRAUkHLJZJzH5BC5nqzejJcUZfP8ujNQXJfVo6yTKg8J",
  "key15": "2ZByw4NidVoZsNjmwyYfbAVvkTyDGfhyprjK1Ysi4intf3bghwSfDEWFXLnY5yZHjVdew1GMsjCfAMsxGzmDHGaW",
  "key16": "5njNnAoakc5tGxpoEH6epPANBAMEKSbXgJwpk8FcE7CCgGXU4xWi2VRgdcUq1h4GbGBeSxPZTrJE3Ucg9vCZjB7D",
  "key17": "2Xo2zzJUCUHLbbjek52JZFEMgcVAgYaB3hx1CC7Yb7i7UPspoA3FT5xuZjv8VKjiJvPAbLdgWaEyWZXPgLSqz1Sv",
  "key18": "5b9jSkZuQbX5Z41tZ9MNhhrYPJhgsFAwedP3zD2t9XdyB9rfTYvyt11HhUNj2MkZ4LZxifBmrr2tfQ6vvQHTLaRa",
  "key19": "5KgFWXJ86NKB1hchuE6wKCEKUVPfCRfiLVEUjFMCYTWe7dpw3syQMvQA3cbYWd517oCQWs8PuRJoyYtQfHmDAvPQ",
  "key20": "4HGSeGwAnENcPWszcEyTFkqQM8KtCQhCSVGyaqkFg24DHhJdiYiiAdyuwH2ft1LymyBdUEx5YvaL46XrBaTWeLZY",
  "key21": "8QM4vbwWcyiAH64J3GfrbK4oabSkJ9fN3HVkC7kkNXC1GcVD5ADHowKJu5MTahAwwnMutG8xwbW2HCGFZxMGCK3",
  "key22": "KNrxKcGJmu2xAXkfkKVBPzEp9dQcp6CQ6fAk8RND7o2zPVUUDQCXsMfgUB8CKeEt1XpQou7VTYzfq6UJazWrr3J",
  "key23": "3yeYnnvNTY1wvjxb8Vp9FoVkfFzRo5kihEUQuQ8u8ex9CY2Eu4JDbfemiXHNa2HeSQM4BnUcsCNEaZR9BUJ35K7z",
  "key24": "BCrqGcSab3NiXRevgYU8QByjRUhXZLAU7Q9VnncGRAESzYTBQ1LEbYDHRhUazukvTpkyYv1BCh4ewPYSoPcFhyf",
  "key25": "5vVUEpv7gxX8LYm5ssGi9cBvjpWAZsHAcgmWGP4H3s8RqtAWynM7kqe5HdePP7uzLpc7yQkDfQKuZaW3cWB3oZoS"
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
