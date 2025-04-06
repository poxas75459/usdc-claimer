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
    "4wBANPcqTNN1s3exZpisrduGGuL6jCmTiqxQv2hykYUbxrSN6Monj99G1RQz91ifgqU92NqGxUv2rQuXwy6VnAGA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VcWBn5pEijbeA2AauBcBFwWRn6zCVY8h8Fz8D3wtdLFuDTJpyKxxFP1ar8ecn8ddmYKqMJMCxq4Lz1J3qJAWhqq",
  "key1": "65mRB9Mncm3fyDDv1c1pu6RmaQXfWroGEKQJxjcS6ncg1n4CzYw3cvwhUrTYuaSGyZrBWLgLdYGxU5fJNGpY3EqQ",
  "key2": "5v8nMqADr1UFX6zv7mZHybqM12E6LahzMsfDSvxzR4PdqKb9xQW8NNbVHBF155NVKCe199rwk1imXccnbBgr8EYD",
  "key3": "tUNYUTPJeQND9AYyB5sstWFYE6kS8ftYpCVqKWJVqawKtMoeiJbUWsSLKzh9jfbPQYKQipU7YpgEByQeSfvBEJg",
  "key4": "2inrkMJhC7jQc5Tnq2G3FJbsHmT6bJvqLqgqCECAFbX5oypX6RP4fUAw5SxfAqCQwmKsBHhM9WVW1S4ip83T33P9",
  "key5": "4vLJxVm2EMDsnTbHepTf4N3cFUiDH1VBciAUYPtnRBvaqsYgHcdqeU32iJEsP5z25UXA8geP2Fsi1iUUqZ77qjg6",
  "key6": "332p426QzYcpjLnkLJEi2C1w5YeEVCHYpW14bks7HmuLU1PMMHM2HcGiTsxdz2CQzYxhYyMidpFFGTtPFxYJ5V6Q",
  "key7": "5us2LdDNuqfmTGtkEnzaBjW4AsBTJy9sV3xufgpVFNoWpMf7DBZ5Vph1DPUbXudyPKAiTwVbdTDrtAda4DVfB1um",
  "key8": "Zb6KWodCS124B9uM8a81CiiB4B8sRHQeuPsrFmoS2kvV7QYCNCkuYG6gjucqrZ9Ug79Hq9JcWNzJewfNPMm8xdn",
  "key9": "2kjJSvhyHFee3b6pPJbsDnTU9SN9itpPkkNDiWynHv8nEZ9xiBSJWQzWPTQRV8EsScQXTuz4gdVayyrwC8be6nxF",
  "key10": "72xLnuHw1TJuS7WQyFwx5EyEyCCBrBgXtY4viWhNceRnfgfVwqs2bDZSSfahUXfTNHRUk7wbNtoPXDcZYtzktRH",
  "key11": "zgV7zyAfpkCwc1FAPXeG13eXyrP2U7ypgK8FKf56HUSnbAc1CBMRAWCVdnGfBQiu8cMJkLE3jqKV64MMYF3RQWg",
  "key12": "wQN8kwqFFw59jrEupW8Mv4HNhSRw38Q1qn21cXRwr1z4mZ683fEZFpxZuazHnymFtk2ZxbJx5JCZCqqDg5LVWkj",
  "key13": "pEv6sCvJnmtBBGVuqGqPy2gaFfqCNN75nU2DhJ1zAUsqZu6r6FTxUxsKipv141nDH6riPwoBP8XK1KKXRAEhKbt",
  "key14": "2GZ12tsMAhbCZ978jVnXGh9gfhVXHGmcJXYZRZrs39VHjnCsHqnp8G6aaBpBBPLbry8KDYDz1SsimPn7Xm7VWiTP",
  "key15": "BNfzJDTNRXfs7uaFgDUyo8JgxGpKXoX1uTovkZCNNEt73SxWTSkHFy4BNsb7MpTJBTKUTEGj1cVJhczW4GnZFax",
  "key16": "2kAKjFpsXu3kYK298YHjfNqVk1NtqzTUTVysyCdcdcCh9VBPTURqkkSvg8Hwb3LZEPFUJpPqKBw64S143wFALFhX",
  "key17": "34ZYM8gXAvKe7FFPLFxhVyxXNj6dAJFzSLHJ8JedR32mzCvNmJ5gEUSwyxKyhPf2NoeKTMuDZRm4tUhFG5TZFhKx",
  "key18": "5Xuzof3YHV7dBL41rj2ootz5ZdzdJgPTGVEngbQSDPUbZLtMDQtWbEeh41T6kutiKMUWufNssXFkVJbGhp9eRtS",
  "key19": "3DXyKtmexopQDN1NmxP6pfxdWJYV4Fwm3fMttf79NFc3xQohC1kQnD1prcpaG6UofH2t9BbKaoyZBT66yuaN255J",
  "key20": "5PfZR1p8unACVXy66M82wptsR7sXYK6Qcoa6kF61aSqKGCh7ZvLtiANxhgL7qevif7fKsDWiaQzEY1NhAiucCbJN",
  "key21": "5ArvkMHr1sCPj7W9d954KgciADJ81AEL5JNrk3mfd5xrSWYQV9Ti9u66SUc3bxiQg2UNTbXNfY4TK7dSKR1p126A",
  "key22": "3zjhZYgpwhuhBehXt4SzJP5Mm1VUd6UWQy3inJmyYtzcBMYLnk9T71gVN7gjooPuxbDwajNnijSdHyWrtW39U9Fw",
  "key23": "34BFoJygicNWLb9EPfo9XDtZRKaKfkoykHAUqp9nwEnm9irPWQJk6GL3ohoECEWYdyJdGLqwnh4YzkR27DFzFahX",
  "key24": "NMCv9scVhVTDGiPGGFfL3JWkoefDufqT48Jt1rwBMvU5ZG1ghY8W9CzjooSci5Ljji8WHbVorm74A9FaktsY4Lv",
  "key25": "9KgL5yxfnPm2CN4DPMcT8WB7oZJGm41ovzRusRijAZ7YJEf95Lg16GXkCyaDTEUMPYo5SsCVkRrxQqNmwxxWt3i",
  "key26": "YsTGBw5bBLsvKsr1iKLEQnehHYaM3x1RpQvm7VAKpz1HwRvszkoqjTuq6Cm7yDAuMSiyoUVToaRNDuM6wpzqMKz"
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
