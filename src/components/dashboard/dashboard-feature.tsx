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
    "3VHoaNYC6RbjgoD6ZMmT2WibvZ9EroNHTA94E6fQDjbhnWR2tusoDuZHPiXvGjgpkNTrKHnHeNTpC6G6tKWH98ov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EejwTX3qoVaSYpuAX5EX4Q5mCf1apuBstniy8diQCjo54BtbF3QJiC7fWPKSeUuGyWectwPBnEZfSoustS5ivif",
  "key1": "4VHMT4JhB2RWSy3tg6pK15r7hPG1mSQM9CkrQ1rQnRGR5YwjHQR2qna9F3iH72WXprBUcGQz3hykutQZY9B985wh",
  "key2": "F5NTPTYu6HSJ8xynGxGes4ts8JCQSmEzt6BcExVFYBzbZ5fnE85AypZrBWEKbFyXwKMxyPpUKqgM5MdmU3Ehabz",
  "key3": "5THZ7ZN5UVuF6bqrxEqWWC56koy3JZ3B7tmzXPakns5pSgqEM5Smrqjow6gfviYUaScAG2a585aYZNcjDzfR6DkH",
  "key4": "5SMHtQnP6Psa29RApQSh2RDxoL9DgUM7skJ6dz9GjojtbVsAQRzEWyMYm4dLm1LVgE6BpxrweuGJvU1rJpynuP2B",
  "key5": "4EE2hmRDWTLUPyevoc81x9ErRGWBnonhecF5ETLNGemHWNCX223Wi6wtfXzQEDJLmUiwK1YQGirdZx63KkdhDzYU",
  "key6": "2CmgZnznb5Y3GeogpNJoSyGv6uiXVrx8EgWHrELhJZTRtNWkfnHVVWgLWYH3MsNACRKAxvw797rziEQX6aXFdZDX",
  "key7": "4n9SC5ZAyvLCYveixqZF768oE6XBnjHuZZmZL6GwU7jRzExLhRXukcNXrMyFE3bs83Ju958Mzo3QebhVwcmJooEK",
  "key8": "3y4hBQuEFMFtGqV8PEz6dpy4gE9N6uuVuojAMPduWwSduUbnaCH5p2XbV9h3FWqDP2pJLSuFYBAdVzwrjFeRCcBg",
  "key9": "5rEAwF6T4wKTTorEj13vWpcLjExddT731cYYyCxwcJg9y6VzUYHVYZeNEEYEwRnnpThAJfNCgfTBNZUbFZ5i56X1",
  "key10": "5cGVxYvFeE988MfEepJm9Nj1fm9ZtuFb9drcNBRz24rZLkNHEs4Zc5Z7bnhbsMw5eDTbnZdzT1JzzVfv43ZWKEar",
  "key11": "4KX8cs4XqhLECPufPZaBMBQMkECr1DwYw9E2dU599FUbxcFXXwZ9tLd6DY4xp6EgRksZkQuaN1ayQEhZjYjaAA55",
  "key12": "5JiFCUq7paomcecnSV4Cnb9UtSbm1erTn5PrhoWAyzEYQMoVY4ApnjXZtY8YcmscJRDCujekt6NBaBV1sMGedhxH",
  "key13": "2d7suy3bx55xZ2UsBzgVDhYXHxW1Z1MN1kYs9oJi61nXXjGPTsef9QgDdNGrEEgFxigN5oJeW4qiH8SDViBNzoJp",
  "key14": "2u5FsedVRVQXRMZXmwHm8o9L97qYcEFYt1HHuodwovvu14FfaaXAbEUsDk6oeJBZfw9Ndi7xNVmRpmewe6tNawuH",
  "key15": "5W58vFpWkRtvMBt4xZrjMekEka7sNbfaigCSEcrpANRwEG4vEtLDK7tCF1CfzcvkRu57QjNa62yn43ERk91ZjVQD",
  "key16": "3zS4Ugs39jYZ6tVaKe8qSgUP2FMU98gBt2UAXU5mWauqC12awyjkrDUo23kr1pe1NFgFPNT74xVRZFNjpcgGE2Ey",
  "key17": "4ziNsHRiFgrqgGdBANuhADpRk2BbzDuM3UgLsYCXzXfRFBNbxxbvzVvqFNSqEjq7oqhPbzJf4cD3NSEDyhrdCF2M",
  "key18": "faTrzSMmXdqYtLtgUGCRRhPizM8cCAHdzzaa3UeZyT9vz9rySiKFtdCfynbi7WjDvvrgWjG3d3W8742AsZa4Rkd",
  "key19": "VU576EwfZNJPxHBANmWLCtyRb128KoDAN51zZC5FnVCbPnk8HT7TvHN49HGXzvb1LdbnYFD5ysscHobzHmJKG2i",
  "key20": "2azEV2VCAD5xYEsWbjLPq9S6TRH3dQDPMrUYxgo6KLbuhwqifqXA3fox3DNPHSVEqcEj3c9xAqwR8zgSxxPM3qon",
  "key21": "DNQ4QB7QWzzHLH9T5WzJv79uPHfNnedKAHG1BhtK53bC34DGAwBGAbGfwSs4pxFHkJRK3tXKE8L6ecSb3gSkMPs",
  "key22": "2asnNHJM5fJfB6CPmMkK4nAdxBsKtnSzC3pApWm6JSKDoZQsqd8xs9N1bJzHEAKGbprGFTs9y2r9iUaXRtHxnuX7",
  "key23": "3apGZ1c6DBBTddLZReSnmmNiWp6P3TGGPdmJso37tx6pMiDZNWcbRVzG4b1W31LqcdkBtwX7S7WrNVFr61xRGiLY",
  "key24": "3ZqBvUkTDmcR2mQXqJQDX1scN6NwKdbYcy3QRkyPJcJViv3Yp7qnN5c8cJdnbBwFsgT4GGhSUQaHxEmmSid5Xjrz",
  "key25": "3a547JGsUqydGRpeEzioR4xDYuxEm6EbY2tfCypwKGF1ywqbyFG4XG9V9PpmF5kw9EyJD44wXNiLxY4eGSdhZa4U",
  "key26": "4ySUniky2oZqgGGHLNg13GoUC29VpmAnbADnvjqJjrkHG6Wsb3iSvFSYyREwV6AmJLy53jzifrrC9g6mcLf5B3bL",
  "key27": "NWXtK6da8tPwb4QfC4eqvctdVnPeME3TbKNu3Z1QsbJCeTHu9AkkWZM9fgeb8fqPToZRWb5uLfbjsnMJbSfD9zV",
  "key28": "5B1eKgG36YaPCiFcCM5b3faQijf6EamB6Yfv2VkKdeMYk6aUF8LqCi6CGzyC4APxYaSWTc7LvHAZYBZckKe5oB2i",
  "key29": "2MFVi9X7pCm4eJaR53BR82uwSVdpG71NQqpc3mRUigNM2jRHPoQGBCGDT1dqbnDbUKiqPpq7GFx8keNKBJp4jyiY",
  "key30": "GuqcsKikTHtsk5UAUBsez4MZiktSq1vUb3cCqMSFgyUm4EkTtfLimpgsotkHEWfFJUBHTZX6LdMNGPdsszHma31",
  "key31": "5N7RmRGgVC1pga9nmJfPKusSuRBoveUiMkbk7Th2dgNAxs2yrLoCPiXDw3pr57LxSV61BGYDkR45N9ZvmVswthRZ",
  "key32": "5yUCXNcNZ7eJWkLymq8RKmzNZBj7TMtZprYvV9a46H1vn4EFNCxbS6WYbqqCDWjHJMo9eJmRka7XRuUdRRwU8W8w",
  "key33": "BgMxnkBnKjdeLJE9HCnvCy2fZEVZm66BsdN9JPzvfyoPrjne3DyEHKhNaNFmnkeFDZqvW2t4AoNAHfza4naCcRr"
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
