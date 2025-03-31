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
    "45V4ApMjFSCmGTUKhwTjTkBAMD3XnefZRpHVaKcyCg5DMn5g6mpmZWY2v5irBp4y4GZ8uMSa7m7p7RDkkRhmgC1p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ao9ZM3qwXd2hxb2TTFe2tW3UsE6shRRTXr5h4VYxR2yfGHqYLzLeLWv74XoDoRvKNwKFsj9mQPsvLfXqrmfNsF2",
  "key1": "2Yg1pEfTNXx6VEemyr4TTknKbgtZVvucDMRZgSTVsDFDK6EJURP7ACADEsR8DpkwNNnfNJtMpMe9QHYP7fqAgnR8",
  "key2": "5aanhqdgnEJGuK2GkbuF1WiYk6GAPymZkGpiwA8FKtDDETuaWvhD8ACYJs9hD69vz1UT2Anhcov3zREPeGEuVT9D",
  "key3": "4sEzy11Co8MhBiYwqPffYxinDkeW8M9hroTE9pzFDvwNcH2XT6bPALRuYF9jAAo3HoECjpfQsCwVuEvehLkpg5c6",
  "key4": "3uFR9AVhSapLQHi78rDmmt3Hb8zhSBqEe1UH6HUBp4RrE15iFUnay8PoBeBbu7kz2CDHi4A1y4NRczNRc8gq5Cjt",
  "key5": "2cZW2qA1jQMR4DtyCsrifuyrajTWr6oLQqTF8jDkAMAmtma4nVGo4XfsDTgRCnvT221FWb6DrmCoq7U3soZWK7aB",
  "key6": "3DJT6faFJhqL5hAqaQwzdUTCHCcjV3dnN7vHt21Ynzy7gz2dagfBs1oqbxSRdgAEKwDuy8JiKV1ZoMhLU4eRKCyE",
  "key7": "3Lue9ieWj6tUgR1rXkBAtXDRnq4a43p99PPEE5C4r55SMJHYjC6xPjbwJbZ4NMtm1rUQuuGouehZipH6np9SQFb6",
  "key8": "4m1MJ4inCbUSsTmauJh73vxMPSwsKLAENGNfoGpFefw7XiEzM7KE82d1Uzb57RJYxSQ9gkK1D2Y7SatVMq1VosNV",
  "key9": "53zffPtzW2nktAW3bAEo4B1oYYGug7YRjXDXKbvh7qZkRvZ9RnLFspzayJTY882e9A1qYN3VtxSLyt2KLZajqau9",
  "key10": "2YcpcF2WipNBgjaeUSchENzSNEvVnF2eLhcneN8nMCVz5AcW6cdsHTiC9qvitmqTv8E889qdJedAEssjq4viwmdb",
  "key11": "3VgMwKg9P6eV2PUHcuNcGED127aUVQpB3YkZXmxvmuKbUv8ob4gyJAHnDo8eAWnZ3duQ8KqA1xEvVXnAFffp4q8C",
  "key12": "3Y1j4N1iWjFSo8SiwdeRadRcps2XnWR3fua5DXAxKwk4tjGS89Pdce5Ggj25sEEkbXxUNDu9UuqoGdXNTuRfpJJ8",
  "key13": "ku6nsVnpRQy4FEDLW4oYvpDjFCaSuqqBRUDWPnL3FsiZhnDekY9v1qrdaQK2En9xEGoHoosWr7LaHTiL7tqbbfi",
  "key14": "iz7SvfqQnKP7Hu9bnzQXLQxLkyUBtxeqGfHsURwGKZNvDAFWBJKhXaT6MYr1fsQgPkJzZn4YgZrtRaMoyzYUfEU",
  "key15": "29X3rny9FvfacGT6nqALLGRvEskXgqEYQz2LZ2E1FCkMHR2ugHVoqEfWM7k6LPT4QhuqFkdt2kLom4fC2gZGXgXg",
  "key16": "5h1fPh9174ikoy8JPKcC1CMGDwHbs7ovBWMtVmPfcTuuGPaeRcGrgNC6FjUcrHu3hJuTyE1AsqjXi6uXMYxcML67",
  "key17": "3MGMkStZLQGUxUcwoPAAoCJCMpc6ALcDYRqagAsZJ1WZdB8VpVw45JhR3K1wa5YnMdEFLj95cDdgCUoTr3p1S6rx",
  "key18": "2kWE4Meu1hL1sM615F8RxPfKbDVVdqqFSuTNwVcruhn1Z1Qviu98xujaUdrtFK6jPqZHd42KuKYCszSTvFhmVspi",
  "key19": "2ZHSxmVtvDetV1EFqBfr2aWHDAYYCrihELDkQShhtaELKNDvVs9NKSPcAQ3Yrgqhp64ZaHrRVrKvbvM3TcxzcTHQ",
  "key20": "2ZgVnQtaTMMCgqzmptgVJ3haxRvcQckkkfJ6fkCjBEP3ef9esheEDeUp8XLLZMLhTrTC6m4aGq4ZURw81Chcrrmi",
  "key21": "4Ka9i9aFB1aHaDVSwzNMWVQGVa3Ywpm9EfpY8UJxozx5dmNDSrPDydNy1UFETdogbHLX3zMoXeLCeqLvCxNYUWd9",
  "key22": "3AdHjWjGPf12oLRSkUGaFVc4aLGE7AdahswyysKG7btjm3BkFrRQ3p6bYcvB8RF5RE1dQnLGXC8vXrNRmcmhpynj",
  "key23": "5ZFVuoWJ6oeySWKAGRcJuMBbwEAc4LXR6rupcpiJ9WPm5YLriXXBqTvz3pU8qU3iQgqoBAEKsTuXiEK6rY6pQovZ",
  "key24": "52WSNs7x8Ym8cpew8bGhghvN6iVrzyJME7RcLa3NxuouAwT1MwAHQY83naX7DusYiDRVVodr8kfawY1sAqKxPox7",
  "key25": "2yMWKJWMDUvGCB6qeS2X832FAs8owgCdLBdv2U4QxZRDTnsyyQDTWq2eNR41c744Y2emmU9mFWKWkv3Q1EWQDXpZ",
  "key26": "4Pu7uSsbSKMviqSKLpzU4cKmxtnGtRCxVQt57iHxDmoSWNevVwVUeaGhxwXgxKyabBFqeBoM2somWBuxCH6xLWqf",
  "key27": "51DVzX2K9zumxuKg6rcBqRqHaXeroyPXbbAiLaXoChwdFkuy5Hd8V5EFuy1gahPumddzMNuic5iwebGEXWHYtur4",
  "key28": "2vZFX5wiQ47Gz7a1FbNSW7tRqAsxkWCjsAP1dtCkMdFGzHGhQKtouuGDjxRzzCtbD5UTSnyVUKNpuU9rTibX7aVp",
  "key29": "652wN4QJ2Yp2Xcm5XwXcogEMhbuNw5y3bdQM2rw9KLx2UHCgrmdgKA8JA6k26XBfZ5TzFZz4knP1bpFHHtPiUfwv",
  "key30": "2P7ms9bPABKf5t2NpxkNN7MYhTUVGVn538PWLP2Lc3QWD4LWcyXkABok2Qhe28Td46XcnTJBxcwtRnkUdUU3i5C9",
  "key31": "2XyU2NbWp2Pgu9VhNcqtNBqm14VSAHwLKtBk61jc48KAGJWYmj4muRBE1gpNfN7U2HQVvAs3eS2XKyuF6skvzT7Q",
  "key32": "3Pik3PcZtLinCGR6jATVBNqUdtG4tqf9gzqMEN6R2e9ddXy7GhdGLH1gwqY2JAQStGi8pZEjZxU6Y9eBjTYtum4v",
  "key33": "4twBND5V15XyxqzEMXnPNC7W68B8sawzSCRMtm15yBzeZDhoqWfFr9EA1R6AAqfRdp19BYvkuhkoKLL3BZU7VtV9",
  "key34": "2duSxHHbTbqy9JMmeD2zuVNtZCBzTYfQ6yWsnFUspyAQqGtg5ifraMPbPPrnwUwyzTvT47Ptme8Twfaay3C8fc7V",
  "key35": "6chF6Bgub8XkaSHxZ9tRZNCGCcgG71gwf52ZG3dAkTRWVkYuvuL8gLz1uU4CGshJ4JNuCiSpp5j7o4QRBrfV6RP",
  "key36": "67xQLTs9d7ujdWGCKEUKVgVkfvGjsaSntoPugsHsyBRZP5gXFErGNCxnfcsqRtQpvwUjFYsARXnicTrQcYHSi4X",
  "key37": "5TrSR4No6pjVHSsY6LJBRiLWoS7jY9Epq5LZFiQ3WSVBP84af2dUSpvnM9RKWVr612eFCasNDa7ZqAa78apR7ZVF",
  "key38": "2onrXBdMmC3JvHfUbuJSDuBuHwdeufrhDT7o7cK7a9qen4rh1xoz7M7wzYvXJQr73xKk9Md5VJeRggyj36jdpByM",
  "key39": "3UbFZkn7KtBESYFy5d6BVduEnvMpew7xqizFrgs5sXYNphwFEaah8KynyrpQ4tfx83mjYj1GW32AKwR5Bx6Cecz",
  "key40": "VeJhLry7gxijPZjifW8c538ud1sDh3y2Bvze3xVNUktFoPqMHP6jD15fF21BJ8t2WJYBgZxAuknG8wbCTphs6bV",
  "key41": "3rq3DUZM1xa4n19pPqiXJQ1W8buisjCiSHMEyHskxnsvfNa98v7nSePW6vtpgjG4QGy6yuWT59Y4NQSQxu17BDW2",
  "key42": "5RPWkDqFBf5NCpVwkXytFLzsBGWV1LEvGYPuxrQDskKPEkLS5HFYYYhfKhYnpqo5SkcFr9TN71abDM8R8BZKq69j",
  "key43": "b1iB2SptPjagHZKUhMgYVAjMmQUjAbyntTtMFbRrrL8Ljkb8faTevBzkKHeuHcc3iLL37boTfKZTwFyoTiKKs3P",
  "key44": "2PVJBAyXLAc77g51Hpf6nkvHFNcJAXVAnekkvYw5svEUnf8sxjUR6uUY3AHfG3DuknqbhMPaZRSezHuakHikouTo"
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
