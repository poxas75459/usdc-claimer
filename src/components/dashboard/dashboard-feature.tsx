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
    "5LcvD75tWQjCA5c4tqG8HWpihBTNG5xoR9KhrwcQQwdKsUT3sGDjhDTCa4gxP1gh1w91A9EcoV5FV25D4Gwu5tLW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M5njjZJmBPNK4fKncYtNaFtirfzy5bBxPeP92bMAfKY1b5i57gYzAAtEPvMsqX4kgWCwP8oeXUAtm63WuPqRgQv",
  "key1": "4m9m8eVhftGKn8weL5TAku8iDPNvuD5ggUmUZQAvYobpubxpFCKWWPpud9DpjzYS3MwrvaAuosqk9KoAfxWN2s2s",
  "key2": "4BJfAZ6DeimWaUDHyHMH6wvD8RZLwNx5NYLmwdv7Hvb8daZT4TE2SWEZNyyAyvXeFLTGD5AT5guNrZ5bin2B8mmh",
  "key3": "3bia4NtpEJsr9NJyo3qqkdBsF2864zfxUCX7hRdmoTw8YQMzQJVsoXPMH65SNbbxoyPnYbQ45khRxTTfuaSaNVxs",
  "key4": "58CWD8v16iyw5p5Vy3ch2y9erEXENw6NMPSqKa3nRzJDuVKZnCjeRhqHv8AXNu1oQxXtE8Vrdo693Euj5r9F5Rj7",
  "key5": "3tpxLVvyNSHcbhDixz548zqX3cK3s1NVFXpbfkw6ydE3yzVQtp32eSGzG9bzfMM5eyVPhoWMEeF8BH87Mu6K9mGC",
  "key6": "5yKeSBfy9wXS8ioyaiyUCJKeEfmKgjLmH4Dn3nUiJeJASKApyEZuHtk589MqB24MxxAbxw3i9JShUzKhGv5DURyp",
  "key7": "37RCZAYg9EjYUzkjdKjcvsFi5G9sehvhfphJBCC8dAsjDcHLmAHYUsSQpKEqE54MMewwDAV1CWMhy8XCCxmrRscr",
  "key8": "4wuDmBRQ8fpDbyXTkidpiVJ8PiBPFK53ufAwv3uD6zgqxAkKGH6up6eS3bTfCngWUhQHupiwbZawfXkD3cXJtSLx",
  "key9": "wRowJTU8QN1UVj2KjRCUBM13qCRKgX54GQxzDN4qs9NLcwFE3KRN4EmMtuovFSzjpPdNyhiuAN5CdC7v82hxXyr",
  "key10": "5XMgDDsvT7dM1kUsYTLaSh8W8KUpDHHNdLhSEtX9na7dyUAXyG3UxSFfdJo2mtsgAcD8Q9dNk3tMU3USfN3H7KXm",
  "key11": "2ST3zQipw97wSrJoraNxL7oPeLjhLjPjhpaCiDnwthZmtVn5booGm7DZ6GdLhcWKnXjyLazxrZuYwRmHwLHAeRRT",
  "key12": "pwPgxcEeS2NnDj6ciHSd28b64n3sKwxndvZeoHME9JbgM1g2kKosN7RZ3itApDdVxbrHJajhuptMo5Sxqov6TzF",
  "key13": "4wckiR1qjAecCAiQSHsTYGBDRDptQAm4ZqPpUX8RpSfooXu5JHzGNHDFgDgDyNkMeJbchVSAzXtw4eKv76MdFF2U",
  "key14": "3PrdVZHBeiL9uqDVMZBREDGfcUtGkx6LhV5fwVHc2Hjh8TFfs6pEnQGgCss63uer9TywsvFNkS7bVP5q4MaReThW",
  "key15": "58tfV54URHAdKnT4B4sy8z3z2QA3hDGY1PGT5Na9xvBDDYfrmRJ4r8GLVnbUdpXCD6oDFahcsfH94Kfww4VAb9ay",
  "key16": "3cQTmNjtqw18U9ufWxXkwkarbxig2J9PQ5BPjkmpJ2Htxev1hHJ7fxn2tz5zmioirdhiYFhTGGb8Z8hbGNsqb1kV",
  "key17": "4Vtk6E9vVboTVghPUhMoSxBGM57DfqXEWsyyKe3x9vKcCVFfG9SJveBXtjU73mQvRGYHDBou1cRYjpHqmJyXfqtW",
  "key18": "2z4RCvxuQvwRqdBh9SEyoPPzeXPokxtZPAs1qGG8kcQLmuxaANqtBU7mfuDWCNzGN75T4eoZbgvmJUkpShHSmp2o",
  "key19": "5FaQsnsrgLKeG2eL9eqEMJYonpsywUWmuV7YXdpg2ML8ocLnAaqGCQ3SHeM8S7r3miBYQU2HoCKHR21Lw1aCKobL",
  "key20": "GN63pv9vFjd6yjdMQdpgeXK1L61mvMcR95JWw7aQADaWr3Lgrm9T5EeVv8vr2sq9734KJx8Yi2GLLQqHcD9khmd",
  "key21": "39Zy6Hz9Y5CBTVSisRLPXNEC5Tte68VoJRHYNCqQCxgGCjzLuL2cSg4dV9DgKdGhfUw9aZ7sEsmmsvUUuXnPBz8S",
  "key22": "hjo4UzKvXDm3wERM3uiVHm93svJ76ACpXwW4trxCoiW9VdSxntfDgvGpF2mP9EbPBKNv3XssGH8Hxw8dHMu4JRU",
  "key23": "m2RhHgodBicRBynUtMpbmLCbYPRyGua5ZdhuWdkhXcYuFKqQyCcWUtNXrc9GGD9yqY79DYPLJSkqLNQqqZXrkHi",
  "key24": "SUUdzvZb2sWCfXvHGts59CF3bMGijtZoDEKXGV4BCBe7eMkm9Vj2ZyBe5tYZqEEjvLAEp6fjKykX2tEFkL81q83",
  "key25": "62ZSnFJr2bQZxrzTys3AWfqtHVhF3NiNtM9Y7Tm3978EpHNVZEA9zQhA9zMK3GJ9Z6Vrej4QeJ8J8buWnWiBXNZ8",
  "key26": "5GvZrD9CoQpxFwbtuuaasQMnh7BL95pXyLurKowvhKyJhmj1na3h25F5gNSX8CBz1siQ76DtTQp576rY8DnBur8Y",
  "key27": "3eGNdn4WxHK2TKopTUKyLvPtVddZ2oCssyH4zQqoHSxWjJ34ffUKcu9BPwRWir9WrAgqdtFNKWsPPXGQqxmA5VwW",
  "key28": "24jnMMcyXErTtHZ4MobybSYXMva2KCYQdfjCMp5y8kUkGyi7zQqpg9vQkf6WveF8ea6dhnDvWdyYM31cWVK7xLPx",
  "key29": "4HRpdC4u5iTsk66KoQURdz5w4neut2uN7b5Xm9rjTmXK3ptXy5XTxHNzSGnb2y8aaayAkU6a1QJk84u7h8m4WMnz",
  "key30": "2aGCUFTJ9sgsG4763c8mH1s2kCmFQ3Hwb7HsrWToWjehLC1q197dFRfeqxcNXpoiXZr5mC3fz42Q4kqGon2V7KX9",
  "key31": "5veDm1EwoXkuk9n4VTt7118cSvzCSskstCioUeTHUoNQibQC9qGWNpks4C49LH7N1FuXNKbBML42Mg3kF2tQg9er",
  "key32": "5tSrfhiKsXSRhTVnmotRXRfFUbye39uumz9PvCCcyDjhxMkq3rmGU8vjb4dAeUU1LxtSrZJcdE7Aug3ZhJVmkCUU",
  "key33": "3sgoyt72cR5BXKWTnh22EVQ6MtjrZbTBN8nmnjn9eELWXLN97hQCRLhEmnPKe3Grdmd3vvaeCdfVNthC1D1iXBK7",
  "key34": "tSQJ28h59HngmPBt7NuSfKHyFvfT8Z8pyHTzHSp5iFkTihPTyj6vDaj3jyNTrwzF9u9Pzvgre5wPk5zttuDv2aG",
  "key35": "64Uk8d2a7GjKxtv15BwtQzuiwYRRijcGJyCsBLtBkjFhU2AZhqZ9BJ73QbY4SFrTWY1YY7JXXxn2Ny7AUunHXzkz",
  "key36": "4NEvTWMCUbHJFhH9TKn2EbFPpo797Kiew75dD8aFDawFQJj7vrhRGi19jHMUS3L7iRTARaYxquN3WbfYcu116fvk"
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
