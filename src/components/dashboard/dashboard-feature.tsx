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
    "3KZgg3nNnemodHpakne8v1ntU5JLKQ81ZzKtps8epEZxwCwNLFLZu6EMG5Xo5wtZZ5LqYjxuzFF77H3ArssrwRor"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hAFPGZTQf94QgVFmYKTBLb61PVS4YCZ5rTbQFS5V69E7dqtSU8tSEJFesVbcauSd2hzyGkjoX9dToi6yqu8GecF",
  "key1": "4y1p3sgSZF7N5uvJxTUeBVcoqRTsuhqtV1k5R3rCNudi87Z1Yq64pxx8evShu9XN7d5G3HxBe2SpGbmoZYDzZ3NE",
  "key2": "4Tg9KE8gs1UVa9eHzciHofehcdQ7YJrSJeeBcJtAMPnaZbbhmcGDP2Jxu8TSqESQjiHHfj5fZJ4rWV8VZPwY5hPK",
  "key3": "P8jfowUgtMkF4dPew4iV9MJkqtfQ4dBxB14aq7ua43z4ALZzEnx49KK57CqyPCtY3xjnAyBDzWUZSMVSKwZivDy",
  "key4": "4RQm1GY98fpgPhu2TX4DKEEceAi2w8nxSbt4gqNRdWeAZZLMNNS1vUhSKYbiLxN2LjURC4G8N917geba3N8XA9B7",
  "key5": "5vMR6gFhgLB75ahUptbsRdD658qyUVQK6jRz2dZ3ggdnPacgYw8Bpo3JGE2TnfWMsifo6gVfaTQUaovxCvYuCwb6",
  "key6": "5ZwsYhArfg6BtzG2b2FurZSTVewbzmHbxaBTxXJSRXcrLaF4e8aqYj6SNqhT8geZ563zD3cK2Kkbbji9kpTNYMU4",
  "key7": "3mJCxJNc85qobVgS5mw5Xiq8uD88YAbWctcoRctDnYWzTmLAPqaJsqKKADPhMKH6FqQRNgFiM3fAU7EDfxTz9iF9",
  "key8": "fPaRgppPJhFs52NzVZKUp556n7WmNdCJzgDiLoGtFnbva9LZEtB3unM8wbiSpatiytnw8czm8ENyc1CoDWv4HxG",
  "key9": "NHHS33i8LQni28k7ovVzmChud7VZPxBFUUHGdsCzCZ7dQ9qP5eCKPKd1cmNuicXRe3AKuHRwtUHQ4GHe5NgxkL9",
  "key10": "5TxjjHVsmjkr3R2kRCr1Tj4XhAngHaS6iViA3hmjeMQhVQwb56d8F2kKn9CwsHM6A6U12jtg1djk1bL97PbsjgR3",
  "key11": "3qbSW8oQF8QVE2A4nfT26HyXLDNb5TmazEHPf2FA36rukqtjXKxH712axyP37uQRLBReP46Pgay2ByPR6gbviy6a",
  "key12": "48wrNe4GidfgKspnCoFqNEhpYynnhmiRC6JB42jFLuuWnUtt1gMXnWAbG3TJME5y4kHEXHaLek38pM5ZChf5NYFU",
  "key13": "tT1eZaHbimgPpr8kC2Ds2RvaNaQkoA1ZgxSCxrxnkcVNswoz6FZiBHLXiXSEkK3VBHPR2vmAbw13QURysy5wBbL",
  "key14": "xqp6JU1Szv6yWMPK54eeHLHDzpTdpmGAyoEHtTPKCnsWdPYWFAs2zxyM4xZzUucayFkRFajporUmzGPTiH24wTL",
  "key15": "H4CULviGcNNtot4nxibcoZcJmJ6HjdFymWLzUpYWdQos74VKNSRww9BviU42becHDtK8vAa38nexHFU9GbhzVR4",
  "key16": "5Xz56zzN69LTvjPqJoqMFtSd7FmQBrcLWcZeoiK2x9mUCkj7VVxWBvSCJJt7Yt7X8tkhDN8hTDatHE7uQomXXnsV",
  "key17": "4m8MMFNTtx6yqnMZ4CGeysaUeQwfyXVNCsW7SbHRHRaQYC3zsKVqkfv2TJV3JL5K9c95DZ6MiG9rrYsxGr9goake",
  "key18": "355TL9YEZpXgPCKaSgmX23qbfaZSUDHWWziU7Q7kbWp3WDpg68oqJyttnB4PfUfUJjpvUG5Lx7p9VZi6LhKSCFC",
  "key19": "3noUFEdhokkN41RxdEFzM3SSdp286254X5p7GpqymDGpnZiVgfVT3sVFTWcxRotZkRUfnMM6fTahxZMp3xzbaHgN",
  "key20": "XpggFose8akomDxpJAw5wYb14yrZWnfqCP8nW4c6uXAckoNdupdHthK1f36qp3sXZaM9j8d5MGT7Q9BABBWN9ed",
  "key21": "3RAnnJXtXc2L6GMXMNAz5cFryMvFDS8tnt22RPebeMHrXcSAyp8GqcEwGxp2NuQ5qJgTRgdiVEkg7QFkxNdUZY1F",
  "key22": "63JQwzqacsXYE2CP6NwDk1fFqfJZB28gfidSTeMdg2zuZvbQR4SsBzekb3dwnUPXVAJfnt3BZrqbeMU8g1NLmb48",
  "key23": "4Ao3eQ3f4AG17ZCwhX3uSqjwpE5mL8t7YVv9MhRFDcxaN9oidBjNheKQxbj4KDb2C545dw4c7JVuaxck9wvioAuw",
  "key24": "Bmai2iXeAkpe1A2mcxwvRbULGAUsqN2xcwHkhqSgNz6CYMU1Mp6pbdQUhd7Etb9EBvwKfGDRN8zvsr7wE3hbpMS",
  "key25": "5E9XA29PFE3PUyZEw8PWq81fETgKNpxUTWDY2CGMdHgy7ddyMxCMqC9XYnXrVheWH5reabyrNtSdhWSjHYSr8M2N",
  "key26": "5K5SpM6zDNdcVGrid4ZHHBToWNJ3Bq7drTMbbdzqpLTseajnz9HYAcqSpWBda9ePnuM8YspKG3NHMeNXvGyhLUPx",
  "key27": "2W81KB8eSuaFVwWmYbhDcBVTcyAoxvk6PBZXQeukDvQjY3uWJg8ZYAafvbqfbBqZDrtTrecBzQ9NvYDsdZgwRfkR",
  "key28": "3G21KW4VrujVFSDtpSMAazCLanKyAU1nKJrLc3VpFkYQkHihD1JDFbJhst7eA3q63ssD98JDPTkssvPUt8hShKYY",
  "key29": "3soeQtnKHHueLBPf623WygRNQZtx5WxWLE8uXz4iLGXyTp5ksoD8zXxfpTFU7mLzVabSWARW4CYEkvBCKtPQPeBt",
  "key30": "5vaYnsHpoxs2EgwQZ5myfz3BQLWWYnN8R5RUH1GnRGHDj9BqzgfkeskUtW6XogeDtnNm2tAQdhneJd6baSHjppEt",
  "key31": "5YxMY8PcqGdTSK9UGK8EKaMegoZ3ndTfqkixEViCTfYg8cw5kRktxrougsYZam9hfWuerGuefKG2LhfwAzBkdsoN",
  "key32": "2tU1B5mdtBtaGafjy2p6Pg1XPhSwNAzbqNBRnGP36Ca9x5MxQuQqPGx4U4pae48JiTXk1AUzJRG58CT7Cb8JP3sR",
  "key33": "2CVnZ5YyX7v2ekJXa9KdajyXzxPYb8ZpSPbRX1otQnESDJrCvrPSmkZQf1cK2nmQN6WfetGJL6xmsiKtD4XG7fwZ",
  "key34": "2jTTcpcRp8TVo13HVoKeQ8zYyRQVo3cBLohw3Rgz8eu6ji6JbzZhAQzkL2qSwmswEE9LU7RyV99RPMRyNThRfM82",
  "key35": "5zYxa75mLRkG7nsWWYkGwK4fuZj2RaW666f2eZMSEWnZTaGCFrWLCPwL21fLDv3rF5PdbNXA3MBYkTJ8D5jCVmCj",
  "key36": "4vaXXmZKwWw9Gq8yDiXDtthddimpxTrSU115CXv69DiUPEAtUQYeZUoW5oqzbRj1RE2mZQMRJpg7SNJ3nry8hst5",
  "key37": "3W4JQkURvB9BevxnM8yMjRc9h727Qro3Ctb982GPhP3Sq2Qadko3RGLgmxouk9tXK2hdkoEhNeCuz4pv5vcWca1o",
  "key38": "3qWza6qSJSLNp3agGLbzFkV1LxDtQsgRnBx6NSa4TD2eMJZ7H7yZ5hJkc2RaJ4XMYSCXrGfcSMpVhH22yqpndDY",
  "key39": "3bQyGsYFzXv5q7zLpdYm74ztdXkrtSeYQw9W3zTtEYSkSYhSTw9yfbPfykZE6EQbCKR54epwm9A81S7dGcKyDyfX",
  "key40": "5mEx4SW5zHP7V3HMthC7rTVo13ofYaN3Gjux69zMwxSuNBnSDPUKQRi1W1NvQFSH7GsY1nbUiMDi8XG7Ffc2KBsC",
  "key41": "4bK5DhyXWjjwBiR4686iyxUBJxUYMUnrBycRRYGeFcMzkYZekfKymwHkT8cu3HWHGn7wmLRSXvESqTwe39Li23sm",
  "key42": "2wkbuoMXJaJvy6HYXCDvW2Y99eZTY2GqvjvTDYFGsLG2cF1f9fekynktE7qb6nW6iJRkn41QgvWbpFqxHmmAV1Wi",
  "key43": "5BBigTkjR6KqoRgrRYNs4tbz2DGPRY4caPy3vwXZjugck4bjniaTYdvoVtW1GXfUovaURgYwyPxuRXVWnNKtpeQf",
  "key44": "4tdBYwVqS3TaeAWArQebuNb8wFxySgu8j6Dfaax7NJ7tf9ev6VUKJ3H5P6goiV4BiYuEXoYMTnXtNtmYvSgTBf6V",
  "key45": "5PnpmVNcGWGKV98S9RxyFXDY5gBwJwWUqtB2MKZbvRc2zgHNGvqWKVAiD3wo3jdNoZmBVVaqr8oYpWrXhz7H6X6q",
  "key46": "4Bihj7EuXqY41qJCNWHSNWHDAeR8sE1qJxcEZ2Auk6chNxjKjtgcQmpzL21hYcDppbvA5oBze4Eu7dg8BKVSjzR5",
  "key47": "61TmF8kskcSuHj15MSd7i5mQvNbSjDC6E2m1dstgaSzhUUfzgYnu2qaBd7r7XvgD27iGT9TUtGe6zdHZ5539mADh",
  "key48": "2Cfy5njeN1MkYmXQiaUVCrMui5tQsppYrCX4JEwY3T5cLyMVVdw5RFC21mpjo8RWcd31CHpUswMNGsxCJyTfUbd1"
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
