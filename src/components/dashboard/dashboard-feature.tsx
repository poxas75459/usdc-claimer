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
    "23RPunbnusYrFUTXHevcMQR721LQ3CJkaYMGDuJUDHZtQVQhQ4oXv4m2AYTypzkM54oSsYSoXg3NWQagZCtzuCEN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CJ8yAVzGGLSUdExJpmLgAzsiGkCUzaQARmCfmPRV2Zxjr5EgkJTms7B6m4VWfxE5nGikbSf2EMVQjRnRchka1ra",
  "key1": "4aA3rWfAQKT5xSzN41Gdkwk37UyU3MhFuyGFFVFD5NAX4ygBvSYWDpo4wnNU3HFtaht58ofbU6pho7u4EqjC4vAx",
  "key2": "2JLQW24mNvq6gm2JLGnm8ZR8JydapFDjL6azG83LpDKR9iXw82GHCxHgCbrke8jKMtepqgkaTbKsU94UcdLYAZJZ",
  "key3": "UnzBAt8NSBymBy42DHa5HdKMPzUbQLsVxhjsDNR3h1tF18Jzgggh6HjC8wQJeQfDaRZomFTg4jL6NWbUSnVaSSL",
  "key4": "2Fckw6UXkYGjBcCGJCsB9GNGXRMK8PgeBoEDYY4VFL45hUTEFroSGEX6dpDjVuBfb67PVgggsiNg1bV9k23UzwxQ",
  "key5": "3obKbgowV1L9y9kTfiRiRPJ3Gd27DAuZLqzAgtH68rZF5msDvm4ypz6s1WPZkd1Q3UDesZY3c1fQd5AA6Wm9oMfq",
  "key6": "5N96AMkCpKrzLUBoa268TDpR9TRj1YPhdQEDFJGkqcQ6yYSDP1SDb5yuempy7SyVF2tHYKo6f4enb5WVBD8Hj755",
  "key7": "2SeQsGgViaeZbQFbaaMUVJYxK91TAz9hN7ms9KwWYAM5tdzU7ZKWewWjLn252cTSczb9Qe8HU8Ji6UdZKLoQ3dFf",
  "key8": "544QRzpNXiHyktDPVnLCuJ338d4wuYvqt83T6GD44P5XnekyiyWUep8K6wQJmrD8sLeWsVLQipqc7qhs5toipHCw",
  "key9": "3CJU4Uj9iUt3aGVD5VcKJ922NjgPEENmN64MJQ75goy8ifQxZ3h9cDvE2rpTM1QuWw8qPWZdZrqBSWiPtMV29PNs",
  "key10": "2xjg4x1UBNi6SVPcAaxbkak7mvRy1wMANUrduqbjHxpY3qN5tv8qEFZDH9NXt99m9aWv9PMtxdQMXrf395Q6MXrn",
  "key11": "W847ehNz6FmDcoHgmJfRbUJKChtGhNhKjRsVBjeeYzguKbu5hRA1RvESKSCzzSxgPcitVJumtoPLWmUesja34Sq",
  "key12": "32aWgrnKyaNbS9PFcaaxz3wVdi4M8wNcB95gPnr2Gi1mL6y1E2eX4qzJFdP1QiJpkvftgAhuMY5TeGJdtU956zG2",
  "key13": "53U2LXxBxYh9Xjg1FMu5iUm4uYbEHLbJ3kvZEEqMPjj57mRFCeDUE8uuHDdim17q8RzfvAFQdW4GTfTpv6qhAHFZ",
  "key14": "59ANWXknBxW53Ett8ybJi6W82KEyRYhrUbzzYoMzCP9tNm2H5pefpNpeVaERyYgAAkkT32u3EtUrcG7Skhm7murg",
  "key15": "4RAMm96hQDwaKFbikUAeEBCvKzCdsp49T6KLaxt1vpELsRxbZYmZVVE6NXBdoi8SZUpXvnVTbRerN4k3oH9ZFivu",
  "key16": "613EX4ntkQAZZgzy8DEemuHjfqBxoeJFKXkdnbrFcd8QbXxtChPHggSN8TzFZ5VQGkJhF7h2Nc7w4FrDe8MkjYxE",
  "key17": "3PnBihJsXZt6godFArtH1kbrQYcA9mAFLraoK8QAjWjiuN8VP5Ga8xZts8HkwQ77czbj1xuhRmxwTQRAbTWrvPNL",
  "key18": "35JCZz6KiePbKnZK5wVMbTG585sHttrsR97t98ZccumqEjWxNiasfhFLBcPzv4qEyknACTpd8HtTTbVkso3yv7pG",
  "key19": "3SANWtcUb1P1BGXakvyG2KpiyyM8ybWfyPTThs9vAqVjwdx9YWDuaFkRHFMHwbagazYoh6UEZetsCsmy1Zua6LLG",
  "key20": "5GLRxgVHfCAWoqDsRkReubKVcjbAj8pP7XGiURmApeVv2pg8U6PPxfVVcJRCYHgCw4SNN2ySy5kDgCF4VNHetyzq",
  "key21": "32amWNv1ioSNMsdgCReceWMdgfAKVpAKHAG6UQVMjyaH51osnuiaJcS912rYinxDV9eNuXt5neTJZkF7vXSz37pD",
  "key22": "2H78c3Rjp67M6fTbJeLoa7F71SU2jJwTkP4DxcPhoGakaqfsf773VMZceAFzFGzM5734mKmKZ22eX1Ycq1HPd4Nk",
  "key23": "jXgAbNZE2kDQjX3wWq3mmKEXHUgfTYVpCSfiuh5BsyNE1V74kEhQwPmUu4dcuAU6hubKQ9BZtzDWmbRrYC4JN8z",
  "key24": "4HWKisw5d7o4BC9DngJH7aT91MiDYRuGEqyjwej1wHx17eqT8csQjYJSXBL97ns6V8DJkZrrJSUDZsTYSwz58SSD",
  "key25": "2v8uGvmDWzYoi9LZH3zUCEfDPCTBSszc2QLWivx2vKi18r2EfyaS1czxHMAMiGg3fdqND7VxDLAVNfipmchjkArb",
  "key26": "3jjryuKpHq6mbopHFHmRhxrHBhar5FkbqiPvYwHTntRyBp7h387MGeFfUwP23cKaRXFnKCAYV4N2735jt2zzdUwL",
  "key27": "3U5uqJsbhptkNX3SpRKMMiByKXrQwUukV6ta6cGY7Y2Q58ZzeFrUFnFZCrHLm6ZB3xtanvHrreBhhkuHsDrxX3hr",
  "key28": "2pbhMzE5u8hXdTi7x3QFng3Aph5jneckwKj8GxCwAxa9gJ2a61bEb5fG8sHC4XjkFheraNo8ByhqPB2QZJSaNHkA",
  "key29": "Kf5bykPjsRvdfxWzyqzDZcgeB86bttknC7G4zWXmFk5cZqqiyodDPz6LiVpoFrV6CYv6pdiVGFyksTq7QtFTcJd",
  "key30": "2wgQFYcGAUqgUGQDivVtFVVkKAVPBWE5Cq1iHJCjZDDUTQDuCo889x6ybdD8fksaoaZbJeNDbjQpvjRtdUvo3WhG",
  "key31": "5jeKxtFbAd7HuHGsfU7Php1WLwUjJa9nUb6f29ZvEQht9qUpPEzrLsbdTFrQTSzSg52gjWG3eTpXzGsRupncLoYW",
  "key32": "45Agx38Uc3f73uEjk7dzxaNKzsGrHzJh8zq15tL8Kd5ZJmHWWJVRPWVVpnL6jbS56HkdGMDeQi4KuTwzb1AVRQRB",
  "key33": "3oDD3SAjxhseVuYHx9q1Jhtkis4S3qBRpHt8mXNkYqaAbUwfqu6wcpCVppKggJo6kYH2YQX1JkxjoGLbjvE2Mgyj",
  "key34": "224rF2i415LcKQqGzZM7kH1xq4FxevbWZ6jV2SKneBWTNdsNiG3dG4KTYZ9YM2tsjB1QWXjMQs7vD2v8FrkigMR7",
  "key35": "3Sgxi9Ek8dKrcrTQSRSp7oAkRhwArwyDwT5UFNeRrt46USYe91KbLPhwJ4B4X8oxTPq1F9hAsErFZPrbayHL7WCM",
  "key36": "3Ro9N5MfPfMd8JaiEuvevXdDZ6ckj6CyB2gPrCzYvHdo5mGmYWrf3EhwDbWLaVTHFcQYyqj2r53iQi9at6XxHQmc",
  "key37": "3FGhvDrTf1FuTvDt88uZaciqM6NqBH48ET6JPyY5SNjta2ue2vcQjctYuSy9Z55raaccHHcUqXQ1g9oBRtearUNE",
  "key38": "4dF9Fg3FTN5GFyLdM2mgbHa4xDw9sNaU1zyNd8Xe1Wb1DuukDgaJ1BDWpC4bG7iEDYmEAJ8MLrULwe8qNgxC1EQn",
  "key39": "2m1koBp4sBJRhmKwABcm4aXiCfy3dcukkyotvVJ8LGW7J86uWX2oEwVzUKLB3HCpz7Tk1cmBxkeE1gQ65LRWHZfA",
  "key40": "3j2QBQkkMBrYYNWGQPNrrcnZBDmdtvXXKLx1YZEuQmCMj1vKu4aPxrNQjL1aHH3EzVitt2bFPrShAde9x7jHMFJs",
  "key41": "4VRr3ApufEZ1w9J9bSaUNwfZKu7dcVtyPoLUFm76M4c9JNbFnp8qsuFenSxQZSHn4fiLiFhAdVRBsv2xWRixGvGN",
  "key42": "5Z7NgSsqdKb9atJhfxuHFthjacyCihxzjeJvDMo1TJAjwPJ1pzRcdnSMJdfszhJMm9BUAbRi4oA6KViXAU8LmFVd",
  "key43": "5hFQEUdyFJSXrewT78oAAsr3toKZvpzqifW7F4uioobycjMqcRS6CwL2HigcQtbyeqADrHnZHmRgYGKrg2iwGEr8",
  "key44": "29AQJmReRALnG6ZsEs7UX4yKZEH2unJ1JheRELkyjpid9KeDWCpG9tFEpMhKFC7oNPKmDftRdiYeQywQvo9RqGTn"
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
