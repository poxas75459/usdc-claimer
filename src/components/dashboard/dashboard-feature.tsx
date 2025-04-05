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
    "3uqtqPntRbDqWGxaeRBLPeKAZd41vcfAQSRTjovx9iL2N98PFHS1n2JRHCwmdMzKJgMWSfm1uN46Lc14YYN9dLNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FUGa7kFQYzmiSzm5dNfZA5AKBHdDNyLSWxZgx18ek8MY6vQPEPwJ88YBGCrwskF24S9ws9rwwT5UH95kQmSEHP1",
  "key1": "vQ7xM1yqwVXshUyxxYfzEjuVeo93RuLNgKxWkU9BpqwNXuS5YyGUxFJ9zdAYiHcvYQFbuqy4ZKuSnCcjWLWhVGu",
  "key2": "5m86N7JxcrqiJPCfMsepCqAheJQ38V3dfzcdFpitqmysn8farJd6dikZbCVG2Gt9XJcUNFvnBZ5fHWrEKr1UDrrH",
  "key3": "2apDjVFjfu5ZG8rKkzWfoHkJCw4hRUNr75W7QgCn1DCLe88mSGbjKAUFeig3zW9CWGxxtfZKgcMd2ybXva9cDFkW",
  "key4": "4hGz9FmnpL1s7Rp7hUw5PFhsaKwWb1zECMjJzcR7XJk5QoMhoiqvhiUUR9upYPhDy5avKdEmr1MpWoKa7HaQTdDr",
  "key5": "2awXmNKWT3vWQ3LYP5R1mZ8G3tEfRcGYqMmpZkCjFfc1dJWZC8xnB3z1WB4qpm3Ed6d7cu9zfaRd7TDDTYTDe4cy",
  "key6": "a8Hy4CTuiN6m2oPuKRjuhp9gYZ47PKjVsfv1ibUytNqeTJY1T3gX8RnX7XciYntQNngMSZpV8mFi1tG2E4upXxy",
  "key7": "372PwSSisZzjfxRFu2TQmcqnGYC1tpkKqQzrUFwJw44dFsCdsErgzQrNZ5acwwQ4cViTqWywsfcpbznoK8iGzuoC",
  "key8": "5AKWNytJiZpxko9ED29xdt4t11Q2panNpG1toV8Jqk4XkZUaQFYBsjZv5KbMPvhcCsaeQD6ZAxj2ZLdeGQp5tu3N",
  "key9": "4PeJUrEhyY8bHCMKtUX749rce6gbrZnu5tSuhuTnKXuGpD9J5KK7KDqqvNZTb4sMeeb5ofAPVVxT7H3L1sTV1wTa",
  "key10": "2shazQMHiety91skbBgc1a86jVHeTWcfJUeZRdrJu5JfwReSwqeo3ryefBVLC79Ye6x3e6dEv3Zt2tbMzbtgfx7z",
  "key11": "12X7idktCYLy8oA9EAQzCUH1ZVhSRCTJ7146DwgaUKxpELSTiv281zLkhriTQkqR8LGvrgQWH647GCJmPdxXk8M",
  "key12": "244uf3czwHDhhkCqQB7xAC7qC9G5QpD6jDuifAVogQQnBjwYNGvtMeJQz9NhPYV6Nu8WVSJ8ZtQR1NgmJ4kAen7t",
  "key13": "4sUKRHpsdcbvnXWyUt82kzwra43AykuAXSv4ChiLHM84cweDSrGBNkKw2Wb76wZ9pcDGxDh48CYULtgz44CyTdrp",
  "key14": "YovYT6J9kUFQXiAsewuD1dB9o9sWymgMgBTMzVegVBkpmEh8XDYfuZXbdFJwER5XuPYzJirV5sDHYnGPLUEiNqF",
  "key15": "29Gk21BMMiS6xGCSvLYRNastLwpw3bC64uJUmZBuTpfyJHwPqHTmMBZ5FFP8pE3LUnAcK8hXuf9prTfdgmVf4xYU",
  "key16": "4BbCxnLVUgAqfwfuvVnAQ8cHQ8ySrtood9eQVwtfNmEaxUuSQVjbvvvg6DBtUoygZcxFhFpqvvVHfKTgwbMFhBC",
  "key17": "3nDYKpTrhJprNcZ9xKZ3mKhrkUiX3SQVydKhSVUWFfARgC1iSUFjfDu1TwRMfPAMdkXPT9kxkZcJqheUnTGFRLjH",
  "key18": "5mdRKCjq8BPoccLBR1b6YeNwx46BG8snA1cfoTeUwgfcH4Mtpp1ZdbsKPNBoVQLb6YCaerSfWDNy48oecb5Kcdwf",
  "key19": "3pgAvnZ5PQXrosXBhpWKV1JNAvDxREh1kgBbn4ZscDKgBZwdNtvokSzcX6fNcHcRS4Z9R9ZTYp6bF9RWWbaHqt6v",
  "key20": "2tbKCmZwfXWWF8ZgaSKTScGu5aAknFynZAxDpcsjRF3DMyffFnb1LrAdVrJyQx4Gysm7NyBDKowXmXcd8MCCVZBc",
  "key21": "53wihAGokUd9YvU8fpXUfrhRSu4GtYuucfNTjYu3dxAT4dYWQQcfiHA4zPTdZyzkbfhZmjZWGPHv654R5iTQJayj",
  "key22": "36WFzehRqsC9kJJ6BZ4cjyjQPKsQoUhaQZhs7KBN6GUJ6hfNvD7NjJQ3cReJAUVYqgy7o6CkTN9ymnMuk3bF1v3M",
  "key23": "43iFiqJ34eWyMpjzzFp7E9RarGUd1XhJ1MpquX2jMPoPTSwyd2pkWsGmZBk81FYxLBmaonM8w8DLNqHPWvy13e4n",
  "key24": "pU1VsrdMf6nH24mSkSmDFc4YRhNdFsXzck2QYxBMAKTkgwzW9pvvAv5QMoEua4517yHG8FS58XMGNwaTGrFbbWA",
  "key25": "4dgcEmsJ9vgb9hNBKckBqmoVZo3vXvryR8DgwcVSs3VTVmv5TKCZBdz8CuYeahQyzyi3yNLbmm6Ukdam5TDKE1Kh",
  "key26": "5eBdRqgeLBzafegykRwYpcPTQU9nsu8Xm9NpgsAhjz8XMmajsKS5dujFtMiJV8XxdCNkPCGV6bJxAhdLXTBw63pi",
  "key27": "33uej8cB3gM9Zr3jNhomyPWP2KCJRhavA1pFJZPNqnhyqFdhuwqdvtXQzoM4np41QgZfBDAi9JpYNVW44o5coEwd",
  "key28": "49g5opPFeWqCXc5YHgU94Dm294VVyXmaLfCokNtKtdYLbrpq4SQQThjzq7E6C2v6R3fop2eCJjvZB7J1oii7oc2W",
  "key29": "5k2cniFCNyW5eDdWFUT7iSUgZESSyJHHFvKgoTYCzGPEgjHXgNhiv6ocPgxFRin2NTBhgobCPee6WCvTGzwviReZ",
  "key30": "3cK155SQiqCX1S7MdusLSc7iEHFe8td7zhTAay3mdv8yWxLfubdstL2Fc21uEWBowbTpRKPob98VHuVuRkCqyFEN",
  "key31": "X6DQ2CBTPsyTKc3qfWtXayrZZ5UuzWYfeBxLM9dC6AFhqCMdq9Wq4yFVm3VexpD3amFcXty13LdPMpokThoy8q9",
  "key32": "3RoFLpupLwEpyN8WxQ8efpNE5DX6EtXaGjEXDJowXEsETJzxtfh29ACu1ipN7VXdWztUH9nzErSnoWyUJeyFStt5",
  "key33": "5frB5C6S2uBLHgsetjPW18cHD6VF2ECoi2YMAGWYME2SoRPu4SrdgZrdrqmsamLG7uFDV4qx4cRfktMb1iAXEtHM",
  "key34": "e1LqrerbEzATnU1F91Tug5mmT3RSvEYKoqoCPC3u9Nnoi168NpkjoqAit5R5uVQPRHizowKhu8qwhKRWktDzkxh",
  "key35": "42bpaxirK7ZZo5aarHNm7QRxpomHaCKVMXV8m5pVjfyMqXjEgXDMxf3vdxz9g6DKoJhjE4MWRJ8WhYXodA9cgFYg",
  "key36": "4W4R9gpHa9i5JNUQwVyLLSqujbhBy3o3ig3f5jDH8miu4YujbGZRonwJ8yepRaPYy3qS57Y22iYERKxDdyvHqJzM",
  "key37": "3e5QeP92faGt3qjaFcAPyRhrA7E1gE8SJ4e2jDccjzbMX2V2Zhvu9cYzKD6XAdQ8YseXBdwVRwSmbZvm5z4AKJGB",
  "key38": "5Zo28R5UD2wBYtygHUsqaXcXxsywth3JtkAZgkdMBBC9ZeTUWmgoCnouY8TFW1pKCxVc5tEjXp21BnsWz1am6qUL",
  "key39": "5FGYopXx6QofuBAT55k8nixUjShkU2P77zzRoArHPTwsagoeGutPCUwQi38E3NAr5hrmtukb2AdhN6diVUgTp8na",
  "key40": "4g1vH9uhJcQnyCd4WMAwghmJNBjrczfuFNRpqK95qcZVCoswRQRBJBQS4T4K4xm1jfkgbZp9LSeADLMKayQ743yz",
  "key41": "44mEMxb9pEJt16UjvMzwmqdf2yFkWuGeptvsEFqrpqYhxFev9YkkNtNP3UgDMNZBkkvcy5yUgxz7iRSRLVjsE9BZ",
  "key42": "2BkFg9TrQeUfjzPQkArGYi5znhgTcE2vTSprxadEtBJBSKwkDgf3xTwBqG1iBqJxhA4FCpgheKwZYusjBAr2eSWu",
  "key43": "3RCgrKmF9V2Ua3H6UMuZxMrcGG6sJnorEVyYYZENT4S3w9CjcHpnwZoe2mqGS1EfSxNeeg93TZaKjxDkVxdELgh",
  "key44": "57U4sEYGV7LNMxnktdRrcgQbf8YhjpSeWEjVfPjo4X1TuCf8LUnPiXgR5me1dvydcvy3xtauGvGcCYkZNgHonjon",
  "key45": "2fe7LNgefyWmy6JWNsQvTwDzWsiaXkVGY7tAMpciysgqFzetavG7RiJRWhWzTsTYiPysJsEP6djp2tDPRJuo3Fkf",
  "key46": "3VGRfBuXcg3uenf6fmAb6P8tLNkj1uEYjkHcA1BWPNtTkMJYWrb5KNo5NXJTDW1Xg7fqixAumz5FbRr9RJcLAAqi",
  "key47": "454rh4TX3nAw7NyTwZb6ambzZeR6dMXALpY7p5g8V3vf2LaCaHkjBEewwHxg1hrnGZQLCLo25ngXYVEMbVb6zaGx"
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
