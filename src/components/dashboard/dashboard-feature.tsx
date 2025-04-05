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
    "2cKbTyq9uZNT35AarVm7dThjXEfo1SQf7W9mYUfqy6wGp4mu85XdpNnjmuo8zDLZ4eBu28S8B84hPrVbtfp9scva"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m981EBTiSPQR4q8MDMKx1BFbDyavX3jo4R9owaMBGz8Sr5nCPmaSWAT2eTogyMdGFm1ptMEiYc8RRUNoYka4WKA",
  "key1": "5dhoZnNSSG3rsCGP6MYfhmG4uAyLtaemCT2Su16R9pmXKZCB8Nbsq1c13i5UuLQtMVJRuuG8DqfCbu954c9Axqgk",
  "key2": "2Uhi7XhRSfzjYK86hT5YHCCrfR7TaJSxvFCNYShT6i3U4WEQqwyVs37SBDKPNXwFfgExNJZikggDFmDw4dmNd2mU",
  "key3": "2VGahWZg9sdEniSuMS34p2SbSQtker2zNnZVoiZ23hTTV2zpmFC61EjqZ88o91GwYSg34fHQ8b66er1NJx7QvBWE",
  "key4": "arbeJKcBEcYaBHr5WK8SFBHKmppPa1onxWa4HMhaLyaRSuxku1j841gDqqaM9qtr3sNufmJcmVSHXZvDemPR9ko",
  "key5": "2MD26gk6bTmgJdhvQG6VZLL7Xd74Rq75icTMLh1NLBrxAZVjjWLjWBzGDGimb6EcetWEfWtkPMJDDeLGkgvae2Fk",
  "key6": "5RZnSsUtQLPKVBvrNRtNsiaLzAFbbjXjzzKp59mnMd2hcQb9gVSRTg9gHt7KuWaC6Dg7cF5XrhYpTgMTedCWqH5C",
  "key7": "4yjeFGuLZ9JtjNG4GSgt6hUW3JFA9q7rjbsuAps6u4X15pVxataHYmMu54wTifDrS15ZaGAaCYP8xVNGAUQo7mra",
  "key8": "32FDx1icUJ1hwKGJ1pU1weboBVUAc2nPb45umTVBzMKQNTDkqPDWiUNEGwZqjfRznqiwAWWtKb7pJEQ4AQkm7hYk",
  "key9": "3cKMN7Xpu5MhPMiZB4W1Gyqx61VWoFK2M7hDhP5mrTG7jYFisTcdshfgBJsS4CRVwkZYiZ8Cpv1B7vRxXCmg5EWr",
  "key10": "2VnJ132FemZLVk1ygv4Hr6LGUcF569AciMqJUh5BzirD7uExMCDSUWXk3EDSzP4AD3LjNExaQqN2an8QUphzu8XE",
  "key11": "21epDEjmdf4Ps78TSYJLKk9SAyLrqMirPhm4Nnq4USbuN4Fx9wEVuaxsApACoX6bz6u7iVXHTzAKK4CN6wNTwJqW",
  "key12": "2PGxqpARH6DH13BrbjopwRXGGDHv6NSgoDhTG3Hm2UDC4MeCufN6PLSiuTziewUAEoTULQ9q95h7qdTpVa54vZkB",
  "key13": "3bjzMBbYjubuYQ2NQUvsFRJyJMj5QUuDETnvDx8n5M7tpfMJmLdGpdxMfje7ChvqSNxMXJ1f6xqL9boGSpK7VW6A",
  "key14": "2g3vGLFL5MwGhmNLaMtALfZ6CVeYdf99uwFCEP9FovEhwTy1wKm5moubfcdrTAPiSjToTk428HLrHjJTdiYkxWXL",
  "key15": "W9uZRuxqPmtwer6eEMpgTTr8QsaSoRCLcGSdF15Z8aFduU4XQKYKk4Adbk5mBXSMacjSsWkSVKPwDPgwzAF67mk",
  "key16": "2KtpSr9HBWTgM8z4GvqYA28yB2gEvRVhXgKtUbFxHQVmwkRDDcfpHYdq1ojzkhbscrYgCCYWWqEjhjnSMjwZVzj",
  "key17": "2cFjfCAhk8nqnPZ6M1SkynGywmDuPj7EEB5givG6VWGCrKxGun3XC7XdqM9pSaMXeMVpigi6RirPqiSMmvgCJkHs",
  "key18": "5n4Y3z8Mmj16SRKSR3fqszXovXiJonu7XBR3QJy3GYZtHoU7DpHTECe8QgegchZZWWdupyr8q8Cv7kMqHyfL8jKG",
  "key19": "UW8GxvGpN8bgWM5LGMUdGoGEhycWL4nNawBK2WrwiGZZQKGTWkqVC4QRAWUczkkBt15UkkRTFrK7wohyz3hgR88",
  "key20": "2A6ttzyJw6iPrGz9EaY8DJq9VkCbXXahmV3bAkbSVrfoDrg62fVCcem8apizxEyJZ4RMDL9hW2vtnt4tamhahqBA",
  "key21": "52FNGm13CoPT62A75PyqabZMxTS6JyksfQpW38Tm4qzvH3oj6PASiTjsyU6v4TctmCsaUnD2XdBWiSqvAUFWY1Ho",
  "key22": "5TAfRW9m6WGBrLABzP64bFVKGGo1LNcMq68EmMcbdTzT5SPrAab1XoLEYyhoMhx2QBFi9UMxqbEceXgwQMjb7V7b",
  "key23": "22Db4bKfEFAhjEnRYLQhjFnZn12knax1GPDE6spA6CoY6hrVQr8NnSN1GXUwCd98RuLyALs9dA9gMQE6HU4P29Z1",
  "key24": "2XL6iG1HCKbwG7xW89Xccpowdjirne7P65FRsmJDgqqpBMCy4MLxmtxLzsEaw9oobo8gWCKguiXZBdLueWdJoR6R",
  "key25": "5WVKRJbf6gWo3wBNDg3NdYxcey7qBftPUEfB2jZTDHcfRn22V52bH7DEVBQHJ7pXtu7h5U1A9epmU743VNoV4UBF",
  "key26": "2PV26ruu8CYhjrFFYMXR66HAZv9cvBTpZcQQDTPifqCjJmz3T6YPS6vnM2CUz1GxdnUu4xWa3Kv3WETxdSgpHsgd",
  "key27": "4bJWDTi8kN2FMtadvzA86zkQ2vxVU3DH8RAN6cVEqWK2F9ZiRkgFPKLvVwm6N8T3n4CQtUsBTAciQihHkPR52RdR",
  "key28": "32rTCZCyak5jg6ebzLvtJwdqi1NzP9RM77ncBatHFAnAs2HpXQqkPBP2mh8b9r6q4DuHKbCGF8YyYHXYCYMuFUPo",
  "key29": "4KYJJjaWXVJHRCjXK5j9bqspz1z9d4bQorCMW5LXrgmN5Lri7cjrHmPjaXvCmxrVJP42mcuNXEedXiSxmrpHtDJY",
  "key30": "5UtSKtqufNGDmX8bBibjiZjjzNJLF62JU9kr8PkNDmBzJzT2B9qV9QiewQMdsd9z7yY3fP4yWrdsL3exDGaXAXQp",
  "key31": "3JmGfWjeJtkmzvbF2K8FhnusJb5CXJGVid9BbnjmNWC4GX92utXKksGicMsEYJreeBR939zpBTXYE2u1vCdS2hDH",
  "key32": "5vJdw1ioFgo9GnAeb3NE9yJoM15jcLkZgD83MLUcFsCfjo7iNQNXK63BuxPkUQthP4HQJoZSKqkDA7Tqc2gJZCSU",
  "key33": "4BT3gqR7jgyisqef6aF1imdNJ8Tdn2C4PkaRQJgAC6PaTHfwPhYVEJgzKMY6TdazuGhERndLE5EEs45EGBTRp2Ck",
  "key34": "3zg154CQBCWeYQ2K1Dsyw32Fn8PJgCL1VqCzcmWqh7Yaiv8biS9EFHPRRxyDLQxUScPv9kuYjN5mqEiE8seT3ryK",
  "key35": "231yYkvd6TaHn7Uu1wxJCGJK5aVAtRZayGmgsXhCQFwrwJa5pZzwFEBS8VxbvKZQdWwxPBFwSvThaK74vTgqdDn4",
  "key36": "5ci3DniQc7d5ZYSBcPGcs4vtkZERWtgZsTy7s13Qo4prV5GXZJAQb5na3ZCNRVDhWRwYBAPSfQU6A8BCupvPCKYA",
  "key37": "5QS9Ptdc81TGmjf5usbCFXVSS4hXaax78GbCEESVomtmZjwHkb7B1WaV4aggUmq2yZxoo4pd8EymLDbyLCpiTtTs",
  "key38": "VuhYbRbZxR7Z4bFLS52iUP3w4d82wQetxNepsFjaGuQPNV84GBsnLaVUCcXPcSdjvVaby4mFrLsRsSnzRKF4eBy",
  "key39": "4R72D4XVpeAJ23RaVG77yHd8xZFhEeXkSynuKGWungnjnJwyMXVCXkA2vnr3KH1WREyrenoNRBrg9QuEUeDrJzpu",
  "key40": "4tcZkaUmzVGMnjPyhPzmVKjY1aB9VApcwnr7SvSBQqpDMSZPgsR1tCXudDcPDTxFzx7ghgCJgr9AkEeWPLUf6efi",
  "key41": "4qhvkMJHj9s2crdqAhfAudTs9zNcGCiH615yCQ5Nwvryd54okLSPDxc5iiUcYRALw9oRwjLRiNZRvqbeHdmNeTre",
  "key42": "2V13JPUYGLjfVbfvoem8RZoecD9tJXk3w6VYB6AEF8ge6yYLMAcRYdmsdpJukVtmKDgVcDDUYKmobNShJ5RikVGY",
  "key43": "5znnWuNCkRQoEbumHyGf4i8kqYnb89JigHqGEbMahxv1YTbRocm4TwvuZfrsoT4uLjWoVJr9Q9Lp6vvYGcE4xWuH"
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
