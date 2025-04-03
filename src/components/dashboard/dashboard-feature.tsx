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
    "3cQPseeRuGfvASc9hDuWozAAJb5AjaRMfGeA5EChbqKAPNrqFBNXyJ73sT7N4zSKA99o8kCwk2EbTY6rfHrBbaZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fxvnqwUuuDGhiBPz7goJ2qEPYrJeuYb7eqisx8cyFSNqZeNzpxgXEVqHdkxd8iuCA9R2eTNo71Jwvdt4Z9PSH7N",
  "key1": "3LYGHX2ACPmwaxpnCQsAzYQ4osCYc5Ur1cWTYJ3NTPBeCXcjZtP71ApzyDj5oe6EisvXHvCzdaXZsVDinLWajD9g",
  "key2": "48BcsyFWyaWaf8PcWu5xWSE1z5wDgs9sNVWcXQBwYXDRNNEEj1rwj21hUcUafpzxURN4HcaR1d9eEGc8L3kuF1p",
  "key3": "3sLPNVtGcx8NDczSwWs6hegZJx2LQ6KxuLMgfT78fy7PseM9xJqLABXt5gkUg6HzKBxnHxJViRT5CUbDehZY6fBA",
  "key4": "1qppupj2cgGdnaf4TqduY1W72UyLpugQzfyg6RGWDQZ1o1j4DQo8j2Ckodv7MHSNVkJCAD98cMk176wmXQAsfDZ",
  "key5": "6H3AiiuaK9CkNm9X8tQrDyprPoacpEmLjvvJtwmHG3VFM9Z3ui3Qsp4Rt4bzacwdmdWisQVKUpGDZfk1XHRufuX",
  "key6": "2r1yUvav9CCPrefKxkLhVuQxzxyGn2nhG68zE27QxsJZHxCtraJBhonJV2m4sa7RdwVXkZJNSPNu3NjCzxTm4reK",
  "key7": "42G9Zty8SjhgvvYL7CSH5KQid67DZ2P8r6Tm7c5M7aafGtsmzybD4rKcv8XTFgoVfSWGLUPwGhCATBNBSViYA5pb",
  "key8": "2o8WUcNECCVsgyxJ8texiwLqsZveWT3VtMYgCKgjG7pnaBBGPFAKEWzeqb5A9TEhYK6V4Xf2qhqyczY9ohuGH1p5",
  "key9": "4w5mdZRbN4HRvDc2nizFUcyXuTo1gkPFWTLzcVwGcDtktB5ak4ex6UGa7P9NkUfyoGNm64GwehxE8w9oU4Qsi32E",
  "key10": "5u8myXSBtQgtAYmsLHbcJMusefn1RYDQH5BTrXYStqqqHEzUmgRWuZU1tYRooQWrTocLjR2L576MJKeiytZgJjRu",
  "key11": "973C6RhStBQL4otoHhyfbtE8hRC635RpV5zRP51WRLf1yWSev9SKxBfyauk5eMMseqhAn8QcHNrHGkq372Ti8rT",
  "key12": "2hJxodQNsZxzvr9Xa8CmgcwY1Aw8rgG5QNbpCFeMhHv8XGsjYgLA49acGHbRWJ6GdLD6ehJen5i6zv4MUiQsraQ4",
  "key13": "2RssfhUXYtqEX4iztr6iwaauhjVrPLWskRSSajJPCPbMHi8bjiX5o76THT14nTpwYQEAShN24D3RaTGVy7FjHJzL",
  "key14": "5zUAmGZneE9ogW8unENmDrURLLLWkPY1x8PiX7CVoJWDfAR3xXw7jejDUQfqCdB8mFAXufamDtQvvSWcvSoGALd4",
  "key15": "QZYk9bv2XZsEzikz7Tac36YTngpAZEBRut9TyxWazi5axGE9fSWUNdR1sVcywUWUD4TKhmrgQxw3DXSVMy96uAY",
  "key16": "51Be8H5BNQ5uBuh3PdMJmVgY3zx7VY4WRixid187js8hwC7GfHjkYnmLEvjbK7Jgo4aTxMCerpgKQ1CSei9JV8zz",
  "key17": "3nUNGkpMrWEGfNrwZc4K3eadnX6XCKRnq68RpQh3m5TGubfjPDcFiDWyR34psb2ywRNvzQgaSrraoUk7mPpHVnxF",
  "key18": "4vnXk1PfisQcSzwakzpGabuKMja6vvzLjf1jhh11PP58frmLsJiv8Btrjf6twVoXtZUiWccCLsTZk1zqF2Er1vrb",
  "key19": "5s2RCB3QSthA22LhBukhT6DbRhrWLhNQtTKBsLEyS8L4DPhgcSdVf6fL3uwvnRNVP6d2hG2Qo1C1SVdDM1UwMa4T",
  "key20": "45jxG6SAM5TdLRTwKzV31PAjsEBjDSPQwGNhDaJ9TpUQk6nFFH5dVXKvwZSR52yyuVNjnXStrdmbTuf66LkJQgJ2",
  "key21": "5WCz3rRWNeSP1Dm7qvLfXxGBivw6qTmEWzR2y4f8VUepDstj22gcjKFi7D996RukdRkbSE7auxw673GDXFAccYPj",
  "key22": "2uM8RgL12temDNbwxfGeb333EtjQHzQSK54EJngTLvRtDRqZxpT8NNQmcJiMk4itcPMqPxmZvkS6pPkcLAUiccEJ",
  "key23": "38eTjmCpjhsnRgB47Mu7YfSUH2gvKLtYPveUWkjLGycrZWeHpvVwVzJCCSaR7Eedn8YEsZYfE3sraU1heB7KNvRF",
  "key24": "629nsBGHaYeuQpRaguQPsJKyBp4GcqZNNr43FCaRSW8aifWNz8dcBhFKHSc2z9bFPsFW5edtELvozZQrWFJYDguu",
  "key25": "5FVyKstup2d6VYu9VzinMFwWvwbYC2dyzw2vckajrbKjfZT8ADywSmEMC4XPninuqxfnCDqDow7kJXibuHidbq1g",
  "key26": "4qfHtiSE8vm5ezFgPiNm3m5inVpk7DTdWqNJYkdHMs44ebJ6Sg8hmPrJdBBKTdSjtzJu39sq5PPfVNjENknjmnV9",
  "key27": "51SnAfYKVuFstFcM3jFfRDBfH5gb2PbZTffSx7z5FsDScHc6XfraAJm5Brf2KjKrT7CRgpP6Ybd9zaDAQVBYjMd6",
  "key28": "3ba2hwVbEyiC6CdVDSfAFCRvKFSdZm2NWkrSKpvU2W91nxcBoHMJWncLTCp4XNcJAipwTHmRjC4ac3YuG2y7Wfyj"
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
