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
    "3534j9i8cHo4vjXvgQqfjqPKYBhorL5Nr4xArGBtgBHrfK6b74DEMmRtsyuKT74hvGZxhuQkJYNXFJqXybtsZqXe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63mC8rn73JFKafywkCaXZQFMCMjihFkWe8sBzY7MwvEockFayJiKPcTNgesqn1G8VjZvsJsjkqfVwzP8PaNyBPi",
  "key1": "CtnjYiaPNJkpZpwzctZmXuskBttgbTTVCwsRNknXZJSitJfixQWNaq8r8R95Vd2af9yRH1z5LqVSNBCLKUy7Ncx",
  "key2": "3LDoZTfCNBt9ufLqSU9eC48fZWKnD13Uy6TorEVU54XiF9NHqd5AXqdHtH98auWLC5LLmusoMF5pHdJfJezhBAx4",
  "key3": "4cJQUpVtvW8et7wUrq35SJWRyddFp2yTbHDgAT2LDHfDVzAvigHayZg8cjGXon7w1qq9uDY7CA554oJ7XkaryZnC",
  "key4": "585c7WD8bXw6mjn9ReMTDBiZcezbskVwJCuTATKWk6v4VoX9M9YP72CujLDmu5B7ME6ZazUP7ii6xjt6DjMBVPTZ",
  "key5": "966GhmM85crh7nn5Ab9jEjMrZ8chqB8Y8N2rPNhkAnrEqvSfBkVbJLm8wMaNiiDinJ3mdbhFk487Q7cvnsnEpju",
  "key6": "m4z2HszJgL5qaFuZsumSPhhFzijccxgECeszPQAqZh9Jjnh9JcM2Ve78riVJUu5L3FBG7UcQd64e2NAjjj1r4TM",
  "key7": "cpcDHG9Higoz3xzGUkD85Y5BY5oaok3rwvRfHqHVDbF8Jp1P3hF22H5CtvDQCgPb6ksKhJrPeeCWNAqwDB9icYJ",
  "key8": "58eABq2NSrrpNurM4cNsejNhyy45T1PskhnUxjJSUXEeCpD2GZUHChXAHqGuBZ28VW1LoN9X3Yyx11fMSWaTptUE",
  "key9": "2EFPeCPKYqMsReryDpmuvGG3DHLsRzxiHjemhtznWYQvwwH8j8xpZgfaBCwd9g3UcaKQ8nrxrWJDCcxnKRpyPBPm",
  "key10": "NHhwPs6dYb4WTjaeaUwVWzQXy1RK3pXM6A6ZRMyPeYLHEr97mvyaSdrdjPoyUQzJe967CPvvokzDJ6cwCdGcPxu",
  "key11": "5MBhbiMAkrLz47cAr4RuQTvufxojgxW8JLqrNm3ZTg8jXJUkDX5hFhEofPDPWWUsdjo7qg2V1KzaFYBNFRtpfP5X",
  "key12": "3UJiqNmbYxHSnX3F4jm5pvSD6eVB3E8JTEKwgAGYgiWM69Mu6gZp4PSBKKssgee2mkJYgCfYdZnvBueJGF4dyr7r",
  "key13": "3TEPGLU8ntqjPmiezb8hUaVPUVP6Kmn6C8gXnnGft5fvsKq8NkiK5Y2XXNxKmkNXvALJrsRn7oMaTxozhG3VFJ21",
  "key14": "3zgeiWERdWkcXYRNZfSa4qEqjtNarKhp2xS6E8c7XHNjQjYZT16wHrXwRKTNQEhzryVYdx7YtBnHnHNMLaYm5A6W",
  "key15": "63KVnQgPaFKiEVih8KQPgYDBP4vJVr5iCg8pyMjjx1MFrRT9KGZXiHEpFCiXjLDvAdNTJ7N9xgh89NYsLx8BBUyF",
  "key16": "3zY46zr74ncFD3hSRiyzYfwTEhSM3Wgrr4o2WwgAN6gvDQpmwSPJ4G5dzs1MR433WLNJg9o5Wb7sjzUNpoDix6KR",
  "key17": "4svtgQNbLfJzqjxVvZ5zQ89hd2BMNXJwLgd8DYv3H1VLJsmPSiSipp51XZgq4Ho9kt83xgnuQ5raxWSeE1f86abJ",
  "key18": "2Fc69A7gNvbhLxvQMXeJDt5hv3tV5oUhX5Zxgw6gssg6vVFeQhEhRwS6678xuCBEsLcgAPBerBXPAEdeFLs6ePQn",
  "key19": "4kYRVPt99aeuEMnHhCDdCQuUPsV2cAE5B4VaNwopYEVzBW4ZTxxCm584sHiL2HgE9BsBedBNxYrytA8WMNKyXFLU",
  "key20": "3FtGAUXmmZrae3xYA3s542FyjLy6HcuczNKfm1vCaKH2QEGzYGe4VbetPr5Ps47gaRhgKWck8iorm3k3bo6vYZ2G",
  "key21": "j2w4q4K8JNBWLvqmLBkau8QrikEbK8nSV3J6Vb8ZaKNSwNouFuKN3SsbdCP8uGRK9yxDDSCj34bSdtjwzSk8wp6",
  "key22": "ateVTVFBQgKzDqXFCjwmE4LmeggLcmZq97iQhV9sQJ4n2qMVucfcHL2W3dAUKNjs7eL9GQVRBJiQfCGpLbdNvPn",
  "key23": "5CJCz7XFXHmuDwDnWizqX65b8ziMFz1xF3nUxvzHyKZRELbJfqzG5rPMtJGgttT66RC6TJvPFCyrwqrQ3jbJky3B",
  "key24": "2y8kkuRuwaZUQkm2HwFsApirFhR3JQbAaJ2HKHKRQhWhMshLNSGhF7gbnxcmLWP9WHL6Qe6eSRRabbP3xaJEUfxx",
  "key25": "2dMDxYsdw4gYrmUuWiFWsUrXf6ruXe7R7L1bFn1gj8m9nruwbzysVHpMaDEojLSTEs9WnPrX1hyqtMxfPtvbiFaw",
  "key26": "4JzjygicqHuEGTeBLBR5QY75MEh4p38aXwh6MFdQi8qANJE7NUHX4pz1qa6NcomhFZbD9krvkEUBVE6VxaNwfbEF",
  "key27": "2VSqLNovQVc6EBgEUjofCkpsJKjwbPJnUa5mY7Rj3iVGUC1LWupGyyau9MJyEidAgn8V3yyThPF6u4f15q9MHjFM",
  "key28": "42LoALeEApAg1ySY62wyk3X9K2rp5vrRd3SQkdENpQpLFMXHkJtymMPPSqUZzbj1LB8HXYzqKW7WTS9zxJrk946t",
  "key29": "puDNFHDS9Vfp25PmJtohQnjw7YxEUqZNMx8axQ2g2UARWLzm8ftSTb9564orpJdcHBgK38KkBgYev3obev3GBV9"
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
