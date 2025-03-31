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
    "3x6WNvY3u1UCQnuTW8M7yeWbyR9j6tVpo3qowgwCZ6KVG7yw8mBmaAVi8h3RYFkc5x5CTf98reEQqADW5mpEZiqc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c7XuGUtW41w3FDUZL5WLpRbvuV2wfbT7iD6zuVroBg7wfydFZDkqLMQkgVjyAV96hDuxnEqVvSKVzupiCrxpyHx",
  "key1": "2XufhJa36AecuZBhJp1ovEdh18qciarKuYG2PsZEcFy7NJCWyRwRvogdTEv8DExzFA5oRnTct8sp7fKBxkJms5Bn",
  "key2": "2WVo3C1W2cqgVeUSstE5vx3HJ6KpMP8TTYrzUdV6pcNboaivJmq5zoiBUu84C9d8k7PwpkPH9znPNksKVVkDP9WX",
  "key3": "Xy5MrWSjNAibi2qM6MhKgMaR5j2ZdAG87nUzgmcXifZHJXvK53kgZbxpw4yJTUL4EVJvPtcmJ4iBJdV8hjpJmpJ",
  "key4": "5VknXfAB6jVXx1q6FPwuCVZkcto5GLbWJgT7xKhMPqee2uT5QMjSR7n5mnGAW175zPSf7QHZk6LhCZXo8ivVxXcY",
  "key5": "2e5mQ7hppJ8FKGBmfhDAs9hJRfumNxbrPSvMxK78p8FEmvpbsnhbJf88z5qP25uxqyrYogQh4avtH3WVTAMazMuN",
  "key6": "5syPQbEu4hM4Mjbrag4ZehnkwsuFz6A638qyK2k8r7GQBiAPYfXRz45L8i8CmfEscDQ9sZNu7oHg8m8LyWT9JU1W",
  "key7": "2Sm5PoSrfXjKX4qB1BGDazq4eDavHoKk9HfrwLrzPbr9HHtm7pqVygoiCEHzUmq8g8EL4LG1aTaBbhmpvQ7pvN2L",
  "key8": "2hayYSNNdWSarJyVoUQFtEpMisYWojhS3hw1uo9zomy69AvneBiUsYW2EGXr3gJTJnVhPZvwuXNTmeJb6PSwE4tv",
  "key9": "3PmGm1iVd5BjzbfFGV9wFcnrxH6oExp9eSBAtexohvHtcERG1QUGpJfsnwvZGw2K62DeHADJAa5ZNQ6QM8zJzHpA",
  "key10": "3qAQe77gqAn41pqXrsXUk4p3SpoZ1FWcKeU2PPcS3Hd4WAzHxz9hN3XXyaqpRcpk5NxCW3sKuDtWQYLRE7u76M37",
  "key11": "3FzAmQEUxHtnJURJP5AcvE8xzooQMSYBC5NapnbVKoYkxE1uKmBkxXCvs5FUNtKxd9qhNvrCLu9uAPcdLbqZKXyt",
  "key12": "5gTkiTCAchoTwxrvWBgDvudUPaDg7CHtatE9Cryv6LNXX28mmMKWEK1uov7s5ddY4WpcbrwjmGVMEfW7dsoZRtVD",
  "key13": "2Ccs6rg5xo6ZUSdR8CkWXWPtXmey2aBda1XY8gGUMYMctYCx2BqNjhrhMGtWBHRFdeKFPtJQ3GFYg4EAK6YJqYoi",
  "key14": "3YuNcRgNWrYF14Yyn1Hss2Z9wbuFAeUmSEBjf7BUSJNAK5eqehk8mo2vLMhycddj9rHsPKLjLJrg9JAdr4aqyL7C",
  "key15": "32GWD9dP7Ghy4i5S1mhM3mg1uQ4XPCCsjcNSFDVkEndmazDy4fs52PEEv7A88QhxE6QwaNRnmPyR3jzXyur45UfV",
  "key16": "2vWBxQZiWs9HGsZcyaqTVfRd1uMngbzqdTScHLnP97UGRf9p8ms2tvJjuGDxnkeYa3izXFyFZp3RBmVxVx3R6HmZ",
  "key17": "5XWaA5PkzE6ziEt2hATQM7ppPaiwEewhd4Uk5JW5WqM1LNHmquKFNV3a9YQQaZUSuNw2DQxdByZaqtEKAhEgoMj1",
  "key18": "5G3Sy6LdHkN2vLRFBYRR2eFYYXq5TZT5fBB6nj2hyqPNr18N7LKJTrXrt7iJiDQQAtrMRocvJRpAKBr8iqitX8nv",
  "key19": "3ixEcHk4kRmrfQLWSQuhP7CedhTCjoJJJHnTgxjTLRMnxDSdUTNeyjzLyb55kcPAnjkGP2mnfahbaLuAKEDYKETj",
  "key20": "2HWYn8L66iAqEZ3V4vvAGzpANGF6DkBCqBwiKPDfPiLKg3SuNoRt44hNm5Td9i1hhDsXy8XxF2kDCKUWgxd9GTfM",
  "key21": "2DjMhxznBnGArmReQKUQ2VwFm5raf8FMfJDxXMoTqYa8aCf3c1QKtKfJJhNwr5ZZoewiC3RwnRqaDPVpnNDG1jfK",
  "key22": "2hoZwXTuwVsjKVMpewE8V4LwdrUsDbixC2kFb23mTHjUPXjBicY7eT7aLJYgHm83ZaXyWFQ76H2xR4wumBy9Q4cQ",
  "key23": "21p1n58RepxrHjbL6wngx9yQf5jhNBFkEdyA1r3z84SBnx1pKoGCNuWTdGf4LwNqnBg7Vf2Gtetbyih4LEiwumcK",
  "key24": "2EFg6x3LujCsrP73o4MPvuJr8AAY56hRaDpiT2RDPhxxtnM9sg3bsQQofuf4PkJc7HSHuYCKFtK6keUyrmPSFjHF",
  "key25": "4eQAv57gEPTzhdjPJpKU8p8udCkWcMDxLWQNDBCeAQN3q5udyDBuTgQQFJZyegufwUk11UkDyMvTfjZZK2XcCvHf",
  "key26": "3cpNF7mTp2DSF32MhLZXc7A3xvo9gqaBEQuemPc9Qwube9zyErFH1SDPKDaffpFf4X3vJZAV4H3ezSyouMduVLPP",
  "key27": "5PZh9vm3DF3FnzanH7r4Yh8TZhnYLzorCxT2nUdPnW1ucCVTR3txLUDbb2U7S7yCEFG4B2jEGBw9vqqPS4xqMAWq",
  "key28": "4pC1hzc9nLjbVxiXGUJyJeaequXmqQV3rjvSqqjDsknitPaDCHurTzyoQTT4PbvWVFueZUeRJjKZmn5Zas3WWXDk",
  "key29": "5uGemE3NMFrYScjwWftDZdqKTPfv6xYQGwQRNDZaQrwAYpRiJLBRowWErW7bhWPR3KpXoJw7WQCYoZ2zf6x6USdS",
  "key30": "2L6ytW55kyx9qd4uS5UicjSaZsHa5NnVVV2Kzc7gXD5ceySWXUNBhLt63aMovrXF5FNo4zVr9LLzj51yqwXcWxCp",
  "key31": "3iQ3ayhqjiYfsXBEVUS82a8mjY7H7x5M4d2VS6unczxAbDw42uTDcbaqanrJinkjjsVa7aJ4Fczw836N5Fx5VxaR",
  "key32": "2eHxSNznVSkYMiGKaQsV3xw1MGqi6cizkxHB2r71q3L7DJByoTgoDntSu4Y3GMuGhtxpm7pxYWhLeoe8VBPs2VdW",
  "key33": "3AFJKLZJJPx6A9CFw6xZbZRNB9bZVYgmeSTYovjfBbE6YVKbqCh3FKi56o5GEixe9mwN2Kjey7XQpEPw3zPkjLcD",
  "key34": "2cZVivCGV1pPXVvQkUjdUavVJdRZGemeRf1QzEoMJ4p6V9DVYPi2ToyXBkxJigrL7XpFjqoAbCXFm6UzX3tEpy54",
  "key35": "3B8JdtmwNbJQemVLQvHJvtAk5KddqcHZGBbC5s9Qku1gt2mEBTYzR6pT6TbF3kQC9iq4HSCxcZPxfjGbqu6jevZF",
  "key36": "3FQPFwWAk8QXcEmEFb2ZqQ2R4CkV7a96pX29HcLd9NfgUoeAebBuJRxHvRuSmmTBX9TGgdPMc9iUFjs6MDA312aN",
  "key37": "3gvFyhUPE7MwzN7RBDztZxU21LnPC6PUGhE1tsayUW36APV1ss4mrERb82hPsBFcfQDyQ5SsWzSt92E3LF9CH5TW",
  "key38": "23GzNjhv1y26oRGKeDRf7oT2beCaPkG79s4Kv3UZEraLA1NdvXi1UUyR4pmBk8VPjTU7dnRYsLaCarwePGnqzc2H",
  "key39": "62xxj8347pHXdXKNnMuNHetrzL1i1fjiwMuJ4sZT3X1uJV5PYAxHbbTbSC6DRZ52FubEhWtSdNWUoQnQbRy4dQHV",
  "key40": "d6nDY7qbLfiZJinuSmfCJ3doUZQMd2aCVsTvRAxt1EKNrxvgQfbzhQ2ooQJGVzKArijfFnkbaEs7f6qQQfGb8N2",
  "key41": "414Up21VThNiqTt4xY2HtwMwhTq1aVyVyrvS4WitBx7iHppAinTkbzKPmKDMLjpH8nQTHrubm3pJQh1nFcaEFqne",
  "key42": "3PZ9bbAjpeUP7AqAxkWLz3UMuHpUzCWYBJf9jXZK6pficAswjvcFRDGxMrRXwweehJeLiYbgNEPFsu23y2P6c18p",
  "key43": "4bi2zmDTFHwR55K8HMsfZykjRKHmvSRbH2oAjvQFRmxFUMTV66FY8PdpE357CpeUMGWC884xm9oWoYTR8hnQKQAN",
  "key44": "3fPaffSSmJw3wV8uz8XDLYwpytsbiVdwQfekhr5rXzfBrZQjHL9wkDoavJLiiM2Lsi9UFqrr8iWXgGd1fmPZbHdA",
  "key45": "2znemYY84kDakncAVpvnETyuBn6CduxP9F7ugPnp3g6H8Ca8XNYLQceWJ9PfMf5jyS1zYrNTQYfa7KyN8JPkouVR",
  "key46": "2KZAwaaHnKJYkxNStPjjh9j5MtPmaGWtSGioiKPYm3JJGiQXTVq1S1GCZatkNdKqYixuY5EpaYzi8QrHGqWSCPap"
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
