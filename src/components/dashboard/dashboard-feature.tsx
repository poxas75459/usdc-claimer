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
    "5qEC5yiSLhy6GqJ6UfV9K7BCdwyqYyqYmKYQhEGvgthttLPHxxDAY1kYMtzZnDfsGCXJ4o8Mwg1X3mTbTXA8eaiT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3inXdHozXmRRJog2eJnEzQtpzDAtUh1PExeupXqCuv616dSs6sotN5mCeVj8zLSf9RDsiX2TSf5rvy7iFiDestRK",
  "key1": "3eiPHnZEXRGSdiZ3zc4WRL41PVaVDYJFyg3TCRqHvXAq9rbWcLJCtqCCguCvSchgCqkkjMfTA6qmmzRzqf2aMZnR",
  "key2": "ufznv9sWJqt61GNGCmzSPprAEEV2cydHGCJ5bYJu7gnoV7k5i7Tub5KBuRVYAaUVtQVu6fVXLSdQ9nFXQXFYa1n",
  "key3": "WLuE3zaebppw3xME3Ed4ftGawzmr7XzqjMNXdmgsiNbgEC3iB4ZvRxsRfzM7XddmMS8k4BxxGSq7C298zDVFvJB",
  "key4": "5pwFxXq7xuH6if3TURafXyUJjC8hhSaUHCuNQfm1G4t2tjmu8NpnqSvWC2snTKqtdE1iRtw65mhawnyuCQ9gTvj4",
  "key5": "2Z4Kr1JieHDceSBYDxnBoh54oWkg9k5seKesvQTMVeJAE697iwGtT1PcfoekbvMCEVTzgCXPXAe1xU3fAWTmz5gB",
  "key6": "3BaUuiZaN3EkqBni5Z2N7QawW4t6oJn2kwvN2qTEqPx3zfisXq3sUqJp2KSJhfrRv2p4ZF9K6RWeWknD2Fr5JRf4",
  "key7": "4x7rwDWhCQcwwRWG4A6v3io4CiAKvX1eqtLEXQzZDV4Y1zqMEAm7AjcrZxPtgRSxUiVc3mqsZW6AqbSjsaznKLaP",
  "key8": "5EMPvjTMbFwwwDGqKynG3CmaRAE2WdZK8NNQCNuj6pA6iSJpS8tDEiSM8BP36Gex5D4onbsqt2c9iKwLJhgnXkZh",
  "key9": "2uRS6xCzTEVrUEFKeybeUfGHmWZ6PR7cq8PqHpfZBxjqYqyVgCc9jahFfQcka7KNjayunUvbbeNE58yppxiGzZos",
  "key10": "3CoX3jFN1QGgcUn7jDNB7vz82JzMa4aBgrPR6GqbFoHikKqx1Uvbkch4cPUYRSZwVSJ2YCs5Hjg3KUuVyVGQ4nBw",
  "key11": "pPtrdg2YNYte28wiiJxsAkRxbcgjss5LYBMDVgys7GEbaHru8xBNCCmkXQHjfj8LztWFCaBDH54RWF26S3uVhFx",
  "key12": "47kovUSoep4Uf5FV4Cp2oP6oPerdaiVNxDM3qAaSrC1uBx2uLVnpApXLfNebCQTWEyBZM83CcR9dbgNph7koemGF",
  "key13": "4rTcsZpD14xosjJrRjaG4KSBZsc4NK9jeM6Vj1bmwGyCdxoQPm6yAmDp5zbq9GrJY6cN7A7FgdD4ziscWoNh3QK8",
  "key14": "2VhEQdrmHZeL5BAnKwiCM4J3dcy99yZDQW6HHa7H3ghD9EJCskVHu44TUUXB899QvxAdW19SNo3cSrUTBDhHBpHU",
  "key15": "3eaTREHuHT4YpkP2YAwNGJpz5LjxpeAuQJShz2Z98TqwVvgQtUGU1eQH722iyDxt3myxTwa68wJjnAjsR9GuJMo3",
  "key16": "5DazRLWc9854RftiWCaxpPm2wRAtx2qwgMHgwhwq7xJWp4B6LQBNcRfnPgM18qDajuWx91vxruNcCbRYRu797AVq",
  "key17": "3yA3XU69zeQn667MwonEKRQprHN2qVfY3ezqY448WFkksfCqxNU58whprw3X2FkCmHvASKNmTWB9Pf82mkA3xSZZ",
  "key18": "5nmjguafTvVC4jJXaDYedwKtcWCV98WSbA7xVuf3MibEFSVbJW8tSZDm3bh2WoWvwbwzoKRFMqamCKsuGRWG2X7",
  "key19": "2eWkThw27w7ToqLqKCK5WtiW6ms7RrzP9UtEEbb9G78i5Uf8JZfikAaWyL8CNjzt5kR1BMmKTc4DYJEtRhYKD8cr",
  "key20": "2K5v8hdGUs5bMULmaNLTyRpU98N93g87BjTxcNNvPFtVPngACAD1oHxboc726SnmmVTjaT4NDVLpYAj7agemwbXm",
  "key21": "21Mck4DcT55KCuMpamyYxeWTPWUR9V2nwn1QxNc6ohuALpbEjm87ndFzNZANp6JYbbmbyZtiD93t8snJBJ9NjGPv",
  "key22": "3xpKyQDF4oVCnn87AtGnc2XxXWym8mqqEcyXbFxjiyGKMCK6fjp6KCqNqdWAG6sYiMyc2SCbLBY52tbfu6A2Zt4G",
  "key23": "5WW573qQo39xc582uWMJUXDKzcdCPhwq4RcY3GzAcXaoMpuXyAznzuLFnheD39nnGGZv4HMjTz9CUdmLYqfL7rLd",
  "key24": "4XUzNyLiEZX3R39aZjzoRJ67PbGBQsKXaStgzyXQdYTGc32FWxnXMGL5yAv1f2i2XBenLDN72drNeb6kUHHnAAVu",
  "key25": "2L5o6obBezKsEmV6s1xyFJ5tQCCwbh3Vm1u4iuTHCaByMLpMjvSyfJrHSo1f9hJcAyW3Skuojw8RtACuSG3BxZcD",
  "key26": "4umTtFi7ZADCQNk7QfWZLAJFzFZssXqtgsqjcfbyyE2E9fqAdMpuaFU4t2Jio9psAuQmWwDvSCqWrx3tac1EhbU5",
  "key27": "Z2ro45WRPdeDunmfPdjuPhRev3Q7hqtzGrWCYuNfiqcF7TXzHLGqYWQLUFVEjqYSbMKtwTPFX3g3Jq9DVWRHJfb",
  "key28": "gkE2QUPTpqgFbzSVQiTywtPuCtcgro1ticG3z2bNQ4FcwrTGFbmVdoHkW8Lc51JKLK4EFWUrPCN7sPw4qT5GTxb",
  "key29": "2PkdbWmwv3hwVNk9iLXJ64N11euVR8mnct8DBZuA7csFBEaRyWXmvhn5d5Z4ZbZkzjo6nTLQT4QS9oVafaLfN8n3",
  "key30": "4CeJfjnZLBjriBZdjz6DuaACAvVqsHaR49AktmeQ1xfSyv1tAhpHxEC242rUH81moW43M45XzBiDc4egmz7MTJm5",
  "key31": "66JNAZXkoAji75ZHSKAaBsx8CpsrDQYQfsvVYVgeFCXopfuPocXJ2fMnKCUBgUNMC8uUoSh77fQEmdF3LhdXhzjb",
  "key32": "3RXuxy96ZDvZSSx7e6f3UWbyRPk5nvUpjuu43bekb2gnJM8C8n8hyiwtRcdbqNrqf1pTnWUY8nqNZjz8apaqcNZM",
  "key33": "3MLjDyRRUstVVXGUJGdQ5RamCZz5F58SibajTQEoBmhM2bGLxPBFiE1CrdkqevV8TATFFbRiSRht43zzbbrMgYXk",
  "key34": "SoQsrxfEMxfrLAzGG6wX7YAGBCdCqmCYqzDrEdVqnF8SxmGhouhTfZYtvRZFocUF8HpbGVWXUuwDorBq66y4RCB",
  "key35": "dUXhk3NgePbwZzLYsDHe9dvDZW71emFv4bxDNQgRf7hiFEu3jQpWKBoNeJMmVgwkagHst24qb7MfU2hMrcHEkL4",
  "key36": "64et3SezvNQ2yQn7jS8Vj1hqqAUF3qbF2jTucR1d1M7axNjrToTFznaDParFQ5BeAYiRMrRiFNjghp3VoaNY83a",
  "key37": "4gx1GoHJKSkXeeiw56Yut4Td8Xm2gnuEnyDKESiu8ab7MVVASXV7TPG5FA8zLJknnwz8pUDiMD4SjmBRexYk6Gis",
  "key38": "Ei6YuPYpQDJn8W7ATV1TKWRyh5wV7VUCMBytGRwqqbc1M1a742Jhg4YDQebUcUAMANvsrdKNXJ85XH6q7VJZ8Q1",
  "key39": "4o5BWtC3NZqNjuqQs84JdxjXHnxtJcBurGm1BAfzsGNVTrSdqs7WiEnbGasPhsvkLMpLc7jfvnWhZSzR19vn8njn",
  "key40": "mMpsb2q8XszDtBRizwggVkp2VryrrzrzY2dZUkv4GtqjAU15bpCeADHmRj2GWt4Bi4kBAdM5ozxx2EZAVUmH826",
  "key41": "4x6YH7izs8PjLjLjjLx1pSPuaBWT1rRfq2UWcb1hRVnBHRWxNUowjrNjiL3683TScKoGeuWQ8S472Th8Z73STjSf"
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
