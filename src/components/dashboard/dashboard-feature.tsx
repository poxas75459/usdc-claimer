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
    "kkd5sHTaX996QCm7Lrr7PpsUzqPnW9XNLgp6Uj2RxuciRnHuDuDkm2JR39Psx9HDrDtXBd2CU1HRaYs1Dw9TVPG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E3WwAhy3QUxauB76fKyTWk1b91RPnSccJUnajvWecgyk1gSqAg4BkP8whZp4JK8fk1oUmkPKKZ2LLyHB7anY1BV",
  "key1": "2xgrhXRqKyEkGbc5G6JcMoNMBFaihrfUimPKYoNwq8U7E2ALW2vzNXSDWo7s11XpFH5nBM5M2YMWd46qcPS8vxb2",
  "key2": "4ddkU9jHcyiiEwkBv4z1nwTGsNwjBwkafcAxR4Ggxh3b7PUHUMtmRvB9offNwfXoWhxDhwgEZ4m3AmKkE5LvwHDi",
  "key3": "x677ay5yZYH3dNusJ3uS1jNdqQER5kuanJYqkziqiN4kVQ6XekcKaGeJ9YRGL4GYgVcsXnVw7QABieLLxekoF6K",
  "key4": "kPjjQ9A5u5KT2i1RGmWuocY8QBHqaZvr1kHEhVYKfaM8Lxbnkf9Lcfj4ZBGw8MCECE22bHDnwtoyTd5fyuHbWQb",
  "key5": "5YyJeC4nBpjsPjXeweT6FgmxZRTJQ8mm5ZLTP22WDVoXNR6mqrkzQLmZFMjCQcjNXk9sadtNmdq22SdpzyZY31GS",
  "key6": "21rFJDAFDrcj6yUjqSLXrnhB8GwSPZu12iWE9DzckFNpn3JcX4YPouEjx5XiupGcZ1aDDLBdoyPStuBqU5Tnhfah",
  "key7": "4nfH8XGVUAyfZUUjCXW3FpUHKJTi6o7Li6rHcfUE9Wzzngqzi3BiwczDYkYLskSn6stt9zxHnw5Z6KSMgkt2emaT",
  "key8": "36vycV8mFXhMdQFz2aAEsLPPJsPbPgVNxTD8s1pbScSe9SXeCYvytczRFuLvqVXckhXSZRVyP1TMnfQ3kNE2bRSJ",
  "key9": "4iRm5tXPokh88aAkEg6ASWHeMbRwETafMCAYtjSQNgLWh8KfLe2j36uZvX7u3CunU7RAxpWLKzNGJw8zaawuQiba",
  "key10": "2VRneywZmB4iSWrgrdx1KgTM9gtQAS1ycTbxeNcm3JEm5Wq82UBPw9bJ5PoBu94hGpwbc1zjjGgbnM9Ud8EAH5vw",
  "key11": "2yQQ2TrPjwrbBjG9sajeBPNsYUCfqptxNu7QiAqLmk3ddMSnGmYc6ikrBwp1WSzbwyyAtYqX4PwJn5YJt9AaFHQi",
  "key12": "4TyfXcZZE6i9DsbsskS2DGG1Et3NM6QVgcuB9x8HL9gi855YVPAakjeGBtJkbam2P72LfASRztv5ddd2TguoFj3a",
  "key13": "2QUzaDGzX5X4PC6c44ntukcUPMfwaDc3ZRXk4gqyJQsRDtvitafQdZjTjP2CH65A8jTVkHRitijaNjNy82GQHhFG",
  "key14": "BNTAQzfKh56XHeS6tAQJECxR5ujpjc16UYtPPhSTNHpeRM81ifkox4c81JitHhvQwd8Xpnp4z9YF2o5MW3254dD",
  "key15": "4hzzZKJShTFp2xrMs9sbfz5MEwWgPyRZtLcTib5rgEo1mQwL48AQWbp2ey4cuSmP5wYkeg9hLkHQ6PB9Nrzw2sh",
  "key16": "4PJeV2iVuB4yQ53DYXjvyCEGVvrGM5eRPg5ikwGJsqRSzwoe9E2yjqCQenXokT1ppg7ZJCNk5PzRX7Sqz3kCVb4M",
  "key17": "YcasoyDuoFYaEQphtpgxfghCh8EE1vRZe8YUiR8Qrrj3UDxmPfHM8emMjdzt8oDfXsW6DZAsgsrJSd5xE5Ar1ni",
  "key18": "58HwDJ65obWeAh3HAxecTRs6BKYHJxTKosLKjhNDs1HiYfSxMMQ9iHCVuKCf8DeioTJ5h2JYBcEXynw6LZ3cb7Km",
  "key19": "3MZymsb26NVYvf4CCpTFAHfJFEUeqx63aWPoKDNdihfM7Yc5jka79w4VHxJx54QPwAaVX4t18rcdcxXK6aMExYeJ",
  "key20": "EtQswixear8jP9c5LtmHafrQhQCVu7tsmkgtcW5YZtne3m32cNXXg56wQZvKS1rJKA3GCAGCukZv634i4KgnB65",
  "key21": "5dY7iu8nj5yTVdC6Pw8Ns9nTE2tpkt2DyfXoW5Q5EZU5dX4TQV9UF54PNjJNm9toN5V9EAgz2BrM7pajv9oaiQS9",
  "key22": "2eLC1487v9atsqPxrMfHmLFWvAWDo5HE259rDADNCyUxoDTXCdBSNEfZZaFDndKNbrkB7Jgujhb57iARF1qUA4ZA",
  "key23": "3PssuW5UvY95UqNqh48eeHDerhyXXYCUpCmTALTVz3zHRNKPRy1A5mZEEAEdPeX2jKpQUNi4EaqmidRPWSzWX5Df",
  "key24": "4RJGFXvvEi8zjU3ksGbSF2GwkG9P1BQAW6T36kJqQKrokLDSzkxFccPY37PRdKM1iGs3hLAZrpsGCmCf7M1cBX5o",
  "key25": "3rAKHVw25qYkLoZccP9LNvwhU6V3w9ZBeyaR3SmXAjRZxCbKZDqNoixNznyoxkZFeJ3im42o22PJeAdGTaEer6nb",
  "key26": "2kxWweT9qo7aWUXCMcb4zv5NVVE3RaHZh68kAoTXyxxWXPki8S9dxrs9xjWmThBvNVXSGCo2237MZHune3wa8ve4",
  "key27": "3UEJC2dUaHMWo7fow9b2xVTtWKWGCuZVri9uVK9FG3pTScQ2Vkzsmi2eE79cup664X99SNA9yqyU99HqoZsVs8Rf",
  "key28": "2cDxrNF9ozxMPgcWJXc15eVKErtwidAe252Zij7pPVuHYJZdp4aF6VvM2TaRi1gN8upERmikRuZhgJzBVjvVHiCA"
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
