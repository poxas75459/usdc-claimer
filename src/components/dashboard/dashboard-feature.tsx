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
    "4mXKgruadCfr1fhZpnHszzXb7HmsjuCLxfLc5jsFKZRWrC8HVezpcf1SLPrrUnSwDjiy3bf6PsDXnqBipmbKXTwa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p4kbNiWUA1cN2JysnqWkNnbBVhFHscWimq2EnV5yFGVJRWhNqxMY59G36j1owbmSsQpFt8bdUyNR2TvsmjSwpcd",
  "key1": "7kPzQ593phu6gGXiYYeMvQkvFf5jNApT7gwcfHqpmNgnMw2N5rSzUCi7t6FkEEaFBdfdYf4KMUZZsTcdnvVs19D",
  "key2": "3mRrzGfJMaVpj1Aubrbikq9JuQvzjxNc5wvJdotVeiePJ9eLWS8aeKPry1FZCsK8stJ7Ly6MgLRe55UK1yQbnvEW",
  "key3": "5egiwzT7HPAbbSvuNMzTj5FaYso4xSZX2q2jS4xE451K1QEq1vyaVe3iR9tHsj3m4aLsn3NEhArWUSS9YebiU2P9",
  "key4": "5qUnRZPhsNC4P9URCfWwqk4KFUfMLhzfkxjSC5wgDSGryjmpbhBD3gZ8NBiUwZF14yQXxXNh8BUw8nYmM34vjiku",
  "key5": "5e4bVxBGnqaHmkPdkcQyLcUUV86Sm2ubHLq1nKiXhNG98FsqosWsGsreQY88RL8u8eznfAAXFZnGrPiQj8yiBv8U",
  "key6": "19nPmA2QfDXoAW4mKBiGt9PpgnKym1Bbt5pcNs3MfKZCaVkaHzXnpuJR1HTMfSjTEVDkwy2yxUUnu6Kxjtb7qad",
  "key7": "3zty5jkQSfc4PaHBdz5hmDi2x1sTCmy3zwhdvFU94SCdzxqWTG4Rn6ebSzW3yjTor86YygzZ9EsEs6H9EYMSWC8D",
  "key8": "22PKy5sULvWbq1dugxu8g2TDfSKUq2kWtugoAxPQprKUVWwAmM6wBitPR3bJPZdtqxiP6cZ6VXGwoNNXcDmmMABF",
  "key9": "4Njiop7kzuDSE689NaXnR9NmqvTE1w2UDBLBzsLThzawJ1TzuLgTPip6Pv41qF6LmDVqRAMTc3xmfZLZbLyEAaTc",
  "key10": "uPJYVG7QJSXaxa4UoysK27GSU93VCka3A1njVm6PjZxjyGHsVZubdkjymojAcymm8ULX2psAtrq9TCN5NfxAhfH",
  "key11": "2y2rom6F7wzDREMQPmj2AWeWb2md337Qr5wW9tH3ZC1qM9LfSqZoTwfr47GGbKhLFwt9ay2njLNM8xZQAUxbpAtN",
  "key12": "5HGinHwG98ZmtrGRn11Ybpt2sBx5HKjsPuAGBbR1jm6st2VqhTDFmDSf8YrSKXHCLnVbaN88U9gZxQt78sfTXi7H",
  "key13": "2gGfGYUP7FA5odRTLY7AroNvBkSM2Au8bMxkbCCiVGpuGxafDapYuuyoV8tk2JQBF9pLJsUY2qQ9Vah2s61YNTVB",
  "key14": "2i8WcysS6caGJ1MNPBBrtVBSr6unS4K2vXV3xmDJ94wbgKiv53FufFBxxhJwfLCbPG7fy4pAUUjvB2MTXYvXWMkm",
  "key15": "VPsumMvB9Z1KSkf8hudePugdEE8i9arw5zLQx2MJuev5383zbP1j8eoZHqAPVcm8ffJxA4FFiQd4GsCj53d9Xo2",
  "key16": "3yPf71mVgX7c75AKLC6LxtMp5HWNcRzMY7eHK7ew4yCMfafrSJvhN7RRuKn4At1LP59Xw4tsLA1dwWt7TuBcTpT8",
  "key17": "2MLBtrjRDvrpYeSaBqqgQ4EGAsqhb4sDQeDon36hLz4z4DcbXYmf2PVK5kxU33LM96CDJ44ndPKQiWojGShAucME",
  "key18": "3ifcXSr5iQiW4uVjZ7ZDn8YXEsqh5iSF2yD72zRyvDvWTskR7h2xj4TnEsynhhXYbF4WuX4bKJ6pJf5seL9AEPNy",
  "key19": "5nnuqCg6HvEu29ZPQnA6WUXZAgWiWjGkb1CgWgMqAnYw7mKQRMd4iByu9p6TihpMRf1ERDPF49AhtPhUMjfyDd4b",
  "key20": "2KRRb2DdmMNmLuk1RHkgMppGBZzj8gmn2zxykv5472MFSsr27P53Z5uiutUmmA6tFXayarKXwFk47Ra78T1wMoPq",
  "key21": "3FWCcg79Tt2b4nMKbm79VW2sX4sGCZRpfKogaCBLt1T6RowZbWLghVyiJc1JkQt2bjghgiwdH6YyGtEfdL7dTypE",
  "key22": "4ycpn3Pvsz5EDu1nN6uSzjesyAHTWYUzwgeDVEHVeeAu7ADboGw4vibevpxyDxCjyTzBDFfQvyJqDCEjMMsGKm9k",
  "key23": "2efd4kuSmHSaHz62FrW67dLVXVubMcoQ42T2Y5eip21kRj86HqLYRzxuvhm4koGA5tpLbApDLycrVmYgH12AYZ8y",
  "key24": "3jSnTehwFVNCrGFWEqEfiwYi2j9sQUitFvmmBPc2BisQviMBcC4W1y21CifPmkwM6H2cYop39fPH5bbTsX5tAri8",
  "key25": "4qzdpFdoVz3ywvF9ccDx7ZukeUPjokEnjN7eWZAyoYq71mAzGhmDcom5We3SHBYCLAdNjCb1WkEQF23Qi8g51h9t",
  "key26": "3DE41mmCJ8K8ejH1DMtSo6G9ioywpADFC7jyw6sGV7zpKwz8PnoN9A1EoMWHkZ6YYFpqDcYitPwuqEiRz17nWyoZ"
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
