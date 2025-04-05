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
    "2F39THRWNGm2mGzLYyRdKwWfcrHT6dXLXWp2LhCGNCpP2khfMRGYY23jz3jVJGA1LrG2TPeHFkhHeyJNFjyxm8ZS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LfzhxHhcNKsB7TbvMzUUnKCxWxBYJfG8MSnVAnxDjqu2phNS47WXpyaYuv8pv2kgQP58JqkT4gvR5yu1zzWHVCP",
  "key1": "5Qj8aL47pwGRdy1o25etHEVpddFphqXxmgiYeCHXTpbH6xzKvg5FabgYbRWhXebnHt2vbKxp92QodnaULxwHuaPq",
  "key2": "8E6kRUYURDaKtp57HH3Y4CcCpH1wSC2JHHZtCMDdytHVaUkueqrnY9Vb4EA45wSvB3wNNUFqMzupip3QQRaXbTD",
  "key3": "57P2cnPCxvPXFQUiPQwQTYUkgdntd3WQu2PkTKRqKZG3Yukb9FUJCoKJa9nLxd8FxfLjqhk2pao4L1pwJLc5vW3e",
  "key4": "3xt3BXvtD4w8Lh8aFCm1UyDTyiCiVS98qn35dr4AW2ZjgAt1hLK7GqXK6nPNdyaWWzQusnUMsqDiuuNpM5kAPVaX",
  "key5": "45NAVmxnX9cFhboJUpAzaRP1W3D6uYpbSTHDtyGJJbcaZS2g7jUfjYbHf5CupUUQnKdYZH3C51paoLpcBicPfkDM",
  "key6": "55XWn2apkhW4mxyfKPtbZUF8ZZFKss8tk21jK1XrLr94RWjiCZeM1osLRR9pwqLEiPzqJyFqBq755wbdmoAEpbkr",
  "key7": "3CQeG9DkdJJVCKJDUXGPWBAS1CwYZQ2z8yoSQf3WVKsJH1aS3ftLeRTnHcWBAaEa4d98BrywemJcYJiN8ZBMoqCn",
  "key8": "Tq3ohHHnQddjGSVL6MgdDRctJG4BAMqpT4QtsZDmXG1PDYMf6oksEvghVRX7aMLbjZQ1oJU4GbtmtRpUbWfKeFR",
  "key9": "3YmeH3Bj7mJSX4f83TSvTMXZbXPpPoG5SmPtJ6mcVeRvAuwqRbSNEPtEmHvg8vw3s1SFBrrSc9tbDqBkspSdE92p",
  "key10": "cEtZ9adnvF11A8eVqyhNEZ3NWuu3ZdbJGVjGXwm5vQAcngR9SxoiC9gvqe2ziUDJSNZhf9gTfWsLMqyWLrb327r",
  "key11": "i1q8So35tPAQtyYKx4vqAFZ9Ejua9BZLmySeWyoV2a1CYVofn5yuUJwJvMQ1eKWVSdzKyWLK691mJzSpicegAoD",
  "key12": "4dMSuQ7mHgy22TRzAQDLKqjutabfyxSMcEnSD9xwNNMsSRhHwBYV4kr6g2fWUNYC5gt8nq6keDhCByWrF61Pfsfg",
  "key13": "4SboH7wUXpcnUCSLnB5qWQux93QDAor6L8vs1M7mbvV9wnHnCt4tjGCmqo4rKGfh1pkJazpWjUBYv2chPhFXaci2",
  "key14": "2F4NqD5AZQT31XFNkdHpCygUJzL3byiWXHJuS2KX9mQ1gbH9bhBjBDU22eWzX3MTLtQesHqf7Nvas9knoAAnFnbJ",
  "key15": "bTMqqJNKninW2kHPMgtyboHYGgzrbQPLQLJ9kJHMjc4qZKcKkqxLkkvSmd56TRNQm8m2PnYjB3Lc1H4Ka4utTsb",
  "key16": "27h9o45BG2c62VfD8MPXBD9zus58xfjccP1NBh4J8et7uqhcMsSnqvrbSVUkjQy2KA4sueQH1Hc1rwFquctoR1Ur",
  "key17": "454j1bqHDcQyEh7zF1qq52ukiwk1weVqrgmgyHHjXkhsJtVUGyRNbz8R9B4tS3ABRLGJEgqcadYPcS5zhiicSHm9",
  "key18": "3kLmaKnM8Rz3ANnzBS7pU7WFsdm7EEpMja3KU9Lm1VTVFLv2dzdeEMwwubvrkzVTCQuDsbUyro7ygTsUXpdYYJFr",
  "key19": "5dEMBBsgLdXnq655QfYzXmDV1HoyUx7yRYaUrVwAhPRJ145kwLG96XVxbwVqVEYnAiw1vvq5mzbRUz52SnCYNPmU",
  "key20": "62dtMpGSuGcUNR5DEcfcaZRMGjQZ9yLviSDgZw13TDg2cMU63FZEgbLxF3yskDmorpX8PneUdivq9PeRLgA9J3Yk",
  "key21": "5xPnpozT6TkqAps64S4D5QxMewFhLLnYoi5ZYriBCWvxGX29Cje15FZSC1jdJ3BaW8CvVUxQuFt3rykJbcKJihRk",
  "key22": "dHVB933tp9Ymw6M92v5Pkfhpk52cSbRLEaQLYCJiSmQmspdpbwg8GrWnFb6SnaVAHrETGf4ch8efpKcuYthv3TW",
  "key23": "dJgzKfZ1sxRTerQVoxgA1qPBwgX4JuMqjwcMZueRGA3MSw49kJoUpNYUzRB9SEPWSMLG3mmsUfAW4zEGbCfgUnq",
  "key24": "jRW3cz2rv9xocYiiRQy9VVjY6KDaZkJ7zyWrTFn7rzcAcL28wTjnMDWw1Lr55eYGH8RyiPxrbihmQNKCsGRZ5V1",
  "key25": "2CJ3AzgkwwaN2S8woJviXDAKqtwcMrntbHJyA6wusaxMwPuhBMt1tBpwtwMBSeKx7JRg1SKzZqdYJzypme2a9Pxn",
  "key26": "4WDJR2436FSzcXVPm7m4aZb2PnAXzTnznK9xx8D9qNJ6EK9hv858zXrnSgXihE5mA7sBwCa3j8FY5jzL5nXSWQjE",
  "key27": "3YT3w5EeBqxMHoPESwzya4pVJf6HucnTdXSJqyyTMNCZqyW7ZT87rhC8mbjcjawSjrF5sGPkzU8Drf2W9raAT8vu",
  "key28": "5trKUJJiF4VEspjYeGn8csf4VxvNzwSHGtJn4F4TvPfneExJ1vQ5kwgUWdBNEcsHsK9RrHGPqSjYnUTAQL8iSZYM",
  "key29": "3mZCuQ1E5GdJVZXxkFnvThouf34HY3p4E4QW6B59jDMDNnZoJcExLks35vz1GncpWM9eA5E3cwSTYuJ3z7trvWco",
  "key30": "2ifuxxvUEitrGjDK2nUDhr2HGHriN9pKyuTPZFBtaYbsYGYEHLU7FyDia3s1GRpnN8WM2qKjznxqYGCt1MsTdvhT",
  "key31": "5bqe4QDC8RgnobNpUerPyUqeh4WTtqCDEWgWTbXzauLa9MJEEEsBT4ePaAJhXXPTrb1Ue31Xa2tYuFAuLEw6byBh",
  "key32": "iaHCSHraCGx4fiYzcSigqUsUBhLb4jUj6ehZbGfSJgWn3QyR1qhjS37RnRCaSGDhF6WCpDehjAutdaHVYkqJxXW",
  "key33": "AwzeNnaVtCsd3BE5A74JPzfC5RohJkcbVNQBuvQhHbQq47YXgMa5Xxur6GBYb35Yffm2cN5B7SG1DCQTqZzMbao",
  "key34": "4qqKMtnB4W2ZsRpiCswZEeBXpp8XK2U4tCU8n5Ggvu12zpAftMvPk2tzYHSMLGpypR5muNYVc1z1ezQcPQGTEuDh",
  "key35": "n9jo4LWLMJg8P8NNnzyG4NwHSUHgJ4kRvKdkE3oKEhtLUCeBVuk3KUaUebAxhsbhcjh8zKGtvEDf1Cw1CuPF15v",
  "key36": "5pho4kNb5zQ5eXkpsLSVDN8kAzg4S2t2adZmyFtY1ekW6wnNmvzoR6WEKnM1CN8FJuHXz7zz5PdJvKqMier5sndv",
  "key37": "5vynmspP5ZxbAhvWCtjZb7YEHF9LRCDbcKw79JfeUKpG6jjnvqQCv4kRQisEoRJ2dBgGMdnzcuwySLuJz3pbTg7u",
  "key38": "37vKDDyhiPjBY69jP2ek3p6j17crqFN2TEJgjM6gmLmb5ZREsxdwtf5JR95ES9hmpm6rsDgDxTdx61pTeZWhSEK5",
  "key39": "53AM83CQDwefKwq3GGZtU4Huho25zQbDRfu9HA6YeCpKn5NFTERmjj6RVWvKxsHEj4WdrpQzYio9eBUYzvSa7iqR"
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
