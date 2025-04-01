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
    "4A8VgwNGikzMisHZJvhNGnpiDjqEdjL5pQ3nWvxtkDJoQ5zrQosAY1VnQcogGRWHJsDWz3Y5RSwrSyXkXA4tiv8M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PD2mPAER72gsbnLfzH5yz2CX6fK19UHtdJ3WU3etmrcExNL5ttf6xBu41Fp61U3EsU7foAhxV8LnDzSqR62bay6",
  "key1": "RS9ALShzL54ZysE8Lnmfu89cZgrcvTXJKsYrhaMSQVJooTfwyiB1yrgWZK27VdMBPCvBo8t37VxEo2UN9dnH6uH",
  "key2": "4KoQFNygBbJwwwiESmcZTgughBYkFhQFGvQitAPbMQw4SZajoB9XC8GN6AF68jxg3Ruv9oB7BqqP1qHx8nCxig9D",
  "key3": "3uCLQs9JxjTCQxbe7oYuyxcbxMsnJwceHPvEYPkCuSBMLX53eswmmR7d5K4JKbzxHa2h8ECdoWw2s5DXK61D8fF",
  "key4": "4ATrJc1KtrSJDMEq3bs4FNAH3Dt5oDiF7HDxkeCFQuJioza8ouW8yuakqKPKGphEdfXc6kpPP36C8zPNtkzXQBXb",
  "key5": "vG3h1SDFwNk8QLTg914HQVhd3KhqJXYcKGvZUW3idpa1qVvA3JT2VtgatLLQ2mmxTFCwWKXXkA3LE5zfz4YAbAw",
  "key6": "3AqB3sm7BothUDPYnDxXpSLehQg9ysPdw5U7HmfG8nkbqHzhc5AHLcew1TidHSQwQfWATH49aPjpYpLWXsJr4jyZ",
  "key7": "2BNEiJsA63RzY3uyp7YpwfyTLD9n4ho5px6RaM3mTgK8YBY96kZpxEL1i7NrABCXqPDQguL9YdNxopZs3EefKJCC",
  "key8": "8q94W4YzPRKT4oyQfGxo6Gpfk78nN2wGMhAToaDXRzuzgZUTJgH54YDVBroVpDH6TceuWdxJr2KD1nSViBRZj56",
  "key9": "2vZrwD6jY4idLqoDJhAn6i5AQRRrx872beKWKMvWeANUKaa9e2cyW7UBce9mopv87gYUbh44KaR2GViAhmbi22o1",
  "key10": "kiYdcEsPbuMAg2wH95ETZSYFTyyVsbQq9DirBaG8JMPrCg8Qk1TSbyaxsvRdFn71nZAijVUWJnaLpcN8nvhUHpF",
  "key11": "5buv7hRWSZZURu6YcsmwAXgYrGTWGuPAe3gD8UgSn39S5SGmX9VkFiXWaBs8fAcmy44TpNQeJBkpQqDJPczJw3vZ",
  "key12": "3yUBoF5NAt5tGSNpCV3Y51LzuYcaAfFSCPvaBZZtsf3Xr8sYNt2uKTrzC9tyKMxnCQwHbQL2RSH4qCnVkkJTKHVu",
  "key13": "5UbgkHUmjxANA9jaNAGL7Q4ohdg728fUeaFC8tVkzCagcLsr4NiLceKZNcVhUSiXyerHaWKu96dqvDwUtE5qwYpp",
  "key14": "615D6bo7FEBfwhwEYvcSq1iXzBJyVwAuC7qyhnoKW2dGtkmbDMEUQYL6pcMaRSwPGJEdPvXe7tbv4CJGLoeLKpv4",
  "key15": "2VBgsr6M18ixVKLhDZjAW1hbdMyjpCiYL29NQPk1eBcSJPSxPTmhb8ERVMUBeQ8WgUP6HHrJbpH5iA27A7Wu9gUL",
  "key16": "2u2Dgbk7MKkPayisDzE7QHV24psEtBzXHcNdfUUYXNyn3RSNZEWQx5cV8x2x4ujEShwk6XAGgPBG5npK15w8X6aL",
  "key17": "5qoxRgP3WsG4jmyTZhXxDBaRAumEe4sdGRNrHA4qARjZ7tUzDHALekKfzVB11NPTmtYpqbgRYPauhzr7NumH5VUV",
  "key18": "45dPbKCQJBCHtM2AgCNSK771ozuQDe8JwC8Cw5qFrhv6G7UihwKbzYzxKrpcYhnBLDoHv2bSyMUzL1uWugeTRm32",
  "key19": "5wipViRSzrMCG376VruKoLnSEmg1jBoHPm88iGh1NX3QKMsXee4WE8up4BkT29stHWueGgeMnj5hPqLdRVUTDufJ",
  "key20": "e38siXcjZgFhuaqLgw6HTiBDEcE93Gu2ggu3qgdLa2H5kvTPWdjppnwqFM79fGG6364QTMejGeBKAiVV3MJNFMh",
  "key21": "3RxpLZYnWXw49rGujChnUJf7GDm1u4x8FWFQ4TyQ7gem4UWC1q8Ngyc4PSpRzHjZUkfW1s85G3Lrsv26bhzgPM1D",
  "key22": "3jnWyhkpK18rkAhQabLrL4NQizUEFvoXpk2Nxneej8RaSGCWekvCF8pWNc1ShzDSxThGYUxvMtdqVwDyzZMfunNX",
  "key23": "5NRzE2oeoNj9uAE9uEABCdCHB8QsGcRFkHa27ywxjLto9rKRhz6eYe4Do6CzYdcCMYmPxSKGGqqzrSVJwTtamoXX",
  "key24": "2CFXotvmzDmbzLiZu1WbURYwLUceRCB6bK4XUyC8oJtRcVpHPjibN8GZG9AbiMJLTxKQXvZQZPG2G18AK1qgrC9V",
  "key25": "3VjJivspQCX8sKGeE1VoNPgRy4z4MBSBzVBsoLpVNN9RgCu37cKUiCdw5adcmKSP1jK1jbUpUpEeYrUBzDAjok9Z",
  "key26": "5sTGmMHSH6hForvgK9o4VpLhk7sL3GwuCdcs4F6s4J75QUgW6FwqTaAWNNML2Ek2k4Wi6udSxXz2PtNfZHMxeyKz",
  "key27": "3BgfCQio7PafRd5XvZGwnjsGMPiL2cgmDcXyBKsSE9YiZjLoqxYCjdxnuK2MTA9ZDmx81A4JBtDKmCoEW65rgCmg",
  "key28": "4hHirTzuW1cNHcK7zn8vAkUdhUi6cPggbXGUgMbv3CcwgBrK75jufyeBGHE4hYdXHrejWHpWRd6hZqHwruPKMh85",
  "key29": "tjNJyk6VjzmPrESSASvgyGvR1ZRDapvNCbpHGoWhbmgt1aAuMMEVRSBREBxBs5KJc3U89rZoaZPT8STykhwDKXV",
  "key30": "Qs7uvuRPit1oVYdzicWzPVY61QqHvdp1RM5Rjhoqtw41PzPznN5DWhHS9dGe51gjakTzQPgcfWMVidzmYSEuCRA",
  "key31": "iMoQhMecmKoEDUbouTyo13aFWqKQpzvg2aPtEXxPHVvf8BiPXGrdRmsfVLWe4By568nz6Eh67bvsKwfscfbmmyt",
  "key32": "2fQLnpnZD34FFd1hmfUYsYkjG3ZxgNuoToajtGEdQM5V411vuHfJw1Dad9obgG1qE9D55SdmmEoWMvG9XZ3mNLhw",
  "key33": "uzq2SjLCXG5czCfJ9Xkhtv2JPd9xm8x1MfEKYr8FTSzFe5EdeE45wjcAuqR5QFrk3SE1eoXsZAx1Kf1dRCWngRy",
  "key34": "4TVsFwD6HNUTSJ59ijWX9gsZLX5ChPndTmaeS7yLmeueG4MYqdB69w6vsu26qTQWi8RrRvyuDgLsLqcvo2jseQUV",
  "key35": "4tqXZSCfYi99G7reYA5sXDCV7wcjBGt6o9eP2JXduX8ueqNCxXS1CCjYZWPzgQ1rZLgZPmuQ6oUiPHoPHnuvcUNm",
  "key36": "4naPqaf6TVLghZx6wSDHDWL2w2FLhPrdQANdxc9ECPzEbH5ZDCqa67zGHc89AqrjyhoixgvYrEUmVNdKZXpWvP1Y",
  "key37": "2FAFJhi1K7qYCaCYMpGkRosEvbFC63mf3uALSGkEaH9m496q4A25rE5qRnnBiYy9mZoAXvBzc7TgJ3qsNbscnxQG"
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
