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
    "2gKR8zUYNm1wjQbNy1a7kn5eeDzEwyxPjhDzPfxtE1um9Pfv8uckTcTGCV8KgM8ewzu6FDWieH9n3rknT78jJXAo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rLr3b2TibFaYAzoH1BxYEUVenm2JFgDhMr8nzNMb779C312abiN2mRmW9fduZtYjf6v1fEUZQiLEi3FFdZbSg1y",
  "key1": "3NwScmcvzkhdJiwrwzjA55JWJ5NEETqkKSLMWjxvJa49ChRwirXJ8CK4iue54TcdHyux2A2pSm7U2GbLsRgVtNZ1",
  "key2": "4JbCgSCTAUxveKZwVVk6mcFG4uc5wsA8i169Npx1grTmpeyhKvy1vwY9V6j4MkPoPHh25VdZTffkFf8NrYzaMP9Z",
  "key3": "2nsr1rnSqF32h3wmcC8TJu7qhCvUHEFxP2ktRo2SFQNMne88X7yNPMmrqGSY3LhjStfZaoeUFRBRcHH6xLN9aP6w",
  "key4": "Mztqsn2Efsnie1zxSsYcsRkfC5Bionrnxh3WVP9ud9CbkwVahgNqjKtMqfdJ9hDDKmSoLqYZMNRofptNKvx6sjS",
  "key5": "2fkErmgywFz3cufUdpQEncm6SNTrhAxwEwQdXZ2RSsGrNhQPQ6oQxMspkufgfuFTtgNi1mUgaJsx6kYdu3k5mVv1",
  "key6": "5LQVBbzmavryC6dYzmVDz4sFGCqmGdMsVQYxNjz8o7618jFFAyZAPdE14BcRvJ4hGqMvr8FqQ9bS5wooVtVRjLy5",
  "key7": "LoNPHYWppiDHceNCpPr6ncMFyLJxVYFEs7RHmxReLfN8BP767eoAXpoQZxv7MqEwXRCkprRyMCN9Bqjsshb7kYv",
  "key8": "3DdjvrWzWmNzYGezc1NTF528Pnj7ZjDUz7h6maSW7D64U3HK69DdFim1PZNnpvpQwnB8YMm6MtRYrEaayaYqgXHr",
  "key9": "4VJdQybxF6QEp61w95EQ71nmHHCuurxRrJd7eDwLv4Cg48MHFrgS9mUPKDQSZ6fj5eXaxVLAn1UAMYJorheQMVfM",
  "key10": "3yFEJMr9R8SrPpVDgQkD3SeziGq9n7bKFnwwwBEH4CMBhjv8nXFjekWFyEwXAzrYBLBW3jn7ZuZG7vgkGQ4B1vbu",
  "key11": "3dYArZrCo6ZXNdydu2pXbNs925xi2yPFrnMF8iJShjAcA1k4DdEjk1V8781J4ciVRAs8CGArs9RMN4hbomJfYXcd",
  "key12": "4bdggc3D8PRVKrLMT8WDTueKQQogMafswJ1XSGe83g2sx4UnV7TftYqqfb7fegMQxi6SXh5rEZfpodTKk5VG4FSn",
  "key13": "5xJZ5EDGs3tRPVrkpnbHjJKshH6vrzoNfSzRFusJByo8fim7EkewcYCL7uuS5cwntf9yGDBMwxDbmZ8bpVD4xyK7",
  "key14": "3FMFXHDyeVPpMr2CAVHTnG749GL2PNm8YSSKoZwpc1pjSLQnPnfyvzYy63Xiv4pQ53HWsLztfypdm3DYV9UoWHvZ",
  "key15": "oxawMNYvEfumLpsVTtEWqbwhpo1JEUovL1GtRLDe1odiBhwFRmZV1Z9zHWvZ9wPtKDZn8qVGcoexiLpWXvKnRW1",
  "key16": "5EqMdAqBpKHVjvadAXJj28vkqpH2k84x9e5rmSifG9T5DaoaHqLinfrfprNzopdFYwquqNF67FN4ygKPey71JEBR",
  "key17": "2XqPnDeDQm38V7fLR6ZYh7KKGRj685ubwVtsiniQUvy4inuTRDJLpTN2dZyDDvpg1Ny1AMqod5RbUVJSB4By7Bfo",
  "key18": "5iWVJjbs9gvBmeAYSgCDKEWmqjsAsewXDoSszpoEF1onPX7PZnANS4ojsMCmwQ5SpNfnkPXkSBEPcRWdwMi7PP3L",
  "key19": "RZhi6SoAPk8QiCMm1eUpUeePVeuSgthmWMKMLLW4MR1n8FHqd4hvRBid9NQjPaTVPqxLiWFXK5WMwRvBxEEq3Sw",
  "key20": "3PygrGVN3mjRmBJ9vspVJrBwXZNdNoLxMEa1kuv8ZoFMttdRKpYPx5omsudX64Nrnbro5frvZqt66YURRH2utaHN",
  "key21": "23sHyNPGxVfycYJFaoSR4C6ETFygiKsi1g8NoYsHu9YpAGhxWqB46c2C913XAXLMkZLS9TurLsYFHGmhrNvuZ7fj",
  "key22": "3wwfGKFgqD3aCVieC2i3dEncC1bd5gW9xW9CoFq3q71ScdWMepnYSgGCDNwKF4ZtDs89aiDyoM86APwmBeJCkPcG",
  "key23": "3wTwNBxsUwraLgRRYeioQSiS2RbseSGpS9LJz7yjKVvQzE5TQu9fnQ47rgAVVgRcdNyaF6nvxo6Gcph51AN5NQx",
  "key24": "49sv6CSvYwKsZ2dbj2iSxi7U7iwdosaWAESh8Vmn5WwSVUZLtnV4jPkqp1Cor4jj6Q3m1R6DRPqYWGagcKabdaUa",
  "key25": "3Xga1SrqAfr7goVGBLbqBSZwsZh8fLS4iTeL7HFJNFjNum3sKCfUbzwVaJERYXbCdFWMTT6XoHSz5VBS4EJSkUHD",
  "key26": "5bH7Mjznt6A4yaEw1E8tafQKKoDkSw41U8R7JeydB5qGs5BM8vzRqicTJ7jiLmfPDcogVQkFjSsVhYQcqYkVSgTC",
  "key27": "3g4PiYFj4wC2UWxmkvSNjDFVNVUP6RdH31K5hLquFvYa1D13xoba7AUuoGuhTiwVDUvEdAiqZnjGQAQq1ukrsABm",
  "key28": "4u1ZfeeyBqGqUFQc8o188ja3nhm5Lp8JA6R8Hgb4VvMRS6Y2zmSf8TbJRySzdQD5BsP242nDXhjCqaY2YmLkprDa",
  "key29": "JqFv1BbqAex8mpwFXXoPs6zFcTfJSkytZ92hyeX43QBpU2WR741vhXmyxnP5DUQKorrSEA7GCgFEJ8mWeZMiNPZ",
  "key30": "2VWiELk7dFR1q9B7sYVDXETe7MZPEt3cGj1zLa9dAtgphQvYPdWxdjj6QLSAF4MbJwwZv5Wb16bT9mFGUDVfstXk",
  "key31": "ECwcYXRabJfvhzfaLE7DkX2PUzNeMkLGjGcpohf7uHfj3yqkJnbfGB4Fom46F8Xw9Wvnki38MxTRaq8AWoSEy7p",
  "key32": "4FA4mevcYRDkPUqr33MRpqkxD6bjpoPyi7CgeVTQCFfSq2EjzqGZybd7Cf7D3Dup2tBVCeDCKr6U7zbTzExwsny7",
  "key33": "3m1pyuuvMAjSyT15M7fQU5k4MnXH1bjXHDNuAUMAkuJkPztd6vyAnXsBAn6LnKRggncJwQE6gF4d5rfcH8ZL5RXT",
  "key34": "4sTnjDFcjK3X5yX18ecMW4bRw67TzAKvuau9R2jzGGLt1gJqy9bbn3iJMVrPk9Z7XQ7p6GUhXyn8Pgu6KEKMcyWh",
  "key35": "2UsCbA6dVnxBRWQJDiWdSqrEXBBWA5kwM7Fp3oX6k8hQJnK6mnzcH5AUHXRnVDsL5PZj6fLTRH6EWnMd8Fzph2UK",
  "key36": "EckzLGFm1yhfzPgPbCAj5BUurFsKxeuDfoW7k4f27hYsHb1zgoFDHZRjT5jtJ4bzp7sWF1XdupBnf4WJLHAasV2",
  "key37": "5erW6qAnCCNazBtuFGGeR6CMddow4tFjd4xoBo8AbvovpwEV1Vb85qwXx53SGqf3ogkM1USRidod8F45KayAQFec",
  "key38": "58dvy4cRh5171yzwp3EVuvjXGxthNPkPu2ytrHTurXZ6fVnhV8brhkSoWSQzFt95zxWHB3JzFv5MujmDzgZPH39L"
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
