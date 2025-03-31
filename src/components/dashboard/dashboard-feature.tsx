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
    "65H18xHfT6V9RofkCsRmZqmwcQFHXCNxMCabuM41pchn7UKfx4oWPS2e8iyTaERGzhuvKTCB7hvoMUZ6hTe4WS6w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Kz7x6ciuaZaweeG81Embek5AuxcNDTekvhy8QyAobw9saV39BXVgy5xGfKT6yoxZNNViRpAzUZgd5GU351Zd8Vq",
  "key1": "677AR8BkSorjhmkKtpRkfMoYiYrzhcPDp4NjJQ2rWsKhHxroAAmy815WRrX2rttffqKUW2ugmZeosHtm4dH9fRdE",
  "key2": "3DT4HkpFY8DWgc3YP5KBNJBTWhJPuk8nkLUHk38wG2PEGzgyzp5LXMa1hwVAoZWPkdwpigqGxe4pkTewT3ie5SQn",
  "key3": "63irFBGkNwvE81VBfV16U92PYpmFVS2dKBL5su2ZfFR5dWKpgaejxVH9pm8xk7zcPVWDdyvgfGJ1wfwT9sCMKQU3",
  "key4": "2zi8Fkhi9eWtQZ2pJaCMnKGL2W7u7Sq1tcbcePkHzeuaBnXkgDYKWY5mBxUuK4WD5vsjyqs4iFnj9QuK1reHkDjZ",
  "key5": "yqeq7LJAhNVh7eNxD9FRi1k6M5j2PxgHhATLGvv2CAM3cCiBM3WwbMeTZAQoBDBW27bJLi5jhagxyU5gswAnAiC",
  "key6": "23ksYwyMYD2wqTn1iAM4AqFu7PGTkEePZmZaYnSwLcwBcLpkbPfNRrihieParze9eSu6nvb8a5FGh5xbmvf1RBVj",
  "key7": "M66yE5oY9F9b2MegjRhdPYhowwozoPaXpX6GMi2FfEQgBd7q8qdhwqFy5dKAYCqyHEamEiodwQzEgP68ZmQpjSX",
  "key8": "2Nq6rvL71hjRKyFSkSKqp3TPmgXV1nNxkjqKheAz4mgYfNmNr2tGS9UWjhcFrqXsJ2c59a9xQCm12F9HjUwxkW6y",
  "key9": "3KuNBzy9Q2p6qjyBjS3DXtErNC8rDEhiCwYMB67ryibYC141W6DaZsbNSSHPqeHzoW6RVXdebArY3buDYipAd8Ng",
  "key10": "2xHS547trdTfiigEGmH9hS7bQEN9ZXDotdaEgRv4Q1vK438FWNakMvKjEAdhX9kTLthiZZi7bxDADvD69T4G6kFq",
  "key11": "2mRJ18HvSRvcyRXEydf2nKRLssryYQ35Si2YhQ9QMiuvrGzpT11mJ7Vjvbc5J4sXRu7BozTLL2Cu2JtSfauS4NhC",
  "key12": "4JWWzzhu5r91idHdMsTVQm8UVVBYVxv3Jr6HpdCbRWPjmGTqzLu4EgtRsik2kAEmFs4u8HFpKeCvgW1JenYHzAcT",
  "key13": "363cdfGbbSPmkbg7Yf6joLBFpJeFJ4f1dB6B2dy7SyVrznBoWEZgF9tPvJGhdAMeiwk74bRaK5TYuZCwPsexNJv",
  "key14": "23fgivZ1CHhitT5HqwjbATFpFAvX6uhQhGHPz88m9MWovgYfmXQBSbL95BdQFvBB5gpAkLy2Uxf9MsifpshTg7ge",
  "key15": "42qU4s75xoaCLfxWr1nJRVrGKFESL7jgQzWCTkESmDaEdcwQ2SAQUjsyYGb7YGF78Br3wAHJyC5zQWa2AmZL6QtP",
  "key16": "5B7ixc2PBSuY9Lfbc6fDayFd9L597VDf9taYcqpiNDBf7e5WXTkL9AN6e7yipGHJNR14CUC1PZpckwrwKmjKhtWn",
  "key17": "3Qb1FPux8rQwqRgrnFZ64TtTWMYWsPKyUMGoiwmZWuG2druXaYKPPricyN6aGzqpP9MNemf9kfbxg1q3cuNMAC5F",
  "key18": "5ZWXn4hrVfjub6biDbFSqMAg2Nbgq1Rq8FBWaHirLdzEg1so7XiuvTMv4HUycdK9Re28GiXWwPfWUAq1Qo4mygck",
  "key19": "YZ873TxrFvH6uvvcueYd1XfXQdQh4WSaQHWhALhUQwivPbCdKgJktNdTUDc1d2yxLGAgEGsBqJF8wwGFXinddJY",
  "key20": "4fiSmCKFsZmuDg6GmX4ftw6s6bKqAm4B7HvZ7JAJ7XFKS74iUX8gScPNVMiKFaaY9xnukevBEFAUjtBBsfJ5m9fr",
  "key21": "2SamfmiMYnQrAo9zPZZXMKFW4okePZP4qG7xzko4kf5FrmLzYKeipjeGzdQDur7yCLzW2yMj1MRXFCKnKFWBWqxt",
  "key22": "282o6oNxugcx85J47EMXGwVHhnZf9Jppvxa9ar94hMDGL1ccq2krEwQxT8qnKCZY3q6LsGiEMWCqu3rLevSu8epQ",
  "key23": "3B7bLyKH2FzjiuAuNHhMan4jQwshCykmvipHomRKHMDu5hHArLKRHMQ3rpiMmDS6pWA1H3CyreaUTCXsB3XJoZuz",
  "key24": "ycyoPjf83to9ANNdokf3dHz255uNvCq2r66D9JYVGJEk8dvDpuiudMNVKXfPvdkx79h9jz3NFggC59XLAKYug21",
  "key25": "3shojkpdQkLqvxJGX5LBWJBvdwDYnBRbszMbjUDqsqWSD9X2yyNqtyw9P8dQRzgB6d1DUovp2XV3bWc4NpzB4A7k",
  "key26": "5SwaNmWpX1taHtsrnV3GspYvPe8eyZtm9RZmUSggA8Mv9RHfWiri4CtDZesPMRjm8vyFbUpBnpZYYZ7rZtenxWfx",
  "key27": "4DeJFuD5mMpbzhX7UQBiCLkaTJVb27yPAPkkxGA14S9FqmAem2f9Qvj5QCs8uaMRy75NHBGK5GB8CdBLzzESp4ok",
  "key28": "56QHVrs1X5qzgbvcqUpkhVsk7ppGRrngp3TwR6hVojSiTCi71RqK45cxC3FLV7TERauHPMZWHAu8K6v5GyVPqcNy",
  "key29": "2gwUJtZVz3nsTnfC9U2o3pSsSLJWSHfoR5bGBNi5F3BibeP8ZjdJQHssMx7zsA9RbPiwYidiFscaEpAQtNjH6dmQ",
  "key30": "5fnuq4WukDL9XGiXUroyTt4ZsyBgDaMRLuhvcG4vUw2SY9d6RvsHRLRR5T3wp5rwfswHfF8vxPtAN3QYhcfvvv5H",
  "key31": "431RGcG5FWCbmMb4PuH9D4uzTLva9RFZzCHjQxhnqeobjxZJZ4qVKLN9ptW6oAnWKSLK2Ku3E8o4orzZY1o9f9nB",
  "key32": "vj6TVsLLVGUKJkYsy74mygPqprn1zCRsLdbqMPLQthdQ7Ha2qhN6jNJ4hcMgmrLx1JTfku9oLSuj3UtJm7CXjv6",
  "key33": "5cgHhmUEnrmR8rWX2HvV6MdsYhqYoAoBaRD2T5NzvyQLpXc7cumk4Bkqud4H37bVDZtcGV9CbtgiGReXdP4ZvSvf",
  "key34": "5ezgdR4iK4kY8WksuAteswGLyvUrCueZyhv5ZHdhaEHyag6GYBsoZa8CCfDBTY14Ht2j6qxJbidRK4fUQT5u9RTd",
  "key35": "53SUos3Y6BpVP87PcQpRe6ZzabT39CALtfadGsqa6SHbE3KHDYCGx4CsuYQQ2tfMmdfH8HoJRcRM9qbEgrUqXcGj",
  "key36": "5wL9iQaSGNGVWs3tTebYCr85bsbQErYWzyHoNe1FW7EwjGYoEKG52EyqjaBT8Pd49LwmmATXGjgeQboka2wFFXRi",
  "key37": "58wPJDRBgyy2mmvYoER4MrGjDhjVionZdR7R67oqT2cVAMpMZbxEQXoJJEVuKjck4z4iJ6e9AVMcv2pi93JLBdQx",
  "key38": "4Hk3kFow4hv1DfGG7oUfqCw56iehfCUNU76pKXyFrBhMLnPEn2LscnZKkba8vuvA75b4Qq4P23nty7Dd6aaXB8LY",
  "key39": "5dtVZjtKBG5gs3ShtJo14MF5nA3v4AZUyLTtNNvMUh4XzNTpBRa7cVFhiwySKdjctGDpBDUNwEWPaFBSABNBJ7eM",
  "key40": "3a7ugAmWVEsbcUTypUXknkawjwGgNMSUWNgzrYFgkXCGmTyCwMnVEt7vPjqvbtNHDf3Zex6EpUTvQTKHQC8TjoSk",
  "key41": "4WKHrzc8vvpt1qCpTe23btn4ao2tbC71E66n5YvcSJ7XJVX2x3F4RM1LkWpLmAzrvPk78feXLiVbK7JBvwehMRKv",
  "key42": "5RdrNSjRMy3XwJtfC48gncmwdbjeYaz1LsAQyuBxR3uC3MVVvtY9QnhJ4LbcFv5hcG8SjbKbkAJpbH9BZD44QJQy",
  "key43": "4n3LzJR27twtourJYSqynTSmqD89czrDK59x6xbz8xHcdE1vMSKRmfmxg5e7MfffZ5QCfvZXLiqZPWS5yZCVj2Cj",
  "key44": "4jo5uUzG3XQsAQuY3DnEAa65wdkD7m1SdNWpg6exj3TnkNzobZRTSsGa5EXx2TEspeYwXJPrixjCfyCvBNan3Zmv",
  "key45": "Pxwca7rGQe7vsUPjf2rf6sb7dRe1CY3xFzTz9Bm86Uf3pCgehSB5f6T11kjbqxjz6s67vRkEar19muWS3Qg26aN"
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
