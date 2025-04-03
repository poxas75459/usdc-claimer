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
    "3euTUpfdnAD6kVrv9n2DcNLfsEAAStfpFk3Ag4ykWY9itak9RY6KMrncL6G9qS1xzWxE4gd2QGnYjy7ebwfGPMMg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zWKLLdNaQ9ZamV4jXjc7bqVpdzDd7pCfN4Kms2Ks8R27QRUV4GVWSEfXJ3saEx8X8y7mJUAQbfQkjRkCzF9mYWY",
  "key1": "2ow1b67E8wn926n5c44HB2SyBUZ9zmPNLWXin1P3fiC8ayCTDQeVRgwsEdpb8uUa4gqtMj6rGhzKiBK7c8UVeDht",
  "key2": "577ECv6BL4pEviDcbxbQvYg3EEdYScHoPE1DNDHpjk4Xk21LTeLnynB1RJ8reaTML7m9vwL4K91ELtiZoLbPTVoS",
  "key3": "3vaUAvyF5svbQfgwjwHSMVJGQVyxQUaQj46zDiEGyTRueWfj8eJYJbZadpv7ED7VfbViPFehwY2BBLdGJSVLPDzj",
  "key4": "4rdPdG5tvVt5RfNqvcZjhw1mx7sQdkK6X9RNmMbC8czJFuFBkwTKYBRU6KgzxrQLdizQSkMpyc6pTZW56Wvupbx8",
  "key5": "XMneVY7rpAsRMFdmy8ezQ5xfnDYB2JQWYCk4tE9ch9Z5VKGUJAs8DN4faAJB8z1FBxnyK7YNXDnvR7efXCdgBVJ",
  "key6": "4A7bKj2u2K9LA4KitJceKLn4b3YvncqRtbcjKroBCM2aVbiqmRyBeJ2AqLHz4nkNizK5UfRmtUacWp1jU42RVKi",
  "key7": "2nyR4wVnnPA4Pyep4qoPMdxL5hZ4LHXhcxjuxEDuJGGhyKB2FZnXE5KCSxiAEuX3Q1ZMrUUyqBkKoxJ6f2SdgtWi",
  "key8": "TmEpAWGHJ95eSaSFzeUKbP8CdKVf2aALZEdo1fgZLdoXN6uqEXoGxPKbhHhiKExnHyFHGck98t7zhtnAUwy81Wj",
  "key9": "2WPM2Zr9o5S94n655MGZsDpTkc9EWvaqWco9XDay6JgHVmL8549dxh451j3Btkz3J3TdzGNpyDx4W4ZW9FSmkYRu",
  "key10": "5tMrVZ8gRK9J49wXKBpSucuzGauXAKDR9N6gj7xJW6LK2f3D7eaBBqFywpicHEJikMdSHYbxxtwxXQUCLq97m3t7",
  "key11": "3YVZS94UZn8mhD3KiGux3yHZ8BCxs4DJkPhLb63Ghn3Mcm4TQ8cU3e9DcF1ozosP3HdQSNQmV3X8Mns3Ch6ck1Uv",
  "key12": "5kENfU5VeaH446rxThQjsx2PZkAMACQYcgosGyy8wyGst9U9UmmanYxE1hAjRbScESJEDQzLG1s4MYQcRjz6AfhD",
  "key13": "4xcSpPtiuBTR9MhDc1Q9GydLWRX98L6R2JzvnotbD8iqqi5BT8zpVW9yWyuzBgKAnGmubQ8PTcW2yoe5hzZ8U44r",
  "key14": "4WzByqr4XtyktGt15pxcDSR8R54cgaEo81jqssn8TdtKWEbhed6DvFKUv5K5LA3yhtDgg4wTVdcxMVEddaWKtPuD",
  "key15": "4umeFDjynjAVDv38ahX5opNykUWqmhbECe3fa85erWGkqTTsmETR3yQYTNeTNoxrNw8XJdN66DmVQoWfhitTmymn",
  "key16": "5rSS9VvuvSnu6f8JY7fz3r2ZH1541tPcjYNdLvAVdAvZYRUqtNJxCtxdKnE2TSQynjm3743hG5cgVxhoDbKVFi5N",
  "key17": "4Zh2qNcWbk7g4CBtjjxMrTmfsTtdnPcSj83Qg4igZZSBeKFxohtNwtVAiQm9c1oHfWgByWP3d2PZyhSac6vmd6eV",
  "key18": "2VBZTVeS6uNuy8Lnd6bwafz22APgLsFYxF9Qo35xSgcqhH71F74fuTpdesf7UHV4Q3YEK77EQ3oFhS145UG6hti9",
  "key19": "4YMfNUWuiXUPug86fd6pPcYmcM5bQ7GMUKfDA5NnLPd4acV8sKup2P3jAHLbor9zFXeqGzcxPzSEorjCc32NRtLV",
  "key20": "3cgEmVtNNv44hUBMzVTKBCEJKfDwRsdBq4ymYi1SpNN6P3tCqttU1zDJRpa7QaMhT3pdNHfe8Pk9qvPMTG5rgXrb",
  "key21": "4zH52j2znApz6pdqWb2C93mrTdeHnqbHhZMAq3AUWJ62hJ92X329tsYveRtgsjXQvrwg2ervYLWiuVMVQVE4MCda",
  "key22": "2911HUq1g3YJkqahs9uyZjT24swa9Dt742cq7owGQ5CsT72Yh7unATw3DQbDLjp73Zd9n6SSWZp3CUup9tqiH9Ls",
  "key23": "3VhEZDJB4RH4Lzg6W3Xxf3G5eWvphcSCZ5YzEUzZAnMT93wDvYyNTndDDUv88Dn6ofXdSA7v8MxCrv6W5j4H6qEs",
  "key24": "4Yqn6kznswKoUViX2eH895jshWqpotMYm7aTNuhYLdkk6Kf34VgK34gJk71ps8PbLFT9JHo6iZNSyr25nbezTxBC"
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
