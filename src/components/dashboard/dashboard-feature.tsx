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
    "3bBtagMuGmTAfdfQx1aVgnwuPxcrtf3zSfKQacND64jBCKtetjzLG97qDr7Jc4hVnAu4ePFjVWAurkko3knbgMwr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZEfmWwYPZQX3UiR7vVTBwQm9rVcjcipZGWtKmSkK9wC7fyTufrHXaXM8Vqdqwkx5w1RMy1CVY9hirXZuDXPmJaw",
  "key1": "4vsCfpoamp9Zhx478wDgHu9AdiheJYhLQ3rnZypWM4JsgqHHD2mYAz5AqHDXMNefZhkz8MBbJX8EGbTmsyr5qzGx",
  "key2": "2sxtZJxsavZosFU4xmuALv6sBcj2NH5PfPYCBkWeYJoMTRrdzdXAhmacF3XJKcUPiP2rNhTZggx8Wvqx4hvvPGMZ",
  "key3": "5EW7WB3Ffj6v47zuSBxgFNXzSvUKJsnsHV2hL8uBdCouGWJuxvAbxkzEtZcyCRi3TAdDPFMHGdzXL8e6zjm6Z3kR",
  "key4": "5EpqmqBewBdS3BAV8qyRD2RXqP9cDzWbCtagJHahzLi8ggsu3pmHPceiuHmbJNL79PS6XeKTmmj1aoUYxnXN5eja",
  "key5": "3uZeBCRJQX6hwk3kC1PbpZG73R42wwcu1Lw1pWX7UmDtrDuVWctToCU263YpnVBoNsU51qVJBNV8Q2hVyxk2rnBx",
  "key6": "D9ScdKFE3Tf1AoC1eecjUQYaVKKnYjnxMA1tUm8mFRUfTGPus7BXoUkHMG9TUaLdkE2MwpRsntDCo8GcdxVYBZj",
  "key7": "BDboMu9WNYY6bCSeg6ffyfBwTAB1hp93uV3VTLmUVF6N8S53YKRNGRy4n7ULP7QJEdy1mAwA4nwxpNyGs9X27hG",
  "key8": "5qZsjHbfk9R58MfUgWpLWk8uCjfXPRxW45ZgpozHHdpMRpzSVY46ZgakGempjuu6ge5M11KkLCgjuNZMsEnjKaAZ",
  "key9": "2edbqjDUcunVo7Bw2JE4fPKLX58f2YxxB3PE1TaAAUueDPVqxiyXPrQJykEYfiNoweoCQ8od6YbX8BrzuJ71xabR",
  "key10": "51acqu6G7X2B4DPHXBteMnS22i81Dh2VPQQ5dzPKYAKxLpNnhkm3roEFT6kwzJBdHRKetNd7GisxXvZdBB86Td6C",
  "key11": "4a2Ty2QUhCAtqQn3nJivy6ENMRNLYcnMTij7ycY3MoPzwhbgX4zgdz8LtLmQBtACekQVpRBzzHnNmgcWiGHPhW8q",
  "key12": "4etBCbzHtRugNjk3VCpXUqPPeiqoAMy92hpPtEY8RjmkFaqJ5Sr3LwLjUu4RDsFeqPN5Fr2bF4QiwPFPfqqiG1SU",
  "key13": "5Kk62nSPzNHXwxaAC4CMFDKuTthpwfxmK2oZQEVxBexigYQacdAMxqcAj1LRus5TtyB3CEVnd9x9dpgZPxAa4QeR",
  "key14": "3VFqS2ixrBWqTT4DNAsFedSoGrShjUZCQsV2azHyXS1Zkho9VFZJucTVrPoZ64JbKogmqWLDGDM2ZT6zUrop9fyR",
  "key15": "4V56QQfzPs1wfhi4CErPzGXaQVKDPw8Bi3jJCt7nEqpGz7JacoeaWY3rW4Lq7P4UF5SHaHCSHHKPTNGVJno85AF2",
  "key16": "5U65VPKivMXBBNiiuvg2nnX164hzoYcvWiSSACmP4AhezLJ5FHUKdSHA8HyZb8rdbEVmUQ7eAeunHuJqc8eFujVM",
  "key17": "5pHpLhVYPnejwRivEdwPLSE2dzceLfb4hXRTEXrFuQqa9tBoDKKSD2a42s9SZ97x11XHh6pVDVUB7pLm83UEcZvY",
  "key18": "5EYy9tuPmWuUC9TsG1925dPdiyw2ymuqwhmJ3euwLLawCzyXfvXGjX5qaWbmnfeVP1YwzVRmqXYC22FHzSB6XmRL",
  "key19": "4b4ec4PXbQKK5bG1CwepKNuRY8VYVMahYpYFbXeKo5rw1exCjEkhPPpc34daRWz3XFutPg9vZdXkkQ8VHKVdET1J",
  "key20": "2nbAFuTMagoURedtAJd6s8VouRMrGNLTSXNPhYEshHtConcSdKswsNEBTxvnWms6nRPGAzF7zGWKJe3EPEByeNbW",
  "key21": "28hN4xW2v9JW3NSMHnoJuY4S2iRWmNUreE7os7ji5rekWCzNRnGAXZKM3dCQ6EHfoCEzCCwxBfu5mq6fBTVGrBe6",
  "key22": "47NGAN1sHjmDXgZ2QPj2jDux2CkVqmDMho7P31zRbd1HcBvhZNYXZoNVVqD5d5Wc8nfXzm9XgNZMhz6e7Y3t2iKH",
  "key23": "vU3Qzf8fMJa7gREXqLZ113bTGvURT6iWgvad4Fe3Uf15gkXg2X1wxTLjfEKX3V1TNHtoAjjvhyyUcMvJrC5nrfZ",
  "key24": "4Gh7z67wkvPcCxr3x4FMvQuPw8iiiNJRtGhLCpWMpqQXTJ2grdZimRwAwrC22AkHviQEf9rctgBU9XvPypnJM12x",
  "key25": "5tEL8KGEs9m4La8W8bnpv2xe7gci1ifTjRntb4xfWZCiq7Bs3i5qgGSYHkpQ7uYkBCgvykEigrMzhRZwZMow9Dya",
  "key26": "vsLDYZ3mBF2uUNanyFX39S1D1CJ9YKdjVDH4JNQ7rKPdmWtFPtPiRPLyrCxvtk1GXUK7xuDoAMcZSJURXYQ2ihG",
  "key27": "guk5bYiKUbept5zGkffDVWx4tTiHxngVr4eqfXoua3jfRWDqT91XUiihdCxzLhSMiTsZi3pHR62cQo7xNPo3m24",
  "key28": "3ixX1cPc63LJ22GWLvfSP4tVPpWKKz9YUaH7PL6GjLyLpbhqrAQcy5Tv1ThDwqhSuhrgcEf9zyhNSiMWcS9xBnpg",
  "key29": "4yrsTnzB2Edu3qohieQNwfwpzDYZm5jPYKqQMRWMyWAn9Azn8oaNMc5efpYPmaip79LgVgpuR2HVjQX7byfCHE2J",
  "key30": "3fNag6Pr4cGh4NsPwDC14Lb9FC5zuk473ogHuHKYh2xQC7fGtk41ePZJwMajs6EXtyPqwbt9DLeMzyYM3RNVtUvE",
  "key31": "32mjVNMLMbXCfiirXAzyApaNsQmSMFvAPukjZLHZgvXmmL5wGJdN19z1156h7yBafnp8Z5EHhCfERDNxBopiD7Re",
  "key32": "3A4EBxumDQgDQT6fUZbvLZab6Fi8Mn9YFNuSsaSKiyEEnTXihgYU6AiE9rHdvWE3HsVTe8fUrxirkT6fS3Gu4JHm",
  "key33": "2dqNMNuFst5YnV2QHdGDJiQamk73n2CoSPVB5MLAWfdt2L8x2DyNx7zpK4ta4WGrsdYuVUN6uTB2RRu9gNe7j3dF",
  "key34": "2hN4saMnLsNT9D2LAWUZ7oBuTsrkecwU5xGWv9iaKrsvx7HUHy8eNiomJbYHckkZPeTGvD3PsngfPbyc9oPf48qG",
  "key35": "66xr851ktYaWhuBBng7NzXUUuGDPa65dgUAHJmUQ5VJ3FSdKihwJinTeypoZWRnH1yjZijdaKKze44MSUB1QAs32",
  "key36": "4ATZytKbeCEZBMeSMkQHc62BCn1Zab8eK71UYt1otKYH9wi1VWPDahD7Ju13B5wCd83zCPZepymMXxiEtoseCnLZ",
  "key37": "63xMQMjPwc4Gf6Mdts2Xi9VujYAgFRvuoGnAZBAQ9TvPxagVBC2aStHywaLqjPrfHzEpEx9cUZJfNJSmb5xqZuig"
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
