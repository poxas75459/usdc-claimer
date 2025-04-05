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
    "nHMWDbfG5PTasQbjY6MToSCjWpNjFvyXR2YBSaqWhB29pAjB9ghP8D1DptHLtaXSegcJCTU6KZn2P52hSYK6q2P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JGzgg4BqgeEU8kzCUaMSQf6pJoKtk3aHsxQKaLGbDh4gaioKekZypdDc5MA88dQqZeHcGAZZkCdGNBQn81tA6L3",
  "key1": "54aCM7hNGx1faUGYMjJBCaXnKXbqws9sPRihxpQkeUnqomSGFDJkvXcgbiBNtGd3TyZFwMn5YcrPfPdRdNyEz9KJ",
  "key2": "512N8ANVXgZfqeGsxFZ9hNKLqjZN2vhJExB3Nu88k9PmERXfXPoRNPn3yq3hQNdiY9ereB9qxC5kQahf28rR6fqk",
  "key3": "2cuwG22urY1DFezNuSTCtCRosF9yjPxF62zhjXbTBvQ5KgcRe2zRgh99u3HRkdzbA2JerfCJVEjtRn155fHXwKvc",
  "key4": "4pqCUKq8w437CZjHnLZ5PTqAKXVe9Pr3txtF9V4oP1UnMQe2x5hgYjQmuVZ6dqMH9rWouYSsEQ23W5Z3X2M9DGbn",
  "key5": "5WYKBGdQ5FKmn9XBDFvSezZfmcgBJC3N5dsr4hu9ZWTbzmd6JcQHfS3V273d3UXWpJjYVuo3zSBicAaqnXUT9igB",
  "key6": "4mWC62T8SXr4QmagREhLyLX4YaTos3r3ZxvWZrZNSvAaxbYiFJ49ucwXePYUeRnSrhtpGR8CbTZN9iLo927eJqKw",
  "key7": "5pEmYutqKkqrsavAPan8FxxH2MqsENdFjXcr8APhGYY4nTmUiWLQW77sJWtVKcBKgzhwhPnBaapFVZeaJB1YtJdu",
  "key8": "sBxTkaAr8JJQRAgb8WzC4UchH3mtmMP5BLQsUGceKyqtuqth2LeZ2FNCdxRGKNiyjgyQ8pqsRRnH7jpXCSACDEh",
  "key9": "4KRRJqr5mHyrWBbdkP5tHLgapa2uWwJN4YkoCquqWtW7qTnQ68Fm1FpkhuKAryzZEzBj7x9GjU76WqNNX16siy1A",
  "key10": "42RZthDmZRNGPdpaRmBr5ynFxQ7GwSEvsXo25TWDAJHFtPzf3mp1s2KEW9oUNT4ma8wsRA5YJAxvuRmWcQQLP2hP",
  "key11": "5e69v6bqsPcr3oDq9B3syHmCDp1y88DPUvCk6vFe4upNgC1AovBEp6vjGc6VJTWsmnQxjo27mtc9jUtmKewuDBxG",
  "key12": "3RUXqm3NFyN6D3NPeD93jhA6STCdvTMhLJgj3G42QCJsiNewsQk4uGXb6qGYeooLcyEBv2T4c579yHR7rKsFsxLT",
  "key13": "3b5dnuA1ESPtjNEpZ1mtEWQR42eVyDZBXDEGYG4hV3HrUo6QPmbB5wFjT8ZDjjCibB9FT4DyYAFNvndxkAP3DQdU",
  "key14": "5oK25e4usvH2MwpfdELCqYvWf21d9fT9gqRNVuLLpjBzm8gipTDeroXLxQ7oFJXUBwLVYL1fjQ5GAJ21XjLpGgC8",
  "key15": "44i78X9f6xT2ncsBmnNSTHYvX5C243YjU1P3n2Frwr5v8uqCgd32QHTdPR99xtFm8TKNZdv7go2UpnpfkbqDQtEN",
  "key16": "MmRG9aYeNfdGqJrXAtFuJDaHRUUUpb1yZsdhLfLFPrBUrW5Jy84m72t6GDVrcfH7GKJAywgd9U6iXPGiCFYXVGn",
  "key17": "33DoWQfdxscsKoQX5Q96qFt93KYU54diLy3pxa5duJfch46KrzPKKEHMZCathMksketpSDb4vfNKKaWRAtn7S2L4",
  "key18": "4KTqLrWcjBkEc5LJC2uTXJn7gCX6jHUASgycypgHfMpvyw5ZmqMqT6YdggG118Bs4FdDXZA1P9wbhjTSyZEFFQvB",
  "key19": "DdEAxTHknNX39gznCdSdNW9TBDvjA55fkqTuwrRrndXXRYMHnhV83fjUP52JuUcBPd89fgmPud4PXvjau6AHCAY",
  "key20": "uUoozifakpw1mvgic2cmoG2iNxkNWZXQj3XwkLmcTA3fRAX2wrTWfuTipgm3LY3161cmBUErwUnwqcQQ6BjbXzU",
  "key21": "GBSJynufZKnbU8qdpRH8hs9Ac6eTZzSkHvKmsZmyMNKWmv4iVjef2NCMg5cC2JmD3DYCma8gKwX1N9eWV9Fm1Uq",
  "key22": "46x7wsHWwukJivEr1F8N5QQBk2774BNmW6zcMC1KtSe5xpv8Yd5NDKnpbcQPbmRo6xyRE6iA87ntpsYeS7Utwsg9",
  "key23": "54r3qr83eF3eWz3GQsHcVbBwPwnVEvMvJWhocuzSyMzBrJoZypv1HiWYQCV6o5A6xGqkBJDADjUr84bN7WPeZM9t",
  "key24": "32H3FW4ZSCz14kBpfdXzkJTPy7sneJ2DqiC3GmwnQDAgJN2KghJ699uiqUEN9AVYmRYU163TYN1Y8BuKzqNud87p",
  "key25": "3z8sP5boeZKrVzDyCYkgcQyhsSH2P8PFKr4M6ibQJ2N8xRRCGzDNZYBtcAiLbNZA6sSxaEduGrmBVjjrMkBf1VWM",
  "key26": "3JexZo2QXxT56QDeUVKJjjfyP1p1XxM2SvmooVP5qUT5dpzmncp6dvNF2oVangiW3BM7jpTLjj4XPc3A42jxbGKs",
  "key27": "31XDPTLGJYknpcSHEX19vAYWyMhzpkqEgSxXUcfZrBLYC5uQco2FykwpUdjubLQBWNj7kqrZCKiaomAsgrnxA8Pj",
  "key28": "35BA8QaigoGhgR1LUWzRUBSRxuPKkeHAs5y6tE99S1er9qGHBMLxXMZWUsu1UjZfL2ZtY38ugz78UDKZmDUQS8oa",
  "key29": "27irjbQyyjDQmtxE9w2ZJoQnDLgDapz1mVz74FCqMCCskLt3a5JkgvsSHPkAzpUZPfCJVPMEANn2UXkZ9ytvSGek",
  "key30": "4n51cUXtHkskvhVMRFGWTZ5dGsXC9pT8PkEDheCfHpuLELgbm3KLeddHaR83DmRXQXctDkF4djoHvT8x45WhqTWq",
  "key31": "rrPPbGehGwqJLnT1m7ktDYVWNFDapKF8iVEKVHkbRTt7QSxYF1KG5tbCqKsb5QwGsWDwvzjmFLXfTKxZqZ3DEkj",
  "key32": "5ng4rFUoC3WVqg88ZJ2vEM5ir7a5Hdm3MpitFfD5aomBuQ8hrgyvBhtSTANMWNfSazS2JjMFMb2BnTuLn2Gs9hRq",
  "key33": "62Dq6BYT33SaD6e3PqE4QvNLbjJ7ireA52mzKHvaUt49CwFgQnPVKc4Pq1a2pMSjh2KW9ZbRSwksaFfR8XD7t7qK",
  "key34": "36dXjzLkZ3CBbHr1sBZMzFbry2BHmw56uupPsMAzwF5JjUxMKzYZo2zbJpQhNgCAyFZYFfjAGF1PV1QuTw7iavtG",
  "key35": "35fm27ucbWvSirCbhdrg2bvSn9X3o6wqDVhkqpWjvQgPc5PPXTpHJVFQDEJ7Nsff94xnx1NWF2fmK1NYDV5RYF6i",
  "key36": "2B7tBaGCU7ybtrQefdcoDFQtfJbSrwNvt8hSwbp71UNGgfPtj6gKcjV3B1mV9naad73JN472bSWxeS7tdwi4Hw1S",
  "key37": "4aa1YFJjdjscjdhmfnfpTK6ZRxxwWhCCxAficEoZ2fRLW7nLPiFA5S9fwtXMAe63WMqEb4Xh9WLcXytQ2hiBMeaB",
  "key38": "4yTPnKCKGiK4BFg85mGZkrJmTvaxNxGcZSijZoHZnp3U1SraW1kBDcuS4oc9ThHEsNYGSLAgLS1mUnoe928mAPf9",
  "key39": "5TiRzhGM7VSgF7KPy5BZVxiGcEPwUVNchoEFXKM3w5WVyePygqifpESyE3HjatdMdWeu1fxxZ4EHUfubnCvkM8Ut",
  "key40": "3K46BeSRPFwy8zLbLxdqiCRuUkBYp23VSket6LABT1zmiWtbLDVaT6CTVyQz8A9EBLZTKaaUADT5uWYG196is2By",
  "key41": "2mdnGkHRTy7iCw1bjYjk8gG4kS2Fwdhj3qccKscmG9ANgmTdXdcchDjNgg5qS46Ko17gdbG9zd2NYz3YknXsaoRU",
  "key42": "gh8y1LF3AK34aP9WYDshC2M5eTe8aiBMuX5r94jpkoXabmiGkDED9V6beLHcsfHNqPz12S7h9WDVR7a6kAMg54k",
  "key43": "iUiMdcV6h9ma2taP2iweGQD5EfqYPW66x9vYTf4TtudqLuqeReubNvx7N4ggsS7BqUx8KAoiJoidarXpsXL3i8d",
  "key44": "KWDRRuhhgDJbAYogR52MUQQrG7E5hQVSngGwMEo4pDCebd5BJ4HN4BHgWjomV2FDEBnZT3cigPqtkcKWuenByjJ",
  "key45": "4dNhzomc9uin2rv6QbvLXXuCSvHyorqLgVtFZVeKm9kiRnk2PY19imfZQuMFtthb1Pdtr84RLA8iArHDf3uRnxnZ",
  "key46": "4quWZAvGQkyChdArG6dnXPpEFao1a5KuqjmtZEBhmijiPKbNh7aww6S1Zx1JLVWCvCYse4wFFbhPvvAZi8rtJpNX",
  "key47": "2narFP6wppirJFAtbzSkdNjN9ToyYc44S3DeQKWvZsYBQnuzjt9RTGMXfhibTNfuh6d4sECDxTrawmv3TZxUvx18",
  "key48": "5qegufxDfqTpv5jnu4q3aRF7svcpC1YEb1AyYtcN4MG7mUFGLZfb7tYbvZ2kL1eBpQnYRhfGXLSwuViqAySjFMV7",
  "key49": "5nfKtdGb1n9UHZn11ULWSDfvFaocxdGpmYDoS1R17FDG294hSfnHw64hJAVZv6BZuEcWTYG1PNiZ5s1NUij9zMCD"
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
