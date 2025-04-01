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
    "46Xtysrjt93UrP42inAmWZZap3fA74yd9Tp5TPTj4fHmoKmtrjPubqcUTBew4Ktq2ZVnyEYYhQoajBExS82RcPqs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35nysSnPGSeg138vjJzMGgnn89XqWDFcYfhMBSXaaD8z6h2CQ2ZFLiNcyJz6Whc4rxdWH82QNAyHiyh4jB6X3FY4",
  "key1": "Bp9cqzXe6infwYe6AGy3AcLyTcKhoiNvPkusN5KL3QvRQqyo2CeuwfSxpTgTM8zxhEbTG29wKT2rCEcuyegTt77",
  "key2": "sZTbRnUZRrBE77SrXpdxuhpRAfc1BKaf5nUpfLRFUXLYusekwg8rfNY1UPqxjtpnXA75m5NmMTRUN5WdtGpmw9B",
  "key3": "Tbv72ZqKQcUmxmijWqshZjp27RDSHUrYBciQg7uL29U7c35dbsuYfhYmRSoHa2HFqWEGMJwSqkHHn3aDEuRNWGS",
  "key4": "5e3XHA7UQddKPXFDj2gRWZNbpi37MjVEXSENTjQRrQxeZPBorCfpadtar6zUdkfhMrRgnDWKMQbdr4cXskj3EHxw",
  "key5": "35Ru1chE5KDrdAgSNTCH9dLmUFne9StecBmuxeqXTYbnaAv4HTnrQpTn2z8WstyuLvKvCbk3o61Hq4CEfUTiEZRJ",
  "key6": "3Kj1HZYgFmdtfy5qiyHko36QDyxkJjPvhhBavzkDt9W8FLpE8gaU1JihKDjK23jAnnAxWPCGTqzZYK1MpZ4LUj1v",
  "key7": "45e8SQXJarNNE9v5m2EKo4Cp6YUJGJYpHcoWeaibNsP77ed9NRRpSYvC845Nys5x33e6io7CbLQF2gfkVYduux2P",
  "key8": "4h3DcuMUVFu5zmCX7gEsGLM9rsgBKEejSyv9fe2ki1JnimGu4gV1CZYmTpU1p7SSxS5Mot5NFdEeQfYzsutC6fBo",
  "key9": "cJLCfQYtBmUMedWRRxzzkHGnQgcH8tCDGYRCAZxxxMz5L93UrywsoFygZMFeAF9E5oHsM8f3ExWqw3cL1Z7pNko",
  "key10": "5B5nJRT3qoP8YfAAq7bhtvrnWzYSja9AysbhkpGT2emJhyHFeHffx6b2sMc94He1mWnXUCfYcncr75hUUyaS9Ur8",
  "key11": "4ddWXJvzZRnaugCjDG3hLDaJRGeo1qcA3ewJRnViFs86JbikMSocXuaE7kCtNh3UyK5tYM8rBS4eF4Ztxj99BdNE",
  "key12": "4eW5iDwXaALWqbarziM8EM2FGCG2u1B9XLZXfuKyT2SrjRDaud6p1YvH7gxhqygJio5NyWAq6za7v6fUqQzMb1bK",
  "key13": "5vqyJnwGfm24BoshZaeZVcK9s46KebkvxexnxWS9Q66wP2U83GPgTr9hLnrmBt9Eb3cAKnmy6PaYsUL7pFVNZB2P",
  "key14": "Q6XSngwr6pfC6G2vnPjBnpsdqEuUUYpzARAHfrCjezWkdxDkpx6TMAJ6aHkzuNuuHP1Phjvb9KcsdbtseAXKtA2",
  "key15": "oeji8Gkexo1CxuEjxvmRySri79kKGPLhTpqkc97hFqXtrgJ223XJWxkjoFWVzyBcQqLSgZxBnYcQ4tsie87h2Z5",
  "key16": "R9Ho5sa1cTe2bYdKnzYk3Yr3gPq4ghwGT8c8DwCJDHbiSzQ6G8iW2HR3i65FjWZ6j2f5ARBNxm3D8gQnip4cVSz",
  "key17": "4tpbuVCtTVKGRrCdDPxX4BSDRUJZvMFUoiFuFibUQw4q4kUgiWqfaqNp9E2RsAZgFkwZanuXigXeNBBxW1744yf3",
  "key18": "FdYqF7vg9s3FmAhPWh8BMDUc7KwY1mSz95QdGMGLQHirakF5FPUxowKCPGspD8g7BiDrpCJax2JKLqSYjDmjWH4",
  "key19": "4YcgpqZbBC3GPNzVayoeMdiPM7L9kymo2oGLZTTw4WmovsFBrhanw9D8pBMC1NHvYoe3ZkLJtq4gFheQQBKC4By",
  "key20": "3pERfwrojct5HoNMzBxzcJ83VHRFtZjL13SQKvfqgeLtemTkBLA6BSK5oXiWSggCzJVN1hbBvpcgj2CPbAhQEZ2B",
  "key21": "5KYaL6DT7E2aFq3cw5sUUmhxAhKeV38NR9X6MMbQLaBZTi2c7gJtXB4DYTg9DKnerP76az4fmxd7KXUftsMgijDn",
  "key22": "VEQQTQdxEpZ7cStF5TtxCnu6EZ5q6GSHm4Dgr6EGTXxb1hNbF8UhEhvMjU1wCHw46qSSViyocm3UWLwDFmY5B9x",
  "key23": "2P8xETeEcNmBaK6BzLgtf4Kktb8Lo3pv8JL3WexMg7pNRAmgbsHeaBDYjRxV7jMxnRtECeMVa6pVGkuD17ewTBnc",
  "key24": "5pjFUT72y76sqkKuukNC56cmh1osFV81inUxaVfUCwPfNDoy1KdZ6YkpYKJrKxqZ3b8ToPy7mcdRQW4uYUywR2ha",
  "key25": "3hrP6he7VYjAXVroYvxjJ141hkcK9yjukKeNPRjc1qCTLcmcTkKgrcvg7oFdMbhaFB7QSdRvMVdHp9aYscoxbB22",
  "key26": "4Yjp9NpY5gvMm8QxY1ScWqnLNvr5PgZ6Af5U936TW1iDeohtbxvZmrS56xb6pEfqstaTV9JN3C9wHe1XtzN36WWN",
  "key27": "2rdqAiZoMZRdDLw2zr8EG4vhgPZiZwMgxnUesPMRqShiTdPEURoWG1mB9yQupKPr6n16iR7jivJGxwZLUDbqpw5D",
  "key28": "DBANkyydeBNoU4A8dMAC6KngKoumrPqiGusnd1JV6jHozDQ9Z9j7jRtUsYbFmr1XDNyuwHgxudpRydyT1xL4kau",
  "key29": "3iB5SJ6ggXAUznNzhQa2Xdt8zhyyK2ocwGLNU43GHP7oU4vwERdWoTXzBrSSSjG1bmXBBhToUQunFWni1F42nEcr",
  "key30": "M1VayjdzvX8X3deFt8oyRXDtkb46VFXAm5wjXk4dpRg1z3HEEMQj59kC1nMW1oFuYHeYiThjipcEP58pZqBDQwe",
  "key31": "487XuyBHoYoLFb8b5J8PmHRKav2Fdqc18Ubf242MHZnYaA9EgA9WRXZEJR8k7ssp8qyZkZENNMscxmxKc61kot6v",
  "key32": "4dswZpyhR152Bac1kcQxZNdhA3trJaFaCmHaqkxzcoLkGKNLr6z7swiuofX3SL2FGZQbZeYmZZZ1j1vgUpd2BCdU",
  "key33": "4yFdywdFvftTYk27WKazNgjLgeFdummX7pLeHBfah9SV2BvjchasrvzxwqWz6GcHiTQTnUjhqaWB6T6DoLNtbu2o",
  "key34": "5Cd4hsRoBHCZahaoEgK4RcngDNw5w37izNYTkeRwDaJcSBf6VzNig1xEQzV5vVr2iqSKepQetz1gFjrh3vKupZ7M",
  "key35": "4jvfToh16PdkJXzwZj6sDbt3c9sXsvWbyodcGAbP6TZ61i4xCNz3AQ6Hxfizanr3N9S82ccMS8MFyRq1G7exLtMv"
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
