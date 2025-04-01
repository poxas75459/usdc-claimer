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
    "4utPFV7YPAggZMz3TMtxrYRhuif6dYCiuZKxSQG7hqfnNgRcWUnnQRZdy9Y56PvxRG9MGyeQNJTR4uZfDpVJWTLa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zpoWKjSVLm8whYZbTKkcTwHiztDLGtcDgKi3A32c8VaB7PMmBrq25gRGB3WgBqT2VfiZ37YF6ysabWET3BYAmdg",
  "key1": "617HHsyfeHw73HTrgQjviVFMn27UwPt8dY3LDiRpFmTk1DwvubnrZcvKroWqeAS13cKdroeS6csLSFyWUXNqavbJ",
  "key2": "4qE2dVgonVsoTeCTaZiBdpVEEmLNBXr8s9aAhcGGwGJF8iBHTQXmsHnC7Q1s1hGQbA6oA3mdG2J7gxVyxNCvJRo9",
  "key3": "58mvVz5sh8Hb6gmsxDaLiwugto7wnruMDrNskuyaAkXR6Ys1JHT5CprA8JNbhi5AZCUyxkUXoUdHgfELvZNQcM7H",
  "key4": "5ir5CHZuu3WHqxCgpMt8BAfLH567SSy5ARDkysmXm9iXSJFQc8iqTn728NpULiU9BhZPdhv4miPg2LCzKjNx5k7j",
  "key5": "fiKxMJC5ap7MbWobzKUpYD5KGdp2Ko6W1TKmAQd2Jkbu1Dh1x8LEFrjzh6MCCVZWC8ui6T1Pa9SjkNibnqzasei",
  "key6": "2FGi8eputb82VURGvWWaUbMng1Cprb8nvL8WQ5mGN5QpTWCWqa796inRK4368qy9bnJd9fhUa9aZcrQFuW1DvXTv",
  "key7": "nvNcwUQLxCJzou7jKWbq7dcKK5ofghrYcmmo7jwPRffdprEnuuT347eeRGBVpxELttpqPKzNUdTXMiRP3XsGP2W",
  "key8": "2tk4qiwcNxhPNH9tkBFLfMPVjFXYLfTp79XWiXp3VAGyZiPhCNCooj3JrnuAKQDrXz78DpiZPcq2PkL9JWjusUbA",
  "key9": "5LRC1FCaSfrFgtxKKf6rfWjKXpuK8ZjnVMiBE19KCRsTcuPBwL9x5jLvaYLAToa85sNHkoDfHRn9ZEKgk7DSZda3",
  "key10": "2uK5tyrAQXN9Fu3d86Nfq23ZZchqfgXfYwra1yM35x1ij1FzzAc9t4uxJ1eTCSEfFVqFUF8MaZc8ZCMUApb3LVYb",
  "key11": "66Pjt5XEsZG73xVvy9KzPahN5p7rEUqCojjFhvxTm7G7X8ENaLLnRFAnDdk7wHMqBPVk6VTHp97aFJkXdmA2oBKE",
  "key12": "5Y4vFVTYG9N9twTm3eQ8TYRimER82HndQuARD98ZHuU3Z7cSFJxpvN7qAFiC76DC5VJvNyyHHAyGpap2TDeTdu4C",
  "key13": "3rG1gxzDzbTTKpEPobhAMbC7Jwa2vL9uUjNJEpBcCbgDhnVAHeEaokaMPwmuYA9DkbhyUrwLhBw9ML466CREt2Ed",
  "key14": "39JR6eAarHXZ4AnQe3cNFoYqdg8ojRu47aTQg1uND8my63xNLYZYj5DjXxgcVEy89HZkgNqWYVroMRSESta8ESw3",
  "key15": "2Z3gRBUQTZzFjGakwrCzUZCVH818Wv1d7EYhqQ45WvF2DQJ4PsJngbcHDj9x3j6rwn8uVqzzgiE1aYaFMJRadTfD",
  "key16": "44dAr4PSM6kz5U16Kc3ubHT5hxTqKq98ReLxdtUTbHzazbCWRstwhy3idiqxKN4NpzXQdcZNyKs7Tj44V1gpmHY1",
  "key17": "jTpazSPp3esF73k8G7uPHkp5xU7fqwaJgYWMhBAXBUmhLgMsAPHK1B5asGUFG726FbMs7TJkqmvQ4cgFxLrvSfi",
  "key18": "4JjzGNZojKL9cdNfq7HwaCtJ5AYi6rqTGhGBXF37wZDY2DJgSuTJMMBP6yvNuJbJXBZFskyYzfBUpEDQUnfzSAD2",
  "key19": "5u2aNFhtsRDq7UWohePRD1wta6yteYAF2XSAiaqzDwJrdHdhkYuGooY8M2bKEdLgi5SjcLQcB8R2sVZKWm1Mrb23",
  "key20": "4TTeMNX61mpwXYxq9PQGcUrTYfzeUu2yumEDSKUvUp9MdG4x2EERTXuMyMCfiY37Zw7n3Z9Pjnf7yaLjABL2fnXC",
  "key21": "48NG3cDoyQe7NHv21qegNyncWoCnFDcMBjeJ3Dub2xopabfKXLQFzN8vUUXF1LHSXUAB5qeDLEsxzzSpFWJWg2UJ",
  "key22": "3u2eUigPJPnZTeQNMn3SFRkuWVyYgr1arFW1xnaGzNGrY2UXgqi2A3tMvph6ioG3HuvRJCAAn9NtTEg3z3g1cHp8",
  "key23": "2ef6DXG1PXFszuDT2LEAffphzRf49pRcixXoJDwdbdamZaZD4e9BeHWNqXTFWVkrQt4P8WrMDZY86rEZK3ZP9zSu",
  "key24": "5YWbadS9a3ZWhu3CFUHaK7Thvc2Q6st5MgfxYUqq6gyRuhuDGcvN6EAihoTJdasYSGa7L7wousxxR1H53gHpy3xc",
  "key25": "az856NrdYfj7D18784H1X7fXQjairx98efFhcpE22QSHGZpFXzzGuWqucLuJGJTGr3tjZe4zjTAn2gBi5CW7edx",
  "key26": "5W27TDQzUbj6DetWuUg4LSn71i9ens4rcD6pK8t4YqG1jwuhvPfKsj8qMJ3RJytvW6VsQG4DjeVxzfcW4g1gCZkT",
  "key27": "GdvRefEw1CErXfs4ChPL4NHPg3SEvTCz5yX3kux7cQLRz9uKCcbP2Vc2ZnPoENiVzJyaAW2ykHuixoUHcULCvcY",
  "key28": "3ZcUDPkqGtggsnQE1gc6PJ639YPWR5hxdJgPmPa6jrfpntaXES9zmgsmXySK2L6FKfU77KjAJVA3RDQy2fPA8x41",
  "key29": "2fnXLrq1nKsQDmDmg3FtWDjzUuKsd1GnPCXnuChiimKQU4QdMNf6Ew9bRgtAqTYEsMwtgacDS9JbsY7Pk8dURxJf",
  "key30": "xkvmiPw3EKEpAwgcvzbSX2AkvfDLU7hGfuQ7uaqQ2E9UAq6rTCSySdLcgaQCcddL6FzWhLFFwUrrk9vZatbkaTu",
  "key31": "3JYi8iPTgj2K44ocn3gEuDAirMfsZ11yGvicEhqK4B65KEi2FWwaskoHmfXYFt458Be52a5G7uzYW836fsGbWxi9",
  "key32": "UvzBD69XKvLPaRY5qnTE5TyES3mR4LtXdoqQdpUhxFWDfAoHMKLLfppRWQ2y74SMxPEKeiUiqtFK39PWsok2LRK",
  "key33": "3v5qnHrSmEwyFYqB77MwjPw4zHA5C2v3tRL4VBKH9UR1DF99KBPXK5sy3dNeKFPGjwhLDb7rbpumryYSk14ZkFEJ",
  "key34": "2Djy657zsLMFrr5ekSwtGbHLSMUxCZUSoYpegmQuQLsfb8iE4BmqGPpXCZ33N6FqDwVFWb7U85yy81TEE2EUxXGb",
  "key35": "bTDfDhKTgZ3wpSdiD9BjHRFe23h4PGZFD9h3HDneDq6RrL4FfJrnREJuBjtKxy5ebaUHZ39krYK1dcQy1JXQSL3",
  "key36": "2R4VSJdRZdRyLsBiGxRxP4ahr6cLofKXq8sfbz8XHQHVxPdm8VDdHEXyHEehfc4Fk3PaQTpaLbjWx3xQGhR1XYS7",
  "key37": "49BfEGy9gmQy4M46XNN3oLZP6kAqPAs6UuDSmTAQBeLhdUBhv3zcK3YRjABcD8px9yyrVvmGFXTq6ZtrsiEZFFAc",
  "key38": "4DwzScvs2QG5sGhqrMb7zzfZ5eA9s5n84JPrGM1vJuA6X9sLrDAyH56EVMmSscwAhEZgoNsVSsuhTq3Fm6YL2PJ8",
  "key39": "5gmh6xFG8a99tUazvEF2dRYnzcwuo54u6JtUP2HZUQ3Wvg5PD6uuGWCLM3GPH7fofaYBEdQaaFuqCmpE2kA8HGHy",
  "key40": "PEajL5udW6t6qLWyfZtZjguwnTmDrck53EkMfppKU7JLVvWnZoX7r9qFKPp4Fqo8dwoDJ9zbbT8xjahKgLvA8yj",
  "key41": "bo3sK9Fc3ZJoABE65tnAqzoaA98eHD6cKJJFTFciMtkFKB8H7LHPPPC8dGeBaAq8QSS2DAQzVNdM5CyeFzhgAkD",
  "key42": "4JUniPJdgfwaZMFxnVoxYCNghtMPstTUxeJAbwf7PZdyiA7AUcaXAfNVMMKwJ81P7QBRkj13SUHgyJbbs7wpLVVX"
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
