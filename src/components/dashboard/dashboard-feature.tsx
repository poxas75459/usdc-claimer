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
    "2Yk8czrRDMZUpAuipTSiREcZnXUUm7NeNJqogTATJ5yXTetpJE5ixnSZNn6x7aVnagBhJJvZUY5aeJBrjubAk2aB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63yaGyLZuoMH96PrhgY4tke21D6eiaBsDRwDqFhniFfPDMxTvexzKMnfFNnH2KK8cV3h2CL51cT3hmxfZssE4ov7",
  "key1": "5tYgWn75BbEcSwJLxjCSQxwwdqZSGuQyZujS2pwfJZqGdj1bCfJkxskdfHjHoRnpcNvEZyLFCo98Nu39kKLqAX8n",
  "key2": "45R4vWyxFsJzuDbarymfFPbNfeVkHU9tKECsCoeiYiK5s1A2p9ap8XkFRatajjDSCDUFnpbhN87tCL7LPP47VSLR",
  "key3": "MtY8nZLUPuZZEqPotK75eNYqD4Yc12pDEcGwTLNWRVDHg8SRrzXfmWtW5ewuQzeYgoa7ZqpB7KFVA8LNs9Moja9",
  "key4": "134S97mzkFj3EKsf6bVsHaxKfaHsoAsvdavYURVA1uB1diJTyRbqymHr2YcYjGHwscKzMZ6yjrBvcYCtyevSc1b",
  "key5": "3AQ9XAuEpCH3JycnCd91sPySP1kYmZ1A2nK8tMaR1XQSZu1Q7YTNEMA6MW3CrDn9FuywpECy3g2RUwHx1Lxemaz5",
  "key6": "M4CYhcac8pYmZHW4y97ZEyY233hHnsVSHBiqFzGhq3WyqKw3rz3P5GszP9vxpexFAaEAYrGAzPZ95ZarHYj7Rd4",
  "key7": "3mUDDc4CQaG4VY3SQn5ycS9CcSY9tbCFxtRsTFwuAWrDhZZ1ZJsmz4RHBfVZaZVVU1UosmL6uQurFS8QzEr2XoDg",
  "key8": "5mSCDrLf3MTFMi3q1ANnwwkDstosXy1dHHPSP8EK3gsDJeAHuxnJ8sXwtQSBV8PAGDoUusRNqmQdFsguYpAd38B6",
  "key9": "64BC1ZPALeqessRagDA7vHxmon1BA64XYQxANCsEXHfNky8dG781YCSXLgztnQMdsHVogmx8W4w4ZtNDVMTQrEUU",
  "key10": "W1cUn2hBANgGXT9puhumddDodLfhHSFX1m3gF6jL6Gn3MJBnmr3iLXgPhwBVyBNRuFR2hWjuxZ84SeVe19Go1CH",
  "key11": "3cjGPpf8DCX171JRauPdZhwfHZYzNxbg99m1tZEXmXRyiKPFTSzLV2yhesGNHi4NBKLzonUcPi6hkdeDwbXKHf1s",
  "key12": "bemxYMpV74aknRwitXdbK4HLjdykuxa2YHcJWvRd1QH7GakLz2y1crNUTPaoipkmvvyVPvSGfT6RE6kepRC8Lm6",
  "key13": "fojCoAhHUvCoAVWRoWDX4Hxkeg2sfJ54T7Pwy793wwGrXXV2BsKfdX59y7btWEZgyBFD63rfFeXGhjYKT5eqVhq",
  "key14": "qQTaAMXZYu3M6EAXmKrPUmGuPPXQP29MLyvxAEFwve1jgxiSXTpav3kfdkmZkscVr5h3UbjzurKN9YpTYKLq2zy",
  "key15": "5ZEa3AaxGXtZqbErK72ZqveVjQB74GVnttQQKKWTkFQ5mzZLDHCPjTFfzqBrt3gza1c838HmWWSJKPH7wzSEWt17",
  "key16": "335rTWbvb75WfGkM7ifbXLXvmvMqY5DPZQF3xtVnGy8i2UQBSV19F6wbWbFYXv9iXfeXip7XrNZce9Z1y7Cr1s1Y",
  "key17": "25DBk31P5Dhcj8Vt95pFoMxzAcbjs1H4xUAYoifrqyiV8BowEfVUfK33smrkwxfME1YsyMgAPsiZCSFWJ5Pcct7P",
  "key18": "qdeKUyuzP31fhHfASRSwnm1nwYg65ZT2fQaNudhiHveuq9pGDirZc5C6TT63b8dFZFcupqbf7ZbznshHwqjjLvo",
  "key19": "3YryrRKPXEZDfphCqRjGfboE5AoZn9M9BwrnQ2NuCBDigAFGYKUajsvCf526aminXwDmQfqrz5Cc8gnwx4XvsrUC",
  "key20": "5EdagfB1sRWvpVjkerrisU2W9M6BpcFVP4tz1MNmjcBFu1tBHG2JNN98vFkNqJabeBXSLMBAfbtRGfZKA2yxx8Mo",
  "key21": "2Sv3oyPMCsG79Q7V4wzdGJFvpj7rEUY6nbcPgduYaLFFPNZojZ26mcPqvvdEMStkZPDySJZUuqBKDdrZPZ3yuWDQ",
  "key22": "3KbevJ27zs8MEg7xgNQv2txRHeXJKLzxD9FkdQD1gVKBmYd9Hro6xdABaZ3LoSSHDpyFuEnxvwjLgHDvp6RqTy6Y",
  "key23": "UdbWMnGvy4dWxVAAeuvPyoNnLQdAFu47t6sdxLLeopC8CxQREcDcyAqWui3ESYg9Ni79zWt29ZDX5uJyuhsJ8Ar",
  "key24": "2tFVRohAi9PXuxjA6b4k5Ea3iNkP2aBv4Kgi3fxGBKckZbamCTedrBSMmyhXv1ZoNyJi2HoMwuvRkJ2pAkwK98g6",
  "key25": "5TTGFXeNnDRqj1e1PNzwAR7aK2inrUxvMwuMfn31Zd9qsDWj22BTjgEF8ighuvE5NWRyn1AVbrAwpDHQTgorn5tm",
  "key26": "27kfLnaU5wKQ61tjSnuQCZXNJXEUAuRxTmGEu2TW4nXbr5JmZb1V9eXmbZWD9cB2RaXW6Tz4RJFespi1BWTG7gTa",
  "key27": "5xC2qjgdbk4ZyuthMbcpFBw6PP8r6zkCy9zE4o5oYG6m2hA1vap5RNULh4998u1xarRDhQJqRt2gskWmkXEXdmm2",
  "key28": "4D3cZ9Yxgz1Gzdi3hmAVwD2x53vVmxq9gHiyBbYWZKRhw5sfaa7dbMGuCj3CgwTG16vSKLPNXPQ2qhKkBc1bKm9Y",
  "key29": "3TWBN3TUjRPAxTKSL5moxqLK7TEsjch2WhQ6iR5nK22pHnheS7aomLTTzx6j9tbDdMN52eXC6hkna66cEQJWdZvT",
  "key30": "sJUgPcZ3F6BK5hhRsKns2P2cQp3fMxNduS29TXfAMjhp8L2vJVUx2XfUHnCvJpN5kbeFb5JrWryhMnDddBownji",
  "key31": "5Fn1sbr6ZfohQPdJdAUSWBzeCaYxrpwB2ofs9yysJ5uBf1xhYSNxjQfGwZZvhL2Wc4dR8Whhh1cwkpqrm95krzVF",
  "key32": "4HT5P9abBo9Q3xVFbZPiopJPqh9AjFzkdW19GLSpUTQpRwKujSmrXbnoQew11QwnCZZeKUh6pb4sGoYntBEh4DY9",
  "key33": "4RBXwJbUqMBtaFjFixEXdh5pisfBVYoW4rKRoy2un5Mx9b5na9gtmurdofiwsUi46wrLbHv4UUcU57vs1hKTY9TS",
  "key34": "4DWKVBaUBPhxqij3CUdJqw1ZR6wb5xQrBbD3TDRw9uvkXr8qRem5oeZiqCHpRifaLoKe2dPM9BzsGDsCZ6PqowFm",
  "key35": "5ry5cVHdvP4UZZ8GYuBrJKJxRUtMcd8Cip8bcBC2GdywjCtiwZQrDSpicZhjKi5sndEaK34pWyTbTVWDWvaQWgXb",
  "key36": "5VXsscKkdCU2oJXm63UEsLSrUHt6JXsGT1N16hA9EdxkiEccr4uqRZmMNM8MXKwMP5hgCUe5ff6gYYvgKoDBurJ7",
  "key37": "3GX8KZxvpr3Y59hcuf9vfJMHcdWeBb2mLdnGYokGcrNX41gMEWFsLosJaBSyGj8kYqhiJLGJB5EsmuLTQaeSXzzz",
  "key38": "5NK9xD4niJN2HY4CaBmnh3wPERX2ahxikLStkMaGRqNJFQFMisz3yDfhqo31Z5pVER5KzrM5YiaAmfd2XBArwJUA",
  "key39": "ceUXzNF23TShfCecpVzoM3Zw3MT2W2m8QyvtcY4HYr11JbJzBfMiUp6gZxua4Z9K25acX4aAhi1MjgRYicHEgoa",
  "key40": "SR9Enz5uENghTuE2dPutFxZvMwbFUaeLhwNzMTjQYnWayERhSro3bg18GgNsftEaKvFoJdH795KBD44atXPoKZF"
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
