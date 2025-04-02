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
    "jbaoFWNmsZgXtnSwUhq7ddLeVXzd9uYMz8GKK1j9L7bSs33cYNtj7BryugC893t3c3DhMN1aDvtqfw5cGLP3fmo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "77pKyNtjmzuN5hnocxifJCBviJFF5KsKQzGc77HAM3iZTcRoSmxRGcht3qFw5RJpuW9KxUkau5xpwUofH5EKnew",
  "key1": "3RCH2fBBLYn1Z1MZjvJg7wVDoUT7Nr9aJUZVCZ79BQzQ3ABoDgL11RrnQsTDMutSPSXf5SpGEwKtfVLvDdEer6cd",
  "key2": "3HAYhxjgts2cGmqJ462tgVriXRJTDri34n7qzdeaHhAsBuQfUVDKEbSa85Dd2g9QjWTVryD2gCWW1t3s6EB8nn7g",
  "key3": "pzAAYcrTbWhwtTxFL61nHsgabSJJWjXy5T5QW6oD7g2asBXdwB1K3SRTZSKftkUn6CWQjrLhMQDVgkb5gsCa4xK",
  "key4": "5NpRpCkP9JPQNAGsUXB8DFJDSoUGjtauyvV3TP886CB52krYL7Jaq5swAM53YRwHzqa6X2YJvrfNaTPKNELK5qdq",
  "key5": "3r6M81KBmFUXX596edweZw99GcUDphmUgxKryqmxb3hVJ1Ltcy6U8hKX5PnF1YSZLwjMfaVP9NgeqqosBW39hc2K",
  "key6": "3iwfq6GQxRvFjXduViA9E1iEaiNcDP7BGrAHVRh5EyuesXMUobZ6QCExT4y5Uc4HaYWGETrYm4bL7oUWcQJ5fFxQ",
  "key7": "3tGyp3DtcSUGJMJKZeBamDKw8xFQYhshuzdfNvmD9QJjXi6E5g5Pwkg8gTYbSrZLoi5M3EwCyHhDnQ5nYuLbdLLy",
  "key8": "2YJudS9rXb3GNZCuvMa4gNmArSCgBEWG6RaLNuNkNcj4Du6buWyFGv7cRNuPB3h8LT4NtHHG6yesouEyp279ghf4",
  "key9": "5XnfJhE6dp87bkvavrnpiumME92AvaxAKus2MVcTJgNVBQ7kq6vfdeXxRYvhDuZScgJaryLAWwqXSe7ayL4h7n4x",
  "key10": "2gcJmLdhPLuzbMHjAD6doyJPCMWgHmzymTnjYcxYJD8GBEPJpzdeuLnDdBYCwJcFmhz183JwLkB4dURfsJFvCEVo",
  "key11": "53c2gFsKAR3cDwGMFsfTwYnpWW7ioYSWCnFC7XSTfzdYQmrbFQkeGuaafRvszAdUc7NosFt6HQ7oLbx3VciS3VSP",
  "key12": "1ec7Frch5fvBfz7sWV5zPr3BtCQ8P5UBDue94vxM1W8LXmeZUzUudi4tw1xDnmhe15SE8dCd3SCmNKF7LGwPCMN",
  "key13": "Hkr6yirss1GhZYp5WknHAVtikmdMh1QkiqvufscXEbDdPZRmrYV5pqmZh1Rz92Xtd6aPm6wwRPc2E7hbfiUvbhv",
  "key14": "2bPZhuN4FkGBh3t8K5os6uXLYrpWjet3ShDDB91Xg7P4FH2E6tuuQFcHoXTFV61Mcg6F361zr578xQSfQdjDRYzj",
  "key15": "4BCAF5Kn2bCyLRe2t6EHNuJufFAugXqhmJbuWUz7oyuoyMv3MArUKxmFwtirQwmZGSzvXawyytqkDZk9i9wQLvH1",
  "key16": "4GKGN1vyGLGQdpANdapA8GYBsK7XtfEeX84kBefiQCxrzWVoeJmVs5y8XUWCoVBScYUrDjTEvyEdhgBPnQ4GFQDo",
  "key17": "4GfhUcXXsmcQ3KTfBWTGoc9hprmMFwdvzjjPuZzDgEPPqqWWHfGQGypMjSZWXjhBdeMQBYwyFm8VL3ovwGnszFpW",
  "key18": "2tcUBxm3hEMg19s8ftYkNVdChKHJL7XzGUbMh8qavgPc1GUiGvDgsbdKHSvB7DXx8vYqo4G6jaj6CXpkNeBTL7TC",
  "key19": "3AA3aC7m9cjNM6LxjKcAyZusaG7Xo4szaNdBSX9BDchGoqaSgem44chWSETbo9uq9h6jmC2UGUqE29Y5R6C2XSih",
  "key20": "3RG9HQKRp3f5KCxNKzHXNMNYNp1RsGdSe398DtQxGCbv2q6rJQeTQWzMGLbPkF83yhe54ML4NfSwTmuLxbsvxnaM",
  "key21": "5fuX4Kh2cTTpeb4WSSdAouQhzmVmq5jXgFogjEc5jLe83miZBeb5kesh7xo51gE4TLecmviNSBygENzb8MH8862o",
  "key22": "5bkhKZpisKM28ZkZTG83Di9dUXKc5hEHGCr8ADoKyfeB4eWCzzjPA57RhTBKhRdKonhmZunyxLr7X2kQerEJoCyE",
  "key23": "8Wqw5Ddooxb1NFnuCENy3id47YmTfmvmyKQQjFePejsiKLcbnDq8DJX65u5WXqS9gqrfaLfRjZceQG8Zr1xYaLt",
  "key24": "2LjvF4rCoQMqusoj2fhbhi1kcD52ZkrUPH2dByv4uDZCZLWtn7cbAMf8JF5sWQr6YsgJWB3YgZ4hCW2oKxr3JF82",
  "key25": "3PMu2nqmZFYisd4M2nSHnd5GbwDB3BGd3TyQuLVevj3VEoB4NCq2a4Kde27vkF4PHMqgJCjnc5WaKAcNLWeGxe62",
  "key26": "49bqyoef8FgEfBqG4jTxh5GEbJZUztCTnBDjq4XAeWi6qhA8ajDBGifHjoweppAYSshTmNskuC3dAa665MUAiRE4",
  "key27": "5bhMGJVSdB2QwBMGHkMdhCaGd68aBhvF986YBs4hwRDzTH1hf1tq1rh6cJkUQywkVvXpfXcaHByxX93btMKmkU4E"
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
