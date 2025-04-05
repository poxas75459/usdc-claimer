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
    "5shg28Ah21jYbZvD5PTnyzE9CrBbMHVug87THaQqPiV47NBoMJcbigb2qSvHb7tKeqNzc5nB1xdFJEDDBj2E4Btu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nomycudNmC58gCyUhcYHpUvrK7LSWEQsWxE3hSKBuQixLm11aj4xh3A9KWxKefhUkJw8rpY7U6apAUuFToQBrZS",
  "key1": "5jdJQE198hsGsLbdf9ctvi7EPFouQ89wdjFRfK4nBWEd51U2jKDzG6jrFnhTwYEWVr22BiSySFJMhn9R39edi4o7",
  "key2": "X6QaWVa2oBHuTgoSeunGhsiSJPfeZH5DwHEy1a4nt4auwDVMWQ8YpVTnDhDB3sMwJZ5ZVoQVtzfRSfUD322ucFr",
  "key3": "2gUY8MZWuhSez4qVuWfC9wukLSn4kcegbaALtXPKX1PQJTJ1jjpVZvqm3qPT7J4KhTo1BqfT9RPgB598UiDDSmrN",
  "key4": "25gDQfSReQTBV5jKHPvVgR8gZJGNDP3HZL1MaXWbfcF4k8yE6ZR7MEmVR9DUJ7HcW8ALSDCedyCDpHYZFge4k1h2",
  "key5": "3c3grmuVmMcWmKHAArVw3r56xwh6UXKMQAkqjdHSYMyB7uEK9k8HVnHSVZvWwB8QGurVqm39fXPtM5np1uyMATTH",
  "key6": "4ix5FF6hoR5EHVG8xbPqScGBtF7oRUgh7NJ3KoAmkupYb6UAUdrvPCnpwJZU5z7MaELGcLoWvyNuqW5ZH7LCWFno",
  "key7": "4HvqUxqyt7CdVEYAd7bySmRH7Kyg766ge3nR9v3cZSJxeEr6M7nVRiejQjbfSypJAirP3YDzgZ88xJhppt8hTrYJ",
  "key8": "4i77k3K4S6THqBMnkahGAncicrwqnZEHHNwq3G6Wbe2k1QGKCyK4bA86uNQs1M7YRLaUhMjNaPqr8B7F434iJkaa",
  "key9": "5gYSqTiYrZKLYywZxgSVoS7mDRERwQpi9CfRmrtdqr9Z8yPDjkqbZ2NfsN8DiVcVR46yc1Vq7Rk4SKxGV4j41JfA",
  "key10": "2cHd1JYdfTLP7pdTkH7TPeoKsxeAkSWrL6QXVRkxJVguuQEHZ3s2rnfqFqBHnv73NZwV4uZ5PuN8V9T6Rbv38qXn",
  "key11": "3QqWA1iutpaB2zMMZRNzwQTygi2PTTW82Xz4S91g76pJeeiRewqmw176A2q6MdEawwJxC5SvdYGsrDtEzot8Q7ce",
  "key12": "4x9XgjCM6PsReiw1XmYhBNsqXYoyTU2AXbtzGd6AuiQTpLzjpUuZgCPL9Lf9itb4DswYNJrWrknNNjCk6chqhji1",
  "key13": "gXoXrpoF9mZUHqftX96Q5ysB7C47fsFResHJmmHQZkUVacjNfZbgCQMoyBUutGVtHvYrja1JczRsGyZKjbLKQFq",
  "key14": "3u9umBxxFYL3MFqtL8bRAXhfXNce43J7RmTwEoGmLMXwNyA4dEEKh2stBiGTvnLdYkiqABfbvwRPnJT24WNww8Zg",
  "key15": "3ifQeTtUWcHHCw2QEekLhTxVGL6WGL6KQ5fbgxnXTn65UxvKCXU3KvLVRmTwhg9VwgHa2Q2zitgPUoU2MfEKJos9",
  "key16": "oQgxPyN5r3gqVpkiEqs3uMmvWJwVVuHTTuhw5FkcXZVUkhwRhntrNbjiA2iCn6s2UFhFkMxvFb4rs1R5YBMt7Df",
  "key17": "Lni3aYQ48HqRfmrCyEdyfAB1y1bEw2WuBWf1FNJPmdr2jndjdJxc9wT2xwasPE9BvFff4osmhbiGMVGAkCSMzoZ",
  "key18": "53dgGGshNndAYCTPuCDpPM4LTu7TfBJBori655BDR1FWr1heGLTKpLLkAmXCsfRGqfqweWurTwMc3JvWs1JuHU4T",
  "key19": "3R8wahSqDwK9nQyCzEeeL8tShBq6qP7FwKeNUVciQXMuHsWachtxpTvhi2EkecR8viKAxfrP2bi36nx3ve96Hxn3",
  "key20": "3n975KMywU6F5KVKi8aLnAoqwKEeq4ZfUioUH5JhGdPeEhdKUvsM6fQxkS5Ury4sndb5NGDeL7erXGDnXhBRen6m",
  "key21": "65j1mkpKUoJBqHQTXiy7thiRbq61SMqGGvxBiS2JaAorvoRFVoTmkLTEDRttKeeDtEk8CkEBk8qR9mskQD95jPGK",
  "key22": "4n2Uf6NftxWyBXg77wpkDwiG31r9hr7caYYMeksuQjZYv1j7pTdQj3bfQAa7t1y9wgMUPxSLZNKyoGcjNFYVeaBz",
  "key23": "2MYu1kuoZCBomqcGuG5v3uus6BueLzyD61nwrjrsPregsEfAcUeLbVof2Y1LZYfRPL4ZkmoX5nSqMRB7Qcn2VjV1",
  "key24": "er67vWYjef9QEWP16NSiTBmtWqfvpUSZYCDVxmkDtFWWty1nQ2mkAdGPkYz8phnik3B9wYf7LD4HABETUZskudq",
  "key25": "3ZLXe2aXA5W9UHF3bijKe1akNNsNAZJT5VRHqSauTiPHJ8ZRZaP5rnBf3PkjSiH3dn8rDakS9gMbQR8s8qjcvWEV",
  "key26": "3K7LPEAQHJgT12VmBRRRXnFBKZqEJxHx5ahdrPebkdGxPGsJqci7DYeVKc3gsdp3Y76D6uCsydzai1Euk9hVywkw",
  "key27": "4vmfoqUyuTBnhkCbvHLGf6Uoyx3BsBKs5M4B25xsNwZtj8EkRAAbVwGrgTsa4mTsyGJ1b7qwvPgHBGYkv2VqhmNw"
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
