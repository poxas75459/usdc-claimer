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
    "DCYVZKoLXcy9EMscSi1Z7eN8DMkmBiEfjrxa1439iK6tUY7dnyoLfhnMmC1DzLn8Cb6bs6ArnGyXeChQfkkC7Fv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gjpQYbqB6sRA5BMu1p7wzuUPLNrQVf9X8BEWxcAoUFy4drzRWAfaS51AanXroRqrg9p93GEpdFrHUyJjq9LfZwK",
  "key1": "27odtoajuDATTxg2mJgPEbbWBqp9burRqHoBKTUPT67ejNMgzSiVk3LBYRn8fh2cKXwvrL5vjgzWPzVCDCFrD36m",
  "key2": "25aH2ra9w8gz9BhLGwktbtznrwQuvQN66RHagctfqtmja2dNPauYqPQ792Dtq4hfY8pw4Tw6cRrhp64HN3kttFT3",
  "key3": "38fUWaRAvgjYuuZ1ooM4ebiinfCXirPCKnHFyC559ECPrqDCbgpvg4NjXhp8dteHmU9LXA5jFUos9s3GwzBqAYgn",
  "key4": "3VgJ6jNnrqFAgVuKoYENYkpAFhgy2gSBAvXyDucrcZjksAvUVYupH5oFRUTaRwU6GV73VVydJ9t7SjACscv1CCRr",
  "key5": "5pKr7nhHn1b112Kag1XG6VCnkuvhPUB1m1xxz9tRYDgTRwx8BR2G2TyJUaTdGt4fYxoeEYNpVFwLpuadvduFkyjM",
  "key6": "jhJRdRmvwAmt6qthGTzgaMoHXsSehgpDek4PjLza81UvM2qnaj86hEmQmdxDeWftxjMLiZyLBnmsEFrsJDSPjek",
  "key7": "2RCsX8a6yJLBJUWZ1qwDd1KyjJQsxGHdBqx5oUvGKuJoSgH8hijF2i7B49Bjq1VDCxP16H9psR8g5Go7aXykpjq4",
  "key8": "2ocz2gVLLRewjnEP892g81dAX7GpSXC5UsRD8S6hjCAuUVAc8xschYfMmpnrYEA75yccsR8jVAEjuSfnkxNWgLpX",
  "key9": "4vv3bKAdE3DDfNmwoagm6vpywtmd3QVg7bFS7asmYv9w4Hx7PGLt4TnCHd4vrv1YjtPrsL4SwvpERTqtya5wiw7q",
  "key10": "2V5FMqUCrpkkFn58kYp7knYjvRNEUT5j9j8gF8jntL1xaFUTQHA8TpBJWZB8r4RdmTVyyYjY1jJSxxgpV1b4LYiY",
  "key11": "33JeADP78NnvMTKHmTfJUsQuNyDHsVHLcjTdFx4ww7pit5DoZ1K3tJsDByHfuNXVoFsf2CEYNSqCaEPoQrmq84jc",
  "key12": "2hnZTdj8wGS3qttLQ9DcTM4c1rJcrwirxSqooMrwge5wKXWEZHyfXBVTSPkxMuhKbNwdZtT2wwEeog9GEgCout2M",
  "key13": "3CxQP6vTPQzHeQ7Hj1jzcv1B5xFfxAeGks87pX8ufZjxKXCSPtEeN4JQdN9bqFxNd1oBt4wfnsNhGxZYa2oidrUc",
  "key14": "5wVnAKh7DqVmxnZj9BR5YAiRbeEdxL3VnTRygzARidkYKXVfJj3Sa14FAzD3K4xoRyFCKs5nWti11VrREdndisUQ",
  "key15": "4EngQ1Qenxm5wib8maKXZggiiqxP6VNQREZN3zD2RSi9eDHrV26SkFoWSTuW79yiEKBQj1qRAFMRrcR5NCXFugjZ",
  "key16": "4w8QiXeXYL1sDue9K1tHDYkek5pEaFp9EgHULcJcGNzFjjXJ492MPsSbTEmxGT7XvkXxzgDPC6xkMHCkgZPjGkJp",
  "key17": "47GT8Y39DavsVgEf8afhN8FepeECcZgu5DrPo3nxg1DihurEqnVFquzXNzsC4sS5MPPk4nDmLnFgt2MCepu2aDTf",
  "key18": "2ac5W3Km9zeFpyV5xwN5j8oQzcJHzXbGNgSXcbCfTd9tEKjzEqLUpLBCyePp2F2p6fvG3RvQEKDJGYsr6oS3r5yY",
  "key19": "3zss9yep6cc3933WMunf6bty9oNcJxenFHhfpWpwtWiow7EFNw4zGBPNsYtPvWdojBiM13s6atrMYwMhvk6uqPhm",
  "key20": "3afT2KRhhqzNvx3U1TAavN7SHq8KLvSXgfRSaD1mkCY4VPT9eVxjSkL2QTPZWBS76eWahcq2MgdwqZnwhFh2CAFU",
  "key21": "5ek8LYsTrABfxKN9BAhaeM8U1K7auiUkYibdgy27YHbbYgUemZxMSWqmRyykC8UTQBmM5dB5o1QRwFkStui3qWxn",
  "key22": "bhAFQMFafqeiiZ6t8yZ5es8vhg1SdMPAwaVtcgRnu988EgeNT1zKAUAiUarKgcaLA6jt4Noq98WieVPST9nnqKM",
  "key23": "4vHL5cbD7hS4XWyoNR1cL5Zxmi47qYkTWU6PY9nc1YA59HqJos7XJfQoFM3Nc9djzvt4ANDY1SV3buCYkMrR1gV9",
  "key24": "47GQXVkXEZmsxsKuhMLeSyziZ8Lrxte3DS18zpLxavvEA8qVMfcCCH8Fv7kN2usLjZ2QSi3iBbJagxGJay7Wb7X8",
  "key25": "41tWbovA6S7878GFFvwwrML87CEWE8wGQLmouK6b4bCEAx6KvqnaubxPFEryUFhA5YF25YRfbJX4z968k2aNW7sc",
  "key26": "5dabKPmexTAhErVCF8U4BkXAMXbsZRiAD6942HqZqru22Qe6KhUAqbPWLrN54MEnGojDyRxCHcgg2yReobrCRU4J",
  "key27": "2fyAMGPcHzbj2h7Yq1fp6GM39CGDLtu5fN96qeA12KK4syAMGdwRP5Yhf71bGgYpYMtpVsfoqJAEr9JRsJS4zYgp",
  "key28": "4S1eiQa2r1KyLvYgksRrxSCTcxqVtJhfbkEnbQ4qBek4Vv8pRnmuZYrbH1E949nhUW9yXhP8etKxnneZkP4x6BNP",
  "key29": "5bJy8eKVUAnjV9zKvAxCXDQueai6jnnDq6FHNKiaWfaPgzXdPVJ9KbLfk2AuCkftwZxQq1VF4AkGnbFASGBXEeU4",
  "key30": "43T3pWcSgQBjZt9QzQBcmfwaZRJb6ASF9MenfUYqERZmifPKX1zXwfK9S8xbBuxwiMRVN8Anb2gcHfPQCd3MvVxQ",
  "key31": "4NwVS5V65EPvk6EuW7DGTo3KQTvHLjSJm2TXDjRBRtLpmKxF22oSQDjb5AFk5Avu42BNvQbRSLZyrhJatY4y8XAf",
  "key32": "2CBBAo53A9SML2zVH1JvSA6eE17nW6wefyb9iZxHdVhjTYrorcWprHQNeXcn3FbM9PZvxe41Ku3ameNATEKXDdu3",
  "key33": "2hcm6MXyN7fRNRtL9WK21sMez8b84v3Xb18E22BZr6pFkH85hkp3Xs8w97Cbgqug6Ubbi7CmPR2urXduMkStZc1a",
  "key34": "oP2TnrgHy6xarNcDXV4kxUbPFVKehjaTiPa2Ekc95n7zYFNh8KQJzvTsn8NimuAwhgDjnfVC3ec4C2jrtwmgx8S",
  "key35": "2JSE8YbShUqBbzw5GtwLXgVkzniXBpSy5FsZmFbtVNoF79SdyZrVgkaxQpyT5gLGVZ4Ck1sttHYxoszuF2M5x64r",
  "key36": "4raGzR3ZKy7tFdQHghp2WhZdmzx9LFcGdWpbHwzX5jHudjPqNkeTYEVrRxAZPFkRUXMkAhTYpRnvHcZPmrx87N44",
  "key37": "1mvbWvE2qEYCXKe9Ey42XqoXbZDeaYvFA7uVEgLfjEb8dxDMGLnRQfq3pZo5QPypVeUZSkdTVuqQYzWroUqB8mo",
  "key38": "4yJJj62rAF4vVo6oommru13adtnx3G1nPhekmQsg263tbc2gFeJXrLd23qUAHsByrsxHhAUQZ1g19k6yUTpU8nWF",
  "key39": "2iUD77xVyJ6JYNpqC7bg6DPRQkRHcY7KoS871ui9rWvCPGWxhxriGj4fAh7ZMjTDzPESnU37QVvv4L6xsaWBGbcC",
  "key40": "DUd4Exb2R9B5NvDgqdYkwEGCNsBfCXhsZ7wbTmw4UGhoPLMV7JA3ZgQQcyrABNuPyvPKyCdXS9GhRbtR53qqzq6",
  "key41": "4ggLcAHrZBvgjmKgPc84eDgMsMZ9JSXWh35tMQWbAmT3LofNA3sCk53Wj18pDdCHjbbFtzp9W24AENhQek24Z13w",
  "key42": "4x8wZNTnirNrhvCQVTawh5dV7SPYutwAWTHqQQaWENSSKLHVx9oWjiVoK4cviLr9rLA7H5oeUX8Ma8ugypLTTsyc",
  "key43": "4e7H51auCD6ZVPggLWmMcKZWGaGLwhn32REbRwyPcwpRR5kEWR5sDL1o9bCspkkDNnXdQu3pQfrKDRZ6TsUrfcaM",
  "key44": "kwqBMq2mCHqYC79q26jzLdEzVgSV5fSnX4shTkpj2ErrSHo5iB2uPSZT1y8g7KCtfXVxzyhiTZ8mt1G3aStzdkc",
  "key45": "LQzP6K7px1MsX74GZ8XBXAXLi3hfawEmSwsLmpfkgGXYnhSSRmdVP1UFUzj2rWZZisDERvKiAS45b3qJ3kR6pyP",
  "key46": "4XTxtZnU7cATRJ5dRx8YhnVNSEyoBJzNdz6MWuKXNT9Y4dfTCBC2weu7MHVFnepU7iAYug8BsAbjUuG8xcthFVR5",
  "key47": "5nsuDfmx5pnv1vTfCuNxkYWEc7bozqq7twfjMcnNqy9yZLKpQJHDvfbLLECCHeigb2EHF7hpQjBEjLNHukbhhcGx",
  "key48": "edxMPitJktGrij6ocNQmMngXMFZgToyKUKrWzQpYCRcNugzo3Swrr6KJdHpnuRdwhptEsGrKX8G2YdLFXwDrfMw"
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
