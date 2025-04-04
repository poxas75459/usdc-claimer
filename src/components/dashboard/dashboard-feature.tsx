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
    "3djfEnmQCmtcfDNWC8EfdxLEwymTC3fnH1nbxi3yYsC2Pd57MV3JjAt68D5UAMBMBbfZz1X1D3qMgWfYLV5pAHYb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hk87YrWf3zzQXoJWqGzCiMZzcbeWr2dak3rq82eznq2pXjq5YjQDp7Po4XtrzNjzi6Lh1RrjELSenXKz6NGenge",
  "key1": "CP4tJnPg9V5ChojxUtrjGGtiAamRXyF2YVFzstkTaYJ9GfVzpRG6b6LLrwQnuxNJKi5hwqWA8cCbgCWufzuFUef",
  "key2": "4KyiRSNo5aiYVhowAHw79XDm1tgGdPjs8mufQvrjm1Q7a2ugL6sn4HV5F4H3qG8AAPmvRZxHJeH1zUj5SsvPfdgC",
  "key3": "5GSyAAn1F1CjNfbEZURv92QAhe74uUmNy5EkmnotP2kcV1TL8fxpoTiVvd5a8djKEaH6FgPhHjJuLL7pB7NEDowA",
  "key4": "2X3NPDL5CGumaBrU71eRq4VD9U5m8yfhVEFKhjfsRgCtEx25jA9UhURNPWXSvHdP5nef3PR6uS3ovwTPqH9E6zTq",
  "key5": "5D6Tv9vnAoUWzJ2q7LidpcujTaYFHmSw5mEgcGGMVWZ33gm8WQATMS83qRnFTQJ1LhFZTBxGJSaSsWMT9uoMvgRT",
  "key6": "5PxdeGAa2jtkHVE73hvChRUMxc51MZ8CrFD3N2oMgg2AbZke9dAS4LtSq4BSKi45VQgMu3hZbyNvQ6T6VBVTu2Q5",
  "key7": "2JBuqtEdQNjCeoTZ57scSgLanzvJBqbFdbyBmkV2mBcZwoe9iZVScytsS5MDLp23TxXAicvHUEJZXAhLqSFi27ua",
  "key8": "2ip6xKCXZEZggPBeijjXGoxtj9Tait3a55AK47VPMBBNup9k1hXTrHgyXq8RLxPG8P38o6wayBu2aAA3wtTnva1s",
  "key9": "12JnCSXx616pqG7C6bSM7p8k4TumUqCjsN61QusVqdjQZ9PsVWgMAJfMVQiQWmY4ttx9o9b4jWbhLavCFk2otpj",
  "key10": "3EX4PwRcqtFqdadxxkmbTvkqaNx8f8NPaUQnedSKEfUCVKwdFrCQ5yxxP34r6E7phZFUaAhsbnJKuNkMFKNgDusX",
  "key11": "3XuvLyZXfNkoJmrfheJdcEKcSyZj6SAiKvDcjtYuH5LnRqguajr1hr1yzkHaT973ng7BX1sTPCTJjycTxCj6JiEU",
  "key12": "38EibGEBjQbGg4EskRRG7DEAJUnUz18UMp8KFXRPUkvFdkWUxELobZRVjh5aUptzTnG3u1XUEpnnP9RVTmE65YjR",
  "key13": "3bHHpr9EJ9bmoegraasBb8QRXzqP6B4TbuYXFvKpcwSCm8AKFNxso5MMVjRXrM3uGBz4E1uERT97iqv1BtKVe71N",
  "key14": "5cNueXrBjwZhSFaPVHRoHPGQRgWzwqgiV3gurLXwYdfEm1NesxYLwh3GLgaazqo5SBUBeaLMUkCWvw6duB4nyEK4",
  "key15": "rgxGGkWZmiroXjZeLQbkwGqbf4DqzR2aZbz24J8XkLG1E6YU1eqGP16XRZQVatbkJoMWHQmmY5q1eruYSwd8ZYG",
  "key16": "4CVVhLVD9j1gjuu9BGiWJME62y7ZeVPa22xf1DodtEHv4YYenq5HKbrxT3mEJbjjiHQJ4j2k56xCpFUbAajEdJRN",
  "key17": "4rFkZXYMvCeB1eAzgL3K3FWEVNg57bY5qEgcS2hcSAG6JDsuifZrLsgGo82n1CCoRBGyiv3NYpgCd7UMWZ5rJRdu",
  "key18": "37U8NH7qcQT47DrCsz4rgG7axtkGcU2P3H3sdeHBL3ch9ZKUtDbBDXy5YXoJHAKeqY4CWq1D8aBfajpsPKNHmK9d",
  "key19": "3agTxzL6G9C2MCRYn1uAs7HSsxg3YM6JDUWETMYWTTMkXCa2it65zKiARpAYw7XfUUVmPTopb8EB11eXezq5RhRd",
  "key20": "5QrGr8vKDTytniZrhwZY4VmiUwYb9xS6Jpp836afzyCdgHmpF8oR3NaYQxi3UAif5S2kwRzoy52k3yyUn2UTJLj7",
  "key21": "5bD7k9ETGujoZpwiMADesLctawmDKxwbZ5xPXmeqJbTfZzXz92cN2JZ1c6JYfP19kPZAy4bc82oZWh6zgvNzMWyJ",
  "key22": "5cRwxMqfCV18toUTHGxamViyCfK7oeaqx5xDzFPAjAR49YQWb5WMa81JTSRcKchmeqjijDjRW251VwQAdB9BHSTA",
  "key23": "5JExfNMaFHhtrZFNApvUJTX6h4uxwVB6WhxnsXnw8Fy5it8LthSv96dMjujsfBi8DjfU1FaELQPj3RqVT9NK6xK3",
  "key24": "4cL8zKo1rmb9Rsz3Hh2TYGM88e8zFqxL2KHoWEx7jEgsGp1GjQBC1NawYuJFf9rMqg1fo1XRkookdwimYDk87vF1",
  "key25": "3fL2XF534uiLXEuWjabF4ayJsFC85vPEzTg5wj1CGELv8BWpjRk2VYHHmFK4ahLAQL84enpT3TKGv7hZGizVV1nM",
  "key26": "5hTY9Bh35uznARF5VMY6zTs1tRBpyECKCggwLhJihxacNjjJps7gAGT6UyoYFxiK2DMtJQK7K4HXHSTs55N9whTe",
  "key27": "2fZSb7FXmLNBYcZmNZRzfWLVmMwCLM9Rd3F5tFDVvzTfddGXTnQKkfaL71mh1CUCnHCsLa9EDGnYnGvL7r3vWmf7",
  "key28": "43qN9kzz4xP3epf6wg94U52srEu2RsKYzybb924YAJoL33968X5n3YuvdKrimxRfxWkDJBrrDvJqz8Hm5D3h3CyU",
  "key29": "3YVN5QBFKM9ZvKtvYLNZUWvfQSXZsTwQTV29LkYoDd5CQsVj1LnzBXuVRymnbU1NDtZjwP3w7yrohS4hucYLAqUj",
  "key30": "3NZjYb85vidAkKUry1YpXrpdboresSQP8d79AsXwWmYdtBT2MxZKuztozcGvTLhsvGv9KByha5vMTXSUo4TwwwGd",
  "key31": "4V6A5gQxyJEX7yxnPY9pGREykW2zLeJPc2Ee8b9DC3pcU8uirGwdu6Ci11Lfr1LECWNnnsWyA8PKpxicX1PULDFw",
  "key32": "sMMiZCzPE7f4BWdX9J3RUNpzk3RVsNL6YyhKdsQqtA9UKJtpAUXJPMdMMvt8txryPzZC5ZAX4J55iGXaMoF91XN",
  "key33": "HXXvaqgFQzAHY569Vyrswx49yMjRFTpk8d1tzxMh4bMVHhuQXUnnqkvUZbspJpy3vCDFERDE6sZPuQxRkeVeJdm",
  "key34": "2U5cvz6eskbaTgK28ppQqbDaHvwrDKmb2KgAEG9fEujNPccra68RQ1MP36Kvk1s3WcLsWZwW9jH8RuRgf5C91GhH",
  "key35": "2pQYvBE9pj2je9tYziwWVvNDg45nyeEXKz27DxY1svH8PkK2rtcgBC5CLtf5NXJeSwqZx83TRnw6Drn8mguDUzii",
  "key36": "4Spr4fTJWpSmK6XYsgoCbY4moZywmo2qZFg2Bd76k75EyStXGawfX3g2JZcqLAKupSrhzhzsx7ZiYzD51tHCdehk",
  "key37": "5uZUegcyqNWY4m4Vcq4UmwPAwaVFNvqjcijXUSnZh1PfcumvkdfopUxmneSccZJw932U1U2Q7mwbyzJieoEePnx1"
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
