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
    "4JFRgJCbiVT1HCMoyKNvTLaCg7vFbAaY9NTDpMQ7aAV7NtwYxxei423RytzspS28BFn2Mxcciu1L3xvHtQ5uTkbe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23GwQKWKHGXNnHeqVuNJjnjKCTRpsspoeKzZoWMWhr5BnMDtG8RvJTeaLACvTaypUvbyh5v6UWBksJrG78Na828E",
  "key1": "65BmRY7xZS135Y9frQiXieCRL1TTRE5Jh61fZjz22Ec1G66jXF8YAPs7Th7jLxDMYzHdcyTeRQ7tpDStMMWkdyWY",
  "key2": "5GqEi2TEKChXKSddiQBuLzGKuZN95HdeWCehxXvcx4PCFjAuqtb5eKzs3d1zPsQeCSPaWLLRfXkaRmbLrFzvxzWC",
  "key3": "74hRNm6HqtYgif5RwY4BKv6Z1Spc46BtnEEcxr3wXGukcZb7T8KMFJFREbXy8czS3vCDMwCLYAchwDBioUEuru1",
  "key4": "656xcNe9WVpyaz4ATmDqYXR9iaHc4Q8afLyyaTBU2cQFxSBuirz7MB2cXQMin79NomunpPX2mKCyhzrPQrU9PQbU",
  "key5": "43A7EmjuChhnWdzXbPuj5YQJ3zYimxpXw6WaBPZvLkfLABm3qZakruqFehAEu8V4bKKPXeZvBfduC6VphHJfK6qd",
  "key6": "4WUzLYUtvdFJMcxn412W5jzL5SSVASMckfeG6DKWe25mgiDQh1TVrcuKc8oJVmxNKNNo9Nf1jVkBPtyeWHy96vK2",
  "key7": "FQgy9mi9qVaDadiEh7sEYhG89roENNqVeGdtyo5fGoB4ejFPTeKS1yCWg7j7UiEPxUYmSmT4SYrPQDhmnmo66iy",
  "key8": "PQhPfnjDvPRxx8LM3fqAvLcAgWwQLCbwUpTfFZ7TAWgnQzLo7awrXmDE2LT6WBV9EDcCycj12U3ED2kW7o9zt4s",
  "key9": "2uRjvUmGbsc1cYcYJx2CgjhrdH18DrYqcWtmw3kvfFsvkV4rRt87ZGauMkkuvQsYPdeqTXTJWqZm2YGtZPqQwcGo",
  "key10": "2RSzPXfPL2QF9iSsQjp2KBxew9yJfpmPFAZjA5C9ohevcALwpJKc2B7U9pYifgUHWKsrH2xtkQz8nyJnxiLQK91e",
  "key11": "2dVAzaKenvHCRDg9X15AmXHjVREyX8WYCpc6SW5z38XZ97vS24kShWauavs1MkxYC15baPZQWeG6wTCWGyJsvjNg",
  "key12": "33P4bP6EZGdxedMaenxHNo2F1mCrZcyWt8rU9Zib7sKdayhAeJMnqjUBLKyUXJaUimjyDJY6C448ciCiDpcuYmbw",
  "key13": "5WGNUcmXf9TPx12rNavZmLd7a2Wsf5fzFAoFM6PskUghHDdi8KUpA7eR8UaTauBGjDnAiQmEzLt3cfMpMT79YWsE",
  "key14": "5c1vDgkDY5eeLawyMFbBQypiFAQEJPHRawYS6ANZ94bNXHB3GgiJFMmnigyoB48Q4ymjfy3E3JvHYVePF1MJJNV3",
  "key15": "2NBkGi3HMXDiNdGJeq96GdVD2XVb1osqZs3Z7cRbNFM8YqcPmm1txBH8ChYXsM9mtFCC9VwCy8VNzj1t4k3mLici",
  "key16": "hLTgbtnRAz8wFm7TyiRFavzXGD9Fbw1wTqL194GHFrpvRykETteXNcUBwqhkJUCk8iMsX2949s3McZptFZKef3S",
  "key17": "8F2mAaUWpzpvndKawCqQ6tKByzQATwPHLb97Xhmkwrcd4KwUh9Qtt5nZPTwAqD3yV55Xt21N5DW2oMMY62F1bDh",
  "key18": "5zuAw1FEybnZ6pdB9CG5HUfitYfL7k8nqwHrjGgNunEc4wiJW4jfCSFxBpAV6ZiXLxeXtcYSfYKTGrpDttC3qwbu",
  "key19": "5VTonB7XUPjChft2sgtyWdxeyM1eZTXsrUgSaDBWKfQScspyeNhKS4eFFmCsjz4ZuZeGjZvFE1tjqEEGztHHqT4t",
  "key20": "32BqNQzhsFhvwNz9AxoATxQcRgW1zFyWAqszH2ERqdv3QYr9kmDc2TFM5Aar7ePDRtV7bMLcSKJFzTkYRyfM96kf",
  "key21": "2oanrMGimE4jxfaN7Mdyb7avwF7DgJd3ihE2WuJWXfBwFHpjQTQ3epSPPtYjyizfHkAuXGk2pt73BeEKZzdN67NR",
  "key22": "2SgDAU4S5mrAHJiyeRig7UeSMRHtasjxpRDdgKNUVLypxjkqw7L1dpDBgBui7NEnfRciHUBzjTLpjkLrGRM5KuRe",
  "key23": "2qF5qs5HRCZxapE8FBQn6bB84EKsc4Qc7vMJWaJgsvV8kfuSGmsAN52Aacqn3Wtyxg7X6ZJKkUHgGAC9J9k4r6ui",
  "key24": "3XFafYamtdJZxAyT2KHvtaHF92gJbQ6WTYESkQB8DW3Y6yYxmYSmBxETb1SNirvYEKcgQKZYofLAgtcsBai4sUzL",
  "key25": "3DkfmExkPAWpJgAX7njgUdWPUyWdw4DTduQYCKNxsGRw1osWX2uRuCe8yWPuTyRVSYu8TvbQi2QmDDNfdNFM1V2w",
  "key26": "3njfozFPGw8JyLCzjjXG5r2ubWHFt626VtmWbnUAf7tZca2obBBVwYQoYWf6WqoErd2iJakD6yULtvHAi2MFCD3u"
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
