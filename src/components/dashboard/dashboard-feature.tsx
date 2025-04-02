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
    "2iEjo6EfmwHZbq891Ajm4Me2Cmiy6xSGf3cJW4uRAtz4y4u3V6qMZkvFWQoZE3j71uhvGbiKxBmZyP8B5NQmomTt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KnCfJFkw6Cbhen9ucQgfSJFdJPaFWLpxe7WNh2fYp5bUfgcQ1XsQZuiBhRUpy42QrQ8WMscW8jS6sbwLvukLxDD",
  "key1": "5D6ntwoUjF7CurdytdH9RDYYDLXBEbhYyYSpTVzDAvvKRL1osmSdroDuyzUhnMJNNggu6qXB8mFoTviRQFGNZgfM",
  "key2": "5mU6Meg3XsdQVcDeT1iFD29H1SJLQQhxhpExY5xaCHMxxeRBN6JE8MgA5bS9t3JSoLnXgwxq22KKgPDcGLQJC4kj",
  "key3": "dnT27QsK6xbPhg3zjaGTAsFi4smzg8U1vBYy2nJRmJ2m64cFTrGQkpZJdDJYieE1n9WHtjh6e8zvKqADKQ49Xk2",
  "key4": "4vmktCBvVv4eKVDk81wvCVS2dmUpBoZuKyaqqsP1m2rst7wGM3DJDUmgrhYx82arpK1sUaiBosLNF1nTB1eZFRCS",
  "key5": "NcgU2KEzcuuQb6YHrFZv1e2CYxAdHcx7n1UiuNE47UhzFwceCECqybDzZMgZs9oVvLr188hSv3p9YqABSM8UKRL",
  "key6": "5u2MJp9xzWWM81dRTmmQfQu9WqTvAho5ZNHJPh2FHxjhYRKASQ5NXoZugCs2G42D6y8Y2jr2vkTXniEpMSFuhTzM",
  "key7": "5gK6BSmRD53FFrrLhco5c64RvGKi8rkvongvXjXpwLtNixKCTLH19QUpp2ErbX6YB2b3iZ9NGk2ZehwB6zuaj166",
  "key8": "2rKoR1f75z9y17pow15P4rSHYKhwT618fZpj59fDc4ocjynm9LgsvbDjMTtFwhcYkUM2wzU36w6h8Uhb5nqTA9hx",
  "key9": "2cCKYEjtoxYpubPDffybyH1yZ62h8rq1EWLBKEwhqqyNFtRyDn9MzAfa5SMkqXVC7WHREsWz8TTcJy42tgzkvnv",
  "key10": "2o6NDhqRpZssJYKc3gL8T9nXXSYXRCTYgWpkLGXmpkNYT6cJ8bhimBK27X4RiKeQogYNBufJf3TKFG6iFMUoF629",
  "key11": "K1kovdm92ntJzd73xgttELbbbZs7DEenHC2xS8qAzRJ8VqDnkW2HYwPoZ9srPNcX8wUsTTPugZSC4wQcVhMCS9A",
  "key12": "38uggKTVmNXy5niZBHurHcLXTr5YMSbMazpbKcFCNy9qfKQfjK1JdmASaQZSU9s9FDYwSeF3NrvqasAC6gedxLKG",
  "key13": "eaVF8Vmz51QEyFaHhPLUKGyZ1wbou7vg5iGCK7mURj3gVFamxY2iWs7RGCghFFBabXrTzYBNWjuZa9GeWvD3f5h",
  "key14": "ujS5xqDonTRCarunmC9gsD9Ls4hsxodyBCZhw99XJuRFNJNEiJ5cXWR7bLC8aQaV6DGMpPNbHoWgVsipuLdQWgr",
  "key15": "2rWx23s8zYcTAPNvWP26ksxiuwxf36STCgbPCwdiY5F1ekQDwmw5tWNwwnBm7Ji4b2wiSNUWp12TLBUUAWpMbMnY",
  "key16": "47KGyBPtmMJAn3KgKP82tC7taJ9neQ6RN1rYtYLpCSgKQkikU1FLYatXUwLu8i6uRBeG3YFfyTxrwJwjtXGUDvYM",
  "key17": "2veAFj4btdF4RYquZmXozEgY1gMNehnxPF1HqEdLYsUvW9pdd7NP48AXiQJKJDaEEKYWu73tGgEoJ64U5K2NsyiX",
  "key18": "4GE6NqVHQhwNzeXB2a3ez4oVcyg1o7FKX5kX6jb74LHm9J293w9raYnfVjBo4SYSJxhZJZBDw6rAae5cmcQzdoFJ",
  "key19": "5vTHYHCJcw5qJGwybY77bZNo4E4ed6H2aojoSupvYpC8V6Ptav2akQbbzJwLyS8agWdfMX4PGkei3Ej7eCQWLMDi",
  "key20": "2tGxct8gsQ7Sns8gMi1LGu2Z6A4qY1atHy1SFHwG11MvEw9BucnA5CyhgUoRjwKkUYz5VfPCvkbPghidWXNxUL3B",
  "key21": "4dZHoCsdJcVfUjTx2yGdNUVKFsUdzX6gw93a5yZi6gup8qjY8ZaLCXoy2fpWiRQp2u7ytg2FyDxBHERHKiWXXLL2",
  "key22": "4kLCxoBLk8WTnmsLL7f5UYQQKo3BtREKQRbZBhjF4WztfkkrKgtvVSzheg6opVeSUQK1md4BJfUoNvBCm2ow9M58",
  "key23": "57AAcsGVXT7fyTvxvEVFksAkhBqdiZ4fFXe3traMmtht4vgJ5k9av53pHT4brNgLsxiGdRHtN1Tz92Ai1uZ4hu3J",
  "key24": "U55jcBjgVRicpS92MyjUPRjf1Lp87w56hgTHYcUn5DMGiyhCq27pRteYjcN8p176NDUyYeuCCVRiH4hc1vSfpcJ",
  "key25": "4GeQz2cdJwZxxLMGhjFK2VzaGqGJHSEjca8EAGyatAU3AnsXU8LnYYENsS6mrf7FErBnPirNW3bpkSg3PEVsTgAX",
  "key26": "4WopaN4h6weaySomYKouh4fucnH4d8f2YJPtNxNsGpppvosEUURw7fQmVPdYQsSTouezYnsWdKmoeSA76Sj82T8b",
  "key27": "2tRAVhnyU1KsMvzN8EZAXgRxrfJ8Jz16FanjyfDB2AXG6ixfyjZHmr4a4b4BZD5m1MFtqpznskP8sKkPkLHQnPZa",
  "key28": "5b7aDbgPHVMVmhkXADQAUdxGVpV5BhC3CBwBU7yhBVddUzVCmi7LqM6oXLCs5ensfHb31kmDaNk7iNAinzVkfrnj",
  "key29": "3f3d5PtEVRFc98UGEjHgtZhvqKfP72JC6bjhc5RDzfZ3GidCVFj937e9UGRMPmL5TpBDfp5uxmhi7dECJessR7of",
  "key30": "2V5aJSkCcQEGfyNHrY6JjvSJCUzqhdvw1ZNUZWUruCjc45VgF5KAncCo3TACTphVrPE7SaLAsJh72VPQYmbG2oxR",
  "key31": "4CL1Tef9fBmL5odRQ98zRUAEeGkKjj1Yk6BaArD8X36nYe9P9VzhLUn18C3wnkpYRCvea7paebZyLxcpVt8VZ239",
  "key32": "KwoY7sCzKriPZ2tVx7d5pQsBTxJoQubw5XsZpX5QiFpERjeztahqFDKEQTpV2mDjbvsfZ7ew7ziVnwfeiwmaoiL",
  "key33": "bd6A4dLDiedx5vRLfwHXSuduAq9reKJAsHv6A1dXNPQgv5x6NoLg7NAAwVg4DpH2SKE1sBN8KaK8mv5yHqdCE4b",
  "key34": "HBNcRzAfLc6H4iVxqLbKRLuvcbVpMvxRJc3SZxWURRV1iosMe1dusiooy8j9dHscAHGski1q8h6sRc8bGt7RW4P",
  "key35": "4e19XVqa9ZNbaYJNVKg8gm7BQJzzEVNf85j7kokuWQELnhnGCE9Ht5MDZTzCxpWVimYjK3e1YnZNsJWDt3AL7Yvu"
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
