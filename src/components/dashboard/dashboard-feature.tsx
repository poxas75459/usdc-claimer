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
    "3FunMzJLUjALNBqXbhsTmJMMXy3MqGSTLgnanmLJMc6hV2j1rEw7mP8b2iqNHtDEQPXLVttCjocpx6hNRDRmZmx6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BZadeLutHAVR6sxvNZC4w5LsKwKxhZrwHceEzyKSof5CxmGKTZ9TRNosdtRNafwL3kgWDdA3S7dAjCwa7CBdDV6",
  "key1": "4QfpyY1mz8n4YVqeh1phg25TutFZYg2jekuzq1qbfUNv3MMRHshm5Qs8KgJrhKYjdtVrUnZyaeuWrbGS9KrWQhX5",
  "key2": "4ap8U1vnchLYmRkn9xfRfnWqSbdwuuhtV7ugTeqcrNuoqUpY8GrDGyUBwuBGnvxDjGfAY4nRY8rocrLYgnsT72pg",
  "key3": "qcEDx7ujdoktr8RGjDbGhZYdMJvux1qDZCGW6UmdMwpgdvC7hMhFdA1efbmWEmtaDPUM7NdYN1DrL1drsdYg3xB",
  "key4": "4vm7UJa1fu7xCuxaXHc5YGvvFNTnek3LN6JCeC9hNiEMBkZFpfNjSC7ievSh2vos8k9womiEPtVE2zFdJvrx8ZQb",
  "key5": "3QbsA82Xceve5HwzB3t2hmG3wGJpaYWQ5ygTTYUmvjdzfncP8tuN8AYxrGjkWawPCR42s8Kh8hej4zQq1cqVpxz7",
  "key6": "5cQkGEDYLyPEVJxEuxR7aK99YZrhHNYjMbBiWoybdd8B86QwjGRG3kbbNiJYM7RJNmkQ3DcpFvQjmg4W25CCtnY2",
  "key7": "4ZUADPxatmRZ7o9FRg6ghU8C3DV7jLaAzYuuSaPwCxPFBkFZoN1unEc8Mj592PSDGko1nGhoyBGkbbxKnMVZofu3",
  "key8": "3ygZAFQjZbDSkGYucKgQKDZ88UqCfyHBJLjvLtSR6kjLiKDNYUd5PGfN3aWvWZW2xCJJvph5bk5XK1FCDDVWjQUU",
  "key9": "5tQPQV4qNfaS53xrAFS3uP7yr32qLmN3eM8U1y23kg12GcNucE5pBn4p5bZbhLQfe6uC7kUU2YgW77Ykj5Au6J2m",
  "key10": "3WgWfkQKSPqn1gq1aKFKHLVMDSZoQHHebvz1txv942X7ETHCHrWcUAEBAdragWbYdvW6VMyc3f2jr8yosjHRAKLY",
  "key11": "3EnAdmaeAesspxZRdSurCbnrvy52yaC6EEkZxW8DeQ4qx7pKkCRq6s31LDdXzKfToA4WPinmFP2vM2Bg3GT3Gy6U",
  "key12": "rg3mYuNMKBx9mp1hekvCHNZb1s2aCM8KN65vVB2aaVs1MGebPnzVFxYdrCf2N1M1umQAwDv49x96xoS5JkAntVq",
  "key13": "3GU9ikHvKrXdQMZ39JWsEdoC4b9szfJnQd4ojKJPkMz7E7iStg2NKaVNfUEhYCwC9jzjUgnKPSLWXGwGDc7a3WPK",
  "key14": "o3W2rf64hPFUqgubYTsbcjWRM5EPVJ94e1PXorjezy12J11vgTTPY2VBjgyraoQp8XZd6qNMiLY948HpDYppNR4",
  "key15": "4DoXkXQm4idhor9UDz3pJVXnpFHxzBa32ZkTZnH8VxQhJ1Htre4MT5tRfJx5dZVf9j2TTCjfZwTedr1Ter9UtLoj",
  "key16": "2BrVDXr2gpABPPYmNjTgyLiJ87ybwEwcNYHtfgH94DwyAQ3hJTvkNt3m69LKzDChk5BZpKFzF5xpYkiougrdcuFa",
  "key17": "3YQ2msut4e9goj8JvRmL4rD9XvCjUHYwXb5FKEB3amQ7CRkzFNtChCUCmGeKjUtR7WBGGCh7qE4n2QDYYLCs1xB9",
  "key18": "4qXGJfjG1oBg8Xkh24jWRxMBDCPGwNEjgHXnU1F9quARrzJrRE3JaPR9gyQk3eQj2YiKubhEdgNTD5EvZTsEdPPQ",
  "key19": "36scMWaAEXEx1iENMmTz1szF3WHDCqMUzQP7gUS8fxkmyWX5BQoDrEi7hUwtpdGYXe98MAHwnm8fu7R3t6FWnAsq",
  "key20": "Ph2BXyftk9SzTPbjeFcaYsMM9tErAeho7EFQ5EKobpF5kgJArkW7dpADf4gjxRXiFL1SVb7V2MX23Dkeiqy5sYo",
  "key21": "2xM2DFs7BRE8g6rd1jAjBbatermjZqR25AqiQWG7nVMbvnehP4dsEayjkATicBLMXHemv6ZiFzammY5j6sGXNrpA",
  "key22": "vQNaeqxjej1iqHjjAArtPJ7F84ntxnsxzSV7X9yhrwmW2P141fn2TMjfjMy9ruVHWZCAaVxvDJ398oQB8gSJ3V3",
  "key23": "2VzWGuxKQavh5tbRA1XauvTx6fwGJvqwsVMBecx19adbfs5qmp2qanGdpseoShQwDKAwpJujnBzxAaVLQ9iXQUyB",
  "key24": "CHwx7mF56aPnvuWfPd13db3RBfWZBqXS8xMjHy2EiLJuWpEPDVyHpTCrNRoTLFd2m4Za3Ea5VJuDRciHeT1T6j4",
  "key25": "4dcdjafjDyCh4oQVXc1k8D4zT4m8joXXynKwQvGkShmhskM6gAbq2fJWddo6FKe5wAxK5fYyFh9iRuQULhLNdaeQ",
  "key26": "2WWAgwVTgFmjPSXcHSqF1pcMzQt4pkRxYYUFX6gf2KJZPWYkt6w8Xznb6VkMb7zZRFCuXaR9pwZz1qik7DmuWVDb",
  "key27": "myhqKhRB5JtrRWn8RLGs2wYwosqtYqS3KVhwemepdKXKnSWYqpaNzjwabwEerMgnAXekRjypVLoBZ1yrkxHDERQ"
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
