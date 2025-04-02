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
    "2K1QheMUgV8fAQ2JEQGVcS9MXcrDHYrZMSv6aoakxZMfVHeJb8GUMjPKchUwdJBVFzs7heVqvPeKXNzoQBW4FF4Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DrFbfnqbYmR1bJvhQi1VQorKnUKtc6jPrToZFK2eNgGQwNRx5uGxhVBT5jrkTnxqiYdCvV6G3iqquuoF44BgHmz",
  "key1": "63Ef5YHH7YiPZLTNsfMsrkds1A46YoVaMyvA4GmFWLG2j4YPdsuNtDa1bTJmriipQdkmJpGk9aGcAY7FVyaE7mAM",
  "key2": "63WpX6hnr61FziYir8ijLQZ7BbsN98VRXm6zdkZmKSsVu6Am898E8j8Wv158LLW1vU7x9tq8guJt67G4xKQagGW1",
  "key3": "4NGm5FQWD3FRSdVXUvKReSWevvtoSMWqVTeumw6TBf4itMuSwzXJAhMcti3tuvXLXLiMBFcHsD7upTBcze1ogYGS",
  "key4": "J5mThXdd4HL8Qy5XkfQD3Gq2qVNqyTuAJbF8mm36oVHuxGQWcAP2UNTogwxsRX7SsyE7V5LsXLi33cnov25PQJv",
  "key5": "4hKrzpcq1gqrkzegxg7WS8fF7ALdHu2LQwQDqg8U2q5sNRqzw9smSQHp6wUkNBRthXi3eCbK7zbu7Vrsp1dFYEy4",
  "key6": "2Mtwf8q7HAYTKRrjjDFXLZZ3Tsubi6Me5X7khCWJAPova4f6omEHiRuuvFR4RSimbZwZZqcqrggPQHFM2tAoSX14",
  "key7": "2UgpMyMwJLzC64YtJz8eaANKiWBr6ZFts4MVwmRKxJVp1dPD9xvayjXocECasztVp5CDwEorcGXhcAHcMyx4qELr",
  "key8": "5hFbxziRedJ12mooWuKgzxmjjELaX7ABaBfMZT24XQAUWef9M8U21BGB8mCLYNDSKE2vbLxdsypUP6M7wwWoLEYf",
  "key9": "3jQXMnWD4HFzSYrrspAeH1zPJacS8AyudTSzBhsEi3SgsWKYSwCrmwhw43dLE3dEUKsx8u38UoszVYmdH5Bo4wYn",
  "key10": "2zysmBzuprtroenZM6xtV9nLfNErL4B7ouLABiwyakvW35mwaRqiUUoUZGEBy8sStiGRR7GM4hqfGQQpZuo1cU8Z",
  "key11": "41sQEBXcv7HhzDdRjsmC4ERf1PJnBZ9UPo8heDVogkC1kd1WEii1FCdnrUVyCgtiXCXdZJozW64ksoBsphQuXsSd",
  "key12": "2BodfntY3QNhL1ebTWGJ7cZ5qmd32jDwG7XS41jEkc5ggpEd2zKnWcby6ofQfjE6Lqr74hm5xrRGnijezPNeGws6",
  "key13": "27NEHuxczS3DRKMQuawFmNKX16Fi7yZkGtnsKKZmriGdLGHZWB3Kn978JX7ke7Pm1WiqJqgsyx15mcXJXXv9j23D",
  "key14": "42NxG29SGzL9fq8vpJrzz9kZb38U4X4JLo5iNTzAACod83NWTZsgZVXoxgBri73h1GVKDsiftYJbmDBqJ6ExXEAA",
  "key15": "3iNTaBhFHCkSzsu2weSxyB1ZbrNHE7rEBVA85vN325SBxnmzVKfjiu5vn1ahwRuAhMtBZVAHmnn4hR9XdV6rRtYf",
  "key16": "4M9e6GkjwkZy8gqPB3thWSaMdGF1PMKmCWXjN9yLK347oJ7ZAwHQVqgR1HKheks1FxT637f2Y4K28899abeE6Nvk",
  "key17": "4Lj3TkRxDeiE5ukTkLZMHofL8SixSk2Wf9yNwv6Ri1Q4X4Gs3UEa4uRqQRee3Scoha7ecMuGjNkCaME7Aea3d5ir",
  "key18": "33f7TgxUEBY1myWqjAr3WxtYTYkV3w3qtdr3iuchaXARrzWVtJuYUGwvvqomMwwxXKqsCbY1ZjjrDtEASheetr2W",
  "key19": "4NDTNwDN5QCT6hANFKxHe6EvsSwyUAyTVgn7nXGqa1AzbKhjoNGZxwsomUSkeJnMsA1KJGDmDBeuxEwTru282DAS",
  "key20": "5PzBYEDd4MF3GJejN9KAAkJfgGkKucXf8wXqxWoKYW5iLAoB9WMCeV7h1AAN2cerC8bd7Mbv9m8wR869nmmJMD9c",
  "key21": "PyvLr5sWvpBFzPC9oZAWgpgyJf2EmAWR1ssP4DgMb3xFvHnThmpB2adquCwDzsaUnQcyMqqfrFyPor7Q2vUrVvB",
  "key22": "3Jgt991frQawk7DryrcaJ8VGbRMKsg6RhMriN7eLmtv7JkNGEStfmCMkbwBSgcP9biZfk3Y4EWZ54Vkv8PCVeh46",
  "key23": "51MK6fxuqH8jCQ8cx9ocsZiw7cQf8UEUeHGwzgoL8FxbLemELi7pwr481RDekq8SWnUvbWrNasE6fKv8YyWanjCu",
  "key24": "5Aahy6C46GNjdYZHQBxmPc52HrJHgHV9si4qiNEzoe7FcWeh8Cyj8wJ674kEK2d6Et1twjXR5L15aattwovUKTAG",
  "key25": "7p2WTc9MXFb9hRmkNLVFBMpG5ho7s4pxqPpmT3y1pFvvEmDSQYAX4ghoSA6Bs97445TLLwwunR7WbuXeqEpJwf9",
  "key26": "6QMvj7VsJdPnrvMEPXDK3NQpEMsZC1TJaJ5jcviiYJCzgqAmJRL9i6onbCymWi54yzwGnGRTWeRu6AASM1ARbGt",
  "key27": "66zRfjVqqg7kZbsR8qqmdAejsqR6hE8L4YVQFHvgrzijFPQXLmea1V4EpDciekMV2L5WAPbodeEwe641TZ8GW8fL",
  "key28": "2u1jY2wpsKTRZx1Ggu7cEh8qDcgQS8JQABtCgUgfoQDjGQ6GTCiRCgfFbYXZ5xiJ7LdvJMT4zU6TEBG4Z5Wq1Xt6"
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
