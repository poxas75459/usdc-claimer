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
    "2xMXEE8e97Bq46y5DzXGSpWoLAtSeoPPZ4pZDBrdUcKRxDa3VNDEesZ6DYLyVVX2QouTtdLFMauGC4oFfnfg22nM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ATk9ELQHJct2nJp4aJHKxSFMAeZkMyMX1Dtt6i9Jub8ydGbENAf22HZXSmwu2YwMS2PX4MrdVjbc9V7HBDwzVCf",
  "key1": "4e4LEkQAaPDWRqXtgqWMhExVyYGQF4uE3EPSzTMHmJPcciPJf5Scw3zDa48D6eJ81Z3XhLMTQfUGYL9QywSp4UCs",
  "key2": "5CaeGajR4qvKB3aeRJdUkJQLCcV6f2PLGpw5uYyNTyzPX2D9aBG8p8NZaHwb68GfNTuwpUSGgm2EwUggaFSSiFfv",
  "key3": "5ja8eSnyX9HvhDn9Wiz3QtYR6ufiRLTbSaVvb54ojXDUuAbd1Nri2p4ieUEWQ448mjbatGsXyDaipZzzXcBpvNN8",
  "key4": "UcFH82Y4W7caXqELgu8oJdkZhAAogyRJHfJ5sgPcWAzjAZ3bbxpHngCy2B38FHwZzJuwBhVL5gsZ1qmsPjWfvVn",
  "key5": "3o95JijTs7DwXu8skAZNUyiMp2Goq1C4dKEZhSHXrPEZ1kZ6bAkjZgJPee7y5hG9QmJ1u9JW6kYyp2WixK3YTdkb",
  "key6": "2AabKs5yhtAzdXuXmPShnuHpYxUwtbipfVcRA1CfiGtH7ebLZoeLDbtPMdsUcSTs58knM1mDzrbxSY1DQXJJWZhz",
  "key7": "52zWFxrMFvKKoWfVJuEGtLB7Y1qk1ecfZGzEQ6Fy9fX62mhcZUKzcohU3taGxpjDFGQyB8A5kgdLDgi4QNDk6Cbw",
  "key8": "Yw7vL3qQyMB6SvTCXSUgjYm2X2Yke66VcNcZCoFPVchx6d8Mu41Y1vMVZnEKKUewPehn9h7bJFn2fMMXpZmC5gL",
  "key9": "2TExq1jPPqVkZLZNukMz7QK9AUK4GCFj4gkj35XbLxRtKVmQZeSt1YyrMDhCp72JF7zVX1ZaNFRx6krZ9GQT7Bee",
  "key10": "2VGS5vkXuFqUes7gtQNdme585M9htLZrfUsDWK2DwFBWUaoBiuBSjjefu2C8WqMZ5m4VvGK8C72nc1hVb9yYm18L",
  "key11": "3k5LCt64Jo6YxQz2yBSpTnv8SoAaeTVeSqkrr8U2t9YLwiCSue6XHwCR5irZLgsXMUyyPHyZnon1mTTMH9JMXicC",
  "key12": "3dMnLup8sUnPRcijjMn3LT9Zfxdtdb8UVxvEPSLjUuwe7ujhq2JKhnRom9GERE37viZfLBYiWbx1fu1EeBzbGjS4",
  "key13": "27orj57H1ZEtGynzKBUoeE1xeg6PqfJdr7MvBjMHAUttvfPQFMVftiJE3SxNEFUvjtLaiyjyJ662qn6rjXM6neAi",
  "key14": "5ftr7Hz4nBdFVgyHszoTNBrg5h3M8mjijrXwMU4NiRdK7RfvuDiqtqmRKzya3qRLUHLA4EtGXFWxvFNnFKhdaSK1",
  "key15": "dxoLRzwGZpygKrQQAM7VfswKTHoQxGZfkLmxdXhknA6dDUTuT84CHQdqAoZjYR8fdqTe3qz7nqz19UZnZ7Nsryj",
  "key16": "5JtfevTyEv74QRjxr457KAMiC4mqthMf1d4YDDzNYQXZ16u5xK2KxteEA3bAEKSpCxeca32XZukGNSS4nBxvYcNr",
  "key17": "4vybXZS1Cw97EG5BymmbTLwxMFMYNAjNhPzaFYbTuCtVY1deGQKM4zLzEea8AywY2CfagkAzeSSxmeqHRDEN8ToV",
  "key18": "33sRftMqM7DzDkr4DegmhyGkQuPYM8H4oVUhnV4aD7RsfUWN9aY7LWx1cVKaRL4ckHRdMA1TZTzGNrsDtmxYL1yT",
  "key19": "5GNyGp5ELHAchat4EYsEaz2jJjZgZhp5sc9VC3TQJ7ycnwm3s8cDaWdu83VuwcN8Yd1hGbpZzznGd2GjFwFJAUpj",
  "key20": "4BMa75G4hiuuK6uBWccqLwUTpe6AaDDUVt9ogsPGVbPE94CqJksh8cgqV5h3FdkhzGmxNnREW5HvHz9H9fdSeKQW",
  "key21": "5Z4jgNc47CeDwgVHJSGmRJmigk2Lc9MVsVKmNDpcuFFFZ4365fnJSkCQ6ojHEDGTFKVixqxMsMaG5shGSB17CTyM",
  "key22": "29kdmtnuMn322ZpZnDgEexydd636ufhbYxBDU7Dj7i9yxZDgmAWn89FuAhnt2tiGDkZK9tLMazsakQGdgqWUJfSU",
  "key23": "2k1UQv4oX4XUYWfo2zEaubsjUZayU2TNNoSMRUrATptgXfJ5pAyU3T9ZpPqpd2swVSiUm6vmkxpiiPmfjDgcRTCJ",
  "key24": "4KFnW2dvfYZFKdzyHVVbhZaBMyPezUk4HQiZmVCg3boRwixiKyiW6QVs3gnSzUsN6Ya1ToPSVJTbeeQAaoxfTMN8",
  "key25": "47B6JJivcdT8mPkVMfbLDAyFBhNxhmrMARTLcR9LfumfAZG2WE5qQksqaW6ktZqPK3tDgo2aTB7hVMgRQ97ygkbM",
  "key26": "2sqknPsPf9j865AYjYPXpkmnYaMMyFSteJLXLv5ucUsZQYyCo58Do7zK9KqVWAD7buGL15KEehRxrihXrn9YDrsG",
  "key27": "ZL2AEg5wz9weVSnuPPwvKVgp2LuVzSy1978q7ovQzFdGbTMnZi7fkSWRx26Vcqry2cnqHT6i4F3gzotVW1ytBEX",
  "key28": "3LLuSmRgJ99rHt5LJCvdYqSnk49NibbUyq4wRyxwRNZ3MPfLQkkTZnp4hKL9PHSgnGNUrrSc9aE3FbcB4KMHMBmh",
  "key29": "3bKR7vaaQzRdsAumAPJPgEMV1tKVCHr6d1ke9zisQRRNZwjcredL57RuNXBsJUDGz3fa3oThajx3ZJYLonxTNJ1Y",
  "key30": "36wzbP5CtTQubzc1LAJMutqiNauRRa6r6f7CjGksc6qq4afMEVs2JxsM3mND2fLfk2SXfHRESz7zoeZZ2ofEd1yc"
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
