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
    "2sCjSNypzYwPGdT3T3TtM8pitB5am89m7BfWJGnmP3Swj6WzJLc9q4xEJmQ1oLKtvVGnQmLyXs5j3BbwiPrUYara"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VZ4KQeKYASh7vJkydyx5unGP3jhHkYAoegBZEmDRE7FqrPX4WCc98MdCYKo4CQi5YfKyEgtXEAqjfJfHJgAJjRV",
  "key1": "Nb3cugVvuZGbTTyijtPF37hdF9tqSMcJAyukTnpyHV5y1H4fBRcU2HzSZDhSbfZJUAUHK7noCtZxDePjgmPKfWJ",
  "key2": "3AXTaX9KDyxT58eUETVveN8ZpAVswPkzSCbuiJfRVcRNSdP58aQWxEsAhjua9yZxzng58FYuUyho4d61gWYtXJ8h",
  "key3": "3aYE91iN21x9q451mp2zStnuqXBEPcBMUUmRgk1jWipuJFypE1iNS2pxSRy4m4kMe1JSj1QdkEeqjJvm7aNaF2ey",
  "key4": "2rq8E26CofqJyz8MtxwF1tXuTUFYDESzkAYhFvUXLFfYDEpt9hUByyZevLjQQYfGohHd8fwwYiNA61CBet7PMWqB",
  "key5": "5ntsqZHQoMDnumUZaCHqDHikBrQ7jVYuDSX2xnzZbqXFxK38b9vmfc2uRg5GzMh2HHxeEPoKiDNEUgMBP6jWXxGR",
  "key6": "61bCJYwqAHnZi6DFF8zDwcDxshJ2tmeuXAX4Dr7yZsSLMNV9yVqkSJcM2PpBKFbprwHKSxoDRRL7QoeTXY7xbL34",
  "key7": "32ao3XLxLfFysGZAuhBygHbQ57dHb4k8YPcDJ2TRbNiLTkw9HHoGJq853yJJomtUwQCRaYgB4d8wgLdj9yNJMwQ5",
  "key8": "4uaFrXe6tF2o2vnQ3RaooWbPnuy3Q8unUMnsoMZpWMKaFoHqGKNLUDfH7Jngp9nvkzexoG35vPK9EVwJE2g3RQU3",
  "key9": "3tZSMkooMsMJVjQyqDzT5KRihZYMChm6879rdr3AcsQkSxgbvcXYX7S19M2qevgnuGAjJUSbgdWwv734enBERJ1H",
  "key10": "4BnX5sdHRQmn66Dg7eymQX3bYC9tcgTyisYMN439NgjjCeUzyo1xo7PPHXnEmL2xBR2gmjQhFEurxKuYEMhGZhNJ",
  "key11": "3vsY34Vwr9nySTqUc6HRF1RV46FB14ZMz2feKCD64Ph5SNK9JFuxrid5EboiS1A63VdhBBxBU21uqJvzPbeQTP7b",
  "key12": "4PUu8HFgkZbaEEt5L1J5bZRaKYZpcKohy3RXARESgicnDUMrSzn5y3jbp1tBb2WpMNhi5vTHgCH4coQ3D5GNytQS",
  "key13": "3HwqhoXRKQCHhhxKGFNHyE8BajwKcPPuvLcfAjfWiTdbuD4UnFy1mWNNw5G2dA3HXovouyir87wpa79rJQb9ihHD",
  "key14": "3cisXacw44H98pEy5MosUNvHSRxCe955VCaPySm5adiw6ufZTFpfidPxd8o9GEkAUCMhxvoieFnv5CyxVeGQtRgb",
  "key15": "2KttBcZ14f7NYY5EnHgYN8M87eyRcJc5mtSqRFSFkxdPyz25kDqjrxBYUWkdrJdnMe4MnwwiS3XkfxGJ2fMGrMSn",
  "key16": "2HGK2dgRUoZtiVBve7ecXrvsCxhsZocV3qQhaPwniXiMVgBYTpTZHQN7m3cmYdGZsQbqWRoW3VLUZWrSGhG7QgVD",
  "key17": "21LasAzMpRrBo95GzrUGT8iNWAHygcxkwziKC8wMVSvmHPsLhrCfnjnEqP2qrdQMh8N73CRd7iCKYTQEk5ckMHvY",
  "key18": "4t2sX6TrALEo6jA3gL5nLJxg7uyGEaShzi8jJ5gVvd2d7iaxYruxSum5CVMARiSkr6BAzmjgzdWNga6qSZtYzFHp",
  "key19": "57P5J9C1P7McVgNYsq1veW9vSBC8u4iiSZ8GBq7y6dvr8RiKygSPWkzvPTd6dHhvJQ8c8NCLBRrSHeB5KyyPDXJU",
  "key20": "3nhLByPc2zrsNGthz6vjgXn1ygd17YCaEt1PKwmzmr7L1Lx8iYYp7nbgUVeDJHMVvugwz15rA7dVGQkXbNdpaJr7",
  "key21": "QrsVUXvT99x8CqamsMYuS78MvUuKyRc98tBKKSKJcXtCBLy4V954P28V9EYKAfxUW8XDiM9xgRKHAvvBGdpGvsB",
  "key22": "srib8g4DrVCDRhCpT11SadVe6mASkBXUugxVhrtmrMMhq1HaDPQaokg8GwfcwY3NtYSYr3AqVBjcJiaTbgxD6TX",
  "key23": "qXwz5mgpRNQUKFTXqsyYMuLJ8QzGCFAbAAwK1HsSGVPfxZNg5hDvQAd2ixcehzKG5HapNxoHy5rNTWNv6g5AM82",
  "key24": "2iX72jPRSGzvnrs6pu83tt5L2hDvJWZfzzYSsEvhrNWSMtDWo8Pq4W9az5s4HdcNgeu2VBEZ2ETqX3Eiumq3UBwa",
  "key25": "45ixkbMHbLBhnAiDZA9rn4sszP5gjyCi3zrNfRsJShgCr7RHtk1LsJ86LzttYSyvJ3DV9H81zo3qLmFqCNgt7Xkh",
  "key26": "5TXJRh8YwFyvc2J3R8RgDgR1iaEEkfMCCsdGAKZiqamxaN3CKZTvwbqcBrZfwtdntPhquPU6Kg7gatCtK2pcqWUy",
  "key27": "3Euco38vSTjadtQ6b7vVAkXSNi74tYY3htRDFdRte2Mzo9BkyMzqWbMX3ADwv2E8EhgJBhofhct755Z5Q5FGqvya",
  "key28": "5CtmhUhf5GFo7THtVeF4is2ZRxpRu3kaGfjqxcA43zk1ShAuhoHa9aZSqa4z4wKe9qTvnoEVSTYffGdWbfMJBNxb",
  "key29": "4c1cUyFxSSFGgHidv1tnB8mHTCKg6QW2ena9iBJmeyV962DmAmc7RqowmAs5GPxYYM1A2gEozvxx87ZZAudpuUkJ",
  "key30": "3bRBuXY9ppth2MsjxFDAR8Lygn9m5mi4Q5ZKoo5hV9f2eR33rC3DoE9rpVwRHfvePN87igxJkGt7SYB5hSwFi93N",
  "key31": "2HkRRyaHNrCAa6d9Q7sJiMgHAyhQYZaoyuB5aoKYhpDB5LMkPqLJ4tezMPczU9MjpNSBXS5FztHez5hXEr4ntrmJ",
  "key32": "3d2PWzaYZRkr8Lii1PXkb8bNARk4R1poaiyde8aondmHqBCkPviAZPSK7UNnNfgnBdo7PbniadxCe1Q6k2wHejRh",
  "key33": "4MwhKrVebCMRxBgTFw9PYJFwsLMREgXzkQaekxjUXjzBTKPZdf3HaU66nnXLETkuu16yP5jFF4N9zKqRfo8BkS4b",
  "key34": "2vRDL4Pm2b4ysJghrS681eLzTQ1RUMKiEf7YubezdFyMxRLiRWZpUSxgHGrT8NUZDA5KC7Bk3hV1jdpombW131rY",
  "key35": "28d7ZgCqaYrgjbM1VSEzzYnP8vxt4tPycprUGd6nN9Y2AGukCJgfVnYf1kYJQdGACni5eH4ZyJZa99xE3uGwapep",
  "key36": "4pC8pEhPbyiheotTFTNu917SB5NWqfJJQsqJnRnavaosQVZJiVg6kv2HbTYSWuMY4FEw65wPQJcTRV6NxQznaLXr",
  "key37": "3GcqP7GmDvwpdhz7A4kbN6mXjDG1ksXmXyHqbrN9bKo8FFdoH6t1H1SLESHDiVjKHeUnKNFmbiwsbX9CmVDzCEqY",
  "key38": "62P2UDCXpkWrLPzXxT1G4DUL2yEBoUxUhKXp3Uw5mZLuZaCZokAimm1iHRPGaQrw3kLLdraWuViNerfPtdu921JE",
  "key39": "AMWKfaTxvMQo3ta8yaog9tVUdChUcDpraSFTmKeJk6HDSEQHcXr8f6fyT1aa4botFCfpaSNzA8rPyXaqgL9B98G",
  "key40": "555iXZ1MCNFCnqmeW68uuw2k4PgEN6F3ePHVpC7TiwqfwnHdhZDDnuVRKhQ7TJ6d3m6gy3VVzrroR3cdvRvZVvXf",
  "key41": "Hqvnkb2rZRj8po1VSNkcxZJkksMLqTFuBvrSFUUkKEBksF5YGfeXzK5gomovb8Z7aZCJpp9C1CRiXGuN4yw71ZY"
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
