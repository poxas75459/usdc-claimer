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
    "4Z1kpPw7zapFMAyXFHQmcMo3Mfc9etno51Kaqh4UrroqLh75KZZqd8Yfm7YsAdMBSxewhdToJD3JA5tixPYj7oGP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TLEcb7orjTS4e9m9F2GuWZPgCpJphtfT5V8vaQ3XxxHixE46CEeCwyn8URpX8tDCVBwwoX97StVQqxd6HRpNVtS",
  "key1": "46vvAnK22KjokiRrChh947fcQizJMRJLg8ntutatNhHrzvL9Q5XngANihK58DUGUjnS623shf1sYaXwVA5Jhd81m",
  "key2": "2urDY3NaQBuTwTwxDFrfWKzp1PMA8fZRTc1AjgB3hX4xPYQgkMPfuwmMbfKcznPoheXp7muxP7iVVgcQovnEUG9v",
  "key3": "4Lfj7ghuSbrRmaM1F1GGUNQSYRepwgjTLDcgoWhSX9xrXBHTxet8QHgAco9KnifuZMHVZ5UJ9xBntqvQvoszVykY",
  "key4": "Uf62YPjrLrNX58XZ2UEQtX5sQXDjpfaLRgGNo6rE35ziBZkMv6fMnpNQXmgFXRAX8Rp5dyQSnV391TvEHjDTXPF",
  "key5": "5VeeTmnC36psBpX3zBfwcEYQg4povrUxNT4DiJGuwvc4qucWH9ZiJvPdQfNdNKBvFhzTBtpcdwrSvtwojZpjQwxu",
  "key6": "4EjbFo6d8toSd9pKgJECfdGZL5b4T36dNbGNxEhQu8SmdkApjbrt6bJJDojUeYHxq22cdb7MZVXHNDc7aU99aM5P",
  "key7": "DnuL5sNwm3PKM6wPbyt76Ajy8xC8ECyhgFbPnejC5xUK2gBCpAnRSDGAWBJRi1d8qKna3z4howwDRscniYdxADN",
  "key8": "5UNxcJA6ueV2S83q6ULvwEq2b8Z3qR73ev7NexXEJaKGkmt3VUCTGkChLvxg18erVsL2SGwoDPtW25tYxgb7w34S",
  "key9": "3JgdvXehQeE6wFj5qEwoZ3bKuJHHpzG44a5Sftr376scSNRg7rVdB4MqYf3Q9vsSjJ257yshoq8P3aCVtu8XMzwr",
  "key10": "3tzXyud8VaxmYaYjWxCZqRZeVTxpZzJxWTbc2qLDQ67w2A8xQ7fU8oE354R7iynw43WMi2XpCLFEBHT1EbDwALXT",
  "key11": "2nHN5wZKsJ7twb4uhExauSjMvAMKoqGyVSNFWzbj7vvMUxEZS1wjAd8ckEwhnoAyYqrGDwLRASot3pWC1nZWhg6a",
  "key12": "3qTZ8EDmADSMm9QhzgMiZP84UoSobvamTwBw5H42pB28sDh9MECrfsqwpAWspGeVW8sQUh1Kq4bRGPNgF9YvogdW",
  "key13": "gtemhs1NrD4h6MGiPNZ2zjvUmo8RoPaEqfSahUrng474AoH1qRMyvkJb77DKfE7hxhMAuXgY48baZTpPPxkGVNa",
  "key14": "5D2XWdBt6Y93Xevch9WHa6asjJeaZJGXiBNgyRBUHYoMUX6qV6iCGvFUcZyTke5aKq1ebNPHYBXVpyT3Nu4v6QgJ",
  "key15": "5SDecy9wtKqSUVdqvWiXDN2h4N2uwgYuZJDEPvGeCzByT6ouMe1wK5H86Yn1iDB7ct9bCMSbjshP1PbkY9gAMUxv",
  "key16": "4sop6vpyk5NyMncfuRMkS6UCwoB32wyao9NkHQGSkMqp4o2Gft7PJxHz9WPUMJZZJdRJkMtVgWfh66vBLXnZ5Nkm",
  "key17": "3pQgWtUyLj88mfyg8aPcqiv2u8YucEiEeuwYZY3WGXK4yn6LdZYfnAH36k3fYVEvJKAJ226uBGmUsL8Hrb3e13V2",
  "key18": "3aV1M3JPtUco5Cf2mAvwMHXusU8JVNtxvY9CPKVyyvF5rY1ZfEAAjXpt4EjHKAfjG8QBadnmN2M3TGMoXYxi5eAL",
  "key19": "4xCKDdCMdUYHhpAYuTbFnfT8WszVV4DrmK6fyo8KjJ4Qrhqz4f9ge6cUEqiYLTe3nnJWA3DTbgW37ZFoHUnMeqNp",
  "key20": "31aTu2aUfkLGktM9hhnGYZNiNjLnPAy8ELkHUs6rc5pKoR41fmEFtKYy6KyAQ6dhkeG6PmXhRmAgcpPyoqNuNfF",
  "key21": "2o6A2qiNh6jbhonS3xz1jvUrvBremeThE3DT22m1oPTcqrf3GsY6acdEfJW35TFvnuhLG1EhioEpmgHJbz3uueie",
  "key22": "4e75vSqsbssewpkG7cC7NDiABZ93jFKLhPXHmynkQh1KDtxVXFhJd51DBrkVt6tx4rYvp3hz8o3eYAxgDhaVhtPt",
  "key23": "hzVqohSkpunDQUBQaKCx9gjiTQMmgY5csjRVQditRbSKHTEqSdHNXk5VijmMK7KSVVxJisqqxLsvLP8HfTYpHK9",
  "key24": "pEB3CeySyLVoN6jyDAuS3qQPTzHz8zVcJdwPyYbqMt8UPK61BnobrXiRa3sBedXXwXdxpnvXzJ7L8UFeVcMHYh7",
  "key25": "4GChms1PRprJLGXPhp2FVMtpep4HPUNcArgVo3Q7fMWHGGFYeCKYYSwPgCaTocdtHEFK6HaxtkMkVKRs6suaJV3x",
  "key26": "23eraMh8JxkscjGa4hzJM4zen4mhurmDXsXDfXThLu8Pw4ZHiExqzgpdfziFxSigKE2KkcAfmugBVKyeQZRMQKhs",
  "key27": "77Y96ja7oafJSFRuemdn1rBd7tNehQMkFFzG9kmDM1LwZmLyXYGpGnLJFeDzrrCXXRzC8i4iEbDLy2gutQJe3J9",
  "key28": "4nWwykRmLBpqmyA7nzUnvWx4ysXBReKtExHk1R86CX4CiQw3L3XkgbLXKxTE84zX1j1kMgr97eLaW3uEo6JuqA4",
  "key29": "5JEX1AoDunGtNWZCgA5QTjcZvwsEL7Fui4BKwDfTTbEURFpwVa7H6THY1Mu4W9QUXAjzqN9MTVAkcieqDFYdmUoR",
  "key30": "5MeKEF6263QZiFv3vBEo7Bw6BQrDXQgNpH7AVBwpHL4jw7dAnrjAWBNucTMXLRn9RfTa4diHJGFwURUmHitxpbdx",
  "key31": "F46m7e8dTGTKyP3ErEipqRan7h7YUGEEUhPMvWot4n6xQrXrE2kp8ffowYTEShoofEZ9GUVbd3KcRECWaMQFjPg",
  "key32": "2d69vwgWWoa6ijAkEYxkfUQbPJCU2dLvC1Ze562jtvERw9YkNZ692Q5c7wHBTBpUbZE9cfbVFeU3xeLkPZwYuRJ1",
  "key33": "3Zr39Zj1tzNRuTaLGYchWqREPvN7fY3dZ3m9e5Guc1eLPS7W7znYHG1kpPNzDG2oSiRUihiw5nmABEeLHpuLeQTt",
  "key34": "7b5ga5Pcxj8yv1KmZg1osogmjpQquqUZ4RbBroVhNwwJXt5jwR8AVqLuHjG6o8tvztQyP3FpumhynDDxqFVk67S",
  "key35": "AVBFxRALUmm8u3TwEBmg2W3tpFnAWmWotYFtL7S5kCBS1TundFiEdrZd2YqNjqCX24yAoDGuLUtoUey73xuDFKt",
  "key36": "5cuJBWnHS8jY9YG1fVUYmpyEK36a8jTKMWRNfm4MTYUsof5Khsw1ZW8iYX1TYb24rPtPv8ZNwGXekdYuoDHy5qpc",
  "key37": "2XxdmcWpH2f6o2PYV5UkXkJxo5vrZvSn68Pbhk3kViDqEA3BVtw4WFJy9VzKEC7dHijcKkjiUHXE2EWSD3p1poEv",
  "key38": "BiaDzH5PoosVLswnRNE5kG5hgp8EPQthvwkNsCdaeViPFM9csifxj7cgcX1aTtTpZ8HtS6HADy7m95hq684WYKj",
  "key39": "VgUFhPEquxPRkfzEXaiSsza3HweT7c55WkwJoQYDHFkziBiRWpUf8DJDJcga3Y5ikeHWN6TuHzCcSHxRw8rsZox",
  "key40": "2LgGreR4Hvus3868Cyi2zhhS36ZWRxMRLozxsUQD3znuNtGLgDM9awCyTvEzvhzVNdejdkC9W58ga7sw4fjLHA5C",
  "key41": "Q3qNVhE6U2aHHL15y2SbyVm41ewkP69orgMAxdG78xSRGYx2girjuMYqgD1YCihTjsQnnTnCpwf3VWnVZj8Szsx",
  "key42": "au6rr1iEpXZ3S2NM1DKxvm9YVqPEzaXVy4pF7h748URQQ4yh1VgaShkg8G5UmXJw3NvLi5evKEBsaUEEF8jGFue",
  "key43": "5hCL6NT2Lc6qNy9GtVfBHWQ88qFtWKaSwmarjybKz7YaMkPCprvwvjgnkhYak6nBoDPDcjcHNb3UNWbLfpHSUZyb",
  "key44": "hKvNCpf3jG55YhJCpFtNKsHCkdHGqeeMn66oYCYExcyj2uyWaGsGFDdJZJk2hmeyNtk5vYCzg33ZHt4ZjgfzqhT"
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
