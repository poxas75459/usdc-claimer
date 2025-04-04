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
    "4U8BHTFiz355hLM1jfKGCrBKC4c5VpevFqgb6AhXYPfPbeq4aYnhL2ffQqmUFncyGF2An7KqABt3ktBWsJhgTqmg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "639rDv89p657ibQiGuxfMWYmQW7isRQLENaErUFHKBrvhbapPraKyDNdqTAWbt6jxaWCpAVCbW5eGJXdRSYdWXuD",
  "key1": "5YkgWqRqiFocUKZHU7UkXAauCTa4sef8gCLA3h5nH3qV8dX6jcjwKhEpSMKwvfTgPyXXzGtF5zC9gEavurvi6EjG",
  "key2": "2sAVJQn3oZ9jsJ1U5raXLQwN2x5pFjzG2wpWBSTsTCcwQDV5t3TgbnUfbyVyvTpMH7xq7CG9GgZ4ME6WUmP2bz5X",
  "key3": "4xrpP8BfcZN5RKfuCWeiy1WagMeqqzfi8jZEwrqvLFjmi2CuA5HgdVbLG5Hq88CLVBADDMBrFqmv9fsdgRfY9Gd6",
  "key4": "5Z8UVwjTXK1VyGn9sRYvTRWoQNJdhMqsR2a2aGzNDMJzAZYcFt3A6rHFVHgkBvwdHc8L6VE6M5UVMrJo6Ufo6TWg",
  "key5": "fUG66u1HBKw5trgdR3syaxdf7HMxrisq3kMkJURU4Es175nynezqxNwQMcAn2NmwS5wUZ9buBipHvLfnB4XASjK",
  "key6": "1rdKMrBUu2dD4tnbDG1mex1jE6JpRSnsBvSgP8eMLKq7mjDqaAio1FLoyi9dHzYspAwJKQX2JaN8UpjLyxxn9Hy",
  "key7": "3UjDT935zeHLM21jFP3AKT12KRwaEFoHEA3kg2zjQhXiu7hsPuuYgiT5sqhgjEeUXQAxa6N6wjH4Bs38xiZXhABF",
  "key8": "5wr3ENWDcUkrHSDwoLTPUweDeW8V5JenJDwZ22JYc5qGeE3CcZUB8BFVio8zSHdcjjEExCWiPu9NVtExWAXEdrTP",
  "key9": "47fmsNA4M14wrf6dhuGzJhkpzSTQtQD4Pn9JQ75caXwqwACTTgtr8r8e6812BXUWGNTdjBszjzXyeGiDkDxSPzdc",
  "key10": "3wPcsH8nkNNA7ZNxrpkZmgXQ3sFhpMtkErsbBigL73UDqnEPoQhsr2vBWVRdVGmDr722GkjMUfVJci8RXdxjdZBr",
  "key11": "5TZjkHej2Kbxfi1Z8JaYqBS5puGABo1ZbPZZxLCMhbn3Cn6qse5UXZkBk7WazCHhRo5AenSaotKXe2T7EXyx1sPC",
  "key12": "65mP8Xd5Xf7NXqAJB5dns26Xr8fKT8556wfSivcHo5Qazu7zqH6c9p92niVUSmqN4bDH3CMv3w4qLbZubR4minFu",
  "key13": "wYFT5Dw4mr6gbw3PBeZwyxsV9U13BKkpARKemsbRBLpepnSR3vqJZ9Dn8RmUJtsYuW6cXGemCUgdK4yF3ocuXL2",
  "key14": "4Pt24A5kqSHyZ2nH7DnKe4enzacL14yeGT3YYszkSv19m7BESt5cM5yHyJWV7U42HFqErx9AcKwgRV5CJWznj34q",
  "key15": "5f4pUeH2pJbmH13Tr5oMPZZ5qm5khZDN9XZByKij7NSuWgzCKTQRXNJFxtuVSbJB8RxbQmXkirdkmBeTvaYdBAKc",
  "key16": "Kod2AEGfxkzXaWagRekNcdteQVM4LX5ZiLryTertcv8MoorGTvZqBzJe899H2izqKQ3x9WQj3gz6mqcShKxorAn",
  "key17": "BSjMYQyifHMdSy9Saog4uxjgkJ3FRek7MyZgzBid6vEYrEGtoSEd9Wvw4CCuMtGyLWsS5LsS6aP6CRYkfKQ7bQL",
  "key18": "3iWHaKLopz6b7iwmhwaD4qq3gjy4itG9NxAcgpwTVymmeUPgAk6YZDsvfcQ37ZgVPxYHC9cuzGDr3vkWktPFkhwm",
  "key19": "52shcThGpudjkKuGJk4CbVDXuXMZFNYoq46UFkqXVZa3a6BZePHMQ5mmQ6ibFqBXDnsmALYTDqGnEW4wAx1G18BD",
  "key20": "2zvWNNDUzZyT4F1uV7bfKEZ3WRnzcqc6kDByJvFsh9hF1oPbSEmbpCwRiRFrA9XesFwB831TYPYHj6ZT3mg9FPNM",
  "key21": "2BETBN3VTiWkrdNJ6A9wfXPsCZ3n2GxXxEXU7Quj5d44PXd6QeecqbdJjd4Y3nbDhbnUfiVozP5kpgM58jNHtp6s",
  "key22": "3fvvYy1eXJsen2nQNB7PECCmehkkdZLvCiSW2UvTCUfLfKq7cVpM5u756J4rJmBhz2774PcUUgRi1Eh61BgdYgXo",
  "key23": "5aBQEir8fiPGzMyzeYeNTtpfwJeZWaz3EdM1pMR5KsL7M1ux9GQzHiRTy2h8FwwYXA5td2ZGJKRFkJ5DWKmaVXzV",
  "key24": "GAVvdHX9r9sjq4Np5U9ogpkMFjUsDnCk28H2p8n566MRKbqbMCLzRvzuPPDKWyaCZ2LRRS9MB8a7YqAXbw4MT8v",
  "key25": "29MNUbbetjoHuQ13SznLPLHnhb3VU1YMqjpcHAxxh7pqgyudLYLEJvbFyCTxniQRJzugRZSwXjyjRUKc2tjmVT2r",
  "key26": "f7UVotZh3BKb7KtftoRMN8gjo8CL2UtejbfX5V4oh5CWcXikcm97sGAoewY1vY23Fa4yXnshWLuL9JRn3LVVKiF",
  "key27": "2wzakkT5JvjksXzcaDR7Jrj7fmMcidAAGKDeoHgbe2WBNsqKYQTiU5pffisH2yxhXBozKZH7r4DVEno45HfFs8MR",
  "key28": "jt6BvhL8bcQxYYzCLhNZpp3qQXqbpMi1gPDdZZfKAZsNb6uVvBbmqiXFQybMQHjX1e5jLMYpZkj9QCQPL8vMpmR",
  "key29": "3eZ2AsMEUKir7QqeFfWcGtdZxGTnWHdutzMZYrvAkXSVg4y4ojNJULTAC6mZDFcc4yosdqcR1P12tHpM579nVU9E"
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
