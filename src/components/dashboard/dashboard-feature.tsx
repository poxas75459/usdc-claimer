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
    "3o71YrR95fUL1yaKpindnFa26hDni3VdaQ383CA7uv23wUCFRFzzN1MmEzvLm29Sd8B2bezU3Jd3KmPabc3MXnqs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k7dji3YW6LH2hhHv8hTkXibNfKYAuNPH4X3E2ZgXVLMPDMtAqXF1MBcvwrNM79jmpagYcmkayzsWpgfTnSqAr6",
  "key1": "2ngShcSKu4cHsZeF3ZPSbX9egKs8kwymjvpxLvvQiNPxWRgMDvixbS92biLTTrYwKo7CySV4y4HtcwqqYhBU8eCJ",
  "key2": "5ygW8fdqPZVqXqESRo4wPjqxocBrHnBg5yevf2b8xSxyyX3zJPUtpattAiHoTKMV3i3SFYqGoXa4mC7sX7co32ia",
  "key3": "51obNKoFpyVhRCkumkoafNG3cbVQ51VRc8Ua1ZXyXuEtdsk5fpDBjYAwFhk5m2Lo6od3kVCg4G4F2K1SkLPAwo57",
  "key4": "4EdZ54E4vmByvFtYCmf4NGz8GwX5gtaLDCwmRNyQbmC7PhKtT7uRkUVZm6zVbwiqdxi6E2sM45X5p3mfHtV6UpXc",
  "key5": "2KEhFLBY6XHSqcgWcYXnFBjikusgL8wcLepuKMaduaQ2ASB59fCoZcCgtLYkeZG4UBhsTsViJup3f27BWqCebBeK",
  "key6": "4PXtd4D14bM7tW8kjzde6s4s2bknJJcozHz3AYoz1urtg9w8UM5133s9nRxHWiB1YXn2LeavKcMxqsZZ97eoCoF1",
  "key7": "27C25yApfYHr7dS21Kt6GfLP1nukMH3R9XdiiREAjLXGQHqRufLmXdsApkM5uHcKgxRtVTqS3MuGVEBcWWk6AVVD",
  "key8": "5N9VEGj4cyRR9d3mVwKmSX1ibx5gCBSiN5rX8uLsfEC2eGi7ejwrCoU3tSuNjFFjZtES68H1swcNHYUamFdtzHzm",
  "key9": "53dWawWj4TPQEtsQa9BaoC9JSkLWFkM9BxYX4iCfXv4EHKYSQukzeJ8ZqpVRLcV7ygzghqWHkxHxKnVk4GLYEjmE",
  "key10": "2cyxL64Q7M87sYwGbJGcnScyYFHi3P1S25iB4HPZY42Mg8wGMbDEZbFWoAfkAivVbaQJpag8RD7dZDXe1yM79Qj4",
  "key11": "5WxvVvQ2AzeMGhwcMGKvniZ4Bnd6obuZJXBujUpjkMwB4KifUAzb7aGnJyLtp9UBhgrPA2Nc24zf5Tp9NDECYZMh",
  "key12": "4kh6KRgAfPR3DTZSL544m14BF7t5iPd7VyLghWHEj8NPmBFWH48zuBcqd4jYxymbY6SKAHFDpM5DjvFndHzBqz8S",
  "key13": "4zTUDRwHWEjP9E2jreHp8e4a4eom8onnBpYMsMBDWf3GMmc4FHJSTCuZ3xysvHz8T451caNNcJ7Mj2tnochSRSjL",
  "key14": "3AC6DgjoTfjL42yTxYYGhEm8RWQF95sCvSEmE3Z3JSaSMDHtm9tacaA9YSaADJJeUXaEGwap6PsNGGVvEKaNGQkB",
  "key15": "448qS5i54uizqyT8twoYnwKBUCysTyGcsbHHvogfjY3Y6P78yzArVXwUT3ZLWErvC3mCXPCF8u6cyJKw3uee6Rfq",
  "key16": "MM3XXW4yqsG8Ho8uGb43DDfY2hyoBH1njovJMMrTAEFtxCTw6ZKpiseZ7UNhYHjNe2zyaw65Wde1rTMbSQSvGs8",
  "key17": "ERe8i6GiCk6MbXBPRMAHUqArUs1P4qPdoHUAyVj3kfxyX44jyAMgYtxMBScS1LRb4JhRa2gMAXeXmwFjt5Lexn1",
  "key18": "3A1hkGdwi8ETsPt5GDGmpAW6oGuLKsvkMGPsyES3GV7htvtoKAvKKmimmodMjJ5kSS4GhoKnVSULgxPbz8sHnmE3",
  "key19": "SBbGKwsY9tHS5s8S3yAJpV1bQ76M5dvx4SU1hi7rdM2RjmHCrZE3VW1VAAmesjhfUhEUqBmzCic8TCX9j9hpU7W",
  "key20": "ziZmbrwfyaAX4aFr8tS5NjPmezgE1wRtJ5QAVXiBxEZoiipUaVgmGJaEK4Qxr8PaACkvfnnqNq8bLZ7tBkAXnRX",
  "key21": "2FKeZB6xkHsWZaR8oSsXdBBTRaQ7Hpu6qEke1m4vX8jB6dheBSNDoTa7AjLvawZDFMQ1VAz6xMHhj9V3zqEnaKnP",
  "key22": "5P2sTRceDiBJzN8PbPjfD4Nk924QndVFzitRUfduxd2EDL9QnDWMVVgUr8SBmkU4Pd3sN1SgEGQULNxGVZYEZsBw",
  "key23": "4n1Tt2hYHPGGQwaBoztoDeXHmoRAmF4X4D8A8uFGXGR2AEvuKoTrXXrrrRN8KuEh5mmCAkD2vMUH1UUxTMtdcSwU",
  "key24": "25VkX54ULufTeFkLXUpjYxMRQgQJThXQ65DcpkBAXBGyShLWNj6k4VnfDhdCLFjJzdZvFxCpup3txCXi7Fd1AKUc",
  "key25": "5yR8nEUU8GMyAwrGP4HpKGPqi72VJwGKnzNXTgYQ27aTA82TGmWPDGU7cHkuYCTT6pFoTtKMX7Mq3fHNss6sPuLo",
  "key26": "5KJxWLVUgmEfhgwSYJBB8TDNkZygS8Jvcy9o1wp2F8qpkUiGsDvRMWS5GvWnhhLCGPRANRNJHyHUsNf1wmacwkBY",
  "key27": "4nD3u7G2MLwgZ8BEXYnUnjNA8kkR62EnKnZy7ttVvvdmXUbiYyXjhMYdH3d3be5jSzVXQJ5Bd5PHop8Hnb461hK7",
  "key28": "4DmJxHyASto13nGJ2F8PuAHyNAfpFiNPksRqAqnDT6gz32gm9wj9Y6muM1rxaQ9VNMFQAiZEryqa9RwFTL5d6aFt",
  "key29": "4QME7cWYt5fbXZsosMZrwgh3o4QnHM3iMkxVrhQhyh4mkNj7gKaVvkPgUmc6vnr7zMD9EKX6DHFSxz6TYmrKh6Mh",
  "key30": "5Ue4HNRth6ACSTKCgg4jcMxqF7CVFJDji1yqcs8YqzbtgE5QQAGBjkQUA6RWKJh2v7WVRtsm8DS7y93GNwfUY3jU",
  "key31": "4ttRSCxf8HabxQKsXqtzEHo34rgY3fC7MAC38mrM4hNSxexqpKH2UkNu7kT2bfFJmYYUkz5Y3GbhHmjYiA5AMG5J",
  "key32": "vpQ4pNfzCFTk9RkKBZKg3s1qR5apUjkX8aDsdhb4CDrSfLSXV6Fash4oWGMRzWrnDoJTiGnBhZjf2ua9CrpZJbr",
  "key33": "2uNWJTeoRU6aWHU18Ax773A5KeVyJFAxwkEAYDb5QGZx1eqSaj29YbhATmdsmn6QncTse29uRccRiGfTb5656TdF",
  "key34": "4ans2Po6WidHPvvhQjAVA4Py8xcw6kon89W4wbC1gpT3HYZX8QaWaEchReL296XJZcPc4P1y8UQ2EgCpnnuvtXRi",
  "key35": "3v9LZFF7eR1oi7bA3a5KEvV2QeanTXWcKqAYW1LBHGuDXD28DR3RBP2TbMTnw6DuqrvLprFGvbJ76T2sm8x4M692",
  "key36": "4cDkRYxs2dVgMstftbacPhW2heMtF82seKmYarGPnMhk6YffrY1eYV3Y5fpKUwAmwMB4cartoUJKPs8D8YTutn4w",
  "key37": "3gEWhfw4k3xsnAis8NSZsDxj4N2p5ecJugwTyWVzSCnEgo3mHmPPkTibsmDPXjs9rrH3dAxzt2Ao6H4MvjFDfE1U",
  "key38": "p7dpaVHK8T3nnnAkRZGLj5Yn4k9wvUPH2FLCHi9GBpsEoRCRVhVBASnjP8hzhofUKa8rtZBqhiFjWm7uWRXHSGa",
  "key39": "29qTSk8jRkWWhBTP7yhC5JcQ82C7XPnhWW5aas3d9UANe81cmFVFxSeKgWP1e8MHGxr6BrjhKLn5xE7aZsNMjqLX",
  "key40": "4hxrf8ciPeTeoCdn2irdasTPF8r9sWW4Jhh8hSfiHSHeYKP1Nar6NMr5vGfm2NFLwd9xsMjqbUgptANDqUujiYUx",
  "key41": "515j4UUiX887f98ajpbzDR3dds1NK4cEvydfUUo1pns8Bm26G3Goa9KQ2Lthh8LKsDo2MgyN9eKQjGwhsqUeXhxd",
  "key42": "5b9ZSrTnEuWrpDM8y4T8ZQGsBdFQoxq4gpFJWV6fDjQXsoHHjPSvF2WsR28gdxcKhdADY6hX4QQHBbbiTqBxUPEK"
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
