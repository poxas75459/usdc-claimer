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
    "oQtV1dwak5anjHA7yawQbFFf9ki3Jc8vhPJe9d9Q4oAjF5b6e8qWDeURHoo9jcxWNBC8pqLbc8x82dpDyTBa3Wz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59tgsFG7if3gd9xDP847zshmArotKsrzfxBbynrzdesBN3gePKvouTW7KkAYj3vtgVfCqK9fTHqiRL9NKfG692HW",
  "key1": "5cnhhh5VTvivL8T92hz9Fpoy2TXLiMtmcBnFEvfpcXoeJtCJdPs1dpFms8idLQ1YxTD5saoBt9PkGTtnR83rDiHA",
  "key2": "5DwUmwGc6MAyAKCd6dAKsoqeoqaa84qAkJpPD1PsGCNLL3DmLfMkGUFa8HH7TKsB9hHZRWEiFeQLdjZr2LfThDrc",
  "key3": "3RyeNiB8tMABaxR9DBF2Go4WMhpekYzGHGRv1j2fhWASra21NjtmxPXxtdSsin7UEzyRLsTTCUn4488VEm8n6z8R",
  "key4": "KUDg1Cz5psUeT67c7mZzb7TM2evMbDEAZWis2QrCWEeMSL9avLxvJMWd3xJKZqvC4PH5kmnCFyn1Sxw63NW2a5y",
  "key5": "3ptNmGnH929YAAYLihTJP7VRrB8VGNvUwoaM1y9gjqmwVsPThWzmjRRbmmwBqNq1QuBs9smsDMRZSeVU6ZNgcuAo",
  "key6": "4uap26V3ybn1UTEjQKHBs87APQRzGfhL445581p586qmbwaNGg9ukTcTEYTN3E92ZfVF1XPi1j2A9RyDU8zuik9G",
  "key7": "2bWidBLz7Fmsgkn8VJgF16vh4Zao1BsUgxddAbd1Pm4e7khrZE5UKaCMg8RBWn5DhvBAgsx1Kxs5knbwV26DA7AS",
  "key8": "64M4AjTzvAji9e8tr2jyui1VC7LN3V6yNznH9QKTUX5evddtpMtqmDHczLqZjh2mNqx8PaMig9eWJdtEixDPqrMF",
  "key9": "5Bt728CJRmwWsAquQHqGuPTF7BXqcfttNNbqNPBHBCSQP9ivu9WE2qUMqEPUBWegMUC8b3SieSTTCxbNyxBYW3TG",
  "key10": "P9sresNNDWTFG7drbpBCQqPGwLZXd4KQb3cjqM3UgcaqJjt6Lcm7qRTqVMDea4aA28GA2BEfhnhK1mmABU3gRae",
  "key11": "287kJiAXUg91auVCi9bFUxqMNv7adyoiPT9Ygvkb8b4ERBDdqKeggJh7KsgXpdUTVKyVC5g52313etuWbu7jLKwD",
  "key12": "2iRwC7uaUT3VbrS6t31HCaRr5i3LVKVtq9n8C1DuHFF4XGYwzPif9YEHpFo2tNwWpACpUjyz7WoxqsYWWagZ5Lka",
  "key13": "5DdG885hGAeCJLUzJ5AUNWdmMVcwNBg6AX4nPkwG4EtytbQizKQpKhWz87GDYzxELsnWsurwLoNWG6R7Bzop3R5C",
  "key14": "5zARpvgtJreZHn4PTxnxwn8b9Egdrw3uF1ur6VLDVhuzf8JHbBXktte797QAfZqkGMZ8DBJrGJJaKumQJaHnhvgA",
  "key15": "4Sn88R4rgSYzU3FktqHzGscaZb6hUUdhSxf6qB7zq797e1PG2HqwrmKn9T7P5GdyT2hJMXENsvKFLCCmDz7U9KSr",
  "key16": "ZtHs3MwzdjxdEPUW5TYnJ9tsNawWERayAHxu5DSkp9k55nyz2fJjta7HwsGzNFvJ38MsaCCC4N5pHNzxQM7Gmrq",
  "key17": "5cR6kzUdvUUzR54ns8JRQiu12sJuiCTZ9JET6CFpYXRuGJAKHDkjgvWhREt6VpnWZeATPnqdDtRbakhRWe26VHqN",
  "key18": "t1XGbLkfKfihkYUthvbQbpBb25tbRDv9CwwCqMCsabtDupAHZg7kQQeE7hvjzVPg4UMd1SshXUZT3ChEAxXFSKD",
  "key19": "4krSFADg6jXgWzYbHMfUJdHyocWSYg7gtSQjcyHR6JUt5amUiGbSWXjp1PGDR4bc4xgWpZpAZ4Cwp6qLd7EcfMU3",
  "key20": "wkGB7H5rtGEQmZ57ngt9Ruu7BfFRD6LKQhLPqYbpzwzAEo4QQhcFPKZ7XfJmWGqWHKANviZ94vdm4G35E89XPEX",
  "key21": "5qKCZv6Uo5nxPis6rkUy4RPhmLZZF56fzavk8woMZAwAyG95xR1R4pmF21TbSLoN8swQ9QrdmYy3WRAyAKvXF8AW",
  "key22": "kRrDb9KMLS1KgXMWXcGw4qzziahBwB6hHc7eeD3QyBfmo43uUh8GwCpWcR7XhTUV47SnpnZ5PoJ3egFxDfGXnKA",
  "key23": "5ijAuMHsmmdK9T65GpYvfXZKTBu2dAT6Hdw9J3wfi89a9TqcpwcBPCiUCrunofKGy9o5Md21kgSVAWp7FVJrp1sr",
  "key24": "43VWHcyFenN11zRmucpdmok3S7fYWLQuUTiRKr24nSPDNUsfJqETHcd4AptSKsE5QrrNF1ozNQPQShVY8SyFmnZw",
  "key25": "4DkGsQZkNj5m3zfYiPpZE9smXKBMbdhsLWVvMPwMbkRHXctHLU35eRmfZ2azPZD9CJxXHq9LidFtG9Mn3gLgpCk5",
  "key26": "SyF39BeJjwFmgbUWZRifJwAwtmzBRMNzXSUBHPgw2MfdnMXm97GCpoTYhRfr3jGtZXc35SeNLUxMjcoSuQgMbGT",
  "key27": "5uyTrueEVeWG7Eh4US2wbf8AtVBKkpJJJCyHGv7f5cywsiC7CTdG3Qf5X95uHfwUuZE2r7V2Ns3efmuaZgoU5sT3",
  "key28": "4yNah5hTJygN9XtstrTbD6ugbXmvDJgyMM6VncokDSV7VGXa71uCEVf1Ve3myHxtcbowiGvqy1P6WujD9DMu83n3",
  "key29": "5P7bAwTJ2bRLQCPQeGzYwYfzJGGJRtEzus7kpsbV5asVKTYdo853m5ESQXNEYVGTBCy6j6zbos8MJq2ApjkAzb6Q",
  "key30": "3PXB2QAobruS87eDV2yENwB4EWEMpE9oy3fzrJ7SkQZ3jiUxBhEB8aUmvSnywsjBWEvs4M8dJN82joqnKtn4eSM6",
  "key31": "ZrgigbHYkaRqLKb46W14bVcgxkiz9bCq2FJwJroSBF46sAjViRPi2ZXkA7oUAf1Mqm1P3WMmRnTD7dtp6AtmvVz",
  "key32": "3obzVk44wf9n4vih4oGLvTDNm1uFqeHm9C1V77RDPqNYtt5FiWBJdzJGsLRR9HPRCZqcmMmag7Ap7MJcC6gSHXGr",
  "key33": "5cAFK3nHTjendmt5iT3qXyBZX63EVaH6R1pKFZNuhMmBjYuHfKmwGD9xoUnTEgr3eeo2LF6E8GCB5NYtGN9hC13"
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
