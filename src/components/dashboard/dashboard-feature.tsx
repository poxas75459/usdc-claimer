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
    "4ie9dT33AVsP2oKkmaUpotv8kiKekDkrkbgHQPK3pUaK5P6qq2jmW5GHJEmkpSEDwJgctHFM4sMrtucyvH58MUsF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bjzh6kBjRxrH6pvRvVLjTYgoufvdeXghmVQak9k1aWxU5xrxKbytuSGPqK7jqwGoh4rqm5YAMdJfMzRbMwVNohX",
  "key1": "3cKxjZ2xxdbdCcYLBsfofZMb8QEGR7aeS4QYQnTV7RCAhbC8MYTKPouFBCNtqDCVTkR9ADPhDYR8WPmT69EqJKaV",
  "key2": "2hs46R8p1Urq3X8BDG7appTyjFeiQa6hfCQqYdLmUpGMn1tzjbyoB3NKvJZ3XLgh6vSsgvrMaYM9yzuUXTR6yS4M",
  "key3": "3aEh5kWtwaBbsHXHbhh4U4SFp4NANXPk8Ve6JLQ6PnuR9RDsZdKBmmcNx3W3uwk1r5WGsXRivMoj8oHSyNWciGzY",
  "key4": "51gCXZ7yLa7GWVoNCuznEk9tTC9YjwopZTQSXSirW8whjwjf4pX2WeW4hyEDtV7ZcTackhXbhK3E4Smc38xiXiKn",
  "key5": "3JNKMcZjtqPfmy1Q1uq3tUBHpu4H4V7Ef6ETuNgckLHhHGYjtJWgfmrUWDvWSUMa2A1BZzHJTaqmCJSFij8VDo1C",
  "key6": "41i5jDkaQzmghUP9fkznV5EMkdJQCvjPe9ZQkDws5Vd3wxN4GFhXx55uSm4LbVfXg138s2X89cgKNvgEUPSVJxC5",
  "key7": "utJZ1WGLtYG2XKvNgoAevKEGFQZE2ZWaPJQonLfrmAhpwPtabgHUsNo9pT36aJMCupT5N2xegGbsjEsQFBPUPWe",
  "key8": "qeXhBK3RgwPLprGwqQMBi6aacGkY27fpHEgqwTCXMWsohG8kHi1vBtToFg7cKVxXTmRbRZ218UghmnqJUL3CAx5",
  "key9": "56SpvuthUwriVXSWrokue1SYnBqt7gVHdnycjNCYLDXehK2tF7hDQaggCXm97NTgbS23q6CJGSPbZzgsKBrovBMs",
  "key10": "3gwh3EaiWk5gAidsEr5cms6KwwS633ntAR6YpqrSMWjCnkPLBrqtfHxMACgegEGjfdz8auoW9guW2m7PATedFveW",
  "key11": "4mtkpkf9Kca7PSJMqtqkr3pB2AtKqvk75pUiGVFKDssPGezhm1DhLiikTB9f8c6M4ZfmRdMNGBZZPEAbH3xsL36j",
  "key12": "46HoJq3Rt69xf36tVDZehRrTAqT63DwPhJBqW2ReBhKtKfyYuxBoio6AMMK71BCobEX2aE6M7bV1QG7hzQSjZncV",
  "key13": "4DgU2abxRLMHDPQhFg18Ybq1esEUxRwGTXowR71M1e4wXtgRKLaKheeFVsoN6jTGWM34BtFX1AtGF8qaav7cUub8",
  "key14": "3265fyvTbhCAVnT53XR9kNkcWiVSq3BgN8uoP1VYVh2VhPRpWMcWxQmHK7ppGdfqqzfRfbENk4gqK7nxzHjka1Po",
  "key15": "5k7pozLBYbe3KX2338y5C8vW4nKYkyEgepjiBS4RNCSt3H9WWkXArC2UQioju4zfc33QsajwRTgHGC1ed5AYM4zo",
  "key16": "5ZChyiAbtCxc4kvX9VqmacGiWhsAP6Ciwwwpt4jUUn3esTPSZYv81gmfQ18XS9uyzk7t3zo2M49fTy4tmh5X7CFU",
  "key17": "Jr7GeprqeKCNgyAmLYUpZxnrHZDZsKksspozCDhRKUwvRMHY2tkLrToCGzSXuPngh9iLAypyrPuaFKQorm7o755",
  "key18": "3csGrei6aBQjJrwSLin9hzMkpJTRyD5FgGWYWZPG4GVfw5wLYHnPL7YAQygbYVPsDBv9FyDTe5MXjSpyTo4GQ7bU",
  "key19": "4gZPELbFtvJJqxYkjXYzadMtfUR5yZMKmtRvMgDzDYAxqSrQGtzVQYS3C23d4teY3AKCJaMf5n6sjw4MVBk46Gu",
  "key20": "EhjBMvuk3y3ZqvXdKHPX1d4cAp5uDUC9CG82iMtUXC5MEWmZbY7tSUnTSQPzDyM2V62FCxgYwmWZWDRVnYNvwDz",
  "key21": "rgEF23gjbMMoVfH2pTA5ouLP5UXK2Se441msERxPguTaLUSQALYp8GL1WBEXxHkwketdLxu8UZYgPXnGNKcJVzQ",
  "key22": "5X1r9m8SaTGWnb4H1uuqtsDHbFwMs32biKbhHkCdMV2umHwJauNyMDrhbVSJ7QKcuywvpEWV56Hg57KfqsHhAL2i",
  "key23": "5cxMqisR4k3Ep5nKw234ax5C3X4uSsgRpyuLFqqR4UvdYEv2tMVS9kEwx647KxycdrmdhJK9Pn6xmieA4f32Tpod",
  "key24": "5B9uAhYYYZSQm33NkATSMf4WT1EDWT945aSiZ1jfh1mLEmZKF7XsxSFgf4tSHSUFQ3cYvbufC9mDAHnbHRj9YsG1",
  "key25": "3HdNgLSpTyEWwjczymgyRMgn3po7CFq9WbXPQks8dkNYqF3omkn5UTHp7FE1yGGYP1h5nbCGcotKfw3LDmefFscN",
  "key26": "2XWwSvvFnFmCxMKtoHEdzbngWQ5DWpPwNJGhHeA71vbCKxLCVDxcMYG3M9TE1m3CrHiuChAmYKMwYqnUwWTkQyXJ",
  "key27": "3NPu9douhTnyBhXsqed14DrqgRrFNCW44aH6ytYY9JGJMqM1FywwY3QEkTXJ8t7KKUzzDnCEXUSvnYqF5iqVkwGg",
  "key28": "366DHZyNRRFzreGNamotWqveX8pGpvTmRrgnWTQRKv2xMjc5ePiQcJ8mXMHB825szkzNCpAMbrFZZagwkTUeikCP",
  "key29": "2JtrKvuTALtTML45NTCgB5JBob7MHtuq7WvXdxedqBL5Uv8xaLpWmDi37qHXTUpHUQ22A7nCs7enn6P3vLC3vz5V",
  "key30": "32MJLZVuAdKNrAJmMFEz3djKoRf1VvdjUJnfKFfHRAxQEHqaEBxNTwb5jKcUaGp41QrBkVG4j8Ey5aoTuittE5C",
  "key31": "4rMTEaJQj7wXYyAV1ytKhfoVJPWjEbmKq1rchZQhmmcuL2KbfqWxYekMH7sxQZvhcjEncqjPbUK8jFoZMFLaG1xi",
  "key32": "3prVDuZGrhGU7oFovVkDtyNNLAdKKATrHDzssriCYCpyBBao3QgLCavvt4oEehZ6x27HJUtryrtXT1yF5KVZ2CEe",
  "key33": "5tD6UX5nQwbSbcr5CfKjroARARRCteCiQGCcNZ9NMVeU3CXbzqWN4yhfcLBoFBfJ77FVEdwHGikXyetfYJ6qFS38",
  "key34": "5XrEvYwbvvcs59wzKWhQQPua6cFd15znAe3Eo4fHNbbanHPnL9PNr89Lnk8MfCg7zwfDK457Z6pzzxiJh2bM1bjb",
  "key35": "36QEtJAc2WPDMRaky2ogyu1vpNAsVH2wWk5u37dxN1dL5fvcvbxzEqwMKJmnkTNNNtm6kikoca27JYQGWPFXrkbw"
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
