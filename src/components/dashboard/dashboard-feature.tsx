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
    "4jLtiPpLmiDuUfarhMf18EH9a4dSQN2NkoPq9p7qM51ibnvH9NePZ8AzDeBk8qrQBcwXQFsA4Jw88cZtuQXj8uir"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a1EwwfLpz72JbGzKRKs7RinUfaCdmM2JFotmHPNm6ykwTteC7yvXvX6pCpSpcwyREeTkVVoG67cwD3GmG49MY6e",
  "key1": "3XGoWNvbKY6XY8CH2FWNHpXGEM5LxY8CuZEWfgvprgSf6UrefsYpYhUcExX14BBBp98Mw2QW4S2FNMwiLsrhypdR",
  "key2": "2JfoMJ6cdE8wgdPo1hnMFWPEvdgR2kRNSgCKpiu5hCnoZVy1a6EBDqYWxjsKKBCkBryQooyhm7W7VGAxD18Af2Vj",
  "key3": "wDr5aXnpbgE12pa5TTzu7gZ2RVg5bv5EMnP2ukbhEL77CGHepfSQJDyjcxmE5nASE4JbThexSxjF5fvHK1zCCBS",
  "key4": "5uap3kcKqV6spoVqe7rus3wDn5Vgp8GAzbXwNbMLnCEcdjYzvqNc7YfQBhRzi8TTRTSpngAi1LXK6S2KswkaDWeY",
  "key5": "3xK8mVDgtos3L4swaGVhtyFGqePEtXd4bUBZwLw4jj6PXgcsiDA4p38YSSYxoeNNC1QZ4iQG6rpMs1MmRu35Ccw3",
  "key6": "2iiFhRBcuWHu2SxHUPPg9VfZcShU7hbEGLPm2YR4t4mKF322tsEtork6VB2UfWnCGUno7pbmN6N6RSdFe5FDu4rU",
  "key7": "2Z62T2Qo8wpQieB6foLbfLvXyxRrxsqhTGvNXUTaNMMEsg5tDv1313fYTLkqg6UUso8vmRfQ2wqAVKwpwjWhHQ9S",
  "key8": "2Jp7JPFJ5tAXL5LHtWzZXKihPJYh1YiHSDXASeZVCXATVgu24jjRe5HEWPdfKVkqwYgikWBHJi6oZMG3oh17aNoW",
  "key9": "3ZiDiw7kU3jfjNedoScvhCKueGQW9WdLa14x49QpWQP4rM1gXJHfZrCQiAgTX93iQXVN83gVqrgikuAi9rxEMGXr",
  "key10": "2c9ie3yoydwR2jiLkpmP1txuLmKEkf6fV4VDYzoaGwtNSAoo4YT9dmoRufHEb8db4f4XQadf1JcECLPcibUyYzUN",
  "key11": "695hfNwsV9Q6MKRtZvNLKEYZeWKDyrCyjdxGmnxtNwxVftqntBQseGStQUUHyaokzd427bM8JRbKRTirHpSwR1C",
  "key12": "5hDiuVRtqW2jB3BU9gm9ixBGSQ3K4RaMXKhoQjMpGkykmKrEx6vXjCa9ttjgQZXaZuYi6R4NVvLZaQnDHPVTRDaS",
  "key13": "4R7Btg3b7ENMGAAzbPdTwo1Yob87ALeVxhWaXU3DfAhbf5wZcZpoBv9WmnBLaK1JsFxtE87x14gS6Z17iD7DLQmt",
  "key14": "dWvULSzzWj2nhnKYisCerbWhrLF7dr1ZrXz3691t5hZxBAcATomGKn8qAqjc6w5jeKeJi9Q5C6QscU3jKtTcEWw",
  "key15": "5HaoU6xgWTiXrjx5PrfPmNCg9CiD761WRe9zEvj6zt1YmpZR3Ja5BY1tuQnDSdUgqkbXRyGoBpdKxWa2FNDiLan9",
  "key16": "5SMch6kEnhqNd3jUiX1PBLVXTtWfGr8eXVQKmqgDLBJ233p24M2RiF4kdYumnedFUx1oyV4peFq5ojRFT6WTy5VM",
  "key17": "4gXWqMyfi6av7ZEcBK3hp6VKGNYJKDU5vcoQmUHMHaYwJbcsa57Ue5Y41uyVGTh1urDbkcfzMdG7QGs9RKxAps3F",
  "key18": "26BnYhRFP72Ac8kzj6oVyNAsU59weifZbSJoj4PmmYGbdbmnuNLD4wYc4aG1qdToWzxmHmF82nofj7qBW7bth3ko",
  "key19": "3n4jxx8VQ55PaBrFt79DnoTzCNbyy9RWQiAhxmTm1AM3FAEYahkfr6yZnLb5L5YYsPM67fT9Cu8rUGeHsjy2p5T6",
  "key20": "4SPsAedkg1ybhm9DkBCGNffn4owKxhMViQzgNrwWiCBWRWjpckrrykf6N6NVY7kgmKXUugK2mZNNvPYmLmverT8M",
  "key21": "5owx9S5Pqrz4e8GseJfQ9d1xLyJZN8UuBX3tY1MW5h3nnAc2uhBT5S7FwbDdaKi4fRvvaEPqDiYxynj3frJ9QUfs",
  "key22": "4bxhyNxn5STivzRUMvTfGg3FLxYr5VhwTWhBErcZYP6ytSGEvpS4BsQqRLC1USCwZ8ZgG8EE1CykjJj6mABnTvt9",
  "key23": "2VCiDccwrCm7ZTNSm9WmavbbUPmpHW4ALkYE6TpkcvWxuz4DLEMHiVmGeCDHXLnurnutNaYFHGxKypdCCjSk8fEH",
  "key24": "42J58N3qcygELNmuqmyGQr2vf3NupeoXMf1ZgNeb8umqTJ4qxNi6ZDYsomrMMbs7sMP13EFqnA2DYYS3S2EwhzK2",
  "key25": "5mYemsMvgJxKYDhdiFiP2cdtWyKuRVGbNrkRPK55ZwekiBtnQhiApw8FQLvTFhLEbGxHbhCYqYVecHjgVCArc3Zm",
  "key26": "XpwBNgDce6yLqSJpt2oR33uXo52dRjjasdVYAL4sMrEZ7etCoVedQWwGc5Wbuwp5UYNuniTBXBAqq7aCsZg4rKX",
  "key27": "3HcUbUiAk3kkMtvLUCdMoWUuB7S1EKsvFDZ1kNBND5XPoYMtzg9vho9mjPeednmZAqoB1D5UuyNdNZ7V8HcnwgjE",
  "key28": "4t4RJM5eSyVQBEGv7y4XBT1G7aW71bPEgL8DbxsP1fu4myVDHUuH57pGyHdwMzTTtiFyPYe4fpWXjo5XDZ9mT4zg",
  "key29": "3bwBJBtLCAxBhvh3EsSj6vYErxE2CvKgEMY6WP9pUukqx6s3Wvad8tpafwZT63G53bch1X9D1T8E3A7pdDMaYVi7",
  "key30": "4bY9puRPF4pEewrLsGb7fUQPTBZLcYqNFkiPbwh8zFN8xia6wD7EAuDfUFyzXuKZykcQ7UGEed8EqK8CaQWxWbLU",
  "key31": "2tkxuKNH9NR2qaYDGXh5bHB6X85XE4fMSVcidEGh8HQnsFp24Gn6TQ3S7r9jMAZQewSPMxPCW9V5pfT6wYB5HEe1",
  "key32": "5HXYXnV5MV7Ypy5GJYSqyg6txbr5wXqMEwRAHQQZ3ZsMaTgj7AjfEY4eYWSc1uNgSS8ec26p8iYe39GZ6sXfcUT4",
  "key33": "4cMf21BQaAowEBiCXMmRiVXnHc4AAkpMmQz1LDixU3uqhHtYqb1H3FKgjWpT36G5yQKnQZNCGqgeqpuEt9cpJwUJ",
  "key34": "QF84CLBufgVcTsxre9tjQTNybfA9xs4faDbFYKDjGqm851zALZaAq46iphiKsDBFS5WoewVnTbMKJXxrUzkGgeC",
  "key35": "53W8RYfoJw4v8vWdP2UERgF2i1nNssBzTyUVwCdeHp75wcKPXQy8K8XLJq5WVgAujKCysfk3h12NpNV6yb3a7niW",
  "key36": "2CKiHepjURZZCk3NcfXyw1cBBEgape2jnThoSuZeu1rAqVefYnHVdy7aMJVqxTxNWVrHvQbg8B3g9viAT5jMT5bv"
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
