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
    "3N8U1iP85FutiSLoXtMhtfwmZ26VYTRqQYLsvXSwpmKJZPUvXUdDj5FoL7PbfZT2CAvZ3xB9rRSPb4mu3Prew1g8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5znaG296D34ToL6LzX5jFN3ydXEbi31TJA36HbFToswPBJhaeE1YtpxWqZqGUzsJ3qmBbNxJ6fpQAZpp37vxZmA5",
  "key1": "5GMJCTzBpW5y779cRNsEnm8MPkcmytgoNv9Bywdg3gEiKzTgvsyxBMLkdshZiZsPkknXdGVfrfASo8q9iVi8Sixz",
  "key2": "3WgjXWUyLe8oe3ZQ4CKA4aV1nCisvJna4B4Mev9wTQ8u8mJ68EGCwxjpPon8z7MjKzxQmX8WMybncxzMHB3Sk4h5",
  "key3": "eJgpyM4Z4QKEQHXJTvvRxs3XHKXhbBSrR7G8w23JifA1jPTenATKn8gPLNPJoMM5bb3FMBxxbtkbT7QRM7sphPw",
  "key4": "4zMjDPypy8ZadmN2DMXwUcqRnqHnVWNwNtM71QRw1dezkuNAQ9EZNmyWtePwXHBTfzdSbpjzcA9wKy2KuLhaWo3m",
  "key5": "4a8EDUFFxzUGJTQHpD7WCM4g3H4yVJkgZqVhczXKxyKhgD9RT2yRx68m6EvXYDYXWs853iEmkfCLAwDp5zG71vFf",
  "key6": "3p5NQanzY9mv8t3JzfbJh3KnvQcMugXkxn681wxjXprzUmC9fFBc31Lk3Vg4B6Xu86YX3huMNhxLk5YRyeWYdG6D",
  "key7": "4b8drK3QYQsTkLMnf8gbuxMyrddP7RfaAHQkUtQ1paMtSZphp7v32s6uLREv4tw6Hn38q8fUHK6LH8NuBeDcVzEq",
  "key8": "3fbhC3dsDqN2MdyoPzBbjJ7dLLDenQdAAUMPZNbYytxszk52SLqUJnCW73ebtKenVoQ4KjZyiimD9vdxvaDXF9iJ",
  "key9": "4Ah8cx4c5YBZwUydYgGvSn8BenthA2udsfGFf7QLydWt4nwRY6VX28oHkYvfV8avJURRdNC9AN9Qcffspc8Moa9s",
  "key10": "3UvAfvmVCSgXRgNXExi6nxVUvVwXZWMqZED9KzGmrJxqEVZ8FfiEdLxCaTXnrtgY27tp8a6sbqVyWjiMREieVudU",
  "key11": "3SjggCPK3oS5gDH1EiBreBzuddTK4rCYvwJ8bs4ENW4GPsVzEoEhR3zzrMJjaJGg61sYVy854zdgCKN1UmCRcq99",
  "key12": "2jhrrhzMUPAVHCyBChWmguun8CDY9M9RHShenXzkD4iv87sVDhoJQCRyByP8u1wfF3CiQfBagkj6b1FBF3a5rEHq",
  "key13": "4zASrGcRyq5HexKj891NRvcHGeH3ftS8YtACZtaX8tgrF3A5J7FNr1DAmB7i35oyneNFpSozpYj9Kf4UapUGn6Xe",
  "key14": "2i2AtxyJLdQGc23wiRzaKQHMnbNFh44KSDLSa2Q6UbUvk7RXDAH9YydWP7r5y2ZLM9jerfyXrHhiYMCoZEGUynaz",
  "key15": "5YaBmoJTjjWPpZJVysRM8BPMPMjEea8Lya9xPRZozx49SKUJVjfGsPtTHUj8VrUpUzRiUtqZy6q54PXia5TqPT86",
  "key16": "51xJhuWHLadGDK9SvAYXJJux6FXvkJ6AUYyErzjrghFWzifNrGVKQTCbDVjnCxJjiQuLN4Se2JTpgrWog19pdjQY",
  "key17": "acz9KrKj41hWRcEE4ASN3mf8z1krnZtSv6pVJeFQy1y9WExZD95M69n6hgeuGaB6oDnnPQpxpskirSY6QdX7oXo",
  "key18": "3pqFR6pKEwNB9W83xXg51oyXZ4eK524Pk6vM2FdvMCetkH5jDyvjbB4SkjWBgFAVaYhxyaRvebKt7GLjFE8RN5Pt",
  "key19": "4JeYZy4r3T7WNWiqRRm1BGXbxRZ99Picq3CkdaX79rwDVQPvdRGP282kuF3h6Znvk2rivhw8gJzxhLs78DyKqwBK",
  "key20": "42YSYzkvE1saSVyMG8mm48yo9wGSdjuQdCrrr6okSQSUWm76HrrX9FnTfSVnaHuaXyFBAgdGmg5mhDpvKVA7RpZe",
  "key21": "33rP9v4xJYPZ4H1ty1hYgtscF2tunV6h2bW1GeWXoH1upbRBiRHnJBEXzkf5817qwD7uQWBn2XD3zrckoDVt3SYQ",
  "key22": "3MVm9XmTADG1Z3c6eJQn8xhj2KJmRgam3Y5V4JqkW8y2rCijoqZckWGBrMLp5BYhURt5bvJdS42j9NpLdVdQCNQe",
  "key23": "29MzSaubrDSYby2h4uxDE3Bnyps4bFi2p9T6eCoZaEmpnAPv982gtbcuxfPhH8Dif2WnCKbdUjP9DAwvtad6j9An",
  "key24": "2pxLV3QfL7UNaBvR2bnQ8Ms6LH8WiA6cLLhjCyTsp4S16S5ceWCGoRMzo3zsiFx278D66CZkkVQUc1Km4zQoMmFs",
  "key25": "4RQkyHUCt54phaeYopySfxuXBteycdUmxDB719aiE5s8yoikLRci194gHx3SEva9UAioe1GwYTD9V4nVCQL8APid",
  "key26": "4JuYuhrpHjE2BZBregGtXKq44kDa7fFvDty8q3yv5K79u45WvDLvNrFMoszUFpVwiJT8byjyfu8s2MoZFmLuhWpY",
  "key27": "2A5grLYKrq9eEYc5S3N9p3eNSX9WTddJEjZmknYQGRSb2X3dXp5xcL2um7peUYmomwdxnQYuPnYTGVnYMULSSpcQ",
  "key28": "2pGbXzPAMhh5LRUCX5hRiRmPMKibEaXsEfJzTpL4CMZpJskCv48ojuzhNCxYKgTjp2FRNcm3bNyu59GBGUrqcdJC",
  "key29": "2y5vpUorJRnXoDKWhE6xMFK8teuB6f55SWouWRywhce5KoewoJStQdLnNr7xCBojxJVm17kwiw5LQzaduMg3xcDh",
  "key30": "46fQuuATdTZdq4GTaapGU6tTD5Nm5sFGU21HQB1u5uAUaNyLSNA1vYRcXVqeJEkMbhyJ9PV7W1jKTpWwHQUhi83f",
  "key31": "5V66CzyvTUW6wRFGXxpmhHHxyrTK6uNfJnxCSAMSokDaDw7cWCefsUQXwQufjYHEc5D6y7sQAg6iv2dexMsLGZ3u",
  "key32": "47DV1HRz86hHCE5jyJe84PCgXsv29TF85po6wxTNdUaHrbxS9myJzoHMP7VSwxTZdebBat1KLnUE6cJCN2KpSsPP",
  "key33": "5BCXdfakwqrCeCbEJSDyej3hhQEq5tzG6ZLYh4GkH1qHZZV6qMQoN7RKXw3X2B8ddKpxNVNn1oFR3r3MUS2j9KaG",
  "key34": "451SFjvVvpJ2SNurfn2CsRvq4BHQbTA7AC3a4BKPYgd89sUpzdQNJU9TD4a8D2MxjEEPgwGaaVY4eHKTU6tk1Ebq",
  "key35": "3bYjWVaNnox1qHFjsfd6ERW6ZWH6ZeYaaT67KUQr7sKG3BpMNpFPtw2yP7tmrZPNEWkLzciMn8udNEdfFWT9Qeaa",
  "key36": "8ZzzNGpqaXLj68tNwFkEgzythLajyTLUmKZHZ7JJ8a4exuE5z1WqSgYQKkSm2io7NUA2SHsw8E4jtKUxaKfGGRK",
  "key37": "ue3W6u1zB4FHeRGTkJF8YHWBfmbUtT8XtmQQx9VaP6CVVCU1ce4qpRpCVyh6DTdmaJXUU4RQRVSFSZ3sDmf3c7n"
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
