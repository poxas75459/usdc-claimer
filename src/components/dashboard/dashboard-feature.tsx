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
    "2ZxSkPFBZ15gN263VvdmwBN2sks91LRCNL6bPc3MChFMcQBnCyPPHECRLsqbWnGMjfFs6pEswFMHqF6FDMct27of"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LB8b7wMV5HqAFR6mQwPDtC3FzXFkoYFYf2HttrnVWeoEX9RAqBE2KBZgDrQepaYVyZAYcE3UHqevH9o6dEGMzvU",
  "key1": "5QRH1bJVB5bugZShe5rKvGAfhSnwSaJiaFz1C7Y2XySg9sENGDfVi7rVd1bt48aFYEboXtEJJfbANsYJaUDZRQGV",
  "key2": "zs3JiXtKKSTT5vG4veah8mAbuEPoph96ytmCofzwNx8iCgSBVGkdi62VG2gnhNt4Tcqcst5YrTN26hP1sSS7XUo",
  "key3": "5UM2zD61ykYVmtGJEqzHCXawUVEqRRWXrxAMkLCd2M332T1zsRfnogzjWkZkU5ahv2aK4YaCHSjMkKCdWvJqtuun",
  "key4": "5VHDTayBYLdHRsLMNHdD4iRfGXuMoRk5upPp4tRKkuAD9KrkDmy8DgJDKYiQdffbb4fgstpMcsZFFxn9XtrAXBSF",
  "key5": "2aujk28x5KtrDiyGsBKFaU98jP21aiPfTchGEkp6ndZr86sXPzYxgjEaLRMrweqTfUszGKDjFP9QdsG9HVCtwrjc",
  "key6": "4PxrVQHzeoBsXDBUuahzcBSEXcCvNohd1y14Cf4fydbXtuRpDSLEuBkCGsJ21oPgFtS2Dx3anQnhbrtYafJMRW3P",
  "key7": "62KJmiN7h5E5hGWNJTtFc888656b8uwQvQPGemXSfZGMig4UgWpeDs2bs5S6DExJ4ELSVmCU6BPbwoSDMmQauXT4",
  "key8": "2rtyKibN8hYBsQSKcDd3r6vsXczURGmRaocZEno7rTVK1tGmEMDrJUxAqo19KQuoXMQFhaPH5VBE4ztSQsMx6ahK",
  "key9": "Ui4RMsLiPHC5MPhxCxzN2wPYM2TKZiqRyjmptx3M8zZHnwD1enECgynMEuWEWBYAfqksWfZMtqSP7rUq87zKzzo",
  "key10": "33vWEMMrvA2hjwttb3wsCNT8yKHcwNDLwHC2RB1NsnwABzJwmJqogWWfY5qxzfs1eTmaJ591YZcETPnfppDUhxBD",
  "key11": "4B2Ad48fye8xvuE7idsDmopEG1J45zQcHFB7CSvdHyrXHmzYYzHvY3W7iTGtk6YQMLeHirRExkniuSU7W6UJK8aR",
  "key12": "3yvgZDiMSGQfaNrec5A35RHRtsuraQSPPt68zb8dbjiJzv4fsjCSDS2cStju4sPEHeLpo7VBZB3NYcugQPskPxMU",
  "key13": "31ii9M9W9rbX91CughgdMkhNoVfaFG3ASbJRMxTY5NJepvw1FYj5hHE871QeUsFVmCnypzWKURhYgEJT96qsstkL",
  "key14": "2EKZZbkWjMFrAMqFtSPE2FBUx86qZSHXW1fkLcugjXAoPkoaEwVfq8WrdLhkinRjPmn89xknX7xktPyHdnh4otYG",
  "key15": "3ujPgVdqwnjEY3tAShowpGf1DdaxYAfSnbvg85hi3E2m765x3LCBh2zQueTPfvx2BXrQvQr8e3Mr2hXffXUzwZoa",
  "key16": "29zNiNx78UaBnb1sAFm3EriLhLeWjSfRu3yrN2uu83K3ihqjbMax4Xgfz5EfJJUkzYrxCvERh5TD7LGn8FRe3M8e",
  "key17": "5jxxbSrr16bx8hQwMhtuC6fw4nznCtWnCyk4U6avMpEnmufAnTkP4Bc8fBEpFReFk4QzgwiTihQmFemtBbexgeqE",
  "key18": "4oS1fCNM6nH6YCkgsMVTeywdXHToyQaUciXDgSdHHr7BiiKteD8g4LmGnpqGLpjf794LLXzwfG8R1JeTHFPr2LVE",
  "key19": "4macnEua6z7Zg59aRGxMrkrdAygPRTRRK3einnXwAJLBLRYsHvARKMJLpRMSGCryGSGW358crmP18ZufaF2KXG54",
  "key20": "NAi4jz62mKwpMy6JfxPUaztixLkrYi8EDYdkQ6M61spMJAZXkZvyZc4Y2ZxNwvJ16ZK3VvAgFD2zLPhQgtz96j1",
  "key21": "5UhBayiZeRJTpuRGcMweyDMsqejeRrdVfd5HyMVijudhmaZum8efrTgk1cs4M5dZv8QpRGiiPv9Q3ZPDccYsshzn",
  "key22": "5iu17SjRGXZ9tEfyaCvwDPsrpNetD52z5hSCbcCgaFopxufMLCabyXhNHRRTDCopHmdxBBLCepNwn6neLF1ohwgz",
  "key23": "26zkDHN8DSPn46DrTZHeb8c7U1uRpVr8mvEgQUEGMckRTfAaf1h2Zu4LrRgT5atFmXm8X6ig5Ev1nG1arQLfTkoh",
  "key24": "2dWTp1MzWgQysYaemtBxHvicR7RE51Tz6PJeNoyAdWVKqXqv49rZK8KDPjCEG85dEvLmjjRzS1xGPRFLTTdfMUeR",
  "key25": "2VMW8QtP1zgV8EA6Vy27y53PaMbv9tfwtWAC7zGntfneBNA4Jnkfb9XCbZ6PFVyBZgFwhmQLxETCsYndSUuczkWm",
  "key26": "4YY6zembvPrtV9a7bEeFWsihucrY5wt8WmfR8K8Bn1mb3xu7GoiKADHY2v2f7MBFRJHsB87vSCAgd2SV4GKzQuPT",
  "key27": "4s5YXTgpi3YfqbEimNoEuiiH8fiYwpRYhBRXykPf5YuTMKdAModJgC26Th8GKtiAyLyLT2wzRFNCCS6vZ5moJUvh",
  "key28": "4z8BsURmpm2TWD35HXSnXvp1pFEeoaTQ1opkLiMutc9k4tgk9HkzGraxCTdzpxoSi2rq5JvcqFViJWMTrB8Aabd6",
  "key29": "TpSSvSRHtJVLF4VpQoGnwqzUFG4gWNk4B7H9f5QnQuKSMZyGVJwNuu98r42EjvkYHWcMxSnmHpUg1fwmWbrdfHi",
  "key30": "2MDr6NkYzS91gwxvnvT8hQickMG8FkPL2dixiN2WCkm7sy9PmVzodTAVBNQcQQS1hdRuFpszSjG9VqiDwBVWU33J",
  "key31": "636GkxRY3eumJ62rnJ529GRaZt9rRFKuajq7xpoWnag5hv5yQ5WPgsrbLN2TVTYawSvj2MWanxXxDAqvpL7Qn2xM",
  "key32": "2FxZeWRMdiWTYFyLQqgu7jFh5w5XFY29TAnqNHGJcScGEjynjTZcvV9fe8ADcGRbH6p1zKYkgkPRs46SGufFLBjd",
  "key33": "3zEueA2NKhLLmLpQCDcTgpH7auDCYerZnvUZaJiCsvTm5c3mPJS3aZGry5DYvWMpca4Tt8mSRvVcLVLzUtBWBpUs",
  "key34": "56mT4rFgUwEUeWX6RxEeeHvyakjzxAAmaEddKMDCx6iKCW7MhjNXyy3ipSP3EruqXZsYrhJEFfVYaMDhowjkLioH",
  "key35": "4xqLw5Z6VZHc2F47r99pjG83TvsS71dGtPBcpnugZ6U7NoyJJMWMHW2Qxky3H7dkrQ4brGngHCdXAi15ZNxtm2fF",
  "key36": "65UvJbJzMrCZBCLqKyNMkDDm5LFf2QTUFdAqmuKqB3TPVbN5DcvktuJXWXJPz7tkj2Gd5hNfAnhKuBGc7imcMdVz",
  "key37": "5LmMYx67Z8oiQasqRADhwK5xsXg9i4guU5rNLBXz9fhUxEVWSqMJ7p61K1z7UEZ6nuz7HKpjB4PZN5tHxowWzdXH",
  "key38": "5Cd9TVNno1B9XeEPJ2u3Kck1ak8GKAedTTxnrp2zWiKCzGiofWwwSZXvf12sjNBnjzshqfXz7iFpFXjt2PFpQPxP",
  "key39": "3RjqHv6AtXXMZsT6c3hWrbzRepoSEKtJSsQgFyQL2b3gfndRswJpFomaxbkv3i8FLU1dMLb6qL5YWtQy8mMSk55j",
  "key40": "455VE4Dst3BeaJjq6fhGBDg4BqWNo6PbnVgQpny5Hf38CGFMMzozNPRGofpFWn9Fq5WMASwnxkPT8Jn7R4uFt1p",
  "key41": "5gArbdfr37aPkSHD8nNxZznDoaTGAq5JagdQrUZSfoawTbZocy1NtWXtkunBVTiiPuYdzA1hSx5R7rD5tsxhmqYN",
  "key42": "3N53sqQH94AiFUwFN8VZXMQgYHSjCPC3AHxoU3uVSHsapACfaJuS6vVkziqfHmw8ur38oCwhyNGWkHQ8Gt4eCWDW",
  "key43": "5me9gdwpNwccccCmM71aUBw5AGmNQ7Zv5AvpcjqkjeM7mnPDmvTHodZcxEAjiwzpqrNwteP8GW9jqTFNVYdm1ZRX",
  "key44": "36RoHzd1EQZyonGZUvBfSfdxtFN8q5gWaXWWAonkj5MoevKWsGVR3jk24kZZjET4bFCKMCy6HUWHowMCpkVBrBHz"
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
