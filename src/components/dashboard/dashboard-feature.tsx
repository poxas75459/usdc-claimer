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
    "4Mben51mwezwJrkjZFk4VU6dCYnDyzzt6ij5rVxwGru6UHpU8TBzMfSjvpA5FmCz3TRPNCPDhWgrmh1iVxz4PXyZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xvPehfQGAw9dB6N2XzZJiqFEehW2DtP6cGLY5Bu9nMcy132WRk9gpa8g3UfSC8FGsyRXUThhJ7rnw1zvUNgxaK2",
  "key1": "5cUd4AAv3MqP7UmT9qLNzS3YLDsLFnyKppcoEb5YNSHLiCCqqrNUxF4wWSpzHbwmu26dMXyG3R4PUxT3NR4DFk7L",
  "key2": "2AJNhZ8SJC2tqU6jtWKvbUhUprwMeedNic97DG6NWmJHN5m6xeMWnJje6TWP9vcrAnkB5pZXjGBMkuBXjm7a5vzA",
  "key3": "DkyhsiQr7Fm66xXSWLSVUQpvCb8iYoE9oLs8LDMBuceyjpTNp1v5XY9napvtPEbYSkYgwfSEpKwNZfkyQL9pdhR",
  "key4": "4qEbzXAny4ae9DXdF5VAYWD2M9aCzJSGdyHbBR9xfwMnqZ3QfHaYsHVTx29EMXw7zvHkyhCYCLvBZxKSMK5fa5iP",
  "key5": "3ea4UMe2M3AuWdyshJn9tBd9KAp2HsmdbxBUQBxTJ8knzFvXgnHa7QnfpKabCTvhAB6LxKq9qFxMm256Y4nwcMny",
  "key6": "3ckiMDe37gRUGvVWQr9QHzdSfrt2ArbihHmY8YK7mgHKLqM4rjwWDexWTXXyM1hSWTWi3Tbdgm9mX6HhHkWy33Dc",
  "key7": "2GbeM3Cx89fYPSNVPPCSTuAWKfjUAtzJfW1Toc3LNEVRJQQtfPZBNceXLd5DeAK3WtjHq4Fp1VRKa29V8xfUpBXf",
  "key8": "3BMwu1mEzXBmzkbhEnZCsX98Vk9Jxr8wYY9SXWCHaZKXnXk4jMVJRN8sUmgi2jF7XsiJgPfFQAJUHejY7P6QY5rn",
  "key9": "4djAxTBWQ6Bbb72wpaMoujjWU1jbJjQmqaEhX4UhRVxFg7eiDE7Rv76HX7RUpfebM3oxymTy6ckzJqcz53cVMXN3",
  "key10": "4dRZp6x5MUUU1yBhxoV15Le9ZzezwdEXykmR7AqS4Bc84Y8MqhVMsQxe394Bzv8munZu3UrF1yiEykLSydwNNhbS",
  "key11": "5ofSVR1tTofqSGWuChMTU6i9pUdv7eEpBXRHvkWcrkFovYhfoEtFbo8JAuKT1NCnEo75Kyy7RBgMJPrD6WGxPcVa",
  "key12": "3fHjyDYLGj5q1niinDWMRi2whDZL7cSwa8cnDNkWzXFL3kcZLuibHgAq4oKahf34nh2KCx2RRVRPchrqZByW8VHA",
  "key13": "2T73BoZJumPFqDdmsrKGdnnvfXe3z2LdWoV73eR22CnZPKpxPviGRUqFBnhZgoqnxRpqQJYEdmd4Vc8xbkYSuJgn",
  "key14": "2PXLexzK89Nv6X58SPZxADW2rUFaykmyCWGHGoVCdHGjc44qqUkrA65NMBiWUXod4k1iRBWWWpBXr91Kc7vRAp7",
  "key15": "9TZGGyH4WT1VZfiuatHfLbuW2L9fd2nP24gKQY62aQ9iF1jQj1AEoNvwmWyKPVhxPncbdXpm7nSLJZAGh84Stcy",
  "key16": "3ntpT98HsH2reR8UwG5rCPUuSxqUE779i7EoNYNwSyWFPaDzYGxwvvBkeHsFdXFMmHHFvBAFJjH88X9t6bGdcAqW",
  "key17": "2Y2bSSADBqvZLAyQffdKquek7kDkFnugNgwAFT2Cc6iJ3qk9H5QwsRnb3EbhmdfobvUrTkvuLjuAZ9YA3ZKgUEcP",
  "key18": "41pyXq9e6foAjM8Zo2tptEEUnP73MkFGWiep9nzYSHs5ECd3MWHULuixS5GXUnpfgHabjQfVTDqZabQUAAy5aTDM",
  "key19": "2PCVLGg3ykATFdMeP4FetXFK6wWXq5TmWJhxFK82mrBkWzHsZtuJ1qtQMuZcdDZYsD1FrKwY6mQsMeneCFrZmpPX",
  "key20": "XrjjVScY1S7UpH681EeYqdX8q7sXHrncWjN6YwVet2VxvDpoGhLmFcYm4KS9Fwq9ELAY1QjKP4acCJSmbGK1oth",
  "key21": "2NKiUdh4yNZxWXCXJkejkn2RBbgujTnK6MfTRLHshtHPY3Guz5Sfu6g6bkXvYGMn3ttE8Na4dwXvQwFR1ZuFJWSn",
  "key22": "2KhGMfnmnRprzX3tuHVNdQvvLindzEK7MVZbuCz5RbKremPhL2j5qpZpce42FriZ3ZebTpcV2dyuVhAVZKVUMv1Q",
  "key23": "4BZ7rSUaJoXB97oz9r4EWQ3jnuJPWXZGv35hysCQtXCyk4dBFBgjjnz6PiJ7peMkez98GTWz74RnbMQ6AxuCAuCT",
  "key24": "5srHzhqSitFerop8qSJRgZFmf6CU5fqjN5qMkBAk8sDwtZnsKV6bWAry7tF5JJCHcrAyrUo6equwFoQsAT4JXiU7",
  "key25": "1UYNS2Q2LBLsdWja9FkfKZhFKgs3o3jajTdgLxJZtSbATn4S8BkVi8gpiJuZfqJAXKTTnQzr56QE9Lt3cHYF3Y8",
  "key26": "5v4uHSbkiKFQB5vjWvcAicAQEqFQhmx9KNjV31jVJnoEABYs1fgCMs7BDZitfH7Dw4PkcciHHqGCPLkSwc8En5HE"
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
