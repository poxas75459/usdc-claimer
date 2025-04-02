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
    "4RzwCGzGAodpqP96ymVD9ywp6R3GwnZnvzHgje3XmAirg3CNf1czPAUvPeZmbvYMaEmMe3pS3EWx2Y7AL1NNcSZ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31WNZTRZX4Hfo78NvE5eyJPGmvXoFb5YsZF6VuK4cJo11io7XDoQMrLnw8RxhztbN8NHSY92xn3D5M6Fam2ZYrMZ",
  "key1": "4KDBSz52t9LRwAn9zHzNBatvEAyUm3363Tz5sEyiFckDQvd49SL6zDpAMW2TEFvjaZ1w9dJY4DUX2fTHmZK6jap3",
  "key2": "43n8rsXbdpKFFeyXMKgd1c34EMo1K73mtVWGRoWxvNLQE3gcgCNjojr5HvthMthQYAAdsSxfMtMLk18Aao3T9Ft4",
  "key3": "67J7mMmUoUW48eBSzHH3c3N13y3oLP9PajohPvAeJE29CDnxr1RDePBYUBngPRRp85CyqWMgRy6kUyrTFD6mB9jA",
  "key4": "2J5c9bPKy5RB5toQhNfpiMNYciDcWhM127jKMDQUp5fQaSxJ1Zq7MqTESMkgUXDED1sgPU38RLvBoRpZgWHwyKe4",
  "key5": "2bpx29fhfN17sim2kmuSsxPY7mNwmbhsjRj8aj4XF94eYVRWGUEKYBJrDVSpiFsM6druhY31MhkscKWAg2bBTxD1",
  "key6": "49FcJS1Kk2Qo6paaQAihLB2VojNoihPbwjpJsALhUxyeaRPBdeiNyzEFuVC7gUtBmQFwD8VWvQVmnszijXqzuLF8",
  "key7": "5VRmoDn1xgybjoTfh7vm1ch5uwn3DSEXtD68KopPo52TKQQWf1JAwyjtWUutgF4wf6SoM82qZ2a3N2qbMEfwCwJq",
  "key8": "4R4vFB7Kmj2JJrft93mm792UDqzcSxYH7ajAJTojsJW42awEizkp3rjr3gJmst8Gj7ai86bSRxXooFRSyFhkospN",
  "key9": "bqffTnWoMRK8LehZgbwUZ82BZbfYRerJDhXT6RAQY2VaXsEhUsL9YfJQF2wpsPyY7JeZ4M2wzT7wJx17aVpDWxk",
  "key10": "3VwHtteWghhqUsyJEKbXp1Wj6dzZdKBheUxmVHjwvK41zqmzVMr8kHuHXNkgYz4KGMs4a3TWMR6gkQ2fDQeqwVYx",
  "key11": "4de9q3jgHuK9w1LkadXCbxZ6XnhQxSWk33LkpdUGkWKDAyreFnfGQPSLAT18chU4hxt79RzTpWecUmjuM3vQ9XQh",
  "key12": "2LvCog9cCx7oN9x4vchBnmCENGdqAteRjtSUkEzLL1DJ19Z4b4gKJdK4BxukZV5RsSTZwVXkhjTN5S43ww6o9yFj",
  "key13": "2QwPh4Nh1kmLjfyjpzRc5BTFAHWwdYBL5bBam1a85BKrCYJwB3kTU6qMWj6XpVMVbN5ENUioaLXUsh2LcuipU61x",
  "key14": "5tG6sK8N27cw9phnNboHxLxFNbBBgAwjhSWNkTzVKYPsVrPH8HPc7dDH3XBZgS6WBmNjhSEEsbpZj4DungKpB6gD",
  "key15": "5M9Lp6bsZbtyhR1ZXUgbU2deVAptYT6f7Uw29pwHnsxdmJn9taXGw1ipjgSjTVh8HEKmAugRPDoBfcDMoZ2GgHCV",
  "key16": "2JhS2H332QrTh19dntmT6rQ6fEyLjLbHd2o8Gna3H3NsSBE2ZhMRd7hSXtR5euuirfA8TSFNzhZ2F2oSdjz89GDj",
  "key17": "WPriig2U3J6Pjc5XD6aw4MV7ebTu2kfCSi1d2jA6ds2LmBe1JnymvDg54fyZtGssUUNn8o4yPdhRg8iUUJH8xmL",
  "key18": "5esYiuRdEh7yvqnMJ94xqukY96WW9c7xYaYGHUnTQ4TNvidL61xYmyXQfUvmbt32pUmfw7zvvLMV8hW5ggzCiuhT",
  "key19": "qoEuoZvxFRPZ9t2geyCX8EvCfHu24G7qiwD1GZwUTr4y3kMRAxD2tTTGYpaPuAkcoifgUwqK7nParMKK29YuSr9",
  "key20": "5KwDJ2QzdQWuNGCnhkKxUD4rPSd6n2jJwVQhtZcfMs4YNAgaEbt2b3NzQr6JxccXcV3VJxRMeETMJXEyK7EjLW12",
  "key21": "fjE8P1f8X5RdKWSXdXySyF4Xqco4bkW3V5EXNWqaNpfiZQsZy2huV5U1wy5MTjMGpVqnpqfvg8eE5g8fXU9R5ii",
  "key22": "28nGqZ1LJXnV1sftSGEsHodnWr5wtiXDXoJWecoa5qvD56Do65XnMcwJnztjb6xVZhnNG26PyPetkWEZsr8TAKFp",
  "key23": "qivYZi1aTdqUE1agchCdKWnzoy7X7zn4ivciDtQDwk5Nzzybgzn9JBnFFq9RteXF5hmNJo6kbSUpg3rVVFBJTqG",
  "key24": "2NauxacnVjd5u7gDtcWew611ttEBiAkTbrsa3fpCSRLki5CQEAKJkH6jeHud9MS6MqZ9TJq25xj1xNrUJ7wNicyJ",
  "key25": "3zo6AamPU3Bj3YnqbDREW3bYuhHZWCxEqkAPTWhSPDcjm15YjHuRhb5qy7zL6wkJ2fr2SZRCjR6JgHbQgCUikydD",
  "key26": "2KW5E7dXmT4FowTqrnztqy79oRf8naEoWYjGgeMf4H4DdCNkJP6a92tXrrMiMTMSGJt986egkc9GxBxxaw5e3UNs",
  "key27": "QHn59hmfivyZ425b1JA4yEsW7QH1iDpiH7ftjLC5yJpuoCW95TtJ4KyYX83agcSN9Q3wrUbrxthixmaL4f6vHv5",
  "key28": "4zTQh52mhnQE89hbWZJfPtpvAbJWJr37PPVMyeumn75QtTGGY2LNvDvMUTXrGT7YnVMpgQeJ8MbEWdmaCkByZ319",
  "key29": "2j3bWuvetcuW7qtP1GjchhZCKDuvwX82YNYBgqYUuvf7H2B7tcZZuUZranQwpedyXohDdQQD58aLgzKhLrjEzY6H",
  "key30": "2YRJyaLoKvokPvaKE5tRj7atZ6n486vwXb8HDReiL2i2QzLD4hZf9nNm1qnBSweF1Nmt2kRN4x3d8aU9ejmfhJhm",
  "key31": "58WAadDFz2qt4wJKZYBK6A2B3BL8FHb583QWUMrkeoM3Khutt5gfBAi98qkReVvxXYcHZurdQBWe4d8fFNsLzTb8",
  "key32": "3jPZXZT1iSWGj5XMsEeagc8vwxjjbCSvvvd6XF5L3igF8kKDWTs9odinpMiiX64UQJ6PnxdHgCgSkqK5T2RimUdF",
  "key33": "5GzEaGpJyB313kp16bVepdeBnpDnK1pK1XKUPnJdWRo4115wBovay6Zk5vkgJP4iLYfYiFPMVZTo5sKroM7Kruhs",
  "key34": "5ezdQEyLAsf8xtqqUVAQrTTvicgB81dpaRo7bn4NVUVxKst8JwiSsWob4w8vonWWWdz8aqz2uQDij529At7dzHyy",
  "key35": "3A4NWP4PqHTfTjoRscK3NPfvHUVjGHn9V3GfSvRrm4ceNkMiZP5V46i8wvmQqXArGoun3SCyscs4dm3jX1p1QwJ6"
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
