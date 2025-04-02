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
    "Uhv1w6GmixtwWzM1qcRtxai6Ad4b9qaMwUwZw2BdHgAzUv9RgNWoJNtjNUv4xvucgi88uLrqxMDc2nKNCS2omQ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZqdmSh5btDKcH5CDT2SoSXweTqij5S8JCqT3UKPXDfTneRAhf3VFkhHSMxiUYV43K1Vx7fZkGpmGWxPxTx6wzaP",
  "key1": "629DdJqJhadQAD3LwV5QWNpX2igedxeMz3ZJiRzQ4E3RDrQp4cYNnZe7aedtCMbNH7fYMtdPFzX7io4hovyQFph9",
  "key2": "5hxRFN4nvizMjwAM7HLocrmpd6CgKeYmN5thmjk6Ef2drBEXMe657tzyQygDwvr9X5wgswcQm7BkRPJb6EffXZ9A",
  "key3": "4asNg2WCazwLZgmykkvpEo12Uj2L9TQvRj3Fh53Qx7LwXRmVERs9Ws9sxoLszvgWSouxSge6XZegjtPhx8UzGJbj",
  "key4": "63tcHHKdEXf4mx8oNt9gBUxtEWErc6VPrvkbfAZraGKHSwMYLd1AFyBpbkHdk3RKpTZqCfWYGHPtyekmoUDmxctZ",
  "key5": "4vdNck64pdW3tBZzRQenHzaMnLNN7a1LiHAMTSTZfQM1kfhH6vtLt23fVXEXP3iM7ztWuyuSJzoKcGUa9fS3DjpU",
  "key6": "3RmGP2zZNvuWhiQusj651GFa1GacZPEi4WkF66zdx4KkLdQHR9wkN1DCELezuBB6qVMeiTQGVbNmQKMWFkQomcic",
  "key7": "2VxuJqP6Vc6QUvJeC5gR42hFLAQuFX3aVYLyzzmUu1p2pFLhMSDVKEZGDbrwGA4TGQBkJGBcnM1gQvL2q6Mt9qWi",
  "key8": "3NxjsfcFcyTAdAkhAy9tEmtPRQay11rJZxjpn9p4ycq7odETUYLT3vaRneWx1RZVe6fFgoz6HxDiLh1ivD2W646D",
  "key9": "4TtPeEmAUEBDDbgkVco3vpdNRJf2z2dqGi8o4eEpNrLjmc9rnFjKP1D7StuDT7SL3gRK5mjH4DgK2TCWkJfTcM7r",
  "key10": "UhkuvkWkJPFSiqNQsvH5owmYXc4R5QQkRrtJgH6fv7KbQPMi8tbHSzoEgXaxoQaLhtf9eZwzGp5gcpbd4LJgamF",
  "key11": "5c1yuMTMzVMgTkc35KQhYnN4ev8pCAGsALgiNrHAg8CWMd2kGZUUFqjHxSJyLitcDKjpCT4rUb6K8m9ebZXanbda",
  "key12": "4dVXaCJpqM1QZmApWDTJdJPJiKuDA3BPJV9cvNsicQ3sbdXXAjSrJvhZVuyriJBqh7rBJFvn7fBXfujTG8nPBHZb",
  "key13": "v93NU5rZyNdvNqTJiq7axmYFLNqnhh7CbZRbarubTB1eCtz5EGKAZNG9RwEaQ7CEpMoBDTRYu7Ye1HHyhgCLEBr",
  "key14": "466Zm5vz5dJMNqX6YsXpEk4sytB8FkJQx2EcEoVbzwoxrM7EjCbuagKddwgmGVnbrcj5LDjS3QmdqRaKBgAJWeEq",
  "key15": "QaAZ2j5qH5Luc5fWJjYufGyjZPU8Mas5DsJGDcdAS1ByGwHk3wkMQXcHP8KWCeq5QTkny98Ehy1N69FLDPXWVwp",
  "key16": "5E12ap8TivsL3jQmkDQaevuBMk3xDVbMDn1RamMG6W86PNcpuLZ91xPGUku3FDx4EJM5GieN9HcN8ZX9F2VYRCrq",
  "key17": "4mdZgbhsqDhe9LaqhZMvK5Vqr3irefHT7tkMWS9JeqLvpE3WGnctSehjmBiSpS7pGLcbjoMC5vmEmcdwrV34VxXE",
  "key18": "67QMZsmqkWfBxDiEZ4DtZ7kuRv3tHomxKDdwRwsfY83xhFZULhiiGkUr7tR68rFzYGjuMXX2TeASeDeUGYnZUYg9",
  "key19": "5j8s7oJUHotHQvQ8TjQDjrTHqc71SF7ZbpGqvhvGLNzWgxtKFhkdZc4MKtZUwuoczFWrLPLxxbA6JszaAJELWN97",
  "key20": "2EwTjcyzY9e12QGvjM6rhXUoZcRWfCwPdA5CNMpgZ5cg1gLqi6T4gxQLLj7epwSSM6RED9U4WbnpsuzpvAfWB4n4",
  "key21": "5BGKJEcyc9WX1fpN9EUcaDmzdfRkUJZ5znk4DsAHTpS6cbzBpMYaZpxYorbVLVsB9K3FDzgAvs1Df226bc7d2aF9",
  "key22": "4a4PirMxha2b58F7yu4hetegvyvPWotY3P9k9B7WHHbbyD6rXKx5SdZLvx7J2c7HqVwcoRN2gKxsfLN9bNXpTami",
  "key23": "5UXmwjvKm78u3RddaDQoYnFZKteGzBkFUqJjw257xFqYLoDc2rx54o3AoMrTWpdcu7dF5QKtCfpwHgUa73XBc7Zi",
  "key24": "4iz1PPEVjTrAUAS3Tcht4fNsD6KRESQZaA1t6jo9636XHGDDAzPZzvuezh6HsUxTbueYmsQLpEdKGeApLoernyTB",
  "key25": "MLihwwBLwkyxC18GsArouKh7NuscNkkqAKYx7SeocpG69F4ZavoFuqXTAk83egjZm5kyRcydo6bbJSiiAVf4vVW",
  "key26": "428T7nnVniGpmAaYyoCiCSvBsjjRxR6R1eLGqf31QZPg7EVqYwRaetU2TDQST4jP3nwAHom7SsxiXpfgBCqKxN22",
  "key27": "65h9A9GVcnYdM3zRwMi9SvtusHztahC2j8YqhsNLqghahLyJetrVTHk5AZXXXz9CbU3YWm4NDEpDms8zsECCiJth",
  "key28": "2bHSEcn4jVRVQoZrdq1ATohvnWm8W7ZCoQqcQtgnsmSTDMsDmuBUYDP5k8YF48ci3CpoDiKUJPp1pvV83htC8QTV"
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
