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
    "3Fc2B5k1qUqF4M5oek8GtQcoQzVrsmWQtdHxWXn1r6qCKwWVgY74abetd2jyimEKUcABAT1qcEZnEuu2G2AyXErE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZZifgGAVwTcmFHefGBDqJ7F6HNK2Bx2Zys3PcMH9VR3CUaXGW4gmeKV8pYSUtiAw7bPT4DHpQa8Pevbaz3mt5CH",
  "key1": "3hKeBo21P3MJdPUEjTFS2kiARfTv7d1FF7Qfkon7WBL7pcHLR9pQ9DUikaxNnxoZ8eCi555o48DhuhNk7cuKojVz",
  "key2": "3bwXeEYKmCKfxGsBsAdQhEt3owp2MZ6Nwh6SYVEWoYs61t6bnjri8zmsZ78H9FCsWVW2tXqvLxBW8z5Z8yzpQXH",
  "key3": "4xkS17UwsjS5BibykMT6sZHZbPApsoSd4RmuCJo1BGsccFLvak5muG3tNs4Nm2p7ibgRaFDzsMzBZxyNxFq4YiYc",
  "key4": "63dTesR1zgRoV67Wh7ZtX8TNa7VidmhcnJaGc44LrxoE9bsoUyYaZWMpbzLHRmq7oRfu8UNxpLCawU59Z8YKrseV",
  "key5": "58CvuhpHTSzvgYx2MJ5rnip8dpeuGFDtSXUstiDbkR5gZQsEEZYGK6KCmYfEggQBiuWXzocPgVqXt3gjiEPuMRWu",
  "key6": "2F5hcWJoiuz7b54Nu27zwEEC8keADTvmfMhbBtT2R9U24dxpw7f8Lp4HRnGYsNkVea9kZ1k6GHSnNHvdTG9hJHKK",
  "key7": "3FaLJs9PH4YS3bfLjx8BXHEFdJRFtm7j4WEnyoNyMX6Li7ypwXgvnxer26iBkbo9hdDEQiocVs37gFnrouyUa9sJ",
  "key8": "2U7etBmVkuqoJpV9RiiB2n9ycFZxpfxVDzKyzTWH1CgEeAeChre64YgXVDWDgh6auDzWBtDcLKaaqzLnBYFbsycu",
  "key9": "4VoFaDWRepszLp89eYCz6DdcY49LkSocoPKgvGsX4YvWHdisRbqZ1BeJuiC48y91dYQdWusff5uGEfVnJVzaBGoe",
  "key10": "2ZpRNKWPWVwFSWVS477KJAR7j3nvxmtLn43AZMUfAS1ArgZ4fzpuSPWpyNowiiyd5fmXU7E51BjXcaCdWJ84cYyd",
  "key11": "3ASaGdsaHCyCdVNHfmgruasY3rVKffmAdB88TZ7kNrqXk9kLqxEaaZi36a8Qp66gjM9TKumjbq6NtbVuz2HjQDhT",
  "key12": "Jv7ANAxjoyHkwE8uTWQeJV8T3v725TjvVYM1Mn4t9XmpB2AhoSxfWZL1dpGYpLm1TZGMqTJgA2aVay2NZkAyNHA",
  "key13": "21fuUzMVkxyghsyGZDdRLsrf2h1KfFq8pG4pLpZWcqXCmnf6m52aS1bhrBZdftigFMmAS9ifut18VrV4HNxC69Nu",
  "key14": "5jbUWdCGc9B5cU9utsQ7WtJh4CJrpcm8yhUFy6gmU5WHKN5D68ZTP4HBGX2N2qxERctL1AmBijCgg6wQb3F8HN1Q",
  "key15": "3UjrWs95Fe2uWcJXkpSH3ezj3DjsLy43AmdmQ7KZ3ZktEb2yd8U4BfCeYUYsedFRxLe7JmcUPhP6Bdstw1UFQtNY",
  "key16": "3xZ9kSdDJwCQDZry3tHChdq5AKuFohMSxz7hzdB85Rn3XKSK8HWiLpWG5wHQipks5KyFqw6CkJ1utDsjBY9SqHiE",
  "key17": "3s27oWsX5gyiRjbzt8gssjdwiWq8moYJgGKquS8xtWgk4UJmngA4v3h21NCPFYqLjktQQj2USNsWZsjZ6pcZAWrJ",
  "key18": "36cSKNUN5G4wDAp7QQizcFiTHaFSvwxXYRkR6B3PNcMFR2uDSVo5LGcpxjNHgg3jAEKVpJe5f5bsqBuZarYtuTWc",
  "key19": "U4U1X9Upajp36W2W8uwUeXo6j88KmYRT1oFZ6mQQUxDN7MCWEULezE9M21LxRz6r3aeHqk4Ath4ZWHvh2f7BzKM",
  "key20": "5KxD6odswtZnntdrpTirDekxvnvCrX39YH2rs2fRaDbZ7fN6N4SpY6EabtgE8iv5kyizGCeMgFnuWkEubstVzeNL",
  "key21": "3vRzf9dB5c9F2jxWdjp3fLCDqgSAZdkMSkLWAvPNNd3XKmwkcgjGWhc2BSEUFvH8TFX5qPXCw4vRX8rbTdWwAq4q",
  "key22": "3TKuFRuztB6UTbrjiQf4qgh6YRhxuV84xx9Zwv4b8HQeqajV4nzoD81wjyyYGCCoVFjEzxo93jKNWKAqJRHaU2n9",
  "key23": "4hx5FozWxCgoH19oYzK1SXHmMmw1E8CmYihboVCyvV81M7kmZeCGoYzL5Zztxq2D1k2sf9pCQLULgi5YszcpyYC1",
  "key24": "4ufr2cs8aYTDrxDarwmaAPig2wj8pNhMP3SBbai1vMZKCmTymEggjwPktd9g2FGStQNCXEMiEGrhoc3x3uRtqt8B",
  "key25": "Z2Xooi9sWnJrb2WtNPfnCUzLnZRi1yYWYCk9qwqyBiK8Dt2ZMrES6GAicPMxCSJTJoLJzSy6ssa32gtzmt1NHJR",
  "key26": "459Mo54JdZrGXjHRRXo7WouXXLm1sqKz7hdCaHpWWc4ywgC4uAaWyRGr73RPz2vCxbKnQfKzAXFdMiaJFKpyZ9UU",
  "key27": "3zpNPi9xPj5z8R6YfFBkHbw5LiZcQFm7gT7yU6e8KtdG8jumS7eHRdCE45j7hre1WRnAV431nKeYjHDWGcxdazU4",
  "key28": "2UkZYQnkAJymjWKcH4MA75HGi572BnDdZ4wUT683zHEnzuwpBB5WEaPzZvVS85hbT9y4koLtYgWUaetyku8AFKeE",
  "key29": "2A7rGwgkTtdzjCbhB6st51sqT2PEpucY8UiSq2nBo5s9XaMsKGekjeeW8eXzuZ3bzypsd4bZDWv1RUh9aqF6cVin",
  "key30": "27fc9XRB858NLNXWDwumwjVigzgWxiagCvCSZ97YrEiusopvPP6qHnisRQnYqvZ5L9PLgCyjkzY86dLtbVco5Ht1",
  "key31": "4fL4WvwaYJqN5aZj31B5GPYwhxGmB1FFSXuGogsHKDdeRFzKGCEoxp5whEHFo1UwHdyMjXnktPjboYbC16QgNe6F",
  "key32": "5sqvfbrYfBX6wReeiTiW1atzW3t16r8SmXWtLGgAK15S1kpjVhJD3DcTYsibJ4auubP8gkDeX9UZZ2q8pMAKXauf",
  "key33": "EZa1Ly9nFT6uiirvBzzhfBXkLxC8FfFGiU3b5BRcrFakuvpgwirfDiMHLa9fzsb14AQKDwdXWjw1VZq5ej84cNq",
  "key34": "2Vtq2NcB8zCbaCRBWiPo2sak5bkugLVrFV6i4v4fGoiNv5HhSidxVYjimF6ciiV6qzCCGHGqQTPhGrdtsFLDmcmF",
  "key35": "3oahW4ZyaEwGBZfFBnEdFhJw15eji888WKsP4GdEcq6kW9MjiFjA37qrnJQ6gjkVJHqDzXGYgihB756KfcRwXgsS",
  "key36": "uAiaSJYzFaqhqVdrQD3a7ZSfuEeTF4HMHKtxvzbFgoYetnadVG4CoSKyaEhicFRSwNfKgiyQKxdkiWCZuMHEWxB",
  "key37": "3h5Rd6EkPmkKaxcyYyhGmHmHZAfpmmvmHxLKKEjB1mWdRpHFeYctRF4wtbs6qqBsBAzfUhTpewbAbYApTQi1CySV",
  "key38": "63kHn7Fwj9uPwzpcrV52GTYz4ZBCCwY2qxbJwcR6zdEp8yibVuV9W7pLL1aC8BSyX4jsoLayEkXQxuv69A6p8ZSu",
  "key39": "2x18bvkRbbBYKK32LVp7vtcwHg8nvtE3dofKVjeud8kLXMhMqdAFHvVaZcEsUp6m1H23gGqza5kxXQ6iyePW8zKR",
  "key40": "44MrFjC3KS8XfiEhAdDG1yNV8FSgLCwhCuQTTK7pLtC4dFJzGGaAKGXRttcmG89WYRrGgXW457EXLFSnTXiHmt5",
  "key41": "5iQKEBb5VPbN6em8Bt9wshQ6b2QPHmZLK6rSYJ5p1kDm8JaBVnAFHfxdsci14ffErZaWMd8gqp3UecF57RakgEmK",
  "key42": "Khc2KzsPh4n1QaoppntVUfXYGeCdqM74dM7jj7JgFzAcpTJCs1yYQYV6k3USua2TE1fGHpTeEawfzr7XN4e8v4q",
  "key43": "2he1Fs88GVh3dHaEcAjMgNJCQXfG4qhHuFB8D9vtdygPqwDmjKZJv3PxnhjhmwNtyvgTqVdJ4dxFD2rqCNrZrcvU",
  "key44": "3aHspg713qck2baKcoGQJXk88gMAJwD42X3BwGoN6DeeuuUYmGKAvX6ZTa5tzzPkgrVbez4rHiztGf3RPFrCB9c8",
  "key45": "25XDjUKQofhwr5RpJmRHVam6we4sWVMxWTKYEoZoX391P26y3ohuSSWVdonvZKp5SvxRmutkGM7b4WGmKGxqwHyU"
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
