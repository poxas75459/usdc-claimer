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
    "4F1MBYuy8zwHFoVQkpYfMjJi13EqXxHwRQBBoz9hQFcUkYVchcA7BNXyWyDpzFfxLnEDwv39zkLMB8NqrJcaTvsa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "385UzYBLPjDN1e6rZ8EoqjGA4DEYoteY1ENAA1H1LrmtYPR6vCkRWzpNiNP6JQpu86aSvavgsvUEoeZSPuvdzwM2",
  "key1": "5LgQiG2bEMy3WdKRBTwHETUgdMJQWvjbQHGKQKvtx1Z45fGPysVVRftgUNavZRzMLFH7bbzJ9nzHUzNDWvSX7sE",
  "key2": "3Cr7TMVtpkBwzfQ3CCn8Sq8XJbLLST4yZ9qhddMBFsrMUQxYzmSh4LJL7bEUKmS11En1VG1mgKXEcQ93Ws91VSsw",
  "key3": "4j5UZ4wX8z7E9C9pLsGEW7jZAi3eDrAn8jKeiYff9ceaak8ngPqR5FDv7AVEjD8wqwwcGkadRVoqvVQN4FbRcrr5",
  "key4": "35mCko2NdfFmQujo6meYNjbSk1dj93PYJZcYUwbS49jsSn2fQe6aCtYYM63M7391CRtBFSvZDKx29bTytRUTZPPu",
  "key5": "66nsvZq4tTFGGqzxx6wbfTeJyh8Tg8AEj6oE5ThGLx55oNk2pHGK4QKKrM7E9jAK2jVMNRtrPviBj6PdNfPvi1Tu",
  "key6": "4GE43FacPGF7rrTHMPRqXDiD1tH2Ag8dDugZTJNdZT9RXBvBNnHhzzZHT2C67S7MgkWR11G164BSoz5GVctRxoMD",
  "key7": "5jEssQrrCgSmeWFpSAyz26WmpX2Xfq71pdL1d7umwDVfDjRCFoTkvJsLizDcRFZ5YHAnZs6ZstZtfp3TGuyoBnNY",
  "key8": "4nABNRiBn18CjwU1qwJsemZi6EB58wK7jrJASi2NiRbXTvcaGbmhxUbdgQEBgjBnLiorRFqVQgzSzuNjDHLwUsU4",
  "key9": "5mTeCbvCRXcetUwJ6eMPEtDDHUrUN312bHPMLWS5bFx5haVvPWCRsm7TEMLzYsMui25EdeKP4jT6rirbbqhnxQeH",
  "key10": "3bPaneFU5TEV8VtBXppAdAg3GNzrKt15KuMZwnRgfxqt1J6wiHsh7Dd2ZBqmhAy1tgm7krTNQv9q6W36x714NYVF",
  "key11": "2xMHYbAE8FqBTG7jg4GbVr6quAbgNFmqgitdgJkZPciANu1G3YB19PxgC1uomNnLHXBRzPsdV1UiYzoVJALtSXAF",
  "key12": "66bdDNUvWv3Zbucs2LfAmeDdia9ppiftN5r7ogfsYm8p4eWBTKekAtXrwNoYNT2wewFmkJoafpqAjCi3fiHNAWJj",
  "key13": "3BGPAwtDyvHarcgbK3hcpVtwi6TSzEjA84mnV7zgeS83aub8TwRNdZrHGYpbkNM8Xetfvgfiw1ThHJBrR3WvGhNW",
  "key14": "4ZygSPQxB67vAANcnNwZVa86JzuhnXohh75H4DhEmZqKcZuWiHgeeWqQW9JcdfqdWisgJrfxWFrsgtQxdSHpcsgb",
  "key15": "3Zt3EEiAHDTBdC2zTjZJ3HaYjuQGpVNLMmoCu75XMtixVFtSqEExowmu2f2CKcyG78fsyNGF7BQjgfYQg6Lqp2nn",
  "key16": "4zjB76ZvVNjpxVCWDVLWBM8gsvyuks7hCh7SmZVaKt2UYBapHUBMnDnpZqygJ8GyPLCeUFn4tNTcc91WLRgsvZ5t",
  "key17": "4kAr8iTjfCDocnAtjhYkQSr1gjo21sGPVEEV1prLatyHG5oNsBJUWUWCSnFmhC7u3aF8u2DPGrajTvUVWeVTfJdj",
  "key18": "S3SdVSqP7bFurHRGQt4Ty3Q8AUjkQX2gdwS9VD7ZoUZzemWDJpJb14F6PwL9YWNTrfQkps245XTWxTCvkCKaHod",
  "key19": "43T1RkzivVvV56k5JZg5mUufSc1B9JR7b7vYjUJVFM7SfV1iLTK5eP7mrxojh4YnADpocjyVhsHTaU6ap2tmDm6E",
  "key20": "4mSY52ia8xfcWxYcGRewb915kESmGcDEPLhLZfRk9E9kp1d2UfdEtuJAxAtac3bsryfHoaxtBBoufo7HW7V3HRVe",
  "key21": "v36uVDbiqQGwFB8VYLCx8wJAnpCBohrpZmpffXvLDKJ2nyheDSwUNVAesnv9GkLZHPUu6cFA9RDogTke22RBrwn",
  "key22": "2VfEFRTjmV83wZMZ2ibLwQSxWHNdmLuR424KnjLXiix5XYvr4yFTkHAW7u8dnnqHpCoTSVPir29FFj8dgyc8gLtE",
  "key23": "4Edwimh5DoYi9ocAk8tAahpRjzm1VCGEQZtEydPmwRHi5EVk4b2aCDofXx6HgRRRH6NgGKRPyRd8SfHoCVSAXrTS",
  "key24": "4zgxJJga3SZL8DH2xFTmCVFke1b9T8YTGvFBeAsn2Uf5mgvUaJ7yb87wZgFNbUZF4gMx22Bj55MARzUU6gSprLbp",
  "key25": "5ma1H41SyR947hN8czb2mphKi3t1opySwvvPL7GRtToxyqhEk5CgfN1PpRVDscd7Luof9u9zgx3oh8NsygAZfu7o",
  "key26": "J4wMAZkzKAcG21cQJZHKbL9ujD9LBcaXb3mv7phJJBqvQKQ5vgH8WxC3BToqAZFat9tgPDnifRiXDkTFa4uhpnF"
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
