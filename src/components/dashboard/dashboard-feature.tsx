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
    "2EQ1s7pgh59EGSNAxRJWsbKuPJvDkvjGfa2dZnVnxezYLpRCHc88H7nNZ4JHTgfn7zgm6m5Tsu3C9BqfqRqbHp2f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YAh3E4j6VMvZcFkVY9NpiH1te3iBGunQeBCr7x8KiZp6dqs7QGHRXxWgdiij3HC3Xwd2QTw4b9xWDtuwWNbY4B7",
  "key1": "2Y2UugbDVZB3q8ar75FPzym5rqGKS51AkwjBbUMFU487R5sLsebKa6tFmhFXP3QEMyvBe28m1KtchHWkdjmFHQ9a",
  "key2": "5Arht4ZbbsjcTrd9bF6KdUyyhXdsZgNQPR6hQMPRC3AXmDLuKJJQX2ucK2Z312p3UvzZgbfTtmu2CFij7WkPWXZW",
  "key3": "4e7oqx19u8tnPeCf33hLX2BePPLZpJNiPmaCZmn5LGKQg2nrYxkdPv2BKMemyGVXmwKbT1EHUdt7X3dvp4uQfRTe",
  "key4": "2ssbFtgW6bQTF1eTQQsA5rpkRYmnbxPaByt6j8HUGMBEUQc6XT2TQ9gwn2dpC7DELcxCuUqG6hgQibZpdZsp6eGG",
  "key5": "3PeV7QhLKsuqTRdXhtWkTtYHhrwHub8nyiS9QGSEMVLXx3Vm13tLz5X6tS6fCXf2B46xMwHUF5ZswhFh9eXkMbDY",
  "key6": "5nv9Z1UfzAs3WicfVmuZNWTXuJgGpQyo6uhUsL3w4H1Ss7QMSqQjDCe7w345U28ijGzDG3oz6RfuKD1KtJ6KRYeD",
  "key7": "2GPaAynHuL3px3wD591CrZVUYGLeeYWDdF12jkXennsXDBbkYDA9NFjQMECvXiZcDyGxcFku3M3cAgQKm7G1VRvq",
  "key8": "5ChL2kmMmwgXwCZziAFBfgobkb16QyqYkfSGghqcNaG5dSc88yajZkwhwz6NY6cq799UoG1jDaYY429RnSTD6Ga9",
  "key9": "2ADpnN9YX8zeTpFCbsXdcRrsN35KLb573cqcmtRxmMrrCZw3wetK2zYn3nDMGWppreGFet5gcQt2hCUzZHR8Ki2k",
  "key10": "5kntRwzx2HNtTX9s9hnc2T6BVq5pdkXLtjrz6nfLxKGPXyNxjh6SW1MDRfc6cX1yzTEZ9CsWE88zQPc9cwMFNLFE",
  "key11": "5fYAr3gWfudy8i3M2gLitr2JNbU1y4jLicHd3pXmtxDypir1oRMzsNFcAtNBMb8zyxbcjafQj6SBPfAiUWEMj4af",
  "key12": "3WBfpmwRrPxTaJ8K95xzufm4dLSVKGzbdZuQgvKZpyca8WqM9m7nGgw7CeobvqoVxtLDfr8HHgipk6r9tKXjqZoV",
  "key13": "cTKCWRYbnEcsT5DGZ2wPjRH7e92TQqESmfnk4Jyto5uQT2KZE6r3zC1ndAGMrCPiuTXVXvGW6R4SbHLF1GuUPNk",
  "key14": "KWbwcGSxggC1VVJK6BT4drxGvU4uuiZ73kowR1Mo5GiQdC9wkq3nvAHu194fRbJxozoiMXqK9Ye8wUNeaikFYte",
  "key15": "5g9sk3Laz2mGAwM6PoyTXbhvA4rQXR9ZNcBthu5j8NEixvgqTpcybkfRdfxWBWJxTEffCukFgZiEzX1Cj6NCv1mF",
  "key16": "1sFzgX4ev5tE1XRQ4XfPzKbUJEmQ2DPPsmKurxmJGXns51uftTZ1yXb7g33mBKHZKqtH4DCMkvchonjauETgDwP",
  "key17": "5Ua7eypZnDbRm1wWk1aLXfTeqsg9DqeSax3mdWfXqtev6qBUB15nJjLMLsnoFsm1g9NHE3qkT2ZKGjUa8fe98m5e",
  "key18": "3gnJPgQYecXDadMoNcJfmvaB6wmE19LxzfirUf3jWXY22uvgrmcdR6M55BffTRtrpWxnCwemV2wkWz97zrUsYR2j",
  "key19": "55kbiqpM5h9ZeLTDYPh5KSHzoNoocfBBTvM4yABTD3kXCNAq7JSXqohzxcEe2o26hfKjLFm2BXEp6WHCnf4buajL",
  "key20": "4rfgFFU97YLLJyjj3ghhhWrTcgLp6jeixbGHpBa89umBqqLCNnREEhLiukyte36XeLozZL7W6SeUdba79EPMShH3",
  "key21": "4z2UUYE4Tojao1j6aFV6n9q6PsnMBuWk8gp4CzrTcRgdRdtpoy4STgYCe1dfehLaguu8eTuw9CRR4x1sEYud8eVh",
  "key22": "3iKcerSYgffUCYnMUXYw3AWYmH2kpmepfSJ7xvo29wqRKEeTzDtds26szKvjj1VEsdKz2Mqkb4sLS4qmGMA16zQu",
  "key23": "4uW15Zfj8SYUWuFQ3othXXEm8EQjPupisRcpisoHKjCc2gDqjQzsLkHNdVUyafgyEsTytpHmXnKYKH2jaNaohG1M",
  "key24": "54Ev1EsZfT4X1g1LUL8qz9RE2qz7GcJasZeDnPMVFrGy52ga2PwJjFAYVt9ovqS9vPiV3vp3DkbNSARwB5a7D33T",
  "key25": "3kqPBcAGKPxh1SvrSLHRutWq8XtkxAJ4DtryJ1t3mbycK29p8NUaqju626cZ2qXHACct9Xerct1wdSZFYZHR6cJR",
  "key26": "2BLWdMeTMQWmyqC8Rjhxd5WDD8CdahkeTdpuApaexVvQzLbFTdRG6esSQ39WjiAJromETM3GrEiWkdZzaiLZwEQF",
  "key27": "2bdNwc4WHjkde4w631iLJ5bEk19tvyxQpGr1WZrSGrR6GkYztDkmaMTeM3f7vnAZadbKJJJ1DJWsHmMz7vAh4reb",
  "key28": "LRR14ULHyZQdenUH7YzW3AHVwFa6beqcodPcxHZ8XSwhe95bUghTBJAbD8K4ceGPEws3PxWimoHjSY4xVxFh7CC",
  "key29": "5EV5ntFwspjhXWeb59oqazMgtyK4q9SyEXKuBJj7iMQBzQnQe7mByUFimr3NxtJxfgQJguN5oHaL9an1cd6actcX",
  "key30": "2VbjC5GNuwwc6gA7UVtH6JNUcrCBnfLdP5CMCBqjT3jmR3UmfL3Ke8k3CFZou3jGnqfur9QiHCdhiNMUVVZt3ctR",
  "key31": "37pkJrLZTYNzSdEBM1whPgLqvL7oKea1ghz49kuQptXmbLQ5i1wxpvuKAMoU52i4bdWytACAs7tZupRNCtUqUCor",
  "key32": "2v9cnLX2dRPC6jScc9LkanY1HV3rMaPPhyTZPRTd1x58UMxjBL84UfSgtK897LgKh1iEWZduBYxfivvEGwbMfUbt",
  "key33": "DaMDRWScNn4C3k2sXgU6SypcNQyKW639T7EszmkhTE2om8uFx28wJnqCSDzTasPdnWKdV4JQQzDCm4qyNAV92X3"
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
