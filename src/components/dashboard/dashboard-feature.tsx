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
    "3RjYye336r1RVoVtfqnEMrSWZf4XzWmgMmVkX2JW4P5P9oo858rf6mDFfqKxURFqmU2tDjLRHzMZButeTu1yzuU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ch3Sposc6Bs8qjWd2zJoBiteuqhJ1otGtbBBBnzY9863LbHqxKvE9nYugKj3YjgJA51Vxy493dM1q3khyaMKwEi",
  "key1": "3qtfYunLzb6VppUMdpS8EtAxEdSjqzA4XrL9cgw1A7MdSVRbQDeRRnN5QKydk4tVnQx8LrzV1BRKGxANusDUgm4N",
  "key2": "4oEXHbnbZxLXpgeDcg12JSKt7oYpogGcxXD6g1DqSaEDuLPyz19m93qXQ8y5LyCfjXsY56V5fwATEXaoyDKsV8dB",
  "key3": "3TLBZNPt8Gw9431KBhzrHTXUgXZER3dNhsLnjrHYxVtdirUu3JDpGqbRvCBfbjfjxC2ao81ZLJjmWsBDPaMsLqdh",
  "key4": "41MTuBz3m6ibJsBKsa41rXKsDFJkFNLVFbZ6EGFUgTUbE4CPkTscdidQgtCH1wvg6duR8izYEcJyyqDQm4d7Xqrh",
  "key5": "4PDFcAmD8xUm1KRpyd2PnHE7YE4BUD8NkivdQyUnZhGQGiDuWegggPt8ATET7hYDb83WnZcWYwoNyFFZwmwpUmWV",
  "key6": "2Lm4Uefi7f34d7suc18cbMA4cK2amhHNotKNHVtXuoknGSxLeRQeXU95zksSH7wkkYCJBCX3cmemmeNXcFQY6zDs",
  "key7": "2RvFjbsKWguDLD3YgJzQGKTFVFRQCdxqHJtZC9BMxV7jdE3pjPEb235pCMBopCBjPgsWsDJM4pEQi4qsPc4rwFL2",
  "key8": "Mgp4JgdUqrnMNZPgn8HKVTUbGEBVXkzWAzK3ScFQebqBndbbxUBf2tMzxiEZGHSzVjo8YuTEdgZegTvs96z3tvs",
  "key9": "63yFxP7PSMoxLBjND2yHa8AgTPNbpkby5urHnmwWkmg6AuFZpkHx8cTquTfHv7EX8YqFHuSLxjayxY1Hvx3KSj4N",
  "key10": "5e1HB5LoXTo1kTErRXQ5oosiRbvL1mhBwHSQKJfocEm3XvKintWVgxKNXJ2ZZZE9WT8UwnB2FCPCoJBACvPpWPS7",
  "key11": "5HsSfgUvkfHp9aVE9k9rGY2TjVQ5LEKtHpZ8VZv6nxjb6kLqt4KYQSQf3ZbyZaHd432vWib9J92GhSY6zGLLGCGT",
  "key12": "5Qrvhr4qnU69HQkbrPRiq3iM4uVZt8uzLzSPm39RqF6xYfyzB1r9JYygEcfsPoV1h9KZXyJJZ7UiuGUHXKatQ5MV",
  "key13": "2kxDE6ZG4rBMS9MFrq3S9AKM1oEs7BCjXHnhTp7EKCr6m6bv9XWtQFuxcQYQPByQ8CLQXV1171e4zWi7KsPWUxkY",
  "key14": "5disbjMMzdS4yfhp6stVBrnRec49XYXfZdEFDTjun8CMP48FPCAfYXjREvHuCqY3JXJWvp92BvMtAACMtMUDwcV8",
  "key15": "4rfYjH1sAQUMBA4uzN5fapAafQy34U2FpmdfmncGkFMsQVWZb7DsitSFtJYJw4TCGuCKZoipXf76iFBcF7ooqkix",
  "key16": "eM6F6dYbosUho3HFjfLcyYWTJM8idfjk8ybAY4c78uQPDJB6rKzzTdFbSiz4Fg1oSebzbXWNFEpsntY1ZFjpHp3",
  "key17": "4Dt4q5fLSEzAUJtWpWnHPez3DmDntzUi6g9c8NVrUTUrxsnmfR5CxWumsn8kvjkjazbrHFvPTwPm4G4ERcGSTPHq",
  "key18": "4mdWgK5oWBegAkoFS74mKiYdwaHWc89xpyYJe68mo8trZDEQEHfipXz561nqjTY1rg3LbCwuywsbxzdaZbgxXp8L",
  "key19": "3zVcHdsvUy3fmyuxDgj1mAvZ7vfgV21yQ6Cpa3xMbGv52G6Fwsj5t4GBUvYpHPEquYyAHv4hdGB9x9wXftUKZskB",
  "key20": "5qKDJgpvBAJVx9Gx26rTZkM76k1xt11fhACUDbBfPVYe16drTSJj6AEBvsr5EVg7WZuSzFFGB2uoAUoetZzuGDRk",
  "key21": "3XLeu8dK7BhAyhDmLhLLgZaysbNsZx6N9iQgYsMRahfVKCqWFnGU1eNgGscbm4dFcpsGsPcp5FJjTf2owp2ExR2q",
  "key22": "UAzrYUd3KQ5fuTy14V2iTD7PbULx9P3kNsMzhXpoc4ohtLykgmuWB6WYCaZTmXrh3y1fy1kCc4vkmVeFj2kgpyz",
  "key23": "5zcj82CPBGx5BRRaS8zUKJPjGS5KTNiaHmBfdVLFarRMrejaMW3Y4oKrT2LwE7qTy2Sj6QffSek9YcMSCCW2BpcE",
  "key24": "2Snsw8mJ3qYm8Kymdvy1jRMRV617P5w9mEMD8Kyg4x4uPxxUNbVuHT4chx7zNwAAnnau5uTgpoUoatWjU9BahHFw",
  "key25": "41YAcDjZ6PJpSQjZzTdUTGk44MYiEPaR7ZWncKyKyoVMguJaq3hMVKenqUWYLQjHncydtuZUrHoypq3Lnuumzm6h",
  "key26": "4RHHMSUrDUoNNBypam6N8RjJXWsShN1W3zfn5kBm5QYBxafsV7Kzp6HRDodvj2pH2jGc4vvbvVUxejbTMybqZhFh",
  "key27": "36Mz9wrDfVg5Dh1Dod4cxU2VsbWzr2sL637HZ9dCfZ9YdxnrtkmtV2oidZ5MkbkvVeEhjeSZJbuWary5e2i6mNt1",
  "key28": "53S4eTMAc3kxmc5Dz3AUcSRaucWV2j3DJNuh5U5t8J8xnixU1ucTTECje2Xko1CK4JDkz733gLS6hs27Pfq77ji",
  "key29": "3RaUBPFyF9EWdQyLU5FikYTjpax9CukpcQ7NrcNRvUePEkZxD39XxRSTPQwP6rMJ91vbmrDJiT78XCCkMYLY4CQJ",
  "key30": "4dgxjcHA2wNZZB433tNC4k2LGJeVWZSvBZu1auBeDR9sdNE85doeHim2fXDPbGDy7AiguWRm7vA5ZLS6Fwy1L5p1",
  "key31": "24NUSJfo6uwJNXTjEcWXvaawGZ2H4sspypy9CD49nwtkoQ3kvGCJCcUjkv8DcpoSNp3hAAvv9zu7uGmQLXiJ7bBh",
  "key32": "2hkaKghoNCZJotasuAwVmX2gsdTRi88Ydu8Lo1ddKm2RyYv8kgNfS8HNTooWv95njgC5WpvsFqxx8S2Rwsv9yDfD",
  "key33": "YEuCF8YsKC3gXse1TLCkPMXmxvQVz7gftSWRFA2NyYUj4KCP9D5iADrtMDsz61uSzmYLBEU8kVcFvheZhmZZZYq",
  "key34": "5ws1mKRn6UZyqExVsquv6UmfjtNEXzAYFHpftNMD2HRJrYiZ3VH82M9pBsjNBEH1tRrqxM4DvbRknYF72rDkLNrX",
  "key35": "5hEtjnn3GCPcDDWZ1ZWVwcAmX2ZBMCrp8Ch6nD8irk37w5BdgrXsYu3wo6sZ1ezE5D18xMwic8M5hZmXcgdYGcqe",
  "key36": "22V3uHT1wDqjhicHT2Qrf6iCjVC1yAxZe48VfekpuVLJU6WojTY2eKkYeHoTmEUFmsab4YZoDPbzi2SPiTH562Fw",
  "key37": "tCQYV3wQKttDem92ssPhqzneBbh8McStyLWsWeJH5KQ2iB7sxijevvGFvwaC8qGtiZSBjRKwxZ4DxAdAj91gKqP",
  "key38": "4GdcPs4Q1aGyJxgYbuzVHMaPnXVRQE9qUfZYmZn5X1e4XACQnvEt1RTXNdsa9UZ2sV3qLc8WhKYDwKUXUKri66sQ",
  "key39": "481XqpXU4dyo5yG4Ssp9fXF2231uT8F6aKYA4RVoW9gsMmDS4Cz6XJyPLPXEHuK94vLngqAjNYxMd2mbXfpgQtgM",
  "key40": "2ijunWvW1DoDCZRdpbm9dkNhppCuqsKn9PpSNCyJY9qKgvDtZLSGoA8bx67NPovmxSuZ95jbbXE1RzKj4t3pFGgj",
  "key41": "Bteg3EwpuvJm8jz9wrKFDXVtDjCW2E6BXnVDdBbhzGCpeCkXv95CxBwaDLyRE2HwjiWmba8ujP3WDuRgGJA3oEo"
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
