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
    "4tBZktDCFy29dZoQZbq6ksMo4gfWRNEFghrBBexwAH3KyFHEQCDiNpH2mpGfAC6sza2ErhxdiF7xHq9tbPwsoPS2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3esZwsNu8JvKkVNrBTKe3wv5hCBC7ewUXs1oCi4HXDYqNYG4KMb2hDVukg9JKjQc2gvS1qRj2grXJpcQskxvZVcW",
  "key1": "34EJDHnFtrwqii91mhLhZiHFPzbGCE5PgebpUngDTwAjC5ZNSoQJZt5bBHMaJDCWAAhoCKYbZFFpPNgBHT9eKz4v",
  "key2": "XGVXg7nMCoFZvD7Mqehnk1YWgpm9wQnGhMwVjA4wHLv77UEZa5ErfTksF4Ji8CGS5B6PDqQWRwGBMwVeirVfr9j",
  "key3": "3A9vbG7E2sFXN2o8eXBbiq2zeRK1jevQjQarJ2mg3CntkRTt3es6XWMD5rumsvcDqdLFiLeFixJXG6CSVqpC6B7P",
  "key4": "48CHsTMZG5x23sxqbbWuCtfyQzFGuakLv7aonhjysJRffpbg1A7q4SG3FNjbr1X4JPKVDmbcbp2bncvxiQiRNP4Z",
  "key5": "2ej6Tm9UhUxv1VMR4ApjwkiqCMG3PSrRuX4DiSojM9KmGTBbrvJihLv4w4Wcpa1FvvWCNvkd8PxjznNovBmMYksk",
  "key6": "42DPQXQT1LVwPPYhmH8LqnQipZH57NJETHKW4JJJfSMQBSqu99Mej8wMxvgs52vrzKwkL4pW1cKn1YeWVkiNzuyN",
  "key7": "4ZhDzZHH8atQ3uwC4jdCiMP5x9GQP2C9LHMP4Q78wiKHJiBjrd4R7syuGaTnxJig3pgtruvC1uo3ZM7uuFfR2EPn",
  "key8": "52NZXvBMHjAfcdAzaDj7wAbfYnwdL6rEh4yyQ3AC3sUgTd5H6tmQuQNdFLz9SG1WM3c1RNPLHk1Ty84QNwt9ca4N",
  "key9": "5dV9mvLPSzVfhgS3d9t63EkTSgsiwkP36ZWByB8VEqmbQ7nUxBQy5Uu1vukQqZHEfmvwz4uZq4yVihLqCYytKt82",
  "key10": "5mLBXNSYYkwChmhKxJ6aqN71iuQG76Xc5gnWsHocqh4njjdzePmbhqGUT5aq8rCizTT5Zju2dZbKr4gD8SWx4Adw",
  "key11": "56199BrkY8PBEQT4p65TcVoMFbVxpBTJdmtdgd54P5uXbJ5mZABTik7gCUAQLtRv8dK98eYnYaWmuLBcr7cRA26Z",
  "key12": "39dLRNpoMWpvpiGWrESoDzhqgPXDZ1UWv3Xmf8ZLWafukJeabhPJXPfaEh9AFzhcEtpUvkUyxjKBvwK2PdcQurXF",
  "key13": "QdPmgDNBXufKr3idvZ676mxBvNA26HM1mrZzLcW4dZjTf4nD5PiBgLUJ5FJP973USXL7yBXqo4HLo2FmQAwtHBE",
  "key14": "2ZA8gm26a96RfHJBkBbRMwBpwJ3R4GYaHdTAUfXhGodasC8FibhebiRby83XwwbqyBtYk4BDiem93fvjJ6WsHEQv",
  "key15": "4BgBYXy5fgdv8NDbDJYBsjuY4N6khHA7cDAkNHqSyL4mRdFDqqyL6r6W8wwCYs6W68WZZeCpfNuJfHHTcQdijFf4",
  "key16": "3aLdD8uJCAYE5QzFKEsyVL7MVJs7nm9LzAgwf2rfDCKxbCKhGvvCctTNLbTbMoFVrb14xEXe6KGxL8qHHeLep9uz",
  "key17": "5YwEYrXrHanxMvaJqRBrYRTCLhs54MBcimWpuRegCYTESKiG8xTJTVGpn9HUKHxttXA6cJ4uaNt8FCXJUFAHDRs5",
  "key18": "2Au65h8D8Ewr1Mk649K7Y5GaARvRCSU9LJeG3qLFZ4omY9M1k9FC9d2G4SDoVpuNGXouWbqGSRWgdQVPtKKNGW9r",
  "key19": "2dXnWVfH7A4rrVsUwCtgf1tP8w7Jagru6TwiaiRtmwYSz8p6mjZjJkhLkF4egyiMYvxunjMJbaqfXEFcXSdkA3pR",
  "key20": "5b7US6nsogNm93a36AVi4ayjH2phjyYkEv4nfSx8Ut788yvneXVKZWqCrHp6VJbib9SdtR9uhrubjgYouhbTB8Rk",
  "key21": "5biUMvWppQdY96vkSJ5yvUcfNtzEs1FwwHNPxQuxhVJKMpvy4tUVzN9bnqKbSrJarj8H3N8eEKnqxnLkb1vHDXZX",
  "key22": "4eGnrYBTx3F2DFhVt78PGiuc5Ke7ovh9JneBXxPR55sHiW6BPYmihniLvGrBjiCyAbVr3gM66fqaWzfNpLUqTto2",
  "key23": "5uygo42XuL3NgZkfXdqR4DrN9zEooVgXCoY7jiLWsuoKwKatdCuGyWhtpSfK8hcGr8NARCYoMxdyWqdM2Q39xK8g",
  "key24": "2XpWYNtfHwqUbaiK9yLjxMZppgxmCTt5ZAoZ44H9Jvu2TJCMeEdEY9eiZcU8v7MNt5EVaXarevRdDLKDcJqNWGyn",
  "key25": "5mkq2hJUvyyjvmDReyjXe7o34V6duUYDrwg8ZcQyMM9JckpGN62L5R8bTuYWnEuKPCJxzx9aBsfDBnuA9K1H8TYY",
  "key26": "36Eq5JtCuoKRP4HUXKQWDz7ea2Gh2QqSWHqC9RNADgmYeZLyp2Me29Wc3ZY9o3Uinau7byAZ9YZGzNqBZzoeQeGN",
  "key27": "25MX5iCeLazEjNgHE2wv6UAbNGjx3fBLSFEXdDcBKpbEjcixkdGvjeZjarGjTYuu11D4sgEmkrMynXkKRYJjmo1i",
  "key28": "4SsoN7QLmm6CVk28iT8xDKmXBYkxja8vE16di3qNocai4SvAghV8z3jQjjsgE5higo9dN2rfX6pVW7S3rzqj7W9F",
  "key29": "YzVHGFaD6m5xpdJokgmCLN6jhWPmW263rGbALQeGtzjAHtxAvsoT4vSw3rUuBi8C7DyQWdkgNSpVSji2iNXVD8N",
  "key30": "5p1SAXX4Pr6K2nC5f51Jj5UDNxrVNU229SvgxG3EEK28Vaug2zLJxfFL73LnzvEB8NnwHx39epKekxqssmvE7BSu",
  "key31": "5eKAgg8MmGAg21pb9uxh4bEHikiDmL98QHjT1cveDwnazVcyTNXoyiHDWvBZmGLWBDbAZcTtLHeBm1ShJK3eNbaF",
  "key32": "3Hkyby4S6stWVAm7hPRD4kopnkczp6CMMMEdCHYDEmRJBd3w8uh6dGvV2du9Riq8sZSLutk9m6Fk9W1WCgXHTnkH",
  "key33": "9SpTVPiXmLJo1NE9yMq1PABhuPP27LTa9iZr8oY92Jg7kqZPXZaerHVWWeGkpphPKhkmVKyBZ4PUARWpEifvwqa",
  "key34": "2Tk6sUekpC5Gnw2ykFkZUoMdw6Wgc2tHDMLjDrhfRqbXng3gyR9KjTN4RaMd2oXXnzFpo2xjunGVxfeodBd33XRt",
  "key35": "56vdYUfyhtDpnpNR37EwskTWEQ87yEyE3MXYTaEW7e6wBeMr2gnRGg3QJvUSpYSff8VNWEucHn4z954fDWw767im",
  "key36": "26MAEiisVsSjpuR51MMR8E9xEaCYyLUHeQGwkFUFkr2G9P54AYeAwT9AvLaCoeaDvVAYVPoRr2GSwoyn5Za5cfiR",
  "key37": "2FpL21JYLVvoVf6Lf3fNGcZasta5LxgEmfR98QgHGE9xxnCmyXVnS5k6tmuRyWkveRUeoNPuWiqVzV2K3dHnjm9f",
  "key38": "LdHudZyw5JPMCDN1C9xmSckDXKAvNu5yCYVmQxvDGcrwn8VwpyeCUSLi5Rekyw34PWDeS9eCYMYDVKeUzirv6fb",
  "key39": "3LDYP5zGtmt3jUc5UmtVqx8ta8bKjSCTpxE46kXRFVqMWiQaqEdcZkqDP3aDGQ2H4m9X6ZW6gaaNCqwZCGXWWf9z"
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
