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
    "3AjDfN11znfmyogRvayxQKfcaEfBv8xM5my6WruTPPPT5t9XAXDx7uexQxbbB6r9sxwhjva2XenKYGhMNwb9WeWy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5khDVtfMbxne8heCWc48MXotMeN7eiVCsSNsWb5ZcgwCeVDpSR6dE4w4peKSYijiZ1A2rtX5gYZBV5K1wNDBxW6x",
  "key1": "3rrrCTDW7pb4MsR3pSwC8tqufUHs64pE7r1puGnGo5f8yqVCxJT8y3r9zwA7LyBgXzxgz1FL5WH3V1oVyx48gkYC",
  "key2": "39xqdaxJF9dES7ZTt1z4AfmkaATp4nikU4WZaPJAHhbaMntrGQfNZSAFnLBQHpgBAZNUXFyV2SFS2n9zrNRL8WfR",
  "key3": "4JNKNeHjXV8og4yvacq7yaCddMnGEcXw7MFe3JRX2NREyLh2jJ73py59nepx9PgqY4nCEdJiDTKfseSnKoveGAAF",
  "key4": "2mXUYaZj2uFeMfwngtjhU6o7Py8cyGMrzD3hgmnbV22oFC9MyaWTrXCDPLmEfdm94S5KXoFQDeA4NgzAMR6rWxBm",
  "key5": "5oYdBUu7xmeUN4viX5m5tsWzjUmwyoAhdmo3DbAqEgjtMTCYa1kY9LoDMTZBtAHpfo96ffDwNSqK3meYnWPzYdzw",
  "key6": "4Fd8isMTUKF8QCMW3RSsiFVMTRABmmEqRzUmM4s1QSa54BVnMnadgS5Fr1T1j93mceNp3zGfhzxofuPNdRsihMWC",
  "key7": "3cvABRVpZz8U3ghfY9w1wqquYVEULZkTRYNQv2amuN9fVmmGMTxhxK2feS319x2GtV8Jwsfq3a4SEhLG66KETdY4",
  "key8": "6XijsaNRwa6rRorDKfuPffPJfd9FZRKe9ScdMTR63ckxhbL46f2bkHTc72DnaXDPkinNYhpRceqMTBdBhXbab5c",
  "key9": "2QNq48NGDPftCQ76EZYDxTLK9tA3teX43gR58cryHrRXHznsHREnNdSYPaErKur5bL3J4eFcAyXPeQa3Pj2Ppd1p",
  "key10": "2U66x8D495XJBxr1Ny9uKBiNymbNeYBQBBfkAk9AjGUfzTbHqEzXqUmCkX5nSQTg3WwRWb3xhGatSjUjsBM49jW9",
  "key11": "tNbaZE2JMHyrotCGwb2ENCzeKxpA6dXX3eoa1idBCckk7s2Cnaz51BLBDBuiFVjcivu8P3SMpqmujBVUPqeW31J",
  "key12": "4Pgvkdf88KvvvKvRyZZeBqJN28bgwuhv7QPVhezUNUgBZ8CJME2ioFf7AshyPRJ3rzR2vZHX61KxvLWqQzEx2Br6",
  "key13": "2aEiVcqZZhKhT3qD5s8oWFFcu8gmRBrXSCe9CfHhcg4c8uCNa5ve7XmetJfSTHbat1LjcHtWq67HwavJtaUQd7FX",
  "key14": "4jMiPicnX17Pr4S3BWuPyMbCPENNxGaqAoquDax8s1dEtRvCuhx3yHba8qZLv7TH524ZgsXe5XFrJxh1bY9MKFMW",
  "key15": "4Xfuq7fTETtnw7FKhq4g5aYSfx3sdAB9vwWMhQYrxw9TywWkqrwEM8tYZh2tgrctxdKeamxEm4hMSoeRjGVH16xn",
  "key16": "4CumoEy7vzVRte81cDf7A9meYwmPtv5qhQuvfSTiz3vWq7iBNEYsEpYNaxwotQZVFtRGvbQhDnt7yyaa5tJyvMr3",
  "key17": "4THVrV6ApbVBkJd5Wu25meXUALRj4SoXUDqGiZLJ4RScgC5b4gRvzBAsWxZAMydZtPzZwdLeFBCEEqShUJmBk2f7",
  "key18": "3cbzMqnxJkLuvWbrWiX49oLJZ5LnutpzUxVJeRDVadq9RkbaHvu9LF7E2XYU7gj6VZXQBxgCHjRdzF8u3iK7ysJ9",
  "key19": "QLpFV9XzyYZJreRUGHNgnTQtXr6uG2wd4iUsTg2DnvkUXVES335VET5BaHuszhjdE9tEpjuajFQnRTUqct1wr2b",
  "key20": "3ryEAQvRKWSiVhburFFJwQz6MFTjdTNBso53vmyPivy8yR9KTfkUDDFdW31faXt61UsqSpc2aXKfsDM4iicR6YNk",
  "key21": "hZXmXkczW3MRFxnThrpunkwgjW7PqkDudfMpVBZS6LbLTZpYmNTth3Sn4G96cnDqa9AEB9dnvb4ZNRCzTwm66Fg",
  "key22": "25ijcRidKE1GeK4obhGrmGis5i3WUMknxN64tQahCsW351Pz6uKdH7UjbnFnobnQWZjWDyJnQ57fpVAmvddTdXfy",
  "key23": "KLbGX78F5YhPxhU8bwuEEYuVP2qAu1zJcRb6WptjmLjP9XrC3Sdy98yZSnBUZpeSC8KLz3EHnQS7mK1ngxXzPVe",
  "key24": "5FGKCbdc4db3comhLq6Dgb4tPqdgWBdHBRcgZJD8K3simBGPskyFuXQAxU1Z4aZeWsFUsQtFoNQhSxHxmYBUQHwn",
  "key25": "bvsi3sEowBbJyRweA32BeRVfEM6vZCZpCkArARCN9wqY6f6UBPyugeaS5aReTXkC3mfgLUJP7tCWQxGHMzz2nX2",
  "key26": "55HMSRTcPgNJYbdMF7HhF8T7JFmQD27hJaZy4sjzkGNX7haEDKAkm3etVA7iEDkteuJPawVV22KoNUfyRQHbeg3f",
  "key27": "3tGfRGg7sHJpkYRU4sLDZVzbBa9jTqDCGT8MeTNU7f9tk1hatq3fjqmDND3SrxK9VwDtzHS9ss2smboNfBS7S386",
  "key28": "3ZdW9TcRh5cww57R3fhgrPvDPaTUgpNawhm5wK2C4RCYX9SFVYa2HqeDxG8mUZxpmbfiHKd15tYVQtCeLUsPRvwo",
  "key29": "4z1xxKjSMdcVU8hUSCcHiVasRpjfhcJa4CTbFDhu1t1XrMkDzyRTWmgG3MBRmFZuvhxEsLqBS7KTgqSwG4hcwsgq",
  "key30": "4yiqYj8pDw51R6FBBFej9ohjgftNptmJxrEyA4ZRYFmW6rLc84jCs7KihNd7rRqXBv8a2opt4yBFmk9QHKsM1QRR",
  "key31": "2iUzVWsqGj7JmqkQvriW3grQPjKGe5CxbV9NQkCodUM9ttvbrQyhwA1FoW2PM2QofnbvHWTmYzz3uX3ELMYForhR",
  "key32": "281yc7w57LbRY8AwiTFB4hDL1fhjPEfPBQNtLrxRvoCdgUqtmHZsYU9AWfEwWBnakWPv12PC5EVdNNbLRw5ny3qm",
  "key33": "5qgAtw3Ra9hz2tNRz2tyDPaXtrRiLAupwyJMhzSDKzygzCZ3g56mptivga8jvisBTHMgaAkJ3cKiJS6L16jVogKR",
  "key34": "3rFSW2AYSnDKbttup9eBHRgRziirTvm2Yb722Gp5FTDuZt5EgUEcu1DEuizwrVcJ9Z2acNzNV19s1pwrTVxDd7yK",
  "key35": "3iAg88r4SZVWzXGPmeg9ab8ZULbGFXzszYF9yeF2ubtrSRhDmA7LXou7YXcntL18ahCJoaeJgvcMy2ih8uos6ZiU",
  "key36": "32rMHZurwxCgDCxoeSgGS8MVPBgyWBipCcJVq11QuJZ5KVtTaEHZ73b3yo1ijbRrcsMVucT92dDyiQds6cymj2ZK"
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
