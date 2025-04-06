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
    "5xiRUcLtbynb5iVHTMXDQ8hBhynUkPwGV3nFuKyc3QyoevH5e55hSTK5Tn6Hg9UQYuVFvq721ZJYcABU7baq3gwM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NWoU2qgfDSf2BpBdawuK4NRreMHVSyZvz9UUJEX2GKs6neDXg8WZAeBSNtt9D5i3548LgxLqcskYA1acqTrtVp1",
  "key1": "4By7TNnbEgDnzbs2UWKamtNwpQ67mAbv6swaBuTdB7snVUrbPxG83M4wWhcD1ZBEXG29AvWqrrec17VteygAQDQF",
  "key2": "4RP2EjY5jnMSudpKYhLY85Ay8gP1Lfx4hE2R5YcCbc4aGHD7td7n3Y2qcX47vgfQzUCvYGQbAbDJwQnxcsvcxeSj",
  "key3": "48S7kQ26ga7pU11HmdMuSB7co6tRJVJXt77vkP3nPMCei4YwaBBGnCq6cMaQHaBDtdoZVFBzcoY573m8cVHeM5ZA",
  "key4": "3rXQmVMtX7ac59X5b1Z9ezeWd4Pg4iDHe3Trf5VRB3UPjFt32BUCoMGENxHSjoRwQVEGze5CajoGDYFa4T3hc62",
  "key5": "546W1a9HgL54BJ5JqFfQ13Rq2sPP7e3Wz3WRzKFLW2rDN4U7peg9L9xUTjE1dnPn1hkZMnf2wLzaNDfJ44PjQQ5f",
  "key6": "59pZNct6izmauEjtPgU7P2kNP6omPnnzGfTuUq57CRycGKvHvdkmYy9t7CDeyaE3zYagC5Ap5CFW1MUsie43keJj",
  "key7": "3jB6EuyHdUx68noP54C6XGVeCjSEWwUsZBJrftXPf3EhiY7spGvtBDj2mswzPu21oZzRE5GSc3FPtT6bArxSiJBT",
  "key8": "42652L5CiZDuc7TudGHxicDjGAJuWxYm5NpBwLtYsCFFRW7EMjgoMYpuGmzT4a4znFUMEhL9dEgVGBTTyGsjKm6S",
  "key9": "YGgcdhQ7APypBmMs54XyQHwn44UjayDYwmCTuoebZgfAXu5rAhDLN5f6mpTDGTRamNWKD1d2oJyj8JUzgEmAvTc",
  "key10": "3BaF7hbL11BVvEZd3ES3BZrje2vPqpy6F2juBPHjMM6SMK6XuGbSGL96tqEjkxiz7wnD7poTU1YueiaH5rA57pGj",
  "key11": "HrCuK3wLhRTN6bbuiJV6At1RKHmNqgVxzcsq58DdZU3A1c1M8d6K1M561mYxjsQYoEChQdUA4bDvm7rmkozLWdN",
  "key12": "C28aPYAwVZfmN8yQMowjvRqrGsW4swz5bZgsUSBqeFLD3HBeTHRXzMCr5S15UKCW9chTdiS4VphbrWXfA3GQuwp",
  "key13": "3q9f7AkQnsZgf92Vbe1an88CzKTxx6ZFB7Y3vwX9vP2KNwd4R4YhBKy7gNYSWgoN8K5vkZ4ENHjFxU2FQTLXS3GV",
  "key14": "2JA7KjunoNz6g4UazZCLA1YtxNfLzNtgeHrVDxkcAc1YQc2x42on42wrMeow3SdiQtFTgLnm7repn3VDp97Q2113",
  "key15": "37xPKdjCq1abF5nXZGc4jcDSrNUDPWuoDEmcEJujdj3f2Bp8NAfYroQkBaWQgfxrSFRMSS7hW1QEo1X1rN1BMuXy",
  "key16": "JYJ9HYhKoLGtwbDmH2XPNeob9ZtS7RABQc3rxCRfCw91tmiXLSQ4vfrd1ZFcZS257XUHyBZ3ee4URHmMwWm5hDu",
  "key17": "4PS3Uq6DvxuptDTMAuPLWuiGYwBjZG9yNVABiLNcd1BjbjQCppWNDEpKpAotz8B34SNe1Y1YuEgCWiZbPk21vEMV",
  "key18": "56zTNv1mZpZ5PyZ2vHHRMqrP1zyemnfiAyiXV3Jwd65iUjXv122K3xuXJUF7zfu5WHHRw6bTW78WB5EACJxVCou5",
  "key19": "aydBwUMN2X1HzVeNoRYPWa7XBSUwBZ6bjsFPzwXirCULwv6GaGeUTaStySRLtHbkgenMydrY1BGGmMaSpJYi2CY",
  "key20": "TEBVuy6RSjVqy32n77G9ZyKmK94RiNk3q5oQRLeexoCPdR58BaxckoXB9u4q2AEhicptbRBiaS7JLcLet4ZURtT",
  "key21": "XRVtJWQmbNiBg1Y1arbmuXP3dVrgPsNGNwh1QiDn2MwxmKVwgnfL6Ebvdm6i2gvYY5tzHdaeLRbuYP6JrVbcb1U",
  "key22": "5K2nf2LxKbjSU2iURfrdHjXmGZWqvaGnw54Da8wPCMpDMA6bF5WNMdu6RYukeZCQx4dQ3mtBcdfa9ZD5nMdpV5B3",
  "key23": "2iaSM8b1vGsw8LhUQsACAGoEYS6ZatWnjhfxvZocce49cXEVVdY8kkZupsdiYkyxfeu6RBmyHppqJrMzy8cB93W6",
  "key24": "fgRWbGxSvfZpMeuAvyGVqJLPxNTVgQ7m6CiLcBm5vA5Z9S9waLijj5utFRyygjzJ6cPcFg86V82GTKffd69qNyi",
  "key25": "5zCAfCCJyGcnEUcbfKFhzuzyF2VhSEzvif59sNA2GcPBNV4QZhDQ5zTQR8fL6ZKSFskMGRCagxMf65V16mQPYieh",
  "key26": "45amgKcrHaE5tyHkd8q2XRKXbBvzf1fz7auAwBPUQsjUWd7JE3Nep2vMx4jKkZN23W1fxpsZurPenhZPVAKL4yy6",
  "key27": "55QBXn7Cq3f6b3fryMjdau1agBcAGvNmwDmmznGx92obpFWEwVXrSGUN5ewW47WpCLfC6RGphGv2R1pHPHfjGaRF",
  "key28": "3keKSwkkVa5VKEAyUTHyqW5VYU7KYmyRCCTvUxo8FkKfRmqRMpK9F1LDPkumuzcnSJMomgeVTJ8GAWeuPiDzR63i",
  "key29": "5LcgXpZ1oryVmNjfCj5HvWMLX1RxLSXpyLhDkvpoHWgr28SGRxWqjW2ps5h7YmBPqQxj8vY4TensWg12a3QKDUvP",
  "key30": "2C6sbmt6ginbPnBcESCRwuTuhqGr3vExJgbnC3hGvBXStemZxP1p7NJFyH5p7588YUrkiZ2gEVyVa62XYNX2g1Vq",
  "key31": "3HB5vuFVZrgYUZro7QgCV2qQjihZbCrRXFMDaAAng2Lq1iTtDhnoC35C2KBBDi4kaPiTA1SSiMTxryvNssNAwjGQ"
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
