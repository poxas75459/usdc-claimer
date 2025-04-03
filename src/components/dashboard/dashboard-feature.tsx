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
    "3bgfDVLD3pf1yNKB11MtmsCwMzm87joeziCL3CGr9SqjpfXwfCeCrWEBYX1VQPphnWWoob9zNAPDyUCTvSMf8v6f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9GjYwxarCEUVoARGVMso6w6eKrqvqpDtQBrTbnx8y99aseFqrAYs7jqZrb4jj2LnECz8Qf34D98P7V4xunahHeJ",
  "key1": "27VHVCsHjBGwkhyHYT3WU2nfGFywSMug7uAades1zq2twYY6PE74v6ZPfK8uXrDT9AwHFnPhNu8kkBghwpuvBXA7",
  "key2": "3FKGvNuV6ezJmgr9xUNyGfJv873FsYaDxLhmq8E3jYMYF16Y3aXSMfFHY9bwFYQY9GLVzWLiWWj2xcV37JEvLPaT",
  "key3": "5ppQQMbHXrew3Ht1qMGSxaGAqWgH9rqTwh1hDmr1zTfgQEQfz7optTPgJ6KM5kfgE5Vmv97wEePb3c15L6VvtMr7",
  "key4": "4UrY3tQiAcaSRKNBJ1kSn1oSh1Gw1mibw1B9aunPJYRR9ZvmZuiKkwtMjBLskHqFxi8i63QqqPG6gMucj9Uid4iT",
  "key5": "2RXgVXvwNYtQ82gVCE8x5zsLiDpLzePh8KWVTjrEhocnqi8ox3MX8QtxXpZWMZMBzykzCXfzEKPSUuLUS3thh12s",
  "key6": "dE5oSNiFscktnbqZaCqNonMxAcEX3RyMYZVxEbyNvK657tUMcHg9T4PRJ5tPxmrReRKmNF9hJThbDy7zAY7ydaq",
  "key7": "3w6aisbAiKyvVm6Mod3RUuCMgYLEtxfa6rydWWTqF8ar8VMYHeFJa6irCyfEjCktjsnZ3TFfe8CdwxNiTcdN1obZ",
  "key8": "5rmAfFY4oE9J9gE1XzAY8dNBzfW3Zrcc5NP9uhr6qjdoEKrZCX9Sq453Vo3Kqm2rUUhAby8pr9Jdjv9ixj2UuvgH",
  "key9": "22F9iKTjv1TUWRCu85CJcsUSS5nHFMUyLyRXCHpToBamp7u8W8yWdYFRWHMLsRiswn2NTyvtDYSgHR6zF9JmT4z9",
  "key10": "5oaQ53yRnQQLkBsnJWPxCHTbSDcF2HA2GhD8U5eLBLHpTM3AMggv3tmhENxMCRHYVVextxfmXNpRnZAwPhWAWHkD",
  "key11": "4ZSXmCUYGzwueNeHyE2wrQAmxBUV9vuDPwXoSXoCTNb7WVKCSKwTvhPXc8v6de2PNti5i3J1LnMUCiFcEEW2w4iZ",
  "key12": "5anU4J8jbtuqXJQjNhiYZogWwvuVEnFSZ3nU3MeP4FXwA9p5dmDihUx2S1PignqiwrRTL4dvFUCKeDbcSWSA2pZV",
  "key13": "CCfs2jXguYt6gt6evrEGJztqx2BcrMTkGoNAZqkhHsCE5zFf4sRzM9jZQdsisphSkMuC8c4thFLTqXJLgS8aj2v",
  "key14": "4vRY7hdjK5X3QgkWfmmkUTfrPyenJw1kEvhk6hT6dLf4cGMaCSb7cnXK2A4zosVmsDSvg74zKS9SDWqipCLhbMHH",
  "key15": "3zqw3HJP3sngc8fS9axVGrCGMdHFuTxno8r74fKXR4ScVS72pjJffN5RY32tbq1ej7AWyrx8zmsDYJ8UjY1ExA4S",
  "key16": "58iq7ynQRoEUvqaiNAKLDeaK9hD7HZb4RE5CKYwoo1JEaBmMaXArQQ9hWLvtMRmgBt3RBSR6XSTdbRsFLCy9Xhh9",
  "key17": "51KiCc5DsSSn6bmCQpkNRJRdpgWZ2Uqjhr2cKnmi4Fk6nnLWYtdLnsdtFCDKrSDZuoKNpnmeR5CaspbGGTCMSUYE",
  "key18": "4Gxzgw7FsSCvHLnewksjJHThf1YS8kUpu7J6Kkp2TwYpsojHeuoQeF5R3M7PQ3V336pRyov4ZgCZyftNgidVVPWb",
  "key19": "2F1QkYPJAdqJpicT4t4VGA1k2bmjq3eZ6tQVc6CANdZLCPqTio9AbRYf6PMcm2Sgi7smbcwNyA73TK7RTNwCiVRe",
  "key20": "4dyWqxULPWmGQHZiTRz4GmEiphfNXs3BfTq4ERwcfRR4wCHVu18ugeEV6wMfXa3ZURsDwpzAuw3ri3BmrS7q839C",
  "key21": "2FQM5KPv8uw1GuUfJ9XN1ydhAfSaZHVwQ3EgnADhrJCzTdybt8f1QfD5wJ3AMGuU7oP53XLQ1Nbxt81jfdJeJ8wo",
  "key22": "M1Y5VaGq2g7uHFqeSv3DYLpNFgkvvWeKzkQiwKtbSCJdn61DWjSkZ2J71DkPHvi7oQcJVt52BK6eWpdwi6PNb91",
  "key23": "TYkhoUz6RSJmBJ1tPdsZDYktB4EzmrE9uwAuAuTLCknnKZDDyzsb445ZLw4E81D7Ykf8vmAJzVZTBqMy8BG99Zb",
  "key24": "2E7L9HusAY8j62rYEZzrWvmydQ3EwPmsRxn28XNoqGNhjWKYcXF5CEQR5KR7WHQwsDN2f5X8dFSDyqYfD291Z8Yf",
  "key25": "4qA2TGAEY2cAJBrtEPJkb7EwUr9qCj2uEJjPrV9C5paWFghjDeaxfSyFzw6WSV7WHo3uQMwivocw9D8anpUkpzVx",
  "key26": "65Pu8WqAhvne2AuErRZ9ogaNc2G3HDEURuxTScy97jAvujTTK7Yk2aHQ6Tj9uB2bTtiPeduAzCWMXacKcGs6cawa",
  "key27": "21Ktwo2GhQNen3b2ec8rUfZpqBUwpeVfRMgNYREMNySEQ5Rqw9RaHkmEbRh8zot9WpqcJJG3A44A97oBKPsjp69c",
  "key28": "3i9gG77nBNJrbrtMhhv8YX4vycxv3AJKwyWEzKEB3vNQnBNgKiATQFhPJCLyiLqiCE6PmAKnW76KHXjDF1NWG6ox",
  "key29": "3ADvB71htMLDzQujdbsYUMVWDZANo8f59V2cHwiuUVaxNwYugWjAtQbtQYsvSwN24QDav4aaRgo362ubUABrYv43",
  "key30": "5kebjFfUYkk4A82BpWUosHrVrt4zGWmJU8dtJQHv52CWkSpWs5g6j1ZoPJAuZWwnRatuBxjxoyzdGPPNUnWAMBZr",
  "key31": "5mMTfySQLGMBnbVaghjKAYkd72byf2ezsLhumoKnYBTdCcppaJ3QXvYAv22bWDh7cRPtS73yrzXbiWpmvu6zjEp6",
  "key32": "3VMcdvmWyXNAbx5Hcv4LzexBwmVJPgz4HePoDd3V3UjwrsyYXMgAL9aBuXiUPuo8uuA423f6JeEk7RinczJU7Zfj"
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
