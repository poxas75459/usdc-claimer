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
    "24Tz1p5FS4NvtnykVsq4gY49WdwfL8JcSx6uwX8NeYM1oNKtGSnE5t9BBMpEcDn1faxwn4YJq6bdiD5G9gv7V8Gj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xtfbETip8ZHjtJNrYM4VERHWhkQfjpud6nFUNBo2ENhjDAa3sQBu3z7Cg6R7PycHtV6FLrKb9dKWiySjdUuyKbk",
  "key1": "4nvjmXhqPPgptaBRk8V3d92rS9g6LsK2owt4hksgwmsvGsnv4xQh8wrW4d3wmNNbsKRnJ5DDemFGxwoeeAV1ii9S",
  "key2": "4hufS2RrbwahFdhaKaAEHxFvmpBRRiPL8VxpJdTCReZVZnBLXWN1m9K5dhRo1vnie6b8rqDWmfLCwWdzZ9s2dsAU",
  "key3": "5srMxxpY2tLG33ijQ6VYX2HcXkr7nQUKpmENivAsuT9F8DKEeAQ85FMZ2BvFeXLiHHNGKpU3u72WUQmKiwV5cxFk",
  "key4": "2pzELMe8uos6L4zbCf4PmMSaWvtMVthp6EtdWqR4xuqmY9ReTU7GFqSzVpASebVpGqeRxYzP9jt45UWMaFmmKfzc",
  "key5": "5tWfzPMiXH2nJh4JuVtpEDXRaCD7GJ2ds84no5SFnLVSmuGMpwPjW3iyQTpumpcnkixAaJp88E715vM6Vs99R2ob",
  "key6": "5viseiLDhwUgSox5Fbw4R2rSdKTH6Z3H6hFT7Uv6gbCYgW3Y1rbDapRvgFhnfH7Vim5qqQuHwWyEWr9nxeytGGhf",
  "key7": "2RaFDdJSTwgDHUG1g6oWhVfr3voVYK1uSZVV8jvbi4HpK4h7EXfNBU9gXf7v77sK7gZjxmgGHocn3T57iC1y8VBi",
  "key8": "5ekCkq94pADF8F5kXHNNtVTcqBUdgUDcddL3syDjRmzc4KRc5gpJvJcjvREdyNX2G9DhNCR3UhxxZHUnv6HD86wV",
  "key9": "MgZzwCqyj5owCakeQFXq7KRGdZ3XHcgGX893CDFBmaUdAMoq1rhZQ3BqdBk97x9xbfvpe9SH2qEbeGvNpY8xVWD",
  "key10": "Kn5fifzxEqZcMHGnrExueJY913DgT8SjmfWxMbCsAV8zqmtShtCRsXdvfzVgf9EbhkkNveonSAqxpYBpbmXNszY",
  "key11": "3rThtxxUtEEnFyM3qKmuXkqseVabLJF7GEmHD1aicN6SeaNqpriuMqtJar8YudHqJdU6og6TWAEZuU2iHJ45qbHU",
  "key12": "5d7VVcYLYNMUB4iTbRnstNsn2Uq6hQrpFhKQDuBfN2H15M69hchEqbFWNsRGps5RpRqCdGjJGTNpEuxPy5jKHXGX",
  "key13": "41bhQ9snTzEM8diEmLWKFQf6zXe5Nuhc7JNMRrybgxRgqJfMVArSvcun6SWPHWcbFawNMD4RVYn18PZguQYfJqYY",
  "key14": "5MzDTcrhvQLezcdjD1V8g2r39WVfLBbHP38Mqqj5UZYeSfARffKaEGKV9N4wuoB95Bcsidu5L37CfAoQykiCCw2s",
  "key15": "2w5fXDPLbNEhvbUXXRV3ChGKdkrBvEhLymvnePD5qhg1u9WACPzGxUFtebwW8N9fKhwvpaSf81ws1cGa8fu64TBs",
  "key16": "ENa8V2Bf6BuEvSYr8sZHZTGYq2uV6yGtqroT8RhqHyzwPvT79dqfRXjXZyhhgggJhwPvmcaueiu6jfwLwLBi5cd",
  "key17": "3phDPV8mVVAX47wi6eTTG1NvnmfMMiPGsEpQFZk3TMH97PcGMF7FeZ6ed8H2qzhKXCNQE8JBK5XrRoE1riwd8vS3",
  "key18": "2vjhiwcAx4QPkWS3jg13V81GEJzGqgwfVftTZedcK6qzcusQXoPzy9gRxW2THbcAQjtwdLWknYyvYD44ogW7CAE6",
  "key19": "64dZgXNgjhofo5EcJkhn791SUR9CHApveu7FAxffKuKgqNy14kU4gptBcr39xsUaSafcK1NkqtEvB5cLzBindW8i",
  "key20": "2TddZE8GxsrHQ5gW1Q4FHaqWFpwBxBCUs2jFuK1Q5z2Wnu3qBowVx4mo7WGpnLs4qr4V9KPUJFZtiVb6Ck77j3U9",
  "key21": "5uFKLgEeYrr8B6ZrrGtyzziLTYsWjBBoqfQLnc8RgVLssQgaPoYDWTTERwj62nLMfSPg3j3wFv9jR8QdnAQE8Ly5",
  "key22": "3v5yDGr4Z9HooRLR7Hv4gTL4aq3whu6fCiVJt92VGv2uLudcEhxu7iVx4uj1DMLxGE89kWwx4Rqr7YxN2Fztz1Fc",
  "key23": "fXurX1YbSrN8aqTKufSXmMv9Ss88ufHwbRRjzsy7N6MPi5aNgqnyW34k23RLzFkZtTpwytg9xfLLxhLV5qEXUkw",
  "key24": "5wCm4okGQL36EDhW8o1eTzhc46WgNay5cCNw8fsZ5q8vbhXZMUVSvc7obRgWv1tHihsRfB6LPL2xBGkoyDJCsA5d",
  "key25": "3c8WoEAuyeqiZZ2oTd4M8GF6eGhv1M622yRXPT873TggbqeDNf2apm9HtAS87r2vCFxVXb7SoRXWCLCaMqj4ZJgw",
  "key26": "3LqARmZoLh2aRfJ1HqX1CxhxR9Y5qnYYHK6EbAYBQZ2KUCCD3BFnAWNVksd6bTfNJojXx1H7ujvCpXaZvburD8B7",
  "key27": "2uEMwRbxmmFa45wRHLBRoUYtozJkEWYvoJuTpnRo26uV2KTjHCXtvvu7kZEka85P7NWiKgaAVamEsw8pWDgDgyXS",
  "key28": "5xG2GM9Uo9Ls9u6XYcPeVNcwaQcvHVX8eYcqhnt6M7vJ79CYrjUTMSQ5wRiweUsJeKUN3VSzVRQL2Ypcb7Fxos1q",
  "key29": "fPNkhoF6ExB44K5JdGYkESxy7oho9ha59r4Es1dYbC9jX6qUWCAK22SHN1suUGvyWc4oTTtEgoHDPGiToZqkkeL",
  "key30": "hsHq1sMQLCGs8uVBEWsYVaD5KCQcJa5dGqZE7dwmqUg8aeZfL9H5mr5z5N81sLZUKDZnBKcvMrDYbpi2RQBgSxz"
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
