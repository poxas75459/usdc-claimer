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
    "CS7ZSywwM1B7Cp7h684Jvvjcxte3UF5xYJPxcuBzdGj2UtNVR4Px3GWZcn8DoqzowWnWXHJGEEXQyyGedxhCSEK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AXL2G9kB3BYo1hLrdrNmxEYrQtBbNqp4W2Bve6Pdvtiek1AejBz765BmYxGrBNiFuyuSzrTF8VwBv35S2B8e8fp",
  "key1": "2BN528xZnfshfmwWmHWR2nqZ2tGAs9wMcwfr6Muu8NUq8CukEQjoajSpPkEjuThqBxQqPDRq7maQEtf1qfXPGHJd",
  "key2": "5TdYEfzhodBBUrFkB67v2NjT8quAZBpr1g7QMg6eRXord56ko2PLzWhLxeP4kvK4FNmFgnV6rSMesQRTU4d8Fdb2",
  "key3": "2FJcYDCD2iwCPLWaWE8GcrYfXjEsPXHrfeKhTp7T3UoMAG1Y5H2mBhW47WiNs25834UX5iYCTCC2G3y9TpBi8joD",
  "key4": "ZA5eVQiQr28W7jaYwaM93d8fR2Ju4FfDgZbdZTkYT7s62dSrnmFzaxqWqqQnjUqtHcYRwsqSAZQvwxo6YoU5Zz5",
  "key5": "4DBGfvAAWp43d2Yqhterr5EB8CqdWkKdcd7zU5uH4dp6czjEXk3Fnh9rqQHr9BGK517Kz7uPJ8svtTJRL9jYaPQH",
  "key6": "4VACMEMNZ9QdEBLXbuqPUf1hAVZqMdVFrFV3p8DmSidpNF5N8vSPQam2AG2xbm39UMjwWTUQTXrXMLEqL9NrEwjZ",
  "key7": "31ZFSvpgcEVhZjGwRLsc6w1Uy8hQeWHP1gP6tFYPACGxZPxJ6EXGzHviQMEdpUdTJiQj6wDK3GsssTyECHuGdCv6",
  "key8": "61ykQ5afoTqeRaYuh4qZocA52JttyegXSTPMToQevs6fLVk2PnmHBQmFdPiFa6aMQePYsj8N13utT9KPgV6hn1fX",
  "key9": "3NFmHPmfguhFET3fqzdW42FCdNjQ4574rH4Fje2tyU1rbUPhryLRsCvo2dpN6688pMKQH6NH4DpaBHUQNcXuuzd",
  "key10": "9Jn2wQ8az4un14Hr4xLeyUoa6fcNFBngg3VG99BfzbiVzRHDhtDgWtGW5dNAaWCKbGkymykcx9YWLjdzVMiGJL9",
  "key11": "5f37GhwLnZY4Li3GLG4nZYqLHcqb76RCKfUMsHQG2uh6PpXSUPVpoHfhNf6y8TvXQFvnx4TNujQjvjnHQB8JnSFZ",
  "key12": "2t1pkRwKK3FxvKKyBasQmsvx4sHsmbZfCKsabYkwJ7kAp5nkrf6GVZ9MEWsjbFXV4YXPaPeNoe6NhQBhE1xr4tA4",
  "key13": "2A9URrVgN13EJBp8Jx1yeFdWMksaSwWhKgqfjgZ3cqYGGaDwHky3sRtyFS6T4YzcJif8Fekpa1V8k7bFidDidxsX",
  "key14": "5194iwxCqE5KwjDASE928oViiSVAbenLPgoNu1u7jozMwi143LMNjz1DXGKQTi4FfRFPVwmDXV9F8k5bLt3c2x7Z",
  "key15": "4kKgPLPPmXYPaViFDRtdHLnUd5mGciWvJWfg2nZBGFfW1eqC7yCY35LFp62T2186TqZbx8ztUeFUdNRF7hvRq8JA",
  "key16": "57Y6zz6yMU8hx2yunmaLti6xQvBePwH8h9a4TKjp1EFfdC52GJmtEp7QyshEAPQ7GpfK43Ss6y9mh3q7jFPkcxAJ",
  "key17": "3Q8N722dL8gtFwXFXgyQBxKTamn8PK7YNCDSntg6W7vG84chedor7Vy6P6bw6L68DVWCJJEJEKjRX3HouFw6hG4g",
  "key18": "2sS4nbcSbY9b9YSazPd9TquDEhooxNmjSY1yuqsr3cmQdqyV9kXvVgZVNpmzT6PtCjtaNPvK89tFGXqohrKCqMuJ",
  "key19": "5a8eVbAYzj78E1SuNb51x71eYAJ562FECxWVtD2TqtX72sicLD1zeD4yCYK8PtoxbfUHYNVbxHiTDnSu94K9vvHV",
  "key20": "39NMsQeKAFWRHNYa7JtiqutS4Ts6hre3s6hdfP7ittsEcfvgh69swAgoCZNLeRjShLNCd2weayAjWARfEp3A6KvB",
  "key21": "NDrvrjxqpxKXKv2sxNCuCQkKUwDjCCvuS7mpxG9ovUQG9k9EaDcbTh83v5sHxjReAxbx9AHtqRutfPTqZgGrDD6",
  "key22": "joCZgBLYwftBopPfNqaa8W3KpEZmFFvAiv6Hk9oVcEwnkmz12MochBxjhbka6UanqZNuz62Q6MxSvcbgdFmw1KG",
  "key23": "dLZovhzBEFyFGTwoydzEhqZRuSQ5xai5Ra2UXN92yS4FvpATxvKBQ6VK5LKVZsmQAZv2FSdhCagPiMmggxqtHMX",
  "key24": "5Vz9DAu4M62eSEV1NAL5i2AWyoAWKixTZe5RmCkKJPLprR6SLmssoxmV7qS4qoUxRrV8b4RLYa3LSgSjYbLDMyJk",
  "key25": "4MSzeNy7B34QC2DTwmrxL9gU1p1CiLTnazy6hheHxfk9WY5QTP5FuvybTScG1REmsKGPnAXAsGv49ZwVYSqmmbWQ",
  "key26": "2s2gmuc2WGfERu8BTVm1qZsTGwzZZPv5TUzbVnZN59YiMSoYaUfzjkR5CfBCK52uemXgFT6ftv5sjHLiAEetjhhQ",
  "key27": "4y5XqdSkxogKNk28Uoi3qjEimBBYYhP9rFy5MHqcAJwL8kyLqP9bAnTgLWcYuvMwXrFdTr3qXh7VBb5uFgTL3xK9",
  "key28": "58AcBoDJJB5CDZjvzpLcNqaSKi5wk5MSfofyGKxHEYFKvDD1dxLEdvQcfmJtGyGNP5QzffPcccRmNe6UDYyT61uQ",
  "key29": "4so3YAcJtqsJ3HGjaMGX5rrWnGirrvGR1D8aJtYjNgFxJZP8m5hEYtMyCtf2Nj4PWNjspzeQcpVRoZnkFNRiCBDt"
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
