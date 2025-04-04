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
    "sahsFwd3HrTkQK7kUyRPf8kxrV4jbFHBimYErFhuZvNcXLn1VTBxiRoTtAEZFqkuQLCYPKn9b3YpCB3j87ty1bk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xAGa5TX9bt9b9qD2xKqnKmgr4qt7YLrUSDufBF3YDpDPjyu5y8jJjosL8qUkjm7D8Bktn1LiRpbaoS1nJP4AWPV",
  "key1": "2i1e83E9h6sLCQoagj8bMDTBeMLa7SJN9qRpN76wVV59nxrW5o6aRwWujRJ9WokHGC78zdG4s45wU9e7sXMacRMa",
  "key2": "SEtSBtAanftzK2t5oTW31tkUzh5eM9JWNKSFmnSxZSd57L11WnHBACwxqJFpBTvAis8EZsJP1xdhnaLdBAozGGx",
  "key3": "4RKM2Xfx7hnp58ARJQWakxrDAhPnqdACLbfBS1zvCWfCeujdcZLZuoB62AiNYoRGnfKoD4Cfm1chDsVAdofy2iqE",
  "key4": "2sGU4KaVvKD2FRErwjpZNnMacqkSMSF2sevbKkjTvWj1FEUSoQvwboCjBjsQgwzT92fkYQd5NA1d5A5d8fWcFKJ7",
  "key5": "2R6VzAgVaUA2PQxDGwhu9t44nLHiTUjTHGzGWZxqfeifDgzh6wPb5bAswnvCRGgAmNZn5Zx3LCfx8RJ6iV4tfqTa",
  "key6": "xuef4WZc77bi5mZ3NWUDGty1EZ2g989375WzbqKXqXaNGoZkHExNyrARcAhvMbQ6StJTRATtiDmUohsDdM2PiTc",
  "key7": "2WTgp5pgGcdfSc8CQSVFyFFEVGqL83BNMeLjU7aE16pDTZ259Q4hqePqpVLkxRViGujVgf3dazfM6WNUvNPgwWxe",
  "key8": "39JqNa3AzHw5mGYcp8M2icypYHN9q3PhRgbomnYXMb9q8UXzQw375LkZNTe9A2B7EQkGmKuhfpTXqY3CsCBZqQJG",
  "key9": "5rhESpVY8Vr9XH9C67vfKp4BVVaSzeTkRP7QcuoFA68arj6gFF3185uFeAfAoz3YvGrX2NZKYMorXh6MS388JqpY",
  "key10": "2RkybDQ1AWDbAGQ1vE2Z9AhxUV1Vjwic51ciU7Ji8PLM56H5SNs3DNzZ2pTYXSMg2orf2Lg1gjBEHtARLGBjFqwo",
  "key11": "46ZMzY3n4wprDG76Q92cnqYzHXCemvpzw2UQpvju1fUdmzcHZA9mYAHCd4z2So6uxQtvgRepvHbzw5oEdcBER2Mk",
  "key12": "S5tJ5WxRCbE11kcPj74b9Gtm78RoUAtwGmkhpBZ5W548yVZkHsprKEw81ZN1aMSkSjT4fFSUpLiG3sniowrxiTD",
  "key13": "441paioa6xxX7hcYV3bK94drkt9CER9LfxweKnKRjAXaoCdQ1j6tkQ29UGe9RbrdBqQQWmzLQmvMdMSMnxRMb5yJ",
  "key14": "3ekbt51jwGnSXAoM34NXwwjgmEi9aYu1WNzF8Avx2ocLRjgivVy1MQ7dtjKMTdoJnnK2tLGxpomQb3sw4on86Jf5",
  "key15": "2PLJwLsxFwTr43Qx4y42ZxggHpkrdYcq5VNcNq6YAWuPydsyFtwaGoKoNPe94YunZULSautpLsk6RnTwGoAFSy7h",
  "key16": "4CAXLxwM4SYvMDCVbXPdpECdt847AsHMekKxUkyZqi9p6LGTgZV7UaVUHyYyLJPN5tW8VNFfbyymX9xuj7nJBogj",
  "key17": "qLykhUXXRV6CBgRciDCWMmEoC1KCdBzQcVTVZmbw5F896NgkUMhzC9StzqkYGoxsaWTZsWp36tfYkEUUr2AK8Gh",
  "key18": "3nWNhBZVV1FKArM7mLdA4nn1RnaRBeBLRQadsXqP1jJh1vJh5sDYgKDvZubaQsVTWRZWSk2no7VMMABmZqCs2mQj",
  "key19": "5qzHz1FD8W2R4kb7j1JwjKxHykP8m5G9hVpGd4otG3YWidVwue3gcPA8iFzVuzRw85AiJYbUKAcWPCr3LZdanqu9",
  "key20": "kDhQbvKu6gLiUM9QNQcGBLxHB2JkVCVfzaCqtt4T8zASogZaE8pCLRQjh5iBx5LHLyXuP8vFXGChg52vL5zikNu",
  "key21": "25FS9AmNhuVgqn5po2iYt1HsaGjgXPbaBsZY7MEGnbCbHGmojH4RsRpxCVvFP8wH7cTwJiRoPnd5SqLKV5R3F2d6",
  "key22": "31wNuM2MXqEmrmfLueZihTnYt6vNh5VkCnq4UQZtL3ckLnJg2BEwViRcLnWqxaDmviUvGn2bdzoHykr9bQvhV4Wn",
  "key23": "2ejekBKn46JAfGXhjEKgpyaVCdtxGzcjup5Z2ShShUDHs2oDc5Xx2xKGmogZUYu8hEzNP5v1HRucGRwbEjB38CZ5",
  "key24": "8LPtvDdQ1NuzFH2h5FF1SYFZb5Max5x8PmrTPNzNZuPRNKeqEA6k2UnanxcQX92MgRJesrDBe2TwrikjzhYZcbM",
  "key25": "5vdrSzMduP1uHvfMtuZfPW6xD3PkZ86hBqRisaUcvJ1erfc9XWB5nVsJyAPc9z7bGY4yMz4HTgmJhSSaamM6Vo8X",
  "key26": "3qhCUZwjdXGSQj41zt22Jh2LxZsZ66sAYELmi9tKV92DUZHVYaarVa3bbHFa6ZiCJmsm1yJDMv4Y2VjBg9QeLnTx",
  "key27": "4KFGxB6MitvqWbhmjLo9m2NUzLLHXQJwhLGtgoC15cNUoitVbXhQunMs8mbVpcV2UbUN7zgKh9qKHp7QXKUroVzt",
  "key28": "3QSwuDUz2qcsUfBzcfENDSgv46978g59g9zNctJEeRDBhHvzRnsp1vrbKEbcGyQ8K6w8bp3GFr45Tjz488yvT9jU",
  "key29": "4SfL4e86Baqhe14yZ1AVq373djoHdoxvQVWtQBDmLWEnZqaPshwRXxSBk42Hri66LaZMR7nZpFf5tk8mPdZvPnGs",
  "key30": "31vc6jyQjEbsT9NYGvVnzAgUgrMGhj5qmNBHtFu3fCsN4hJ2afHS47KoeS9ZWgtmUx5AwHFqNaHeh9CeNaeihzTQ",
  "key31": "121q7Uc6KZZ3HHj59a9kpCD3hYqFUwHL4QAjstE8d5jTvSFDXfMyUSxK1CGboCeV78guTzzywiFi5DPg1HD2iRaL",
  "key32": "4toiKh3P9mZk1WDcepJRnkx88jk6pShRbvvt2H9Xgg81pxExntQ4ZVCPLerbEP1oquqXRAEAVUCoFZHekXUdduvm"
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
