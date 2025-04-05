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
    "3gsb6J5SC1odRigmW6WD55Agp24qh1dH77fFJk4mJmmT2MhvReJtPECPJVfsw8MWTgZE2SvuChZhbypQ6ugxBspW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kCkowWSagqC1GXSA1BTP5riFyGTUoZSS27yae9YMB5HFjXJ8WkEZavX3c7bKFpKQEk2LQfLwYuXNEwbsq9DmbAS",
  "key1": "XAcYrf5XyySof3U8FJeHSRUA3JWz4LNra3DNfDRHWxtar3dwzzUaYbz8G6FBfS9p4c6rVqkD3jxFeKjN9Wcv3u6",
  "key2": "2rP6atKB92U9FJ3Cqsqx62LVuyhLxczUxvzw3N1aydx3NkZveRPZyUay1bzVsKEcVKBKAG4vKk6hexpn7eDNxRCJ",
  "key3": "4j5WebmTnkDuvxi8dAuABsNQA1KWm3Qr2t3GB9jk1WqzhBZkwidRDj6ZJMyc44DwFNrbn4otWhUZHWuSVvsPezH5",
  "key4": "3V9L4u2MDcJk9crn7ohLDv7u7dS3ytb1znR3WbkvSVJrFB9cxM2ZFkxnPmm5enNnPqdq56ViPTfFPemDMnsuPWtr",
  "key5": "KNAURHWGhjceQucsQGRjTfjeuzsmn9s1X1oCrtRsxXz8nmkdXzfXjVjzwaJXhbJyYrtzUWKKjpx4e89fwBRTNDt",
  "key6": "5PJPwH63dEotafyPAQn4e2jmf3b9CC8y2z32ux5qrKgk6QP7bRQtSHfNSsSeT2CcQYgz4BHMZdJHoeQ4NnuhRNLa",
  "key7": "5q7D9dYMcPECYocDpueUG95W2tHiFmahdD7zKTKjYjxxMip2MkogRoZZUjxduokEPZ7ev5bLnAAG13jMbfbAZMhq",
  "key8": "4ax9UMBMPzxXzVVvJBqA15BESPWzqFRSbYa1Gdm553TxQhAxAcgNYiFXXdxgDoWycvFzWcYELGoYYcJixoWQ8oBW",
  "key9": "4s4CUHbqVx6q2jrCogPyyzvA3kGTj3mz92CS5GJ8ykhPVUJA7bTm2Y85rTrXK35y6UzJ5ZCu6f5AA5UBKXspviPe",
  "key10": "3fAQhAZq3MSkmZAoj2Et7u97R4cWbJgsCocsCNj3QLarhXGkACEgUZgqjNGzxPUYoDLTR2nwjP9oVzhJt97pobfb",
  "key11": "2krtHcYvLsyHXFadEdjTLrxZSSc8oyqYh6VJaZQtRzgQ4rV4G7cyPcBrouGtEkzahrQdvwKbE84d2PBr8YBkSr2M",
  "key12": "4L3MfNVwb6eRedQUPHYjapknxv1cEZ16nNMuSxKVsuTzJpNATFR3wjAYvpTh7wzsHc5ahAowtnkTT7Gz7uwscGRe",
  "key13": "deeNstj5Zc4ekMQSZREybuzogfvAQ7fAywrvaTmfgyJGRMNynUgCCjrNdmPTxKo95ztferrwMm5sYQasozjdc4U",
  "key14": "3XvPVUDTddiGTL8GveheFrtejnTeJLnKMM9i5sJHvnmxMmfjQMU5vKJJ9gCoc8YVxhKX6j3rJeyoREp7Axk2ADQE",
  "key15": "3jYHHrQzoNeRhq3Q9KF64BiG2wHrBgLZPCwCHVeqPFTHLo2K6MhunNs6bSjCJ44J1Z1FDUMdLEmBqzHoWZNKg7EK",
  "key16": "JJaBaeyXJf3dSngYHnxgxXVRGGQ4VDUi1nT412oc4L7bWoSmJ25Xfw6VDrRhHsYRAJaAgAvkQZwG6r8NpB9xnBV",
  "key17": "3FtvJTXga87S6Ny2HXjpS4yt3oETuwpAUzNDYptXXoqtZTmckYa2LZAfrmnMi4hDM7Nw8c1VgRa8C4eCy2cY6vG9",
  "key18": "4B692FkZwuoJpfGACj7Y7iiGEuZvsUBTHGnj7dsMdLA5oGrFXt44orH4NGFj5Xe23pY82tAsnys2ooaeRFW5pfkj",
  "key19": "2tPdprWuojU4mv7VmvPj4qzmXEsT7bX8wfHfT3x2vpXPayznuHjTqf5DWaWbDRjZB4wYkMvytHpzni2AGR4vVCfh",
  "key20": "3wf7BaquWPA9WrrKERPbFpcLGQ5a1NN7dqyjXBaL1PM2SSGGnstD94AzUXhFT5Gp6Z8Lou9icZb9EULV2y6YCiYa",
  "key21": "kgRgrhUfUxeBH8dbYTnY7YXYWwVt1uG4SrcVxZrACkuCPwd6aX3CeXwpec7omvKrE16KvYUBryM7UR3Aig63yvV",
  "key22": "3cQyHPdDmh63Ep9VM8gBNz5mQaghva6KhxD578igBg8gHzLJKTc3gQzv1AHdgx7BLpqqM5vPUzhE8XVRFhidg23h",
  "key23": "4bP6cqqVczfnysnPenjxXbmFYNJP2tDFGpcRL7PnJxvzva6eeaJ8H6GVYbQtUqmTZvyyhenbS95xrcc7FdWKSvMk",
  "key24": "2kA9Wvw6esBUh94pHuoiVmgfdLjf2exe17KeguAdTUEg4r3JMR29TbHhAn2KHkSHZ2hUNd9fYZdeppyE9zcVDtNA",
  "key25": "Us3TDJ1VvDhKiFNbPAj9bQz8m734o3L6yWVkRqhtdV6Qzxr5N2T77aX8wpvKLBf2ugM8WvLB3y3Jkbt2tXkPXmd"
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
