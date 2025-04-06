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
    "2newTv7RxPguErBNv2QachHx2upJwcQcezMYg6mNQ5vYYAu4kU3K18TJrq89Ysx482oczx3RcdVwPG28ZYXpC19m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ySqXGNjcsvpVQ6hNcxFr1BGmuUX7cNR3UqNSsAvnjuXkAs5cZx8KpvZa78otNghrop9JNdqrDjWVyHXkR2AS3PU",
  "key1": "ES6iw2Fb2pEsTLqEx83GSnv8zoH9FDPrsfmCN6v1xanqSfA2xgUtU5qpHLyjWEXtEXWJdhHN7tMRU62WvGfXQLD",
  "key2": "4vLFYo7V4MzsKP4i8Cx5RSJd5DfdxHJgDTnM8svMyYL7i6kmKYLHZq7MCGqXfLF3sWazjepp7sj9iUxnjQLifTRa",
  "key3": "2bCXvgFKWxg2ck5T42MAb4A23trMCpocbqzBgFz8gkXgYzAZz8yrkM3dHnezewFNiVcSVdmk2D1pSuSo3rh27hCK",
  "key4": "2FPcJX56LNhtMw1N9WejBBJzjTxa2SpxWwyc6kNC1fqqC8sasfmeWPVFWSNFpGyY8dvwtoSbSAtZwYgVUGsRsgt8",
  "key5": "kdB6HdzYD4aE8hFAs5PBgHKWjBTDc9zKV7wJ8Nr92av3UTJa55Q9wng5YsmXQR6ZhfYw15qLUsdwcgv5ZqLW93J",
  "key6": "4gsvgApmAoynamei9ok5F3tev4oVdEf65REzw6XhsQySwHiRyExqbmL1BZetzJfuuUTCZAfJwpb4n1Nu2dSMnbf",
  "key7": "2hZCLRQmbLnQJbXqhuFaG8Cf6s9M9sYzrEdvHaKaBd4VGooaGhjQN1HDkLEuWWHdtBCvVJUbUe4GCzgAcGaChVPQ",
  "key8": "4NZSUZDJmXz67BrM1YDkVi2qYEbcLdDWWryuriCYYf57VhdeWF4LFBMisYocN3C3JZQva1CUwBNAEfUxfp1uRa93",
  "key9": "csHooeAyGH6vp3gpQzdphs1noqgnSpmXpX9cKMRdvSJrs1HVCGL3aFqiGyVaN8varLdpsuupA2wAXEnsqr74828",
  "key10": "NnoKD1s9vHgBXvMcVkqmC9tViezB48QsNC3yJWrSdpmcLYdpUTRa8phVP47oMj37bWfWjhKRCWNhKX2n4vUoh7K",
  "key11": "4Kya1s9J78ay3badftV3eZmRCX2A1T57dZSz2VCAz8uMrJQivqQF9bzFa3xQBbgiMHMvXRtMio3sSUuNZABZECkM",
  "key12": "4nQidckE7yBQsNNav3zkLWVZ8dDMPGcRGWFbWqv7s9UjQ4YoVScqAAEXjinHF5CC1jjLeX3U4KuvEBc8efwPjBBC",
  "key13": "YZHZx8gXNTLk1kPKyxsnMo93jGuR9jDPgywmEiTCm2qudAFjbCRtX43WkkNUpbBaFTZJ4UbLKAzeVWos5QxXBJ2",
  "key14": "2KSCrscSMYYCWJw7ziFa256cE9KYUFhMGcP824CotQXFE1iQ9HT6XCH7oebN1b8Bg4iKmeLE48hUDzd3D3xCoYtk",
  "key15": "4kTq1Wo1vQAPmsywVLRB6rnCbKUVZn5UxU7qDimowCTqQkCVDERAENvDjcKCMnv3hMpPb9nb3MWumyejMTvzUt8z",
  "key16": "2gPJGHk6u6c4cMpfd5nJKdVLcNdL7juS2XizDLqLEbK9cu1Cc9aMLPLQX4k6tKFfH6i1vyTBc5ihLzQqUQ41FGGn",
  "key17": "4S6doatciUbwCootVHahVo3y23xuU7rr6RUkautguYzFNFJBAH9Bt9ZePSn5vyRh2wN9cFum1F2ciVMUNjJX43Uj",
  "key18": "5mTCKZS36YN3tMYcTBLWY1JRPhAq8DM3YsGScNjooE4TwkfdQhskpe5z9ynzwxBGVtaP6CKHZfbanzh2oickeMU1",
  "key19": "57d8BBVHxX59BjJJcchBXSTssRnhtWM6yHstXpRBueh8YcS3mgvJ38QLGHnp2HhjLrG7hjzcsNAABHbJ29vJawmq",
  "key20": "2J6siZK9wKhXMmNzPKdfVrQcHZBJgRT47fMyTCuuyJ56KrLE5Qvvoq3NMMy1ViGNz9CyMDaDqrSwPbw3bzaS177z",
  "key21": "5PUH9TaparChnexsQruLwzvXjUpfJico37n7FGEtq3Rzr2Z9dLQK6FQ3WsTCnKq2nwEYMu3SPDtTNMC22SVAXcB9",
  "key22": "4JXAQ74ZuHMgJEZwVaEfhz3AuYBGXKyErNeyedgZu6Z91esiTvFvJX83QcDuxsGmu5NPNbrhMpt64NzVuyQq4T7D",
  "key23": "3NeXb9GWJCEDSfUFcEnJfUPJsrgZyprzayiZPJ4QBpkyCD71FmvMuWAuvc3F4uCgB4fTxfDpYitFxgECNPCoDKL8",
  "key24": "3mRkkDbPVjJYC3kDDf3rZzQ9UgbSBajttyt8MYmn94YMCU1KzHoiYdLJZohkA9q7W6AZJstJcu6Zfwv4JBgodN2P",
  "key25": "4r62xX3Pwh4wUeM9ErrebvV5yStBFWRz8x5KMcVKyJkkL6p3CawHVKuHLQGHsT7fMMwXj1bSD5wroz3aXaDSEUhS",
  "key26": "5sTPnRXzUmpQQXF949eWkMKJYJZX22yvVk37GCXjpvEqXok7MpmWGNShB78Pq1qzBZP8Xybu6EabwFjDHyCMK6jt",
  "key27": "32UQmzwpM9pr2kUPdDmwFg4bX4Zd1JUfYUbU1PMiQxHRuKN45nAVa5BzghiLZeQURGfmKuhNzaQHwbq8XVw6AapQ",
  "key28": "61zJkUrmKmqd9FYmqEEfPk5XTx8XFJNpzYSEVbuu3hvN8ptsw8QzrGWpvqmaW9aYyfvpj8x5CZyasE8hPyjbjX5L"
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
