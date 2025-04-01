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
    "2KugMMumVieAPHcBEdB2R15TY1Y18AFoqoYwyBDMSzk4LghmUdEa23pXtcRgfafEySjZk8t71agp4zEeWuAD8WNo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uRBvpGNqFaahgasJK5sPcZnZtiqyyDAn34VaqAqMezJcKP45Te9GaWWeJ61wUWFj2R4uvrwGK6E5y9TTHaoSCee",
  "key1": "3rFUGQYEVrCHNK7rrEkqWxtPmgGM3J1oHc9CGtk5N5wqfYnWFa3Ern3umadsWdLRBfVtSvJfHYKFyDLRXXUKttQ7",
  "key2": "3VJUibc21KLnaXHDtsigmgUF8Nc12wsqRpmfAKYbvHYDQFaNKuLRDL25n5mN17bZxu7nf7XkEtcMThbSUpJ8zm3z",
  "key3": "3NJRWAaPzobwEQ8o9Ee2QNs8k7Sm2DjWz6xfo6y6Cv18WnG619UFRMcxqusHSTceHmA5KoMGpTmWWEQnfSNpw9NG",
  "key4": "2CAmwEdpAZHFQGb4cX3DdS9G3kfTWez3pKMwVTsgk3ZCaSaTLyCCJiRDxeRqwwgB7F1hJkhaBiHLup7cqHE6NB18",
  "key5": "2MhiTR54QDmsVYre8HajAM45tWdUhp4JYhsbMyZRLvTdPvpAXdAv7qrt74RnSgms7raftr4iQj8zLJ9ErmugLSmM",
  "key6": "2nxXHjyhrp4hTK6Y1rFw6As648EB5m58k3Z7sbWrhc7Z7k4jPGAzS1Nk8Six5vy7HZA5S12jzBKfz6XmEcre1M8L",
  "key7": "4pQvbVaLTUcaTMhTAK42EkTtkrhtBAjci9nbCgDpBF2E6b8ZGvMrJJHhEL18srSWvHxwydTP4M4n9sJ2UZog897q",
  "key8": "3pYZsMacFa4CX7qt9VRw3hiQJ5Vg3RZVbYofRceaZMG5PTHJPK7xsg6HGjT9DqtXL1eHJ1TPtQx1eXWDt9xxHXXZ",
  "key9": "4qcYtZnuv57zss3pkTAgVLBuoogKhF89qty5JcHEmEx19UACXXniVuqvQ1aHKkhXwnSDBP7U2rjYwfNcqesA2LXn",
  "key10": "5RYQUbXy3naUZ85iAbrdYatLAA5VwquEh7AT9vRArGrHEvFjTrQGE65WXZif7iR88GE1E63gmeXpW6jHyXh7TAyk",
  "key11": "873dbyWHv16PgTUkBnaB7xQYaRegzV81RGdqg5cTVsJxu5AFbTJHP3zqFgPmGEEoSBy3LYRY2URfofALSaJ9JVX",
  "key12": "3tjFjmBCgSzGGdUQ7Esrq3upMde4rFD5V1Xk2ZHQcAA1PV625FjQDh9TxEu1hnD14j1W6b6dkLGAvy4qcMrrjftR",
  "key13": "3AUXbPTHSiCh5n2LuVAWim45zaLzMbKB7ZEFPAbrscvwY13TqH2FR5gvkzMKRTQhmA2HKzXjwsnimaRgVVb4PFMv",
  "key14": "61PKPbyLSQDup98xk9JrPYTUQxbm9tQp5R9xAgNRaDJ6Abtrq482QfFSe3Ry7t1hG7pJuLiAXawLgBA4zg5C8s7q",
  "key15": "4JYMV4V8GL535Pm72mckCN3ByPY6ZtAs5brhkNcZwg8EFiqSMdK9GMipDUAyMBUNC81We3aCeXvxH8RrDkNtW35r",
  "key16": "h5VQxByeponn7QzWRBiXNhZJQAQquMQqTEgwSphE9yMaVckbYWGw4KtA1gjZAvDZgCwSKwJroXPaiwbBtv1Hyub",
  "key17": "4Vcx8chUQcuFbhKCcjrPqgM1fqTmt3CVhbfMBKTz4gdMtJhcUti4BcHWxKStwwGbqsWetF4GA8LvJ3n4jKte3pQg",
  "key18": "RAhVHdukzKb1CvgQUKBf3CF8i4THzzHz8qzwsqPuFVFML6oahHgHLtLobnEjYiJrSgYpc1ibrt1PjGNGkTEuLmL",
  "key19": "GLT8Gsxr7erUTXpWYLfrgZPkwjWUVpZfXYhJuA9SuVSXrUz4vgLDoxdNvzEpjjvMju1EBR1uwWSpWrfizQMe1Cb",
  "key20": "5xak58wSB3ZqzWh6r7SDvR2kQm28rbhYSfqvPRfrmTP3aBsAXsL9wpBjhKpfdCHAHSx6WC9QoDA26b6ss9bQQcG1",
  "key21": "385a4zAdfDdW7KtGyoDKECPbeWhBYSUaViZ6jecPZJzGnHYrG92pGroDmnWVBfeMh8xScEnWw3ze53WFNkWWgHEz",
  "key22": "5Ne6hWTADoQzqdDpSYZiW7rLxBGegtoAsusGzxfbK6THdiueqDWJdpfft1batPSesG5ZpKm1LsFoA7EL7FdP9KZ3",
  "key23": "wxyaY5qbn5RFk3rN7f2NtyrowCkP6TYUS3yUyWqnjNkxH6GVKcMY3FQ6W7ooWLC4D6ey2dxx5YdLSGzru3Yuga8",
  "key24": "3GDERPref1sdGyuFRXGqfEknnFecrwz25166MZoJU6WHUiii949cArdE2PG7WKFjeZeKECaVryCUgm2ufqLRZDPU",
  "key25": "3Um1RkCb73njpixGYy4Ue3UiYonqAjHdMmp94kDX8p7jAS3ibyQLWmGDc9jT3h1Vn5D2NRZyz41pBJ6M9v9MqfSc",
  "key26": "24sqa4h8ef7fQvUJtQctwnxg5oKVithFyishSHQjPAz9o21UCYy1zFtu2biR91vd2ZCdQaa2N98CwPmfrm2MMc7E",
  "key27": "3v673pqsooRFvdSKuxi13DZTni3U1CLXXCx4gqdC4hEyFxU8bpJNdLu7ppCbB1bqNnJPah57wQ5uBDteybkL7dqG",
  "key28": "xdr43ER3rxrF8h9VDYJRZyP3rbESqYoGhhQdacF7LZsLMQFwQm586ekgpxzhEKAfiikXUo1edhWY7aYLSbo5HBw",
  "key29": "azvFVCjJi27W6JXcQ1gALsP9tZX87VMwjsNefGgXPtpqY6FttwHxMfh7n9jDE9jn8of3RsqcmTynXijobrPV2jJ",
  "key30": "22yz1qZi2ojrQ4drv74ih4XtAFKBrn35cYS2hjhvKuTQa6U4M7BCCba3DMTWAEsHnf2tZA7xUnomJpGHwVLqpyjT",
  "key31": "5vZ5fv5f5TEb8WvvgbhG4DWMd5acDVYV8qWueqXJ6DSnMd2ZfKj7cFKzGw8tnxyijXfTwVVcxzdw5gm5EsWrz9JE",
  "key32": "SowQdyt8WT3GQuhoGC221tZRzg515ZePEHUw8tbDZnh7nSi2fTFt98WKkvfpU7ynPUXSyk8SdK5bzgh2FjVkVXh",
  "key33": "ULEAH63sb5AVBWBiBn3wNjdYiVgGFkoeRn14QCcMbMn4LBbyniZPggSHBNFEK64NDJAb5uBGmaWRisRS15JDkiX"
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
