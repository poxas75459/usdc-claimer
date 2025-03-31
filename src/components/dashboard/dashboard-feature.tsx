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
    "UvsQVBq6RYbr6cE63JnoLGbhe2EKmNrbd7drhdBCkRPdSv5K2TVkqnZV2Yip3MNay8FpUg6Lzqtry9EFSgmfDdL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jFcTWmssUhtxySat9RJJbg6mTDPMpXFkWUJ8LCqYnUbeSBz9zNjubNTjWPzYeZaYvXB7pV7gF6MUyuwPEzZSnpb",
  "key1": "4YWm84QPhWX32KhZr2Pw9TL7TYeUk8aNevyeGd8E8HivKxkj2dzkJdAwbePyR5rTzvKweBkk8ddv8GmudL6RWtVY",
  "key2": "23abNqqQTdrh8b7Srk8WY8oTmAoE3M46qnZTHAvNcUkqBvKPqSaKdMRQD89jNQdcWK5e4fisAq7D8TCymgqq5vas",
  "key3": "5taWA4hmKKrLa784Hu5aXnMLJXLwt8JVVnEfTe1n6183uNEZ953Cqg3eUT3KTzjKn5atsfHmPSWH8u46B3rrPDQv",
  "key4": "3AUqUY1Dapoz8nJYGaJGFt6tua753Hg6Ukw1AnivjN479xrZXT8YuzkfaRp5Si4nwfHgAxfTf9gKisV7KT5927fX",
  "key5": "SxqzRk5XVXJZXvAQEkDTx3eHfEXSTxShM1xV1cXzCmicyJcL9T4f13SeVCYdGr1Y6LWhLSsjs6n7UACTT6V1F3k",
  "key6": "2apcQVj2MeAtXxzCg5F213MmLvcYQE5rxhzRX1svBw7pNvhJKfXvyovzqnnW5dzFK7smCKPqPwvKs9iCJR2abqyx",
  "key7": "4GKR9B2myEizQMBbv1AEeQbcWhWjhFqqVsGmY4sWE5YzaRT9rtjzk6ym8mv5df3zTGvrCfW7gqmDozt4VDMifVXy",
  "key8": "5RsCPVqVTajZd7XtEwNrNT3wtwtXEVinGHGQZ44B6dqEuM3iHE4zke3b5Yosc4szZMRFCRf3XQ4MP4MScxdPc1FS",
  "key9": "256VYyTFXrtLYLbkLwH9MuxW1uxTe6buwunHWJmTF2fTuDzRHYoT6KZi37qtAVtHKDHwDZMX5zdAkGV4ZSKcKTy8",
  "key10": "4EoWUcJX3SuxEBjvsSVmp8JKDNzciaCPA4npv7zsQirsnK3PdQwGn7dEfJorg2sQRKZtBXZrFYwHYeQUYofg5Hqx",
  "key11": "YPMea4e7xxACKc3YPQCg3GZNfnmC13wDyx2JDLXrhQsk63VkWR2zZtwu6bXXxZzkyZCn7v8WcyCjEsEUUmEZ1eu",
  "key12": "EQyg7Mf5usdAvbwksdrJCtySqrnWiP5uuLbVxakkWYmuKj5S937RZxp3wR7ZgATXQ4bUFjGmkxoVwdqCbLCPUF8",
  "key13": "5sGmazAEWibeY7Ey72CfW2rXvwcshHcasFzwddCtemDJuyDYnNWM9AXFdLAJA5hmyxZDpZ1M8Pw2FsVJJB4hUmU",
  "key14": "2PXpRmNV62mG2HgsZY5Z3h1QZdNLx93Uh6tNRxbG4NeYXQA4DQTMAmNCfawQGnLpqwRuSsYtQ4jp6Pb26N7ayEyJ",
  "key15": "KF4Rsc7c7ftSdHpVSv9U6K7ZANWUewWisASQfBFWVZr7ZP27AfsZTYz1uRzgewpnhv2hy2Ydhq6LmqRN1nJbqYF",
  "key16": "3y7L3scoGj9Gnapcx6jCBsNA7vSzj6oiqkmJuT1DUGWF1cWincu9GYBwsyjvfD5BaAH5m7ZhZ95N6CduNuU1N7Xt",
  "key17": "3cKteq8YxNiprBw864tAS1Hy13dXUf6RW3zKLfKEH9AGdejyj1Q2MnH3fRZ3jQsVVWsqGWTfvDcte1bcbJpPZkUq",
  "key18": "5YSUU6iMKxac24Ji8YUwinaSDvzGX6TecwT6jaMMUqjFCL3cc6Wgn2SDEsHGt3PJdwdg7yhGYUDWREm9tQqyyMyy",
  "key19": "4P3uVxyvBZzAniBrEYZDMy37QcP32ukqfw4JU4VaPJA6CfRbS3QmqEECuzfmihZceD9WzwCCXficFdT4abdWymSd",
  "key20": "2vPckBxdZgkjRNVxXqP6rUGs7LycxbNpQuheRFU7G5HXFBYSMkRX6xjH6fQZrJTEg4Ujob7ao4sKFABBJr8oPt87",
  "key21": "2xBJuK9Wuw1SPGq61b6mU1kQBZaB9sU3NXye7rfzhDjjepPFnmJYP9TjZ5Cxo5u5k53aN8wWPzXKrU2PciJU2jUf",
  "key22": "2WP7pmXNhaZe7gMFAgAoFsWpiDFU3cqjEHKMzh1Qh9hGCtMsypHGEQGJxF5NQWdjpM6pLMwkWdubmDqHWMxsZu8M",
  "key23": "3bs66Y8nRMektd3wtxA94DRcYwybNqvr6ZTZPEJ9JhAUjPAzHX8khSHyjyh6zSH91tm6rEYFVLeyV7YPo1pJanGi",
  "key24": "5uNqvTQavcJ8mKYaUCpHQCnQqxssr6gtzn2BcUMCkZFAjamJsQxUei6Fji1nCq2tXZHS8Y2UTC7g9Ret4QjgECAk",
  "key25": "9UC1unwEQGXsixC7y9UgQPQQFgDcdWveQgLsJV3TTJxzjhZvpkVmnU84vNXNdBXxsrm6yQ3HJvbd3PznEP4YJZc"
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
