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
    "2kBcbYigUmi2CYkeE1EwHtcwetR2WFGrLhDmLwJE7E26nwQaUVWgyamnwf7sovrtBWxQcmVWfEHqx2o1RNCoJC8r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "16bCx81Nvfmu745iWiGAKhF6psXA4ZEznJcasVxpTzQL7C2XBwUTmfz6W6FUW1uHWgsRNdr8gJT4xgHSaY429Xe",
  "key1": "4LkJwrqFTiCc2SkUdWHYsD3U6VFMRdJbtfYxL3rsMSsuQNXYVw3noPDM51ewGCkpN1ZadXG7JZo8ZedZANPRWLfD",
  "key2": "4jvf1bAY8chEy1kgsJPHWRVniSRztJqfobHiDfPceDeN9mskPoKzqP3QfWgzNcVaaEJ1bGRNpijSKxcXeFJNbnca",
  "key3": "jyYq7kjaffydVv8eqWq67of3zThnzU6KhUHe6jCmZXT43dfeosCJvd9Q8BacTLVPeDVQCs5cD9TW74NnUP9X5HU",
  "key4": "1CcMFmQGDtHYZVvAQoG6MpYihqoTMNJ1uGSrcXNFTytdGNHtfiJriYm2p5oKMhRWYLHZA9xhGBT1GUXpKkt9z7d",
  "key5": "bvAPsyGcisRiPVLchfUpjPsi6ywmzbvZfxJQttJrZnjmZocFE72ra6vGSPFacesfJyTzeeMG1iyYiXHyFPtyNdN",
  "key6": "3pCxw41WCMHyLcshrm5EpJrRHjYv6BmfTKVbCt6DfQvmbwHjaYUhxhcC3cL36YNMCYHyw7jTf44LyuMgfgFmXgTF",
  "key7": "57VojUV2GbsUm4gwcnq4HRfUmbj3FbEqqgAqzrKaWoxfy3t9sAqKL2PKdG9vzecuRhKWuQJjuj21br1KaZLG9Ziu",
  "key8": "2pY8STiQqKEgbZCN5cLC5RjcBB617WS5eYohTKmi7Xfn8ALnPX1Ehcgv3FY5N7HpKj1aWCwnPFWwA3XkmnTgPFiV",
  "key9": "4KJi1YvDJoQMTDv1L6kKLYfpoJqjH8DRXhA3e4W5arbDQauUX2mrXQgtABse56kjf7sCKeqfMDzm74ou3tQZYEj9",
  "key10": "nmMZNEfKg1LrSHoz7pMEWjEp6z7rsMHbnX8nGN9C5HyYsEzhL2kYmqafJ8UskdacQThdyejMiaL2gAgDeiLF4R9",
  "key11": "35sYMNB57VYXsF1hExWJ5PTQwUF6FLYhBhnu9QqcwREmgM1PRAioNZY5h3JMpiVsKTUotrNiNsi8J6nBFYnW7tcA",
  "key12": "nbM5yKCpaY1FiNxjuUHzKLbsUH6tUbbvts7cYvvpVPzcbfF2bco4M52pF7d47WszSpcVcQnEYu3EWkuztdh1wRe",
  "key13": "BDVt7pjKJVJJ8KnAXErWfF6x2e81TnZjjbitCMnC9q276Ro4hyWs8SBLvzbr3kueJp2oXazUWq5Kw1TbpfKvLeR",
  "key14": "3qLUrxxUakiUL1jN16qQEXkeTXPXRLfxBFdgTXtaCEgjAh2m19TjvjHax2UZEUd2zuaeXjJsnftCsHhRQJhaqWe2",
  "key15": "3VeotjrrKMcoM6sYwLBoYNFZmnBztDpwF2C42acp3Nzp8DXxJERBKyw3BSnNngsHoPpyJ21SETyL2fcwsRSchbY8",
  "key16": "36KKgUXmfXaDqfeHkvS8Yjp6aFAgvRVvT3gMg2gKZz9iAhyjG1CsUFgNRK5mAAKd7493N7mbUWats4Sg6Fi9rS1R",
  "key17": "5pyi1DLGBBnQYWcBrdZrkNBCJ9MdhKvuP7FFg9AiFLBTA6aWn7Ac3DAnoB6fwQyQv8JNhs4xQc9RoxXwBkriTq3F",
  "key18": "4tc2yvrrtsTFYvNeFXrocMzDP95tjjyDoaLV5wmaAR9JKRFdushcwY7z6k91AbuoXdJSXYKFiyTtiZafnvUvgdox",
  "key19": "2SAiEBTEJTsRwbrT4s5TH8cjrDMuCnhaHxTSURX4iYtAGyWRMGXzpymSbGcrfAcojkdvCYLt9zkHHEB3QzrixKQa",
  "key20": "5Z7tBWgncV4Btuv5atvEqtZf8KLAGaiRoAkiSmyQGDZTwJswfDeah3KM267BnRnQvngdsawEJNQhv5e86Z937cEV",
  "key21": "2FS5LQ68cRPUWy55RxKPM8DMuJ7N9Pu18Y8Z5w6vHuFxt71FmCuhwdHyRey52qB9Khf8X5azot4rvDYCgG3bseHL",
  "key22": "5uSy5KZtf7NfYnqPPLb9Udzpt7DA6ELfcQ6ywGrWgpbdDqY74XPbfyq6devPdTZnz5eD67FyL1AFmaYg8CHudfQZ",
  "key23": "2iT2VUZR1pLA3kUYEMjr3mwJpHt6gu6We4LHbimhFiUDNGoAV5uTHbSnwUSJuBQmYPJckPHjzJ16Ezqf2gEBcLai",
  "key24": "5tF45iuRL5PPYYL6UnzMFwumPvQtGFQaJigv2MqyPNfvzbTqyRSmQLBiTaYGS8SWZfvmveS33f1ezrr5tBL2PevS",
  "key25": "o6f9NTj5TcbiA8ebP5GbwJAHY9eZ2Y8AbKddgNiSFxgjQA8DMqyrhz5qdqtLzecCVa4FDFFjw7osqJ4NLre6Lqe",
  "key26": "3KpEaMiUi46BNb99VGmZJr52neBW1F6aR8P1HRYkdzhKdDbyX95Xht5WPpuR3Bh2ok6fbj3EeSQUJCGBnJcBGYyt",
  "key27": "4VJjpU1WwA57e72x45oxihoEkaomRYhR7mikL6PZT9sedwxzAo1FZ8BYQxbs8fWgKn8RRqDEuPdw9Qiosr8RA94S",
  "key28": "2Q3zvCTJNwu7VKhoiweunG9QCQgbzqYvbSYVY1ABWxWARdfUMuygQkDkjL83prYCeXvi65uuA7g1BJUS5zL7T8SQ",
  "key29": "3yRYAdv89pwuQV1QoMRH1NLqaukMVtvLKHpXPvgzEBK3S6twuuC16ABhZD5dXSndA91KjjFnTGnerodSAJgLqQ3p"
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
