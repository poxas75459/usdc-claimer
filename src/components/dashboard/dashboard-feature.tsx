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
    "5aTwCuQfoz3rF83LhkLGyb3K8FWNjMsrGLQX6NStvSVaV4Zez6Zir8bzDStBHU8bJKa77BfHRTS7mopqiMYnSTjY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h9bYAUKrnHEhWqEdpcrxtTn3Mg1tfx7VeR3Ckh6CUSDMAdW1gPa2gYKFLntXr9exJrg5X5Znx6qbFJFoV4ujcZ3",
  "key1": "TEFJ2UNSx5yiosj1PAnk3DQf4MunPosFfAzQ7zWRMTa6659P8NCvZdgssKwZdwpWWs3KEKhU8jp3WzPUhjsCwuS",
  "key2": "51qMrWxVwP46nExFJwVXQX7LG1o8d7C7EtewdCCipzs5RcwQAPwSQDxpXiQ5ziuaytshB7rESytV1dmkxrkvdhmM",
  "key3": "2LAhVz4AoD5Jv1hyh22h8k654YyGJJBkKmct1s4KYDo9zBtmfGbq8VDzio5fod96edu3JvoX1XtoQPea2dwUb277",
  "key4": "2wCcGtYebe7RrmryN3r8nd677BmFuzPNohEutqMNsQ8rZKdry7phd1k24gzYcJNMmrhKwNrr3XSdyzDYF49uZTaF",
  "key5": "3nsVyyeKGtoXdahjjQCDDTzCQFAv7vwwvxP2E7cD6bTHfHP8Qp31CqvQjzRL9ehubNgRMjBWiUTNaySEk3s8vX5",
  "key6": "5UNbBv623mCRs96xnyssq8XG8U9BTLZao9A6ApSLSfRJgr4237f6GDnfUyKHDhXrrNXhvMFfCCdGm95N5wFa7o9N",
  "key7": "2f8KLcKTj2SqVmxhPTwXd7rB15cd847tAE2LEvDiHT6JMGZ3KCJAeHvvBU8YMMSgryNS4PHGxmxs1ip9QQ1vGUHc",
  "key8": "82bcEenDNaET7Cv7D6mRqmdCPL9Vj8QL6A7hDakWbNi5PuJmcuFBJ7WzJJtVDNbNEXL4JmMEd9e7nK6x3Fcw49h",
  "key9": "MCpvwSxXiy4mjMzLV6SNG1cuQnjNRoqQ67jSvyaGVcbdyiXE9PYLh5puTBB6gyHwSRfuhGtFpyqNCoTqiyumbut",
  "key10": "5veDuP8TDb6H4Uyc5iysb1gJtRi2WKhWYisLDDFnmpd8Mr9Samjej1JyDufBBrEPYWbL7pA5x3CEifmUm5tTpVoA",
  "key11": "4sTWiQTRh21TgVoWa6CGsifhzSpPXUFCtuW9zyWaCz6FQUfqnLj4i7xavNvcT1eUV8U9bkvTmb29zcLj7HXuybqA",
  "key12": "4bWnRGdqyYFdoUBg17RMTwmHBJTDioKTbDB9GayP2jiv6GRJtZ8HxqyM4uacfmFJH3YuzYiGVcr4kdVn7dMd5hBd",
  "key13": "284RYshdMJ4A5Xqet23gEgom8BScAQ5Jfi6dxDes1HvS9PGSGUJTUrNYEoxQpxdGkZv62bndsMfvL5Uo1UXmg8cy",
  "key14": "4fFUHUPLMjEzu5aXe8Yg3Cg9Ka1y9LxkKmu9BbVhkc6m4bDxQzNwuaXBmq4RYHCSrUzTd7gbCRYCiT7fLqxWCE53",
  "key15": "3VxWgfPbH1T5ccftfEuLnboCS9wGq4rpK9gy7EmmVnuegb1anwgxcWY8XAC7u1w5RYQLr7EczVCvnzw8ZSBL72Tx",
  "key16": "4KEgRsws3j9ywpjqxfER6oJBK5z67s4oUKTBHNEBMPnt3KA57uDBSRj3Lfq6H9Z6dJFmpea1GvkqeJrBf8pP3PvN",
  "key17": "599yLGmUxxtvRNrsJT27NKwefVCHZHLLwZueXsK9jHHR2f7uAivDZDE9RfA8ZDCGmsAapeN1MGiMdTu3rig89WrZ",
  "key18": "PgeK6r2EUkaLVwFZAucGLRFXzHi2EVEwyjpamzXbxjuLzbFLod72bzW5hVTfonNjGv7UcoaUzPZKCSToimFPbLA",
  "key19": "vsmEZKrBF5oT6sr6yboVAaiFDTkxWJNqqrRXcYUsh1WsgjLCy5XD3n3C8VwCu7p3fFM81ZshBUMrX1KDF7Q5WmB",
  "key20": "u3P1ErQ2RMtj6kf8rpD2xQXu5vn42GT9SwuaTK1PMKFsdwkrrkrQn3Kbprr7dGFYEPzLepqtPHqWDMvFKaCt7Vt",
  "key21": "5h22afQotx1UbMe7m9rbXDDSe6mSKHDwpKwhtBy93rMdVEoUCXzaXQhGerNd8hikSHZMYdiops8GiAFHTjpXfov",
  "key22": "R8k2SnSQndYVFmYPSbSFnztrnWufB6W32WVoyxtbooyaxy1EGfPyY7AcS1tLXcbVSkpPBkDwXqLdCC7bFsz8Dqt",
  "key23": "5EjSTWKZzZr7pAunJsPCaXpmJPispboevAZTNa6NqVyH2yaiwCvKimwHohG1jWqowyq77nTJbornpwYa7B2qSaTa",
  "key24": "2ymQSbsusUz2VhqXuQbaLjtMorpj6GXRC4j6mWH85a3d2gFdw2xtic5avUsthxPP9uK5grhRbHopEqaZokMXPre6",
  "key25": "PYhyuhUMqKfSPtFGX2JhM1dPX2NbUEdX6PK2xUezt8uecLG7o5GsQMrKnizbEDZg3xWSxagwsjTa4fsaivnCkx8",
  "key26": "65RZjB4oJJy3Cf3R4ghYwsKopLkmT2iDF5TEXjk7AMEpe8R6WaVfnxcxHuaCjNJksk8JtTrwCoCgRchKp3kcGH8h",
  "key27": "37Vg26ipCSGEvqocxsCSudrS5gNsdmk1h3eV5TrVKwAwdSRmiGuDNJXWYiosvBEu7vH1mGuStoodB5TeL7ByFRY5",
  "key28": "5KiJD8sJufzgUtzxutfMMDMjAJRoH6923fbAv1AZAiEGBvEdnmShdUrDdaY1yyCWmh3K2oh5UCxuHR9PWAizEMU6",
  "key29": "55PVe7d3pH9oag2yZb5ktNz3qhqoZ7cwL2auNbpjVftNFiUpNNTLBJWzSCZQ5C5XF9cu1MFTHSbziRcDGgyYeBS4"
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
