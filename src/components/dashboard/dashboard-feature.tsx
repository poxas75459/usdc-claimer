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
    "5kYrt5sU3u73fzo9TKH7n4hgCvrnLsq9zsMorzEgcBuCSURtnN6585MqETfyebi4F4yRwzPVEfwao4mzujhFtL3C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ANXcsqQQZpeTKU7Utv5niXcY7nxz1QpzqyQQsh49MfaeyaQ88LZWUTF7cL8Unbxu9E8BQibEVg22ZqswgkbZor7",
  "key1": "4GvDWS6QgqA88yYKES1rgB4XSaT2cP198kz1CvnxVNfYAhF69hKVKg5Y44tXmnJBU8HpCc4J7hbPd9SgmYy1iDrv",
  "key2": "42YtWkiowpouq3KpZpmEbgGNk4z4ZXWpACQQ9kfaxmhx9W9YbY7dCMFnDX1RAPETJY5nJx91FMB5vouY6sQiUSB7",
  "key3": "5uyHo3eyKt3ng77xsWWz9BsHyywDJWMvmQBJyUqMCHGvaqXGEMAK7TUFT6oCS7CWPQ8C2Tyu7RAeWgrQLrhseZpy",
  "key4": "33Zvdf8WyLKkTKkjhorygkpCZ6pzug4Mnc1uh7stwoCS15PkSiEKjTsXfC3yuhqVN52dsAZLsQD2mN1YukgV1HJt",
  "key5": "3UgqmiAUivxCbvzkV6S3e8VsAY6q5e8n5io49FvTQexiTe24Z1CdufrpVAdH52L2ubWFB9YAQEAxJq6gvxMszVsG",
  "key6": "4DaFVFJJjk57SLBy6EVQvomegHcxHSfVx34jwkZp9YtdRpLGSfv1bXQTzvXfKzrHctj4Kqu4iKyiwGCzesJvBArp",
  "key7": "3XUwuMAhzVDiZ5tWTQxpTjkpESVnRgTdKqCzo6FzJQWVYRdxBDAR3gwr8soGaswjJA8T3B2AZGTmqPiWhthda1aK",
  "key8": "2aDMwMhKUJJJk2M5H5MaPaFH8YkEi85Miie2QuDhq2fhm7peRrimCpTzR9XUTZvowEpddRzJEH1seUSUaEw9xBp8",
  "key9": "2d6ck41cueM1iXtpHNAb6LqTxVDr74XKFt8zeJiV7uVwzkZvcGMgmUNQrQSBg5owCouKVa5wNUc65GPd6CQ2Vj64",
  "key10": "5FtWTbmDKi9tQPKvNBCag4PBAP44JFJEs9yqm3EjveadFwryyyXV3zsVjBgTZ7bitdfAdq7q1zW7MYSjqQfSqrpp",
  "key11": "4NSJe3ETAcwRMyqpMzubDNXpdGLire8WRVfYGjSs6794dD49v5P2tEkNunXKUSUxXboGkYFSNV35VH1sHP9gsVuc",
  "key12": "2eUZ8D7Pc6Q7evxrGoHjzDi2LrDLgh8E4RH52im9bq6sRzCb6smBcmfeW1aocSTBLf52zv3WdHDxNmdR7hmDzVhd",
  "key13": "5P5x9Ay1QZVuv3uitF1qw2ff7Ra7tSKsL2WaW1t7S6nHywpofF1VuAYgqV2C3PUhWi2DpYEFAoBD5q3L3bGcTMot",
  "key14": "653QEkvDLCRq5FJFqW4Dth8nwqCcNfQGMu8MaoBWmSBp4AS33PUqwsA9W7HGfNyraVphWWfnKD2qghnvXm6aX6uQ",
  "key15": "cjt5pFecbAUwRGVBrksnPqLd4uHqm1H2NXCuCugvU1TNdp1RHYxxBDN7o6oSXgmX2V7Drt8pLxsaUMuSgShoes6",
  "key16": "3DrKcCA8okSzibYnZmbuKECLrWsxyRxxNKuT7zFroT5WtbpFdU8GidZg9b5684yNRG7FiYHPP6SGHfhC7zw1Kvcs",
  "key17": "2MJpNzc3ipJnxbCwoDrvCQXPiBqaHZ5vuywpfckZUorAFZh8JhxrM9j4XbaVG6kRcMsgHca8J3BnmKhcm1pcMtJF",
  "key18": "7vmmsafzejknXpAgmAuQKRSVDveaSJoLstv8WjSrGAGFTDdPLhqTvAJUs8WLd41c91qwsT6NvpLRbWiPp4oFEVh",
  "key19": "5EFeqBJwLeeepeFw76YGayS3mWRScvFFMpNmiUk7yyd6azDnvqBpwhudZ4zEHqLq8ze6GHgvUA6z8KGAKbzucNfp",
  "key20": "5pPiQMUuZ73whmb1YqUynBEb5x3BTe25TNPebQ9duRXdmQDifch8pXSeKumUUnHYoHVHnRoy9z2neZtpH7B9V5fS",
  "key21": "65iSsyEbfLMav1Y5PkW32gKgm82QpkqK6kF8BiED6PG7nvjhDdHYwMx8mnk12VNvqc4t55fq6GVRpe2T4A2JcqYH",
  "key22": "3233FFmLuhALPaqEGYdveRjTHrPvTQ9LvZtPT26nLR2h9BYyrZHf4XLbmSzzBCnARhcQXvz8a9szniQAScsua8zh",
  "key23": "4LnivvZNYLf8wR5WZhvPD6mDPmupQE6at5u9oD9Rz4C6gzPSeuybzhLvDMLGhSQpc7XAFKeUbfYTbGHSukUiZxV5",
  "key24": "29eiFuTVKNA3zGV2SKCiVWjFeixNAX8ec8VN11E5TVmR1bH3TVn9Z9ofa8Ztyz84DtSPRc5xUGBPFqS2qEw2SYjG",
  "key25": "Q6TxEVXpwp2MaKx6CE2qjmFmvhdUiwirHTGvNjFYa7YuFmfebayJE1AViWozXenLhUyiuRQBP549EyzqfpJhd1j",
  "key26": "dYqjQHgzJaA32VBzxuooWBpQxL2eXdC1RXuZJVmmESD6Nxa3L8KmwkWCu9akmwQsXxnYk3oc17nrEKQNbagFTht",
  "key27": "2sPVrCJE4Jo9W6MsYrcHfxHNnXX95jC41qm6DxXkEDfkLboF31PTZ34RaxaP5EgqrwipFCUKUqZARihPyvSDLsgZ",
  "key28": "2XPJaWDaXgcnhab1rjWtTNDg1nrsfLBPmDpJt6GRXorBdA2NAh7JDiM4BhA7EaTSLJd374wyEtB6n8MUrD4SWaN1",
  "key29": "4DCqjFB5gj5k2gXPMGMbbqNyYet3RvmFChCRwMEW91H5dmmkmFxxu2gzb8eJC9L2DmNbZsktjEeRXq23gomVWfZ9",
  "key30": "5bSuupx5peoxAmR2HKHfDu9rHWt7Y8KzjmiBxhMvC28x7QPG7xnK6cPtBqL2MGRPDt7gf5yc2TmgmyB9vjz2V7EF",
  "key31": "36iaLkUQCJeGaP6PWypHM3DCP7UXyNDybttRq6cw29xKfedpUmPheurY1CyS1qeVmdDv1raZJuVhwzkNDYjZfRQM",
  "key32": "4qyXiK9ABHsaN31c1D5w8ErpKgwMq85ysxbSeksGG7gz3NkJ7Dpb5zxPXU5v7drsoBL8KihBR5PyaaCqaPBAD2T3",
  "key33": "4Fy5pKErhzmWmhQnz3nJzNenDm8WZXdCLj5Rgrh9aoEqdWQsCYD1HWa2UdsPgNf7zbb5akhic9jyrEuTKPG5qvHA",
  "key34": "32szQYLsBAEisYeCtKCHM5YpPyubcTmSrf1MuEDjTpsoT5GqqeGkqt4ksqudwiMVyyV92SzhNUfZvEREU1bWtpRg",
  "key35": "4QwXfBdyb9xoXYm6zHsAXebPgD91BjWBL9MMHnQLh9dkQCD6eP3dZrSVGncSZaivQRaaeEriAWayxbscGTTx7m7b"
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
