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
    "5c3FvpYnbVAe4qstrnzBfSEqjDgfvrwbd8ofzT5s2HmCsaRQAavn4KAJWUZxkp4w8MQcPQizr66jxt1yXVPaq1En"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VXtYNofHdCpsq1BYWhHRpR5XG1fXigpKRjfD4RMnpHtyGxprw1rECz8daJJQDyiFTwXA7qSrPcUWr8NrY9sqWDk",
  "key1": "4zKFqYUqTJ9pm12CKs4kZSjdko8hLNBSuocqyrYpRSKqhBn6U4TyXhy5iHSqrihJZpMeEiEjqYp5Z8pidxvPjVej",
  "key2": "meLx89ngUjmsGyf5WkZQXpjGvSerFGs4XiPTEwHXbsBGN2SLXPCXSBxwsR75MnehzMfoqbY4Uhn1J8t9ZvMDLgu",
  "key3": "5maKdxPTMchkxH5teWxUuTiRy3EFUukEG8Mvq5saxqzBcYzBDbdUfXEfvE5LPmjnvksu5LtW4qUL1UyK1w4C6zTJ",
  "key4": "5TNP9ZZgwUyyHcPBR2GZiuyZ2n2ewSx3iZHhpyMr1NtmV9SNrSB1zN3P1s35Q8m1Qf6k2NTyKCxAF1ppQt2qXBTe",
  "key5": "nADDsroDk7vQo31Zv2RdbuD8g1n2HThw3RoGkguKSxuWFbZquyXDiXYKFUBzykqXcnqE5DvzHyoscHt4SMxyFav",
  "key6": "4LnVJ3c69MjjCSqQVt2LSnk43gP9vpcuewjKaTAwvVd6yFTQgY4qgS3wTeiWw1h34r9FXT7Dpk2qrWFmNq7jQpLn",
  "key7": "2q9QkMw4Yz4LD1wAcu3Tm6uNrqsnjNvdekDNMgmkpCUfrpEGJao2XtMFpgs3YTuJs2879PHJJVE3s89PpYjEo4qt",
  "key8": "3JMTYbEagr2awmbCt6acYCrQLmQrLBytfKVLgyNenUGzTkzHFf4pnfCNvQmJVD5DAoaLcy4HC5Hj9yjACQBMuAxF",
  "key9": "dZWCZoSMBY1ZbXN6oRT5m8bxgmq1ZaQAvutcwcNGmrcCrEm9P8AEHMyX22UmoDhtJqYtiCawd2QLYJUbFrqHaNV",
  "key10": "2HcLf4seFZVcFKgV6PChdZAnbpNskyNVyerxPNAAfmbyPDgC5usooLLwQ5ZTUCNEdDT9CN8LpZpyXm4aHryRLBh2",
  "key11": "z971ZGbukXmj8eusofb924nP7xg8boCmdtyZ2MrmBdoMjsBiVYXVK2GxW3HYpvxXvxmhJhe74KDzsG5ZbDpHdKg",
  "key12": "2AifKWSeqQ2cMM3x6vmstbwhdKiaovfCzzLLHYdita9GwyfmBRXv7ZiW4xnNfPb4UQDopAVMtvqYtCXVNCjN5oGq",
  "key13": "5aenvhGsacHBnCbUqbd91VqkVgvYqVvicBQnhvpJYdUnXPdo6bUAgkCJmBZsLqviDJ6vpdXAYWgJk7THazFJzDoB",
  "key14": "8Azda8xM3TLuASgbocpnE1xRVJ8isFnPGfYo5HEkbHxxYcG6Q4AUnJnDizmKoD7AZxteDyz3iv4pvdqQbmMU3vZ",
  "key15": "4YUCJJS1mPf14QEHtpW63s7ue5zzRax2jkNMXGim6KH71HYCn7H2qUnWd5yx3pNefdiDtS8qSLRMi5h2amKd5ngM",
  "key16": "ZVdbhTKgZx2oFKp19mssss92hW23dg9KZ5YvRxp9KDgX15MNPkTGAhhfmoY2BNvz9uN2MwAXJDo1UjNByRwTooJ",
  "key17": "5W1AS9FTJpxJpF8pyNQpkRN1JXFMLRJrc61ndfmPXYiLR1A7yj3pyTZaCBLE6WSDLf5KaGobAFQjWrusEVZEBxri",
  "key18": "2yub2vhjVwRuTRpu48rAnu6G7V64ifXm9QkDi1LiYnKJH2cekjjDTsh7GSTMRnyu1UaJ7zjHtWB66Q19BDz95HKi",
  "key19": "5TygPNXbYPmTDGft5aussqozYKRt7T3QMzc6nLvx2i2ub3NngMoVTkWZSqDzBqor4mdsmsSASgvE6bAenpJB5yDA",
  "key20": "61MSSVvyoheZt7Xpnztyi3wsZ2sNEELDYt55kJoNciTG1u4g197DxcWHFjFNysPhjqwVHnWhbCrQXHScRSvVUo3m",
  "key21": "3LfRZJwmu3be5ueKZieSZanP6N4rMx1da5bqR9Axq3gACCWv4AGfVe1Qqjdo6dsvcXtorX3QBddU4obaC3teMVGG",
  "key22": "3BAX2wKd8aXhCxWGoG9niNZyJGAyX3iU3LoPPDcf8Rrxye4gq6F2z2E9Z7FWy8myAgJSD3oajTqDZV2B8wB27xGK",
  "key23": "2TRkoNd446JZJnva4KFQr1pELwNDwzom2jX28yc8NFAKVy4LPXTcVGSwhY3LPQTPAj8wS3TdpgFe85s4P9cTmjCU",
  "key24": "5iCQyxFTB5QpGJa7GzqggPBepgJPWuzuHT8NmyH5ZLhwiR54kQD6DQY7CWBbGSnZgwDTW1GjktnbuQBzdR8EmneL",
  "key25": "5beeuXYV861YqrCvQ8G3it2j63i2yy8Jpj7CLrpjdwQvdktms5S76beAsNtvfbCNvYbCBNfPEP1kKhidpKJbHFkW",
  "key26": "5ynnoxkY2Xg3RB9ZB2wKJHWzzm3rCLaCjiSZNfttxsWrLDTLSXxc4HKZzagcc6CoGFfjaFFAQnZizYhaM7SGKcUR",
  "key27": "mmuhc4ZtCdWH85ZFKHdjVXx7C2oDY7sVtHSEPg37n8oTWCjrdTnMapni17xHkGzHZbjRhLWFDmwMJ6YeNi22ZLp",
  "key28": "zGU6eULRKuZiuWchkeFQawkywHBcnrXY2wsotxTZcWFDxFirnX6tnFZaFT7ecY3kMgExg8n8hmnMH5awofFXmh6",
  "key29": "656bpMufhqYq6BXvE9LcewGbBnfjuMVT8ytThS5Q6sEh4Bag74j4PC9JRwguyrzWiHNixT6ttC6WEAEDrzxBZXDc",
  "key30": "58kiq9aWonHhxU6f4JSQ5eaUCj8Xbe7yLkn9B2juHghvdW9dMTsx4pHytVyJcXTZVhoFpTtACMDf5z52hMPHTN7d",
  "key31": "34bGAjjwjyJHXgiYdZvxPhxUzcNWBvhvE5Ly6JR3PPabyLeKEpuaFpFP5i15EavtyBqVpzT3iiGiHN3fQ7oR7BJE",
  "key32": "5m1oru7VfP8Ja2UkdpP19vwtsnVj6ymde7tgNqg2a2wqJgA29kVR9CZQHpHYLzBFvb5gX9BEaeiG4pkiPTYtXPXL",
  "key33": "3dp3U3hkMST1wjK2SkF9zmXtnbJ8dTARsWoX19f3Kw5rNu8KkKHoCi4JjVjMtQZNLFvkbHgsdDNrzZsR7uujJLSc",
  "key34": "5uQTx7nuGrFJrqmPP7Za8ha8yxCqwrisRsaArBKuyL2dxBEabniLKLiHHBEWe6SWR72kT6FAjXDqxy5bJgCk75ho",
  "key35": "2832ZMKRVpZKNcGSbVuBXpcgebSpaDVHFnzHYmTrwtcA7aKJT7ZiqwCDiQ1RJzBr4fqNEBCGtqsgCMcgSD9Nf6zZ",
  "key36": "5FPvxdQda7gQHSsDswYW3vjhmqPugPjQPBLESmz2xEGkVpFGwLGeJ5ssYRAjXwjscJZ98FU73N4XXFQJAV7PdZnW",
  "key37": "nPfxDjEEsyyzFmcTsuTXE2GJ9nkSRXgHZWQ37JkHNnt5eNaqwcXgnXmw1U6vrSTTkZhWy5YavZFEDmFrRvjZWqz",
  "key38": "5fMKRuHhCfChFK1cSE5RibaATr27GN6HLqCRLzHAp2RD5vJbzPudAit2EXjSzoQDFrq7NFvpf8J8bQoroSSUWuZT",
  "key39": "4bcYdG51H3JRTadY8qHLH2PjHLfA3KGmyQTcRDiz2893bXspERwxAq85s4ZdcscRZDgBhUYyJMMUuawB8AXNx7Gg",
  "key40": "5Lcv6kk6c4gPFKTdqCKobGoNFr4z88QT7sArVF9psXV3mDCRivzuaRW1pNkZThZtXo7JJJrMC8dca5vdtHcHBAL1",
  "key41": "46CXqsNCn3tY2MJo9yMsdmqNyMPSYNWecGknBPZ7y2LHnoS7BjyVX5cvqiEfYMwVAkDM1z8rAJdBnJioZ32pHAsJ",
  "key42": "5NCG7U93UhrDXANri9w3jRjDcaUoXGCXQTCoqRCGRaLaJUhXXnPFf8jV6VcL8G6BKhaALgm4ggFFi7LaerYupnfM",
  "key43": "3pWiaWqayt2kUvS29bQnjk5tj2y9s7UjfEzAr67jS7pWSCPDc46WQy869tmXAi1mVGVk9QZFpk9bJeSBzto3iHo3",
  "key44": "4hHAqEBHGapCN1oqjr98CQVWsnY93MxUvaX3mJBuoymn1pEQ1kCYzuLTp8z88qhTKtWbSboW2zUBzevBaH3guGcS",
  "key45": "2nmi7BGa1ebLAebrgk5eLSZ6jscUaqVTw7HGQEccBxvD26jbJFXE6vKXQpw8CWKyZxtLWze7f4hz5JTSXFKBKrKY"
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
