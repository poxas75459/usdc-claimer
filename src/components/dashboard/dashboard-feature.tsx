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
    "2heTzFCxBxTu4tChBjUggzvdLDBP3LEKMPj41cjXHBfYa3fdUGdLgFKo56dtit3cEFPV9xwBpNSeGuKMEsNWwu29"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UDH9LmGACxYi4t931LrrrWt6QGM9AMXbSXSV4Jc9zscBLXSFEBiMiL3JE6qw7nucqXEysQ7BXUDMXo467DcNrzu",
  "key1": "4ndqtDskonD57ji5pCUWdxibC2DaAF4dEAbcoP8DRnTnCng2isPNdiC9nNhavvDNHiooa9QRJr3NT3CHPHuzURie",
  "key2": "qxjTq7CAAxsB4UmpHGSU2yaUFgh5se9852x3XxiifmeGPj3wGh4EPwD7da2sWueAN9rkXXH35coofshtdkCTSBT",
  "key3": "544gYhfAbxxiAuzEibkkezEWU2ZFAojuAJdvkzWdQNRJPteWzv7yQ2wyb28KD2w74t8KZWxZ6yaJQbN5Ejt2EKTR",
  "key4": "2KeB5akpi4rkWWBFxPqJieb8qMaFXqQ1xW9i6NsBxJad27oi79SP519MfraeBf8r1VtNSV7uEiLkoQjmZoa178ei",
  "key5": "664U9zF835aNt53YZo9byNUvnpphWWRcQBmrUswmcJKhRrqVRnfaHQPG9nmue9fqZDVDh3hKeHbRFAPQBi7GGTtw",
  "key6": "3373PsCpwMtuek9Wm4usHXYCCe3a95RtuNx9brSWC45nkSXFHPa3TYKoeLusVsHFBBxVsJKKxZ6cPtYCbmXu41MF",
  "key7": "49TaMyVTxMHgvfCVGpgskJ9r7Vdq2uqpcn63ShWMUpNPjVdJXdvxjwyL1mvJdKqGF5CVUVNjvTdhe3GGUWhaCL2Q",
  "key8": "2qpJoTs2cYG27zSZz2sZU6LjSFFMdvTLbYtLzAHgipt92dgUyJ9b3WGPyhN8zJzigsLEsMuYGm3ouGTVKDDJszVv",
  "key9": "4aMqzHrijgz1HJejFFpHhRWK5UGHU8kNGr59Abez11zzAkFVt5VMuQc2tV4BEtL8APm6RLGftCvvqYUcHhiAy1V5",
  "key10": "3yeia5A7Qe7gpqe7FcyuojeyBTA1Fic3jXMQfjMuscQ8yEwPeRasL1jVapD4uiW8NpbFstPx1LV8HsgQAyH5CY6L",
  "key11": "3Z72uAUydedjf6zr3nP2HuvEWvs2KhWhyFbTSS4zqcdbtpRSJXWhQCx2k5Kqghn5ZHBbbSGz9mzD7SF8ARPYxfXR",
  "key12": "5S4P2uYqYVcPri7cJQ6CgT7U49Wa3i4EMvBSbX93TZnD9ydbXyaiySpqKfTVtpZ6vejTrDqoeL3q9NFoTJd6UaQK",
  "key13": "4UEhGbDeDsYyr9zYatF6cu7s7t3U5qqpiRJdnELUxk5My7iQPEP7PmDoJX4TJyPYUUaex1xHbr7QX936tPBWs1wa",
  "key14": "4QrtNtoTaxsiLygXKRxcEQcpbk71rDmHQmu2eSavwc87ZUWCRMrAobYeaKVUi13FFLrwpkz5JM5J1ADRcaLr6H89",
  "key15": "3ajwSgyN9HSeFccS8to3y7Te5otECPjWEyj4atpiCdwepAn3B82iJPQnHG1mQGxeCiinspMmcVBoU8aJUmmkA417",
  "key16": "4imGAdcxM1uXKD5vigu47xSME4aHUzUGQMeoqkEmcbgM8q7TzSB43CiqLjmoqAt2aBAUUMn8p6jm9VvAicqqtnRE",
  "key17": "2CKiucLgo4gy88uKFnPdGoT2fTnkpXZAhDQRBmm6diWHC6cqDmyNBfR4HUnxdZoP9vS7itbdqRgcxtFygB5zmwL6",
  "key18": "6sZz4WtFJVDhncQ1NCC2bTtYA7wRoFyLAWiDY7gVm27os36RqX9E8w6q2Sj7Ny3PbAyfxzcgUiFZmNu5JLRQiZp",
  "key19": "TdSHN6HKd4iSRyYs18Mfocpssghoy4cJT9FkykgYhaRv7eP2FxNzDUWFbYeyGnMvraxWGZoSokruJvWRbGXruVe",
  "key20": "3YEB79TYhYehdeeMxuu12vzGT7BGskDgi9y1xccAUKRejUTF3xrWaWorny3v7p8oX63UaNtUjRf32T5RfRtRa9Sp",
  "key21": "uE5ADxzTuLbh4bEc7Wy75X3DHjfn825NMWsjthBcZxRqvmPcSxx3opE6cU1kZQSBNrjktyj5NHNPoTdnNKFvKWv",
  "key22": "4Y27oBUyy7XynAiU3NCbERbSY442DunFxHdvD5LPe7b8yFZqMd4uauxVenQdJ5oCQGukNtApz41FEhSjmh7TTQC3",
  "key23": "3hCTYuL4kzunKMFDciBbPQ5Yf7BBk7Ncie5vVcV4NpNRouVikpVuUvcn99cVavGQUWsABNFhxWFXg546xZgnp9tk",
  "key24": "2M9aANpnZ2vofTj81oAyo7yRjveSbppcMWvqMgoSKjMfydkvJkRGA5sUcUGwdwQFDmyKkMiLpbqdJqNTd6nh5vm",
  "key25": "3bE6X2WRXrb2D9d6a8TmT83Nuybc1B1z7v4z1WaZ8RqUkT9hyA8CfzGSWbJh5bT9mVqmTeQxgPpfuSZeSMfkRBqY",
  "key26": "4AVGGmodWG2yzpGn52dPBzTM61c9WHYSxSMn71JAwigTU3ecGXiTCNpK793vYSKTgZXBKknQ32UefhGNQiuWKBuC",
  "key27": "23CTMR5JhEdAhc6f4mkJcTc3JSDH6gNUe8VM3QjxFNMxZFTDoe7SZWuybr19gfe6xjooztkXtHFEsDuC9u8PLTU8",
  "key28": "aGGiRJ22WCcqGpNfknELTHhXnBBuc7pgAFRFur4mh1goJ7F11eA2DGmd25g248gthbFGG28Bcx4AQdcqrDRRHeV",
  "key29": "3Bmc8zPXcMSRygxELzUNNUdAdtqeVCojb7KXfNWPJeDRtxg8EBAe6vxGQdSk3if9kfxfGygg1aoKMxQiRug7QLiw",
  "key30": "5k8v9PERFVxNoafx5rPdvCd3XgyKdZu4odmiTqnhNh6taRNHKpv2LVxd98WVC6F1gjHa3tTCqocHiFHXViAX9GQS"
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
