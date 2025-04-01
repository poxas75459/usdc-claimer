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
    "3bxD2hu7Lv2yYrYs8evLCBtwetRjDRTjCRr8R4PUxrYhWQfdL8tGJ7nDzqNPzRJXpVmXuEwS1ewdwADsRtbWrRuh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Cz7M8F5Ek6wbWmhBvc3Jb2k4NWmvWTntEA7TkcsDZ1aHE2oo5Aeeoxf33U1kujk9nBQcJUWQiVVA1F4344RwYRE",
  "key1": "jDD7APX6qGgWvy6x2jULeuk2QqiXHMbdeMRq4miwJ9EoP7F3daGDVXnqkpsLYGqnWoRbq7WMFdgNmkRPcEs4u4w",
  "key2": "5D9sAUYYPU68PpXPsbzP99GFVKFEG3eWBpyjX7pgV7iEX6dxMhHiteu6cZ4uC8r3zbCpjkAGfekUPLQQYFHXdqPt",
  "key3": "3yWjU4CyPpx7J6MkFHc8ERj9LdJziNejCkiJ5mnre6iGH81WuZo9zJEQi4zhzMUbSKtJqaQf7tTCxhKctijyVCEd",
  "key4": "2WUdDhDBNoj9yqghom3kj6KJtq7oa8e9qxny1j1H4WHZooZhFQjmXPFBHyE8hGnmLNMfJdDSJovKfXcm39B2JTnS",
  "key5": "3yqDiFHpUieP7CG2RcGqBdmSLyysaouYsqVrfrUnXMUWfrJQeFqzjfevYx9pyaCBQ73EJiXdc5piKf4voXLNfQAt",
  "key6": "2f7iVhwz2S7PQKK75ZqaWGBttqDqcd5XjBCM7f1nNzUHkPc2b6wQ2tMC4FkRHGMntPAybm8TT3DaRS6iWj565Hir",
  "key7": "3gCYdH3Lf3qwVGL6vTsTtV9DzvH15wHqDx8yqS1UEBvGFCwrvFoGj29zNs1CSC6KAUHUYT4CDZTsUi8nAi3WyGse",
  "key8": "2tBjbEsULrEvfm2nTwT1vtPdPMRNhPELUcfFuwHbbihiopWBvQodMiVfSTPfujJM8TCgmbwFiFNte1b7mCPbnzn6",
  "key9": "53cSHJoQrgbmB2iMac94Ngtds4k9cYATnCznSA2BwtpHZ2E4QhWB8z4MLd6v8bdSNox9wapfcZ4SWZmyjmWd9zWE",
  "key10": "2MzBy8CGx3zMMR2Abm79aLGdMd745q68LhFe1MRPz8HzzhPqjhkwyoiiwxfmo5cV53HbZM2N1nqoGpNhgs62Q3jA",
  "key11": "2at4sUnWbLAfP3GFt5r1JC3pjtwDEwb1dcCEugdBwiNvxW27YtyY7FmpoXbKYnNRpj7qJpJky8iSsmrQG6kWhbA1",
  "key12": "6tJ1BFwMdg65BHXrvAsHXe1rgWym69nVpHxLivLbN3HoaEEoyBAh6XB42zzsaSycbCzEoVws4BdJ7wd4QrXri4D",
  "key13": "4wmueWvzud8GUVMVagu53LpkyVADFioGWgdzY2Zuo4vQQ6AYY7xGX4LtuEEfhSmrQbyzR2c9RpJ2avBpwJdoq3kg",
  "key14": "ycTFqQZV3jqAm6DjgvH8yZ33hTqv8Ej7f4K1SyFQyKftA1k4U1yxdsSsT8RmTjYgGzVUakWRtPAPPJ2R3ZYFN11",
  "key15": "5mqXTYzRBHe3wcwuGQ9dPB4rJYDK2AYsy8WJnfiwnmQwPAo6LD1p9ptFe6S23ZfXxpUDYtKqXZyPPQZAPJbHZJuy",
  "key16": "2CtAGMztV6xad4cwphqUETYjTuXknbj2KJhBwCnLNj4m1BGtXpVWvDPpX8Hw3KJKQcEkKUZ3Ceo1Hnzm4WeYD9jv",
  "key17": "65zEFt14DuouCwfvzPgEUs5tKp5fs7XiqLXSePWGZNzzik9czDqjNtDWrp3wHCbVRu6vvzPdvF3uuUtFkbWm72DN",
  "key18": "5s5jzf8ZB645bNwZBEQRzrGguj4ZtkDHAQbzBDFkacbVscLxmG39q7FAybSyzhw59cuK2XKDr8bRN8yqrEguQBYK",
  "key19": "yF2gpWnnC5fReKdeKNShahqpNGhoojv9ao81LCWzCff1Q8RFGZvhA1dNSzbgSqV25mAgavLvSjLgkbMB9CVDy9T",
  "key20": "43gMWK2zWAmrARmfgERxEz1xfxjSa8YYXXndjJEV3fjRYzN2Xe9naYasBaFeT7Ah7Y43rig9fAs9KotasLZNghQT",
  "key21": "4yEDs7r5zE9AP2mk1gNnPTQsQdLAatiPDY8m5SAKcPF3nHHuJaQHajTkhEopHJeNz1ReQyNoMjxNfdqBVvvF6HAG",
  "key22": "3ffwaVzGVhEoLnNdnHHqFbzCGzsLhmwdhCJDu2CAtuSQ5HcqnSvtiZ3v6hDKreM8mdEk83gCkmw49ijgpzbeDtvr",
  "key23": "3dchzv5LUX3DgxoZ1w2mfdy1eKUf8G8KznyrH2UZnsF6qBunDketYrTg4wCF9XsquyuSVExqUPooRRAS36DwV2qU",
  "key24": "3aKUd3HaDfVTW86PtvcgG6HKFynUkcboszHQZUCJSJHqV6TJnc4XfqaFjekCeziFQbxF6FctF6jPeg1GBiHeGDS",
  "key25": "FwWdTDNPa3oBXBn6hPqYwtnUW6rvJdKdbCAPPNMPZLN9Z5aVxRfYTe7QsHRj79mG3wq5rmWgw794WG579QBRLNg",
  "key26": "5mBSKRZNqL3dKGBfm4pN7NLM1akTqV5LHPnpuM1DjYxMW78kzKeHPvzwbC4mSS9NTi83qPR2NpZP8RS5KXm5YhSA",
  "key27": "4gsdZtjPArTwthGT6GJL6WoGNbovNfxQis7wkMZtbCHsLwqmvKKmBWZ229hyE7vetrLtDasjj7vXBFAWJ4FU8UdK",
  "key28": "4HkRYA5ccf9dq3gSNVmtmjLPtS2PLXQVmqaRydt9J6MEo2UjP1Jr7yJAxMmJKa8LnBpv3DBQ3QTNAQrP9qD22Mdg",
  "key29": "4gRKpQr4MPzrTRA9sj8P6e5L7b8A8oDA9R31w3tDqG4Z1wcus42LG5JVrSHAQPjpAqx1avUt76mKrMk5p9BXSgWo",
  "key30": "4hUQJ1hxRvhS64w4ZMFfvmgDDC7juAEy8ESvBymxX62P3nM65kWW8ZnHUVQfmuCxiQA26zX8CKcpTGdpmGtose3s",
  "key31": "2rhH516TbjVPVjQ9NWv6ejogswD69VjPcQi9WcWjRo9vqspWGcNG45ptf47Z3SA5XJGEnjh1YYUDGdDJht439sNK",
  "key32": "3som5tkQE2P72JPcFjs5hoYjLhLXegdrNZesCLHsaZVvRP9Fn7TW91DWPos7zsxJxeb6wn2xLKPg4kHQNrEZ7HjS",
  "key33": "5VGDHn1bnsLYjbu4fDhJ9LnH4KznfLvxyMucdAmqdSj1CnsjYzE1GybXQaAx6o19TboeUTTvARouBF5L4K2wzTiH",
  "key34": "4LZYuCFEFKSF1aDyq5MVn4csCxkUv4jfMEBjpG4CUha3nVL35KjkB6DeuQPoowDD1Hs2tGGMMvRu7F1HZq6yAcmh",
  "key35": "6ym4yxChPwmiHSr8H5K2U6smF66ENdhn2oHp6MnAUr7HpaAM9Ev3g92cvTdKBti7fp7LuL9bmSdKjV9kJ3Eom49",
  "key36": "9HA7n4Mr2RvqLM4QMH8xtctU7vDUZyjXh4MyArymsYdCcp9fPLjS8c1QXExZpNywTGdsA4eaSaMsQdnbgB2eE9w",
  "key37": "4ks2iXS4sFiDkXcu28BtmVYsoy2bzGGNqy8EaJkBJ6JbTNbyTG55aXrPfU6ZHtVf6PARCa3TtHGJFJG4KGntqmrG",
  "key38": "5E9X8EzgvKGuwVvXRv9PJUPZBiyjWtW2Vc6UB5yoRMvHvkteMYWBbdCgkrRVFRi8SxFG6BVsLjCygLRzR1BgfGDX",
  "key39": "29W45692rKvNWJQfouNAzE48F3j6v5WWNVTZoL3mZRM9BkcvKDSXcNSBUgCjUzmvMHAtoS6YPwhLACrPubqZQjBz",
  "key40": "4SWWk5eAzcGAJX7QC3UwKAxZsAC1xxhi5sXZYgTcwgkUHAFydWb8SJMvNRSrud1pRsDQnNHkULu8xLJgScm6PeJi",
  "key41": "q3ZZ4bThc2MgErRQY889PYnEw2K5Z6c5Ypqw1YQRF4WmemD3hDqjNByoeApk7QUfrm41KMrotJnHBLBJHuNtVdg",
  "key42": "2m6gQGJL1Fqd9pEMgsbAfEAAbZkwceDsqFjSaKFSnxHraLRwWoDTXbFQJYtqDYvphZyfWeeQbpMHTdxwrZdzFqzE",
  "key43": "4NJQ4CNHLWDehb4A14q9YDjc9yp3oNi2HHZGZCdQJBMoTDyKGVbLEZrNVamsiS3poJ6LU7XWsTqisC8b2DSX6uWY",
  "key44": "29mT15RPesHSgaCQ7LK3JZAMLAFEurK5654vnTb6BL84ede1QEmWt2xy6V1QQJ7E5aRV4KVMxgAEp126o4ZGrc9t",
  "key45": "2PtiZavq69Vv4GeQbzyVvBdTJDRkJKbUwFVt3bSzD43wFDv6AKKCeCwAc9EqxkKFSuT23z8oPd5dLyunbqkUg4CT",
  "key46": "MAN9ngQoPCuGgC8rFY4n8xdig2qYk1hS8wmWUcm2mH8XMaxeFnRfxxXME73BrjQ5mEAPsqSjpwH7hyuJ48qndZv"
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
