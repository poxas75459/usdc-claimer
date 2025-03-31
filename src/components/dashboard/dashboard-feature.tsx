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
    "5JnmYTVpFxgcvWq6Xz3ZLTADS8Wvn7ajPpn1rB4y6JejgbfnBS1kM5ZT2J9fjLSeSczty2tuQksDC21XzYLhmJPx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GjRoayXviZRofqWXuBtefihr5H8LesVWLrpTEnna5ZSRjMuNpmJq2dgD7pohNAxKqdwYkF3bW64spEqjwkyW3fj",
  "key1": "3AqYGRRhqoWkHHhTi3yYTdDaVbejxNzUPWwTnesqnGHpBUPKBuaLU3gecvJfFaPVmvUCXwtDrNT475d5cZFpbT8M",
  "key2": "2n58L5X5uTW2EUPbk7RAd5iKdbCsxkZakNfJWEeWE7szyLgPL6wSy3A1k8fFMZThk6UAyskeDvSN8wKpJZpEA9Sy",
  "key3": "3auZq9aFj1YiNckQiKsikKapKRAxRRkrzboQ1FVBr2J5nCB4Fg4pGpGudFUenx24n1WxU6vZ3HSttZQpokkeJKJr",
  "key4": "3dRbTzc8xRmfigHHsyZNQ78xStPoYixHAD51ZYD387998aS7jQX9T7FihkDRpiPg2FqPuAVVbEseR64CtCmxMkn",
  "key5": "44dUDpBH3ZGN9oZnqZhuwGyAKxB1xFxP4bkztCCtd7BHbZ3jWWbedfwywuFnZNAemc5L5swnnhymQaepycCEuktr",
  "key6": "4AWpdvph8M6vWZ1t39Rj9eTa43WEe2UJ8HJ4S5VDce6PPkXEGK4aPDAhwhNAm19Ube1heHQDUD19xU8LrPSYVg11",
  "key7": "4BgMy1XggpRtUGRRFwZbEWcGDrB1fhGBnhicoF9cegXnKRSbzPRRvFBDw2HKUkWUimvSoWoQidHCS3PUZYT5jzGS",
  "key8": "3W53cymwZwW6Gy9oP1nW1gytgjS2m5RXuMQ7mBKgJWSvzW1hLynyBoSoBNHeDtZoKPbQHAJHAEASzm3G5NJVUuB2",
  "key9": "DPg29kTE5ZG2ubFUGG9WQojTp7SjM7HS35cT2yPi82B5uHQDXWHj1ayEYmmmj3YJUwKyZQK6EoFBnKc4rN6ARPi",
  "key10": "5qn8gA9yp75hhJAWr8cFrTASr4Z3N7ac2fkGTgiuDzaL7p2R8qzBeks3GMa2r11hcdKdUb4PVx7sCHKxuy9yeyEa",
  "key11": "62TWa34zyGUJF9oy9pQQy6S9Ht4oahZA95LUWn6aKvXoYjF6e5LnjhS6Ue4nSs2SMcbiGK9GBfMwwHFdyRy1rngF",
  "key12": "4S2qYu1N1Sog2GpJC7ExzpKGQ4m41tuyLSDLtN8BUMXAniPgov2CU4MQzDb7c9o1P7VsUJ2MJRXPkByqb22E9mGK",
  "key13": "4WXJyiZDa1Sme9jZoWzucoe4m14memNNBhHGcZGM6nXirAynu3gFFR1DjaJuMvyuS473FUpRNmBheBP9Gg6jDH91",
  "key14": "4VZztZwXWnzQ3a6ooQo31q9rLhHCVaH29Ji4o9KZzKhLpbEXnpwczkySdWC1MQ8aMMQsh7tsTHazPU1dJWnKT2DZ",
  "key15": "2fZj3jE6NuJ9Rwu5Lz6SMd3AKPw5Z6inLU4wWgWdSeHKAxwKksxvjyr1aQzaxYJMEWVagfYMgt4Na2yRLjKFfqJZ",
  "key16": "52naLEfQJSSMNYmwKYKTGX13fEFmrxEENVc4XQD9vBskKpsRUaTWJH8RRuVXcChXfgryKDdTuYZPHVBFuGVXUyuB",
  "key17": "4fLLFoHsjQ12yNs15ciMznKMzNxEHJ9JvyeYQBaNEKJPdCogmRMSctP1kLcwLuny6T92rQALXJo14kfaCnuCYywC",
  "key18": "4Akq7G1cBVTq92tgQEeFvMoRjik3k4wyq9uMsPFuaRqsCmBdHe3YnzsxGUPdjpdvctayPtwTLaP4eK9WmNSHjLMp",
  "key19": "31PGUg4PPST4czTLXKG4GeNXi3wGSAuVfLEjmAgcZ7QU9WJ3vttwNConX1PT7WRrVYmRUFbWq67fvZfp18fwdCUd",
  "key20": "4UhZwsXMPR48Vew8fBQDSMJmVrMJ2TZDJAdoe9MbgjL3NxshsAKBM3Zrn2sxAHJ6QjjuASsf1kYKm5Hyqd3qW7vr",
  "key21": "5GVDsNNqujKdZVrxvajTsgy1s4wVtSMXR2FWA8MMg7PftVJHj145MeJS9pA8AYzguXbsskZwZ5XEMUg9LmGverMr",
  "key22": "37GZoKGrvH4WAWWremTxsHFuyA6y7WhDgKdYLBenXXEfmnVRZNzb4mCLS1C4MMW6L3SWZyub2fg3KM6uLMZuHVMX",
  "key23": "2f7KpTTxUndSrL5dUb3NBurRtMkfg42N1WtQU9TfMKjFcFRMwb5qDZuNt6k1CioekZwRi8r3SDNsJktC2iK1j7iB",
  "key24": "5cyceqHxwoGQnhjz92bPJjVdrR9wfYDm7sm9aCvwXWdAwxJhKpx7rToxnTPCuhxX8EQNv4T5tSVbcnNtKfx63rhq",
  "key25": "2aTbu11ymQVdwdLfpkjvKGHkbbt6YU3JeqDpCMxPU5E3HLytd5qZTSSjBvtfx9sMtX7PDHbedLkwWt9agySUqLnm",
  "key26": "3QFT6tyKJoh9Hat4i37QtA1GJ1EeDc78RRmXQyYArcuZLAusGxYsePoqz6huuSuYrmBWodQ1gvwajCZurxGzZAEB",
  "key27": "5GDaLUamnAk8FL57HWvcqGj6qLyYqGvU9QJ8PE9qatyJ9M3gascWHThT1B8tMCy97H6LSsqmVygrpjAgHsDT7cDZ",
  "key28": "63cXcDsFci6AQ7AzjRkycLnCbLFo4vSDAGVPSJNieQxeve1iZ4UFGk3ZfvzmDkHhYCKUJDyM2AjpaZhjamADR94r",
  "key29": "49BPpcBbz1N7gq4Rvf4gybBNMbeCT6Tab3Br2oVoAhwKiHsY7KqLHkxvbyvowrgZ1Lu4W7QChn5H5E8BBQZzwkYa",
  "key30": "3WT26nm2eqW2gnRyVH2k6ea95226bPVLWHAG8ForVd4DDnvKxPJARd8oTD7rdoY19LY79dKeq4kGk9g7w3aR6S49",
  "key31": "5KG1QSgnhbd9818UD5bpZf2VUgsXATeWyUcnuvnuTmEVn6nzj6gfCF29uZRu249CFj2cE4ZuNvhpijx3yNmh6D6N"
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
