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
    "2ozoaox74Ad5Jq8SE5oZUbnJfTpM761KGNYZ3PhhhqY68o2VbJVqTG1Ct3V6A7MRNvJoHQoB4e4zWGd8YB7viAr1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SG5jVw4GozsHV3jzertXDZuxjgMgpN8mw9H7mV5ogpJR4EK92n8fzft5W3Dzc1oVHUFwJozNhVNGp1sf4d8w7w7",
  "key1": "524qRP72TT3EZBYHFteZbPethi4a5PDhx12832Vu7dm6Q9w1VTKCxRfVBsz71X57rb3PzSEzBUwbv5NrwhBRyNpV",
  "key2": "5fGezS99EpMsgHccfxTY15RzQWNmeaUuUWvR2UJL5rbEFcqehvNjjCLokUYagTDj3HUGrK2yp7WuLyqXgrLfGMwP",
  "key3": "5JGZBgMPoasKCAiRmVL5JpB44b1QwofkgjVPwb5WcLH8cFFULRRwv5qbJJX533Aq9K1ApaBat65TA3Vh5fxnodJ4",
  "key4": "tsgtx2WLE8GDQE3moEd4cMhahyYUEbBcuW5TWKtbY4DQvQvhrHKZeTWE9T76uKLQT7LaNGZ6iPA2MeZMP9dkjGf",
  "key5": "wp7L6LppHZQDD6wg9P8Y9HudBspZkjobzhmBjYFQF3ty8XaWJsyDRGBYBQb2eEGz4qb27vASuPApEyX21B5sww4",
  "key6": "QXai6ttYP3szaVtEkmouvwWfmLtTxN8SiFhfQx5PNYmYsohaoSkK4wTGubdQXthDQykTMc98yrqSoM7KiiX1TvA",
  "key7": "2f6DVHuM9mPxjxRXvu1LaqyZCYb5WxSho3e6SG8o5jxrsVHtEJDJVbNGAsDRQ5WQtZ1zjndNgTW9y3E1DPjaiuAC",
  "key8": "5RdzEBfa8WNJQNZ8pr5zmUis2ZLJwCcESFajgn9iukGMLwMjzgTkG7SyVaXrX2qS8ESFCi5bxWK82MYtTaexnkLo",
  "key9": "32z7uw5B5bHhGbpcNRkikiFe4g9zYnccz6PGi683HxEX3SbXqJrG2gWzM95RuLxRCdkjaFw7MuA51DShrD1Wbk2d",
  "key10": "5sqgYse96gRGCwPJ9iujFChh76gatJ6VNMBg8WEfdULLh97AEswPrSNVZTyTqNzQhBw2dqPXvnwH8AuUSdcjS3m8",
  "key11": "2MpS2tuZrexUzxnVtaG5LadDPw6i9zfo9nuUUmFL9ZdVoBxwEkKj7CctqAQHFF3ocTnF7GQPreXTn4hhvzHZjix9",
  "key12": "2LnS4M2GGnenH5Fb4jWTgZFJpn9jk746kPCd3pjUm43Qu3TQnTzGaYMFXJ6movJRux4gCa4Vj2aHSV7rdWzXnss2",
  "key13": "39G8KxLcTYxJs2SF5rhBdfWdUggBMKPW8paLvh6hArLrPzfgxxUxwDVkRmfyKBW9Rda37XVCgc7FnKqsr5nsdoD7",
  "key14": "LfFanHv83vQtCdQ3kTLKkYWDScYT5jaf6D21FTUd5QsjWGTpHtv6qV59z8y9M86kn254HEcmNHukrDcQJbwGtgy",
  "key15": "4zTe3M4FBhq2HcnwiKwKcjVAbwvNFQ49P11sHoEd5A8LxRjmBA9JxuLNuidEdTa6J9VS12yWhUAwE6oZJAKQAjgB",
  "key16": "5dRJcparBKE656uMBGdt4EW2H8Fk4WZdSfpqbcQ9FRoySSxqAoRyQBGUZnmehPf9XY9xkrwTYhpsV6yrK8ane358",
  "key17": "2PeKN9rKhKuEMUhEDtSTD4rERrCjuoB1qDzHrBhT9BD5HmawDo7d48cM5ibE83RAo9fR94rjtUGNxZ9vjxEJoESP",
  "key18": "3bo8Nvpcf4XjmXbyT9JNbnVKRUSUiJg4w4E7ixcShamYW7SAa6AYbWYEGHBQibPHp5gdpicX1CPR97c6o7bjACKC",
  "key19": "5fZDLLskXAAU4maz4tijx3RVAV28y3vA9hk6vh7HYR1kQThfRuyb4ceAPWYvkQafbhihp6bpJrPtVUsh1UeZ11Kw",
  "key20": "5og8pV8NkBXKsXXGsNxhDzrMJ6sM7YJh1Wa7nn2sm2nEJyUHk5MzWwfYd28RAUjvHXmhfrBihzZTwy4YK4qnCGF1",
  "key21": "5FjiutSCXHiUiBE8ashAcDzQdAq6MCKtkc84NFXcaJFUuT3xXUtQDoLrSoLULeDDBNXJEUETgPcSPoinHrAzGgkP",
  "key22": "5NTgnHjhdzQ2fG7vY5WYmRA3dfy8AxxJgXJKK1y9bPRoXVHX87UDJXNY2bbGaZf2shEungcG4xKVt2w2Jujku4gz",
  "key23": "26tKLCjbuQXRe9A1byW9VjoHAVPaay5T74L6UfM6icEFH6VSbr6SVzWrVT6JKCperosShNE2k7his43kvrQ2Ecn3",
  "key24": "3dd4zsNxqcssURMCC4sYhymgNeiXJibFWbAwENxF9XYGcNdRXL5fAo2Pedq7hZMsRmvarXW4JCrPjHFuHBzdhaS3",
  "key25": "5GBAAC37DAHpeaTL33y2HjnoJrEh9rNkRuBUE8ixaWaLNbdbc9AJB8q5ZkvUhfCAoGqVNv5ZTj6dfYBJpRu7iUPV",
  "key26": "p91DjqFHf9wKEAEgqidAjNzckGAxxSibSo6qGksu75QnWJQsy8rfpfYJGeDnnWGVWNf3KSrg7zuobyPtRUUc5pv",
  "key27": "2kBr8C5DZSrciaFXCZiGFTWaBjLHeiPSQAkhUtYuGeBVEvLBk3BzzC13qBaGnkok1jQ1fz9FC5LdKkQZ2C1FYpR6",
  "key28": "GnbYZhYbG73gmqSTr67Tyt2KsZJ1G6VTv6TfiT1XphXzXWJN66Xb2Q7HRaPwn6civiCvGX2XDbdqEBVtzRSJdJW",
  "key29": "2sMAuUZd7azfZZvDUu9XaTLrL3ePu4GfPDGP3x6yDnXBFzZJRXzdHYhmNsKg9o1YJpjoZZEQXFrnsDFURGhmjzBS",
  "key30": "3k2Au9fPPTngJGtHohLNRJ938ts1cJb2w8VqQV1wxGvvGKULRtsYkpeHQhSjSvU8q1bUWU65G5tc5FGbg4cGYue8"
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
