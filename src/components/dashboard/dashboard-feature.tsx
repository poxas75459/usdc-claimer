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
    "4YU8MBhuTQwPM6yYzNg9QUupJskRe3kRBnrSXsmmWbkePWh6q3vbsZY2jC9891nC8jE5tWHMGqYhKoXga34hrGFc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v7L9URRX1YJUJNrjNmZGNmqGWGqX4N2wspNkeVbQi5WnpRuxSmehpEoGLmRpVJCCC1CnKuH1puZr4tKRWRkok8q",
  "key1": "3G4Kan8LuuZBnvBgWu5ACTNy9Q3FioX8quUzxCKQozvrsii47FJ4cbH6c3aHJymCLJkG14Kk2D7aLBR7AgK6j7c8",
  "key2": "634q46YjrG7zxwNT2RLqQbU4Fzq7swdw72CudXsE6yZVorJkdp2RixJQxyQaNfhvq2WVrbKFg6ed5w8JPaX33ba9",
  "key3": "3E5a2ifoFvfvDL9XSTYnt3TpMYRZoozSbu1DQYBe4YTdaaaz5FBdRUdwMnjsn8UF823fJgCCyXGahzc5jxbSYUwc",
  "key4": "5tXAGangdzFSDZygJvRP3nTFn16KrrXfAusNubW9gzJFaBhhiRBAAAoL7cAKHSUT7ZFWNvDE9cubrXoJLvpvYkvC",
  "key5": "5uGv2qTrXWggSQWLEcdE26zJGEAbMnMCNqxzm3p9YL7MBt3jCt1UVRdC74tuDkEn3DYQ89esCcmz6b4yUcmxB1VP",
  "key6": "3UTijugmCVQsMc3Cx9hV1cep56tgbn76KQZmdeos92Pe4QyzcPL285dGZh2iGTvAAESK9RpWoxJwzEDdisdmzVUw",
  "key7": "3AaC92fKssFFkBVyrGFWLtXLMcEDFChzRrBz2gGUAo35Dr91BCMkSGFNBiUZhi6a2DtUvxsnhEbbDMtMZE8JcQR3",
  "key8": "5rKXF7Zz3CJyrxni2uFqsZHadtgFkQEH7bs5syUUCz8tim3DmJxWxaCib8qx1V8Z98XLV81o69FbGVnUKQPL6VtF",
  "key9": "5triVFX2gtQ1pQBdqtW9U59Jq2WrXCq5HbkcE36VCWAWNdrABk2qdwgeqYuHsMgdBgiKgwdW7XT9a2Y8eTnFNiPJ",
  "key10": "5DYPKf66S9Dei5JcfV9MwQXqDHiAh9x8yD8uDBYoFFG7b7iTmJhK9npLWnukBAMQSmaYdoGRkPmubnHsPRH1NmP7",
  "key11": "43pVaLKge8SQEjwYxYMCXTxtLehLfCazpFsDYNs8TSNzauZsayy4HBRXfRN2irrMRTrUq1eAttYE89wuy7PnSsyw",
  "key12": "2dzf4Wj1YrGn16ZKKFdd4tc8i1EKM3q2fNDYEmEqbSmatJJgAMc6rriiFaCnvRiKxMKTVZ2PRzpSbJG8hTFumbbM",
  "key13": "5v2NzM9myM8pEZbBavw9BbgFgPZuHr9TKUPvWqM9yG2dB9jcnPZhno5Lo1fwTZZ7UwQ3nj2rk4JizY1vi7j8oPNs",
  "key14": "4tTrinv1FR3j7fvWDEtndffSvHzG5T7NmSCBjsnfcT2ciybHPoxesApBCiwGd35HXAkT9T3Wpk7U3UQbQXboZoX3",
  "key15": "2MyBBQ6Cokqd2GXBCFLTMbwivcx8XnQqDhj6rRzPjHU22uYmCHGnUwgUdSuRei13xyVSoAKofjBuSy2L2JN68aqC",
  "key16": "4cLG9WPNTvbdi3u71nYrUuktHwGV8DKtpeUb2ZAD8mGThXpi8MqJTSXMRrYE7g6Ae3HU6MuTJHAx1UY522pyqSjd",
  "key17": "4P8YUuo6P8YVxoEUXcCbRGD6XiQqbWsCAbziJdhXJPhdhLXW2PYNwDyJ4iqd1hbvEp3wrerLQ4c51ycP8p59wF1Q",
  "key18": "2BALTJmSh1vAsNLyzSgjLXUPA3QievdeP1X315Ku8KQGyY31e5rTMMgXVSeLA4hCtvVi4uQGY73ZSP3ctVuiQzH3",
  "key19": "2KgKEfUdrcQkShjcFZu8PSDmnGqiTfnNw82Rv3zxVEpxDJYq44JeQJ5Nu4hLHerAKrwbJzv78og9RyKA3jaVZCAg",
  "key20": "SRA4KEx846vN6SPcSysEq1eTDZD8NEzfFFnX9MP19M1BPB9KmtsmxSdtQKKD5zJuCLLcKTQm57TKnC7sCCoKSkb",
  "key21": "46oaZeWbQTvavSrXk9EDJMac8gTdhuQ56pi1JRwjYQhr4PG2kJvdQniGWYNs9iKhPGyyL8e5ctwn8Zn6wwLVwrCT",
  "key22": "5SNUWzZVpJQNYcQj7zeeaj4SEjFgBnqzEvhoRkXeqom6V33L9zzg5hFPXHmCFS6XF4nmqaUHsuFxdRpQWFvYrd4K",
  "key23": "35TM4d9ru9SNCjfePhAyaXgVpYVY3vpJotmbPycRpzLxrtE56McctEwpETD9jpRL4uFZ6DjuHL5iANbBhWZYQiRT",
  "key24": "3XgmWxEmjYhV7Kb2LUY9yuExhvRVWMut8UFBitebHHTJgCydzmipAV1mJ91ndQmvVSFQEc7RegyZ8ckHPPDoKJJU",
  "key25": "5XHXQkZXXTD9AGd1A4Aa2nhzR4X24XUrwpq37GNz6wZ1bdevWLHFnJqCDjQt4nn1FM9ci27jukpzV6UJg4pgaY1G",
  "key26": "jy6drhvcJmunfmGvPCEm18yoUNYecWZqqthtKX9yW5PjbNFRoBgJb1jCr3AmgAQPuzhBVpcCDawDxCnCBUJHVB5",
  "key27": "3NYLUbGZeSp75LzuopwAr3vj9JapghnHwFmo23qXRMbSTS9j2q4agq47NssoBQo2RT22V2GBL5mMZbw1M9yi6GXW",
  "key28": "5wX8XeQFyCa2pjTdtGvPwfWxYWvsjcRmQLT5FztkrMWkdJpVUiBx6T6TFM7ytPLtFTMRLzbK2upSzM6YQxVBrm24",
  "key29": "2D2t1ho5tydG3H7tNcdU5LWjSufuTUYWKzAq79Qz9kgiPCNkPXZCnzfWCaEKSnAnX3dbcNhsNp5KQuVT9ahEacNk",
  "key30": "zUtpEjG9nYurN19QmpqRWzR2mCJ2BU4dRnTe4m7vHuuxKNLGZde7JkWaQQ6AE2jkBfAPqQBbhxcbsG9wmQEKisb",
  "key31": "TdLNQBh5R2QyJzN2VG2R1JmZvUsC6RVy644rQS6yzGhNbGF74NZyHB5mPuNGsJF2ARArdcfRE1sbqBoSMrWAtEe",
  "key32": "2RuaSwc2VHGzKqS2Je377ircYeDhjCUmrzLxuJF9rUtUmmmgy5r6fc2r2sm3mjBrwnqrVb8t2hDq5Xav1JUssaNf",
  "key33": "33hgufYJSmbnw1RCV3bKBdv9NS8dvJLxpXNkTv2gMW9XuttAoW99ZFH452sXbYRL7FesENgiu1F6RCkCVfxZpGVW"
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
