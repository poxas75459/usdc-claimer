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
    "5JqdCDUv6GHUkrxqiw2nKfPBBeq1FVt8UijQQmZBogLBPwbUE8ucmenDyWkE4bRofgMKrX2bE1VKk954H8JT7GMc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TirjjxK65TYdrN5h5uCTZJeayrjwh61Vvn8MEtHNKyY4j1GmosGjkRT6qSVSYuEk6ZUQFxsKwKwDhdx6arPsQ3m",
  "key1": "5nGLLbtBj4PQAFb6z6zxLP4MSxVnPqM7muSt4modbUadUhiYMxPh5YhH3vpMQvjSRo7VedckpbLC9A7SvJ3YncM1",
  "key2": "5p4wpBugjuR1EmC9FSpqxwfiDPvPB25xef2MJpEyJpWUwifiP9GQWyB3uBaNGWw3QGLuHuRVoCexjXtte4tqkakM",
  "key3": "4RAZk7xBDijaVSsD9oDeVhBSBoEgsxsBDEiv1kd3LjbS93YyfExcNe7Vanbg29R3kYTF81wTnbPLq82kQB6nKuPr",
  "key4": "2qpbeus8HF6nsJRhc9WkTjx8J5cZnFgHpzs2m7bPzNBSxHHuogUGZoMHRsMNyH3MgRKfEiSaA24J9EmWruJPdRKS",
  "key5": "2Gyp7rA7gVK2DCxGajg1duumZJhPvJKbgPfpJVzWbJtRuwizsGmsfWEJ319Sr72ippt4yudZt3KTJRNQFGLRgLJL",
  "key6": "Zu3QUw1EqUVCDwofiXZhpd4kCsWo5C81iG1zsQBcsrPeuA7hQJoJmZRYEXa9Q8HxBMFwKMkDpprfpUMbfojaQs6",
  "key7": "5SZ6PyBXACFtU3VLFEMJh2oTFrQA36cmS9dbzf8XQ5eFGNSArXPuytWy2AJJa2zZmZpT8KfSLixmKpbRnJb2UsMH",
  "key8": "AQwKcnQ2QeDkwd7atdWCT8Z8PUKqhiT3B9jk1GBF69zjr9k3FDyFPrJfa2KEeBAKoQPzkJLzvJCQUet5Es3qd1i",
  "key9": "2py3KUN5KHfU2BV8vhg4g2gFg8QikxFDjav3EKFpgryXUa915SfVRV4F2nE6ngAACVs2DJQtHiYsGQ9YPyVieqWr",
  "key10": "3aZMpCyuUZkyJRrKNpkcbtxMLDkrmtXLe6J4n2WBe3UB37Qy3ikqZvbrHaa7TRQnG3k2t1uPRFrvk4tZj43zWkgM",
  "key11": "3uRHTqtX5Yk66sm8nonnZY1BHBpgwNtiVYChooRkveXfgRNBr7bQV9CkP3QBhPSna6fv67gwkMLTV6sbrP6iviMX",
  "key12": "5kXx5zHnTa4PPVzv4wb4LU5Qhy1nU6U57DXZXTWZwSQYC5ei53k1hJBkAN36uBMNSdCKNgEch8aaTi5dAtSNz7nM",
  "key13": "4wuWgJfwk7Bmdz4EwjvjgR5GKMbBnNHF1P84Dd8YkD3FgwSv9roWZGGmCfXZthGFrf9yxvw67s3BRg1ah38Lywt2",
  "key14": "58MXxwNoAvpkXzT3EuVrDX6WpxxAiDYESsdceoBNHddK65JcrbCH5BfWzsdqqrqVcVhJmq6idzu1kVvzwZWHXq6P",
  "key15": "2yRW4pr8qhvA8GjAnLNh1UWYFrw1X81mLDX5DKbYhqnFc7T1dwUUVACokyDeRoq1mAeuSJhfJ85ptLrj857A6B2f",
  "key16": "4AkJWS1xWT9p624M8BpoF4so3eQrqjXPUH85bPxRMnyHxHL3x7GZGGC7Umtwo4jboSc35iSXwcMg5fqr32xHc175",
  "key17": "5WBbrGR67o1PUpmMPY35SJDhz8fz7Q7RcL4yTjaB6oWjaeyFKkBho5rYoWV3HXDVoxmn4EqaL5XDiPVyZqnavd7B",
  "key18": "3adQTxPrno1pq6MHocveFub3rA17ZHgW99KD3g3uC5KSHgZiXFefsL4TgGwztopoqR95C8wbVeEF92px8F8bGeTV",
  "key19": "4kLpaQt1AP4Stt8tntWdo99bonTmjBuQDzSQVUYhSnLaLb1wP6q6afymk2xh5KKis8GJq4zbwpco57Z5X2ZtHCCW",
  "key20": "5z4Fgf5TeQpT6m8M8yEt3JHjAUw7nv2zX58cLiBknHtSMauQrxkdBpmXZKiRAuFAsBDH9t2isu42Y6Zg7JQgrdSK",
  "key21": "2CC1qhxih1HmrmWJ3HMZgBeEy5R5DC189WQWwRU5pegJGJBMD4MF58MF6h4nZ7EJMa7fYsbeU4bMmC8xZWXewnDn",
  "key22": "5DiR6H3YSV4DZTCnsagWmtpmQ5iLXDhWGUDMJaqo8dX9cMvzQ5W9smvpYzWVCkH1zZqgp8Ekf3wFALmX7E59Fopd",
  "key23": "56yqntLjdF57CNNumepyfigytMFc9m9B1K4d3PTCoLcMFptEBbs85U9gUtaGsbobv5HcKjpnVyzn73qqeM5w3y2q",
  "key24": "5G4FRzDhm3x72ddYnGjj1QsyfpKPPfuhTFFBiXoKxN1hZ6U2K4pnZXyUkpexMpnuLWxjpRUmPBC1DX4EQAFq5dgN",
  "key25": "3Z5r3NiSF7Yi5VNFsQhNBxNbsLXoqY6btZ6fckUsc8KH85fa4MaFYt348SPotdWYFqaqQAVEXCF8ueUp6zcnRHJe",
  "key26": "ZHU3yHgaknMf9m17d5P1mD7gtk3TiVU6bqaJd3mnv9a7iwAUgsrfPwp93tgjV8m89um6abDsVH3nbGaJntcRXP1",
  "key27": "5fvbPmaFDg9SKwJiGJoDvwfggW3w5qnsfrR6nyphxMrKi65yCfurwnMXo37FaXyheJaiwfMLF3Lq7nxH6sZwGtCi",
  "key28": "U6K2qMRzFYekLN3zCq56PHujqKRcFLrsCfAx4U6SSYnSzXEFed7q1iWPAP4KAFFjCcLTfiecQGRptyVaDjkYmvm",
  "key29": "5PnkPnRRkKT2BJuHrnLbsYFkfs2sAk2M3HgCAfSeEBREAQeUmqJP8jSoo9BpRjjBNWSCjUgR2fLqUwfSHLZMmBon",
  "key30": "4cCSDHT73xWYrgmAX1D5jFtHVUEL615H5E9qtFvEQaaJ446ZcyAwdKKF39QnatwKqpAArZSpDspiopAPyiKrYkYf",
  "key31": "2KEQhQWh8JXJDPs2oJgSui1r7tHWstYJvK4N9S3xR2iqdiwez17J8SEn5BwwWV4YAidrLpqL9QNgbwsLcnyXhiyE",
  "key32": "3rXiuzVDLQ4AcR9xHAz1PqFS4n2BQpaUri7hxsPD8PhRHokusTXhBHEfpCaTMLEak9g4H3aJ3sDjhHUTz9ftNWj6",
  "key33": "41hEAcNXkbZMnfKmcf2QXkTAHJNaySn7b4Uq9G8Gb2FeaxSqt6BrJHCHdH9ZF3FRwTGCrEaqyAQqSYWs1h5Sv3MG",
  "key34": "5fgxdEgmf7DkpKZnfVUSazhc6zGVMtAzRFjZC361VA8GX6S9vb9bZ5XoMLcPnz6uaNoXTEyKuSU1uasgpMVocp4M",
  "key35": "5qrR3QebZThbZQg29VwASgYL8E9ZXgfaK98chJ9akwv58iC7vhdNZuJoHV9tk4F7wc6VMqeyJjKVYs1djcMowMD5",
  "key36": "5LkH3vrtKHfqReLhie5ELbN5HzJxV5gGRVrKeEZPGrAsCr9HKSaT8MWw3URLxPyBxARo2d3dQrBWQzsdbd7iW28t",
  "key37": "4naHByFvKTigS5Eu2MbT1Mt45U3yS1GqXeYo87i3eqCHwoBQo8pty74XnSJnwLCGnNzPtSMWTUVEzqS2wzcn9j14",
  "key38": "EYMkaQExMYWRZSMC1GSbXT4L1hpBJ31X4hQoMQq1x9qr5TVQ4ETPgGHXdm1RE1cjuHCmrcrA9MYV82W2dHyKDws",
  "key39": "4fa13TJf7Jhhn1QEzRCNcXVHsiKbaB7yWAGuToAHSkR2YAmTnYDtHTRT8jmjhYMWs8ABtHC8zyFgkTsRHCjsxvf5",
  "key40": "FLUm4DdRDmQRkE3AwPccFoJVj8BSWho7qjCvxRKrkzDoT1GpPb2vqoKN2nNYJua8d7nyVqXXHeUrmQct7wBgQRt",
  "key41": "2HfDuXGm1VSrfJ63u6rzadjRyD5ATdmbVpEssHuMfPmuodTGdUP92KUyRraR4EY6VpFS7FyXmVyNAHtV3UajnYkT",
  "key42": "ssttWRDXFwMPgxAWeQBQW9uTxQoz3EDTkjGXvox4y3g9dySRVhzA7kFdwemMwetAXK62PZp7vp1tkA25WkZsyna",
  "key43": "2p8UF8rFd59zY2MF8f9dkUF1thiP4YKtBKn86BdnAYnimwGnhCkG9jRA4udJVtD2mJMzXLLcuJfyZaXFT4pGvfdx",
  "key44": "7asJcUzTzCMmFU2Xap9ZCJV8D77Hpyz9coZiagdKHMTQwPoF97FafRUALhWcod17EdEDnoEmWQQZuBpMrkcoY2y"
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
