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
    "5raCTVmFzkhpFwHsZhnUC7QP1XrqQLyCNiYdJgT7hw5wajUkddnHgSsF5gPavm22bWURYp928xABAP8ikyzEwWRQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zu22AXRbv16QXEr1QFeL9srDJiNgz8Wmdx8ZJBLjuQLjB5r4UDtHtgzTQEWW3KNitTNr2XGEtMdVBUhBzpzzpL4",
  "key1": "63HJyaMfnXeZKDEsVU9qFXScGEAvae1YLFm52Hs1QWEaULdP4BnJfCMS5Qr5x66sguYw8TNM3enhJ8yTkd3fN9iy",
  "key2": "3qX3Rpw12UH5qAitf7yg926uDWxDnXfC5UxsLYCvEHCJidtHJ2pCiA63JoSRnnPQtAxvBzfngKzmXzpqe5peCZWF",
  "key3": "3XDSLhAT3mHBfgJeaQ7ASKdtptqDuKKbdpW7MXwrPr2t8KUbuTBv9x45n4XGyEMeLmjzRRE9LqKuDfbGRTKvfyEh",
  "key4": "FkjK3YPbehTXLkxsFe8EBDJBWZLABjJ6SBXZ8mVwFo28GCazVYXjnB6pXBVJC6X3p3Yi13ZxMybkia7dkrLRnWn",
  "key5": "5EPX6otVV5caWksgC94BLWCnpmBgPmzHYwwNUNVtKASnYQS5RYRBhDyo52NbHJs8qFjGHkbfWtvzfmtUxeNi6iuZ",
  "key6": "23FnnT3NwTAEjcQKVQqVsF7YKNkKKiTE7L9f7oEM4KGvv5vADCqfa1hP8LQhyAwB6mSyD1mC25eJDZfiwfU86CC9",
  "key7": "pxcV3Ttz1j1bqjHeqjbanzc2V1y9smy4vWAYRiHR2hCgnnKfVWsLw6YTjgRXShLMVoXhTc4BR4YXtt6vRQq6f3M",
  "key8": "411cj9PbpvjgPNVn4LHmwM4wzKCRvY29U819Gr5Dvrcjr2YHr27ebCvSLv5m4XgJxfuzENY9vf6QvZkdnv4MLfQ8",
  "key9": "4ZrdEtmKV5kYxEensk1W7y2jHcuz7KUDoecRfbW9tosBDEDn3t52Jup8cnxY4B6bWANmwsFSooFRcAovnWoL6sVQ",
  "key10": "2MrL1gqsgVrJVg9156kHPpbKwZK5uC3UVpDwUN9RiqQVcn6jF2UNrAR5figtxGP5qsdWv2jBY3TMZF3MyVyDfEhy",
  "key11": "4NqsXZP8cTYr1LfHUjwqzXzgdyxpmag9S1Mvw33K5X4H76YCnNomxiRTZsPrcspH8nitrZZ7SML4gtxpM2f4RY6B",
  "key12": "BMN7DL8k6sbDKkgVuTLQzp5acAX2Wxyye7J5RMzZ6YsirmrZXW6vkW59AfHBEySXzSxTA1aABTQ2Ff3hWikp9e4",
  "key13": "3jSEKXDqvVgEAy5Gx8pPwG6Rko2N4htRPLLWSfRtuFBTCSeRaLNwTecKfY1Z96fLN9Mq3ifdmHrPpWa4MyThtVdc",
  "key14": "65yswxYVFKKPz4pTr3HRhBfHhyfPpuDYFvEK7DRDDooGmDtKqoowY1kgHHd5sppFqa5NWSbU8E5YDiKfQ2fW7ixq",
  "key15": "DJ6pj9XMuLe9dXaiKpbH9oVrQTPZCo4nn6vYvdehkWM5dPzo1CuJyxkLmWxNk8sCxfQhsSpjftpagjwQHuLUBXz",
  "key16": "5qa17ojBuVUC9NJk67VjGgroPgJVka57u2QZ1qcPj2yYjJw6KbNRum1nA3rWo3kmU3EnLz5EDNJ8v7jqgEASfyaW",
  "key17": "2j4wHLFNZzJJxNDVgjmD9WPU6oJqLAhBa8ndto8ipdGXo9zfPwT5CMBrnqfz6KoZi7hBcjhuLuspVN6DudLfbHRK",
  "key18": "2DkuJrgPojVwNtm1nzyW4D3gVqwRfyBWuuw6AnVaWXCNzJ42ge3wh5PLD9N1KLKu3BckmtAe1gpPLDVJSdjMuWa5",
  "key19": "5XeojxQgwC7kB1Bf4qRz6otPoMWoGE5wBWFnSZHHxWna9FHxE7ciqRrQRciQjMxFeoN8xumAs6rTWUz5avbp7egB",
  "key20": "nxRKFURUXR1hJUr4PUuQ6CnRnvSieboz1gC3f7afRgAdy87EVehCeiArv4d9QkJ8qXJt3MpStwsDGBidSbY9uKx",
  "key21": "9AxMW3Tb3JhJuo5ddzXwXNuc5zRZC32agn1gSKWpAz8K6PFCAnt9vuHeSwrtYurUKVzrSrvTLy94LejT6WsWCq3",
  "key22": "2B7E89eWDo9GcD1UzHjcWTH8v6vpPG9SsKWQ8wyH5EKP3aBtJ5nVCMgPxCkPCAuHgXTRPFsjcwsVCoCep6j5AHn9",
  "key23": "5HNetx4QkAhbqkTXd4N9cWVVQ5VQC5ym5mH9Txfq6oEugY12TXs7j24jnPL6nQYUnnDZ7mYyFZW2tgAwo8X1jg4G",
  "key24": "nnxaNqthaNnXR4m79dw9YHYnennub6Wjw4dfAnVf2bRxHHRK8FuYXkvBbxwqxapKHCfpZBgqeyPaeKm55xfGrcM",
  "key25": "fhctvJWoLWW9HVg2V9VKKWmo35qDV3nCZLPYu1QT6LmkACiD1r3wJUaZKPgj35YJ5MjLQwk972j5hpAqhGTQVZv",
  "key26": "3cSsNNwUyFd2uDCUvg2vzfnojUaw8SM1hReKqktgbBaGtjs2V5Kc2dEAV66BZEEmi41gd6vBqS7ktGfrAuWVYQru",
  "key27": "9NzHxf6hs67SUypwRAco5mnC2hfqSW5kNYnenbPXLN93w5vEALX6DVeKJoV2wwSHPRAeqShxv9Bna9frJ7rhpVC",
  "key28": "43MqXAoLQ1jiiGMx9HpqJn6FL7MLNtMArH2GkqmrLDDBMw67JF3ooPJq8iN2kzTL3CTTtPKSZPUMx7UmLvQrTdhK",
  "key29": "2MxhqctP3fDbfaJqsz3RC8PusdD2cVR1xDK4Yv7WiTrCTxywXdXcRvGB54yMmC6cwZPK3rfMAXpzibhU3wgsUeBb",
  "key30": "4Q2DrxRGFQqWEY8MRrLdrPesyZXhTCDtfN8DFRGks64kJWMXQqvtNczFbLXhxNoxE9EVavSKuks2Adn1bEeDtxYj",
  "key31": "25HGMywD7UTBJxe3DMPrcqaWTchzMCVzGgaNLub81HSh3UTEZ8Qmcze6vSExrfT47fhPt6ceUBdXAKwLf2sechXe",
  "key32": "3AWaeuuhR44pWWuGaC4LguSEPiYXHumCZ4WrRv2jwnDmLWmL4qjjPwLmmpYzxVEaBQkCq1bSqmu9M94sHuerFpxA",
  "key33": "4WQpeV5Dctj3yhWTFuMFUQUBoWPF3Vz21V9Qqrgn25n7d4nwxqNGMScwCJJe4KBhvE2MK58VSaedaDLySsN34hez",
  "key34": "2ZNAAAAvsKmwiRZwQ7gV3cqFBuwwwJRfQcB8enKWht1jWNTVW33es5vhj2NxjkdDP83Dk6v4LbyPtURz1bECbVWn",
  "key35": "2bWJ9epqhosK5KLYQR19aZNs2nGJRsA1R4v66wQM5WgMFTdXcsjp4HUaC5oo9Sg1L6RhRoVxDrojJrxf4XpnsYTD"
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
