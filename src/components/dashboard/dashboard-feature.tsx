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
    "2jeuPqSwThFHwR4TMgDzvWPWyDbLxnE2bxh2NZhn888S6s8h5n3sQY3fwdaJBjMhy3JvncDdcjFeADsVaPxQsV1C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cBzfBzbomRYqV9JM9K9TB6Spwva7oGJtM4ft3AYt7Nxop2LjUjJcgbWJaz5UezzLiAQg83uLnJngLxtyUgoyp73",
  "key1": "2yAU5XqnmsCxxYnyy9FCo9mjN2jn9bKEeKnknArsXcPkxpLrkDY6r2xxctiuRF8Qi4bTyrSBq7kYFcaD57y4Tkpx",
  "key2": "57VqzVzaJN36478FVJ3GdVYLXNrM8ULKM8ND19MsEzUuE75RS6hM2Verjzuue76g4XDYNi5ndnkFEWXPHVpqHBi8",
  "key3": "515w5Z6PTdiH8sLcmhmg7voAdDP8HJSTyr4RTM1EdRR2RQPC9cQqnp2BXHmj2EsQ8PyvzSuyuBPAo9Xov4UM9PwK",
  "key4": "4VoUsMCBiH4ZP8gCAYu32JB3PcGCaMKt7ByeVfSoDVjgUhzGXs6fk4MaNHQecxymrAYUaT6apnBBXisyA5Ta6tS4",
  "key5": "4V4tmBGBYgpNjFT3Dbt3YNh8c4Yvq9jgL4XASSCzjTKNQVMa4Sfh42kBPTfTAGjcq8o3CKbHgCKWRcS3xfmmpyRj",
  "key6": "5oKN8iSNngePvbh9k2B3i1MS7tu8qya22ipDo79WA33EAjsoUCJmHaGNL6aGkJnEJnWWi1pdSqTJhqTa8wKWza2r",
  "key7": "2hnhSN5tBqNUczHWu5rHnYMhpov8ogGpzy4bgeFcLAUZrCmiXf1HX6PAjN2pDHE7czCsEDzZpTgSBXHEfZapfbXN",
  "key8": "5DEcFbTXXehDxLDizkBDSJ72DxrmZ5hQcEMLpcRUkYhziqDLPRyE6Z4fVvQ63mhpJYNcg3bqZx9HExKyuNesLzmv",
  "key9": "52KLb8WSoAvDr3n29CWuxqegs3xX7xmZtHpVjvD5Nvsr4s9fbssQ6xrXy36RxiFKH4ZmaVqCMgVayNA6ZBEs6Uxt",
  "key10": "4kFnUp2j8LND39gmV4cy2cAVaBEo4AqzKWDX84KoA6pT7HAXaEet9dMdN9G6RENGjUGBTgCUFj4t8tsVNrGFmGgy",
  "key11": "MQuzdvCR1xzPrHdSz51ebvLiuK6v1SFH8MYjg4bkE6AoZ6teUQzFkwgKKVZUnGqhsU2qKKsCZhZA2CDjiFUPJbt",
  "key12": "5dALKeKpzjuQDefPv3b9be9GBsdqgPtWATRyW5jhKVCwBavkQMAmN3KNfXP3sdM9SSFGPQDvji3eFawu54i4asrK",
  "key13": "4Dm3jYEu2P7aGFXBQkUqEnpqfLscV6iiyYAeJtAkD7nAF4LWWAvNY99JaoMZ6JQimK7SBnBD59m7ZrfA14KPqRnB",
  "key14": "8K1uTTtbTFYNhs8Y9du92GYmt1fmEkEw24FCFtuwNHoVGNrHiHHFLyeADeW4SyAWn9iciFcDJsfMKeoMFy7HrUd",
  "key15": "4ReSaVc5izJ7BNC3iMqQYoSCuwwH9MFSneG9mdwV2Jm7RPtt7L7h3BCKTexJahnt1rmuMAtkjfpMxFNtCLtTvimW",
  "key16": "5Ka4MddCfKfvPHEaxnxNqggNa3Pzj83GMPFNqoUmbnadm2vfq2pPyYbSfGyBt9ehcKbgvRYzMhwqwvMDmLHpg4ip",
  "key17": "2MhG6iw9Nif6VApw94poN21nLzWE4yRPf6T76tM9N3HhoujMn8rKNiJhw1wtTVpd4CJraVasnrRDyE4PvFgApPqc",
  "key18": "3z33PfXukDLFg5BiQePqL9Vas7YFeHg9tBhaRa5b2ew2zrGh2ER5yEVJG4pE2WgVtTYPpKCD8UE7mhdHqKvqyqBo",
  "key19": "1UmQoXoyRdyAyrayv35KwwrKiiJE5sLii6EQ51U6AD9eiot2RbvPgejotVWvucQgShAw1Vhrwewo7dp66oCvfZu",
  "key20": "4oz5PvZw39snHTx9SiyJ8Hyv2ob5VNeb9MxbxJFhp1zb6trfhCbhu1Fbc7SeWdpspg2odUccVPX8jNWB7tw8bBUi",
  "key21": "5mRenuJFSTFXEPz4im8wio4Agb3SzqP2ujsw8dhQkStSy3gVxDqPcXb7WvH9p12YdATf5JLweZmSjTUhz672K6i6",
  "key22": "hpkMHnf73Fw1yv9RUjnqHzCEYv4xMgf2FMVU1wAcWtxpD1DqYL5vBbkPqBqj4XQwhMT7db4xRMP2e4NSHi6twqR",
  "key23": "4cYsDGG52JgVVETf5uAJvWGXYBTRcbwfVGhuSjF5ayNEvBhSf1PF1YFaStfztqy2Z1ZNXSVY1u5CdQ9K8LgUrFsE",
  "key24": "3kVdzuu6BEe8KVPMk5YBzKyCNYDZuvWv44XcFe5pdDjJoumNBsAqbDmMnEufwrZSZRRMsjCxKYpQgADt2FwbXAew",
  "key25": "5417qDVNue6JJvRHUbeBa3jJAEnc8ZaEVSWJAfwqUP1eGvLSo4cSJgDb5paj66wvbphve7KtsQXjnBs95wHeioQW",
  "key26": "oyf1Qg2DotyVyoxRa9UXwf4RLvtr58gt8wFak2VXhhqnpxdn84BXREKfene2a4G3coe8voSauV6v8Mc1yRH6KC1",
  "key27": "4K5Xhav5VMFcfu9kCZvZRYKvPqm3an1Gp9ASNPgbWMdkwvrdZa5Z6h2o5EudCNGjCka7m871rxHafXgG8M2fYave",
  "key28": "621TDeGY7cGvrpdLCtPuKEinzqKqiFqmE6aAPHNLSU4cfDVeNxWBbHBQmEVM9B3siwwXhTdLSCuzkaLhESV9UMEW",
  "key29": "3EuW416NKSK5wGqsqwdKvtTT5rZytfQAaShxzgQVzZUC2bJZkkv4iB4CjbA7NWy5qwsdgEpxBG1DCbMKD7BHuQip"
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
