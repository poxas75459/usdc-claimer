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
    "r6mq19BmzmAz5BpqkKWKD8uZexDkpWhstfGaMQ7HGgt5Qm433sSrYsfNQ4KY1BGX7gaBxVuZQQkQ89Wq8QwBkWZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FY9eu1DsvE8TEvfGrc2VtNLtzKoWGFffJFpMY9QDZxxreUqrEJL8KHdzNZHjNsRNdvpK8YxNpppgLJsbF6MPEQN",
  "key1": "kMYnZ3wdHsbBFVhqJ1c5FtP6UTYAr3URTmRNY3Tn2JyYZ7xNkPTFNGTPLQ4tUYzkqYpanwszfSiKPfmT2RqvJvD",
  "key2": "E8LWm49Z1sVzKc6VCUH3nfRMcFLrrewSKTRmUoXnY41z8ijfW176QsrRD3gxjqf65Nknhaaosp2fVCHntcTAtKW",
  "key3": "5mcutLPC6j6dGhrXKDCaJMEkSNr1no8Qp42m7PfTGcquhAgZZf3sGV6fy6ZEiDstLKf2sMeVVYQx2dR4aFXRuKSd",
  "key4": "5Y8SZJp5z39QhLXpWDNm2CXjR2d4vSBDBj33mQSe2icrzYLnnruj3LafDJFXpPbWKMjJJhaH1Em33jTBDMtnoTru",
  "key5": "uPwbzLPWrw9iCLstWTCYJYvup6MMGSxPvA7b1cXbmq8ZjBZo8DKamCvyLeVgD91twgasuHThCDTBST7gK9YeTJm",
  "key6": "HFDr2Lr2rc1J7LFagcZN33eET87XSMBq7G62SyBQZE7ZurDBc3vtGwziHQaz9e5sUZczhUHv4VNevQuD3HQQMaY",
  "key7": "3KUZRKw5VFECFeq9HA6Q9Pf9niM1F1gYinDPtWHB8pkiaw32YpBwbrXsggi314F1rBx5R4yhfRVk5LtAc6PXXYR3",
  "key8": "3yJjq4ubuAiFDBz2A3CpePEsZp4NcB6vB9EU67nfCwEBVoKEHnhMy3jko6k7ecrSjoRmyFg5Cd5F9ZM58m5fXFM9",
  "key9": "2vRihN4rJVsAqZ3GrPPNwFxiaN6s4KF69dbhY6g4VKnPJkJaPC9BXoNL2Zf83Rr6FkiuqR1pSQyhDdMnngAGgoTc",
  "key10": "2VAUtYvBsV6VH9k6764rSArAGhhC57hvucruitwj4kDiKhR8M43WEa36Pt8hg8DAxWTi4ikRvxvEtQQUGxzdNRYa",
  "key11": "4bRojwuPUWLEeqXjAq71AiyusXgoQ4gnBDSxSYeaQjJMT1AVbTy6uCFY1nuicDgbhokDHX4msaELKrYpPuE63CZq",
  "key12": "DxKGfbunLQVm6aPJheeZZwDdDh6NfLfP7aCcHn6kdaf4Z3qMTAbjui8eghrr4N1V6RpG5GT2UG7afyBoEiKqfKT",
  "key13": "5FCC9euwaY2WJ2GgBA4Bw15mTeydhSgr1NFtYwhuK65d7XpNSwbLWtSE2TVTvKmrSYhxo8cP4VKS4g8ai5dwACFA",
  "key14": "4HZtwoXBaavAPwZhqaTFACTYPBkkocegiPMph6fco1NQ4aM9mTbST6zLNFdcCDvD8ZzJoe3WtY61JwMBzpJDfnBD",
  "key15": "2K67qrgA3dtVgJWv6ujKtsiqH6Qhzpi3WUhup3ucmEjAqNa1e2vWX52XfWCCZ3WXTEyAHL2YhEGmBbapUy6dNhwG",
  "key16": "Udfp8jCDfrJNmmpbdpEn2YHoDh183WCZR6pGrXsDLkhb7ECjpabps3VfwtbUTKCjorozWUP7sBD3XwNBA9MJiyb",
  "key17": "5JnrjihRpqCjDwpkkbbyfgfacYSz2pQP4JJEXFJEX3GjGBZ59Y4C1GzUq93BDSdRJMDPhda6uoVHt9DVCg6VaBBJ",
  "key18": "4fhbhaXKCBeYCstmDZJhvmfGncKHBRDzueJsGxeA6ZAngKwJmhG6QzJq3gs38PhsA7jimnfZKYU3f9WwZv3kHFjo",
  "key19": "yWC29Wz2JJxxyYdrET4HW4Nfn4rshMKF2i396H5zNZgGmqmTp89Pu1dvKjLLKDAx4pjZroV3NsX9H8RbdVe4c1p",
  "key20": "65CNt5u4yXf3yzcTkfp1nAQR3eEP9FqRBPCTMvf4mz53AzmcFPGvK95TFb6P1YS5gK5vuMdTeuc9LqeYfnw4KXbJ",
  "key21": "2Ea3CX11F8QY5ckNad49p5swLJ9cZJPEdznCJzSPhwfTPhQVECK1W2vVBiwRP4NKok7QXMXDpRLYx7rJZ1SfPrXS",
  "key22": "4NXPVD6QxXWAgibEiTj1hffA4fC3kPaWMznnvKf4uzj1svaA4NShiu69fZwVCSjdH4TZX88dR4MiYjKkM8KFnKpE",
  "key23": "2yyfKug1aVLaDKfq7TBzEWRPECh86G38PbMiGhNLPQ5XRwaoxdxVzwWFm79FrdRqGUkfY1kW1qg9WZQAftWs966Z",
  "key24": "2W1d1Rzj1VNTKffvm3duThW87ZjY7SA3veyzxBxcdfy1S4UjaLMrZiWB6nLWdtvqFQHgUrqMtw9oWEGQgNTZViGu",
  "key25": "3Rj4juR1GMFAueEALLxkvCc76apepF5tqs9v7sv2trhmyVrkSzpXJFdHGUDRMFhgTPXdSyji33iukCuRS9fynqjN",
  "key26": "3XqXqs1uzfmYkCw7xWe7BEX7L5moQYNeoDBVtA4UQbRSbBYDusepzeJUZaezYjXjYZP3CKWcfv7CAQKmhixG94PB",
  "key27": "4AUH3osLcDwERX43tHL4b5eEuy5zv6gooTRs46pJQKdiJvjuCynGHRT1kNaHo8pz5Bf6zfWMaZnGkcVPMwYzqKvD",
  "key28": "4FTkRz3veLc8ULPt6xvPu5zf9u3fF2f5EKk8HS3sWcBvmgnY3MoSdvA9HWDwpxvCN7LVuab2ZcRWGq3Rjdn37pLt",
  "key29": "2c42Hhd1JFMHbyvaGSEpba1rhirj7DrWbjfRuDxeTz3d9hCH8yWUijPG1JVTyPfMLk3niQaoBWXX4RiqQCrMhiXG",
  "key30": "2NZPfRwiH1k5omVnMogpCi2Y8zYoNYUwPHANKgk3nP9WPfsvsTRDn8yadXRW4ivLCxJbARSpngNdkriSruCmwxfE",
  "key31": "21w1VRrT2CfR2WehczY8p9xre6yx5xQW4FAKPtMReTGLXTVL7oLpt8wcpwVmb7cmLDvbEhqH3nNCtkj7EFb52DgB",
  "key32": "wiqFva1fgee9mKpL929UCE8X2YrgW6SLpZFcad96CLLpLy2hjTCvkEXhjsCcB8s7dsspgPuqawqvP5FFXBoK5i2",
  "key33": "2i2xdr2mV2dha7JAv8eENNLwkZnTSUF4FxHg9eHYs6RRiTTgTFXDywtGh7QHkZUM7UXdvfvXLrpsZZptmVEjr7MX",
  "key34": "2EZJma1izzypBrJkbpbKa3KsMb6XcfuXNkb58Hapzdjc6gHk1m3EBTdhaACCXsAxCoxAVXqG9JCM36A3PzhfXLJJ",
  "key35": "2gWZ5yqAVdNN1ZKLD2pQw6tKZNzwEQbM7H9ohaF7BPzLA6nKmvcnk7yi6WKEegVvPVV1eN25hxp3ivTNyRFTNgxB",
  "key36": "4QaeBx6yFL3vx87fWuUBajrpvHSL8iGJX8Ad7sTgbW8AUCLKHFsXiZcmPAGbr6qqU9MgyiTQfZKKEsy2t8owz1T7",
  "key37": "3DBEdUK7eh9sjsXGuqiV7FXuGg2nN8pUzckduidvFC4U6EY3oV1WLSHC8ppp8FvaKNzL3Fq7qsPStNCQvTDtmvB3",
  "key38": "39kaNgWAaamNTcWCTKgieVHjXKs8srynPUwMxosLxfbSMykTUtCGtFGEuekHrNAyUPCJocHKbXtUvjZEpyWrqZN8",
  "key39": "LNr26rzEME8w7thpo5jD7x5CSQYoEj7ZkbQyLAHkpREQkwdtRdBzDwSHzs83DP5ZJbKEoh3vdyDipiDQEvfoqNW",
  "key40": "46ZxANHfJuFwsUf1tpYiLms9AFtB5ihNvyG61H6YKKgqjqrAeYd5nTEbc7PvkfZeBmi92M6woe2VdVaP6PUKiyCH",
  "key41": "DDqhFcETRM6j9CHgQC7LdZEon2kN6sRufACugWbYGo3Fw2iGTRb9WVgMNTthwxtq4jUtm9Vz8QGvQLBj6DG9KL8",
  "key42": "2WJmoLKAvbCLmtB75Esi5A4dSa8fKp4CiGaana99hKmZZdsGDhCKLZz37AfDu4Ttdv8bdS4wazRkTm3bJsnEmPx7",
  "key43": "3ZpGKAFJBM19K9AzPLkBabEMnFprx7gWsfwEprJicWNNPdVmYZgwhH2jTu9jBnjKREQVdEtcMj2ozxHAxyGDeaX1",
  "key44": "5EHz5exHmhfyXq4bvT4Xne5mnsBBuGpkysfo84WFHUXds34SN9RTJdDLUGQchSW8Z6RrHGNsozE8Ps9CEXKajDT4",
  "key45": "3oL2XvLNJ4hBid15dUU8LDbWsYrwP8yYcWfepPRo33i48P8P3oRCJqnQV5euFKMb6uZB8aoaWYTumagrEkfSoyQ2"
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
