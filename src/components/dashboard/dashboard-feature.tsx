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
    "2gquCUQkreRKVyGL8aJQPXSRhgfAmWdGpFW82CcDNwietNU5fYFeTQz5L3NW1K1RBJPJk7nG11USArMnR3uVaVUX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Lsim3rCYzBif5eE5TVVV22N2ZVWaSHKhJTUBLXKmScMKPLtfn7aqq14tqXkzjYCnFwBnJmZuUXz2vng6iv6xnU3",
  "key1": "2eVuZD3FnXa2v1W5v6BCKatnotSZLAJtdx2mSNuHL27fFB1du6PdB1VsRDpNww4sCyBKmYsjFj1ZZ8UMZRn5QNgB",
  "key2": "2B4FefsTA7NWm7eF5Pzv3B4AfDqKqosW7mifLVA7Nx4MS98CzHfEzt6ja3t1SxMtCfRV8sQDN9FSZyRVK6JE6coY",
  "key3": "5WiE9SMcHCPFLMt412b63ELbxADJFGosBtuUA8nS4j3Pru4Rx99jaSrTzh2xg64opvHnHAQNZyD2HANm6rY9iBe1",
  "key4": "WRLoLX7gsDExP1dxrrJHHEbrE4pfJq57e8Yv2rrKoCxNeZtN2fMS45wBXnBZtLmqJZVhzW4x6o7CPxZeaqtLEw1",
  "key5": "5ebE7BXWJRzA5wRN9Vwtkp9yPZqsKYjYEYKEWFqnRbmVp4MXS8aswfK8EVZHwNopGpwGgneyeH22TomzWeF7VkLH",
  "key6": "2ZXoMwJeCncP1pRrVdtz3obayqCf5noo1so9DXtZPAXEwwRyxDRVdJaviwfwSwYyy1DvgnRM1XPbMAX7GinsiJw2",
  "key7": "6214EJBPsfMcyST9T9YmFXjvqN2LQAB42Xx5wZEic2yLJ6u64GA56UFWf8UrwopbzpJoNCkmfUsCvrtLvLoCRn3K",
  "key8": "28NDqS51j9QT2KC7SA2QPfkbjRHvvix9afeaHiHrtT3Wun36tKKjaCCo4dZcynzFWDh1jJUWp8Knus8QhmXuejwz",
  "key9": "4iGZZYxv7CdsKVT5twAsQqHPty2Sn7u59Y8vYzd7ojPL6skELrjgSw4C8ncd4LPoY5uNmvtsPjkQoz5FEpjG1Y5s",
  "key10": "kusHYt3KLedBZwjXpTyevwnmY19tinoSCHAhjL7Sq4p3uibwpFkkv2vUBbo81ucZukAESUYc23ARCqGZ4tPS6yd",
  "key11": "4xGmTsf3n7RfDhi8XPqi6eyw4b8BWUvRFbfHzE4XA1AYmJC6uAhr2gpWti2QbggnwCs4nwaQYPHrH2EJdhizkpWh",
  "key12": "5o9Xw4iAndJpAtMXm4TVeB7mA2u24gQ6aWXgmZGH12J5Qwv67CcrPW7LFAmka2KKQ1vbwwoKMkGokeheFadJaVai",
  "key13": "66jW1dHfLiTtiePB6mwpPmF6dX1UAinAs5ZNJi94NVeHgPJ3dGAuGACEbFJx329cwXS3fKLWGoW67due3ZjfUqvJ",
  "key14": "3FEVwnep6pJVzHWrxi9nJAdSHwM7sYZWfzXFPcTZYhSMvJxeEtGbm2sw1ikRPMWLbEJLApbJTYs3yfELEq97vqkw",
  "key15": "51b9m4pbFnWztsyccd7oQM6ivhsX53wNtgTZtqumkkg9L75GYrjLAbFK6GQ8HiqX6f7LLACVTywvxaR8D5Dxn9iP",
  "key16": "4mo7CYtzeCGNunKfWZSNQfSzzhjmWMBYxnazgBodje8Ri3U4V63F1CoZGTe4mX2VT25ErMk4N6LSEhCrwZAYm5Y6",
  "key17": "2vuf2TYZ3J3BEyrm41z4QTaiV9RTrpAdASfC83RCpi3V3DyN8mFuARtFyZgbRvNA8JheU8AQGe2siopGELy6Nm4e",
  "key18": "41g6zw3ueDcGyRX2Wofr3xFfaEgpQrN6F9MGJcRq4ctbx8SiUrPVfzQNfYWuWESUiL35bdGeffbghckK8iZUdWpT",
  "key19": "2i7KipudhawB2nJNvgkMhqEAbYwshg2mQvN1ss3EMjxGvEtCzZrK9nfr8rxw6PAgkUM2ZGsmPQ2PBwfRcckodct3",
  "key20": "2qNSf8zUCv8JgMNy4d3vkbPNZKdmg7h4N5R9XJ78s6HNXj2b9ZNYNeUCPHhz3jReQ6PL6vSRus3df946sQnSxSx8",
  "key21": "4QkGJtUqsFmqGgru4xGZQGaBjBc9fo3Uqj4hTF6oK83QrggyT25Qnjra98tS9Yn3oEvaxf8X9EDtjiKJgu14xFFB",
  "key22": "2tVaZEjt7LWCuBxkFBfhf7a1A1BadbFtco6e7GjQXWu56issBfJVC9Pjui9WcrksjwMsPbKL4MbNEJZsSHug1hn1",
  "key23": "5wqmcxxvfS6SiFg4PNH2fGZ3jzGznuBNzV1oxZgR4vqNPUvYQjuHatjAvWuMVtXna4sgN61H2mG6gBMxxSmVh3sU",
  "key24": "j447sRsLaVUyuqp9tooTfXtwwDsUjk48dKbrBB65aapCs3nawfmc74kEXfkB84WNZZqP6SK64WRaWXvmuXcQF98",
  "key25": "4TdNx8DCeA4F2Hr974ZXjaZh3MiRBVc551UZKypvG6JXhyWksW3ZfBnzd8UFpcywVmbBYPAmBknsXfBSrE22vr2K",
  "key26": "tK4FCWTzckeMU2jXqUHpfgPBaGoviJ8G11NCyTQ7bufRvgwYVgr5mcV1LFikrJ2xEBH4HG8riuijjLWXZX58PdR",
  "key27": "3yXehgMXdssBW6yJgQTrbw4gnyQbZLibeTyJjKJZJ7oHobEdusRDtdD7GY7i2PTAFPSomuMifyVgR1zhSHcPyLuu",
  "key28": "5ZxheectANRKXt2TbPXRzvZXWdZgUovsR1hZ19BBZYgR2PjYLFXvaBMMGRgXEu9CKCwAT994NU2CewjuXVZ69E8p",
  "key29": "5KJWeb3GyeP21zpjNM9WPoK5Zc3r7KN9AviXWHe7FwFeFQbEwcstvr1uZaanChbhZye4G5efH1QLY8bugHJBCBcA",
  "key30": "35DdJpvgV34vzw7KGwVQjxSseYgHL1i3VE9CPH7xGxEibtEef3aZP3zKrPSaXzrnwpEGHTjukHR5fySzE6rAKaFF",
  "key31": "3jR5wkBzYPGEUEtPoLyniN7xQyN6Fcjs8Tm4m3PUU665wbhc17zzvkc3vnsisfV4HqH2xDr6JaiRDM47oEZEMCQB"
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
