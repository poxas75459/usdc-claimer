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
    "5pvQknmr77CLeDczo5J6zvsBzsMre6CJ7WTKN435ZB7tHkyjtA7ztU2Qbw99iTm1RHkezTGSLmujLepotJbpt2vS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FQwhyakn29wJypniqhBaFA3erKEoaZKfHT4XqvGKPn28uzNKbCRUTVCKZ1rX9EdREPwQwCDQiSqu5F5fFPfW9C3",
  "key1": "3XETHuMH8GWyXWx1RHeHkYSiJNZBzcYQWFubLLP4TkThH3BzcdTXmQFyhhZKp1Tpx4C734eMMDamTe6Nmh8Re24X",
  "key2": "3ftZ82HzQKs5BxedSynGpmASwHawhVQj26FKieJfZqFBg4DvjD6VfWbAugzRLZ1udqJcDT99U1L8t8v4NSvNiJdj",
  "key3": "2CjtehB8pwx2d6GqU6xfNkg7ns9JU7Rg86DtJb36Dw5jQipRwVXT5SACz1keEUdW9toLzU1WJizjRTFMSWW5i2VJ",
  "key4": "3ntSVeAuVoF8CtYw3Hb8XtfxzRXgwSDEZmUDL1DY2dcDDJJ5rp8JygDq9mgUE6tW6ojoS9SeZbXdco914Jtnr2Lg",
  "key5": "5UkMqpEJ14Gboko5i4mph6bQauuCKapXZiSrc3QzZwRKsJwMJS5vVgwuS6mvQUD1xBEWFKrEWKrN5tEdH2TpG4bn",
  "key6": "StYs5m7wzMhHYTsVN43MRF9FL3S7J5BUwKU3hr8PZ2s95FBcNM53Svsc7NacnDqRin6vL4cjH6NrzcvU8DDUrSA",
  "key7": "4FmasnsSHv4N6aFL9TUKNkWM5yb3GVFco1tK3qTguKTNkuCZzJ4oZnHsMijRAYZGm7Ctzy1J1z5ZuNSTUMp8WRbV",
  "key8": "4kmZrmth7tDNGQj4oq6wj4xjxRJ6uaF9daDF8ZumvEytqovwr2bfAaWWrHcHiiZrS8sC4jWaLA1Nm7H8WNgzHQeR",
  "key9": "4kjQvy7HWBTxNr8VPhixGxMC7n1MVvaEMmSyXBu7aS5aN6PpgqWSgBpuWUA2cvRRWQ8nAtF1uz4iQh9PFz93tXuh",
  "key10": "3sHEFr8ifEiE7n66Wakpc7ELdvEfX8Huo4QCbLAevxQRC2KYJ3mPHftGdw6NwBSbCAziGZn8LH6GuQLrki8TBmHJ",
  "key11": "5muqpmvSd7N3VVdP9BN8EDf9foMbdsVihrifRGHsrw2TfrFeQJb23AGAc7w6bHNd26NiaqTZzMLhFjLdVKMtYsn",
  "key12": "3753AXL96YWYP8XUVHtC44fxuUWB7gqPPvtUm61v1fSAxxt3HUxKEqEXJMWeakptzTrhDp13TirSUzhpCsVTPd2h",
  "key13": "5EnyX7vdHN8N9XpFtLJZqtfPfhHuosck12L3qFsKYU3p8StqRQxsBhJ86HKNPgrNWHGujvYKZka2GvKzVZguUBYA",
  "key14": "2fizzJQWRChkz3tfnDHXggHrdW2LK6DsVTQovdiPVWMcxMLB5ZgYoZqYxLenc2q84B6Xh8Cj8Joma9drZXv5ygek",
  "key15": "4gvbSNzSnAThCFx4dW8MarTBF2U7Nvh8sDEx6qWwqe2ZoCrtNRwFgPNZPa4JbU7zj7uVvFA5F5mHKdEYZdZHXr22",
  "key16": "vP6feVWyf4zsCb4ejniwwdCL2yqM85FSBF7kbZZVQUNS287KNm3KXQwomimTeujE6dPo3ARD1fXnj49XbKhPpnu",
  "key17": "5NLMPnnnw9yjssnMU8WMAZTcpSjAdLrQj5dCvQ2bH2hgkCRprNG7W2cVG5Ptz5gWKWoeGpfqsCYai9XmxnnnZvNk",
  "key18": "4tt7QBL8UPZuAYQov2nrHcJUXZxXgNXG3yKnBGvpZb2bD9eezoR4PDHvwjygvkCDH84HeavxeSTKeCuoit2EpSWM",
  "key19": "3uczP5aZWy1SWXEwjhRSpnFyLHmVf2aXa5yFqdT7eMrc3HUH1a793DFy2WVKMAiZknYkpftk4JbC7xRMRvsV5Xmg",
  "key20": "5ubi8Gp8mg2MFhouH3XgfRhcww9coG1axovBT8obBhAkiiGcfsGLUR1L1JGjn5DMr7VKiX6vCijsEaF1NdbFkPsW",
  "key21": "zWjg5MpDG7D9W5Sebm2UykjwNHGpDuMo3AL2yVyAcSAiz4erS6XeJDb3FCmAc51Q7wrXem9nkVRxZHZawqyfr72",
  "key22": "2oWiLx5C9stqGuwkfrB8pzcVT7EyfKWMZywjxUWrQLTW87VNMhFYvGfrunQYwgJ9DmZQLFParpzEFDDXFgC52FTJ",
  "key23": "2hudxKQ1grMatUp5uxNJqz7kD7uSyLw4UJ2x3xsoRGNtUD5u8Z36GJvZhvXS4CLXa3TjfAYisPXU8jWzdKeTF2GH",
  "key24": "5H8Vg3MJnhArH4bmGFxQE35KAMEBMpqsKkEQnGSssHLL3fz2pFReAiZN5u8XgrwMnapRQGKq8TktU61V3AMzFa61"
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
