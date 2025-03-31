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
    "dvKjFdAfpNSayPpW9T5BfEwd1GSjZSoiAzsQbJgYRTnUWVit2ZRinEFfN2Fbg7DEouWY1Uwq8yqEpt2t7KtsSHU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MaRZDw5p9MrLtNRDsnKzZqv1u93K4wmCt2jju5PQ1bqbGfxs37SMv9FrXrYeF6qxcFPCLeQkh4J3yiDTa3cGsyT",
  "key1": "tJRiJJCXEL3ZKk3xJj8gpRGS7dKncaN2W6dpjQBm6TnFhpgNpS3YDhTgddxhmbFqBVWbRGKyitvuVchPhEdwiuw",
  "key2": "RvaQMxQGPP9Gk3ydCA1zw7ZkVydYcwxi3zvW54SsuYPsQ5Xp7JxBypxQYNJcxGS6aNNoTugN8ycL68DkDMue63p",
  "key3": "QmGbp3nmfN5ENuo4AEBYuy3emznVsfpd1zfpRFGXDzwXGQGvDW7fqqbqdGFdHkfMmbuRWknJ4pw7EhZcYJFaqKw",
  "key4": "3B7HC2KhjCgLGUmGnRMLACMDKUGKyBiLogs2LMFgfW177StjtLM9P7BuaCoH5yZUygZteMeSRjkRyxwbBeKCWyDv",
  "key5": "3h44cKiMXYrgL48sx5UxuFbMzCLGPCQbnEsosXrmtjwBsWVVYfuVSfHnc8ZrpxJDYjMS7xng8VyPSFgJja2tjgB2",
  "key6": "t7VCWg8QZC8M76QMDVFVCAyaSpcLUCeXivf2hciypyK1h13BYEcvQ7w4WfRTwKaQn7DNPxYgRZGdgDBH8wXNNVX",
  "key7": "3LUDhUFtK8EGHAokaToeHgLxU5WWKrjZc2SN6AUfycm2gKuebb8h6L5Mqn3SUQzjZGyGRtyv7oH5W3f9XeX5pLgk",
  "key8": "3xLet2kA2R7sUZMkvvf64hD1nMymYqEEoVcP5YURvemYsbfEk5c3sP3Rxf6cXbx8nSCKZV7dnCxU7qpg7eQTv2u6",
  "key9": "3tDW9DQpLgyJdk3X51RFFXZceREkowtVDHDz7wkQUBDM5CjVxN3h7FrEuGZ9K5etm73EqsqjZYQVFyPBHib2tw71",
  "key10": "WaeERpGuKjwCfGQLhzcMb2sZY9cbff9KPf4iypgrKzxnrwJuwTnPX8cvg5868mzv7vQtFtrbrMZ3aD6QNQoY1hb",
  "key11": "5zMLQ6xtobuuMoNcETMtqZFbvt6UxJ67RDxXkoftzAVY1BU77m6FkArzECWuT4ztvieXNRZnzfvg1cNeQ91fnBNG",
  "key12": "24oXGAJsMaBvkRP7wqUxAUoFfso85wAXi8R9v5G6irQ2tTF9Pzg8vnz8qoeQTxzaHN5J4AxqQZDqSWZji5DpfyTg",
  "key13": "2BDJiFjRYjLQQew52etTatxPtEziqaoF8Wx3k1uVxMFcCR5yy2GKJgysaVS51BYvXFTQTWLYsRMUsZNNwPSzbFHm",
  "key14": "4D6FrwWWb6zoAXFPUk7bmEbqiyAJhh5LDQbokCEfxDyPnd8nMtfccaywoxDKYUoBAAX9R8SSfCXMduQqmkpMSrc1",
  "key15": "475yPTksTQXyFJPvKBqeSUy7Kr3LaKFLcHPvd1VNqBkVHhycvsfiLczqraupuBYYp9KkmVC5c1vB5jwu8UURrNiX",
  "key16": "4g8Q6P1W3dPKaj5xfgDnDb1GNRp15ivxGhN85K1jGs8RVz8V81rHMDmKCxzQ4hKUhEY16LJjnrJJqP9CZR7mPqpS",
  "key17": "3o7c8nVWpfoevpx17K9aPxBYHEt5dQ6QLq6rtyjdDW6J84m67Z4FuUcBYN4ohiiuogp37cEDTnQtobBiSJthdFut",
  "key18": "2fYDT3sK8MGMeMGHn59VEya4bxW3iveHSwDb54X6pRuAV5Ayssj2q3QaNeckiw7havghbD3B8oW3xQaVjkTTcLHY",
  "key19": "4DNJbZdeLtYZx2HZtvVCeNogXHKf9J5iLMrAceSkg5RqC4rwwDWJxsdmC73wG96F6WqEtKvvKUQwm9KgQAST9FtQ",
  "key20": "4AU6ja4EDkxEDursohjATyv3xjVUaRRefXsZEJoLcrqrAE7vWeZHX8YLP7NPotFPivxfirn5RYcdPaQsoC4koNyX",
  "key21": "4SqENMsndZKaE617TEFbPFqK2tTrC9iN4fF4uiuH5zZBNg1pw8up2xFzh9MybUnyns8naZvrMjFihxszDk8bTtgk",
  "key22": "4F5q615ZiV2YcV8wUekVbBFfyuSHHpobTds4sCY9fUynEGTtscwUu1i1B2MEaFfRZoyDV6DBfdYPae95T6vahKV2",
  "key23": "2ozUcvgAgX4fcHrk69nFeGDxptVojABhUTigqAVNjYcfAnEsyjdXdC4sWKirUkQRtbhnk8usSVHtcxdV1QudiBR9",
  "key24": "4kFuj3qooTpQUf1TV3P1nvd1am4WCdnCibyZHN3Yb3eNx2UxWjWjuPCjgv3yfRbtMyHmPvf77fisqHpWoMDY9W85",
  "key25": "3rke4k1e8WENjrMwEM7eZA7WX3PQbCNGe3drCXBeFJkyPTAUiBt97aaSxd91AAQpaYa8UJjjjbLPTh26jzBTv6Jk",
  "key26": "cVepTz78tUjzRYBPPJJmR5j3fc3LuLJEmDyy4aAGJuGM1VHZWwbnHB3YB7ANBdFhQUxtStLgDWVkEMipL3iekva",
  "key27": "5ukEfdnNxGBHEbSkhxr6feko7HZ4R1C49U9FNhVDFVckjTQ3H9X1naQgTXbRGzgsgEJS8By9HdBzBspHNY33m6kj",
  "key28": "5DByTF7p1zmTJieeP91tdpL4JRjiuemC6iRtMxhVzzqHnBBc4JxFhVcGbFbPCYotCucvxieJVUiXwzPbuxwTXAmv",
  "key29": "2BbAfzQgH6Pg6Uy9szkdrsL4xnTvMrYCWzszCKc45pqgf5G61GVh58Myg817LQYwEc6MTQgurvMBU7A21KzsNwUd",
  "key30": "2BrY69ArxEFDkZUb14DgHaT7BJfoKwJAbDcBkDpaBhLQKq5iDDSGYhxDneVWo3Crt1EC2WAzzRhFCXZnraXoWJhG",
  "key31": "4GneC36txEg2gskCeeGS8WrwoT5SwQLbxaFZboQ23jZekXXNd2NpQuLdNzzNe4TbGqnvn9KYCb2cPPz4VXA7GSVB",
  "key32": "x5Lwg73mFsfHYrXoun2aru6Jp75J9ejKH87qSokSNfgHmyJ1Vd56ff8foQ7BbjU91ii4Ge4jHoLxytqUPRiv7RU",
  "key33": "2NdfpcvXQ6NoBR9SGXSag2bCVtdaaujfa1kKKgyGoy9i36A1GVqWAQWvbfneWxDoyvzNfTJP8hGh3WJzFy4YQeQF",
  "key34": "3sbkYmMcNMnP863YohT9P8AQLRTchEKedicGR3FqywzzwwtPH2DQUBb2sppAgr9FWKiyZPJLdJsHH2XAYYm9paPp",
  "key35": "3K4jDPCFyVi4MmQdjij42rckZTNEXr74yWLa498YkSLAPywKDoWMAD2mf8uT1BepvPALb6MvPkizQ9FXLyYkevHW",
  "key36": "5RMY3KVKnfQrXQ3kb3wjyHG7SZtZjjbW6kdR5yTXHChJTsiFGbgo1vFnCvNzhs3R8tPVpwmcBJqUG66TvixGMQty",
  "key37": "4QAfaiXHqJPqcN6RzHTZB1HEe8UnU53HtL4mNREX5cV4egic7Dgw7dFtitqaxZWqpG8r92CTELhBrWrB1B4kTEQL",
  "key38": "4rxtNr3eHK2eYBJTNEWHHkLs8UxHi1BxmvmgQuXWxoZKP9VdfJjPeoYCRJVEZMfztmnwmeLtAc4edzz8AoiRAyFY",
  "key39": "5WoRkitSeMA3qv8ofY34ekZDkRx59kQzofDFoXkShxqA8xRoSEjoGNLos7Q1g6FcjqRDvCejXiQjJBEc2sEjMxSY",
  "key40": "5eJsoBwMxdADYD78NAAWhKkifiiK6WxvcSMhFhu7vD1AQqH8ZZ2qKD2UN2G4YqgKMF4avkqERevEtJ4K11Te1Yqu"
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
