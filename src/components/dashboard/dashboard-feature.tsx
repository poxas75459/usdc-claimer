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
    "5NhVmcoaacrf3rMx3eSXTPxT8eD92cA8FHwBuyfwBLfxonG6DtQ63GGVAQz8C45uGi7UPEMyRA6X1PUnQtWCxDzc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nRQ3bUhN6CmAdBaSDxzLFuenkN4HaUtyH9Esfz8Duv65BWt6B9ebTD4sWkm5Wv9kMuHsFxrka6A3FtQXrs26s25",
  "key1": "V5dFCS3Sh8Nzx3gsG26yK8FVrVWbr9YJoiQj76TcckRaWmzQsCZQpmsY55Rj2z2Uk4qDAZfdioGGfS8KowqsWS8",
  "key2": "2dfEVivthymBWonCFjZEpaBd84r8EmJzZysS39ChKpNUQgudbuiV1fM59nrM1jz4rKkDgkyBQZomJwY65mLwGEqb",
  "key3": "3J9woNKVzTcwzPBrZwHB8xTeyiXHTc78EotZjpwHHoE8tmVXVEYQBRieHb2jqiDnWvdPMC3yDVcq2MTjgtDkqUfp",
  "key4": "4Wwb99pY1sG2uhtwvCNPzPCRR2rJgM6tHnZvq2buUrEZvPCkBCERgADwTgPCMB99DP4p8wMB32WU74yQCyNprRti",
  "key5": "DfXnW2ZEPFvWjea59wtLnm1G4PaZUnCtWQya4uQkmhsMWvCbxjvZ61fRJFAW8LByHYajQ7z9LKAH84P26wKXdqM",
  "key6": "3W1fDM7KfFN2GYTJpe4S1d5jTYF4p4gmvEUgTLrNvyT1NKAnNjDMioki5gFu5WZnHq9VU3PqPCA2v7aUy5vfZFiK",
  "key7": "2afieB4Haf1yhGov32xB4PJWrYzvdMaKJ5BYNqGZDppCRmCQCmgZNWQtXj7t8KUxt6TEGR3Kw5pCpRk4pa8Lopwd",
  "key8": "tJ4xWkpjXmWsgdGsiZxPaCM5JX4sawsRFYYCKFe9wSfM8jEDgUgDUt35f1eJcnx8AJxxU9GEcJMkmo3j1ATQSPt",
  "key9": "5aqDfvzax1gPfrCXf2n7rez2pqWsQhx8GQEQ6k3rVYqu7rLjwaNzsnTr3J89hfSrkgLmEkX2q4RkvpZtzCRjUkgB",
  "key10": "5UpDKhvWAutVQyozmDX1qXuWcX3boKwA1wvZfSiurYxRYdMPiSSkcVw4souNzCkCq4v1gzWdyBt8xjm9iUsZjuro",
  "key11": "592w53bGmMG9mTKySPGrTWSdsVZx4Fe619bWnb3GRbh7ucqLKrfSjSKsYG4H3YirD5wW5BcRvBZ2K2BaJYYFHCUr",
  "key12": "59uwJ8chjfbEpzb1HTmDePkEfJr3exxFjg6WFmieeMn4WqYmKWQsKnLnsjNoX1GKDjxttPrFiMYwrEKz7J97XYy2",
  "key13": "56cMvqLkqgA4BDtf3To45o113B5F4NS3yVfJVbjrb8P4QUFpqmkP6WoqoQpcRGd1t8BjbbguUTxZtu9S47x9PSHq",
  "key14": "5tsTuJXczznc1jesx7fvcqx8gcdMvi5hoUb6Vyd3iT696AYLryWN1QZcWjr6BzZ7frwyEKLeGfvcsdWaj6CwQEax",
  "key15": "5KD1rShkBUvHhNJ9JEd3aHC9wSKXzTfZPLqWwJW9yv4CuBaTDc755T51284JZxQuVvRPNxjPBjh4QeY9nYZ6szdE",
  "key16": "3hoEcNk2S8d1KB4NshB3VDyZDiLYgCtppSiPEonAxRzf9sAL5V8gmBSDhJCGgS6xuULRGM3xpPDCygQnAa7XFENf",
  "key17": "66nL9Wx6PnwuumPmPsmB3Pk6nQv9HSLVWkytFoU2ia9GYKZdKqX7upjG9qatT832oWMu25eke4H89EtuZEHjxmCf",
  "key18": "3r9sjzgfA2eRdFrgZj96tERDzeo9LSp6XfgytC8bR8dMsm9Vh7Rcsi7p52uf7BYQ8RYuETQievCVMG1UxwDe1syB",
  "key19": "3X7ooYDiV2esVjxQ5dem4i5AebhqGXMBySqpmDL6TPqJo5MqBpYb11hWhP3VqduQbbFBJyrDutqgZ6qY5ah4FkjX",
  "key20": "5yRsS67sqnbVr19MNy4PPk6QjPkCenx4oXbF2XASnRytQLK9wG21SfLekzmsKFaVa34FCU56AJHiRoVpqNu9HfRH",
  "key21": "46oxu4a4BHQMXKXhLKtnEGWFQyf2F7io4VEpTmsDtYWpUeMr2z8otPGN4BKNjCZFAWscsMSxeKzzquCaqVuTkopY",
  "key22": "HmLrMBnc6vPegCPiHTLoETYSNMeT7479Fn7BP1Bp52qWiVK19p4C9ntx11k4qSQHUtoCAnjFaZLQVA5GBrRdZ7f",
  "key23": "5jVyF4FBzzkBJQoj69ui28MV63ayt3avXSQDp3n3AkC1o8VLfsXBpLxFs9R2x3N3ZswtHjs5sSnzPw2xtZUPpqm3",
  "key24": "8VTcr3Pdt6BxnPJmQkFGoJ7LKY6ke3i4JZyHvYoPjAJN7rq8LTKjrbAVXLsNbRAt81LDKZ6dEnLnHYGU4CarzfR",
  "key25": "4CUZfmfJJPXmoDg5pWsWnSrh5YwsG4tTEsn3p89LBYWXA7dqQu85UwMfijRAsbuXfe3iDASypXiJsNNEhG9MnhJ4",
  "key26": "JGYX3JR5Lr2thyrTo1Mu4hXmB9iha3LQRGtnUYkTN166d9CBWjauYXR2mo2vpoCfa9N3cfEqd78P9Bir8BNhwaS",
  "key27": "2Ap7tSMmgtjC2tQ1GxyRkgoPi23wa8rmaLJMrTkZHYgTVGzatjgRoN9CQgPkFcCAHxhJppZUgjwFe9jKiHQS5Ves",
  "key28": "4SqizUov9Rxva9BtiT56rm4mtH9hRsUuFKqKAgZXDEwBL8N29WRoqV1dSEb9My9szoZxkrXnzheAnfub2pfDPRpp",
  "key29": "YGpVrGfKMwbDqyy2moMT1mcosrLAraSSBTnm9AuGrV8Bdi1Gnmc2seyHcKtFoJz4McR2LxB5uA2VyafLVVudAFM",
  "key30": "3pboMYbySUbFRzkjhN2KedEPav45oabwL4sqYLsV8713AaGZMu164LeGZnSK45zte9wv4xHaXEPxBnKJvtEdMFsm",
  "key31": "5d8DMZsLjRFEHZmV8mBD1wdk8qeqN2JQfXmuVpCchFBf2qSTxtQJnzPTKEUSbGjkJj2SjmHE5FY7KNdgPEsH3XPn"
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
