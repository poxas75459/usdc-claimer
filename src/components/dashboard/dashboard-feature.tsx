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
    "3Nw3ZarGcHg73M5JFS5XigKVaAHmjz8V1JRuHddLMWoCy3QXdkxynUx3sjirHEhhEPnnNPxrVbDbDLeiKgrpQW2a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w16oCP3yTN86yHd3JY9Kf8pj2So3toa9UqPneQWH29gVsV9BCCMkzNXXFTEkHjrc3hkTbNTnBZPuEVbg7HMXg3T",
  "key1": "4TfuxucgH7MJQtbA3DSb7C3GKysBpSyeE92NaJ8yUGNTiPAKnvdMnWW9up47WJ8iF9R7UiTXeTfbJyVuNVX9ZezD",
  "key2": "3NFLwFUdzRpEAuiYATTt1j9NjctTonhS6Za9hWVb3wrGg9sPxD6vAxQGgLGnF5WjrfRS7Fk3R2VhwQ7JM3VZfZfg",
  "key3": "2xJTamMp1jvmpkbcQSxbwag4fRG1cymFFE6FH2hwaz3D4HaSNwCqVNxNM4TF4gnXq4JU8nDaKS97pa8zXN67C3sZ",
  "key4": "4eV51GVquUCHfsLiJATsomW6xRJPa7fsoEnWSeDRdTM2imHsDHypobxP7iuVCAEe9Kp9LQu8rh4DCFcpLnH21huv",
  "key5": "3DTUVGv4bE1uDYVk3LNyWNnKA7womfh6xbpjcJ6CdJk8nFuqdB39WwbjmceR66g1zvfkVr8YdsvuFJTKkCmanene",
  "key6": "55crpDrbGjMYDRZPxXAPCLDK5YU2oMbaeUqddEqr12f7YurwR1aDyeGPWERqF7bpuHQ2kFJ9S9RDWmMPM9hgMJey",
  "key7": "53LSZ5bkaBmZM2V9tB2zwhAcHkiSKri935w7dkS9CL9LrhZGGndVZiWujRzachoa6xja6HkTqrfG7vMYnWt3ZFKC",
  "key8": "dd3ZRudZBNs2phX2m7YpfsBW3ZTRBNoninwMN9sWJ6mVhrjXJbjGD48ENx3ECkRDBQArjdKorf89Rftmax4Kh9y",
  "key9": "3grSK637oPa896Tp6xNJJeFsXv58KUx6YrYrwom4daZB31dPqpHAZBDe67Qy484PSi9wuxQgPikHw6EXSmY54HqA",
  "key10": "29Ph15VDpLt5ZqVqGNxjyvxCE3Cp7AG8Je1T6Q4TxeaPrq65bqHKLFgWt7owZe7Uy4PLFemMYx6CqtguGUYfbmce",
  "key11": "8qEV5ekXhBDsHt6EqAwPthDZQVfHuaXjVuqr9Rjg6z5EMwscj7xdZ9KJHPeQnLh7GoJ5FHQazQqFwa4HUbgXHuu",
  "key12": "5GZKqeZoFCzwBT1hp4XKoC3QzUBM4WDpJFFe1QrWqKev3uGL1E4UQrUobdzHVFtmu73EbWyCHP47dejeSBtAsrSi",
  "key13": "2ycCuZnhd5H3e7Yz1fqebfR8TbuABFkcL3jYE2xMCzzWELfZdwShc5fyxhDvzs15T6pU8Jt8nmrTSepVWM6UeWay",
  "key14": "2bgXzKLJT3kDVrLyHKNeonc7o5KHR7XpBrHbyyC1Kx334vNoUq6ZeMzxz3kaGThjvAFpi5HAtH9iXVsarH2iGBGD",
  "key15": "35wqqXdVRNx5HeLgHxN1LbXeJDAvvPMtgYTUQBEd3Z4n3MdQA75Bg3C267LjQvoWp65jc5oSJuNWHfWZuYrhRCLR",
  "key16": "2DpPBzDdSa6A37GSCcMXo2MfcMcuikEvCs9pFQ8jYZSjGtHGwyBX68RWFtGuQeMzxVqmo5ePFPLCBiUcY4CxXdMt",
  "key17": "66EckqspH1hwAewmyk2gis5Vn2L4Zd4yEnqCXVhUCDYjgjhMegQFQWvgsM99Eccmzsixx7bg3az1mevEgdDYN4ai",
  "key18": "4vzhsfEJyhWASJtV1kEtfQmxJyKzRGzVDvBh2j7rx3YNKZb1c79iNJJ6FLSExdFxU1vpKtaFVSPedZrFyRD9NR4r",
  "key19": "YMK189gFLpt1USZQFRDSiVzwASZnZ47n4Qyda2YJjos6XDrfshVxzuTGPE1YE9YAyM7GeWcegVpE2AKWJUKnZNX",
  "key20": "PkPQqbA4jDZYetshEzDPax4j338JwQBf6QHKbX8KYxbdLDPAWiJ1q4rxp8TAZDBN7oRhwJdrrLaU62YmWEmXhim",
  "key21": "5CZjM8LyfxHkB9wyRZXnzcadsGbSZtUhAzLijKReRvG7wYQmdu81rurLf33j1bSgnanKTRNpQgfFfDv1QNzgjvdN",
  "key22": "4kJxeZstQi37GPLfjdEMjqsnBrV3feSyqC4FCwzXMVoWCNySKnCA6Y6ab28vpB9qXS6JGpod8v4wAgRWiZcSHkAt",
  "key23": "5RczfV4LeVkvmYwNAHU9fYt6te3yUeFkZS8Mt4zBFwiycbwBsyRn2u4Bp5YcKZg9X83U5XZVSopb7CW5XRKwEJ8a",
  "key24": "3eRbVM4Ty2sakPxQxNJgufPSVfSSKnxmJu93xTe56NCWhoXg5yLUxJFiWjAr6H1VYZd1JYBbY84r3teFEjQxignB",
  "key25": "2Fa3YGRJZJsMkrMrnFzsS6bRNk5evMRtQYjsB92UXZGzhPYPHWRRgy2LDVjHHQaLXGWqdWspFwoFhbTEwPcFkZRM",
  "key26": "oRrdejyG87V4VHES6xBVBdDCerwq6Z6ZyXkkTXeaoeS2dzN1MMJF6kLqHdFhN8AzGaRcWRR1VrtrfXPery7ZFuD",
  "key27": "Z2ydSRvqZwqqyG2GQ7DnY9Fz3zQutLCVmbyiqcbmMnQuaBhEiCtSupnLDrPz7JKP4mjHCPDbp4CGwEGhEMruxc6",
  "key28": "5sYKpaH8p2dkdaQhgpZThsagZg1JC7upX3c2UTfRLvGBD4jDXvecjDS3RmFez2qTbzvZ1tDkiAcuY1U6t1Ptq3qx",
  "key29": "5ESUyQnziRn1GQ8p7zWxJNsZQLjNzfuXmEP6ksN3QBZ4W1DfcHQBTv2iF783ABnSzRvnH9hCr3UWCwcRAWFuXJjX",
  "key30": "2uUhcgdSBSJnYvJzg69G5jNFiZYSZPEP4SZrXbmYokrsnSf91cnxRdXXo65UtxoMrKs3fGN1nxu6LjWYsfRi67k8",
  "key31": "xXjL9jLY6wWaAdM8uBGKhjrZdCZruGCySurG6yuTZtusyofv4CQaVgo65uUTGQwbTns9q8N8prXAsJtC5GnrSC4",
  "key32": "39epBsqY7gi5MeEnkJRrM78bKf1ve284zKtQiM5VDViL5GuVoFJfpzHw4SF9rDPueBLSoAj971e7cYZXDfhUVd1r",
  "key33": "3g1JYQiiZhxgDdgQE9ZSp8pQTC5MGd32wBMZu1FZ7eD9cAgMb9yGLR5imRFwbjZDo11f5KLCm1RXFVZs1M4gDV3G",
  "key34": "4z6xZchSiwYpScuEjgozFxbthbZsYj9gCtEACuuyBVy1zHU9uXwAiiYr9sPgoAAKd1fTgBBgAM5TG5EBsAXYDrTY",
  "key35": "5UbP6sV3zgqUCxQJpsTSSX1vf1PsCjPhNid6UTA31pmaLLEMz48HMM3gifjv1v5fkHhyAq5rwJDy4ji6UDREynhZ",
  "key36": "26wdis27FtGEkhsrM9DgdvKyZAkXUhy5pNSvC96mNq7zGGQkNW3u7RuSbXF3cHNZHYkFRkJxTg2b4xAzkDuuGXXM"
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
