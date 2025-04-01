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
    "2KjtcpFRWhNeFMSs7Ft5AhhVhWjxww4VW8yG6MPFonGXroR1aNNomYnnKUFiFCJRLQSEDYqbGtpErsa9fViJAALv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kVvcnbRycEs5MiHRWWbW3kRe3Tp7GnYUpYHzQvu8R9y3FnCUChjwXGu3YUwjafUtfx6tCPReRSm6qt21vpKaLkd",
  "key1": "33r26RFPLxU6eMEaDdeuhBTTb3JsYwDkV8sDtM58xVrDpGuxtVz9weRhJAAQGTpgQYbUqAET2KY1sNa9xbRcZBwd",
  "key2": "4DvKJZ7ChzeTB7BqPEt9YSCC8RvXKvLH7X1fJqRj6n7X9oZeNtdscU9owWSAw4b7bUwa7h5rV5CfcAKkxHEuRmqu",
  "key3": "25GQGFkzvEjeDWLm4Nmy6YepqeQbB9c2F78hYXJYzU9m7NhNuQN6dcfA6xdb8GMJcaBriUDGJyhC8Nr9TTkxbuoK",
  "key4": "2AMK6VVNdjjz1LQgFjAmhcc4u73i3no4JaaW4eHpgVMETXeU4ckS7fuWHJomtVhSoTk2RkwNPWBwDNLnkMDkC639",
  "key5": "3JyEQbcCssvEbyRndksdXhbAAr3LuY4hmCRG5dFqDqFzeftJPEXRV4Thkt5agpzz7PFAHBMBsmb39s8zbnC1o5uZ",
  "key6": "5HYht8rWUJNJsTdsmvjo2S1SfmqHNZATAfcd1hVjEVAiiQss1bWs4E98mka5SoRstCrf67fHHEP1X68PoWmBTfDB",
  "key7": "5PqJ1LdMEFdL74ATkq2Yjv431xtLnVnfPWTywiUwxkaV2Awm33Kgzn5VoNeZgnizNtEYPuMpiSGN83SjDKc1SBVs",
  "key8": "5JYi1EwuXgMDVe73dnHtp8fzeXYHNFVUipgFK1upVyNHDGsrGraDyd8ozKwNdYTMZcoTDUB1VsZTMfc4HdJu4MJD",
  "key9": "3juPVvp4okDRayJRdZfQPzK4jCST1j8wVpbekzdTdL8JwVrhwxyHPD1AD2bjTKy3azZxpgZE8aNzmxxNcnrq5aBT",
  "key10": "3rfRPjdFJNFGDcYDEeyFLJfAoe1ofer79vQk6HTPiHJL2y9cdxMPS45N2nVPHs9Yib2iyUWe4KvZ1a3XL2HiUSnK",
  "key11": "5jeQHpeyZP2LUyNcBc6WrAcT4nVnWMF8WbNRZx7UgY2ZgpNovqxHX4aTzCip5swFH8BJMAr3uHVDSGoSba1GkybD",
  "key12": "5yn731rFrVMiEmigV2jYoDNXjDjMqKLGn5ZRxhxTV4sbnaMGoPWd9HeWTaqefK7V88Gsu6HkEvTyzT6Y3dZa8Mpg",
  "key13": "d6HiLg9HdRnSwfmHt83XravnJi3mPsfKBeJg8nCeJUoGAF6QuXGC7BKqcXTmCo9jTnK2xbL8ApZCfDUCkC7iUUb",
  "key14": "5vXkWnxYRAMrtAmBvmiExYzneqGSpCFQYYYZfnVTsKtJHrEw2b3AVH6PdrBcSc4EhsbQ1DtxauZSVPDo2jJWqbXz",
  "key15": "AhAMxm6gSy4PiLnRboZHgPM8Cu5qci9tAkTUcBpb52D75uM3XXjmhXLwC4zMdxFUBT3wmHnbcivrF3EeXE9Czp5",
  "key16": "36SjpbNXMRNUDgehg6Aq9oYQRN1QDdMa4MXfXNVcgSjtRsRV8iqEXN1VxvZTjcQXBj5DCUu41TfAieFn6yvHJ9di",
  "key17": "31G82MFdrk3Vb9NrWNwCyfXzh4Jrr8HX8uqoScVJP69fWjRqRPs8xw5CjgqRdBqQzJXzjAyoQtSg3YakGG1TTKU1",
  "key18": "3dijLgkAgPx2pMMWpoQ2m9HyJYaVefsnSsDMmZ4mgM2CDCynaHsRuFxE1zWpapCCHhHnedr3fUikEAXyJyYA6f9U",
  "key19": "4vezDu2QtqzR9ER1hEKC7s6QXfzqubxga83gnchwrjEUiKt5A42hfqMZ8Zp3fnQz67DkgSVP2cNzmXGTC6XY9dbc",
  "key20": "4G5LpVHsSoFU4PnATjmMCMjRRAeovLndpwsMfRryfjiBEvVmTRpPE6U2YDBim2Jpbm4Z6Nkf64DCqinyUz8zyi64",
  "key21": "4FViWiYG4NXh9DnQJmYu5FzbgQvXPGHCTVUEcPG1dgqmNnVbS3dgm5pQQwWXPXNyjHTQ8uhnRNwjLAH1X3ev7Kih",
  "key22": "4r2KrYB7q6tZAE5fiPf3reR3y375AWNmazsHXCeALik3e9DTHYCVqYRhx8kjwp2XtEG4yccRaQeX4nmtdMtJ3waM",
  "key23": "4qk9JNowBu27VTspenAbzmjxzUuAQz3cS9wdQbXNdNz5NHagRYfasSxDHQpCFX4Zh7qBbU68mVXQNZKptkh3F3P8",
  "key24": "TQUVr3n275UYhhjbGTG3yxVtLmhJtCEHXxwABbNmki84TjATTEXJrbmTodu8vYJaWrAQQPPUxMNpRedhFgepXLV",
  "key25": "tysXDCUVNVzVyJuheYir92cs1xsLs6P5Z5uYanBcYU37M4oFmxz5N9jGHSK7u1HwokPerjzraeKj59L7X7bfv67",
  "key26": "WP7QTn1fdWhyiVVhBadfgCK22SacG2qsbxqPQBRzxufMYMvskyBtXvMwRF9wtN1xE6hAPRgSifTFw5YpuQCSPGb",
  "key27": "8XiPEbDSaUtVGr7kJf8hRyuJwmnZacjDk9PYQAG7QXYPdzxiM9hHexC7eLKVKzv9ncxJgz935r3pbBFdiZ5Vq1b",
  "key28": "DJLJt2LpLHPciqZsfRwG4VDQUpMHYkoQXxuCpzXPcyZsPAcNAWQSj7VfbXZPGhHKz9NesgT6VojdUiEZarE7hYB",
  "key29": "yGJ5xFFFMHqYgm8B5qmbLk3biQ9YQjLDRvnq6BxJ4sTZzaFoTkJzkSXsfgpkBkvDhTvQgNVnbBkRUADDuSxivSo"
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
