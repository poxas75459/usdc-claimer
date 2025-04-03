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
    "5ZLGqCJMoKYJZe2fvDJvFufER23wXRU5TKa4xQPoxekqV48rsRCSHzTt6D73x8es6meUbvt4qb4zjbEhaPkyvLEY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n32KmRE8wLsHzSVqjt9D4TSSKYfn8Kjto3YPDtvfN4Tqcuwmz63DU1CQG4KHh2yhSx2kYSVAyYm1Jx41deahZ2f",
  "key1": "b6shNxStGwoJfAgDNKyDajScdkHKszPxA5ejHvcnTTCTuftqek9FjAAc8wtUzuPTPaH8z1P63nntDvGyMi6wcmV",
  "key2": "drQz44mywoZZ2AG1Ym4CWbruyzHvo5CYxzmh9mxyvirmLx3is9p1Xzda1rp4d9EuEMumFRSeyra5yBamZbCDGye",
  "key3": "43dyPGg71TLmtxDe9yyWjLhXSzeP5b1irsvM77ZMktAusPcpe8Ko4KSPb7sSg2dN5ayXKXhrmQgG5byqPshzSPJC",
  "key4": "2tYbcabHft3oPeaBH3D3PsoUrwvSkskfSjnuxKz2eNnnh9UjJKa4Da977Tvi6Rdt6PBLxgU6HPh6xVPqTsEpnEUq",
  "key5": "66j4yDT6qvrxcoaySd4FBCmc3mokZ67WMExLofMPtG2sYsmUtGzA6ffSAMH9uYGVNDztpGaApk3Kzosd4CAtBjrj",
  "key6": "5avgiJjtHNkziER961BHXMb61Fr1HnbLhZjVM81Xu2DJwitftWotykLWtKZibpCjyC6iw5T537mSW6rizq3uyt3x",
  "key7": "bhK1qvKapRuc2GmWX4f93bUwA5wH7wVmPJQJWJMMSp9KQXWXBxK6v9z3SFdfXPUb32r9XG1nzZX2tPHu4STnj5C",
  "key8": "MxrJ6oTwhWxbqseBZQgdceRE6s8MTt56VRSLu7Mwn6teucsxK1hEFCtSALaKqSqdGxkFiXN2Nujub3jvv71dtNx",
  "key9": "2gg8DJYA1F5rbWRonXtbRviVVKHBSdhmhu1xGTEb7v2gBRnv3nPLauzxG2aNPhZXJuRa1vGbGHtttqFRjs2CdDhP",
  "key10": "NqCMjGhrS7qT65VUq87mKCfgF3y7LP1a9VueWvhLSKuHGqNmWFNEtctfkNyVkoeKzc3mqzgmGdxBnsJm2mHfwsK",
  "key11": "F6jM92uUeNQrQau1qCsQhzjg5G1XLzAjnggAXKtnN4MkzjomyfmqeeSoMLQthuHX69Vjk2NYJY8xtev9XUFDRrS",
  "key12": "EVAwvUtiR6Tm5Hg7fNRpfhze86icaZt1ujgdedWb7ZVLfWB61SogQKUPZ1jXTvytNZVmm2Fa3cszJ6Ma7ZwS2xh",
  "key13": "3Xw4rh3piZGikDZLNAqpmBxqpdnGq3GyNCKDdNQWM2FB7YmfEgQCqU74CeDAhni37fcb2GjzcWGgYKXfmRQwWJW3",
  "key14": "2KNqYoghjzScTsuKrA3RRkG9dJDYbkT1YpXZAAgsQ5DSMsqen5YUaNMuA5zw9Dy746UgibeH2cwfduEZjeu21Tog",
  "key15": "2QgQhVT1MGPa1rPTi5NhHv1RUiDde5YtC4tcNiCr5yfVHa8WnZehnPDAybKLEAJLWq6LRs9qaDrUZdA2ZyKyb51g",
  "key16": "629BqndnvAfmfTweSqDfV5gySyuNJNyo5ADgVAwp515BCru868DEEiU9ezNqbmqheoF328JPBczcvwWDE9pXper9",
  "key17": "5uHQDKFunuHY4hfB1R42yBzej4dRyYc64znPSWAadKkW8qo6X8peRk79civ6tuCS2FKNsBX57xgkyp2wWWZLRKfF",
  "key18": "rusNb3HStyEbJAt2kcwh32fgiSu8dcJ4CaeWzGD34rontB9jjxFqAGrocBdsGxErRcJMx47icvS97nNwmRoG1c9",
  "key19": "222LKwWwyFvwTduhXKBcr9T2SoZN5W5mkFrRq3cPX7BbFDYRjjkC4N4p71uTDcgZ6ewjvXAmHPDBPX24VzZAYaP4",
  "key20": "Rv1Lf1sNKd42Ucxh1zUwunpS5xNhF9BsWLemDY8EoapgNDVtxvQXPF4nTxTQX8yaXdJMSb4PD3bsi1FUB9tF6ZG",
  "key21": "4YNmmbYWGMJvSNSn5uU1EQqdMGWpaLRTdhjfeFUbchionGMTjUuAL79Jhs8jtmdEtWsoGQCVnTHspBb4jqtiRN5",
  "key22": "4vv5WQsJJMJK8jwhr89nC8iyHp411EsGyoY6etFbujRq67Nww5BZWAYecTQCiVoesywToScKhG75p4RMyhD1ebpo",
  "key23": "4sto5bGhAcJF4H8N9Zi1hEomSM3L4r1zRcHYyo3iXwYDUbA1BpCYi16kvGmnKHWmMS7JDUrGmr6rtEQ5v3qN39pg",
  "key24": "5EnSj7sNw9r9y8pyys645URg8B4RSEaLomt84EaFBQVjT12Dgdt9KHPXXjYpQRgoXeKSgacHXLtn27oBkPT7egq7",
  "key25": "5eAbDX1Jy7qZBzMy2VTTuGw4vAJUyNLz1FKWqoCQwMttzXdnkL1SbJgCHSxNauXF7rxNy3tKPcKGemGBX3c8inxd",
  "key26": "2skD4mcyVSRHiv9B5eQtZw1bHCa8uNhoAKPjWHmnvg9U7hAsy5KQMFiidwiPSxfModFzmfE3fNNYGG34Mmcu5LDg",
  "key27": "37mvjWRdpuC6zCo2KugM2w2YBoqAn5MESsCCDJQXz4yDv4Jsr2uAfnna4jh12fnqjqdx6R4rJtdrW4oGqiHSCZWu",
  "key28": "3E1rDi2rGvYU2Qv7XZM7VNn2yLpbSfNw3g5k4xKvJ4Uf3fFwktJ4hdcMvzDUJigueqyryrbvtDhTMWtctvTFJLTK",
  "key29": "4Tc9pS3H6Vg6S4DpaeEbA4G5JmBzAcX1cihpoRZdK3EHDUBfMF6D33x8rebQtXE7MktV2wTZt9xnqhaRF114cCSF"
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
