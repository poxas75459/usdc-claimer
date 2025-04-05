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
    "4Mht2RJBAhLe41m1ChcwNez2AW3DeuTM1xvAYJuoAdKW2HGUHak7UdT2s66ZGgihL17UCXJR7JkYatCzzVNV69kf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UeiercooFt9BGkPnhyPnjvGG88A2AyTrsS8ZLjdJVohz8cAJj1nBD3oPzQ7xpRoJ8Tfez2Dab77YeJtj7kgGmkz",
  "key1": "4wjnnWeR9fJurwR7br2QP3Cv45k8h9JxMQNfh7DarNiqPYWtY5PqCvQmxywJbTwifiMBBFmBA9aourob8Gb7DzYq",
  "key2": "3iHJiU8yxhjPQB3maxjKvqScTXp9rVQejReznXDgSBYnZW1FTd4St2XNnGDT3TwpTBxvLgQ4AnPTr1jNAS4mZixp",
  "key3": "5zdeLJGHxz9MyRGiLwRfzQmUdTVU5tDBH4EBjMh7n512yFD6Xf8wujRQsvxsWZkZtfpcC6m4Mn4BKNC9SyESZuq8",
  "key4": "29T1iDfA7zEDLaMiWESyqgS5tM5ARRR84aVYsgQbqHRJ4PJQUqWggaYnBwK3Mjk7fZALB52jbwpzKAjbrNVt157e",
  "key5": "5H385ywDdZBzR3xMZnJ9GeD9g1EnQxmi1AkuGKAyVWYWCTgMGTPtXZuG3ahAdHDYYoJCYxBRqSvDHEKaYiVrypLV",
  "key6": "3zd6yNzFWpo2iacrcxad9Ma7UcgxogvYQkcAN7Mkwz7XKLYksUHhXJbJ5dK9uFmxEyqpBXH2ZoZtALyzHKRPkfhf",
  "key7": "9KSTKQd2bfS6MwhwP5zsscGKkrFZ5spGMNrEcWbTaSoW9m2ZKXgU98WsQfU16eP2inq54N75VhpJpqTaKk31j3N",
  "key8": "KCmsX5qPoTm8Acow4Ynkpv1zC1oTihdGxpj2bYWHaGBDhw2J4oCiz1zJR22srzpKLK3A5jgRndgNcxN3bPbHHYK",
  "key9": "2m8WEa51dXQ7iVhskcBLe5VSQn3G7PUfhfRxnaEuBJB59h2L1g8e3WvrCsjNMQpV5iJGYwSb9q926Tp5p4rCKB7P",
  "key10": "4wfWyVMyCPG2ZZBQxHuLNCBEzpW8T4F7XW1fNGFHfWxop75EAZstHDELgsYyoYaqogtzWcx6oeYm4CK7QZwGCCp5",
  "key11": "57cRSM5ot9WYwYScbHZ8dBGK1hgouYwbrzN7KXBPpnhxhthkdFebEm6t9WaqYJVVHbFMmA3imbKKE1HtY7s7Cer1",
  "key12": "4CKEwb3RoepMdAjp5U7YUpQsqE3vWWnpyc7CfTPVvMrXunVKERD7hyxChkg67Erg2wpVzdccobhAh2sVoQFKE5kj",
  "key13": "3FYZdTAL9Ubc2CX8PEaLPcUFK4c1LqTRiPWUQmW8sct6fCkMzvTcvRv9hYvEgCg1X3Abz44aTZyhZor7uDUKaQCP",
  "key14": "2BmrMMgiAb8YS76DC3yPiKqnXmipXm9B5UtLF4U2QZ62EmL34QFHu43dnurCS9pjSSHVT7yCnFVo3LQEjSxmjEaL",
  "key15": "2BErZvuMwz5XpvzgpkDnwMUnbnnLyA7N9QazQ5ATNRUqFh2WBGntSAkXb2nCUkX2shAM5n2sGG8APNuUk9rfS7RY",
  "key16": "3Ar5n9RpFZvD7eFxZCDBysQe6CHHQ8cBZnTtCzaJeyiq8i3o5Gq2Jz1NHYhPdx4p9fbuh17JSiQLk5XUTjztcNzo",
  "key17": "5t8MfioU7hssa7FhEieVU4LNpSpT5vfW4K2qkj95Myw8XFVaNsetyGd9Q5rbJz6JL7j5xc6Jg98KGVGw86E7bEcs",
  "key18": "4jC4RF43dDtd9ctFkW8Z4NwiKdP8kzmsKs2MAXrxqdZ12hnkj9opQ42ruqHsQExaqZUSDWLddVxcgeU8FUaLCGXt",
  "key19": "2n3GNY87DGdkABqpfEMRy49xSRrd8UpT2DAX5g1qgg7HA3wtPokC3X68cAHx3eDPuipChgxNr35jnLjGaHgfLi2e",
  "key20": "4Le1MFM1cKF45ZDm8yUzyBee1u399cE8WN6FhKCwFpn9u2HKuqVwHb8NLziyv3NQdHB5ecwn8z8pUteCbCUXxdt9",
  "key21": "3jySVjVBiM24USkzb7PtQh89PENdQhFVp88ynGo9H7zyuNN6FzuDviMWxFGCLGyKZHMtUA7XRNMWyi81jb9CFyNb",
  "key22": "dNbEZhbYsuwiCeDdaT7PLUck7JfTxqtf1phxH7jHysDwkMZ2K22bWkMceQiJ3HBMMiWANTRkXWHuQPGZ3T9nJC4",
  "key23": "2Ea7K8ckTu67BTPScaF73ZGE8QKVQ4YkKdweV4X1UNKX6QXtwMrzZGGXdS6kb8Shc1jJkxGSgRvJwNEv5xzeYkLk",
  "key24": "4wbgTV4v2W5gmbxbG993bemq7HyEBx98jEo5GXcLv4bayVMFfYzro683eqz31s6V6ZYcvJT4FgtbVufimAtQBGCD",
  "key25": "2iapwGKXLXNfwz69nspVLyKf4iEAFPZSBSoRT14e6MtFX9W4pTzJuYvZzpJiVCvBeej5aW4hnvcVk6Ufyyfhh2wX",
  "key26": "22DdK6mtnVcb8UifDVSjBjN31pmri2SiJQ63acz3R9EHVD9YVJEQbnPhx3VceS4ZadNZ5xU4fMznhn6m85N17Z79"
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
