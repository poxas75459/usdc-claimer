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
    "zj77xyS8GeDan8ZXYgEFGGuM4m9PhAY9QXmHgPN9WhBzy4NvNdqBTeeXbdvZUweY8tVt1Hk2EERe8E7fYmub5yk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gy4xJZea1ZruTTHWiXqhUa9ugbFQcY3Rmo8nzBks2ro1AggqjGLrE3YyKyQynvbHcd9o2PretiEkq539NTotmYH",
  "key1": "48GbnTg6SLgaqk6zRx54EmqxyapcAvRh5TQ29R2PuDsefDNPVjdyEVfSRUnFeHdcHz9mqUwzF85xNWcej3h7YPJw",
  "key2": "3KAwQjV6Zd6TiUr6EwaC4avnSe7gpNBADSMWt55jiwMEPwx4CEbZ2B2sVQnoR2PF8i9i8wHyJqbxvFbxYgCpwQEc",
  "key3": "2XCBZLiS6Uh4szngxPjJo9XG3NQfDYWyvQnt2zQwyjwCXRXycoBzxCkGBQMTG5B8pn9dhP6psNXMHCXXV1LeaDue",
  "key4": "662cPqhR4C4jdpKmTWXbuSpQP6aGqEyCpmXX6PrCkh5dZXSp3iBPozHd82Uh7uTWxSSaEd7YX6ZSo6YehVqUnRKL",
  "key5": "3Gxs8KkYSbQ3g7hPye6gV26egHcLcE3zVbbawfHcgR3HCkV9AcygyZw3j1QoRxeSiiVfSSL8mgjxaPUvKDebpx5p",
  "key6": "39bnuravvLHajQRR9q718hzHj73Eq9zU5Y6hGXQ2u4XtRAtNe4fTefEA9UmRq8CUZBBNEe1BfEi1wUbEB7DgWuf7",
  "key7": "31gwyyDkRangbMSKXf2BhBxYihH1aizHzJ2a3cr517hGBSB6uDc9oi7zH7dAZDupkaYQhCd8ZA5meDmdh99xfaQg",
  "key8": "3FjnY5KfKtooCBWrHiTTEx8oU1ERptt1Ef7UHWMCNV7EKibpv1mGP2Z31gK7yFYKAuehmCQzxqxdPRt21YDn6ssN",
  "key9": "5ryCTrBRFxNzyeDHP7wg2CgH1HMKomK1DAfXNyBtfY3zFQ97KK691abcPdbUKG228pqCS45drAFR4SEfj48dYBvp",
  "key10": "VmUQpxL9HeYqX3ekSLCHwsbE9azjU9eq3jjv3xitepkFLu9Z3NfqXTzXTgrTzEGKHQekEemN8EWEpbytctDFv1q",
  "key11": "3vMncAokh2fsoxSkPuHj1icxP1jg4Gj1D8G25SDbPNEYSS9RSsboy8dV5bnrskSKutjQqAPDxz3a36376wcW3mD4",
  "key12": "5SBqNHaedRVh1ScTigGdqHHnGnjGY4xoqymcLxXTVPHHskc97QDmNYVCfyE2enXnJ6xzP1ekkgDN5RMTLPCMxfMz",
  "key13": "2t1odjPSgRn8JvLN5c2V2t9t4CFLmV9WtRhnDsx78PHM25K4tKAjyWuE5oH2GHkWn6N1moxTbSyfEcQP25vdc2w9",
  "key14": "3g1PfRU8Jbxx7RZ4gsZDgHzEt6gTNHduYZdj8beVBuuNiUDMQitVoJLvEwGEcZ5pEaerVjyQG2ZPSo1RLyZWFvH9",
  "key15": "4VbX7FfTzhHEDKofrQE4RXYqYt55gSmRBCQ5GYYAbczr1m1jf7shAchvscpXaQZ41V85XezkZUMz8mXkSdSCrrsA",
  "key16": "2ytdqWyF5rz7yNNkh6kfDQQAJEUh1jijkweEUxvHXwv5UKCjzbBtv3A1fxdNDUeYqE6KFkUXxpGHeGEFurQhjWR9",
  "key17": "P5ib36cSddmWB5CzUQcJcq9stYue9MBGwVRB5K3k7JGJMAdSE2oPM2oapjvWVwkXSZB8nWYBLVJCDLwJYS5MyeM",
  "key18": "4SXKMao9qsqAG8WunxCK7MLEa9qaHAbBusKEhkA1bwegSaJDzBNHcZTnBsa4ToMptgXPnkmXPw1xo7XoiZBD3iEz",
  "key19": "iwsAUuqSDTna8KCoyXrrPHeZCMnt2YqQNue5BhbsLHqbiboi4BC5Wa1ujeaJgWNJLfrneUmBAzUo65pVgm3Grrw",
  "key20": "uxvZ5dTNyADvVwtMgzbhSUKANoLaouGnSnnjhbmh2G9FFHFyHkzb2g15HnyRg5FM6y6nQq8aQLBXBeKPh7n4UTK",
  "key21": "DgYvLqw9Qt1TsqtZpX1JpjhwAobttzhi8TuoQdnjh1zZwFuTQS3m7W98hUUXe78RgaDqM8BaZiZENnqSb6hnvxc",
  "key22": "4EukxzpQWSBvwrCkr61uHKVJ2SNhJqZbzsdpyyohtpRPnCGX3AjYzXHSahmMNxjWUPySgFH91QELN4FS8LTZPwd6",
  "key23": "xNaUQGYsziVcEpHhC3ancUkAWcF3xg5CAmRVCJfTzw38qTUFAs1jegHSLabNJaCaamZewPjd5iLJLhhcNvGiC63",
  "key24": "4g6uwzG3Fy7kAgCUciiSa4s9udK1Vxj7rG1bF3TsZKjLHXGEbZDKQjdyQpJ8up7XhT734qGkHx3Q6MazVJWMrhWa"
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
