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
    "2xk9p46dcsk3awnmMudxFDhihcThAc9tgv2d67YVE6YhXhjFPUTJL6znxmNiosWcpfSybUKkY4iAeWbkyNo11LdT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21QVBXypBhb8KNsub7Wv9Bcfk8HnTic8Z8ZyHx9D2QUFoP4RjpjTgiUQRSWJ69kJ1MxkZfVvtuqcm9XxAxnt9qv3",
  "key1": "2Cy2P3kMEWiqhoDs67pJyQALQKZygVtTfTrm448xtwc39jGneyuMQQ1Ee7UZHLFx4zcru9TT4vQQHCKEUgQKCECL",
  "key2": "4uEkqgrtk413akt6grPYnRTw27YoosrNBqXmquRMUyFv4k9DHGLfPCPtRhF9vUFmSQuAow28zvPnkZ6ig9JMvWYd",
  "key3": "3VJ9xGeuEWf5EiPk5z2wAba9LPTH8Tynh9Sd75MK6MyvX9uxzD9DodGUYxY8d5K8dQWjiqdd3LncBEs4c95R6Soh",
  "key4": "ccMwbkMyqdvauqjyKrcpLnXLFZyseWfGpzdNPMRbRpAa7Hyz3QSB8Zh7nScrdCBe1qDvpNZdLspkccsSeeipRKy",
  "key5": "5fpFhw3sf7sNLWnqijURug4VptjrET4k9Ze2rRquDjnr38VPkgAhMufjYx4Qke5EezpENYzv6oeVpa1VMzM8gcXa",
  "key6": "2RBaDHPdCr58URE7s5FqrbpMS3VWTJwz7rabvPSvxHEc2FknpFJMqm2aFVPmfjR7j2WKrNtWi56sSrsaQCqH6XZc",
  "key7": "5R8h7tgcgsWKxbmx877iAQN2NJyamdEf3jtBspodeTBNhhdk7hLyo8Z75vgfNKVPQjCyZUjjX6nUiCCwTzs7WLxm",
  "key8": "2oYscHC7svUvmfGPRYWJNzesEBVBMhc2CrwvHV5NS1BQiAP8X5dVPZAmBfWRvEGaki4RmiCViob67NwfC9YE9SnH",
  "key9": "3rqfET3qodoP3dD8WU1yVbt4QYSJSwCrYvxFDokCG3Sakaa3PZbYfufc14hfcWnCQ1b8ESGsjSFmU5hNPaFkbLWY",
  "key10": "5BS8P9jd13dhVNtz9Q7NstbZjJjRgDbjrGCnsNVMbmUXQjDQoXKJqTXenGitLnsafWkasaNQ6R6rJFQyW944kHJJ",
  "key11": "2BtDY6iGWzBbKYZBt4VhnCGrfvyY48ZMYE8GXGR95Hcu8Dmagvps4grvJfbBaTF42kaQEzGG37muRL5ZmQeqo2Zk",
  "key12": "42wwtSYHyJYNmBLcaSPNu45cCbCeEMpywR5iHr4ttXG2SQGJDkQAsCzLdRNjjPgWva5e1dh6MMN57o6JK1gyvttx",
  "key13": "hY3svVsVYW2kC3ubUqRYFh841NARkdeAXhpbDE9zxJSWpURfoRGDAqhHjNKad4nH87htsT1jSNoJzeD3TB7kDJP",
  "key14": "4oiXrLa4f9HRwNBkyZ8Hk6AS22A8pV66HqPWdUZQpHb9yNUhAGLXbXsc1B7ghjibhje2p3RYqoBgByKwppXMUsTN",
  "key15": "fCKMTPteYa3G7E7WAyLCdbLDCYzgMgqueaCXqHqokjfb6Cbp2HY4ZUBN5e1Ed7LkCM2xxdHv4kEuUuPFK61WzXw",
  "key16": "bvVqtSe3J3kNAYmCNUaS724BdEeLBftZ65CPHztVmKnSQQWSFUpLd7b5NmwRF7deu6oZsBGZPm9zoisdGjHewgV",
  "key17": "4kWufsnURAVG77EkASuVB1hZzC9TpPNPL1vhzLvJWMcJ2Guy8XBhL3SRxjNyLEEHvDDPbvZVtVcB7N7RrmSr5oSG",
  "key18": "5vCwQviXRDcbXgzBFiL6JnzxShgUQTdxXq1R6P7ZV93vzvozF1MCoPQVCFvqexKUcpebZ6MMdciVaAFUaW1qz7vW",
  "key19": "2zwcJR5Zxmc8rSsrB5zQqMMqU3PE5rSDwLCt8EvURbeQ1hxaRAXbFFUfUyzRENwvoUwhe1Mvxnb8b63naWh42tu4",
  "key20": "47hBK1CVWWvtBGFfBeXax5irBLw7QCSHECPTBbQextjz2XKVumSYVrLG8CwyAuiV6uyDcJAwQSr16k1bcAkQ32hv",
  "key21": "4xKQYRycnForjYL98QVJbEx6mQCfji99UDCjF3eRZgT1owAiENZbjqy4BJrTssvqSvcNADHMGtjN11fUi1aNwkTd",
  "key22": "5tHzbteMdqu9W3Tqxx4AvxZWV7Bp9xyBA4SQ41csZs7xUhx9vtvzWXSeegg824ZNgrT1EXoVUvg7bXGZJQZokKLc",
  "key23": "4Tp2UTbmMpSEb9unxo8wpP5mNxaRyV737kFdyBJsX4Ay8LdMksC2n9D5KdtYctWLAMoE5WXDW3xJFRCbcfBjAKSH",
  "key24": "jGcFo9q9zu2qeL73NLiKeaz3KYaxEoJrhjSUBixUwGsTX9S5fyAuMChVzePGf1uJnfibmZgWYzjMBTNXU6166a1",
  "key25": "4yLDv6PNUDTB7y4pRZkTZPer1evzmin8rGsYrJWrdViTc5bB29UnzzNaaPf8CicysgW9muzXJSbYDMPzj51Qsp1w",
  "key26": "4gGJbL9RyvjTwJeTnGSrfp5F4y2h3ysKAHuEDLoKyw3xeLQs1uom371m6qiBKEZvMdXdRAfHjNKaM63RCFSMBBAE",
  "key27": "3PBmJAGyZzDNvnSfBQpcJxxzdRHJfh5Jub3DxCR8tjQpnQkmCDMmJhzXqnUpuBzcRTDW4aB1PtE7GJHHrk4ESDNP"
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
