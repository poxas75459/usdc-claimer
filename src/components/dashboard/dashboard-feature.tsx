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
    "2E4bzDwv6toFzHSFPQYafycb3WnbaAfh9uxjwMHQkAvZ5JpeSjWfJuGHHnBi8nAuaP2rd6TvuipR8hJcTVJpwsxJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44TptSorDQPsMXq8QXvQ9UoYUj3BnJAkmw8uYwPtqWA7ZJ1pF1bde9hmNDTMuxMXtX1wAFXgTtH6TMyRGyCGjNJW",
  "key1": "5xDYCPpzjGeEWLdEBfu1zkGeRYJrG7ZocAqYzVJUSoSQoinv53UsBBWWc3HToiF3fki1grbBKk33ESwvAvAEUm2Z",
  "key2": "wWxfYTh1Gp6Mhb6ajFbShSRUJV9WBZ2Nqi2Y5ktpjx645Ks4423rCErSTvjmsWzokP1MUY2e7jhe7WnhtH2LVLS",
  "key3": "2dcwMw3m3sv9imo3tqZwHPY74h8Cc6SRN9BvmkeKibbzpJk5zUNjFt2b6gRa1FufKvtUhm7PkzrdQ1Z4w3W73mxV",
  "key4": "3YupcNhUjJqp2BpDjFR7zzpXrGChp7SKUTnkZxMFDmb5Eq8CNJSUtHs77gGCSeRVN7374MHQQjts2kA6ihWc95Bo",
  "key5": "2nHBPx8JigCuzNBjw3U5f1nutcyAo5XXjBQn2JMQEeFCskiQFSoixoNYPaeH3JB4mxweqwzoDzeXVgZXPTDpXp3M",
  "key6": "4q2pJWw25Bq5TJbASvh28Q3wjLdAeqqpB5mn7kvUQQ2uSdYJZpmSEFY97EYtmo1FHSZZ51PnqA4UibeGs7EtfKJX",
  "key7": "2YhAKTMLtosg3Hr4VQqSwq621PUR5TKf9ksyZWWPkGbUzZquEKusDGRGWL9WL66EGR6aT6KtfKXHK2PUNAb3mbst",
  "key8": "2fbBW9euaeQKpssmoCwZ9bNgqeHwu7TCUNxUYQr51sbb4uDq2MJ2ve9BSmPwTgY5JDHwQPfdMjszm78n1JqxrEDx",
  "key9": "4cKQTuYPznp85G9CzBLTTsDeC3RwhE6QoMGG5E8oVhKKcQTMwMybgHBP2Q5GSZrDNtK4FfPuPiT9TnuX4HDfDVay",
  "key10": "2rBcg617wtvLwFaVAkgDiK9TkwJT2TaoRqEqnaXN7w4xArjQYwzwERZBQW8Zsh7ozMQToc7amZXz89PZptJ1j1y4",
  "key11": "2MEb2392ZcKE4Hrjo8oPRwe6BEignmFBQ8WpDfCmf95AeYJFWkXkHQoBD8phVn1th7zYpfbNFmURyBo3RNq9D1dN",
  "key12": "61JG1pfEvQX2p33rPMKEr3NECr2tqGnvznCoAmwUKN3vdcVTqovzHLu1UCEJ7mLEQTCiaBq3gibw8ycGwaftec5u",
  "key13": "4LR2QPCYVLeSKJgzgqR1pFXH51rJrypDEnd2ZURwZSWQDTP2S3XyhB2CdPbAV7SaVfmCJJ7KZDCLQaAShgyxjokT",
  "key14": "51CxptGzr6tnw7TUpQXDwPgRRhn3QZ7Ui82GcWbgYb7SNNASF9NoxPDbhLqG3d3sHCPxMTGKpwo94fzoGE5WK7YJ",
  "key15": "35iCpZBGLjPsPAzCFe1je64T7HVnqqijMkvLES6p4szPd3E5kXPw1YVY3XjSTEaEmqYyQrQaWZRnb3UKWgJ3Y6ek",
  "key16": "7fdVMgMMvGtsWnHVwcdq2dM9Cnf93Wsih6qHx3D5mp48qpyMbSyd3YXtbAk4YeEfp6KRFPsXqoVtGccxbTDXSoo",
  "key17": "4LBgw1qDjxyKHh2CpFuShYCW2MNvEpSeJXyG7wPuUxjHhS7a4w9pmczhQuugDMAhEKBLq6diFruSTRacRBRYMYXr",
  "key18": "4CLBJJjepBEGU3uQ8tVUaDb9BdZ8uMXnKvCf4q7ps1AqwnRpXZ4Hiqanb3EPJwh6sbgvxSnyqSBtXN5t8aaWL2Ab",
  "key19": "62ZsaRmgNhqnCEkYr9m7hU9ghh4zDVhyRGXtLK9AUNDsz643CEEuoGgtotV2vo8UrqPQWaU7mSkN3Qs25h11iH4d",
  "key20": "4KwYAJrTCTVNVdCRaiSPkUXACN84icfjHbfPmA7grgovH7h5uQtoGHJTyo5kH9iwddsa1ofdTbGWGaa9YjbDAha3",
  "key21": "3sFLjZw2Vua4dUuastjwEV2vhDCaDDvcgarA83t4etdvfov1hSEUHgedyEFk6aYdR2rGE4bbHcuWEyHgJmWq1aNX",
  "key22": "3KXyd1f1pYnBD7wyjLbtm6DstJ7eCg7Nf5YrTj6AsAQVvEdf3UDwwV4B4FrrPeTFeQNQeVoBrZ8T4BpUpcD1R2wR",
  "key23": "4iNs5kgsV2dEqrGQeJvdxtRcuUCB5yvt4Vsxt3iCUkbNyMw6ZUvCikH9Xy8WYevXkokJ9FSfP6w6QYR3qaAgD2ze",
  "key24": "5afefmu6b2KT4pz956YBEtuJa7yxoAe2kphzmGYvxBtmtCqG5J7nbCXjzgUWhaa317t3cUEZkSWe5tZHt8HjcGUM",
  "key25": "56Xp9FPvPCJJo12DTahYjYeoer8NFrTi8xS7Tck6PEwPjqK4reWyHRbGAqvqW4q79xBC63xxA3eC6broRphHWM9Y",
  "key26": "3H6rXwdhBuov35pmk8DSiekoUBF2RYwbVU1SfAYuF6TKnThGVWKDRPKwfgqH1beK6CPrG5vdQ8u2r8PPqkQzk6ER",
  "key27": "ortPANnhDirwXv39s2TbrLSi2EBi9duGYKuT65hPfGmd8kPYBRekeTtmRqcRMzaYwkm5rZQvg4CgwgFZ65HHkbY",
  "key28": "6647Td6k4Lcbf3QNpEv39VEwD4pWue5VGmHAk87xM88Mgsrpmj1u5ondJPLFXPJ2qfy1xEqRkX5vQdkbVZUUJVRd",
  "key29": "qGVVHffw2d72ucmAaV4tJEzhiwMhjxct52KDaTYwcYZoFYKDDPFnf9MdfRmxVECRivvjQkaSMPArjLNLG9YKj2G",
  "key30": "VGRUrxQ39DVpXpQGrtQ1EHxhN85He1QsuaipXkgBfYEB3SHib1NagZYk6wpMQXzU2hvbhybi3DqzBuvCyLPQXNM",
  "key31": "59yXPYM342jE18paLiS3B9d6B8kqg9DooXpvjFSvjgfPnm5tjWqhrKSqFZATk3CyS144W331qAzD2S8CknucF2R8",
  "key32": "U7oRxnAdsKf9ZDt6ExZuaejDLmse8AHBQhNWfLKRLWdZShGHWUQNojUq2Ha9hsmmW159s17xL23F9hizgrUunSm",
  "key33": "j38VVsU67urCPRQe9mWnNF8YXyScCNhZfLbMEmucifQ3zN4PtTqQPemKui99YePcd6XGp2BZYnQQGtVJHiF2jb8",
  "key34": "2dAhGqpobhMURnmCz4BgyWtvqewER854gGsyzyD52AChTTU3BSdN8xhK7Mv1j88LsMnmc4jPDUdMiGhh7dBPStTQ",
  "key35": "3zLvqzt8TSqirDw6W2wgWrgaMbyfLVU2FXXPbXEQzTSeCZXfue5gKBUMzBkcrSXLii4DU8LTRAonseoG3JVo1Qkq",
  "key36": "5L4Rv2bxLnqUM1jC31KPXgQuE1qmtt6M3ZQpUpncVDuH8F8R3PHJqTqdhw298vSBL6s7cejQpWrjqy73XnaajBqu",
  "key37": "23BJN8xbFjj1fEsyACpUFnko6FbHURxS8FWWyZAg8UMUiybT1wFUoKh1NKrH4V1Y26WR4fRkKz3sEGKpv38wnJ3E",
  "key38": "UuQ2w3CcoifuMVrKfEMpZqHgL5AwQX634vU8LmaJF8ZZ2eeyC7WMxEKPbwr7RPLHA2dJ5ngMUHqRbbKVu2WY3FN",
  "key39": "5rATpepvfYdLeRM5UbxcvUQNyoaXZ8pufkV8DThEGDBpe8CcPN2EUeNLj5XXkiekaZB7TMqC2dDig9VsT48yNpo9",
  "key40": "3A1AQoMVNt8yeRZnM437DrTkAsYBrgtXx6VCDmHtE9sPfqCDYzyBvXv6SZyr6ZMifp4byHThGkvuGrGm68h659GU",
  "key41": "4G7c8DhqgBjiTTQHB5yVt7aEi2gatdTW9iCepGR6QxTrVa6FZgRfRuCkz59MmhVgAf9ZLmip7Ph8THjDM3z4UrzR",
  "key42": "QAbMWpu1mtmWNUUv45am2ybrmYbE5FgK1dnVWbMmZiim7PLWKYgpdEBGAEcHwuAHhpowXwefJFUk6Wkty87UZ2o",
  "key43": "7GqTGrjxqZUS715eT3Yek8MAu8CRA2hdsSs3Kn37PGKkdkTdAB8KToEKKnytsMgJCZpt6T45XJ8GMfW3ztz87WW",
  "key44": "3hC7QZ3WveJsbCMc6NoUGWD6Un3bQgV2ZVBm1usvUxpasNWtcgCPa5B829LB8wzBzHtyUhzjnirS9Pjj3BPffi1",
  "key45": "5tDnyrW2QDUkex2eYBTUE15JwZLuX17Voa9JgT26w99AQd3CBE6gZbcXe22QPG64MhPfekKC5eVLWXmr3zw4caqY",
  "key46": "5PU4fhHmXhp6c3iPsHkdo49Fti4Y5ykesbeoD93LBdF3CKD7YHmx1c7QAF4W3q4SEBJAhffCWRiefQDcBGM3fUTx",
  "key47": "4QmE9aSejYvuhPPGRU23vXVrLmLRzDBodkUjNFbUerfTDwNSzrfTLaCRpFRKguA6QL3v4Fm1oihHd3yCd4kdCBFm",
  "key48": "5Ha82dsaukx5f2LS9mD8AWBmdRsLwtQaN9dXaY8vMw4m2h3RZmup1xTayAZMH3eZYAnzkYWbwaSXhR18ivmw1Uzh"
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
