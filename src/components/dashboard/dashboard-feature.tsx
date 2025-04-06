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
    "4SvN5TSVYmu3qL6HfU2TDiRDU2swscaXfSFrnHPb29E5RoSwUKoSA5hbLFB5nLkfesTncNPs5aqTKJJBdMYiM48u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CGhR8rUYeA5Y6RXeaVHww3S9F2Uq6D4QF6NzweJ5oDwG16vD5so4t8KtQWDTqoh9RpT9TSD9bB5bzJvczS4gDaa",
  "key1": "4JCm9GpRm2jCyQX12RS2ADCwkxvzMdrqj2tqeqQvGjASPcJLLbi7iV1wcKUjBCNGD4wjdskjdkVBAXNuBusy4Mvh",
  "key2": "2XhVdT53ku39uTiFAMMog9ACfBD5Xcf7w9XQHDSTsnWaV5mBA3R8N9p3uHbq794YVzsCjPG8wwuBH6qF5cMRNE3q",
  "key3": "3idzmVPsjMJMGFF75hKyEutnQVxryU5s5UpgEi4nR4kw7TeQY4YAd5eYzRgWKNP142TbMCSjvhr4tibiGUe6hhq6",
  "key4": "4BD8YH7tQqAviPn7ReGSL14pfDweohK9BkbRyfoysBBfBtNr1YMWk9CsNeMcWxMMFRQshMyceNZsKpjo6X2UrjKs",
  "key5": "5BBupWFtep53S3oQitwR6oVuximumkvg2CC3DFsfV5nMtiVLoj5EeqRcwDCzcZCkwWXNWC5RPYpPyXebhVcWFmeg",
  "key6": "4LP3De5EyBH8mVEXFY6Wp4tiRpU3Cett5xEZQUhDQpdz62UHYagvW4emPbSvSWu5Ct32RuWWyDjdnBPkTcGXVSQv",
  "key7": "37noFPWDN4gWU5F286ZZW3ovJfWrGZ3e567Y6vdqiy2NyG4imU7sttAEdnAt8GCL2MYD7EG8kABSogdgj1ifhQQ2",
  "key8": "3RubPXjreDVtj1Di7bUuoSuKU8TcMAsrTDYZBSbNgTDoaf4KEGnKchkq6HxYTTpST5cZfDGjgLDDJoFyYxmzHt78",
  "key9": "5scnt4yQWrsxeamLEFRAGNu2bRmSNDwFvnFd4tGS8aHJoBvxadJ6HMpg15AnPWaBow9UsPHXEvHRmSjh7UHGRHkf",
  "key10": "2mg4xBPfSwm6U26SCFBihkR5RvR7DL4evB6DieYhPxxjKUB78njxHF9WbDr3nvJZqmssMekr27GbRmJwGuXCwhq4",
  "key11": "2a45h3BbdswfvRTMX4x2EWRp3fVncpTnNkp7TC4UWiKvvpXzWULMAnawvXogZ6CLayguBpViUfT8uvPayiFhKWaJ",
  "key12": "5C5Br2ZAA68Fc99ZdkNwsfLez2gXqGJRq78M5s69Xiyp2fLwnTCHGQM5ozZ2cYGxh2QwPMnTB8oAZLQqznfPj7hS",
  "key13": "wsE79Pf4DBgYh6MP7Ky6by15JihZYZfdt64cxtFJY9Q6K2vuqrf8D6x2b8V6UZpSbQSErtLUibAjgEktKftxZij",
  "key14": "975tE2mB7cBGiA7eNzXdTDu2LkjtoFKthym4gTdQoufZe8qePdKFCwthh3SsvGNzezVAZLmAuFzeX7pixHZvmFC",
  "key15": "23VTJ86EDzDCco7W44soEQ1Qb6A74G1RqCfBcpvgioBnGQtA5BxsT6exBEmmAtJxKbQYuPZXbUSucg7NetpRTvZr",
  "key16": "5jtAbg4HHTBgwwrUiRUuUaZG9PHd7wmFBgvye8kp64qjrjTNNVKQLeyCxWA52TX5WJjGrz6BMGkGbiufRQYcjX3i",
  "key17": "34EfcZs8eVqoD31vzGWvAUGaFUifz5kJW32SjefAHyKwjr7PErsokhvgNRmxVHQVSC8YEocqKJEbYfdGMNAv8EVw",
  "key18": "2fokJVNQDyDK4z2dpAEvXx3ScTamghWEzBMuCiNmy28kceLZZ7YKzh4ib7fNAiXSdoBPygvVUb9vKiR365u9CGcm",
  "key19": "3DF5dGSB5uFcDKsZ34ByZyaThj92Em7qCZme6b7CjbPTZzFe5s2Nr3fAgHAhzrcsYVuKusxiNdYqSAf8PzDUgE4y",
  "key20": "254wyA1Z6E8wwgQjqKkohV4tBzeu3QWNTG9S7Fr9p2ipLqNYAs3GaTZUtZi6HxYRf3jEhBgY2bgdFV9KskoGNbfc",
  "key21": "3MBMFdSFipaQfPyaxa8vbGYiCGhJcXv4L5WumwJWjSTUb4a3Xc5n99S6x6d6icKLeqpvfX2xxKzju4My2rrF8aZ9",
  "key22": "52Hc3MotB4G9yH3nQGhyor5j1F66ejeWtij2x7ahqPPzMGBD1zXnjBTcvnNTG6Kic9hW2cVDiArZbVvLtc4oS6Xr",
  "key23": "3dT9RBG4G6VxzUVCvDqN7FDkQZPskv7jAt5TJjH5c3VYBaVFuqeTSUVcpC2RjynTFgd8PbjaGpa8Amqc9hzxksyJ",
  "key24": "4TvHQJrLiq3ZQtx6avSJ6UeT1N1KyaRrB1KVHBdaTmEX3xkDao8sNANEdg1Upyr9T86exhxa6Tk9UmivDgp5o9p4",
  "key25": "Q1SiNMz1b7cBVahtjyXsJrBJQnhpBg3UAuhuKNqu9bibSRzjiipRZ7qGUYkPpxKuHxuo9vkPfCPxvQK3qUpNwZh",
  "key26": "3JLjWdxPayRhRBdGJMBwY6XHve3gTBCXd41Zb2z7efm8n2Gcqdzo8vr3yQutTqPgsviDzK8wERBfaXJawoX7KaWh",
  "key27": "2X3T55XWrJW6ZHSAfnu2BzeGuiVCXG5qF7rNYWtFhcdF3TA48nqqfyNL9bNGj8ZEPRxRCwxXLNaYE1WEEXkJzMM9",
  "key28": "4MbVRJR2mXnm8hqr3xe2B61naDRS1QQwhXdacXB6VyrSuYqtwAmTitmVgLSsrvXRpCjRnUpw4a7psfaPQE3zD87X",
  "key29": "2zCreVPtHQ8wSERqd8cZ2uvyByXjS5wpVeYnrcphMZ7tcERWP3xmBhvriMKoYzCdoDPaVa2mcKx4B6ZWUcdB7mpP",
  "key30": "46rejaFZw5PZhh3k5xSSLzx66MCVEsgjcvhud7Mu5jMGP7xbNGeimpEjhFCEbXRRyisZdjjJVwR2ifpHs1N48C6x",
  "key31": "2wTAaq5DdQDnwq9BezLS6tB42VWu7GVfjQrbWv4hjiR45cq4gJF8WJcDhgzZ4iTfMmpR9KZe4YZ4K2Njubi3aPwE"
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
