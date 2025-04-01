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
    "2s7vbAk6ou1kGk8D4cdzRLBQdP7g3dGc4JPHYnfdJH6t2DTcXaE7ULUb9cJDVrXayu2Tg3U6mdLYQU3ZSEmquTCb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kQMVfuMZXRTpk9F57gnsK9jRe1GJKntp24P9aZoGGzY1TQjpBeDYFTMmFbb734UtEBXbgR2tJzuu3R8JTkw2xGe",
  "key1": "FKhJ3bYJQAuhMYoM3SKNiy6FrZNQPsuVB6piheaguXRfBiH52E3otGFBYRSNXgCsEP5He4XhRQeuFaemGcLsxQi",
  "key2": "2HqRYnVuDemE1hkmQjd8M3faPzKjGhRCiooA3pKorCkBw3EnatvbVqYRfXqUCHC6HuBDULnHLfmneEx8vzCAgixx",
  "key3": "7Z23xGKy22PVqy5nmWqVVDsRqL6SDTwyRKku9y6CGHmgGpCQq9mjSWJ4G8sQngcqik8QP9cDYcwkKLZ1YTRJJWw",
  "key4": "3Jpgq92qut26PewgKBMBUh7uq2XZ5yfHm9kbUR8JgFspfshVRi1qfP4Pgf6VDA4xZNM5iSbBXPFL9DCrdAmpkvSP",
  "key5": "3gmqrPqwtd65ZbmgB7zrwJdoXHmjxNX7PWR2TevNoNzHhz1x1rSjFWRo7niRXkW3HzmPiZKm8kemVa2wBMrC7yFD",
  "key6": "4PyXKVmAG5MKRt7oaQXT4tR7PnNYsAqFtJyDabzp4LtjTrdm2gN411Ru5jBy1V2Dt5oRnMM4pBq98sAFzvMeSU3g",
  "key7": "4VLhEvRMbKAQCzBAf76huS4UyiBjBpAvzbKvFXq9NgLrENhBDgh2ZFMLbVTBPUoexLWVUtKXa1Mp4TFUxniojtax",
  "key8": "45CqadtEkjhcLabKpbmxHUYGvUcy3zdrUdAR2tzFgqwGTsPDVfSbCnN1LBrxDzb5n2oTp3cvPkQ344d9UFqnprPD",
  "key9": "3Q3zN8hGZwWvP3hqRat6DqoV77r4sRHGjVNraAucTi2DqvadomeHiJNKaYNw6FozZpv4MuuAPNQgfM4sCfB1Fant",
  "key10": "3ruhCF2YgG1ephXNKNuTyBRv5Mo1NGKctJeCHjd847np2gNRNHwt1KPmtD8xmRN2zQKe9RMj9ixzQYtHFRyK9GDi",
  "key11": "Wj3GJHMEtGc6oynUZqhvLf3wpA1mU2DT8eNEZEM249c5onSv1vYaweaYmGqvVCEaMmzfksEWRyh2kbiJuyfT3T3",
  "key12": "yqeErNZby941pyTDvcSiFptxAQNeZVv1cEs4utypKFa6RA5pDoU8mh3vQEsmQh8s9xBDY8744ufUCCoUTtX2mU6",
  "key13": "2tWR8QTmzJLazgBNR6Z1ajC8D7GXfwKQ4AB8XcT4jndBYNbzxuPW6SF7veJ1hrxhxbEAsxbxRGJ9cCCHkFGsNs5G",
  "key14": "39JFkn3v7ubLRVEoyx2rb3a7WSqmmUPKV1QhhZpdr97A7K8mXoFzMc5UtaBgxZXvhVMYqQSuKTyLuLiUpe9Ysp1s",
  "key15": "YqfKLRu9yNJJLPFTW8dHMeGVnvxjujfroaridBkjf38TtkM7yZUmdb3GoPZWjMFSLnudApkaagHEJD7o7Fn8xuG",
  "key16": "448doNcA6BSRLmF8My6xDG5hpjb4iFTpRnxepXGpfk7UTVFmatnFMPvWrVSrTBhrGeP457ivw5FM2ruAL8aKktjn",
  "key17": "4ya3CLtc5qx7AGctzFZCSJCrH91LSa4U8xQyYq9C5AYppFF1d2BvyNckapBPGHTPUYh9MXGkEgtbr182QmgynNaz",
  "key18": "5cDfMJtGcYXzMy5X4tKrptfFjrTcCDor8bpLbN5A4ifEe1VfrVDk2q9ur8PMHCYYmexkCPXontPUr1icBA61QKfz",
  "key19": "SgMdewWYurQZP3Uk3ZWhAVmhRRTraMy2BSawmZbrTNQtQyH9Lvnr288WAn2qNwDBqaTKvwQjNsKTNStNumvXRDs",
  "key20": "24UQyyZXNdi53xr3khHcw6mr64arKHbqzRsFCv4gvRQ9Pig2P3PKg4r6i8eUy68nEnggEzZGcyw48NS3tMjTaP1a",
  "key21": "2xbF8n8roDJVXYEfUGeuFQL8styiFM1cw3GhmSH4x24JUTyctbp7P5yg528JC9wsL3g9iVYnTB7e6jL76EWqqXsb",
  "key22": "2K4XgNUuPnU9TdQg7u8KxoyY5acg3NEReCXG73DYxDajvgMu6xwTH423kJVfQ6PE4Y5Qn6Lsm1H5Y4HZJfTm7hNe",
  "key23": "4a8cGn7ni5FSEkEWPvWajdZT7MDwcKhrG344ofXNBemWm9gkfUgdVCC2iw5rip1D3YKv8aChvfMEqEyKHQwbzzyW",
  "key24": "4bQhkAQbmx4yX9f9nZBfL7oVPchxMhSQRPnQcCsKFZb56xgRxZxQ81WqHW2Crx2jknxWBtSPBga8oRBEmm6omtf8",
  "key25": "5StbSbGMycybwLG9pfEP1dfdiNSTm26Kbc8tr2i7q2kzNVMz7tj67eJKcWK67fJGKcRgJCSKAjn4VAz1yeGNPyDk",
  "key26": "2q7CmpZLxhPRQeZ1QTeoKn1MdiTAKryM1tAGWfRaU47UJ662jxyM15zymobvHRbnTFu2KZZbGksi2ozXyEfoEkE6",
  "key27": "3KA15jzvEqGq1pay7hSyPqZ8bQ53d3dGn9wfLfauVoadgNQrUieMWMKtDqtUSKuVaHAqofYcx3WjRajKBjmXUUjb",
  "key28": "5NamLeiQe3AcsdSnrQQ1Wo79UrHxE1FVq1UuxHywUfizFLT7QZAbWSrS9jSCQTJVkKD4DbHS2HENDJmTkW63TVgC",
  "key29": "2MLZUzjwXuKyBDpuWj7ZcXDEkHaDTAdL34ZJoDiG5pdc2uLxmDbXqcEV592yDX63ExrZQaEzhcFJXiipuCHZamKz",
  "key30": "4NMy9xKBKUw6hc2tT1Zh8y41PKitMrsb8ardBuQGJXxLcHdnonWDAVojS53MUownTLpnRpfnEjVGZ1JbUerDy127",
  "key31": "47k8gdomJtFJyZvrWMqJ8QMNZynsPtV7Fxv4E35VCsKjrJaUjfVvrytNUcvPVDBwRS8SZkhf2k1baS2s7FTv1rQq",
  "key32": "2WYRczA7HSGbAizW7wTriHsZqn3ne9sQ5Ckko5YUt62suADBSA9966H9Ew7oRuXUJuRHKZLvBw8jcQCm1xhQEi7H",
  "key33": "5cn55hgqyAnce86skrNqGVposi7UeuPejCw5FGZf188JRkbPVigh1S8Cf6w5XA5GNADUD8DHY1uS8Avmw4obfChT",
  "key34": "8g8PMZ5gUXFxZwq1tWqw1DcthYWN1ocrvyg89AiKmiPmJrAfYFVDd3T8gLJCV8Rr6XUBcom7MnMzJX9sHqrhC1L"
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
