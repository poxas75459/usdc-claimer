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
    "4Sour3GifyrfejQqqcCxvn4o5emi2ZaMPZPRd88B2bd9F18NJvYu4LQ6o7PiqEt8h1txfUsdnLYEjZqTc8bWhnLZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H7WamG6mXHo2ddwfbhi9fiW4PBgRf7VVakFP6UWfZjTEKsA1QLwFMnMoLL96DZYCKm7jjvsGmCusJ2EgdHKDvmF",
  "key1": "WNpUF2ewoHnNJYcr68PHXxo8cubHYUb8mjYHqrXR32bZxj6s3vKJTAndsVYoxCHq31aS6y3RWSkgSNsocFnumT9",
  "key2": "ZkY39CudKQU1dNrC8JeCVzmA4sBKE12ghwYaLXb5n3YpbqGJv9tYDS3pvujmMwk4zfZv9pTcjzMUtzc2nsin1Gq",
  "key3": "2s2UZ7pC4XTuSjP3oHzRyrLAvqALfQuDUXA8ss5rZyoWZHLCbT7zEELHMFXLj8HgawCHfhhcNXVTi6RMPU3Fk9NM",
  "key4": "5WSRTKj6t69DSMBcw2UAKiEAwRSVPYnPRCgVceMBkocqxBZGu1sC4nzrMrKYUp3fcZATWMeCJcbss3ekdQwd8h7b",
  "key5": "5pxyF9nXgDnZ2vdP3P7QdBKcdHtm7ojRh2imLCssKZ4KzXZz7AsvheNdkfh9W9QwLbqPF6vjGJivKzPojYz6tFAv",
  "key6": "5hdHPngWhf2Pw3sF5x4o6D9jEfNjN9X43LX5zNsFTTe4WTRe6EfmuYtVYer6Uyh5baayxu3sUtMdM8TDW6uGzFwM",
  "key7": "3oQiBhCJH2WqQ9mkfhaBt7pUN9w9TNKB9NBHZZUp8PcwCX92JgwqTo4KVSoeXH35E4AtT4iMqrNXPHpLzHUgqMFL",
  "key8": "2EhXm9CAbdzy9ixEjLPuasfhZBMpmnhfmYjDBFewujAQrxEeH2VP1s7kqEQuZeGRYPFWkKD8LLpDtD2xd1V7nDmj",
  "key9": "5vbxy3qCzShbvSDUTm24GLEPomWvY8Xw9GFiiJ6wNDaxhGRvLvzgoYxJEh9m5sixeym7BWz4aDC4LFvXHEaUWKtv",
  "key10": "2FotdJdQcdfTHbTKcV1CDjwmuFw8ua6ek9b1TKgGgSFfBEiQZ6TjhLHa9DWrfWonb28Z9drvbVkeW3NSx52h5a2H",
  "key11": "2qSprW6nVvsMbvn2Hbq4G8pJv3NhsWgVYzW8yfmZi1NL7bhu1eNC1NLhAXQrCiDKhunPSYz2WTG2ZbBaZNJyXpHQ",
  "key12": "x6BAUiJamWLFVpdR5PWb4NzeYkmAmvEwK98ei1PKEAU83bMCNsZryNH8tsuo1WFcpQbj6k6TLPJbmvCJtvU9yjn",
  "key13": "3ZnqVnu9d6RqXovJkqahXsE4deqDUTnp6CxML37GuSk4Nz22BF9Ee4PWEhjhcNKjtQj4xVvo7YdtNx2qE7iQNdi5",
  "key14": "53uNHq9CKeeYVJp6Fxm5AeU98Mkuc8eNApRW31JNbLZWZo2vwKxEGjv8MHRUrnrbYDzkVnKxBFH3giiHJFFR3DEh",
  "key15": "63XzPVNhx9mWzGvfXreJhqbLphcH1aNDyScT6CknqvnmD9UsaNbaqiir5hggCtF4iGkXjazVkXa5e3Yk2Z1PSXtE",
  "key16": "57Zi9DnFWQKTRTwaAZSWc8UD3ALLv1VBPvpFSXjFhtgtuvbvXFMYy1rx5kWr8BHpziGf5TNwqomUmRAnRpy8SWFg",
  "key17": "2vEcN9SqqfPz7Fq8XdKVrsjwNWyr4v4gGEAXfpG8Lenp81DhedjCiUPkupB13p7pWmLvogNjRtTZ2V1gDsc8oJpa",
  "key18": "39wwt8btkMqUqykpW3DdzcLSCPKEAcHgr3uGwutume1yCYtktFAfeCwFxsi9NadCyKi9aFXbFDsKpjUHptDuCHft",
  "key19": "29Em13ZUH9GJnKbfFcHWguRyDRHS4k2CPmVMdaRz1bjexHerNMDdBvvXgLvYFX6VFTARd9dQZtZtWpA9nm9PCmSV",
  "key20": "3NxZ62fDfM8fMYbx9nsam3EdTGHHfR1kt5QwuACMtAfmJrVF2ie6juGVBs1xp2iBBwcL6RgNHC31drCcn4168kZw",
  "key21": "3UuHek2mfhqTiSxpjfqMtRnKKwssWko8e3woi4fLWC8Cxu6qLoRwUGogGNRcut1HK77izuqpHuvEARi9FjvT36Nu",
  "key22": "4UvxHwBoPKM8SZN68PAp84KjdE7QwDrsEGM86s1BB9usqoxKZo1EHHqv4frbFqXJciSoJ1oixi6v1ZZSHYuGy8cR",
  "key23": "J3AwmtmAwKzfLSBwdd1xafVFTr6uxryogRZQ3zqRGdmQdB8czPLcg8HioQwStZFNASxyorWNDo8aPW4ryrESmxk",
  "key24": "5viv26bartRLDMAtEGjbZ2KGC8BK78UUGeSMi6QvUpt8bmUKzUuyPXdco5D8rfFUjEEGnuLR6b6Byd65mzMNWHwK",
  "key25": "46BXDkms1qrWizU2cEqRRsRXMbDb4BAYNuDPpCvwjSCh8gbQ8SoDQmFmg6copX2TvYSLPHLukfeEYWzjztoYuxUV",
  "key26": "kE5PcTRACiENgCVp1z3u8Spi2P1uGgTci99smwXNrd41TbxfvecmvmSN9ghjJnWY1hxxReEYQmY1gVUrPWwvUPG",
  "key27": "NW5XmKJkfubKbV6f5ehfv9LKQUYbpAV2AHGUmnf4EvFrY6W2HEyU9Q6A9Bu44hBxZJWRrHoJgtr8J5GwdHTfXcs",
  "key28": "4sRpq4Sc6AZR5mA7RBrUs8swcYazHxZ9QzmVumKYabmEeUsoWpaJnamd2yT4xpR5DKW8DgzLPEJnAwWhPASv9qfM"
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
