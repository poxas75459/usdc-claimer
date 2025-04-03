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
    "63vS6xdkvjc33xbaQ4kfAQe7HhhXuUPpqfDp6z1zHRWfbUWMw2vnB5egxhwsLG1hMoMEMvERYff3kLne8JFgNs79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V1b3rA9prkX3VkWv1S9xmbZFG5K1pXGbECKRJ56UuJu9oCWZmNVHqGVcMN7itLLxBmnwTYLvCLAGAV7hjWsHDkF",
  "key1": "3muukRM4hkS1SEDJnhzpszkGsYmoF76JBPrA9r5mXoy1YHJP3medm1RGHx8LChw347hQpgcCfS3CLLaaPpbRCxsZ",
  "key2": "48uLN1YLxM4MD9Eyy4ge7N4pTMCn9FhUfbbocrm6iQ9PSpRqeH91k3RHLuPMiqxE6AhTbm9q7daMqfLPgK7QRP8q",
  "key3": "3AvC8NeHEUqNijVE4WhEsHhhYieWCCvigo84ih6WwXWHAj1kXTabEVtZx4YY3RE9f33GnqdRYi76totTDSfX4fKX",
  "key4": "3SgwTqsKDAZMgoiVVtAUtZzJh1v2wQKCBZ8uA84ioLN8AX8mmdAWVHp96seZeKiUPrsCqxhiH1WuqQDzCfSCr1EU",
  "key5": "5cojAMMVS65oWvX2c9xsrnrxpV2zfRcFu7PyBRPvXFWdjMZmL22GamsFGECoVGxJrgESUG613P5DeRLQRQRA7yHQ",
  "key6": "5mjQ7KAf5zhLxggxjxM8dWySL2Tnd3cEUmhgDraYokZ7AfioN5cC4Sv9RuanfbbUZs2XtmikEHszayHVML4HHWuU",
  "key7": "2apWEuHCXF6oScPUCQ1yxYHbEXQXg3BNAGDySAYwy18SZ6BZDMBERoPXtGTvNv3zQtDew29KTQ2ifBneTXCep21w",
  "key8": "2VPtwDcdZburVTzL5vmLkBCZEc5RwEVJAJVU6SUyRKM9gzTbKt6gnp2sZXigLpeL1a4DCHrFrm85Q4kmHN4hsXVi",
  "key9": "hSXsEJdW6yszEVdKywz896BP5FngEwG6XNNkSehxuGgzRAsAnMLJBx56fK7mLDBfQ9N9ho1rDiQNr2E2aGTDVYc",
  "key10": "4yJdmiXkyh1LEAscYD9p2XvLb1YSfnDhDJ6chtDmjTqRiDRUw7EAh3HghhJwGjSxsw13yNKtqikaVpcNWUjQBdNh",
  "key11": "4K5zB436PVtbDLrXqkZbryJD4ZWnUFTDdGGcxDK4i71pEHX4LG8gKmXeMwXDQ73q7jPDUjsdWPKR8nSYgwjfuE9q",
  "key12": "3oPxprCME5bRYGDoGavzA5HXZihzaBx5jkGG3zUETXtJff33jqEBb14DhtCaxzFCwbZRG7b6sLsSuusUuwtMmLVj",
  "key13": "5zDrmPshE1kbGspYVH1iErC8nNuuAdVgm5DhreeKu4ffXdXiRnMkMfwFcrXvhvfxxah7kGyVsUixfRJ5EoCyXWxB",
  "key14": "2ZWC9TVZWfXr19ZK9xQjvD8sFVWp5GrSqds45mvm1P672qgw36qvxaRjUmKRo6DuLn6DZvbgXZ5276tzSo21gQWc",
  "key15": "fcJVBHrYBfFkbyQVjQWtsZwConw9ti791qjLmz6pyfZQy4pkRzNFszSsvHSt8kdkSywN5KaRXWK8TaJdyMYoask",
  "key16": "3s3D4Vk2JGi6pi8QMAqwg33A13owfzt2QQ5WmxSYfNvNT8pmfTtgU1CpmbJnHD8wKRV2D7sz1Jv6k8kTDWdCyeZB",
  "key17": "45MGS4hfNEjyvU3NdABgMQGS68XL4qUbnikfCvKUnJvFXxemZCMTZtzw38HvdhVkxq8SX3fKpTzjaxRYa4YsjD6A",
  "key18": "wPqd6WvC52qyjwKmwCEJ7X6Hx22P2taR89dVg32Edc2A16hGvgYvbgvNHZJQ8NL7C9VU9XYyjwfgY8bCehXxGtw",
  "key19": "5GR5swdkwyHQezCEBm31edCSSow4odAYZMcELi51gKzULnR9TUVsSutakroALAp3XVJ2vQpzLjpXHUCVsmW4esnE",
  "key20": "4gQH24tExZqYU75VPkuDujY3reuZ9iBUpmhsMGxzHyPaJKZStJceiSeHDkyxNYk7czVPETgQdWtnhsiEtRaPNENH",
  "key21": "2sK6qkTxNuMuNqtYgzyALL36dXw3igvKzCMdMD328iPuFvRA926SPGFfkfXc98hHJvYXknHEsBhT2cdeRqaZQL8m",
  "key22": "4KfuuMmjsYotoqpgEBQcd35bM4xq39w5bhVCtCxMrQxFZ6XfUJ6CwzjxatrnQuKbYkTupnfSbFk8VsVMwgWn9qJS",
  "key23": "5JbTMG8KZLxy4cR7VtbBEfJDjuw89TdKvbq1qdsyqynn6Q1FTUBMJXF71oU58pnMFuTqoY6XVoBRUyYddmVbZYhs",
  "key24": "2UhW9C6dgFUyaihP9RVNVwsw27JRG41DJpZqezqwkchgi3WARDbbQegx8CeKbgiQkawXHtcUbZfRYAeP5xEyzCGG",
  "key25": "2EpD1VmrneMNKGc2myZRPXftnFeH338QARZF6yy5HLh9XC37QFjP5f4dFcPFeA4HtRsrfvvZ63AazuHpT9kxcP2E",
  "key26": "hoRSQ1faBJZtP1g24mfvdaD3zLhnAWbJ3LaeQpX5zKvC3pb7sYhZjGwDA9UMKnMqHMDRJg4Kj9M69WbLKhaB966",
  "key27": "4zY76t3Xh3QFwLt1tLjrGPLp8rfkEaf5mg1vfuYzRrRcKNTnDJ41hprxQBJmW8CTDtpwE89oiTXiK9FvQdmLfueR",
  "key28": "2PgYcj6j7sNQ1ozC6FHzhrkvGT7pRPhcsYiryfL7AZ4ZFZyKVwbho4GXt6ykmCGKW6tqk8rnSoGDpWQfrAcBoT4e",
  "key29": "5vNY9K41AxmAWLjhgg9GsRnJq7VAtScbByaw1ur3iojMsqXeDAtNZt1g95WSKG2KdYjskm7WZvzhAT6QRXu9aERK",
  "key30": "3B88ikrqHTuhvMoRXywLY3HXqGcPburq6xR34UaiJ7WraHwrrX4KzD2QcZrVfE6GxAckuJ2pRfemLoohQGGKRJfn",
  "key31": "sYArGqHMdZoPWTMc1JtHUAXVXGWYmDnpu7NomDtgAC9v5bC2FFNhY3pVgHg8HKfzJAzndJDNmkE9o9wiESaNR3Z",
  "key32": "5gxCwsL5ziAnzEqLSKPipWj98A2stk9XFck36Jkt4EAo6cjQaCB2CmVoz4sENBXswv9o8GQTnWhHS9HTXZBXc3r9",
  "key33": "29g8qPnHgpJUQJtykhWoBfKSvALA7kx9v1fokp6Kp41rSGhcvj3tXHD5aPbWuycUYCBwNHq2hpfH8Cd8m5LyG665"
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
