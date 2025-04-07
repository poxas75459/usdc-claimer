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
    "3LFzSSwYaw3aXFPo69dGyPKrPpNUsfAjGT4NTHWJNKhvDhhTv5d6AhqaWkWjr8dbwxUKNKycEqEPEN2VsDmLLfWW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n7eEKCtvMzWH2UU3ZeWpNoGEA1i546yK4nr5zj4BV5nrWauE3dugCJ7DhXrHs1kDnjSLbWZHockpAmMfCzh7YUk",
  "key1": "5SL6LfhhhCV9BP1qGHuNqAwVucKNSidX3XVE6wMh76mRwS57VSkMhG5f32mpoy73UMfyqT28BV1umq16DbWSBSUj",
  "key2": "2oBq3TketnVKBG4b4d6z9ikkdodcFFci9KGR6sBaaJL9ffE4oCs1AvhUv9x255p4gL6akmpQ9gWVGNpbgTWZxBbJ",
  "key3": "5UBFSFRzykEnZM3BAVFiRwSjn7imHv9sYCRFdghsC1Xdfbvn3YJGDH7zHyR1G1Hx3aK9Vwaef4eEKouXzJKtTUDa",
  "key4": "2QctesS7s1Zx1DTYKf7eubkNLEs2zU6zk8PUqqMwNYczUsdr3CAWZfM6SfKcHAtSgLr4aT5ftjdHnWWLskLsJ3vn",
  "key5": "2Tb3dTnwESRueZR8cCcMvzS7qPsEXEeuAqpSopCEWgiyFXJP3rAu5GWbMTUW4eAsqnYjNWneQj8CFZxQ1fTiT5oA",
  "key6": "49u9KsKTdrBQcTKmTEQFFt8R8ag7Bc7g4MqqNgCdT59YKLPjzdahnqnR7idTLkG1qLSmwdKjmDEPSYrQsqAEFLfR",
  "key7": "4v2URTWuynYZ58dQg6huJaGSRHKbqrXPhvUxagTGwPBfJic31JiG1573m16yZVDLfNWHvyADvDFC2PSU9BC8Sej9",
  "key8": "2ZqFH9vwypdKga7JaQXjKxVGfQpUhcnKHkCJ2NQ6rm55LqoFLHcs5qre6W21AXKx5yJyNcrKjSNrPLS7hrFCNQic",
  "key9": "55p1hVZgAPBittpNEy5tw4iGz2vCn4PrUfaDRczHjW2qgMckAupsukKCczajzLWGExidkvWkBZSFuhVTErNty9zM",
  "key10": "oBpxuKws1Tj2umAM8paoRfy5KfsX1kqd7qXVnBFGeqwGkoQb3GqEKVu5R36Mqm2nG4QrSTRTzRwYD3y2ah6ZuKs",
  "key11": "5HUVXJFAPwEvDRCnHv3Ag6Wnyfcz2zZitYuzX1G3NuW113vFe4BYEamcEU1nzbARhkzfKU7nZGfPUkdQYNvDknMt",
  "key12": "4QWR45EDFcJVK6btSwTW1q4Lh6HfkVMinGo6XFEeeMrbBcqByj4NJ4NuBCJfCWNf6C1nQjWDqqL76oMoBcdvHAzD",
  "key13": "4Wru3RSPKKDezQ9BFweaGfco3atAw3E4GimSRP35JUDS77Af2N5yU8MAznfKPMu4E54kVUp1GwBfvosRjNNHfBx5",
  "key14": "4hSnBHbSyapmzybuSxRyxsQhTEEbG1AsHebkSJx6ZHB8Vf9LGWtvrsedWqs1JcQZcMpwRVhnSqDr5CsgYRkE8vGZ",
  "key15": "2r2WkAGgbhZpzzMCG9tXS6vRdZJHbtAroE6Va4sT1WDQYwNJFrxBoZ1ti8x6cX9WBkjEnrAjhCWaDQUfv81EHRza",
  "key16": "3swaSciHSAAtyyH1aoiP5N2uVmYpEX832FLWKSfVewwvPFsXxutHekJWs4ubqbtZNxNd9GBYrNNjg1M9P9xSKiHS",
  "key17": "2d2TX8DBrbSJc4h8uBgsJmv3Y5w5AcGNNyuLvEotYaEkf3TKKgmSy3iuFgEv3yS5iCekh7pDDLmGmvzgvWLQuDiq",
  "key18": "5Q5MGey5AUf5uszUoDMumNRThGdJrkMLN81bMj5sQD7ALLGZLSiymAGwGGHwSCN86tyJQxJ7vjZ5zRTfwxyPKqxs",
  "key19": "3YvC1SRuvxsMN5X9vSaKwuW5h9bk18fCz8giNXR1joECxQBrv1x4FTp4SmGd5KFwNqp1iogqhShgoZvMBkFaLe1p",
  "key20": "21Wv7z3CE8xXXQCYEDMJ6H6YXdCxeNZqMQCJUeYXn73wDeaVes3BvWeARqXhVFyrTqByjrVSw7zq3jGV2A2PKkcv",
  "key21": "3bsRwneTMfUM5CLYi6i9BzFsnPeUiHu54LHdi4ofabHgJQfds8tqCmAmwcEcdj5zXMtEuf8SYvM8Hn2PWaaRyjnf",
  "key22": "5RrELfcJYthrmRvfLBdugBzz9ymxM3c1CvHCQiHvmvReSRgzSNMeLtgFAkBT5SWuR1R4UBBobVHkPAeoTRoGmz2P",
  "key23": "3HMr4QfXkvT2VFt2quZKdCqAzLkcej2enofuwttSnTB2WCFGkQZcgxSbSJ82zPDXVPQusx5vYAfaKHumV4NyfuWS",
  "key24": "2uvdfEPive5RaAfWQLFf45jJfAp2HRARKkscs4VGVzpWTwaLPWvduoLqeJ2iinBDu7ASxSQT3Dnq5go7jn1CN1CF",
  "key25": "pQteMz8vnmSgNmXZiRbF4By86mUx9HqcoTiFJahdoqogPJAj6goc4eSwsxGZZsefPtsScpweZxafgfY5vAyos6A",
  "key26": "4YqaMBFwamfLRRXcrcLTsvdCMMwqHjbBoDiQfdKvn4ZhdWZ9Azj2Qs1iS64jDdr1hkpikhNpE91Kj4H5ZWSRu267",
  "key27": "3DMCamQwtDRx51EUeRr3oihP6scZyJQ6kLD9DzLL3zVEE1FTNdBE4s29DYXfpcFxzJPFnJ3N6kwdZmwCnxR9MgGo",
  "key28": "2qyD5tGU35HwNwsU2vapHfM2e1NRkJBp52KRsRTFhCXVH81PkQRPJ45EzckG7izPdxoXpto4cxAnYmwHp4SYXFG8",
  "key29": "LoUYSZbxsWLawpwUgUDruSc83xw6Gha8EuaMfvvhqtKv14noak9fgJ2BcAazVyMjqAFcJwxtqfXZhVTukutnE7M",
  "key30": "3SrAPqSPmpY2QaLbHrRtC9VsC22r6D4CRUnsh3ipXcTJ8sqX1Ud1NT2EpbZUQf9XBMN4PcSZJNe7jnRWDqq7LmAd",
  "key31": "HzjWRUUsKyPWH544piWJgMDAPiguWvkvAFK2BQqtdGYeXJbnfcdZcrPqBijcccvxAqLHjMwPoAH7gnFWPKfBxRr",
  "key32": "5tuWSnx8MEt4xijFFukUK1JBWpMLFYU3tSzbSuBUCDTq4GkdbqAdCz8WzzMYn41qXaA8BygQxSPpNzHjAN9epSKB",
  "key33": "9AS1kNrtrwEAXuk11brKQgE2tHsrc6HXa6yTiF4vVFdeAMqzPrFV2RNhLN2chKHCBkDzS6AN2oparsGGFL1oCg1",
  "key34": "6cZ2CpESSgFyCm19MHQov4uoznUWGLq42RsUP76DZF2nVA7VYnRp1WoFzgnAqdpvqBsV3FEKuZba78df5DiMJDy",
  "key35": "4d1MvkYZEaMJ5W6a2r4wwVU25XYRgyPjiVvuSnU7moJGKgrmWiDgoKjdQjgBwoR2Vta6EnL4Gn5yqLYFKAsFjk83",
  "key36": "4CMEvZfQdaPWNmp5VRm6eoAaub9ecENDdyfy2VFfK5VfKzNUGwEvqJ7Yx5VYAhT5FTz8zwD2GqocuWvmomL7RcAf",
  "key37": "66e69uLsADG1PCZMdvPuCa6aqufMriw34ctirsJRrLno6BeqYxxDgMSSfTzDyX8StXdUPqGXASLsZX7qqg3kL4xU",
  "key38": "5vSijpR3WbBAvxXq19ay6cAHxdyGSeFGTEWBCnWfTAMtDVpREGfvSV7SzR5rws5s9MmBLUT7LzMoA2235J9Lgokv",
  "key39": "km86zztTqjzA3tTAcNbV4MM8smy5qyZAtJ1R2HrFzZJANQFQHpv49fV9YB9KM8MHbC9jeu2fr4XigpC2rQarQ9b",
  "key40": "3WMzcXekHrA1hiceFtG1Y9WUs89rdm2s5pyzq4TCpgMBoyDptezEpdf3YSx6keaFCEsXQbyqdaGbbNqTas2qJZte",
  "key41": "43GtkotcmZSxaKV2sHi1snU87CVvgF8X2LdY8bzyuisxxdfdPJTgP3h7FbxovMKkakPUEfGea6y57Azqb9bWrbEN",
  "key42": "4vXNb8zYT5gkk7dgHV2LBiedCrnrdBeWmceyBzx3wgpqFpg3bFfDGGWLpGSgNak34MCA5748YyRvJmbbenAkwYob",
  "key43": "4mxLkUaTNuc9EHkPAf9TRsvpfm2CSUfJwkRNUDr39XawPDo4xPhCeviekj1VCPTNqHZkRUxY8cTAqB2RXxW33C7K",
  "key44": "4sgXMRrcvTcrf3WuSJZK2RRb98xVPusmCAu3SDnNimk8rSXtAME1N45G9g53odkU71oC2XGb5jGk72rqUZaFnnkw",
  "key45": "5PXdqHY3Xae8N19kzBo7Jb67tjtbTsTdmtq16S5uNgFXtWCoNTDW5wv7TekvUeAWpoEG2RKQ3kR7c9hZ4ycDL7sg",
  "key46": "3o6aGvuqApmBQuohhTC58ho3H4swmVqttjtyNhjzCH8pwQquZbGL6h6ggxaS8zfULNMgafUhXVAGy23zU71oeGdo"
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
