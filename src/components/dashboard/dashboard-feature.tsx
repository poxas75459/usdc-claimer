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
    "N6YMr2739sQ1pfGbJKKQZNDEgDQYoGF8ZiRUx9Mu4SjBTJncebbb5i7mvndCavkT9LpLGr6gRZ3kCdZrH8VJTVe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2timMxxiHoCijbtSy5dGy1ccg8pW3LHtokz74BADSxsktBp4JEQLoo9AZ6AAhiPW9z2ieGsuoCzQ54bBqzxrN8Ps",
  "key1": "5XoX1Cm5Nu2dbMw4zZZPE15bKMUA8wVsw1htnpYE5f2TuVwmmkbakX5LQJha3UBtNXNmGcRKzuCGnnJWQhVENJN7",
  "key2": "2Y2fVSyKLP78ywTvcBEgQn4tcqauJeuwiusjNFwxeRQBV9e6vhLei3kSv7apdr2yR6ePNe9iH7eMKZHyGMuAbzYP",
  "key3": "4Kg3chw5E8grpUU78gWoi1yqGYFHNiqpqwj3cDLcYz632abyeTtGfyvEyiFpcHNGaouisaS74KVoYJVYLJ4o2DwD",
  "key4": "5p2EHGmmmT8yt9vTvyDE6UYiDQ5Y6q6XN2yo1rK2dAcj5tZAGxKQUxNRXJ6YSaE6Vfob7eekyP3efuhdxZXzXV8J",
  "key5": "4hgbTfk8T1jivRaGHRHtLhnGAwKxBzzwi6R3w2ka3E33p6jv8Z4MAhn3k7tEByhfDzLfnpPHk673t6YV4Cu2HVgA",
  "key6": "4q5pteL93w6kKXikciebo6MYHN3FqE9qxieGJTdu8cMPNyUbhYw5WvGtpZhYD2xdLYhzDVksu25hHhDjDbU7VRwB",
  "key7": "2GjoX56h311kY6VmhNgkq5QrAYZ1Wq5sDQ6bEiNhpVg4Ai2kQmr4URdzhHedzUnCdza1uNStxLvMg5P4cu6V5JgA",
  "key8": "4tQHWGtkqdMdNWRtjZuMhaSqcj1yhfohEPfWqSKA6r7trhm2VhGxFdLDgpEgeExBNs7o7v3U19PjMtUyxXb2FGR",
  "key9": "5hMzoVmg9ZCHUvycVBrrAUighxpozHN1uWqKQ6VfkXv8w4oyL1s287McKjX5JzRiis6HcpytZJysrAfNgrexun9A",
  "key10": "3XEuVUgnwaAByUVhPdWZ1dPecd8dWhm4otSEzEW8z7zU28Hbi5YYM1gyGqYpfphZ2TjJZhz2gexT1Nzu6C9MXLaA",
  "key11": "4GsqHdQ25SBF7obM7ysz9B9qY9LmHY6AQCqRyB8amqDNzHqAPz3h8EkxEpQBKfK2ErfCoH38qwr6uBG32nSnEHAD",
  "key12": "4Ym4k4rf9wjd5BuJzqEiU5iGVCeQwx2fapLNRMaiwhfdoJBpPuNWBc2meJkyXykeQWYFA1vAGG78E1tsWxmoZkCq",
  "key13": "yjstLYEvMLLeDTuziHQ5Yw328ynvnAvX3GHttQ3C4wGpdYU1oiDYXRL5VAyQmPwhZz399TF7TtFpQ2wD8Lha7is",
  "key14": "3xPyMtAjGDS3RQQFZFztisUboN3HhKqc3S5aUC8Nt7jMXUqNpD1K2PGFByMKoCYuN2eZXe1zSwuvAY1eZ932fuPC",
  "key15": "VCuswyFbHJHDzvaiC1Mm42mkUXrV5KMLGSUSj5yk8MMvJSU2nciqcjeaw5z4cPeXVLJckQMEEJ1U9hPtiqjAUNc",
  "key16": "4sjZvuRTehydYRwsGEDenYhtBra5dTvwVAjToyeePE9GHrVocG7zbHb9nM7vtfW7Uc1yk8TnV56Vfx1fo2HNzKoV",
  "key17": "3gTVP1GM9ECoZt3Zu48vg2ikepoJopCa9rVCKY8yt2FPQJp3zt1284eSkyv7Dywjt19fkuTCLag6F8feyzGKJ6j1",
  "key18": "3HX99UiZ8W91cSbo4fvtTHLZfXTovJGScoMrepNeUuiE2NPNs8P32WpzMcNLFuY1EDxAYFc27umkV3SDkafwUk6C",
  "key19": "54NwU5gnrzAwmHghEwjengBniGXynNvRTqitUxnv4HzXbBy35qB5ckvP6Tp2P64Qj7S5nP6ZndDe1SY5u8MySm7M",
  "key20": "5sH7ywf3S2ijgQKwfaCiCFqT6QC9PXrUb2ePGp92jgjpiTZgWCdRx1kPV5YPbjiQXbXqTC7UKhHEh3QcGMioTKau",
  "key21": "5Ru7s1nd4xUJRMqZzpi5cPMcTLJcsj53iumqnc9t32sGRgvNLQA1AhwYa1QHij2E2j74shEbzU39pxG6XctPBUcG",
  "key22": "5AJsBNt8LqPGecv9wgtKu68pQDMzRgZo3ePVNWFU3sPLLTEQUogSWiSHVJjGCzEmToAwtUiA3UaaRsnCTjdMSduc",
  "key23": "SCDQTdtEtLRgBaVsSPTG2pXPBW1yQkpzSnMG4QAawHfQ2rBQN6hCCNVu6PhfFS5nnVnSqiqXUcxcsytqRncenQA",
  "key24": "3gFdyJzowtcWrFTQ3DWUpyWUmFu31DobbntEjyA8kbkze4zFGHb1PhCi1pZkK4dKdHmZd4Ag6Ed3L15FP7ESaiiG",
  "key25": "4GB3ZvuyeHB6Mxboq7aXSaup9CNWfZ8rrot2KTiAUTNLB1N9XSpXWrZnYR5Y4qaJVLHihk8syTX22MbWiFdwHprh",
  "key26": "5vkCybm1c3M3HWy72hZTx6nRmKw4PHtUFr5nRaKoqXh3UJGtQKUkWFDbuqM3CE3wXyfKuqYtdfdPq3wNWDu5TKT4",
  "key27": "b2zNnDGud92egGDcgWqzoPczoHbtYQYsVmhu62fFz5pYaFDegtq4U9ghaa4QgsvUx5svGYV7R3DvBmvfsxFtF2d",
  "key28": "iNMo1s4ZANqPeNTkqsCtih6kjQ6f3MNzjkUHtnPRBx9mGByrrAzCeCNhXzzMZJiAVHHVrp2eEcNcieEnfqG9GPU",
  "key29": "3HRdTXdAs1uW7JdukjNG7cDsWDuECC4vMDTFuQAXTyrT3sN8xaANZheNUnUHJy4paYuvNYmU4ps5BVqAcciKDDJ1",
  "key30": "bwjDvn6WQ4JLjYHtyT6X5toHMWYpgCkA9jpAegKyHdM3NpvKuWeDb97jsDQMXUwdddz6BhJwccxe23Gcy8SoZRe",
  "key31": "3pV5GRi55XNzHqgxPsQzDVtAxxcajdBJPkGKZGUmrqYH8Jss2bnuary4zKh15u5xxc8bCkjKKamzjWpbqE462CrF",
  "key32": "2rFvhPitt5jRTztwz3D5TG2zhCK19AHd428LgKJsd5dobGyFfwYXW6Nhf33ThT4GrcSa9Tg2BzzonW4GCkq8NsUe"
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
