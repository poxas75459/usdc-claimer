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
    "4tSbGPkrBXUi7XWWWfr98Np2gsjZ7hVSaZyubFxeraHerMWr5uAMRdV96tJ9FDLmAq6BQgzirNnyP4ed2dchgnDy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vEMSyLNLSw9swUzoAFA8RjETiKzU1Z9ceQZrz98yuC9yE9L6eL9ydKqQriGMptRHmoYJMy5CUFjHLeQbu9jHNg3",
  "key1": "3i73ekgoY1icHzXYsAnuWLJAp7kLsGQQYebFYWQhEnbpoNwCZji2rcxm7SobqHs2uVTpRpBsGUoDALrhpZsS6BR4",
  "key2": "2Q27Y7hh8SNGUsTvn5c8kMq6otGKQau4Ua2WzxVRq3aGKK4Je2ErmboogSXSwRuEq15rqq6WCNLBW6n9jHiZ27f2",
  "key3": "5ZbWEaW3WVjPStMYDM1KzfeZ2eWyBxUFq2i3if5fEdpauwpPP7t1evN9sckqqpEYCNDLqGnBCTH2DVgwo1eRwtHd",
  "key4": "29Ph78smQ5CmEhW7xCBwsFrsLcHzwtuH1f9xQZ8SmXwgFTnsN2hjYTv7xZhTCnBLfnYfGtJEECEQQy9byCnYcSTE",
  "key5": "4pq24aGXaKSxLBRqzfdXWdweBgzRJr3z2BkNoPCF7MddM8y2P63cA5cz7JbgNfrUpbz3aQKj9d7k8ZX1otaavEbR",
  "key6": "5Z2pTTkbuJpiNRWMEEkLLDtozmQR1NtedW4FxtNo4E6bCZAiVqLaGm29cT5zABXZ6B9AUjAntiNu5JMwEaDoqxm8",
  "key7": "3MiJWHVTCc4ov8LD81nATsgDDM2oBU3iRaZdrhBeg9oifba6JCnKC2Gjgm6t5DHSkerHx8EzvfniSmQsZ1HEGgWZ",
  "key8": "3FFaXk9e3uywPuZPn9UDR5jpxYkSW1EwMN9ekvtBLrjafAb3ehaWKe92phFkX8hvt6PEyW9xemxT7bB5W6tgiEvx",
  "key9": "4Q1ZgpFSxenbNsLoXQdwZ6VD83y1miqMVKHAnATJ1itbW66rcYDubyMSjsVSezBhgaitbtHsTihJR5sSjUspdB8P",
  "key10": "V3QMvP7Rg4RknbKS1ZhciQYhpqAQQvTDak36c8YShV1MLrbdBdU2diRzS26F1gpgRiMQ6EX1Ko1Wo7djGYVkyKa",
  "key11": "3vAQbB4UfZ6wLpLpNk31bjRj6Qbfi2rpyskcV8HxixF9iVV4uACFSrnEVDVQ3xiXc2JuMEcsCnjAQyqPMEHToeb6",
  "key12": "3Nwoo9BZJ3aUYxSQNQmaAn1JB7FWjZx2Bew4Wcki72UbzLK8hWZZYNwvAJfeRsm7qJ871kdrKw7CoQ8iinkZqsb",
  "key13": "2RfSoxUV3PRDsFiRYT7jMCEKDsC5uJ7k2EnnEd5tczEPcVUYVnGUFX8xnSd4EQtZ7mxBCzhxU3QqxMKP12K89YvS",
  "key14": "5u9gJYgr6sizHK5YzW9SnH6pXHnRNPBj8195zqD7naa2Z1XecnmJHrQMRjmCuaGq1s1mgqBdjeCbXoe2CBgJ4N54",
  "key15": "66KirwtwsGU8Mk1P7fZq8atGsSUcGRNYSgW3b8eFpA3zsLooSgDpN1zD9kAxMa3YugDcnoewZBAbTgzMkDSiskMm",
  "key16": "22vs6v3nMEgjCjw7y6CymieHC3ZGdzej4YSFtNc2hAceWYEn4MvzHV63D9nBhF5Hvr9dB2e2fgufpdsxQnQSpiP4",
  "key17": "3RjQSeJ6SFEsjvybxuNNQyNrtRo3UcSVyUSJjWyKgWQW1bBRhXCNV8QmSfSTGTtmDpN2LDYdZuT9zHM1HitbWvne",
  "key18": "3wSKFqqvzfwqWUsnT98LZ64Uqsf5RRaT1z59YSNbviJgHyt5LFNC2Kxt4M4gXvT69pC5kQ1NruzfEP9nTc8eZELn",
  "key19": "rr8g7qweVQisTN2vyuH2bCzB73HQLBc8W8wkPrbvdnaNZy62SeRgyCML3w1NDrM7AuumGiu9EFVMGxTJQC3khh5",
  "key20": "645Zjsqpa2DEAxDP94ZSN5hp74ey1jsP9hgvQQYhnZL6scebzREKruSajHgFhPHwdNpMinYxNs2KD7XKWCVp6pzq",
  "key21": "3GSFDx5UVuLD98ML3wtJvAxppVe5ArbaMWK5wuz2Jk4Ea82g5Sd2dR6qpqfacwRaRZp9Lr34aY4jcm55YKsPUrC1",
  "key22": "5cgdu16i1wuAnHnLmoPBFmt5SGC8sB7NfKgDWigvwtmUHvathiGKMjRfCSeLK6JxMCqn5Zf4VWxaRSu26Pbu2f8R",
  "key23": "4pqz52AbpsJeiMdKkm4uaaAX1LySj2ZcTJqyJoUuQSk8HD6u7b6W3xivxoRRnDBDP5uykTxJxNDVJkfKiyuu3LaK",
  "key24": "QWQ71q3HwQUUZA9WPbs77RBpmX2keFKgrrpbgm64TSAL4ZZv7gRqi9iYHY3uR9H32dQJgtrQPs9zhRu5jYfhS7A",
  "key25": "3qpsuQ41oeB24DjXYTwVUmwDRWz7nEJijfob9EXNvuxzcQJM2DMKYyzQSXFFgbP9EHonFnEEGe9FeghhJ4QkT668",
  "key26": "2CSHnETbnDEfckgt9mH4rKN7ZZPGgZnWHyoroKKoKFfbPeik2Kt5JVUBeBcfRo9sVdg1tmc2RBpEy1a9Z9v4odeL",
  "key27": "5Dvdbs3fZqgUwgrAGjiMonyu2JvTHPqY7Zop8gtZAGhF4P8uZ225MpmFDehbfV1dFGV7Tu24KJox5Wv1uYqsJYTG",
  "key28": "eycKpGXbh8krMNfAj7JHaUNn1LaQSgVzKZXMESbmXjTYBdmVS8KP5WWFBay5zqS52pzBduUkuVGuhwiUurzR6ew",
  "key29": "348Jhmnhk8YVZ8qG5H5TDs3gVWE2KZkR6VTqMB6YHFVv1N8rzwEQibg7BZCNyCP5zbFe4DhyFyf2eEvRCUGud1zc",
  "key30": "2Wz85LxWSvmrzBEBW3d4jmyc7aghdBGWHrbvp35t3h7tzxJ9Fdgf6bH9UkQ6U1ftYURvHwR5dDFsMzYXkugi4pwt",
  "key31": "5h5Zc2e5YxFgFQfmvH84GENLYgpRyZUQEPKrx9KN5TG1vSfcMXgbiDKwg6oxphi89nLswm4csmiVRpRQofxtuYhX",
  "key32": "4tE4ses6WfBRYqD7sXFXn4x9oVKwLLuRHoKANL9TsqNtdG8Y66vAiZdvkm4jYn4TtrgjVg9Dmt1erYoXexReH49L",
  "key33": "2MLhXFToWfPEpZ6hiQ4QVWZyTqrbSah7sTkdwzt9hdQQesDuZrWELeFAmNcmCQ7ULGgyk8baH7YfRs8F6qCeuw47",
  "key34": "2VAoyaTP8oHdAMbNMKjjuXsRp2uVmwaZyxq7uG7wSasjNs9dnMEJ1KQ5AvwsdL4uiurxL4LJ5yMxMn9aUZbQki1P",
  "key35": "4cuW76Q92GtbwPxsbyXiZ45wZXsZE7k7enmrindcimUTyaCET9S5RgWU4pAJdQgkVQp3nF29ueyeNQNKTKvEHm4L",
  "key36": "34BbhvjKZw4oBLXFSrxU9tDB5wFEx2y33AQT8qxoa3jDpZfn49vvZ3Ph7Vn9YoXWzNi5wFTHBGy7smWzjwVYL2FD",
  "key37": "2dtZbrEJwUPgGzdRZsop1VaAzJJ1jU4QjkzGrmKcMkmbqQXDnPYH4VSPVrTgsxnqiNR5uFWzARrFKUVnESsNbks3",
  "key38": "49sWmvMCdjUE1xjSxHujZL1UDqyyfme3BBeL2gTqmZuBtbpjhWaz3SZcQThKocHs7v2Pap3Z6hqgfFbQSjdSqxBM"
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
