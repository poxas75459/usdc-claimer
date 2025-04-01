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
    "2hctejCovkGYYRwjk6aeKFLnDVvpPiSsVfaUsCMpomogaGCZhLipCPT7CN1aVEmituP5t2b9KzxJTdJFVNTeAAUV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2emLyrbNVKvVBHpUGn8xjyLghpZyQxZ9QR3Y5WyRoBskGe4Pep2aAG7UHePpERcZWEKmdZNYkxKq3SP9PWV8wc8R",
  "key1": "4xVmpWomPkwo28RZciY76YmokMZGM4FPZaW8cBrkEGzZLh1cBGNEgLDjRWhycctdpS3awWtD7BU8g3SQPzGQFSFj",
  "key2": "32MUBGqye4zuzVo3qdsc4bZmkmSo4VQ3zpsem9YuRRY7U9My3PnFfYG15mf1H9Nho9YhjeQnuG5mQh11Jtb8Nh9d",
  "key3": "2Xb2pWXWXqTookNWxWQTNHWWbH5VoGBtmRQEWE6bsxB9ZopvUh8EyWNBKAs1uxDUiqZoruyVFZ3xzjwW1mEY4pE9",
  "key4": "4dmNH6gd4RUoKZgmhGDpdXK3BJDvTQKBRRp5XKSwi6DkhxYB4No1hmihLe6iyFdQfV6cKQUkzaJi4DMK1XiH447P",
  "key5": "2gDP9462dKMHRJHnhmMDTnxz5YPMeptdm8wZFvW7GCMSyWGLKVwo3RRD2QaL1iFYPmBXBWFi2AsfkAwC4gCxmLUr",
  "key6": "5zcdKbPccURSDWRfMK2HKtwgVuD5uXJyjvLWBcWEre3bY3MRWv4qcrdg5D3yyFYJbZfjRZBbYKhTAw4K9gANfW4A",
  "key7": "5fjMW8bgusSuAByoMzWe27YQPU2qpEQLRjfsCumrAnjCrmR6zXKAsZni7WShnRx2H4koU4zF8FsskKwECrqfrzLu",
  "key8": "286HQqTxHQACoQV8EEF6Cucwfr8NVVRh6WFDaWp3xkJBwhugJSBf5w12aUwExTKwBCXLLysmWUCdUH4p1jyBGMEF",
  "key9": "3ESdQhNce6mTV195dEGUVHAanUGcrf37NSALSvb3apA5vufsiCuCy3GVKqbC47jFQzUYWYhgEFsHsDCYNCBdVFGG",
  "key10": "T1ZkPczYnYoiJdnkRLBA6J3y4Vwp9Pdx91xbmjcDcoWuNF1sebcg4FkigYgrM1rAxRDA8pd4vRhVTKeWyotWvpG",
  "key11": "2xU85c8NV946xUDzMe89Twuov2dpAoZ3s8Yt7yHZB44ABNyQVKSjMRWDWb9JjQFSq8iWUeQrPMivkpe9nPmffyWW",
  "key12": "cwYEWcFUgJHdsC346y8dAGdhKU66YjHTNzzxEfTmE7RYPAUh1HACtkU6A8GEPz5SGqqVPamfwEUMNAATDKRexNS",
  "key13": "4BxzDZw9edLePb1AVAGBYVdzeLB2H3v6kM288i61HSjThhFRrdDjRii3b83rxY2FvP7QjJC6qw1KHaq1MvGSzphd",
  "key14": "4ig14ZUSDix4dYADShvcv7aZ3NANAVFiZne3xTPXgx13sM53BewvF2YfEtHwmGFRh1nRQikMFB8LWEtz5Jt9yrrm",
  "key15": "46kTeHAg9uuoNB8cXEsoFBL1qguhXRYatLPJX4TAx7sko1ftCfiCkcJJWnA9PZRKqvhLPtDiAQzWJgFk5kkvL82i",
  "key16": "2k4XJ6RoJ8ra7RH5g1GVdKhVSX4G5i1dnGHeUfwpzAHmoNcG7NFobMWuXKahsrVfQ7KYxBxgQ9mSdMDgPqRTaT6D",
  "key17": "9mG1MPb313VDHzfj5ZVe7xgMNy6ds2HkXSv1L1GnB42KuhCnvhMJZovcKBsc4xB47HV8xYApeeSHkvscXbZQhxS",
  "key18": "27eLeeqhPxdbXfZkN2pKDoeuFPyXwZfxB9buNJXd3WcdN3cfYininfTDj7Z2T4vWxCsyzUVK1CYNDtw4ZLVbHKa2",
  "key19": "4YPf6qMjo24jbKU6mTRrM34h6c1vhNvta3G1udzq9U8ffxviapMubtXqesKXfh3Jq5eMkh882AsmtFRsuWUMn37E",
  "key20": "ZbQhTwC8UpFmpc1k52hpvhczpXqzshZuyT7bH1uykRH4zZ4yf3HT1uShdVADqk4KVsoyLLpUUgEcrErAryTA6fR",
  "key21": "5iD6M72oX5LN5bezBNwZgFQyiztGcbadCjYW5h9oAijKP3wNfLGNVerqLJqfTwQsPqYy6znZJZS8FxPKqhj9EqFA",
  "key22": "NjJMMPSUpW6iEDoUuJFrTZyGM6E4k24wwX5iKWGE53G8u5UoADM9MabmFRiukudbiPntkRnYXe95Lsh2dyRDRaj",
  "key23": "2TA21PSdDnnhsNbBCquxnPLvW7rg3buv4ZumzyZc9a41WhDL13M5wpfw4hg4FemLVxnk2Ji4TAmiwEYqWaWpfEQP",
  "key24": "2eGPdLHLrdeDTHN8dDVVs2u622t7FrRQDPH3Y9Cg91E5YicG9VCuvY3bGnLeeVfdrT2CgSyYcjRCwquk1Nytuksh",
  "key25": "5TnpbprErTBGr1bYwrFCjecSGi83QyHDTmzjhaBSnvsBrLTtvgQi1LmFNpHo9oeudF5YyutoSqrmwEigYooNgWL3",
  "key26": "4Joa9azH9WCpoeDcTpBgbHw9QtRghCWrwrVF7s8MFVgA4uqnV8FCJai5mK1RdtnEZo5Twn1kL8aeF81JpwCCkSFr",
  "key27": "3qK32DhbUQWxrUpEEE48SpF5DM6t8y1mwSyTKp8F8bJPTkux6d8gdSRBuTX1VSGBtR8BVCkrhC18uf8j9DcDhUEj",
  "key28": "36kSJuMUMCMWuiSWxTWYh42vfaV2DuBV4bso8keaKGjYvc1BbrWjkkGhgNZ9qbiJpc4dwFdtEkGVUWadK1PvUsU4",
  "key29": "5P7LwiiWWQXs6Q9cdaBjqoppgEFiwCcKz8v7DJzxHjUCQ6gRvWsLfwK2SeAUJwFbzjWvj8xy4QtFbwhqqvvWuF8L",
  "key30": "dJ3juJdkxtHop55HMYgvmWfSLmczTgB9xt7vhSw7w4MRHRjxobeeWX6Z42bs8kKAnUX9wq9egvVD1HWdFpg9m2C",
  "key31": "52Ad8AGjY6X4iru3i9UmCANub92Dp7fgP4mJu4Gx91Joue4vEwSc3JA63vPboA1doKAwR7x4gaYTuwjCJek8bDZ9",
  "key32": "46iobaCFooNB6Q8ngqvR3Z5zSHgELJTJxPdPwPX3gmtVkF6hT23JGYmNWUU5zkBNMS3iTUhKq92xtZtYUsnGWpFV",
  "key33": "3rvzfjJDUucCryLKBEqS7x8RPpxrSaEUEBNEDVPjZDco9udvTftjN65TEZSg6RJNMStgR9hVrTvVrSPAMYJetb1C",
  "key34": "5JgBc759JL2wbGbrZxDMKSJ5eyJD3rfWtjnZdV4ZgsknkYbbH8f79BmHnV4PQbvx2mCmEqdFdkqrXvEjs5tgwe2G",
  "key35": "4Dy81eLanbXWRtfStRySfLLivVkjR9XStD15NRaTx1CL74CE6pyocv6KHD7DUV9XW5Gc5CNCENp1tZZN9UwS6EwC"
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
