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
    "shu98pTfcbt9kpwKsu9YqG845NWQ1vj6QSFUwyLVrgLFiuPYaub6L4wUqtHe8yuEki4FNPgEF1MfhVKamDjUhpA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EY62JVj2jWcpHkeN9awik9D51AS8vCaUXQs9Gprh8mYL5moQwm6G7dcC43x6WPLJaaCsZMmFnEkRccHEFk16Z4h",
  "key1": "3AmaNjmhsx83HR2i9VoKcfaeEY6JDi68gEYXYWaWMuZfn5f9Bkz8eGuqxC1dSG9i2QktmDMAP3XFa6WNmCAUtt7M",
  "key2": "3RSpPoknZP4vQaYbnPugUa5sgrNEZbgjVkgN4KNU24HDKvqESYYoC7q7TtyeeC733XRzqG3VZBpvZ1ytNEgx7thZ",
  "key3": "33SWCbBSph3dpsqMQazW5gSoxrDjrJtxUbc5Be4wdSK2n9U3mFWWsvhNZCkvTt7dbavPZWfqQ3XLRVCyFnkLAaCu",
  "key4": "5FsjEXioZz2vtyZe31c8pXQH4SLAZFDf5BHEhsckQZheP1FR8H74tMyXSF1H7e58DCP7B5ASGTXSFQ7o8t18H57",
  "key5": "31yNbPSjb4TshFA1xUyxFKDr8s8jTnDot8ziV6jzikMb916kB4KJWNouHtD1hKSSRvT2iayh4cbnpLJguRPHGMk7",
  "key6": "4fHMYFGjXebpAirZ92RFmLUeahi4iJoytzV2m8eUvq2i4YDQE97SNfp3uov3nETzzdofH2bTZvFSPEd1Q2jV7FBb",
  "key7": "4oLkpHPgUK8iWFAxXLjAVuuTK9cWZi4qz4iQH6QvCgrzPdi9dSP4cbyHbubk4Y44pQEPWiSny3c5LdAQXJJwZ4mB",
  "key8": "36sTDGruwwrmBzCoz4vY6CmCTdwb39h8isqSm9FgA1HkMSs5Extk7SdFFLVC5dgaYZLqZ35UGfhvQcXu6S9xDtjP",
  "key9": "2jWao71LShMam8b5nLGEHUfaCqEK2KdSGvogeG1QhrBN4MpPdxUZ8YtJKmd2abMCrUiafu8in5AXu37wJCqfwsea",
  "key10": "4k4vhsvpm2k3bZFGQgwfY6BLsXfHBGtPjKYuCQecukAX6U3gz1MTawK8rjPWXMqEPeNf4WH2WU1MpKfJCgpnJLgw",
  "key11": "5sxpfv5TjpvWoF5DGbZ5LHsQ3NuGqKatjPYs7ar9vqdVCPkkpkiv4oLnsxZJdn6GW1SLgPoGZtBd4ih9b3esgrgP",
  "key12": "5kriGjCXS4GFKZ5VcPFQtWqT5ZCo2jR1Y57zKt1m61CbrHSgiiHCMC6jEQQnqSuKN1YP3VfKmXTVAqC1jiVm7uNd",
  "key13": "3hL2hWQcK3Tjo3QZDHEsxRwVEQuGuc5Z1J3XuiVkMUAb7TBwdpXcuWMBf6u1nwNDAZv84K4TTnX4riJwHhUwGYG1",
  "key14": "ZTN1cYin2MEtN8RtSK6gpWA2TaHmVSnV2xQ7D7x2W1a5eK6dLbDuLs25P9bKgTKdRVkMeCS3oLubQxEgmNKQTbX",
  "key15": "2FZRK3Fau7QRXAdJgNqAP3gZZkEuWZZ53FLpKqhz8Lcp9ymwk1ac6VLawo9HQ51SNFjWnrb4b7uR9qiK6n4Cr5uj",
  "key16": "5zQrWPKWgaDWiwfBsnbeyd1JVYjy6v4hENM1tqN3dQw9fadEeurZdr1J6sXccc1TqdZ1W6pqZBJn1zRLCZXbPj7R",
  "key17": "4NrQ6LSAApiRnLfw6oJpa92Y2h7m5dmnJAZ8bDBb1bqYXceu1uZRTXeaM4EvM1XpuP47EmuCtjqPfW4ECKisFsad",
  "key18": "sK1vi9mBRM2a7wKo3735FfTGhCa6fgHe1c9TqTThbg5fVUgd8iKxhJ2Zya9yFjPahY2Qqzdji4RD7wmD8HfwJtS",
  "key19": "86g93K8n1dBbRnhhXdRpLpdQNGYwZTSGJzsuhTdWCLSJM6h9Q6ZKCSrwQmAqD8iX3hJ1zDsdQJAcEYmsTdXk5Sz",
  "key20": "66gZ3xC3yJ6d2UWA3EvAUUM5TzSdDSzDaXqHK42zB9fkY1eMxXUXtZcvNByVntMDQnoAdvcVdYCg37cdyyZsYQWF",
  "key21": "39QYzJ4TzmuwZ6KJ29omCFstcFRDcKAeEBjqT95TBLTKJVFhDCjF1qBsLJozUGTpgcQPwvwGDYy7VH1YJnYnnV69",
  "key22": "2HAo9MwpcPeUk7fAMkLEZ61Yt7uzkwNjQSTgaVqNJAN9hezGjLi99qcqjNSGUpnyhLe3tmAHBGAnAxMSiGfmdxmk",
  "key23": "j2xtKRdSnbHoP3JzfpUn37FNzjpvf2hsPuHpVQund4kSbinuWPuRdGVUysrotGv2wXDBxgk81tDh779kzRfGhGt",
  "key24": "JKpWa5CVy7QBwaymPAjWJ7LzPDrmLER7VCa1dgq36QaV4YUz7L2uX4ix6JbFyGkjCjQ4E2sueqXVXt3GRcXNzd8",
  "key25": "5Jhq6qXhcqnFmDUE5N6sXS4y5pwASPYba7btymcCh8QY4aqaH4XUAocvHr4YDrQztGeFdZkfnsPxAEmbMq99A3jy",
  "key26": "5ihqrjKNibc57rAqNYVWuBWQJ3jV1o4ZcS4cmUoG5gfcoRe9ypfCPHvyWeTUy7h63fGC56rrxdxppC9xDtgvg3HB",
  "key27": "5ijPuqLmhVLm5LJF1NQDufWMarwXJ4dRZTzVqK8wV86azBo6JVmuNV2SiEUVLZAXZGoBERU2T7Jp6tGVXBqKTuKV",
  "key28": "PZC9rErbH7o4TnXw5yGNMhSdB7LLsrM9EyPZ7r17b8PtGFVz9w7S5Rd6foWaNis9sprwC6teXqgde1NfFnzUmg4",
  "key29": "48tmvdwrC7ugcbQuJExnQBvKEXaBv7eUxr5UH3mmpLKTSJEeX5c9WQRVanNnnHaLbzpCu1b4Ht4YE7kVnJ1EaTn1",
  "key30": "2QXtCbYJkdg6iRESVgpTA8VRKnJzZYc7uYhFcTrnPW9ZZ4XwgCDyLpAfRuHWJayrLaY29w1GhEkbTkGJuZFFE6wZ",
  "key31": "3dggey6yXxgTVMV9PgmrAFeGXYmmjaT2vaQxMSwHEhc71k54SVsmqg5dnxAV9rUdckZ8eCt83MfdXR7ezTZPUaEN",
  "key32": "2kEs5rGmfPymk2gJE5biRZuGhPrZ4iudvmEH7NoV3Csj8HdwC8M9uuS54Gh8px9Y7fNc5JQBem3bkR7oUukTtVKq",
  "key33": "5UrskJizeStvRz4VFKU51nKwjXoWrHaZR1ywNvBTu6YD4w4WPJdxgfrZRmvcadabRuo5Kop5t51H4GuYXnVAcHqT",
  "key34": "Tda46uuiHdbxd9SNm4gDGHyLJsX6abT4E4pxYo1jASWLkLp3Lm5ZeXqezDjT4XeHq9VUrmWLhgzR9JEmKSKw73k"
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
