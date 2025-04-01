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
    "4AHeMATomjK5JeTFmCRdgu1xMTz1X1sb9t2KVPuDWNs8G56XCpWgVatnPyGgZydgtusdb7BPsJbh8X5nxbKhfh5A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rkqcC1HcXALkbBtSKJxVqz5s9rYUgBQDks6kcDAnddLZkoFgiRxkLK5MP1WQeZ4P5fQbYjZdfGjB6f5KvZdQWCu",
  "key1": "5gdACHit8xoRWvDai1cT4Z6r57BtGLChzFDLUWrDSDdpsTviCe9LfDB9GcRiBiQdk9eVw73poVSjDvhqZ6hNMg6n",
  "key2": "5nMuGWazYPNW3wdKpp1o2fkpnRpKCCFdp4aCztuANNLV72mu42TQmRXSmFQXtDe9xAPc7q1VnfVJzwriLbV44YL5",
  "key3": "4J94Jk9k2CAEA4o6Fcbr1iSYQTx26P3oryB3JTZu79uTw5KQ863XaECLydCRfQ2tnaEKfTyc8CHw99QyeK3VFNZy",
  "key4": "4WHkoaApFSN8iqr4dmtqsP3v2fCLDpTDRSJvydcL1dLJXxSb3RFNXqxUkXrqLBVbyK85o7HgZTd1Zr3ybzoNrmk4",
  "key5": "4U9CgU3nbwLVU3uSNUPWkj24pdGZP2r7mBuXHeJsvjBNDhYonu8KYQ2YhEE2mAiN6sJLdZNLfhJaV3drZ5zcy5yn",
  "key6": "5mEfAxHcKfCBVgwfXmw11uY4BM9XLn2p3Qg6GPyUzQMQkm864wGfARRC6svSb2Cxh1mNK7SMXxuoQ7W1tHuTjSx2",
  "key7": "k5YrL2FBKeqayu3PZZ3tSj7o9DH5saagPvrBDJ1pPQ4cnZAQR37cUndDm9PVQLZR2yvUoAqPXPyjZjsWxcFytBs",
  "key8": "58vf2eDVs8Zzir4SUbpd1WSaizdyYYRxdLJk1esmwnWHNXdDUkz7wRuRnnWswUNqHKeX1GmikfMB1zQwqtdz4zfK",
  "key9": "5mwd2wTqRivq3uiiZx73emzxkPGYtXfzDCnqSAyWDAcurJ7tZF6MLoDtJCieXFVyvor6uNHVBGSaiC4p4LQfrobU",
  "key10": "58TjV8bGYXCEsyQjcHaV5XkJPtoHqbjXY6neroF2wTdPTwuBNgd6ENd16JUKzCAT87AjyncfadPWKJsGpZiA53jG",
  "key11": "1zefFPyqLXmbrnfZraQcuNEzfi3fPkx39EUN5xRVNrPXnWUnUKQau57GSEhJCdmnA8LUCAzTp3fWUYHm5bEwHQz",
  "key12": "2K7rQCD6n3NGrSkd3T9x8nmvz69CdBGncB9hkqJemA1XzoeJy2ZoCTd39kHaYGWqZK3iwPZAaeMSfCqs5Bb3uJSA",
  "key13": "3Hn4achFaFzD29jc5quQuq1pXzayver2DajYTH7FPvP1XJZHi2FtouEYKCXT8va9DutGEVMGHgrShRR7PFueHUKN",
  "key14": "39528B8SKV1mMRzojh9Rj4XUwfw999uL2jpLaxV3JWB22K5fPyjcPfVRX7UJFx2MYcrLRHy83J4zo2NSmdCjcvqx",
  "key15": "2DH8HT4nBbpfGnbQLq2uQKf3M7jePKkvwjZiixAfTjg9WHkum2ozZeworwFjPa8RX5b5sptrnmpKsu46L25bZAJu",
  "key16": "qrN2vmYQADietCmf5Fp7Xo4w83taKD7oa79TcYQEy4VtCTZNKTHALGzt4EkxyhpB6tD7nReU1yDwvrGdzUdQ4hu",
  "key17": "kk6bsXUzoCBcG266X1WGguB8Z1n9ubzegwu8fhm9vHc3a8ACTtz2WhRXGvYfp2WFEDhN5pTYCB3okkuC8wLCx7V",
  "key18": "5826Mfqk4MaWbMd1k7Fav2nf6nmW1PLVSPvwvvKha57tkVY8J4suPqXZ8yVo8bs9pwEUwp9yonxCa3nJ4ia2JuuC",
  "key19": "5aN7WcUZmucQdiMa59G8Ys6XMpqtXBoDcGRLFYqqFXBM5iifVYECB5Na8QdVdPNJYvYuJWH2vm7qsKJ6AKLvTuxt",
  "key20": "4eyR7AiAzdK6pBGJEjpmc2fLV7F279EYWjTFrbjULN11qeAcMNbbiVv2tU1EhF7mW6jGRNJNSqnWu5T7TbE3h2yx",
  "key21": "1WHHtyLQobzYnDtwNSjc5CdjVTfcGKCWQgZFGFiVPeHLh8C4KVVJDkBUt6GPZi3c4soy4EdxmyCikqDVGKQFPsz",
  "key22": "3x6uFQErnGNrrg9SQbh7X7t2WGvKSGzrEcSm6YrLDEXNGh7Br1QVLyCBn3x9iJ2mWoeYVJQ5Y5hcNJCjizR1kDXu",
  "key23": "2hkBAp5ztFF8Y2XuF6t4RcxqLgqfECnHk4RyssTfmfm2aT98SeCd9oTpSD2ozqQjubXuaYmzH57L32ccbxKURGRJ",
  "key24": "63aTWhxGcgKrnBxWuFaMTRPKFmaHg95WuvgjtQGT7bRCbuRMydBpy7CDyT7JMuZZK75g3ZbNZZQVNYJURH3GHHNp",
  "key25": "4YnbgVaByrr6kvtgmFpQRrpLH38Svxn2MtyqLHxL1kj1AmBogmWV1LzTZQeUPES59fwC2Dgx5gnbvdfQ9YxSTPyi",
  "key26": "4UYaAw6hkpSJUCD8g7ZkhNZPJsaYaMN3Gaxc9grYkNTP1xJYBFjemSpbyCk5gTycWY5oeShXm1kUA8omviHE1WCD",
  "key27": "5kvBM2BCWKGvSwf43xMU5VSwTijJFMg52nqgiVMAb9ALDRPJJ4YstwUEn5QV9mzJuzWmySezSx6cWhLPTucDoiLQ",
  "key28": "5MJVnvS4LsVESomQLEqt7LmiyfvoTMsmX7gVDHtzhvePTejNWpVVHDxq7bWcZG2g5MtmPhZQrDKkpfeAzkQJx1CN"
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
