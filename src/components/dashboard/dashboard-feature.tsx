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
    "5UjiakkEY3uevK6vDvbUz1sRt7JioYq35zVripR3dbXC5PkBWVYZpK5d6FoA3qbpVuCU8R1tk3fYwuJdMrkwhVzY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xYAj6PydgkBU6M7MVTUGR2jDTR99hBbJw5CickaLSMFp6LVFqNA6TvYZ1gPwAt4AKHbcBoKWjWRXLGy7orX3VLd",
  "key1": "YFH1Lzf9177bPw1uo6CM7GSojejsqw6WacTu3Q1KdV37ubL89vJyU2BTKhywU1VvY6e7wxhBdRntkEYGzXPYC5x",
  "key2": "2JKfQgf9HfLg6Y7wW4iapBdWagX6TfBxNqMsWEHEcfs6vhE7CP4JX1w1u8eWRGgrihpmfcPkqYNMtKoiDZJ7cVmT",
  "key3": "5DVcAM71URW1B5ckGaVMN7bUnWfTMr55LwpimKjvAVSZ4XxK6JJP4G1SrQb6BU7PX5zUtdmXNyKAwe2qfmSWY9bD",
  "key4": "AAk6ExCBUis9DHMSxaQw4W7S7cAYcBzZczm264934Bw7a4LAiGXKH6DwTYFPCUadQsB9A4NofhyFRrinUusZcjU",
  "key5": "3buaA7EMqFsesDEEn3xtqnkN6e7cWPobpFRXW1muC3QWorGJ5VCPKbDdketAgXnDjeheo44WeQoYGWhnqcPXq7Z1",
  "key6": "5giUJGa2SMorEJz63HASRFGcp3XmBpXBWHgQ2wMS9g6u2v86WmtcVGDSMU8Md3FEzmXVz864CWrFKq1DBRYqijnm",
  "key7": "2CwjHmjLXUSQoGbqaAFyk7XtSogn5fVxpbUvpArLs8g4Dmp7xkxz2tmkm9cgtaFs5jtZXAweumU11R3fVKFE5Lmi",
  "key8": "Huzj5WFgqM6d78Y8XKdegYHCyPu3KTzqJ2Hm9bwPA8scjBXH2Ub7xrps8xKX7fm6U31t6JX8jM6fYyagfXYL8yA",
  "key9": "272BLkvbonDBkvF6VLQG81Wb9gnLeuAGyn9uXRymoHyeM33ZFUe8rDELDADnZ3kn9fCYv75QPhJ3Yz2B7v7nzNYf",
  "key10": "4VxMFetB5vFBuiuBu6BscpR5WMvupTQkAAg7Bx3DpYHNGKLg7irWrYG5zNAD68dBNwVz2gd1vDRT29P9DAJw5ZD4",
  "key11": "J61EHJk1fqYQU6EANthqfJ1MetpPRw65gbEUt5TSiqYu1v41WvMi5WfwyDT3At8Lzhbu2fjSEd4Rjmxe9NPvsF9",
  "key12": "3QVLPL8H31pvWKBwNSAhZGd2cZTRfNPzUZgC1VHtKH89xBoEokw7oq2mMvn5iSRWiZvs9Zuucf3GFD8nmBRgGLSS",
  "key13": "35c9YiBGdBvvLkrvAvsTaQ5Va1NZz8Rozt8cuGBhjG7vgAwMeXBJvStLHRarEjqgBeAWxgevTT7wu6maeiwczRLW",
  "key14": "2ZgjoqcnscrQXajnYEitSYxEnq81zdCD7cJizgQ3z4b2HWsQRSD5XpPbJnkqzGooDgyKH5M92yY83T3f8xR8Rh1p",
  "key15": "55PmcRTv9EPCSYAG3ejb3K1AmXTwo2B5Ko45eBqc9Dhjz7HNN6CdD9CcUTBDbTcZXGzkdifSCyBis38Wmr2X1D37",
  "key16": "3r2Lvqd9ARE1hTBVgWM2X83Q8JhHNWtqBFAcnGhGo5WGsBTH7g6s3xMXZFZ75BYtwzXUDjNkBXQzi9x1Ge9Gsjqq",
  "key17": "3BV6NGGFndNJjFTaWYvfqbSEhbTVxYy7EXZsXKMNMR5M7j6gwagd6wRh8cBAAg21yGUqTP2i821YrYbvhodXZooz",
  "key18": "41ChJ73RXLyAtLQEWSKuNqcJpF3r4MNESaoQRdoxyanBz9ZF7QGWvvuLZp1rxzMNVLCtCXMmmDTKNwNRcutcHSNc",
  "key19": "3qkqTCNbDjEqEn2oj9cDx55NmWy6F5LibPPgg9ziSJkkQJ5wRRx5AjARZQjZwKwQRBMeCKFJrznELefXfMotDsJy",
  "key20": "3zN36ehqoZDcwwNCsTMjFpyW7XsNfs2MsbB9q4pxctpX5EpfMErEDYHMjxkrRqWjk2EN4FCaepgqsWGbTuarnFTh",
  "key21": "58j7FuLjCtUe2NgBQjE92oeRJpYHVz5cyrMoWjjWWUU9vNbTSXcJa1AbVGCV6yfynZXVW4yMZ133r5JLhmW3dx9A",
  "key22": "AfmH6Brt1MXvmmQd2QaQijvv3xQ6prfUMwWnwaAYUq3d8MeiNH3rvzmNrvgMrgP7YSGJzGvZE3YjxvaKZ2m3J7R",
  "key23": "33KYwrYpbnKLLiECe3uwCN6DKrD2P8eN2QQHmzjESEKX7uHHvZqYhDsmhWGFrKeQ6aPnSckVoDXjgQWGnrfr3K56",
  "key24": "4YnLzHSsXcCp9fGTkSUsAUB3MiiLX7cSjdKiMGjVhsoy1Br1nXfYbGX3duGhU63fGhojZ4zgMhxkEbVk6Mi8BCsJ",
  "key25": "42PkonuqCHsh3Ryn5Rb23dXQ5y4iqCvM9DVUi7grUMFHMzyqp2RSCMYc36bCMFhG7ht2kz76fdWCcETS48jwGPLq",
  "key26": "Sf1hMvHm1qkpyGmpAygCPVJ1CueyGiikzFXSqv9Vz2R9eEdFRqK5yM9PMgvBhoLtK67ih3PjqBayMMrNMCTpJpM",
  "key27": "ck15yTaEoRVDPHM9tNCokxRDekQg8Kxt4q25j3qjoqZRNuEEP3GY6j4ETocrsNENvRNMQ7CfKdivuW5H1pgj1nM",
  "key28": "2deMr9M9Rism1AVUj613fq3NKoKUqtxhNwFU5g3c5m9nMK2cRhXanNEb9kRoZ2Lxg9aZLSnFpPvYJabmGigTFXA2",
  "key29": "2K2t2gqMmbGFqNTutLDvkFshW6zUPAGDLMwUdKCvHUNmABNVakwbBHLULQpBdyq2CQ4WzvFnXrFc3hKdKqcKwuGr",
  "key30": "2bJeq9gsGqKC9hudKAE7QSN56NVof4dcj5mKD9c3KGzbNimqjDtLaH7Phj9A9hks2dy7CjfoCTUhDaTgWVSmR994",
  "key31": "3sWXzGQoNYS9M1McjXivrECH3RRjAkVvUSkPy35TaD7eiccLhevrPVELJeGK95gzDnhSLEFN37sW6aMTkDgbvRVm",
  "key32": "S8gaAcZZLy5gKyXC5uqc9o6FD4ymjbbDW55rxx81jNxZqBzh35EG3tWSSUHaXHPcDeacv6CU5PnH3TWq3XFKYUY"
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
