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
    "52JyhqcpUyiziMdvfiBGyyqs5uefLS2g9DGqQK825QKiig4tcLCxDHnMy83JqmjsmHiNKS1U4Ltw6pyficrqqw8m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VdrfpoQd1Qui271eKUDkpGiFGLcsTHuTXQ3yjd9GwSZLXH3nQgZsazBgRxC38jcjeERwbiek4TqAw2zsHcmgCBp",
  "key1": "2MQkQ7ytkpT8btj2L2Mmu9Lxtu1RYdVW5Rcc68oz1TR2MujKxcZoMAWRAPrsFb7vQGgUYsWuqQGyusbJq1kyNmeJ",
  "key2": "n7d1NEPtM8vDDDxRdm7hj5Z3iLrh9PweujMYi5BBBJzYvVbWfis8GgZsUAtn3WdjZf2DdQSpY1n5KgrURaUUwit",
  "key3": "2WUPH33BzsKMpBntMAqCK1PZBvSAhYqANwttkJmZFt7qKg1dMRSFx5mnaD8AWbxHPuFkX3MZdmv83nwavVBqJB5D",
  "key4": "4rdasSHn2rSykPB8a1wMWeC4X3RJgiauXoNEvbXj4VXNTys5HhAqe9iPL79D5WDkZ3tfFtwYYripURQX1Rtidk7f",
  "key5": "38A4ncfJcALfPQSmszViincMW35k4SKtvxwnKuS7JLYBX7JokE7ksNgL9QYtrQze7sJDTS7gk2J11PFB8GZBvBRL",
  "key6": "4jNKGTRbJ4tGWDwAqA6aqnRUyqJedzx12BckHChDorSH67GVMq2P8dVFJVymQnHyUQj2XJaPnpF9WaTY62gBZKE",
  "key7": "4zDQdv16gDut1JoivEwZ8bUVfu87Q67hUqjW6RJEoNgBTunQdNEoMH1EU4unPawNwBEjYgsU2K7Zj4RGJoX9rqaP",
  "key8": "4KwWQTN1wrCsjdRUsfxXE71n4nKqdExqh8JwfLtBuUL6dzgEFz6zL9VPYY3gnor32LEqKfp7ECQq4qq7E1hmCSFd",
  "key9": "3uBY2nNMLJNhg7ZuA9nb1KfomevcQpTc7SwnxtESB4jN3YfcBwdRV2vWkh8JpZzHof4bKjsvciXKG3aivvJxYrm6",
  "key10": "5fdun5yrZLdpNmuUruxuP3bXPEvz3jF73Ctvw3UtjDNz5nhQUhdHhCaYL4HBwwMFA9zjhyRNuu7LPvu86QBnJHob",
  "key11": "5mtryiQuH3i93xjTiNGmPaj16KTDr95afSrPmb3vkbuqQWJFdX95Us8MLvoEor8dTquuxT5ZmBFPuABzDXNcr5q8",
  "key12": "5N4fJsmrrXjmpXpNZLmN5iCKXhqMFrREXYuW9fdXpR46MpiiDFGTBnPtWQDDmQLpL48qd53EGbr2EYwZWvv5Lvba",
  "key13": "211DhQ5VsdBd8Dxxi5h1vsLCP4soka2JS4mWdgGGj72ksPimbVJizffvNa6DboevoTS9WXAAyxMN9fCxpmf5hvDF",
  "key14": "3vH3dHX27wdrP3NEbe28ueB7A7jh3pv2sgmfGWDcmcd8nJQ1nCmsfHoZFCB7WQnHjzMDYBJAf2GFRjpLYTgvzQ3w",
  "key15": "XQVXYzfzhqKGPKqDp9L11pTjzh8DTSLxpgrKihUZpeemxPwYUiH6m3osDHXnmqbsx9MTbL7FNemCqe7bG268XiB",
  "key16": "g8cBJuBxqQnb3eg7esdeUtJrdUTvCZhM8DrZyk9UWj4M8y9YAUiXs4vj3PHMPbshHxKsfv5AWYDjF8qpFqg7pUd",
  "key17": "3SsjPwdbn95WFjKwN4B9HceZAB5tqijvajvphMp2diniDrydhc3XZ9XtBDVniJwGY1SLAw7XbvCMPcenTPzP5xjQ",
  "key18": "szipge9BrPEyqepvbvoPxcPHZh6ypdA6b73YcHaAt5bE6DG8JZuyrzvqx7DBkEcN6vq3bne2fJ7XTgPvDKrfEde",
  "key19": "34FJeecAdYjKQVnmhWjVu8SrChjq84fWeYfpAEh98tffnV2pGUDR45CGsgHUGpWnGkjRZBD2d9eRiUMetF2KLQxc",
  "key20": "JCddKuFNhALxUmypPsZ1RAmssX2D9He1AW84nhzN3p97Tti8ZZkJcFFEu7vBqLbBnx3whFYEes1xN9vsGjukxbS",
  "key21": "uw4yMwFkiSUgDqS8stztuUpsUriWMuzy4bnzK9zLZM6SmWz1PMMaRJnzd7vBnz17nMJDnQRmqVtEtPfhRcq3iHt",
  "key22": "33py8996JDE1WXCjuhYiiu8sLhuxJTi44y7nsoGWuCTPJbzKQUV5QNtaUbPwKLgqJQVF1J4nWKe5423KZY8H1eEU",
  "key23": "2MXbXk1vs3D5pSmKMbXfWDYqVhZ3L6SiYmvWUkqFbQ4V6BFJnUYPwo21tXrBMFEeHXmPjxj25eQUzUa5NhpkbP8s",
  "key24": "5mAgZYPgcNwQd5stPgov3S1KknFR6srbU7XABNcBUwbJGtzYaUMdMtTDB4p6Y5qdxPYGVS77L5TvecV8NNRB2cPK",
  "key25": "4AmTCSE2AruAQdVxWV588J4U1HpNRgt37D46yhTFuFQDBnSy1fctv7NSSB986pKtes9USGAUWsW1kruYfMJaJP5p",
  "key26": "4ayshccrH36sb4SwN2KoVvN87t6SdWeHyiaowB95H7j3KdUC98whjuQ8pHcukmYVnSRmFoyTQKy7tcyAei6DJWAw",
  "key27": "5JLAayLobAYy3FxGEbt2baNWHt4d7uj9PnnHUvfmUmYohzgsmu1mSFXbRfT8x58TqfLgu2NNwq6WtGpdfMwY8Kvg",
  "key28": "4adNeCRdFEYnzU2Hyf8JvaWuPHZQsCbsDEYBw3PNMy4cSQ3nztTXStmg9SpPaharHH8DDdewxktdTHQbMYN9JJ4J",
  "key29": "5K1p1qBU5PR8DQcHatDmUCiS8gdia695aRuLXqTcpx8iA3ddiPG3ZPPDMiYhbx5Hj24rSaqzjtvt8911yhSwTQ2t",
  "key30": "5VEZZaCPJeqgKUKecnvSpjqVqvNziv8LwyuiMVwsKRr1DuguKHVYZCd4CRtd8zKRXFyCMAxNFYFx2wAerTayszVV",
  "key31": "29USi88QbpxBgfJe3jCUSo2fBXyhp7mkt3kQM5fzob73SLw2JPXD32HqiFPm8wAWQVVyffu6yrJw3W1ojnAxNwGd",
  "key32": "2ceS99WNmFmWdVqVd92GvAdcTjL5Rh7dWnXKP1kUAHLsL1ZwHSCcBT5xmu2itWqd9oETefuZXtYs1xzn5BGf6B8S",
  "key33": "31tM4XZEnagrgA4EFQgqHgGMiXDXUzKFK7D3HiG2Nq9bTNL2havX57dTNwnyUwTociDQLuuW4Y6Mudt1EKEM2JXs",
  "key34": "Z52kHUKJiQYfWQ5KgkeLf53zDeNrFxuczxXCUxMacxLhASEFQi9Zu7V3QRK3DRgUqpKszWsiE5Xq3yu5btSGUZ3",
  "key35": "35UaeL2VwKD8MF9PMHZ6UD2eCMcFooMot5Uev55ZFbXricwYBRKRcVcFB3a5VJ42myeTewmZBZ5P81vr1axFDm2z",
  "key36": "owR1Krb9xyf5tZnp3yVqcZtUtYhDkj4HUYEpE44zzGXRySVzwP8ck1AUW9WqJjCy1aAvPYmxmdviqifXBMn2Uw6",
  "key37": "PmMLSUNLXNg98AGjKHpnUXu4hbzRgpA72212ZR25wsDHGPAX5E6B5a6iho6MWhdH7NNnYKV2dirBkK1uEB9W3aY",
  "key38": "5nbmRfGmvYySFCvYcPZdv4KCyFPQ54hsuuRemJDihYPCycMicBpzn32GiPwNKj7SyripvZhvTLehTusXVTvcpDhy",
  "key39": "4iAnM7Ztp3UnH2jNbft44BfMhdEij5nwvTfDFktcf73iDqsVUgJkT3Tf1khNKue8G7wtvnt5w912jwMA3sNVCcvo",
  "key40": "67E24tuXqVRqWwqyjuCMHahgLURzPDqs9P38U5wnSHLzcdMnsa4QsYTU4hXDk9bEwuoVBnBhd6XyCBQWRvxKGMoL",
  "key41": "632p2TZNKbVQPNLSB3TzddA3QJ5Xr7kZfwxzDUt24Tiw4v9ta4kpKBsDLy5C1PCKYiPn6dvCnDrCaqi1yNda21bY",
  "key42": "4soy96C6wBNVFk6kAEf6rANa3cqc8NWZTaV4RmCbCXpH9vqaAmBhxwks9ZdEKDgiD2uP9uMPanGizfMDJQuS21mn"
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
