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
    "5Kk5q3JBZhKnaokz3F7mkfnsuD7gf7C1opSKhPxvd1oLnNabPBUbgcpXTXcdeoTq55tov24S9YvBebE4EM2Q6vVf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tDn1Rz53D6atB9Dgw3hCGfNy7tWy4NyBfDVMdvnyNAkRkXRRug4HU19qUm4eHRYHztMucivh99aW2RGTBYtuWph",
  "key1": "jBwTWnLfAnuxYEFSPMK8nGk5hFpVP2BuDUM2XTHG1P4dsqYTKnFWihfXpg6dnfze3LnGXyCi1ec9VNRzqZCLPu8",
  "key2": "3PpHEYdFvE382DhxdZYsiHhRCFsMnrkkTY9dSYniZzsKXMJb3dmKXC2YFztFYhjw4fRaCvELuv1X5jGJZc4m9wYX",
  "key3": "3JGZhDVfzezZ69x8JD7zgke7o1rkffMs976Pkfg4KrW5GTxHZGzvdDum8PJD2XXNVePEGD7psXoZR41M6vVNxHSY",
  "key4": "3BAwzLQAxjRrf84gPbnohWYLQNuN9LqR34ASznX4P9c79t592bHsHqJXjyy4oPWd1Nxfz3WusB6ChgRXgBJJwjrh",
  "key5": "4bwx8uw6y4JT77NSwoHdWH61nB5jArhZFFjLhrVheRcXxz87iXD6LWActb6At9rnzoDo3Yy2fo1vt8XUdRicCABd",
  "key6": "5RFSVcQXicKz9THPmd1t91A4mG2JdKtEFGhLr3ft7hYToeoBuDqfUUSVeNKr29Ws6Gi4zQFo5nrTbRjY43Aiw3JB",
  "key7": "fjNoMAhy6rXhxGQTmrqKSCZebavhxicXuEf9XFpqFPYf7uPQuYKpunWcKgDhu6x7Mb7huQEjNJAX8jGKJX2cczW",
  "key8": "4T2zS3it9fsBamvmKQDxqQVUDd6pH8Dx2uoMioKzu5YSsfxa5hwvDmiFzewZwADYkBFsXFya1MvrZDYrHReftP46",
  "key9": "2GyY9wujtUhoNYaacpfbediocmmcNfK8fyAPyitzUrVADGiev9BKQykF96926QbMGRjsRUTs78a1YaYtWbTqv2qJ",
  "key10": "3wrJ5kuVgJKVZ5GJSmabwSifnoQS9xA9PXgBmhngqSRCJy7vZ2L3fQTX91VYkkAHyJrqrNVuoUAJGdSvSbnvjYKx",
  "key11": "4VFD6o5QFwKtzoZtyW8xYaD4oobAVQvP6Tjzh21r2sC8gtzHnoELTGQm6937JFGyyVbN9NTxa87S9NBbiPKFyhVE",
  "key12": "4nMSj8Lt1s68oFYVHdwHJicgcsGXmGhkA6SKzpWGq6PpukTxjPie32LMrhjr2HiEJBtzbeURWv976bgoKEW3T6fp",
  "key13": "t6fFVirxwJxCF1z7qKj1e8mzTD8GWei6BTjZeQguoMrV4h6d6cfagh3jsfjKg29DcygdX5qWoJD5VEUCE6VJhba",
  "key14": "4KGCbaNLh55t8fdcMNUrviZbKAgzkHdZiULzkPSXa1Ua2hXW97UiyG7yNuRRUzagu35jsE9dKq6bygASpohhBuLX",
  "key15": "4wgTESTioYGooTVgAHxDYnw4muBGeXzzNR49LntYZ3ECQij3tuVtjbViUcb8bUiAL2Aw6B6cpQEucnjd9fQGyg82",
  "key16": "25MueJFS6aMGjm3EUb5YKmo5XWzaWKXwtuQkfZbZttWUu555M2FimEu8DzefxydSmjqKGFSue31XBoQA3od2vCRH",
  "key17": "4M6mKY9apJGjPzBb6N27Ud5yshBdDEsgbdsDmToDPGshjFSVhRMyJe53wHdQPh78YrhBp1XqGmHWqgG5QrehnL8J",
  "key18": "2LJFtBhCASZBPo2wTtMfyXgW3DGwMscP5H6j5HqgUB8ortkXctw5R4kmmkGZfFn8o8XB6ZhVhZATCHC7Bat7Lx4F",
  "key19": "5P9x2WNDtKv3gjoGBjMUcMWCUP73Je9dpvHFDa99vjJWsGMLpDDmvq5cdCrA47oF21HSVPAjhVjPGAPhae4MKuRd",
  "key20": "2UbevTdv17j4zjMQNt9LMA8XcogZMd2uXDnjAHzKX2LDAfA65VaYUYe2REHyHNsD8gn8NpAUqus2KkhGaZFPb8Cp",
  "key21": "4CVbEJ5aVrq97kGD5Yp6nun2GAHfhePpocZY6gPopXx2nGzimqC2ds4yRHiwbBttQeArVR6e7McfnWZKVJH51h97",
  "key22": "4mNBL4pqqqKMb8trMHWq41VuwDiyfoohx8FX3VRt5ugXH26u1AmNHYV7aKpVXerhDoMbVmyDhojj1qdEWzxNdFE",
  "key23": "5VpnkU8ytpmPNNoZvNE2jzHFuCSUbJRBq2NV1a3yDmRor3NPdG1MvNR9TKzqMgXK61pMPbxbe4JkkGqwJCxrVmF6",
  "key24": "G6eaDzHuZwaUQmakahnuwd6u5GyXDbFG5J1qYkvj1A1zp1vKLMNMtzXKYxryuC6ki9dM9zKFz6iakt3nSXGMVwm",
  "key25": "4JWP23bJuWKusbKxLP7Nwd9vRVPzBUfiGa9N55CWaqpPkBxwaV7VnJiXkm1GkhbrfB5SVb8z2QqzKHFPodUrLcUF",
  "key26": "2s9FmXYteynnBJm8bR4fFTqMNFBnqL1cvexKY8x2UNtViSZ7KkLtZwatz7CQwtuWmksLosu9z5y9HrjzqbcG13wn",
  "key27": "2sxhpWkjbuE82UVHixeZ9q6HQyK64rm7DjfmqRcPuWp3NTukdvkcAFKk717sbKvtoJxYzpiUjGLgd7EE2cwNuDbL",
  "key28": "4xjbuEboGTsWoqnQ7dTqdZjdnkqw6pYZno8jhXas66EZj84Uj2x5GVtYDdn9c8nk64CCXh5AMmV3k9rGKWJu9uyn",
  "key29": "42nmLcgePx4DyDGEJSs1wTyzsH9NicjgEG2jwqxm2aFSZQG2hJpb1RMNZPBq3KQhvbgzfp5vmLePpjPA8qjEDbLu",
  "key30": "2tMdHEBQFb8BWCDiPMPfuwzH2gsnhgGxYsuazMSy2xgG9SCRDLkrMnK54aj5GTRA1xxUQmXxZTh1h2r6Q4TLoQGF",
  "key31": "214fYR1w8SyQ3LVuTNmg18puydi6519HEDcfE2hqXiPKgnRZJGvokF3A1tS1LDAMXCwryWzB8evaGWYWgroCbS1P",
  "key32": "487Cvb6SNBZeipnXfsH2d8JHfEwojk684VgoNHVzNSkGLer8xQU6ScVTbkTnCG7k5Un1MGJVkHox9jjtTPv84TCj"
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
