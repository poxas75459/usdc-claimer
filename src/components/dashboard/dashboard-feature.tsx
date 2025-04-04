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
    "44NyaVPxPpAAe5uRepp2doBuousnUNPhnG2kaRSLjFCriKUzutU56cWkvwKbgZqGy96PrPHyeymFjWFWjJXqEvwh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nhmaDCWGsbmkBX9BoidR4Gc9aASRTSNLmZc17UraeZdYEojqqdu6tcktjcfPT37tTG5vVEwzF2BuCedkBYC3VKQ",
  "key1": "5TEq4kTTN66YqAa3aawMSXhprcA57wHcN67BSxEMbmxA1At4o2zf4S8zEfg8iYWEBbPz3Kuia24Yo1w1akFUa4z",
  "key2": "23u7ByQyTFS1rgsor36XVCRJtBa9TBR1wkKSetrLayecnCwkdTnpLKSfwDjz2ENi6keCrnoAKhYhjAuZtsrcPjwb",
  "key3": "25fKPme4fbzLJGPJN4hwMFsZwuNgCBX32tFmBtvntYYzRnB9NibzU3cRuLUxXbX6E2ZzTtC4DoBmuC9b2j7L9kVz",
  "key4": "8zzV1MBL6jQNZngDQtfJiNUaeCf4bstPjy9PjPdb4CS8eZzbR74vJeYvbMs9zTfoS353Sh9kKKauKFTMpEU7W7N",
  "key5": "652MmYiYcqfZCymRJkQfdupMSZeKuShkuhh8gWSKudDRT6qwoJQYv9hFEKiK6nnAaaH56mVGG9N2Md6mThNoxQgu",
  "key6": "5Nur7zggwXzDDPUNPWu1CVSXhHPjQfMskCs6t8Rx4NDkXc4mhtEvVDbdJ5unXUiRhWB3eHczwfMgaFx1YB4NKzcN",
  "key7": "2Pwf11T2iM5AfXzy6FtgPoY77sPYH2xT5Rn1Rai9LMyLnk1SkiUx1rLPp7sC81J1ZVgq2RSFWbowHHCWJkvcXeGp",
  "key8": "2gNY9mZpknxdpQ4qGMVoKDmcSPj7JkrGti8rD1ySAuJ7V5DyZzrTCWX3uRoGp6AAifJAqYkDFXegNN7spj6hcUUo",
  "key9": "5jvVTb7bk8Bu4snTiYk4jQhZmYMAEYkUopuGsLZTdx9nmRCpN8gzfxmfeAxYvp3YUcz2kaQRuFDXqes4vdg6B3Qd",
  "key10": "3ijPDNFDosmHsqTKmYYNPm3W8PyH1mHqNyAFM5UhdbNX6h7bG66cACSJTAhVAbZC319pfxP1dBhhHw9ErUbRe97g",
  "key11": "5PnqskDHsyUDN3FuiHEmu2bJd5qbuJaA2sKjLQZU3WWsCrJjhE84MNvEHvgeQSKjGCmFWtdqa8GQsj7FNds7LU1B",
  "key12": "5tN8yt3TCiwE244U7t6m2AZ1XTFp7FaypcbfNBVSYDN7PVaKsRArm83vzu1Vo4aGnsQdmSDPNppX9wY2NpMkHiRy",
  "key13": "21jVnVTgyziXW7Htc1mbEjP5XRUVmHzmWm1qXNgx34qtE5JZxcPMJshWEipE98xARMCPYs6DyWKdFqcBLSSYoL6B",
  "key14": "4Aa1z1Heg6zm3TqdfHFY7zhAWwCqq2oZp8wg5ZaFnoUZi5Wy3W4v5AuG1MytZ12SNhi6qQxyyBueKcLhjXPm6F54",
  "key15": "5pqaqKRe9sVBmSeMMKUT5AB4bnKKiMJ4JsqpTFJvJKnSTTRn8Zerw2oommkXLAz783t6yFpGxpGzNNu8yRh34Vqk",
  "key16": "4yHbfBvKFfKxxpjmJiBUeQf5z9aFkPpx7yTNV7gtZWNKfBoLnh7g5R3GYet6ydoX3MWsmNUyu85ae6hT4UsS5JK2",
  "key17": "q48cDs1abvja5NCgBLBfAcb7JDGPq7bkSZauC3ZksXuKMfThj3pWgcz5mA13oxGX1AZTxqmHohp4XGDcdAeXwjF",
  "key18": "37JSrEctT6z3h9zEaqwZWnEmXqaqLVy6KzUXJY2uemm7SWsH8draSMQ98eM7TapzfyiYe5kocK14YAusrj2bf2yR",
  "key19": "4iMqFiU8cSghi85MAVqrHRmu9QZFDxUFJDTNAh3FPyh7JPiyAYynZFifPeuhziCULSPGJmiFpS9ecgxcBJ1k5PEp",
  "key20": "48n98zDw5WjiKShJFH2yYAuZFChEUY9wRzcFqdkWcnwdm3yoNNSEEbKErSPndn2tNrPooowBuEK16Pivcbvz52dK",
  "key21": "2dRH47UWu6tJyzQMAZcVo4mvsWGRaN48QE8xYMrvbQjwCbP4hJUQ2tKH3xkRFvTs2gxbRHTA2YKdBLCb8uSWpERG",
  "key22": "4vWMwgs9oCStHKptwGsWiRkJnjYQHAbRxQcZ8SQN2GuhEDsSBwDkkp194NPkQr2HmBe2g3ZCTJod8m5rb4qiSpVa",
  "key23": "QtQ34aGnBJqiZgBirAEP71GrpW8oFJfFKWh23rwV3yHEWVA1Y39crRaZqyAgGK5ZgBYXtambk9bRnR5NxgN9D6c",
  "key24": "3mgU3MkT5ogKZnbqmnkm5S7uzhuH7FivmBsBogkEvLcCi4atq4zqoRkqEsfjzFreYf2ko3CWnetm4qMY3wY3s5CJ",
  "key25": "9CcRnc446zmtGaduLxC6pyKUgbsLDDDJ3xzpyAP62zWRggcMbCQYm44QfVTifgD2YwCshzzzaXn89AjeoxR5MAb",
  "key26": "52u2adUp9JyWJALBGL1MT6yxKKHqgEvUhDZB93uy6CiKnRJSjySjCfHxwGnAPpzY2WiuWJXJz7qcJmrESwsakTaX",
  "key27": "2VXszZjfBoPNZigWHJFFSBBEi7C157ec2i5i4pPz95ZbmJBMNGZ2xhMycj4tCSxy4mZrN1caVAVLtYLhdQLBH8Zj",
  "key28": "2ryp3UUFAn5rFV5JHTKaTrZpkXRyAdUJyT3vJMadX1ELhX1ozBvXHX9hahaJML2nbnPsYnw3U2WM33Qh2MumAEi",
  "key29": "31Wag4B7wk7B8Q8esHmSnPXBnBE9rhn9DFmC6Gsrs71zsBFErsMMMY1JEKVoxmnfVv1sXJjVpm7NzzBz17jgbiEX",
  "key30": "4s8mgepWRm4d8wEwpFueYuwFACBXwwcZL3MbiuHW7wkD7Vhe3BwPRA1qabWNZ41cSDvMcj3wMqdNA2UVQ5DdY1tU",
  "key31": "5eNgABefUPPFrKxFHWL4mZrLRtcVArQRTpko9exModoN2XmJNF9GfHz9cGY6aZZw2Nir55wXAvZmZHhrgfEAnnC4",
  "key32": "2nYM1WkTnM2hGMss2QeU2vW8v2gr3mztQMK8LbzDQcLhmaN8UixU4vfTyYNKcP3nL4D58MFXCd9s3FqDSwGxqiA3",
  "key33": "2sQkb4fSt173H3VnM9CjiSyGrGchxi1gxHKVMsH6kUM1DyiF4Juzj2JfoRzcfxfDWVNdaC8G3Hz5kMyz1qku1Jyj",
  "key34": "5D53fL4SfCuZfBM4fbcJGhkna8JHnvJXXareyu5Cu4VdwERGddtqUG1DamxjG91UWzAafUn39tQ61HxhDKRytqxa",
  "key35": "5S2aj7HJcGqjmWEmUbL1Bx7a2MRf7vXeMpK2r4pZ2VhJiuAYWtjza7LMFNhA1zAboaKMNMKJq4P9EJUDrZKh5UqD",
  "key36": "5uTiAGcTGt1gn3koLK3n9pULEDGm54MDfxSeyVMcpoNx9cX1Rqq3yBwCKde2EdSvaZkGBj9JC75Eb7AoeE4BRYDP",
  "key37": "4wEG8AkdL7cL5i3QnxyNrTyqfQYHmtXjRKVEk87LWHff8maUMH9dE3pJNXK6uowkZsnfvDbidtThZtPsmxGhrVXp",
  "key38": "2DLWCnbedpfyp6hZEEDz8JH62k3yUS9rmw2KhYvHYxYdukgTWsttwcp6JbhvJQFgnE67pfkhacyyT5ot8GrausHX",
  "key39": "5fRWQKUguDNU7a8yViarfKVS9x4fVXKTPuu37HKRGXnF9d4vxiYUUuvWkGcAbFUVv5JhxBTNRLtuRREM7BwBkiEH",
  "key40": "2VUzmfLVvERbuLoMMnLhS65G11JLz6jCWoSddvsqruCws8M8Y5JQJVYoojQaxwEa8Lcif6KbrwSA5DT5UXJahukd",
  "key41": "5wGrm7Z1r5K5MdSr5sWGsbBnRfH5FVDNxysvobBz75wNBng4QoNcVBY3AMwXurAcvxoXvt7czusQSJtUij74oS7z",
  "key42": "5XqLGTPCqCoMYRLoGKk88XVUZapY27cMipw6SRYmwtNuHvbLb3XSBXgxBtoJM1UajRcANxif8XAqRo1Eygeu3BX5",
  "key43": "42Y6PYxPCv79qQy3oUiWugRmmZWt8keviSusTV9tbjdCN5KZTDebR6DX3UXHwJQDBbGKgvTN1iXYMRgRZJLgtQQU",
  "key44": "5mAXZ45RotPPHbrZoSuuy8ZxXJi7rxqCe9jFuVcTX8CFMphBnEGeWgVxQt8suhdo4uvu4bzgTq6FxmPyZmZCw4U2",
  "key45": "q86z3pRmU8rhe4TjEqhUKUuEcwpqWgkUTJcTsyMZ7iMVvkqyEgQMQvVXGbdmBkZw7DPKVVyXtbJuGjgAU5B9hWZ",
  "key46": "5e2Zte8hfkamSQEPSSfzjF3HpKf3mh5Nc8FmsCYJn5nAUTbAnQ4LVqfePmCYRLVmQQD9REEKmFdkUQS5Pphws9ZK"
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
