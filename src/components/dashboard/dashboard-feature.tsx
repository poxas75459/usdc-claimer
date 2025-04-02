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
    "2dswcnAjvxDXam6YwCnCeFM2mbdCGbE9TbEgz36K1GuF6tkaxE8hcgFB26To95fQuLz7KUYMB75QhixuXJtiTvkj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37JzVGa4ehMfn3GQWZpNJkBWza5KKSJhfSrkpA99v1sLDGzr4spfJJT2jU8ho7GoifhCMi6Wiz3YF7oT4Xhcsne4",
  "key1": "3pPgVRxfGXcatJmCZd1aaUttujeiC8VrEmTrevHpzE9sY4LvfCTq8bF2xywQeaeXrvRNdsafqwKRKunFENswePHq",
  "key2": "4siH3d4zoxCDYNLEP4cyRaP7aG2utoRURRGUcvojxkwK4odMZ3gH7KuSDf1D1cJQv9CnkccXQo3Rc3knp2yzxuD5",
  "key3": "4xHGNrbHy7ixpzZ1GA429gAh16Vv24KPLEqjCUTzzemF9FjMGyxPh7RDm81AhZmMVU8jEuNLqdz3Bt8fofvWNTtY",
  "key4": "2qCoRe9VMu3USdC7AUmfWwMgUcRLSpHrTVSDbfCZQSbskxvd882S2Kq2vW9h951azgU1f27d6fLiQtuJhXKGKAN5",
  "key5": "4kBSDMJUkg1QaA1PjsAd4mKkWH7cYBcbDwS4JKrrPt527FxWwjJW45qL1XC3bqdjfZY8Bak1TvD5DoDnTTLLAHve",
  "key6": "65jkQMYkUDNEAcLpJkVTVVF6MfPTZN7c85DmXob9xrieERQRLMYPpjT3vd4s24JvrWG6N5TKzjsyu93ND9zRGhA",
  "key7": "3DCj9shJeeJU4As1NHKfKBMYWWCAHYvh3ibdAp2SwwFd5UoXvNy3f6HezzEPycPzRy7QkqY1pnLPPv5cWpawzPvT",
  "key8": "24XZGXx1EUKMpJxzCkHCjgvqtqtrqJo3Q4pX2Es8pYxuXT57zTe519gEq32RtCUdMFGpXmwxuDA1S1oDuRGBPLCK",
  "key9": "3Jw35eMpuxg7iJtJg6PLyrgQZZo6eybwx4CWGpE6GhXXRht8SLCXgLSjZNAEhB2WsxyGsS92yhuZFow2qynHqnNM",
  "key10": "3tUoQwW2A3GkbJPEYLLDJB7QhGM4p2F8fK8T94DNzkdznajksZ5HHQBonNhRTXMmoped6fshrxctWctkTX7nLpSB",
  "key11": "4FLKtA1ZhZdQyTAFrukxoLWYQycC2dCyssRNHrJaUEsf4NKJ4wFuMzzLTKFc546iqUjaTjk377oBnqKT676MN9DF",
  "key12": "4qywNjTQF4GrUKbFBRdE7mSPCwt1ZwsumhF3295UGWWEMgPzTE1MWpDV8KzeeMXpiXzhMKSCDp2uxqTQ7f1VHsd",
  "key13": "3mhCy2aWpyNRKpfnyLBUjwVoUfJyFRQ5mWUWAtuWj8SJzeXaQAEGp6EsuV4WzPow5iswUv4HMPn8ENktt6hVnqVN",
  "key14": "5GXoWgCP78vs6FX2NhkBrJ8RxnzR17N6DRYxnfQoURNQBwqcdfe6o9kydHnMx8Gv8whSgiD5umVpYa5fYbuy3Xn9",
  "key15": "a67PCgvUoAKmXMWCcQjsgkiGtQi1yGSevgUrGg7Bw7C2R9iYuLk8dztttvydk6JcZaFVP9AqDS7dtR2TbJ1181u",
  "key16": "3Xb2yDK79qhDCADBX5GuwGj3W1AoFDmkYyKyX9YPG5ddtu2mkyMigYB5ot3MmBGeSx8q6JUshdCGtgudRqif8waL",
  "key17": "2631eGEDJY36WUTmUqxEekbeRqcc6GkpP9eHsiAK74v95coh3FoqvNbHHk8HzK2X7QD7Y9vuYb7kWoDBjawoBdt6",
  "key18": "53UgYJEEQ7EHafBbgbQ9HL6CHdS9nJ85Hg55FguSr56LVQo55HZ6CtyesJ5KYqDBBDWBSTBd3nqFjx62pKjGbwKG",
  "key19": "veDhtnj8pQkdPexMhvr64J5CLYKXeXgY6U5NgzYmk3BunxkKFaTb8Ed1Lw7RCRyL1jZvbAmXFAmcr6knZ545P6c",
  "key20": "27HvLgaqrqURbnCF6XBXgzMMf5CW37STnkW7yRFApJeKoenPHjHH33JgjQGc55tMsXAWXokLeNNKTtvuRky9t4Re",
  "key21": "5jnCrBtgPUXVjKyMa8bSTtFYHwi8w3pmyydvdhLwG2LAW8GfwtNiyohan1GTJCgBbgwkd39TdtyHyZgnNzYpH4sd",
  "key22": "5Y89htHZoLH9AhXUPfwJqzLn8ibwtn3eEMi8BXN1zjnevFpcZrN2HVPoU96Ky3hcP1jig3wB8QgMp5hVuibEPPf1",
  "key23": "5aPmp3i6HKy1zPB65FSL85B8qVjqxyj63k72x1ojKqwcVZUY2pC9bysdpUx7gbN61YH8HvLTHQVk3bMQhaHsz4s6",
  "key24": "58oh5ZLC7EDfq1ZJkCpTsfsmE7qoo2MwBVFwS93AqQvViVt9udqXbr96WQy8fd5ed779XQhVxHXmpoUNEqtDVXcG",
  "key25": "4rzZXPCFVQGf8q7FjHpP6pLgSBV3R7CEf8ciuiHQoDsHmxYVCxqYR1nZy7w1mgvmujMnFW1TSzmA7A4J53uki4Jg",
  "key26": "2P3cwvGPz93cuDD98UbKmk7xq6pgDRmwE9pGeJfPnBT8HrhQPjajzVPBM82f6sEgWHNBWAYCu2icgwyjP2BZ135a",
  "key27": "2ZYcTNep6FokASSD6b1mH1frEQFfkSB67L4okqu9xjKbUhSvoMuekQDuV4LRAXJNE9RkZXzeKFb6twfMX2guPdMJ",
  "key28": "4YBfSEbhqwBL45FREyYsL9zBPd6K8A4geW2TsTEFCKFot5eHjd1zdT8Y8s3w4DueNrTq2zRiQ28jCMQnYAs4DDaE",
  "key29": "UvZYpU2rwXDp7YraQgM2tTsypxU5kK56gZNKfDDm9nyveSbULYsktMRuaEW3PHebjwwBJxr8qbwT6QanBbAMAgT",
  "key30": "47mN6paTzNJkwLMwSN4tCnR2ZeT8uJmLd2ebLYwrPXYUhN6nLfkvj8Psr4dMPNxmRyeQWygnPMBQby6wLgA523xB",
  "key31": "eRjVW5sDNh1pD6tnuU1nikLZ6Yhva9qWfXQoSujtqMoLnshuL27sC3MoguPBHr8HsN7C5pywYUmS2Va6JD7W8jP",
  "key32": "49RQdbDhyWScDm42Qrh7c5QudSz3HTQ3nVbv2YnVq5MvSVc1z748QDmhKkruVcNaCFUM3wihCLKCuSN52CuinfaM",
  "key33": "218VnxcRaiHntWquzR9j1LcUc6twWS3bjE6e9Ztj7QyC7ZzSVC9iPAnXMgfyRjNpfYQVwGLDDTEzM88kHmWwB5rT",
  "key34": "3vvib7W7AWQCGP4CU9DgtUH9t8K3SsSkCp3yHeuZSR9XgC9XQJUtmSjaKSkX62Ke5bMS2Hddfai3ZbG2sJTUA1d1",
  "key35": "3Hr7VP5cLw6cK39dUMbh8c6KjV99XXtNqqheYQtjEStcn5AzbXJWVoxMweRR7k6gMRqzuzrExiqp4YfJCJRpmbhp",
  "key36": "5zfQqCbE1uDoaaGGo5uxrNftAL6Kc6bbKqmKN1PjSFEVEsNdj78NgAqreMojG4nJtRRCHdxLQZt3LFg6prj67ZS",
  "key37": "3UwV55awQuXNGCgyASRApj1FJXQSxGZWqXCJcjpcVrY1pBbK8trsKsn9242YUXfGhDg773qp6f9kdfe32oFK6FiT",
  "key38": "4b1VeMvL5duphkug115uuRk3SBrBUQksSuAsXUeU2HVpwe3qmkFkqC9TRfMYG5yzQ61S6WUXAvKSKTmyaskKNrvJ",
  "key39": "5GYjYRJADTDy7CEvDggu3Ku7s3cEgzVMwAXEaV4Bbgc8NLZiEjFBPoasKBh8V6UxkGRFh7YQrpsvkov19vNW27qL",
  "key40": "5pmeYq34iF3g3RH6CX7avwhW3VGaiFKvXyd97ho2FLAoXAfccz9YwSCHXz4SiKoQsTSBp9zBPMvwMiJEp8nY2uzM",
  "key41": "5rGwp3nK311gv7HivM1T1Qd2qMTLN24fGofNdFR8Xqenej6u46YRVXKwbkuYkErN5CiZrzEHkoD52UDZ497gfiB1",
  "key42": "4o6P5XoWUAuBdMy1gBvrp3pWNUiMa56VRvE7Cad4kSKdcth2tjLxX1VhcNkBamx1EqzsY4pwSy3r8JWAoY3qKjrC",
  "key43": "2jPtYn7E3n2fGaKuaqCbcs32dKVh7KnxUistR5maHT1jatnfKPqBAzjpc5JHqU3ZVz526ept7wXsZ8Dn4QKwb3Pn",
  "key44": "3Q6cn16Q6PmmAtWpiMiFBPNZ9JXZo1KXhEs82sjRK6FWcBGiD9SN7eh7gHjBH7tgweUvt1yMFftEJaVG3tgj3J1b"
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
