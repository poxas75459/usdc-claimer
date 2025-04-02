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
    "HznzqSgdFaRd6AjJoA486W2wrosLhXLWXK7NPjQs6F3F9sDcSiP6LVgu8CFL8QCpUUhoNbge7UtuKRDdegTRczC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SAQ1KHpnegouFccK7XtFTvfSHU3Mj72AEaqD4dS7dHUsH11sBUykZvo4SgYtgAduovpdWn3EQFtqKXLTZ83YJPE",
  "key1": "3RnesfRSJTCiRBwjQdF4T9ri71hsoQJvgCccMYcNrMVvSWyirV9cjhS4ec1nsEqgGpTvktnouWfKNF15UddQYUhr",
  "key2": "3LdfQdG4fLrASFR6phjL5cbSVrPBrvTUSP5wqw6CfBBF6scpLXeoBTx99zRNHopFVdd7x9gf8o8GBg6CWV26sjmh",
  "key3": "2YgrdJo52Cb6UQLYXQeCmNk7co5wrWYWLnyoCapG5ELdegLNLMX1steu1nDV74BiZgzuQpyEf2hdKYT5H7E7S4PS",
  "key4": "383zzMVQGbvfcuUjAUvjL896sXGdesdqZ3FoF1xDsLeQnyPDZGQ8849SEqs4sUoiBwg9a1QYgrm9TJrGPQVsdXj2",
  "key5": "3xz4u1Q4ukkP6pHccAcw23r8rwLyCcitHUtcM9NMpxLSTE1DXTNswhL4xa7aAJQuj6fNm93C67jPB7KrhC64UZzE",
  "key6": "iuPub7oBSd7jNzAYgAZR8ho4r2kEJvm5DxZSP676jHY5bf1DcHhCX28fUFA2iaJ1dC7SJNfsYRpj2MEp8etmMdU",
  "key7": "2xMTXxyDwagrpsckGk9L7KbE9SCHjsMyzawa817q8xZhSFMtT1cXfqoqSGPsPjHKWV4fDFePQGFmgeTwvFzunisb",
  "key8": "5U4bbfkv3xAT7TcByfmsWBKUKHcWKSKooELcFxChwYJUFwwXjrD9cUtci2bZKVvZu6QgzJmFv6E12nVNwhy3aXRp",
  "key9": "47fDbum79UMM688cjfMAiDsXNss4nzMsH7jXMb97PFyapFGvp2wn6dsm5aKq1nfjv9jSa4cFZmcsNaJkv4EHk4WM",
  "key10": "2XgxzLBLXr3YY1VjTjPpT1HAXe8VceRPZSps3exx8BdHZec89EYP1XvL9rMvSabXzvsc23w9Tz1rN5Cdg9yQpFdu",
  "key11": "vFMsPZ537hehTYgBSDKredahSddrqk5bvhVnrTGKP7tVmWMWYsdmAn7KMDpJBJYqVZeC5hMvvoSDaPf3VkZgrdU",
  "key12": "4ry7PfLMAVsRWBDoxA5DH6NsNr5DtFRZVAqqbg8oHGPitN7mWaDg2pwCxKd56b73uNq6mmrd4uBf818WhgfYvgL3",
  "key13": "42NumVPksjy2VvKuDiJgyiZCUsxxs5MuHMWuCvdwyMGohCFH1w3DwbCxSHQyWUgSTSNPFuKjWbe1Dm7kRbGxeZoJ",
  "key14": "54UAFQzJKGa2FaKajx2Ei4Yh2oVxJ7FtMWNByubRur6SGjFbKeHYDQ2UGs1GW9Y5Uisr91WhvP4dkWRe4NJvcMAg",
  "key15": "BaegcbHvKPCEdfhWEsUghBhBfs6JQR7cgtWjgwyPPdXCmnEpk2VAcrKVuK8DRpnpoX4aLVYqnXBKzVJCK8mRF9V",
  "key16": "ff4qJoy8YsLmr7DjVRVRgfSB4YUw6AoPWdKtCvfyk8CZ9gpmuoWwRdCYynsv9MoUiXE8qVTpgwbd4B981g9q8KD",
  "key17": "PvnK6veYZzqxJDMNMqbDtwBi72BdDiuMvdyL1uF2vVRTY87JX3X4Bo1i8D7NnDdVEJX29k1vxqjPmYZBK9Ey7GE",
  "key18": "34nqXXLkXRBSV1F2QkcHuYCQ14hCYJzhfZp9VHaG5vW9n7dVK6yF83Y5EcpT145nnHSHcAhUjAxwX3xiXkfZd7tQ",
  "key19": "ZUNTVothZdt6RFJATJ1TwEMX4ZRJJz64MFvM4MzzWfaML7nbcNHtRrNzLbXzjUcME2YzWSwVvvgLrMVFKmXK1pt",
  "key20": "5Y1u9eSbyc9RU5iYWQqMR18bsGCC4ejpGicXVaaRNz5FeGDHJNvspEJ5EVNX2mQzfsWUCUHQ1rASV8ptqy3ZhyNi",
  "key21": "5jocwQy9DTBouLnSm6UFtQvcKHHC1GgKPxDzx5iK7qigPZ1oAUxXzRRZxJ7LD8TpmycHa9htDje9ymsUiigTpKkS",
  "key22": "5tsLb36eE54bwhU1Bf67ueKEfAzwvwXHYJyMLwLJ873iPQjsEwFE7iAMpxUr6dJCLnEpxAnA6ML31kH9o8byUnBQ",
  "key23": "3hsurcJWA7u3ojaSvsH2cA2QdWfrtnVFvQwhm8iNjNCMuCazoevfPqpggxdYGByFwgqxDWAFaddEGHCxuXoVjXZY",
  "key24": "3XH5JRQVZUmxi495WqbjMHjVjnTRbqbacgNTpXsfCvGLiuUaiGYRTb68CmL5vnZt7VogCoDQ2eoCkh2XmvNaGotX",
  "key25": "d65tFejnvgbhdaB2jZ5GMDXYqY2z5TQ3QjVAFbRLyEEvVf8iC1s3ZwpZTYLYDQySHe2j9SVGrmWtyTLNaDktLGu",
  "key26": "3W4vUHqCLTPc6EV9ME5CF2Mhv82enDat8vz1zhezAJakx9r33vj6fTUkMxzsXmPaWEV67GTe1GVKSHoi8yYyekaM",
  "key27": "2gLhXg3HhJBhiFbKrRf49afDCoyiC4vA2QrSFPsiKZXcyik6oH1tWeGiLbxYxizfostAUx5FDkEqrgMU1krMfXkb",
  "key28": "5AHQYj933EvSzcuVNupKxmB1p1VH5u3TCS8zTienMCvQktEc5SztebxTJF5Gg8bpT7UdULxB6qXpnBfGKFpYt7m5",
  "key29": "5nNPnSnvawrNWAmpdjVj3ZcH1Zffuc6yk3aZaW5jP77eEwvsNbxcKiHjXD6ZWehWTfV2HUqQk8sEHWwsndfE43gs",
  "key30": "2DzR3LAbRQ3Ci3vzN3iq3yVoUzwZ7QEMNd6FmuMvz2tvCqTxvWZZd41uZpD3y4jz97EaWXRzKFfEcmPP2j1uriXX",
  "key31": "2iyNR7corXDdU6eo8sPJYzMSaVpNUxts2tzw4y2Vafs5tEtacf82WCthoac4zBAbCNpsjcdpE68vs472fRaGoLB2",
  "key32": "22cgZcKeYEKVqdrs1cKyhd5vdjBoSfW3TuRg8aSSLPvwZpD53VwcrbHLFTV38Ne8XexKFUo8HD8ahWfF25GBnPQ3",
  "key33": "VoAWz313x227apzDE8eveC7ubNAL227n5rbqtfzQQbaDnikHw5fRCUp8HwSUC98maJeosY3JWbircaYsPFQkCPk",
  "key34": "22vD9TZmpMoHiLzCMatPNNnVJJeKdAaFiVeUDHNN8mLS56BWYoKtb1gErENk8DMWMFhGdwky62ku2apz42AsPWdE",
  "key35": "2DmVYr5yxTJWQB6155K1oCHXwHKMS3h5iFMiAGm6Ar4YDTUEcrn3pkwRQdGhfweh9GybkD8oYnQekPeEuBD1DQop",
  "key36": "4QMMteAVEnCykG9PFSCGvzoPJyJZcceRrggYjiFZjmpukZ1zibrzwWxxqGnxnKd2DPoiGaTw2qg1cXt3W1DopF64",
  "key37": "2rs3xyLci75RFdUS9vPD7AHcPP7c747RDjUAZqJF6mg6reVVGrGdwaxLYRvMCxiwFwL2TAFG84cEJPa9s8nck8Fy",
  "key38": "23A6gYywBj1e8isvkE4SaAu7TBdM432GjogM6ouNvgzgvFSTuLdZC9ud5ckiG3wS5BHXZeTnZF6M9tSmdmm87afv",
  "key39": "2urDSpStE1CYBrXHDoiKmw1gTNKJBh5G5zu5yPe4Fcv2LapGvLjCJyorvCuNUD21p7o5LwTpScQ76Nsk6VUuFYys",
  "key40": "5XRcjxj4K3HJjdHTu7PirGWvz3jRQS34VY7dkB9EPXCUTSL5ot5abCYufyzCuXZvGVFSpAHQzY6RNQ2j7362ViSn",
  "key41": "XFgGgNJv2NiWifuySCi33abAes9pL4NfdFr3Pqo5ouM4P5dTK34onumRc43rwfnovJ3ZukUbstjeKpZvLV423Rw",
  "key42": "2eP3J94xTmPzRwtNPZcvBjsQcDYhB1udu2SjNgojS3iLXYuZXBsKkeJfBUzTU5CBSDJg8b29xzTmABePso3sMpnc",
  "key43": "3sw1uRuaTD5aZCgPEkzjtNqA6zfyVxBfkhFNQfeUxgZq2UR7hdx1wHV7g9N19zfuD3HWt7r7TUCeSAbocfD94zHp",
  "key44": "iCbsN1swQZbmikQysQbw3CcE7gKwFmj232V1bESqBuHpGg96PGp8DXnmy5CnCJ5ViMM53ecS8HdTqT4C29gTSN3",
  "key45": "3gAJbDhrZNkfDS76d4AjbLfpvRh4qvXBWZg8BbyW3SA9BMzj3zQkD4bFWnVsFqCuWxBqN7bLvKAj7ZsRDmdozas5",
  "key46": "X71NTnKoJWntqAksrMGH1ikgoUSBo12reJ3jEiG35mJXsiVqe8iVpPFiVNiR7QkiaQyiLUqb8Jd3WSUxBBZqitu",
  "key47": "2LWFD1avMAkWSrVAgZZKRc73FwLNxfHmjxjuuRXnsn1bhjKsGZofnsNRnE6B2n8QSPwMXzQdFhb2H3eRiZ3i8qVX",
  "key48": "5QG7VX553kdKWXeLoBgPZAbmsVFxSgDSunNedfmXcFAK7QQAWPkeC77TsmoWpVDPD6MH4JpwUvgSs29CwWxKMsuN",
  "key49": "22iw4XABFtPowwy1wfYyD4KMd4U7dHuYBqv1PRrSZrwnbbtWMZyQgN3wzMsy6y9Pm6p7DwnkcBdnHg2FttAiMn8G"
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
