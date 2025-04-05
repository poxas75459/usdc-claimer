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
    "4qcixAPD4n7msL25622nN5fnWGA45GV1Lk6mQBc364ZejT99FMazScsAaeMbNRGmUJbh7s9SxLg1pQWeioGHLgGn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L6y9AJdc7z71CJrXADPpbSXznEqJ6MBCpXvKThg5p6epmGU9KtUJZcyR1Tv8oba7ZbMFZRpmTBLnnE2XcMN2m42",
  "key1": "41xmtLA59qCDkCknN2EPkNbhVU8ody8YjzNfvDvjMvKzNkWXEx9zmAvA4CSG6vb3v7iocqAm4msCSkp6fkZqiijD",
  "key2": "2cCmAyziRk4dYTY7iDBDjDYUviVB6i8Fh6AjyYcdLkpfatLCiQV2akmsqWAuXfpTVTABDYwbyeXP1KXWTgJUhJKT",
  "key3": "2oufKN5qVgSe5MqAzFLc6D6ovd3RkEP6zJPWJ33UYb5huXUqvGnK5y3vQPq6tWoZ85dZUhyNVcpHHKMD3FD7rrEL",
  "key4": "NishkECkd7Mbv5HANB3kJLLWQvnFzbs98h6FLxfGEvYrE4FC8syfVsPrvAinwJ4K5g61GA89MMAc9TD8GR5ANqx",
  "key5": "48FL7TJG4Cz7LQZPDsUuwt1BDhupqZrRywZfAoGAPbTwKrsGXg8ivTpYsymDsJBKqcPFa2cQ7WzzivMvHXc9tpEo",
  "key6": "exvswZ6fzLfhqDSfrNEo3GapZAiLXbZBLDo33gzqtg66Szv5fjtbYC3GoN6K3zyMWck8wwyemwr4Bda7znDQP8Q",
  "key7": "22EQCK33rCWyFu5qv2W9cXGfpWJQUXpsS1Wwxp3gmKoPvxpTXvythGFMET8Wsvb3nMdaHcTAXjeucz3CuR5T1xot",
  "key8": "5oYVhPzK5iv2v6nJS6wNfyUP56PNApF9fgTqRAWryBs6DzNkzGF2WJoYY7qwFwPEmgqmxSUFAy7AjtdPoUpW6GoK",
  "key9": "3rUCQDjrWuBN8ZTPb3hFS2V9utBpFrQFZEN36LP2Hz64Cy9G3KmM7veGqyx4TmBK2GmXtdKewbdX2FEvBj9fafki",
  "key10": "rhSpbu2fe67iyBJtUS39Mt3iuAQyixpmGGQQvDjriZuF7H4ikLZhMZJPfEYV5HhJH1jpgP68VkdQkcxmRnTZZbN",
  "key11": "6gQSpu3fuUrpTou1C7fe8hXLZKcCHLGRrnXmMHNaYLuku6f8ezG5YfJzqmr5kwqgw46zRBYGdu18uwE5hSurEhW",
  "key12": "4uJk6tW6uxxcBvmcF6fBjWyrRfYx8tP9bFsFZyH1UWyX2sjCUot3ApKBbs4TrgfUtrHJLPH2f38PhzLn4Gd2J3BD",
  "key13": "4yUaz6qMBatKs456mGEyxzpRBUVAvTatVWiysegdoGFKo86scUYmA3htENdpB4Zx8eN6R8ByEXsdkA6ueMihimom",
  "key14": "jMexGH2LZvjvPab5afZTbX4b9hKTLZRVKHcdntuTLq4r3sqrvnSsE9j2Koz9sYWMjem3G5gfyfYKKGNVUNZKWKB",
  "key15": "4CEciC3btW2sxo6i3R49JVeTaygkZPbB2ZcsJNpuQz1rQAH7pWDiidDkkeiQrjsorehuM6LHZUrByz7Wyq6q2hxe",
  "key16": "4x41HStuGfH1icuMupe3XAmg8iHYwQTHRSB9dBATg3YuC2JaLMYQcN7eRJK8GUhz5HXEd6N3pkwnjcBDgx1APuHR",
  "key17": "3Ar9JX2EU2KrStpSxLvGeN32tC1iEqofWoihJsgcZSGtYvWAaNue8W1HH458GbJsTRaW6JQW9X3M5CAQCk968iUg",
  "key18": "5gFtfGTa89CtLH7w9o3v5HwE4yJywEFNCBBpxjGUL1DqPK2kZDZXcEaHpyef3wuipQypWjvvezbo2RWeB3NWrGsb",
  "key19": "2hX47x3G3wV4EKdum4ZLasW5ixg13jkCfTyzTriRu99FgAMMh5XZjENFo7AVWNFx4D1eU9e6DwXAyDnErkoX3D2u",
  "key20": "264b2VQHYEMH8bnzeSEK2ded5Db9XQvy1ZAF7UwakeyUasBCpgL3ByvJsLsS5x2tQmPatDpaBxK8h6qdgLbkGTr4",
  "key21": "36az72t4pzVy2TwgMKDJELhZ2Qop3M5JQG6bxnGN11CkQUkvD9QTnP6AXMvqjLytLTrciovaDmrnYZGumPuS2cBo",
  "key22": "5dUgq5UgeZJ9P1RHdg7hb2jrvaDTWBTpicSQX3npdvoQ3hRiA7pW4tKpJbRUUdYHo1pHTNnGTCEtev6ZtFfLK1q9",
  "key23": "BNdoBFin3v4Q2d7ysZ4vKdoxdgivDAkuBHcN4Tk132fRWeJdtQaK8qu5P5qbNQq5E8jnh5gJyUXg2JVDDrk5Euh",
  "key24": "Pby2pCh5AVeTEGPjT3giwjxjBC8dvmmUqaMUCgb6qHVngq1U61N2gmySZfz2yLRSmz1kCW4ikcuvh8AzbStARK8",
  "key25": "478V4aYBR7JWaTG5DbKsHWLzm5yzLheHUuQLvv3qzjAeSSzKQj3zi84Qru8LgdvuffEqbkuFNib7KH4kNxThcRRR",
  "key26": "5AE5Qmm99CSjvXQDxeF4ac6xr4WrmyZwb1SyzpgqfetyoQsdTZcGqWDXUX4FxynC7Yv5omMz3fecKeianaocCPvh",
  "key27": "33XoTRgLFDN1y3AHRJ4nDmeVjGwmTgWRTbyfAwgajcBzzQPtemsm1QUbwJwZD9WvYeyQqJ2QEomdBNigkzGXxUM5",
  "key28": "2VmgCmGVkLyBzL6ZUY3gNKU3BZtTHwrVoWas92Hiepd7xjQvb92yndrRZadFZ5VWNHTzrwJu199CyU2N5hZPX64Z",
  "key29": "3VyhhMVSLdFZ4GHmE5VcoXRndLChiKTELn4QcitGcaXzd46uPzR1kewyNm9oHtpJApehfGDewtJPNijRJTqqyh35",
  "key30": "33jyayssVno1hm7gbQPyFiFJUWQTARLvAELowU9YQAacSNMX7A3MLdmMjApsRcSNf2TrDVPNhrWf7ywuVJ8tBNnM",
  "key31": "VcRcU3wfSQ7dwFLjLHnh9s74XAjZevbXbtqkNqeTDs36Fi5bzMzpNoKRMnqrs5r9AAvwdEcT2SPpGQD6YWaBwWZ",
  "key32": "66KmqwJeZwAM5wQJNMZYxGzJfAHLbZdmPphvP89aDVaVdU54F6ixMPsgA8wHbruVJdKy9L2nV5N3CwXLReLCSDu6",
  "key33": "2h6RRHVoLf9A1tLrnotCBVEinkFjCckpE7WtBMCLBv1C5Mi43b6ukgkEYc9jRoeBTmjaV21V1fD1T1xRVGgDFEfi",
  "key34": "QsQro4dsfdSAzbHNvHz19MZk3Tg2W7UwBmGqj4cyxGP6y12SAgGyk7bs7jHvyC3TUnzA1t1CGFB1wjprhT1Vxpi",
  "key35": "2rMKZm4WVJf8ANDBu1MmnYGve6XR5pAGubWvhqZLVAZeeK37SQMQKXWDL3kcr7oozUr2XqZoXHfJf9b7dK4cmnJW",
  "key36": "5r2wU2X1f51tJgSbhzvzauFamwTXYYeGX2hwBdeAFegarDBzMKLUVPa41E6RN5PboZq13FhdNpQ7ZAs6xtWxvfMW",
  "key37": "2rg2cMgmqibE4GjTkrFfcvk326gJzhqe3p1UHFeTCtdNeZSsZwqtmwYzNJ8Hf9wRbxbnJiW7BavHXBQ7SKPHcEED",
  "key38": "3cTjzWiimPjNbWdPcZijWPREYuWsRHKp9qoaF31K2Zi55fCShv7aScXtFzB8WYyQnBwnFe6X6KtTQ5pTieAhAUXp",
  "key39": "3TtEMsoHVpiymX1ArLjaXuMcrhRzpDCHd19G8WUNE6UbpB4eTiJnE7vpFrYuLeQzfid4u65SFcD11nwtzq6nLnCv",
  "key40": "35MmXyNwKh1CztheDLmCqNihFFe5pYmbv9rFmNDE2jCtQ3Hp6dpZqeAgKWxVTB6fwtLC6nPLd14Bi96CaYng2Afj",
  "key41": "4pUWzaTRvcqAboMbb5oz33iu67iWtFSKc1vEzurGdcDDhyRtjZKVabjkgau3J5eLFvVgfNn3zMrHrpjWM15GQbR",
  "key42": "3fe7so2sc3rEvWQeisRfgbdN8QE6UatxdhKrpUreZziFn2EM7Rf7uNrQ6UDRvuvG6Ro2ZfXB3pNFHU7qCDBUkTWA"
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
