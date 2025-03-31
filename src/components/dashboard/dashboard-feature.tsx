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
    "3cdsxqLCMFaXGzzkRNs8oSZrA246dAeruHwigd3Y5PB2r3mUXbC6onLACHoaMh7qiUo9U2zTxZu1FkEKY8VchoZp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mNBsYzaqLJqrAhNXo68ZcQfudGHV9WKwxBwJ7PBQQhYWtSoZrVWoduD2T9YdBF25vS1xEnXadHmyw7qyKxi5cHL",
  "key1": "5XAQ9jy3MhPCkxdia78jXsJBQ76ZhgHT9ynwkgHThjECaMVjaixTdy9GwL255F43kqRQexcBB2soLXC7zKE2btSd",
  "key2": "4BJA9qu79YrwKJPYfjA1umLVKPVUWRFuNhYAiUGx7jQdnEVg347Bxr59ZF3AKBo5iDtfDPDuseoAVFtBiqDXEGvE",
  "key3": "AR8SrPtEwiALLvLuguVwnquwBwu7SpoMRqCjh2KZNVcLhHZp81VUiaPNSjnjjPbrXFonq37g49RzBiNNWnhxyos",
  "key4": "48exUGRLxauCZzEHC4jRfmaSbQodYBThKHPApGAX1ysrTRXjWHonSeoY21ToHjKT86LHVuiaiDCAuQcUGbQgVbaN",
  "key5": "3RpSCbEy2oaa1aBP5hmScfjB4HFSmqRyYcUuKfRoy1bWeE8FuVoFQmzqnT4TYCo4vD6DGSxPN5cL8xNVZNob9QAt",
  "key6": "4m5x6TFQx7Ji2kPfXGVz5foVqosH17htsinqtEujBWWC8jxCh6yiFQ9uxmHdNEd86d17b3dhVGrG288rNaKk7BTo",
  "key7": "4TjRoSRrtWfLLzEWqLSDDsKWgHbpqWEGZ1N44PCgoFyiLo5njnYNKS9rG1x9A1T3VHMBGaXqZU6Yz5pQzhu1WMPJ",
  "key8": "54FKXhcQLqLFnJvHwhWN6Z7LrZEyaLxomqzLQ92ZkehPSgxYx6i7A1jC5Ujb92LeVMtzx3gJXczXQYv924Y1PoZK",
  "key9": "3EtCHTz8TSqyVwa6gSqgT1bPYGGsGMQo93yBmyNxni1puNaE4oA55SC4NHbY3SdFbZd7FHRicjUWbwePXpMiHPoF",
  "key10": "3G1iXkDVZXw8axd7QYSEMH3VjasxsWrZ77KDNpUZbo5hBHib8fCSuHGZKs7X2GkrnEMaMrNzJ6nkYpoksdV1JZjq",
  "key11": "2V4CyYo5NnH8RsCp6aqa1hLiocwGX2Thrfgf7EDnwZoE8rKw9URKutAcC7vouebYzrh6B9q5nJoEtpRyQqVCHHTR",
  "key12": "4Eq6jvu3CRcMKcnhmrNW839wi4aUSEAJ4AnC9Yz49iEBiEpVm4GzPQ85XrLXthbMxikPYBdReq2Ua8Twz1d4xdad",
  "key13": "53bJZzuggaGEpCMpCDfEMxNhCyp8H6gznKdWHWbczGtbo9QTeN9xXNncpLUR2PHHUKJGqH3Atm5DSRP4YPry9VqN",
  "key14": "2aZhaSKRyCcqeaur8PPhDX9giWfFuHbCsv44A3P6diywrBUZk9zkiaJnwfrjExMdi8anHpQKdPLRUGjbvZ1BRR7S",
  "key15": "35MbjLpbGG9nfBUQwJfQop6Kf7RehwvHwVxgPTvHChh3GuczKbuUmu9neCo8caEMDdutoibCJaRf7TjzhLf5giQ2",
  "key16": "4TSH3wWvmrWhmEFqYgya3j4wNgh3yZJpWeGmYexKXkYL7yFwNDXtvqjpkemwkkEGTj91KD88dXSK9MjtLGeK874r",
  "key17": "49ocFfW62maVFNTJQmHpEzWEBLhPkjG5fwcFqa8La2nxYybRSgmy4YxmqojgVSVBzcLvCqxwsGFZP6TPDu3umVt9",
  "key18": "4X3Tj4zHCztzjMs68M8SJEa85jnYYBrrZ4pqAS9BgupciehCLimQCnDcvevFEZpb1Ri7EXKV26m4YECfhXi55kqR",
  "key19": "DVsRHaPFT9DzYiQKgRspgjSnW1ruXq9tAFp8URMc9syv4GvhbSQxvE3kDdccmfJoHMX3TBwYoptb6oyN1MNFin5",
  "key20": "5F21Bn3P5kWbdaSXAhtKDhfMQDxwt5nk6fm6RpFGyiYtdvQPfGbJJLu8beffc3tJNW2q8RqHnkq9D3gLeyFunxM4",
  "key21": "4jDG8JLm1GMgcKPZbn9s1ivDFrnHwHyHASmAxMPnTVMEp2oWRqeeQwVSUiyCxamtQ924uLATsyiqSHu2zFMCnyLX",
  "key22": "5Yh2UP2HN1mw64UJUYhU264H2fAZ9w8VRGaVUxSpSXPg7zE2LKQEftgrLBXrJqa2Zq6TzmjBpj5Y4cfr6uvQWtNp",
  "key23": "3UwtGyMBvjXrHN8rghDi5PR4jJkRDKhTH6RTAATwHXKFjwXRP7FH137y2ceuzUbcAcUZhy5o8vmUi4Q33XSePREf",
  "key24": "XhEP1rEJ4RSMzQCNEBkacAkmMUkyD3TfT4bRM63hJFNmfJjTiT5yH5iwpdDG3TPxJrstNE366EMxP4e8uQ8SZgk",
  "key25": "5r2wodvm7QeSh86EKMdZP7dZtsmqZn2eEY4cLtTKyJWidHuLd739GcyiyFSLUtQxXVbkgmRZMrc21jYtpsEn3epN",
  "key26": "3uYLcy3DGLD22HcvEHicvavFBjW1S6MVo9QLs714dru39JcNQenqUA6uGbATZZswkWAq2zbMQVvUHCDb4zSHzsUg",
  "key27": "5LueLSQ7bmNGxB3fxXyp5S3etMwaVyEHLT8DYE9DV4MNhV97H8Zn6WVuiP3SFzpkttkSGfE9K3STqu4j47SpZDxx",
  "key28": "3pASbaGq8Hy7DWLBpFCGpJv4oVfTxiwfvkLwSq874Xk8EfgyNvYtTi4PmMxizx7QCS2iQvy9ZMg74oKoPLUPdaV8",
  "key29": "4hMYwADGBe4eWuWgWRnJGRmhgjZwhVpCGy6NdgWLNhwtUHaKZv8Z4Hv9vRp3mHX56WT1TDJrMMRrnV7juFir1UxE",
  "key30": "5ZFYGjNxTmfp1MWJafURceiSvyFCAPb5RQG5noQDrLEkg7XUjCbVqsTa5srUjrthj7Ec4qEwFe9jNDkbKPw2i91i",
  "key31": "3aqdkeTgfMRJ4F6KTuUrvPRhe7qsBg3bzFuJuT7rP419YU8qiUVvU4xaTjrkck9tmg9ZnGWxb2pYmVLVfPuzj7xS",
  "key32": "2mJGNxywFKhcPGXciLzzawu4iWiM9mzghrEVfGzz4uZuYFUKrdKjQyPjHyJFjX67tUt6DwZKMsCMNZPQrLSPGfMS",
  "key33": "5HRqVKjp85V7ARHPhbCgkbbUSv9y1Exzj9iepYRPL5v68uhqDaCYDEdkfiFHfXCvCaTF9PFXqYNxbWM7eCQLk8G3",
  "key34": "ysADvBdXVH3cqFTWNicTjbBzjGFXSWgbRvoPhNiqYD6jXCSVwBaoRz7d8xbxnGtf4g4mWdE2HaDXjQhbUCA6ixJ",
  "key35": "2ZYvbXc3eVofRdUNJWggSk28hc8gbYRSaUp7NTX64sZzWJzoCvtvVsVoaYTYaPjtTSeQPhKRvTty3feNWugVN2Qs",
  "key36": "MCSJWn1a6yKP8MPVL1JujuVM6vZchwfmyV43o1JAuvih8FFsqqtcu3fusm7z4END5XuSfvomtmwdiXu66YwKgZE",
  "key37": "3kDJqj9McWDPkM3VVMn8kLDHmBVe1FuBTo9FszP513V9Z6VnmWaHrbxwJZrazW351gridgJwyRQQev7Jdf5jCMdT",
  "key38": "56fCCMipFJEFwALj3mdMdxMLtgg77DLL5FzRpkcdVYgZ4BByTwPJQWgFWnqX8GZqXDkfsGohmGEBYiSGVunRmeYb",
  "key39": "2iXSes9E2q5gF4RXEqAV8xenthPRoF3hAJadNjPmKUPBEZ2gfJySEBuEUjYNMpd1i313VuBwJ6goHKzKDCta9kNg"
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
