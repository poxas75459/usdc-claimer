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
    "32GkMc5snWZLv8JQJdjxBQi1ALscho7k6z7dJb5rvqnPr5FY8ms8iaL7LEqKQof3YQVnvPRivsEkzXY9uiEt3Gbo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KGWdj8p3mLohRnHTG5or7H17C6NeSyR1DkLZKsSzStHoA2mwDfhiG8rCCHGFrqYupqDNebYCmsKnrnxJ1FMRB4",
  "key1": "4tsrNdoEFRSDWaqm5doNSfZDrMz1MNJJk4CY7z1n4phR2DDSXdGRbmFUw7ZKLCrza68wTpfCBLrA5oozrxt6FS6f",
  "key2": "3FfRszXLs76rs3hSHNvD3jph6Ge3bUVVp9MZbB85TNfBTQaDbPTRF7RpU5Nktwkob2DDZwHBKqaQ2xpmxnu6f7Rp",
  "key3": "4EyZXgk4WLfHHvCpC3AKP7WN71GhukCAfPMg3BP75kNMdxw7hWoAKSyCXdrfuPLrouzD9aWH4kcvxPa3cRGPjHz",
  "key4": "4Cgi356gkQFo8qVjakeys7NR63pdJBqXLgpMc7Xdf1BnwYpSrTNE4L55m2dtspL3xThubnscAxEi7pVz764hcZfE",
  "key5": "2kgTRUbkBpY8LcxuuEDBX89jtyZyDPaq9JZhqYvYHcUDGSe3WYTcTchkK2LsS4tggeq87SeW9UFCkYS2GsPfE6uf",
  "key6": "3GiE9Hg7a2FELo238K7gxe275pGD4XKpD51aj5UiM2BXEMQvg9xCvAivN6kJy4Gx3KWoUUrcy3hvhYhCyL8zDMin",
  "key7": "5JSC4jxkvSb8mFD3FCy5VPsnXUfoKb42gzzD24fmb4Exach2TvW2P73ib47uP35Fxpnm8VaneVCkkv5FnFGduDZ8",
  "key8": "2PA69Gn87ePbnmoSqiFXdp52sxGEAs7P12kS3kxTB1mGMSoQcPwGzUpTqFAG68qpJ7cK454utUQ8LFi8wdKtj9PH",
  "key9": "4qZjzyUvULn6GtQSWVvjrVQgFdUrWX4nZrEwwDkefN5bWaQUfV6UoGCSC8MKiQHwLFrMvwK8nYZe9VHtEqbcrFEy",
  "key10": "24PKsPwZPiYD7iXkhisUh5aAsAAnsU4QMg77grQi2fpg1vsc6bRoYGAxt5Nv7hHemFMUq3y5cWdHietm772yqjXB",
  "key11": "4gJUmd8UAzK1AXS7pC8x8xi8jLdy9qPNX8NLuUbFGDKnicruACun8zY6x3LJEtdwX5NhivrnXYmsPJsTRnuzKyCX",
  "key12": "4okTUHwxAdK29Bzfp47WDHm57Kduai7hzVNKzpu8NTTMseC33hHY6Mks48rjKB3CfU2coEWtZ2ehsJa6aXYsWa8G",
  "key13": "2wqJYCd5JgtmMqyPsMj4GvSs7BRkGN8HUv1NDuBuP2FJbroa2d3y838CSgVCzkneaEDQJY65F9drc66ej2GaYoS4",
  "key14": "4NMTH7fHHydts8XXNVvMaXAx2yLcXPcB83L9iztvnWDEW7JgiaE6emb7oAV5WG9QpGTNLnbFk9Ja3gzYb69TufDk",
  "key15": "3PjwujUCrdMJP5qxzeXPQ3yx53gcFRY3H3LMTYQZfdpXsS7UsqK9XegWcgHXbVdc82crfyxHn1Ezst9u4JZZAohq",
  "key16": "4rrgm26Y7dVB2uJLFFy8WgGi19eeYro7YZFkfMxLnc1k86rqr6qtuHgkMmLLTGKr6U6aQG7ErAVbEvNYK4bReN5z",
  "key17": "48R1fsyYt9rMhMthYFjTbFbivPLZvi8eqMoKiT24mTGbG87GssrY1bg4vkXG2aAeZGaGBy8EW6VSpV1gCcxEEChg",
  "key18": "2JjAWoLQG6i5Q6rpXS3pVtrgaG5ArRtyZ8GguLok3R9q9mnA5ksNzKXA1jkidPbo7SsY6JN9ihhfvapNdiFkt6Sd",
  "key19": "2gihw31sCM7FWo55R3fQs4DGyRXAcbCcnS65VPRZU6d4PGaAA5UsZVXG2nL5jErtZeqmjUEXiHyFAhwBPTq4JzHj",
  "key20": "5btAPhZZ72ucXpWPvYc9mss74Kr1YWUM1ELdouMkv1ujVog99iJLAfi2R5w5AuH4saTGR7NspEtSVPyfw4wTYchw",
  "key21": "5nKNhz295jj9fN5Te8FDz8jxraARSQDZpjwoYJxhR58guLwg6K5ug5JQBB9FohpZNryFjviABzJCQ9qgfW1n7y3T",
  "key22": "3oaaiab15FwSG17a9vWVHhpXpdPq7umx9vu2fThh41oWwyYcVTuziXaBF1jCWEtEvzU5uGWzXCjmhwsJ9zPzxXo9",
  "key23": "f9V2WAmxX83shKrhwgs6MZ71rg5rhkorMpQrrxJbVoEQP9oA57gn4ezXVRRProxxiPoJbmVZJzAWLfSTw7ZKaHC",
  "key24": "2awWF8gdKXfiG5EZU5srsJww4xsHbVvq3ighc1WFoFoWkD5KpoLUrYr1yKAkT3Rzo8FSZdKqaGV1P6GdCfJJCawu",
  "key25": "3Mx462Yq8QZ3bvrWnHJeYVPzGRe9mKTavAy8tdqhUi1RhfeQcs8zeLHpmQ5h3bgePmU35YqqzzTKUotQBHxBEWsD",
  "key26": "kELPyAv9kDv4EXHHx1ZFbSUPszNFeDfiAkfrYxw3p9bRwtTjXFUiYRHzVNH2pBNqH1YQ9WdAY81uuNN1APdDCF7",
  "key27": "2hA5CyRK3vnrPMa6qoFT5XU8cUuoXEhdnpyTnjPicrZF4rZ7C7AnLwXiT2Wr34YgDCUU3NhCCBCNVxkkaqJUQsVk",
  "key28": "2MXbo6gStrojHq9WhGXT18EmN5ULjdjCFqrzjMGtogVCX9B28CVAJnZUCgZJhH1gVZiNCpqWcASrneRuFiqvVNmr",
  "key29": "5snw33WNdhz2Phaf9HuicWdpfdGmfhFjWi8hzPSMZ9wYKppAb3oPBgZAN1yLT6y68H6DxvJXu7eeKAH3zViuaEdZ",
  "key30": "4rAe53HP4PSXh5zhqDUN9VvwftMZ6dKobfPjiLfVUdcS4AoZ2mRD5corH8SgXx3ZGJJJ6gq2FGkUvqJ7A3VjrCgq",
  "key31": "3XNy14b387qiM1NiXqCxzWL7eoD5iQn9dLNLYxygjtMskvF6NjXu2xvQ29WQPY6XEAgaNT2aEautP6MMZPYFL84a",
  "key32": "4vNWGdvJGNgcADSDEnWRwThEtnYCxBnNT5ibzQDojgYbdJz3XmGqCrWe6pnPV2kiKzzHUqs6wprxwMFb4Aqn67mY",
  "key33": "4Tq4m4UpfABHJJDLB3AMGTdrkKQPcc1deF6PfaVJbRR3DqRv36iFv7HvZT6JUWAqwLeGcyLdVAqdNkKYrjNv7Y74",
  "key34": "61yjf86u8986q1CaRbMepEcJHLLwes56zscf5BmjSFRnrymyfebVqy2xAHAN1mAgs1yn5mD2W4Lbjie7qEZAW3tp",
  "key35": "5eY4isyP2yrCp2Q4b1weMjXU78Bgq3vteZJDNj6nG2uC4rxBHCXQt36exRaDgm4tvuoCXWPa3M2CZF6TVfXuLS5i",
  "key36": "2khXPSMsM2yJAfmfbM6Yzz2m9SDWunZpfu8r2aJ7QwfTjBgq8nrZ5FYdPmhE9GyPs2Ra2e8PwHL6ZHFc7XpZtxxg",
  "key37": "5VG2zwdHbYr1BxHtmyd6EQRHnjC1Py9MLWcWAaejX1NpKM5Ee8iYJnm17y94XWefXKR1Q4zbFGNrXoPJ8WT2so2x",
  "key38": "2L8hLBRWJBB4oUxqASRd1PwwYV1UGkWR9GDT5X1D8TYE4ZneN9LV19oYrZEhJGL4E47no9JwySNUh6woEuvK6Lub"
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
