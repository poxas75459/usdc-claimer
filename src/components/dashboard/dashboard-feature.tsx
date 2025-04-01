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
    "4q6SkBdUZArd7j7NdMkQkPtmid6KKsuB9L9ScrE4zWUASe2WmwvB4wZQdWork4g88ypXqjfd6Xn6HLggBmRFMuYi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ovQZ4TwibmsPAHcUdqhi3a4UShzXQsFTZDq6aMfSi41gnY7FjZhDZ14qsfLn4P6BeScsYo2M3cReXfqeaUp1Qfi",
  "key1": "4SHSrVpTMvJqJb4D9ckS9rDMjoy7wynM7VpBTzfLeVn9z4SWWfRiArjrs4EnEqyjbAxu3XEZ5opnp4AGWDAmRszy",
  "key2": "3CUHcNTzZ8612MX8jdXKMq4j3TyUv2M2M4NcaGNZiJuur3aCErSXkKppHK8dA4M2yv95kCZvNMoW7FLsDa63HhFn",
  "key3": "45xWQ72GCtaa3sCAthjHGh1qQUCMaS1TJkQV9BwZCbCt4s2SreXVDjd7xEVr7sLZcpkJY4yNvxQfNmM3Fqz59Fw4",
  "key4": "511yduehyVi2zAyru5x6UGhmeymg7Z3fNmoH49vAkBWMGBfPiZZBtVbhg4bhtFfvje6ZK4dDSwvtEMzrdsPiHhrN",
  "key5": "2bQGECxu6DNKfpY6xJHMW2HzhsrHpUbJtbaWRhQjSuw23hju7vrjHwDM7TmT5hAuU1cYnPB27kBXD6SYBR3E9Cng",
  "key6": "22jEP7xd9HA5NvomgvbiBcmPgLQNRDQaPqhaBwZXztMTvH7Y7eA3EkamwDp53CSYveNAwHqPEv2wyKgM784tuJ7k",
  "key7": "2Ea4zSL3aczeSN1EPPKDLVFar2f2u5Cm86FEc39nxmKTwPi1ykkiwkx8EzeQsMAZBJoAsMrc4LTMNDWiabuyRhfb",
  "key8": "3MP89h3A3LnpdrbvWSbL8MjB8NbhgYmbmD3xs9Qh4bBjm9jWyWf3P3FuYPpR6WdHrSvcwZaEQkWLfJCjKcQehRDV",
  "key9": "5tu8Cc5o4WDaAgToHJWT2TYEqextMguaRQ7ZvcErwkJaNZzLBWu9jrFYDst54WLZ6YYsyaPxuj5PCm1iQokGPkCw",
  "key10": "4M3QsDax6vG9eiMoZTshTFiiaFGhgQRQwsivyisfKG4ns1JvxU2xXxnQbzCbJHQpAyuVLVd8aedKZjZ5wD6RE6MK",
  "key11": "2p7Xp9TGDbDSPNYaaJ6GpKXs97QPM1cSMiHkCgsUi6fUoLREunzTY8tedF2sMDQs33nNRNpzdNVxPSpzLar6R3Di",
  "key12": "3tY82ymFKTf6dmkjaFhmhTbrGzRSu6kUSxB1KKUxZSkEvM5TbFZAvUxTwm8Qd4kX4H4qqagmfqFESyGkKNynttiP",
  "key13": "2Ntxm7P4NyPKV79ZDYyy6yPMeBH5YVrQ2LW4UasYVn1WpmiGpajZz2Kiap9WNseuHruHK2LSDaZMX7JDYEuH5JaZ",
  "key14": "eoNx7n9S94KwA1KktoQBZyBzdBXtb28hthbNnxLAxoL7GcxMT2AK5ZSAvxUTkcQyJG9vz5FWJ9chuL4GBaLTLp3",
  "key15": "4KRknkLFc1K7hWjehuEBsatrhc7oKnMNpwCKbrnGHZxsQ7SkJX4zPBWiEAKNGaCMg86DNpzFqUTBW89Yrc3Y3DiD",
  "key16": "3eznKxQVEkcXvCMaPFASPfD6zXaG5REw5EYXh9mEL1nbE2dXrG4NAKMWExgKnCm1diFFQESrSKjsksPvv83vjdHC",
  "key17": "3Z2ftiftDLHuTdm1h4GQvtnzgxu8SobZmG3HCsUxBGKSD2kavRnk4KmoJ87Kpsx5ejVXrtDLJRR9RFdVhZjZyTL5",
  "key18": "5udTPKjMHaCzNYbKJH4o1uNMy2hmoSSmz5YQuRRKQeqivi4fq3wtZB52BTcNtcVaKTygAy4dnYE9BKnLjUxQtTix",
  "key19": "wHWVPEruHUck6ThU23fE5Pg9UTEhUwhkMmbKs91q7Jq8Fpae73EU32tWGTYXwYmaVKsAgnNkZtthzBrsBUYEBVz",
  "key20": "msiWhqAEbRAS2BkvRXuPJ2fcB8YqkAmciYRRGRrBh54P44bbJCJXttKYDpKPdy4UePnVtQfqXQYuaRhRZzWKAhS",
  "key21": "5kbUvMyZY89YHKASxt6WFbuhR7P4Bq735YSp1fAB15JqkU9jWXQ66ETRR63JtcnEUvf5FL5WyNBVU3d6UkVZDHpx",
  "key22": "47tjUEhkwsmZGXH1cVATHEkEwvHE6yzSnbLgwcfccsPtWAoKXj9BDZ3uZiwDzMv2X4gNvo6iQMcpavBNSoinBUyz",
  "key23": "5JvAfTenX1vC7Tx9X8Aa5TXXzA5yLTfMRySLiLZMMMk6ZeVqXaJKWMqr4bJcq4BtWyzQUYvaf3XXvMD7vAxmK7Fp",
  "key24": "3FJxHkJyfYJkrRS1KkVPtvA7S6BFJ3KB1nPhfLkZYcQUbn8yjKZs6W1YXPypdaxa1szfVjyyPMw8mp6BMGh4mDyH",
  "key25": "53BDaEQsu6MA7dkfiRyrUzQhQvuKRtBgGYHwAjja7ZWcKT5g3Tp1XfGyg88EHQrRD2hkvC2RswcmkSxMtAikiZ89",
  "key26": "2vTzytPPqVpS38QfEkBYHnVM5GSdojAjjN4qzNxkDkaJpMc4eEEaZ3qVGQa8Yj8H2veDLWUngy3wKHE2AvHDWdFY",
  "key27": "Ma7B1x2YxPgi8C7X2jskYAyfTVr5MUpjxZzWoFXQfwDNyAzG2HuYedFjqR6RbtggvDyC4m4pM5q569LhcKvGRXr",
  "key28": "664QUBxuYtpLbeDxFzgoWr1oLFhnPbESMZnQCHWKYHMBu7BoWx52v7zk25zVji473hNFNxDzE3iCozqfoehgBubF",
  "key29": "4GPGbJ5KUUcenyfAYxXmAzzTTZiow5GZVnnN4pVJReUZTP8p3175RJF3xWPNjgnMkcQB7JGTGtXEFLJYucgimSzZ",
  "key30": "4Sm15hcy14c6Eayy4qRZ6a1NMQVKvpo632kTamvSASZWQZyg8R1n3H6nqiAViBKEuMkCZJ7GWnF9FMsCJ9z1prqc",
  "key31": "32p8CD9dBDqPKrUziL4NwyZSE99h82qtJLPYzLKePzT7q4M2241Y1CxGQawf4Qa6cS8123x1WgBvhQuSCqtwycca",
  "key32": "58kybVs393fXHxxrRAMVraux6R9cQaMVqHeNR7RxJ67CkUs5DGsjLJ9Z3wqvE86m4F9kQMj5Fx8vYfZ2kVmjVzdL",
  "key33": "51JSC1EavfsqdZKiy1YzFo8zJxj8zAjbScaLzFYX25rKvbwhABtz4Kb2wX2XDx9ubvuZoM5SXm4PjHbE2bx9a1Cw",
  "key34": "58xfnoHETbA79Lckj7K58m12Mioz4BgJHTkfW7MFhNhjDKZ5GxXm4pDyhJDKazBmGKgTcnCqTyNhb4BRaEKYqVDm",
  "key35": "3szHE6ZmfKuRTUm3e3ZJrwiZsKavrb5EvePv6PfDg4jEwACwB8CHyvn4gFkcSVGaJT8nmBSNY1RHiCmuKPTzp7iE",
  "key36": "q93aVY6q5QqR1tGzmMifcvzZNCDfU8N49C5mDxeVjsGUPbTnih2Hf3Gos9tWBojGM2Ys9Qcbyggt9swh1tpP7Ch",
  "key37": "YNpQi3KR4SLgzYxzipYEBdB3MwM97rDTFKKCHfPoe5Etwhj2GTL1DnNZxjZFHvozYsAsHJNyyeNFoBEfNKWxTKk",
  "key38": "3uW3D7FVAiQEXLdf5e3BWoJrsZUr3Sq4i1eX7YAAJqWe599Jcor9PRMsjyn478cjMaYfWSNsyngMPc9rjUybFjpr",
  "key39": "RUBqTXjT5JPKxpwDZUoBmVXaCcS8zwtTmQMMwP6p52k9kK1CVCYd3CYJtDxad1zgLnBKYqhNu8DAPXqxxNGozJg",
  "key40": "24fjwB8afUHbFhnF9WMav78ceDAN97rr63QTTevjdiCLVx4x8Ey162x9PTWnzhhHhdX8A5tAnZUKqgKmjn54pfky",
  "key41": "6158k8qQi5p76L1q17jLp8tVDRQQirVgByQpLynpWAuyr1v8JK3yoqgpqTt9o6BjPNxms6tphoDMdY2AQrneAPD6",
  "key42": "24GU2yPivDmJ2M2aMbCpAiGu5VuacoiJL3XQTr5smWM2GCo8LNx6VHmc8Zcosnk1Hrqjb9Tmsc7mMaC1SC8mSwTL",
  "key43": "2S2LW5iBevxuS38t6w3JsPy92BGt5ka9VUQCNiFFB5sjfdtp3BwxqceVnu9EXupJxCJ4bXWPb4NgVQWemtxVyodU"
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
