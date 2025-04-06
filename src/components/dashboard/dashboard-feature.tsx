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
    "BfbBMowidRwaH7GpwTvsiYU9NJgpcFSMU32EPZRv5aHdKdGkT3ZscBvfxRYnVvC2yLWe8rw1sSuh7L7rs3FJqQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bVV9bmW1QdH5GRsiKWA61joFYyvaowA5RSygFJMVbXGRcTrpb3v7RcwNvhmxXhC8AP52GXG7KZb59B2DLKVhuF2",
  "key1": "31g624onfMoNsVCdcMrS6oqrEBC1BMePVmoB1w1xkcXBFPAa15tjwGAPfjFajW7oAc9rVbFzGarihRmjwLGiAS1S",
  "key2": "25SifKEZ5RMj6K5VUkJhkyXC8tMFk7aCdneXi3En9XDwtkJuWKtjXM1NQk8r3v92ZDdHXmSzfRjqr7Vadn3iZwDh",
  "key3": "2rYg2k9MiJk8ydajE94yMFhMe91NkZQxQ5uxfwSVsyewV2KnKNy71pn2vdYVxEbkb62UCCdnu6b4oNr5XqouXPdQ",
  "key4": "3Ndd4Ad46pQcTtUEVxFS3MnJ3AcunfVD4adPUqiuou7n7zZ3dd9JZMvZeuZnoXkHGXsbq6gV42vGBXXCRgTCRwtn",
  "key5": "57aMUZb46XRbfi6JmcbpHqYy6Xg8kVAGdrevkeDk13ih81eUj4xKe3SW27qjeRU3Jw6xwBjRQ1eH6vdQVY4SEwRU",
  "key6": "647xXNomXHT2XZ6V385Wu2nDwUUV6HmfbmJxiG8FrTNLchHVnSxQVPxAe3Mmzi2Ke9kmpSHZCigJnnsrb6Xog79W",
  "key7": "X4UE5cey39KNa3Ee9TP4SYwuNcu7H84MjbTiaxRAB2LyvTZq6Lt39wqmsWVmL3tu8oFCKCzwPxgfP1jbAfAtv97",
  "key8": "3tvJDWRWT6mJ3EBV65f8NUAEuGaZufjbQH244KX9JiwDrudmWzMw8tKFVjDwdApAzbMLPBRCbJoWnYXCg5eY9iWc",
  "key9": "5sosjFdV9eS3iFKw41oagZkSCzEaN1LSL4T1n1yJ7359ijPhcKdWav6yG4bE4i5J3VMkBAtY8XSZAUY9Nsq64H5H",
  "key10": "XSvJ22U2pzaV5Y1DKhPQwohSVktv6RD6L52xHZN462S3ERLhayAEMzPF8ePwwSp1jVNBTMsMtiEg184epmqnFA3",
  "key11": "K9HezD7s5YvthbAhiT364jgW1evcv9WnzgNySfTxzVktLXuZaEGdxkNoSiKnaUnAfaRyUokz7DeSj4yvdw1fLmv",
  "key12": "3fDEUAktjMc9BE6Ff7ff7heXchANBQgkoePRhoKDAd54uEKpgF8tojRN1ZcaSi9aXKaky9WyfsTVfTP7iB5SFuF7",
  "key13": "4VnaPk8CX3eTGJKCm6EsfY4dQQsG4XmDz61RSBx2nLkLS57PQxxRBWqMp4pbbobhQRbEqyT5KEVsqJsMCLRF8yLF",
  "key14": "46yQ1F9JUBJtsco8688xWjJHmto6rgE58cd123ntLEvhoRNFLv3MxBHRvukcERw7fK9SL5RtoU2EuBTSSE9KXLu1",
  "key15": "sw2uhDrw4RtrFo51E9SrsKxkzrR5YZ5swWTzTFiPviJfXzM62NRP3LSEt265fKpT47dijvVhqgDbiqQTJ7wHU4Q",
  "key16": "5yAKtDeTm3Kh6Jq68HTmTabWBP3UnHbN6o7WvyGJhvwu5e9MYEWoZJQyoRTf8LNKmArdTnJJbDs55hh1UpNt7ptv",
  "key17": "2tVXeXszGJyNj31Qs9jQC6E8vXwpw4W7qmHFA8LoSXmDrwqqUchUR3qZMHdrHknDKCz4BsXwZvvTn5Cj64rn7Jd9",
  "key18": "3LjQedzNG4p8AoKgz3ukBjsThXPtxRGKwzoLdd9TJS3ZXK7amBy7V9XpvtG5ZFZBsYq9fYG9ksjMBzjEHPLVXg6v",
  "key19": "7qpstfbqjLESDDdsmVLFDtP6cVC4w4UvwgTUu7MHMPkaABZSKQLiu2Wr1a3STb5LTgYTPstRuCQb4hxy4vaBbpU",
  "key20": "QzMHWzRkqYakmL8kCqQYDAy6FDG4hYnFK3yGJvMG5GmkeEqyFYq2NJoJxNJioFuQdCzUN8aAF4f56BELPM8LFvB",
  "key21": "2skvCHhRtLAhaeeq4sg9nLeay2Q5aWDoikmybZ8dw795qvJnCwvrpy1Es8JE1CDhjDnF35HQvi5nmBq2QUXi1TRV",
  "key22": "xPn2ctFm1nSxxSXoQch2NWs9V85njpnxwXiSf3AcTP41dGyHjHk65NZErBWaD8D7bbF3Lzyr8HuqvJGop3iW4mv",
  "key23": "2PNwysEqkJEPm2jzjHYJuuRQWyd9e2oM6bTxxsvHKPuxWi3WndBosN2JV478r7ViXQPQuSiCQmEhsstegwQaXx5b",
  "key24": "5bNHeGdHqs4sLMQqYUdWvqsQhN59X2ahhbwureBkUjWBWGMPVRXWTdTBuvX4vvDGr1Y5bcbEgFFouD9UuraHrmJV",
  "key25": "2nvkNgsNiLAEmE7jn5XJjDbY7HuAWURGDfRtsUmFjLxYCmPkkouEe3Qvz63LxBJYsNWUytTDrXDnE8eTiJxgLxnS",
  "key26": "5v14SFxTXKcVXJ2GmV2HmTFqpkwrQc13cQBKiEGGLWZnHyYQqbjfZEmnRL9C93mDU3pkLDLw6V1oYivwZY6Hsyrc",
  "key27": "3vNeRgrDMsoDNn91f8Q4mKobbrXwDHZmBmN5cj3xqyRTFj1xLL6zKXDSS24XnepbyDSQhbVJNPYrm2gKuWtAATD6",
  "key28": "2tUXVhfdhHssZVDBG53V8BANgHMymSTaArVZGNxbiwAACHbaPr1ZJuqhqGz1ujmV4DQT1MeMdxTRz84KUyf9BmqU",
  "key29": "2tT4tvQzebybyPz1KkmBGKmNKNGC35hHvSC2XMCe5T59undyRiB5YTSvJeGzm7y2ncJ179CcaJ8m1aqxRkUn4SD",
  "key30": "4pwkhwqZ8pJryc6a6m4je1QB8fcvP81321PyW1EdxwG2sczfTrdwHqt9uea479xQFxDaDwe4CMLFTAhQeAADk3B9",
  "key31": "5aF3pUifqsutvTenho5g2JX2bLvBy6dZQ17eGCYCAywJEocVLCpQ5kAY2iLXJP2Uz8HBPDAKcLbpXfFDQWr2hPta",
  "key32": "2pVMrBGz2Qvbon6G5YP3yKwxXE3FUdyiQ26yYaN8xa4b4qyCSbWsiiQBtqdWyYRoLaKM3m53Gx8b62n3ocYjRDSW",
  "key33": "hDrTUqJXkprGM7bj9NTMtNusjCKTzGoF4skWfRFTmDfkSEHLycDTkR6pJ8BkyBTe2FpWsxbHmd43fDEQboJmj84",
  "key34": "yBPuEshTu7jvXgP2n9tBnoFS5eEtGLcTe52yptEYpwojj2aCxMVWqKe6wX4BVABqiebzfundt4w7zEBtCFj6Q7W",
  "key35": "4aiZfSntr6GieEWErJeTj8YiHZ136rs3g8ZuK5scHVz93L29vG2eUv6Ep6MSyqFuCKDpsroMbiwY7vuLQFp24egF",
  "key36": "4vbtWaojokpvGDBfQ4cVPW3uBSzy5zADQr2C3hMWZSbiVZBzceBzz56Huo4qkxcvSRX37MPKSnSXDWbpskWL2WCa",
  "key37": "1P4jopdUyUUWpQmPq6csVBjzyK6qU2ey39JqRqV3QJZHKCd3cgNJhdCw7PATnaBr2KhFsCPiK84Lt6gaHiSL5hV",
  "key38": "LbJQVCxfsgFcJCT1gnLkTHoHaQ9cBrMSqd9jsUtBFjoPqnxrqHXTPP9edVkKrEtaWi379SaTpHfRGY2eT3ZPs77",
  "key39": "5sFDzQZAMG1fgXcaMXn1pd5s6ApZWuiZdUqN2KULyoCHBJ1UXW5Lvs3XnuVknnPF1EzL8pUPpftdwdCXXKzKDYzt",
  "key40": "3FRs2ueqneRABfp6U118zw8DP1nBgW17ERrhPPaSeaaXs1jM4dhTBBC391p7GGWakdzMddPojnY7kmfjiFXHkxmD"
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
