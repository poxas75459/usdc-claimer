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
    "9sgb3ZDgEqdFMsRqMJdMLpvcsqe8yQ1nyrHMQU9JiGf5tQ9GATEk6aCKyrdSqkDX3mva951RfKmHBqB2JjLHsyN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EpqNz6QnLCZWSRUnXGXTizBy728HY871RU2juZdvMWsiUz5bmhqMH2n6UvhLK6mZJrMsES3Cfag1WDuucMVECCB",
  "key1": "3yeXixAtw8CFmuFU6ZdPBLhcBuTxezj94EQCNGarBRhQmQRUEV9i9xQXWYJB4snGvUp8TNouTgnVy1nv75NuYXEA",
  "key2": "3EkzaBj33D2NmWV2mvUW7LxwJynV1xvjiJYFWTAdrQSordG4ZpdYxkLu4wMnE3fb3NLXHXDCe7MgRX8vsHPMDfcV",
  "key3": "2qNcvta1q3G2pLwLWfFGAYQ81hkhJoJGrMnrjfPzMMujrgEVSFZmN82H6WRSbpjsvktJVXwpPmvFFwedLUUJMCd5",
  "key4": "2FREjBrEirx8X6BJHZi5XY3BDa4UJ9NCZVXix4tDMm8uZNqNZjN7KE3jYSf8QizbUctv9tDh64LxY6zQHXUAT3iW",
  "key5": "3i2yy1K4ypQd7BRXpgt44rLncVrwD9u48Cg555FTuAD2UwoBRCxLVheFam33T5oQRBds19A6ZjtPgjokTu1Uk8SK",
  "key6": "4SwgNLtyZKkbszGH49pReeKgbRADRzTGaMmWyufefGksLvffreNZhBXf2BMrYGNdSJ6tpENb7Fh96Lio8YvGUsdb",
  "key7": "4EvUQF7VzY2MyjpuFbELbGYDwgBQJg4oqoVkbABme85ZNsXpPTBeNHgvEHKbUpNLmFsoESUs6fo5wDRNf2iwn5Lb",
  "key8": "58LxSsDrMigfCsawE4W6UrwkTWCD4ACfXC4b1ckDXmKrtqGtXcbKdUCGkcZBP2eUJ127doKXCQNxU84YEjjphkRN",
  "key9": "3tap3itoUj31pZmrXQXWdZitMEA5viGkuYcXHtCeDxhbuF1BoWvCurMFKumzXstrftQXKNswEZupYUAvqJWueYpq",
  "key10": "47xYop2QDRNXMziMxvZGaQns8kYeKeGvF7jcVVyjaRoruj6o8PRrVMHeD9Bnz6Md5GMQJp5B5vSwVqbpnutYMcTz",
  "key11": "2KU8EL9u6tzwRgi4xxMJy1ZjbarWygUp4QKF3HfumymcF7V7uKnnbnEMCEDF2SE2dX3WfR4rc3J6H7ZyiXBvAEF2",
  "key12": "4hLRq79pkNn12CEsT1SZ52i7jLJ7iFaTPtBTsnP8HmSzS6d6GAJSeqqRq6rVcZBAJXxxPUAzcFrTYkAmNPLR3P1v",
  "key13": "2zDs57sfrTBux4AyHd9hTRSw7a5zUyQnmPADUzbQQfPiAfFope55AUxdQpuZVnP9MiYFGDk4KrLPiH866ThdE9Bf",
  "key14": "5wCGuLcYkL4qzARh6BWe9HbmHGFysesv82tji7Vp77aEKQCsP9re2Gt4kTGBK5tVNqn9ypkx7mTd25Fn2ZPe4exa",
  "key15": "427ZQyUXA4mLtTYhMY9d43w4FAq21vmiankWZTmjRL6rKrxk56Q4DWJqHBsHFXEPxK42pJ67eZdPZLmj87rWa8WE",
  "key16": "5p7fAcLZLsGu7LLW4L5iVXYDDqobvANeo5m9w5SwjC1Fg96FRAGAvnqvutkSEzRrQ4GZG7abnaCzpCbrcmDKoRTM",
  "key17": "5EH29AU9BC9Yvt8RV4jstWmCDbSvKEgASYbStN55aSveSxdEGvyRhgGDavvqCRPHnrkFbocw3eZ6yBacvqupuVh5",
  "key18": "5T4Aq33eCu4xp9jbNNSbzPZC2qKuEykD2SxsHaJC3ByaUThPz9P1D2dH1ShCtN6u1Xikd37azGmu4RSnFb9MBn5D",
  "key19": "1eq6gbmCoUVXsmAcsNsoU96CVQXRcF4qmM4tzgWWTNDwj9Vh3xQmR2nhbUeTEpsbZ8LTwCvu9txGVy2nKgAcbgV",
  "key20": "43SWzr5r4GFPtbCA3Vff4tb6vwwmRUkPZVbqXBn5Szu5KSUQE3JtfJkYbNsNS1AqcEVfLUfcoNGErTDdWfNWQtep",
  "key21": "4A7moT75QetGYqoNtw7wob8tiX49qymxTPDuKoH5V9fNRLN1hhFUdWEGV5Ph4Wo9vN1Dx3hQqJ4ANVn2KGBSJ7ad",
  "key22": "5oGtFctLdgD9xcpDQ1A3xKuNFgbLUbu56TnVLbF6Lgo16ocSYZPNuAGHHVq4S2XB39waFVbbtR6MVa71NuYSBxPX",
  "key23": "4SFCHbLs7aWuE5k7z4CcxTXSNwBfuLfcDKMp4btd1hL95565GPgWtgTmY85LNebr3PNhP8qTkHUgmV8YYMKSdiTv",
  "key24": "4wmuRU7hCzmq9rZ1XyT4iQsfLuLS7d89sEsLYtSqcb1TwGuwzFXZBejKtq1kJZbmTnEFS3YSPuZCtUwo8bwDGi1i",
  "key25": "2NVFbFNBTir45tNTb65h4fk45ZrQRbgTaw2WvaSMgwrAJAUPa5Qd5F5VVaqwsnQpiTgJ6XW4qRhPVYBen69jprcJ",
  "key26": "qGpiidTnf3Q9jHjMzjUdAKs4WgJbzh7rC2mAZtthT9ZL9kmDnJRB6tjr53biP3Cdkug6zWbTMDRc8BtUTpQZYyP",
  "key27": "4WW9MjZPP62hg6mFnEnKQ7fKkU71uFSTjafWx5UpdYXzm9z4qQ8WxK2ktcyow8MkNSmjh8fGhUSVkymvLhiQn9gd",
  "key28": "4Cp84e1UkxNSCXxCTWCm1Npssy2k3BDXY2AvCBKyCNgDFpprQ6LWRKM6SmC2H3uzcvuFj4GbGiaMbBxTo6Fw8GVo",
  "key29": "3KcZ3knRcHHBu5Dpb6Qz87CgiKnrcHYGMqiHoZcbpgZsFTv54B6EHeNpzzqX6NtQJRCqg1gWLCJbGyoagFqqHBBM",
  "key30": "4SH75KwX3DRtKSmtihFaAUXznA9TLDDrmYncefnr5CBxKSzGU4vnT3PPNXaJAc1HQzbu798W6hPnw333rhn7HsqQ",
  "key31": "3AXYyRsKfLHBKdZt9WjopToVTPDDLtfHgw9h8TQa4jvcmXVpFX3Pry4UrddYVcqXCyFXsYozWUDeAhHpGFhdrRns",
  "key32": "2tmJ9Y1dvYAYtibqtFhZ9XwFQ3MB5MFiv7Rrv9GExqZDgckzyJgeXiq55q9q2mzJ4Yayjqb5FNMQbxnVqoJDVbFM",
  "key33": "3H7TtX3E8Tb1ZyEjBLpr5Z7ASRFvNkx3qFo5ocAJYRfwkJwT5btSSyA3KJ3Fw9QKW7y132GtqwLo2ZY3gQfy7dek"
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
