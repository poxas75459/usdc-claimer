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
    "4gefYsHdKuRjt1xk4FESd6atLGPF4qXFrQoGoMKwyTeaBMfcsguuS38BBYsxSzuDbJ5dz5poPZPzeDbnXdMREudJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YChyXp3knd9B4uNHdYjQ4z6CVpVSxVVoQzS9DhLjkqx3JkqUYgJ2nacr1m1hW6EHcXVch9VmRcUshCrMdYZ2koZ",
  "key1": "2EimSjE56EK1WYBQSmLzyBCYv9CySB7fmGR6Y39HBrCMXL6XM26U2yomaWm6Whhqc9JxJa2EGJdrdGfGEGTyUJae",
  "key2": "4tBtmhzL8zQBbHMg5R7z93Ps8zkit6cxPvSDhUgrjgYkoNTDdxmkn1pUBwhpN8HcHvxbXx5Jg5fFykCtGRXUb2Ry",
  "key3": "5udNSKf8GTtADyNDzLjhF3uMJsft1VEkxR4kGyHxenk9AtWBqav7DNHrJkCQiG9nnutTaRc6WiihXksDWWRbZMuu",
  "key4": "9Mvng3U19hyzCLYhQv2thrHjE1PGXm8ZwjQNZ83idrT6ZXdQk23PbqzKoVh5mT7i67yDrdVXDPLRMxWD66L5GPq",
  "key5": "5UhrXdCDKXQqZcv5ZNS6Q4dCmZNHMQmFUfgkWcSqRD17HjvgFct4QcJipRgircMdVReefXJR1KYnff3EYVWUqMXJ",
  "key6": "4vHCWZ29SJcNbyXpTdyxFY5N3rvnCZWEUVsM2QeD1ugZQdKvGg4DghNWEW4xsmVHZ2YKBNcUahdorrGAzsdCJ9Dz",
  "key7": "UrBe8GtQaaVaaXXQ8kDQoeDxHBqE87qykqijvsh5Va45rJzFMjgT3g71cAW3CRgfCxFRU8X6sD2st1ftpDE1eg5",
  "key8": "371upCdVntKCto9vZnpagbQtewfvQynqyJF7XubDrHdYNyhhLTwkiavY96SrjvV1vucdxNWcsRpXQS1U5VS7MzKb",
  "key9": "4EwhLZjjHGyvbCcfyuwyqkf2PZfzYENw9V1onSseQREERjy5xdsaEyJ7re5wW7ZweCTbSk1U3ibbAoriY3R37fNv",
  "key10": "2jafE3gECk189XRM41jme6FgZ93EZxfQEBcnuGiZaCKkqAgBy3FQum4UuCfpRX68VVB99QRkoFr9Bgzf6JkrhKNn",
  "key11": "yU5dZs78fmonYnuG3Ru2XP2YfaLSmmWUKsaGg11MCYvLbMLC3hvn8gYGjzURLNtK7uZEYoyisUJCktt5RzH7HRs",
  "key12": "3oG3Dht1rYw4AxHWbzZnRCwVVCAa8dUt7Xn723Q2rk7vQ4BPH2Fgqb7QUr2wJyLKxWz8HgVThaeGYBmFyJTmMqQV",
  "key13": "5X1h4NpZwUPMmZhe2Ehd6Gxg5trfDUfgUXR47T4gyFX5J37V7DhcRMYQxa7sHPkC5xUmvJec8uxWRVPbgn9fFSr4",
  "key14": "3z6MuFut8PJbTjuT5WZK7aCS5BFXJpZjczVotQ5232tuC3wD9GDmc5DvNY3d25pf6kEsjQDWaGjNy5ssjVb6GRkx",
  "key15": "2toyrbqPAWzHyJdhRqGUiGUgagVmS6j8HbyZ14xZCahKxz2NykqQR3vXPXugtGaccUC8J8qbtkXKZHLxn7tCHmRs",
  "key16": "5HPohEWJwfGzoEfuXn57UucSdzGYGpL15yrESLHWHvkKjb93XbDQvw2sM3ZZSMBuM4m9WD3ZxvkBJKAZtFWhRdkY",
  "key17": "3XKv6eH4GhHfbajvhtqEtYkvbAmWAdEHamLogVBNZ6QH33Xp5tURSvZawUD6wieyNJeJowuRDfES8GSBzMCNMzjT",
  "key18": "b7CE6yECNGGJefn7ba9sU9aMttzkLeVGmHPLvWuQz5NnzsLEH427JQ73WVM1UDUBMzTwsxfCRsrSiwhC46g1L82",
  "key19": "r2YLiQv8VCDpTpUqmTKh29tSBpHCZQuMwMhyGwNSPXhimnAQFNYM3vvVeh5u8iWGCqYnpmmBH1YwutiYuggN67T",
  "key20": "4mXJuCahKbtGSPSRmgDpLXqckE5vJEEckiGEaEg9AifLobXj7m9hK1YcRFe2dLNjtW28FWgpnXKTDx5iPX6uJ7XT",
  "key21": "2VJWCiGhjGyPJj8ZAUWK2B7RKfoSaaxfo8cYrSwNXD8KFJZbWAwaqa2c6Zog5xqvmmfUmcbFjZvYNQyufx3Q3fMQ",
  "key22": "4rZidxG9DUEH3NKDs2znq3bcYcVzmD85tXaju5S2ViKpAWoUbyVsskGhjkd1tJ3APWz7HtnPLSPpMKH1beZc6xEc",
  "key23": "3FfGuh9Z9GLcBhf3eYecvCsz71Lgkn6PKQHBxEtQNZXfwZbsAPWPX6LfjDowELsAhypzabRK9fiTy2Hvphfiqhbd",
  "key24": "Dq1Fg9EptHbpqJuPd2Fp4D6zGxBFdsSwowXSuaBUK8Ph793k7VJJurZHrnkUgDqr36hqbPTUeqvWHTHt8MSXb1T",
  "key25": "2JFdNggUfBUAWByPxyXnLSXG8rUG1w2jJZjxF5KieDiax1q7uNUPbcQu4fPXQdutxzxFGjHj6Kn3tGKQuxpQCb1A",
  "key26": "BkHM3k2piGjuvWUjMnMS5jjNmPcXGRm4PDh4tUDz1uP81i5PXPyu1sr6e2JWJnYmwrR8eshxg8dT2hhXyGR6xRv",
  "key27": "2SJTnsANWkY4NFhMft7jpQ3JuCivyMLoXwaMaEzhVAVwDm7T4ZAVUGkZpXmRFrgUSreUhQa1AhZZphBypq2hYmoM",
  "key28": "2W2SGWCN6yHc8ShzoCxmCar3Wv3QCVFgHRndPToYRMyWiYEm2SsGDEHXwcgfiNBghgHWp8MYbvAi4u5ynKxwrB6F",
  "key29": "4ra4VFtxEV2pStc693gFJXqLoJXDjH6iM7KiBmbDsxqYbPj1hCVDnxGprVKNVLnKCwKwzWLk2zmRXU7sDiLUtyHA",
  "key30": "2RYKPiUXBEEwgLarqzJavQARn79stMvRWdi62p9aAFeJ93864cxi9GbQo7eDTYrrJkawP12tvM6vKe3VcAnPjFYn",
  "key31": "2vHGBvohU4Sc5BkP22FqX8ntU3vX8z7Wwdxxm5VMhj99K1pyaxpvnHKUV3NgfxnGXfPEoTSLaSLspcmB8finms82",
  "key32": "EPH8UYWXTz2NAPFkvKrrNgEwh9NMeHrsRkb3SEh1GaUxqWN515TtkrZeNto1gR28sSmbvT72YGVrWwgy2Vb9bDA",
  "key33": "tevWPGMCH6b3qjpXFUJh6mPSFfs7CfmxAGohSnevnqesBYGdndvQysspWz6PzXnZyNBszeP9M12ruofjx65NmRG",
  "key34": "2GC2yGrWSyW676PfkNLn9GA9Esao76iV2g2Po3GCeU3CeX4qtKP6ep22cp1QLKn9ZrybcufS118kbRkHr25vS82M",
  "key35": "57afpT82JirsLx65PW4uDv4f51RvyPTE6R1K5bRigWzrMJzqzb95VTg3keJHmc2sR9qHQn67rJTn1A8v4TsK8nvu",
  "key36": "hz9Ge9FWUiHQMxSVEkq8XohuJKhXc4iTyxyeNmnp6375FFULUwEhC6DqA4XjzMfwXXGh4r4VAU315mSjVJFoiGG",
  "key37": "31oMmLK84YwuSSszgc6yf4M4xj5brPxkhkJeSaxpzYtaebgmSPTjP84oZKYtEWk5j2qACFkw6HC6qVpo5PNXgc38",
  "key38": "48ybdEEMdWkbrLEwYehBEGiWUkpxiNPhVTMBQgtZWBuJvVnReeAqisdZ6KqszXVr3dPd928US6nkq1CjWBRjabTC",
  "key39": "5DcAGdbFPV2Fz8jBNKkjx2vDMZLEhaAqcoGfJM1Hfc4Y3kw7YrAAujfDAtciMRXkoT1xSmjMJxsrC8xN9F1T7ZJm",
  "key40": "2RnhENZLQF4YfpPHYU4ukH7e7KBWTFRqCBnmsMLAUD1K3acyAv6ttgvNJ9zc7KxXaBDFin3XvxD4ffK26Jxm9tPD",
  "key41": "5aHCnDa4jyoXJVi8Ta92pkdngQY7CcrhMjALUMgYUfygwUMpKK7HKSW6uFTbWvYu78ao9aTko4PGUY5Scv23CS8k",
  "key42": "9HGcmbur9NsXV59U1ZFhjzPXBVmhsrcuXsz4QsvAZ41JdpdrNycYrSsokshewAnYg4bf494Fjmukhs2T9sG1idj",
  "key43": "3okyUnLY6BTiFpN4gFP79WaynVFFVYXd3a9UCnJGfgvjeFFegVkCBL4hgV8wZJU1eatvXMGPwkRsasTmfA9AgCpv",
  "key44": "53dR59mmLXtsRr4YLQZ6jYJbTDyKcNqv43H1ggZeUPLQN1rty2RocKdPVyLn1jfSZnqp42tHh7QcaPUJP2EPiaT8",
  "key45": "5KeNdJQ1FJeeozxDVhGU8Tt7VDNM3tBFoL9EACdamQoQSGzQDG7jptdBCXjTSmu82Ahci4jFGeUnbjbEh9wLvTHn"
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
