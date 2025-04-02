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
    "5Kgp4377hSAhNRzCWWTWevyHG6f4mCzsDxJipnghbjmTx94G3VnvXBb9B8EhbGk1HtCJU7shqA8EbtDX3jFVw15U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uRSNhWXQyhyzyxAUNo5QMN1XDYXifrA7nqM1VLvRC8EmTNcmSdECjASjEFPikN3B2a3WjnX4V3UNBxhdR6YHvtK",
  "key1": "KDT5W1GxHLmUfUe5yJnJnLkbDE2BtWcFQmGRxJKG4cfBnd6yjhxoRKrQ37p7GoALFGNjjxTLkRfhLPFpoRCDWhZ",
  "key2": "QyXQvzeWUnLb6LkwRFSTeP9ALGysYoZ4ZrbxWZqqHJPuuhP3L4WJD7uKHR8xTE2zqrPa8jiu9XrniatmMNbdUfD",
  "key3": "3zCPf6gZVKy8HeASZdFjZa6dEqm5H2JXW5jL2Pd1igcErFKjfPdAS38dGiD2Ybuxh4qA73er3RGuB9wDHueNwZ1g",
  "key4": "49jmN9GQr95qR21TbC68pHWD6RAoBZN8fBHVBSdJHxMveYN4XmND193zDF9yANib3ts3Uf4EfemC4sywxDRh1r97",
  "key5": "3nbN7YsVTFwCdAdASpAa5RCPv5Eiisy5LtRESoCqGKGrrUVxxkeY4T5cxS8SeZ5RHx8VfATF7CNTjUpo8uG83mxy",
  "key6": "9tfyuGcw2KBcTgrWfbpZ6xu9wJ513k9RcbqB1TXZWDmEK9QqiqkMj4QXgtUXP7yS5GeQPrd5Y41TvA6Um6UNLJ3",
  "key7": "32bmFtqnNJG3yjrFfj6SuEZRFKYcKgWe7BTbNbcmqqzxPJBah27kC3W1EYiDZAmp3pfoy2YQvAMUfT5bRac9w4xS",
  "key8": "2L1H6NZZpTFiQsCcxPAfVyke37Tw8r92j3cg3ZBw4EACyo5oF265o6Pz5pEMCdQkdptgV5DtC5EhzdgoV6LDQQH9",
  "key9": "2LqQvF8EJd5rDtrvaeQGHBRQg7NoWMdF82S19oUEQLUxHYLtw8c39gQmeMqmi4gtz5WtTNKQrn2fywXbCyNMkjsm",
  "key10": "qAbJWzfXyPpTRNJXJzUo97c16RiV4F4PdFmDjSFPFxDJggT631LCptMiFnr88psbv67mMmfSQR2HvVT6Tt3h9bE",
  "key11": "3hUjNaFREQyeVvecSk9TBCJXCXA8yLgrqA7X7H5rnz4pGEZQNXJGnDvqBxfqmQeyEuLkkMV3NMnyWaHBo6pVqjvh",
  "key12": "5UosFq1kdwN8HFjbexPdvm7C33WKTwTLs9CyfKg1aQgAe3Pr7H7xbRsw3uV77k41bPXVqqfnNvMQDnVUVh5HEune",
  "key13": "YkmPJuGJUCwiCdHZne6WDuE3Qy7PvnKvGQipqWdAqrtRW2p2iDqBvVZ1kLiDjfdunaJ83gDRxZiU4kUoKfjTdAP",
  "key14": "5YZLT7ysMY23cvUK8mkzc5ddShcPc9ic4MVhNUVkEZ6vmjGHJSzUMkkjRLxciypFi5giYH9FxAMcUrGmnWdRRB1D",
  "key15": "5UiCteaPxDhEasc4KDUyLauNUdLaiQ9nqRAWd9FW59jtKvpEk64pKsxCn6mVmm7FVa2he6gJQkUX8xhjKwPP24mv",
  "key16": "2K83mcvJ6PntL6MYHkQjwHAvjUEx49mmVM22SBuomCjLdA1Qe4fefru9QR8NqUsPQEzVqSwwr7at7NTF1m8HZddp",
  "key17": "5NESPQdAY7SVRcAArCUQ37Awz1UNqTKSsANsrgrc1zPzCmcXUsU4dhv9GpGgfjF8B3iMtweryvNVDMoMoxPT1zsr",
  "key18": "42UVn9Xjxha8aC79WhPWQniWBnXRt39V1xM4gpbb916GyA2r49tjfFyQJSeaw5TgvRdxfPh6rmQRkiGugvARSjSg",
  "key19": "fH6a6iLmbfJwZF3daGKc1vUuATeDws9apSnRc6BKD26ecfaDL3aYRtFid4anHXnDLuN4fc7S9ifKSFQDkqfDpmy",
  "key20": "dJVrD2gq32Bv8Hd3tG13dzUPJbeVrYGzyoCsLZd7E2Ykobdk3pmingZbELPqkmsJEMa5XM2huPit7tq7pQHyEpu",
  "key21": "HWMQ15yfCyrJnbo7p2H8MLCGU3attEea88FVw9QPp2QCNTNdX1pneiw2KqoLEY1Kvn1Cfj8K7oLXoWwoPgKGtf7",
  "key22": "4NbgM9cPzaTwLC6Q3vhhpJEb7je2q6bx6EVoqaJatApFb9khxPYiTzU2HsX2ccSU7ss34WFw2bXZxF35Yavr4juL",
  "key23": "py2dAdvRc2RVEwzg14mPWZf7n7AE44rNppjRrgjxmDUJCQ2ak3e1PFHppEQJaCf3A9y1LE2E2M2pz1D7pBKefAk",
  "key24": "556bfoHCJbmdYJdEfMsq5WQUMWCmtHD4KBnhGNtAA98FhVJRue888yiMqMhqCJQbFNgUzRskFkCQWr5cSYyAZRqP",
  "key25": "42jYRi7Ksy6vimwqm7osyAZQ8oYp5ghbBKkCgZpqAoeHecpfdazpS7CyZCDyeTX8D18MdnRC7xSS9kb26bfwVSge",
  "key26": "3ghgpGM1JQxBw6rQti2CpHgCxRiLSygyHFK44wVo16xbzb1AkEEN1otBjuNhoytatjAdmz4GGGm3RmmqHuKvo9XA",
  "key27": "4vppHbUyDGGsNsqxKrazEUPwiWR3sD37DVj4igj6K3zZG56zCh8go3KXHhhDQ6VzFErG9YV8bEzatgJaJFVXf6ob",
  "key28": "4FzBHRmSGgtUrj2WVPdpzGest6aSYH49m78npiSi6KW1q5iaQtWwE9aqyTqKAFjGnCNet4RKmX1DCzYgFTBUp885",
  "key29": "5Sbn4qRdSUaRCrwsUW6KJXWYeP1WPh4qz7yiE8DTQ841LeiRQbTTKG6uTFVM1sHEJXpXEndKBnhDe3oSnGfZ4F1A",
  "key30": "2tPtXsHC7wBQvJGm49rCKYjVv2cGLvSJ6gZpHnfp5EBMiV1rcWRxf7TFwMjDwFmiWbxyGZ75YLomFGfPoxzANTND",
  "key31": "4AYhn7z6QzBiKFvpBAn6tfkyDu2XGQKDV6VHwWaV7yoMHhYnNKW9w9BdWoELc34rieZBKaC9r3D5ddnkxP4JDzao",
  "key32": "QfKBYCEedudVZ3iMCbCBCM2wK2rtdHhR8xtAe2eJRfmecw4suXjfWDwBxLRXC3GVX6mdipXHUvTQ6XZ6hvqhAwt",
  "key33": "4kyVU3mSXzGAYyf6eo812HfyXYycaGgcFxzkH2SFsLKqXfTXp59TVFyhiTGwfaN3gsod3YhouVzszJ7iusoGjGKB",
  "key34": "4Ced2rMshpWfFUse18GwKLQe8SJAkyfEuUniELMmXnKiGhKDxuLTKdNgsc2ZuyaUqj29bMdfGLazuu9KT7sasYp2",
  "key35": "2UzPeEN57NfnBpQfPzWwVr32D14QqizH6tGnNEqShNuhdJpqwmcuY4Ziv5Tuo8mq7uDH9AE53oTBsnhYbhBoTCAg",
  "key36": "29pC7LLATGnMXtjUMppXUymcrVxW4EpWf2AyvdBKG39hQumHgQHcF5Q1aQX2uY8UAVmbniMZrLDwiNkdqfZV4Gz3",
  "key37": "2kwwv8soBF4vpkw1ay8WdVUmdrxYKzJuMmGqD7VQ6MyqKr556AHuab4rDi7hggDF5wbotcPxPNpitTeiDzxLJ34u"
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
