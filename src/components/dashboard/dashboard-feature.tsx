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
    "4M5qoomoTRRhQRzYoT7s3MuiZB6baTjGKSzGXZd7SP67Si3e8z2k4GYEEjZ15JSGDK5X7sUmjV3RdiRMzAPSVUqc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NPjjfP3AP79MyQU2JUuon3BRUPBnqAsBZTDzsUGkEdvWxqxE1Mqs46tN3Nm8G9XtbzQ1TCRZgTseUJ8GjcgNfjV",
  "key1": "4fxJy3syWPTpPdfWJC46EQ9WJgKe8CoVfJEk4i21BbzYS8hD87P9gSheDTHunrugFV7BRrzFLTPJzzP6RXRzNWSk",
  "key2": "3bjgQ8dHbJzWYbGC6Pc2YVxk6bdhWCC6sjojUFd35A5PFfPKoiwVF7LgPc2EZiyAfexxSjB2ZPWpRSqpAH3QBMZ6",
  "key3": "32JvVXehYCTZWkNGL9ChNWby6Z5YF2Lda2KmxQF6XQ58PhNeDNmajHRBKvEyYatsCuR58NKMuu5KThfaTi1fWMwa",
  "key4": "5BYmY8UrXJ67RZXiR6wA2ScJYPrZrtQa3HekUupjzhiDCnbaC7aMUEB5sbN15gDA7gJ8cjgRVRjNCgTGpq9bySze",
  "key5": "49H6x2ALs1mGM71Ku3D94uBjLPxBrMCFksBUgwixcMsosBUcisFBT5c9tzRfAj52wyuzNaYJoz8CT995dPhDrwcs",
  "key6": "2AFHz5pzaQ7hjwvssvQMvfWxB31a8LhLbVoy2Fj4pJoknonkMWq6dxJ235uGH4ojm9pVb6n3L1DG7N5L3ra3cB1G",
  "key7": "49ysvkFvTpfz72tZEoEYB4vPBB9J4xrkq3bi3y92EDeLUg7kFjfL5AKHozTdPVKkqq7P4TCxigDSN5XcGAo3BQt5",
  "key8": "UYhHGztwB3r8LDTeMenhRa8TwwiLgq5yAPQ8sMxqNJRjk99UovMANrUiKHPGX5xqp7ZjqEjJJ1YqWKCPiXEBLAZ",
  "key9": "5TwHuZ5xME1DmKo32FGr8eDN6fMpSSfNonupjbtis9QcFRhmFME6APhKAn7SLssyiBJvsjZ9V1YqAwRhYjBZq8dX",
  "key10": "4oEih4ZUoYa2wX9SLMhSrtRWfLNwsZftuJUVC5z6AeaUM4nbgKL88igPGJDLzx8TmNjysvZ6bANEnzAkdX5DKZan",
  "key11": "N2CC7kkoSEt11F5TdThquWWxaw72TSdRjBChz5LArBajJ1S84hvSqvXpks2Nvn1HkgDNco5T63RUY1A82d2emap",
  "key12": "3WsjEaU3TEQLENYFvtva9chCR11XY1jzwR1FjwCiGZBk9hfsi8WhWbGRNWCCDrXx38zzdefHPhVKD69jdXws6AZ8",
  "key13": "2vsBR6iiS9qAHy3yy8GZFM92zRvYx3StpHuGSRwc4QDBxpr5DWsYGa8GKt2o5xM95JUwCznTRP6VR3g4WA7UmxCU",
  "key14": "2u5dtjEDRKhVMeZrz54wcTyrpbbensR4TAa1GPY3zM9TmzSvT32NN7L7uQNmdxn7xbZEXNLoE4p4MPjqcvyHkgpP",
  "key15": "3cSVFoiVb5WYoDhEJGNFkuCTi1qJ1S5PjA5zdM5xvyYQb4xYf3wDJQbeqT7VERxwj457948XcD8D7erHNJ62jqkf",
  "key16": "4R638oRVsSWM6xTntydRdL1cfeiCAf2bDEmEiJ6wKPWYvRX1trcpVYyGavf2wdMhBUHPH88qnPPTp14bsV8nx7TC",
  "key17": "3ySA3UWhN7iJiHCFNf8wuyBUUW57uGkHdyHvLVJmnWt55k4GHysBhAeQPHTy7PGtChuYvGPmL7FNc5cxDLmviDAS",
  "key18": "4TtUQHjoGtpQRasZGWdhurgGdZVPYqQ8reMehympP3L9XVR9E9vmbDm3Ex6MKrMqS4ezABZDbx2XzhbTwd1zU1WG",
  "key19": "xPjMXXYxcdrJR3ZPde69diUNH8d4Yv2gZVSq94hE3F6oHPT2WrL6EJtDgKw4A4MAHJRtyLgqtLNi5WdwPWi43gK",
  "key20": "2F7ihttWmeKzR5uWY3wxhNzXnZPTCgc8ppbinF5Y2nSo57Wn7WH9b3CrbsLcfAFqt5UtJQdzZoDt5VhumXHiZdoJ",
  "key21": "25gQJcZmNeubWYYmF7q7ELj9ybg2NABbu1ZyZkCLLipnUS1THMWvDLrv9WhX5Xfj5GZK6HjNpHasVhmDuWtwAXUA",
  "key22": "3NkYVjXYjWLTf2KrpDPMkrXWCnr1nxmEdHDVqU7rogAE3z7mYbCdDsytVtVEF6zH32YFaccne7a8jEe1SF7iUw1J",
  "key23": "Y8XCViqevanZkBkz5tSzrFb1ZrMD4nRSC9ATnB2rjHugu6VAVvB1ihDMHQDT6ZqPL475bMZffQVMbnLfVHoH77n",
  "key24": "MAv6Aa6XJmbSrikgL6bGsNcNsHngidQpEqtmJy6mgrfm3uanHcV5de6LPay2fF4J1DopFBFCSoXwx7Ccdaix2qs",
  "key25": "2SziAcL6xWJmX19SkEEL9WkYpMBbmdboMsma7dZ1nVPzUf6nhaq4FaGwPMfTPmj5LpHnZearXVCLxVBFE1Xep6aG",
  "key26": "3JByHxYP7erYtGZYTrS86t1QpgCRZNkahiuGhtsdFdeqzoAgsnTBm5VbkvNKiVeiCYCTNpJVFzgec5eE4foVnze4",
  "key27": "Pn61oX4iFewgASgjkSp7aGQD6sUPq3XfMtxpq6DyrQ1DcBdcPFYA1XLC1GMSMDdeuhyjk7SLfmyEZ5bn2vGR2Ux",
  "key28": "3ax1vb2uGLvSPGDbyYVX4NfMote6GniKt5nw3Dg3LTRDGNtMigD15hhKhHc7yoRSSWXo3i4hSSKd5BFn9VoMbwVt",
  "key29": "3RK6Hu9b8s8i9rFoLfVLsfQKnpJrtsP6qqoDyoqindfCwhbGVyvnEDjEnLbKeE5Gspu1xhHq4gZYwZdc48tuXDNw",
  "key30": "529oxqUAGBkP7sfsJ8EN4rZavegvkXqemAsoWbjRsDfjQFNX5VDZXAwfZ2RVNVaoo17uCzAhnYDgrLoxzS2EzL6v",
  "key31": "2T5uoxU7t9DbRuFePrujVvBPFMc4b3aU6ePxVUvCrbxtxjSppDqFzfmRyUbBqxFmkAVpkoLaZyHsYuKFuTggHuqG",
  "key32": "3Sd7GRE9vEKD1S5RBgcULJZpavvoSzzovYQQv8tbHHT86Y9BPeaX29THyhfpD5fpkifG3BsQFVUqzPZNudEU4Ye6",
  "key33": "5hbxYfYth9ykoZXo7Xc3gUEM9zB1AD8iphn9ce84PLjknAVA6YE4xy6ZA6tCCdDceU6a4RjoBy255oAi6W9ChJk6",
  "key34": "FfyAbhyJCBJJCB2y4frDgiTHBRuTbWRbr47cJqbm74e9KcYWA1HuCEYk5hHprCnRQkWXoaepRrMWRufgU6AHpKN",
  "key35": "2VKeigtN2GbwRJfecKG2juz5DtQRxLwab3F3Esf4Q4D7YB8YUXVrxGEnHJUintK7gziiU5vniGKDHZbzinbdTpi5",
  "key36": "5orpgQuyeFN79GEX4FMWXHcSDSK9kuF2hNor4PhXRZZ7XxGjKkA7JhdPFCYVfBMghKHBvMr9QmH9X94u2PBQsyfH",
  "key37": "eLe21d3CNwKqVrEQxbwznFu4dVAyjdck3AL7Bib78SsB2wbzdc4mCjES9fcTvbdCKxizapP8d1ceuKJWnTQADNa",
  "key38": "4hPeaei1RbnDHenf2UMdtKJLy42eE6mTWK8F4kAcc3cSn3U4VMunPMJZuSnPsYwC4S7pHGjZPuneXkdGxXXbqNG9",
  "key39": "2JnAEKxhH4iExLqcLUJdBTcSwiWi1HAiJ8FtkE1u6fevTPL78j9bFtD7xmbM12zBYpDW56w4vJUZuzxvZVEZUorE",
  "key40": "2znYDQUW4rLyE9pt8ch1NKnSSqmKzCrxNdNdWRbc13CmqLwmH9iuFaZAxrS8b8Dyd91kZpfdFrT3mZgLrVN27R4z",
  "key41": "2cXjq3LR3c7QyEJgd2F3vf6qfD9cvPf7oUnumhy5Mr7yqKWYGG3FAVCCkY5DtW8X5XFmmnkpJiffP6WgiXEZ8tLV",
  "key42": "4DGWZdGFCM7rMhVVhd4FHDi76AZCexbJ2tBBmd1dULFhTS56EbBW2B2wmgW5XQZ4trkeFD5nkpnEngSxqCKD853J"
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
