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
    "626btA8q8eA8oCCbTbo7xTq3xCpSWq9msQREGVdukJ22ZEVnDjd9Vy2n3XMAzYtRjUwFnpueTtPujbv3yih2UbSy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dALiadZrbN5TSNmH8uYX6JP5GaXqPAU2R71RtQzXUrRST3pVTNSuUfw9fJLeZd2Dwf52VT8n9YS9xLvnTbaDYkB",
  "key1": "3wncaeHbVShivQdcAQVMCiPsAMHs4vQP4RrrwV76boJR8uJHwuKYDoA1hBAKbn8ZPCPHuera7p4QfDWRLekszGXh",
  "key2": "3dJDyA4DrSS5CZqJKRDjcg1dyJiLYs1iAwCgpZMRpji7sXNHZYuvYgpyHxAAHoVMS6deEwLrijFVrBvYw2WpHUEp",
  "key3": "528zxcucqPRTsU5U4NSgdaDd2q9FZmeWE5kSJmrFtAu373kGbk5vvDmNz8ZGELHTiA2QChwDYZYXbequvBkGCJk7",
  "key4": "4iXyDqho4eXravmj6hxrJbzYBiDbK1PQgTm1Zju5jXs1RdUBeRt9SxLBHn386zL68Jp8vnS6cbsLoHjSPVA6GVRh",
  "key5": "2LaMFAmawHE7Xszp7kRBEaWeV1gosca23yNXYgXDtvQsHeqhs1sdeFcz25TheWif9QGxD5uC2b5Sq58HRAofPFvs",
  "key6": "gGDVJ7tzjP5ZMYk3v8fjLjAmLL3NrHmcAroBSRAX2RbvJRKDQLP8hfbuDXoDDwwNNGpD3X12LvnVSQHAHUx8omv",
  "key7": "1299fHf8VpSvpkM5nnxvNRQ8fdi378VUbKAr5zvLNLdyMXvHnjcih5nNNzgYMwPLWoQTjDZ6WX4FhT7is9SUV3Qm",
  "key8": "4e9CcuYCXo26CaVgMnZ6CDZETvzfVBhLyBfygysSnXybDW5T2xHyQ28piLDisNLpxMHo88DkVfcuBTE64uScXxYA",
  "key9": "5zG8Wcoa4QBrHtau69AieayL2o6qfpySSkMiTtsi2snNaei96vsEUhHrvsv7TFP9UBs8uAhgqSMrRnQ7c6MFqs3V",
  "key10": "JjNLpTjkRUqFSAxXzVRfYT9Jn45cVTXeQjDegntPXrLro4KGWuHiiViywSmoCVjpB2oqHNx7eWf778tJmCpML3D",
  "key11": "4fXRKZDNGqQNjE4Gvt9EdEJRnobYADEK9ajfHihwgF9PRzj82AbmmPQRMMzM54jeE74WGjo7kNSWBdy3YUruwZdJ",
  "key12": "652EFmEtUwL9zwy5YjaS4i23afq6hCBymuwPoCUtSzuEkJxqeFZPr2bx2yLSkcoFpeMN3v3MBWqfG7PBHRpqyiGR",
  "key13": "4Rd7qySge6CVexNBdSJyH5L5UvCHt3SRSLtZYA8Pp5k17LxapML3FuHwrc31UvkVB2x1ghpKBrFsseLswFHttMS2",
  "key14": "5rYkRsb4X42vfxYshJPCCsmU9cdH36XMMgwUfgzW5ghicR5BSMRWfgW5w3bjWqWwxSrnDCiaugBjJ9Vd6rnER2Bj",
  "key15": "32pRnDbjkGVJ6YKxsLQnbiMwS4F8GsNe5TcKfoxNfpR2D2SzkZf78Fo2iWj9nVxECXUhWQQ9A3P14V387xt24oTd",
  "key16": "3LTf1ti4qN4GSnXjeZAKw6ViNnXQQQjn1mJp154GKMsoYZPLryCc9ck3CcHc3NMkBKWXeNGhZfbuHZBWJdqK4tVu",
  "key17": "3vcufScYPWe4rQ1TSLSwxMSecLiJGuvDgc5J5kQydS9RgeCymhUvhtYgnXgFcYsb9685VzxPjTmJDaKL1wRAHKha",
  "key18": "67q5CrPGcrfWZHRwKVhHn13uzV2XhHqkaqpMuwzPtMJvXR8js2dAZq8S8SMEUnYjwRc7i4xcEoYuBKAPbSLGTKjx",
  "key19": "2m2T2z3KH5pBvqB81JnRMo5tQGRCzq2H5SuicXF8PUU8hARtTJmL7CPQRVtm5VeeuJVQQrmQnmDduhF7YyUvK8yn",
  "key20": "4q2ZNP5P8VmuRrpbyXU7LDTcHnaNLs5AZpJu47rSgNpeQ5z3x6Fq727WDHd5td9VMBzDeia6X1DCEgqJBa18rNZP",
  "key21": "4xZ1a9HjuKF8NtqxuXdeKvt7ZrrLmqq5oSsSQWiQnCF2eXTHgnKQfDReGkB1C2T7g9Znm7K85yF28Z5FnG2wCMm8",
  "key22": "55WPNzwVaGZoxbHQXhkmxHFTQ4qH2jJCV55MwvUtetXQv8BLVZuyWAVmCHZ7mnt9z4EAuBh9QohXEWw2CWbxvR78",
  "key23": "45GSaS5KXGSvv4dt3Q4JMXgx2b9Lw1QGRJyZ4x2ERFgBaPr7CtYyoaitHVJ3SQFPL6ZAz6TffxN2JHwc8k8QbJuR",
  "key24": "522QQHfzphxTyRjpmhAtAFArM3soVQTjg27TqCa9ibNMRWXwAKhH7NBu44pZ46pKAPoqrDBiKG45Y7JRxA345bXQ",
  "key25": "4tQokWLuzqVmsz1ThJx1PLrgZHqewuES1hhdkuvhg5k6sHaoUUFdZsewNApEx85F2qwmeH3xJmGnAvBsjmBudTd2",
  "key26": "2cSusE3NS3kFRtvA1G2QhbJzosL299ucGKxG56jJHMbboxCBm6fiTjzwJ5KS9da7S1cTSMNFZth8USNu1dGq4KbB",
  "key27": "21RmoV6jXcpJ8SNbjQ2UP1rL6eyirmhBDR21X5TtmLq5aGVdLczzMX12yZSPGGVWh6eui5DFhEdtovzr13S3wnet",
  "key28": "4wPUUVncVWQV8ZpZBp8iQAjiBbGDkeSCMxwvrzDH2p88AupmUfU3Gwc3NTFmeNNbGQDZbB7tjYg7bP18uPaY1oCa",
  "key29": "BXAbqthsbhNyeKKznDM2yQrZ1nFUK9McsiiJfRLJyHB1dk2e7ugWnn4tcE7G6H4woFCTo5d5juQQnpDce2vUWDe",
  "key30": "5FnNJuGiAesjVwq47s2FXRBdM8sV2hctseh6N7wtT6B3GiXv6vj55WucVbgUEkvWXE56Zn3m1BNaMgzJ3puTaDot",
  "key31": "4kSm1BUwdXUZL3XEssfyjKHYxmR2wGX8Uvqd2JbBD5wWrRPQSi5X6gKCTeLZzo7hwFrbXDX7X6mx9LdQ1XTKzrwA",
  "key32": "3C8p2rwuaqwfLFqyBVCuK7a9d2V66Xt2MA3oJJXEHpiuQ9jrkxyuo2x3rGhG2hUgHY1fuuCYZs3Fewb73GGB8a6L",
  "key33": "2dnxH696A8TEKYVsx2xigjbEj4jENGN7RhpMWZbexGx2KoGFYVL1RYeXPdkUquf9BKo7XNgHT6vgR4sgvf3YjwnN",
  "key34": "2FuDVM5urqd3zcjefsvrNx2nLeYChc9iBmt4GZFQZxytkCjLUBL9G725ztruMnQKyYwcGtk294kmQgByU9B4BgVP",
  "key35": "2xp6fEbjSqU9xZ7bTAwvMBXgVP3XZzfjZU7BJzuyr1uvEYhSMzFq2mKno2ffQFhC4TBn9j4MrafnUS9Tt8V59zQd",
  "key36": "hUp1gEj52MSE1CUyQCmem1jVifmFGmfYUCRhbkfx4pDqimWgi8MFQmeht4BQFPE4q4H2bNLq17PBoLnsCzAML6u",
  "key37": "2qV9C5GKEfgYCiH77DdzXWh5s1AswgTVLPMScpfKyACq1H11Rg54aftvfQuHBzvnYm7rM6ELkseCc8BgL9awgSqr"
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
