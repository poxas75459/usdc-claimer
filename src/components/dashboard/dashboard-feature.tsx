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
    "NJ5YCnqnoZ7MHi9YXMsTizaZnPwgxSA2JhJU4srh2xHs1R6dA8ZxTN3BSe3LUD2F3M3qngebqyiooCXTHCGPuqV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LPdN4ZQwoqAFTYgNciwMRHRH3wwyLjBtUUzwDF44KiQroBwcjYaFnxq9CYe6b5byvs564ooNZCYaJKvukPMdV3u",
  "key1": "5uM2uR5Lw27b6wuvZi7ijYUspPgh5JbVx6AWLafzojWpbTpwi4bykVQGW4vHvZkgr1W1AmiuJxzW4DWr1dLkz1Dz",
  "key2": "2YZCidYDjCe266yPCmYdPpSuaUJvmpkQDdpoG6rpfRFE6YTRfApKjo1ukhxiSWT8vKrtQ5Mq4REUWTNeb9SYyvd8",
  "key3": "3Puw2pajWLEEUEsjkJ4n79PfcTqpwaHZgKuxGCcaTWzRDryiZUHkBkws7wi9nm6x64HaSUpFsY69xEibX8egx2c4",
  "key4": "2ELpQNwXqbmA44TdeAjwX2Fjzmc2ctCeoifgzQ8BjXXzrgTuPWrSzjJDdGASQbnTniQsQXa1xySRfmodApShBULt",
  "key5": "5FcWvi5GdqxLf58bTCeHpfGXg3yjp3Z6h5EGu7LxNvriNnpNGYRJ2Xr5pmmWGbVNBWZGLQ78qN8kLTFST17PKxGo",
  "key6": "3yB44AzaoYREzrr5oTyHQNYHvP3Hz6rpXioLeFzs5ZwXQAZmDPTjqs4jNSimedZ4cLLk4XhGroPCnzmsQ49QDAqJ",
  "key7": "2YS8tBcmAbyj4Hd6VACq8wun2iBGzutRRRwShKE5ApHfNq4PSSccWkqnqyHYeg5VvY86ueQEr3w9SVsnZ6Pdssr6",
  "key8": "2zcx6N1UmAJV3gZUkEVVHX7HHRrw9bjJuTHhYahMwMbBTESPArRY54dFmPNYqjkzQxywMc3VDWpBbWMsfHMKzB8w",
  "key9": "2DXkYZx77YXz8Z9hTTjAM2W8eUqJTAvUAdLbzXnS3RvFidHgCuGaMThu6Qd3B9KFh3zeexStmc4VMsxcEHvrQUUr",
  "key10": "SvubJwnBrVuXXCrMdF8C1cRpLX7FVtWmxgnpRdskUBDohRFpe5FWv9Ge5KoJ5R2bJKw9VHMqhaYG5GfUVqzMVF7",
  "key11": "58nDvL7MBSGAoDpuu2P4zFEaWDQ5yAHdSkPTxCkkZKJaRESECXAbtFth3JHxmgdxGqc3gBkEqBTZenUAnzFnJ3E2",
  "key12": "3tLkNdRvQhYt5pWezoUaykXQTtBT5QjCeogRGLW6x88q6KdY7LUdcmysKB8YsSvd4nJnbH4bJfpRGKicfWyzDQmM",
  "key13": "kLVrxc9W9MEBgr3vfCi1cqGu8QFQPkDBcEaGXuGPe6XwT6tVAN3BeM9HvznoTYCahyc3nErqdEohxBiPbU7CTG1",
  "key14": "ikfTwkJrBuErqknfRteMxZyYkHUVaArSpGYNku1oCnkgxg2uuZfnf1WvM1zuXPd1g1UfTMiQmx6YV2bE6auWvS4",
  "key15": "2oSho4z819J39SwNVXFAd4v5wsy3yjmAFfwpUS9BowVATJSQTT2ejqbVdvxUgAaoszkDXM67Cjhi19Anw1WpxzFs",
  "key16": "5tTMsFskfsg5FaAFjLqfmg9mCpcPpiasBkS3qQJcBtNZNg2ybkDM1B12LEmb8VKPRkFmJhhHBET4wonCE1vxBMDZ",
  "key17": "kSD9hy7RrfXGtVuNc7XJ45VNuaWQfqDgqegewo9DNPBobetTbav7fuyx2CktpDfLZZ62K2JWmLc646kP7Ve5AiT",
  "key18": "4DkAGRZVNE9DUoWBadNDgXnmP5Pz92dgFj2pMBPS4tSruXangMSRYtEKCSa9mX5t8oCwapz5Z4DC1miQKu7MSb6B",
  "key19": "BUqwesU1A7KFVcvhpb2DDVg9rGwEsrpsiJnVyejJuMTqq9ARUFCuJGZJDJHUDVZeXdpwqqBtCMvtGFSRLRN145v",
  "key20": "4yESmFoL8wiJoD3wM8VXKd4Lo4ay2SmgNKGGDERZnTLRM52bG2p3BcRNNMB7PqBuZaFzYygDMervMKabCCS5hpyN",
  "key21": "2VmKVDRL8JtknfzZmfpaTc86KUnJjPpFKBcfAPRzFMKG4LAM1xSseurckCpMv5jgP6S6UBVYEWgzAgeq438srqMx",
  "key22": "2qyhMWocbJXkSxFpcLc5CHp8XspbqQRXBwFPRM7e2DyWFKg9YSa9Q94sRj51av1F9arb9Z8Buco3aax1ESSHEcKL",
  "key23": "5EPdKqaFrPocsuTAp5xr4mfdBVhAvZFRHMpQRLnBxxRkd5XsDisf1tydsAWJANAgyhKRL2oQNyp1x8VjuoxUFrZB",
  "key24": "2KiFXF8xY26PxrCAgydk1LW1kF3JLXJqytRvhJLmfQRaUF71Wc1hm8VLnx7jVsfEzFe1Tf6X1YnhgYkRvRDUtMNs",
  "key25": "57zzfkNbgd6KdiSsJ4VFfMQLcQ5uW4PhSQE9eQnodAjC45VcHaMMRfWoUQ8udMPw4w6mjZfn2F6sKZTALDfKtWgA"
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
