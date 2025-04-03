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
    "2vgcnff1tbX24hdRzBX4HBgxYQCkiTCwJLnBrp6YVuiiUwpEK9fuqcafYgSLw2UWfU8bzdeZfA4PJqx4LNAhBzUr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cvgdwzikTX1iX68v9L1deLE3gByv6dmUy5rNEHddaXex197ARRWeurU5J6HC313Mdt3GzTiYBJMtqahhRvMQgtH",
  "key1": "4LdmvceuGipPbeSpGrpC8K6PEBxwDWUjbbLsCNuZpZarmq9D6bPSWSV5r7stikd7eRJWYGVMxdC8j9bmVvSALrBN",
  "key2": "djpKVbXfhxodisYhc96aesjYzHtPGPHNhKwQ7e71F95FJyY4CxWFNFG6Xth8EPRcESTAuQQb4CgDaF3JXibM2MW",
  "key3": "5boH1yR5degs8LZe8ySzFFjyhwzevdVQGpHm5RAsp7ApcZ5UUquUckV2gY9v78ByvDdNft6BUXdJxr467o1E1h9r",
  "key4": "4yjZ9ewBXJS1JwnTr7ojEMR26ECQvbaqV8HrJanQGbd9XYGPGUNNN4FfzrkdWgMo92M4nuzoJ8sRy9C5W2oFZ62E",
  "key5": "3kLAtC2mYwwg1iaZHBExfffPfiYeWB2qSjs5nPMvDsSkABuHgg6kiJxyxZvSiTjqaBhuzD4iXrwwuCmdogRzsST",
  "key6": "3yb4Ww21319ttnVmSF36kFqzGdLNWS3LNJ85uhosd5Gwq95WHo27NjMqzcrjRBK7mzs8sgyFzZgxfn5N1TYSYPBT",
  "key7": "XLD915UirmWUHYEmT1ohRT8GH4PkfugJeAic6eg7WsEqAT2gXKxV9bDimnzsH62PLyYW9s2uACu48EBMdeHWU3v",
  "key8": "5eHQehu34F61AX8ZUK7BkcV8MmpvkuNzcUesSh3xVzoyZmbSBZwvn43pQUKHAWkC31pcC3KDX8B6GihbxGFteURN",
  "key9": "2VJfWumw61m4PGSYN386YDXC3WEgGwT1y4rhZWHnjCuT3wUem6u9Lh1m4gqXSNLvEvDn1uCShAjZBPA1e1e99Jga",
  "key10": "2uxpjN6XYC1a424dc3ieEZ9Z84gevxh7LETieguJErFajb31qcMUJUBzyUQ65uGniHoJPKuGEFzVAJ48ecLQW8N7",
  "key11": "wSTUb6x5541nRE2nKY2RQEBxsSEbvMp3sJtw1jzyPHSDNY9YR19caKyzLApjoKKBtG2Q8H5XzP9TmN3FR91SKz2",
  "key12": "g9tPNNHbkvwHEwnj6ra8BCNDix7KRiX4HkdDBYt4GvtLHABSM7FAdxH4HnHZS44TY2RLhbF53kapZZ8K4oDNcs7",
  "key13": "J8Lo6RbgUMPR8y7qUWdkKx3JehUi6gcL4keTi9c9yZcG3pLjhByaLEdTDWwbaE6iwCfLooG6oKMa1z6vqsRwStH",
  "key14": "3Btw4tGwdiKG1SFLrnGZ4Bwmgt7E2Z5JkMHCusngEJGaz5ukS358W3XCu5VNzNLUQ3tPU3Lg7bbUcQ3mfTg3M9fk",
  "key15": "3cjixXpU7Y6wqjFPTPkXpurKTRg79tF83hMrCj82VqWwV53Zqc7dw3BrbCKUrixb5opZMNCDKiLNvsZkdkWw2sdz",
  "key16": "YTmeh9JKaRZzEDT8jBkJLiY6aDgqT2qaLUyzTVwHBLVHwhzPY8y2FCka1Z8ykWJKRGR3FQR3BHUuT2shEKvN2Nf",
  "key17": "56DUim7nL3NX93nGjja3PeC617Ehd5WJ1VjrPVuhK15r73yeZzkmd9u58SKhfWDNCkPRcwm2rVKJjE9GvCwAbrxk",
  "key18": "3PiqdLozyBZu2stsgGmGiMDYb8ow8uJUo3CoY4DxTE3SygTARhfQtQFCZJTEfCi36gHaCu6hSoXyNFgDDLiBiVB6",
  "key19": "5RfuvNQRCUBG6BZA9KFxraewmH7aQCZC2Viz1Xj8w2UUWNnJeCtmW257LZpy8pusbJgmiPc4RjZ7ecrRqYTnSFJp",
  "key20": "3vAR8bJHsX4Mtffd7vtDtRGWHJEaX9aBSf4CjBhKXDZueGDTgYvsiUppCatSBxUtPv4fSP2CK5cCm5S5kvSbtkio",
  "key21": "2bqX1RnVXorKNaSRQRGrzqzWyZ328KcEvNMidnqkM5mHB7hXMeAW2QJpf9KdQXNSZ3QV48PPE2pQuK1v4BhGbaGa",
  "key22": "3Bu2Rs6NemVvFQoPheWLEzke2jMY6uR7WnAVtPn52pcpA2A4pSfn473sAi8dVG8yrkQ9boRrMDzuEwac6t52woG4",
  "key23": "3nTHQmfxAU3wuXZEFxvUsM6QakRkiHyn2VFU6A8Whvi9xeND6Q9FTh88oARgccb7yEZroj7NM7TieARyVJ44px3x",
  "key24": "1MLCLmSEBssmZjE4Lh3KJp8QGFsYUmGp9QwNbNWL6kBhn2YioPBtXvGcASZVfPXUo1HAxu8SpqVTRzv6rS9GnSX",
  "key25": "5H2TbXbtNFhDKzdyGki1e6x3c53oNCAdgw9fhj4VsatA5bqQRPbU23erB5yfxEparHsFQBJXBS9133epX8a5gfiz",
  "key26": "2Dtn6t879CPtEpJJi8C76ZEeqUXYx8B7WU5aw1vNiz9xA5UyGxXqFXqMjLqQV86rYd5qJDkkPtHF7esaiapE2pzZ",
  "key27": "2vK1DAuKjTGCKjhdKa4MM2N1T82rGtCtvS9fxTy87eKMS6kPWo9141YeSkvSgQJRZXF5vf5UKhFhVf9ZUSP1B6j8",
  "key28": "4fEvLNpwe1NbtLKPZG8nHcEpnmYgCJ43ytybwTxLcLRT692c3f3EDH3C4s5EnTQx5JEDYHq9SJnzj8vuqNZDizZF",
  "key29": "4svJ5jcZjaNjNYdUJn1ApAX77LEM9QcPpGSgDXjokGwTmX7vprAzCSpcrpMP942D35LJX9psWmhxgYeKRcxmLDep",
  "key30": "4EQUqyjDgUXFowfwnApftdwGEXaJ7K5HGRRVuFdYDWpmEJm9XKa4NwwegwXjgyqdQJd5P1smhmoKS8UGzoJxV6GJ",
  "key31": "2kTkzmvhucKLJXfa9VNDA7MWthmdsn4ZzFwegNVmc1YmDsoDwrd2MqAg8QMUQGRC34YdReatbVSDHB7EihfkLNFS",
  "key32": "586mowc9HnQYjXqmbeYbeazdP3x1JwD2zuDBdqMnHTnTjaq8b5y3Tz1nUGpehdPWGhjRVKx5oTykvrBAF4p9iW18"
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
