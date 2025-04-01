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
    "3oQS8d1ZFzwTkP1B95uk5PCwg3ptokAqCXkDWMRoF4hsP6WDJEXmVpQjexCmdScvmvMDNnTJRzbfcUbSCog39Ndw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63NP1knEAjPJQggt81KxMmmbJzmATs26xrT4GhhpuRc82EfaEzWk7w1Y1D2fSwJ99ZyBY76sCCqGa5Czs8P51RKs",
  "key1": "2gFV73jmw48tJ3EnokFK96AB6uPMPHdGLSdQKVbpcZo1DDNvS4ggaytfhFNEAe9PxjgpEg9SPHGWR5QBoZxEwu1R",
  "key2": "3QYpnu8iBgzZwCoVTZNydErNMfvsaq3bBcgYBTCEC6i3F4xcmiL2ttdQvAMwoYoLd6N8ngRn3NcNWUBSJK2jXnQQ",
  "key3": "4jSY4NFd6wixzBEj4mHoWXj41XY4hCwdPSceAzs7N1EuV5Ubv7yML3QQU88MhvzLYjm4EV49EkcP7hfU9GpLXpJM",
  "key4": "tEtSb45YUFSQctHd1qKg8Kua21jSELxhBZWeQeNYY2A5QxcHHZiKUgrX9NaZareTEnA3Tiq2wS2sncq7QXcSW51",
  "key5": "22eM6KNeosbQyV15K56vqXiNG2CeFHYjtw4dnyg3wvs1RyFo1oNQYWwPt8iFBHL62NWqJmRdyUZKEMLERC8XVCJp",
  "key6": "ToLpLm8xD2Y8c9vCGCPuUr9ENWxKZjEQLqhQbpwDzMkGKxt4FJot6jcdu1sb15f7ehYiuahJEjDn4chn1PXNJ9K",
  "key7": "3DP2nKAhTKivxZNBBJHgB51eAC3EFw6FDMzXQQRyE6TJXYKr2PXA4u9ew6fdxJjNLfv44oRETuiPAnWHENPvmnmp",
  "key8": "3TufMaTwzLKUyWmpLEC8GPHxDkabLBWkCvedHjnCeXusnq3aSTsZa7HYSHVPPnZZT4YtEdqfXb3vC9FWCunWiGzY",
  "key9": "48Pk1Smh8NjBhSZhGW8Lgsomy3ZaqnZWBWFPcRiymDbEKQjJ3ZUDd5NU2EM2Rmqgn61iVFTicBFySYMhbo7BsgdV",
  "key10": "3kNs7wwZiUUahZ2WKs5F38NqfmVMunabBLrSndiPxQVTcMTT5kr4qzKys6E94j6atJWQaKc9TLvWCFSZ6tpvFhQh",
  "key11": "4EBCjLuiSFR59Ke9aGG3g4G2KLP2uwbwJ8yKjMAg9t38E9gS4EZNJY1f9W88UVTWHjVzskQPr5T4JBS9eEragZtQ",
  "key12": "3cmiH5dXbFWvNmoKzCKa2S6Pfqf1xdQqECiG23WiR9KJVVniWURJXhxsumzoHc8sKYRoiJcC9RsX884AQbiqyp4X",
  "key13": "4hvyrE6kSVT1XDdpS1N7MwUJrWHsD9HMqZAFhvjpW4SVYqxiKHczoHhhf57hkz172zZZbokbjGFBC6sm81N8Z5yo",
  "key14": "3NBiSfezyCBCyL6wDXALPJhJfrKZhujZibcFKS1FEd5uAs8y3Kpdyo7XyML9Zi4KGpo1umQr6i5S2yQWAvth6kgn",
  "key15": "umMZxj8dV4SAdY2DjoZwFgHeKWYrXoCZ9tEhQCTtMDy2UYxD5CSqYd7EEroLdmoft87bXRdJQfC7iw1qLScr8X7",
  "key16": "RtKe3fJStUzeJ6WYEYRszr32hqKNbjFKWNuVWNBh21JWYLQhUsrt4VVYeVfDu449FDAmN4ekAc1u6tJi3Sg3MA9",
  "key17": "2Wu7d4UEhyrZxH9zqXCNPi7x8WjsebmTSgFBeYgGatZoW3Hq28NRx8RdxAV89eLPMjHbhN4USpmDHwbZCBSQAXZ9",
  "key18": "7XQWh7aqEnEt7EZ9ErnAZTSE8ymnxexDCokqxfX7mbdYkyXHgwLZ1EM9U2Yh3skXhZRxNLodB7dQDHFzzCZd928",
  "key19": "56reAjn317LSiNe1mY3SJpnQbJDBun226RkhzLAE5tFCJRh25pxH4qsWP7XMWvQT9NgfdKbS9HPCrHsRaAU5gQEx",
  "key20": "2fQBj87xE1fD2WMG4tL4aPyBtsUBmVCwRLiPkKJhPb8wDDLnUkGyCvm9MUaUmVL17LqXPGmVatUrpZrBxihunuaG",
  "key21": "3urYY4Hxcg7waXubHYdwXCZ1jE5Lsp3iUdAwMMceGPrfiePUnw9FtNBsuHeqUYsJkMz2nHeg5h9tCLZc8X5fPKKS",
  "key22": "48wzfjM6jCwpBXDqM6AP5wp3Ude3cg85rNThL12TWnxvZ927HnyFs5kjiheHrmYozQ3niW9pXQVjzcdirgbvj1J4",
  "key23": "5LhrHHM5wjuVE7cK3ryvzMh2XDzXczhRJXX8wQDvmVjTv2ErSaPjUUKKYfruZeGJrNZMTy4MuTtuKpahpHaSAbRU",
  "key24": "4hZh9eByuz5CmgJMGvR4LKNbcs8sxHe1JRGJgKBTxSTiUcymdjMMFmvafiNZhknvC3CtJESrEba5ughCgnxrTzw4",
  "key25": "2wGXMfJkzV14aDTMKwjR6iP4mjuuKewYtz56srnwvUDExdvMryq5MxHRbr4YSLyp3RtFeovFLXtjR3YiJHP6VoFs",
  "key26": "27ZHKTCBgcYrmn3FTESV4dEANk5norA9FFd3a1bYnVWKYXeNfRW6PPTh7BsXgX8DgFpqDrLrGZhNBw4DkmLbhuvL",
  "key27": "3L2zgwGFpx7C23XgDKeiBzoqe1KiMQm4DUieYnNc4iYVi2y2DbozEgUcxP9duJVK7jTcMLsyobKLDpt5v7dWm7Xs"
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
