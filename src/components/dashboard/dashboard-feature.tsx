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
    "o9uX4dwA9Tizg5qLDgH23e7J8vQconVd1tS4WrdWM23q7TQWjbFbq3xwzpQumqTAbqCMeLSjfqfgfuhBKK8xo1v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1xhbsv7D3im7imp9Vz9YgpPMvCLrwWeuNzfD2XQPjSdHfJi4FQf8KbV56hvDvaaNymWZa7V7iyXqRuiUpeKUjVw",
  "key1": "31WNWXwngh6pX8ZzXApm1fKEjGrmcaehcjqphzKs4MEwxf5pP8dNTFnQ5pYRJ4ZvnMGhojNcrmxsgjmhD8iJippM",
  "key2": "5XRutJVSQDfDrjEpzKrcSMig21nqjXeweUBawYUS1tu4vGVfgoxXEMPV3UGYAjhvkeYzT5SkUgQoceauijoSBTk9",
  "key3": "2x98gno3Qm7Xm1wocKgGJiTHL2fSnTYKc8eu5PfnCJLvc8YvHDG5YRT5x1ttFU4Lv41PYRPGeLYUtkTE3HSheTVf",
  "key4": "4T91mLq84N89daADmPunRp23bbbMhL1PqLCwEeWJvE11QdwsPCfmTDiAa1WPtroe4mtRHYCA6BqNiXUHCCyCBv5L",
  "key5": "5skEgzxutfhBD1M63LHKdjVjEJwtmP5YNeD7FApQfBPQwpFDfztkrdMv6BTA7sWXqdkSpo4zH4uUrywsRV3bDTHX",
  "key6": "29mNGKhgx2zJspo4WCLX1ezKXzz6iskVuwzdtg7v3ZodNQ4qu25Gq8AjPRidQGmhyJz6ajruq5bbNoUvFaxjLSPy",
  "key7": "3SR8MPg29NE54CHGfcqqH24bfxU937BFKUri1bzZ3hP39bXipo5mmkKMG25obWWcuy6o5TMYjwsyoeUxCjizeYv9",
  "key8": "Z2aoXUVzmkvh3B47nhxdukHW7MoSWbcnu1zs4e5tUdEEUATZPKAdqeQ9XxNFmkQMH4gefhe187ExuJkGpruaaH1",
  "key9": "5DkgXMtPnX7LWv26ajzpU3RTixy6CqRxyRAiqCXHL33xfNM3Wo7Vhiwz4JC1dHwe8cpHxe3cCy4YWHPwJSKFs6XX",
  "key10": "jW4G5A3fpC3MgFyLJrk8pvpNTHQdZeQY1AVZFsbiqpa6ejmdiiwEdxD3QKj4fA2XzQMg34Dw49k8W6v5uLsb34k",
  "key11": "YB4Lrtv74rSxaWHSneZA4ngCXuVKxBiVthtA3UZyneZ1etXfd7JKk3Pj4LkKJ2meVt7KbVRpX6WUGiVNz97wozU",
  "key12": "591vcUG3nbU4mmbDKBmMYdiS5jM6g6vwgZBJNLHw8gWWUZGhHEFyj7y5zFWUkxinaZNWtyMBFF7F52YcL8RAFV1t",
  "key13": "565PYs4g2yTJYGTSxuhdXH98SWnJb7RCPiDqgBcn1vdigtr1rjnUmRPiHctkPxUBBSdpJQPkr55bfghiFz2KzpEE",
  "key14": "2qnGS6gX4h4LRHbdiMegght4Vz1soXxuhEkJvYd9tBF9tQmibRtK2EM75sSHSUFgdL6DCKBVwmG6KPCiY3ymiM8f",
  "key15": "2G4Jb5JtgUmAxePL4YUwkBFUMPqDjLWBUQ1h3692J5mtv25sp632GtcHdBSS4CoHVia45dttyn6X5qwJ3wPAKZfi",
  "key16": "46XtAPvUyrDBVk4kDiJmnBHV72fzmDfVsAhWH8imsr4kSc6ta7qVCQAp8wjmbKf9MnuHv9MVvTfeAkaM6TgUcgNC",
  "key17": "5p7fFfogBkg6B4e2zPT1x9GfuzqaYqc6kNMUX8CTfR5nMm1nGFNWBE9r9SDAMQ9WYssHUJKCdnPNQTiuuvaQrKea",
  "key18": "5PqAPq52zqhN8M39vKwCx26oxtbjXKXsK44F9Ad3d4uudNtJoSdYqBHQ94dYCvQpL5f3vs58H8xxrewvQ9o8mKTw",
  "key19": "25cmCCKuesKrRdaJSyRMgsRiEyhzFEs3AmDdw8JGndkFXtdXupcxfQSqdymVpJvaU71EDfkRogWujSfiscZuYuUs",
  "key20": "2f6WKgAwVUTnUpPJUGwtJNfV33w6HoeLUC5kEEmfHJ7AKnk3TfsJAve3mqFvsJuBuJvJiwG6Hn8M2ByvyTmuWrSK",
  "key21": "5xgxi5TiWX6a3uJvhzNkKa1gkKVWyCJ2BuhwFR3uqeLSuYeXZJx3vrN6Nco8fVeaBHBYVVGAnEg19yGGuW5Vgi7o",
  "key22": "vk5r6as9T6S4E5ty3C7TcrDmcMHLo9q7KHsDt5iwEZPU1dug2kVr5ybhEZiZ1A7Wxy35ZLJVhrRHhY6dsoCmYiC",
  "key23": "2ns4apKi6QnVGaZBeGgGSSdCx3T2JMjx2A5arvY1Z2HajihCbwAmHDwUtZftkPJ526Cdj5oPMsEFhcdojQHPP3TF",
  "key24": "2FH12Cd7UZVLAnQf4Chizp5noxMNJRy6afhxsksKdjhHXABLfomtJh1aWgBwXCg5XyQ9bhY8a4fX7ddHh3t48sdW"
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
