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
    "3cnXj2PKBs1aFSPWqgKLHaTwLdh5KELkWxtAnaN3CB7RwemUeiuTKT7Xmq5rybU6x78e4VYXdK1R6978VggKibqx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g6VtTzCpZJAbMm3B1T3apeGTWafpMb81MHp6WQUZApu5ZQf8Uynu5KQMnjw9mYAEaDntozDc11VZLXJdVpxxkhX",
  "key1": "5jWDAbkudXp1LdESQvpcFDYiFkwmLEWToExdC5z5TTxsqrVykpiGKbZc8nYM45EXKp66YycjpDvjvkp1xjEFKQsi",
  "key2": "4aEUv49LNvts4pPv2EiBbH27L48NkJstQ71xzU6yGq5MFPbDBPizFDsW6Yd4CC3xgBwNLUvsVg8EiqdcNwyWsbWt",
  "key3": "5g8Cn7u77urCboXMkYiNprraq26NfhZDeRDJakeyzfrqJ6BaqDMxVeWyMstYfjyi8ZkD885nCD5f2mJ5KRGE9HAT",
  "key4": "Czg6fMVKNGbxUWyTkFzb61EXzodxJ8idG3FbLXxhMheN4ZxBu9Xddeopzd34yTzcZW2F4BGqNY4cK6xvTnu4AnF",
  "key5": "5dyvx1a2eZUTsneY6j28rCMWbqJ7HwpfYPS8a1hSJ2QAEH9eHaU6JqVcKGMtZ2Po3DkMmzLqKAVo4qGJrFroSBPk",
  "key6": "QSgxJqQGGNAc733BttPAEfo8MhMGBRNrDPje5hSZFNtRXpAtVDNQhA6xyHh51dX3rWpXonF1KWtNQi6ti1w5gRM",
  "key7": "52wKXYuL4CMWwCUNvFDcmpq8ZmD3CvhsXk8n6DnypHazvXB9JuAhRpFMPjRw3YD1UxZ8zr5mLmU2ACGywpXz3qg5",
  "key8": "5zmVAmJSdc2d5KBR2FDvYwsQqYDYf3YRi9xJo1QhQkVWa4kaqmzpshvYUewWj4UueH61U98eWUd9ANGTine1pfpd",
  "key9": "3rWqtdfCBrPLxoXbf27mDF8EiRJoxQ1HBB5WuSSNtEstPZjgi1XTAgtZYiGzEpBjJ5pQ6h3eJPdQdxdxnCG8Jf92",
  "key10": "2QTvwtdiEYYoPqww9MAhpVTMA8Gn9Nng1sFfr7UTUzPDBpLrzSecwrC5t47o5FNP3YS3L3hdkbuWdiDdjZNK1E8p",
  "key11": "5aA33fyNmhNXWJASRwuP5CK3xtreoJ8qGrrue29XSVscpB8zECDCz6bF13oE7xqDAPdV7DKzQH5HiirhNaJvW1d8",
  "key12": "45FCCakh8HuPQkbQc4r9xNph2Mz9DC9jCVprkVvzJcPrGXVQiZ1q6GrS9jRHKKJj7Zuf4kbpr2m3tjaAv9WGKS7j",
  "key13": "4VC7ADL1EYx6uByocvF4PH6GJ3GpTkrFw9tiEhKaCPF7uH82TH72UzZfJpjuC6jcEzxFYwkyS1pbPYheqLTCgBxU",
  "key14": "59KCPCeoyiYboK9FhZ89BguDN1AKkGnWRZVHHZ38c8dZYfzEjwwt9Uqhk38GDsxUcPTkm8qZjNYzCRP9MWWdKAwK",
  "key15": "3azWkWZCEkGrZWtdStbHBqxRtPGuA5kv2oyYEfh7oyz6a2XtzRikL9Dh1YLYSjoVWfXYWEyConKhkbyVWK29ajJd",
  "key16": "3BRcvuKkgNb8a2CA6MKyoY8QxLwUCHFcw9zEuQLj3s7CgByZBZpwTUhSRfaDmeibFqMsCHuwFZ15k3M4FiuGwPzN",
  "key17": "345QWhGPSspuwjahD5abnhahnnHdE8hPspLrtEKtjYRwh8rtseHqf1E5XQSv92ju8UmahpmnQT2n1xyS4qtd5sDG",
  "key18": "5esdt8eaUtNDv2t6pJDwe1AYULWWvLY83uUZ2oFMazM5xdpLnCYWXby7Pid2NLgxWkCiDiemC9LPTnMRBPXYQfw9",
  "key19": "5E24oxAJQo7Rb8K6pPqKQbFL54skmy3SpgXC2RZ5d8ytWrqtzu5HdvirUHr7W3N4g38DknzvkAFJt9HS4e24MrDU",
  "key20": "5Go4JXop24MjTYrWCmpKf1uUiGUphtantiscnjbMfL93WYR2K3UbLjGnt34t6oQxP8ojoFC9DjkhJMMrKirZzw4H",
  "key21": "31eLGrEE5nFDFmVCjnjaSHuT8rKgLoDuXtq2kyMiXVc6fHQhz2UvGBFpnm3XZBxm5HJWNMicPwnevLeuLwJ5N8ZC",
  "key22": "HcjTRKdk8WGWERZNsdAvyrxdRxCixGhXv5c8fR8mE5UxgiwTY9hBwVra19e9QKaJG1XVRW9BLSBRMKuoFpVNT7Q",
  "key23": "3oYFo1Xjc28MV7A84KMynpEiWC7w23EPBLutE6DTDVn5d2zjxu7uXQdfWN7QeWyzV52Txv5Rk6Pj92xqYh4GBAGg",
  "key24": "431b5yx52FR6nHvEZP1gm9R5Gr3179pd5nTMbJ3DfooPbwhVyQFya7nwVgjrSNUV4iC4agtJFsrM4rtGDqJMANwk",
  "key25": "5B42kKNUyXt3YuoNQyRhHWS4qv4Y4RVdoZnVDVuQVga5L8wXwccPLgvk4JRRxR5qkNUZFGEznSn2AE7aUCzwoyGy",
  "key26": "3pkmNxbzL6dTM1vUPYLmPmg9YKLs3PHvot85iVQf8WZJuuYLc7rLg7XwEigujE6rR1i1iwNr3Vcqg6SJEHJRMsnj",
  "key27": "4mvovF2BDTQKp131KUtQAAi6cwAAfNWX3GVLDv5DgtP4fdvP3wNiyF24mczDHyc79Xkqvrfk1oiAqBZUREjT6TeT",
  "key28": "4CGUsBuAFypjiU24wVnmFT9vpBFQ3RpQikFdsuDDBUgumobC8R71dMscrMMqxRPQFpaH8k6MLWbSpkswgXwDQW8o",
  "key29": "46GWhrWZhX9spzWqmoG1SfCtoWnpTxHTMnCFtuLD2rQXATPyg8usjYnWFsQu4Ri4FFQrfsGxS5DB6z8dLywH6yqv",
  "key30": "3i4VUHm7whLWBQkAvXTSMK1ADYYqEQYYuX41XNYt8xwDkMZyP4tPNtxFFnhz1fZHxPKLQTu7fM88HWfaREryxnPm",
  "key31": "4w9BASUFGGvZXUvskuQWDDYSSC2xBdPMQmYNd2QjDWgfpogiV3bbSqf6rQPFuzBpfmmoatB4aM1jbivKBqn2gVJD",
  "key32": "2zkJBqgGCKDL41GUq3kHEonub9g4zqammevAT1wXi5vA91CgCjKLBHDiUUvSTv4gNyFuJAuZUh5XMVRXejsKYzTp",
  "key33": "4T2nBctiqnnpKf7shztSy3R3wRxtvs9SN9W9JQGByiW6whk6BbubiFP1zCpUjB8dHbFKKV4oqhTtryE9p6BmXiu"
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
