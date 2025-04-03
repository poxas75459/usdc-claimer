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
    "2NNkM6H32mq1PcrSUmqXzsYg9avi5SinUsLieBEyKjNfCJNVR7z2Js1iBDxchJSfUq5FSr6gvrkdayDi6915pWvz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P1xw73JV1B2CANFJ99L2Evw38g76LzZxpRFEKyncVF7BHDpSh7kMMxAbCFpmiGNL1N584u19ReEZK3UReUBhyLJ",
  "key1": "3j4Ly6YoJruXqEcoHfzeSCxdx1DcBYMLagKC8wH5nDuGZFF4NkW2jXa62SzoekTyEHMN5Qdvom2g6cjHqRr64gjq",
  "key2": "5JXRgFLFf7fo23My5YwD8SdEcrkUTFSZNLqpRyeHD32iuJfanNB89MdBEYkR7SUp8XkPbjW74WVNMRd3oo5TUfV6",
  "key3": "2gjY8gRSJKfphopxPYYTKuJUNXLGMSXvvkybN7x8nyWFQ6HgMDmJ9a26cz1oTYKXK1eJ7oW95VihRsxuKJAj3CP9",
  "key4": "2A8zmDGZ3k8o2YMvmaR6bzCpSoUeUTsAc8J4Z2MbAvagjBgBgjq1YVdj8njEdpCy1TmSQNmFFCUH29WNAv3EU9Fz",
  "key5": "2SVLdkQjBrzK1khy7vjnLci98YshX5ZdSQFWm19jnmqidX464TB6mupKYEyhyZkvfKsS719bgQWKLr8GJsTFJAtt",
  "key6": "4ieo4HaGH2XgzupemZrv1FLBzHjsDk5dhksYARGZ3NajzpMxsFAVKa2fZsDziKQbpPDjuV3K6HkmgH1JgyHf9ju8",
  "key7": "99J8K1W4Ye3RML7SsYqTfmHdCWdfuxsGXnfjUVB3So6ocFw9PfkHYibx2YHsAAZfxXy2bQrpzDXEhJdJTKYfvHC",
  "key8": "3urqs7wWrcb6B8n9tPSJzTcqAii5b7B2iY2DARjTeCs3S17J5nsuwXyD845NFhYcXH2QnuBibSHfJWXw9ZKUZBCR",
  "key9": "56orRD2RZ3cc56Kr3Y5G5PwEKGQwxhhJJUXsn4QxoUPECDBJ2QXTuukuRUnczGVwRxStuaJ1GqaAubzZY8Cf2m4D",
  "key10": "kkJvgwcoaa86w8ropbM15weq2Gc7aHySpZaLt8uW2kSkC2AncwV8kWshqNCNJeC6jbXvteWXAPqkzwvimeMPbxW",
  "key11": "5Tg3BrpjUxDi1dVevmGg4SFRkidt6kkfbbJR3PmUy8YoMEgowWbUUfGqQWxBNKFB9THmtR5pvDsHPCWxeTxnzC4L",
  "key12": "Lbrpz3zfKHvPimiMpuWEH4MB9eRjZPG3tasvQ9ikj5TEisC6CmTp1yajcENVjWnHe7u7eAwcexLsfFjA56u7gPT",
  "key13": "381GEs7idCjKC8avRawFFfz5gB7bP54DM4TY9ZnegPxLr28XUGdkX4yqw85ZVjF4eezoMsxzVKRSmW2FMPr4W4x7",
  "key14": "17HR5sVigSNt6HrTgwkoKvH1uCCnyFxHjbXsReZsEEvmFwZwWFUQBNKtgHuMCh74KbqnfnwF7hVXkeND3TcGZ4K",
  "key15": "3FEwecHAujMHvqHHdnDvxw5BswJEWeXCNiwoZdcmJGvti1AkgkiaQuh1QHvVZHP5Jo12f82ZXiEjnnw71mB1NX3w",
  "key16": "28Akwqs57MAfWzTCKyERd8Ryws1KF11TcNSRSFdAhZ9g3t6Qmk69RefSK2gEUXG3v24EmjVZyHgGXbHW5pWeZAQt",
  "key17": "5pCbm4ykVefmQZkKAk4zA1ejwN4oYLDheQ9keNz5V7EaswRTckYRhFj1mfvrarnALNB3NeU7vrenTTBS9Ez3vWQj",
  "key18": "McaEBsZXmFRsF7HezEdGLvBuMxQqZLKvotcmhjkBAvRsB2A6HbBx9JLvhD9KAJLTGFsTiu8Vr8uWWFJAuBczeMe",
  "key19": "3VgM2QjbKTeF65kRpbRdET3R83KCkdkKamMMqTm2n6b5KPe8icJ4MpBJmWm6SGHurnb7s466UTFp61NXGd5mqbsD",
  "key20": "5UozSiSzJ5gy4eAikSCj71axJ4dH2zKFKvwNUi64Zww5JjRKJTLBgKxCD6dZSbiX4HFUqtJouVKPAiSMLSx1tdan",
  "key21": "Uf43CSXkMxoftHFxwdvPeW7Y54hj8kZ8yfpQaupTQVHGRZu7hZhUeYP1DPg8VaHtxJ4Mudzeowi2b7VNu9N3Def",
  "key22": "2HwEhLXxkAf8vkgHpdponsuVHwGAwakZQQuYmobq2doUMGZkSvga9bQiM526YXdpE9BiaDqrRWdMRZPqUURszPTm",
  "key23": "5r6n7oHF3XeCpyYUPZY6ZZ2CAhH8KaVag3rapnNKrZfUgh5yF32Fty3r5CyssZ83g7RyvxLAKpbYUd8xc9VNTN27",
  "key24": "47bBbLopqjt3ZQSnN5DsqkaidZnt3LforXa8PdhUdSx7s41PgJe5k9YTiQetesNHAnJBA7TKojFqTmPeWzvuig6k",
  "key25": "2invogyv6rF7AkZgSt6NDwdfxt2eikdeWGRrZEcWLjb5U45Huxyp3Gc8hvraSzZr4EiBykWjKFHzzQaLfGWx9LPV",
  "key26": "2PUqVzt9uJNDXTdqohHEr6bfksFGNpzZDAcoRs1tTcGUD6kKWQnLqeTBR1AaQchgkG2VRSNJG3rTcN4xDpD9yynR",
  "key27": "3P8oTsddNuZioTVVcjGWJNAc3kjCv6pCaMKc5PCZmySBM6pQ2ZeaoF5mAdsUnZjQLhTUTuKtHSsqFdnS88B1UQh4",
  "key28": "5QHGvE5JSofxcQL8owVK5DRZ7Q8mEzdSVZSz4DQvMZwszn2MzoaK64QU7Hs392PtEDKhvNpUcN5PnfpnhSpMwKPi",
  "key29": "enW1mGa1yHC2VFKQvrEYygW3FPKnasUGBsYFKxroYLMWHTCfQEyaq8xbRz3qpzpwHtzRfiwCFe5am6Va7o5ZSUA",
  "key30": "3EvtC78YHCHtkskPzW7JRsYBeLnkWxQ736FUCHdA9dveEzxNS8UbBhnF3vAxfSzZfz86u3yjRwnZiTbG84gnUSah",
  "key31": "4VzjJKC7DZT4LUP4Wy5poCiYpUijqbr95usLY3qzaM95aToQUxjFegWqtEKKRz9jWVv1fGnqzmZAag9ooh4agFR3"
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
