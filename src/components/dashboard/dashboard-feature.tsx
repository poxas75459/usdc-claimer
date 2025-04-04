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
    "KwFPTKnBVSymWHbFgTgTNMwh3o2gVvoqy1J1jPExXCc2L7rakVHAGhFuUzbsYyfGMC854QCew42baS2MuQG55LQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xeHveceykQtJ6wkg9PtqN5feNC6HY3HLzjPevUSDHUeWtsqe5ZJQE1eiufT3U3VmBysQxntKhVmbDbRSxk59tU2",
  "key1": "RppwRxXkVnVF1x5EYvCyxju79pyzbArW41j6CLwYW95mH2Wei6AFaPbxXL9N7tYUWeQpMn7XukspsXFSgkGxwjx",
  "key2": "2G988VVo7kmGctThU7uMbwK9Cti1asXZ4p5vWpBQPkNMovqDQzZDUsh6BeuSNSoUZLAXaq55kBTsDSWytqqKeeqm",
  "key3": "5piB78VK9p21zuswmyswxE7Zpe6uDcpAUTXPKSNiiTPdNRrBDyf51rvpgCveiHLotJ7REjnTTWEcq6QkvNuqhYEn",
  "key4": "42uxJ6XBCAmgZeUb5jyAvdznR5ZNLXmgBDYRMQYuz3JzRt38PEGgEHqqtR2FcRFqHVjgGSvee5GKNZMozedXQ1ib",
  "key5": "2JhFfQmxErEmUQqiDnEcPrwN2MiA6iYTD8Uhx6tr7P4bFphXJaPrMzKJLrdN7kNxERQXRLzQujVhHFkDj6cAzMB8",
  "key6": "5S96M2BJQPyWm4giD9h75pdhAAZNf7b8FRZh2uTypW29wzP2LzjAYxeGMpjaeAo75Nd84GstiGm8zpbeq5sgxjff",
  "key7": "4SEG5i2Ly17dUBn7bqm5hKManhohs2QLMvCgQaPJ4P3dxpiUisNCP8vkABN5vjuno8Yq7f8KyJ1dPSSiWdoLPgGZ",
  "key8": "YqNozugdsvvwD9AdvRBrCPB3hAT9Bm8ZiCUbtA3JnGHBqDBtz2qS9D61FA6PWwGdpYFP3GwHTg9AKkL6gikYVxy",
  "key9": "xGRoHt5p3oz7F4RgsksRvSFhu2hiPxEabs3DZ86MSQ9DXD9nYox1BznGWzSNiyN2DVQikw9LzQTrzMoY1Jef2t9",
  "key10": "ze3Xa7JXzQHTTFfY5vJ7zxF8p3G9LqBPiw4HJgUhPQrzLnRaZuACUVHqRgNbjAwMPS28FQxyuxJVapJePtoWSmV",
  "key11": "2wWNciJLuBRM2CDtxLQ6gdwUEZLyiYwY2Xw1CbdK8hY3K6t7ZenBea29u9NeZGgPLBFxb8N6EswocnmaKEceWg5C",
  "key12": "5LakiZfhKrBRgDHfJvx1dEHhoXsMfgdVgWJ3ZP8zvobVwvpHkZuaWGmvWz62DpcFbFQF5dcoAsWJmu3vqoCyrqdj",
  "key13": "3CT2vJ5daabSzytQ8NSrSzHoLrpp9mnrKugjQo1ShGXDj49cwfWkanKqxoci4VKqknv7jPmStu61NQGRczJVtJ1d",
  "key14": "mNjidAjTJrTdWjQyNTiVNxPqUn5NGmRqohxi8Urjz1cv3zwFmqFcSgVnDGpvnqMSdMKqrAjnjeM77bFPbxMxcj8",
  "key15": "2VYaSQsshm49cxjfB7U3NWp4LiAJzgwi4Eu8yZJ69cLqDvMdYcpUWLkD92sS62XZzt2BFDjsc5NHNB9CtAkfDs51",
  "key16": "W2KUwgq2EVuDpzdNcm8yhkWHppynd8vqHJadGrZA7eExLfZbvtcGjm61L4ZbkztzJ39DTq8gJN3WRi5H6zdENyP",
  "key17": "51mtCHRHbqyR9qNMYq1G9Sf6Zkhhzo2CVKH75urXdzT8PhWTrkLSuK8cbSq7AkNwSBjy5KWjc5Ph3mdvrHaMm7Go",
  "key18": "5JNt28nwzCcCAmzu1ZSzF5U6Fu6daPRPbvhzGHWVsdfdZyYqH7Ygq5kbG4Bcad3MmQW7DLG2hMdAy9myJo1PuvW6",
  "key19": "2PWr1pXPVLpJzpN7dom7PD5QYfZaGJN9pj4P4HKaHJxvoz3Z8ZxADts3heHtcotPR9KSenvDG7sasTx78GcqXqqA",
  "key20": "3dqjDysdbEBZWQN7NtXBo2xZhEYNT9AWsaWcEpYyCFugepNeRf3CqbKRwjhdjsrFdXjgfVxp3stoxqZ4vFuszfxK",
  "key21": "3P3S7kVLYiGLtt3HTdsEa5CzpJ3uApR9y76ZSMTWy8b3vQHpD1S69zMSiaBkZbbhcEW88d8x6qmVdUqDiCEGtNir",
  "key22": "3h5XWisnUEu3v7uLPUFuiGkuPTsVHuXVGn1JNCVghAb4LmgSrKM8dbz2RquUHmfbRxc8kXVLk1X9fZEq9PxABGPw",
  "key23": "2nb42t6rwhTaaUDpXdCARpdmBe6x26tck2YaatzoVei5GCZnQVYxdnTJWye8tuKUJrXDbSooEJT9exkV7var9mAx",
  "key24": "5ATDPnBCZTyMpjUFeqB9MmM3HKURbVJBUiR3vZHZtC7oVMw37R5aMkYhxnvvARWBxhJ5UhZxzQWC8iMvsSc4HCFX",
  "key25": "2YxMF8AsQBKnTAFsVLLhswERGuwXjtD52b28dpE4LRuc78ch3GBSh5Uw6g87Xbg7jHFhRk4SeLkg4dno9axXm36Z",
  "key26": "5VgvZYop5YY7AhfDiBNTobQNRjGATWMbx6w2RggsWVpBhodv4EL574ZaTzL524hFpi5yJSRzKuey2N1SFx6shQw",
  "key27": "ogKQ55PvgSLXzAjseFz3kRaDD6NXJntpjPZkmh9jZQeKuAzaKh7qqLQP7LCzWiHecTSs2hvAHxEm59GCqhzm8GU"
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
