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
    "39NY2vAvec3x6UG4oNRidPUCQ4DNd51vG7mCUQt4cVLD6yXPtJkqVqqi8EoyhnRyjuU7VZwqZPnD5C95XUefzuKH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S3fECKtBrZA5SHAaBphAMn4zDNLYb2nKNv5eCqavtehrPB5GEGz4oo85Gsz3zEbq4njFveZpFoA1MCk8apxTeAy",
  "key1": "2aPseLwYqU2uxsJUwHptnbQYzvDRMB86JxuvgQZgrUhy8SZqLPFHunCfmYYtcZ2XY76Jf9qaXYWBH7xm1iSnUrrM",
  "key2": "3pCo2kQpcTjH5QZysexDAvhYKTVzjMN3F8oGvbKYkxcWQsjNKZWbXPCP4Ky2aFNoezkGD6taXk5g9doNBsyJQrF4",
  "key3": "2k6XxnWkcdtNj1ucFmPc9uysc4KeUvkCuRU9qdpsSynPzhQoV79tm3gJBAvTxMCND5r8wpdBxPbRM1GsficUjTgf",
  "key4": "3G6pdCuaPxYw7KtETVJA18RToVqdRepx7VFEmX8DiQeASLKv6udZ5A1T68DMin28EwK2yrr43sMf9NZcd9VQTaG2",
  "key5": "5ggG3yAKpmrGwqAge7N2siCkwiDqCwUtek6HbHqWdnA9cT1PbVAHyJgPKaQmJiioh9xCPrEgt2oftRZgpvSbiz9i",
  "key6": "32ygjDoknsTCKNVsAY7SGpKkCVtqNVFjsgxh4LUfgCn4nT87JkbiD6gLGpRXaX7YQphjYwTmANfytMELknBZGqev",
  "key7": "DkB43inTSPoWXoHwiKsLPLRYsui3bwJ7dj622YdRYgzc5hBFFJb7m8qp8EfSLvREyWYXvV5goSjx1o521T8H48s",
  "key8": "3T3biUrNcHRisrKUhMY6ivvTtuCr7s8C9jBxF9FDPypzPzFf9KfJ3zp3KR5hUUGcPubH4MoGB9mxQuMEjjJH4cU7",
  "key9": "yjJWj2QHmaMi6L3wgewEdG7SDWT1sKQab42FBggfJewtz9jewdjJw7qSUSvkEyN4MCX64eis7oJW6sHYYGP1qJ3",
  "key10": "2J7xRUz2ogzQ12typZd6bLjtN7MZJnAZB2RuWaXxo41zhpxUPyfYjuAehMQTego5xnuc4DB5tssoe8fm2Ci3jNfC",
  "key11": "C3WQGW5QUnQoGR5syLzhr6d9RwhSV65XVnvrDXf7ryYigrkPNZzbLZnfUyjrRmRDEqjE1T9ZKH5uhvD6v4A8SH3",
  "key12": "5uvo2Xt4zqj2FnThw82cyn8fFbYwLuNhBZLZZdh88kX9nzkuhrupqwtTiMf2YXTKk9K1oJGzgSe1fHbrCsDZour7",
  "key13": "5xDJrrBeZXUSJza6yaiiM1gFZDk7CcjG4cAiMEhnUd3qupETveEMMQz9R1CxKdBLLeiMxoNjHztzv8fSKBWoDfpu",
  "key14": "MVD2Qcq84R48Fg3MbJV8B6JcYAh1DjN62JAH8GpJdqjt3NSM7x9yLNx1QEFGJ2mp9esmUf8Jwx6ihNnnHs1Sj8M",
  "key15": "5EbbqWXt696cT2VmscpHY28AxpQduYjcQGtg34x1AcHytCnWV5nosUSCry7KPeBjQkUQqcvxwbmFuhrBNQdg284a",
  "key16": "5tJbmyDfPUSXR4ddmEjRmUA3woKWdf6vaL4UsyNFDtR5PPz4nvjVPkDYq49Et6YXoxueHK7z4j1gnr7hbvjwzMf2",
  "key17": "2EcMgiWw9FuiUEQzUpB8AzvBCDB8eJyFxBygQXCQeKiC6cKv1b1hV36pxtX8hQ2u5EXyFrqbseUUYomfMviH1Cad",
  "key18": "3EHWLGivHigVvyYArU1HASeoqiHUfxEF1gyM2nicrzzkKWhVnZtUWoyQxKZXafA6HG1mZSCYyt3584LZtwwRAxSj",
  "key19": "5w31U4HXxrRqYD2Mtxc91Zz1pjwSWEUehzw3N9ubbixZ8KanLnip66vRzu386F1FUYnddiqQBsKarocAQrZExhTH",
  "key20": "5D1GmUQNJdcBgysBE3yntiVXc94tSReUe7zzvS4rRkWviiBNP2VrpYfsY9RC4BrLuzMxSM7VqeWHkKSKfpveFSpA",
  "key21": "3gR8GcVdGf1B4ucimW19vCWwBgGAQVZuLhMycbJx9HqvZe5qR8JT6P4114uN1FQBKbax1jsMJFsX2p3LGEWAgLRy",
  "key22": "5bzuVkhzXK4NcFraZgv7NnbMaG22ps7TG7DjnKSSgvLwpQrBdQub1opDHMrksbaQTWV5z5YgLKhpbLyFrPcnb4uU",
  "key23": "4XyzEoAGXCRr8qfoadLk3fMaycsK2x5sEu1LmNjRuqn8QGZDUnRcYCLvM83j8xjmJRqnCZc1pHki6LxNM73kDZBp",
  "key24": "62uom2xn2SchF4gr9Khbzq3CC5VbkjdvfYGB2wV8VU9DFhycagLc7p9b8zP9maparRBQ31294NDRMXcJymsD7J88",
  "key25": "4zP6GJJ2woRES312kBTHuma1rD5yeywTPh7FCPwMoJNfxzKwHbZix3yJMvCZAZVQUz1j7vqh3iPc89nLfDvHTCYJ",
  "key26": "49EqL9gA5sowWHViwvkqfvFA93YBUTLF6Q5BabM1WB95uECppUw6VeY4G3urtNMfUCFXnN1p9ysGw7ANJQHhAc7X",
  "key27": "JNLuz195v6aJiuxYWxjfSz4kdpSp4tEFeM52eeZM8LP4EAhbfUFbMjGqTQBx2cHU1HVdcoDfYrxgrYWqn8T8r7C",
  "key28": "4V2GNpdcrteUbLTFqrX8y83ctbuufdMUYwSTcDqiWVXSr6CAxd49wdbyFJcPK7TRq1TTCkeSrBZKmnG4CcPpuqUo",
  "key29": "24sh7axb7fSb3wDHpp7r2UDeUn9WGqxnNqh17LYWfZ52tZu1mBdub3ePtKsQd7zTHhDNixnYn2zZQpxv7xfuw1vS",
  "key30": "3kJ7jJVL28vKUBeezw2dJ7PzMBNSdWiXJgQYaJo9ym9dWhBfgjdXXTQoXvgpXp5zZdhfdvDc9Drx19qy3hfLRUBz",
  "key31": "5vwXtSjRN7WUYktMeWB4bnJgM7F3ckjHhJPRDJ71LCu4LLbKDgyzByJt8oy9TRqisyk6hRhheH3aoMZzLhX1mYok",
  "key32": "28CEarKJREf3U1KdwahzbtAU7wR11wGhXXqLgZUpKuueW93qsvCWdRRwugvtkYMT4Ds6gwHt2CfP8XUSUgfZo2QG",
  "key33": "5h1j2xd5JSXDBz2VvoN7sM2ZTNAtuaS5o9xtuy4voJe2GhrE7f5qQDq8jQ4PRNG7kcNUej9dreYDvMhGM5v2HbxE",
  "key34": "2p7p17FA8uWGNU1HZKTtPWY9Nj3aUgE2WyJes5n9uKpfASxZxh7wT54qSKmeaM6TgmBMUMwmT1kAFtmUuaNQiYWE",
  "key35": "5TK5HeVist8Eg9Wn4SdtGJvp6trSrp2vSh3rmhs1TVwhLx1TvaGdoNat1oCrBrgEMabUqV7c88ap7QLjv6jPxBCe",
  "key36": "5dzDYtQtLnywsCLshzAgyGR64UKo9wAFxHxQG6oJRLfpKaD1cinSYhGshNpkVw1uJPNsrPvg8LnpBfv6GJoVUPMo",
  "key37": "3FhEu5j4237Bgi8WA4tC4zfiD8v5em6Qj3WWDNXWbteKaiF4CZ1WJt3Ec2C6dkMLiFsaK89NyRTLgz9xFqstG9Rz",
  "key38": "3mtPj97cN86nPJemfNRcBsTK9RQxPu1sDL3xbUEJV8jY2pDXqrsgcVTpBPANUjdgwEcKuRd7nDLpZeJf7FzA2C5S",
  "key39": "4QxV4n44pAaoBeBqaoYNgAaqC4gnbkCojYrdvtByM2SY6uwonMQzhp7Dv28sjzEJZctWUFwv3rQNzFS1ssqjAg97",
  "key40": "3dcdDB9cM15QsCDCXj2CwwhDnpt7iL67BQs8mstd3PvUzeHyEMK8Xn9e8iKfViPfZMxp1kpyD6tp9hwfX96Cqkqo",
  "key41": "51EdfLnFe91dRrYnWFnXCfhA6gZJ21zGBdRdgxGKXJ4xmHCRS5Vc3JzsycVNBoVFM6sFQRFbX1WgJwbMnVJ6huQM",
  "key42": "65JN75mi847K9v52E6kTEYheCFuvsJPsdxD2zqhycRLtW8ZS6ncS9bw5ABxTQ81K66sagUYacRfu5F8FVSa1ED7d",
  "key43": "4PL9B9kSKt8hufrDyz2d5G8PN7fs54HhbQJ3R6pqivW9tnANV27dGAoeMkydu8AP2MyLpsXNW3azvXxirmuPa7uj"
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
