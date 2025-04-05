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
    "2Uu3q632TT49PMUxDqDAx5MtoSGgrE1yJ471Eddvq9dEBpt6B2rLndHTtKtV7Sb2zv8foZ1yREiP5cBNZqhvYFJ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kAQ2eJuvzceYZDoWHm4Fnyw26zerePhujUbu4WqQeDNGqovsxT6sG1spVgCxeNT4gv7u69vCWvKznbJXxXJeWtA",
  "key1": "41LJtuHhk9Qf64SM7egbGaCg8ejEigmjeQeKYKiEAZJ6UcMWnpKqjMFDHfcsDxPHz5wwhGz5jRjiTg7VEL5rSkvD",
  "key2": "4jjfAM8DRyrbiHmTowqa6q6ezoj8WmsDn19kSBeQfxXTBZ72Jeq6R39pN8SupVX1msZ67YxrmPKHnucdeiri5TEz",
  "key3": "5jPZ81PEqBLWgqtVtbn1PhBbXQcXKQ9ZkG4cTSfW9e8SuwPdcoCKrgvbRMT1HywntrhfG4z55ph6QbEonQwdSzXT",
  "key4": "4SnADhvXkL3WY8vjCnE8NUYWSFVQBhgjuaLjLibFsaNuNSvSCgRazbQYWC7phdL4ey3L5FqxiAPe4h4hdiBCx8n2",
  "key5": "47mAmm87pU2bprZhcjK12w4csmwshxgjb927MFyr76bWqnigaJXh4BkpXwS4mt2xqg4jMX9WBiSvrdw5iiqjaLkW",
  "key6": "ZJFfbRkvsrhgRjqSJ7u9aTFdwfbgEpgdXCcjttUZs5hVAoLz9Ljkr8Ur1aRTcUkKKMzQD8pLPdwF4jtJKEZ8YnV",
  "key7": "4tSGXZ2dLkeCqXvne3swGq6aKbT1ojUbtgxXQKSbKVnKT7vKisMyNyug9Pm5ncoN1KZTnwR8VrpvjEqn4jWtbT1i",
  "key8": "2y7pZEVcSQMgUMzCty7USQRthG6mxheLAtVEjP6B2XCYHzLTDNAspEn4EFzjzxmmb4E3tVMJYt41EctQRBsUEUJt",
  "key9": "uqZcpddTwjJTDKeLsAszyaXcLy8VzU56zhGUFb47xU55bBPASFPouhb7MHkZjVTQ5JVr3doW7dYuE76S2jEEH4g",
  "key10": "1Bh4cp74TmzH62kU26ShTt5612pNepsbJF8nRS2Xp8Tf5BkPvTiRtHz1tg6tbVXnZv9YmpXithLVhXe38a93HMG",
  "key11": "RJs5bTV5ppF6boPnQdagWNWq9TFic5aXmTJeaJs4m1zYzVpsMX5eFnoKS6q44mAzPEtVj3ZdeHhUUrAMtBa6asq",
  "key12": "5gQgK9zJXHtsjJUNLUo6aTfZorN7ohBzTY29VxMDpgVkWVs4hHkurVnDLn1cxK31fvREGFLwoWqY1zbrSH6hdQWw",
  "key13": "5aKa1YMMRs5mnXrgL5un8AoHQPHsEuREU9GwTm941a17eUhBHGu3gytVpn69K7UWAKvWmEfphwwhVZa1wMvG3bwk",
  "key14": "5pzd9ge9mhU5VDJkPGUt1ukNYmvh51oy2GCK6GF4EbBrJN6veAo2GEkuBun5UNh323ZiU1uyKfJmZy1UqzJDuFPL",
  "key15": "5Mi49oXM9bMfqBB8G8dQQJHzQRkU61fhLUZcqoXtXeLhJtem2hGnBLXmA9jhpcDgYLX77T58TLotxeMBZQjdwVch",
  "key16": "5mWqfGxGuBSJXFzDqcDcsdhk3psTkC4yZRp4DLjXZ6KUptw4DfpBb6tfnjAmJgqmAf6UAEsBQf7EppbsxoQ2srFC",
  "key17": "9bb2Vk7f97J6SN5AYkj1gsYas1YdZfAo7jUUNyKNvptNzEgvttBafXjpbaKcm8ruiBEBhmpynazpTYLn8ecrf6M",
  "key18": "BunWJ1XXyRUaVsjQeyAsHLris66VyZYJtaYXN96kdEZt35CdcsY2gBhC4BGZ8xSSqA8FLJA6JUqua5iHHdGJPxo",
  "key19": "4dh2YfgZbgFmU4fPTC6oeVD6DXimN6GELtypjAXrHvDiAb6EA22dBnJ1fhA6QCfzQQm2QWkBZDL3LxpFrxynQZVq",
  "key20": "2qimW8grNWajVYyT2ktmAmogyFfnnutBVGcLJu14LcnCAVKPxm7yx8jYHJUStcsZY9ac4uT6zdA4mqw8Q46HvLhw",
  "key21": "WwoYfzXU6k8DVPfmgUV1vJUZN13JpyGqKqpaBTZUsq8EvJwJ8jbTu7KKCr9T1hvLna24Z9ypsSt5qKbduig45qq",
  "key22": "4XzhSbvamFHneCY8LUdzXxgRubCjoPDBXzXHpuPt99f8T9poxoM1yhE31PkYU3hHZqP9fwMHTuPNZzCrX4szghTN",
  "key23": "4mNxsxzKrpjeWKoHeHRPbLZhxuW35a9mTNxYRwhnMvYNWFxmf64bw9wPhRKwqo3rjaK3Qweifddt25GhsPTB7D8A",
  "key24": "4HjUT2mFfZJjxJetaRMMHe83CvJzWftuCo2RB9DitekAdvpoHDdqjWBNVbc5cyM8BmJvijhY7vfNqg2Gy66VN1X7",
  "key25": "3wZFat6o2kt6CWYpgjcroZh2QjopcYakDPrjQB2Nj4AQLk6Zwc3L4RmjtynnGqNYEG2LS1PDutCL9qcLTsvC1vpY",
  "key26": "2Lg6KdxQgyjvXjSJwYgTBXaVPSYyxmHEZXxtDSd2auUBjZaZ5AnwiiNGi7BYJyrx9kuB3Dkn5Zi5NT6yfDoPqZzv",
  "key27": "1U4bCedrx4Q2Wdsghk9WWfiHVWFNw2zujN6d3KWmcFg69EszdrZtwY2rsCLLcpvNmbjzQpnaYP3wGofs1pRgvaH",
  "key28": "55hm7XnejSmfbumki4hndeHN9YqAymRQGeMGZY1SQJmxndt4t5sb5bke1TVfpaWbTRtFjnXSRuRhb4P77DL5ChCL",
  "key29": "42E3P96a746mMgAkuG5oyicdQJeduxNArcmXhTmhBTWqH2vYt7XUynSkmuamRXsErWLYWJ3TL5KuyuetZVZXNt1v",
  "key30": "3WejU8WPJNbZjWG8Zdra7sxjQeZnvzKqexvRjjWzkrB187raTkg5HVk93qWYAYd2bf9zmMtHpobTYwQW6H6qPYin",
  "key31": "2vS3CwHaSuyDVauJdKL2NRaZjwbNAXbcGSsf6VWSJQCrGGVLuSBep34xcfEuFCm2RWQxodm9qTQp6a9fs5UFkWKy",
  "key32": "3ZzCvNX5iuXpy1i8Xqd82QvZdDBCuv68Rj4NjPZb8ur2giKa26QRKGTa9yTLDnxqMeF4WQdN7H9xZ7pZxcjBBgKN"
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
