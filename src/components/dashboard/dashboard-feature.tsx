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
    "3ZrX5XpKCbuCgBNQrb4Hbg9CDPsrgwbcxNr1vnrufSdwnB93TubECAgGqTrHHNPNtRyDmCwLKMnG2XEpXkjQYqcv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2raEJxaKLRQFct26sT5BZHMQSRik8dNgogXNARJZ9Dhv8XUhZCbrpCVNU9eUD1DrNWgTkqhw2dAKKqa9jCxpKkGR",
  "key1": "3Dc4Uy6VeMhv26rpPZBSrB5hM5BWMCVSQk3ftmTcnmuL3JMcrJp8N7p699mFnuTCPBnbzhzuL2E3LioEmCmuHbLk",
  "key2": "2Qvp58KTBud9CmCLtNMRbY8g98KVTwS3etSVLyE1anQCEYq2zitAwzHuPTz4gKEEecb2XtLcVfDfjnnT5oMzpzoK",
  "key3": "2hVPBByr7wLKXei58F5qAPQNrVcsSH4zXyV49FxJN2uqy8cAQ598n9VjQZoaG4n4mW8p1KskR8erhiUWmUDwEbF9",
  "key4": "37zUHPpuKsjaZDAag4M7KgYAEQ8Lys986Tqu9D2Bnk5GJfLwuPPxCKE9j9kpeexuB9iWREPUftoeCQ4hWqxHogQ6",
  "key5": "D3Qb85r8RnPaPegoe3wTACrfoKYRXQyexXC2vjrPZ2PCPBX8q8BsSWa7GUeu4SDAjk8sbt6gTLF5pZTNbLp6KEp",
  "key6": "2dUF6foJceV9CWLPVDBGPrkknXXzGdAsJLBg5dBXbSTLC8JtbTsXhc6UcQ8KAKYCr6T7a6HmeEdDUV6zVubQRkL3",
  "key7": "5d9KJVhiwAbLgTejXQpZV2UbCSxvshqE7oaLfqTTJb7vLL3ZzjU7bbkzscHBEM5LKPGQmKX8TPfpxuR2eJcwZ7i",
  "key8": "2PCfYjdNvaAu7KRJwp4xXqE4coNxjpzbmaYY5T1LF4iQR34MLQhtJ1GCtnvcUkwsETeX2NGnfcCwLyon69DaYiER",
  "key9": "4SC6bxAKijdDMB1qwNFcgrdYEiYTix8B3onfUMqjSZ1sEF9qTv3vwrhfRbTaYe5jXNM8MzaJtE5vGbv9PUtDHBf4",
  "key10": "34xRcCYpecY5W3io1uRJAaso3XuyrkmDinpwsMx4FsAwvFSvCdxwMkFDVDq8u4K3kptrwnkbmK6rX4E5hQBoG9F4",
  "key11": "mA139EGPiNJ5g6fJsdNWAXibVxV69aKtf1uLfBYvqkfFAaq1KUhTuA5WH1J7wLDTnEhi1yYKo6ViBFApSfs7K11",
  "key12": "cKpupUvhw2h6eRqoVJAG5tYnh2fKGnKwgRXjGfvfgR9zeBXvnWdCdJimpgnHffjFdWyxqpsbNii9z14uSpNYSpP",
  "key13": "2pAXYZmVnB4CL4TmZALAdr7EZr1ZTAkP1YeSb8FHYNXQgfbnv1qhKYRwfQBNbyHs32egWZD65Nj5GXSKBcUPzNr4",
  "key14": "2yDzygSqZR76muqqzn922BYzjHfQUikQ132iY5iCkj1metB4Tk6Ts8AH73SQbASUgH9Cd1uwyXcWPU4kLp5SLPoQ",
  "key15": "32TeeokzF2cZVgN8MMojrc49kQhD5PMg5HvRjQ9rKN7fG4ezi6hRNNwEuJ5hamUqFSBqvKDksdYjncZ134kDKQ2u",
  "key16": "4SDVh6irRzkoxj1EghzEgkyzDwUqsDqjzmJrHUcE9yZmaXRXfSgyLwmL32tLiD1g9FyPyUVZsc7FFkmZ8Ma1UiHC",
  "key17": "6xaAvtsN75e2uAjof537CYLrFCfdz9SHf2KWt7ihZUAbZ8AianEYWkFeQw5xsHojCTbbJDU787xs63MzKJkfVJW",
  "key18": "3eQF2e716yefHF5tPPxzY82TJ54kLmzgno9fNphpaeB86zee4WyRrCARMVrQwVs9CkGCkx8KFyXzhrCgE2NFS1xA",
  "key19": "3L8D3qvhckDpRE6mqcdmahwj9LWjuwMyHXeU7A4nzpEdfz88E1gXrCJkJpNZAay2iNtZWnao5HYVm9G4LhMJpgzt",
  "key20": "5fi4Ud47PT3K1mkRzeKjn97VcCByqSU2jhjBvvqvvQbGJbiTTnTrnytmGfNt1qnrDjjdV4RtRYxCULCELH6WnBVD",
  "key21": "4A3zUX5m5nV3s2DY3PKs5Ps1VbyXeGzYnyYRPPDQUn8NLNxpM5ttb6BMWfGMEPQmZyURSiXzmXe7kqUERinGqvFn",
  "key22": "2D6rBbCtFjcgjCG1LEze1p6Cy8Y1FbP1JvD4Y9K5KLZespRHn7aczfJdCQAFx8KQkdxLjEEs4VucbVZTGtUfX9uG",
  "key23": "5Ab2o95dPfkkTKwhMqqgi44vPqLULWdcm8CHbAi1envPQDr6uaJ6NHWvahDooZafekYEJY4r5zsuxgfX8aG9tshe",
  "key24": "vEcJaSkscvxD1mNEQMbfsEwyXy88QQSJxXAUDrzCPAs1D3LCZymiSw1YspXsUA7ChA6xaXKSoGnBgKb6sC3bq9t",
  "key25": "ajjb77D5oamNZiqCyBu4rpsMnnUbp32qZkEjHCQF9RHiH3WpB1CJ9GF33euHQw9fDj79NcN8fsyHudB8kLd7Q8J",
  "key26": "vWPRdGXwYAERR39Em2N4724iiTzxDtSU5WAJDjNeYG1oG7wKa8CzBZZe6VSvfV8KBW51zSqsztENq7wnpzWfa9w",
  "key27": "4nri9L4rSbUtkbkZu4xAZccau2HxbPtP6bmMNrcmNB2JrBaJDc7CNoMqN7Kx956mFazxC56bG31iSfj7yNt6Uwf",
  "key28": "i1DoMDvt87eaUgrvU4jmgKTtRZq8TEadCuRtYHfWSP4kzSsdvTgmEgzkkbmfxPxkM1xt6Nu41wE4u4wS4LtJVJt",
  "key29": "3RnQDBK5yVeTbmPSj72wvoTDkus4fwinFc35EdY5PrXHHKsss5pDt7H28SE2gKPuBJ7PpzcmiFF1DHVRWpWq8GPg",
  "key30": "2WhUmfTdpM9fbRSbVRjGJsdPcGS8dJ52TnzaGRPGWXK7BJTcAEhdn8gxh8vKSfYMWcbyfTuq9wiRPYJTHansg1Up",
  "key31": "Fc4ws4DjJAnXMZ6dhoPEJ8ke7ZKLcrtm2L68HSseNsSH69uqSaYNgdpZgUH39ViPyHGeHtofNBVXeuY8kFBLP5b",
  "key32": "QuR8qmxPU7F94vtJMYbK2VsgWR6R4MBfKnwem7UKCmxzzLYCBzMQ1QM7coZKoDc6XvnDVCAGy4r1uyvcyfnZ94N",
  "key33": "4ndUiVV71rVVgkoSYJEYs9to6QV2ZXYvhcSQMWnQSXCBqAE5tWBcRN8MWoNXoNkPU9zBT4woe28S1eTET9TYpEP2",
  "key34": "65ewUdqGNg2Lf9LW6d7ziygUMknRPSYdr2xT8aTxJcmy4nsdez38qsMTenyEyDXni5Zcs9CLr4Bcf25S3H5d7PSz",
  "key35": "3Ngw1n8xTrV4XdRvHkt8kGSZ8eKuoDuiPqTPRZ6eqJLgKYuG7AQ34uUy5Tbg3acdfD52Crqt9mYbjRPPtvoJWNwV",
  "key36": "5YQFuUuXsdJrDZzHUjRYwHh7UPbJtgdKEmh4vhztFUU5XUqFJafd9y2zF738ufD6S2yRvmXmCUwcL8XEgNrRMqKJ",
  "key37": "LJLdhftGYcatxX6vooNsyBiaXTazQo4WFZaWs8d7ybbWF83RspbCaRA9SgLnkybWogFP3dGvok2j36HkqTyQQcp"
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
