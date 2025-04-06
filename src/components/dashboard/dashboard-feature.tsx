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
    "2gsoL6HaCGFf76Cwt1k9AX1LJyjf1kGG1nDZBSs69v24sq1M1xAXa3EaDtDhzykBQaVkZC1phBgXqxjquLfT6fX3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J8ddmimCAaWXiZJigqp72oV3uCLVvSH948xm54oMC6MtUcRfU8QSnoHKdo2FvN2B2PtDs8nMYCJha52CXCPreph",
  "key1": "5ustFUgxcSh8UKwFffSVpj9Wq8vgss8kKM2LgkrZiNQkf2MqUeSYTuLyepy8mqnkDXJWZQRB6VqdbSEQfyrQoTD7",
  "key2": "3tZo4KVsvCJxTnSbdqsift7rosQJ65b2aqShXfAz4jZ37GsPs6nDzncSNohAgx8XjuNkyfGPZmp52CFPjNV5WqTV",
  "key3": "3cEW5J4Uh4yMsSJoAziDHtujKWE8F7x5ZmUrQ2B5R8yzV6iQsb4ocYgKnuDYkpnnsaRmM7Mr86pCeG8ynscJv358",
  "key4": "5cAxbYQ1zpAzAn7N8tpCWgMXKP9sDEb2rGznaNJ62i4J7DnFEAxkcNLFsADNdfp83cnxjKo7zUd8E2PJ7N4thS8L",
  "key5": "mM46GHwdfUWKUTT1id5dRiPTFJ53g8Mt3cAofyDkxr7kzQfQvmD1BvX1SocLRpXUmWygxvGrkzsAxhxLrDmffig",
  "key6": "3C4tJqZr9iR5fqBu3J7dtQEgVd3PeSDWwEorUneicmrmT5erQqr5tTUN9iqWCKnLqeRS8NAtjokVoeMAsbxr4kr6",
  "key7": "58YkzrT5jUJXniqXyPUa1ADZ9946k8RWXfJ5SW43AhHuYwFxQdvQT9qbk2hHE8R5w2TvCtsG5EnxDxvz2sADjwpf",
  "key8": "3zGNsn3A5yP9BoALUjNe95monYkqUqmHvAuMivPFA6Pu3zsTWdsTqaJhqCzcK6ixYtdAvwvBHNQ5gRserQoEAf33",
  "key9": "5TN5npAJ4ivMRFEVGwsmc7R17w16GCXiLdP3AgVx8LdGkLcnFHZcRvurJediH4wWXpcw4pBU6XKtbeyZjyB19r4g",
  "key10": "26chGf2P25eL2d2QVeiKrkdP5vDGM7UzN9iajkirM49VFa4aX6gJ9QmfspqonQh64sCnnbmMyHdCmybpNfASXvdJ",
  "key11": "2T6TVy8jdf4ngSnPLXAkshLsxMoycfDjewmyKNpt2TqhwB5phSd3R1F8HukNAxQQdqNeuNupuwcqKmBYn5PXurg5",
  "key12": "2gK6gnQAbyaf8sNZKUvesJwuGzqn4UXG4gxmBxqS3KFVxnFCYewtzd18GPkmZ9b1wdJQBKCTwYsSYao61KJedVGT",
  "key13": "3gj9xr6GXHfk9bCdCoNq7s2HECNwYAL4tt2UTqof8qDJcVDS4HnodbWkQXSww7TQxYD45EGhct4WdGXmQozPaZYk",
  "key14": "333euq2fs8xkNdNppiQwT7FTeE9csTzi1RqnTBpuFYcCjPbwebb3gkumipmz6Uhz75KVf4nTAxwgP8KajiCZajN",
  "key15": "2d9ycoH5sGPcPifbNfxdyCALAh4zeBf6bPuDFy5NRso9TEsgvr7z84JhD62NS9XBJtX72Zx6jbYdWerfhYfPn1Ds",
  "key16": "59H6f8hPqM2eViVwf1bkDc5xNee23cU6bSnYadcYUvcfdaEWtLEgLi1KR6t7ZFR9QrmUvoXmQ3pqVDkoNcmdHgsx",
  "key17": "4qW3KTMDsNZfmjBLmxNtzpvWm6FyLTso4mzTwWoSjiBHxWwG8DkBBk2LLebco7NPr2KeVw3Qt4C1nqeGnjFzZQoS",
  "key18": "5Qxo5TNbax4QBdi9PS8Jki3prJLnfGoC2aLfjSZbh4KSKd1DPFmpUcaAGdUKF2CtTGxYFX8W6CJZvQ2PZsLLxnVE",
  "key19": "5GiioPXZnajDW3zky9maDzLDpNg1VCqKx4YQyaNgess82dQVuMRLw9mCakcVgC7yTo3CdE2z78eVKxHdfbVz5WAV",
  "key20": "2eguV8XjxT1efY2NaZQ6u14sRdm5nNaTBQY9oKkWws1JL2jtSoY7xaK2QazcSHg2bjcySnzYcziCbh3TyEmpaJZv",
  "key21": "RXyuXFb8P8mh6tjkVr2fiFjCmh2m2imckQSQATCKfBRAjezC2vVMqk3bvJzjDoZ1DFHjSCr6Zq8wArcndiRz5kW",
  "key22": "4VAJDhkFeEfgTcSSntQ93a8saxiV6Fbjediac5GoNAqZ6nxMtuaDLq9YNW6Rk83Yje3kg8Spxc18GEMWL2b9Xh52",
  "key23": "4UBAafi6ujwc4WWhh93JmYLBGJmzhUjfFbMXToHXnbyu9n19tBg2adeLU3JVmPouTxdo6o98rGb5tCe1k9TsHJfW",
  "key24": "4cYpaQU4CwTbH9zcxRdLBmdyqpqFS5uHHtyFpMpUhBmzvTP5PuuvY77NGV9ZZbMFHKwAFRGxJbVfSE7zZGZZEzaU",
  "key25": "5qyKWc7QjgZQ2bKELjNRPBTug12x6uz85TfnfjxaLbEH4TXKRwUcz2B9J5Jtth9MAhya6UAeBL9fPWdjaLauE8KM",
  "key26": "2gektg2Ui9qcVMF5apJwBPgdAWhTfmSjVCYEz1rm7oieRzUgrnTnnQsdhX2hiELQxuqxy3iTzHjMbYJnkEJj8qfk",
  "key27": "3XEn9BtHZ1npjVLw3Re7gxVqRjen765fShFtzszvuCxiMEcF7yzTAqwxiLCVmekCoJywGGYBnTmP7fPdEJKUKcYv",
  "key28": "3aP4TBx5UiLMYsQnvLdSg9JHLcGKPuQStuyTiT8enQ74hiZhvXDZCDzzbqA87LmfTEJ7u9Nwr5BtDvGLdxcQKMVL",
  "key29": "64SzgNUm7xcQn38msUra94ZTooznqT46KHodK7a6vZb7YaoqU5NNQJLeQcpCK8eijb4DfqSjRfP2sphh3tGvFGTz"
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
