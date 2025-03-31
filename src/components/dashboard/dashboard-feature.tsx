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
    "4Chki9sffmTQXFcW1ymomx9AD6FEWPcKo5Z6H2iSN7oK7wJdYRdTTp7pmAJGNBVeQxyievyKhiBohNa2Ec51cUKu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w4vcHdXcHQRCzpjFffxDnJ6htU1xzrVK3gTmhCxoFMFaQxcfKTEbMyNxWAgipAVJokf694xwmEQEd5vrMpmg7xi",
  "key1": "32NGfoz3bCTPqgLP6fZB7YVBSUSXKKiYexLHGC6ri8kHkozTK1VV4GupNXFvKpg4AgaS3VNXhLppugu9uVcvxqaJ",
  "key2": "gVvCxZzsRmyUnWLoib2jw2bsvqATv1qxsCyMiFc2E9xjTvmCri81QmQ1g7xrQSRMrGrJRQ1GmF4MKWoRwCzfG6V",
  "key3": "wEGaNt6nEvwVMka2EAQMkskFcywUPoSwxinJyPgUbW66t7RNVV56XCpVDtYHJckysnvSGBS2WaXaeNPXjQj5HPn",
  "key4": "2wHPL9d9N7gUeWvivuscw36kgGt69jjdMCTFZPHog3Xd9xRY8ZzAFpqqPKGkwozv6hLmNu6EYMKMh9xfL9RhBvZE",
  "key5": "QpZBvYsbiYbsxFERALpckDrqKsVMxbLiconobrHgzrxmNYXVxrwijBLPNjDTzTz2ePtBNCwnrXHtJiFbn455rsc",
  "key6": "4Nc5L2Rc7awHChYQzBErFUgqtkSsJNvWsFZNGeaFSBbUBJtQRYASWRtQruzUpUN8ZnfNiBYRU2ARz4M2haypB4Lz",
  "key7": "3tJC2Jy56z4yGAHgF9DtcJf4VGSzyeyag23EJEc9M1RRTGZHSceuxK46HtLQfV9AShfPTtKY4Q1M3YuQ1kjLHpPY",
  "key8": "56yYTYHSBXBoEPAtaKtEuHdBiWTyzBNmg3UmqubTTEAbRq6RKAuaWwmmdF5R73NFPiy4ojgv3Rc8VUwXkPi3U7sx",
  "key9": "txe2bN3EMiK7vSbiDWcpv2E92KePuqRawDoXAuA2e84Hi1YCAKTT7Va4MF8J4UFfyXiivgCLgU75Km41amcKohg",
  "key10": "JqQjsTr9FrG9DRruFHog8ibqVYWmxxFAguAucawGLJh8krCUkanRytSd2a7tif3C9ffRSNRtrF5rmEiNFst5CgF",
  "key11": "5dYEjz3MCALFe7s2R1fAVm3CFLa8JAuETSqsqSw5tHEoQd5gJ9dpzS5HzEHLWyTHQR9UaYqQmyapS9dCrbQVeg1r",
  "key12": "J5gfGUe3aN4CGKKWyb28vAhEJGofn1ED7aZ4B5g1E4FrjNik58EbagGVN8rCEf5hiWQvwdn972C25Q2H8rGtDdr",
  "key13": "3jpEhURPQFyrzDszeGkx6rQjhUq77LBsf3pFjDL7iEh4LVLeXXuh7PNbqv7N6nQKnEotzcMzYM3XSTmTBthNp635",
  "key14": "4bdAExMDKZ6E4AJ7uAcedm7yerSPqQCxq5nwX3b4V22aKxNDuFJbWSVYuGK9HfDChsJvEJDFzNsGJfhRaMMnDrxw",
  "key15": "2qSF8otDiuNwxaWy4d6XrWjSvL6tNj18MApXVP7XCL3Dn8H4pgzSTWByXsZzU8Scso6xvpNwfjfeM3Fb6LQ9RLfy",
  "key16": "5UkJNJWzVGcE4vL6aap77ikmrhgbgzBRPh7GwyKXjLh9YMgvUYdufrunZagRbG3N3hoszkJQTcPSBeMMZiBi3fXo",
  "key17": "5UtkPXVyT4HnqqGWLWMvPtTiZr52SY8nRxCxBXtqkcmR8YAoYNAQ1maTKpMDz6xmvdRhyKs3jciJ1qLNES6ujJhD",
  "key18": "4f294PHcCvULTVEXWgwc4Fcyeihx88YU1Ze2A9rLtzjijny6ySaSn8BECSxfk6AGXpAjk9jEkeMSpEjsziim46jR",
  "key19": "62MoiaitcysVANCBefZ48QCbDZwGELWa4qLBXKadDTzMit33Xxk3F7LH8iXk7h6mr16fqtxNUpHPTcsasU3QmKS4",
  "key20": "3CMXXNLHRg8N1M5U44d5PxJUzArQW4zTn4gQCMcFbh1uvDMgSnnqkBcUAZepScGUuUwoY2NmuLCdYyL2e2JrymQx",
  "key21": "5kVvPCGY7QiLPkzi8ju5Vpcd2Japc5ywyaF3SvNQmr324DbcT8w6CTxXT3HPo1LS81Yw5xbwBtKGndg8N8qmyQzA",
  "key22": "2hj19Eto5KG2uEBrK8ujm5DS1YrERsWWypZAvEtksvCdiGn8Mvd8pHqKyR9HkqqYiqAz4HtCd1HSn228wUU4qmvF",
  "key23": "53UyoqooB3jYkCawKcKsQNqVGMczVZT2rDnJip6wDpCxdexUSG7KJg7NSzNVUCrstyoEABYWphuL6mN3ZW53XEtG",
  "key24": "36Zi4QM9V9yZm1QKme59zYpmEEM1e2WfXD9LzKgE9jAVwsYehNt5MVdzXW2SFkVzuvQid1WzqoVd5Bw5A19HEGN",
  "key25": "EwSL4Br1YZAYnMew2SBPNnL5B5zaTdEo9RwA1m2msGvGuGHSQW3XLr411JU9UvpQDnNsCXPe7h9YBM8ALiZU3hA",
  "key26": "44bzysuFDE18D8Tn14i6R2LvxcCd2Gz1Ftbh31SN4DrZEQEYd6ciJn6XrCGRBKYMLhGJW3KBMjZhMo1KriBWoFx5",
  "key27": "3NpTgY5Aj18qLSZKUunGSZ11L1PPNDeDDP75p4CKf5ZKidiS59Rx2S9JqE3kKRvLrwDr9ZvPxH9hjUkqWYf3EymR",
  "key28": "4myyr6KpkD9WSdBwmSvDVVcJyCN8o4cMzjsQyLsg8BANY8q4fZU6K8mQdLBTpHu9nyvXj8tGwPEJM6H1493tW5UV",
  "key29": "4KmLcyFjCX99SsJjRH86Dd55ht7tz5i6VhbqBW5oy228GpaXxu2mLFn1TDMbqsxetBFkFkC8BJxstG1rWfxkaYMC",
  "key30": "5NpPBXFnabbkZPt4TdPbHhQrnsrpHPiG3GXdg5Yba6bNy5B4untCEt7YkYMvfzAjXPGyFfZRd1a5B6twkS842gCE",
  "key31": "5i35w1NkuJtBxAYH6oGMcMXsrjnpsxf4kTZ2T6goZDQpzL3DDegEUSPhqah8bJdCfV3u7DWU2zKzc7YvUSYu8gme"
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
