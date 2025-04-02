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
    "4ssM3dNZsqc4yoy7JWbjWgMoGojVzocpa1UMWP6QMF9n9TYDYYR9GidVEFAd44yaUsWoeWnMXHe2iXgyAWFBTPri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59b5fcm1KsnV9Fc6FErYxY9Nr9JYvUiMwytN1V4k33Nt4rzrjcwZJefoZYL7D41GQ1AMtSYXg3y93FRmH67J8khN",
  "key1": "2cPUBHxuPQgqW8ggDvDoubzXCv8Mn53dLk1mgDYpzHUwZDhubnSN9CamheJ8ZSuWhAzhbc3LekurB1wumv3YcoaL",
  "key2": "Ate8dQ17mdmL6nu6pFHYWhxe6i35c7Lom1Mh5WhjKXCnjhugpjtYpALj5iY4qNSLLxeZeGcJpcde4VNnXg1sCB5",
  "key3": "2Dyzxq2T5SELxpGUe767vwMx3JFvjuu2ak1pspdTVgNAWTEaBAE7QCxca64w1BSLVS4BrjbHFveX8inGuc9KVhRn",
  "key4": "3oLB9E5PnLeuxiCBTZnCwYWnx1ZdzVZFwTkTJmQ7Z4QhQhEUjbpVuUwhTDUaDAUJaFnsCfUxJGpPLdh5GVkxUJa",
  "key5": "44u27Xfez8K7ERhVr22nBagxqW5dEUbx9x4FThGUCnT1qm6xp1ipUsYxzHiUZRpYaQGppxY6hgrCwHe3KkHkwFED",
  "key6": "4gSqry9DvwFJHDEeeGjmcBTWtYBx2v5J35ZPbRRM6QB5qreup4WbYmLPZJyMGRJrjomu6SX92PzM5Ur3R7XSXuj4",
  "key7": "zY8AaHra8exavYu9ggBqXrtQx7gL7nGBiTCzrAjUf1UEDEhdKaN2B9iiEau7iCoBUKagoT3cPD5AfCeNNVYoLt6",
  "key8": "3ozhXh3Rp5PbSyFwUwpdSzZwFAGUdTaVi4rcwerrYQAXDFmsZDrhS26pTtRqj6URHekoX4PrW4hfqW1vSnTLUYkc",
  "key9": "66tRppE4v2o2XX1T2ZgsBXsoWg9H68AYKbtekwTDJwAKAucHEjKW7cPohEC3MNoNnLpC9xFmH234vc43QCkWhd38",
  "key10": "4WgzmHYLJnXYePT33NhzouEWaATeWSRwwhTdBwA8e8rQQkfP3XNQSskL1vBXV7vTz7deefFyGmhdgt3zijCGPhoW",
  "key11": "WwJwirNmKZSSsUZJuJB7p1e2Fjy5m93dgN8MvWAYFF99rgfy6JbXkZzj2h1FF6Jsag2EWt1244UYmK3QH7WdW3s",
  "key12": "2fLnDhmoSRaVrpeUGFQhtBHR8Pq6ZMwhKTkSxVvzGAzr41NKx7uyzZBzYrBBfCnwFm7EbzpTe4qSNkgQqNUZwqQ3",
  "key13": "2EQyJMSMyeBSDfVfsr8otaqc3k4i5gt73iE4AmZ7YAncvfUwHiMXj4qFqATtaJkVCZh28UQ3dZrvR222yU2eXQsY",
  "key14": "23QTq4ozcU8FNJBiF4kw6ddGrhJ56BQe6FNjb8YS5kt8W7Xuxc9Z1vwrzbGvHbp1dcmgdddgS5ANYtLvBJu4UULG",
  "key15": "2jGT7dW9isqKSiwxH1KR8iVk98khNd7opzJgpQdNgkR4caP48pda37JsavqoxiySj4nMju6vEp6sdZUZKDhYwdUc",
  "key16": "CR34p4No37UcJyfeeogbbcEhcd7JjCXq2G2AhHBhj9vxYb1bqjptEvipXCHJZ71iZaMwtXCmpqdfawcwKaZT95Z",
  "key17": "3EhZKW8GXb6Qz6spYttgoY2nk8wX9JDQMMkr87XGRqxeaWkyZovRqi81NKVrccf25uzHD9JEB7w9yBMg4anqaHgH",
  "key18": "5qaVWKEMEqEohTJ2ydotebFeYWU3FRaqh7D7KHyWHJMPSWmw9DNCscWVMvsPq1A92dyLEJLREzGs6pQKDF4eBSfg",
  "key19": "B6goQJoihL6Xtp2itxWSBLezHmjtL4YRrLCAG9psa7mUdr9hKee5mDtV2iPQfpKejG5kvNsmvW3ZggUDz4DdHPD",
  "key20": "419kZbsZNCvM6H4N39H63zVZ8EzfMc7AKExR4vW8VBSDCthBFvEWWU3mfMJVxEifNvYp3tXbjpTP6a5R1Wy2Usu3",
  "key21": "4zWccSFwqFMqywNtKarZ9Y4QBDc3C9ePwwchYDkCYDASh4yhfpWjyzxt5vJiLUKbSwm77XZa8q693RkhA399jgqs",
  "key22": "3DJM7KjAdrjmwV9ihidf2MQKcaXQ8aYLsarVBV1MKspvyR7eUytNE58weFtKArmHgByQZZXofckt8hZssB2CBfRe",
  "key23": "41CZmSvK6iRfPSkaRWfmByZMx3bZXRewCzNWjtgcSPBksMTJQqJM3UUSUrSVQTmRDE8C2v7r9fVcDnGzz8rHyhjZ",
  "key24": "4Vgxf4hCP5V6MAfB4V9fsRBd76eUXZjSnBrANZtKtBF4wpx4gywTC5ymjAF6x4WhHzPwwDEW79rfCdPefWQKFwBi",
  "key25": "LF987DdkzsJFjarsYajqE7kfuD2DLERCQHhGMM17mnz92cfxLkga6NqfsJTKzCS2kRJS3wGeKsKwQBrJeriaAme",
  "key26": "37v3ekMnmgeAhgY2dFrnMJiTinRVPko9qrijdwu7xKDLNy9KXZWGNXGabEK3dpuFGwDkH5Q6i98SgU3qsD9k5rd5",
  "key27": "4nDgvpAfh6MoN7iJENqTauG71cP6e2cBG41QftkPRm5UCnxQdCsgHt5YUxYLR4peCRmC2HLvFSwo8ttYTUQA3zi3",
  "key28": "4QfxxbomX5fGqseAGbDr6TRLQhrKHc2eT9MwXeMJx2URdCkGbUXDTTHQ4NvMu5Xb1YKB8j8vmBB4m56wCMt1cqbu",
  "key29": "34EwfWXSoSvExZiCSEpVDaLBXiq2U67ZjtUszUHwK2XMjtesZDpPm95yUzwkwLwVBTWkBNgMehF63JoZ43T6u1er"
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
