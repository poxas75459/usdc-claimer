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
    "3mQyEs8na8vZ7SZDPJb5dKuXK8HxNTquqNr5rLbBqo96viCRS4SUunX3vT6E7XJJYqCqRnHHjFMAXAWWR7EgA7iz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t8dHzvN95EeDaHjTBajm6rUdFYvLNS71WqfBSvCYS5KwPkEtQ4xJorqYwhGFzCVhBv7qhrrPZnnxLWGa4m39jZi",
  "key1": "5DFfQfjLPXjtFNFJ5g6DjnaGsfv5XwXCT5BbdhhxskZY2yi3xoxN1Ws82hCJhyFiC6Pzb9nYFoQ9DCEw8AqJubzJ",
  "key2": "2BVPnU3wXFd4v35sKANEPjV9nhveAK64P38zvQ5Bq4fzrnaWVw7B2hjoeA7VnXQqovhPSkFAuTc6J17pnVC87RM4",
  "key3": "2h42mqGSHGXZ8SBSMzPFtV72B8N1G4kbcqmtnbJecvDaYNFU8r4ZSyCYpT4Et41tZetjoDESsWxtM2edwRcUMuEd",
  "key4": "it62oyZ181t9L4k8ji6nCjk5kCPVgDgFEsh4PT3r7FdQkUB3mNs2woJxQmaJ3FwzhHGTZ2ZFeAzc7sUyY3QYthb",
  "key5": "66iPjHagUiCu8U4pPktJADzMiwNP7mG8mnAe5cNgTpGfuc51eZyNBr4Cf2B7VMG6FQFkgN5ZV2JeufRs2o4GMfci",
  "key6": "5CT51gHBfpx1UVAjhVZYGhuBeLJDJcMXsJq3EUHXZ8wUSMkCgQYLM7pR5iR9v9YZbWEdxFERWWZaTLx8HCp3CYeE",
  "key7": "3gTYjmutNX3wTN5w34Cjbh19CcWynRjvbbSXN4efSi4Eiw7diH9prbMM6S9Hpf6mSRDdzuh9e9vY86Wf1LzE1f3N",
  "key8": "4yKfWkpzsbn76vURNHA7Rcrc1uZoN2BdiwC86Bw2ofD2k2PgBSXeCPjAibV2MGPvTPTSjCXtuB9oPNBSkcBWw76w",
  "key9": "26BPMrjibpLGTAuqmELTmbxEwmPTcxULTvFkyRTdG29K3D8Ls3bbXpXtxNTEubA2UddNmB5WuigKpc9gHniXZJrw",
  "key10": "3RhRa9CFtvPBpwCQ62X8Vbbwb6qhEg7Q5qfzmRKqJQ4E1hw6zbaw69Yb414qkmzS1B11F39mMrBuY9kGbodWadUd",
  "key11": "KJKTGmctGQAPZoh4hiZLK8BnrPbmxxtGWgGAVzLDYBELE9F9eUVJLE1fpwAmn1sY3gHVFinTbWH6u1Ueom5pZUr",
  "key12": "37WsJujYocxHzd596pmGVi3ExwNmtaNSDXJfttLHQuMQp3pVUC7y9neKiTjmNBTEdQ7a1jz3PZSh2MhQeLiHtv93",
  "key13": "65uJzU1sFKVAUsVDNvkfQnNrBiPEyM7HxUWWM9yimcCyKoLciA4qzBpAqZyvRWu6rp8noqnhDhEg8qkWpn1R1jVu",
  "key14": "3iZR2f3PTKGyL2zfWsWuGv4P4TGiobF4QXmzjZtseD6t99kWkV2vCbuuVrqjxgZECNKbC321vM6ojF3nNoUd8hKb",
  "key15": "cwMbFk7gn79GADpByxZexrpFPzQwCEjGaoCNVF3hUpRhF9J2fPUKByYsAHCN689DNKmmQV4CoKjQyqutKkux1N9",
  "key16": "hmGrkJS4L69ETc46NX37H5r1JCfXsLRZQfVxHWsngr93Lrwkw1T3KwpUK1BCJyBLn4xHrgfYnwKx5wtAdQG5eFW",
  "key17": "5xR3y3wSndACESUPbs12mbRUMyKkf9xi5KLGRHPRgi8SMQoQcfXP4yrcToA5aNHaMREXN13xwS6jyvg9uUdASdqc",
  "key18": "4jULHBGJf9k5VzLKn21AyT6eZFXgYGAb6eMetEYsbyR7FC32PoQ9zkpLpYoVUZ6E8c5dc1TNTBD7Fjv7V3HQceTm",
  "key19": "x3vXEjxwSkiQDieSPpJ227PhsqGW1pEhBvKJ7fksNExDvB3cpBepwKFyMvCEEaXpidv1w17u5uoLpvHFLAucbJm",
  "key20": "39oMjcsqjwjoiTF2yWP693JuWm2PTGk7d2aKSPRV4aCiUNxpHAcHWVt18SX2hmzTew7MeReuLMXuTTpCgzeFZDXk",
  "key21": "4LBwtTCsCJ7X5MujebLdpK68MHjjyZfZV9SBPuFSKpk9dZaRKWSJchsZXNxkC6bnxNJxbgiKS7comXKtb7xZtnVF",
  "key22": "3khkF3TSA2oDGKf5tgUSUGkNfYYidqpodeNYomJ6rxpKJCc82eVT7LbV6ebf5cQaBXrcoR5hcUZUhh2j3559PymK",
  "key23": "QeEUCz2wWTTQRjRU4ytXeYcCe4Li2jS1Y53TnKCJtmgoeNjZNoG5yv7U1FkS763FnHDBgBuFeXAwbyXBwqtLxs5",
  "key24": "5pfx7boLhuquh5MaqDqTk9yYiJ9SZemGyoc5AFXbgZREn2WuZYD6s2N39hJmRY5PZMZNEyGfsNkCV6nAA5oNqEq1"
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
