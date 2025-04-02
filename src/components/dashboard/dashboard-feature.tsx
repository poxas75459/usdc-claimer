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
    "5QTvLbtpYdrLedjhKPodLEPRK5mewHoDc1CqLUFoykF65tJTknRP4PDpzuatU2cU7FgsYc1XXrsAnXku2sTbzfaV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FuoFN5J9MaqoiTEmpJ7JJUQnqbm136AM3apdexApq3qtF5Kbj5PmwrhYwfHz8CijoqfNbUgZ6FoqmkcK6NM77s9",
  "key1": "34JiAVWCguSEuA2AjS83jouJHLeZXe4PG74Hmcq3xD8e8pKNk4RAwwPeV3UkMJAYSxotR8Hm2ohVKkod8ahFWY78",
  "key2": "4zii5WRmhp5xGN42J7tdsyaazijhfw48MNFJdvV5rJXACU9vNewhB6GrUhy8EgR5giYd2E8iPTENAGWVkwV71f35",
  "key3": "3zxgk8U1uHAR2Nd8WxsyhDWK2eoCY8mTt211JvkuE1WG2JrcrJ5F5nHRtgGfbSBCA5h4hznJdZ5x63U1iNYJvsZy",
  "key4": "2zxLzb8ib5E7iiZMV9hNdTQx7aNttWbbfzsawMpX4r4TEdw45pxveuz3NCH4nxMwtcHFmTLKKNXxS2pFU7QMSJqa",
  "key5": "23gjFCay5Qfw6akAKZuJv9kzSFVKmZazb8KzcC7oWFPV3hkWfpckvLGdwJ7EqigRdCiHRraDwX7fCD4ktz33UdkX",
  "key6": "2vJNLb2NqoP8W2PLzWjWCmzWoyj5c9RysXiGtMTihDZF11GZfiKZ1mHD7bmQvjkaeqjNjUinmho2zFA1k4HvUUte",
  "key7": "MEMG9pK5FYzdrjdvxtebLq4ainkw27yUxpNZZrri6FdxYovATXTC2FRRY4YhW4vqkRAhXWcLwEyqtCfoSAk6VkS",
  "key8": "2nqoVfxSDfz4BLT7M3iab2dRVqfGn3owAJzxzTgRKo6VCkmkd1jEPkZKVAa6N5oZhyPzhsXUwQUU3CmThaVcv4Uv",
  "key9": "4vuTBAyJVYWc4s1FioUwpoSQU3uSzTHkyVkUzQCf4VAn3odewZvijwm9TreA5igQXKsak9x5SrsmwPkY1ybm1pAA",
  "key10": "5t2J5MUM94RLKqZX13JbFvwmdEsanNBfsN7WSvNkGft3URLiYS6pxhkih9bvny2gj9WMXFu9hyJaeS4gvzhC4xNP",
  "key11": "4hUyWGFC4cYNJftZhxzHFz7XLc797hG9J4XWjqS2Vo8K9TDib6S6BFzTaEfEmWZq6dGjJgcpiytyMx9RBqBTbGaN",
  "key12": "2ngbySAJzJnS7VYoX8AJAYYyYS3ymaNn4tPMLJd6RFgLSRr9aj3K8ZH6aR3hbshKPZJBfWB7DHCSz8hntEMzjT2x",
  "key13": "5f9iArUxK2eX9xdv9GPYe5RpL79PQC47vyy7p3s3Gyqjs8MKrbAYNfkPc1n2WGnBdQiXRkHuVfdKJgG6S3JE1tPD",
  "key14": "5xaHXk2FmgptRqjBsztc7QxVu65zauvwJ547E44hLy2fAAhhkHM4755eDDEzQ6o6zkE58grbwBR74td1FfXY4zjT",
  "key15": "4rCuVnEq6fQh57EhSnN29VaEqLY6DeyDm2eNEW5tku3t57ubPhTDSUxCUKm1Deye7hD7AF5fY38nStSdJZZmAwQ3",
  "key16": "3cD7X963Y9wBhASzRwwMBPy1M6DXDv5LdDHfPbXSvgthang1yr49cLU9uL2kXD7NmkovanMa5xncA5sQ6mY3HdFT",
  "key17": "SzS2eXi8qKYn6poHeU1qcYbxGV2B55jo8EBhPHje28RDYnDEun6TEhiLsu331TZ9t9wF1bGhk5PswT3g8Vr8Z68",
  "key18": "2zojnZyHuZqQGR8pvjNJyXLBWkyuDUREeifvtwX3tC6N95G1D9Gi6UxktAfBLW1NxzGRthReMev8R5QnygvkMcrq",
  "key19": "spDYGjHKuXkn1yTpMohyMUTJoqicYEjRthzkVsH5trPZGek6zT1Hi6w2GipaLntBcgEXbjFU8PR3nt68Wh7o2WH",
  "key20": "5GupvF5dotyUPPxvT8Ze7Ppvk5qMxsRJXVTHB6xG4HWEaF24Tod4dhJgbgnjWiRVoufgPAhUYttJZe8DY9LX2yMv",
  "key21": "2j94J6ACEpxA8gQk1ogaA5aLFmDtTTnhsG98TXXTrmEoAx4GyJswMJVXakJRUL2Utmmcgps2Wh5jxeQmKe78sTG4",
  "key22": "4EM2vJejAxaf2pg5jGPzcBciYwxboAhhCWCGa82d6sY2XkAQHZXf8bhDm9BNjs4AJZ2AyL9SudWE9z4fTeh1VzgD",
  "key23": "3W7Rgq8taFUnYtiSTV5CS41hn81NrNc4euB8vPFBVwnLXKYMQ93PPhgjQJ9GyLaoPdkEVrcjwbbMkyMZr4NYuDaa",
  "key24": "yYHKq1iSGDGF6zDMmwXGD5q2QVwQLGXPP2wpXpf2RepwXVG1q3WJ6LQz5jUKDBrhdM7j2WLeitbysGLYhB1S5d5",
  "key25": "54sFZEp5Z3ADstVmU3t7iYHHWY2XfZbm1PV3iF9QoDvkbURFftwHodGcEjrdFhum8Ydok5F5ZGgKjqm6oNBCh1wa"
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
