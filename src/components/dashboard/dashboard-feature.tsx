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
    "2HWFL8c3AxZ1vV4gqHBpNLvTPDUmEYbA8ySbdTugJX1jhKxaz8woak4Jbq8uLfbX6YM4GGhX5o6CdMTx394UMqFn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55Ao4vW9jPw69t8S1nuXTA4RPnUoaSBfsUDHvBAR1BJDjx8dkkU2cidMDxbUkw5Ktc2x3w7BYoy57wt2Sj8crBnM",
  "key1": "25FKNSdfx42AkNPjSz5R5QBUs5Cx9JGMpaBGwRQao9HPyGjeBQxJ85gQBNsJbRgsDnoogqzVpwUMHw54rBWTBLs8",
  "key2": "5ywPe9ybbqde7P75tYJHGcWS5DKSwV4xpDtStYGd4xoxoemUqVARXJgzKE6CqMSVi1zEFvXFUAka9c5xthohH2dA",
  "key3": "5age5KSHSMDfjFjra6R62Hwq147M4VNTGQCVoX7VuyBEHGhoL9JCk2RgsdvwiKuLST4m9z5fJWNEdrHWrxiwuRfS",
  "key4": "5aJLzdA6E6MjCmRWsBfYd4psSHpsCkPDvoGkEUxWX8tzi8gAXowrfxEuYspXvkoJsgGVQ91NRKhoLE98N9fm3FVQ",
  "key5": "XSZGuxySdTJovayriUmpmgeyfqdRU77xjMVbQUQ5YcbkQStxn7ZpxSqC8sMECRNWnLNotxx7u6vStxiZRacD7KN",
  "key6": "4SnNfjKqF5QMFvDfrUmAynGHy64A9FCcZyevQpDLNyzWF8RmcpffxikRKHeVMV2hRm1wSyssGqs1XSUU61v9kcpo",
  "key7": "n5gDSV1mHiybqNLaYEek2wTqcqNHuzh126KK4MGvnTgvH4wkKw4YSfhXBQaw6TznqdxBFBNZBR2tmMW8nT4KEyP",
  "key8": "2ShQ42LAHkRZSPnNMx26w7JiqYsmgin9begzhXgBqDj62kLfZYRxrbRZxcQXZDft72ieJ3Ax7ovTHQhtT6k7VsZ6",
  "key9": "34TT4F5AXAgcsjok1jhRWZ4omftQpyieLBR5s5J8K7FfcLEjVsF6vaVgtz5YnK6f9a537wywwkX3usM8bJyQbUCu",
  "key10": "3VZ1wbfgCFcykvko468iihFfkk7dA4jfDy7pqXX7yxNJ7N5zX16ah4DSdvwXcmjVr7eLR668vPi4Lg4fNhSNQ7TG",
  "key11": "5YnGr1KPasRT8zLRftVfJya1mEL7mAMprbAq5CejwafhN47Z4i7hwvuGvy7mg2z24CYwWS8rqav3B41zoQtwUNCf",
  "key12": "57TRk7Yje227KmsqtADDQgqT6zzZDvkbEiZUmSRyNR9rWzumutab5RrYDSeBgf2qXPyQZs54csEAimt7NUPJtVyP",
  "key13": "4kiupjmUEvU5Drt6eNR1ZTE5YN89fh5Wgj1ziDGec7ZZXNEyJ65gw47ZaBg4soXsS2woRsCbD5374DTNaJyD2rhF",
  "key14": "4jfrrKUWeAukVRta8oYf98g8BYBT1jmHHFv3JPyciJDsLF6sbh1RdaPQwdNsj4yrb78r7kB1FpUYoop7U6yPwetg",
  "key15": "2CVH4RBZkWAgk45qS8yLGGobmqaTLezGLUZXp7xxzuu38zqDXh1hHDnf65dzxUdvVxMAv1vRt2ensGB7auJSsDN2",
  "key16": "4Kc3GMVcAxeZ5iiVqNREHR7ftAbwz9yhrBNuChPshgRmhBd4dkHfCpUsaB7bWfa4Fw5Sp7MmkGMmR3F64tgvKjh7",
  "key17": "5pphUX7ZGjsPRuezvRdUpZJrHpEutNvZ2FMXQ1ReHKqHuVfoVy3jwg3caVbJXU4UH6YvVrNDyD2KtU6CxTPeqgkF",
  "key18": "36ep3aeXGJEn4yTEkm35Gv79GyoPumYXG4gNorq745REPwH1SEHm33qhUeYSebjCCDBPKxs2qGMdDK9sBSowXmqz",
  "key19": "2qJQqPR62PX9gox536gUyGccq1UJA4F97MU7osdauQwzw9Qn69pGGXcpZQ4NEXmP79QSe3Lg9VMdZsrqmVYVwhqh",
  "key20": "MSB6YhbojF6SVRd9ADmAK7rm8T7arH42KFtvCHCZYGqXZrQppssxasR3fjQAvxBML4YZfnSg9PFVpMo3TLpaC3N",
  "key21": "3mDUctuZJCUCNBmd5qgJaBQRMUfBkK71a9qnCZBEiizor5dUe7JZwfC6CnT9yRLahT1JJcmUcHMH4ijUaU4rdRFp",
  "key22": "4Ayn8V3iaExjfgSDvNGx7F4biKLcTVRojFzN1Y3xqbNiNQffhn7zRRCbC5YEbo2jiNCj24qzuFCSrABrfQTjYoLT",
  "key23": "kCv52tMmBjeUH7bHjmjRmTA5s81VvDPmLphyfpigC6EvmnXCTiEDpfxD7L1tyDAv9chZ7EgZj47cDaSoaYdLZd9",
  "key24": "4SdDJGLx36iXcKhQgdMvkT4LBqVnTnYL746kphCa79V2k1XaHZH2z5WQTuifL7JSBGGQrHrAsg3KDLxrXxosQ5CC",
  "key25": "4cXsctprhnFcupXy2cUcAdRZ7u9ob3Z7xJVEYcX77fx1Vvz6qh777WPC3kHSeRzRWU6s2jZTUfPeFdFysycSVKJm",
  "key26": "3Ex6EPy7fbd8H5epTRhjZQijRekQnzBZYgYw4LJ75jt6XrDw3pUKZpMoSsN95PCF93xnE5R9hLnLakVUk4gVv3h6",
  "key27": "2qr99bwjja5KDPyy3a9ihuuNxncrSReNFJupY1EhNKzjUegdEanYCP8GeVbbKExWXxkpbQFw1w1xnVyopPXRDZKs",
  "key28": "29BPrhQSbjUTAYNazHaaexK1As9uaD7jX3uYmUpgKPgL9qTF7QdYxBN72UZ421CMyiHL5TJ1T6sp911caHZnb12o",
  "key29": "3ZLsdnJh7uArC8EMX6cFJEuNdv1PkN27iA9362BQRNwyNNVgjnT6UHtNcV8iW85PRZjLnQiKG1x1oemCzhSxdyVm",
  "key30": "23tcYMdQpzp7gFZ1Ygy25qwJJt6R3XA8FBiXkBtRyb3hggC95mtjhkEAdKkTrHCduZ8awShi9cwBUAPJM1ZTw6bo",
  "key31": "3t9jUw1WymCvy16Xq3npyX9CqS1Nv25845Gr687WTbcXMo9aT3ZQoyqxFX8KFJQrVrJ6SjN1Vg1ckpBF2p2fbson",
  "key32": "5ymYR63spEoSepvbAfhyUS42EG8YAsyK21ysVsU3cDCMfBBhMoCtH5c76ExaYcMn2SvDYgdWv3m6N5SNGheXACgr",
  "key33": "57TWV7texuD7GYJGSvX9XexfMsw1rQo5QTcB5bAZUtfjiRMX5sDDKss8uyFd1z3fkTXj68wTA7bXTCWjQQvuriLW",
  "key34": "5HTSNuFKmWeqfigkevQZNpegVSSELemK9j1FEPUw5Uwf7fGnSfGq6uq9yaPy2ipLnTdTSVssMosnXupFxxEX5qZ",
  "key35": "62BWgNSFgNbDCrny6JpPXYNKi1BnovaeUz8NR4o6wEvEtAChdAdGNQtFVKRH5cAdEgjVAYSfrA7fvNXFkM4wYeZo",
  "key36": "2bEk3t5TA8Pdq9roHz6pbQpMV2BHWST4EqerkRs65aKmyAJG54gMyyJgBBgQs1ewwm6qguBgR4gPPKCYxFa64oLo",
  "key37": "4AJi1JZxZY1T3PB2ZywzoA57ZgC4DrpXsjmHQBfStoKNPUohUVswsKWToB7CgSq2ELX9a1bUGAAwcuwt3RFyUbX3",
  "key38": "5KgqYhX2BYyQ8iYb8RoZSrQFbL2bXPrFL96UUpEt7Xq4eNKAwSNHw5GkEtX4gHDa9JdnabhMNPKC8evJbUPDvFSQ",
  "key39": "HqobLoJ2whZGi6Q3q2au8BhfJWZmGPe8vc2tSp3XFfduvM3CB2sSiRZ4TRzbg3RKysLf757SQFixYp29LZ8rXm1",
  "key40": "2egt7LtjuesBaPhqdEH8mPd2FiAmhQf5tQkjswbmojidni9CizjZNgBv3evaTaHkkDCLZBjawMS1C2WnYdXkrVEf",
  "key41": "425jUMf8Arhcz1CaFMs1AZFg5dJuCg99Njw17bFwZwn1VdcitS9JZ8Zc36EbW9d77vHGvjLaVhc9FGKnpSsBra2D",
  "key42": "aiXqL7YSd7YyUzTf9LginbTRdbVYx2B98WwAA9kZGbsLSjF8A9Udtefdb2NHw4Yzx749DLgB4oF3h9hAMnZkMpC",
  "key43": "5UPRqmynAgsjTFZDVdAmKiYHyD6nYnDjWF5GphuvfDgwQ3ZaRd3Qt9Hn38SJRsseyGYWHmgcGSCPfM8EFWCTf5Wc",
  "key44": "3WRKffW6vibT2afU1A4JZbTTXKEUcLS7rgBzgMVRSMwqkLSZuYqemu9Qyvpa4KWHc1CHBUv5nsNywBeSWgCbLrBF",
  "key45": "4ZcYViqhvDRi5FMrSbY7P44c5jXJQQ3NS8t6jzgscpkgYGric58DfcAY8L4Y45j1kxHKTdpaAdZ2j2jmez23zi14"
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
