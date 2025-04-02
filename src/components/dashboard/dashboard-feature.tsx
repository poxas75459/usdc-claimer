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
    "2Vm5PrBTEfRsrrxu7QiZtXnHBS9eqBdY6dpN76Q7PXyRLbHqDXjUMurnTBZNU9BpvjC2ut4EKFcsPKk29m9xrnMC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bKkbJuPLgFSqNdzE6s3t1fgxpT7oDfvx2sJsuxTNyU2RJ9YFxnhCEUru5jPf814BF1nhmDRdsRjg3DULrA3i7V7",
  "key1": "wjN1b1M3SnEVLwt4y6AhZQEThPyVYEPFViLgn6NTP78EvT4Fbt7CrWfNo69LNYVhARi8DVeNEcaexxn7WgNwszu",
  "key2": "2PfgMeH6TsFJnU6iZJos2pFy8zJwoupPUwuyGA3NQt8FghCSgJH7Aru4AqzqvGfZbW4N5yjriuf8UTdLNQ2SHo3s",
  "key3": "22N7Ex2rVTG1y4k3eGYNHUQ72CoSDZuW4EsnWsmJDaC5tupE7Nqjy5n1QAjZRdireNe37wFLHiVjHL556UyAeFyP",
  "key4": "28xin72DDAvs7nb9gwK8zDMr94t2SekFJ9JmvgRjie5BKDs3mNyofKA9yGVGo43zhMv73XewB74aJVuSxiw9JJH1",
  "key5": "5xd3GYPnLjMdZT7CuZ2arw8en5BuWE3dMiVZFEHqW2H7S91pYjAawNELLZMaMP49buECRwqb7pqehWVo4Lt1ZtSk",
  "key6": "5pUNC5k5zoruiJk1Gx81qTgjQWLn1M9KSbQGZFcN5Eve9niHVcv9Y2x2r4Q2yg8gBhAiu56QWVQxruzT2Q5VhjiY",
  "key7": "2vq4HrG47oT9w8dnBTVDMJ4wEbXD9v74VAHkPmNN2C8hsPLh7r3HWS4MzffNJy6jmpySyM4mm3pfLxMxbBhS9FP2",
  "key8": "3GZzupBwxxqdjgwyd84JPQAxNYhoEWRVmfQLhyX87wAQAvkaxc3QBNgcn1ZQsKheKsXyAKhfsKJP6AfukqRsTDcU",
  "key9": "4iF4EEcvWmaTwNXXpzEBvzFrhWnvirrVDjspqeqojAb4z47B8K3Y4KJHumoCyELQkPybdJnUH83qn4JVLKsqheJK",
  "key10": "28s3qEqinhkjADn8iAkqLTng1bqLjAGtrxziHyLkGkEL4N6qSV3WSbY95HEjSaLKYiBSfSsE52LQq4tYEjUQDHK7",
  "key11": "59HpbCNXJuJYVyfPp1akVRrXmBdLQmj3Tn6Hbb7KCCu7MPXKaxqQkFCpYf2RrRS6igiCBBYQ63ZSDpqAhXDFX7wX",
  "key12": "S6h8McqQqP4mbuAgyG4GvTELkcHS4iADMv5czJbRHtQJ9uKdSvJ4VmbGSxqRxFTRF4NbGpSUxoFhd7Qz2CbUkmA",
  "key13": "5brd6e1gzcCpGEZ1zPrrhRLKdHzGDGU5HyKqMukEhHfnqpV3tqXSfQAFEwCh8e5Zx1QicPT4En1yF4CxmfT61H3p",
  "key14": "5EbfLSSE4TAysXMJJjqNFveDjtMhBdgzboD2m6H2vRkvmSBA5SiCPNH5PkeJga1wj83Ypctpa8RrA2HAnxZGqJ44",
  "key15": "4LXAdDgnXL4nsPGS8gsA83vvH6A96g4hYc2KxsZaZNe4wosyQRi84sp1xwfQziJM6qSoowHAVp94UtSHtXP4Gb8w",
  "key16": "366A7ZMLYq8q96ciR4PYZhro4BQXFTRWjfg2gZh1FMYdoHzRJc5NnwVDNsBhiRyXvwDbZEaThoErhXAGf9LnMTLV",
  "key17": "5fbG8whgqEn36uovtHnnA1tVAvH88w7Wq54n9U9K52AWTdp6JdwC5YfFaCK5WaVYjxydL28PfJp389c1LXJywnKX",
  "key18": "2mm2KRQCtNLDCTUZKshjCvcNYvjLoLxWmpMqFZUYbLcQvQUmm4StyA28N2qfcQFNZmJnzcL2towCsUV3DR537g6B",
  "key19": "5pq1UZL5pJW1ofN65HECrbFs41Q1dJp5WauMUfJAjY6arPvgNdz29qFL6kt4Pkx8FBTLEhRS1pQr5iCkAPBqFS1x",
  "key20": "3T8Vi8AJVFt2DZUyZMq23HaPqpi2Tsi65B5NvECCZLvFNeb6f5oi9KBwm3SKn2JNiJ8C5QS4oUr911p6Z7i4U3iZ",
  "key21": "61csrQw81nQF3aRfKPTHVt1zU9pWLyRyuuS4C5ZAK117HX2qBCjT7bUUpwErmpGKochXveB4ijbXf5vRcJYPhWCC",
  "key22": "2Zbxvc34ms6kReUz31DRspuk2CAqPqN8noTmVCWF2jnWtWhBN7ZjganNFEvNcZXNxs4Yh6KBLWCRxXdXBPiiCedb",
  "key23": "2tQUWgkeJ5q6GizZYbCFJvk785f2SQpyve8DmJo4Sxq7Tn2t7cmomGEcXPGxg6HxGDvpF4ctAjaFFEyvCwBWMbij",
  "key24": "3WCMWVEGVMHWwgPEVeTvnJJANUmbvwftjaVn1tg3g41fCMGtHAbtourKzu4oVDGPyVgCYoqrtFA8DTqYGhajLJau",
  "key25": "4iHeJKJd6zs3g1ioXLXGRkHf3hgqddt1ubzgL8q3XKq9D9CQiAVwh2JAmCP8pshXkZEHnHynCRpGbFR8ACKKvMWu",
  "key26": "5MdvtYaZpu3pJy8s7joa2s3FYGXS6wn8M8UmKevFG8ScpRXdTnAUsPNCWZL9GmTJfMWbmxCJb4w5xizMs4reTgw7",
  "key27": "5s3cxRep4bFJUtZbKrf1RZmP5ujSgbrbXVuJM8d2RpkmEuLJC2EPsEvM468TraUkA5C1wDU9HN8V2M6xzoK7euPV",
  "key28": "F54R15j1Jp23m7us7b55tDaVihL4yhszGWQvdbg9qAvtHaxFuJW8fPZfH9hkGEPMPR3SuAouWrCQ9bgt2LHbDTZ",
  "key29": "AGXP5P3kQJcYVDJWS5eNmt24kbaejkM6tf1ohVpVBjCmnjUmhd5Vmivjbj2Kaf83DyTsU1sGKkXUVmRtYW9GDZ5",
  "key30": "5cuXAxyJF2mLVFxQZSDbau9BPupCxzEHzsu29bvj2HNAzKT684mWi5RKWsK7KcG2pybCgnipU3BurLr9Nf6VRGmX",
  "key31": "3AXewTiM3fEaym3eSpQTA5Wz7tVZLv9Q5mji5fzNpd1PkdUvXWQDhgWLrwG97CWLn6Ve8a7HG6r1caM3sx1WSWNw",
  "key32": "wdVBr8TT3UWztkmd1WkDYC1jy3tT51hgfAQA1eZVy66HV38rTErjs9w6Gp2oAgzds49jfKoV7Fvwojs9oXdgWcB",
  "key33": "cdhEDFJyTugLKwiCGMCx718ZaafAMzbtfKfW2m5cJb6PVSYmrN2bvpzbKhHzJ297JgvHKN6MViUjkRz7rqcAg1g",
  "key34": "fkpTwt6wWLY2fKzMKR1rzfajnMXAn5abaWFs1cjcy2sDgdpWU4wLfire3H3Jwh2bbJfzC8eviL4H77cRk97ht4o",
  "key35": "gMZahzzQNrpexiVqX3h72yqTHXbXwP78dMSBJK7muxNno8S1GeUNGzK9u2L7TCtvya68kowmK46XDnzcg3yAiHS",
  "key36": "svvsq4ew81zk28MC63o1WC9o52exks1wR5rAhLHKDzkhaSXCiAcxJWkBQSnSGFBiKk5v4dDQJaRfukk6oWmBCtD",
  "key37": "jkn6sTadxBSwXHeGkkahg3P7aHdTDuCDzT7D7LhjWBjWkvJb3K3xLJoTXA3UMtZcpQ6nbJWiEdPZY8FaM9vLTve",
  "key38": "2PAZCpgTTLc7R4B5kXKdUXdWsZdAo4RwEGm8vX5ELwwYyK9Y6PfaNGZfKRSM2HQ6h6tk9J5nBQRnhR3omqTsjPJJ",
  "key39": "4QayygnYVNLhWfXyGag4DZfQS9nXq2KK7tnqu8s46c3NRi6iuxSSMEzEud9wjrTNhmV2YALoK5nvNiiw2zaJU2rm",
  "key40": "4BuY2xGgDyPZdgQNxH54Ksu13YmstfcU1K8FNaD7vNLr6nk2nyQ1aJpwJE7keKKNYgZ6f981dxaHp4xmdBmz3CB9",
  "key41": "5zhQn2ij6ZsJRqAQ7pB9fC1s1NGa7HcJcRWWVQK3byNgqujgwLRBXvpgSG8scwCxVicPdFK2k9jk3UxWjNk1Nw3Y",
  "key42": "4tJoowkbvFpMrpMKQHWSMVr7ECX55a3UATbn8Wjd4NQgx3GbsSu79ZoK2YYtBVqdzCLb7EuqmoiZZ8emJB6HPRaF",
  "key43": "2E9zav9uRvMtNyHhbxKuKD78dsT5uVuXAXT5LEUQJoQemnaaQbNU9vrDNasXyQiYJEpoSdPvYBurtejn6YxKC9Zu",
  "key44": "2spPAqfv2MssKfZmD7h6dfzAiujFaDcRS2CmN2Cj1hurfzNVJx7kgJJn6ZMXzcmkvFhHqr9uMCzTGQLAYoZmnAYW",
  "key45": "4KYqwFGWmDp37HPKVuWm8RBrDdnmc1ZiLkgTAtWDYwgxgYoL6HfuKv42xZxTAigq2hVKNGHZYKKwf8w9ZFnPLec5"
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
