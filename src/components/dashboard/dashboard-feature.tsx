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
    "3bFR8yCDGbZiBFy3D39ZWrSprVkaramNg4mKyPrv9T3FnTwTgGWHFWTTMNFCidsaK9oZsmgaVzVoo7SwkJwMvHAV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42xyLTbkSxxfRqo57aRXw5wDBFBktC1e3Sumx3n9HsU9iwPgWmNeLC5Y2pEEPisrCE6L5KkoBEKMypztKLJeWubC",
  "key1": "5Tdr4NiaanPxicVL8KuSYphgUFxessgeXgfr3QZnZDmJiSF4S9xN6qQVKA5aAAcxk4LpsFxENxN3K5NaftVMunqC",
  "key2": "5rcR3iF3YXtw9nrDtzfmkZ7dUvPN7YNQNTfXf5sC81jV1L9VmTLLSQgy5NYUo2iGBgvP88qFeuze42xsyxWdLxUs",
  "key3": "23KXSyfF7Nj7oN4mPxL6m3Q6Z4MqrvMCdxWupSBQy6euF9MSwAV1xwj1ZyqtNdZDPb2T6Lax73jPnDhLBNJBRpfQ",
  "key4": "4JH9thc1xn75RsDCCtgLazK9U5YtGY15KciB3FnPa9tV2UGiqGcigEY5LdVdwT94dfHtvuFB4GeENkgZUGWMrTas",
  "key5": "5CF1Cm61NafgEuecsrgp7oTyNDzG18F9iMT163iFJ4PSRQsk3YaQ5VHgG7rr4E25TowHTTrESvm1WReicyXWXjPg",
  "key6": "5ZTMZdfzQoAFsBVLjug69FfcqvkLbYa8d2isatFodoQvtoCDgmyBB2Jbehda1Ec3YBeayci1fAHxJnvgvxKSSpVs",
  "key7": "5Mym9X3YVaZbNmVDpeeoAFjrZNA2QF5AnHAsot3pu4ete5Lbfy2u1GAsFLgoUK8bFU9wkzKD8M2sNqWEssDTPYsT",
  "key8": "5YG17pi42Cu7kSy4S7VkLrKViK1meEswqEmBF5cKjtjY1ZxcgYd1CFdW8MzPMVeWFMtumSV5xekqK5wHTaJ9p6Jw",
  "key9": "4QbUG1P1qhEZNTL8FMx3QPiVq6sqUfoUFYCHQnham1KzxDBZWShpUctDKxaZRTDFFgNVPJz8CETecsMD6zm2RDmi",
  "key10": "3U6Uhef1Tipg1GFyahWb4516PErndwdPH4UCNeatNTxERAWAt2EnT9uW5NDSWSXMH5FjAb9zwwwR9Z5qQT6zEso5",
  "key11": "4Nv3c2XD2AMG8dVgaUn1dafncBU5sEAUXhBS88zYKBcQFzC8LjAoKjVTzoFR8u6P74T43tgXGwDQwA9SurAdnw3v",
  "key12": "2i99Pz4aVfm7WXJ3V9N5DKBJdmriUw5yhS4xrXCeE5vfVmZsb5pQuovc4b8B3axqHtiAYm4jUZ5Dai2THnWd3Xzs",
  "key13": "3nDtbxcdtoRa9Fu377roBWpzd4vdwYP9fR4YRrZkL94BAugThmy2GzwLMvsP3deyRzKPw2sQD32kAsgYQPDKiZMC",
  "key14": "kTBo4wXgZKj49B8xMxzukiXsqbGV3gyPxmLNS27nio78MYizuYFc6wGfpDBohxXYboMySUHfD1bD45boCeWzBq5",
  "key15": "5JeUCr6A84yNTehV52Vybrx8Haax9SqAm94LwPzkS8668wpiLJiEtAjuEfxVAfbniKZWZwDwHf3kVhCZLHTLYypY",
  "key16": "4xnLnsvTUDpdVGtHJt5Ebt3g55sDh48S1b8KWBTyEoFgZNRtvdagdoBLJgC4MsScVxGMP8gLDCHZeo7akWTnSpQB",
  "key17": "2MNUbixQFmgb8QDSujJAFX3TQdo4phnQ6SrDLuHn163Hjd4Dzq1XwRsRhfgsprZBZE3XSnp3ixDspa6CpGe8WeQ8",
  "key18": "3iDyDvzCHswYmHeCd7P7bb9AET8egn7gaewGW2uFEJyMMo5ddapobKiFjL681wLmJ4ZjpJ7kL6sBLW3QPRbCkvaW",
  "key19": "to76UKN9LxwX96FieWA4sDyvPCiocmUMY4fCULbbjEMtw6ZioUniVQGswDtoErYcWAy6ouQiyPNAEAc65jnCvgC",
  "key20": "nYiWhfpvbDL8Jhpj3a2otRzfAf9JAarywnmjsUHSvRnVAADdh2gSxMZTPkR81eTUqCucppuRSS4pK3XsSPPgAge",
  "key21": "3DBPWy6ocfMquEAt1Yt4rqtS5ew9fqWEBiAuUkj8d2sP59VSPtK58Y7uj2wSxVo2XWRazDp8hMw5LCngHDwSMBwz",
  "key22": "3TAoDQZg2UzT35qbQC1czVLVZhZVLuWZagtVv583ijX3cTarJatDdW7BW7rUQrnXHhXc3NTa2uKpJMNBcTV8Ts2V",
  "key23": "4uc57VSmhK13uAiLqtGqGtKcKqWA9aFDLBPwMBSDAkD5LtCy8hUwZsLkMJnJJDKfBioFhwa6zTrME2MwJH6ENtCA",
  "key24": "3vZ17Ut5TZw842VTiKMg9fXeqi1Qw5E1DU7H9uu1ukKWjuFKaA9BVMHevbAjgCcjFm4HozcGZ9BAcN9SDeFjTM6i",
  "key25": "5aerV14KqfzKpsLcbiwrL66NP3iqpDkiYTLgtw1fFq9kqcvbGmrkyrQn8AZNEkwX7fbhrRSvnQievxKJF4QnexYy",
  "key26": "aq749BAHFFuV1Va6GKJQeSTr1jXfn1UxkdTwQV4Y9vtQHTkySJpyYqWgFFM3XydbgXx27vbY2USozx3XTnGrxy8",
  "key27": "2tbKrvUem9xuHx7a9PPFqoPoWigrqpeZV8nUZu4NMPmfsnX8k2NF4v5Ahxgwy9DijcdD5FFppAe3G6PDBbizsSXT",
  "key28": "R2izGMwDQos8KhvAQg53VQhWXLYGJUkzY8chA4RgsTrd2pgwW9YJo3Z1n9meczDBDmmjWPZgeFMtADU7WWjJ3mN",
  "key29": "3iUVuvW7DLWtRocCK9c1zWNGcfKKPh4pEQepQaCVHZKNwLovtx3ZjDjLHTmAC5W5M6S77D3nueqabgDxQigZRzbw",
  "key30": "bVHoWTuDZjRA4Fnmvc2sFEjfk2EoEVuVRDmrjnuf48sR7fRd5LzP8gX5jh5dW2e4BwGPt3uvAdotmkUsG537Ez8",
  "key31": "gPAiuj7tp9WhenZTuXgzKjkaATAYcduA5jvLKB9X8QwFPvbVU11w4fvySe9HuRrkTXR5RSdYvkm6rCo2B292Qhh",
  "key32": "62K2Mgm6WMxZmrbApyvpDqWjkFsCzibB61fhTCfxiHJBnVq5Pq6zLvAWS4acygRw1yPBuFUMs7Cnr8HfrDjmoDGq",
  "key33": "5yDwmFuP4HKb68TDzNZcCjrB9rZFtWvQZwsdLdMwNsQoTWHe3KufU1y6nbAE42NfVdaHDQ25wjH6kgRvttcQwmZZ",
  "key34": "5QE7HMKKRcguYwg4bmiQ19L1s1GRwZBd1BH8P4ZnfrPxDvk3Usp1B9yLYuDa1eBAhrexErHcbM4LUsLZxmv8KuX3",
  "key35": "2W6XKFod5TbuvKaAfLtzNvbkCCHVceFVzP5Pq62f1gwzuxtXuUsCeMyeC9U2HJoLY4WoDs1ijnJ6MnSu56ua2eE8",
  "key36": "5yrorCb8F7kXQuxPzZp296VKkFsPvcFnKPJZtrmxgZmRF4tj527b6noBsWSeQLTtZM7897B5p2qCXiipQPcJcwwR",
  "key37": "35rftB4aqdVFWEGVmtoQSHad3HHJksm6ArzX5URZfbyR2deXT9pmobfzSvwYMMsfLmAKFWLFDyYvkQ7ezWXvUjG5",
  "key38": "Zy2VbX7Le6DTz9XMXsQsLZm1mTAraEgZr8FkKwHQWgCsecmT83XG7g3pw52G2pvDBLwKiEmw9yTiH8kUHp1FeLJ"
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
