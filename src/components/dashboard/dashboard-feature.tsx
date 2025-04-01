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
    "5GxeK4zAHsm4ueFEv76LMgGaGvW3aEGj1Kash3Uz7A8m3ky8uu4jEzVkL2n7nfrUuRXE4J9RMTtvAo3vUmGhoVcS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CwXEZhjL5oBFQJQYy5xSDfCVW5ZgkzgUQqDhoat78z3dAZSRjAN6XDdHsu7NJ5V2vpPZLGzvAksWQaorYg9htPU",
  "key1": "3x6BxaUzGCFM2Jg7Hwqipkn5CKWi6iCGqWA41ARuGQ71pRXCdLWLFzDnv84q9Tyy6eokWkdk7sAMRDP93een2FTe",
  "key2": "3gaJDDNgUefRApd5t976As4wnxdm4nkbx7rYmXNkcB5EpvPSvqjjKvWEoXTU3KKtDXFac79jPTHjJBECwi3k2nqy",
  "key3": "25UoFyEcpxyWJ4ANFsqX5Hpg5GqyXnXBF9tV2PzsiG33nNsax7KSfcbjdhRX1VSdhdfAtPm8U8rRrMTSP91vwtPv",
  "key4": "Dz6GG53McnDa8xefkdb92u4fo3P7sLKtRiNrW3N4U16nSfoL9Rc1fzLjLqTwndMpCs8yVrYYssXztoFBtCASFsy",
  "key5": "293NcVkxQLCnVHXC5mWFeykietUqcXp2EPB4YhHJ9yaEFmUwfNX5SGssJFDPfcMeFRcRskKzCCiptRsJkacYBffZ",
  "key6": "5jePbhVnGyQimSVcW2CucohDDfpqmTBN7AkDD98qvuisUZzaJhwqfFfYqjAQbfWj9p5SRSgPZAf3pExdK14sHExR",
  "key7": "3gmLbHNySWEFRJjNBUZ91p6p6ZyWRDCF3H59MXobgnoAbgQTTFuvPvLr7mDvYWBNGNG6CjV92x9az448D8GuLuiw",
  "key8": "2dKuvjX2L53tjkGvCVYGmoqxFGSzES95YuidzLKSv6pargEKdEK3oeeCapzbokKBq2CTHYKatkHvQTvKbxAGv7rB",
  "key9": "3yNeoUD9wqhwuCFzWdrFoeTNZh15ear5TQ7G1b1i3BZuQWcVnzvW7DNidj76vd61GcPkmAZS8Aox8hASqujR5HPL",
  "key10": "T9ZmMC5rqzu6sPLkhXstBd378oSCruR8QRjWjJ9qu7YEf5VhK8iZJY8tGCL1cxHGyf7MgV3g3T77FAEB3Gn515X",
  "key11": "CwZfoPSHxdL7YvDhP7VjUxHbDb4BP8QSXDjNhYd95p2sEraiciE5QR8rtxGssdpaBvkVztLuSNyMZixLWQJVC94",
  "key12": "3UQ2akEUSBNvhh7mjvgfRkbDVqkDA9Pq3ZyT3Y7FutijpabQiRSes2pjmJonLkzUjnMse7HuUWPE6eaF9TVq7ikg",
  "key13": "pBz9JCTN1fa7peK52Vobg79TXmpi6A1MCkjEZRCuHxE2Bh6SxAUums8Gv5qwL53ZQAYJoTUi8RPAAFNRies3BCZ",
  "key14": "4dBRFMkLD4iXexEB8rqChEB5Hos6k5Cg5uNvcGkBfJENW2GM1a3b97zg28oByNaLC5z4q68xwKmnnayhs5Eadcak",
  "key15": "3aNbTadSGq5vd9KMBfUVPQ2sRNVA5yyRaKM3LVHnqcbjbBZEuFfSi9cVfFXG2k4AmowJV2K3rjQ56QZM5RRWmdhX",
  "key16": "3MNU9pn5262KA9sLFBz6a5ncXRD8LpJ87VBt2R3yQcXYmMPxwWcTV6vi57otK1u3nqPt4BzAXWku6YPdgYyW4Ldr",
  "key17": "3iCGxP9VKLg5AwKFfT4BjZDhSYip3Cdim7F1aWDUN5rrYBHpsFXuZz1wqTQ2GPMQfinwaKWgSFfqhtaQY2oMvfBw",
  "key18": "gfRbcRci8musEVftQsJShW2RLKJ2VvNoFJyMYWTdgQ3kJsiSwFv1FepAss5coqC9vqheTMSxn9Ptcuu86a3ZPVq",
  "key19": "2kv78ASsXw6Bsz8UjQKUPaonVfKN3qivqXMNeH9n6Wd2nmckTSGZBtenFKwQF22vLerHJb2GXXmvH28S6RdcDehP",
  "key20": "53USRnMcZtFAtCaa7mrvze41uJcHnk9TmbbTfC8HrJFaFEqBRRp3XDV9Zxdt2BxWw8TLQXRCGCeqxwyohbJTQDob",
  "key21": "5FCg2aH1HUFLrRrYzWkR1MQQiLssUp753fSnUyfYo9vqrJufWBE8w9UUHtzshKgK8se3G3V8pxF1kLQZfnqSVeb2",
  "key22": "4mhfVPEvrDoZqwh2U1CBwwDLbVgGXDfbLCAFV4eMzVjktHdZERxBXzvfK38APDWzgkYLMUZK3PZk83ab7mwi6JxH",
  "key23": "2JerKuyAZrXWTrATFHEGGBi1PRZnbAAZ5K9YCjTUAfqyQLtyS8JkSrYEYGavMNYAzC8wYPHjPVMH2HMDtqNEw4zE",
  "key24": "aue6voe9HP7HVKaXfj2dAS8n7PAsG4iu7tu6XLt2aKqFMtvFZwCNV5HA3dGULTL8ckN3tjKuUBowqyh3GiMreTS",
  "key25": "3xW1nWi8pzsHy8zev2wTKjgh1nzC6P6xobZXRhUTfanzknPUUBoRpe3XgPKqydxp5rG8TzqnmtxZ64yuHL8yT2pc",
  "key26": "5fAaW3WufTU9G8sqorGY98h3DNzsJFfhPn4A4HTG5KFKPzsktcrxwmrCV2KHzZA3bSBCqomumm9A58obLfNA35b9",
  "key27": "2D3ChmaAd83BroenLVEWfzCviLig17tCprnEmF1MZcrG5pqLjDt1NPKrmQKXpaEs6P93RmbQ97KGpV5vbor1fPk",
  "key28": "2wCQDwDqUDiECDf5LK5ChQgMLkCgMhwQNXXdvJQTFWw5u6KEBAJLpkf4HcRVvrR8va9CQuYy2GaaKZFcSGqiz7om",
  "key29": "2C8zw8wxPctkJgW5S1qUN6wpZrYiVosKzFFu2suiHuia46qubmApzp37VJAkNzpwJm3FXXGRKmST49PcEzwM54F6",
  "key30": "2tTUGDD6XRhfMAzV5yS8chBQcPs52WMtWWhQ7RZ9vU9vFraj2XdCj4dQPg6sm1b8F3gvRwffdzB4gcgKEeRkUYqA",
  "key31": "4WYdwmU7eV9MaphTShcgXtzTF4nDLpG4RFD3AwEftUWGPcBvMyeuSwH5BsAsDqerD3uaPFGgXHxyFGwDM1bW1YsP",
  "key32": "5TYtTZY9SnZBv6yhbKcVXQd4UkY3HxVyoiiub4rBDnhpAB6bKGdQ4HyywC5xG9TLWmaonPxUyqhgnJTTJEx9zdsX",
  "key33": "3f35ibAaJDNKB5y6wqfxZJD2nvKNDsE4Vzu1uYrs4enPZz34MJQ9QKvojtiXgmko38FxBisaj5REnthBoX4ypA1N",
  "key34": "4Ptyafah3hFfUsAaqnwT34smDLZ3tLkqnmi6cD18ZvCkr2JZK85nKiCSnrssrAzEEVeBpAaZ48CKjjGdidy8JXtt",
  "key35": "26LA7Ez3jDzAENsK4HjYkZMEPt3BWow2HSTGWnLjwZojJpBfAE78SstHV89TPCxtnpCUJB9cLHE3CYs62DtXrMEz",
  "key36": "2D6bEYu5YHB3czsmKgfv7bN2x3FgbyVm9gf6ZE1EvxtcjsrXhPNfkgwcqTUFydLoGJzges9AAhE7nzi9mjwWVvA8",
  "key37": "3giMGc8BLky8ggC6cNn6JeZV89BbvkgaAbnjXmLcnUiaArwQSoMW1Azu4WGz9nehy1EWf5wPKxdNYAbAfeNL2idK",
  "key38": "3g6xxiRrupCBwd45chvmqBSCDSxozPQ5y1EQCxi9ii2RURidGhFRGHBK686qUYapkPG4apuGxVCTGHx36GqX4CHc",
  "key39": "4RJ4hmRHTs9wVX7yhLyJfK3YcTt6NxSD3kFF2m4KYyK8FD3zthQzwsQtNh8ZtEatxadq6H7wwV4L5jUie8btSGJ5",
  "key40": "2Ytd87HacJaMW4yCvgh6VfUMTYHgsQ6LikRGDABxtJurMJYQL7acv2fVnPE4i16AZkWAQ6ZvLmkQ5rAQRDwMXJPN",
  "key41": "3LE6ww4u7zzYb9jV663tLrvd5aL2euiBDGrgqEkWKkU1qw8Z8n3fQTxefigRQnVD9fWEivtbXWfE6hyWcVATESKx"
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
