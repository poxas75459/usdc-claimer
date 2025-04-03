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
    "5VYt1icUwGdYGEgTVW4QWpLzAQSpw8zPX2YvMNiG4Pbg5sUe49Zdf9ZE9Rej7SxAjcvjCwJT3D99LPqcYBSSdoBC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CiAFA1dEhJ5onzvVJzF36XaRi5kqDGUorKnWiJky3QURoqcReo3ChrP6rJtF3D62S4e4w2EakwrgNqT9TZFF3PA",
  "key1": "21pu5trjCfWKmNLtKKoJ1hFvccAzArUVeEvDxHfZ3qCfHBuouRRodhzmbnxj2Zvraiqaotk3MYXCdxbURkvyRZnw",
  "key2": "5zeyDR2kF5rLbTTsmMk6idPzFu3bRxzbHN8yC9fobDQPHYh8xBiEQatavXFgamMSv479J3fi2mkH7F3nFbvQnRDj",
  "key3": "5QH9J7e6UFuAaAXtzBT6TEaER7KRaf2LAaQwTrTNeg9hmiD5nKWX2RaKsDyeDXVMZDS5hjg5cateWbU74oH3YMw7",
  "key4": "3QJzPtx24TMD7H1v5qUgJyYiKD3xLbgzZrwBKCQQJ9a83S1skFcpiFNRxKLp4nD3yKPHq4NGKSpQANQtzwexCbBy",
  "key5": "3tZJhs1cZKBWdkkZrPNtJ2iY6RRgsWNgu5FBU9cscR8U6MmDEYBhVEryTPnaARTr5Whez6ZiKaxVhZqUmrXumeuE",
  "key6": "4VQMnjSSPHV5sy1FzUEspgYBEbx4KDVqrTVobRUh6XnJx7XNjXR3j2ptnCzAL9bTw4CSNKgfmEYBRS85fHsvzWpa",
  "key7": "4YSXnz8Mjydqf8KvWTtg153Hbs3SrCcu6xvdczZQJqR1YP5zXgghZk733gFRshph2h7hiX8pTGoy1dmca5x2yppL",
  "key8": "3NQKUSXQAjZA38VYWGiPqfsqnC4H2wtBhujTMPAeRzagWHNFrfMdkTbz9nZAcgL1ASbxwCmhdtKnd5x67rcNTy7Y",
  "key9": "ngNkuJTyMxEBgtKDMrpA3xW4rwhnJYWTQi6Z4n1gFyW9cfZVeL1omWtCF9hfgWeHZ1Et4LbJdnMHU9kK3dCJ3Rc",
  "key10": "29kEkpCuPvJZnUyrtGyNPe1uWTGWoXFWb2zAc6Bgf6pUARiw9PSx6JWLBjtjMMGd6z9H2X6ckDPKQjcuZomNJf6b",
  "key11": "5syNNhj9ehsRi6rJaBKcPXDcqSup42kA3dnJ85WrtcPdrDxdkRfGdmvKMfuLQUuYvTGn1PrzVzW94Nai11gjJ9Sk",
  "key12": "ndyB5HJYr6Evfc1MTfNAoTJnDryegsaZCHsDQj1ZVq5haoeYvUq6s8pUPtrw7Bn2rtdxB3Kede7VGdN1VAQZkbn",
  "key13": "5R6up7V3BdWjhRJVVBDrjNWsATFP2kh19HW2m1jXJYPM6QLpYAR5UFhxQxd63gLu5JKGhs4WtYxMoDfKmqhmi7RY",
  "key14": "2txhK5msJWp3XFLzDBDchagpwDPTzV54GAxUSrezS441min7Cjs7WLAMvWTNba9toGb5eoWCpKFrGNyhSywR1dVY",
  "key15": "5Cc9fu2EbtkQCdC9hPBPuAAvJmsS7q4eBsAJnZsxETR5e9hh8pgFoN85QaizXM18HY63PsFVD4kZmfitPrVW2d5N",
  "key16": "eWUMFEuaCrDUSwE2BKDG3cgfZW5qkkBc5aX1JbjLb73Yv35aPzHszPpdb2iWgxCUgVJGo9iUyjb6XryVLyZ9AXL",
  "key17": "2XwM4qJfDrEEUX13pzWqVrqGErGUYQLGYao6TPYTWZWSJQYCJmppE9zxS5C3tuDq84PetLrB9rgz4WMFge8YTy65",
  "key18": "57i7WT4X4ofCsAPQ9Ji7wKtPFAUGittt2TdM1zTnh2bNHZRfKKM4r5Vy4EJXG1wTsxv5jgANPsFq1KAAw6Hq75LG",
  "key19": "2adzg3T2NFZu4VwqbfwgJYckGqjRa5867iWaG1o5Km1vQkj5tZXrFr5QsaV6Ru3KSRq2EnJgwmaAyK6zkeEJitBK",
  "key20": "23SAjcF8A2GjZvCZ5kZqwq2VNCDEBaWisbTDC2Jmp1GpPyBTzw2965tskc3WD3edSmd58Ho4ZczRpES69weCdfqk",
  "key21": "5jg4qt2fXrxPobRzsFXUupZXo7ZASFnCxo4ZDx7LCVsWTycF4GFv9Jz6iYd4tUsjvkLYpp4m1UoGinuxtSDLuYSp",
  "key22": "4kNQcmU94ydFFdy3HrFc1yz5jkmcA5X1uHPWc3wDfY5grx8Bpi9aDoFf3mDV2yC6HzA1m6YWa4pXxz1o5peYuo6X",
  "key23": "5jgAHM7TFwYQViqgAhypJGkQeHgJUjXKLhDRjDMVevNGH1hkVqwjCq6pMRidrxd5RFusnxyDRRToQpYeKL3Fbhez",
  "key24": "5WGJPxsd16XQvn3NDMWjSsAWUZoByLSJ7mWPS3foyAhVo2KxNxDd4hXBYMLkt6R15ueVRXSLG58WncYEBmnrZF97",
  "key25": "49r34dySyxNjtsHz51qBUbyG2MnZjpweecqEyZ1xvbwoavLJvFv9qAa6iLxzSmM1cfBewC2TjrZVv4DiCesKWD7M",
  "key26": "5YwfLKHKXs7gpowEqo7H11w51573GAA39a7A88wzus5kCrcKhpgUbjnCr1dMEucTDMbdn4UZVf6YupC8n4zRrEQE",
  "key27": "2xPx1rrqbmPopMpK6wmVY1bJLYEQ1dUkSwWJEq1B1rjs1uMkUbFBgcKyEikrbeAhWETwsUVzKDo1odEAojvqZDzN",
  "key28": "33GqeWwqiEkfGVNUE5Yn1gLcntt5CkRXhgUQMMvrLvq8NeDP48bg35FYw3xha2bSohTuaB1NZbjJG48EsZG7Ne7A",
  "key29": "4xnDTwmdCaKiWL2XMgMRBCXobk8JnnkVqud6Pk3xpWczS98juSWTxRjwjndfno1G4mQN2mGFGcEvn21jtEf7ZSXr",
  "key30": "2yuTUdWVDp99BhgvJTrW2rrSkh5uv2fWQ4U2u2XewCNX2Ev1tBZZRjipwKXcnpYQ187zbVPzH4tJs5RtWSnczHWU",
  "key31": "3LJKsnPSMF9cHfjH2YYFxXePbnjp8dkepnNExDy7K1hgifpGhdCQDv2sVnSAvHP1ionW2yGtasVwQzKomTVN65Tn",
  "key32": "xsm2rhWkxzX33RVwsojqEh7MamzVfmPXsC8HLBo3UcvEjPFSasW3sHSuEoktqBqaUBLtY8G45JEiNC848g5k4DE",
  "key33": "2bMpwpW1R62mbjkXbeRj9bqtvJY4r87dMu8zJ6N13kqkKURwcnQYF9Unyo61Yorvg44FEafFexd34t42z1vpYEHR",
  "key34": "5StLhwgxdMsAH3HLFJoXd41K94Xvt7x8USN778vGQbuVbSF1cVySU3FrC3LN44EzvceiUC7iYLL9ZB2EdUsat3bD",
  "key35": "3QPZnvb8gJspnbL7TScJdUFcUSrTPxgtSEfPcD5Keb5jLFcSy8LJrXkLdEibRqQAD86yayvCsSJhxCWgqA8v97SH",
  "key36": "Tn415rYNpWstnyN29DXwJim3MMeteP27rNMJnsk68foZzYBDa7QcYxrMM7tg7odXcz2hASxpxxmkR3oBXutt949",
  "key37": "2DgdxJWNhhB8C9Xr7SiFgHwANkvtTr1ZStZ1GUDeTDWQwLMjLqo8roqG7oso2XKmhnryAVZ4qgS8iqoDLJGZppNY",
  "key38": "38FFiLQCtV1uoLiLyhMdjUfWHG6pFAJHXN8vdkp5CRN5bPinbU9MknYBZg5iSdkzKHZDG7jEL27RvC7CzXaNhb3e",
  "key39": "4NTk9ALMy58U4DgLBxGkBZjyDxwmfV8wY9eg5yiAtqA9Qu4YiZ9KNv9VJ8R4xcK7gBDarWz2S3Hbkj9Fy7vTxUVT",
  "key40": "2GKMkneByqL2ZCz6uBkeRLQByqiEhDED8mprvUVSejnDEiLT9qU4DMomBcij5HUNhbe121jF2pTwr12jffxAJYk8",
  "key41": "414Rs4sgW2KThcxq3H6r7oPThPMZ2SAMwvFgXunyCr7NjeiGDqMr9zwZhPYWCLmRYkYRgfcqsZebqM8KxEF4qC92",
  "key42": "5aECax5RrFwgs1cy6N4Frbngrag95WdKBzBGip8vGFexA1UZUocvHdJixPRo8xQ9Uxyw3kmh8wMMhjKmuLtjexRH",
  "key43": "3crR7RKmm1cMZW75kzSTm4DAKgpfgjwkJixFbUt4vc1w2dcz82ZNPD39ZN8Ep9oXa6mupC7rApsX6Pf3jVbcbtVK"
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
