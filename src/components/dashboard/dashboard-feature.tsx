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
    "632kZ3udfr2r2dU23jKHjjjPFwDFdNXXL9WgARcN6quuwQiwqu26iYUdPzfzg5wyG2MnZF51Hbh8KWXReKpYKDMt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34KpT79atW8zvCFxp41oYdtZPCmj7xgfcaxYez1o7BSpMp4R7XmUpMFoghVThUWjnKEEtbYCYSGyoTNacmiNXS8X",
  "key1": "5ynwsyf2rFWgyfnEopwkLFvoW7JnPmcHFEDH5fHFWryGdiSirF8WVosNhkcvccgiN1rQarq6sJ5afPEChXd94tbZ",
  "key2": "2sHH9tDcTP2JhGzCasJY8e8N3JNoVt56sarVwP9stFP1tnhNhzbh1BGg4TcDoJV892tG9kgFT8xEyKJkgod3otso",
  "key3": "47ZZu89QnwFn615gFsDAvBrinSMPAne9rx9n3BuhEVXzN6KS2gxh1bJQAkthdMpDDBbjgxEoGMxfsxm7hAEuTRmd",
  "key4": "5UGQUA1FPwu1J2PnR2FWA3mfHCPH41U2GCqW2cMkQeY9M8Vh2NMukJsiA9SjnbTfmcAdgR6enigYwFHhCkG41fcz",
  "key5": "4kXdebi9rM5XunfxxoSEWQswjco5SNsTDMDbZkKXZbrV8MVKjzY7HpgLx5hRJdAySrGXtoxcbdYYCpPTQgoUKKnA",
  "key6": "5FyYE3sr2msHk2TYmVLYpzVRoiLWKgcVzhtBANXqCenG9CQ27cr3qYRqBR5d7iLxAwvyvfM9tFBzGsmcEzv7SDsS",
  "key7": "2YxCDjJTT11jr7mX6Y5gSSXKhjJr949W2ohNtya8rM6A5U2RZDgqYiMAVFs2CGJqnXQ7jzJXSEiBTeimQ34ZwfBe",
  "key8": "5uGXDRbztHWQYC2JQT4SrZnwehMWEvH1Pcmf6HTS7o8SSWQW7Bwtj2W9gZGv9GHrgNoKkiEmRBGAMz2vJW2wwfpv",
  "key9": "2nFH1q865BFyfffGyPMoAwWMsqL73UftBfhbVzRxMnJ9gb5GQs3QkjDDLUHeuBxxLMVsFx6HhWrfxBosH41rmYBi",
  "key10": "p7gVvT2vdJZDrEMCaarVPaJazFgKC579a8gwC88zpkJnDgaaZWH7bUtmicP2qfuUtQvMD7Xkn7ZH47rLxDfuYWd",
  "key11": "3C2AzXQPnVHP5ZCCiU3bDL8A3SxTsyVAhs5vFkEeZQ3EM6k8EL4pN4fVfx5tKYyejMojC6P9SfQJmTW8xfccjrxf",
  "key12": "2wmfta49N5T3TesCE6ZBc139m74rUvUHXvqPZfVopxaQVD5rBieZ4Xr77F3EFoBaB3TTjKaNAZvqC8UnBoqjrHfX",
  "key13": "5qjQSdX4MMJCZaJzQwKyhLUdkGCr2SChgeSfH1TBnPTgjzYnB78zzwCbG1EQfrJoCdZ6CNgvxgctAf3NbzoS8qhc",
  "key14": "4wJwFsar9ZbioxAXHpJghJWoKG4JxJ3roocHGP4ia5FdFXE5hiheYmKUKnDq71BQtHBRs7iHL1ctPKTAnHyVB9YF",
  "key15": "prtzhEkxgyc45k2m7B2JX3PpJ6pzWBwvPmdX2cTJBiuQn4CpNXTBji2PgBU7fcFXgBh8ydDoaWe9Pt9KZdwJVdL",
  "key16": "2ucdnW9d4YHDXyqtamMrPJNFWTsixRxAQDfsfMvaSpBZcZ7vT24YJohiPc8b9AjfvaMZWk2ePCcc8Dxpn7E6PtmD",
  "key17": "3FciPegdmPfymCn5WfL8iRDehoQY8GgAvDvVS7pwWH8zeJVwFYUTkMebAcQ6gNRhYUVseX3TfepQ6HNwVz7wG887",
  "key18": "LawkdVNDaJY7Chzq5EnzpwM28LJoPpySPA4wZxDusufoLZNuEPDtuDjCXbRnRsFz3sqs3c1jyTDem84yVZQ9Soh",
  "key19": "TG6UcouehQB9QaPnYStia3RtB56WQuWHucRhp6QZxPwgtQbPxjc4NRHTW7hUtu3TJmQ4Ta9BpdqFg5goxteW8ho",
  "key20": "2Nw5bP5E8YzugxYaGUssxL5ntzg4od3K3BQhbAKPsPx9jnsPTifSCPGvmHpkaaGTBNPkLFewucBeigXvvK7J2TQU",
  "key21": "2vV6T9gnmCGbzAJnjszh1PAJGhrpZ4mo7FCm2Pb6v5nHZKrV2uRNp2LYJTKzPUJd9HLJEEek1XKq3yaefB3oof33",
  "key22": "2Ws2zKPtuZ7f6kQqWHPWMWTRQ8aHbHp2r1XjHbqyT5u5JNWrUbAhHh7Ysrq5CbmDL9P9GHgD9bKPQ4wHgWtvF61s",
  "key23": "4mfT3NSwQPMDrtTR8sUdBKD5aAH5kwYBLjZADywnp47rTENKq1rsYoatVZ7KnYgeHGYwNZMaUyV7onLdjHjJo4Wb",
  "key24": "2skDU6m5jDnayxiPNBpZJBAPRhvXZknD9bQq4TqcL6QGVkKjxo3RhNsNdJxCDaYsEYDN1NqCCa8ymqbGLm1TDRyL"
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
