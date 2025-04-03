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
    "5sJLrQyzSKJJxG9e2bNjbTRi32jm5FhsrGXgN9EaTSG7BMHWZmptib7tjKkjktnc5mqhPBcQ8Rb1Xciyo1s3WFo2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9uoeEZMksiyPo5hwtPocSWDozYzekEMsiSWu3kA5sxVGcbnRehJDRhhQcN9gyr5ZfhN6ujJsn65BB7hu6fAVz34",
  "key1": "5GysscN5q8XFtQnQbTJPsdSNhhu3psoTGYZ9jcaC6m1jTvVSZJktFauikpVjSbq5iYmo5ivjAGMEMNx38qNZfqq1",
  "key2": "x1DeCdgfA8fBWWettkxx5QuWJbrtuDqtYGuE1DbKpQeLNGoYcGwY8xaF8HSRSJhsStVexrV388Z1MdG3Seg8tLr",
  "key3": "nQQM9n22UwjysT53v238gLdL8n41TNANbvs8LYjZ3MttTbBNnEjs3exWv73Q4nv3xzTyNTdJZgYoRPovfFFUi1e",
  "key4": "59TFZKny4b7ZFcoEr3wxhyXKLUD72RHnZX9mkg6koC28KHipFjEKyXVbvmNgS9PsGAMHyghFWyCwR3xP5o2DnbBh",
  "key5": "2aGG9yRoYBLb7jZmqofrRXM1fUoaxXuy1UMLmqGyo25PtNvLqA1W54rfx9ZpanJrav43ZavJHCfUZ8FJyx4XwJH6",
  "key6": "3SRGRJMsFanb3q779giiL9nsXPgRhPr1QfhEXu27C7ZwDudZhYoC9Ubuz1rrWQpeUGDLfFa1VyEuiHXvoWe9kPq",
  "key7": "2VfgNSHmt1Eb1MPy4kDzVmtf6Q45Fsc1Z4YKokDfFEpi5EHSBQVWzfwrgY4WXyd76o75zWC64eoFRWD1yt71jhWx",
  "key8": "5CSznPpuKuJck1dJCYo843axWbskAB5dcwiS7NLNEZDZETcH1q6uFZRo8HZBNge4zKrNnEEbwwBkhpf8yCaYSH4y",
  "key9": "3J7NRqojjM5sVjLy7guU3qyGpjDHkxMDdfD8b1zGHP1Yz7FUqzzwGxggmKCCjDr2jZwSph4ntWdAkK42CWenNdkw",
  "key10": "4anUTJizUVLLYHe1L6DKeuZp451aywFyP9ortcziwe8cXAHaMW9n2GFFSErusyqJcXkdfHJyrWiQ2cxTbTakvabW",
  "key11": "5DqRHqULvk5DYQ8mFfnXhLGEd4jMEJASAUSu9hRwqhxiibYWS71KFVH4kB8unXABA5uqgh8jNRRpahZR1bb42wt",
  "key12": "sHmqe7uH5ntwWezWF451KrrBFiqSs9EJnT4SWswKTNME4wx1WsguB3BkMgZ4q3tyqBqYxcGTDNWNPvpARHxS1YL",
  "key13": "nz2taHqY5pFjdq6RzAUk3ko9DPP5nT4PTSbjt6DS6foDohS2ZWFCN3XAAf5TLjJusJqcugJELpnqnnQ99Mzo3Cc",
  "key14": "3GEzTL4HcHovBCCRsFrPHtvbFe8Fr871zKWMNL4QHgAVBgne2UsKXjBJ7Qs2RKzKHJzBTWNUJgF2NvWdwKnGqUQp",
  "key15": "FoCTsHG3up5sn687mQABP3At3wxTXYZQemb1vfctWnhAuhAXgcdohb1SwADS6hUrEh9mAsk7SbdpTwxb8MyQBWH",
  "key16": "2BST2L1sXDgeBM4PEjpjKn29279J9rijeqC9WdAQvkYWNCSqKDEN6HMq9YELcC4iZiZeAygAoFhtcWQUQwEe6Bv5",
  "key17": "2R1KMnumVwWNpLGvSdgDFDdrwNWtKmKTrQG1sHtBHNE42SjpWhnBBx9jJ6jrmk7abdYoNaACd5Epsvdq5j31aYa3",
  "key18": "2tBF9RVPgBNMPhfv8iNCUiCAD9XA2JAtYWr2KsT7cXzF9wLM3qkaxFca2V5E91m3nSn3ByH1oqb7Se6KwgdrkQZU",
  "key19": "2GHQe6DLNs9P2zoLK16MtLG3W1r6thEMb4RB4cNsoGMqN2FWCSZQahwmW5KE2FeX8qAGn9DZCoU4XjEAtAa92UTU",
  "key20": "EUJU2R57SEX7az7UYqFcWWz3dCzKZ2zESHT9GZZNeEKMnRv8fscmoZ3u3DSmHHKehYPAtb3EWoniShgRHSeqDZd",
  "key21": "4PYwoMwXPwaTHu6h5SdqfEPaxZC8TUp69BVXgYhdJtBZZjC9zpyeuYw99P3Yp7pL6u37F5AyHTiuoR4uuKdeeCUt",
  "key22": "3snxkMTa6fE58MqEY2hXZgjh7nmLTWV7MRCxowgrE4d8BSD9AAaTMiMdHoN98SN8L6bHySD3MFNaBdx9LG2xb6Qt",
  "key23": "5XCpwofpsKLzQNPE3LL5wUW9vW16KrRB2Jsx6ftmD6M4VpSjKYJri5vaBRPhG5JbjsxDvKwmspUiFgCat5mX664m",
  "key24": "5kvmmn5CGjSuaKRTLorASWj8X8NguFPgnbads9vw16cjPkwyiTtk7thvbyXtpxkQiRfsMrDY8QfkkLEE9e92eNwY",
  "key25": "4np7EzaPiXU88j5sv39EBYDydx11fua1dSbyJhQS65ctQAv6o2VXGX7VPHCWgrb2HvenWWG1GpRngKjyjR1HuByf",
  "key26": "5YtFAVKto7NJqweuGgU2fLra38u8VfqK5o4AXuemg8nMUgQLzHfm9LpP7QAA2Gob6iRmEvjWx3Qy1BL3K6aJFUnZ",
  "key27": "xjQNrcFJ9ypWiAvWFLXANgpv8PHNRQGUbyJzAe8efwWbpqTE869ADv5h2ZMjA2j24mFSMKV2gKCjcKQkdU8pz2j",
  "key28": "3tevzsQdoisAAvWhW4d4Ak6Kp7L4Z6fR7E762bKMCSjPKjU3dE5FByFD6dnzfe3XXX4iVfkRcwjMnsBCd4MzYx7n",
  "key29": "5PWLtk8fyoLYBYLdL1zCqs7f3m4WhZPDEFNQsgKPBFVLhZ8gqGPEzitQZLEwajp8teyYjX4odQDosYHZkGp8nRB",
  "key30": "47kbpgVKS2z21oSAPYfM8eCbHRchn5daHWrVQBPnhDC9PpzFhwoFExTnnAVMeLnBkNVv6s1uVmCuS6N2CY8p52uW"
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
