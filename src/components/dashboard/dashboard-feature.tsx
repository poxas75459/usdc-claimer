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
    "EAo1zMiBmuzehcpAGLyArSZwicUFUieU1h3bJdeM7pBxQ9kCp31qAGGgRAF63zioR1Q9cD61vevmT7JMSQ69Trx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jNQD7pScFt1RHrqFXsYvAmyoVK8rd3ZR5UQkaitEa42MVd6s5196rwzAuXv98AaRd81UVPUdkj6TbeQJ5H9VYS7",
  "key1": "56igroiK3GqHF8KJ5LGAyjUtyLkXHv67zJ3JiU9gzTdn1thXGK41nqkcZ3MVDPNwKuMxdgbSSVSTSGKWb2TkALB4",
  "key2": "4JWQ96i4ot1fd5VicsBM2G9mV5J7a1R3vjSY9eAEXrzVoS69ERNQgqhMtsBagUdFb6QAQwFF5g4LcBndWMwy1xu4",
  "key3": "5Ge1mBqXp7vMezos27nzmwUzY81j4HRdN9sTNdWyygh5p6qKr9TDcBogStD3K57mD3YhZRgqPgYotJSJRDWYmWKH",
  "key4": "61nFTT7gLucm4ucmu1DYfCj3GUTMTR5Nd9C1RCQaQoLygoupQcEvc8g3Lvaf1goEP6SJnUvL72UTXidqA7WxqvaV",
  "key5": "33jdESHCFPMKhvxD2cZ5qpRjVMuKTexyPNPi1j2X9Xpsn9Xnu6UqXmyn8Rqd86fPwicXoG61WHn5e5n3fN8Nwd94",
  "key6": "4PXmMtqbJ56ChAySzugAuYBEc7ksGdFxmSCixkELfXtZ4eRkUaWC5Y1cF88DevDDQ8W3LC3m9LUXBNw8s2EFFcmZ",
  "key7": "2dDxesKg8MrXWMAoBvuC6ZfVS5r9Cesvoq1LJz5xXZMjtPuNtbMDw2eRGqwA9BpTZ4mKhuUtpvSpz2HEEqq7X4WZ",
  "key8": "3Uf4dpE5V1qvH4nV7yzk1ADYz2nB396vCVAJCunHdfm6CvuM8cr4ThZPGhqukkT38nYjtvCfRZcdnHJVbfTzvPV7",
  "key9": "4S94wJyFRCAYSHLLhEjoLUq134yRVj89FPcAopjQYhVnshECUzyteVnwRhDayyk4chErGejKqCQh6ub1ocAVGRK5",
  "key10": "5EZehZVr9wPtf8463yoUjBCBpeoE8HGmbm5cXwaU8w3YJNP8LdtPUe9AtyHrCeo7RNdSLvj2pJrngMqtNFHC5Fgw",
  "key11": "3MFRgoBSsdE8kdzcKMHLse1pTWUGXp5j6VX54eGs5DNg56k7VAJcDBpsFo9hvfdnNQoFkQ3LUUq42cfksCoPH21e",
  "key12": "5kLgUEStYHBtAsvdafULYhXKESAghoe5c8Btc4LPqg3sCCgQnTb2cFXbnvgiBwBAVNpEY3m8uf9c3iTcxj8ou2Da",
  "key13": "2fXStcZcQiV8CyxXgVrjuUWjHA6cv49YHLjKwAgRSvzbM3CiZCzTE1xQ3Jrm14yBzUcJzbGk2qpESiYhWVdR4XpB",
  "key14": "hDZ1yXZzCCQdXgHL1E868jht1q7YNy15BzA5jh4Jj2Thhbp5mjxNv6DSwywoUE8Wt78F9qZgHSLiu7stefSihT8",
  "key15": "qGok8dX2dSpjE7YwydLiraoZM4XB2Yy3o5YcU2rzt2fVF9GEbUGhUfGtzYjErVGHeHwhKUFXBjpWyXX3pYGV7YS",
  "key16": "3UCnk8ih2Ej6BiUTMjrnDer5RtrvQZxRRAfVoPa5kAfKDDonNqBc4jQb3aWeVdNiySb1ZJ4vrHu1cMUjU8jWYcjy",
  "key17": "5Cx9JtkkWnCGUrowucwrSgU7Pw2LWySWRB2QxT2sGgeFJp5HCwL2ov3Wee8cvTJcg4E2qBzrMB8oGxpurTNcUDxs",
  "key18": "3cHzFmrGE4wwMATim89eNS1joCNR2QnPTn7R9eLvbW5YBjvNfnDbbECkEbqNVqmmhz7iy1rSnXDLpsnxi2RDyxWk",
  "key19": "5ddL3wujNowk5XFkKQNFKw4WTSQXYfThAiyRS67L3J8TWJYrv2LSChM6QRfM85J7ELNwk5PLnKkVRdahQG2Fwdgh",
  "key20": "YxmSiMbfYscBtLrgq8noQ41Gae1zdCEfajbttuN46qDFBviNjHSZFN7QFNpH8cczeZVbaVRH1tTZ1ddBkgGo9yf",
  "key21": "KNzmj6dvsDNLX4JiHHamHNfhgyfPvRwmfPEjHGSYMbiQmtoFFyHigZ6zNBr8NSV5auNHdTH9o9uAS7yb7tZwwXe",
  "key22": "VsrcCszfzQvhuWapLnpacYACYYcJ7MvjwdpyAFZY9MUtVt5fjWe6s2XrWV8iWG1XPuUoikepbGY8WyiaDVJDSY5",
  "key23": "2tcuyBfyWPLNToGDVK4zRLzmi8D8Y3SfiZNBN9eBHfDXQLiCmoTgATLYm5fgDJB8GEaJ85nUcoZNRTAu9ERqmGZe",
  "key24": "49LexcfzjdCHsQeWHiZEQ6NWFeh1JW2guauAMChd7DH7MGxCXS1vrwKYi6UpNYSz3PJG1tfp5EhYNH66Q9zsTJGS",
  "key25": "4gjmxYVEGBMxfDEjN8pYwv9RSDbvnwFtXPrBraU1VhCQgmyfVXooaMjimqZtc9Tfkw4vTZBjBFuqgmuhyg7ECmNB",
  "key26": "4utzhdHhzEQ1s6Tz3FbztfqDUMUydojKsFKRBAXQfd27yRCGJatvZVntyJ7sKB4hqBp7GV4c9LTHtYk4vwhMGLu7",
  "key27": "51R7hJwmA4cHF52yDTS2TrM46MxoKb7EUNURvUZoWp4KtNYLGwCmLX25c59vKG9zbJYymbdMQnLCCjcHCgVKcFWD",
  "key28": "268oFBHdWmJZNA5Yg7QjDucgJ5RptjtPgma1fsHX5p5YHo4tK56YfxvDEjNKyaZMrZRJz9f6G6zR39cvEZcyS36B",
  "key29": "3fvVdqbyoHouPQQxUdxgGeiSyKaC5kYeveuisku8eNeWKWVsfu7oHsTNZnchRLYVPGGBFHyPsMjkN37UF4iWYBri",
  "key30": "3Z8GF2dFc8wQsKwStGvn6xge8gbCDpwamoCyEhnFpRAVNTj3LtbSXHZ48K6rKoNSzoEtqfuW82eQdb2Daheq6U65",
  "key31": "3MQDg4yNEBiL4cYF9Jr7BAQbQBBevcUjXvMbL8ejeP15P9MZxWWGgLphc2rTwiVqNvAubgNj85iiBW29MVjSzEFv"
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
