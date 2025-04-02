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
    "5BBiZjQtn4LMaK4ChMCMP8dTAgCCdN2E52G1qpU22PHoheyhTQZRUSpEz9Lw2B1qrQf21Xhq4dFanYZ8yTwF1EKL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32mDn9kSn3QxXnJ7egjuBwUNCGqpQF3T39PiKBBV7o6XnchkbuE28LVcfeHsXWkYPB4eTYsab1SaZ5PsRKPircHR",
  "key1": "2LkKGUYABNLuVkJnWJJwixE58kAcPN8F2cuakaJohGag9PHSpyfv2AQ9edT1yjC9t4WgKXqAHrLAfEYadMQgcp74",
  "key2": "53QLFpjE6EoTqttFQA3KT8W2pxacZuzNEGY9fqUCrQ4rhH1vkQn7n3DgapTTfx2mH1H7XzvFEvKbUhgAPGwvCq1a",
  "key3": "3oq5KaeL9xruQsazFsTEwE3vSNFb3TYxx7X1rXskHKWnR5pPqnYcN7YLyasEkRZojiZo4bWG6S3GM67PyZxzzQZg",
  "key4": "61vkLJSjFGvDXtszWyRuvfK4fvVTQg7WqXN4Jh7pACZvLNuXMuUYE1PKRigmVYsX8dAedDxy2W67FfSPmfGi6yw3",
  "key5": "31tKWs2dFYpjfkLMvFjsxjuxnwCQjYMXeJQvs7aqNJszN83eENHYeKRQzxysnbzc2PHRv9BfNRsz9THMXnEuStNR",
  "key6": "V5oaMbUYe7MH8wAtVYV3y5wKwvihibFcoQznfPqfV6KUQfWo3Lku245p3WK5XfoPxMNVkjdXSFtigRwDvzzAFvh",
  "key7": "5Yb54YxEDzTwm567kAQqUNHc6RWzc8dEm2SBtELDHZfDLqG62yNgX7VRi8FW5Y3LN6Wq9evxDq7dajSkyjFxsY3N",
  "key8": "5Cy3XVLE1z4eXFb1FvnVPLaJFdUtXwv21TyZKAhwXCPxoiPyzUyS8spjFvp7FVZfsupRwFGoekbx6QQN2JAJEQcN",
  "key9": "5uoDMFuY1C6vYcDvn9r6FvHw4MVNkbwFPsgLkfXFFp2P779PHEoQ7oQQPZCbcgCfhxdMjRKiK2xrCm2JhLPorjmg",
  "key10": "4LDBS5mcxzNLDoVA9pAsByskAKzrZUU4yuBesJUqXTPzJGkJouv6pDTq5NLqjKdUs3RQkVWZnjy1QFhQvV8t2ARh",
  "key11": "4nDJQNCQVjdVeBgdk5i31LLcHC8WPmaurTFjkBtTAaBkCVqzPgXVTbw6QfXXHokbmGms9hMGBNVXyLH7CsWvkQyv",
  "key12": "2iwQztAjUdSp5J8msvZkLYgtQUtarUieR8EUQ94yRUHP9B9dEkyYjHNMmMcNyKj3yRcQLqiaBQEBuQ2ruxLDS5cw",
  "key13": "5N33wr2ykytrrSHxGs4Yk3XaxvXQX3TyTvqofNWpt6CzrNVWVdqzXWWa3L4nNXcN8Ev4ay6KqKDCzU9w9DBR4SyS",
  "key14": "2RuF2qvqbxPycmPZkcxjp4VwLv4rUmACbuQwRNPM8CAzKe3nBBTMnfxm2uZWtCqmYpwCZABWG6BCM8R2ho1KrVB9",
  "key15": "3DwH83udpcqwGSPzzz1tsEaZJZvqfAkVLHodKbEsC4PUg43jKYMHdacanyfxfzZ4MervVDn7y9nR9TbwnW7RRN6t",
  "key16": "2vJXfahhb1qMg6y8x5KLJDvH23ouokLnbQTXX11Up1u7chpGwkN1hEonxef1p9S3SKLQNxTc6gyRscKf4WPnZBec",
  "key17": "4HkmWezMinEDSNuA5UMRreak1YAnXhCSwRB6eQkkBpjrxVH1aMx4p3bBAxuWNNBKyTBnnN2ychKHWN1KbnA7Lxvk",
  "key18": "4Y7QLq3LJJoPf8x5v9jXiiFFShCWxhCtcFGXceLBok3a2unsJJeaZiKKSeNie5MDdbdSf2r8qV2MDWu93a51jE6X",
  "key19": "2LhhXkNAAMCdBhm5vVUyJUaN8f2Uf67aiUuiKTmpxdyTe1DGdeCvPEPNGCGYSoNtjnxc5LswP4MPkTMq33ZPVLg8",
  "key20": "3zZMZ9XSbUzTabzQvbQvBBcyW2roAcpqaN3BagwEFtEC5qzznBdbCVucUMrrSgxAtxzKtdXq6km32H9ufuE5mEkr",
  "key21": "5kScBh63DmBZXtZYywa1DGytSTAicEgX5mHJ5YZHEayQTSQ62WjqwN9m5PVc6DZje9zyqTHU7A8njfpqtM5WHQcu",
  "key22": "4f9hfr1Az8Cc32kgif6gj9Ae5bVMGKTdnVTH5aqnn5UTGL7UD7xwiStr55cUkoyG3zJjuKkjBaFjD864PsVj7w2Z",
  "key23": "3xmBp6ToTw3bUYGREw3Z6NMeHuegm6bKeXeYeXozix8sUAfLMKhXzgc1Umuh6uyA1ZiYL9iPVTvutExSJgxxG4Yf",
  "key24": "Uh9bxxGXnqcocX72LEd1XRnmT5UuEuGLJnkURtfBKLrQPFEircAC6Lr4Mgr9oJfq7Gey6RgLCgr4BAtip2qxyBy",
  "key25": "5aj9fkmo55TJRs9dXvPhRtrC44F7HBvZ8pzX19taSKk5wCHV9ukCLnc7Pu92McwP3Hxhhh4uPig4V4mzqBVgyz7W",
  "key26": "34Ypz94XDXFGhpSfha5omkbQvaJqVYcUDERu2z5CU2CnCVuTZiks3Kpa4kbBuWEdhUNULgTNmrzW4oka19yvUBvC",
  "key27": "5eHEXVzPfB56jVg6Mhc94SsKx6WCJ8TVr9pqDSS1KfzsRxB2g4RMYvZEwMpmFdD5g9oN14dcf72cQfxK2R1WciKX"
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
