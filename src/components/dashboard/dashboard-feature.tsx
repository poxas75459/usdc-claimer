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
    "5MMdBKvPwKs5Yw6nqeBcXFG9YszUSpqcN6Zq2iQkdMvCqsFjfwqxoceYZKqG3R3yD8epP4Ywkwp1riQDJKpVJacm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Mtp4duuak8s3Rc3FemGZ91hsZGHiAZUBS9qPDg8AnP24n6P7ybLQyqD4qkoZ9rbCJJ5t3ADPn4yYFDaco1p9Xk5",
  "key1": "yfX3SvBUpREm7N3kH6LZnK4pnf1W6kb9AzeichS65BznsHU9CmEw3LSSRL2T4dnKWKL9s7RGYUWBWUyzzN7dxsQ",
  "key2": "3uSYPf2Rnut6Yjqycpqg355ZjYiP3FVe4hvhcfS542ig6Adpqxitxhw4YewUG7uczjsQAXDiQx62pnCLsWgggATg",
  "key3": "hzXAkj4UzFu6Ei3bTVWK72NfueK2CqDVHDGKPXctuPAHwnnhv1fkjipZ1Sy5j4TYJs8u4oDnuFM31UE4jX9nY7o",
  "key4": "daXoztSV2U7ZcyyYSUQuurNHL3GdbRgAAT3Bk9omjgi4mfyebXLueqa4nExiptakz8Az5MPUD9ZXmAn4XYrVgDf",
  "key5": "3sGa5XyHwV3xFa63KLuSDXwwvXRAknFx14CmB9Yd4m1UXPwj1t1Dcf8YRXYGTwHxDvYdo9Ffjb5zRATyu8p2LTiw",
  "key6": "5EAooPwuXeryNNF4ccPT2j29w3rsGFw2GwsZnqbadCgDqXXGNQmpuwYyeEz2rqpAfpGSXN7TwQRdK4H5zvnQYk1J",
  "key7": "3eNDTEa3szafaAdN3X6yrzYmMcU6B9s9Dd8ip51JXUMLZeSkBVZTvnp7URSu9vTN8NGV5kQJJJnRY3Q2i768x5pN",
  "key8": "5naKcWcrKV5Ka7QhZuFBSddBNdnBgjK6BqPeLtLf1jVwvTsnmJrAZbBLv3RE4Poi8R9nWt8hibvKDZ7PTyYhDzoX",
  "key9": "2gZhWXC7qZVzStphFeuNvgPKtaYSkssZUCgoBCxYWQdxXv1YnLKXX8uqMeSiv193W1AKBpCVxiDutrmPhe5BidNd",
  "key10": "5zXKp8TM1NzFcPgrMxwHhKFp9rQq8jE7jzw3EECs42LapWtjS1VUt6RUegmWFTzzsm7QS6Mn8M54tEhyaW1R6Zqe",
  "key11": "FoWQNb4zVqAXKgDgqX9NwE2ZhJnweDidJ2gvvwr4TxtfXSfzUF5aVyZwWzjBW8VQzE4HdmXzFa8FUKdg7y6GxU7",
  "key12": "5MrhcVyd1btP17Jt6fMDesojTFnVGZMdeb2EuiCtmvVrquobh3DqHNYHDiQqEfC4evqBYh8ErmzjtaCpCUagzxm9",
  "key13": "2SSdkJq9k1uCbdBqPzDSkuNfi394svG4F3V8mDS2k1vYrMn7VauMN6Zc1C6cmPYGiEdS91oDTUsHhraKmWMHYpD4",
  "key14": "SA58Apt7iitAK34eP1Rt4fkHfx7qbeVtG64dePMQm9vs5MBVvdzfdeiW62mDkpsJdrbhDSDQYudjxhLt2XQtZvj",
  "key15": "5TNKsFwZdDARZkLH6ys3yHt5YA1gKCPUXFqgfKx2Mi5Mr2jASyGt1xRrTuQhjF5hd96oxUZbgrZuRWxN29Xq7vDt",
  "key16": "3so4KQ5Knr2pRfvEp77QCrAV7dxaYGBBmCnsvYgsw5d1FQ5puHnboRFYYL1hnAqJ1994aTe2z1SppZaPDXD6kdhJ",
  "key17": "5caoApqYyN4QkHtY1fRsEqYCc7azTAcvMzUTvNXZnnfSjg7H2GZoRV7Qtmou7GqJa7g8yR6NZEH5skWCGxb3pihX",
  "key18": "5H9Ebx8po5boBxtPMw64FpNnHFmwNezosLR9F9pxy1V1xQ8fY4fqKmLWxxH62HykgZq2Xh1JhP5Rw9hGJP1x9ydu",
  "key19": "22Wbr3WSzNnJmW5DSgWa7hHmhkPfyoKxoUBbB6u7VnFdyC9QEHjYaWyXiRyMRW4DVHTEgVWP3SF3PiMnN1MYZtUP",
  "key20": "56HCHzuMhWpetpD2z5hiM4sr7viRBJBDDWaFiC7ZAeqz4LhhPZUp8y4Sr7E3Z3GFF9u9TqLTPzdn8kc9LLpDmTfd",
  "key21": "2N8aFXr9LtDpJrXBR7NcskwT2Zqow5VmUdhoAvvjf6DLFH3sNNsTS5CtcPCGSRoMUEfFdBbRMb1xa6ViJa68p3AF",
  "key22": "2Hf7WPxsi4shiCTVksGb6KYS9vNwxXUeydHrW1fDsAB8LdFchpnXT8Qd8dZJD6cPFDY6nBgQW9AbhmiFtSRwSMit",
  "key23": "z88uT4MepB39NjCG1dyaTNbphQ41Kd9zjxFWzVnQeZD8eV5pGPukpwtywJPnTttDjU9U2TacwHyycoseRSBbAWU",
  "key24": "5cMmxnU5jcpvNeWdLqumtaCbrDAC1j7k4W8u9pA3TGvTo3487aTiQnPEUU6iG953TasQLakyCEF6pge6uG2MJ5at",
  "key25": "4n4xf3b9kZHouxGSHVVi9PEt4KU6BSoDUKA7crnjjFuofTwxev1ApT58rHx1c4fXN4j6fCD3AzcQaGYQzwpozxCq",
  "key26": "bFmSV5agaxJjusCUhjiPKiqVHQRc1nBnyTqteVGypnYuBVy1yCcRw7XE2vhaiNpXw9HKmLy5HeknsZUZSVZVM2H",
  "key27": "Raa3C61yDQuTTAWgbFAApa4Ym92QQjLqPQkSgJm3YHKLrcUdF84MKzU3HtBJ4euwUG68y35YCZ154doK2sEXUor",
  "key28": "4Tm9j8LYZMuJibBi8NB6BdLx73yLAFTmLSH65fPAVDiSGFrGXcCEgG4FmAuTSaoCpBidf4VehmKwWqfQyBvUjgcs",
  "key29": "58keDoXfvCazpd7aeLSW8JnLdhbQULzmx18VtexLfQ8QV4mazR3bpaqyysDwcvhVYD4eNSt3AUtpgxuu1nPqxef5",
  "key30": "p7t6pVWjaN6p5gdD6Z4zdjag4pDtk6rkzGGYkxgkhuFHdtQaj3tAy888rA6nJirjsZyhawPm74CG7paL7pSw8xb",
  "key31": "2BwX5GRPPBmsKLipZNR6PTjfbbqP2cTF95Qrd7gJzw5gZC9pmwaQTh1dnbiWHXFcgMCSFtEZeEeKt3nLX2QnEcCd",
  "key32": "28ozr4yDqmccwNeexcyZTmnXpkfpnDU5iX9ZA77HRaeR4yWEbAPLxbt9G9QMsFX3Ax8TarRDyanEWdztSS6j9TXV",
  "key33": "2w3uUNyk4dt7MFPeBTXEMpknqW1En9jHWVUa2dCt8HRwXd6P7UcNhJBBAAGKiVVZBP6UQXg4GPLTgNeUY288uxqz",
  "key34": "4sgFKH9oWykd24GppY4twwnwKTXEKyHqZ3GYkti21fPHjU1KWz3jJJJaMb2ryzmuB2jVf9aaXa5qDvARRehTMtPM"
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
