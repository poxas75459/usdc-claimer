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
    "3hsJGwoQZd1mfzcVe8BjYBMwrrQUDfahCWGPDb3NB6iRrYuWLoeVDf6QgzDCwuut2o6QUwcvChiL7zZKbeRkw3tM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qZFBGZ3u4L3RaNBR3vfPKf6Qz1YU93SWjHF8b4xkeV7Sj9eeiPvVWkTptvCzPXTEynsBQd9N6yEmrbA754grqja",
  "key1": "67phEfsbM1nRnEN9bUnNb9xtkQDyHkXL9zA5oRgp1vqfaBvGw7BsPCEbi46YibFzst6QR3kqvuJmkHfyjrVYoGes",
  "key2": "48FpGsfzn4aQJegCiyxfWPMv5tccWDj9uwGWktt2zDh7RhPAEXFkrBYjCXQPSiidqR2FzHHey15xfrfna8kBbj2r",
  "key3": "bMymXT2KSt49tLZwnKDVxmPJJWepXARikLpYHHXPdFVpj1XGzH59JJT1runGqj3wpKMVSZEoGfyow8syVQCKiUB",
  "key4": "4vgN9UTWC9XL4Qsq7Yg6KzKcM59QGzmcyaCEcKG2GMivuq6JiRrhHbDsGd4sTKwQMGsSLSE5ByQKUWa8Frtt9E1R",
  "key5": "nwwsK4qU8VSWgGBj9nRL8dnefGJA4K3Crd1udVUeoG5m4s9Er1YgVUcF77Yki7JduKfsaTjov8hjY5dXEmdv2eK",
  "key6": "3P5LhpyqbdvaL5wjS6C7PckucNEhbSZ987hGEyvdUZPuyHgYPRvWnNMBUsm6zgH6bxJvo8fFLxGdMGrY1WWCXS33",
  "key7": "3C2egRXxVsG4MVojF3tSY7ZoNg8njZZSdhEmNsoAUwxhitKBczNMxNncNzXUr8oTYYsdJg7eKiDmk24rJUsaqYnq",
  "key8": "5SCx2bcqiBS5tUAXxqrPMYNJeErC2ZGfK4G7ttn7ACnyu544iZFsACre8Seohp9WGDiD35YXkyqowFHjXBUEqDGb",
  "key9": "2FBxzmY8JrGUBqcPoPKJFcHybMHASenchovCbSYLQa6qRhchJ1PX5ZBBmHFeLRBNPZwT8euKrUs2VTpGf2rCnvrA",
  "key10": "5rDVVvUZpuRHCR3ttZmrqMgsSq84gtBedbqmA7RfYsLoLoZqGTnJGRV4cQvg4BhzqFdaV3C9hb9vegwtPvpr8WUX",
  "key11": "2BEPN8ouhzmfDWJsindbFKr2viEDzvfr7PtFRdzrAxTS657cM6ujsQSM2kPK167Mta2MhFzNXPUScW2yWGDVn3Vg",
  "key12": "JqbKsVkeHisBqkRXSJ48xXcidEyCvTJJdYcu4Dax5UEyrDXto93xFGpsLP9iwACg5tCmE8WE2QKcj443pMRjUCB",
  "key13": "4zN4fK4RJSTaxwWJyJJ3J91cToGo3kGasZ3mWVvQBpoVj5x3NKfJmEEA2mPe7VQh4ScTrJS5f963KYSLWU4AGZu6",
  "key14": "3jGE9r1JjMy1VSvHBp3s4Qxfza1LctbpaiK5YuuyUN14wnYJ9QobUrH7HSbEkx6s4qSgftWxXFwzfVo8Z77sfDQ3",
  "key15": "4j9RskcmZzmhJvekyMZW9Dcn21Gxojx3A2eVm86ypUqwcyiPyn8fzx9SBUSimQzWFaQA5VBqUEg6MvNon6WziX9E",
  "key16": "5FudxURz6Ct87wVw8MDvvcmhenVUx3XdiHCwASWXKWShEEee8wnxkPt1oBv2KYvWPyxeuDN2nthYdzGmD3RfiMXT",
  "key17": "2P8sdBBxE1eAdMSy4newtDEsfzwP31vaua77veJyCKvLrugnSJM9Rz5uirERSgwWhVqtaQbNdnE7gH5kfpnypMLw",
  "key18": "3i4DXoDU67MPdEwdT6ufbaheb94MrPeUzw7Sv52YpCHsLUKjjL6nTpvU5ETtu5wL9icHRBcqubRNiA7xfUcrDAsy",
  "key19": "56CKmEeMpMvA9YPFE3Px4qLaQkqPyjCry8UZBS9xzH37cdAnyFwNwqfDRkEbBTRWFqkM4r47sHYKB1z6BP6e97hS",
  "key20": "4n39qaDfjhoADfbmMmJiwVwyVjbfv9QZi9Nbo6Gba3paYdQj73QbYkkoXMkmySS5kpEevSwjqYNcgNHeCBDvVNNU",
  "key21": "3YwnrTw8xDabboJV4nuvh2uAc2G3MMYA7fv1oD9EMSs1DFoG9N9XaBV4fgS2HZY3bAVP2uYYhJDLZTFDCPxrrGQL",
  "key22": "4szTcoL6ovsd31P9vhefuiG1uUTNYor7ZDHgkm1vUp7w6kRkR55SQwGwmeA2WsxKBgRtQdftRGkJZ32s2zcKmBwk",
  "key23": "xJaJ8pS5rqbuTW8Qd427psCEE8sEe8tJXnXenYkgvWEL1Yvd6C3XCS3Gkp1D96RzqArpbzCieTTCNiVmCYiyrNP",
  "key24": "2goJxwosPufBib8ZWrU2W71JJBWVGhhy8Ju7jpWkyQyDUyYZeVMArKkGrmvxUstzazo9Sme7ivYjeDtp3SxXxJhY",
  "key25": "4QFv8ySTvGVrL4ykfQntSioZUsn4JPBHTA1QDQzYBKWZcTqWR5GKQdetwpwxr4wa2m5EpFbg5LDdiB79NH3oFCSt",
  "key26": "5Va2rUsbNoJTbr64GvuXLwyerzj1eJ9Ti7xshFBi9daXCP5sLJtYtNxRiwkSFLutYgb2dCuZv1XF2uA9iai4szWB",
  "key27": "2YbTybaxX474TLczZvrTfBjQYekdH5T61UGqoRADYfswdGPgt2nZhtSzj1zT7qw47ptwx9gFogC153cNQs3FhSZH",
  "key28": "SLi5P7EKHqdi3yAoKThkYMBnKtTheXEk45qcLseEWmfZMHvYUiwqBiBy2GhPMiyWahNKFGp8HfUpPfQxyikfN4U",
  "key29": "2moH5yCYrKFLqmQnjXhb5XMpfermywkLuVvQoxF95vyYbhcEwNebZSNo2JeTz1Yxr6BSdwuVmZ42tyS9ZV9NdV7V",
  "key30": "2kGtPCHxFsydqpcJP29Dq5fjLc6GUgwWr8dH1aY7rgYtCjGKzBXEPoc4noNyvB3hdJpuu2J2poxSPrrMNgFQ4xnM",
  "key31": "2ph9XDyFYJCxUp9xgxwZ3pfhwDd1Q3qGYXZwwCiH37fsqWRCMFcjtfSGNd19PPBs5ZNh8SfKJoGeFRa54BMvvaL6",
  "key32": "3mS325SjudHccBUHFr2jD4cYKj4GmDZF7mjJZzJFTN3PrhbSRNeANfeMPKC16WoMokmSb33Yw6ZzUXeDXoAma1KC",
  "key33": "3Tq6i5XTDFeM6NGH2vpWCXcpXXt6X9s1bviKP9FniibLdWaeXaCWpMHeE9Wo4ojdzpsmue4rAaV7K9H8cVhn1BZG",
  "key34": "EqRHrAFQHzfZkDxTuB4aHiaxd3MGuFdYZXoVoTJbLWXx4mhbpoEU687UaMqnz4XCxmx8hpJpbn9Ury6tc7cAkaA",
  "key35": "39mUBpf3nP3GVYKLfwwxJD4kzzGUtRnmU94UJidNdVN46Md5pUuEvy6E1f5UxVedSopgVDHJWRW5tJHwdCZRwh9X",
  "key36": "27McX31e73JVp4JGFwEqdRtReYF7cR68pxQvBSRzB1QQnYWdjNJUHD4uZrA22bkE1fbw7bfKVUe1yAuwuJBQyHXF",
  "key37": "46Dv9Aw9P9879pkhkMtyUm32CUHDxq31dmBEvFojwBdbg49iUz6pxLaDYJZEgjSyVoU8eKRLWcXY6UwSzLTyuF7j",
  "key38": "gBAE2BQv1PfNzRu35KG2Thvw18Ae181KsNJxz9CVQiDiy1QPkvSfaVhgWfNHS3KfFsgjy6ToYdxCixqtKVKeSXg",
  "key39": "2MNn1HL2DFMr2v7rtB3881o5M1iRkacgSUEWGDCCsmzf6ZzudnrkwbMAnhZqvrYei8GsgjN33tURzLNLDGTupBCL",
  "key40": "4La3NkkcUSfEsuCuhRF1FUT5yLvNiRUyxaWqFkpTZ2qvpeLQndNaY3qopvnxP8Z2iDZihhvUCxgjiU4qeUieLG4g",
  "key41": "Ucp4MQyNb8GGTAPWWHp5ve77JGWUdz8m69EovDqMWkPHzSNQBTZMJbzcVWK1D5zhxnYkn8g18Pjkv5QEvWEsUNd",
  "key42": "2SrB43GMjkmZQMgFuuuJAHveQHUr7UiCNY6iqqcSymdznLmTvAUBNxJPjimUwMfGsV6BX2GxTtqAWRadD5fznyBi"
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
