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
    "2uw3ZVWbbNcw9WLaaFiSNXQMVCUY1aUYhuGXeznK8nvXfF71YdLw8NrodWc4fAARjPb9Ut5CsfQhFomuYvEfXHdC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xs5zefLPDTyCfKdDmpSPnfqGtqLhD7wj2P83Lv5q99B1VcjFjTZSW2pJpFAhXgedR8KpHpnrzVBLt59TSpq26ns",
  "key1": "4TUsU6AAqdFnMSGpCSbPJC5iu7MZZTpkMcetffrTdaGsKu7TwzfnrNgRYCveJGpGq8TyZpcWPSVmYteDNy8UpnZn",
  "key2": "5ryZbCR3SJwZGohjFEu8MqTnQFzsMxNx858o6aodWMun6rwmMNssFKqcHvY8EvrghRAJfpnxUrzc5bdEheDFqosz",
  "key3": "4hsg2p5twnRW6EnXjDYTXaaH46b1dHicT3UqNsStTBxNoyS9vizD7CuivBHd78roToEykoWGhzx7FBatgGE9cWGx",
  "key4": "451Kbw2GFrcJhoegySkYFvkoA3gksQz1NqCehLvBCHcd7WpxyEh2eVx2Uqr3XjS4SdiD6cjs1B12sa1dmun8icMM",
  "key5": "55UCK2aQ1cEzDX4iN95Wo7rfWMeU6QPBYFGgkzLdf27KtgF9nwqBPJjUpfYb2LhRVp1puFwNisN2Ap1rcKUroE3G",
  "key6": "2WVsxqJmgDr1c85cKvMGd1iwciczJUpFokNsmVqbLQZfqDEKVkcTci3e9QLGxt1VPByj8uBPKgoKvg8RGsyeQyJM",
  "key7": "2R5MwBcwLwE3kreGg8Jrx79dPR3ytJnjaTPBzYK2oBpYfsp4RpoohZxBdWFYzo7TYgyhkaoSpQSP2gcUZmaTdrA7",
  "key8": "4nx5zvK5VrQrt86am2DRqcfwcdHrRrytuKGNqnKR8gHLZAE6cA28DFwU8i8hmPBJRGe8LPV6D9Rf5dxMtdf92J9U",
  "key9": "TtEuvigUCdRnzAQ76xAk9e9FHHUuTPvaBjEQunoaxS9izLJKBrJZbJS9XuVFBEBnFFbum6Tjj8p4kq38kMBAdsP",
  "key10": "3vc4A63zdxe6gtmyg4Zrdb6JDZxkc5h2DQ7w9CSZzQnHRiZsFq78ryJCiJakHisiX1qRESGmQquXCMSTbtBYnHGF",
  "key11": "3c3qD8n8teuvrjLjC6wGH8fhHbRadU3ysY6eYHtKu73YSu7B2Dsa7hj8kVsQUngXFxHzdnzL2QSzzUznDtV4CwpQ",
  "key12": "5GtPkn6vdpjib22hGZi6nh3GMpYhLzpJyFPg7P6cxrfdmJUw6qsc5vpEXZTgDZ266w1tuXWfGrYMQCRg7CGmSika",
  "key13": "5ezMFpubfHmoYcFDQmFbm8kDECqYB7YZZaxJcxPW6DkwSUHF4N2AzcQgNhRVyKfGHc84dkgYAsYL15MYBpoD8e9C",
  "key14": "Jt4LjByJJX3pp3mB3zyudxjtheWUnuC3JNRCn95tm1RKCJdPY69mLQsoMGafjrxTvinxT1vCnZ6NjaTCYxfmiRh",
  "key15": "2FyHmdWQ7Ggo2EiDRmLE5cBWHWKhSdu8CNhQBLoT9kV96tx9B1tkjXepercqYitD4izMJMKAy3V5zpaQ7Mh56uCr",
  "key16": "2AyZVzxbJ9yFv5FiArXqHNkMzReTXibc6VvnWfRstfEGnDqZMBnGg68pYbKCPAAKTEzF15sZ8EJHxuorxLwF7jyn",
  "key17": "5ecnj6zr7KmKFA1Xa3dV79p4nNcouTKY2K2ETcgFZnZTfXxHb7KoaXvpaAJ9J9fXYd1CaQxhdhUsYh8ZpE7s5j2W",
  "key18": "2aB3KRcqGEHsjYP2L3N3Nv9WJUZrEZPiNc2QaC38LUuyKciEsf5rN4rbGW9YKMiKjJ83RBQJcznmwnqodnBsTWVi",
  "key19": "23D6JiyLYS2V4VBha34Vqhf1Mm961MUfFBwJ8GFD8V7UacJLndypsA3tQP69fsp4Y4Qp8qxaU2Wgxiej6RvxeXoK",
  "key20": "8P2qMXQP3fzYJiRL5KaEPa1C3pqVDoUfdxDVy27bqnfJs217QhLcn1H1E1s3oXvESGpiyA7HDrFCc4vexCuKYwy",
  "key21": "3ZDybY3Cpx6S1RRxvgqewXpLwv7mPzVJBNkhYSMzWb9M779CbyHocraDxFhNvR832JSksECE8FJ1gZwLtXg3PRyY",
  "key22": "2vXpUsqRNDj1TJfDtE3CEE2uLnw6fN7K8pH4pKTfizCndBwsD6bMTwVAsbMeH5UzZFQBbsTxaExYGmJthN8mLqPi",
  "key23": "m9b6LmBr78jbpomB19VYvT2RZrFoRao7i7tDfhfc5wxTLewb5QZfQ6qbKw3bi75g58c6zLjoAthkdfogueFGbKw",
  "key24": "UewFRRXgnM7wRnd3Xy7Espq44Qycbi3SJHhhsrXEX84dFxhJaV1PmRnPmqkv5gFzZSJcfXNpxsN3jeeqZQma3mg",
  "key25": "223RUgjgkiedC5eRUGHX1p4goQZz99FPCrxGCbSsNt6dmh42GG2FRq1fnZcSa7SrjodCARbmzeJhs5b7UTX18p5q",
  "key26": "3cghmZQfuzw4X9K7M6obvP5wERAGVwPohVZM2sqHQnwypURbnBYBfiyCdRpF5MjPm97vdTMChGd32Jit8tYL18eG",
  "key27": "29MyCwQjgywPp9FnN3bJvTUzsUrVU9H894uMifoHzFRgU1txQThncnAXwohLysdaCyQhrAEB3ETcyxPv97XybiGD",
  "key28": "V8ESX57spQ2Dh3wgmUrqrDufETrnXLfJgjcmLth8whsAm5bKnWUJZuAt6W5z3XtP59tcDQovNp3BZ7v7HdMUKBc",
  "key29": "2usiivQJsuZPoRQUT2qi8fKxf5nTbspFzLBPQv936es3b5Ahu7vpYtVeCVgiWGEoxuGw6F9f1hz3NQPyWhd6BMex",
  "key30": "c7vCjrG1ZQYYGFD7EDfZHZ9dEKv52kaRdFuscgq3XGzGJXWF94zbGZ12EgNKFZrcJFAg8safekYo6PaF651Kuok",
  "key31": "52s9H46J1jGtqWqmH2v6DcFrQ3wYjnYeyFi3tjZ1kH99b9Ri2stZ2mHc8XMHG6DgV8iLs3bqbri6S3ohLrh7w5QM",
  "key32": "6sj6urUNyPt8afs4LpK3ZuJ2G9vvuXGHcvTwCY2dKxH9wiybS3bdnvVWRPWaWqdxnuQutegDDDfVQ7KD7UWabS6",
  "key33": "5JMtRqSwSvk21Ce2q8nywkWCd6j9DDbpsPxRYVARZpyiG15Kb2JR6N3ckhyjBzL711yMM2M81suxekTsEhxgGJjL",
  "key34": "3yEMPFPU5VZwicFfEUAP2JzKK3URBFWzhvoHAybjhqcdpEkpcviCpuDmRJ4y3RFTsjzAwarTbRJbLgXnykZPc3zo",
  "key35": "ZzE8b65jDAfHzSuJBfJbBcEgWguvFTmKZ6RQNPcygDXZnKsemW6WEqxag9rbSsnBZyZ1wSFEY5y6Uxrf5LKRaTf",
  "key36": "5zS5RBqGm9TT6Uqf91EoAsHFP8zNtYGxRWiCnFRuhQSAgynhodQFY7PZyAmBBdimynQtbSGXcZzyZR3MP6hBS7nk",
  "key37": "4ena5XXXZazc7LzNmugP5gv193HkS8Wzm6KyCZ6Aqu1fYSHcXnXHE9apVBYBNExQkPFWbmX1x2uBggPsrMy5Hcku",
  "key38": "4qqnqaL5nR8akodUjiD3wtSQPRJyMeAdBgNyxunipoJb6FHTxrBaF8pW2ESabMufAUcoYUykcdfvjUKvPUxowXdy",
  "key39": "5242dJn7ZaLHxyUrfQanLFdarZqLqrv39A8dPmAgc7oyDfQz3YjjrPtZ8VgiZthRqQPs5HkZDbKx2WGn6vStq6BB",
  "key40": "5KjpzM3vyyWQCMkYdQrwDoSmgoZCNVhEiExmNDR5Zyq77dAmuL88g4ueUxeuVnL13UHssU45zeH7fEGHvfgWmF6k",
  "key41": "635BZsZUfyRGZtoWSzuAuuWFLKSxg27MR7tNkKoyjeyGYmbjW2CthtPsuJYHWD89VqET3j9uyccK95PAo766PM6u",
  "key42": "4HtN6HZEiXQ1wEYaHozcCPLCWW2p1pDttBFLM52ReNdwJtPWTgW1GrpYz8kTM5PZbB1VZNtNC7HUUwdyHsVdj9XR",
  "key43": "2fLAt581JmtyAY9fugomQzgg8XGL6UexSyuFvFygHa3M3Y1DQN5cTKziF6NQvdzhHCAJqkUEhJNnJxhPuUGf4T5A",
  "key44": "3mZSTMYPC3vz3dWshq36KzMbQQcdTixqW89ShsQ3RBg68kKBotHQarpGex5L9HJT787ajMNWdjNxtUhqfKe8B1RR",
  "key45": "E64cPCfGMjXqeuvdqa8BaCCM1A7AaLg5fJFb3jMRbfpmvnJd9AJpVZzFdXXM9ZQY1K4PsrJ13UfxuM5kyYTeMDE",
  "key46": "pozmvXKsQXbYi5M6rmttFXMvygzPhatUXN8xJcmSdM3cozE8o3pwdUgAxM7pGH44GugUpzw4Vyb9wZkWoJjYJA6",
  "key47": "5edkxaacHFMVkSSLLboQEyH95swTs45R6ekC4NWwt5mj2Wc1sQXoQoJY4HiSW2StJuL4Hj48fEvztpanmEA6F6rQ",
  "key48": "5W6vvDKjAy9AYY1CcyQkVFNyu8UXKPTZNxhdzWGT2C18tMa9mEC3BcEKVPVtcn2L94YeSPCqrLJqWBXmzEegoLHo",
  "key49": "NDN3stXZ5SPraiR1ATgE1KzNvAqcntoP2qGJPFdiduQ2H1xa8eoQ1GhLf2moAe8g8Vk1HWw6J9nTByhBMasaTkc"
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
