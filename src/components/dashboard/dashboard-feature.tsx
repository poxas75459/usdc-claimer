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
    "5wUzKV5B9uUMVLJXoz6z43JhbJ2uZTXpK2UqZqa7WPrn4KfPMmAyrQGwGNj3Dq5w1SWpFeYufG42erHQS3mZPJ6G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "233pEoTBgfEkVa1NMhcshf3sKvyopRB3c5FedSzXdVrEk1RiYdmaaqJTVkGMB2w9MiGzQhVPKTP2pRfjAW7rx1BT",
  "key1": "ShTde68u1N8ZnALamS2EyFK4qaAHdpe4dhyPmySpCTXdhV4GwavSawXjKANaJ1qSvXtZZXMVEaZRMonqZq223br",
  "key2": "5Y4X7RysiV2d26Wxbpo1hQD3MeYnJCmEBzpSZW975d2a9c9yG3Hx9H5nwxWTkQd3ha4JpM8MPhoPVXuV3fh4q7nJ",
  "key3": "2AreUVH8FTEPQ39L542VpRnrKMnYevdDk9DLDbjpb2z58j7dtvBtNCMroFTnQz4Q3U4Loi2qur5FQUoR3zXQyCpU",
  "key4": "2krGmS3QXU2bX4LhecsCzzPCHnBfS6NjosciXQ1CXuucmG4nJ3TsQgDZBqNnzjEWpN2SepVtnhVLXRSZxAi6oUGB",
  "key5": "33dcMUZpupv4hV4YNKkLbnZFQZFDzQS8of6xNspAAbxq3fkyUmsWqyuqWG9W7NmACzA7q6i8uwjUY29LVr1h3Xi3",
  "key6": "5V9Lq5W3mSoMwoQPJ4d1Yx4MoDCJpb1YaP7yp1TJfS6P7Krr4SvGCNxSgoniK2HRndgJhxE9r3bfPRNZPNEbhiJJ",
  "key7": "516iZEgVwkJ2uKY9Yi1eiWddDSGdCExidSYLkNnCFWJaKa2KLSWkxnctLymiHPcUb6S7TMSHfmrPBbh345U8HSLB",
  "key8": "5fZWTDJb8n4doGPiTvsjHxK8zrLF8Xx7wwi7Mbv7ieRF8DkqA2gb4fNduRnqa3qEPe2R5VDnYhGaBNgwx49gpvxT",
  "key9": "4C3ky8kAkcqbSGzhuAX8EwpqC8TjgbuXb5tUx6naEJS2GkcNEbwDQS8D1BmiPdXVoq6hTbgsCPuriCuAWjh6C9dV",
  "key10": "5QEf3cXRFVw2s2vRmf3sqyB3LqbqeYq3zM9xqwADfKppJcRFE91sSeSvzKzArP5BgupyjZDXetbdK2xL52rnwnjD",
  "key11": "3K75hzswswTBWvC5XEK8KfGFFqiVb2B6DQ1JG9tjqrHAD1PuooQyXmTTET1bm3Hi3UumUo3Fj67VAmz5ZKtQJatC",
  "key12": "4ShZ1Eq57fb5LW4qnvncyqHwM3kTkbQ9JsmE4e47F6KLU7EbdNJDALjFPvBb9jhUVgwQGMdd2fAPbKR9SwoktLnN",
  "key13": "2t164wEUGkURJ2ZZL6cUHEiDVNFoFjxjXZchZxtnDNHTAnnK45FFKsheJUgDT8tqtcjUMbCMHvs6DgYkyYCP8zLB",
  "key14": "21XHrUubpPMZVujScAxcw7xYoJXfYYbCT79pThvuKKZFEeFou65FdU3Fb3gDaAHb2ZmbMA8nqe3b44w7bm1CxKYU",
  "key15": "29oESgbyEvz1j1mMyfuvBPb9ysmGxw4MjcMpPx9cPsmA45zxrJMEoBtTSH9HktTd1DnaavLp1SP8YxsYpzQ4bkmZ",
  "key16": "2aJGo2XQPmZQUvoMfzuC9xT1BCmxXAcK4n3jTtqzEzCDU77nMdJRCWigcpMcWga1D2MwTgPqcPWGDkVnNApGgXJY",
  "key17": "2SNjTz5cuATbsx2cAnkfyZ7dqxJPCQGKQXQrY5UnzTodVaDwNcijRKVmsD73QX5iezR3iyp6LGP6Ay7m34oWogG3",
  "key18": "4yTmvGH3mqbkMVg6McHiFtaML5Cj9vjwkjCjdQANpEtcRJ9JLVnYGsZdi19hL5LLiPGvCHjLJxpEz2hLAFx2ZUYS",
  "key19": "3AvM2makxZK5ywAVpaq1WotRDC6ALfPF2GH93HLaNtR4fxfCJ8taiVi5qAFZ1YWNW45cod6EGoQGEKNKiJ3yF9rK",
  "key20": "5sZkNHwgCqpuF2zKYxog5e5HUab6SQ1LLeLg1gcnDG2ar9dN4BLC8CmMndSvYCQsMXyaWMfErGTXg1Bb2vEs7trm",
  "key21": "J1cf862sdTCxnhhMzrWQsaDhNCijG4EYACySTvbtQZhHVm7pnn7PaCN8HKukK8BhYop9VQt44mQFzEb51oHDewp",
  "key22": "23m46yQCLY1MQqp9nJy4Qm2k4vpWJuanPJpcdGw3ojwz5hZztHxCXmEQHDAb78wDC1QmmivmMtb9vDaJtFBE49r7",
  "key23": "4d9Lr199KiHqMrLPLpnTSvpPFScCoP2qQHxUsZWmFPcJ2pcdBRDmtSt9sA8E1zXiCR9GXFnonDbDdWV1Xgf9imN6",
  "key24": "3bTEBkYGcxuhd5qhcjaaVHMvUaNooMvLVdoxgpLB2mfjVCqU1X4LRAh5xnUVBDk6wGSA8b5C4Rb9BkPhDpm7pTiq",
  "key25": "4SUZG4qJ1UqySctSnEJeaxGhhN1N2cTdaETrqGqdJXgRkxwxpCbNY1yxK45sj6WrVPq78nEZkMM7tMXwficyXox5",
  "key26": "46ksPCNypYrpBTY5kRdb61KFu88dCajRFP2hyhBcpKLya1BoXd2gSfiVdtXxeZMi7eAcQZxQpKp7YZfrwTm6SrHB",
  "key27": "P2YsCqZt3uPfuEMG2sawmWbZybNNFjz2be6uhMhjEgpAbA23M5yDqmEJnLyAqfGHbNxPERu4kV5JdoYkj48QJom",
  "key28": "5uRtjb6y3vMq5bpCsgWkACExkJNGniqS7EbWTQxoxwGu3AY1wiisdGu9PY57yAUEhUK7BxBgVAgTfeuw683ahmCb",
  "key29": "5UDhLXe9dcdGW8qc9GmDHnaFdLFJU332CNixGrUaoLcCFBj7gx7KHEuFeZGDiZkhb1281ukMSePLZv2ebzF1gjzx",
  "key30": "pzedebB8cp2RmddWQMnf9dUebZGQ2UZ6L5rZAvtqEUZT72s5cdTA9C8PyKiqHSxyD3mKbq7ukqbukHU9KCkCnPm",
  "key31": "2NeteXpeHuXk7amFWFWM4ukN27LPxDiViRNwvXbwsmVWNLAraxhAzyRnoZaVfbQta2d9uriGuwgzvdzEi4iaJTUd",
  "key32": "3CCvCHPCKvq6aEke1Vy2ebYhtJqcKPgtM6rRhsoJku48JW2H95BkeK5aTP1BEASmoh37KTrUhrLXe2pmaWAjKFcg",
  "key33": "2ZUvGbpumca4EBYn3cgjm8VC7jNetRuJ4bRUNzofeLdL78x6B8hhRzFcA3X2Le3eRqVyGzg3tjYLVDrTJ8mZtMXi",
  "key34": "4EnYnjJKBCwNJ3qjQBe9qSsSyVB79KqwgbZfEeYUmjt7rqfDExX5PU24HZkWTNedmCxumRooVGXsVqBKCjj2UzDp",
  "key35": "5d8iTyN54szYrQEmjnRG6NCFmFQMb8ovqEwhdwRdUXgRDW2z4FEVQxUpr9TmziYNeuT4A4xuhAK9CdFay4U3ZM8A",
  "key36": "3KmKHtvvYigcQyk3wwVE1jrc9gMNuNgjuryGEuN4q6WyNN9J59e2apmaXBCgZbAcuCX7LLpLCyNzc2WAeaAB2rJB",
  "key37": "vsP1hk1bBYb7ttdYnmJQfNpqyFkW4GgvVDn4SBcYCczv5niT6L9AfQxFQzBR5LcrXfLCBYFZUBztYTa8kkH9gXb",
  "key38": "5uAXvdrSJvFvGM3HoDCndgLXWuX454Lwa5eoXowhHs6rpPjy42Epx9KQ2c6mY36bwFE1M2AAG5PzLp9QhMxinRUS",
  "key39": "CqLjXHwWkdn41mrMTpWLnxv1BWJT9Ndb6YQGbd9Td9pTa1gJBC6E8cDrHRASU7wx2qKgGWsyfDBsE9AXzs9VUQb",
  "key40": "5GXiT43FPYHWkHjdbr9NC312z4ePqGMSbpZMtereDh6RgBTT8eCnyfgpUoCREctHf7YqqzhaELFGgSX9YvTpFqUi",
  "key41": "31NE253GrcmEg1KZYYdhmQKLwFc4wGLPSm4Abk8ruQuvLkcEvzotFmUos8megaTbnzxfv2ogsY9v8iSsMiyqV5Zr",
  "key42": "hP2FcnongqaDE9mn1guMcYCCaBbv1YsCYmpa4nr5ucmWZsK5SdCyga6wLUEYFAjB2FBK3QJL9sDEQnpALv89q7Y",
  "key43": "3xHpMhuMxkJMngwnYpLnfTQCBcFiVZVb8sX31rUJ7KWGbCy4USwoXex7moQoWCabEYwAq7qfqBfdtgUrJXLoxxFu",
  "key44": "fzPpMn9rNwWrDD665kfk4YErVkmW6jKJsguS6kzyocs35Gss1U7zyM3CfH7oDhBhmtBuVrzGxrGYePu1QmqPiKB",
  "key45": "cWzeNBZBEzEpZjz3WYTn64vFrKebLS8JtKso9R8BC4oghuAsPAprNLmhCrua5ddwHGnczSsubu2Ftc72uxik5sj",
  "key46": "hTowczdSbvEhx3ADGRDTjk2LEYTiBtkjMYacbxt2KNatbQjbARZdb4LdySaCxRDABm155wBnzdMzZPFkckR42y4"
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
