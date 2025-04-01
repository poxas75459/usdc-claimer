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
    "2h2DQhAXc3HprLzwbdt59TE9mtr9fi8i2trm3LHKiAeLDMYqhYRYCzfMewnjdmKuq6Uh67iDP8iN8dCByMEy9QYK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DPUezd8nXjrB4srjnuBJmF6h2qMYumyHdRrhGhRJm8R2bKbnbs9sUfH8ZgR7vKzJccJAyPZqBzDCfcw8Gdabb2N",
  "key1": "yN1ykZ9vEhTnkVHqt7SS7Hm47fbKjyA75Ui8cXVnyGb2Ma7KHJw2vcykhb7sPF3sTVD53pZbR6yRLh41UeVLZwC",
  "key2": "4wgUeS1dtJfSx7eU4C1frWvUi6fwFGtMQ4d87TuhfKbrNEAtbXuAMHPHPtGRGmcBKL9jxQnEW281NVLsUVeRqykE",
  "key3": "3M74fADaHkHPbQDa34NXfbeWfttMCZFE6UmqvnqQFLoeH7DSR6227GZdFXmB6zewCREPA4JCHozXx6twXS2uZxxw",
  "key4": "4rfjxs8iVp6XhdjRgqoQQ6fkwfzq1koXyqbtSXhCiWUqkrBwiEGpF5vHy2DPAAKx6Ldw6ofnoa5MJQ7nukG2oeTK",
  "key5": "38Hh51XiU9Lmeutb4ULA2FGAey4Bpf1Y4AsbEWG6YuYmkBQPymRBbV9i8wbCrn5aj1rSJtZRAhVHxLWWZkXmMaTh",
  "key6": "BZezDq1qgGPGTJfdbaPjoayA3PWPfgcbKES3fEmDQ7ZUJHumeKcEv5UpDKoL9xcqJFBCZ3pxSFxYJ4B92XToDWN",
  "key7": "5vgcEPJkkGaKDsLJKYQJhtR2XczX94CC6Dazy9QayVYYy251enopRLjkac6r2K2cG7X2CsTVe7ec2YVrGNj6j49",
  "key8": "4yzB3dFm1zM9h8547tzL3XBmjFrAsBByCM4Mqck5aKF6kBRQBznS6ba6CWsSEvU7uKCzSa8T8Wp1M9jvwK41qDQC",
  "key9": "2mrpgXHcPsrjuCRetL9H9fgzV6s2P6PcHuxGdv7nmgZp4FVcNCxvXrmM34VcPhfRvLn9qzYDua7gzZbeSwrK4t9M",
  "key10": "22WZA9abVuGCdnTJDZXTYQrW1Hu3YcxhiRZAWwfgWkPUvBtnEUa9xU1Ri3NQbuGwXeQM9kDgwpfzA9fKgebWZs1c",
  "key11": "Ss71TeKf9U6ZzNFMez3DTPLgNWyytKkmojrz7uDGMBDtfd1XbNXFaJFzuMfpY3zUntqENKUZgte17TrbA7cNZVx",
  "key12": "4TBxkjTNoHuJyC3vJys8TxXdqVa8eQrDrPRvRDznQv8U25tFupNtVKMG8839Gb2YfQPryg8pmxfHtkt7Rs6QafdR",
  "key13": "qz8Wv8s1eCjPeUfv2RgGWL6pcn7Td7ZR6AHyzwezTR4Pphuuip7KannR3NPY9DQKEK7Zoj21AHVAQB9Yjphp87i",
  "key14": "2V9yaJVhCEfvNQZahtPEXhTb5gafeUnYLQVYhPE5fVPSHKtY3otztb7XD1zUpbQL4PkPwX8dqwZKApW8VdrYyBh7",
  "key15": "5LgpL2HpJZcHkuFQEjdoSsoZzb1e8TcMgbCxuRZGZRzc6yc5aftXd8K2zArL7gBdP1LNVj5Tm9YMiLLcBXNUfuNB",
  "key16": "on78c4Bd5excPtgRjiLJ4AjfUAQsPU5HLFUNaAdbdZbrumfCLqq1mPvZRjWnUgoeHRD9pLLGx3sgSXsPmVaWMPZ",
  "key17": "5vUnHxL15smjyhDEPzNhfr9i98Vndn726Am2meerHP6Fqe5cFmkHBhEHZwaXXH3ak4hVny3gKMMNr81eAVTmqGEe",
  "key18": "5kjzJjeAzCoXR6nw9c3cbJyoqd8TqfDCV7CiwyDqXiNXcrDQAZSWFLmaLCe5Tmp4CwYkc2xccAnACmSzqkS5Zr2i",
  "key19": "G97mkHUojP9rFPDPsQXuARQ35qBc39xyyhF5xK4owoEaH91XGMxkaAEQJWJb2sKZjovkA1ZW9LGYKSXYp567w4L",
  "key20": "4nAafv9NK85G52B7peBXsfSrUFCj9KCNLQdevpv49x88VnSDqazxS5uKFSqvp26nk3aUfnJFHfhZpL9jyzGPUhSi",
  "key21": "3Y2TgjfbxAhFXsnjiJGS3BRGHUDh58vnQANWf9kuV8C1czKnoXo6fCgqRvxi9wa6r8MEbHG3i7ea2K5iwrjRfkht",
  "key22": "36nLPMmuGuPqPEu22VQciRxvxAQVjsFxt8S17LgSfedARUmgYhcWDK69HoSobG2ih8Ask8ovcWen4p4NpncDqbJG",
  "key23": "2ufUTbfY1sqtqcPyorhsRJDaQMtNbPw2vAKs4cvoVKDJeAXRUp9tKfYrFvE7p4L5eCrDEoop3gSArckvCQWPSFdX",
  "key24": "5No5PzS29xTfBzfF1jsrQi9KnXx76BR4pCt1zMyfP9GoCdhhp6VbYxWsrP1tCxcaTqx8XWXpNHQrekShmzhVH2hK",
  "key25": "L73nx5wgdQF8t7Z59cDHUWoxy3KxRnLgKRXfnJjJ6GRohS96kxS4Ve3bRV4UMTscFLu7rukmYgAshUU6pdob5qU",
  "key26": "3UsvC5fQpAoZAVmGUQ19LabnyrJJebpoKw9ZyiPmpw5Xa1XQJEBWAXvWa4N2RRu7gP98SqJU2stVvZwFGpkZdUgA",
  "key27": "3muGLk7FuKoWB2Fzh3iMupEMkMoqaCvFmqHZTFA3NgtgN3TLALs9rSKydurBqVaUxo5pRKCxhBv2Z84HXeitYMum",
  "key28": "3HgHCjBcRzSRz3CgLpJnMADC4W6Q2v1BsENB7ffnYYzH8gymhwehGwSqYN3LR8WXfa1Pmk41TCeb4XqzkqRKEDj3",
  "key29": "5povYoHo1RNiMBU2TwFv2QNpigj3RGsh3BKATzS6QKqHW1qXxRh8WRfn96FVbhJMGmTkJQPUHpB6ZP8pxzKSGomM"
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
