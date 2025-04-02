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
    "3YCcH3xisCSmLKWT2gbfA7D6vwuDTunvzciYEUYiPup97kr8sXcKwqPBLbzpSqLNjCxXoASjH1RzUdKwb8xsib8D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3duT2AutcuuZ2s1TDZEVCY67zyBuEFe5hc3YiXaUTRFjTVzeuiD7rxUeLeTixcgixQWrG3haM9s2RfVKNwgmASXu",
  "key1": "4d8Sf7Gp613c8fHkmjTcpeqH5L24b3JbzXcEDczkW4TRVFMSFh5dWvYfCXyn3NaW9V3mf6GKZoqgbdVsgF7bhZF2",
  "key2": "2sHNU6rsgPYqTn3Hk9MsF6Y2qwzR6ChL9nk9npwFbSfrGRom9nuUNUPQLt1jQxCcAFF7D96sQkcg12T6qwCog4vS",
  "key3": "5FCZ3GojqUmkdvkXc17xvsVN3EwvGtGsc9CLzLREKs1W2EoRw5PmXv925f6pfedY3dYR6F3HzZvea4oX7DadokNN",
  "key4": "JJxgCvRHAeDFRRnQakij8a7TVUUvqjgJH6RAt94g3tWHptPZYcUySeWg8oyEL3iQxxn4Z7F5jXFxskdgy7mEWvi",
  "key5": "EcSE42c4rGcH5Aka3pyW1u6hoh9ZiXr1TGWVSun5YufPDiU9XSQNV5cYjkdbuH3DPZYWMFP4tV3Ngf3nUQGQkS6",
  "key6": "5dAM23oPxkn4LBnZ8FcQppQwGAibmVcqc2nH52tTw5jAH8LX7Rx5CdF3UbY6CaBFJLuaar9M4s1Ldz6KHjQfCt1m",
  "key7": "2sprKK9bjLHHY4QYFQwTaAcNdsVkT1xYFatH6vgBf5ab9APpbDaYdxD7ngkgQ2YEMeRiwrA3ExTXLuwjNw4CCGV9",
  "key8": "4MLQz5Cp7YvZtcwgwSC9g96jThJUGTGMpzjAFe21skD661fvBBxEJZpug3UPP8x5j9Rowy3X63iyFfhsoHBd1KPr",
  "key9": "4HcBd37YawA8QMxGNGJ9cRRSbf4F7Wn89JG5HBe23skxVC2QUf7fkayvR6pJPKTeaSoogtmvxAfvfsKTb4ZyDscp",
  "key10": "KLompBuKqPcAs2aRgnUqQLZmGctskqcRGK4432Sxrm3dHq2WZ9eGhQPkUWLrY5VjSRNuzYkL4YB9hhdFDr5YVVe",
  "key11": "4Bjz8ceGnqipTrGVBzWykhaiwaQYZfXSpPXaPKGNmqbLGWaSKN4ptQuoF6DvRc5gUbHk5CRwQGT8UJtPz3DiAxpS",
  "key12": "38zgCNbyyVn71xfNsn6cEMV1ZAw1YQUk6ydwQqo8t4cCyw3zgJAd6MWCwkP7PQoQBsFAZTbNMfHL1bNrUSXXya2X",
  "key13": "4UajS6iPGgVwgLtuWHTsntYJYircoZYqULnEkH6Zk97hrz5ofF7BnShCemTkyRFrnRDytsaDB2WYANnYFjcSzQ2N",
  "key14": "T43Mb7GX2HhHGD84EJdH6eDeTacTpgxz8BxgadF5C2zRtb4eftaMsszGrx5cFgHscA9GXYweMwLJiPcDfmzbgTn",
  "key15": "492Wtn5xp2SHGuzGrybgksopM9Bm1We7ikL3YaaSmGgwnYEn4FmTcEjYzdMhjzSfPGJboVcRL66gZ1MxqEMwvToQ",
  "key16": "4azX4AY1RGisYKMtWJwg6uyp8VpvhdNVF79bQLpVzDD7Q8iz6qZTVx3Lh1AxGsqFznc8vYiZLmj9HnL22sUynyCA",
  "key17": "3ypzmHzQvxRUEfGtwWc49CMpQKVurCrfzhiny77Chb5RzmgKFWusESHsuCoNQWu69MrCE1rtjf79j4VHnwe2wZcc",
  "key18": "2vrbkS7WcRtNSihrufiaKy8foGwaeX25KfUgUz6EDhgGgdnoDUa1wvmoPYNSiMc587xVcbiGSSKoG6y7w9Hr9QLw",
  "key19": "3uRVj2mQmQnejizPKG1D1p13iTo6mWYuyUAVrih3JxHE7Aiu7ZfCGbXD6DPJShLmgFmYCaCbnTFGiCHG4B5hE9Su",
  "key20": "5p7TYfky6vvBCZrC7cRy1y3n5iQUmgE5iTfFnPMnCQHrX9fJ47GWFCNSJmCxY1isNBfsSVoUqduDV5Qwsc5uLFny",
  "key21": "4LWdRXPCXhzdDbJAMNEZDVJaxoTJ4V8oht9P3Cz3Bqj2o33PLmfsmjbkyg6RQckUkBT5at7UeDo3ePy89RR1Z3Ud",
  "key22": "2THoWqN3fWhA2KrAuMKEQ32AC6zxdosoQN1HeP3jtY7sEPbWToqYroUiMwAh6XPKHi6AKK9iucyNbzyrESwhkuRG",
  "key23": "w1bd7PfvPDM52XDmwRwK1kftECeRab97PymEQtRhsHNsfQwZakCDWawhSQMjvA77kMy5CoG57SgsU1mHwGinouU",
  "key24": "2Cdj4dWoek3VgBUu8Qod8c395VjeoucSrB6whnQLKut8mP5nRMpMp8YNFBEVDKRwr4Mcj8BnwQVnEANnUDeuS7V8",
  "key25": "5WWXFH1hNCHWenpjfNYRmv7J7Xo7HQLV4q59STGqGBmFPHHj7TEG2YD5C8QsNFQnc5jXS2TSeWAhTLNPYa4ap7f9",
  "key26": "26KhGXg4dEXxcHjLBGeNdqaaCH4juCzhP9EBW3TkZnTZMDnVNDvXSYQX9hEHkzsfgTTPiqVSzj5vvZPxNc532Mvv",
  "key27": "2tkBmcEuzNVd2kgRLfmCy9cecEqPhqzKxTcrfLPnbxdSpCXLfyFedAHGVtSXnGmyShyLqLJCP8DR3GGKgDhgPcFE",
  "key28": "3PXZLsZa3oQwfiZesESes99zHTFjLkiApiYEAdH9ghweehM8KUG9KrUq3E7g6XYpnsYqzJL4VhSuyPpJQqYYSNnC"
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
