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
    "36Jts7uStaVZVpfLM3GxK7E3ZXQNfGreJdsRqL6QVuku2PEAqnbB1TAi4gwUq31DoqtWkswDGc58u6tysGrXKsNb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JBj4TjHSyiVsYRFJ9NRw8PUqdBAPyTqz8xXRaGfg99ZbtS6vb6qdaR3WfUKo4WbNv4thes5vzegWGuLwBvQjtiR",
  "key1": "2VACDMbiR9YeQVFC8pZPpX4gqVouKGN63Abp9zGzj75EMkoyCRPMV6L42HXn1sJXve1bNjb9cqsvk6u3GUa63kr3",
  "key2": "uKFwmExK16DfXemC4K2QAaSpv3dQ9MCyp7CUrBkU43Qtv9FRgrxNzvDFBA9ew8tKNuRvRHRnRPGZM9PbT5rfJ8L",
  "key3": "4hQRRbSRVgto3kCiUR8PCRdvE7hNXp79Puiwt2mLeJSXmHLwW6MqegynWiiopU5UFWsRnMehHfbTmcYseLdkYbwg",
  "key4": "3anqck4QpHXnzZzZGrJKPbdG74aib7bCzVboXKSa6WeL8y1wFqsymg4kUJ3QSuRZYqcmskDYGgjC271SowYJtCc4",
  "key5": "3JKJ72LhaXs4KrwA5F6KBhBXrUW5hNXPs8kn4XbhU2QhwW4mmGnND8f3qDpT21F2UXo6r83xFaWWEetkFHwC2qaA",
  "key6": "6PAyV9jm4XJXicDwDsJYtoU32LQpuqY7PvztySvfNUpfM6pyizLpNdU2cJyJwJ3Hqg5y9LDSPiKi8Y3Hz5kinAe",
  "key7": "ocssynbA6zMbnmDpfNPE6XUUEkLFK3rTzRQnREt8Xh5uHdwPsX4hAjhhWPq9epTkUftSyNtgXc3tpUxv9CP84wT",
  "key8": "4chzTw6dt6smdLHefjQme5USnAArMGbAK52K4CnyBvPHafJethE5czjhzCKwKk3j1bPnCUKwzrK4g3Fbi5S16SfE",
  "key9": "21aFhiU2uGLYv93tVdKDhfqB7H8bKXnRSucaDeGWX8vWPvi9FMcPcyzfKMqT27kD9kdhSHcfcAG3icRjxjf5oyAz",
  "key10": "3qtKW9RQXQ1BaDsdcBJKh2VSVbZN2MmAd6r3y56yEDj2yFV2Cf9NsmotqrBi4WjhddxEPWUN2oU6ZRgBpbuWNRpL",
  "key11": "4hmyXE9s7RU2gnm8VmHEtK1MW3Y6S2ATioAEZMGyyJfzLiFGdnXFZsfjkscHC92GW2cud4fEFaALBdpYMYoJfrRh",
  "key12": "4SCyR7wZh2bbMWmLKrL719Y4PjVPZ3Z9oXKd8CLPodpcpxraCEQXEVpRgwA8p7NmzMfGKptuAUnk8a9L4UMWt2UD",
  "key13": "22gMxDJBR83sLpuhEuWhrRduL97RmdmJqEwX8jbSTtGtZMrK6c2fWSHwoL8uJ2nmUfMkJ8WMn2kjKYywsBuDteyS",
  "key14": "58f8nGjic3DsAeMLmeHXmv5qkr3duiV7bWQWiuh6EBGPThbaibuNmRJUpiKRhR5Fa1vtzH89NKwS4NhkPAokxv83",
  "key15": "2HYGPB9wVe1YriYHbmueqVUgxtkZVdRUd85fhvPdkUfhtuVxbPMFMnU4CQG2bkVnt5UkJTv8HLkxWwNqdaa1SX4E",
  "key16": "4RdNmchZW3mqUpSa8aNtNAjWSrKwyxnU9Mnsh9dG9TyLaSNsqE59sLKUuSGCoRMaYgmiLhrQ13BQZwsEktYLcejU",
  "key17": "25ZrCB7BZeXzCVrtkZveqFu7AeXomTPoPisWcm8d48JYEHs3mTjVA91pjYdJFhjdJ298EE8wAsLicJVowJxX6wWH",
  "key18": "jVcRkSEof6yd832EKkegZRqu2zxByqqwUEWVJqTPAcmEh2KYDuzWeC24Lie5Ewa8HLCJzccbYdcjnx1usoVJPGE",
  "key19": "4gfoNfpBwfNCivL5ZJRKbxxYq9kU4YEQL8LnTLFVMdk8UDg7RTzLtgXp8GJ8MibAu3xiH5YoMTkyGn2RDS4wJ1v9",
  "key20": "5Lu5CduSEwEzcAxeGgQe2zDTY1KgcgnkySMyJ1hXNbaorwgnMYSSRWSAPJzZLyPvBNMwzaoSxBGAEdKF6wacGCCT",
  "key21": "BLgdemwgKxBkE6HwDpEBqn1d626EqJuuFEf5LKvux79oHtcEydzz5uz7KRJb9X1WyDF4A4WsxbFwvu2EpWVh8zP",
  "key22": "3g2kDZJuEJPkF3krbNN3JWy2CcR9pcbxZXd3hJkmag87VLLCWEphSKYXNyvxQ7KXE48KH7rDBqv6bVExVWkjGUZd",
  "key23": "3cmju3mp1c7JAV78hpjfPcd75Hx2D6Z8foGWqLQzbHJ4oJscQEztKS7NeT23CzckUiBgP7TQvGvhCAn21QTCnomT",
  "key24": "3sUFqBHzaFyZBrcte8sYc6WNAnx1arejq1iegyRVcmu2jGEozDH8ztNLJKK1YFam42nDNMeo2wmNJEw1xuW8MoMb",
  "key25": "qp7QFnMenQymEeoTy5gEYreVbCmQuphVoeRpM3FyjLkTYCTbAf8z635C5ddCayAxN3XvDbVhcuXU1EV3Lce1aZh",
  "key26": "5oKhXVtmaLZs3QkZekrZkcvMkb2x2ASpeZAGXwmAwd5GD273o3Ky6zkZMHwjvFmHFW7RwRku5hoFLhC9tFfXzuqe",
  "key27": "3tFGFB2oQFbHwA9QsUfDK9msygAZr9sKPWnsHNkos6sTL1J2P5NLDoJQpS3asdrUtjBpMS7uBUWhGYHpnt1k5obH",
  "key28": "4FVMMmupMmHvzVSCPN9i4o4PZtCpVBJ7arZYXc8YPpweQKXgoQCr8VD85JBedqgt6gENjV5v8bygfY5rYDSnBvP7",
  "key29": "33ntS9QWedryBMKjNBWWZiyDKNUiYnsLk3dHmeTeSVwHz79WxFdDNjTDFwHUqviYugvDocPjRuHa5J4VtN7p6bKy"
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
