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
    "1H5MtFKfKHZqmfyfCjnFiw7QLk6boQeZzsj8juVn8UhJ1nKeWqx1joSRQtGQm8bLkwvWrBYGiPYsb3NR2j2bXoo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4StDpvRvzrDNeckEmy8QexxpZ1FrsMLuggB2nwN4VJARvVWHMN6Bed3oUa4d5qxzyso9LFT8EH7XL7uM1n2oF8pZ",
  "key1": "h94id2VGnQznL1jXVq3D2g9XtFUzrSmvFSXJuy2XaR8QxuRiBeqgmkw5RLf7uCjUuZw9YprfeukLiduUAzDEgqm",
  "key2": "4AHE7CS3TLYbQQ713CriQddQm4h3w37ZYGjHudFbtdA37gFTKD4wRdrpAEgZwZt2onrAmivJWXxNGpAnD9HosiSR",
  "key3": "2Xr4bhwemnuz33rgUaKKTTma7DZryL4KJrvWQWAo8LCR2efzhDg3oUcWv3yC7VoN7qjErfKLqiMieDn4zAhqohjm",
  "key4": "4bEj82ZZNcyYLMpRhLo1fLFVwnoFvT5n8gTu19Uz1C66gvw8KUhve1G4TqghJWAUohAzawpk9SV7L6HaCv4fJPpy",
  "key5": "jkVnqHdDdnwdBhK3VWumhEBhtKPmNufFM1JWrrwtFQYKSAKeQiMxwV3QbGsfUiCgG9E8mGwQYQLDSnV8hTBeEqS",
  "key6": "3wxg7hjjbLqXadt4WQV6VSW2cG3WUJvqys4faZ81c6vBheUguR6dhbg4sBCKB6amdykJuMNbQgXHagVF7KnRykfq",
  "key7": "bhW3nDAdiqLM3dgDz2FnCQfTRP59bmGFLEct9nuP2Q5fVAmTYuegKLudtLRYc8PpmyQ55hdfoJkh33QEjWLEg8D",
  "key8": "LrXKG6BWH5hmQ2nUuQrEtgjyrbbBcYuCQTTArxxiDt5eyGJqcWNnswTcXvEdy5L74CgwmKNfrjUZSfiRPVbYgKi",
  "key9": "4qjJwZaB5LV2VPrSvjmgPzRwZ6iurYTtXZ4GmWXCQSqWcWXPVDq4yiD3AH9YbqrbpJG6MQUattFTZfcojWURHRxE",
  "key10": "2tYpNrJNaoZekug1rzuedxNRnMciodcePn1XTJNk28UAYL53kBdkCEgQHgbPzg5xcoWC58ciMyAm63HJ9d7Gg2EM",
  "key11": "4dbx4XdCDvgcEPign2BUmjhjnVhsgPwvUz74vFDBcBYN5pe1oGmQBo4qHBijgGoJTN9VhJkmDaaKsaTnje77ytp2",
  "key12": "39CFaGzjTwcP6vrBDL3ZbaWAj2XnpYkmu22dPtqMo28Fttb2dDkpBv8UNiDsYcGymqQP3hyu5b8TE174oK8J4RPo",
  "key13": "42QCjnXW9Nhz6n2MLLiuY2zABEw1gk2q3qER9pZtr3DyzSjRgTddJy9iBg97FSYM9GPH3YmAvqek591JTDsAsm2a",
  "key14": "3zPD4zSHALn4MMy7Trk6Yuuu1nagQqEFUSF5chjrJsJ1QGDYeURiut1xQE3S7YP8xDxu7wXxEsfpmHYRd1hDbMTa",
  "key15": "3KmvmrqvLwQGEwRsFDgWmYkSBtvWrZWBqznf7KZLgyy8dbu7H2aV6eLKq5z5arRhi3yRSVWaSqK8RjyMy9KrQrMJ",
  "key16": "4RYr4vrGGw7PCvuSWHTWQGq9n279WrW7JRKEaQBDgdKEpbzrpc4gupFPVqBpEEBvHvGb3Avfb3JQDCKNrzYB8qHd",
  "key17": "5DeezwMreetPvaXyHSNQLCSVtMuuQZZdBJbqB51YxhrhZjSC41TgVJ78yckdTodRbQ5JR9TEADwHBNVPCJphhmrX",
  "key18": "35xsPdGro8F4vLt6UoJg4UopQY9UMSFJ5RYEvpDNXH1Wt4WRZMGFPo3fFGzwmU9CvmynjgwHedfMebKSnLwgzC6F",
  "key19": "46sBBseRGw8XbRJpn9YHUHCWQFcT8LEdY9bR6ikve9yqNkkgP6MxmCVYSYANYadQQzqx6qnvtRW1bNR2Ubs97Jzh",
  "key20": "3RQsALJ5ANFmXobePbnV82CEXA2PzUdeguCwPrTAxyqkmMWBnwV7TqM3uYh9cFNay4Hc2XmMNujh2TsyE4QnQaui",
  "key21": "5PSbq1eB4MtENgpsPtDAxLNyagjczKxtfRN3Wp8rRpPY2o3s1Z8wCmgdpETWnJ5uEfQFxjKAFUaYiPFMUN2jd3wC",
  "key22": "5qb6pq7W828guzbvzEoRKCYfTPM5r7KpMeWWabYGBpJkKz6wyYj8y5h5GNDGtdyADoBnjP6eUVvNdvDavvbx36cX",
  "key23": "5qBF3GMSjxUdu6ZSA8BMgT6onZTdGsuMy6eTS8Moz7L6om7EYUkR2rbroeptHQ7V2Fkw4Hveqygs549TpbfHQEdJ",
  "key24": "2DmmSDGeDY3KaVnWbBcYLf2gGWaaeurKB8guCbN9qMVMsHmEAb95KpUZftu9sjdrg78LxZfbx9TDeFE7UFSfrmbp",
  "key25": "VVDLmmvhpWtGA2ECj5uvzHfy1vLs4PVBUrghSuZDLdgrXhDwjrz9ZuWoQwvN6LHFXLZC1QFongGd59z6Vii6Xpe",
  "key26": "3zzUUtVfJ7ZSKmQz4dtPS5hLRND5qGK2t6T4ocaUzvKKBpFS6Dh6ZtNq3X1cD5g71J1T6gKRR6KPEixYzL7WemX7",
  "key27": "1Egj478H4NZf4UY4q6LBM3XHuadaZHJNd93fDaghJWrL1RB52cMbHWjFpRwt23qior5zwEjRUUHZckC3dwr4T1P",
  "key28": "43hr7gn4hjx7ppgw87v91YV4b6yScuXXDKuNM4rHuZDeiTcMUQg7758VzABduxC1uwtRFKE1voVFpC94nEqJTTiG",
  "key29": "5uzQdpYgoJ3coHYFyQvCBLUEeNy2epiBLpPNBAT34ZD8P8dnoF1khbZ6K1gxikNt8SuH2YjsKf3bKdMgP51ztR4j",
  "key30": "2c86SPd6zFqjdTAc58j4vX7oJgFSRcFgokheJcDMgSyQL3XfYFhbXAe5tDL4dAMp965x75EKVBF6XPsLMzkUioEV",
  "key31": "4TcMXHjdLpiXnuSe1rum9NzyE3pVRyVoZpY22MqUbCEnVm56FUJWzBSY3M2vY8jYx8kx36D1NvXMyFukvEvdTo8y"
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
