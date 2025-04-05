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
    "3aDEM5eKG1vxu34Z45tQjhErUgEvsi92qrgPdajXUwx7fuabAnnoASw2SM81Un6K1P6j1NwNA774FqB75vMQ83kB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t8uQUabfbsVmyJLgSdj7PHKANqQ3PXCA9cpagBDkCrpaE7uPKDsYFVZEcd4T22JGssDviidgfgupMpjwP95NhqC",
  "key1": "4i7PKvCzP2MNMrN7fvv8rPehMZVzmiXJHAUnMdExvaw47DgrjM36QoKTfPQyMWRwztFkhJgx4BeVaZyJjKKNZqcU",
  "key2": "5wHcLyA9cPSJdQZ9kp3Xtig4WVkc6jbkcGJaXgu8eW2FG3QLGFNQVvYCYBRggQxtSaKjHifS6DMqQfFZi2JdAoZW",
  "key3": "2yTxTXMGLX9eUaBxfFWLkewAkm3mriLLZvpgmdCrikC2omuBSrNVxzNiSCTtf8eKL56tjyiv1YGJm2Pw95m2ADsu",
  "key4": "5he9aKBhnuWa5VvUGWW1d7Dajk5KC4sSV9gfrsGAF7q6YS73kbGvirbNGcXy4pY2mcsotj2AnQ7hJmWmYkod3aP5",
  "key5": "5aBECnSb6f7obmim73kR4v46U3bUa3TsLvFDrar9Mv7xhzyBqZbNYp4uDvD3i1qVwKguA19ibsSynqyCGG9DU8Ft",
  "key6": "31r6hxss4NC3Hs3Cik5Pe3rzbZ85e6at7Cb96hpppKyPVGKztrXAhfxbmCvMV8LYWFgfQnR5MTERJKaaHHABUn8J",
  "key7": "27ErqLUtvQHdXuPVDnr3d8N1x2irUEYobHX9vhbrQAinPHAQYUqVjnS2SpWVkkd7xHU6vBQq533npjZxrMPVS1Fy",
  "key8": "3fCnMhMK5G8MEyCrmDVsocMcXvx69ZRTHJ86f5dpCSFxECwAYeo46U3vQ7d2kFNNZt8ZpHn5VgNhtUsXoakEeBnT",
  "key9": "126Zvgms1dDBLmjx8EgnhtGS56UsEokBz7k74373d2Hzfp8FmtDUf7J3TNosDS5HJCgECDA8cRhb692i1YJDQB7B",
  "key10": "5X2YF8cHqWYzzUq3VDCtV7SGfxa2TMsanAF8FvXqdaP25QTck5KyL2BwMdRRX1YanhpXaYgcrKShLL1Ze3bgutNK",
  "key11": "37iRokGC5gkAazpn2gwbiRaHvbKKskWAwgkBFehgjyF1rbxHv9FCt5cZf3Q3WyB7tBZjyJtEWMisJAYwVBuXB572",
  "key12": "3KwBec8HdeamtExD1LL57T8r4xQJfAdYcRFGPoztvX9CnLGS237tqJNREFa1ZqBxqRo8HHnxmm94bHyuWYoBAVsD",
  "key13": "4UEZAFNCXYy3VqR42wu1byrrQB2sJQzYmXiaArEo8emWgncxJjFqqVShXDu9vEGDaFQUfVfesYdCKe3mVY5dPf2s",
  "key14": "5hJsiTZkFgYu8XWfwaZP6LZQxhWJu8TT2UgiMvyDChHvViYZdeQ9TFiYow93MBW2pgLXNKTUupyNwjaaQ21tVsxN",
  "key15": "3hS4YfyXNsFJhWU3GmYN1WAPCkPDEhVX77g2MRGhz7LVBN3GY64hnfMZeJ6wp4Dg311xkPuxTYDT4fGUy2MpCoyC",
  "key16": "vQ85Vh8s98eBVvoyHkX1M1RMmn7NJKfUHox83u3pg9k4ao6VUyhLNKNn3i8sSNv7vGKe4qVH5UG2rN2mwAJY7dm",
  "key17": "5fEydE4UAFM94L6skWh5cQ3R4H4wCd54XH4PnP3H6AQgD985ceeNFBo9fov3ZUQD1rusdpQgbQTpFXDfkV15h1G3",
  "key18": "52gnByMuMjvyJH3SRVDXcp8Dsowt5u8N71nXtsCeZ8iiEcQWqXbH4dfyfYwZFzbcoHb1gvbccqLnhciZsu1mi8KC",
  "key19": "22obZYHZjL1taE3gziayaWLBu7wHdWRnhfNa5BHW5fSaXifXVJnGekpXGhrJDEdyWNXSCwwsEM7kHSSGw6qVt3zC",
  "key20": "3qCND3Eyt9tPreSktEFNZgdF1LcAhbtNsEUArqJztriZEQp5KqLvFwmRrtWcEsdWXpha1gny9vpmmicvZS4TNscP",
  "key21": "4M4ufu2WUWGTsYysKQFGuuG35eoAhQXajNgher1ECLfmNcSweY7xBVtLcW2ZMDSy79YcPsH3gvExWSo31D2naZCK",
  "key22": "PJ6oHG9KMBowhwpNRx4ELxmKHMwssvENGac5fT7EFLADMKgWg7nXMW3P4ZV1VZAcwzx8Ay9QfYJ1HEc8UP8zMhi",
  "key23": "3XjRkEi9dzgEPktLSzaAZHRFazhoWfjNuFa9FN1hmrzKGCbeLF4uLGxYtrxTLwcsedJGrWJPuipd9seca76dUfqh",
  "key24": "429vuLT37WVe2BTvqk87nH7Kmssrt9SxJupTjL6D7p7zfBYbi8EANJMRmVdht3gDhKwk7zKTUc4BZ6QpzKQVB9Nf",
  "key25": "3fQbSHozppcG5LbXbccFvU3uNe5eUdF5MD2a3uD57v5Yo5vEPyrMw19zFVSr2jqo7J9ShhpnzxYh6Lnr2P2BErRd",
  "key26": "4CuZyvd2PzJxdT7UH8QxUwKHbYv2ufh4ypoBB9DJEErjsiXebkQsRfy57FQjinWiuSrH1BrS89iryDdZbx3bvrNB",
  "key27": "2jyP3YYMfeUNpK9cZuF9sueJyQmW8MDnmuRAUu8vJ1Ndqd4GgWzKNdLaDBWs1heqXZZjVJjJeJuYeQfBnjy8D8To",
  "key28": "3su5v8Nc1zXrWZq88tnwHX9vb2TsB2mwRPnLDk7GEYvD2WqnS9sW1ndC9cTFEiV2pAqsXBf3NsG2Z6S15PTt6xyE",
  "key29": "4jGTNzGvJLoan8S4ZzvcdWKRaBEieckmazEMcSP12qv9QGyFN6qhiH7YL8eDUR5LMmmdCNLwNqfM9t3NkiXs6HWz",
  "key30": "2X3k9gMaNrBY4Zwj2DtJdSTfTnF9pb8GHCBQCaHRiju1APq5VybmumfrmKB61DKKbKhq4sKzmm1sPF7dzGi3bgvr",
  "key31": "VFDWtUgS82F967Qsm3gXVHPMDy2nR9thgwek4hVP7tsXkYiro3b2twnDjtMyGp9buqZLkBYCLKPVyie1mQTpwRg",
  "key32": "4aHekL19vQEQg5KfuZkRqA8CWxyFySjmPkGhx4yC3WkMVRBK1mAs8JgksSEhvLSpS23DF2K13mUZWarSZJzu36Uf",
  "key33": "2kgmWpQHLAQFQnwxjSUUpH8oybogTv7Yuc5qiqtYGoTNWU8syLbAjWvyssbh5pp2SNTxsYwVQvLMVKkfdxddnE8e",
  "key34": "raiJnU2BmcEeAScMpAfperf9Fv4btpX8teQeejmdrETVQ5Yy4kQRg2chbJ9Sa88kDJ6aBrqdr5UE6saFrS1BH8E",
  "key35": "5EuY5J7sgfgzDXEYiRpchsbKBvVvyuTLWSZChfqRryxtJy1DUPGAarT2zUwZWwWGU3ZjLiSEBzHm76PBWRBQ4486",
  "key36": "3UgxLqPGcq1QPZyznPf3zbvJUqhbQNQEbo2Ai6XzB1TATScnKzmYMyqWUN1ML6vkbg1XTowWN4EV9p17sigHasH6",
  "key37": "2DUustD7SkdLiMgeLeAw5g2MUmBPkpkAzAEuMD1iKPX4SHQvabDkwqVqYscJ5Vv5sBXxBsy8VR5jBbVzv9sLiBhA",
  "key38": "4Gd1TxEoTiQa91pFb4cAb9EQfd19apVTVg5XJ7XaRrRd5ggXUt7MWP5rkUzeiQZwdx22c71ZKFX1MEYBL1SarppH",
  "key39": "5yvzHCuLcv2gTtX4mcAA53zi84crjKPTn2MnBidjmBsXRxzfj8fqBDsfU2CpfFuGZd98cbbRairQQZogDBv7Rgyc",
  "key40": "5MBLduMyJERXxRLqFc715g5na8VqPPntDadkB6DqmJVscbtUzZqcQCbHzjgzqiFBewFa8kbM6vuJ7nKmhtpsezJy",
  "key41": "4Gc9AqVK6HKQmKm9NzN5QrmD4irYkF27hWFLRi6cTGXtWuA1H6fd8dysJU2ACwhijeNd6WkSksmrG6MGnKVwZsZ8",
  "key42": "5XjGCpz7uYB7fKNv4G4HaZCYxmBrikHsqikFiSMgjA3SSzHHGNXqBa4Wg63FM66nzDEnq7JqgFcHTGnURiR5viPd",
  "key43": "UqG96kc4kJHvpwQhFvyCcAYAWV5Dxg6MAx7k2r2hmMeHNiQoczec5TzS4axmLKW3xSPrjqxbNZhtkEhGBstEaN1",
  "key44": "4ieqeMQRJAUpmQTP2j7zKH2xxgjEAQX5TsTjaSEQ2QXQsUA1vuEBZ7hwoYd9JQyKb7VNjCBUjSkGSmUQ6ThF2VzB",
  "key45": "5DVJXFQr4C5mS1b9s2chaW9732qVjHfTJA2rmLTB9pkFd2pjKL6yWVE764FNdxpMLthhT1TpY6Je6FfQfeJuaFDg",
  "key46": "gpLzPTunzEkoGxBncA8YuyFSJt6eiibBUSKNckDPRcM3JxxEYKw5PJE8WtncdcQ8UUvykuPvofBmZAan796xNzT",
  "key47": "JYGG1mcyGGHqLpxC2spz1Xc8BReJjdRefWyrpgR1kKV3PqRizhAak1jU5qGRGabxYR1xZzyrmCtPdL7M1mGBq1Q",
  "key48": "5E7fy7weP7q5BJiyhQwkUJ7mEdZekc2E8KmX8d1HSZjA7fZzz35kdTwCyJo7RnzqH7AkspiEJ3wjyWU77TWmm4iH",
  "key49": "43duXsXr7yaRfVjk7VbWmMv5iUfpXZMtfFhbTaAk4BKqackHGqerVA1S9kLUQYvryvjBxcYFJ3PnbqCtvnnfwxH4"
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
