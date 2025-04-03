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
    "rdf4teCHfGqrcV2GvyrTQ1H7qHDkypbcRcyQGYdBScLrwV6VjesEL9z9TQJrGdagVQkCt1T2bjLALKeFFfeYRxF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gie3TxgS1vKwjhTZbGFyfPXtXFBFLdNp1e4CuV4omvNfp7suw3xAcFPCLgnyfk3EHBCa2YjWdiqGaarfeto8Q7p",
  "key1": "5fFZEEjyERBuoSvfA1Aqs2BD94s3BJZJzc7PHB6wsxzXN6fdLnrjvJGGGjePaWWQnVfirYAucuuoo6ZrYEBFbY1m",
  "key2": "5zYHxyuqehqvBh7nmLs7N8XXB9gB9hifjpiQ76vZnrp247v7xB9yKxR7b4aQ9TewdDc4hSefUUUDiUzBmUi4QsYk",
  "key3": "58hGXTm3VTEMmcxa8S2fGeYwbkR1P69ZM6Rc1iUkxLHfts25Zserc9LnmFCeNTjpJwnQkU6U25ZeWTbZ3bE57Qfg",
  "key4": "47ETUDSxGmhoESANXaY7Pgu1TqcWV632iPH4EgwbM9srFGzHry2zji6shcDtqPKnzzDKC1dsGiPeqme5DKwCr9tD",
  "key5": "4gPs27H7BaqkNqrv5gN284N7T1HSssNxr8gnpgFMvcCRNg2z7APzCkKrSYbm4xGYfQfnYeemYMyQ5kG97YXWwzWG",
  "key6": "31QE7MHMd1rcU2dGcnMZ5j6EQCi2W1UsCP4pCirB3k1SbsjQYhCysJquWFZAbVV4oxPZv9y9HKZ8jhDTQBVhWm9o",
  "key7": "UTsNoofzmXWn3PfNYX4Kvurm1TBoTe4SGH89p1DDPKk8RxXHYF4LTQhbMi1o4LHERBgmPgR8PHQyRi3fJLobYTZ",
  "key8": "52CEN9GbJkw1YNkVQPUBXEYs1UaRvNwKEKJV3ELaDoXU7nJj2DDtkov1P6Lo49PzamWjekrERBwV5uiHqbYMdvyG",
  "key9": "6WSgTConoZH36sam1P7munSgDHLi2VrPk79EQf4dmeeyg8M4DDHUYq9anXfh1ZPCNPSQthbYfKMNQcviJXWGdwp",
  "key10": "h17hnxLHq9mAkxG8eeX6AZCGu2Aq5wPwdzQie8yKAHLHzJazEa9FqbsYBek3Zu81zYGjjUPxwmB2rgpTNeHdM93",
  "key11": "2uZgPVWS6FUTQEx35d8LUBNQE6WpZcLgK5UTNcQrk7fHAA6kvRn7daEFfUVfUsohbyArz6ztuxYj7LPYEvHRsQu3",
  "key12": "2iLeqVxmdCRz3unwBcE1XuW6YwuWDmzXaRaEvBPzpNKGSWzoEcxw5KhcBeh3xTYoVLzP7qfHxa7GsGTCY1MywxT7",
  "key13": "4t9CBNvhsmS2riCBcZUDAHXnGb6K1xvEsm69MAhrXEFkthPaqZxHcuEDaM87oC4MGcadqzx6eLrunbBnSiwdpBca",
  "key14": "2Z9U6yuExZ6BUt8RWWci7mwtJ3CiX2K6bS3F2x35oi7u5hLS9giBcAHyosve6VkyC6BcvUG83iuynbvMXmByAoGd",
  "key15": "2LLPTv8gD9tKdVzHHmtM1bS4iJ7oysBZTHTSQygdAcZdbCXvKH1tF7FSD96NgAvz8JEVC4ucSMutDM5G6AKaWBmg",
  "key16": "2SaXocpz7ZvB18TFFGRpZnuGptfZ892rF35Vzg1XKVBa9Cenbw4DPo53zH4nWi2HK8pQTUgymP7hcdc7Xt35gDZH",
  "key17": "1uatuP98t5Tx67xut2Uq8tCcgxnzxhfTJBKZwBxJ6sm4sXXzD2P9MLQ7f1GhixYEqMMeEkn5R4tvT18MsyLpRuj",
  "key18": "2Kef9UQhZFTovp5E2JrrqTmCG57RVCAhhr8aeW8t89dRu5x4WL1ions8P7nNsbbTRwgiD9qvt5zyNfgzngaEwkXo",
  "key19": "4pKMd2Wk4k2pr7grpGDfFvb6RL7whVYnqHW4LSkAa1SMk6maADwqMEm1GC2gLfQuqHCc6MsnApdbG8z1QnfkW1Sa",
  "key20": "2pjVwPwsET2rR5evL4DA2RzCCVXUY8GFJ2fjK97BgwuXQzmtXtR11pRZ6cso7yaDW3wxN8BQQwT2eXuvmVpToR6o",
  "key21": "4JoXM7Dx3fUFXJPcvdtZFkry9GZpkzNZt8QkbUpAhEGMggQUBqb3mXE2pZPSLgev4jmRFMu9FKgb9122hZu3efpb",
  "key22": "5MbNiaGb8AeQN9fRkAbpgzAP2oMH4ZPHNQpp7rdBStQoFvKYJpbR3XvCj1GUF1mFvFiG5Y2zV5kgtd3byi9zAHZH",
  "key23": "4zhS8VDWTt4fsRTVPzrxHqoiZiVd1VdAmeymhbpRYFs18p4F1UJx2iiZPUxLiQSFGUkwMorL3h8sJcEPXyBcjbPM",
  "key24": "3zpPYszAU9B1cznvFE7ckh5xj2emrhvkaCXk1u8aYZ9CQcqFeeR96qofC7SaSHSEUS85tZYGEwGwhRubzoky6bHC",
  "key25": "P4dPkFLp7TeqVmuiETkxFWwY8fzgxg6ED4kq9MXW4vA8FWZyXNeVStpciehtexFQtpZf8ZFrtqD9kFSH8pN6Puv",
  "key26": "5T3cGfhS4k4LwrXeZjf1sMUqzBfaQ4XbjGa8bsnvZbiRkAqXzqodEBCAen1ZeffBYBQNbRbXkrTXTavhFUHV3e2"
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
