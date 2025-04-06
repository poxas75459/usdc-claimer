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
    "GCvCa7mtd2wuBPcZDtj3xPAk6ApoLfC79Z9STFzdyw15Tme9uDDzGifKm5dx6PpnQ6dtqcc5wpA8AgigSKLVJeC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59dYxkzH2xAB7omgKaS7mciHZHuGz9XNfVNxge4Dcknn9tZHGxn41Gk5e9w7HehK3oP5kwxZqTj56UZKNUxZ2BLd",
  "key1": "38feaYR7p5aPaVv3VDR36SKv8CBQVfqs6dYYUZ4pC2PDsm2SqwQxDaP9wjGxJghBb4ntwHaxENV55kmwQLCNhTiY",
  "key2": "6qWnG6NVzirmoJ2pKrwVNzqLrVKwDi2J2b7koivdgUHCqKfqkQCSuyNXEQu7LaGdjyxEGyksseJX4gJnBJJgsUL",
  "key3": "2cKy87EtyrzUwD3rdQcN8QTQ7QcttzZHtN4ioTphW488YtwcSgeRMLrpin16DNrYdXtqLkC2igJHHRZ7dcz8paUR",
  "key4": "3qoBZAboVb1kV8yJNQBUAXhLufJ18myfPPBLAEMZDKBHLvdxvyegbUanCqQc2juH27DVdFWNjFC5nfXGzhYqaNuX",
  "key5": "5aFQJo1cetuoMGtFf47ziH5RkujMWvKyvr5Q1asFaBJ2FK99aTe2xjSEpdMGSvvqMwkAUT3wrU5XhyJpLpUSubpQ",
  "key6": "2sVUDn4CxnUg92BUKjmVH3yhTj9CS2zGUBtKYKyk9V1TUCHQnQHyizFcbEJqJwoj5XtsRumvy92q49127fct5bKh",
  "key7": "3ZZKxeHZKZ7DeRWHdmLccC8B25WgTtC2n1hSi2uS7Xtkpt3L2SuV2xEdxuYdtVnPmyNfPdnYLRoDdwyL8KpuFeFN",
  "key8": "3BhoaXjthg6aVkXSNes5fyjhmC8gCmkag6PLnjKe4h6iuh52JwcBLtEgyTm1A3vi2WQx2BkzFKx2EaV1tJskyVFG",
  "key9": "3sXrprg243dk7ebQyXctZiQc2A5JwXuSxj7XpgQ5TsiSK4suRuLjEPTCNqvXUxFwcDghQA8uxQ6H1hWMg2ShNfcc",
  "key10": "4tpiqgBZdwYocwqANqUr6Mccr9QtZHaTqZ24rfZQQ59giUKwKQTKrVMvtCCqWDz8szDpDRzzCqUTWtBts7fqYcai",
  "key11": "58Pd1RqveF2TgEFkp1nKYjdZZopoAEm25zHoKo9tHEhLSW9GccWdeDj3LH1kV7KYav38pPo8xetsMGGrihAbVKUY",
  "key12": "5goX6mNJcXV1MqArZ291L6t7TgwRnhFLAVCpNeCBNPYPsQxkeGT84DxERFPBk2Ks7yCfNnbeo3LiafugJSqJWMGm",
  "key13": "2WojdUbXJAwDssfSdNwJJvGoDBxVZ52TXwu2h372AgfAPFEgpmKCxoWa4GccfgGH6dxSL2sh9agz7Pama8UUUgxi",
  "key14": "JogbAbxLgNxviW1UeJShYagWrbByoRSCoRW3q4Wjfqr9f1rA6m85UnJnDm7K9Xs2Re2QpxujZB1kyB4rkybzV94",
  "key15": "5Y4J3DGwywFEMLDBdEtt486gJ4QdnQxCBdK8yyQWaY5QfrCh9c6gboutnXT3a66Z3bEFqvkowNAx2UbKgcQM1VL8",
  "key16": "2UniLo7QrEALV3eeBY1WTYsGwZmdcvqy3E5wiByfH7btZZQ3ATb2uSQ3fttqk6gjKUeCnmATxXUMx2LcFzGVvivf",
  "key17": "5A9Dwm1TMyjYmaEAexKNgKBLPQdGMfMDYgkdwnTot5pNMCFkLbe6yJQJSgYSMH49crpryH1aSKEFZU35j7cDSRk8",
  "key18": "3VgzK71JU67YkrAhLHxeZgNdHH6kP9frQ18VA2c2NYbPqWyuZfXo6HZoAWBV4VFC7diKZPqEmRLJZaQphHfvFMj4",
  "key19": "41d7adYyfZcVWnx1MJKRz4YBjLERzsBjG7GTVHbLK3zPLEv9XzQ8JjvT1PQxyf3rSbhaSRDYKeJzDgT6n1H5XtKJ",
  "key20": "4TGt5dRgpCTDxmar5QR3C9fxYi9kLGBCvkhhEvD16bSf9dkFBsiBRtQ2vakVtd1T3kyhGjpfX4o2QCCrwTSYjtgN",
  "key21": "2v9s3USVVAxffMiV8rwfqDuDGTm6wnQ4pqpxXa797ZaqxjHpML7uVRWg2SWxf1UtEpnmD4PRSjwmk25epRHcGAYa",
  "key22": "5eXf2rr9kLQ4Yf9zL9mvebKaVFMSP2wCw7hw6kw2wBKUZwBB3eMNKCmc3qJfWqmojQKabjNhiLRUuGUaLYCHfNka",
  "key23": "5ZptsuT3Z5UD9ieNeQDk4eQABrMZqQ3cKuPrTuhaUA74TnhV8SpmS2Y1hC9afbdvYrGUM4heyuwsvdcrBDpnQTfa",
  "key24": "QpJDXiNjeCurmfKDPeXS7sr7DuHmrN6ZwURHdM9wjKmP3VeaufVjQnmEUEX3R3XfCRAsTy5XNNCpNyjmh9KUbzT",
  "key25": "4BFoJjX6RRjFZwqLYJhyULyuQgCmC7fpXbJKbqxZSAwUvYCqawTZcAo757xFd7puJ7G4yy8ebdvt5hHAZg7Fwm5k",
  "key26": "2KxtM4MrGpLN5dytTubGc9Z3fi9y7SegoR1jiSk95Mno1DhqjgqEDJ3j7MfeDrJTqUFY5iBSZbXLFKhfzvkvM1J1",
  "key27": "2ntLg79LSne6utjjAjfTepqLNrguFMiGrkmiPiWYwHRUmftsNAMHyHSCBXJP6fFYi9AjAjwKmzmxDuPMRvqAjjUh",
  "key28": "5JKzmkhEHoVukEmJoHxtmiCSNefYk2oXWZak41toJCBadqHYNh4toX56swMxzFKvnDtziMNC1ZZfQjNBZUV3isK",
  "key29": "3s6qbSkXLp4AsNLeA2L7z7T88HoRfGEnep1Koi1UUEwQ7gjmKLZBryYbmVPjNKzEPsdcKtft1P5YuWCZ8kjiMi9c",
  "key30": "5RXTV4B27zPCAtjGvd7g3rmWionDhDLktDc75FKY8E6zrvLmT3ARGZC27LYFpvyw27UvyNfAzrGChFbe8Dr9cYFP",
  "key31": "4ARWQcGsZGbU82JfZVyxrsdYW6dXKxdshuM7Y6pMr9neUzMd2RPkC7D2yEeV9zyLSihqW2aKzHLutfr7B3cP1vX5",
  "key32": "4oMvR85FUJLs7sndrZbgh8YpHPPfrMympGLxCRiB7NJu8v6LdFCacyVoRjbnyRWToXh78Fpg7NdEW89aZEVCrqAR",
  "key33": "5jdnUo8DwXUKErZ6Fu7hyZzBZDnUEzKeywjqXG8EiCNSk7gAnQ7CMHz5je8RKAWXXv6LJGYrC3ZTfb5QGUydWAyS",
  "key34": "54eiPEpHfzuzsG97af2MmtX1t8278ktPLVghj36rYDw8Lepn5qfeDwyxkH9efJ3jnFRkmcot6X2WqNCPt6Hob77y",
  "key35": "TmFbUbfCQW1tf6Zr2S84772tTEKiihewYdrGT8P6pVM7dkYDQC99B5WKrrTs51DEHTwhiabJ8jLH8mX4Rxdbmna",
  "key36": "3RiGFGhVifNVdek56uWEnJDkkVgUndSA9KzR9reT6PSpXJv6mrsc3CecRhKuUza8YbqFcouRv9peZnHrK1NqRsRz",
  "key37": "678AFjLSiG9wu2LUSHRLA1msvmGqiqznwTtH13nVaugxrfKDg32edM87SKNSDgegkc2BZ3GsikKCUqunkYa9jM9K"
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
