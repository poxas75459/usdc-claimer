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
    "2GAJhcmAaPJUKhqh8bfGPchuHvTPsDYMwbsVrNt9HuFGXZQfZDndYVZVRHxTATDSkyohwgC5sXaVFSPcKPoWuzcB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z2hwkryWcKh2Qpcb3tn1mbMLUjfoBLtoTCPyVNRe5QZWBwfEzLTqSLB8nTzt9LYSP65ncEnCbAg65nUay96QWf1",
  "key1": "4w8PdzsDABWzSnh5HguyaABJ1jJn65h13Ub6hWxk5dvJBRNJ6ksmGSSd8QrNPrLsRK6MhhJpQMfUci3UChiQ1cpc",
  "key2": "4WFeovBXGMe6K4NfFs8kMX1Hsg9orhaZE5C7jh6ERoMKFWZaY3vv88cjKmGX7X3kXRJEBM6CNRLuYvbS4xAbotUy",
  "key3": "2Dr8q1Ag3tTz9Z1Z7qV6CAQpbzWrY8ug7zUojvZUdcLsHvREiGkWcvT1kW3dkEoeRAkVcHkKMMCbaZueuEmmBsnY",
  "key4": "3nTt4w2mnqf5Aiq6EU8gi5d3bPcxG7WcRL1EhHWWzymYzqkqW8VPWqU9ghopdTTRBdELBngXH4QajiRJoMK9eDdT",
  "key5": "4GrJTEL53L812XVw2SHgH9aX2riKBMREDibMYhCsMgMtp5CKuu5VZzmYg5swTyh48mxV8Ky1R8Kx1isgF1DELcv9",
  "key6": "5RopFeGQQ1RGV8uyZW6xvw36PX7oXvC86rSWcWoicqyf1kELecYMfUYTDFXAtsuSHtJ7db8Tj6RwqjDMGiGR5aUd",
  "key7": "LSzFRqAa2s9Kc5EV95hpJaq6P9YyTd8C4rAyDbSg7SvzLcZNBMUi6PFmrCiATEtxn6hbyn8Wiqkd4SV2zFKTC1Y",
  "key8": "2SWC9GqdeMLnNrW8wuSX72cxwH7CByKMgbS6DPHVW5YvXjfQzQAG24B1wgxiRYWhse5TN4ciuAAXqxViKDptNvDZ",
  "key9": "BP3i5fxdsfJTvgSDjmUY5V9UsxQJ9wmf6PYF5nHfA6exVXX8cjuNhT2Wgi7qqMYaJHuSW7TrTjK3b16qN2Urd27",
  "key10": "5wAGnQtxzngJk7o5a73ha7mMkmMcbSUTME5QvZZ4Rhir9uscixqbeJgfYd1aJCUy48Uq73wzKEfj8DzbcwuZGoVM",
  "key11": "4c9ZkfeUyZn8mykUzDp5zUJajRGFVAgS3x6jNvR1oBCqkXm9MejWRUr7aYtspQbnFF68mVCFDE6AxpW8a56Juuxn",
  "key12": "5GUc4RXBpNw9ZqcQetyKVSrBvRVfU3g5gK7wRqTdV75Ug6y7MF96nsQhrNQXpMTPfwZSDHwcNyGZ2pEfN1kuwWWP",
  "key13": "5jF1ag6W1yqP5MDBNS6B8CQdbmncwHAQh84dPoBG8abmSuWVdFotzExKtZYEayzE5XXcDRkdm71Qz37UoG8bgYEz",
  "key14": "tVH3sHrg25QSsib8pPzvwrKCQgy16atqrQUi5FXJhd4zcSD7cDtpiLxbJX56pxa43VHcuqD4Hr6ZYmBLEjrBtzi",
  "key15": "2YgNfg2rCc2MXkKm4nafuqfxpqo99h95pXLRuHttqVbFDYwjuwyvRntZA5K3wUkDef8HVqVKsiqcPyK6bLDbuFNM",
  "key16": "5HS1g3UsTQzUkVxYvQrpVfkPkheHnPkdhpNFA3kXm8bpkkjTHKbrxyWcitRF1B3sm4S2e99wEinHm9gLHaLkubhz",
  "key17": "4ZyRpAReyv7vzgiyUbMb3R7xG5YnyAR6FK9EhSFEFQPrq5pB3CFxe7LBtLtvFs4fJ9samiR7Hzm8Qdo84EBYF4d7",
  "key18": "44AfZ1E7b97chJEPAgxxbCNaruJ1gwrWRgo67aicJZHciBiX4vPAHa3q8Kg1gozyTzZdZME6m6eiHFpULJBmgVD2",
  "key19": "sPQ4mzFJs9oHdWmJ5Uqg9Su9KsvrwpYnZgDN2FZpG9DCETcrgTsHB25bKxAiSqYYTg5qKMXsZne522RQjgEXGdN",
  "key20": "62Wde4ypE91iBBJJtRN4Qb4Ukhjb6396LYk4xkzQZonmxp5rjK7XM9W6aKsw2ByLyFgVSqnS5F1mY1fDCuh9Wk1F",
  "key21": "5UpZ2wR6Wc8iLdhfecCmFtE6wuwc3StJ7ir2JNPGJAsApoa8ZEnfxX53AjeSB5XrZVEr5gKYRcAbew8hTwBUtEAM",
  "key22": "5MDSuZETxFGykuDCgZv7eDYP5M1MVjebp7ZJtAFcpdfu2eyi5T3Ncq22jZQNa76EH6ELuKWEkLa3gDipqnkkaYjJ",
  "key23": "46EiwPfFPujrcDTCxpBg3LLEoP4SAaeiyb819pxedTQoiNymZqKJ8gV48XeALFZjmxgjW9jfe1DwKaumZiMoQ1LB",
  "key24": "itWLvFKbUK6zptGf94J8oSsCc6h3urQdvfAq1HUBFAYF1v66pHTsbeMoR7xMwtnCqA2FHx9q116pKbZnYnXUUiF",
  "key25": "CkV5JHtNpxe6vJDXAJ89CbTfCzJunbU1VHHbL58e6dicMVkY4ANJdKjHQwscT94R39a4TQL58SdTQvhsaihEKZd",
  "key26": "2wryT171wwt7dcytbuJEQTs4sA8FMoNtepojbH5kJXwyZeiQmvZCty8BYXXzQvtRDBorsNgKVMdREooYenoYUeAR",
  "key27": "4ZtmJR69rGHRaZDZTAmjM1jcVidd5WQiQMFjTtfeyCy1YQT9VqtrEvub9YXi7ZxMQ5zaMR9Vqo2P2cKhv8Cw424v",
  "key28": "5xK1rAAih6HukktY6xvPQcFRMZ1NpCfmKVAP9ECKHvgxzxuNTXuJKutfKgo7VqA8scYBTPSRuuSc49jLxxbHbnD",
  "key29": "4r5zfZnTjd7cc6HQas6QX9evGZCU5HPv3CiCv36gjRQHqcMK5frWi2N5oUnkVPdgCmxNjT4R6mgMJoDpdaSqWoLg",
  "key30": "3bpeMPVXdinbgwEqjb1MhmLoE4tBKHEYsdANiZu6jLnkmCpg9f7xbY4v6MYVNYTPcM4288naRfrCi4hsV72mBynx",
  "key31": "suEi4aREa4fTjsU3mYB5RNjK1cYGiYXyPCow4bQcVhxJk15BBasMBKzKqUzfQ8MdUMnP1Kqm7tF23JaCARsNdLv",
  "key32": "61Xx6cvBMkqQ3pWxxjJ91ws99P9bAWupsZjfSCCv3SnUZpXgH268Wr4HJTYnPy5mkhY5BCWHDX3UKHtkiJqXeNDN"
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
