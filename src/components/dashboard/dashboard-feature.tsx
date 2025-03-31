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
    "XNCPUmHPSLBPR5Y5krWdxeLxSoFNG2k4LtboVo9YfgwMY4c5HRjrjpdNqsEEMXevfRMLVjKAVsisuTiPWkPVHck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fcayyj651CzHKNh5WEyahpgokVDJu2FQpt9y4Dinsa9dYqEVTH2G5yuBUsuPrZGnGydpwgkhDVTmCxqKD7ngogm",
  "key1": "27c35wwn9QJQkCcDusj9vLj1Jv4S1QuoMzyPRLASZczbZEbKK5HtHZGYKUtMh8apjJwbXkLxavvB1hJNNp2ep7ek",
  "key2": "5Znbv5HGmVSpXE6FvaVYa2CaChZzVoaN3xREL3xWA2bc6oZgZDUagZEjcGppKhKmPnJ8ZE4ueh6wpn72VAS8Bys9",
  "key3": "3iPTwK5sMiFJrckjGzh55bfRgiUweeGiBFDNG1H92m2CxaMtyuGdhjfnXhHrSBP9sePRD3Zze26j3nBSNTft4E7b",
  "key4": "5SqMiknFT2znJEVVHTWao1JdgNELrrP7tAv5siSS2ZmLApGCE8nJ2kKRHxc7YcMmYGwGQakdgrxm988PCYRxWnv1",
  "key5": "2DwuuzLGgf47ss2Ps5bYFA2hJeoeV58iPgs4rPv7z6U7wRFkFAhJhwACUhPuzZTCHWwcRVEE73uqU6BT4VB8e9ry",
  "key6": "4ZPJhPZkr9qy5t13XNheyk2GvyqBebAPjEu1HHvKFfXNQzLxbBS19Nv31bkf67UbXUH4FrVQLPLcQ2YteV2Ys2Yo",
  "key7": "4XrU64xb3FHDRjorcC4powPpgJAj1Qrf4apsEmWeqSQBLEHNvmM2T3fX1bD6NVhPWiEUx3xKmepUFXWtTMcJLM3N",
  "key8": "ufuaqXeHgJYbBXg2w6uFuhj686rcArRKjetU3VY4U7k1tMHCeiBLRqXHx8D5BipnAijjHJCYDHqxtbMFHDwXzzW",
  "key9": "46be4gdYC6gwKvtmDG9mrg2c8ahnyaYkrCxi5sGq1JkeH4NN2RGYhHhZgVkjcDNcHsBrVXDCjiuihC2d5JqDQ6Y6",
  "key10": "2TQhBapzNso7GEM95HQzZxAPdmuXmteGhRyztAwJBNjBK5BqACkwqu9NV8p54TFXVshwvueegS9AkgaRNdEphHei",
  "key11": "3dnrvvXtsgqvSw98arVCY8QHRNihVVBLJ9GPTkYoeydQnQGJNr3bL9ZezibPgR6CFFxrZdFDcnpPcpCLqBwtvBpV",
  "key12": "43HNrsbNMGJpbkRhRt4BWMKBnN6Sca1zBwZpGc4GajLCK7Ndp9MASAvEdamaTbfo6NH5ASxMyzzWeRj1bVVB7fdm",
  "key13": "hjP4shVHvC3kK5U4ZT9FgAYuufVFVPjG6a7yj3E3G7D4z1g5f2FkBipVzoUXkiq2VFR6npeaMCAVsX9Gg43X1Vz",
  "key14": "3t7WGtkrszbd1nHtT7Q5bomKzPiNxnuna2KrRwmAJUXbR5fLifdD8gWouSwyjwyVgT6a7CtnqW9ssXimBdmvSS8e",
  "key15": "2DSpqd5wtqFxG7UbBQxRbH5v75SwamSdtAtuynjzo5ZW9egXU6EZSfE9ozx3RLa5hLf6ewZieR2YxbBQgr56WiSk",
  "key16": "4UD3qcjHYf1f3ECiLcyjxs1uFT4UwL6PMsmKFjHLp6DSgG6zpuw7xYz9SM4E2xF95ApZVKd4M3KjkoB3obUA8ZkQ",
  "key17": "4vTfZAFZfkVSa42SGr5EhdVkjbdAxm5yYHEpp8cj9xmDqBoHGewkkRJSqCa2sxZmLwYNFm4aPQFvw5fYb39BuRZh",
  "key18": "4xmZ3vdUcV1qHPezjrdReaVV6a3YKWE4KMjSBopQVSxAGHteKBLehDSgNGo6fgFNLo3vvowRYYzp2mfr8WfDpP93",
  "key19": "rYvz4PozxCn9hbBca16jsd5iQDPN7Jj1qUmoJw5J1QKtgLB2mMH5mpAQ9icmedi8mM4dq3V2gHeAhwr5vuuxtxE",
  "key20": "59ZqSFNtpSpgYWWDkrhxZLSUa4fPcUkPp8XzcwGmYC3JMAguqQgDuPUPV2ry2uhtXo3NW4JRW1WPNikT6hUWRd2G",
  "key21": "4e38domEkgKYxPnUNhKDXCJsYqjr2xh6twviedejPfMhwn9ddyZzqEeWfJqjtBKEEVCb2ub8uLUSerRxn4CDZnBN",
  "key22": "5vtxEPAsYw8uAikVu1BZvB7DgdvKyAzHC51F1PPjB53SzLEbj5rNV6sd4SJY9LfczXR1nXHATK4iUgjK37LKDEbE",
  "key23": "2qYLcGTzS6xZcBNdvEULavVJNHoGLzTE5HYHJr7ihSkUarsvTDFAE3jXCy9DdeTgK2N83cormAHkgiGdaz6reBjS",
  "key24": "5bNvBK9DWLV8TLFyUc5dQbeModRwtEx13wKZDsVd52hs7FuHhUPn5Nvnk3NNUN8Xtj7wLJVZS3RpyBNTGbkheVhM",
  "key25": "yHPDmFiry6uVhQsQb3YEbfSzQPzkPuErSzACFskx2dEF6VhNv7Gp1fSNuiL78DSsfu3Ygsjamgxmiw5PbyNbKfQ",
  "key26": "4LkbbSmC6wduT7CBpsayLkJ2xz2rVjK9T1c9oH31kkMCrsWTV1NiR9Rgbf11NwfukypapqwE4s6aZZDHyC2N5cSY",
  "key27": "2ibV9ByeuHRo36yTyUabRJUBzhjuDesVV1LUWjpoPXj3hmphzfPm8P2TPPSA6vfpZ82Sb3oz46gqXh32RfA8Phne",
  "key28": "5jg8TzwseXkSK2crcxK5hrjt6GHr4Mrx7a8bWRuY6tEtN37pcmuvXL2SRyNQErkiKksnQn625DppBmNx75qgnMxf",
  "key29": "3EAJvpvH2AfbrYsFwBuUUyo5G5preRHxPJH1x5Q58D5pgSW4mcZ7myzTn7kZaWCdM92P3TMcfYDTKHGGrBHp5vXF",
  "key30": "4YYj8bj4JqUQRijuJC1wNafeR5rmAJUAENCQYYKk3CeKPmDxG7G1pEaqcDPZzKMoeUGT4uRfshwB2f3Hg99peuWe",
  "key31": "5rXAsugoT6JFFAsTGJ28nuH58H2QzduXFwZLssqdF872XLzDwqBut1H8nheixg9cKyTQqrPczDUMi6jud9AiqHjD",
  "key32": "4Rg8qXco16KA6f6DSvi37pdnpdF8FyTdaCXkMUuYLFZS7D78efKxv3beXsSXDHK7aESunbkYhPyGFspU5wXrFNFn",
  "key33": "21qPTTWFVszYxS7BaxaMZmkPPBSVr1vgd1cwX8WqdXv3wm3Dzejby1G1FSghYryAWy5zkYnSfEEE5XSjbXCYQwpU",
  "key34": "5wmmPUJqZm48PaAWfhFFvV3oe4jRXVF5E8eW3s5KJ6iT58nsvqfTCAtujHt69KzjheDjjL2Mb7kQPrhRQ8KhFG3u",
  "key35": "2xCng2cGVvVjrBcp7u7XH2SaMYi3kWMSsuGHFAnaTp5gxJPBD8HaMTbKcXhX5MUFfLMzS3Rs7SCU7ZRkUkVjgz8h",
  "key36": "s3KihohzgtpmYs7FLDrpe49nbZp5HGeDsYGHG6pv1m94jNtWduMhYu3KDqhV8GttPfk6fsKCVKk1TspZzroW6i7",
  "key37": "3PZH6yLDd21GkSb4ebruWvCqN3vuUox34bJNYKdod5d6fYCgzp51ouHYosJF7Cy3HWbn2GaYBCDDXhQ4g39kQfdF",
  "key38": "5pj7QcQZmeozqFDvHg6tFeK7tvQgYET5ivNLBUMYZ86bWsvQGx2SoSzHmcUnbuEUoyuczEm8D1b1r714zM9AfArP",
  "key39": "4ennkryYcBVJw612NnpPncPzZzj3um6mU5nXu4ARfSSyJZh1rqWMPBF25MrsV8c2EZz4Ao4xttGGkbnuq55eAfXE",
  "key40": "5o6T1HsbThMbhJudmaz79FWnmgtwZrryHpbVRcEX35N77yNDyeqhNV7EedvD8rXcNwbWnb6eKVGAJveM1p19BJEw",
  "key41": "2pGn4ZpvcKhLzeVes5SuyswYLvk1skTZ3Wx8sHngNVLPKZeLTJuf97h9vSrS7Dzz1KcJsznC9P2G6xt8vHgCNJDx",
  "key42": "37TTpGYqiANctmuikaiZxgg8kmZT2F8oim2CriAKaa141V9nyaX2WmxZSXnjjW6PXCZ4mGuqzFH7H16A6zEpHpJs",
  "key43": "5AgdXGTS3VooB6jt1AbdkPFGsNumoKWW6VPNjpXQiYtg7Zm7qg8KHDebrMPKA3MXSiuaeYXbRUf3ezuzu9h1HQUW",
  "key44": "4AajitCbM3ZJBhNxRd1CVvEcZqWYJLLkAhxPHmtyYTmM4YRiM9i2MELaodBp1QffDb6zCSu4gVsGLWpiH8A5Hnbh",
  "key45": "5yrCAieixQc69ctUHBU1spbZc6eRyTFVzScUMjCRT2LeBuwpTHt9TddWNAScztqZXYW6wcrub9PNe9LZRuvYUfCe",
  "key46": "5xBQiVJxR1xxPBhZsYtmGp1P4rL6yWsceTaRkkix3Hsb7xd4p4Z6ior7NvHDUWAznddbrCJLoS9dfUzdu1exBWno",
  "key47": "4y2enf5TPcBHzDiWdXGX1rBrgyDgKmLCZVFEYvsRcntc47P6NzQKHTkR2dvDpFfdMQUKLGXwzBfdgLM5z76kWvPk",
  "key48": "3P1kbPmbJvwzM7JJtRbCgWZ52k5ncX374Fjp1h3NUyVPYqwu8cr7ExXj6hjvnx7ABwpge67n6xGihAhUgbdRQKYf"
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
