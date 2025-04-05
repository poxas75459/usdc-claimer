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
    "3JMBvjMAF5uCySpyRpWeeM2e8jiJUXqcHDFqnmNDN7RUWT3jTzvWE1gCqyzpQ4FoZsB71VuRHqGwFSWsL29Ax4vo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VoPhzovYvyvSp8C5kf2oxduw7NqbTWETpPMWfKt7e9Wbx17iWyShSmEVE1e9GiVqKEW7mFhXdZt8oA5sMRcT8G3",
  "key1": "AQKGGNQPJuRDFowqqh5aapzeAzgWQzwFEg5Nj91wbZZtwtndmDqTbuwbWCZRMZzs1LLF4ZPNsFw66Hp9cbThpjq",
  "key2": "5dMffTuVtSQcrAJUMPjE2aX8KWDnuGP45Mq6fHFHPaaWiyJHDQAA7vE2qKptZAA1yZEgFd5dT5k2Z2WDUPa4npNJ",
  "key3": "5WSTmJaPoUxGaAEVcunCL5G8cGrV2GH3nr4hUsyEvkV19CEsbxDCfHsjHyFcWDwc2tRKDMjhRpT1yb12hst33D2G",
  "key4": "5wZ7aJCZpDPq74SNqL5VwR5YNa27U2ggo4GVB6AftdYf8fEh7XmH4F81AEXztJqaSvyQ7k9C8XTFx94Tgj1ePAwn",
  "key5": "3iXtXunW5TD6XKyaV5rAsuMEq2DQiAYh37G7MLdi5dzNX9Nz1kVoNc43wbFmJc2SQoJ6poXdKMZtkvm5W2LNFvfY",
  "key6": "4SECMJxdTUbuMDde1Swdu43YrQeTCRR2SkM3rfEmCY7jZ4kLiNR8bZXQXYav9VxECxxmf8tTznwTbyKWW9ZVFMwL",
  "key7": "67GNg4X82yNw3dx9DWTGMnmhPPYsTkGZkpkWotPj3RSEpSaSVSJHC3jYHYMMNEtAWxbcsk8rNRwtFXaM5dSjvJ9t",
  "key8": "4zryDhfrnfj1ayuYjWJjFcvj4uHtDZ7gwVNEXEDd89ktkXNEmK7rivNPcXVh8Wo9MHG1ySKR235h22qwkML4u7sZ",
  "key9": "U1e8G58ksEAGhQ4upASszfXw3bnmNWQmyqZJ19v8VQxyK7JYtzRUGxx9vm5fRjpsN72U2NhqBZcPTbwQZ9mYQxn",
  "key10": "4z1Y5HZAgh9g1MEHzuXSt9taigRZSot3gsVBqF9beAwHvuTNzdYUv21Tn8C63jWXPLrCRjqjkFxCLGqctrkbwPoG",
  "key11": "2dVrWLutBREcoLrNKZuEwmumeX25GTcAUBJsw5uu6qTgkm7SwMmMxt4zFH76TSV62QJ87oDQ94SCGWr8TyrVdbpy",
  "key12": "27JnSEUyP3ehGsfp9H9RKMYmnbkQbro5HiEjCuwbzYDzrKjDVHD9V91zVPziC2r6DxuoUsretZa437QmNBbTxhJZ",
  "key13": "wi9DcaCthhoxpj5Thy8hHvHvYCimuCYAJwJeV8KN7ZntxyK2yFe5XN8jqaT1j7idfiKFCXdBBsb5Vifrw1jjkdt",
  "key14": "yHMdSK4iL6Hr8zy2csmcEp5vidD6Cjx6PTRznuiugAwzbwrtnyP9MHfk6S5Uh3JeT4NAonoFHncbSBAmPS8R6hN",
  "key15": "5Dmzp1FKTjwkM55CnVJioQxitcS6N8CUDshskno5e66rjgkRmqvwCBFrpChRJDEPVsaErxGQsquBN7EqjhDMzsRT",
  "key16": "c2tAwk75zvPQqtBkM475Pa6e2YVzdmRxT1rWEeLkmq5KJT4VcY5gQvGuUzNBU4ZbGsQNbRBUroJ5L6Tcika2TXJ",
  "key17": "5QVXnSCvi8nLco1A8bB643sD1yWnitcFXQpxggd4M72m7E79KGc33XeNbJL7tt5Soc6kMu3ytnxvNTg9matQ6TW9",
  "key18": "5uZPnM84gsmGWPDWMQK2DjURVbRWWGTuz4DDn58ozLYYpWAD8G27RXnwi2vnBdJ6h727mefQwEzK27UR6QFHdXT4",
  "key19": "WJzZze8JirrtgdSSQ2Qswzm3bk4KAMHdKj7Kaghb3oPqfWs1JJ5sw42Kw26NZQ2RB5fVdHuw2Xn4bLziSmQ9dcv",
  "key20": "4JjHyiScXCfffWePvUdvk8xdLXwiPKz2Vs5J7ZToUVEtwcejLVjxFPdVs1mXhfSu17WZx6W2Zk6H8AgNN4D3K4zX",
  "key21": "3VZkmjemi1t3ZBRjEEg4UdyMTwWSAsGkzfmfghaZJ333FczYdxRXtkZe9UWwJWZr5dtAmEqyvd1gss5fJwGmEquW",
  "key22": "5jChfu6zbEWJZqQNYuEY6j4fVQyaUob6YU3ei7gFULZX3qu9NymQ63b5Ftz1cEyuHJZN7DLGpkgSyTAM5C9qzian",
  "key23": "3YmJNFFStEfL286F4Z33NTweX6VG28ZJd1TwKLiv6fP1smwmsWjxLH7Mcgn1qn7jZ41zCMao1FTuzVWncwnNQg3A",
  "key24": "4dpjD1ndb59dPbxJQ3xBeC7LfUxTEiS9zCNQNaBQtmVw9xwYYUtrHRY2o1RgC2cGsHkF7JZiymsnoXXHgwvsrs4T",
  "key25": "43qG2KBLyboUbqhswjPw9WTDHdDF7Sg2oGVwazyQXaY5e6xdw5Ph6HFt6EyP3rQpyeGanwrVBqSfyNPa9Xih3mtV",
  "key26": "3UDcDgvusT8UFYVcUa3f33gVsumP763ExWSRDzVcVJxot26oEdeQPLBZBfepGVLjejTFnKiTSKonjr34G8FGqZTH",
  "key27": "2VwBGkWsCbjpGbHVDGnMGLtTqjUMmZZJCr9384zqUwaCD5E7AA3hvTyoAKeZraYPpEUeEpLXopMTWCjWnNczex8z",
  "key28": "5urpF8dz3Qufushp5Pm2qkhS5SdBZzknvwT1MiRLJY861BDEtMKspSw8zyBn8y98uJAGJoWjC3egvCbCkQTnXXC2",
  "key29": "pAx5Sx8LUktkcuqVgwDr1jwPfSEnmZLYNmak77EgkpVXoUpK6JMDNgPPznL56c9D5RhCohjj9Pn8wbDtb7m8wqY",
  "key30": "2Hj6e4mdQSPwM7NzxiGG6ixB1Csa8jAeQ25Kx9tEwwdSnZbvn2ohnJtD4LZ4tQFHcw1DD93DkQAiv4wAVShbHWWo",
  "key31": "31m29nayLYGzVqZfQzxkrqZQBstMR4neabRSR3R3QyaPa942PWmnRCZ18JDFggbDDFojRWZEf3ztVwF4FjAGdF6z",
  "key32": "XLY3uoFJeaDeM5R4qifbH3bmDqDkaKq73RwaHv1fWq6U9a6ABL8USdK9s1G35RLurFzUp3NS7rVdfx4vKCofjUr",
  "key33": "4TGrQbraeVdziPFQwZoYFTGtnbgedJ4vEnsocRDgdQ7x4VaUR54LKyeFru3TjPtsSNhpP23MmgwAEKcgyyY8JiPa",
  "key34": "324jHKgegLVK1pxdsScVRafY33fkVxR9wfGF1k86V89BvQTkfWx3Mp6aoEjQaLVFhcqZVGZeQfz3o2jSyyxVt98g",
  "key35": "4cqQLA1THySxzpL9rNUh3yLra4G7qeBMVjhYbqUWNj9LyY3gmzGPqyjzeQhCVESGCnvF6bpeuPX9LReJqf2PesDa",
  "key36": "64GYb8KazzW1uq4wvMmQ8vciJSQ4Cmq7LRgfCUkpGd8jEQm12UQ8gmkMXiYwbA5bJ7dJzFEBRhSQgNoyfRfDKfvm",
  "key37": "3xGo4cjg2qhe9QMpBsinYRL6BotyqrN7sXV5S7WsTLgGZzyPkWgSDJpPLPed86Me19vuiKJrcMVPR4QWs1jsJHZY",
  "key38": "25FWUTyNC5kRcuvPpWt8VSjjXcYZQtKdHiWhvqPe7NmBU97FH9JZL2EWuHmXpURVKWucCRLbQrGJmwwH5Docd7w9",
  "key39": "3v4K5B6yHzB3srEtgJLgndxt6L7dNzJpPagDvHafGqMvEg2kXT6CRjtviwWJnX5bYq7rZtCTvVwVaKkQf3kLBjf",
  "key40": "2syyFeFWMia1mzygnjTZ5oc7gVjAhnvq3oToSdY1as2ZXLQ6UFtiQqVwYsVLiRNmShAbvWis4Fy3JKH9UZD9w67H",
  "key41": "3wVwn9d4S7cG2Vbsve74rchCNxACTb9vigkwLaUiwjVpybVrQx9dohTnU5zmmxPvPXHsm8Tn3i8AcnyMkffcHmLo",
  "key42": "63xEqGxgCkyrwUeMJ2JbRnbzkU7NbH8UshZJRzebaPdMxcF9UYCR4KH4HKXA8sS3JLJaSim7XLmDU3ZzBQdavtmv"
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
