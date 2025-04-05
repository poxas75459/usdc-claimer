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
    "LqFqtGQF1R1itnZcSWuKGkaqxyyPifxbWpZPFSY6gixrcZx152w62L3Ega7Ef6h1378XLWRzPRdo43fA3L11Xn6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AxdX2usrAr3oHxGFZFzX68FNTBtUdoLAbYyiTuGn6TmxgVD9H6QtzarHCPkQgH1UpNw8EvvrC5DDR2CqCCRkwAD",
  "key1": "5qrCPfnyvdATzyzsBByH9r6hC3Bp3bAG3QcVv9U2YQj8hRM8AkqMBuFFSFh8nSr9ZzH1p4rvXxNxEFqr8KyBqeZQ",
  "key2": "4fnDMYFwNCrf8KHVZAba1VXgDRaTQH4atM92h3CBJG8DPi4EbvDg9hLKrLwmdYZtegkwGmaHPvg6H4Gwh78BZKtx",
  "key3": "2MEAyVuvHEVHc7J2jyMJSKNGTpbX7begSHJQa7LcbwmVLFcs76gYLvPkScnyhCY1y67w92L7yuJWN4w6hAXYfKa9",
  "key4": "z7jDGVRoSD793gU2JTF6wTMQqP5gWLRoTnCoNxYEz6spDkcWRBudZATKNnMrnujgGUXsMtnYkKiM96iqJoF9Hr2",
  "key5": "2E1bEQX2bLGGpVngn8fR5dymgxv6qqqSnXJi95MK31KMVTzgwFpzn5wuGadMhQnGwh1Mhoa9j5GKXEX3WKZVbx5s",
  "key6": "5DtHpFwrudBQ1a3meZw2SQ7rh8L8jypai5UcxrLJHgCSLyMG4UKtSe2ZwQa7SvBY24DSk8fNM7wPpVjksmxQAaMg",
  "key7": "q4zzAtHv11HBfgQCQ9PZMPyag3eXUgWBi2mD3uL282GygdmrxRpoBhCuhdwtoFXNTyMqTjb4Mbc1S32dSwtYojs",
  "key8": "5jB5pvsTiQaCSvEK5tFH3bqD8Un2qR5LADuUw3sT4uJtWGF3P7qwCMDTWbQ42KYa1TQP9asvcdpCLecTAbQe8h8j",
  "key9": "5uSWxwMPm4WpckGhguFoEfexTqFiWFe2kCYMnb1jn5tifDqySA1GyEV6rwHdTjdrA3M8az2RYEj5gWngaSE9Ls1J",
  "key10": "3FHvDLcsy8zq8VG8Yhav8y5qRUQDUJKMus95mkTeYQa48CHLwXDbVA4rxFTf5Qp32xNToQnFHGUS3Lq5P7VrYGvt",
  "key11": "4Q4PJMS33PGcu2XDCNTGhNSiFs5b3WP1DN5pipcXnvyxxW7qMxRUXc4pp3j1BHtboDyPFhY8s37oZLv5qAoESaLn",
  "key12": "6Tkm6NbnGEipfjfVVQRBjqwEBJTDD5yPsnvRiho4Fq4gCpHdoDLC79JhvW1461y8PphjXUW75n94LtznTaWZ7Tt",
  "key13": "4PGRKj3i3oaFPzPy3F5gMaVosDfJL7AfoXTnKZkAFSWbNAo73mrKDLUGAWkWw3HsJaHEFdSfHZafPzHsuXvcA2aT",
  "key14": "3iJpYwvhStBTthRzNQHSdxRehg4xsBVN2sXgjpmCPn78Er7NtUr6agWbJDtHuP8RweTopAzom9PGSS41xfCGt81y",
  "key15": "2YGb78hGaLWBe4XTBitjCPHUcrU8PZy6NsZi7hJrWF36iNTbeLQ6R2mpsozoBuDPd9YoB1XYxcXYHNwFXdsorKmH",
  "key16": "2FGJDfnedf5yCWAbdkLRBJzdMstafwTwveGpfgTRsnVJkmqNV34xNvEGx5YhqWuZC4ndsDocbpHkZ6txxo9igq4",
  "key17": "3TWyueBVyqjjZtXaMjKuY8P5oK2MDNYwYM285FoRDPWNffZRYBhrA4sRECfTqBfg8rFCKLeQBAKKmAuW1RUBNLJ",
  "key18": "4Bi9GdKtF3pLB9idRcEkBy9tmA8jaP7P2ZDzPZfFjoNfZ2eswdbc5wDfdCwz4VSBMuFdKrneuRruZEMRnoC5VrHJ",
  "key19": "4khdnDrqXB4f8KgR8sg4cvcr7CCinU5Rvxyf1tvr4HpxmaBAWVLvpuuUrRkzYTar4thJEyUbSHcSzYKY15RV36Zs",
  "key20": "3hKguE5wYPJp5cwpy3ihws9mQBaRAEzTeKEpPQ6Sw2y1FDCeQ9WRbUdBMEh6tTaaZVUDf8g67fnaCSTU37wHP1ud",
  "key21": "3byenyDjGCuGNBxnrDB8g2Sqtctkc9tee8bxomgMueHhHCA5GLmHxg7oxxfuFjSqP5sQKcEyPBDPXJHiDQikDhdw",
  "key22": "3AR2W8HEzpyz7jhEhGShmK2yVxqXgFUSN8ZoSxfif8qvBuZsAc52q4yov7jL5wQkeWGGriFyA9PAksdw5qA78GK3",
  "key23": "5WbjUtAx2vVjvGkPQhbJxm2t9gvVmbxchXikkkinLsZFX751jXFKDWig5apjYfd4hq5f4vwhb2F9z1e5C1gyxPqs",
  "key24": "t6GVqkK4XVVws4Yd8auatHJHx7nYrHshJ3w2gAcedvEk3cCWbvr6oTcTnfD7kHZL5m45iGsjtAMVX2YTNQ9gbU9",
  "key25": "5VYCGLzHq4D5K8WjJb5jMRKRosr4ytHHyw9eGKm4DtgwQa1apa4gb6SPMeUHQQJNVQDTAvgvisr24d1tWaPukD29",
  "key26": "38TpVPiMHhQDZCnkyy7FcN4tVAqRBNWxb278dPGW2AdmTdRpMPwDnK5tQCAuxuWryFLADKoC4t5PL1NwKkGKq8Rk",
  "key27": "61cvEKh39AwZCRvFNahzp5beA8nLiDxa95UwNCj3jo5Ah2k5UgyR7xQLGq3KxMtHvd1xr98LsZXL1HqahujqPbpX",
  "key28": "4tptoAVXwVFBfdGQCHfBx7fUCn8wJoX7cGjVcdLht7ptMGafmiMLiDe36vanYn6mH6GW99LmWVSeJ6yaegMT2P4Y",
  "key29": "5eY195zVkYb7stQiwrxAfHgQ4B9T8UWT73kuXC61wJXDqhNrCe5r6BudwXmaxefTxYKxNwXet98t2ec3kG2Ra38V",
  "key30": "WzDfTMicJgAZP2NZiexynYxqaZY8c6B25pWUpg8SztsW677MKQ8VtdtVMo64U93gXjsNSHvyDMs5cGx9Hr7iXF8",
  "key31": "3AQysdiGxHDTvBP9UGamBJ5rbW4QH6Vg2QSVh9baVGKiWBgZxyiACCnv55FPvTggZEypRVWCWfnzLj2q5Sc1Ukx9"
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
