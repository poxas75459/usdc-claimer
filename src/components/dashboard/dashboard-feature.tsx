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
    "MyvSJ8oStgndqF4wFiVcstc8dMrMLED9DT3cVoH8i9EADD9hwrZaEsQAwxuVTdCLoDn6Z5B4yFYpbKfE4xvZMof"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WFwG2CwJht6NK2x5dwQAG6y4FNDgiBhCLAS23jPn7jsa4uneYgkbwQvYQUwn1XdXC1aYgpMjn39pVCQJbZBC62h",
  "key1": "2WnrGKbwnZMbafPZngJvT4yEd6HDZXq6STr9hpCtodPSJoXytKfZcpXRfZhEmALgHSR1QjwgnY7Xff5PXn7zcNxm",
  "key2": "WxYDaQSwmLqWvvy7nkq7hgnnB9paH1ViVHRoyfav3ekJKKgaa7ayFfGHzmAxpUBRey2gM9jpEbsjR8dLHyDJEbz",
  "key3": "C8TLDKFC9deP8sj4y8n31NDoqk5d5NA9MFRSP7EMHx2ztLgwpf2RaSjWZomHjk17RNZtRhyF6QMH3FajxgJdUGZ",
  "key4": "Dq2dynJiZPdfyMT8QSBqfk5RHDWGF3tRMH38Q1mukAzbHT6KRKWv6Pgixz54JAsPWvTfyqyiRryL7qFSLF1J1Rz",
  "key5": "M4Z7UusuKjpEg26s6suZVCLPbFePyYahGNpmteectUwee8CMnbAVDctsKci5XU2H6Z93Bk6yhdyUAT4uZ8VSPGy",
  "key6": "3z4JrbWox8dJscT5kKErHU8K4TE3G8bTprgVqoNcv1wHk6bzA76VzL2miTDkZi6hkXspJu4DjRX97G8bnAQmyKrt",
  "key7": "2pmkTcizbdx6YArnMcUexx4DZeUTrcWTEvy5X4Vnba99ZetXNyvDn7QcWs3mVn9qkWaD9xMv9SPDYjtimVjvUDTj",
  "key8": "4ZK3xUMfJzJWSZ1dFURCuiZW6ehCWqGKbAcHXgVUu1vvAgS7FjHvAGjQkHk8QX7MkQdjyXehzfUCgNzE9b3VQDgL",
  "key9": "uea35GDMjpnXqH5AtHTPShMxQe4bEm8PC8YUpAshFHM3W5RRhadoezQ1goCQcn1kGV2gv7FyRki4TAambDCfkZX",
  "key10": "2tHCCMwm7t4PBncpopFqwQAWbEyTbkta1Kq7zMhxF3N3TVMd2BYvUbfHsWG29zkiaLeqgBAHjcUJPrQ5HNnws4tS",
  "key11": "4nHTh2w68BcRYyy8VXN8jT25ZigbLLEcppesP2SHhMaT5tTW6gXZWofyYXu5XstcxhySM1xEdyeSDxrH97n5og4T",
  "key12": "3bBDKouLwmLYtpGmnxjfJuwp87R2MwV1dVffVxvpKQpvZzAimuwUcRo638q9rC6dS2ZZQx6jx4ce2voKEjmmndp3",
  "key13": "2aPgbp9KzXnxQCuS2oPGq4NRJxuceYW1uhjH5sRuR9Vy5Jywn38eMxhGYEEAVWVbcU7zQitgjEmaEhCrWHwj2PmP",
  "key14": "2yixehx4dozs684ZYzxGmf77GXJ4LE72agE9MGn9gZ7wWXvtdoAL2vftD43KMa5LKBjPQvCPGSQLrFMPb28Zb7ZJ",
  "key15": "n6RKWNmi5sN2wtKyx6qjyGo2DBGdBjchpWeXzHH2NPb8U7DtZVbvhhupQevrw8UTJNurZza6u4ggu6AHfQVC3vT",
  "key16": "5nZ4eKqa9GiCvRtubqh4dqy1TomBkZhM612tYnRu9sZNPVemzvoPw5A6mWXQZAwRDyvLSuSdt7imdDDc6Y5V5hvD",
  "key17": "56H9GoFFXzh6oX8pNrzLnq1p7uhENAY71PKKZzZApXLdeZPdhg5HKBje8qh7NXsCshzKuBDeoeh2vubzpauPh9Nb",
  "key18": "5CnyasTpxh6dB7DhFZ4CxLLG44kFdipVYqspF6mZHfG4d1jPKJ4wVPModqMcYRQ1AriVjkk6aZ6RTXsTr4xzr3u5",
  "key19": "9HtLJf3Peq4SD8mZkLX8dgC9Y493nX1s1m13gmBq6pZnisYq75gcVT1wKZAVgBG32UtjoLa8ANq3U4r9hX8aLph",
  "key20": "3y7uH4C5SL4sE8gf2K1XqV1fdP8t4u89FQjAdaTeq28qrPeHqcJhUQTp2J7Uq2Dd5cB2biNezU8tA7o3rNMzJjmv",
  "key21": "5xWowHN1B5RNrCJDhUZqJoGEh6a2cLbJpA2wDwLdXW6sCvoFGwaNLHHKtaApGfcA5YwUUihuSAdUyL919KpdRfe7",
  "key22": "4yLfDF82DFRw2ik6sz2rhu3hSr25pXupuDig9gGxftPsZYzANiTzRUwpTswi63H3qobJGreg9oVUao2mWbFFTk5e",
  "key23": "3LLMAD9DZ9pznxjSZ1JuC2HkAscRmqBwPkssaMhHhGbeKcA9HeDjWT9TpDL9frH5Xy2SggkgJu3wUib1rWhbsxrN",
  "key24": "2bWD9zrCSYrMragLUCXJHKsBEzdkonNrUWEs6NgJicYSRdwXw8GvALMNCJ4PErkYPprx4jjCTETUYrXeiFvG51V3",
  "key25": "24Mz84mRsDtkoKdNK95SWwdihPCUa7HQEPh4jE6txajZRJaYGVeLakTSmGf4KH6nSLhizqQw3y1MsE92CLgz7sqZ",
  "key26": "3YLNXo1XBUiByfS2snd9fS8nJJd2DVTe4y5V8JykKoifcVgfVkYEM8KYokfLo1jC6UH1CfPCtcHSX53nqYm6jVyY",
  "key27": "3ykjzKaAMXp4wJjvVhSKG1vzyeLd1rzuptxZoM74Dmy9oZfxeP8yZi2P9Q1KtXb5BaLKhqHJUZV7HFtA9rGRpXgK",
  "key28": "3jKDX5MohYkdt9jmKw6wXuuRfj7bT56v7p585XorTZLi7sc9DkutbVSkE5k3wxHjNvwU25z7JKTE3J8ycSG625TT",
  "key29": "w3r4ppUAV3LciU9u8ZKSJhwKrncq1mmRegJKKUsAtFraQEaLBdX6ZX9r5hGfsEmCX2fsY9VdnC2GXjFeu7bgf2p",
  "key30": "66N8rm8f25ZcmGME4kvikz7FZYb6t5Ppf6ojCSNAxXkfZqjQHMv1ZtS49CEkVp7A8AoJry7qt2wDfW6qQBHBSDdE",
  "key31": "637BARYhGQdjQ9jTsNmhkBkrMJKvjPm4gNi4XupLY6SVsc6SxDE8zo57n7G9XKFiEW5hTZ2Zz9BWhv7jDSs9yBrk",
  "key32": "61GsVDo1GAucMecEELD2o5Whm6DPbNJmd3gYyfkK6N2iRbnHjaxZSZncM6GLX1EcGv3ESXFCczebFBGuhM9xRcoy",
  "key33": "5ja4aX7hgd2qtUpv1md7bRtJ2eo9uWsM4JYjR4s2CbcRFEVsGgdXdFv6Tp3oizdKLU9iLwXQz6Y6obKbh1FrMav3",
  "key34": "22iEBYToXuzePKxPjPS17uUGQM2SGGw1aVB8DPecCfGThJZFkdYrjPRLZNJhCKgmR4NVThHkLWCUB1CHHs4dYTcx",
  "key35": "2dd9ypcV6aofbYMaxZpLWQH79ZavxCNvKrEU5mFX94AFbrfdg5N2veXzYpGeqWomFej2kMhZaaTDT9VB63arduop",
  "key36": "3XEqX7wHu67fLkLNJZczHZepodEJGR5sPnD7qCLax4o8NNYqcEYCs4ZXQVypinSKUSW6vTFmJFyRKA9qnaxGMNjg",
  "key37": "2iJG1uSfyYSScCvN9DDK4g1sbNxngYyeQRLZXvgfrQgaiFaMfkFZQsF9r9mTKdhuUNAwUysyeegEfFsgWtSXzzTS",
  "key38": "4A5WEqZSpn7jDu33W7aJorvBt22QM8Tc2ujWJx9HgCTDvxyza8SQ9cgKe66P9ygx7mKZtvC35YTnuEtFRX5tarHJ",
  "key39": "3ErQ4SRMtqYuH5sZXgBzCJivmUpNaFAG8rwVxFn9VHBdnCdYTzbxKQK11wpJsbpgSTj6YsqFg6T367MB3CiE4gfG",
  "key40": "3pB6fY3SW8cBFZ88pmmpNVkJRujXuKCUanph7Qoy7HAvKjjyh95Ym6qp31zDLPCnU8Q2doJx13XkSV9Z2FrFv7CT",
  "key41": "eWfqJUjT5EfSDcRaqc3BBcufci4vA3UiW7dnSR1JCYkqffx9x3SkHxSqY3r5QH6zDcwnLidtwShok5urbCLQxBq",
  "key42": "3psopMFWWVALi2SWRwveMnCaR4fa6Bmi1xdCvbL8Kx8TERiiWXKZXRsYiRNvitK1DUfeQBuE17xUJptHU65ZhDYe",
  "key43": "33LtC3WyazKQrTeZKUvmTZA5rMapTyJDEx17MtNE2a4jfJKfR4UyDxqjpW4SpyqU9ggY9szsYMz7L7RELKN8Efkb",
  "key44": "4NTkqN965NYdPk8g3fDb99XSwgbChcoDE5qptY9nDLWxvSDwJN9utdzYfwv3Jpta8EcfK5Q9PNWqUovyPVeuFA9",
  "key45": "4cDKYtgKGunWyBTkg21TNjSqJ7hehoe7SxyneobbpEo3wKDgGzpZW66Dwh8Az5wC9PbwteTX9GdoTVzVWzHMQowZ",
  "key46": "Mt5EGC9Z76UoJuDBTtvRffhzPBtv6ioaHK6jMmY6Fujtc47f3PY1Ru319QLe6RAwfMm52tSXm5VXwSfFym8iuxH",
  "key47": "3My35d1kNipDMdtGAprDT1qVjTAPEXp7KkF8MfYaXVuzrd83fDJezxVZKTSka7hD3jCGy8DfuUDKJ4PffdfrzPzT",
  "key48": "3nUPGHWFpqBaSLKYg1nuMgneMxAx1RAWJ8rMwi7w2uukVyNMxuVFW2EJYeGhBT3AKYAEuSG5eUBTdM7s4dTrYrXw"
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
