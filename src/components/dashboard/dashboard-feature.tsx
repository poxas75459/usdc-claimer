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
    "5K8wJqtELxgpNvt1W7snQoC89uGsrv3rsHhUBD5kb8neWUUFRbpqqeLvPJBNoQ8JDKBdmxX4sqJMsV6jdsSW5Yte"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sVCdQknbQwWnDiLcvZ3PrUKMv1hAHrjMYVoknGBAdHKmUVdF2XJ6n1h1QUMxnYGvskpmXT5ZdErfRvxaaA9vkJ4",
  "key1": "341ECw5pQrb9FTUW9qUKVL2thxYRKFW71YDgXfxHxNmtFriCXb8ny5r1pnAknSbstpzZPHhTnWpe8hAxvy9itheC",
  "key2": "5sefeyN31YFSgsLyeJSntxXqiXdquzfxEaSTybmmWGmzAg68NxoiPFusTSjvPXGHBeBgfi6rQhmgPMipfiH2Sqof",
  "key3": "qSPhkx5JR5Xux6a5p25oTookjFaDUbdnVAw1dCvZHqduKd38yU32d5M8bE3DtE9uDbGGGsUfoqvxCDG9od96cLj",
  "key4": "4Wc7TsLc92CHWRE9L2FnjSrSMJxbPt8dyt8fhhQqQtfLRqyqZHYsGjjj3gtn1eCtAHEQXAJcon5WwdeAbntXuLrY",
  "key5": "4kbqPq1Tnqv7jNC7d9GWj3pRstqswkf7CGeJq1MwF9XZ4f3iqzXYmjsSy64JDrCTZGASpJiMVFiJomUjiQ8vKj8A",
  "key6": "5N1Z5j9pgyrAPm1PRSHL7aAGn47DTTNJ6Eqxp2GAJSkbuJurtGXVsgHVEWbVB6sU9xFXxXUbLTHwok6S7Kawj6Fp",
  "key7": "S7vi9Aror3VLFLEupPqMinVaCzKxdGUxyhdXQVhbfBDVGTi7Sbyro6Fj783rM15PBTHmyfdDNuGR6VnLaZFGvXy",
  "key8": "4fBnXJa2DQ9L75aQ92XGKzksMCu6JPYD1p2Tyk6bjXrjFzcq36h5w1a7D16G9vWcAuGvbhAD48MwoMrFS9bnSgfx",
  "key9": "2XrcZtA7URabhicmMTVEkDNttWwGVG7CZMQQRR7AfTqQprX55LJuiqdQWHHXN4DK8nAWUqsL2pFEPyZ2n4U385No",
  "key10": "524A7iAMJ38PXbABsNtDwLtL8CZE44RPRsYsu6N5Qn25j6MP6iz6s7AkKopoeQd5bpDxakovSmeAKLLHuxAVvz4h",
  "key11": "4jrTqnaSkh1azmaiXC8SQhsJjosC5jenP9TcxeCjGTxmoxZj4oiHG4rYj5rP7UammUMWAVbLjmHJWCyavJi4xfQG",
  "key12": "4Uu2kBmacveQ3GQG92Y75uJ5oAqAdvLr6UCazQeVB5fRTXkqCHWVw7QkUPa6byrntoXCFXoAq2vo9FFSwfUboNRG",
  "key13": "22RX5pLGC7QBzW3eUPkjZ1ZKEjaYpJkTYC5xL2r8kRperBR3VHciGTyCp2eKvetYrdmMSMfrynt9wnDbWTMHuiW6",
  "key14": "5kvoubiWtEyXQRnC2J3EADEX2wPm1VX1UDy7SepFA1kuCdZcNrBknJVT9kq3QZ4VwEyVVZkayobhs7SN9coNmd4D",
  "key15": "RAtS4jxv9ouajwoRePyvXh2SanmNcvzx5vpR8dq3UVjkwT7awmnQQ27N5NCn4M2W7jv8ZHLvaDhTzNxwgx9yRBN",
  "key16": "26qaANQPXbfnNEvuPHYWx6FntojgYRs23aNaiLtSj4FPiVK5An3Ehwukv2BrhHdcrPJeUEDFfqb5NjD1GWxTXnSE",
  "key17": "3Wz6VGZFqHNnfpCrjB9QZkfacNBVJLHWJYF8GaV85xRRGqoBm3GLiKfcZsAWGnQPKXFaLEEheaksHLpqLrtr9XAt",
  "key18": "5h2Vebq4LoLvcZSKfWxH8tHrjoMs51wRdPyFKByQoEhzSs51izSMhh9ySViN45qi3kt8bndWxarMKrTXQiJT1b3u",
  "key19": "5nUGames1nT49buM52z7f5vyQFcVxou8kbC8opcaSikWMzwCRW5oaSbVLPkzyr44CeHpn1gH4Zm4VD2zxkEQ76Fv",
  "key20": "3etxuDhgW6kne8yv7JLDZAf8snnB6yUULJjhY97aaXStbFb5qvY3j9GmTMvsBMatZzEL4gstnLdYN6mCyh85Sp6J",
  "key21": "tKrtyZSJK7e4PDu3isSLzvC1RoTqP4pjAegLv7VhLSaVuMv6Y7QrzTWkTaAVVBUYuxvBkapJwt2c2QfSfuiqzs3",
  "key22": "sdVGHZkmrLEEAabtm5SJwU3pfED7oTqGghQa442sG45tFVcsu4AbgWfpzUkFocVEAQrDYanWuSVje5BNfMxsFJm",
  "key23": "Mb6dmABWEt8T3BMCiZ9fEZQ9Grne3CPM2orK7YQBhYXNuA2AFEeK9hV7N6EiZcZLP7nAJaguMEf1XywWLA569y5",
  "key24": "56aj5RjtL22pE8Ub9cbdT3XTXyC5kMMZZbsEBLw6Wbv77HHHuAj4NurbM3aAuJpAcFMB2cKhZsWRPhHcMbDqF2e1"
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
