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
    "5zKktjvpJLeqwxUwUMVd7EbzX7zTKDrgvPUYaZjxScDdED5sT18gLYdE5KxukC8D9Exgp4aeZP177dZourjSv1Sz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XL6wf1FGgeE7AK1F7p7vX7PeBgybur3xL7RJWPyEbdzEYDfGsZQxmdGEcP9bRuBH9dUy1rxgoGwxSJdDHhSRkox",
  "key1": "2KkArzAT73DSaVtuc9cTVGuhfoQhJe4z6KwbXQbj728CTuhjDTHPuJ8qrhNSrE8Ct3TUsZj475jbeFB8ggx97DVf",
  "key2": "26T6mEoxrFGhNc2ydm8Voz1M41UyBLYyp7q26Mhf32aurNUtTU285TVkKqAauV7RrcCkVga777kNw6DSbhKoumQU",
  "key3": "2TREAieTSAzAPS7fBumFouJPq6p5WrVL68jysVopF6961EnMqGN1ViPDvw7dzEf6b9gEjJZWo64CTKtpnXEeAWb4",
  "key4": "H4Rk96eXcihg2KFqD5LzUTK34a6VNPJuyjQ79Vh6P7UV1DE9QggdtsTQppGXNR2RjPauRfrG3s3oedYRLWrD8Lq",
  "key5": "2pnUmCYeEpBnfA8997Lmi9DgURAZHkcSJFKWwY8cWE9Q3V6Z9SLaFDeTBaYbApkiXDUcZ1aJLAzdt5BgmDcHfAX6",
  "key6": "3zQ7UHB2AJ5VyrM2MACSc7wcGijXvCon2pTB3hPrqhKM6wWu33WRwZMQuoYBuaWZ9GfovaVjB9VwvoZKVi7g4n33",
  "key7": "4wPGHFK58WaX2Ei9QGqmuJ5yasrgN6amQkhkrJbHEDQgg1warYQvm8v77DekUdhgUzbFHNuus4AKXm7Kw1SUiTUE",
  "key8": "wTv7VHMtw3usYaCtpjK4uwjXoCtp1hUNtR1x4zAoeU2YdTh9GATrX11NBAGaYYysD9KmekDkE7JLk3tE4CeZ2J8",
  "key9": "2gm1HnrsH6FB6GGV8ZsCTpZH9H1ruDofuJ79nk4B7ePcN2Envy9Kv9NwPhkDaFdDW7pYgkhYqzywFDZ8Ns58EhM7",
  "key10": "5sVATQcNUiB6GEFFE2JApmTShQcrhfpxMQHaTSHJ53Rd4C4Vp4YtUMpj3XUT3jxGTXtT6zR9y1FPsBSYhYKKqHYi",
  "key11": "86LJa8kxyxh5bAZS5kUXwKsFbTmrpWmNqAKaUXjVCFbDkLZGFuojDGp8GGkShapJgCoiTmyoJgXwvkB1fibHhMQ",
  "key12": "HxxsT753DyfryCT6uKC5fvLVUgRUv9zxkvCskCQPM88ExVbTmv1LFBJxEGfC8JLW9TcFZCaYGEnuXAkinK2AZUT",
  "key13": "3W37ScZS49rc5MNSJ1iYMN5M4wH6gCnL7zhhzeDWdfr4pUvhbHD1VVszpqWWYePKrAyGfB3Pv2ghR8cUZA5yGg9X",
  "key14": "2Bq2fhyR5Sw4QAteigoRCDZDvLS4DVjiTkGduEaA3foFDQCHaNB4QW1ScucTTNDf5rmRC4KznEfyJu1CcnuamLio",
  "key15": "4PFiUeV2qdYztDaQpAFmutiar6M2Ee7nsf6F8waaFqx6X9vySEzVmHHAHecsqkgQNsxFKmZEdVMYbUmcBGq6EKKe",
  "key16": "4WJxc1HPFQFx4CJUgGdBQWzaJZei89cZYX9Xiyz9URzZJXG86bgzpUTfoXdqDz3QaLudbA1KYhkP5eM4GwRAufHR",
  "key17": "3uFNnGvjMCj9Sk53Sx9LqarK9gcBeY5t6xJrV85wapeNQjEWiyo2MCjXXeHtQxgKE17QjTRGCZ1tk3sDzLSw5kHH",
  "key18": "293sXXKeKkQRBvCAnM1cPMwEDXKDs6EAVEg8w4N9SbG64NGWKxL4wnbhTKQEUkiJPPFr8dkBaRwnmmuKrgeMLLJu",
  "key19": "55ShvDcCzkhQZty541HEm22zduAStaP9AUemeB9RyLGao262FBoH1v8VkCZyEYJ7Xq54jjbnbwqL2BuPhbtcJYBt",
  "key20": "4amhBhEybGUuKayiHnm5HwuGdymyFzCGrYXFk5E9nHyf1JqJT32imQctfw3WZHBf2EVC2sZNgrPL1f7agf6jYJhq",
  "key21": "3Nh1CGgEHsNADoR4p1pC6GqtpQbqAVYSNuGXkzSRwWhvk54pgth931hLBY4yqd2fH3MmZsAJ6LDssw1QcTaNfP57",
  "key22": "3D6kT5mEZKq3b5yieU5ED1LH6GC4TeBaM7PQERsWSkuGrNHAex25WkXgpzVWtudi4SzetvhFHrxGN32V3WzBLRDa",
  "key23": "38j1Ea9mjggW7SWjv8LndEfKMDzWJWRZHjUMePzqxp92kLpwdJLiBmLMfE9etZ1aTP1oDvHXivwtDeZptBLVxFiZ",
  "key24": "22pJdnsLLfH9VPibBb9pxbmawoDbbD2WJEoV4zKikyQBHx2RJTkN5LBB2UHfUvgEG2G6rDqXD1MzjouiEHmWksQP",
  "key25": "xPUytMsYdC6Tsg2swHyVjQ2BcU2hGUNn6zSwbHBDuGskkwfydxWer8VnTVZwHMhkdcGTbdjtgY4ePg2zWxR67Qc"
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
