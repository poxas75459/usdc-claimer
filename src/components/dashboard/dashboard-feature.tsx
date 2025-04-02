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
    "4StNCqFHfPmGntmGAE8SexY9SNUnzW6GixKYMTJEuoBoDhdtFmmZUeYW9Yr8u5TEtqusBcrywvCTR2icvQzU2eGQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mNXCw5QXXpvggJDVgpA5SdgZJWTuJ8QFDfjezWuM23fyh8UyWABT6neESHf4tjFPkm92NTB2KHHuUNNLcKCgKqq",
  "key1": "4vR6QmYpRnfCzZBgH52wLXTk35s6Xso5NYs96GSoTZNAegCC89SkBzzP5Na2BaDcdjDLHHd2PcyPjmXfbvhbaPxZ",
  "key2": "4d4BgCjwScgNCQsNrh7WYPPxMWsgxDHacoBiFYqE73TjoWAG4cwaSfRR4dh3ah8KUf17WFMYw6n5uvyMSAYdm4cF",
  "key3": "4HcGBnWHzMSMovTb6NNLcGNfJydMWGJvB25t4BdWMv7etgYZRYhBCfaXgHSsLzJgxKdnh8PJ4Mqj1NoqAZLdvrqa",
  "key4": "2sMPKdVdgGQgVSrW91vuh28ntVdEtvwcRhhCuxtvAChDUo7PqRCWEW2NJh1NHNk1nq2fwRibAXtp36ZaxhDTnckD",
  "key5": "YVETk3N5xUBmZac6YgqvdW1URVZxjCsGo5xRBX2jgdjJP3QsNVAsfi6LiVyE3NUWhQuk4fxUTmDYYEsGHiok5Q2",
  "key6": "441v4Tnq1TVXYNdHpgDQSyNCsv5294BKSoyMXefqL1m2CoY6ozA6i7hfiwTfwj834eesQ4wqjHW4hnGpkecuNbEe",
  "key7": "VmkHzwGEtZgPKmkSmr2M9nyPBxFmXDNNbSSrhHqEETiz8cYRWTvpxfViwctAJcoZ2FSTNdm36A4rV1cKykDcYFM",
  "key8": "5JReg7pUZDfYV4XfU5R8DRnmaRDrkXGJYDnKFrnPnM7bjeihS2tU67Amvg5RHp6H6GdrjsbQJ63Lkaa5pirxD44q",
  "key9": "4eZoCghXuqmgPZjs3TXCp8Ee11Lwc7uZdrgDbPonJf2jCVTaeUqqbEGEeDTzPYMBiSgpCpPFnZnYdaJ2Z99rTvaW",
  "key10": "2SG2osmWwZBDd88AfrrMALyywWVaPNJv6cRTsYNH4PVfwXq8xCdcDLqGAogXTTfFQZgM69tjgBTGEuTA3UYqSUnw",
  "key11": "E9cm6tP5dp5Am1rAqQbNPUXPKU4yAAYMeagSxbLWgea8kBqcoSLiBshJyxm2Lqcs4KwTpsjo7dv4TEQwfB9qPgd",
  "key12": "LRmN7AUaf18L2KGVikaHuyQjPnbtBPyzUJzYppotTpthZkoXPMB9sgF5TkUbPc7SaUGZNyBSWN1xixts171J883",
  "key13": "5aKAz7YAHG824idBgsmaWNPjxEyc2M5SsDxN6qEgUnYXqDe1qJcvKqsnX3CRJz8timkrHVT5wev5DKVXyw42QQ4g",
  "key14": "cRisX7vHy4RwwjyDCSoZpr7JURmeuPwFpHW6jKkEXKsoAYbTqaAXwGVpiYvEaaAeDNPGGSzQBeg5a4ErZg8rsSR",
  "key15": "39yU3RGuHVfWCPNjEbhtUWC55PKpt4Bq2Kz1i1YAinWhMRvdR1WkDoRr2JdwVTU2Xrn5anbpyiSn4cfexb2ftdfV",
  "key16": "2FBN4bCZUpYFj8EqbP1JRCKsyroTPYg9GkdWb7L5A6tkpfDNSMScY7tp5EyEGALkS1pp2yMWBV9NzieQLQaFhvqT",
  "key17": "o6Ywa7LVuG9qmf8XhVsUa1yvMf4BeDSZTeemSM6qPY18CLKntUNMM38Kx3tirREZ2H8spaU1VqukiqkEgfmcBh8",
  "key18": "4rEwfYUxgcCA72A151MnSR5k2cQdnnm6YPKZgWQzmC8Gt1ioYVsaE1RRtDpeKNYdQczo6TB6PaMEGY1L1u2GVUgN",
  "key19": "i2giUsEnjJL2XPKXuJ53g9NUpWQCocUhisZsKqZ4DxwhCa7DzXc5G3Un61PfjLGwkSVam5DhTXZTYLgxYgxYax6",
  "key20": "3eeQdy2GN5YqVUqLdmCouwVWTNyNetKXJu9TnEwDrn49MDkpigrdNtMVMSiY1ukz4RpVUh2P3sDfELzzwMBevGgv",
  "key21": "JijewswqnGDVXxnUe1cPa1f7vdLaYUy2aMqbLHThwzMgPY4g5as9t3F3hWNGwkAmhkvVkr7esKirXAC5KiUscyu",
  "key22": "QkH7PUmHvsCpsPW4ZeiVj5SkX6CLRQSpVakwTQze2iazxk7eJMkHdHA7rjVQVJnHkeE7BHifjLoEmhasuCCRbek",
  "key23": "3cCnxtMwTy4eUxc9n8RMd8DpTXYNKSXSih8x1w3ZCAjjdXWJGVaCWj3R4s3hGKUE7JdurioeJnPu8DbQHtGfE9pu",
  "key24": "3ECH8L4zMcwTTCiwsLFQJ9wjbSunWkY1mt2xj4h4LXx5qEXLfX3sRiNUrFJBuJH6JuCTdkNHnUi18GBhZkY4BmKw",
  "key25": "3bboBSbJxMADTUfj5PK1CRhz6xkSPdsU6oP5LAMCKZm99jica42ARxaxngg9sXRZU9xjesodntN3iKsPCC8GuHQ3",
  "key26": "3EmQ5DzRNufRNT7t1HgTRhAtkay7ZqZgQ4GCSosTJwGixUax37dTT5tbsoMchLAL6vbNGgfgXPccp4qGi8rJNfVf",
  "key27": "3MbiccmXEbkdtRnp4xNsd4BLGuy12VRip31crt7HUWGXSp9ZTo25EwQH8bWiZc16QyFpDvTvAszUZ2qSewzDj5fU",
  "key28": "4NVKGeFVa9raTRkHWzwHZhBDmz6Doc7w1cWHcCsT21cp6uFRjhyE3a9Ss8YAttk8BuUufiBK6NWSs6teBYouCimz",
  "key29": "3pTuEyzMqR1X2dyQrjeFR9HbJpSncfxi3Hifs7k7MCsq8KkpCcPfejCuWqcrxmLHhhJf2YKzJ6PQYLdpoyJfJvQ1",
  "key30": "tLMKRSRWuqwtipS1KEoytGT3fWrtKUq1Rp7f6Et6KXi3EsP5T3Wb6nrdzSCt3cqyihE2c7o7TMmfDK5Nhn9CZAL",
  "key31": "3mZBSKhVKhdjxt9H46g7ususeSsMGYbQub9Zw43twAFfJs1MtwrLNsb2ZcashZCrtriX7zCbKqCaPgRCvpvNB4RT"
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
