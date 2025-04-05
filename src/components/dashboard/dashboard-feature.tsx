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
    "63qDo3UjghpqKsHmC348efK1fZaJZFv26yYB9NuJ9Z3gAQQGkx8w6nLTjAYjoSBGjmMmfL496nkeKyHEppvJdkeA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x78EJmhk1YGRXThRLTokq7qFTCTPD3AEHSYSbHc2Ah5JVopkthYT8JpjjCvtDEVaskgV9qv44UR5qHoG4GyT2Vs",
  "key1": "2P5nnjabJMbuCSsMKKBjdVJ4jJoKeyzWYKrVKf8fMswdmzwGbeE9TXwRQqWytHvg9AeN2pnBdp7kmMEsQFQymXd3",
  "key2": "5AwG4dqFxrFJaNXRy3Ap27QtgLdg18tBZPD8DnUTmubfgv1QVwnhKaEoruZHEy9nBBiGJtcBin35xcGUW7DzhVjV",
  "key3": "4xuyiyyB7FbRbTCEjQ43uSYr39Zvb3MzhjBL9iWEbLJ1xGiwrRQVyUTHzEpiZkXjE8cVsJ1Yrr14ZMzpkd4jAg9t",
  "key4": "3BvZuqfc85GcTnFXk5TqPXtqucJpcN4LjXzuawEhy8ME1aByCWkuwLS1fHpxdc87Ww7vbyDVxrCBDKFh49GvdLXV",
  "key5": "23pDuT1wVsK2SMu7ZY2BgjbchD6nM9SAtiosKFm8X1ys12pCsSJgPHhr2squkQ9z3LekKhVyDfSw3GW1FHoD8FHg",
  "key6": "uYFDPwmSWpei9mo3p5d6Zofu9ZnpcvaqcN7AJAYqAucezCw7Uyw4RfMTugj1Wbg5ZbdMWkaLnVZbdHfL5GwQ1Tm",
  "key7": "2rNWtrFSgcXzp5BRZBBfvC9nzhppSnKypw7jYq13sQcj5SF4HJ8CDJNbiXwCKKqUoDNhA3YnowPWbYcq6MRSuxDa",
  "key8": "4yHuhzPz1oRmajRr6orGwid8SgpZbJpZWE1gWwJCWvRST8o3bZdfdXDJ5iGMsDtxpf4MCCAfYhHDQh7LHEzR3ZkE",
  "key9": "QFZu539CrXWGuZD3A77HRzV1b8NNEG2q1GB6vXoDeWtyCRzBJao5JRdPRHinaGb2SgEkzfCBaL2FoeuqdtKznaH",
  "key10": "5B2eW7anf6yCvpqPPnmDkQW4vC6C7abMCYgesEoJM7e2di3zfCetMS49famE2P3DppEWNvi9aZiktrwjhA5Udmrr",
  "key11": "5nMbKDLsiwRsvy9LP1c5SukJbuE1DVYXGNx5z9hzP2SM4X8MxXSE64osg5paFRVcn96UytXVairEQitb3zoPGGBX",
  "key12": "2r1XdHRmxVABenoEVNU8kXddstZN9tkVFYh2haWwPECMyifN3ZWiN9GxQfP3fida1spPkLVEF9GSHg4J1NNQdKjG",
  "key13": "4Q9HmgmDYg135Yz9TE5k4bHb5xd858qNTogNNyLpBSyYdiXR6SjN7iB7kiyqQ727YhUtauPWbEnsXsVPUWFFmLp7",
  "key14": "2EEVH5XBHVYyFFzbJCrr2aricMhYw58NMjdBFqd32y1UeNP4hqdcUQ8vMb1MsX2aAR4QvHVdAfLSSjULoUYH6GGQ",
  "key15": "5QTax3exgzG85Ju2Q64rt39bkJMgaxttdif4Pz8Y91SSWusmkoRyVrPwNNAKGFxgPnQUcNfzgSbLdzVEfPowB5uN",
  "key16": "3jaPEYh5WjdRzRzpwWKhbnq3uPmHdEaMTGyuyHptvfr7CZDYfB9DRdaDcRrPNXV5gwPBAnUenvp62fSwnYVKwzqx",
  "key17": "Hn4Y3tQVVQ3DbJ3eChtUb5bDit8Qh4TUG5xzbGtebKWvEkk5TJnnVLRmDTLJCroNFW84aUs39kuLy31rwycpxQP",
  "key18": "5kZYHvP3Jv2gr26PcCi1QpZsGj7Syk3aLknTVnjkfd3YBSwH7TkFsrLpjBQyV7cfXdAYLSugyjhfVQL4j9LYUh9R",
  "key19": "vruz3YYkgTWoSJyvRcEL1uc8noZzgLFcx8mk4XZERhrERG4CEPjkrfsXb12GLoLTpqqXSrcTusctPH14uuMuHVY",
  "key20": "2rUfVRMViSvv73X9MTNeG3tnrf3cut3r9t1iHKF2tyvjkGTZQdK94KWAdAS3jcTWSbfPPKs7A3ap6Trer4BnbQ6F",
  "key21": "2rTMRLXogJpRKC2o6EbynbVVKVKvC4DX6gYwAze9vYjBUgJQPMtbjKAY46S8fcj9Sn8VzM13fD3BtvgS7eaX9P4",
  "key22": "2AoKDpeCzGEjy6aL9RfCb8wcL8zcxLpAqWFja6X71N5pMwFJGLwd9Hp3V2M3dPmscpTZ5CtJc7tPWXy8x4rpRE1",
  "key23": "3EeEz75iTbdbazo3dESDzkFtmAEnYsszRLGCn3uBWFbPsRLoEmd1aPREdYomDg7bDq3pe7m3U9rAmbHvJapgpHPn",
  "key24": "4HqMMpod1EjiCMthxym56z8ypVecGZ64QDTbYDcryhtaH7aviFHxtDVHRg8BaDew4yBy1AqNKZqLwBxZ2v1dEG3E",
  "key25": "253KXUhVD7iXaSSisist8HCLHiptzYCGW4bZ7QVuQbVieULZL6pvDDtyhUk6Mermq98jfZ9ZAshVkRF2eKd3d9B8",
  "key26": "5Bq3yFSi5g2VaAnunmdodE5tQhNamJfhJCY3x7ZzjydNfwnSGSGhqzLEY7dw5U4yiALh3KcLYXYeozPw7vPyF2eA"
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
