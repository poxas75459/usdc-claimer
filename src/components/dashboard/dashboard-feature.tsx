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
    "5MuwAUjyaZ7X2t2RDbpXidB3qmFK986vZwf4X1w9TByDtY9rMVFWyFbfSBMdGYEh5zsVCAGAXoWro7WbmK1Q7we7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21SftyTwrCUaL366HTEBkXy4aSqCvC1UsP9dZckzt7NqqSeyoehefzwanRFR5jZhbMAsC7c7nrfnmbBoXMa3Mf36",
  "key1": "48TvqSJ6kht6YRHcyugrQ8UZffhNPc58nRPu8kuqqPyMwK6d1WpFg8MajH1sf8kBMXguxUBRLbvWwdWtbKqnMog6",
  "key2": "4uroeJuGm5Za6fcZMn1P6iPsJ64BuVe9GPggoE3ymzfzjrU5pGqcc2kNAYEppd95qNx1YHzjNhDQ7KRZ5iA9A516",
  "key3": "6sHAYswroazrdyoQMecDpktWeM9fXVTjgeJatx2PbunrgMyuvGVq24UtQ2GroE63wev4s9cTjeCL6Er8wenGSUr",
  "key4": "6596eQE6w63wz3FSB2HVtijp4p8JGLjiBWMwC8VrRyjBDvPUmUVHeh3SqZDqL98RLGJKLGKfRmP68cWKK3vp8yjL",
  "key5": "5wtS1FUonPvw9qXfxbhgtqovH6o96NnzQb4LBu6DRZMd3eUVoDaEWNHttfUqztJ8NgA26bdzQsfAsZmo2URfmszB",
  "key6": "tA8MFXtFjFYLFz2ezVM6orZKqWWadePc9e5joB9F7u5QeUb5foVwDdH3TVxxcnnWdrto21hqdFZ6KD8aUegS1RK",
  "key7": "4PnTz5iPUuK21wuXPuCGQ9bKokDJCbWgAvm5AqkkDd6PkdWfVGRq3wo7rLWugE3i8dhkYv3NjDaQj4P3AhasDJ9e",
  "key8": "DJF4VyGwyWaJdaRtvWHuq6io6Shpp5aPn8RJq8zXbS4GzHjg1vDygQ9R6UiuiuEPY5U6dtqQbU1XfCULRZXWevV",
  "key9": "5xaz4aXLLQYzS7Rsto7s7wyw3qJsU4ehTmS5N93hmF5VhaEohz5s8bBEyF5Hu43vUPzQmCZEyLDf63xKV9XnQTAS",
  "key10": "55osb8Rq6vpegom39cxbuKr58bTiue4qfzmyAYGYq7A3FyukTKsad9vWr1Hp193HP4p3oWWTQGYnqV5XcJE23Q4",
  "key11": "5KuHe4nYUbVbcQuUk69pod13KCJMPmXFdFTx9AizoD5uPDcVffGpTK2KXYXEFWuGA3hicK2B3JrQhUvHYQmgHozM",
  "key12": "31QhC4LNHSyMT6SWL92yng8MmCmZL26VKrcmsCaVMibFeEMC9Hx4kjVuJCviUtKo21MGJKrq873YTd5KsQRbHV3D",
  "key13": "ospjy9x1D3oUU3RHJbg65gNq84NZLsPg67q4UPy4ASC63u1WyttM7NkgrH5MvWZjEvKmrZ1zS38pj2ad6pmYvnF",
  "key14": "aXeWV4Siv8niegRrZw9yjz1WsrpeJ9hteoqrBPSfuxK8hZH1uBqsPYjLU5ntd26oSZNTtEkKuYwjjah9TnqFbUX",
  "key15": "2bBGsRMAkfeGZC5JepNBUp7QXcW2DB3RfKC7UyVdFKkDYcP6jyJnURwm4rLN98DFYDrNK4naSfM1LMT4vt9mYoky",
  "key16": "354zLppqzCHgYa87rjU51D3QNLjfLDp3WqJppXo5i43RDkfMgyS2JULsspCCry8NHNK3vpPWVbtG5bkQssWQMdN1",
  "key17": "2ipYJ6iinaXMUwGZUkhPGs1N1B34gPsJA1XQKUmQR2oaCEJoNe3f62qVqowhaTca9v1cqjKCexvDdn8hAFhMfMee",
  "key18": "4kgAod2Lr96tthw5xWQUSUuPhNhzCM4jYpfxyWHLagBnadKUaHtTGjR6GmrYCRA1CLAyXoG3fcQvDPSfXYQZGiCp",
  "key19": "2fKGHEhFN697pYUceBTowXMiv1fo15k6FQhdqcCZxS5DNmWRWZm4b8HxDxDSL47LKdB3vURHEpVth7GVUUSQuP6H",
  "key20": "4pHMURzfv4AxWUhmm1EadT4XUyNkk5iZeUPVF8hLie4py8Uk8EQZz3rVdzxyaupzrwEnMuQz5UJfQBUcsYUP18Rh",
  "key21": "E7bs3NDz4vE9SEiSijwFRg4SB7zsBAsJf5CQhAmKNnpg74iVLxLsDafYRFL8PXEuBNEdPgg66KW2XfrTURMLZAH",
  "key22": "5FLvgK8wYVeXjhWp4vf8ektxpAW93VpByNAKHqbuf18DzYz4szpSyhauDPxAW6kdFa1MBsL6CZsjt2cUMNiGxwKL",
  "key23": "2a8WV2q3wHeZwFsbAW82ksEKvHSRnyeAmNioPgEPYGUBkh58NpANTtdFjZu4zTSErGDvijb2MrK11RFe68V4wAPE",
  "key24": "YtyKMDrSfePUijLKwBEn2TKiBs11v75BgM5MJRVC6EKa26w8kAFwXWkRESTz4HzNWTeEJkukUEAzvQU4cC6dNnu",
  "key25": "2shd2uw5y9EtCjnz6a1XaeeA9R82qCFkHrEgeaKsH6HaF1uVA6NTwyb6ASLvJTj4fz8FrQtvVoC6WcLkRoqJDmDM",
  "key26": "2wKUWy7pHEhxBfBtppDd453epR7sb7pW9rZmCYviwf37kkGieDTCP3EmqFxX2zxqqeNU6E4L4439ZAx8iouq2DUW",
  "key27": "3CrnFmDzQUzjkxKtamaw14VEbVSQ77V7HtKNorcbWMWfvwreh8ZTYc8jq8zFu36eSrb9E2Nyu95LJSuJwHRE8QV7",
  "key28": "333FcaVwxutcqaLdyvxgVxstXAg4shm4FiEMVc8e57LAMzK9ojsPKpEB79oHatHhAY9Vpyux6qh14x3VgHMcRXRF",
  "key29": "5mfqHY5cPWkrpSMQbfyyiwGw67K6FKj5zxkYBf929rYHofVkHb9ZVSFtVKZ7tNVGHdpyK5JnXLq9uMou87RD2CLM",
  "key30": "4FYFigXji8KtDiDnj7FwmF92VC2R3mxVafr5LxSm8dUcpbaEXAFXoFS7EtzEWsfFatzwySvj71nJ3NFq197qV1S1",
  "key31": "3SqZ6S6fcegZVXstTFjo3JWt1EUK5WEPLdyhPsfbV36AgycaYmLKtDFebG3VLALi4ueZbUp2a6n6hFH4zfi8rdUt",
  "key32": "LSH9debg4QNmWjDhug5fwGpig9YRDkoTDCUVedUeXXA6tzrtz1sx2j6T6Qn1ebwiKx6mEP1Nf4KSF3BeCCQAbFe",
  "key33": "5apA2L9X2FRbyk1eWHjzoNmY27EaCAmgZGhN6Ys1q3zbYfGM5vRaw5ywPas7MkoEt6czdygWMkauVnse5Pgk65CE",
  "key34": "TacFojWw5WPKA2XBZxvXDRp7jyMjJHbeiNir4Y8fdFP6poe3MWeWkzu74osd2bDqXBs9Yo9iRagjoWLFKAjyEmy",
  "key35": "3bfmKoECtcVQTjgCZcTforQJ9Pm1z4nNTU6hFek1JvKDJFG8oojYkbWeakPV8bKBidFhTWw93zWjKSN6SCpnfssc",
  "key36": "UKZvxJV7vrQjsRmhtutVyJfcHCdpj2MH34aStRBP7d288Wn6EYGsGC73rNc8ot3J81sGbSMbk3C1DKrzsPN8x7W",
  "key37": "sbDmQ2fTFXzNY2k1vjQktiSJLCkho5vYiZxTRbLj37aiyBbXBhN4a98aV3SN2nXjuAqW8e8kgQc6Pxr2aasWBU8",
  "key38": "5foTUgYdt645NM5nzvquEgvybFoov6LBmE9msL8STaDNKjoB5a5iHt3jJCfQEjTs4WQdjoSJ6yTfkMNrXasZCYHh",
  "key39": "4ua5Zhw6SAZEkAYRsAM7nhXxxHYMpoKYLSygWgaUrjLtoZvUEzvoRMDuXsEGXo5xiY4pTRjaKEZfuN24SJdpdnnH"
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
