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
    "2U3xmj2Yy7cfWmQNvDQgD8vXt4nS8otP4DpSuKePJj7fanKLza5EMtkxibbdTZ4g4VHFW3PXe4gCe4bfohwkHbev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vA4okhLdmdqdk1mFBs731x4uYB6G5TbKaMB3MpwbJ6ETVrafiGL95DK2iS57ykG1hueGea6wCb9GWkDLpA1ibbo",
  "key1": "2BYcAeVao6k3yQst5mkYaqw1DWGPXJwz4unwN1oi7ZTfijdciUX9iDeL8CLzeFkJgszZaLmchsrP3fAVnNw8sYnZ",
  "key2": "3uh9A5CHGTMfqvv7tSD6qLnsENeoCQmxiSxB976mNr63RXT2Z2JJPWa9qTsyQiRuJvzs915eLtskDkq8Q7aTw6pS",
  "key3": "3UDfyQyXwRYUqJMuKuXaasJd7rj9axsNMjirV6fDKx8gYS8jgSNPiHu6LVRUK6dP3MaK5qmUqAzRRxL1FXKe7mnU",
  "key4": "5HU3acnVtaU7saQuVBuAS6RUYX6MHm4Z2HZWXBSF9nvnh8FoFyMx79V7SCX5kg2HsZuQQqUR3QW3CyDYPbSctyTQ",
  "key5": "4RaAJGWPbtD8pKE9uuMGuBzKRey7V3XD5CHgSXBsbZ1KcJeXkT4CJkaGn2LCc3GcWpDv8eqxR1cgfE8QHER1QZWq",
  "key6": "4VLq1bGcxCmpyhr9WNeMjwG3voo6EoAENN9wVJrmYyfARgUN7MYj4b4Y6v7fideQeBQ8nxLe4Ped9Xhj4ooeHw1x",
  "key7": "CLDKUinzeiExkhjAarNHYA7cr9G5v6R7hwdA2XVsS3excnsAsjzjMmYJUS1tf6tMoqdibJnNAYvjeibuap5FUCi",
  "key8": "3rMhnD2EKmL18DGFihzv5BhufMPphm8K1Cwc7gmpyFg8ow2BU5VEbvPiaKxMnPyyMZEZDfu8zDzo8YpAtAnfUQ8P",
  "key9": "2hr36EMBERsgnSHHqe3sSYBLQWYcKPTd4N6Zac9Z4Sidg8Tk2cgEAVDsuxdChPyCbcPwdB2hv4mpwVx5REvSAuXe",
  "key10": "2518fodQsbU7uEZRxcSMyu3XFUvU7M5iVgAoLA694rFaDpmS7EN7qHExcX1okDivGM3axNsPJUPDMZJ9ssABSP77",
  "key11": "CDCskYJFGF57h4Y5wbeYzvSsDLF3T9KTJD24QQtSBAUBTTcPoXHTtNxZcRX4jK2DdpYqzwiJaFiQSeZn4ej2f38",
  "key12": "2kciHdnSkhFgpGzJjc7egMY7EiWsjsHfwSQ24hDAv69meRNCo9gpUosoGbxtJ5rTztsGRRjpzLLLGNk4nUn1ZSkx",
  "key13": "x8M9hfteWBw3s5dmTS31z9puRBoKgkLbhxGDY766FdtjsMv19xiEPbfzW8iFcPMyPcZ1UHZtn1Xy8pBJHi2nSfV",
  "key14": "5rRbK3iGQC53nHAr5YVgKmvDm1f6b5N66dC1RtQYBejNSHYKHp1eA2BddwZ9EnqRZHAQJFZcABnob6AxSDgin35E",
  "key15": "2ZJdFiDte1WRoVgF5obK1naFxAiRvyEPBASsTykKLrFTmLf6qb6dMzyhFTgfiEvMd91hoAMZ1grom5ErewHKpGKU",
  "key16": "5Wv5SjFEFPjtrtgNDbeFKe6sK5RojvRTfuADF29a1SthcsZiyg3hBTyJXAJFYG8sR9kBvzu8ACrrwz72NzwV6cHm",
  "key17": "vXy7m79rKoqKBFEg2mHbTXb3u6mTftkv5zvzAzetWbyXzNo8sq333hWiXEhqcL4zcxxrTD7vewQSMgvdqKJGd1R",
  "key18": "Gh6hRp6Z3ti5tYDa2AnHkji5Lo9QVPprchL7PyA3nco2KZJqYXZsfaDy2sFCKuRCepXyPzBT6PpqdsgoSujB2T3",
  "key19": "2iQcbDgV3MW3k6dKCJbck3nuSkqzyHhJ8cGmroLdLgvv61XDhsEAfc18K6TpMKLegPF5Mx9e2CCDHziEHdpUyBvJ",
  "key20": "49QTPmARX9Vf3MuThYdp5BbUjKZNodPUvPycGwcY5SyFSqYVB3a317P6LRRfRcxi1Es4uempCKshfoPkoZMG2mtj",
  "key21": "Rqozua4h7P7YHqvkwvoYyEN8HGwVCHRvAwHpSvDSf85zb3Skpx3GrrPpattC52MBHeSqRZnnu1ug9a69oZvj32Q",
  "key22": "w14NseNwxJV2r26v2QfCuTBgMj8ykAbeiMvVf7tyJW9doZxxipGkxpYVn2PaAhau7WkHK22aiFz8yKZxjgux6Xn",
  "key23": "Dc5KxuczBtwiiv8ueCZqzxCdWGvu4D6TEarYAqWQtkQw6rxVxU6zK6Zs7xMABsDTizWH6s1yqgLMrcDR9Kr9ihU",
  "key24": "5n7MnhJcqDE8bWXPceVqjxbfxD5vKmfVUVvUyrxuLiSG6nTa9KgWrqP9LFqLv5Cus3AEwsX48KW4GkiDhHm6Gujp",
  "key25": "521LiRxCJrCuZi8CUHEmVEQ8EVDbEZWoqjwsxETpgf9qhEaC7rG4XvEiHtRJKGKUb7DQWGpNdmBwR1sqqostRwDP",
  "key26": "jrQkXM4wKWnVm9rijNvdgEn6SjEqQXvh85YSoyPZp6HM4muUn5X1qQB38KLqZJvnU7vGrCF1HbDV9pZ32emu4Wo",
  "key27": "cgaFDZjp4sEYK3XTwY1NLkduxP2NMjuqvVbpG42BERWuA6GptxcSmPquuqTT5d9tqH7tCFYrD2y89E19yYmRdQp",
  "key28": "54DfVbo96VKWLUfoGn4DhhnGf4Swg5aeJkYuneLs1wMjpuqQi8JGn77iQ56hXaWLRv1QsHVEWX2LMCfzgb9igbid",
  "key29": "4UwA3M42JofioKg9Mizm8EH7h4QjCysomN4udN8UJ7nKvi6JT2uWKM4CretSaw8Q35UjCWptbQax3oCkFMG8MsXz",
  "key30": "2uJ16xvRVCBBCyrp5wAaWycxkWg3G6WZetud8WMLST2UVqXevVbCHJMSqGndE3EghyUMxpADh9iJm34ucKWuNsJQ",
  "key31": "kP5W4Nf3nGGnaYmJGJBu9vyy5DUy7wgJ2VgBrPCBkC3m6m8gtTtxuGR5H2ppbGDdwh3YGHK2M44tAaywrzeMvBi"
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
