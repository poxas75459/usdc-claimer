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
    "5gjNRPsVsiJ8v32e92L2NxBBZMTnJcRYaVCbosEunaKzwi9m8kSm5BXPDZ8fLJeVjyU84BRcMQPFoXQjWAJ5qZMH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55kvCSGePAXbrqjtTjYAG6Y1sFYXW2k4EB4Qbt8P9ewsKWbfCX9SBqhjC36pE83Mr69UUYCZ82xNGDu8YUH4LgpB",
  "key1": "BYoT6uXoWQ6SB5XXAXxLzoAmmkPQsMNmZFwNJCp3MnLJvefJYYEw3ETHXjBzrJz9ZLkXjf3G5Qqe5af9ShNHH2t",
  "key2": "4tTPtaqX31RKXfGpkXDpvheFYSuoQAdeN7aUev8iqMzm53KuKZCzrrMvgkym7czwZmJ4UVosBacsZAbdY3CSgKkC",
  "key3": "5i5YBLgafidTPpmG9LHkTju8SpkJscUKr2QWprakCHbRHeHJuh55GcyP1121Pu5fKF9kdrCk8yerbiiAyvrCd8cp",
  "key4": "2y3rHGWK9VSPYKU9pyfdKGBVQNgdR7TFHSoM2RZ72C2uh7WZh31LqwhFHivLMEmNmAruTxu2KYuKW4217PYZyqcT",
  "key5": "GuUE9WDTxqDSB463Ch4BiR9aEHmfxYZR6HazpVKgDARLDoYXypV2tjCBb3Hy9KEyj8MochPGS87gWznkg3qTJNK",
  "key6": "3RUtHTmvPnKyPAeEmnHwaLVwTSXfSpbGGrH8yoZAA8zija3jYMUh8BvGxysUdiQEBV8EUFhH7rf6xrg1nGbbPNvf",
  "key7": "48W1JpJT9GCnxBA9kS9qV69offUVy5xs86Fk7WCNEA2Dn7YQgATpQownBEQo2NVSaVvmNs7UNAyHHoXDVTR5GNaW",
  "key8": "6aVbCZbsWVGhVY8WY7VKr5rg8yk4yv4Gc9PTaTqcToToW7iH8MAUvr2PfffBKBufevDrXoypwG6KYTpGWodMHUw",
  "key9": "35FrzLtLjHyu1ezPPN1xhobXKP5zFiMiKbHQDLEynqThLSQRVWduHxmMpCXCtvGCMjNGPxPA1d3F8feWb98JdZZ4",
  "key10": "5vG3BzHUrPwbDVkv1KH1abbJam14uSTcz5edM92vUSTrTDkHMUkAt2SBWWSud1yqy7jepWNz6L8U3LLrtQhio8xU",
  "key11": "4aT9au3YcANxXJc5G2uPhrcQrzXT8f4izNjXmMBDm7QkP7YfpfWjjRYRUAaqtHVbCrt4CC8EQCXUzean6LMKqvNc",
  "key12": "4E2c8ahzGpra2xkbpf7N7nBigzNzsc2Z266dg8idJZ88ooMpjKQ8HUvCEjSEiVyzgSMaeqCjdcfAboXUekxUbUky",
  "key13": "5vW7kNq6Pj2qcDSmWKb8cVA4PPKP9oZDJi3PGFkRKEN31N2z7ZFYLrywcuBvwPMuQC8UPVa8J6xpm11VizqtzNv5",
  "key14": "5xa44p8hMjoFmkxK7wtL9fxf2RMCR6RkmyegbyWbmve1DZh359UtYWHaus1oGPNAmJP35UhrRKHogNiMDKrXB3y3",
  "key15": "44Hddk8vFTTra1vYnR2C1tfB7txEnkjCY7nSuJrxBVDN1ZUoamDgpY2KBHuoGSKFjEmvU747SQobz76PeR5NQRUo",
  "key16": "3KztLcv3bn44UzyP9cDLQvhZ6GboGgiwRYTERGNLEZ6G93hkaMVhw4YMWsqiRvXQZy7qcWJNb4izY1w3NaiCQti",
  "key17": "3EZD63xn8hg69jD9jjnPPHzkQearphoZiugMWsocwd4uRjQ3pVYPdrbjAd18JVRv7Fd82hAW3QuDfXrnU1gEMkcY",
  "key18": "26EESQjZsBELxdEcLWFeXiouRNAY1ur3FRKxB5PRyES6tUr5ABmF7omqKiPrrtsEbwTDKKC1aNx6F8rLbR5u4WVA",
  "key19": "4VBkc37a84PmmP368WzhFwoYBKEm69vn3HqMonAEHaFdmeLmbbF9u2p6S6SJaQDGeaqU6GYRAh6ZkVS3S96oiYPV",
  "key20": "2dX1jvjLbaALbARDDDS8Z8uFd6xbHf14jjmh5hZxJ7YMGdbmtqo9carbHuxF2FaQnZXjDwJdhntMoJYXCMbkH3NH",
  "key21": "5RKs3WAngvC1XNmjbDqeGSkneHvD7H4ARrHJLZ6ijK8skKorqDkHamVcMjd3WifftsLbLiYYACHnerjPYcvio9ur",
  "key22": "34qSRgtHmZPP16PcN28xBc8qsqgSGWjNa4YK1fCiVrVefTyEPkhidozdx6CXJKuWsNKGybAZaxL3Em7Y4Vc1nSHG",
  "key23": "4G9u15M1Y65v38r5R2Vz4PkNXd7WEh5AiNqBcbDXEAp3pURX9mUxw54zfwSCTyjym6CetoWGkAKDd5f5gi1YaJau",
  "key24": "Unkx8vKMfsA5CahSBgRaBTQmaWQDwz4q6iYyMtXDdCMcuwz2tQXWjpwJGFVKSfAyoTTWs1BcR8duoxx7ix9JR1e",
  "key25": "5KDNSQnieWXQb8MHfjgxqtX3wcGWWp4xPgJrEwgKrTy5JC3eymn46eUed9VgTWxvDVsF2bw2pz4RxfSJdTTvQ3TT",
  "key26": "2gsS9Uf4YcSUhCcmwsY3vDQ4kYQXURDg3NKi9WbGwg1BMpPsmQVFcv9KP9xiZd2x3Z76nwJ9VscSgChAY6nzUZ8n",
  "key27": "2FkasJZN9HazZ1uEiMMQuSvB7djELdwPsnHDeMZbYF1Wy2VXnFeiycpgT83s8c424r7EhMfWYuaw8VBbZeqCCpg3",
  "key28": "3PRDzZc9DGYgeb9qJ7zHGPspftnHUM3Z36PU7EiJ7BGsvvPkPWazKLT8Ersg3Cd7Yb8gzKcwqzaDDFDNnw3ti71q",
  "key29": "26JGhghkZt2ndZMkKdQUQK56yD7bYwFMbgEbaqgSwccZ5Jz1qssBEEsY3aQZjJcp6MU5gR8gzhiDjjE2FNnutd23",
  "key30": "4sfwjoUMTG8UVXXbZufs5bag9Fe9bFtHCtad9ApCsJCpPchxSzHFK5RTNQrTqgBPL3zKrH3pfzh3TbNimek23iPp"
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
