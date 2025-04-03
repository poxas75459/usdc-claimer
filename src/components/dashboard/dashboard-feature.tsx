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
    "25cC4WV74SbZWXWeXuH2PQD3UkiBnXUYFYQoQPi6Dnxvjf4NHHesWwpW9vGuwGn9FaCYMxXYAReLxyHB72XeQjbr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s72TjYYALLr7mRZsDG26ui44343JUTfz6A3jwB5JY9hypeC3Vk2wm5RBg9t65QMF9wCkJjx92hJZ1scuSYUewJo",
  "key1": "392dtohXd9imhCprXJTeuPNJN5csZegfywkNzSnK8vrxVhM2tKvwAPNvVC31GuhwaYnEqsu1TVUJE5P1WeV8x3qB",
  "key2": "5pbjo48z3pXbeQoVkpsFxogjweY2DvJ1jVxdnuMKJYiXWTpWYcGk5pf9QyJK64TwuLbt861541o9WfXH3QDSRqGj",
  "key3": "EpLKrKDFvcAqTgKeWzEnxnpu775bQkV9AMUyXatGQGZHyaEo1sA4HT7tmJj1ExCkx8xNoUZMVZw94betbL7qaKg",
  "key4": "3SGYLiZjBWdozaQzHJ6UV6L1YprUa5fEW7HGUtvQBXDn1fSRqUQKFtjCknmM5LcUpjdcA4ACAbAx2Y1ouX5A8rWS",
  "key5": "2XpgP9shBCg64tF7ZrzT7ZHPN2u5yF9fKbofiHKahdJKvD8svNuX4Q1DHCyejBhCjWHB7TjjuRszUt8rH696GNYR",
  "key6": "2rMRYJtMVh5L7QuRw1Y73xQo1fLXMnNR9kvTqod8bjVsxYmA2FQNdvGAWiUrWGBQBAZZ4jwLNZeeaGf7dzbLhHC3",
  "key7": "41iFieoVCW7LPF6zUadnAFPxvUSToQrgmNZwikr4LsgyTLrrt3AG8kHa6iHR1XCyFa7cwovJFMEhzdoFvTUGfsCi",
  "key8": "4X1HsRnMV7R74e6gyFpMtMLjHXjKYq2LHx5mgCXY5AjSi7GXNPkrTKTnmtUbKSFTp7yejXnTa4VLuHjj8chMNX1Z",
  "key9": "rmjzZ6hH398kEuTfnCkDZLRhNzzB1phNjU85bJPyjAxsyY7V4vX7BJvwfQ3bSENH5rSVyWjjHBK1rpcSs8vYTxF",
  "key10": "49K18tAMyTr8rMVQHv86vhTWN8snzYnPiKu3BvZkGcwhsBcWJ12FLcyEzix73bvAEtTFC9y34YekbZf4B8NiCrvg",
  "key11": "5C6T1XMW6ttfUtY5b19WFhyowUhuo3mRBUMkmFX9rxSU9wHEYYiWPXNcodE2xRyjh4K6tmHjF2wdvdwgRRSFZknj",
  "key12": "5r3DqQX2XLVpe8u1F1uZ61yhrbbkghckos14fgjFdo7nRVcWdpfGzhsLs7ox7qgGQanmyjF3Qt5bGjwWQ8Ppk448",
  "key13": "2HRr5e9YvQb9izDgiv7R5VRuW8QHeVzbzo2zZFbLxBme28YwmyzToLrCAot9bHjMmgDuURz3fvSM4oPvUAyySbng",
  "key14": "5T95V9azRU39gqSzbWZemwteivKVMTi8qz8vGJcGkZtiCxNtvgieJhkbodBKBFxvywN5xWwnxfZiG47ZAsxYHdkn",
  "key15": "2RMtzw2fjJAdzW8GM7NvioS3NnirM69KC6nxsVzzoQnn5TayMJhd4HNpd8nX3nBrLs3gLmjXRoS5hpnUNRJV8gmc",
  "key16": "4pRUpg7pNdDHiL2JXMRfr1AQcn8w3A3MmvVwGfGYexWcHWp75m6KYHTJDa7gnWdTptkbjwNSH8nfnPaDacaHNQZK",
  "key17": "3Zwyx2TKCRiwZiyQjHr4uHkRfg6NZqfaqQR8mrGKM8WH62H7y9YFo49UT2zogLcSMurqikHjPrE1E43jkNw8mGan",
  "key18": "2yMcFvYGpaLYm8DtQw9fTLRJiGCw8cxzB56Hgwxs6gVDEM5kHWnpnQtVnBjb5AocG4opw7eHG7mviFhhCa6EP3Xw",
  "key19": "3wL853ynCMH9mFAeYsfJuiBawQjNDV4TA165Kp7TVBuLGhb4QTZ5U3RVnRnnYKZB6Ws3VaD6GbcNQSHqDq7zXHhA",
  "key20": "2Rw5UPSecmV72HhufFLoEX7dnTc7JGMtADVU6MRHfFi7TGkqPux6mkEan2VBDhJQ7BQYnPhtvvKLHDjsAi3ehrti",
  "key21": "sZeSh4qAkRhbDW3r5eTSZCUeUnus7bMTky2v64dSk1abzmRENLEzAodKx23bmEhBY98BcV3M6Xo5tbZRn8coSmF",
  "key22": "4uTeHoeic8ENJZ7gYhhwf2Y5XMW28uie5YsyeVqrqi8Rryc23Yimz5yiQmTfi94x7mbfRXrUaNabEMKcbhHGhbx4",
  "key23": "gpeWmKy3HxRogb2Yf292HdQtKHa3fT51FABiYiv4KAuZC5iP5YqLqZQr92vtgUBxTDmrYR6CRQf86oheR8mfPyy",
  "key24": "3jrRXoHDzWqRcSmmV1tcvdWzeNUtBiqawfjyMHHAWWhk8P3FXYUvDaM6scyw6tU1FtEtEDfNhgtEqurZvNDKhRJS",
  "key25": "31mnzdz4euUZcPnU2QTkJT3AJHFUhT8YuLZ8TK2M2ni7CyRmxdTNRary1HurEKFx6LwhUqiHApxm4e5ur21GB1kr",
  "key26": "3ctBX81Cp3SnvfbtQ4v7mXReLqoezZ3F8maUgnS7ja4NtqcHX6Mmc3imSNxGSV8uyc7J5YHfokrik33NwjSJsjDd",
  "key27": "2UF3yWEYNGhJe5JjaLRHGveKByWoN362RWjXt5k9jFuUkY4XFUGSmf3pUikGvJexZUSFhAtD1riozKKhofXdbFBh",
  "key28": "4VQJVWeYTnisRvwWZkpFAd9MTN2FRvKrb1SyRkbgc7NP9ExUHmHpEFSxiGjzFjn4ZqEsoGtiqSzuhhECvRyNA7Bg",
  "key29": "2hzhmQoL7LNiwQstCYXbGFJSSPf6kxqDBKFZp2xvFmsTLDUDJwktVBxRDaW6jinNFioJKFg8C8NC229GMNHFuw2F",
  "key30": "67ciwhEyQ6gqqHRuhhYFFDCQB2WV4AqW2Pova7HzwHWbWdd9j9rzLe4XB5CWgF3q7RRK19o9rWMSria1BuskdXP",
  "key31": "5YMFPta8CTwZYZQbfrFXTZNLM1RCNDDWhghpBrGdKjz9e8NCt9jhTSmJRNQ5LwbiZpz2D3EySxK9GcUneWzZrhHu",
  "key32": "5gGPGcMjg53u1Hit6Kp8EmkfhoMsHRRftinf6XWe5pEJwA1SJ2RgaHJ23m8pNBUuCwKWgWysvmmUwzwxWMZ6LA6Z",
  "key33": "4HQuiJDZ9GTqbM6DBrYULYSdriTTBjR1xPRiqD2D6zSokHW2EewJwqFPW8ToH9FpFL7uJ6bd7GUKSKex1G4YyFEn",
  "key34": "VsV8K9dH9vTjReP7TPKzh1TZD29jwoVWAD7AvLR6ZtFCXzgFvGayDJWpbxCJQ6KY1eov5m8pG7ssTFRBJm9d1WH",
  "key35": "5mJAx3AS8yEXYu4uUfHwfRnGhQDk6udAPw5Sfb6km2xHgUTjmDcdCQDo6dbxDTNwnuVkYiDxs3ppuTCmeukSFYBb",
  "key36": "T5hD34XsEbao8QJV2ZBRCinqLvATXXu4jAKEMhwLWBXmEuchtpEohHwGBLV93eGmiRnJt49yQrNKsnRqPJX1xBB",
  "key37": "2yQf7WsvS5tGaf6y1vPt4CS7LBzprNxDB2by5zF2gqTwBjaLNBHXpaqAcaRfLEdcoKcCvMGRAbhfz93CNJLTqhy8",
  "key38": "33WfXgv6bKoAyuSbJyxasaoqTP1Wg51Rdc2xnFsthYNorRrPbUoN66sTMHTmk6AcLGPLPwxQDow4Rk85hU1HyRiR"
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
