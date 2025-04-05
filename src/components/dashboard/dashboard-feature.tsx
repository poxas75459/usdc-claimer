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
    "4HACCDhte29TWhMutnaNqwVgCp6eqo186uJopeG2rLnFURYajd9KtNeciqNbrSXpTf4gbiQFNzRE1URxrtcbhcLV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KvxGKXkPZDxi6uqUvLLfj4EohK4sByYEzxPFMfCW3S9PDvgy5LMeEpZJQJ9CKGpCBSHs5gY5AKTMTiaKgbS8VFC",
  "key1": "5CbuzKebTVC7NjNbEnjBQBqubw98fphmBrKvRf3Pt7miYevq357YhSsyZR9vFwDDu9yYESEQB3QFE9dqDDU5FnF6",
  "key2": "4N7mkNDCQVGYc8H3kCqDTLMtMdfQcGrAtPapCPMmootWGrd7CdfbYjKS7RuT54fawzPKPBV3NCn4hR8uoB4a9hVD",
  "key3": "5mSoiZE83RuRn3QQHr45sCVD1W1HfQsT3oF8Zc7RS2ipVQ41kM7DM2RBRYMjiw59Jw26c6sPgcdgwm521fZ8Djqu",
  "key4": "5FB1iB3Sq8zF2D1ZG8nTDbGjABxhirKA3TJNgUhDhKATGp89BQ4ZqcHfKCYKbRytpK3q2UiCft7cyqaXyE8JEM7i",
  "key5": "3Pt6XbT9q7ABZZboEEdjr6haabYgHZSXGMkaTwCyi7SSZB9LobTJn55ZrkfDqJW7mAuJfWKitVaTj8zb5hKPGaU9",
  "key6": "2Dqfan2JDyYzwUBVdq171X8w5mBqpNArKSrfR8ihfXwPSXk6yPkV67jjUnRtrwwxE7AVk1VjQJKzKfxroAWZZS9x",
  "key7": "44t39widgTD2wU4BawDjjLwepH3M34Ez18stxbaDFXTwUWS2Nxd5nNfPTzdfiRvVRHvhEQxWZXkHTrnEYyDWUa7i",
  "key8": "3cUnzt1WvEra79YDCaf5tf1Zx6eey5z9ZVANTuYUia2r7QykUPn5Zx82do6pXdsxvRbgqDGWeZacMCHq96TtrKEw",
  "key9": "wriin6hKVpvs81THL4Y5WRUi6XkhquWofBGcu5vLe447AhnpACwQ3EzgyB5oaWeG4gqe1tPubwJFi9RxJpHQPLb",
  "key10": "2RJghyj6toVrvizSJ1SzPS47FZmkPLfa4P5HMFzNPvQahPb6u5m9xaKMH2nvz6Uk6NmochZS8SU8qyrdw6UyXvhy",
  "key11": "3qaCVHsit4cvPRtA8hdVbpdRLmQ5b4qEQQKavKetKrnJCtZLSYcafGv1R53fiikanzKLDx9pKYoh3K3brhdcuaKm",
  "key12": "22yndckscbzqSmCU8T3AprxGiHtwW4H534mbfJtAs7G5nHDwMVYvV7aQwHnFX2HotRdS8GjJyGesGZfJSAWqL8fa",
  "key13": "23WUPLkgbckXevbGRguUAgCBSBqW3KwGXUpLVfeBtmLod7fZqjRGXkeDMN9wWnd5DqHo8XMwRTdK8wGkhSJFhmSX",
  "key14": "2ry6bDB9yikaQLsNkxUWoMNzEkGS4LXHFWgGPGP9nAw3zAb11By1bpkJjF5vuQjFmSo23VLyi4JRctiGQCK9XfDk",
  "key15": "2Gji5dUhrduGfYYn571C8R7xmbNz3ZHrjTjYfvRy2i11DB1VABX47TtXC84fj5zse7RfwmzA72436kwNVuedZvvr",
  "key16": "4U1Cm5x7uJPHSbVtmyYBgvtkhSHqowNGa9s2TmWBgFhmtsCa2Ya5XYFgwkg2ZiBM7qrYPDLtM7yQsfy7pTZuV8Eg",
  "key17": "2ggYSw2D4dcLzvb9LqyDgtnnSj5tWaVSyom5hSVPPvLDFU7VWUGkcKmV3Q7BKGRffwsCRoEEd5ih7C29wjN75Vrj",
  "key18": "4bscGyZ834iEGB1HmQcKt98vdo3MM7aChZpDjHz5btNm5hRjCoT5WA8toNBffyyj5dsHJaqeisqGRkxzuLGRfJXm",
  "key19": "3GLB7JicsJjzXbVnAwoxm7H8Q7A14rPDgArNnpGUD4mkZHaJ6D8VUJQHvtVcmE8DwPwo85XonDTHzqbQpALP3je5",
  "key20": "3hUQMgHFwhvs2yQwiNaUU9vFfyGS2y2Ahgca3s3QtxC8F2346sZpLo5im7Zkqno46YFvB2yqLQpc7jpruRzXXoKL",
  "key21": "4aQH5vqztBTnUGa8LD41xcBWSs2MR6URhU1E1eaiiqB8CPjxwDnR8QESFZXfa2v7bctdViV5R5VN1mM3MZuGKP73",
  "key22": "sPzEKoTLkVGqcVX76X8cwmnGdXXCipFs8Tnvqw83wsXHN9sHLTUCDCxjRtKNAxHuU9o1HqbMUfF5KveqMmKoebG",
  "key23": "23XjkBYbvJSeaieFMdEQhKYVRvDtskJTJQ4QoUorjs4zRJT3YHVFDxQRTYGE419u2qhwf4GzhmtpddVdE6qbxsFm",
  "key24": "3AsHWjkgqz3QRiyfQSbNaQzRUUyhJa9SkF2g5qa5TZPiNha1un2GPsZ7rSoMedxft3waSbEgnxKZMVQUq2vhuAxV",
  "key25": "uxLqkfX6NS1DwxVZmrGiCySA954JRdpUmYHbzmbyM4PueR9S74aZFPKemPHecrKvzjputQceLMimvzPfUbbhLMV",
  "key26": "3T9MAcHssL7MnRTH6RkinanCTx4PEhYUCKPG5o6tpvtsnfmUPPFnRkNZpHuuznvxYzmo4sJ1Y9CLZiKSiQKbpEa1",
  "key27": "5R4WDJm5NyyHwtDSB6p8jvvsGqGdLhLQu7MwwBg6aJDxn4EPNHWw333snaKRc5J2vp29aLgAnaXQWEGGmnZNSp4W",
  "key28": "2CJhdikKooqhv7oAA38ebnPi1zfQD3RhrMQ1FaEfLnrnVdXmTLTZmvgwNUvpvuQeDWW7ui59yENAxQbhPeTJnXmd",
  "key29": "52Dr8snoyAVHXgQzqgAUC3D4t5rwPzNbuuHLfrwC5WKzDr7jjXEiCTyGEWfEnjVefFWrwSC2kyua8EAybdvn6m7H",
  "key30": "51HgiD3nMbJ75KgnZRdJTgL7GbHN3CSqvzXRAtX4TbAqhZpYoUMiJoVvtaEYf8ibQihs7BFqmpGvK3h3rhZJCQax",
  "key31": "5msqbRoiSdGkZEsDbqgsDs9Hhqewvr3kDPPXEB2DzA3UYD11y6BNk5XT92XSQYBApzzEiLc3UyM9r8Sv9hRc9qTv",
  "key32": "5mpFXZsi8gE3mag1KT5GuWKtPeYBawrV6S9XicEXbdi4ki8uxizvuBATMHvuR8i67kPMYxVEXPpYwxtqfiiDdKxh",
  "key33": "PLPKxyoCdRnmwveiTHgAbQkvhzRLg51ZyttVAJtfsnmRMTKypmaeQYqXPVNC5XRuoWEHFW6FrMMnqy8LiwX6jX2",
  "key34": "5RYaGpDjDxXokWGJCxfqt942WKx5HPHKXRpz3L1z6YtXaoLMXwBciJXMUwsgmD3M4sMpv6ujUSmWYr316G4dgcLA",
  "key35": "3bz7rP3McUAcjDcfJPi7wjYZPoFyzcFbLyZ6t1wUsFyqq68qMW1aB8nyGGpgoRcZBHos7nWxQ4Cd7DZP2xA9dBDg",
  "key36": "4q8mUE5eaj4J6rpjofJRuaZMTp3H2G4dXHZxUyUK9wvktGDecuCmF9bAbR1U6ZkXmkRHix4SgYdmYYu4HYNW4iQn",
  "key37": "HkrmE33gJGvi2dLLKTCoCug7v4BobcCXPskURuofUQmHzR7cA8ayrpg6RjFFKvEuhMKNzTDurxoE2sLuabGPKug",
  "key38": "51xP6FkewPHnWNH6BbKY2ChQmQRu2bCJWf4dfLCRtui61SFmzD5nRVNdRiBjzyoYVk1AfvBYED2Bs9xuXps9ZAzN",
  "key39": "2MpCEiaZ7xXdc4XNY3Ezau3w3bjtKP3WJRHJ52wLDbrmXDaz7bQZfyiMdwwXZhZorLQzWaLNe4cSHrheCBTyUAeZ",
  "key40": "4PDpKCGZF9ruYr9tbFBC5eaUXLUchpartGV8mddX9LnKC5oeQbfwXBDMChuL9zMhx2EAkymKugVAcwB316YQU9v7",
  "key41": "5SotmNJy7cKtjD44sFZcwW49iiCppVMum6CzYMKEHXnG9n8Bd1divHG7mtPzEPACpPWXu8ZMbSJCcguNPJ5zX3wB",
  "key42": "4UE2Kzn2ukU2AtnTkoVzxVHjjWY4VuTUpjScMmV66LeMXUXbgmq2t1y7VE2TUvFtZNSunpbtpxPgC4e9f7DDMVh"
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
