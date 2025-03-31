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
    "JP86aDVCy1WnnvraZMPoejdS8eAne3W5UvpwqwzFf82oMTPuSarntx8bb9bvVQUTgnKrTLRC5M9ucujJC5j6sZQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vqqb4SMn7aLF4Qr36RikFYKis86f2zP5PLU8pnwzXX9JhY5VVnAnKin6X6uNGoCNH3kjaLv56dKUDZShzBKJW1k",
  "key1": "3ZzNPs1XKjYBXsVXSe9CBGKomdzPPDoZPFV7g1WPY38UsJALcnvetLKk12B2G1D2EUMDtAm8UNzSZwzfLjhqx3ET",
  "key2": "5ZmN1gRimnG7ArnXtmF8fXwM7kjdM8K4atGsxcmxvX5xggumSWn2yKQ2PB58MGVgN4Zc5gXuhUUvkcUy77DqNEwm",
  "key3": "2dYDBpzZtgRAws9XFK4CVgu4T443pQfxe6WdduBoy4xuP6rocv3SGS6E7Z8eNkpWDwbrUtrh21rvQ6ohgrV6wXaZ",
  "key4": "3rsAXFEQW3G4s2Abz78HVPcgRNc9kNjMXemdfjRXZxQ78UoBSLa9EWFRqboj7VWd3XJodJ9WKckjqFPn98VJaQcZ",
  "key5": "2ddXtHeKUzits5nbPSyHa9X2K9npBASWP2Vzw4rvPTEMo1KTZg77VYcs45Yx28f9NfyTN1ecUJ2iCjX3ujr272Xg",
  "key6": "2bf2fhnFMjY3AosbzjNFWm8PfqxyNLPVs78hb1fXeLX92NXHMpnoP2CSnTydvDLuPvnPrcxcpEupvuhD44N7wvjm",
  "key7": "4Xr4nLhhs3vctcAToEFCrR8eyJo6w67K6dCMKPuHfqDMEWwWLodyxj9NqVAoVMQto5u8NDCiCujmyEwwyYjLoUJv",
  "key8": "4gYEn7buN2UZxiocJs4iRju7zqJ1jdmYHvRgR3PNR9t18AHLNBW5MM2KqizsXohuXg32hp5MWFW3ygXomQzgpjnD",
  "key9": "2McV82worTHKmTmkYj8QAgZsLp2dFq1XW56aaQM6g79YbUFGeazS2Ybbwewgc1vBXngkyuX8TsYfUxCeZzQ7hWpx",
  "key10": "3HHDRTm39c13doyBz11FSVFQzm5k53DhpdAUrDBwqdyPrik6t1Pg6A1JEmJtSXKgEmY9zEeBbecLxebpRX8Yub4n",
  "key11": "NHjn3FjHWtUhxiekuhroXk9i5vxC8Hm3f72gH1QtZfpp7DdhHt1oEgnRA5iWEYLHhojNVchY3JKoPMUmtgb9izY",
  "key12": "5WggNTPDbkWiJWkj3kuuAamQ9JnpreE5BwJwSVAuzDPT4Jhd3QbFwFtYMjCjExGcdkGMsn8kRd2uwihGRZSWezN8",
  "key13": "9MF3WmkMaJtnAw3aqGFur5AWkfhZMN2wy1Rwd89vFvK2E5zk5tea39cLyGBpZkrnsap8CQJxkG9NooiMvmuYuYn",
  "key14": "3ADCgxZFGtd8jJxLSWKv7Rxbfy72wBo99L1SL3eRJ15XJFgAhSnMQfmkVFa6u63PHKFZSLM6MZdZMUevh1xaWin2",
  "key15": "Wd5mzJbCFJ3njjVkM8WJ1ozTgcQZgtwU3jnz2yv1Xp37WJfoSu7wRCUPxAHaCHbyzMVohbjz3cWnRbPf3dJyPUd",
  "key16": "5yJthd2G733C6oJairRLUCjoqQ72bytS4zwEULsz9CqggduYCFrzowTDBKmDDMUXYJdmBw9xKJQiZicH6VbFxycz",
  "key17": "5yndhHh5no5YZwNiu6WdyiB9t6YHAMzBt4acfJ67RhnSzSxTMmRvfpVNjDhsLGjRVcrM4j4z9crZADde8yNW9VZo",
  "key18": "39u86HFgKY9F4TQsDqcRFgZyEkJV4YH8weK11Wx9cBHD35yLttMmW5B43CVRHdWcdLm7C6kYd44UifC2VwQBNieU",
  "key19": "4zNtBCEpu4HgpfXyY8WNF1U1XcpEccb9fBsF59WuYNztWCuKHCy4XMdGtqdyZ6t3eBo2a3zZrkspgZcZFaAArUkf",
  "key20": "3tQdZ1Ney5iy9RbxJ4de2i9zF5xnAKfUBmPo5J2oTjLbJchkrN9Q6a4jNnr43v8Dejccw9n4BZJ1YPcaAmf1GQbe",
  "key21": "4A9nDMdvuzU5sYyttDmngPn6bjFQC21fEFo25oxUipyrh5cKGVeX9ZnUFzdLXho2moCupp1QdZG8GMthYkRJWmRz",
  "key22": "3wpipAUQvKqw28uN9WVewSPNXncStmuoSECzk4monWTexc1tstmDD7JX1DC89cWKS6sw5j2473GP8igPHfA3cygn",
  "key23": "2ig7T3rGmZBBL8DuQGDhTvGCR4SxAi3dMJTTHa4ckuANfySixTeZkh6Qci5eH7M5UYtAGhinLcA2R4btywRfk1rS",
  "key24": "2MbeZTxkvicpU9kSUdZVozkp4UWH13nwaFoia5EsfYovJz86zfpSWr7P7U73SZnRoXjD1MG5TbioQ8usxRCYry8A",
  "key25": "2wg4GH8WTQsM4UsVWXpM25B1rqaBJZkEAWzA7kErAg7shPdA22njJ2hcJv9PtBYqqT4CYf6cyCD7Hb3NrLs5U8ae",
  "key26": "2AYzLbtDJBiagxBeVSrKUAjLFGXzR4dZZkom4Crut953b8Fhsr6GzmhLvxHqw4R9wHxhSQU1mdu5ey7dnMzze6au",
  "key27": "5dKSpotwEfX4WCz1vLW732CdRXyfkL4khgbPSUUkCoCSbkhKgz4Rnga4gWnUjicNbaKG9bPco8orwhVBtYVg5eRY",
  "key28": "2k14EZ896LmmcTVQhjci5p3aGxh8Y9VCBwtpwVbZxXFkehddqnt36MSwY4jthxnHQsBHMVWdLF7mYtLwgbh3X8MZ",
  "key29": "3GAo63BUzhDktVETn2SgG6QD3YUasdjcimuLwsUhWxF5AN9hmV1vPc1UYzLpsAQx8XjJ96GkSErE8GmDfFy6Hjyr",
  "key30": "GK8HvuaH3V6T7vim4WewFhT7uaMigXHpvZLDWDLrLomUuY134KtxEfytQgqHjog4QjfiPjG4KtPcqAFy7nVW82K",
  "key31": "3TUHjgT4qBGqzZpGPnoVWPWg4AZnhteaQBn6SAyCyPXPAX6azi4tzfMk9vobeKerZeW22q4mpy5d5hpvBspwnGuC",
  "key32": "5fy7BTVKzBSMycGnhqSfNTQXQvMv9ysj1yMSMRAXQbS5iHGrULjuZorc3kV47JyjBqoBak6YUGDUQAts5DTfBQzz",
  "key33": "2ZNHDtXpbNeUsMJj6uy2bCaCrfvaZEgccirfHCuQ6ZaLG5bbDcgZh8WB2GwNrwFLpPVBjxnrFUxe8xDa81wFwdSV",
  "key34": "4y7dvXo4rDed2Nvt7dMgVGjxSj19pJzL2wuCGeNYDKRD5hqshEd6oQxNxyQqjhwvdFuYhtqmqpDU5KxWnoGwyCD4",
  "key35": "3fPaDYhkryveU3jywJyFc34LY24PExC2XGxyhuiEkbVzkf9UHGnbiJGCfbH7RRa95z7oFDWng6pKMUdaBVzUz7ri",
  "key36": "4Gb3rDd5jFRELu9s7Kakdk4DdEqQQvEeGFqLNJPEt5KAigfKDfdEfCv5ZEedREcEfvVHTbwwySgrKRiaCKDb73dR",
  "key37": "61Spd2MruL68PbsoHnAFyMotQez81nco7taz7cPegUFgomGoXdg2Wc53Tyt8FBgkW6ejTgEPCYzFHKKq9xfU9XVK",
  "key38": "29CxsUAMCDJemH8CJPgVjZcgegUXFxa3KkRB7fVgrcFKoYCkyU3w1pv9zGjVt7NMUfdCPwKDn8GJWShLDa3KBEG9",
  "key39": "iUFZJoP1bEmoyFHpKaBCHBUdwVb1k3zkiXHzA8Vd5k3enC1tLhodxupUEzPuR6vtWGLd6nXWDKcNYu5w69jtjfF",
  "key40": "kb2Ayuj9GEa9vrPsP7Y6KTpeDeo64kFGiD6TH9AoyaB5QuAub8sE7SXEXVvRUu6vZMhVBq1PShSkMtc43ZCXNKS",
  "key41": "2ZsNfkYWUgRLq4disYSvzGwrLm7SghzJ9L7Xu79dDXfTa419qkiFxRPbN2UqEKTCj7P74Xv4SytGCYe7TU2qxHPw"
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
