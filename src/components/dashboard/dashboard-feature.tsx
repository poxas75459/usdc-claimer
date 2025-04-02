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
    "4yehnGqD22tnnuM81PiNPh3VwWZVZqoT9k5SURu6oMN1TEoX6x4vskqnWXeR1f5sRV5Zex1GhM32mfriR8jfCvfx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qDbQEFCDj87ssQYpEBT9FqzCvDXwAQqsBc6p8J2j4RgamevQM3cLAbqXBFQzaEHegk5j1NeFeAqpbsHh728RxcE",
  "key1": "4NZhkzyRjDq96pEyvy2PwknDkHp4Ah1aWfJ5H9MFcKra32vDHGEb1TqwAVv41ss4mDBFEvPtdCcJNE4b8jrtev2T",
  "key2": "5YQnA1vqVwZ1wBYxb5GTRpfJr8c4iG8uucAhYdxmRo1Eq1Aavkz54aC6g7QA1fEhW72yTtWmnrpmNsMPEnAgoQpW",
  "key3": "3HVZK79orS4eLZjDHeQbNtDnRkep98p39u2Gyw9SMjr6djSEQSMsLCvevYBcNv8L84ud4L1AvJzuNH3ngbYZQ4zE",
  "key4": "kKQhqicGiHWu2Dxuct12mcVeB5522ut9RA98VRTP5SyWcFboF1VuBUQ15jmXY6ZGfsjuH7CqaJAmgW1NNpJJUDf",
  "key5": "5KTaft2782rYkFQjPP9qWmd7HsTUDc1gNWAqieuPjdwTqwD3Y1ZhAiN5yXH2GdzsEBH7r3vnb6mrrW17GAHFbYiC",
  "key6": "4PyadpHmzgsj72hZhG4jkHKs3SAdj9frmULqUwuDuPdGu26qKQmkHeJiWy6BFzjnsNaqrXLanwoLq7ovtmx42DFW",
  "key7": "3PXQNsv2BP3X56RWxczSHBmJE4vpZ9RSbqgjHyF5im1554QjJ2VbbDchZbsAM4vGcTtTpz6CDquyrCfESKSfUY79",
  "key8": "2NDsLW4s8WFALQrqLTt2VEdKDW1ZKNh2PbMYuZynpsAs2bqr8nxFpYZFnda916r5JWqbJGVVfxq2g3bN4kwKdzYD",
  "key9": "AGky71Mzka7iC5hAy66iMWeS4ywTYTLUJQvuKCf42WT4rYJxspi5NmsKRzxqnWH4yCUa8S6EHv2Se7skYJTu3EC",
  "key10": "BuRLhZw4xvvL4uyEj15QvqedQG8T3DAsQEFV8XDvfLET8CSXW9i4Gy6f25F6PNcnN5b3yAucg8Txux2bELiH3VB",
  "key11": "5N1bNTxY1ghSL4ceoEHDVjGYDBtosmPETwsYVCKjcetu57f5YPBKAzPP8bw27Eqhr3qru7kbA58o1tDdrZinaTXD",
  "key12": "WZYmQYvTNj7Y1uu75GpELuvrwstV4DNZ1SqrYEpE23rHeV3ZvfyEpAgc4LSuFam11EjEVzm31nDi1wWxkBWgsJo",
  "key13": "HxhCi29pWRTEfU18bErqxzZaYdAzD6gM8XwWhEgbFbdj5TNabNegEoxbpMmXueW5R5786495vNgvKaEBbWqhEU2",
  "key14": "5fGEF2cZupPi4Xmbfi9KqLjt8FLC1dEqzvBxuXsm5QJq7MkpYhF4oaAJMeCLT3UAdBmD3UdoFsx1gEXdFpwG9YMr",
  "key15": "5x6o1Lid2enkq5mnX6tu9Zje6uMJjxzVwVtGBxLK8vv8jt8VQYoqeG1oEUj3nvVJdKh44juFqBC394nsL7CTE3CG",
  "key16": "sfti6vXJS6y9vFwebohfsDjn5UWyx9BLKqLepHV1y54tu3T7C9wYsZybCZyXHs4ayRVXSR6ZccnyB3Xu1m8qdUh",
  "key17": "aYUn8CRmabZAffFb8Medyao7AV3ia5zAThPz6h7Z1bEXnKczU9bGyAan5SreJC5t8QuhijHLXwM1G2BEkWS4TZL",
  "key18": "2JKkcdacqWTZTW8HJWd1iN9axNEpRBj3WT4WYuqsbkesNabb4PYxCYrA8t5Z2ZK6g5h6Q9gh4x7kNqurMDQB1Xv4",
  "key19": "5TZTf2hXKEVQ4UnCMJxBD1ghGKa4zUPEgv6YRqUfRPSHT8EaVpmDLdUg9Pb71LzAqkxxQZmvUa33Lid39zd5TS4o",
  "key20": "4Y2rdzgmGm1ozKd8QBUhWKZSKjrGNvCZWT9g4rF9ZJCPfgERTkvbSmK1M3rQJdjUU5JveDkQyffdYJW8wVf72NcB",
  "key21": "4aV1tUJ7KAkVps73LFtNkMdyjzVJZXtL9SygyMFDuzmFjwHu21ZfvdHNttpM3tAS9c8XcLY7wYST8E3PLMrGaDd9",
  "key22": "4GW66mpJ2h6ATNjuyBNX5o8kkzPnQRfPFQAE47bh9mUp8vXQRLqHsh9dx6jYRqGt36uTyn55Nc5wG1KqHeZS2BGC",
  "key23": "5V4g1pG5E92QzqfpEiagmoC4Loi2UbVRHA2L41MAz1P8dAQujUxJSCCFuio7rZNAxgqznUJH32jcAfNuD1LaCQRR",
  "key24": "3D8AcPJecrgMuRQFGJVR3ENWRWzin4shFVxmkxh8hbC7uFakpFjYdAKXPFpxdX5s7scpxL7kDZwNdBmSEyaTKcdg",
  "key25": "4VMoqjjEcBu4RjwpVfUr6FBsHwUYNw3tLiLdpjacacTxi9Bpv8UZJwY7SYjZuv9hCBgT2ButNDRrJVqN3NjQt5Ug",
  "key26": "3gYSgvzQAPCWh58Mh4uSfTG6mzzYJYQRuCDVoW2GKYWGf2SfLP3CbB9yayMjtwNFirUrQDbU549NhUCyMApSX2C2",
  "key27": "5bTQwRvQFx7RGvNQamFoNPB11gxVdDZtEMFy61P162zF6wv1TjpkBpuJn7aQC7RPLd4wRz6dbj1fmgEWyP2bJNTv",
  "key28": "kcThasFyvw7a5cCJWK1Xvnz6dvt9ENuzMchjQAFPUoZvF6SmXRuFEpMHpDgddqUXw9SrVAr8WPcBkY5izA2HYGU",
  "key29": "26PHo1naTAobAPr8y5qwT38kVdannwHHN2rrSVedejaT92caDSrorKVSzwdWGkyJdYdmEev9VQnBD9X75zwpFmRP",
  "key30": "3LJWMTDvaQakpnopvtM37JpDjDGFZ8BktXL5561PY7ThUkDFRwcoZ4n8vZJQ1f97TwR4EBVwbYFqY14xnznfrb3Z",
  "key31": "2cufshBc6hJrSvxPCd6hGe9acWXztsJt6UabBopL5CjgkV3tSaLYK9MZpsAnKTx2hisKayZ8jUz7VsPdU7Q9rwjm"
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
