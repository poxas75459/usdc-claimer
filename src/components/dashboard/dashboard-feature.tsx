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
    "47u8RwSkU6CPN391GrPDxNoqSeBcdPq1k89GPmiM4jQc5L9a4pd8Lh1qbFNkauJGKm7epG5GxgkbLHBHwJ4L58Zb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NxtxprpesJJdFzeQZNRwyzZumnoArURRhFwfEq7yPKKVeeLoBYYAxEBfnsDHnPq26oyJSWQAXRhFrunpnbHpMk6",
  "key1": "3KF9PiiHmwPMJ6tpCNYpuCzgry3Q6wmLKJqHUd9s74fLr5K1Twht25wPwZBLRTsEB84d1dm1vm7v6XGTBvGQZGLf",
  "key2": "4cRTYZ7AYyQYsVgD1DLsv3Yr8y9KQie3d277fDf16qQfJcZUw527wPNUd6scD5cr7voD325CJSQdKuvZFEDqraP3",
  "key3": "pvojciZitVwkC2gXTQHooKbM4Wkkc4FsyVVK2PSAB3kHUAhX9mVBxTFiDdzZUJzQYnwxcUm33A1WV3wYUUGPcky",
  "key4": "49e883KhpwFBupTGrWeNKB8HFFXUqgnuhhgh3A31WWnpxdKo4F6LhQ5nHZZV7wpWwBB6eVoCXzqAz4rb5qimtfHS",
  "key5": "5SD1MiREaBnv6GErwWqxzPTarUk1B8ZnpginUeujVyvtpTn817vZ5xLcepr14dxeni1wVsyPa1XRypt9QsFVs1HY",
  "key6": "2z1gZ47ud536tAbSRyR6NXLAUsDaf3QsE7gzgJ2inmxKKvnGWoc9f1B5nbEs9nbBn5XRG8V3XgTSwi7LgijMirpc",
  "key7": "3FJ5sYppCVkuCJKDKmad4kDu6XFSeDms7VFxAJUpCbtsNuoX15sxReKsXy2w8h6CFwmKMwCUFJ1awg2UqcxxmnrF",
  "key8": "4qbjpipbaNMZJNwRRStZdBobtBCyq7Pws8LQSDftqCq7N62vpni3MKCaTGyxJm1pPM6K5nyUScDvvgxQMj87d5Cg",
  "key9": "4Kvx3yAsQ4KZKkySP4QbNw2Bs7P5cauLgNYQtmUki6wstnNwNkmtkwJWbvAmmCcA31vLygft21jomqZ3H7Nw7tzJ",
  "key10": "5nQ5awaNiBwQrooquqe67MDdJGXKggze2MPc3Xa1TLVh5AumY9zg65VtCfWzEm3HLE6vH1N1E3ezazvqvnEdZS1n",
  "key11": "2EwbfXdaYxyJFZgsvNvJCH2qm47pwkmDQfKQ4FaNVvRUbDF8TxhrEpgVP6r6x5EfBDwkjiT6yqnQ5TJXtqFRppf6",
  "key12": "4TAbMdra89zxDC9Luny2ZpcEfJozawcPK4g3fQBLVPdXXNsguYWBiShcapSrnbEbanpxyN6YRQeEx671KERfQnNH",
  "key13": "5tfWh3zQK32QFagS9g8GUKEzh9qWmXaZiWNPq6Ep3bUB2gXQpSscXsY31qFqTnJoJHkHBveX1GTvjEehbkEQhMr6",
  "key14": "3y1pfyg2XxprJTokBrmkSgcwKK3zb4ZoASp1iGiKeN9JZ48Ez7HeBEUfyNwJ4yCUM4HcseuuLm7CVrNdA4fE8pYr",
  "key15": "3KRPZZXuKPoz81jBHQdzDUHPQYsdmQjE9RpeAyvbZ35Ek1NNvvksk2UqS2qF9FeomSaTeMmfnRSeff5UpRa28kpS",
  "key16": "5HMnoDqSChA847pL7qJaqPyHbZpkVKGcJtsoqsgvcdwXk9NApR1wSDyrziX7tYeA6ofvvjsN1vAb5F27T38KJ2Av",
  "key17": "2DSAVs8NkRhynhkdGSLHPTWMMgLp8EmbdRV9o3Ru7geH9NbiW4RnQQkN4e1kKgExf95tmSNV8EXcLYFeVNAHYVSD",
  "key18": "DUHhtpu6Qqw3MPoznr7M9sHcFjd37NDqtfapdkg8vNUksYSUitUZM5rkZ71r9z8hBjcLDKXSsxTGYuUzGAMHgGg",
  "key19": "eWKj2FQE5KbNMoc4bYSRbMbCi1Bt7xAXkfCo9Qeo5eSn3mUhtyvNY8Sg1xPetc5McLa4LVyaLzy783cYCb4gcvh",
  "key20": "3NfZFJ11pL2DZfPcpNidqNvFm8LckZjHRHz9j2hXKxM3ZzfK4n5ZiCpXPXB8wdAbGM4NK4Z2HHWhqsFDy5MzAJEG",
  "key21": "2EgeHLb4URXcytHnZjy612MEEaz3LvSykQP6o94p4c6794nt75fYhYZ7rhxVYuLmzTh3jHxQDSZ6Y64fXxyDQohq",
  "key22": "3RaX7kUYw39yTAwLc1J9nEnt2H4U92pYEURiZVhbNzMZJ9mqZjTFGmfDpu4hKLPiMgNXXPvv9DzusfPsi6J47qP2",
  "key23": "Y6N7JRzDBm38bhDkHBLAqsXsWEbhbyUYcx9sTyDaKLQmMGkoqbw9evNpeuywy3x6Ft474fjqV3v5SZDwVtR4v6H",
  "key24": "3waPucEwPhqccCMZfNub42xow1CtUfwj3nNj1KfDDpsnFB79x4k4iQLPdj2rFT7n5f3ByawRNsuxJpwXB2bsDESR",
  "key25": "4HK5MCnB99RY5h3RBTphMStcQMbT4kCdx9k7dRRPbTVhZbvgLVgXizShmu83KC5Bb1aB6NAhYrgi95wTccWnADz5",
  "key26": "2Ws9vFGQLppGkvpiDWjpdwqcQwZtViGjwvJzgRUPDn4mKN1WGJy3WufRUz2P8vAJhghacWhAYa1gcgRWhGrEnrW5",
  "key27": "43hgDt9Pv4rHXQ4eTd9rLhmKHTjNepZqDUDCLob2z2yePCKiCmM558Y1u913xaqejsKyYidWaeW5hXVhCoggbBGX"
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
