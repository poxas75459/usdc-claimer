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
    "2iX93vg8wUsECkM5PKqN8cMob7Qjc4WL6Fwp6rpsZKF7xKN7pUrpQoQi3zQDBzHfcXqFMBsB4puihcx3VDfZqckJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63QnGDBSqQK7dntVHpq6E3a3Jb3oprzqM9YuFrpPvcCKbsLAf3w2bSe9XTUxfegpwuhzCzABZffmnU7Kquu76JX8",
  "key1": "2u6aVSC57GkDmqqeTBXCNip7sv9JHaHFrdEjaJQVLbSaBycsN1o5CpZp3rmYY4Qgv2QhhsApuUowt7kjnCFvoyaq",
  "key2": "3Wy2Zi4NbsXTXQxBuSHgkNJ7VAKnwQHRnGbRjYzq4QuvXzXTB9yMLr2mKPCYeZfvPSrk7xvKTrbykMK6wnBbmsiS",
  "key3": "3NLMfYsvm4qo9RtT38NuGhGn4pJwD2j8NwsuEq8RKQU3B7dyK7kKEdgEwzJnyemAGMQbhJGh6keJMLpzG2nayVVy",
  "key4": "3zR3yzNcbc9Bwkq8cg2GHGU27oAk7a55AmcUemGG3N2u6WpxHWxz5FsUnpW9imzbZygF5s9z1pY2yrGybtXMxQTo",
  "key5": "5JgLAmsgasiBeyHpgMThn2oYWTEiDUEWvrXhjV42RqL12tJtwTd1N9HP4ZEZBjKToufJzkqjwwnwQMzrsmfH7ZNQ",
  "key6": "2go7edR6bzZrNsnUUy1bb9EXJh8LzDGbtALALEXajr7oz2r23Fpbt3rQygrqbUffgiSaZm5tLiWttMEJXoiZtJHh",
  "key7": "3vTo8YqYk69FHqQMbpGmTyzwRKVPF924eSQ4zpKq5uvWuChwqo9bYQaW9NSZtbRKEbbq7Ffq65BWVF9qVE1hp83S",
  "key8": "4pf383xp6FC2cH6CoyZVk8AHbjwbodLNsQW3MjCFNWY4m8UCXn2zZkjxmec8rp9ybT1TdRVPdpD5ehrwvkoEenUU",
  "key9": "3Poc58UJGJNmWhqWz47Agi2CegHV2WW7QoYZmAvP5K8FXbPvnRUB78QZNPdZ2NPHALssShhUmpGZMUh7NbUQ3tXK",
  "key10": "3xHqStVAtg6atgwRc5ZB81exNPsQvg2tRfoxf67v9kH8nK4L5JiQbt5hxdjPszundYKaoHYx1QmsYHBgLzL32SAX",
  "key11": "2hJt5nSF7riHn5r2GauwonH15AMiC2ZYnzgag7RF4RWGJpk3UyRwMEx76V4nkffWZ4NPa4TSWcoYxnXJxoUaWG5M",
  "key12": "55qdXu3UWbQbYLjb3KYPN8CgMWwu38iV7zxTfAZUXfSP9TLLuLXa5eTQ34Dt2rtJ9aSBV8UPEQqnr7jTo1fXC87V",
  "key13": "3aFGeffht92CGMnCoooB16ptKJdibVvKNjJXGpuAw1taPJycFyEGLW2UGHjZRCBNtMiwEeG2r1WV9sDzbPEqnQnA",
  "key14": "5XJXeLoiQR2XsQ6tLLGuJiqk4MQwSHCSpPx4WxVStSYXr1dEkG75gGHFeLQSKMRKrtsKCVwFpDBM492EwgRBvJnj",
  "key15": "2yJ7q4q4YnFYbyDTYLrKCDwYkcPbL8XtnQDqQvXerYXo95NJKt4w6R84AA3miMh7UotnjhDEFduR8QyvcFD7j8NK",
  "key16": "Sv6mvYZrMtrGcMxym42CZvbYPyoL5KYVDMDbFMhvxDCnfP4nePLd4dGz5RkfLoWypJzCzau9Vd9uU8DNLFQjbGX",
  "key17": "2Hau64JSkZ19y65XrfeJEiorQiyNfNhVqEmdtuNiYMBZrsq8oTg9ZLM2kCSg7qgKeLYmSGPhFCVoiqam95gDrfJJ",
  "key18": "57Zwd2kBsMhkK6q7uukT5SNMw2pPffAYWmYAazqSWGaQwMytbrtdEKKLLENNvk9yp7EaUqb2wGWp7eagWfY3o7MB",
  "key19": "mKTpdJfTUxDDies2ah6S1nTpGXUTA9SDX8y3yCJ7Ek377AweY4fDWzm8pmH95oa7x9r512NuMBEFDC9QtWSPR7h",
  "key20": "Jv8YxBcZpo7jWjXezctDExsNPA8MUzLaXEdMajh57UogukT83T1kcRs4hpCVtziCw2JoDV8zN6kxZAncT5QKyTi",
  "key21": "3VszpSgFoT7N3GXsNErvdw5P8Pd61EXWAffwN15KhikmUFMDNxGSaVorQKT5qin1PKpUXK5FuSMvK7SNNyfSk3ms",
  "key22": "5KKHdqqCC91hxUAp2xHkVucyCKSKb3NFW71UZxNFdQJvTNNcDuBGMPVuRoDc63EoWMvfLSpMZN9r8M6zbYt8Nx9E",
  "key23": "2pEjEK1CRw7cUHGpLHDTd4sNQEFevJetaLLVrPLnLF56i8nbkDK59UGaeo7MBNhdXkFcyeM3kKkyrPkd51jbWXhY",
  "key24": "3yUXRejGPvUR2XU1wLSD2FtiTZPpURU7usNnoHdh3QUfgZLB2xnnJ75rnm3k8GM2qvP1cM1c63196A8obKojk6fR",
  "key25": "4fWjqigFZHtMjw4Zs9w7VaSTNXH2hGYcogCz6YnxW5eDr41Zi6hatjDj5UxTZkNgft1j7Z27ofpWVKhCzYidfkCb",
  "key26": "4enxWXEktQqTHUbuZ9CHNmwfi3jAHWw1EQRi7tGmP6r1JKLfs5pSA4BMiFkCv8jjhUNKXPjmJqKtVVBZaKinoRAj",
  "key27": "4qpGt1c9iVZD4EwdbAsY2VBTh2LPdzdmBtmewWuvgCsEswpCVxgSnCC3XVjo6NbifxJdmTTtqT9BbfDggFb9rHxn",
  "key28": "3AKtWUDt3tohGUMmoAiXUKxw1hSiVtpEQrqP156gcaFdcNxikAqAmhsdx5cSzno1E6HdzcKEipz66v8AJ4Fd3qDz",
  "key29": "2o4YVGdwAkhLHvU1ZvepSULyq5rYv26m8zT3kDbAAMqLXh2BJ75j3BBSaQAgdCiCgEmhe5EFEji4Qahmf7sZQpEE",
  "key30": "3oWTa5pNsYvEiAWchReU7gkJnjZu5FHu9meg26ycAB9JwqXqemfwcRwakhV5sBNiHRb61Mwt4N3o2sNGmUhXkz6L",
  "key31": "5EdeyqnezndgTH2PMqLvFEuMPfZhF9wjpRkQfiJEUK8P2zLrYxEkM6cUoKNJySnPSqyyAxfpa4WVno5X481CNmim"
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
