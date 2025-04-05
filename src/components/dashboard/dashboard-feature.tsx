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
    "4k7HjVsXUadDwdvsQFLAZMqpknhS2nKAqUYWUtkCQDHuL3J56tpmhorDBw9m8cffArKomer6mr1yoa49kmZzHZ3V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iP378UE4gCST7acUnft3vmT7atbvcvF8Ttssn3ctE54TRCojyJLDfVFn7vU363FwCXcWFqEKo6vGauXbPE6btsM",
  "key1": "4cT5Jdcu9ZEH9ki8Sxv7ggs1iD4TuX1pqTg6MYsL31b8MGHgrrjY6xHEwSxjPwKwRUpJPJbQwo89my9vZGTJszeb",
  "key2": "5px8uTC9PcyHtGwAQBgLm9hhXWAEAHWnS3q3CRw8EKCGuYzQS3JEehiXfy4B4B9JxK6V52jZB8YMQMpGeF1oeB1X",
  "key3": "aMUmfdfAPFieoh1B4nK2FGWECrEsoYAsM4TLpUuv2cEgyDkxVBGvZNP37in4ZeviFEtcqDKQQfrkbhDfy5oW2eN",
  "key4": "3a8YXz5WvwnL7goDbr9MFZUWrjaAjvoNVgLkPvXEqw6HRXcvQ3jeJ5LRn3aRWEkGmmWsLpgxpAp42k7FeGCHwcYY",
  "key5": "4N7NEjUE9iD4a2Kdd3exYtNYs2XhZVmS76P8mnAfLc31exVT66RttGQwCm3k435RFf4je4EUkuoBytng2EGbJR2N",
  "key6": "sB6eGdMsEKUuR5Cmoi5Hf9CNdE7VLhRqHpQ67afvBjHeAJfr7d3nDHZHqNrzxqbGVHfCw6Bcek1tJWwVJnoURsW",
  "key7": "zTBXwZSyPbDn289qQuomSeTiyng2BokkxAtkSXz69wJTUVhPdBQrhxhwXDFKJXBgo6CWubW1nwURhV7ta5CouFU",
  "key8": "2BjszegSoUiWgYq1mwgUX9ZP7K85u6FN6NeYNXrrwpTBr9m99S13KnaZRjAJyCRVV4syRnrvujVt3vWJD6ygLahC",
  "key9": "55xka9SupxnUWs2cGWd4ECRUBKydJL24y4ktN3BBeYJjNMML1yvqraTdRY1AMN7ad6TrHRBcCurXq9BDt7ySH89T",
  "key10": "5dTWzysJfeWuNpZzc6oKTTuPanTVHUjRMNY6jrvArPqeWgGW6Ct79N16WqwhftxVA6ujgzz979QkYK5iFrRQmRkY",
  "key11": "E5fZYEQZaMHUv6KZ9NmNh4kEfDdjbEHnmimtDkXCnSaSv9tzidMXFVrr879D42dM5h7vXKidCCj5HfazKWzWX15",
  "key12": "5RdbHnqwcTcX95hb3KD1WEudDEAazpGMwopmiEqq8aQsFhFT1AcHi6iAhYJeWG16raNpjPtviKNeuM9kgdzWMrdJ",
  "key13": "5Yak7RRV9HiLfhY1AsKmwdCjSaqLS5xe7jtLZ1wMf2P2Zk6fhVyQ6avS5k13o9wVu9mbcM4E2x2GNnRfFRhkQ7Yd",
  "key14": "55C7HWHo3dEbF4K25aZjigLU9poKE8HgxdqZENyRfZ82fU5UQWT2N5GySK4koZkyB8q96GagKp6US5tUNcZw1Lhf",
  "key15": "k7U28QXj5KgwmWrePV9fa4Q83cE9XEMCgyCkVa3q2Su5ev4MsuDyafHSBd7bKru23pyLfxh9Daq5hHkwLbBNBU6",
  "key16": "5LNhCjRQBvs7cvUArXCFz8ptuTuW1F7m9mmiu1gHfXihBUzdXA2NMUvFMMd76L4iEsY6SuFVzen9jiUmBRDAQiuP",
  "key17": "2HqeJnkrvUH8eQUApeP2kWrVoLgdu6Nk2BSsFY2qgwCk9MTn9eLJzF6hQm2m5h9hPSRWLLvY9Q2eDUmy9q37Dpg8",
  "key18": "31kVuVnaNfKjrwKJd9EcvFRdmqHzvdnYUBJuU5zGFrtC4BLfvNjT6Hpo9JeVkQ3Bvw6YHpwNwgemGHKCoiiT4yhn",
  "key19": "dCxYK1Encge6cunvGEP7CPtNVtFQNaU4qByRGdFZY8eAXdyGoyyETtmHtb5HFtSwHsxfehFkUU5iBAigbMK6LcT",
  "key20": "657PwxycoYJFxESgZsVwHjEPworsE5aAZ1esdBQT7j525N7tryi2vGqvQr4Qqpi4WXxUxfdkv2hzMSzCdPz5bS51",
  "key21": "5cGWoXg4ZE1eDXesfNLbUYTwzybiwa4fZ3dzbe3PzVP3GrU6RxgNrwZvNSiiYFeVTGGrfLEauu8VgtnZVihXMPJ5",
  "key22": "Euew3Nyq5nCeoYnqNV5aDZG61o5n3Nh2BmzS2Kb7Ffrukn9hZJSSYrKhUxbEJv49DF3pYyJkfZuVhPsWu9b35jp",
  "key23": "d8MT5FCrCMipPuu28gmanLe4y2qofLsk9r1KwGSXgSsJgmvVrTux9XpLuwmjYjXuT2picMmSoVfy4kV39T7h2GC",
  "key24": "34i2K65kRhzawPghfLCvCbC5EzosS3VoQPwzrBfCeDdcx8ntKKePjQt4RpCBDqqzLpyn2foKYfaZPkfSURhK9RP2",
  "key25": "5N3mVA5UmfB3YgVSMzHdVMAbCcgGstdikcDod7hAksGQ6T3JCz69MyXuAp1Eg6uxBwzewcHYX7ueedvPmEHpriqC",
  "key26": "CY7j2wDGFgt48EpUWhjiJPZ3Z1j7tPDM5n18JPbp3RSeamWLNvp5bWSxYDWqBX8UfshxCHeiicR7bPViP36Nv13",
  "key27": "3YXW6oAe6yGhnKfjBbaNg88UbeY9zj4ns8nDGgb8gQ9NDNJLAmADgnTUsBXHPjxoqJEZE85pKQj6zRvwyx6hvzcC",
  "key28": "5Q2JquSA7wqE9jam6RmhS7PHh7bHTjjdeA83KGVGbnGKHtp6657HgPj1syoeor172XCMQ15cCbpQ7gwCBHGG2vVG",
  "key29": "3QnAc2YNJPkpgSmzXExyomesSssAcDkqmRXWS7JzR8jEXCpNCvkW8bawLTd7FJo2KPWCnGABo6hx3hPWcn9SaAKF",
  "key30": "4hstT5CBwqwfHWAckzPdTpgUdama7SmB362t8wiXAAYkXLjF5qxDHAxanJcruee7oJfMRnYDfMnkZ6C3sJ6QBrZ8",
  "key31": "5f7w46UUajk5Ksg6c7Mk1SF8QJF5SjwzsC5pMJA3v1EjaJFzmN53xHiPmAfvf5GKfLp7YN2ZVtVLUDktpZ5PNbM4",
  "key32": "2tM5FmWLyX5aD3nww7WXVGPpZXMhCe4KaXQbyUMSq3RQrw1BVkQhTW1ExoAcko2B5V9VxkfCDcxt4mfMg16Bsfc3",
  "key33": "5b4JH9AYJZ8QT4ax389TF24e7RyccyJADK2FevQBBzZZRaFS7Es1QufG1L6F4ZaMQedagNm7esSoJZqqqfqy4dgm",
  "key34": "4yvHTMXH3r7HZGSpcaaa38r4uera4tJEDTsmaGSGTGSZuXyQYXS4Ku86VTCkn3fjRxS22JHqkYuKMDZFapcqAqyf",
  "key35": "5mZBnGkT8FQJwFnEdyqzdNdDAB5sUg1AbT3dc4SMrEUvmaHH33Qc6yMJgDJ2CYQDJEVLUGhQCwFzpepHSSms758K",
  "key36": "5bKRbCYgrydcgKyGq6jZySkbbv7e5LjMLPLYZ4YBsYGaJGXRYHdgPiJsS6qqxdQewzQRLtyqppN6qrub3bFx6bEf",
  "key37": "5TM4SFVMLFeaptrfLzPYc8EkkAaUhuiaQkTarmcW9CtwfkD5PYtdMtcQwTWrTCgyv8Ng2BLb57hHx2bV4UmGwMRx",
  "key38": "43Figepup4etyWqsFtPFTFzvCXbkje47UkQC2aybjNYPAUQaWaoRa9q9VgJpECEme5LLnvhWE9NeTous2c6oZdvw",
  "key39": "2gEyZhpqvTdtwH5TY6waSnqBaV4jqoknYxBN6ZrYkUu6iTHnpr3G2N9pPFrENk7T5mVoveU9TxScY8ARxzNJzUDR",
  "key40": "5HmSro3Uf5n9ybk65GLS9Vr6yk6fwV6mtvEu4KyfVWrKo2e8e5pCRTPcLXbhQxMzkyb8HgytXdKHNsAvaTrZXrmr",
  "key41": "3tJzbBGtbk9FpgbAmTyKyG67jT3CWiyxU8MvKzDk4fCXKD8a4CMFonNsyWiDkVKSijr4TL1uQWQaBNqTjgYGKjBY",
  "key42": "2dceiqZxUe4DNw5FyevTt5VTf1v25yeSr2DpR3gmkswhouBnLE3FioTMcPYLK6XswJL3wnsWeFiJxoV2GazkfXv9",
  "key43": "256MtdGcFa2E27CCGNGxQrdZukjDzkeBb5P4fTvk4c9WRYBysUoTFFkQZHrZ6Q1ueGgqEq5J9DTTivaJhKmGeCSG",
  "key44": "5VwC2HeBzJGUBdgs7y2h6F4Rke9yhN5XM4yAYFxeMU3M5jx2N45jML2cBfntSzxAYhDgnzyb4H9ENnyCnD47YPTs",
  "key45": "59NLmC6pPu1AAHE48BCjF88KUDxETo6YQf12ExwAZvndH54ahxhVELjHbVUmaERDoNXuSJfAGqRB4gyJPX73Cesb",
  "key46": "465kqT31tE8vHL8yy119SR3sRkHs7BABmdBHMGB4aqwmFqZruVn2ux8X5MTEVR6N95mnjH2Yznzy6zVF9YCLKjec"
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
