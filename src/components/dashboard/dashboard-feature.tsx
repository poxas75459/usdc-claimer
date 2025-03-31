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
    "46MFMkAYTtbMx2Qr6bBZtqDjSbetc94x5yaKk2XJkVv3Bx4etSCinnsDkUJmcJzbaUATP1uCkLuzEj8cQNhkmmhe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pnyMB9LyRWKcbnYtow2MpQtwbFiiauHX6HKEVu99UayQHwUUQLeDBWUNkQ8TaEdooxSxuXUa1fxGkPG6ePYE721",
  "key1": "Fte4wFjH2KUnnAsvA8sA4dqiyWx3ZLY6ngi5UBK8oYxDN1cbtiKDDuBxxYpPymDcDuXDcAUaLsZTCgzLVbz2vFD",
  "key2": "ycxTR4qz5jm8jFWFZZmNeczoy8wwhKqUaF8bi8a6He5NzcUAKbtPLXQfJi1FvyE6JGCpFm9kX2tXW3scWg9etQS",
  "key3": "2cBTuLEYnAHRTgUXpkevxudYPRuhgBJa1VsyRiuZ4stSJmfmiP7hoNdvQKrVNayFQSpt4HWVDLy9kBtMWAbBY1mZ",
  "key4": "5VCdKBrB6d6bTMoZxWSpDHHW6EqtSpp4BV3dJuY2uXBk4PeT1sm8Xx6PRoKK4JA3WtDFD4TGi4cy9UoVQ1PLFxT7",
  "key5": "2X6sw9ehC47hiHS7eWXnkNygftyyvMeXSVPi2aejsZrdEzbbsHJ3W1ZLZqoMLLiLs94Snvj93jJMHR6iWAYPxJGS",
  "key6": "5earTuwJD3SCh5Zh3gxSLkKR4nndXE52AinQz25RzwM9tLQtn9dygt1y6qBKjK33bJq63AyN5iPf1PpybgLvYeTU",
  "key7": "49N6K6zGJBQ5BHBQcB8hr23jesbyoLuwbo96unr2Qs6fHbMqkZy9v3dtvUiAdUKCaSVNmw5GyJ8oGF1baGLz2EXY",
  "key8": "5TKi3fTpG712jif1WYdULkZx8M9V5w5tU5uJYFc7KHKJCoR76MKzncxVuE1jGJWnDiD2c4QhZUe5ZMtTuFUezS6t",
  "key9": "5q5HhtsrSztcN3e9udDyjxKz8gpZeNYCVZcEWRiZzXbviYon2P66NdDG1Yv3BuH6E5LvLnjfn8mZhwMpmamkzNwT",
  "key10": "b4pXSc6xCT5qcqtVRT9wxbWYLc18qdxJmT4hyoRPkRYNuXLucVHXZ6Fti2pCrTP1PmJxFSDPKqRjJeyhPLDTvoW",
  "key11": "ntRAhiSMZHbAewKNJfixtd9gyvMh1PocRaWpoW8ERdGE7mdHykFdUumVNY6qGgnJRVtdTCZRDPy85qRX8JpMfJ8",
  "key12": "2nwsxrD51k3wKoSFwo3f7M6hyPv6Uzpfk6Qz78PAGUWXu2ZvQaJFdz86G1PUZhFGhhxm8qPDfeXkqXyr39wMy4R2",
  "key13": "3mWbHzU1EWo2RL5zHKfoxQRbYkPjAyLg2yjvqQWdaWXzzkLUmjYTykmFaxQ79RyX7reShSAb5poxd9w7gs67B4U",
  "key14": "2KV5mymeQGWjKFm7XfCUvYXFzQ3FmWShSS3YMeUptzfjd1XidWi6XqDEqUWqUc893evP5D87aBBTyY2mbZ1uxDnf",
  "key15": "57jN9ZbVg5szV1M7GBSR8MYHxt8pnUg6x74Tx4bv3i2eH5rqKK5AJe336F8nrE18fodhdnW9mDhXsbrbXqyzicHs",
  "key16": "gKaZtYrLDQ98e6whBMctb3KcAnhPMex89E51sE4mJ3EVtHYGM8Gve6wM5inspeZq4m8N9wYeJWr8VASiCsYDJSa",
  "key17": "CSg8HVSvp49Ky5FrQanDBu4Fb4MiUwFWzJ8WJHmX1nvCkE65CJYAch2LdvQqttaJGKq8iPvfi2d3bbZ1cnLqJih",
  "key18": "3qtj5cHTHRMUonqT2FsBbWq6aoUnL7VDVZKt6aiqFMYDxKJLuc8f5xUhhmTcp8HGFqsyfn5HULTG334keHLLYvvx",
  "key19": "3xrQ3GyzZ6KejeJFVEcN7uzZZBXgWYzzYwoRTVBBewEhyNdUFPxM4UZP3pKYJLunbdvKU3jifJqqd3QRs13HgDUg",
  "key20": "648utBJf3UFxgKhnCaBVeuvfHY2zeamVz5FXgSYsAtUtuc8FCnVRaBXcDCiDb1wLv1tRQVZPfcGtxUt4xckeYjfZ",
  "key21": "G7jwMcLsjkk7X6LMavaDGyjoU3X29xpLjAMheJewmZ63B59HrLGg4WhoW1PkC66Y29XbgsFmKbim3VWNH7u1PbJ",
  "key22": "3pETDKqMLUPDuEER5sbdyQLqFVwct9LJAHiBZ27crri6HXmRNADt1stvBe2g3HDhXjXxChBQfaK1xsz68vT4oZtR",
  "key23": "5WC8kMafRma91Uf1ZyLmARsRj1SNJNZLYSZQ36gaz27F87koZD27z2jb54yiufs33MNC3UkoT6Tuqz13WXeQGdVN",
  "key24": "5NrrryFzfVCcMB9cN3CftdX14YpJxPUyn4dRkcQ8uiRvxUmj4uHXCpEfZCuMTUmu7QyaA2YzrYsey86mAMhPKgQn",
  "key25": "2ngUZRhXfSUPCMEvtCKMtpgqDLdtXUC8KjbYNXTmw5987bpcXLMsDpT74YQZyWKczfnYde214QeGECCnSNSEwyx5",
  "key26": "2H1cqX7BGQPpdRMXnGTY9X1JKuVk5EMHQpjSeoh9ttNnidSpZ3fywr2zVP3BmMYayd4AqGcvfKTiL8m2pzHM3dpU",
  "key27": "2ThxNcgY8h1fEqKeDPiqYkNMc7WXwiS4j4zJewvAVDKWBj48TDWRqGCMStiSUauECKWanmHxhrwyAvhBn2in5VrV",
  "key28": "yWt9UcJVuy8ADYKngCAVAFfgscc1jWGvp65cB6zYAZoXiL1VQjAeSNRnC2f8SweDAuU2w8yN4ose44DjCRBGyWa"
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
