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
    "57oh4TvEQyqtMR4HzryghSZfj3SHdJrP1q3yrMH83JD82wvF3rTf7dinxy2d8bXQkdgQykfZ16scdnhK6g9CWDaW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37b8Y1LbTd57YhLcTarUMmamRDCfKYKoxpZyasUAyS8oPadX1UyGzLjaYrwNUL31LDyBSRVAC1N8Gzj774cy4w2u",
  "key1": "2PzbTkt7c4mgSrW1TTUzfYGvKA9cGkrZCScWshVDM6iNEyBW1mytFtas2349Z6CwhGPzNmFksyzLBNm7exokFGSe",
  "key2": "2fLRCKeZ7DYD4Ezs4kMSHvzPGn738Qt84aWhSDuVfHKPwBJ4VuhfqzAgWfaS8mJfvNBuwzdM733cu9uEu25XNEjm",
  "key3": "4Y3S9rpRyVFKXD91z83QpXX9MB7ecLGW3tDpQtoLdfAwCPhoUUb5cmnK1TKPAoaLGsWLnQ51Nast62SDDEk74ygC",
  "key4": "59Vq1twhgt6CBnZ88Hqe6n5c4wnYBLnGiz1nRREQuWn92mnJDkKP2jU5wGVERe5hHcMhEaoSr4XVyqfbDswHZR9E",
  "key5": "5N9ZB7XZePjo4K6WYnWRWg4i9qvBkpFAzkCA8bae3ayqnELc7qvGozk9UnALZvZxPmyUnNNDH5TW3eKUXzxjqerQ",
  "key6": "56FyWQSHbtyhUkPktNUFm86gC1sVnBWmwb89Ywc9sGENuxf6vteiNkLYKP3ZJDCpTsFguS3iwkYvw4UzF3dyG64D",
  "key7": "gn86yjMbxZVJXPGeqFuJRXjPti39Xm4RhPsmpW84vbv2zA1emko2cZTxJ28nMgBuZwQsYFxwT6L2Ak8modJ21iF",
  "key8": "3mpG2GjSiDcwfrstS6Km286gqQBmVU7WWjC75n3ApQDATKjvPCn7DtqexVjapyFztmd3NNa4mMZpifJwvs5yysbh",
  "key9": "CKsmbaxeFDmkPTpEGof4S7GL3ghFd49dGVUSVzhneb1z527KvZLYUbXVvF6SEDurSr2fUanKycZjQ3BPrZSPXuQ",
  "key10": "5kofnApL1wXogW1r2E84zHH6WRX8y3bRSKTXQJuW9FeTZU6WXcXcbL11VgMmB5zRbsYjnJQayYDh7yf9n622nnCp",
  "key11": "4zW4NEM4VK9q4Bk5C5e6DBsiUehCuKjHfyv5y6yUVAzQDydxFkRrrFYRozAHWMTBJ6q4v4kzo8Wg1WajqmFimgMi",
  "key12": "HkUHN85KdGMXrWtuVXDbKHugmrfmDGtZwGN6NFnmCGFVvxvgtcqzVGDXF76CQ3mcA4ZQipFFENYy7ap2HBMAina",
  "key13": "2eiau97cfGkTCzP2rUH8Y4kahnuwXDVWepVBZi53zKdQCfTW7YRfmXd1aAGGt4AxsrU2FQbr9inwobuRRqxutXmf",
  "key14": "477ahC9VYCKSkG7LgoiQCGAf2kxD1Jjiastjp827KbGxThpTHRiYw8PpVUwecD8QxVxED2mVpQtqjfRuC84WVfm8",
  "key15": "qhcrXe6rar9dwXRGShBkVD3UfJLM9csMr98UUtwn4oDT17dN2y4mxG15GGRV1ZiwhWraAGRAtETT2CH6sebK2ac",
  "key16": "4rncNuotQkCXvLiPK2onxBSTQEBvrFU5YaMoWpjrvPa1Yh1i8hhMf1YjFnZWkBpUZQoCVBhjx2mzRoJLSzxzQGaB",
  "key17": "4KwAs88df3CMhwTn2xBuy1vKjG2DSJD3LcTa8ZjYc1bWrhLFfi3sWxpx5qXnRdyzT4QTRCYoefu2uirE2mz6tt5w",
  "key18": "668rRpGu2K38KG3DpzrDzuv9sPdJ8BAtMbd23MMdtdsJLzZmp2goEfZ6hvacDCjpN2gr9eSXxmMeutL4GKStmqTL",
  "key19": "2b3S3Sv1mtf81zuJJ7CZuzoLxqbnpPWLv1H7A5BuJbZkJ4dRw8NiKSqzJUniC9n1ZMGJrsUBSFiNwuM83A2Bd5i9",
  "key20": "4nqz4cVKzKDb3ScCp95yro8biL48GYMTMtAVvB2ss2pbvY6GPbU4dVaJrWcGEYPNZCv1NJP7o26tqgXT2ZCfqcoE",
  "key21": "2xttPFxrMcKCbN119aGntEKqFFcqHq8LyxW47v6cDF3rKEXQ1Zj9nkhFqcdWp88ytsJ34Y2HVfuthdvfftx6oQU7",
  "key22": "3KNLhG5xrLb2DUhJFA5bqyv7aYJyWgcFNKMcQRFvPcxNmqcTuLUAHr2RDavsovs21drJu5z68sxCpDdnapBqN47h",
  "key23": "4FDBXEFcZadXUVXKY72FyP2zxMsMDU78ufSbT4qYCwPSuHT17JLT5MzaxXsfmvDeVyjE7GUMPW1HAr7y2XHWKBJU",
  "key24": "5CyQsEfym7TPByd9mAh9BYvZfSQ4Pwb6uE6DcCKCXyyx6AerN8hb7bjKjKUY2vFgMrq5PLTgPCdL6nCT9K5SY7vv",
  "key25": "XNVfZ14f5CWVvn1w3TJGH5eqGAaWH1JGZrH4C7pQVp2WEGgC54zj1V7sx2BfoxBaUCtPH1EGjk8hmKczu99ZUZy",
  "key26": "3GmVsdgXHKXpQP3xuBY2k5o86XLjRyCzpMZ1UR8fnnb18gfK7Dt7BcR73BLSjVXBepJiBAmzV9n51X3WBdfMNi2",
  "key27": "2NFq7H3eXuzhhRY7AJMcSaUkyd8FqzLGY5zucNVNYeu6zmsk8rAwAk462pjTBLUGrpyKjQH8tZy3JbV6uqfmdxDn",
  "key28": "3Es7ifyFXvF8dsBpYJLBjuBzRg61mzW6zorg5pUUjUcZp9NMecWBaLTu466eWHwtVSyC1wDjeTemTXpiEN3PHhcp",
  "key29": "5WfmVZEMerLTnXRPMGcgevr2gXaVR6oAG4vFu1Y5oxmLNA86gSsygqr9YLakX28KF2SyLhDHMj4wNkC3WeReG26B",
  "key30": "2Z5m8QiVDw9Nbz2CuyaM5U39qnrDNQ6PJNKkvAgfdXu5zQ45CdpreTTKoLrGbuGz7q7nyGounk3ZkQSF62XKEjcQ",
  "key31": "2RdUPgyJc1F8zfXEGH8Zq7K6iRVpYdT19YKpzQBwF7ohejefyvYpA7a76VomcBuUq5pEpE5GExhb432fC8m6w8jY"
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
