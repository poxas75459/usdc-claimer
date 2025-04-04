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
    "3MJn6sR4qS2fzfVW9EYdz824S9FwDzLMBTZ9U4DpdDuTXuWjRa2S7gX1eEUVa7fyXzJApupxZ6Bcm9k9j7qxSuQp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TwraExY7NdiWtYVWcNqUwbPJ7h7b5vb4zqZDAyyoFeYa4UjY1CeNj4qta66ZQddafxqBvRuMRmNrTUmB1QEBcmp",
  "key1": "2gJGcsoYWYcmZbbyzUivajEa4GbVMP44aseCitbNF2FHHJmK7vCjjGy3iX4VsLgE7nHtA5XM3b93r7cEiRZVAjs9",
  "key2": "3qMtgt9H25Dw6274ifcGVm8AZLXzDTnYydAf2oR9ZPkwfyxbZNcGUg7bQrMV8Fu3pFRc5vcKjuZneJZqT1NQxM8X",
  "key3": "yX5Fjgbzx2YRYCKA3vZiJ6MNhcgEJoagGb24zu1DyM6WnPGLXD9oGyjsavVPDpEHQH5iMnpyRPPF2vrSre12Y6X",
  "key4": "52dR63KNWqgdeAqoSMsRMoAGbhtzAPu3yzL3KMyaxywCqSQpEkD9ZsubhhiVauTdgTuf9puWLxSEQcE8NpFv87YF",
  "key5": "3fTwMKBmVNk8YJgnqWrnABBBQDDeRRsfVCbUJQo5fzW2ueNDQQgpTwcqqHEfdWtQns2n3CLTTRRUGKM6hhcYMJWg",
  "key6": "63L63MSMPGDBSuBR9HCbATGHuF7fJKBEthKfT9GTnjEfE8LiN1YUXk2B7TQdHQBcC97SJZsmTS8WLH1q1jHvwVdw",
  "key7": "cRVPBZKGKZLQMzKwR4NF7hzou4aH3Ew8GgdYWXwGqJQaLaMF9jaZmdat8cestHRiXiJQ8wtt4vC5apThZu4cyEb",
  "key8": "TKuBUNmV3Rzu1BVCbPfm3o2SuTdSvW4iaP9QqT5ViKPhVeY2nowVH1172r7sfsb7mXLKV21P4bLFE6HYQyiWM5L",
  "key9": "5VH2PY3mffF7CwhXiUU2zUdjWhGyRbo93acNjAy6LZr5tg8QywPdtuz1eh3xvkSYBx8dwc56MES6338CryG7CPnB",
  "key10": "3p854bRfKrU74hw7jU5bDJ1TTrQJtETG37UXc8LRtiFX1PprEvXQnh95YqB1xdR7CXausMmHdmfcQ9KWFYppSDVD",
  "key11": "5hZueePKAAPrJvi62MjPhzEmzuBG5unK8ZaKjmJARP7kg7vkaAqj9eQkGeV9JQhdqKrZhTdTmUSb2ZiLTRWraY15",
  "key12": "3SGV25dnHZLyR7a4aF2Kh2H8QTYrtQijp7UKcKbYGcEn4ck91owHbpmzrRC6tK8jJiitugb5N96ycE5MqSTUWMTs",
  "key13": "r5K9LpMRcNWDoaszEnv12Z8NPdJEyd9CtvuvENCSN9VqcnB6c3mQkVuemy5amNpHmnBL4jfBmxG8DdpjBJSnWTg",
  "key14": "4VpP9iFuD3nnXhHi7k9WZLWCyxUwF2vR8jMmgNsLMREwvtivXUBvamnxgAhuH1xfC1Mj1nsFPzmxZ3tABt1XgBTa",
  "key15": "3kMsxAxNXD9jRs1KjpsrqFDeivDhqXdVWmHKCf8Z76RitBChYrZkVtCS2wCLrhHshU6oF6NziqQ5aGTcpk1ULpVz",
  "key16": "2ifvnoVds5Q25dEtfq1iV1XST7zuPMJbTuQ5bpNzwKcatWJX7iVia7WrmhJr629ovRckLgPNkdDmaU16A9UFKoo6",
  "key17": "2M2mqGyK832JaxG8ETCHuAd2zMR4cbdo3PqHgraCZYphzjWnuvgHwLBDWmwi6kcvtyktEzX4XuRLrqQqfidvbGgq",
  "key18": "61QfeMibDozfiVQun4Dpp8gpR72QaKziFWnQGQck88JPaWGv66LKjbomNti42acwW1qhiVRsnUpNWh11fLXxZqbV",
  "key19": "3qBacQRfwCZXd5S4TKkLMnAx1r5dkxCDwgZhr6RXtJNHRegaQvTDhEgf4Bvb3f9yQ6TPa8YtL6RWSUwsTooPt3yK",
  "key20": "65X9kEiVM2BQBJECug5k9kAZneKL3N1wUHUjVcY7tRJpvVjotv34TqXtEdRczUBPfJvikpVxaSwvENPVULsHHy8t",
  "key21": "T5tkxUj5HbkjmJk5AzFrfeQUDfNaJ27RfeRYb5CoAycdkez7RyN4fWux8UrdC8aBuYYtG3oAE4ePaXMCEFUF5os",
  "key22": "83QAutFQknCdTgV5RKVS77PFkxH5xLzgktb1fpGx8m7zX2WrEEBqcXPCgi8fQUUJREfPXbDkeWWj66HgbQXZSKB",
  "key23": "3yqRWrqk5SB5bwBvVGXXR34VdvYwW48KVxktTxNviYAzSpyYZ2h59nRiogvG7XNbD1fRvaMbQDG1Bm18pYyEqU7B",
  "key24": "2kCg1NdAGPjA7WgvnwTpuHB3BFM3gXxBMaA1wUE4fjgByzMc2MLDqHyWk72Cd36sVjeG2z2gTJAdwRYrbPN1jWKd",
  "key25": "3w1TBRbpEETWGRekVhJezg1MTZXnKtgTYo1weL8M1Rqbe5sGqUWw4VpMy4KyuCsvXUoZzJrocYM4pLeBvZ6jhqnf",
  "key26": "3b8kmoK4DHpts5Kt65L2sSAN2qgfmx415JSDUDh1ovjFYtdiXCqRsyngBhy9venWgBLXkkmHWgkBzrrT8Rj9mJ5g",
  "key27": "62TWYqpi6aarhqm6RLQoFx9UXjQSVVfdsV6y6eVb2k8XVJ18H9sKKJgGNhn4tNY4eGbk87bKBSu5yABhQEoxw79F",
  "key28": "2RepMGnYev6MXhyvDAVWEWd5z4ffMotgwycoCMuqsCyJ2mo47eXEUTiHP1sxCrdN14TpCkg2Gx1kP7sfvh4cgC1y",
  "key29": "sNnA6hXCZT2K6zNfVdAT8bari78Frd4gAHQtLW8RyiL7jFuUxoFFh6X334ZVXD4pYYUKqHmB3TnhFWTe3HYdnni",
  "key30": "X8694mxNoi1iwsdm4PhJPdAi14EtPRm5y8sY2qswsRdgi4w78Xt2xuZs3zvbG6TQ2E6i8LGs1NahvKKXYYct1ny",
  "key31": "2bp5MPHBiF9XCNWfVuw77q2rWUNMzecuWe8LWXiZdyoMR9tej1ZDaDPjZ7qNStHaLDnf1o9jaAg7XQDSMn2knq7d",
  "key32": "4LY78AwvPmMkH5DQWBGRNfu1A3MxbrmMGCDXomi8uuYs1F77CMJipTi7fjxGbayJqms6Cx12WNsZ29rUtP5qeZ4c",
  "key33": "5Lu8QcftkiHTx1bwhVEejXo2VWtmyxs5WThGi7s4xcnrFFZZ5WpwpBJDTqsGSXn2pV85Eiyh7sPjwPubNVX52he8"
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
