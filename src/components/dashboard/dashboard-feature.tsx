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
    "36S8fu2hfpvNZwtBVi8pSM8RCJC9HAMDcdd4tZPfRXtTfTaG634hp4k59AhhannuVK73vK7w3MpcrxWVbWUwYnd8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hzrrzrbUmQccSagFk774W1eXpQVF72pQbew1oSm55BRPTEV8gNR8WZm9DbrYLpXQ2cv2hpm5Z6o4H3modFLt9F1",
  "key1": "4Pq27NnMP5eJ74urtPq1cUYemVypUWxmthpQAe7oK3SqjYjdMgvxexaoE3DsdvS9So61PdKyZJtda5t88Wu6byj",
  "key2": "bLWKUBJPbK2DzQY3rDUdyLrxDaXjYHFJNwAts6pcFpHzzDJC3Ljq4caaHWwrvqiQAqKj6p2Qurrz1zDj4zP6WWT",
  "key3": "3zyvuex5n2VCwoLCHkL9p9qqomvhbYBNkyB4F43WGXjb9nwWh3PVvbjmKwbd5eXag6EeHfMopDd4uwVeN7ZSesDA",
  "key4": "4FBDh1JNwjb3wBWjeqtWvKyBnNreErA1so1sz1drj2muhG8KXWMGEgLZvSm42sAQWbKzeFrUQdvMAkHEneBCbtyq",
  "key5": "4wy12oAh3iKj13rdV4p7M9sRd3XqjuSFwBmQC6YnyLHHe4zBtSa6rwau4Nb7gXXmMQPk2zUF9axx5mxygoDGETPE",
  "key6": "2LrYXAQ2JgmsqxmtwydGkemqbiG1EJ7tjpQKkMKz4mFKoHvWEcf9SWx9PJPGe1MsK5j8zNX1c9wMxoQzvjXs2J6d",
  "key7": "3EtwMVj3rvqEgCsB9Vw78A4YnPsAVU2k8Ht5qcJdqBF36RagonrwcPFLo25ZD2aYWrK5syzCWuojcSDVAERpR5Z4",
  "key8": "2B7GNGUb1KSNMF2qjzsX7Ft2LNqNFGL2qWH64s8oEc8ZNsGGMRnn1MFuSC1h8jx7K3hmiDX5cLPTUAMpja9sQm4e",
  "key9": "4HqFGcd7c6mxZt4d5f1AhTYoHS6TVM32nRiTW64Gg5zYq5dvjCZUsYR25wxQY2g26rJPFb8ds6YGwGFS4ciYjzjE",
  "key10": "3PLZGkskxueRW21LgQYtBuCG218PdzuTjyRbc8xXrG5cVywNBQoVjHE6S1rfkH29kKGWzn13W31d7JeckzZytbzw",
  "key11": "3p3KHpapZZDi2AXhTBC8yofAsS2dc74NLS945Ba6MpNXa4gAq3ryykRdWZJSNVwpgV1j7sb1Vya81iK1gn12vfk3",
  "key12": "2FsgKKNAyQ58pWwYpT5aRvfLsQSSkzufLKR9JspW6WhsCZpwMaZQKVSfMgnQrY2AY3HXQQPxLehTn1kd3TxKWjMN",
  "key13": "2zhkLzaAWVQU1exYmYE7YNMJekui6koL4Pw2pmUtTauHDDGnSkLnBuqTL3CgfPn3dxY67VvoQSEuH2VShgAeyrT6",
  "key14": "2x1hci5NscAwskn4T1fAhGBAZNkuT4RzBuc4pQrATbCJLzMbyzHTDtmqBwtFG8dQdbcNPf89ZpG9guPfbqeekcFg",
  "key15": "2rGyHWEtJhw1uXnMxSCyWFn4qVDDZV6BRsemLt8wJpsH3W2EECoWdnPxKG5N5pdpTAFyE4dv1bA6QjiGiqBU6zqy",
  "key16": "2m4KoSe1RQPGAdZAgS43nDRu961BXMTr4vCTSmNy8ETSaN72kSLvQmRAZwCG95NmY27bWnaxvDKfrevACBok5J6d",
  "key17": "5iVjqTpvZ8ENcZPrxjJA5Qb5jK8VrZHe4jkrDw92in2YwvAWbLtukjr56noy7QjmP84uRvKdW4aiQivqYF5w2eka",
  "key18": "3gs58x9mvp9RU6PFSFQrDxJptGeEWKes88H8JRcTpDTqxWPeCHnVaGR34foZ4NZNogU7Fs1PtpSKZqdJbYnTza8X",
  "key19": "5MR5Aq8NFwHCrnWFj9HiGhTC8tNgvbReGA2aDRoP6YK7FWuGnioJVqyEAbXrxNkZWNTFBZPtkkV3EBunHE8UJ1mC",
  "key20": "4eyBZwWLqUHnKGSPUPh4ZMUUMBGe1Mb7h8qNCw5vx1MHemWjgL9WsQzSbymRKX7k2Z1rK9QUuVTFfkmr8pjRKeom",
  "key21": "FUzpyn6Tqs3HASCVvMMEGhDbTZLhDdWWipWjNJH7fF82h9jdmrNVKm7nPu8meQV5qA93K2GSPsLpHun3xmPcVbi",
  "key22": "2itzVAXkjAbe7U95u3FQsiSXyK8iN5GYLbcS8vXBFvvkfGZrVVzeYoKSKpkJGuagqZeu4c9ZG7jf1NVJLDRkjQCm",
  "key23": "4bcJEn689qdrVvwQuHWLmjVS9XQJ61Pr5frgXN3jf95cvFRANePPqKKKgny3RxbLLWrCWV3By8SkQdKeC1GFqEiC",
  "key24": "3TLYKYDYqs3ZUY9BUiJMhnbUsUeeXBKY3xdDmUpq8kU4XVQtpGAHWM6FiQvNWK3Yp3WnpBN59fq9A35nvGGfh6gi",
  "key25": "5nsQtPo9czQPxU4d9VsfeuGiUZsbM4HYSNhiPvNMgpUmiDBQYfhGeDaTWLQZnkt9cRZTv52dfbkpwzxmCbrEG717",
  "key26": "2tzqS75WD8w3UGKfpWcReqT3HeyJ4K1smPfxxStD7a1Jyxq9LaJ1o917ByPCxDqvrqqvo8wb3zTu7fn1vEeWdb3n",
  "key27": "3LFVvLpwwmqjEteF187LnHhDMEQqL5Pgdj9QvNSbNfgCQonpMCtheTprpBTWodZSpynq37nwoRGCLKu76cGPEGrd",
  "key28": "59CLBs7w5qmrjm8ApetyZ3JTcCNfSvv9v5dmq2xADwtVGTPqDvxMMxuch3kpj9WgJQxeYHoBoyADvJVYCaE3vsWL",
  "key29": "3c3DyHvPd1ZVSLjZ7HdgYECTkcMLqEGhxZ8pywKeJWaE89tdiS6DLXkJm4UF1M89yGajVYGteadrv2UqUVcBqehd",
  "key30": "4eWH5YwFoyCpmoSKvwGUwQXH6xQCRrRpk2cWjWB6tNpwdtkZdvw3TrKVDBpKxpjXoCCzEKRnkHzaeZVTznGUzQVk",
  "key31": "4A25iVFv3syzVKsbZredTFoNSMJQqaM8vkMSnVXRpxzfRxiSJGS4SEqJMrUfiBDSbMBCV83N3jGdFVSHvr6BqGj4",
  "key32": "2wX2qwv1V7xBNoXzhHRmf5EDsgL9AZUN3ibzzSGKius1CuR5aPv7rysFwT3Jwdx6YgzFfM9VRdsE9sXBQNo5yM3Q",
  "key33": "4R6vv9d1fP2wrEASSw5m55gEJWMgQokNRPdmDTWpemzhpTYe7e7FqnYWLBHabzmBaagiM7odAcFkALXArtwCGYR5",
  "key34": "5mrFRtkw8QG1RtzmfT36cfzdqUJuQrQaUfoSwX9Gy4avqLt99PoHd1cdKaLx1hD7WaNqq1CGrQ2kpktXw6aX9ZBc",
  "key35": "3Xj11Zb713haLDwgsaBGv2f5rci9yRnQpoAVHBngRpaahBRtQwCwcnnGxXSp83QL7jZUrY1CjzpTQzuKivjXtXQF",
  "key36": "41y9nBCXvpVhS1bkk6mGnbUQ2QPfnKGnTJsj7fnUFkcYYW8DtUoXRXS814GBjRGj9U4sAiVfCYmYaGWc4tbmhsu1"
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
