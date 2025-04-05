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
    "TjLj1XjytUYtfhQ7qzJJuzDUb7yJMCnoVKRw4oKrZ6GD7g5ikSp8hE7W7gdQaoPXczSbr3E6KPMjCNUmLQeAAuR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ccyxZq2R6XnKKpteshhJxGvStYg5g22eDNcthfokpmJdKPjwEzQqcFUGP3VhRyz26HiXMdcs4us6zbEM7X6dAyD",
  "key1": "2iC9TzZA5MKaPHwzwTR6G8YSJMeMwRZ2imQbYqNsf2NmsTTBsUDnkJjba3savKc8LMBMpxLvKcRgtZQ5ocWDGuZJ",
  "key2": "4dbH6TjjMyud3LDmTWBQzJFfp7VyUNrfDPN2JjUoVqHBmTEdj3TWU65TFx2abwcp2cLtiZ7EzLxTfE2NQMhB324m",
  "key3": "62oQR85Kwrmttfsune2nwt8cCKWg58migYKKwyCkfr1qdKckPcQ2EApMBzbRgC28UsFvwZDFLqnHDDK9n1zNAe5n",
  "key4": "4h5qpXim3pdT6cBa37vhkDeDD8QkLSwa7j4EuB3CgboWvC5Mbunuo3uuMFPPekX1ToUgNCXbQi9Gsatvhjy5SK1K",
  "key5": "5zobUkQtVPkXbHZisq9uACqtDnh1e3eamErLckdzDTTxok8ifUGu9YnmrqeJdRVgdtv9xPVRJdi1fk1a7QsyxYMf",
  "key6": "2diZsLUnsDnEnM1BCPYjfgbZFgn1EpjnTbA8VbBvp7u9J26Ejf9tW7WzuBM4syheS1NHBeKpkiJbQtBtv1NpMk5N",
  "key7": "45GEWSpgtS3taxHtih3yzq5rd6Uz1jpheb62Xe8jdi987RQuoJ3TDw2GBkatCmgdzXkbBPcverC9KNDMpqfXAKUQ",
  "key8": "37KcCaz5dqcnWjWF3K42hVUeKaF7PajDJbf9ajy9MdiCiFRE9BwbeARwauRiJG2btJFjb8Zfn2w2Q6RMcKdZHPpW",
  "key9": "5q5HS7fRn6QwFqnTQuUHZdgCEsuQ6AYHo4d7unPmJfyRz1gGQgTPsscAdQawvwnXpVifSswi3f4kARNcpHCisNQs",
  "key10": "3cx6AhHjTYMc7RNyjGTNZcUnaoJqBAUgMC9DTqfVu4Nb9GP6HxPptUynX8RAndLMcCAtmHWoFbRyLQuoHuHHQHtJ",
  "key11": "58wcbhPXwkcZr2DvfpjtnQyuLBiTyKWRcZ6zj9kbBWC7TixtB5r9fA2c7eNYekT2rZ8UiTsogxEUZVXc4SxRMPHA",
  "key12": "usFidqQasQhpqLszakLqP6fcVLbNdjobB81Sor6vCghsrzcRAjBq22MKtiHvEJ3GFE1hXZvcB1tTJdrQtfMjyTT",
  "key13": "4j7rFN6U8ewG9uqA7oRY3zxWXDcCNL79tdTkxs2urNN3QgxQBgDm664GQAkYYGocxq6me7Vp99ZGof9AxVVf4w1z",
  "key14": "4t64NF6m9qffc1vLLye7GzrFRvtVrmvRGufaEDB9yJRnW1uGoTG5gr2LN4KT5ipBnW9L8sv4TR7qz4KqsB1oeRFS",
  "key15": "5SW4eAXeF4vpimVmP5Qh7jPVT7fw5GCSwfhpHpquEdhuia11R7o1NsysAsNRd4UC7RXWwPLwyA6kTx4NtjJfTLW2",
  "key16": "2HssQL6iGGGzTG3GMiR4Zwir1AUMbN8HKeFpzwyFNWbmAWgnwaafysAR6o8GK2XjQcjwW5VWJu93xGZqe4mxyEmk",
  "key17": "2nP9sRG2fXCvPKK6zVcNbCex5ryDNHQiGpmm1cWPDPjGeUo5t7VCx1fgseexKuu4d6tWZch2LZhBKspSgNwcd67z",
  "key18": "sY3mjUswu1Mdx21exxnnCo9gwQAHWjy4NMZuCN24EegUt1A59SBEFwm92AQ7wSyjL5zYESJ6EviNQMqY7MSuAho",
  "key19": "54zJic5obtG8MD85Biinsn8oqjkCHzw23iYZ7ma23LbPwE89L8GAPnyQAmc9t2u5vR3TEE6Yk3aNXMmcUcDB5232",
  "key20": "59wuE1DUpciv467w3789freKss3rfJih4KLqpM4nEMA6ZapxNq71f3ysVsZ4vseA4Bp8qZNubc8SaA6feHeERJTS",
  "key21": "3ANVt6xsfHXu5m3vxPBbPc9YutLsx1o5scwqKwapTx52o3Vu7cie3TfPaLVqkvYQcndeBUDp9bpR8xAU6FnNa4ws",
  "key22": "4mF4tZXZN6eeVUb7RTSrWPU4r1Cg6KnfYBrWCBrWnP4C3C2Guy9crrEmKEHMizsRbmf2vqTw1V1tZwRZLEBosGsS",
  "key23": "4W9xT3i73Tn5HNNzztGkigRdJobCmQmappRAwZ1TpzmRSJyRGJVth37sJ7oxZrv88giC9uYRc9nxVsV6SrkPxBhk",
  "key24": "4KsHbBfKgYadfQ73p5soG4sE49pAUis5pWmzyxRF5T2ho7osJQFfk2aouuAyXfARCccvn4X3vJRC9x8Re7U2599g",
  "key25": "NNTMF17KLisHCcgJYsJZWpWQHdPF2iX7jpvgArW9hLKg2oGi2WzCxCSQRWvrWYXiwWZxtPJ6EcM5RtkMWy8uR5S"
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
