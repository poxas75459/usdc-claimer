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
    "49hyMsJDprGZaFonvLisNsNkSBYQ467Raw2qnVq5GP5uUS6fqazr7LR9MjVsaVghYgVKRfXu4xi3bN4yAoygXnrs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zAJxEqedBrLFgT9wB1zXppzd4aEeAefD72FLU5szimtFRD64Dn49Zp44FAfPzzunkq61r3eNBzZQVGUb7rHxqx8",
  "key1": "5BVydYNN5CxbQzjTKN41yJqdkPmnbsgaDVaRLfpzoCAcCxJcqDZ86GqJqFUshA3hyhsxuzP3jbDsrgwRrj4acXSq",
  "key2": "4U12KQrD4W6DQWF891NTq2WGSeEqmZYMZsb62YHvEDFbVArziz2BCkw1ymPYDqAqdyR5xhCBkVRm8KMFU4r5dEjm",
  "key3": "66F4fRbi8RAyb72DsgfsdzgZuxSjWyXu65Gs4td3Sir7damY3nhxyjNKYwzJfJuAHZqU233nEs6BppbFkr7CyhjT",
  "key4": "2EF3JpZmEqzJzrrF4V248z5r5du1nsvi3czQShagRKjGhEPyU8XKyk17iGLReQSvdrpdNfqvJEdHjQiUDP8Ccwjq",
  "key5": "2ciFWe4eCHPKRK11c1sZED1GsByJQa8pdKSEyVAQ1U7DuqErkZQyyv6ieqd1NpW9oMQncuGKb5446o9hEqgmBQ1G",
  "key6": "X4ALfMwxd4HaPpycDniHjHaigtZur6h5wtMAJ4WBBxAt8MU2BzKBfasXVVrbxiFNbrct2zdpoq651dvKGWSdDUn",
  "key7": "LKkX53nvTtT55eJKDUwGY8J1TL13TR2YNbZ45jzfeWSF6VpiPNfm7S4cqiMYet5NfEMmqUwGFm3GdiqskCv6cpb",
  "key8": "4DKsWZQMWRTuB5DT9d9pfax6nKKfngh6cgP1oQfRjSyBGfCwphBCv88n2uKbez1yq4cbm1bucevWzPmoRYV7gPkw",
  "key9": "4cA4wgyQ8dYGgBPGSVopRhuKTqExs8a1UNr3DZHH5czmhc5ub1esiJ5kpgPe4KL6HfWuwM51o8nbVDRTHeFcaWxo",
  "key10": "2WMkHD8oAFzyGhgdkw5sXJEmLuzLf4UBEs58cfLyJwVX4Qs3bqa25iT4AQPYTGrsLnQQMD7qxpLEvvbP7uNHFE8N",
  "key11": "2SzcpRWWuKDZpDX3LtRxfG3XuywoAcZfPLx1sa6hzwNGTaxiWhgpW77MFFTyQpWP2VEhQPjpXDL71byB8swjWfbN",
  "key12": "2mv84UhnHJmucYidVkdJd1qtTARerMoRnTfTUkHELJYmxZJMykTpXQW3iUt7Jn4f4fLGFzVo3t4tzDFgQqb5jxMz",
  "key13": "24gKxBJ6arKydDWPGAtf1C9ZMoaRyKmbPZWQakopgYvF3qXEjb78H9DFFwSNNiLgvbvd9St8RAty9ickNMLV9e7d",
  "key14": "wA8znhf1FxTemMzq5XkqY3uY8nutX3vU1n93LywXDmUYgZfcNNsoYg4b5XbszqM6UaW2kotBmZmZXEpktQBokzY",
  "key15": "2BZ5JjXmVsfgAUkq6h3kEuCGRCMruWF9MuoiAbC6QaJCXnkkxSobptreHfTbsWHBbjWc3pPfJfuUWfLcLfKRypAM",
  "key16": "2HYtg3EzQK1avZ9AAzFFn1axPd4tKuLp5yeeBSWve8xz8m49tkHT7cJGYvu8nYN6jn183U55QpCsJL5iSfC5hgFx",
  "key17": "vQfftygyyAxqnDW2oeNKErionLKVrscYYnQNGFZayR4vaMvNN2BJ7ooqpTF4nMft55rWMRgY84p5G5Rbmdpx9Z8",
  "key18": "2TfwGA15G68g3APG5k6bQiifD9sH1w8yMGVxkFdPs4t6NeMZSEmkKYnBzw9n5dPQjWM2ZX8HrJsCyMiEzoVVLt3B",
  "key19": "5U5DhibYpgDJm77koi2Mv8NVTxtgrPxK1yfFFTrm2x2AKgftHbJf589MZVBB5NpyRDWZZnr8Smi9qcuQYUEhgdMp",
  "key20": "17nFMFe62zjomZFcmU8SiH5aDyJsMXzWKkyaoG68xWUpAAQzN4XQBPD13XMDPaYfE3k3mxKSp2wCCjDH5W6HB2G",
  "key21": "k3Tuvhn8xTHCFGmc5eZrkxRrX7UzLnUUB46eJiTjzocQ2geSSNYPzcca5Bi7ioWEwBTDXabm15haDmG3kzJT1jL",
  "key22": "2mdtEU8huRCFTAazsNLCKkgskv9gNb4sWQKThfhJNc6Sm7zVqAqf4va3ypq7bXVUQMTmX6ByDAR3LtRJm681ZeJn",
  "key23": "2xFqY4rrKGayAWL5LUj3DQSmVc9Qb5CLK55Mozq1e1ZWoLBS5TQhiWRMVqwcg3grY2ojcyXKCAAbjVSgbWkMNeAf",
  "key24": "2pNgbbz8cssBwJZf5As62wQHoTtvTu1bFRfHUSBsZRQDytpTDw1VvYfE45d68Jam9hyViyaduPuAD6RfaVTEQZce",
  "key25": "26uLpe25pwgKfFPkiudLSSzSpwFnYYsniQHwSLBGEuyUbQHDG4Xtkm9PaYtNoMNbM4AC2pYke1W3bC6azyYtuKha",
  "key26": "66mYPYDoBgiqUy3Jkw1gi2ksXjX3nLHASstp3CGF5i69kRQXVEeYngaWbuup3LC93vp1kd7W917ZbDmMK1uW7Di8",
  "key27": "4f1QyaAhxzb9h595yZbvVsGrfiGnXN91KoWWaSsSwMveCiJNsN2vveF6UZGExJB8A1RazPjxiXjvFfYxhuVkha6P",
  "key28": "59cydoZTuRBdBTvixJpMgo5rmboXK5mMSJU4md5ZyvPPfKqsRWh5zuuoANqmMpt3UodKiE92t5kpRfqquKcjKoo2",
  "key29": "5yC7sccm5Y7DEu568YjvK8Lc99p44MTMP2ZeVBqywa8KC1vZ19vB6DSYhDHoGLUwGS7JhbkfSVHEpnh87o1T54Pm",
  "key30": "41kTz3jxVizeP7Eo26C7ong8USxhCYWJUXQaWVF9HCjedDsBvopmnPju165dk8rhaVjhEfgX7dppSY6fT58ZY3y5",
  "key31": "Fbt7nSXrcSnMiAtBZyzsNaEHJ4hK9aY8Mntddp8Nqz94BFyRszzDwHP1kZLCL34Gm5bgzpsB2UHEHffK46L1NoR",
  "key32": "4y6fK6Ag3g4upm9kcfAf9goEPYvPyKb1nSMUbSNorfDaVL9E2Co8vCsPexk4spWbPpmnFgWLVispr9CPWiWt8nQo"
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
