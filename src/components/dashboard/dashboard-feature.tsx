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
    "2pVAc2dMBBV1PCyPgzQ1id5aGA29UQrgCFF1VZg4p9WFnYhBVUZDzphck2tNuTpu3S3J97Nn7FrFSYJXUFLzqtgX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4grFZyX3j7SxVJshGpsBMQEntfUZcE8ptWQtyDQM7m4RW3aWvoGC2WB1HLTWT2K8MXJ7v6cU8W6fzHexGs2cuVXx",
  "key1": "5MrM5nUEa3vKCWmbS6MSYky7a29WhSJi2BVsgjKF2ExVcSZVxXqAyJxqUsRctqa3dQhRirFQQpiRY6E8yeh1J6Fv",
  "key2": "4aSNTmNjGtnwLWSx5aAgEzra6SxWEWkAfRoRw8D4S5MhB8aNQFUi4UqdXaMCpJMHWhMExT3Bg1E8L5Yx8y2GZbwN",
  "key3": "3e3NkYrRncJw5hzoyd187oPVGdCT9BWuRM8Z2CrGo8E2ed8Ti7hUHun5E8AHYE1FNPF335pgsu2rhUdsA8YQdfUF",
  "key4": "3WrtbtuwewBvv1LjaPA8zsYLtjMyjWYQ6rtdXBJZx7Fj8jBNg8YAeuAP2ou6w1DbBLKBJcBFYN6KhGTSqmzKJ8i4",
  "key5": "5xWtxZuET2NdNYBPGYdXKeP6uiNwQ8jb5CfSK7zMmm2sRwxnAHV2Jofwhys5zPAwsS7wijsGkZDDi9Bk4ymsMjMD",
  "key6": "4ceAPo5sr4vo9MaNCinwWAEFvK8imVUvk2QNZ3iN2VYeVRTA8XbJPvWmdzawmELCNCn1eWp4mofsPXSJoxHoXwiA",
  "key7": "59Dq9uctMzKRS3bpYFjdoZv5wntN1HkLunzy1QPbjXeSiNjTxZSi73aCuYKcxLMdGLzmcP2cLNWUwzehpewSoqXF",
  "key8": "5PgdKNBz9r4xp6Eeam3ondVEqaMd1wnvRg2VraEyJEVtsrHrv3kUdQr8VvGdZ3kRuTfLCVkvfUMAHgUkfstRnUsE",
  "key9": "5954Ui9kNQwus6WFgVq7X6YpRK9aUtmVqDRMS1JHqfoxhcc7yXeKftA8oSH3NP68QdN63WUMoWu5ivw4resYR2XF",
  "key10": "EjMnRvaqi2UC4GMF9CabUtPCtQybcPaN6LzKbhB3GZ2m7z1cpQETUGNzzQw1cVYYZBQXKzS7z7dFqmyEkZ5Kj9P",
  "key11": "5bwGXEUrPM431J5hnPA1QyhkC4yTtDiHWri455wJqL61GLazuc2XXKhMDuW2ZYPKUtGUQmjPCWNwUNqvSUeetysB",
  "key12": "36CmSukm3gPN4bjTge59SmNSVG8qpcdjje4Wn3zSDEbd139ntHHKizXPyDPVgwJeJ8mmQk1nd5EGtTAMCgb2Q3Qm",
  "key13": "5c7FszhEyGov6eCoEDnQNvfr3Euzn4UHdSDuifDq3m1f9R9MvMsVvGehcKf7Vcv2dfb1c4utLNjx4S1Jaio6MFRg",
  "key14": "5hu9isVmZ6L93KWoYekmNyQjF27gYd4RHExC3paWdst7Fdkq8XQas3jUS9MiNCgKtfnA4qHSDdV5Sctphpc7Zq7s",
  "key15": "5YbyQnvfgK8qTGGLoVhRPjho3EjEVwTTFK21kSzZz4x7x4XTM9CUAB2qKE4fmYyWL6BCLqJu3avUHL484tt65vKk",
  "key16": "5BSUAdmdrDTEv1UL2TtUeqTCehvYz8mbXnhggnvMrS3AP8oCDrN1sThiyxJWYZnTJuHyBnUntwAMmXHvvqXd4XU6",
  "key17": "2htgYzPbd4GpnaoBxEUPUgyBHc4qKruMq3QPd6CfCmo9tqtLpu4X3sQuxV1zL9UnbgXr1zTuxAnsnJTV9fZYGRrp",
  "key18": "3YFMu5RGTcmv3Cb5G8wYYpAJhd4VEYehSs6ALF52GKELSngkWHLW7pwSxKVriXnzcf8rvWyTyKW78YntkJ88QHSX",
  "key19": "23ZfxCzTmUmyk72C72miTrrAdCUo1d75sLNSWdcH953cdqXyJ5Z2rqbNFG1YQzTjBVskWdbSGpWjQtDGHFYzYiDx",
  "key20": "2Y1ZtCkjSyrct8HCr78sejGjVEmyCdYALRae8QpBR78fcFRMuqRMgtPmRLiy4T8KLu1sbdpZPTUmWDgiA4SFTuJf",
  "key21": "v5PJy62qu7AUuRnw7Sz1ePLsXBw4qShBhn8AS3Fdiwktf1BZdJEoPbm8tCUAmbxPVuqdPB4kA9pVDMnQZwCHmro",
  "key22": "3qW6j6CkTqdK8qKHCeYWC3iLSU1WyCr9by8fXBQEeLyss5kejuZKPe5kKcLwuhz6UPQxjRMjjEgqhnnhLmyZUpog",
  "key23": "5u95JB9KUUhBFU96sGtjBAxjjCfssijUfqRqqbCv63GQZrRprzPzkZU5HjWtBYGR6bcvJr5eW5bdC3Yysmm5Bycs",
  "key24": "57wDigUBe1SJBS9ya15cZeA7MHVKpVEzBRkHaEwqQ95cMaj8MX6Aq3VmLtHxnNgEe6ta4ijdXcJ7i3fqYf25TcmY",
  "key25": "5v8Rq8ND8FCDVdsz1DJpXK7q9QKHizTDtYZQa68aSvu6czohYF4ECBeTPvgB1tx6Pj1cu6TrEf98uJ1zVZGr7FLn",
  "key26": "4QSYGPKQKJn93BCzz8rpNgreSBKEmM1CeL68X9tf3WdtpL5MjWNsu9NBmVjgPpNHS6rJ17qoSKR7ixEW9nc1EBCt",
  "key27": "5PbvmigPFUHEfEt5hDqaCotL2qg7wwFhxc8JcSi9Ht5HQU1qHYFN7bgs9uLDzgiUYcDnzhN7KMsMsZnbZwDdUqGP",
  "key28": "53W5eGBY13hoZCbJzgkeqPHcLCx9MLAkvHVEiLf85VF2A6Fy1MG3Dxjns7hm3N3TAujoGA5Kxmn3QYMN482o84nW",
  "key29": "BwZqRoijQ1KE1tqNpX2DhgfXB4TQhrcNZYsNWcSgFhdm2vvSwkZHPp2HFnw7YGKy6mNBzgp3ryXUUBgigeVG911",
  "key30": "3f7C9gzEeRAHUoBy8Ytj7FBhqZDo2kBhWRuewVrkSDbvtgQzWD2mupWDc9JGeskwo1VCDe7t6EUxCJw4QWuZED5Z",
  "key31": "3PjA8pDBDRfqvNBvaryNHtWUMQUEonawXJfacQ8eBS87DMQFfuMV8HiyPcfHneodEByQkEcmiQLLfvPgX3zaufYE",
  "key32": "3TyGMJhKS3XKYV5e4UGCvk7P7f1JnYKsN4phZ9koDYpFJqkJJGK8TRn9qYUqiuNLwqR8hgamKJYqW7cLAVqhqQgY",
  "key33": "bFLzhz7aqSp8eRcfZsNWXc5oCajjghdQzaExTCpESXjVhh7YnzZ6cXNjFHPr4rayv6E7DGdzjqUyzCjV2g36H5W",
  "key34": "5PMcpn2CuZy82FTera5nprMMJPKxf5r7bFKx7FYNZcFuKJpUfKpvRRbGPEukk1R5JuKUDfK3ikyEN1ZH1BGgjVLh",
  "key35": "uDEVtvSDGAiJPZwNTESVd5ZXooXRSMEbDwTMQb47r5NTzqVZTVn98rfy82KNJN5J8iaRrMKpd6VTpTLbRLEhd59",
  "key36": "42psvGAe7p7TVXt4wc5FxycuQzhf4q4bCU11cDdVjm1qJzUfu5Rf6AVsF7cQeChrJF2BbsYZGM4ZSfuzFC2dyLPw",
  "key37": "i1ANX5MqwRWzUGccVfo14a3fsihu1AD2bqf2QreMRFtbLnfMZmbEjKHqejtjJDy4H7Pyv5pwZJnfzfhYxivxvSd",
  "key38": "JDRk7qV27quzspEcFXgWaPVcKGwTswBBHmJzM1dQLUhGXKfpJynoGjD2HeSqCWMUxk5PGXc8N5RvZKUnYrGkYGY",
  "key39": "5NwD8MNJWHoMLZ2cqZbUFsAAeXbzz9D45X5bjtWvo7r9AYbBDU8Rsp1ktiZRfqdMwJmhuZSZpKzRL55jSPRRa6Ye",
  "key40": "TetUmHDtS4TbyPGvjasCEYX8DUmiYbA94bX4wwavW5Carq4SeWJpt1raK5HhYTfHeDLg32Wm8XWLTXfxNigaTjN",
  "key41": "USMouWQwXCHSWqmyhpgnV7C5iy3qRjvyWtTH9pDUb49op3WP1YmY6WFLmzHgTeEKfDLpqeBW1gS5KoA7EpNnHJF"
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
