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
    "4izvvjM6bgbjaNjS1w4qtMrPYRSEPgKeUH62efHjaa7pFUxmrHYbbeM6LH4tnnHncmLDmFd5MpzdetYfNvMwoggy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3puDcbMohSHcxrf49U5YWFrw3MvfYjcNeddKusZL9DpXkHBEjjTuJ1Ds7n63cyD7z7u3aCnvhuiTmeg66CQpYUXn",
  "key1": "42orhiNjU1RJqkNmyL9CDKF9YBLemvmc9HHiqmfpAgo3A4y5z6tpY8tGSYjSDWQ4XfTGjCX6vVoKFUy5S2xsNpD",
  "key2": "5vdhmC7cMxWoAYYqzp2zX9po9hWWrB7uWDc2w7Pb12PuJCGDrSYuJBP5NK5fTETusD11HCpDj8CoH8Dcmv5nft26",
  "key3": "3Hqvf7oFVoKx7MDb3ndopYN2sAT4SHqQrtep81fcdWqc7ev98mGu49oz1rn5GmiT73Bx27GyCddATdD5pu9uSM71",
  "key4": "8TvKwx3hkK9WiGEh92gmZvqFCA6BzCBuXg3sEzvTVKn1Xx3uMnVpugR64eNxHTxGdmgTnVU8yaypoddKZxa2udm",
  "key5": "HyweP1JkdRTTpRbAov3nYkZ9TKyyyn42NtR2ZgDLFAwGSFSzTeVoNuhk79fwa4EMqSAAFLBh1AnWtZGeTLLMeCn",
  "key6": "287iTDwjG27hfJeyJr6byrNaMymDVTnEPAHc2MiTET8B5okbvvbWpfoPuSwvKo6yMGvYm4tnowXo53BfMdDeVUA8",
  "key7": "47pvsTMheJpq4Vt7X6qCGYvntmBtcD1c7vux9zExXFKc3985krdUanRCydB83JoyrVWbGbTbFf9SJHspJb7fqJD2",
  "key8": "4jc5gXdeSECA8PLzmteLbtxm3jAfVLkPuweFfMTjdf2qTMwexredsn26Ks9y2hoM841zcr8FUTyfTsbs1ZM98hQH",
  "key9": "4vwGYgoaiSsWVeVdfshdY7MrzM2VGFy5xoiBtArtd5VqZFh5Tk52YNUKXtQGDMhp789tpMgkKou4fxN8GXpzqDHy",
  "key10": "N9jdnzSLVccJZkSUAFLcco98LBMAQLW6WMdsVS8keZhBwmmds1s13WGNZKjEmnZCFEttesZkGy7VWDtehZUahPz",
  "key11": "4otWx1p3pE7ChFXxiRN6xCNhunYxr42kDxq6r3DwEHREHn4BtT9KRerLQE7xBkMSRFZeesqAWKv6bHCbttVMcUNV",
  "key12": "4pWCXr3J4uwSFN9EcM1rP81uBffEnbRRUncahgpiDVCjMbp3PyXmVy62ZPRc8uZM91KtkQLfpSJgDCuSUkrTHrpo",
  "key13": "2QChZk2jQ4bxvtjXTdewWmTJfCyJAJXAoNagbF81dQEhdgLRBZ21AiXAXmKyenpfgJugWXascMTkVeMUzs8Ehief",
  "key14": "5XhAKXeKTM94tHRQTZug7SM5FGinQJ1yABZpUG7NpdymGnmHKzkEtcsvhBdFXwc1GUTD9MWhvDGNkhRkyCm2QerF",
  "key15": "4mfQv3Szicqjji4p8qKFR2mRcvJYUybwetvVHxvkSspEBgrKgm5tUH6pdQQVKNfS4wXCgHPQvtRnx1dyuvpVGhbV",
  "key16": "3aYki7XyhVQEUy2z4LmEPXKXuZq6hBwfsgh72M7guHnAzkRsfTHrxrbbCHo1wwAQDbMZnwDR7yPRuCFNQSc5oTbT",
  "key17": "23TmqZRyrq1FbM24YoEzXnhQg3goD9syz4cF1xGeGza6wpdXUp3TycjMFHdREMN6hQVRayZU68Y4E8zp2TYFHCL3",
  "key18": "4dx9S1P1aeV8BaC6RsjosR3b1zimDGeurvCgQtrUE1JHQ9U8mtWEo1qiHSB8KMTZ5RUpAr4HuwqRMJYnZskvT6GA",
  "key19": "4ZsLwZNVwAvSPKu1huHfnWVXhZgVEDnA8k3FaodbukcHU7u3M2toGqtRjVp3oTGzwN3NUBZeqRYmF7ThfUkew4hR",
  "key20": "3heW8AEYWrS4gyZdQ2Tj582h8BV98fUauw395RU3t6xSPiW92LuvCfqNkRRJ6YVPPi4LGBWGchThcAjaYKT1pGsW",
  "key21": "4zZwmyuFnnDFx3yneYQo37ShSjtDnZfPLq2GKY2RUSn9WnvGyK4e1cWrV8JrxqjCM3D91qSiJa6NYfxYh718gXzN",
  "key22": "23Queb94iLjfG67fRmEjZVZhV8zT8m4dLiUYGyT5symccX452dZzYrDniYADK5Hbe1f6F44aLnmQm8ijYf29DQEP",
  "key23": "4PxRVhkReQdrHbFatzkWFsWQFvPAFHEh8kW4PvZvnaG3NK6y2SwzTZ6fng6YdHgyS9mSVvh7LHNFQGh8BQQ8EmMF",
  "key24": "5J3ZGvdhha5aTjBvkXPCBSFf74fiD58PUUsBXgPqrf1jnBDn3Mpd76ijwB2gz3uzX2q3zStCbdSGFGVQ4EeeyfRU",
  "key25": "4hM3ERRySxhw8Dm7RZ4EsQHpacUfg3kpgJnCEZKeUdtSMTUcQcYzHZgdQkdo4zbKUDZKqQn4CbCFEskkNYuCX7PZ",
  "key26": "5Webo5rz1Pma1khSazzgCN7Q3Q1KWgX5Vx1DVEvGLe5dwayZiYdLAV94YyiiCiLudCcuXRYNKVxumisZrkY5P24J",
  "key27": "q5sfHwjR23fY8sHj5cH1tRckcZYTdx6p1a8teXHvnND2b3o99Cde7MxsMqzizusNnqBBdoYkXh1rg3so13TYvFj",
  "key28": "4znxFfwK7eo7hd4YX7wFJ5DtNQpEpuxe9R8uxHaPwV2B3wrrappqmkaPEt72C1i47Y4Sby8hxckbj3tjuZiUy5zC",
  "key29": "3oKeWWERPVjs1KP58yx1VtehidXivLESMqdwWkYaEz3JFFuoNV1wErgZB4h9oZ1jZuc7NgyGaemMinwQ4bAg6cK",
  "key30": "54q7vZJDGwmmshoAkytsXtp5FHTWUuSdr7DynkJSzGCvbrjSchiPAGVWwPq2pFUU1pwNKn3WTVfexfqg6KiTHRu",
  "key31": "2KtQPRChKbdgnAwM7zkYPc4VQCJC49FJSsvBbeiB3qsjR5U9K39jQPpinFGj4V7Ej1hx54X6ZTkAy8KNZtE5XqhJ"
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
