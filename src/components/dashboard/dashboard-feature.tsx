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
    "42Atc3DyZDMmXQE5j4p8Ykdu4urKtNQ1VDJ9Cn6YRBDr3hYk1XtMvGitKsiwCgZqbTYHwtM6GXMwZB3kYSqoabEN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W5CqBRAPcv4qbJergiXc8M2JEMh3pkEbYernpqGmJ3jkmy5366MQSjyfqqubjaE2ijfLmHT1CPEJ2dCoKrYpNGX",
  "key1": "3y6crSoDhDr45rB9BYcL2X7trXgtEPa4fXhN6WZxgB1XCnpTL2zVygBSNr29qvp4WYj1koW85Gq1FKtBZYedWC7b",
  "key2": "2nWRWd9hwebnsnbgmH5EoTBVuituFLinykiWeBggGUBD5j5BKojGRejqsvWZ1P6HwYA3VNbMuoBe4iVnX9hAhtMZ",
  "key3": "3ugtVVJ9HjbB2rNPSM47rUZSczt9BmWWMk4Fxa9iqp68gzknovYTjWpLKV8kHCSti7D6Khv2awbtGmv9RtvxBM9t",
  "key4": "4Msn1RECcYPPn65MeZogCM25xnqts7F1aiXNXd362e6mxBgQ3JFaw3QYJpHtPPCajpk1UfzSkFmHUJbUfvV3xXJQ",
  "key5": "4m6vSbh62T72FQaGTLpp85mAxj6JjVtR7Uo7wNFDPyv68RGkpQQPJGFaSN6HZnDQx3UgXzu9esbrbm2wM9mJ7JBB",
  "key6": "5bpL5Vcqn3hdGHyUFrtLgNMwUYMTkN9ZFFBCGmrVNfqPb6t7z3TNGif3TZL8kaq2MQw1AGsFchrT2WRWzSjgfDdQ",
  "key7": "n6qGWEVaqPEW8KAa5fPqhYcmSjcyXJbZChZPosf7uZZkZweaNXdY8QtBDSip9XtrL8ZHFhyzNdMSQ37uhou7CBC",
  "key8": "3HDfDMFpoGgtqbtMwhtwMrtAareBjzsTN2mMTTnrHLaUb849r387dFo2LUCQTfcuvwQwEc5mivDuYRwGHP9GkNw7",
  "key9": "nt4xnfYmKx1Wa3mw2FZoQomarYzhzkDaQJw64tyCYA5MHh15igXTfXG7oUNzx1zCYNBaCFFWUwV9po7Q4hstnLC",
  "key10": "4sV27TkZkvc4G3duYuz7YBrtYxUjsQtEFRrmReEui9GmhEfUUgQ2gfsh3KVGMfcbDerUdX4tG23M4YKgvbrNtZsN",
  "key11": "29RKfKJcfeq36HtABZpyLxhzTMmZ36DP5wYFDMXJYEzqxsm8Zr6FsiL2oNVBdgQhUzNojsxUBNns4x47NgW5cBj9",
  "key12": "5C6UyzWrjCNLDsLMTt4fNXqQUvR9LEdviS4U8EHLZF5oGuM6r1LGoGzGoLxpy5SWTtD4iLU3cnpLsWkUyrRKSp2d",
  "key13": "SdzFPqJeT1ZuscBFcXs5VJwQTTsJUkQwFdqV15pp1qc6QSPEZfh8DmrhR1PypTL9EuCVNL2dZWL2iw7E6wM2uHV",
  "key14": "638hiJobrcoT3qHvEtaFefGaA1vwCPxXg8ah97YbgoCybYzpegJGRfadRveGU6XDxymVZofJ36i87rZ992FHusEg",
  "key15": "271JxYzK4j5r6phPLZRWC7Xd86SfoMNWfV56w3NmE6tWG9YN6zt2NVirvYKdQivwkvwcuQWpZcmL8V6Y1kAAkLoN",
  "key16": "41ZogcenxV9c31XNZVJdeU2o6VoxWpScMPckyNuPSEKX1abiy9F3qUPPaC5Q6Cv8N9ykJx6fJN53snHqW9pte6E8",
  "key17": "2bw54JfSzoRwJfRkmy5AygQuv2XH6y6B7ZMEpiucVh5mrtq2GHxuoyy3QD7DwpdWAPoKhd5Pr5KDknB7Z9X58ZJY",
  "key18": "3f9Pcn6KciZxKCmyRVnWn51cAspib7JY4W8AnhGFSimSLsx7qNEuMKai9vgSiAhxZrbiFesXkEUoYRUUVDD4MmBv",
  "key19": "3GDfKascW6w1fFJe6jRXZHV5tZVFz1JNh6HDdC4HMV32TcCz9Tb3W4R8bxcgbs7hGLfbdhZNvcap4haJKYyTXdB",
  "key20": "3XmqVBKxqedwdvubgk4eEcMUvDyjomThKtUXssYc7CQXP6xMr7EJsa1HvoMVNMLNagQCXT1xDedkA5hJgSRnw3qD",
  "key21": "XydYCgBx7k8YGxEw316hMb4BVBNddbyXW4gfpH6TnVP7a3hsAtCjgNXFmEETBvyo2r8sKPDMk8a7PN4SHhfLVtW",
  "key22": "5eszmepckhZ7Pb8KH7HvZL2TukxWgecRA7HcVdpDT2uYJ3qV9wRBpBkZRxb66JTYUurHZwvjLHYw83kYPwsD8CPX",
  "key23": "2mscqEvopAx6hN4FExXFiK2PjMs5Ls6XTuAJxoqYX7EoVeLztLujiu5q24P51jAMy7PXBYqH1pcB1b7WCGb1ABP5",
  "key24": "5p5n5kLfT48PHhmDn8eSPybw9M1hmbZbVqZFmdSEXZm3jSzXBLMgssTpdKNqSfPNSZYgvbfQLfBwU3WLN4iqyvH3",
  "key25": "3jFBofsHQLf8c5co22XQDGVVrjLKHBYPfhuKhz9xro3NcYcqjxq97PLmnDYbgeD7ArCmX4ksW4TXMV2rAJGEc9Nk",
  "key26": "2MXUefW8wQsPhuxHJqEBWTaMfyvSS7fR8WAnaqXgXecT8HiKLjouc3A8nZFyzF3gmtKZ4SiHVF5bYUcvUcJ7ofwx",
  "key27": "Gta2uCvdwBSD6cnWp1SU6RrWhJZLNFfNjkwthU4ZJruVATQCBs2w2uxrWUnUqLeMiqrnpuUyV4TisSxuN9RJR1u",
  "key28": "4CkBPaBtmuQpCXTf7KJsGiaKZHygkVmtMvxNWo8tZBU4eHucVEysYt7WQ39SExfn9ubzgydFrTBhFGMY4CT2fdqN",
  "key29": "329wjKcoZK9cz2RpvY1BQyGhJhdup4HUSYjaBe8VHYSvLZwwnUieeMNu7QV2tZRyfyaCeEFZM85SAoLN5Fz15Hr9",
  "key30": "4JB4LzzdPsf3rTU9BYF5bG8SHiKt8tVqKjLaJXS4rTTfERvWfyHkQoRWZRyHW8BNXnq3j5fGWEug2ySSyJGoitfx"
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
