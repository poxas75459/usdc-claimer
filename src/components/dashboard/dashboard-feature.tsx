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
    "2ojRQsgSSB2ePMutkzSJnbvx2puN4Rmnb7bGRxATFPvLvW3aDqEErvnqvfsVQvPTYPxzRror1pQWYcWpQsPJkexz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ys7SdT8JVQn1PeozxExm6XFqGkhghqS8frVq6PAuiwDmPkYDaN344yYTmDRUpvDyfs8qZG5UXDjtZUpwEVxGXgD",
  "key1": "5CgP75NjcXKzH9qkWFNwZHNvGRUS6B4S8QyUUK6qcCiuXuYZqmfMddDqADjrV6UtMibwMnP4KWaxhi6ARShVQUZ",
  "key2": "5koWCiWwVaLMq2bqFv6tLeiNdSmqwk71bDKykbcqN2wp6Xrw9Gf6ofKUiZXSR6K7ZYYjxPtKZGxvYPpTBo4nV2h6",
  "key3": "3WMsrfX95fvy7zzwefzs1LbaKpaGS9zvei5xhUqEe6GD33bEiqdrkpKRoYq5W2sEZUTfYYmXXDJV1oo2QeBACWg",
  "key4": "1k2wBtGZPqEMhZiDPEa3fh3qSqvcY6ySMiVEPzZhbRpCBCmzPFycGUKAZDJ7XRGAJ1yGdKW1zFbhGB4oFuWqzCp",
  "key5": "3BadhsCCe2ijs9iBrKxgkdsYNwUZxkDMAgcNjjuDz9rLQe5qjyYtLZm33mATEJLBxUuXBgsrh8WJExkkgoDLRqkv",
  "key6": "3QyAiUJ7tD7coStcct5ogDUrVWGWxZNiJTB6wn1U1WxwrGK7HuWfM6UrKhxZAPX7Nojz2vgHev1Q1sYr3VEFKoC4",
  "key7": "61CZ42YTN48PNfHQZ19NqLV6rpX4MFf6ncrXykc7MzoRASXnGyWegvSR3TuwPM5qZr5o9p3cc5ZTQCKygDQYURpe",
  "key8": "5ybnTxFXU1rWrVDNi66ctc1seMyF14DiUVtFLCaq816qnDXtir4jH2UtPerm93dfig6dKxyCVCVjxGnaBkmsKmhL",
  "key9": "2PTUxsi9zpdBA7zGTt6BbKhpXt2VY613N6gPhLP8ptsoVpAv3A6Y9FTTpBogMCNKzyKg2tikkU1YkGczeecT22JB",
  "key10": "66JZiiZtq7PTxgYidPvc74KGfNUfGqX7u1NAGPojsQL7P4FRzYf89Sm7T25CfmbH7UWFaAZuNCmFvghH7bvXcjy9",
  "key11": "5rCGBPcexqBov37hz8fbRLjgdySUNQhVpAS5mgadcVd2kQU7rt6iDpz7wCDBFWWL6PaZsBCXW3exGjUa8AHD3ojx",
  "key12": "4A2a6hiR3jU7JxiVAp2FsAieCUhcg2RACQcFhP71c6dBBSmuGL5kHsjbYgmyG19ksis8tjFnQfyqzTHEPmKkX5CL",
  "key13": "2Gso8rPTTqUaJsjK8P3g3duvYRLWDHqd2bj14JhbRzRTaXC8AY6zC36HRVzWJzuGAzmByfrn9wdqTV81AvtV7GcS",
  "key14": "4Dh7z9snY5dqYNJjJuNX37wtLTkAvWs5bb1hWsPrkD7H2oXDtTACyf6MSyh44yad9onMNJfKSXaP31vFpSPNtMVA",
  "key15": "5J1S7bXh4mMUDmvoX1RyM6qqfpgucWjrpHx1AV35mdABxuwzyy5rMr4MhhojrLTdYVmY8kmTscpqGLoW837Ypqse",
  "key16": "2nAinBfxyC8Jz8wiksihUkkqYK8ZcN3AL3uPvKcXWCZGcgZ9uZAgHqtsZbCaDgj5ybKZMRQtUtZbk7nBarT4WpxS",
  "key17": "2aNgmtCcLfxiEPRd6FH4ZxHRaQUqqf2CpKbtgikUN4cgDbibh64F2rMBuq3zkSXdLpTdWaSjW3MwpHRhq41FemxB",
  "key18": "3BhijGgCfdrBPrg8jzG6Jr3YHV5cK8Vddt4vjwBddagTsCsz5kpQhVsTbpnHkbjH3N1qE3oHJUuu2DGctiJ6uW7t",
  "key19": "3rRZY1KTrfMvxqqaX9AxJAo1889Zje1UATfhJEoW9qPinqbecNqtnbPyL9NyR49AQytWoESaZeFFH61mYTm28w88",
  "key20": "4qvSbJA91LHqJNQvxGVCnQ3Ld87YF9o2bd5DsXkPPoaB8Vfe2PMyPXFUuAwzFkScJ8z5HY3dbf2YrhjARa9UgwoS",
  "key21": "5HodqqiWHKy2HdNTw7sRGk3x96y9eyHKnJMfLKNbgyZ36yj7z45SCwJypp3VMym4dz49pzwF8TSx9QjWka2f9JFj",
  "key22": "4AtZEsiAkezdvUPrguFJSahLYfsDaRTzukhKX8VSpZ2jTfizuytmmkTzhyqg7rF46hbBSA815TDNrA1r8MSwseme",
  "key23": "3vYont31yB2KxmVEhoyALEYXnkpAutGD4YxfiL96PC2LNAsw2eUuYZJKiHiSnWdq1Ua3TTeyAXesXmsxB6hf3Ny3",
  "key24": "5Lw155vgw9cmn1ZuDaKGdmYPWaPQpCkipc1ZJBgok76a53ZDJqReYse4Ywnf48e8nt3HxLBbgNRh6VCPK4izGQmB",
  "key25": "4HvmvsXyhajMskEhgKdoTZJyZWsScQGMDTPFScMR11YSoACr7y8XZbdETFhPJPfMVGmuHdkkkxYhDhNjiETr96je",
  "key26": "YZe8uRLrqg7pBS5ceVVARg5DRGXhN7xQ7RWk7e2Krqb7aknAH578wG37DyQFpcn6XJSgbYhCrX3aoG7cSd9f3mD",
  "key27": "3b7a12n5C7Cvb3SGuVBwn7BF8qg9iKak2zYYNDNknXm5oewCPmDB38oa5g8jPaCaTrKAaJikf9G3GmsMsrWjCEK",
  "key28": "2j3VWsJqAn78ga9JjdoA3Ljf27XEeaB7FUaRYVPFFvQ6ufdRabK1aNVc84geeYbnNQyA5rAQnnete8xUeAfn6aAU",
  "key29": "5FJFE25vrRDDNbHQ4xPV6QfmTTt9opdJT6SSN6tPexcrKn5awBtjEgkbgvZNfVRNDJjHHBWa7DxCJQEosKvpFvHy",
  "key30": "5V5J7u2fFgvmgcsXRJLQ4rp4SvHYipt2xMjWf9UzEpb3FdWhL8fUBkMLZFJkvCHFfSAEaCUuKgu6iKpkeiAooRYN",
  "key31": "3Qp6NUtDAFSWM6mdMb4zVWZzdy4xHL45ywbZ48JZFy8fBYDS7BJaW6s3vsGfcLgwfqfnLUfH6NgXM7pdqxRuWGXY",
  "key32": "hb2x6ijLDcMyRnMjjVcfEc5UK1wKUuoxN5dr9n6WY9zx4SUdcT9tH3kwcQDESCvaiNke36rYZsi55SgPWhozW7d",
  "key33": "2gJcWecuR3mJWU8g1dTyAKfU2aTsWiSGiWgMNKBd9WWJSxe4o1bFhiUN9zUB5FqGN6mrwEYupsvd2wmP97pyX1Ag",
  "key34": "5AwruCYaLzgkb7A6taBHck8UpXX5NxnBc4Tjh8bH59FPX3s3cCxm3g4HteYHJcZm5PystKh1jHNanGvegZVPiy4q",
  "key35": "4GaeiUzgdgsZUzqQQ9uwfKnwPEgnhzkygaLi1BuETQmMWkao5g76hKoftJkMUSMTZs9JvhdW4k8hcKenxCJNg333",
  "key36": "2owuqkkeVsXfxpMRv9HCQzKaQxQASq5DZLyGiYwhjkUyNF8uwxqqMBH8cyL1n869LMHnTSDtLjZrccLEaLt7ccoK",
  "key37": "4BPaRmGhfXUeBavLVN8tCzefzTrk71gf9wJT5UVpegmDUUphbM9FNKurZWyMm9hhkifDHuSbfc2oJcxVMrjuaYTQ",
  "key38": "5X6uQs6V9jiaNeTjnKNTxmpC3DyqW3F8fWUnS4N2pQaHJRfVsq23PqWJH7D53EZU3dX4LqZA9jDYJiEjj7yF6QaP",
  "key39": "5J2eziSc3JsbUFoeLncrYYk4RrsJRTuxfiRpzb5smnGz7CsAf18g6TtTTY5594krbSQGn6w1uZaC74kYrdq8m5QL",
  "key40": "3Uve6UnhUgdmHoVCNnpF5MnVPaPxdiDvhXP8FiMsRHXfN45jRF7BhKqzhke4aEcLxFj3RrPBSsJ8rEK9e4o5cik",
  "key41": "5KMbkqQ55nGfDcqsdJ7BSeHd5hZ3F6ytYqvg5MGZN95TFhz6hbWATspSFWUBzez1Fpv2jufW4XjskMcNSJ2wfyFs",
  "key42": "5cwZmDBrNEDKDWHt9RyafS1qJEnfoEkJgPDu2mP9NM6ijVPSBQtPGFoy3XiAmryeJmA83R9Q31pSL68WzCrpyCLp",
  "key43": "4C9v6EikjbEhY7rnC7rMeD96VPNqCod8H1eEV5dS7bttVFiyn1Bw9Q1CWrwhgviGXAuurV66FPPmrtvccvHGzTE1"
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
