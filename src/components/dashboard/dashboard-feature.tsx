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
    "YDFtU1UoGiwZhxfvRvQYanbFLS33opUKQod4dXebesqNSgEqnCx1UkmUCK9v1E3CbM5XUgLWu22n6uMMz8LVVdj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p3qHAogTRiQ6B9bGBcZPAv2bZXNtqzppg7adb1BdcPGyaiRAzeiBxSAPeU4easjqSpi3Jbkpr17Ag5Fr866Q9W1",
  "key1": "2Mk1JQyCn8qmokpMff8N35LDCSr3XjtRPz5M323GJzWfZFtLCx6rHPg1BhEmHhHe2cuemqNMEJuEYf3JyFqytzE4",
  "key2": "24zKepTnpAvnxxK2kHtTMvPTdDEmADRjtdXMcnhYwaAZ5rnniLenJeiwEyPmL1bALPTpNUMZwR2xzrDJ7EL1xQge",
  "key3": "uFxvx4RBYeB1e5heVsDxinGkj5D7xZnLiHgkSyEUh3Pt3F42j6cUkzswZGGbW224W1L8HsdpRsq9rLsWE5MfMGi",
  "key4": "3sXKd5izsqRhSGsd6ybgCu8dDupYq19uzxH4pmbXRsBFynXa5i45WdW4K1cH3HtvXvri6gwL6fTUMuYaNRrBadRT",
  "key5": "3YpkB7C4VejteyfqWB9Npqwo7aFxCquRLzQkRcMwn8BLyB2fHnHvb99sWnqekiSoXuhVyY37QWuXsoq2iqJVQ4Aq",
  "key6": "5xvLUU56NfKbUQQdYMUcND1pH7meMjryTdE6vp2HJfw8ArX752JTJK4iRyuCzfme12HLH9qxb5peu5u7tGrjYhB1",
  "key7": "2pg3QJbDM4Bo4idC8WEodbYPnbMUMyPVh5owyk8gx3DKeK2Rz9kyEsUK9NFZyNKo9VkwkbjMaq387pSe9xPBhGMr",
  "key8": "dx7pMPetMJeWEZ5Esc9nQJwfwzRDp4irAxcQLu2KQbpheA5pUk958nc2koQeiSRvGbvVVQKeTrwRyuUQAvHG9T8",
  "key9": "35RdnXSkEqvX5wNPbnMFC7YWv2a6vDBncgnqNjvdgTwKigkJZkos7Z1hpZZV1wNky8NE8wbyZy1ewi4iTzqrHRYM",
  "key10": "2kWrrkg5eAZ56KetcEx7kDLFMZ1PSLpa3GBSJsnEyRjrcXPSYSMVkDAXseqhpFpZrfQPiVhUgHXbRufRp69ZG43u",
  "key11": "KJP8PQD9EBc33fREEmQ3HTEGZTc6mmXVfmsUEQNHgvrnDcBSRqNpznagvskVoYDHKGHQ7ocSgt1PsevYfNUH25o",
  "key12": "4T5EDs1xZhWYT9ujM6ntojPxpXNzvwbM5n7L895wBdQ43iQjdjr7mvYGtFYTcUzi5FUSy6rXExQcFcRPVP8YZtTZ",
  "key13": "4k26sPs1hjZyg9ZWnDyt9RXfFvjiLZKhuwpzZ4fzsmzyhWwwqL82YHs6whh7adcepS1Y74UM34uE1sKJH3sbyu7F",
  "key14": "43z7znVDHx4w5FocbaWrY11PYAGWxS59W7DU2A7pXoLY6eovwwMfqDyJktYg97rHYWqXFW9Hf9PHXUUSz9e1ipGE",
  "key15": "2ifp8a9ZEBPHRDEzrUrUK3wqEQVfwyC8fik9APFKiFxEiDgHFgH3pcPQYfJbB5sTWUCxw4jXADrjdWCcKo88tBs3",
  "key16": "JGhUrBC46fBpuoV2m8LsefUvxuBBmpte8AGceNHLYmLYjqa9EjoZmXHtak2vDjpCZFFiJ6fnusvgzTXXhDQuDu7",
  "key17": "4xXARyQhWZ9LXJXseq4MUGT2SbAjJMkCTLuCaqWymQQMMPxu1u6RxN1yc4E6RCftDnBc3aKQhecYsZim9cXG6q2e",
  "key18": "59rxKwDWySZkGAfBeHFUQEFYX87svaGZqWEqiXoVehMRr7uWMwoPaj866dmntcVkAAp1jimE85P3TtASi2ikg9Y1",
  "key19": "432rD7rNo7RcY8QworHEANAP5c9tXWjpseGMVsj8zFTwrJk2XA7bqJNmAa4kQTAA577pRR8reg3ordWKKSv8qDg5",
  "key20": "61DzxSGtF5Hfzo6GJM3me65xz9EUUFSgSQ6THxpArGXEBybGtp9r1DuJFgkqac8GvqKrsXd9pVp3b2k3SVz8WFD4",
  "key21": "5QyTyRxb38dMQGV5MpsspBNNFE4zr8C9r2bNn8wTApaGfJXRn33VkpDadGxz1Eu2SAracgMKkxwk5tD5Z58V2ut6",
  "key22": "2nJ5sf7CSfboL7Fze11CE2MRJQXVBRbG1GzijeTxAo882n8Wc5tha92DE68GsQCHf7C1WtLWqD2FrgRjiMcuhdzz",
  "key23": "vssjc7jukTFyae2KNRAhtKgsdXvxZYUHwwdC5uJtcErj3dvNLkf3qm4m49rNi4DwAs1iUdcBz2JLQwdYmecm2rp",
  "key24": "2b5zdvrNGMitk5mP5GYPzE56pZrBQ43M9R96ftKrUTCHmZmH1fdFfJYJknja5fff5SpZWVkChr17YVaVwzcKsnzi",
  "key25": "2hKtqvS1nWJAeH5DLJ8fojxSfmVqfaWMT1n96acrVQdWCgXFUBvaS6hQngKgBKkZXHEink6RDaYjxazYsyD6vazx",
  "key26": "5XVjv4MxJnvJvAynubXCGCD33PkmgU5cyjX1VnTGF9FHbbwPdnEHSm6YBCFdMWAeeTgtNhkvKm8NJvN4GxvY6kgq",
  "key27": "4Pdt8sczYPsQcKYmgk8qFDjZW5mCCMeqfjfFZCJkVrD3gJgNJEdTba76rTw8wxJ2MrZ5a1HZGteW5HcaKWSMf1Rz",
  "key28": "2DUZiFBZUazuNwJJoGdCeby92s432uftcDhy5jEbK4vcreHNJsNoULvH2xVVE4cvdcKxjxqjBvUSkKkfWXTn3p2B"
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
