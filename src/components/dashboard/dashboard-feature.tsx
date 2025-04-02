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
    "53DsyjXyEZWNCgJ4ZD3YXnVpHGMmHDDMXzyeitRxc1zfeuGzVTymuYMY9BX4hRHzEu3nw3Gt9FpRjfjC4v2oJVHc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D3Zr8SFfEPCasX3va4aF1XskohbVMiY5XPHNpTH2GpoypLxMY8BYVmJoDpk6BPuYzbdxaCy98NZLqJBt6CZJrvb",
  "key1": "2UsMRBQepT9oN2TrJavqr8WdG2JmNWiUUZMP1drVbCnh38Sq2h59s6j9qh17n2RiMsGpLQfo8oRJkksWdCdkAehn",
  "key2": "3p9scyQC3cXh2gDizbE7zFAjtifTaoRB3J4v4R18Adt8bZHR82ikPAuUsAkCkUaEoFio7ryjSUXRJTsPkX6DrZZQ",
  "key3": "62vudSXxV4GPnWPNGPEkyWdhKDvqaTLtURpf3AAcAgbXKHPJYufoxQTQcE2hrAr9oJ2mF3G9y44J7m3cNihrqLQr",
  "key4": "46DRc7LEvGsGr36wLm1XAfqNZTewPt2TvwkqUWsgX1XUayfCZxHBRgYZf3xGnwWbYVvZiZyd1U7DqL9FmYjCMAF1",
  "key5": "3BRaaAnw2Fq8E3v2RBrBgeLcN7uf7m2WSk1GCmtwAGVmgfUBaT7SVPMMFW5rmWeZSZkZ8B3ARc4V2rgDrsUx8Qyd",
  "key6": "2xrD9seNMrjSQPn44kdYh4Yqe1wffqpmiqbNfT2jh3e2PFZ1c29t8AznCvGeiuQ7CDyYdRJUheKd1Gg7QqnEp77c",
  "key7": "5k9uZaXkQuTyP7UcDKeRXUCA3LctZrPzCbu1i4KgYRmG8zt74j1h3wPBcJwjxqoWVD8J266CkxRCvc5TTP1ZGhqx",
  "key8": "3rmz7pLsi8m2NnLKTwCNyrv6S2ZxG2jFGyqkAuXyfpdmjNqHwiM9afnjNSkFJyyq8PpQcLTVbYdE8TXiPh6hPfjb",
  "key9": "3jCPqZTeJbz7bw1BRNmxW2eafGbXbDinsZoVpzbpYvWzJpGA19ecXayqmHWgo8bDSqwziji9RaT4L1i9HFmXdYKq",
  "key10": "3NNagrFRyuJs2opmVrmLwtN9YtGn8oH7F6gwRmpr4yxoqsQ7fY5weJnJrPMiWhLUkPPs2B2FaygAqZqkrXERTgNQ",
  "key11": "2PyKHa4Ep3Mek7E7kNaNarwBKWDqcW6gyLAxRu77wuE17vUAvu4mSRxyAwMq9Vtn6TTiXtwG8siKpYwR7xAHJhgR",
  "key12": "2F72pH4HiPcBoZjo7TF1RSXLnYNixfiYxsEcPkqkZF5vsezXzFHcDWBXtTZyTWBpgxCgimGaVzUUquFEFrAJKDLT",
  "key13": "da6cfUMbMCT4F86XpmB7SzFZLaER1Z5mGwKMSshvAF1fHwW4Xp2f21oDpAyZTU5DZxw9NoTGFgouT6kA7Q1Nmjh",
  "key14": "2zaxkqkoRHyb8WWCRPWiKb3MHStxhg1yHDYtWMkJT87fH1NYaNMWcQA3k7TbQB2DZbei7vVT4FDmSnweqRo9hFHq",
  "key15": "2ZHn91oS9CuzEyQjtn7Q3ZiXRkEZntqEQjBh9U6egQrZS2DqqV3UYevjQ9WVUJ4Fgrw8trgzDgQQKi1oH2fBDdhU",
  "key16": "3ThupmkFQcwHuwrYiveuJtZSiofjBmhaHm1RtNNP879aThVCAcS8SEP94vH7rLcLawLWLcmr9AcU8m3RQTDJQ4U7",
  "key17": "2hedKkQz4KFvF2iSKLYjUkQ4trsAzyoEuycfRZrBXxbRvJzMvWmiqZzCvFvY4giGK3KbhLKv1EH1XFakBxEMxr3J",
  "key18": "4YFWgKDuLBLhhwiR9HtNK9vEp4qLqpVDyL8HiYuaYt1R4QzrXXqUcoaBPQjYfv3utwftWZK8eK2TWEsCCs9ofJ9V",
  "key19": "PHage8yA5nTgyLMkfSm6e4a5ofGmP1pibxaZyZBk93s6st7TP3shjqNuLN7Q3zNHE9iTpSwfDNCFRbQsAJyP1jv",
  "key20": "3xUfK3L7t4YikQ7WsdKvbNZL1n64J1Ef2EV7ERk36UBnMEqsvubWFa7MFYnL2aq976AvJ5fcJ6TdZNxapqne15jA",
  "key21": "2Fja7hshz9ksu4MCmrE7xyQSzKbczfz79RnJxyzQZhe67H3egHLrCaSodprTUeFbj1RZBqvRiGdtTFzAxP3CzPxP",
  "key22": "H7PDKFUs7XZPCVSi3Q84tnQEA68DfUBk6uyqtNCax2jAoiK41UeQzsas68wVBN5qx4NgU7as1NwP8Yj4RXsTSUY",
  "key23": "4CF7Bj8DmwjLCZBgkP5YsSTNpt3sXt4KeMAhXpERvT6cmHAb7ATzua7gDqBv3nJe2inzLBqs3Wm7zrtjfaQRgx9r",
  "key24": "54rUs2BoRRPCp23Jm8G6R3rGFXx5t1hNqxRZrL1mYm7DFSy9WEEqTzGYDT4nP8woLPEtCtk2LPyk2u5WeErg94cw",
  "key25": "4AwTXuMTLHecpXY6cbnPCVYywEi4fA1neTZtLswcBPsRtJ6g4GVJac387xLuGj2i2ihWddVFyPcA471rt6uDpPuX",
  "key26": "2YBo9yhRJkTAtkJ2CZqcHqgVwhaNTjn6vceTnw5QW2GhE6jL3bdeMXzSGDL8LfpVtUUUpRHqVgbUiiibKtsCfDLw",
  "key27": "2skzgeBaSJ9LkQDtkc8RkTVGHZvesNhPMTKHWvJKP411LmBErQWBsmGirLg3TPwbu73X8EEaqhyVL8fTpAZt4nFH",
  "key28": "M3eHPKedJBxK5ebkEQi46nDo6wA72K61bYa5JwK3TxNGri7NYcNQ7wdWHrMyBQLB4STtNFhVcjffjUR2oH82HDg"
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
