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
    "4DEihCeQgk1HcGLje7co7ic4YZpyfQackySwiVScCq6gVT34Re54Mm1k4JuzWkrySCcojixkvFAqEufb7q75waEq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39ffBMrbpSf3beuVzANn3ch9nwtfjFR5bhaKNtZCALXD11NAuxyAuz4n1dWJ6oQyend2NLaDSbhHoanUaZMNG9F4",
  "key1": "4vbR36YuamN8UbKbhbrXqMChuZ239HbFv2o8uEGoGwHqU1AbCP8yLjPdYtqAJSknsdWiTucpMpxm5HtnGGi5gE8Y",
  "key2": "4Nhm2u4R7W1QBJpA5sXimgWVj4tQQCcba5gGb8vKRbTU251z7Bgh1N9djGPFnREw4zStTrpcJCpZ9YSH5GqbaPkK",
  "key3": "3m7b4F5M6GPkKg3UbQJ6ZZnXn8pWvEvjFEv3G8VCsRsaTuVpY1xQjWgfyevkbqQPJcUGWzG2kqcgmk85wTn3yKMH",
  "key4": "2zsbjfcV7u3cfso2YeirY9PD6iNKmPaexvT32J3D1Pc5AYJmsqGFofTaa7YLU6d2hGpbGvCmfSBhSDUyxmNE5goN",
  "key5": "v86Xv3HvPf87rk8M3TqvU7Ht7u2re87V5nTPW5RxyqWgS7wXzeEjcnxjnyazthzLB4vNvmhAKQWd45sazbxHuuG",
  "key6": "5xdkHgntRuK13t7VycsD3qpyLq9fwfozHRK2KdXAaHDtiRM3rvXhmWJcapgevf98jeQ7HEcnEhFsMStdxKy6oSSq",
  "key7": "3rLJJcfF6MM4FEHAeAtCURa6zyi9jRNxf7BZj6ZoRQHTe8JaUzMRZpoLGf1THq8u8en6WUoseZXgYduQQMT6xsgk",
  "key8": "3N5nqAoq9So5249mUR1gJmdc5VdM9E4qT8JkYodVENTNV5dTGnfv7ewuYGDP9qfZLjASzthvnmfH4z1oRVGxRqr4",
  "key9": "4n2kajJTHJjYC3YU46oUXzcZ9GCyPA9XvYSEo7tsc9iBQXE5FbUq8LLLAJcG5EzWKKQsneGhrTqiTS5mqBeXNieQ",
  "key10": "5AoiBEHZ89X9ZT3xU5PDU91GHwSB83iLEZcuxNF4KFsHt8EB5cng1cc2aaMSL5YFred4nckjnkpgacW4D3AQJr7a",
  "key11": "3QKRV41M63LWWwK5FsHjTjZfzDMBf2Pzj8oFV4VQd9N2HJdbzgTwjkbZsvGQ61236F2tNUixATsnULxNatW13z6",
  "key12": "54GWUHZzJKbnkuZBPrS4j26z1NEaW2zjppyPbY28abpXDY9L14RfpyWcetNBTofUUQ2QYbANkjpzQ2sBEjPvbzNZ",
  "key13": "5J8NKvdd89zFUEctV6Zw4i5i7x4RYNEDo8DBaNcoNdBYUQRY9zj5oFXCgkDBy3vnCE2qmZjUZ7WkhsBZabVVYT6r",
  "key14": "5N4JEi9wPbjJEmkiVD1u44whC19Hj5sLPEVGsXWt8Dzi7FibtDHw3y1uJs8ecpakMUCRUNJHnJgAR6YVDGeLuWKa",
  "key15": "XP41Aa3SqPZDHh4eZDajgSsY9b4nSXi7Q281MD9r29rVV25PPV77gVNXnuLqSnohYsngohKWti1bdA3UKKsyACz",
  "key16": "3juVaWsh5TbXux66WGNAQKC65hwY55D1FvRQb5bXP8eW6qxQxSpsupSRDWoivz2kkhuTKJPoNdzRWKUYz9pn1xhq",
  "key17": "3oGWiGuqVvj5gEw6koc8QMAHHQfzaLoSVhGSwuP5Hw8RzEVWPxWw7jBD9QyCqtxWFgCk6tn8ihB3bYyVA3sP9Yxg",
  "key18": "5g75RhyorhSK6y1Um36QYC4dWr2BKfTTBWm4MnCiVS9erk6CKnhyRekzCVLJ4eXmDkPGDhLrzHVLJRMLZ2AbFSim",
  "key19": "7mimnKaZw7DczoTet4y4Ru4t3gweyp9F1jz9y15qPf1odJsUtBSxJapEaQT7WgGvFruKSrbKAijYDcburMztMg9",
  "key20": "2qbvoAbL1Bc4knSqVNZsNjeoQmLvu1dCUxGVy2QHaJaKnsAq4DSaAf3Kwh5Sy5FRUQXLeo9vTs55ySsbPuda4koD",
  "key21": "2C84zX7LefEXpTgnupXNUTCAaCFKHQdYhdkpDTz8ryChJdUPufDuzWb7haKKTLqRsUAXGF6ALt9xF2R5ZbK9MT7E",
  "key22": "4aw62KSpVmbL6VWyUX6RYJ593JgFPWVWbVUs6hse73unrrdWEk9uwz19bZLqT9ubjd8KVuFFUafthno7YPSW7Pr6",
  "key23": "2wSRkCADqPZmvtXPY73nfxHH5gM2FE9KgKtNkZuXQwVfD3fhYUDHbVpxbQF9ZCcJRMfDSEi3kwDLu7j6r1NJUaxV",
  "key24": "4HZBKyx23nJPMVabQ31EULmJe2TCQNFX1McQ9FhykCvSfj5bjFU9R1up3iwAEffET7q7tWFwMjQeHio7RcWnSVNB",
  "key25": "zhqXaWHzKURS6H7qivfvAHa3XrHmVKXKz1AThdz5M7X7MD8cb8fut1zj48M2hS63HdPuPCckGGJ3ttM46RAtpbP",
  "key26": "3gBpqstzEzZoMVPq2kJe3KLzJKMvJtepZinKp8W7CGQtV23Z6hf8vLf6EHC6d3eHVCxv1fUDfkbDXhbLkwZzHgsU",
  "key27": "2MNPaExgp8KcEu92hsCWnDbSV8pPwCQAqRwA8f6uX55Y6EEsUhTHccZchUBmDfYVsgNhAEWYUgVibNPSgLyQ35K1",
  "key28": "5Ykvjcbc66RWqbraHyqwioPNjTTBziChFXv7ZayuXfRX3zzSJwKB542RKUcdueakzzcqUxuSnpcYBVhFvUjaK6Q4",
  "key29": "4XkbwrarYqHzA32q25sSeS1JWHJyK2BV8JWbedS55BJyq5CoirT81jWQdcBUWkzSByCB3z6Uh1rS9pdVSkXCw8Q",
  "key30": "e7RAGgSzGXn7jLZNgfjqxRkUwViBngujznqgT3rcSNraPcgHNVqcbd2e6c3Y3ngjEshu9fGG3JZUGXtC8sozonV",
  "key31": "4GQRBXNxj13hRERCM7cfz8g7MFc5JtBtYNDR12QYfaQxZ48qxoFEmM7fmAuF76Z4B488v2sSby2rvGhAwc1J5i5S",
  "key32": "3yVFoP7eZEFySd6AscLnX7HSTyVzW3K2PASYPWMoAWgcogT8AVJ16Uk2dtKx9gSkPNkef1gCtmnwfYwkqhNMtqC8",
  "key33": "2U1jCwVFPpxP7S7j55WJu7P2CAyMu3WtmHz1g8CB2y1Y5c1jM8SgiihKVhRtYV8xXmXcs8ioWRq72HSQoWM8NwPt",
  "key34": "29XzDnHXNYw8hNSvewgLL4Fye8zskvwtobgKM6NCRZd5nzRbJKGkShs77MeMqA24apLbmqGW6Pu6knSsEoyGcfgq",
  "key35": "5zKx6QYhwCUGnRFG9P9jEeePc6jx8h7GSyQDfgXVJjcaHFiEUT79CuXiuitKDyXekSB8aLp8gC8f33y3HkixBTBb",
  "key36": "3F5fBaetZC6TLDKghNmstHGkLX3yKrZhyHMMqjXTS7PriRj4WMgHsrhqAv1C7ZhM7cp9pr2a3obqnrq8LXCp1Zvu",
  "key37": "4rBMEyJ7vFW4dvrLLNdw6LFEYuWDp9gZL2uvkPggzcS2fTqpochrcdFAUYnsS2vB1TCE1C5CT8ZdA26wm1FRGafr",
  "key38": "EFqx4S75ZXfCuxpLrcGKhEpRUn45W1TiWWQwhcBWFvH1NXmuAHwLuzcV1BbUtqase9iqhNBo7JT2ScNLf46R1fV",
  "key39": "o3CZ7ZDuqzTT9qXrcKs9qNaNPnu64VKs7UpuoWxEacuWSRqh56FCFeXJTW17A8hWsEhMg7Tck3bPC2C13hnKmTa",
  "key40": "2DgFeKsf1dEaqa3DMauwET4rAGJnXW5vW7Mvt2v8193dJSiHBU8ZbySJyJF7SMDaTarRzijfAKvXVe9iwTiJTvds",
  "key41": "TMTwuPRSGDmSrapBXxVXzhwisn5pRUALywWSTegdMtMT6hYgeEm9jt1k11wKyRMm2iG5whK4au7cyYoEEh4JDnE",
  "key42": "dPjKQBVxUeHLdG3ZZquTcpUm72bmrjg8yzp1MAvDQB3TLGoZbwdmMMwWdegLq2pejTjXWaLJGQGajxCura57TZQ",
  "key43": "3rYU6jPMWQVZ8hhgWXFDJZENL1mseDeFwXT7MKpYsJ3gvazwtJpgKsfxqy5q2PiHxdBFuaZ18G8SVh9TAiaLD7pD",
  "key44": "5ogS9dywRykLhDjSbLQrrpWtiBsN4AQmz8NSe1Hi5kwoGoWY3DLSwZo1dD3AGakVLTcR91Mq14Qzwa3Yo3uzZCah",
  "key45": "2x3p2gVTLJ8vZ5UA9XEnvcQuNL3tNM1XysLWEcRhyyKFRcabqEX93QKEQqyzzitJZLkj8rTVKnCkycDiYYjiUctj",
  "key46": "2M3LCpXnsEmdW7TnTNCRLhCutfGd9Lw9PCSJ6Nj3kNzxffLVW3TxvDPgEGY2y96s7j3F2WVGqKfuXx2fHqJf1ZDG",
  "key47": "kp4RpbBjTX2TMCfS49aGpfe1x71u8FLW58wyZKgNx6kDV4rTsoGRdCkyA6Z4C9aoz9nCTiHWRQvwWvbLBXPX9U3",
  "key48": "2wjWR1axLoQqS5HkT5zDL34WPBCrDL1tZpeoH51956TN2zPwmrceB1UzW9nWk8tGewy29tT4q4dXg8W9MHV4Ak4r",
  "key49": "3znn1EVmXZyPnPADK4zMPjDBMiyzN5bYRdfhDF7wAcpEEsG5rRDJCtirDTe3jGnksXCQGqtZ3vvDqCr9ju8iFVyG"
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
