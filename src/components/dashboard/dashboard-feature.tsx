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
    "3As4JX9Ney5trBcph5cW9xMgdChXfksyHQWSh2MPUmcPgbVQP2vJSyuVFepDEXpFrDP8VpmWaQ4i5gToCuddAXXt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mwsU53tKL96DERhxLG2osyBygxJttPsdWoU6CFoGBBTKoR6PGv99jqehLuQncGd3vNGCwEbpitfn7E3fz9JG6ie",
  "key1": "2YAWGADzRtgj6L4XU2FbEHMXxpCe2wPgTDCDhKJXqb3V2JeGkZLWRrRv73STUX3YGPFVVrvzZqqnPRNJcmF1eeCN",
  "key2": "4zFbQWdrDqEsfPDQusA3FuqnqS4Fui6XZSca8BXYg3T3g5843oupynmt8n1fJhCcFH2pNXKvQ3eoVAmK4X2JheWK",
  "key3": "5LKh2LAMG1MDBb1EaEiRAVzyAyEQKgrBzZW7GrCjkuTjygWqCXrwn3nNjjxc65Cp9VfekWFxmHhs76jLfR3kQKQM",
  "key4": "5MYTwMfHCc2MwTuTKf3ZxEip8k65kcUbCC3RwyiGdrYui1R6LA1P1jHJSdDMMqbtQbu8xiJpoVyGt9vZC3XfQDsa",
  "key5": "5Q1iWRqj3x2B9yN7sJFVNhE9zSA2GahENjqtoAn2FZzvrx1zoEQUJVPMA6NPzrAkaCNL4y4SCxCN5UabGAKXbPfz",
  "key6": "d2AYwmaH3eDzSuihYomJNYRYB2tA69eBoiQkAxktDAyxUnwaniCqj9yMjC7h4AtFXLUbXBx2SXnQAAoamuJUbo2",
  "key7": "5cEC2amdUtDrD7zg73U6ZK3ZLxLJ1zn6Nx7iqYrmZHbdb8WQ1xcnXkBxJYjhVKYUwhbQ5DZaLM4vWKniUJkivb9g",
  "key8": "2XkfnkCFUSHbtvCoyALSJjpr7yw517VptZJgaWBSdP9TAoDmA7aAyRCmhybTcY6GiCiKREphUNP1pdAeVKq31NJX",
  "key9": "8Wt3HLgak98LEPENtZK2iDNhEumNeg3uQLwdvdoFkEGqzLXkyPa8YKS7kgp6So757wLm3X2FqF3s5zKhwbXp96z",
  "key10": "47XqLe2zR4VXWurxcRWLAEjhYjH5YQyb6ZpWaQxcdfUCTVj9HcVpveV7UvXZiXZCJb4L3iDWjMVcqDsfVd31Ts9U",
  "key11": "4pfbHPMxEJ35eEbffUBaxyD3Nqzw6DjrvRR19Y6tH33eoJDCCUroZFwKcMpA5JCCThrevUFhWMLyAgnQHJ6bGdgW",
  "key12": "3TMoNNR73dUqrri5VwLGndX8MzPFyXbTdFQJCTEf5xsK4CggZNWoofd3Wo96JzePPcCXw8epYgbzgxQ2mkJN2J8q",
  "key13": "24PfgDGkTLQtpf1HcqFjX52Mw892oGohYARFgp5EJxBahyPGFSPqxyTc2SLRKxWxVoJksZskw3hPXf25SkRe7Lmj",
  "key14": "LgjfjECSnfLM2vjuppYCt43DCZKyT3Jjk8SyBxiNNZ7zrs2C3cXkaATYNHtzBuFjPrCa6KV9EtTDwwDU6WyYR1M",
  "key15": "4tq1EyLCBV2M3D5bye1L2b3h1DWqwKNQzSJvJqNy5GUsgKJdLWqgKBPtMLTRv74M6qtKZ2Un7S35oLvHSq17maDD",
  "key16": "3iZN53PSv47EBeucsZRprs4KeULKqWnPy26FFYTYox9Fqe5PXTadZqy46fjmP3DCuoGs3gcmb7DqfYmfdiYVzfUx",
  "key17": "2VNERsgfspy4U7HhXVFTpTjVVbkzHFKr6veAABrGjUgVh6mM7t2AYt9dMECyrLcrpe7H2Pvpyg2dhfBQbqA5M8pE",
  "key18": "4P3iPauq637SPwLZS1iPsVfqkxDrcm1Yq8SBaMmNAzAivHQED8NMAQHoxgKJm97DTbbM7s1nhX7M5f6zYDDVkycb",
  "key19": "4QRc2K5BUqvJcJ4UM1PzqJ9ySm9x8Abo14oMqezuiDTct4qNM9WWeoiEQXRPKU1XSxyhPUxyfgPKiFHYuKu99vV5",
  "key20": "2V2fcQoudbRGxQJ8MBmFZaK6e1DobrHCUx7vaRM8iGxcLMe25bmVAP9EXuKQsfbAvpbv8k9FXDRcnTVDbr5ePapJ",
  "key21": "3MtMk9tWLH4Lo8N4HcSbdqjjrvcCjixYBMjUN4SDdtWuTu7gFJWDXVrkJXZR1PDLkFRUpEdMh9TUXJ84poNHdjs7",
  "key22": "4Hi8Fe3eekZMECKY1uMY8E1UDQs1nRijNVqM2CpQ4pKmES1cZo8mgA3AT5mVHiSeJS9tFKkqCfs3E8Zf6636pPL7",
  "key23": "3KnRfVdLGe6Z3zUd74VNYYVUiUekYkEX13wrru41MVhpoDDsYvhrzmEKEFnNAenGbEkWj7xNxscgcQXPiQ6o78oR",
  "key24": "3XVAUXw86GQUSPXybLKsN3Ar4cKq48ma3VRwPwZcjD2xQXtw2nBQfLRkR2bjW1A8KiDripET49iwMUU5pMxNnPRe",
  "key25": "591hLj8GUX8mTdhTxVThxTz1YBesjTWV3ESRxFPK7Jzg3om3eEHw3FHNTnTwrMPR5RXExjBWBXK3jUkGZqVky8yh",
  "key26": "2CcVqMHnbh897RzHEGixAFqGSZ4JxC5hhkMRsJrFjNBpzCbpu31m8cWMAs4XVkqAL4b52d9ZVFuBrt642wbDK6Z8",
  "key27": "63N1KBaMRp7jFcfTbCadajfDYwB84sK6rNEgbe3iGF3aAnNyixhFMeqvvDediDC6NbqDYuxVnMoVveYbfCE6efKM",
  "key28": "4HJJjtw4w9oc5FKZJssHLeYNMZvj1GbSaYQ84gxVQnynHdono3x1K5viQ7SMbAqjq5td5cN7rNegrCfdQhxZmTZk",
  "key29": "2aLxw1o8QGzovgwrz1iGT2m4WhuPY3FBqQdh3U4z49HQDapMj39PB8Aq8cCtyqRD5ajopv3tnMZWp4dBK3rVzHNQ",
  "key30": "2dqqvTza7XH6bYera8GNZncDEfZp5kgNkcSPwnPvh2p3nfoCWFBh97mcHJaPzv5HzzogkkSQvBm4zQJqBx3uHEjc",
  "key31": "E3GueMhnrU3k2NCupVdaDw3v4JY98rURuY9iXho8DvvevkzZMLPhz9Z4yJL52ecYFgQtujbeeqNZjUba9mVNwvo",
  "key32": "3pdVr2eFJiFUVULcgrdj6RcnuirSGit7HEMtrpmqYroj9FFandYRWdsStKakE3wsMgfKCWUVE9qDfU548jYZ1UxL",
  "key33": "2WgTqqu2NyVxt4TubETRSMH7zPoC5qUcK3M9PETL6utPQG6YkKm9ajjsChf7KssEMzqGdJavpCtaQpcpodRV5odZ",
  "key34": "4BZ2KyvN6ngWysKnia7DcxQqD41nTGg6UJmLgf5SF4EYd6oggNXkgxRGQdSfDUL3j98xap2VJmuXD41pYCHoV1ZD",
  "key35": "kP9iYPQucUgNqVi857mCKq6eiv1MpFX1M1z93FAFVe1hMFrsdZhjJADap2gTadd1HvR3B47tQ5Cf32CJ49vWFmi",
  "key36": "pK4DzizffgnLpVi1yoAuy9dqEkX1KCmVs1Mw2vARyjp98AraZu4p3pc74BY8GSJZzfD6nWsZFT3ouKURVWw642P",
  "key37": "asYFQGrrf264g7kh5fnXLkrfQqD29GqzMrQBXh4b9pS5cEspoLCnEPPY2zT6B9WBc2yTjyEngyvbwFbVo1hUMyP",
  "key38": "SACNupGCLRS5PrQH4Fnb5FrP7SMUpKuEkHrdoLJosZmwXDLjhHNz6Nzgip96hZDW9DwAhdx836f6L2h6QzJYFKR",
  "key39": "391TyjhHQ1qSA3ZwAc8FGDjczGWzXHKz77SUsqhKq3TNMYoQfeQKmCBRZZA1TdFk11EEw83YcDCVipMDbQAX8adq",
  "key40": "67WUJzR7oAErvK9Z7HwxeUD62EU9q5TaCJQQQzomfHfectkEKpD5PLPWW3HisbiDbnUPKZAwFqc4dSpLSCbYWHBa",
  "key41": "5dJhShZ5iaer2FwR2sJud5KMrPkwbYKxi29s6pLmP9GciZZoXkNk6pC7jcJYTrLNmDWpW445uKNbruz2Vo6Yjnui"
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
