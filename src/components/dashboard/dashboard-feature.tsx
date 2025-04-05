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
    "2rbKFGgcLX48ZGGVTtXUkhCKFDsLDyv2h2Guv2ZsBLn244V3M1acJyZT5iQcn7Svbo4xKFPtEKmexjhrdmqaqZ4R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23WtKKcKyEMicbNmghJhWWrvo1ZpbaMefyDt5iZ1S5tgPtzMopP7qMuLhA4U43d5ay7oup6APi64sBFSgLwZsN3H",
  "key1": "3rqDHWiECSACs9Bd2LRUtVZZbkx1sMTTu4P1UNErUidc3UAbuRvtLJPRbTrttwGWECRzMFox5agcpMfRtAJG2TBn",
  "key2": "6eRDcUTYr73DWbAiXruqFjREUCwyPSzD444RxWHZJdB68WiRGLsoo6Y5yUR94wUA2hEHf8Mpfj9pPDgdfBATdkM",
  "key3": "3Aa5TL3RBuzMEfNGjAEmpUERfu8YZoc43BJMuMdYctvFiFZ6hD4bqXmy3rSCXQVTeEYFoT1eJbjZteuMUJy7hqtS",
  "key4": "2XKqnU1Uf6JvDeEPjQE8URVfSpQaWBi3saNNZmhQ6WJmWYhDarLc9jvz3tFFVZVrTZVoGQh5d59DCaY21vkGJPcB",
  "key5": "5riTFwre6Jwr6jHpbTCASh7w3WeXWAUhEnfu3bJS2xEwgC5FHop1gZhmD2Lnc2SSCyApaEm4KwAjuqwpmWsduCpW",
  "key6": "3BZoB3hBjhgcxQHyaiFz6f7QXieE4JQiZ9ZbAdGGFgCKb3bJpxLe4KVEKomnczTn3MvF9HrN5u2DAbF6djsfqgq3",
  "key7": "2z2SPUwF4dbSmKhhgjrgDLMzTah12Mm2scj5cBqZQnCVVH9YvG1ivnZtqRoLN65CeoQjD7epM3gQKVfegZ4TLW52",
  "key8": "5tCV1o7FV1BJDxUTrZbsTU3vhhpNDHg15na3sjp3R7Rj6JZ7crpoGWqskGcmVc6e2fsznZBzyga3dWNDoi6toE68",
  "key9": "4UdW2gyVpzUe6nE2fPFMiSeWftHdb2uQWsM1BR9iRWZ6HR9CMEd9CQmxu3GY1HpPyLFMzDa5jwpVf8SPBYUHjwHg",
  "key10": "5sUFzphYtgPPQ19CdKdRFhRv5PT1k9CMULPX9CTA9Su2YBtGbcP3nZLiFJ9nDCbTw69c9LsHzLVjbiht8xfEn2b9",
  "key11": "5qsudAifmFFf8STYBQz8xzEjM7R7kDtS8UvoU9M1KYX9hvj7Dk6QWVE4qFx2vqSY7T9CWqYfVVpYi1ut4N8sEsBf",
  "key12": "3QrbjQAhmhZi76HR7ESShzcnr6DFtNSv3QjbQ29XPAaPW1L8qvqmAq5vbe4PbjGKx6nj7f8539vk4L3cRss2P5kT",
  "key13": "Jdyta8JnHZYtkYcpaZNmTA4jyNTtbGDA34wncQqgLVSFQQUw2KUamVYCJTCyDUU9QeJELHhX5w2GzrEGfp6Eyt5",
  "key14": "3rjTrQKf6kmw51cZGQQRimDdQq4RzYPd1fiU3q8xuv4Qwk8CpA8wnX2vtEVk2U2tDLJJjQzPVSyHqF2Yxs3s2FC5",
  "key15": "48yE49hrKn1Z7prMPKA7C3AvMXrCraKE26rQtB8xvoxJz8xrWXmWMLc9W49izhGHAUSgwdF7Dz6hPEgQpFZeSmWe",
  "key16": "4whavick9Z2MUaYTAT4xWR1GTWbxbuy1B9De1B5QchPy6EHG7EfKmTMs1bJNXBcfDkBCLBrabHiMVJfPDaSmqVB9",
  "key17": "2ho5pdsNjCp4MCmqe78GZvJx1JAQMqsbpScTepZapo8mDPK6sUm3wHRK9dLEAk9gkCDACuTU3wkpcLehnZkY8Lhm",
  "key18": "3akTRV1ZeRWRY1gyVmf3XEjTii9hRu8K1Gxhv3nWfbNYBEDQ5MAxgwqq5Y5AWpdGZqiHNEaj5q2KRvv9c2sZc2Jt",
  "key19": "RbgHNHBXsA7iBcff7Cs6jhHmyxhFCPqXgd8PW2Mg2i7d74sgCYvr2uJBXJ95XScsyhefcXTH59a7otmPN5tJdzo",
  "key20": "3GU4erjzdK7W7ETXXPDyGYP2vFNMSsqRTu5JvxG99hxtuWztEGkJLBzx1CaCX2MZ4eLNaM1ARSG6MsAzQWeu3rh2",
  "key21": "2t6NPDBLAD74w48ome3QvfpyVukNR5AvtPB6oDiGyaDLuHBFb7xY9ZbqYFxoB1sKeMLvrT8jxuC4jKJZRjg8xt8s",
  "key22": "4nufzkdXReyxtFWwm4PPjvRVYsj6VFkob7ThXaPfxbVRLPGNRZ29mnYJYkPvyLRDoXP5NrJzRyYLwAdmvDyjRnjA",
  "key23": "5UfVNdHoZaF6rpHXNipURNH8Stz8UJqjqptePcctjvZW4d8vAzZdcqex8yx4BTzeSqWrAGAhqdDmxexe2u7q6F8E",
  "key24": "4RuHkKnG54h4eM6mrexgC2RauQRHqpmajU76EbVsXLdHVjJ2KhjEa9LqQMF4Ns2dsKxNyJpbUWWaNkdBGrkpPLuB",
  "key25": "5pZZvXx1sVPcY3C2MdFoGhsSVrVJGCWUaT3S9ep4eTd8tqCcTB6z8Sae3iLvoQzTxirtXSDACdvZhJWTEcw1hHJQ",
  "key26": "63i9RLis4oULogUGLLXXiKhyw7UrbCie48d1TGaGQutD2bJCDTXSvrAtdZSkZKJP4NWDVW3oku9gy29qhCdzME4K",
  "key27": "5qf1m9LrKd41Huo1j51EiFJH3waqpdQNwgAw1SiVjrgRf4xHo4yFGNL7XFpaZYTVzNvAkG82r1phq2yWCcGkQ8rN",
  "key28": "43VE3e7YAkV5fpGoTqvaY6q4Q1vt6td3pB5GZf9qWu8HCy12ZEy4Ap6RAHNm9bM6wtjVH7LW3zVePCoYF6YavNZL",
  "key29": "2z1KYuMoTAK6KakCeAzhv962tD47egTJvwviQd4vMRtTXrHf1KFcsxo6hhVgKKPDu62ow4e9VhhknTHooPhPkiMe",
  "key30": "5QJm4bRytJhyoAuqGeNZ2F27zXszuLK62hyCrFtfjDMm5E7WJCdNHdYQ6s94DHEfRPMd5W2BfvLeWx1pXLR3nuJ1",
  "key31": "2yYbhkJCDfUTKxEUXfuU4aYwrxzaPz4K1g38n3x1k71R8RHwYHahyZKGgezbHrD7iRJAnkLDogbvmUCFtQY6nfrV",
  "key32": "51jibngykVPYUQmd1HfFMRYa5XDrNkyyY5jFXSZbFwTEpJGGwx2V1aNGsTqv6dmeZ1ehsARrEuRYCatMs2XfWJdV",
  "key33": "4KktVLHed4375CtZ2hiwXTpxUqghCdg9H2EP5hjyDkzXZeD3yZC5AyE5kNAXrMDPfDxZtgsthJ8z7URbc5o7Fpow",
  "key34": "5PKdoovSbznjmu23r3qzuhPdaUnzmYZXHi269bYwUSVx2jyDTD32D3bGaW3vjQvoyi3Lviubkm9sykBF5SFA6ANC",
  "key35": "LtmpYbPW3mjyGFuwqzKgeDdajAWVKMh796J9mbmX72YUM2jBGqojP6BDC32xsN195RyM9KvqdR6JfHkzvZMK2Vz",
  "key36": "3hTVJmpMpRhEyLp64NUV3xJEHuTAjHX7sK5nDQBXiHKthknrhdJKRYaNAouSV3Ub5T7N53U8GkntefxpdQRbQuPt",
  "key37": "269eyF7TfTZJGB24wcb43on1Grv43Ec1hJaoECVoRFchmMro7AfKbdgZ5DSpHUj9u131zinQq8jeYAMdqb1nPRGm",
  "key38": "3duZLaumKTEZQbidRFF94DELLfgmQaD6YFRrQ58tL4AwURUjSoMoc1ZnKMME7gVptSNDGxSs7E5nfucL6bNEcVDV",
  "key39": "47o6yXt3JU8tKmYXXjsFYS7E5B8SGNJmFdY6EmuNThs8MVkvJmGYGdd41GbjEibrJKBYmB7rmAqh6VsdfEmQCwc6",
  "key40": "EXCtwJuSDzvVxyEWjEiXP24NqYFqrW4PCfbuPaJVDDYeuHgdqcbM37WaxjBRzo3PcytjBNcpdZWwC9dDnDHAktv",
  "key41": "61Uqyzg8dZcc9DGrR3e7zFDMA6EJBxNePtoijf2i4wDWM51AjoNKN9mwaEz6L75LjEDeDrpWhSArcKcaguo2etYL"
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
