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
    "3U9euvSMNKgiD9Sdj5Pve9aiRfXJauGxRVxR39vHJqcr1LNqVP2tLvZLfVMYaPL3VTVMfQXC6Do7Uo28epF6YFmz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RoJ1gyEPQdX5W159pDT3cWHXSguYYbmrSJWiahmZDrfBAdqEj5sujYZMxZ8ag38iuNjQqGUoVgjKKUUNFMYqmM1",
  "key1": "61NTGuN7W5hhvyLdbqkEJVvmUFHXzSnfZUA7PetQ3bCdxq1eDQaDfWNpw8qq9d3zycnsPQvD36afHzLpqW5mLuRt",
  "key2": "5oD9bE7vPQinGXhZZPyrPJL8PHpNXDPtasVEdX5Cro96R3AKgZcz22ijyP51EVQ4gbpvemXfVGyG2iQaAdruCu6E",
  "key3": "2cnX6FJWmH6AT5davtiy1PP8AUeS1pVo16eMSmAsfiUKStuQWK7c831DsJeVFv5SpgN6mAp5Hm5Yp1rUM6jZ1EVi",
  "key4": "XunE8t3vD1PWKJ4CFNyyZbhakQzsRtwjmxzCLxmtdVzcfTBAQBgfFjrWbTvprbtSKgxAQJz1i7QKmGLWMrLyPh5",
  "key5": "3U4Wcw8QmTb7ce58rRiAXkWAutLwMd4Gi6M1frrJqVZY1EAkrfeg2xzNR3p9u7UcTEGh9rpjR7RqDKgRc3bsg3pz",
  "key6": "4BFZmH3UuzPQNDyqhZooHthk5quhpESEu9SLDHWjQuHdduVPM2k8uC8SbzsD1MNZwefFuNS2fkF6ZBht7G295VJz",
  "key7": "65Ju2JbDGG2H6cgMqpE278dgBpaDzd39kt56uUX6WmoGamF6WiDMS5ZJSRVHFC9mXcEKd5cmah66gYPvEr3ecR2X",
  "key8": "38mMamC1oofrsRVuwwoVb7GaT269P9iESdEUsk8e7PZ7AdRCBTujVAcwScVfhKdxy1up3DzHWvhgQxn9LN7ZVLdW",
  "key9": "2URV2SwZQ4bXQaJ86x3zDHeQtSg4LZu7wpSncCGrrEGNVF4fVmPgtf7YEdRdamHBvhhgMKGeTBFD9wZX1Dx6sDRH",
  "key10": "5kEyNqNf73uimrB29m95J8jSxS1Ga5JWRRPxJ4Pvp3HMfcvPAsSbXjD9meYaR6d5Umdxfi6k6ARfqi3mWAW2K5ae",
  "key11": "3iC2gebhuKmEXeGJ78LW7cfFrhuJgzKUeGvaDgb96D7W5oqnC4jutfQNbeymDjvTrgBAEV139nekvKVzkTWmQgDS",
  "key12": "2FCzgKDg1J7vaviqFRWqsjaqookfr7yWJsEW1GrrAjTxsDm1Vn32pw6aSqSwUdPG1WRhbCercF23mTQuvhK8MbkZ",
  "key13": "PzVKM1LXiZKcDgeR38oZP5K3vC8aJ6NE52kpvMGDbiFBfKuaiFRi5MWq3ADv7ERkuuqtQAB3QrXvPirAJ7gCuwE",
  "key14": "6642EjdHaLRHxSfdf7xYvuTFF8rAAoJK4EVgzaeFY81LxYy8otcLufL6nJmBwqfpQ9WMNskfLvNBJBhCoNqqg8kR",
  "key15": "42ZC5K36Cg6aRgYvzvQr8XZZACH89caSrMdF7YdNbLbEDUKB8KJu2A14SzAQF3piiVmVsJ8QpHinQbd85YhFop8q",
  "key16": "eKCEqxEuinNHdFyUCAQ4Wn1eze3kjfPPRHmEuHr3QVPxzbHh7qGXgyeaBiBN9QFw6WfS2XPVUijJD9cKK1Sfy1U",
  "key17": "nFzYC8Nk3qEywUPHLvAksBrqSnES7iGvSS4Jks9QH92m2umxErkoZxsVKLdX3AuoDMvjZCyrSxxbWbbxKiMP9tZ",
  "key18": "2nYYY7WDptuwv3J3ZuYPbR8tVwmCKnSp1hfs7DnSDLcEYoMFnyUQoKMLbTTETji3XSkHWV941q7t3Hh1SB25NtWD",
  "key19": "2VBRxo11mpdpJ7zZZTCtegZ4Nr3NX7A9fKS2eJaceHM7FFgqpGef4PmE8hCurV2yoTNxtK5N5NHC9k7ZEC6htAgx",
  "key20": "2BYne7PQXAwrnEbYWC7ifGNwqibM1EvpPTF1uQo2ChuSiEQe9wN8jV4HKeqrWdBPQARujuioPEkExf4Y3zvEX4iK",
  "key21": "5m6M5rS99JE6hTh5EjHP82F2X1Q96H7DWt1srkNkroRYNTYs9vK6VuEkYYhP5wD8hdgpmFRVTETzsSWbWKFPjZwR",
  "key22": "2nnrtG8aVMHg2pQT7uCdNgsYBYJfueVvScg1Rm3Np88muwkYcmN1etBaYxtaR7Dg1SXjmzq7XxBHmpggHVmNSLnU",
  "key23": "5PLxPTarE8pnMTZnskZmmqM1N7ENTQpGZwD4wGAvfrXYku8C3XUFc1Nzofx7b5WaWaoUuErzeBomobWCiHVKoXys",
  "key24": "5g8bZqJFbZn9Yny9rM2R9vHcCnvnEyzsN3gjpWgnvyDN2t6YoAVEbi8XEr26GPbRv9ZCyWPY4u8jQhyuMtdwQUTv",
  "key25": "MqNFxQ5MDyjo8YyyseERmYBBBFnxTw1soJDnJko5EcdnVXrLSMx2QyEpCDfpANPvsZbJyX8RPzobahGZP4xGNcJ",
  "key26": "3KA8hNS1YDfhtccwRbGemFDkpZgnvLCdzA5eyBazR6aMCJ5DJpabYDCLDWdE8omxFHK9E7AsN3mBkYiw9NW31gGG",
  "key27": "2MiyvNRpt2JRdCgxMw66JTHuLjNSnU3KeJGgZZqKD4XdQSSw9w8kkctAWBho6qx9mYbsd3SYSjeFjZE2omyJTN7Y"
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
