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
    "3sjbjtTzCnHQ1qSrxWjpkKi4nTL6bn9qtPh3M5CjhiQ7KhbVJPaS7NLXytBkNRRwv6drNoKYLDbRpMfhVJusDVpt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uYtJwKGWJ4TUKN1TpazLJujjkvy7dhUqKnXsEjM3a8SWQEWBxfXwm2Gi5vFTktMLhhmyRE3VDjKjm41xR3HdwJS",
  "key1": "29YBZhprvpvWjZum6Zwo6JJo7p6Et1rGPNG9rg6AicU2iBHK6Bv766WSKBneGMp1QJZ6pDuzaaTgKoa7o2M54QWW",
  "key2": "4uqwzVpTYLBfroUv9PRr8U2wp97TjfWwkqNYUMetwgMcQzf23xYfPEDYpJFY7pFDoTDKZPYFNDYg1HKLqsTaXpSS",
  "key3": "HxEEzLXUDpGsTNaKSwwSiGAuNdQX4vZZP41AdagVrAFvedQA4pvfoA4u7xrDmnBXiiy2mTH2frhuWtvDgEqDNCn",
  "key4": "4UzBpXAjrMWvyrzHodZEw9FVAbdK3g8G55UkPeRUgCFiw4SVMFVpuDCFUybEucC5n5UFNd6zK9boGXjD5cHPaBXW",
  "key5": "9LCEfL17ZpACVg5BJziZGocaLxnYs9V8Sy5NPjtufaeDWG3jGKD6YWXSbLEEWtCe61RNmwuHdBkyR1CkTDZusz5",
  "key6": "44Vsqr2b5Y1cb3rPggCVZFdnzVpi4Bg5K9DjLJkH9M32V3ujK2jGHah83tFMoe7ZSNUC6MGHSVfUZtMW9UcrwgWF",
  "key7": "3vnNU5rBSp5cTamxqLj2r5npVJ9Ho1xsQw6MTTSHxytVb9j6NCXy8ZjPzd6gejktUxpRhYoqmWYPB9Rp7Fows1fq",
  "key8": "K7wVh5DTJ7FVCkyabqEKEbc4PoHoV7cYFK3Xmf8pBwH5KzPNRw7Ry3Exfo4zAcmHHdx1MzFAEm1fgGAZfdV1fxd",
  "key9": "3pvWGxF3J6RyoLX9fkfYp91E5kNc3KxqYiRQKpehaDP6PXaNGqGawcHpP72tq9CiKYjtH9ThM9CsZsDT7reACzfs",
  "key10": "59AK4wSX2RJpJjEpitAsGFRBKJmh7Zyg9aRuucwGR58gyqQs1B7C1JB2M8NjoeYiem4YD2uxBx6CCWN7hLAWJQ7V",
  "key11": "4jAJQBDEhAd2rvstGDvXQBn6FV5rzBmqoKeupzTQNVWKaqjT5VBBtJ6xT579Ubid5tMxAvGsFYf8cg21g4LMQbo3",
  "key12": "2iqNQ8vLqArV4Fk2HEZNUwesG3KrtWFDhW6SWYCz8Amj4QPX76DLHuTJbyUKhn7Jyy3XmYZMnfybjP94gWA75rar",
  "key13": "5z9LfAVW8QWVcQf9SFeuiLQqw6y1oaj8FVtHSy7y13HQh3qZfv4t2p64sgkmTePUVRBCHEc8Ce4XewSN4Gn4L4cR",
  "key14": "3knuZfJRW2CmjupC5sUr4iKU7wngV7VNXCAKyb6E3AkudJdrduxZ8qqXdmxM32dLz8Nk1ARK9JCH4QY32Cm8PNQe",
  "key15": "59VxtB5PmqBRzkG64qgPujEStg14Eb2okhjchY8hhr3eEUkyvhwHjQ3ZFFxhK11xFooVNZusfeFoWMyj569xjZBB",
  "key16": "51YfxQ9fXPCWhtxGki6L4aSsMtJYsbaeEyu9kxbcWcpu2Fj4LevoJ7VG3KoRNiUEsW1NhLjajmCPRYpjYYGjcWfb",
  "key17": "3rcACVtyzkRJbF5ptid8tAkY8fjsBLe8vX47pax72RRd9mFrDZmpoNgdrzKtWMrnArYhwPiuBWdM4nowHVAzr9Pr",
  "key18": "56GdHH4tr47t7h5dDeMxZYUnfP7XRGA73BhWW1zHLnLAc6aJEhkTtybcDkzAf3KQB3GNbpsb5c1yshqP63hHSuK6",
  "key19": "41A1JCt4N1ZCiuj8Dohc8GdQvsRMPWZaQXiKwHQm254SzthcEeBDxLeRzjxRJaUHu9ZyqSJdznkg2buf5wTUo3mx",
  "key20": "5p9gnrcBzgn2fTz2mUefncBd7ahk5BzbxcseuKCN7SRzxcX2Kqu3aB48cV9sB6SPcEikgV5wsSeASo3t8JAdNMRL",
  "key21": "3NwEoJQ9HwgWUQoh9ng2A5SrjNETxMwuKF5LXiU3rME5LBqMAcS9jk2wepNJZkfp4eAj1pfJjo9Rd2GzzGXtX6w1",
  "key22": "4gVvJNnBjoddrG6XaxKqwdgu3NKsQC98U91YDh9w6iC1DaTSkFXUKtBatYcyW1Wwh1csFotY1XuSTZZ4UKmetvHu",
  "key23": "2Hef35Z2oUMyEnJVRWjvqD14RRTHfFnMrmtcrykZ347oSDAJao2whK9QUXZLL2xafzyTpoahsKUTDb7MqAUGazQg",
  "key24": "2wiVTnz8GE9qv3BVYwPTKnJsM3UEJnU3FccTsRN8gHaQhKrWEefxVii3TFwH67yu5E2qsFVThBbcbnKsngJpTKkM",
  "key25": "gbKv5Av8K6MCamFiiDGqHKgrVe7qZACETP2vjgCXohsZRDnmZm8HZGPUt7NwnEkz425j9RUKNYkQnH4iN6teL6W",
  "key26": "jimdaTKFteDzLaxv5Bpk3gMaAsWp9m61bKKaz6qwkERpUhKP3Yx2KraFLCvbKWsAL6Nv9iVSs6oMsyB8YwmU817",
  "key27": "42hUbuT2RA2yrWodhTgk9ACbepMoU54Q6qfpntaWFX78VVEKYkb1oQN4c9ezKYL33LeiC4LSCVk5Fn7p63Xyy166",
  "key28": "2cTyK6ZGvZn84KVJcaQWBzMPQ1sbZsvZzNEeXNqk57sX8CZTD7n1ypzK2zbM9tY54wg3y3dFBvixaKywWAp4MoiA",
  "key29": "5HCQM6TjaKQBDyrSRENhzXY7NVjdXrxo7aQnbPDA2Z63msi47Ys9MRjQZLfob6KM6wZTcnm9MgE46DscK2iZcVM",
  "key30": "28F69JqMsv7HhPPpJANFXa8U9zR3HXe4ZUU3hiQ6CCgcjJkTDqypGkCdixb86LNGD6h4iNAR33qTU7JwKUFSGf61",
  "key31": "2aRdUv4SAXT8zVK692nvcgVFR7DZBgNbUpCaNkcQr6uKGFLRWYEFUeLqGodDvHb3Dy2dE7qneZpW7yV2CtWrw1yC",
  "key32": "5oYf4PMAsc4B5X1JXhHwSiGCDsAp9putrrGjye3BDsa64bFqEJTFEhpQLYHrrqHQd6Dddj16JmaRHpYgVBb3yxXb",
  "key33": "2Bax551Y5ixp2evqAEG2zBnkQRgWqGavNLbiMYbQj8UKe3T9BFWxmBnVdrPAXx8fiXDwoN5KfKVjSFv8t7bnvxqk",
  "key34": "26wSDyfqCrS2oKHXH9T9bNsaBCrGETbQWPMNJTWVcX6kyCc4BYYLmsRW5RuFyP4A4UWDfGYciWYhDRrB5jH5LoU6",
  "key35": "3iAmMvtwUt66zHEnPuFDfGgvugFs6dH9rP5GyPixUZRvhnjKwfaFW1NezVRS7JM2b3treusdzKfYCHB82p2FtFtR",
  "key36": "5wqCJinxLRAq52QPRWUHZg3aXK2X9S5XkibcyLBbLvgWphD6bhEyoJLJz2Kww7CMF2Fuyu7L3Ywf2G92Cppwu6cj",
  "key37": "22fVw4custfAh4hRjdpWR6t31qXSkSbjNbtkzWRrqT1KyLsmZshZcHhh37S9jy1eYheo5jbEjvRH6Kp9AuJEbFXv",
  "key38": "4SeeMmRM6iN1utnZLC7FHKbQq61thmDumVZa391LeKKV8uXDqDTh4YEUNV78hQn2HoVDcXY3tW7UCMTs246KYYn5",
  "key39": "5y7cDsNyJ6c3FPcCnB5CBtT1xpqhWb5DbQT2kfXJ37eRbtCWZSWYhDsiHEubxr7pNrpF8vcCRPgeYbjgcp3378Ww",
  "key40": "2YY4H3dq9HpvsyrQaVD9HKM32bbzFmLGhJURxibcw1CWcJDNYEQhHxEJqfNK4kdyKMApRwWwHgjadASdjj84Pwhp",
  "key41": "2RjfhB783XL4Doyu4dMdrU57NBERmYP2zGT1bUnE9Ct4ar8rpm1X5txf7aevU8LqLc3NazdgpEaE8ZdrDcAr1HrA",
  "key42": "4r6XiKABLZY9fQ3xAcGaichUizeoABcRXM5CAHshNgFTDomr2mp4ZwJPpkPw6e3Z6AqCdbTaRRLKfsGhnJFAeanV"
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
