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
    "4wKnbqZ88QMAKc1TCgu7CMVc6GcpqkxBXHmBT1hJVqeQhFRpwnNfDRTV8EsKNmhnttq2EHkex8QDuvwVje6fqqbx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34ENC2uSneHHWTogRL8LXhJx9oHkRCDFCHNKgD5VJsPB7YWcmjBy2F81LUrSochMUXR4VmBHBdephfdMfHoDFYic",
  "key1": "eXB27yDbLsSaBw2v2s4JE1V5xZw1KoyvyQrfGgbZfePDYvboraLVX5KPEYr6wYSSSPuUHWEXbsuRyGRTLdS58ri",
  "key2": "3AGYu2EagipUNXzoho43memmPXbp1CWypJiyLPwfxHfvKgUB4KZzv4NbqK81RvwpQ7KoKYbPZ891iBpSzgjdt71D",
  "key3": "5pmKW6hC3MoxiRNjVoEyJPwHdGmyPWQvNHV2PcUAFdejgSvFJAzXB2pCacAftssPpL1kPBbeGUFdqX11gcHuCisx",
  "key4": "4UM2ayoiAe8eM3yJHP64tiQMH7KSKCYh2jpiDEfqBD4S12D1fgq15BL6DS5pDo4TZefXLc57JcbgKjk3v3dioWcx",
  "key5": "3zLEPBHxdN3L8h351PFsruP9j7TDq44X1h6DBud1UBnkWvBqbKRT11VN2r3rFp5Ss7HynvcWfPcVEPQs99c2Fi44",
  "key6": "4PR1tb7d1Y56hvifJnNLjMrCgt1JEZTLeTvAyZE5vTeyDE1StjwoLyheqi5Zn39K7MuBd4tjMqAZmb95z9FGkFYk",
  "key7": "3X468rYio2fSDnvYCaHmqWEyArBZzcTkozjXkpKJnkZPnnuJzqfWSNv3T9p18mqHtterynfKTbaZdNp6RuidccTa",
  "key8": "3fc35DdoLXN27YND8MyuDqDHkAv3sQ6ycyYR4vxG7YSSkuqe58XersBrLEwrivdh8TQsAwTwJKEKqRHPDfc74VAT",
  "key9": "4GdGSx5tZBASSb5fGhoyThWjtJTcjZ7rut5DtgMt9ZcMk52g4bdaV5sPQxC9XSiC4VNftrVnXair1PA6kQWT3Y5T",
  "key10": "2bP3RWNn74snqndJcZikpksR5cEJD44QzZCsqjLd1DFPrHNdTPXQ2k3AeENLgJCn5Sofre7jCrvXGDBiMFWwDid2",
  "key11": "447pjrPnVxDXXjnu8J12u9BrXkV6YkNgebRjfHE3XrBksQcmpZuUxHbFHx7bc8b7EE8PkLr2jMH83nPX5uzRpu6h",
  "key12": "3qyiacLdn6hvbbLFmvztRW8Ltfhi7L5SqTiMAWYdPf8qhLgFnyoELhyR3nbaJjWPhGzVCpE4LFpKumHjpPhvaePZ",
  "key13": "4GbUuYEPuMgr7afKfsfmx1B1n4hPaSx2tj9kYycmJPMQbtREpStushALcs98FyLtCHZyZxbivXuFLQHobdWQbaiW",
  "key14": "2XuLeDuYSELxe8J7yW2PaTQhBUCnTHtUB5WmZstnQhfet9ARZdfX2FCtzhQZrjo86rKJNpe4qrtP5rMWLdhu5J5J",
  "key15": "28HDRaF3fPDB2UsZvmYyVt9WkjqNmFbsPfYA4B6HNFkSY51k577KbfsDwb5CzhffkaGVpaRx5az7RzMsqmLabhdd",
  "key16": "62jvTfJEtX1ty6Maut1Pw4WXemDo45n9bSj9RZoWE1fdPVKgDn1akwSneQP5fkiWd1U8WLr33mnpkFCzfed2GFMB",
  "key17": "KfZdRpiEtZobx3CmvBYjeEe3EQE23t4GQBuNYpPREtVFEpnFkH3vHM5mKFwT4x8uPJu1QJndvFNzo4yQe35KzjZ",
  "key18": "JRP99j8yjXZoTS3SjoBHj57kknJhS2S9pdXEGmUHBBRAovVTQRDi67Yo31jpis79q7KiW1krhyc8mV2qMVvi1KV",
  "key19": "5FGKY6FZJBQAfub8HaC7jbsoYVG2nEQJkMsM8CpTCsyYZKdWBsxucrfUVerb4LGSXnqufwGcb8TNcA6zfGJWjDTD",
  "key20": "66ZkfLSMYP1BBK5WFDoeBEDpMPE3r61cEe99vEfwHpbpA5v7styfjo3FZXJYJrUUpvDPhugViq99Sg7oPszskMdV",
  "key21": "56ZBtN1yAFYEYnSNok1Qe4thbFvLyXKGMhiRE9QuRX34cJzBww6MLPHNS5834PUzhazXFXZiKgEhNgttaHW6Gjkz",
  "key22": "4FkRbMfure25mWUCk2BGMAwJUSMk6R6j6BK4ZsQZpzxJxhKKGWDsz6Y2vv8JqcqMFVkGVEAkN36e2nqiNkC7KQS2",
  "key23": "32L2WC3UXz8z7D6hSCtVfY7Z23WXW4CAk2vTn55oFuZBFj6ob81sGgFxrPEdgcNP5BKmfcTDmiCNvS7V616uunAs",
  "key24": "5Mzjn4cTXyeA6S2f628HrBEQMnWPPFrRpbakcs3oHWVtbfxoa6vL8Enr3znR4ZEYowoBozfCvohb2ZRzbGwPFPnD",
  "key25": "3FQBr6brHWQnZDwtvNsrzDSR2zqtG6bcjzidYVXxjiRvF2GVirqf8Npg7eVJ2s9fTviUdHyVEwCEXfwYG2UDhxJF",
  "key26": "twfrubRHxQynZSa3mhnM5FwaauCogwqiDHr7ebtMXPgDG3p4z6L2hHUPiCwFnQQU7ypZPMAUdX8Y4x8zFLpjGs2",
  "key27": "4hLDtDFcR6qcpPtQgyRj7Y6qT6jrjZNQfRE5oYhBZ4CdqhjswkZcr7SBN3gvX2Ln9An4xs8p8jGeasNUMoKpHukq",
  "key28": "jTkyDy35PyeKfxx2V8rKp7Uq6JXWLfjq9po6gKcRnFQHbTsSoTEWcm59agG3iWh4amFvhNtLArqH8dqrqMY8DCv",
  "key29": "3bzi38tRFAmz9ySVPRn44T1gCCpShzTFF2PiZBV2XBCyh4fvWbx4zeXbVDscze4RSrPeBywA8djz1PcZMWyMHcPs",
  "key30": "aLjzjeP6uqLzw4wJuNUvCtwXSjRwtJbLRM1VyHKb3Mn7KQpo3CHvwP6ypdsUxBmUkfR2PmoYgDwAaSeqnGCmRDd",
  "key31": "3vSZvixJaxFu2M1KdveRsZ36WgSGz5YsCiTQhSyxgmHAdwwHPXVioHJDcGFgJCycfgDu9hvM2fXgeB5RfcUp79aa",
  "key32": "mVYNo9ZqZJqdLDj7YB9cfb2iUfNmGf58wTFtRaZK5hWZDN6yRhvDFhxHx1XpZLSKGnqnSJAZdpo88KkKsixg8Kx",
  "key33": "5yX1JX9EVgviBiVBjNEgLKFaKM1o8E4UnWKYMWp4K1HyK9REvRdRaYpQAbz7262EcqzPNnNUny5z3KRM8VC9Ns6i",
  "key34": "3jsfKpqQWbm4RTVw3uobxgpBYD6GnvpHYcxpEaKwCVZrrS2nbZTjZ8kpV959Mz7J2kuiskQgskgYtdd2LCzRKUDe",
  "key35": "3J6uTXsD3FpXJ9gcJhgnA2pSb9p1ZHCg9YPeEP1HUTr2TWCd2vasbGiW7A2wufpxccjqkqHtDc3bX9qHfexgADWQ",
  "key36": "5bRyxz16ZaYBKg58A46mJ6ahVMZx7Yy4zThJ4jaCjo1bq7rYRkDYNwjNbTWo3KjVLe3s6ebeS3wMHXpqXVFgnaph",
  "key37": "2aVv9166PNvwPH8M47PtqvBNmJ9wCWDWeH7DafHTUkaXoA8xbaK19irxQH3wXLWcrog6sJfdbtJ5Lc4SqS6tn3JV",
  "key38": "4y4LLfWmyAZy331p4WyYNJjJaroPsFxYtwTYCMgvbw6MBsv9QA7KfXQUyeZ49oKFxTMkCJJVsFLxYmBsjBpeVGH2",
  "key39": "34cWRiy7vCBCLPgAbkqMfViK1H3mv3HxiLN6FkAxvjiUG7bqkFWf5pNSZ9zkrPcDExP3inChSPnCaKBth5q9vtT2",
  "key40": "2UpLLSoQ6ScRuEvvuV7ojhe2fy2jH44K9dWthEYCwiYZHWN427n6VXezMvvRbF7nDNbnr6ZjghwvACv9QFQLrFCc",
  "key41": "3jkEnPbcev5cmBhUJdmUH9Duiy27v8YpXrEQZSh32eC9DHueiaBrBtRpZ1A5Q73X2vEANcviNcsi7EptwvYG5agx",
  "key42": "4iH3ef8TiBrHrWYSEUFUi9tpA8h4t8QW4ApHcNm1QLWy6b94sUKTjt3nd8saoMX92xsGwCcZs4WPcFDggo1Fe4YD",
  "key43": "3BmuJdy4eEGHLD4xrTZEguEjrAgw9YcB8PMsKVBL4fqFEATg72yjQqGdxXqq7iJqgcu4BeHxQfj4eAqEjCrLpvmA",
  "key44": "4VrGeo7qG3chWB2bF4HWYjyi35f2bB8PVejjiLvkFUGxU9K4UduSNBEri1vM5HwMvwiTS689FQKeD9cgowfNcyM3",
  "key45": "5Wz71u9THXRfMqriHQ5zsEtGEcxZnMh26DvH1j6vFTtGLqPtFuMd6dxcZvn72RFLUPZV8wetR3bEtYhbeA1dXVog",
  "key46": "3AYV4wKo1mBhYh11XsfdQyMtiADqZLBNTJWyFRfbuQrqxkg6UEgPCfKVXRaCLGjZeJAYFXwBYP3fbx9PWeC24m8G",
  "key47": "5gpex774dEu9KDpKaK4TAUvPtGZAKVgrerf1ShprhzknV5ovgQXLeKbb3yk4achrhAAPuRKiKTZNLQStKBgJ2NBw",
  "key48": "2fPhcqc3pfQsyhUrMXoTeGHhr4b4C7BetGLzDbWSugsHLEbseuukHusf4hVV6U2EeTTNrtZAZWZkZkCsA5GcXTKG"
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
