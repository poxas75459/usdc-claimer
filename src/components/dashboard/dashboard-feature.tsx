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
    "2pRPR19x3xphCHoQD32qTKzaJimgaefYbSB2vYv6zQKjyvyBvqnRw3NpEkETvx6fRk6fxdjvaSA4wuUx4hNA4RXf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RxcjuUvWfWvKFejbQBUK6Ri2XCmNFqQdy468PbM5ReKZfPsMbU5PpRttRBEXKBKW1RHNRBNYQpTs92vESsq5a6g",
  "key1": "227u7FfB9gV3coCTKT7hc1TtfFXKiHJBZktP6SSweUd94RpRwsubutos9TiLR3hwkgwMKKiD67bjyVCDge5xvnCH",
  "key2": "593qbpHvyJTt5anjGG1NPKLL46bK8Wk57NwB9XXhBLdonEmVjEueuvuwbV5PW86qeBujzMERmircrPRzdDsAHMV",
  "key3": "3dJvzapP8gAd1C5AMmPiNxbHN2d5hwnpmgqFxp8oMahkZbyNoE2ggA6WXyLNj3xiZcDpUYkAEk17wmnnLDxN9c3m",
  "key4": "wm3iUmtkeQ6iLrP334DFiMupJdD26hE4xqoTmdXwRqUSencaLrcTd28tbZcNEGhwGSmR8oLw478sZcu6y9L7Ni8",
  "key5": "3ajjHQGMoqefiBVWM6mP91vZTGACjUpryADAdLdw3sDeNQRtzcYrxBeGt6tPiBn6egf2Zu2ahUUiC1sMVyrwRWpe",
  "key6": "5SVEWzTjnWbKjbBTF6WHLsG2p9mv9GyF8SDBo9QTTqwRPUG6emETyNabB6N2QkPVKXD8QekjiMtC7wopLcpnBrnZ",
  "key7": "gqfSm4vqSUK4FZA1LBG8BdLq8vAu9H97tMahq6RJNcNWX9N4ta8gyf6JFbh2gs3vwRSs4RRyUzzNUt6md36TLJZ",
  "key8": "4AhnxJ7cWm8syj7w7HvofErxNKcKNzjE5UsUriPbKNAkKkyfqVLXkCoNoZR3M5KFDYtWzEE2iGZL8G4sfuuBzTc1",
  "key9": "4M4aFyjHN5uTmwZG2ASMwbtJdvbBPSgznLKNNjxvheDopmJiZp9uy55wcV2Y8w92Rg8G7RpEhdaRPtZQpoTiJRzf",
  "key10": "2yD9mLKn3UUyyWQ6xbQdB6VgLaUqMA2NreUqMx2TDZRs6Wwiq8FNPDJc5VCL1s46FxHMYZXJZtXZPwdbQAFjjisJ",
  "key11": "45B7k5y6U555HJFwbs4CdJonZDPqP6jkabzJNPGKWcxzKvq6vtwVBWjmizjvzoARLko3tbYLTpCWCYEWovnsfgpi",
  "key12": "3EGcb1um4q5xFQP4ASsK5xX63U5wHsnGtUesHX7ENktbAqwfrWzRhazbqVZq14kN3UvvD19RzqDjiLox6o4CNDnr",
  "key13": "6zcJrTAea8ytnfNrSTCZU6fUsNvM6rwBjiE6VDDTohRtEqA9fddAfJNHSdYhd8AwtmQLVRyMmVSxHRX9SwxAVAq",
  "key14": "5wU2qMjEpjB4YaPZwPaXxKpUtnDpk6R2iZ8CAc9axXc8ENfQiFKid8mLTAR3m5aogGxgd16Zhke3gYpzzK4Pdgsd",
  "key15": "37iNwrTzkQYg8F2c7TGtR623VfJV49YDQax7ZN6LwJ7P3QKXVzcyteXYVvCn5UBL94nhCVcfNJQdWBEVoW6QkAzS",
  "key16": "41k6SHk6fDQa7SCkEW7koiu5hvtQVBD1MBnetzsqRgdP1E6FwPd2KFNpUrrNPkyKodgPeQQRUMzdjhGos2uS1vEq",
  "key17": "5XjLmjFxWEyoZ2mc5nBCFXBzxVzyCRGhkusDTxPuPhnUsDrgotpNXAptCJ9ZbtnFekDSA1sWapvK4qzS59jTbfDC",
  "key18": "5o8gJX28b89ZkVFueuMdfXRutdFRoMFPEPsJjRzTomJ6wLmKyAXDPh37NDt7LG3TVDrWz7DWjH1aN2fSoWpFDhT2",
  "key19": "5P78qpKorjM3oMMCd2R9FfyjfLiPc5eEEpnwfiLR8A6fkcAJJzmdVDh8MUMpK8uGMkvaoNbDyDiPjueF2pDDHz95",
  "key20": "5mrN7rdnqh9Bc58cLn6KooyF6BNHM354pcbvti66hW3cmSaokp6UYoZCHoQQDKKyYHADSjK99X9oeaRvdPheYY3F",
  "key21": "3ZUhQUNNceszUADMXdiEWKKGo9odKMSxcyFMkabTa3qmeegRN93J4zuqaf7rckaVGQUDUruaoajRceenEWPRFSsY",
  "key22": "2g5E63RKE7HjtN9ktEsaumQxkFQsjyEgHLn1X4g3DUi1VDqntGJTe4v2GA3jGr33jnshdrcRSerbGsCJWPrL8Y8u",
  "key23": "71zhocjqsF3tnb29Ch9H9LFa1ENR6kooZn7cBP8YthfZXKiJHeEx82HAZkg3DjkkSo8gx9S31QmuAKM6DBbVZFX",
  "key24": "bpdz6GWYMqYpf6ejJyahqv5YbqzLEiXWssmVP9nLaWLqohbC7u9qMR9m5WQi4xsxi33sAuLTAGcNTD2QBAXzxMF",
  "key25": "3Hyd6MyFigSuAJuzquqShubg5mivr5scEb8mExumSm62L9SzXKvpmcc4ihAgSjuZW8NSFFEZqAwNRnBW8k8vZt8",
  "key26": "kQjUagTi3C92StnrTocjG4Gbkoa3Md3hCXpgBmjKo9BCVWaFeTPS2Emm5ZJKKJ31UkHRa3f13SQKnVz8wDQhqBY",
  "key27": "4WEefRsu2hT5SdtMmpStyrF4K3oqGEj9eJJCzLdpW2JYvbmUD3cY4FufpCzGyevFwxxVzdzXC4CEMHSiLydUq8UC",
  "key28": "2WupxH6HyfCzfxVmHe2T7bRqBm7Z71BoLzeMrhUA6FVxuS4uQGXWTfuWgRHxa9ZmT7B9e72TRYB4PCW5EDGenXGd",
  "key29": "37G1aSbRv1LcoBQesHwaNJmnac6tUz73ZwXwefkionDiFkDPRCG3sv1ASDNuVffoYKd6abS5tZzNpcWZLu9EZckW",
  "key30": "5GAsSv9KM4WZV9dehXLA8rQBD8mHPNaTF9Pid8DhMq3roSbmN2Jat1PPaGvE26aCpoCn75CHSN2YV65PHDAWjFta",
  "key31": "5KfRRTAeNRrEUfd2jV7LhgeJjZxQb9Yi3tVWc61rdkxXji6rBFFSv8AafQKx9k3mCAFxD4tPSiAY9X6PBbCNKYis",
  "key32": "tS4pbBRLw4kYuzx49gA22iZAZ59BBD7QLouN6dS1g5bid5KumnJxaNuGPt8Rr7Q5AGGJQssdH9ramVhrKY8RrMG",
  "key33": "7MAwp1AwzhjME8J1gKrUrYyEoT6jADTz46NBSK17nHsLzke2GxMVoYDKxffqJRf5Nu6S4Yy4mXx8qR9SodHqppy",
  "key34": "5DDUuoHDFtGNQHegqW1SfnXvHVMJwH4BAJndMHTLdnFmUNAm9oaMYBbD5RQgtDyHV4X6z6w7w7ZQLTSUqz4i61sC"
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
