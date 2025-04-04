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
    "5p86mW2etEaJbQ2m5dBAu16fMEbBfLsfKYS9rLtwCQ8PgVRL3YmzZa9Vy6hederwWB1r2i41TTnKkvytsPvd3dcH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DZB7hNtpuLC3S6Cs1vqbFMq3sR7syc7d1hryeujZutmBKdoJaZ4ZmNg6xacLwahiVfezHCZAqbjsAqJa7mxCrke",
  "key1": "57LUJfPU1Epowj5581srt5LG6h4E6wuUUmruz7qHiyQYX2JnsVVahLSJzDiWeDBxEkTFpwmXofEWp3Cp6uf9uAAD",
  "key2": "rqMfa4ZYvV7jXNEBNDCNViXbCsEDh1nKAX43oxRW1bRQpnWSfnyGRHyV6NjuP3663rENGC46ZCDXZvSTzbNa7UV",
  "key3": "rcAeKiudRvWUHWDiPJNXKokLcVmJTeUwq4dCkoA3jtsL6giySBPfvcGDu3ZQ4jV22YXGH7kXpGuv4DTTkeFFtEv",
  "key4": "54U7UFBmCapZTg1HnNv4M4tdVJ85bExYNdvsN375N3SrhNPV8Pz3kB9tWYPheoHAFSp5S3YZ29tmjXNf2nchczDa",
  "key5": "EifynGb1C8zkqmGCQpggCFDA9MUPohrgyXP7KCp1TpXZH5mbN3YEkVnZaguKjsQnV4HeNFRPNCkiXYDKSqsjWrs",
  "key6": "o9R4EdHM16Q1vXaP3k9Fu85D73sZoH28cgJYmepQNofEhzfQJQsK6nJ1XcXYNza6jf4vCXz1ZXw4RUKn5qkCwb2",
  "key7": "2q2ejVsTvnG5xBQmD1PdVCiR8fPEjeiQtHTRZtBycFX23Ea8C8zhdoXhiEkzXKubqMDcTZX8v8sfu7Xf17PCa5ha",
  "key8": "5AUoktP9QfS5EHVxU1yYhw7m9euUbGDi7hHRvocLTGNT24h25kh3imebVMe8mt1xYWKcNiNJNQmqbrY45N1n2VT4",
  "key9": "59VgvsRutsnTA5UJXcFhHpDJioRgMrXc7xxqJvtpvbUdDiTSGf81wFULcpn9F2LWB9jTG4WyLPaTTHGQfWyheigR",
  "key10": "wJVK2PkbHHCy3hndbiUKqTkK2RKvNwtQgm5cx2AkDTFGXfUNmUCKu2it4oYJxXMpsrfgkbMuHHMGRBaoatY5gdu",
  "key11": "4mhMzePSiQJUKkisXJvB7Q7z2jNwx4hFDTAudstok1sRXw3hNV9QHoFeXPtUGpasPZAQHFCx43CrmeAb1G2LK2gr",
  "key12": "2NkeHBpBtvTmref9vZeXY7BH1Xamj2Z1higjfxuMJDV5B5brgw5uj5Tbkn1DarzgDgecraU4jvsEMVxP3PCwpZQt",
  "key13": "gNtjH55L8Eyn7Zg8tUsRrMuV7v82Mju5Hv85PWckf4qwMpfDYL3PrtUt6GNESKkRngbZbcToohk3xjmuoj4vsat",
  "key14": "2BnZcp2iyNU2veKy86fDsdhx7bD3zEXuzeUbUUFXKWo8TzzPxT4JZ3uZj7dQuVG7ZWCPvZK63hE7R1R4shsfABD9",
  "key15": "3FiJbsJThh1e3P6hsa2jbhB9Qb9K1cL3DgERkGyMqQbwhvSiGTQUua2BpkPj8U5axXAfcmNjRmVoaKK1eGrNGLuZ",
  "key16": "5YL85Fv2ctcEccWh7ynbTGw8qDdnhSFPATfqo9iMG1LFCVKo4etVam52cja6n6r48998YhkR676m3SWKdZq5sdu1",
  "key17": "2ifx4mPBadiSm3BHqg9wfZYh8qMyN4GcxSyVmDmyAKwK4rBoVnjsSgAn39q5YpmG3UwL8JRFCxjZ86YpK7ZMSVov",
  "key18": "3oqik2Zcjtbbmvpy8a5vxghUovkSbapMXo6YrFnAkjaad6fmBtZur94Abf7YzV5wnSkttM2N2H58ZNfXt3gocwcx",
  "key19": "2LcpAs5cnhTcVQYB8eJZtUc9QKqgDxV6CzCKvCvJmVvDb35ckUiunYX5KbXpDqbrtHQTtwFkZ7LBt21FXK15U5tb",
  "key20": "3q86R2P6pKmfiUb75EDPSKLJc61pd7egNgxc25BbEbsXJGpdQu6mAyf9XLRADNs49ncia67wX6EPk7V9wL6Rg1xU",
  "key21": "2xRy65gd6TbcPxfeg5SbbAoXQx48yQeAuhMLazyyf6kqWKoLeBceSdUXvqQXgs5WeJnSwiCSFTuaci4KKP5D3D4m",
  "key22": "3ueWG8ELdgWxddHXCmEPnqMpF5JHZDcgbcPa5G16kTvKP39rCjXQe4TRrH4HpG7aiXrQTAj8aoAqVE6RpUYFAZiB",
  "key23": "3sYr9cfZDY7YGEhgnKF2R49nNM7WWVpL9DhGv5F6K7HMWyveduRwtzyo2wUqq2MpcYVKrHniLqmdbRnapnRhhbB7",
  "key24": "5zYWuoHtBD3nLVjFYr7ZYnJGDGsgdV27ruoHyAfeawZaUF3CawPtjswPwTwbv9pakqQLWR4ajr57ng4HZXXymBLM",
  "key25": "3tghXVFPGv1knfAbV3ZaqwsTKkapZQe21gRKsYif6HTAAn5zzDYGH2meP2t4PotESz3B6fKwywxr6wrQMvBLmoKb",
  "key26": "5P1QyJ48SZwgBpkcPFbGpHCYdHgPAzoiLhCauhpyYqHD7CTzetvbfFBcetuBrEfQpnPNtw9pNbwusKpdgwX13A2G",
  "key27": "zdJDnExp6qHoHT63Jw4bJ448dueBMzerCCLLpkf8uBa29dar19qe1V34TRWZncEcBbqNsBPbZmEamY3oMJHVSwi"
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
