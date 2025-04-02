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
    "3JWNNnXjRsMBbyzuKzTVYRnbV429947GQWzwW3CKXyeJHGtUwY9Kgf84Z5eqtxSMDX8dGRk2eHXWnWYeT6j84EFr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TwrLSsxqQjUt5qq4AN932PGB6pqKoAddtH5YrcfjimQtiDHPBLcc4T1Q9AqMh5Rf3XfhwwZzuWRzDmhYB4j4X2N",
  "key1": "3Fv4AS2cJxCFcYg9VbJdWxpTBNmaYXfaYiayAzJt65iXJLguKAT1JCq4cc7JJbSQ6xZvLo8BrEBykG8fTZYMoD2P",
  "key2": "hHxLuHadKGUZErqvs84wFQJjbf7oUsSHM6gTBtqaazfwXBKnUzv1ueN519tDDGNqwLaacfALBdGKp1KabodLtFd",
  "key3": "2KxydbAbKNJLgXWLetGVG8Ek6DmDHsmzBtg1PdoA1pz4ejSZgJ7XW8Nm8E3uVdYDXpZ5w3AYJJqTjoyUpMbHbUNB",
  "key4": "4pxdJU7VNFMoy85f791cL6QTfyyTZDrsxZuRXJMJUSJMFdw2gkBovYCpRtkUhmiAdFNH4xL7AfeCDYAQX3qw6h2Q",
  "key5": "3owwxihFwRng1Ua1uZGNRysFzaVUY9Z32YQJ1fZgJup3afBcWnXju6vJXQPPrXKNaajJukvYZsKp4zNBFhMfA36a",
  "key6": "FCENP1MeXAi5v6nodKqULD7nbZWU4gP3QsqxstPeK1to3K4Qb2n84jJWnj57AJ7oE6CMNL7P66dbYomYULgrBhF",
  "key7": "4rwtf8vABVsddgGrETuenTJdwya1FayowUvZQAMDZEykz6Fswi7LpwjaX9hQFbxbwjH7rgdkuwCAuDtQrKxu1zB2",
  "key8": "4JNNW2c6VxTbpbqP6Pv5BPbzvrpUh7ti3gKK3QgVsqNeE6NRnmn4AB6DiqZf2ZUsdCV4C7KjvbmuG8qDm5QZFqaP",
  "key9": "2UgSYfQfR28y7GNja8ujrsvWWHNYoBjgyBJLsBcDKvKCouLYvwhZ6U1i2C6cyP8Zp9gWJicYnuteVpSJYhksVByG",
  "key10": "25gUfX3NT1gbC54CNRjuiCREPh8Zf6KydKLy1JTM7VqNYQB76HkZuTjWt5ah81qnbRx8JjYgJf9EPMzEKtGTbsU1",
  "key11": "wbQFMUWCRhYPKJXZkE7niRhVWvFDRZfe27QxqQbf44FGR8mpk142GBgwGidbLuJoPgfz4aC8ZosY9Kn82iLUA4F",
  "key12": "55AwLHeLRCbzfD9REzWNA8Dhs8sXuEaLKm4PEerNvzx8XSBstrPJeFvHxBXfeT1CsmxqF9xtUXaxwrRb15kvGUDZ",
  "key13": "SXrgCUNu3JgL95B83BHa2KL2PMjhVkx5Lrni7gSmy8uWZEinUayS7w8om6NmUh5TUke1iKBy1CzZNYAw8Z3iGBZ",
  "key14": "Ajaw1wYMovQxHEnENcf72wgcGY64cFRCB3t1cZKZcQcBXpz3zJZSqrVPYmxDq6Qjhby1XDavVReTCNTTtFeaouT",
  "key15": "2dQGwCuNqr6QKj3acAeuqVUcBDzfkxbaMZ2G6MjNgCLN7Qqct5o6utaQpydiUz89UgFdkEUSDgwGZEcniFAvZMfY",
  "key16": "2xFgi1Mq1d75iKy9s1RCqostQYttYGrMWVycCfYwEFtBZRR9HMjmWzKXfNZkAeEv1UfgAto79t41ZgHs8TY3efQv",
  "key17": "39f6AcDx3dpzVc3572H9Q8m5FP6WyyYUu8yqrHtVmDS7HM2WXRt7XxTEmaSGGCtdp4CZSeHoJ4CoZmHnnh72RNPN",
  "key18": "2Vq6MLNYd5EgFQCKFzDVGMuHJdFSzG7ZiDDvtSF7f5CeNV5Pk4Y34n2Mj1RYRLgcMgXvvcr2pn2gtoJbwMkYRaPp",
  "key19": "5LYzoAuM8emgkddtvRrd54KRDcd4TYCsnrUKW9Rci1Y6DZ5PeJQk68S4dgSavz89jg1kUG2Mw8kpzfLJrHT27Sg1",
  "key20": "4TufjHn8aAbgmnd8Vwbk4Mgd8VTejbrqXdxbweFaCPJzYCWrWeZg9uKDeGos6fbjss7Hw1yhRVzht58K1tcFiZze",
  "key21": "57qfn22vZUioWGatYzpLNQL7gc3h4rK5UVQDTWFpBZ8tkXnZc7toHPrUMJs2kG6Ly8xJacZ57cAYdzYeK5dFUcWa",
  "key22": "4sigkNT8Zpjg3CCSKVmkE4H3Kd16mFcLMjfymL9NTPyYQEfnpuCwa5WeaiYSM7kR865fHQ64GYBY4FLnft1Kd23x",
  "key23": "4jdUbJS4SsJJtyW1Z315a2yy7MCPmdG22cpa5pGy1nYjyhSDVjHz48oEgqYuTjMUXbg9jHV9tpkYxBc9XPAM8uYX",
  "key24": "nQCoFmBDS8qhKw19ZjFfXfucjknQkmHB1FFgs9fVT6omawce6v1EDuf8oGRwgK8KyCaB4YasoQHGae8BnPzT9MD",
  "key25": "5K7akHfL3r46Gwppd5RDas7tMV4FYLGPpcN4C5cAMLvC4dCDNHZmu9JJyJpCjtBQJXDNdJxzgygoqCJPzpNLogYA",
  "key26": "48EdGm13KaCTSNgUf3LmMqd6MhVaWRPWZuzqVjS9HehUXNaYuh3d7Q6fHeWCTfJ5BzgxHFhz5Zdncb57N1oXE7Md",
  "key27": "4wmca1bwNBRds4bebhknYJYBY6ZAKWXsvUBy1bncFrs7Rym6BsQeTPYxcsrtaWvzkd1BQvfX6sbHhM9HrpaRvsWV",
  "key28": "2XfVwrJqn262gzjb159YunwhMgFxytAL4igEcWfoK9UnYRdSaa7zU1TUbS6p7gtYqStuqiswmD9X1i6cZPaXjc3H",
  "key29": "5bikbnRXnLoC8wh87FkzCA9iMesH7nYMouEDsnn1Z1nY78wX3mty34om35qEwHhCaaQCBTW9dmpRWdb7xDhdDeQn",
  "key30": "26edmbDXYAriks27i5YiPxXM37nPCxSmvnMW3qeKWeJsvmgkNU98nptVvHAzsYACTiFd3Nh6kpoqLSfmCMPBXAdG",
  "key31": "44rUP8X8vokcJmnoaASjUXsMkzujAHwcdHrNdS2Vsetpp732iFeJYy3uQAep5SjLpRL62BiVLUzbNjnSWTkBy7xp"
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
