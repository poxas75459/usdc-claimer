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
    "5MWMQJX3gaEajWwdXDJjzNNs26adEWt8cVuJbRWxHGd9n2YbJEuqRHB7CgC4gV1TexhoRkqQzbxgpFjEyUZ167Q5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zGUmRpr9Yg6AwLSZd3UFYMX1TMTr3m2sqxCpgyPMsJjHHqynyj2Z4krtBRqw6XpQrM7fHkSXtmu2q7zmwbjN7xA",
  "key1": "4i9AvDs5p6pLATCNsk31RR2BZGBpGPVnRgQQzC18LevWjv8NzjWdcnHsMd61YgDscAhsuV8np7epZfUWUuXk2uz2",
  "key2": "nNKhdeA3tHZBq19siJHrck2s4cspVYuMLsK7wZeZkW7myfC64fX9A5AEDa9VuD15JL6HreffWmYMBp7iwwCHaVV",
  "key3": "2EiUy1FwomM1HaNxJ9f2id6dtiksCLFUEnurL53K9xAA8cd3N2W3M5JTD6QvJFjGjktK2BjAZWxwyxNXBdRmyjc7",
  "key4": "4ShbhD7FKiwGzTRFRNUC1gL12QPGpVERtt8ByHPcMB4tSCxTzXjxysiN3uapHHsEJe3NAQQBcF13fM7f1piP1TST",
  "key5": "2exG4XM6kx9AD3R1ygsiQ1ZzqGd2idvXNfVLqaf9z68VRTfXewcAiAdcR3QjyqqkhTTrisnWygKnJ5AV21jG3vUu",
  "key6": "4zuY4eSggUqkfSd9E7MQsWYrGXD1EG5ZpZCUBmDT4MgtWBa4Un1iehpJf8vyw1sHvC9AV1TSyL1xNemwe3EDdTs1",
  "key7": "4u7apYP4gPMqPd9svkGinKKeJwcyxjg6N8mB9MiJF4fyUR5W6Ho7644USppSZF7Ex1bpWvwk5nyA9AvRzbPNijyJ",
  "key8": "573wCt7pHzho8r57eEQYFve8NRVR2eXj6iqjQ5N4cciZxWfMQVPUvpsUQAd4x7QsCVuqNn1u48kDqAQkDgc6YtqC",
  "key9": "KLEWWdvvnQPFosGKtZkMjBQY34fwgQyoCD8tSMMrx3riPtYiTHHrJBGwAst8qLkkH1vDoh9hcWKKBP1XAoLMFoX",
  "key10": "3TXoUcWb6VVbqkAQorBdxKD8BKpW435N6vgmYmPe1WBWK3Neb67XUKh93Q7p9oRqA4FTgKDj6MqsBvjUfmhgqRZn",
  "key11": "3cvyhuXmoiBoCi3aoWp5nDGtj1mTivkoRgrtwmKK9gJKsrawobbgVGkHnVLhfQnnAdKnLA5SdmeMLHXfmkK4Xvzh",
  "key12": "Cy4XbNjuBV1zgB5pEpfvCMzHvrRGhwsSV88Mfsyddysj1zuohkUDokkM7WRM5QJtPm92uEiJev1TLL65QVhspiE",
  "key13": "2UABNhunrHHJSXkKwJYHMo7zcCtM5yFGXTV7fPXEUaBrsLGMpkox8vXHwkLCbW6pfPpqBmFhXiTAA7sHZNXuw4fp",
  "key14": "3AKrFYAceC1rcF7N1DRaGrM7UWWD8myETksuTBVAtaGnefb5oyxGGa3aZPuShUyAG5gHne9xXZGX2vbZ93aci7Dp",
  "key15": "ujg75vpCQ5i9PXsJctC8Rtmug6sBVm67ocxih9PHpPwYqa5uzdf1aUdw1sJSWn3wERX4pfY8hU5sbGvw7BRwPV5",
  "key16": "3hNrCKpxdtwG5N6cgm21R9YW5fWzU545UquYR9LBT8wjGNAYWAAEaJiCHh229EBkMLpNrkWX5N9RMru4TPdxuZHW",
  "key17": "3NhuKiYkby3NijPKVV8ihjrktmcfaWTDZUgpLLUrA1XurSmFthvGVn1FPcpNsDSoCLSaU28nqnk6gbofWgBK5zfD",
  "key18": "2fgKcyNuvrjCGkCc5kLr37PmHdCdF7kiziVxcFMX7x7ZVdfznzX1C36R8GhdPjdtqguZXzJrFTjjYnhVR9pL1jGK",
  "key19": "5j9oZmRHR1nbDTnVdE4mwYc7PDkJ54XmPfi4WF4AQW5ut1JsjSpeCBxdkxNSkA1Mbx4d5HZciAezDpSQ1J32HhhX",
  "key20": "52QxtHsHS74Eu1TxXftp2CRF9uKrcjSQARh3V7RgQRVb855Z7hz1U4ufUM762VQa2h6sQEpabuhPw4Rt5GmoBvEb",
  "key21": "616Q5kGnygFcLEKuATMZzoxCW4HjKUiYAp27egi7QyNxunPzbE67oEwxHhXFyn3R7rj9tq2p1mJ2fqsSbDec1PGd",
  "key22": "5nobuGtZ5PvE7VnDnQybsBhgB6mT5XFDrPfNrRUWkTwzTkyudD2cZcYjdvMczPW9dfB6V2WPbUKtnNU34tRv9mQe",
  "key23": "3TWaK9xUuDDdR4oPJXcNaPVGFKXFuaFJfPj7mhDDVaf1sGfZdEBhHdEJpYCcnnhU7Lp9fr56PPv7vtoQZUXyefTj",
  "key24": "3gxRrpJ1Z8Cwj5DqmWhrcFADXoeAN2reWEP4LT97MCF6irqXHa4vVBv42BnzgkUf3aqbxMabVMFMDXyp3AQL7dS4",
  "key25": "62wa13gxF7ZJLaRfx9PBfK2PXG1MfoqL6cTy4vkCx2Mn2T52hUof3pqEoaitTN8rLBF7ic6RoG2TXfcrxiUAbYRh",
  "key26": "2dKt6gsQ65K24cpgyAn76xXqrqh4r7gSd5a2TfB2nWBhtka63ZaYwqdYfmCgX2Qi1zttut63TAsTLn6BZVPgR6ve",
  "key27": "2HxXKVppdCPF1BhrhJCT3siTNtTaxPK3U6nbGvnDbiqMvB7h1ickmS172aThP6x3ZFKzqupTJuWaZtDtqLjCKaAi",
  "key28": "4KnPpxbxM9es73vWZDcf5uqkyVhxFTSjDbNhnXxVJ3grDTen4ZxKXmM3cLLVECF43dztUMdJKkj9qMVLm1mDL5sQ",
  "key29": "5K8LYhhiYPEK6xnfwkEGDoCuRoMLfztzuqHYhuh4cyrReHyM2gAMK7YaFBCrrkJ2ySN6puDYJo2AE2KevDuiHXgG",
  "key30": "2dfvP1vLnrtpag5oe2Md6BY7oDDZhzM8e2fcQCiC7ixYCYBwsLn1r7XTCdkCfSMksCtbtbhc5SuSJ7ZwUeAv4kK3",
  "key31": "33v6HwhPVE4b4vHqyvqsdba4jZRL3ruzVfcjrAgCzzxrZwJKMDCnNDpBANcVxitkjL15Sw2CYLzGLkD3BsLKqmax",
  "key32": "5pDq4Ujimj3NTqcxxVm7GwnwjKJY1RFvGUD1FX7w2yPxLrARLwyd2tVzfvaUDbCvt4aE9bdABTTLVCk4PLh1y8Ar",
  "key33": "5zwHWvoLWMMSX6VpWpSjVQbJVFhtwiF9M3wrZv1sjLhWwWi9ZdpZNdz9oBpzKoWVbYrRWMbCCyb74YfyfCxDjbWq"
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
