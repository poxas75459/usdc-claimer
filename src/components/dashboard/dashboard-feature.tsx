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
    "2WVoUmeTdsbHe9yeVmUGmqNzjzBzCrDzjBgWhUZnYqGhnWBkmKFgskPTppUVmBp4cpFZi2xNeLdPiYssU3ju9Xwj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q7HVrapvudNnoFEgucPiQiV5ZKLphPaKEgb7kDRgZXDSPTNjvJYNcFkqQz3iruPRzb3Mf9sX88QFRQKD5AD55wQ",
  "key1": "372VLU4yjLnEhUayYhHeyLdGojbDfVKuRXSoNtoegVx9MmdWBp5UQiyMNZSz2vEbtVnq8GBn5M5oWrUBdJustZ3X",
  "key2": "3uDWKUQ4ek1p85RJDGhd4SY6SifK1Vksy3NEaKKReRqLzETFUfRruuM72JwP2kmD2TUNL7RFwLcGm6bRZjpiRHuZ",
  "key3": "2Swkr5uijyAEPyfTuWu1navxuPFxDZEVBm3rNbyXwPRowJ6QsDMkyq5b2HoBuNsmUzEFuJ4wBj7h3uPWNarDzfMq",
  "key4": "FWvCKhTNpAGFPcgE8DCJfpEFQHddZG1beM2cBvpQT8F6R8vNpsYSpae9ihUMyYHfxAMXdjRtrjzAAZYg42VuA2w",
  "key5": "4LeWBZgjrbYtvdjUYY4hTvT5yqyAUrZdEJ687tCqndbGgpteNCnsoM5SHY7SvR2b6nuor4wtZLUy356TU5ZuWrC1",
  "key6": "4tDvWKWPqkD3xRuwRCwkHTAH7my3Dg5o4iZXuXfFGU91VxXzQtJVUkmgY68y7nSnKAqN8r4vrhmXLPKvZJjL4cpj",
  "key7": "3KFDyTPVSzon5UVJTYvMwdeQgw9BAAiULbijJrQJSg7Yi77T3Mvh8JuSJMJs3jJTNb56KuPDyx2jVURTtUrs2Bqz",
  "key8": "5UHSEP7BY8RFe5NzpL73ea3EuerkLFu59qWef6i3iZ75DKnJZbSJzGqztxwKyosW835w8TzZtsU1G3zh28g8N8rT",
  "key9": "4b7ig1phh4MD9CUpaSnZKULsgVwWSNFbDBETLm2uwL3bCb2de26PxJdfqdnEVGW7zifUz6JD9RaqNtrHU1UicJTS",
  "key10": "5qHKtNLt2jKEhvwnPd5AWEsExNqVa93mNh6Nhmw6FoboYYKFasvmQmyzqqpraQGYcBbUwRRErZVPMcwbaJAJ8U8C",
  "key11": "wDFB4EQVp6c5yN5JsPV12hqZuRBZUYYd9p8Vs9qam6Z6jrvJXWkZgBP8GrwJzux7g5u86MYY2FiDD3P8orwJJcq",
  "key12": "5ZKRFwmmCmiRuUkLYxrnT86oSQPd1sW8jBwPRip75H5BVjBBUU7Y8B48tw1dNXCoxEAP1c5U9nuofKYnVZufS8xd",
  "key13": "5r39Uh5DGnjj7Mwf8hrLEh6V9fmfnkXjgTyjJdfUduU9cgdeJSuiAieYmifDGQzM4UDYyfV4AfWJQQjRez6AGrVu",
  "key14": "5tTvsuvYMQqLuufbjMg7ZdGQTuG9teqH43j4avM1dbQ4mV8CvE8mhbomhz5vYZeLSPTQoZiN7gkgRDaaWhKa5JNg",
  "key15": "2mqVHoJkbQdgbMGtMXNZZBfNAaHrDgjd8ZBvVTZjidDZqJyEL67KQun1QzTr2EEFQEAtFka9iKJ9qxe2wXQiJJ2",
  "key16": "5fb99MTBRjFSggd7vhd3pZGuBdxhKWbygLMWz91q4ihTfmaTTr3MgQA7WZCjXXFiWrwXVqHmiE7HPR76nV51zqab",
  "key17": "5snorfaRNuZUaazJf52JSQNGWJ7STxJFvRJ6YoAmW6JAinbj8ZioabhQfyKTM3TSCEG9X2oocXCqs79rnDx81dUo",
  "key18": "2crmAbo4e1EcwWp7yTjMuu7MLjob16Eea32jL1YEPdb2JVgrJcWaEKyyHfqChJ3zZ8TgKdu5bydjQQoPmzfnSQ6w",
  "key19": "sFCdG6cqTZnBenDx9ZfuGdUAAdxVxmsKCxbQLiEXWP4gpqj4DvSagpNnfcN5eKhBxtoCShY3CK5GzMBspNPXGDv",
  "key20": "4iio3qGvqA7g3Vo9NmuMwrrzKC7LPPH6KMaazw5KsZTyt2Nj2YFrsRrXjnWhbMW3gGHoe2RRhiEiFzCTHX9nkqnV",
  "key21": "mnVf8VF76XchPA2XoZdqFKfbrYgyLds8FcF6sQpcYEdXMPtyqWGpzGfz6fNnekatz6wjiAKj9pneFk543cYp3nS",
  "key22": "514ST2jaN2SB5shducS3BxMpoHAV9BR5MMB1FArwReY1iStr4YprQmxAKwDtpU9hTGbrjhUTxupZaNMNa77V6coK",
  "key23": "5bn4FDCr4wRx2Nv3s42br6j1yKS1k9DqdkMGkF9mb6KbD4hBHXGKE1YwtrLDdwcBq5SMPU4E5kzHJ76R8SJdRtoc",
  "key24": "2GUA7oiZYgpVRFectEEjyKaeBAhVobzWSc2unSZAo6bpyMAcNqaGxHjEyAkp6X2GS8JqAp1BfqTJaHeVtQpk6oMk",
  "key25": "Uxdfha59n5YsmN9uVTAsG1N3d84RCcdu2K17RLjRo8Ci7CqiyZKhXoBvxehVqHNdd8dpuSrR7Dz54Gv22HGPdY5",
  "key26": "2WuKww8Pk6VAmPMYqHTavpc3kGjpnEKNmSATXP2FUyysFJgC7WgcZDE3si8f3thbw2RdfpDLn2xBCZVqL5yP7Ca9",
  "key27": "5fMFki8uMwwbowYeSWxF41P47tUWsPGu6FcuJY2KBAwqc2vyjvPeE2KET13Xv8vZzNNHWUE8WaLKGJ2MdoHn4DWS",
  "key28": "67G5s9zxmjn4e6JgxE5HzRj3tcLAq8E7bG6x8eP4ncsU2xBkX18UJKuyQX9Yb4NjxSXzzk8dHuV8xPfsDmonRC1i",
  "key29": "2ykUrsmdQJaH41HgEHbcGzTf4Q395u9JbSFsiQvJzT1nq4NBrKzA1URCydEnVHAmxCb9GnmCibiVox4Z5TLNeHkm",
  "key30": "3iH5tjHxXBGdu7TvW7GPrrfQapiFX5kf5RjoZbvDEB3p4fdQJhKqVUnEmxA3coDKxUFHCzrCEKcWtt8YwybQdcUB",
  "key31": "5Xp1ejCYnjEn4ynBgfXN7vnPUYDTXS9xP1X3eUZAgVZxchRHmbNQ21eyBpkF4A8BoKb6de2t44jrZoj8YPkjQyL2",
  "key32": "4nejFu1J3J59N1XuUxV1me1WjfpNA1CwW3g4hiav6oLoFh1a15rQ6V4EMUjVnTanVZ9jRmRv25V9BWy2ucr5rxPu",
  "key33": "61AKVpWwy93ghPijtJxwjsdZG8PtV2t55FufYKWKVirLYXuJdpCs3ymYix6dfHhvBU81f5TCV5bd67G4Djk6K8Xv",
  "key34": "3uhBhKF6U2aPLtL32o4o2kEKpceXENzMFc2kiaCpapqfPiwTABxfQW6m1ceJAiYBHrbLj3PzMmziJCkaQeQHxA75",
  "key35": "3HuKuczcnTfoLCyk7gTv9GUjt7ZoAeSKJeituuWHNTYY5sCN2wPXbEGxWKKrBKcHDikjqSX35T7YWjvhRTTrx8Q6",
  "key36": "3y9EupaHjVm7MbcyzimDSx1UFM5HUrNmfxa5oSESqCJtpyWN9sFPbs37Tjd8DHTrDp5N3u4NwhJGz5nn6pEhbp7p",
  "key37": "62WKSRdtM6NPaPHpL6af4nHitrvEtp756w3MUdk281QSU6ZJfYzfE639yrPtAbQZo25gZzrUEYammS5Cbm4AMh6P",
  "key38": "4rQXSTA4jgCAMw8S3QSudF2thmNLPGGrffL4RC5h5DYqcFY6XT4VW1HNN3DFAUzkyeXQvneoPS6w8S9Whx3J72f8",
  "key39": "5ToUAYaLURZ9FkxYU1iKEWVA6r33jjfKSk4UidEvKap1a7KTDQEpdxJ3wPkt8WF8RtZrVk1qDCatJLQ22hh7xgRB",
  "key40": "5nA41QQv1PqZnMgpyjy4MtTF2W9XypNry7C66A55vc7tW6DamnqvSSRLEVkadVQSRAZ6yqASh94vFoUzUWmrxpJA",
  "key41": "3repKX1kymgfoZzhEjnoXg83f5HvrSDNRwzahxXdpAYAiJpEv4Rjk1GL8pBqzvvi1LcEeQfNisk6J91wP85EarZQ",
  "key42": "3yGDowisu81AREEpzEqibbSXaei6SFEaBN3LLbdQkubGcm2HUHLtkxdQ2tbnqWcWCFGaK3JpuehS716kw2q7csyn",
  "key43": "jzjBqjNQgqUNsv86Vz8AkkDXfs3iDcqQRmgCFTmC5wedXbwkVpYsGj8CFnmoUr9dVKNEFw3aWawtu1vxG2mxk7C",
  "key44": "3TQKLHkGeJ2oX5GQcEdtFBxx3a9EhVfUaxxbzieKChW4xFMRTZvgwVRvDmHeHYNZVisJqr2TNpCLHgcimk8i4dVe",
  "key45": "5gRFrPBMZPfwM69dXaA2NKtGKggjqw3uXTE2HnatjsWqJsyfEewvtptDnhYUeWVU8RxYrhA8tQMYNLYRip1yi9RG",
  "key46": "2BB2X68XqLoEypLkYnKG3fZZybMFGJ2hwhMaDdWEpXZFHVdfVS1DRBhanxHtftzPvU2sQa513emY25jkiqS9c7xx",
  "key47": "2YHd2ifss3LQ2wK2e4Buhjwe2JnoXUHaaoHdcjPRUG63gaR76hLUfoprQE9Hm19FWXKq4YpaNQ8PQiUU2zaCsmAb",
  "key48": "38vyrhe9RdbrRv6ntsPEeDHwwFHYjuutuZRZLNQtQfhdqCUiCA11DLVCMdeQcuQPtPV3VTQc2tnS2RchsyMpufb5"
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
