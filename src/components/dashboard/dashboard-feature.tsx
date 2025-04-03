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
    "4QHi2kZghzQjfzaAHotPpGCEPGT8FXuYBPD2YeTs44CLUVTiCbAn68kt7STbVJ3vGXLtrJn8YKeFKmqYjtPCVD1q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hkAEy54CWCgTxmJqDTZ9UijY2csnZNgwoQpzPW7sUS2LNf1YAqkNEzptbt3hLjzz4RS6BpXBXdymtcqCY8KPj6y",
  "key1": "2paxg3j4PswyHBg1p1u1ucMhhFVHMLXYyAJ4qmbDMquvF27jff9N9QFqg9LXhqMocgfVJ3hEdXzyxgPeM5zMbk6N",
  "key2": "5wWEzCxE6B7ym8NkhFVEqXMrkXh7VwMBYHyEfMkFBL8DmtndUQeRf93azzYMt6qaLYg1EYUPzm9qnLmGUJghbv4q",
  "key3": "3ERrh1HtMremJrDjyMSpqLC5WM2pE5Qah6LBYQJQk7JzfiuWeXY9QYJyxpoHjR5yvEyqiYW6FtnBuSTDtJr5H926",
  "key4": "5U743YM8jMnxD5RepCiCu6hNP2U4nuwXdFA6thxdFgCDgJSP7nVB4ppArRkWT8FG9YuQn2ipnH1GZhynQZbUHvdm",
  "key5": "5ARMu8XJx5sdowmFEGuB1kCb8F8XYSHqvpVYkW4QG8Ker9q84gz2eTZjuhnzncLz9aXFViKw2jsqvKYkyVofFLi2",
  "key6": "3JT4iH7qFHnpcueTZrNEuukQkxuJHUoatoZMmXqkYC2Ck7rk7FPCMfrpWUR84eqRiHqP13U15FSui7QPUKP7znkH",
  "key7": "5vsNsMM2TsSMQN96fTaCfGfcmojJavfpaUiny115YtETAZqak7TCEy3w9N8NSwYxDaBBRdMN8X7QFTr17T3SJKBM",
  "key8": "2TyPu5v2ydLGeB7VRXoHL99eZqGrY7v5ygmdqyLHaEMQtR9nfLcKQjDzs8zh4qSZMkhRtcUrggCZ5h98kE6dTmWZ",
  "key9": "3dqHvF7NkLKCnLKWEXGLmgLCrT9vkUv9CBEiDQeH9Gch1zVPv5AkUJHWGzhZBL7J8WahgmCuBrBxwVwxi4sfyoU5",
  "key10": "4vbqy2feuxxqyCz4Tva5aRDqf3vhWcYoRXJSu1qUepgmDSxSkw78UMYqpdYitbfb6qV2CwiRm7PhNxiY3xqcpnFX",
  "key11": "5URUGfcwvUk52rVpkrZCjUcbyVpi2yCLGBbrngu6mLu1m5yo1R1zZ9FBcxtCSwHUqB19aPHABFe84GPq3JiVY1G7",
  "key12": "3PTFu6cVUvSfMMPqNACP8vMRoKBdfi7Za1bQ7RtekUMATcBfLXt6AowTVUdZiUpmK1gcviJtp8DMWUfKDdG4iC7u",
  "key13": "3aLmqCcd3VAaNCmWzQJwSC5nULLanEwtUhvBQaEwdhfJopA7Ko6CUgTS6YhxpjdDogjVLoTXpFkJs8gcyp2Wo2wh",
  "key14": "3Skkbx3Y4swuV4C4fppZSknut6TDvEEnZ4K1GnVVaWyesDQuamtYz2R5sQPXeFGVXmTmoB9LQ9c5w36v8BoEhSY2",
  "key15": "CL2G3YbnZEaLtUwiXyw4mDiFzxpELFQWtNRTBqWXcX37USpV9pWayvmfHG5UtgNUAte7Nre43wxGwvc9ATK77P9",
  "key16": "2Qp8fE7czcj3mBBbB3aVYFZd6wKwPkDwXhABpmawttTnnxPke1CNmb4fLKMRQ4iCwMkEVuCzzBpGT95NgEgVRAMQ",
  "key17": "4zxfQaKyigTuq6pdgboBUPH9J1VW8DraKGJvN4uTBazQFc2eT9v7hvzfeW7pQiDjtN8BStMjWfosXrai6m5bBNPD",
  "key18": "5jwjj7F2HMQpSGmtEHqWWLyFbQdJD6iG7BUdy6ft3PN23q1Qc8dHBU5w9rEGimarPpbcMbrzVQV1WDuai3twK97z",
  "key19": "2NkB5i6tQcDhjaZzBx2xi3V2csJ4Lo6kKprdocLbCcA1weLvYVpUBcxeXiPsTf598BPhNCQwCCvUGoJLgpXfwPJ7",
  "key20": "5JWTKqgs5AUZn38KiB2kCzJfiyrsCt6DLMUTt2iyDnsViZYoLKjaSz3sGiH1KnnNkqepbu4VwcMEH5avkRdZxZyt",
  "key21": "2ViLpACwmPzgjwQYfqo6YJtEtGY6BYebV2Wg49YCC7hFGkuCLYSstwCLg3FNYVsYi5wjDQbrZ41FE7K5v6mmkDyG",
  "key22": "3UtomoEQmjynLJDVqFKS9YLHaBAP9oGguBSX8dTdpg9YcmJyQ7ELUyUcr6U2NU7dtLfbHnrGRVNTujrAdnm21UnC",
  "key23": "3hbBKpRT2Rc64nsShKxpe3XyW65cmVKEv49DEbyXNc1wjcqGde59rX1GaLnk1pYDdtQygTLmLCfctsr9JHyb384G",
  "key24": "61ztpC31LkLKfaDbfykTsVzjMh1znbtGGqnocaLFHPzwMRBsgTHPYrXndpSbm4oph1Zkqs73sFMb63AE9hA8Makk",
  "key25": "Pri7xMF4eYYuEqi86wGZACdEvCyCBS8GdE3p1EhUCnjo3kmpt6H5SBND6s2PsjsGdK51i9Dp9cuvfSr8SPeJxtQ",
  "key26": "4QaxDn8LsyBuVqhovu7KJkAeW71ATZLubpWKqafmjenYNuRdLTxCMJVyBR5TLsPNLwcF1N43C54usgXzaQ1UBhSY",
  "key27": "Lm1hBrJfzAr8MwdRMc3hRzsbdzZfH37uesiiGYxw3Mmt4PXEeX2JmNLELzaghmaqSoAgtVsPDZ8PvJv3DDPsvwb",
  "key28": "3QfQ8WEu3tzqxNJZhwjEX7h9AgvduaBkHZK47M3zYdHVKHgQGWrwndcWD9T9ZHXgH6afBLjLYk2Z8tes84qJeAo",
  "key29": "3KnepUsdqqpQhn544o3rcRsqqTufwbX8Y5grmoZuPdf7DPoHbcxptG9QQdpTeDyatvbH8HEqZgs1Br5KqFzJLNdV",
  "key30": "4PiLoyb2bGBiAMEgt7r8B6Yjm9aj7vJziiTRKhtvgamdgb73F6mUZC3hMmf4wWJmjgHTpmujZkcEkz3Hs6G5Swsb",
  "key31": "jMWitovAxFLQpG19eCSHieXDS4qX8NNFrar35ojf4UYCfjJCMGox6P3qc2m2jk2unco9dSQcGxcaU9e9J2VUK2z",
  "key32": "45Tpeqcq92cfdz1r1bXwjbe7sm4o8yrUHrPvpaC5aJ82TeFjbVWjqdaNkEFqDaawktPCaUUCwEBTbRfczyz3DEJz",
  "key33": "4fGgmJ8w2NZaAM2cj6mRra2B8s39fsXrmENLz3kYoG1iH5e6QvDRiBsUozFaeKpA1BUpEBosagks2b2Kf9aTc2zS",
  "key34": "YMQt5ETBVZnNJNRNzy1JzF7sjFRc1HYRenBXCrYhkRRXBwR4ou5vibYTKBbHBq12KBj2HmSYCjhhRzx272wrLZX",
  "key35": "XJsiHTmrTXz5MiEspvnXGYAUCREvsxvGxuFic85Lx54iJ32EhdeRcCT3ukLQSmqeKJ9A1W2jYdPWBZYR1dVvDk9",
  "key36": "3pdWaT6oyoHVgUEAdtjN5DvnAzWSRjotCLh2w3645ZPWHbHv5aNwj1FJaX21VymgYffgAszhSCZFhWbWbm2gsvKS",
  "key37": "47iXKGpdq1tTNoXKcWQY8L5bTVADDMNEJkBsKtGBkvdnm2VTEHPPQeykf6uvg7qvKRfuCnddKTRuzayzaS5YmZmj",
  "key38": "5L19pki4hF2Y4fEgttpMfNnjeTg3GkKtV4G2Dm62Hv85snrkDMm6iLCKhuWRJAD5S9XJNB8S9pUbKq8RWVht2R6N",
  "key39": "8jArmfX3m8KPNSBQp3r35HhEraNfHc9JaoAzs8DcvDAyGP2rNMAvMjuuweTgWNv79Fj2h1MJ1Qmrk8WEomPeK45",
  "key40": "48LfHFVCfatVBNsiffmVVeA6T72GPFpCgP5LNWQuNbvbqQ7TaTAZbwpCTud8V1bKiGS1ZQsNGZF6P2CZRzTGrdWM",
  "key41": "BhrMKhfspGnxDjEEjQS3injAnuBe8Bs5wNzVbZK9dzQxLt8avW7TH4DDQNAuHwQFQU68QJVbps6t9hiLDWumxDi",
  "key42": "4uPjt8HkzcCG3kJA9DZiWX5tTCE2Z5sHZHYbbJuxQhAbG8VrveDxYpMrYRtf49HzyQXy46m2wkCuSuAzXoR5pd4L",
  "key43": "2LKf9tjYbGCXtQASKqiELtzsqExbkqwDJX3jLwd9sQD5dKkhNuNxhacvE6jjYDSrnugRY9SQyWT1PN1WfWahyvck",
  "key44": "5Ae3LV4mmZAYqf4wqFbYDgohp9pCBK9KVDdU6xrjf31jcrnpYiQrXoz9z42cGDVzpiexaFjJNBQsGt8a6AFxiyAr",
  "key45": "6TFucjrs33tfsC2tx4MFQfHjbTEZiy9e1cpbALgvQGJr5PHQ5yTZ2QkLcav9MDQvZMKJDJ9phnxBwdJzXpYJQ4p",
  "key46": "3VSYU9PacpwqtyBTS6tW6UL4N8GRh53sBVA5sugfR1aVXSDZrNqUhWHSaBbZrFG7ChdgoEYZ9QJxTYNDn5ipXY6d"
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
