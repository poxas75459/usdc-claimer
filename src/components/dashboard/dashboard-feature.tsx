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
    "65vT1k4kLEn3ZE727VAmWnUKDPiQPYkhrm6WAaNExwPL5bSYbRh3ptnDdAPVaB9zjrRjxhAKb1czfQ9tLBDLUzt6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QZQ5tenMPKMtEw8BTCAGEMKP6AsyxUFZ6ufAtFcqpoaM2szc8DxVo1fQKa5oyrcisGMEGMomD8RbqYodjy2sw33",
  "key1": "GeHzmYJW4jjSVnU4Qg3m6GYgHHUHyN8me59Sx8W3Np9PdHfNaYKtEBKZEZ9Eg3NJLLnyTfSQt8bpeLHBPV9FdCh",
  "key2": "5N6fSuSHr8ftzCfuqGJYCP8mZFFkFE7nM3nnTavb8uYkzuYdeUG5jWLZcZV2pyNwiZidQmrdkUCfmn8JcRBD9UPn",
  "key3": "3dcEzor5a7WVJr51oaYTZG4xCkUsinmD4qVq69SpxQKLcpqZFaTo4yQzYne8x23xv3GaUmHmobJ3FQGmYMehxEpX",
  "key4": "4eAuPC4pBgjUFc3B3MXbbtMovKYztJpYNq8XVMgy73Ykqfc1NkAMddFVeM2Z4LVDutw5Fxa3LpDE3nf3EEEw5vCt",
  "key5": "5V7TtFLfQkZhzeYLNvp2882vcPqJvBdMCH2s5dcvfwJBRGAKZTz4qtk9jVS8jpTZDawMSKztZ9WBuqpWymFa5fRb",
  "key6": "3MmnD5seUYDW6PdFt5CypxG4cmMZeAayi6gYwiKoUW5Ww7J1bmMyNwsZnRXZxEJJnLKxZz4563Kr2EW2gPaULkT2",
  "key7": "4GrBAqg1LQj7tqMogeXct5Rc3xvUQ8XmQTjUxgA5u9nQhhc8DZ8Hg94TpAsDXGmo5ogosqQnd81dbFVy7hBqAymU",
  "key8": "4Uh8hkjBZPbNDyFHp57g9Wm6aXeH54qkYV4Jo3jwSKuJ8JPUg8D8QRjKPV9yVcF6WazVj2BTcHTNQgLyGsWcppBv",
  "key9": "Ht15evjtGjSFMseM6XcauqBKeiy9iubQWmU7iW2AwxX5CkmxAD8Gj7has2oEB1q6RsccbhoCmWYfmnuRheFVzxh",
  "key10": "N6xB37iRHBbTS3rQEKwg9nufP6XEf33qwvURuuQGhhBcc9LaroMh96i8eLF4fDBvRc9CufCjGdk9LsPa3Ngeq35",
  "key11": "31CYud1gUmVkpJcbDezBU1RnSv8QtxJ6QbQobiNtmzV6c9VthdWttrKv5LGkjg3TFK7np2a9xJULoWzP8Q822d8e",
  "key12": "37mTyf4ATGcAmdozu3gzL6MgvakZ2B2iy6h66brT2g2fEoKMtBHVLYUL5idTrX2hPfdd427QfhF87TJCNMwerdj2",
  "key13": "2HcmcyAkjzb1ebi7hxV9vKJr3vNcCMxSSDvvR5ye3z4sErXEfqapYW7m5UabgeTkT1pwkTELhZTnbDJ3f2MY1GEX",
  "key14": "2bJnLkhT3YpqZBpehqRmScAUy3529LCMMoCBypRmB65SqNVRK75NhF1NnQgue5J5kTvp119tCQQPL2cLyNRALwGn",
  "key15": "35dZ7QsbyyXjauWjthmm3PJ1X8MFd62vdfZRAXyEavG4tdJKEHApUxbgAFU4Rfk5ZhyFc3wgYa571kERz1gxgZ57",
  "key16": "3MMMgtGxsgQ2H6p8a8Yd8FZS3it1fMAmHHyQDcChZod43xcutx4F35xCQ8PyEGsEt1e2BrmhmXRKKmLsTf2kyaeS",
  "key17": "2iFkuDnJrxsQYRwK3TCiXhTs8f7YKt4jBEVbc5j3WjiYEMszirtXBVZWCXT84wgTDHqyGUZBTAXpSRoyxc7FwTRj",
  "key18": "2UiwBfbP8LJM4zWK5igFD8J3MNFiLREUCk72M5zHR6zL6Utb5Qn9gW7H6277MEcUrzCP7exXHRb1Fo8GPqLL8hPJ",
  "key19": "E2jmxJMGbg1kUPpahCuXzeSW6r8divrAB7f1qKBbYN9KrpzeB9B9AprMWV6uGAavW2nH91g6qnYzHn9Qeh6KoJL",
  "key20": "5ktFHyaUxdNguJxsW6Fxk9YHYisc6c7vfm1c5TCFD4kRxFRHhGBnTeCmiBCFc8qzQMRSnBf4yoChbJywVdV7cvxp",
  "key21": "33tuTtcpNz4pYny38dTgw3T2PQ9DeSmhA2bnmaN7tgiXW13M71EsFjhJAKnNhrZMjkQi4hd3sRJ1oNwDu1b7WM4r",
  "key22": "2ACborKzWWQAdJhYW8RwXKGAdtz2dKW3U16M73egesqRgHToRQmZsk18oTtUfQm1M4kbSadMBu8VZDmMHbra6UbC",
  "key23": "564JkcDrqTcZjrfUzqd1e4i8PtbXYxtjQAWUg2faWDgCah6gZMw45vAm7a1X8xCHrsJ71LuaNaHEFJnZhJN7Berq",
  "key24": "4asfwuYRTaemZHArcREamncbQ37ziXA8YZ2BNjXLN69TNots4aoB3QgN4hynqpNntFmDHqqBwCDg2SBBexitXG7S",
  "key25": "2ccLduCBFz4HMgw7H7NapG8i9fxhCQ752gsXNCGdytUPSe6VjiURETeoBLUVv1uahJT8v2tj5ESwmyrtufFzCYcU",
  "key26": "64ocFEPkcqBt2ZNRMNsxM7Eu7i5AoNVxcxnyg5LCZJEHCsFZSavoFNipHLeEszmKZkeFrqcgwoZpWXKTenRQ3Gz2",
  "key27": "4ZzTUVDn82ofbFR9FcamSJrdfBZ8wWSqyBsgQNMSDyDMVjaXBWf5UsrLNPFhsimsvXpaPfajDUw7P8tP1QRLvNtg",
  "key28": "BGEC9tui62fEN4TCZBomuhnBPFw5cGiCSk63na4nidAzSVk3jFRwnPgbSTW5qWURhfuM3j4fWU4ANrXkoHxNcB3",
  "key29": "2dxkKmHuXeyxeHoJ8uAtmrg9wfQJGrRDYMbm11ccuV3FECiczreeJMpzjpqD7QsZ6C7J4ZCAyqR5aPxjTVKW6T48"
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
