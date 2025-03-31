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
    "4pjSGiKeUFhSSiGHZc2ZJgxrD6mMH2xq9gac6ZjHbijT1fG6rD3vFLF3UBw3jXXy4R8aibBihifBck3RSKejwfov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VTGxSkU4YejdcKDS3SG9teFKXzK8dyDAfuFBDGb6xzNtxAym3k4EDWkkfprPKWTXvKmZFNh6Nne8kzV5bpv5m8F",
  "key1": "5PLBVA8BtMH8aVSTWmc5VS2gNgJZQptuUEsQs3iT8LnVetrvttY2yy6V7x5TBi4DCRzEbnC18BtKU6QDx7Q1CaMz",
  "key2": "3qin1vZFV1nFmJNBeDoV23Ym4ScCTWaYiuUYL1coTTZVgYGRKEcL5rgi7jMjpkDMcDWCQusBRCiXvJYv81JRV3Z",
  "key3": "5DnuAxuAzbwZXXZof7AcdQET1ip7oTFCEhYm48j5pDRy91TVxcxhYbVg5urAjbF1AMpLNbveTC3kFsdF5mfej47A",
  "key4": "4DGszg9z4HMq1cLq4mDqot7ViziioTT4MbNtuVdRxwGDPGpULPVvHJxEBVZxj9iEkCcp6siMRwkDkVhk4juUVg4r",
  "key5": "5D7iZdQ3Ri7JaDp9LmkgebkeHiSDwCh7jp18UFWp8w5p81yhEzePDivpfWAKKsWJSV7WA7CPAs7ZtDDcPyFacuYM",
  "key6": "3stBL7XYuAug1qgrVn76r3WaWjCDQDkRrbfnYxs4SuteCgFTQMwqTC3KSMueXqh4aXnfuh3MasrocSEPxevDWffE",
  "key7": "4zaGa6joda1zkZ3yZb5pQuFuFaErLDcSQMWgaXSotz5ieHkLxUsaWXfSYbvmvWor4zpdtR7HVZ2pac9TQwv84qBM",
  "key8": "39TBSEBWPazAdKXHj7DMN4r5GkWtzWj4Kc6xR6CkYZEXXrrp9L81NERso6Cfez1STjVpi9LFoN9iT9ym2a82zX7n",
  "key9": "43ZZxFhgmHXdQXjEoEDikV35dZWUokuQqanf9Pb65i86qGEhHhy5GyDzGYaHTEQ21LjSk8kVNKB54D6oXULG6As8",
  "key10": "3BoKeJSZGHrhj5Z6ooXLWywR2FPoKTJnYcUtJEbDD7WbZoyjxzWx3XxkNeoPcK1nxKJ4nUJYowpoM1pF57QLKd6k",
  "key11": "6338uxANAsZPZFmpM2SincHhLZRiMLiX6MjR285PoRfJtPVxt97VMVbXywmmEsdMLJyFaopG4MrTrEdxHn7oo4nN",
  "key12": "7ixPB1LjeB6XHRNDhGi6p1faBLsgYAr6jUy5YKg9bjWoYyMCw44Sd6rZBM6iWqeVvphUVMpMNeyosNKMtQSbLAh",
  "key13": "5ob3UG4Hb5bFb5QhJpWDmyHph7vfn3FVT949AgdmstMtNnsDGh45BAHCDFqXAa1ddAxVv8mx3uLUTsjHn97Xoau4",
  "key14": "5KN56KCDHxgbH42TH81SVvCqmEgQbFnqSmUjeoRAtpjfWUKhpwx6G97NfmK3Wo27Jy9vnTvVFQAaWGkiSxhwNVo",
  "key15": "3zqobHQNcUQMFCTLNtYNVrTWauUCcjvWcUNoPaaXjRM5bChGbyWozsS3u2qdv4q5EdSYBQbMgJVUBnYm5VbSuGXd",
  "key16": "2jPwxKLNp1FqzDfZRF6mLof9nDAwED1CLbGnP3D32bPMmWzDvz79ZFGJ46syUyeyA97c2YJi3pk8ozqeJcFDwdEe",
  "key17": "wzFpGUNiV63ymkGcGnwyidg8zSkM9cYzvm5LUWuvTVCrhdA5GmC5VeEshJT49oir7ZGjPQjXumy51NzStZYeUCM",
  "key18": "5p9jMJqyMNF2idpvXVL1M4LcCUhHptyNkeNwpnoX51b4ofK8UtZYqtB2iK8sLxqNMnmgkdsvA6oGFjKqUXCmuVaU",
  "key19": "3nwb12Kt8zCKSHUVJGxjKGsrkpowAtoSMmP2RGK25wMNVXgfhGpkwLuaLnAASfn1hHYVvJVa4FYQJiXjdaBEaqek",
  "key20": "3JFP5tCseGYwzsZrUpb4rEZ6dVFAk7rBDZvf1Sw2iUTXBJmvtWXm11zUEwWq8hJbRpsNwHs3X9EEkRDwMqAAX9J8",
  "key21": "3kD7ucjd978sFW7oR1eC1znQBT7T5U1YbRH2uBCgECzgzyNRbyvzt2Nau4424FEUKDuvbWZDc6y7UbPAnj7q3kFG",
  "key22": "4wDqk1ifDWbaxACaRRRd9PN6V6EisWMfzfS6BzDVB9yMTcvgdyJ337J1bs9Be6r2kc9CauV9pFHWTt23nYU12nrc",
  "key23": "3PfKiTt9d2QiNQ16uKz1ZEww4dWmjvassaKnopYEzLAS8dD5G7k7FVHW9CwyVYjgTCJmfywhMXmGNDz9gsjDE34U",
  "key24": "HA55TRkfKDUhk1ixR7XPir76FDsF2FpUXs63UrsrRNguzntuCrSWe3eM9eQfofJDt5Vjj8D69BMQhY4AYMa51Mt",
  "key25": "N2DUVt1SBiz4iHrBSKracaQzLpeu7t53xwgRN1VX7aHVAGDEKHS6Hhb6BqJ9qLot28ZgrfjNpCZ1kueLd1LQaBy",
  "key26": "hKETNtbMdihGdij9uqyYJFsmmfZXAJ9epzUKtjiUyFHqWUYFDZT7hihWfC6oKA6Rbqu8rJnqJ2vu3sZ1ypfetP4",
  "key27": "5dA1Cx14gbdqomu6b3aQ49EKSWqx1rcH49z5eE75cpVkx8XtgHERcvNFFL6d3wjSVsni4hS4YAdS3jtf6t8phyUf",
  "key28": "5NsXDDzwCpcJwkrh42nYvxR6HewmG9RRuNZoq8aRuUoKuAtsBFqY3rYv8D7bB8xHo8EukNEXzw8ELECvAB4RCZZV",
  "key29": "4Vr4uqppjAgU8nKY4igbDteq6eBA4cLnfbCEw6vrZE4jee39fr1wLHuTg959pDXdkRnSKikmSKzb8koFy14iYWjE",
  "key30": "3hzDJ3iDm7iWCrUmA6i4KJhw3cpXXeZdCSzM8YwqNTyXcZAXbDJKBUDXvLkdp3jGNgPgiMCDzMSKwsE2Sm8Zw4JF",
  "key31": "5n5sEKfiNzW69F8DuYAkQdH2ofveaCcCgYwp7MxyUF3QFthTXzKL7eg5Nv6CXwcxxFSzct4v4AhNqTHjAzvTMBQC",
  "key32": "3hbaDpCEMDvnF3c3BitLn6J7e84eGZteWy9UtrQBqFGFygWy6dfE2pn4Z2sFmuCwM13bDCDvdx2jrExBePPYMqvy",
  "key33": "4HuxvS5uN2VELxSdGTeKmzptGgquqUwA4qASFGT6EtwQwQ8y1VYMgUNDTXKSiMbQ65uXB4tpYwmuKfJ9mgAH7ESX",
  "key34": "5aruWUVsvw3g4Rcba45HsmbbhymrAxrDLbU1Z8CyuKVp4mQUrjBV3wEovVoWC5DXpZNSVX72qes3cQXy3VU3oLSX",
  "key35": "LgmLSQFMDswrQJVaMirRsV2LhVP6U7unETdjWXC8SXhYtAH3uCWFYvt2S495Q6gXa1sh26PZdxyxMD3DWaRi9MH",
  "key36": "buE7K6sSa42cbYF4mRmxMidHdBpAykiFtGfWKn3kM9PBg3jCnzSUzvnGBpdXRnc4qEtvGVHaYwrPGF6Ti9AcN7K",
  "key37": "3nG1ZWZzEpjo7KyLRetQTLsQTZ7SHc5WdN2T9GABFrGhNxqdvUwNFosLp1FJ1GCbNXZW5eSD2WsaKYwesFJfMVtR",
  "key38": "4uCLKJ5g7Aa6CWdHnATJtb728g2LnphK6vjXTLmXmeQVoL6gXmkbfQuq2YqnZ94sDU3pXfdMh6i4viQr8aVkEtbv",
  "key39": "5XeEQUUNCbHLShusnPHYNjFhUthjFewUvmwDxcf56Vd7saUyZv8eqwxbB6w6ATtzCa7MvbhynYieMhN6SaDDhRcA",
  "key40": "2BMkKALKr4YYSbfjDBZiF3U3CYuihUHWTnoc3NJkWxjYGDzyZaU3mApv7ETgnsQTw1miGRmnBDQ5LWn3Zg9qdfFT"
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
