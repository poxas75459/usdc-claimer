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
    "hT67m11LVK8GTWg5TjBou4gFFrSohAEjz9GpEpvxDHexbHyXDEcxK2dyBhaN3d8tMJkRWos2dQc5HWdCjDitasL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43WYEMahUQALaJ89o9NozN3GYwMr41pGGK2GwGzBtg23dNtbWswN3Ri6X6X9sZLCmeU9vSxmEAgH4Lt4coQj5pSR",
  "key1": "93bKy9xwkcuhLbyYjN14ZJ5bf3QLbao1HL14yhkADrLcqRc1po2UeNmMpfFhh6xScUkv3auaLSXWXi3zjkFsFHg",
  "key2": "mw3hmXDX7xmzd5UdnbiKDR2wfMgaeH5JQgWGgajSSv9ivhpZqYKLsdxzT6mMiR82GPc8t3GUbvupzackcK4juwd",
  "key3": "251J9Hja7bn3Kc1CNHM4pMdToXV6PnbCWnqfLo6KnJLYtCtei7PMPJEDB77yzKCE1DM2RMTTSGPqfUTzg7qaERtM",
  "key4": "2kfQNfqHNfqaJsQvE6kwa74H9Yt13QaMT7sFaJu7nZSPWdbqCcua1norjJoQLQHbSCi7ukVrrkQsFArrB76e1yVy",
  "key5": "2yDVNziX2Le8woeixRg1jfTo1mygroQdeMYD5d1bY6Gyv1MFkFyNaRFLWrb54fPx2r4GZcG35eHoovXgaj4jFxSy",
  "key6": "2f8PqSpBeE6SAsdsQRfXs9TcKxc2qJgyKpPHxocRZ7m4wWWcQjPKTTVZYrx9stGarLnNWK7JaQH3RqEXHBWTxfXz",
  "key7": "aMVHGr5EDr9HBxehRapdSJwaJczPAKxJ7DhJybyYEEgyLNSuhS7kbGfj9Ghu13VptY6h7P1SuUotnCWiS9tyyfz",
  "key8": "5UrBRwAQ6DFXDa7sf9DhA5kyEeuFRPUChHBVPj89NztpHJ4n5aPpQjzXBfKd65Uga7xPynNxapkUoZ5DUV787SUP",
  "key9": "Pzd2DsfFmbir8XKnX4xiwstQJji6vSx43mBoiJBHNGrXjpKPnQ2FKUX4ZKG2WpbEzGAUSi6BDZ9DscQm1k1n6zM",
  "key10": "5w2gZNMRWF9HiP9mfymD22La9CGxj1dh4GzRRLMgnxKGDs4794JZo8uWg5DBJyF8xWxT1gf9EWESEDm8zYg2kBd",
  "key11": "jHe4oXPokw4sdfxAbvqJ9WEvwkp1yi9w5RUzy2FTdDKAKugYsNjuFcpjUGiJaPC7adrCuoETXHq8giJQdEpRuRx",
  "key12": "5Cb2RYT8mndAArebfd9UQ7Z6EBDgXC9sRACfFAstj3C5C8TnHYdMBUuGpipXV3VqQyqsbi6kgH1UxurkCizvfdU6",
  "key13": "4TZBga1MGbcxBRo3qUJgbbZ2Af6jFfAkFrZ4DMVBkAno1k9VFdYvgrfcjRebY3Ue2zL9GWZh3Umd8sFQ2D28g1Lo",
  "key14": "2ekTmRL9ncZW9oEuCAJcAAVYC9TS7fx4ackyPPBG61vcpyQjXkXu4aztrWrNcWNm38h1HDLfNNpNgyEG5hrrC1mh",
  "key15": "5oDaRbmDLxmF8GsimJks8EsgQnYMgQiNpLMkoSQSq6q7AzwGVUTwW4GGEDpK8aUtkXYHayysm836gJe8rAku7SHG",
  "key16": "5D8C4FiFfztmwCTA8oMKZLHAoPHwxXXVPP28E2aGtrP53pY7JmboN26z173JUa5Sd4wh31h5ocCRhvYrUwCyYHUm",
  "key17": "2bQHz6fx96qdUhfAyuyTECnCfQC257xQaAZ5RYQffenYpQNoH413jVxeoPw4VZ2iUpdjJ38errTTBgt1SBqoLG1p",
  "key18": "yxVPLZ1vU9dbBZQYRF7Pc5KYjXE2YiQipUsDeUYf4r66ntG14oBcLprKLNHou3J5vEwwkKgGHbZfVVzXEBvr5cr",
  "key19": "5fLbK5idhi3g4HgR56u2678QVdDtSaPJ93jSKey8rKU4QCwcrJrmjTWVjemDy9aghxjE6sDeJq5buYQ4E4Bahhem",
  "key20": "4hiMCNdCnv9tiHVK2c27ftfsq8p3p4sQx9dyAL1JKCnHguHte5wTh7Luun5vcUtyJ6KfryCSHc5H4RBz3rC3vRdH",
  "key21": "24kPt9pWPhA3Nzndky4qPypiPskn8DrfjbDubm2KPU8AndwxWFGxcAPiYeRYUBAUydFsnVQB8BEwCbSioN1P2bMx",
  "key22": "4owWDchamJ2gG6cABpSDPzKcaCesAenDDgXZiAuUfhcxU4ARthwkXPBGSsX5aPHrQ9A2TQYmjRWmMtYVgGcyoYfZ",
  "key23": "2qfQDde35DNTcQ24y2xNLMHyPbekDZn1AHWGfcwm4wp2PzU3oymt9U727pneyWExx25pdT6G7cvvw1D8ukM16cAD",
  "key24": "5KWpQ9ERtih9NcAEY1FkuTVVQGEXitAJx7EkEYNcMk9rEomP6LTzcikZnuhUEQhH8wpapCfajfa5eTJ4fazmp4uT",
  "key25": "ozpvo4StH5ZRa2qdhXwyJZBPfyygqBSoXdR7LnL4y8poCC44HbYz8Yoc4Unc75QUNKh5ZfBt1NNseDzFWKoggE3",
  "key26": "AV9qxaFJ6fhoZzMZyNLzvL8ygKyWTpTyMx4cWCJFogbbRFsHJHXqqr5nMLAAXfVbJQiJCxRQW2HSEjukjnZHoXt",
  "key27": "4F4CzdtWsuRXyS6pYewEubR5K4VJcehudS2f1MQjmvoRXNci3pdE2tKgCW6GwANZekxzqaYCHMvbVFQA3GqX7ju7",
  "key28": "2KCHgTQssu4uRuXkhDXt8NQDP5mkx5nQkEzsfX1HASuc8rjPq3Qpxg72cKeLyKTLu68JkyxwNSeGudz8y1mmCtFo",
  "key29": "4ExtMYRLeF6jjdtr9Q1f9n6v3cE3uQXofEJMWVpsbhatU9XwugPGa2jfkuiJoqXiKyq1NGf2afAXMJ6DH58oUDur",
  "key30": "4X8CFs5XnrneCRsrBC6V6px9aZzcrMUV1nFQ93fR8Vedc1cLkt5w4c4C9GC5HoPnUbn7VgS6kxoHt1dC6Pg9Y3Wc"
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
