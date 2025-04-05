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
    "Q1zvjfrXfFCwgmm1Y7fuCDThkGJB5oXnHf1szkAit3ebtCsLFL5u8MAHevgLjW3bNjnppEtAodaamTJ2wsXwwRG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F9XDh9ZFX9B1kgpdebEuYWsd4uZ2FqgcKVzooWEpDHEncA8QSWGFf1XhFXjX9tpe88sb9ZibZumKfFrRoYiveZT",
  "key1": "4hkqMPsdnjjaPt4Q3QSMtykZQXtazAWtvKhuzD9kpKt6Qm7TFNRuD5gVhkbngzxujQHja5EiYEViHGPtqpXtoJHz",
  "key2": "28e1vTxTzJUmL83kMN3QRf6974ULiXMCbY3j8Cfbg2d7zaupPtmbyKzDdwLF9Nng5bsUk5Vni1XBS4xXfDzVGDvm",
  "key3": "5ag8SmfLNcQZW6kNn3arHigTkB4VEb4mWdkNKV684hSzbY4QYyh8nY2HjctvBVaJPWch4LQT55WfdgRSW7EH1QSn",
  "key4": "23DqUTTYBgXzR9SFYdD9Awy2JtrJHwa8eN2MDXfpTC9QeXAN3dVthNPhVZLRDvzySWqWoC5Q6iiAYVpqrCAe1mVY",
  "key5": "4xF4AJqMB6ZWu4QpHFfN7MGWmbmcsPJSMvguwhwrumfidgx1r4PEgz4kHLn4jvXgR1wXKnbZa2pNFWvsg7ahuqhj",
  "key6": "4AT7ovBYjKcybXh1JH4KfT1uZBpyoiEX9vqsvMqKUvR8TqjUEnV8dv77o1ujTMbYchJC6rL5T1hcCcV9EAgyxKz9",
  "key7": "42c2Z2UDUVEHRGnafzk6Mi88rsWndGQ27osbe2AaSkGzT7vt7yTUs8rXN8xwSL8WD8G1J9w3xJLsdJMnHycVdit6",
  "key8": "kX4wtftxEroxFXoHJgA77PjozW2e88ATGE4JXydwMooXKrcPtrzCBNnGL1Peg2kPMDdzs96t9NbLgWEn9GMiVgd",
  "key9": "5UeRPMCARj1RWdZ8Hsnh2no8JhDxG91NDbN8Qs3w7zSgzgh4hUagnmGGYMmhYvKvWepBENvmvp4vauSLGQjwKj6C",
  "key10": "49i3C4dQ9dKYGhokZxN9P9tfvKmFAgnwQk1kbKvM3nwXosbkaetVrvSUWY8ooPFE8agWqoypVjpnqkudkFY1EqQW",
  "key11": "2hAeAfNVYy9evPbnDqW5P7B4mSNKLGXRzKy3nm67CAfskBo6wY1oCWvR3182eKDnyZVBqE4WbNkcVMQDQ92pf9PU",
  "key12": "56ZDQqtijyMCJoP9XNDK1dBN38funpx1ACSDx872NnF2dma3Vu1EJaDPLZCWWad6hdXXwzRNm4xPY6K4z7t5kCka",
  "key13": "46TAWs3J3sKEZrUvhF8X3kLbKfWPduDLxADE7Q8bUxmpaHVCyUNUFiaToEuDXkRoDBYRr6wWY5gVdvJFo5RFMNJc",
  "key14": "2dKbpq62nx7aR6dzLALD4tmVPb4gbSFe1KeERK8kG9iv4x7B4SoPDR7w7RfpDcC4SnEZi5M7RNSqv28CBTVmVfEM",
  "key15": "3SMTTAoNZycUiwbyusPvc6T4hgLeyEr97THM6qHgkNQo4yvjZR9GZvv2oXrhueqzMccxGrKnaYMGz9CKfNH2SqP3",
  "key16": "5ev2AHccAeWEYZshqHHrmDCT8jEgU2EQbbqF1seibp2pWHnMtCHYSbydKpnWgEPRJLVDiU22tFobSWBQfBsrtuao",
  "key17": "517BbEgUqFrQrqGhUuU7eqejTFi3m5ZhuPtcrXcVxNejHnshwpn4LusvihoUwoxUWjvbS33tyxGZh4GNvx3MLd2f",
  "key18": "K5YaRXpw65ndjJ9JktLyMm1BqnzPztXEcNbvPycgq9CzCX5on5YnguYTvWVxs9cFjdjouUoAqB8UH2h9efqSM1d",
  "key19": "28xt235ccwAeHensHv5oZGFPfiSG5CgunHF7iJhiqQsEtF7e7HHfq1Z6xu7mSRPQtudbJtHA19gAz4WvZZCEVhsc",
  "key20": "2nCmuqcpJujh53mG4rkV7bBkmctjZudrwEuz4Pe87gkqT2WpgDAfvGKpfxMVAhy2FLVE5MUpKFe3143rTyrKodwt",
  "key21": "4RvV67ve9nSVi4uqoWdUhGw31DvpDozbKoyRjhg6GAq2Yazg2dMMntdkumth2QgaU47Y1MnxUL8tWdWmKzsBJ6kx",
  "key22": "4MJP58TFZh63XNUzYpMzL3cUr9gYCZFVuSMBiZ5qJNZCoGY7Dik97BTDXKrUkuK6MVushrNSrdv1WZAXTX3yZNaV",
  "key23": "5CWAEPidPcH45t3t9UShUBVEawPvszvDXvEiioU6XGVFDRRmuLdgCQ3wgAcB2EeqRqRxbu2XsriYtHqRuJGmg9xs",
  "key24": "4MSmokQxQixm1zvVuQ3dTSRW7hgNXjPEjFRtnEZiQYfLRNbhsaeyNuYHxkKA38kTRvQrc1RNhy9UXvXXEBR5e5KW",
  "key25": "b2pCpWW5zPApSymDpTTG976W9bDUug4bUH9aWbLg3vQiehV32PTMaAmo4kJTbiQACB5erv6XP2jsYQnUVWsAZEz",
  "key26": "4w8rz2iySW2hq97Lifv5EVSyjr1mzBBLqyy31boU45re5Ksm5cBtw8opzDXhWthWxccQfG8KfNkFxaD1pfL2az5N",
  "key27": "4SQYMgQb59mN4LQvjDEmiuoo94s2Zdo295No29ndrPnAB1fnAadcKmHh6WMZDfp2Lti6FSvucdmXL9J4iR8ZsGmk",
  "key28": "3S2Yj8ku9nG1BU5vGB4vYdoxyizG5tmsJv1G487mzFHqDSZLE81EvmZjzL37drVoZvbn7VRHytvJ6hHE3aT5fNJH",
  "key29": "2mAGjTVD78ksvvJCAAKnS9ej8TkudC7XhxAjRWstMis1hw9LmNDUPifEAh24SGPUTPhZ1ND98AvKSztRGsV89e4L",
  "key30": "3Qrncrn8SXexpKhKSWH3QzcUYJSPZZrqJVW9UaCyyEECa8noeztWWSsCnUzKLkkMz4qaS5gjzGp2VzD5XYTVkbcx",
  "key31": "4zEBwuFXV9KLvZp1AuFDKcjgvCqTsioiS1Drk6MXcJ3n9Nm85FffYzbXF5eMuCA7Qi9M5XzNhoxcbyzKSKaGizaQ",
  "key32": "27pq4kfnYqRMUQ9sH4QYCXGMmpDB3NkMj2gHVeePiBeP8BQGbuZ7T4kvuonfQ34a5mVzU4McodssmnME4zuc83rH",
  "key33": "5NBJZu6fMJgnofv2GpKHTy6Ri1xLyBKcPd8nhTpzf38G1mJRBiYLZy7SqHioga8VgDXoWUtFDWXKgC66uXzLTd5A"
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
