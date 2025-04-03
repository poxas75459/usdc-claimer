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
    "24RnVEAJVzuWakBGP2WBeEKeXfKUFuvDLX3YLFyZaKxbmWJFSpWz6gaUzjoJhxwoZfyyLbnBBf5wkYmdqe543MvW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W7otsS73NCx1yyu4qQaELboySU3DSoCD2h6L6dPiaP25RcV6Siicf6tJfdxsfkkutwf1w6LDnmDicAUZ3C9uYQW",
  "key1": "5AnXJCe1F8GADx13sbcUhkwv9TC6V7EvRCVGg6dNjqqH3RWrNUeLzAYZ76iUf1TkM8Zkdkr8ZJCXW16gWkTRVeyj",
  "key2": "2M6FGciR4KCwWb1HeJMSy6c3PZcXd8H67vhpqLRvoLc6YrPf55oM5xmj4PBYk3XyCmyi2vEJQiPXxUt4X9XrQFeW",
  "key3": "42QNi1Hm1GBQV7wjkedYYkYbf7nZgAyf8CX3rvn7AvpZD2mBfZXYRDohwuKXp83SiF193QPjaKFB14TuHGz44YrQ",
  "key4": "4GQBkPkmjyhu498S6ieQEMQkhXs4PsgStqa1YqJmU5WnkRzoaREfhLxnf9VWsPd55XgxSYWFS49afiRfhArNSkme",
  "key5": "298WPFkdFFNpPyH59uw9kzvbR1SqQ6CxHVTx1MHfT3zP6qJBL8iuWk2FBgQUnJQocYsUB9vZU5rQMAYKXfekPGZQ",
  "key6": "5aeWHvCWVudRwMX1CuQNFhNsmrfMpKAq2gt9fkX1nSzBzbvGxqEtybWKy2fUXmqA5S8GKRabEsAqUnKGQGfvdT6S",
  "key7": "2junGm5AWHqAAT1auskqeqcKXxFJFtrJykXW4oj3e2wvJTaf46W3qmby14y63P9DuwaCz8c1xZocDX5ywSSrsHqU",
  "key8": "4jEcHAifCqQt8CGM3iQkTbDd8Kww1sNh4rR3BWVETs3c4q9rReHve8h8guHqoEjGWvxYaLK7qFj3yY7pFS6sWNXo",
  "key9": "4RETMVH94bXzDE2boTnoNNPNgrDvMNinPKQ9pvDudEK1WwqBwGwghqRTyWzJmc1Nobusch6vvCEMpCbaPynBpQi8",
  "key10": "4sqPNeEmE6oPZPujALR4r1F8nTwt5ab1cmgetZ9mQaaswSDASLk2Uz4ujFnGFk8xHqvMTpJXtRa4WAnDZsksq974",
  "key11": "5U73RbLfN42JPGmC61KvMAbzggoK4uh1k61sah6BzpaUKy2GmaBZ3A2mi3sr1mqprzDmBCgCBQA7AjgiNqr3PYEn",
  "key12": "4fgox6HFD1V7g2aAGsHyLYW5Ho6ZyBCq6UkPk71nBq9vyHst9MD7vxnm2iqHNqq8Wh98WzZVJM7Czzurj9LpPpjA",
  "key13": "3PgnVF6yYGTk2NTTUVB48S97E1cPScz7ZjKYfB4xwVC3iRgjwk384bD2VJ5NV8cYRmS6bGWNcJiUj2dikfbVJzAd",
  "key14": "56YxQzpAoGU8jV7sA8RGifSnNRVMoA2ZtEaP28xtK5KZvUbhUXpQ1467VYytMQX2GbgWFfsoMPqP469wTJHA8tNG",
  "key15": "3rw4M3QWTus9gn3auAMvHq2EwdYRgDdqze9Uq9o2HteC5eVdRMbhr25PMcGnSyrwt12Lo5bPekw2JvQDusdGZeVd",
  "key16": "H8xMigTNZYp7V72JzERXVfngVBozHzJSY2kNU2kAWcsEWs3jpWhxBuE8WdTsmdNwRwDaXoYA5JZL6uXBSJ8fnxu",
  "key17": "4xCfy8VJacU6hHT7don5GZdcvmSinqR5ApNrXGfBrephBSNx2S4shkb3WBzbT4oUMAofhZV2TKPyJogTAL4zrXy1",
  "key18": "5CtNFpURfBchqhjxz23rLy5uv4D4mmXeuS7tJYPWG6gHm21sEcrmwDqsHbQ1GPpR4MpYWLS2b3DGsRfkToDL4mqX",
  "key19": "2SP8P65SkXtFymAfgXUCqAuFGVebahGejJDgXbQ2hXqcqh8Hg36W4ri2nPLTfqBGnj7MCdJcp2JRj3XCCBYvXgaJ",
  "key20": "co2SSwUHbZ8rHc3Lxkb93Es1XE884Mft1CK7ebews1VFsQ6T9rJ2srZKnoNSRujfJEDKTW5ubKpHbCd6zZ8DGB4",
  "key21": "5LD7CPoV3NSANedfrRJrjhKxmTQ9eHqz5KRLWHLuqfsrMiErGg9jmZ6CsMwCHDiAJeeDYod5pyvF3s6SmCsYMWNf",
  "key22": "2wXpWh3tc7dBWfiwg81iXmfrg9qYfsFBT7uyWQgC3MJTn5kn63yr6JCK3tMyrkJaTSZPfyQ9ALZt228fYw34GTx7",
  "key23": "359pc3Tq3jLzY8ffyA5iT7g4A6cqYeGjj8yPQTdoVtSwNXwhfmZcmJnoPAhA5LhuFnypwKyk9eq1W562WQQzYFmV",
  "key24": "2kHvcR3zDw4rjNYayG933kQYyxDK3EizSZ8o36c9ANmX2Nww6c7JDyKSbmo2fD95VrYvyVwsuKccLJ4VZ35syKkh",
  "key25": "4J2vnjPe3wkXjz2FbRzyR7rZwRX4t5xUGuDgJrMy5eyo86Cdi2Znqxw9SapcoXueoHaDzsNwvTdUJmgadZoNC6Sx",
  "key26": "3bwZDC1PLRvqg7SSy3a78YmqYCsxz81NXUcU4Q43agj4KYTGMKiittqq6oiayjzTkh9SyrS4CuRJ16kV4Beyjk5D",
  "key27": "mByia5MMNhz3oNqTBR1jvUtCo8ocECqqMEaWbxMMB73EjXS7EwMJhcDgvMrsoTYGebudpZzokYyUEPST57XX214",
  "key28": "P5x95RvgMGfaNwP229eYn9TKiupFWW2WkvqPFhm34rDSdP58wzG1ctnbPmGHBBcA3dtvW5WeLH1B8C2zi5CBQ2a",
  "key29": "3FfHKmE71dvManCR8uydKX9Q6gWJtMtxTHvgpYYTuh2Ef11tpmboAHDsrnLHf7yH6g9bL6ocQyVLgXF2WTb3TfhF",
  "key30": "356hwrLUqqsi2qdNFK25BX8nd9UfUuR2o2GiQwdcGvZABp7NL9KMsrqKky1zk4CUrQ7F3cQHrYUAJS45qWgBDEZH",
  "key31": "2cTWhynkz1mcqDD62BsZ7tDkzBDEssr54ESzjco8xoWyaKqFUGa7exx3CnST6hq5JXAbo8w86GWWiWShwKjLmyai",
  "key32": "5innEDyk6RMVd1qZaCHQvxDFgqn344d7XLRMf7VTFLXa2EfFvH2tj1d1ACoSxTQR1NVpLYP5atPTX2hxzZP21yez",
  "key33": "3qi6qh8SLo2y4atzTdGcE2HKfHpoKfr18dZ7vraZ2wsbHivUfuVDz3BQKYEmoaTCDHE1iFkdPTvBbKowRTTouhvJ",
  "key34": "2HHDbgW8ndSLXNSWtGgvqMFFG52k26JT1nwkgp9SRHzHtddVUUDSyzqX6xuewDDUVAYH6cqcbeWSd8rokf66hLMp",
  "key35": "NPDA26EyeykpLb2d9gVBNRziD18rPHKpKeueY8EU2v8MFn2cATUxoaRiuRXnBuQUcrGqtth1vsVu5wj5PcLuwu5",
  "key36": "3999t98287gzMKsEZetcaMjKn7XYn7QU2fizFoJv2gSC6yWyrq5HtJBBdYTRdka8kEaLtiMpLgs4RDqh29xWzRfh",
  "key37": "4BCtGXNVRjzNkNkQW79h57cPUUyuvJ9WdkpM9KsqDzLpnQCVGhYkfoMLSoPgb74GvWrCKQjFtRe96tyXa74qYCKe"
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
