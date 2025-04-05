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
    "HEMrnsBiGkP5qh2NPtfeye5dawpcJESmPKhRpW5hXodt1iPnTuYrdJYUHfLMbURKe8GrfNriQ5wP1pNju1XZY53"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iySmsYeoVujp7Dr9GqiiFksdW9T9jUmCf5kgHCvNebr5G3ZqXt8bvwLVLZeNMGrkmXt4hSmpyoDvvwhRbHzjtzm",
  "key1": "3fQJUpWf92GHwi7z3UseJLMwv9YEHBoRnwMjn6GKkbbaooYBnWY5rHSrFRS41UYYJPDbBquB2wr7BPUBnHA8j7dF",
  "key2": "35z8GWNCGQu17Y2UeNRRHyYvF8kLnnuAV4bsCDQNohoDXEtbPqozTNmLWTVHUZEY6B7mBXoZcpHQ2FP6ZzGQNubD",
  "key3": "4FQGcy9dkMfazftGWUtESdYtwdqM989zWHjvQxLjVcatvqMALkhKupvH9yTiCFYbAFcGzZzzpr2CNBjB2zoTjRbF",
  "key4": "3f3ubTwNGkNigT8XAvoudqLwP5rztsdadXuCn8zKV5rgkefmkNV2ZPKcB528WjUqn6ta9QAD1NYS5ZTfJUF6VNRt",
  "key5": "2rXSvbaMXyGnwFueYDiW2VK7jxcdqu196soNKrve7cjaE78tuEVA6gkArxtQbjZnLBVZoVfJDqJNAye7xk9Sq1So",
  "key6": "2KA5BsYWscsL62PzoQwummh3nx8EBMvukuviEscmKDoLb52gXU2VcfVLVTZBMBH8hnS31dmSJ8pfEaekT6CyTzuj",
  "key7": "2JrssrBDNTRkFgScnrszEF7DhzZ53sKaSVFKP4r77cKHzvneK8z1bvmVTJK2epceAxfzKBF4Lb4Sr88TrBapq53K",
  "key8": "3gXVrP6w7DahdvzQCaxrycKPg8vCG7BpNs8xZrMniWqXEsBr9eg6etdFBSUJuRLXwQJXCKujNW5NmDsCNgdAYfju",
  "key9": "5gE437uutH2TNpVfYWKFfPWo7h59wBddVBrgrhuW5wMVtsBf298s8L5rmYkVJXW4gkMT8nyAod9J3sFej2pmLmve",
  "key10": "4Q9RfXVSLey1Uwt18PrtLfvqqYcNfaMdMbDzxj5YYRvYkgFzaNXvLvo2darYp44ZeQxu5eqsUaZzXmu7orDjDUXP",
  "key11": "2U9BPkMrtZMdC8bcV4y4sAjZy25YMWdbybrbG9cCXd5NBJBVv7cY7WFUD4XwzKnk3QPNWsh17wJWHQ7CTL3VNK6U",
  "key12": "3VuNUf2wbDnUyy1eVNjbsBvAuwVbLpytQH6RVUG1aJEdB7CyXxF23ii8q7DNRryryGJvAy8gD6aNrvJhF5X2j4Uq",
  "key13": "4rdwrUhnnbYq8yvnMZ4YjDtbEowxweijciS7caAnGERsSiLpsj3g5zG5WPkMovi7M9XpM9tgHkS5QnWjtqPnoL4J",
  "key14": "54EDXhE3X7UCPzgTep2joZsKwB9zfwSJ83NwxkAS2FqA8gBYXSYtoCdqnbmW5qMqb88iovFnbFR6X3ndTaWDGPFN",
  "key15": "5BAazJ7v3bhVC3wKcE4wae6tPirdJuuac2AHvGMgT7u1i5eFbDJZ4fXiEho4JYqyfkiaJcQSSAzu1c13Cc9FXRrz",
  "key16": "frCffhBL4krhXz88pjh2D38wL7RUwiNqhBrUKAC3gJNQXqey8C8ZXPAHd58cDcE2gkp86YjA4RYsQDHW6aeSk3w",
  "key17": "aqNHQJVn1gFuPEbYJ6HCUZyoFdQxDqzpZzTiQM5cZHgAKhB9TxrMCE1Tt1kg2hoDSKsoLSy5zgb6A5HmayEGp2G",
  "key18": "3Ps3Rmzo7ZjcTwcKe9JiRpuQoGeZEwrg63hE115NRpYEvaoeb4HeG3Jtrz4bXCUC6tXGHrHAYgnnwFjnRp4bM2yG",
  "key19": "ya7GyQW5HDHw3fpLi6mG4idDrT4x9spbZadp2dTZFREXKruyoAC2jcuQMd9vdgViqidu5iVcPAoWQmxdfTycQ3L",
  "key20": "i7t6TDQS1S4p6XwpBLf8di3go75RQHGjrBb4G6v8thBU9zAg6sTVPByVFNS8d6vkiyD6RJMnnEbP4RyV7E1gq68",
  "key21": "5QXEMSTGYXxZhjFCfeS8tw2JTB5ojqtvEkh1XriBD7BNammZaThHY6n33QaujdwSWiUA6gwscpTKLCYvEwSqCbLi",
  "key22": "eE7G6UPz1zXNG7kUr1KFijs8KxEVH5CjbrLTvwdsEbKMq2UTCT8aferPmtFcfDPbAavx6jbuz3tksV56hc5BKn4",
  "key23": "siFrdDMBHrNserbeNeguy5G8FBBAg8fXbF51HGJThsWZ5vrA5RbPhJG4PoCcaAj1yWfKu7KqxYfdRhUdYV3btZF",
  "key24": "ivXUfZFXTQ3aqzWssspVHi6m4MRMdjCjwQTGohkefSPtEiFDh6GdQuDmqbLcqW6fpZjNYMEmrAgn9HhK1WDNDKE",
  "key25": "58cARwUo6LjYpJ6YRZmEpwBbpzqVziV8d5C3QL77NMrb4UKZh5e87mosxVLq1hd2jddSFefzVzaNELjSY27VVLzR",
  "key26": "3QiRBWPgysdz4WRqoBBjrThiuV1sZPrifoN38UHAvdaYZP3cd7N43mrPhXPyyWXyFAkZFNj1pXqVk3RXcMVNce6K",
  "key27": "VP5RtHrKe1iUzrPeJFQPK7STL824CP3mioGwEQd2hgj2JodMQqrzaxqbt6cxuQQwytf44Ufiw2L8TbhyTme5kNS",
  "key28": "5ikFRwwYytAsxvD9hsywgknihZyJLbDDbfY78eDo84kYqngG3HKRt8rSNCo9W2Z1jzs78v5sVPPnZfmR8czG7CWj"
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
