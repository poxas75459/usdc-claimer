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
    "3iaNpgKebLKWNKqh9V4YgFmwZnLQdpWYNTze8UYuE1w71rHqckApPEVLn3yfXmYFSRjLacpxWMkp5V9CETtgYq6d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HKdawrXyZY1QsvBNdQfd7uScg9DAVwqgiMgaZt7wogFqUMTvTHcmT62frtpSi3pHzNoQtEDZ3eStYjx68bVu5SA",
  "key1": "5QdqDr8DVi5rNVCnt5TPfpdvCwzfmEnvL2USvuPkPnLcAwn1X5MK5SWSvcgKhUjcDs9bZJMuM9vvbE1X2udqv2qj",
  "key2": "3vvrGV7qcLyr2jaf5ByG6snSg8ugLyMZiUFDQ1QEoVfWsmH9NtohXbEQR2uEd4PgNCmLUsqDwM7MAfBRK5Zxencn",
  "key3": "4XU9xUBYdXJ4zhmLUv6m6JveN9QSQ98uo6PFHmeQFj2FmcmuWjZu5sfTpx2CAZfEe4XmQiKzMwDLp6pEPPmmtLYi",
  "key4": "2xwK9RGd2ron1Uy1MPchejpMWSYPoXqMsXktVPMHYNzhKJ9Yyo4ojTMFnyHRd7nZuGSR8riDKBDCNzZf3zYeQWsn",
  "key5": "4eEHBmbAUYEq7uAhcuedzfMkERtih46AbDwc7Vw1Q9YVqcja6rX1XevASnSq4zofkoZtxZw4LXhbYNUVCEuX83YU",
  "key6": "3WUABJYGyQrU4hzCFkkTsuUEcwvRs18NsfewjBPHNTxDgjFuKc2u3bHDae4rSmUJvip5Gw5yU8qPdoS2qT7rkBmn",
  "key7": "5figckcEtUSjtyofA893HhTNd6bQuCkk4fdB2V7jtdqLXgcS7avV18sa442Kkv4XDV5Vr1ngBzBTLYhUcx8xM5GR",
  "key8": "2RhSzUwArEzXkKPTfLrNQcivLSdqifaJEqvtfNKYvmA5PaKGV3esWSwYTJzsoozdBV3ZWd5w1pcGvLY5xYguaWmP",
  "key9": "3yGavj91dfZEU6dRkdarCacfJMzmM5rZcBPdiB7UBizdRSuCksizoaGfXHMCbRMAkocfWvpsixMJFghgAYxTaANZ",
  "key10": "3wRL3izCsnwNtB2xXdxgZXLuaugYVDZGP6hoFkwQp2Niu79teB7GvpshGEudnBZQgMSPcDAcuS1PyDxThewaBN9p",
  "key11": "NUu8VRprXGpJRBxfrP1udb6Du7aFEmnAYTxT2v4tdzvwApwGUwjx7vpGgdMoXtcp9GLBFZBBKELTJGfTd8pRW8W",
  "key12": "2mweMX4tP2BaSGQmNJXK4oJTmG69oyo1H1kXxEvd3fG5w7qzzENebm4WkjQsYGajbhAB3ZLVXzZZMobXPXoYgbYz",
  "key13": "4NzusfCzZRM1kqb4GHrfeNu3xmxk7EQzvqMLmT85icfxFTqLRmHqfmQwCChmM9ciw3XwLM2zjoDbbEc9wpxQi7eJ",
  "key14": "2du4M9FssgXMGJbubowbGDRz4vbx48TTduDM5dKPZk4bUnYPtMVyWV8YaEnjHtvsCqKHEmRmQEWXXeEZeDrh1D2W",
  "key15": "q575SvkyRERNjxE1RmhdSwZs41QsXqWaxr5bxAJJ62xF1VBR6ppKpjeo3LBwF6n1cEDSDWZce3TKEwG1ZjyCGfH",
  "key16": "44jqY4DSEE1gcmaGNJZJyHqWUfvBpQsgkEkQEkoxwg2jsSqbc1mqGoQLK1K6H54No9jjPtjeHgJ2ZjC7KmsZgKXX",
  "key17": "2xa1WQwjraivgxsqogHWQurUb8JpyhE1XmG3abarYU3RPQAC4oeUQxmVFrH9VQ4WPqreDYvwwkmJxuQjjgTtTTjd",
  "key18": "4G7hqWZEWKLPcRtqt5C4VoCmQpf7vBJ4iE4rdu3Zb1iWRo5S3Qwd7HUZ8VXusqY315VhSJa2mtYH7atdxNPs2ymN",
  "key19": "2P9wSF9CQTEDhaVbPNXsd7UFb8ivK3i1B8QKLbovr71DNhDk83cW4qCt7HaSPR6tKYCGjjvN7qbe776JLXULF4UT",
  "key20": "VxMvDBjnbiCrTPegawjLSThQVdDYa9phUVdGLxx8pPo7MdL1Amz4QZTDGb1hsTvcaRyJ3wH5twyEfcar3YWacu4",
  "key21": "Bz4tue9do8cFoGthC6WebDFe6L6JwF4SZDBCSRVXGqtFpb2XGfDniS87BzGpnU4bTDPnG4HBz9quDhqpKVMC3vM",
  "key22": "3PU7JGTXQTSa4oC7jLVREha4LWGrebSW3kpNqbJEo9FirJDxGwjRtGuUczews9ueg8KGSDyd4P6BJsDbjSceBrrT",
  "key23": "4jaMDaoKnnaVHR7BJURcfnBi4CLL3sUEdQvGag71KQJLEExYBL3SDV6rwYXyJKW9emE21DoSrtWUCWZDFcAuvUUX",
  "key24": "42Bx4WiquFiB4xMv1dnkXWzRYP5yTeaKaA7HCAL7u1QMvY72HGLyoUorDtS1W5WjTxNXDsSLapNJ3tr8i5k9h1TP",
  "key25": "2Hrbi3iaF9y7Sbqv97y9AwR9sqcg2jbVpbv9mQP57LasoyKy4LfBfYJ3LWs7D6TEKiZ63K82FmogZuP6V7Zc6Vtm",
  "key26": "2HEESnBddoUKFoeGSrJPjL5jgmXKRcQC1qCqr4MDQLxgJxjKQfvfe24xgwHmE3SQJ9aQAUtCPuLKcGR39B67UdQ7",
  "key27": "bySiLp2EiRYEJx9aBusBSTHVEMJwHKYYyCB1S6doTAu4ctzqyW77KQfcrsdQTnC8f2fFqMAQeUomnVhHKxKJBCH"
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
