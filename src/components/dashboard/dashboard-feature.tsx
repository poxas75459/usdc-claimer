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
    "3LNRDw2djYUpP5RHWhWBEeYhbRSrWsUhpHUFDQtCE2reHrzvrd7nhMapR4oYpVdCA94hednh8J6gys731v2nsPR9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uCcHbhS5ARcpJQZwwkGwY1QaghrjfMuH93c4kdgZ636qgzJck2QnxTSbBnxabpYJcca3H6yt2NwDii9LY22WwFb",
  "key1": "2Xjzsoid3BxWweRm1f79uXgBpsonhGA6c4e1XwM5RWLzFNTKbaQVky2RscvwWmAMxiwyfkYENKrPQC9fBGLhaViJ",
  "key2": "WNfGFsbY3naG5DTTeeNorhFxCPMhMw4tbthPSG5QNpuUE31vqjEqb1UDfm7NyAqzeFMEBZwyqJnmUjcCrTqqTai",
  "key3": "2t71YctdJtLTD3zG3eWDqR3GrX6mCUBcUd23ysCzMCrF4wgbgZFq9nsrxGQNWDqxVZkhMPKU2d8fWHDpcR7sUu7C",
  "key4": "yXchae2H6utUUtBpRVPsKY31gq2Hv4s5D1AfUErEE7E9WCte1i9A41TNHqeAJk9TXEyhdK99fZQowrPjpxQM5Ba",
  "key5": "5uuLnGkRAm4GCnfrYuwHdBQLnkiFrCN4q8dudxwQTxSj5bXp3LHLnd8cKV1Aaxi8eZ7cWT3M7Em6iiZqZ7tSwMDC",
  "key6": "5QbcJJvkwcRDZMa7YRaVHqACLSUgPQS8jp7wjSpaxqcSDn6m4Ew1N3wfH4qu26cd4Xm2keA1VMvvyXdGz6ygANfw",
  "key7": "4LYJRXGzzKZhzJEBm6F7uBJ78YVjAecUSBbBDaJidtCkDCVbzk5XALsN2N3KBi724cTeqq3Wq5d8P2CSjRkcXPhF",
  "key8": "5s6S62wDCcwt7Q1L3CmiJB8TjrTtZR3jhxWaRRsWrqTxCXNZnAxyHCaKDU2Mzs8rMmsUtaK7rXA1Nyh5XEkxdmtk",
  "key9": "2iKowDkuc7HLmTnLJ2p7fEGBXRFeFUVU6XsBcepp5MdmUUgGh8yot7x7Ba6xhwPH4A9jgmsMnFg2B2VuBhZ4xW7H",
  "key10": "fUisxCQC8WzgtdjaLhHJHze4AbiZkMM3VFr7D77ixmDHUbYgC5ESyv4EgDY68PhJQoGFRR5PTmq4CnsBaBJakkN",
  "key11": "3LQCiQKP5z6NnrgM1hjpMtbVj1YuKLhWvkuz7Retr8MzLRfnQV144rP11rMPBjwaWjwMwVmTLmos9xcs6cv3EveA",
  "key12": "42ZySJydA3YD8L4CPqBe45kytDRjKL4GnA7fM3Y8cXeningHje4QA6TSo4qcGMvmnKSZULRhH9kvkmbvKzLXQpE",
  "key13": "2fsqG4kuFcc5w11CRwXP3ER3eDkrB8FDsD4wea6w4edCeCgoDaKa3XCeG3QBTHvMDuu2pz4WXNPSVHFE2nv4TbHW",
  "key14": "4MNuThUZJvw6HgvLkzhshxd4ZwAmfbvAdF8xwGGgFBBVpx1B3eLSX5SD52ssiiB83pyU5GVHS4QxutrmNSNMfiE2",
  "key15": "5pmC6wVWihQZpnUEvZqPAWxTHURvf7M9Ynj7qMpAMJsZYHPFUSQp23AjcJkYtXzT1DxU5oXJEj5qq8xToYdxtxn3",
  "key16": "4AQLUnSU7NYepQLEQa8mVy8YuwRDkJQsLcmPk3PHMc3Yz6cGG7L2yfmmuCkcc3m5Ph7ciMLyRxfMTHHS84ZngvDY",
  "key17": "5qrRGNTDHAdha5HGT38Nz1bkrLjC8JxBAXnUMmykmvGBVva4DnWXXbxCYTvctRTS4J49aAWArh5oA5yEi632ixYE",
  "key18": "58WGgWwiC1St2QMiKn54VpJoVxGp1jxmAJJCPyTtbwgUboVobWrvqveVV4YUkdDwHnr6Q3qjQe6RgWkKGC7FFQzX",
  "key19": "5Fh2g3bbzqbxUTFFj6cNzLCRbYGH5NRKnuiLv746xjzAkaKtzPq55Ro1vCgSTBLq5WyUvVGU3ztE31SkahHPZcMg",
  "key20": "37ZrEFaUMASQ7nZ41SVrGsPkJM4zgu2jPa8Uc4fU34PfEJdhdQBUJeMssFLbxra17CZWX3k9qhqbBGDmeeJ2zAMr",
  "key21": "2fqQ8sc7WMCbyMRU2id8oiGn7UnbL5AKHhs5aF2JwQeoKRbDVi48TURCt5KQq21hCVbEKEmMDzbv6dpZNMzrSLw5",
  "key22": "3B9Qo6dKhg1pwJUWugCixa2sLJccKCdtjabAGVg9nteGu7MPpLsP8R9VRdrbotFQaZdghNEcSEn3idFcT5y8xyCU",
  "key23": "4rT7R2doYg13irz3zgoBWMpLgKpZcfjBspzmx4D2DBGaVuwHsgUx5SRXPfYbvMZqWCX9WYGg9geJQPxbFMGX68nv",
  "key24": "3ZyWbcNXaYh1zLMx2nctRWDXuuFsXRGPWHeYRzKztyRbhAZRsJzFvJd1eYaEFk79HhtvAvjxmxJdqfXg2eWJGZpf",
  "key25": "2NLF3tH8s2jmwmWdgiWMikiHa1jEUBo7tV39ejxeBWsp6VZEmumQUDHcWbXNGqz4o8EuYuiLuonxoQQCaMGhq9hT",
  "key26": "zp5JkoNaSkBUdjkyp6agQsPs1sRy3yi5VaQqxsNQEj7k55qGcr847tudcLZ8TdCmFzkociMabrACpMoSMV6yQfn"
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
