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
    "4Br3jRqW7vuyFfTD76gjZjDhYcZ6tmRtESWB5p42FzsmGEHDcUJpmWRHgXfEpH2KMtSoftNe6BBR59HxuA1oxPXp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xiQFGWoWW9ULNwv7fxkuQJxREpyNLfHKa8beVj18Sjk658vi9oX9DH2TVKGF83fsuGxLNjGgs7rXvukXanfaQc3",
  "key1": "3v4PZQcMqUveBF2dx7Lui7zeFbBdmefFNdMbv6K3QLQyWUHo6ts36iKNnvWU7Tn2fZVcbWyYpBgEZVHQCK99jNeg",
  "key2": "3cAPfeAVPuHSdkYAmMFhWZph444nKVrmAHKmVzB7voSdTWsgWa8RHBpjFCJ8gmAZJaAH5wGfUTjXQ8qt8Wyy93Xs",
  "key3": "3T9V1wR3MVideo5FxRmysNBjFu8oFjzNt6qqzh8HRNoYVnfx6hRuKLryHUBWVhgRn6AXGn6cGgD524LNaznSrJqK",
  "key4": "3T82mbPP1qGSCjSucbdFNi1JTB1gafcur5jUraprskgGhnbjozwJ2c54CBy8M5PwaWXn92J79Fri62Tn4KPjRKr5",
  "key5": "5DkK1vSDhZJANrDrSGcJcrU36EPWMLUiA4WMCkHCQcBxJ1EfeWnjpGephHnoziMEycsD9iWgQ83TVHiy3y3c2Cay",
  "key6": "5qXK8o2qhyd3FhuvnmtM5yMxPi25Q7re74mDJCYbNNsYMg94UMQ7uJ7LWPA2dR3R47VXcm5FMU1q5rp82foNdZNk",
  "key7": "4AffKhEBMcWEp92R8YucCZ2wb5HdLRf4DdsnrSBGACot22bdrE9sBigrBRzf16pz3HTRrbLnr4hfeSLHaErZntUg",
  "key8": "5yxM1C8dG5duqCfPXxAbgUt2k5hyrEXBdwnNfkYxYhnwQqRA7mu66Ymcqcgww2pNAL5hHvYbhcyRGsTkA4CqZtUV",
  "key9": "3H6R86kfY85Yr8ESzfm6nUw5hZPZdDkXo9qJ86KjnN2NMPiQ6qjmvfbpYQE71ENjcP8MJHyFd6EoWnT8vqBxY5XY",
  "key10": "5AET2ncZ4ygbX6HwtskjAjNF1P7xhpnNYCobgdCZLLFPtEWSTixHvkBsdW763yzGPufJFEGfphrH5UrrQU6iHb56",
  "key11": "4t4DuGQnDJofVBByoSdkMoazfBz8kcNEsN6mAEiwkjUNPHPw4bCXYAM6YkbWoJHSPZUktYbZ6WEaxDhWw5hVD69D",
  "key12": "5z6nakHpShmVMfCQFRCfCaJAsW15vBzQRyxC7uHAnbLD6rwZQJ1UnL1AiL9YAB7Ya9CWAQR8oJpeLLFH8ntZb6fm",
  "key13": "4SDGH8G31reVTL5xmDxid5GCbh3UUMTXED9JMW93ncbvqXLqB3n7KmA7ENc9owGcBPfqVNq2dcMo5kacLnBvmmMb",
  "key14": "5xorQuEYWPuozcoKB69A5S47nsEJGnf9ye5PXnABTWV48tEXP1V6cEHnVrCtoQFc3Qx8erJtggxEt38nAyByTyFu",
  "key15": "5Qz7oqrHiRuJQUyrpfSY467dPzzxG3UK5qmRJ9QtpSB8eLpUMvzPNcfXt6H3gXofb1feb562qMgeDMiGNWioJGAd",
  "key16": "5gzo4cyVREt953DB5jutRKDVAEZSCZgrrHZsDnUVK7B2T4xPBPHbn9jtQ77jWuj8njmDdE3iFr57mZhaGDX1mUhF",
  "key17": "31FJZYoTDcuAzzgPva9TTFkMhdZy45DbGHSwrip4R22Qmm4LURS6pGAZ43WELNLBaiY9u8DPMX9F9jkRi5EySX7y",
  "key18": "3Ukjfze2Bh4eJSeoH1kReu9dVxJA81KKfuVnSySbMW5xbiPxznExVNksfbdhYUZXLB4xfzk7QARzjsnDpF7wWQ5H",
  "key19": "3FRjfHiLzcRdGkyb7TiU2Dc5S2PPJoeZMU7wqu5EBEyNw9sQ6pLhyWtQ2UrcnhJXsRD3z3YNmhxjzMaGhvwdnakA",
  "key20": "25Vj57C9RYi9iwQeHNDdRqXw8GsGu7sxDJdsSYTihuN7m8VenNaJ4uR9eYQ1sYH6vZUGYsHbMiC5JKDGhkKQncev",
  "key21": "YkkK3RNiqg4wzBAaNnhHdqvxPB6Ru2s88Kou8xXTPDCMXUu3JCU1j6FLnTgFURWiYdBJ8Vz9h8YwFjAm5Z4txcb",
  "key22": "AAmuTubhfmrgGS2U3QKPTZdDwc5BwXprtoWFvUgDYG9Fgdr7fLQSzCMq7ytV1NSmPfmRsCppEWXAZFMx8UjGxde",
  "key23": "5cSdTDJo87iKCNb28E9Zqij9r4d6ScEURi6fTS1Gcamc6XEh8ZpLLt7hwF8txb9d4348SNYfWsDgC8Qy7XRdpWVd",
  "key24": "4CcRuvsAK4ZJJ48DwcumurzrPX1sW91QLfVzfZou5TYtxVqe6PaihSrhFYZafhU9rDQEKurZzBUm18qm7zZcYW3Z",
  "key25": "3EkrVrWYVVZS7H9Z9qRsJsR4wWL3FBuGzmvz3AbRdRMhLiFQEjHSKH56nuvtYMjE6neSU1W2CGAWwK9t36AA4MvZ",
  "key26": "cwe3tn5fykVsoZvx1qQ6rTZhC3boVhuo44iymFoTeGfZqRU757qePif9dA1S4dqMduCEZTvidtRNsRe5xsv6xbj",
  "key27": "4DF474yBCKDt6NLiN4WCjjZC39pQ5C6s2MTjehHuBYgPxBoG1xmNYsrk4itZxvWMA82abdkVhxsuWxNYydnQhd85",
  "key28": "4iNn2g5oKTyCh5vNWMVrizUisGzG48yVneEKudjWZyppZBVoEgj6aBfQ58cRDk7uv9PUH3Fmz77Tru8WtwgjLVs5",
  "key29": "4pRGbP1h2s41anQkr2XvA37N1V8upFKHMxDjmggYpdj3MTi1QrN17uDhstPDVfs6nHx4PvYXQZSBiS2mWRVKsqiX",
  "key30": "61kWFNokcAT5aEoRwUJWikZzozLrUeMfDyH4z1KNtoEzP3nxbZwfJACjbABV3MwmpmXd9bZwzCP2GMUcW9v2BvQB",
  "key31": "2K2gbH3jHrHQVU3qGLii2zCUcpKftapXJnNZ39CG3q7qynYfAhHza4usxHHhKU4m4DJwv1ZcRZow21rDmfeDXhXk",
  "key32": "Cp8s4XnDzv2Yy19vLQTSWKgxmDourkgt39XC3Y3yd3wtSH736tm4NzEnunZENc5Bk5QUXyRLywRrNtWdtNKFdYt",
  "key33": "RozWhh6ifoaaPCFCES3uc3RXXUjRB88JzFBedGhoX1cPxVEmuRyFYmp8o6WrCfhMuBkS9j9vRgHEqEgnxDQNmL7"
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
