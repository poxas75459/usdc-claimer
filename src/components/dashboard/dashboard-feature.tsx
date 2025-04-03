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
    "2spishzbssGf6nRfwgEPUJrKpna2K1B3CBDua37vfnDCH2zhwQYRKTKjUgcGG2eHogtiXNqH2x9gPMweTDr8dDMq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HQrDKPyQfTCRyZNykxZfQhwWbRyVqpHsSmjt1Pg3VS5LefKYsNHh4GJBvk8qNospMobBrSwmYwhktj9FERfn9BB",
  "key1": "3t6MkabwsyBwrWgc9wTBRkaTrAk5wPWhWhxm7z3gkS5hH8d3MVEahE98UWoCiQffo8bPuFArHEuvfEUdZ81x2Xnr",
  "key2": "5j8hnBPxUrYwFgAttRdK4Rix4wKSrf6iJBhaQRgQ63Gr6z2BkuvTSakBiQsJ5bCABCxiTZQW7qFJLPEjYw3oN7C8",
  "key3": "2YNZqARJU3BXzKowbdnVdM2AGYq8N2faoNzv5x4hJTaS44gvXwj1gxRQXBpa6AevMEkrfhXdBNjoz6JgkQFJsRQm",
  "key4": "5K25ZAKmPSZmWbj2QyWQt4DkaTTUGBx7V3KaScBYabugzaQRzyC67ADXEuS4rPNTEsZibKF25iGspATzuM7SA9J6",
  "key5": "3R6faLUw7DuuSiqTiQiwucmDzxmt9KJ5JcGrduBF7Fp5DwYf8GJ6paJGVn4p47nU2MGqK735P5H3SG5YQFxDRQX9",
  "key6": "2EuKUqtA3orCrqcTTzML8V86qVf7w4fJJZYS46dHZDckvm5bdwdmeYkEFYBp1mPkQDj6hRTJYAyKx9LrjYV5BGpu",
  "key7": "523pSiS6BiQiucfvLcniFWV7aEVWKx9HwqKxfnmgguKeppDrejJGmeantJaB78WpPjiMH4b9s2hHYmU1jAfeDgHA",
  "key8": "iLxBiPPNBe5eBm3WFEWmPEvRcRjd23jHPHNtBhvSJo5rNK5kou8gGkQxd1DLKjFbhpkDQNrCth5JgYAucwRanMT",
  "key9": "28YjgsuHABwVDFSLtU5hRxG9NaNAvcNJYjnfkHez15LabFhoDwr6N5g5chHc5jbq7gymofRYc2sGCoJVj6j43HLj",
  "key10": "3ya7rPB4ZLzDY2FPbwFFbQWsHXuJhgEKeMeiUz3hUgsSEk2XkrwgaGsYem8tTdMdv88DdKpAx4qYCXyegN6FMqJS",
  "key11": "2P9xy884QKX6UqTnUfE9HafYExpL8X2nSmBo1VdzDyGaAbuuV9ysRDNxbukwjC1epn9dW1NieYCmzsmHzXCpMj3M",
  "key12": "58C66KpZvajrASxPtz8vgiHLmVZFzcWMgRss9zeiULmP4a1UKgxytmVieKFZ2weQXrhKMKSDGWKd2diUpTqcXGkB",
  "key13": "5BobLRqzP1XXEQoop6M5UkQUoJhmtmeJgW4QvUaxfzwQpBxzR1789CfpQsxH57rrkcaBEUMACe7uCbUpXpaBc5tK",
  "key14": "2acu5nEpGAichWVLvhk6s94gt2w9S4kUauCTgQMFhWisdcHaCs1CbfrAuzaMtNgLENuRTKbx52RgB6bMaCeQCc7f",
  "key15": "5jKMhzGghDpCkfK842Jv2DmQkX4N8jns1YHxwdwXgcpVB1JTUTYp1ywziULdHkQzQuNfhABC4mrYA4e2QJqqSLXE",
  "key16": "2j5iYpo1cauJJUY9AjbN2sKABuY3dSP7Eo3LrkJzypGTZUEzLg2N6pog9Vj5B3M1mgX1Bf6nnmPXjGRA27iFwgw9",
  "key17": "65H8G3kiJuL1P2Sg77zy9EnJ9PfDABheptnnyht4JAU2z41tcTqUJ4Lu2LjvjQjuv4jMe7RytJsLLKBFdGzxdkTv",
  "key18": "2UnmxgE1zGZKNt4mgNh4sbTyCdm4WMR9L3hRxbpAFNrEBEiqJnpNj3pXhPGVCnH2fRhCioaLXm7B3xpvwqXQ8bjn",
  "key19": "22RphzqWFcgasadYAeWqomvdxvL9MKUHhRCJqbk6paN7HfuV5TNCq1129og3bAgRDdFyemhdtnxPFzJbJfie6KFD",
  "key20": "3oMZMov863M72oW8YxgUFTwCfxSB5GJ9H8kteyvtnNKKSsvPScDmkzW7HioXX5pEbvdd2nPeQisePBQcwwGd9SGe",
  "key21": "5UdaBsd7H27dhjFrEcGJNsqZZBrdR7QhqT1GmDiXqzSynKCJWtvMf9miGNWdcffR68NESCiwY7tZ3q7Kik2ekNtr",
  "key22": "3eA8cqLYqBypGURUywJRkZWNNwrrfk6DUtF2XU2gMGkgWi9HtSvRpz94nugrZSXKUv5s3hkhmnKRCEkPv8gRoF2Y",
  "key23": "Cy23DsokfCFyV7rSJu1fUqyvcTT5dcrHRKnnmWiTjLSi4QGDUK993yToX98CqSk71VDxY7qhV2Pj7z6MUo6eK2m",
  "key24": "2UBh7SpqfH6QCuarRvb3ChJu5ckGRE1FGpGCcQH7rUEP94tPCB6GE9oWLHx36kzBdu2HAusK1bSnoVBquVJDRb54",
  "key25": "4voi6MUuwg8gErFe9ybuho5ZRJ16G9Md8dPT6WjnmqKtVJ8TDyP536VojKaUp4pMZkbX4agCv8CoJM9ymogJravx",
  "key26": "TqEkKjeKS8w88AsCzH4XjdXtq8sYG2xHn1CLtF5AVuVwrYU74qWV9HHXTy7f6KQxupbUZojoCZMjxffMEDJrkar",
  "key27": "YJFpB8X2HSz8E8iWFEQrXWjVeVB6Zhr29CJdpRBLNXiXoKWpzrCqD8fRdgiNgkKBFhdKJTdG94kmCfJgHnwvt9F",
  "key28": "PTk5Zg9BkHYPf7gpnXjEtQHTexhsFkNZuNpGvWcqfCN4cWo7naf8mCGpq7oBgsqPFHizSBrh6Rm6xhzDkzSwffs",
  "key29": "3YXvUDfdCfoZn8gJ3egSwZ3tZas7uwgkRdVX6rnuZTNKNspEK4nYFMpafJwP6DmdoxZsX1qs2h66T3EvRAukvA6F",
  "key30": "65QPei6zU7HXLGXnXNGH1P1Vc5JUMfLCH5uwQ8essYCUCrMkoHQ4sDyb5hQjG46ZUBwHVHAPqXe8uxJPsfdQUiEF",
  "key31": "5cdNdPKyM7P73w9PdNPg8kY1bWLuDtm1akVfENVbUCVfmtsu1kWsx4CxidtapvQikiFxnT1hPfPoUXmZ9uNDJ9BZ",
  "key32": "5zvm8fAbQfovuhmsgZchyQL9NxfkuHbFsakmUd7HWBbdCJotjCqstj1svDKaUKcTjZTMBnSCvAJLkD1yri3k3pqm",
  "key33": "68C6QjToJkSWJHvwVwbdM6pN5QRMJQKzv3XtWG2ZJUjz7c11sQQf8xhxgUfXA1Kp8uYCDiZAcz9NtDjQ8eSd1MT",
  "key34": "4CdhSrCmvndJv9Tafuz6zBVRNJ9W838FtE5JEQQ1c9vhXh44ZhfPoHJcaEqy18sL8tofDNkV3qsL62FBHK19LSA5",
  "key35": "27qA4RuYyKFjindAmZBYWUcn6hES5dgCa5sYuZMkrHbGmeH2vpje6upc3hfevoBkABEd9yA5i3JKRAGBLoLnb9GD"
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
