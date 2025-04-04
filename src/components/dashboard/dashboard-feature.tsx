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
    "21gPaneNUZtdLXJJNjxbwHKp1ZGNXKoUWx79RxYvxzWFzV4BSZfxUjquUYRK3uFVM2t2XhLdHtVsNez8sxfwSi4q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AK2WGSZhyBEnev9gNPtScEf3GJS8qD4iTMMSFwU2zQEGA3RbnaADffGuQ66Vc5MjXJKnQUwn4eodeUToDCcmtdx",
  "key1": "JVXJUtPUQ4NBKspfAeaLD2dwQEE2GQ1MHVkF6A9V7J8VKctrzw6pxeMAAZKXM5BDY34oUnzsVXr9h5LByHWF92K",
  "key2": "5bgFq46ZDksmsAdqxz5CE7izuRF53dqR6JUCpiXNpJKB4qG8rn1Uxc5aQu6A3Ck3gD18mhzdqA6f8Kv7cotP494T",
  "key3": "58URNXqRqPEMGFCU7L9H2aUB6rTEWcjjddwdGmNu2NjSBHHgfvA2wrwbK2Fm6kJUHmHSMnFiYt6govV7XUefqUNN",
  "key4": "61PWQiVfWNqa3qm9ELDMpukt51TaXKVhRWVCL9q4SNs3wp7hPxUu5ebYdX8vrEbNVBw4cH9fnPVALY9LhpxmKGuE",
  "key5": "4of6Jn8fJM9iy8DepnVHb44WX2zAsZiKZT3CvX3RwrXZAvZ2oxXyLQbZYhWmwpc8WL2CP3jwJNsNXBr5Q6dWebSP",
  "key6": "32EHF4phpnqUHbJ4HiqL6zJGkfXAc8iUuPoorqWpuPz4FxHyRhJ3AQRFRCvjuXkkM2SkbLHXQphePJRfNt823fHd",
  "key7": "4Qm1axciVLrQx7St5zjaqjnWwMjnPbz7mC8s6H85yaA5canp4ng4fEMqhhWvuxiZs4vV84G1kc3UAYhhYXHD777g",
  "key8": "3E8MAaGd8G5V6ePveFmLRESLM2fgfoDRyqHnMbNvDhDQVkAHJQZmJhHE2aNuiWBW3vRcVcqxgBFkUHbt2mSBMwnG",
  "key9": "2y2W5V5PbGv1WTcTGYz62WQ6PcC93fhEWpF2G8CB1Bm2TTfhrTDF5EkB3DR1CL3Ta95oYRMBVkGQwT8Y9AaK7x9F",
  "key10": "4EZKocEYFHh6Rw29QMVBG2c6GJNZeRSpn9J1ETn6a6fdaFZ2QCPyy7RNLXawJ3FNSy2HMESoj7Qv6G4mgxfBHu91",
  "key11": "3aCRLcp8Ci1yP7CxpdVEPxkMHnJYLzu8FmhiDmu47o1SAnZ5v5MzFQy7QpqHiZLTXC84fCDXM5QS7J2PyEBmwbM6",
  "key12": "67XyaCTAxrGARRgGSWbaPUmDf7VBcNWuLF8gEVSiRE2eh4rW7WYJ38GKNYDBeh7sdZAMZYif1n3vGx4Fg5BoApYE",
  "key13": "WT5BqHCn96hjhipuazahE89sCeXA9yLytfVTTByndAPD7bs6HQiF3zRsd5W24SpXuLuu3VVJXZ1PQWK9gt1859U",
  "key14": "5QnP1WLA4wV7BmEj7JpK2hnQadxQygdMQdR3sNjbRcNKW4WpBhDv6xB5p7SvpKckyvFEFBtamLquAZtuL3P2Ynxo",
  "key15": "4rX8Z86KJCmS935RkaDgGEPmjvjytY8MgsTQMFwidRif2Y9wKXjUDrDtHnNTioQibjpqRGRGKtFiwszo8Du4Xkka",
  "key16": "61bD2bygyTT6xfUSystoQN2qLkk5mxBQDqPQr8vJqkLwot2FTPkcVQGjUSXzpfzcSbUHB2LSoBYT4ChwfuXPyhnv",
  "key17": "5JqLdiSZZGF8jM5aQjaBmxP2EZtnX2rZhJQ5xLpK5PdWt4C7SJiSBfnbGL1PbCrY4bpnAPD9973Yksq9FLeVCsdE",
  "key18": "2fHFL5hEmi3cyFY92n8tkz6WzPQjx3WAevRa2mqCctNz8GxVhZHbFx5J6zmbyjr7qDfBasEYxmM51oKoqxPHBRV9",
  "key19": "2zDfTNiNJRRNCw8KSwsiX3F4JtHTvE8h7wuATJxhNFWMEwma81c3QVQmLVe1fHBh825JZz5HeqQ33ur8NtSy3Pwu",
  "key20": "4JQtXJCQqHji6wyPCWDgHxsPvojXTdfALqfsW6CvJuHiohAnn2ypfhvqaVz9nGSWDGZjna3Bf4htKkwZAWuoJjzx",
  "key21": "45GBFp9H3BSyty1Rofdv4o2yTfjwL6nD79ieb3o9bamR4njLFEcKgmpcrZxyM3LFHtuorWnetjcedvPYcw8LjvK6",
  "key22": "5nwYZhcuh7XiYeipAckApxnfFUzU1UqjRA14bsLFFXmxnguT7dAibzBNbdEC6gNSbXR1z1U4LeSofQnZRQSmcPif",
  "key23": "hnRSxzCYCHjjQnNnrJBVcpi726AMRriKkdHy2eHAFcaQrPP4NfUw7Zgq3QbVECTKbHXj2z1kQQrMWta5cMyX5vR",
  "key24": "vV95JQATpToQgWiwVZPaeQW5rhZ7VcvyBjCVzyjvBw6ZY11XjEg5KeWaGzxs2LVrrQvNtHxmabvd3xzpUFXqH5H",
  "key25": "2tu5DpfdbP5JdUMmHGNq9VMFC8nBioGVoexVtvqvmbD6Rs4meMmGnCyomJYWNVUai2SuamnbFU9EERYpcNuhCxXs",
  "key26": "259z5BUbsAjWaq1nhrK5jseVYVJJkTxv9xJTaEmTpiA6RbvQqiLSGatzWREiqQFQSgzqQrzuHB9NcTdr3jKHC9fY",
  "key27": "t9SjA77Z4GFkpipNkDjufohWiugEfEt5PM2NEpurNtU31akFzSckDne7VFncyvSu3BaryfuYNoWBQ8bgTUTWDVc",
  "key28": "5fpUu28bXpVXuDZ4g7e6HjuXeczmE2H2dxNT5qLmt8e6oBtZPbxRLzCqiCRQbeo1BtTUU1QNQeoNZSFZf6P4YdRT",
  "key29": "SvB3D3U1ha1uzV38coscsEUoMBoooKqiEzkFo8tn2S19rs16GqAh6SsNwrDDAgCXvwTYqSBR9QRbWCRo3Qw2svz",
  "key30": "5H3KiPbwuGaquBo1iQjiALgBRQy5dVyjWL1HjqHdKmYLN9utrtrY3BFtMvfbtdxbqqN1NpKeprRK6fjehpY4tiEt",
  "key31": "2kzybPWNRmSQf3ho7PcfNEb18AJXJG3vgo7VUNGJKs6sbhJueuZcXrRbrayVRgZRjjzW8K2JaVXksJ8ddjYGBjhk",
  "key32": "45HCMx97WZTCvrztQy1WdxmmJofy4RzhWwB9fHD84XCVfhYXqWkczqT2adKaXvSiBjsQBoqQR6jrYGcq2zsMdvRD",
  "key33": "iDc62tfAxFtnJ9Eb9Mkod3kvn1Wo9MT7z1VAVfsACJcQYqUiarJtWmynBcE7wNFrES2XosFfBwywRPfJBagqP78",
  "key34": "3KAQD937bPCMkFzWF1Zu1EFwnBKjiiTXeENCSgc5nq9XbZpaS9znU83diYhEn73uRbGZh9E1cHfVJhy8yNCKXsBN",
  "key35": "XqNo67AKnKFHiufLFtzTbwcBcnpBX2Tg42upR1nze5KMCB4hgtR67QRDLiQghFdAqFuEhEKDX6Fv9MbjXmXBi8X",
  "key36": "42uZ3ByT8vvFZxhACq6mQ5yfFNZ67zzP8sE5Vj3H2ZmQzK1FCgyPvJck4h6SXZ2juK3SPmTxw4oxYLnRaXySxUJC",
  "key37": "XVNCkQXdQqwS3Wcqza5eaU3rvpehBzr84EMuSmLkbP1P3S23MjEDrPfYuXQRvUqE9L8xR1ZxZQiKS8eTwoYmNUD",
  "key38": "3LCj31y6QT8iGuqMAsJvEF7Bq9JCWzB6PzaA3SoCJgskq2xZ7k316Hbs2efevFuEXQzEKK7f9NYGJWWdRAbAoQHL",
  "key39": "444KRUeiuMxK7PTsLiyRU8x8rqQz26GUUWxjewQcp8M9DR9Nyv7EmG5GpnenXsry8prxkfFNnjd2wTtTDpUyGciN",
  "key40": "5dKufEXRrhaUwtyFw2hDcub2zjJjd6oTsGVqFygzKFbDWfaoM7o1AmX3ktTuqRpBgMKeEMTjoq67F5YhLfA6JnfN",
  "key41": "3CbKKGzqgbQicPUBAajwzoAs3RXFnUeqjCbrgWQKyYkBfQEX9E1erP1yNBo87L4VR3WZazgQbGyMhqCrh3pzER1G",
  "key42": "2L5bV1rjTeF7KXE3udCsb2inXHEfV5kHyN2KshherJLz5S15LsxFFM6pWh1pb9d7gVGxEBRqJmUhbk5RPNE6NrHD",
  "key43": "2J1GXMvAmETQRaBkDscnHM8oCAaxHQWvtFzN73cV5N2HkcsSLa9YG5ziwd3V5ygb9g5QJ4Bt4gwzt84JTjCqMqsJ"
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
