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
    "5tdubw3mbsRKd8s35VW445ZWiokS4omCKz9ro6zyBgzwf8ND1NTExoVj8st1BzEhKH6pru9orYh1aNynBLcRi3Gg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j1fygFThSwdbrnGFm9RpPKm8L8Lp7cyQPDaVmDfpbX36gWZREeiXH1ocj8RoKvbkHy4GSUhyuDf78BDCJA6hrbK",
  "key1": "5QNGXAPsB1xY7R9ZDhwrWXrQoB6njrLTPuM9eV1YJ9BsnP3nyJoGvVGija2d4yp8Ggvyu262ZkEzs9f1T6f13U4v",
  "key2": "3B77HYByVKHCFceBTt2nq1Vi7hsBXNcjoPA8hJMv3ozhMQznmqXfbTWnyZf4JKfJzwT42TjSZs3KcR7ZasU29URT",
  "key3": "4JdKwB68q9Th92vPfccLy7otZMqYFQFxpSDJaT3Drp8Lq3rxLQeRebMSRN2ZUHVpF9pfr3hNo9MiuRKfBaeggGZd",
  "key4": "F9Zf5Ph9oM84ExVQitpdw81P4m5RkZU49zT7YXApwxQjD5AdGTUY5tnpxp9Jq8DCMfbDP5Cd8KwGhETioWBPga3",
  "key5": "64L2tvdmpYi81ChRpGD9EtQvywDLkbQGNAf4ryzHAJBMNs93jr57hd3YcUBpdTqi6yUotB29SQP6XjHGDf81MLNs",
  "key6": "9mB4oXc1TTWyjRnr7k9Bhh5srx8dEREMoH5WaizUxhpw9WG5wxG8eSEp58TnVa2BRnrhxAF1Hyw5ULPzRijRFFg",
  "key7": "4uvdccQPVA7qo31KBtGonTPAUybjCfGrNp2RsYAuNtLmn7qth4ryqnBc1JP8VwLkKHRGnaBmzyJSB1xiETzTUR7J",
  "key8": "4uQa4UTx7MmFmPJxsb7GVYK7MXkNYyHKP22tKh3h3uqRtsT4CT3iiHigBkJPVD7x6theZqizQzwARoNvdr4rwQpp",
  "key9": "5gswVPXYWPJipk7RiudDedsqhoMvaSeeG8ck2YqyiovJUZrRsF3fzx3HjJYSjSzsqfH3C9pDoieriUeH5Ap4BrT8",
  "key10": "5Febo3K7e3QahnmrhKUAszWtTaeUSuHFqfZNxcdXRSWnHoCSskUiv6wyaSKECeyktsqpQhBXLc4hs8q45vXbjhk",
  "key11": "Jr41k663ah7nEUV2NHaXuVtDavZgMdbFdfQJXmMgHMxwQAbEikhJHbsGr6uFzpr6JBBcReY7QAxWkz1BPtTduTh",
  "key12": "DhHuGpxrCRJNbksXHX8k7VssBNCiaGJvECxSFVUHEQuYZJ68VQyutMhewUWr7NhqVRB1xCpSVYVZGWvWC6fWfX9",
  "key13": "37J4UMvTjSTKsENfiQVTgZc8gU4GjZ7XS2yWH1XPEkqDDnfZ17Km7AkD2YkGEzK7utLcMCNEFMUBBkVQTm4cdaLt",
  "key14": "38wPjAbUnb81aDGBVEyKAX5asenTkXtNpsrgB1Tkt6B5LNnyMakZyrCjyaKbEEMhze4uP6FrN2EfjrikFs4qoujs",
  "key15": "3evGYg1StK1uCSkTow8fmmoftx7EQqc1Zp1i96pkWNhwT7k4TcoFZsqpGuQYTKVyXGj7pxpHtMzERwmk64sxmXX5",
  "key16": "58TAB8eMMgPjeM2fUgpdp8f5MSybULgYEgwq4V69yJ4gVWLZykoSQoYZN8DoSUXWdKbiadRJYoJCV7bDzkQBrBAC",
  "key17": "2AcUYWAhaKdP7oMvtjc9ozjUSdWmaX5S53W6WwpcHVWsQBjtCtJE4rcdQobQkhi2yTZe4vpP5qW1nfpcizjZ7j33",
  "key18": "Kc8p1ykuYHwWM3frc1MndbAFfk5nt9jAUUSC9nZQ65MJ7ec6sKzJwiXaRDJJqhGALDxarngjm6uAiUzAd4qsPNo",
  "key19": "1oJyvhHo4N1zmcMptq9XmNumhg9tku5sdzHPUibz2y4LbN4AXcB42fFS2htfDJ4v2BPvsEpaLSJujydXtYFLANz",
  "key20": "2ZC6HbpxaeiYQFaJcD5krssno9RnC221ia63EBfJgbEBsfEdwUgvzgcHmP184aEf3LsHvFaFG7WArzR85PeEBcrL",
  "key21": "33HS2yUaD2HHGHisW2gNCyRsookb7hGAQW4y5ppfmfqFmEokyXDXcetnHzVuh1PF4XzkKoYV438JBkmNiqxsET1y",
  "key22": "5gSLMuWmRAd7iRVF5e2CqBUbgL5BLadHvK1SyaHwAyynuBHdvqCQLbWo656KAmbFqaVgqh2J4Bujw7bvttSicuLr",
  "key23": "3r7bzyhxMu82MFck5yYrzBbgVHrTXQ5qusua2AhFwQwgitxiqU7eqaKePocgPn4En4MksNWmbnf8c7uhsBggFg3a",
  "key24": "1gm1pB9gTZYEGyFkfN5SZ6TpkE4gwj96HA4R7iVbWFfz35PzrDb4HgwuWxpdQhdkVDNEsioyBmczQEAuXa7faqd",
  "key25": "5CrkK4cQvYcj63SToxNXZYJKTbCa4GQVZMGjXHcWv68yaVEfpWEVLErenAKi1Bsdna5FzgzCd3UAHL8cjpKreXKC",
  "key26": "2fa9Jw5aMaSV1EqHRsLTB6tRwsJmHLU8YmhqMzKecbWP1KMZWDR7kovvYjouKxaSKfKNZ5Kp9NPz7jhb7U1JnHzD",
  "key27": "3vJAzMHRkVLTYRj2gbT7djEyDRw9k1XVMoBPjd6x19z6A7puNvtFqfdWKNMpa91gjC7RZTvou6TWL7hfqQU6z6dw",
  "key28": "3A4vpqQbfx1ZW2u4vAMr5R4BVxx6vVLbEZhJ711Xf1emLszjSWxzT3VUStKVUN8jyQUZe3aAZYjDJsNodp9EJCCQ",
  "key29": "4twUDG4T1f1BjAKG9mWJCC1RwVcCMs1RRYcE55wb3xKSzwRfVkunCJCNLaxjLg6MvY3arSTmtwQq4tLwas6CP7vS",
  "key30": "4dsBafGDEw6xZjYyUkeQoyQMKAYcxmcxQmm9hUQ1zB3oSEJqkd7Sq6tZzuPUyrBpCxASYzicWJjNCLz5VZutCjKT",
  "key31": "2xJfzAVNrvqG3i122qJm8E8AwzUUaM18zgE5Ng3ScFU1wJA6aCracVkLiCRvq7htTApnFBVMSjd5es7XwGsPjQRt",
  "key32": "5PoeeV9cprHA6t7zH3Xr4d1FhTE1ibpQVSk4V158ECv7DXDYyVBTgTUtVX8UbvDeenJftH5faijTSSzmf6fmGNDG",
  "key33": "4FXFhhe8VTFchGH4irD1xkRAdVLFYbQYHsRQzWAz72mGw3jy7NKUFa3K9GYsTap3phHJwawRUSGg62HM3BspDh4S",
  "key34": "5bQNLhbbX4huGPNWdA8hCmSJQXDg8MtKYWFZkxQhcz5p2JhvMFuruJKycQtHK85mKQnzysw5AaG87tRwnMTm7jVb",
  "key35": "4GSGEWAhVqgo8XnaJAxuGrsqsXvXBMytV54k2rzqfvbUoPBV4HijmnyVF9jJoCHkPbNTDaqkpek2i3dnfpLxjpx7",
  "key36": "29hatPeqca64h52tcSqKQEaCbPzjwFXn2ggtNNtGykwY6FZezY8G2wJ1A96pxuMfCgPNBH9ZCYG214fX532zD32X",
  "key37": "bx2VbuVkz2yKwauMfyu7jinCwyUbYwz4uP5JnxW5fhMGoprGTNhRxmSCvpvrsprR7hYXWVUmbEHcZaoYVcW9fFN"
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
