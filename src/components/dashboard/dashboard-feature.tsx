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
    "5e3TfrFkrJS6BPtHQ7Y6meSQkaUiubxsSeW7KBPdpfSfezSGtqfd2wgWKuhuiQA5WwNLhMmsy9auYsz3katt3Eg3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5umG52uvLwYBJDah5Q6Un5vfXSnEVPogpQNLHnm7wNpPXtYSp2nZhAQz3zLX9iUjEdWV7tW5dqNL3wAq5Tz3LGiR",
  "key1": "33vucjc75w6nkydibJYWUzwLCG6P1AYTVJmPtzxe78f4QNdURrYWMzQcHuoC4Qq1AWwkFd6xXRNxidNUQ3rB18Ff",
  "key2": "tCVU1B3dx1RzgBfFs2Uqqx54EZZnjWLwUEqCtt6M9SfwqFdcGSPBdrrBXiw5HEb79jyKFPZ7jr31zgucVMBh7dP",
  "key3": "XASgSm9hoqhkijsPQr7cWvfPZYQ22Ej5G66CucgaoiPxrFpnBe2ZpgE64eBR3wc3YLai3CC51Mk5PTYv9e9h5Ge",
  "key4": "4hkcoSF4t4ZHTDnH5VyiPYEV3gPPFkGGVdTw1QvWwEics3vKRRfebpxm1WbLzeJkSLZKZt79e7AewmWLiimT6M9E",
  "key5": "64ubPEXDgeskpuFoy9XG83Ec4uXDKUKfitVo9sjJMxYSDJewwZswP5G6LDka2ZBxsqKfqBSJK4Cy6RCzaMKASS4t",
  "key6": "2n5masgCNBJzff3Yqm5SLSxWwESyEMpgwpTmspPpDctfNTs2fBJBXTMjT3Xs6TF7rSZzueNniwq4QsR4Wh9AAvwp",
  "key7": "4WKS6ooAyCFWBxLTdxnaLXDgQEvcwh1bc1HjprFSsg1wDpPJc7AZSokkPNGbyTZSfzKXM6kB86AduyPHDUjbtMsA",
  "key8": "2XDgXcJ3c4cKq6uKFB1mCioUGjq3nKoC1JYTU3nQCYrovMN9pog3aX8HJE2JciX9JJpc7wJx1EZA94pFtaoAFn3C",
  "key9": "4LMie1XFZVm3ZXQGWE9RAswMGLFkmxMY3oomuphcrmj1o2bL7xqRTs7Svr2NfW423HShgDAmDDHKbRJW6hXCw3th",
  "key10": "5z2oZCJ2423p6TXT1BXDmvr32Exqm4DjysQbaKxibkcNC8GBw2uarVwv3pWED4igPacrBTSwfb8tB9xqfqsBbfPb",
  "key11": "3qdhpZs5hmFcw7cUwpycA8dPmtcwK2TWqv9cU5jooo6LPNWtdALkVtxxxEgDwqmU1DYZEXY2SotjVZ25MGsUAfSH",
  "key12": "5nBhkBUh4nsJqKWDjKeKxnhAGGGTdAB863PDkzhSDDF9UMf6Rd1k9snqwpQdnP3MQWbpKWyohDBwXpncsVCYJeLx",
  "key13": "2eCwvtWrJeMtEkx1EerDzviXM2Q5i1B48K3ahnHkYaSDP4wBsj61zFtuGcX6Tav9MLUUj6kVkdVfWcs4j9swMoeG",
  "key14": "3mabN1zG9XPPLG6mF1SALpUvUJN2LDJqsPwbqSybeeEZMQNT5RRMqLbxcrWQoooALWVMGWrXUSJTZxRxidHHy2ng",
  "key15": "Zfzq741v8z9DcZGg6CQVLot5p6orqCWvCpnpwBDtQRDFohTXxzWLVpz75D3TVgmVeM8BdZuqaCMkGbcsgMsFRsz",
  "key16": "5uU9xMjb8XbCFY9XAoJh75QJ7YuyoMV9jkM42PT9YWMYgY6hpXcMHxewpxKPQ95oucS7mn5kL5RbiMfQ6XHU1M91",
  "key17": "2xXw9ctGDwrV5zXwMp5F9SZV8Eqt4n1hyUbnmv7VLsYbhmktuvGVvoDEn5jK64nPKyCxtW1jXXZCXqHwWbbcVC2B",
  "key18": "cZHSbMiqb1AXTGkyAJD9y3GNbM5usp2B3wstWTZrfGAR439YWwFZrgrFcEuAUZ9rzd67EPCg5vHPYrvuccY3n2f",
  "key19": "2fpxnSXFZmyAbdaa4sEppPFcBX7KskEUwhm29DREWY6UchuJgJoiT1ounFkDuwVA1AJJUFFCmyBbeCVZhBNAK5y9",
  "key20": "xdNKjP1P8uiFbLB2ZxjpSk1So8Lpc5JwvPCzghrLkaLZ34MdA4evKFR5tgUV3qV5aCn6A7cXNZwBrzxU9S6ietb",
  "key21": "naCKRrSX9uvqJD4eSfaNyLQpEFCpY8gFW5vVhxRtV55CedqNiXburLMvVpPeWW4L4LBchyGphqahqrFBSxSXcJm",
  "key22": "4aZ94AM1FByPFDvdQ1qt2s3fzPtxGmGpEsm6cjGkKfK1RYyDAUcH14D6PN2A12yrkmLwikSvXiiAYJLeQNzMGZia",
  "key23": "NH2RdSXQQWvuPFpaWEUEVG2R3anKeL4VzFjavs4HCoy5SPsz6Ben1WA5CMkv23TnnHArs4MsgSK6bZ8mh7YSE9C",
  "key24": "5z43MirE87YUAnYPDh3qM218D2t86PSCRRPqUh7mbRdGkcNvi9Drffk5zZ76VzbVLHmSXUVU2fPcEURQbjCdwWqZ"
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
