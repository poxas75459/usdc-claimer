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
    "4Dx1htaVgyeKrA1apUgKmdDX8mpi3Hmw1oeh6Z7JpTwTBZ2rpAAR5VHXuV7p6J5CP7teEGq5w1u4un2BPdTbfuG6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GFtvFFkBCue8dDShyjqmEyvNWz1QiHyzQzko5HpQYJ9RBHKc6cFGSM7qLuFhnaKoYFLXsCoE9kBZ6Rn2DhNjWCK",
  "key1": "4coeoJgxfJqy1rw5wv7J23r8BTmP8415fYWziCmSHZVAQ7GYdE23cyPueMiBFjus9Nzgyn1QaQZAWJtFy5fwy75q",
  "key2": "5xiRMyDmZRNixJAjTuWF77f6L1CdMtnxne3A9Bhbv9JT3SxWJBibaVoG917xV8NM4y6RJ1DDQSZRUi7ujGQtAJMj",
  "key3": "3KZmmMHQd2ajhVPxuwXmdJLbAPd9KmrejFjGgS4oi4LnpCERZezAMDM7kw6PumBYATm6kiQMgg5b7hkMyxVuSY1o",
  "key4": "4VNKHfJ8wtNX9fGEQkKrfvEcTcFnXU6DgDV85riCEbmS1Xivmc8xfhNxc9pzK1sGLvPxrUV4entApUW1Uypokfrx",
  "key5": "3CT33dkr5kmrUPerQM3UgruKmQ4BevK4yx65behtgaaBZyc6ZdLcSf3TNHhPGZ47BS5Eum7XCefzeKDokpz6W6Lb",
  "key6": "4QvjckUPnEtcuzwX8Y4LrsnTXRJyVP689eidoKiaYvDGSS39bYp3p9JEyk8rkY5e53duceLaQLj49CU4u5FWKjJq",
  "key7": "2C4Go4EL7ExPCBtcHXxA1dAhiM6jB3LPT1gKXuetHHG5i4CxJzstmc2bVi3CJu6pYkrK2JERx677XAyrzEedALXD",
  "key8": "4u1JSkMDUQrb6sM8Cg5cK9mh8EK6BrLcEAwJkLTmjGxGFoMpiToq1RCVk53drCA7dLDxDze4QVq4WcvBFn4tnicr",
  "key9": "HFtSAFq9bLzB2P6jBEA98GqWjFmUMo6SDByRMvBGRQagi1K5D4KN1CuV6q1Q7MzioC2qhwHVBoBs8FewcwYVETp",
  "key10": "vTJs72bru4ocYoGA4gwZZdkCTq8vjW1EP9SahZBWkLLM4E55s5TGrzG1UewCmZmVNeXoYyt9YZ4TemHALEtFWNP",
  "key11": "4RaTTuR8yZRw3SDsw2Rtwraa1PjT4WyDHrc4EWFSa1iKd52Kq67Kx7eAARsW7BMfFGRzWyhxLCBh9NtSb5eoFfHN",
  "key12": "3uMLyH2yZUW1QnmMutx3fa4aenmzPKjzzLsBVaNXDuAE2QL68ocyd96yH1JN5fywGfu6aj9JwEHFf1FPJRKpmPTA",
  "key13": "38hMtU1sUH64L2FgYCBSqm2fyysAD9jji9rigbiE9Zao3U8AaDF9F7VukHndEo5uJ11r6juKwbPkaX59pmpB7jNL",
  "key14": "3URCxARQx1LY492xKSsfd6GcUsycyMWqeUtZpEG7KfPp2NY6fK3A8466K584XrdPaqBwK5FTEUn5Bfgu6MzAhBWh",
  "key15": "W83FL7KYgmRiZLY3LEA72AUdyo6xjxqbGhsiii8wbcwqN5MoDxgcYwhProe7FB2hkoPkVSNwPxo526RHdXTYMsY",
  "key16": "5EzKhkzGwedte9ZFuZLixtdPA9ykDxKV7C2rr6njZtBtvopGSmGEULA1Wej3hmFLwQtk8GakYUzoKgLK5nEyRNgd",
  "key17": "4AzDLRobJGN3aj7DwNkdQu5MDWXLdaQVysQKez3pzu2axTfkNwXVZCTpWp67vm4pwTRfhj9wW7tKXmAqm36nuTkA",
  "key18": "3hSpA5YrmtPr2q22CmhwLCydUsY1jviTG4T9HifQwqM6TAAKK4ysUgP7nY9eJfmUfXB1Z3md7RAfgJpgEbscM1xg",
  "key19": "4wYcBjDPW2qxN29GXPzVQUdwLTcohYR5nAn6HqzZ2heVS38AErL4Lw3dzkTHo5dZiQHeZKJ1jiUos1pzFC6kkTLN",
  "key20": "3a2wUg2FAREGQkJmd3jyPKoijBQkxY2942idFHex74pWHXKWhrMp4SbdYnFqotuFMjo1d72UT8iEMimozSuPzPMi",
  "key21": "8szvN4pnkHZFmCBHsNB7nkDcWjNeP9XQ4X21GHfHsPFPcYpcQwv8s4MTNiyatbECKacFxLZo6FqSqXvMkESL3kY",
  "key22": "5d8vGXc7DH53DoKWcCiDGoQ6xpJeGv92Ea9WPK8e3H12hXYqk7jdmMCMnCofemLSQ3f21AgVTF157AN9m3poa5cQ",
  "key23": "4JNJwgFKoFQNi4W47RLmZAo4H7RGqXR9m1z5fASKv8Nwk47NogB3tMZwmmVbXw67KnwCDP12x6HzLBPZQ9WNsPpg",
  "key24": "3mgAz7bvrjjGdSd5fYgEKmxS3Z2xGte9nyFwPMRyKxpvgmk7FbU9r2jdRcAKD7KAHzfwLD4Dcv3kg7W12Kww57Mf",
  "key25": "52CBmSeqRJ7ATK8LxsQfT5bhNjhmWuXCMBdgggUdmfjrtDsZnYsC9hRKNmJFtrdrYqYiEEC1R3m6ztvzkpoRiffG",
  "key26": "3zue5F85BEdNsWh82zTJFXH8WZksTerhXvpKyUBpYG1hHGBUAm7nPQgmme3EC7xitXzEXVZ5a55mJEDxzfpyiUW9",
  "key27": "JiSZ8GuyMUrgbNhHXoXxtXkR3M6eamvwi2dGZV8YvjPF8DPe57tpZSaQbkYKMouKqLP6pdJkSipQJ6J2ocsPPST",
  "key28": "5hYADi9wqfmnooULEfFwxMEHj3kBEYzYQ6EufqWnfd82cdLGc2GeqHzdWMDgUf8pfhzcfaZiTJ7hSfrDkfkBD8jJ",
  "key29": "frGcMBu1HgBPZECqZvjxYhaA4bN36rZeZvf46TKUsBNhtMTGaujiBqWJamSatgezMRbm9ynntU4mK415q3cukUs",
  "key30": "fxVjSMrkBu2smLeKdV1UmUizqqX7VdupcJhfBngCkmeHWCrDn1aWiPvxjrYxPd8gqHkAebYqX6CNDnihfoo7dAP"
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
