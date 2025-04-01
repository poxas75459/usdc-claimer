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
    "5g96Eg7s8WX58dMKdLUbiyjxQAfDevpRfXFoR4Lp41jLLDYGWkYeMosZF8axW2RqiPVoWnetmf5X9Whhkc4y8d1T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sErPjS5yUug1FGYbnvXvtC68TR8hMcmibXMwr3CoUzwzMUyPwYGEmPdcyKWaHZdmxGnDa5QezESjFSRJNMETvqj",
  "key1": "3A3MgxZLzuWq92oAhkUd36E4DAtJyLNS6Hnr2gtwR9iFuoubPzwiDCEoHhqtdw8D1yFxEz636ggA3tncicHcvGYp",
  "key2": "2HaDYFQ5VYZwKqhaJC2WUKAvtnDdhAUZ1ZP8AyZVaoiUn9FQFff31dXpNDrJsy2W2zLAeeLXTkrY6Ca3pBDb9cdu",
  "key3": "5iau9WzaRu8yt2PuePK5mtjqwFyf9uy3WqXogBipCSYeqfjpoT2mKQ44xNdXWWYtLKEqmLDDoDU3enEtYvaxra6Y",
  "key4": "5k8AyLE4X3RZ2uZXuiwyguDghJGwn4tcrDu4PxdXs5cAqgEr1vPe76UGRH434JQzqS6Z1uypEXwvVJP2i6upHHg2",
  "key5": "4zTD68BTTmJdbazJrxtSh7cqjdWjBqz4ZB66w7TMk6JNapYQpAgynHHueaZrufaNhhEYis8M1BHL8kXrXcRnYZ8g",
  "key6": "51emXLfNi2HfNAgC92jyDsMhL87Tv5UqFoVdeAYPJ3hJ2Tbq8222rgiM9pd5LZRTVtMAsT2b5uz5dfdqUiRyy3EL",
  "key7": "39Ne4YWjxZnv1VCPEChZs4Cpk9CRVQDyhGjQricYHStQHr8ZRNBAHvVbE1rYB9uLChknn8KtkMhdaoVjRZ8gdDvk",
  "key8": "5wFs5vrKvN8XJ7Hb4TF93DnXdneLrgFEU36vqW5m47skF6DXX5nQarJrA31meyNw7Q8BM3EDvBdtQ6F5iX55gs9S",
  "key9": "578Hpmobr5mAHtDALoHYwprqbkYnwFRX6JFFwtC25c4321tnun5H9dXRtz2zdXiqckvJV98LQd6bRqbj5XEvdCs9",
  "key10": "5XdSJBKN9xuJG8BewhYxYwzYpiRjC8Sf2XdZmFdzSZmHxHJsJLQXAQmFxsUijFxWonKBX5uXiRdQAyT5spanjdYz",
  "key11": "q4BH7JHsQqzKh38eZAAabYNyzycgHJPQc6Z6B7QDVPuXSEXLETxEmZJVkgR9qiNmP4KyhysfK2XM5MsdFaTGh66",
  "key12": "2UQRSM7wAWXyMq3K6x3mKcQ8vaXim3Gg4YqrLTL9grzj8x7PuPot8WPNuUvcGh2AtJDfQsw1nZirkkhbDbrQ5oGr",
  "key13": "5pu8WBVSo6Hf8njJjfJGkvbyFaSHfDZWuMTWg68t13WZaaG5BKa6n3Lo47Qi94vmtEaxvvEz7DFAWFrNfDaFz5fL",
  "key14": "4hPyWDzVdPcFVH4oYM5QFJxVejEpEW5C12EFsevW5CHe5DJZ8adJMLiisd91uGnRAnCoe3y8AdbKFhhjLkkvgTyj",
  "key15": "JyNRaxQcvaz2LNa1nYZpEp67wChKPThx3sSveDxJQbrzeLxSZ1aRmZXA5yfi6ZBMey89y2AGy39uvVZ9kzBvugX",
  "key16": "5xG7PcQBZgeRBofK25xHPq6yqCgfY2qkU6BzAXP1JFh1WcJnYoHfAY1rqPJVkeo3iGK2MDBZKgDzQCpcfk2AV6BP",
  "key17": "2DHbpVmfphnALpuBYy4YPyxhMPSEgAyKanmmJpToUZ8VZkURNdUHow6HUSasTQ8dzSY697UWx6yPNKHSQ4Xo8T6g",
  "key18": "4StrkKAtAcu9GM3kJpjoWJ2LhXrzcyeYTE1S76CQ2E5PADSsTQcAfoY4wh1z4PW4XLoyB9DsVyGcyuf2axTQW5AX",
  "key19": "3zJBDs2Nq77gAUNwdhXDEPZPjnMgWx4SfmHhXs9TUtVMKbRRCTgwrMqR8wZMZ3dGDy2vwxMW1JYVfXNJKvuG7puy",
  "key20": "5PLA1mfpkTAFVyMchC3RYhDJECywpqmCBwZn16QkWm2VRMU5DkTpURnH7GxQwkWcqhKUmtWjYyAaBms62cHXeyRk",
  "key21": "8gn1qKyyPWmv1hKCcPhFng7pCz9KAwKfN4HzVNXQYe2PGCfBiKbPXMcn4GpWNVra4KUwSYs9YqnfwQqbt1zJKrE",
  "key22": "2C8s5yL3xbH3YcLDmk2fVoAJu5dTgB8SYQi5jHT3eYGpczuCViAcsf4FRDFoDpePhoextSGHb3id61MfYvjUhqKy",
  "key23": "2KqBF973xpQsp2V5PMjJe7EpjqiuCSWQHSkNm89FaDFGcvaTgHZgRrASrbgQJbfF4LDAPGC6ihWYgJYFaZpgZsgZ",
  "key24": "2K9NacbxN38E6ca4uAYs6QDbo3Bt9hGYwBFVSKgXFiJwXvxDBdw5pSJB1Kw8mGeTPQq6Bspc4rZ5pzRcAm2xcSfu",
  "key25": "AvTAFnPW8jRjdeFiBxLv4PUvmRZ7PHMw71nTA2cWyJAEQai8HMHHs4Ar9BccWc9cJ58ceT8JHv3qhbTBqvaB7eb",
  "key26": "3kPZoWaLUYXuL6nt9QSfwoHGUDwt54oqitb9uNk5r4drNhoWN952nuYZfC3RHiXvPH36ByT6416nH5EVrBixZ1de",
  "key27": "2pe5zirM2JMHPUAa5hN4jVLhSYWsqWh4H1mK4qbZ34mHHwTi2TjN3GEKhPAdSNn7HxbAjGJ7YpFF2skUvPceS47y",
  "key28": "4h1udXs8hvQDujhDeW2pjUCuCCXamV6GMt3VxXJWVufR5RKfMVVYBzZuPw65gteH1VUWoTSUG2rBW9hLJFyDjDeF",
  "key29": "5s1aCAAwdG8BQo3mfmS5JxMtVLF68VPugiaD8aMJ8JsLBhfjeStvW7TNGo88h97TTe8pptAvcdqP6BPuJJ3smF34"
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
