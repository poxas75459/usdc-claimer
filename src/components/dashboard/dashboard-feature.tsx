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
    "31yHAbNFzwDujGJv9aPC8DRkH58WagthvZBa1PrQJsi2kpXTVKjQc3u51XHCKMiRU2TibGAThJZQ5JtHCUJHZFkW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "389KM1s96uecWzVWSg7UqkZPuis36KTBX6ywATTpEes35XY7bFLMn64eiEZtyqcf49oCweEMkawjQdXDDRt8Tnx7",
  "key1": "41RGtbHdy58FocR6SKJR5W8iZYWTFn4Z6XMkHwRT8MbXKXkUdQsCPdV4ULYmEskmYaQme3qgbt8Y8m4yS4dGrabr",
  "key2": "32ZYKZ4nTDK4yacae2VuYjSbqoFHhJdGTFGcdLdQCvNFLzyJYRUps5ag89e6VBtMeTWvB8cyLMJFMPsx7RVhZ6Fz",
  "key3": "5pHvytQkv4wy2Wbteic8n5ikQWyuqQpe822xGZ6pXePnkuCpDafJVPFkJLxJ2mYDVYCKAMmNiXCW9P3tnyKGaRgB",
  "key4": "47zYk7Jj8Srz5LZUq3iZHLYm4GmfWquwrhkukiqXtgFa6JRZn3SkGVRR4JZwfPvc3qDQoTE3CbAbXLMAUH5SFRZe",
  "key5": "37QHDVFDcxeJ9Q25b4ZMhytUXvLFiDKffikSbpyQuyAXJrJJqmLocJ2ZpS1aKeqZKu3dzWWmZi67GQPuS2zNiTc4",
  "key6": "5RH2B7iRqwsfwkZ38cCCb3299461hZTzJ87a6BVN414WPX5nTwzikpbZGhM5fSZu7Xn2oFNgcEyci8Xk52RK8avv",
  "key7": "5pKEhwjQ6X1VrE5kb1oHjmV9KYL2wmy4rqBLNR2XNq1A8QEQLCTpDWFsanjRdHLuAuJsw9CAy7uQbbzQAPtXqEgp",
  "key8": "59yRgmMeNAQQSYNwsZBJS25RcpWSisozYRJtsK9CDy7fpJhRrpJVBp9QwUjntogpnr2aPCm3nY83ayyrDmhzsVff",
  "key9": "5jkf3UApXNhh5fkz71jhN3XHbNS5tfYA9CZ2cr5Njo1N6E1QMMbapL6TzJ5xDw79WLxLHERESmJKQFVhn5e2cWZH",
  "key10": "2vtZp5yBRfko8SoY3FRKX4ZWjCGc7ZfhzXdCYHiesWkvGyNbcZGN6rStQ3DYJ3aA6vAERtYeNjyh4k2a136ohYUM",
  "key11": "4vmBWtyp4zpDX3YB7oSWSMKwLFQJsecSepjJ18dfkStbBd6Md9vZekgxrcVCNJ4L2TKYqis54937SPZhbD4GGoJp",
  "key12": "5bweBnEY75sQgiob1QQN1iggPZMa8PjNWQiP8d4jKA1UfP3TDXgVchNRvydkkcpTjJwiUF6juZvNhPuYU694rcPD",
  "key13": "5ZyV8tvykBimRyVQLDJsvEtkqt2bu9PVTjkGMk3sU3byJjG3TBiHCQ5YayymjYRX638UPVryDRfcFjNCzoCWHKXF",
  "key14": "2CBGHKPsx5ggYWB8a9fRtBUQCXWejJdregtqjuPd7U35KUXtxFz3nbf9vH8WjBCXhXiwkWCwrLdMFoQ8eX2aWSAX",
  "key15": "4o1uoHHHLjNC8jvPTHtcfUuKzcGuxSbrM8ZqPkyUGNJN9R1iAHPBE5WQqG36X76s3Ugv9eNF12fE452hDDPCqtg5",
  "key16": "9tcJNY81AKbMk5zvJYzntZ5FgZRvkuaiRD5QM47fhi35HGzuFpV6idxkNrsmBHURb3FnKYNK6oMEAADSb3oNAW9",
  "key17": "4X2DuBNxtTZwzqRN7CLMnFUEwUH17j5jnp1jbxmGndsNCMrcHkBfvJGqpXy5w39bckMmu4PDEqZkB4PjU17Qb5yV",
  "key18": "2S64HHur8L6WufBFicpiVmzLvPYYDjoAUxNnQ1KPjvvrKjXkhatijAzyR4n2p1JCGuXv8mKX3umNxgtPLUAbL5QY",
  "key19": "9bJhkgDzfJG1ky3EWLdjsEi35qGfgxMqewE1itvp2kkxCRGPAEF31dEYNbTCkesqhAFWyyuoDEe9rt8BGUo3BnL",
  "key20": "4TNg6Wk3TAMLgf9YTnvvcRshngipqwH4NpgKJuktDYRFxxuMViALkVfYno4nZpBwECva7NgKX5esjYnSNvtY1nT",
  "key21": "66unZz3iKzVrWD3PVCQLGPKTnX1vp8n1j7tsEMqkJn4SDYHef27VhYtTRcwZHg8rKCzro8Z3Fojn74Az1JLux6v3",
  "key22": "5C7WuxtDf1UZ97njqAa8NwVNfZoKJcdTWowQTq9Ltd1vM2wxmkgSrqKQVahFUG8PWZ62caukgHJ3U1Vb9tgCwSy2",
  "key23": "3JYwaAyonubL1xnHJYPncpc5vobE5DBYT7EP4k7X2wt4WQtXqCbxtKrXtezjG43R1zuoqLsA46jC7xhP7r5JsMov",
  "key24": "3aQymb7iERbM4wvsqcJ8LcrAKKiQ42cA9hj8Htbkvmfi4WHaT3d5Cf8aWJEnf56kcC42gCDB2tLKN4GSSJwixyFL",
  "key25": "5ZkLwaV164xYFnvvMvE7XNETweXawHMVW9MKKNukxAfmLL7m8EZGYGpnPoZTyh5G1ERvx7mUXiiXHm55L6dXpxxz",
  "key26": "NszMQwUVj3J7qkAgGpkGvUbhCg8RFWz1dRktSiaLFfWA2zQwzCMAASFeCnz29ZxhqvDMxghLbgkJHN1a8ry5seK",
  "key27": "2M5MnpSMRmuW8Ex8G4v9GHsvYWSeMFx6vrwnDV88zKQQC4LHaY6Aq4v2JhCEwryUE6qUGn72wCSRT4SCcCrqvsM4",
  "key28": "3RSEhAzTwLrsZMw7MF12ML73Eoxbe6Hhy5y3iY4xKGGoxNXavSc6nEth2V12GWLsKGRs7NTvwrtFHXuLdLbCzqYN",
  "key29": "35iuEXScyZsf3NLiF4Upp2xNsdiRoF5dJuMa3GXojZZ6LfGe7DkTLTG869CAfHuKHfUkQca1MkvaJWa6kAFSyMV3",
  "key30": "2jPLHHkxbnK4xi8uM583NpVnppPykvtad9UE3U8o4waYrkB2ihNqev523AcfBzokazTKtvWtSLFEpTm84L6kRBNd",
  "key31": "HnPohTaF5srN6BQNrmE3fqBoQeGQ6LQorDad5TrdP5e7VWk1m9gWnBh4TF2Tbrk5kZCvWBuCrezNP8aR6K4b2my",
  "key32": "H1td6QYhaePnq8qpvWHZHAnAHcRCtyQjuQbSmoDowKtqiLMTkJyvwxEZnpoZxJnWZRcGm4MiN4637nYxpZKbKVE",
  "key33": "ttCUSsrc1P1jiURGD6s5Xrzs4tQVufmxz1G8WQXVtK3PY49wjmJWvr9VjXxLLXhh1MkjK3vGhLqkFqZPF7JUxHS",
  "key34": "5GfW1xkgBQRPbLWhquZoM1HHT6aWT92u3EatgoPWbB3xw1AXjHRFRry2EwRVrWLzZU13YSLBXe9ofB5mBnEXYpEp",
  "key35": "5gTuNidE3Xas7j2kGxCS9J7yGHcfxLg4FuZpKznsby9y3brVtUSh8U4Pr9916mXzydm89fwA5BbY1ypMHxWfEcTN",
  "key36": "58t1c546Z2YCqxCML4XcdmrkSZsUmKsFpq1TXNikdi5aYuYcKXe6PQ1GJghQSdmUHTXHJWgwSKq8zrPcfRQ2UqzF"
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
