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
    "5E3ZLNjKsxWGHjuER9woxh43n2zfmM8taTZ96RUxzTbkaRWMgQ9GgjgZzszcM1qA3Jb9cLriyfSX6UMdpi6rAYt3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x3QKy5QkDjT5gEwCEjXzhTihDivyZgvq5R6hV42cTxur3mYniqKb39xsfbcx79EHpocFzm6J6May6PUQMU3Hspp",
  "key1": "3THTM4gM3eo35ysYucXxKL1RFd1bjJd3ST6gvJmEXW2CMZx1SPUwy1ev8BzHb6ttYAdZNbv5ivSLBaifLrhXNU3i",
  "key2": "4jT2ZAoqPsC7BC8DH4sjHCkm6anWo2raKZDcghqmugUvEihoqST2WQv4E2RdTjbXsLoymdFyFxqyN1EzLrBLQdn6",
  "key3": "3uUH3px3MC1FskmZBg5ypWHsP4vqCq9TQG4wPrq7bPvBzdji8oqZLY2k3UoJp3da6H72zGp5FBEioxyV6wjyEih4",
  "key4": "2Ay7ayy2ENyS85vVrk68FC4KJkhs6HzjBehW65ApvSDEfpRXaqd1Z1NwLbQBesgJiMPBExcVnoT3Mkmpz5kkaokx",
  "key5": "KG4GysBrXgADRJgJB7t8rizakMZiUsDFzhegarfryqyeuQKAC8NuQ3Qx7zApsKownEfDA2dVMCdZjbyf3MNJVd3",
  "key6": "ZxJPAHaKpfLXFtqA1f6HKd6kppL7vTuA3dTHmrrNovJEiPpEPrWDGUjSgENUmgv3GwpzHnLGfHK2yGfFCTNTS61",
  "key7": "R7E57Z9wFxwFDeey6eN9xbiVnoVcdUwoxaKFUsWV5YbmmLcTBNy8AD2ghKRTu53Et3Fht2HrYFNUdhx2GbivMEA",
  "key8": "6Qg18pVPUuGW8GJMVzJTnugRhxfbX6jAsnPPwuGfktrTaytscm1RbrefMabDCUaY2zNA4XXAV1qLBtXnfS2hj1w",
  "key9": "3cA4AH4sSzZzbMtEakQndAqiwk9zvdntTFW3UcY8qpjCwyFdNDUiZLdkFLC977XUrWxshjDVoUK21H1A8zgKSkWd",
  "key10": "4gXPMJKwCzmSA8FaD1W6gGUJuqCqkVouDX15UBMgE1cTpKpVU4mMx2JFhQ4do86mvz1PgEuWu6N5ZbB42FUAd6Dt",
  "key11": "5TSwGhVqJnqoZSzyMPbb1uze62sv6TENCFK5FKG2wmX5KxVZj6bdXQHzesroNDwosMKbmc9JHAv6sSmTeCXDcQLK",
  "key12": "4FbQoWuTP7d8CgHwRjaKwBMuDyJGKvqizaV1Xn8tidXvkYRBVr8WTGN1Sjk3BtnzKetidtgHfxMLZ73SsBLmXcsA",
  "key13": "2PFEWgAcaY7hs3Cf7pMYtnEsY3cot7KnfJYdLqMW2yhmi8QCnYfviJiLnhMVqYY1jkGAiKspUYAcgarpAogs6whr",
  "key14": "2M9vdNe6rteMvuydmsxDxBf8HtNuQyNrmaJ1jJTbSrwBV9qdF7dFPnJzYgC7rSp8MiUXGbYLNxYBsGgfe29npJoG",
  "key15": "2GDSqeGZ8AKsH4VtcdPTR1VaLuG2j8h3HsYvHFT8Pd9ofTn7sx9ArbHgKsk2tBPeuFDqYWqw168gq6ZnWSA8WTmu",
  "key16": "FTcwvbyKZcdRP3ftuP6ouyPPkxwyH7DXS18LNty4ySSu9LNQi3V225oQXcyvXVsQdqHmRF386nxRZra7VuUv75V",
  "key17": "65ohRrARdqDtkMhyXLazWqgz6ZJRae8Ki7upsqYXjrs4teytjE9PoLYvp92nbNBWbetajzFRZy9vXZHcX5AKYBQx",
  "key18": "akxEXAjq3i3nNpDpQEz7gEYSibDrq8WdKwmysHEQNcu8FVNeQWqYfTSbUrQiEV2un2H2wmS8B3Xf2mJFjuEDu9o",
  "key19": "Rvp83vpTpzDxm24HzF64BPWGqDpQ6ErhUM92Q8bGZFPBzJn4krhSSHw12v82eRmsioVRpQ8umhCK5ugu3BkYhTY",
  "key20": "5C2DZXmFUTjVqmzK4jXo9wgFsSHbtrYT2v5ndQ2rg47xPcYSBakuigZSPToaWBRmSNBycydycHBhJTGRwxFU4fT4",
  "key21": "3DSyiWccNhtuWKnvyiquL1JMikAFVA9pTJe1x3pvx8Y7JcBBRmvAen4UTZupndZPSrGAwLuvPfj2QLUoVu4t8ARb",
  "key22": "58WJUxo5Dogqe9fNncd7WBVcyXE1cXNoWFB1AWmLDcH67ZbdRx8z9Dv1J9utQAyQwJXpLm8V3tmKChiBMbr3GasH",
  "key23": "4eEeUU7UmV3Sype4St6TeAnJWFL1X1hQ1AeevYH8tVN7oWSwHA691KE84XJCzPfRZRo9tkrGUFuBq6bfpBEZHgCu",
  "key24": "3QfiboBweVm58NXsbRRtqCfYMHWNZYfZC8hnxZBeZXTroVBdS8cGYNrudt8zk7uqY5oDUxrf7BCvyfXWnWRzZpRm",
  "key25": "3vmq4AEFP3ReEGA2hNLVMK8yinTn1k37FjpFVXUqqNa4URKfwHeMiYsErQU1R9GrYXBq4heB1BNU8EDsggMitda",
  "key26": "2i4kGyDxEZqR47FG4xmYTxd63E3qbWehoKMiurVqQ21Rofgh8KYM3VYpG2aMkxnEF2UVVp3Mmac5tn8MAPbY1sEF",
  "key27": "TqJtfT1XjUqs4N1zZNUi5pqEXcBosaeoDNTevq13q9roLErCqj9oEEFxAtWq3eFWBVokvaQj6ZDEAMkvNSe8eXb",
  "key28": "3XwzKbPoDxghVdSs6bTgXPQzUidyVG5jkLaYXH12oAsc5XBqRsymMNgn9jkSEZ1KNwzj4mzzYijHWt7Qum1V5173",
  "key29": "3KKqaaScG4iG8wj7PPrVNwLx4T1Bqz7iCHaHER8xz9soBaat6jgD9MqY18HY4WE37vQsZzXYZP71mK5hKJ1jWcKb",
  "key30": "5sYSKLkZnoj8xP5Pep7PbmgweBpcKmRDf2u3gjLA287K3vDwxroU25F5WWxaBUEN7MUXz7eZGvrjXDX5ricZRrFz",
  "key31": "5arGTTkRKFbFTh4vhaKEtfqDcTGVSPoVENUM3gCdm5NVJ2QVctCdy2EdLUvc99a9jfycSRmMYrJpDkw6RKBmhYwV",
  "key32": "3LJ4BfGWureURC8iT6XyPNv3grhV4Q7XdWCzPqh2vho3FvBSQLYRqTxyeXb3NB7S4iNJnHUt6NoWwZjCBvpZeFPZ",
  "key33": "4Q2LmF5KXpMT2cRV91jKs7hafpdn3FKWFFQsxLeTvUenu5jX25mJbd9FYPFHgQCAfc2qiLQtbLRbsgDpRceaFeJM",
  "key34": "3n435qPLaUkC2jBf8jbx98eawJmq9FJ9maoLhQA73fmJBDWKpXGQXsQf8Ba7sh7qYFanLpBRp37KTj7GphSjBmJ9",
  "key35": "mLUW86bj4uwNdCHxAz8SiwBJZjNg7pjrtD41Dn4RNDsToJe92c8C4Px9tJ7kvNGfib6ZpgFArGuofhgyjaZRqwd",
  "key36": "3avgmPSEX17Gu41ds5MqW8bPwdshrxHLXv2kcRiSFXqS5xjVE6nQ5BWdB7fNHiFwbScDpgSMJds3boSkQ3pS1Tsz",
  "key37": "4p8sGXoR88sjEwtLsxFw4RTcvRk8d5EN9BzJMcRg6yjuPwS9i2gRMQt7YFZbcowJkUGYVnoY66gdXPjCm4YrpKBT",
  "key38": "275FXqNsUTb6XXx9QeoGHeLJrxCj7yPGgccWcbWtFbpW9gZckLRJC87R91V8PPPnqZax1oxwqZyuyzD5RwupY3Pg",
  "key39": "m7tmkPJVy7DhvxgtFqvKVbksqwiVRpFsUJ2WkSwxzAVULiA9nRZDp9remuVjLvWyrGSMNcCsxbwcVF3tvfnHsCP",
  "key40": "5Cy2myTPNfiwD61CgtvLhmTFpgByhs3pWKs2twUmPsKSooqCvpvBffvosVy4Ag7uoE82eHjUmGdztevPiQPKXanr",
  "key41": "avNjRUGDmjwZA82ThpKXSJjMu9PmC7AyAuosVPjX5QWC1ZUibG8YLBA1ETuyRTbV4BsssGkDuqaAMWom6CwaSQu",
  "key42": "5ZSv7uagArBDdLP19q4R9fbsrsja7sn1H29Eq9VtN5j5GLFwJxLfLXGRfKgy16utAUvrLbCDfokb8MbTTPZELW2W",
  "key43": "2sRTA7rSrhwK6xVXSwvWUCBmKcgyn8gwa6R5gL6y1t3JyRLkMLDVG5BMKeaRpL7AhqYsyoe9FprUnchwAMtNm2jM",
  "key44": "3aSy2ZGhGF5sdaW2DqchXsUM28Tu4aAkgViVsFMEzRfjySX6aCZNoSscnsBHkFLBUnodRFpJHRhAN57QEEExmEfk",
  "key45": "hST2XDPw2vjJuSYHbks1hCJcbAyrm3e4VMjz7rjfR7EQP13qofLHHTh9UFK3Z6iiNHMiyQMXfN2Nmo3om3z1LUf",
  "key46": "2oV21mKJJbX4C5rxV5aDcjurCUbY13ETKLyDUdBvQtMLKwDH2m7ZqpUx1V8hNti5DiWkUHrQTA7Khpsnwaa3M68P",
  "key47": "5ZTZRRTeTx5rNM4mB591W7d61AHCvCxbo4JwGkEubMXjXUoFCf4w2XPtiWacd9dr8HQdJk9t3RHBm1eFXsdcod6i",
  "key48": "2RvJCoA2AdfgqsVyHzDX8jfUCWBUn9JrvXxkyNA6WntjCWk6koJDvfBqAh4nji4hf4Er8HhmArXy6GuLhG1qWrk7"
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
