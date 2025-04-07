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
    "434LWH1EkGk3piKaRKE1EZcH4joqh2mKenNU3CAV2vqkrS6zHRH2cgovDp9fPafaMCUfPE4YrYunX99xmQZWGfhu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21utV9cuP4wyNH3W7ZQvc51w7Zff78QpSCuNARc2Ev97LN3x3WS3LnhSUiZijSQdN4vX49i7UUNFV1Z6rRoub4aK",
  "key1": "5ABbEBWA6S8hQ9rKAwf24r9E2cNawkg1Jb5ZkUDyDNByC5CDCFs4v8Vy33stm4TEpu43Pc8FqYArtJubF6xGpnCz",
  "key2": "5CjtZPFwD9RprS9gUPbDBzS9b1J1KTYXv3GttjFfhfcyKJNpGaa7mgjrVzKGp54zhBiBxNL68RuMvLsBJe2n1sPE",
  "key3": "4F3tWr5BQiZth2NRYSzNm9kZFjd7zybuJPZch7kcjJZFKtDcThQ6SA3xVyYciofuxrgYuq9YGKKX7MfAS9NKNgnE",
  "key4": "LmrX38DjYVpGMVDC4Eu4V39kQk2eSB8jfths5JVSpQNE84UyhodWdKJXWD79XQwJvf47QQks8jFSzZbtDgELKUt",
  "key5": "5UqfaFdMVX9K57ZNzGnKFYJsxVXgnscGN37mBU8BasrewaXayJHfERPSmUscFAkhGSfLekuN6jdHszpZTKACNvrs",
  "key6": "4SS1tPa6rE8fF9xBiG9emq33V1B4DcYZwzt5SrUvBxhCjzjgMNCCTh1LBq4bEdb8rxUggzjrGoiEmqP3x43YBtYk",
  "key7": "5D2v3SyUnUtAoMsqGCn7E6ow4dS1hAHDAT8n4zSoAt7pG66FatX6cCbexRjpJH9fMgjq6s9vGcUn2e9J6Yj4M2WQ",
  "key8": "2FZncWgdBSvzK5YqJbDagFCoMQ3TPZKrYgnb5y9wPNcE8DDvvS8Lc4dNKf83Z5EsEfV81gny1tHAQ3CnentHg9jG",
  "key9": "NnmvH3gi3jBeT16HMhYg1pSfT1LYfznCpL5fRVjD2Yhuaop7TkyNmVzN64om9GjxtQFpQE6ur4CLmFXBuVEJB4Z",
  "key10": "41bPE5V8bi4q11Pw138H4XrhUzFGpMyL2HKxbHi6Hmr3cgEzCDBE515HZiu4oxgnHtHgRsXK53gnwP7axckmp21",
  "key11": "5JTk73gZGYAU24tnMdVJF3mz2o1F3MmVvcTMjdLaH2mE9TKWgSodVdezujd9Z44KpL2dnHJJ5YiQbQG61AgVZD1L",
  "key12": "4yog1WFxyxoNwCBKoXkLgwzHXMPuPyNy637ToAxTQdXM7rgs4jovAJ5ajiCoDJRWXvFRACaLk5A97EZcEmPMcUGg",
  "key13": "YMeqF81geUE8hyDRTxqHHgk256bmLijqtv8y5g5QuNZvXqyzDBE7oJwx3BsVZj4Tpcmz4hz8yB5SnQt9MKgTBFX",
  "key14": "5PvT4GW87Ch8yidgyqGmCG4AfF4Prg8dkQGkKoxCRwoif8Se2faq478WgiioAwDHzEbYqKJQ3nPRKkz9wXC45iT6",
  "key15": "6357gSi48SD7nGzwbL8fAdwjxLia3Entx2qNtVZaWjxLs4HbX7Ks3tLR4RZpQVXDJtVXWrDQHddaTMPqaf9hvfQc",
  "key16": "5HKzfLwhcWGsoPc4648WP8hVgH7Sb1zgzKtiGDb4mPn2dbhUV8bUHNpoKKFaqGJcSYPpeK6cDAFB8dZJNCJmUJ7d",
  "key17": "3XmsaDjGnb445d7FhyZCvNSXDofMBugM2Ho2j6k2dZSnCY1GhtVxGUtpVpST7eaMPhUiHgT4D1PFvdtGRYtytgao",
  "key18": "3ngiUK3GCPaTuN7V8DL4qtXvTBgoawXmL3HBn1W48bc3o66h1XgLLKupnYKzrizFAZj9swmobuZgoWdSQFiTEpF7",
  "key19": "2m5bzX2X18Lt7ZS1pHdP1EVeh4yti97vnACx7WmJdL5aw69ASvQBPoajfuoGARej4Bu1a12DiBKd15gmoPg3MPn9",
  "key20": "2B4tqvwoXY77pouj7pgv7nyhr4vHwCDN6VeCxRm8Ge4S33QBFtkXn28pUEbpZ6wGUxssUtApShSFYSj21PLvL8nM",
  "key21": "43ysNEf5VBr4Ds7sH1Wp3SsYYxcEKKA8KadRBdV7A3cjtY4yx2nLVfGqeNoRTyXNGNhJJM2o9LGGmZMo72RHZu8N",
  "key22": "2uxh24tKsdQvyXVxanf9Tv4g3J1GAUWHYsw7XKMcafaBa2GQZUdhm8DFcXtugSzwbKNkCdEH4rbUSkS9wdmF3Ggc",
  "key23": "5twwb7PFNFTkKZn5XpSnWWJvGk44kUTzvCjuppwLznSwJFz9LGfoYTErCrHXkgdMCSfSYwrUDiFMywZVQPEZqwUZ",
  "key24": "66xu6pQW8B511gRECSXMXDcmt9QMvhqKbsXkNozsdaJqsMb6R1GnzNhSedfKv71NerADsPPuMJyZHgzmUzvDrNsB",
  "key25": "2Z6QrVFs8KSrid9DLuKV3oUoU3QgipC9hUjZJk4LWAWpPM7BobUnmDnwgDmotFNHVTV1mhjhT5eLa19mj24PfsTQ",
  "key26": "36P5UcRpsZbTskPRfuuJmWoWMGNnDTY6xVftUXmhm8oKZhNqSNcJNo4o9aHV4Kpj2HTgvqrT9dT2gVQmtgf87oDw"
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
