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
    "4gmmocitdVfVBeECMc5oaEFgJ7vdXKvPQeaxwsbVyerHu5He7Mcd7dnsGtpJBpUU6TYvmFoYdmaEdBokqwzykqCS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JK4bJMS6zXFieuLfRFX9wrUf1FoisGBsKBnQiVT6H1jjqYorGCy9JsMDwzckkvu88XpvjJcZ5AZt4cFn5jrW8LZ",
  "key1": "34CrPksEg1VmMGvHygcdAZg8m5PoApjzCo5TjFxgHq2FVS43GApEajMRb5cjauMMWQwR4q4rqAuud9EdH2ge8iML",
  "key2": "5PgPAB3YYPMm5ohnK7fNKEF1Sm8SW1UJ8idodYnc7Wd2t1Zu7L5C3teS6TnNopQDjGE9TvB5ePneygkxvxts9HWj",
  "key3": "3VPh5biHKiYNNLJwvbTN1njAV3eF4oiieadribsatXVugniLoL4uqcVx3NcA9XsFybAYdMXPBBa968hFziyo6xJ2",
  "key4": "3VYXXAdkuQRyimPh8a4FQngEgBq72wsepkPBDb1vzDKB9rSkosKKwRx4vJcCRQdvxqbJQcXv1W6nSSkew8xESBri",
  "key5": "yG3Gj54qvGJu6DBPUcN48GqmXQYfdeyaTsexHRGtrGXm9KTMr5X3T1V1nLEx4xNK7L5oeBFPVARvai2K6ZEc6QY",
  "key6": "3QjA9JUzk1oABunAMG86gwMsS4VmHbmPjb6XNNhdfBDzteHzN5RXLajL8uoFJNgZf5eTUtzjHbtHh7Q4pXBtu7bn",
  "key7": "4weskS73Rg1QxnzFpH4e1TjAeJaKvfoZy4NR8K7Hm2oqmfia3gphMY1bn44mS1YHtQfUQUWsegTPgpHHxpNLsZeh",
  "key8": "5y2aYyphcKB6HDKm81ivK2Ss9ZpjvFGtG2c9nxKcxfrqq9RuXs9Bb7jV5R5n9W51tYQ3ygAJZ9JHE73Wm49oFVSe",
  "key9": "3WePe46iRiSDZPRXFPJj3yaZHir9oWD3qceD9PHkgPWGTQGxgmFJJRwGHDKkRYLL8g87T12VGj91jCAidBqxD4Ne",
  "key10": "4J3iDvGW8UbrrgVg1oUDMr4oBGsb2Bibj52xrze5XS7m6tHaU2oVMhmeL7ApZZkBpPjaUGEY2X6321y4Jnm219mT",
  "key11": "2QXcC5EAdaVwcsyQZQEqmMDbvdLWxE53ri7GHJPfTAZGupFZuBRBUer3FKE1G4icQFcN8Qz914RooziqxXmve5jP",
  "key12": "3Z4aJjyvh34N85kHt5D5M5DhCdyFRBTT4v2nkFxZFtz1RXcUvMFdjQY9GqSKeoE5TA7CRN5UWq98hB7fHDg22FZf",
  "key13": "4R9ZaP21C9K13czcWPU8gRbf1HaV421ToFCCKBa6BCAAayDW5DK9N5EK1vNVtAgEQHg65PFJw9o8V15BdbNwPV4k",
  "key14": "4Nrx9R9WHFGAZLQDL9wZQEAYEH5tZiH7qkDaC7tBKwjLwZTNA25gZ4qohPyiUrMPfGoaTXg48X1tfsob4Ac4VGGT",
  "key15": "3EtW4r57tzRcPge6b6KfxTBohYdyJurCyhbczEmbkCzDrVm2hhw6eLtpeZA6FukJaCYtDv53dPyKtJvZ5zAfA7tp",
  "key16": "4Bn8qdMombg5KEa2Laao7G5UYD9R7zhGRretMRTHourQ31ijRhMHAcy6gtVMh4bzgJXMYNNrkPt7fZ4mVYrxKpja",
  "key17": "383UV4fTj4qvtqDGLvWuQ9RhQhp8j7Ds4CgQUwVDr9erjJDLqUn8CyVHriB63MsbqJ2dvqnsa3vkaS3NYPzSXV1L",
  "key18": "4dkY8Ge5dnRbQetDLbj3iJvfc9a2Ysx5QQw1a1dNBUANU88rzrb2KM3LyAvjMrJYV5YyHMbxeHuxLZ975U9ee9mN",
  "key19": "5pxScRjiwFXNhEkn4e9qcu5uGyEBDD5eWfmcxAavmrH9PRBR21NkmKjnwxmygtJgtfd1gAiZLwcHzgZUpKPJAoVg",
  "key20": "M1QzJ77HiXKy1frGU923Y3dofbzd7rVNvtYEiXfbboo9D3m2VwaGbffiF8RnuzALJpzMd5CqUVvAu54iwUvJvmh",
  "key21": "EXhmzgDDgnJUruBYET4X2DKYQdxNcJ7mNvo67Rr3uvKqMZgNQve3kQDVTqLWBYouEooMbT2gKQisqSYzRotjYKE",
  "key22": "22jNZne9t5R3UeKKWbrJECwvVh3TsZxysYemkrn72ATnDTgEe1RYmx57bjB4micvwTGqmcoyHjNvq1fUSpFnYeou",
  "key23": "2RJzFSiMLJskk3xVSKbzcv2iScKYcf3ctfbWhCVHKDPaTwk1RYByBqWVTLcuoePuUpgPzZ4YW4CWt43krjoqSphh",
  "key24": "XSVa6fnATanWLG5UsHDEonQTHNEKZJhTjJ7RNoUGmkvyZwNUhVzdKApFZJFEeg2aoDjLKn5bCvgXCPV67xWbPyv",
  "key25": "3wKP43RJmBAeANhm8wxD4nZjoBjruRtjzLcAC5BiLPVVKgRDdWhSyzbCkP4bw1VLZzGSvb7HAev1odBUHvWRSsEq",
  "key26": "3M3zEVkyvc7LUgPu5BmyX3dyABByy2nW1HFD5hoDdSEDHX1ZNVstwzmj4CRueFZt8v8PxN7yjKdH8Z8KDARzwofh",
  "key27": "yLhMosQHoZERyGS4yZ1cyRgjzWX4eumNAafvYQ8LD6Z6CbtNmfrHPPif9Aghw4RCp9b5LaJfr5Vk6budr69pL2K",
  "key28": "3v5Yv62nF4x1jyuqVWSHQ7ub4BZ54Mce23Sz1fhdL366yZg4bzep6Xt7G6Jaij6iZXMho5PK6EoLPdSc7WnN24SL",
  "key29": "4yLAz6hQqVtiy11DWxVGXYpdGKqX2TBj4BJk7btFsDEYZNvUvc2o3AAhgUmxD4fxbkAhYy61efTztQYGe78Uqx9B",
  "key30": "fbiVYeS5SrXgnBBG7stUAUpVYUgFn9kve3LYV7mYDMPmLSs2YLvRvoYdsE4gZpMofCwMKKmMEHcb45G1RqS2sGV",
  "key31": "2hAmfyNfR6wxqVEt3bGivp1PeLypYXyPaybqKH94Bmp3goskRh6KrbPa3iDfaKUFajwafj6evf3Uyukgq945Fo3y",
  "key32": "3Gjwozch4Aw1uLHKi9SYNgQAdvZByhwqSmVqCdK2Yw3nq8obg92CML1XkAz4J3c25iXzLUAPd3xG5AVWAixFFcRB",
  "key33": "47bpYwVfSW8V8d69veMit1xYKkYsPP48qfML4m42XpsGkFtvsnNTpEm9CPr2aTmQMQCkC5PpcdxhaZ85wcJEa68V",
  "key34": "3WnJS9FHH1orkPdhk1qkSec3Hvno4233E3VV1Y4RV6soF5UdAFKDVoS3hTBLfjyfBprajqh5AtRKrPQQwpQZ1H5P",
  "key35": "5eHDvYgPAUi4n7yh3KTX9kZKpF4ZtrTbyv91QwYhgYyLQh86GiccRgHoD2ATyh4taHF3cvZTpAKwLwxwEKTNdWER",
  "key36": "3NCEQxrJ8RzTBcg9xZYAAaHQ2undsEU3xJV4dzH29JrGqxPwvNS28rvpfaYD62cgTBUKc8HVk7V8iJbazhu8R1Q3"
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
