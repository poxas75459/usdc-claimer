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
    "21RPuAh767fytBpQDjrJHqQLLXDiwedciPknfrmFnTzS2ncEBNARk2LQ3fkN4HLNH6RLY9HcrKUAcbcq5CGKka1D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HNWK3aUT6v1ZkNLp19n23C2aV8uUkrtt3hh3udwA5Ehs8jMTotvyAtz7GHoznbX4gnnV4it3bgqgasNsqChipMA",
  "key1": "heWQmknXAMw6EQD6qops8h1qBEy4m2o6TJcyt7fDsNWtCFa7BkRvXeV4L4PkFDu6J4zHTQo3XMbXBeE8ExtKgKR",
  "key2": "2depLsXMQqGD4wEhqL9gLtvKy23JwcGBUMyreubomXG9bmCFx9WgCa4WRf8ijaNqsHPLiSo1zWfouVZUbiDTaYCV",
  "key3": "3MvyiPveoawbKvHtmPpdLvUZYjy8iYpGdyjrRr5EBvsjbHdZg45imcxwHS1D8ABBvH9FPpP4hGwUpL51NEx1dPxe",
  "key4": "27pdVRTJ6gv1D1ZaUanGDW11FA4SMrAAKNTKQfQkaEpPZkbyaYfoxFR31kEXQuxhKC1n2PMh57K3JbQzbKno7e8x",
  "key5": "4GMr94ndcAyAnBXWeF9AbpFKA6o1JvKu62KaTMBvk7kBfrSRyF5SnPMqhFuk9e3RJnEP2rE46ePrjm2Bf83B8QDg",
  "key6": "5db3QPZyNN19yUkesLzcecVR19puWuDe6xnzL7WscGuyKDoc2tiTZueGf4qagSZHbHGXsQC9XHQkeybd3z7KZLK2",
  "key7": "3YJwno4tYvUxumAobGBDi7XbrxDiutk15XTAQw18kVHFZSLWTr9aMvU3FcLRZathW3v6KEAkbsHTiXftptkUhEnM",
  "key8": "5mGuBiMazj9nQmY7WMLhN2wEoy2v4in13Dse4peFktvnV5TMje29zcEicyfLJwoXrQ95gVzuP8oQGR6QjnQC86CE",
  "key9": "4JuxZZ9AFDq4jPPWYcyGPDyaCLfL7EUfsgZvDbo6XE1DCkdWyoikosAkfAvKP6LPg1KTMrCkE2ehUiVpz3x63xmJ",
  "key10": "jJBKVuWhTNobsgGHQHFw7Q8Gm2m5tu8QsdKCGyNfiWfdnChb4c4wXjVsAQnvuveG58trfXaV4kDAEVV3VESZNFj",
  "key11": "8iqUX44S7ByCnHgJd9x8CvJCbz9RVBH188vb9mXFhxLfSgMjWLWeHae54Rt9oyUFxPdoEa9b8PygfmUeo7fdF2L",
  "key12": "in6UYXyqXaJjnfANsfXrxPpdSE3JB7o2n4QaWqgtiuagTeKHJUbXcj2RiYRagFyXJ4WzeG9asQ3ar7az9ajRcmL",
  "key13": "3S7Ky1e5uzE2YCSnWKwVYTxiGyyXyvieRibGFAPjy2XGBepYuToTnT5F6XzWak3sfrSws7ZhsX3s8yz6g4Drocn7",
  "key14": "kGn5S44VprAGTJQgV8wiK57XdrP2CDnuRPqGB5QiuqAHWyXyFQkxAct5zfo4VgoJ5G3je6L9BFRL9tcRoUE9CNe",
  "key15": "2xmZNAMUPNTb8RzxLNUwTEQE9svc77un6axKuqZEiwZ2biL9HzY7tt2FPggyvDrZ9AXcPHVCuF8b73xxo7eecbZU",
  "key16": "5f4jzxVbPSvdsYN14fQZ3U6pp2C89DqcP5LL8DN75hkS4QDfVYnuUtctVcS1gWFkTwBWzjtfGvxYh7cWGxGZNGCK",
  "key17": "4vnXt5DdkAneF3jtR5oK8ZogkjPH4DM4rgLCPts4prkw8wQu1xE4BzvaZcS5XiZJ86msNSjkXJ582traNUVNzcsf",
  "key18": "48dGBNBE8C3QWwCnybwdHW6Lr5Tvv5i7KA26iWEuURGDpP52sHNXMeBYEsJZJ4Sxc7UgLzWPms91ZQkGaSiixLbb",
  "key19": "3D6JcWV5NP1agUwimnbJEgye8EP4VrzwF7uWEvKspXWUBhzdcWsrgyvmQuYZkwv3pBaXZNucMsUpoSKTxW68rCYb",
  "key20": "5auq64tH7PA6AXg2rkvE2qj56jCCZSKBQVf9NUEdPUs7njW9UQDU1An95ULBMCLHcji6uyjM5wW29Jj1eR4DD4aW",
  "key21": "EyPc1uKZ3zqVbLavf5vEPxb7xRx2r49NY5kC4YYqVhCakZyLVR216V3WhWtvviBaePcjNMyV4NMyjtYkw94hmkT",
  "key22": "2AXzYZEDPUxFugMqVj5hvKiVgHFSMbXn2X1x63qU7K1gNFjR5gfAZe2BBTe4XZzcz6s2dBMP4JAjLLvAtyGGdCHF",
  "key23": "6Ee7EX9gWaneuMix6HEEUMCKACifPZuih5C65w2Xc68mv7Z3SESkNhkHoURzGrg1DtuSKGPGmmVaRDwjJNsAWZu",
  "key24": "62v4315MunEUXma7BdcqfyhvUNtP1UYnwaFBYPiEhQDkhe9PMGU6SyFveyW2jdavds2iYb6zNSTHat4sMJhwv5nR",
  "key25": "4HkhyQ3DhsSpi271U2JYAmWGSzwGu7Jpss5H2et6CvzRqJhpFDyVjVKwXrCyG9nSn6XgjDzU77W8qbpkCBY6EgYK",
  "key26": "dr1WYKTZEo9pbr8tVgXnHGgnzY3Ytv18nAVfQ8mm4KDvnaojiMLCQaXpYain8CvNcfLUtCMZuaB7t21cerRAXbX",
  "key27": "ALq8Cf6VhitMmA87KaCeXMGiV63rfGmn3A5VGNXYzGh6j49HRqo9k9inpAm8nvvTMHYDcZ457ksQPWaZvym2MTJ",
  "key28": "4GfiwLNw5SvV19VZiGu1VZWGyrd71dUDf8XaTEn7NFVvLmVdxpJRVuN9EyQuDPDJHdgk75zpGekj9SHps1C7bdUR",
  "key29": "89xXV9rPUmJPnHAAbqJv44Xz41DvotZC45D8ZvoNGFBnfTDXuv1wAyQejB5cbVwJjSkgtENCrAjTG11wJJh6kEj",
  "key30": "pRvHapbo8hGGPxtLvWpzNrqgScBLssgSHZUHSFbSVqY9q5NSDYsJrFtuU392yqzakvuMzDu9YgKAtxNxBCT2VzA",
  "key31": "3GSiJFn29SKv7EyKLBCWEdTnoy2tKk4PhEB8YR1wTLW9QhE6sojk1QZAgxrUb8aAAizzT3TadAihf8wpEkep9Qbi",
  "key32": "uN181xHf6mCuWRT4DfkwbSPhrwUkVFTNZdf1HEQVte45FAdU4Cx47XrpgDtnhV7WeS41Kb1E7vP9i9RqkHtf2fB",
  "key33": "4E9ar3GDqaZ6UkW3zL6nvajijUpMLcaWr6RXC91tszWkshh5SEZA5xjoqaPL6Jh5wQZDEjiGUAtTXLyxv42CEDQc",
  "key34": "4sma5ADCVTe7PtspLLB9pcbYD54QQ2J6aRxzsweRTpAQyjMLcpsadiggSrbfDbZoC7eiGe8QVyqAuhzG6rzkGEga",
  "key35": "22Hc6t2uW1YoFPni2csGNMfivBbnANpkco3FwyeHr1jjXFcHw9X8urVNxL9ho54JYhysgxUWr6NK6CeN3nsziBQq",
  "key36": "mW3a1aHZYM1ZPMzw9xT5fVVxAmXJGXyyTycC2Cky2Kquec4MzV9DJYBjQGL8d34NyzzeTzVY9uUgBRhpUZ4o9V6",
  "key37": "5bgQSXSFQurd1kM8GYHkVB6pEwKVRKXfPmHD5hidxEqtwtxXYg86fVWaGSxJDaMf9xLcFQuT2wuxqDzBA2kPLT9m",
  "key38": "4HbnMwgLFnnWs9ogErmY4mufiMx96n3NrSN8T1GEmdv4zgiQhvsVhG6C1Hg9aup7VPXg2MZSYuYbTeP93expybbN",
  "key39": "3mw1CkcS2gnwsJdtVY3QzC8n5PnVZhariZTriAPEf6pjE7c8c28Ah75KJxDCLGNQoCtSDzfCteera89z8qTw7nQD",
  "key40": "3sWAdpPLDCLrJdmKvh78i5LUBN3hhYm3qV13NyD1KFV6t8CZdH5S7XpXmn7PzZnKFiaVTRgGyeDHJaEw9Rh7sJfh",
  "key41": "5ioYmnKpzpu4F41JFggUoWZ92wYWGH77Bm5BSxQSnrCgdmutmjEdJWHuw1ppEfHg1uV66ZV5pTtfXYxrgtVBBsrC",
  "key42": "4HhXg1sceasVL7unVAPLMqykMJ6B9PA9SJ1nWDYjDhp51mfR7CktcvrdZeDYggvnn82WhbGYHsumSgf1r4QHKzj4",
  "key43": "5fBJg8PNMKqm4XMkPa5SgPCB6hsmPHEhUfTBEjr1JnAdBSccafvAqUvcnHBWhCQ4HjLmWyUvYuLUGWo6qmtdZ69e",
  "key44": "5AeF2wwjhcMrMjw5z3F7Y29UujSr2gubbqjrZSsNULCrik9YorTmnq4u9DZPZsdsd34ez26HfhcuWcqnHiwQeXDU"
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
