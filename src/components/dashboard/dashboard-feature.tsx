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
    "qA7TpuyLs4cuKd9GV5GdX48GNeaddN6KZBrwGxqaxRpeBHBVe4MqubFMUtuASNXDg7qxfiMke25ii3aXVzc8XiW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39QMFtiik1PbrX6Pxottj8AUKMsTZLHQSmkgJunkhm1QLEQ1iNmMFBKBvhAk2eTCWNNnEXrtz8nHNzZbNN2n8Z4X",
  "key1": "28KWsXuRwHYmJsXbjY14WTPKBwFHn9Bp6Q8GHkvEj88fxdXwfwAKapKkKguedMvy2N31SvimCW8jLvukPtqGMmf5",
  "key2": "2dVbLA81DTN1Sijhhu6WRsr8bRxemzoRSzKzRpf4HFzHTG3k75nvFN1RbCi5XJchp8UDN7AtKL21oSdNwQfPNqUS",
  "key3": "48sXbJEfPmgZaKCfrKmyjcEkoeVrumx7FTdiwTWUGaKZ1mHsQ6zVayW3FQFuTRhD795n5516FoT75H5fFNuAbwLw",
  "key4": "4zYHePfRpvRWhr9WuqrKf72Y8Qzcpgeh69rE5L39KEVaeqmuHuHdGd1QRNFSMjNEhhPuxBN7VzySU3SdwVAxSk4b",
  "key5": "1eDsRQa8DybyzcbFP9GCEgv1ZcTPuCEq55tC1VgDKDxHbjntmJV2fhXDuVqMurS7PF6DMUNrQV8Y3EddnnZm6nW",
  "key6": "5phCARXcmWiVsK9Tm7u2wYanvwNuZ9tq9XGaNCxeaNmeBPsdgm7NY134mGfVGtkrkZcr3HuMBTXdoE9ZxXB8Wypb",
  "key7": "2r6Rmn7Q9Say65iJypHz8JuZbUTeZn3hKP63HYZH11vcRjqLHZRseTTeabjs4rPmocHeDMjHZEGioioYDdpduKRC",
  "key8": "6326stLsoEjvvCi6fSufbydMY5ihYDDk2iM41WZizasg2A1Q8G8dHELj3WNG6fJG9aWZm5tfWffWUFNvEP82TFns",
  "key9": "5N27iYdgNAJCoVdfyjGavL6dAZAg6R95HZhzS7iM8buXjY4Hhv4MpjdKcz4Aifhs9AeKjtzmbCwm8w9LDTWSsd36",
  "key10": "5V6TULaDDcjQ26xYvbC9po67bfia2gcTMkNaK2NF9jDawuBSPR8e3Hu4faCvUn4uCpoojqA9ZriTSkR42UWk245S",
  "key11": "3MucigEmHv9jPCeDPtgipXypY2JaJ7Wjc77iypZfBzK1L9TZkFkVA24ztnjQcAdVT8nyUXkrmAj5SiezS7tMN1EB",
  "key12": "58uGM8zy1kBWeXovrnTXeV7dp9sR2YgGC7qDsnrgzHoU7Rzopg24EZ35tUzFEpX2Z5DCfMHbnvaR7s5R3wsJupLt",
  "key13": "vJfmJFceZZ45Pt5nQaVpK5RastqYDvtYQ3b4175JzGwkZpQ4xAf7yaKuCRrBPvuKEcsZT2Rp1zC9WetQGYzixNR",
  "key14": "62x2HZpMBMEfTTwHEzEf56uDL6mghgHVwgGLCVn1hDxMvtrWohLEhFBsMrTjfFTtZWpKi9ffmKnm6xbaP898ZJUS",
  "key15": "48mWk6z3YT86Td3XFGBvFZ8ai5HZg23T5p6xYuu4BYcDnpT6mvUVEGoy9cHDTApghZoeGEMeYgJd4wHtrGbYftVd",
  "key16": "2gBwUmRSgTPxabqYn4KbSan5VSmJacVFCBSHtVeoe461uzD6PEJTE8eAdbVKHGwq259WtRtG2QebZoGEauiyjGPC",
  "key17": "3EtMATWip1PZ5fBp2xbA2MMvdJ36F8NCaktTyesY1CaGGpAW8S4ksTbU7HkRosmaRyAnYmmt9iQVU8HXyxFyyWBc",
  "key18": "5wBJJYR4DU1amQQEfpGe9ecfbQX5Hr7hBJXStyHk4Mdd94iygMJ6DqvgBbGN2gN2HfJgocHGKNZLpDQ3goodrEmT",
  "key19": "2vM4My1AiEyAUeqeuicXYS8wXNeNUUu8QtHQaDJn47RkWiKqzfDgVmXgsgquAuXunUtkS7DXE8PoR6Ljpi7GDR6Q",
  "key20": "YcBYg39Stne7PWQ79ApjRNBGmwq2hAqc7wTXVFHAVCaa9nxujpm44unvUeaBq75EuWSiXE3fkDeigNLBtnScqkW",
  "key21": "bxGdDnKsJWaUHcnW7uX7c7nLtPfAbeueAMSeZBb5bpYh7uMCarB7oPBjtqdSrC1x1ENVQ426PkBmRGaNqTTugWR",
  "key22": "3GzSBxWiFRjedYu7UaNeTutii9psk7BPqUkc4vxeSpj7XYgUTF1EUo5qrCT13TC88bQQaaLgqcuN2cbuo1JWJZfX",
  "key23": "4DPRDzXr6UyfvTQaEgjZemyHm9ReymGgaqgdj6SP7nzQRpERhsy9HYmpX7fd9PLSNR6dyryXFSxk5PDST6ZoRdwP",
  "key24": "2iJQKref1tfaUKhp9oUY2z6mSQX8ic8E7xgu7GxVFBMALgiyuFxsZNCHSN7wJeqXpMXPa6ZGMz5xQBMapGBWbs5s",
  "key25": "X7JgiFZKPEdTntWLSiqXVQyxnkqKC58VFYwjUQfyDnmJ39xAL6Ba42NpWLCvXQR5jfSwcKy1t75vaCSsGa6ypet",
  "key26": "5p8PVmaKMskU3KajhgPKC81iLuDSujSJXM5pbDwCXrnsosS6SwSTiKPahjPRHkzN34oNm4szoXwEjGTmDEFpqCer",
  "key27": "2ZmqSvLrh5N28rWF2ER3dttsJG2PWCgL2DQFP1DEHyHG7V9Ed9wx4yVNbwnDwB9kKzv9baebrnodaTB2qqe3L9a3",
  "key28": "3Q9yL1jGbxdAENERUf6DTN5BxCzQSNmPgryky7CfJdPAdrgFXvABzBQm3oyQ672Kfc57qZPzDE3LB8cZc6r9C8vV",
  "key29": "PsRZG6bQfwGdShMXKXjr14ayMckAvET1TurBaDUqymJsrBwA1PNWKoGecRgi5S6tt2sTG3b1zhhMcgV5uXaDXDc",
  "key30": "26xa36YXyKdSNpPsCeAaLxkzFJ7sXrJp9n33sZct45YWUJ4pioWz2sHV3gupwAbsn8gLXiyNrjeUFzcg6fNkWpAN"
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
