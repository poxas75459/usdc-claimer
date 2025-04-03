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
    "y6LP6rLinoDKtfpRTM1CvGRDAn6YnBWEYam41Z1VMfAFYRGN3z2qvrvUYtwEAGKY5pjuyxaVvt5T6WMkvgXAzKL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mmne4SzqcAQ777tYFZo1RX6DQ9HEfNtZY4r3dsm6SJXPX91hMdKfMvVoaTJvZy4YYUJmLbdzvD6k2Nh3ji6JeDp",
  "key1": "4XiuGmzBg7FcJzRfF84tYLuqB3XTKgu3A8B4Daf3mFqhw6LLDP3XpyY9WUYBtPaDsopG5g5fQtN97PNr8cDTwBjA",
  "key2": "3NukpUpmTYK31iyap6ZsoC2gGM4onGCPVWn9zLGK3EK47YeFH9m2zdcpZapYU1BF5jRirJaGKWgh4UQeyjKZvwE2",
  "key3": "2DJPbCHKG81mUnMseBLWcUKKb6hucbjDvEZpxU4Dkfsrp7LDYenhV1sKCSP3wURmN9emMHJScRqAyagVZfS4i7XH",
  "key4": "5tPZwLvK11pLrq4fEWVL5XXd1CgABjDnxNY9t7mfmpuNFkJnhD3BtvXyZX47ax43wC3WqJw9L4guLfEQcy29pCHa",
  "key5": "3pVhN96G2nnL8P2qiaaFBEhFPiJNJGgWmfYTCoTSgNMaXCUHHhybBbwK9Ts8DqR6XTKSsfQ3CimtPeYgBSnF4Yxh",
  "key6": "4DrKginjG4RHiV9n9Mma4KshvwLRELfsEjWF4XS3kNDtSjK8gw97iBfkctkFbfEfRkCYGYUYr8miTMLKBWCdWauL",
  "key7": "5c3NVJv7nANgZcoweL6KzeyzYWaF4eVYfskRWyQ8ti17jTWDAfrmesVHsFM6Jga5pE6g3jENtRC6YuDhdxXNyHdA",
  "key8": "KdvN1xEMJkNaNRbCu9ijPmiwqNxB2sCK1XUxHWN6vrayRa1fFnJ82K97jePvLwda2Q4LW3iGnv8FrQCky3YJL7s",
  "key9": "2YxMDLqPPd8SJji1aVoBujGgzGsyhhchoJCD56HCEWm5fVyWFDAENM5GAfoKUMPG2iJCtvmTNK56Co3xtRDCLK7y",
  "key10": "2mXC3dJawzLgpXTvv4nMoqVh5J3uJeNWaK2SZkdcx6YiN4DB9Ve3MV8zwPu9mc3bQ2BBgucUBTyJ7ZvriqPuHhu8",
  "key11": "4A2DcmQjHgBHTk8yDBcKSDEqo1J9RDvYA2SyU9MH99Zf9oYkKSaXw6gktzZvkBwREG3fuYskoZ8Sen5vXcDHFpwN",
  "key12": "2BvQaFvZiNe4hzoYRAwxiLyHs8RGA4WSaXP5ZhkXqQniEJQkmNHPS4sEHaKELZyaHuxDHZgmcsjRJ6RsV47nRwEJ",
  "key13": "4vVipuPE8RDkDiUGJoTgvtJtgzqCmZgZDJe5ipdsHSPp3ahqxC9jzbmyfUgoMN4wsKCDSRsVijXK9Fuhu5RcXiPN",
  "key14": "9QzxzAs8YqqHjoA4Uv9vqhFhvpcCzn6unjx39EKGyaXBX7UAJ44aJXpXaCuSjBv1PgHksWZEM9hSDA7LDwE71CL",
  "key15": "MuCRyWTwm7bnvXCyRsDeGbv1m5J62XpaMb2z8eansH3LeiQnA696FYUEeCcCDfPDe2Dz3yLEfoeDmhPzp1Q2vqd",
  "key16": "33JJij6UnUNS9ZkZEMn3RUnSBHChsN4gf36cHCa3S5sGzyLiPuTfmFq41R3JgpWEYmAphn65RW4UJdBM5dJ4HHeT",
  "key17": "PBK3RCAvZ95HVCJfGJL9o6iVNpX3pTXG9XkYHDeEXJBj27Q6JCos3i46ZxvUmjw6EXocM4VJtYSio9r4XT4jhmB",
  "key18": "41qo1e9trKiB2pM7fm6NSZupf8pET55rKNz3SJW2r8WMGNuCmNYafoQ3amY1dW2dZzuRvE477oQ1rXpUcYmPK7kT",
  "key19": "5VBbGRDbueQA2eQ1f1JHF1xRYhFCzLX7RKvHHctXyvdCuggFW3ke2bSE5dwTujxo7VWSzJUtUkuJ8cTXxd5wFf6X",
  "key20": "HNvscLx82xQDHRidfEWSpULZR8JkJWKc9xv4GEupzcYmWNsuo7N6fjyyrUKo5mmy5fEYAzC8JejjPKJo3SHfwfb",
  "key21": "4yc42rN9vUXncCRVBdHF9DYcv6tETLRS2WyeK1Fww4Y9z3XNHELbkaJZmrghAFp9rzTyhFMMtb1vmhBu7GH9k7mP",
  "key22": "oJzC7Gk2wPWkQm1kXi5wX2CTpzCAfdWnaFA48y56tbePet8up3qCRqz9NJckuLg66rhkiRQtvFbvwhnSuzy6aWX",
  "key23": "4nmpCWy83Pfxj71va4HbNRTpiQUVvPH2p6Aw7DDu4VfeiBjHBvbhiQpgHxbMH2DJcaBeRirAH449mwDHXoigLBMT",
  "key24": "5YYRaihRBSQRuHex6qnEoy5PjBx98eGeppBxidQhokRVpeznyJ7SESu3P1ezFdmzbRchsWh8egw4E6i6cGRRpJSn",
  "key25": "3ca7hyVRz6xpc8JHoojGQ24PwrnhmeMQu2QHxA2hDJ3YmxzhicTje6E3eXQNw1xycaMMiJZmTiaX72mR8ahy3iQL"
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
