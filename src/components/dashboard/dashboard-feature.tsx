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
    "UU2oNSTVLa5nyLkBCas1eCKdtQaQiUkBzQ7b8P7jWc5HZr88RSfDzpJGdjgdQUD5QZectgbSFGpfB1PVgAm5TMH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sLcyFVHhd7GYj5XYEf81LwJg6MiRxeRXUiiWP9Eyx6cCiH9Z3wiWfVPACoxt6EaAJ4EUEoF2UFfYGD2U4fPacot",
  "key1": "Bc824BJ3z7mypDevrHojiKA4SiBw5e6jwZEi5P8CV4EPzcFU7k3Mp8xZGPEBFeU1TUgJ6jorTnerWuRiwYp2EJL",
  "key2": "34ZjRZ9QmhDmmxzi1L6UGb7KWwy5KaUd62UpGAXK8vJccT5J9JcPE446i5xVXVxVvoi8dvSiDRDC8RLkd7YsAYLK",
  "key3": "3BBNyuePeMN4Gh7XQWngpKAVisvAS45if5tj5Ce3vp5NbSukumRZfe2UMi1mNBR5ZvPk6BxBfDZNmiWHejms7Xzt",
  "key4": "CPKMuJyHBggjG7Y9167H7Pnq3uuJvbun9cyL72rnejTdhMLSANzVqZLhVdLvaj5aMaSUQDqFZj5N3XngPs9sYT4",
  "key5": "JW1kWcuXY76GxgKZRhBqxXGWuoxyTesrXVuCdW8yXacoGtF6qAAGy1du2QGJRGMCsHRk19mpvqve32aX345u8Hp",
  "key6": "39NdRucoTAtrpJLK5svv6g7ZEoo9GC3XxtAgrpRqfAVvdo2ei1kiLpm7zohfw9i3qiuc6fpqrQJybkks44v2X1cU",
  "key7": "2eveg1KqUybvEp72DkRy799QTTNqFuh9QaCgua3tJ2FMacrqrMAsZGbMfdbQW6JbnnVaoo8UixVcjggb2uxijd9N",
  "key8": "3CG9f9sRsCXpKYrito5Z1wtifgNGKwHeDrHDAMuv6aaCUj47EG91KgP5jZRcLi9weQLFNpCC3QxWtNdgESg4ubEg",
  "key9": "5Zt53z4xz9GChSJg6QVDmYwBvThGvG1rK7BH3UD4gyLm9bYKUZEvGte3oe11guBw5Tyg7pmcifsRpmYVawPWen1m",
  "key10": "2oNceirMCwc3shHmvHyn1PjLbJ6xWBSusy5FpTE46aVPeYGrQBvava9rfFLJnyJWG15ahoEc6VxDRA3X6WKBbzVp",
  "key11": "3WN5eaZHprMdPoPLEiaUu1WYYmxX4oPiVjJzhn9ypSsAWhSBU7HV91iDbot4MvNbVqQxde1h1eoa1TyXw8ocp357",
  "key12": "3AysYGLht3yUC78dJXFAfjYnLzukgqKSdcfnsC7Js4AyhEyiLQvDbbxtmAWcovdb1rFuDGEAKhYMt8p8wmGRvNqr",
  "key13": "66yTh3ZpN9MZ5wFuqGdzdzkP5TbW5rbNH3SnTeAL8egEGAhaEQcJueENq2asgAHwFYu4R3zv6YdcWVVgcf5jcHMc",
  "key14": "61W4fpbs4NoDasHhJnKMbVRRpwFqmkVTEEumQKBqiDhJcueQCq5mDM4Da2VjJE7oYyQm2KsouvuiXQtEsBRFeXyX",
  "key15": "2QfyjZuvjC2WkTN4BZBJf7x1JagojeXQEqHr9Yde9fmbLuTFA8ZE2qrNgGJeGoHTkVfos82Q1h5CdJU1sth9MuSX",
  "key16": "4qHYsa9hgCc5KBfUfBWvNv9eQUedxdkvau5sq6dzpLEishTvskfoGRWTjAPAzcfN8wYUD5briNz1wDmpJ5sDhdNx",
  "key17": "yHpCUtfd5pM26GkTrj6dcFAkmCGNJyb6CudhxrCTpcfLcjrk5nJ4NDnhz2Kp4Zm2PAa1iUxJ7uSxb2d4AAtHH8M",
  "key18": "56T1cBDeVoQoKu136hpLN2tYTi9g7AeWbRTpaC5GiVeB4N74bWgAf38wqvo9KjxR8mYZi6Rm6P7d3ohB6oaCAWYV",
  "key19": "4aXiUbsk2dCJww1sMT6UNhxY2safPeQkdzzjFQAakAwdaYPJjQmD9NeinBntTcHPhrP9y5TxWiHvx9j7sGQAsygx",
  "key20": "49Y9c1SStbV2nqx565HjVpZneWLrCe7AoQb9zmhZf8rsz3yvMrp2fxPJqiZQ8VGgRty38tRoZPU5f58jPidDB8Ed",
  "key21": "5vxHs3w7DTcu4nPhYRALwDkzQTnGu4fR4912sQ4ds1ay7P465aWmMTgZr8wamLDW2V8cbv9tUz6fLZb7jsPDtEGf",
  "key22": "5ALe5oh22zEMAUZCfpuYQMm2Q8k58NjiRs7QYZmn7EYW71HpyHw96vgAb9WzZw6ZhXZCzySKdUUg3sn4A5KopPki",
  "key23": "5uVPPZBrrLoBuiKyq1cGtuLWQ7uZ98idi3rmmfZ7KbnNS1EP4B4zUQq2jYzPg7FUxkh9v5WRmYtv1owD2U6VnQbH",
  "key24": "57rCcFGjYPn3HhFcUVe6e3bXHsco3ZDTg9Td78kR5KDqGm3m2esqMWivmcihTUijoUs5G9qzPCuLWLEqFZVv4jWo",
  "key25": "FayZBUWgHnwvCwo5fLD1vVfGFMEiVoLaiMKDErBBWY47DcBUPUD5tKaWgbHgYtdJhHu8w7AupdSMgpWZBDEkJCH",
  "key26": "2TEEmicEvosv9tTjotX11MULcPmDJefiWsPAxxT9Ve4WzrjRXvX8rLYro27ypuVNZ8RPKNPA87m7LkMcr7kkkRUw",
  "key27": "ZkUhZTJf3ggzANTfXMu7SFCCCoH71ecxuEEKoiS81UrTh314JDKyH8NzTn13kQuEEPNCs8Y4AF8o7NX5Mr5mXz7",
  "key28": "4bMqVZ4wXMWAgs4LX3kacPH6oJzqpZyJ6g4m3R6ASRFuJ7eDfEUQJ46SjSQUTrL8qT1cLFtXydgWDRBzmbHEZqpw",
  "key29": "3Vv5DQvG4ne7fXFY3bjestZYPhU4TQ54H2qZ7gXG8tMjLi6tFs4ua2CHCzWZFspMqjX1yWkzLFK9NsgkC3dXg9a2",
  "key30": "4qQpuA69Bdfma9JEB15zaLcWvoxBmRdKsHmitKVyuW37YUX21aM5KM98oKY7FLEWiU4DFNAC1r6RWweWFAZtbaR8",
  "key31": "2ywHkb5wox7og7PX7GeyDWSeNkC8qAfRrUdZjKKwWWoabBqDrnkVKUX5A4RM9b2RSpcfXZGRbFGZnzPGXb4xsri",
  "key32": "23FcarQH7oiApF5YMDYiQWp89gpG5QL5WjLb2xU3H2EcgEaoGa9P6zyjZiheWkW8jenEcyTYWEirdaqPCi2bxcVz",
  "key33": "2EcGgkdatZR8nsepGFUuDJaot4weauTyiwbrbynWwpPxZ9CcQu2bzgvDyFguAF33K47zgumwRaYwMMvxX4MTv7hu",
  "key34": "4rnRP9frHiUVX3hFcuPNYideNhi6S2PshmqCz2d9eY42tAbyerf7sLTuhT8pZPBPo3TVupFTAQWbfKugzUa3t8uX",
  "key35": "4mCPxNxRgdYtKtnn63xYcRP9Ep3L72yGSHHrxC7yMRRB1BtUQbp71b76HgRtv2686b3wUDzznYdnDKpwtc7cUvAQ"
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
