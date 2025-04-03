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
    "3pzaYFgyAormzwr869YtMzV5LcndP6gpsdEajotgqbfuyhPuWPfr2pGg9szTsJbtAaFYKXpRhnNts76V8dG2YsZB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tcQ3GttfTh7aG1DfyqBE287P7A9JpKBC7i1QvPaTHH4vCgcEw3eEL58Yne4Wcgenvw75jpDPUoTyAiya6xyVrCy",
  "key1": "tDG7sGVynZZWZC86NnTd8gEuaietUQzCS9NhcUPG5EuavpmnZK3eumXXqoAP2KEmrrJmotHPsQWnYBvNGtVmATx",
  "key2": "2N8RGzCnBHpFRUmVQU2QvYyC3p8qGYSTu1tHs5M6wcdJQkv3BxH7LK2by3CrkQrCkWYncpAMkemsdMh5MGRWnSWE",
  "key3": "5qphpMrKmArVbEyEgk2D1ypxjipLKuDUd75PqQs1PHrXRAZJNEitwDR6Zz5fTurN94nXbHL21Tz5DcxGvuA1JJy7",
  "key4": "2WEwon5z89toVPde319sFprSUM8nZ6zHwWGbiwfviU17ZcFApwCN6WCLsqRG8DQ9xfKLY2ZBCWAH5aknzzEyp8uL",
  "key5": "HKAHJvxP9Rixkqo3febdNracgA38vYN9AqYK9TsQ7pq77oU5Jc7ehTWUGcgwTDM56ZmfogWKWvFVS4K1ujvpz7c",
  "key6": "2WBJiYLKW8D2rNyQc2VMAKrEpAiVKXbtkqN5ckAKCYTFgD5TwZx1x4jYYAMxPAoxWCmsBHtQnd7W81y9SQYU4DFW",
  "key7": "2L45YCqvWZ9RvHTv8U8hitAgUMbrDd4trTHFTV1zkkHBopFTvx5kDFFGiUpjtMxJhskPgqHHGbYsJFC8aCcrKdtW",
  "key8": "3y2BC3buoBUwcSnJZbTZYfXTNZottBgG2UAopohTXwHQCDA9V9RwV4PnKTHLiMH8XJEoU9oGYzWdAfJTeBaVQoMb",
  "key9": "5r3KaWUFkGBr7L6d8Z5aoGLgcRhBepyBRhpJztQ6C1vaD1X654dW4Z9uDCL6frEsKzyuo9uE86ZbELgyr2vYtXbb",
  "key10": "5qGa7AHSiVDMvu3nJz9g7LJ7KcL6QMTHc84Yzy6UpgyQuSRTFSsg8q8BSoyUqyq3Sd5ZMCAtcdwKEi4e3j66YHPk",
  "key11": "2hJBi8gUmaZhJbkZmD5ubo8yR9iKvNcrxJRuajimn1QkfvTj1G18pfmzyVpyY8R3MjL64KhE2BXqkQRG74z83sE4",
  "key12": "5ym8r86nmRLRrMcSXS2dovQFgDFTV9v2yXZ5L5ZGF1C1XoC522LqEKc68uY8RYKhBrdeqbKWCCTq1yb1uXx31BAT",
  "key13": "528P2ED6UoCTsPYTasLoZyGiLpJuB4mbU9BEY53Wax9EajgE5UEbhMwz6kv42cWFS8WnRmMUouwhUpd9RyKM6PLP",
  "key14": "2tabeQ4VBYMGNxuydhH6Vgd5Z39CQ14mhMUWTqfARPjcGnzoxwgKiNyiWw3WAfct3bq8UrytGpjNbWSZnJKoUEVX",
  "key15": "EZZFdEULGucsDw3LdvZZrT2vBQy1LbnBEk6vvQw34EvrgBuhuU3QSnsJsc1ehAgJq51RL82E8KaDAf393QtxYjx",
  "key16": "26uzW2YY5QZNJWg3uXvW5Xguyuak3o7B5vg7EEwVj6U1cVrLKGm5in8QS6mocD5oAyd84C6GcVRsdB8MFNy2321E",
  "key17": "3QB3syJAidMF5CvMuXySLgm5zHsEvGTCBhrusxUk4EKKx89Fy1vJZicUG5ErWKS8dN5xT5a2ESpvAgNHfNY5dTcP",
  "key18": "9arZbhufNGLeirmb6f4UShfeGM4j4MNQomcAMcpgWvD4sayMK6FkaEuiMcqbGUmmptoRdzeoZGDwbSxePub34pK",
  "key19": "2bsmRFanoffZF5ut3awduN7fodDaVCRdbNrpPsAmEYjQQ6a32xNeGkm66F8F78PhkUUNGGx5HTnL67H2chHRTTvM",
  "key20": "48wNwedLtfXWDcA1CdhvPCAUbtPNEj4o2NY2am7M2Ghhm16DDZJTP4Jm1tRgQZRfKTKy4pxqfhmd1Jar98YebWng",
  "key21": "2F28vyz2bLmFJYyGYXMwUgvKjLJPD2SGuuhjxPQpGDmi4wQ2YqdR5ceqVcH9iK2f7bFroLZ6Vmz6miSuSPuVGcvD",
  "key22": "4AFkBWcgjsCQETx6mU47Gn9F9oKr7T6v3B7jeHKJt6cESy2s4czV1SQdYadL4VpEAdp4cAcpr3FTRt9hQnF1qD7V",
  "key23": "2vBj3Y44QikvjNgtjLvLkeaTUiN5YzCBkKHmar5jSnWEsSFdLBHNcxSkiCv5ndxzYrTeEyiVsejZbgjjLpjGJqYu",
  "key24": "32H825r9gYoDLpyf1zTiMD2pD1LnzrUNyiPGATYqErDgjGrSZ79WHHAuBSWS9bo8XKNnLp8Pjz9uRnWcPKFCKV9v",
  "key25": "4c1joLaMzgEXwARFbdgLMDfDpXpE43iK6DFM7Q5N4xwdnXuRgkNRYG3qkUmeNvKZoDssf1tdNC42dKyuTn3BF8xZ",
  "key26": "5zZAJ4iRCAkUk8XAHmumwax63fRJA5wqzFophFeF2jqhKPNvSDSwja9UGukdmSDvBHPJ6CzTwiytNEZAigzDhBk4"
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
