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
    "T7Ufjwf2cqLnTXrnknfCXFfFjRK6JgP8hmzMxVR3pr4H49N36it1EJhXXLQHz1ZUe53r8siQjqkFo9mGN8knzLh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xPDLXmxv5ob5qLffftpJCEoWMyXkqBNbajmtzauPhpqZzcUPKp6A28F9RQHxXhZbj4ycRjW8oXBQRTcmm676Ume",
  "key1": "4tmH7mdNDet2qQ2Z3qx8fpFRBZSHu1McUTVms7n8RYgQ5Kpm2xMvQA3Xb97UMgJAnSeV42VLbNkDDd2SGN6vgqcV",
  "key2": "22Q3SrDU68jhNjihmKMZhxKREM34xp56vbw4cp6e1cfSjsFaf3LpzPaHZXx3NJfo44HZnSZ6cnGE2XLWcukiTGcr",
  "key3": "o8txmS2YtZTQ3Sk6NBGYMAP986eJTntauFEXPQew3zQHgejFTK44U2e3zMJ82X7WJBzR7yT7k7ajvahijxaBbhb",
  "key4": "4oz6v3Gszqi9DCVisjiW7D3dMCAy9eHKdzRkpuqF2XdSaUCbWYeBhBcq5VHpEHZJs5BEXXoqsUZ1xn1NwfhBPoGp",
  "key5": "5auVyb7jAbAapA983MfPCTFNFZXPZkP4uJCh5PSQMaFvE21xEDe23PhSuEQSMxUcZzdESjy8KzpYgtq2EZSWUAtU",
  "key6": "3mWaMCExgvtYCxKHnZw1uxE5BaKk4WmvyPfGs6dyWsiPaRj76bsJvn9D9HqnoUaxHQY4ffU6NNhFgdtMsQZgYSCy",
  "key7": "3eZB8C1nTdV5JuJpm5ttgFbfviSvDrUnHpFMAaCmZXEk7d1STZDg48WRzrLt5ScSHdR6hjgZW5btz447G8xpZXeM",
  "key8": "2En4zQoQZM6LGRVTahMtrtURVNqELceM4udKopoVNQXRGJxjuhCtNE8wUGVrq5am8dn7iA4CGA5rGcyFQUxB5hGx",
  "key9": "4c7G87BqmunY2ytzVuVDVb44okHvvtFby71tUNQwKqCdeQWeFUgRQXL9jGrcjLjbvQeBUvcShK9CvNWtAEvDNoi7",
  "key10": "36R55eKczYo1afr9uxHUrqnHXm2ByEyfJ5zCWXhoZSiJy9VbQN9eX2t2dSShqoVcqKVZNzn1RfG9dBmKbHrn67K5",
  "key11": "5trwowivaTaRw7WqBfKGbhCTWDCXAdq61iQ5ByH21PpLbrBq6gtdLJv6zJw8W7CJn3ioy9BpT1ABiWTVA1TheWBs",
  "key12": "3yzbX8XLEDzYqanQhVV9ZkB6KieiFByRPzk1xfHkExT9hJNPXxfDAZMXZNd7G9KHQ2LTnnKYPoNJReYPP17MkSsq",
  "key13": "5CmsWHTu6ar1VCh8NV5McsLDi4CWBk22CetyEhBZ4ywG363zGFq9txtGuLuG1HVvifMSbFb2Yw1DQZBNusGLerZY",
  "key14": "3XVK4PgLzzgVBqHrXR1v1ZLwyvxwfuSaPowrGaG7Rpt3onz4ta3S6UgJy5EV9mkAtWaJxdcZ6iDmvqmgCrDyRUz8",
  "key15": "5XngtkrmkdPymk616KdjV8vFZKHSYN4scEZtzaVRu4aLMqo6yN3pAwNYGyCs7xt8Y14CZh6XQamXfPrJSScJiQA8",
  "key16": "4dzP7VhPiqLd362FQhQoRGRiiTiYpcSHj4rkMM1dYeyKF8bfvNEd7KxeDpG7bgHqM84qBjgaN42cD55AZbPAWRpm",
  "key17": "2iFu91mtzp6WJCg17g8KGJBYnc8pvHKVmGGr8TqUvHg2bisQHd5TN7qyWqRZDK3H5r6hJzYFT2GvheEjnmJ62YG7",
  "key18": "4QHWgJzGkNMGqkBAorDnV6rCrVxZPSjvTZFPJ2JBArWypeHmkg1541wbuUC75xeR6jSdCTmUXEpZM8di4C9GpvBU",
  "key19": "4yUYZ3tJPzRmwtm8RD1yHht17fQevLzYS58G7phFyV6rVCXkUffPFiRMy3auTqNM2SB1HVGPa5h1WaxAhR5ac6VY",
  "key20": "4E1LC38qiZ7HoS1x2FVLQLg51GJBFvVQvoWgmg9aUP6j2xJgeKUC3BQveWUToAJu1azSjE2PcpGfg25xf9bXhZ5o",
  "key21": "67MWfFxgP7F4ncgroLEqGQNDj2oppqEYk6gmXpnSHwDSnKbtGLSFn5HZUehmS3T9wmR7LDr6EkigoonHxtb4RXQh",
  "key22": "5QkFVWjYmhPpVBYTfh6PxdJfqLWcXCgWvSZGNhhbPxPy5gEDmVr3uHsMKuX1DmSH1ayZWzzyGCCXghyeiwfgAsak",
  "key23": "4HaRbTAfcdpt4RdvtRiPiEPagd2VEzWdBgu7tzjxs44RAo8g1zRf4iQgrgjZg1Q1svfoznBicHjwNgpqK53mMnoH",
  "key24": "5dhvfS23nYsHz4geD3PSAGHWatVqYYiU6u2axFLLPAeRBUhaosaCBVVgiKzXFkfCWFd7QDJBSMqpQz3fpY34wZte",
  "key25": "4AGeGtyDE8DtsqpkGvS8aQ3Kjx5YgyjQumB8deiR6cDNkXuixZHqBume26LSC3Lgi4wNckVkvSLYnZ7wwLvycga6",
  "key26": "2gCaxRS7mU55gaEU1TiyDu5QDCB1fR6eTuMMnn6UCMSR1F6EXZx7uqZS8fa29MF5VVKgXhZdXVteKGFhP1Ysvpow",
  "key27": "5CCwNxrxaqjge17T4BZqLAudkp5VGP6syHwQAfV6VtEDjpRKTgrTTWsjSMzDwVqX3yQrqFW5heP4mDdaUcaHMvca",
  "key28": "4tZ9SNc3ApNq3b9jaAUx9dHUdDZRBp2hRYXc9aV1o6wwiG4m6htYkCi9JuM3p8zZmvEbdRhZAZ5nb2WJgVRrYH8G",
  "key29": "28AhJBEwCLyvyGw6KKuCK3MnRKSsLPKfShVx9vehma9kVxRPwu1ihhbLmJSsdPArk9NXP8Da4ewUNKM7rLmg8Tz2",
  "key30": "3wPoDpmm7LbCreMS6FDH5zb3YmPKJBqcojHDrmvgFoDNbWvQaADWaTwMrQ6WPnysWN21kq8UopS9Zx6cF2jAwoUK",
  "key31": "2D6WaCEwEvAkjvfLezFMs8CPFbcvknFmKCwrHtGnctKUPM5XX1N3GnkUXFRKHi588WkqA8HvA4z9rA88r8VDN3y5",
  "key32": "LbhyUv6GJH3E1xUo5yE1WYPas3XJd1HuYVGvtLycA2RUVqdig3dkvDDQUApF6QJihUVUy78K1mLMDYy8dd7aosi",
  "key33": "4srvktH9HZZZyRBhSZQopRpPQ27xochtdCiAmk2HzcWBrcspW7Da1A29fc7RVKswjj88eVbWTTrAn8XgT6NaSKaG",
  "key34": "2r3Ta3XVyFg9HTLoEqZiqL4QdjY1pjgf7LjTRwP1KyMq9Tyc8r84ANN4TSvkSs7HCp2VMVPyNjWNaQeRLhFMkrwb",
  "key35": "623inM3wRXbzSFANhq7k8CV3t6aoUj4aeA4TwnmZkppYoNw1sr6wUzB9FM3TMjjavmXdQp59HyaWcenBfvW9r3iS",
  "key36": "5J7nbG5WpEwMUDr5urm7Nc4J7EZTKqkw8pfATscJJStFX2TCbFWMu2WHc1ZkCFkT5HZ7YefAGa5pCXVnNp3r4VMz",
  "key37": "2YfPsNmLnQqdzN324FKkuBE25nQ1kAP3ox5XyhBarXh9nxKiexPE4FbHHEWp3hjMZaWHc9fQpw8PizMWCYHrUjhx",
  "key38": "3tJJyspgoEDTrBgoFyj7xGvzBQvG2ZtSAhHSZHoeUPxnjeJhgYFEFWDcrV1KiGWDAnCR2zB76Bou9UKFdxYiDZZM",
  "key39": "4Jd6DXraFV7RYc9iFeVi2CLrkudH1StaATXwGCmHMcJ2tiQ61GMjZvjJuWkZ9UkUobRnwpPYHS7GQHbTNEZEoyMn"
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
