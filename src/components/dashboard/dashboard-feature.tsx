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
    "dxXNDy6wtT8apchiQT77rMXHrsrTRAUq53fuRi5m94N4XvScpenQnaGLL9tbFQijscLeLesJXeshndiQogkjC57"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pg6PegobPuKzu1425Z4hxkRm3YRSxxaz4zddkrG6dxiVw1zBwcgdb4ucY7Qmag2BKSNH93YyhYirEnRebiEkUv6",
  "key1": "5TcNitYDxQTAnBkcFNgFqMNrqDp4iDdoChEj8djo2eYn23ySMAah4fqk9mi8bZDSo4Zd8gSxGpfLEnjvJS8fqwcZ",
  "key2": "n1zc3x8VxQGYwd73mTSawbGKCZBruD8CqPqgoAuA478AFUu3Zurqeyx1WhNJD1USdpiYqFidetoukBZQJ2M1LoT",
  "key3": "3wXKMUsaGZV2WKF2VzrwMdWWfF5TfgBrcMkHo2HXd1FMd9eVvr9JuykZVWxXEXjEXTqg5i8WP2o3GFshrFkiuz4K",
  "key4": "5pe5SaQzbmWDFSiq6ztiothxcjZxejfDNsStpayDNA52Ncw4PregYdrr8cuZ7JyxxntdShX6w8dbLtZtjzwZzhJu",
  "key5": "2ZfqucS57teJHeJukzwBFD3V6mFSmKQJV5e3Fpk8Wi9Fkfh5kDvnb2LGkPTUbeRjgcXahpmEsYtWYiumA2NwEi3g",
  "key6": "4Ajsts8ARiedYXzaeAP19p3QUZVsht6u6mNL2cf9HCVBHm1Kxxm14C7DxijxMN6MWwKAxsuLfZ1V6yJJbrPn5KBQ",
  "key7": "66339pRWkqmyDPw17w1dmeEaB6mCnqK3RAC2xJJTMUk6QcsivhwDuAHqRWtdZkBQeWkFK6twDKaqGV3kQWAApcDJ",
  "key8": "5kCTqB3M1ucAmKkDhXqKacHsesCY7rvUpaKsZdgbsJgaj14zSAWRwHLCEvnsKx4qePz27BmhQP74AeLKUxkBjXrA",
  "key9": "3wzXsRBT7p4HBHTqPqoBpyeEsDJ8nJksQc9g6XHDHZ8agLhZWMSCKciBosMjFDqJK3BkxRPYobUfGMnQ3ktXdmsY",
  "key10": "4DpBFq7kPM6VcXa6ba3atJioZ3aekBtarrCG2StKN15vZgQJeAG492iA29aUhSNtWu2FcCRYaeKAKeHXjxJ5zhtF",
  "key11": "5E7sFBXtnwzdb73L1mFTobjmF4bEDtm7fj8a43Ao1gVP63w5mtwtaRq4TDtsjs8FBwN8WWsFYMmNQRqShTeMDhBA",
  "key12": "2fTWejQTMd96KNrekxvGsSmYzhqofHz4f4E8uJodnt7P6E8wgG16TpGQyTucvRTB9CRzGS4tGxuJh486PkfF33gu",
  "key13": "5otRsCQHNnvUqPsaXqRmmHtKo7XdGz27r1bYbwBjQYRNrsgi7g97nBJeybAzM51AfxjRGBr3i47tzAqdAwB4D5FH",
  "key14": "S126i2F4tGMcEPV4Abtu6KAfitZvQkF2JWkAK4d8BaiRbvuaUiJvYYMpPYXMuMJQbBg2F1j7xxQGQ7Vv29Y2pnd",
  "key15": "3iocb2UHVL7QkPgrzDePJ21Fo1h6kbhC7QhgkYbazTMvP5XSvvooghPt2yHiCJEN2DLXZvMuFHR2T4vxJBX2wxAR",
  "key16": "3mdfwvXzMhRyRd93YQ394Ua3Xsk6NFRKVzuwWo49FGEptuZwdEDfkFBXk5nWLbcWtBitNbHXtfLbugwjtavpxkdf",
  "key17": "5j9Q1KUJECXxNRBkaYPydjwWabFhUqxnv48UxRLgQabaxAtqHB8E7zoRn92SvtpPy8tJkTq6QfjijxtQ6x8wZy1Q",
  "key18": "2oU9EFyaogpbj8nDFW3urKd4EoGfwMsQku5EZQb2VYLJW5Wb1AHvr5vZdzFNNXwzjE5iAespdRAdBs7hcNhhKzw8",
  "key19": "3tKmoKVLNaKs61qr5TXkRKLz9hjFEuZLgfLdbAec1Ng5KqrZjHn3VavosPSG8jYnVpiUUx59BYB4XRbQd1ktbG7Z",
  "key20": "XUQYhpBY3fTpN8kCwXiEUThKgE5p2okiNTwdqHnVSjLy5wEiwXeVo3mBdJkJnqXJBv6r7NAZ2DS9aU7hVH3MXum",
  "key21": "4dH82vnjDBfsxjWLYG2naNwR4qYzmAK26MXyy9cjT9zpKw5SGGYkmxcFcUMq8cJXMpGvcYvoCAyQT6ZTD8dxNJqs",
  "key22": "3ah5XoAm9nsoqasjtarVweentdMV8D4r5WZ7S1LepSQhNsTrrS1bzW9AzuKRtdfQJmrLwRZTFwKQVLYBeocWVx3e",
  "key23": "5PPzYrgXq1F7QmTer82rHi9N4njEiTnyn4fY4i6buFGvon3tHTvzco3cqdXEtmnjLVFTN9B5r62TTgoHqD34D9Hi",
  "key24": "2ukodjtDAKjBcfWLqrYnEMWm5PpmGJY8WncGtxDDCAwhf56eiaAa4WMmG56HVhNw2aXgbdQap8vk5qkTACvEZs6P",
  "key25": "4wrBk2qzd8eTJ4CLge4EjjHCiixDhVQdgHkwQqDFPDrNnGYqNk4w6QbXBLBuoShtu53jGgDZxDZgkARuEXL8UnyQ",
  "key26": "2P6Q3rAu9uNvbkAFoKGsGjbeQuPqDbVe1prAVrEVtSEjYqoBdXxsz5peeiTJkyTAj24eCQ95P98uik9jYpU4EmtV",
  "key27": "3thjnhBKqDccNYEJe6o3udQrcwaE6CeEQgBeCgvA11W7Zdb7gCoE1F5MBxebVNEmtekZQRHTpfuCySe8nFmcdhGC",
  "key28": "5cWuvgvewPLQEa7424kHpoGrVzDHUJgrDhFbe2mv6NKcCyj3fTRVpTsZFxnDANih5yEtB1YZm5LD3kk7gGetLDR3",
  "key29": "3PFzZDhe7hb5NquUDHMWdFWKVeB7b7nLffv8u4A95uQwXdudugaXzwLTEJwgM4RpfswRgcQfnUXd1a7eLSGGBBux",
  "key30": "61PTmpt5F3mkZC8KWPg4tcCbaDwQKJbLfwmJN5nKyNDdKN2WAWtHdZAkGmq98S4JFue8pB6NveJQ9SasrcmQ74vs",
  "key31": "2mQFXmCwHYTtG6MLWG2cUxw5PVr4koTsfys5fvSzFSnoUwjhqcdh8Js4EXBGkYpcRsFcHxRhwyHTNAD3HnYBRuwk",
  "key32": "5u4V5M2mhMbvL225MJyc4FeBmQmXuQ5eLvk3NCBBALuYA6qeR74tjCvJcbQoPTjA7ab6R1CxeLqsRqJGzhmASfby",
  "key33": "3GiJURf8PNS4dZzBdmtBMBNbqYwhFHjvR5aJNeQB4EZwW7eHEfjwiuTFNQSfXAEMqfP3pVJoyX1TnMiiv6GPUFDY",
  "key34": "33PdyyvWxy3pPgydCGh873Ar86Y8A6V6Psvqnjd76tp12TSM4JWCKWZGiDLZiak7qxsHEEcHWiZtHue843KN5j5i",
  "key35": "3L2koW5pcBQoyMzEWjjvveyisDZf72QjXxjHpcxNRzCzGzCjzva3HAZATc9VuzpaDRx9rPvYtbtH3VCrcMet8EZB",
  "key36": "4TMUVbTr9yx35F5A3G44G16Pcq3RJh6VV62PrqzJ2aUqxnCB4y2eJjZg4d9MJfte4gXBkmj7mAiYUdDvDHzHLELY",
  "key37": "2gbakSez32zZuwSJP9NUeQr2S461VpzWfxhdwHvqWRqtmyUcZoFDB3xMCWtHWxw7aE3v97MP2J8gHMtTuvJe3fqZ"
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
