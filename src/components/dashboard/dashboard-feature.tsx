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
    "3C4Tka79NfnWepobCwmXGp9FfLtdNWKZBb52GU4U6xVqozstw3FcFEPqFeQ9qRTAkjyurbvPecBLiYqh4SdV3JTM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22CKqwFXEFxYg9cRynp4K6KywioANXNZ5YnfEvr48N55ntb8yCm61TTtpUvRjqFp8AJuPjsEn1b9DPc5KC29sq88",
  "key1": "UfWbLSf87kGPgfyCjf3GNSU6foFYSbkS1hVyiYKNwAP3kf2YoyEnuwZUaA9qXjocY7vbsCnTYkxENMMNwzmYyxJ",
  "key2": "3q6YwodNGLb3e7i4dWu7hdkPqMcvZUspJWtejWP5K5LPESpp5FNy33JQmjA5inser3WoQih7Svxg28WMsqmP4B8n",
  "key3": "21QPCJk4jWL5qcrxxvbSXWHhAF5y9c1g5PJE3NazNxt4QHo9r8oU7VZQM5t7T1nV2e7Wy4zvByFxDTQs8XWoYadP",
  "key4": "52nBryNSm9T3GDt1qeniGUHFa1af82oCYS8DShzF3EzUnpc6mhG3aJZETwNBjpchkpcmGM3Ks3U2xWxYJJM6VKYo",
  "key5": "3EvwZ7s73HR6PTbgWGP3qCvyoBBkmwn9E5bEHyyz1V2UoQevmYbuE5AuSEHjnEwmzMd4WAEW5EGLXj3K3df3NaLh",
  "key6": "2vebtjHJXiBy2ofQdL75cqScDg6222m7mCRnbCfWoYC8Gqxgo3Mp8jbtXr5L36Ra8oEJLbfTRaLMzscL84herKnd",
  "key7": "iHk7fmHrMHjv25xBQwgxyYhwpxutv3DYKR7VkGAx4Y9srLLyird7tLgeNQdRm5dxW6ReX1RPZqiMDBbLktQqBQ3",
  "key8": "4Xdq2iRa6xkLxXTBRGeYBqNQtdXZSPYfoAMpUzbSY1mmNNWAjLUHfxHwU2fuUkL6PxPZhczUBE3M9eACKPePxEcx",
  "key9": "5sZZNb482qDmq8xAM1gGm6c3YLtMPe8VPL3p3GdTKvkxkpHLyoSxcY3tjgyfyfxkgZZNtiEht9FR595HKq3BBDxE",
  "key10": "2wDwzCvw3KuXQJy42D5CoFykdw6Pqt7JioUQe8jkmkDJkRjjcBkj9AQadjWKaUWWCuo6bATQRyGdnPM1EmdJC1Ft",
  "key11": "552iwF8nPG2tHhqLUeE1GHWw4BcrofSzct7U4qMC3hf4sL4xxmg5so9GmyERVXeHAFm82fBxtRwij8rzkQC6H4bV",
  "key12": "iawBssvqo2YAXXi192spC2ju8foydxLbCa3JVC3rQpdZSkC8X8Sz4ZSLQRWRxw8qiNuGhY4NvcYPCSgs4PUEvNx",
  "key13": "4toByh7LLjPXuEQcy5hMcZ7xdVpz9J2gVmTL557rBNKbfsEMhD3efaera1XcE7YQ7pUHsmRayiQAzM3w6EoMhZnP",
  "key14": "3v33QR7m5g8neNKcJsfpQuG1L1Sr7s4XLQXXnxA5Ehyzwvv2PZ85zG5CyUkuf2VVsr6TUUZjPZSHackE6hCy3Nf4",
  "key15": "2HQfPxbn8uAEBu3EbLxdM4yWFU6MjAS1HP2MgAMN9yJKvuUNqWUqPFyddaEAYP1giCRB6JbyzkiymqDxuh5fiMFg",
  "key16": "2bwEH2ukDFC5ZHYvyqn4XN5FgXVVyZcNDWczfc6eMsMz3vsxh5fmUsTdrT78p137eqEaFxnQJCemxhB9H6oag9DL",
  "key17": "27Cze5pzvmgfy1xaoEFAzbWJ5F9hXKTPrbcUHMH3MzeGqkHB4ufCHUF9k6Gvz64MiY1QvqmeeGe5kbJxCiufvreN",
  "key18": "Hjhj9tSAUA4p4sPjiF3DadoHSYPRz9UPNjD9SscQ5rYPTCLcdBxQ5vwBQT9btA379UsgRNy8fTniKoj6FhwT5U4",
  "key19": "73LuBKmkUMvN7ZxkoWatRcJgWDs2oDD7vsYrq1yJYtdkFNmsaFzbsJqVr63rA4FbCQHt36kR1XQbzwhYFmAYFCa",
  "key20": "4zWEkQHC2VcqHXKaTUhpS3EnxfAnAhxJJRdyGhQuda1h5ZWGGuNZ6uX3wu1q6srUzqZXXFWvG2qBNZ9GpgpqY4HJ",
  "key21": "2vGUnZdWSbWDJxLdCDsHtqLE4XispFSsNPNoRPSUvsYvcapyQFej9DsFh9c5YpvztQf8Vz2jRe6sqJNxFjJWoNq5",
  "key22": "2RVLrwz36NZtwufB7cgAwvTrz6PQYbrxk7pFs3Yvh3kWsTgEtfx5D2ZNxNL2BLRoeuYCM8d4RsL5DjwkDBQsBqaH",
  "key23": "4anKb6qoTS2bPaGdzs81DEFbtcKD2Ms4RFMwhQuUknAwZgWaeriwmQF8q61yzc83LukxSw2gNGErbWveq9MvWmCx",
  "key24": "2g8dyZXtcXqF14m8qVt1kwF4yk4sWgtPHkzKe55RFgibuBDQkjrpzQrWWErPdsBD51DQTLQRxsNLMce25ir44FAa",
  "key25": "4peqs1EzdkjvbsnkEKoXFeYzffsPRkmDFCd4wtnbuyquJ4V6vQ2XS1cFYmnRHxptGMbPfJ91THwyDKpi8aVHNeXk",
  "key26": "5pBF6WYEUPBCgm8zgfZ3uXfwaiGfoApQjYozGzGJULGjoMkfypRyDrbQKjuuq3yq1gdBsCScsi5uu14kSZcVNU9q",
  "key27": "yHeLRbQLhYQxWx6jqXPpQ2oacp6eY4SxxJTG3vCbStQpkcHt1qRaVXuhmAVR5ue4jLiBSTUHxnbqmtKWGZ4R8UF"
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
