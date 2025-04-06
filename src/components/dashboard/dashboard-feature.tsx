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
    "3Z1DUmu48mf9YuXRofxFKwYaSg9Q5HtgyycES9dx7TRaetaahdz9TGk7QYptsNeGLtMqej2vzLH7do8QB3YYGY1a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YdkQaRVAZgaDZWCMqmCL7KcDpE6WAyJmPRCpibKBKKjMGmnoEFbdz7vubj1HLsLr8yLMXFHCaeWisCep4wE6NQM",
  "key1": "3r5mHDC7NWAFm1771DweijezpwbRaTUfaZ1mhxNPeSRW3Mrw6v7NLfkgQmRsdH8p8NkMWwVLfbesvHXiZVfsy2W1",
  "key2": "3xTLGnT2dDG22io88qQU1uQ8zv1GBfcg7zQkmAP6yxTyMMXDoUnBa6h6PQTgWBG6fxB1GdQQviXq1CjgW3gRmp2u",
  "key3": "2ua7EUVtM5KbHDxm9xZUpW7ktsuMTfusLeNk496FEkbcVhVcBhiQfLrM392jamWNJePXXjMd4nT3a7SdY1iksqkd",
  "key4": "3mwk1LpwTo3Mj4nnuGrCfQb7XtdqFQP7wPxAJL2VS98Pj5Xt47o5eTyCCXRMPAbvKi61vuY2tTS7CMWDTT2zrQXt",
  "key5": "4ePji8vW9VF49ACFXLuDKPvVYeLk4Ra26e2cNcPBY4VsYaZsrPg6zpHwUcfKXn71TWFJPAjfD2S2TuwDD2FCCTjH",
  "key6": "hZz6NAkaPmanmVkd2om84v6Mn2iVqnWG1jKHdzR1Dvq35iLjcJb23nYYQjhJhLfoKgxa6qR19RzCPLaQBDBDCxF",
  "key7": "4tLSex5BGGjzm7pU9cowCF3fSYVpBZEMs3tZaR7PNsvB2e1WSHMaj5jwUvevhGH8yv3RcaVyASHyEWnkhj6rxuc2",
  "key8": "2NcowdXg3DJL6UevWtHZwnvjPBtyx7UGo7JBAbadtrmqGRWkTP75WA7nC8NdSQq4SwHD4Xa1LicSdUWEQf9EsM4N",
  "key9": "2GG6n5iszCGKxzymjrqE7nyf4qCMREMibYWNxgeENT6peaQXVbtZJBZ745sF9XVJ2DEn7JNAM1rjSo9jwtaHe36J",
  "key10": "4zamyVog6puwQXUU4WqDHfPKmLFwwNfmzBAF7dsD96Wtm9xLUxzKHMTtFEhUrVNP3KgW7uqGmWtuVsBd6Sujddsz",
  "key11": "1uPkA873YqNhxZJtmM9fBUtZF8rp4tUQNTVJ3Y3SS7TnK6C7z2wWVEYrcGjKEUvSJCDTEX1Uy296LUgvGavtD5r",
  "key12": "5dMPDdP766nVYQMQ4QhkXeAEmkWe7VJoXEEcjaPQP9XgL3FpnBwxGcZWmcyWr5XkKFD3iN9pqEpGwpTWinKD9ANf",
  "key13": "2TEE4eEAMB49yP33t7udsFiv96b2KTmdBhYRq8PZKmJRBQ2ozDY46TMR12K199iaNbP5ovnxHDuNG2sWt6FGCWXQ",
  "key14": "5joDfMb9CNPikqnExu7RR79dJVS5s8APKqShjn7QuHFWsY6GTaeEAwMeibAFWBnzdfBkrsCHhyXozidoGAjijhcc",
  "key15": "55WNWdrWN8LPHre2PKWpFySxpcLrBUP11z8gAn4m9kKwjZgRkgR2jdkNVv2AA9Z54HnGiZwQCaytoV7hpoM2kLjq",
  "key16": "Jgmm9nyxDdmTbrW2AyssCUqW34AGmoNQvs6MP3MPzMKDf2fkAv2WBzxHYjLeCwmiy4KcTAe3jBVqMKXbzMDJSQF",
  "key17": "355ViUEDv1jqxC5sXqwykTpqPVyDXr5Yi6WUFx7CubjG621HcLMpgKVYKuhXm9u5BEnWkqtabe6FPHkZb2uYBvjA",
  "key18": "4tQkENbQcPUwTVN2gkshutkmfwfJs2fH93EpMyaHgZDmZJLhNDP1e9fn8LxsLztLg8qLFnQEKE1X8N8zV5FUAwWA",
  "key19": "g3rvqSRSu9i2v6gm4Y7DVwx9BJFAffrXCSP6wbJcFCYMocd7h5Zbms5hYZEeszMxzhV5E7yGdqpGCUGEZhZRNHX",
  "key20": "RpTR5XgRRHw9fQpTv1X2vXSVqUWh1W4hUrJcpv1yGc6uQSQRPqJnTMurxfaQ7ntLnKp8QY5gkMJAcsVV1hYpd1w",
  "key21": "3BZUDun5rtTDkdB1jRz9ArCbRfXLASN8K1FPwdUUNMhSpGAtyyvEJzLQiJc4dJfYp837fXp7mSBydK4zpxUjtMU5",
  "key22": "Tik2Bm1hv3YzSAWz24QsFM8nNi27mbpSdFVAhsthbGRA9orkto9rAXkNqr8vfgWpbFQVuKYjcwRxSZwrnJgDJYq",
  "key23": "E9WvP9NST7izMzPas3K95brbPEXnqMHZA45XqSJeDr2dBUETmi2m3z8sG6H64J8q8gWHiqfLGVTJpiY73FZng6g",
  "key24": "2bDS9mTuXR4A3PPYXKoFJYk5NK44mJxbzXDoHkKhYo4VcMcVRqFCDwe45NC5PcHEj9ZwvVZQy7BwVp11Z8ZB69kb",
  "key25": "2CJCLm9qtciBqA1UQFTS6bCYwUAAcHmnH3Qk85BLsTX7cbnxUC9WHH7PZtR2fz6bqgz9VT5K1vhmkd5t9sCoUmp",
  "key26": "5QxV1naRJZv5LbxXSY6vZwjxwCxwwLPp8mg63gD49RYrghcognLTLWFErHBdDKeeK5QtKXK1wJvYdg2HfsuSmWSp",
  "key27": "PTMHDqxWhnth3Mtr25H35Cz7P8BLQ5RYLEszkATtKrzVeSpXuGn9P8A7vToXoKEa2erwtLA1a2sbfHV2DerbhG9",
  "key28": "642hn7XJtQawCGmmGw3otEYDnCtDuoqecVk7phbSiXtCsHWoY1qAGj3DW6FM7dLnzLFchLNHky4junX49WgU3XcZ",
  "key29": "3ABXvnQJ6w18VneAYLtEuAe7AEPcirSXdcrWMqk2SkpEuMqjf8RxNj2FYXADVGwipaHr5LY3qahzQ1kwuusHDAdm",
  "key30": "4pAiVChJZPtE8W5MmAmvKLRcyS27rBAEZJRoyqzd7cj3ceKiCymRNheVao9Y1yuuMSBYyy2Zy824a3qT6oBoXCMN",
  "key31": "9k2RTJQ9KqVJ38HAUQNLaQakEwLJKBVmo6z6FHeLNPy2Ce6zvrYgoXVhNJq7bBcoA7kzW41pACL9GRoLmnYnYRo",
  "key32": "3LK5pGHK6snTvwqGtpswJoAeiageJyALuD8sNDcQhHsBTmP73TPJsXb1PzEwWPjRSdYNeNNTStGFwKe1dzbApBNG",
  "key33": "RNz5LoeVqCpQMPv39pBNZjnN4K1KpbdUW9wZyyQesT67vT5NVWzob22A9GvyXJNHckGR7cfmiLsF5BNp4yjYXSZ",
  "key34": "AS26NPGNjD9W6NBJ9Ka9MkSiPSXjTmjuTmUDe779qD9vejTKwLdLEKgMZGWX1EVmqaKphMX74ZaPBqg7pkDK8K5"
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
