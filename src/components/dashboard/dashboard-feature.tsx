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
    "5r2c7bNaBQyxth9xphp9MuRpKzvFFChVuCe4L6io4p9avwxEo6cuTxZ99s96ypGurHRc4c6yNGEBX1FXoiAqrrwv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aXTLjHdPCKdmvZyqHzoygFKTsJnuZjuw7EGR3TATLWQUCTVRLy7HfFzMDoA6ZfowQPCmjfysKLppmbaveQrH94n",
  "key1": "HKaLBopyPEsvHm6bED8vUdbYSG7pgUwaz17DFqivpHMmKrwAufD4cdDgxno1riTYqx7eFPPYTab3yyhAWBZF5Px",
  "key2": "5tiL72GvCAHvoCkcrBMcrF3Kh71cm3W9EAaVvTzoKiGahj9YHZKZGMY4CffTKX4zgXDBFWHprWi6doqyFQunuzxw",
  "key3": "4vcBJTfVvpGEHpgatwgF3TPr9WWW7w2KCGYswb4TubbbpdBAiCEp2HCCN3mrAL6sFxYfVBZ6Ehc1zUEAeAyfz3iY",
  "key4": "4b4awpahQ9kfS5bdFxhuvPMkEq5bzabmgttBN8k5EbNeGwNggp6Zx3pU8hV6fnCPieZ1T2CspKTXsnMkhpHdwbMg",
  "key5": "494XgWCGJwmFcTg7vJvijF3Eg3oGWf28JeL5Yw8vbdxiqnWDuXy3Lecv4bmQaEc5eLmD7fevZ84khFjfBSDFi9m4",
  "key6": "5gk1grtT2QhsGhmWMYLfmfGbKsE3HP1h8xjSisEmXNC8aX8PP8QYTV2nJFZuamGwe7MjcV9mvg8N2iLUvSoFxppp",
  "key7": "2LQ1qhqSJ9kZwgBsjpLSw32MDGWrVeDhpPPtCwLHXa8MptFuiYrKDz4sRexjj2MvBCz6VHcd6fw938Q8GcToz4G5",
  "key8": "5wsDGLJEXrtghHBBD9BHBWdNdxdesHoYT1dmVFtfDqzDi5PyYmox63hjMgnXnStyDw7sXbBNBQyjQ4xQG4FfGUd5",
  "key9": "26L35sPVe1RGJmoFzipzg9HHe8nrgUzrw2BGBjPR5d1c3Gkc5wNvBAT9kSMK1aGq3FCzTcX2QbEnR2XKzS8GW8oy",
  "key10": "4ebRXvhyDVTdu7QTtmkyDWGxWK97Dma2PrqQ6qXbNtabJvh7hnFf6PEC2hSs1ozdza1bVhfB1RNoK633JcadHkRL",
  "key11": "5kA3SeNBhvrcWcsxDV1bfxBPPGM1TTexWBKmsAeVC3XfYNoMMZ762g7UHTubHBfuvChziHpaJwimZsA1hfGUCqQi",
  "key12": "4U3WhAQEUkvV7mLF8VacReAyDvsVbiF5gCmQvXLE4iGbBG9D5GcN1wCHaTyMxRuduZiQfuB7ToDRTTSZLStAM9L6",
  "key13": "4dNGspZBp3fP65gavTc7R2TMoM2wyDjRdek7B6dq9vcfAakC1FzV8ZNMtny74LrVqb5YJbfxPzs39fTQ9bBfgmkD",
  "key14": "5agyifpGnjgwBMy2RH41mJuiVXzFYUrdEfHKFVJULQUjk2uhZDCaudDNPDY46evJH7yEpkbs4G2szpEaF4gqfsm1",
  "key15": "5ixDosZcjjtnPUpKCGKe9DEoSkqZ7efHDMpS3AorQzidp5u5ZLFmv6C7SmDa7qPxCSqZiBqHimjhZVGUL77FaRY4",
  "key16": "4jpHzmUnSSWfbLWRpPjgLhRahxV9LqQgnYeqihtrGZ2XZSTYUDLfpbURmHbehaJdDpMsspkzfqTRM7FEk7HgQBz5",
  "key17": "4d1gJivStfTBw1Bq9Rr8zMzGJdAtVQqmzkvzZLF19QrU4Cscp8yTTTHcTkg3n3WAsfpisXqRtDRM6TxgHWQT6KV5",
  "key18": "2sgz3iYpz3r9GWXJmRFuqWb8jrZPJvv1kveRsHgdBj7speC4ugAs9FSoG98KsgJenjYDKftBQf6NPiWFAzQ3QpBh",
  "key19": "324j8AUT7ceN7gxsgvjwMuh6nn1iiYsKwcEyfkSEFnvBhsEE9nPeesxWAoCscDCc6i4uSEX5PiBD2pjNwVxZnM11",
  "key20": "4vuXMgtdB6ArMwpQp5fquNHFAjaznmq7tP1fRVg6cnPWbXNsMA4a1CnDRHpNcDz4beFQ5Q17dkzL4sM8ktNUon63",
  "key21": "3CgtCSaiV6QisuTwFhLqZCb7qjVBkxxoL4bhH6MMSgQPJbr2Kysi3vNj8Ewu54i4YFfTey3guLvENTRB8xheAqsd",
  "key22": "64EAktawzFSLJkwEkF7hw7982fj3NU4QAqubws5rinHacu1St379q8k31KXQX9MF9e8QTYZq54xhcFsMp66Lgpy8",
  "key23": "44kpLLWRFSifLSLmV2GeXaeZ7eieumJNKerk966SxtpzsiwCcAS1SKAcHoYGjS31X5GML5sGPY4fZtBWuPouGJa1",
  "key24": "4AagaQspTo2spiSzcBUctLKw2MyJHE7SdS2VJtAnBDFDYkoLAGBbi2p6g5jwV87GJSE4Z8kh3dWHqqmQ7ojgzA5Y"
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
