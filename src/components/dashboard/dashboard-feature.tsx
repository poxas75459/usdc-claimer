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
    "2Ss9HkqFVNRurdepXiuut4y65jmWdkbHHHa427SvbqCVzvHPU2qAkw5yPa4g4X46cpxN9UZEyeXeJmUvtR38MdsT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BoxAHvdUVPwW1uS9fEzeX9NAjGW4PNwUt7FcY89vVD3pcTFUUJiUDhP4a4fUQ2ScKnzp7EQnvzAX1yfBb92y9NT",
  "key1": "3YWsAS5omZxeBsw4vY8rLhb1BdicgEvQxG6Ud6htWajHaX64SM4bAC2qCdEm3DrbnqVC46xJtPByxPpzjcHBfuJf",
  "key2": "4zxNvYFq1QjLyBQ5ZWmcG8JVv9LTRsSuNNzMydW2kytgX8i95aydZRNRFRMjTsVL7ypJgYTPbZhfeZSY2QENLaPH",
  "key3": "2M3vgzst4XudwAiNeTyKj1qH3Um38joBemSguFsaiCqtfAYPm17GN5HFgzttS7EPrpF7UsyJimEXFTiP6teHwHxm",
  "key4": "4MHSJqQCzaKsX5fZtf3rnfJwr25QBEmKrXcc9RXQ9de1Pg8JY2AaKzKFFJSbyti6ju1ZjrZo7bFL3nt5EUdQC8YK",
  "key5": "3GL3mrALBbkhQaYBN8McQWVgB2iUJShd4B7KZXmETa4wVSEZN7LVJvu5WjPK4D5A4nrSSbn3QyMrKtyf8Zw7AHwX",
  "key6": "3UHqXRxUdXvjt1u8F9iJmfd8h14smUn5sMps1KnTC76Agh4FZL7pm4Ny11TZp437FPQf1px8r9uPCkJJZk6vGgDB",
  "key7": "9VQiwUeks28qEEFoiZDfbT8BJzntn2vTqGUMLdF5RWbu9DekdK6hENds1WJ1rUgzRyp7h56mzXfj7pWAADRryNo",
  "key8": "4oLTcrGdJUvCCoVAq8J8Yfpe5CDcPZDWXqQL54SKANV15jBumDrZTzonNhaYY8okXoRnumNfbxvAhBz526CyxKrR",
  "key9": "2omi5krKy8fHTGUoLMQjin9gWrH2ef7yADRJGXSxXmmvycWfwjUEybjLz5f7emxajVUYSdpXpghfzAdbYjS5S1Rs",
  "key10": "2bajjair7o4RxHP8qNjBG893iQsswMHvaEgyneVuCsWeKRyAza5oqqoyCgJXNKmcLrG1pcmkPx8ovdqwo6yKMXPw",
  "key11": "3rKYxPf2x7ixEH5B798329TuorcrQyKJn8z8tqodorbPCtVnCeHMK2p6TBQLK8UFKcB2FwSGJmNLESYXcqRtTxsb",
  "key12": "2rqfPJ8LGtGUcfZAbM8PFNoBv1geeQCB78N9Mh51wabRREuxSLCbK2JEfp8LM2SdivAtNB7Z1GC4UmczQLZRaDVX",
  "key13": "5KPe5S7mPqyfsKH8kUaHjY91kd2ujcFVoZuApS9Kn3Y7UatZUPyQRZAW3r4oTB1LEfSFR4YgBXVPQQPnuArawtgm",
  "key14": "2LuDc2RvL1ErhFxVx8ydTDyWYp8btWCWDRUJMW84Svnutp8mBMEtbcxUo9bGi1CMinjaozVnbUh3j6puf6YbYDvZ",
  "key15": "2exDqsdpS65UaEf8rdvtZP6SKsxP3DngMRUw8NY98Djnfh3KvN4oKtgqgELnnSZE93cbcycBVciJ7A2hguAXfqvq",
  "key16": "5yfecVrZdpMXRnwpEXDhNVgzFjzYBeZb7TD9tbqVsr3ZFWKJCZbhuFvqvhXpjkXJFhVbPE66Q7YfDKjQy3DmEF6h",
  "key17": "5BbQoPp2Atjcaeb8HMEwALV8cHQNTwzc8gcSNaNvzYqy8PKrQag4Hssgw1RFkzPFaxwCFsFkUkc2ZNZ4UyZqxYbG",
  "key18": "653PA1bcAytDjvnUAaFQ5ADjbC38mDX3EjnmEjdB2pJkJwvNPsg4An9DPCaZg3VFv3YE1EN2sY8UGfSAJFZJ2D3Q",
  "key19": "3URoDMweVBHjbmsZYpfmAwKPyAfNzEWFq34kUZvcLcnSaojf1jVQ6hRqDakhjLu78ptZ7FmQVsmUwWgEPUFT4Bkh",
  "key20": "4erBns3MDVNLS3UPgiboadsz7rkAJhbZshJP6cSCtjqA9zR4YBZ5YRtVg6n9AoKKPGS5pnSi9pLtghwCRukFsMgK",
  "key21": "exHKDD4Fgbb66h79ZSEB6bFYjfizNgZ8s8EhdoR1UAFnCKzgoqSdL8HBQ3E3hQtGyfsYYhZnoSPJYLkkWN6Hnsz",
  "key22": "3ryfLtmNAeHtBhokSS1i2huA9rCZRN1ttHgZ2K9ewqzsVMRreRqM9K5oJSCqr7wY8LX3wpr8aLAA7eorNbJL6zz5",
  "key23": "5MvUbDiSTFzvXtWLTy1hSbMDbWRgaUvtfWrXVS8h1e9av4C4D873Q74pPMkNUsatvC4T9QcWBKQYrSWKAPKchoVd",
  "key24": "4ys6Bbs7yoeJKwNrFvXi6PkivnjT3TEL84y4N2t64dpgWrtdPSuY87oK9XjxfsJmUGX4xPCQThgbxKPPWuBB7DmH",
  "key25": "QmCTQ9kXU9orV8F9soUZWyYrrdyURcf3vdEKL7ZUDWbEsM6xZXHHmTqqNkiwCTvi5Mks6mLttk5puEUcR57Ei4t",
  "key26": "3UiwaAKs3KnZtKk4mvNrGM5Yf54G71cs7nQE4bSBhPMLegF1iEEFmPkHs82NPGvH8huVXMoCxhSYjiWfMq123r2h",
  "key27": "3zyiqYoFwakLpiqoJrEMZMsjLHn8qdGLLmLP62awD4v2H1QCimG85sgLzAeeHJMkr1v77ebyXUPgyXDpB9fcjNcT",
  "key28": "3XXk3qL2VwZ85yehP7wpiGiai8pgnrYPPWsqyUnrXnsnpkMDENfDstxfjePUrKBDpnJ8NZVDzV9LGKnbmbqgAsTc",
  "key29": "3E7ASEFeMd9wd2EqUbyFM9uCPSQ4YdUXEJABruvBMGbNUjzGSm3me52EcqyAyM7LMde6WuQCtUiSPKCzXDugpo12",
  "key30": "362UVJAmRZ68vf1qogqfXLmRAro2HMxz8KLtzqghEZJPtfaNyogtNXmm4WD2HWint8K9EGb3xo12m1ZGbzWQWygF",
  "key31": "pXY9TNXC3K5FBHjpbi21fWAM3LWP8sTDQDskqv9rTrwEAabqqKqwrrquXQJ43RKqzy6M1Kzc9r2eUbnxtb8dYKi",
  "key32": "4CwQdWFERgm9oRhsnnHq3x3QGDK3vsRwHaRp77HWEyVunNSzZbYTFwVk45UVc84AegYCdFr9xTvXMjcjX6QuHuxw",
  "key33": "5F4isUd7LdnS2aFBh7nWg328Tz7bHiNcXvox7cFkAEGVr7VumNM2NBcsLCDkF29z8iXVoEXTCAyvLD698jChcyv",
  "key34": "66JEvpT4pVmE4UR9GtgYq8b7e2CaPDBcSDVYxc3W8kbni1J3NtemKZGShs5TYdtM1WTbpLYg5ahsZPvBv2jE5bT3",
  "key35": "zXwjqHXHCCAg6gxbNJkgbJGT9eCnPutQkB14N4wSktTbrcWT7iYH9YTP3HL8FjuT5n3j4ZeTzsbHQ4WPeXaLfhQ",
  "key36": "4yKxm7zJPSST2fpiRerj9V1aVCzZPtAJzTN4epQpB2jJafZYBv315rEzK3pEzcvGxqaEBJ9GngNjo7LSZt9139gN",
  "key37": "346NGAuDrdQpeenxvG2KUAfs4SU3sXiYDJxPcZLNQVspWV3Emee6tjwWN69rfZV1SZevU5aSgA5uu2DFUq8Eqt61",
  "key38": "35Tjr1UDu2jCRuFZhia31weTZNGBmEVN8bhemZf8kLeCacux7D5BQgy9zyb66rtd8g9xmfK7h1pgpsiDkngPc7K2",
  "key39": "66wymf8Sv2idu8Q1Gvph9dgHJkKMKr7QrrLR3jNMDJdkJJTfoRzRWh2oeAUkvyMEMLeTkhBdgdPidrEPpHEoGpTE",
  "key40": "xRrJCZ4z1RcWuvUp9vUEC5WE3CxGM2EjNqoPd2oPgFpxuh72EeTgYjWMKYPex71LtP3XYBBwtZytqK8X7TFVF2P",
  "key41": "tTfhhtSef1GvMqvuiNHoxgXYsXP5MkvFk5vBTKpd9porU2phxS4iYXCS2sudbccGL7gDyU8njQBxdfKro6wowdz",
  "key42": "62QbEDQ9AJibCU7dnqwdJGM4PkQx5gtaUeChrTdsjmvD4w9zUoUigA35bVfQ7nbM8E1VPHBRtZdtHNhgbtuhoCy8",
  "key43": "4onCa5o6V4BzqmeqrMnWU8Yw6dP9YfJ18KKDCoV8HntSrT9UwaCa6HCJrSb5NVvD1JqMfB3SDYrYSmDxRaGLKq3B",
  "key44": "4ArBMgdgdnL98s2uKkNBc9u3wsW7iQ29ucgCe4U5X84A89HiTcUYJhEwAZXCh8yf4J39hawxSSfAHG1BbKG9RgJM",
  "key45": "3VgmpVfT6pU9tCMcbquato5rrdZFAkD5rki6cap8uz8vvXjrN9aqxT1jijYnSgJFAAqxhEtAyLheHtV85J7FCdMG",
  "key46": "MoAP72mC5QrBSW1LREi9bWne7dR4cyPpjWoMFr3rEFqjiXVgwbB9RCDcSMDXJpiBHGYrMcsWNwT3pFrKMJiEX8z",
  "key47": "5AotDQEKskjNTfBxhKSycP8oW41fH4KE6HuZRUTVzqwQicPyxZXwpZqDsubixiHpsMqsdwwNnnBezLnaoSkHHzP9"
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
